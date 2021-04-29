# toctoc
A jQuery plugin to automatically add a table of contents on a website page. It only weighs 4Ko! 

## 📥 Getting started
Download [toctoc.js](https://github.com/ThibaudArros/toctoc/blob/master/toctoc.js) (3Ko) and [toctoc.css](https://github.com/ThibaudArros/toctoc/blob/master/toctoc.css) (1Ko).

## 📑 Usage
### Include jQuery
Get the latest version of jQuery on [jquery.com](https://code.jquery.com).

### Include toctoc.css and toctoc.js
```html
<link rel="stylesheet" href="toctoc.css">
<script src="toctoc.js"></script>
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

## Global settings
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


## Change the style
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


## Change the content
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
You can download [here](https://thibaudarros.github.io/toctoc/demo.html) a demo of this plugin.
