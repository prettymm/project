(($) ->
  "use strict"
  PluginName = (element, options) ->
    defaults =
      property: 'value'

    @options = $.extend(defaults, options)
    @element = $(element)
    @init()
    return

  PluginName::init = ->
    that = @
    @element.click ->
      return false
    return

  ## Add plugin to jQuery namespace.
  $.fn.PluginName = (options) ->
    $(@).each (i, element) ->
      $(@).data 'plugin-name', new PluginName(@, options) unless $(@).data('plugin-name')
      return

  return
) jQuery