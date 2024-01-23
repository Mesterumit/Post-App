import { useState } from 'react'
import AppRouter from './components/router/AppRouter'
import { Flowbite } from 'flowbite-react'
import store from './app/store'
import { Provider } from 'react-redux'
function App() {

  return (
    <>
      <Flowbite>
        <Provider store={store}>
            <AppRouter />
        </Provider>
      </Flowbite>

    </>


  )
}

export default App
{/* AppRouter */ }
{/* navbar */ }
{/* routes */ }
{/* AppRouter */ }
//  "Flowbite" is just give us acces to styled component
//  "Provider" give me to access to the "store" 
//  "Persisgate" is taking my store an save it in local storage
//  "Persistgate" is helping us to store it "Store" in local storage
// i can close the app and opne aging with same info
