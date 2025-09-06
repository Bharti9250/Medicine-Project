import {createContext , useContext, useState} from "react"


export const Cartcontext = createContext(null)

export  const CartProvider = ({children}) => {
    const [cartItem, setCartItem] = useState([])
    const addtoCart = (product)=>{
        setCartItem([...cartItem, product])

        console.log(cartItem);
        
    }
    return <Cartcontext.Provider value={{cartItem, setCartItem, addtoCart}} >
        {children}
    </Cartcontext.Provider>
}


export const useCart = () => useContext(Cartcontext)