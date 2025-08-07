import Home from './HomePage';
import { UiProvider } from '../store/uiStore';

export default function App() {
  return (
    <UiProvider>                 
      <Home />
    </UiProvider>
  );
}
