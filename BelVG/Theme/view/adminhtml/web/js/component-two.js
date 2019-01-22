define([
    'jquery',
    'uiComponent'
],function ($, Component) {

    return Component.extend({
        defaults: {
            title: 'Component Two',
            value: 'Sync text',
            exports: {
                value: 'componentOne:value'
            },
            tracks: {
                value: true
            }
        }
    });

});