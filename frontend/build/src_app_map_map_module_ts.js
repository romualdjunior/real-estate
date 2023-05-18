"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_map_map_module_ts"],{

/***/ 41024:
/*!************************************************************************!*\
  !*** ./src/app/map/map-markers-legend/map-markers-legend.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapMarkersLegendComponent": () => (/* binding */ MapMarkersLegendComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _map_markers_legend_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-markers-legend.component.html?ngResource */ 20204);
/* harmony import */ var _map_markers_legend_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-markers-legend.component.scss?ngResource */ 14782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/property */ 14750);





let MapMarkersLegendComponent = class MapMarkersLegendComponent {
    constructor() {
        this.toggledMarker = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.markers = [
            {
                label: 'Residential',
                value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.residential,
                isChecked: true,
                icon: 'marker-residential.svg'
            },
            {
                label: 'Commercial',
                value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.commercial,
                isChecked: true,
                icon: 'marker-commercial.svg',
            }, {
                label: 'Industrial',
                value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.industrial,
                isChecked: true,
                icon: 'marker-industrial.svg'
            },
            {
                label: 'Land',
                value: src_app_shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.land,
                isChecked: true,
                icon: 'marker-land.svg'
            }
        ];
    }
    ngOnInit() { }
    markerSelected(marker) {
        this.toggledMarker.emit({ type: marker.value, isChecked: marker.isChecked });
    }
};
MapMarkersLegendComponent.ctorParameters = () => [];
MapMarkersLegendComponent.propDecorators = {
    toggledMarker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
MapMarkersLegendComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-map-markers-legend',
        template: _map_markers_legend_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_map_markers_legend_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapMarkersLegendComponent);



/***/ }),

/***/ 81216:
/*!*******************************************!*\
  !*** ./src/app/map/map-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageRoutingModule": () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 69510);




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapPageRoutingModule);



/***/ }),

/***/ 42622:
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageModule": () => (/* binding */ MapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-routing.module */ 81216);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page */ 69510);
/* harmony import */ var _map_popup_map_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-popup/map-popup.component */ 29804);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _map_markers_legend_map_markers_legend_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-markers-legend/map-markers-legend.component */ 41024);
/* harmony import */ var _shared_components_modal_search_modal_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/modal-search/modal-search.component */ 96455);
/* harmony import */ var _properties_properties_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../properties/properties.module */ 11199);












let MapPageModule = class MapPageModule {
};
MapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _properties_properties_module__WEBPACK_IMPORTED_MODULE_6__.PropertiesPageModule
        ],
        declarations: [
            _map_page__WEBPACK_IMPORTED_MODULE_1__.MapPage,
            _map_popup_map_popup_component__WEBPACK_IMPORTED_MODULE_2__.MapPopupComponent,
            _map_markers_legend_map_markers_legend_component__WEBPACK_IMPORTED_MODULE_4__.MapMarkersLegendComponent,
            _shared_components_modal_search_modal_search_component__WEBPACK_IMPORTED_MODULE_5__.ModalSearchComponent
        ],
    })
], MapPageModule);



/***/ }),

/***/ 69510:
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPage": () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page.html?ngResource */ 7122);
/* harmony import */ var _map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page.scss?ngResource */ 75621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_enums_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/enums/property */ 14750);





let MapPage = class MapPage {
    constructor() {
        this.visibleType = [
            _shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.residential.toString(),
            _shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.commercial.toString(),
            _shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.industrial.toString(),
            _shared_enums_property__WEBPACK_IMPORTED_MODULE_2__.PropertyType.land.toString()
        ];
    }
    ngOnInit() {
    }
    setVisibleMarkerType(event) {
        if (!event.isChecked) {
            this.visibleType = this.visibleType.filter(v => v !== event.type);
        }
        else {
            this.visibleType = [...this.visibleType, event.type];
        }
    }
};
MapPage.ctorParameters = () => [];
MapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-map',
        template: _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapPage);



/***/ }),

