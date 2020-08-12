(function() {
    import $ from 'jquery';

    function TurnPage(options, wrap) {
        this.nowPage = options.nowPage || 1;
        this.allPage = options.allPage || 1;
        this.changePage = options.changePage || function() {};
        this.wrap = wrap || 'body';
        this.init = function() {
            this.fillPage();
            this.bindEvent();
        }
    }

    TurnPage.prototype.fillPage = function() {
        var pageUl = $('<ul class="page-ul"></ul>');
        //添加上一页node
        if (this.nowPage > 1) {
            $('<li class="prev-page">上一页</li>').appendTo(pageUl);
        }

        //添加第一页
        $('<li class="num">1</li>').appendTo(pageUl).addClass(1 === this.nowPage ? 'current' : '');

        //添加省略号node
        if (this.nowPage - 2 > 2) {
            $("<span>...</span>").appendTo(pageUl);
        }

        //添加中间5页node
        for (var i = this.nowPage - 2; i <= this.nowPage + 2; i++) {
            if (i > 1 && i < this.allPage) {
                $('<li class="num"></li>').text(i).appendTo(pageUl).addClass(i === this.nowPage ? 'current' : '');
            }
        }

        //添加省略号node
        if (this.nowPage + 2 < this.allPage - 1) {
            $("<span>...</span>").appendTo(pageUl);
        }

        //添加最后一页
        this.nowPage != 1 && $('<li class="num"></li>').text(this.allPage).appendTo(pageUl).addClass(this.allPage === this.nowPage ? 'current' : '');
        //添加下一页node
        if (this.nowPage < this.allPage) {
            $('<li class="next-page">下一页</li>').appendTo(pageUl);
        }
        this.wrap.html(pageUl);

    }

    TurnPage.prototype.bindEvent = function() {
        var self = this;
        //上一页的事件
        $(".prev-page", this.wrap).click(function() {
            self.nowPage--;
            self.init();
            self.changePage(self.nowPage);
        })

        //下一页的事件
        $(".next-page", this.wrap).click(function() {
            self.nowPage++;
            self.init();
            self.changePage(self.nowPage);
        })

        //li上的事件
        $(".num", this.wrap).click(function() {
            self.nowPage = parseInt($(this).text());
            self.init();
            self.changePage(self.nowPage);
        })
    }


    $.fn.extend({
        turnPage: function(options) {
            var obj = new TurnPage(options, this);
            obj.init();
        }
    })
})()