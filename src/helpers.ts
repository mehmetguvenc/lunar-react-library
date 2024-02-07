export const waitForFinalEvent = (function () {
    var timers: { [key: string]: number } = {};
    return function (callback: Function, ms: number, uniqueId: string) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout(timers[uniqueId]);
        }
        console.log(timers)
        timers[uniqueId] = setTimeout(callback, ms);
        console.log(timers)
    };
})();