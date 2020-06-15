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
    // some options...
  };
  $.toctoc(options);
});
```

## Change the content
```javascript
var options = {
  minimized: true,
  target: 'body'
}
```

| Option        | Description                                            | Type                       |
|---------------|--------------------------------------------------------|----------------------------|
| **minimized** | Define if the table of contents is open or not         | **Boolean**                |
| **target**    | Define in which container titles tag should be crawled | **String** - CSS selector  |


## Change the style
```javascript
var options = {
  headBackgroundColor: '#1c1c1c',
  headTextColor: '#fff',
  headLinkColor: 'lightBlue',
  bodyBackgroundColor: '#f5f5f5',   
  bodyLinkColor: '#000',
  borderWidth: '2px',
  borderColor: '#000',
  borderStyle: 'solid'
}
```

| Option                  | Description                                                  | Type                              |
|-------------------------|--------------------------------------------------------------|-----------------------------------|
| **headBackgroundColor** | This is the background color of the table of contents header | **String** - color (hexa, rgb...) |
| **headTextColor**       | This is the text color of the table of contents header       | **String** - color (hexa, rgb...) |
| **headLinkColor**       | This is the link color of the table of contents header       | **String** - color (hexa, rgb...) |
| **bodyBackgroundColor** | This is the background color of the table of contents body   | **String** - color (hexa, rgb...) |
| **bodyLinkColor**       | This is the links color of the table of contents body        | **String** - color (hexa, rgb...) |
| **borderStyle**         | This is the border style of the table of contents container  | **String** - color (hexa, rgb...) |
| **borderColor**         | This is the border color of the table of contents container  | **String** - color (hexa, rgb...) |
| **borderWidth**         | This is the border width of the table of contents container  | **String** - color (hexa, rgb...) |


## Change the content
```javascript
var options = {
  headText: 'Table of contents',
  headLinkText: ['show', 'hide']
}
```

| Option           | Description                                                                 | Type                     |
|------------------|-----------------------------------------------------------------------------|--------------------------|
| **headText**     | This is the text of the table of contents header                            | **String**               |
| **headLinkText** | This is the link text of the table of contents header (to show and hide it) | **Array** (of 2 strings) |


## 👀 Demo
You can download [here](https://github.com/ThibaudArros/toctoc/blob/master/toctoc.html) a demo of this plugin.
