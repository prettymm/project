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
      catalent: $('.catalent'),
      homepage: $('.homepage'),
      development: $('.development')
    };
    this.sel = {
      sideActive: "side-active",
      active: "active-l-80",
      activedb: "active-d-b",
      sidebarSearchChangebg:"sidebar-search-changebg"
    };
    super.init();
    this.events();
  }

  events() {
    this.languageEvents();
    this.dropDownEvents();
    this.bodyEvents();
    this.navbarEvents();
    this.scrollEvents();
    this.jumpToLandingPage();
  }

  languageEvents() {
    this.el.languageGlobal.click(() => this.el.languageDiv.toggle(500));
    this.el.langClose.click(() => this.el.languageDiv.hide(500));
  }

  dropDownEvents() {
    var _this =this;
    this.el.arrowDown.click(function() {
      $(this).next().show(500);
      $(this).parent().siblings().find(_this.el.dropDown).hide(500);
    });
  }

  bodyEvents() {
    var dropDown = $('.drop-down');
    $('body').on('click', (e) => {
      var target = $(e.target);
      var dropDownEle = target.closest('.drop-down');
      var arrowDown = target.closest('.arrow-down');
      if(!dropDownEle.length && !arrowDown.length){
        dropDown.hide(500);
      }
    });
  }

  navbarEvents() {
    var _this= this;
    this.el.sidebarDisplay.on("click", () => {
      this.el.catalent.toggleClass(this.sel.sideActive);
      this.el.navbarMobile.toggleClass(this.sel.active);
      this.el.homepage.toggleClass(this.sel.active);
      this.el.development.toggleClass(this.sel.active);
    });

    this.el.sidebarSearch.on("click", () => {
      $(this).toggleClass(this.sel.sidebarSearchChangebg);
      this.el.form.toggleClass(this.sel.activedb);
      this.el.searchText.focus();
    });

    $('.nav-menu-mobile a').each(function() {
      if($(this).next(_this.el.dropDownMobile).length){
        $(this).on('click', (e) => {
          e.stopPropagation();
          e.preventDefault();
          $(this).next(_this.el.dropDownMobile).toggle(300);
        });
      }
    });
  }

  scrollEvents(){
    $('.menu_fliter_false a').on('click', function(e){
      var type = $(this).parents('.menu_fliter_false').attr('data-type');
      if($('.'+type+ " .menu_fliter_false-scroll").length){
        e.preventDefault();
        $('.drop-down').hide();
        var ltype = $(this).text().toLowerCase().replace(/\s/g,'');
        $('.filter-link').each(function(){
          var ltype2 = $(this).text().toLowerCase().replace(/\s/g,'');
          if(ltype === ltype2){
            if(!$(this).hasClass('selected')){
              $(this).trigger('click');
            }
            $('html, body').animate({
              scrollTop: $(".menu_fliter_false-scroll").offset().top
            }, 500);
          }
        });

      }
    });
  }

  getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  jumpToLandingPage() {
    var type = this.getParameterByName('type');
    if(type){
      var ltype = type.toLowerCase().replace(/\s/g,'');
      $('.filter-block .filter-link').each(function(){
        var ltype2 = $(this).text().toLowerCase().replace(/\s/g,'');
        if(ltype ==ltype2){
          $(this).trigger('click');
          $('html, body').animate({
            scrollTop: $(".menu_fliter_false-scroll").offset().top
          }, 500);
        }
      });
    }
  }

}
$.mlpModule(Slide, 'Slide');