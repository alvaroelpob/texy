import {
  require_lengths
} from "./chunk-79ne31ds.js";
import {
  require_string
} from "./chunk-vqr0xzww.js";
import {
  require_MmlNode
} from "./chunk-nk72tbre.js";
import {
  require_FontData2
} from "./chunk-hnvybw5c.js";
import {
  __commonJS
} from "./chunk-cdjrrdrs.js";

// node_modules/mathjax-full/js/output/common/Wrappers/math.js
var require_math3 = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CommonMathMixin = undefined;
  function CommonMathMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      class_1.prototype.getWrapWidth = function(_i) {
        return this.parent ? this.getBBox().w : this.metrics.containerWidth / this.jax.pxPerEm;
      };
      return class_1;
    }(Base);
  }
  exports.CommonMathMixin = CommonMathMixin;
});

// node_modules/mathjax-full/js/util/BBox.js
var require_BBox = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BBox = undefined;
  var lengths_js_1 = require_lengths();
  var BBox = function() {
    function BBox(def) {
      if (def === undefined) {
        def = { w: 0, h: -lengths_js_1.BIGDIMEN, d: -lengths_js_1.BIGDIMEN };
      }
      this.w = def.w || 0;
      this.h = "h" in def ? def.h : -lengths_js_1.BIGDIMEN;
      this.d = "d" in def ? def.d : -lengths_js_1.BIGDIMEN;
      this.L = this.R = this.ic = this.sk = this.dx = 0;
      this.scale = this.rscale = 1;
      this.pwidth = "";
    }
    BBox.zero = function() {
      return new BBox({ h: 0, d: 0, w: 0 });
    };
    BBox.empty = function() {
      return new BBox;
    };
    BBox.prototype.empty = function() {
      this.w = 0;
      this.h = this.d = -lengths_js_1.BIGDIMEN;
      return this;
    };
    BBox.prototype.clean = function() {
      if (this.w === -lengths_js_1.BIGDIMEN)
        this.w = 0;
      if (this.h === -lengths_js_1.BIGDIMEN)
        this.h = 0;
      if (this.d === -lengths_js_1.BIGDIMEN)
        this.d = 0;
    };
    BBox.prototype.rescale = function(scale) {
      this.w *= scale;
      this.h *= scale;
      this.d *= scale;
    };
    BBox.prototype.combine = function(cbox, x, y) {
      if (x === undefined) {
        x = 0;
      }
      if (y === undefined) {
        y = 0;
      }
      var rscale = cbox.rscale;
      var w = x + rscale * (cbox.w + cbox.L + cbox.R);
      var h = y + rscale * cbox.h;
      var d = rscale * cbox.d - y;
      if (w > this.w)
        this.w = w;
      if (h > this.h)
        this.h = h;
      if (d > this.d)
        this.d = d;
    };
    BBox.prototype.append = function(cbox) {
      var scale = cbox.rscale;
      this.w += scale * (cbox.w + cbox.L + cbox.R);
      if (scale * cbox.h > this.h) {
        this.h = scale * cbox.h;
      }
      if (scale * cbox.d > this.d) {
        this.d = scale * cbox.d;
      }
    };
    BBox.prototype.updateFrom = function(cbox) {
      this.h = cbox.h;
      this.d = cbox.d;
      this.w = cbox.w;
      if (cbox.pwidth) {
        this.pwidth = cbox.pwidth;
      }
    };
    BBox.fullWidth = "100%";
    BBox.StyleAdjust = [
      ["borderTopWidth", "h"],
      ["borderRightWidth", "w"],
      ["borderBottomWidth", "d"],
      ["borderLeftWidth", "w", 0],
      ["paddingTop", "h"],
      ["paddingRight", "w"],
      ["paddingBottom", "d"],
      ["paddingLeft", "w", 0]
    ];
    return BBox;
  }();
  exports.BBox = BBox;
});

// node_modules/mathjax-full/js/output/common/Wrappers/mrow.js
var require_mrow3 = __commonJS(function(exports) {
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
  exports.CommonInferredMrowMixin = exports.CommonMrowMixin = undefined;
  var BBox_js_1 = require_BBox();
  function CommonMrowMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        var e_1, _a;
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        _this.stretchChildren();
        try {
          for (var _b = __values(_this.childNodes), _c = _b.next();!_c.done; _c = _b.next()) {
            var child = _c.value;
            if (child.bbox.pwidth) {
              _this.bbox.pwidth = BBox_js_1.BBox.fullWidth;
              break;
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
        return _this;
      }
      Object.defineProperty(class_1.prototype, "fixesPWidth", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      class_1.prototype.stretchChildren = function() {
        var e_2, _a, e_3, _b, e_4, _c;
        var stretchy = [];
        try {
          for (var _d = __values(this.childNodes), _e = _d.next();!_e.done; _e = _d.next()) {
            var child = _e.value;
            if (child.canStretch(1)) {
              stretchy.push(child);
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_e && !_e.done && (_a = _d.return))
              _a.call(_d);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
        var count = stretchy.length;
        var nodeCount = this.childNodes.length;
        if (count && nodeCount > 1) {
          var H = 0, D = 0;
          var all = count > 1 && count === nodeCount;
          try {
            for (var _f = __values(this.childNodes), _g = _f.next();!_g.done; _g = _f.next()) {
              var child = _g.value;
              var noStretch = child.stretch.dir === 0;
              if (all || noStretch) {
                var _h = child.getOuterBBox(noStretch), { h, d, rscale } = _h;
                h *= rscale;
                d *= rscale;
                if (h > H)
                  H = h;
                if (d > D)
                  D = d;
              }
            }
          } catch (e_3_1) {
            e_3 = { error: e_3_1 };
          } finally {
            try {
              if (_g && !_g.done && (_b = _f.return))
                _b.call(_f);
            } finally {
              if (e_3)
                throw e_3.error;
            }
          }
          try {
            for (var stretchy_1 = __values(stretchy), stretchy_1_1 = stretchy_1.next();!stretchy_1_1.done; stretchy_1_1 = stretchy_1.next()) {
              var child = stretchy_1_1.value;
              child.coreMO().getStretchedVariant([H, D]);
            }
          } catch (e_4_1) {
            e_4 = { error: e_4_1 };
          } finally {
            try {
              if (stretchy_1_1 && !stretchy_1_1.done && (_c = stretchy_1.return))
                _c.call(stretchy_1);
            } finally {
              if (e_4)
                throw e_4.error;
            }
          }
        }
      };
      return class_1;
    }(Base);
  }
  exports.CommonMrowMixin = CommonMrowMixin;
  function CommonInferredMrowMixin(Base) {
    return function(_super) {
      __extends(class_2, _super);
      function class_2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      class_2.prototype.getScale = function() {
        this.bbox.scale = this.parent.bbox.scale;
        this.bbox.rscale = 1;
      };
      return class_2;
    }(Base);
  }
  exports.CommonInferredMrowMixin = CommonInferredMrowMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/mi.js
var require_mi3 = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CommonMiMixin = undefined;
  function CommonMiMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      class_1.prototype.computeBBox = function(bbox, _recompute) {
        if (_recompute === undefined) {
          _recompute = false;
        }
        _super.prototype.computeBBox.call(this, bbox);
        this.copySkewIC(bbox);
      };
      return class_1;
    }(Base);
  }
  exports.CommonMiMixin = CommonMiMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/mo.js
var require_mo3 = __commonJS(function(exports) {
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
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CommonMoMixin = exports.DirectionVH = undefined;
  var BBox_js_1 = require_BBox();
  var string_js_1 = require_string();
  var FontData_js_1 = require_FontData2();
  exports.DirectionVH = (_a = {}, _a[1] = "v", _a[2] = "h", _a);
  function CommonMoMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        _this.size = null;
        _this.isAccent = _this.node.isAccent;
        return _this;
      }
      class_1.prototype.computeBBox = function(bbox, _recompute) {
        if (_recompute === undefined) {
          _recompute = false;
        }
        this.protoBBox(bbox);
        if (this.node.attributes.get("symmetric") && this.stretch.dir !== 2) {
          var d = this.getCenterOffset(bbox);
          bbox.h += d;
          bbox.d -= d;
        }
        if (this.node.getProperty("mathaccent") && (this.stretch.dir === 0 || this.size >= 0)) {
          bbox.w = 0;
        }
      };
      class_1.prototype.protoBBox = function(bbox) {
        var stretchy = this.stretch.dir !== 0;
        if (stretchy && this.size === null) {
          this.getStretchedVariant([0]);
        }
        if (stretchy && this.size < 0)
          return;
        _super.prototype.computeBBox.call(this, bbox);
        this.copySkewIC(bbox);
      };
      class_1.prototype.getAccentOffset = function() {
        var bbox = BBox_js_1.BBox.empty();
        this.protoBBox(bbox);
        return -bbox.w / 2;
      };
      class_1.prototype.getCenterOffset = function(bbox) {
        if (bbox === undefined) {
          bbox = null;
        }
        if (!bbox) {
          bbox = BBox_js_1.BBox.empty();
          _super.prototype.computeBBox.call(this, bbox);
        }
        return (bbox.h + bbox.d) / 2 + this.font.params.axis_height - bbox.h;
      };
      class_1.prototype.getVariant = function() {
        if (this.node.attributes.get("largeop")) {
          this.variant = this.node.attributes.get("displaystyle") ? "-largeop" : "-smallop";
          return;
        }
        if (!this.node.attributes.getExplicit("mathvariant") && this.node.getProperty("pseudoscript") === false) {
          this.variant = "-tex-variant";
          return;
        }
        _super.prototype.getVariant.call(this);
      };
      class_1.prototype.canStretch = function(direction) {
        if (this.stretch.dir !== 0) {
          return this.stretch.dir === direction;
        }
        var attributes = this.node.attributes;
        if (!attributes.get("stretchy"))
          return false;
        var c = this.getText();
        if (Array.from(c).length !== 1)
          return false;
        var delim = this.font.getDelimiter(c.codePointAt(0));
        this.stretch = delim && delim.dir === direction ? delim : FontData_js_1.NOSTRETCH;
        return this.stretch.dir !== 0;
      };
      class_1.prototype.getStretchedVariant = function(WH, exact) {
        var e_1, _a;
        if (exact === undefined) {
          exact = false;
        }
        if (this.stretch.dir !== 0) {
          var D = this.getWH(WH);
          var min = this.getSize("minsize", 0);
          var max = this.getSize("maxsize", Infinity);
          var mathaccent = this.node.getProperty("mathaccent");
          D = Math.max(min, Math.min(max, D));
          var df = this.font.params.delimiterfactor / 1000;
          var ds = this.font.params.delimitershortfall;
          var m = min || exact ? D : mathaccent ? Math.min(D / df, D + ds) : Math.max(D * df, D - ds);
          var delim = this.stretch;
          var c = delim.c || this.getText().codePointAt(0);
          var i = 0;
          if (delim.sizes) {
            try {
              for (var _b = __values(delim.sizes), _c = _b.next();!_c.done; _c = _b.next()) {
                var d = _c.value;
                if (d >= m) {
                  if (mathaccent && i) {
                    i--;
                  }
                  this.variant = this.font.getSizeVariant(c, i);
                  this.size = i;
                  if (delim.schar && delim.schar[i]) {
                    this.stretch = __assign(__assign({}, this.stretch), { c: delim.schar[i] });
                  }
                  return;
                }
                i++;
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
          if (delim.stretch) {
            this.size = -1;
            this.invalidateBBox();
            this.getStretchBBox(WH, this.checkExtendedHeight(D, delim), delim);
          } else {
            this.variant = this.font.getSizeVariant(c, i - 1);
            this.size = i - 1;
          }
        }
      };
      class_1.prototype.getSize = function(name, value) {
        var attributes = this.node.attributes;
        if (attributes.isSet(name)) {
          value = this.length2em(attributes.get(name), 1, 1);
        }
        return value;
      };
      class_1.prototype.getWH = function(WH) {
        if (WH.length === 0)
          return 0;
        if (WH.length === 1)
          return WH[0];
        var _a = __read(WH, 2), H = _a[0], D = _a[1];
        var a = this.font.params.axis_height;
        return this.node.attributes.get("symmetric") ? 2 * Math.max(H - a, D + a) : H + D;
      };
      class_1.prototype.getStretchBBox = function(WHD, D, C) {
        var _a;
        if (C.hasOwnProperty("min") && C.min > D) {
          D = C.min;
        }
        var _b = __read(C.HDW, 3), h = _b[0], d = _b[1], w = _b[2];
        if (this.stretch.dir === 1) {
          _a = __read(this.getBaseline(WHD, D, C), 2), h = _a[0], d = _a[1];
        } else {
          w = D;
        }
        this.bbox.h = h;
        this.bbox.d = d;
        this.bbox.w = w;
      };
      class_1.prototype.getBaseline = function(WHD, HD, C) {
        var hasWHD = WHD.length === 2 && WHD[0] + WHD[1] === HD;
        var symmetric = this.node.attributes.get("symmetric");
        var _a = __read(hasWHD ? WHD : [HD, 0], 2), H = _a[0], D = _a[1];
        var _b = __read([H + D, 0], 2), h = _b[0], d = _b[1];
        if (symmetric) {
          var a = this.font.params.axis_height;
          if (hasWHD) {
            h = 2 * Math.max(H - a, D + a);
          }
          d = h / 2 - a;
        } else if (hasWHD) {
          d = D;
        } else {
          var _c = __read(C.HDW || [0.75, 0.25], 2), ch = _c[0], cd = _c[1];
          d = cd * (h / (ch + cd));
        }
        return [h - d, d];
      };
      class_1.prototype.checkExtendedHeight = function(D, C) {
        if (C.fullExt) {
          var _a = __read(C.fullExt, 2), extSize = _a[0], endSize = _a[1];
          var n = Math.ceil(Math.max(0, D - endSize) / extSize);
          D = endSize + n * extSize;
        }
        return D;
      };
      class_1.prototype.remapChars = function(chars) {
        var primes = this.node.getProperty("primes");
        if (primes) {
          return (0, string_js_1.unicodeChars)(primes);
        }
        if (chars.length === 1) {
          var parent_1 = this.node.coreParent().parent;
          var isAccent = this.isAccent && !parent_1.isKind("mrow");
          var map = isAccent ? "accent" : "mo";
          var text = this.font.getRemappedChar(map, chars[0]);
          if (text) {
            chars = this.unicodeChars(text, this.variant);
          }
        }
        return chars;
      };
      return class_1;
    }(Base);
  }
  exports.CommonMoMixin = CommonMoMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/mn.js
var require_mn3 = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CommonMnMixin = undefined;
  function CommonMnMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      class_1.prototype.remapChars = function(chars) {
        if (chars.length) {
          var text = this.font.getRemappedChar("mn", chars[0]);
          if (text) {
            var c = this.unicodeChars(text, this.variant);
            if (c.length === 1) {
              chars[0] = c[0];
            } else {
              chars = c.concat(chars.slice(1));
            }
          }
        }
        return chars;
      };
      return class_1;
    }(Base);
  }
  exports.CommonMnMixin = CommonMnMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/ms.js
var require_ms3 = __commonJS(function(exports) {
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
  exports.CommonMsMixin = undefined;
  function CommonMsMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        var attributes = _this.node.attributes;
        var quotes = attributes.getList("lquote", "rquote");
        if (_this.variant !== "monospace") {
          if (!attributes.isSet("lquote") && quotes.lquote === '"')
            quotes.lquote = "“";
          if (!attributes.isSet("rquote") && quotes.rquote === '"')
            quotes.rquote = "”";
        }
        _this.childNodes.unshift(_this.createText(quotes.lquote));
        _this.childNodes.push(_this.createText(quotes.rquote));
        return _this;
      }
      class_1.prototype.createText = function(text) {
        var node = this.wrap(this.mmlText(text));
        node.parent = this;
        return node;
      };
      return class_1;
    }(Base);
  }
  exports.CommonMsMixin = CommonMsMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/mtext.js
var require_mtext3 = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CommonMtextMixin = undefined;
  function CommonMtextMixin(Base) {
    var _a;
    return _a = function(_super) {
      __extends(class_1, _super);
      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      class_1.prototype.getVariant = function() {
        var options = this.jax.options;
        var data = this.jax.math.outputData;
        var merror = (!!data.merrorFamily || !!options.merrorFont) && this.node.Parent.isKind("merror");
        if (!!data.mtextFamily || !!options.mtextFont || merror) {
          var variant = this.node.attributes.get("mathvariant");
          var font = this.constructor.INHERITFONTS[variant] || this.jax.font.getCssFont(variant);
          var family = font[0] || (merror ? data.merrorFamily || options.merrorFont : data.mtextFamily || options.mtextFont);
          this.variant = this.explicitVariant(family, font[2] ? "bold" : "", font[1] ? "italic" : "");
          return;
        }
        _super.prototype.getVariant.call(this);
      };
      return class_1;
    }(Base), _a.INHERITFONTS = {
      normal: ["", false, false],
      bold: ["", false, true],
      italic: ["", true, false],
      "bold-italic": ["", true, true]
    }, _a;
  }
  exports.CommonMtextMixin = CommonMtextMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/mspace.js
var require_mspace3 = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CommonMspaceMixin = undefined;
  function CommonMspaceMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      class_1.prototype.computeBBox = function(bbox, _recompute) {
        if (_recompute === undefined) {
          _recompute = false;
        }
        var attributes = this.node.attributes;
        bbox.w = this.length2em(attributes.get("width"), 0);
        bbox.h = this.length2em(attributes.get("height"), 0);
        bbox.d = this.length2em(attributes.get("depth"), 0);
      };
      class_1.prototype.handleVariant = function() {};
      return class_1;
    }(Base);
  }
  exports.CommonMspaceMixin = CommonMspaceMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/mpadded.js
