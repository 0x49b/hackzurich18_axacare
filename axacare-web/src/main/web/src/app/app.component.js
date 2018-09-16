"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        localStorage.setItem("users", "[  \n" +
            "   {  \n" +
            "      \"firstName\":\"Albus\",\n" +
            "      \"lastName\":\"Dumbledore\",\n" +
            "      \"username\":\"doctor\",\n" +
            "      \"password\":\"doctor\",\n" +
            "      \"id\":13,\n" +
            "      \"type\":\"doctor\",\n" +
            "      \"image\":\"albus.jpg\"\n" +
            "   },\n" +
            "      {  \n" +
            "      \"firstName\":\"Harry\",\n" +
            "      \"lastName\":\"Potter\",\n" +
            "      \"username\":\"patient\",\n" +
            "      \"password\":\"patient\",\n" +
            "      \"id\":42,\n" +
            "      \"type\":\"patient\",\n" +
            "      \"image\":\"potter.jpg\"\n" +
            "   },\n" +
            "      {  \n" +
            "      \"firstName\":\"Severus\",\n" +
            "      \"lastName\":\"Snape\",\n" +
            "      \"username\":\"pharmacy\",\n" +
            "      \"password\":\"pharmacy\",\n" +
            "      \"id\":20,\n" +
            "      \"type\":\"pharmacy\",\n" +
            "      \"image\":\"severus.jpg\"\n" +
            "   }\n" +
            "]");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map