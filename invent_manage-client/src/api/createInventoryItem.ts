import axios from 'axios';
import { BASE_URL } from '@/utils/constants';

export async function createInventoryItem(url: string, data: any) {
    console.log(data);
    // console.log("url");
    try {
        const response = await axios.post(BASE_URL + "\\inventory\\", data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
