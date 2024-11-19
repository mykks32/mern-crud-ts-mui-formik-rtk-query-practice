import { Formik, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useAddBookMutation, useGetBookQuery, usePutBookMutation } from "../bookApiSlice";
import { Book } from "../../../types/bookTypes";

const AddEditBookForm = () => {
  const { id } = useParams<{ id: string }>(); // Get the 'id' from URL params
  const navigate = useNavigate();

  // Fetch book data if in edit mode
  const { data, isLoading: isBookLoading } = useGetBookQuery(id!, {
    skip: !id, // Only fetch if 'id' is provided
  });
  
  const [addBook, { isLoading: isAdding }] = useAddBookMutation();
  const [putBook, {isLoading: isUpdating }] = usePutBookMutation();

  // Initial form values
  const initialValues: Book = id && data ? {
    title: data.title,
    subtitle: data.subtitle,
    author: data.author,
    isbn: data.isbn,
  } : {
    title: "",
    subtitle: "",
    author: "",
    isbn: "",
  };

  // Validation schema
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    subtitle: Yup.string().required("Subtitle is required"),
    author: Yup.string().required("Author is required"),
    isbn: Yup.string()
      .matches(/^\d{13}$/, "ISBN must be a 13-digit number")
      .required("ISBN is required"),
  });

  // Handle form submission
  const handleSubmit = async (
    values: Book,
    { setStatus, setSubmitting }: FormikHelpers<typeof values>
  ) => {
    try {
      if (id) {
        // Edit mode, update the book
        await putBook({ data: values, id: id as string }).unwrap();
      } else {
        // Add mode, create a new book
        await addBook(values).unwrap();
      }
      setStatus({ success: true });
      setSubmitting(false);
      navigate("/"); // Redirect to the book list or home page
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      console.error("Error submitting form:", error);
    }
  };

  if (isBookLoading) return <Typography>Loading...</Typography>; // Show loading state when fetching book data

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {id ? "Edit Book" : "Add New Book"}
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleSubmit, isSubmitting, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  fullWidth
                />
                <ErrorMessage name="title" component="div" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Subtitle"
                  name="subtitle"
                  value={values.subtitle}
                  onChange={handleChange}
                  fullWidth
                />
                <ErrorMessage name="subtitle" component="div" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Author"
                  name="author"
                  value={values.author}
                  onChange={handleChange}
                  fullWidth
                />
                <ErrorMessage name="author" component="div" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="ISBN"
                  name="isbn"
                  value={values.isbn}
                  onChange={handleChange}
                  fullWidth
                />
                <ErrorMessage name="isbn" component="div" />
              </Grid>

              <Grid item xs={12}>
                <Button
                  disableElevation
                  disabled={isSubmitting || isAdding || isUpdating}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {id ? "Update Book" : "Add Book"}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddEditBookForm;