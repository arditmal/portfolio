!(function (e) {
    e.CookiesMessage = function (o) {
        function n(e) {
            return e.replace(/^\s+|\s+$/g, "");
        }
        o = e.extend(
            {
                messageText: "We use technical and analytics cookies to ensure that we give you the best experience on our website.",
                messageBg: "#1e81c4",
                messageColor: "#FFFFFF",
                messageLinkColor: "#ffffff",
                closeEnable: !0,
                closeColor: "#ffffff",
                closeBgColor: "#ffffff",
                acceptEnable: !0,
                acceptText: "Accept & Close",
                infoEnable: !0,
                infoText: "More Info",
                infoUrl: "#",
                cookieExpire: 180,
            },
            o
        );
        var c = location.host;
        (function (e) {
            var o = !1;
            if (document.cookie) {
                var c = document.cookie.split(";");
                for (i = 0; i < c.length; i++) {
                    var s = c[i].split("=");
                    n(s[0]) == e && (o = s[1]);
                }
            }
            return o;
        })(c) ||
            (function (o) {
                var i = "";
                1 == o.closeEnable &&
                    (i +=
                        '<a href="#" id="band-cookies-close" style="background-color:' +
                        o.closeBgColor +
                        ';"><svg version="1.1" id="band-cookies-close-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="248.5 248.5 15 15" enable-background="new 248.5 248.5 15 15" xml:space="preserve" ><polygon id="x-mark-icon" points="263.5,260.876 258.621,255.999 263.499,251.121 260.876,248.5 256,253.377 251.122,248.5 248.5,251.121 253.378,255.999 248.5,260.878 251.121,263.5 256,258.62 260.879,263.499" style="fill:#ffffff' +
                     
                        ';"/></svg></a>');
                var n = "";
                1 == o.acceptEnable && (n += '<a href="#" id="band-cookies-ok">' + o.acceptText + "</a>"), 1 == o.infoEnable && (n += '<a href="' + o.infoUrl + '" id="band-cookies-info">' + o.infoText + "</a>");
                var c = '<div id="band-cookies"><p>' + o.messageText + n + "</p>" + i + "</div>";
                e("body").prepend(c), e("#band-cookies").hide().slideDown(), e("#band-cookies").css({ "background-color": o.messageBg, color: o.messageColor }), e("#band-cookies p a").css({ color: o.messageLinkColor });
            })(o),
            e("#band-cookies-ok").on("click", function (i) {
                i.preventDefault(),
                    (function (e, o, i, n) {
                        var c = new Date();
                        c.setTime(c.getTime() + 24 * i * 60 * 60 * 1e3);
                        var s = "expires=" + c.toUTCString();
                        document.cookie = e + "=" + o + "; " + s + "; path=" + n + ";";
                    })(c, "Cookies policy accepted", o.cookieExpire, "/"),
                    e("#band-cookies").slideToggle();
            }),
            e("#band-cookies-close").on("click", function (o) {
                o.preventDefault(), e("#band-cookies").slideToggle();
            });
    };
})(jQuery);