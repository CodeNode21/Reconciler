
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
	console.log(currentLocalStorage())
	report = reportBuild(file1);
	const statement = reportBuild(file1);
	const payables = reportBuild(file2);
	const paid = reportBuild(file3);
	
	console.log(statement[0]);
	console.log(payables[0]);
	console.log(paid[0]);
	
	buttonMaker(statement[0]);
	buttonMaker(payables[0])
	buttonMaker(paid[0]);
	console.log(paid[0]);
	console.log(typeof(paid[0]));
	
	const distinctVendors = [...new Set(paid.map(data => data.vendorId))];
	const distinctVendorsAP = [...new Set(payables.map(data => data.vendorId))];
	//console.log(distinctVendorsAP);
	//console.log(distinctVendors);
	
	const vendorsList = paid.filter(function(data) {
		return data.vendorID === 'GAP';
		// returns new array for GAP data 
	})
	//console.log(vendorsList)
	
	//reportDiv = document.getElementById("reportArea");
	//newDiv = document.createElement("button");
	//newDiv.textContent = statement[0] + paid[0];
	//newDiv.textContent += payables[0];
	//reportDiv.appendChild(newDiv);
};

function buttonMaker(arr){ //Creates buttons for array
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