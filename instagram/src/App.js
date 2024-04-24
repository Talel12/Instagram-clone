import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';
import Navbar from './Layouts/Navbar';
import SafeArea from './Layouts/SafeArea';
import { useLocation } from 'react-router-dom';
import { getCurrentUser } from './redux/AuthSlice/authSlice';
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from "react-redux"
import PrivateRoute from './routes/privateRoute';
import Addpost from './Components/Post/Addpost.component';
import Loader from './Components/Loader/Loader';


function App() {

  const [openModalAdd, setOpenModalAdd] = useState(false);

  const postLoading=useSelector(store=>store?.posts?.loading)

  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, []);

  return (
    <div className="App">
       {postLoading && <Loader/>} 
      {!location.pathname.includes("auth") && <Navbar setOpenModalAdd={setOpenModalAdd} />}

      <SafeArea>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/profile"} element={<Profile />} />
          </Route>

          <Route path={"*"} element={<NotFound />} />
          <Route path={"/auth"} element={<Auth />} />

        </Routes>
      </SafeArea>

      {openModalAdd && <Addpost setOpenModalAdd={setOpenModalAdd} />}

    

    </div>
  );
}

export default App;
