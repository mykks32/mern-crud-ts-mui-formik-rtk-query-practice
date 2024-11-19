import { Card, Box, CardContent, Typography, Grid, Button } from '@mui/material';
import { Book } from '../types/bookTypes';
import { useNavigate } from 'react-router-dom';
import { useDeleteBookMutation } from '../features/books/bookApiSlice';

interface BookCardProps {
    book: Book; // Book type prop
  }
const BookCard: React.FC<BookCardProps> = ({ book })=>{
    const [deleteBook] = useDeleteBookMutation();
    const navigate = useNavigate();
    const handleDelete = async () => {
        await deleteBook(book._id as string);
        navigate('/');
    }
  return (
    <Grid item key={book._id} xs={12} sm={6} md={4} lg={3}>
    <Card>
    <CardContent>
      <Typography variant="h6">{book.title}</Typography>
      <Typography variant="body2" color="textSecondary">
        {book.author}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {book.isbn}
      </Typography>
      
      {/* Buttons container with flex layout */}
      <Box display="flex" justifyContent="flex-start" alignItems="center" mt={2}>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={() => navigate(`/edit-book/${book._id}`)}
          sx={{ marginRight: 2 }} // Adds space between buttons
        >
          Edit
        </Button>
        
        {/* Delete button aligned to the right */}
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          sx={{ marginLeft: 'auto' }} // Aligns the delete button to the far right
        >
          Delete
        </Button>
      </Box>
    </CardContent>
    </Card>
  </Grid>
  )
}

export default BookCard