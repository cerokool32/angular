angular.module('RDash', ['ui.bootstrap', 'ui.router', 'ngCookies', 'cgBusy']);

angular.module('RDash').value('cgBusyDefaults', {
    message: 'LOADING',
    backdrop: true,
    templateUrl: 'templates/loading.html',
    delay: 300,
    minDuration: 700,
    wrapperClass: 'my-class my-class2'
});
