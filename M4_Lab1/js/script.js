// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let listOfEmployees = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;
let countOfEmployees = document.getElementById("empCount");

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let employeeId = document.getElementById('id').value;
    let employeeName = document.getElementById('name').value;
    let employeeExtension = document.getElementById('extension').value;
    let employeeEmail = document.getElementById('email').value;
    let employeeDepartment = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let rowOfEmployees = listOfEmployees.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let employeeIdCell = rowOfEmployees.insertCell(0);
    let employeeNameCell = rowOfEmployees.insertCell(1);
    let employeeExtensionCell = rowOfEmployees.insertCell(2);
    let employeeEmailCell = rowOfEmployees.insertCell(3);
    let employeeDepartmentCell = rowOfEmployees.insertCell(4);
    let deleteCell = rowOfEmployees.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    employeeIdCell.appendChild(document.createTextNode(employeeId));
    employeeNameCell.appendChild(document.createTextNode(employeeName));
    employeeExtensionCell.appendChild(document.createTextNode(employeeExtension));
    employeeEmailCell.appendChild(document.createTextNode(employeeEmail));
    employeeDepartmentCell.appendChild(document.createTextNode(employeeDepartment));

    // CREATE THE DELETE BUTTON
    let eraseEmployeeEntry = document.createElement('button');
    eraseEmployeeEntry.className = 'btn btn-danger btn-sm delete';
    eraseEmployeeEntry.appendChild(document.createTextNode('Remove'));
    deleteCell.appendChild(eraseEmployeeEntry);


    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    countOfEmployees.textContent = count;

});

// DELETE EMPLOYEE
listOfEmployees.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Do you waant to remove this employee entry?')) {
            let rowOfEmployees  = e.target.parentNode.parentNode;
            listOfEmployees.deleteRow(rowOfEmployees .rowIndex);
            count--;
            countOfEmployees.textContent = count;
        }
    }
});