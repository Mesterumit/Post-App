import {BrowserRouter as R, Route, Routes} from 'react-router-dom'

import NavBar from '../NavBar'

const AppRouter = () => {
    return (
        
        <>
        <R>
            <NavBar/>
            <Routes>
                <Route path='/' element={<h1>HOME</h1>} />
            </Routes>
        </R>
        </>
    )


}

export default AppRouter