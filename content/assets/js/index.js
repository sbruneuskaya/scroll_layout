let zSpacing = -1000;
let lastPost = zSpacing / 5;
$frames = document.getElementsByClassName('frame');
let frame = Array.from($frames);
let zValues = [];

window.onscroll = function () {
    let top = document.documentElement.scrollTop;
    let delta = lastPost - top;
    lastPost = top

    frame.forEach(function (el, index) {
        zValues.push((index * zSpacing) + zSpacing)
        zValues[index] += delta * -5
        let frameVal = frame[index];
        let transform = `translateZ(${zValues[index]}px)`;
        let opacity = zValues[index] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frameVal.setAttribute('style', `transform: ${transform}; opacity: ${opacity} `)

    })
}

window.scrollTo(0, 1)