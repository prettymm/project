/*
# Create plugins using the following template.
#
# Usage:
# $('[data-js-plugin-name]').PluginName({ property: 'not-foo' });
# $('[data-js-plugin-name]').PluginName('print', 'Hello, world');
*/

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
$.mlpPlugin(PluginName, 'PluginName');