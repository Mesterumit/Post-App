import { useState,useEffect } from 'react'
import AppRouter from './router/AppRouter'
import { Flowbite } from 'flowbite-react'
import store,{persistor} from './app/store'
import { Provider } from 'react-redux'
import {PersistGate}  from 'redux-persist/integration/react'

function App() {
  // const [persistorReady, setPersistorReady] = useState(false);

  // useEffect(() => {
  //   persistor.purge(); // Ensure that any existing persisted state is cleared before rehydrating
  //   persistor
  //     .persist()
  //     .then(() => setPersistorReady(true))
  //     .catch(() => setPersistorReady(true));
  // }, []);


  // if (!persistorReady) {
  //   // Display a loading indicator until the persistor is ready
  //   return <div>Loading...</div>;
  
  return (
    <>
      <Flowbite>
        <Provider store={store}>
          {/* persister store */}
          <PersistGate loading={false} persistor={persistor}>
            <AppRouter />
          </PersistGate >  
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
