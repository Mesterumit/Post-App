import AppRouter from './router/AppRouter'
import { Flowbite } from 'flowbite-react'
import store,{persistor} from './app/store'
import { Provider } from 'react-redux'
import {PersistGate}  from 'redux-persist/integration/react'

function App() {
  
  return (
    <div className="bg-slate-300 dark:bg-gray-800 dark:text-white ">
      <Flowbite>
        <Provider store={store}>
          {/* persister store */}
          <PersistGate loading={false} persistor={persistor}>
            <AppRouter />
          </PersistGate >  
        </Provider>
      </Flowbite>

    </div>


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
