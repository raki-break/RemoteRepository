function add_Retu(){
	var table = document.getElementById("ex");
	
	var row =  table.rows[0].insertCell(-1);
	var ALF = alf(table.rows[0].cells.length-1);
	row.innerHTML = ALF;
	row.className = 'row_h';
	
	for(var i = 1; i < table.rows.length; i++){
		var row =  table.rows[1];
		row.id = 'tr_' + i;
		table.appendChild(row);
			
		var n_cell = table.rows[i].insertCell(-1);
		n_cell.id = 'tr_' + i + '_td_' + ((table.rows[0].cells.length-1).toString());
		row.appendChild(n_cell);
		
		var n_text = document.createElement('textarea');
		n_text.id = "ta_" + i + "_" + (table.rows[0].cells.length-1).toString();
		n_cell.appendChild(n_text);
		n_text.value = "";
	}
}
function add_Gyou(){
	var table = document.getElementById('ex');
	var row = table.insertRow(-1);
	var row_num = row.insertCell(-1);
	
	row.id= 'tr_' + (table.rows.length-1).toString();
	table.appendChild(row);
	
	row_num.innerHTML = table.rows.length-1;
	row_num.className = 'row';
	
	for(var i = 0; i < table.rows[0].cells.length-1; i++){
		
		var n_cell = row.insertCell(-1);
		n_cell.id = 'tr_' + (table.rows.length-1).toString() + '_td_' + (table.rows[table.rows.length-1].cells.length-1).toString();
		row.appendChild(n_cell);
		n_cell.innerHTML = "";
		
		var n_text = document.createElement('textarea'); 
		n_text.id = "ta_" + (table.rows.length-1).toString() + "_" + (table.rows[table.rows.length-1].cells.length-1).toString();
		n_cell.appendChild(n_text);
		n_text.value = "1";
	}
}
function Keisan(){
	var table = document.getElementById('ex');
	
	for(var y = 1; y < table.rows.length; y++){
		var kei = 0;
		var count = 0;
		for(var x = 1; x < table.rows[0].cells.length-1; x++){
			var array = ['０', '１', '２', '３', '４', '５', '６', '７', '８', '９']
			
			for(var i = 0; i < 10; i++){
				document.getElementById('ta_' + y + '_' + x).value = document.getElementById('ta_' + y + '_' + x).value.replace(array[i],i);
			}
		
			if(parseInt(document.getElementById('ta_' + y + '_' + x).value)*0 == 0){
				count++;
				if(document.getElementById('pa').innerHTML=="×" && count > 1) kei = kei * parseInt(document.getElementById('ta_' + y + '_' + x).value);
				else kei += parseInt(document.getElementById('ta_' + y + '_' + x).value);
			}
		}
		if(kei*0 == 0) document.getElementById('ta_' + y + '_' + (table.rows[0].cells.length-1).toString()).value = kei;
		else document.getElementById('ta_' + y + '_' + (table.rows[0].cells.length-1).toString()).value = "計算不能！";
	}
}
function kigou(){
	var kei = document.getElementById('pa');
	if(kei.innerHTML == "+") kei.innerHTML = "×";
	else kei.innerHTML = "+";
}
function alf(num){
	var AL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if(num % 26 == 0) return (AL.substring((num-1)/26-1,(num-1)/26) + "Z");
	else if(num > 26) return (AL.substring(num/26-1,num/26) + AL.substring(num%26-1,num%26));
	else return AL.substring(num%26-1,num%26);
}