var Listeners = {
    contentType: $("[data-module]:first").data("module"),
    init: function () {
        $("[data-module]").length > 0 &&
        eval("Listeners.setup" + this.contentType + "()"),
            this.menuBar(),
            this.smoothScroll(),
            this.activeMenu(),
            this.activeNavItem(),
        $(window).width() <= 1221 &&
        (this.initMmenu(), this.mobileNavigationMenu());
    },
    setupHome: function () {
        this.loadMore();
    },
    validateForm: function () {
        $("#contactForm").validate();
    },
    activeNavItem: function () {
        $('body').scrollspy({
            target: '#desktop-navigation',
            offset: 150,
        });
    },
    menuBar: function () {
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 50) {
                $(".main-navigation").addClass("menu-bg-overlay");
            } else {
                $(".main-navigation").removeClass("menu-bg-overlay");
            }
        });
    },
    initMmenu: function () {
        (Mmenu.configs.classNames.selected = "active"),
            (Mmenu.configs.offCanvas.page.selector = "#page"),
            document.addEventListener("DOMContentLoaded", () => {
                new Mmenu("#menu", {
                    slidingSubmenus: !0,
                    extensions: [
                        "theme-dark",
                        "pagedim-black",
                        "shadow-page",
                        "position-front",
                    ],
                    navbars: [],
                    classNames: {fixedElements: {fixed: "sticky"}},
                });
            });
    },
    smoothScroll: function () {
        $("a[href^='#']").click(function (e) {
            e.preventDefault();
            var position = $($(this).attr("href")).offset().top - 80;
             $("body.mm-wrapper_opening").toggleClass();
            $("body, html").animate(
                {
                    scrollTop: position,
                }

            );
        });
    },
    mobileNavigationMenu: function () {
        $(window).width() <= 1024 &&
        ($("#desktop-navigation").hide(),
            $(".mobile-nav").show(),
            this.stickyNavMobile());
    },
    stickyNavMobile: function () {
        var e = $(".top-header"),
            i = e.offset().top,
            t = e.height();
        $(document).scroll(function () {
            var n = $(this).scrollTop();
            n > i + t
                ? e.addClass("mobile-nav-fixed").animate({top: 0})
                : n <= i &&
                e
                    .removeClass("mobile-nav-fixed")
                    .clearQueue()
                    .animate({top: "-48px"}, 0);
        });
    },
    activeMenu: function () {
        var selector = ".main-navigation nav ul li a";

        $(selector).on("click", function () {
            $(selector).removeClass("active");
            $(this).addClass("active");
        });
    },
    loadMore: function () {
        $(".portfolio").slice(0, 4).show();
        $("body").on("click touchstart", ".load-more", function (e) {
            e.preventDefault();
            $(".portfolio:hidden").slice(0, 4).slideDown();
            if ($(".portfolio:hidden").length == 0) {
                $(".load-more").css("visibility", "hidden");
            }
        });
    },
};