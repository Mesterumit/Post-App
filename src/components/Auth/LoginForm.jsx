import { Spinner } from "flowbite-react/";
import { Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import loginImage from "../../assets/login.webp";
import * as Yup from "yup";
import { fetchFail} from "../../features/authSlice";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is mandatory"),
  password: Yup.string().required("Password is mandatory"),
});



const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  const { loading } = useSelector(state => state.auth);
  const dispatch = useDispatch()


  console.log("LOADING :", loading)
  return (
    <section className="h-screen mb-9 w-full  bg-white dark:bg-gray-800 dark:text-white">
      <div className="h-full w-full text-gray-800">
        <div className="flex justify-center items-center flex-wrap w-full h-full g-6">
          <div className="xl:w-6/12 lg:w-6/12 w-9/12 mb-12 md:mb-0">
            <img src={loginImage} className="w-8/12 mx-auto" alt="" />
          </div>
          <div className="xl:ml-20 lg:w-5/12 w-9/12 mb-12 md:mb-0">
            <Form>
              <div className="mb-6">
                <input
                  type="text"
                  className={
                    touched.email && errors.email
                      ? "login border-red-600"
                      : "login border-gray-300"
                  }
                  name="email"
                  id="email"
                  placeholder="Email address"
                  value={values.email}
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p
                  id="helper-text-explanation"
                  className="mt-2 text-sm text-red-500 dark:text-red-400">
                  {touched.email && errors.email}
                </p>
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  className={
                    touched.password && errors.password
                      ? "login border-red-600"
                      : "login border-gray-300"
                  }
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  required
                  onBlur={handleBlur}
                />
                <p
                  id="helper-text-explanation"
                  className="mt-2 text-sm text-red-500 dark:text-red-400">
                  {touched.password && errors.password}
                </p>
              </div>
              <div className="text-center lg:text-center">
                <button
                  type="submit"
                  disabled={loading === true}
                  className="inline-block px-7 py-3 bg-slate-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  {!loading ? (
                    "Login"
                  ) : (
                    <>
                      <Spinner size="sm" light={true} />

                      <span className="ml-2">Loading ...</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-left dark:text-slate-200 font-semibold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link
                    to="/register"
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-1">
                    Sign Up
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
