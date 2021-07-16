
$(function () {
    $("#login").hide();
    $(".btn1").click(function () {
        $("#login").show(3000);
    })
})

function openPage2() {
    alert("you are successfully registered");
    document.getElementById("nav-div").style.display = "block";
    alert("click on page2 ")
}
function checkLogin() {
    let inp1 = document.getElementById("inp1");
    if (inp1.value < 5) {
        alert("check your name")
        //document.getElementById("inp1label").style.display = "block";
    } else {
        openPage2();
    }
}

    
        
    