/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, HostListener, Input } from '@angular/core';
var NgxPrintDirective = /** @class */ (function () {
    function NgxPrintDirective() {
        this._printStyle = [];
        /**
         *
         *
         * \@memberof NgxPrintDirective
         */
        this.useExistingCss = false;
        /**
         * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
         *
         * \@memberof NgxPrintDirective
         */
        this.printDelay = 0;
        /**
         * Page margin left, default unit:mm
         * \@memberof NgxPrintDirective
         */
        this.pageMarginLeft = null;
        /**
         * Page margin right, default unit:mm
         * \@memberof NgxPrintDirective
         */
        this.pageMarginRight = null;
        /**
         * Page margin top, default unit:mm
         * \@memberof NgxPrintDirective
         */
        this.pageMarginTop = null;
        /**
         * Page margin bottom, default unit:mm
         * \@memberof NgxPrintDirective
         */
        this.pageMarginBottom = null;
        /**
         * Page margin bottom, default unit:mm
         * \@memberof NgxPrintDirective
         */
        this.pageMarginUnit = null;
        /**
         *
         *
         * @return html for the given tag
         *
         * \@memberof NgxPrintDirective
         */
        this._styleSheetFile = '';
    }
    Object.defineProperty(NgxPrintDirective.prototype, "printStyle", {
        /**
         *
         *
         * @memberof NgxPrintDirective
         */
        set: /**
         *
         *
         * \@memberof NgxPrintDirective
         * @param {?} values
         * @return {?}
         */
        function (values) {
            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
                }
            }
            this.returnStyleValues();
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     *
     * @returns the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    NgxPrintDirective.prototype.returnStyleValues = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    function () {
        /** @type {?} */
        var pageUnit = this.pageMarginUnit == null ? "mm" : this.pageMarginUnit;
        /** @type {?} */
        var pageStyles = [];
        if (this.pageMarginLeft)
            pageStyles.push("margin-left:" + this.pageMarginLeft + pageUnit + ";");
        if (this.pageMarginRight)
            pageStyles.push("margin-right:" + this.pageMarginRight + pageUnit + ";");
        if (this.pageMarginTop)
            pageStyles.push("margin-top:" + this.pageMarginTop + pageUnit + ";");
        if (this.pageMarginBottom)
            pageStyles.push("margin-bottom:" + this.pageMarginBottom + pageUnit + ";");
        return "<style>@page{ " + pageStyles.join(' ') + " }</style>" + ("<style> " + this._printStyle.join(' ').replace(/,/g, ';') + " </style>");
    };
    Object.defineProperty(NgxPrintDirective.prototype, "styleSheetFile", {
        /**
         * @memberof NgxPrintDirective
         * @param cssList
         */
        set: /**
         * \@memberof NgxPrintDirective
         * @param {?} cssList
         * @return {?}
         */
        function (cssList) {
            var e_1, _a;
            /** @type {?} */
            var linkTagFn = (/**
             * @param {?} cssFileName
             * @return {?}
             */
            function (cssFileName) {
                return "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssFileName + "\">";
            });
            if (cssList.indexOf(',') !== -1) {
                /** @type {?} */
                var valueArr = cssList.split(',');
                try {
                    for (var valueArr_1 = tslib_1.__values(valueArr), valueArr_1_1 = valueArr_1.next(); !valueArr_1_1.done; valueArr_1_1 = valueArr_1.next()) {
                        var val = valueArr_1_1.value;
                        this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (valueArr_1_1 && !valueArr_1_1.done && (_a = valueArr_1.return)) _a.call(valueArr_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                this._styleSheetFile = linkTagFn(cssList);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @returns string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    NgxPrintDirective.prototype.returnStyleSheetLinkTags = /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    function () {
        return this._styleSheetFile;
    };
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    NgxPrintDirective.prototype.getElementTag = /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        /** @type {?} */
        var html = [];
        /** @type {?} */
        var elements = document.getElementsByTagName(tag);
        for (var index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    };
    /**
     * @returns html section to be printed along with some associated inputs
     *
     */
    /**
     * @private
     * @return {?} html section to be printed along with some associated inputs
     *
     */
    NgxPrintDirective.prototype.getHtmlContents = /**
     * @private
     * @return {?} html section to be printed along with some associated inputs
     *
     */
    function () {
        /** @type {?} */
        var printContents = document.getElementById(this.printSectionId);
        /** @type {?} */
        var innards = printContents.getElementsByTagName('input');
        for (var i = 0; i < innards.length; i++) {
            innards[i].defaultValue = innards[i].value;
        }
        return printContents.innerHTML;
    };
    /**
     *
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    NgxPrintDirective.prototype.print = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    function () {
        /** @type {?} */
        var printContents;
        /** @type {?} */
        var popupWin;
        /** @type {?} */
        var styles = '';
        /** @type {?} */
        var links = '';
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = this.getHtmlContents();
        popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>" + (this.printTitle ? this.printTitle : "") + "</title>\n          " + this.returnStyleValues() + "\n          " + this.returnStyleSheetLinkTags() + "\n          " + styles + "\n          " + links + "\n        </head>\n        <body>\n          " + printContents + "\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              setTimeout(function() {\n                window.print();\n                setTimeout(function() { window.close(); }, 0);\n              }, " + this.printDelay + ");\n            }\n            window.addEventListener('load', triggerPrint, false);\n          </script>\n        </body>\n      </html>");
        popupWin.document.close();
    };
    NgxPrintDirective.decorators = [
        { type: Directive, args: [{
                    selector: "button[ngxPrint]"
                },] }
    ];
    NgxPrintDirective.propDecorators = {
        printSectionId: [{ type: Input }],
        printTitle: [{ type: Input }],
        useExistingCss: [{ type: Input }],
        printDelay: [{ type: Input }],
        pageMarginLeft: [{ type: Input }],
        pageMarginRight: [{ type: Input }],
        pageMarginTop: [{ type: Input }],
        pageMarginBottom: [{ type: Input }],
        pageMarginUnit: [{ type: Input }],
        printStyle: [{ type: Input }],
        styleSheetFile: [{ type: Input }],
        print: [{ type: HostListener, args: ['click',] }]
    };
    return NgxPrintDirective;
}());
export { NgxPrintDirective };
if (false) {
    /** @type {?} */
    NgxPrintDirective.prototype._printStyle;
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.printSectionId;
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.printTitle;
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.useExistingCss;
    /**
     * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.printDelay;
    /**
     * Page margin left, default unit:mm
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.pageMarginLeft;
    /**
     * Page margin right, default unit:mm
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.pageMarginRight;
    /**
     * Page margin top, default unit:mm
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.pageMarginTop;
    /**
     * Page margin bottom, default unit:mm
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.pageMarginBottom;
    /**
     * Page margin bottom, default unit:mm
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.pageMarginUnit;
    /**
     *
     *
     * \@return html for the given tag
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     * @private
     */
    NgxPrintDirective.prototype._styleSheetFile;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9EO0lBQUE7UUFLUyxnQkFBVyxHQUFHLEVBQUUsQ0FBQzs7Ozs7O1FBcUJmLG1CQUFjLEdBQUcsS0FBSyxDQUFDOzs7Ozs7UUFPdkIsZUFBVSxHQUFXLENBQUMsQ0FBQzs7Ozs7UUFNdkIsbUJBQWMsR0FBVyxJQUFJLENBQUM7Ozs7O1FBTTlCLG9CQUFlLEdBQVcsSUFBSSxDQUFDOzs7OztRQU0vQixrQkFBYSxHQUFXLElBQUksQ0FBQzs7Ozs7UUFNN0IscUJBQWdCLEdBQVcsSUFBSSxDQUFDOzs7OztRQU1oQyxtQkFBYyxHQUFXLElBQUksQ0FBQzs7Ozs7Ozs7UUFpRC9CLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBNkYvQixDQUFDO0lBdklDLHNCQUNJLHlDQUFVO1FBTmQ7Ozs7V0FJRzs7Ozs7Ozs7UUFDSCxVQUNlLE1BQW9EO1lBQ2pFLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO2dCQUN0QixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2hGO2FBQ0Y7WUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVIOzs7Ozs7Ozs7T0FTRzs7Ozs7Ozs7Ozs7SUFDSSw2Q0FBaUI7Ozs7Ozs7Ozs7SUFBeEI7O1lBQ00sUUFBUSxHQUFFLElBQUksQ0FBQyxjQUFjLElBQUUsSUFBSSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQyxjQUFjOztZQUM1RCxVQUFVLEdBQUcsRUFBRTtRQUNuQixJQUFHLElBQUksQ0FBQyxjQUFjO1lBQ3BCLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQ3hFLElBQUcsSUFBSSxDQUFDLGVBQWU7WUFDckIsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUE7UUFDMUUsSUFBRyxJQUFJLENBQUMsYUFBYTtZQUNuQixVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQTtRQUN0RSxJQUFHLElBQUksQ0FBQyxnQkFBZ0I7WUFDdEIsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBRTVFLE9BQU8sbUJBQWlCLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQVksSUFBRyxhQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLGNBQVcsQ0FBQSxDQUFDO0lBQ2hJLENBQUM7SUFlQyxzQkFDSSw2Q0FBYztRQUxsQjs7O1dBR0c7Ozs7OztRQUNILFVBQ21CLE9BQWU7OztnQkFDNUIsU0FBUzs7OztZQUFHLFVBQVMsV0FBVztnQkFDbEMsT0FBTyx1REFBZ0QsV0FBVyxRQUFJLENBQUM7WUFDekUsQ0FBQyxDQUFBO1lBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztvQkFDekIsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztvQkFDbkMsS0FBZ0IsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTt3QkFBckIsSUFBSSxHQUFHLHFCQUFBO3dCQUNWLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQzlEOzs7Ozs7Ozs7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzQztRQUNILENBQUM7OztPQUFBO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNLLG9EQUF3Qjs7Ozs7O0lBQWhDO1FBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUNPLHlDQUFhOzs7OztJQUFyQixVQUFzQixHQUFnQzs7WUFDOUMsSUFBSSxHQUFhLEVBQUU7O1lBQ25CLFFBQVEsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDO1FBQ25ELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNLLDJDQUFlOzs7OztJQUF2Qjs7WUFDTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDOztZQUM1RCxPQUFPLEdBQUcsYUFBYSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztRQUN6RCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDNUM7UUFDRCxPQUFPLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFFSSxpQ0FBSzs7Ozs7O0lBRFo7O1lBRU0sYUFBYTs7WUFBRSxRQUFROztZQUFFLE1BQU0sR0FBRyxFQUFFOztZQUFFLEtBQUssR0FBRyxFQUFFO1FBRXBELElBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN0QixNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQztRQUVELGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO1FBQzVFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsdURBR1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSw2QkFDN0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLG9CQUN4QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsb0JBQy9CLE1BQU0sb0JBQ04sS0FBSyxxREFHTCxhQUFhLGlUQU9OLElBQUksQ0FBQyxVQUFVLDhJQUtwQixDQUFDLENBQUM7UUFDWixRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7O2dCQTVNRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7OztpQ0FVRSxLQUFLOzZCQU9MLEtBQUs7aUNBT0wsS0FBSzs2QkFPTCxLQUFLO2lDQU1MLEtBQUs7a0NBTUwsS0FBSztnQ0FNTCxLQUFLO21DQU1MLEtBQUs7aUNBTUwsS0FBSzs2QkFPTCxLQUFLO2lDQWdETCxLQUFLO3dCQWtETCxZQUFZLFNBQUMsT0FBTzs7SUFxQ3ZCLHdCQUFDO0NBQUEsQUE3TUQsSUE2TUM7U0ExTVksaUJBQWlCOzs7SUFFNUIsd0NBQXdCOzs7Ozs7O0lBT3hCLDJDQUFnQzs7Ozs7OztJQU9oQyx1Q0FBNEI7Ozs7Ozs7SUFPNUIsMkNBQWdDOzs7Ozs7O0lBT2hDLHVDQUFnQzs7Ozs7O0lBTWhDLDJDQUF1Qzs7Ozs7O0lBTXZDLDRDQUF3Qzs7Ozs7O0lBTXhDLDBDQUFzQzs7Ozs7O0lBTXRDLDZDQUF5Qzs7Ozs7O0lBTXpDLDJDQUF1Qzs7Ozs7Ozs7OztJQWlEdkMsNENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiYnV0dG9uW25neFByaW50XVwiXG59KVxuZXhwb3J0IGNsYXNzIE5neFByaW50RGlyZWN0aXZlIHtcblxuICBwdWJsaWMgX3ByaW50U3R5bGUgPSBbXTtcblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSBwcmludFNlY3Rpb25JZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHByaW50VGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSB1c2VFeGlzdGluZ0NzcyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGRlbGF5IGluIG1pbGxpc2Vjb25kcyB0byBmb3JjZSB0aGUgcHJpbnQgZGlhbG9nIHRvIHdhaXQgYmVmb3JlIG9wZW5lZC4gRGVmYXVsdDogMFxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHByaW50RGVsYXk6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFBhZ2UgbWFyZ2luIGxlZnQsIGRlZmF1bHQgdW5pdDptbVxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHBhZ2VNYXJnaW5MZWZ0OiBudW1iZXIgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBQYWdlIG1hcmdpbiByaWdodCwgZGVmYXVsdCB1bml0Om1tXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgcGFnZU1hcmdpblJpZ2h0OiBudW1iZXIgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBQYWdlIG1hcmdpbiB0b3AsIGRlZmF1bHQgdW5pdDptbVxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHBhZ2VNYXJnaW5Ub3A6IG51bWJlciA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFBhZ2UgbWFyZ2luIGJvdHRvbSwgZGVmYXVsdCB1bml0Om1tXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgcGFnZU1hcmdpbkJvdHRvbTogbnVtYmVyID0gbnVsbDtcblxuICAvKipcbiAgICogUGFnZSBtYXJnaW4gYm90dG9tLCBkZWZhdWx0IHVuaXQ6bW1cbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSBwYWdlTWFyZ2luVW5pdDogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgcHJpbnRTdHlsZSh2YWx1ZXM6IHsgW2tleTogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB9KSB7XG4gICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB0aGlzLl9wcmludFN0eWxlLnB1c2goKGtleSArIEpTT04uc3RyaW5naWZ5KHZhbHVlc1trZXldKSkucmVwbGFjZSgvWydcIl0rL2csICcnKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmV0dXJuU3R5bGVWYWx1ZXMoKTtcbiAgfVxuXG4vKipcbiAqXG4gKlxuICogQHJldHVybnMgdGhlIHN0cmluZyB0aGF0IGNyZWF0ZSB0aGUgc3R5bGVzaGVldCB3aGljaCB3aWxsIGJlIGluamVjdGVkXG4gKiBsYXRlciB3aXRoaW4gPHN0eWxlPjwvc3R5bGU+IHRhZy5cbiAqXG4gKiAtam9pbi9yZXBsYWNlIHRvIHRyYW5zZm9ybSBhbiBhcnJheSBvYmplY3RzIHRvIGNzcy1zdHlsZWQgc3RyaW5nXG4gKlxuICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gKi9cbnB1YmxpYyByZXR1cm5TdHlsZVZhbHVlcygpIHtcbiAgbGV0IHBhZ2VVbml0ID10aGlzLnBhZ2VNYXJnaW5Vbml0PT1udWxsP1wibW1cIjp0aGlzLnBhZ2VNYXJnaW5Vbml0O1xuICBsZXQgcGFnZVN0eWxlcyA9IFtdO1xuICBpZih0aGlzLnBhZ2VNYXJnaW5MZWZ0KVxuICAgIHBhZ2VTdHlsZXMucHVzaChcIm1hcmdpbi1sZWZ0OlwiICsgdGhpcy5wYWdlTWFyZ2luTGVmdCArIHBhZ2VVbml0ICsgXCI7XCIpXG4gIGlmKHRoaXMucGFnZU1hcmdpblJpZ2h0KVxuICAgIHBhZ2VTdHlsZXMucHVzaChcIm1hcmdpbi1yaWdodDpcIiArIHRoaXMucGFnZU1hcmdpblJpZ2h0ICsgcGFnZVVuaXQgKyBcIjtcIilcbiAgaWYodGhpcy5wYWdlTWFyZ2luVG9wKVxuICAgIHBhZ2VTdHlsZXMucHVzaChcIm1hcmdpbi10b3A6XCIgKyB0aGlzLnBhZ2VNYXJnaW5Ub3AgKyBwYWdlVW5pdCArIFwiO1wiKVxuICBpZih0aGlzLnBhZ2VNYXJnaW5Cb3R0b20pXG4gICAgcGFnZVN0eWxlcy5wdXNoKFwibWFyZ2luLWJvdHRvbTpcIiArIHRoaXMucGFnZU1hcmdpbkJvdHRvbSArIHBhZ2VVbml0ICsgXCI7XCIpXG5cbiAgcmV0dXJuIGA8c3R5bGU+QHBhZ2V7ICR7cGFnZVN0eWxlcy5qb2luKCcgJyl9IH08L3N0eWxlPmAgKyBgPHN0eWxlPiAke3RoaXMuX3ByaW50U3R5bGUuam9pbignICcpLnJlcGxhY2UoLywvZywnOycpfSA8L3N0eWxlPmA7XG59XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEByZXR1cm5zIGh0bWwgZm9yIHRoZSBnaXZlbiB0YWdcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBwcml2YXRlIF9zdHlsZVNoZWV0RmlsZSA9ICcnO1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICogQHBhcmFtIGNzc0xpc3RcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBzdHlsZVNoZWV0RmlsZShjc3NMaXN0OiBzdHJpbmcpIHtcbiAgICBsZXQgbGlua1RhZ0ZuID0gZnVuY3Rpb24oY3NzRmlsZU5hbWUpIHtcbiAgICAgIHJldHVybiBgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIke2Nzc0ZpbGVOYW1lfVwiPmA7XG4gICAgfVxuICAgIGlmIChjc3NMaXN0LmluZGV4T2YoJywnKSAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHZhbHVlQXJyID0gY3NzTGlzdC5zcGxpdCgnLCcpO1xuICAgICAgZm9yIChsZXQgdmFsIG9mIHZhbHVlQXJyKSB7XG4gICAgICAgIHRoaXMuX3N0eWxlU2hlZXRGaWxlID0gdGhpcy5fc3R5bGVTaGVldEZpbGUgKyBsaW5rVGFnRm4odmFsKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3R5bGVTaGVldEZpbGUgPSBsaW5rVGFnRm4oY3NzTGlzdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHN0cmluZyB3aGljaCBjb250YWlucyB0aGUgbGluayB0YWdzIGNvbnRhaW5pbmcgdGhlIGNzcyB3aGljaCB3aWxsXG4gICAqIGJlIGluamVjdGVkIGxhdGVyIHdpdGhpbiA8aGVhZD48L2hlYWQ+IHRhZy5cbiAgICpcbiAgICovXG4gIHByaXZhdGUgcmV0dXJuU3R5bGVTaGVldExpbmtUYWdzKCkge1xuICAgIHJldHVybiB0aGlzLl9zdHlsZVNoZWV0RmlsZTtcbiAgfVxuICBwcml2YXRlIGdldEVsZW1lbnRUYWcodGFnOiBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXApOiBzdHJpbmcge1xuICAgIGNvbnN0IGh0bWw6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGh0bWwucHVzaChlbGVtZW50c1tpbmRleF0ub3V0ZXJIVE1MKTtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWwuam9pbignXFxyXFxuJyk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgaHRtbCBzZWN0aW9uIHRvIGJlIHByaW50ZWQgYWxvbmcgd2l0aCBzb21lIGFzc29jaWF0ZWQgaW5wdXRzXG4gICAqXG4gICAqL1xuICBwcml2YXRlIGdldEh0bWxDb250ZW50cygpIHtcbiAgICBsZXQgcHJpbnRDb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJpbnRTZWN0aW9uSWQpO1xuICAgIGxldCBpbm5hcmRzID0gcHJpbnRDb250ZW50cy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgaW5uYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaW5uYXJkc1tpXS5kZWZhdWx0VmFsdWUgPSBpbm5hcmRzW2ldLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcHJpbnRDb250ZW50cy5pbm5lckhUTUw7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBwcmludCgpOiB2b2lkIHtcbiAgICBsZXQgcHJpbnRDb250ZW50cywgcG9wdXBXaW4sIHN0eWxlcyA9ICcnLCBsaW5rcyA9ICcnO1xuXG4gICAgaWYodGhpcy51c2VFeGlzdGluZ0Nzcykge1xuICAgICAgc3R5bGVzID0gdGhpcy5nZXRFbGVtZW50VGFnKCdzdHlsZScpO1xuICAgICAgbGlua3MgPSB0aGlzLmdldEVsZW1lbnRUYWcoJ2xpbmsnKTtcbiAgICB9XG5cbiAgICBwcmludENvbnRlbnRzID0gdGhpcy5nZXRIdG1sQ29udGVudHMoKTtcbiAgICBwb3B1cFdpbiA9IHdpbmRvdy5vcGVuKFwiXCIsIFwiX2JsYW5rXCIsIFwidG9wPTAsbGVmdD0wLGhlaWdodD1hdXRvLHdpZHRoPWF1dG9cIik7XG4gICAgcG9wdXBXaW4uZG9jdW1lbnQub3BlbigpO1xuICAgIHBvcHVwV2luLmRvY3VtZW50LndyaXRlKGBcbiAgICAgIDxodG1sPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICA8dGl0bGU+JHt0aGlzLnByaW50VGl0bGUgPyB0aGlzLnByaW50VGl0bGUgOiBcIlwifTwvdGl0bGU+XG4gICAgICAgICAgJHt0aGlzLnJldHVyblN0eWxlVmFsdWVzKCl9XG4gICAgICAgICAgJHt0aGlzLnJldHVyblN0eWxlU2hlZXRMaW5rVGFncygpfVxuICAgICAgICAgICR7c3R5bGVzfVxuICAgICAgICAgICR7bGlua3N9XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgJHtwcmludENvbnRlbnRzfVxuICAgICAgICAgIDxzY3JpcHQgZGVmZXI+XG4gICAgICAgICAgICBmdW5jdGlvbiB0cmlnZ2VyUHJpbnQoZXZlbnQpIHtcbiAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0cmlnZ2VyUHJpbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucHJpbnQoKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB3aW5kb3cuY2xvc2UoKTsgfSwgMCk7XG4gICAgICAgICAgICAgIH0sICR7dGhpcy5wcmludERlbGF5fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRyaWdnZXJQcmludCwgZmFsc2UpO1xuICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+YCk7XG4gICAgcG9wdXBXaW4uZG9jdW1lbnQuY2xvc2UoKTtcbiAgfVxufVxuIl19