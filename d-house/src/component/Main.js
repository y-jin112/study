import "../css/index.css";

function Main(){
    return(
        <>
            <div className="hd_img">
                <div className="hd_frame">
                    <figure className="figure slider">
                        <img src="img/header7.jpeg" />
                        <img src="img/header6.jpeg" />
                        <img src="img/img3.jpg" />
                        <img src="img/img4.jpg" />
                    </figure>
                </div>
                <div className="hd_title">
                    <h2>
                        스위스의<br/>
                        예술이<br/>
                        온다.
                    </h2>
                </div>
                <div className="nxt_btn">
                    <nav className="next">
                        <a href=""><img src="img/next_btn1.png" /></a>
                        <a href=""><img src="img/next_btn2.png" /></a>
                    </nav>
                </div>

                <nav className="nav_list">
                    <span><a href="#"></a></span>
                    <span><a href="#"></a></span>
                    <span><a href="#"></a></span>
                </nav>

                <nav className="hd_more">
                    <a href="https://incheon.livingdesignfair.co.kr/fairDash.do?hl=KOR" target="_blank"><b>자세히보기 &gt;</b></a>
                </nav>
            </div>


            <div className="container">
                <div className="gal scr-con active">
                    <article className="con_hd">
                        <h3 className="title"><a href="gallery.html">GALLERY</a></h3>
                        <a href="gallery.html"><b>VIEW MORE &gt;</b></a>
                    </article>
                    <div className="con_thm">
                        <ul>
                            <li>
                                <a href="gallery-2.html">
                                    <figure>
                                        <img src="img/gl3.jpg" />
                                        <span className="img_hv"></span>
                                        <div className="img_hv_ic">
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </figure>
                                    <div className="figcaption">
                                        <p className="galtt"><strong>AI는 바실리 칸딘스키가 들은 음악을 알고 있다</strong></p>
                                        <p className="galtxt">
                                            구글 아트앤컬처가 바실리 칸딘스키의 추상 회화를 음악으로 변환하는 프로그램을 공개했다. 프랑스 조르주 퐁피두 국립예술문화센터와 협력한 이 프로젝트는 칸딘스키가 남긴 메모를 인공지능이 분석해 당시 그가 음악을 어떻게 이해했는지 학습하는 과정으로 만들어졌다. 트랜스포머 신경망 기술을 적용해 칸딘스키가 1025년 그의 대표 작품 '노랑, 빨강, 파랑'을 그렸을 때 들었을 법한 음악을 시뮬레이션한 것이 특징이다.
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="gallery-2.html">
                                <figure>
                                    <img src="img/gl9.jpg" />
                                    <span className="img_hv"></span>
                                    <div className="img_hv_ic">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </figure>
                                <div className="figcaption">
                                    <p className="galtt"><strong>결국 이렇게 와버렸다, 2021년 달력</strong></p>
                                    <p className="galtxt">구글 아트앤컬처가 바실리 칸딘스키의 추상 회화를 음악으로 변환하는 프로그램을 공개했다. 프랑스 조르주 퐁피두 국립예술문화센터와 협력한 이 프로젝트는 칸딘스키가 남긴 메모를 인공지능이 분석해 당시 그가 음악을 어떻게 이해했는지 학습하는 과정으로 만들어졌다. 트랜스포머 신경망 기술을 적용해 칸딘스키가 1025년 그의 대표 작품 '노랑, 빨강, 파랑'을 그렸을 때 들었을 법한 음악을 시뮬레이션한 것이 특징이다.</p>
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="gallery-2.html">
                                <figure>
                                    <img src="img/gl1.jpg" />
                                    <span className="img_hv"></span>
                                    <div className="img_hv_ic">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </figure>
                                <div className="figcaption">
                                    <p class="galtt"><strong>디자인 트렌드를 선도하는 부산</strong></p>
                                    <p class="galtxt">구글 아트앤컬처가 바실리 칸딘스키의 추상 회화를 음악으로 변환하는 프로그램을 공개했다. 프랑스 조르주 퐁피두 국립예술문화센터와 협력한 이 프로젝트는 칸딘스키가 남긴 메모를 인공지능이 분석해 당시 그가 음악을 어떻게 이해했는지 학습하는 과정으로 만들어졌다. 트랜스포머 신경망 기술을 적용해 칸딘스키가 1025년 그의 대표 작품 '노랑, 빨강, 파랑'을 그렸을 때 들었을 법한 음악을 시뮬레이션한 것이 특징이다.</p>
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="gallery-2.html">
                                <figure>
                                    <img src="img/gl4.jpg" />
                                    <span className="img_hv"></span>
                                    <div className="img_hv_ic">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </figure>
                                <div className="figcaption">
                                    <p className="galtt"><strong>혐오를 멈추기 위한 디자이너들의 목소리</strong></p>
                                    <p className="galtxt">구글 아트앤컬처가 바실리 칸딘스키의 추상 회화를 음악으로 변환하는 프로그램을 공개했다. 프랑스 조르주 퐁피두 국립예술문화센터와 협력한 이 프로젝트는 칸딘스키가 남긴 메모를 인공지능이 분석해 당시 그가 음악을 어떻게 이해했는지 학습하는 과정으로 만들어졌다. 트랜스포머 신경망 기술을 적용해 칸딘스키가 1025년 그의 대표 작품 '노랑, 빨강, 파랑'을 그렸을 때 들었을 법한 음악을 시뮬레이션한 것이 특징이다.</p>
                                </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;