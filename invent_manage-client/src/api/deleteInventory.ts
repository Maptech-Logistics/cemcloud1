import { BASE_URL } from '@/utils/constants';
import axios from 'axios';
import { fetchData } from './fetchData';

// Function to delete data from the API and return all data after deletion
export async function deleteData(id:number) {
  try {
    await axios.delete(`${BASE_URL}/inventory/${id}`);
   return await fetchData(`${BASE_URL}/inventory`);
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
}
