import { Button } from './components/Button' //import component Button form file "Button.tsx"

function App() {//create component that represents the application
  return ( //return app components that structure the HTML file
    //the frag bellow has to be used when returning more than one tag, because return works with just one tag but it can have others inside
    <> 
    <Button/>
    </>
  );
}

export default App; //export App tobe used in "index.tsx"
