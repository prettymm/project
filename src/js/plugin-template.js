/*
# Create plugins using the following template.
#
# Usage:
# $('[data-js-plugin-name]').PluginName({ property: 'not-foo' });
# $('[data-js-plugin-name]').PluginName('print', 'Hello, world');
*/
var slice = [].slice;

(function($, window) {
  var PluginName;
  PluginName = (function() {
    PluginName.prototype.defaults = {
      property: 'foo'
    };

    function PluginName(element, options) {
      this.ops = $.extend({}, this.defaults, options);
      this.el = $(element);
      this.init();
    }

    PluginName.prototype.init = function() {
      return this.el.click(function() {
        return false;
      });
    };

    PluginName.prototype.print = function(echo) {
      return console.log(this.ops.property + ': ' + echo);
    };

    return PluginName;

  })();
  return $.fn.extend({
    PluginName: function() {
      var args, option;
      option = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return this.each(function() {
        var $this, data, key;
        $this = $(this);
        key = 'plugin-name';
        data = $this.data(key);
        if (!data) {
          $this.data(key, (data = new PluginName(this, option)));
        }
        if (typeof option === 'string') {
          return data[option].apply(data, args);
        }
      });
    }
  });
})(window.jQuery, window);