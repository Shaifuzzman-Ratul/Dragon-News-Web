import React, { use } from 'react';
import { Link, Navigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn } = use(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password).then(res => {
            const user = res.user;
            console.log(user);
            // setUser(user)
            // alert
            Swal.fire({
                title: " Logged In!",
                icon: "success",
                draggable: true
            });




        }).catch((Error) => {
            const errorMessage = Error.message;
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorMessage,
                footer: '<a href="#">Fix and try again.</a>'
            });
        })
    }
    return (
        <div className='flex items-center justify-center'>
            <form onSubmit={handleLogin}><fieldset className="fieldset  bg-white  border-base-300 rounded-box w-xs border p-4">
                {/* <legend className="fieldset-legend">Login </legend> */}
                <h2 className='font-bold text-xl text-center p-5'>Login Your account</h2>

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />

                <button type='submit' className="btn btn-neutral mt-4">Login</button>
                <p className='text-sm text-gray-500 text-center p-2'>Dont’t Have An Account ? <Link to="/auth/register"><span className='text-green-600'>Register</span></Link> </p>
            </fieldset></form>

        </div>
    );
};

export default Login;