System.register(['@angular/core', './map.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, map_service_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (map_service_1_1) {
                map_service_1 = map_service_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent(mapService) {
                    this.mapService = mapService;
                }
                MapComponent.prototype.ngOnInit = function () {
                    console.log('ngOnInit');
                };
                MapComponent.prototype.ngAfterViewInit = function () {
                    var map = new L.Map('map', {
                        zoomControl: false,
                        center: new L.LatLng(40.731253, -73.996139),
                        zoom: 12,
                        minZoom: 4,
                        maxZoom: 19,
                        layers: [this.mapService.baseMaps.OpenStreetMap]
                    });
                    L.control.zoom({ position: 'topright' }).addTo(map);
                    L.control.layers(this.mapService.baseMaps).addTo(map);
                    L.control.scale().addTo(map);
                    this.mapService.map = map;
                };
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'fev-map',
                        templateUrl: './app/map/map.component.html',
                        providers: [map_service_1.MapService]
                    }), 
                    __metadata('design:paramtypes', [map_service_1.MapService])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});

//# sourceMappingURL=map.component.js.map
