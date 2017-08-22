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


}
$.mlpModule(Slide, 'Slide');