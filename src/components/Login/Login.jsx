import { useContext } from "react";
import { AuthContex } from "../../Providers/AuthProvider";
import auth from "../../firebase.config";
import { Link } from "react-router-dom";
import { SiAzuredataexplorer } from "react-icons/si";



const Login = () => {
    const {logIn,user,} = useContext(AuthContex);
    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value ;
        const password = e.target.password.value ;
        logIn(email,password)
        .then(userCredential =>{
            console.log(userCredential.user)
            
        })
        .catch(error=>{
            console.error(error)
        })
        console.log(email,password)

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label" >
                                <span className="label-text">Email</span>
                            </label>
                            <input  name="email" type="email" autoComplete="off" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label" >
                                <span className="label-text">Password</span>
                            </label>
                            <input  name="password" type="password" autoComplete="off" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {
                            user ? <p className="text-purple-400 font-semibold">User successfully logged in </p> : <p>New to this website? <Link to="/register">Sign Up</Link></p>
                        }
                        {
                            user && <Link className="text-3xl mx-auto btn btn-success tooltip pt-2" data-tip="Explore website" to="/"><SiAzuredataexplorer  /></Link>
                        }
                        

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

