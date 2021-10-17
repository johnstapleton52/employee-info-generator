// dependencies
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');


// question function
const questions = {
    {
        name: 'employee-name',

    }
}

module.exports = function(val1, val2) {
    if (val1 === val2) {
        return true;
    } else {
        return false;
    }
};