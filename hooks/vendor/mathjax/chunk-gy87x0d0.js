import {
  require_AmsMethods
} from "./chunk-emmgc7az.js";
import {
  require_NodeUtil,
  require_TexError,
  require_ParseUtil,
  require_Tags,
  require_Configuration,
  require_SymbolMap,
  require_BaseItems,
  require_TexConstants,
  require_ParseMethods
} from "./chunk-7sscmp2c.js";
import {
  require_lengths
} from "./chunk-79ne31ds.js";
import {
  require_MmlNode
} from "./chunk-nk72tbre.js";
import {
  __commonJS
} from "./chunk-cdjrrdrs.js";

// node_modules/mathjax-full/js/input/tex/ams/AmsItems.js
var require_AmsItems = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FlalignItem = exports.MultlineItem = undefined;
  var BaseItems_js_1 = require_BaseItems();
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var TexError_js_1 = __importDefault(require_TexError());
  var TexConstants_js_1 = require_TexConstants();
  var MultlineItem = function(_super) {
    __extends(MultlineItem, _super);
    function MultlineItem(factory) {
      var args = [];
      for (var _i = 1;_i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      var _this = _super.call(this, factory) || this;
      _this.factory.configuration.tags.start("multline", true, args[0]);
      return _this;
    }
    Object.defineProperty(MultlineItem.prototype, "kind", {
      get: function() {
        return "multline";
      },
      enumerable: false,
      configurable: true
    });
    MultlineItem.prototype.EndEntry = function() {
      if (this.table.length) {
        ParseUtil_js_1.default.fixInitialMO(this.factory.configuration, this.nodes);
      }
      var shove = this.getProperty("shove");
      var mtd = this.create("node", "mtd", this.nodes, shove ? { columnalign: shove } : {});
      this.setProperty("shove", null);
      this.row.push(mtd);
      this.Clear();
    };
    MultlineItem.prototype.EndRow = function() {
      if (this.row.length !== 1) {
        throw new TexError_js_1.default("MultlineRowsOneCol", "The rows within the %1 environment must have exactly one column", "multline");
      }
      var row = this.create("node", "mtr", this.row);
      this.table.push(row);
      this.row = [];
    };
    MultlineItem.prototype.EndTable = function() {
      _super.prototype.EndTable.call(this);
      if (this.table.length) {
        var m = this.table.length - 1, label = -1;
        if (!NodeUtil_js_1.default.getAttribute(NodeUtil_js_1.default.getChildren(this.table[0])[0], "columnalign")) {
          NodeUtil_js_1.default.setAttribute(NodeUtil_js_1.default.getChildren(this.table[0])[0], "columnalign", TexConstants_js_1.TexConstant.Align.LEFT);
        }
        if (!NodeUtil_js_1.default.getAttribute(NodeUtil_js_1.default.getChildren(this.table[m])[0], "columnalign")) {
          NodeUtil_js_1.default.setAttribute(NodeUtil_js_1.default.getChildren(this.table[m])[0], "columnalign", TexConstants_js_1.TexConstant.Align.RIGHT);
        }
        var tag = this.factory.configuration.tags.getTag();
        if (tag) {
          label = this.arraydef.side === TexConstants_js_1.TexConstant.Align.LEFT ? 0 : this.table.length - 1;
          var mtr = this.table[label];
          var mlabel = this.create("node", "mlabeledtr", [tag].concat(NodeUtil_js_1.default.getChildren(mtr)));
          NodeUtil_js_1.default.copyAttributes(mtr, mlabel);
          this.table[label] = mlabel;
        }
      }
      this.factory.configuration.tags.end();
    };
    return MultlineItem;
  }(BaseItems_js_1.ArrayItem);
  exports.MultlineItem = MultlineItem;
  var FlalignItem = function(_super) {
    __extends(FlalignItem, _super);
    function FlalignItem(factory, name, numbered, padded, center) {
      var _this = _super.call(this, factory) || this;
      _this.name = name;
      _this.numbered = numbered;
      _this.padded = padded;
      _this.center = center;
      _this.factory.configuration.tags.start(name, numbered, numbered);
      return _this;
    }
    Object.defineProperty(FlalignItem.prototype, "kind", {
      get: function() {
        return "flalign";
      },
      enumerable: false,
      configurable: true
    });
    FlalignItem.prototype.EndEntry = function() {
      _super.prototype.EndEntry.call(this);
      var n = this.getProperty("xalignat");
      if (!n)
        return;
      if (this.row.length > n) {
        throw new TexError_js_1.default("XalignOverflow", "Extra %1 in row of %2", "&", this.name);
      }
    };
    FlalignItem.prototype.EndRow = function() {
      var cell;
      var row = this.row;
      var n = this.getProperty("xalignat");
      while (row.length < n) {
        row.push(this.create("node", "mtd"));
      }
      this.row = [];
      if (this.padded) {
        this.row.push(this.create("node", "mtd"));
      }
      while (cell = row.shift()) {
        this.row.push(cell);
        cell = row.shift();
        if (cell)
          this.row.push(cell);
        if (row.length || this.padded) {
          this.row.push(this.create("node", "mtd"));
        }
      }
      if (this.row.length > this.maxrow) {
        this.maxrow = this.row.length;
      }
      _super.prototype.EndRow.call(this);
      var mtr = this.table[this.table.length - 1];
      if (this.getProperty("zeroWidthLabel") && mtr.isKind("mlabeledtr")) {
        var mtd = NodeUtil_js_1.default.getChildren(mtr)[0];
        var side = this.factory.configuration.options["tagSide"];
        var def = __assign({ width: 0 }, side === "right" ? { lspace: "-1width" } : {});
        var mpadded = this.create("node", "mpadded", NodeUtil_js_1.default.getChildren(mtd), def);
        mtd.setChildren([mpadded]);
      }
    };
    FlalignItem.prototype.EndTable = function() {
      _super.prototype.EndTable.call(this);
      if (this.center) {
        if (this.maxrow <= 2) {
          var def = this.arraydef;
          delete def.width;
          delete this.global.indentalign;
        }
      }
    };
    return FlalignItem;
  }(BaseItems_js_1.EqnArrayItem);
  exports.FlalignItem = FlalignItem;
});

