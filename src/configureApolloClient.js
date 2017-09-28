import {
  ApolloClient,
  createNetworkInterface,
} from 'react-apollo'

export default function configureApolloClient() {
  const networkInterface = createNetworkInterface({
    uri: process.env.REACT_APP_GRAPHCOOL_API_URI,
  })

  // set auth header: http://dev.apollodata.com/react/auth.html#Header
  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }

      const token = localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_KEY);
      req.options.headers.authorization = token ? `Bearer ${token}` : null;
      next();
    }
  }]);

  return new ApolloClient({ networkInterface })
}
