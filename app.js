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

    // clear form data
    $('#employeeInfo').find('input[type=text]').val('');
    $('#employeeInfo').find('input[type=text]').val('');


    // appending to the DOM
    appendDom(employee);
  });



  function appendDom(emp) {
    var $emp = $('<div class="employee"></div>');

    $emp.append('<p>' + emp.employeeFirstName + ' ' + emp.employeeLastName + '</p>');

    $('#employeeData').append($emp);
  }
});
