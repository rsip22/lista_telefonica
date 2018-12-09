// Factory function

angular.module("listaTelefonica").factory("contatosAPI", function($http, config) {
  let _getContatos = function () {
    return $http.get(config.baseUrl + "/contatos");
  };

  let _saveContato = function (contato) {
    return $http.post(config.baseUrl + "/contatos", contato);
  };

  let _deleteContato = function (contato) {
    return $http.delete(config.baseUrl + "/contatos/" + contato.id);
  };

  return {
    getContatos: _getContatos,
    saveContato: _saveContato,
    deleteContato: _deleteContato
  };
});
