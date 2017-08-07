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
      homepageCarousel: $('.homepage-carousel')
    };
    this.sel = {
      acount: 0,
      animation: false,
      isMobile: true
    };
    this.len = this.el.slice.length - 1;
    super.init();
    this.events();
    this.setCarousel();
    this.animTime;
    this.timer = null;
    /*$(window).resize(() => {
      clearTimeout(this.timer);
      this.timer = null;
      this.timer = setTimeout(function(){
        this.setCarousel();
      }, 100);
    });*/
    $(window).resize(() => {
      this.setCarousel();
    });
  }

  setCarousel() {
    var deviceWidth = $('body').width();
    var parent = deviceWidth * this.el.slice.length;
    this.el.topCarousel.css('width', parent + 'px');
    this.el.slice.css('width', deviceWidth + 'px');
  }

  events() {
    this.btnPrevEvents();
    this.btnNextEvents();
    this.autoPlay();
    this.mouseoverEvent();
    this.mouseoutEvent();
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

  animate() {
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
      this.autoPlay();

    }, 5000);
  }

  mouseoverEvent() {
    this.el.homepageCarousel.on('mouseover', () => {
      console.log('mouseover', this.animTime);
      clearTimeout(this.animTime);
    });
  }

  mouseoutEvent() {
    this.el.homepageCarousel.on('mouseout', () => {
      console.log('mouseout');
      this.autoPlay();
    });
  }

  











}
$.mlpModule(Carousel, 'Carousel');