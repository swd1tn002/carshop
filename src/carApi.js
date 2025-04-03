

export async function getCars() {
    const response = await fetch('https://car-rest-service-carshop.2.rahtiapp.fi/cars');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data._embedded.cars;
};

export async function deleteCar(car) {
    // fixme: use the rest api
    return car !== null;
}