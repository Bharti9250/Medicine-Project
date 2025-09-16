import { children, createContext, useContext, useState } from "react";
export const Wishlistcontext = createContext(null);

export const WishlistProvider = ({ children }) => {
    const [wishListItem, SetWishlist] = useState([]);


    const AddToWishlist = (item) => {
        SetWishlist((prev) => {
            const exists = prev.find((i) => i.id === item.id);
            if (exists) {
                return prev.filter((i) => i.id !== item.id);
            } else {
                return [...prev, item];
            }
        });
    }

    console.log(wishListItem,"wishlist");
    

    return (
        <Wishlistcontext.Provider
            value={{
                wishListItem,
                AddToWishlist
            }}
        >
            {children}
        </Wishlistcontext.Provider>
    )
}


export const useWishlist = () => useContext(Wishlistcontext)