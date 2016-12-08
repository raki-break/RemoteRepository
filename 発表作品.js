var game = 0;
var i = 0;
var timer;
var textArray;
var kioku;
var sente_moti = [0,0,0,0,0,0,0];
var gote_moti = [0,0,0,0,0,0,0,0];

function test(){
	i++;
	var elem = document.getElementById("box");
	var elem2;
			
	if(textArray[i].indexOf("投了") != -1) clearInterval(timer);
	
	elem.scrollTop = i*24;
	elem.innerHTML = elem.innerHTML.replace(textArray[i],"<span class='this'>" + textArray[i] + "</span>");
	var kihu = "";
	textArray[i] = textArray[i].replace("<p class=\"p1\"><span class=\"s1\">","");
	textArray[i] = textArray[i].replace("</span></p>","");
	if(textArray[i].indexOf("打") == -1) kihu = textArray[i].substring(i.toString().length+1,textArray[i].indexOf("("));
	else{
		kihu = textArray[i].substring(i.toString().length+1,i.toString().length+5);
	}
	
	kihu = kihu.replace(" ","");
	kihu = kihu.replace("一","1");
	kihu = kihu.replace("二","2");
	kihu = kihu.replace("三","3");
	kihu = kihu.replace("四","4");
	kihu = kihu.replace("五","5");
	kihu = kihu.replace("六","6");
	kihu = kihu.replace("七","7");
	kihu = kihu.replace("八","8");
	kihu = kihu.replace("九","9");
	kihu = kihu.replace("１","1");
	kihu = kihu.replace("２","2");
	kihu = kihu.replace("３","3");
	kihu = kihu.replace("４","4");
	kihu = kihu.replace("５","5");
	kihu = kihu.replace("６","6");
	kihu = kihu.replace("７","7");
	kihu = kihu.replace("８","8");
	kihu = kihu.replace("９","9");
	
	if(kihu.indexOf("打") < 0){
		var moto = textArray[i].substring(textArray[i].indexOf("(")+1, textArray[i].indexOf(")"));
		elem = document.getElementById(moto.charAt(0) + "_" + moto.charAt(1));
		elem.innerHTML = "　";
	}
	else{
		kihu = kihu.replace("打","");
	
		if(i%2 == 1){
			if(kihu.charAt(2) == "飛") sente_moti[0]--;
			if(kihu.charAt(2) == "角") sente_moti[1]--;	
			if(kihu.charAt(2) == "金") sente_moti[2]--;
			if(kihu.charAt(2) == "銀") sente_moti[3]--;
			if(kihu.charAt(2) == "桂") sente_moti[4]--;
			if(kihu.charAt(2) == "香") sente_moti[5]--;
			if(kihu.charAt(2) == "歩") sente_moti[6]--;
			elem2 = document.getElementById("sente_motigoma");
			var tx = "";
			if(sente_moti[0] > 0) tx += "飛×" + sente_moti[0] + " ";
			if(sente_moti[1] > 0) tx += "角×" + sente_moti[1] + " ";
			if(sente_moti[2] > 0) tx += "金×" + sente_moti[2] + " ";
			if(sente_moti[3] > 0) tx += "銀×" + sente_moti[3] + " ";
			if(sente_moti[4] > 0) tx += "桂×" + sente_moti[4] + " ";
			if(sente_moti[5] > 0) tx += "香×" + sente_moti[5] + " ";
			if(sente_moti[6] > 0) tx += "歩×" + sente_moti[6] + " ";
			elem2.innerHTML = "先手持ち駒：" + tx;
		}
		else{
			if(kihu.charAt(2) == "飛") gote_moti[0]--;
			if(kihu.charAt(2) == "角") gote_moti[1]--;
			if(kihu.charAt(2) == "金") gote_moti[2]--;
			if(kihu.charAt(2) == "銀") gote_moti[3]--;
			if(kihu.charAt(2) == "桂") gote_moti[4]--;
			if(kihu.charAt(2) == "香") gote_moti[5]--;
			if(kihu.charAt(2) == "歩") gote_moti[6]--; 
			elem2 = document.getElementById("gote_motigoma");
			var tx = "";
			if(gote_moti[0] > 0) tx += "飛×" + gote_moti[0] + " ";
			if(gote_moti[1] > 0) tx += "角×" + gote_moti[1] + " ";
			if(gote_moti[2] > 0) tx += "金×" + gote_moti[2] + " ";
			if(gote_moti[3] > 0) tx += "銀×" + gote_moti[3] + " ";
			if(gote_moti[4] > 0) tx += "桂×" + gote_moti[4] + " ";
			if(gote_moti[5] > 0) tx += "香×" + gote_moti[5] + " ";
			if(gote_moti[6] > 0) tx += "歩×" + gote_moti[6] + " ";
			elem2.innerHTML = "後手持ち駒：" + tx;
		}
	}
	if(kihu.indexOf("成") > -1){
		kihu = kihu.replace("成","");
		kihu = kihu.replace("飛","竜");
		kihu = kihu.replace("角","馬");
		kihu = kihu.replace("銀","成銀");
		kihu = kihu.replace("桂","成桂");
		kihu = kihu.replace("香","成香");
		kihu = kihu.replace("歩","と");
	}
	
	if(kihu.indexOf("同") < 0){
		kioku = kihu.charAt(0) + "_" + kihu.charAt(1);
		elem = document.getElementById(kihu.charAt(0) + "_" + kihu.charAt(1));
		if(elem.innerHTML != "　" && i%2 == 1){
			if(elem.innerHTML == "飛" || elem.innerHTML == "竜") sente_moti[0]++;
			if(elem.innerHTML == "角" || elem.innerHTML == "馬") sente_moti[1]++;
			if(elem.innerHTML == "金") sente_moti[2]++;
			if(elem.innerHTML == "銀" || elem.innerHTML == "成銀") sente_moti[3]++;
			if(elem.innerHTML == "桂" || elem.innerHTML == "成桂") sente_moti[4]++;
			if(elem.innerHTML == "香" || elem.innerHTML == "成香") sente_moti[5]++;
			if(elem.innerHTML == "歩" || elem.innerHTML == "と") sente_moti[6]++;
			elem2 = document.getElementById("sente_motigoma");
			var tx = "";
			if(sente_moti[0] > 0) tx += "飛×" + sente_moti[0] + " ";
			if(sente_moti[1] > 0) tx += "角×" + sente_moti[1] + " ";
			if(sente_moti[2] > 0) tx += "金×" + sente_moti[2] + " ";
			if(sente_moti[3] > 0) tx += "銀×" + sente_moti[3] + " ";
			if(sente_moti[4] > 0) tx += "桂×" + sente_moti[4] + " ";
			if(sente_moti[5] > 0) tx += "香×" + sente_moti[5] + " ";
			if(sente_moti[6] > 0) tx += "歩×" + sente_moti[6] + " ";
			elem2.innerHTML = "先手持ち駒：" + tx;
		}
		else if(elem.innerHTML != "　" && i%2 == 0){
			if(elem.innerHTML == "飛" || elem.innerHTML == "竜") gote_moti[0]++;
			if(elem.innerHTML == "角" || elem.innerHTML == "馬") gote_moti[1]++;
			if(elem.innerHTML == "金") gote_moti[2]++;
			if(elem.innerHTML == "銀" || elem.innerHTML == "成銀") gote_moti[3]++;
			if(elem.innerHTML == "桂" || elem.innerHTML == "成桂") gote_moti[4]++;
			if(elem.innerHTML == "香" || elem.innerHTML == "成香") gote_moti[5]++;
			if(elem.innerHTML == "歩" || elem.innerHTML == "と") gote_moti[6]++;
			elem2 = document.getElementById("gote_motigoma");
			var tx = "";
			if(gote_moti[0] > 0) tx += "飛×" + gote_moti[0] + " ";
			if(gote_moti[1] > 0) tx += "角×" + gote_moti[1] + " ";
			if(gote_moti[2] > 0) tx += "金×" + gote_moti[2] + " ";
			if(gote_moti[3] > 0) tx += "銀×" + gote_moti[3] + " ";
			if(gote_moti[4] > 0) tx += "桂×" + gote_moti[4] + " ";
			if(gote_moti[5] > 0) tx += "香×" + gote_moti[5] + " ";
			if(gote_moti[6] > 0) tx += "歩×" + gote_moti[6] + " ";
			elem2.innerHTML = "後手持ち駒：" + tx;
		}
		if(kihu.indexOf("成") > -1) elem.innerHTML = kihu.substring(2,4);
		else elem.innerHTML = kihu.charAt(2);
	}
	else{
		elem = document.getElementById(kioku);
		if(elem.innerHTML != "　" && i%2 == 1){
			if(elem.innerHTML == "飛" || elem.innerHTML == "竜") sente_moti[0]++;
			if(elem.innerHTML == "角" || elem.innerHTML == "馬") sente_moti[1]++;
			if(elem.innerHTML == "金") sente_moti[2]++;
			if(elem.innerHTML == "銀" || elem.innerHTML == "成銀") sente_moti[3]++;
			if(elem.innerHTML == "桂" || elem.innerHTML == "成桂") sente_moti[4]++;
			if(elem.innerHTML == "香" || elem.innerHTML == "成香") sente_moti[5]++;
			if(elem.innerHTML == "歩" || elem.innerHTML == "と") sente_moti[6]++;
			elem2 = document.getElementById("sente_motigoma");
			var tx = "";
			if(sente_moti[0] > 0) tx += "飛×" + sente_moti[0] + " ";
			if(sente_moti[1] > 0) tx += "角×" + sente_moti[1] + " ";
			if(sente_moti[2] > 0) tx += "金×" + sente_moti[2] + " ";
			if(sente_moti[3] > 0) tx += "銀×" + sente_moti[3] + " ";
			if(sente_moti[4] > 0) tx += "桂×" + sente_moti[4] + " ";
			if(sente_moti[5] > 0) tx += "香×" + sente_moti[5] + " ";
			if(sente_moti[6] > 0) tx += "歩×" + sente_moti[6] + " ";
			elem2.innerHTML = "先手持ち駒：" + tx;
		}
		else if(elem.innerHTML != "　"){
			if(elem.innerHTML == "飛" || elem.innerHTML == "竜") gote_moti[0]++;
			if(elem.innerHTML == "角" || elem.innerHTML == "馬") gote_moti[1]++;
			if(elem.innerHTML == "金") gote_moti[2]++;
			if(elem.innerHTML == "銀" || elem.innerHTML == "成銀") gote_moti[3]++;
			if(elem.innerHTML == "桂" || elem.innerHTML == "成桂") gote_moti[4]++;
			if(elem.innerHTML == "香" || elem.innerHTML == "成香") gote_moti[5]++;
			if(elem.innerHTML == "歩" || elem.innerHTML == "と") gote_moti[6]++;
			elem2 = document.getElementById("gote_motigoma");
			var tx = "";
			if(gote_moti[0] > 0) tx += "飛×" + gote_moti[0] + " ";
			if(gote_moti[1] > 0) tx += "角×" + gote_moti[1] + " ";
			if(gote_moti[2] > 0) tx += "金×" + gote_moti[2] + " ";
			if(gote_moti[3] > 0) tx += "銀×" + gote_moti[3] + " ";
			if(gote_moti[4] > 0) tx += "桂×" + gote_moti[4] + " ";
			if(gote_moti[5] > 0) tx += "香×" + gote_moti[5] + " ";
			if(gote_moti[6] > 0) tx += "歩×" + gote_moti[6] + " ";
			elem2.innerHTML = "後手持ち駒：" + tx;
		}
		if(kihu.indexOf("成") > -1) elem.innerHTML = kihu.substring(1,3);
		else elem.innerHTML = kihu.charAt(1);
	}
	
	if(i%2 == 1 && elem.innerHTML.length == 1) elem.className = "sente_koma";
	else if(i%2 == 0 && elem.innerHTML.length == 1) elem.className = "gote_koma";
	else if(i%2 == 1 && elem.innerHTML.length == 2) elem.className = "sente_koma2";
	else elem.className = "gote_koma2";
	
}
function startfnc()
{
	var elem;
	if(game == 0){
		game = 1;
		elem = document.getElementById("box");
		elem.scrollTop = 0;
		var kihu_text = elem.innerHTML.substring(elem.innerHTML.indexOf("手数"), elem.innerHTML.length);
		if(kihu_text.indexOf("<br>") != -1) textArray = kihu_text.split("<br>");
		else textArray = kihu_text.split(/\r\n|\r|\n/);
		elem.innerHTML = "";
		
		for(var num=0; num<textArray.length;num++){
			elem.innerHTML += textArray[num];
			if(textArray[num].indexOf("</p") == -1) elem.innerHTML += "<br>";
		}
	}
	elem = document.getElementById("time");
	timer = setInterval("test()",parseInt(elem.value)*1000);
}
function stopfnc()
{
	clearInterval(timer);
}