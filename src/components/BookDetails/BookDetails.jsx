import { Link, useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { toast, ToastContainer } from "react-toastify";
import { getStoredBooks, saveToLocal, saveWishTtoLocal } from "../../utility/localStorage";

const BookDetails = () => {
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const books = useLoaderData();
    const book = books.find(book => book.bookId === idInt);
    const { image, yearOfPublishing, category, publisher, rating, review, totalPages, bookName, tags } = book;
    

    const handleRead = () =>{
        toast('You have read this book');
        saveToLocal(idInt);
    }
    const handleWishlist = () =>{
            toast('added to wishlist');
            saveWishTtoLocal(idInt);
            
    }



    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="w-1/4">
                <img
                    src={image}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p >{publisher}</p>
                <div className="flex w-2/4">
                    <p className="w-1/2">#{tags[0]}</p>
                    <p>#{tags[1]}</p>
                    <CiLocationOn className=" text-xl" />
                    <p className="">Published:{yearOfPublishing}</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={handleRead} className="btn btn-success">Read</button>
                    <button onClick={handleWishlist} className="btn btn-primary">Wishlist</button>
                    <ToastContainer/>    
                </div>
                
            </div>
            
        </div>
    );
};

export default BookDetails;