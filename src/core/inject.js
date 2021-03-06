(function () {
    var constantInjection = {};
    BI.constant = function (xtype, cls) {
        if (constantInjection[xtype] != null) {
            throw ("constant:[" + xtype + "] has been registed");
        }
        constantInjection[xtype] = cls;
    };

    var modelInjection = {};
    BI.model = function (xtype, cls) {
        if (modelInjection[xtype] != null) {
            throw ("model:[" + xtype + "] has been registed");
        }
        modelInjection[xtype] = cls;
    };

    var storeInjection = {};
    BI.store = function (xtype, cls) {
        if (storeInjection[xtype] != null) {
            throw ("store:[" + xtype + "] has been registed");
        }
        storeInjection[xtype] = cls;
    };

    var serviceInjection = {};
    BI.service = function (xtype, cls) {
        if (serviceInjection[xtype] != null) {
            throw ("service:[" + xtype + "] has been registed");
        }
        serviceInjection[xtype] = cls;
    };

    var providerInjection = {};
    BI.provider = function (xtype, cls) {
        if (providerInjection[xtype] != null) {
            throw ("provider:[" + xtype + "] has been registed");
        }
        providerInjection[xtype] = cls;
    };

    BI.config = function (type, configFn) {
        if (constantInjection[type]) {
            return constantInjection[type] = configFn(constantInjection[type]);
        }
        if (providerInjection[type]) {
            if (!providers[type]) {
                providers[type] = new providerInjection[type]();
            }
            return configFn(providers[type]);
        }
        BI.Plugin.registerWidget(type, configFn);
    };

    var actions = {};
    BI.action = function (type, actionFn) {
        if (!actions[type]) {
            actions[type] = [];
        }
        actions[type].push(actionFn);
        return function () {
            actions[type].remove(actionFn);
            if (actions[type].length === 0) {
                delete actions[type];
            }
        };
    };

    BI.Constants = {
        getConstant: function (type) {
            return constantInjection[type];
        }
    };

    BI.Models = {
        getModel: function (type, config) {
            return new modelInjection[type](config);
        }
    };

    var stores = {};

    BI.Stores = {
        getStore: function (type, config) {
            if (stores[type]) {
                return stores[type];
            }
            return stores[type] = new storeInjection[type](config);
        },
        releaseStore: function (type) {
            delete stores[type];
        }
    };

    var services = {};

    BI.Services = {
        getService: function (type, config) {
            if (services[type]) {
                return services[type];
            }
            return services[type] = new serviceInjection[type](config);
        },
        releaseService: function (type) {
            delete services[type];
        }
    };

    var providers = {}, providerInstance = {};

    BI.Providers = {
        getProvider: function (type, config) {
            if (!providers[type]) {
                providers[type] = new providerInjection[type]();
            }
            if (!providerInstance[type]) {
                providerInstance[type] = new providers[type].$get()(config);
            }
            return providerInstance[type];
        },
        releaseProvider: function (type) {
            delete providers[type];
            delete providerInstance[type];
        }
    };

    BI.Actions = {
        runAction: function (type, config) {
            BI.each(actions[type], function (i, act) {
                act(config);
            });
        }
    };
})();
