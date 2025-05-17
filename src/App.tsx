import Dashboard from "./pages/Dashboard";
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <div className="font-sans text-[#1e1e1e] bg-[#f9fafc] min-h-screen">
        <Dashboard />
      </div>
    </Provider>
  );
}
