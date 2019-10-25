let firstLS = "LS first file";
let secondLS = "LS second file";
let thirdLS = "LS third file";
//var csv require('csv');
//var obj csv();

$(document).ready(function(){
	console.log("ready from localstorage file");
let LocalStorage = (file1, file2, file3) => {
	//console.log(file1, file2, file3)
	//Handle file1 (Statement)
	console.log(file1.length);
	
	console.log(file1.isArray);
	parseCSV(file1);
	//Handle file2 (Payables)
	
	//Handle file3 (Payments)
	
	// Combine the files into one
	
	// Segregade duplicate items between files and draw conclusions
	
	
	reportDiv = document.getElementById("reportArea");
	newDiv = document.createElement("table");
	newDiv.textContent = 'Here is the report';
	reportDiv.appendChild(newDiv);
};

document.getElementById("runReportLS").addEventListener("click", lsButton, false);
function lsButton() {

	console.log("LS button clicked: Local Storage");
	$("#reportArea").empty();
	LocalStorage(file1, file2, file3);

}
})

function parseCSV(file){
	var allRows = file.split(/\r?\n|\r/);
	console.log(allRows);
	var table = '<table>';
	for (var singleRow = 0; singleRow < allRows.length; singleRow++){
		if(singleRow ===0) {
			table += '<thead>';
			table += '<tr>';
		} else {
			table += '<tr>';
		}
		var rowCells = allRows[singleRow].split(',');
		for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
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









































