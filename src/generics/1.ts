import axios from 'axios';

const url = "https://6607e98da2a5dd477b13abca.mockapi.io";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

interface UserData  {
  id: number;
  username: string;
  number: number
}

export async function getUsers(): Promise<void> {
  const apiUrl = `${url}/contacts`; 
  try {
    const users: UserData[] = await fetchData<UserData[]>(apiUrl);
    console.log('Users:', users);
  } catch (error) {
    console.error('Error:', (error as Error).message);
  }
}
