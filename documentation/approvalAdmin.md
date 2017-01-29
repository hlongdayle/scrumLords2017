<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## get

Fills leaveTable with data from Absence

## get

Fills overtimeTable with data from Overtime

## get

Fills switchTable with data from Request

## buildHtmlTable

Builds a table given JSON data and an ID in HTML file

**Parameters**

-   `selector`  
-   `list`  

## addAllColumnHeaders

Adds columnheaders to table

**Parameters**

-   `selector` **[text](https://developer.mozilla.org/en-US/docs/Web/HTML)** id of table in HTML file you want to build,{JSONArray} list - an array with data to fill the table.
-   `list`  

## buildHtmlTable2

Builds a table given JSON data and an ID in HTML file, slightly different form buildHtmlTable(different class input type)

**Parameters**

-   `selector` **[text](https://developer.mozilla.org/en-US/docs/Web/HTML)** id of table in HTML file you want to build,{JSONArray} list - an array with data to fill the table.
-   `list`  

## on

Opens modal when pressing table row in switchTable, finds id from selected row
If checkbox on select row is checked, approveModal will show with a table 'ansattTable'
And will fill this table with data
Closes modal on click

## on

Selects employee_id from checked row in ansattTable in modal
Unchecks all other rows

## on

Generates arrays with id's from checked rows in leaveTable and overtimeTable
Updates Absence and Overtime in database

## fjernAnsatt

Removes an employee from Shift_has_employee in database

**Parameters**

-   `skiftid`  
-   `ansatt`  

## erstattAnsatt

Replaces an employee in shift_has_employee with another

## fjernAnsatteRequestShift

Removes all employees connected to a specific shift in Request_shift

**Parameters**

-   `skiftid`  

## deleteRequest

Removes a specific request from Request

**Parameters**

-   `id`  

## updateAbsence

Sets a request in Absence to checked_by_admin

**Parameters**

-   `id`  

## updateOvertime

Sets a request in Overtime to checked_by_admin

**Parameters**

-   `id`  

## showSuccessMessage

Shows a success-message

## showErrorMessage

Shows an error-message