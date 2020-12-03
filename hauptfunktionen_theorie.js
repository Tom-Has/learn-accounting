//Angabe Theorie-Frage
function get_th(katalog) {
	//document.getElementById("answerfield").innerHTML = '';
	if(count >= katalog.length && spiel)
		return document.getElementById('varfield').innerHTML = 'Das war es auch schon. Hoffentlich hat dir dieser Durchlauf weitergeholfen.'+
		' Am besten machst du eine Pause und wenn du soweit bist, wählst du einfach eine neue Kategorie aus.';
	else if(count >= katalog.length && simulation)
		return document.getElementById('varfield').innerHTML = 'Du hast '+points+' von '+totalpoints+' Punkten ('
		+(points/totalpoints*100).toPrecision(2)+'%) erreicht. Bitte wende dich an deine Trainerin, um das Ergebnis zu besprechen.';
	if(katalog[count][0][7] == 'a') {
		mc = true;
		op_1 = false;
		op_2 = false;
	}
	else if(katalog[count][0][7] == 'b') {
		mc = false;
		op_1 = true;
		op_2 = false;
	}
	else if(katalog[count][0][7] == 'c') {
		mc = false;
		op_1 = false;
		op_2 = true;
	}
	shuffle_not_first(katalog[count]);
	var angabe = '';
	var len = katalog[count].length;
	for(var j = 0; j < len; ++j)
		angabe += katalog[count][j];
	if(spiel) {
		angabe += '<br><span><span><button type="button" onclick="resolve_spiel()" style="width:100px">Auflösung</button></span>';
		if(ust)
			angabe += '<span><button type="button" onclick="get_th(fragen_ust)" style="width:100px">Weiter</button></span></span>';
		else if(ea)
			angabe += '<span><button type="button" onclick="get_th(fragen_ea)" style="width:100px">Weiter</button></span></span>';
		else if(bh)
			angabe += '<span><button type="button" onclick="get_th(fragen_bh)" style="width:100px">Weiter</button></span></span>';
		else if(pv)
			angabe += '<span><button type="button" onclick="get_th(fragen_pv)" style="width:100px">Weiter</button></span></span>';
		else if(est)
			angabe += '<span><button type="button" onclick="get_th(fragen_est)" style="width:100px">Weiter</button></span></span>';
	}
	else if(simulation)
		angabe += '<br><span><button type="button" onclick="resolve_test()" style="width:100px">Weiter</button></span>';
	document.getElementById("varfield").innerHTML = angabe;
	++count;
}

//Auswertung des Übungsteils, hier werden keine Punkte vergeben, stattdessen Antworten je nach richtig oder falsch sofort farblich markiert
function resolve_spiel() {
	var collect = document.getElementById('varfield').getElementsByTagName('input');
	var len = collect.length;
	if(mc) {
		for(var loop = 0; loop < len; ++loop) {
			if(collect[loop].checked && collect[loop].parentElement.id!='0')
				collect[loop].parentElement.style.color = 'green';						//grün bei check und korrekte Antwort
			else if(collect[loop].checked && collect[loop].parentElement.id=='0')
				collect[loop].parentElement.style.color = 'red';						//rot bei check und nicht korrekte Atwort
			else if(!collect[loop].checked && collect[loop].parentElement.id!='0')
				collect[loop].parentElement.style.color = 'blue';						//blau bei nicht-check und korrekte Antwort
		}
	}
	else if(op_1) {
		for(var loop = 0; loop < len; ++loop) {
			if(collect[loop].name == collect[loop].value.trim()) {
				collect[loop].style.color = 'green';
				collect[loop].value = collect[loop].name;
			}
			else {
				collect[loop].style.color = 'red';
				collect[loop].value = collect[loop].name;
			}
		}
	}
	else if(op_2) {
		var answers = [];
		for(var fill = 0; fill < len; ++fill)
			answers[fill] = collect[fill].name;
		var answerslen = answers.length;
		for(var i = 0; i < len; ++i) {
			collect[i].className = 'marked';
			for(var j = 0; j < answerslen; ++j) {
				if(collect[i].value.trim() == answers[j]) {
					collect[i].style.color = 'green';
					//collect[i].value = collect[i].name;
					collect[i].className = '';
					answers.splice(j, 1);
					break;
				}
			}
			answerslen = answers.length;
		}
		var override = document.getElementsByClassName('marked');
		for(var k = 0; k < override.length; ++k) {
			override[k].style.color = 'red';
			override[k].value = answers[k];
		}
	}
}

