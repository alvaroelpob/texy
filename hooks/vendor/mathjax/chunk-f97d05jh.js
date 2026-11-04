import {
  require_ParseOptions
} from "./chunk-xbp64xx2.js";
import {
  require_BaseConfiguration
} from "./chunk-sg4cbyht.js";
import {
  require_NodeUtil,
  require_TexError,
  require_TexParser,
  require_Tags,
  require_Configuration
} from "./chunk-7sscmp2c.js";
import {
  require_InputJax
} from "./chunk-jtsx8czp.js";
import {
  require_MathItem
} from "./chunk-ywbb3f5c.js";
import {
  require_string
} from "./chunk-vqr0xzww.js";
import {
  require_MmlNode
} from "./chunk-nk72tbre.js";
import {
  require_Options
} from "./chunk-kgrs1vrg.js";
import {
  __commonJS
} from "./chunk-cdjrrdrs.js";

// node_modules/mathjax-full/js/core/FindMath.js
var require_FindMath = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AbstractFindMath = undefined;
  var Options_js_1 = require_Options();
  var AbstractFindMath = function() {
    function AbstractFindMath(options) {
      var CLASS = this.constructor;
      this.options = (0, Options_js_1.userOptions)((0, Options_js_1.defaultOptions)({}, CLASS.OPTIONS), options);
    }
    AbstractFindMath.OPTIONS = {};
    return AbstractFindMath;
  }();
  exports.AbstractFindMath = AbstractFindMath;
});

// node_modules/mathjax-full/js/input/tex/FindTeX.js
var require_FindTeX = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FindTeX = undefined;
  var FindMath_js_1 = require_FindMath();
  var string_js_1 = require_string();
  var MathItem_js_1 = require_MathItem();
  var FindTeX = function(_super) {
    __extends(FindTeX, _super);
    function FindTeX(options) {
      var _this = _super.call(this, options) || this;
      _this.getPatterns();
      return _this;
    }
    FindTeX.prototype.getPatterns = function() {
      var _this = this;
      var options = this.options;
      var starts = [], parts = [], subparts = [];
      this.end = {};
      this.env = this.sub = 0;
      var i = 1;
      options["inlineMath"].forEach(function(delims) {
        return _this.addPattern(starts, delims, false);
      });
      options["displayMath"].forEach(function(delims) {
        return _this.addPattern(starts, delims, true);
      });
      if (starts.length) {
        parts.push(starts.sort(string_js_1.sortLength).join("|"));
      }
      if (options["processEnvironments"]) {
        parts.push("\\\\begin\\s*\\{([^}]*)\\}");
        this.env = i;
        i++;
      }
      if (options["processEscapes"]) {
        subparts.push("\\\\([\\\\$])");
      }
      if (options["processRefs"]) {
        subparts.push("(\\\\(?:eq)?ref\\s*\\{[^}]*\\})");
      }
      if (subparts.length) {
        parts.push("(" + subparts.join("|") + ")");
        this.sub = i;
      }
      this.start = new RegExp(parts.join("|"), "g");
      this.hasPatterns = parts.length > 0;
    };
    FindTeX.prototype.addPattern = function(starts, delims, display) {
      var _a = __read(delims, 2), open = _a[0], close = _a[1];
      starts.push((0, string_js_1.quotePattern)(open));
      this.end[open] = [close, display, this.endPattern(close)];
    };
    FindTeX.prototype.endPattern = function(end, endp) {
      return new RegExp((endp || (0, string_js_1.quotePattern)(end)) + "|\\\\(?:[a-zA-Z]|.)|[{}]", "g");
    };
    FindTeX.prototype.findEnd = function(text, n, start, end) {
      var _a = __read(end, 3), close = _a[0], display = _a[1], pattern = _a[2];
      var i = pattern.lastIndex = start.index + start[0].length;
      var match, braces = 0;
      while (match = pattern.exec(text)) {
        if ((match[1] || match[0]) === close && braces === 0) {
          return (0, MathItem_js_1.protoItem)(start[0], text.substr(i, match.index - i), match[0], n, start.index, match.index + match[0].length, display);
        } else if (match[0] === "{") {
          braces++;
        } else if (match[0] === "}" && braces) {
          braces--;
        }
      }
      return null;
    };
    FindTeX.prototype.findMathInString = function(math, n, text) {
      var start, match;
      this.start.lastIndex = 0;
      while (start = this.start.exec(text)) {
        if (start[this.env] !== undefined && this.env) {
          var end = "\\\\end\\s*(\\{" + (0, string_js_1.quotePattern)(start[this.env]) + "\\})";
          match = this.findEnd(text, n, start, ["{" + start[this.env] + "}", true, this.endPattern(null, end)]);
          if (match) {
            match.math = match.open + match.math + match.close;
            match.open = match.close = "";
          }
        } else if (start[this.sub] !== undefined && this.sub) {
          var math_1 = start[this.sub];
          var end = start.index + start[this.sub].length;
          if (math_1.length === 2) {
            match = (0, MathItem_js_1.protoItem)("", math_1.substr(1), "", n, start.index, end);
          } else {
            match = (0, MathItem_js_1.protoItem)("", math_1, "", n, start.index, end, false);
          }
        } else {
          match = this.findEnd(text, n, start, this.end[start[0]]);
        }
        if (match) {
          math.push(match);
          this.start.lastIndex = match.end.n;
        }
      }
    };
    FindTeX.prototype.findMath = function(strings) {
      var math = [];
      if (this.hasPatterns) {
        for (var i = 0, m = strings.length;i < m; i++) {
          this.findMathInString(math, i, strings[i]);
        }
      }
      return math;
    };
    FindTeX.OPTIONS = {
      inlineMath: [
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ],
      processEscapes: true,
      processEnvironments: true,
      processRefs: true
    };
    return FindTeX;
  }(FindMath_js_1.AbstractFindMath);
  exports.FindTeX = FindTeX;
});

