import { json } from "react-router-dom";

const getStoredBooks = () =>{
    const storedBooks = localStorage.getItem('bookListed');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveToLocal = id =>{
    const storedBooks = getStoredBooks();
    const exists = storedBooks.find(bookId => bookId === id);
    if(!exists){
        storedBooks.push(id)
        localStorage.setItem('bookListed',JSON.stringify(storedBooks));
    }
}



const getWishlistToLocal = () =>{
    const wishlistedBooks = localStorage.getItem('wishlisted');
    if(wishlistedBooks){
       return JSON.parse(wishlistedBooks);
    }
    return [];
}
const saveWishTtoLocal = id =>{
    const wishlistedBooks = getWishlistToLocal();
    const exists = wishlistedBooks.find(wishlistId => wishlistId === id);
    if(!exists){
        wishlistedBooks.push(id)
        localStorage.setItem('wishlisted',JSON.stringify(wishlistedBooks));
    }
}
export{saveToLocal,getStoredBooks,saveWishTtoLocal,getWishlistToLocal};