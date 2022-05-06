import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Main from '../pages/Main';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import Mypage from '../pages/Mypage';
import Signup from '../pages/Signup';
import Write from '../pages/Write';

//FC = Function Component(함수형컴포넌트)

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage/:id" element={<Mypage />} />
        <Route path="/write/:id" element={<Write />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
