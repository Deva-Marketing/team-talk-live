"use strict";
require("typings-global");
var beautylog_log_helpers_1 = require("./beautylog.log.helpers");
var beautylog_log_helpers_2 = require("./beautylog.log.helpers");
exports.log = beautylog_log_helpers_2.log;
/**
 * logs an info to console
 * @param logText
 * @returns {boolean}
 */
exports.info = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'info');
};
/**
 * logs an 'OK!' message to console
 * @param logText
 * @returns {boolean}
 */
exports.ok = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'ok');
};
/**
 * logs a success to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.success = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'success');
};
/**
 * logs a 'warn:' message to console
 * @param logText string to log as error
 * @returns {boolean}
 */
exports.warn = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'warn');
};
/**
 * logs an error to console
 * @param logText
 * @returns {boolean}
 */
exports.error = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'error');
};
/**
 * logs an directory to console
 * @param logText
 * @returns {boolean}
 */
exports.dir = function (logText) {
    return beautylog_log_helpers_1.log(logText, 'dir');
};
/**
 * creates a new empty line
 * @param linesArg
 * @returns void
 */
exports.newLine = function (linesArg) {
    if (linesArg === void 0) { linesArg = 1; }
    for (var i = 0; i < linesArg; i++) {
        console.log("\n");
    }
};
/**
 * logs a reduced log that only logs changes of consequential log messages
 */
