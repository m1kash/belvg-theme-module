define([
    'jquery',
    'uiComponent',
    'Magento_Ui/js/modal/alert'
],function ($, Component, alert) {
    'use strict';
    return Component.extend({
        defaults: {
            title: 'Component One',
            value: 'Value text',
            listens: {
                value: 'valueChanged'
            },
            tracks: {
                value: true
            }
        },
        valueChanged: function (val) {
            alert({
                content: 'value changed to <strong>' + val + '</strong>'
            });
        }
    });

});