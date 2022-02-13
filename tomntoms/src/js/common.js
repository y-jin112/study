
// $('.trigger-menu').click(function(){
//     $('.aside-on').toggleClass('active');
// })


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






