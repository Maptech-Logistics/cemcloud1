import axios from 'axios';

export async function getItemData(url: string, id: string) {
  try {
    const response = await axios.get(url + id);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}