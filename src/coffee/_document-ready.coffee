###
  Every plugin initialization goes here.
###

$(document).ready ->
  console.log 'ready--uu'
  testFunction = ->
    return true
  $('[data-js-plugin-name]').each ->
    $(@).PluginName()