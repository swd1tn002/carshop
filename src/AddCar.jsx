//syksy 2024
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


    return (
        <>
            <h1>Syötä uuden auton tiedot</h1>
        </>
    );
}