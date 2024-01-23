import React from "react";
import { Formik } from "formik";
import RegisterForm, { registerSchema } from "../components/Auth/RegisterForm.jsx";
import useAuthCalls from "../hooks/useAuthCalls";

const Register = () => {
  const { register } = useAuthCalls();
  return (
    <div>
      <Formik
      // it is an object defining the initial values of form fields
    initialValues={{
        first_name:'',
        last_name:'',
        email:'',
        image:'',
        password:'',
    }}
    // A schema for Yup validation 
    validationSchema={registerSchema}
    // Submit function will be called with the form values when the form is submitted.
    // function is intended to handle form submission. It currently calls a function resgister 
    // with modified values and then resets the form and sets submitting to false
    onSubmit={(values,actions)=>{
        register({...values, password2:values.password});
        actions.resetForm();
        actions.setSubmitting(false);
    }}
    // The component prop is passed a function that renders the form.
    // in  props, will have "initialValues, validationSchema, onSubmit, touched, handleXhnage.."
    // so i can use these functions in "RegisterForm"
    component={(props)=> <RegisterForm {...props} />}

       ></Formik>
    </div>
  );
};

export default Register;