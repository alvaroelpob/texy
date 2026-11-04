import {
  require_MhchemConfiguration
} from "./chunk-gz61fyr6.js";
import {
  require_NodeFactory,
  require_ParseOptions
} from "./chunk-xbp64xx2.js";
import {
  require_AmsItems,
  require_AmsConfiguration
} from "./chunk-gy87x0d0.js";
import {
  require_AmsMethods
} from "./chunk-emmgc7az.js";
import {
  require_BaseConfiguration
} from "./chunk-sg4cbyht.js";
import {
  require_NodeUtil,
  require_TexError,
  require_Entities,
  require_ParseUtil,
  require_Stack,
  require_TexParser,
  require_StackItem,
  require_Tags,
  require_Configuration,
  require_Symbol,
  require_SymbolMap,
  require_BaseItems,
  require_TexConstants,
  require_BaseMethods,
  require_ParseMethods
} from "./chunk-7sscmp2c.js";
import {
  require_Retries
} from "./chunk-g96zh82x.js";
import {
  require_lengths
} from "./chunk-79ne31ds.js";
import {
  require_MmlNode
} from "./chunk-nk72tbre.js";
import {
  require_Options
} from "./chunk-kgrs1vrg.js";
import {
  __commonJS
} from "./chunk-cdjrrdrs.js";

// node_modules/mathjax-full/js/input/tex/action/ActionConfiguration.js
var require_ActionConfiguration = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ActionConfiguration = exports.ActionMethods = undefined;
  var Configuration_js_1 = require_Configuration();
  var TexParser_js_1 = __importDefault(require_TexParser());
  var SymbolMap_js_1 = require_SymbolMap();
  var BaseMethods_js_1 = __importDefault(require_BaseMethods());
  exports.ActionMethods = {};
  exports.ActionMethods.Macro = BaseMethods_js_1.default.Macro;
  exports.ActionMethods.Toggle = function(parser, name) {
    var children = [];
    var arg;
    while ((arg = parser.GetArgument(name)) !== "\\endtoggle") {
      children.push(new TexParser_js_1.default(arg, parser.stack.env, parser.configuration).mml());
    }
    parser.Push(parser.create("node", "maction", children, { actiontype: "toggle" }));
  };
  exports.ActionMethods.Mathtip = function(parser, name) {
    var arg = parser.ParseArg(name);
    var tip = parser.ParseArg(name);
    parser.Push(parser.create("node", "maction", [arg, tip], { actiontype: "tooltip" }));
  };
  new SymbolMap_js_1.CommandMap("action-macros", {
    toggle: "Toggle",
    mathtip: "Mathtip",
    texttip: ["Macro", "\\mathtip{#1}{\\text{#2}}", 2]
  }, exports.ActionMethods);
  exports.ActionConfiguration = Configuration_js_1.Configuration.create("action", { handler: { macro: ["action-macros"] } });
});

// node_modules/mathjax-full/js/input/tex/amscd/AmsCdMethods.js
var require_AmsCdMethods = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var TexParser_js_1 = __importDefault(require_TexParser());
  var BaseConfiguration_js_1 = require_BaseConfiguration();
  var MmlNode_js_1 = require_MmlNode();
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var AmsCdMethods = {};
  AmsCdMethods.CD = function(parser, begin) {
    parser.Push(begin);
    var item = parser.itemFactory.create("array");
    var options = parser.configuration.options.amscd;
    item.setProperties({
      minw: parser.stack.env.CD_minw || options.harrowsize,
      minh: parser.stack.env.CD_minh || options.varrowsize
    });
    item.arraydef = {
      columnalign: "center",
      columnspacing: options.colspace,
      rowspacing: options.rowspace,
      displaystyle: true
    };
    return item;
  };
  AmsCdMethods.arrow = function(parser, name) {
    var c = parser.string.charAt(parser.i);
    if (!c.match(/[><VA.|=]/)) {
      return (0, BaseConfiguration_js_1.Other)(parser, name);
    } else {
      parser.i++;
    }
    var first = parser.stack.Top();
    if (!first.isKind("array") || first.Size()) {
      AmsCdMethods.cell(parser, name);
      first = parser.stack.Top();
    }
    var top = first;
    var arrowRow = top.table.length % 2 === 1;
    var n = (top.row.length + (arrowRow ? 0 : 1)) % 2;
    while (n) {
      AmsCdMethods.cell(parser, name);
      n--;
    }
    var mml;
    var hdef = { minsize: top.getProperty("minw"), stretchy: true }, vdef = {
      minsize: top.getProperty("minh"),
      stretchy: true,
      symmetric: true,
      lspace: 0,
      rspace: 0
    };
    if (c === ".") {} else if (c === "|") {
      mml = parser.create("token", "mo", vdef, "∥");
    } else if (c === "=") {
      mml = parser.create("token", "mo", hdef, "=");
    } else {
      var arrow = {
        ">": "→",
        "<": "←",
        V: "↓",
        A: "↑"
      }[c];
      var a = parser.GetUpTo(name + c, c);
      var b = parser.GetUpTo(name + c, c);
      if (c === ">" || c === "<") {
        mml = parser.create("token", "mo", hdef, arrow);
        if (!a) {
          a = "\\kern " + top.getProperty("minw");
        }
        if (a || b) {
          var pad = { width: "+.67em", lspace: ".33em" };
          mml = parser.create("node", "munderover", [mml]);
          if (a) {
            var nodeA = new TexParser_js_1.default(a, parser.stack.env, parser.configuration).mml();
            var mpadded = parser.create("node", "mpadded", [nodeA], pad);
            NodeUtil_js_1.default.setAttribute(mpadded, "voffset", ".1em");
            NodeUtil_js_1.default.setChild(mml, mml.over, mpadded);
          }
          if (b) {
            var nodeB = new TexParser_js_1.default(b, parser.stack.env, parser.configuration).mml();
            NodeUtil_js_1.default.setChild(mml, mml.under, parser.create("node", "mpadded", [nodeB], pad));
          }
          if (parser.configuration.options.amscd.hideHorizontalLabels) {
            mml = parser.create("node", "mpadded", mml, { depth: 0, height: ".67em" });
          }
        }
      } else {
        var arrowNode = parser.create("token", "mo", vdef, arrow);
        mml = arrowNode;
        if (a || b) {
          mml = parser.create("node", "mrow");
          if (a) {
            NodeUtil_js_1.default.appendChildren(mml, [new TexParser_js_1.default("\\scriptstyle\\llap{" + a + "}", parser.stack.env, parser.configuration).mml()]);
          }
          arrowNode.texClass = MmlNode_js_1.TEXCLASS.ORD;
          NodeUtil_js_1.default.appendChildren(mml, [arrowNode]);
          if (b) {
            NodeUtil_js_1.default.appendChildren(mml, [new TexParser_js_1.default("\\scriptstyle\\rlap{" + b + "}", parser.stack.env, parser.configuration).mml()]);
          }
        }
      }
    }
    if (mml) {
      parser.Push(mml);
    }
    AmsCdMethods.cell(parser, name);
  };
  AmsCdMethods.cell = function(parser, name) {
    var top = parser.stack.Top();
    if ((top.table || []).length % 2 === 0 && (top.row || []).length === 0) {
      parser.Push(parser.create("node", "mpadded", [], { height: "8.5pt", depth: "2pt" }));
    }
    parser.Push(parser.itemFactory.create("cell").setProperties({ isEntry: true, name }));
  };
  AmsCdMethods.minCDarrowwidth = function(parser, name) {
    parser.stack.env.CD_minw = parser.GetDimen(name);
  };
  AmsCdMethods.minCDarrowheight = function(parser, name) {
    parser.stack.env.CD_minh = parser.GetDimen(name);
  };
  exports.default = AmsCdMethods;
});

// node_modules/mathjax-full/js/input/tex/amscd/AmsCdMappings.js
var require_AmsCdMappings = __commonJS(function(exports) {
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
  var sm = __importStar(require_SymbolMap());
  var ParseMethods_js_1 = __importDefault(require_ParseMethods());
  var AmsCdMethods_js_1 = __importDefault(require_AmsCdMethods());
  new sm.EnvironmentMap("amscd_environment", ParseMethods_js_1.default.environment, { CD: "CD" }, AmsCdMethods_js_1.default);
  new sm.CommandMap("amscd_macros", {
    minCDarrowwidth: "minCDarrowwidth",
    minCDarrowheight: "minCDarrowheight"
  }, AmsCdMethods_js_1.default);
  new sm.MacroMap("amscd_special", { "@": "arrow" }, AmsCdMethods_js_1.default);
});

// node_modules/mathjax-full/js/input/tex/amscd/AmsCdConfiguration.js
var require_AmsCdConfiguration = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AmsCdConfiguration = undefined;
  var Configuration_js_1 = require_Configuration();
  require_AmsCdMappings();
  exports.AmsCdConfiguration = Configuration_js_1.Configuration.create("amscd", {
    handler: {
      character: ["amscd_special"],
      macro: ["amscd_macros"],
      environment: ["amscd_environment"]
    },
    options: {
      amscd: {
        colspace: "5pt",
        rowspace: "5pt",
        harrowsize: "2.75em",
        varrowsize: "1.75em",
        hideHorizontalLabels: false
      }
    }
  });
});

// node_modules/mathjax-full/js/input/tex/bbox/BboxConfiguration.js
var require_BboxConfiguration = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BboxConfiguration = exports.BboxMethods = undefined;
  var Configuration_js_1 = require_Configuration();
  var SymbolMap_js_1 = require_SymbolMap();
  var TexError_js_1 = __importDefault(require_TexError());
  exports.BboxMethods = {};
  exports.BboxMethods.BBox = function(parser, name) {
    var bbox = parser.GetBrackets(name, "");
    var math = parser.ParseArg(name);
    var parts = bbox.split(/,/);
    var def, background, style;
    for (var i = 0, m = parts.length;i < m; i++) {
      var part = parts[i].trim();
      var match = part.match(/^(\.\d+|\d+(\.\d*)?)(pt|em|ex|mu|px|in|cm|mm)$/);
      if (match) {
        if (def) {
          throw new TexError_js_1.default("MultipleBBoxProperty", "%1 specified twice in %2", "Padding", name);
        }
        var pad = BBoxPadding(match[1] + match[3]);
        if (pad) {
          def = {
            height: "+" + pad,
            depth: "+" + pad,
            lspace: pad,
            width: "+" + 2 * parseInt(match[1], 10) + match[3]
          };
        }
      } else if (part.match(/^([a-z0-9]+|\#[0-9a-f]{6}|\#[0-9a-f]{3})$/i)) {
        if (background) {
          throw new TexError_js_1.default("MultipleBBoxProperty", "%1 specified twice in %2", "Background", name);
        }
        background = part;
      } else if (part.match(/^[-a-z]+:/i)) {
        if (style) {
          throw new TexError_js_1.default("MultipleBBoxProperty", "%1 specified twice in %2", "Style", name);
        }
        style = BBoxStyle(part);
      } else if (part !== "") {
        throw new TexError_js_1.default("InvalidBBoxProperty", `"%1" doesn't look like a color, a padding dimension, or a style`, part);
      }
    }
    if (def) {
      math = parser.create("node", "mpadded", [math], def);
    }
    if (background || style) {
      def = {};
      if (background) {
        Object.assign(def, { mathbackground: background });
      }
      if (style) {
        Object.assign(def, { style });
      }
      math = parser.create("node", "mstyle", [math], def);
    }
    parser.Push(math);
  };
  var BBoxStyle = function(styles) {
    return styles;
  };
  var BBoxPadding = function(pad) {
    return pad;
  };
  new SymbolMap_js_1.CommandMap("bbox", { bbox: "BBox" }, exports.BboxMethods);
  exports.BboxConfiguration = Configuration_js_1.Configuration.create("bbox", { handler: { macro: ["bbox"] } });
});

// node_modules/mathjax-full/js/input/tex/boldsymbol/BoldsymbolConfiguration.js
var require_BoldsymbolConfiguration = __commonJS(function(exports) {
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
  exports.BoldsymbolConfiguration = exports.rewriteBoldTokens = exports.createBoldToken = exports.BoldsymbolMethods = undefined;
  var Configuration_js_1 = require_Configuration();
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var TexConstants_js_1 = require_TexConstants();
  var SymbolMap_js_1 = require_SymbolMap();
  var NodeFactory_js_1 = require_NodeFactory();
  var BOLDVARIANT = {};
  BOLDVARIANT[TexConstants_js_1.TexConstant.Variant.NORMAL] = TexConstants_js_1.TexConstant.Variant.BOLD;
  BOLDVARIANT[TexConstants_js_1.TexConstant.Variant.ITALIC] = TexConstants_js_1.TexConstant.Variant.BOLDITALIC;
  BOLDVARIANT[TexConstants_js_1.TexConstant.Variant.FRAKTUR] = TexConstants_js_1.TexConstant.Variant.BOLDFRAKTUR;
  BOLDVARIANT[TexConstants_js_1.TexConstant.Variant.SCRIPT] = TexConstants_js_1.TexConstant.Variant.BOLDSCRIPT;
  BOLDVARIANT[TexConstants_js_1.TexConstant.Variant.SANSSERIF] = TexConstants_js_1.TexConstant.Variant.BOLDSANSSERIF;
  BOLDVARIANT["-tex-calligraphic"] = "-tex-bold-calligraphic";
  BOLDVARIANT["-tex-oldstyle"] = "-tex-bold-oldstyle";
  BOLDVARIANT["-tex-mathit"] = TexConstants_js_1.TexConstant.Variant.BOLDITALIC;
  exports.BoldsymbolMethods = {};
  exports.BoldsymbolMethods.Boldsymbol = function(parser, name) {
    var boldsymbol = parser.stack.env["boldsymbol"];
    parser.stack.env["boldsymbol"] = true;
    var mml = parser.ParseArg(name);
    parser.stack.env["boldsymbol"] = boldsymbol;
    parser.Push(mml);
  };
  new SymbolMap_js_1.CommandMap("boldsymbol", { boldsymbol: "Boldsymbol" }, exports.BoldsymbolMethods);
  function createBoldToken(factory, kind, def, text) {
    var token = NodeFactory_js_1.NodeFactory.createToken(factory, kind, def, text);
    if (kind !== "mtext" && factory.configuration.parser.stack.env["boldsymbol"]) {
      NodeUtil_js_1.default.setProperty(token, "fixBold", true);
      factory.configuration.addNode("fixBold", token);
    }
    return token;
  }
  exports.createBoldToken = createBoldToken;
  function rewriteBoldTokens(arg) {
    var e_1, _a;
    try {
      for (var _b = __values(arg.data.getList("fixBold")), _c = _b.next();!_c.done; _c = _b.next()) {
        var node = _c.value;
        if (NodeUtil_js_1.default.getProperty(node, "fixBold")) {
          var variant = NodeUtil_js_1.default.getAttribute(node, "mathvariant");
          if (variant == null) {
            NodeUtil_js_1.default.setAttribute(node, "mathvariant", TexConstants_js_1.TexConstant.Variant.BOLD);
          } else {
            NodeUtil_js_1.default.setAttribute(node, "mathvariant", BOLDVARIANT[variant] || variant);
          }
          NodeUtil_js_1.default.removeProperties(node, "fixBold");
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
  }
  exports.rewriteBoldTokens = rewriteBoldTokens;
  exports.BoldsymbolConfiguration = Configuration_js_1.Configuration.create("boldsymbol", {
    handler: { macro: ["boldsymbol"] },
    nodes: { token: createBoldToken },
    postprocessors: [rewriteBoldTokens]
  });
});

// node_modules/mathjax-full/js/input/tex/braket/BraketItems.js
var require_BraketItems = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BraketItem = undefined;
  var StackItem_js_1 = require_StackItem();
  var MmlNode_js_1 = require_MmlNode();
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var BraketItem = function(_super) {
    __extends(BraketItem, _super);
    function BraketItem() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BraketItem.prototype, "kind", {
      get: function() {
        return "braket";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BraketItem.prototype, "isOpen", {
      get: function() {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    BraketItem.prototype.checkItem = function(item) {
      if (item.isKind("close")) {
        return [[this.factory.create("mml", this.toMml())], true];
      }
      if (item.isKind("mml")) {
        this.Push(item.toMml());
        if (this.getProperty("single")) {
          return [[this.toMml()], true];
        }
        return StackItem_js_1.BaseItem.fail;
      }
      return _super.prototype.checkItem.call(this, item);
    };
    BraketItem.prototype.toMml = function() {
      var inner = _super.prototype.toMml.call(this);
      var open = this.getProperty("open");
      var close = this.getProperty("close");
      if (this.getProperty("stretchy")) {
        return ParseUtil_js_1.default.fenced(this.factory.configuration, open, inner, close);
      }
      var attrs = { fence: true, stretchy: false, symmetric: true, texClass: MmlNode_js_1.TEXCLASS.OPEN };
      var openNode = this.create("token", "mo", attrs, open);
      attrs.texClass = MmlNode_js_1.TEXCLASS.CLOSE;
      var closeNode = this.create("token", "mo", attrs, close);
      var mrow = this.create("node", "mrow", [openNode, inner, closeNode], { open, close, texClass: MmlNode_js_1.TEXCLASS.INNER });
      return mrow;
    };
    return BraketItem;
  }(StackItem_js_1.BaseItem);
  exports.BraketItem = BraketItem;
});

// node_modules/mathjax-full/js/input/tex/braket/BraketMethods.js
var require_BraketMethods = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var BaseMethods_js_1 = __importDefault(require_BaseMethods());
  var MmlNode_js_1 = require_MmlNode();
  var TexError_js_1 = __importDefault(require_TexError());
  var BraketMethods = {};
  BraketMethods.Macro = BaseMethods_js_1.default.Macro;
  BraketMethods.Braket = function(parser, _name, open, close, stretchy, barmax) {
    var next = parser.GetNext();
    if (next === "") {
      throw new TexError_js_1.default("MissingArgFor", "Missing argument for %1", parser.currentCS);
    }
    var single = true;
    if (next === "{") {
      parser.i++;
      single = false;
    }
    parser.Push(parser.itemFactory.create("braket").setProperties({
      barmax,
      barcount: 0,
      open,
      close,
      stretchy,
      single
    }));
  };
  BraketMethods.Bar = function(parser, name) {
    var c = name === "|" ? "|" : "∥";
    var top = parser.stack.Top();
    if (top.kind !== "braket" || top.getProperty("barcount") >= top.getProperty("barmax")) {
      var mml = parser.create("token", "mo", { texClass: MmlNode_js_1.TEXCLASS.ORD, stretchy: false }, c);
      parser.Push(mml);
      return;
    }
    if (c === "|" && parser.GetNext() === "|") {
      parser.i++;
      c = "∥";
    }
    var stretchy = top.getProperty("stretchy");
    if (!stretchy) {
      var node_1 = parser.create("token", "mo", { stretchy: false, braketbar: true }, c);
      parser.Push(node_1);
      return;
    }
    var node = parser.create("node", "TeXAtom", [], { texClass: MmlNode_js_1.TEXCLASS.CLOSE });
    parser.Push(node);
    top.setProperty("barcount", top.getProperty("barcount") + 1);
    node = parser.create("token", "mo", { stretchy: true, braketbar: true }, c);
    parser.Push(node);
    node = parser.create("node", "TeXAtom", [], { texClass: MmlNode_js_1.TEXCLASS.OPEN });
    parser.Push(node);
  };
  exports.default = BraketMethods;
});

// node_modules/mathjax-full/js/input/tex/braket/BraketMappings.js
var require_BraketMappings = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var SymbolMap_js_1 = require_SymbolMap();
  var BraketMethods_js_1 = __importDefault(require_BraketMethods());
  new SymbolMap_js_1.CommandMap("Braket-macros", {
    bra: ["Macro", "{\\langle {#1} \\vert}", 1],
    ket: ["Macro", "{\\vert {#1} \\rangle}", 1],
    braket: ["Braket", "⟨", "⟩", false, Infinity],
    set: ["Braket", "{", "}", false, 1],
    Bra: ["Macro", "{\\left\\langle {#1} \\right\\vert}", 1],
    Ket: ["Macro", "{\\left\\vert {#1} \\right\\rangle}", 1],
    Braket: ["Braket", "⟨", "⟩", true, Infinity],
    Set: ["Braket", "{", "}", true, 1],
    ketbra: ["Macro", "{\\vert {#1} \\rangle\\langle {#2} \\vert}", 2],
    Ketbra: ["Macro", "{\\left\\vert {#1} \\right\\rangle\\left\\langle {#2} \\right\\vert}", 2],
    "|": "Bar"
  }, BraketMethods_js_1.default);
  new SymbolMap_js_1.MacroMap("Braket-characters", {
    "|": "Bar"
  }, BraketMethods_js_1.default);
});

// node_modules/mathjax-full/js/input/tex/braket/BraketConfiguration.js
var require_BraketConfiguration = __commonJS(function(exports) {
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BraketConfiguration = undefined;
  var Configuration_js_1 = require_Configuration();
  var BraketItems_js_1 = require_BraketItems();
  require_BraketMappings();
  exports.BraketConfiguration = Configuration_js_1.Configuration.create("braket", {
    handler: {
      character: ["Braket-characters"],
      macro: ["Braket-macros"]
    },
    items: (_a = {}, _a[BraketItems_js_1.BraketItem.prototype.kind] = BraketItems_js_1.BraketItem, _a)
  });
});

// node_modules/mathjax-full/js/input/tex/bussproofs/BussproofsUtil.js
var require_BussproofsUtil = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.clearDocument = exports.saveDocument = exports.makeBsprAttributes = exports.removeProperty = exports.getProperty = exports.setProperty = exports.balanceRules = undefined;
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var doc = null;
  var item = null;
  var getBBox = function(node) {
    item.root = node;
    var width = doc.outputJax.getBBox(item, doc).w;
    return width;
  };
  var getRule = function(node) {
    var i = 0;
    while (node && !NodeUtil_js_1.default.isType(node, "mtable")) {
      if (NodeUtil_js_1.default.isType(node, "text")) {
        return null;
      }
      if (NodeUtil_js_1.default.isType(node, "mrow")) {
        node = node.childNodes[0];
        i = 0;
        continue;
      }
      node = node.parent.childNodes[i];
      i++;
    }
    return node;
  };
  var getPremises = function(rule, direction) {
    return rule.childNodes[direction === "up" ? 1 : 0].childNodes[0].childNodes[0].childNodes[0].childNodes[0];
  };
  var getPremise = function(premises, n) {
    return premises.childNodes[n].childNodes[0].childNodes[0];
  };
  var firstPremise = function(premises) {
    return getPremise(premises, 0);
  };
  var lastPremise = function(premises) {
    return getPremise(premises, premises.childNodes.length - 1);
  };
  var getConclusion = function(rule, direction) {
    return rule.childNodes[direction === "up" ? 0 : 1].childNodes[0].childNodes[0].childNodes[0];
  };
  var getColumn = function(inf) {
    while (inf && !NodeUtil_js_1.default.isType(inf, "mtd")) {
      inf = inf.parent;
    }
    return inf;
  };
  var nextSibling = function(inf) {
    return inf.parent.childNodes[inf.parent.childNodes.indexOf(inf) + 1];
  };
  var getParentInf = function(inf) {
    while (inf && (0, exports.getProperty)(inf, "inference") == null) {
      inf = inf.parent;
    }
    return inf;
  };
  var getSpaces = function(inf, rule, right) {
    if (right === undefined) {
      right = false;
    }
    var result = 0;
    if (inf === rule) {
      return result;
    }
    if (inf !== rule.parent) {
      var children_1 = inf.childNodes;
      var index_1 = right ? children_1.length - 1 : 0;
      if (NodeUtil_js_1.default.isType(children_1[index_1], "mspace")) {
        result += getBBox(children_1[index_1]);
      }
      inf = rule.parent;
    }
    if (inf === rule) {
      return result;
    }
    var children = inf.childNodes;
    var index = right ? children.length - 1 : 0;
    if (children[index] !== rule) {
      result += getBBox(children[index]);
    }
    return result;
  };
  var adjustValue = function(inf, right) {
    if (right === undefined) {
      right = false;
    }
    var rule = getRule(inf);
    var conc = getConclusion(rule, (0, exports.getProperty)(rule, "inferenceRule"));
    var w = getSpaces(inf, rule, right);
    var x = getBBox(rule);
    var y = getBBox(conc);
    return w + (x - y) / 2;
  };
  var addSpace = function(config, inf, space, right) {
    if (right === undefined) {
      right = false;
    }
    if ((0, exports.getProperty)(inf, "inferenceRule") || (0, exports.getProperty)(inf, "labelledRule")) {
      var mrow = config.nodeFactory.create("node", "mrow");
      inf.parent.replaceChild(mrow, inf);
      mrow.setChildren([inf]);
      moveProperties(inf, mrow);
      inf = mrow;
    }
    var index = right ? inf.childNodes.length - 1 : 0;
    var mspace = inf.childNodes[index];
    if (NodeUtil_js_1.default.isType(mspace, "mspace")) {
      NodeUtil_js_1.default.setAttribute(mspace, "width", ParseUtil_js_1.default.Em(ParseUtil_js_1.default.dimen2em(NodeUtil_js_1.default.getAttribute(mspace, "width")) + space));
      return;
    }
    mspace = config.nodeFactory.create("node", "mspace", [], { width: ParseUtil_js_1.default.Em(space) });
    if (right) {
      inf.appendChild(mspace);
      return;
    }
    mspace.parent = inf;
    inf.childNodes.unshift(mspace);
  };
  var moveProperties = function(src, dest) {
    var props = ["inference", "proof", "maxAdjust", "labelledRule"];
    props.forEach(function(x) {
      var value = (0, exports.getProperty)(src, x);
      if (value != null) {
        (0, exports.setProperty)(dest, x, value);
        (0, exports.removeProperty)(src, x);
      }
    });
  };
  var adjustSequents = function(config) {
    var sequents = config.nodeLists["sequent"];
    if (!sequents) {
      return;
    }
    for (var i = sequents.length - 1, seq = undefined;seq = sequents[i]; i--) {
      if ((0, exports.getProperty)(seq, "sequentProcessed")) {
        (0, exports.removeProperty)(seq, "sequentProcessed");
        continue;
      }
      var collect = [];
      var inf = getParentInf(seq);
      if ((0, exports.getProperty)(inf, "inference") !== 1) {
        continue;
      }
      collect.push(seq);
      while ((0, exports.getProperty)(inf, "inference") === 1) {
        inf = getRule(inf);
        var premise = firstPremise(getPremises(inf, (0, exports.getProperty)(inf, "inferenceRule")));
        var sequent = (0, exports.getProperty)(premise, "inferenceRule") ? getConclusion(premise, (0, exports.getProperty)(premise, "inferenceRule")) : premise;
        if ((0, exports.getProperty)(sequent, "sequent")) {
          seq = sequent.childNodes[0];
          collect.push(seq);
          (0, exports.setProperty)(seq, "sequentProcessed", true);
        }
        inf = premise;
      }
      adjustSequentPairwise(config, collect);
    }
  };
  var addSequentSpace = function(config, sequent, position, direction, width) {
    var mspace = config.nodeFactory.create("node", "mspace", [], { width: ParseUtil_js_1.default.Em(width) });
    if (direction === "left") {
      var row = sequent.childNodes[position].childNodes[0];
      mspace.parent = row;
      row.childNodes.unshift(mspace);
    } else {
      sequent.childNodes[position].appendChild(mspace);
    }
    (0, exports.setProperty)(sequent.parent, "sequentAdjust_" + direction, width);
  };
  var adjustSequentPairwise = function(config, sequents) {
    var top = sequents.pop();
    while (sequents.length) {
      var bottom = sequents.pop();
      var _a = __read(compareSequents(top, bottom), 2), left = _a[0], right = _a[1];
      if ((0, exports.getProperty)(top.parent, "axiom")) {
        addSequentSpace(config, left < 0 ? top : bottom, 0, "left", Math.abs(left));
        addSequentSpace(config, right < 0 ? top : bottom, 2, "right", Math.abs(right));
      }
      top = bottom;
    }
  };
  var compareSequents = function(top, bottom) {
    var tr = getBBox(top.childNodes[2]);
    var br = getBBox(bottom.childNodes[2]);
    var tl = getBBox(top.childNodes[0]);
    var bl = getBBox(bottom.childNodes[0]);
    var dl = tl - bl;
    var dr = tr - br;
    return [dl, dr];
  };
  var balanceRules = function(arg) {
    var e_1, _a;
    item = new arg.document.options.MathItem("", null, arg.math.display);
    var config = arg.data;
    adjustSequents(config);
    var inferences = config.nodeLists["inference"] || [];
    try {
      for (var inferences_1 = __values(inferences), inferences_1_1 = inferences_1.next();!inferences_1_1.done; inferences_1_1 = inferences_1.next()) {
        var inf = inferences_1_1.value;
        var isProof = (0, exports.getProperty)(inf, "proof");
        var rule = getRule(inf);
        var premises = getPremises(rule, (0, exports.getProperty)(rule, "inferenceRule"));
        var premiseF = firstPremise(premises);
        if ((0, exports.getProperty)(premiseF, "inference")) {
          var adjust_1 = adjustValue(premiseF);
          if (adjust_1) {
            addSpace(config, premiseF, -adjust_1);
            var w_1 = getSpaces(inf, rule, false);
            addSpace(config, inf, adjust_1 - w_1);
          }
        }
        var premiseL = lastPremise(premises);
        if ((0, exports.getProperty)(premiseL, "inference") == null) {
          continue;
        }
        var adjust = adjustValue(premiseL, true);
        addSpace(config, premiseL, -adjust, true);
        var w = getSpaces(inf, rule, true);
        var maxAdjust = (0, exports.getProperty)(inf, "maxAdjust");
        if (maxAdjust != null) {
          adjust = Math.max(adjust, maxAdjust);
        }
        var column = undefined;
        if (isProof || !(column = getColumn(inf))) {
          addSpace(config, (0, exports.getProperty)(inf, "proof") ? inf : inf.parent, adjust - w, true);
          continue;
        }
        var sibling = nextSibling(column);
        if (sibling) {
          var pos = config.nodeFactory.create("node", "mspace", [], { width: adjust - w + "em" });
          sibling.appendChild(pos);
          inf.removeProperty("maxAdjust");
          continue;
        }
        var parentRule = getParentInf(column);
        if (!parentRule) {
          continue;
        }
        adjust = (0, exports.getProperty)(parentRule, "maxAdjust") ? Math.max((0, exports.getProperty)(parentRule, "maxAdjust"), adjust) : adjust;
        (0, exports.setProperty)(parentRule, "maxAdjust", adjust);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (inferences_1_1 && !inferences_1_1.done && (_a = inferences_1.return))
          _a.call(inferences_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  exports.balanceRules = balanceRules;
  var property_prefix = "bspr_";
  var blacklistedProperties = (_a = {}, _a[property_prefix + "maxAdjust"] = true, _a);
  var setProperty = function(node, property, value) {
    NodeUtil_js_1.default.setProperty(node, property_prefix + property, value);
  };
  exports.setProperty = setProperty;
  var getProperty = function(node, property) {
    return NodeUtil_js_1.default.getProperty(node, property_prefix + property);
  };
  exports.getProperty = getProperty;
  var removeProperty = function(node, property) {
    node.removeProperty(property_prefix + property);
  };
  exports.removeProperty = removeProperty;
  var makeBsprAttributes = function(arg) {
    arg.data.root.walkTree(function(mml, _data) {
      var attr = [];
      mml.getPropertyNames().forEach(function(x) {
        if (!blacklistedProperties[x] && x.match(RegExp("^" + property_prefix))) {
          attr.push(x + ":" + mml.getProperty(x));
        }
      });
      if (attr.length) {
        NodeUtil_js_1.default.setAttribute(mml, "semantics", attr.join(";"));
      }
    });
  };
  exports.makeBsprAttributes = makeBsprAttributes;
  var saveDocument = function(arg) {
    doc = arg.document;
    if (!("getBBox" in doc.outputJax)) {
      throw Error("The bussproofs extension requires an output jax with a getBBox() method");
    }
  };
  exports.saveDocument = saveDocument;
  var clearDocument = function(_arg) {
    doc = null;
  };
  exports.clearDocument = clearDocument;
});

// node_modules/mathjax-full/js/input/tex/bussproofs/BussproofsItems.js
var require_BussproofsItems = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ProofTreeItem = undefined;
  var TexError_js_1 = __importDefault(require_TexError());
  var StackItem_js_1 = require_StackItem();
  var Stack_js_1 = __importDefault(require_Stack());
  var BussproofsUtil = __importStar(require_BussproofsUtil());
  var ProofTreeItem = function(_super) {
    __extends(ProofTreeItem, _super);
    function ProofTreeItem() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.leftLabel = null;
      _this.rigthLabel = null;
      _this.innerStack = new Stack_js_1.default(_this.factory, {}, true);
      return _this;
    }
    Object.defineProperty(ProofTreeItem.prototype, "kind", {
      get: function() {
        return "proofTree";
      },
      enumerable: false,
      configurable: true
    });
    ProofTreeItem.prototype.checkItem = function(item) {
      if (item.isKind("end") && item.getName() === "prooftree") {
        var node = this.toMml();
        BussproofsUtil.setProperty(node, "proof", true);
        return [[this.factory.create("mml", node), item], true];
      }
      if (item.isKind("stop")) {
        throw new TexError_js_1.default("EnvMissingEnd", "Missing \\end{%1}", this.getName());
      }
      this.innerStack.Push(item);
      return StackItem_js_1.BaseItem.fail;
    };
    ProofTreeItem.prototype.toMml = function() {
      var tree = _super.prototype.toMml.call(this);
      var start = this.innerStack.Top();
      if (start.isKind("start") && !start.Size()) {
        return tree;
      }
      this.innerStack.Push(this.factory.create("stop"));
      var prefix = this.innerStack.Top().toMml();
      return this.create("node", "mrow", [prefix, tree], {});
    };
    return ProofTreeItem;
  }(StackItem_js_1.BaseItem);
  exports.ProofTreeItem = ProofTreeItem;
});

