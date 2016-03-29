/*
  Every plugin initialization goes here.
 */
$(document).ready(function() {
  
  return $('[data-js-plugin-name]').each(function() {
    return $(this).PluginName();
  });
});