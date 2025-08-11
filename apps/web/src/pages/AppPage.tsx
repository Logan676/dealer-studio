import Home from './HomePage';
import { UiProvider } from '../context/UiContext';

export default function App() {
  return (
    <UiProvider>                 
      <Home />
    </UiProvider>
  );
}
