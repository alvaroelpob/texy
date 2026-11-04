import {
  require_PrioritizedList
} from "./chunk-9dxgsct4.js";
import {
  __commonJS
} from "./chunk-cdjrrdrs.js";

// node_modules/mathjax-full/js/components/version.js
var require_version = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.VERSION = undefined;
  exports.VERSION = "3.2.2";
});

// node_modules/mathjax-full/js/core/HandlerList.js
var require_HandlerList = __commonJS(function(exports) {
  var __extends = exports && exports.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
  }();
  var __values = exports && exports.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = undefined;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.HandlerList = undefined;
  var PrioritizedList_js_1 = require_PrioritizedList();
  var HandlerList = function(_super) {
    __extends(HandlerList, _super);
    function HandlerList() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    HandlerList.prototype.register = function(handler) {
      return this.add(handler, handler.priority);
    };
    HandlerList.prototype.unregister = function(handler) {
      this.remove(handler);
    };
    HandlerList.prototype.handlesDocument = function(document) {
      var e_1, _a;
      try {
        for (var _b = __values(this), _c = _b.next();!_c.done; _c = _b.next()) {
          var item = _c.value;
          var handler = item.item;
          if (handler.handlesDocument(document)) {
            return handler;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      throw new Error("Can't find handler for document");
    };
    HandlerList.prototype.document = function(document, options) {
      if (options === undefined) {
        options = null;
      }
      return this.handlesDocument(document).create(document, options);
    };
    return HandlerList;
  }(PrioritizedList_js_1.PrioritizedList);
  exports.HandlerList = HandlerList;
});

// node_modules/mathjax-full/js/util/Retries.js
var require_Retries = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.retryAfter = exports.handleRetriesFor = undefined;
  function handleRetriesFor(code) {
    return new Promise(function run(ok, fail) {
      try {
        ok(code());
      } catch (err) {
        if (err.retry && err.retry instanceof Promise) {
          err.retry.then(function() {
            return run(ok, fail);
          }).catch(function(perr) {
            return fail(perr);
          });
        } else if (err.restart && err.restart.isCallback) {
          MathJax.Callback.After(function() {
            return run(ok, fail);
          }, err.restart);
        } else {
          fail(err);
        }
      }
    });
  }
  exports.handleRetriesFor = handleRetriesFor;
  function retryAfter(promise) {
    var err = new Error("MathJax retry");
    err.retry = promise;
    throw err;
  }
  exports.retryAfter = retryAfter;
});

// node_modules/mathjax-full/js/mathjax.js
var require_mathjax = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.mathjax = undefined;
  var version_js_1 = require_version();
  var HandlerList_js_1 = require_HandlerList();
  var Retries_js_1 = require_Retries();
  exports.mathjax = {
    version: version_js_1.VERSION,
    handlers: new HandlerList_js_1.HandlerList,
    document: function(document, options) {
      return exports.mathjax.handlers.document(document, options);
    },
    handleRetriesFor: Retries_js_1.handleRetriesFor,
    retryAfter: Retries_js_1.retryAfter,
    asyncLoad: null
  };
});

export { require_Retries, require_mathjax };
