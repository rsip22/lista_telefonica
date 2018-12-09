angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI) {
  $scope.app = "Lista Telefônica";
  $scope.contatos = [];
  $scope.operadoras = [];

  let carregarContatos = function () {
    contatosAPI.getContatos().then(function (data, status) {
      $scope.contatos = data.data;
    });
  }
  let carregarOperadoras = function () {
    operadorasAPI.getOperadoras().then(function (data, status) {
      $scope.operadoras = data.data;
    });
  }

  $scope.adicionarContato = function(contato) {
    contatosAPI.saveContato(contato).then(function (contato, status) {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      $scope.contato = carregarContatos();
    }, function errorCallback(response) {
      console.log('object:', contato, 'response:', response);
    });
    };

  $scope.apagarContatos = function(contatos) {
    $scope.contatos = contatos.filter(function (contato) {
      if (!contato.selecionado){
        return contato;
      } else {
        contatosAPI.deleteContato(contato).then(function (contato, status) {
          delete $scope.contato;
          $scope.contatoForm.$setPristine();
          return carregarContatos();
        }, function errorCallback(response) {
          console.log('object:', contato, 'response:', response);
        });
      };
    });
  };
  $scope.isContatoSelecionado = function (contatos) {
    return contatos.some(function (contato) {
      return contato.selecionado;
    });
  };
  $scope.ordenarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  carregarContatos();
  carregarOperadoras();
  $scope.classe1 = "selecionado";
  $scope.classe2 = "negrito";
});
