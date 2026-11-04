import {
  require_Options
} from "./chunk-kgrs1vrg.js";
import {
  __commonJS
} from "./chunk-cdjrrdrs.js";

// node_modules/mathjax-full/js/output/common/FontData.js
var require_FontData2 = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FontData = exports.NOSTRETCH = exports.H = exports.V = undefined;
  var Options_js_1 = require_Options();
  exports.V = 1;
  exports.H = 2;
  exports.NOSTRETCH = { dir: 0 };
  var FontData = function() {
    function FontData(options) {
      var e_1, _a, e_2, _b;
      if (options === undefined) {
        options = null;
      }
      this.variant = {};
      this.delimiters = {};
      this.cssFontMap = {};
      this.remapChars = {};
      this.skewIcFactor = 0.75;
      var CLASS = this.constructor;
      this.options = (0, Options_js_1.userOptions)((0, Options_js_1.defaultOptions)({}, CLASS.OPTIONS), options);
      this.params = __assign({}, CLASS.defaultParams);
      this.sizeVariants = __spreadArray([], __read(CLASS.defaultSizeVariants), false);
      this.stretchVariants = __spreadArray([], __read(CLASS.defaultStretchVariants), false);
      this.cssFontMap = __assign({}, CLASS.defaultCssFonts);
      try {
        for (var _c = __values(Object.keys(this.cssFontMap)), _d = _c.next();!_d.done; _d = _c.next()) {
          var name_1 = _d.value;
          if (this.cssFontMap[name_1][0] === "unknown") {
            this.cssFontMap[name_1][0] = this.options.unknownFamily;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_d && !_d.done && (_a = _c.return))
            _a.call(_c);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      this.cssFamilyPrefix = CLASS.defaultCssFamilyPrefix;
      this.createVariants(CLASS.defaultVariants);
      this.defineDelimiters(CLASS.defaultDelimiters);
      try {
        for (var _e = __values(Object.keys(CLASS.defaultChars)), _f = _e.next();!_f.done; _f = _e.next()) {
          var name_2 = _f.value;
          this.defineChars(name_2, CLASS.defaultChars[name_2]);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e.return))
            _b.call(_e);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      this.defineRemap("accent", CLASS.defaultAccentMap);
      this.defineRemap("mo", CLASS.defaultMoMap);
      this.defineRemap("mn", CLASS.defaultMnMap);
    }
    FontData.charOptions = function(font, n) {
      var char = font[n];
      if (char.length === 3) {
        char[3] = {};
      }
      return char[3];
    };
    Object.defineProperty(FontData.prototype, "styles", {
      get: function() {
        return this._styles;
      },
      set: function(style) {
        this._styles = style;
      },
      enumerable: false,
      configurable: true
    });
    FontData.prototype.createVariant = function(name, inherit, link) {
      if (inherit === undefined) {
        inherit = null;
      }
      if (link === undefined) {
        link = null;
      }
      var variant = {
        linked: [],
        chars: inherit ? Object.create(this.variant[inherit].chars) : {}
      };
      if (link && this.variant[link]) {
        Object.assign(variant.chars, this.variant[link].chars);
        this.variant[link].linked.push(variant.chars);
        variant.chars = Object.create(variant.chars);
      }
      this.remapSmpChars(variant.chars, name);
      this.variant[name] = variant;
    };
    FontData.prototype.remapSmpChars = function(chars, name) {
      var e_3, _a, e_4, _b;
      var CLASS = this.constructor;
      if (CLASS.VariantSmp[name]) {
        var SmpRemap = CLASS.SmpRemap;
        var SmpGreek = [null, null, CLASS.SmpRemapGreekU, CLASS.SmpRemapGreekL];
        try {
          for (var _c = __values(CLASS.SmpRanges), _d = _c.next();!_d.done; _d = _c.next()) {
            var _e = __read(_d.value, 3), i = _e[0], lo = _e[1], hi = _e[2];
            var base = CLASS.VariantSmp[name][i];
            if (!base)
              continue;
            for (var n = lo;n <= hi; n++) {
              if (n === 930)
                continue;
              var smp = base + n - lo;
              chars[n] = this.smpChar(SmpRemap[smp] || smp);
            }
            if (SmpGreek[i]) {
              try {
                for (var _f = (e_4 = undefined, __values(Object.keys(SmpGreek[i]).map(function(x) {
                  return parseInt(x);
                }))), _g = _f.next();!_g.done; _g = _f.next()) {
                  var n = _g.value;
                  chars[n] = this.smpChar(base + SmpGreek[i][n]);
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
            }
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return))
              _a.call(_c);
          } finally {
            if (e_3)
              throw e_3.error;
          }
        }
      }
      if (name === "bold") {
        chars[988] = this.smpChar(120778);
        chars[989] = this.smpChar(120779);
      }
    };
    FontData.prototype.smpChar = function(n) {
      return [, , , { smp: n }];
    };
    FontData.prototype.createVariants = function(variants) {
      var e_5, _a;
      try {
        for (var variants_1 = __values(variants), variants_1_1 = variants_1.next();!variants_1_1.done; variants_1_1 = variants_1.next()) {
          var variant = variants_1_1.value;
          this.createVariant(variant[0], variant[1], variant[2]);
        }
      } catch (e_5_1) {
        e_5 = { error: e_5_1 };
      } finally {
        try {
          if (variants_1_1 && !variants_1_1.done && (_a = variants_1.return))
            _a.call(variants_1);
        } finally {
          if (e_5)
            throw e_5.error;
        }
      }
    };
    FontData.prototype.defineChars = function(name, chars) {
      var e_6, _a;
      var variant = this.variant[name];
      Object.assign(variant.chars, chars);
      try {
        for (var _b = __values(variant.linked), _c = _b.next();!_c.done; _c = _b.next()) {
          var link = _c.value;
          Object.assign(link, chars);
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
    };
    FontData.prototype.defineDelimiters = function(delims) {
      Object.assign(this.delimiters, delims);
    };
    FontData.prototype.defineRemap = function(name, remap) {
      if (!this.remapChars.hasOwnProperty(name)) {
        this.remapChars[name] = {};
      }
      Object.assign(this.remapChars[name], remap);
    };
    FontData.prototype.getDelimiter = function(n) {
      return this.delimiters[n];
    };
    FontData.prototype.getSizeVariant = function(n, i) {
      if (this.delimiters[n].variants) {
        i = this.delimiters[n].variants[i];
      }
      return this.sizeVariants[i];
    };
    FontData.prototype.getStretchVariant = function(n, i) {
      return this.stretchVariants[this.delimiters[n].stretchv ? this.delimiters[n].stretchv[i] : 0];
    };
    FontData.prototype.getChar = function(name, n) {
      return this.variant[name].chars[n];
    };
    FontData.prototype.getVariant = function(name) {
      return this.variant[name];
    };
    FontData.prototype.getCssFont = function(variant) {
      return this.cssFontMap[variant] || ["serif", false, false];
    };
    FontData.prototype.getFamily = function(family) {
      return this.cssFamilyPrefix ? this.cssFamilyPrefix + ", " + family : family;
    };
    FontData.prototype.getRemappedChar = function(name, c) {
      var map = this.remapChars[name] || {};
      return map[c];
    };
    FontData.OPTIONS = {
      unknownFamily: "serif"
    };
    FontData.JAX = "common";
    FontData.NAME = "";
    FontData.defaultVariants = [
      ["normal"],
      ["bold", "normal"],
      ["italic", "normal"],
      ["bold-italic", "italic", "bold"],
      ["double-struck", "bold"],
      ["fraktur", "normal"],
      ["bold-fraktur", "bold", "fraktur"],
      ["script", "italic"],
      ["bold-script", "bold-italic", "script"],
      ["sans-serif", "normal"],
      ["bold-sans-serif", "bold", "sans-serif"],
      ["sans-serif-italic", "italic", "sans-serif"],
      ["sans-serif-bold-italic", "bold-italic", "bold-sans-serif"],
      ["monospace", "normal"]
    ];
    FontData.defaultCssFonts = {
      normal: ["unknown", false, false],
      bold: ["unknown", false, true],
      italic: ["unknown", true, false],
      "bold-italic": ["unknown", true, true],
      "double-struck": ["unknown", false, true],
      fraktur: ["unknown", false, false],
      "bold-fraktur": ["unknown", false, true],
      script: ["cursive", false, false],
      "bold-script": ["cursive", false, true],
      "sans-serif": ["sans-serif", false, false],
      "bold-sans-serif": ["sans-serif", false, true],
      "sans-serif-italic": ["sans-serif", true, false],
      "sans-serif-bold-italic": ["sans-serif", true, true],
      monospace: ["monospace", false, false]
    };
    FontData.defaultCssFamilyPrefix = "";
    FontData.VariantSmp = {
      bold: [119808, 119834, 120488, 120514, 120782],
      italic: [119860, 119886, 120546, 120572],
      "bold-italic": [119912, 119938, 120604, 120630],
      script: [119964, 119990],
      "bold-script": [120016, 120042],
      fraktur: [120068, 120094],
      "double-struck": [120120, 120146, , , 120792],
      "bold-fraktur": [120172, 120198],
      "sans-serif": [120224, 120250, , , 120802],
      "bold-sans-serif": [120276, 120302, 120662, 120688, 120812],
      "sans-serif-italic": [120328, 120354],
      "sans-serif-bold-italic": [120380, 120406, 120720, 120746],
      monospace: [120432, 120458, , , 120822]
    };
    FontData.SmpRanges = [
      [0, 65, 90],
      [1, 97, 122],
      [2, 913, 937],
      [3, 945, 969],
      [4, 48, 57]
    ];
    FontData.SmpRemap = {
      119893: 8462,
      119965: 8492,
      119968: 8496,
      119969: 8497,
      119971: 8459,
      119972: 8464,
      119975: 8466,
      119976: 8499,
      119981: 8475,
      119994: 8495,
      119996: 8458,
      120004: 8500,
      120070: 8493,
      120075: 8460,
      120076: 8465,
      120085: 8476,
      120093: 8488,
      120122: 8450,
      120127: 8461,
      120133: 8469,
      120135: 8473,
      120136: 8474,
      120137: 8477,
      120145: 8484
    };
    FontData.SmpRemapGreekU = {
      8711: 25,
      1012: 17
    };
    FontData.SmpRemapGreekL = {
      977: 27,
      981: 29,
      982: 31,
      1008: 28,
      1009: 30,
      1013: 26,
      8706: 25
    };
    FontData.defaultAccentMap = {
      768: "ˋ",
      769: "ˊ",
      770: "ˆ",
      771: "˜",
      772: "ˉ",
      774: "˘",
      775: "˙",
      776: "¨",
      778: "˚",
      780: "ˇ",
      8594: "⃗",
      8242: "'",
      8243: "''",
      8244: "'''",
      8245: "`",
      8246: "``",
      8247: "```",
      8279: "''''",
      8400: "↼",
      8401: "⇀",
      8406: "←",
      8417: "↔",
      8432: "*",
      8411: "...",
      8412: "....",
      8428: "⇁",
      8429: "↽",
      8430: "←",
      8431: "→"
    };
    FontData.defaultMoMap = {
      45: "−"
    };
    FontData.defaultMnMap = {
      45: "−"
    };
    FontData.defaultParams = {
      x_height: 0.442,
      quad: 1,
      num1: 0.676,
      num2: 0.394,
      num3: 0.444,
      denom1: 0.686,
      denom2: 0.345,
      sup1: 0.413,
      sup2: 0.363,
      sup3: 0.289,
      sub1: 0.15,
      sub2: 0.247,
      sup_drop: 0.386,
      sub_drop: 0.05,
      delim1: 2.39,
      delim2: 1,
      axis_height: 0.25,
      rule_thickness: 0.06,
      big_op_spacing1: 0.111,
      big_op_spacing2: 0.167,
      big_op_spacing3: 0.2,
      big_op_spacing4: 0.6,
      big_op_spacing5: 0.1,
      surd_height: 0.075,
      scriptspace: 0.05,
      nulldelimiterspace: 0.12,
      delimiterfactor: 901,
      delimitershortfall: 0.3,
      min_rule_thickness: 1.25,
      separation_factor: 1.75,
      extra_ic: 0.033
    };
    FontData.defaultDelimiters = {};
    FontData.defaultChars = {};
    FontData.defaultSizeVariants = [];
    FontData.defaultStretchVariants = [];
    return FontData;
  }();
  exports.FontData = FontData;
});

export { require_FontData2 };