//Auswertung der Testsimulation, hier werden die Fragen der Reihe nach abgearbeitet und Punkte vergeben
function resolve_test() {
	var collect = document.getElementById('varfield').getElementsByTagName('input');
	var len = collect.length;
	for(var l = 0; l < len; ++l)
		totalpoints = Math.round(eval(totalpoints+'+'+collect[l].parentElement.id)); console.log(totalpoints);
	if(mc) {
		for(var loop = 0; loop < len; ++loop)
			if(collect[loop].checked)
				points = eval(points+'+'+collect[loop].parentElement.id);
	}
	else if(op_1) {
		var collect = document.getElementById('varfield').getElementsByTagName('input');
		for(var loop = 0; loop < len; ++loop)
			if(collect[loop].name == collect[loop].value.trim())
				points = eval(points+'+'+collect[loop].parentElement.id);
	}
	else if(op_2) {
		var collect = document.getElementById('varfield').getElementsByTagName('input');
		var lens = collect.length;
		var answers = [];
		for(var fill = 0; fill < lens; ++fill)
			answers[fill] = collect[fill].name;
		var answerslen = answers.length;
		for(var i = 0; i < lens; ++i) {;
			for(var j = 0; j < answerslen; ++j) {
				if(collect[i].value.trim() == answers[j]) {
					points = eval(points+'+'+collect[i].parentElement.id);
					answers.splice(j, 1);
					break;
				}
			}
			answerslen = answers.length;
		}
	}
	if(ust)
		get_th(fragen_ust);
	else if(ea)
		get_th(fragen_ea);
	else if(bh)
		get_th(fragen_bh);
	else if(pv)
		get_th(fragen_pv);
}

//Aufruf Frage für USt-Rechnung
function ust_th() {
	ust = true;
	bh = false;
	pv = false;
	ea = false;
	est = false;
	common_tasks(fragen_ust)
}

//Aufruf Frage für E/A-Rechnung
function ea_th() {
	ust = false;
	bh = false;
	pv = false;
	ea = true;
	est = false;
	common_tasks(fragen_ea);
}

//Aufruf Frage für BH-Rechnung
function bh_th() {
	ust = false;
	bh = true;
	pv = false;
	ea = false;
	est = false;
	common_tasks(fragen_bh);
}

//Aufruf Frage für PV-Rechnung
function pv_th() {
	ust = false;
	bh = false;
	pv = true;
	ea = false;
	est = false;
	common_tasks(fragen_pv);
}

//Aufruf Frage für PV-Rechnung
function est_th() {
	est = true;
	ust = false;
	bh = false;
	pv = false;
	ea = false;
	common_tasks(fragen_est);
}

//gemeinsame Angelegenheiten für die hmtl-Button-Funktionen
function common_tasks(katalog) {		//übernimmt den jeweiligen Katalog-Array als Parameter zur weiteren Übergabe an die get_th()-Funktion
	count = 0;
	points = 0;
	totalpoints = 0;
	document.getElementById("varfield").innerHTML = '';
	spiel = document.getElementById('unverbindlich').checked;
	simulation = document.getElementById('simulation').checked;
	if(!spiel && !simulation)
		return document.getElementById('varfield').innerHTML = 'Bitte wähle die Art des Tests aus und betätige erneut den Bereichsbutton.';
	katalog.sort(function(a,b) {return 0.5 - Math.random()});
	get_th(katalog);		
}

//Zählervariable für Fragenkatalog-Iterationen, intialisiert mit 0
var count = 0;

//Zählervariablen für Punkte (Test-Ergebnis und gesamt für Katalog), initialisiert mit 0
var points = 0;
var totalpoints = 0;

//Flag-Variablen zu Unterscheidung ob MC oder offene Frage Typ 1 oder Type 2 ausgewertet werden soll, initialisiert mit false
var mc = false;
var op_1 = false;
var op_2 = false;

//Flag-Variablen zum "Fixieren" eines Katalogs, initialisiert mit false, werden in den jeweiligen Button-Funktionen gestellt
var ust = false;
var bh = false;
var ea = false;
var pv = false;
var est = false;

//Flag-Variablen ob Übungstest oder Testsimulation ausgewählt wurde, initialisiert mit false
var spiel = false;
var simulation = false;
