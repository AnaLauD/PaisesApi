const BASE_URL = 'https://restcountries.com/v3.1';

export async function getContries(limit = 10) {
    const response = await fetch(`${BASE_URL}?limit=${limit}`);
    const data = await response.json();
    return data;
}