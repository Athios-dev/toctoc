# Toctoc
👉 A jQuery plugin to automatically add a table of contents on a web page.<br>
🚀 It only weighs 4Ko! 

## 🤔 About

### Tools
🐙 Github 💻 VS Code 🧰 jQuery

### Languages
🟠 HTML 🔵 CSS 🟡 JavaScript

## 📥 Getting started

### Prerequisites
Get the latest version of jQuery on [jquery.com](https://code.jquery.com).

### Installation
Download the following files:
 * [toctoc.css](https://github.com/ThibaudArros/toctoc/blob/master/toctoc.css)
 * [toctoc.js](https://github.com/ThibaudArros/toctoc/blob/master/toctoc.js)

## 📑 Usage

### Includes

#### Styles
```html
<link rel="stylesheet" href="path-to/toctoc.css">
```

#### Scripts
```html
<!-- Inside the <head> -->
<script src="path-to/jquery.js"></script>
<!-- At the end of the <body> -->
<script src="path-to/toctoc.js"></script>
```

### Call the plugin
```javascript
$(document).ready(function() {
    $.toctoc();
});
```

## ⚙️ Options
You can also pass some informations to the plugin.
```javascript
$(document).ready(function() {
    var options = {
        // Some options...
    };
    $.toctoc(options);
});
```

### Global
```javascript
var options = {
    minimized: false,
    target: '#article'
}
```

| Option        | Description                                            | Type                                                                             | Default  |
|---------------|--------------------------------------------------------|----------------------------------------------------------------------------------|----------|
| **minimized** | Define if the table of contents is open or not         | **Boolean**                                                                      | *true*   |
| **target**    | Define in which container titles tag should be crawled | **String** - [CSS selector](https://www.w3schools.com/cssref/css_selectors.asp)  | *"body"* |

### Style
```javascript
var options = {
    headBackgroundColor: '#e7e7e7',
    headTextColor: '#000',
    headLinkColor: '#2ecc71',
    bodyBackgroundColor: '#f5f5f5',   
    bodyLinkColor: '#f07915',
    borderWidth: '5px',
    borderColor: '#2ecc71',
    borderStyle: 'dashed'
}
```

| Option                  | Description                                                  | Type                                                                                | Default     |
|-------------------------|--------------------------------------------------------------|-------------------------------------------------------------------------------------|-------------|
| **headBackgroundColor** | This is the background color of the table of contents header | **String** - [CSS color](https://www.w3schools.com/colors/default.asp)              | *"#1c1c1c"* |
| **headTextColor**       | This is the text color of the table of contents header       | **String** - [CSS color](https://www.w3schools.com/colors/default.asp)              | *"#fff"*    |
| **headLinkColor**       | This is the link color of the table of contents header       | **String** - [CSS color](https://www.w3schools.com/colors/default.asp)              | *"#add8e6"* |
| **bodyBackgroundColor** | This is the background color of the table of contents body   | **String** - [CSS color](https://www.w3schools.com/colors/default.asp)              | *"#f5f5f5"* |
| **bodyLinkColor**       | This is the links color of the table of contents body        | **String** - [CSS color](https://www.w3schools.com/colors/default.asp)              | *"#000"*    |
| **borderStyle**         | This is the border style of the table of contents container  | **String** - [CSS border-style](https://www.w3schools.com/css/css_border_sides.asp) | *"solid"*   |
| **borderColor**         | This is the border color of the table of contents container  | **String** - [CSS border-color](https://www.w3schools.com/css/css_border_color.asp) | *"#000"*    |
| **borderWidth**         | This is the border width of the table of contents container  | **String** - [CSS border-width](https://www.w3schools.com/css/css_border_sides.asp) | *"2px"*     |

### Content
```javascript
var options = {
    headText: 'My title',
    headLinkText: ['open', 'close']
}
```

| Option           | Description                                                                 | Type                     | Default               |
|------------------|-----------------------------------------------------------------------------|--------------------------|-----------------------|
| **headText**     | This is the text of the table of contents header                            | **String**               | *"Table of contents"* |
| **headLinkText** | This is the link text of the table of contents header (to show and hide it) | **Array** (of 2 strings) | *["show", "hide"]*    |

## 👀 Demo
You can see [here](https://thibaudarros.github.io/toctoc/demo.html) a demo of this plugin.

***
**Made with 💛 by [Thibaud d'Arros](https://github.com/ThibaudArros)**
