angular.module('RDash', ['ui.bootstrap', 'ui.router', 'ngCookies', 'cgBusy']);

angular.module('RDash').value('cgBusyDefaults', {
    message: 'LOADING',
    backdrop: true,
    templateUrl: '../templates/loading.html',
    delay: 500,
    minDuration: 1000,
    wrapperClass: 'my-class my-class2'
});
