"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var API_URL = 'http://localhost:8090/api';
var EXT_API_KEY = 'wholesale wine';
var EXT_API_URL = 'https://health.axa.ch/hack/api/';
var EXT_HEADERS = new http_1.HttpHeaders();
EXT_HEADERS.set('Authorization', 'wholesale wine');
var ApiService = /** @class */ (function () {
    function ApiService(http, router) {
        this.http = http;
        this.router = router;
    }
    ApiService.prototype.doGet = function (ressource) {
        var apiURL = "" + API_URL + ressource;
        return this.http.get(apiURL)
            .subscribe(function (data) {
            console.log(data);
            return data;
        }, function (error) { return console.log('error'); });
    };
    ApiService.prototype.doPost = function (parameters) {
        var resource = parameters.resource, httpParams = parameters.httpParams;
        var apiURL = "" + API_URL + resource;
        return this.http.post(apiURL, httpParams)
            .subscribe(function (data) { return data; }, function (error) { return console.log(error); });
    };
    ApiService.prototype.doPut = function (parameters) {
        var resource = parameters.resource, httpParams = parameters.httpParams;
        var apiURL = "" + API_URL + resource;
        return this.http.put(apiURL, httpParams)
            .subscribe(function (data) { return data; }, function (error) { return console.log(error); });
    };
    ApiService.prototype.doDelete = function (parameters) {
        var resource = parameters.resource;
        var apiURL = "" + API_URL + resource;
        return this.http.delete(apiURL)
            .subscribe(function (data) { return data; }, function (error) { return console.log(error); });
    };
    // Cases API
    ApiService.prototype.getCasesForPatient = function (patientId) {
    };
    ApiService.prototype.getAllCases = function () {
        return this.doGet("../assets/data/cases.json");
    };
    /**
     * SEARCH IN THE EXTERNAL API
     */
    // Drug API
    ApiService.prototype.searchForDrug = function (drugname) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Authorization': 'wholesale wine',
                'Cache-Control': 'no-cache'
            })
        };
        if (drugname.length > 3) {
            return this.http.get(EXT_API_URL + 'drugs?name=' + drugname, httpOptions).subscribe(function (data) {
                console.log(data);
                return data;
            }, function (error) {
                console.error(error.toLocaleString());
            });
        }
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map