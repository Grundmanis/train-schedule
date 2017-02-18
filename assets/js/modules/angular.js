
// Define a new module for our app. The array holds the names of dependencies if any.
var app = angular.module("routeSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

    return function(arr, searchString){

        if(!searchString){
            return arr;
        }

        var result = [];

        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){

            if(item.name.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }

        });

        if (result.length == 1 && searchString.toLowerCase() == result[0].name.toLowerCase()) {
            return null;
        }

        return result;
    };

});

function SearchRouteController($scope) {

    $scope.setFrom = function(value){
        $scope.from = value;
    };

    $scope.setTo = function(value){
        $scope.to = value;
    };

    $scope.stations = [
        {
            name: 'Skulte'
        },
        {
            name: 'Zvejniekciems'
        },
        {
            name: 'Kisupe'
        },
        {
            name: 'Saulkrasti'
        },
        {
            name: 'Pabazi'
        },
        {
            name: 'Lilaste'
        },
        {
            name: 'Gauja'
        },
        {
            name: 'Carnikava'
        },
        {
            name: 'Garciems'
        },
        {
            name: 'Kalngale'
        },
        {
            name: 'Vecaki'
        },
        {
            name: 'Vecdaugava'
        },
        {
            name: 'Ziemelblazma'
        },
        {
            name: 'Mangali'
        },
        {
            name: 'Sarkandaugava'
        },
        {
            name: 'Brasa'
        },
        {
            name: 'Zemitani'
        },
        {
            name: 'Riga'
        }
    ];

}