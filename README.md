# jQuery-color-picker

This library implements a color picker input box that lets users choose colors from a predefined palette or enter custom color values.

## Installation

Import directly in html file.

``` html
<!-- HTML -->

<link href="path/jQuery-color-picker/color-picker.css" rel="stylesheet">
<script src="path/jQuery-color-picker/color-picker.js"></script>
```

## Usage

### Library settings

``` bash
# Edit default style
vi path/jQuery-color-picker/color-picker.css

# Edit default setting
vi path/jQuery-color-picker/color-picker.js
```

### How to use

``` html
<!-- HTML -->

<!-- Add data attribute "WKCP" to your input elements -->
<input type="text" name="color" data-picker="WKCP" />
```

``` javascript
<!-- JavaScript -->

// Initialize color picker for container
$('.container').WKCP_init();

// Or initialize individual elements
$('input[data-picker="WKCP"]').WKCP();
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
