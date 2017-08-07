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
      dot: $('.dot')
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

    /*var timer = null;
    $(window).resize(() => {
      clearTimeout(timer);
      timer = null;
      timer = setTimeout(function(){
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
  }



  btnPrevEvents() {
    var _this = this;
    var deviceWidth = $('body').width();
    this.el.btnPrev.on('click', function(){
      if(!_this.sel.animation){
        _this.sel.animation = true;
        _this.sel.acount--;
        _this.animate();
      }
      /*if(_this.sel.acount===0){
        _this.el.topCarousel.css({'left':'-'+parseInt(deviceWidth * (_this.el.slice.length-1))+'px'},500);
        _this.sel.acount = _this.el.slice.length-1;
      }
      _this.sel.acount--;
      _this.el.topCarousel.animate({'left':"-"+ _this.sel.acount*deviceWidth +'px'},500);*/
      var ac = _this.sel.acount;
      _this.el.dot.removeClass('active');
      _this.el.dot.eq(_this.sel.acount).addClass('active');
    });
  }

  btnNextEvents() {
    var _this = this;
    var deviceWidth = $('body').width();
    this.el.btnNext.on('click', function(){
      if (!_this.sel.animation){
        _this.sel.animation = true;
        _this.sel.acount++;
        _this.animate();
      }
     
     /* if(_this.sel.acount===_this.el.slice.length-1){
        _this.el.topCarousel.css({'left':0});
        _this.sel.acount = 0;
      }
      _this.sel.acount++;
      _this.el.topCarousel.animate({'left':"-"+ _this.sel.acount*deviceWidth +"px"},500);*/
      
      var acount = _this.sel.acount;
      if(acount===3){
        acount=0;
      }
      _this.el.dot.removeClass('active');
      _this.el.dot.eq(acount).addClass('active');
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

    /*this.el.dot.removeClass('active');
    this.el.dot.eq(this.sel.acount).addClass('active');
    console.log(this.sel.acount);*/

    /*if(inx<0){
      this.el.topCarousel.css('left', '-' + parseInt(deviceWidth*this.sel.acount)+'px');
    }*/
  }

  autoPlay() {
    var _this = this;
    var deviceWidth = $('body').width();
    var animTime = setTimeout(function(){
      if (!_this.sel.animation){
        _this.sel.animation = true;
        _this.sel.acount++;
        _this.animate();
      }
      var acount = _this.sel.acount;
      if(acount===3){
        acount=0;
      }
      _this.el.dot.removeClass('active');
      _this.el.dot.eq(acount).addClass('active');
      _this.autoPlay();
    },5000);
  }











}
$.mlpModule(Carousel, 'Carousel');