import { useEffect, useState } from "react";
import { CarTable } from "./CarTable";
import { AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';
import { getCars } from "./carApi";


// fixme: add MUI appbar and some styling
function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars().then(carArray => setCars(carArray))
  }, []);

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

    <CarTable cars={cars} />
  </>
}

export default App
