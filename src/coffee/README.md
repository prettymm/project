FE Lab > Coffee Sources
=================

Instructions
-------------

- Do not attach plugins via class/id name, use a standard attribute like data-js-module-name 
```
// jade
a(data-js-module-name).btn-next

// coffee
$('[data-js-module-name]').ModuleName()
```

- Use js- selector names to show that certain elements have JS behaviour attached  
```
// jade
a.js-btn.btn-next

// coffee
$('.js-btn').click ->
  console.log 'Hello world.'
```

- Long functions should be split into bite sizes

[Documentation](https://loweproferotech.atlassian.net/wiki/display/IL/The+JavaScript+Standard)