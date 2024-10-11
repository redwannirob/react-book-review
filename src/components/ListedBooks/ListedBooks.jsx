import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBooks,getWishlistToLocal } from "../../utility/localStorage";
import { useEffect, useState } from "react";
import ListedComponents from "../ListedComponents/ListedComponents";
import WishlistedComponents from "../WishlistedComponents/WishlistedComponents";


const ListedBooks = () => {
    const listedItems = useLoaderData();
    const [listItems, setListedItems] = useState([]);
    const [wishlistedItems,setWishlistedItems] = useState([]);
    console.log(listItems)
    // const {bookId} = useParams();
    // const book = listedItem.map(book => book.bookId);

    // const [localStoredBook,setLocalStoredBook] = useState([]);

    useEffect(()=>{
        const wishlistedBooks = getWishlistToLocal();
        if(listedItems.length > 0){
            const listedBooks = [];
            for(const id of wishlistedBooks){
                const listedItem = listedItems.find(item => item.bookId === id);
                if(listedItem){
                    listedBooks.push(listedItem)
                }
            }
            setWishlistedItems(listedBooks)
        }
    },[])

    useEffect(() => {
        const storedBooks = getStoredBooks();
        if (listedItems.length > 0) {
            const listedBooks = [];
            for (const id of storedBooks) {
                const listedItem = listedItems.find(item => item.bookId === id)
                if (listedItem) {
                    listedBooks.push(listedItem)
                }
            }
            setListedItems(listedBooks)
        }
        // console.log(storedBooks)
    }, [])


    return (
        <div>
           <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">Books listed</div>
            <div
                tabIndex={0}
                className="dropdown-content card card-compact bg-black text-primary-content z-[1] w-64 p-2 shadow">
                <div className="card-body">
                    {
                        listItems.map(item => <ListedComponents key={item.bookId} item={item}></ListedComponents>)
                    }

                    <div>
                        {
                            wishlistedItems.map(item => <WishlistedComponents key={item.bookId} item={item}></WishlistedComponents>)
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ListedBooks;