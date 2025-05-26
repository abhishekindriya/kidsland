import axios from 'axios';

export async function authLogin(values, expiresInMins = 30) {
  console.log(values);
  const username = values?.email;
  const password = values?.password;
  // return false
  try {
    const response = await axios.post(
      'https://dummyjson.com/auth/login',
      {
        username,
        password,
        expiresInMins,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // includes cookies like refresh token
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error.message);
    throw error;
  }
}
