import React, { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomLink from './CustomLink';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Login/firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    // logout function
    const handleSignOut = () => {
        signOut(auth);
    }
    const menuLists = <>
        <CustomLink to='/review'>Review</CustomLink>
        <CustomLink to='/blogs'>Blogs</CustomLink>
        {
            user && <CustomLink to='/dashboard'>Dashboard</CustomLink>
        }
        {
            user ?
                <button onClick={handleSignOut}>Sign out</button>
                : 
                <CustomLink to='/login'>Login</CustomLink>
        }
        
    </>

    return (
        <div className=''>
            <div className='flex items-center h-14 justify-between text-black  relative z-50'>
                <div>
                    <span className='cursor-pointer' onClick={()=>navigate('/home')}>WebTech House</span>
                </div>
                <div className='flex gap-6 items-center hidden md:flex'>
                    {menuLists}
                </div>
                <FontAwesomeIcon
                    icon={open ? faTimes : faBars}
                    onClick={() => setOpen(!open)}
                    className="text-black w-6 h-6 cursor-pointer md:hidden"/>
                {open && (
                    <div className="bg-slate-600 absolute top-full left-0 flex flex-col w-full pb-8 md:hidden">
                        <div className=" flex gap-4 flex-col items-center text-xl">
                            {menuLists}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;