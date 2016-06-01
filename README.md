# noui-slider
### Angular JS range slider

This is an angular implementation of http://refreshless.com/nouislider/
This requires no dependencies and written entirely in angular! ( That means no noUiSlider install or jquery install necessary )

# Install

`bower install angular-ui-slider`

# Add files

```
<link rel="stylesheet" href="bower_components/angular-ui-swiper/dist/angular-ui-swiper.css">
<script src="bower_components/angular-ui-swiper/dist/angular-ui-swiper.js"></script>
```

# Usage
Add the module dependency to your project
`angular.module('app', ['ui.swiper']);`

Sample Usage :
```
<swiper>
  <slides>
    <slide>Slide1</slide>
    <slide>Slide2</slide>
  </slides>
  <prev></prev>
  <next></next>
  <pagination></pagination>
</swiper>
```
See here you added a swiper with pagination and directional buttons.
Within the slide tag you can put **whatever html you want to put in there!**

For more examples you can look at the [demo page](http://nebulr.github.io/ui-swiper).
