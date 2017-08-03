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
      arrowDown: $('.arrow-down'),
      sidebarDisplay: $('.sidebar-display'),
      navbarMobile: $('.navbar-mobile'),
      sidebarSearch: $('.sidebar-search'),
      form: $('.form'),
      searchText: $('.SearchText'),
      dropDownMobile: $('.drop-down-mobile'),
      navMenuMobile: $('.nav-menu-mobile'),
      catalent: $('.catalent')
    };
    super.init();
    this.events();
  }

  events() {
    this.languageEvents();
    this.dropDownEvents();
    this.bodyEvents();
    this.navbarEvents();
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

  navbarEvents() {
    var _this = this;
    this.el.sidebarDisplay.on("click", function(){
      _this.el.catalent.toggleClass("side-active");
      _this.el.navbarMobile.toggleClass("active-l-80");
    });

    this.el.sidebarSearch.on("click", function(){
      $(this).toggleClass("sidebar-search-changebg");
      _this.el.form.toggleClass("active-d-b");
      _this.el.searchText.focus();
    });

    $('.nav-menu-mobile a').each(function(){
      if($(this).next(_this.el.dropDownMobile).length){
        $(this).on('click', function(e){
          e.stopPropagation();
          e.preventDefault();
          $(this).next(_this.el.dropDownMobile).toggle(300);
        });
      }
    });
  }


}
$.mlpModule(Slide, 'Slide');