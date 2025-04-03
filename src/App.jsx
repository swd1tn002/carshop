import { CarTable } from "./CarTable"
import { AppBar, Toolbar, Typography, CssBaseline, Container } from '@mui/material';


// fixme: add MUI appbar and some styling
function App() {
  // fixme: add header

  // fixme: call the carApi.getCars, useState and useEffect to get actual data
  return <>
    <CssBaseline />
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h2" component="h1">
          Car shop 🛻
        </Typography>
      </Toolbar>
    </AppBar>

    <CarTable cars={[{
      brand: 'Ford',
      model: 'Mondeo',
      color: 'Red',
      fuel: 'Diesel',
      modelYear: 2013,
      price: 17500,
      _links: {
        self: {
          href: 'https://car-rest-service-carshop.2.rahtiapp.fi/cars/7660'
        },
        car: {
          href: 'https://car-rest-service-carshop.2.rahtiapp.fi/cars/7660'
        }
      }
    }]} />
  </>
}

export default App
