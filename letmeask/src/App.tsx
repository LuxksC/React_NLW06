import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Toaster } from 'react-hot-toast';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext'



function App() {//create component that represents the application


  return ( //return app components that structure the HTML file
    <div>
      <div>
        <Toaster
        position="top-center"
        reverseOrder={false}
        />
      </div>
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/room/new" component={NewRoom} />
            <Route path="/room/:id" component={Room} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App; //export App tobe used in "index.tsx"