// node_modules/mathjax-full/js/input/tex/bussproofs/BussproofsMethods.js
var require_BussproofsMethods = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var TexError_js_1 = __importDefault(require_TexError());
  var TexParser_js_1 = __importDefault(require_TexParser());
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var BussproofsUtil = __importStar(require_BussproofsUtil());
  var BussproofsMethods = {};
  BussproofsMethods.Prooftree = function(parser, begin) {
    parser.Push(begin);
    var newItem = parser.itemFactory.create("proofTree").setProperties({
      name: begin.getName(),
      line: "solid",
      currentLine: "solid",
      rootAtTop: false
    });
    return newItem;
  };
  BussproofsMethods.Axiom = function(parser, name) {
    var top = parser.stack.Top();
    if (top.kind !== "proofTree") {
      throw new TexError_js_1.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
    }
    var content = paddedContent(parser, parser.GetArgument(name));
    BussproofsUtil.setProperty(content, "axiom", true);
    top.Push(content);
  };
  var paddedContent = function(parser, content) {
    var nodes = ParseUtil_js_1.default.internalMath(parser, ParseUtil_js_1.default.trimSpaces(content), 0);
    if (!nodes[0].childNodes[0].childNodes.length) {
      return parser.create("node", "mrow", []);
    }
    var lpad = parser.create("node", "mspace", [], { width: ".5ex" });
    var rpad = parser.create("node", "mspace", [], { width: ".5ex" });
    return parser.create("node", "mrow", __spreadArray(__spreadArray([lpad], __read(nodes), false), [rpad], false));
  };
  BussproofsMethods.Inference = function(parser, name, n) {
    var top = parser.stack.Top();
    if (top.kind !== "proofTree") {
      throw new TexError_js_1.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
    }
    if (top.Size() < n) {
      throw new TexError_js_1.default("BadProofTree", "Proof tree badly specified.");
    }
    var rootAtTop = top.getProperty("rootAtTop");
    var childCount = n === 1 && !top.Peek()[0].childNodes.length ? 0 : n;
    var children = [];
    do {
      if (children.length) {
        children.unshift(parser.create("node", "mtd", [], {}));
      }
      children.unshift(parser.create("node", "mtd", [top.Pop()], { rowalign: rootAtTop ? "top" : "bottom" }));
      n--;
    } while (n > 0);
    var row = parser.create("node", "mtr", children, {});
    var table = parser.create("node", "mtable", [row], { framespacing: "0 0" });
    var conclusion = paddedContent(parser, parser.GetArgument(name));
    var style = top.getProperty("currentLine");
    if (style !== top.getProperty("line")) {
      top.setProperty("currentLine", top.getProperty("line"));
    }
    var rule = createRule(parser, table, [conclusion], top.getProperty("left"), top.getProperty("right"), style, rootAtTop);
    top.setProperty("left", null);
    top.setProperty("right", null);
    BussproofsUtil.setProperty(rule, "inference", childCount);
    parser.configuration.addNode("inference", rule);
    top.Push(rule);
  };
  function createRule(parser, premise, conclusions, left, right, style, rootAtTop) {
    var upper = parser.create("node", "mtr", [parser.create("node", "mtd", [premise], {})], {});
    var lower = parser.create("node", "mtr", [parser.create("node", "mtd", conclusions, {})], {});
    var rule = parser.create("node", "mtable", rootAtTop ? [lower, upper] : [upper, lower], { align: "top 2", rowlines: style, framespacing: "0 0" });
    BussproofsUtil.setProperty(rule, "inferenceRule", rootAtTop ? "up" : "down");
    var leftLabel, rightLabel;
    if (left) {
      leftLabel = parser.create("node", "mpadded", [left], { height: "+.5em", width: "+.5em", voffset: "-.15em" });
      BussproofsUtil.setProperty(leftLabel, "prooflabel", "left");
    }
    if (right) {
      rightLabel = parser.create("node", "mpadded", [right], { height: "+.5em", width: "+.5em", voffset: "-.15em" });
      BussproofsUtil.setProperty(rightLabel, "prooflabel", "right");
    }
    var children, label;
    if (left && right) {
      children = [leftLabel, rule, rightLabel];
      label = "both";
    } else if (left) {
      children = [leftLabel, rule];
      label = "left";
    } else if (right) {
      children = [rule, rightLabel];
      label = "right";
    } else {
      return rule;
    }
    rule = parser.create("node", "mrow", children);
    BussproofsUtil.setProperty(rule, "labelledRule", label);
    return rule;
  }
  BussproofsMethods.Label = function(parser, name, side) {
    var top = parser.stack.Top();
    if (top.kind !== "proofTree") {
      throw new TexError_js_1.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
    }
    var content = ParseUtil_js_1.default.internalMath(parser, parser.GetArgument(name), 0);
    var label = content.length > 1 ? parser.create("node", "mrow", content, {}) : content[0];
    top.setProperty(side, label);
  };
  BussproofsMethods.SetLine = function(parser, _name, style, always) {
    var top = parser.stack.Top();
    if (top.kind !== "proofTree") {
      throw new TexError_js_1.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
    }
    top.setProperty("currentLine", style);
    if (always) {
      top.setProperty("line", style);
    }
  };
  BussproofsMethods.RootAtTop = function(parser, _name, where) {
    var top = parser.stack.Top();
    if (top.kind !== "proofTree") {
      throw new TexError_js_1.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
    }
    top.setProperty("rootAtTop", where);
  };
  BussproofsMethods.AxiomF = function(parser, name) {
    var top = parser.stack.Top();
    if (top.kind !== "proofTree") {
      throw new TexError_js_1.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
    }
    var line = parseFCenterLine(parser, name);
    BussproofsUtil.setProperty(line, "axiom", true);
    top.Push(line);
  };
  function parseFCenterLine(parser, name) {
    var dollar = parser.GetNext();
    if (dollar !== "$") {
      throw new TexError_js_1.default("IllegalUseOfCommand", "Use of %1 does not match it's definition.", name);
    }
    parser.i++;
    var axiom = parser.GetUpTo(name, "$");
    if (axiom.indexOf("\\fCenter") === -1) {
      throw new TexError_js_1.default("IllegalUseOfCommand", "Missing \\fCenter in %1.", name);
    }
    var _a = __read(axiom.split("\\fCenter"), 2), prem = _a[0], conc = _a[1];
    var premise = new TexParser_js_1.default(prem, parser.stack.env, parser.configuration).mml();
    var conclusion = new TexParser_js_1.default(conc, parser.stack.env, parser.configuration).mml();
    var fcenter = new TexParser_js_1.default("\\fCenter", parser.stack.env, parser.configuration).mml();
    var left = parser.create("node", "mtd", [premise], {});
    var middle = parser.create("node", "mtd", [fcenter], {});
    var right = parser.create("node", "mtd", [conclusion], {});
    var row = parser.create("node", "mtr", [left, middle, right], {});
    var table = parser.create("node", "mtable", [row], { columnspacing: ".5ex", columnalign: "center 2" });
    BussproofsUtil.setProperty(table, "sequent", true);
    parser.configuration.addNode("sequent", row);
    return table;
  }
  BussproofsMethods.FCenter = function(_parser, _name) {};
  BussproofsMethods.InferenceF = function(parser, name, n) {
    var top = parser.stack.Top();
    if (top.kind !== "proofTree") {
      throw new TexError_js_1.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
    }
    if (top.Size() < n) {
      throw new TexError_js_1.default("BadProofTree", "Proof tree badly specified.");
    }
    var rootAtTop = top.getProperty("rootAtTop");
    var childCount = n === 1 && !top.Peek()[0].childNodes.length ? 0 : n;
    var children = [];
    do {
      if (children.length) {
        children.unshift(parser.create("node", "mtd", [], {}));
      }
      children.unshift(parser.create("node", "mtd", [top.Pop()], { rowalign: rootAtTop ? "top" : "bottom" }));
      n--;
    } while (n > 0);
    var row = parser.create("node", "mtr", children, {});
    var table = parser.create("node", "mtable", [row], { framespacing: "0 0" });
    var conclusion = parseFCenterLine(parser, name);
    var style = top.getProperty("currentLine");
    if (style !== top.getProperty("line")) {
      top.setProperty("currentLine", top.getProperty("line"));
    }
    var rule = createRule(parser, table, [conclusion], top.getProperty("left"), top.getProperty("right"), style, rootAtTop);
    top.setProperty("left", null);
    top.setProperty("right", null);
    BussproofsUtil.setProperty(rule, "inference", childCount);
    parser.configuration.addNode("inference", rule);
    top.Push(rule);
  };
  exports.default = BussproofsMethods;
});

// node_modules/mathjax-full/js/input/tex/bussproofs/BussproofsMappings.js
var require_BussproofsMappings = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var BussproofsMethods_js_1 = __importDefault(require_BussproofsMethods());
  var ParseMethods_js_1 = __importDefault(require_ParseMethods());
  var SymbolMap_js_1 = require_SymbolMap();
  new SymbolMap_js_1.CommandMap("Bussproofs-macros", {
    AxiomC: "Axiom",
    UnaryInfC: ["Inference", 1],
    BinaryInfC: ["Inference", 2],
    TrinaryInfC: ["Inference", 3],
    QuaternaryInfC: ["Inference", 4],
    QuinaryInfC: ["Inference", 5],
    RightLabel: ["Label", "right"],
    LeftLabel: ["Label", "left"],
    AXC: "Axiom",
    UIC: ["Inference", 1],
    BIC: ["Inference", 2],
    TIC: ["Inference", 3],
    RL: ["Label", "right"],
    LL: ["Label", "left"],
    noLine: ["SetLine", "none", false],
    singleLine: ["SetLine", "solid", false],
    solidLine: ["SetLine", "solid", false],
    dashedLine: ["SetLine", "dashed", false],
    alwaysNoLine: ["SetLine", "none", true],
    alwaysSingleLine: ["SetLine", "solid", true],
    alwaysSolidLine: ["SetLine", "solid", true],
    alwaysDashedLine: ["SetLine", "dashed", true],
    rootAtTop: ["RootAtTop", true],
    alwaysRootAtTop: ["RootAtTop", true],
    rootAtBottom: ["RootAtTop", false],
    alwaysRootAtBottom: ["RootAtTop", false],
    fCenter: "FCenter",
    Axiom: "AxiomF",
    UnaryInf: ["InferenceF", 1],
    BinaryInf: ["InferenceF", 2],
    TrinaryInf: ["InferenceF", 3],
    QuaternaryInf: ["InferenceF", 4],
    QuinaryInf: ["InferenceF", 5]
  }, BussproofsMethods_js_1.default);
  new SymbolMap_js_1.EnvironmentMap("Bussproofs-environments", ParseMethods_js_1.default.environment, {
    prooftree: ["Prooftree", null, false]
  }, BussproofsMethods_js_1.default);
});

// node_modules/mathjax-full/js/input/tex/bussproofs/BussproofsConfiguration.js
var require_BussproofsConfiguration = __commonJS(function(exports) {
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BussproofsConfiguration = undefined;
  var Configuration_js_1 = require_Configuration();
  var BussproofsItems_js_1 = require_BussproofsItems();
  var BussproofsUtil_js_1 = require_BussproofsUtil();
  require_BussproofsMappings();
  exports.BussproofsConfiguration = Configuration_js_1.Configuration.create("bussproofs", {
    handler: {
      macro: ["Bussproofs-macros"],
      environment: ["Bussproofs-environments"]
    },
    items: (_a = {}, _a[BussproofsItems_js_1.ProofTreeItem.prototype.kind] = BussproofsItems_js_1.ProofTreeItem, _a),
    preprocessors: [
      [BussproofsUtil_js_1.saveDocument, 1]
    ],
    postprocessors: [
      [BussproofsUtil_js_1.clearDocument, 3],
      [BussproofsUtil_js_1.makeBsprAttributes, 2],
      [BussproofsUtil_js_1.balanceRules, 1]
    ]
  });
});

// node_modules/mathjax-full/js/input/tex/enclose/EncloseConfiguration.js
var require_EncloseConfiguration = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.EncloseConfiguration = exports.EncloseMethods = exports.ENCLOSE_OPTIONS = undefined;
  var Configuration_js_1 = require_Configuration();
  var SymbolMap_js_1 = require_SymbolMap();
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  exports.ENCLOSE_OPTIONS = {
    "data-arrowhead": 1,
    color: 1,
    mathcolor: 1,
    background: 1,
    mathbackground: 1,
    "data-padding": 1,
    "data-thickness": 1
  };
  exports.EncloseMethods = {};
  exports.EncloseMethods.Enclose = function(parser, name) {
    var notation = parser.GetArgument(name).replace(/,/g, " ");
    var attr = parser.GetBrackets(name, "");
    var math = parser.ParseArg(name);
    var def = ParseUtil_js_1.default.keyvalOptions(attr, exports.ENCLOSE_OPTIONS);
    def.notation = notation;
    parser.Push(parser.create("node", "menclose", [math], def));
  };
  new SymbolMap_js_1.CommandMap("enclose", { enclose: "Enclose" }, exports.EncloseMethods);
  exports.EncloseConfiguration = Configuration_js_1.Configuration.create("enclose", { handler: { macro: ["enclose"] } });
});

// node_modules/mathjax-full/js/input/tex/cancel/CancelConfiguration.js
var require_CancelConfiguration = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CancelConfiguration = exports.CancelMethods = undefined;
  var Configuration_js_1 = require_Configuration();
  var TexConstants_js_1 = require_TexConstants();
  var SymbolMap_js_1 = require_SymbolMap();
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var EncloseConfiguration_js_1 = require_EncloseConfiguration();
  exports.CancelMethods = {};
  exports.CancelMethods.Cancel = function(parser, name, notation) {
    var attr = parser.GetBrackets(name, "");
    var math = parser.ParseArg(name);
    var def = ParseUtil_js_1.default.keyvalOptions(attr, EncloseConfiguration_js_1.ENCLOSE_OPTIONS);
    def["notation"] = notation;
    parser.Push(parser.create("node", "menclose", [math], def));
  };
  exports.CancelMethods.CancelTo = function(parser, name) {
    var attr = parser.GetBrackets(name, "");
    var value = parser.ParseArg(name);
    var math = parser.ParseArg(name);
    var def = ParseUtil_js_1.default.keyvalOptions(attr, EncloseConfiguration_js_1.ENCLOSE_OPTIONS);
    def["notation"] = [
      TexConstants_js_1.TexConstant.Notation.UPDIAGONALSTRIKE,
      TexConstants_js_1.TexConstant.Notation.UPDIAGONALARROW,
      TexConstants_js_1.TexConstant.Notation.NORTHEASTARROW
    ].join(" ");
    value = parser.create("node", "mpadded", [value], { depth: "-.1em", height: "+.1em", voffset: ".1em" });
    parser.Push(parser.create("node", "msup", [parser.create("node", "menclose", [math], def), value]));
  };
  new SymbolMap_js_1.CommandMap("cancel", {
    cancel: ["Cancel", TexConstants_js_1.TexConstant.Notation.UPDIAGONALSTRIKE],
    bcancel: ["Cancel", TexConstants_js_1.TexConstant.Notation.DOWNDIAGONALSTRIKE],
    xcancel: ["Cancel", TexConstants_js_1.TexConstant.Notation.UPDIAGONALSTRIKE + " " + TexConstants_js_1.TexConstant.Notation.DOWNDIAGONALSTRIKE],
    cancelto: "CancelTo"
  }, exports.CancelMethods);
  exports.CancelConfiguration = Configuration_js_1.Configuration.create("cancel", { handler: { macro: ["cancel"] } });
});

