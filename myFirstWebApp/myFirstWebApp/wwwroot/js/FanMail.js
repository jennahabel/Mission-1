//document.getElementById("ButtonSend").addEventListener("click", function () {
//    alert("From: " + document.getElementById("txtFrom").value +
//          ", Subject: " + document.getElementById("txtSub").value +
//          ", Message: " + document.getElementById("txtMes").value);
//})

$("#ButtonSend").click(function () {
    alert("From: " + $("#txtFrom").val() +
        ", Subject: " + $("#txtSub").val() +
        ", Message: " + $("#txtMes").val());

    $("#pic").fadeOut("slow");
})