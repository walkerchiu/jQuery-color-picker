/*
* ColorPicker
*
* https://github.com/walkerchiu/jQuery-color-picker
*
*/

(function(factory){
    if (typeof define === 'function' && define.amd) {   /* RequireJS */
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {           /* Backbone.js */
        factory(require('jquery'));
    } else {                                            /* Jquery plugin */
        factory(jQuery);
    }
}(function($){
    'use strict';

    $.cssHooks.backgroundColor = {
        get: function (obj)
        {
            let bg;

            if (obj.currentStyle)
                bg = obj.currentStyle['background-color'];
            else if (window.getComputedStyle)
                bg = document.defaultView.getComputedStyle(obj, null).getPropertyValue("background-color");
            if (bg.search("rgb") == -1)
                return bg;
            else {
                bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                function hex(x) {
                    return ("0" + parseInt(x).toString(16)).slice(-2);
                }
                return hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
            }
        }
    }

    $.fn.WKCP_cal = function (options) {
        return this.each( function (key,value) {
            switch (options) {
                case "input":
                    $(this).click( function (e) {
                        $(this).parent().find(".WKCP_table").fadeIn();
                    });
                    $(this).blur( function (e) {
                        $(this).parent().find(".WKCP_table").fadeOut();
                    });
                    $(this).keyup( function (e) {
                        let color = $(this).val();
                        $(this).parent().find(".WKCP_table").fadeIn();
                        $(this).parent().find(".WKCP_table .WKCP_table_now").css("background-color", "#" + color);
                    });
                    break;
                case "table":
                    $(this).mouseleave( function (e) {
                        $(this).parent().find(".WKCP_table").fadeOut();
                    });
                    break;
                case "item":
                    $(this).mousemove( function (e) {
                        let color = $(this).css("background-color");
                        $(this).closest(".WKCP").find(".WKCP_table .WKCP_table_now").css("background-color", "#" + color);
                    });
                    $(this).click( function (e) {
                        let color = $(this).css("background-color").toUpperCase();
                        $(this).closest(".WKCP").find(".WKCP_edit").val(color);
                    });
                    break;
                case "now":
                    $(this).click( function (e) {
                        let color = $(this).css("background-color").toUpperCase();
                        $(this).closest(".WKCP").find(".WKCP_edit").val(color);
                    });
                    break;
            }
        });
    };
    $.fn.WKCP = function (options) {
        let settings = $.extend({
            width: "",
            height: "",
            backgroundColor: "",
            border: ""
        }, options);

        let main    = $("<div>", {class: "WKCP"});
        let edit    = $(this).clone().addClass("WKCP_edit");
        let table   = $("<div>", {class: "WKCP_table"});
        let col_now = $("<div>", {class: "WKCP_table_now"});
        let color   = [
            "#000", "#006", "#00F", "#060", "#06F", "#090", "#09F", "#0C0", "#399", "#3BB",
            "#3C9", "#666", "#69F", "#6FF", "#777", "#7A0", "#8C0", "#900", "#909", "#90F",
            "#AAA", "#BBB", "#C90", "#CCC", "#CCF", "#DDD", "#EEE", "#F00", "#F09", "#F36",
            "#F60", "#F66", "#F90", "#F9C", "#FC0", "#FCF", "#FF0", "#FF6", "#FFA", "#FFF"
        ];
        color.forEach( function (el, index, array) {
            table.append($("<div>", {class: "WKCP_table_item"}).css("background-color", el).WKCP_cal("item"));
        });
        let tmp      = main.append(edit.WKCP_cal("input")).append(table.WKCP_cal("table").prepend(col_now.WKCP_cal("now")));

        return $(this).after(tmp).remove();
    };
    $.fn.WKCP_init = function (options) {
        let settings = $.extend({
            width: "",
            height: "",
            backgroundColor: "",
            border: ""
        }, options);

        $(this).find("input[data-picker='WKCP']").each( function () {
            $(this).WKCP(settings);
        });
    };

    $("body").WKCP_init();
}));
