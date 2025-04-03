import { useState } from 'react';


export default function EditCar(props) {

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
        <div>
            <h1>Editoidaan auton tietoja</h1>
        </div>
    );
}