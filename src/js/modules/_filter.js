class Filter extends MLP.apps.MLPModule {

  defaults() {
    this.defaults = {
      property: 'foo'
    };
  }

  init() {
    this.el = {
      jsElems: $('.js-elems'),
      filterAll:$('.filter-link.all'),
      filter:$('.filter-link.filter'),
      filterLink:$('.filter-link'),
      taggedElem:$('.tagged-elem')
    };
    this.sel = {
      selected: 'selected'
    };
    super.init();
    this.datas();
    this.events();
  }

  datas() {
    this.setItems();
  }

  events() {
    this.filterEvent();
  }

  setItems() {
    var Obj = {
      "datas":[
        {
          "dataTag":"['Sterile Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Biologics','Sterile Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Biologics','Delivery','Sterile Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Delivery','Oral Technologies','Animal Health']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Development Solutions']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Development Solutions','Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Biologics','Development Solutions','Offering Info']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Biologics']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Biologics']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Article/Whitepaper','Biologics','Brochure','Poster']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Sterile Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Delivery','Development Solutions','Offering Info']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Clinical Supply Services','Supply']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Clinical Supply Services','Supply']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Clinical Supply Services','Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Delivery','Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Development Solutions']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Consumer']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Consumer']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Consumer']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Inhalation']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Development Solutions']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Consumer','Delivery','Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Development Solutions','Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Consumer','Delivery','Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Clinical Supply Services','Supply']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Development Solutions']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Delivery']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Biologics','Clinical Supply Services','Delivery','Inhalation','Sterile Technologies','Supply','Animal Health']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Clinical Supply Services','Supply']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Biologics']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Development Solutions']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Inhalation']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Sterile Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Clinical Supply Services','Supply']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Clinical Supply Services','Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Clinical Supply Services']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Development Solutions']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Development Solutions']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Development Solutions']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Inhalation']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"[]",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Development Solutions']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Delivery','Development Solutions','Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Development Solutions','Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Delivery','Development Solutions','Offering Info','Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Biologics','Delivery','Offering Info','Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Consumer','Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Delivery','Development Solutions','Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Clinical Supply Services','Supply']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Development Solutions']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Sterile Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Article/Whitepaper','Biologics','Brochure','Delivery']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Oral Technologies','Animal Health']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Consumer','Delivery','Offering Info']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Development Solutions']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Sterile Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Development Solutions']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        },{
          "dataTag":"['Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Lock.png",
          "title":"ADVASEPT® Lock",
          "text":" Easily opened and locks to luered syringes for a smooth withdraw "
        },{
          "dataTag":"['Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/advanced-aseptic-processing.png",
          "title":"ADVASEPT® Technology",
          "text":"Advanced aseptic processing providing a glass free solution for parenterals "
        },{
          "dataTag":"['Oral Technologies']",
          "href":"http://www.catalent.com/index.php/delivery/advanced-aseptic-processing/ADVASEPT-R-Lock",
          "img":"assets/img/offerings/ADVASEPT-R-Vial.png",
          "title":"ADVASEPT® Vial",
          "text":"Glass free vials as a proven container closure for biologic products. "
        }
      ]
    };

    var html = '';
    for(var i=0, len=Obj.datas.length; i<len; i++){
      html+='<div class="l-grid__col l-w--tabt-min-33p">'
              +'<div data-tag="'+ Obj.datas[i].dataTag +'" class="tagged-elem show">'
                +'<a href="'+ Obj.datas[i].href +'">'
                  +'<div class="icon-place-holder">'
                    +'<img src="'+ Obj.datas[i].img +'" />'
                  +'</div>'
                  +'<div class="tagged-elem-title">'+ Obj.datas[i].title +'</div>'
                  +'<p>'+ Obj.datas[i].text +'</p>'
                +'</a></div></div>';
    }

    this.el.jsElems.append(html);
  }

  containTag(_id, _array) {
    for(var i=0, len=_array.length; i<len; i++){
      var a=_array[i];
      if(_id === a){
        return true;
      }
      return false;
    }
  }

  filterTags() {
    var tagged = $('.tagged-elem');
    tagged.removeClass('show');
    var acountItems = [];
    if(this.el.filterAll.hasClass('selected')){
      for(var i=0, len=tagged.length; i<len; i++){
        tagged.eq(i).addClass('show');
      }
    }else{
      for(var i=0, len=tagged.length; i<len; i++){
        var elem = tagged.eq(i);
        var sele = $('.filter-link.filter.selected');
        for(var k=0, lens=sele.length; k<lens; k++){
          var tag_id = sele.eq(k).attr('data-tag');
          var tag = eval(elem.attr('data-tag')); 
          if(this.containTag(tag_id, tag)){
            acountItems.push(elem);
            break;
          }
        }
      }
    }

    for(var key in acountItems){
      acountItems[key].addClass('show');
    }
  }

  filterEvent() {
    var _this = this;
    this.el.filterAll.on("click", function(){
      _this.el.filterLink.removeClass('selected');
      $(this).addClass('selected');
      _this.filterTags();
    });

    this.el.filter.on("click", function(){
      $(this).toggleClass('selected');
      _this.el.filterAll.removeClass('selected');
      if($('.filter-link.filter.selected').get().length === 0){
        _this.el.filterAll.click();
      }
      _this.filterTags();
    });
  }

  

}
$.mlpModule(Filter, 'Filter');