// node_modules/mathjax-full/js/input/tex/empheq/EmpheqUtil.js
var require_EmpheqUtil = __commonJS(function(exports) {
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
  exports.EmpheqUtil = undefined;
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var TexParser_js_1 = __importDefault(require_TexParser());
  exports.EmpheqUtil = {
    environment: function(parser, env, func, args) {
      var name = args[0];
      var item = parser.itemFactory.create(name + "-begin").setProperties({ name: env, end: name });
      parser.Push(func.apply(undefined, __spreadArray([parser, item], __read(args.slice(1)), false)));
    },
    splitOptions: function(text, allowed) {
      if (allowed === undefined) {
        allowed = null;
      }
      return ParseUtil_js_1.default.keyvalOptions(text, allowed, true);
    },
    columnCount: function(table) {
      var e_1, _a;
      var m = 0;
      try {
        for (var _b = __values(table.childNodes), _c = _b.next();!_c.done; _c = _b.next()) {
          var row = _c.value;
          var n = row.childNodes.length - (row.isKind("mlabeledtr") ? 1 : 0);
          if (n > m)
            m = n;
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
      return m;
    },
    cellBlock: function(tex, table, parser, env) {
      var e_2, _a;
      var mpadded = parser.create("node", "mpadded", [], { height: 0, depth: 0, voffset: "-1height" });
      var result = new TexParser_js_1.default(tex, parser.stack.env, parser.configuration);
      var mml = result.mml();
      if (env && result.configuration.tags.label) {
        result.configuration.tags.currentTag.env = env;
        result.configuration.tags.getTag(true);
      }
      try {
        for (var _b = __values(mml.isInferred ? mml.childNodes : [mml]), _c = _b.next();!_c.done; _c = _b.next()) {
          var child = _c.value;
          mpadded.appendChild(child);
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
      mpadded.appendChild(parser.create("node", "mphantom", [
        parser.create("node", "mpadded", [table], { width: 0 })
      ]));
      return mpadded;
    },
    topRowTable: function(original, parser) {
      var table = ParseUtil_js_1.default.copyNode(original, parser);
      table.setChildren(table.childNodes.slice(0, 1));
      table.attributes.set("align", "baseline 1");
      return original.factory.create("mphantom", {}, [parser.create("node", "mpadded", [table], { width: 0 })]);
    },
    rowspanCell: function(mtd, tex, table, parser, env) {
      mtd.appendChild(parser.create("node", "mpadded", [
        this.cellBlock(tex, ParseUtil_js_1.default.copyNode(table, parser), parser, env),
        this.topRowTable(table, parser)
      ], { height: 0, depth: 0, voffset: "height" }));
    },
    left: function(table, original, left, parser, env) {
      var e_3, _a;
      if (env === undefined) {
        env = "";
      }
      table.attributes.set("columnalign", "right " + (table.attributes.get("columnalign") || ""));
      table.attributes.set("columnspacing", "0em " + (table.attributes.get("columnspacing") || ""));
      var mtd;
      try {
        for (var _b = __values(table.childNodes.slice(0).reverse()), _c = _b.next();!_c.done; _c = _b.next()) {
          var row = _c.value;
          mtd = parser.create("node", "mtd");
          row.childNodes.unshift(mtd);
          mtd.parent = row;
          if (row.isKind("mlabeledtr")) {
            row.childNodes[0] = row.childNodes[1];
            row.childNodes[1] = mtd;
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
      this.rowspanCell(mtd, left, original, parser, env);
    },
    right: function(table, original, right, parser, env) {
      if (env === undefined) {
        env = "";
      }
      if (table.childNodes.length === 0) {
        table.appendChild(parser.create("node", "mtr"));
      }
      var m = exports.EmpheqUtil.columnCount(table);
      var row = table.childNodes[0];
      while (row.childNodes.length < m)
        row.appendChild(parser.create("node", "mtd"));
      var mtd = row.appendChild(parser.create("node", "mtd"));
      exports.EmpheqUtil.rowspanCell(mtd, right, original, parser, env);
      table.attributes.set("columnalign", (table.attributes.get("columnalign") || "").split(/ /).slice(0, m).join(" ") + " left");
      table.attributes.set("columnspacing", (table.attributes.get("columnspacing") || "").split(/ /).slice(0, m - 1).join(" ") + " 0em");
    },
    adjustTable: function(empheq, parser) {
      var left = empheq.getProperty("left");
      var right = empheq.getProperty("right");
      if (left || right) {
        var table = empheq.Last;
        var original = ParseUtil_js_1.default.copyNode(table, parser);
        if (left)
          this.left(table, original, left, parser);
        if (right)
          this.right(table, original, right, parser);
      }
    },
    allowEnv: {
      equation: true,
      align: true,
      gather: true,
      flalign: true,
      alignat: true,
      multline: true
    },
    checkEnv: function(env) {
      return this.allowEnv.hasOwnProperty(env.replace(/\*$/, "")) || false;
    }
  };
});

// node_modules/mathjax-full/js/input/tex/cases/CasesConfiguration.js
var require_CasesConfiguration = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CasesConfiguration = exports.CasesMethods = exports.CasesTags = exports.CasesBeginItem = undefined;
  var Configuration_js_1 = require_Configuration();
  var SymbolMap_js_1 = require_SymbolMap();
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var BaseMethods_js_1 = __importDefault(require_BaseMethods());
  var TexError_js_1 = __importDefault(require_TexError());
  var BaseItems_js_1 = require_BaseItems();
  var AmsConfiguration_js_1 = require_AmsConfiguration();
  var EmpheqUtil_js_1 = require_EmpheqUtil();
  var CasesBeginItem = function(_super) {
    __extends(CasesBeginItem, _super);
    function CasesBeginItem() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CasesBeginItem.prototype, "kind", {
      get: function() {
        return "cases-begin";
      },
      enumerable: false,
      configurable: true
    });
    CasesBeginItem.prototype.checkItem = function(item) {
      if (item.isKind("end") && item.getName() === this.getName()) {
        if (this.getProperty("end")) {
          this.setProperty("end", false);
          return [[], true];
        }
      }
      return _super.prototype.checkItem.call(this, item);
    };
    return CasesBeginItem;
  }(BaseItems_js_1.BeginItem);
  exports.CasesBeginItem = CasesBeginItem;
  var CasesTags = function(_super) {
    __extends(CasesTags, _super);
    function CasesTags() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.subcounter = 0;
      return _this;
    }
    CasesTags.prototype.start = function(env, taggable, defaultTags) {
      this.subcounter = 0;
      _super.prototype.start.call(this, env, taggable, defaultTags);
    };
    CasesTags.prototype.autoTag = function() {
      if (this.currentTag.tag != null)
        return;
      if (this.currentTag.env === "subnumcases") {
        if (this.subcounter === 0)
          this.counter++;
        this.subcounter++;
        this.tag(this.formatNumber(this.counter, this.subcounter), false);
      } else {
        if (this.subcounter === 0 || this.currentTag.env !== "numcases-left")
          this.counter++;
        this.tag(this.formatNumber(this.counter), false);
      }
    };
    CasesTags.prototype.formatNumber = function(n, m) {
      if (m === undefined) {
        m = null;
      }
      return n.toString() + (m === null ? "" : String.fromCharCode(96 + m));
    };
    return CasesTags;
  }(AmsConfiguration_js_1.AmsTags);
  exports.CasesTags = CasesTags;
  exports.CasesMethods = {
    NumCases: function(parser, begin) {
      if (parser.stack.env.closing === begin.getName()) {
        delete parser.stack.env.closing;
        parser.Push(parser.itemFactory.create("end").setProperty("name", begin.getName()));
        var cases = parser.stack.Top();
        var table = cases.Last;
        var original = ParseUtil_js_1.default.copyNode(table, parser);
        var left = cases.getProperty("left");
        EmpheqUtil_js_1.EmpheqUtil.left(table, original, left + "\\empheqlbrace\\,", parser, "numcases-left");
        parser.Push(parser.itemFactory.create("end").setProperty("name", begin.getName()));
        return null;
      } else {
        var left = parser.GetArgument("\\begin{" + begin.getName() + "}");
        begin.setProperty("left", left);
        var array = BaseMethods_js_1.default.EqnArray(parser, begin, true, true, "ll");
        array.arraydef.displaystyle = false;
        array.arraydef.rowspacing = ".2em";
        array.setProperty("numCases", true);
        parser.Push(begin);
        return array;
      }
    },
    Entry: function(parser, name) {
      if (!parser.stack.Top().getProperty("numCases")) {
        return BaseMethods_js_1.default.Entry(parser, name);
      }
      parser.Push(parser.itemFactory.create("cell").setProperties({ isEntry: true, name }));
      var tex = parser.string;
      var braces = 0, i = parser.i, m = tex.length;
      while (i < m) {
        var c = tex.charAt(i);
        if (c === "{") {
          braces++;
          i++;
        } else if (c === "}") {
          if (braces === 0) {
            break;
          } else {
            braces--;
            i++;
          }
        } else if (c === "&" && braces === 0) {
          throw new TexError_js_1.default("ExtraCasesAlignTab", "Extra alignment tab in text for numcase environment");
        } else if (c === "\\" && braces === 0) {
          var cs = (tex.slice(i + 1).match(/^[a-z]+|./i) || [])[0];
          if (cs === "\\" || cs === "cr" || cs === "end" || cs === "label") {
            break;
          } else {
            i += cs.length;
          }
        } else {
          i++;
        }
      }
      var text = tex.substr(parser.i, i - parser.i).replace(/^\s*/, "");
      parser.PushAll(ParseUtil_js_1.default.internalMath(parser, text, 0));
      parser.i = i;
    }
  };
  new SymbolMap_js_1.EnvironmentMap("cases-env", EmpheqUtil_js_1.EmpheqUtil.environment, {
    numcases: ["NumCases", "cases"],
    subnumcases: ["NumCases", "cases"]
  }, exports.CasesMethods);
  new SymbolMap_js_1.MacroMap("cases-macros", {
    "&": "Entry"
  }, exports.CasesMethods);
  exports.CasesConfiguration = Configuration_js_1.Configuration.create("cases", {
    handler: {
      environment: ["cases-env"],
      character: ["cases-macros"]
    },
    items: (_a = {}, _a[CasesBeginItem.prototype.kind] = CasesBeginItem, _a),
    tags: { cases: CasesTags }
  });
});

// node_modules/mathjax-full/js/input/tex/centernot/CenternotConfiguration.js
var require_CenternotConfiguration = __commonJS(function(exports) {
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
  exports.CenternotConfiguration = exports.filterCenterOver = undefined;
  var Configuration_js_1 = require_Configuration();
  var TexParser_js_1 = __importDefault(require_TexParser());
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var SymbolMap_js_1 = require_SymbolMap();
  var BaseMethods_js_1 = __importDefault(require_BaseMethods());
  new SymbolMap_js_1.CommandMap("centernot", {
    centerOver: "CenterOver",
    centernot: ["Macro", "\\centerOver{#1}{{⧸}}", 1]
  }, {
    CenterOver: function(parser, name) {
      var arg = "{" + parser.GetArgument(name) + "}";
      var over = parser.ParseArg(name);
      var base = new TexParser_js_1.default(arg, parser.stack.env, parser.configuration).mml();
      var mml = parser.create("node", "TeXAtom", [
        new TexParser_js_1.default(arg, parser.stack.env, parser.configuration).mml(),
        parser.create("node", "mpadded", [
          parser.create("node", "mpadded", [over], { width: 0, lspace: "-.5width" }),
          parser.create("node", "mphantom", [base])
        ], { width: 0, lspace: "-.5width" })
      ]);
      parser.configuration.addNode("centerOver", base);
      parser.Push(mml);
    },
    Macro: BaseMethods_js_1.default.Macro
  });
  function filterCenterOver(_a) {
    var e_1, _b;
    var data = _a.data;
    try {
      for (var _c = __values(data.getList("centerOver")), _d = _c.next();!_d.done; _d = _c.next()) {
        var base = _d.value;
        var texClass = NodeUtil_js_1.default.getTexClass(base.childNodes[0].childNodes[0]);
        if (texClass !== null) {
          NodeUtil_js_1.default.setProperties(base.parent.parent.parent.parent.parent.parent, { texClass });
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
  }
  exports.filterCenterOver = filterCenterOver;
  exports.CenternotConfiguration = Configuration_js_1.Configuration.create("centernot", {
    handler: { macro: ["centernot"] },
    postprocessors: [filterCenterOver]
  });
});

// node_modules/mathjax-full/js/input/tex/color/ColorMethods.js
var require_ColorMethods = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ColorMethods = undefined;
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  function padding(colorPadding) {
    var pad = "+".concat(colorPadding);
    var unit = colorPadding.replace(/^.*?([a-z]*)$/, "$1");
    var pad2 = 2 * parseFloat(pad);
    return {
      width: "+".concat(pad2).concat(unit),
      height: pad,
      depth: pad,
      lspace: colorPadding
    };
  }
  exports.ColorMethods = {};
  exports.ColorMethods.Color = function(parser, name) {
    var model = parser.GetBrackets(name, "");
    var colorDef = parser.GetArgument(name);
    var colorModel = parser.configuration.packageData.get("color").model;
    var color = colorModel.getColor(model, colorDef);
    var style = parser.itemFactory.create("style").setProperties({ styles: { mathcolor: color } });
    parser.stack.env["color"] = color;
    parser.Push(style);
  };
  exports.ColorMethods.TextColor = function(parser, name) {
    var model = parser.GetBrackets(name, "");
    var colorDef = parser.GetArgument(name);
    var colorModel = parser.configuration.packageData.get("color").model;
    var color = colorModel.getColor(model, colorDef);
    var old = parser.stack.env["color"];
    parser.stack.env["color"] = color;
    var math = parser.ParseArg(name);
    if (old) {
      parser.stack.env["color"] = old;
    } else {
      delete parser.stack.env["color"];
    }
    var node = parser.create("node", "mstyle", [math], { mathcolor: color });
    parser.Push(node);
  };
  exports.ColorMethods.DefineColor = function(parser, name) {
    var cname = parser.GetArgument(name);
    var model = parser.GetArgument(name);
    var def = parser.GetArgument(name);
    var colorModel = parser.configuration.packageData.get("color").model;
    colorModel.defineColor(model, cname, def);
  };
  exports.ColorMethods.ColorBox = function(parser, name) {
    var cname = parser.GetArgument(name);
    var math = ParseUtil_js_1.default.internalMath(parser, parser.GetArgument(name));
    var colorModel = parser.configuration.packageData.get("color").model;
    var node = parser.create("node", "mpadded", math, {
      mathbackground: colorModel.getColor("named", cname)
    });
    NodeUtil_js_1.default.setProperties(node, padding(parser.options.color.padding));
    parser.Push(node);
  };
  exports.ColorMethods.FColorBox = function(parser, name) {
    var fname = parser.GetArgument(name);
    var cname = parser.GetArgument(name);
    var math = ParseUtil_js_1.default.internalMath(parser, parser.GetArgument(name));
    var options = parser.options.color;
    var colorModel = parser.configuration.packageData.get("color").model;
    var node = parser.create("node", "mpadded", math, {
      mathbackground: colorModel.getColor("named", cname),
      style: "border: ".concat(options.borderWidth, " solid ").concat(colorModel.getColor("named", fname))
    });
    NodeUtil_js_1.default.setProperties(node, padding(options.padding));
    parser.Push(node);
  };
});

// node_modules/mathjax-full/js/input/tex/color/ColorConstants.js
var require_ColorConstants = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.COLORS = undefined;
  exports.COLORS = new Map([
    ["Apricot", "#FBB982"],
    ["Aquamarine", "#00B5BE"],
    ["Bittersweet", "#C04F17"],
    ["Black", "#221E1F"],
    ["Blue", "#2D2F92"],
    ["BlueGreen", "#00B3B8"],
    ["BlueViolet", "#473992"],
    ["BrickRed", "#B6321C"],
    ["Brown", "#792500"],
    ["BurntOrange", "#F7921D"],
    ["CadetBlue", "#74729A"],
    ["CarnationPink", "#F282B4"],
    ["Cerulean", "#00A2E3"],
    ["CornflowerBlue", "#41B0E4"],
    ["Cyan", "#00AEEF"],
    ["Dandelion", "#FDBC42"],
    ["DarkOrchid", "#A4538A"],
    ["Emerald", "#00A99D"],
    ["ForestGreen", "#009B55"],
    ["Fuchsia", "#8C368C"],
    ["Goldenrod", "#FFDF42"],
    ["Gray", "#949698"],
    ["Green", "#00A64F"],
    ["GreenYellow", "#DFE674"],
    ["JungleGreen", "#00A99A"],
    ["Lavender", "#F49EC4"],
    ["LimeGreen", "#8DC73E"],
    ["Magenta", "#EC008C"],
    ["Mahogany", "#A9341F"],
    ["Maroon", "#AF3235"],
    ["Melon", "#F89E7B"],
    ["MidnightBlue", "#006795"],
    ["Mulberry", "#A93C93"],
    ["NavyBlue", "#006EB8"],
    ["OliveGreen", "#3C8031"],
    ["Orange", "#F58137"],
    ["OrangeRed", "#ED135A"],
    ["Orchid", "#AF72B0"],
    ["Peach", "#F7965A"],
    ["Periwinkle", "#7977B8"],
    ["PineGreen", "#008B72"],
    ["Plum", "#92268F"],
    ["ProcessBlue", "#00B0F0"],
    ["Purple", "#99479B"],
    ["RawSienna", "#974006"],
    ["Red", "#ED1B23"],
    ["RedOrange", "#F26035"],
    ["RedViolet", "#A1246B"],
    ["Rhodamine", "#EF559F"],
    ["RoyalBlue", "#0071BC"],
    ["RoyalPurple", "#613F99"],
    ["RubineRed", "#ED017D"],
    ["Salmon", "#F69289"],
    ["SeaGreen", "#3FBC9D"],
    ["Sepia", "#671800"],
    ["SkyBlue", "#46C5DD"],
    ["SpringGreen", "#C6DC67"],
    ["Tan", "#DA9D76"],
    ["TealBlue", "#00AEB3"],
    ["Thistle", "#D883B7"],
    ["Turquoise", "#00B4CE"],
    ["Violet", "#58429B"],
    ["VioletRed", "#EF58A0"],
    ["White", "#FFFFFF"],
    ["WildStrawberry", "#EE2967"],
    ["Yellow", "#FFF200"],
    ["YellowGreen", "#98CC70"],
    ["YellowOrange", "#FAA21A"]
  ]);
});

// node_modules/mathjax-full/js/input/tex/color/ColorUtil.js
var require_ColorUtil = __commonJS(function(exports) {
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
  exports.ColorModel = undefined;
  var TexError_js_1 = __importDefault(require_TexError());
  var ColorConstants_js_1 = require_ColorConstants();
  var ColorModelProcessors = new Map;
  var ColorModel = function() {
    function ColorModel() {
      this.userColors = new Map;
    }
    ColorModel.prototype.normalizeColor = function(model, def) {
      if (!model || model === "named") {
        return def;
      }
      if (ColorModelProcessors.has(model)) {
        var modelProcessor = ColorModelProcessors.get(model);
        return modelProcessor(def);
      }
      throw new TexError_js_1.default("UndefinedColorModel", "Color model '%1' not defined", model);
    };
    ColorModel.prototype.getColor = function(model, def) {
      if (!model || model === "named") {
        return this.getColorByName(def);
      }
      return this.normalizeColor(model, def);
    };
    ColorModel.prototype.getColorByName = function(name) {
      if (this.userColors.has(name)) {
        return this.userColors.get(name);
      }
      if (ColorConstants_js_1.COLORS.has(name)) {
        return ColorConstants_js_1.COLORS.get(name);
      }
      return name;
    };
    ColorModel.prototype.defineColor = function(model, name, def) {
      var normalized = this.normalizeColor(model, def);
      this.userColors.set(name, normalized);
    };
    return ColorModel;
  }();
  exports.ColorModel = ColorModel;
  ColorModelProcessors.set("rgb", function(rgb) {
    var e_1, _a;
    var rgbParts = rgb.trim().split(/\s*,\s*/);
    var RGB = "#";
    if (rgbParts.length !== 3) {
      throw new TexError_js_1.default("ModelArg1", "Color values for the %1 model require 3 numbers", "rgb");
    }
    try {
      for (var rgbParts_1 = __values(rgbParts), rgbParts_1_1 = rgbParts_1.next();!rgbParts_1_1.done; rgbParts_1_1 = rgbParts_1.next()) {
        var rgbPart = rgbParts_1_1.value;
        if (!rgbPart.match(/^(\d+(\.\d*)?|\.\d+)$/)) {
          throw new TexError_js_1.default("InvalidDecimalNumber", "Invalid decimal number");
        }
        var n = parseFloat(rgbPart);
        if (n < 0 || n > 1) {
          throw new TexError_js_1.default("ModelArg2", "Color values for the %1 model must be between %2 and %3", "rgb", "0", "1");
        }
        var pn = Math.floor(n * 255).toString(16);
        if (pn.length < 2) {
          pn = "0" + pn;
        }
        RGB += pn;
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (rgbParts_1_1 && !rgbParts_1_1.done && (_a = rgbParts_1.return))
          _a.call(rgbParts_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return RGB;
  });
  ColorModelProcessors.set("RGB", function(rgb) {
    var e_2, _a;
    var rgbParts = rgb.trim().split(/\s*,\s*/);
    var RGB = "#";
    if (rgbParts.length !== 3) {
      throw new TexError_js_1.default("ModelArg1", "Color values for the %1 model require 3 numbers", "RGB");
    }
    try {
      for (var rgbParts_2 = __values(rgbParts), rgbParts_2_1 = rgbParts_2.next();!rgbParts_2_1.done; rgbParts_2_1 = rgbParts_2.next()) {
        var rgbPart = rgbParts_2_1.value;
        if (!rgbPart.match(/^\d+$/)) {
          throw new TexError_js_1.default("InvalidNumber", "Invalid number");
        }
        var n = parseInt(rgbPart);
        if (n > 255) {
          throw new TexError_js_1.default("ModelArg2", "Color values for the %1 model must be between %2 and %3", "RGB", "0", "255");
        }
        var pn = n.toString(16);
        if (pn.length < 2) {
          pn = "0" + pn;
        }
        RGB += pn;
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (rgbParts_2_1 && !rgbParts_2_1.done && (_a = rgbParts_2.return))
          _a.call(rgbParts_2);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    return RGB;
  });
  ColorModelProcessors.set("gray", function(gray) {
    if (!gray.match(/^\s*(\d+(\.\d*)?|\.\d+)\s*$/)) {
      throw new TexError_js_1.default("InvalidDecimalNumber", "Invalid decimal number");
    }
    var n = parseFloat(gray);
    if (n < 0 || n > 1) {
      throw new TexError_js_1.default("ModelArg2", "Color values for the %1 model must be between %2 and %3", "gray", "0", "1");
    }
    var pn = Math.floor(n * 255).toString(16);
    if (pn.length < 2) {
      pn = "0" + pn;
    }
    return "#".concat(pn).concat(pn).concat(pn);
  });
});

// node_modules/mathjax-full/js/input/tex/color/ColorConfiguration.js
var require_ColorConfiguration = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ColorConfiguration = undefined;
  var SymbolMap_js_1 = require_SymbolMap();
  var Configuration_js_1 = require_Configuration();
  var ColorMethods_js_1 = require_ColorMethods();
  var ColorUtil_js_1 = require_ColorUtil();
  new SymbolMap_js_1.CommandMap("color", {
    color: "Color",
    textcolor: "TextColor",
    definecolor: "DefineColor",
    colorbox: "ColorBox",
    fcolorbox: "FColorBox"
  }, ColorMethods_js_1.ColorMethods);
  var config = function(_config, jax) {
    jax.parseOptions.packageData.set("color", { model: new ColorUtil_js_1.ColorModel });
  };
  exports.ColorConfiguration = Configuration_js_1.Configuration.create("color", {
    handler: {
      macro: ["color"]
    },
    options: {
      color: {
        padding: "5px",
        borderWidth: "2px"
      }
    },
    config
  });
});

// node_modules/mathjax-full/js/input/tex/colorv2/ColorV2Configuration.js
var require_ColorV2Configuration = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ColorConfiguration = exports.ColorV2Methods = undefined;
  var SymbolMap_js_1 = require_SymbolMap();
  var Configuration_js_1 = require_Configuration();
  exports.ColorV2Methods = {
    Color: function(parser, name) {
      var color = parser.GetArgument(name);
      var old = parser.stack.env["color"];
      parser.stack.env["color"] = color;
      var math = parser.ParseArg(name);
      if (old) {
        parser.stack.env["color"] = old;
      } else {
        delete parser.stack.env["color"];
      }
      var node = parser.create("node", "mstyle", [math], { mathcolor: color });
      parser.Push(node);
    }
  };
  new SymbolMap_js_1.CommandMap("colorv2", { color: "Color" }, exports.ColorV2Methods);
  exports.ColorConfiguration = Configuration_js_1.Configuration.create("colorv2", { handler: { macro: ["colorv2"] } });
});

// node_modules/mathjax-full/js/input/tex/colortbl/ColortblConfiguration.js
var require_ColortblConfiguration = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ColortblConfiguration = exports.ColorArrayItem = undefined;
  var BaseItems_js_1 = require_BaseItems();
  var Configuration_js_1 = require_Configuration();
  var SymbolMap_js_1 = require_SymbolMap();
  var TexError_js_1 = __importDefault(require_TexError());
  var ColorArrayItem = function(_super) {
    __extends(ColorArrayItem, _super);
    function ColorArrayItem() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.color = {
        cell: "",
        row: "",
        col: []
      };
      _this.hasColor = false;
      return _this;
    }
    ColorArrayItem.prototype.EndEntry = function() {
      _super.prototype.EndEntry.call(this);
      var cell = this.row[this.row.length - 1];
      var color = this.color.cell || this.color.row || this.color.col[this.row.length - 1];
      if (color) {
        cell.attributes.set("mathbackground", color);
        this.color.cell = "";
        this.hasColor = true;
      }
    };
    ColorArrayItem.prototype.EndRow = function() {
      _super.prototype.EndRow.call(this);
      this.color.row = "";
    };
    ColorArrayItem.prototype.createMml = function() {
      var mml = _super.prototype.createMml.call(this);
      var table = mml.isKind("mrow") ? mml.childNodes[1] : mml;
      if (table.isKind("menclose")) {
        table = table.childNodes[0].childNodes[0];
      }
      if (this.hasColor && table.attributes.get("frame") === "none") {
        table.attributes.set("frame", "");
      }
      return mml;
    };
    return ColorArrayItem;
  }(BaseItems_js_1.ArrayItem);
  exports.ColorArrayItem = ColorArrayItem;
  new SymbolMap_js_1.CommandMap("colortbl", {
    cellcolor: ["TableColor", "cell"],
    rowcolor: ["TableColor", "row"],
    columncolor: ["TableColor", "col"]
  }, {
    TableColor: function(parser, name, type) {
      var lookup = parser.configuration.packageData.get("color").model;
      var model = parser.GetBrackets(name, "");
      var color = lookup.getColor(model, parser.GetArgument(name));
      var top = parser.stack.Top();
      if (!(top instanceof ColorArrayItem)) {
        throw new TexError_js_1.default("UnsupportedTableColor", "Unsupported use of %1", parser.currentCS);
      }
      if (type === "col") {
        if (top.table.length) {
          throw new TexError_js_1.default("ColumnColorNotTop", "%1 must be in the top row", name);
        }
        top.color.col[top.row.length] = color;
        if (parser.GetBrackets(name, "")) {
          parser.GetBrackets(name, "");
        }
      } else {
        top.color[type] = color;
        if (type === "row" && (top.Size() || top.row.length)) {
          throw new TexError_js_1.default("RowColorNotFirst", "%1 must be at the beginning of a row", name);
        }
      }
    }
  });
  var config = function(config, jax) {
    if (!jax.parseOptions.packageData.has("color")) {
      Configuration_js_1.ConfigurationHandler.get("color").config(config, jax);
    }
  };
  exports.ColortblConfiguration = Configuration_js_1.Configuration.create("colortbl", {
    handler: { macro: ["colortbl"] },
    items: { array: ColorArrayItem },
    priority: 10,
    config: [config, 10]
  });
});

// node_modules/mathjax-full/js/input/tex/newcommand/NewcommandUtil.js
var require_NewcommandUtil = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var TexError_js_1 = __importDefault(require_TexError());
  var Symbol_js_1 = require_Symbol();
  var NewcommandUtil;
  (function(NewcommandUtil) {
    function disassembleSymbol(name, symbol) {
      var newArgs = [name, symbol.char];
      if (symbol.attributes) {
        for (var key in symbol.attributes) {
          newArgs.push(key);
          newArgs.push(symbol.attributes[key]);
        }
      }
      return newArgs;
    }
    NewcommandUtil.disassembleSymbol = disassembleSymbol;
    function assembleSymbol(args) {
      var name = args[0];
      var char = args[1];
      var attrs = {};
      for (var i = 2;i < args.length; i = i + 2) {
        attrs[args[i]] = args[i + 1];
      }
      return new Symbol_js_1.Symbol(name, char, attrs);
    }
    NewcommandUtil.assembleSymbol = assembleSymbol;
    function GetCSname(parser, cmd) {
      var c = parser.GetNext();
      if (c !== "\\") {
        throw new TexError_js_1.default("MissingCS", "%1 must be followed by a control sequence", cmd);
      }
      var cs = ParseUtil_js_1.default.trimSpaces(parser.GetArgument(cmd));
      return cs.substr(1);
    }
    NewcommandUtil.GetCSname = GetCSname;
    function GetCsNameArgument(parser, name) {
      var cs = ParseUtil_js_1.default.trimSpaces(parser.GetArgument(name));
      if (cs.charAt(0) === "\\") {
        cs = cs.substr(1);
      }
      if (!cs.match(/^(.|[a-z]+)$/i)) {
        throw new TexError_js_1.default("IllegalControlSequenceName", "Illegal control sequence name for %1", name);
      }
      return cs;
    }
    NewcommandUtil.GetCsNameArgument = GetCsNameArgument;
    function GetArgCount(parser, name) {
      var n = parser.GetBrackets(name);
      if (n) {
        n = ParseUtil_js_1.default.trimSpaces(n);
        if (!n.match(/^[0-9]+$/)) {
          throw new TexError_js_1.default("IllegalParamNumber", "Illegal number of parameters specified in %1", name);
        }
      }
      return n;
    }
    NewcommandUtil.GetArgCount = GetArgCount;
    function GetTemplate(parser, cmd, cs) {
      var c = parser.GetNext();
      var params = [];
      var n = 0;
      var i = parser.i;
      while (parser.i < parser.string.length) {
        c = parser.GetNext();
        if (c === "#") {
          if (i !== parser.i) {
            params[n] = parser.string.substr(i, parser.i - i);
          }
          c = parser.string.charAt(++parser.i);
          if (!c.match(/^[1-9]$/)) {
            throw new TexError_js_1.default("CantUseHash2", "Illegal use of # in template for %1", cs);
          }
          if (parseInt(c) !== ++n) {
            throw new TexError_js_1.default("SequentialParam", "Parameters for %1 must be numbered sequentially", cs);
          }
          i = parser.i + 1;
        } else if (c === "{") {
          if (i !== parser.i) {
            params[n] = parser.string.substr(i, parser.i - i);
          }
          if (params.length > 0) {
            return [n.toString()].concat(params);
          } else {
            return n;
          }
        }
        parser.i++;
      }
      throw new TexError_js_1.default("MissingReplacementString", "Missing replacement string for definition of %1", cmd);
    }
    NewcommandUtil.GetTemplate = GetTemplate;
    function GetParameter(parser, name, param) {
      if (param == null) {
        return parser.GetArgument(name);
      }
      var i = parser.i;
      var j = 0;
      var hasBraces = 0;
      while (parser.i < parser.string.length) {
        var c = parser.string.charAt(parser.i);
        if (c === "{") {
          if (parser.i === i) {
            hasBraces = 1;
          }
          parser.GetArgument(name);
          j = parser.i - i;
        } else if (MatchParam(parser, param)) {
          if (hasBraces) {
            i++;
            j -= 2;
          }
          return parser.string.substr(i, j);
        } else if (c === "\\") {
          parser.i++;
          j++;
          hasBraces = 0;
          var match = parser.string.substr(parser.i).match(/[a-z]+|./i);
          if (match) {
            parser.i += match[0].length;
            j = parser.i - i;
          }
        } else {
          parser.i++;
          j++;
          hasBraces = 0;
        }
      }
      throw new TexError_js_1.default("RunawayArgument", "Runaway argument for %1?", name);
    }
    NewcommandUtil.GetParameter = GetParameter;
    function MatchParam(parser, param) {
      if (parser.string.substr(parser.i, param.length) !== param) {
        return 0;
      }
      if (param.match(/\\[a-z]+$/i) && parser.string.charAt(parser.i + param.length).match(/[a-z]/i)) {
        return 0;
      }
      parser.i += param.length;
      return 1;
    }
    NewcommandUtil.MatchParam = MatchParam;
    function addDelimiter(parser, cs, char, attr) {
      var handlers = parser.configuration.handlers;
      var handler = handlers.retrieve(NewcommandUtil.NEW_DELIMITER);
      handler.add(cs, new Symbol_js_1.Symbol(cs, char, attr));
    }
    NewcommandUtil.addDelimiter = addDelimiter;
    function addMacro(parser, cs, func, attr, symbol) {
      if (symbol === undefined) {
        symbol = "";
      }
      var handlers = parser.configuration.handlers;
      var handler = handlers.retrieve(NewcommandUtil.NEW_COMMAND);
      handler.add(cs, new Symbol_js_1.Macro(symbol ? symbol : cs, func, attr));
    }
    NewcommandUtil.addMacro = addMacro;
    function addEnvironment(parser, env, func, attr) {
      var handlers = parser.configuration.handlers;
      var handler = handlers.retrieve(NewcommandUtil.NEW_ENVIRONMENT);
      handler.add(env, new Symbol_js_1.Macro(env, func, attr));
    }
    NewcommandUtil.addEnvironment = addEnvironment;
    NewcommandUtil.NEW_DELIMITER = "new-Delimiter";
    NewcommandUtil.NEW_COMMAND = "new-Command";
    NewcommandUtil.NEW_ENVIRONMENT = "new-Environment";
  })(NewcommandUtil || (NewcommandUtil = {}));
  exports.default = NewcommandUtil;
});

