$(function() {
    // 「#change-text」要素に対するclickイベントを作成してください
    $('#change-text').click(function(){
      $('#text').text('ようこそ、Progateへ');
    })
    
    // 「#change-html」要素に対するclickイベントを作成してください
    $('#change-html').click(function(){
      $('#text').html('<a href="https://prog-8.com/">ようこそ、Progateへ</a>');
    })

    // 「.list-item」要素に対するclickイベントを作成してください
    $('.list-item').click(function(){
        $(this).css('color','red');
    })

    //HTMLの変換
    $('.btn').click(function() {
        // $('#title')を変数$titleに代入してください
        var $title = $('#title');
        
        // 「#title」に対する3つのメソッドを、変数を使って書き換えてください
        $title.css('color', 'red');
        $title.html('こんばんは、にんじゃわんこさん');
        $title.fadeOut(1000);
        
        // 「#text」に対する3つのメソッドを、メソッドチェーンを使って書き換えてください
        $('#text').css('color', 'blue')
        .html('<h3>jQueryをマスターしましょう！</h3>')
        .fadeOut(1000);
    });
    // findメソッド
    $('#find-method').click(function() {
        // findメソッドで、「#wrapper」内にあるすべての「a」要素を取得し、
        // cssメソッドで文字の色をredに指定してください
        $('#wrapper').find('a').css('color','red');
        
      });
      
    $('#children-method').click(function() {
        // childrenメソッドで、「#wrapper」の一階層下にある「a」要素を取得し、
        // fadeOutメソッドで隠してください
        $('#wrapper').children('a').fadeOut();
    });

    // hovewrイベント
    $('#language-wrapper').hover(
        function(){
            $('.language-text').fadeIn();
        },
        function(){
            $('.language-text').fadeOut();
        }
    );
    $('#login-show').click(function(){
        $('#login-modal').fadeIn();
      });
      
      $('.signup-show').click(function(){
        $('#signup-modal').fadeIn();
      });
      
      // 「.close-modal」要素にclickイベントを設定してください
      $('.close-modal').click(function(){
        $('#login-modal').fadeOut();
        $('#signup-modal').fadeOut();
      });

    // 説明文を表示
    $('.lesson-hover').hover(
        function(){
            //子要素を取得なので
            $(this).find('.this-context').addClass('text-active');
        },
        function(){
            $(this).find('.this-context').removeClass('text-active');
        },
    );

      // FAQのアコーディオン
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('+');
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();
      $(this).find('span').text('-');
    }
  });
});