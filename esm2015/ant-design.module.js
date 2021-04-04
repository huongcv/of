import { NgModule } from '@angular/core';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzWaveModule } from 'ng-zorro-antd/core/wave';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NZ_DATE_LOCALE, NZ_I18N, NzI18nModule, vi_VN } from 'ng-zorro-antd/i18n';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { vi as viDate } from 'date-fns/locale';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import * as i0 from "@angular/core";
registerLocaleData(vi);
const antDesignIcons = AllIcons;
const icons = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);
const antModule = [
    NzAffixModule,
    NzAlertModule,
    NzAnchorModule,
    NzAutocompleteModule,
    NzAvatarModule,
    NzBackTopModule,
    NzBadgeModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzCalendarModule,
    NzCardModule,
    NzCarouselModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzCollapseModule,
    NzCommentModule,
    NzDatePickerModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzDrawerModule,
    NzDropDownModule,
    NzEmptyModule,
    NzFormModule,
    NzGridModule,
    NzI18nModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzLayoutModule,
    NzListModule,
    NzMentionModule,
    NzMenuModule,
    NzMessageModule,
    NzModalModule,
    NzNoAnimationModule,
    NzNotificationModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzProgressModule,
    NzRadioModule,
    NzRateModule,
    NzResultModule,
    NzSelectModule,
    NzSkeletonModule,
    NzSliderModule,
    NzSpinModule,
    NzStatisticModule,
    NzStepsModule,
    NzSwitchModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzTimelineModule,
    NzToolTipModule,
    NzTransButtonModule,
    NzTransferModule,
    NzTreeModule,
    NzTreeSelectModule,
    NzTypographyModule,
    NzUploadModule,
    NzWaveModule,
    NzResizableModule,
    NzSpaceModule
];
export class AntDesignModule {
}
AntDesignModule.ɵmod = i0.ɵɵdefineNgModule({ type: AntDesignModule });
AntDesignModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AntDesignModule_Factory(t) { return new (t || AntDesignModule)(); }, providers: [
        { provide: NZ_I18N, useValue: vi_VN },
        { provide: NZ_ICONS, useValue: icons },
        { provide: NZ_DATE_LOCALE, useValue: viDate }
    ], imports: [NzAffixModule,
        NzAlertModule,
        NzAnchorModule,
        NzAutocompleteModule,
        NzAvatarModule,
        NzBackTopModule,
        NzBadgeModule,
        NzButtonModule,
        NzBreadCrumbModule,
        NzCalendarModule,
        NzCardModule,
        NzCarouselModule,
        NzCascaderModule,
        NzCheckboxModule,
        NzCollapseModule,
        NzCommentModule,
        NzDatePickerModule,
        NzDescriptionsModule,
        NzDividerModule,
        NzDrawerModule,
        NzDropDownModule,
        NzEmptyModule,
        NzFormModule,
        NzGridModule,
        NzI18nModule,
        NzIconModule,
        NzInputModule,
        NzInputNumberModule,
        NzLayoutModule,
        NzListModule,
        NzMentionModule,
        NzMenuModule,
        NzMessageModule,
        NzModalModule,
        NzNoAnimationModule,
        NzNotificationModule,
        NzPageHeaderModule,
        NzPaginationModule,
        NzPopconfirmModule,
        NzPopoverModule,
        NzProgressModule,
        NzRadioModule,
        NzRateModule,
        NzResultModule,
        NzSelectModule,
        NzSkeletonModule,
        NzSliderModule,
        NzSpinModule,
        NzStatisticModule,
        NzStepsModule,
        NzSwitchModule,
        NzTableModule,
        NzTabsModule,
        NzTagModule,
        NzTimePickerModule,
        NzTimelineModule,
        NzToolTipModule,
        NzTransButtonModule,
        NzTransferModule,
        NzTreeModule,
        NzTreeSelectModule,
        NzTypographyModule,
        NzUploadModule,
        NzWaveModule,
        NzResizableModule,
        NzSpaceModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AntDesignModule, { exports: [NzAffixModule,
        NzAlertModule,
        NzAnchorModule,
        NzAutocompleteModule,
        NzAvatarModule,
        NzBackTopModule,
        NzBadgeModule,
        NzButtonModule,
        NzBreadCrumbModule,
        NzCalendarModule,
        NzCardModule,
        NzCarouselModule,
        NzCascaderModule,
        NzCheckboxModule,
        NzCollapseModule,
        NzCommentModule,
        NzDatePickerModule,
        NzDescriptionsModule,
        NzDividerModule,
        NzDrawerModule,
        NzDropDownModule,
        NzEmptyModule,
        NzFormModule,
        NzGridModule,
        NzI18nModule,
        NzIconModule,
        NzInputModule,
        NzInputNumberModule,
        NzLayoutModule,
        NzListModule,
        NzMentionModule,
        NzMenuModule,
        NzMessageModule,
        NzModalModule,
        NzNoAnimationModule,
        NzNotificationModule,
        NzPageHeaderModule,
        NzPaginationModule,
        NzPopconfirmModule,
        NzPopoverModule,
        NzProgressModule,
        NzRadioModule,
        NzRateModule,
        NzResultModule,
        NzSelectModule,
        NzSkeletonModule,
        NzSliderModule,
        NzSpinModule,
        NzStatisticModule,
        NzStepsModule,
        NzSwitchModule,
        NzTableModule,
        NzTabsModule,
        NzTagModule,
        NzTimePickerModule,
        NzTimelineModule,
        NzToolTipModule,
        NzTransButtonModule,
        NzTransferModule,
        NzTreeModule,
        NzTreeSelectModule,
        NzTypographyModule,
        NzUploadModule,
        NzWaveModule,
        NzResizableModule,
        NzSpaceModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AntDesignModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                exports: [antModule],
                providers: [
                    { provide: NZ_I18N, useValue: vi_VN },
                    { provide: NZ_ICONS, useValue: icons },
                    { provide: NZ_DATE_LOCALE, useValue: viDate }
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW50LWRlc2lnbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvYW50LWRlc2lnbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUs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Q3BCLGVBQWU7UUFDZixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsWUFBWTtRQUNaLGVBQWU7UUFDZixZQUFZO1FBQ1osZUFBZTtRQUNmLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsY0FBYztRQUNkLGFBQWE7UUFDYixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsYUFBYTtrREFZRixlQUFlO2NBVDNCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNwQixTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7b0JBQ3JDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO29CQUN0QyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtpQkFDOUM7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56QWZmaXhNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2FmZml4JztcclxuaW1wb3J0IHsgTnpBbGVydE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYWxlcnQnO1xyXG5pbXBvcnQgeyBOekFuY2hvck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYW5jaG9yJztcclxuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2F1dG8tY29tcGxldGUnO1xyXG5pbXBvcnQgeyBOekF2YXRhck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYXZhdGFyJztcclxuaW1wb3J0IHsgTnpCYWNrVG9wTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9iYWNrLXRvcCc7XHJcbmltcG9ydCB7IE56QmFkZ2VNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2JhZGdlJztcclxuaW1wb3J0IHsgTnpCcmVhZENydW1iTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9icmVhZGNydW1iJztcclxuaW1wb3J0IHsgTnpCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NhbGVuZGFyJztcclxuaW1wb3J0IHsgTnpDYXJkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jYXJkJztcclxuaW1wb3J0IHsgTnpDYXJvdXNlbE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2Fyb3VzZWwnO1xyXG5pbXBvcnQgeyBOekNhc2NhZGVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jYXNjYWRlcic7XHJcbmltcG9ydCB7IE56Q2hlY2tib3hNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NoZWNrYm94JztcclxuaW1wb3J0IHsgTnpDb2xsYXBzZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29sbGFwc2UnO1xyXG5pbXBvcnQgeyBOekNvbW1lbnRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvbW1lbnQnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IE56VHJhbnNCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHJhbnMtYnV0dG9uJztcclxuaW1wb3J0IHsgTnpXYXZlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3dhdmUnO1xyXG5pbXBvcnQgeyBOekRhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyJztcclxuaW1wb3J0IHsgTnpEZXNjcmlwdGlvbnNNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Rlc2NyaXB0aW9ucyc7XHJcbmltcG9ydCB7IE56RGl2aWRlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGl2aWRlcic7XHJcbmltcG9ydCB7IE56RHJhd2VyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcmF3ZXInO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XHJcbmltcG9ydCB7IE56RW1wdHlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2VtcHR5JztcclxuaW1wb3J0IHsgTnpGb3JtTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9mb3JtJztcclxuaW1wb3J0IHsgTnpHcmlkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9ncmlkJztcclxuaW1wb3J0IHsgTlpfREFURV9MT0NBTEUsIE5aX0kxOE4sIE56STE4bk1vZHVsZSwgdmlfVk4gfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBOWl9JQ09OUywgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuaW1wb3J0IHsgTnpJbnB1dE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xyXG5pbXBvcnQgeyBOeklucHV0TnVtYmVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dC1udW1iZXInO1xyXG5pbXBvcnQgeyBOekxheW91dE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbGF5b3V0JztcclxuaW1wb3J0IHsgTnpMaXN0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9saXN0JztcclxuaW1wb3J0IHsgTnpNZW50aW9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW50aW9uJztcclxuaW1wb3J0IHsgTnpNZW51TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcclxuaW1wb3J0IHsgTnpNZXNzYWdlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcclxuaW1wb3J0IHsgTnpNb2RhbE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbm90aWZpY2F0aW9uJztcclxuaW1wb3J0IHsgTnpQYWdlSGVhZGVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlcic7XHJcbmltcG9ydCB7IE56UGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcGFnaW5hdGlvbic7XHJcbmltcG9ydCB7IE56UG9wY29uZmlybU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcG9wY29uZmlybSc7XHJcbmltcG9ydCB7IE56UG9wb3Zlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcG9wb3Zlcic7XHJcbmltcG9ydCB7IE56UHJvZ3Jlc3NNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Byb2dyZXNzJztcclxuaW1wb3J0IHsgTnpSYWRpb01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xyXG5pbXBvcnQgeyBOelJhdGVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3JhdGUnO1xyXG5pbXBvcnQgeyBOelJlc3VsdE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmVzdWx0JztcclxuaW1wb3J0IHsgTnpTZWxlY3RNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XHJcbmltcG9ydCB7IE56U2tlbGV0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NrZWxldG9uJztcclxuaW1wb3J0IHsgTnpTbGlkZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NsaWRlcic7XHJcbmltcG9ydCB7IE56U3Bpbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc3Bpbic7XHJcbmltcG9ydCB7IE56U3RhdGlzdGljTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zdGF0aXN0aWMnO1xyXG5pbXBvcnQgeyBOelN0ZXBzTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zdGVwcyc7XHJcbmltcG9ydCB7IE56U3dpdGNoTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zd2l0Y2gnO1xyXG5pbXBvcnQgeyBOelRhYmxlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XHJcbmltcG9ydCB7IE56VGFic01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFicyc7XHJcbmltcG9ydCB7IE56VGFnTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWcnO1xyXG5pbXBvcnQgeyBOelRpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RpbWUtcGlja2VyJztcclxuaW1wb3J0IHsgTnpUaW1lbGluZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGltZWxpbmUnO1xyXG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBOelRyYW5zZmVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmFuc2Zlcic7XHJcbmltcG9ydCB7IE56VHJlZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdHJlZSc7XHJcbmltcG9ydCB7IE56VHJlZVNlbGVjdE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdHJlZS1zZWxlY3QnO1xyXG5pbXBvcnQgeyBOelR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBOelVwbG9hZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdXBsb2FkJztcclxuaW1wb3J0IHsgTnpSZXNpemFibGVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Jlc2l6YWJsZSc7XHJcbmltcG9ydCB7IHZpIGFzIHZpRGF0ZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyTG9jYWxlRGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB2aSBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy92aSc7XHJcbmltcG9ydCAqIGFzIEFsbEljb25zIGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvaWNvbnMnO1xyXG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBOelNwYWNlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zcGFjZSc7XHJcblxyXG5yZWdpc3RlckxvY2FsZURhdGEodmkpO1xyXG5cclxuY29uc3QgYW50RGVzaWduSWNvbnMgPSBBbGxJY29ucyBhcyB7XHJcbiAgW2tleTogc3RyaW5nXTogSWNvbkRlZmluaXRpb247XHJcbn07XHJcbmNvbnN0IGljb25zOiBJY29uRGVmaW5pdGlvbltdID0gT2JqZWN0LmtleXMoYW50RGVzaWduSWNvbnMpLm1hcChrZXkgPT4gYW50RGVzaWduSWNvbnNba2V5XSk7XHJcbmNvbnN0IGFudE1vZHVsZSA9IFtcclxuICBOekFmZml4TW9kdWxlLFxyXG4gIE56QWxlcnRNb2R1bGUsXHJcbiAgTnpBbmNob3JNb2R1bGUsXHJcbiAgTnpBdXRvY29tcGxldGVNb2R1bGUsXHJcbiAgTnpBdmF0YXJNb2R1bGUsXHJcbiAgTnpCYWNrVG9wTW9kdWxlLFxyXG4gIE56QmFkZ2VNb2R1bGUsXHJcbiAgTnpCdXR0b25Nb2R1bGUsXHJcbiAgTnpCcmVhZENydW1iTW9kdWxlLFxyXG4gIE56Q2FsZW5kYXJNb2R1bGUsXHJcbiAgTnpDYXJkTW9kdWxlLFxyXG4gIE56Q2Fyb3VzZWxNb2R1bGUsXHJcbiAgTnpDYXNjYWRlck1vZHVsZSxcclxuICBOekNoZWNrYm94TW9kdWxlLFxyXG4gIE56Q29sbGFwc2VNb2R1bGUsXHJcbiAgTnpDb21tZW50TW9kdWxlLFxyXG4gIE56RGF0ZVBpY2tlck1vZHVsZSxcclxuICBOekRlc2NyaXB0aW9uc01vZHVsZSxcclxuICBOekRpdmlkZXJNb2R1bGUsXHJcbiAgTnpEcmF3ZXJNb2R1bGUsXHJcbiAgTnpEcm9wRG93bk1vZHVsZSxcclxuICBOekVtcHR5TW9kdWxlLFxyXG4gIE56Rm9ybU1vZHVsZSxcclxuICBOekdyaWRNb2R1bGUsXHJcbiAgTnpJMThuTW9kdWxlLFxyXG4gIE56SWNvbk1vZHVsZSxcclxuICBOeklucHV0TW9kdWxlLFxyXG4gIE56SW5wdXROdW1iZXJNb2R1bGUsXHJcbiAgTnpMYXlvdXRNb2R1bGUsXHJcbiAgTnpMaXN0TW9kdWxlLFxyXG4gIE56TWVudGlvbk1vZHVsZSxcclxuICBOek1lbnVNb2R1bGUsXHJcbiAgTnpNZXNzYWdlTW9kdWxlLFxyXG4gIE56TW9kYWxNb2R1bGUsXHJcbiAgTnpOb0FuaW1hdGlvbk1vZHVsZSxcclxuICBOek5vdGlmaWNhdGlvbk1vZHVsZSxcclxuICBOelBhZ2VIZWFkZXJNb2R1bGUsXHJcbiAgTnpQYWdpbmF0aW9uTW9kdWxlLFxyXG4gIE56UG9wY29uZmlybU1vZHVsZSxcclxuICBOelBvcG92ZXJNb2R1bGUsXHJcbiAgTnpQcm9ncmVzc01vZHVsZSxcclxuICBOelJhZGlvTW9kdWxlLFxyXG4gIE56UmF0ZU1vZHVsZSxcclxuICBOelJlc3VsdE1vZHVsZSxcclxuICBOelNlbGVjdE1vZHVsZSxcclxuICBOelNrZWxldG9uTW9kdWxlLFxyXG4gIE56U2xpZGVyTW9kdWxlLFxyXG4gIE56U3Bpbk1vZHVsZSxcclxuICBOelN0YXRpc3RpY01vZHVsZSxcclxuICBOelN0ZXBzTW9kdWxlLFxyXG4gIE56U3dpdGNoTW9kdWxlLFxyXG4gIE56VGFibGVNb2R1bGUsXHJcbiAgTnpUYWJzTW9kdWxlLFxyXG4gIE56VGFnTW9kdWxlLFxyXG4gIE56VGltZVBpY2tlck1vZHVsZSxcclxuICBOelRpbWVsaW5lTW9kdWxlLFxyXG4gIE56VG9vbFRpcE1vZHVsZSxcclxuICBOelRyYW5zQnV0dG9uTW9kdWxlLFxyXG4gIE56VHJhbnNmZXJNb2R1bGUsXHJcbiAgTnpUcmVlTW9kdWxlLFxyXG4gIE56VHJlZVNlbGVjdE1vZHVsZSxcclxuICBOelR5cG9ncmFwaHlNb2R1bGUsXHJcbiAgTnpVcGxvYWRNb2R1bGUsXHJcbiAgTnpXYXZlTW9kdWxlLFxyXG4gIE56UmVzaXphYmxlTW9kdWxlLFxyXG4gIE56U3BhY2VNb2R1bGVcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxuICBleHBvcnRzOiBbYW50TW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHsgcHJvdmlkZTogTlpfSTE4TiwgdXNlVmFsdWU6IHZpX1ZOIH0sXHJcbiAgICB7IHByb3ZpZGU6IE5aX0lDT05TLCB1c2VWYWx1ZTogaWNvbnMgfSxcclxuICAgIHsgcHJvdmlkZTogTlpfREFURV9MT0NBTEUsIHVzZVZhbHVlOiB2aURhdGUgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFudERlc2lnbk1vZHVsZSB7XHJcbn1cclxuIl19