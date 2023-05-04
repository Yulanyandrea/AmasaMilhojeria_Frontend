import { ApolloClient, InMemoryCache } from '@apollo/client';

const base = process.env.BASE_URL

const client = new ApolloClient({
  uri: base, // la URL de tu servidor GraphQL
  cache: new InMemoryCache()
});



export const getAllProducts = async () => {
  const response = await fetch (`${base}`);
  const data = await response.json();
  return data
}
