import React, { Suspense, lazy } from 'react';
import{ HashRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import './css/index.css';
import './css/common.css';
import Main from './component/Main.js';
import Gallery from './component/Gallery.js';
import Class from './component/Class.js';
import Exhibition from './component/Exhibition.js';
import Library from './component/Library.js';


function App() {
  return (
    <HashRouter>
        <header>
            <div className="hdmain">
                <Link to="/"><img src="img/logo.png" /></Link>
                <ul>
                    <li><strong><Link to="/Gallery">GALLERY</Link></strong></li>
                    <li><strong><Link to="/Class">CLASS</Link></strong></li>
                    <li><strong><Link to="/Exhibition">EXHIBITION</Link></strong></li>
                    <li><strong><Link to="/Library">LIBRARY</Link></strong></li>
                </ul>
                <div className="hdmn_r">
                    <nav className="hdsrc">
                        <Link to="search.html"><img src="img/src_btn2.png" /></Link>
                    </nav>
                    <nav className="hdsrc">
                        <Link to="mypage.html"><img src="img/mypage.png" /></Link>
                    </nav>
                    <nav className="bgmenu1">
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                        <div className="bgmenu2">
                            <div className="bgmenu2-1">
                                <Link to="#">GALLERY</Link>
                                <Link to="#">CLASS</Link>
                                <Link to="#">EXHIBITION</Link>
                                <Link to="#">LIBRARY</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/Gallery" element={<Gallery />}/>
                    <Route path="/Class" element={<Class />}/>
                    <Route path="/Exhibition" element={<Exhibition />}/>
                    <Route path="/Library" element={<Library />}/>
                </Routes>
            </Suspense>
        </main>



      <footer>
          <div className="end">
              <div className="end-txt">
                  서비스이용약관  |  개인정보처리방침  |  고객센터
              </div>
              <div className="end-txt">
                  서울시 중구 동호로 272 (주)디자인하우스    |    대표자 이영혜    |    사업자등록번호 203-81-43529    |    전화번호 02-2275-6151
              </div>
              <div className="end-txt">
                  Copyright © 2016 Designhouse inc. All rights reserved.
              </div>
              <figure className="ftlogo">
                  <img src="img/logo.png" />
              </figure>
              <figure className="topbtn">
                  <a href="#"><img src="img/top.png" /></a>
              </figure>
          </div>
      </footer>
    </HashRouter>
  );
}

export default App;
