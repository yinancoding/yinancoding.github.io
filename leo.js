function clickme() {
    var val = document.getElementById("mytext").value;
    document.getElementById("myvalue").value = val;
    document.getElementById("mytext").value="";
}