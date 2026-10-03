import React, { useState } from 'react';
import { Home } from './views/pages/Home.jsx';
import { Loader } from './views/components/Loader.jsx';
import { CustomCursor } from './views/components/CustomCursor.jsx';
import { useLenis } from './hooks/useLenis.js';

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useLenis();

  return (
    <div className="relative min-h-screen bg-[#080608] text-[#F4E6CE]">
      <CustomCursor />
      
      {!isLoaded && (
        <Loader onLoaded={() => setIsLoaded(true)} />
      )}

      <Home />
    </div>
  );
}

export default App;
