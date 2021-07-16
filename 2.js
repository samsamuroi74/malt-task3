let p1 = document.getElementById("p1");

p1.innerHTML = prompt("give here a value");

$(function () {
    $("#divcol-1").slideUp();
    $("#btn2-1").click(function () {
        $("#divcol-1").slideToggle("slow");
       
    })
    
})