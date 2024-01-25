import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toastWarnNotify } from "../helper/ToastNotify";

const PrivateRouter = () => {
  const { currentUser } = useSelector(state => state.auth);

  // if no user is logged in, redirect to login page
  if (!currentUser) {
    toastWarnNotify("You need to login first");
    return <Navigate to="/login" />;
  } else {
    // if user is logged in, render the child components
    return <Outlet />;
  }
};

export default PrivateRouter;


// The reason you might be encountering an error 
// without useEffect is related to the timing of 
// when certain actions are performed during the component 
// lifecycle. Specifically, the useNavigate hook is typically
// meant to be used inside the useEffect hook or within an
// event handler, not directly in the functional component body.
// When you try to use navigate directly in the body of 
// the component, React might complain because it's 
// not being called in the correct phase of the component
// lifecycle.