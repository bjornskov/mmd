var netPriceOfShoes = 500;
var VAT = 25;
var calculatedVAT = (1 + VAT / 100) ;
var grossPriceOfShoes = (netPriceOfShoes * calculatedVAT);
var amount = 5;
alert("The price for one pair of shoes is: " + netPriceOfShoes + "\nThe price of " + amount + " pairs of shoes is: " + netPriceOfShoes * amount);
