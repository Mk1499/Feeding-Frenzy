var arr=["ali","ahmed","mohamed","koko"];
var n=document.getElementsByTagName("h2");
var t="230";
var k=parseInt(t);
for(var i=0;i<arr.length;i++){
    n[i].innerHTML=arr[i];
    k+=50;
    var q=k+"px";
    n[i+1].style.top=q;
}