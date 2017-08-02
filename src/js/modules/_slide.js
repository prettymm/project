class Slide extends MLP.apps.MLPModule {

  defaults() {
    this.defaults = {
      property: 'foo'
    };
  }

  init() {
    this.el = {
      languageGlobal: $('#language-global'),
      languageDiv: $('#language-div'),
      langClose: $('.lang-close'),
      dropDown: $('.drop-down'),
      arrowDown: $('.arrow-down')
    };
    super.init();
    this.events();
  }

  events() {
    this.languageEvents();
    this.dropDownEvents();
    this.bodyEvents();
  }

  languageEvents() {
    this.el.languageGlobal.click(() => this.el.languageDiv.toggle(500));
    this.el.langClose.click(() => this.el.languageDiv.hide(500));
  }

  dropDownEvents() {
    var _this = this;
    this.el.arrowDown.click(function(){
      $(this).next().show(500);
      $(this).parent().siblings().find(_this.el.dropDown).hide(500);
    });
  }

  bodyEvents() {
    var dropDown = $('.drop-down');
    $('body').on('click', function(e){
      var target = $(e.target);
      var dropDownEle = target.closest('.drop-down');
      var arrowDown = target.closest('.arrow-down');
      if(!dropDownEle.length && !arrowDown.length){
        dropDown.hide(500);
      }
    });
  }


}
$.mlpModule(Slide, 'Slide');