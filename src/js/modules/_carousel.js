class Carousel extends MLP.apps.MLPModule {

  defaults() {
    this.defaults = {
      property: 'foo'
    };
  }

  init() {
    this.el = {
      btnPrev: $('.btn-prev'),
      btnNext: $('.btn-next'),
      slice: $('.slice'),
      topCarousel: $('.top-carousel'),
      dot: $('.dot'),
      homepageCarousel: $('.homepage-carousel'),
      homepage: $('.homepage')
    };
    this.sel = {
      acount: 0,
      animation: false
    };
    this.len = this.el.slice.length - 1;
    super.init();
    this.events();
    this.setCarousel();
    this.animTime;
    this.autoTimer = null;
    this.timer = null;
    this.isMobile = true;
    this.runAgain = null;
    this.runAgain = setTimeout(() => {
      this.autoRun();
    }, 2000);

    this.checkMobile();
    this.mobileTouchEvents();
    /*$(window).resize(() => {
      clearTimeout(this.timer);
      this.timer = null;
      this.timer = setTimeout(function(){
        this.setCarousel();
      }, 100);

      clearTimeout(this.animTime);
      this.animTime = null;
      console.log('go on');
    });*/
    $(window).resize(() => {
      this.setCarousel();
      console.log('go on');
    });
  }

  setCarousel() {
    var deviceWidth = $('body').width();
    var parent = deviceWidth * this.el.slice.length;
    this.el.topCarousel.css({'width': parent + 'px', 'left': -parseInt(deviceWidth*this.len)+'px'});
    this.el.slice.css('width', deviceWidth + 'px');
  }

  events() {
    this.btnPrevEvents();
    this.btnNextEvents();
  }

  checkMobile() {
    if (typeof window.ontouchstart === "undefined") {
      this.isMobile = false;
    }
  }

  btnPrevEvents() {
    this.el.btnPrev.on('click', () => {
      if(!this.sel.animation){
        this.sel.animation = true;
        this.sel.acount--;
        this.animate();
      }
      /*if(_this.sel.acount===0){
        _this.el.topCarousel.css({'left':'-'+parseInt(deviceWidth * (_this.el.slice.length-1))+'px'},500);
        _this.sel.acount = _this.el.slice.length-1;
      }
      _this.sel.acount--;
      _this.el.topCarousel.animate({'left':"-"+ _this.sel.acount*deviceWidth +'px'},500);*/
      this.el.dot.removeClass('active');
      this.el.dot.eq(this.sel.acount).addClass('active');
    });
  }

  btnNextEvents() {
    this.el.btnNext.on('click', () => {
      if (!this.sel.animation){
        this.sel.animation = true;
        this.sel.acount++;
        this.animate();
      }
     
     /* if(_this.sel.acount===_this.el.slice.length-1){
        _this.el.topCarousel.css({'left':0});
        _this.sel.acount = 0;
      }
      _this.sel.acount++;
      _this.el.topCarousel.animate({'left':"-"+ _this.sel.acount*deviceWidth +"px"},500);*/
      
      this.el.dot.removeClass('active');
      this.el.dot.eq(this.sel.acount===3?0:this.sel.acount).addClass('active');
    });
  }

  autoRun() {
    clearTimeout(this.animTime);
    this.animTime = null;
    this.sel.acount++;
    this.animate();
    this.animTime = setTimeout(() => {
      this.autoRun();
    }, 5000);
    this.el.dot.removeClass('active');
    this.el.dot.eq(this.sel.acount===3?0:this.sel.acount).addClass('active');
  }

  animate(callback) {
    var deviceWidth = $('body').width();
    if(this.sel.acount>this.el.slice.length-1){
      this.el.topCarousel.css('left', 0);
      this.sel.acount = 1;
    }

    if(this.sel.acount<0){
      this.el.topCarousel.css('left', -parseInt(deviceWidth*this.len)+'px');
      this.sel.acount = this.len-1;
    }

    this.el.topCarousel.animate({'left': -parseInt(deviceWidth * this.sel.acount)+'px'}, 500, () => {
      this.sel.animation = false;
      if(typeof callback === "function"){
        callback();
      }
    });
  }

  autoPlay() {
    this.animTime = setTimeout(() => {
      if (!this.sel.animation){
        this.sel.animation = true;
        this.sel.acount++;
        this.animate();
      }
      this.el.dot.removeClass('active');
      this.el.dot.eq(this.sel.acount===3?0:this.sel.acount).addClass('active');

    }, 5000);
  }

  

  mobileTouchEvents() {
    let startX = 0;
    let firstX = 0;
    if(!this.isMobile){
      this.el.homepageCarousel.on('mouseover', () => {
        clearTimeout(this.animTime);
        this.animTime = null;
        clearTimeout(this.runAgain);
        this.runAgain = null;
      });

      this.el.homepageCarousel.on('mouseout', () => {
        clearTimeout(this.runAgain);
        this.runAgain = null;
        this.runAgain = setTimeout(() => {
          this.autoRun();
        }, 5000);
      });
    }else{
      this.el.homepageCarousel.on('touchstart', (e) => {
        clearTimeout(this.animTime);
        this.animTime = null;
        clearTimeout(this.runAgain);
        this.runAgain = null;
        startX = e.originalEvent.changedTouches[0].clientX;
        firstX = startX;
        this.el.topCarousel.stop(true, true);
      });

      this.el.homepageCarousel.on('touchmove', (e) => {
        let nowX = e.originalEvent.changedTouches[0].clientX;
        let moveX = nowX - startX;
        let currentLeft = parseFloat(this.el.topCarousel.css("left"));
        let left = currentLeft + moveX;
        if (left >= -(this.el.slice.width() * this.len) && left <= 0) {
          this.el.topCarousel.css('left', left + "px");
          startX = nowX;
        }
      });

      this.el.homepageCarousel.on('touchend', (e) => {
        let nowX = e.originalEvent.changedTouches[0].clientX;
        let move = nowX - firstX;
        if (move > 0) {
          this.sel.acount -= 1;
          this.animate(() => {
            this.runAgain = null;
            this.runAgain = setTimeout(() => {
              this.autoRun();
            }, 2000);
          });
          this.el.dot.removeClass('active');
          this.el.dot.eq(this.sel.acount===3?0:this.sel.acount).addClass('active');
        } else {
          this.sel.acount += 1;
          this.animate(() => {
            this.runAgain = null;
            this.runAgain = setTimeout(() => {
              this.autoRun();
            }, 2000);
          });
          this.el.dot.removeClass('active');
          this.el.dot.eq(this.sel.acount===3?0:this.sel.acount).addClass('active');
        }
      });
    }
  }

}
$.mlpModule(Carousel, 'Carousel');