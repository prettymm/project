/*
  Every plugin initialization goes here.
 */
$(document).ready(function() {
  
  var testFunction = function() {
    console.log("testFunction");
    return true;
  };
  return $('[data-js-plugin-name]').each(function() {
    return $(this).PluginName();
  });
});