// node_modules/mathjax-full/js/input/tex/FilterUtil.js
var require_FilterUtil = __commonJS(function(exports) {
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
  var MmlNode_js_1 = require_MmlNode();
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var FilterUtil;
  (function(FilterUtil) {
    FilterUtil.cleanStretchy = function(arg) {
      var e_1, _a;
      var options = arg.data;
      try {
        for (var _b = __values(options.getList("fixStretchy")), _c = _b.next();!_c.done; _c = _b.next()) {
          var mo = _c.value;
          if (NodeUtil_js_1.default.getProperty(mo, "fixStretchy")) {
            var symbol = NodeUtil_js_1.default.getForm(mo);
            if (symbol && symbol[3] && symbol[3]["stretchy"]) {
              NodeUtil_js_1.default.setAttribute(mo, "stretchy", false);
            }
            var parent_1 = mo.parent;
            if (!NodeUtil_js_1.default.getTexClass(mo) && (!symbol || !symbol[2])) {
              var texAtom = options.nodeFactory.create("node", "TeXAtom", [mo]);
              parent_1.replaceChild(texAtom, mo);
              texAtom.inheritAttributesFrom(mo);
            }
            NodeUtil_js_1.default.removeProperties(mo, "fixStretchy");
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
    };
    FilterUtil.cleanAttributes = function(arg) {
      var node = arg.data.root;
      node.walkTree(function(mml, _d) {
        var e_2, _a;
        var attribs = mml.attributes;
        if (!attribs) {
          return;
        }
        var keep = new Set((attribs.get("mjx-keep-attrs") || "").split(/ /));
        delete attribs.getAllAttributes()["mjx-keep-attrs"];
        try {
          for (var _b = __values(attribs.getExplicitNames()), _c = _b.next();!_c.done; _c = _b.next()) {
            var key = _c.value;
            if (!keep.has(key) && attribs.attributes[key] === mml.attributes.getInherited(key)) {
              delete attribs.attributes[key];
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }, {});
    };
    FilterUtil.combineRelations = function(arg) {
      var e_3, _a, e_4, _b;
      var remove = [];
      try {
        for (var _c = __values(arg.data.getList("mo")), _e = _c.next();!_e.done; _e = _c.next()) {
          var mo = _e.value;
          if (mo.getProperty("relationsCombined") || !mo.parent || mo.parent && !NodeUtil_js_1.default.isType(mo.parent, "mrow") || NodeUtil_js_1.default.getTexClass(mo) !== MmlNode_js_1.TEXCLASS.REL) {
            continue;
          }
          var mml = mo.parent;
          var m2 = undefined;
          var children = mml.childNodes;
          var next = children.indexOf(mo) + 1;
          var variantForm = NodeUtil_js_1.default.getProperty(mo, "variantForm");
          while (next < children.length && (m2 = children[next]) && NodeUtil_js_1.default.isType(m2, "mo") && NodeUtil_js_1.default.getTexClass(m2) === MmlNode_js_1.TEXCLASS.REL) {
            if (variantForm === NodeUtil_js_1.default.getProperty(m2, "variantForm") && _compareExplicit(mo, m2)) {
              NodeUtil_js_1.default.appendChildren(mo, NodeUtil_js_1.default.getChildren(m2));
              _copyExplicit(["stretchy", "rspace"], mo, m2);
              try {
                for (var _f = (e_4 = undefined, __values(m2.getPropertyNames())), _g = _f.next();!_g.done; _g = _f.next()) {
                  var name_1 = _g.value;
                  mo.setProperty(name_1, m2.getProperty(name_1));
                }
              } catch (e_4_1) {
                e_4 = { error: e_4_1 };
              } finally {
                try {
                  if (_g && !_g.done && (_b = _f.return))
                    _b.call(_f);
                } finally {
                  if (e_4)
                    throw e_4.error;
                }
              }
              children.splice(next, 1);
              remove.push(m2);
              m2.parent = null;
              m2.setProperty("relationsCombined", true);
            } else {
              if (mo.attributes.getExplicit("rspace") == null) {
                NodeUtil_js_1.default.setAttribute(mo, "rspace", "0pt");
              }
              if (m2.attributes.getExplicit("lspace") == null) {
                NodeUtil_js_1.default.setAttribute(m2, "lspace", "0pt");
              }
              break;
            }
          }
          mo.attributes.setInherited("form", mo.getForms()[0]);
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (_e && !_e.done && (_a = _c.return))
            _a.call(_c);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
      arg.data.removeFromList("mo", remove);
    };
    var _copyExplicit = function(attrs, node1, node2) {
      var attr1 = node1.attributes;
      var attr2 = node2.attributes;
      attrs.forEach(function(x) {
        var attr = attr2.getExplicit(x);
        if (attr != null) {
          attr1.set(x, attr);
        }
      });
    };
    var _compareExplicit = function(node1, node2) {
      var e_5, _a;
      var filter = function(attr, space) {
        var exp = attr.getExplicitNames();
        return exp.filter(function(x) {
          return x !== space && (x !== "stretchy" || attr.getExplicit("stretchy"));
        });
      };
      var attr1 = node1.attributes;
      var attr2 = node2.attributes;
      var exp1 = filter(attr1, "lspace");
      var exp2 = filter(attr2, "rspace");
      if (exp1.length !== exp2.length) {
        return false;
      }
      try {
        for (var exp1_1 = __values(exp1), exp1_1_1 = exp1_1.next();!exp1_1_1.done; exp1_1_1 = exp1_1.next()) {
          var name_2 = exp1_1_1.value;
          if (attr1.getExplicit(name_2) !== attr2.getExplicit(name_2)) {
            return false;
          }
        }
      } catch (e_5_1) {
        e_5 = { error: e_5_1 };
      } finally {
        try {
          if (exp1_1_1 && !exp1_1_1.done && (_a = exp1_1.return))
            _a.call(exp1_1);
        } finally {
          if (e_5)
            throw e_5.error;
        }
      }
      return true;
    };
    var _cleanSubSup = function(options, low, up) {
      var e_6, _a;
      var remove = [];
      try {
        for (var _b = __values(options.getList("m" + low + up)), _c = _b.next();!_c.done; _c = _b.next()) {
          var mml = _c.value;
          var children = mml.childNodes;
          if (children[mml[low]] && children[mml[up]]) {
            continue;
          }
          var parent_2 = mml.parent;
          var newNode = children[mml[low]] ? options.nodeFactory.create("node", "m" + low, [children[mml.base], children[mml[low]]]) : options.nodeFactory.create("node", "m" + up, [children[mml.base], children[mml[up]]]);
          NodeUtil_js_1.default.copyAttributes(mml, newNode);
          if (parent_2) {
            parent_2.replaceChild(newNode, mml);
          } else {
            options.root = newNode;
          }
          remove.push(mml);
        }
      } catch (e_6_1) {
        e_6 = { error: e_6_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_6)
            throw e_6.error;
        }
      }
      options.removeFromList("m" + low + up, remove);
    };
    FilterUtil.cleanSubSup = function(arg) {
      var options = arg.data;
      if (options.error) {
        return;
      }
      _cleanSubSup(options, "sub", "sup");
      _cleanSubSup(options, "under", "over");
    };
    var _moveLimits = function(options, underover, subsup) {
      var e_7, _a;
      var remove = [];
      try {
        for (var _b = __values(options.getList(underover)), _c = _b.next();!_c.done; _c = _b.next()) {
          var mml = _c.value;
          if (mml.attributes.get("displaystyle")) {
            continue;
          }
          var base = mml.childNodes[mml.base];
          var mo = base.coreMO();
          if (base.getProperty("movablelimits") && !mo.attributes.getExplicit("movablelimits")) {
            var node = options.nodeFactory.create("node", subsup, mml.childNodes);
            NodeUtil_js_1.default.copyAttributes(mml, node);
            if (mml.parent) {
              mml.parent.replaceChild(node, mml);
            } else {
              options.root = node;
            }
            remove.push(mml);
          }
        }
      } catch (e_7_1) {
        e_7 = { error: e_7_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_7)
            throw e_7.error;
        }
      }
      options.removeFromList(underover, remove);
    };
    FilterUtil.moveLimits = function(arg) {
      var options = arg.data;
      _moveLimits(options, "munderover", "msubsup");
      _moveLimits(options, "munder", "msub");
      _moveLimits(options, "mover", "msup");
    };
    FilterUtil.setInherited = function(arg) {
      arg.data.root.setInheritedAttributes({}, arg.math["display"], 0, false);
    };
  })(FilterUtil || (FilterUtil = {}));
  exports.default = FilterUtil;
});

// node_modules/mathjax-full/js/input/tex.js
var require_tex = __commonJS(function(exports) {
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
  var __assign = exports && exports.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length;i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TeX = undefined;
  var InputJax_js_1 = require_InputJax();
  var Options_js_1 = require_Options();
  var FindTeX_js_1 = require_FindTeX();
  var FilterUtil_js_1 = __importDefault(require_FilterUtil());
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var TexParser_js_1 = __importDefault(require_TexParser());
  var TexError_js_1 = __importDefault(require_TexError());
  var ParseOptions_js_1 = __importDefault(require_ParseOptions());
  var Tags_js_1 = require_Tags();
  var Configuration_js_1 = require_Configuration();
  require_BaseConfiguration();
  var TeX = function(_super) {
    __extends(TeX, _super);
    function TeX(options) {
      if (options === undefined) {
        options = {};
      }
      var _this = this;
      var _a = __read((0, Options_js_1.separateOptions)(options, TeX.OPTIONS, FindTeX_js_1.FindTeX.OPTIONS), 3), rest = _a[0], tex = _a[1], find = _a[2];
      _this = _super.call(this, tex) || this;
      _this.findTeX = _this.options["FindTeX"] || new FindTeX_js_1.FindTeX(find);
      var packages = _this.options.packages;
      var configuration = _this.configuration = TeX.configure(packages);
      var parseOptions = _this._parseOptions = new ParseOptions_js_1.default(configuration, [_this.options, Tags_js_1.TagsFactory.OPTIONS]);
      (0, Options_js_1.userOptions)(parseOptions.options, rest);
      configuration.config(_this);
      TeX.tags(parseOptions, configuration);
      _this.postFilters.add(FilterUtil_js_1.default.cleanSubSup, -6);
      _this.postFilters.add(FilterUtil_js_1.default.setInherited, -5);
      _this.postFilters.add(FilterUtil_js_1.default.moveLimits, -4);
      _this.postFilters.add(FilterUtil_js_1.default.cleanStretchy, -3);
      _this.postFilters.add(FilterUtil_js_1.default.cleanAttributes, -2);
      _this.postFilters.add(FilterUtil_js_1.default.combineRelations, -1);
      return _this;
    }
    TeX.configure = function(packages) {
      var configuration = new Configuration_js_1.ParserConfiguration(packages, ["tex"]);
      configuration.init();
      return configuration;
    };
    TeX.tags = function(options, configuration) {
      Tags_js_1.TagsFactory.addTags(configuration.tags);
      Tags_js_1.TagsFactory.setDefault(options.options.tags);
      options.tags = Tags_js_1.TagsFactory.getDefault();
      options.tags.configuration = options;
    };
    TeX.prototype.setMmlFactory = function(mmlFactory) {
      _super.prototype.setMmlFactory.call(this, mmlFactory);
      this._parseOptions.nodeFactory.setMmlFactory(mmlFactory);
    };
    Object.defineProperty(TeX.prototype, "parseOptions", {
      get: function() {
        return this._parseOptions;
      },
      enumerable: false,
      configurable: true
    });
    TeX.prototype.reset = function(tag) {
      if (tag === undefined) {
        tag = 0;
      }
      this.parseOptions.tags.reset(tag);
    };
    TeX.prototype.compile = function(math, document) {
      this.parseOptions.clear();
      this.executeFilters(this.preFilters, math, document, this.parseOptions);
      var display = math.display;
      this.latex = math.math;
      var node;
      this.parseOptions.tags.startEquation(math);
      var globalEnv;
      try {
        var parser = new TexParser_js_1.default(this.latex, { display, isInner: false }, this.parseOptions);
        node = parser.mml();
        globalEnv = parser.stack.global;
      } catch (err) {
        if (!(err instanceof TexError_js_1.default)) {
          throw err;
        }
        this.parseOptions.error = true;
        node = this.options.formatError(this, err);
      }
      node = this.parseOptions.nodeFactory.create("node", "math", [node]);
      if (globalEnv === null || globalEnv === undefined ? undefined : globalEnv.indentalign) {
        NodeUtil_js_1.default.setAttribute(node, "indentalign", globalEnv.indentalign);
      }
      if (display) {
        NodeUtil_js_1.default.setAttribute(node, "display", "block");
      }
      this.parseOptions.tags.finishEquation(math);
      this.parseOptions.root = node;
      this.executeFilters(this.postFilters, math, document, this.parseOptions);
      this.mathNode = this.parseOptions.root;
      return this.mathNode;
    };
    TeX.prototype.findMath = function(strings) {
      return this.findTeX.findMath(strings);
    };
    TeX.prototype.formatError = function(err) {
      var message = err.message.replace(/\n.*/, "");
      return this.parseOptions.nodeFactory.create("error", message, err.id, this.latex);
    };
    TeX.NAME = "TeX";
    TeX.OPTIONS = __assign(__assign({}, InputJax_js_1.AbstractInputJax.OPTIONS), { FindTeX: null, packages: ["base"], digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/, maxBuffer: 5 * 1024, formatError: function(jax, err) {
      return jax.formatError(err);
    } });
    return TeX;
  }(InputJax_js_1.AbstractInputJax);
  exports.TeX = TeX;
});

export { require_tex };
