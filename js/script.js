var acBtn = document.getElementById("AC-btn");
var ceBtn = document.getElementById("CE-btn");
var dotBtn = document.getElementById("dot-btn");
var divisionBtn = document.getElementById("division-btn");
var sevenBtn = document.getElementById("seven-btn");
var eightBtn = document.getElementById("eight-btn");
var nineBtn = document.getElementById("nine-btn");
var multBtn = document.getElementById("multiplication-btn");
var fourBtn = document.getElementById("four-btn");
var fiveBtn = document.getElementById("five-btn");
var sixBtn = document.getElementById("six-btn");
var subsBtn = document.getElementById("substraction-btn");
var oneBtn = document.getElementById("one-btn");
var twoBtn = document.getElementById("two-btn");
var threeBtn = document.getElementById("three-btn");
var addBtn = document.getElementById("addition-btn");
var zeroBtn = document.getElementById("zero-btn");
var equalBtn = document.getElementById("equal-btn");
var resultLbl = document.getElementById("result-lbl");
var historyLbl = document.getElementById("history-lbl");
var addStr = "+";
var subStr = "−";
var mulStr = "×";
var divStr = "÷";
var hasReset = false;

function addValue(id) {
	
	 
	
	var historyStr = historyLbl.innerHTML;
	var resultStr = resultLbl.innerHTML;
	
	if ((resultStr === addStr && id.innerHTML === "0")|| (resultStr === subStr && id.innerHTML === "0") || (resultStr === mulStr && id.innerHTML === "0") || (resultStr === divStr && id.innerHTML === "0")) {
	return;		
	}
	
	console.log("id: " + id.innerHTML);
	
	if (historyLbl.innerHTML === "0" || hasReset) {
		
		if (historyStr.length <= 23) {
		
		historyLbl.innerHTML = id.innerHTML;	
		}
		
			
	}  else {
		
		if (historyStr.length <= 23) {
			
		historyLbl.innerHTML += id.innerHTML;
		}
		
		
	}
	
	 
		
		if (resultStr.length <= 8 && resultStr.length >= 1 && resultStr !== "0" && resultStr !== addStr && resultStr !== subStr && resultStr !== mulStr && resultStr !== divStr && !hasReset) {
			resultLbl.innerHTML += id.innerHTML;
		} else if (resultStr.length < 1 || resultStr === "0") {
			resultLbl.innerHTML = id.innerHTML;
		} else if (resultStr !== addStr || resultStr !== subStr || resultStr !== mulStr || resultStr !== divStr) {
			resultLbl.innerHTML = id.innerHTML;
		} else if (hasReset) {
			resultLbl.innerHTML = id.innerHTML;
		} 
		
	
	hasReset = false;
	
}

function addOperator(id, op){
	if (resultLbl.innerHTML === "0") {
		return;
	}	
	
	hasReset = false;
	var historyStr = historyLbl.innerHTML;
	resultLbl.innerHTML = id.innerHTML;
	
	if ((historyStr[historyStr.length - 1] === addStr) || (historyStr[historyStr.length - 1] === subStr) || (historyStr[historyStr.length - 1] === mulStr) || (historyStr[historyStr.length - 1] === divStr)) {
		return;
	}
	
	historyStr+=id.innerHTML;
	historyLbl.innerHTML = historyStr;
	console.log("history: " + historyStr);
	
		
}


function getResult(id) {
var reg = /([+−×÷])/
var historyStr = historyLbl.innerHTML;
var arr = historyStr.split(reg);
var operatorsArr = [];
var operandArr = [];
	
console.log("arr: " + arr);	
	
for (var i = 0; i < arr.length ; i++) {
	if (i % 2 == 0) {
		operandArr.push(arr[i]);
	} else {
		operatorsArr.push(arr[i]);
	}
}
	

var firstDig = operandArr[0];
var firstOpera = operatorsArr[0];
	
for (var j = 0; j < operandArr.length; j++) {
	
	
	
	if (j === 0) {
		continue;
	} else {
		var secondD = operandArr[j];
		console.log("firstOperand(before): " + firstOpera);
		switch (firstOpera) {
			case "+":
				firstDig = parseInt(firstDig) + parseInt(secondD);
				break;
			case "−":
				firstDig = parseInt(firstDig) - parseInt(secondD);
				break;
			case "×":
				firstDig = parseInt(firstDig) * parseInt(secondD);
				break;
			case "÷":
				firstDig = parseInt(firstDig) / parseInt(secondD);
				break;
			default:
				break;	
			}
		firstOpera = operatorsArr[j];
		console.log("firstOperand: " + firstOpera);
	}
	
}	
	
console.log("arrOperand: " + operandArr);	
console.log("arrOperators: " + operatorsArr);
console.log("RESULT: " + firstDig);	
resultLbl.innerHTML = firstDig;
historyLbl.innerHTML = firstDig;	
hasReset = true;	
}

function clearLastOperation(id) {
var historyStr = historyLbl.innerHTML;
var newStr = historyStr.slice(0, historyStr.length - 1);
historyLbl.innerHTML = newStr;	

}

function clearWholeOperation(id) {
	leftOp = undefined;
	rightOp = undefined;
	isOperating = false;
	historyLbl.innerHTML = 0;
	resultLbl.innerHTML = 0;
}