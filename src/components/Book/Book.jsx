import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { image, bookId, bookName, author, category, rating, tags, } = book;
    // console.log(bookId);
    
    return (

        <Link to={`bookDetails/${bookId}`}>
            <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="mb-4">
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="text-green-500">{tags[0]}</div>
                        <div className="text-green-500 m-4 ">{tags[1]}</div>
                    </h2>
                    <p className="text-2xl font-bold">{bookName}</p>
                    <p className=" font-semibold"> by : {author}</p>
                    <div className="badge badge-outline">{category}</div>
                    <div className="card-actions justify-end">
                        <div className=" flex">
                            <p className="mr-4 font-bold text text-blue-500">{rating}</p>
                            <FaStarHalfStroke  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Link>

    );
};

export default Book;