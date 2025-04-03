

export async function getCars() {
    // fixme: use the rest api
    return [{
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
    }];
}

export async function deleteCar(car) {
    // fixme: use the rest api
    return car !== null;
}