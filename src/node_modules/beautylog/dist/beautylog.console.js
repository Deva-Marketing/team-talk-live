"use strict";
require("typings-global");
var beautylog_classes_ora_1 = require("./beautylog.classes.ora");
var nativeLog = console.log;
/**
 * routes the console to got through beautylog, so beautylog can take action before things are logged to console.
 */
var route = function (statusArg) {
    if (statusArg == true) {
        console.log = exports.beautyConsole.log;
    }
    else {
        console.log = nativeLog;
    }
};
exports.beautyConsole = {
    log2: nativeLog,
    log: function (logArg) {
        if (beautylog_classes_ora_1.oraActive) {
            beautylog_classes_ora_1.activeOra.pause();
            nativeLog.apply(nativeLog, arguments);
            beautylog_classes_ora_1.activeOra.start();
        }
        else {
            nativeLog.apply(nativeLog, arguments);
        }
    }
};
route(true);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5jb25zb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFPLGdCQUFnQixDQUFDLENBQUE7QUFFeEIsc0NBQWtDLHlCQUF5QixDQUFDLENBQUE7QUFDNUQsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUU1Qjs7R0FFRztBQUNILElBQUksS0FBSyxHQUFHLFVBQVMsU0FBaUI7SUFDbEMsRUFBRSxDQUFBLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsR0FBRyxxQkFBYSxDQUFDLEdBQUcsQ0FBQztJQUNwQyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0FBRUwsQ0FBQyxDQUFDO0FBRVMscUJBQWEsR0FBRztJQUN2QixJQUFJLEVBQUUsU0FBUztJQUNmLEdBQUcsRUFBRSxVQUFTLE1BQVU7UUFDcEIsRUFBRSxDQUFBLENBQUMsaUNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDVixpQ0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xCLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3RDLGlDQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDMUMsQ0FBQztJQUNMLENBQUM7Q0FDSixDQUFBO0FBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDIiwiZmlsZSI6ImJlYXV0eWxvZy5jb25zb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy1nbG9iYWxcIjtcbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vYmVhdXR5bG9nLnBsdWdpbnNcIik7XG5pbXBvcnQge2FjdGl2ZU9yYSxvcmFBY3RpdmV9IGZyb20gXCIuL2JlYXV0eWxvZy5jbGFzc2VzLm9yYVwiO1xubGV0IG5hdGl2ZUxvZyA9IGNvbnNvbGUubG9nO1xuXG4vKipcbiAqIHJvdXRlcyB0aGUgY29uc29sZSB0byBnb3QgdGhyb3VnaCBiZWF1dHlsb2csIHNvIGJlYXV0eWxvZyBjYW4gdGFrZSBhY3Rpb24gYmVmb3JlIHRoaW5ncyBhcmUgbG9nZ2VkIHRvIGNvbnNvbGUuXG4gKi9cbmxldCByb3V0ZSA9IGZ1bmN0aW9uKHN0YXR1c0FyZzpib29sZWFuKXtcbiAgICBpZihzdGF0dXNBcmcgPT0gdHJ1ZSl7XG4gICAgICAgIGNvbnNvbGUubG9nID0gYmVhdXR5Q29uc29sZS5sb2c7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2cgPSBuYXRpdmVMb2c7XG4gICAgfVxuICAgIFxufTtcblxuZXhwb3J0IGxldCBiZWF1dHlDb25zb2xlID0ge1xuICAgIGxvZzI6IG5hdGl2ZUxvZyxcbiAgICBsb2c6IGZ1bmN0aW9uKGxvZ0FyZzphbnkpe1xuICAgICAgICBpZihvcmFBY3RpdmUpe1xuICAgICAgICAgICAgYWN0aXZlT3JhLnBhdXNlKCk7XG4gICAgICAgICAgICBuYXRpdmVMb2cuYXBwbHkobmF0aXZlTG9nLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgYWN0aXZlT3JhLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYXRpdmVMb2cuYXBwbHkobmF0aXZlTG9nLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5yb3V0ZSh0cnVlKTsiXX0=
