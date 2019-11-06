let firstLS = "LS first file";
let secondLS = "LS second file";
let thirdLS = "LS third file";
//var csv require('csv');
//var obj csv();

let report = [];

document.getElementById("runReportLS").addEventListener("click", lsButton, false);
function lsButton() {
	$("#reportArea").empty();
	LocalStorage(file1, file2, file3);
	
}
let LocalStorage = (file1, file2, file3) => {
	// displayFile(file1);
	// displayFile(file2);
	// displayFile(file3);
	let statement = processData(file1);
	//Handle file2 (Payables)
	let payables = processData(file2);
	//Handle file3 (Payments)
	let paid = processData(file3);
	console.log(typeof(paid))
	//report += payables;
	report += paid;
	console.log(report);
	
	console.log(statement[0]);
	console.log(payables[0]);
	console.log(paid[0]);
	// Combine the files into one
	
	// Segregade duplicate items between files and draw conclusions
	
	reportDiv = document.getElementById("reportArea");
	newDiv = document.createElement("table");
	newDiv.textContent = 'Here is the report';
	reportDiv.appendChild(newDiv);
};

function displayFile(str){
	// creates an array out of the csv str
	let allRows = str.split(/\r?\n|\r/);

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

function reportBuild (file1, file2, file3){
	//create array for each file
	let statement = file1.split(/\r?\n|\r/);
	let payables = file2.split(/\r?\n|\r/);
	let payments = file3.split(/\r?\n|\r/);
	let reportArray = [];

}

// function turns files into arrays
function processData(file) {
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
		file = fileArray
	}
	///consoleLog(fileObject);
	return fileArray;

}

function consoleLog(file) {
	console.log(file)
}







































