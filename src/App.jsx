import HootDetails from './components/HootDetails/HootDetails';
import './App.css'
import { useEffect, useContext } from 'react';

const App = () => {
  const { user } = useContext(UserContext);
  
  useEffect(() => {
    const fetchAllHoots = async () => {
      const hootsData = await hootService.index();
      
      // console log to verify
      console.log('hootsData:', hootsData);
    };
    if (user) fetchAllHoots();
  }, [user]);
  
  return (
  <>
    {user ? (
      <>
        {/* Protected Routes (available only to signed-in users) */}
        <Route path='/hoots' element={<HootList hoots={hoots}/>} />
        {/* Add this route! */}
        <Route 
          path='/hoots/:hootId'
          element={<HootDetails />}
        />
      </>
    ) : (
      <>
        {/* Non-user Routes (available only to guests) */}
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
      </>
    )}
  </>
  )
};
export default App
