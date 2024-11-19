import { Box, Button, Grid, Typography, CircularProgress, Card, CardContent, CardActions } from '@mui/material';
// import { Delete } from '@mui/icons-material';
import { useGetBooksQuery } from "../features/api/baseApiSlice";
import { useNavigate } from 'react-router-dom';
import BookCard from './BookCard';
import { Book } from '../types/bookTypes';

const BooksList = () => {
    const { data, error, isLoading } = useGetBooksQuery();
    const navigate = useNavigate();



  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', px: 4, py: 8 }}>
      {/* Add New Book Button */}
        <Button  onClick={() => navigate('/add-book')} variant="contained" color="primary" sx={{ mb: 4 }}>
          Add New Book
        </Button>

      {/* Book List Section */}
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography variant="h6" color="error" align="center">
          Error fetching books.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {data && data.length > 0 ? (
            data.slice().reverse().map((book: Book) => (
                <BookCard key={book._id} book={book} />
            ))
          ) : (
            <Typography variant="body1" color="textSecondary" align="center" sx={{ gridColumn: 'span 4' }}>
              No books available.
            </Typography>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default BooksList;