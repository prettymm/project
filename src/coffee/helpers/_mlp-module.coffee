$.mlpFnName = (fn) ->
  fn.name || (fn + '').split(/\s|\(/)[1]

$.mlpInit = (fn, name, set = true) ->
  window.MLP = window.MLP || {}
  window.MLP.apps = window.MLP.apps || {}
  window.MLP.instances = window.MLP.instances || {}
  window.MLP.config = window.MLP.config || {}
  if fn && set
    name = name || $.mlpFnName(fn)
    window.MLP.apps[name] = fn
  else 
    window.MLP.apps[fn]

###
@fn (obj) - the JS object class
@name (str) - the name of the class
@bypass (bool) - whether or not the module can be instantiated multiple times
@elModule (bool) - whether to create an element based module $(...).ModuleName 
or regular JQuery method $.MethodName
@returnContext (bool) - whether to return an object with class context 
and the element which instantiated the module (@elModule must be true)
###

$.mlpModule = (fn, name, bypass = false, elModule = true, returnContext = true) ->
  obj = {}
  $.mlpInit(fn, name)
  name = name || $.mlpFnName(fn)
  obj[name] = (option, args...) ->
    _this = []
    _el = null
    _el = @each -> 
      $this = $(this)
      key = 'mlp-'+name
      data = $this.data(key)
      if !data || bypass
        $this.data 'name', name
        $this.data key, (data = new fn(option, this))
      if typeof option == 'string'
        data[option].apply(data, args)
      _this.push data

    result = if returnContext then {mlp: _this, el: _el} else null
    return result
  if elModule
    $.fn.extend obj 
  else
    obj[name] = (option) ->
      new fn(option)
    $.extend obj

class MLPModule
  defaults: {}

  constructor: (options, element) ->
    @ops = $.extend({}, @defaults, options)
    @sel = @sel || {}
    @el = @el || {}
    @el.target = $(element)
    @init()

  init: ->
    @klass =
      active: 'is-active'
      offscreen: 'l-offscreen'
      ghost: 'l-ghost'

    @keys =
      esc: 27
      down: 40
      up: 38
      left: 37
      right: 39
      o: 79
      space: 32
      tab: 9
      enter: 13

    @aria = 
      expanded: 'aria-expanded'
      hidden: 'aria-hidden'
      controls: 'aria-controls'
      selected: 'aria-selected'
      invalid: 'aria-invalid'
      pressed: 'aria-pressed'
      described: 'aria-describedby'
      checked: 'aria-checked'
      label: 'aria-label'
      labelled: 'aria-labelledby'
      popup: 'aria-haspopup'

    @attr =
      tabindex: 'tabindex'

  stop: (e) ->
    e.preventDefault()
    e.stopPropagation()

  target: (e) ->
    $(e.target)

  currentTarget: (e) ->
    $(e.currentTarget)

  isRight: (e) =>
    @keycode(e) == @keys.right

  isLeft: (e) =>
    @keycode(e) == @keys.left

  isUp: (e) =>
    @keycode(e) == @keys.up

  isDown: (e) =>
    @keycode(e) == @keys.down

  isEnter: (e) =>
    @keycode(e) == @keys.enter

  isSpace: (e) =>
    @keycode(e) == @keys.space

  isTab: (e) =>
    @keycode(e) == @keys.tab

  isBackTab: (e) =>
    e.shiftKey && @isTab(e)

  isEsc: (e) =>
    @keycode(e) == @keys.esc

  isEnterOrSpace: (e) =>
    @isEnter(e) || @isSpace(e)

  keycode: (e) =>
    e.which

  isIE: (version = 9) =>
    bowser.msie && bowser.version == version

## Add module to window namespace.
$.mlpInit(MLPModule, 'MLPModule')