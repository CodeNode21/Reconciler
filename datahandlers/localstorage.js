
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
	report = [];
	// creates objects from files
	const statementObject = toObject(file1);
	const payablesObject = toObject(file2);
	const paidObject = toObject(file3);
	
	// creates arrays from files
	let statementArray = toArray(file1);
	let payablesArray = toArray(file2);
	let paidArray = toArray(file3);
	
	console.log(statementObject[0]);
	console.log(payablesObject[0]);
	console.log(paidObject[0]);
	// rec(statementObject)
	findDupIndex(report);
	findDataRows(statementObject)

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
	
	findDataRows(file1)
	display(report, "Past Due");
}
// finding duplicate indexes in report and logging them or removing
function findDataRows(obj){
		data = obj
		console.log(data[0])
}

function findDupIndex(obj){
	let dupList = [];
	//method3 sort the array and find adjacent values
// method2
	for( let i = 0; i < 10; i++){
		if(dupList[obj[i]] === undefined) {
			dupList[obj[i]] = 1;
			console.log(i)
		} else {
			return true;
		}
	}
	console.log(dupList)
	return false
}
// method1
	// for( let i = 0; i < 7; i++){
	// 	console.log(report[i])
	// 	for(var j = i; j < 7; j ++){
	// 		console.log(typeof(report[j]))
	// 		//if(i != j && report[i].shipment == report[j].shipment) {
	// 		//	return true;
	// 		}
	// 	}
	// 	// console.log(file[i].shipment)
	//}

	//return false;


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

function display(object, stat){
	let sta = stat;
	let table = '<table>' + stat;
	table += '<thead>';
	table += '<tbody>';
	table += '<tr>';
	let headers = Object.keys(object[0]);
	for (let i =0; i < headers.length; i++){
		table += '<th>';
		table += headers[i];
		table += '</th>';

	}
	for(let i = 0; i < object.length; i ++){
		console.log(typeof(object[i].shipment));
		table += '<tr>';
		table += '<td>';
		table += object[i].shipment;
		table += '</td>';
		table += '<td>';
		table += object[i].invoice;
		table += '</td>';
		table += '<td>';
		table += object[i].dueDate;
		table += '</td>';
		table += '<td>';
		table += object[i].invAmt;
		table += '</td>';
		table += '<td>';
		table += object[i].owed;
		table += '</td>';
		table += '<td>';
		table += object[i].vendor;
		table += '</td>';
		table += '<td>';
		table += object[i].houseFile;
		table += '</td>';
		table += '<td>';
		table += object[i].apBl;
		table += '</td>';
		table += '<td>';
		table += object[i].received;
		table += '</td>';
		table += '<td>';
		table += object[i].amtEntered;
		table += '</td>';
		table += '<td>';
		table += object[i].paymentNo;
		table += '</td>';
		table += '<td>';
		table += object[i].paymentDate;
		table += '</td>';
		table += '<td>';
		table += object[i].paymentAmt;
		table += '</td>';
		table += '<td>';
		table += object[i].paidVendorID;
		table += '</td>';
		table += '<td>';
		table += object[i].paidFileId;
		table += '</td>';
		table += '<td>';
		table += object[i].paidBlId;
		table += '</td>';
		table += '<td>';
		table += object[i].paidAmount;
		table += '</td>';
		table += '</tr>';
	}
	table += '</tbody>';
	table += '</thead>';
	table += '</table>'
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
