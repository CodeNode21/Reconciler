
let report = [];
let stmnt = [];


document.getElementById("runReportLS").addEventListener("click", lsButton, false);

function lsButton() {// empties report area and runs new report
	$("#reportArea").empty();
	$("#columnSelect").empty();
	lsReport(file1, file2, file3);

}

currentLocalStorage = () => {
	for (var i =0 ; i < localStorage.length; i++){
		console.log(localStorage.key(i) + " =[" + localStorage.getItem(localStorage.key(i)) + "]");
	}
}

let lsReport = () => {
	// creates objects from files
	const statementObject = toObject(file1);
	const payablesObject = toObject(file2);
	const paidObject = toObject(file3);
	
	// creates arrays from files
	let statementArray = toArray(file1);
	let payablesArray = toArray(file2);
	let paidArray = toArray(file3);

	console.log(statementArray);
	console.log(payablesArray);
	console.log(paidArray);
	// displayFile(file2);
	// displayFile(file3);
	
	console.log(statementObject[0]);
	console.log(payablesObject[0]);
	console.log(paidObject[0]);
	// rec(statementObject)
	
	// creates buttons of file fields
	buttonMaker(statementArray[0]);
	buttonMaker(payablesArray[0])
	buttonMaker(paidArray[0]);

	// combines files via object constructor
	buildReport(statementObject, payablesObject, paidObject)


};


// report object constructor
function ReportLine (blId, invNo, dueDate, invAmt, balance, vendorId, fileId, blID, dateId, amount, checkNo, checkDate, checkAmt, vendorID, fileID, BlId, amounT ){
  this.shipment= blId,
  this.invoice= invNo,
  this.dueDate= dueDate,
  this.invAmt = invAmt, 
  this.owed = balance,
    this.vendor = vendorId,
	this.houseFile = fileId,
	this.apBl = blID, 
    this.received = dateId,
    this.amtEntered = amount,
	  this.paymentNo = checkNo,
	  this.paymentDate = checkDate,
	  this.paymentAmt = checkAmt,
	  this.paidVendorID = vendorID, 
	  this.paidFileId = fileID,
	  this.paidBlId = BlId,
	  this.paidAmount = amounT; 
	report.push(this)
}

function buildReport(file1, file2, file3){
	let len = file1.concat(file2.concat(file3)).length;
	let statementObj;
	for (let i = 0; i < file1.length; i++){
		let sta = new ReportLine(file1[i].blID, file1[i]["INV NO"], file1[i]["DUE DATE"], file1[i]["INV AMT"], file1[i].BALANCE, '', '', '', '', '','','','','','','',''); 
		// console.log(sta)

	}
	for (let i = 0; i < file2.length; i++){
		let openAP = new ReportLine('','','','','', file2[i].vendorID, file2[i].fileID, file2[i].blID, file2[i].dateID, file2[i].amount, '','','','','','','')
		// console.log(openAP)

	}
	
	for (let i = 0; i < file3.length; i++){
		let paid = new ReportLine('','','','','', '', '', '', '', '', file3[i]["Check #"], file3[i]["Check Date"], file3[i]["Check Amount"], file3[i].vendorID, file3[i].fileID, file3[i].blID, file3[i].amount)
		// console.log(paid)

	} 
	// with the statement data in the new constructor, loop though openAp array and find = bls. then fill in the blanks
	// do the same for 
	findDupIndex(report);
	
}
// finding duplicate indexes in report and logging them or removing
function findDupIndex(report){
	let dupList = [];
	for( let i = 0; i < 7; i++){
		console.log(report[i])
		for(var j = i; j < 7; j ++){
			console.log(typeof(report[j]))
			//if(i != j && report[i].shipment == report[j].shipment) {
			//	return true;
			}
		}
	
		// console.log(file[i].shipment)

	}
	//return false;