// node_modules/mathjax-full/js/input/tex/newcommand/NewcommandMethods.js
var require_NewcommandMethods = __commonJS(function(exports) {
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
  var TexError_js_1 = __importDefault(require_TexError());
  var sm = __importStar(require_SymbolMap());
  var BaseMethods_js_1 = __importDefault(require_BaseMethods());
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var NewcommandUtil_js_1 = __importDefault(require_NewcommandUtil());
  var NewcommandMethods = {};
  NewcommandMethods.NewCommand = function(parser, name) {
    var cs = NewcommandUtil_js_1.default.GetCsNameArgument(parser, name);
    var n = NewcommandUtil_js_1.default.GetArgCount(parser, name);
    var opt = parser.GetBrackets(name);
    var def = parser.GetArgument(name);
    NewcommandUtil_js_1.default.addMacro(parser, cs, NewcommandMethods.Macro, [def, n, opt]);
  };
  NewcommandMethods.NewEnvironment = function(parser, name) {
    var env = ParseUtil_js_1.default.trimSpaces(parser.GetArgument(name));
    var n = NewcommandUtil_js_1.default.GetArgCount(parser, name);
    var opt = parser.GetBrackets(name);
    var bdef = parser.GetArgument(name);
    var edef = parser.GetArgument(name);
    NewcommandUtil_js_1.default.addEnvironment(parser, env, NewcommandMethods.BeginEnv, [true, bdef, edef, n, opt]);
  };
  NewcommandMethods.MacroDef = function(parser, name) {
    var cs = NewcommandUtil_js_1.default.GetCSname(parser, name);
    var params = NewcommandUtil_js_1.default.GetTemplate(parser, name, "\\" + cs);
    var def = parser.GetArgument(name);
    !(params instanceof Array) ? NewcommandUtil_js_1.default.addMacro(parser, cs, NewcommandMethods.Macro, [def, params]) : NewcommandUtil_js_1.default.addMacro(parser, cs, NewcommandMethods.MacroWithTemplate, [def].concat(params));
  };
  NewcommandMethods.Let = function(parser, name) {
    var cs = NewcommandUtil_js_1.default.GetCSname(parser, name);
    var c = parser.GetNext();
    if (c === "=") {
      parser.i++;
      c = parser.GetNext();
    }
    var handlers = parser.configuration.handlers;
    if (c === "\\") {
      name = NewcommandUtil_js_1.default.GetCSname(parser, name);
      var macro_1 = handlers.get("delimiter").lookup("\\" + name);
      if (macro_1) {
        NewcommandUtil_js_1.default.addDelimiter(parser, "\\" + cs, macro_1.char, macro_1.attributes);
        return;
      }
      var map_1 = handlers.get("macro").applicable(name);
      if (!map_1) {
        return;
      }
      if (map_1 instanceof sm.MacroMap) {
        var macro_2 = map_1.lookup(name);
        NewcommandUtil_js_1.default.addMacro(parser, cs, macro_2.func, macro_2.args, macro_2.symbol);
        return;
      }
      macro_1 = map_1.lookup(name);
      var newArgs = NewcommandUtil_js_1.default.disassembleSymbol(cs, macro_1);
      var method = function(p, _cs) {
        var rest = [];
        for (var _i = 2;_i < arguments.length; _i++) {
          rest[_i - 2] = arguments[_i];
        }
        var symb = NewcommandUtil_js_1.default.assembleSymbol(rest);
        return map_1.parser(p, symb);
      };
      NewcommandUtil_js_1.default.addMacro(parser, cs, method, newArgs);
      return;
    }
    parser.i++;
    var macro = handlers.get("delimiter").lookup(c);
    if (macro) {
      NewcommandUtil_js_1.default.addDelimiter(parser, "\\" + cs, macro.char, macro.attributes);
      return;
    }
    NewcommandUtil_js_1.default.addMacro(parser, cs, NewcommandMethods.Macro, [c]);
  };
  NewcommandMethods.MacroWithTemplate = function(parser, name, text, n) {
    var params = [];
    for (var _i = 4;_i < arguments.length; _i++) {
      params[_i - 4] = arguments[_i];
    }
    var argCount = parseInt(n, 10);
    if (argCount) {
      var args = [];
      parser.GetNext();
      if (params[0] && !NewcommandUtil_js_1.default.MatchParam(parser, params[0])) {
        throw new TexError_js_1.default("MismatchUseDef", "Use of %1 doesn't match its definition", name);
      }
      for (var i = 0;i < argCount; i++) {
        args.push(NewcommandUtil_js_1.default.GetParameter(parser, name, params[i + 1]));
      }
      text = ParseUtil_js_1.default.substituteArgs(parser, args, text);
    }
    parser.string = ParseUtil_js_1.default.addArgs(parser, text, parser.string.slice(parser.i));
    parser.i = 0;
    ParseUtil_js_1.default.checkMaxMacros(parser);
  };
  NewcommandMethods.BeginEnv = function(parser, begin, bdef, edef, n, def) {
    if (begin.getProperty("end") && parser.stack.env["closing"] === begin.getName()) {
      delete parser.stack.env["closing"];
      var rest = parser.string.slice(parser.i);
      parser.string = edef;
      parser.i = 0;
      parser.Parse();
      parser.string = rest;
      parser.i = 0;
      return parser.itemFactory.create("end").setProperty("name", begin.getName());
    }
    if (n) {
      var args = [];
      if (def != null) {
        var optional = parser.GetBrackets("\\begin{" + begin.getName() + "}");
        args.push(optional == null ? def : optional);
      }
      for (var i = args.length;i < n; i++) {
        args.push(parser.GetArgument("\\begin{" + begin.getName() + "}"));
      }
      bdef = ParseUtil_js_1.default.substituteArgs(parser, args, bdef);
      edef = ParseUtil_js_1.default.substituteArgs(parser, [], edef);
    }
    parser.string = ParseUtil_js_1.default.addArgs(parser, bdef, parser.string.slice(parser.i));
    parser.i = 0;
    return parser.itemFactory.create("beginEnv").setProperty("name", begin.getName());
  };
  NewcommandMethods.Macro = BaseMethods_js_1.default.Macro;
  exports.default = NewcommandMethods;
});

// node_modules/mathjax-full/js/input/tex/newcommand/NewcommandItems.js
var require_NewcommandItems = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BeginEnvItem = undefined;
  var TexError_js_1 = __importDefault(require_TexError());
  var StackItem_js_1 = require_StackItem();
  var BeginEnvItem = function(_super) {
    __extends(BeginEnvItem, _super);
    function BeginEnvItem() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BeginEnvItem.prototype, "kind", {
      get: function() {
        return "beginEnv";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BeginEnvItem.prototype, "isOpen", {
      get: function() {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    BeginEnvItem.prototype.checkItem = function(item) {
      if (item.isKind("end")) {
        if (item.getName() !== this.getName()) {
          throw new TexError_js_1.default("EnvBadEnd", "\\begin{%1} ended with \\end{%2}", this.getName(), item.getName());
        }
        return [[this.factory.create("mml", this.toMml())], true];
      }
      if (item.isKind("stop")) {
        throw new TexError_js_1.default("EnvMissingEnd", "Missing \\end{%1}", this.getName());
      }
      return _super.prototype.checkItem.call(this, item);
    };
    return BeginEnvItem;
  }(StackItem_js_1.BaseItem);
  exports.BeginEnvItem = BeginEnvItem;
});

// node_modules/mathjax-full/js/input/tex/configmacros/ConfigMacrosConfiguration.js
var require_ConfigMacrosConfiguration = __commonJS(function(exports) {
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
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ConfigMacrosConfiguration = undefined;
  var Configuration_js_1 = require_Configuration();
  var Options_js_1 = require_Options();
  var SymbolMap_js_1 = require_SymbolMap();
  var ParseMethods_js_1 = __importDefault(require_ParseMethods());
  var Symbol_js_1 = require_Symbol();
  var NewcommandMethods_js_1 = __importDefault(require_NewcommandMethods());
  var NewcommandItems_js_1 = require_NewcommandItems();
  var MACROSMAP = "configmacros-map";
  var ENVIRONMENTMAP = "configmacros-env-map";
  function configmacrosInit(config) {
    new SymbolMap_js_1.CommandMap(MACROSMAP, {}, {});
    new SymbolMap_js_1.EnvironmentMap(ENVIRONMENTMAP, ParseMethods_js_1.default.environment, {}, {});
    config.append(Configuration_js_1.Configuration.local({
      handler: {
        macro: [MACROSMAP],
        environment: [ENVIRONMENTMAP]
      },
      priority: 3
    }));
  }
  function configmacrosConfig(_config, jax) {
    configMacros(jax);
    configEnvironments(jax);
  }
  function configMacros(jax) {
    var e_1, _a;
    var handler = jax.parseOptions.handlers.retrieve(MACROSMAP);
    var macros = jax.parseOptions.options.macros;
    try {
      for (var _b = __values(Object.keys(macros)), _c = _b.next();!_c.done; _c = _b.next()) {
        var cs = _c.value;
        var def = typeof macros[cs] === "string" ? [macros[cs]] : macros[cs];
        var macro = Array.isArray(def[2]) ? new Symbol_js_1.Macro(cs, NewcommandMethods_js_1.default.MacroWithTemplate, def.slice(0, 2).concat(def[2])) : new Symbol_js_1.Macro(cs, NewcommandMethods_js_1.default.Macro, def);
        handler.add(cs, macro);
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
  function configEnvironments(jax) {
    var e_2, _a;
    var handler = jax.parseOptions.handlers.retrieve(ENVIRONMENTMAP);
    var environments = jax.parseOptions.options.environments;
    try {
      for (var _b = __values(Object.keys(environments)), _c = _b.next();!_c.done; _c = _b.next()) {
        var env = _c.value;
        handler.add(env, new Symbol_js_1.Macro(env, NewcommandMethods_js_1.default.BeginEnv, [true].concat(environments[env])));
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
  }
  exports.ConfigMacrosConfiguration = Configuration_js_1.Configuration.create("configmacros", {
    init: configmacrosInit,
    config: configmacrosConfig,
    items: (_a = {}, _a[NewcommandItems_js_1.BeginEnvItem.prototype.kind] = NewcommandItems_js_1.BeginEnvItem, _a),
    options: {
      macros: (0, Options_js_1.expandable)({}),
      environments: (0, Options_js_1.expandable)({})
    }
  });
});

// node_modules/mathjax-full/js/input/tex/empheq/EmpheqConfiguration.js
var require_EmpheqConfiguration = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.EmpheqConfiguration = exports.EmpheqMethods = exports.EmpheqBeginItem = undefined;
  var Configuration_js_1 = require_Configuration();
  var SymbolMap_js_1 = require_SymbolMap();
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var TexError_js_1 = __importDefault(require_TexError());
  var BaseItems_js_1 = require_BaseItems();
  var EmpheqUtil_js_1 = require_EmpheqUtil();
  var EmpheqBeginItem = function(_super) {
    __extends(EmpheqBeginItem, _super);
    function EmpheqBeginItem() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EmpheqBeginItem.prototype, "kind", {
      get: function() {
        return "empheq-begin";
      },
      enumerable: false,
      configurable: true
    });
    EmpheqBeginItem.prototype.checkItem = function(item) {
      if (item.isKind("end") && item.getName() === this.getName()) {
        this.setProperty("end", false);
      }
      return _super.prototype.checkItem.call(this, item);
    };
    return EmpheqBeginItem;
  }(BaseItems_js_1.BeginItem);
  exports.EmpheqBeginItem = EmpheqBeginItem;
  exports.EmpheqMethods = {
    Empheq: function(parser, begin) {
      if (parser.stack.env.closing === begin.getName()) {
        delete parser.stack.env.closing;
        parser.Push(parser.itemFactory.create("end").setProperty("name", parser.stack.global.empheq));
        parser.stack.global.empheq = "";
        var empheq = parser.stack.Top();
        EmpheqUtil_js_1.EmpheqUtil.adjustTable(empheq, parser);
        parser.Push(parser.itemFactory.create("end").setProperty("name", "empheq"));
      } else {
        ParseUtil_js_1.default.checkEqnEnv(parser);
        delete parser.stack.global.eqnenv;
        var opts = parser.GetBrackets("\\begin{" + begin.getName() + "}") || "";
        var _a = __read((parser.GetArgument("\\begin{" + begin.getName() + "}") || "").split(/=/), 2), env = _a[0], n = _a[1];
        if (!EmpheqUtil_js_1.EmpheqUtil.checkEnv(env)) {
          throw new TexError_js_1.default("UnknownEnv", 'Unknown environment "%1"', env);
        }
        if (opts) {
          begin.setProperties(EmpheqUtil_js_1.EmpheqUtil.splitOptions(opts, { left: 1, right: 1 }));
        }
        parser.stack.global.empheq = env;
        parser.string = "\\begin{" + env + "}" + (n ? "{" + n + "}" : "") + parser.string.slice(parser.i);
        parser.i = 0;
        parser.Push(begin);
      }
    },
    EmpheqMO: function(parser, _name, c) {
      parser.Push(parser.create("token", "mo", {}, c));
    },
    EmpheqDelim: function(parser, name) {
      var c = parser.GetDelimiter(name);
      parser.Push(parser.create("token", "mo", { stretchy: true, symmetric: true }, c));
    }
  };
  new SymbolMap_js_1.EnvironmentMap("empheq-env", EmpheqUtil_js_1.EmpheqUtil.environment, {
    empheq: ["Empheq", "empheq"]
  }, exports.EmpheqMethods);
  new SymbolMap_js_1.CommandMap("empheq-macros", {
    empheqlbrace: ["EmpheqMO", "{"],
    empheqrbrace: ["EmpheqMO", "}"],
    empheqlbrack: ["EmpheqMO", "["],
    empheqrbrack: ["EmpheqMO", "]"],
    empheqlangle: ["EmpheqMO", "⟨"],
    empheqrangle: ["EmpheqMO", "⟩"],
    empheqlparen: ["EmpheqMO", "("],
    empheqrparen: ["EmpheqMO", ")"],
    empheqlvert: ["EmpheqMO", "|"],
    empheqrvert: ["EmpheqMO", "|"],
    empheqlVert: ["EmpheqMO", "‖"],
    empheqrVert: ["EmpheqMO", "‖"],
    empheqlfloor: ["EmpheqMO", "⌊"],
    empheqrfloor: ["EmpheqMO", "⌋"],
    empheqlceil: ["EmpheqMO", "⌈"],
    empheqrceil: ["EmpheqMO", "⌉"],
    empheqbiglbrace: ["EmpheqMO", "{"],
    empheqbigrbrace: ["EmpheqMO", "}"],
    empheqbiglbrack: ["EmpheqMO", "["],
    empheqbigrbrack: ["EmpheqMO", "]"],
    empheqbiglangle: ["EmpheqMO", "⟨"],
    empheqbigrangle: ["EmpheqMO", "⟩"],
    empheqbiglparen: ["EmpheqMO", "("],
    empheqbigrparen: ["EmpheqMO", ")"],
    empheqbiglvert: ["EmpheqMO", "|"],
    empheqbigrvert: ["EmpheqMO", "|"],
    empheqbiglVert: ["EmpheqMO", "‖"],
    empheqbigrVert: ["EmpheqMO", "‖"],
    empheqbiglfloor: ["EmpheqMO", "⌊"],
    empheqbigrfloor: ["EmpheqMO", "⌋"],
    empheqbiglceil: ["EmpheqMO", "⌈"],
    empheqbigrceil: ["EmpheqMO", "⌉"],
    empheql: "EmpheqDelim",
    empheqr: "EmpheqDelim",
    empheqbigl: "EmpheqDelim",
    empheqbigr: "EmpheqDelim"
  }, exports.EmpheqMethods);
  exports.EmpheqConfiguration = Configuration_js_1.Configuration.create("empheq", {
    handler: {
      macro: ["empheq-macros"],
      environment: ["empheq-env"]
    },
    items: (_a = {}, _a[EmpheqBeginItem.prototype.kind] = EmpheqBeginItem, _a)
  });
});

// node_modules/mathjax-full/js/input/tex/newcommand/NewcommandMappings.js
var require_NewcommandMappings = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var NewcommandMethods_js_1 = __importDefault(require_NewcommandMethods());
  var SymbolMap_js_1 = require_SymbolMap();
  new SymbolMap_js_1.CommandMap("Newcommand-macros", {
    newcommand: "NewCommand",
    renewcommand: "NewCommand",
    newenvironment: "NewEnvironment",
    renewenvironment: "NewEnvironment",
    def: "MacroDef",
    let: "Let"
  }, NewcommandMethods_js_1.default);
});

// node_modules/mathjax-full/js/input/tex/newcommand/NewcommandConfiguration.js
var require_NewcommandConfiguration = __commonJS(function(exports) {
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
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.NewcommandConfiguration = undefined;
  var Configuration_js_1 = require_Configuration();
  var NewcommandItems_js_1 = require_NewcommandItems();
  var NewcommandUtil_js_1 = __importDefault(require_NewcommandUtil());
  require_NewcommandMappings();
  var ParseMethods_js_1 = __importDefault(require_ParseMethods());
  var sm = __importStar(require_SymbolMap());
  var init = function(config) {
    new sm.DelimiterMap(NewcommandUtil_js_1.default.NEW_DELIMITER, ParseMethods_js_1.default.delimiter, {});
    new sm.CommandMap(NewcommandUtil_js_1.default.NEW_COMMAND, {}, {});
    new sm.EnvironmentMap(NewcommandUtil_js_1.default.NEW_ENVIRONMENT, ParseMethods_js_1.default.environment, {}, {});
    config.append(Configuration_js_1.Configuration.local({
      handler: {
        character: [],
        delimiter: [NewcommandUtil_js_1.default.NEW_DELIMITER],
        macro: [
          NewcommandUtil_js_1.default.NEW_DELIMITER,
          NewcommandUtil_js_1.default.NEW_COMMAND
        ],
        environment: [NewcommandUtil_js_1.default.NEW_ENVIRONMENT]
      },
      priority: -1
    }));
  };
  exports.NewcommandConfiguration = Configuration_js_1.Configuration.create("newcommand", {
    handler: {
      macro: ["Newcommand-macros"]
    },
    items: (_a = {}, _a[NewcommandItems_js_1.BeginEnvItem.prototype.kind] = NewcommandItems_js_1.BeginEnvItem, _a),
    options: { maxMacros: 1000 },
    init
  });
});

// node_modules/mathjax-full/js/input/tex/extpfeil/ExtpfeilConfiguration.js
var require_ExtpfeilConfiguration = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ExtpfeilConfiguration = exports.ExtpfeilMethods = undefined;
  var Configuration_js_1 = require_Configuration();
  var SymbolMap_js_1 = require_SymbolMap();
  var AmsMethods_js_1 = require_AmsMethods();
  var NewcommandUtil_js_1 = __importDefault(require_NewcommandUtil());
  var NewcommandConfiguration_js_1 = require_NewcommandConfiguration();
  var TexError_js_1 = __importDefault(require_TexError());
  exports.ExtpfeilMethods = {};
  exports.ExtpfeilMethods.xArrow = AmsMethods_js_1.AmsMethods.xArrow;
  exports.ExtpfeilMethods.NewExtArrow = function(parser, name) {
    var cs = parser.GetArgument(name);
    var space = parser.GetArgument(name);
    var chr = parser.GetArgument(name);
    if (!cs.match(/^\\([a-z]+|.)$/i)) {
      throw new TexError_js_1.default("NewextarrowArg1", "First argument to %1 must be a control sequence name", name);
    }
    if (!space.match(/^(\d+),(\d+)$/)) {
      throw new TexError_js_1.default("NewextarrowArg2", "Second argument to %1 must be two integers separated by a comma", name);
    }
    if (!chr.match(/^(\d+|0x[0-9A-F]+)$/i)) {
      throw new TexError_js_1.default("NewextarrowArg3", "Third argument to %1 must be a unicode character number", name);
    }
    cs = cs.substr(1);
    var spaces = space.split(",");
    NewcommandUtil_js_1.default.addMacro(parser, cs, exports.ExtpfeilMethods.xArrow, [parseInt(chr), parseInt(spaces[0]), parseInt(spaces[1])]);
  };
  new SymbolMap_js_1.CommandMap("extpfeil", {
    xtwoheadrightarrow: ["xArrow", 8608, 12, 16],
    xtwoheadleftarrow: ["xArrow", 8606, 17, 13],
    xmapsto: ["xArrow", 8614, 6, 7],
    xlongequal: ["xArrow", 61, 7, 7],
    xtofrom: ["xArrow", 8644, 12, 12],
    Newextarrow: "NewExtArrow"
  }, exports.ExtpfeilMethods);
  var init = function(config) {
    NewcommandConfiguration_js_1.NewcommandConfiguration.init(config);
  };
  exports.ExtpfeilConfiguration = Configuration_js_1.Configuration.create("extpfeil", {
    handler: { macro: ["extpfeil"] },
    init
  });
});

// node_modules/mathjax-full/js/input/tex/gensymb/GensymbConfiguration.js
var require_GensymbConfiguration = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.GensymbConfiguration = undefined;
  var Configuration_js_1 = require_Configuration();
  var TexConstants_js_1 = require_TexConstants();
  var SymbolMap_js_1 = require_SymbolMap();
  function mathcharUnit(parser, mchar) {
    var def = mchar.attributes || {};
    def.mathvariant = TexConstants_js_1.TexConstant.Variant.NORMAL;
    def.class = "MathML-Unit";
    var node = parser.create("token", "mi", def, mchar.char);
    parser.Push(node);
  }
  new SymbolMap_js_1.CharacterMap("gensymb-symbols", mathcharUnit, {
    ohm: "Ω",
    degree: "°",
    celsius: "℃",
    perthousand: "‰",
    micro: "µ"
  });
  exports.GensymbConfiguration = Configuration_js_1.Configuration.create("gensymb", {
    handler: { macro: ["gensymb-symbols"] }
  });
});

// node_modules/mathjax-full/js/input/tex/html/HtmlMethods.js
var require_HtmlMethods = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var HtmlMethods = {};
  HtmlMethods.Href = function(parser, name) {
    var url = parser.GetArgument(name);
    var arg = GetArgumentMML(parser, name);
    NodeUtil_js_1.default.setAttribute(arg, "href", url);
    parser.Push(arg);
  };
  HtmlMethods.Class = function(parser, name) {
    var CLASS = parser.GetArgument(name);
    var arg = GetArgumentMML(parser, name);
    var oldClass = NodeUtil_js_1.default.getAttribute(arg, "class");
    if (oldClass) {
      CLASS = oldClass + " " + CLASS;
    }
    NodeUtil_js_1.default.setAttribute(arg, "class", CLASS);
    parser.Push(arg);
  };
  HtmlMethods.Style = function(parser, name) {
    var style = parser.GetArgument(name);
    var arg = GetArgumentMML(parser, name);
    var oldStyle = NodeUtil_js_1.default.getAttribute(arg, "style");
    if (oldStyle) {
      if (style.charAt(style.length - 1) !== ";") {
        style += ";";
      }
      style = oldStyle + " " + style;
    }
    NodeUtil_js_1.default.setAttribute(arg, "style", style);
    parser.Push(arg);
  };
  HtmlMethods.Id = function(parser, name) {
    var ID = parser.GetArgument(name);
    var arg = GetArgumentMML(parser, name);
    NodeUtil_js_1.default.setAttribute(arg, "id", ID);
    parser.Push(arg);
  };
  var GetArgumentMML = function(parser, name) {
    var arg = parser.ParseArg(name);
    if (!NodeUtil_js_1.default.isInferred(arg)) {
      return arg;
    }
    var children = NodeUtil_js_1.default.getChildren(arg);
    if (children.length === 1) {
      return children[0];
    }
    var mrow = parser.create("node", "mrow");
    NodeUtil_js_1.default.copyChildren(arg, mrow);
    NodeUtil_js_1.default.copyAttributes(arg, mrow);
    return mrow;
  };
  exports.default = HtmlMethods;
});

// node_modules/mathjax-full/js/input/tex/html/HtmlConfiguration.js
var require_HtmlConfiguration = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.HtmlConfiguration = undefined;
  var Configuration_js_1 = require_Configuration();
  var SymbolMap_js_1 = require_SymbolMap();
  var HtmlMethods_js_1 = __importDefault(require_HtmlMethods());
  new SymbolMap_js_1.CommandMap("html_macros", {
    href: "Href",
    class: "Class",
    style: "Style",
    cssId: "Id"
  }, HtmlMethods_js_1.default);
  exports.HtmlConfiguration = Configuration_js_1.Configuration.create("html", { handler: { macro: ["html_macros"] } });
});

// node_modules/mathjax-full/js/input/tex/mathtools/MathtoolsUtil.js
var require_MathtoolsUtil = __commonJS(function(exports) {
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
  exports.MathtoolsUtil = undefined;
  var BaseItems_js_1 = require_BaseItems();
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var TexParser_js_1 = __importDefault(require_TexParser());
  var TexError_js_1 = __importDefault(require_TexError());
  var Symbol_js_1 = require_Symbol();
  var Options_js_1 = require_Options();
  var MathtoolsMethods_js_1 = require_MathtoolsMethods();
  var MathtoolsConfiguration_js_1 = require_MathtoolsConfiguration();
  exports.MathtoolsUtil = {
    setDisplayLevel: function(mml, style) {
      if (!style)
        return;
      var _a = __read((0, Options_js_1.lookup)(style, {
        "\\displaystyle": [true, 0],
        "\\textstyle": [false, 0],
        "\\scriptstyle": [false, 1],
        "\\scriptscriptstyle": [false, 2]
      }, [null, null]), 2), display = _a[0], script = _a[1];
      if (display !== null) {
        mml.attributes.set("displaystyle", display);
        mml.attributes.set("scriptlevel", script);
      }
    },
    checkAlignment: function(parser, name) {
      var top = parser.stack.Top();
      if (top.kind !== BaseItems_js_1.EqnArrayItem.prototype.kind) {
        throw new TexError_js_1.default("NotInAlignment", "%1 can only be used in aligment environments", name);
      }
      return top;
    },
    addPairedDelims: function(config, cs, args) {
      var delims = config.handlers.retrieve(MathtoolsConfiguration_js_1.PAIREDDELIMS);
      delims.add(cs, new Symbol_js_1.Macro(cs, MathtoolsMethods_js_1.MathtoolsMethods.PairedDelimiters, args));
    },
    spreadLines: function(mtable, spread) {
      if (!mtable.isKind("mtable"))
        return;
      var rowspacing = mtable.attributes.get("rowspacing");
      if (rowspacing) {
        var add_1 = ParseUtil_js_1.default.dimen2em(spread);
        rowspacing = rowspacing.split(/ /).map(function(s) {
          return ParseUtil_js_1.default.Em(Math.max(0, ParseUtil_js_1.default.dimen2em(s) + add_1));
        }).join(" ");
      } else {
        rowspacing = spread;
      }
      mtable.attributes.set("rowspacing", rowspacing);
    },
    plusOrMinus: function(name, n) {
      n = n.trim();
      if (!n.match(/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)$/)) {
        throw new TexError_js_1.default("NotANumber", "Argument to %1 is not a number", name);
      }
      return n.match(/^[-+]/) ? n : "+" + n;
    },
    getScript: function(parser, name, pos) {
      var arg = ParseUtil_js_1.default.trimSpaces(parser.GetArgument(name));
      if (arg === "") {
        return parser.create("node", "none");
      }
      var format = parser.options.mathtools["prescript-".concat(pos, "-format")];
      format && (arg = "".concat(format, "{").concat(arg, "}"));
      return new TexParser_js_1.default(arg, parser.stack.env, parser.configuration).mml();
    }
  };
});

