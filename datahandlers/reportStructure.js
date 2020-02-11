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

// report object constructor
let ReportLine = (vendorId, blId, invNo, dueDate, invAmt, balance,fileId, dateId, amount, checkNo, checkDate, checkAmt) =>{
  this.vendor = vendorId,
  this.shipment= blId,
  this.invoice= invNo,
  this.dueDate= dueDate,
  this.invAmt = invAmt, 
  this.owed = balance,
  this.houseFile = fileId, 
  this.received = dateId,
  this.amtEntered = amount,
  this.paymentNo = checkNo,
  this.paymentDate = checkDate,
  this.paymentAmt = checkAmt,
  this.discrepancy = function(invAmt, amount){
    return (invAmt - amount);
  }
}

let reportLines = new ReportLine();



function ReportLin() {
  this.vendorId = '',
  this.blId= '',
  this.
}