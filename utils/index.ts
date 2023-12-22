export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = (basePricePerDay + mileageRate + ageRate) * 100;

    return rentalRatePerDay.toFixed(0);
}

export async function getCar() {
    const headers = {
        'X-RapidAPI-Key': '31716c2800mshddab4f60d73a8bbp1ba9a3jsne2592210fc56',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers });

    const result = await response.json();

    return result;
}