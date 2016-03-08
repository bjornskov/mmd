var netPriceOfShoes = 500;
var VAT = 25;
var calculatedVAT = (1 + VAT / 100) ;
var grossPriceOfShoes = (netPriceOfShoes * calculatedVAT);
alert(grossPriceOfShoes);
