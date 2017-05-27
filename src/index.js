module.exports = {
  storeInUrl: store,
  getDataFromUrl: get
};

function store(data) {
  var hash = '';
  for(var key in data) {
    var obj = data[key];
    hash += key + '=' + obj + '&';
  }

  if(hash.length === 0) {
    return false;
  }
  else {
    window.location.hash = hash.substring(0, hash.length - 1);
    return true;
  }
}

function get() {
  var hashStored = window.location.hash.substring(1);
  var data = hashStored.split('&');
  var result = {};

  for(var i = 0; i < data.length; i++) {
    var elt = data[i].split('=');
    if(elt.length === 2) {
      result[elt[0]] = elt[1];
    }
  }

  return result;
}