// node_modules/mathjax-full/js/input/tex/mathtools/MathtoolsMethods.js
var require_MathtoolsMethods = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MathtoolsMethods = undefined;
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var AmsMethods_js_1 = require_AmsMethods();
  var BaseMethods_js_1 = __importDefault(require_BaseMethods());
  var TexParser_js_1 = __importDefault(require_TexParser());
  var TexError_js_1 = __importDefault(require_TexError());
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var MmlNode_js_1 = require_MmlNode();
  var lengths_js_1 = require_lengths();
  var Options_js_1 = require_Options();
  var NewcommandUtil_js_1 = __importDefault(require_NewcommandUtil());
  var NewcommandMethods_js_1 = __importDefault(require_NewcommandMethods());
  var MathtoolsUtil_js_1 = require_MathtoolsUtil();
  exports.MathtoolsMethods = {
    MtMatrix: function(parser, begin, open, close) {
      var align = parser.GetBrackets("\\begin{".concat(begin.getName(), "}"), "c");
      return exports.MathtoolsMethods.Array(parser, begin, open, close, align);
    },
    MtSmallMatrix: function(parser, begin, open, close, align) {
      if (!align) {
        align = parser.GetBrackets("\\begin{".concat(begin.getName(), "}"), parser.options.mathtools["smallmatrix-align"]);
      }
      return exports.MathtoolsMethods.Array(parser, begin, open, close, align, ParseUtil_js_1.default.Em(1 / 3), ".2em", "S", 1);
    },
    MtMultlined: function(parser, begin) {
      var _a;
      var name = "\\begin{".concat(begin.getName(), "}");
      var pos = parser.GetBrackets(name, parser.options.mathtools["multlined-pos"] || "c");
      var width = pos ? parser.GetBrackets(name, "") : "";
      if (pos && !pos.match(/^[cbt]$/)) {
        _a = __read([pos, width], 2), width = _a[0], pos = _a[1];
      }
      parser.Push(begin);
      var item = parser.itemFactory.create("multlined", parser, begin);
      item.arraydef = {
        displaystyle: true,
        rowspacing: ".5em",
        width: width || "auto",
        columnwidth: "100%"
      };
      return ParseUtil_js_1.default.setArrayAlign(item, pos || "c");
    },
    HandleShove: function(parser, name, shove) {
      var top = parser.stack.Top();
      if (top.kind !== "multline" && top.kind !== "multlined") {
        throw new TexError_js_1.default("CommandInMultlined", "%1 can only appear within the multline or multlined environments", name);
      }
      if (top.Size()) {
        throw new TexError_js_1.default("CommandAtTheBeginingOfLine", "%1 must come at the beginning of the line", name);
      }
      top.setProperty("shove", shove);
      var shift = parser.GetBrackets(name);
      var mml = parser.ParseArg(name);
      if (shift) {
        var mrow = parser.create("node", "mrow", []);
        var mspace = parser.create("node", "mspace", [], { width: shift });
        if (shove === "left") {
          mrow.appendChild(mspace);
          mrow.appendChild(mml);
        } else {
          mrow.appendChild(mml);
          mrow.appendChild(mspace);
        }
        mml = mrow;
      }
      parser.Push(mml);
    },
    SpreadLines: function(parser, begin) {
      var e_1, _a;
      if (parser.stack.env.closing === begin.getName()) {
        delete parser.stack.env.closing;
        var top_1 = parser.stack.Pop();
        var mml = top_1.toMml();
        var spread = top_1.getProperty("spread");
        if (mml.isInferred) {
          try {
            for (var _b = __values(NodeUtil_js_1.default.getChildren(mml)), _c = _b.next();!_c.done; _c = _b.next()) {
              var child = _c.value;
              MathtoolsUtil_js_1.MathtoolsUtil.spreadLines(child, spread);
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
        } else {
          MathtoolsUtil_js_1.MathtoolsUtil.spreadLines(mml, spread);
        }
        parser.Push(mml);
      } else {
        var spread = parser.GetDimen("\\begin{".concat(begin.getName(), "}"));
        begin.setProperty("spread", spread);
        parser.Push(begin);
      }
    },
    Cases: function(parser, begin, open, close, style) {
      var array = parser.itemFactory.create("array").setProperty("casesEnv", begin.getName());
      array.arraydef = {
        rowspacing: ".2em",
        columnspacing: "1em",
        columnalign: "left"
      };
      if (style === "D") {
        array.arraydef.displaystyle = true;
      }
      array.setProperties({ open, close });
      parser.Push(begin);
      return array;
    },
    MathLap: function(parser, name, pos, cramped) {
      var style = parser.GetBrackets(name, "").trim();
      var mml = parser.create("node", "mstyle", [
        parser.create("node", "mpadded", [parser.ParseArg(name)], __assign({ width: 0 }, pos === "r" ? {} : { lspace: pos === "l" ? "-1width" : "-.5width" }))
      ], { "data-cramped": cramped });
      MathtoolsUtil_js_1.MathtoolsUtil.setDisplayLevel(mml, style);
      parser.Push(parser.create("node", "TeXAtom", [mml]));
    },
    Cramped: function(parser, name) {
      var style = parser.GetBrackets(name, "").trim();
      var arg = parser.ParseArg(name);
      var mml = parser.create("node", "mstyle", [arg], { "data-cramped": true });
      MathtoolsUtil_js_1.MathtoolsUtil.setDisplayLevel(mml, style);
      parser.Push(mml);
    },
    MtLap: function(parser, name, pos) {
      var content = ParseUtil_js_1.default.internalMath(parser, parser.GetArgument(name), 0);
      var mml = parser.create("node", "mpadded", content, { width: 0 });
      if (pos !== "r") {
        NodeUtil_js_1.default.setAttribute(mml, "lspace", pos === "l" ? "-1width" : "-.5width");
      }
      parser.Push(mml);
    },
    MathMakeBox: function(parser, name) {
      var width = parser.GetBrackets(name);
      var pos = parser.GetBrackets(name, "c");
      var mml = parser.create("node", "mpadded", [parser.ParseArg(name)]);
      if (width) {
        NodeUtil_js_1.default.setAttribute(mml, "width", width);
      }
      var align = (0, Options_js_1.lookup)(pos, { c: "center", r: "right" }, "");
      if (align) {
        NodeUtil_js_1.default.setAttribute(mml, "data-align", align);
      }
      parser.Push(mml);
    },
    MathMBox: function(parser, name) {
      parser.Push(parser.create("node", "mrow", [parser.ParseArg(name)]));
    },
    UnderOverBracket: function(parser, name) {
      var thickness = (0, lengths_js_1.length2em)(parser.GetBrackets(name, ".1em"), 0.1);
      var height = parser.GetBrackets(name, ".2em");
      var arg = parser.GetArgument(name);
      var _a = __read(name.charAt(1) === "o" ? ["over", "accent", "bottom"] : ["under", "accentunder", "top"], 3), pos = _a[0], accent = _a[1], border = _a[2];
      var t = (0, lengths_js_1.em)(thickness);
      var base = new TexParser_js_1.default(arg, parser.stack.env, parser.configuration).mml();
      var copy = new TexParser_js_1.default(arg, parser.stack.env, parser.configuration).mml();
      var script = parser.create("node", "mpadded", [
        parser.create("node", "mphantom", [copy])
      ], {
        style: "border: ".concat(t, " solid; border-").concat(border, ": none"),
        height,
        depth: 0
      });
      var node = ParseUtil_js_1.default.underOver(parser, base, script, pos, true);
      var munderover = NodeUtil_js_1.default.getChildAt(NodeUtil_js_1.default.getChildAt(node, 0), 0);
      NodeUtil_js_1.default.setAttribute(munderover, accent, true);
      parser.Push(node);
    },
    Aboxed: function(parser, name) {
      var top = MathtoolsUtil_js_1.MathtoolsUtil.checkAlignment(parser, name);
      if (top.row.length % 2 === 1) {
        top.row.push(parser.create("node", "mtd", []));
      }
      var arg = parser.GetArgument(name);
      var rest = parser.string.substr(parser.i);
      parser.string = arg + "&&\\endAboxed";
      parser.i = 0;
      var left = parser.GetUpTo(name, "&");
      var right = parser.GetUpTo(name, "&");
      parser.GetUpTo(name, "\\endAboxed");
      var tex = ParseUtil_js_1.default.substituteArgs(parser, [left, right], "\\rlap{\\boxed{#1{}#2}}\\kern.267em\\phantom{#1}&\\phantom{{}#2}\\kern.267em");
      parser.string = tex + rest;
      parser.i = 0;
    },
    ArrowBetweenLines: function(parser, name) {
      var top = MathtoolsUtil_js_1.MathtoolsUtil.checkAlignment(parser, name);
      if (top.Size() || top.row.length) {
        throw new TexError_js_1.default("BetweenLines", "%1 must be on a row by itself", name);
      }
      var star = parser.GetStar();
      var symbol = parser.GetBrackets(name, "\\Updownarrow");
      if (star) {
        top.EndEntry();
        top.EndEntry();
      }
      var tex = star ? "\\quad" + symbol : symbol + "\\quad";
      var mml = new TexParser_js_1.default(tex, parser.stack.env, parser.configuration).mml();
      parser.Push(mml);
      top.EndEntry();
      top.EndRow();
    },
    VDotsWithin: function(parser, name) {
      var top = parser.stack.Top();
      var isFlush = top.getProperty("flushspaceabove") === top.table.length;
      var arg = "\\mmlToken{mi}{}" + parser.GetArgument(name) + "\\mmlToken{mi}{}";
      var base = new TexParser_js_1.default(arg, parser.stack.env, parser.configuration).mml();
      var mml = parser.create("node", "mpadded", [
        parser.create("node", "mpadded", [
          parser.create("node", "mo", [
            parser.create("text", "⋮")
          ])
        ], __assign({ width: 0, lspace: "-.5width" }, isFlush ? { height: "-.6em", voffset: "-.18em" } : {})),
        parser.create("node", "mphantom", [base])
      ], {
        lspace: ".5width"
      });
      parser.Push(mml);
    },
    ShortVDotsWithin: function(parser, _name) {
      var top = parser.stack.Top();
      var star = parser.GetStar();
      exports.MathtoolsMethods.FlushSpaceAbove(parser, "\\MTFlushSpaceAbove");
      !star && top.EndEntry();
      exports.MathtoolsMethods.VDotsWithin(parser, "\\vdotswithin");
      star && top.EndEntry();
      exports.MathtoolsMethods.FlushSpaceBelow(parser, "\\MTFlushSpaceBelow");
    },
    FlushSpaceAbove: function(parser, name) {
      var top = MathtoolsUtil_js_1.MathtoolsUtil.checkAlignment(parser, name);
      top.setProperty("flushspaceabove", top.table.length);
      top.addRowSpacing("-" + parser.options.mathtools["shortvdotsadjustabove"]);
    },
    FlushSpaceBelow: function(parser, name) {
      var top = MathtoolsUtil_js_1.MathtoolsUtil.checkAlignment(parser, name);
      top.Size() && top.EndEntry();
      top.EndRow();
      top.addRowSpacing("-" + parser.options.mathtools["shortvdotsadjustbelow"]);
    },
    PairedDelimiters: function(parser, name, open, close, body, n, pre, post) {
      if (body === undefined) {
        body = "#1";
      }
      if (n === undefined) {
        n = 1;
      }
      if (pre === undefined) {
        pre = "";
      }
      if (post === undefined) {
        post = "";
      }
      var star = parser.GetStar();
      var size = star ? "" : parser.GetBrackets(name);
      var _a = __read(star ? ["\\left", "\\right"] : size ? [size + "l", size + "r"] : ["", ""], 2), left = _a[0], right = _a[1];
      var delim = star ? "\\middle" : size || "";
      if (n) {
        var args = [];
        for (var i = args.length;i < n; i++) {
          args.push(parser.GetArgument(name));
        }
        pre = ParseUtil_js_1.default.substituteArgs(parser, args, pre);
        body = ParseUtil_js_1.default.substituteArgs(parser, args, body);
        post = ParseUtil_js_1.default.substituteArgs(parser, args, post);
      }
      body = body.replace(/\\delimsize/g, delim);
      parser.string = [pre, left, open, body, right, close, post, parser.string.substr(parser.i)].reduce(function(s, part) {
        return ParseUtil_js_1.default.addArgs(parser, s, part);
      }, "");
      parser.i = 0;
      ParseUtil_js_1.default.checkMaxMacros(parser);
    },
    DeclarePairedDelimiter: function(parser, name) {
      var cs = NewcommandUtil_js_1.default.GetCsNameArgument(parser, name);
      var open = parser.GetArgument(name);
      var close = parser.GetArgument(name);
      MathtoolsUtil_js_1.MathtoolsUtil.addPairedDelims(parser.configuration, cs, [open, close]);
    },
    DeclarePairedDelimiterX: function(parser, name) {
      var cs = NewcommandUtil_js_1.default.GetCsNameArgument(parser, name);
      var n = NewcommandUtil_js_1.default.GetArgCount(parser, name);
      var open = parser.GetArgument(name);
      var close = parser.GetArgument(name);
      var body = parser.GetArgument(name);
      MathtoolsUtil_js_1.MathtoolsUtil.addPairedDelims(parser.configuration, cs, [open, close, body, n]);
    },
    DeclarePairedDelimiterXPP: function(parser, name) {
      var cs = NewcommandUtil_js_1.default.GetCsNameArgument(parser, name);
      var n = NewcommandUtil_js_1.default.GetArgCount(parser, name);
      var pre = parser.GetArgument(name);
      var open = parser.GetArgument(name);
      var close = parser.GetArgument(name);
      var post = parser.GetArgument(name);
      var body = parser.GetArgument(name);
      MathtoolsUtil_js_1.MathtoolsUtil.addPairedDelims(parser.configuration, cs, [open, close, body, n, pre, post]);
    },
    CenterColon: function(parser, _name, center, force, thin) {
      if (force === undefined) {
        force = false;
      }
      if (thin === undefined) {
        thin = false;
      }
      var options = parser.options.mathtools;
      var mml = parser.create("token", "mo", {}, ":");
      if (center && (options["centercolon"] || force)) {
        var dy = options["centercolon-offset"];
        mml = parser.create("node", "mpadded", [mml], __assign({ voffset: dy, height: "+".concat(dy), depth: "-".concat(dy) }, thin ? { width: options["thincolon-dw"], lspace: options["thincolon-dx"] } : {}));
      }
      parser.Push(mml);
    },
    Relation: function(parser, _name, tex, unicode) {
      var options = parser.options.mathtools;
      if (options["use-unicode"] && unicode) {
        parser.Push(parser.create("token", "mo", { texClass: MmlNode_js_1.TEXCLASS.REL }, unicode));
      } else {
        tex = "\\mathrel{" + tex.replace(/:/g, "\\MTThinColon").replace(/-/g, "\\mathrel{-}") + "}";
        parser.string = ParseUtil_js_1.default.addArgs(parser, tex, parser.string.substr(parser.i));
        parser.i = 0;
      }
    },
    NArrow: function(parser, _name, c, dy) {
      parser.Push(parser.create("node", "TeXAtom", [
        parser.create("token", "mtext", {}, c),
        parser.create("node", "mpadded", [
          parser.create("node", "mpadded", [
            parser.create("node", "menclose", [
              parser.create("node", "mspace", [], { height: ".2em", depth: 0, width: ".4em" })
            ], { notation: "updiagonalstrike", "data-thickness": ".05em", "data-padding": 0 })
          ], { width: 0, lspace: "-.5width", voffset: dy }),
          parser.create("node", "mphantom", [
            parser.create("token", "mtext", {}, c)
          ])
        ], { width: 0, lspace: "-.5width" })
      ], { texClass: MmlNode_js_1.TEXCLASS.REL }));
    },
    SplitFrac: function(parser, name, display) {
      var num = parser.ParseArg(name);
      var den = parser.ParseArg(name);
      parser.Push(parser.create("node", "mstyle", [
        parser.create("node", "mfrac", [
          parser.create("node", "mstyle", [
            num,
            parser.create("token", "mi"),
            parser.create("token", "mspace", { width: "1em" })
          ], { scriptlevel: 0 }),
          parser.create("node", "mstyle", [
            parser.create("token", "mspace", { width: "1em" }),
            parser.create("token", "mi"),
            den
          ], { scriptlevel: 0 })
        ], { linethickness: 0, numalign: "left", denomalign: "right" })
      ], { displaystyle: display, scriptlevel: 0 }));
    },
    XMathStrut: function(parser, name) {
      var dd = parser.GetBrackets(name);
      var dh = parser.GetArgument(name);
      dh = MathtoolsUtil_js_1.MathtoolsUtil.plusOrMinus(name, dh);
      dd = MathtoolsUtil_js_1.MathtoolsUtil.plusOrMinus(name, dd || dh);
      parser.Push(parser.create("node", "TeXAtom", [
        parser.create("node", "mpadded", [
          parser.create("node", "mphantom", [
            parser.create("token", "mo", { stretchy: false }, "(")
          ])
        ], { width: 0, height: dh + "height", depth: dd + "depth" })
      ], { texClass: MmlNode_js_1.TEXCLASS.ORD }));
    },
    Prescript: function(parser, name) {
      var sup = MathtoolsUtil_js_1.MathtoolsUtil.getScript(parser, name, "sup");
      var sub = MathtoolsUtil_js_1.MathtoolsUtil.getScript(parser, name, "sub");
      var base = MathtoolsUtil_js_1.MathtoolsUtil.getScript(parser, name, "arg");
      if (NodeUtil_js_1.default.isType(sup, "none") && NodeUtil_js_1.default.isType(sub, "none")) {
        parser.Push(base);
        return;
      }
      var mml = parser.create("node", "mmultiscripts", [base]);
      NodeUtil_js_1.default.getChildren(mml).push(null, null);
      NodeUtil_js_1.default.appendChildren(mml, [parser.create("node", "mprescripts"), sub, sup]);
      mml.setProperty("fixPrescript", true);
      parser.Push(mml);
    },
    NewTagForm: function(parser, name, renew) {
      if (renew === undefined) {
        renew = false;
      }
      var tags = parser.tags;
      if (!("mtFormats" in tags)) {
        throw new TexError_js_1.default("TagsNotMT", "%1 can only be used with ams or mathtools tags", name);
      }
      var id = parser.GetArgument(name).trim();
      if (!id) {
        throw new TexError_js_1.default("InvalidTagFormID", "Tag form name can't be empty");
      }
      var format = parser.GetBrackets(name, "");
      var left = parser.GetArgument(name);
      var right = parser.GetArgument(name);
      if (!renew && tags.mtFormats.has(id)) {
        throw new TexError_js_1.default("DuplicateTagForm", "Duplicate tag form: %1", id);
      }
      tags.mtFormats.set(id, [left, right, format]);
    },
    UseTagForm: function(parser, name) {
      var tags = parser.tags;
      if (!("mtFormats" in tags)) {
        throw new TexError_js_1.default("TagsNotMT", "%1 can only be used with ams or mathtools tags", name);
      }
      var id = parser.GetArgument(name).trim();
      if (!id) {
        tags.mtCurrent = null;
        return;
      }
      if (!tags.mtFormats.has(id)) {
        throw new TexError_js_1.default("UndefinedTagForm", "Undefined tag form: %1", id);
      }
      tags.mtCurrent = tags.mtFormats.get(id);
    },
    SetOptions: function(parser, name) {
      var e_2, _a;
      var options = parser.options.mathtools;
      if (!options["allow-mathtoolsset"]) {
        throw new TexError_js_1.default("ForbiddenMathtoolsSet", "%1 is disabled", name);
      }
      var allowed = {};
      Object.keys(options).forEach(function(id) {
        if (id !== "pariedDelimiters" && id !== "tagforms" && id !== "allow-mathtoolsset") {
          allowed[id] = 1;
        }
      });
      var args = parser.GetArgument(name);
      var keys = ParseUtil_js_1.default.keyvalOptions(args, allowed, true);
      try {
        for (var _b = __values(Object.keys(keys)), _c = _b.next();!_c.done; _c = _b.next()) {
          var id = _c.value;
          options[id] = keys[id];
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
    },
    Array: BaseMethods_js_1.default.Array,
    Macro: BaseMethods_js_1.default.Macro,
    xArrow: AmsMethods_js_1.AmsMethods.xArrow,
    HandleRef: AmsMethods_js_1.AmsMethods.HandleRef,
    AmsEqnArray: AmsMethods_js_1.AmsMethods.AmsEqnArray,
    MacroWithTemplate: NewcommandMethods_js_1.default.MacroWithTemplate
  };
});

// node_modules/mathjax-full/js/input/tex/mathtools/MathtoolsMappings.js
var require_MathtoolsMappings = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var ParseMethods_js_1 = __importDefault(require_ParseMethods());
  var SymbolMap_js_1 = require_SymbolMap();
  var TexConstants_js_1 = require_TexConstants();
  var MathtoolsMethods_js_1 = require_MathtoolsMethods();
  new SymbolMap_js_1.CommandMap("mathtools-macros", {
    shoveleft: ["HandleShove", TexConstants_js_1.TexConstant.Align.LEFT],
    shoveright: ["HandleShove", TexConstants_js_1.TexConstant.Align.RIGHT],
    xleftrightarrow: ["xArrow", 8596, 10, 10],
    xLeftarrow: ["xArrow", 8656, 12, 7],
    xRightarrow: ["xArrow", 8658, 7, 12],
    xLeftrightarrow: ["xArrow", 8660, 12, 12],
    xhookleftarrow: ["xArrow", 8617, 10, 5],
    xhookrightarrow: ["xArrow", 8618, 5, 10],
    xmapsto: ["xArrow", 8614, 10, 10],
    xrightharpoondown: ["xArrow", 8641, 5, 10],
    xleftharpoondown: ["xArrow", 8637, 10, 5],
    xrightleftharpoons: ["xArrow", 8652, 10, 10],
    xrightharpoonup: ["xArrow", 8640, 5, 10],
    xleftharpoonup: ["xArrow", 8636, 10, 5],
    xleftrightharpoons: ["xArrow", 8651, 10, 10],
    mathllap: ["MathLap", "l", false],
    mathrlap: ["MathLap", "r", false],
    mathclap: ["MathLap", "c", false],
    clap: ["MtLap", "c"],
    textllap: ["MtLap", "l"],
    textrlap: ["MtLap", "r"],
    textclap: ["MtLap", "c"],
    cramped: "Cramped",
    crampedllap: ["MathLap", "l", true],
    crampedrlap: ["MathLap", "r", true],
    crampedclap: ["MathLap", "c", true],
    crampedsubstack: ["Macro", "\\begin{crampedsubarray}{c}#1\\end{crampedsubarray}", 1],
    mathmbox: "MathMBox",
    mathmakebox: "MathMakeBox",
    overbracket: "UnderOverBracket",
    underbracket: "UnderOverBracket",
    refeq: "HandleRef",
    MoveEqLeft: ["Macro", "\\hspace{#1em}&\\hspace{-#1em}", 1, "2"],
    Aboxed: "Aboxed",
    ArrowBetweenLines: "ArrowBetweenLines",
    vdotswithin: "VDotsWithin",
    shortvdotswithin: "ShortVDotsWithin",
    MTFlushSpaceAbove: "FlushSpaceAbove",
    MTFlushSpaceBelow: "FlushSpaceBelow",
    DeclarePairedDelimiter: "DeclarePairedDelimiter",
    DeclarePairedDelimiterX: "DeclarePairedDelimiterX",
    DeclarePairedDelimiterXPP: "DeclarePairedDelimiterXPP",
    DeclarePairedDelimiters: "DeclarePairedDelimiter",
    DeclarePairedDelimitersX: "DeclarePairedDelimiterX",
    DeclarePairedDelimitersXPP: "DeclarePairedDelimiterXPP",
    centercolon: ["CenterColon", true, true],
    ordinarycolon: ["CenterColon", false],
    MTThinColon: ["CenterColon", true, true, true],
    coloneqq: ["Relation", ":=", "≔"],
    Coloneqq: ["Relation", "::=", "⩴"],
    coloneq: ["Relation", ":-"],
    Coloneq: ["Relation", "::-"],
    eqqcolon: ["Relation", "=:", "≕"],
    Eqqcolon: ["Relation", "=::"],
    eqcolon: ["Relation", "-:", "∹"],
    Eqcolon: ["Relation", "-::"],
    colonapprox: ["Relation", ":\\approx"],
    Colonapprox: ["Relation", "::\\approx"],
    colonsim: ["Relation", ":\\sim"],
    Colonsim: ["Relation", "::\\sim"],
    dblcolon: ["Relation", "::", "∷"],
    nuparrow: ["NArrow", "↑", ".06em"],
    ndownarrow: ["NArrow", "↓", ".25em"],
    bigtimes: ["Macro", "\\mathop{\\Large\\kern-.1em\\boldsymbol{\\times}\\kern-.1em}"],
    splitfrac: ["SplitFrac", false],
    splitdfrac: ["SplitFrac", true],
    xmathstrut: "XMathStrut",
    prescript: "Prescript",
    newtagform: ["NewTagForm", false],
    renewtagform: ["NewTagForm", true],
    usetagform: "UseTagForm",
    adjustlimits: [
      "MacroWithTemplate",
      "\\mathop{{#1}\\vphantom{{#3}}}_{{#2}\\vphantom{{#4}}}\\mathop{{#3}\\vphantom{{#1}}}_{{#4}\\vphantom{{#2}}}",
      4,
      ,
      "_",
      ,
      "_"
    ],
    mathtoolsset: "SetOptions"
  }, MathtoolsMethods_js_1.MathtoolsMethods);
  new SymbolMap_js_1.EnvironmentMap("mathtools-environments", ParseMethods_js_1.default.environment, {
    dcases: ["Array", null, "\\{", "", "ll", null, ".2em", "D"],
    rcases: ["Array", null, "", "\\}", "ll", null, ".2em"],
    drcases: ["Array", null, "", "\\}", "ll", null, ".2em", "D"],
    "dcases*": ["Cases", null, "{", "", "D"],
    "rcases*": ["Cases", null, "", "}"],
    "drcases*": ["Cases", null, "", "}", "D"],
    "cases*": ["Cases", null, "{", ""],
    "matrix*": ["MtMatrix", null, null, null],
    "pmatrix*": ["MtMatrix", null, "(", ")"],
    "bmatrix*": ["MtMatrix", null, "[", "]"],
    "Bmatrix*": ["MtMatrix", null, "\\{", "\\}"],
    "vmatrix*": ["MtMatrix", null, "\\vert", "\\vert"],
    "Vmatrix*": ["MtMatrix", null, "\\Vert", "\\Vert"],
    "smallmatrix*": ["MtSmallMatrix", null, null, null],
    psmallmatrix: ["MtSmallMatrix", null, "(", ")", "c"],
    "psmallmatrix*": ["MtSmallMatrix", null, "(", ")"],
    bsmallmatrix: ["MtSmallMatrix", null, "[", "]", "c"],
    "bsmallmatrix*": ["MtSmallMatrix", null, "[", "]"],
    Bsmallmatrix: ["MtSmallMatrix", null, "\\{", "\\}", "c"],
    "Bsmallmatrix*": ["MtSmallMatrix", null, "\\{", "\\}"],
    vsmallmatrix: ["MtSmallMatrix", null, "\\vert", "\\vert", "c"],
    "vsmallmatrix*": ["MtSmallMatrix", null, "\\vert", "\\vert"],
    Vsmallmatrix: ["MtSmallMatrix", null, "\\Vert", "\\Vert", "c"],
    "Vsmallmatrix*": ["MtSmallMatrix", null, "\\Vert", "\\Vert"],
    crampedsubarray: ["Array", null, null, null, null, "0em", "0.1em", "S'", 1],
    multlined: "MtMultlined",
    spreadlines: ["SpreadLines", true],
    lgathered: ["AmsEqnArray", null, null, null, "l", null, ".5em", "D"],
    rgathered: ["AmsEqnArray", null, null, null, "r", null, ".5em", "D"]
  }, MathtoolsMethods_js_1.MathtoolsMethods);
  new SymbolMap_js_1.DelimiterMap("mathtools-delimiters", ParseMethods_js_1.default.delimiter, {
    "\\lparen": "(",
    "\\rparen": ")"
  });
  new SymbolMap_js_1.CommandMap("mathtools-characters", {
    ":": ["CenterColon", true]
  }, MathtoolsMethods_js_1.MathtoolsMethods);
});

