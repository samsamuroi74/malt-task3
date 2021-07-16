let p1 = document.getElementById("p1");

p1.innerHTML = prompt("give here a value");

$(function () {
    $("#divcol-1").slideUp();
    $("#divcol-2").slideUp();
    $("#divcol-3").slideUp();
    $("#divcol-4").slideUp();
    $("#btn2-1").click(function () {
        $("#divcol-1").slideToggle("slow");
        $("#divcol-2").slideToggle("slow");
        $("#divcol-3").slideToggle("slow");
        $("#divcol-4").slideToggle("slow");
       
    })
    
})