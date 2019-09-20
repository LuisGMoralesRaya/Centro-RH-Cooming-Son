require('normalize.css/normalize.css');
require('./styles/index.scss');
import jquery from 'jquery';

var elem = document.getElementById("bar");
var width = 1;
var id = setInterval(frame, 20);

function frame() {
    if (width >= 90) {
        clearInterval(id);
    } else {
        width++;
        elem.style.width = width + '%';
    }
}
jquery(() => {
    console.log('Hello jQuery + bootstrap 4!');
});