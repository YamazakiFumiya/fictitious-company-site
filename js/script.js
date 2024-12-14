$('.nav_list li a').hover(
    function() {
        $(this).addClass('is-hover');
    },
    function() {
        $(this).removeClass('is-hover');
    }
);
$(function(){
    $('.js-go-top').click(function(){
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top;
        var speed = 500;
        $('html, body').animate({scrollTop: position}, speed, 'swing');
    });
});
// //フッター手前で止まるボタン
$(document).ready(function () {
  $(window).on("scroll", function () {
    var scrollHeight = $(document).height(); //ドキュメントの高さ
    var scrollPosition = $(window).height() + $(window).scrollTop(); //現在の位置
    var footerHeight = $("footer").innerHeight(); //フッターの高さ70 53
    var footerHeight2 = parseInt($('.please2').css('padding-bottom'), 10);
    var footerHeight3 = $(".box15").innerHeight(); //フッター上の高さ519 525
    var footerHeighttotal = footerHeight + footerHeight2 + footerHeight3 //739 568
    if (scrollHeight - scrollPosition <= footerHeighttotal) { //ドキュメントの高さと現在の位置の差がフッターの高さ以下のとき
      $(".js-go-top").css({ position: "absolute", bottom: footerHeighttotal + 0 }); //poisitionをabsoluteに変更
    } else { //それ以外の場合は
      $(".js-go-top").css({ position: "fixed", bottom: "0px" }); //固定で表示
    }
  });
});
$(function () {
    // ハンバーガーメニューボタンがクリックされたときのイベントハンドラを設定
    $('input[type=checkbox]').change(function () {
      // 現在のbodyタグのoverflowスタイルを確認
      if ($("body").css("overflow") === "hidden") {
        // もしoverflowがhiddenなら、bodyのスタイルを元に戻す
        $("body").css({ overflow: "" });
        $('.sample-popup-background').css({
          'position': 'fixed', 
          'width': '0%',
        });
      } else {
        // そうでなければ、bodyにoverflow: hiddenを設定し、スクロールを無効にする
        $("body").css({ overflow: "hidden" });
        $('.sample-popup-background').css({
          'position': 'fixed',  
          'width': '100%',
          'height': '100%',
          'background': '#00000099',
          'top': '0',
          'left': '0',
          'z-index': '10',
        });
      }
    });
});
