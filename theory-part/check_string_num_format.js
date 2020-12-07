//Funktion zum Testen, ob ein String im unten beschriebenen Zahlenformat eingegeben worden ist
function num_format(string) {
	var errors = -1;																	//Zähler für Formatfehler, Start bei -1 weil die Art der Testung einen scheinbaren Fehler bezüglich des letzten Zeichens verursacht
	var len = string.length;															//Länge des Strings
	for(var test = 0; test < len; ++test) {												//Durchtesten ob die Punkt-Strich-Reihenfolge eingehalten wird
		if(string[test] == ',' && string[test+4] != '.')
			++errors;
		else if(string[test] == '.' && string[test+4] != ',')
			++errors;
	}
	if(errors > 0)																		//Ausgabe wie viele Fehler im Format bez. . g. Rehenfolge begangen worden sind; kann ggf. komplett weggelassen werden
		alert('Du hast ' + errors + ' Formatfehler gemacht. Betätige OK und frage ggf. bei deiner Trainerin nach.');
	string = string.replace(irrelevant, '');											//lösche die u. g. Zeichen aus dem übergebenen String
	for(var i = len-1; i >=0; --i) {													
		if(string[i] == '.') {															//ist erstes Zeichen von hinten ein Punkt, so ist bei korrekter Eingabe eine ganze Zahl eingegeben worden	
			string = string.replace(sep, '');											//lösche alle nicht Zahlenzeichen
			return parseInt(string);													//Integer als Rückgabewert
		}
		else if(string[i] == ',') {
			var num_array = string.split('');											//String wird zu Array konvertiert, da das Komma als Zeichen einer Dezimalzahl erhalten bleiben muss
			string = '';																//String wird geleert, damit unten kein neuer angelegt werden muss	
			num_array[i] = '.';															//erstes Komma von hinten wird zu Punkt umgeschrieben, damit parseFloat() korrekt angewandt werden kann
			for(var j = 0; j < i; ++j)
				if(num_array[j] == ',' || num_array[j] == '.')
					num_array[j] = '';													//alle übrigen Kommata oder Punkt werden durch leeres Byte ersetzt, dies würde bei einem String in JS nicht funktionieren
			for(var k = 0; k < num_array.length; ++k)
				string += num_array[k];													//Neubeschreibung von string mit Ziffernzeichen inkl. des nötigen Punkts für parseFloat()
			return parseFloat(string);													//Fließkommazahl als Rückgabewert
		}
	}
}

//diverse regular expression Muster
var sep = new RegExp("[,.]", "g");
var irrelevant = new RegExp("[^0-9.,]", "g");
