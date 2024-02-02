import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Detail from '../pages/Detail';
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import PrivateRouter from "./PrivateRouter";
import FooTer from "../components/FooTer";
import NavBar from '../components/NavBar';

const AppRouter = () => {
    return (
        <Router>
            <NavBar />
           
            <br></br>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                {/* private route */}
                <Route path="" element={<PrivateRouter />}>
                <Route path="/newblog" element={<NewBlog />} />
                 <Route path="/profile" element={<Profile />} />
                <Route path="/detail/:id" element={<Detail />} />

                </Route>
                
            </Routes>
            <br></br>
            <FooTer />
        </Router>
    );
};

export default AppRouter;
