import { AppRouter } from './AppRouter';
import { testAPI } from './test-api';
import { preloadAllSounds } from './sounds';
import { useEffect } from 'react';

function App() {
  // Make test functions available in browser console for testing
  if (typeof window !== 'undefined') {
    (window as any).testAPI = testAPI;
  }

  // Preload sounds on app mount
  useEffect(() => {
    preloadAllSounds();
  }, []);

  return <AppRouter />;
}

export default App;
