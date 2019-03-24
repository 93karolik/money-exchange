// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var coinH = 50;
	var coinQ = 25;
	var coinD = 10;
	var coinN = 5;
	var coinP = 1;

	var currency = currency;

	var obj = {};

 	if (currency > 10000){
  		obj.error="You are rich, my friend! We don't have so much coins for exchange";
  		return obj
		
	} else if (currency <= 0) {
    	return obj;
	} else {
		if(currency/coinH < 1){
			
		}
		else 
		{
			obj.H = Math.trunc(currency/coinH);
			var intermediateValue = currency - (Math.trunc(currency/coinH)) * coinH;
		}		

		if(intermediateValue/coinQ < 1){
			
		}

		else {
			obj.Q = Math.trunc(intermediateValue/coinQ);
			var intermediateValue = intermediateValue - (Math.trunc(intermediateValue/coinQ)) * coinQ;
		}
		
		if(intermediateValue/coinD < 1){
			
		}

		else {
			obj.D = Math.trunc(intermediateValue/coinD);
			var intermediateValue = intermediateValue - (Math.trunc(intermediateValue/coinD)) * coinD;
		}

		if(intermediateValue/coinN < 1){
			
		}

		else {
			obj.N = Math.trunc(intermediateValue/coinN);
			var intermediateValue = intermediateValue - (Math.trunc(intermediateValue/coinN)) * coinN;
		}		

		if(intermediateValue/coinP < 1){
		}

		else {
			obj.P = Math.trunc(intermediateValue/coinP);
			var intermediateValue = intermediateValue - (Math.trunc(intermediateValue/coinP)) * coinP;
		}

		return obj;
	}
}
