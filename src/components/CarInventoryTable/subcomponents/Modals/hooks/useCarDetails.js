import { cloneDeep } from 'lodash';

const useCarDetails = () => {
  const carToCarDetails = (car) => {
    const carDetails = cloneDeep(car);
    carDetails.availability = carDetails.availability ? 'In stock' : 'Out of stock';
    carDetails.price = carDetails.price.replace(/^\$/, '');

    return carDetails;
  }

  const carDetailsToCar = (carDetails) => {
    const car = cloneDeep(carDetails);
    car.availability = car.availability === 'In stock' ? true : false;
    car.price = '$' + car.price;

    return car;
  }

  const generateCarId = (cars) => {
    const lastAddedCar = cars.reduce((previousCar, currentCar) =>
      previousCar.id > currentCar.id ? previousCar : currentCar,
      0
    );

    return lastAddedCar.id + 1;
  }

  return { carToCarDetails, carDetailsToCar, generateCarId };
}

export default useCarDetails;