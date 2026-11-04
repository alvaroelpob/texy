import {
  require_FunctionList
} from "./chunk-9dxgsct4.js";
import {
  require_Options
} from "./chunk-kgrs1vrg.js";
import {
  __commonJS
} from "./chunk-cdjrrdrs.js";

// node_modules/mathjax-full/js/core/OutputJax.js
var require_OutputJax2 = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AbstractOutputJax = undefined;
  var Options_js_1 = require_Options();
  var FunctionList_js_1 = require_FunctionList();
  var AbstractOutputJax = function() {
    function AbstractOutputJax(options) {
      if (options === undefined) {
        options = {};
      }
      this.adaptor = null;
      var CLASS = this.constructor;
      this.options = (0, Options_js_1.userOptions)((0, Options_js_1.defaultOptions)({}, CLASS.OPTIONS), options);
      this.postFilters = new FunctionList_js_1.FunctionList;
    }
    Object.defineProperty(AbstractOutputJax.prototype, "name", {
      get: function() {
        return this.constructor.NAME;
      },
      enumerable: false,
      configurable: true
    });
    AbstractOutputJax.prototype.setAdaptor = function(adaptor) {
      this.adaptor = adaptor;
    };
    AbstractOutputJax.prototype.initialize = function() {};
    AbstractOutputJax.prototype.reset = function() {
      var _args = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        _args[_i] = arguments[_i];
      }
    };
    AbstractOutputJax.prototype.getMetrics = function(_document) {};
    AbstractOutputJax.prototype.styleSheet = function(_document) {
      return null;
    };
    AbstractOutputJax.prototype.pageElements = function(_document) {
      return null;
    };
    AbstractOutputJax.prototype.executeFilters = function(filters, math, document, data) {
      var args = { math, document, data };
      filters.execute(args);
      return args.data;
    };
    AbstractOutputJax.NAME = "generic";
    AbstractOutputJax.OPTIONS = {};
    return AbstractOutputJax;
  }();
  exports.AbstractOutputJax = AbstractOutputJax;
});

export { require_OutputJax2 };
