
let report = [];
let stmnt = [];
document.getElementById("runReportLS").addEventListener("click", lsButton, false);
function lsButton() {// empties report area and runs new report
	$("#reportArea").empty();
	LocalStorage(file1, file2, file3);	
}

let LocalStorage = () => {
	report = reportBuild(file1);
	let statement = processData(file1);
	let payables = processData(file2);
	let paid = processData(file3);
	console.log(statement[0]);
	console.log(payables[0]);
	console.log(paid[0]);
	displayFile(statement[0][1]);
	displayFile(payables[0][1])
	displayFile(paid[0][1]);
	
	
	reportDiv = document.getElementById("reportArea");
	newDiv = document.createElement("button");
	newDiv.textContent = statement[0] + paid[0];
	newDiv.textContent += payables[0];
	reportDiv.appendChild(newDiv);
};
function findVendors (file){
	
}

function displayFile(str){ // displays file on page
	// creates an array out of the csv str
	let allRows = str //.split(/\r?\n|\r/);

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

function reportBuild (file1){ //returns an object
	//create object for file
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

function processData(file) { //returns arrays
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
{
	BL
}
































