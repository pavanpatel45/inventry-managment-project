import CreateOrder from "./pages/orders/CreateOrder";
import { Provider } from 'react-redux';
import { store } from "./context/store";
function App() {
  return (
    <Provider store={store}>
      <CreateOrder/>
    
    </Provider>
  );
}

export default App;
