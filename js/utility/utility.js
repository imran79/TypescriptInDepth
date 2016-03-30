var utility;
(function (utility) {
    var feeUitility;
    (function (feeUitility) {
        function calculateLateFees(numberOfDays) {
            return numberOfDays * 2.5;
        }
        feeUitility.calculateLateFees = calculateLateFees;
    })(feeUitility = utility.feeUitility || (utility.feeUitility = {}));
})(utility = exports.utility || (exports.utility = {}));
//# sourceMappingURL=utility.js.map