let number = "";
let operator = "";
let numberBeforeOperator = "";
let total = 0;
let showTotal = false;

const totalElement = document.getElementById('total');

function handleOnClick(e) {
	showTotal = false;
	number += e;
	setTotal();
}

function handleOnClickClear() {
	number = "";
	operator = "";
	numberBeforeOperator = "";
	total = 0;
	showTotal = false;
	setTotal();
}

function calTotal() {
	total = eval(numberBeforeOperator + operator + number)
	numberBeforeOperator = total;
	showTotal = true;
	number = "";
}

function handleOnClickOperator(e) {
	if (numberBeforeOperator !== "" && number !== "" && operator !== "") {
		calTotal();
	}
	else {
		if (total === 0 && numberBeforeOperator === "") {
			numberBeforeOperator = number;
			number = "";
		}
		else
			numberBeforeOperator = total;
	}
	operator = e;
	setTotal();
}

function handleOnClickCalculate() {
	if (numberBeforeOperator !== "" && number !== "" && operator !== "") {
		calTotal();
	}
	setTotal();
}

function setTotal() {
	if (number === "")
		totalElement.innerText = 0;
	else
		totalElement.innerText = number
	if (showTotal)
		totalElement.innerText = total
}

setTotal();