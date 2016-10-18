/*--Angular variable--*/
var app = angular.module('basicApp', []);//1st parameter is name of application; basic parameter is dependencies

/*--Angular Controller--*/
app.controller('BasicController', function () {
var self = this;
self.workers = []; //self.cohorts

/*--GLOBAL VARIABLES--*/
self.employee = {}; //variable for storing form inputs once serialized
self.totalMonthly = 0; //variable for storing combined salary of all employees (divided by 12)

self.createEmployee = function () {  //self.createCohort
//we defined the cohort object via ng model
// angular does 2-way binding;
self.workers.push(angular.copy(self.worker));  //self.cohort
//angular copy makes a copy of object and divorce object

self.totalMonthly += self.worker.annualSalary / 12;
self.totalMonthly = Math.round(self.totalMonthly);



}//end deleteEmployee

self.deleteEmployee = function ($index) {


console.log('inside deleteEmployee');
console.log('index', $index);
console.log('self.workers', self.workers);
self.workers.splice($index, 1)
console.log('self', self.workers);





}//end createEmployee




});//end BasicController
