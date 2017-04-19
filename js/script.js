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
var hasDecimalPoint = false;
var hasPlaceDigitAfterDecimal = true;
var isResultFloat = false;

function addDecimalPoint(id) {
	
	if (hasDecimalPoint || isResultFloat) {
		return;
	}
	
	var historyStr = historyLbl.innerHTML;
	var resultStr = resultLbl.innerHTML;
	
	if ((resultStr === addStr || historyStr[historyStr.length - 1] === addStr) || (resultStr === subStr || historyStr[historyStr.length - 1] === subStr) || (resultStr === mulStr || historyStr[historyStr.length - 1] === mulStr) || (resultStr === divStr || historyStr[historyStr.length - 1] === divStr)) {
		
		historyStr += "0" + id.innerHTML;
		resultStr = "0" + id.innerHTML;
	} else {
		
	historyStr += id.innerHTML;
	resultStr += id.innerHTML;
	}
	

	
	historyLbl.innerHTML = historyStr;
	resultLbl.innerHTML = resultStr;
	
	hasDecimalPoint = true;
	hasPlaceDigitAfterDecimal = false;
}

function addValue(id) {
	
	 if (hasDecimalPoint) {
		 hasPlaceDigitAfterDecimal = true;
	 } 
	
	var historyStr = historyLbl.innerHTML;
	var resultStr = resultLbl.innerHTML;
	
	if ((resultStr === addStr && id.innerHTML === "0")|| (resultStr === subStr && id.innerHTML === "0") || (resultStr === mulStr && id.innerHTML === "0") || (resultStr === divStr && id.innerHTML === "0")) {
	return;		
	}
	
	if (hasReset) {
		hasReset = false;
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

function addOperator(id){
	
		if (resultLbl.innerHTML === "0" || historyLbl.innerHTML === "0") {
		return;
	}
	
	
	if (!hasPlaceDigitAfterDecimal) {
		return;
	}
	
	if (isResultFloat) {
		isResultFloat = false;
	}
	var historyStr = historyLbl.innerHTML;
	resultLbl.innerHTML = id.innerHTML;
	
	if ((historyStr[historyStr.length - 1] === addStr) || (historyStr[historyStr.length - 1] === subStr) || (historyStr[historyStr.length - 1] === mulStr) || (historyStr[historyStr.length - 1] === divStr)) {
		return;
	}
	

	hasDecimalPoint = false;
	hasReset = false;
	
	historyStr+=id.innerHTML;
	historyLbl.innerHTML = historyStr;
	console.log("history: " + historyStr);
	
		
}


function getResult(id) {
var reg = /([+−×÷])/
var historyStr = historyLbl.innerHTML;
	
if(historyStr[historyStr.length - 1] === addStr || historyStr[historyStr.length - 1] === subStr || historyStr[historyStr.length - 1] === mulStr || historyStr[historyStr.length - 1] === divStr) {
	return;
}	
	
if (!hasPlaceDigitAfterDecimal)	{
	return;
}
	
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
	
	if (operandArr.length === 1) {
		return;
	}
	
for (var j = 0; j < operandArr.length; j++) {
	
	
	
	if (j === 0) {
		continue;
	} else {
		var secondD = operandArr[j];
		console.log("firstOperand(before): " + firstOpera);
		switch (firstOpera) {
			case "+":
				
				firstDig = parseFloat(firstDig) + parseFloat(secondD);
				break;
			case "−":
				firstDig = parseFloat(firstDig) - parseFloat(secondD);
				break;
			case "×":
				firstDig = parseFloat(firstDig) * parseFloat(secondD);
				break;
			case "÷":
				firstDig = parseFloat(firstDig) / parseFloat(secondD);
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

	
if (Number.isInteger(firstDig)) {
	console.log("result is integer");	
	resultLbl.innerHTML = firstDig;
    historyLbl.innerHTML = firstDig;
} else {
	console.log("result is float");
	resultLbl.innerHTML = (Math.floor(firstDig * 100) / 100).toFixed(2)
    historyLbl.innerHTML = (Math.floor(firstDig * 100) / 100).toFixed(2)
	isResultFloat = true;
}	
hasReset = true;
hasDecimalPoint = false;	
}

function clearLastOperation() {
	
var reg = /([+−×÷])/
var historyStr = historyLbl.innerHTML;
	
	historyStr.trim();
	console.log("history: " + historyStr);
var arr = historyStr.split(reg);
	console.log("arr(before): " + arr);
	console.log("arr length(before): " + arr.length);

	
	if(historyStr[historyStr.length - 1] === addStr || historyStr[historyStr.length - 1] === subStr || historyStr[historyStr.length - 1] === mulStr || historyStr[historyStr.length - 1] === divStr) {
	arr.pop();
	arr.pop();	
} else {
	arr.pop();
}	


	
	console.log("arr after pop: " + arr);
var newStr = arr.join("");
	console.log("***newStr:*** " + newStr);
	
	if (newStr.length <= 0) {
		newStr = "0";
		hasReset = true;
		hasDecimalPoint = false;
		hasPlaceDigitAfterDecimal = true;
		isResultFloat = false;
	}
	
	historyLbl.innerHTML = newStr;
	
resultLbl.innerHTML = "0";
hasDecimalPoint = false;	
	
	

}

function clearWholeOperation() {
	hasReset = true;
    hasDecimalPoint = false;
	hasPlaceDigitAfterDecimal = true;
	isResultFloat = false;
	historyLbl.innerHTML = "0";
	resultLbl.innerHTML = "0";
}


function changeColor(ob) {
	console.log("changeID: " + ob.id);
	var ele =  document.getElementById(ob.id);
	var attr = ele.getAttribute("class");
	console.log("attr: " +  attr);
	
	var arr = attr.split(" ");
	console.log(arr);
	
	if(arr[1] === "cal-key-func") {
		
		if(ob.id === "AC-btn") {
			ele.style.background = "black";
			ele.style.color = "red";
		} else {
			ele.style.background = "white";
		}
		
		

	} else {
		ele.style.background = "black";
		ele.style.color = "white";
	}
}

function changeColorBack(ob) {
		console.log("changeID: " + ob.id);
	var ele =  document.getElementById(ob.id);
	var attr = ele.getAttribute("class");
	console.log("attr: " +  attr);
	
	var arr = attr.split(" ");
	console.log(arr);
	
	if(arr[1] === "cal-key-func") {
		if(ob.id === "AC-btn") {
			ele.style.background = "red";
			ele.style.color = "white";
		} else {
			ele.style.background = "black";
		}
	} else {
		ele.style.background = "white";
		ele.style.color = "#EB7FFC";
	}
}