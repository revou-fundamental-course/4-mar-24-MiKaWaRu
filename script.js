
function hapus() {
    
    document.getElementById("bobot").value = "";
    document.getElementById("duwur").value = "";
}

function pira(){
    var bb=document.getElementById("bobot").value;
    var tb=document.getElementById("duwur").value;
    var ha= bb/tb^2 ;
    document.getElementById("risult").value=ha;
}

