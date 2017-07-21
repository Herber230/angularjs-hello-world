

(function () {
    'use strict';

    var mainModule = angular.module('app.helloworld', []);

})();

(function () {
    'use strict';

    var mainModule = angular.module('app.helloworld');

    mainModule.controller('ControladorPrincipal', controller)

    controller.$inject = [];

    function controller() {
        var ctrl = this;

        function int() {

            ctrl.personas = 
                [   { nombre: 'Enrique', edad: 28 },
                    { nombre: 'Roberto', edad: 27 },
                    { nombre: 'Roger', edad: 30 },
                    { nombre: 'Shirley', edad: 27 }     ];

        };

        ctrl.agregarNuevaPersona = function () {
            ctrl.personas.push(ctrl.nuevaPersona);
            ctrl.nuevaPersona = {};
        };

        ctrl.eliminarPersona = function(persona)
        {
            var indiceEliminar;
            for (var i = 0; i < ctrl.personas.length; i ++)
                if (persona == ctrl.personas[i])
                    indiceEliminar = i;

            ctrl.personas.splice(indiceEliminar, 1);
        };

        

        int();
    };

})();