// node_modules/mathjax-full/js/input/tex/mathtools/MathtoolsTags.js
var require_MathtoolsTags = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MathtoolsTagFormat = undefined;
  var TexError_js_1 = __importDefault(require_TexError());
  var Tags_js_1 = require_Tags();
  var tagID = 0;
  function MathtoolsTagFormat(config, jax) {
    var tags = jax.parseOptions.options.tags;
    if (tags !== "base" && config.tags.hasOwnProperty(tags)) {
      Tags_js_1.TagsFactory.add(tags, config.tags[tags]);
    }
    var TagClass = Tags_js_1.TagsFactory.create(jax.parseOptions.options.tags).constructor;
    var TagFormat = function(_super) {
      __extends(TagFormat, _super);
      function TagFormat() {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.mtFormats = new Map;
        _this.mtCurrent = null;
        var forms = jax.parseOptions.options.mathtools.tagforms;
        try {
          for (var _b = __values(Object.keys(forms)), _c = _b.next();!_c.done; _c = _b.next()) {
            var form = _c.value;
            if (!Array.isArray(forms[form]) || forms[form].length !== 3) {
              throw new TexError_js_1.default("InvalidTagFormDef", 'The tag form definition for "%1" should be an array fo three strings', form);
            }
            _this.mtFormats.set(form, forms[form]);
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
      TagFormat.prototype.formatTag = function(tag) {
        if (this.mtCurrent) {
          var _a = __read(this.mtCurrent, 3), left = _a[0], right = _a[1], format = _a[2];
          return format ? "".concat(left).concat(format, "{").concat(tag, "}").concat(right) : "".concat(left).concat(tag).concat(right);
        }
        return _super.prototype.formatTag.call(this, tag);
      };
      return TagFormat;
    }(TagClass);
    tagID++;
    var tagName = "MathtoolsTags-" + tagID;
    Tags_js_1.TagsFactory.add(tagName, TagFormat);
    jax.parseOptions.options.tags = tagName;
  }
  exports.MathtoolsTagFormat = MathtoolsTagFormat;
});

// node_modules/mathjax-full/js/input/tex/mathtools/MathtoolsItems.js
var require_MathtoolsItems = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MultlinedItem = undefined;
  var AmsItems_js_1 = require_AmsItems();
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var TexConstants_js_1 = require_TexConstants();
  var MultlinedItem = function(_super) {
    __extends(MultlinedItem, _super);
    function MultlinedItem() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MultlinedItem.prototype, "kind", {
      get: function() {
        return "multlined";
      },
      enumerable: false,
      configurable: true
    });
    MultlinedItem.prototype.EndTable = function() {
      if (this.Size() || this.row.length) {
        this.EndEntry();
        this.EndRow();
      }
      if (this.table.length > 1) {
        var options = this.factory.configuration.options.mathtools;
        var gap = options.multlinegap;
        var firstskip = options["firstline-afterskip"] || gap;
        var lastskip = options["lastline-preskip"] || gap;
        var first = NodeUtil_js_1.default.getChildren(this.table[0])[0];
        if (NodeUtil_js_1.default.getAttribute(first, "columnalign") !== TexConstants_js_1.TexConstant.Align.RIGHT) {
          first.appendChild(this.create("node", "mspace", [], { width: firstskip }));
        }
        var last = NodeUtil_js_1.default.getChildren(this.table[this.table.length - 1])[0];
        if (NodeUtil_js_1.default.getAttribute(last, "columnalign") !== TexConstants_js_1.TexConstant.Align.LEFT) {
          var top_1 = NodeUtil_js_1.default.getChildren(last)[0];
          top_1.childNodes.unshift(null);
          var space = this.create("node", "mspace", [], { width: lastskip });
          NodeUtil_js_1.default.setChild(top_1, 0, space);
        }
      }
      _super.prototype.EndTable.call(this);
    };
    return MultlinedItem;
  }(AmsItems_js_1.MultlineItem);
  exports.MultlinedItem = MultlinedItem;
});

