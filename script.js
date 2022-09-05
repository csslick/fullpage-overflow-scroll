$(document).ready(function () {
  
  $('#fullpage').fullpage({
    //options here
    responsiveWidth: 1000, // fullpage 해제 분기점
    scrollOverflow: true, // 부분 스크롤 영역 지정(.fp-auto-height-responsive)
    sectionsColor: ['gold', '#1abc9c', '#fff'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'], // 이동 위치명
    menu: '#menu',
    navigation: true,
    navigationTooltips: ['Portfolio', 'My works', '333'],
    navigationPosition: 'right',

    // 이벤트 methods
    // 페이지 진입시(액션)
    afterLoad: function (anchorLink, index) {
      console.log(index);

      // 4번째 페이지에 들어오면
      if(index == 4) {
        $('#section4 > div').append('<p>원대한 꿈에 도약합니다!</p>');
        $('#rocket').addClass('play');
      } else { $('#rocket').removeClass('play'); }
    },

  });

  $('#section3').on('mousewheel DOMMouseScroll drag', function (e) {
  
    let el = document.querySelectorAll('#section3 .fp-scroller')[0];
    let { translateY } = getTranslateXY(el)  
    console.log(translateY)

    if(translateY < -200) {
      $(this).find('.box').eq(1).css('color', 'red')
    }
});

});

// translateXY 이동값 채크
function getTranslateXY(element) {
  const style = window.getComputedStyle(element)
  const matrix = new DOMMatrixReadOnly(style.transform)
  return {
      translateX: matrix.m41,
      translateY: matrix.m42
  }
}