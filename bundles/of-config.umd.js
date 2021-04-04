(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core')) :
    typeof define === 'function' && define.amd ? define('@of/config', ['exports', '@angular/core', '@abp/ng.core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.of = global.of || {}, global.of.config = {}), global.ng.core, global.ng_core));
}(this, (function (exports, i0, ng_core) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var OF_ROUTE_PROVIDERS = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: configureRoutes,
            deps: [ng_core.RoutesService],
            multi: true,
        },
    ];
    function configureRoutes(routesService) {
        return function () {
            routesService.add([
                {
                    path: '/of',
                    name: "Of" /* Of */,
                    iconClass: 'fas fa-book',
                    layout: "application" /* application */,
                    order: 3,
                },
            ]);
        };
    }

    var OfConfigModule = /** @class */ (function () {
        function OfConfigModule() {
        }
        OfConfigModule.forRoot = function () {
            return {
                ngModule: OfConfigModule,
                providers: [OF_ROUTE_PROVIDERS],
            };
        };
        return OfConfigModule;
    }());
    OfConfigModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: OfConfigModule });
    OfConfigModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function OfConfigModule_Factory(t) { return new (t || OfConfigModule)(); } });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(OfConfigModule, [{
                type: i0.NgModule
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OF_ROUTE_PROVIDERS = OF_ROUTE_PROVIDERS;
    exports.OfConfigModule = OfConfigModule;
    exports.configureRoutes = configureRoutes;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=of-config.umd.js.map