/***/ 14782:
/*!*************************************************************************************!*\
  !*** ./src/app/map/map-markers-legend/map-markers-legend.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".map-marker-info {\n  z-index: 400;\n  position: absolute;\n  right: 0;\n  bottom: 24px;\n  background-color: transparent;\n  padding: 4px;\n}\n.map-marker-info ion-item {\n  --background: rgba(255, 255, 255, 0.185);\n  --inner-padding-top: 0;\n  --inner-padding-bottom: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 4px;\n  --padding-end: 0;\n  --color: var(--ion-color-dark);\n  -webkit-text-stroke: 1px var(--ion-color-dark);\n  font-size: 13px;\n  line-height: 15px;\n}\n.map-marker-info ion-item img {\n  height: 30px;\n  width: 30px;\n}\n.map-marker-info ion-item ion-checkbox {\n  margin-right: 6px;\n}\n@media (max-width: 992px) {\n  .text {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC1tYXJrZXJzLWxlZ2VuZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcVHJhdmFpbCUyMHBlcnNvbm5lbFxcQmFja2VuZFxccmVhbC1lc3RhdGUtbWFuYWdlbWVudFxcZnJvbnRlbmRcXHNyY1xcYXBwXFxtYXBcXG1hcC1tYXJrZXJzLWxlZ2VuZFxcbWFwLW1hcmtlcnMtbGVnZW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUNDRjtBREFFO0VBQ0Usd0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRUo7QURESTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDR047QURESTtFQUNFLGlCQUFBO0FDR047QURDQTtFQUNFO0lBQ0UsYUFBQTtFQ0VGO0FBQ0YiLCJmaWxlIjoibWFwLW1hcmtlcnMtbGVnZW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1tYXJrZXItaW5mbyB7XHJcbiAgei1pbmRleDogNDAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDI0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4NSk7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgIH1cclxuICAgIGlvbi1jaGVja2JveCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAudGV4dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iLCIubWFwLW1hcmtlci1pbmZvIHtcbiAgei1pbmRleDogNDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiA0cHg7XG59XG4ubWFwLW1hcmtlci1pbmZvIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTg1KTtcbiAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cbi5tYXAtbWFya2VyLWluZm8gaW9uLWl0ZW0gaW1nIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cbi5tYXAtbWFya2VyLWluZm8gaW9uLWl0ZW0gaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAudGV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 75621:
/*!**********************************************!*\
  !*** ./src/app/map/map.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "ion-grid {\n  height: 100%;\n  min-height: 100%;\n}\n\nion-row.h-100 {\n  height: 100%;\n  min-height: 100%;\n}\n\n.map-section {\n  background-color: var(--ion-color-light-shade);\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n.horizontal-slides-container {\n  margin-bottom: 60px;\n  width: 100%;\n}\n\n.extra-section {\n  background-color: var(--ion-color-light);\n  overflow: hidden;\n  overflow-y: scroll;\n  height: 100%;\n  width: 100%;\n}\n\n.extra-section .properties-list {\n  max-width: 500px;\n}\n\n@media (max-width: 992px) {\n  .map-section {\n    height: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcVHJhdmFpbCUyMHBlcnNvbm5lbFxcQmFja2VuZFxccmVhbC1lc3RhdGUtbWFuYWdlbWVudFxcZnJvbnRlbmRcXHNyY1xcYXBwXFxtYXBcXG1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsOENBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNFRjs7QURDQTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRUY7O0FEREU7RUFDRSxnQkFBQTtBQ0dKOztBRENBO0VBQ0U7SUFDRSxXQUFBO0VDRUY7QUFDRiIsImZpbGUiOiJtYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcbmlvbi1yb3cuaC0xMDAge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWFwLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1zbGlkZXMtY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXh0cmEtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLnByb3BlcnRpZXMtbGlzdCB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLm1hcC1zZWN0aW9uIHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gIH1cclxufVxyXG4iLCJpb24tZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuaW9uLXJvdy5oLTEwMCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLm1hcC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ob3Jpem9udGFsLXNsaWRlcy1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4dHJhLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZXh0cmEtc2VjdGlvbiAucHJvcGVydGllcy1saXN0IHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYXAtc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiA3MCU7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 20204:
/*!*************************************************************************************!*\
  !*** ./src/app/map/map-markers-legend/map-markers-legend.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-list class=\"map-marker-info\">\r\n  <ion-item\r\n    lines=\"none\"\r\n    *ngFor=\"let marker of markers\"\r\n    (click)=\"markerSelected(marker)\"\r\n  >\r\n    <img [src]=\"'./assets/images/map/' + marker.icon\" alt=\"marker\" srcset=\"\" />\r\n    <ion-checkbox color=\"primary\" [(ngModel)]=\"marker.isChecked\"></ion-checkbox>\r\n    <span class=\"text\">{{ marker.label }}</span>\r\n  </ion-item>\r\n</ion-list>\r\n";

/***/ }),

/***/ 7122:
/*!**********************************************!*\
  !*** ./src/app/map/map.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>Map Page</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"h-100\">\r\n      <ion-col size=\"12\" sizeLg=\"8\" sizeXl=\"9\" class=\"map-section\">\r\n        <app-map-search-field\r\n          (selectedLocation)=\"mapLeaflet.setMapCenter($event)\"\r\n        ></app-map-search-field>\r\n        <app-map-leaflet\r\n          #mapLeaflet\r\n          [visibleMarkerType]=\"visibleType\"\r\n        ></app-map-leaflet>\r\n        <app-map-markers-legend\r\n          (toggledMarker)=\"setVisibleMarkerType($event)\"\r\n        ></app-map-markers-legend>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-hide-lg-up\">\r\n        <div class=\"horizontal-slides-container\">\r\n          <app-properties-list [horizontalSlide]=\"true\"></app-properties-list>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col\r\n        size=\"0\"\r\n        sizeLg=\"4\"\r\n        sizeXl=\"3\"\r\n        class=\"extra-section ion-hide-lg-down\"\r\n      >\r\n        <div class=\"properties-list\">\r\n          <app-properties-list\r\n            class=\"properties-list\"\r\n            [singleCol]=\"true\"\r\n            [limit]=\"10\"\r\n          ></app-properties-list>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding ion-hide-lg-up\">\r\n        <app-footer></app-footer>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_map_map_module_ts.js.map