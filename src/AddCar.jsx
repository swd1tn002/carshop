import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useState } from 'react';


export default function AddCar(props) {

    //state variable where you put car data
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        modelYear: '',
        price: ''
    });

    //boolean variable for dialog (open = true, close = false)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = async () => {
        console.log("AddCar/handleSave", car);
        await props.addCar(car);
        setOpen(false);
        await props.loadCars();
    }

    return (
        <>
            <Button onClick={handleClickOpen}>New car</Button>
            <Dialog open={open} onClose={handleClose}>


                <DialogTitle>Add car</DialogTitle>

                <DialogContent>

                    <TextField
                        label="Brand"
                        value={car.brand}
                        onChange={(event) => setCar({ ...car, brand: event.target.value })}>

                    </TextField>
                    <TextField
                        label="Model"
                        value={car.model}
                        onChange={(event) => setCar({ ...car, model: event.target.value })}>

                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}