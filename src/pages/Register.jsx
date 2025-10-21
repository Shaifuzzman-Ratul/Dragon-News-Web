import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, setUser } = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target);
        // const form = e.target
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, photo, email, password);

        createUser(email, password).then(res => {
            const user = res.user;
            console.log(user);
            setUser(user)
            // alert

            Swal.fire({
                title: " Registration Done!",
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


    };
    return (
        <div className='flex items-center justify-center'>
            <form onSubmit={handleRegister}> <fieldset className="fieldset  bg-white  border-base-300 rounded-box w-xs border p-4">
                {/* <legend className="fieldset-legend">Login </legend> */}
                <h2 className='font-bold text-xl text-center p-5'>Register your account</h2>

                <label className="label">Your Name</label>
                <input name='name' type="text" className="input" placeholder="Enter your name" />

                <label className="label">Photo URL</label>
                <input name='photo' type="text" className="input" placeholder="Photo URL" />


                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />

                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                <p className='text-sm text-gray-500 text-center p-2'> Have An Account!! <Link to="/auth/register"><span className='text-green-600'>Login</span></Link> </p>
            </fieldset></form>

        </div>
    );
};

export default Register;