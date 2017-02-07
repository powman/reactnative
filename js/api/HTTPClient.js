// http://visionmedia.github.io/superagent
import superagent from 'superagent';

import Network from '../api/Network';

var HTTPClient = {
  wrapper: function(inner) {
    return function(error, response) {
      Network.completed();

      if(!inner) return;
      // chance to wrap and call original
      var parsed = null;
      if(response && response.text && response.text.length > 0) {
        try {
           parsed = JSON.parse(response.text);
        }
        catch (e) {
           parsed = null;
           // TODO: some other error?
           console.log("HTTPClient could not parse:\n\n" + response.text);
        }
      }

      var errorObj = null;
      var valueObj = null;

      if (error) {
        // error.status => 422
        errorObj = {};
        if (error.status) {
          errorObj.status = error.status; // 422
        }
        else {
          errorObj.status = 520; // Unknown error
        }

        errorObj.errors = [];
        if (parsed && parsed.error) {
          errorObj.message = parsed.error
        }
        if (!errorObj.message) {
          errorObj.message = 'Server Error: ' + errorObj.status;
        }
        console.log("http error (" + errorObj.status + "): " + errorObj.message);
      }
      else {
        valueObj = parsed;
      }
      inner(errorObj, valueObj);
    };
  },

  addHeaders: function(req) {

    req = req.accept('application/json');
    req = req.type('application/x-www-form-urlencoded; charset=UTF-8');

    return req;
  },

  fetch: function(req, callback) {
    req = this.addHeaders(req);
    Network.started();
    req.end(this.wrapper(callback));
  },

  url: function(path) {
    var host = 'http://192.168.1.16/webservice';
    return host + "/" + path;
  },

  post: function(path, values, callback) {
    var req = superagent.post(this.url(path));
    if (values) {
      req = req.send(values);
    }
    this.fetch(req, callback);
  },

  put: function(path, values, callback) {
    var req = superagent.put(this.url(path));
    if (values) {
      req = req.send(values);
    }
    this.fetch(req, callback);
  },


  get: function(path, params, callback) {
    var req = superagent.get(this.url(path));
    if (params) {
      req = req.query(params);
    }
    this.fetch(req, callback);
  }
};

export default HTTPClient;