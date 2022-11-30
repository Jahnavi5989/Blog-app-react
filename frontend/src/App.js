import Header from './components/Header';
import Auth from './components/Auth';
import {Routes,Route} from 'react-router-dom';
import React, { useEffect } from 'react';
import AddBlog from './components/AddBlog';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogDetail from './components/BlogDetail';
import {useDispatch, useSelector} from 'react-redux';
import { authActions } from './store';


function App() {
  const dispath = useDispatch();
  const isLoggedIn=useSelector(state=> state.isLoggedIn);
  console.log(isLoggedIn)
  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispath(authActions.login());
    }
  },[dispath]);
  return (
<React.Fragment>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        {!isLoggedIn ? (<Route path="/auth" element={<Auth />}/>):(
          <>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/myBlogs" element={<UserBlogs/>}/>
        <Route path="/myBlogs/:id" element={<BlogDetail />}/>
        <Route path="/blogs/add" element={<AddBlog />}/>{" "}
        </>
        )}
      </Routes>
    </main>
    </React.Fragment>
  );  
}

export default App;
