$(function() {
    /**
     * slideshow
     */
    $('.slideshow').each(function() {
        var $slides = $(this).find('img'), //スライド画像が入っている(jqueryオブジェクト)
            slideCount = $slides.length,
            currentIndex = 0;
    
        // 1枚目を表示(初期遷移)
        $slides.eq(currentIndex).fadeIn();
    
        // スライド表示の間隔
        setInterval(showNextSlide,7500);
    
        function showNextSlide(){
            // 次に表示するスライドのインデックス
            // index + 1 の時、scでの除算での余りが0なら最初に戻る
            var nextIndex = (currentIndex + 1) % slideCount;
            // スライドのフェードイン。アウトの設定
            $slides.eq(nextIndex).fadeOut(); //表示終了
            $slides.eq(nextIndex).fadeIn(); //次を表示
    
            // 現在の枚数を取得
            currentIndex = nextIndex;
        }
    });
    $('.page-header').each(function (){
        var $window = $(window), //windowをオブジェクト化
            $header = $(this),
            // headerのデフォルトの位置を取得
            headerOffsetTop = $header.offset().top;
        $window.on('scroll',function(){
            // スクロール値を取得
            if($window.scrollTop() > headerOffsetTop){
                $header.addClass('sticky');
            }else{
                $header.removeClass('sticky');
            }
        });
        // scrolleイベントの発火
        $window.trigger('scroll');

    });
});