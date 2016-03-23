Ext.define('Mba.ux.MessageBox', {
    override: 'Ext.MessageBox',

    requires: ['Ext.device.Notification'],

    alert: function(title, message, fn, scope) {
        if (!navigator.notification) {
            return this.callOverridden(arguments);    
        }
        Ext.device.Notification.show({
            title: title === null ? 'Atenção' : title,
            message: message,
            buttons: Ext.MessageBox.OK,
            callback: fn,
            scope: scope
        });
    },

    confirm: function(title, message, fn, scope) {
        if (!navigator.notification) {
            return this.callOverridden(arguments);    
        }
        Ext.device.Notification.show({
            title: title === null ? 'Atenção' : title,
            message: message,
            buttons: Ext.MessageBox.YESNO,
            callback: fn,
            scope: scope
        });
    },

    prompt: function(title, message, fn, buttonLabels, scope, multiLine, value, prompt) {
        if (!navigator.notification) {
            return this.show({
                title: title || null,
                message: message || null,
                buttons: buttonLabels || Ext.MessageBox.OKCANCEL,
                scope: scope,
                prompt: prompt || true,
                multiLine: multiLine,
                value: value,
                fn: function() {
                    if (fn) {
                        fn.apply(scope, arguments);
                    }
                }
            });
        }
        Ext.device.Notification.prompt({
            title: title === null ? 'Atenção' : title,
            message: message,
            buttons: Ext.MessageBox.YESNO,
            promptCallback: fn,
            buttonLabels: buttonLabels,
            scope: scope,
            defaultText: value
        });
    }

});
