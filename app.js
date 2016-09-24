$(document).ready(function() {
    $('#employeeInfo').on('submit', function(event) {
        event.preventDefault();

        var employee = {};
        var endSal = 0;
        var empArray = [];

        var fields = $('#employeeInfo').serializeArray();
        console.log('fields', fields);

        fields.forEach(function(element, index) {
            employee[element.name] = element.value;

        });

        console.log('employee object', employee);

        employee.employeeSalary = parseFloat(employee.employeeSalary);
        endSal = endSal + Math.round(employee.employeeSalary / 12).toFixed(2);

        console.log(endSal);
        console.log(employee.employeeSalary);

        empArray.push(employee);

        console.log(empArray);

        $("#employeeMonthlySalary").text("$" + endSal);

        // clear form data
        $('#employeeInfo').find('input[type=text]').val('');
        $('#employeeInfo').find('input[type=number]').val('');


        // appending to the DOM
        appendDom(employee);
    });

    function appendDom(empInfo) {
        var $emp = $('<div class="employee"></div>');

        $emp.append('<p>' + empInfo.employeeFirstName + ' ' + empInfo.employeeLastName + '</p>');
        $emp.append('<p>' + empInfo.employeeIdNumber + '</p>');
        $emp.append('<p>' + empInfo.employeeJobTitle + '</p>');

        $emp.append('<p>' + empInfo.employeeSalary + '</p>');

        $('#employeeData').append($emp);
    }
});
