/************************************************
*alte Versionen von Funktionen und Fragenkatalog*
*Aufbewahrung zur Sicherheit*********************
*alles mögliche ist hier enthalten***************
************************************************/

/* 
//Angabe Beispiel USt
function aufgabe_ust() {
	document.getElementById("praxisantwort").innerHTML = '';
	document.getElementById("praxisfrage").innerHTML = angabe_ust;
	document.getElementById("randnr").innerHTML = Math.floor(Math.random()*(max-min)+min);
}

//Ausgabe Lösung USt
function loesung_ust() {
	var brutto = document.getElementById("randnr").innerHTML;
	var netto = brutto/(1+norm);
	if(document.getElementById("steuer").value == Math.round(netto))
		document.getElementById("answer").innerHTML += 'Korrekte Steuerangabe!<br>';
	else
		document.getElementById("answer").innerHTML += 'Falsche Antwort. Der korrekte Nettobetrag lautet '+Math.round(netto)+' €<br>';
	if(document.getElementById("netto").value == (brutto - Math.round(netto)))
		document.getElementById("answer").innerHTML += 'Korrekte Nettoangabe!<br>';
	else
		document.getElementById("answer").innerHTML += 'Falsche Antwort. Der korrekte Steuerbetrag lautet '+(brutto - Math.round(netto))+' €<br>';
}


//Angabe Allgemeinwissen
function aufgabe_allg() {
	document.getElementById("answer").innerHTML = '';
	if(count == 0)
		fragen.sort(function(a,b) {return 0.5 - Math.random()});
	var angabe = '';
	shuffle_not_first(fragen[count]);
	for(var i = 0; i < fragen[count].length; ++i) {
		angabe += fragen[count][i];
	}
	document.getElementById("question").innerHTML = angabe+'<br><button type="button" onclick="loesung_allg()">Auflösung</button>';
	if(count < fragen.length-1)
		++count;
	else
		count = 0;
}

//Ausgabe Lösung Allgemeinwissen
function loesung_allg() {
	if(document.getElementById("rightallg").checked)
		document.getElementById("answer").innerHTML = 'Korrekt!<br><br>';
	else
		document.getElementById("answer").innerHTML = 'Falsche Antwort. Bitte erneut probieren.<br><br>';
	document.getElementById("answer").innerHTML += '<button type="button" onclick="aufgabe_allg()">Nächste Frage</button>';
}

//alte Version für Fragen Allgemeinwissen
function aufgabe_allg() {
	var angabe = fragen[count];
	antworten[count].sort(function(a, b){return 0.5 - Math.random()});
	for(var i = 0; i < antworten[count].length; ++i) {
		angabe += antworten[count][i];
	}
	document.getElementById("question").innerHTML = angabe+'<br><button type="button" onclick="loesung_allg()">Auflösung</button>';
	if(count < fragen.length-1)
		++count;
	else
		count = 0;
}
*/

/*
//Fragen zu Allgemeines, dzt nicht vorhanden
var fragen_all = [];
var anzahl_all = 0;
for(var i = 0; i < anzahl_all; ++i)
	fragen_all[i] = [];
*/

