import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useState } from 'react';


export default function EditCar(props) {

    //state variable where you put car data
    const [car, setCar] = useState(props.params.data);

    //boolean variable for dialog (open = true, close = false)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = async () => {

        console.log("save car ", car);
        console.log("url ", car._links.car.href);
        await props.updateCar(car._links.car.href, car);
        setOpen(false);
        await props.loadCars();


    }
    return (
        <>
            <Button onClick={handleClickOpen}>Edit</Button>
            <Dialog open={open} onClose={handleClose}>


                <DialogTitle>Update car</DialogTitle>


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