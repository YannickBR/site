function passWord() {
var testV = 1;
var pass1 = prompt('Vul je wachtwoord in!','');
while (testV < 3) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "erwten") {
alert('Wachtwoord correct! Druk op OK om door te gaan!');
location.replace('downoadswwtrue.html');
break;
} 
testV+=1;
var pass1 = 
prompt('Fout wachtworod!','');
}
if (pass1.toLowerCase()!="password" & testV ==3) 
alert('Het lijkt erop dat je het wachtwoord niet weet! Je wordt nu terug gestuurd naar de hoofdpagina!')
history.go(-1);
return " ";
} 