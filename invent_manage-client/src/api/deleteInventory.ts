import { BASE_URL } from '@/utils/constants';
import axios from 'axios'

// Function to delete data from the API
export async function deleteData(id:number) {
    try {
      const response = await axios.delete(`${BASE_URL}/inventory/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  }