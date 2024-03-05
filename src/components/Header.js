import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/GPTSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGPtSearch = useSelector((store) => store.gpt.showGPtSearch);
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unsubscribe();
  }, [])
  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={LOGO} alt="logo"></img>
      {user && (<div className='flex p-2'>
        {showGPtSearch && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) => (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
        </select>}
        <button className='py-2 px-4 mx-4 my-2 bg-red-800 text-white rounded-lg' onClick={handleGPTSearchClick}>{showGPtSearch ? "HomePage" : "GPT Search"}</button>
        <img className='w-12 h-12' alt='User Icon' src={USER_ICON}></img>
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>)}
    </div>
  )
}

export default Header