import { Formik } from "formik";
import {useEffect} from 'react'
import useAuthCalls from "../hooks/useAuthCalls";
import LoginForm, { loginSchema } from "../components/Auth/LoginForm";

const Login = () => {

  const { login } = useAuthCalls();

 

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          login(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={props => <LoginForm {...props} />}></Formik>
    </div>
  );
};

export default Login;
