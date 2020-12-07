//Tabellenlänge bzw. Zeilenzahl bzw. Anzahl Aufgaben, sowie Spaltenbeschreibungen
var len_table = 1;
var headers_ust_table = ['Steuersatz in %', 'Netto-Betrag in €', 'Steuerbetrag in €', 'Brutto-Betrag in €'];

//Faktoren zur Überprüfung ob bereits für 2 Werte in der Tabelle vergeben worden sind
var credits = 0;															//Anzahl der restlichen anzugebenden Werte, wird am Beginn der Funktion auf values gesetzt
var values = 2;																//2 Werte sind für USt-Berechnungen anzugeben

//Punktezählervariable
var points = 0;																//Punkte nach einer Aufgabe

//Array für Steuersätze
var set = [0.1, 0.2, 0.13];

//Funktion für Bestimmung der gegebenen Variablen, Berechnung der fehlenden Variablen, Ausgabe der Aufgabe
function ust_task_table() {
	if(document.getElementById('num_ust_table').value)
		len_table = Math.round(document.getElementById('num_ust_table').value);
	let results = [];
	for(let res_row = 0; res_row < len_table; ++res_row) {
		results[res_row] = [];
		results[res_row][0] = set[Math.floor(Math.random()*3)]*100;												//zufällige Ermittlung eines von drei gegebenen Steuersätzen aus set[] (s.o.)
		results[res_row][1] = Math.floor(Math.random()*900)+100;												//zufällige Bestimmung eines Nettobetrages
		results[res_row][2] = parseFloat(((results[res_row][0]/100) * results[res_row][1]).toFixed(2));			//Berechnung Steuersatz absolut aus Netto mal Steuersatz
		results[res_row][3] = (results[res_row][2] + results[res_row][1]).toFixed(2);							//Berechnung Bruttobetrag aus Netto + Steuer absolut
	}
	let aufgabe = 'Berechne die fehlenden Einträge der folgenden Tabelle und überprüfe das Ergebnis durch Betätigung des unten stehenden Buttons.<br><br>';
	aufgabe += field_table(values, results, headers_ust_table);
	document.getElementById('questionfield').innerHTML = aufgabe;
	document.getElementById('answerfield').innerHTML = '';
}

//Prüfung und Ausgabe der Lösung
function check_task() {
	points = 0;
	let control = document.getElementById('questionfield').getElementsByTagName('input');
	let len = control.length;
	for(let a = 0; a < len; ++a) {
		let solution = parseFloat(control[a].name);
		let suggestion = parseFloat(control[a].value.replace(/,/g, '.'));
		if(suggestion == solution) {
			++points;
			control[a].style.color = 'green';
		}
		else {
			control[a].value = control[a].name;
			control[a].style.color = 'red';
		}
	}
	document.getElementById('answerfield').innerHTML = 'Du hast '+points+' richtige Antworten gegeben.';
}


