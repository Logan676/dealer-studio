import Home from './Home';      
import { UiProvider } from './store/uiStore';  

export default function App() {
  return (
    <UiProvider>                 
      <Home />
    </UiProvider>
  );
}
