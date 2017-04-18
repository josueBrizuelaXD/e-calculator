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
var leftOp;
var rightOp;
var operator = "";
var isDecimalOp = false;
var isOperating = false;
var addStr = "+";
var subStr = "−";
var mulStr = "×";
var divStr = "÷";
var lastOp = "";

function addValue(id) {
	console.log("id: " + id.innerHTML);
	
	if (historyLbl.innerHTML === "0") {
			lastOp = historyLbl.innerHTML;
		console.log("lastOp: " + lastOp);
		historyLbl.innerHTML = id.innerHTML;
	} else {
		lastOp = historyLbl.innerHTML;
		console.log("lastOp: " + lastOp);
		historyLbl.innerHTML += id.innerHTML;
	}
	
	
	 if(resultLbl.innerHTML === "0" ||  isOperating !== false) {
		
		resultLbl.innerHTML = id.innerHTML;
	} else {
		resultLbl.innerHTML += id.innerHTML;
	}
	
	if (leftOp === undefined) {
			leftOp = parseInt(resultLbl.innerHTML);
		} else {
			rightOp = parseInt(resultLbl.innerHTML);
		}
	
	isOperating = false;
	
}

function addOperator(id, op){
	
	
	if (leftOp !== undefined && rightOp !== undefined && isOperating === false) {
			
			calculateResult();
		
		}
	
		
		console.log("leftOp: " + leftOp);
		console.log("rightOp: " + rightOp);
	
	lastOp = historyLbl.innerHTML;
	console.log("lastOp: " + lastOp);
		historyLbl.innerHTML += id.innerHTML;
		resultLbl.innerHTML = id.innerHTML;
		console.log("op: " + op);
		operator = op;
	    isOperating = true;

		
}


function calculateResult() {
	switch (operator) {
			case "addition":
				leftOp = leftOp + rightOp;
				console.log("leftOp result is: " + leftOp);	
				break;
			case "substraction":
				leftOp = leftOp - rightOp;
				console.log("leftOp result is: " + leftOp);	
				break;
			case "multiplication":
				leftOp = leftOp * rightOp;
				console.log("leftOp result is: " + leftOp);	
				break;
			case "division":
				leftOp = leftOp / rightOp;
				console.log("leftOp result is: " + leftOp);	
				break;
			default:
				break;
			   }
}


function getResult(id) {
	if (leftOp !== undefined && rightOp !== undefined && isOperating === false && operator !== "") {
			
			calculateResult();
	
		resultLbl.innerHTML = leftOp;
		console.log("lastOp: " + lastOp);
		historyLbl.innerHTML = leftOp;
		lastOp = historyLbl.innerHTML;
		rightOp = undefined;
		isOperating = false;
		}
	
}

function clearLastOperation(id) {
	resultLbl.innerHTML = "0";
	rightOp = undefined;
	if (isOperating) {
		isOperating = false;
		historyLbl.innerHTML = lastOp;
		operator = "";
	
	} else {
		historyLbl.innerHTML = lastOp;
	}
}

function clearWholeOperation(id) {
	leftOp = undefined;
	rightOp = undefined;
	isOperating = false;
	historyLbl.innerHTML = 0;
	resultLbl.innerHTML = 0;
}