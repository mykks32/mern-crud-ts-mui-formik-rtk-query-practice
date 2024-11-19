import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
  } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
      <AppBar position='static' color='primary'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <CatchingPokemonIcon />
          </IconButton>
          <Typography onClick={() => navigate('/')} variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Practice Mui, Formik, Redux
          </Typography>
        {/* <Button color='inherit' onClick={() => navigate('/add-post')}>Add Post</Button> */}
        </Toolbar>
      </AppBar>
    )
  }
  export default Navbar
