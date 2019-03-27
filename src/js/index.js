//吸顶效果
window.onload = function () {
    var nav = document.getElementById("nav");
    window.onscroll = function (e) {
        var e = e || event;
        var h = document.body.scrollTop || document.documentElement.scrollTop;
        if (h > 150) {
            nav.style.position = "fixed"
            nav.style.top = 0;
        } else {
            nav.style.position = "static";
        }
    }
    //轮播图
    var index = 0;
    var timer
    $(function () {
        timer = setInterval(auto, 1500);

        function auto() {
            index++;
            if (index == $("ol li").size()) {
                index = 0;
            }
            $("ol li").eq(index).addClass("current").siblings().removeClass("current");
            $(".imgs li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
        }

        //鼠标 操作
        $("ol li").mouseenter(function () {
            clearInterval(timer);
            index = $(this).index() - 1;
            auto();
        })
        $("ol li").mouseout(function () {
            timer = setInterval(auto, 1500);
        })

        $("#left").click(function () {
            index -= 2;
            auto();
            if (index == -1) {
                index = 6
            }
            //console.log(index)

        })
        $("#right").click(function () {
            auto()
            index += 0;

        })
        $("#left").mouseover(function () {
            //alert(2)
            clearInterval(timer)
        })
        $("#left").mouseout(function () {
            timer = setInterval(auto, 1500);
        })
        $("#right").mouseover(function () {
            clearInterval(timer)
        })
        $("#right").mouseout(function () {
            timer = setInterval(auto, 1500);
        })
    })
    //ajax请求数据
    var deff = $.ajax({
        type: "get",
        url: "js/index.json",
        async: true
    });
    deff.done(function (json) {
        var str = "";
        for (var i = 0; i < json.list.length; i++) {
            var pro = json.list[i]
            //console.log(pro);
            str += `
            <li>
            <a href="page.html?pid=${pro.id}">
            <img src="img/${pro.src}" alt=""/>
            </a>
            </li>`;
        }
        $(".shoplistcon").html(str);

    })

    //2
    var deff1 = $.ajax({
        type: "get",
        url: "js/data.json",
        async: true
    });
    deff1.done(function (json) {
        console.log(json)
        var str = "";
        var pro = json.list;

        //console.log(pro)	
        str += `
            <div class="left1">
                            <a href="page.html">
                            <img src="img/${pro[0].src}" />						
                            <span>${pro[0].cloth}</span>
                            <p>${pro[0].con}</p>
                            </a>
                        </div>
                        <div class="center">
                        <div class="center1">
                            <a href="page.html">
                                <img src="img/${pro[1].src}" />
                                <span>${pro[1].cloth}</span>
                                <p>${pro[1].con}</p>
                            </a>
                        </div>
                        <div class="center2">
                        <a href="page.html">
                            <img src="img/${pro[2].src}" />
                            <span>${pro[2].cloth}</span>
                            <p>${pro[2].con}</p>
                        </a>
                        </div>
                        </div>
                        <div class="right">
                            <a href="page.html">
                                <img src="img/${pro[3].src}" />
                                <span>${pro[3].cloth}</span>
                                <p>${pro[3].con}</p>
                            </a>
                        </div>
                    <div class="left1">
                            <a href="page.html">
                            <img src="img/${pro[4].src}" />						
                            <span>${pro[4].cloth}</span>
                            <p>${pro[4].con}</p>
                            </a>
                        </div>
                        <div class="center">
                        <div class="center1">
                            <a href="page.html">
                                <img src="img/${pro[5].src}" />
                                <span>${pro[5].cloth}</span>
                                <p>${pro[5].con}</p>
                            </a>
                        </div>
                        <div class="center2">
                        <a href="page.html">
                            <img src="img/${pro[6].src}" />
                            <span>${pro[6].cloth}</span>
                            <p>${pro[6].con}</p>
                        </a>
                        </div>
                        </div>
                        <div class="right">
                            <a href="page.html">
                                <img src="img/${pro[7].src}" />
                                <span>${pro[7].cloth}</span>
                                <p>${pro[7].con}</p>
                            </a>
                        </div>`;



        $(".shoplist1conx").html(str);
    })


    //3
    var deff = $.ajax({
        type: "get",
        url: "js/date.json",
        async: true
    });
    deff.done(function (json) {
        var str = "";
        for (var i = 0; i < json.list.length; i++) {
            var pro = json.list[i]
            //console.log(pro);
            str += `
            <li>
            <a href="page.html">
            <img src="img/${pro.src}" alt=""/>
            <span>${pro.cloth}</span>
            <p>${pro.con}</p>
            </a>
            </li>`;
        }
        $(".shoplist2cons").html(str);

    })

    //4
    var deff = $.ajax({
        type: "get",
        url: "js/more.json",
        async: true
    });
    deff.done(function (json) {
        var str = "";
        for (var i = 0; i < json.list.length; i++) {
            var pro = json.list[i]
            //console.log(pro);
            str += `
            <li>
            <a href="list.html">
            <img src="img/${pro.src}" alt=""/>
            </a>
            </li>`;
        }
        $(".moreconm").html(str);

    })


}
