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


