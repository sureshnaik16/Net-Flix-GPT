import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removerUser } from "../utils/userSlice";

const Body = () => {

  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Login/>
    },
    
    {
      path:"/browse",
      element: <Browse/>
    }
  ]);

  useEffect(() =>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email:email, displayName:displayName}));
        
      }
      else {
        dispatch(removerUser());
        
      }
  });

}, []);

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;