var require_mpadded3 = __commonJS(function(exports) {
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
  exports.CommonMpaddedMixin = undefined;
  function CommonMpaddedMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      class_1.prototype.getDimens = function() {
        var values = this.node.attributes.getList("width", "height", "depth", "lspace", "voffset");
        var bbox = this.childNodes[0].getBBox();
        var { w, h, d } = bbox;
        var W = w, H = h, D = d, x = 0, y = 0, dx = 0;
        if (values.width !== "")
          w = this.dimen(values.width, bbox, "w", 0);
        if (values.height !== "")
          h = this.dimen(values.height, bbox, "h", 0);
        if (values.depth !== "")
          d = this.dimen(values.depth, bbox, "d", 0);
        if (values.voffset !== "")
          y = this.dimen(values.voffset, bbox);
        if (values.lspace !== "")
          x = this.dimen(values.lspace, bbox);
        var align = this.node.attributes.get("data-align");
        if (align) {
          dx = this.getAlignX(w, bbox, align);
        }
        return [H, D, W, h - H, d - D, w - W, x, y, dx];
      };
      class_1.prototype.dimen = function(length, bbox, d, m) {
        if (d === undefined) {
          d = "";
        }
        if (m === undefined) {
          m = null;
        }
        length = String(length);
        var match = length.match(/width|height|depth/);
        var size = match ? bbox[match[0].charAt(0)] : d ? bbox[d] : 0;
        var dimen = this.length2em(length, size) || 0;
        if (length.match(/^[-+]/) && d) {
          dimen += size;
        }
        if (m != null) {
          dimen = Math.max(m, dimen);
        }
        return dimen;
      };
      class_1.prototype.computeBBox = function(bbox, recompute) {
        if (recompute === undefined) {
          recompute = false;
        }
        var _a = __read(this.getDimens(), 6), H = _a[0], D = _a[1], W = _a[2], dh = _a[3], dd = _a[4], dw = _a[5];
        bbox.w = W + dw;
        bbox.h = H + dh;
        bbox.d = D + dd;
        this.setChildPWidths(recompute, bbox.w);
      };
      class_1.prototype.getWrapWidth = function(_i) {
        return this.getBBox().w;
      };
      class_1.prototype.getChildAlign = function(_i) {
        return this.node.attributes.get("data-align") || "left";
      };
      return class_1;
    }(Base);
  }
  exports.CommonMpaddedMixin = CommonMpaddedMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/mfrac.js
var require_mfrac3 = __commonJS(function(exports) {
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
  exports.CommonMfracMixin = undefined;
  function CommonMfracMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        _this.bevel = null;
        _this.pad = _this.node.getProperty("withDelims") ? 0 : _this.font.params.nulldelimiterspace;
        if (_this.node.attributes.get("bevelled")) {
          var H = _this.getBevelData(_this.isDisplay()).H;
          var bevel = _this.bevel = _this.createMo("/");
          bevel.node.attributes.set("symmetric", true);
          bevel.canStretch(1);
          bevel.getStretchedVariant([H], true);
        }
        return _this;
      }
      class_1.prototype.computeBBox = function(bbox, recompute) {
        if (recompute === undefined) {
          recompute = false;
        }
        bbox.empty();
        var _a = this.node.attributes.getList("linethickness", "bevelled"), { linethickness, bevelled } = _a;
        var display = this.isDisplay();
        var w = null;
        if (bevelled) {
          this.getBevelledBBox(bbox, display);
        } else {
          var thickness = this.length2em(String(linethickness), 0.06);
          w = -2 * this.pad;
          if (thickness === 0) {
            this.getAtopBBox(bbox, display);
          } else {
            this.getFractionBBox(bbox, display, thickness);
            w -= 0.2;
          }
          w += bbox.w;
        }
        bbox.clean();
        this.setChildPWidths(recompute, w);
      };
      class_1.prototype.getFractionBBox = function(bbox, display, t) {
        var nbox = this.childNodes[0].getOuterBBox();
        var dbox = this.childNodes[1].getOuterBBox();
        var tex = this.font.params;
        var a = tex.axis_height;
        var _a = this.getTUV(display, t), { T, u, v } = _a;
        bbox.combine(nbox, 0, a + T + Math.max(nbox.d * nbox.rscale, u));
        bbox.combine(dbox, 0, a - T - Math.max(dbox.h * dbox.rscale, v));
        bbox.w += 2 * this.pad + 0.2;
      };
      class_1.prototype.getTUV = function(display, t) {
        var tex = this.font.params;
        var a = tex.axis_height;
        var T = (display ? 3.5 : 1.5) * t;
        return {
          T: (display ? 3.5 : 1.5) * t,
          u: (display ? tex.num1 : tex.num2) - a - T,
          v: (display ? tex.denom1 : tex.denom2) + a - T
        };
      };
      class_1.prototype.getAtopBBox = function(bbox, display) {
        var _a = this.getUVQ(display), { u, v, nbox, dbox } = _a;
        bbox.combine(nbox, 0, u);
        bbox.combine(dbox, 0, -v);
        bbox.w += 2 * this.pad;
      };
      class_1.prototype.getUVQ = function(display) {
        var nbox = this.childNodes[0].getOuterBBox();
        var dbox = this.childNodes[1].getOuterBBox();
        var tex = this.font.params;
        var _a = __read(display ? [tex.num1, tex.denom1] : [tex.num3, tex.denom2], 2), u = _a[0], v = _a[1];
        var p = (display ? 7 : 3) * tex.rule_thickness;
        var q = u - nbox.d * nbox.scale - (dbox.h * dbox.scale - v);
        if (q < p) {
          u += (p - q) / 2;
          v += (p - q) / 2;
          q = p;
        }
        return { u, v, q, nbox, dbox };
      };
      class_1.prototype.getBevelledBBox = function(bbox, display) {
        var _a = this.getBevelData(display), { u, v, delta, nbox, dbox } = _a;
        var lbox = this.bevel.getOuterBBox();
        bbox.combine(nbox, 0, u);
        bbox.combine(lbox, bbox.w - delta / 2, 0);
        bbox.combine(dbox, bbox.w - delta / 2, v);
      };
      class_1.prototype.getBevelData = function(display) {
        var nbox = this.childNodes[0].getOuterBBox();
        var dbox = this.childNodes[1].getOuterBBox();
        var delta = display ? 0.4 : 0.15;
        var H = Math.max(nbox.scale * (nbox.h + nbox.d), dbox.scale * (dbox.h + dbox.d)) + 2 * delta;
        var a = this.font.params.axis_height;
        var u = nbox.scale * (nbox.d - nbox.h) / 2 + a + delta;
        var v = dbox.scale * (dbox.d - dbox.h) / 2 + a - delta;
        return { H, delta, u, v, nbox, dbox };
      };
      class_1.prototype.canStretch = function(_direction) {
        return false;
      };
      class_1.prototype.isDisplay = function() {
        var _a = this.node.attributes.getList("displaystyle", "scriptlevel"), { displaystyle, scriptlevel } = _a;
        return displaystyle && scriptlevel === 0;
      };
      class_1.prototype.getWrapWidth = function(i) {
        var attributes = this.node.attributes;
        if (attributes.get("bevelled")) {
          return this.childNodes[i].getOuterBBox().w;
        }
        var w = this.getBBox().w;
        var thickness = this.length2em(attributes.get("linethickness"));
        return w - (thickness ? 0.2 : 0) - 2 * this.pad;
      };
      class_1.prototype.getChildAlign = function(i) {
        var attributes = this.node.attributes;
        return attributes.get("bevelled") ? "left" : attributes.get(["numalign", "denomalign"][i]);
      };
      return class_1;
    }(Base);
  }
  exports.CommonMfracMixin = CommonMfracMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/msqrt.js
