ar CURRENT_URL = window.location.href.split("#")[0].split("?")[0], $BODY = $("body"), $MENU_TOGGLE = $("#menu_toggle"),
    $SIDEBAR_MENU = $("#sidebar-menu"), $SIDEBAR_FOOTER = $(".sidebar-footer"), $LEFT_COL = $(".left_col"),
    $RIGHT_COL = $(".right_col"), $NAV_MENU = $(".nav_menu"), $FOOTER = $("footer");

function init_sidebar() {
    var i = function () {
        $RIGHT_COL.css("min-height", $(window).height());
        var e = $BODY.outerHeight(), t = $BODY.hasClass("footer_fixed") ? -10 : $FOOTER.height(),
            i = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(), n = e < i ? i : e;
        n -= $NAV_MENU.height() + t, $RIGHT_COL.css("min-height", n)
    };
    $SIDEBAR_MENU.find("a").on("click", function (e) {
        console.log("clicked - sidebar_menu");
        var t = $(this).parent();
        t.is(".active") ? (t.removeClass("active active-sm"), $("ul:first", t).slideUp(function () {
            i()
        })) : (t.parent().is(".child_menu") ? $BODY.is(".nav-sm") && ($SIDEBAR_MENU.find("li").removeClass("active active-sm"), $SIDEBAR_MENU.find("li ul").slideUp()) : ($SIDEBAR_MENU.find("li").removeClass("active active-sm"), $SIDEBAR_MENU.find("li ul").slideUp()), t.addClass("active"), $("ul:first", t).slideDown(function () {
            i()
        }))
    }), $MENU_TOGGLE.on("click", function () {
        console.log("clicked - menu toggle"), $BODY.hasClass("nav-md") ? ($SIDEBAR_MENU.find("li.active ul").hide(), $SIDEBAR_MENU.find("li.active").addClass("active-sm").removeClass("active")) : ($SIDEBAR_MENU.find("li.active-sm ul").show(), $SIDEBAR_MENU.find("li.active-sm").addClass("active").removeClass("active-sm")), $BODY.toggleClass("nav-md nav-sm"), i(), $(".dataTable").each(function () {
            $(this).dataTable().fnDraw()
        })
    }), $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent("li").addClass("current-page"), $SIDEBAR_MENU.find("a").filter(function () {
        return this.href == CURRENT_URL
    }).parent("li").addClass("current-page").parents("ul").slideDown(function () {
        i()
    }).parent().addClass("active"), $.fn.mCustomScrollbar && $(".menu_fixed").mCustomScrollbar({
        autoHideScrollbar: !0,
        theme: "minimal",
        mouseWheel: {preventDefault: !0}
    })
}

function init_echarts() {
    if ("undefined" != typeof echarts) {
        console.log("init_echarts")
    }
}

!function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment", "datatables.net"], e) : e(jQuery, moment)
}(function (n, a) {
    n.fn.dataTable.moment = function (t, i) {
        var e = n.fn.dataTable.ext.type;
        e.detect.unshift(function (e) {
            return e && (e.replace && (e = e.replace(/(<.*?>)|(\r?\n|\r)/g, "")), e = n.trim(e)), "" === e || null === e ? "moment-" + t : a(e, t, i, !0).isValid() ? "moment-" + t : null
        }), e.order["moment-" + t + "-pre"] = function (e) {
            return e && (e.replace && (e = e.replace(/(<.*?>)|(\r?\n|\r)/g, "")), e = n.trim(e)), a(e, t, i, !0).isValid() ? parseInt(a(e, t, i, !0).format("x"), 10) : 1 / 0
        }
    }
}), $.fn.dataTable.render.ellipsis = function (a, l, o) {
    var s = function (e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    };
    return function (e, t, i) {
        if ("display" !== t) return e;
        if ("number" != typeof e && "string" != typeof e) return e;
        if ((e = e.toString()).length < a) return e;
        var n = e.substr(0, a - 1);
        return l && (n = n.replace(/\s([^\s]*)$/, "")), o && (n = s(n)), '<span class="ellipsis" title="' + s(e) + '">' + n + "&#8230;</span>"
    }
}, $.fn.dataTable.moment("DD/MM/YYYY"), $(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    }), $("#ajouterEsn").click(function () {
        $("#modalEsn").modal({backdrop: 'static'})
    }), $("#modifierEsn").click(function () {
        $("#modalEsn").modal({backdrop: 'static'})
    }), $("#ajouterPresta").click(function () {
        $("#modalPresta").modal({backdrop: 'static'})
    }), $("#modifierPresta").click(function () {
        $("#modalPresta").modal({backdrop: 'static'})
    }), $("#ajouterRoleUtilisateur").click(function () {
        $("#modalAjouterRoleUtilisateur").modal({backdrop: 'static'})
    }), $("#dateHeureRdv").datetimepicker({format: "DD/MM/YYYY"}), $.fn.minitoggle = function (e) {
        e = e || {}, opts = $.extend({on: !1}, e), doToggle = function (e) {
            return e = e.find(".minitoggle"), active = e.toggleClass("active").hasClass("active"), handle = e.find(".toggle-handle"), handlePosition = handle.position(), offset = active ? e.width() - handle.width() - 2 * handlePosition.left : 0, handle.css({transform: "translate3d(" + offset + "px,0,0)"}), e.trigger({
                type: "toggle",
                isActive: active
            })
        }, this.each(function () {
            var e = $(this);
            e.html('<div class="minitoggle"><div class="toggle-handle"></div></div>'), e.click(function () {
                doToggle(e)
            }), opts.on && doToggle(e)
        })
    }
});