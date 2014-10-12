(function() {
	var app = angular.module('app', []);
    var protocol = location.protocol;
    var isRunningOnServiceNow = false;
    var urlBase = '';

    //Determine if the app is running on ServiceNow
    if (location.hostname.indexOf('service-now') > 0) {
    	isRunningOnServiceNow = true;
    }

    //Determine the correct URL Base based on where the application
    //is running
    if (isRunningOnServiceNow) {
    	urlBase = 'https://' + location.hostname + '/api/now/v1/';
    }
    else {
   		urlBase = "api-stubs";
	}

	console.log('URL BASE:' + urlBase);


	/* Controller: TabController
	 * Provides tabbing functionality:
	 *	- tab: the currently selected tab
	 * 	- selectTab: changes the currently selected tab
	 *	- isSelected: determines if the given tab is the currently
	 *		selected tab.
	 */
	app.controller('TabController', function(){
		this.tab = 'Dashboard';

		this.selectTab = function(tabName) {
			this.tab = tabName;
		}

		this.isSelected = function(tabName) {
			return this.tab === tabName;
		}
	});


	
	/* Controller: IncidentController
	 * Right now just an example of how to call actual SN services vs. local stubs
	 */
	app.controller('IncidentController', ['$log','$http', function($log, $http){
		var controller = this;
		controller.incidents = [ ];

		//Retrieve the list of incidents from the API
		var apiUrl = urlBase + '/table/incident';
		$log.log('API URL:' + apiUrl);
		$http.get(apiUrl).success(function(data) {
			controller.incidents = data.result;
			$log.log(controller.incidents);
		});

	}]);



})();