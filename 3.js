$(function () {
    $("#btn3-1").click(function () {
        
        $("li").append("<b>list added to end</b>");
        
    })
    $("#btn3-2").click(function () {
        
        $("li").prepend("<li>list added to start</li>");
        
    })
})