//<![CDATA[
/*GLOBAL SETTINGS, USER CAN CHANGE*/
var FIXED_MENU = true; // to disable the fixed menu, replace "true" for "false"
var IMAGE_ANIMATE = true; // to disable the image animation, replace "true" for "false"
var MONTH_FORMAT = [, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; // months formats to translation or change to another format
var NO_IMAGE = "//cdn.rawgit.com/gizmopoin/host/895ec5f5/no_thumb.png"; // default no image
var SORABOX_NUM = 5; // default number "no change"
var VIDEOS_NUM = 3; // default number "no change"
var CAROUSEL_NUM = 3; // show number of results carousel, default is "6"
var WIDGET_RECENT_POST_NUM = 3; // show number of results - widget recent posts
var WIDGET_RANDOM_POST_NUM = 3; // show number of results - widget random posts
var WIDGET_RECENT_COMMENT_NUM = 3; // show number of results - widget recent comments
var POSTPERPAGE_NUM = 7; // number of posts per page
var LABEL_SEARCH_NUM = 7; // number of posts labels search
var POSTNAV_PREV_TEXT = "Previous"; // post nav text "previous post"
var POSTNAV_NEXT_TEXT = "Next"; // post nav text "next post"

/*JQUERY PLUGINS*/

// JQuery hover event with timeout by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(c) {
    c.fn.hoverTimeout = function(d, e, f, g) {
        return this.each(function() {
            var a = null,
                b = c(this);
            b.hover(function() {
                clearTimeout(a);
                a = setTimeout(function() {
                    e.call(b)
                }, d)
            }, function() {
                clearTimeout(a);
                a = setTimeout(function() {
                    g.call(b)
                }, f)
            })
        })
    }
})(jQuery);

// jquery replacetext plugin https://github.com/cowboy/jquery-replacetext
(function(e) {
    e.fn.replaceText = function(t, n, r) {
        return this.each(function() {
            var i = this.firstChild,
                s, o, u = [];
            if (i) {
                do {
                    if (i.nodeType === 3) {
                        s = i.nodeValue;
                        o = s.replace(t, n);
                        if (o !== s) {
                            if (!r && /</.test(o)) {
                                e(i).before(o);
                                u.push(i)
                            } else {
                                i.nodeValue = o
                            }
                        }
                    }
                } while (i = i.nextSibling)
            }
            u.length && e(u).remove()
        })
    }
})(jQuery);

// Plugin: SelectNav.js ~ url: https://github.com/lukaszfiszer/selectnav.js
window.selectnav = function() {
    "use strict";
    var e = function(e, t) {
        function c(e) {
            var t;
            if (!e) e = window.event;
            if (e.target) t = e.target;
            else if (e.srcElement) t = e.srcElement;
            if (t.nodeType === 3) t = t.parentNode;
            if (t.value) window.location.href = t.value
        }

        function h(e) {
            var t = e.nodeName.toLowerCase();
            return t === "ul" || t === "ol"
        }

        function p(e) {
            for (var t = 1; document.getElementById("selectnav" + t); t++);
            return e ? "selectnav" + t : "selectnav" + (t - 1)
        }

        function d(e) {
            a++;
            var t = e.children.length,
                n = "",
                l = "",
                c = a - 1;
            if (!t) {
                return
            }
            if (c) {
                while (c--) {
                    l += o
                }
                l += " "
            }
            for (var v = 0; v < t; v++) {
                var m = e.children[v].children[0];
                if (typeof m !== "undefined") {
                    var g = m.innerText || m.textContent;
                    var y = "";
                    if (r) {
                        y = m.className.search(r) !== -1 || m.parentNode.className.search(r) !== -1 ? f : ""
                    }
                    if (i && !y) {
                        y = m.href === document.URL ? f : ""
                    }
                    n += '<option value="' + m.href + '" ' + y + ">" + l + g + "</option>";
                    if (s) {
                        var b = e.children[v].children[1];
                        if (b && h(b)) {
                            n += d(b)
                        }
                    }
                }
            }
            if (a === 1 && u) {
                n = '<option value="">' + u + "</option>" + n
            }
            if (a === 1) {
                n = '<select class="selectnav" id="' + p(true) + '">' + n + "</select>"
            }
            a--;
            return n
        }
        e = document.getElementById(e);
        if (!e) {
            return
        }
        if (!h(e)) {
            return
        }
        if (!("insertAdjacentHTML" in window.document.documentElement)) {
            return
        }
        document.documentElement.className += " js";
        var n = t || {},
            r = n.activeclass || "active",
            i = typeof n.autoselect === "boolean" ? n.autoselect : true,
            s = typeof n.nested === "boolean" ? n.nested : true,
            o = n.indent || "?",
            u = n.label || "Menu",
            a = 0,
            f = " selected ";
        e.insertAdjacentHTML("afterend", d(e));
        var l = document.getElementById(p());
        if (l.addEventListener) {
            l.addEventListener("change", c)
        }
        if (l.attachEvent) {
            l.attachEvent("onchange", c)
        }
        return l
    };
    return function(t, n) {
        e(t, n)
    }
}();
$(document).ready(function() {
    selectnav('menu-main-nav');
    selectnav('nav1');
});

