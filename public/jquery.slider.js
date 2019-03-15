(function(global,fn){
    if(typeof module === 'object' && typeof module.exports ==='object'){
        module.exports = fn(require('jquery'));
    } else{
        fn(global.jQuery)
    }
})(window,function($){
    $.fn.extend({
        newSlider:function(){
            $('.slider').append(`
                <ul class="list">
                    <li class="l"><a href="#1"><img src="/images/img(1).jpg" alt=""></a></li>
                    <li class="l"><a href="#2"><img src="/images/img(2).jpg" alt=""></a></li>
                    <li class="l"><a href="#3"><img src="/images/img(3).jpg" alt=""></a></li>
                    <li class="l"><a href="#4"><img src="/images/img(4).jpg" alt=""></a></li>
                    <li class="l"><a href="#1"><img src="/images/img(1).jpg" alt=""></a></li>
                </ul>
                <div class="btn-group">
                    <div class="btn prev"><</div>
                    <div class="btn next">></div>
                </div>
                <ul class="pagination">
                    <li class="focus"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>`)
            var liWidth;
        var current = 0;
        var len = document.querySelectorAll('.list li').length;
        var lens = document.querySelectorAll('.pagination li').length;
        var lists = document.querySelectorAll('.pagination li');
        window.onload = function () {
            liWidth = document.querySelector('.list li').offsetWidth;
            document.querySelector('.list').style.width = liWidth * len + 'px';
        }
        function slideTo(index) {
            var list = document.querySelector('.list');
            document.querySelector('.pagination .focus').className = "";
            if(index < 0){
                lists[3].className = "focus";
            } else if(index === lens){
                lists[0].className = "focus";
            } else if(index === 5){
                lists[1].className = "focus";
            }else{
                lists[index].className = "focus";
            }
            
            if(index === len) {
                list.style.transitionDuration = '0s';
                list.style.left = 0;
                setTimeout(function () {
                    list.style.transitionDuration = '';
                    current = index = 1;
                    list.style.left = -1 * index * liWidth + 'px';
                }, 50);
                

                return;
            }
            if(index < 0) {
                list.style.transitionDuration = '0s';
                list.style.left = -1 * len * liWidth +'px';
                setTimeout(function () {
                    list.style.transitionDuration = '';
                    current = index = len-2;
                    list.style.left = -1 * index* liWidth + 'px';
                }, 50);
                

                return;
            }


            list.style.left = -1 * index * liWidth + 'px';
            

        }

        function slideNext() {
            current++;
            slideTo(current);
        }

        document.querySelector('.next').onclick = function () {
            slideNext();
        }

        function slidePrev() {
            current--;
            slideTo(current);
        }

        document.querySelector('.prev').onclick = function () {
            slidePrev();
        }

        for(var i=0; i<lens; i++) {
            lists[i].index = i;
            lists[i].onclick = function () {
                current = this.index;
                slideTo(current);
            }
        }

        var id;
        function auto() {
            clearInterval(id);
            id = setInterval(slideNext, 1000);
        }

        auto();

        function stop() {
            clearInterval(id);
        }

        document.querySelector('.slider').onmouseover = function () {
            stop();
        }

        document.querySelector('.slider').onmouseout = function () {
            auto();
        }

            return this;
        }
    })
})