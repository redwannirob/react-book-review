import { Link } from "react-router-dom";

import Books from "../Books/Books";


const Home = () => {
    return (
        <div>
            <div className="flex mt-12">
                <div className="w-2/3 text-center">
                    <h2 className="text-5xl font-semibold"> Books to freshen up</h2>
                    <h2 className="text-5xl font-semibold mt-4">your bookshelf</h2>
                    <Link to="/listedBooks"><button className="btn btn-success mt-12">View the list</button></Link>
                </div>
                <div>
                    <img src="/images/pngtree-book-cartoon-books-simple-png-image_417472.jpg" alt="" />
                </div>
            </div>

            <div>
                <Books></Books>
            </div>
        </div>
    );
};

export default Home;