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

export async function createItem(url: string, item: object) {
  try {
    const response = await axios.post(url, item);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function updateItem(url: string, id: string, item: object) {
    try {
        const response = await axios.put(url + id, item);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
