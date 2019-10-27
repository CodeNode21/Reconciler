# Reconciler

This application receives 3 CSV files (Statement, Entries and Payment History) and builds an account status report.

Report will highlight items paid, not paid but entered (ready for payment), outstanding items not yet recorded in system and items entered but not on statement or paid history.

User Story:
Accounts payable managing large vendor accounts would strip data from vendor statements (pending records)into a CSV file used for upload. 
They would also need to extract data from their accounting system for items already entered (current records), 
and items already paid to vendor (past records).

Uploading this data user will be able to get a snapshot of the vendor(s) account status. 