var require_msqrt3 = __commonJS(function(exports) {
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
  exports.CommonMsqrtMixin = undefined;
  var BBox_js_1 = require_BBox();
  function CommonMsqrtMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        var surd = _this.createMo("√");
        surd.canStretch(1);
        var _a = _this.childNodes[_this.base].getOuterBBox(), { h, d } = _a;
        var t = _this.font.params.rule_thickness;
        var p = _this.node.attributes.get("displaystyle") ? _this.font.params.x_height : t;
        _this.surdH = h + d + 2 * t + p / 4;
        surd.getStretchedVariant([_this.surdH - d, d], true);
        return _this;
      }
      Object.defineProperty(class_1.prototype, "base", {
        get: function() {
          return 0;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(class_1.prototype, "surd", {
        get: function() {
          return 1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(class_1.prototype, "root", {
        get: function() {
          return null;
        },
        enumerable: false,
        configurable: true
      });
      class_1.prototype.createMo = function(text) {
        var node = _super.prototype.createMo.call(this, text);
        this.childNodes.push(node);
        return node;
      };
      class_1.prototype.computeBBox = function(bbox, recompute) {
        if (recompute === undefined) {
          recompute = false;
        }
        var surdbox = this.childNodes[this.surd].getBBox();
        var basebox = new BBox_js_1.BBox(this.childNodes[this.base].getOuterBBox());
        var q = this.getPQ(surdbox)[1];
        var t = this.font.params.rule_thickness;
        var H = basebox.h + q + t;
        var _a = __read(this.getRootDimens(surdbox, H), 1), x = _a[0];
        bbox.h = H + t;
        this.combineRootBBox(bbox, surdbox, H);
        bbox.combine(surdbox, x, H - surdbox.h);
        bbox.combine(basebox, x + surdbox.w, 0);
        bbox.clean();
        this.setChildPWidths(recompute);
      };
      class_1.prototype.combineRootBBox = function(_bbox, _sbox, _H) {};
      class_1.prototype.getPQ = function(sbox) {
        var t = this.font.params.rule_thickness;
        var p = this.node.attributes.get("displaystyle") ? this.font.params.x_height : t;
        var q = sbox.h + sbox.d > this.surdH ? (sbox.h + sbox.d - (this.surdH - 2 * t - p / 2)) / 2 : t + p / 4;
        return [p, q];
      };
      class_1.prototype.getRootDimens = function(_sbox, _H) {
        return [0, 0, 0, 0];
      };
      return class_1;
    }(Base);
  }
  exports.CommonMsqrtMixin = CommonMsqrtMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/mroot.js
var require_mroot3 = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CommonMrootMixin = undefined;
  function CommonMrootMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(class_1.prototype, "surd", {
        get: function() {
          return 2;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(class_1.prototype, "root", {
        get: function() {
          return 1;
        },
        enumerable: false,
        configurable: true
      });
      class_1.prototype.combineRootBBox = function(BBOX, sbox, H) {
        var bbox = this.childNodes[this.root].getOuterBBox();
        var h = this.getRootDimens(sbox, H)[1];
        BBOX.combine(bbox, 0, h);
      };
      class_1.prototype.getRootDimens = function(sbox, H) {
        var surd = this.childNodes[this.surd];
        var bbox = this.childNodes[this.root].getOuterBBox();
        var offset = (surd.size < 0 ? 0.5 : 0.6) * sbox.w;
        var { w, rscale } = bbox;
        var W = Math.max(w, offset / rscale);
        var dx = Math.max(0, W - w);
        var h = this.rootHeight(bbox, sbox, surd.size, H);
        var x = W * rscale - offset;
        return [x, h, dx];
      };
      class_1.prototype.rootHeight = function(rbox, sbox, size, H) {
        var h = sbox.h + sbox.d;
        var b = (size < 0 ? 1.9 : 0.55 * h) - (h - H);
        return b + Math.max(0, rbox.d * rbox.rscale);
      };
      return class_1;
    }(Base);
  }
  exports.CommonMrootMixin = CommonMrootMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/mfenced.js
var require_mfenced3 = __commonJS(function(exports) {
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
  exports.CommonMfencedMixin = undefined;
  function CommonMfencedMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        _this.mrow = null;
        _this.createMrow();
        _this.addMrowChildren();
        return _this;
      }
      class_1.prototype.createMrow = function() {
        var mmlFactory = this.node.factory;
        var mrow = mmlFactory.create("inferredMrow");
        mrow.inheritAttributesFrom(this.node);
        this.mrow = this.wrap(mrow);
        this.mrow.parent = this;
      };
      class_1.prototype.addMrowChildren = function() {
        var e_1, _a;
        var mfenced = this.node;
        var mrow = this.mrow;
        this.addMo(mfenced.open);
        if (this.childNodes.length) {
          mrow.childNodes.push(this.childNodes[0]);
        }
        var i = 0;
        try {
          for (var _b = __values(this.childNodes.slice(1)), _c = _b.next();!_c.done; _c = _b.next()) {
            var child = _c.value;
            this.addMo(mfenced.separators[i++]);
            mrow.childNodes.push(child);
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
        this.addMo(mfenced.close);
        mrow.stretchChildren();
      };
      class_1.prototype.addMo = function(node) {
        if (!node)
          return;
        var mo = this.wrap(node);
        this.mrow.childNodes.push(mo);
        mo.parent = this.mrow;
      };
      class_1.prototype.computeBBox = function(bbox, recompute) {
        if (recompute === undefined) {
          recompute = false;
        }
        bbox.updateFrom(this.mrow.getOuterBBox());
        this.setChildPWidths(recompute);
      };
      return class_1;
    }(Base);
  }
  exports.CommonMfencedMixin = CommonMfencedMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/scriptbase.js
var require_scriptbase2 = __commonJS(function(exports) {
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
  exports.CommonScriptbaseMixin = undefined;
  var MmlNode_js_1 = require_MmlNode();
  function CommonScriptbaseMixin(Base) {
    var _a;
    return _a = function(_super) {
      __extends(class_1, _super);
      function class_1() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        _this.baseScale = 1;
        _this.baseIc = 0;
        _this.baseRemoveIc = false;
        _this.baseIsChar = false;
        _this.baseHasAccentOver = null;
        _this.baseHasAccentUnder = null;
        _this.isLineAbove = false;
        _this.isLineBelow = false;
        _this.isMathAccent = false;
        var core = _this.baseCore = _this.getBaseCore();
        if (!core)
          return _this;
        _this.setBaseAccentsFor(core);
        _this.baseScale = _this.getBaseScale();
        _this.baseIc = _this.getBaseIc();
        _this.baseIsChar = _this.isCharBase();
        _this.isMathAccent = _this.baseIsChar && (_this.scriptChild && !!_this.scriptChild.coreMO().node.getProperty("mathaccent"));
        _this.checkLineAccents();
        _this.baseRemoveIc = !_this.isLineAbove && !_this.isLineBelow && (!_this.constructor.useIC || _this.isMathAccent);
        return _this;
      }
      Object.defineProperty(class_1.prototype, "baseChild", {
        get: function() {
          return this.childNodes[this.node.base];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(class_1.prototype, "scriptChild", {
        get: function() {
          return this.childNodes[1];
        },
        enumerable: false,
        configurable: true
      });
      class_1.prototype.getBaseCore = function() {
        var core = this.getSemanticBase() || this.childNodes[0];
        while (core && (core.childNodes.length === 1 && (core.node.isKind("mrow") || core.node.isKind("TeXAtom") && core.node.texClass !== MmlNode_js_1.TEXCLASS.VCENTER || core.node.isKind("mstyle") || core.node.isKind("mpadded") || core.node.isKind("mphantom") || core.node.isKind("semantics")) || core.node.isKind("munderover") && core.isMathAccent)) {
          this.setBaseAccentsFor(core);
          core = core.childNodes[0];
        }
        if (!core) {
          this.baseHasAccentOver = this.baseHasAccentUnder = false;
        }
        return core || this.childNodes[0];
      };
      class_1.prototype.setBaseAccentsFor = function(core) {
        if (core.node.isKind("munderover")) {
          if (this.baseHasAccentOver === null) {
            this.baseHasAccentOver = !!core.node.attributes.get("accent");
          }
          if (this.baseHasAccentUnder === null) {
            this.baseHasAccentUnder = !!core.node.attributes.get("accentunder");
          }
        }
      };
      class_1.prototype.getSemanticBase = function() {
        var fence = this.node.attributes.getExplicit("data-semantic-fencepointer");
        return this.getBaseFence(this.baseChild, fence);
      };
      class_1.prototype.getBaseFence = function(fence, id) {
        var e_1, _a;
        if (!fence || !fence.node.attributes || !id) {
          return null;
        }
        if (fence.node.attributes.getExplicit("data-semantic-id") === id) {
          return fence;
        }
        try {
          for (var _b = __values(fence.childNodes), _c = _b.next();!_c.done; _c = _b.next()) {
            var child = _c.value;
            var result = this.getBaseFence(child, id);
            if (result) {
              return result;
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
        return null;
      };
      class_1.prototype.getBaseScale = function() {
        var child = this.baseCore;
        var scale = 1;
        while (child && child !== this) {
          var bbox = child.getOuterBBox();
          scale *= bbox.rscale;
          child = child.parent;
        }
        return scale;
      };
      class_1.prototype.getBaseIc = function() {
        return this.baseCore.getOuterBBox().ic * this.baseScale;
      };
      class_1.prototype.getAdjustedIc = function() {
        var bbox = this.baseCore.getOuterBBox();
        return (bbox.ic ? 1.05 * bbox.ic + 0.05 : 0) * this.baseScale;
      };
      class_1.prototype.isCharBase = function() {
        var base = this.baseCore;
        return (base.node.isKind("mo") && base.size === null || base.node.isKind("mi") || base.node.isKind("mn")) && base.bbox.rscale === 1 && Array.from(base.getText()).length === 1;
      };
      class_1.prototype.checkLineAccents = function() {
        if (!this.node.isKind("munderover"))
          return;
        if (this.node.isKind("mover")) {
          this.isLineAbove = this.isLineAccent(this.scriptChild);
        } else if (this.node.isKind("munder")) {
          this.isLineBelow = this.isLineAccent(this.scriptChild);
        } else {
          var mml = this;
          this.isLineAbove = this.isLineAccent(mml.overChild);
          this.isLineBelow = this.isLineAccent(mml.underChild);
        }
      };
      class_1.prototype.isLineAccent = function(script) {
        var node = script.coreMO().node;
        return node.isToken && node.getText() === "―";
      };
      class_1.prototype.getBaseWidth = function() {
        var bbox = this.baseChild.getOuterBBox();
        return bbox.w * bbox.rscale - (this.baseRemoveIc ? this.baseIc : 0) + this.font.params.extra_ic;
      };
      class_1.prototype.computeBBox = function(bbox, recompute) {
        if (recompute === undefined) {
          recompute = false;
        }
        var w = this.getBaseWidth();
        var _a = __read(this.getOffset(), 2), x = _a[0], y = _a[1];
        bbox.append(this.baseChild.getOuterBBox());
        bbox.combine(this.scriptChild.getOuterBBox(), w + x, y);
        bbox.w += this.font.params.scriptspace;
        bbox.clean();
        this.setChildPWidths(recompute);
      };
      class_1.prototype.getOffset = function() {
        return [0, 0];
      };
      class_1.prototype.baseCharZero = function(n) {
        var largeop = !!this.baseCore.node.attributes.get("largeop");
        var scale = this.baseScale;
        return this.baseIsChar && !largeop && scale === 1 ? 0 : n;
      };
      class_1.prototype.getV = function() {
        var bbox = this.baseCore.getOuterBBox();
        var sbox = this.scriptChild.getOuterBBox();
        var tex = this.font.params;
        var subscriptshift = this.length2em(this.node.attributes.get("subscriptshift"), tex.sub1);
        return Math.max(this.baseCharZero(bbox.d * this.baseScale + tex.sub_drop * sbox.rscale), subscriptshift, sbox.h * sbox.rscale - 4 / 5 * tex.x_height);
      };
      class_1.prototype.getU = function() {
        var bbox = this.baseCore.getOuterBBox();
        var sbox = this.scriptChild.getOuterBBox();
        var tex = this.font.params;
        var attr = this.node.attributes.getList("displaystyle", "superscriptshift");
        var prime = this.node.getProperty("texprimestyle");
        var p = prime ? tex.sup3 : attr.displaystyle ? tex.sup1 : tex.sup2;
        var superscriptshift = this.length2em(attr.superscriptshift, p);
        return Math.max(this.baseCharZero(bbox.h * this.baseScale - tex.sup_drop * sbox.rscale), superscriptshift, sbox.d * sbox.rscale + 1 / 4 * tex.x_height);
      };
      class_1.prototype.hasMovableLimits = function() {
        var display = this.node.attributes.get("displaystyle");
        var mo = this.baseChild.coreMO().node;
        return !display && !!mo.attributes.get("movablelimits");
      };
      class_1.prototype.getOverKU = function(basebox, overbox) {
        var accent = this.node.attributes.get("accent");
        var tex = this.font.params;
        var d = overbox.d * overbox.rscale;
        var t = tex.rule_thickness * tex.separation_factor;
        var delta = this.baseHasAccentOver ? t : 0;
        var T = this.isLineAbove ? 3 * tex.rule_thickness : t;
        var k = (accent ? T : Math.max(tex.big_op_spacing1, tex.big_op_spacing3 - Math.max(0, d))) - delta;
        return [k, basebox.h * basebox.rscale + k + d];
      };
      class_1.prototype.getUnderKV = function(basebox, underbox) {
        var accent = this.node.attributes.get("accentunder");
        var tex = this.font.params;
        var h = underbox.h * underbox.rscale;
        var t = tex.rule_thickness * tex.separation_factor;
        var delta = this.baseHasAccentUnder ? t : 0;
        var T = this.isLineBelow ? 3 * tex.rule_thickness : t;
        var k = (accent ? T : Math.max(tex.big_op_spacing2, tex.big_op_spacing4 - h)) - delta;
        return [k, -(basebox.d * basebox.rscale + k + h)];
      };
      class_1.prototype.getDeltaW = function(boxes, delta) {
        var e_2, _a, e_3, _b;
        if (delta === undefined) {
          delta = [0, 0, 0];
        }
        var align = this.node.attributes.get("align");
        var widths = boxes.map(function(box) {
          return box.w * box.rscale;
        });
        widths[0] -= this.baseRemoveIc && !this.baseCore.node.attributes.get("largeop") ? this.baseIc : 0;
        var w = Math.max.apply(Math, __spreadArray([], __read(widths), false));
        var dw = [];
        var m = 0;
        try {
          for (var _c = __values(widths.keys()), _d = _c.next();!_d.done; _d = _c.next()) {
            var i = _d.value;
            dw[i] = (align === "center" ? (w - widths[i]) / 2 : align === "right" ? w - widths[i] : 0) + delta[i];
            if (dw[i] < m) {
              m = -dw[i];
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return))
              _a.call(_c);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
        if (m) {
          try {
            for (var _e = __values(dw.keys()), _f = _e.next();!_f.done; _f = _e.next()) {
              var i = _f.value;
              dw[i] += m;
            }
          } catch (e_3_1) {
            e_3 = { error: e_3_1 };
          } finally {
            try {
              if (_f && !_f.done && (_b = _e.return))
                _b.call(_e);
            } finally {
              if (e_3)
                throw e_3.error;
            }
          }
        }
        [1, 2].map(function(i) {
          return dw[i] += boxes[i] ? boxes[i].dx * boxes[0].scale : 0;
        });
        return dw;
      };
      class_1.prototype.getDelta = function(noskew) {
        if (noskew === undefined) {
          noskew = false;
        }
        var accent = this.node.attributes.get("accent");
        var _a = this.baseCore.getOuterBBox(), { sk, ic } = _a;
        return ((accent && !noskew ? sk : 0) + this.font.skewIcFactor * ic) * this.baseScale;
      };
      class_1.prototype.stretchChildren = function() {
        var e_4, _a, e_5, _b, e_6, _c;
        var stretchy = [];
        try {
          for (var _d = __values(this.childNodes), _e = _d.next();!_e.done; _e = _d.next()) {
            var child = _e.value;
            if (child.canStretch(2)) {
              stretchy.push(child);
            }
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (_e && !_e.done && (_a = _d.return))
              _a.call(_d);
          } finally {
            if (e_4)
              throw e_4.error;
          }
        }
        var count = stretchy.length;
        var nodeCount = this.childNodes.length;
        if (count && nodeCount > 1) {
          var W = 0;
          var all = count > 1 && count === nodeCount;
          try {
            for (var _f = __values(this.childNodes), _g = _f.next();!_g.done; _g = _f.next()) {
              var child = _g.value;
              var noStretch = child.stretch.dir === 0;
              if (all || noStretch) {
                var _h = child.getOuterBBox(noStretch), { w, rscale } = _h;
                if (w * rscale > W)
                  W = w * rscale;
              }
            }
          } catch (e_5_1) {
            e_5 = { error: e_5_1 };
          } finally {
            try {
              if (_g && !_g.done && (_b = _f.return))
                _b.call(_f);
            } finally {
              if (e_5)
                throw e_5.error;
            }
          }
          try {
            for (var stretchy_1 = __values(stretchy), stretchy_1_1 = stretchy_1.next();!stretchy_1_1.done; stretchy_1_1 = stretchy_1.next()) {
              var child = stretchy_1_1.value;
              child.coreMO().getStretchedVariant([W / child.bbox.rscale]);
            }
          } catch (e_6_1) {
            e_6 = { error: e_6_1 };
          } finally {
            try {
              if (stretchy_1_1 && !stretchy_1_1.done && (_c = stretchy_1.return))
                _c.call(stretchy_1);
            } finally {
              if (e_6)
                throw e_6.error;
            }
          }
        }
      };
      return class_1;
    }(Base), _a.useIC = true, _a;
  }
  exports.CommonScriptbaseMixin = CommonScriptbaseMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/msubsup.js
var require_msubsup3 = __commonJS(function(exports) {
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
  exports.CommonMsubsupMixin = exports.CommonMsupMixin = exports.CommonMsubMixin = undefined;
  function CommonMsubMixin(Base) {
    var _a;
    return _a = function(_super) {
      __extends(class_1, _super);
      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(class_1.prototype, "scriptChild", {
        get: function() {
          return this.childNodes[this.node.sub];
        },
        enumerable: false,
        configurable: true
      });
      class_1.prototype.getOffset = function() {
        return [0, -this.getV()];
      };
      return class_1;
    }(Base), _a.useIC = false, _a;
  }
  exports.CommonMsubMixin = CommonMsubMixin;
  function CommonMsupMixin(Base) {
    return function(_super) {
      __extends(class_2, _super);
      function class_2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(class_2.prototype, "scriptChild", {
        get: function() {
          return this.childNodes[this.node.sup];
        },
        enumerable: false,
        configurable: true
      });
      class_2.prototype.getOffset = function() {
        var x = this.getAdjustedIc() - (this.baseRemoveIc ? 0 : this.baseIc);
        return [x, this.getU()];
      };
      return class_2;
    }(Base);
  }
  exports.CommonMsupMixin = CommonMsupMixin;
  function CommonMsubsupMixin(Base) {
    var _a;
    return _a = function(_super) {
      __extends(class_3, _super);
      function class_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UVQ = null;
        return _this;
      }
      Object.defineProperty(class_3.prototype, "subChild", {
        get: function() {
          return this.childNodes[this.node.sub];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(class_3.prototype, "supChild", {
        get: function() {
          return this.childNodes[this.node.sup];
        },
        enumerable: false,
        configurable: true
      });
      class_3.prototype.computeBBox = function(bbox, recompute) {
        if (recompute === undefined) {
          recompute = false;
        }
        var basebox = this.baseChild.getOuterBBox();
        var _a = __read([this.subChild.getOuterBBox(), this.supChild.getOuterBBox()], 2), subbox = _a[0], supbox = _a[1];
        bbox.empty();
        bbox.append(basebox);
        var w = this.getBaseWidth();
        var x = this.getAdjustedIc();
        var _b = __read(this.getUVQ(), 2), u = _b[0], v = _b[1];
        bbox.combine(subbox, w, v);
        bbox.combine(supbox, w + x, u);
        bbox.w += this.font.params.scriptspace;
        bbox.clean();
        this.setChildPWidths(recompute);
      };
      class_3.prototype.getUVQ = function(subbox, supbox) {
        if (subbox === undefined) {
          subbox = this.subChild.getOuterBBox();
        }
        if (supbox === undefined) {
          supbox = this.supChild.getOuterBBox();
        }
        var basebox = this.baseCore.getOuterBBox();
        if (this.UVQ)
          return this.UVQ;
        var tex = this.font.params;
        var t = 3 * tex.rule_thickness;
        var subscriptshift = this.length2em(this.node.attributes.get("subscriptshift"), tex.sub2);
        var drop = this.baseCharZero(basebox.d * this.baseScale + tex.sub_drop * subbox.rscale);
        var _a = __read([this.getU(), Math.max(drop, subscriptshift)], 2), u = _a[0], v = _a[1];
        var q = u - supbox.d * supbox.rscale - (subbox.h * subbox.rscale - v);
        if (q < t) {
          v += t - q;
          var p = 4 / 5 * tex.x_height - (u - supbox.d * supbox.rscale);
          if (p > 0) {
            u += p;
            v -= p;
          }
        }
        u = Math.max(this.length2em(this.node.attributes.get("superscriptshift"), u), u);
        v = Math.max(this.length2em(this.node.attributes.get("subscriptshift"), v), v);
        q = u - supbox.d * supbox.rscale - (subbox.h * subbox.rscale - v);
        this.UVQ = [u, -v, q];
        return this.UVQ;
      };
      return class_3;
    }(Base), _a.useIC = false, _a;
  }
  exports.CommonMsubsupMixin = CommonMsubsupMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/munderover.js
var require_munderover3 = __commonJS(function(exports) {
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
  exports.CommonMunderoverMixin = exports.CommonMoverMixin = exports.CommonMunderMixin = undefined;
  function CommonMunderMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        _this.stretchChildren();
        return _this;
      }
      Object.defineProperty(class_1.prototype, "scriptChild", {
        get: function() {
          return this.childNodes[this.node.under];
        },
        enumerable: false,
        configurable: true
      });
      class_1.prototype.computeBBox = function(bbox, recompute) {
        if (recompute === undefined) {
          recompute = false;
        }
        if (this.hasMovableLimits()) {
          _super.prototype.computeBBox.call(this, bbox, recompute);
          return;
        }
        bbox.empty();
        var basebox = this.baseChild.getOuterBBox();
        var underbox = this.scriptChild.getOuterBBox();
        var v = this.getUnderKV(basebox, underbox)[1];
        var delta = this.isLineBelow ? 0 : this.getDelta(true);
        var _a = __read(this.getDeltaW([basebox, underbox], [0, -delta]), 2), bw = _a[0], uw = _a[1];
        bbox.combine(basebox, bw, 0);
        bbox.combine(underbox, uw, v);
        bbox.d += this.font.params.big_op_spacing5;
        bbox.clean();
        this.setChildPWidths(recompute);
      };
      return class_1;
    }(Base);
  }
  exports.CommonMunderMixin = CommonMunderMixin;
  function CommonMoverMixin(Base) {
    return function(_super) {
      __extends(class_2, _super);
      function class_2() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        _this.stretchChildren();
        return _this;
      }
      Object.defineProperty(class_2.prototype, "scriptChild", {
        get: function() {
          return this.childNodes[this.node.over];
        },
        enumerable: false,
        configurable: true
      });
      class_2.prototype.computeBBox = function(bbox) {
        if (this.hasMovableLimits()) {
          _super.prototype.computeBBox.call(this, bbox);
          return;
        }
        bbox.empty();
        var basebox = this.baseChild.getOuterBBox();
        var overbox = this.scriptChild.getOuterBBox();
        if (this.node.attributes.get("accent")) {
          basebox.h = Math.max(basebox.h, this.font.params.x_height * basebox.scale);
        }
        var u = this.getOverKU(basebox, overbox)[1];
        var delta = this.isLineAbove ? 0 : this.getDelta();
        var _a = __read(this.getDeltaW([basebox, overbox], [0, delta]), 2), bw = _a[0], ow = _a[1];
        bbox.combine(basebox, bw, 0);
        bbox.combine(overbox, ow, u);
        bbox.h += this.font.params.big_op_spacing5;
        bbox.clean();
      };
      return class_2;
    }(Base);
  }
  exports.CommonMoverMixin = CommonMoverMixin;
  function CommonMunderoverMixin(Base) {
    return function(_super) {
      __extends(class_3, _super);
      function class_3() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        _this.stretchChildren();
        return _this;
      }
      Object.defineProperty(class_3.prototype, "underChild", {
        get: function() {
          return this.childNodes[this.node.under];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(class_3.prototype, "overChild", {
        get: function() {
          return this.childNodes[this.node.over];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(class_3.prototype, "subChild", {
        get: function() {
          return this.underChild;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(class_3.prototype, "supChild", {
        get: function() {
          return this.overChild;
        },
        enumerable: false,
        configurable: true
      });
      class_3.prototype.computeBBox = function(bbox) {
        if (this.hasMovableLimits()) {
          _super.prototype.computeBBox.call(this, bbox);
          return;
        }
        bbox.empty();
        var overbox = this.overChild.getOuterBBox();
        var basebox = this.baseChild.getOuterBBox();
        var underbox = this.underChild.getOuterBBox();
        if (this.node.attributes.get("accent")) {
          basebox.h = Math.max(basebox.h, this.font.params.x_height * basebox.scale);
        }
        var u = this.getOverKU(basebox, overbox)[1];
        var v = this.getUnderKV(basebox, underbox)[1];
        var delta = this.getDelta();
        var _a = __read(this.getDeltaW([basebox, underbox, overbox], [0, this.isLineBelow ? 0 : -delta, this.isLineAbove ? 0 : delta]), 3), bw = _a[0], uw = _a[1], ow = _a[2];
        bbox.combine(basebox, bw, 0);
        bbox.combine(overbox, ow, u);
        bbox.combine(underbox, uw, v);
        var z = this.font.params.big_op_spacing5;
        bbox.h += z;
        bbox.d += z;
        bbox.clean();
      };
      return class_3;
    }(Base);
  }
  exports.CommonMunderoverMixin = CommonMunderoverMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/mmultiscripts.js
var require_mmultiscripts3 = __commonJS(function(exports) {
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
  exports.CommonMmultiscriptsMixin = exports.ScriptNames = exports.NextScript = undefined;
  var BBox_js_1 = require_BBox();
  exports.NextScript = {
    base: "subList",
    subList: "supList",
    supList: "subList",
    psubList: "psupList",
    psupList: "psubList"
  };
  exports.ScriptNames = ["sup", "sup", "psup", "psub"];
  function CommonMmultiscriptsMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        _this.scriptData = null;
        _this.firstPrescript = 0;
        _this.getScriptData();
        return _this;
      }
      class_1.prototype.combinePrePost = function(pre, post) {
        var bbox = new BBox_js_1.BBox(pre);
        bbox.combine(post, 0, 0);
        return bbox;
      };
      class_1.prototype.computeBBox = function(bbox, recompute) {
        if (recompute === undefined) {
          recompute = false;
        }
        var scriptspace = this.font.params.scriptspace;
        var data = this.scriptData;
        var sub = this.combinePrePost(data.sub, data.psub);
        var sup = this.combinePrePost(data.sup, data.psup);
        var _a = __read(this.getUVQ(sub, sup), 2), u = _a[0], v = _a[1];
        bbox.empty();
        if (data.numPrescripts) {
          bbox.combine(data.psup, scriptspace, u);
          bbox.combine(data.psub, scriptspace, v);
        }
        bbox.append(data.base);
        if (data.numScripts) {
          var w = bbox.w;
          bbox.combine(data.sup, w, u);
          bbox.combine(data.sub, w, v);
          bbox.w += scriptspace;
        }
        bbox.clean();
        this.setChildPWidths(recompute);
      };
      class_1.prototype.getScriptData = function() {
        var data = this.scriptData = {
          base: null,
          sub: BBox_js_1.BBox.empty(),
          sup: BBox_js_1.BBox.empty(),
          psub: BBox_js_1.BBox.empty(),
          psup: BBox_js_1.BBox.empty(),
          numPrescripts: 0,
          numScripts: 0
        };
        var lists = this.getScriptBBoxLists();
        this.combineBBoxLists(data.sub, data.sup, lists.subList, lists.supList);
        this.combineBBoxLists(data.psub, data.psup, lists.psubList, lists.psupList);
        data.base = lists.base[0];
        data.numPrescripts = lists.psubList.length;
        data.numScripts = lists.subList.length;
      };
      class_1.prototype.getScriptBBoxLists = function() {
        var e_1, _a;
        var lists = {
          base: [],
          subList: [],
          supList: [],
          psubList: [],
          psupList: []
        };
        var script = "base";
        try {
          for (var _b = __values(this.childNodes), _c = _b.next();!_c.done; _c = _b.next()) {
            var child = _c.value;
            if (child.node.isKind("mprescripts")) {
              script = "psubList";
            } else {
              lists[script].push(child.getOuterBBox());
              script = exports.NextScript[script];
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
        this.firstPrescript = lists.subList.length + lists.supList.length + 2;
        this.padLists(lists.subList, lists.supList);
        this.padLists(lists.psubList, lists.psupList);
        return lists;
      };
      class_1.prototype.padLists = function(list1, list2) {
        if (list1.length > list2.length) {
          list2.push(BBox_js_1.BBox.empty());
        }
      };
      class_1.prototype.combineBBoxLists = function(bbox1, bbox2, list1, list2) {
        for (var i = 0;i < list1.length; i++) {
          var _a = __read(this.getScaledWHD(list1[i]), 3), w1 = _a[0], h1 = _a[1], d1 = _a[2];
          var _b = __read(this.getScaledWHD(list2[i]), 3), w2 = _b[0], h2 = _b[1], d2 = _b[2];
          var w = Math.max(w1, w2);
          bbox1.w += w;
          bbox2.w += w;
          if (h1 > bbox1.h)
            bbox1.h = h1;
          if (d1 > bbox1.d)
            bbox1.d = d1;
          if (h2 > bbox2.h)
            bbox2.h = h2;
          if (d2 > bbox2.d)
            bbox2.d = d2;
        }
      };
      class_1.prototype.getScaledWHD = function(bbox) {
        var { w, h, d, rscale } = bbox;
        return [w * rscale, h * rscale, d * rscale];
      };
      class_1.prototype.getUVQ = function(subbox, supbox) {
        var _a;
        if (!this.UVQ) {
          var _b = __read([0, 0, 0], 3), u = _b[0], v = _b[1], q = _b[2];
          if (subbox.h === 0 && subbox.d === 0) {
            u = this.getU();
          } else if (supbox.h === 0 && supbox.d === 0) {
            u = -this.getV();
          } else {
            _a = __read(_super.prototype.getUVQ.call(this, subbox, supbox), 3), u = _a[0], v = _a[1], q = _a[2];
          }
          this.UVQ = [u, v, q];
        }
        return this.UVQ;
      };
      return class_1;
    }(Base);
  }
  exports.CommonMmultiscriptsMixin = CommonMmultiscriptsMixin;
});

// node_modules/mathjax-full/js/util/numeric.js
var require_numeric = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.max = exports.sum = undefined;
  function sum(A) {
    return A.reduce(function(a, b) {
      return a + b;
    }, 0);
  }
  exports.sum = sum;
  function max(A) {
    return A.reduce(function(a, b) {
      return Math.max(a, b);
    }, 0);
  }
  exports.max = max;
});

// node_modules/mathjax-full/js/output/common/Wrappers/mtable.js
var require_mtable3 = __commonJS(function(exports) {
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
  exports.CommonMtableMixin = undefined;
  var BBox_js_1 = require_BBox();
  var string_js_1 = require_string();
  var numeric_js_1 = require_numeric();
  function CommonMtableMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        _this.numCols = 0;
        _this.numRows = 0;
        _this.data = null;
        _this.pwidthCells = [];
        _this.pWidth = 0;
        _this.numCols = (0, numeric_js_1.max)(_this.tableRows.map(function(row) {
          return row.numCells;
        }));
        _this.numRows = _this.childNodes.length;
        _this.hasLabels = _this.childNodes.reduce(function(value, row) {
          return value || row.node.isKind("mlabeledtr");
        }, false);
        _this.findContainer();
        _this.isTop = !_this.container || _this.container.node.isKind("math") && !_this.container.parent;
        if (_this.isTop) {
          _this.jax.table = _this;
        }
        _this.getPercentageWidth();
        var attributes = _this.node.attributes;
        _this.frame = attributes.get("frame") !== "none";
        _this.fLine = _this.frame && attributes.get("frame") ? 0.07 : 0;
        _this.fSpace = _this.frame ? _this.convertLengths(_this.getAttributeArray("framespacing")) : [0, 0];
        _this.cSpace = _this.convertLengths(_this.getColumnAttributes("columnspacing"));
        _this.rSpace = _this.convertLengths(_this.getRowAttributes("rowspacing"));
        _this.cLines = _this.getColumnAttributes("columnlines").map(function(x) {
          return x === "none" ? 0 : 0.07;
        });
        _this.rLines = _this.getRowAttributes("rowlines").map(function(x) {
          return x === "none" ? 0 : 0.07;
        });
        _this.cWidths = _this.getColumnWidths();
        _this.stretchRows();
        _this.stretchColumns();
        return _this;
      }
      Object.defineProperty(class_1.prototype, "tableRows", {
        get: function() {
          return this.childNodes;
        },
        enumerable: false,
        configurable: true
      });
      class_1.prototype.findContainer = function() {
        var node = this;
        var parent = node.parent;
        while (parent && (parent.node.notParent || parent.node.isKind("mrow"))) {
          node = parent;
          parent = parent.parent;
        }
        this.container = parent;
        this.containerI = node.node.childPosition();
      };
      class_1.prototype.getPercentageWidth = function() {
        if (this.hasLabels) {
          this.bbox.pwidth = BBox_js_1.BBox.fullWidth;
        } else {
          var width = this.node.attributes.get("width");
          if ((0, string_js_1.isPercent)(width)) {
            this.bbox.pwidth = width;
          }
        }
      };
      class_1.prototype.stretchRows = function() {
        var equal = this.node.attributes.get("equalrows");
        var HD = equal ? this.getEqualRowHeight() : 0;
        var _a = equal ? this.getTableData() : { H: [0], D: [0] }, { H, D } = _a;
        var rows = this.tableRows;
        for (var i = 0;i < this.numRows; i++) {
          var hd = equal ? [(HD + H[i] - D[i]) / 2, (HD - H[i] + D[i]) / 2] : null;
          rows[i].stretchChildren(hd);
        }
      };
      class_1.prototype.stretchColumns = function() {
        for (var i = 0;i < this.numCols; i++) {
          var width = typeof this.cWidths[i] === "number" ? this.cWidths[i] : null;
          this.stretchColumn(i, width);
        }
      };
      class_1.prototype.stretchColumn = function(i, W) {
        var e_1, _a, e_2, _b, e_3, _c;
        var stretchy = [];
        try {
          for (var _d = __values(this.tableRows), _e = _d.next();!_e.done; _e = _d.next()) {
            var row = _e.value;
            var cell = row.getChild(i);
            if (cell) {
              var child = cell.childNodes[0];
              if (child.stretch.dir === 0 && child.canStretch(2)) {
                stretchy.push(child);
              }
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_e && !_e.done && (_a = _d.return))
              _a.call(_d);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        var count = stretchy.length;
        var nodeCount = this.childNodes.length;
        if (count && nodeCount > 1) {
          if (W === null) {
            W = 0;
            var all = count > 1 && count === nodeCount;
            try {
              for (var _f = __values(this.tableRows), _g = _f.next();!_g.done; _g = _f.next()) {
                var row = _g.value;
                var cell = row.getChild(i);
                if (cell) {
                  var child = cell.childNodes[0];
                  var noStretch = child.stretch.dir === 0;
                  if (all || noStretch) {
                    var w = child.getBBox(noStretch).w;
                    if (w > W) {
                      W = w;
                    }
                  }
                }
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (_g && !_g.done && (_b = _f.return))
                  _b.call(_f);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
            }
          }
          try {
            for (var stretchy_1 = __values(stretchy), stretchy_1_1 = stretchy_1.next();!stretchy_1_1.done; stretchy_1_1 = stretchy_1.next()) {
              var child = stretchy_1_1.value;
              child.coreMO().getStretchedVariant([W]);
            }
          } catch (e_3_1) {
            e_3 = { error: e_3_1 };
          } finally {
            try {
              if (stretchy_1_1 && !stretchy_1_1.done && (_c = stretchy_1.return))
                _c.call(stretchy_1);
            } finally {
              if (e_3)
                throw e_3.error;
            }
          }
        }
      };
      class_1.prototype.getTableData = function() {
        if (this.data) {
          return this.data;
        }
        var H = new Array(this.numRows).fill(0);
        var D = new Array(this.numRows).fill(0);
        var W = new Array(this.numCols).fill(0);
        var NH = new Array(this.numRows);
        var ND = new Array(this.numRows);
        var LW = [0];
        var rows = this.tableRows;
        for (var j = 0;j < rows.length; j++) {
          var M = 0;
          var row = rows[j];
          var align = row.node.attributes.get("rowalign");
          for (var i = 0;i < row.numCells; i++) {
            var cell = row.getChild(i);
            M = this.updateHDW(cell, i, j, align, H, D, W, M);
            this.recordPWidthCell(cell, i);
          }
          NH[j] = H[j];
          ND[j] = D[j];
          if (row.labeled) {
            M = this.updateHDW(row.childNodes[0], 0, j, align, H, D, LW, M);
          }
          this.extendHD(j, H, D, M);
          this.extendHD(j, NH, ND, M);
        }
        var L = LW[0];
        this.data = { H, D, W, NH, ND, L };
        return this.data;
      };
      class_1.prototype.updateHDW = function(cell, i, j, align, H, D, W, M) {
        var _a = cell.getBBox(), { h, d, w } = _a;
        var scale = cell.parent.bbox.rscale;
        if (cell.parent.bbox.rscale !== 1) {
          h *= scale;
          d *= scale;
          w *= scale;
        }
        if (this.node.getProperty("useHeight")) {
          if (h < 0.75)
            h = 0.75;
          if (d < 0.25)
            d = 0.25;
        }
        var m = 0;
        align = cell.node.attributes.get("rowalign") || align;
        if (align !== "baseline" && align !== "axis") {
          m = h + d;
          h = d = 0;
        }
        if (h > H[j])
          H[j] = h;
        if (d > D[j])
          D[j] = d;
        if (m > M)
          M = m;
        if (W && w > W[i])
          W[i] = w;
        return M;
      };
      class_1.prototype.extendHD = function(i, H, D, M) {
        var d = (M - (H[i] + D[i])) / 2;
        if (d < 0.00001)
          return;
        H[i] += d;
        D[i] += d;
      };
      class_1.prototype.recordPWidthCell = function(cell, i) {
        if (cell.childNodes[0] && cell.childNodes[0].getBBox().pwidth) {
          this.pwidthCells.push([cell, i]);
        }
      };
      class_1.prototype.computeBBox = function(bbox, _recompute) {
        if (_recompute === undefined) {
          _recompute = false;
        }
        var _a = this.getTableData(), { H, D } = _a;
        var height, width;
        if (this.node.attributes.get("equalrows")) {
          var HD = this.getEqualRowHeight();
          height = (0, numeric_js_1.sum)([].concat(this.rLines, this.rSpace)) + HD * this.numRows;
        } else {
          height = (0, numeric_js_1.sum)(H.concat(D, this.rLines, this.rSpace));
        }
        height += 2 * (this.fLine + this.fSpace[1]);
        var CW = this.getComputedWidths();
        width = (0, numeric_js_1.sum)(CW.concat(this.cLines, this.cSpace)) + 2 * (this.fLine + this.fSpace[0]);
        var w = this.node.attributes.get("width");
        if (w !== "auto") {
          width = Math.max(this.length2em(w, 0) + 2 * this.fLine, width);
        }
        var _b = __read(this.getBBoxHD(height), 2), h = _b[0], d = _b[1];
        bbox.h = h;
        bbox.d = d;
        bbox.w = width;
        var _c = __read(this.getBBoxLR(), 2), L = _c[0], R = _c[1];
        bbox.L = L;
        bbox.R = R;
        if (!(0, string_js_1.isPercent)(w)) {
          this.setColumnPWidths();
        }
      };
      class_1.prototype.setChildPWidths = function(_recompute, cwidth, _clear) {
        var width = this.node.attributes.get("width");
        if (!(0, string_js_1.isPercent)(width))
          return false;
        if (!this.hasLabels) {
          this.bbox.pwidth = "";
          this.container.bbox.pwidth = "";
        }
        var _a = this.bbox, { w, L, R } = _a;
        var labelInWidth = this.node.attributes.get("data-width-includes-label");
        var W = Math.max(w, this.length2em(width, Math.max(cwidth, L + w + R))) - (labelInWidth ? L + R : 0);
        var cols = this.node.attributes.get("equalcolumns") ? Array(this.numCols).fill(this.percent(1 / Math.max(1, this.numCols))) : this.getColumnAttributes("columnwidth", 0);
        this.cWidths = this.getColumnWidthsFixed(cols, W);
        var CW = this.getComputedWidths();
        this.pWidth = (0, numeric_js_1.sum)(CW.concat(this.cLines, this.cSpace)) + 2 * (this.fLine + this.fSpace[0]);
        if (this.isTop) {
          this.bbox.w = this.pWidth;
        }
        this.setColumnPWidths();
        if (this.pWidth !== w) {
          this.parent.invalidateBBox();
        }
        return this.pWidth !== w;
      };
      class_1.prototype.setColumnPWidths = function() {
        var e_4, _a;
        var W = this.cWidths;
        try {
          for (var _b = __values(this.pwidthCells), _c = _b.next();!_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), cell = _d[0], i = _d[1];
            if (cell.setChildPWidths(false, W[i])) {
              cell.invalidateBBox();
              cell.getBBox();
            }
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_4)
              throw e_4.error;
          }
        }
      };
      class_1.prototype.getBBoxHD = function(height) {
        var _a = __read(this.getAlignmentRow(), 2), align = _a[0], row = _a[1];
        if (row === null) {
          var a = this.font.params.axis_height;
          var h2 = height / 2;
          var HD = {
            top: [0, height],
            center: [h2, h2],
            bottom: [height, 0],
            baseline: [h2, h2],
            axis: [h2 + a, h2 - a]
          };
          return HD[align] || [h2, h2];
        } else {
          var y = this.getVerticalPosition(row, align);
          return [y, height - y];
        }
      };
      class_1.prototype.getBBoxLR = function() {
        if (this.hasLabels) {
          var attributes = this.node.attributes;
          var side = attributes.get("side");
          var _a = __read(this.getPadAlignShift(side), 2), pad = _a[0], align = _a[1];
          var labels = this.hasLabels && !!attributes.get("data-width-includes-label");
          if (labels && this.frame && this.fSpace[0]) {
            pad -= this.fSpace[0];
          }
          return align === "center" && !labels ? [pad, pad] : side === "left" ? [pad, 0] : [0, pad];
        }
        return [0, 0];
      };
      class_1.prototype.getPadAlignShift = function(side) {
        var L = this.getTableData().L;
        var sep = this.length2em(this.node.attributes.get("minlabelspacing"));
        var pad = L + sep;
        var _a = __read(this.styles == null ? ["", ""] : [this.styles.get("padding-left"), this.styles.get("padding-right")], 2), lpad = _a[0], rpad = _a[1];
        if (lpad || rpad) {
          pad = Math.max(pad, this.length2em(lpad || "0"), this.length2em(rpad || "0"));
        }
        var _b = __read(this.getAlignShift(), 2), align = _b[0], shift = _b[1];
        if (align === side) {
          shift = side === "left" ? Math.max(pad, shift) - pad : Math.min(-pad, shift) + pad;
        }
        return [pad, align, shift];
      };
      class_1.prototype.getAlignShift = function() {
        return this.isTop ? _super.prototype.getAlignShift.call(this) : [this.container.getChildAlign(this.containerI), 0];
      };
      class_1.prototype.getWidth = function() {
        return this.pWidth || this.getBBox().w;
      };
      class_1.prototype.getEqualRowHeight = function() {
        var _a = this.getTableData(), { H, D } = _a;
        var HD = Array.from(H.keys()).map(function(i) {
          return H[i] + D[i];
        });
        return Math.max.apply(Math, HD);
      };
      class_1.prototype.getComputedWidths = function() {
        var _this = this;
        var W = this.getTableData().W;
        var CW = Array.from(W.keys()).map(function(i) {
          return typeof _this.cWidths[i] === "number" ? _this.cWidths[i] : W[i];
        });
        if (this.node.attributes.get("equalcolumns")) {
          CW = Array(CW.length).fill((0, numeric_js_1.max)(CW));
        }
        return CW;
      };
      class_1.prototype.getColumnWidths = function() {
        var width = this.node.attributes.get("width");
        if (this.node.attributes.get("equalcolumns")) {
          return this.getEqualColumns(width);
        }
        var swidths = this.getColumnAttributes("columnwidth", 0);
        if (width === "auto") {
          return this.getColumnWidthsAuto(swidths);
        }
        if ((0, string_js_1.isPercent)(width)) {
          return this.getColumnWidthsPercent(swidths);
        }
        return this.getColumnWidthsFixed(swidths, this.length2em(width));
      };
      class_1.prototype.getEqualColumns = function(width) {
        var n = Math.max(1, this.numCols);
        var cwidth;
        if (width === "auto") {
          var W = this.getTableData().W;
          cwidth = (0, numeric_js_1.max)(W);
        } else if ((0, string_js_1.isPercent)(width)) {
          cwidth = this.percent(1 / n);
        } else {
          var w = (0, numeric_js_1.sum)([].concat(this.cLines, this.cSpace)) + 2 * this.fSpace[0];
          cwidth = Math.max(0, this.length2em(width) - w) / n;
        }
        return Array(this.numCols).fill(cwidth);
      };
      class_1.prototype.getColumnWidthsAuto = function(swidths) {
        var _this = this;
        return swidths.map(function(x) {
          if (x === "auto" || x === "fit")
            return null;
          if ((0, string_js_1.isPercent)(x))
            return x;
          return _this.length2em(x);
        });
      };
      class_1.prototype.getColumnWidthsPercent = function(swidths) {
        var _this = this;
        var hasFit = swidths.indexOf("fit") >= 0;
        var W = (hasFit ? this.getTableData() : { W: null }).W;
        return Array.from(swidths.keys()).map(function(i) {
          var x = swidths[i];
          if (x === "fit")
            return null;
          if (x === "auto")
            return hasFit ? W[i] : null;
          if ((0, string_js_1.isPercent)(x))
            return x;
          return _this.length2em(x);
        });
      };
      class_1.prototype.getColumnWidthsFixed = function(swidths, width) {
        var _this = this;
        var indices = Array.from(swidths.keys());
        var fit = indices.filter(function(i) {
          return swidths[i] === "fit";
        });
        var auto = indices.filter(function(i) {
          return swidths[i] === "auto";
        });
        var n = fit.length || auto.length;
        var W = (n ? this.getTableData() : { W: null }).W;
        var cwidth = width - (0, numeric_js_1.sum)([].concat(this.cLines, this.cSpace)) - 2 * this.fSpace[0];
        var dw = cwidth;
        indices.forEach(function(i) {
          var x = swidths[i];
          dw -= x === "fit" || x === "auto" ? W[i] : _this.length2em(x, cwidth);
        });
        var fw = n && dw > 0 ? dw / n : 0;
        return indices.map(function(i) {
          var x = swidths[i];
          if (x === "fit")
            return W[i] + fw;
          if (x === "auto")
            return W[i] + (fit.length === 0 ? fw : 0);
          return _this.length2em(x, cwidth);
        });
      };
      class_1.prototype.getVerticalPosition = function(i, align) {
        var equal = this.node.attributes.get("equalrows");
        var _a = this.getTableData(), { H, D } = _a;
        var HD = equal ? this.getEqualRowHeight() : 0;
        var space = this.getRowHalfSpacing();
        var y = this.fLine;
        for (var j = 0;j < i; j++) {
          y += space[j] + (equal ? HD : H[j] + D[j]) + space[j + 1] + this.rLines[j];
        }
        var _b = __read(equal ? [(HD + H[i] - D[i]) / 2, (HD - H[i] + D[i]) / 2] : [H[i], D[i]], 2), h = _b[0], d = _b[1];
        var offset = {
          top: 0,
          center: space[i] + (h + d) / 2,
          bottom: space[i] + h + d + space[i + 1],
          baseline: space[i] + h,
          axis: space[i] + h - 0.25
        };
        y += offset[align] || 0;
        return y;
      };
      class_1.prototype.getEmHalfSpacing = function(fspace, space, scale) {
        if (scale === undefined) {
          scale = 1;
        }
        var fspaceEm = this.em(fspace * scale);
        var spaceEm = this.addEm(space, 2 / scale);
        spaceEm.unshift(fspaceEm);
        spaceEm.push(fspaceEm);
        return spaceEm;
      };
      class_1.prototype.getRowHalfSpacing = function() {
        var space = this.rSpace.map(function(x) {
          return x / 2;
        });
        space.unshift(this.fSpace[1]);
        space.push(this.fSpace[1]);
        return space;
      };
      class_1.prototype.getColumnHalfSpacing = function() {
        var space = this.cSpace.map(function(x) {
          return x / 2;
        });
        space.unshift(this.fSpace[0]);
        space.push(this.fSpace[0]);
        return space;
      };
      class_1.prototype.getAlignmentRow = function() {
        var _a = __read((0, string_js_1.split)(this.node.attributes.get("align")), 2), align = _a[0], row = _a[1];
        if (row == null)
          return [align, null];
        var i = parseInt(row);
        if (i < 0)
          i += this.numRows + 1;
        return [align, i < 1 || i > this.numRows ? null : i - 1];
      };
      class_1.prototype.getColumnAttributes = function(name, i) {
        if (i === undefined) {
          i = 1;
        }
        var n = this.numCols - i;
        var columns = this.getAttributeArray(name);
        if (columns.length === 0)
          return null;
        while (columns.length < n) {
          columns.push(columns[columns.length - 1]);
        }
        if (columns.length > n) {
          columns.splice(n);
        }
        return columns;
      };
      class_1.prototype.getRowAttributes = function(name, i) {
        if (i === undefined) {
          i = 1;
        }
        var n = this.numRows - i;
        var rows = this.getAttributeArray(name);
        if (rows.length === 0)
          return null;
        while (rows.length < n) {
          rows.push(rows[rows.length - 1]);
        }
        if (rows.length > n) {
          rows.splice(n);
        }
        return rows;
      };
      class_1.prototype.getAttributeArray = function(name) {
        var value = this.node.attributes.get(name);
        if (!value)
          return [this.node.attributes.getDefault(name)];
        return (0, string_js_1.split)(value);
      };
      class_1.prototype.addEm = function(list, n) {
        var _this = this;
        if (n === undefined) {
          n = 1;
        }
        if (!list)
          return null;
        return list.map(function(x) {
          return _this.em(x / n);
        });
      };
      class_1.prototype.convertLengths = function(list) {
        var _this = this;
        if (!list)
          return null;
        return list.map(function(x) {
          return _this.length2em(x);
        });
      };
      return class_1;
    }(Base);
  }
  exports.CommonMtableMixin = CommonMtableMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/mtr.js
var require_mtr3 = __commonJS(function(exports) {
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
  exports.CommonMlabeledtrMixin = exports.CommonMtrMixin = undefined;
  function CommonMtrMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(class_1.prototype, "fixesPWidth", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(class_1.prototype, "numCells", {
        get: function() {
          return this.childNodes.length;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(class_1.prototype, "labeled", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(class_1.prototype, "tableCells", {
        get: function() {
          return this.childNodes;
        },
        enumerable: false,
        configurable: true
      });
      class_1.prototype.getChild = function(i) {
        return this.childNodes[i];
      };
      class_1.prototype.getChildBBoxes = function() {
        return this.childNodes.map(function(cell) {
          return cell.getBBox();
        });
      };
      class_1.prototype.stretchChildren = function(HD) {
        var e_1, _a, e_2, _b, e_3, _c;
        if (HD === undefined) {
          HD = null;
        }
        var stretchy = [];
        var children = this.labeled ? this.childNodes.slice(1) : this.childNodes;
        try {
          for (var children_1 = __values(children), children_1_1 = children_1.next();!children_1_1.done; children_1_1 = children_1.next()) {
            var mtd = children_1_1.value;
            var child = mtd.childNodes[0];
            if (child.canStretch(1)) {
              stretchy.push(child);
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (children_1_1 && !children_1_1.done && (_a = children_1.return))
              _a.call(children_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        var count = stretchy.length;
        var nodeCount = this.childNodes.length;
        if (count && nodeCount > 1) {
          if (HD === null) {
            var H = 0, D = 0;
            var all = count > 1 && count === nodeCount;
            try {
              for (var children_2 = __values(children), children_2_1 = children_2.next();!children_2_1.done; children_2_1 = children_2.next()) {
                var mtd = children_2_1.value;
                var child = mtd.childNodes[0];
                var noStretch = child.stretch.dir === 0;
                if (all || noStretch) {
                  var _d = child.getBBox(noStretch), { h, d } = _d;
                  if (h > H) {
                    H = h;
                  }
                  if (d > D) {
                    D = d;
                  }
                }
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (children_2_1 && !children_2_1.done && (_b = children_2.return))
                  _b.call(children_2);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
            }
            HD = [H, D];
          }
          try {
            for (var stretchy_1 = __values(stretchy), stretchy_1_1 = stretchy_1.next();!stretchy_1_1.done; stretchy_1_1 = stretchy_1.next()) {
              var child = stretchy_1_1.value;
              child.coreMO().getStretchedVariant(HD);
            }
          } catch (e_3_1) {
            e_3 = { error: e_3_1 };
          } finally {
            try {
              if (stretchy_1_1 && !stretchy_1_1.done && (_c = stretchy_1.return))
                _c.call(stretchy_1);
            } finally {
              if (e_3)
                throw e_3.error;
            }
          }
        }
      };
      return class_1;
    }(Base);
  }
  exports.CommonMtrMixin = CommonMtrMixin;
  function CommonMlabeledtrMixin(Base) {
    return function(_super) {
      __extends(class_2, _super);
      function class_2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(class_2.prototype, "numCells", {
        get: function() {
          return Math.max(0, this.childNodes.length - 1);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(class_2.prototype, "labeled", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(class_2.prototype, "tableCells", {
        get: function() {
          return this.childNodes.slice(1);
        },
        enumerable: false,
        configurable: true
      });
      class_2.prototype.getChild = function(i) {
        return this.childNodes[i + 1];
      };
      class_2.prototype.getChildBBoxes = function() {
        return this.childNodes.slice(1).map(function(cell) {
          return cell.getBBox();
        });
      };
      return class_2;
    }(Base);
  }
  exports.CommonMlabeledtrMixin = CommonMlabeledtrMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/mtd.js
var require_mtd3 = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CommonMtdMixin = undefined;
  function CommonMtdMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(class_1.prototype, "fixesPWidth", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      class_1.prototype.invalidateBBox = function() {
        this.bboxComputed = false;
      };
      class_1.prototype.getWrapWidth = function(_j) {
        var table = this.parent.parent;
        var row = this.parent;
        var i = this.node.childPosition() - (row.labeled ? 1 : 0);
        return typeof table.cWidths[i] === "number" ? table.cWidths[i] : table.getTableData().W[i];
      };
      class_1.prototype.getChildAlign = function(_i) {
        return this.node.attributes.get("columnalign");
      };
      return class_1;
    }(Base);
  }
  exports.CommonMtdMixin = CommonMtdMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/maction.js
var require_maction3 = __commonJS(function(exports) {
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
  exports.CommonMactionMixin = exports.TooltipData = undefined;
  var string_js_1 = require_string();
  exports.TooltipData = {
    dx: ".2em",
    dy: ".1em",
    postDelay: 600,
    clearDelay: 100,
    hoverTimer: new Map,
    clearTimer: new Map,
    stopTimers: function(node, data) {
      if (data.clearTimer.has(node)) {
        clearTimeout(data.clearTimer.get(node));
        data.clearTimer.delete(node);
      }
      if (data.hoverTimer.has(node)) {
        clearTimeout(data.hoverTimer.get(node));
        data.hoverTimer.delete(node);
      }
    }
  };
  function CommonMactionMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        var actions = _this.constructor.actions;
        var action = _this.node.attributes.get("actiontype");
        var _a = __read(actions.get(action) || [function(_node, _data) {}, {}], 2), handler = _a[0], data = _a[1];
        _this.action = handler;
        _this.data = data;
        _this.getParameters();
        return _this;
      }
      Object.defineProperty(class_1.prototype, "selected", {
        get: function() {
          var selection = this.node.attributes.get("selection");
          var i = Math.max(1, Math.min(this.childNodes.length, selection)) - 1;
          return this.childNodes[i] || this.wrap(this.node.selected);
        },
        enumerable: false,
        configurable: true
      });
      class_1.prototype.getParameters = function() {
        var offsets = this.node.attributes.get("data-offsets");
        var _a = __read((0, string_js_1.split)(offsets || ""), 2), dx = _a[0], dy = _a[1];
        this.dx = this.length2em(dx || exports.TooltipData.dx);
        this.dy = this.length2em(dy || exports.TooltipData.dy);
      };
      class_1.prototype.computeBBox = function(bbox, recompute) {
        if (recompute === undefined) {
          recompute = false;
        }
        bbox.updateFrom(this.selected.getOuterBBox());
        this.selected.setChildPWidths(recompute);
      };
      return class_1;
    }(Base);
  }
  exports.CommonMactionMixin = CommonMactionMixin;
});

// node_modules/mathjax-full/js/output/common/Notation.js
var require_Notation = __commonJS(function(exports) {
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
  exports.CommonArrow = exports.CommonDiagonalArrow = exports.CommonDiagonalStrike = exports.CommonBorder2 = exports.CommonBorder = exports.arrowBBox = exports.diagonalArrowDef = exports.arrowDef = exports.arrowBBoxW = exports.arrowBBoxHD = exports.arrowHead = exports.fullBorder = exports.fullPadding = exports.fullBBox = exports.sideNames = exports.sideIndex = exports.SOLID = exports.PADDING = exports.THICKNESS = exports.ARROWY = exports.ARROWDX = exports.ARROWX = undefined;
  exports.ARROWX = 4, exports.ARROWDX = 1, exports.ARROWY = 2;
  exports.THICKNESS = 0.067;
  exports.PADDING = 0.2;
  exports.SOLID = exports.THICKNESS + "em solid";
  exports.sideIndex = { top: 0, right: 1, bottom: 2, left: 3 };
  exports.sideNames = Object.keys(exports.sideIndex);
  exports.fullBBox = function(node) {
    return new Array(4).fill(node.thickness + node.padding);
  };
  exports.fullPadding = function(node) {
    return new Array(4).fill(node.padding);
  };
  exports.fullBorder = function(node) {
    return new Array(4).fill(node.thickness);
  };
  var arrowHead = function(node) {
    return Math.max(node.padding, node.thickness * (node.arrowhead.x + node.arrowhead.dx + 1));
  };
  exports.arrowHead = arrowHead;
  var arrowBBoxHD = function(node, TRBL) {
    if (node.childNodes[0]) {
      var _a = node.childNodes[0].getBBox(), { h, d } = _a;
      TRBL[0] = TRBL[2] = Math.max(0, node.thickness * node.arrowhead.y - (h + d) / 2);
    }
    return TRBL;
  };
  exports.arrowBBoxHD = arrowBBoxHD;
  var arrowBBoxW = function(node, TRBL) {
    if (node.childNodes[0]) {
      var w = node.childNodes[0].getBBox().w;
      TRBL[1] = TRBL[3] = Math.max(0, node.thickness * node.arrowhead.y - w / 2);
    }
    return TRBL;
  };
  exports.arrowBBoxW = arrowBBoxW;
  exports.arrowDef = {
    up: [-Math.PI / 2, false, true, "verticalstrike"],
    down: [Math.PI / 2, false, true, "verticakstrike"],
    right: [0, false, false, "horizontalstrike"],
    left: [Math.PI, false, false, "horizontalstrike"],
    updown: [Math.PI / 2, true, true, "verticalstrike uparrow downarrow"],
    leftright: [0, true, false, "horizontalstrike leftarrow rightarrow"]
  };
  exports.diagonalArrowDef = {
    updiagonal: [-1, 0, false, "updiagonalstrike northeastarrow"],
    northeast: [-1, 0, false, "updiagonalstrike updiagonalarrow"],
    southeast: [1, 0, false, "downdiagonalstrike"],
    northwest: [1, Math.PI, false, "downdiagonalstrike"],
    southwest: [-1, Math.PI, false, "updiagonalstrike"],
    northeastsouthwest: [-1, 0, true, "updiagonalstrike northeastarrow updiagonalarrow southwestarrow"],
    northwestsoutheast: [1, 0, true, "downdiagonalstrike northwestarrow southeastarrow"]
  };
  exports.arrowBBox = {
    up: function(node) {
      return (0, exports.arrowBBoxW)(node, [(0, exports.arrowHead)(node), 0, node.padding, 0]);
    },
    down: function(node) {
      return (0, exports.arrowBBoxW)(node, [node.padding, 0, (0, exports.arrowHead)(node), 0]);
    },
    right: function(node) {
      return (0, exports.arrowBBoxHD)(node, [0, (0, exports.arrowHead)(node), 0, node.padding]);
    },
    left: function(node) {
      return (0, exports.arrowBBoxHD)(node, [0, node.padding, 0, (0, exports.arrowHead)(node)]);
    },
    updown: function(node) {
      return (0, exports.arrowBBoxW)(node, [(0, exports.arrowHead)(node), 0, (0, exports.arrowHead)(node), 0]);
    },
    leftright: function(node) {
      return (0, exports.arrowBBoxHD)(node, [0, (0, exports.arrowHead)(node), 0, (0, exports.arrowHead)(node)]);
    }
  };
  var CommonBorder = function(render) {
    return function(side) {
      var i = exports.sideIndex[side];
      return [side, {
        renderer: render,
        bbox: function(node) {
          var bbox = [0, 0, 0, 0];
          bbox[i] = node.thickness + node.padding;
          return bbox;
        },
        border: function(node) {
          var bbox = [0, 0, 0, 0];
          bbox[i] = node.thickness;
          return bbox;
        }
      }];
    };
  };
  exports.CommonBorder = CommonBorder;
  var CommonBorder2 = function(render) {
    return function(name, side1, side2) {
      var i1 = exports.sideIndex[side1];
      var i2 = exports.sideIndex[side2];
      return [name, {
        renderer: render,
        bbox: function(node) {
          var t = node.thickness + node.padding;
          var bbox = [0, 0, 0, 0];
          bbox[i1] = bbox[i2] = t;
          return bbox;
        },
        border: function(node) {
          var bbox = [0, 0, 0, 0];
          bbox[i1] = bbox[i2] = node.thickness;
          return bbox;
        },
        remove: side1 + " " + side2
      }];
    };
  };
  exports.CommonBorder2 = CommonBorder2;
  var CommonDiagonalStrike = function(render) {
    return function(name) {
      var cname = "mjx-" + name.charAt(0) + "strike";
      return [name + "diagonalstrike", {
        renderer: render(cname),
        bbox: exports.fullBBox
      }];
    };
  };
  exports.CommonDiagonalStrike = CommonDiagonalStrike;
  var CommonDiagonalArrow = function(render) {
    return function(name) {
      var _a = __read(exports.diagonalArrowDef[name], 4), c = _a[0], pi = _a[1], double = _a[2], remove = _a[3];
      return [name + "arrow", {
        renderer: function(node, _child) {
          var _a = __read(node.arrowAW(), 2), a = _a[0], W = _a[1];
          var arrow = node.arrow(W, c * (a - pi), double);
          render(node, arrow);
        },
        bbox: function(node) {
          var _a = node.arrowData(), { a, x, y } = _a;
          var _b = __read([node.arrowhead.x, node.arrowhead.y, node.arrowhead.dx], 3), ax = _b[0], ay = _b[1], adx = _b[2];
          var _c = __read(node.getArgMod(ax + adx, ay), 2), b = _c[0], ar = _c[1];
          var dy = y + (b > a ? node.thickness * ar * Math.sin(b - a) : 0);
          var dx = x + (b > Math.PI / 2 - a ? node.thickness * ar * Math.sin(b + a - Math.PI / 2) : 0);
          return [dy, dx, dy, dx];
        },
        remove
      }];
    };
  };
  exports.CommonDiagonalArrow = CommonDiagonalArrow;
  var CommonArrow = function(render) {
    return function(name) {
      var _a = __read(exports.arrowDef[name], 4), angle = _a[0], double = _a[1], isVertical = _a[2], remove = _a[3];
      return [name + "arrow", {
        renderer: function(node, _child) {
          var _a = node.getBBox(), { w, h, d } = _a;
          var _b = __read(isVertical ? [h + d, "X"] : [w, "Y"], 2), W = _b[0], offset = _b[1];
          var dd = node.getOffset(offset);
          var arrow = node.arrow(W, angle, double, offset, dd);
          render(node, arrow);
        },
        bbox: exports.arrowBBox[name],
        remove
      }];
    };
  };
  exports.CommonArrow = CommonArrow;
});

// node_modules/mathjax-full/js/output/common/Wrappers/menclose.js
var require_menclose3 = __commonJS(function(exports) {
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
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
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
  exports.CommonMencloseMixin = undefined;
  var Notation = __importStar(require_Notation());
  var string_js_1 = require_string();
  function CommonMencloseMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        _this.notations = {};
        _this.renderChild = null;
        _this.msqrt = null;
        _this.padding = Notation.PADDING;
        _this.thickness = Notation.THICKNESS;
        _this.arrowhead = { x: Notation.ARROWX, y: Notation.ARROWY, dx: Notation.ARROWDX };
        _this.TRBL = [0, 0, 0, 0];
        _this.getParameters();
        _this.getNotations();
        _this.removeRedundantNotations();
        _this.initializeNotations();
        _this.TRBL = _this.getBBoxExtenders();
        return _this;
      }
      class_1.prototype.getParameters = function() {
        var attributes = this.node.attributes;
        var padding = attributes.get("data-padding");
        if (padding !== undefined) {
          this.padding = this.length2em(padding, Notation.PADDING);
        }
        var thickness = attributes.get("data-thickness");
        if (thickness !== undefined) {
          this.thickness = this.length2em(thickness, Notation.THICKNESS);
        }
        var arrowhead = attributes.get("data-arrowhead");
        if (arrowhead !== undefined) {
          var _b = __read((0, string_js_1.split)(arrowhead), 3), x = _b[0], y = _b[1], dx = _b[2];
          this.arrowhead = {
            x: x ? parseFloat(x) : Notation.ARROWX,
            y: y ? parseFloat(y) : Notation.ARROWY,
            dx: dx ? parseFloat(dx) : Notation.ARROWDX
          };
        }
      };
      class_1.prototype.getNotations = function() {
        var e_1, _b;
        var Notations = this.constructor.notations;
        try {
          for (var _c = __values((0, string_js_1.split)(this.node.attributes.get("notation"))), _d = _c.next();!_d.done; _d = _c.next()) {
            var name_1 = _d.value;
            var notation = Notations.get(name_1);
            if (notation) {
              this.notations[name_1] = notation;
              if (notation.renderChild) {
                this.renderChild = notation.renderer;
              }
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_d && !_d.done && (_b = _c.return))
              _b.call(_c);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      };
      class_1.prototype.removeRedundantNotations = function() {
        var e_2, _b, e_3, _c;
        try {
          for (var _d = __values(Object.keys(this.notations)), _e = _d.next();!_e.done; _e = _d.next()) {
            var name_2 = _e.value;
            if (this.notations[name_2]) {
              var remove = this.notations[name_2].remove || "";
              try {
                for (var _f = (e_3 = undefined, __values(remove.split(/ /))), _g = _f.next();!_g.done; _g = _f.next()) {
                  var notation = _g.value;
                  delete this.notations[notation];
                }
              } catch (e_3_1) {
                e_3 = { error: e_3_1 };
              } finally {
                try {
                  if (_g && !_g.done && (_c = _f.return))
                    _c.call(_f);
                } finally {
                  if (e_3)
                    throw e_3.error;
                }
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_e && !_e.done && (_b = _d.return))
              _b.call(_d);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      };
      class_1.prototype.initializeNotations = function() {
        var e_4, _b;
        try {
          for (var _c = __values(Object.keys(this.notations)), _d = _c.next();!_d.done; _d = _c.next()) {
            var name_3 = _d.value;
            var init = this.notations[name_3].init;
            init && init(this);
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (_d && !_d.done && (_b = _c.return))
              _b.call(_c);
          } finally {
            if (e_4)
              throw e_4.error;
          }
        }
      };
      class_1.prototype.computeBBox = function(bbox, recompute) {
        if (recompute === undefined) {
          recompute = false;
        }
        var _b = __read(this.TRBL, 4), T = _b[0], R = _b[1], B = _b[2], L = _b[3];
        var child = this.childNodes[0].getBBox();
        bbox.combine(child, L, 0);
        bbox.h += T;
        bbox.d += B;
        bbox.w += R;
        this.setChildPWidths(recompute);
      };
      class_1.prototype.getBBoxExtenders = function() {
        var e_5, _b;
        var TRBL = [0, 0, 0, 0];
        try {
          for (var _c = __values(Object.keys(this.notations)), _d = _c.next();!_d.done; _d = _c.next()) {
            var name_4 = _d.value;
            this.maximizeEntries(TRBL, this.notations[name_4].bbox(this));
          }
        } catch (e_5_1) {
          e_5 = { error: e_5_1 };
        } finally {
          try {
            if (_d && !_d.done && (_b = _c.return))
              _b.call(_c);
          } finally {
            if (e_5)
              throw e_5.error;
          }
        }
        return TRBL;
      };
      class_1.prototype.getPadding = function() {
        var e_6, _b;
        var _this = this;
        var BTRBL = [0, 0, 0, 0];
        try {
          for (var _c = __values(Object.keys(this.notations)), _d = _c.next();!_d.done; _d = _c.next()) {
            var name_5 = _d.value;
            var border = this.notations[name_5].border;
            if (border) {
              this.maximizeEntries(BTRBL, border(this));
            }
          }
        } catch (e_6_1) {
          e_6 = { error: e_6_1 };
        } finally {
          try {
            if (_d && !_d.done && (_b = _c.return))
              _b.call(_c);
          } finally {
            if (e_6)
              throw e_6.error;
          }
        }
        return [0, 1, 2, 3].map(function(i) {
          return _this.TRBL[i] - BTRBL[i];
        });
      };
      class_1.prototype.maximizeEntries = function(X, Y) {
        for (var i = 0;i < X.length; i++) {
          if (X[i] < Y[i]) {
            X[i] = Y[i];
          }
        }
      };
      class_1.prototype.getOffset = function(direction) {
        var _b = __read(this.TRBL, 4), T = _b[0], R = _b[1], B = _b[2], L = _b[3];
        var d = (direction === "X" ? R - L : B - T) / 2;
        return Math.abs(d) > 0.001 ? d : 0;
      };
      class_1.prototype.getArgMod = function(w, h) {
        return [Math.atan2(h, w), Math.sqrt(w * w + h * h)];
      };
      class_1.prototype.arrow = function(_w, _a, _double, _offset, _dist) {
        if (_offset === undefined) {
          _offset = "";
        }
        if (_dist === undefined) {
          _dist = 0;
        }
        return null;
      };
      class_1.prototype.arrowData = function() {
        var _b = __read([this.padding, this.thickness], 2), p = _b[0], t = _b[1];
        var r = t * (this.arrowhead.x + Math.max(1, this.arrowhead.dx));
        var _c = this.childNodes[0].getBBox(), { h, d, w } = _c;
        var H = h + d;
        var R = Math.sqrt(H * H + w * w);
        var x = Math.max(p, r * w / R);
        var y = Math.max(p, r * H / R);
        var _d = __read(this.getArgMod(w + 2 * x, H + 2 * y), 2), a = _d[0], W = _d[1];
        return { a, W, x, y };
      };
      class_1.prototype.arrowAW = function() {
        var _b = this.childNodes[0].getBBox(), { h, d, w } = _b;
        var _c = __read(this.TRBL, 4), T = _c[0], R = _c[1], B = _c[2], L = _c[3];
        return this.getArgMod(L + w + R, T + h + d + B);
      };
      class_1.prototype.createMsqrt = function(child) {
        var mmlFactory = this.node.factory;
        var mml = mmlFactory.create("msqrt");
        mml.inheritAttributesFrom(this.node);
        mml.childNodes[0] = child.node;
        var node = this.wrap(mml);
        node.parent = this;
        return node;
      };
      class_1.prototype.sqrtTRBL = function() {
        var bbox = this.msqrt.getBBox();
        var cbox = this.msqrt.childNodes[0].getBBox();
        return [bbox.h - cbox.h, 0, bbox.d - cbox.d, bbox.w - cbox.w];
      };
      return class_1;
    }(Base);
  }
  exports.CommonMencloseMixin = CommonMencloseMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/semantics.js
var require_semantics3 = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CommonSemanticsMixin = undefined;
  function CommonSemanticsMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      class_1.prototype.computeBBox = function(bbox, _recompute) {
        if (_recompute === undefined) {
          _recompute = false;
        }
        if (this.childNodes.length) {
          var _a = this.childNodes[0].getBBox(), { w, h, d } = _a;
          bbox.w = w;
          bbox.h = h;
          bbox.d = d;
        }
      };
      return class_1;
    }(Base);
  }
  exports.CommonSemanticsMixin = CommonSemanticsMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/mglyph.js
var require_mglyph3 = __commonJS(function(exports) {
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
  exports.CommonMglyphMixin = undefined;
  function CommonMglyphMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        _this.getParameters();
        return _this;
      }
      class_1.prototype.getParameters = function() {
        var _a = this.node.attributes.getList("width", "height", "valign", "src", "index"), { width, height, valign, src, index } = _a;
        if (src) {
          this.width = width === "auto" ? 1 : this.length2em(width);
          this.height = height === "auto" ? 1 : this.length2em(height);
          this.valign = this.length2em(valign || "0");
        } else {
          var text = String.fromCodePoint(parseInt(index));
          var mmlFactory = this.node.factory;
          this.charWrapper = this.wrap(mmlFactory.create("text").setText(text));
          this.charWrapper.parent = this;
        }
      };
      class_1.prototype.computeBBox = function(bbox, _recompute) {
        if (_recompute === undefined) {
          _recompute = false;
        }
        if (this.charWrapper) {
          bbox.updateFrom(this.charWrapper.getBBox());
        } else {
          bbox.w = this.width;
          bbox.h = this.height + this.valign;
          bbox.d = -this.valign;
        }
      };
      return class_1;
    }(Base);
  }
  exports.CommonMglyphMixin = CommonMglyphMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/TeXAtom.js
var require_TeXAtom3 = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CommonTeXAtomMixin = undefined;
  var MmlNode_js_1 = require_MmlNode();
  function CommonTeXAtomMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      class_1.prototype.computeBBox = function(bbox, recompute) {
        if (recompute === undefined) {
          recompute = false;
        }
        _super.prototype.computeBBox.call(this, bbox, recompute);
        if (this.childNodes[0] && this.childNodes[0].bbox.ic) {
          bbox.ic = this.childNodes[0].bbox.ic;
        }
        if (this.node.texClass === MmlNode_js_1.TEXCLASS.VCENTER) {
          var { h, d } = bbox;
          var a = this.font.params.axis_height;
          var dh = (h + d) / 2 + a - h;
          bbox.h += dh;
          bbox.d -= dh;
        }
      };
      return class_1;
    }(Base);
  }
  exports.CommonTeXAtomMixin = CommonTeXAtomMixin;
});

// node_modules/mathjax-full/js/output/common/Wrappers/TextNode.js
var require_TextNode2 = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CommonTextNodeMixin = undefined;
  function CommonTextNodeMixin(Base) {
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      class_1.prototype.computeBBox = function(bbox, _recompute) {
        var e_1, _a;
        if (_recompute === undefined) {
          _recompute = false;
        }
        var variant = this.parent.variant;
        var text = this.node.getText();
        if (variant === "-explicitFont") {
          var font = this.jax.getFontData(this.parent.styles);
          var _b = this.jax.measureText(text, variant, font), { w, h, d } = _b;
          bbox.h = h;
          bbox.d = d;
          bbox.w = w;
        } else {
          var chars = this.remappedText(text, variant);
          bbox.empty();
          try {
            for (var chars_1 = __values(chars), chars_1_1 = chars_1.next();!chars_1_1.done; chars_1_1 = chars_1.next()) {
              var char = chars_1_1.value;
              var _c = __read(this.getVariantChar(variant, char), 4), h = _c[0], d = _c[1], w = _c[2], data = _c[3];
              if (data.unknown) {
                var cbox = this.jax.measureText(String.fromCodePoint(char), variant);
                w = cbox.w;
                h = cbox.h;
                d = cbox.d;
              }
              bbox.w += w;
              if (h > bbox.h)
                bbox.h = h;
              if (d > bbox.d)
                bbox.d = d;
              bbox.ic = data.ic || 0;
              bbox.sk = data.sk || 0;
              bbox.dx = data.dx || 0;
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (chars_1_1 && !chars_1_1.done && (_a = chars_1.return))
                _a.call(chars_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          if (chars.length > 1) {
            bbox.sk = 0;
          }
          bbox.clean();
        }
      };
      class_1.prototype.remappedText = function(text, variant) {
        var c = this.parent.stretch.c;
        return c ? [c] : this.parent.remapChars(this.unicodeChars(text, variant));
      };
      class_1.prototype.getStyles = function() {};
      class_1.prototype.getVariant = function() {};
      class_1.prototype.getScale = function() {};
      class_1.prototype.getSpace = function() {};
      return class_1;
    }(Base);
  }
  exports.CommonTextNodeMixin = CommonTextNodeMixin;
});

export { require_BBox, require_math3, require_mrow3, require_mi3, require_mo3, require_mn3, require_ms3, require_mtext3, require_mspace3, require_mpadded3, require_mfrac3, require_msqrt3, require_mroot3, require_mfenced3, require_scriptbase2, require_msubsup3, require_munderover3, require_mmultiscripts3, require_mtable3, require_mtr3, require_mtd3, require_maction3, require_Notation, require_menclose3, require_semantics3, require_mglyph3, require_TeXAtom3, require_TextNode2 };
