import { useEffect, useState } from 'react';
import '../styles/App.css';
import Posts from './Posts/Posts';
import Users from './Users/Users';
import { getPostsRequest, getPostUserRequest } from '../api/';
import Preloader from './Preloader/Preloader';
import { PostContext } from './Context/context.js';
import {Route, Switch} from 'react-router-dom';
import Main from './Main';
import Navigation from './Navigation';
import UserInfo from './Users/UserInfo';


function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getPosts = async () => {
    setIsLoading(true);
    const response = await getPostsRequest();
    setPosts(response.data);
    setIsLoading(false);
  }

  const getPostUser = async (userId, cb) => {
    const response = await getPostUserRequest(userId);
    cb(response.data)
  }

  useEffect(() => {
    getPosts();
  }, []);


  return (
    <div className="app">
      <Navigation/>
      <Switch>
        <Route path="/" exact>
          <Main/>
        </Route>
        <Route path="/posts" exact>
          <PostContext.Provider value={{posts, getPostUser}}>
            {isLoading ? <Preloader/> : <Posts/>}
          </PostContext.Provider>
        </Route>
        <Route path="/users" exact>
          <Users/>
        </Route>
        <Route path="/users/:userId">
          <UserInfo/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
