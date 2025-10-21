import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { use } from 'react';

const Navbar = () => {
    const { user, signout, } = use(AuthContext);
    const handleLogout = () => {
        console.log("user wants to logout");
        signout().then(alert("Logout Successfully")).catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className='flex items-center justify-between'>
            <div className='blank'>

            </div>

            <div className='links flex gap-5 text-[#706f6f] '>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>

            <div className='login flex gap-4'>
                <img src="https://i.ibb.co.com/bjQRgzxf/user.png" alt="" />
                {user ? <Link ><button onClick={handleLogout} className='btn text-white bg-[#403f3f] px-8'>Logout</button></Link> : <Link to="/auth/login"><button className='btn text-white bg-[#403f3f] px-8'>Login</button></Link>}
            </div>
        </div >
    );
};

export default Navbar;