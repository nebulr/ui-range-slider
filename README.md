# ui-range-slider
### Angular JS range slider

This is an angular implementation of http://refreshless.com/nouislider/
This requires no dependencies and written entirely in angular! ( That means no noUiSlider install or jquery install necessary )

# Install

`bower install angular-ui-range-slider`

# Add files

```
<link rel="stylesheet" href="bower_components/angular-ui-range-slider/dist/angular-ui-range-slider.css">
<script src="bower_components/angular-ui-range-slider/dist/angular-ui-range-slider.js"></script>
```

# Usage
Add the module dependency to your project
`angular.module('app', ['ui.range.slider']);`

Sample Usage :
```
<script>
$scope.options = {
	start: [ 20, 80 ], // Handle start position
	step: 10, // Slider moves in increments of '10'
	margin: 20, // Handles must be more than '20' apart
	connect: true, // Display a colored bar between the handles
	direction: 'rtl', // Put '0' at the bottom of the slider
	orientation: 'vertical', // Orient the slider vertically
	behaviour: 'tap-drag', // Move handle on tap, bar is draggable
	range: { // Slider can select '0' to '100'
		'min': 0,
		'max': 100
	},
	pips: { // Show a scale with the slider
		mode: 'steps',
		density: 2
	}
};
</script>
<range-slider options="options">
</range-slider>
```

For more examples you can look at the [demo page](http://nebulr.github.io/ui-range-slider).
