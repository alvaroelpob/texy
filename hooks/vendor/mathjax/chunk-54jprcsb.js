import {
  normal_paths_0_default,
  init_normal_paths_0
} from "./chunk-6ejvwhsm.js";
import {
  normal_paths_1_default,
  init_normal_paths_1
} from "./chunk-wrpwjvqs.js";
import {
  normal_paths_2_default,
  init_normal_paths_2
} from "./chunk-ze334p2b.js";
import {
  normal_paths_3_default,
  init_normal_paths_3
} from "./chunk-tdja41d5.js";
import {
  require_Styles,
  require_OutputJax
} from "./chunk-yt2s72p0.js";
import {
  require_tex_size4
} from "./chunk-jch4vz9w.js";
import {
  require_tex_variant
} from "./chunk-k9bkxjdy.js";
import {
  require_math2,
  require_mrow2,
  require_mi2,
  require_mn2,
  require_ms2,
  require_mtext2,
  require_merror2,
  require_mspace2,
  require_mpadded2,
  require_mphantom2,
  require_mfrac2,
  require_msqrt2,
  require_mroot2,
  require_mfenced2,
  require_msubsup2,
  require_munderover2,
  require_mmultiscripts2,
  require_mtable2,
  require_mtr2,
  require_mtd2,
  require_maction2,
  require_menclose2,
  require_semantics2,
  require_mglyph2,
  require_TeXAtom2
} from "./chunk-pkm31py2.js";
import {
  require_Factory
} from "./chunk-42maettq.js";
import {
  require_mo2
} from "./chunk-yg1bmc94.js";
import {
  require_script
} from "./chunk-xdvjzdrr.js";
import {
  require_smallop
} from "./chunk-f231czd0.js";
import {
  require_tex_calligraphic_bold
} from "./chunk-5vzr26km.js";
import {
  require_tex_calligraphic
} from "./chunk-3cxg54kj.js";
import {
  require_tex_mathit
} from "./chunk-4a4sp3rj.js";
import {
  require_tex_oldstyle_bold
} from "./chunk-v7afeqsv.js";
import {
  require_tex_oldstyle
} from "./chunk-pnpbe3ec.js";
import {
  require_tex_size3
} from "./chunk-75tvjqch.js";
import {
  require_italic
} from "./chunk-w2n1c362.js";
import {
  require_largeop
} from "./chunk-m57s35er.js";
import {
  require_monospace
} from "./chunk-eg76pbye.js";
import {
  require_sans_serif_bold_italic
} from "./chunk-hr2f0gtn.js";
import {
  require_sans_serif_bold
} from "./chunk-zwsbr17j.js";
import {
  require_sans_serif_italic
} from "./chunk-aw49cdtq.js";
import {
  require_sans_serif
} from "./chunk-1eg1xvnz.js";
import {
  require_script_bold
} from "./chunk-drfbjtev.js";
import {
  require_normal
} from "./chunk-7x8bgqvf.js";
import {
  require_BBox,
  require_math3,
  require_mrow3,
  require_mi3,
  require_mo3,
  require_mn3,
  require_ms3,
  require_mtext3,
  require_mspace3,
  require_mpadded3,
  require_mfrac3,
  require_msqrt3,
  require_mroot3,
  require_mfenced3,
  require_scriptbase2,
  require_msubsup3,
  require_munderover3,
  require_mmultiscripts3,
  require_mtable3,
  require_mtr3,
  require_mtd3,
  require_maction3,
  require_Notation,
  require_menclose3,
  require_semantics3,
  require_mglyph3,
  require_TeXAtom3,
  require_TextNode2
} from "./chunk-25nkn707.js";
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
  require_bold_italic
} from "./chunk-drsqwmv4.js";
import {
  require_bold
} from "./chunk-y8nw0b3h.js";
import {
  require_double_struck
} from "./chunk-72m3enfv.js";
import {
  require_fraktur_bold
} from "./chunk-d7zfgqbg.js";
import {
  require_fraktur
} from "./chunk-fefbm4a4.js";
import {
  require_FontData
} from "./chunk-9nnr50t1.js";
import {
  require_FontData2
} from "./chunk-hnvybw5c.js";
import {
  __toESM,
  __toCommonJS,
  __commonJS,
  __export,
  __esm
} from "./chunk-cdjrrdrs.js";

// node_modules/mathjax-full/js/core/Tree/Wrapper.js
var require_Wrapper = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AbstractWrapper = undefined;
  var AbstractWrapper = function() {
    function AbstractWrapper(factory, node) {
      this.factory = factory;
      this.node = node;
    }
    Object.defineProperty(AbstractWrapper.prototype, "kind", {
      get: function() {
        return this.node.kind;
      },
      enumerable: false,
      configurable: true
    });
    AbstractWrapper.prototype.wrap = function(node) {
      return this.factory.wrap(node);
    };
    return AbstractWrapper;
  }();
  exports.AbstractWrapper = AbstractWrapper;
});

