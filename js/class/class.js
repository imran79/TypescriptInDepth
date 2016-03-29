var UniversityLibrarian = (function () {
    function UniversityLibrarian() {
        var _this = this;
        this.assistCustomer = function (custName) { return console.log('this' + _this.name + 'assist ' + custName); };
    }
    return UniversityLibrarian;
})();
exports.UniversityLibrarian = UniversityLibrarian;
var ReferenceItem = (function () {
    function ReferenceItem(title, year) {
        var _this = this;
        this.title = title;
        this.year = year;
        this.printItem = function () {
            console.log(_this.title + " was published in " + _this.year);
            console.log(ReferenceItem.departmentName + " own it");
        };
        this.get = function () { return _this._publisherName; };
        this.set = function (publisherName) { return _this._publisherName = publisherName; };
        console.log('This is reference item');
    }
    ReferenceItem.departmentName = 'Research';
    return ReferenceItem;
})();
exports.ReferenceItem = ReferenceItem;
//# sourceMappingURL=class.js.map