import React, { useState, useEffect } from 'react';
import { auth } from '../utils/Firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removerUser, addUser } from '../utils/userSlice';
import { MAINLOGO, USERICON } from '../utils/constants';
import { toggleGenAISearchView } from '../utils/GenAISlice';
import { clearGenAISuggestions } from "../utils/GenAISlice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [showOptions, setShowOptions] = useState(false);
  const showGenAISearch = useSelector((store) => store.GenAI.showGenAISearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removerUser());
        navigate('/');
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate('/error');
      }
    );
    dispatch(clearGenAISuggestions());
  };

  const handleGenAISearch = () => {
    dispatch(toggleGenAISearchView());
    dispatch(clearGenAISuggestions());
    setShowOptions(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        if (location.pathname === "/") navigate("/browse");
      } else {
        dispatch(removerUser());
        if (location.pathname !== "/") navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, location.pathname, navigate]);

  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`absolute w-screen px-28 pt-9 py-1 bg-gradient-to-b from-black z-50 flex flex-col
        md:flex-row justify-between ${
        !isHomePage ? (showGenAISearch ? '-mt-5' : 'mt-16') : ''
      }`}
    >
      <img className='w-28 -mx-16 md:mx-0 md:w-48' src={MAINLOGO} alt="mainlogo" />

      {!isHomePage && (
        <div className='relative flex flex-col md:flex-row md:items-center items-end mt-2 md:mt-0'>
          <button
            type='button'
            className='bg-purple-800 p-2 text-white rounded-md -mr-20 -mt-12 md:mt-0 md:ml-0 md:mb-0 md:mr-4'
            onClick={handleGenAISearch}
          >
            {showGenAISearch? "Browse Page" : "GenAI Search"}
          </button>
          {!showGenAISearch && (
            <div className="flex items-center">
              <img
                className='w-14 h-11 -mr-5 mt-3 md:m-5 md:mt-4 md:ml-0 md:w-12 md:h-12 cursor-pointer'
                alt="usericon"
                src={USERICON}
                onClick={() => setShowOptions(!showOptions)}
              />

              {showOptions && (
                <button
                  type='button'
                  onClick={handleSignOut}
                  className='bg-red-600 mt-28 -ml-10 p-2 -mr-5 md:mt-0 md:ml-0 md:mr-0 text-white rounded-md'
                >
                  Sign Out
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
