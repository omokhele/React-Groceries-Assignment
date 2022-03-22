import { useState } from 'react';
import Grocery from './Grocery';

function Purchased() {
//     const [isPurchased, setIsPurchased] = useState(false)

//     const itemPurchasedTrue = () => {
//         setIsPurchased(true)
//     }

//     const itemPurchasedFalse = () => {
//         setIsPurchased(false)
//     }


//     if (isPurchased) {
//         return <button onClick = {itemPurchasedTrue}>Purchased: </button>
//     } else {
//         <button onClick = {itemPurchasedFalse}>Purchased:  </button>
//     }
//     
const [isPurchased, setIsPurchased] = useState(false)

const itemPurchasedTrue = () => {
    setIsPurchased(true)
}

const itemPurchasedFalse = () => {
    setIsPurchased(false)
}

const togglePurchase = event => setIsPurchased(!isPurchased)

if (isPurchased) {
    return <button onClick = {itemPurchasedTrue}>Purchased: {isPurchased}  </button>
} else {
    <button onClick = {itemPurchasedFalse}>Purchased: {isPurchased} </button>
}

return (
            <div>
    {isPurchased}
    {togglePurchase}
                
             </div>
        )
}
export default Purchased