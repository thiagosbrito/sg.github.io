function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];
    var routerOptions = {
      anchorScrolling: "enabled",
      scrollPositionRestoration: 'enabled'
    };

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routerOptions)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routerOptions)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/info-box/info-box.component */
    "./src/app/components/info-box/info-box.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'sg-website';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 242,
      vars: 0,
      consts: [[1, "main-container"], [1, "d-flex", "flex-column", "wrapper"], ["id", "home", 1, "bg-primary", "content-section", "main", "d-flex", "align-items-center"], [1, "welcome"], [1, "text-center"], [1, "services-divider"], ["id", "about", 1, "content-section", "about", "pt-5"], [1, "container"], [1, "title", "mt-5", "text-center"], [1, "about-content", "d-flex", "flex-column"], [1, "mt-3"], ["id", "services", 1, "content-section", "services"], [1, "title", "text-light"], [1, "servicos-content"], [1, "text-center", "py-5"], [1, "services-holder"], [1, "d-flex", "flex-row"], [1, "service", "shadow-sm"], [1, "title"], ["id", "siscomex", 1, "bg-success", "content-section", "siscomex"], ["id", "contact", 1, "bg-danger", "content-section", "contact"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Em meio a tantas preocupa\xE7\xF5es desse ano");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-info-box");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Quem somos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nossa Miss\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Prestar servi\xE7os aos nossos clientes de alt\xEDssimos valores agregados atendendo a necessidades de cada empresa com qualidade e desempenho, o que nos diferencia no mercado altamente competitivo em que vivemos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "A SG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " A SG Assessoria em Servi\xE7os Empresariais Ltda, foi inaugurada em 2000 na Cidade de S\xE3o Paulo \u2013 SP, tem como objetivo prover solu\xE7\xF5es na presta\xE7\xE3o de servi\xE7o no ramo de assessoria empresarial nos meandros da burocracia dos \xF3rg\xE3os p\xFAblicos em nosso Pa\xEDs. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Constitu\xEDda por profissionais experientes e qualificados para atender aos clientes com qualidade e efici\xEAncia. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Neste per\xEDodo, prestamos servi\xE7os para diversas empresas tais como: pequena, m\xE9dia e grande porte e diversos ramos de atividades: Ind\xFAstria, com\xE9rcio, presta\xE7\xE3o de servi\xE7os em geral e sociedades an\xF4nimas. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Assim sendo, estamos tecnicamente habilitado para prestar servi\xE7os de assessoria empresarial, registros contratual, regulariza\xE7\xE3o de empresas e certid\xF5es negativas nos respectivos \xF3rg\xE3os fiscalizadores. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "O que fazemos?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Conhe\xE7a nossos servi\xE7os");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "JUCESP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u2022 Registro de empresas, Individual, Limitada, ME, EPP, S/A E COOPERATIVA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u2022 Constitui\xE7\xE3o, Altera\xE7\xE3o e Distrato social");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u2022 Arquivamento de Atas AGO/AGE e jornais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u2022 Busca de nome empresarial e NIRE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u2022 Certid\xE3o Simplificada e Especifica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u2022 Ficha de Breve Relato (COMPLETA) ou 5 (cinco) \xFAltimos documentos arquivados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u2022 Fotoc\xF3pias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u2022 Registro de Livros.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Cart\xF3rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u2022 Constitui\xE7\xE3o, Altera\xE7\xE3o e Distrato Social");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u2022 Certid\xE3o de Inteiro Teor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u2022 Busca de nome empresarial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u2022 Registro de Im\xF3veis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Receita Federal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u2022 CNPJ: Inscri\xE7\xE3o, Altera\xE7\xE3o e Cancelamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u2022 Pesquisas (conta corrente)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u2022 Redarf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u2022 C\xF3pia de documentos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u2022 Declara\xE7\xE3o de ITR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u2022 Declara\xE7\xF5es de IRPF e IRPJ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u2022 Busca de nome empresarial.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Prefeitura");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u2022 CCM: Inscri\xE7\xE3o, Altera\xE7\xE3o e Cancelamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u2022 Pesquisa Prefeitura");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\u2022 Inscri\xE7\xE3o de Aut\xF4nomo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u2022 CADAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\u2022 Licen\xE7a de Funcionamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u2022 Alvar\xE1 de Autoriza\xE7\xE3o para Eventos Tempor\xE1rios.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Sec. Fazenda");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\u2022 DECA: Inscri\xE7\xE3o, Altera\xE7\xE3o e Cancelamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\u2022 Pesquisa de ICM/ICMS.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "INSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\u2022 Inscri\xE7\xE3o, Altera\xE7\xE3o e Cancelamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "\u2022 Pesquisa INSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\u2022 Inscri\xE7\xE3o de Aut\xF4nomo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "FGTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\u2022 Inscri\xE7\xE3o, Altera\xE7\xE3o e Cancelamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "\u2022 Pesquisa FGTS.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "CETESB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\u2022 Inscri\xE7\xE3o, Altera\xE7\xE3o e Cancelamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Parcelamentos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "\u2022 Parcelamento Tributos Federais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\u2022 Parcelamento INSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\u2022 Parcelamento Prefeitura");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\u2022 Parcelamento ICMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\u2022 Parcelamento FGTS.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "F\xF3runs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "\u2022 Certid\xE3o de Distribui\xE7\xF5es C\xEDveis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "\u2022 Certid\xE3o de Fal\xEAncia e Concordada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\u2022 Certid\xE3o de Distribui\xE7\xE3o de Executivos Fiscais (Municipais e Estaduais)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "\u2022 Certid\xE3o de Distribui\xE7\xF5es CRIMINIS \u2013 DIPO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\u2022 Certid\xE3o de Execu\xE7\xF5es CRIMINAIS \u2013 DECRIM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "\u2022 Certid\xE3o nos 10 (dez) cart\xF3rios de Protesto \u2013 PF/PJ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\u2022 Certid\xE3o da Justi\xE7a Federal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "\u2022 Certid\xE3o Trabalhista.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Certid\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "\u2022 Certid\xE3o Conjunta Negativa \u2013 Tributos Federais/D\xEDvida Ativa da Uni\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "\u2022 Certid\xE3o de Tributos Mobili\xE1rios (CCM)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "\u2022 Certid\xE3o de Tributos Imobili\xE1rios (IPTU)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\u2022 Certid\xE3o Negativa de D\xE9bitos (INSS)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "\u2022 Certid\xE3o DE OBRA (INSS)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "\u2022 Certid\xE3o Negativa de ICM/ICMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "\u2022 Certid\xE3o do FGTS.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "section", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h1", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Siscomex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "section", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "h1", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Contate-nos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _components_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_2__["InfoBoxComponent"]],
      styles: ["@charset \"UTF-8\";\n.content-section[_ngcontent-%COMP%] {\n  height: 450px;\n}\n.content-section.main[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  height: auto;\n  margin-top: -135px;\n}\n.main[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/city-bg.jpg\");\n  background-size: cover;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);\n}\n.main[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: yellow;\n  font-size: 64px;\n  font-weight: 600;\n  text-align: center;\n}\n.main[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-size: 32px;\n  font-weight: 300;\n}\n.services-divider[_ngcontent-%COMP%] {\n  height: 0.5px;\n  position: relative;\n}\n.about[_ngcontent-%COMP%] {\n  margin-bottom: 140px;\n}\n.about[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  color: #133e70;\n  font-size: 2rem;\n  font-weight: lighter;\n  overflow: hidden;\n  padding: 0 14px;\n  margin-top: 16px;\n  position: relative;\n  text-align: center;\n  z-index: 3;\n}\n.about[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before, .about[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 50%;\n  overflow: hidden;\n  width: 50%;\n  height: 1px;\n  content: \"\xA0\";\n  background-color: #133e70;\n}\n.about[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:after {\n  margin-left: 2%;\n}\n.about[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n  margin-left: -52%;\n  text-align: right;\n  padding-right: 12px;\n}\n.about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%] {\n  padding: 36px 0;\n}\n.about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: lighter;\n}\n.about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 300;\n}\n.services[_ngcontent-%COMP%] {\n  background: #676685;\n  background: linear-gradient(0, #676685 0%, #03023e 100%);\n  height: auto;\n  padding-bottom: 2rem;\n}\n.services[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-size: 2rem;\n  font-weight: lighter;\n  overflow: hidden;\n  padding: 0 14px;\n  margin-top: 16px;\n  position: relative;\n  text-align: center;\n  z-index: 3;\n}\n.services[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]:before, .services[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 50%;\n  overflow: hidden;\n  width: 50%;\n  height: 1px;\n  content: \"\xA0\";\n  background-color: #FFF;\n}\n.services[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]:after {\n  margin-left: 2%;\n}\n.services[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]:before {\n  margin-left: -52%;\n  text-align: right;\n  padding-right: 12px;\n}\n.services[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-size: 1.6rem;\n  font-weight: lighter;\n}\n.services[_ngcontent-%COMP%]   .services-holder[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n.services[_ngcontent-%COMP%]   .services-holder[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.services[_ngcontent-%COMP%]   .services-holder[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%] {\n  background: #f5f5fb;\n  background: linear-gradient(180deg, #f5f5fb 0%, #e9e9f7 100%);\n  border-radius: 6px;\n  margin-right: 1rem;\n  margin-bottom: 1.3rem;\n  width: 210px;\n  min-height: 213px;\n  padding: 9px 12px;\n}\n.services[_ngcontent-%COMP%]   .services-holder[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]   h3.title[_ngcontent-%COMP%] {\n  color: #133e70;\n  text-align: center;\n  font-size: 1.2rem;\n  font-size: 300;\n}\n.services[_ngcontent-%COMP%]   .services-holder[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #1e62b1;\n  font-weight: 300;\n}\n.services[_ngcontent-%COMP%]   .services-holder[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3RoaWFnb19icml0by9wZXJzb25hbC9wcm9qZWN0cy9zZy13ZWJzaXRlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGFBQUE7QURFRjtBQ0RFO0VBQ0UsYUFBQTtBREdKO0FDQ0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBREVGO0FDQ0E7RUFDRSxtREFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7QURFRjtBQ0RFO0VBQ0UsV0FBQTtBREdKO0FDRkk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURJTjtBQ0ZJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRElOO0FDQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QURFRjtBQ0NBO0VBQ0Usb0JBQUE7QURFRjtBQ0FFO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBREVKO0FDQUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FERU47QUNBSTtFQUNFLGVBQUE7QURFTjtBQ0FJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FERU47QUNDRTtFQUNFLGVBQUE7QURDSjtBQ0FJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBREVOO0FDQUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FERU47QUNJQTtFQUNFLG1CQUFBO0VBQ0Esd0RBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QURERjtBQ0dFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURESjtBQ0dJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBREROO0FDR0k7RUFDRSxlQUFBO0FERE47QUNHSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBREROO0FDSUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBREZKO0FDS0U7RUFDRSxrQkFBQTtBREhKO0FDSUk7RUFDRSx1QkFBQTtBREZOO0FDS0k7RUFDRSxtQkFBQTtFQUNBLDZEQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QURITjtBQ0tNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FESFI7QUNNUTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FESlY7QUNLVTtFQUNFLGFBQUE7QURIWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW50LXNlY3Rpb24ge1xuICBoZWlnaHQ6IDQ1MHB4O1xufVxuLmNvbnRlbnQtc2VjdGlvbi5tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMTM1cHg7XG59XG5cbi5tYWluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY2l0eS1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5tYWluIC53ZWxjb21lIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbiAud2VsY29tZSBoMSB7XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW4gLndlbGNvbWUgcCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5zZXJ2aWNlcy1kaXZpZGVyIHtcbiAgaGVpZ2h0OiAwLjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWJvdXQge1xuICBtYXJnaW4tYm90dG9tOiAxNDBweDtcbn1cbi5hYm91dCAudGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBjb2xvcjogIzEzM2U3MDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMztcbn1cbi5hYm91dCAudGl0bGU6YmVmb3JlLCAuYWJvdXQgLnRpdGxlOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGNvbnRlbnQ6IFwiwqBcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzM2U3MDtcbn1cbi5hYm91dCAudGl0bGU6YWZ0ZXIge1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG4uYWJvdXQgLnRpdGxlOmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAtNTIlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cbi5hYm91dCAuYWJvdXQtY29udGVudCB7XG4gIHBhZGRpbmc6IDM2cHggMDtcbn1cbi5hYm91dCAuYWJvdXQtY29udGVudCBoNCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbi5hYm91dCAuYWJvdXQtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5zZXJ2aWNlcyB7XG4gIGJhY2tncm91bmQ6ICM2NzY2ODU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwLCAjNjc2Njg1IDAlLCAjMDMwMjNlIDEwMCUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuLnNlcnZpY2VzIGgxLnRpdGxlIHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDM7XG59XG4uc2VydmljZXMgaDEudGl0bGU6YmVmb3JlLCAuc2VydmljZXMgaDEudGl0bGU6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDFweDtcbiAgY29udGVudDogXCLCoFwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xufVxuLnNlcnZpY2VzIGgxLnRpdGxlOmFmdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuLnNlcnZpY2VzIGgxLnRpdGxlOmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAtNTIlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cbi5zZXJ2aWNlcyBoNSB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4uc2VydmljZXMgLnNlcnZpY2VzLWhvbGRlciB7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cbi5zZXJ2aWNlcyAuc2VydmljZXMtaG9sZGVyIC5mbGV4LXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNlcnZpY2VzIC5zZXJ2aWNlcy1ob2xkZXIgLnNlcnZpY2Uge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWZiO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjVmNWZiIDAlLCAjZTllOWY3IDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS4zcmVtO1xuICB3aWR0aDogMjEwcHg7XG4gIG1pbi1oZWlnaHQ6IDIxM3B4O1xuICBwYWRkaW5nOiA5cHggMTJweDtcbn1cbi5zZXJ2aWNlcyAuc2VydmljZXMtaG9sZGVyIC5zZXJ2aWNlIGgzLnRpdGxlIHtcbiAgY29sb3I6ICMxMzNlNzA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtc2l6ZTogMzAwO1xufVxuLnNlcnZpY2VzIC5zZXJ2aWNlcy1ob2xkZXIgLnNlcnZpY2UgcCBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjMWU2MmIxO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnNlcnZpY2VzIC5zZXJ2aWNlcy1ob2xkZXIgLnNlcnZpY2UgcCBzcGFuOmhvdmVyIHtcbiAgY29sb3I6IG9yYW5nZTtcbn0iLCIuY29udGVudC1zZWN0aW9uIHtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgJi5tYWluIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG59XG5cbi53cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogLTEzNXB4O1xufVxuXG4ubWFpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2l0eS1iZy5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAuNSk7XG4gIC53ZWxjb21lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoMSB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgcCB7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuICB9XG59XG5cbi5zZXJ2aWNlcy1kaXZpZGVyIHtcbiAgaGVpZ2h0OiAuNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hYm91dCB7XG4gIG1hcmdpbi1ib3R0b206IDE0MHB4O1xuXG4gIC50aXRsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNGRkY7XG4gICAgY29sb3I6ICMxMzNlNzA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMCAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiAzO1xuXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgY29udGVudDogJ1xcYTAnO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzM2U3MDtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNTIlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgfVxuICAuYWJvdXQtY29udGVudCB7XG4gICAgcGFkZGluZzogMzZweCAwO1xuICAgIGg0IHtcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgfVxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuICB9XG5cbn1cblxuLnNlcnZpY2VzIHtcbiAgYmFja2dyb3VuZDogcmdiKDEwMywxMDIsMTMzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDAsIHJnYmEoMTAzLDEwMiwxMzMsMSkgMCUsIHJnYmEoMywyLDYyLDEpIDEwMCUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuXG4gIGgxLnRpdGxlIHtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwIDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHotaW5kZXg6IDM7XG5cbiAgICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBjb250ZW50OiAnXFxhMCc7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgbWFyZ2luLWxlZnQ6IC01MiU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgfVxuICB9XG4gIGg1IHtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgfVxuXG4gIC5zZXJ2aWNlcy1ob2xkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAuZmxleC1yb3cge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnNlcnZpY2Uge1xuICAgICAgYmFja2dyb3VuZDogcmdiKDI0NSwyNDUsMjUxKTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjQ1LDI0NSwyNTEsMSkgMCUsIHJnYmEoMjMzLDIzMywyNDcsMSkgMTAwJSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjNyZW07XG4gICAgICB3aWR0aDogMjEwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAyMTNweDtcbiAgICAgIHBhZGRpbmc6IDlweCAxMnB4O1xuXG4gICAgICBoMy50aXRsZSB7XG4gICAgICAgIGNvbG9yOiAjMTMzZTcwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBmb250LXNpemU6IDMwMDtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCMxMzNlNzAsIDE1JSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/info-box/info-box.component */
    "./src/app/components/info-box/info-box.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_cotacao_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/cotacao.service */
    "./src/app/services/cotacao.service.ts");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/locales/pt */
    "./node_modules/@angular/common/locales/pt.js");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default.a, 'pt');

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_cotacao_service__WEBPACK_IMPORTED_MODULE_9__["CotacaoService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
        useValue: 'pt'
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _components_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_7__["InfoBoxComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _components_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_7__["InfoBoxComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
          providers: [_services_cotacao_service__WEBPACK_IMPORTED_MODULE_9__["CotacaoService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
            useValue: 'pt'
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/info-box/info-box.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/info-box/info-box.component.ts ***!
    \***********************************************************/

  /*! exports provided: InfoBoxComponent */

  /***/
  function srcAppComponentsInfoBoxInfoBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoBoxComponent", function () {
      return InfoBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_cotacao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/cotacao.service */
    "./src/app/services/cotacao.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var InfoBoxComponent = /*#__PURE__*/function () {
      function InfoBoxComponent(cotacaoService) {
        _classCallCheck(this, InfoBoxComponent);

        this.cotacaoService = cotacaoService;
      }

      _createClass(InfoBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCotacoes();
        }
      }, {
        key: "getCotacoes",
        value: function getCotacoes() {
          var _this = this;

          this.cotacaoService.getCotacoes().subscribe(function (cotacoes) {
            _this.cotacoes = cotacoes;
          }, function (error) {
            console.error(error);
          });
        }
      }]);

      return InfoBoxComponent;
    }();

    InfoBoxComponent.ɵfac = function InfoBoxComponent_Factory(t) {
      return new (t || InfoBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cotacao_service__WEBPACK_IMPORTED_MODULE_1__["CotacaoService"]));
    };

    InfoBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoBoxComponent,
      selectors: [["app-info-box"]],
      decls: 34,
      vars: 15,
      consts: [[1, "info-box", "d-flex", "flex-row", "justify-content-around"], [1, "spot"], [1, "btn", "btn-primary", "btn-sm"], [1, "text-center"], [1, "cotacoes-box"]],
      template: function InfoBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Venha para SG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Conhe\xE7a as principais vantagens em ser nosso cliente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Saiba mais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Abertura de Empresas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Fa\xE7a j\xE1 seu pedido de abertura de empresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Saiba mais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cota\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "D\xF3lar: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Euro: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Bitcoin: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](23, 3, ctx.cotacoes == null ? null : ctx.cotacoes.USD.high, "BRL", true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](28, 7, ctx.cotacoes == null ? null : ctx.cotacoes.EUR.high, "BRL", true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](33, 11, ctx.cotacoes == null ? null : ctx.cotacoes.BTC.high, "BRL", true));
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
      styles: [".info-box[_ngcontent-%COMP%] {\n  width: 800px;\n  position: absolute;\n  top: -70px;\n  left: 50%;\n  margin-left: -400px;\n  background-color: #2094d3;\n  padding: 12px 16px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.info-box[_ngcontent-%COMP%]   .spot[_ngcontent-%COMP%] {\n  width: 33%;\n  height: 120px;\n}\n.info-box[_ngcontent-%COMP%]   .spot[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #133e70;\n  font-weight: 400;\n  text-transform: uppercase;\n  font-size: 1.3rem;\n}\n.info-box[_ngcontent-%COMP%]   .spot[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.info-box[_ngcontent-%COMP%]   .spot[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.info-box[_ngcontent-%COMP%]   .spot[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .info-box[_ngcontent-%COMP%]   .spot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-size: 0.8rem;\n  font-weight: 300;\n}\n.info-box[_ngcontent-%COMP%]   .spot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #226ec7;\n}\n.info-box[_ngcontent-%COMP%]   .spot[_ngcontent-%COMP%]:last-child {\n  background: #133e70;\n  margin: -12px 0;\n  margin-right: -22px;\n  height: 148px;\n  padding-top: 16px;\n  padding-left: 16px;\n}\n.info-box[_ngcontent-%COMP%]   .spot[_ngcontent-%COMP%]:last-child   h4[_ngcontent-%COMP%], .info-box[_ngcontent-%COMP%]   .spot[_ngcontent-%COMP%]:last-child   p[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGlhZ29fYnJpdG8vcGVyc29uYWwvcHJvamVjdHMvc2ctd2Vic2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvaW5mby1ib3gvaW5mby1ib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby1ib3gvaW5mby1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQ0VKO0FEREk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDR047QURESTtFQUNFLGtCQUFBO0FDR047QURGTTtFQUNFLGdCQUFBO0FDSVI7QURESTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDR047QURESTtFQUNFLGNBQUE7QUNHTjtBRERJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0dOO0FERk07RUFDRSxXQUFBO0FDSVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luZm8tYm94L2luZm8tYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tYm94IHtcbiAgd2lkdGg6IDgwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTcwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC00MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwOTRkMztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIC41KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAuc3BvdCB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGg0IHtcbiAgICAgIGNvbG9yOiAjMTMzZTcwO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG4gICAgcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBwLCBzcGFuIHtcbiAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6IGxpZ2h0ZW4oIzEzM2U3MCwgMjAlKVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYmFja2dyb3VuZDogIzEzM2U3MDtcbiAgICAgIG1hcmdpbjogLTEycHggMDtcbiAgICAgIG1hcmdpbi1yaWdodDogLTIycHg7XG4gICAgICBoZWlnaHQ6IDE0OHB4O1xuICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICBoNCwgcCB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG4iLCIuaW5mby1ib3gge1xuICB3aWR0aDogODAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNzBweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA5NGQzO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmluZm8tYm94IC5zcG90IHtcbiAgd2lkdGg6IDMzJTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cbi5pbmZvLWJveCAuc3BvdCBoNCB7XG4gIGNvbG9yOiAjMTMzZTcwO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5pbmZvLWJveCAuc3BvdCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmluZm8tYm94IC5zcG90IHA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uaW5mby1ib3ggLnNwb3QgcCwgLmluZm8tYm94IC5zcG90IHNwYW4ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uaW5mby1ib3ggLnNwb3Qgc3BhbiB7XG4gIGNvbG9yOiAjMjI2ZWM3O1xufVxuLmluZm8tYm94IC5zcG90Omxhc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiAjMTMzZTcwO1xuICBtYXJnaW46IC0xMnB4IDA7XG4gIG1hcmdpbi1yaWdodDogLTIycHg7XG4gIGhlaWdodDogMTQ4cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4uaW5mby1ib3ggLnNwb3Q6bGFzdC1jaGlsZCBoNCwgLmluZm8tYm94IC5zcG90Omxhc3QtY2hpbGQgcCB7XG4gIGNvbG9yOiAjRkZGO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info-box',
          templateUrl: './info-box.component.html',
          styleUrls: ['./info-box.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_cotacao_service__WEBPACK_IMPORTED_MODULE_1__["CotacaoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    function NavbarComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fragment", item_r1.fragment);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.display);
      }
    }

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        var _this2 = this;

        _classCallCheck(this, NavbarComponent);

        this.scrolling = false;
        this.scrolledPast = false;
        setInterval(function () {
          if (_this2.scrolling) {
            _this2.scrolling = false;

            if (window.pageYOffset > 30) {
              if (!_this2.scrolledPast) {
                _this2.switchInto();
              }
            } else {
              if (_this2.scrolledPast) {
                _this2.switchStart();
              }
            }
          }
        });
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.menuItems = [{
            fragment: 'home',
            display: 'Início'
          }, {
            fragment: 'about',
            display: 'Quem Somos'
          }, {
            fragment: 'services',
            display: 'Serviços'
          }, {
            fragment: 'siscomex',
            display: 'Siscomex'
          }, {
            fragment: 'contact',
            display: 'Contate-nos'
          }];
          this.navbar = document.getElementById('nav');
          this.startColor = this.navbar.getAttribute('data-startColor');
          this.startSize = this.navbar.getAttribute('data-startSize');
          this.intoColor = this.navbar.getAttribute('data-intoColor');
          this.intoSize = this.navbar.getAttribute('data-intoSize');

          window.onscroll = function () {
            _this3.scrolling = true;
          };
        }
      }, {
        key: "switchInto",
        value: function switchInto() {
          this.scrolledPast = true;
          this.navbar.classList.remove(this.startColor);
          this.navbar.classList.remove(this.startSize);
          this.navbar.classList.add(this.intoColor);
          this.navbar.classList.add(this.intoSize);
        }
      }, {
        key: "switchStart",
        value: function switchStart() {
          this.scrolledPast = false;
          this.navbar.classList.add(this.startColor);
          this.navbar.classList.add(this.startSize);
          this.navbar.classList.remove(this.intoColor);
          this.navbar.classList.remove(this.intoSize);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 8,
      vars: 1,
      consts: [["data-startColor", "navbar--color--ghost", "data-startSize", "navbar--size--lg", "data-intoColor", "navbar--color--secondary", "data-intoSize", "navbar--size--sm", "id", "nav", 1, "navbar", "navbar-expand-lg", "navbar--color--ghost", "navbar--size--xl", "shadow"], [1, "container"], ["href", "#", 1, "navbar-brand", "logo"], ["type", "button", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "navbar-collapse", "navbar-right"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions"], [1, "nav-link", 3, "routerLink", "fragment"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_li_7_Template, 3, 5, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".navbar[_ngcontent-%COMP%] {\n  border: none;\n  transition: 0.4s;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 30;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  margin-bottom: -1.11rem;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 200;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  font-weight: 400;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 2rem;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 900;\n  color: #4b4b4b;\n  width: 130px;\n  height: 65px;\n  background-size: cover;\n}\n.navbar-brand.logo[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/logo-white.png\");\n}\n.navbar--size--xl[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n}\n.navbar--size--lg[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.navbar--size--md[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.navbar--size--sm[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem;\n}\n.navbar--size--sm[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2d3436;\n}\n.navbar--size--sm[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  width: 91px;\n  height: 45px;\n}\n.navbar--size--sm[_ngcontent-%COMP%]   .navbar-brand.logo[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/logo-color.png\");\n}\n.navbar--color--white[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.navbar--color--primary[_ngcontent-%COMP%] {\n  background: #37ca7e;\n}\n.navbar--color--secondary[_ngcontent-%COMP%] {\n  background: #f8f8ff;\n}\n.navbar--color--ghost[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0);\n}\n.navbar--color--ghost[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.navbar--color--ghost[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.navbar--color--ghost[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.active[_ngcontent-%COMP%] {\n  border-bottom: 2px #FFF solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGlhZ29fYnJpdG8vcGVyc29uYWwvcHJvamVjdHMvc2ctd2Vic2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy90aGlhZ29fYnJpdG8vcGVyc29uYWwvcHJvamVjdHMvc2ctd2Vic2l0ZS9zcmMvc2Nzcy9fdHlwb2dyYXBoeS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDQyxZQUFBO0VBQ0MsZ0JBTGdCO0VBTWhCLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQ1pPO0FDS1Q7QUZRRTtFQUNFLHVCQUFBO0FFTko7QUZPSTtFQUNFLHNCQUFBO0FFTE47QUZNTTtFQUNFLGdCQUFBO0FFSlI7QUZLUTtFQUNFLGdCQUFBO0FFSFY7QUZNTTtFQUNFLGtCQUFBO0FFSlI7QUZTQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBRU5GO0FGT0U7RUFDRSxzREFBQTtBRUxKO0FGUUE7RUFDQyxlQUFBO0FFTEQ7QUZPQTtFQUNDLGVBQUE7QUVKRDtBRk1BO0VBQ0MsZUFBQTtBRUhEO0FGS0E7RUFDRSxvQkFBQTtBRUZGO0FGSUk7RUFDRSxjQUFBO0FFRk47QUZLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FFSEo7QUZJSTtFQUNFLHNEQUFBO0FFRk47QUZNQTtFQUNDLGdCQUFBO0FFSEQ7QUZLQTtFQUNDLG1CQW5FUztBRWlFVjtBRklBO0VBQ0MsbUJBckVXO0FFb0VaO0FGR0E7RUFDQyw0QkFBQTtBRUFEO0FGQ0M7RUFDQyxXQUFBO0FFQ0Y7QUZDQztFQUNDLFdBQUE7QUVDRjtBRkNDO0VBQ0MsV0FBQTtBRUNGO0FGR0E7RUFDRSw2QkFBQTtBRUFGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi9zY3NzL3R5cG9ncmFwaHknO1xuXG4vLyB2YXJpYWJsZXNcbiRwcmltYXJ5OiAjMzdjYTdlO1xuJHNlY29uZGFyeTogI2Y4ZjhmZjtcbiR0cmFuc2l0aW9uU3BlZWQ6IDAuNHM7XG5cblxuLm5hdmJhciB7XG5cdGJvcmRlcjogbm9uZTtcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb25TcGVlZDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAzMDtcbiAgZm9udC1mYW1pbHk6ICRzb3VyY2U7XG4gIC5uYXZiYXItbmF2IHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMS4xMXJlbTtcbiAgICAubmF2LWl0ZW0ge1xuICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICAgIGEge1xuICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ubmF2YmFyLWJyYW5kIHtcblx0Zm9udC1zaXplOiAyLjI1cmVtO1xuXHRmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzRiNGI0YjtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICYubG9nbyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9sb2dvLXdoaXRlLnBuZycpO1xuICB9XG59XG4ubmF2YmFyLS1zaXplLS14bCB7XG5cdHBhZGRpbmc6IDRyZW0gMDtcbn1cbi5uYXZiYXItLXNpemUtLWxnIHtcblx0cGFkZGluZzogMnJlbSAwO1xufVxuLm5hdmJhci0tc2l6ZS0tbWQge1xuXHRwYWRkaW5nOiAxcmVtIDA7XG59XG4ubmF2YmFyLS1zaXplLS1zbSB7XG4gIHBhZGRpbmc6IDFyZW0gLjVyZW07XG4gIC5uYXYtaXRlbSB7XG4gICAgYSB7XG4gICAgICBjb2xvcjogIzJkMzQzNlxuICAgIH1cbiAgfVxuICAubmF2YmFyLWJyYW5kIHtcbiAgICB3aWR0aDogOTFweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgJi5sb2dvIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbG9nby1jb2xvci5wbmcnKTtcbiAgICB9XG4gIH1cbn1cbi5uYXZiYXItLWNvbG9yLS13aGl0ZSB7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG59XG4ubmF2YmFyLS1jb2xvci0tcHJpbWFyeSB7XG5cdGJhY2tncm91bmQ6ICRwcmltYXJ5O1xufVxuLm5hdmJhci0tY29sb3ItLXNlY29uZGFyeSB7XG5cdGJhY2tncm91bmQ6ICRzZWNvbmRhcnk7XG59XG4ubmF2YmFyLS1jb2xvci0tZ2hvc3Qge1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xuXHQubmF2YmFyLWJyYW5kIHtcblx0XHRjb2xvcjogI2ZmZjtcblx0fVxuXHQubmF2YmFyLXRleHQge1xuXHRcdGNvbG9yOiAjZmZmO1xuXHR9XG5cdGEge1xuXHRcdGNvbG9yOiAjZmZmO1xuXHR9XG59XG5cbi5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggI0ZGRiBzb2xpZDtcbn1cbiIsIiRvcGVuLXNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuJHJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4kc291cmNlOiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiIsIi5uYXZiYXIge1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMzA7XG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xufVxuLm5hdmJhciAubmF2YmFyLW5hdiB7XG4gIG1hcmdpbi1ib3R0b206IC0xLjExcmVtO1xufVxuLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0ge1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xufVxuLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYSB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG4ubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjNGI0YjRiO1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogNjVweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5uYXZiYXItYnJhbmQubG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28td2hpdGUucG5nXCIpO1xufVxuXG4ubmF2YmFyLS1zaXplLS14bCB7XG4gIHBhZGRpbmc6IDRyZW0gMDtcbn1cblxuLm5hdmJhci0tc2l6ZS0tbGcge1xuICBwYWRkaW5nOiAycmVtIDA7XG59XG5cbi5uYXZiYXItLXNpemUtLW1kIHtcbiAgcGFkZGluZzogMXJlbSAwO1xufVxuXG4ubmF2YmFyLS1zaXplLS1zbSB7XG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xufVxuLm5hdmJhci0tc2l6ZS0tc20gLm5hdi1pdGVtIGEge1xuICBjb2xvcjogIzJkMzQzNjtcbn1cbi5uYXZiYXItLXNpemUtLXNtIC5uYXZiYXItYnJhbmQge1xuICB3aWR0aDogOTFweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuLm5hdmJhci0tc2l6ZS0tc20gLm5hdmJhci1icmFuZC5sb2dvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby1jb2xvci5wbmdcIik7XG59XG5cbi5uYXZiYXItLWNvbG9yLS13aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5uYXZiYXItLWNvbG9yLS1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzM3Y2E3ZTtcbn1cblxuLm5hdmJhci0tY29sb3ItLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6ICNmOGY4ZmY7XG59XG5cbi5uYXZiYXItLWNvbG9yLS1naG9zdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG4ubmF2YmFyLS1jb2xvci0tZ2hvc3QgLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5hdmJhci0tY29sb3ItLWdob3N0IC5uYXZiYXItdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5hdmJhci0tY29sb3ItLWdob3N0IGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCAjRkZGIHNvbGlkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/cotacao.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/cotacao.service.ts ***!
    \*********************************************/

  /*! exports provided: CotacaoService */

  /***/
  function srcAppServicesCotacaoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CotacaoService", function () {
      return CotacaoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CotacaoService = /*#__PURE__*/function () {
      function CotacaoService(http) {
        _classCallCheck(this, CotacaoService);

        this.http = http;
      }

      _createClass(CotacaoService, [{
        key: "getCotacoes",
        value: function getCotacoes() {
          var url = 'https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,BTC-BRL';
          return this.http.get(url);
        }
      }]);

      return CotacaoService;
    }();

    CotacaoService.ɵfac = function CotacaoService_Factory(t) {
      return new (t || CotacaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CotacaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CotacaoService,
      factory: CotacaoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CotacaoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/thiago_brito/personal/projects/sg-website/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map