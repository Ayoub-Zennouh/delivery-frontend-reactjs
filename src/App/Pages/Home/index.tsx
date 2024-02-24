import { Box, Button, Container, Grid, Paper, TextField } from '@mui/material'
import CustomAutocomplete from '../../Components/Autocomplete';
import Background from '../../../assets/background.jpg'
const Home: React.FC = () => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 1, width: 1, backgroundImage: `url(${Background})`}}>
            <Box component={Paper} display='flex' gap={1} p={2}>
                <CustomAutocomplete label='From'/>
                <CustomAutocomplete label='To'/>
                <TextField variant="filled" sx={{ width: 100 }} type='number' size='small' placeholder='Weight'/>
                <Button variant='outlined' size='small'>
                    Search
                </Button>
            </Box>
        </Box>
    )
}

export default Home;