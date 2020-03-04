let reportStructure = (file1, file2, file3) => {
  // is reportStructure in localStorage?
    // if yes 
      // check if pre-set reportStructure matches to properties in file1, file2, file3
      // if matches use reportStructure
      // if not, create reportStructure
    // if not, create reportStructure
      // from file1, file2, file3 search object arrays for like properties and set them as variables
      // 
}
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

let reportLines = new ReportLine();

function rec(statementObject){
  

  for (let i = 0; i < statementObject.length; i++){
    rep = new ReportLine()
    rep.shipment = statementObject[i].blID;
    rep.
  }
  return -1;
}

// look through arrays and find like indexes
let findBls = function(statementArray){
  let result = blId;
  for(var i = 0; i < statementArray.length; i++){
    if (i === result){
      console.log(result)
    }
    console.log(indexOf.[i])
  }
}

//function displayFile(str){ // displays file as table on page
//	// creates an array out of the csv str
//	// let allRows = str.split(/\r?\n|\r/);
//
//	let allRows = str;
//
//	// Creates table components
//	let table = '<table>';
//	for (let singleRow = 0; singleRow < allRows.length; singleRow++){
//		if(singleRow ===0) {
//			table += '<thead>';
//			table += '<tr>';
//		} else {
//			table += '<tr>';
//		}
//		let rowCells = allRows[singleRow].split(',');
//		for (let rowCell = 0; rowCell < rowCells.length; rowCell++) {
//			if(singleRow === 0) {
//				table += '<th>';
//				table += rowCells[rowCell];
//				table += '</th>';
//			} else {
//				table += '<td>';
//				table += rowCells[rowCell];
//				table += '</td>';
//			}
//		}
//		if (singleRow === 0) {
//			table += '</tr>';
//			table += '</thead>';
//		} else {
//			table += '</tr>';
//		}
//	}
//	table += '</tbody>';
//	table += '</table>';
//	$("#reportArea").append(table);
//	
//}


// sort function
	//report.sort(function(a, b) {
	//	if (a.blId.toLowerCase() < b.lastName.toLowerCase()
	//		) return -1;
	//	if (a.lastName.toLowerCase() > b.lastName.toLowerCase()
	//		) return 1;
	//	return 0
	//}
	// report.sort(function(a,b) {
	// 	return a.blID - b.blID
  // })
  
// combines files together
  // report = statementObject.concat(payablesObject.concat(paidObject));

// gets distincs values in files
  // let distinctVendors = [...new Set(paidObject.map(data => data.vendorId))];
  // let distinctVendorsAP = [...new Set(payablesObject.map(data => data.vendorId))];
  // console.log(distinctVendorsAP);
  // console.log(distinctVendors);
	// const vendorsList = paidObject.filter(function(data) {
	// 	return data.vendorID === 'GAP';
	// 	// returns new array for GAP data 
	// })
	//console.log(vendorsList)




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

1 .filter + .reject
2 .map + .find
3 & 4.reduce    = get the totals
5 closures
6 currying 
7 recursion - when a function calls on itself until it doesn't
8 promises
Create a tree structure
{
	BL
}
let my_element = document.createElement("<h1>");
let my_span = document.createElement("<span>");

my_span.innerText = "hello";
my_element.appendChild(my_span);
document.body.appendChild(my_element);

// find Vendors list array


// https://developers.google.com/web/fundamentals/primers/promises

// Promises notes
file1.callThisIf loadedOrWhenLoaded(function() {
	//loaded
}).orIfFailedCallThis(function(){
	// failed
});

//and 
whenAllTheseHaveLoaded([file1, file2, file3]).callThis(function() {
//all loaded
}).orIfSomeFailedCallThis(function() {
//ones or more failed});

   same as 
img1.ready().then(function() {
  // loaded
}, function() {
  // failed
});

// andâ€¦
Promise.all([img1.ready(), img2.ready()]).then(function() {
  // all loaded
}, function() {
  // one or more failed
});
