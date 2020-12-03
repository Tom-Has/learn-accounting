//Funktion, die bestimmte Parameter übernimmt und eine html-Tabelle als String retourniert
function field_table(credits_int, values_arr, headings_arr) {			//Beschreibung Parameter s. u. im Skript
	let head_len = headings_arr.length;
	let val_len = values_arr.length;									//Länge der Tabelle bzw. Zeilenzahl ohne Header-Reihe
	if(Math.round(credits_int) >= head_len)								//Auffangen des Umstands, dass es mehr oder gleich viele Angaben als Spalten gibt , was eine Rechenaufgabe sinnlos machen würde.
		return 'Es gibt gleich viele oder mehr anzuzeigende Werte als Spalten. Bitte die Parameter überprüfen und die Funktion neu aufrufen.<br>';
	else if(Math.round(credits_int <= 0))								//Auffangen des Umstands, dass keinen Wert oder eine negative Anzahl Werte anzuzeigen sinnlos ist
		return 'Es gibt keine oder eine negative Anzahl anzuzeigender Werte. Bitte die Parameter überprüfen und die Funktion neu aufrufen.<br>';
	else if(val_len <= 0 || head_len <= 0)
		return 'Es gibt keine oder eine negative Anzahl Zeilen bzw. Spalten. Bitte die Parameter überprüfen und die Funktion neu aufrufen.<br>';
	let cred;															//Zwischenvariable für die Zahl anzuzeigender Werte, ihr wird für jede Reihe neu der originale Wert zugewiesen
	let table = '<table><tr>';
	for(let i = 0; i < head_len; ++i)									//Befüllen der ersten Reihe mit Spaltenbezeichnungen
		table += '<th>'+headings_arr[i]+'</th>';
	table += '</tr>';
	for(let j = 0; j < val_len; ++j) {									//Start Schleife erster Ordnung für Angaben einer Reihe
		cred = Math.round(credits_int);									//"frische" Zuweisung des Originalwerts, s. o., inkl. Absicherung, dass eine ganze Zahl vorliegt
		let line_len = values_arr[j].length;							//line_len entspricht der field-Variable (Anzahl der Felder pro Reihe)
		table += '<tr>';
		for(let k = 0; k < line_len; ++k) {								//Start Schleife zweiter Ordnung für zufällige Bestimmung ob ein Wert angezeigt oder in einem input-Feld "versteckt" wird
			if(!cred)
				table += '<td><input type="text" name="'+values_arr[j][k]+'"></td>';
			else if(line_len - cred == k) {
				for(let l = k; l < line_len; ++l)						//Schleife dritter Ordnung für den Fall, dass genauso viele Werte noch anzuzeigen sind, wie Felder übrig
					table += '<td>'+values_arr[j][l]+'</td>';
				break;
			}
			else if(cred) {
				if(Math.round(Math.random())%2) {						//zufällige true/false-Unterscheidung per Modulo ob Wert oder input-Feld angezeigt wird
					--cred;
					table += '<td>'+values_arr[j][k]+'</td>';
				}
				else {
					table += '<td><input type="text" name="'+values_arr[j][k]+'"></td>';
				}
			}
		}
		table += '</tr>';
	}
	table += '</table><br><br><button onclick="check_task()">Überprüfen</button>';
	return table;														//return-Wert enthält den Button mit der Kontrollfunktion (alle Aufgaben werden planmäßig gleich ausgewertet)
}

/***
credits_int ... Anzahl der anzuzeigenden Werte (durch diverse Sicherungen natürliche Zahl)
values_arr ... Array mit sämtlichen anzugebenden Angabewerten für eine Berechnung (durch Absicherung natürliche Zahl)
headings_arr ... Array mit Strings für die Spaltenbezeichnungen der Tabelle (durch Absicherung natürliche Zahl)
***/
	