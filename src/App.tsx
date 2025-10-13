import { UserLanguageProvider } from './context/UserLanguageContext';
import Page from './pages/Pages';

function App() {
  return (
    <UserLanguageProvider>
      <Page />
    </UserLanguageProvider>
  );
}

export default App;
