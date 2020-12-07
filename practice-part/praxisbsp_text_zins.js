//Angabe-Funktionen für die Textaufgaben Zins (Funktion zur Auflösung/Ausbesserung wird direkt vom Tabellenbeispiel übernommen (s. praxisbsp_tabelle_ust.js))
//Grenzwerte für zufällig festgelegte Werte siehe Ende Skript
function zins_task_zinsen() {
	document.getElementById('answerfield').innerHTML = '';
	let zins_values = [[]];
	zins_values[0][0] = parseFloat((Math.random() * 90).toFixed(2) + 10);							//zufällige Festlegung Startkapital € [10; 100)
	zins_values[0][1] = Math.round(Math.random() * (max_zins - min_zins)) + min_zins;				//zufällige Festlegung Zinssatz
	zins_values[0][2] = (zins_values[0][0] * (1 + zins_values[0][1]/100)).toFixed(2);				//in Folge Berechnung Kapital nach 1, 3, 7 Jahren
	zins_values[0][3] = (zins_values[0][0] * Math.pow((1 + zins_values[0][1]/100), 3)).toFixed(2);
	zins_values[0][4] = (zins_values[0][0] * Math.pow((1 + zins_values[0][1]/100), 7)).toFixed(2);
	document.getElementById('questionfield').innerHTML = angabe_zins + field_table(values, zins_values, headers_zins_table);
}

function zins_task_kredit() {
	document.getElementById('answerfield').innerHTML = '';
	document.getElementById('questionfield').innerHTML = angabe_kredit;
	let startkredit = Math.round(Math.random() * (max_kredit - min_kredit)) + min_kredit;			//zufällige Bestimmung Startwert des Kredits
	let laufzeit = Math.round(Math.random() * (max_jahre - min_jahre)) + min_jahre;					//zufällige Bestimmung Laufzeit
	let zinssatz = Math.round(Math.random() * (max_zins - min_zins)) + min_zins;					//zufällige Bestimmung Zinssatz
	let endwert = startkredit * Math.pow((1 + zinssatz/100), laufzeit);								//in Folge Berechnung der beiden Ergebniswerte
	let rate = endwert / (12 * laufzeit);
	document.getElementById('kredit').innerHTML = startkredit;
	document.getElementById('laufzeit').innerHTML = laufzeit;
	document.getElementById('zinssatz').innerHTML = zinssatz;
	document.getElementById('gesamt').name = endwert.toFixed(2);
	document.getElementById('rate').name = rate.toFixed(2);
}

//allgemeine Angabe-Strings für die Textaufgabe
var angabe_kredit = 'Frau Huber möchte ein Eigenheim erwerben, hat aber nicht genügend Eigenkapital. Da Sie über ein regelmäßiges Einkommen verfügt, '+
				'genehmigt ihre Hausbank einen Kredit. Frau Huber nimmt diesen in Höhe von <span id="kredit"></span> € auf. Als Laufzeit werden '+
				'<span id="laufzeit"></span> Jahre vereinbart, der Zinssatz beträgt <span id="zinssatz"></span>%.<br><br>Berechne den Gesamtwert des '+
				'Kredits, sowie die monatliche Tilgungsrate:<br>Gesamtwert (€): <input type="text" id="gesamt"><br>'+
				'Tilgung/Monat (€): <input type="text" id="rate"><br><br><button onclick="check_task()">Überprüfen</button>';
				
var angabe_zins = 'Der kleine Fritzi bekommt von seiner Oma ein Sparbuch geschenkt. In Folge findest du einige Angaben zum Sparbuch, berechne die fehlenden'+
				' Werte.<br><br>';

//diverse Variablen, Domänen, Arrays, etc.				
var headers_zins_table = ['Startkapital in €', 'Zinssatz in %', 'Kapital nach einem Jahr', 'Kapital nach 3 Jahren', 'Kapital nach 7 Jahren'];
var min_kredit = 100000;
var max_kredit = 1000000;
var min_jahre = 5;
var max_jahre = 20;
var min_zins = 2;
var max_zins = 7;
