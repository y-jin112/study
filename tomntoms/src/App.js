import Index from "./component/Index";

function App() {
  return (
    <>
      <header>
          <div className="head">

          <a className="trigger-menu" id="toggle">
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span> 
          </a>

          <div className="aside-on">
              <div className="aside-top">
                <a href="#" className="close_btn"><img src="./img/ss.png" alt=""/></a>
                <div className="aside-logo"><img src="./img/nav_logo.svg" alt=""/></div>
              </div>
              <div className="aside-bx">
                  <ul>
                      <li><a href="./menu.html">MENU</a></li>
                      <li><a href="./event.html">EVENT</a></li>
                      <li><a href="">STORE</a></li>
                      <li><a href="">SERVICE</a></li>
                      <li><a href="">COMMUNITY</a></li>
                      <li><a href="./tomntoms.html">TOM N TOMS</a></li>
                  </ul>
              </div>
              <div className="global-area">
                <ul className="global-list">
                    <li className="global-item"><a href="">ENGLISH</a></li>
                    <li className="global-item"><a href="">CHINESE</a></li>
                </ul>
              </div>
          </div>
            
            
            <div className="logo-box"><a href="./index.html"><img src="./img/logo.png" alt=""/></a></div>
            <div className="store-btn"><a href=""><img src="./img/mall.png" alt=""/></a></div>
          </div>
          <div className="smile-bnr">
              <a href=""><img src="./img/32019960_q0TaH7i9_20211103094718.jpg" alt=""/></a>
          </div>
      </header>

      <Index />

      <footer>
        <div className="wrapper">
            <div className="in-wrap">
                <div className="sns-area">
                    <div className="txt-area">
                        <p className="txt">Follow us</p>
                    </div>
                    <div className="sns-bx">
                        <ul>
                            <li><a href="#"><img src="./img/sns_instagram.png" alt=""/></a></li>
                            <li><a href="#"><img src="./img/sns_facebook.png" alt=""/></a></li>
                            <li><a href="#"><img src="./img/sns_youtube.png" alt=""/></a></li>
                            <li><a href="#"><img src="./img/sns_blog.png" alt=""/></a></li>
                        </ul>
                    </div>
                </div>

                <div className="language-area">
                    <div className="txt-area">
                        <p className="txt"> Language </p>
                    </div>
                    <div className="language-bx">
                        <ul>
                            <li><a href="#">KOREAN</a></li>
                            <li><a href="#">ENGLISH</a></li>
                            <li><a href="#">CHINESE</a></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="cs-area">
                    <div className="txt-area">
                       <p> ?????????????????? </p>
                       <a href="tel:0234120780" className="call"> 02. 3412. 0781 </a>
                    </div>
                </div>

                <div className="info-bx">
                   <div className="sub-gnb-bx">
                        <ul>
                            <li>????????????</li>
                            <li>????????????</li>
                            <li>???????????????</li>
                            <li>???????????????</li>
                            <li>????????????</li>
                            <li>??????????????????</li>
                            <li>??????????????????</li>
                            <li>????????? ?????? ?????????</li>
                        </ul>
                   </div> 
                </div>

                <div className="add-bx">
                    <span className="m-inline"> ????????? ????????? ????????? 163??? 10 ????????? ?????? 2F(???:????????? 570-6)</span>
                    <span className="m-inline"> ??????:????????? </span>
                    <span>????????????????????? : 215-86-65050 </span>
                    <span className="m-block"> ?????? ?????? ????????? : ????????? </span>
                    <span><a href="tel:0234120781"> TEL. 02-3412-0781 </a></span>
                    <span className="m-inline"> FAX. 02-3412-1907 </span>
                </div>
                <div className="copy_t">COPYRIGHT ??? 2015 TOM N TOMS COFFEE. ALL RIGHTS RESERVED.</div>
            </div>
        </div>
      </footer>


      <div id = "top_btn">
        <a href="#"><img src="./img/outline_expand_less_white_24dp.png" alt=""/></a>
      </div>

      <a href="#" class="chatbot"><img src="./img/??????.png" alt=""/></a>
    </>
  );
}

export default App;
