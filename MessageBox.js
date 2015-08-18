Ext.define('Mba.ux.MessageBox', {
    override: 'Ext.MessageBox',

    requires: ['Ext.device.Notification'],

    alert: function(title, message, fn, scope) {
        Ext.device.Notification.show({
            title: title === null ? 'Atenção' : title,
            message: message,
            buttons: Ext.MessageBox.OK,
            callback: fn,
            scope: scope
        });
    },

    confirm: function(title, message, fn, scope) {
        Ext.device.Notification.show({
            title: title === null ? 'Atenção' : title,
            message: message,
            buttons: Ext.MessageBox.YESNO,
            callback: fn,
            scope: scope
        });
    }
});
