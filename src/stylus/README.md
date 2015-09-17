FE Lab > Stylus Sources
=================

Instructions
-------------

- Namespace class/id names with appropriate namespace prefix: .c-, .ic-, .l-, .txt 
- Beware heavy nesting and/or long definitions where it requires excessive scrolling to realise the context parent class/id
- Do not tightly couple styles based on location, code the css in terms of components. What do we mean by components? See here, (example only): [Ionic](http://ionicframework.com/docs/components/)
- Document the stylus files so styleguide can be generated

[Documentation](https://loweproferotech.atlassian.net/wiki/display/IL/The+Stylus+Standard)

Internet Explorer
-------------
- Handle IE8 supported projects through the _ie.styl/mixin, example:
```
.c-carousel
  display inline-block
  +ie(8)
    display inline  // This will only appear in app-ie.css file
```