/*
//scam Katalog zum Testen, USt-Button zum Aufrufen der Testfragen, vorher Ust-Katalog in diesem Skript auskommentieren!
var fragen_ust = []
var anzahl_ust = 4;		
for(var i = 0; i < anzahl_ust; ++i)
	fragen_ust[i] = [];
fragen_ust[0][0] = '<p id="a">Wer Wie Was Wo Wann?</p>';
fragen_ust[0][1] = '<span id="2"><input type="checkbox"> Dafür gibt es 2 Punkte.</span>';
fragen_ust[0][2] = '<span id="1"><input type="checkbox"> Dafür gibt es 1 Punkt.</span>';
fragen_ust[0][3] = '<span id="0"><input type="checkbox"> Dafür gibt es 0 Punkte.</span>';
fragen_ust[0][4] = '<span id="0"><input type="checkbox"> Dafür gibt es 0 Punkte.</span>';
fragen_ust[0][5] = '<span id="3"><input type="checkbox"> Dafür gibt es 3 Punkte.</span>';
fragen_ust[0][6] = '<span id="1"><input type="checkbox"> Dafür gibt es 1 Punkt.</span>';
fragen_ust[0][7] = '<span id="0"><input type="checkbox"> Dafür gibt es 0 Punkte.</span>';
fragen_ust[1][0] = '<p id="b">Wer Wie Was Wo Wann?</p>';
fragen_ust[1][1] = '<span>Was ist hier? &rarr; <span id="2"><input type="text" name="Dieses für 2 Punkte"></span></span>';
fragen_ust[1][2] = '<span>Was ist dort? &rarr; <span id="3"><input type="text" name="Jenes für 3 Punkte"></span></span>';
fragen_ust[2][0] = '<p id="c">Wer Wie Was Wo Wann?</p>';
fragen_ust[2][1] = '<span id="1"><input type="text" name="Wer"></span>';
fragen_ust[2][2] = '<span id="1"><input type="text" name="Wie"></span>';
fragen_ust[2][3] = '<span id="1"><input type="text" name="Was"></span>';
fragen_ust[2][4] = '<span id="1"><input type="text" name="Wo"></span>';
fragen_ust[2][5] = '<span id="1"><input type="text" name="Wann"></span>';
fragen_ust[3][0] = '<p id="a">Wer Wie Was Wo Wann?</p>';
fragen_ust[3][1] = '<span>Stimmt das? <span id="3"><input type="checkbox"> Ja, dafür gibt es 3 Punkte.</span><span id="0"><input type="checkbox"> Nein, keine Punkte.</span></span>';
fragen_ust[3][2] = '<span>Stimmt das? <span id="0"><input type="checkbox"> Ja, keine Punkte.</span><span id="2"><input type="checkbox"> Nein, dafür gibt es 2 Punkte.</span></span>';
*/

/*
//Fragen und Antworten zu Allgemeinwissen, decomment zur Demo-Verwendung, hier noch als radiobutton single choice
var fragen = [];
for(var i = 0; i < 3; ++i)	//Array wird manuell angepasst an die aktuelle Fragenmenge, hier sei noch bessere Lösung zu finden
	fragen[i] = [];
fragen[0][0] = "Wofür steht die Abkürzung BWL?<br><br>";
fragen[0][1] = '<input type="radio" name="frage0" id="rightallg">Betriebswirtschaftslehre<br>';
fragen[0][2] = '<input type="radio" name="frage0" id="wrongallg">Bunte Wunderlichter<br>';
fragen[0][3] = '<input type="radio" name="frage0" id="wrongallg">Berittene Wettexlieferanten<br>';
fragen[0][4] = '<input type="radio" name="frage0" id="wrongallg">Benehmen wir (uns) lieber<br>';
fragen[1][0] = "Wo ist der Begriff 'Unternehmen' definiert?<br><br>";
fragen[1][1] = '<input type="radio" name="frage1" id="rightallg">Im Unternehmensgesetzbuch UGB &sect;1<br>';
fragen[1][2] = '<input type="radio" name="frage1" id="wrongallg">Im Firmenbuch<br>';
fragen[1][3] = '<input type="radio" name="frage1" id="wrongallg">Im Büro<br>';
fragen[1][4] = '<input type="radio" name="frage1" id="wrongallg">Nirgendwo<br>';
fragen[2][0] = "Was kennzeichnet eine Kapitalgesellschaft im Unterschied zu einer Personengesellschaft?<br><br>";
fragen[2][1] = '<input type="radio" name="frage1" id="rightallg">Sie ist eine juristische Person<br>';
fragen[2][2] = '<input type="radio" name="frage1" id="wrongallg">Sie hat viel Kapital<br>';
fragen[2][3] = '<input type="radio" name="frage1" id="wrongallg">Ihre Gesellschafter sind reich<br>';
fragen[2][4] = '<input type="radio" name="frage1" id="wrongallg">Die Begriffe sind ident<br>';
*/