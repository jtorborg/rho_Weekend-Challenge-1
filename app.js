var employee = {};
var singleMonthly = 0;
var totalMonthly = 0;
//var employeeSal = {};
$(document).ready(function() {
    $('#employeeInfo').on('submit', function(event) {
        event.preventDefault();

        //var empArray = [];

        var fields = $('#employeeInfo').serializeArray();
        console.log('fields', fields);

        fields.forEach(function(element, index) {
            employee[element.name] = element.value;

        });

        console.log('employee object', employee);

        // employeeSal[employee.employeeFirstName] = employee.employeeSalary;
        // console.log(employeeSal);
        //empArray.push(employee);
        //console.log(empArray);

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
        empInfo.employeeSalary = parseInt(empInfo.employeeSalary);
        // employeeSal[empInfo.employeeFirstName] = empInfo.employeeSalary;
        // console.log(employeeSal);
        console.log("Single Monthly", singleMonthly);
        console.log("Total Monthly", totalMonthly);

        singleMonthly = employee.employeeSalary / 12;
        console.log("Single Monthly", singleMonthly);

        singleMonthly = parseFloat(singleMonthly);
        console.log("Single Monthly", singleMonthly);


        totalMonthly = totalMonthly + singleMonthly;

        console.log("Single Monthly", singleMonthly);
        console.log("Total Monthly", totalMonthly);
        $("#employeeMonthlySalary").empty();
        console.log("Single Monthly", singleMonthly);
        console.log("Total Monthly", totalMonthly);
        $("#employeeMonthlySalary").text("$" + totalMonthly);

    }




});
