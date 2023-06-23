import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import router from "./routers/router";
import { store } from "./stores/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
