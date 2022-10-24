export const BASE_URL = 'http://10.58.52.108:3000';

export const api = {
  signup: `${BASE_URL}/users/signup`,
  signin: `${BASE_URL}/users/signin`,
  wishlists: `${BASE_URL}/wishlists`,
  products: `${BASE_URL}/products/men`,
};

export async function fetcher(destination) {
  const res = await fetch(api[destination]);
  const data = await res.json();
  return data;
}
