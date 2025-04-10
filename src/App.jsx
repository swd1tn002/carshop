import { useEffect, useState } from "react";
import { CarTable } from "./CarTable";
import { AppBar, Toolbar, Typography, CssBaseline, Stack } from '@mui/material';
import { getCars, deleteCar } from "./carApi";


function App() {
  const [cars, setCars] = useState([]);

  async function removeCar(car) {
    const success = await deleteCar(car);
    const updatedCars = await getCars();
    setCars(updatedCars);
    return success;
  }

  useEffect(() => {
    getCars().then(carArray => setCars(carArray))
  }, []);

  return <>
    <CssBaseline />
    <Stack flexDirection="column" minHeight="100vh">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2" component="h1">
            Car shop 🛻
          </Typography>
        </Toolbar>
      </AppBar>

      <CarTable cars={cars} removeCar={removeCar} />
    </Stack>
  </>
}

export default App