// node_modules/mathjax-full/js/output/common/Wrapper.js
var require_Wrapper2 = __commonJS(function(exports) {
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
  exports.CommonWrapper = undefined;
  var Wrapper_js_1 = require_Wrapper();
  var MmlNode_js_1 = require_MmlNode();
  var string_js_1 = require_string();
  var LENGTHS = __importStar(require_lengths());
  var Styles_js_1 = require_Styles();
  var BBox_js_1 = require_BBox();
  var FontData_js_1 = require_FontData2();
  var SMALLSIZE = 2 / 18;
  function MathMLSpace(script, size) {
    return script ? size < SMALLSIZE ? 0 : SMALLSIZE : size;
  }
  var CommonWrapper = function(_super) {
    __extends(CommonWrapper, _super);
    function CommonWrapper(factory, node, parent) {
      if (parent === undefined) {
        parent = null;
      }
      var _this = _super.call(this, factory, node) || this;
      _this.parent = null;
      _this.removedStyles = null;
      _this.styles = null;
      _this.variant = "";
      _this.bboxComputed = false;
      _this.stretch = FontData_js_1.NOSTRETCH;
      _this.font = null;
      _this.parent = parent;
      _this.font = factory.jax.font;
      _this.bbox = BBox_js_1.BBox.zero();
      _this.getStyles();
      _this.getVariant();
      _this.getScale();
      _this.getSpace();
      _this.childNodes = node.childNodes.map(function(child) {
        var wrapped = _this.wrap(child);
        if (wrapped.bbox.pwidth && (node.notParent || node.isKind("math"))) {
          _this.bbox.pwidth = BBox_js_1.BBox.fullWidth;
        }
        return wrapped;
      });
      return _this;
    }
    Object.defineProperty(CommonWrapper.prototype, "jax", {
      get: function() {
        return this.factory.jax;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(CommonWrapper.prototype, "adaptor", {
      get: function() {
        return this.factory.jax.adaptor;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(CommonWrapper.prototype, "metrics", {
      get: function() {
        return this.factory.jax.math.metrics;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(CommonWrapper.prototype, "fixesPWidth", {
      get: function() {
        return !this.node.notParent && !this.node.isToken;
      },
      enumerable: false,
      configurable: true
    });
    CommonWrapper.prototype.wrap = function(node, parent) {
      if (parent === undefined) {
        parent = null;
      }
      var wrapped = this.factory.wrap(node, parent || this);
      if (parent) {
        parent.childNodes.push(wrapped);
      }
      this.jax.nodeMap.set(node, wrapped);
      return wrapped;
    };
    CommonWrapper.prototype.getBBox = function(save) {
      if (save === undefined) {
        save = true;
      }
      if (this.bboxComputed) {
        return this.bbox;
      }
      var bbox = save ? this.bbox : BBox_js_1.BBox.zero();
      this.computeBBox(bbox);
      this.bboxComputed = save;
      return bbox;
    };
    CommonWrapper.prototype.getOuterBBox = function(save) {
      var e_1, _a;
      if (save === undefined) {
        save = true;
      }
      var bbox = this.getBBox(save);
      if (!this.styles)
        return bbox;
      var obox = new BBox_js_1.BBox;
      Object.assign(obox, bbox);
      try {
        for (var _b = __values(BBox_js_1.BBox.StyleAdjust), _c = _b.next();!_c.done; _c = _b.next()) {
          var _d = __read(_c.value, 2), name_1 = _d[0], side = _d[1];
          var x = this.styles.get(name_1);
          if (x) {
            obox[side] += this.length2em(x, 1, obox.rscale);
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
      return obox;
    };
    CommonWrapper.prototype.computeBBox = function(bbox, recompute) {
      var e_2, _a;
      if (recompute === undefined) {
        recompute = false;
      }
      bbox.empty();
      try {
        for (var _b = __values(this.childNodes), _c = _b.next();!_c.done; _c = _b.next()) {
          var child = _c.value;
          bbox.append(child.getOuterBBox());
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
      bbox.clean();
      if (this.fixesPWidth && this.setChildPWidths(recompute)) {
        this.computeBBox(bbox, true);
      }
    };
    CommonWrapper.prototype.setChildPWidths = function(recompute, w, clear) {
      var e_3, _a;
      if (w === undefined) {
        w = null;
      }
      if (clear === undefined) {
        clear = true;
      }
      if (recompute) {
        return false;
      }
      if (clear) {
        this.bbox.pwidth = "";
      }
      var changed = false;
      try {
        for (var _b = __values(this.childNodes), _c = _b.next();!_c.done; _c = _b.next()) {
          var child = _c.value;
          var cbox = child.getOuterBBox();
          if (cbox.pwidth && child.setChildPWidths(recompute, w === null ? cbox.w : w, clear)) {
            changed = true;
          }
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
      return changed;
    };
    CommonWrapper.prototype.invalidateBBox = function() {
      if (this.bboxComputed) {
        this.bboxComputed = false;
        if (this.parent) {
          this.parent.invalidateBBox();
        }
      }
    };
    CommonWrapper.prototype.copySkewIC = function(bbox) {
      var first = this.childNodes[0];
      if (first === null || first === undefined ? undefined : first.bbox.sk) {
        bbox.sk = first.bbox.sk;
      }
      if (first === null || first === undefined ? undefined : first.bbox.dx) {
        bbox.dx = first.bbox.dx;
      }
      var last = this.childNodes[this.childNodes.length - 1];
      if (last === null || last === undefined ? undefined : last.bbox.ic) {
        bbox.ic = last.bbox.ic;
        bbox.w += bbox.ic;
      }
    };
    CommonWrapper.prototype.getStyles = function() {
      var styleString = this.node.attributes.getExplicit("style");
      if (!styleString)
        return;
      var style = this.styles = new Styles_js_1.Styles(styleString);
      for (var i = 0, m = CommonWrapper.removeStyles.length;i < m; i++) {
        var id = CommonWrapper.removeStyles[i];
        if (style.get(id)) {
          if (!this.removedStyles)
            this.removedStyles = {};
          this.removedStyles[id] = style.get(id);
          style.set(id, "");
        }
      }
    };
    CommonWrapper.prototype.getVariant = function() {
      if (!this.node.isToken)
        return;
      var attributes = this.node.attributes;
      var variant = attributes.get("mathvariant");
      if (!attributes.getExplicit("mathvariant")) {
        var values = attributes.getList("fontfamily", "fontweight", "fontstyle");
        if (this.removedStyles) {
          var style = this.removedStyles;
          if (style.fontFamily)
            values.family = style.fontFamily;
          if (style.fontWeight)
            values.weight = style.fontWeight;
          if (style.fontStyle)
            values.style = style.fontStyle;
        }
        if (values.fontfamily)
          values.family = values.fontfamily;
        if (values.fontweight)
          values.weight = values.fontweight;
        if (values.fontstyle)
          values.style = values.fontstyle;
        if (values.weight && values.weight.match(/^\d+$/)) {
          values.weight = parseInt(values.weight) > 600 ? "bold" : "normal";
        }
        if (values.family) {
          variant = this.explicitVariant(values.family, values.weight, values.style);
        } else {
          if (this.node.getProperty("variantForm"))
            variant = "-tex-variant";
          variant = (CommonWrapper.BOLDVARIANTS[values.weight] || {})[variant] || variant;
          variant = (CommonWrapper.ITALICVARIANTS[values.style] || {})[variant] || variant;
        }
      }
      this.variant = variant;
    };
    CommonWrapper.prototype.explicitVariant = function(fontFamily, fontWeight, fontStyle) {
      var style = this.styles;
      if (!style)
        style = this.styles = new Styles_js_1.Styles;
      style.set("fontFamily", fontFamily);
      if (fontWeight)
        style.set("fontWeight", fontWeight);
      if (fontStyle)
        style.set("fontStyle", fontStyle);
      return "-explicitFont";
    };
    CommonWrapper.prototype.getScale = function() {
      var scale = 1, parent = this.parent;
      var pscale = parent ? parent.bbox.scale : 1;
      var attributes = this.node.attributes;
      var scriptlevel = Math.min(attributes.get("scriptlevel"), 2);
      var fontsize = attributes.get("fontsize");
      var mathsize = this.node.isToken || this.node.isKind("mstyle") ? attributes.get("mathsize") : attributes.getInherited("mathsize");
      if (scriptlevel !== 0) {
        scale = Math.pow(attributes.get("scriptsizemultiplier"), scriptlevel);
        var scriptminsize = this.length2em(attributes.get("scriptminsize"), 0.8, 1);
        if (scale < scriptminsize)
          scale = scriptminsize;
      }
      if (this.removedStyles && this.removedStyles.fontSize && !fontsize) {
        fontsize = this.removedStyles.fontSize;
      }
      if (fontsize && !attributes.getExplicit("mathsize")) {
        mathsize = fontsize;
      }
      if (mathsize !== "1") {
        scale *= this.length2em(mathsize, 1, 1);
      }
      this.bbox.scale = scale;
      this.bbox.rscale = scale / pscale;
    };
    CommonWrapper.prototype.getSpace = function() {
      var isTop = this.isTopEmbellished();
      var hasSpacing = this.node.hasSpacingAttributes();
      if (this.jax.options.mathmlSpacing || hasSpacing) {
        isTop && this.getMathMLSpacing();
      } else {
        this.getTeXSpacing(isTop, hasSpacing);
      }
    };
    CommonWrapper.prototype.getMathMLSpacing = function() {
      var node = this.node.coreMO();
      var child = node.coreParent();
      var parent = child.parent;
      if (!parent || !parent.isKind("mrow") || parent.childNodes.length === 1)
        return;
      var attributes = node.attributes;
      var isScript = attributes.get("scriptlevel") > 0;
      this.bbox.L = attributes.isSet("lspace") ? Math.max(0, this.length2em(attributes.get("lspace"))) : MathMLSpace(isScript, node.lspace);
      this.bbox.R = attributes.isSet("rspace") ? Math.max(0, this.length2em(attributes.get("rspace"))) : MathMLSpace(isScript, node.rspace);
      var n = parent.childIndex(child);
      if (n === 0)
        return;
      var prev = parent.childNodes[n - 1];
      if (!prev.isEmbellished)
        return;
      var bbox = this.jax.nodeMap.get(prev).getBBox();
      if (bbox.R) {
        this.bbox.L = Math.max(0, this.bbox.L - bbox.R);
      }
    };
    CommonWrapper.prototype.getTeXSpacing = function(isTop, hasSpacing) {
      if (!hasSpacing) {
        var space = this.node.texSpacing();
        if (space) {
          this.bbox.L = this.length2em(space);
        }
      }
      if (isTop || hasSpacing) {
        var attributes = this.node.coreMO().attributes;
        if (attributes.isSet("lspace")) {
          this.bbox.L = Math.max(0, this.length2em(attributes.get("lspace")));
        }
        if (attributes.isSet("rspace")) {
          this.bbox.R = Math.max(0, this.length2em(attributes.get("rspace")));
        }
      }
    };
    CommonWrapper.prototype.isTopEmbellished = function() {
      return this.node.isEmbellished && !(this.node.parent && this.node.parent.isEmbellished);
    };
    CommonWrapper.prototype.core = function() {
      return this.jax.nodeMap.get(this.node.core());
    };
    CommonWrapper.prototype.coreMO = function() {
      return this.jax.nodeMap.get(this.node.coreMO());
    };
    CommonWrapper.prototype.getText = function() {
      var e_4, _a;
      var text = "";
      if (this.node.isToken) {
        try {
          for (var _b = __values(this.node.childNodes), _c = _b.next();!_c.done; _c = _b.next()) {
            var child = _c.value;
            if (child instanceof MmlNode_js_1.TextNode) {
              text += child.getText();
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
      }
      return text;
    };
    CommonWrapper.prototype.canStretch = function(direction) {
      this.stretch = FontData_js_1.NOSTRETCH;
      if (this.node.isEmbellished) {
        var core = this.core();
        if (core && core.node !== this.node) {
          if (core.canStretch(direction)) {
            this.stretch = core.stretch;
          }
        }
      }
      return this.stretch.dir !== 0;
    };
    CommonWrapper.prototype.getAlignShift = function() {
      var _a;
      var _b = (_a = this.node.attributes).getList.apply(_a, __spreadArray([], __read(MmlNode_js_1.indentAttributes), false)), { indentalign, indentshift, indentalignfirst, indentshiftfirst } = _b;
      if (indentalignfirst !== "indentalign") {
        indentalign = indentalignfirst;
      }
      if (indentalign === "auto") {
        indentalign = this.jax.options.displayAlign;
      }
      if (indentshiftfirst !== "indentshift") {
        indentshift = indentshiftfirst;
      }
      if (indentshift === "auto") {
        indentshift = this.jax.options.displayIndent;
        if (indentalign === "right" && !indentshift.match(/^\s*0[a-z]*\s*$/)) {
          indentshift = ("-" + indentshift.trim()).replace(/^--/, "");
        }
      }
      var shift = this.length2em(indentshift, this.metrics.containerWidth);
      return [indentalign, shift];
    };
    CommonWrapper.prototype.getAlignX = function(W, bbox, align) {
      return align === "right" ? W - (bbox.w + bbox.R) * bbox.rscale : align === "left" ? bbox.L * bbox.rscale : (W - bbox.w * bbox.rscale) / 2;
    };
    CommonWrapper.prototype.getAlignY = function(H, D, h, d, align) {
      return align === "top" ? H - h : align === "bottom" ? d - D : align === "center" ? (H - h - (D - d)) / 2 : 0;
    };
    CommonWrapper.prototype.getWrapWidth = function(i) {
      return this.childNodes[i].getBBox().w;
    };
    CommonWrapper.prototype.getChildAlign = function(_i) {
      return "left";
    };
    CommonWrapper.prototype.percent = function(m) {
      return LENGTHS.percent(m);
    };
    CommonWrapper.prototype.em = function(m) {
      return LENGTHS.em(m);
    };
    CommonWrapper.prototype.px = function(m, M) {
      if (M === undefined) {
        M = -LENGTHS.BIGDIMEN;
      }
      return LENGTHS.px(m, M, this.metrics.em);
    };
    CommonWrapper.prototype.length2em = function(length, size, scale) {
      if (size === undefined) {
        size = 1;
      }
      if (scale === undefined) {
        scale = null;
      }
      if (scale === null) {
        scale = this.bbox.scale;
      }
      return LENGTHS.length2em(length, size, scale, this.jax.pxPerEm);
    };
    CommonWrapper.prototype.unicodeChars = function(text, name) {
      if (name === undefined) {
        name = this.variant;
      }
      var chars = (0, string_js_1.unicodeChars)(text);
      var variant = this.font.getVariant(name);
      if (variant && variant.chars) {
        var map_1 = variant.chars;
        chars = chars.map(function(n) {
          return ((map_1[n] || [])[3] || {}).smp || n;
        });
      }
      return chars;
    };
    CommonWrapper.prototype.remapChars = function(chars) {
      return chars;
    };
    CommonWrapper.prototype.mmlText = function(text) {
      return this.node.factory.create("text").setText(text);
    };
    CommonWrapper.prototype.mmlNode = function(kind, properties, children) {
      if (properties === undefined) {
        properties = {};
      }
      if (children === undefined) {
        children = [];
      }
      return this.node.factory.create(kind, properties, children);
    };
    CommonWrapper.prototype.createMo = function(text) {
      var mmlFactory = this.node.factory;
      var textNode = mmlFactory.create("text").setText(text);
      var mml = mmlFactory.create("mo", { stretchy: true }, [textNode]);
      mml.inheritAttributesFrom(this.node);
      var node = this.wrap(mml);
      node.parent = this;
      return node;
    };
    CommonWrapper.prototype.getVariantChar = function(variant, n) {
      var char = this.font.getChar(variant, n) || [0, 0, 0, { unknown: true }];
      if (char.length === 3) {
        char[3] = {};
      }
      return char;
    };
    CommonWrapper.kind = "unknown";
    CommonWrapper.styles = {};
    CommonWrapper.removeStyles = [
      "fontSize",
      "fontFamily",
      "fontWeight",
      "fontStyle",
      "fontVariant",
      "font"
    ];
    CommonWrapper.skipAttributes = {
      fontfamily: true,
      fontsize: true,
      fontweight: true,
      fontstyle: true,
      color: true,
      background: true,
      class: true,
      href: true,
      style: true,
      xmlns: true
    };
    CommonWrapper.BOLDVARIANTS = {
      bold: {
        normal: "bold",
        italic: "bold-italic",
        fraktur: "bold-fraktur",
        script: "bold-script",
        "sans-serif": "bold-sans-serif",
        "sans-serif-italic": "sans-serif-bold-italic"
      },
      normal: {
        bold: "normal",
        "bold-italic": "italic",
        "bold-fraktur": "fraktur",
        "bold-script": "script",
        "bold-sans-serif": "sans-serif",
        "sans-serif-bold-italic": "sans-serif-italic"
      }
    };
    CommonWrapper.ITALICVARIANTS = {
      italic: {
        normal: "italic",
        bold: "bold-italic",
        "sans-serif": "sans-serif-italic",
        "bold-sans-serif": "sans-serif-bold-italic"
      },
      normal: {
        italic: "normal",
        "bold-italic": "bold",
        "sans-serif-italic": "sans-serif",
        "sans-serif-bold-italic": "bold-sans-serif"
      }
    };
    return CommonWrapper;
  }(Wrapper_js_1.AbstractWrapper);
  exports.CommonWrapper = CommonWrapper;
});

// node_modules/mathjax-full/js/core/Tree/WrapperFactory.js
var require_WrapperFactory = __commonJS(function(exports) {
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
  exports.AbstractWrapperFactory = undefined;
  var Factory_js_1 = require_Factory();
  var AbstractWrapperFactory = function(_super) {
    __extends(AbstractWrapperFactory, _super);
    function AbstractWrapperFactory() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractWrapperFactory.prototype.wrap = function(node) {
      var args = [];
      for (var _i = 1;_i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      return this.create.apply(this, __spreadArray([node.kind, node], __read(args), false));
    };
    return AbstractWrapperFactory;
  }(Factory_js_1.AbstractFactory);
  exports.AbstractWrapperFactory = AbstractWrapperFactory;
});

// node_modules/mathjax-full/js/output/common/WrapperFactory.js
var require_WrapperFactory2 = __commonJS(function(exports) {
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
  exports.CommonWrapperFactory = undefined;
  var WrapperFactory_js_1 = require_WrapperFactory();
  var CommonWrapperFactory = function(_super) {
    __extends(CommonWrapperFactory, _super);
    function CommonWrapperFactory() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.jax = null;
      return _this;
    }
    Object.defineProperty(CommonWrapperFactory.prototype, "Wrappers", {
      get: function() {
        return this.node;
      },
      enumerable: false,
      configurable: true
    });
    CommonWrapperFactory.defaultNodes = {};
    return CommonWrapperFactory;
  }(WrapperFactory_js_1.AbstractWrapperFactory);
  exports.CommonWrapperFactory = CommonWrapperFactory;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mrow.js
var require_mrow = __commonJS(function(exports) {
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
  exports.SVGinferredMrow = exports.SVGmrow = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var mrow_js_1 = require_mrow3();
  var mrow_js_2 = require_mrow3();
  var mrow_js_3 = require_mrow2();
  var SVGmrow = function(_super) {
    __extends(SVGmrow, _super);
    function SVGmrow() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmrow.prototype.toSVG = function(parent) {
      var svg = this.node.isInferred ? this.element = parent : this.standardSVGnode(parent);
      this.addChildren(svg);
    };
    SVGmrow.kind = mrow_js_3.MmlMrow.prototype.kind;
    return SVGmrow;
  }((0, mrow_js_1.CommonMrowMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmrow = SVGmrow;
  var SVGinferredMrow = function(_super) {
    __extends(SVGinferredMrow, _super);
    function SVGinferredMrow() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGinferredMrow.kind = mrow_js_3.MmlInferredMrow.prototype.kind;
    return SVGinferredMrow;
  }((0, mrow_js_2.CommonInferredMrowMixin)(SVGmrow));
  exports.SVGinferredMrow = SVGinferredMrow;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mi.js
var require_mi = __commonJS(function(exports) {
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
  exports.SVGmi = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var mi_js_1 = require_mi3();
  var mi_js_2 = require_mi2();
  var SVGmi = function(_super) {
    __extends(SVGmi, _super);
    function SVGmi() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmi.kind = mi_js_2.MmlMi.prototype.kind;
    return SVGmi;
  }((0, mi_js_1.CommonMiMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmi = SVGmi;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mo.js
var require_mo = __commonJS(function(exports) {
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
  exports.SVGmo = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var mo_js_1 = require_mo3();
  var mo_js_2 = require_mo2();
  var VFUZZ = 0.1;
  var HFUZZ = 0.1;
  var SVGmo = function(_super) {
    __extends(SVGmo, _super);
    function SVGmo() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmo.prototype.toSVG = function(parent) {
      var attributes = this.node.attributes;
      var symmetric = attributes.get("symmetric") && this.stretch.dir !== 2;
      var stretchy = this.stretch.dir !== 0;
      if (stretchy && this.size === null) {
        this.getStretchedVariant([]);
      }
      var svg = this.standardSVGnode(parent);
      if (stretchy && this.size < 0) {
        this.stretchSVG();
      } else {
        var u = symmetric || attributes.get("largeop") ? this.fixed(this.getCenterOffset()) : "0";
        var v = this.node.getProperty("mathaccent") ? this.fixed(this.getAccentOffset()) : "0";
        if (u !== "0" || v !== "0") {
          this.adaptor.setAttribute(svg, "transform", "translate(".concat(v, " ").concat(u, ")"));
        }
        this.addChildren(svg);
      }
    };
    SVGmo.prototype.stretchSVG = function() {
      var stretch = this.stretch.stretch;
      var variants = this.getStretchVariants();
      var bbox = this.getBBox();
      if (this.stretch.dir === 1) {
        this.stretchVertical(stretch, variants, bbox);
      } else {
        this.stretchHorizontal(stretch, variants, bbox);
      }
    };
    SVGmo.prototype.getStretchVariants = function() {
      var e_1, _a;
      var c = this.stretch.c || this.getText().codePointAt(0);
      var variants = [];
      try {
        for (var _b = __values(this.stretch.stretch.keys()), _c = _b.next();!_c.done; _c = _b.next()) {
          var i = _c.value;
          variants[i] = this.font.getStretchVariant(c, i);
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
      return variants;
    };
    SVGmo.prototype.stretchVertical = function(stretch, variant, bbox) {
      var { h, d, w } = bbox;
      var T = this.addTop(stretch[0], variant[0], h, w);
      var B = this.addBot(stretch[2], variant[2], d, w);
      if (stretch.length === 4) {
        var _a = __read(this.addMidV(stretch[3], variant[3], w), 2), H = _a[0], D = _a[1];
        this.addExtV(stretch[1], variant[1], h, 0, T, H, w);
        this.addExtV(stretch[1], variant[1], 0, d, D, B, w);
      } else {
        this.addExtV(stretch[1], variant[1], h, d, T, B, w);
      }
    };
    SVGmo.prototype.stretchHorizontal = function(stretch, variant, bbox) {
      var w = bbox.w;
      var L = this.addLeft(stretch[0], variant[0]);
      var R = this.addRight(stretch[2], variant[2], w);
      if (stretch.length === 4) {
        var _a = __read(this.addMidH(stretch[3], variant[3], w), 2), x1 = _a[0], x2 = _a[1];
        var w2 = w / 2;
        this.addExtH(stretch[1], variant[1], w2, L, w2 - x1);
        this.addExtH(stretch[1], variant[1], w2, x2 - w2, R, w2);
      } else {
        this.addExtH(stretch[1], variant[1], w, L, R);
      }
    };
    SVGmo.prototype.getChar = function(n, variant) {
      var char = this.font.getChar(variant, n) || [0, 0, 0, null];
      return [char[0], char[1], char[2], char[3] || {}];
    };
    SVGmo.prototype.addGlyph = function(n, variant, x, y, parent) {
      if (parent === undefined) {
        parent = null;
      }
      return this.placeChar(n, x, y, parent || this.element, variant);
    };
    SVGmo.prototype.addTop = function(n, v, H, W) {
      if (!n)
        return 0;
      var _a = __read(this.getChar(n, v), 3), h = _a[0], d = _a[1], w = _a[2];
      this.addGlyph(n, v, (W - w) / 2, H - h);
      return h + d;
    };
    SVGmo.prototype.addExtV = function(n, v, H, D, T, B, W) {
      var _this = this;
      if (!n)
        return;
      T = Math.max(0, T - VFUZZ);
      B = Math.max(0, B - VFUZZ);
      var adaptor = this.adaptor;
      var _a = __read(this.getChar(n, v), 3), h = _a[0], d = _a[1], w = _a[2];
      var Y = H + D - T - B;
      var s = 1.5 * Y / (h + d);
      var y = (s * (h - d) - Y) / 2;
      if (Y <= 0)
        return;
      var svg = this.svg("svg", {
        width: this.fixed(w),
        height: this.fixed(Y),
        y: this.fixed(B - D),
        x: this.fixed((W - w) / 2),
        viewBox: [0, y, w, Y].map(function(x) {
          return _this.fixed(x);
        }).join(" ")
      });
      this.addGlyph(n, v, 0, 0, svg);
      var glyph = adaptor.lastChild(svg);
      adaptor.setAttribute(glyph, "transform", "scale(1,".concat(this.jax.fixed(s), ")"));
      adaptor.append(this.element, svg);
    };
    SVGmo.prototype.addBot = function(n, v, D, W) {
      if (!n)
        return 0;
      var _a = __read(this.getChar(n, v), 3), h = _a[0], d = _a[1], w = _a[2];
      this.addGlyph(n, v, (W - w) / 2, d - D);
      return h + d;
    };
    SVGmo.prototype.addMidV = function(n, v, W) {
      if (!n)
        return [0, 0];
      var _a = __read(this.getChar(n, v), 3), h = _a[0], d = _a[1], w = _a[2];
      var y = (d - h) / 2 + this.font.params.axis_height;
      this.addGlyph(n, v, (W - w) / 2, y);
      return [h + y, d - y];
    };
    SVGmo.prototype.addLeft = function(n, v) {
      return n ? this.addGlyph(n, v, 0, 0) : 0;
    };
    SVGmo.prototype.addExtH = function(n, v, W, L, R, x) {
      var _this = this;
      if (x === undefined) {
        x = 0;
      }
      if (!n)
        return;
      R = Math.max(0, R - HFUZZ);
      L = Math.max(0, L - HFUZZ);
      var adaptor = this.adaptor;
      var _a = __read(this.getChar(n, v), 3), h = _a[0], d = _a[1], w = _a[2];
      var X = W - L - R;
      var Y = h + d + 2 * VFUZZ;
      var s = 1.5 * (X / w);
      var D = -(d + VFUZZ);
      if (X <= 0)
        return;
      var svg = this.svg("svg", {
        width: this.fixed(X),
        height: this.fixed(Y),
        x: this.fixed(x + L),
        y: this.fixed(D),
        viewBox: [(s * w - X) / 2, D, X, Y].map(function(x) {
          return _this.fixed(x);
        }).join(" ")
      });
      this.addGlyph(n, v, 0, 0, svg);
      var glyph = adaptor.lastChild(svg);
      adaptor.setAttribute(glyph, "transform", "scale(" + this.jax.fixed(s) + ",1)");
      adaptor.append(this.element, svg);
    };
    SVGmo.prototype.addRight = function(n, v, W) {
      if (!n)
        return 0;
      var w = this.getChar(n, v)[2];
      return this.addGlyph(n, v, W - w, 0);
    };
    SVGmo.prototype.addMidH = function(n, v, W) {
      if (!n)
        return [0, 0];
      var w = this.getChar(n, v)[2];
      this.addGlyph(n, v, (W - w) / 2, 0);
      return [(W - w) / 2, (W + w) / 2];
    };
    SVGmo.kind = mo_js_2.MmlMo.prototype.kind;
    return SVGmo;
  }((0, mo_js_1.CommonMoMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmo = SVGmo;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mn.js
var require_mn = __commonJS(function(exports) {
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
  exports.SVGmn = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var mn_js_1 = require_mn3();
  var mn_js_2 = require_mn2();
  var SVGmn = function(_super) {
    __extends(SVGmn, _super);
    function SVGmn() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmn.kind = mn_js_2.MmlMn.prototype.kind;
    return SVGmn;
  }((0, mn_js_1.CommonMnMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmn = SVGmn;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/ms.js
var require_ms = __commonJS(function(exports) {
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
  exports.SVGms = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var ms_js_1 = require_ms3();
  var ms_js_2 = require_ms2();
  var SVGms = function(_super) {
    __extends(SVGms, _super);
    function SVGms() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGms.kind = ms_js_2.MmlMs.prototype.kind;
    return SVGms;
  }((0, ms_js_1.CommonMsMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGms = SVGms;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mtext.js
var require_mtext = __commonJS(function(exports) {
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
  exports.SVGmtext = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var mtext_js_1 = require_mtext3();
  var mtext_js_2 = require_mtext2();
  var SVGmtext = function(_super) {
    __extends(SVGmtext, _super);
    function SVGmtext() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmtext.kind = mtext_js_2.MmlMtext.prototype.kind;
    return SVGmtext;
  }((0, mtext_js_1.CommonMtextMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmtext = SVGmtext;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/merror.js
var require_merror = __commonJS(function(exports) {
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
  exports.SVGmerror = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var merror_js_1 = require_merror2();
  var SVGmerror = function(_super) {
    __extends(SVGmerror, _super);
    function SVGmerror() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmerror.prototype.toSVG = function(parent) {
      var svg = this.standardSVGnode(parent);
      var _a = this.getBBox(), { h, d, w } = _a;
      this.adaptor.append(this.element, this.svg("rect", {
        "data-background": true,
        width: this.fixed(w),
        height: this.fixed(h + d),
        y: this.fixed(-d)
      }));
      var title = this.node.attributes.get("title");
      if (title) {
        this.adaptor.append(this.element, this.svg("title", {}, [this.adaptor.text(title)]));
      }
      this.addChildren(svg);
    };
    SVGmerror.kind = merror_js_1.MmlMerror.prototype.kind;
    SVGmerror.styles = {
      'g[data-mml-node="merror"] > g': {
        fill: "red",
        stroke: "red"
      },
      'g[data-mml-node="merror"] > rect[data-background]': {
        fill: "yellow",
        stroke: "none"
      }
    };
    return SVGmerror;
  }(Wrapper_js_1.SVGWrapper);
  exports.SVGmerror = SVGmerror;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mspace.js
var require_mspace = __commonJS(function(exports) {
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
  exports.SVGmspace = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var mspace_js_1 = require_mspace3();
  var mspace_js_2 = require_mspace2();
  var SVGmspace = function(_super) {
    __extends(SVGmspace, _super);
    function SVGmspace() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmspace.kind = mspace_js_2.MmlMspace.prototype.kind;
    return SVGmspace;
  }((0, mspace_js_1.CommonMspaceMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmspace = SVGmspace;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mpadded.js
var require_mpadded = __commonJS(function(exports) {
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
  exports.SVGmpadded = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var mpadded_js_1 = require_mpadded3();
  var mpadded_js_2 = require_mpadded2();
  var SVGmpadded = function(_super) {
    __extends(SVGmpadded, _super);
    function SVGmpadded() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmpadded.prototype.toSVG = function(parent) {
      var svg = this.standardSVGnode(parent);
      var _a = __read(this.getDimens(), 9), dw = _a[5], x = _a[6], y = _a[7], dx = _a[8];
      var align = this.node.attributes.get("data-align") || "left";
      var X = x + dx - (dw < 0 && align !== "left" ? align === "center" ? dw / 2 : dw : 0);
      if (X || y) {
        svg = this.adaptor.append(svg, this.svg("g"));
        this.place(X, y, svg);
      }
      this.addChildren(svg);
    };
    SVGmpadded.kind = mpadded_js_2.MmlMpadded.prototype.kind;
    return SVGmpadded;
  }((0, mpadded_js_1.CommonMpaddedMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmpadded = SVGmpadded;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mphantom.js
var require_mphantom = __commonJS(function(exports) {
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
  exports.SVGmphantom = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var mphantom_js_1 = require_mphantom2();
  var SVGmphantom = function(_super) {
    __extends(SVGmphantom, _super);
    function SVGmphantom() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmphantom.prototype.toSVG = function(parent) {
      this.standardSVGnode(parent);
    };
    SVGmphantom.kind = mphantom_js_1.MmlMphantom.prototype.kind;
    return SVGmphantom;
  }(Wrapper_js_1.SVGWrapper);
  exports.SVGmphantom = SVGmphantom;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mfrac.js
var require_mfrac = __commonJS(function(exports) {
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
  exports.SVGmfrac = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var mfrac_js_1 = require_mfrac3();
  var mfrac_js_2 = require_mfrac2();
  var SVGmfrac = function(_super) {
    __extends(SVGmfrac, _super);
    function SVGmfrac() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmfrac.prototype.toSVG = function(parent) {
      this.standardSVGnode(parent);
      var _a = this.node.attributes.getList("linethickness", "bevelled"), { linethickness, bevelled } = _a;
      var display = this.isDisplay();
      if (bevelled) {
        this.makeBevelled(display);
      } else {
        var thickness = this.length2em(String(linethickness), 0.06);
        if (thickness === 0) {
          this.makeAtop(display);
        } else {
          this.makeFraction(display, thickness);
        }
      }
    };
    SVGmfrac.prototype.makeFraction = function(display, t) {
      var svg = this.element;
      var _a = this.node.attributes.getList("numalign", "denomalign"), { numalign, denomalign } = _a;
      var _b = __read(this.childNodes, 2), num = _b[0], den = _b[1];
      var nbox = num.getOuterBBox();
      var dbox = den.getOuterBBox();
      var tex = this.font.params;
      var a = tex.axis_height;
      var d = 0.1;
      var pad = this.node.getProperty("withDelims") ? 0 : tex.nulldelimiterspace;
      var W = Math.max((nbox.L + nbox.w + nbox.R) * nbox.rscale, (dbox.L + dbox.w + dbox.R) * dbox.rscale);
      var nx = this.getAlignX(W, nbox, numalign) + d + pad;
      var dx = this.getAlignX(W, dbox, denomalign) + d + pad;
      var _c = this.getTUV(display, t), { T, u, v } = _c;
      num.toSVG(svg);
      num.place(nx, a + T + Math.max(nbox.d * nbox.rscale, u));
      den.toSVG(svg);
      den.place(dx, a - T - Math.max(dbox.h * dbox.rscale, v));
      this.adaptor.append(svg, this.svg("rect", {
        width: this.fixed(W + 2 * d),
        height: this.fixed(t),
        x: this.fixed(pad),
        y: this.fixed(a - t / 2)
      }));
    };
    SVGmfrac.prototype.makeAtop = function(display) {
      var svg = this.element;
      var _a = this.node.attributes.getList("numalign", "denomalign"), { numalign, denomalign } = _a;
      var _b = __read(this.childNodes, 2), num = _b[0], den = _b[1];
      var nbox = num.getOuterBBox();
      var dbox = den.getOuterBBox();
      var tex = this.font.params;
      var pad = this.node.getProperty("withDelims") ? 0 : tex.nulldelimiterspace;
      var W = Math.max((nbox.L + nbox.w + nbox.R) * nbox.rscale, (dbox.L + dbox.w + dbox.R) * dbox.rscale);
      var nx = this.getAlignX(W, nbox, numalign) + pad;
      var dx = this.getAlignX(W, dbox, denomalign) + pad;
      var _c = this.getUVQ(display), { u, v } = _c;
      num.toSVG(svg);
      num.place(nx, u);
      den.toSVG(svg);
      den.place(dx, -v);
    };
    SVGmfrac.prototype.makeBevelled = function(display) {
      var svg = this.element;
      var _a = __read(this.childNodes, 2), num = _a[0], den = _a[1];
      var _b = this.getBevelData(display), { u, v, delta, nbox, dbox } = _b;
      var w = (nbox.L + nbox.w + nbox.R) * nbox.rscale;
      num.toSVG(svg);
      this.bevel.toSVG(svg);
      den.toSVG(svg);
      num.place(nbox.L * nbox.rscale, u);
      this.bevel.place(w - delta / 2, 0);
      den.place(w + this.bevel.getOuterBBox().w + dbox.L * dbox.rscale - delta, v);
    };
    SVGmfrac.kind = mfrac_js_2.MmlMfrac.prototype.kind;
    return SVGmfrac;
  }((0, mfrac_js_1.CommonMfracMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmfrac = SVGmfrac;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/msqrt.js
var require_msqrt = __commonJS(function(exports) {
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
  exports.SVGmsqrt = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var msqrt_js_1 = require_msqrt3();
  var msqrt_js_2 = require_msqrt2();
  var SVGmsqrt = function(_super) {
    __extends(SVGmsqrt, _super);
    function SVGmsqrt() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.dx = 0;
      return _this;
    }
    SVGmsqrt.prototype.toSVG = function(parent) {
      var surd = this.childNodes[this.surd];
      var base = this.childNodes[this.base];
      var root = this.root ? this.childNodes[this.root] : null;
      var sbox = surd.getBBox();
      var bbox = base.getOuterBBox();
      var q = this.getPQ(sbox)[1];
      var t = this.font.params.rule_thickness * this.bbox.scale;
      var H = bbox.h + q + t;
      var SVG = this.standardSVGnode(parent);
      var BASE = this.adaptor.append(SVG, this.svg("g"));
      this.addRoot(SVG, root, sbox, H);
      surd.toSVG(SVG);
      surd.place(this.dx, H - sbox.h);
      base.toSVG(BASE);
      base.place(this.dx + sbox.w, 0);
      this.adaptor.append(SVG, this.svg("rect", {
        width: this.fixed(bbox.w),
        height: this.fixed(t),
        x: this.fixed(this.dx + sbox.w),
        y: this.fixed(H - t)
      }));
    };
    SVGmsqrt.prototype.addRoot = function(_ROOT, _root, _sbox, _H) {};
    SVGmsqrt.kind = msqrt_js_2.MmlMsqrt.prototype.kind;
    return SVGmsqrt;
  }((0, msqrt_js_1.CommonMsqrtMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmsqrt = SVGmsqrt;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mroot.js
var require_mroot = __commonJS(function(exports) {
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
  exports.SVGmroot = undefined;
  var msqrt_js_1 = require_msqrt();
  var mroot_js_1 = require_mroot3();
  var mroot_js_2 = require_mroot2();
  var SVGmroot = function(_super) {
    __extends(SVGmroot, _super);
    function SVGmroot() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmroot.prototype.addRoot = function(ROOT, root, sbox, H) {
      root.toSVG(ROOT);
      var _a = __read(this.getRootDimens(sbox, H), 3), x = _a[0], h = _a[1], dx = _a[2];
      var bbox = root.getOuterBBox();
      root.place(dx * bbox.rscale, h);
      this.dx = x;
    };
    SVGmroot.kind = mroot_js_2.MmlMroot.prototype.kind;
    return SVGmroot;
  }((0, mroot_js_1.CommonMrootMixin)(msqrt_js_1.SVGmsqrt));
  exports.SVGmroot = SVGmroot;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mfenced.js
var require_mfenced = __commonJS(function(exports) {
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
  exports.SVGmfenced = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var mfenced_js_1 = require_mfenced3();
  var mfenced_js_2 = require_mfenced2();
  var SVGmfenced = function(_super) {
    __extends(SVGmfenced, _super);
    function SVGmfenced() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmfenced.prototype.toSVG = function(parent) {
      var svg = this.standardSVGnode(parent);
      this.setChildrenParent(this.mrow);
      this.mrow.toSVG(svg);
      this.setChildrenParent(this);
    };
    SVGmfenced.prototype.setChildrenParent = function(parent) {
      var e_1, _a;
      try {
        for (var _b = __values(this.childNodes), _c = _b.next();!_c.done; _c = _b.next()) {
          var child = _c.value;
          child.parent = parent;
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
    SVGmfenced.kind = mfenced_js_2.MmlMfenced.prototype.kind;
    return SVGmfenced;
  }((0, mfenced_js_1.CommonMfencedMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmfenced = SVGmfenced;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/scriptbase.js
var require_scriptbase = __commonJS(function(exports) {
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
  exports.SVGscriptbase = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var scriptbase_js_1 = require_scriptbase2();
  var SVGscriptbase = function(_super) {
    __extends(SVGscriptbase, _super);
    function SVGscriptbase() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGscriptbase.prototype.toSVG = function(parent) {
      var svg = this.standardSVGnode(parent);
      var w = this.getBaseWidth();
      var _a = __read(this.getOffset(), 2), x = _a[0], v = _a[1];
      this.baseChild.toSVG(svg);
      this.scriptChild.toSVG(svg);
      this.scriptChild.place(w + x, v);
    };
    SVGscriptbase.kind = "scriptbase";
    return SVGscriptbase;
  }((0, scriptbase_js_1.CommonScriptbaseMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGscriptbase = SVGscriptbase;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/msubsup.js
var require_msubsup = __commonJS(function(exports) {
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
  exports.SVGmsubsup = exports.SVGmsup = exports.SVGmsub = undefined;
  var scriptbase_js_1 = require_scriptbase();
  var msubsup_js_1 = require_msubsup3();
  var msubsup_js_2 = require_msubsup3();
  var msubsup_js_3 = require_msubsup3();
  var msubsup_js_4 = require_msubsup2();
  var SVGmsub = function(_super) {
    __extends(SVGmsub, _super);
    function SVGmsub() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmsub.kind = msubsup_js_4.MmlMsub.prototype.kind;
    return SVGmsub;
  }((0, msubsup_js_1.CommonMsubMixin)(scriptbase_js_1.SVGscriptbase));
  exports.SVGmsub = SVGmsub;
  var SVGmsup = function(_super) {
    __extends(SVGmsup, _super);
    function SVGmsup() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmsup.kind = msubsup_js_4.MmlMsup.prototype.kind;
    return SVGmsup;
  }((0, msubsup_js_2.CommonMsupMixin)(scriptbase_js_1.SVGscriptbase));
  exports.SVGmsup = SVGmsup;
  var SVGmsubsup = function(_super) {
    __extends(SVGmsubsup, _super);
    function SVGmsubsup() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmsubsup.prototype.toSVG = function(parent) {
      var svg = this.standardSVGnode(parent);
      var _a = __read([this.baseChild, this.supChild, this.subChild], 3), base = _a[0], sup = _a[1], sub = _a[2];
      var w = this.getBaseWidth();
      var x = this.getAdjustedIc();
      var _b = __read(this.getUVQ(), 2), u = _b[0], v = _b[1];
      base.toSVG(svg);
      sup.toSVG(svg);
      sub.toSVG(svg);
      sub.place(w, v);
      sup.place(w + x, u);
    };
    SVGmsubsup.kind = msubsup_js_4.MmlMsubsup.prototype.kind;
    return SVGmsubsup;
  }((0, msubsup_js_3.CommonMsubsupMixin)(scriptbase_js_1.SVGscriptbase));
  exports.SVGmsubsup = SVGmsubsup;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/munderover.js
var require_munderover = __commonJS(function(exports) {
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
  exports.SVGmunderover = exports.SVGmover = exports.SVGmunder = undefined;
  var msubsup_js_1 = require_msubsup();
  var munderover_js_1 = require_munderover3();
  var munderover_js_2 = require_munderover3();
  var munderover_js_3 = require_munderover3();
  var munderover_js_4 = require_munderover2();
  var SVGmunder = function(_super) {
    __extends(SVGmunder, _super);
    function SVGmunder() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmunder.prototype.toSVG = function(parent) {
      if (this.hasMovableLimits()) {
        _super.prototype.toSVG.call(this, parent);
        return;
      }
      var svg = this.standardSVGnode(parent);
      var _a = __read([this.baseChild, this.scriptChild], 2), base = _a[0], script = _a[1];
      var _b = __read([base.getOuterBBox(), script.getOuterBBox()], 2), bbox = _b[0], sbox = _b[1];
      base.toSVG(svg);
      script.toSVG(svg);
      var delta = this.isLineBelow ? 0 : this.getDelta(true);
      var v = this.getUnderKV(bbox, sbox)[1];
      var _c = __read(this.getDeltaW([bbox, sbox], [0, -delta]), 2), bx = _c[0], sx = _c[1];
      base.place(bx, 0);
      script.place(sx, v);
    };
    SVGmunder.kind = munderover_js_4.MmlMunder.prototype.kind;
    return SVGmunder;
  }((0, munderover_js_1.CommonMunderMixin)(msubsup_js_1.SVGmsub));
  exports.SVGmunder = SVGmunder;
  var SVGmover = function(_super) {
    __extends(SVGmover, _super);
    function SVGmover() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmover.prototype.toSVG = function(parent) {
      if (this.hasMovableLimits()) {
        _super.prototype.toSVG.call(this, parent);
        return;
      }
      var svg = this.standardSVGnode(parent);
      var _a = __read([this.baseChild, this.scriptChild], 2), base = _a[0], script = _a[1];
      var _b = __read([base.getOuterBBox(), script.getOuterBBox()], 2), bbox = _b[0], sbox = _b[1];
      base.toSVG(svg);
      script.toSVG(svg);
      var delta = this.isLineAbove ? 0 : this.getDelta();
      var u = this.getOverKU(bbox, sbox)[1];
      var _c = __read(this.getDeltaW([bbox, sbox], [0, delta]), 2), bx = _c[0], sx = _c[1];
      base.place(bx, 0);
      script.place(sx, u);
    };
    SVGmover.kind = munderover_js_4.MmlMover.prototype.kind;
    return SVGmover;
  }((0, munderover_js_2.CommonMoverMixin)(msubsup_js_1.SVGmsup));
  exports.SVGmover = SVGmover;
  var SVGmunderover = function(_super) {
    __extends(SVGmunderover, _super);
    function SVGmunderover() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmunderover.prototype.toSVG = function(parent) {
      if (this.hasMovableLimits()) {
        _super.prototype.toSVG.call(this, parent);
        return;
      }
      var svg = this.standardSVGnode(parent);
      var _a = __read([this.baseChild, this.overChild, this.underChild], 3), base = _a[0], over = _a[1], under = _a[2];
      var _b = __read([base.getOuterBBox(), over.getOuterBBox(), under.getOuterBBox()], 3), bbox = _b[0], obox = _b[1], ubox = _b[2];
      base.toSVG(svg);
      under.toSVG(svg);
      over.toSVG(svg);
      var delta = this.getDelta();
      var u = this.getOverKU(bbox, obox)[1];
      var v = this.getUnderKV(bbox, ubox)[1];
      var _c = __read(this.getDeltaW([bbox, ubox, obox], [0, this.isLineBelow ? 0 : -delta, this.isLineAbove ? 0 : delta]), 3), bx = _c[0], ux = _c[1], ox = _c[2];
      base.place(bx, 0);
      under.place(ux, v);
      over.place(ox, u);
    };
    SVGmunderover.kind = munderover_js_4.MmlMunderover.prototype.kind;
    return SVGmunderover;
  }((0, munderover_js_3.CommonMunderoverMixin)(msubsup_js_1.SVGmsubsup));
  exports.SVGmunderover = SVGmunderover;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mmultiscripts.js
var require_mmultiscripts = __commonJS(function(exports) {
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
  exports.SVGmmultiscripts = exports.AlignX = undefined;
  var msubsup_js_1 = require_msubsup();
  var mmultiscripts_js_1 = require_mmultiscripts3();
  var mmultiscripts_js_2 = require_mmultiscripts2();
  var string_js_1 = require_string();
  function AlignX(align) {
    return {
      left: function(_w, _W) {
        return 0;
      },
      center: function(w, W) {
        return (W - w) / 2;
      },
      right: function(w, W) {
        return W - w;
      }
    }[align] || function(_w, _W) {
      return 0;
    };
  }
  exports.AlignX = AlignX;
  var SVGmmultiscripts = function(_super) {
    __extends(SVGmmultiscripts, _super);
    function SVGmmultiscripts() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmmultiscripts.prototype.toSVG = function(parent) {
      var svg = this.standardSVGnode(parent);
      var data = this.scriptData;
      var scriptalign = this.node.getProperty("scriptalign") || "right left";
      var _a = __read((0, string_js_1.split)(scriptalign + " " + scriptalign), 2), preAlign = _a[0], postAlign = _a[1];
      var sub = this.combinePrePost(data.sub, data.psub);
      var sup = this.combinePrePost(data.sup, data.psup);
      var _b = __read(this.getUVQ(sub, sup), 2), u = _b[0], v = _b[1];
      var x = 0;
      if (data.numPrescripts) {
        x = this.addScripts(0.05, u, v, this.firstPrescript, data.numPrescripts, preAlign);
      }
      var base = this.baseChild;
      base.toSVG(svg);
      base.place(x, 0);
      x += base.getOuterBBox().w;
      if (data.numScripts) {
        this.addScripts(x, u, v, 1, data.numScripts, postAlign);
      }
    };
    SVGmmultiscripts.prototype.addScripts = function(x, u, v, i, n, align) {
      var adaptor = this.adaptor;
      var alignX = AlignX(align);
      var supRow = adaptor.append(this.element, this.svg("g"));
      var subRow = adaptor.append(this.element, this.svg("g"));
      this.place(x, u, supRow);
      this.place(x, v, subRow);
      var m = i + 2 * n;
      var dx = 0;
      while (i < m) {
        var _a = __read([this.childNodes[i++], this.childNodes[i++]], 2), sub = _a[0], sup = _a[1];
        var _b = __read([sub.getOuterBBox(), sup.getOuterBBox()], 2), subbox = _b[0], supbox = _b[1];
        var _c = __read([subbox.rscale, supbox.rscale], 2), subr = _c[0], supr = _c[1];
        var w = Math.max(subbox.w * subr, supbox.w * supr);
        sub.toSVG(subRow);
        sup.toSVG(supRow);
        sub.place(dx + alignX(subbox.w * subr, w), 0);
        sup.place(dx + alignX(supbox.w * supr, w), 0);
        dx += w;
      }
      return x + dx;
    };
    SVGmmultiscripts.kind = mmultiscripts_js_2.MmlMmultiscripts.prototype.kind;
    return SVGmmultiscripts;
  }((0, mmultiscripts_js_1.CommonMmultiscriptsMixin)(msubsup_js_1.SVGmsubsup));
  exports.SVGmmultiscripts = SVGmmultiscripts;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mtable.js
var require_mtable = __commonJS(function(exports) {
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
  exports.SVGmtable = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var mtable_js_1 = require_mtable3();
  var mtable_js_2 = require_mtable2();
  var CLASSPREFIX = "mjx-";
  var SVGmtable = function(_super) {
    __extends(SVGmtable, _super);
    function SVGmtable(factory, node, parent) {
      if (parent === undefined) {
        parent = null;
      }
      var _this = _super.call(this, factory, node, parent) || this;
      var def = { "data-labels": true };
      if (_this.isTop) {
        def.transform = "matrix(1 0 0 -1 0 0)";
      }
      _this.labels = _this.svg("g", def);
      return _this;
    }
    SVGmtable.prototype.toSVG = function(parent) {
      var svg = this.standardSVGnode(parent);
      this.placeRows(svg);
      this.handleColumnLines(svg);
      this.handleRowLines(svg);
      this.handleFrame(svg);
      var dx = this.handlePWidth(svg);
      this.handleLabels(svg, parent, dx);
    };
    SVGmtable.prototype.placeRows = function(svg) {
      var _a, _b, _c;
      var equal = this.node.attributes.get("equalrows");
      var _d = this.getTableData(), { H, D } = _d;
      var HD = this.getEqualRowHeight();
      var rSpace = this.getRowHalfSpacing();
      var rLines = __spreadArray(__spreadArray([this.fLine], __read(this.rLines), false), [this.fLine], false);
      var y = this.getBBox().h - rLines[0];
      for (var i = 0;i < this.numRows; i++) {
        var row = this.childNodes[i];
        _a = __read(this.getRowHD(equal, HD, H[i], D[i]), 2), row.H = _a[0], row.D = _a[1];
        _b = __read([rSpace[i], rSpace[i + 1]], 2), row.tSpace = _b[0], row.bSpace = _b[1];
        _c = __read([rLines[i], rLines[i + 1]], 2), row.tLine = _c[0], row.bLine = _c[1];
        row.toSVG(svg);
        row.place(0, y - rSpace[i] - row.H);
        y -= rSpace[i] + row.H + row.D + rSpace[i + 1] + rLines[i + 1];
      }
    };
    SVGmtable.prototype.getRowHD = function(equal, HD, H, D) {
      return equal ? [(HD + H - D) / 2, (HD - H + D) / 2] : [H, D];
    };
    SVGmtable.prototype.handleColor = function() {
      _super.prototype.handleColor.call(this);
      var rect = this.firstChild();
      if (rect) {
        this.adaptor.setAttribute(rect, "width", this.fixed(this.getWidth()));
      }
    };
    SVGmtable.prototype.handleColumnLines = function(svg) {
      if (this.node.attributes.get("columnlines") === "none")
        return;
      var lines = this.getColumnAttributes("columnlines");
      if (!lines)
        return;
      var cSpace = this.getColumnHalfSpacing();
      var cLines = this.cLines;
      var cWidth = this.getComputedWidths();
      var x = this.fLine;
      for (var i = 0;i < lines.length; i++) {
        x += cSpace[i] + cWidth[i] + cSpace[i + 1];
        if (lines[i] !== "none") {
          this.adaptor.append(svg, this.makeVLine(x, lines[i], cLines[i]));
        }
        x += cLines[i];
      }
    };
    SVGmtable.prototype.handleRowLines = function(svg) {
      if (this.node.attributes.get("rowlines") === "none")
        return;
      var lines = this.getRowAttributes("rowlines");
      if (!lines)
        return;
      var equal = this.node.attributes.get("equalrows");
      var _a = this.getTableData(), { H, D } = _a;
      var HD = this.getEqualRowHeight();
      var rSpace = this.getRowHalfSpacing();
      var rLines = this.rLines;
      var y = this.getBBox().h - this.fLine;
      for (var i = 0;i < lines.length; i++) {
        var _b = __read(this.getRowHD(equal, HD, H[i], D[i]), 2), rH = _b[0], rD = _b[1];
        y -= rSpace[i] + rH + rD + rSpace[i + 1];
        if (lines[i] !== "none") {
          this.adaptor.append(svg, this.makeHLine(y, lines[i], rLines[i]));
        }
        y -= rLines[i];
      }
    };
    SVGmtable.prototype.handleFrame = function(svg) {
      if (this.frame && this.fLine) {
        var _a = this.getBBox(), { h, d, w } = _a;
        var style = this.node.attributes.get("frame");
        this.adaptor.append(svg, this.makeFrame(w, h, d, style));
      }
    };
    SVGmtable.prototype.handlePWidth = function(svg) {
      if (!this.pWidth) {
        return 0;
      }
      var _a = this.getBBox(), { w, L, R } = _a;
      var W = L + this.pWidth + R;
      var align = this.getAlignShift()[0];
      var CW = Math.max(this.isTop ? W : 0, this.container.getWrapWidth(this.containerI)) - L - R;
      var dw = w - (this.pWidth > CW ? CW : this.pWidth);
      var dx = align === "left" ? 0 : align === "right" ? dw : dw / 2;
      if (dx) {
        var table = this.svg("g", {}, this.adaptor.childNodes(svg));
        this.place(dx, 0, table);
        this.adaptor.append(svg, table);
      }
      return dx;
    };
    SVGmtable.prototype.lineClass = function(style) {
      return CLASSPREFIX + style;
    };
    SVGmtable.prototype.makeFrame = function(w, h, d, style) {
      var t = this.fLine;
      return this.svg("rect", this.setLineThickness(t, style, {
        "data-frame": true,
        class: this.lineClass(style),
        width: this.fixed(w - t),
        height: this.fixed(h + d - t),
        x: this.fixed(t / 2),
        y: this.fixed(t / 2 - d)
      }));
    };
    SVGmtable.prototype.makeVLine = function(x, style, t) {
      var _a = this.getBBox(), { h, d } = _a;
      var dt = style === "dotted" ? t / 2 : 0;
      var X = this.fixed(x + t / 2);
      return this.svg("line", this.setLineThickness(t, style, {
        "data-line": "v",
        class: this.lineClass(style),
        x1: X,
        y1: this.fixed(dt - d),
        x2: X,
        y2: this.fixed(h - dt)
      }));
    };
    SVGmtable.prototype.makeHLine = function(y, style, t) {
      var w = this.getBBox().w;
      var dt = style === "dotted" ? t / 2 : 0;
      var Y = this.fixed(y - t / 2);
      return this.svg("line", this.setLineThickness(t, style, {
        "data-line": "h",
        class: this.lineClass(style),
        x1: this.fixed(dt),
        y1: Y,
        x2: this.fixed(w - dt),
        y2: Y
      }));
    };
    SVGmtable.prototype.setLineThickness = function(t, style, properties) {
      if (t !== 0.07) {
        properties["stroke-thickness"] = this.fixed(t);
        if (style !== "solid") {
          properties["stroke-dasharray"] = (style === "dotted" ? "0," : "") + this.fixed(2 * t);
        }
      }
      return properties;
    };
    SVGmtable.prototype.handleLabels = function(svg, _parent, dx) {
      if (!this.hasLabels)
        return;
      var labels = this.labels;
      var attributes = this.node.attributes;
      var side = attributes.get("side");
      this.spaceLabels();
      this.isTop ? this.topTable(svg, labels, side) : this.subTable(svg, labels, side, dx);
    };
    SVGmtable.prototype.spaceLabels = function() {
      var adaptor = this.adaptor;
      var h = this.getBBox().h;
      var L = this.getTableData().L;
      var space = this.getRowHalfSpacing();
      var y = h - this.fLine;
      var current = adaptor.firstChild(this.labels);
      for (var i = 0;i < this.numRows; i++) {
        var row = this.childNodes[i];
        if (row.node.isKind("mlabeledtr")) {
          var cell = row.childNodes[0];
          y -= space[i] + row.H;
          row.placeCell(cell, { x: 0, y, w: L, lSpace: 0, rSpace: 0, lLine: 0, rLine: 0 });
          y -= row.D + space[i + 1] + this.rLines[i];
          current = adaptor.next(current);
        } else {
          y -= space[i] + row.H + row.D + space[i + 1] + this.rLines[i];
        }
      }
    };
    SVGmtable.prototype.topTable = function(svg, labels, side) {
      var adaptor = this.adaptor;
      var _a = this.getBBox(), { h, d, w, L, R } = _a;
      var W = L + (this.pWidth || w) + R;
      var LW = this.getTableData().L;
      var _b = __read(this.getPadAlignShift(side), 3), align = _b[1], shift = _b[2];
      var dx = shift + (align === "right" ? -W : align === "center" ? -W / 2 : 0) + L;
      var matrix = "matrix(1 0 0 -1 0 0)";
      var scale = "scale(".concat(this.jax.fixed(this.font.params.x_height * 1000 / this.metrics.ex, 2), ")");
      var transform = "translate(0 ".concat(this.fixed(h), ") ").concat(matrix, " ").concat(scale);
      var table = this.svg("svg", {
        "data-table": true,
        preserveAspectRatio: align === "left" ? "xMinYMid" : align === "right" ? "xMaxYMid" : "xMidYMid",
        viewBox: [this.fixed(-dx), this.fixed(-h), 1, this.fixed(h + d)].join(" ")
      }, [
        this.svg("g", { transform: matrix }, adaptor.childNodes(svg))
      ]);
      labels = this.svg("svg", {
        "data-labels": true,
        preserveAspectRatio: side === "left" ? "xMinYMid" : "xMaxYMid",
        viewBox: [side === "left" ? 0 : this.fixed(LW), this.fixed(-h), 1, this.fixed(h + d)].join(" ")
      }, [labels]);
      adaptor.append(svg, this.svg("g", { transform }, [table, labels]));
      this.place(-L, 0, svg);
    };
    SVGmtable.prototype.subTable = function(svg, labels, side, dx) {
      var adaptor = this.adaptor;
      var _a = this.getBBox(), { w, L, R } = _a;
      var W = L + (this.pWidth || w) + R;
      var labelW = this.getTableData().L;
      var align = this.getAlignShift()[0];
      var CW = Math.max(W, this.container.getWrapWidth(this.containerI));
      this.place(side === "left" ? (align === "left" ? 0 : align === "right" ? W - CW + dx : (W - CW) / 2 + dx) - L : (align === "left" ? CW : align === "right" ? W + dx : (CW + W) / 2 + dx) - L - labelW, 0, labels);
      adaptor.append(svg, labels);
    };
    SVGmtable.kind = mtable_js_2.MmlMtable.prototype.kind;
    SVGmtable.styles = {
      'g[data-mml-node="mtable"] > line[data-line], svg[data-table] > g > line[data-line]': {
        "stroke-width": "70px",
        fill: "none"
      },
      'g[data-mml-node="mtable"] > rect[data-frame], svg[data-table] > g > rect[data-frame]': {
        "stroke-width": "70px",
        fill: "none"
      },
      'g[data-mml-node="mtable"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed': {
        "stroke-dasharray": "140"
      },
      'g[data-mml-node="mtable"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted': {
        "stroke-linecap": "round",
        "stroke-dasharray": "0,140"
      },
      'g[data-mml-node="mtable"] > g > svg': {
        overflow: "visible"
      }
    };
    return SVGmtable;
  }((0, mtable_js_1.CommonMtableMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmtable = SVGmtable;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mtr.js
var require_mtr = __commonJS(function(exports) {
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
  exports.SVGmlabeledtr = exports.SVGmtr = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var mtr_js_1 = require_mtr3();
  var mtr_js_2 = require_mtr3();
  var mtr_js_3 = require_mtr2();
  var SVGmtr = function(_super) {
    __extends(SVGmtr, _super);
    function SVGmtr() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmtr.prototype.toSVG = function(parent) {
      var svg = this.standardSVGnode(parent);
      this.placeCells(svg);
      this.placeColor();
    };
    SVGmtr.prototype.placeCells = function(svg) {
      var cSpace = this.parent.getColumnHalfSpacing();
      var cLines = __spreadArray(__spreadArray([this.parent.fLine], __read(this.parent.cLines), false), [this.parent.fLine], false);
      var cWidth = this.parent.getComputedWidths();
      var scale = 1 / this.getBBox().rscale;
      var x = cLines[0];
      for (var i = 0;i < this.numCells; i++) {
        var child = this.getChild(i);
        child.toSVG(svg);
        x += this.placeCell(child, {
          x,
          y: 0,
          lSpace: cSpace[i] * scale,
          rSpace: cSpace[i + 1] * scale,
          w: cWidth[i] * scale,
          lLine: cLines[i] * scale,
          rLine: cLines[i + 1] * scale
        });
      }
    };
    SVGmtr.prototype.placeCell = function(cell, sizes) {
      var { x, y, lSpace, w, rSpace, lLine, rLine } = sizes;
      var scale = 1 / this.getBBox().rscale;
      var _a = __read([this.H * scale, this.D * scale], 2), h = _a[0], d = _a[1];
      var _b = __read([this.tSpace * scale, this.bSpace * scale], 2), t = _b[0], b = _b[1];
      var _c = __read(cell.placeCell(x + lSpace, y, w, h, d), 2), dx = _c[0], dy = _c[1];
      var W = lSpace + w + rSpace;
      cell.placeColor(-(dx + lSpace + lLine / 2), -(d + b + dy), W + (lLine + rLine) / 2, h + d + t + b);
      return W + rLine;
    };
    SVGmtr.prototype.placeColor = function() {
      var scale = 1 / this.getBBox().rscale;
      var adaptor = this.adaptor;
      var child = this.firstChild();
      if (child && adaptor.kind(child) === "rect" && adaptor.getAttribute(child, "data-bgcolor")) {
        var _a = __read([this.tLine / 2 * scale, this.bLine / 2 * scale], 2), TL = _a[0], BL = _a[1];
        var _b = __read([this.tSpace * scale, this.bSpace * scale], 2), TS = _b[0], BS = _b[1];
        var _c = __read([this.H * scale, this.D * scale], 2), H = _c[0], D = _c[1];
        adaptor.setAttribute(child, "y", this.fixed(-(D + BS + BL)));
        adaptor.setAttribute(child, "width", this.fixed(this.parent.getWidth() * scale));
        adaptor.setAttribute(child, "height", this.fixed(TL + TS + H + D + BS + BL));
      }
    };
    SVGmtr.kind = mtr_js_3.MmlMtr.prototype.kind;
    return SVGmtr;
  }((0, mtr_js_1.CommonMtrMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmtr = SVGmtr;
  var SVGmlabeledtr = function(_super) {
    __extends(SVGmlabeledtr, _super);
    function SVGmlabeledtr() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmlabeledtr.prototype.toSVG = function(parent) {
      _super.prototype.toSVG.call(this, parent);
      var child = this.childNodes[0];
      if (child) {
        child.toSVG(this.parent.labels);
      }
    };
    SVGmlabeledtr.kind = mtr_js_3.MmlMlabeledtr.prototype.kind;
    return SVGmlabeledtr;
  }((0, mtr_js_2.CommonMlabeledtrMixin)(SVGmtr));
  exports.SVGmlabeledtr = SVGmlabeledtr;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mtd.js
var require_mtd = __commonJS(function(exports) {
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
  exports.SVGmtd = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var mtd_js_1 = require_mtd3();
  var mtd_js_2 = require_mtd2();
  var SVGmtd = function(_super) {
    __extends(SVGmtd, _super);
    function SVGmtd() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmtd.prototype.placeCell = function(x, y, W, H, D) {
      var bbox = this.getBBox();
      var h = Math.max(bbox.h, 0.75);
      var d = Math.max(bbox.d, 0.25);
      var calign = this.node.attributes.get("columnalign");
      var ralign = this.node.attributes.get("rowalign");
      var alignX = this.getAlignX(W, bbox, calign);
      var alignY = this.getAlignY(H, D, h, d, ralign);
      this.place(x + alignX, y + alignY);
      return [alignX, alignY];
    };
    SVGmtd.prototype.placeColor = function(x, y, W, H) {
      var adaptor = this.adaptor;
      var child = this.firstChild();
      if (child && adaptor.kind(child) === "rect" && adaptor.getAttribute(child, "data-bgcolor")) {
        adaptor.setAttribute(child, "x", this.fixed(x));
        adaptor.setAttribute(child, "y", this.fixed(y));
        adaptor.setAttribute(child, "width", this.fixed(W));
        adaptor.setAttribute(child, "height", this.fixed(H));
      }
    };
    SVGmtd.kind = mtd_js_2.MmlMtd.prototype.kind;
    return SVGmtd;
  }((0, mtd_js_1.CommonMtdMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmtd = SVGmtd;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/maction.js
var require_maction = __commonJS(function(exports) {
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
  exports.SVGmaction = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var maction_js_1 = require_maction3();
  var maction_js_2 = require_maction3();
  var maction_js_3 = require_maction2();
  var SVGmaction = function(_super) {
    __extends(SVGmaction, _super);
    function SVGmaction() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmaction.prototype.toSVG = function(parent) {
      var svg = this.standardSVGnode(parent);
      var child = this.selected;
      var _a = child.getOuterBBox(), { h, d, w } = _a;
      this.adaptor.append(this.element, this.svg("rect", {
        width: this.fixed(w),
        height: this.fixed(h + d),
        y: this.fixed(-d),
        fill: "none",
        "pointer-events": "all"
      }));
      child.toSVG(svg);
      var bbox = child.getOuterBBox();
      if (child.element) {
        child.place(bbox.L * bbox.rscale, 0);
      }
      this.action(this, this.data);
    };
    SVGmaction.prototype.setEventHandler = function(type, handler) {
      this.element.addEventListener(type, handler);
    };
    SVGmaction.kind = maction_js_3.MmlMaction.prototype.kind;
    SVGmaction.styles = {
      '[jax="SVG"] mjx-tool': {
        display: "inline-block",
        position: "relative",
        width: 0,
        height: 0
      },
      '[jax="SVG"] mjx-tool > mjx-tip': {
        position: "absolute",
        top: 0,
        left: 0
      },
      "mjx-tool > mjx-tip": {
        display: "inline-block",
        padding: ".2em",
        border: "1px solid #888",
        "font-size": "70%",
        "background-color": "#F8F8F8",
        color: "black",
        "box-shadow": "2px 2px 5px #AAAAAA"
      },
      'g[data-mml-node="maction"][data-toggle]': {
        cursor: "pointer"
      },
      "mjx-status": {
        display: "block",
        position: "fixed",
        left: "1em",
        bottom: "1em",
        "min-width": "25%",
        padding: ".2em .4em",
        border: "1px solid #888",
        "font-size": "90%",
        "background-color": "#F8F8F8",
        color: "black"
      }
    };
    SVGmaction.actions = new Map([
      ["toggle", [function(node, _data) {
        node.adaptor.setAttribute(node.element, "data-toggle", node.node.attributes.get("selection"));
        var math = node.factory.jax.math;
        var document = node.factory.jax.document;
        var mml = node.node;
        node.setEventHandler("click", function(event) {
          if (!math.end.node) {
            math.start.node = math.end.node = math.typesetRoot;
            math.start.n = math.end.n = 0;
          }
          mml.nextToggleSelection();
          math.rerender(document);
          event.stopPropagation();
        });
      }, {}]],
      ["tooltip", [function(node, data) {
        var tip = node.childNodes[1];
        if (!tip)
          return;
        var rect = node.firstChild();
        if (tip.node.isKind("mtext")) {
          var text = tip.node.getText();
          node.adaptor.insert(node.svg("title", {}, [node.text(text)]), rect);
        } else {
          var adaptor_1 = node.adaptor;
          var container_1 = node.jax.container;
          var math = node.node.factory.create("math", {}, [node.childNodes[1].node]);
          var tool_1 = node.html("mjx-tool", {}, [node.html("mjx-tip")]);
          var hidden_1 = adaptor_1.append(rect, node.svg("foreignObject", { style: { display: "none" } }, [tool_1]));
          node.jax.processMath(math, adaptor_1.firstChild(tool_1));
          node.childNodes[1].node.parent = node.node;
          node.setEventHandler("mouseover", function(event) {
            data.stopTimers(node, data);
            data.hoverTimer.set(node, setTimeout(function() {
              adaptor_1.setStyle(tool_1, "left", "0");
              adaptor_1.setStyle(tool_1, "top", "0");
              adaptor_1.append(container_1, tool_1);
              var tbox = adaptor_1.nodeBBox(tool_1);
              var nbox = adaptor_1.nodeBBox(node.element);
              var dx = (nbox.right - tbox.left) / node.metrics.em + node.dx;
              var dy = (nbox.bottom - tbox.bottom) / node.metrics.em + node.dy;
              adaptor_1.setStyle(tool_1, "left", node.px(dx));
              adaptor_1.setStyle(tool_1, "top", node.px(dy));
            }, data.postDelay));
            event.stopPropagation();
          });
          node.setEventHandler("mouseout", function(event) {
            data.stopTimers(node, data);
            var timer = setTimeout(function() {
              return adaptor_1.append(hidden_1, tool_1);
            }, data.clearDelay);
            data.clearTimer.set(node, timer);
            event.stopPropagation();
          });
        }
      }, maction_js_2.TooltipData]],
      ["statusline", [function(node, data) {
        var tip = node.childNodes[1];
        if (!tip)
          return;
        if (tip.node.isKind("mtext")) {
          var adaptor_2 = node.adaptor;
          var text_1 = tip.node.getText();
          adaptor_2.setAttribute(node.element, "data-statusline", text_1);
          node.setEventHandler("mouseover", function(event) {
            if (data.status === null) {
              var body = adaptor_2.body(adaptor_2.document);
              data.status = adaptor_2.append(body, node.html("mjx-status", {}, [node.text(text_1)]));
            }
            event.stopPropagation();
          });
          node.setEventHandler("mouseout", function(event) {
            if (data.status) {
              adaptor_2.remove(data.status);
              data.status = null;
            }
            event.stopPropagation();
          });
        }
      }, {
        status: null
      }]]
    ]);
    return SVGmaction;
  }((0, maction_js_1.CommonMactionMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmaction = SVGmaction;
});

// node_modules/mathjax-full/js/output/svg/Notation.js
var require_Notation2 = __commonJS(function(exports) {
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
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Arrow = exports.DiagonalArrow = exports.DiagonalStrike = exports.Border2 = exports.Border = exports.RenderLine = exports.lineOffset = exports.lineData = exports.computeLineData = undefined;
  var Notation = __importStar(require_Notation());
  __exportStar(require_Notation(), exports);
  exports.computeLineData = {
    top: function(h, _d, w, t) {
      return [0, h - t, w, h - t];
    },
    right: function(h, d, w, t) {
      return [w - t, -d, w - t, h];
    },
    bottom: function(_h, d, w, t) {
      return [0, t - d, w, t - d];
    },
    left: function(h, d, _w, t) {
      return [t, -d, t, h];
    },
    vertical: function(h, d, w, _t) {
      return [w / 2, h, w / 2, -d];
    },
    horizontal: function(h, d, w, _t) {
      return [0, (h - d) / 2, w, (h - d) / 2];
    },
    up: function(h, d, w, t) {
      return [t, t - d, w - t, h - t];
    },
    down: function(h, d, w, t) {
      return [t, h - t, w - t, t - d];
    }
  };
  var lineData = function(node, kind, offset) {
    if (offset === undefined) {
      offset = "";
    }
    var _a = node.getBBox(), { h, d, w } = _a;
    var t = node.thickness / 2;
    return (0, exports.lineOffset)(exports.computeLineData[kind](h, d, w, t), node, offset);
  };
  exports.lineData = lineData;
  var lineOffset = function(data, node, offset) {
    if (offset) {
      var d = node.getOffset(offset);
      if (d) {
        if (offset === "X") {
          data[0] -= d;
          data[2] -= d;
        } else {
          data[1] -= d;
          data[3] -= d;
        }
      }
    }
    return data;
  };
  exports.lineOffset = lineOffset;
  var RenderLine = function(line, offset) {
    if (offset === undefined) {
      offset = "";
    }
    return function(node, _child) {
      var L = node.line((0, exports.lineData)(node, line, offset));
      node.adaptor.append(node.element, L);
    };
  };
  exports.RenderLine = RenderLine;
  var Border = function(side) {
    return Notation.CommonBorder(function(node, _child) {
      node.adaptor.append(node.element, node.line((0, exports.lineData)(node, side)));
    })(side);
  };
  exports.Border = Border;
  var Border2 = function(name, side1, side2) {
    return Notation.CommonBorder2(function(node, _child) {
      node.adaptor.append(node.element, node.line((0, exports.lineData)(node, side1)));
      node.adaptor.append(node.element, node.line((0, exports.lineData)(node, side2)));
    })(name, side1, side2);
  };
  exports.Border2 = Border2;
  var DiagonalStrike = function(name) {
    return Notation.CommonDiagonalStrike(function(_cname) {
      return function(node, _child) {
        node.adaptor.append(node.element, node.line((0, exports.lineData)(node, name)));
      };
    })(name);
  };
  exports.DiagonalStrike = DiagonalStrike;
  var DiagonalArrow = function(name) {
    return Notation.CommonDiagonalArrow(function(node, arrow) {
      node.adaptor.append(node.element, arrow);
    })(name);
  };
  exports.DiagonalArrow = DiagonalArrow;
  var Arrow = function(name) {
    return Notation.CommonArrow(function(node, arrow) {
      node.adaptor.append(node.element, arrow);
    })(name);
  };
  exports.Arrow = Arrow;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/menclose.js
var require_menclose = __commonJS(function(exports) {
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
  exports.SVGmenclose = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var menclose_js_1 = require_menclose3();
  var Notation = __importStar(require_Notation2());
  var menclose_js_2 = require_menclose2();
  var SVGmenclose = function(_super) {
    __extends(SVGmenclose, _super);
    function SVGmenclose() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmenclose.prototype.toSVG = function(parent) {
      var e_1, _a;
      var svg = this.standardSVGnode(parent);
      var left = this.getBBoxExtenders()[3];
      var def = {};
      if (left > 0) {
        def.transform = "translate(" + this.fixed(left) + ", 0)";
      }
      var block = this.adaptor.append(svg, this.svg("g", def));
      if (this.renderChild) {
        this.renderChild(this, block);
      } else {
        this.childNodes[0].toSVG(block);
      }
      try {
        for (var _b = __values(Object.keys(this.notations)), _c = _b.next();!_c.done; _c = _b.next()) {
          var name_1 = _c.value;
          var notation = this.notations[name_1];
          !notation.renderChild && notation.renderer(this, svg);
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
    SVGmenclose.prototype.arrow = function(W, a, double, offset, dist) {
      if (offset === undefined) {
        offset = "";
      }
      if (dist === undefined) {
        dist = 0;
      }
      var _a = this.getBBox(), { w, h, d } = _a;
      var dw = (W - w) / 2;
      var m = (h - d) / 2;
      var t = this.thickness;
      var t2 = t / 2;
      var _b = __read([t * this.arrowhead.x, t * this.arrowhead.y, t * this.arrowhead.dx], 3), x = _b[0], y = _b[1], dx = _b[2];
      var arrow = double ? this.fill("M", w + dw, m, "l", -(x + dx), y, "l", dx, t2 - y, "L", x - dw, m + t2, "l", dx, y - t2, "l", -(x + dx), -y, "l", x + dx, -y, "l", -dx, y - t2, "L", w + dw - x, m - t2, "l", -dx, t2 - y, "Z") : this.fill("M", w + dw, m, "l", -(x + dx), y, "l", dx, t2 - y, "L", -dw, m + t2, "l", 0, -t, "L", w + dw - x, m - t2, "l", -dx, t2 - y, "Z");
      var transform = [];
      if (dist) {
        transform.push(offset === "X" ? "translate(".concat(this.fixed(-dist), " 0)") : "translate(0 ".concat(this.fixed(dist), ")"));
      }
      if (a) {
        var A = this.jax.fixed(-a * 180 / Math.PI);
        transform.push("rotate(".concat(A, " ").concat(this.fixed(w / 2), " ").concat(this.fixed(m), ")"));
      }
      if (transform.length) {
        this.adaptor.setAttribute(arrow, "transform", transform.join(" "));
      }
      return arrow;
    };
    SVGmenclose.prototype.line = function(pq) {
      var _a = __read(pq, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
      return this.svg("line", {
        x1: this.fixed(x1),
        y1: this.fixed(y1),
        x2: this.fixed(x2),
        y2: this.fixed(y2),
        "stroke-width": this.fixed(this.thickness)
      });
    };
    SVGmenclose.prototype.box = function(w, h, d, r) {
      if (r === undefined) {
        r = 0;
      }
      var t = this.thickness;
      var def = {
        x: this.fixed(t / 2),
        y: this.fixed(t / 2 - d),
        width: this.fixed(w - t),
        height: this.fixed(h + d - t),
        fill: "none",
        "stroke-width": this.fixed(t)
      };
      if (r) {
        def.rx = this.fixed(r);
      }
      return this.svg("rect", def);
    };
    SVGmenclose.prototype.ellipse = function(w, h, d) {
      var t = this.thickness;
      return this.svg("ellipse", {
        rx: this.fixed((w - t) / 2),
        ry: this.fixed((h + d - t) / 2),
        cx: this.fixed(w / 2),
        cy: this.fixed((h - d) / 2),
        fill: "none",
        "stroke-width": this.fixed(t)
      });
    };
    SVGmenclose.prototype.path = function(join) {
      var _this = this;
      var P = [];
      for (var _i = 1;_i < arguments.length; _i++) {
        P[_i - 1] = arguments[_i];
      }
      return this.svg("path", {
        d: P.map(function(x) {
          return typeof x === "string" ? x : _this.fixed(x);
        }).join(" "),
        style: { "stroke-width": this.fixed(this.thickness) },
        "stroke-linecap": "round",
        "stroke-linejoin": join,
        fill: "none"
      });
    };
    SVGmenclose.prototype.fill = function() {
      var _this = this;
      var P = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        P[_i] = arguments[_i];
      }
      return this.svg("path", {
        d: P.map(function(x) {
          return typeof x === "string" ? x : _this.fixed(x);
        }).join(" ")
      });
    };
    SVGmenclose.kind = menclose_js_2.MmlMenclose.prototype.kind;
    SVGmenclose.notations = new Map([
      Notation.Border("top"),
      Notation.Border("right"),
      Notation.Border("bottom"),
      Notation.Border("left"),
      Notation.Border2("actuarial", "top", "right"),
      Notation.Border2("madruwb", "bottom", "right"),
      Notation.DiagonalStrike("up"),
      Notation.DiagonalStrike("down"),
      ["horizontalstrike", {
        renderer: Notation.RenderLine("horizontal", "Y"),
        bbox: function(node) {
          return [0, node.padding, 0, node.padding];
        }
      }],
      ["verticalstrike", {
        renderer: Notation.RenderLine("vertical", "X"),
        bbox: function(node) {
          return [node.padding, 0, node.padding, 0];
        }
      }],
      ["box", {
        renderer: function(node, _child) {
          var _a = node.getBBox(), { w, h, d } = _a;
          node.adaptor.append(node.element, node.box(w, h, d));
        },
        bbox: Notation.fullBBox,
        border: Notation.fullBorder,
        remove: "left right top bottom"
      }],
      ["roundedbox", {
        renderer: function(node, _child) {
          var _a = node.getBBox(), { w, h, d } = _a;
          var r = node.thickness + node.padding;
          node.adaptor.append(node.element, node.box(w, h, d, r));
        },
        bbox: Notation.fullBBox
      }],
      ["circle", {
        renderer: function(node, _child) {
          var _a = node.getBBox(), { w, h, d } = _a;
          node.adaptor.append(node.element, node.ellipse(w, h, d));
        },
        bbox: Notation.fullBBox
      }],
      ["phasorangle", {
        renderer: function(node, _child) {
          var _a = node.getBBox(), { w, h, d } = _a;
          var a = node.getArgMod(1.75 * node.padding, h + d)[0];
          var t = node.thickness / 2;
          var HD = h + d;
          var cos = Math.cos(a);
          node.adaptor.append(node.element, node.path("mitre", "M", w, t - d, "L", t + cos * t, t - d, "L", cos * HD + t, HD - d - t));
        },
        bbox: function(node) {
          var p = node.padding / 2;
          var t = node.thickness;
          return [2 * p, p, p + t, 3 * p + t];
        },
        border: function(node) {
          return [0, 0, node.thickness, 0];
        },
        remove: "bottom"
      }],
      Notation.Arrow("up"),
      Notation.Arrow("down"),
      Notation.Arrow("left"),
      Notation.Arrow("right"),
      Notation.Arrow("updown"),
      Notation.Arrow("leftright"),
      Notation.DiagonalArrow("updiagonal"),
      Notation.DiagonalArrow("northeast"),
      Notation.DiagonalArrow("southeast"),
      Notation.DiagonalArrow("northwest"),
      Notation.DiagonalArrow("southwest"),
      Notation.DiagonalArrow("northeastsouthwest"),
      Notation.DiagonalArrow("northwestsoutheast"),
      ["longdiv", {
        renderer: function(node, _child) {
          var _a = node.getBBox(), { w, h, d } = _a;
          var t = node.thickness / 2;
          var p = node.padding;
          node.adaptor.append(node.element, node.path("round", "M", t, t - d, "a", p - t / 2, (h + d) / 2 - 4 * t, 0, "0,1", 0, h + d - 2 * t, "L", w - t, h - t));
        },
        bbox: function(node) {
          var p = node.padding;
          var t = node.thickness;
          return [p + t, p, p, 2 * p + t / 2];
        }
      }],
      ["radical", {
        renderer: function(node, child) {
          node.msqrt.toSVG(child);
          var left = node.sqrtTRBL()[3];
          node.place(-left, 0, child);
        },
        init: function(node) {
          node.msqrt = node.createMsqrt(node.childNodes[0]);
        },
        bbox: function(node) {
          return node.sqrtTRBL();
        },
        renderChild: true
      }]
    ]);
    return SVGmenclose;
  }((0, menclose_js_1.CommonMencloseMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmenclose = SVGmenclose;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/semantics.js
var require_semantics = __commonJS(function(exports) {
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
  exports.SVGxml = exports.SVGannotationXML = exports.SVGannotation = exports.SVGsemantics = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var semantics_js_1 = require_semantics3();
  var semantics_js_2 = require_semantics2();
  var MmlNode_js_1 = require_MmlNode();
  var SVGsemantics = function(_super) {
    __extends(SVGsemantics, _super);
    function SVGsemantics() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGsemantics.prototype.toSVG = function(parent) {
      var svg = this.standardSVGnode(parent);
      if (this.childNodes.length) {
        this.childNodes[0].toSVG(svg);
      }
    };
    SVGsemantics.kind = semantics_js_2.MmlSemantics.prototype.kind;
    return SVGsemantics;
  }((0, semantics_js_1.CommonSemanticsMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGsemantics = SVGsemantics;
  var SVGannotation = function(_super) {
    __extends(SVGannotation, _super);
    function SVGannotation() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGannotation.prototype.toSVG = function(parent) {
      _super.prototype.toSVG.call(this, parent);
    };
    SVGannotation.prototype.computeBBox = function() {
      return this.bbox;
    };
    SVGannotation.kind = semantics_js_2.MmlAnnotation.prototype.kind;
    return SVGannotation;
  }(Wrapper_js_1.SVGWrapper);
  exports.SVGannotation = SVGannotation;
  var SVGannotationXML = function(_super) {
    __extends(SVGannotationXML, _super);
    function SVGannotationXML() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGannotationXML.kind = semantics_js_2.MmlAnnotationXML.prototype.kind;
    SVGannotationXML.styles = {
      "foreignObject[data-mjx-xml]": {
        "font-family": "initial",
        "line-height": "normal",
        overflow: "visible"
      }
    };
    return SVGannotationXML;
  }(Wrapper_js_1.SVGWrapper);
  exports.SVGannotationXML = SVGannotationXML;
  var SVGxml = function(_super) {
    __extends(SVGxml, _super);
    function SVGxml() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGxml.prototype.toSVG = function(parent) {
      var xml = this.adaptor.clone(this.node.getXML());
      var em = this.jax.math.metrics.em * this.jax.math.metrics.scale;
      var scale = this.fixed(1 / em);
      var _a = this.getBBox(), { w, h, d } = _a;
      this.element = this.adaptor.append(parent, this.svg("foreignObject", {
        "data-mjx-xml": true,
        y: this.jax.fixed(-h * em) + "px",
        width: this.jax.fixed(w * em) + "px",
        height: this.jax.fixed((h + d) * em) + "px",
        transform: "scale(".concat(scale, ") matrix(1 0 0 -1 0 0)")
      }, [xml]));
    };
    SVGxml.prototype.computeBBox = function(bbox, _recompute) {
      if (_recompute === undefined) {
        _recompute = false;
      }
      var _a = this.jax.measureXMLnode(this.node.getXML()), { w, h, d } = _a;
      bbox.w = w;
      bbox.h = h;
      bbox.d = d;
    };
    SVGxml.prototype.getStyles = function() {};
    SVGxml.prototype.getScale = function() {};
    SVGxml.prototype.getVariant = function() {};
    SVGxml.kind = MmlNode_js_1.XMLNode.prototype.kind;
    SVGxml.autoStyle = false;
    return SVGxml;
  }(Wrapper_js_1.SVGWrapper);
  exports.SVGxml = SVGxml;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/mglyph.js
var require_mglyph = __commonJS(function(exports) {
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
  exports.SVGmglyph = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var mglyph_js_1 = require_mglyph3();
  var mglyph_js_2 = require_mglyph2();
  var SVGmglyph = function(_super) {
    __extends(SVGmglyph, _super);
    function SVGmglyph() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmglyph.prototype.toSVG = function(parent) {
      var svg = this.standardSVGnode(parent);
      if (this.charWrapper) {
        this.charWrapper.toSVG(svg);
        return;
      }
      var _a = this.node.attributes.getList("src", "alt"), { src, alt } = _a;
      var h = this.fixed(this.height);
      var w = this.fixed(this.width);
      var y = this.fixed(this.height + (this.valign || 0));
      var properties = {
        width: w,
        height: h,
        transform: "translate(0 " + y + ") matrix(1 0 0 -1 0 0)",
        preserveAspectRatio: "none",
        "aria-label": alt,
        href: src
      };
      var img = this.svg("image", properties);
      this.adaptor.append(svg, img);
    };
    SVGmglyph.kind = mglyph_js_2.MmlMglyph.prototype.kind;
    return SVGmglyph;
  }((0, mglyph_js_1.CommonMglyphMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmglyph = SVGmglyph;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/TeXAtom.js
var require_TeXAtom = __commonJS(function(exports) {
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
  exports.SVGTeXAtom = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var TeXAtom_js_1 = require_TeXAtom3();
  var TeXAtom_js_2 = require_TeXAtom2();
  var MmlNode_js_1 = require_MmlNode();
  var SVGTeXAtom = function(_super) {
    __extends(SVGTeXAtom, _super);
    function SVGTeXAtom() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGTeXAtom.prototype.toSVG = function(parent) {
      _super.prototype.toSVG.call(this, parent);
      this.adaptor.setAttribute(this.element, "data-mjx-texclass", MmlNode_js_1.TEXCLASSNAMES[this.node.texClass]);
      if (this.node.texClass === MmlNode_js_1.TEXCLASS.VCENTER) {
        var bbox = this.childNodes[0].getBBox();
        var { h, d } = bbox;
        var a = this.font.params.axis_height;
        var dh = (h + d) / 2 + a - h;
        var translate = "translate(0 " + this.fixed(dh) + ")";
        this.adaptor.setAttribute(this.element, "transform", translate);
      }
    };
    SVGTeXAtom.kind = TeXAtom_js_2.TeXAtom.prototype.kind;
    return SVGTeXAtom;
  }((0, TeXAtom_js_1.CommonTeXAtomMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGTeXAtom = SVGTeXAtom;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/TextNode.js
var require_TextNode = __commonJS(function(exports) {
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
  exports.SVGTextNode = undefined;
  var MmlNode_js_1 = require_MmlNode();
  var Wrapper_js_1 = require_Wrapper3();
  var TextNode_js_1 = require_TextNode2();
  var SVGTextNode = function(_super) {
    __extends(SVGTextNode, _super);
    function SVGTextNode() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGTextNode.prototype.toSVG = function(parent) {
      var e_1, _a;
      var text = this.node.getText();
      var variant = this.parent.variant;
      if (text.length === 0)
        return;
      if (variant === "-explicitFont") {
        this.element = this.adaptor.append(parent, this.jax.unknownText(text, variant));
      } else {
        var chars = this.remappedText(text, variant);
        if (this.parent.childNodes.length > 1) {
          parent = this.element = this.adaptor.append(parent, this.svg("g", { "data-mml-node": "text" }));
        }
        var x = 0;
        try {
          for (var chars_1 = __values(chars), chars_1_1 = chars_1.next();!chars_1_1.done; chars_1_1 = chars_1.next()) {
            var n = chars_1_1.value;
            x += this.placeChar(n, x, 0, parent, variant);
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
      }
    };
    SVGTextNode.kind = MmlNode_js_1.TextNode.prototype.kind;
    SVGTextNode.styles = {
      'mjx-container[jax="SVG"] path[data-c], mjx-container[jax="SVG"] use[data-c]': {
        "stroke-width": 3
      }
    };
    return SVGTextNode;
  }((0, TextNode_js_1.CommonTextNodeMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGTextNode = SVGTextNode;
});

// node_modules/mathjax-full/js/output/svg/Wrappers.js
var require_Wrappers = __commonJS(function(exports) {
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SVGWrappers = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var math_js_1 = require_math();
  var mrow_js_1 = require_mrow();
  var mi_js_1 = require_mi();
  var mo_js_1 = require_mo();
  var mn_js_1 = require_mn();
  var ms_js_1 = require_ms();
  var mtext_js_1 = require_mtext();
  var merror_js_1 = require_merror();
  var mspace_js_1 = require_mspace();
  var mpadded_js_1 = require_mpadded();
  var mphantom_js_1 = require_mphantom();
  var mfrac_js_1 = require_mfrac();
  var msqrt_js_1 = require_msqrt();
  var mroot_js_1 = require_mroot();
  var mfenced_js_1 = require_mfenced();
  var msubsup_js_1 = require_msubsup();
  var munderover_js_1 = require_munderover();
  var mmultiscripts_js_1 = require_mmultiscripts();
  var mtable_js_1 = require_mtable();
  var mtr_js_1 = require_mtr();
  var mtd_js_1 = require_mtd();
  var maction_js_1 = require_maction();
  var menclose_js_1 = require_menclose();
  var semantics_js_1 = require_semantics();
  var mglyph_js_1 = require_mglyph();
  var TeXAtom_js_1 = require_TeXAtom();
  var TextNode_js_1 = require_TextNode();
  exports.SVGWrappers = (_a = {}, _a[math_js_1.SVGmath.kind] = math_js_1.SVGmath, _a[mrow_js_1.SVGmrow.kind] = mrow_js_1.SVGmrow, _a[mrow_js_1.SVGinferredMrow.kind] = mrow_js_1.SVGinferredMrow, _a[mi_js_1.SVGmi.kind] = mi_js_1.SVGmi, _a[mo_js_1.SVGmo.kind] = mo_js_1.SVGmo, _a[mn_js_1.SVGmn.kind] = mn_js_1.SVGmn, _a[ms_js_1.SVGms.kind] = ms_js_1.SVGms, _a[mtext_js_1.SVGmtext.kind] = mtext_js_1.SVGmtext, _a[merror_js_1.SVGmerror.kind] = merror_js_1.SVGmerror, _a[mspace_js_1.SVGmspace.kind] = mspace_js_1.SVGmspace, _a[mpadded_js_1.SVGmpadded.kind] = mpadded_js_1.SVGmpadded, _a[mphantom_js_1.SVGmphantom.kind] = mphantom_js_1.SVGmphantom, _a[mfrac_js_1.SVGmfrac.kind] = mfrac_js_1.SVGmfrac, _a[msqrt_js_1.SVGmsqrt.kind] = msqrt_js_1.SVGmsqrt, _a[mroot_js_1.SVGmroot.kind] = mroot_js_1.SVGmroot, _a[mfenced_js_1.SVGmfenced.kind] = mfenced_js_1.SVGmfenced, _a[msubsup_js_1.SVGmsub.kind] = msubsup_js_1.SVGmsub, _a[msubsup_js_1.SVGmsup.kind] = msubsup_js_1.SVGmsup, _a[msubsup_js_1.SVGmsubsup.kind] = msubsup_js_1.SVGmsubsup, _a[munderover_js_1.SVGmunder.kind] = munderover_js_1.SVGmunder, _a[munderover_js_1.SVGmover.kind] = munderover_js_1.SVGmover, _a[munderover_js_1.SVGmunderover.kind] = munderover_js_1.SVGmunderover, _a[mmultiscripts_js_1.SVGmmultiscripts.kind] = mmultiscripts_js_1.SVGmmultiscripts, _a[mtable_js_1.SVGmtable.kind] = mtable_js_1.SVGmtable, _a[mtr_js_1.SVGmtr.kind] = mtr_js_1.SVGmtr, _a[mtr_js_1.SVGmlabeledtr.kind] = mtr_js_1.SVGmlabeledtr, _a[mtd_js_1.SVGmtd.kind] = mtd_js_1.SVGmtd, _a[maction_js_1.SVGmaction.kind] = maction_js_1.SVGmaction, _a[menclose_js_1.SVGmenclose.kind] = menclose_js_1.SVGmenclose, _a[semantics_js_1.SVGsemantics.kind] = semantics_js_1.SVGsemantics, _a[semantics_js_1.SVGannotation.kind] = semantics_js_1.SVGannotation, _a[semantics_js_1.SVGannotationXML.kind] = semantics_js_1.SVGannotationXML, _a[semantics_js_1.SVGxml.kind] = semantics_js_1.SVGxml, _a[mglyph_js_1.SVGmglyph.kind] = mglyph_js_1.SVGmglyph, _a[TeXAtom_js_1.SVGTeXAtom.kind] = TeXAtom_js_1.SVGTeXAtom, _a[TextNode_js_1.SVGTextNode.kind] = TextNode_js_1.SVGTextNode, _a[Wrapper_js_1.SVGWrapper.kind] = Wrapper_js_1.SVGWrapper, _a);
});

// node_modules/mathjax-full/js/output/svg/WrapperFactory.js
var require_WrapperFactory3 = __commonJS(function(exports) {
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
  exports.SVGWrapperFactory = undefined;
  var WrapperFactory_js_1 = require_WrapperFactory2();
  var Wrappers_js_1 = require_Wrappers();
  var SVGWrapperFactory = function(_super) {
    __extends(SVGWrapperFactory, _super);
    function SVGWrapperFactory() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.jax = null;
      return _this;
    }
    SVGWrapperFactory.defaultNodes = Wrappers_js_1.SVGWrappers;
    return SVGWrapperFactory;
  }(WrapperFactory_js_1.CommonWrapperFactory);
  exports.SVGWrapperFactory = SVGWrapperFactory;
});

// node_modules/mathjax-full/js/output/common/fonts/tex.js
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
  exports.CommonTeXFontMixin = undefined;
  function CommonTeXFontMixin(Base) {
    var _a;
    return _a = function(_super) {
      __extends(class_1, _super);
      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      class_1.prototype.getDelimiterData = function(n) {
        return this.getChar("-smallop", n) || this.getChar("-size4", n);
      };
      return class_1;
    }(Base), _a.NAME = "TeX", _a.defaultVariants = __spreadArray(__spreadArray([], __read(Base.defaultVariants), false), [
      ["-smallop", "normal"],
      ["-largeop", "normal"],
      ["-size3", "normal"],
      ["-size4", "normal"],
      ["-tex-calligraphic", "italic"],
      ["-tex-bold-calligraphic", "bold-italic"],
      ["-tex-oldstyle", "normal"],
      ["-tex-bold-oldstyle", "bold"],
      ["-tex-mathit", "italic"],
      ["-tex-variant", "normal"]
    ], false), _a.defaultCssFonts = __assign(__assign({}, Base.defaultCssFonts), { "-smallop": ["serif", false, false], "-largeop": ["serif", false, false], "-size3": ["serif", false, false], "-size4": ["serif", false, false], "-tex-calligraphic": ["cursive", true, false], "-tex-bold-calligraphic": ["cursive", true, true], "-tex-oldstyle": ["serif", false, false], "-tex-bold-oldstyle": ["serif", false, true], "-tex-mathit": ["serif", true, false] }), _a.defaultSizeVariants = ["normal", "-smallop", "-largeop", "-size3", "-size4", "-tex-variant"], _a.defaultStretchVariants = ["-size4"], _a;
  }
  exports.CommonTeXFontMixin = CommonTeXFontMixin;
});

// node_modules/mathjax-full/js/output/svg/fonts/tex/normal.js
var exports_normal = {};
__export(exports_normal, {
  normal: () => normal
});
var import_FontData, import_normal, normal;
var init_normal = __esm(() => {
  init_normal_paths_0();
  init_normal_paths_1();
  init_normal_paths_2();
  init_normal_paths_3();
  import_FontData = __toESM(require_FontData());
  import_normal = __toESM(require_normal());
  normal = import_FontData.AddPaths(import_normal.normal, Object.assign({}, normal_paths_0_default, normal_paths_1_default, normal_paths_2_default, normal_paths_3_default), {
    8243: "′′",
    8244: "′′′",
    8246: "‵‵",
    8247: "‵‵‵",
    8279: "′′′′",
    8708: "∄",
    8716: "∌",
    8772: "≄",
    8777: "≉",
    8802: "≢",
    8813: "≭",
    8820: "≴",
    8821: "≵",
    8824: "≸",
    8825: "≹",
    8836: "⊄",
    8837: "⊅",
    8930: "⋢",
    8931: "⋣",
    10764: "∬∬"
  });
});

// node_modules/mathjax-full/js/output/common/fonts/tex/delimiters.js
var require_delimiters = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.delimiters = exports.VSIZES = exports.HDW3 = exports.HDW2 = exports.HDW1 = undefined;
  var FontData_js_1 = require_FontData2();
  exports.HDW1 = [0.75, 0.25, 0.875];
  exports.HDW2 = [0.85, 0.349, 0.667];
  exports.HDW3 = [0.583, 0.082, 0.5];
  exports.VSIZES = [1, 1.2, 1.8, 2.4, 3];
  var DELIM2F = { c: 47, dir: FontData_js_1.V, sizes: exports.VSIZES };
  var DELIMAF = { c: 175, dir: FontData_js_1.H, sizes: [0.5], stretch: [0, 175], HDW: [0.59, -0.544, 0.5] };
  var DELIM2C6 = { c: 710, dir: FontData_js_1.H, sizes: [0.5, 0.556, 1, 1.444, 1.889] };
  var DELIM2DC = { c: 732, dir: FontData_js_1.H, sizes: [0.5, 0.556, 1, 1.444, 1.889] };
  var DELIM2013 = { c: 8211, dir: FontData_js_1.H, sizes: [0.5], stretch: [0, 8211], HDW: [0.285, -0.248, 0.5] };
  var DELIM2190 = { c: 8592, dir: FontData_js_1.H, sizes: [1], stretch: [8592, 8722], HDW: exports.HDW3 };
  var DELIM2192 = { c: 8594, dir: FontData_js_1.H, sizes: [1], stretch: [0, 8722, 8594], HDW: exports.HDW3 };
  var DELIM2194 = { c: 8596, dir: FontData_js_1.H, sizes: [1], stretch: [8592, 8722, 8594], HDW: exports.HDW3 };
  var DELIM21A4 = { c: 8612, dir: FontData_js_1.H, stretch: [8592, 8722, 8739], HDW: exports.HDW3, min: 1.278 };
  var DELIM21A6 = { c: 8614, dir: FontData_js_1.H, sizes: [1], stretch: [8739, 8722, 8594], HDW: exports.HDW3 };
  var DELIM21D0 = { c: 8656, dir: FontData_js_1.H, sizes: [1], stretch: [8656, 61], HDW: exports.HDW3 };
  var DELIM21D2 = { c: 8658, dir: FontData_js_1.H, sizes: [1], stretch: [0, 61, 8658], HDW: exports.HDW3 };
  var DELIM21D4 = { c: 8660, dir: FontData_js_1.H, sizes: [1], stretch: [8656, 61, 8658], HDW: exports.HDW3 };
  var DELIM2212 = { c: 8722, dir: FontData_js_1.H, sizes: [0.778], stretch: [0, 8722], HDW: exports.HDW3 };
  var DELIM2223 = { c: 8739, dir: FontData_js_1.V, sizes: [1], stretch: [0, 8739], HDW: [0.627, 0.015, 0.333] };
  var DELIM23DC = {
    c: 9180,
    dir: FontData_js_1.H,
    sizes: [0.778, 1],
    schar: [8994, 8994],
    variants: [5, 0],
    stretch: [57680, 57684, 57681],
    HDW: [0.32, 0.2, 0.5]
  };
  var DELIM23DD = {
    c: 9181,
    dir: FontData_js_1.H,
    sizes: [0.778, 1],
    schar: [8995, 8995],
    variants: [5, 0],
    stretch: [57682, 57684, 57683],
    HDW: [0.32, 0.2, 0.5]
  };
  var DELIM23DE = { c: 9182, dir: FontData_js_1.H, stretch: [57680, 57684, 57681, 57685], HDW: [0.32, 0.2, 0.5], min: 1.8 };
  var DELIM23DF = { c: 9183, dir: FontData_js_1.H, stretch: [57682, 57684, 57683, 57686], HDW: [0.32, 0.2, 0.5], min: 1.8 };
  var DELIM27E8 = { c: 10216, dir: FontData_js_1.V, sizes: exports.VSIZES };
  var DELIM27E9 = { c: 10217, dir: FontData_js_1.V, sizes: exports.VSIZES };
  var DELIM2906 = { c: 10502, dir: FontData_js_1.H, stretch: [8656, 61, 8739], HDW: exports.HDW3, min: 1.278 };
  var DELIM2907 = { c: 10503, dir: FontData_js_1.H, stretch: [8872, 61, 8658], HDW: exports.HDW3, min: 1.278 };
  exports.delimiters = {
    40: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9115, 9116, 9117], HDW: [0.85, 0.349, 0.875] },
    41: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9118, 9119, 9120], HDW: [0.85, 0.349, 0.875] },
    45: DELIM2212,
    47: DELIM2F,
    61: { dir: FontData_js_1.H, sizes: [0.778], stretch: [0, 61], HDW: exports.HDW3 },
    91: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9121, 9122, 9123], HDW: exports.HDW2 },
    92: { dir: FontData_js_1.V, sizes: exports.VSIZES },
    93: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9124, 9125, 9126], HDW: exports.HDW2 },
    94: DELIM2C6,
    95: DELIM2013,
    123: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9127, 9130, 9129, 9128], HDW: [0.85, 0.349, 0.889] },
    124: { dir: FontData_js_1.V, sizes: [1], stretch: [0, 8739], HDW: [0.75, 0.25, 0.333] },
    125: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9131, 9130, 9133, 9132], HDW: [0.85, 0.349, 0.889] },
    126: DELIM2DC,
    175: DELIMAF,
    710: DELIM2C6,
    713: DELIMAF,
    732: DELIM2DC,
    770: DELIM2C6,
    771: DELIM2DC,
    818: DELIM2013,
    8211: DELIM2013,
    8212: DELIM2013,
    8213: DELIM2013,
    8214: { dir: FontData_js_1.V, sizes: [0.602, 1], schar: [0, 8741], variants: [1, 0], stretch: [0, 8741], HDW: [0.602, 0, 0.556] },
    8215: DELIM2013,
    8254: DELIMAF,
    8407: DELIM2192,
    8592: DELIM2190,
    8593: { dir: FontData_js_1.V, sizes: [0.888], stretch: [8593, 9168], HDW: [0.6, 0, 0.667] },
    8594: DELIM2192,
    8595: { dir: FontData_js_1.V, sizes: [0.888], stretch: [0, 9168, 8595], HDW: [0.6, 0, 0.667] },
    8596: DELIM2194,
    8597: { dir: FontData_js_1.V, sizes: [1.044], stretch: [8593, 9168, 8595], HDW: exports.HDW1 },
    8606: { dir: FontData_js_1.H, sizes: [1], stretch: [8606, 8722], HDW: exports.HDW3 },
    8608: { dir: FontData_js_1.H, sizes: [1], stretch: [0, 8722, 8608], HDW: exports.HDW3 },
    8612: DELIM21A4,
    8613: { dir: FontData_js_1.V, stretch: [8593, 9168, 8869], HDW: exports.HDW1, min: 1.555 },
    8614: DELIM21A6,
    8615: { dir: FontData_js_1.V, stretch: [8868, 9168, 8595], HDW: exports.HDW1, min: 1.555 },
    8624: { dir: FontData_js_1.V, sizes: [0.722], stretch: [8624, 9168], HDW: exports.HDW1 },
    8625: { dir: FontData_js_1.V, sizes: [0.722], stretch: [8625, 9168], HDW: exports.HDW1 },
    8636: { dir: FontData_js_1.H, sizes: [1], stretch: [8636, 8722], HDW: exports.HDW3 },
    8637: { dir: FontData_js_1.H, sizes: [1], stretch: [8637, 8722], HDW: exports.HDW3 },
    8638: { dir: FontData_js_1.V, sizes: [0.888], stretch: [8638, 9168], HDW: exports.HDW1 },
    8639: { dir: FontData_js_1.V, sizes: [0.888], stretch: [8639, 9168], HDW: exports.HDW1 },
    8640: { dir: FontData_js_1.H, sizes: [1], stretch: [0, 8722, 8640], HDW: exports.HDW3 },
    8641: { dir: FontData_js_1.H, sizes: [1], stretch: [0, 8722, 8641], HDW: exports.HDW3 },
    8642: { dir: FontData_js_1.V, sizes: [0.888], stretch: [0, 9168, 8642], HDW: exports.HDW1 },
    8643: { dir: FontData_js_1.V, sizes: [0.888], stretch: [0, 9168, 8643], HDW: exports.HDW1 },
    8656: DELIM21D0,
    8657: { dir: FontData_js_1.V, sizes: [0.888], stretch: [8657, 8214], HDW: [0.599, 0, 0.778] },
    8658: DELIM21D2,
    8659: { dir: FontData_js_1.V, sizes: [0.888], stretch: [0, 8214, 8659], HDW: [0.6, 0, 0.778] },
    8660: DELIM21D4,
    8661: { dir: FontData_js_1.V, sizes: [1.044], stretch: [8657, 8214, 8659], HDW: [0.75, 0.25, 0.778] },
    8666: { dir: FontData_js_1.H, sizes: [1], stretch: [8666, 8801], HDW: [0.464, -0.036, 0.5] },
    8667: { dir: FontData_js_1.H, sizes: [1], stretch: [0, 8801, 8667], HDW: [0.464, -0.036, 0.5] },
    8722: DELIM2212,
    8725: DELIM2F,
    8730: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [57345, 57344, 9143], fullExt: [0.65, 2.3], HDW: [0.85, 0.35, 1.056] },
    8739: DELIM2223,
    8741: { dir: FontData_js_1.V, sizes: [1], stretch: [0, 8741], HDW: [0.627, 0.015, 0.556] },
    8968: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9121, 9122], HDW: exports.HDW2 },
    8969: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9124, 9125], HDW: exports.HDW2 },
    8970: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [0, 9122, 9123], HDW: exports.HDW2 },
    8971: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [0, 9125, 9126], HDW: exports.HDW2 },
    8978: DELIM23DC,
    8994: DELIM23DC,
    8995: DELIM23DD,
    9001: DELIM27E8,
    9002: DELIM27E9,
    9130: { dir: FontData_js_1.V, sizes: [0.32], stretch: [9130, 9130, 9130], HDW: [0.29, 0.015, 0.889] },
    9135: DELIM2013,
    9136: { dir: FontData_js_1.V, sizes: [0.989], stretch: [9127, 9130, 9133], HDW: [0.75, 0.25, 0.889] },
    9137: { dir: FontData_js_1.V, sizes: [0.989], stretch: [9131, 9130, 9129], HDW: [0.75, 0.25, 0.889] },
    9140: { dir: FontData_js_1.H, stretch: [9484, 8722, 9488], HDW: exports.HDW3, min: 1 },
    9141: { dir: FontData_js_1.H, stretch: [9492, 8722, 9496], HDW: exports.HDW3, min: 1 },
    9168: { dir: FontData_js_1.V, sizes: [0.602, 1], schar: [0, 8739], variants: [1, 0], stretch: [0, 8739], HDW: [0.602, 0, 0.333] },
    9180: DELIM23DC,
    9181: DELIM23DD,
    9182: DELIM23DE,
    9183: DELIM23DF,
    9184: { dir: FontData_js_1.H, stretch: [714, 713, 715], HDW: [0.59, -0.544, 0.5], min: 1 },
    9185: { dir: FontData_js_1.H, stretch: [715, 713, 714], HDW: [0.59, -0.544, 0.5], min: 1 },
    9472: DELIM2013,
    10072: DELIM2223,
    10216: DELIM27E8,
    10217: DELIM27E9,
    10222: { dir: FontData_js_1.V, sizes: [0.989], stretch: [9127, 9130, 9129], HDW: [0.75, 0.25, 0.889] },
    10223: { dir: FontData_js_1.V, sizes: [0.989], stretch: [9131, 9130, 9133], HDW: [0.75, 0.25, 0.889] },
    10229: DELIM2190,
    10230: DELIM2192,
    10231: DELIM2194,
    10232: DELIM21D0,
    10233: DELIM21D2,
    10234: DELIM21D4,
    10235: DELIM21A4,
    10236: DELIM21A6,
    10237: DELIM2906,
    10238: DELIM2907,
    10502: DELIM2906,
    10503: DELIM2907,
    10574: { dir: FontData_js_1.H, stretch: [8636, 8722, 8640], HDW: exports.HDW3, min: 2 },
    10575: { dir: FontData_js_1.V, stretch: [8638, 9168, 8642], HDW: exports.HDW1, min: 1.776 },
    10576: { dir: FontData_js_1.H, stretch: [8637, 8722, 8641], HDW: exports.HDW3, min: 2 },
    10577: { dir: FontData_js_1.V, stretch: [8639, 9168, 8643], HDW: exports.HDW1, min: 0.5 },
    10586: { dir: FontData_js_1.H, stretch: [8636, 8722, 8739], HDW: exports.HDW3, min: 1.278 },
    10587: { dir: FontData_js_1.H, stretch: [8739, 8722, 8640], HDW: exports.HDW3, min: 1.278 },
    10588: { dir: FontData_js_1.V, stretch: [8638, 9168, 8869], HDW: exports.HDW1, min: 1.556 },
    10589: { dir: FontData_js_1.V, stretch: [8868, 9168, 8642], HDW: exports.HDW1, min: 1.556 },
    10590: { dir: FontData_js_1.H, stretch: [8637, 8722, 8739], HDW: exports.HDW3, min: 1.278 },
    10591: { dir: FontData_js_1.H, stretch: [8739, 8722, 8641], HDW: exports.HDW3, min: 1.278 },
    10592: { dir: FontData_js_1.V, stretch: [8639, 9168, 8869], HDW: exports.HDW1, min: 1.776 },
    10593: { dir: FontData_js_1.V, stretch: [8868, 9168, 8643], HDW: exports.HDW1, min: 1.776 },
    12296: DELIM27E8,
    12297: DELIM27E9,
    65079: DELIM23DE,
    65080: DELIM23DF
  };
});

// node_modules/mathjax-full/js/output/svg/fonts/tex.js
var require_tex2 = __commonJS(function(exports) {
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
  exports.TeXFont = undefined;
  var FontData_js_1 = require_FontData();
  var tex_js_1 = require_tex();
  var bold_italic_js_1 = require_bold_italic();
  var bold_js_1 = require_bold();
  var double_struck_js_1 = require_double_struck();
  var fraktur_bold_js_1 = require_fraktur_bold();
  var fraktur_js_1 = require_fraktur();
  var italic_js_1 = require_italic();
  var largeop_js_1 = require_largeop();
  var monospace_js_1 = require_monospace();
  var normal_js_1 = (init_normal(), __toCommonJS(exports_normal));
  var sans_serif_bold_italic_js_1 = require_sans_serif_bold_italic();
  var sans_serif_bold_js_1 = require_sans_serif_bold();
  var sans_serif_italic_js_1 = require_sans_serif_italic();
  var sans_serif_js_1 = require_sans_serif();
  var script_bold_js_1 = require_script_bold();
  var script_js_1 = require_script();
  var smallop_js_1 = require_smallop();
  var tex_calligraphic_bold_js_1 = require_tex_calligraphic_bold();
  var tex_calligraphic_js_1 = require_tex_calligraphic();
  var tex_mathit_js_1 = require_tex_mathit();
  var tex_oldstyle_bold_js_1 = require_tex_oldstyle_bold();
  var tex_oldstyle_js_1 = require_tex_oldstyle();
  var tex_size3_js_1 = require_tex_size3();
  var tex_size4_js_1 = require_tex_size4();
  var tex_variant_js_1 = require_tex_variant();
  var delimiters_js_1 = require_delimiters();
  var TeXFont = function(_super) {
    __extends(TeXFont, _super);
    function TeXFont(options) {
      var e_1, _a;
      if (options === undefined) {
        options = null;
      }
      var _this = _super.call(this, options) || this;
      var CLASS = _this.constructor;
      try {
        for (var _b = __values(Object.keys(CLASS.variantCacheIds)), _c = _b.next();!_c.done; _c = _b.next()) {
          var variant = _c.value;
          _this.variant[variant].cacheID = "TEX-" + CLASS.variantCacheIds[variant];
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
    TeXFont.defaultDelimiters = delimiters_js_1.delimiters;
    TeXFont.defaultChars = {
      normal: normal_js_1.normal,
      bold: bold_js_1.bold,
      italic: italic_js_1.italic,
      "bold-italic": bold_italic_js_1.boldItalic,
      "double-struck": double_struck_js_1.doubleStruck,
      fraktur: fraktur_js_1.fraktur,
      "bold-fraktur": fraktur_bold_js_1.frakturBold,
      script: script_js_1.script,
      "bold-script": script_bold_js_1.scriptBold,
      "sans-serif": sans_serif_js_1.sansSerif,
      "bold-sans-serif": sans_serif_bold_js_1.sansSerifBold,
      "sans-serif-italic": sans_serif_italic_js_1.sansSerifItalic,
      "sans-serif-bold-italic": sans_serif_bold_italic_js_1.sansSerifBoldItalic,
      monospace: monospace_js_1.monospace,
      "-smallop": smallop_js_1.smallop,
      "-largeop": largeop_js_1.largeop,
      "-size3": tex_size3_js_1.texSize3,
      "-size4": tex_size4_js_1.texSize4,
      "-tex-calligraphic": tex_calligraphic_js_1.texCalligraphic,
      "-tex-bold-calligraphic": tex_calligraphic_bold_js_1.texCalligraphicBold,
      "-tex-mathit": tex_mathit_js_1.texMathit,
      "-tex-oldstyle": tex_oldstyle_js_1.texOldstyle,
      "-tex-bold-oldstyle": tex_oldstyle_bold_js_1.texOldstyleBold,
      "-tex-variant": tex_variant_js_1.texVariant
    };
    TeXFont.variantCacheIds = {
      normal: "N",
      bold: "B",
      italic: "I",
      "bold-italic": "BI",
      "double-struck": "D",
      fraktur: "F",
      "bold-fraktur": "BF",
      script: "S",
      "bold-script": "BS",
      "sans-serif": "SS",
      "bold-sans-serif": "BSS",
      "sans-serif-italic": "SSI",
      "sans-serif-bold-italic": "SSBI",
      monospace: "M",
      "-smallop": "SO",
      "-largeop": "LO",
      "-size3": "S3",
      "-size4": "S4",
      "-tex-calligraphic": "C",
      "-tex-bold-calligraphic": "BC",
      "-tex-mathit": "MI",
      "-tex-oldstyle": "OS",
      "-tex-bold-oldstyle": "BOS",
      "-tex-variant": "V"
    };
    return TeXFont;
  }((0, tex_js_1.CommonTeXFontMixin)(FontData_js_1.SVGFontData));
  exports.TeXFont = TeXFont;
});

// node_modules/mathjax-full/js/output/svg/FontCache.js
var require_FontCache = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FontCache = undefined;
  var FontCache = function() {
    function FontCache(jax) {
      this.cache = new Map;
      this.defs = null;
      this.localID = "";
      this.nextID = 0;
      this.jax = jax;
    }
    FontCache.prototype.cachePath = function(variant, C, path) {
      var id = "MJX-" + this.localID + (this.jax.font.getVariant(variant).cacheID || "") + "-" + C;
      if (!this.cache.has(id)) {
        this.cache.set(id, path);
        this.jax.adaptor.append(this.defs, this.jax.svg("path", { id, d: path }));
      }
      return id;
    };
    FontCache.prototype.clearLocalID = function() {
      this.localID = "";
    };
    FontCache.prototype.useLocalID = function(id) {
      if (id === undefined) {
        id = null;
      }
      this.localID = (id == null ? ++this.nextID : id) + (id === "" ? "" : "-");
    };
    FontCache.prototype.clearCache = function() {
      this.cache = new Map;
      this.defs = this.jax.svg("defs");
    };
    FontCache.prototype.getCache = function() {
      return this.defs;
    };
    return FontCache;
  }();
  exports.FontCache = FontCache;
});

// node_modules/mathjax-full/js/output/svg.js
var require_svg = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SVG = exports.XLINKNS = exports.SVGNS = undefined;
  var OutputJax_js_1 = require_OutputJax();
  var WrapperFactory_js_1 = require_WrapperFactory3();
  var tex_js_1 = require_tex2();
  var FontCache_js_1 = require_FontCache();
  var string_js_1 = require_string();
  var lengths_js_1 = require_lengths();
  exports.SVGNS = "http://www.w3.org/2000/svg";
  exports.XLINKNS = "http://www.w3.org/1999/xlink";
  var SVG = function(_super) {
    __extends(SVG, _super);
    function SVG(options) {
      if (options === undefined) {
        options = null;
      }
      var _this = _super.call(this, options, WrapperFactory_js_1.SVGWrapperFactory, tex_js_1.TeXFont) || this;
      _this.minwidth = 0;
      _this.shift = 0;
      _this.container = null;
      _this.svgStyles = null;
      _this.fontCache = new FontCache_js_1.FontCache(_this);
      return _this;
    }
    SVG.prototype.initialize = function() {
      if (this.options.fontCache === "global") {
        this.fontCache.clearCache();
      }
    };
    SVG.prototype.clearFontCache = function() {
      this.fontCache.clearCache();
    };
    SVG.prototype.reset = function() {
      this.clearFontCache();
    };
    SVG.prototype.setScale = function(node) {
      if (this.options.scale !== 1) {
        this.adaptor.setStyle(node, "fontSize", (0, lengths_js_1.percent)(this.options.scale));
      }
    };
    SVG.prototype.escaped = function(math, html) {
      this.setDocument(html);
      return this.html("span", {}, [this.text(math.math)]);
    };
    SVG.prototype.styleSheet = function(html) {
      if (this.svgStyles) {
        return this.svgStyles;
      }
      var sheet = this.svgStyles = _super.prototype.styleSheet.call(this, html);
      this.adaptor.setAttribute(sheet, "id", SVG.STYLESHEETID);
      return sheet;
    };
    SVG.prototype.pageElements = function(html) {
      if (this.options.fontCache === "global" && !this.findCache(html)) {
        return this.svg("svg", { id: SVG.FONTCACHEID, style: { display: "none" } }, [this.fontCache.getCache()]);
      }
      return null;
    };
    SVG.prototype.findCache = function(html) {
      var adaptor = this.adaptor;
      var svgs = adaptor.tags(adaptor.body(html.document), "svg");
      for (var i = svgs.length - 1;i >= 0; i--) {
        if (this.adaptor.getAttribute(svgs[i], "id") === SVG.FONTCACHEID) {
          return true;
        }
      }
      return false;
    };
    SVG.prototype.processMath = function(math, parent) {
      var container = this.container;
      this.container = parent;
      var wrapper = this.factory.wrap(math);
      var _a = __read(this.createRoot(wrapper), 2), svg = _a[0], g = _a[1];
      this.typesetSVG(wrapper, svg, g);
      this.container = container;
    };
    SVG.prototype.createRoot = function(wrapper) {
      var _a = wrapper.getOuterBBox(), { w, h, d, pwidth } = _a;
      var px = wrapper.metrics.em / 1000;
      var W = Math.max(w, px);
      var H = Math.max(h + d, px);
      var g = this.svg("g", {
        stroke: "currentColor",
        fill: "currentColor",
        "stroke-width": 0,
        transform: "scale(1,-1)"
      });
      var adaptor = this.adaptor;
      var svg = adaptor.append(this.container, this.svg("svg", {
        xmlns: exports.SVGNS,
        width: this.ex(W),
        height: this.ex(H),
        role: "img",
        focusable: false,
        style: { "vertical-align": this.ex(-d) },
        viewBox: [0, this.fixed(-h * 1000, 1), this.fixed(W * 1000, 1), this.fixed(H * 1000, 1)].join(" ")
      }, [g]));
      if (W === 0.001) {
        adaptor.setAttribute(svg, "preserveAspectRatio", "xMidYMid slice");
        if (w < 0) {
          adaptor.setStyle(this.container, "margin-right", this.ex(w));
        }
      }
      if (pwidth) {
        adaptor.setStyle(svg, "min-width", this.ex(W));
        adaptor.setAttribute(svg, "width", pwidth);
        adaptor.removeAttribute(svg, "viewBox");
        var scale = this.fixed(wrapper.metrics.ex / (this.font.params.x_height * 1000), 6);
        adaptor.setAttribute(g, "transform", "scale(".concat(scale, ",-").concat(scale, ") translate(0, ").concat(this.fixed(-h * 1000, 1), ")"));
      }
      if (this.options.fontCache !== "none") {
        adaptor.setAttribute(svg, "xmlns:xlink", exports.XLINKNS);
      }
      return [svg, g];
    };
    SVG.prototype.typesetSVG = function(wrapper, svg, g) {
      var adaptor = this.adaptor;
      this.minwidth = this.shift = 0;
      if (this.options.fontCache === "local") {
        this.fontCache.clearCache();
        this.fontCache.useLocalID(this.options.localID);
        adaptor.insert(this.fontCache.getCache(), g);
      }
      wrapper.toSVG(g);
      this.fontCache.clearLocalID();
      if (this.minwidth) {
        adaptor.setStyle(svg, "minWidth", this.ex(this.minwidth));
        adaptor.setStyle(this.container, "minWidth", this.ex(this.minwidth));
      } else if (this.shift) {
        var align = adaptor.getAttribute(this.container, "justify") || "center";
        this.setIndent(svg, align, this.shift);
      }
    };
    SVG.prototype.setIndent = function(svg, align, shift) {
      if (align === "center" || align === "left") {
        this.adaptor.setStyle(svg, "margin-left", this.ex(shift));
      }
      if (align === "center" || align === "right") {
        this.adaptor.setStyle(svg, "margin-right", this.ex(-shift));
      }
    };
    SVG.prototype.ex = function(m) {
      m /= this.font.params.x_height;
      return Math.abs(m) < 0.001 ? "0" : m.toFixed(3).replace(/\.?0+$/, "") + "ex";
    };
    SVG.prototype.svg = function(kind, properties, children) {
      if (properties === undefined) {
        properties = {};
      }
      if (children === undefined) {
        children = [];
      }
      return this.html(kind, properties, children, exports.SVGNS);
    };
    SVG.prototype.unknownText = function(text, variant) {
      var metrics = this.math.metrics;
      var scale = this.font.params.x_height / metrics.ex * metrics.em * 1000;
      var svg = this.svg("text", {
        "data-variant": variant,
        transform: "scale(1,-1)",
        "font-size": this.fixed(scale, 1) + "px"
      }, [this.text(text)]);
      var adaptor = this.adaptor;
      if (variant !== "-explicitFont") {
        var c = (0, string_js_1.unicodeChars)(text);
        if (c.length !== 1 || c[0] < 119808 || c[0] > 120831) {
          var _a = __read(this.font.getCssFont(variant), 3), family = _a[0], italic = _a[1], bold = _a[2];
          adaptor.setAttribute(svg, "font-family", family);
          if (italic) {
            adaptor.setAttribute(svg, "font-style", "italic");
          }
          if (bold) {
            adaptor.setAttribute(svg, "font-weight", "bold");
          }
        }
      }
      return svg;
    };
    SVG.prototype.measureTextNode = function(text) {
      var adaptor = this.adaptor;
      text = adaptor.clone(text);
      adaptor.removeAttribute(text, "transform");
      var ex = this.fixed(this.font.params.x_height * 1000, 1);
      var svg = this.svg("svg", {
        position: "absolute",
        visibility: "hidden",
        width: "1ex",
        height: "1ex",
        viewBox: [0, 0, ex, ex].join(" ")
      }, [text]);
      adaptor.append(adaptor.body(adaptor.document), svg);
      var w = adaptor.nodeSize(text, 1000, true)[0];
      adaptor.remove(svg);
      return { w, h: 0.75, d: 0.2 };
    };
    SVG.NAME = "SVG";
    SVG.OPTIONS = __assign(__assign({}, OutputJax_js_1.CommonOutputJax.OPTIONS), { internalSpeechTitles: true, titleID: 0, fontCache: "local", localID: null });
    SVG.commonStyles = {
      'mjx-container[jax="SVG"]': {
        direction: "ltr"
      },
      'mjx-container[jax="SVG"] > svg': {
        overflow: "visible",
        "min-height": "1px",
        "min-width": "1px"
      },
      'mjx-container[jax="SVG"] > svg a': {
        fill: "blue",
        stroke: "blue"
      }
    };
    SVG.FONTCACHEID = "MJX-SVG-global-cache";
    SVG.STYLESHEETID = "MJX-SVG-styles";
    return SVG;
  }(OutputJax_js_1.CommonOutputJax);
  exports.SVG = SVG;
});

// node_modules/mathjax-full/js/output/svg/Wrapper.js
var require_Wrapper3 = __commonJS(function(exports) {
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
  exports.SVGWrapper = undefined;
  var BBox_js_1 = require_BBox();
  var Wrapper_js_1 = require_Wrapper2();
  var svg_js_1 = require_svg();
  var SVGWrapper = function(_super) {
    __extends(SVGWrapper, _super);
    function SVGWrapper() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.element = null;
      _this.dx = 0;
      return _this;
    }
    SVGWrapper.prototype.toSVG = function(parent) {
      this.addChildren(this.standardSVGnode(parent));
    };
    SVGWrapper.prototype.addChildren = function(parent) {
      var e_1, _a;
      var x = 0;
      try {
        for (var _b = __values(this.childNodes), _c = _b.next();!_c.done; _c = _b.next()) {
          var child = _c.value;
          child.toSVG(parent);
          var bbox = child.getOuterBBox();
          if (child.element) {
            child.place(x + bbox.L * bbox.rscale, 0);
          }
          x += (bbox.L + bbox.w + bbox.R) * bbox.rscale;
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
    SVGWrapper.prototype.standardSVGnode = function(parent) {
      var svg = this.createSVGnode(parent);
      this.handleStyles();
      this.handleScale();
      this.handleBorder();
      this.handleColor();
      this.handleAttributes();
      return svg;
    };
    SVGWrapper.prototype.createSVGnode = function(parent) {
      this.element = this.svg("g", { "data-mml-node": this.node.kind });
      var href = this.node.attributes.get("href");
      if (href) {
        parent = this.adaptor.append(parent, this.svg("a", { href }));
        var _a = this.getOuterBBox(), { h, d, w } = _a;
        this.adaptor.append(this.element, this.svg("rect", {
          "data-hitbox": true,
          fill: "none",
          stroke: "none",
          "pointer-events": "all",
          width: this.fixed(w),
          height: this.fixed(h + d),
          y: this.fixed(-d)
        }));
      }
      this.adaptor.append(parent, this.element);
      return this.element;
    };
    SVGWrapper.prototype.handleStyles = function() {
      var _this = this;
      if (!this.styles)
        return;
      var styles = this.styles.cssText;
      if (styles) {
        this.adaptor.setAttribute(this.element, "style", styles);
      }
      BBox_js_1.BBox.StyleAdjust.forEach(function(_a) {
        var _b = __read(_a, 3), name = _b[0], lr = _b[2];
        if (lr !== 0)
          return;
        var x = _this.styles.get(name);
        if (x) {
          _this.dx += _this.length2em(x, 1, _this.bbox.rscale);
        }
      });
    };
    SVGWrapper.prototype.handleScale = function() {
      if (this.bbox.rscale !== 1) {
        var scale = "scale(" + this.fixed(this.bbox.rscale / 1000, 3) + ")";
        this.adaptor.setAttribute(this.element, "transform", scale);
      }
    };
    SVGWrapper.prototype.handleColor = function() {
      var _a;
      var adaptor = this.adaptor;
      var attributes = this.node.attributes;
      var mathcolor = attributes.getExplicit("mathcolor");
      var color = attributes.getExplicit("color");
      var mathbackground = attributes.getExplicit("mathbackground");
      var background = attributes.getExplicit("background");
      var bgcolor = ((_a = this.styles) === null || _a === undefined ? undefined : _a.get("background-color")) || "";
      if (mathcolor || color) {
        adaptor.setAttribute(this.element, "fill", mathcolor || color);
        adaptor.setAttribute(this.element, "stroke", mathcolor || color);
      }
      if (mathbackground || background || bgcolor) {
        var _b = this.getOuterBBox(), { h, d, w } = _b;
        var rect = this.svg("rect", {
          fill: mathbackground || background || bgcolor,
          x: this.fixed(-this.dx),
          y: this.fixed(-d),
          width: this.fixed(w),
          height: this.fixed(h + d),
          "data-bgcolor": true
        });
        var child = adaptor.firstChild(this.element);
        if (child) {
          adaptor.insert(rect, child);
        } else {
          adaptor.append(this.element, rect);
        }
      }
    };
    SVGWrapper.prototype.handleBorder = function() {
      var e_2, _a, e_3, _b;
      if (!this.styles)
        return;
      var width = Array(4).fill(0);
      var style = Array(4);
      var color = Array(4);
      try {
        for (var _c = __values([["Top", 0], ["Right", 1], ["Bottom", 2], ["Left", 3]]), _d = _c.next();!_d.done; _d = _c.next()) {
          var _e = __read(_d.value, 2), name_1 = _e[0], i = _e[1];
          var key = "border" + name_1;
          var w_1 = this.styles.get(key + "Width");
          if (!w_1)
            continue;
          width[i] = Math.max(0, this.length2em(w_1, 1, this.bbox.rscale));
          style[i] = this.styles.get(key + "Style") || "solid";
          color[i] = this.styles.get(key + "Color") || "currentColor";
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
      var f = SVGWrapper.borderFuzz;
      var bbox = this.getOuterBBox();
      var _f = __read([bbox.h + f, bbox.d + f, bbox.w + f], 3), h = _f[0], d = _f[1], w = _f[2];
      var outerRT = [w, h];
      var outerLT = [-f, h];
      var outerRB = [w, -d];
      var outerLB = [-f, -d];
      var innerRT = [w - width[1], h - width[0]];
      var innerLT = [-f + width[3], h - width[0]];
      var innerRB = [w - width[1], -d + width[2]];
      var innerLB = [-f + width[3], -d + width[2]];
      var paths = [
        [outerLT, outerRT, innerRT, innerLT],
        [outerRB, outerRT, innerRT, innerRB],
        [outerLB, outerRB, innerRB, innerLB],
        [outerLB, outerLT, innerLT, innerLB]
      ];
      var adaptor = this.adaptor;
      var child = adaptor.firstChild(this.element);
      try {
        for (var _g = __values([0, 1, 2, 3]), _h = _g.next();!_h.done; _h = _g.next()) {
          var i = _h.value;
          if (!width[i])
            continue;
          var path = paths[i];
          if (style[i] === "dashed" || style[i] === "dotted") {
            this.addBorderBroken(path, color[i], style[i], width[i], i);
          } else {
            this.addBorderSolid(path, color[i], child);
          }
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (_h && !_h.done && (_b = _g.return))
            _b.call(_g);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
    };
    SVGWrapper.prototype.addBorderSolid = function(path, color, child) {
      var _this = this;
      var border = this.svg("polygon", {
        points: path.map(function(_a) {
          var _b = __read(_a, 2), x = _b[0], y = _b[1];
          return "".concat(_this.fixed(x - _this.dx), ",").concat(_this.fixed(y));
        }).join(" "),
        stroke: "none",
        fill: color
      });
      if (child) {
        this.adaptor.insert(border, child);
      } else {
        this.adaptor.append(this.element, border);
      }
    };
    SVGWrapper.prototype.addBorderBroken = function(path, color, style, t, i) {
      var dot = style === "dotted";
      var t2 = t / 2;
      var _a = __read([[t2, -t2, -t2, -t2], [-t2, t2, -t2, -t2], [t2, t2, -t2, t2], [t2, t2, t2, -t2]][i], 4), tx1 = _a[0], ty1 = _a[1], tx2 = _a[2], ty2 = _a[3];
      var _b = __read(path, 2), A = _b[0], B = _b[1];
      var x1 = A[0] + tx1 - this.dx, y1 = A[1] + ty1;
      var x2 = B[0] + tx2 - this.dx, y2 = B[1] + ty2;
      var W = Math.abs(i % 2 ? y2 - y1 : x2 - x1);
      var n = dot ? Math.ceil(W / (2 * t)) : Math.ceil((W - t) / (4 * t));
      var m = W / (4 * n + 1);
      var line = this.svg("line", {
        x1: this.fixed(x1),
        y1: this.fixed(y1),
        x2: this.fixed(x2),
        y2: this.fixed(y2),
        "stroke-width": this.fixed(t),
        stroke: color,
        "stroke-linecap": dot ? "round" : "square",
        "stroke-dasharray": dot ? [1, this.fixed(W / n - 0.002)].join(" ") : [this.fixed(m), this.fixed(3 * m)].join(" ")
      });
      var adaptor = this.adaptor;
      var child = adaptor.firstChild(this.element);
      if (child) {
        adaptor.insert(line, child);
      } else {
        adaptor.append(this.element, line);
      }
    };
    SVGWrapper.prototype.handleAttributes = function() {
      var e_4, _a, e_5, _b;
      var attributes = this.node.attributes;
      var defaults = attributes.getAllDefaults();
      var skip = SVGWrapper.skipAttributes;
      try {
        for (var _c = __values(attributes.getExplicitNames()), _d = _c.next();!_d.done; _d = _c.next()) {
          var name_2 = _d.value;
          if (skip[name_2] === false || !(name_2 in defaults) && !skip[name_2] && !this.adaptor.hasAttribute(this.element, name_2)) {
            this.adaptor.setAttribute(this.element, name_2, attributes.getExplicit(name_2));
          }
        }
      } catch (e_4_1) {
        e_4 = { error: e_4_1 };
      } finally {
        try {
          if (_d && !_d.done && (_a = _c.return))
            _a.call(_c);
        } finally {
          if (e_4)
            throw e_4.error;
        }
      }
      if (attributes.get("class")) {
        var names = attributes.get("class").trim().split(/ +/);
        try {
          for (var names_1 = __values(names), names_1_1 = names_1.next();!names_1_1.done; names_1_1 = names_1.next()) {
            var name_3 = names_1_1.value;
            this.adaptor.addClass(this.element, name_3);
          }
        } catch (e_5_1) {
          e_5 = { error: e_5_1 };
        } finally {
          try {
            if (names_1_1 && !names_1_1.done && (_b = names_1.return))
              _b.call(names_1);
          } finally {
            if (e_5)
              throw e_5.error;
          }
        }
      }
    };
    SVGWrapper.prototype.place = function(x, y, element) {
      if (element === undefined) {
        element = null;
      }
      x += this.dx;
      if (!(x || y))
        return;
      if (!element) {
        element = this.element;
        y = this.handleId(y);
      }
      var translate = "translate(".concat(this.fixed(x), ",").concat(this.fixed(y), ")");
      var transform = this.adaptor.getAttribute(element, "transform") || "";
      this.adaptor.setAttribute(element, "transform", translate + (transform ? " " + transform : ""));
    };
    SVGWrapper.prototype.handleId = function(y) {
      if (!this.node.attributes || !this.node.attributes.get("id")) {
        return y;
      }
      var adaptor = this.adaptor;
      var h = this.getBBox().h;
      var children = adaptor.childNodes(this.element);
      children.forEach(function(child) {
        return adaptor.remove(child);
      });
      var g = this.svg("g", { "data-idbox": true, transform: "translate(0,".concat(this.fixed(-h), ")") }, children);
      adaptor.append(this.element, this.svg("text", { "data-id-align": true }, [this.text("")]));
      adaptor.append(this.element, g);
      return y + h;
    };
    SVGWrapper.prototype.firstChild = function() {
      var adaptor = this.adaptor;
      var child = adaptor.firstChild(this.element);
      if (child && adaptor.kind(child) === "text" && adaptor.getAttribute(child, "data-id-align")) {
        child = adaptor.firstChild(adaptor.next(child));
      }
      if (child && adaptor.kind(child) === "rect" && adaptor.getAttribute(child, "data-hitbox")) {
        child = adaptor.next(child);
      }
      return child;
    };
    SVGWrapper.prototype.placeChar = function(n, x, y, parent, variant) {
      var e_6, _a;
      if (variant === undefined) {
        variant = null;
      }
      if (variant === null) {
        variant = this.variant;
      }
      var C = n.toString(16).toUpperCase();
      var _b = __read(this.getVariantChar(variant, n), 4), w = _b[2], data = _b[3];
      if ("p" in data) {
        var path = data.p ? "M" + data.p + "Z" : "";
        this.place(x, y, this.adaptor.append(parent, this.charNode(variant, C, path)));
      } else if ("c" in data) {
        var g = this.adaptor.append(parent, this.svg("g", { "data-c": C }));
        this.place(x, y, g);
        x = 0;
        try {
          for (var _c = __values(this.unicodeChars(data.c, variant)), _d = _c.next();!_d.done; _d = _c.next()) {
            var n_1 = _d.value;
            x += this.placeChar(n_1, x, y, g, variant);
          }
        } catch (e_6_1) {
          e_6 = { error: e_6_1 };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return))
              _a.call(_c);
          } finally {
            if (e_6)
              throw e_6.error;
          }
        }
      } else if (data.unknown) {
        var char = String.fromCodePoint(n);
        var text = this.adaptor.append(parent, this.jax.unknownText(char, variant));
        this.place(x, y, text);
        return this.jax.measureTextNodeWithCache(text, char, variant).w;
      }
      return w;
    };
    SVGWrapper.prototype.charNode = function(variant, C, path) {
      var cache = this.jax.options.fontCache;
      return cache !== "none" ? this.useNode(variant, C, path) : this.pathNode(C, path);
    };
    SVGWrapper.prototype.pathNode = function(C, path) {
      return this.svg("path", { "data-c": C, d: path });
    };
    SVGWrapper.prototype.useNode = function(variant, C, path) {
      var use = this.svg("use", { "data-c": C });
      var id = "#" + this.jax.fontCache.cachePath(variant, C, path);
      this.adaptor.setAttribute(use, "href", id, svg_js_1.XLINKNS);
      return use;
    };
    SVGWrapper.prototype.drawBBox = function() {
      var _a = this.getBBox(), { w, h, d } = _a;
      var box = this.svg("g", { style: {
        opacity: 0.25
      } }, [
        this.svg("rect", {
          fill: "red",
          height: this.fixed(h),
          width: this.fixed(w)
        }),
        this.svg("rect", {
          fill: "green",
          height: this.fixed(d),
          width: this.fixed(w),
          y: this.fixed(-d)
        })
      ]);
      var node = this.element || this.parent.element;
      this.adaptor.append(node, box);
    };
    SVGWrapper.prototype.html = function(type, def, content) {
      if (def === undefined) {
        def = {};
      }
      if (content === undefined) {
        content = [];
      }
      return this.jax.html(type, def, content);
    };
    SVGWrapper.prototype.svg = function(type, def, content) {
      if (def === undefined) {
        def = {};
      }
      if (content === undefined) {
        content = [];
      }
      return this.jax.svg(type, def, content);
    };
    SVGWrapper.prototype.text = function(text) {
      return this.jax.text(text);
    };
    SVGWrapper.prototype.fixed = function(x, n) {
      if (n === undefined) {
        n = 1;
      }
      return this.jax.fixed(x * 1000, n);
    };
    SVGWrapper.kind = "unknown";
    SVGWrapper.borderFuzz = 0.005;
    return SVGWrapper;
  }(Wrapper_js_1.CommonWrapper);
  exports.SVGWrapper = SVGWrapper;
});

// node_modules/mathjax-full/js/output/svg/Wrappers/math.js
var require_math = __commonJS(function(exports) {
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
  exports.SVGmath = undefined;
  var Wrapper_js_1 = require_Wrapper3();
  var math_js_1 = require_math3();
  var math_js_2 = require_math2();
  var BBox_js_1 = require_BBox();
  var SVGmath = function(_super) {
    __extends(SVGmath, _super);
    function SVGmath() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmath.prototype.toSVG = function(parent) {
      _super.prototype.toSVG.call(this, parent);
      var adaptor = this.adaptor;
      var display = this.node.attributes.get("display") === "block";
      if (display) {
        adaptor.setAttribute(this.jax.container, "display", "true");
        this.handleDisplay();
      }
      if (this.jax.document.options.internalSpeechTitles) {
        this.handleSpeech();
      }
    };
    SVGmath.prototype.handleDisplay = function() {
      var _a = __read(this.getAlignShift(), 2), align = _a[0], shift = _a[1];
      if (align !== "center") {
        this.adaptor.setAttribute(this.jax.container, "justify", align);
      }
      if (this.bbox.pwidth === BBox_js_1.BBox.fullWidth) {
        this.adaptor.setAttribute(this.jax.container, "width", "full");
        if (this.jax.table) {
          var _b = this.jax.table.getOuterBBox(), { L, w, R } = _b;
          if (align === "right") {
            R = Math.max(R || -shift, -shift);
          } else if (align === "left") {
            L = Math.max(L || shift, shift);
          } else if (align === "center") {
            w += 2 * Math.abs(shift);
          }
          this.jax.minwidth = Math.max(0, L + w + R);
        }
      } else {
        this.jax.shift = shift;
      }
    };
    SVGmath.prototype.handleSpeech = function() {
      var e_1, _a;
      var adaptor = this.adaptor;
      var attributes = this.node.attributes;
      var speech = attributes.get("aria-label") || attributes.get("data-semantic-speech");
      if (speech) {
        var id = this.getTitleID();
        var label = this.svg("title", { id }, [this.text(speech)]);
        adaptor.insert(label, adaptor.firstChild(this.element));
        adaptor.setAttribute(this.element, "aria-labeledby", id);
        adaptor.removeAttribute(this.element, "aria-label");
        try {
          for (var _b = __values(this.childNodes[0].childNodes), _c = _b.next();!_c.done; _c = _b.next()) {
            var child = _c.value;
            adaptor.setAttribute(child.element, "aria-hidden", "true");
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
    };
    SVGmath.prototype.getTitleID = function() {
      return "mjx-svg-title-" + String(this.jax.options.titleID++);
    };
    SVGmath.prototype.setChildPWidths = function(recompute, w, _clear) {
      if (w === undefined) {
        w = null;
      }
      if (_clear === undefined) {
        _clear = true;
      }
      return _super.prototype.setChildPWidths.call(this, recompute, this.parent ? w : this.metrics.containerWidth / this.jax.pxPerEm, false);
    };
    SVGmath.kind = math_js_2.MmlMath.prototype.kind;
    SVGmath.styles = {
      'mjx-container[jax="SVG"][display="true"]': {
        display: "block",
        "text-align": "center",
        margin: "1em 0"
      },
      'mjx-container[jax="SVG"][display="true"][width="full"]': {
        display: "flex"
      },
      'mjx-container[jax="SVG"][justify="left"]': {
        "text-align": "left"
      },
      'mjx-container[jax="SVG"][justify="right"]': {
        "text-align": "right"
      }
    };
    return SVGmath;
  }((0, math_js_1.CommonMathMixin)(Wrapper_js_1.SVGWrapper));
  exports.SVGmath = SVGmath;
});

export { require_math, require_mrow, require_mi, require_mo, require_mn, require_ms, require_mtext, require_merror, require_mspace, require_mpadded, require_mphantom, require_mfrac, require_msqrt, require_mroot, require_mfenced, require_scriptbase, require_msubsup, require_munderover, require_mmultiscripts, require_mtable, require_mtr, require_mtd, require_maction, require_menclose, require_semantics, require_mglyph, require_TeXAtom, require_TextNode, require_svg };
