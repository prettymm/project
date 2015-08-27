###
  Every plugin initialization goes here.
###

$(document).ready ->

  testFunction = ->
    return true

  $('[data-js-plugin-name]').each ->
    $(@).PluginName()