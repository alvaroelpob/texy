import {
  require_OutputJax2
} from "./chunk-82xjxb6f.js";
import {
  require_MathItem
} from "./chunk-ywbb3f5c.js";
import {
  require_lengths
} from "./chunk-79ne31ds.js";
import {
  require_Options
} from "./chunk-kgrs1vrg.js";
import {
  __commonJS
} from "./chunk-cdjrrdrs.js";

// node_modules/mathjax-full/js/util/Styles.js
var require_Styles = __commonJS(function(exports) {
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
  exports.Styles = undefined;
  var TRBL = ["top", "right", "bottom", "left"];
  var WSC = ["width", "style", "color"];
  function splitSpaces(text) {
    var parts = text.split(/((?:'[^']*'|"[^"]*"|,[\s\n]|[^\s\n])*)/g);
    var split = [];
    while (parts.length > 1) {
      parts.shift();
      split.push(parts.shift());
    }
    return split;
  }
  function splitTRBL(name) {
    var e_1, _a;
    var parts = splitSpaces(this.styles[name]);
    if (parts.length === 0) {
      parts.push("");
    }
    if (parts.length === 1) {
      parts.push(parts[0]);
    }
    if (parts.length === 2) {
      parts.push(parts[0]);
    }
    if (parts.length === 3) {
      parts.push(parts[1]);
    }
    try {
      for (var _b = __values(Styles.connect[name].children), _c = _b.next();!_c.done; _c = _b.next()) {
        var child = _c.value;
        this.setStyle(this.childName(name, child), parts.shift());
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
  }
  function combineTRBL(name) {
    var e_2, _a;
    var children = Styles.connect[name].children;
    var parts = [];
    try {
      for (var children_1 = __values(children), children_1_1 = children_1.next();!children_1_1.done; children_1_1 = children_1.next()) {
        var child = children_1_1.value;
        var part = this.styles[name + "-" + child];
        if (!part) {
          delete this.styles[name];
          return;
        }
        parts.push(part);
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (children_1_1 && !children_1_1.done && (_a = children_1.return))
          _a.call(children_1);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    if (parts[3] === parts[1]) {
      parts.pop();
      if (parts[2] === parts[0]) {
        parts.pop();
        if (parts[1] === parts[0]) {
          parts.pop();
        }
      }
    }
    this.styles[name] = parts.join(" ");
  }
  function splitSame(name) {
    var e_3, _a;
    try {
      for (var _b = __values(Styles.connect[name].children), _c = _b.next();!_c.done; _c = _b.next()) {
        var child = _c.value;
        this.setStyle(this.childName(name, child), this.styles[name]);
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
  }
  function combineSame(name) {
    var e_4, _a;
    var children = __spreadArray([], __read(Styles.connect[name].children), false);
    var value = this.styles[this.childName(name, children.shift())];
    try {
      for (var children_2 = __values(children), children_2_1 = children_2.next();!children_2_1.done; children_2_1 = children_2.next()) {
        var child = children_2_1.value;
        if (this.styles[this.childName(name, child)] !== value) {
          delete this.styles[name];
          return;
        }
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (children_2_1 && !children_2_1.done && (_a = children_2.return))
          _a.call(children_2);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
    this.styles[name] = value;
  }
  var BORDER = {
    width: /^(?:[\d.]+(?:[a-z]+)|thin|medium|thick|inherit|initial|unset)$/,
    style: /^(?:none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit|initial|unset)$/
  };
  function splitWSC(name) {
    var e_5, _a, e_6, _b;
    var parts = { width: "", style: "", color: "" };
    try {
      for (var _c = __values(splitSpaces(this.styles[name])), _d = _c.next();!_d.done; _d = _c.next()) {
        var part = _d.value;
        if (part.match(BORDER.width) && parts.width === "") {
          parts.width = part;
        } else if (part.match(BORDER.style) && parts.style === "") {
          parts.style = part;
        } else {
          parts.color = part;
        }
      }
    } catch (e_5_1) {
      e_5 = { error: e_5_1 };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return))
          _a.call(_c);
      } finally {
        if (e_5)
          throw e_5.error;
      }
    }
    try {
      for (var _e = __values(Styles.connect[name].children), _f = _e.next();!_f.done; _f = _e.next()) {
        var child = _f.value;
        this.setStyle(this.childName(name, child), parts[child]);
      }
    } catch (e_6_1) {
      e_6 = { error: e_6_1 };
    } finally {
      try {
        if (_f && !_f.done && (_b = _e.return))
          _b.call(_e);
      } finally {
        if (e_6)
          throw e_6.error;
      }
    }
  }
  function combineWSC(name) {
    var e_7, _a;
    var parts = [];
    try {
      for (var _b = __values(Styles.connect[name].children), _c = _b.next();!_c.done; _c = _b.next()) {
        var child = _c.value;
        var value = this.styles[this.childName(name, child)];
        if (value) {
          parts.push(value);
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
    if (parts.length) {
      this.styles[name] = parts.join(" ");
    } else {
      delete this.styles[name];
    }
  }
  var FONT = {
    style: /^(?:normal|italic|oblique|inherit|initial|unset)$/,
    variant: new RegExp("^(?:" + [
      "normal|none",
      "inherit|initial|unset",
      "common-ligatures|no-common-ligatures",
      "discretionary-ligatures|no-discretionary-ligatures",
      "historical-ligatures|no-historical-ligatures",
      "contextual|no-contextual",
      "(?:stylistic|character-variant|swash|ornaments|annotation)\\([^)]*\\)",
      "small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
      "lining-nums|oldstyle-nums|proportional-nums|tabular-nums",
      "diagonal-fractions|stacked-fractions",
      "ordinal|slashed-zero",
      "jis78|jis83|jis90|jis04|simplified|traditional",
      "full-width|proportional-width",
      "ruby"
    ].join("|") + ")$"),
    weight: /^(?:normal|bold|bolder|lighter|[1-9]00|inherit|initial|unset)$/,
    stretch: new RegExp("^(?:" + [
      "normal",
      "(?:(?:ultra|extra|semi)-)?condensed",
      "(?:(?:semi|extra|ulta)-)?expanded",
      "inherit|initial|unset"
    ].join("|") + ")$"),
    size: new RegExp("^(?:" + [
      "xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller",
      "[d.]+%|[d.]+[a-z]+",
      "inherit|initial|unset"
    ].join("|") + ")" + "(?:/(?:normal|[d.+](?:%|[a-z]+)?))?$")
  };
  function splitFont(name) {
    var e_8, _a, e_9, _b;
    var parts = splitSpaces(this.styles[name]);
    var value = {
      style: "",
      variant: [],
      weight: "",
      stretch: "",
      size: "",
      family: "",
      "line-height": ""
    };
    try {
      for (var parts_1 = __values(parts), parts_1_1 = parts_1.next();!parts_1_1.done; parts_1_1 = parts_1.next()) {
        var part = parts_1_1.value;
        value.family = part;
        try {
          for (var _c = (e_9 = undefined, __values(Object.keys(FONT))), _d = _c.next();!_d.done; _d = _c.next()) {
            var name_1 = _d.value;
            if ((Array.isArray(value[name_1]) || value[name_1] === "") && part.match(FONT[name_1])) {
              if (name_1 === "size") {
                var _e = __read(part.split(/\//), 2), size = _e[0], height = _e[1];
                value[name_1] = size;
                if (height) {
                  value["line-height"] = height;
                }
              } else if (value.size === "") {
                if (Array.isArray(value[name_1])) {
                  value[name_1].push(part);
                } else {
                  value[name_1] = part;
                }
              }
            }
          }
        } catch (e_9_1) {
          e_9 = { error: e_9_1 };
        } finally {
          try {
            if (_d && !_d.done && (_b = _c.return))
              _b.call(_c);
          } finally {
            if (e_9)
              throw e_9.error;
          }
        }
      }
    } catch (e_8_1) {
      e_8 = { error: e_8_1 };
    } finally {
      try {
        if (parts_1_1 && !parts_1_1.done && (_a = parts_1.return))
          _a.call(parts_1);
      } finally {
        if (e_8)
          throw e_8.error;
      }
    }
    saveFontParts(name, value);
    delete this.styles[name];
  }
  function saveFontParts(name, value) {
    var e_10, _a;
    try {
      for (var _b = __values(Styles.connect[name].children), _c = _b.next();!_c.done; _c = _b.next()) {
        var child = _c.value;
        var cname = this.childName(name, child);
        if (Array.isArray(value[child])) {
          var values = value[child];
          if (values.length) {
            this.styles[cname] = values.join(" ");
          }
        } else if (value[child] !== "") {
          this.styles[cname] = value[child];
        }
      }
    } catch (e_10_1) {
      e_10 = { error: e_10_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_10)
          throw e_10.error;
      }
    }
  }
  function combineFont(_name) {}
  var Styles = function() {
    function Styles(cssText) {
      if (cssText === undefined) {
        cssText = "";
      }
      this.parse(cssText);
    }
    Object.defineProperty(Styles.prototype, "cssText", {
      get: function() {
        var e_11, _a;
        var styles = [];
        try {
          for (var _b = __values(Object.keys(this.styles)), _c = _b.next();!_c.done; _c = _b.next()) {
            var name_2 = _c.value;
            var parent_1 = this.parentName(name_2);
            if (!this.styles[parent_1]) {
              styles.push(name_2 + ": " + this.styles[name_2] + ";");
            }
          }
        } catch (e_11_1) {
          e_11 = { error: e_11_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_11)
              throw e_11.error;
          }
        }
        return styles.join(" ");
      },
      enumerable: false,
      configurable: true
    });
    Styles.prototype.set = function(name, value) {
      name = this.normalizeName(name);
      this.setStyle(name, value);
      if (Styles.connect[name] && !Styles.connect[name].combine) {
        this.combineChildren(name);
        delete this.styles[name];
      }
      while (name.match(/-/)) {
        name = this.parentName(name);
        if (!Styles.connect[name])
          break;
        Styles.connect[name].combine.call(this, name);
      }
    };
    Styles.prototype.get = function(name) {
      name = this.normalizeName(name);
      return this.styles.hasOwnProperty(name) ? this.styles[name] : "";
    };
    Styles.prototype.setStyle = function(name, value) {
      this.styles[name] = value;
      if (Styles.connect[name] && Styles.connect[name].children) {
        Styles.connect[name].split.call(this, name);
      }
      if (value === "") {
        delete this.styles[name];
      }
    };
    Styles.prototype.combineChildren = function(name) {
      var e_12, _a;
      var parent = this.parentName(name);
      try {
        for (var _b = __values(Styles.connect[name].children), _c = _b.next();!_c.done; _c = _b.next()) {
          var child = _c.value;
          var cname = this.childName(parent, child);
          Styles.connect[cname].combine.call(this, cname);
        }
      } catch (e_12_1) {
        e_12 = { error: e_12_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_12)
            throw e_12.error;
        }
      }
    };
    Styles.prototype.parentName = function(name) {
      var parent = name.replace(/-[^-]*$/, "");
      return name === parent ? "" : parent;
    };
    Styles.prototype.childName = function(name, child) {
      if (child.match(/-/)) {
        return child;
      }
      if (Styles.connect[name] && !Styles.connect[name].combine) {
        child += name.replace(/.*-/, "-");
        name = this.parentName(name);
      }
      return name + "-" + child;
    };
    Styles.prototype.normalizeName = function(name) {
      return name.replace(/[A-Z]/g, function(c) {
        return "-" + c.toLowerCase();
      });
    };
    Styles.prototype.parse = function(cssText) {
      if (cssText === undefined) {
        cssText = "";
      }
      var PATTERN = this.constructor.pattern;
      this.styles = {};
      var parts = cssText.replace(PATTERN.comment, "").split(PATTERN.style);
      while (parts.length > 1) {
        var _a = __read(parts.splice(0, 3), 3), space = _a[0], name_3 = _a[1], value = _a[2];
        if (space.match(/[^\s\n]/))
          return;
        this.set(name_3, value);
      }
    };
    Styles.pattern = {
      style: /([-a-z]+)[\s\n]*:[\s\n]*((?:'[^']*'|"[^"]*"|\n|.)*?)[\s\n]*(?:;|$)/g,
      comment: /\/\*[^]*?\*\//g
    };
    Styles.connect = {
      padding: {
        children: TRBL,
        split: splitTRBL,
        combine: combineTRBL
      },
      border: {
        children: TRBL,
        split: splitSame,
        combine: combineSame
      },
      "border-top": {
        children: WSC,
        split: splitWSC,
        combine: combineWSC
      },
      "border-right": {
        children: WSC,
        split: splitWSC,
        combine: combineWSC
      },
      "border-bottom": {
        children: WSC,
        split: splitWSC,
        combine: combineWSC
      },
      "border-left": {
        children: WSC,
        split: splitWSC,
        combine: combineWSC
      },
      "border-width": {
        children: TRBL,
        split: splitTRBL,
        combine: null
      },
      "border-style": {
        children: TRBL,
        split: splitTRBL,
        combine: null
      },
      "border-color": {
        children: TRBL,
        split: splitTRBL,
        combine: null
      },
      font: {
        children: ["style", "variant", "weight", "stretch", "line-height", "size", "family"],
        split: splitFont,
        combine: combineFont
      }
    };
    return Styles;
  }();
  exports.Styles = Styles;
});

// node_modules/mathjax-full/js/util/StyleList.js
var require_StyleList = __commonJS(function(exports) {
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
  exports.CssStyles = undefined;
  var CssStyles = function() {
    function CssStyles(styles) {
      if (styles === undefined) {
        styles = null;
      }
      this.styles = {};
      this.addStyles(styles);
    }
    Object.defineProperty(CssStyles.prototype, "cssText", {
      get: function() {
        return this.getStyleString();
      },
      enumerable: false,
      configurable: true
    });
    CssStyles.prototype.addStyles = function(styles) {
      var e_1, _a;
      if (!styles)
        return;
      try {
        for (var _b = __values(Object.keys(styles)), _c = _b.next();!_c.done; _c = _b.next()) {
          var style = _c.value;
          if (!this.styles[style]) {
            this.styles[style] = {};
          }
          Object.assign(this.styles[style], styles[style]);
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
    CssStyles.prototype.removeStyles = function() {
      var e_2, _a;
      var selectors = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        selectors[_i] = arguments[_i];
      }
      try {
        for (var selectors_1 = __values(selectors), selectors_1_1 = selectors_1.next();!selectors_1_1.done; selectors_1_1 = selectors_1.next()) {
          var selector = selectors_1_1.value;
          delete this.styles[selector];
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (selectors_1_1 && !selectors_1_1.done && (_a = selectors_1.return))
            _a.call(selectors_1);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    };
    CssStyles.prototype.clear = function() {
      this.styles = {};
    };
    CssStyles.prototype.getStyleString = function() {
      return this.getStyleRules().join(`

`);
    };
    CssStyles.prototype.getStyleRules = function() {
      var e_3, _a;
      var selectors = Object.keys(this.styles);
      var defs = new Array(selectors.length);
      var i = 0;
      try {
        for (var selectors_2 = __values(selectors), selectors_2_1 = selectors_2.next();!selectors_2_1.done; selectors_2_1 = selectors_2.next()) {
          var selector = selectors_2_1.value;
          defs[i++] = selector + ` {
` + this.getStyleDefString(this.styles[selector]) + `
}`;
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (selectors_2_1 && !selectors_2_1.done && (_a = selectors_2.return))
            _a.call(selectors_2);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
      return defs;
    };
    CssStyles.prototype.getStyleDefString = function(styles) {
      var e_4, _a;
      var properties = Object.keys(styles);
      var values = new Array(properties.length);
      var i = 0;
      try {
        for (var properties_1 = __values(properties), properties_1_1 = properties_1.next();!properties_1_1.done; properties_1_1 = properties_1.next()) {
          var property = properties_1_1.value;
          values[i++] = "  " + property + ": " + styles[property] + ";";
        }
      } catch (e_4_1) {
        e_4 = { error: e_4_1 };
      } finally {
        try {
          if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return))
            _a.call(properties_1);
        } finally {
          if (e_4)
            throw e_4.error;
        }
      }
      return values.join(`
`);
    };
    return CssStyles;
  }();
  exports.CssStyles = CssStyles;
});

// node_modules/mathjax-full/js/output/common/OutputJax.js
var require_OutputJax = __commonJS(function(exports) {
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
  exports.CommonOutputJax = undefined;
  var OutputJax_js_1 = require_OutputJax2();
  var MathItem_js_1 = require_MathItem();
  var Options_js_1 = require_Options();
  var lengths_js_1 = require_lengths();
  var Styles_js_1 = require_Styles();
  var StyleList_js_1 = require_StyleList();
  var CommonOutputJax = function(_super) {
    __extends(CommonOutputJax, _super);
    function CommonOutputJax(options, defaultFactory, defaultFont) {
      if (options === undefined) {
        options = null;
      }
      if (defaultFactory === undefined) {
        defaultFactory = null;
      }
      if (defaultFont === undefined) {
        defaultFont = null;
      }
      var _this = this;
      var _a = __read((0, Options_js_1.separateOptions)(options, defaultFont.OPTIONS), 2), jaxOptions = _a[0], fontOptions = _a[1];
      _this = _super.call(this, jaxOptions) || this;
      _this.factory = _this.options.wrapperFactory || new defaultFactory;
      _this.factory.jax = _this;
      _this.cssStyles = _this.options.cssStyles || new StyleList_js_1.CssStyles;
      _this.font = _this.options.font || new defaultFont(fontOptions);
      _this.unknownCache = new Map;
      return _this;
    }
    CommonOutputJax.prototype.typeset = function(math, html) {
      this.setDocument(html);
      var node = this.createNode();
      this.toDOM(math, node, html);
      return node;
    };
    CommonOutputJax.prototype.createNode = function() {
      var jax = this.constructor.NAME;
      return this.html("mjx-container", { class: "MathJax", jax });
    };
    CommonOutputJax.prototype.setScale = function(node) {
      var scale = this.math.metrics.scale * this.options.scale;
      if (scale !== 1) {
        this.adaptor.setStyle(node, "fontSize", (0, lengths_js_1.percent)(scale));
      }
    };
    CommonOutputJax.prototype.toDOM = function(math, node, html) {
      if (html === undefined) {
        html = null;
      }
      this.setDocument(html);
      this.math = math;
      this.pxPerEm = math.metrics.ex / this.font.params.x_height;
      math.root.setTeXclass(null);
      this.setScale(node);
      this.nodeMap = new Map;
      this.container = node;
      this.processMath(math.root, node);
      this.nodeMap = null;
      this.executeFilters(this.postFilters, math, html, node);
    };
    CommonOutputJax.prototype.getBBox = function(math, html) {
      this.setDocument(html);
      this.math = math;
      math.root.setTeXclass(null);
      this.nodeMap = new Map;
      var bbox = this.factory.wrap(math.root).getOuterBBox();
      this.nodeMap = null;
      return bbox;
    };
    CommonOutputJax.prototype.getMetrics = function(html) {
      var e_1, _a;
      this.setDocument(html);
      var adaptor = this.adaptor;
      var maps = this.getMetricMaps(html);
      try {
        for (var _b = __values(html.math), _c = _b.next();!_c.done; _c = _b.next()) {
          var math = _c.value;
          var parent_1 = adaptor.parent(math.start.node);
          if (math.state() < MathItem_js_1.STATE.METRICS && parent_1) {
            var map = maps[math.display ? 1 : 0];
            var _d = map.get(parent_1), { em, ex, containerWidth, lineWidth, scale, family } = _d;
            math.setMetrics(em, ex, containerWidth, lineWidth, scale);
            if (this.options.mtextInheritFont) {
              math.outputData.mtextFamily = family;
            }
            if (this.options.merrorInheritFont) {
              math.outputData.merrorFamily = family;
            }
            math.state(MathItem_js_1.STATE.METRICS);
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
    CommonOutputJax.prototype.getMetricsFor = function(node, display) {
      var getFamily = this.options.mtextInheritFont || this.options.merrorInheritFont;
      var test = this.getTestElement(node, display);
      var metrics = this.measureMetrics(test, getFamily);
      this.adaptor.remove(test);
      return metrics;
    };
    CommonOutputJax.prototype.getMetricMaps = function(html) {
      var e_2, _a, e_3, _b, e_4, _c, e_5, _d, e_6, _e;
      var adaptor = this.adaptor;
      var domMaps = [new Map, new Map];
      try {
        for (var _f = __values(html.math), _g = _f.next();!_g.done; _g = _f.next()) {
          var math = _g.value;
          var node = adaptor.parent(math.start.node);
          if (node && math.state() < MathItem_js_1.STATE.METRICS) {
            var map = domMaps[math.display ? 1 : 0];
            if (!map.has(node)) {
              map.set(node, this.getTestElement(node, math.display));
            }
          }
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_g && !_g.done && (_a = _f.return))
            _a.call(_f);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      var getFamily = this.options.mtextInheritFont || this.options.merrorInheritFont;
      var maps = [new Map, new Map];
      try {
        for (var _h = __values(maps.keys()), _j = _h.next();!_j.done; _j = _h.next()) {
          var i = _j.value;
          try {
            for (var _k = (e_4 = undefined, __values(domMaps[i].keys())), _l = _k.next();!_l.done; _l = _k.next()) {
              var node = _l.value;
              maps[i].set(node, this.measureMetrics(domMaps[i].get(node), getFamily));
            }
          } catch (e_4_1) {
            e_4 = { error: e_4_1 };
          } finally {
            try {
              if (_l && !_l.done && (_c = _k.return))
                _c.call(_k);
            } finally {
              if (e_4)
                throw e_4.error;
            }
          }
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (_j && !_j.done && (_b = _h.return))
            _b.call(_h);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
      try {
        for (var _m = __values(maps.keys()), _o = _m.next();!_o.done; _o = _m.next()) {
          var i = _o.value;
          try {
            for (var _p = (e_6 = undefined, __values(domMaps[i].values())), _q = _p.next();!_q.done; _q = _p.next()) {
              var node = _q.value;
              adaptor.remove(node);
            }
          } catch (e_6_1) {
            e_6 = { error: e_6_1 };
          } finally {
            try {
              if (_q && !_q.done && (_e = _p.return))
                _e.call(_p);
            } finally {
              if (e_6)
                throw e_6.error;
            }
          }
        }
      } catch (e_5_1) {
        e_5 = { error: e_5_1 };
      } finally {
        try {
          if (_o && !_o.done && (_d = _m.return))
            _d.call(_m);
        } finally {
          if (e_5)
            throw e_5.error;
        }
      }
      return maps;
    };
    CommonOutputJax.prototype.getTestElement = function(node, display) {
      var adaptor = this.adaptor;
      if (!this.testInline) {
        this.testInline = this.html("mjx-test", { style: {
          display: "inline-block",
          width: "100%",
          "font-style": "normal",
          "font-weight": "normal",
          "font-size": "100%",
          "font-size-adjust": "none",
          "text-indent": 0,
          "text-transform": "none",
          "letter-spacing": "normal",
          "word-spacing": "normal",
          overflow: "hidden",
          height: "1px",
          "margin-right": "-1px"
        } }, [
          this.html("mjx-left-box", { style: {
            display: "inline-block",
            width: 0,
            float: "left"
          } }),
          this.html("mjx-ex-box", { style: {
            position: "absolute",
            overflow: "hidden",
            width: "1px",
            height: "60ex"
          } }),
          this.html("mjx-right-box", { style: {
            display: "inline-block",
            width: 0,
            float: "right"
          } })
        ]);
        this.testDisplay = adaptor.clone(this.testInline);
        adaptor.setStyle(this.testDisplay, "display", "table");
        adaptor.setStyle(this.testDisplay, "margin-right", "");
        adaptor.setStyle(adaptor.firstChild(this.testDisplay), "display", "none");
        var right = adaptor.lastChild(this.testDisplay);
        adaptor.setStyle(right, "display", "table-cell");
        adaptor.setStyle(right, "width", "10000em");
        adaptor.setStyle(right, "float", "");
      }
      return adaptor.append(node, adaptor.clone(display ? this.testDisplay : this.testInline));
    };
    CommonOutputJax.prototype.measureMetrics = function(node, getFamily) {
      var adaptor = this.adaptor;
      var family = getFamily ? adaptor.fontFamily(node) : "";
      var em = adaptor.fontSize(node);
      var _a = __read(adaptor.nodeSize(adaptor.childNode(node, 1)), 2), w = _a[0], h = _a[1];
      var ex = w ? h / 60 : em * this.options.exFactor;
      var containerWidth = !w ? 1e6 : adaptor.getStyle(node, "display") === "table" ? adaptor.nodeSize(adaptor.lastChild(node))[0] - 1 : adaptor.nodeBBox(adaptor.lastChild(node)).left - adaptor.nodeBBox(adaptor.firstChild(node)).left - 2;
      var scale = Math.max(this.options.minScale, this.options.matchFontHeight ? ex / this.font.params.x_height / em : 1);
      var lineWidth = 1e6;
      return { em, ex, containerWidth, lineWidth, scale, family };
    };
    CommonOutputJax.prototype.styleSheet = function(html) {
      var e_7, _a;
      this.setDocument(html);
      this.cssStyles.clear();
      this.cssStyles.addStyles(this.constructor.commonStyles);
      if ("getStyles" in html) {
        try {
          for (var _b = __values(html.getStyles()), _c = _b.next();!_c.done; _c = _b.next()) {
            var styles = _c.value;
            this.cssStyles.addStyles(styles);
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
      }
      this.addWrapperStyles(this.cssStyles);
      this.addFontStyles(this.cssStyles);
      var sheet = this.html("style", { id: "MJX-styles" }, [this.text(`
` + this.cssStyles.cssText + `
`)]);
      return sheet;
    };
    CommonOutputJax.prototype.addFontStyles = function(styles) {
      styles.addStyles(this.font.styles);
    };
    CommonOutputJax.prototype.addWrapperStyles = function(styles) {
      var e_8, _a;
      try {
        for (var _b = __values(this.factory.getKinds()), _c = _b.next();!_c.done; _c = _b.next()) {
          var kind = _c.value;
          this.addClassStyles(this.factory.getNodeClass(kind), styles);
        }
      } catch (e_8_1) {
        e_8 = { error: e_8_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_8)
            throw e_8.error;
        }
      }
    };
    CommonOutputJax.prototype.addClassStyles = function(CLASS, styles) {
      styles.addStyles(CLASS.styles);
    };
    CommonOutputJax.prototype.setDocument = function(html) {
      if (html) {
        this.document = html;
        this.adaptor.document = html.document;
      }
    };
    CommonOutputJax.prototype.html = function(type, def, content, ns) {
      if (def === undefined) {
        def = {};
      }
      if (content === undefined) {
        content = [];
      }
      return this.adaptor.node(type, def, content, ns);
    };
    CommonOutputJax.prototype.text = function(text) {
      return this.adaptor.text(text);
    };
    CommonOutputJax.prototype.fixed = function(m, n) {
      if (n === undefined) {
        n = 3;
      }
      if (Math.abs(m) < 0.0006) {
        return "0";
      }
      return m.toFixed(n).replace(/\.?0+$/, "");
    };
    CommonOutputJax.prototype.measureText = function(text, variant, font) {
      if (font === undefined) {
        font = ["", false, false];
      }
      var node = this.unknownText(text, variant);
      if (variant === "-explicitFont") {
        var styles = this.cssFontStyles(font);
        this.adaptor.setAttributes(node, { style: styles });
      }
      return this.measureTextNodeWithCache(node, text, variant, font);
    };
    CommonOutputJax.prototype.measureTextNodeWithCache = function(text, chars, variant, font) {
      if (font === undefined) {
        font = ["", false, false];
      }
      if (variant === "-explicitFont") {
        variant = [font[0], font[1] ? "T" : "F", font[2] ? "T" : "F", ""].join("-");
      }
      if (!this.unknownCache.has(variant)) {
        this.unknownCache.set(variant, new Map);
      }
      var map = this.unknownCache.get(variant);
      var cached = map.get(chars);
      if (cached)
        return cached;
      var bbox = this.measureTextNode(text);
      map.set(chars, bbox);
      return bbox;
    };
    CommonOutputJax.prototype.measureXMLnode = function(xml) {
      var adaptor = this.adaptor;
      var content = this.html("mjx-xml-block", { style: { display: "inline-block" } }, [adaptor.clone(xml)]);
      var base = this.html("mjx-baseline", { style: { display: "inline-block", width: 0, height: 0 } });
      var style = {
        position: "absolute",
        display: "inline-block",
        "font-family": "initial",
        "line-height": "normal"
      };
      var node = this.html("mjx-measure-xml", { style }, [base, content]);
      adaptor.append(adaptor.parent(this.math.start.node), this.container);
      adaptor.append(this.container, node);
      var em = this.math.metrics.em * this.math.metrics.scale;
      var _a = adaptor.nodeBBox(content), { left, right, bottom, top } = _a;
      var w = (right - left) / em;
      var h = (adaptor.nodeBBox(base).top - top) / em;
      var d = (bottom - top) / em - h;
      adaptor.remove(this.container);
      adaptor.remove(node);
      return { w, h, d };
    };
    CommonOutputJax.prototype.cssFontStyles = function(font, styles) {
      if (styles === undefined) {
        styles = {};
      }
      var _a = __read(font, 3), family = _a[0], italic = _a[1], bold = _a[2];
      styles["font-family"] = this.font.getFamily(family);
      if (italic)
        styles["font-style"] = "italic";
      if (bold)
        styles["font-weight"] = "bold";
      return styles;
    };
    CommonOutputJax.prototype.getFontData = function(styles) {
      if (!styles) {
        styles = new Styles_js_1.Styles;
      }
      return [
        this.font.getFamily(styles.get("font-family")),
        styles.get("font-style") === "italic",
        styles.get("font-weight") === "bold"
      ];
    };
    CommonOutputJax.NAME = "Common";
    CommonOutputJax.OPTIONS = __assign(__assign({}, OutputJax_js_1.AbstractOutputJax.OPTIONS), { scale: 1, minScale: 0.5, mtextInheritFont: false, merrorInheritFont: false, mtextFont: "", merrorFont: "serif", mathmlSpacing: false, skipAttributes: {}, exFactor: 0.5, displayAlign: "center", displayIndent: "0", wrapperFactory: null, font: null, cssStyles: null });
    CommonOutputJax.commonStyles = {};
    return CommonOutputJax;
  }(OutputJax_js_1.AbstractOutputJax);
  exports.CommonOutputJax = CommonOutputJax;
});

export { require_Styles, require_OutputJax };
