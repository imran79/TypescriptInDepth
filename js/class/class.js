var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Encyclopedia = (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(title, year, edition) {
        var _this = this;
        _super.call(this, title, year);
        this.edition = edition;
        this.printItem = function () {
            console.log('this is encyclopedia');
            console.log(_this.title + " is published in year " + _this.year + " edition " + _this.edition);
        };
    }
    return Encyclopedia;
})(ReferenceItem);
exports.Encyclopedia = Encyclopedia;
//# sourceMappingURL=class.js.map