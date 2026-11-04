import {
  require_FunctionList
} from "./chunk-9dxgsct4.js";
import {
  require_Options
} from "./chunk-kgrs1vrg.js";
import {
  __commonJS
} from "./chunk-cdjrrdrs.js";

// node_modules/mathjax-full/js/core/InputJax.js
var require_InputJax = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AbstractInputJax = undefined;
  var Options_js_1 = require_Options();
  var FunctionList_js_1 = require_FunctionList();
  var AbstractInputJax = function() {
    function AbstractInputJax(options) {
      if (options === undefined) {
        options = {};
      }
      this.adaptor = null;
      this.mmlFactory = null;
      var CLASS = this.constructor;
      this.options = (0, Options_js_1.userOptions)((0, Options_js_1.defaultOptions)({}, CLASS.OPTIONS), options);
      this.preFilters = new FunctionList_js_1.FunctionList;
      this.postFilters = new FunctionList_js_1.FunctionList;
    }
    Object.defineProperty(AbstractInputJax.prototype, "name", {
      get: function() {
        return this.constructor.NAME;
      },
      enumerable: false,
      configurable: true
    });
    AbstractInputJax.prototype.setAdaptor = function(adaptor) {
      this.adaptor = adaptor;
    };
    AbstractInputJax.prototype.setMmlFactory = function(mmlFactory) {
      this.mmlFactory = mmlFactory;
    };
    AbstractInputJax.prototype.initialize = function() {};
    AbstractInputJax.prototype.reset = function() {
      var _args = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        _args[_i] = arguments[_i];
      }
    };
    Object.defineProperty(AbstractInputJax.prototype, "processStrings", {
      get: function() {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    AbstractInputJax.prototype.findMath = function(_node, _options) {
      return [];
    };
    AbstractInputJax.prototype.executeFilters = function(filters, math, document, data) {
      var args = { math, document, data };
      filters.execute(args);
      return args.data;
    };
    AbstractInputJax.NAME = "generic";
    AbstractInputJax.OPTIONS = {};
    return AbstractInputJax;
  }();
  exports.AbstractInputJax = AbstractInputJax;
});

export { require_InputJax };
