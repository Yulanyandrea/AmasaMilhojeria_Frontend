import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import client from '../feature/products/apollo-client';
import store from '../app/store';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>

    </Provider>
  )
}
