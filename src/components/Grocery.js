import { useState } from 'react';
import './Grocery.css'




function Grocery ({ groceryList }) {

    const [groceries, setGroceries] = useState(groceryList);
    
    

    // const [isPurchased, setIsPurchased] = useState(false)

    // const itemPurchasedTrue = () => {
    //     setIsPurchased(true)
    // }

    // const itemPurchasedFalse = () => {
    //     setIsPurchased(false)
    // }

    // const togglePurchase = event => setIsPurchased(!isPurchased)

    // if (isPurchased) {
    //     return <button onClick = {itemPurchasedTrue}>Purchased: {isPurchased}  </button>
    // } else {
    //     <button onClick = {itemPurchasedFalse}>Purchased: {isPurchased} </button>
    // }



    const showGroceries = groceries.map((grocery, index) => {

    return (
        <div className="style">
            <h3>Grocery List</h3>
            <p>Item: {grocery.item} </p>
            <p>Brand: {grocery.brand} </p>
            <p>Unit(s): {grocery.units} </p>
            <p>Quantity: {grocery.quantity} </p>
            <button>Purchased {grocery.isPurchased} </button>
              
     </div>

        
    )
})

const [newItem, setNewItem] = useState("")
const [newBrand, setNewBrand] = useState("")
const [newUnit, setNewUnit] = useState("")
const [newQuantity, setNewQuantity] = useState("")
const[list, setList] = useState([])
const [editable, setEditable] = useState(true)
const toggleAddButton = event => setEditable(!editable)



    const handleSubmit= (e) => {
        e.preventDefault()
        // console.log(newItem)
        // console.log(newBrand)
        // console.log(newUnit)
        // console.log(newQuantity)
        const data ={newItem, newBrand, newUnit, newQuantity}
        if(newItem && newBrand && newUnit && newQuantity) {
            setList((ls)=>[...ls, data])
            setNewItem("")
            setNewBrand("")
            setNewUnit("")
            setNewQuantity("")
        }
    }
        return(
            <div >
                <h1>Groceries </h1>
                {showGroceries}
                <div className="style">
                
                <form onSubmit={handleSubmit}>
            
            <h3>Grocery List</h3>
            {
                  list.map((a)=><div>
                      <li>Item:{a.newItem}</li>
                      <li>Brand: {a.newBrand}</li>
                      <li>Unit(s): {a.newUnit}</li>
                      <li>Quantity: {a.newQuantity}</li>
                      </div>
                    )
              }  
            <ul>
            <div className="new"> 
            <li>Item: {newItem} {editable ? <input type="text" value = {newItem} placeholder="enter" onChange = {(event) => setNewItem(event.target.value)}/> : null} </li>
            <li>Brand: {newBrand} {editable ? <input type="text" value = {newBrand} placeholder="enter" onChange = {(event) => setNewBrand(event.target.value)}/> : null} </li>
            <li>Unit(s): {newUnit} {editable ? <input type="text" value = {newUnit} placeholder="enter" onChange = {(event) => setNewUnit(event.target.value)}/>: null} </li>
            <li>Quantity: {newQuantity} {editable ? <input type="text" value = {newQuantity} placeholder="enter" onChange = {(event) => setNewQuantity(event.target.value)}/>  : null} </li>
            </div>
        
            </ul>
            <button>Purchased</button>
            <div className="button">
            <button onClick={toggleAddButton}>
            { editable ? 'Hide' : 'Add Item'}
            </button>


            </div>
        </form>
             
                

                
            </div>
          
    
    </div>
        )
}

export default Grocery