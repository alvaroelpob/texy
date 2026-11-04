import {
  require_NodeUtil,
  require_StackItem
} from "./chunk-7sscmp2c.js";
import {
  require_Factory
} from "./chunk-42maettq.js";
import {
  require_Options
} from "./chunk-kgrs1vrg.js";
import {
  __commonJS
} from "./chunk-cdjrrdrs.js";

// node_modules/mathjax-full/js/input/tex/StackItemFactory.js
var require_StackItemFactory = __commonJS(function(exports) {
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
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  var StackItem_js_1 = require_StackItem();
  var Factory_js_1 = require_Factory();
  var DummyItem = function(_super) {
    __extends(DummyItem, _super);
    function DummyItem() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return DummyItem;
  }(StackItem_js_1.BaseItem);
  var StackItemFactory = function(_super) {
    __extends(StackItemFactory, _super);
    function StackItemFactory() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.defaultKind = "dummy";
      _this.configuration = null;
      return _this;
    }
    StackItemFactory.DefaultStackItems = (_a = {}, _a[DummyItem.prototype.kind] = DummyItem, _a);
    return StackItemFactory;
  }(Factory_js_1.AbstractFactory);
  exports.default = StackItemFactory;
});

// node_modules/mathjax-full/js/input/tex/NodeFactory.js
var require_NodeFactory = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.NodeFactory = undefined;
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var NodeFactory = function() {
    function NodeFactory() {
      this.mmlFactory = null;
      this.factory = {
        node: NodeFactory.createNode,
        token: NodeFactory.createToken,
        text: NodeFactory.createText,
        error: NodeFactory.createError
      };
    }
    NodeFactory.createNode = function(factory, kind, children, def, text) {
      if (children === undefined) {
        children = [];
      }
      if (def === undefined) {
        def = {};
      }
      var node = factory.mmlFactory.create(kind);
      node.setChildren(children);
      if (text) {
        node.appendChild(text);
      }
      NodeUtil_js_1.default.setProperties(node, def);
      return node;
    };
    NodeFactory.createToken = function(factory, kind, def, text) {
      if (def === undefined) {
        def = {};
      }
      if (text === undefined) {
        text = "";
      }
      var textNode = factory.create("text", text);
      return factory.create("node", kind, [], def, textNode);
    };
    NodeFactory.createText = function(factory, text) {
      if (text == null) {
        return null;
      }
      return factory.mmlFactory.create("text").setText(text);
    };
    NodeFactory.createError = function(factory, message) {
      var text = factory.create("text", message);
      var mtext = factory.create("node", "mtext", [], {}, text);
      var error = factory.create("node", "merror", [mtext], { "data-mjx-error": message });
      return error;
    };
    NodeFactory.prototype.setMmlFactory = function(mmlFactory) {
      this.mmlFactory = mmlFactory;
    };
    NodeFactory.prototype.set = function(kind, func) {
      this.factory[kind] = func;
    };
    NodeFactory.prototype.setCreators = function(maps) {
      for (var kind in maps) {
        this.set(kind, maps[kind]);
      }
    };
    NodeFactory.prototype.create = function(kind) {
      var rest = [];
      for (var _i = 1;_i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
      }
      var func = this.factory[kind] || this.factory["node"];
      var node = func.apply(undefined, __spreadArray([this, rest[0]], __read(rest.slice(1)), false));
      if (kind === "node") {
        this.configuration.addNode(rest[0], node);
      }
      return node;
    };
    NodeFactory.prototype.get = function(kind) {
      return this.factory[kind];
    };
    return NodeFactory;
  }();
  exports.NodeFactory = NodeFactory;
});

// node_modules/mathjax-full/js/input/tex/ParseOptions.js
var require_ParseOptions = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var StackItemFactory_js_1 = __importDefault(require_StackItemFactory());
  var NodeFactory_js_1 = require_NodeFactory();
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var Options_js_1 = require_Options();
  var ParseOptions = function() {
    function ParseOptions(configuration, options) {
      if (options === undefined) {
        options = [];
      }
      this.options = {};
      this.packageData = new Map;
      this.parsers = [];
      this.root = null;
      this.nodeLists = {};
      this.error = false;
      this.handlers = configuration.handlers;
      this.nodeFactory = new NodeFactory_js_1.NodeFactory;
      this.nodeFactory.configuration = this;
      this.nodeFactory.setCreators(configuration.nodes);
      this.itemFactory = new StackItemFactory_js_1.default(configuration.items);
      this.itemFactory.configuration = this;
      Options_js_1.defaultOptions.apply(undefined, __spreadArray([this.options], __read(options), false));
      (0, Options_js_1.defaultOptions)(this.options, configuration.options);
    }
    ParseOptions.prototype.pushParser = function(parser) {
      this.parsers.unshift(parser);
    };
    ParseOptions.prototype.popParser = function() {
      this.parsers.shift();
    };
    Object.defineProperty(ParseOptions.prototype, "parser", {
      get: function() {
        return this.parsers[0];
      },
      enumerable: false,
      configurable: true
    });
    ParseOptions.prototype.clear = function() {
      this.parsers = [];
      this.root = null;
      this.nodeLists = {};
      this.error = false;
      this.tags.resetTag();
    };
    ParseOptions.prototype.addNode = function(property, node) {
      var list = this.nodeLists[property];
      if (!list) {
        list = this.nodeLists[property] = [];
      }
      list.push(node);
      if (node.kind !== property) {
        var inlists = NodeUtil_js_1.default.getProperty(node, "in-lists") || "";
        var lists = (inlists ? inlists.split(/,/) : []).concat(property).join(",");
        NodeUtil_js_1.default.setProperty(node, "in-lists", lists);
      }
    };
    ParseOptions.prototype.getList = function(property) {
      var e_1, _a;
      var list = this.nodeLists[property] || [];
      var result = [];
      try {
        for (var list_1 = __values(list), list_1_1 = list_1.next();!list_1_1.done; list_1_1 = list_1.next()) {
          var node = list_1_1.value;
          if (this.inTree(node)) {
            result.push(node);
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (list_1_1 && !list_1_1.done && (_a = list_1.return))
            _a.call(list_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      this.nodeLists[property] = result;
      return result;
    };
    ParseOptions.prototype.removeFromList = function(property, nodes) {
      var e_2, _a;
      var list = this.nodeLists[property] || [];
      try {
        for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next();!nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
          var node = nodes_1_1.value;
          var i = list.indexOf(node);
          if (i >= 0) {
            list.splice(i, 1);
          }
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return))
            _a.call(nodes_1);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    };
    ParseOptions.prototype.inTree = function(node) {
      while (node && node !== this.root) {
        node = node.parent;
      }
      return !!node;
    };
    return ParseOptions;
  }();
  exports.default = ParseOptions;
});

export { require_NodeFactory, require_ParseOptions };
