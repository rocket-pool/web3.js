var f = require('../formatters');
var SolidityType = require('../type');

/**
 * SolidityTypeDecimal10 is a protoype that represents decimal10 type
 * It matches:
 * decimal10
 * decimal10[]
 * decimal10[4]
 * decimal10[][]
 * decimal10[3][]
 * decimal10[][6][], ...
 */
var SolidityTypeDecimal10 = function () {
    this._inputFormatter = f.formatInputDecimal10;
    this._outputFormatter = f.formatOutputDecimal10;
};

SolidityTypeDecimal10.prototype = new SolidityType({});
SolidityTypeDecimal10.prototype.constructor = SolidityTypeDecimal10;

SolidityTypeDecimal10.prototype.isType = function (name) {
    return !!name.match(/^decimal10(\[([0-9]*)\])*$/);
};

module.exports = SolidityTypeDecimal10;
