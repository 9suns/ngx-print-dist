/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
export class NgxPrintDirective {
    constructor() {
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
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @param {?} values
     * @return {?}
     */
    set printStyle(values) {
        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
            }
        }
        this.returnStyleValues();
    }
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
    returnStyleValues() {
        /** @type {?} */
        let pageUnit = this.pageMarginUnit == null ? "mm" : this.pageMarginUnit;
        /** @type {?} */
        let pageStyles = [];
        if (this.pageMarginLeft)
            pageStyles.push("margin-left:" + this.pageMarginLeft + pageUnit + ";");
        if (this.pageMarginRight)
            pageStyles.push("margin-right:" + this.pageMarginRight + pageUnit + ";");
        if (this.pageMarginTop)
            pageStyles.push("margin-top:" + this.pageMarginTop + pageUnit + ";");
        if (this.pageMarginBottom)
            pageStyles.push("margin-bottom:" + this.pageMarginBottom + pageUnit + ";");
        return `<style>@page{ ${pageStyles.join(' ')} }</style>` + `<style> ${this._printStyle.join(' ').replace(/,/g, ';')} </style>`;
    }
    /**
     * \@memberof NgxPrintDirective
     * @param {?} cssList
     * @return {?}
     */
    set styleSheetFile(cssList) {
        /** @type {?} */
        let linkTagFn = (/**
         * @param {?} cssFileName
         * @return {?}
         */
        function (cssFileName) {
            return `<link rel="stylesheet" type="text/css" href="${cssFileName}">`;
        });
        if (cssList.indexOf(',') !== -1) {
            /** @type {?} */
            const valueArr = cssList.split(',');
            for (let val of valueArr) {
                this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
            }
        }
        else {
            this._styleSheetFile = linkTagFn(cssList);
        }
    }
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    returnStyleSheetLinkTags() {
        return this._styleSheetFile;
    }
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    getElementTag(tag) {
        /** @type {?} */
        const html = [];
        /** @type {?} */
        const elements = document.getElementsByTagName(tag);
        for (let index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    }
    /**
     * @private
     * @return {?} html section to be printed along with some associated inputs
     *
     */
    getHtmlContents() {
        /** @type {?} */
        let printContents = document.getElementById(this.printSectionId);
        /** @type {?} */
        let innards = printContents.getElementsByTagName('input');
        for (var i = 0; i < innards.length; i++) {
            innards[i].defaultValue = innards[i].value;
        }
        return printContents.innerHTML;
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    print() {
        /** @type {?} */
        let printContents;
        /** @type {?} */
        let popupWin;
        /** @type {?} */
        let styles = '';
        /** @type {?} */
        let links = '';
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = this.getHtmlContents();
        popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
          <title>${this.printTitle ? this.printTitle : ""}</title>
          ${this.returnStyleValues()}
          ${this.returnStyleSheetLinkTags()}
          ${styles}
          ${links}
        </head>
        <body>
          ${printContents}
          <script defer>
            function triggerPrint(event) {
              window.removeEventListener('load', triggerPrint, false);
              setTimeout(function() {
                window.print();
                setTimeout(function() { window.close(); }, 0);
              }, ${this.printDelay});
            }
            window.addEventListener('load', triggerPrint, false);
          </script>
        </body>
      </html>`);
        popupWin.document.close();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJL0QsTUFBTSxPQUFPLGlCQUFpQjtJQUg5QjtRQUtTLGdCQUFXLEdBQUcsRUFBRSxDQUFDOzs7Ozs7UUFxQmYsbUJBQWMsR0FBRyxLQUFLLENBQUM7Ozs7OztRQU92QixlQUFVLEdBQVcsQ0FBQyxDQUFDOzs7OztRQU12QixtQkFBYyxHQUFXLElBQUksQ0FBQzs7Ozs7UUFNOUIsb0JBQWUsR0FBVyxJQUFJLENBQUM7Ozs7O1FBTS9CLGtCQUFhLEdBQVcsSUFBSSxDQUFDOzs7OztRQU03QixxQkFBZ0IsR0FBVyxJQUFJLENBQUM7Ozs7O1FBTWhDLG1CQUFjLEdBQVcsSUFBSSxDQUFDOzs7Ozs7OztRQWlEL0Isb0JBQWUsR0FBRyxFQUFFLENBQUM7SUE2Ri9CLENBQUM7Ozs7Ozs7O0lBdklDLElBQ0ksVUFBVSxDQUFDLE1BQW9EO1FBQ2pFLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO1lBQ3RCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNoRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7Ozs7Ozs7SUFZSSxpQkFBaUI7O1lBQ2xCLFFBQVEsR0FBRSxJQUFJLENBQUMsY0FBYyxJQUFF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QUFnQzs7Ozs7OztJQU9oQyx1Q0FBZ0M7Ozs7OztJQU1oQywyQ0FBdUM7Ozs7OztJQU12Qyw0Q0FBd0M7Ozs7OztJQU14QywwQ0FBc0M7Ozs7OztJQU10Qyw2Q0FBeUM7Ozs7OztJQU16QywyQ0FBdUM7Ozs7Ozs7Ozs7SUFpRHZDLDRDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcImJ1dHRvbltuZ3hQcmludF1cIlxufSlcbmV4cG9ydCBjbGFzcyBOZ3hQcmludERpcmVjdGl2ZSB7XG5cbiAgcHVibGljIF9wcmludFN0eWxlID0gW107XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgcHJpbnRTZWN0aW9uSWQ6IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSBwcmludFRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgdXNlRXhpc3RpbmdDc3MgPSBmYWxzZTtcblxuICAvKipcbiAgICogQSBkZWxheSBpbiBtaWxsaXNlY29uZHMgdG8gZm9yY2UgdGhlIHByaW50IGRpYWxvZyB0byB3YWl0IGJlZm9yZSBvcGVuZWQuIERlZmF1bHQ6IDBcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSBwcmludERlbGF5OiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBQYWdlIG1hcmdpbiBsZWZ0LCBkZWZhdWx0IHVuaXQ6bW1cbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSBwYWdlTWFyZ2luTGVmdDogbnVtYmVyID0gbnVsbDtcblxuICAvKipcbiAgICogUGFnZSBtYXJnaW4gcmlnaHQsIGRlZmF1bHQgdW5pdDptbVxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHBhZ2VNYXJnaW5SaWdodDogbnVtYmVyID0gbnVsbDtcblxuICAvKipcbiAgICogUGFnZSBtYXJnaW4gdG9wLCBkZWZhdWx0IHVuaXQ6bW1cbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSBwYWdlTWFyZ2luVG9wOiBudW1iZXIgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBQYWdlIG1hcmdpbiBib3R0b20sIGRlZmF1bHQgdW5pdDptbVxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHBhZ2VNYXJnaW5Cb3R0b206IG51bWJlciA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFBhZ2UgbWFyZ2luIGJvdHRvbSwgZGVmYXVsdCB1bml0Om1tXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgcGFnZU1hcmdpblVuaXQ6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHByaW50U3R5bGUodmFsdWVzOiB7IFtrZXk6IHN0cmluZ106IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfSkge1xuICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdGhpcy5fcHJpbnRTdHlsZS5wdXNoKChrZXkgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZXNba2V5XSkpLnJlcGxhY2UoL1snXCJdKy9nLCAnJykpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJldHVyblN0eWxlVmFsdWVzKCk7XG4gIH1cblxuLyoqXG4gKlxuICpcbiAqIEByZXR1cm5zIHRoZSBzdHJpbmcgdGhhdCBjcmVhdGUgdGhlIHN0eWxlc2hlZXQgd2hpY2ggd2lsbCBiZSBpbmplY3RlZFxuICogbGF0ZXIgd2l0aGluIDxzdHlsZT48L3N0eWxlPiB0YWcuXG4gKlxuICogLWpvaW4vcmVwbGFjZSB0byB0cmFuc2Zvcm0gYW4gYXJyYXkgb2JqZWN0cyB0byBjc3Mtc3R5bGVkIHN0cmluZ1xuICpcbiAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICovXG5wdWJsaWMgcmV0dXJuU3R5bGVWYWx1ZXMoKSB7XG4gIGxldCBwYWdlVW5pdCA9dGhpcy5wYWdlTWFyZ2luVW5pdD09bnVsbD9cIm1tXCI6dGhpcy5wYWdlTWFyZ2luVW5pdDtcbiAgbGV0IHBhZ2VTdHlsZXMgPSBbXTtcbiAgaWYodGhpcy5wYWdlTWFyZ2luTGVmdClcbiAgICBwYWdlU3R5bGVzLnB1c2goXCJtYXJnaW4tbGVmdDpcIiArIHRoaXMucGFnZU1hcmdpbkxlZnQgKyBwYWdlVW5pdCArIFwiO1wiKVxuICBpZih0aGlzLnBhZ2VNYXJnaW5SaWdodClcbiAgICBwYWdlU3R5bGVzLnB1c2goXCJtYXJnaW4tcmlnaHQ6XCIgKyB0aGlzLnBhZ2VNYXJnaW5SaWdodCArIHBhZ2VVbml0ICsgXCI7XCIpXG4gIGlmKHRoaXMucGFnZU1hcmdpblRvcClcbiAgICBwYWdlU3R5bGVzLnB1c2goXCJtYXJnaW4tdG9wOlwiICsgdGhpcy5wYWdlTWFyZ2luVG9wICsgcGFnZVVuaXQgKyBcIjtcIilcbiAgaWYodGhpcy5wYWdlTWFyZ2luQm90dG9tKVxuICAgIHBhZ2VTdHlsZXMucHVzaChcIm1hcmdpbi1ib3R0b206XCIgKyB0aGlzLnBhZ2VNYXJnaW5Cb3R0b20gKyBwYWdlVW5pdCArIFwiO1wiKVxuXG4gIHJldHVybiBgPHN0eWxlPkBwYWdleyAke3BhZ2VTdHlsZXMuam9pbignICcpfSB9PC9zdHlsZT5gICsgYDxzdHlsZT4gJHt0aGlzLl9wcmludFN0eWxlLmpvaW4oJyAnKS5yZXBsYWNlKC8sL2csJzsnKX0gPC9zdHlsZT5gO1xufVxuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAcmV0dXJucyBodG1sIGZvciB0aGUgZ2l2ZW4gdGFnXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgcHJpdmF0ZSBfc3R5bGVTaGVldEZpbGUgPSAnJztcblxuICAvKipcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqIEBwYXJhbSBjc3NMaXN0XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgc3R5bGVTaGVldEZpbGUoY3NzTGlzdDogc3RyaW5nKSB7XG4gICAgbGV0IGxpbmtUYWdGbiA9IGZ1bmN0aW9uKGNzc0ZpbGVOYW1lKSB7XG4gICAgICByZXR1cm4gYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiJHtjc3NGaWxlTmFtZX1cIj5gO1xuICAgIH1cbiAgICBpZiAoY3NzTGlzdC5pbmRleE9mKCcsJykgIT09IC0xKSB7XG4gICAgICBjb25zdCB2YWx1ZUFyciA9IGNzc0xpc3Quc3BsaXQoJywnKTtcbiAgICAgIGZvciAobGV0IHZhbCBvZiB2YWx1ZUFycikge1xuICAgICAgICB0aGlzLl9zdHlsZVNoZWV0RmlsZSA9IHRoaXMuX3N0eWxlU2hlZXRGaWxlICsgbGlua1RhZ0ZuKHZhbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0eWxlU2hlZXRGaWxlID0gbGlua1RhZ0ZuKGNzc0xpc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBzdHJpbmcgd2hpY2ggY29udGFpbnMgdGhlIGxpbmsgdGFncyBjb250YWluaW5nIHRoZSBjc3Mgd2hpY2ggd2lsbFxuICAgKiBiZSBpbmplY3RlZCBsYXRlciB3aXRoaW4gPGhlYWQ+PC9oZWFkPiB0YWcuXG4gICAqXG4gICAqL1xuICBwcml2YXRlIHJldHVyblN0eWxlU2hlZXRMaW5rVGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVTaGVldEZpbGU7XG4gIH1cbiAgcHJpdmF0ZSBnZXRFbGVtZW50VGFnKHRhZzoga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwKTogc3RyaW5nIHtcbiAgICBjb25zdCBodG1sOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBodG1sLnB1c2goZWxlbWVudHNbaW5kZXhdLm91dGVySFRNTCk7XG4gICAgfVxuICAgIHJldHVybiBodG1sLmpvaW4oJ1xcclxcbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIGh0bWwgc2VjdGlvbiB0byBiZSBwcmludGVkIGFsb25nIHdpdGggc29tZSBhc3NvY2lhdGVkIGlucHV0c1xuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRIdG1sQ29udGVudHMoKSB7XG4gICAgbGV0IHByaW50Q29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByaW50U2VjdGlvbklkKTtcbiAgICBsZXQgaW5uYXJkcyA9IHByaW50Q29udGVudHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGlubmFyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlubmFyZHNbaV0uZGVmYXVsdFZhbHVlID0gaW5uYXJkc1tpXS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHByaW50Q29udGVudHMuaW5uZXJIVE1MO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgcHJpbnQoKTogdm9pZCB7XG4gICAgbGV0IHByaW50Q29udGVudHMsIHBvcHVwV2luLCBzdHlsZXMgPSAnJywgbGlua3MgPSAnJztcblxuICAgIGlmKHRoaXMudXNlRXhpc3RpbmdDc3MpIHtcbiAgICAgIHN0eWxlcyA9IHRoaXMuZ2V0RWxlbWVudFRhZygnc3R5bGUnKTtcbiAgICAgIGxpbmtzID0gdGhpcy5nZXRFbGVtZW50VGFnKCdsaW5rJyk7XG4gICAgfVxuXG4gICAgcHJpbnRDb250ZW50cyA9IHRoaXMuZ2V0SHRtbENvbnRlbnRzKCk7XG4gICAgcG9wdXBXaW4gPSB3aW5kb3cub3BlbihcIlwiLCBcIl9ibGFua1wiLCBcInRvcD0wLGxlZnQ9MCxoZWlnaHQ9YXV0byx3aWR0aD1hdXRvXCIpO1xuICAgIHBvcHVwV2luLmRvY3VtZW50Lm9wZW4oKTtcbiAgICBwb3B1cFdpbi5kb2N1bWVudC53cml0ZShgXG4gICAgICA8aHRtbD5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPHRpdGxlPiR7dGhpcy5wcmludFRpdGxlID8gdGhpcy5wcmludFRpdGxlIDogXCJcIn08L3RpdGxlPlxuICAgICAgICAgICR7dGhpcy5yZXR1cm5TdHlsZVZhbHVlcygpfVxuICAgICAgICAgICR7dGhpcy5yZXR1cm5TdHlsZVNoZWV0TGlua1RhZ3MoKX1cbiAgICAgICAgICAke3N0eWxlc31cbiAgICAgICAgICAke2xpbmtzfVxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgICR7cHJpbnRDb250ZW50c31cbiAgICAgICAgICA8c2NyaXB0IGRlZmVyPlxuICAgICAgICAgICAgZnVuY3Rpb24gdHJpZ2dlclByaW50KGV2ZW50KSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgdHJpZ2dlclByaW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnByaW50KCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgd2luZG93LmNsb3NlKCk7IH0sIDApO1xuICAgICAgICAgICAgICB9LCAke3RoaXMucHJpbnREZWxheX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0cmlnZ2VyUHJpbnQsIGZhbHNlKTtcbiAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPmApO1xuICAgIHBvcHVwV2luLmRvY3VtZW50LmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==