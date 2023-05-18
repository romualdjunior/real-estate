"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_about_about_module_ts"],{

/***/ 88057:
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 44518);




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 46985:
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 88057);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page */ 44518);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);








let AboutPageModule = class AboutPageModule {
};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage]
    })
], AboutPageModule);



/***/ }),

/***/ 44518:
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _about_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page.html?ngResource */ 4687);
/* harmony import */ var _about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss?ngResource */ 33792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AboutPage = class AboutPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutPage.ctorParameters = () => [];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _about_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutPage);



/***/ }),

/***/ 33792:
/*!**************************************************!*\
  !*** ./src/app/about/about.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-color-light);\n  padding: 0;\n  margin: 0;\n}\n\nion-card {\n  box-shadow: none;\n}\n\nion-card.pb-32 {\n  padding-bottom: 32px;\n}\n\np.text {\n  font-size: 17px;\n  letter-spacing: 0.4px;\n}\n\np.text.pt-32 {\n  padding-top: 32px;\n}\n\n.about-container {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\n.heading-card {\n  font-size: 42px;\n  font-weight: bold;\n  color: black;\n  -webkit-text-fill-color: var(--ion-color-light-tint);\n  /* Will override color (regardless of order) */\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: var(--ion-color-primary-shade);\n}\n\n.separator-line {\n  padding: 3px;\n  width: 250px;\n  border-radius: 2px;\n  background: var(--ion-color-primary);\n}\n\n.map-container {\n  display: flex;\n  justify-content: center;\n}\n\n.try-us-section {\n  display: flex;\n  justify-content: center;\n  padding: 100px 0;\n  margin: 52px 0 0 0;\n  background: url('about-bg-contact.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.feature-section ion-card-title {\n  font-size: 18px;\n}\n\n.feature-section ion-card-title.heading-card {\n  font-size: 42px;\n  font-weight: bold;\n}\n\n.feature-section ion-card-title ion-text {\n  font-weight: bold;\n  font-size: 32px;\n}\n\n.feature-section .features {\n  display: flex;\n  justify-content: center;\n  height: 300px;\n}\n\n.contact-section {\n  background: var(--ion-color-primary);\n  background: url('about-bg-contact.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: left;\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 16px 0;\n}\n\n.contact-section .left-side {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.contact-section .left-side .heading {\n  font-size: 32px;\n  color: aliceblue;\n  font-weight: 700;\n}\n\n.contact-section .left-side .sub-heading {\n  color: #c9ccce;\n  letter-spacing: 0.8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxUcmF2YWlsJTIwcGVyc29ubmVsXFxCYWNrZW5kXFxyZWFsLWVzdGF0ZS1tYW5hZ2VtZW50XFxmcm9udGVuZFxcc3JjXFxhcHBcXGFib3V0XFxhYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBRERFO0VBQ0Usb0JBQUE7QUNHSjs7QURBQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQ0dGOztBREZFO0VBQ0UsaUJBQUE7QUNJSjs7QUREQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtFQUNBLG9EQUFBO0VBRUcsOENBQUE7RUFDSCw4QkFBQTtFQUNBLHlEQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUNFRjs7QURBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0dGOztBREFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDRUY7O0FERUU7RUFDRSxlQUFBO0FDQ0o7O0FEQUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNFTjs7QURBSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0VOOztBRENFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREdBO0VBQ0Usb0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNERjs7QURFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ047O0FEQ0k7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNDTiIsImZpbGUiOiJhYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gICYucGItMzIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgfVxyXG59XHJcbnAudGV4dCB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxuICAmLnB0LTMyIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xyXG4gIH1cclxufVxyXG4uYWJvdXQtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDE2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmhlYWRpbmctY2FyZCB7XHJcbiAgZm9udC1zaXplOiA0MnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcihcclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnRcclxuICApOyAvKiBXaWxsIG92ZXJyaWRlIGNvbG9yIChyZWdhcmRsZXNzIG9mIG9yZGVyKSAqL1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDJweDtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3ItbGluZSB7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbi5tYXAtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udHJ5LXVzLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTAwcHggMDtcclxuICBtYXJnaW46IDUycHggMCAwIDA7XHJcblxyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0L2Fib3V0LWJnLWNvbnRhY3Quc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmVhdHVyZS1zZWN0aW9uIHtcclxuICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAmLmhlYWRpbmctY2FyZCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBpb24tdGV4dCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mZWF0dXJlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhY3Qtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0L2Fib3V0LWJnLWNvbnRhY3Quc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuXHJcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMTZweCAwO1xyXG4gIC5sZWZ0LXNpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICAgIC5zdWItaGVhZGluZyB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjAxLCAyMDQsIDIwNik7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuaW9uLWNhcmQucGItMzIge1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn1cblxucC50ZXh0IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG59XG5wLnRleHQucHQtMzIge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbn1cblxuLmFib3V0LWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmhlYWRpbmctY2FyZCB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgLyogV2lsbCBvdmVycmlkZSBjb2xvciAocmVnYXJkbGVzcyBvZiBvcmRlcikgKi9cbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMnB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG59XG5cbi5zZXBhcmF0b3ItbGluZSB7XG4gIHBhZGRpbmc6IDNweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm1hcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRyeS11cy1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwMHB4IDA7XG4gIG1hcmdpbjogNTJweCAwIDAgMDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQvYWJvdXQtYmctY29udGFjdC5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5mZWF0dXJlLXNlY3Rpb24gaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZmVhdHVyZS1zZWN0aW9uIGlvbi1jYXJkLXRpdGxlLmhlYWRpbmctY2FyZCB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZmVhdHVyZS1zZWN0aW9uIGlvbi1jYXJkLXRpdGxlIGlvbi10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cbi5mZWF0dXJlLXNlY3Rpb24gLmZlYXR1cmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5jb250YWN0LXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0L2Fib3V0LWJnLWNvbnRhY3Quc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxNnB4IDA7XG59XG4uY29udGFjdC1zZWN0aW9uIC5sZWZ0LXNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWN0LXNlY3Rpb24gLmxlZnQtc2lkZSAuaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5jb250YWN0LXNlY3Rpb24gLmxlZnQtc2lkZSAuc3ViLWhlYWRpbmcge1xuICBjb2xvcjogI2M5Y2NjZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xufSJdfQ== */";

/***/ }),

/***/ 4687:
/*!**************************************************!*\
  !*** ./src/app/about/about.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>About Page</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"about-container\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-card color=\"light\" class=\"ion-margin-top pb-32\">\r\n            <ion-card-header>\r\n              <ion-card-title class=\"heading-card\">Application</ion-card-title>\r\n            </ion-card-header>\r\n            <div class=\"separator-line\"></div>\r\n            <ion-card-content class=\"ion-padding-horizontal\">\r\n              <p class=\"text\">\r\n                <ion-text color=\"dark\">\r\n                  A online property management solution for real estate and\r\n                  physical property management. This can include residential,\r\n                  commercial, and land real estate. a software developed to\r\n                  connect property managers and potential buyers.\r\n                </ion-text>\r\n              </p>\r\n              <p class=\"text ion-padding-top\">\r\n                <ion-text color=\"dark\">\r\n                  Whether you operate 1 to 100 properties this app will help you\r\n                  advertise, manage and sell your properties to potential\r\n                  buyers.\r\n                </ion-text>\r\n              </p>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" sizeLg=\"6\" class=\"map-container\">\r\n          <img src=\"assets/images/about/about-map.svg\" alt=\"map image\" />\r\n        </ion-col>\r\n        <ion-col size=\"12\" sizeLg=\"6\">\r\n          <ion-card color=\"light\" class=\"pb-32\">\r\n            <ion-card-header>\r\n              <ion-card-title class=\"heading-card\">MAP VIEW</ion-card-title>\r\n            </ion-card-header>\r\n            <div class=\"separator-line\"></div>\r\n            <ion-card-content class=\"ion-padding-bottom\">\r\n              <p class=\"text\">\r\n                <ion-text color=\"dark\">\r\n                  Maps can be a useful tool for viewing properties location &\r\n                  filter them by types. this also help us to know distances so\r\n                  that we know how far away one thing is from another.\r\n                </ion-text>\r\n              </p>\r\n              <p class=\"text ion-padding-top\">\r\n                <ion-text color=\"dark\">\r\n                  You might not necessarily want to find the fastest route from\r\n                  property A to property B, you might want to take the scenic\r\n                  route. Knowing how to spot mountains, lakes, coastline and\r\n                  historic sites on a map helps you to plan which property to\r\n                  visit.\r\n                </ion-text>\r\n              </p>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div class=\"try-us-section\">\r\n    <ion-button color=\"success\" size=\"large\" routerLink=\"/user/register\"\r\n      >TRY US NOW</ion-button\r\n    >\r\n  </div>\r\n  <div class=\"about-container\">\r\n    <ion-grid class=\"feature-section\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-card color=\"light\" class=\"pb-32\">\r\n            <ion-card-header>\r\n              <ion-card-title class=\"heading-card\"> PROPERTIES </ion-card-title>\r\n            </ion-card-header>\r\n            <div class=\"separator-line\"></div>\r\n            <ion-card-content class=\"ion-padding-bottom\">\r\n              <p class=\"text\">\r\n                <ion-text color=\"dark\">\r\n                  <strong>\r\n                    Do you spend way too much time looking for a Real Estate\r\n                    Property to buy?\r\n                  </strong>\r\n                  <br />\r\n                  dont worry we have you covered, We have hundreds of high\r\n                  quality properties ready to sell. you can use the search field\r\n                  to find properties and to see basic information(price,\r\n                  address, types, etc...) about the desired property.\r\n                </ion-text>\r\n              </p>\r\n              <p class=\"text ion-padding-top\">\r\n                <ion-text color=\"dark\">\r\n                  <strong>Do you own a property you wanted to sell?</strong>\r\n                  <br />\r\n                  Our application will help advertise your property to potential\r\n                  buyers.\r\n                </ion-text>\r\n              </p>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" sizeLg=\"4\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title>\r\n                <ion-text color=\"primary\">Connect</ion-text> with people\r\n              </ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content class=\"features\">\r\n              <img src=\"assets/images/about/about-connection.svg\" alt=\"image\" />\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"12\" sizeLg=\"4\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title>\r\n                <ion-text color=\"primary\">Buy</ion-text> new properties\r\n              </ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content class=\"features\">\r\n              <img src=\"assets/images/about/about-buy.svg\" alt=\"image\" />\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"12\" sizeLg=\"4\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title>\r\n                <ion-text color=\"primary\">Sell</ion-text> your properties\r\n              </ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content class=\"features\">\r\n              <img src=\"assets/images/about/about-sell.svg\" alt=\"image\" />\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div style=\"height: 100px\"></div>\r\n  </div>\r\n\r\n  <div class=\"contact-section\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\" sizeLg=\"5\" sizeXl=\"6\" class=\"left-side\">\r\n          <div class=\"heading\">Let's get in touch</div>\r\n          <div class=\"sub-heading\">\r\n            Have an inquiry or some feedback for us?\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" sizeLg=\"7\" sizeXl=\"6\">\r\n          <app-contact-form> </app-contact-form>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_about_about_module_ts.js.map