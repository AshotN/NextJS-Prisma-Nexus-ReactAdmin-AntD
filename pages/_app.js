// import App from 'next/app'

import { request } from "graphql-request";
import { SWRConfig } from "swr";
import "../node_modules/antd/dist/antd.css";

const App = ({ Component, pageProps }) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (query) => request("http://localhost:3000/api/graphql", query),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
};

export default App;
