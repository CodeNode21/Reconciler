let firstLS = "LS first file";
let secondLS = "LS second file";
let thirdLS = "LS third file";

$(document).ready(function(){
	console.log("ready from localstorage file");
let LocalStorage = (file1, file2, file3) => {
	//console.log(file1, file2, file3)
	//Handle file1 (Statement)
	let statement = file1;
	console.log(file1.length);
	console.log(file1.isArray)
	let arr = [];
	for (var i=0; i<file1.length; i++){
	}
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