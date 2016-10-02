###
  Exchanges a background based on mouse over via JS. 
  (Useful for CMS type sites which need to control background images.)
  Usage: div(data-js-bg-exchange='$url', data-bg-active='$url2')
###

class BgExchange extends MLP.apps.MLPModule

  init: ->
    super()
    @events()
    @exchangeBg(@getDefaultBg())

  events: ->
    @el.target.on 'mouseenter', (e) =>
      @activeBackground()

    @el.target.on 'mouseout', (e) =>
      @inactiveBackground()      

  inactiveBackground: ->
    @exchangeBg(@getDefaultBg())

  activeBackground: ->
    @exchangeBg(@el.target.data('bg-active'))

  getDefaultBg: ->
    @el.target.data('js-bg-exchange')

  exchangeBg: (bg) ->
    @el.target.css('background-image', 'url('+bg+')')

$.mlpPlugin(BgExchange, 'BgExchange', true)