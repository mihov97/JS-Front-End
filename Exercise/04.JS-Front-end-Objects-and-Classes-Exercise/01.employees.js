function solve(employeeNames) {
    const employee = {}

    for (const name of employeeNames) {
        employee[name] = name.length
    }
   
    for (const employee in employees) {
    console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
   
    }
}
