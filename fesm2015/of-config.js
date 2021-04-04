import * as i0 from '@angular/core';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RoutesService } from '@abp/ng.core';

const OF_ROUTE_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureRoutes,
        deps: [RoutesService],
        multi: true,
    },
];
function configureRoutes(routesService) {
    return () => {
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

class OfConfigModule {
    static forRoot() {
        return {
            ngModule: OfConfigModule,
            providers: [OF_ROUTE_PROVIDERS],
        };
    }
}
OfConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: OfConfigModule });
OfConfigModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OfConfigModule_Factory(t) { return new (t || OfConfigModule)(); } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfConfigModule, [{
        type: NgModule
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { OF_ROUTE_PROVIDERS, OfConfigModule, configureRoutes };
//# sourceMappingURL=of-config.js.map
