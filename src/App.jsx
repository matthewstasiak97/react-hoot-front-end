import { useContext, useState, useEffect } from "react";
import HootDetails from './components/HootDetails/HootDetails';
import HootList from "./components/HootList/HootList.jsx";
import * as hootService from "./services/hootService.js";
// Import UserProvider/Context
import './App.css'

function App() {
  const [hoots, setHoots] = useState([]);

  // const { user } = useContext(UserContext);
  const user = { username: "bonnie", _id: "xyz123"}

  useEffect(() => {
    const fetchAllHoots = async () => {
      const hootsData = await hootService.index();
      // update to set state:
      setHoots(hootsData);
    };
    if (user) fetchAllHoots();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Landing />} />
        {user ? (
          <>
            {/* Protected routes (available only to signed-in users) */}
            <Route path="/hoots" element={<HootList hoots={hoots} />} />
            <Route path='/hoots/:hootId' element={<HootDetails />} />
          </>
        ) : (
          <>
            {/* Non-user routes (available only to guests) */}
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/sign-in" element={<SignInForm />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