// node_modules/mathjax-full/js/input/tex/ams/AmsMappings.js
var require_AmsMappings = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var AmsMethods_js_1 = require_AmsMethods();
  var sm = __importStar(require_SymbolMap());
  var TexConstants_js_1 = require_TexConstants();
  var ParseMethods_js_1 = __importDefault(require_ParseMethods());
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var MmlNode_js_1 = require_MmlNode();
  var lengths_js_1 = require_lengths();
  new sm.CharacterMap("AMSmath-mathchar0mo", ParseMethods_js_1.default.mathchar0mo, {
    iiiint: ["⨌", { texClass: MmlNode_js_1.TEXCLASS.OP }]
  });
  new sm.RegExpMap("AMSmath-operatorLetter", AmsMethods_js_1.AmsMethods.operatorLetter, /[-*]/i);
  new sm.CommandMap("AMSmath-macros", {
    mathring: ["Accent", "02DA"],
    nobreakspace: "Tilde",
    negmedspace: ["Spacer", lengths_js_1.MATHSPACE.negativemediummathspace],
    negthickspace: ["Spacer", lengths_js_1.MATHSPACE.negativethickmathspace],
    idotsint: ["MultiIntegral", "\\int\\cdots\\int"],
    dddot: ["Accent", "20DB"],
    ddddot: ["Accent", "20DC"],
    sideset: "SideSet",
    boxed: ["Macro", "\\fbox{$\\displaystyle{#1}$}", 1],
    tag: "HandleTag",
    notag: "HandleNoTag",
    eqref: ["HandleRef", true],
    substack: ["Macro", "\\begin{subarray}{c}#1\\end{subarray}", 1],
    injlim: ["NamedOp", "inj&thinsp;lim"],
    projlim: ["NamedOp", "proj&thinsp;lim"],
    varliminf: ["Macro", "\\mathop{\\underline{\\mmlToken{mi}{lim}}}"],
    varlimsup: ["Macro", "\\mathop{\\overline{\\mmlToken{mi}{lim}}}"],
    varinjlim: ["Macro", "\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}}}"],
    varprojlim: ["Macro", "\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}}}"],
    DeclareMathOperator: "HandleDeclareOp",
    operatorname: "HandleOperatorName",
    genfrac: "Genfrac",
    frac: ["Genfrac", "", "", "", ""],
    tfrac: ["Genfrac", "", "", "", "1"],
    dfrac: ["Genfrac", "", "", "", "0"],
    binom: ["Genfrac", "(", ")", "0", ""],
    tbinom: ["Genfrac", "(", ")", "0", "1"],
    dbinom: ["Genfrac", "(", ")", "0", "0"],
    cfrac: "CFrac",
    shoveleft: ["HandleShove", TexConstants_js_1.TexConstant.Align.LEFT],
    shoveright: ["HandleShove", TexConstants_js_1.TexConstant.Align.RIGHT],
    xrightarrow: ["xArrow", 8594, 5, 10],
    xleftarrow: ["xArrow", 8592, 10, 5]
  }, AmsMethods_js_1.AmsMethods);
  new sm.EnvironmentMap("AMSmath-environment", ParseMethods_js_1.default.environment, {
    "equation*": ["Equation", null, false],
    "eqnarray*": [
      "EqnArray",
      null,
      false,
      true,
      "rcl",
      ParseUtil_js_1.default.cols(0, lengths_js_1.MATHSPACE.thickmathspace),
      ".5em"
    ],
    align: ["EqnArray", null, true, true, "rl", ParseUtil_js_1.default.cols(0, 2)],
    "align*": ["EqnArray", null, false, true, "rl", ParseUtil_js_1.default.cols(0, 2)],
    multline: ["Multline", null, true],
    "multline*": ["Multline", null, false],
    split: ["EqnArray", null, false, false, "rl", ParseUtil_js_1.default.cols(0)],
    gather: ["EqnArray", null, true, true, "c"],
    "gather*": ["EqnArray", null, false, true, "c"],
    alignat: ["AlignAt", null, true, true],
    "alignat*": ["AlignAt", null, false, true],
    alignedat: ["AlignAt", null, false, false],
    aligned: ["AmsEqnArray", null, null, null, "rl", ParseUtil_js_1.default.cols(0, 2), ".5em", "D"],
    gathered: ["AmsEqnArray", null, null, null, "c", null, ".5em", "D"],
    xalignat: ["XalignAt", null, true, true],
    "xalignat*": ["XalignAt", null, false, true],
    xxalignat: ["XalignAt", null, false, false],
    flalign: ["FlalignArray", null, true, false, true, "rlc", "auto auto fit"],
    "flalign*": ["FlalignArray", null, false, false, true, "rlc", "auto auto fit"],
    subarray: ["Array", null, null, null, null, ParseUtil_js_1.default.cols(0), "0.1em", "S", 1],
    smallmatrix: [
      "Array",
      null,
      null,
      null,
      "c",
      ParseUtil_js_1.default.cols(1 / 3),
      ".2em",
      "S",
      1
    ],
    matrix: ["Array", null, null, null, "c"],
    pmatrix: ["Array", null, "(", ")", "c"],
    bmatrix: ["Array", null, "[", "]", "c"],
    Bmatrix: ["Array", null, "\\{", "\\}", "c"],
    vmatrix: ["Array", null, "\\vert", "\\vert", "c"],
    Vmatrix: ["Array", null, "\\Vert", "\\Vert", "c"],
    cases: ["Array", null, "\\{", ".", "ll", null, ".2em", "T"]
  }, AmsMethods_js_1.AmsMethods);
  new sm.DelimiterMap("AMSmath-delimiter", ParseMethods_js_1.default.delimiter, {
    "\\lvert": ["|", { texClass: MmlNode_js_1.TEXCLASS.OPEN }],
    "\\rvert": ["|", { texClass: MmlNode_js_1.TEXCLASS.CLOSE }],
    "\\lVert": ["‖", { texClass: MmlNode_js_1.TEXCLASS.OPEN }],
    "\\rVert": ["‖", { texClass: MmlNode_js_1.TEXCLASS.CLOSE }]
  });
  new sm.CharacterMap("AMSsymbols-mathchar0mi", ParseMethods_js_1.default.mathchar0mi, {
    digamma: "ϝ",
    varkappa: "ϰ",
    varGamma: ["Γ", { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varDelta: ["Δ", { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varTheta: ["Θ", { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varLambda: ["Λ", { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varXi: ["Ξ", { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varPi: ["Π", { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varSigma: ["Σ", { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varUpsilon: ["Υ", { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varPhi: ["Φ", { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varPsi: ["Ψ", { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varOmega: ["Ω", { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    beth: "ℶ",
    gimel: "ℷ",
    daleth: "ℸ",
    backprime: ["‵", { variantForm: true }],
    hslash: "ℏ",
    varnothing: ["∅", { variantForm: true }],
    blacktriangle: "▴",
    triangledown: ["▽", { variantForm: true }],
    blacktriangledown: "▾",
    square: "◻",
    Box: "◻",
    blacksquare: "◼",
    lozenge: "◊",
    Diamond: "◊",
    blacklozenge: "⧫",
    circledS: ["Ⓢ", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    bigstar: "★",
    sphericalangle: "∢",
    measuredangle: "∡",
    nexists: "∄",
    complement: "∁",
    mho: "℧",
    eth: ["ð", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    Finv: "Ⅎ",
    diagup: "╱",
    Game: "⅁",
    diagdown: "╲",
    Bbbk: [
      "k",
      { mathvariant: TexConstants_js_1.TexConstant.Variant.DOUBLESTRUCK }
    ],
    yen: "¥",
    circledR: "®",
    checkmark: "✓",
    maltese: "✠"
  });
  new sm.CharacterMap("AMSsymbols-mathchar0mo", ParseMethods_js_1.default.mathchar0mo, {
    dotplus: "∔",
    ltimes: "⋉",
    smallsetminus: ["∖", { variantForm: true }],
    rtimes: "⋊",
    Cap: "⋒",
    doublecap: "⋒",
    leftthreetimes: "⋋",
    Cup: "⋓",
    doublecup: "⋓",
    rightthreetimes: "⋌",
    barwedge: "⊼",
    curlywedge: "⋏",
    veebar: "⊻",
    curlyvee: "⋎",
    doublebarwedge: "⩞",
    boxminus: "⊟",
    circleddash: "⊝",
    boxtimes: "⊠",
    circledast: "⊛",
    boxdot: "⊡",
    circledcirc: "⊚",
    boxplus: "⊞",
    centerdot: ["⋅", { variantForm: true }],
    divideontimes: "⋇",
    intercal: "⊺",
    leqq: "≦",
    geqq: "≧",
    leqslant: "⩽",
    geqslant: "⩾",
    eqslantless: "⪕",
    eqslantgtr: "⪖",
    lesssim: "≲",
    gtrsim: "≳",
    lessapprox: "⪅",
    gtrapprox: "⪆",
    approxeq: "≊",
    lessdot: "⋖",
    gtrdot: "⋗",
    lll: "⋘",
    llless: "⋘",
    ggg: "⋙",
    gggtr: "⋙",
    lessgtr: "≶",
    gtrless: "≷",
    lesseqgtr: "⋚",
    gtreqless: "⋛",
    lesseqqgtr: "⪋",
    gtreqqless: "⪌",
    doteqdot: "≑",
    Doteq: "≑",
    eqcirc: "≖",
    risingdotseq: "≓",
    circeq: "≗",
    fallingdotseq: "≒",
    triangleq: "≜",
    backsim: "∽",
    thicksim: ["∼", { variantForm: true }],
    backsimeq: "⋍",
    thickapprox: ["≈", { variantForm: true }],
    subseteqq: "⫅",
    supseteqq: "⫆",
    Subset: "⋐",
    Supset: "⋑",
    sqsubset: "⊏",
    sqsupset: "⊐",
    preccurlyeq: "≼",
    succcurlyeq: "≽",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    precsim: "≾",
    succsim: "≿",
    precapprox: "⪷",
    succapprox: "⪸",
    vartriangleleft: "⊲",
    lhd: "⊲",
    vartriangleright: "⊳",
    rhd: "⊳",
    trianglelefteq: "⊴",
    unlhd: "⊴",
    trianglerighteq: "⊵",
    unrhd: "⊵",
    vDash: ["⊨", { variantForm: true }],
    Vdash: "⊩",
    Vvdash: "⊪",
    smallsmile: ["⌣", { variantForm: true }],
    shortmid: ["∣", { variantForm: true }],
    smallfrown: ["⌢", { variantForm: true }],
    shortparallel: ["∥", { variantForm: true }],
    bumpeq: "≏",
    between: "≬",
    Bumpeq: "≎",
    pitchfork: "⋔",
    varpropto: ["∝", { variantForm: true }],
    backepsilon: "∍",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    therefore: "∴",
    because: "∵",
    eqsim: "≂",
    vartriangle: ["△", { variantForm: true }],
    Join: "⋈",
    nless: "≮",
    ngtr: "≯",
    nleq: "≰",
    ngeq: "≱",
    nleqslant: ["⪇", { variantForm: true }],
    ngeqslant: ["⪈", { variantForm: true }],
    nleqq: ["≰", { variantForm: true }],
    ngeqq: ["≱", { variantForm: true }],
    lneq: "⪇",
    gneq: "⪈",
    lneqq: "≨",
    gneqq: "≩",
    lvertneqq: ["≨", { variantForm: true }],
    gvertneqq: ["≩", { variantForm: true }],
    lnsim: "⋦",
    gnsim: "⋧",
    lnapprox: "⪉",
    gnapprox: "⪊",
    nprec: "⊀",
    nsucc: "⊁",
    npreceq: ["⋠", { variantForm: true }],
    nsucceq: ["⋡", { variantForm: true }],
    precneqq: "⪵",
    succneqq: "⪶",
    precnsim: "⋨",
    succnsim: "⋩",
    precnapprox: "⪹",
    succnapprox: "⪺",
    nsim: "≁",
    ncong: "≇",
    nshortmid: ["∤", { variantForm: true }],
    nshortparallel: ["∦", { variantForm: true }],
    nmid: "∤",
    nparallel: "∦",
    nvdash: "⊬",
    nvDash: "⊭",
    nVdash: "⊮",
    nVDash: "⊯",
    ntriangleleft: "⋪",
    ntriangleright: "⋫",
    ntrianglelefteq: "⋬",
    ntrianglerighteq: "⋭",
    nsubseteq: "⊈",
    nsupseteq: "⊉",
    nsubseteqq: ["⊈", { variantForm: true }],
    nsupseteqq: ["⊉", { variantForm: true }],
    subsetneq: "⊊",
    supsetneq: "⊋",
    varsubsetneq: ["⊊", { variantForm: true }],
    varsupsetneq: ["⊋", { variantForm: true }],
    subsetneqq: "⫋",
    supsetneqq: "⫌",
    varsubsetneqq: ["⫋", { variantForm: true }],
    varsupsetneqq: ["⫌", { variantForm: true }],
    leftleftarrows: "⇇",
    rightrightarrows: "⇉",
    leftrightarrows: "⇆",
    rightleftarrows: "⇄",
    Lleftarrow: "⇚",
    Rrightarrow: "⇛",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    leftarrowtail: "↢",
    rightarrowtail: "↣",
    looparrowleft: "↫",
    looparrowright: "↬",
    leftrightharpoons: "⇋",
    rightleftharpoons: ["⇌", { variantForm: true }],
    curvearrowleft: "↶",
    curvearrowright: "↷",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    Lsh: "↰",
    Rsh: "↱",
    upuparrows: "⇈",
    downdownarrows: "⇊",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    downharpoonleft: "⇃",
    restriction: "↾",
    multimap: "⊸",
    downharpoonright: "⇂",
    leftrightsquigarrow: "↭",
    rightsquigarrow: "⇝",
    leadsto: "⇝",
    dashrightarrow: "⇢",
    dashleftarrow: "⇠",
    nleftarrow: "↚",
    nrightarrow: "↛",
    nLeftarrow: "⇍",
    nRightarrow: "⇏",
    nleftrightarrow: "↮",
    nLeftrightarrow: "⇎"
  });
  new sm.DelimiterMap("AMSsymbols-delimiter", ParseMethods_js_1.default.delimiter, {
    "\\ulcorner": "⌜",
    "\\urcorner": "⌝",
    "\\llcorner": "⌞",
    "\\lrcorner": "⌟"
  });
  new sm.CommandMap("AMSsymbols-macros", {
    implies: ["Macro", "\\;\\Longrightarrow\\;"],
    impliedby: ["Macro", "\\;\\Longleftarrow\\;"]
  }, AmsMethods_js_1.AmsMethods);
});

// node_modules/mathjax-full/js/input/tex/ams/AmsConfiguration.js
var require_AmsConfiguration = __commonJS(function(exports) {
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
  exports.AmsConfiguration = exports.AmsTags = undefined;
  var Configuration_js_1 = require_Configuration();
  var AmsItems_js_1 = require_AmsItems();
  var Tags_js_1 = require_Tags();
  var AmsMethods_js_1 = require_AmsMethods();
  require_AmsMappings();
  var SymbolMap_js_1 = require_SymbolMap();
  var AmsTags = function(_super) {
    __extends(AmsTags, _super);
    function AmsTags() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return AmsTags;
  }(Tags_js_1.AbstractTags);
  exports.AmsTags = AmsTags;
  var init = function(config) {
    new SymbolMap_js_1.CommandMap(AmsMethods_js_1.NEW_OPS, {}, {});
    config.append(Configuration_js_1.Configuration.local({
      handler: { macro: [AmsMethods_js_1.NEW_OPS] },
      priority: -1
    }));
  };
  exports.AmsConfiguration = Configuration_js_1.Configuration.create("ams", {
    handler: {
      character: ["AMSmath-operatorLetter"],
      delimiter: ["AMSsymbols-delimiter", "AMSmath-delimiter"],
      macro: [
        "AMSsymbols-mathchar0mi",
        "AMSsymbols-mathchar0mo",
        "AMSsymbols-delimiter",
        "AMSsymbols-macros",
        "AMSmath-mathchar0mo",
        "AMSmath-macros",
        "AMSmath-delimiter"
      ],
      environment: ["AMSmath-environment"]
    },
    items: (_a = {}, _a[AmsItems_js_1.MultlineItem.prototype.kind] = AmsItems_js_1.MultlineItem, _a[AmsItems_js_1.FlalignItem.prototype.kind] = AmsItems_js_1.FlalignItem, _a),
    tags: { ams: AmsTags },
    init,
    config: function(_config, jax) {
      if (jax.parseOptions.options.multlineWidth) {
        jax.parseOptions.options.ams.multlineWidth = jax.parseOptions.options.multlineWidth;
      }
      delete jax.parseOptions.options.multlineWidth;
    },
    options: {
      multlineWidth: "",
      ams: {
        multlineWidth: "100%",
        multlineIndent: "1em"
      }
    }
  });
});

export { require_AmsItems, require_AmsConfiguration };
