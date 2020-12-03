//Angabe-Funktion für die Textaufgabe USt (Funktion zur Auflösung/Ausbesserung wird direkt vom Tabellenbeispiel übernommen (s. praxisbsp_tabelle_ust.js) 
function ust_task_text() {
	document.getElementById('answerfield').innerHTML = '';
	document.getElementById('questionfield').innerHTML = angabe;
	let set_index = Math.floor(Math.random()*3);							//zufällige Festlegung eines der drei Steuersätze aus dem set[]-Array (s. praxisbsp_tabelle_ust.js) 
	let curr_set = set[set_index];
	document.getElementById('satz').name = curr_set*100;					
	if(Math.round(Math.random())%2) {										//zufällige Festlegung ob Rolle Unternehmer oder Endverbraucher
		role = false;
		document.getElementById('role').innerHTML = 'Endverbraucher';
	}
	else {
		role = true;
		document.getElementById('role').innerHTML = 'Unternehmer';
	}
	document.getElementById('product').innerHTML = product_groups[set_index][Math.floor(Math.random()*4)];		//zufällige Auswahl eines Produkts aus dem Index des zugehörigen Steuersatzes
	let price = (Math.random()*(max - min) + min).toFixed(2);													//zufällige Festlegung eines Preises aus dem unten definierten Intervall
	document.getElementById('price').innerHTML = price;
	if(role) {																									//Berechnung der Absolutbeträge der Steuer je nach Rolle
		document.getElementById('betrag').name = (price * curr_set).toFixed(2);
	}
	else { 
		document.getElementById('betrag').name = ((price * curr_set)/(curr_set + 1)).toFixed(2);
	}
}

//allgemeiner Angabe-String für die Textaufgabe
var angabe = 'Herr Huber ist <span id="role"></span> und erwirbt das Produkt <span id="product"></span>. Er bezahlt <span id="price"></span> €.<br>'+
			'Gib im Folgenden den anzuwendenden Steuersatz an, sowie den Absolutbetrag der Steuer.<br>Tipp: Ausgaben von Unternehmern werden üblicherweise'+
			' netto betrachtet. Falls du bei Steuersätzen unsicher bist, welcher anzuwenden ist, wende dich bitte an deine Trainerin.<br><br>'+
			'Steuersatz in %: <input type="text" id="satz"><br>Betrag in €: <input type="text" id="betrag"><br><br>'+
			'<button onclick="check_task()">Überprüfen</button>';

//Initialisierung von diversen Variablen, Domänen, etc.
var role = true;													//Festlegung ob Kunde oder Unternehmer, initialisiert mit true (Unternehmer)
var min = 10;														//Minimum für Beträge aus Zufallsbereich
var max = 100;														//Maximum für Beträge aus Zufallsbereich

//Array für Productgruppen geteilt nach Steuersätzen (letztere im Array gleich inkludiert)
var product_groups = [];
for(let a = 0; a < 3; ++a) {										//Schleife geht bis 3, da drei Steuersätze vorhanden (0: 10%, 1: 20%, 2: 13%)
	product_groups[a] = [];
}

//manuelle Befüllung des Arrays für Produktgruppen
product_groups[0][0] = 'Ticketstreifen für die U-Bahn';
product_groups[0][1] = 'Mittel zur Behandlung einer Erkältung';
product_groups[0][2] = 'aktueller Perry-Rhodan-Roman';
product_groups[0][3] = 'Coffee-to-go mit Topfengolatsche';
product_groups[1][0] = 'Fahrrad-Ersatzteile';
product_groups[1][1] = 'Schachbrett samt Figuren';
product_groups[1][2] = 'Couchpolster';
product_groups[1][3] = 'Bestecksammlung';
product_groups[2][0] = 'Kinokarte für aktuellen Horror-Krimi';
product_groups[2][1] = 'Goldfisch fürs Aquarium';
product_groups[2][2] = 'Pflanzen zur Raumbegrünung';
product_groups[2][3] = 'Brennholz';