// node_modules/mathjax-full/js/input/tex/mathtools/MathtoolsConfiguration.js
var require_MathtoolsConfiguration = __commonJS(function(exports) {
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
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MathtoolsConfiguration = exports.fixPrescripts = exports.PAIREDDELIMS = undefined;
  var Configuration_js_1 = require_Configuration();
  var SymbolMap_js_1 = require_SymbolMap();
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var Options_js_1 = require_Options();
  require_MathtoolsMappings();
  var MathtoolsUtil_js_1 = require_MathtoolsUtil();
  var MathtoolsTags_js_1 = require_MathtoolsTags();
  var MathtoolsItems_js_1 = require_MathtoolsItems();
  exports.PAIREDDELIMS = "mathtools-paired-delims";
  function initMathtools(config) {
    new SymbolMap_js_1.CommandMap(exports.PAIREDDELIMS, {}, {});
    config.append(Configuration_js_1.Configuration.local({ handler: { macro: [exports.PAIREDDELIMS] }, priority: -5 }));
  }
  function configMathtools(config, jax) {
    var e_1, _a;
    var parser = jax.parseOptions;
    var pairedDelims = parser.options.mathtools.pairedDelimiters;
    try {
      for (var _b = __values(Object.keys(pairedDelims)), _c = _b.next();!_c.done; _c = _b.next()) {
        var cs = _c.value;
        MathtoolsUtil_js_1.MathtoolsUtil.addPairedDelims(parser, cs, pairedDelims[cs]);
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
    (0, MathtoolsTags_js_1.MathtoolsTagFormat)(config, jax);
  }
  function fixPrescripts(_a) {
    var e_2, _b, e_3, _c, e_4, _d;
    var data = _a.data;
    try {
      for (var _e = __values(data.getList("mmultiscripts")), _f = _e.next();!_f.done; _f = _e.next()) {
        var node = _f.value;
        if (!node.getProperty("fixPrescript"))
          continue;
        var childNodes = NodeUtil_js_1.default.getChildren(node);
        var n = 0;
        try {
          for (var _g = (e_3 = undefined, __values([1, 2])), _h = _g.next();!_h.done; _h = _g.next()) {
            var i = _h.value;
            if (!childNodes[i]) {
              NodeUtil_js_1.default.setChild(node, i, data.nodeFactory.create("node", "none"));
              n++;
            }
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (_h && !_h.done && (_c = _g.return))
              _c.call(_g);
          } finally {
            if (e_3)
              throw e_3.error;
          }
        }
        try {
          for (var _j = (e_4 = undefined, __values([4, 5])), _k = _j.next();!_k.done; _k = _j.next()) {
            var i = _k.value;
            if (NodeUtil_js_1.default.isType(childNodes[i], "mrow") && NodeUtil_js_1.default.getChildren(childNodes[i]).length === 0) {
              NodeUtil_js_1.default.setChild(node, i, data.nodeFactory.create("node", "none"));
            }
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (_k && !_k.done && (_d = _j.return))
              _d.call(_j);
          } finally {
            if (e_4)
              throw e_4.error;
          }
        }
        if (n === 2) {
          childNodes.splice(1, 2);
        }
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
  }
  exports.fixPrescripts = fixPrescripts;
  exports.MathtoolsConfiguration = Configuration_js_1.Configuration.create("mathtools", {
    handler: {
      macro: ["mathtools-macros", "mathtools-delimiters"],
      environment: ["mathtools-environments"],
      delimiter: ["mathtools-delimiters"],
      character: ["mathtools-characters"]
    },
    items: (_a = {}, _a[MathtoolsItems_js_1.MultlinedItem.prototype.kind] = MathtoolsItems_js_1.MultlinedItem, _a),
    init: initMathtools,
    config: configMathtools,
    postprocessors: [[fixPrescripts, -6]],
    options: {
      mathtools: {
        multlinegap: "1em",
        "multlined-pos": "c",
        "firstline-afterskip": "",
        "lastline-preskip": "",
        "smallmatrix-align": "c",
        shortvdotsadjustabove: ".2em",
        shortvdotsadjustbelow: ".2em",
        centercolon: false,
        "centercolon-offset": ".04em",
        "thincolon-dx": "-.04em",
        "thincolon-dw": "-.08em",
        "use-unicode": false,
        "prescript-sub-format": "",
        "prescript-sup-format": "",
        "prescript-arg-format": "",
        "allow-mathtoolsset": true,
        pairedDelimiters: (0, Options_js_1.expandable)({}),
        tagforms: (0, Options_js_1.expandable)({})
      }
    }
  });
});

// node_modules/mathjax-full/js/input/tex/noerrors/NoErrorsConfiguration.js
var require_NoErrorsConfiguration = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.NoErrorsConfiguration = undefined;
  var Configuration_js_1 = require_Configuration();
  function noErrors(factory, message, _id, expr) {
    var mtext = factory.create("token", "mtext", {}, expr.replace(/\n/g, " "));
    var error = factory.create("node", "merror", [mtext], { "data-mjx-error": message, title: message });
    return error;
  }
  exports.NoErrorsConfiguration = Configuration_js_1.Configuration.create("noerrors", { nodes: { error: noErrors } });
});

// node_modules/mathjax-full/js/input/tex/noundefined/NoUndefinedConfiguration.js
var require_NoUndefinedConfiguration = __commonJS(function(exports) {
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
  exports.NoUndefinedConfiguration = undefined;
  var Configuration_js_1 = require_Configuration();
  function noUndefined(parser, name) {
    var e_1, _a;
    var textNode = parser.create("text", "\\" + name);
    var options = parser.options.noundefined || {};
    var def = {};
    try {
      for (var _b = __values(["color", "background", "size"]), _c = _b.next();!_c.done; _c = _b.next()) {
        var id = _c.value;
        if (options[id]) {
          def["math" + id] = options[id];
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
    parser.Push(parser.create("node", "mtext", [], def, textNode));
  }
  exports.NoUndefinedConfiguration = Configuration_js_1.Configuration.create("noundefined", {
    fallback: { macro: noUndefined },
    options: {
      noundefined: {
        color: "red",
        background: "",
        size: ""
      }
    },
    priority: 3
  });
});

// node_modules/mathjax-full/js/input/tex/physics/PhysicsItems.js
var require_PhysicsItems = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AutoOpen = undefined;
  var StackItem_js_1 = require_StackItem();
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var TexParser_js_1 = __importDefault(require_TexParser());
  var AutoOpen = function(_super) {
    __extends(AutoOpen, _super);
    function AutoOpen() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.openCount = 0;
      return _this;
    }
    Object.defineProperty(AutoOpen.prototype, "kind", {
      get: function() {
        return "auto open";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(AutoOpen.prototype, "isOpen", {
      get: function() {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    AutoOpen.prototype.toMml = function() {
      var parser = this.factory.configuration.parser;
      var right = this.getProperty("right");
      if (this.getProperty("smash")) {
        var mml_1 = _super.prototype.toMml.call(this);
        var smash = parser.create("node", "mpadded", [mml_1], { height: 0, depth: 0 });
        this.Clear();
        this.Push(parser.create("node", "TeXAtom", [smash]));
      }
      if (right) {
        this.Push(new TexParser_js_1.default(right, parser.stack.env, parser.configuration).mml());
      }
      var mml = ParseUtil_js_1.default.fenced(this.factory.configuration, this.getProperty("open"), _super.prototype.toMml.call(this), this.getProperty("close"), this.getProperty("big"));
      NodeUtil_js_1.default.removeProperties(mml, "open", "close", "texClass");
      return mml;
    };
    AutoOpen.prototype.checkItem = function(item) {
      if (item.isKind("mml") && item.Size() === 1) {
        var mml = item.toMml();
        if (mml.isKind("mo") && mml.getText() === this.getProperty("open")) {
          this.openCount++;
        }
      }
      var close = item.getProperty("autoclose");
      if (close && close === this.getProperty("close") && !this.openCount--) {
        if (this.getProperty("ignore")) {
          this.Clear();
          return [[], true];
        }
        return [[this.toMml()], true];
      }
      return _super.prototype.checkItem.call(this, item);
    };
    AutoOpen.errors = Object.assign(Object.create(StackItem_js_1.BaseItem.errors), {
      stop: ["ExtraOrMissingDelims", "Extra open or missing close delimiter"]
    });
    return AutoOpen;
  }(StackItem_js_1.BaseItem);
  exports.AutoOpen = AutoOpen;
});

// node_modules/mathjax-full/js/input/tex/physics/PhysicsMethods.js
var require_PhysicsMethods = __commonJS(function(exports) {
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
  var BaseMethods_js_1 = __importDefault(require_BaseMethods());
  var TexParser_js_1 = __importDefault(require_TexParser());
  var TexError_js_1 = __importDefault(require_TexError());
  var MmlNode_js_1 = require_MmlNode();
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var NodeFactory_js_1 = require_NodeFactory();
  var PhysicsMethods = {};
  var pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
    "|": "|"
  };
  var biggs = /^(b|B)i(g{1,2})$/;
  PhysicsMethods.Quantity = function(parser, name, open, close, arg, named, variant) {
    if (open === undefined) {
      open = "(";
    }
    if (close === undefined) {
      close = ")";
    }
    if (arg === undefined) {
      arg = false;
    }
    if (named === undefined) {
      named = "";
    }
    if (variant === undefined) {
      variant = "";
    }
    var star = arg ? parser.GetStar() : false;
    var next = parser.GetNext();
    var position = parser.i;
    var big = null;
    if (next === "\\") {
      parser.i++;
      big = parser.GetCS();
      if (!big.match(biggs)) {
        var empty = parser.create("node", "mrow");
        parser.Push(ParseUtil_js_1.default.fenced(parser.configuration, open, empty, close));
        parser.i = position;
        return;
      }
      next = parser.GetNext();
    }
    var right = pairs[next];
    if (arg && next !== "{") {
      throw new TexError_js_1.default("MissingArgFor", "Missing argument for %1", parser.currentCS);
    }
    if (!right) {
      var empty = parser.create("node", "mrow");
      parser.Push(ParseUtil_js_1.default.fenced(parser.configuration, open, empty, close));
      parser.i = position;
      return;
    }
    if (named) {
      var mml = parser.create("token", "mi", { texClass: MmlNode_js_1.TEXCLASS.OP }, named);
      if (variant) {
        NodeUtil_js_1.default.setAttribute(mml, "mathvariant", variant);
      }
      parser.Push(parser.itemFactory.create("fn", mml));
    }
    if (next === "{") {
      var argument = parser.GetArgument(name);
      next = arg ? open : "\\{";
      right = arg ? close : "\\}";
      argument = star ? next + " " + argument + " " + right : big ? "\\" + big + "l" + next + " " + argument + " " + "\\" + big + "r" + right : "\\left" + next + " " + argument + " " + "\\right" + right;
      parser.Push(new TexParser_js_1.default(argument, parser.stack.env, parser.configuration).mml());
      return;
    }
    if (arg) {
      next = open;
      right = close;
    }
    parser.i++;
    parser.Push(parser.itemFactory.create("auto open").setProperties({ open: next, close: right, big }));
  };
  PhysicsMethods.Eval = function(parser, name) {
    var star = parser.GetStar();
    var next = parser.GetNext();
    if (next === "{") {
      var arg = parser.GetArgument(name);
      var replace = "\\left. " + (star ? "\\smash{" + arg + "}" : arg) + " " + "\\vphantom{\\int}\\right|";
      parser.string = parser.string.slice(0, parser.i) + replace + parser.string.slice(parser.i);
      return;
    }
    if (next === "(" || next === "[") {
      parser.i++;
      parser.Push(parser.itemFactory.create("auto open").setProperties({
        open: next,
        close: "|",
        smash: star,
        right: "\\vphantom{\\int}"
      }));
      return;
    }
    throw new TexError_js_1.default("MissingArgFor", "Missing argument for %1", parser.currentCS);
  };
  PhysicsMethods.Commutator = function(parser, name, open, close) {
    if (open === undefined) {
      open = "[";
    }
    if (close === undefined) {
      close = "]";
    }
    var star = parser.GetStar();
    var next = parser.GetNext();
    var big = null;
    if (next === "\\") {
      parser.i++;
      big = parser.GetCS();
      if (!big.match(biggs)) {
        throw new TexError_js_1.default("MissingArgFor", "Missing argument for %1", parser.currentCS);
      }
      next = parser.GetNext();
    }
    if (next !== "{") {
      throw new TexError_js_1.default("MissingArgFor", "Missing argument for %1", parser.currentCS);
    }
    var arg1 = parser.GetArgument(name);
    var arg2 = parser.GetArgument(name);
    var argument = arg1 + "," + arg2;
    argument = star ? open + " " + argument + " " + close : big ? "\\" + big + "l" + open + " " + argument + " " + "\\" + big + "r" + close : "\\left" + open + " " + argument + " " + "\\right" + close;
    parser.Push(new TexParser_js_1.default(argument, parser.stack.env, parser.configuration).mml());
  };
  var latinCap = [65, 90];
  var latinSmall = [97, 122];
  var greekCap = [913, 937];
  var greekSmall = [945, 969];
  var digits = [48, 57];
  function inRange(value, range) {
    return value >= range[0] && value <= range[1];
  }
  function createVectorToken(factory, kind, def, text) {
    var parser = factory.configuration.parser;
    var token = NodeFactory_js_1.NodeFactory.createToken(factory, kind, def, text);
    var code = text.codePointAt(0);
    if (text.length === 1 && !parser.stack.env.font && parser.stack.env.vectorFont && (inRange(code, latinCap) || inRange(code, latinSmall) || inRange(code, greekCap) || inRange(code, digits) || inRange(code, greekSmall) && parser.stack.env.vectorStar || NodeUtil_js_1.default.getAttribute(token, "accent"))) {
      NodeUtil_js_1.default.setAttribute(token, "mathvariant", parser.stack.env.vectorFont);
    }
    return token;
  }
  PhysicsMethods.VectorBold = function(parser, name) {
    var star = parser.GetStar();
    var arg = parser.GetArgument(name);
    var oldToken = parser.configuration.nodeFactory.get("token");
    var oldFont = parser.stack.env.font;
    delete parser.stack.env.font;
    parser.configuration.nodeFactory.set("token", createVectorToken);
    parser.stack.env.vectorFont = star ? "bold-italic" : "bold";
    parser.stack.env.vectorStar = star;
    var node = new TexParser_js_1.default(arg, parser.stack.env, parser.configuration).mml();
    if (oldFont) {
      parser.stack.env.font = oldFont;
    }
    delete parser.stack.env.vectorFont;
    delete parser.stack.env.vectorStar;
    parser.configuration.nodeFactory.set("token", oldToken);
    parser.Push(node);
  };
  PhysicsMethods.StarMacro = function(parser, name, argcount) {
    var parts = [];
    for (var _i = 3;_i < arguments.length; _i++) {
      parts[_i - 3] = arguments[_i];
    }
    var star = parser.GetStar();
    var args = [];
    if (argcount) {
      for (var i = args.length;i < argcount; i++) {
        args.push(parser.GetArgument(name));
      }
    }
    var macro = parts.join(star ? "*" : "");
    macro = ParseUtil_js_1.default.substituteArgs(parser, args, macro);
    parser.string = ParseUtil_js_1.default.addArgs(parser, macro, parser.string.slice(parser.i));
    parser.i = 0;
    ParseUtil_js_1.default.checkMaxMacros(parser);
  };
  var vectorApplication = function(parser, kind, name, operator, fences) {
    var op = new TexParser_js_1.default(operator, parser.stack.env, parser.configuration).mml();
    parser.Push(parser.itemFactory.create(kind, op));
    var left = parser.GetNext();
    var right = pairs[left];
    if (!right) {
      return;
    }
    var lfence = "", rfence = "", arg = "";
    var enlarge = fences.indexOf(left) !== -1;
    if (left === "{") {
      arg = parser.GetArgument(name);
      lfence = enlarge ? "\\left\\{" : "";
      rfence = enlarge ? "\\right\\}" : "";
      var macro = lfence + " " + arg + " " + rfence;
      parser.string = macro + parser.string.slice(parser.i);
      parser.i = 0;
      return;
    }
    if (!enlarge) {
      return;
    }
    parser.i++;
    parser.Push(parser.itemFactory.create("auto open").setProperties({ open: left, close: right }));
  };
  PhysicsMethods.OperatorApplication = function(parser, name, operator) {
    var fences = [];
    for (var _i = 3;_i < arguments.length; _i++) {
      fences[_i - 3] = arguments[_i];
    }
    vectorApplication(parser, "fn", name, operator, fences);
  };
  PhysicsMethods.VectorOperator = function(parser, name, operator) {
    var fences = [];
    for (var _i = 3;_i < arguments.length; _i++) {
      fences[_i - 3] = arguments[_i];
    }
    vectorApplication(parser, "mml", name, operator, fences);
  };
  PhysicsMethods.Expression = function(parser, name, opt, id) {
    if (opt === undefined) {
      opt = true;
    }
    if (id === undefined) {
      id = "";
    }
    id = id || name.slice(1);
    var exp = opt ? parser.GetBrackets(name) : null;
    var mml = parser.create("token", "mi", { texClass: MmlNode_js_1.TEXCLASS.OP }, id);
    if (exp) {
      var sup = new TexParser_js_1.default(exp, parser.stack.env, parser.configuration).mml();
      mml = parser.create("node", "msup", [mml, sup]);
    }
    parser.Push(parser.itemFactory.create("fn", mml));
    if (parser.GetNext() !== "(") {
      return;
    }
    parser.i++;
    parser.Push(parser.itemFactory.create("auto open").setProperties({ open: "(", close: ")" }));
  };
  PhysicsMethods.Qqtext = function(parser, name, text) {
    var star = parser.GetStar();
    var arg = text ? text : parser.GetArgument(name);
    var replace = (star ? "" : "\\quad") + "\\text{" + arg + "}\\quad ";
    parser.string = parser.string.slice(0, parser.i) + replace + parser.string.slice(parser.i);
  };
  PhysicsMethods.Differential = function(parser, name, op) {
    var optArg = parser.GetBrackets(name);
    var power = optArg != null ? "^{" + optArg + "}" : " ";
    var parens = parser.GetNext() === "(";
    var braces = parser.GetNext() === "{";
    var macro = op + power;
    if (!(parens || braces)) {
      macro += parser.GetArgument(name, true) || "";
      var mml = new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml();
      parser.Push(mml);
      return;
    }
    if (braces) {
      macro += parser.GetArgument(name);
      var mml = new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml();
      parser.Push(parser.create("node", "TeXAtom", [mml], { texClass: MmlNode_js_1.TEXCLASS.OP }));
      return;
    }
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
    parser.i++;
    parser.Push(parser.itemFactory.create("auto open").setProperties({ open: "(", close: ")" }));
  };
  PhysicsMethods.Derivative = function(parser, name, argMax, op) {
    var star = parser.GetStar();
    var optArg = parser.GetBrackets(name);
    var argCounter = 1;
    var args = [];
    args.push(parser.GetArgument(name));
    while (parser.GetNext() === "{" && argCounter < argMax) {
      args.push(parser.GetArgument(name));
      argCounter++;
    }
    var ignore = false;
    var power1 = " ";
    var power2 = " ";
    if (argMax > 2 && args.length > 2) {
      power1 = "^{" + (args.length - 1) + "}";
      ignore = true;
    } else if (optArg != null) {
      if (argMax > 2 && args.length > 1) {
        ignore = true;
      }
      power1 = "^{" + optArg + "}";
      power2 = power1;
    }
    var frac = star ? "\\flatfrac" : "\\frac";
    var first = args.length > 1 ? args[0] : "";
    var second = args.length > 1 ? args[1] : args[0];
    var rest = "";
    for (var i = 2, arg = undefined;arg = args[i]; i++) {
      rest += op + " " + arg;
    }
    var macro = frac + "{" + op + power1 + first + "}" + "{" + op + " " + second + power2 + " " + rest + "}";
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
    if (parser.GetNext() === "(") {
      parser.i++;
      parser.Push(parser.itemFactory.create("auto open").setProperties({ open: "(", close: ")", ignore }));
    }
  };
  PhysicsMethods.Bra = function(parser, name) {
    var starBra = parser.GetStar();
    var bra = parser.GetArgument(name);
    var ket = "";
    var hasKet = false;
    var starKet = false;
    if (parser.GetNext() === "\\") {
      var saveI = parser.i;
      parser.i++;
      var cs = parser.GetCS();
      var symbol = parser.lookup("macro", cs);
      if (symbol && symbol.symbol === "ket") {
        hasKet = true;
        saveI = parser.i;
        starKet = parser.GetStar();
        if (parser.GetNext() === "{") {
          ket = parser.GetArgument(cs, true);
        } else {
          parser.i = saveI;
          starKet = false;
        }
      } else {
        parser.i = saveI;
      }
    }
    var macro = "";
    if (hasKet) {
      macro = starBra || starKet ? "\\langle{".concat(bra, "}\\vert{").concat(ket, "}\\rangle") : "\\left\\langle{".concat(bra, "}\\middle\\vert{").concat(ket, "}\\right\\rangle");
    } else {
      macro = starBra || starKet ? "\\langle{".concat(bra, "}\\vert") : "\\left\\langle{".concat(bra, "}\\right\\vert{").concat(ket, "}");
    }
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
  };
  PhysicsMethods.Ket = function(parser, name) {
    var star = parser.GetStar();
    var ket = parser.GetArgument(name);
    var macro = star ? "\\vert{".concat(ket, "}\\rangle") : "\\left\\vert{".concat(ket, "}\\right\\rangle");
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
  };
  PhysicsMethods.BraKet = function(parser, name) {
    var star = parser.GetStar();
    var bra = parser.GetArgument(name);
    var ket = null;
    if (parser.GetNext() === "{") {
      ket = parser.GetArgument(name, true);
    }
    var macro = "";
    if (ket == null) {
      macro = star ? "\\langle{".concat(bra, "}\\vert{").concat(bra, "}\\rangle") : "\\left\\langle{".concat(bra, "}\\middle\\vert{").concat(bra, "}\\right\\rangle");
    } else {
      macro = star ? "\\langle{".concat(bra, "}\\vert{").concat(ket, "}\\rangle") : "\\left\\langle{".concat(bra, "}\\middle\\vert{").concat(ket, "}\\right\\rangle");
    }
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
  };
  PhysicsMethods.KetBra = function(parser, name) {
    var star = parser.GetStar();
    var ket = parser.GetArgument(name);
    var bra = null;
    if (parser.GetNext() === "{") {
      bra = parser.GetArgument(name, true);
    }
    var macro = "";
    if (bra == null) {
      macro = star ? "\\vert{".concat(ket, "}\\rangle\\!\\langle{").concat(ket, "}\\vert") : "\\left\\vert{".concat(ket, "}\\middle\\rangle\\!\\middle\\langle{").concat(ket, "}\\right\\vert");
    } else {
      macro = star ? "\\vert{".concat(ket, "}\\rangle\\!\\langle{").concat(bra, "}\\vert") : "\\left\\vert{".concat(ket, "}\\middle\\rangle\\!\\middle\\langle{").concat(bra, "}\\right\\vert");
    }
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
  };
  function outputBraket(_a, star1, star2) {
    var _b = __read(_a, 3), arg1 = _b[0], arg2 = _b[1], arg3 = _b[2];
    return star1 && star2 ? "\\left\\langle{".concat(arg1, "}\\middle\\vert{").concat(arg2, "}\\middle\\vert{").concat(arg3, "}\\right\\rangle") : star1 ? "\\langle{".concat(arg1, "}\\vert{").concat(arg2, "}\\vert{").concat(arg3, "}\\rangle") : "\\left\\langle{".concat(arg1, "}\\right\\vert{").concat(arg2, "}\\left\\vert{").concat(arg3, "}\\right\\rangle");
  }
  PhysicsMethods.Expectation = function(parser, name) {
    var star1 = parser.GetStar();
    var star2 = star1 && parser.GetStar();
    var arg1 = parser.GetArgument(name);
    var arg2 = null;
    if (parser.GetNext() === "{") {
      arg2 = parser.GetArgument(name, true);
    }
    var macro = arg1 && arg2 ? outputBraket([arg2, arg1, arg2], star1, star2) : star1 ? "\\langle {".concat(arg1, "} \\rangle") : "\\left\\langle {".concat(arg1, "} \\right\\rangle");
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
  };
  PhysicsMethods.MatrixElement = function(parser, name) {
    var star1 = parser.GetStar();
    var star2 = star1 && parser.GetStar();
    var arg1 = parser.GetArgument(name);
    var arg2 = parser.GetArgument(name);
    var arg3 = parser.GetArgument(name);
    var macro = outputBraket([arg1, arg2, arg3], star1, star2);
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
  };
  PhysicsMethods.MatrixQuantity = function(parser, name, small) {
    var star = parser.GetStar();
    var next = parser.GetNext();
    var array = small ? "smallmatrix" : "array";
    var arg = "";
    var open = "";
    var close = "";
    switch (next) {
      case "{":
        arg = parser.GetArgument(name);
        break;
      case "(":
        parser.i++;
        open = star ? "\\lgroup" : "(";
        close = star ? "\\rgroup" : ")";
        arg = parser.GetUpTo(name, ")");
        break;
      case "[":
        parser.i++;
        open = "[";
        close = "]";
        arg = parser.GetUpTo(name, "]");
        break;
      case "|":
        parser.i++;
        open = "|";
        close = "|";
        arg = parser.GetUpTo(name, "|");
        break;
      default:
        open = "(";
        close = ")";
        break;
    }
    var macro = (open ? "\\left" : "") + open + "\\begin{" + array + "}{} " + arg + "\\end{" + array + "}" + (open ? "\\right" : "") + close;
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
  };
  PhysicsMethods.IdentityMatrix = function(parser, name) {
    var arg = parser.GetArgument(name);
    var size = parseInt(arg, 10);
    if (isNaN(size)) {
      throw new TexError_js_1.default("InvalidNumber", "Invalid number");
    }
    if (size <= 1) {
      parser.string = "1" + parser.string.slice(parser.i);
      parser.i = 0;
      return;
    }
    var zeros = Array(size).fill("0");
    var columns = [];
    for (var i = 0;i < size; i++) {
      var row = zeros.slice();
      row[i] = "1";
      columns.push(row.join(" & "));
    }
    parser.string = columns.join("\\\\ ") + parser.string.slice(parser.i);
    parser.i = 0;
  };
  PhysicsMethods.XMatrix = function(parser, name) {
    var star = parser.GetStar();
    var arg1 = parser.GetArgument(name);
    var arg2 = parser.GetArgument(name);
    var arg3 = parser.GetArgument(name);
    var n = parseInt(arg2, 10);
    var m = parseInt(arg3, 10);
    if (isNaN(n) || isNaN(m) || m.toString() !== arg3 || n.toString() !== arg2) {
      throw new TexError_js_1.default("InvalidNumber", "Invalid number");
    }
    n = n < 1 ? 1 : n;
    m = m < 1 ? 1 : m;
    if (!star) {
      var row = Array(m).fill(arg1).join(" & ");
      var matrix_1 = Array(n).fill(row).join("\\\\ ");
      parser.string = matrix_1 + parser.string.slice(parser.i);
      parser.i = 0;
      return;
    }
    var matrix = "";
    if (n === 1 && m === 1) {
      matrix = arg1;
    } else if (n === 1) {
      var row = [];
      for (var i = 1;i <= m; i++) {
        row.push("".concat(arg1, "_{").concat(i, "}"));
      }
      matrix = row.join(" & ");
    } else if (m === 1) {
      var row = [];
      for (var i = 1;i <= n; i++) {
        row.push("".concat(arg1, "_{").concat(i, "}"));
      }
      matrix = row.join("\\\\ ");
    } else {
      var rows = [];
      for (var i = 1;i <= n; i++) {
        var row = [];
        for (var j = 1;j <= m; j++) {
          row.push("".concat(arg1, "_{{").concat(i, "}{").concat(j, "}}"));
        }
        rows.push(row.join(" & "));
      }
      matrix = rows.join("\\\\ ");
    }
    parser.string = matrix + parser.string.slice(parser.i);
    parser.i = 0;
    return;
  };
  PhysicsMethods.PauliMatrix = function(parser, name) {
    var arg = parser.GetArgument(name);
    var matrix = arg.slice(1);
    switch (arg[0]) {
      case "0":
        matrix += " 1 & 0\\\\ 0 & 1";
        break;
      case "1":
      case "x":
        matrix += " 0 & 1\\\\ 1 & 0";
        break;
      case "2":
      case "y":
        matrix += " 0 & -i\\\\ i & 0";
        break;
      case "3":
      case "z":
        matrix += " 1 & 0\\\\ 0 & -1";
        break;
      default:
    }
    parser.string = matrix + parser.string.slice(parser.i);
    parser.i = 0;
  };
  PhysicsMethods.DiagonalMatrix = function(parser, name, anti) {
    if (parser.GetNext() !== "{") {
      return;
    }
    var startI = parser.i;
    parser.GetArgument(name);
    var endI = parser.i;
    parser.i = startI + 1;
    var elements = [];
    var element = "";
    var currentI = parser.i;
    while (currentI < endI) {
      try {
        element = parser.GetUpTo(name, ",");
      } catch (e) {
        parser.i = endI;
        elements.push(parser.string.slice(currentI, endI - 1));
        break;
      }
      if (parser.i >= endI) {
        elements.push(parser.string.slice(currentI, endI));
        break;
      }
      currentI = parser.i;
      elements.push(element);
    }
    parser.string = makeDiagMatrix(elements, anti) + parser.string.slice(endI);
    parser.i = 0;
  };
  function makeDiagMatrix(elements, anti) {
    var length = elements.length;
    var matrix = [];
    for (var i = 0;i < length; i++) {
      matrix.push(Array(anti ? length - i : i + 1).join("&") + "\\mqty{" + elements[i] + "}");
    }
    return matrix.join("\\\\ ");
  }
  PhysicsMethods.AutoClose = function(parser, fence, _texclass) {
    var mo = parser.create("token", "mo", { stretchy: false }, fence);
    var item = parser.itemFactory.create("mml", mo).setProperties({ autoclose: fence });
    parser.Push(item);
  };
  PhysicsMethods.Vnabla = function(parser, _name) {
    var argument = parser.options.physics.arrowdel ? "\\vec{\\gradientnabla}" : "{\\gradientnabla}";
    return parser.Push(new TexParser_js_1.default(argument, parser.stack.env, parser.configuration).mml());
  };
  PhysicsMethods.DiffD = function(parser, _name) {
    var argument = parser.options.physics.italicdiff ? "d" : "{\\rm d}";
    return parser.Push(new TexParser_js_1.default(argument, parser.stack.env, parser.configuration).mml());
  };
  PhysicsMethods.Macro = BaseMethods_js_1.default.Macro;
  PhysicsMethods.NamedFn = BaseMethods_js_1.default.NamedFn;
  PhysicsMethods.Array = BaseMethods_js_1.default.Array;
  exports.default = PhysicsMethods;
});

// node_modules/mathjax-full/js/input/tex/physics/PhysicsMappings.js
var require_PhysicsMappings = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var SymbolMap_js_1 = require_SymbolMap();
  var PhysicsMethods_js_1 = __importDefault(require_PhysicsMethods());
  var TexConstants_js_1 = require_TexConstants();
  var ParseMethods_js_1 = __importDefault(require_ParseMethods());
  var MmlNode_js_1 = require_MmlNode();
  new SymbolMap_js_1.CommandMap("Physics-automatic-bracing-macros", {
    quantity: "Quantity",
    qty: "Quantity",
    pqty: ["Quantity", "(", ")", true],
    bqty: ["Quantity", "[", "]", true],
    vqty: ["Quantity", "|", "|", true],
    Bqty: ["Quantity", "\\{", "\\}", true],
    absolutevalue: ["Quantity", "|", "|", true],
    abs: ["Quantity", "|", "|", true],
    norm: ["Quantity", "\\|", "\\|", true],
    evaluated: "Eval",
    eval: "Eval",
    order: [
      "Quantity",
      "(",
      ")",
      true,
      "O",
      TexConstants_js_1.TexConstant.Variant.CALLIGRAPHIC
    ],
    commutator: "Commutator",
    comm: "Commutator",
    anticommutator: ["Commutator", "\\{", "\\}"],
    acomm: ["Commutator", "\\{", "\\}"],
    poissonbracket: ["Commutator", "\\{", "\\}"],
    pb: ["Commutator", "\\{", "\\}"]
  }, PhysicsMethods_js_1.default);
  new SymbolMap_js_1.CharacterMap("Physics-vector-mo", ParseMethods_js_1.default.mathchar0mo, {
    dotproduct: ["⋅", { mathvariant: TexConstants_js_1.TexConstant.Variant.BOLD }],
    vdot: ["⋅", { mathvariant: TexConstants_js_1.TexConstant.Variant.BOLD }],
    crossproduct: "×",
    cross: "×",
    cp: "×",
    gradientnabla: ["∇", { mathvariant: TexConstants_js_1.TexConstant.Variant.BOLD }]
  });
  new SymbolMap_js_1.CharacterMap("Physics-vector-mi", ParseMethods_js_1.default.mathchar0mi, {
    real: ["ℜ", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    imaginary: ["ℑ", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }]
  });
  new SymbolMap_js_1.CommandMap("Physics-vector-macros", {
    vnabla: "Vnabla",
    vectorbold: "VectorBold",
    vb: "VectorBold",
    vectorarrow: ["StarMacro", 1, "\\vec{\\vb", "{#1}}"],
    va: ["StarMacro", 1, "\\vec{\\vb", "{#1}}"],
    vectorunit: ["StarMacro", 1, "\\hat{\\vb", "{#1}}"],
    vu: ["StarMacro", 1, "\\hat{\\vb", "{#1}}"],
    gradient: ["OperatorApplication", "\\vnabla", "(", "["],
    grad: ["OperatorApplication", "\\vnabla", "(", "["],
    divergence: ["VectorOperator", "\\vnabla\\vdot", "(", "["],
    div: ["VectorOperator", "\\vnabla\\vdot", "(", "["],
    curl: ["VectorOperator", "\\vnabla\\crossproduct", "(", "["],
    laplacian: ["OperatorApplication", "\\nabla^2", "(", "["]
  }, PhysicsMethods_js_1.default);
  new SymbolMap_js_1.CommandMap("Physics-expressions-macros", {
    sin: "Expression",
    sinh: "Expression",
    arcsin: "Expression",
    asin: "Expression",
    cos: "Expression",
    cosh: "Expression",
    arccos: "Expression",
    acos: "Expression",
    tan: "Expression",
    tanh: "Expression",
    arctan: "Expression",
    atan: "Expression",
    csc: "Expression",
    csch: "Expression",
    arccsc: "Expression",
    acsc: "Expression",
    sec: "Expression",
    sech: "Expression",
    arcsec: "Expression",
    asec: "Expression",
    cot: "Expression",
    coth: "Expression",
    arccot: "Expression",
    acot: "Expression",
    exp: ["Expression", false],
    log: "Expression",
    ln: "Expression",
    det: ["Expression", false],
    Pr: ["Expression", false],
    tr: ["Expression", false],
    trace: ["Expression", false, "tr"],
    Tr: ["Expression", false],
    Trace: ["Expression", false, "Tr"],
    rank: "NamedFn",
    erf: ["Expression", false],
    Residue: ["Macro", "\\mathrm{Res}"],
    Res: ["OperatorApplication", "\\Residue", "(", "[", "{"],
    principalvalue: ["OperatorApplication", "{\\cal P}"],
    pv: ["OperatorApplication", "{\\cal P}"],
    PV: ["OperatorApplication", "{\\rm P.V.}"],
    Re: ["OperatorApplication", "\\mathrm{Re}", "{"],
    Im: ["OperatorApplication", "\\mathrm{Im}", "{"],
    sine: ["NamedFn", "sin"],
    hypsine: ["NamedFn", "sinh"],
    arcsine: ["NamedFn", "arcsin"],
    asine: ["NamedFn", "asin"],
    cosine: ["NamedFn", "cos"],
    hypcosine: ["NamedFn", "cosh"],
    arccosine: ["NamedFn", "arccos"],
    acosine: ["NamedFn", "acos"],
    tangent: ["NamedFn", "tan"],
    hyptangent: ["NamedFn", "tanh"],
    arctangent: ["NamedFn", "arctan"],
    atangent: ["NamedFn", "atan"],
    cosecant: ["NamedFn", "csc"],
    hypcosecant: ["NamedFn", "csch"],
    arccosecant: ["NamedFn", "arccsc"],
    acosecant: ["NamedFn", "acsc"],
    secant: ["NamedFn", "sec"],
    hypsecant: ["NamedFn", "sech"],
    arcsecant: ["NamedFn", "arcsec"],
    asecant: ["NamedFn", "asec"],
    cotangent: ["NamedFn", "cot"],
    hypcotangent: ["NamedFn", "coth"],
    arccotangent: ["NamedFn", "arccot"],
    acotangent: ["NamedFn", "acot"],
    exponential: ["NamedFn", "exp"],
    logarithm: ["NamedFn", "log"],
    naturallogarithm: ["NamedFn", "ln"],
    determinant: ["NamedFn", "det"],
    Probability: ["NamedFn", "Pr"]
  }, PhysicsMethods_js_1.default);
  new SymbolMap_js_1.CommandMap("Physics-quick-quad-macros", {
    qqtext: "Qqtext",
    qq: "Qqtext",
    qcomma: ["Macro", "\\qqtext*{,}"],
    qc: ["Macro", "\\qqtext*{,}"],
    qcc: ["Qqtext", "c.c."],
    qif: ["Qqtext", "if"],
    qthen: ["Qqtext", "then"],
    qelse: ["Qqtext", "else"],
    qotherwise: ["Qqtext", "otherwise"],
    qunless: ["Qqtext", "unless"],
    qgiven: ["Qqtext", "given"],
    qusing: ["Qqtext", "using"],
    qassume: ["Qqtext", "assume"],
    qsince: ["Qqtext", "since"],
    qlet: ["Qqtext", "let"],
    qfor: ["Qqtext", "for"],
    qall: ["Qqtext", "all"],
    qeven: ["Qqtext", "even"],
    qodd: ["Qqtext", "odd"],
    qinteger: ["Qqtext", "integer"],
    qand: ["Qqtext", "and"],
    qor: ["Qqtext", "or"],
    qas: ["Qqtext", "as"],
    qin: ["Qqtext", "in"]
  }, PhysicsMethods_js_1.default);
  new SymbolMap_js_1.CommandMap("Physics-derivative-macros", {
    diffd: "DiffD",
    flatfrac: ["Macro", "\\left.#1\\middle/#2\\right.", 2],
    differential: ["Differential", "\\diffd"],
    dd: ["Differential", "\\diffd"],
    variation: ["Differential", "\\delta"],
    var: ["Differential", "\\delta"],
    derivative: ["Derivative", 2, "\\diffd"],
    dv: ["Derivative", 2, "\\diffd"],
    partialderivative: ["Derivative", 3, "\\partial"],
    pderivative: ["Derivative", 3, "\\partial"],
    pdv: ["Derivative", 3, "\\partial"],
    functionalderivative: ["Derivative", 2, "\\delta"],
    fderivative: ["Derivative", 2, "\\delta"],
    fdv: ["Derivative", 2, "\\delta"]
  }, PhysicsMethods_js_1.default);
  new SymbolMap_js_1.CommandMap("Physics-bra-ket-macros", {
    bra: "Bra",
    ket: "Ket",
    innerproduct: "BraKet",
    ip: "BraKet",
    braket: "BraKet",
    outerproduct: "KetBra",
    dyad: "KetBra",
    ketbra: "KetBra",
    op: "KetBra",
    expectationvalue: "Expectation",
    expval: "Expectation",
    ev: "Expectation",
    matrixelement: "MatrixElement",
    matrixel: "MatrixElement",
    mel: "MatrixElement"
  }, PhysicsMethods_js_1.default);
  new SymbolMap_js_1.CommandMap("Physics-matrix-macros", {
    matrixquantity: "MatrixQuantity",
    mqty: "MatrixQuantity",
    pmqty: ["Macro", "\\mqty(#1)", 1],
    Pmqty: ["Macro", "\\mqty*(#1)", 1],
    bmqty: ["Macro", "\\mqty[#1]", 1],
    vmqty: ["Macro", "\\mqty|#1|", 1],
    smallmatrixquantity: ["MatrixQuantity", true],
    smqty: ["MatrixQuantity", true],
    spmqty: ["Macro", "\\smqty(#1)", 1],
    sPmqty: ["Macro", "\\smqty*(#1)", 1],
    sbmqty: ["Macro", "\\smqty[#1]", 1],
    svmqty: ["Macro", "\\smqty|#1|", 1],
    matrixdeterminant: ["Macro", "\\vmqty{#1}", 1],
    mdet: ["Macro", "\\vmqty{#1}", 1],
    smdet: ["Macro", "\\svmqty{#1}", 1],
    identitymatrix: "IdentityMatrix",
    imat: "IdentityMatrix",
    xmatrix: "XMatrix",
    xmat: "XMatrix",
    zeromatrix: ["Macro", "\\xmat{0}{#1}{#2}", 2],
    zmat: ["Macro", "\\xmat{0}{#1}{#2}", 2],
    paulimatrix: "PauliMatrix",
    pmat: "PauliMatrix",
    diagonalmatrix: "DiagonalMatrix",
    dmat: "DiagonalMatrix",
    antidiagonalmatrix: ["DiagonalMatrix", true],
    admat: ["DiagonalMatrix", true]
  }, PhysicsMethods_js_1.default);
  new SymbolMap_js_1.EnvironmentMap("Physics-aux-envs", ParseMethods_js_1.default.environment, {
    smallmatrix: ["Array", null, null, null, "c", "0.333em", ".2em", "S", 1]
  }, PhysicsMethods_js_1.default);
  new SymbolMap_js_1.MacroMap("Physics-characters", {
    "|": ["AutoClose", MmlNode_js_1.TEXCLASS.ORD],
    ")": "AutoClose",
    "]": "AutoClose"
  }, PhysicsMethods_js_1.default);
});

// node_modules/mathjax-full/js/input/tex/physics/PhysicsConfiguration.js
var require_PhysicsConfiguration = __commonJS(function(exports) {
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PhysicsConfiguration = undefined;
  var Configuration_js_1 = require_Configuration();
  var PhysicsItems_js_1 = require_PhysicsItems();
  require_PhysicsMappings();
  exports.PhysicsConfiguration = Configuration_js_1.Configuration.create("physics", {
    handler: {
      macro: [
        "Physics-automatic-bracing-macros",
        "Physics-vector-macros",
        "Physics-vector-mo",
        "Physics-vector-mi",
        "Physics-derivative-macros",
        "Physics-expressions-macros",
        "Physics-quick-quad-macros",
        "Physics-bra-ket-macros",
        "Physics-matrix-macros"
      ],
      character: ["Physics-characters"],
      environment: ["Physics-aux-envs"]
    },
    items: (_a = {}, _a[PhysicsItems_js_1.AutoOpen.prototype.kind] = PhysicsItems_js_1.AutoOpen, _a),
    options: {
      physics: {
        italicdiff: false,
        arrowdel: false
      }
    }
  });
});

// node_modules/mathjax-full/js/input/tex/setoptions/SetOptionsConfiguration.js
var require_SetOptionsConfiguration = __commonJS(function(exports) {
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
  exports.SetOptionsConfiguration = exports.SetOptionsUtil = undefined;
  var Configuration_js_1 = require_Configuration();
  var SymbolMap_js_1 = require_SymbolMap();
  var TexError_js_1 = __importDefault(require_TexError());
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var Symbol_js_1 = require_Symbol();
  var BaseMethods_js_1 = __importDefault(require_BaseMethods());
  var Options_js_1 = require_Options();
  exports.SetOptionsUtil = {
    filterPackage: function(parser, extension) {
      if (extension !== "tex" && !Configuration_js_1.ConfigurationHandler.get(extension)) {
        throw new TexError_js_1.default("NotAPackage", "Not a defined package: %1", extension);
      }
      var config = parser.options.setoptions;
      var options = config.allowOptions[extension];
      if (options === undefined && !config.allowPackageDefault || options === false) {
        throw new TexError_js_1.default("PackageNotSettable", `Options can't be set for package "%1"`, extension);
      }
      return true;
    },
    filterOption: function(parser, extension, option) {
      var _a;
      var config = parser.options.setoptions;
      var options = config.allowOptions[extension] || {};
      var allow = options.hasOwnProperty(option) && !(0, Options_js_1.isObject)(options[option]) ? options[option] : null;
      if (allow === false || allow === null && !config.allowOptionsDefault) {
        throw new TexError_js_1.default("OptionNotSettable", 'Option "%1" is not allowed to be set', option);
      }
      if (!((_a = extension === "tex" ? parser.options : parser.options[extension]) === null || _a === undefined ? undefined : _a.hasOwnProperty(option))) {
        if (extension === "tex") {
          throw new TexError_js_1.default("InvalidTexOption", 'Invalid TeX option "%1"', option);
        } else {
          throw new TexError_js_1.default("InvalidOptionKey", 'Invalid option "%1" for package "%2"', option, extension);
        }
      }
      return true;
    },
    filterValue: function(_parser, _extension, _option, value) {
      return value;
    }
  };
  var setOptionsMap = new SymbolMap_js_1.CommandMap("setoptions", {
    setOptions: "SetOptions"
  }, {
    SetOptions: function(parser, name) {
      var e_1, _a;
      var extension = parser.GetBrackets(name) || "tex";
      var options = ParseUtil_js_1.default.keyvalOptions(parser.GetArgument(name));
      var config = parser.options.setoptions;
      if (!config.filterPackage(parser, extension))
        return;
      try {
        for (var _b = __values(Object.keys(options)), _c = _b.next();!_c.done; _c = _b.next()) {
          var key = _c.value;
          if (config.filterOption(parser, extension, key)) {
            (extension === "tex" ? parser.options : parser.options[extension])[key] = config.filterValue(parser, extension, key, options[key]);
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
    }
  });
  function setoptionsConfig(_config, jax) {
    var require2 = jax.parseOptions.handlers.get("macro").lookup("require");
    if (require2) {
      setOptionsMap.add("Require", new Symbol_js_1.Macro("Require", require2._func));
      setOptionsMap.add("require", new Symbol_js_1.Macro("require", BaseMethods_js_1.default.Macro, ["\\Require{#2}\\setOptions[#2]{#1}", 2, ""]));
    }
  }
  exports.SetOptionsConfiguration = Configuration_js_1.Configuration.create("setoptions", {
    handler: { macro: ["setoptions"] },
    config: setoptionsConfig,
    priority: 3,
    options: {
      setoptions: {
        filterPackage: exports.SetOptionsUtil.filterPackage,
        filterOption: exports.SetOptionsUtil.filterOption,
        filterValue: exports.SetOptionsUtil.filterValue,
        allowPackageDefault: true,
        allowOptionsDefault: true,
        allowOptions: (0, Options_js_1.expandable)({
          tex: {
            FindTeX: false,
            formatError: false,
            package: false,
            baseURL: false,
            tags: false,
            maxBuffer: false,
            maxMaxros: false,
            macros: false,
            environments: false
          },
          setoptions: false,
          autoload: false,
          require: false,
          configmacros: false,
          tagformat: false
        })
      }
    }
  });
});

// node_modules/mathjax-full/js/input/tex/tagformat/TagFormatConfiguration.js
var require_TagFormatConfiguration = __commonJS(function(exports) {
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
  exports.TagFormatConfiguration = exports.tagformatConfig = undefined;
  var Configuration_js_1 = require_Configuration();
  var Tags_js_1 = require_Tags();
  var tagID = 0;
  function tagformatConfig(config, jax) {
    var tags = jax.parseOptions.options.tags;
    if (tags !== "base" && config.tags.hasOwnProperty(tags)) {
      Tags_js_1.TagsFactory.add(tags, config.tags[tags]);
    }
    var TagClass = Tags_js_1.TagsFactory.create(jax.parseOptions.options.tags).constructor;
    var TagFormat = function(_super) {
      __extends(TagFormat, _super);
      function TagFormat() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      TagFormat.prototype.formatNumber = function(n) {
        return jax.parseOptions.options.tagformat.number(n);
      };
      TagFormat.prototype.formatTag = function(tag) {
        return jax.parseOptions.options.tagformat.tag(tag);
      };
      TagFormat.prototype.formatId = function(id) {
        return jax.parseOptions.options.tagformat.id(id);
      };
      TagFormat.prototype.formatUrl = function(id, base) {
        return jax.parseOptions.options.tagformat.url(id, base);
      };
      return TagFormat;
    }(TagClass);
    tagID++;
    var tagName = "configTags-" + tagID;
    Tags_js_1.TagsFactory.add(tagName, TagFormat);
    jax.parseOptions.options.tags = tagName;
  }
  exports.tagformatConfig = tagformatConfig;
  exports.TagFormatConfiguration = Configuration_js_1.Configuration.create("tagformat", {
    config: [tagformatConfig, 10],
    options: {
      tagformat: {
        number: function(n) {
          return n.toString();
        },
        tag: function(tag) {
          return "(" + tag + ")";
        },
        id: function(id) {
          return "mjx-eqn:" + id.replace(/\s/g, "_");
        },
        url: function(id, base) {
          return base + "#" + encodeURIComponent(id);
        }
      }
    }
  });
});

// node_modules/mathjax-full/js/input/tex/textmacros/TextMacrosMethods.js
var require_TextMacrosMethods = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TextMacrosMethods = undefined;
  var TexParser_js_1 = __importDefault(require_TexParser());
  var Retries_js_1 = require_Retries();
  var BaseMethods_js_1 = __importDefault(require_BaseMethods());
  exports.TextMacrosMethods = {
    Comment: function(parser, _c) {
      while (parser.i < parser.string.length && parser.string.charAt(parser.i) !== `
`) {
        parser.i++;
      }
      parser.i++;
    },
    Math: function(parser, open) {
      parser.saveText();
      var i = parser.i;
      var j, c;
      var braces = 0;
      while (c = parser.GetNext()) {
        j = parser.i++;
        switch (c) {
          case "\\":
            var cs = parser.GetCS();
            if (cs === ")")
              c = "\\(";
          case "$":
            if (braces === 0 && open === c) {
              var config = parser.texParser.configuration;
              var mml = new TexParser_js_1.default(parser.string.substr(i, j - i), parser.stack.env, config).mml();
              parser.PushMath(mml);
              return;
            }
            break;
          case "{":
            braces++;
            break;
          case "}":
            if (braces === 0) {
              parser.Error("ExtraCloseMissingOpen", "Extra close brace or missing open brace");
            }
            braces--;
            break;
        }
      }
      parser.Error("MathNotTerminated", "Math-mode is not properly terminated");
    },
    MathModeOnly: function(parser, c) {
      parser.Error("MathModeOnly", "'%1' allowed only in math mode", c);
    },
    Misplaced: function(parser, c) {
      parser.Error("Misplaced", "'%1' can not be used here", c);
    },
    OpenBrace: function(parser, _c) {
      var env = parser.stack.env;
      parser.envStack.push(env);
      parser.stack.env = Object.assign({}, env);
    },
    CloseBrace: function(parser, _c) {
      if (parser.envStack.length) {
        parser.saveText();
        parser.stack.env = parser.envStack.pop();
      } else {
        parser.Error("ExtraCloseMissingOpen", "Extra close brace or missing open brace");
      }
    },
    OpenQuote: function(parser, c) {
      if (parser.string.charAt(parser.i) === c) {
        parser.text += "“";
        parser.i++;
      } else {
        parser.text += "‘";
      }
    },
    CloseQuote: function(parser, c) {
      if (parser.string.charAt(parser.i) === c) {
        parser.text += "”";
        parser.i++;
      } else {
        parser.text += "’";
      }
    },
    Tilde: function(parser, _c) {
      parser.text += " ";
    },
    Space: function(parser, _c) {
      parser.text += " ";
      while (parser.GetNext().match(/\s/))
        parser.i++;
    },
    SelfQuote: function(parser, name) {
      parser.text += name.substr(1);
    },
    Insert: function(parser, _name, c) {
      parser.text += c;
    },
    Accent: function(parser, name, c) {
      var base = parser.ParseArg(name);
      var accent = parser.create("token", "mo", {}, c);
      parser.addAttributes(accent);
      parser.Push(parser.create("node", "mover", [base, accent]));
    },
    Emph: function(parser, name) {
      var variant = parser.stack.env.mathvariant === "-tex-mathit" ? "normal" : "-tex-mathit";
      parser.Push(parser.ParseTextArg(name, { mathvariant: variant }));
    },
    SetFont: function(parser, _name, variant) {
      parser.saveText();
      parser.stack.env.mathvariant = variant;
    },
    SetSize: function(parser, _name, size) {
      parser.saveText();
      parser.stack.env.mathsize = size;
    },
    CheckAutoload: function(parser, name) {
      var autoload = parser.configuration.packageData.get("autoload");
      var texParser = parser.texParser;
      name = name.slice(1);
      var macro = texParser.lookup("macro", name);
      if (!macro || autoload && macro._func === autoload.Autoload) {
        texParser.parse("macro", [texParser, name]);
        if (!macro)
          return;
        (0, Retries_js_1.retryAfter)(Promise.resolve());
      }
      texParser.parse("macro", [parser, name]);
    },
    Macro: BaseMethods_js_1.default.Macro,
    Spacer: BaseMethods_js_1.default.Spacer,
    Hskip: BaseMethods_js_1.default.Hskip,
    rule: BaseMethods_js_1.default.rule,
    Rule: BaseMethods_js_1.default.Rule,
    HandleRef: BaseMethods_js_1.default.HandleRef
  };
});

// node_modules/mathjax-full/js/input/tex/textmacros/TextParser.js
var require_TextParser = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TextParser = undefined;
  var TexParser_js_1 = __importDefault(require_TexParser());
  var TexError_js_1 = __importDefault(require_TexError());
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var MmlNode_js_1 = require_MmlNode();
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var BaseItems_js_1 = require_BaseItems();
  var TextParser = function(_super) {
    __extends(TextParser, _super);
    function TextParser(text, env, configuration, level) {
      var _this = _super.call(this, text, env, configuration) || this;
      _this.level = level;
      return _this;
    }
    Object.defineProperty(TextParser.prototype, "texParser", {
      get: function() {
        return this.configuration.packageData.get("textmacros").texParser;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TextParser.prototype, "tags", {
      get: function() {
        return this.texParser.tags;
      },
      enumerable: false,
      configurable: true
    });
    TextParser.prototype.mml = function() {
      return this.level != null ? this.create("node", "mstyle", this.nodes, { displaystyle: false, scriptlevel: this.level }) : this.nodes.length === 1 ? this.nodes[0] : this.create("node", "mrow", this.nodes);
    };
    TextParser.prototype.Parse = function() {
      this.text = "";
      this.nodes = [];
      this.envStack = [];
      _super.prototype.Parse.call(this);
    };
    TextParser.prototype.saveText = function() {
      if (this.text) {
        var mathvariant = this.stack.env.mathvariant;
        var text = ParseUtil_js_1.default.internalText(this, this.text, mathvariant ? { mathvariant } : {});
        this.text = "";
        this.Push(text);
      }
    };
    TextParser.prototype.Push = function(mml) {
      if (this.text) {
        this.saveText();
      }
      if (mml instanceof BaseItems_js_1.StopItem) {
        return _super.prototype.Push.call(this, mml);
      }
      if (mml instanceof BaseItems_js_1.StyleItem) {
        this.stack.env.mathcolor = this.stack.env.color;
        return;
      }
      if (mml instanceof MmlNode_js_1.AbstractMmlNode) {
        this.addAttributes(mml);
        this.nodes.push(mml);
      }
    };
    TextParser.prototype.PushMath = function(mml) {
      var e_1, _a;
      var env = this.stack.env;
      if (!mml.isKind("TeXAtom")) {
        mml = this.create("node", "TeXAtom", [mml]);
      }
      try {
        for (var _b = __values(["mathsize", "mathcolor"]), _c = _b.next();!_c.done; _c = _b.next()) {
          var name_1 = _c.value;
          if (env[name_1] && !mml.attributes.getExplicit(name_1)) {
            if (!mml.isToken && !mml.isKind("mstyle")) {
              mml = this.create("node", "mstyle", [mml]);
            }
            NodeUtil_js_1.default.setAttribute(mml, name_1, env[name_1]);
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
      if (mml.isInferred) {
        mml = this.create("node", "mrow", mml.childNodes);
      }
      this.nodes.push(mml);
    };
    TextParser.prototype.addAttributes = function(mml) {
      var e_2, _a;
      var env = this.stack.env;
      if (!mml.isToken)
        return;
      try {
        for (var _b = __values(["mathsize", "mathcolor", "mathvariant"]), _c = _b.next();!_c.done; _c = _b.next()) {
          var name_2 = _c.value;
          if (env[name_2] && !mml.attributes.getExplicit(name_2)) {
            NodeUtil_js_1.default.setAttribute(mml, name_2, env[name_2]);
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
    };
    TextParser.prototype.ParseTextArg = function(name, env) {
      var text = this.GetArgument(name);
      env = Object.assign(Object.assign({}, this.stack.env), env);
      return new TextParser(text, env, this.configuration).mml();
    };
    TextParser.prototype.ParseArg = function(name) {
      return new TextParser(this.GetArgument(name), this.stack.env, this.configuration).mml();
    };
    TextParser.prototype.Error = function(id, message) {
      var args = [];
      for (var _i = 2;_i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      throw new (TexError_js_1.default.bind.apply(TexError_js_1.default, __spreadArray([undefined, id, message], __read(args), false)));
    };
    return TextParser;
  }(TexParser_js_1.default);
  exports.TextParser = TextParser;
});

// node_modules/mathjax-full/js/input/tex/textcomp/TextcompMappings.js
var require_TextcompMappings = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var SymbolMap_js_1 = require_SymbolMap();
  var TexConstants_js_1 = require_TexConstants();
  var TextMacrosMethods_js_1 = require_TextMacrosMethods();
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var TextParser_js_1 = require_TextParser();
  new SymbolMap_js_1.CommandMap("textcomp-macros", {
    textasciicircum: ["Insert", "^"],
    textasciitilde: ["Insert", "~"],
    textasteriskcentered: ["Insert", "*"],
    textbackslash: ["Insert", "\\"],
    textbar: ["Insert", "|"],
    textbraceleft: ["Insert", "{"],
    textbraceright: ["Insert", "}"],
    textbullet: ["Insert", "•"],
    textdagger: ["Insert", "†"],
    textdaggerdbl: ["Insert", "‡"],
    textellipsis: ["Insert", "…"],
    textemdash: ["Insert", "—"],
    textendash: ["Insert", "–"],
    textexclamdown: ["Insert", "¡"],
    textgreater: ["Insert", ">"],
    textless: ["Insert", "<"],
    textordfeminine: ["Insert", "ª"],
    textordmasculine: ["Insert", "º"],
    textparagraph: ["Insert", "¶"],
    textperiodcentered: ["Insert", "·"],
    textquestiondown: ["Insert", "¿"],
    textquotedblleft: ["Insert", "“"],
    textquotedblright: ["Insert", "”"],
    textquoteleft: ["Insert", "‘"],
    textquoteright: ["Insert", "’"],
    textsection: ["Insert", "§"],
    textunderscore: ["Insert", "_"],
    textvisiblespace: ["Insert", "␣"],
    textacutedbl: ["Insert", "˝"],
    textasciiacute: ["Insert", "´"],
    textasciibreve: ["Insert", "˘"],
    textasciicaron: ["Insert", "ˇ"],
    textasciidieresis: ["Insert", "¨"],
    textasciimacron: ["Insert", "¯"],
    textgravedbl: ["Insert", "˵"],
    texttildelow: ["Insert", "˷"],
    textbaht: ["Insert", "฿"],
    textcent: ["Insert", "¢"],
    textcolonmonetary: ["Insert", "₡"],
    textcurrency: ["Insert", "¤"],
    textdollar: ["Insert", "$"],
    textdong: ["Insert", "₫"],
    texteuro: ["Insert", "€"],
    textflorin: ["Insert", "ƒ"],
    textguarani: ["Insert", "₲"],
    textlira: ["Insert", "₤"],
    textnaira: ["Insert", "₦"],
    textpeso: ["Insert", "₱"],
    textsterling: ["Insert", "£"],
    textwon: ["Insert", "₩"],
    textyen: ["Insert", "¥"],
    textcircledP: ["Insert", "℗"],
    textcompwordmark: ["Insert", "‌"],
    textcopyleft: ["Insert", "\uD83C\uDD2F"],
    textcopyright: ["Insert", "©"],
    textregistered: ["Insert", "®"],
    textservicemark: ["Insert", "℠"],
    texttrademark: ["Insert", "™"],
    textbardbl: ["Insert", "‖"],
    textbigcircle: ["Insert", "◯"],
    textblank: ["Insert", "␢"],
    textbrokenbar: ["Insert", "¦"],
    textdiscount: ["Insert", "⁒"],
    textestimated: ["Insert", "℮"],
    textinterrobang: ["Insert", "‽"],
    textinterrobangdown: ["Insert", "⸘"],
    textmusicalnote: ["Insert", "♪"],
    textnumero: ["Insert", "№"],
    textopenbullet: ["Insert", "◦"],
    textpertenthousand: ["Insert", "‱"],
    textperthousand: ["Insert", "‰"],
    textrecipe: ["Insert", "℞"],
    textreferencemark: ["Insert", "※"],
    textlangle: ["Insert", "〈"],
    textrangle: ["Insert", "〉"],
    textlbrackdbl: ["Insert", "⟦"],
    textrbrackdbl: ["Insert", "⟧"],
    textlquill: ["Insert", "⁅"],
    textrquill: ["Insert", "⁆"],
    textcelsius: ["Insert", "℃"],
    textdegree: ["Insert", "°"],
    textdiv: ["Insert", "÷"],
    textdownarrow: ["Insert", "↓"],
    textfractionsolidus: ["Insert", "⁄"],
    textleftarrow: ["Insert", "←"],
    textlnot: ["Insert", "¬"],
    textmho: ["Insert", "℧"],
    textminus: ["Insert", "−"],
    textmu: ["Insert", "µ"],
    textohm: ["Insert", "Ω"],
    textonehalf: ["Insert", "½"],
    textonequarter: ["Insert", "¼"],
    textonesuperior: ["Insert", "¹"],
    textpm: ["Insert", "±"],
    textrightarrow: ["Insert", "→"],
    textsurd: ["Insert", "√"],
    textthreequarters: ["Insert", "¾"],
    textthreesuperior: ["Insert", "³"],
    texttimes: ["Insert", "×"],
    texttwosuperior: ["Insert", "²"],
    textuparrow: ["Insert", "↑"],
    textborn: ["Insert", "*"],
    textdied: ["Insert", "†"],
    textdivorced: ["Insert", "⚮"],
    textmarried: ["Insert", "⚭"],
    textcentoldstyle: ["Insert", "¢", TexConstants_js_1.TexConstant.Variant.OLDSTYLE],
    textdollaroldstyle: ["Insert", "$", TexConstants_js_1.TexConstant.Variant.OLDSTYLE],
    textzerooldstyle: ["Insert", "0", TexConstants_js_1.TexConstant.Variant.OLDSTYLE],
    textoneoldstyle: ["Insert", "1", TexConstants_js_1.TexConstant.Variant.OLDSTYLE],
    texttwooldstyle: ["Insert", "2", TexConstants_js_1.TexConstant.Variant.OLDSTYLE],
    textthreeoldstyle: ["Insert", "3", TexConstants_js_1.TexConstant.Variant.OLDSTYLE],
    textfouroldstyle: ["Insert", "4", TexConstants_js_1.TexConstant.Variant.OLDSTYLE],
    textfiveoldstyle: ["Insert", "5", TexConstants_js_1.TexConstant.Variant.OLDSTYLE],
    textsixoldstyle: ["Insert", "6", TexConstants_js_1.TexConstant.Variant.OLDSTYLE],
    textsevenoldstyle: ["Insert", "7", TexConstants_js_1.TexConstant.Variant.OLDSTYLE],
    texteightoldstyle: ["Insert", "8", TexConstants_js_1.TexConstant.Variant.OLDSTYLE],
    textnineoldstyle: ["Insert", "9", TexConstants_js_1.TexConstant.Variant.OLDSTYLE]
  }, {
    Insert: function(parser, name, c, font) {
      if (parser instanceof TextParser_js_1.TextParser) {
        if (!font) {
          TextMacrosMethods_js_1.TextMacrosMethods.Insert(parser, name, c);
          return;
        }
        parser.saveText();
      }
      parser.Push(ParseUtil_js_1.default.internalText(parser, c, font ? { mathvariant: font } : {}));
    }
  });
});

// node_modules/mathjax-full/js/input/tex/textcomp/TextcompConfiguration.js
var require_TextcompConfiguration = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TextcompConfiguration = undefined;
  var Configuration_js_1 = require_Configuration();
  require_TextcompMappings();
  exports.TextcompConfiguration = Configuration_js_1.Configuration.create("textcomp", {
    handler: { macro: ["textcomp-macros"] }
  });
});

// node_modules/mathjax-full/js/input/tex/textmacros/TextMacrosMappings.js
var require_TextMacrosMappings = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var SymbolMap_js_1 = require_SymbolMap();
  var TexConstants_js_1 = require_TexConstants();
  var TextMacrosMethods_js_1 = require_TextMacrosMethods();
  var lengths_js_1 = require_lengths();
  new SymbolMap_js_1.MacroMap("text-special", {
    $: "Math",
    "%": "Comment",
    "^": "MathModeOnly",
    _: "MathModeOnly",
    "&": "Misplaced",
    "#": "Misplaced",
    "~": "Tilde",
    " ": "Space",
    "\t": "Space",
    "\r": "Space",
    "\n": "Space",
    " ": "Tilde",
    "{": "OpenBrace",
    "}": "CloseBrace",
    "`": "OpenQuote",
    "'": "CloseQuote"
  }, TextMacrosMethods_js_1.TextMacrosMethods);
  new SymbolMap_js_1.CommandMap("text-macros", {
    "(": "Math",
    $: "SelfQuote",
    _: "SelfQuote",
    "%": "SelfQuote",
    "{": "SelfQuote",
    "}": "SelfQuote",
    " ": "SelfQuote",
    "&": "SelfQuote",
    "#": "SelfQuote",
    "\\": "SelfQuote",
    "'": ["Accent", "´"],
    "’": ["Accent", "´"],
    "`": ["Accent", "`"],
    "‘": ["Accent", "`"],
    "^": ["Accent", "^"],
    '"': ["Accent", "¨"],
    "~": ["Accent", "~"],
    "=": ["Accent", "¯"],
    ".": ["Accent", "˙"],
    u: ["Accent", "˘"],
    v: ["Accent", "ˇ"],
    emph: "Emph",
    rm: ["SetFont", TexConstants_js_1.TexConstant.Variant.NORMAL],
    mit: ["SetFont", TexConstants_js_1.TexConstant.Variant.ITALIC],
    oldstyle: ["SetFont", TexConstants_js_1.TexConstant.Variant.OLDSTYLE],
    cal: ["SetFont", TexConstants_js_1.TexConstant.Variant.CALLIGRAPHIC],
    it: ["SetFont", "-tex-mathit"],
    bf: ["SetFont", TexConstants_js_1.TexConstant.Variant.BOLD],
    bbFont: ["SetFont", TexConstants_js_1.TexConstant.Variant.DOUBLESTRUCK],
    scr: ["SetFont", TexConstants_js_1.TexConstant.Variant.SCRIPT],
    frak: ["SetFont", TexConstants_js_1.TexConstant.Variant.FRAKTUR],
    sf: ["SetFont", TexConstants_js_1.TexConstant.Variant.SANSSERIF],
    tt: ["SetFont", TexConstants_js_1.TexConstant.Variant.MONOSPACE],
    tiny: ["SetSize", 0.5],
    Tiny: ["SetSize", 0.6],
    scriptsize: ["SetSize", 0.7],
    small: ["SetSize", 0.85],
    normalsize: ["SetSize", 1],
    large: ["SetSize", 1.2],
    Large: ["SetSize", 1.44],
    LARGE: ["SetSize", 1.73],
    huge: ["SetSize", 2.07],
    Huge: ["SetSize", 2.49],
    Bbb: ["Macro", "{\\bbFont #1}", 1],
    textnormal: ["Macro", "{\\rm #1}", 1],
    textup: ["Macro", "{\\rm #1}", 1],
    textrm: ["Macro", "{\\rm #1}", 1],
    textit: ["Macro", "{\\it #1}", 1],
    textbf: ["Macro", "{\\bf #1}", 1],
    textsf: ["Macro", "{\\sf #1}", 1],
    texttt: ["Macro", "{\\tt #1}", 1],
    dagger: ["Insert", "†"],
    ddagger: ["Insert", "‡"],
    S: ["Insert", "§"],
    ",": ["Spacer", lengths_js_1.MATHSPACE.thinmathspace],
    ":": ["Spacer", lengths_js_1.MATHSPACE.mediummathspace],
    ">": ["Spacer", lengths_js_1.MATHSPACE.mediummathspace],
    ";": ["Spacer", lengths_js_1.MATHSPACE.thickmathspace],
    "!": ["Spacer", lengths_js_1.MATHSPACE.negativethinmathspace],
    enspace: ["Spacer", 0.5],
    quad: ["Spacer", 1],
    qquad: ["Spacer", 2],
    thinspace: ["Spacer", lengths_js_1.MATHSPACE.thinmathspace],
    negthinspace: ["Spacer", lengths_js_1.MATHSPACE.negativethinmathspace],
    hskip: "Hskip",
    hspace: "Hskip",
    kern: "Hskip",
    mskip: "Hskip",
    mspace: "Hskip",
    mkern: "Hskip",
    rule: "rule",
    Rule: ["Rule"],
    Space: ["Rule", "blank"],
    color: "CheckAutoload",
    textcolor: "CheckAutoload",
    colorbox: "CheckAutoload",
    fcolorbox: "CheckAutoload",
    href: "CheckAutoload",
    style: "CheckAutoload",
    class: "CheckAutoload",
    cssId: "CheckAutoload",
    unicode: "CheckAutoload",
    ref: ["HandleRef", false],
    eqref: ["HandleRef", true]
  }, TextMacrosMethods_js_1.TextMacrosMethods);
});

// node_modules/mathjax-full/js/input/tex/textmacros/TextMacrosConfiguration.js
var require_TextMacrosConfiguration = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TextMacrosConfiguration = exports.TextBaseConfiguration = undefined;
  var Configuration_js_1 = require_Configuration();
  var ParseOptions_js_1 = __importDefault(require_ParseOptions());
  var Tags_js_1 = require_Tags();
  var BaseItems_js_1 = require_BaseItems();
  var TextParser_js_1 = require_TextParser();
  var TextMacrosMethods_js_1 = require_TextMacrosMethods();
  require_TextMacrosMappings();
  exports.TextBaseConfiguration = Configuration_js_1.Configuration.create("text-base", {
    parser: "text",
    handler: {
      character: ["command", "text-special"],
      macro: ["text-macros"]
    },
    fallback: {
      character: function(parser, c) {
        parser.text += c;
      },
      macro: function(parser, name) {
        var texParser = parser.texParser;
        var macro = texParser.lookup("macro", name);
        if (macro && macro._func !== TextMacrosMethods_js_1.TextMacrosMethods.Macro) {
          parser.Error("MathMacro", "%1 is only supported in math mode", "\\" + name);
        }
        texParser.parse("macro", [parser, name]);
      }
    },
    items: (_a = {}, _a[BaseItems_js_1.StartItem.prototype.kind] = BaseItems_js_1.StartItem, _a[BaseItems_js_1.StopItem.prototype.kind] = BaseItems_js_1.StopItem, _a[BaseItems_js_1.MmlItem.prototype.kind] = BaseItems_js_1.MmlItem, _a[BaseItems_js_1.StyleItem.prototype.kind] = BaseItems_js_1.StyleItem, _a)
  });
  function internalMath(parser, text, level, mathvariant) {
    var config = parser.configuration.packageData.get("textmacros");
    if (!(parser instanceof TextParser_js_1.TextParser)) {
      config.texParser = parser;
    }
    return [new TextParser_js_1.TextParser(text, mathvariant ? { mathvariant } : {}, config.parseOptions, level).mml()];
  }
  exports.TextMacrosConfiguration = Configuration_js_1.Configuration.create("textmacros", {
    config: function(_config, jax) {
      var textConf = new Configuration_js_1.ParserConfiguration(jax.parseOptions.options.textmacros.packages, ["tex", "text"]);
      textConf.init();
      var parseOptions = new ParseOptions_js_1.default(textConf, []);
      parseOptions.options = jax.parseOptions.options;
      textConf.config(jax);
      Tags_js_1.TagsFactory.addTags(textConf.tags);
      parseOptions.tags = Tags_js_1.TagsFactory.getDefault();
      parseOptions.tags.configuration = parseOptions;
      parseOptions.packageData = jax.parseOptions.packageData;
      parseOptions.packageData.set("textmacros", { parseOptions, jax, texParser: null });
      parseOptions.options.internalMath = internalMath;
    },
    preprocessors: [function(data) {
      var config = data.data.packageData.get("textmacros");
      config.parseOptions.nodeFactory.setMmlFactory(config.jax.mmlFactory);
    }],
    options: {
      textmacros: {
        packages: ["text-base"]
      }
    }
  });
});

// node_modules/mathjax-full/js/input/tex/upgreek/UpgreekConfiguration.js
var require_UpgreekConfiguration = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.UpgreekConfiguration = undefined;
  var Configuration_js_1 = require_Configuration();
  var SymbolMap_js_1 = require_SymbolMap();
  var TexConstants_js_1 = require_TexConstants();
  function mathchar0miNormal(parser, mchar) {
    var def = mchar.attributes || {};
    def.mathvariant = TexConstants_js_1.TexConstant.Variant.NORMAL;
    var node = parser.create("token", "mi", def, mchar.char);
    parser.Push(node);
  }
  new SymbolMap_js_1.CharacterMap("upgreek", mathchar0miNormal, {
    upalpha: "α",
    upbeta: "β",
    upgamma: "γ",
    updelta: "δ",
    upepsilon: "ϵ",
    upzeta: "ζ",
    upeta: "η",
    uptheta: "θ",
    upiota: "ι",
    upkappa: "κ",
    uplambda: "λ",
    upmu: "μ",
    upnu: "ν",
    upxi: "ξ",
    upomicron: "ο",
    uppi: "π",
    uprho: "ρ",
    upsigma: "σ",
    uptau: "τ",
    upupsilon: "υ",
    upphi: "ϕ",
    upchi: "χ",
    uppsi: "ψ",
    upomega: "ω",
    upvarepsilon: "ε",
    upvartheta: "ϑ",
    upvarpi: "ϖ",
    upvarrho: "ϱ",
    upvarsigma: "ς",
    upvarphi: "φ",
    Upgamma: "Γ",
    Updelta: "Δ",
    Uptheta: "Θ",
    Uplambda: "Λ",
    Upxi: "Ξ",
    Uppi: "Π",
    Upsigma: "Σ",
    Upupsilon: "Υ",
    Upphi: "Φ",
    Uppsi: "Ψ",
    Upomega: "Ω"
  });
  exports.UpgreekConfiguration = Configuration_js_1.Configuration.create("upgreek", {
    handler: { macro: ["upgreek"] }
  });
});

// node_modules/mathjax-full/js/input/tex/unicode/UnicodeConfiguration.js
var require_UnicodeConfiguration = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.UnicodeConfiguration = exports.UnicodeMethods = undefined;
  var Configuration_js_1 = require_Configuration();
  var TexError_js_1 = __importDefault(require_TexError());
  var SymbolMap_js_1 = require_SymbolMap();
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var Entities_js_1 = require_Entities();
  exports.UnicodeMethods = {};
  var UnicodeCache = {};
  exports.UnicodeMethods.Unicode = function(parser, name) {
    var HD = parser.GetBrackets(name);
    var HDsplit = null;
    var font = null;
    if (HD) {
      if (HD.replace(/ /g, "").match(/^(\d+(\.\d*)?|\.\d+),(\d+(\.\d*)?|\.\d+)$/)) {
        HDsplit = HD.replace(/ /g, "").split(/,/);
        font = parser.GetBrackets(name);
      } else {
        font = HD;
      }
    }
    var n = ParseUtil_js_1.default.trimSpaces(parser.GetArgument(name)).replace(/^0x/, "x");
    if (!n.match(/^(x[0-9A-Fa-f]+|[0-9]+)$/)) {
      throw new TexError_js_1.default("BadUnicode", "Argument to \\unicode must be a number");
    }
    var N = parseInt(n.match(/^x/) ? "0" + n : n);
    if (!UnicodeCache[N]) {
      UnicodeCache[N] = [800, 200, font, N];
    } else if (!font) {
      font = UnicodeCache[N][2];
    }
    if (HDsplit) {
      UnicodeCache[N][0] = Math.floor(parseFloat(HDsplit[0]) * 1000);
      UnicodeCache[N][1] = Math.floor(parseFloat(HDsplit[1]) * 1000);
    }
    var variant = parser.stack.env.font;
    var def = {};
    if (font) {
      UnicodeCache[N][2] = def.fontfamily = font.replace(/'/g, "'");
      if (variant) {
        if (variant.match(/bold/)) {
          def.fontweight = "bold";
        }
        if (variant.match(/italic|-mathit/)) {
          def.fontstyle = "italic";
        }
      }
    } else if (variant) {
      def.mathvariant = variant;
    }
    var node = parser.create("token", "mtext", def, (0, Entities_js_1.numeric)(n));
    NodeUtil_js_1.default.setProperty(node, "unicode", true);
    parser.Push(node);
  };
  new SymbolMap_js_1.CommandMap("unicode", { unicode: "Unicode" }, exports.UnicodeMethods);
  exports.UnicodeConfiguration = Configuration_js_1.Configuration.create("unicode", { handler: { macro: ["unicode"] } });
});

// node_modules/mathjax-full/js/input/tex/verb/VerbConfiguration.js
var require_VerbConfiguration = __commonJS(function(exports) {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.VerbConfiguration = exports.VerbMethods = undefined;
  var Configuration_js_1 = require_Configuration();
  var TexConstants_js_1 = require_TexConstants();
  var SymbolMap_js_1 = require_SymbolMap();
  var TexError_js_1 = __importDefault(require_TexError());
  exports.VerbMethods = {};
  exports.VerbMethods.Verb = function(parser, name) {
    var c = parser.GetNext();
    var start = ++parser.i;
    if (c === "") {
      throw new TexError_js_1.default("MissingArgFor", "Missing argument for %1", name);
    }
    while (parser.i < parser.string.length && parser.string.charAt(parser.i) !== c) {
      parser.i++;
    }
    if (parser.i === parser.string.length) {
      throw new TexError_js_1.default("NoClosingDelim", "Can't find closing delimiter for %1", parser.currentCS);
    }
    var text = parser.string.slice(start, parser.i).replace(/ /g, " ");
    parser.i++;
    parser.Push(parser.create("token", "mtext", { mathvariant: TexConstants_js_1.TexConstant.Variant.MONOSPACE }, text));
  };
  new SymbolMap_js_1.CommandMap("verb", { verb: "Verb" }, exports.VerbMethods);
  exports.VerbConfiguration = Configuration_js_1.Configuration.create("verb", { handler: { macro: ["verb"] } });
});

// node_modules/mathjax-full/js/input/tex/AllPackages.js
var require_AllPackages = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AllPackages = undefined;
  require_BaseConfiguration();
  require_ActionConfiguration();
  require_AmsConfiguration();
  require_AmsCdConfiguration();
  require_BboxConfiguration();
  require_BoldsymbolConfiguration();
  require_BraketConfiguration();
  require_BussproofsConfiguration();
  require_CancelConfiguration();
  require_CasesConfiguration();
  require_CenternotConfiguration();
  require_ColorConfiguration();
  require_ColorV2Configuration();
  require_ColortblConfiguration();
  require_ConfigMacrosConfiguration();
  require_EmpheqConfiguration();
  require_EncloseConfiguration();
  require_ExtpfeilConfiguration();
  require_GensymbConfiguration();
  require_HtmlConfiguration();
  require_MathtoolsConfiguration();
  require_MhchemConfiguration();
  require_NewcommandConfiguration();
  require_NoErrorsConfiguration();
  require_NoUndefinedConfiguration();
  require_PhysicsConfiguration();
  require_SetOptionsConfiguration();
  require_TagFormatConfiguration();
  require_TextcompConfiguration();
  require_TextMacrosConfiguration();
  require_UpgreekConfiguration();
  require_UnicodeConfiguration();
  require_VerbConfiguration();
  if (typeof MathJax !== "undefined" && MathJax.loader) {
    MathJax.loader.preLoad("[tex]/action", "[tex]/ams", "[tex]/amscd", "[tex]/bbox", "[tex]/boldsymbol", "[tex]/braket", "[tex]/bussproofs", "[tex]/cancel", "[tex]/cases", "[tex]/centernot", "[tex]/color", "[tex]/colorv2", "[tex]/colortbl", "[tex]/empheq", "[tex]/enclose", "[tex]/extpfeil", "[tex]/gensymb", "[tex]/html", "[tex]/mathtools", "[tex]/mhchem", "[tex]/newcommand", "[tex]/noerrors", "[tex]/noundefined", "[tex]/physics", "[tex]/upgreek", "[tex]/unicode", "[tex]/verb", "[tex]/configmacros", "[tex]/tagformat", "[tex]/textcomp", "[tex]/textmacros", "[tex]/setoptions");
  }
  exports.AllPackages = [
    "base",
    "action",
    "ams",
    "amscd",
    "bbox",
    "boldsymbol",
    "braket",
    "bussproofs",
    "cancel",
    "cases",
    "centernot",
    "color",
    "colortbl",
    "empheq",
    "enclose",
    "extpfeil",
    "gensymb",
    "html",
    "mathtools",
    "mhchem",
    "newcommand",
    "noerrors",
    "noundefined",
    "upgreek",
    "unicode",
    "verb",
    "configmacros",
    "tagformat",
    "textcomp",
    "textmacros"
  ];
});

export { require_AllPackages };
