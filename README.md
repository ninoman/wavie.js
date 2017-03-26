We call it

# Wavie.js

### Make your own canvas tags with this easy to use JavaScript library. 

------------------------------
### `Make your own`

<a href="https://ninoman.github.io/wavie.js/" target="_blank"><img src="https://rawgit.com/ninoman/ninoman.github.io/master/wavie.js/wavie.screenshot.png" alt="Wavie JS" /></a>



-------------------------------
### `Usage`

How we say, it's very easy to use WavieJS in your project

Download wavie.js library and add it to your project
Load wavie.js in your

**index.html**
```html
<script src="wavie.js"></script>
```

Download your own config from [Wavie JS](https://waviejs.github.io "Wavie JS")
Run wavie function

**app.js**
```javascript
wavie('yourCanvasTagId', 'yourConfig.json');
```

You even can do this

**app.js**
```javascript
wavie(yourCanvasDOM, configObject);
```

This is how your config file will look like

**wavie.json**
```javascript
{
    "ballSize": 1,
    "speed": 1,
    "phaseRefX": 0.12,
    "phaseRefY": 0.12,
    "radiusX": 15,
    "radiusY": 15,
    "densityX": 6,
    "densityY": 6,
    "backgroundFrom":"#1e174a",
    "backgroundTo":"#000000",
    "degree":62,
    "ballColor": "#837ea2"
}
```

Hey you can also use our CDN

```html
<script src="https://rawgit.com/ninoman/wavie.js/master/wavie.min.js"></script>
```
-------------------------------



