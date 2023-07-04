import { API_URL } from '../config';
import axios from 'axios';

const useCars = () => {
  const fetchCars = async (setCars, setErrorMessage, setIsLoading) => {
    try {
      const response = await axios.get(API_URL);

      setCars(response.data.cars);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { fetchCars };
}

export default useCars;