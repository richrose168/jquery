$(function() {
    function clear(){
        $("span[id = 'errorid']").text('');
        $("span[id = 'errorpass']").text('');
    }
    $('form').submit(function() {
        clear();
        var errorId = true;        
        var errorPass = true;  
        if($('#userid').val() === ''){
            errorId = false;
            $("span[id = 'errorid']").text('入力してください');
        }
        if($('#pass').val() === ''){
            errorPass = false;
            $("span[id = 'errorpass']").text('入力してください');
        }
        if(!errorId ||  !errorPass){
            return false
        }
        window.location.href = "/form.html";
    });
    $('.button').on('click', function() {
        // $(this).toggleClass('fa-eye fa-eye-slash');
        // var input = $(this).prev('input');
        var input = $("input[id = 'pass']");
        if (input.attr('type') == 'text') {
          input.attr('type','password');
        } else {
          input.attr('type','text');
        }
    });

    $('#btnAdd1').click(function() {
        $("#tblForm1 tbody tr:first-child").clone(true).appendTo("#tblForm1 tbody");
        // 複製時に
        $("#tblForm1 tbody tr:last-child input").val("");
    })
});