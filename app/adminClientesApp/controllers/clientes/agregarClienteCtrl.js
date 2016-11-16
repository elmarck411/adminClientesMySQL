angular.module('adminClientesApp')
.controller('agregarClienteCtrl',['$scope','$http','$location','servicioDatos', function($scope,$http,$location,servicioDatos){
	$scope.accionCliente = "Agregar ";
	
	
	   
	$http.get('app/recursos/estadosMexico.json').success(function(data) {
      $scope.estadosMx = data;
	/*   $scope.cliente = {};
	  $scope.cliente.estado1 = {"clave": "", "nombre":"Seleccione..."}; */
	});

	$scope.guardar = function(){
	    $scope.cliente.estados = {};
	    $scope.cliente.estados.clave = parseInt($scope.cliente.estado1.clave);
	    $scope.cliente.estados.nombre = $scope.cliente.estado1.nombre;
		servicioDatos.agregaCliente($scope.cliente).$promise.then(
			function(data){
				alert("Cliente agregado correctamente");
				$location.path('/clientes');
			}
		);
		
	};
}]);
