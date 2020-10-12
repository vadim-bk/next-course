import NextNprogress from "nextjs-progressbar";
import { Provider } from "react-redux"
import { createWrapper } from "next-redux-wrapper";

import store from "../store/store";
import "../styles/main.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <NextNprogress color="yellow" startPosition={0.3} stopDelayMs={200} height={3} />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp);
