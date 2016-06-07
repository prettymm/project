$.mlpFnName = function(fn) {
  return fn.name || (fn + '').split(/\s|\(/)[1];
};

$.mlpInit = function(fn, set) {
  var name;
  if (set === null) {
    set = true;
  }
  window.MLP = window.MLP || {};
  window.MLP.apps = window.MLP.apps || {};
  if (fn && set) {
    name = $.mlpFnName(fn);
    window.MLP.apps[name] = fn;
  } else {
    return window.MLP.apps[fn];
  }
};
 
$.mlpPlugin = function(fn, name, bypass, elPluggin) {
  var obj;
  if (bypass === null) {
    bypass = false;
  }
  if (elPluggin === null) {
    elPluggin = true;
  }
  obj = {};
  $.mlpInit(fn, name);
  name = name || $.mlpFnName(fn);
  obj[name] = function() {
    var args, option;
    option = arguments[0];
    args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return $(this).each(function() {
      var $this, data, key;
      $this = $(this);
      key = 'mlp-' + name;
      data = $this.data(key);
      if (!data || bypass) {
        $this.data('name', name);
        $this.data(key, (data = new fn(option, this)));
      }
      if (typeof option === 'string') {
        return data[option].apply(data, args);
      }
    });
  };
  $.fn.extend(obj);
  if (!elPluggin) {
    obj[name] = function(option) {
      return new fn(option);
    };
    return $.extend(obj);
  }
};