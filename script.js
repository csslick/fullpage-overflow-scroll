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
      // 3번째 페이지에 들어오면
      if(index == 4) {
        $('#section4 > div').append('<p>원대한 꿈에 도약합니다!</p>');
        $('#rocket').addClass('play');
      } else { $('#rocket').removeClass('play'); }
    }
  });

});


