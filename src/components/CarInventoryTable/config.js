const API_URL = `https://myfakeapi.com/api/cars`;
const SEARCH_DELAY_IN_MS = 300;
const PAGE_SIZES = [10, 25, 50];
const EMPTY_CAR_DETAILS = {
  car: '',
  car_model: '',
  car_vin: '',
  car_color: '',
  car_model_year: 2000,
  price: '0.00',
  availability: 'In stock'
};

export { API_URL, SEARCH_DELAY_IN_MS, PAGE_SIZES, EMPTY_CAR_DETAILS };