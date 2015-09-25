FE Lab > JS Sources
=================

Instructions
-------------

- Do not attach behaviours via class/id name, use a standard attribute like data-js-plugin-name
```
// jade
a(data-js-plugin-name).btn-next

// js
$('[data-js-plugin-name]').trigger('click');
```
- Long functions should be split into bite sizes

[Documentation](https://loweproferotech.atlassian.net/wiki/display/IL/The+JavaScript+Standard)