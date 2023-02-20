// CREATE AN ARRAY OF EMPLOYEES
let listOfEmployees = [
    [12345678, "Marc Ter Stegen", 5413, "marcts@gmail.com", "Marketing"],
    [23456789, "Oliver Giroud", 3682, "oliverg@yahoo.com", "Engineering"],
    [34567891, "Paulo Dybala", 2491, "paulod@hotmail.com", "Executive"],
    [45678912, "Eric Garcia", 8874, "ericg@gmail.com", "Administrative"],
    [56789123, "Mesut Ozil", 5234, "mesuto@hotmail.com", "Sales"]
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees') !== null) {
    listOfEmployees = JSON.parse(localStorage.getItem('employees'))
}

// GET DOM ELEMENTS
let form        = document.getElementById('addForm')
let empTable    = document.getElementById('empTable')
let countOfEmployees    = document.getElementById('empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let employeeId       = parseInt(document.getElementById('id').value)
    let employeeName     = document.getElementById('name').value
    let employeeExtension      = parseInt(document.getElementById('extension').value)
    let employeeEmail    = document.getElementById('email').value
    let employeeDepartment     = document.getElementById('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newListOfEmployees = [employeeId, employeeName, employeeExtension, employeeEmail, employeeDepartment]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    listOfEmployees.push(newListOfEmployees)

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    form.id.focus()
})

// DELETE EMPLOYEElo
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {

        // CONFIRM THE DELETE
        if (confirm('Do you want to remove this employee entry?')) {

            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let index = e.target.parentNode.parentNode.rowIndex

            // REMOVE EMPLOYEE FROM ARRAY
            listOfEmployees.splice(index - 1, 1)

            // BUILD THE GRID
            buildGrid()
        }
    }
})

// BUILD THE EMPLOYEES GRID
function buildGrid() {

    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()

    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employees of listOfEmployees) {
        tbody.innerHTML += 
        `
        <tr>
            <td>${employees[0]}</td>
            <td>${employees[1]}</td>
            <td>${employees[2]}</td>
            <td>${employees[3]}</td>
            <td>${employees[4]}</td>
            <td><button class="btn btn-sm btn-danger delete">Remove</button></td>
        </tr>
        `
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)

    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${listOfEmployees.length})`

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(listOfEmployees))
}