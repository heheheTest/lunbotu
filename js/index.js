window.addEventListener('load', function() {
    var btn_r = document.querySelector('.btn_r');
    var btn_l = document.querySelector('.btn_l');
    var box = document.querySelector('.box');
    var ol = document.querySelector('ol');
    var ul = document.querySelector('ul');
    box.addEventListener('mouseover', function() {
        btn_r.style.display = 'block';
        btn_l.style.display = 'block';
        clearInterval(time);
    });
    box.addEventListener('mouseout', function() {
        btn_r.style.display = 'none';
        btn_l.style.display = 'none';
        time = setInterval(function() {
            btn_r.click();
        }, 2000);
    });
    //ol里面的小点
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.append(li);

        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }

            this.className = 'current';

            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * box.offsetWidth);
        });

    }
    ol.children[0].className = 'current';
    // 克隆第一张
    var firstimg = ul.children[0].cloneNode(true);
    ul.append(firstimg);



    var num = 0;
    var circle = 0;
    var flag = true;


    btn_r.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                num = 0;
                ul.style.left = 0;
            }
            num++;
            animate(ul, -num * box.offsetWidth, function() {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            bgcircle();
        }
    });


    btn_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * box.offsetWidth + 'px';
            }
            num--;
            animate(ul, -num * box.offsetWidth, function() {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            bgcircle();
        }
    });

    function bgcircle() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }

    var time = setInterval(function() {
        btn_r.click();
    }, 2000);

})