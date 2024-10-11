import { useContext } from "react";
import { AuthContex } from "../../Providers/AuthProvider";
import auth from "../../firebase.config";
import { Link } from "react-router-dom";


const Register = () => {
    const {createUser,user} = useContext(AuthContex);
    const handleSignUp = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email,password)
        .then(userCredential=>{
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
                    <h1 className="text-5xl font-bold">Register</h1>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp}  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input autoComplete="off" name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" autoComplete="off" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account? <Link to='/login'>Log In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;