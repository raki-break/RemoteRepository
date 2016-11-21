function sw(){
   if(document.getElementById("swich").value == "切り替え")
   {
	document.getElementById("swich").value = "戻す";
	document.getElementById("tx").innerHTML = "<font color=\"blue\"><td>フリガナ";
	document.getElementById("tx2").innerHTML = "タケダコウ";
	alert("画面を切り替えました。");
   }
   else
   {
	document.getElementById("swich").value = "切り替え";
	document.getElementById("tx").innerHTML = "<font color=\"red\">名前";
	document.getElementById("tx2").innerHTML = "竹田滉";
	alert("画面を戻しました。");
   }
}