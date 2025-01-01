 
import './App.css';
import Product from './product';
import { Provider } from 'react-redux';
import store from './redux/store';
import User from './user';
import Form from './form';


function App() {

  return (
    <div className="App">
      <header className="App-header">
       <Provider store={store}>
        {/*    
<Form/>
        */}
{/* <User/>  */}
        
<Product/>
            
             
   </Provider>
      </header>
    </div>
  );
}

export default App;
