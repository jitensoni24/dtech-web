var num = -10;

while(num <= 19) {
	console.log(num);
	num++;
}

var eve = 10;

while(eve <= 40) {
	if(eve % 2 === 0) {
		console.log("even : " + eve);
	}
	eve++;
}
var odd = 300;

while(odd <= 333) {
	if(odd % 2 !== 0) {
		console.log("odd : " + odd);
	}
	odd++;
}
var findDiv = 5;

while(findDiv <=50) {
	if(findDiv % 5 === 0 && findDiv % 3 === 0) {
		console.log("no is divisible by either 5 or 3 - " + findDiv)
	}
	findDiv++;
}