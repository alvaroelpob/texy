import {
  __commonJS
} from "./chunk-cdjrrdrs.js";

// node_modules/mathjax-full/js/util/PrioritizedList.js
var require_PrioritizedList = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PrioritizedList = undefined;
  var PrioritizedList = function() {
    function PrioritizedList() {
      this.items = [];
      this.items = [];
    }
    PrioritizedList.prototype[Symbol.iterator] = function() {
      var i = 0;
      var items = this.items;
      return {
        next: function() {
          return { value: items[i++], done: i > items.length };
        }
      };
    };
    PrioritizedList.prototype.add = function(item, priority) {
      if (priority === undefined) {
        priority = PrioritizedList.DEFAULTPRIORITY;
      }
      var i = this.items.length;
      do {
        i--;
      } while (i >= 0 && priority < this.items[i].priority);
      this.items.splice(i + 1, 0, { item, priority });
      return item;
    };
    PrioritizedList.prototype.remove = function(item) {
      var i = this.items.length;
      do {
        i--;
      } while (i >= 0 && this.items[i].item !== item);
      if (i >= 0) {
        this.items.splice(i, 1);
      }
    };
    PrioritizedList.DEFAULTPRIORITY = 5;
    return PrioritizedList;
  }();
  exports.PrioritizedList = PrioritizedList;
});

// node_modules/mathjax-full/js/util/FunctionList.js
var require_FunctionList = __commonJS(function(exports) {
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
  var __read = exports && exports.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar;i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FunctionList = undefined;
  var PrioritizedList_js_1 = require_PrioritizedList();
  var FunctionList = function(_super) {
    __extends(FunctionList, _super);
    function FunctionList() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    FunctionList.prototype.execute = function() {
      var e_1, _a;
      var data = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        data[_i] = arguments[_i];
      }
      try {
        for (var _b = __values(this), _c = _b.next();!_c.done; _c = _b.next()) {
          var item = _c.value;
          var result = item.item.apply(item, __spreadArray([], __read(data), false));
          if (result === false) {
            return false;
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
      return true;
    };
    FunctionList.prototype.asyncExecute = function() {
      var data = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        data[_i] = arguments[_i];
      }
      var i = -1;
      var items = this.items;
      return new Promise(function(ok, fail) {
        (function execute() {
          var _a;
          while (++i < items.length) {
            var result = (_a = items[i]).item.apply(_a, __spreadArray([], __read(data), false));
            if (result instanceof Promise) {
              result.then(execute).catch(function(err) {
                return fail(err);
              });
              return;
            }
            if (result === false) {
              ok(false);
              return;
            }
          }
          ok(true);
        })();
      });
    };
    return FunctionList;
  }(PrioritizedList_js_1.PrioritizedList);
  exports.FunctionList = FunctionList;
});

export { require_PrioritizedList, require_FunctionList };
