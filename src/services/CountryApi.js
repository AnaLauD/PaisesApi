const BASE_URL = 'https://restcountries.com/v3.1';

export async function getContries(limit = 10) {
    const response = await fetch(`${BASE_URL}/all?fields=name,capital,region,flags,`);
    const data = await response.json();
    return data.slice(0, limit);
}