// Main Scripts
$("#LinkList98").each(function() {
    var k = "<ul id='menu-main-nav'><li><ul class='sub-menu'>";
    $("#LinkList98 li").each(function() {
        var a = $(this).text(),
            o = a.substr(0, 1),
            p = a.substr(1);
        "_" == o ? (o = $(this).find("a").attr("href"), k += '<li><a href="' + o + '">' + p + "</a></li>") : (o = $(this).find("a").attr("href"), k += '</ul></li><li><a href="' + o + '">' + a + "</a><ul class='sub-menu'>")
    });
    k += "</ul></li></ul>";
    $(this).html(k);
    $("#LinkList98 ul").each(function() {
        var k = $(this);
        if (k.html().replace(/\s|&nbsp;/g, "").length == 0) k.remove()
    });
    $("#LinkList98 li").each(function() {
        var k = $(this);
        if (k.html().replace(/\s|&nbsp;/g, "").length == 0) k.remove()
    })
});
$(document).ready(function() {
    $("#menu").show();
    $("ul.sub-menu").parent("li").addClass("has-children");
    $("#menu ul li").each(function() {
        $(this).hoverTimeout(0, function() {
            $(this).children("ul").slideDown()
        }, 0, function() {
            $(this).children("ul").hide()
        })
    });
    $("#search-icon").on("click", function() {
        $("#nav-search").slideToggle(250)
    });
    var c = $("#main-nav #s").val();
    $("#main-nav #s").blur(function() {
        if (0 === this.value.length) this.value = c
    });
    $("#main-nav #s").focus(function() {
        if (this.value === c) this.value = ""
    });
    $(".index .post-outer,.archive .post-outer").each(function() {
        $(this).find(".block-image .thumb a").attr("style", function(a, b) {
            return b.replace("/default.jpg", "/mqdefault.jpg")
        }).attr("style", function(a, b) {
            return b.replace("s72-c", "s1600")
        })
    });
    $(".index .post-outer,.archive .post-outer").each(function() {
        $(this).find(".block-image .thumb a").attr("style", function(a, b) {
            return b.replace("//cdn.rawgit.com/gizmopoin/host/895ec5f5/no_thumb.png", "" + NO_IMAGE + "")
        })
    });
    $('.PopularPosts ul li img').each(function() {
        $(this).attr('src', function(i, src) {
            return src.replace('/default.jpg', '/mqdefault.jpg')
        }).attr('src', function(i, src) {
            return src.replace('s72-c', 's1600')
        })
    });
    $(".PopularPosts .item-thumbnail a").prepend('<span class="img-overlay"/>');
    $(".sidebar .widget h2,.sect-left .widget h2").wrap("<div class='title-wrap'/>");
    $('.avatar-image-container img').each(function() {
        $(this).attr('src', function(i, src) {
            return src.replace('//img1.blogblog.com/img/blank.gif', '//cdn.rawgit.com/gizmopoin/host/d2f81658/avatar_45.png')
        }).attr('src', function(i, src) {
            return src.replace('/s35', '/s45')
        })
    });
    $(".back-top").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = $(this.hash);
            a = a.length ? a : $("[name=" + this.hash.slice(1) + "]");
            if (a.length) {
                $("html,body").animate({
                    scrollTop: a.offset().top
                }, 1e3);
                return false
            }
        }
    });
    $(document).ready(function() {
        $('body').addClass('img-anime')
    });
    $(window).bind('load resize scroll', function() {
        var window = $(this).height();
        $('.box-image,.bf-thumb,.rcthumb,.PopularPosts img,.home .block-image .thumb a,.tc-thumb a,.related-thumb a,.PopularPosts .item-thumbnail a,.cmm-img').each(function() {
            var qudr = .1 * $(this).height();
            var omger = qudr - window + $(this).offset().top;
            var lom = $(document).scrollTop();
            if (lom > omger) {
                $(this).addClass('img-effect')
            }
        })
    })
});
$(document).ready(function(a) {
    var b = a("a.newer-link");
    var c = a("a.older-link");
    a.get(b.attr("href"), function(c) {
        b.html("<strong>" + POSTNAV_NEXT_TEXT + "</strong><span>" + a(c).find(".post h1.post-title").text() + "</span>")
    }, "html");
    a.get(c.attr("href"), function(b) {
        c.html("<strong>" + POSTNAV_PREV_TEXT + "</strong><span>" + a(b).find(".post h1.post-title").text() + "</span>")
    }, "html")
});
$(document).ready(function() {
    $('.Label a,.postags a,.label-head a,.box-title h2.title a,.posts-title h2.title a,.first-tag a,.carousel-tag a,.post-tag,.related-tag').each(function() {
        var ib = $(this).attr('href');
        $(this).attr('href', ib + '?&max-results=' + LABEL_SEARCH_NUM + '')
    })
});

