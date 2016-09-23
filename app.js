$(document).ready(function () {
  $('#employeeInfo').on('submit', function (event) {
    event.preventDefault();

    var employee = {};

    var fields = $('#employeeInfo').serializeArray();
    console.log('fields', fields);

    fields.forEach(function (element, index) {
      employee[element.name] = element.value;

    });

    console.log('employee object', employee);

var empSal = parseInt(employee.employeeSalary);
console.log(empSal);
var monthlySalary = Math.round(empSal/12);
console.log(monthlySalary);


$("#employeeMonthlySalary").append(monthlySalary);




    // clear form data
    $('#employeeInfo').find('input[type=text]').val('');
    $('#employeeInfo').find('input[type=number]').val('');


    //monthly salary container
    //$(#employeeMonthlySalary).append();
    // appending to the DOM
    appendDom(employee);
  });

//store object in array
// var storeEmployee = [];
//
// storeEmployee.push(employee);
// console.log('store employee', storeEmployee);



  function appendDom(empInfo) {
    var $emp = $('<div class="employee"></div>');

    $emp.append('<p>' + empInfo.employeeFirstName + ' ' + empInfo.employeeLastName + '</p>');
    $emp.append('<p>' + empInfo.employeeIdNumber + '</p>');
    $emp.append('<p>' + empInfo.employeeJobTitle + '</p>');

    $emp.append('<p>' + empInfo.employeeSalary + '</p>');

    $('#employeeData').append($emp);
  }
});


//select part of table that corresponding to table and
