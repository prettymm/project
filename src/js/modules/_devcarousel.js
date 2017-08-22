class CarouselDev extends MLP.apps.MLPModule {

  defaults() {
    this.defaults = {
      property: 'foo'
    };
  }

  init() {
    this.el = {
      navElem: $('.nav-elem'),
      cSlice: $('.c-slice'),
      conCarousel: $('.c-carousel__container'),
      cCarousel: $('.c-carousel')
    };
    this.sel = {
      acount: 0,
      animation: false,
      active: 'active'
    };
    this.len = this.el.cSlice.length - 1;
    this.animTime = null;
    super.init();
    this.events();
    this.isMobile = false;
    this.checkMobile();
    console.log(this.isMobile);
    this.setDevCarousel();
    $(window).resize(() => {
      this.setDevCarousel();
    });
    this.bindEvent();
    //runTimer 是为了让第一张slice显示5秒后再执行动画。
    this.runTimer = null;
    /*this.runTimer = setTimeout(() => {
        this.autoRun();
    }, 5000);*/
  }

  events() {
    this.clickEvent();
  }

  setDevCarousel() {
    var deviceWidth = $('body').width();
    this.el.cSlice.css('width', parseInt(deviceWidth) + 'px');
    this.el.conCarousel.css('width', (parseInt(deviceWidth) * (this.len+1)) + 'px');
  }

  checkMobile() {
    if(typeof window.ontouchstart === 'function'){
      this.isMobile = true;
    }
  }

  clickEvent() {
    this.el.navElem.on('click', (e) => {
      var deviceWidth = $('body').width();
      var target = $(e.target);
      var current = target.closest(this.el.navElem);

      this.sel.acount = current.attr('index');
      this.el.conCarousel.animate({'left': -parseInt(deviceWidth * this.sel.acount)+'px'}, 500);

      current.siblings().removeClass(this.sel.active);
      current.addClass(this.sel.active);
    });
  }

  bindEvent() {
    let startX = 0;
    let firstX = 0;
    if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
      this.runTimer = setTimeout(() => {
        this.autoRun();
      }, 5000);
      this.el.cCarousel.on('touchstart', (e) => {
        clearTimeout(this.animTime);
        this.animTime = null;
        clearTimeout(this.runTimer);
        this.runTimer = null;
        startX = e.originalEvent.changedTouches[0].clientX;
        firstX = startX;
        this.el.conCarousel.stop(true, true);
      });

      this.el.cCarousel.on('touchmove', (e) => {
        let nowX = e.originalEvent.changedTouches[0].clientX;
        let moveX = nowX - startX;
        let currentLeft = parseFloat(this.el.conCarousel.css('left'));
        let left = currentLeft + moveX;
        if(left >= -(this.el.cCarousel.width() * this.len) && left <= 0){
          this.el.conCarousel.css('left', left+'px');
          startX = nowX;
        }
      });

      this.el.cCarousel.on('touchend', (e) => {
        let nowX = e.originalEvent.changedTouches[0].clientX;
        let move = nowX - firstX;
        if(move > 0){
          this.sel.acount -= 1;
          this.animate(this.sel.acount, () => {
            this.runTimer = null;
            this.runTimer = setTimeout(() => {
              this.autoRun();
            });
          });
        }else{
          this.sel.acount += 1;
          this.animate(this.sel.acount, () => {
            this.runTimer = null;
            this.runTimer = setTimeout(() => {
              this.autoRun();
            }, 2000);
          });
        }
      });

    }
  }

  autoRun() {
    clearTimeout(this.animTime);
    this.animTime = null;
    this.sel.acount++;
    this.animate(this.sel.acount);
    this.animTime = setTimeout(()=>{
      this.autoRun();
    }, 5000);
  }

  animate(inx, callback){
    var deviceWidth = $('body').width();
    if(inx > this.len){
      this.el.conCarousel.css('left', 0);
      inx = 1;
    }

    if(inx < 0){
      this.el.conCarousel.css('left', -parseInt(deviceWidth)*this.len+'px');
      inx = this.len-1;
    }

    this.el.conCarousel.animate({'left': -parseInt(deviceWidth)*inx+'px'}, 500, () => {
      this.sel.animation = false;
      if(typeof callback === 'function'){
        callback();
      }

    });
    this.sel.acount = inx;

  }

}
$.mlpModule(CarouselDev, 'CarouselDev');


