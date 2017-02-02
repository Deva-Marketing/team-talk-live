"use strict";
require("typings-global");
var plugins = require("./beautylog.plugins");
var beautylog_log_helpers_1 = require("./beautylog.log.helpers");
exports.oraActive = false; // when an Ora is active (e.g. start()) this is true;
var Ora = (function () {
    function Ora(textArg, colorArg, startArg) {
        if (startArg === void 0) { startArg = false; }
        this._oraObject = plugins.ora({
            spinner: "dots",
            text: textArg,
            color: colorArg
        });
        startArg ? this._oraObject.start() : void (0);
    }
    Ora.prototype.text = function (textArg) {
        this._oraObject.text = textArg;
    };
    ;
    Ora.prototype.start = function (textArg, colorArg) {
        if (textArg)
            this._oraObject.text = textArg;
        if (colorArg)
            this._oraObject.color = colorArg;
        exports.activeOra = this;
        exports.oraActive = true;
        this._oraObject.start();
    };
    ;
    Ora.prototype.end = function () {
        this._oraObject.stop();
        this._oraObject.clear();
        exports.activeOra = undefined;
        exports.oraActive = false;
    };
    Ora.prototype.endOk = function (textArg) {
        this.end();
        beautylog_log_helpers_1.logNode(textArg, "ok");
    };
    ;
    Ora.prototype.endError = function (textArg) {
        this.end();
        beautylog_log_helpers_1.logNode(textArg, "error");
    };
    ;
    Ora.prototype.pause = function () {
        this._oraObject.stop();
    };
    Ora.prototype.stop = function () {
        this.end();
    };
    // log methods that play nice with ora
    Ora.prototype.log = function (logText, logType) {
        this.stop();
        beautylog_log_helpers_1.logNode(logText, logType);
        this.start();
    };
    return Ora;
}());
exports.Ora = Ora;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5jbGFzc2VzLm9yYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsUUFBTyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3hCLElBQVksT0FBTyxXQUFNLHFCQUFxQixDQUFDLENBQUE7QUFDL0Msc0NBQXNCLHlCQUF5QixDQUFDLENBQUE7QUFFckMsaUJBQVMsR0FBVyxLQUFLLENBQUMsQ0FBQyxxREFBcUQ7QUFHM0Y7SUFHSSxhQUFZLE9BQWMsRUFBQyxRQUFlLEVBQUMsUUFBd0I7UUFBeEIsd0JBQXdCLEdBQXhCLGdCQUF3QjtRQUMvRCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDMUIsT0FBTyxFQUFDLE1BQU07WUFDZCxJQUFJLEVBQUMsT0FBTztZQUNaLEtBQUssRUFBQyxRQUFRO1NBQ2pCLENBQUMsQ0FBQztRQUVILFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0Qsa0JBQUksR0FBSixVQUFLLE9BQU87UUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDbkMsQ0FBQzs7SUFFRCxtQkFBSyxHQUFMLFVBQU0sT0FBZSxFQUFDLFFBQWdCO1FBQ2xDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUMzQyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUM7WUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDOUMsaUJBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOztJQUNELGlCQUFHLEdBQUg7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEIsaUJBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsaUJBQVMsR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELG1CQUFLLEdBQUwsVUFBTSxPQUFPO1FBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsK0JBQU8sQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7SUFDRCxzQkFBUSxHQUFSLFVBQVMsT0FBTztRQUNaLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLCtCQUFPLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O0lBQ0QsbUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELGtCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDLGlCQUFHLEdBQUgsVUFBSSxPQUFjLEVBQUMsT0FBYztRQUM3QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWiwrQkFBTyxDQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQWxEQSxBQWtEQyxJQUFBO0FBbERZLFdBQUcsTUFrRGYsQ0FBQSIsImZpbGUiOiJiZWF1dHlsb2cuY2xhc3Nlcy5vcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0eXBpbmdzLWdsb2JhbFwiO1xuaW1wb3J0ICogYXMgcGx1Z2lucyBmcm9tIFwiLi9iZWF1dHlsb2cucGx1Z2luc1wiO1xuaW1wb3J0IHtsb2dOb2RlfSBmcm9tIFwiLi9iZWF1dHlsb2cubG9nLmhlbHBlcnNcIjtcblxuZXhwb3J0IGxldCBvcmFBY3RpdmU6Ym9vbGVhbiA9IGZhbHNlOyAvLyB3aGVuIGFuIE9yYSBpcyBhY3RpdmUgKGUuZy4gc3RhcnQoKSkgdGhpcyBpcyB0cnVlO1xuZXhwb3J0IGxldCBhY3RpdmVPcmE6T3JhOyAvL3BvaW50cyB0byB0aGUgY3VycmVudGx5IGFjdGl2ZSBPcmEgb2JqZWN0XG5cbmV4cG9ydCBjbGFzcyBPcmEge1xuICAgIHByaXZhdGUgX29yYU9iamVjdDtcbiAgICBzdGF0ZTpzdHJpbmc7XG4gICAgY29uc3RydWN0b3IodGV4dEFyZzpzdHJpbmcsY29sb3JBcmc6c3RyaW5nLHN0YXJ0QXJnOmJvb2xlYW4gPSBmYWxzZSl7XG4gICAgICAgIHRoaXMuX29yYU9iamVjdCA9IHBsdWdpbnMub3JhKHtcbiAgICAgICAgICAgIHNwaW5uZXI6XCJkb3RzXCIsXG4gICAgICAgICAgICB0ZXh0OnRleHRBcmcsXG4gICAgICAgICAgICBjb2xvcjpjb2xvckFyZ1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHN0YXJ0QXJnID8gdGhpcy5fb3JhT2JqZWN0LnN0YXJ0KCkgOiB2b2lkKDApO1xuICAgIH1cbiAgICB0ZXh0KHRleHRBcmcpe1xuICAgICAgICB0aGlzLl9vcmFPYmplY3QudGV4dCA9IHRleHRBcmc7XG4gICAgfTtcbiAgICBcbiAgICBzdGFydCh0ZXh0QXJnPzpzdHJpbmcsY29sb3JBcmc/OnN0cmluZyl7XG4gICAgICAgIGlmKHRleHRBcmcpIHRoaXMuX29yYU9iamVjdC50ZXh0ID0gdGV4dEFyZztcbiAgICAgICAgaWYoY29sb3JBcmcpIHRoaXMuX29yYU9iamVjdC5jb2xvciA9IGNvbG9yQXJnO1xuICAgICAgICBhY3RpdmVPcmEgPSB0aGlzO1xuICAgICAgICBvcmFBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9vcmFPYmplY3Quc3RhcnQoKTtcbiAgICB9O1xuICAgIGVuZCgpe1xuICAgICAgICB0aGlzLl9vcmFPYmplY3Quc3RvcCgpO1xuICAgICAgICB0aGlzLl9vcmFPYmplY3QuY2xlYXIoKTtcbiAgICAgICAgYWN0aXZlT3JhID0gdW5kZWZpbmVkO1xuICAgICAgICBvcmFBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgZW5kT2sodGV4dEFyZyl7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgIGxvZ05vZGUodGV4dEFyZyxcIm9rXCIpO1xuICAgIH07XG4gICAgZW5kRXJyb3IodGV4dEFyZyl7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgIGxvZ05vZGUodGV4dEFyZyxcImVycm9yXCIpO1xuICAgIH07XG4gICAgcGF1c2UoKXtcbiAgICAgICAgdGhpcy5fb3JhT2JqZWN0LnN0b3AoKTtcbiAgICB9XG4gICAgc3RvcCgpeyAvLyBhbGlhcyBmb3IgZW5kXG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgfVxuICAgIFxuICAgIC8vIGxvZyBtZXRob2RzIHRoYXQgcGxheSBuaWNlIHdpdGggb3JhXG4gICAgbG9nKGxvZ1RleHQ6c3RyaW5nLGxvZ1R5cGU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIGxvZ05vZGUobG9nVGV4dCxsb2dUeXBlKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbn0iXX0=
