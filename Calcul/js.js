function fun(id) {
  a = document.getElementById(id).value;
  String(a);
  ch=document.getElementById("resultat").value;

  
  
  if (ch.length > 0){
    if (!( (["+","-","*","/"].includes(ch.charAt((ch.length)-1))) && (["+","-","*","/"].includes(a)))){
      ch+=a;
      document.getElementById("resultat").value=ch;
    }
    else{
      ch=ch.substr(0,ch.length-1)+a;
      document.getElementById("resultat").value=ch;
    }
  }
  else if (!(["+","-","*","/"].includes(a))){
    ch+=a;
    document.getElementById("resultat").value=ch;

}
}
function res() {
  a = document.getElementById("resultat").value;
  Number(a);
  document.getElementById("resultat").value = a;
}

function calcul() {
  document.getElementById("resultat").value = eval(document.getElementById("resultat").value
  );
}

function fulldel() {
  document.getElementById("resultat").value = "";
}

function dele() {
  document.getElementById("resultat").value = (document.getElementById("resultat").value).substr(0, (document.getElementById("resultat").value).length - 1);
}
