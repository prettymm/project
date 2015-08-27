# Create plugins using the following template.
#
# Usage:
# $('[data-js-plugin-name]').PluginName({ property: 'not-foo' });
# $('[data-js-plugin-name]').PluginName('print', 'Hello, world');

(($, window) ->

  class PluginName
    defaults:
      property: 'foo'

    constructor: (element, options) ->
      @ops = $.extend({}, @defaults, options)
      @el = $(element)
      @init()

    init: ->
      @el.click ->
        return false

    print: (echo) ->
      console.log(@ops.property + ': ' + echo)

  ## Add plugin to jQuery namespace.
  $.fn.extend PluginName: (option, args...) ->
    @each ->
      $this = $(this)
      key = 'plugin-name'
      data = $this.data(key)

      if !data
        $this.data key, (data = new PluginName(this, option))
      if typeof option == 'string'
        data[option].apply(data, args)

) window.jQuery, window