// Main Widget Posts Scripts
$('.ready-widget .HTML .widget-content #recentcomments').each(function() {
    $.ajax({
        url: "/feeds/comments/default?alt=json-in-script&max-results=" + WIDGET_RECENT_COMMENT_NUM,
        type: 'get',
        dataType: "jsonp",
        success: function(e) {
            var u = "";
            var h = '<ul class="cmm-widget">';
            for (var i = 0; i < e.feed.entry.length; i++) {
                if (i == e.feed.entry.length) break;
                for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                    if (e.feed.entry[i].link[j].rel == 'alternate') {
                        u = e.feed.entry[i].link[j].href;
                        break
                    }
                }
                if ("content" in e.feed.entry[i]) {
                    var c = e.feed.entry[i].content.$t
                } else if ("summary" in b_rc) {
                    var c = e.feed.entry[i].summary.$t
                } else var c = "";
                var re = /<\S[^>]*>/g;
                c = c.replace(re, "");
                if (c.length > 70) {
                    c = '' + c.substring(0, 50) + '...'
                }
                var y = e.feed.entry[i].author[0].name.$t;
                var yk = e.feed.entry[i].author[0].gd$image.src;
                if (yk.match('http://img1.blogblog.com/img/blank.gif')) {
                    var k = 'http://cdn.rawgit.com/gizmopoin/host/bb515841/avatar_55.png'
                } else {
                    if (yk.match('http://img2.blogblog.com/img/b16-rounded.gif')) {
                        var k = 'http://cdn.rawgit.com/gizmopoin/host/bb515841/avatar_55.png'
                    } else {
                        var k = yk
                    }
                };
                h += '<li><div class="cmm-avatar"><img class="cmm-img" src="' + k + '"/></div><a href="' + u + '">' + y + '</a><span>"' + c + '"</span></li>'
            }
            h += '</ul><div class="clear"/>';
            $('.ready-widget .HTML .widget-content #recentcomments').each(function() {
                if ($(this).attr("id").match("recentcomments")) {
                    $(this).parent().html(h)
                }
            })
        }
    })
});
$('.ready-widget .HTML .widget-content #randomposts').each(function() {
    $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: 'get',
        dataType: "jsonp",
        success: function(t) {
            t = t.feed.entry.length - 3, t = Math.floor(Math.random() * (t - 0 + 1)) + 0, 0 == t && (t = Math.floor(Math.random() * (t - 0 + 1)) + 1), t == 0 && (t == 1), $.ajax({
                url: "/feeds/posts/default?alt=json-in-script&start-index=" + t + "&max-results=" + WIDGET_RANDOM_POST_NUM,
                type: 'get',
                dataType: "jsonp",
                success: function(e) {
                    var u = "";
                    var h = '<ul class="custom-widget">';
                    for (var i = 0; i < e.feed.entry.length; i++) {
                        for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                            if (e.feed.entry[i].link[j].rel == "alternate") {
                                u = e.feed.entry[i].link[j].href;
                                break
                            }
                        }
                        var g = e.feed.entry[i].title.$t;
                        var s = e.feed.entry[i].category[0].term;
                        var y = e.feed.entry[i].author[0].name.$t;
                        var d = e.feed.entry[i].published.$t,
                            v = d.substring(0, 4),
                            w = d.substring(5, 7),
                            f = d.substring(8, 10),
                            r = MONTH_FORMAT[parseInt(w, 10)] + ' ' + f + ', ' + v;
                        var c = e.feed.entry[i].content.$t;
                        var $c = $('<div>').html(c);
                        if (c.indexOf("//www.youtube.com/embed/") > -1) {
                            var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                            var k = p
                        } else if (c.indexOf("<img") > -1) {
                            var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
                            var k = q
                        } else {
                            var k = NO_IMAGE
                        }
                        h += '<li><a class="rcthumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-date">' + r + '</span></div></li>'
                    }
                    h += '</ul>';
                    $('.ready-widget .HTML .widget-content #randomposts').each(function() {
                        if ($(this).attr("id").match("randomposts")) {
                            $(this).parent().html(h)
                        }
                    })
                }
            })
        }
    })
});
$('.ready-widget .HTML .widget-content #recentposts').each(function() {
    $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: 'get',
        dataType: "jsonp",
        success: function(b) {
            $.ajax({
                url: "/feeds/posts/default?alt=json-in-script&max-results=" + WIDGET_RECENT_POST_NUM,
                type: 'get',
                dataType: "jsonp",
                success: function(e) {
                    var u = "";
                    var h = '<ul class="custom-widget">';
                    for (var i = 0; i < e.feed.entry.length; i++) {
                        for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                            if (e.feed.entry[i].link[j].rel == "alternate") {
                                u = e.feed.entry[i].link[j].href;
                                break
                            }
                        }
                        var g = e.feed.entry[i].title.$t;
                        var s = e.feed.entry[i].category[0].term;
                        var y = e.feed.entry[i].author[0].name.$t;
                        var d = e.feed.entry[i].published.$t,
                            v = d.substring(0, 4),
                            w = d.substring(5, 7),
                            f = d.substring(8, 10),
                            r = MONTH_FORMAT[parseInt(w, 10)] + ' ' + f + ', ' + v;
                        var c = e.feed.entry[i].content.$t;
                        var $c = $('<div>').html(c);
                        if (c.indexOf("//www.youtube.com/embed/") > -1) {
                            var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                            var k = p
                        } else if (c.indexOf("<img") > -1) {
                            var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
                            var k = q
                        } else {
                            var k = NO_IMAGE
                        }
                        h += '<li><a class="rcthumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-date">' + r + '</span></div></li>'
                    }
                    h += '</ul>';
                    $('.ready-widget .HTML .widget-content #recentposts').each(function() {
                        if ($(this).attr("id").match("recentposts")) {
                            $(this).html(h)
                        }
                    })
                }
            })
        }
    })
});
$(".recent-boxes .HTML .widget-content").each(function() {
    var bl = $(this).find("span").attr("data-label"),
        b1 = "sorabox",
        b2 = "videos",
        b3 = "carousel",
        bt = $(this).prev("h2").text(),
        sora = $(this).parent().attr("id"),
        box = $(this).find("span").attr("id");
    if (box.match(b1)) {
        $.ajax({
            url: "/feeds/posts/default/-/" + bl + "?alt=json-in-script&max-results=" + SORABOX_NUM,
            type: 'get',
            dataType: "jsonp",
            success: function(e) {
                var u = "";
                var h = '<ul>';
                for (var i = 0; i < e.feed.entry.length; i++) {
                    for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                        if (e.feed.entry[i].link[j].rel == "alternate") {
                            u = e.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var g = e.feed.entry[i].title.$t;
                    var s = e.feed.entry[i].category[0].term;
                    var d = e.feed.entry[i].published.$t,
                        v = d.substring(0, 4),
                        w = d.substring(5, 7),
                        f = d.substring(8, 10),
                        r = MONTH_FORMAT[parseInt(w, 10)] + ' ' + f + ', ' + v;
                    var c = e.feed.entry[i].content.$t;
                    var $c = $('<div>').html(c);
                    if (c.indexOf("//www.youtube.com/embed/") > -1) {
                        var p = e.feed.entry[i].media$thumbnail.url;
                        var k = p
                    } else if (c.indexOf("<img") > -1) {
                        var q = $c.find('img:first').attr('src');
                        var k = q
                    } else {
                        var k = NO_IMAGE
                    }
                    if (i == 0) {
                        h += '<div class="bx-first"><div class="bx-item"><div class="box-thumbnail"><a class="bf-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="first-tag"><a href="/search/label/' + s + '">' + s + '</a></div></div><div class="bf-content"><h3 class="recent-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-date">' + r + '</span></div></div></div>'
                    } else {
                        h += '<li><div class="box-thumbnail"><a class="box-image" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-date">' + r + '</span></div><div class="clear"/></li>'
                    }
                }
                h += '</ul>';
                $(".recent-boxes .HTML .widget-content").each(function() {
                    var base = $(this).parent().attr("id");
                    if (base == sora) {
                        $(this).html(h);
                        $(this).parent().addClass('fbox');
                        $(this).parent().addClass('boxes');
                        $(this).prev("h2").html('<a href="/search/label/' + bl + '">' + bt + '</a>');
                        $(this).prev("h2").wrap('<div class="box-title"></div>');
                        $(this).find('.bf-thumb,.box-image').each(function() {
                            $(this).attr('style', function(i, src) {
                                return src.replace('/default.jpg', '/mqdefault.jpg')
                            }).attr('style', function(i, src) {
                                return src.replace('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    }
    if (box.match(b2)) {
        $.ajax({
            url: "/feeds/posts/default/-/" + bl + "?alt=json-in-script&max-results=" + VIDEOS_NUM,
            type: 'get',
            dataType: "jsonp",
            success: function(e) {
                var u = "";
                var h = '<ul>';
                for (var i = 0; i < e.feed.entry.length; i++) {
                    for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                        if (e.feed.entry[i].link[j].rel == "alternate") {
                            u = e.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var g = e.feed.entry[i].title.$t;
                    var s = e.feed.entry[i].category[0].term;
                    var d = e.feed.entry[i].published.$t,
                        v = d.substring(0, 4),
                        w = d.substring(5, 7),
                        f = d.substring(8, 10),
                        r = MONTH_FORMAT[parseInt(w, 10)] + ' ' + f + ', ' + v;
                    var c = e.feed.entry[i].content.$t;
                    var $c = $('<div>').html(c);
                    if (c.indexOf("//www.youtube.com/embed/") > -1) {
                        var p = e.feed.entry[i].media$thumbnail.url;
                        var k = p
                    } else if (c.indexOf("<img") > -1) {
                        var q = $c.find('img:first').attr('src');
                        var k = q
                    } else {
                        var k = NO_IMAGE
                    }
                    h += '<li><div class="videos-item"><a class="box-image" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="videos-overlay"/></a><div class="recent-content"><h3 class="recent-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-date">' + r + '</span></div><div class="clear"/></div></li>'
                }
                h += '</ul>';
                $(".recent-boxes .HTML .widget-content").each(function() {
                    var base = $(this).parent().attr("id");
                    if (base == sora) {
                        $(this).html(h);
                        $(this).parent().addClass('videos');
                        $(this).prev("h2").html('<a href="/search/label/' + bl + '">' + bt + '</a>');
                        $(this).prev("h2").wrap('<div class="box-title"></div>');
                        $(this).find('.box-image').each(function() {
                            $(this).attr('style', function(i, src) {
                                return src.replace('/default.jpg', '/mqdefault.jpg')
                            }).attr('style', function(i, src) {
                                return src.replace('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    }
    if (box.match(b3)) {
        $.ajax({
            url: "/feeds/posts/default/-/" + bl + "?alt=json-in-script&max-results=" + CAROUSEL_NUM,
            type: 'get',
            dataType: "jsonp",
            success: function(e) {
                var u = "";
                var h = '<div class="main-carousel">';
                for (var i = 0; i < e.feed.entry.length; i++) {
                    for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                        if (e.feed.entry[i].link[j].rel == "alternate") {
                            u = e.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var g = e.feed.entry[i].title.$t;
                    var s = e.feed.entry[i].category[0].term;
                    var d = e.feed.entry[i].published.$t,
                        v = d.substring(0, 4),
                        w = d.substring(5, 7),
                        f = d.substring(8, 10),
                        r = MONTH_FORMAT[parseInt(w, 10)] + ' ' + f + ', ' + v;
                    var c = e.feed.entry[i].content.$t;
                    var $c = $('<div>').html(c);
                    if (c.indexOf("//www.youtube.com/embed/") > -1) {
                        var p = e.feed.entry[i].media$thumbnail.url;
                        var k = p
                    } else if (c.indexOf("<img") > -1) {
                        var q = $c.find('img:first').attr('src');
                        var k = q
                    } else {
                        var k = NO_IMAGE
                    }
                    h += '<li class="carousel-item"><div class="carousel-thumb"><a class="box-image" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="carousel-overlay"/></a></div><div class="carousel-content"><div class="carousel-tag"><a href="/search/label/' + s + '">' + s + '</a></div><h3 class="recent-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-date">' + r + '</span></div></li>'
                }
                h += '</div>';
                $(".recent-boxes .HTML .widget-content").each(function() {
                    var base = $(this).parent().attr("id");
                    if (base == sora) {
                        $(this).html(h);
                        $(this).parent().addClass('carousel');
                        $(this).prev("h2").html('<a href="/search/label/' + bl + '">' + bt + '</a>');
                        $(this).prev("h2").wrap('<div class="box-title"></div>');
                        $(".main-carousel").owlCarousel({
                            items: 3,
                            margin: 5,
                            smartSpeed: 550,
                            nav: true,
                            navText: ["", ""],
                            loop: true,
                            autoplay: true,
                            autoplaySpeed: 800,
                            dots: false,
                            responsive: {
                                0: {
                                    items: 1,
                                    nav: true
                                },
                                601: {
                                    items: 2,
                                    nav: true
                                },
                                701: {
                                    items: 3,
                                    nav: true
                                }
                            }
                        });
                        $(this).find('.box-image').each(function() {
                            $(this).attr('style', function(i, src) {
                                return src.replace('/default.jpg', '/hqdefault.jpg')
                            }).attr('style', function(i, src) {
                                return src.replace('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    }
});
$("#related-ready").each(function() {
    var b = $(this).text();
    $.ajax({
        url: "/feeds/posts/default/-/" + b + "?alt=json-in-script&max-results=3",
        type: 'get',
        dataType: "jsonp",
        success: function(e) {
            var u = "";
            var h = '<div class="related-posts">';
            for (var i = 0; i < e.feed.entry.length; i++) {
                for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                    if (e.feed.entry[i].link[j].rel == "alternate") {
                        u = e.feed.entry[i].link[j].href;
                        break
                    }
                }
                var g = e.feed.entry[i].title.$t;
                var s = e.feed.entry[i].category[0].term;
                var d = e.feed.entry[i].published.$t,
                    v = d.substring(0, 4),
                    w = d.substring(5, 7),
                    f = d.substring(8, 10),
                    r = MONTH_FORMAT[parseInt(w, 10)] + ' ' + f + ', ' + v;
                var c = e.feed.entry[i].content.$t;
                var $c = $('<div>').html(c);
                if (c.indexOf("//www.youtube.com/embed/") > -1) {
                    var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                    var k = p
                } else if (c.indexOf("<img") > -1) {
                    var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
                    var k = q
                } else {
                    var k = NO_IMAGE
                }
                h += '<li class="related-item"><a class="related-tag" href="/search/label/' + s + '">' + s + '</a><div class="related-thumb"><a class="related-img" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="related-overlay"/></a></div><div class="related-content"><h3><a href="' + u + '">' + g + '</a></h3><span class="recent-date">' + r + '</span></div></li>'
            }
            h += '</div><div class="clear"/>';
            $("#related-ready").html(h);
            $('.related-img').each(function() {
                $(this).attr('style', function(i, src) {
                    return src.replace('/default.jpg', '/hqdefault.jpg')
                }).attr('style', function(i, src) {
                    return src.replace('s72-c', 's1600')
                })
            })
        }
    })
});
$('.featured .HTML .widget-content').each(function() {
    var bt = $(this).find("span").attr("data-label"),
        b1 = "random",
        b2 = "recent",
        b3 = "label",
        box = $(this).find("span").attr("id");
    if (box.match(b1)) {
        $.ajax({
            url: "/feeds/posts/default?alt=json-in-script",
            type: 'get',
            dataType: "jsonp",
            success: function(t) {
                t = t.feed.entry.length - 5, t = Math.floor(Math.random() * (t - 0 + 1)) + 0, 0 == t && (t = Math.floor(Math.random() * (t - 0 + 1)) + 1), t == 0 && (t == 1), $.ajax({
                    url: "/feeds/posts/default?alt=json-in-script&start-index=" + t + "&max-results=5",
                    type: 'get',
                    dataType: "jsonp",
                    success: function(e) {
                        var u = "";
                        var h = '<div cass="feat-wrap">';
                        for (var i = 0; i < e.feed.entry.length; i++) {
                            for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                                if (e.feed.entry[i].link[j].rel == "alternate") {
                                    u = e.feed.entry[i].link[j].href;
                                    break
                                }
                            }
                            var g = e.feed.entry[i].title.$t;
                            var s = e.feed.entry[i].category[0].term;
                            var y = e.feed.entry[i].author[0].name.$t;
                            var d = e.feed.entry[i].published.$t,
                                v = d.substring(0, 4),
                                w = d.substring(5, 7),
                                f = d.substring(8, 10),
                                r = MONTH_FORMAT[parseInt(w, 10)] + ' ' + f + ', ' + v;
                            var c = e.feed.entry[i].content.$t;
                            var $c = $('<div>').html(c);
                            if (c.indexOf("//www.youtube.com/embed/") > -1) {
                                var p = e.feed.entry[i].media$thumbnail.url;
                                var k = p
                            } else if (c.indexOf("<img") > -1) {
                                var q = $c.find('img:first').attr('src');
                                var k = q
                            } else {
                                var k = NO_IMAGE
                            }
                            if (i == 0) {
                                h += '<div class="feat-align feat-column1"><div class="hot-item item1"><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title-first"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-date">' + r + '</span></div></div></div></div></div>'
                            } else if (i == 1) {
                                h += '<div class="feat-align feat-column2"><div class="hot-item item2"><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-date">' + r + '</span></div></div></div></div>'
                            } else if (i == 2) {
                                h += '<div class="hot-item item3"><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-date">' + r + '</span></div></div></div></div></div></div>'
                            } else if (i == 3) {
                                h += '<div class="feat-align feat-column4"><div class="hot-item item4"><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-date">' + r + '</span></div></div></div></div>'
                            } else {
                                h += '<div class="hot-item item5"><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-date">' + r + '</span></div></div></div></div></div>'
                            }
                        }
                        h += '<div class="clear"/></div>';
                        $('.featured .HTML .widget-content').each(function() {
                            if ($(this).find("span").attr("id").match("random")) {
                                $(this).html(h);
                                $(this).find('.rcp-thumb').each(function() {
                                    $(this).attr('style', function(i, src) {
                                        return src.replace('/default.jpg', '/hqdefault.jpg')
                                    }).attr('style', function(i, src) {
                                        return src.replace('s72-c', 's1600')
                                    })
                                })
                            }
                        })
                    }
                })
            }
        })
    } else if (box.match(b2)) {
        $.ajax({
            url: "/feeds/posts/default?alt=json-in-script",
            type: 'get',
            dataType: "jsonp",
            success: function(a) {
                $.ajax({
                    url: "/feeds/posts/default?alt=json-in-script&max-results=5",
                    type: 'get',
                    dataType: "jsonp",
                    success: function(e) {
                        var u = "";
                        var h = '<div cass="feat-wrap">';
                        for (var i = 0; i < e.feed.entry.length; i++) {
                            for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                                if (e.feed.entry[i].link[j].rel == "alternate") {
                                    u = e.feed.entry[i].link[j].href;
                                    break
                                }
                            }
                            var g = e.feed.entry[i].title.$t;
                            var s = e.feed.entry[i].category[0].term;
                            var y = e.feed.entry[i].author[0].name.$t;
                            var d = e.feed.entry[i].published.$t,
                                v = d.substring(0, 4),
                                w = d.substring(5, 7),
                                f = d.substring(8, 10),
                                r = MONTH_FORMAT[parseInt(w, 10)] + ' ' + f + ', ' + v;
                            var c = e.feed.entry[i].content.$t;
                            var $c = $('<div>').html(c);
                            if (c.indexOf("//www.youtube.com/embed/") > -1) {
                                var p = e.feed.entry[i].media$thumbnail.url;
                                var k = p
                            } else if (c.indexOf("<img") > -1) {
                                var q = $c.find('img:first').attr('src');
                                var k = q
                            } else {
                                var k = NO_IMAGE
                            }
                            if (i == 0) {
                                h += '<div class="feat-align feat-column1"><div class="hot-item item1"><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title-first"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-date">' + r + '</span></div></div></div></div></div>'
                            } else if (i == 1) {
                                h += '<div class="feat-align feat-column2"><div class="hot-item item2"><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-date">' + r + '</span></div></div></div></div>'
                            } else if (i == 2) {
                                h += '<div class="hot-item item3"><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-date">' + r + '</span></div></div></div></div></div></div>'
                            } else if (i == 3) {
                                h += '<div class="feat-align feat-column4"><div class="hot-item item4"><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-date">' + r + '</span></div></div></div></div>'
                            } else {
                                h += '<div class="hot-item item5"><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-date">' + r + '</span></div></div></div></div></div>'
                            }
                        }
                        h += '<div class="clear"/></div>';
                        $('.featured .HTML .widget-content').each(function() {
                            if ($(this).find("span").attr("id").match("recent")) {
                                $(this).html(h);
                                $(this).find('.rcp-thumb').each(function() {
                                    $(this).attr('style', function(i, src) {
                                        return src.replace('/default.jpg', '/hqdefault.jpg')
                                    }).attr('style', function(i, src) {
                                        return src.replace('s72-c', 's1600')
                                    })
                                })
                            }
                        })
                    }
                })
            }
        })
    } else if (box.match(b3)) {
        $.ajax({
            url: "/feeds/posts/default/-/" + bt + "?alt=json-in-script&max-results=5",
            type: 'get',
            dataType: "jsonp",
            success: function(e) {
                var u = "";
                var h = '<div cass="feat-wrap">';
                for (var i = 0; i < e.feed.entry.length; i++) {
                    for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                        if (e.feed.entry[i].link[j].rel == "alternate") {
                            u = e.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var g = e.feed.entry[i].title.$t;
                    var s = e.feed.entry[i].category[0].term;
                    var y = e.feed.entry[i].author[0].name.$t;
                    var d = e.feed.entry[i].published.$t,
                        v = d.substring(0, 4),
                        w = d.substring(5, 7),
                        f = d.substring(8, 10),
                        r = MONTH_FORMAT[parseInt(w, 10)] + ' ' + f + ', ' + v;
                    var c = e.feed.entry[i].content.$t;
                    var $c = $('<div>').html(c);
                    if (c.indexOf("//www.youtube.com/embed/") > -1) {
                        var p = e.feed.entry[i].media$thumbnail.url;
                        var k = p
                    } else if (c.indexOf("<img") > -1) {
                        var q = $c.find('img:first').attr('src');
                        var k = q
                    } else {
                        var k = NO_IMAGE
                    }
                    if (i == 0) {
                        h += '<div class="feat-align feat-column1"><div class="hot-item item1"><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title-first"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-date">' + r + '</span></div></div></div></div></div>'
                    } else if (i == 1) {
                        h += '<div class="feat-align feat-column2"><div class="hot-item item2"><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-date">' + r + '</span></div></div></div></div>'
                    } else if (i == 2) {
                        h += '<div class="hot-item item3"><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-date">' + r + '</span></div></div></div></div></div></div>'
                    } else if (i == 3) {
                        h += '<div class="feat-align feat-column4"><div class="hot-item item4"><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-date">' + r + '</span></div></div></div></div>'
                    } else {
                        h += '<div class="hot-item item5"><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-date">' + r + '</span></div></div></div></div></div>'
                    }
                }
                h += '<div class="clear"/></div>';
                $('.featured .HTML .widget-content').each(function() {
                    if ($(this).find("span").attr("id").match("label")) {
                        $(this).html(h);
                        $(this).find('.rcp-thumb').each(function() {
                            $(this).attr('style', function(i, src) {
                                return src.replace('/default.jpg', '/hqdefault.jpg')
                            }).attr('style', function(i, src) {
                                return src.replace('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    }
});
//]]>
