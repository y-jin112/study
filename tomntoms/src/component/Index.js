import '../css/index.css';
import $ from 'jquery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Controller } from 'swiper';
import {useState} from "react";



function Index(){
    //script 작성
    window.onload = function(){
       
        
        $(window).on('scroll',function(){
            $('.ani').each(function(i){
                if($(window).scrollTop() > $('.ani').eq(i).offset().top - $(window).height()){
                    $('.ani').eq(i).addClass('active');
                }
            });
        })
        
          
        
        const btnBurger = document.querySelector('.trigger-menu');
        const elNav = document.querySelector('.aside-on');
        btnBurger.onclick = function(){
            if( !elNav.classList.contains('active') ){
                elNav.classList.add('active');
            }else{
                elNav.classList.remove('active');
            }
        }

        // swiper zone~
      
        
    }



    return(
        <>
        
            <main>
                <Swiper
              
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src="./img/2038868156_ACuj8FvK_20220104124243.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./img/2038868156_p4XgWGev_20211223100027.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./img/2038868156_FD6axXml_20211101095040.jpg" alt="" /></SwiperSlide>
                </Swiper>

                {/* <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src="./img/2038868156_ACuj8FvK_20220104124243.jpg" alt="" /></div>
                        <div className="swiper-slide"><img src="./img/2038868156_p4XgWGev_20211223100027.jpg" alt="" /></div>
                        <div className="swiper-slide"><img src="./img/2038868156_FD6axXml_20211101095040.jpg" alt="" /></div>
                    </div>
                    <div className="swiper-scrollbar"></div>
                </div> */}
                
                <Swiper
                   
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={true}
                    >
                        <SwiperSlide><a>[보도자료] 탐앤탐스 딸기 음료 ‘Be My Strawberry’ 3종 출시</a></SwiperSlide>
                        <SwiperSlide><a>[보도자료] 연말연시 AR 이벤트 'Snowing TOM'</a></SwiperSlide>
                        <SwiperSlide><a>[보도자료] 탐앤탐스몰 ‘민트초코’ 스틱 출시</a></SwiperSlide>
                        <SwiperSlide><a>[보도자료] 탐앤탐스 2022 설 선물세트 출시</a></SwiperSlide>
                        <SwiperSlide><a>[보도자료] 예가체프 핸드드립 커피’ 리뉴얼 출시</a></SwiperSlide>
                        <SwiperSlide><a>[보도자료] 탐앤탐스-페이코인 MOU 체결</a></SwiperSlide>
                        <SwiperSlide><a>[보도자료] 프레즐 MD 출시</a></SwiperSlide>
                        <SwiperSlide><a>[결과 발표] 제14회 갤러리탐 신진작가 공모_최종 결과 발표</a></SwiperSlide>
                        <SwiperSlide><a>[보도자료] 겨울시즌 신메뉴 윈터 초코 레볼루션 출시</a></SwiperSlide>
                </Swiper>





                {/* <div className="mySwiper5">
                    <div className="swiper-wrapper auto">
                    <div className="swiper-slide"><a>[보도자료] 탐앤탐스 딸기 음료 ‘Be My Strawberry’ 3종 출시</a></div>
                    <div className="swiper-slide"><a>[보도자료] 연말연시 AR 이벤트 'Snowing TOM'</a></div>
                    <div className="swiper-slide"><a>[보도자료] 탐앤탐스몰 ‘민트초코’ 스틱 출시</a></div>
                    <div className="swiper-slide"><a>[보도자료] 탐앤탐스 2022 설 선물세트 출시</a></div>
                    <div className="swiper-slide"><a>[보도자료] 예가체프 핸드드립 커피’ 리뉴얼 출시</a></div>
                    <div className="swiper-slide"><a>[보도자료] 탐앤탐스-페이코인 MOU 체결</a></div>
                    <div className="swiper-slide"><a>[보도자료] 프레즐 MD 출시</a></div>
                    <div className="swiper-slide"><a>[결과 발표] 제14회 갤러리탐 신진작가 공모_최종 결과 발표</a></div>
                    <div className="swiper-slide"><a>[보도자료] 겨울시즌 신메뉴 윈터 초코 레볼루션 출시</a></div>
                    </div>
                </div> */}


                <section className="main-section">
                    <div className="wrapper ani">
                        <div className="title-bx">
                            <p><a href=""><img src="./img/TOM N TOMS MENU.png" alt="" /></a></p>
                        </div>
                    </div>
                    <div className="swiper mySwiper2 ani">
                        <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src="./img/2038868156_moXCxSIM_20211108102623.jpg" alt=""/></div>
                        <div className="swiper-slide"><img src="./img/2038868156_Fog8f1vE_20211101103715.jpg" alt=""/></div>
                        <div className="swiper-slide"><img src="./img/2038868156_HDntUO5B_20211018105424.jpg" alt=""/></div>
                        <div className="swiper-slide"><img src="./img/2038868156_n3GbMs9a_20211018105120.jpg" alt=""/></div>
                        <div className="swiper-slide"><img src="./img/2038868156_296KCbme_20210715042616.jpg" alt=""/></div>
                        <div className="swiper-slide"><img src="./img/2038868156_vRC0lOuB_20210715042459.jpg" alt=""/></div>
                        <div className="swiper-slide"><img src="./img/2038868156_7AvCKI80_20210603105755.jpg" alt=""/></div>
                        <div className="swiper-slide"><img src="./img/2038868156_NOvyYWoA_20210514020815.jpg" alt=""/></div>
                        </div>
                        <div className="swiper-button-next"><img src="./img/menu_next.png" alt=""/></div>
                        <div className="swiper-button-prev"><img src="./img/menu_prev.png" alt=""/></div>
                        <div className="swiper-pagination"></div>
                    </div>

                </section>
                
                <section className="main-section2">
                    <div className="banner-wrab ani">
                        <div className="txt-bx">
                            <h3 className="ani">대한민국 대표 스페셜 티커피 브랜드</h3>
                            <p className="ani"><img src="./img/TOM N TOMS.svg" alt=""/></p>
                            <div className="txt-1 ani">
                                <p>
                                    탐앤탐스는 오랜 노하우로 국내외 커피 시장을 선도하며<br  />
                                    스페셜티 커피와 갓 구운 따뜻한 프레즐, 문화가 융합된 특별한<br  />
                                    공간으로 지금 대한민국을 비롯해 전 세계에서 사랑받는<br  />브랜드입니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="btn-wrab ani">
                        <div className="btn-area1">
                            <a href="#">가맹문의</a>
                        </div>
                            <div className="btn-area2">
                                <a href="#">브랜드 소개</a>
                                <a href="#">신규매장 소개</a>
                            </div>
                    </div>
                </section>
                <section className="main-section3">
                    <div className="wrapper3 ani">
                        <div className="title-bx3">
                            <p><a href=""><img src="./img/TOM N TOMS MD_s PICK.png" alt=""/></a></p>
                        </div>
                    </div>
                    <div className="swiper mySwiper3 ani">
                        <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src="./img/2038868156_2GCVX1z5_20210907060413.jpg" alt=""/></div>
                        <div className="swiper-slide"><img src="./img/2038868156_kRG7dtya_20210120025632.jpg" alt=""/></div>
                        <div className="swiper-slide"><img src="./img/2038868156_LaGfI0sK_20210119043711.jpg" alt=""/></div>
                        <div className="swiper-slide"><img src="./img/2038868156_Puh0fVAc_20210907060709.jpg" alt=""/></div>
                        <div className="swiper-slide"><img src="./img/2038868156_WmPM7GT8_20210120025057.jpg" alt=""/></div>
                        </div>
                        <div className="swiper-button-next"><img src="./img/menu_next.png" alt=""/></div>
                        <div className="swiper-button-prev"><img src="./img/menu_prev.png" alt=""/></div>
                        <div className="swiper-pagination"></div>
                    </div>
                </section>
                <div className="main-section4">
                    <div className="title-bx4 ani">
                        <img src="./img/_ TOM N TOMS SNS.png" alt=""/>
                    </div>
                    <ul className="snswrab ani">
                        <li><a href="#"><img src="./img/2038868156_mMS63tzF_20220105102438.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="./img/2038868156_WAz9McsS_20220105102411.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="./img/2038868156_vsCkqU1p_20220105102153.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="./img/2038868156_8kZyzKBl_20211223055601.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="./img/2038868156_9F2Jvups_20211222051335.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="./img/2038868156_1k3RnNTY_20211222051302.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="./img/2038868156_jsEyUwox_20211207050659.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="./img/2038868156_PeT3lbcL_20211201044720.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="./img/2038868156_TEkcmIu6_20211124051858.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="./img/2038868156_Db5uXB1L_20211123042713.jpg" alt=""/></a></li>
                    </ul>
                </div>
            </main>
        </>
    );
}
export default Index;