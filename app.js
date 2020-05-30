(function () {
	'use strict';
	angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject =['$scope'];

	function LunchCheckController ($scope){
		$scope.lunchlist = '';
		$scope.msg = '';
		$scope.fontStyle = {};
		$scope.checkItems = function () {
			if($scope.lunchlist !== '') {
				var items = $scope.lunchlist.split(',');
				var count =0;
				for(var i =0; i<items.length; i++){
					if(items[i].trim() !=='')
						count++;
				}
				if(count > 0){
					if(count <=3){
						$scope.msg = "Enjoy!";
					}
					else if(count > 3){
						$scope.msg = "Too much!";
					}
					$scope.fontStyle = {
						"color":"green"
					};
				}
				else {
					enterItems();
				}
			}
			else {
				enterItems();
			}
		}
		var enterItems = function() {
			$scope.msg = "Please enter data first";
				$scope.fontStyle = {
					"color":"red"
				};
		};
	}
})();