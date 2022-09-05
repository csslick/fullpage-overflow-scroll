#fullpage example
## demo: https://csslick.github.io/fullpage-overflow-scroll/#fourthPage


## scroll content 영역의 스크롤 감지
translate로 이동하여 해당 값을 이벤트로 감지한다
```
  $('section').on("mousewheel DOMMouseScroll", function () {
    // 스크롤 채크할 요소
    let el = document.querySelectorAll("section .fp-scroller")[0];

    // 스크롤값 호출
    let { translateY } = getTranslateXY(el);
    console.log(translateY);

    // 스크롤 범위 판정
    if (translateY < -200) {
      $(this).find(".box").eq(1).css("color", "red");
    }
  });


  // translateXY 이동값 채크
  function getTranslateXY(element) {
    const style = window.getComputedStyle(element);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return {
      translateX: matrix.m41,
      translateY: matrix.m42,
    };
  }  

```