function rec(statementObject){
  let rep;

  for (let i = 0; i < statementObject.length; i++){
    console.log(statementObject[i].blID)
  }
  return -1;
}
function buttonMaker(arr){ //Creates buttons from a given index 
	for (var i = 0; i < arr.length; i++){
		document.getElementById("columnSelect").innerHTML += `<button id="columns"> ${arr[i]} </button>`
	}
	document.getElementById("columnSelect").innerHTML += `<hr>`
	
	//var element = document.createElement('div')
	//element.innerHTML = `
	//<h1>This element is looping</h1>
	//${Array(5).join(0).split(0).map((item, i) => `
    //<div>I am item number ${i}.</div>
	//`).join('')}
	//`
}

function displayFile(str){ // displays file as table on page
	// creates an array out of the csv str
	// let allRows = str.split(/\r?\n|\r/);

	let allRows = str;

	// Creates table components
	let table = '<table>';
	for (let singleRow = 0; singleRow < allRows.length; singleRow++){
		if(singleRow ===0) {
			table += '<thead>';
			table += '<tr>';
		} else {
			table += '<tr>';
		}
		let rowCells = allRows[singleRow].split(',');
		for (let rowCell = 0; rowCell < rowCells.length; rowCell++) {
			if(singleRow === 0) {
				table += '<th>';
				table += rowCells[rowCell];
				table += '</th>';
			} else {
				table += '<td>';
				table += rowCells[rowCell];
				table += '</td>';
			}
		}
		if (singleRow === 0) {
			table += '</tr>';
			table += '</thead>';
		} else {
			table += '</tr>';
		}
	}
	table += '</tbody>';
	table += '</table>';
	$("#reportArea").append(table);
	
}

function toObject (file1){ //returns an object
	let jsonObj = [];
	let statement = file1.split(/\r?\n|\r/);
	let headers = statement[0].split(',')
	for (var i = 1; i < statement.length; i++) {
		let data = statement[i].split(',');
		var obj = {};
		for (var j = 0; j < data.length; j++) {
		obj[headers[j].trim()] = data[j].trim();
		}
		jsonObj.push(obj);
	}
	JSON.stringify(jsonObj);
	return jsonObj;
	

}

function toArray(file) { //returns arrays
	let allTextLines = file.split(/\r?\n|\r/);
	fileArray = [];
	
	for (let i = 0; i < allTextLines.length; i++) {
		let row = allTextLines[i].split(',');
		let col = []; 
		for (let j = 0; j < row.length; j++) {
			parseInt(row[j]);
			col.push(row[j]);
		}
		fileArray.push(col);
	}
	return fileArray;
}

// first way
var vendorsList = file1.filter(function(data) {
	return data.vendor === 'APLU';
	// returns new filter array for vendors 
})
// second way
var isVendor = function(data) {
	return data.vendor === 'APLU'
}
var vendors = file1.filter(isVendor)
var otherVendors = file1.reject(isVendor)

// 1 .filter + .reject
// 2 .map + .find
// 3 & 4.reduce    = get the totals
// 5 closures
// 6 currying 
// 7 recursion - when a function calls on itself until it doesn't
// 8 promises
//Create a tree structure
// {
// 	BL
// }
// let my_element = document.createElement("<h1>");
// let my_span = document.createElement("<span>");

// my_span.innerText = "hello";
// my_element.appendChild(my_span);
// document.body.appendChild(my_element);

// // find Vendors list array


// // https://developers.google.com/web/fundamentals/primers/promises

// // Promises notes
// file1.callThisIf loadedOrWhenLoaded(function() {
// 	//loaded
// }).orIfFailedCallThis(function(){
// 	// failed
// });

// //and 
// whenAllTheseHaveLoaded([file1, file2, file3]).callThis(function() {
// //all loaded
// }).orIfSomeFailedCallThis(function() {
// //ones or more failed});

//    same as 
// img1.ready().then(function() {
//   // loaded
// }, function() {
//   // failed
// });

// // and…
// Promise.all([img1.ready(), img2.ready()]).then(function() {
//   // all loaded
// }, function() {
//   // one or more failed
// });