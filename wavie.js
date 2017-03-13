function wavie(canvas, config) {

    if (typeof canvas == 'string') {
        canvas = document.getElementById(canvas);
    }

    var t = 0;

    var devicePixelRatio = Math.max(window.devicePixelRatio,2);
    canvas.width = devicePixelRatio * canvas.offsetWidth;
    canvas.height = devicePixelRatio * canvas.offsetHeight;

    context = canvas.getContext('2d');
    context.scale(devicePixelRatio, devicePixelRatio);

    if (typeof config == 'string') {
        getJSON(config, function (err, jsonConfig) {
            if (err) {
                console.log(err);
            }
            if (!jsonConfig) {
                console.log("Empty config");
            }
            config = jsonConfig;
            requestAnimationFrame(render);
        })
    } else {
        requestAnimationFrame(render);
    }


    function render() {

        canvas.style.background = 'linear-gradient(%1deg, %2, %3)'
            .replace('%1', config.degree)
            .replace('%2', config.backgroundFrom)
            .replace('%3', config.backgroundTo);
        context.clearRect(0, 0, canvas.width, canvas.height);
        var padding = 0.25;
        var timeStep = 0.006;

        var stepX = 100 / config.densityX;
        var stepY = 100 / config.densityY;

        var ballsNumX = (1 + padding) * canvas.width / stepX;
        var ballsNumY = (1 + padding) * canvas.height / stepY;

        var offsetX = -canvas.width / 2 * padding;
        var offsetY = -canvas.height / 2 * padding;

        for (var i = 0; i < ballsNumY; ++i) {
            for (var j = 0; j < ballsNumX; ++j) {

                var centerX = stepX * j + offsetX;
                var centerY = stepY * i + offsetY;
                var phase = Math.PI * (config.phaseRefY * i + config.phaseRefX * j + t);

                var positionX = centerX + config.radiusX * Math.sin(phase);
                var positionY = centerY + config.radiusY * Math.cos(phase);

                context.beginPath();
                context.arc(positionX, positionY, config.ballSize, 0, 2 * Math.PI, false);
                context.fillStyle = config.ballColor;
                context.fill();
            }
        }

        t += timeStep * config.speed;

        requestAnimationFrame(render);
    }

    function getJSON(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("get", url, true);
        xhr.responseType = "json";
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) {
                callback(null, xhr.response);
            } else {
                callback(status);
            }
        };
        xhr.send();
    };
};
