var f = require('../formatters');
var SolidityType = require('../type');

/**
 * SolidityTypeDecimal is a protoype that represents decimal type
 * It matches:
 * decimal
 * decimal[]
 * decimal[4]
 * decimal[][]
 * decimal[3][]
 * decimal[][6][], ...
 * decimal10
 * decimal8[]
 * decimal6[4]
 * decimal4[][]
 * decimal[3][]
 * decimal2[][6][], ...
 */
var SolidityTypeDecimal = function () {
    this._inputFormatter = f.formatInputDecimal;
    this._outputFormatter = f.formatOutputDecimal;
};

SolidityTypeDecimal.prototype = new SolidityType({});
SolidityTypeDecimal.prototype.constructor = SolidityTypeDecimal;

SolidityTypeDecimal.prototype.isType = function (name) {
    return !!name.match(/^decimal([0-9]*)?(\[([0-9]*)\])*$/);
};

module.exports = SolidityTypeDecimal;
