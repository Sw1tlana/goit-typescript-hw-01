import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com";

interface UserData  {
  id: number;
  name: string;
  email: string;
}

export async function fetchData(): Promise<UserData[]> {
  const apiUrl = `${url}/users`;  
  try {
    const response = await axios.get<UserData[]>(apiUrl); 
    console.log(response.data);
    return response.data; 
  } catch (error) {
    throw new Error(`Error fetching from ${apiUrl}: ${error}`);
  }
}