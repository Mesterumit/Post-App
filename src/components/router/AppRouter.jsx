import {BrowserRouter as R, Route, Routes} from 'react-router-dom'
import Register from '../../pages/Register'
import Login from '../../pages/Login'
import Dashboard from '../../pages/Dashboard';
import NavBar from '../NavBar'

const AppRouter = () => {
    return (
        
        <>
        <R>
            <NavBar/>
            {/* To do: remove this "br" later */}
            <br></br>
            <Routes>
                <Route path="/dashboard"  element={<Dashboard /> }/>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<h1 >Page Not Found</h1>} />
            
            </Routes>
        </R>
        </>
    )


}

export default AppRouter