import { describe, test, expect, beforeEach, afterEach } from 'vitest';
import { getCars, deleteCar } from './carApi';

describe("Car rest api", () => {

    beforeEach(() => {
        return resetDatabase();
    });

    afterEach(() => {
        return resetDatabase();
    });

    test("fetching all cars", async () => {
        const cars = await getCars();
        expect(cars.length).toBeGreaterThan(1);
    });

    test("deleting a car", async () => {
        const carsBefore = await getCars();
        const deleted = await deleteCar(carsBefore[0]);

        expect(deleted).toBe(true);

        const carsAfter = await getCars();
        expect(carsAfter.length).toBe(carsBefore.length - 1);
    });
});


async function resetDatabase() {
    const response = await fetch("https://car-rest-service-carshop.2.rahtiapp.fi/reset", { method: "POST" });
    return response.ok;
}