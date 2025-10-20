import React, { use } from 'react';
import { NavLink } from 'react-router';
const catagoryPromise = fetch("/categories.json").then((res) => res.json())
const Catagories = () => {
    // console.log(catagoryPromise);
    const catagories = use(catagoryPromise);
    // console.log(catagories);

    return (
        <div>
            <p className='font-bold'>All Catagory ({catagories.length})</p>
            <div className='grid grid-cols-1 mt-5 '>
                {
                    catagories.map((catagory) => (
                        <NavLink to={`/catagory/${catagory.id}`}
                            key={catagory.id}
                            className={"btn btn-wide bg-base-100 border-0  font-semiboldhover:bg-base-300 text-lg  text-gray-500"}
                        >{catagory.name}</NavLink>
                    ))
                }
            </div>
        </div >
    );
};

export default Catagories;