exports.logReduced = function (logTextArg, repeatEveryTimesArg) {
    if (repeatEveryTimesArg === void 0) { repeatEveryTimesArg = 0; }
    if (logTextArg == previousMessage && (repeatEveryTimesArg == 0 || sameMessageCounter != repeatEveryTimesArg)) {
        sameMessageCounter++;
    }
    else {
        sameMessageCounter = 0;
        previousMessage = logTextArg;
        beautylog_log_helpers_1.log(logTextArg);
    }
};
var previousMessage = "";
var sameMessageCounter = 0;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sZ0JBQWdCLENBQUMsQ0FBQTtBQUV4QixzQ0FBa0IseUJBQXlCLENBQUMsQ0FBQTtBQUM1QyxzQ0FBa0IseUJBQXlCLENBQUM7QUFBcEMsMENBQW9DO0FBRTVDOzs7O0dBSUc7QUFDUSxZQUFJLEdBQUcsVUFBQyxPQUFPO0lBQ3RCLE1BQU0sQ0FBQywyQkFBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsVUFBRSxHQUFHLFVBQUMsT0FBTztJQUNwQixNQUFNLENBQUMsMkJBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLGVBQU8sR0FBRyxVQUFDLE9BQU87SUFDekIsTUFBTSxDQUFDLDJCQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDUSxZQUFJLEdBQUcsVUFBQyxPQUFPO0lBQ3RCLE1BQU0sQ0FBQywyQkFBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ1EsYUFBSyxHQUFHLFVBQUMsT0FBTztJQUN2QixNQUFNLENBQUMsMkJBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLFdBQUcsR0FBRyxVQUFDLE9BQU87SUFDckIsTUFBTSxDQUFDLDJCQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDUSxlQUFPLEdBQUcsVUFBQyxRQUFtQjtJQUFuQix3QkFBbUIsR0FBbkIsWUFBbUI7SUFDckMsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7QUFDTCxDQUFDLENBQUE7QUFFRDs7R0FFRztBQUNRLGtCQUFVLEdBQUcsVUFBQyxVQUFpQixFQUFDLG1CQUE4QjtJQUE5QixtQ0FBOEIsR0FBOUIsdUJBQThCO0lBQ3JFLEVBQUUsQ0FBQSxDQUFDLFVBQVUsSUFBSSxlQUFlLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLElBQUksa0JBQWtCLElBQUksbUJBQW1CLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDekcsa0JBQWtCLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDdkIsZUFBZSxHQUFHLFVBQVUsQ0FBQztRQUM3QiwyQkFBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRixJQUFJLGVBQWUsR0FBVSxFQUFFLENBQUM7QUFDaEMsSUFBSSxrQkFBa0IsR0FBVSxDQUFDLENBQUMiLCJmaWxlIjoiYmVhdXR5bG9nLmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInR5cGluZ3MtZ2xvYmFsXCI7XG5cbmltcG9ydCB7bG9nfSBmcm9tIFwiLi9iZWF1dHlsb2cubG9nLmhlbHBlcnNcIjtcbmV4cG9ydCB7bG9nfSBmcm9tIFwiLi9iZWF1dHlsb2cubG9nLmhlbHBlcnNcIjtcblxuLyoqXG4gKiBsb2dzIGFuIGluZm8gdG8gY29uc29sZVxuICogQHBhcmFtIGxvZ1RleHRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgbGV0IGluZm8gPSAobG9nVGV4dCkgPT4ge1xuICAgIHJldHVybiBsb2cobG9nVGV4dCwgJ2luZm8nKTtcbn07XG5cbi8qKlxuICogbG9ncyBhbiAnT0shJyBtZXNzYWdlIHRvIGNvbnNvbGVcbiAqIEBwYXJhbSBsb2dUZXh0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGxldCBvayA9IChsb2dUZXh0KSA9PiB7XG4gICAgcmV0dXJuIGxvZyhsb2dUZXh0LCAnb2snKTtcbn07XG5cbi8qKlxuICogbG9ncyBhIHN1Y2Nlc3MgdG8gY29uc29sZVxuICogQHBhcmFtIGxvZ1RleHQgc3RyaW5nIHRvIGxvZyBhcyBlcnJvclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBsZXQgc3VjY2VzcyA9IChsb2dUZXh0KSA9PiB7XG4gICAgcmV0dXJuIGxvZyhsb2dUZXh0LCAnc3VjY2VzcycpO1xufTtcblxuLyoqXG4gKiBsb2dzIGEgJ3dhcm46JyBtZXNzYWdlIHRvIGNvbnNvbGVcbiAqIEBwYXJhbSBsb2dUZXh0IHN0cmluZyB0byBsb2cgYXMgZXJyb3JcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgbGV0IHdhcm4gPSAobG9nVGV4dCkgPT4ge1xuICAgIHJldHVybiBsb2cobG9nVGV4dCwgJ3dhcm4nKTtcbn07XG5cbi8qKlxuICogbG9ncyBhbiBlcnJvciB0byBjb25zb2xlXG4gKiBAcGFyYW0gbG9nVGV4dFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBsZXQgZXJyb3IgPSAobG9nVGV4dCkgPT4ge1xuICAgIHJldHVybiBsb2cobG9nVGV4dCwgJ2Vycm9yJyk7XG59O1xuXG4vKipcbiAqIGxvZ3MgYW4gZGlyZWN0b3J5IHRvIGNvbnNvbGVcbiAqIEBwYXJhbSBsb2dUZXh0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGxldCBkaXIgPSAobG9nVGV4dCkgPT4ge1xuICAgIHJldHVybiBsb2cobG9nVGV4dCwgJ2RpcicpO1xufTtcblxuLyoqXG4gKiBjcmVhdGVzIGEgbmV3IGVtcHR5IGxpbmVcbiAqIEBwYXJhbSBsaW5lc0FyZ1xuICogQHJldHVybnMgdm9pZFxuICovXG5leHBvcnQgbGV0IG5ld0xpbmUgPSAobGluZXNBcmc6bnVtYmVyID0gMSkgPT4ge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5lc0FyZztpKyspe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlxcblwiKTtcbiAgICB9XG59XG5cbi8qKlxuICogbG9ncyBhIHJlZHVjZWQgbG9nIHRoYXQgb25seSBsb2dzIGNoYW5nZXMgb2YgY29uc2VxdWVudGlhbCBsb2cgbWVzc2FnZXNcbiAqL1xuZXhwb3J0IGxldCBsb2dSZWR1Y2VkID0gKGxvZ1RleHRBcmc6c3RyaW5nLHJlcGVhdEV2ZXJ5VGltZXNBcmc6bnVtYmVyID0gMCkgPT4ge1xuICAgIGlmKGxvZ1RleHRBcmcgPT0gcHJldmlvdXNNZXNzYWdlICYmIChyZXBlYXRFdmVyeVRpbWVzQXJnID09IDAgfHwgc2FtZU1lc3NhZ2VDb3VudGVyICE9IHJlcGVhdEV2ZXJ5VGltZXNBcmcpKXtcbiAgICAgICAgc2FtZU1lc3NhZ2VDb3VudGVyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2FtZU1lc3NhZ2VDb3VudGVyID0gMDtcbiAgICAgICAgcHJldmlvdXNNZXNzYWdlID0gbG9nVGV4dEFyZztcbiAgICAgICAgbG9nKGxvZ1RleHRBcmcpO1xuICAgIH1cbn07XG5sZXQgcHJldmlvdXNNZXNzYWdlOnN0cmluZyA9IFwiXCI7XG5sZXQgc2FtZU1lc3NhZ2VDb3VudGVyOm51bWJlciA9IDA7Il19
