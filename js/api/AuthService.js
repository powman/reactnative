import client from '../api/HTTPClient';

var UserService = {

  accountCallback: function(callback) {
    return function(error, response) {
      callback(error, response);
    };
  },

  signup: function(username, password, callback) {
    client.post("sga-usuario/index", {usuario: username, senha: password}, UserService.accountCallback(callback));
  },

  login: function(username, password, callback) {
    client.post("sga-usuario/login", {usuario: username, senha: password}, UserService.accountCallback(callback));
  } 
};

export default UserService;