//----modal----//
$(function () {
    /*--偵測是否打開--*/
    var flag = 0;
    
    /*--預設--*/
    $('.top-modal').modal('show');
    $('.right-modal').modal('show');

    /*--滾輪設定--*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1 && flag == 0) {
            $('.wrap').attr("style", " top:-69px");
            $('.c-content').attr("style", " margin-top:100px");
        }
        else {
            $('.wrap').attr("style", " top:0px");
            $('.c-content').attr("style", " margin-top:0px");
        }
    }).scroll();
    /*--偵測關閉--*/
    $('.top-modal').on('hide.bs.modal', function () {
        flag = 1;
    })
});
//----HEADER OPEN CLOSE----//
$(function () {
    /*--預設--*/
    $('.nav_right').attr("style", "width:0; height:0;font-size:0px;padding:0")
    $('nav a').attr("style", "width:50px")
    $('.top_right img').attr("style", "width:0px")
    $('nav .card').attr("style", "display:none")
    $('.mainContent').attr("style", "left:50px;width:calc(100% - 50px)")
    $('.c-nav').attr("style", "width:calc(100% - 50px)")
    $('.page_click').attr("style", "position: fixed;height: 60px;top: 50%;transform: translateY(-50%);left: 0;padding: 0 10px 0 60px;")
    
    /*--改變--*/
    $(".header_btn").click(function () {
        var t = $('.header_btn').attr("title")
        if (t == "主選單打開") {
            $("#H1").attr("style", "width:230px")
            $('.header_btn').attr("title", "主選單隱藏")
            $('.header_btn').css("left", "217px")
            $('.header_btn i').attr("class", "far fa-chevron-left")
            $('.top_right').attr("style", "margin: 0 26.5px 0 0")
            $('.top_right img').attr("style", "width:auto;")
            $('.nav_right').attr("style", "width:auto; font-size:18px;padding: 8px 0px")
            $('nav a').attr("style", "width:230px")
            $('nav .card').attr("style", "display:block")
            $('.mainContent').attr("style", "left:230px;width:calc(100% - 230px)")
            $('.c-nav').attr("style", "width:calc(100% - 230px)")
            $('.page_c-content').css("padding", "125px 20px 30px 20px")
            $('.page_click').attr("style", "position:relative;height: 60px;margin: 50px 0")
            $('.page_click li a').attr("style", "color: #999;text-shadow: none;opacity: 1;width: 410px")
            $('.page_click li img').attr("style", "display:block")
            $('.page_click li span').attr("style", "display:block")
        }
        else {
            $("#H1").attr("style", "width:50px")
            $('.header_btn').attr("title", "主選單打開")
            $('.header_btn').css("left", "38px")
            $('.header_btn i').attr("class", "far fa-chevron-right")
            $('.top_right').attr("style", "margin: 0 0 0 0")
            $('.top_right img').attr("style", "width:0;")
            $('.nav_right').attr("style", "width:0; font-size:0px;padding: 0")
            $('nav a').attr("style", "width:50px")
            $('nav .card').attr("style", "display:none")
            $('.mainContent').attr("style", "left:50px;width:calc(100% - 50px)")
            $('.c-nav').attr("style", "width:calc(100% - 50px)")
            $('.page_c-content').css("padding", "125px 110px 30px 110px")
            $('.page_click').attr("style", "position: fixed;height: 60px;top: 50%;transform: translateY(-50%);left: 0;padding: 0 10px 0 60px;")
            $('.page_click li a').attr("style", "color: #fff;text-shadow: 0 1px 10px #000;opacity: 0.7;width: 60px")
            $('.page_click li img').attr("style", "display:none")
            $('.page_click li span').attr("style", "display:none")
        }
        $(".nav-main").scrollTop("0") //滾動歸零
        scroll__()
    })
}
);
//----其他----//
$(function () {
    /*--tooltip--*/
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body',
        boundary: 'header'
    });
    
    $("#refer").click(function () {
        var btnVal = $('#refer').attr("alt")
        console.log(btnVal)
		if (btnVal == "參考資料v") {
            $('#refer i').attr("class", "far fa-chevron-up")
            $('#refer').attr("alt", "參考資料^")
            $('.refer ul').css("display", "block")
		}
		else{
            $('#refer i').attr("class", "far fa-chevron-down")
            $('#refer').attr("alt", "參考資料v")
            $('.refer ul').css("display", "none")

        }
	});
})
function scroll__(){
    /*--自製假滾輪--*/
    var scroll_=0;  //滾動多少
    var scale_= $('.nav-main ul').height() / $('.nav-main').height() //可視範圍占整體比例
    var scroll_float=0;
    var scroll_h= ($('.nav-main').height() / $('.nav-main ul').height())*$('.nav-main').height()
    $('.scroll-bar').attr("style", "height:"+scroll_h+"px")
    $('.nav-main').scroll(function () {
        scroll_=$(this).scrollTop()
        scroll_float = scroll_ / scale_ //總滾動大小轉換成可視範圍比例大小
        $('.my-scroll').attr("style", "top:"+scroll_+"px");
        $('.scroll-bar').attr("style", "top:"+scroll_float+"px;height:"+scroll_h+"px");
    })}
