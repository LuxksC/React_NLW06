import { createContext } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

export const TestContext = createContext('')

function App() {//create component that represents the application
  return ( //return app components that structure the HTML file
    <BrowserRouter>
      <TestContext.Provider value={'Teste'}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/room/new" exact={true} component={NewRoom} />
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App; //export App tobe used in "index.tsx"
