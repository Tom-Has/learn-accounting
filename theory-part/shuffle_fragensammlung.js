//Sortieren eines Arrays, wobei das erste Element unberührt bleibt, erstellt für den Array mit Fragen aus Allgemeinwissen (s. fragen_mc.js)
function shuffle_not_first(x) {
	var len = x.length;
	if(len <= 2)
		return console.log('Keine Sortierung möglich.');
	var inter;
	for(var i = 2; i < len; ++i) {
		if((Math.random() - 0.5) <= 0.1) {
			inter = x[i-1];
			x[i-1] = x[i];
			x[i] = inter;
		}
	}
}


