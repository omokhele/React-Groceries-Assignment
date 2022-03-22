
import './App.css';
import Grocery from './components/Grocery';
import groceries from './components/Groceries';

// import CheckPurchase from './components/CheckPurchase';
const groceryList = groceries;

function App() {

  return (
    <div className="App">
      
        <Grocery groceryList={groceryList}
        
        
        //  isPurchased = {Purchased}
         
         />
        
    </div>
  );
}

export default App;
