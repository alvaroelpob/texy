import {
  require_NodeUtil,
  require_TexError,
  require_ParseUtil,
  require_Tags,
  require_MapHandler,
  require_Configuration,
  require_SymbolMap,
  require_BaseItems,
  require_TexConstants,
  require_BaseMethods,
  require_ParseMethods
} from "./chunk-7sscmp2c.js";
import {
  require_OperatorDictionary
} from "./chunk-cz1dtvr4.js";
import {
  require_lengths
} from "./chunk-79ne31ds.js";
import {
  require_MmlNode
} from "./chunk-nk72tbre.js";
import {
  __commonJS
} from "./chunk-cdjrrdrs.js";

// node_modules/mathjax-full/js/input/tex/base/BaseMappings.js
var require_BaseMappings = __commonJS(function(exports) {
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
  var TexConstants_js_1 = require_TexConstants();
  var BaseMethods_js_1 = __importDefault(require_BaseMethods());
  var ParseMethods_js_1 = __importDefault(require_ParseMethods());
  var ParseUtil_js_1 = __importDefault(require_ParseUtil());
  var MmlNode_js_1 = require_MmlNode();
  var lengths_js_1 = require_lengths();
  new sm.RegExpMap("letter", ParseMethods_js_1.default.variable, /[a-z]/i);
  new sm.RegExpMap("digit", ParseMethods_js_1.default.digit, /[0-9.,]/);
  new sm.RegExpMap("command", ParseMethods_js_1.default.controlSequence, /^\\/);
  new sm.MacroMap("special", {
    "{": "Open",
    "}": "Close",
    "~": "Tilde",
    "^": "Superscript",
    _: "Subscript",
    " ": "Space",
    "\t": "Space",
    "\r": "Space",
    "\n": "Space",
    "'": "Prime",
    "%": "Comment",
    "&": "Entry",
    "#": "Hash",
    " ": "Space",
    "’": "Prime"
  }, BaseMethods_js_1.default);
  new sm.CharacterMap("mathchar0mi", ParseMethods_js_1.default.mathchar0mi, {
    alpha: "α",
    beta: "β",
    gamma: "γ",
    delta: "δ",
    epsilon: "ϵ",
    zeta: "ζ",
    eta: "η",
    theta: "θ",
    iota: "ι",
    kappa: "κ",
    lambda: "λ",
    mu: "μ",
    nu: "ν",
    xi: "ξ",
    omicron: "ο",
    pi: "π",
    rho: "ρ",
    sigma: "σ",
    tau: "τ",
    upsilon: "υ",
    phi: "ϕ",
    chi: "χ",
    psi: "ψ",
    omega: "ω",
    varepsilon: "ε",
    vartheta: "ϑ",
    varpi: "ϖ",
    varrho: "ϱ",
    varsigma: "ς",
    varphi: "φ",
    S: ["§", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    aleph: ["ℵ", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    hbar: ["ℏ", { variantForm: true }],
    imath: "ı",
    jmath: "ȷ",
    ell: "ℓ",
    wp: ["℘", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    Re: ["ℜ", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    Im: ["ℑ", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    partial: ["∂", { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    infty: ["∞", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    prime: ["′", { variantForm: true }],
    emptyset: ["∅", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    nabla: ["∇", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    top: ["⊤", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    bot: ["⊥", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    angle: ["∠", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    triangle: ["△", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    backslash: ["∖", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    forall: ["∀", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    exists: ["∃", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    neg: ["¬", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    lnot: ["¬", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    flat: ["♭", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    natural: ["♮", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    sharp: ["♯", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    clubsuit: ["♣", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    diamondsuit: ["♢", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    heartsuit: ["♡", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    spadesuit: ["♠", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }]
  });
  new sm.CharacterMap("mathchar0mo", ParseMethods_js_1.default.mathchar0mo, {
    surd: "√",
    coprod: ["∐", {
      texClass: MmlNode_js_1.TEXCLASS.OP,
      movesupsub: true
    }],
    bigvee: ["⋁", {
      texClass: MmlNode_js_1.TEXCLASS.OP,
      movesupsub: true
    }],
    bigwedge: ["⋀", {
      texClass: MmlNode_js_1.TEXCLASS.OP,
      movesupsub: true
    }],
    biguplus: ["⨄", {
      texClass: MmlNode_js_1.TEXCLASS.OP,
      movesupsub: true
    }],
    bigcap: ["⋂", {
      texClass: MmlNode_js_1.TEXCLASS.OP,
      movesupsub: true
    }],
    bigcup: ["⋃", {
      texClass: MmlNode_js_1.TEXCLASS.OP,
      movesupsub: true
    }],
    int: ["∫", { texClass: MmlNode_js_1.TEXCLASS.OP }],
    intop: ["∫", {
      texClass: MmlNode_js_1.TEXCLASS.OP,
      movesupsub: true,
      movablelimits: true
    }],
    iint: ["∬", { texClass: MmlNode_js_1.TEXCLASS.OP }],
    iiint: ["∭", { texClass: MmlNode_js_1.TEXCLASS.OP }],
    prod: ["∏", {
      texClass: MmlNode_js_1.TEXCLASS.OP,
      movesupsub: true
    }],
    sum: ["∑", {
      texClass: MmlNode_js_1.TEXCLASS.OP,
      movesupsub: true
    }],
    bigotimes: ["⨂", {
      texClass: MmlNode_js_1.TEXCLASS.OP,
      movesupsub: true
    }],
    bigoplus: ["⨁", {
      texClass: MmlNode_js_1.TEXCLASS.OP,
      movesupsub: true
    }],
    bigodot: ["⨀", {
      texClass: MmlNode_js_1.TEXCLASS.OP,
      movesupsub: true
    }],
    oint: ["∮", { texClass: MmlNode_js_1.TEXCLASS.OP }],
    bigsqcup: ["⨆", {
      texClass: MmlNode_js_1.TEXCLASS.OP,
      movesupsub: true
    }],
    smallint: ["∫", { largeop: false }],
    triangleleft: "◃",
    triangleright: "▹",
    bigtriangleup: "△",
    bigtriangledown: "▽",
    wedge: "∧",
    land: "∧",
    vee: "∨",
    lor: "∨",
    cap: "∩",
    cup: "∪",
    ddagger: "‡",
    dagger: "†",
    sqcap: "⊓",
    sqcup: "⊔",
    uplus: "⊎",
    amalg: "⨿",
    diamond: "⋄",
    bullet: "∙",
    wr: "≀",
    div: "÷",
    divsymbol: "÷",
    odot: ["⊙", { largeop: false }],
    oslash: ["⊘", { largeop: false }],
    otimes: ["⊗", { largeop: false }],
    ominus: ["⊖", { largeop: false }],
    oplus: ["⊕", { largeop: false }],
    mp: "∓",
    pm: "±",
    circ: "∘",
    bigcirc: "◯",
    setminus: "∖",
    cdot: "⋅",
    ast: "∗",
    times: "×",
    star: "⋆",
    propto: "∝",
    sqsubseteq: "⊑",
    sqsupseteq: "⊒",
    parallel: "∥",
    mid: "∣",
    dashv: "⊣",
    vdash: "⊢",
    leq: "≤",
    le: "≤",
    geq: "≥",
    ge: "≥",
    lt: "<",
    gt: ">",
    succ: "≻",
    prec: "≺",
    approx: "≈",
    succeq: "⪰",
    preceq: "⪯",
    supset: "⊃",
    subset: "⊂",
    supseteq: "⊇",
    subseteq: "⊆",
    in: "∈",
    ni: "∋",
    notin: "∉",
    owns: "∋",
    gg: "≫",
    ll: "≪",
    sim: "∼",
    simeq: "≃",
    perp: "⊥",
    equiv: "≡",
    asymp: "≍",
    smile: "⌣",
    frown: "⌢",
    ne: "≠",
    neq: "≠",
    cong: "≅",
    doteq: "≐",
    bowtie: "⋈",
    models: "⊨",
    notChar: "⧸",
    Leftrightarrow: "⇔",
    Leftarrow: "⇐",
    Rightarrow: "⇒",
    leftrightarrow: "↔",
    leftarrow: "←",
    gets: "←",
    rightarrow: "→",
    to: ["→", { accent: false }],
    mapsto: "↦",
    leftharpoonup: "↼",
    leftharpoondown: "↽",
    rightharpoonup: "⇀",
    rightharpoondown: "⇁",
    nearrow: "↗",
    searrow: "↘",
    nwarrow: "↖",
    swarrow: "↙",
    rightleftharpoons: "⇌",
    hookrightarrow: "↪",
    hookleftarrow: "↩",
    longleftarrow: "⟵",
    Longleftarrow: "⟸",
    longrightarrow: "⟶",
    Longrightarrow: "⟹",
    Longleftrightarrow: "⟺",
    longleftrightarrow: "⟷",
    longmapsto: "⟼",
    ldots: "…",
    cdots: "⋯",
    vdots: "⋮",
    ddots: "⋱",
    dotsc: "…",
    dotsb: "⋯",
    dotsm: "⋯",
    dotsi: "⋯",
    dotso: "…",
    ldotp: [".", { texClass: MmlNode_js_1.TEXCLASS.PUNCT }],
    cdotp: ["⋅", { texClass: MmlNode_js_1.TEXCLASS.PUNCT }],
    colon: [":", { texClass: MmlNode_js_1.TEXCLASS.PUNCT }]
  });
  new sm.CharacterMap("mathchar7", ParseMethods_js_1.default.mathchar7, {
    Gamma: "Γ",
    Delta: "Δ",
    Theta: "Θ",
    Lambda: "Λ",
    Xi: "Ξ",
    Pi: "Π",
    Sigma: "Σ",
    Upsilon: "Υ",
    Phi: "Φ",
    Psi: "Ψ",
    Omega: "Ω",
    _: "_",
    "#": "#",
    $: "$",
    "%": "%",
    "&": "&",
    And: "&"
  });
  new sm.DelimiterMap("delimiter", ParseMethods_js_1.default.delimiter, {
    "(": "(",
    ")": ")",
    "[": "[",
    "]": "]",
    "<": "⟨",
    ">": "⟩",
    "\\lt": "⟨",
    "\\gt": "⟩",
    "/": "/",
    "|": ["|", { texClass: MmlNode_js_1.TEXCLASS.ORD }],
    ".": "",
    "\\\\": "\\",
    "\\lmoustache": "⎰",
    "\\rmoustache": "⎱",
    "\\lgroup": "⟮",
    "\\rgroup": "⟯",
    "\\arrowvert": "⏐",
    "\\Arrowvert": "‖",
    "\\bracevert": "⎪",
    "\\Vert": ["‖", { texClass: MmlNode_js_1.TEXCLASS.ORD }],
    "\\|": ["‖", { texClass: MmlNode_js_1.TEXCLASS.ORD }],
    "\\vert": ["|", { texClass: MmlNode_js_1.TEXCLASS.ORD }],
    "\\uparrow": "↑",
    "\\downarrow": "↓",
    "\\updownarrow": "↕",
    "\\Uparrow": "⇑",
    "\\Downarrow": "⇓",
    "\\Updownarrow": "⇕",
    "\\backslash": "\\",
    "\\rangle": "⟩",
    "\\langle": "⟨",
    "\\rbrace": "}",
    "\\lbrace": "{",
    "\\}": "}",
    "\\{": "{",
    "\\rceil": "⌉",
    "\\lceil": "⌈",
    "\\rfloor": "⌋",
    "\\lfloor": "⌊",
    "\\lbrack": "[",
    "\\rbrack": "]"
  });
  new sm.CommandMap("macros", {
    displaystyle: ["SetStyle", "D", true, 0],
    textstyle: ["SetStyle", "T", false, 0],
    scriptstyle: ["SetStyle", "S", false, 1],
    scriptscriptstyle: ["SetStyle", "SS", false, 2],
    rm: ["SetFont", TexConstants_js_1.TexConstant.Variant.NORMAL],
    mit: ["SetFont", TexConstants_js_1.TexConstant.Variant.ITALIC],
    oldstyle: ["SetFont", TexConstants_js_1.TexConstant.Variant.OLDSTYLE],
    cal: ["SetFont", TexConstants_js_1.TexConstant.Variant.CALLIGRAPHIC],
    it: ["SetFont", TexConstants_js_1.TexConstant.Variant.MATHITALIC],
    bf: ["SetFont", TexConstants_js_1.TexConstant.Variant.BOLD],
    bbFont: ["SetFont", TexConstants_js_1.TexConstant.Variant.DOUBLESTRUCK],
    scr: ["SetFont", TexConstants_js_1.TexConstant.Variant.SCRIPT],
    frak: ["SetFont", TexConstants_js_1.TexConstant.Variant.FRAKTUR],
    sf: ["SetFont", TexConstants_js_1.TexConstant.Variant.SANSSERIF],
    tt: ["SetFont", TexConstants_js_1.TexConstant.Variant.MONOSPACE],
    mathrm: ["MathFont", TexConstants_js_1.TexConstant.Variant.NORMAL],
    mathup: ["MathFont", TexConstants_js_1.TexConstant.Variant.NORMAL],
    mathnormal: ["MathFont", ""],
    mathbf: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLD],
    mathbfup: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLD],
    mathit: ["MathFont", TexConstants_js_1.TexConstant.Variant.MATHITALIC],
    mathbfit: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDITALIC],
    mathbb: ["MathFont", TexConstants_js_1.TexConstant.Variant.DOUBLESTRUCK],
    Bbb: ["MathFont", TexConstants_js_1.TexConstant.Variant.DOUBLESTRUCK],
    mathfrak: ["MathFont", TexConstants_js_1.TexConstant.Variant.FRAKTUR],
    mathbffrak: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDFRAKTUR],
    mathscr: ["MathFont", TexConstants_js_1.TexConstant.Variant.SCRIPT],
    mathbfscr: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDSCRIPT],
    mathsf: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIF],
    mathsfup: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIF],
    mathbfsf: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDSANSSERIF],
    mathbfsfup: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDSANSSERIF],
    mathsfit: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIFITALIC],
    mathbfsfit: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIFBOLDITALIC],
    mathtt: ["MathFont", TexConstants_js_1.TexConstant.Variant.MONOSPACE],
    mathcal: ["MathFont", TexConstants_js_1.TexConstant.Variant.CALLIGRAPHIC],
    mathbfcal: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDCALLIGRAPHIC],
    symrm: ["MathFont", TexConstants_js_1.TexConstant.Variant.NORMAL],
    symup: ["MathFont", TexConstants_js_1.TexConstant.Variant.NORMAL],
    symnormal: ["MathFont", ""],
    symbf: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLD],
    symbfup: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLD],
    symit: ["MathFont", TexConstants_js_1.TexConstant.Variant.ITALIC],
    symbfit: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDITALIC],
    symbb: ["MathFont", TexConstants_js_1.TexConstant.Variant.DOUBLESTRUCK],
    symfrak: ["MathFont", TexConstants_js_1.TexConstant.Variant.FRAKTUR],
    symbffrak: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDFRAKTUR],
    symscr: ["MathFont", TexConstants_js_1.TexConstant.Variant.SCRIPT],
    symbfscr: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDSCRIPT],
    symsf: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIF],
    symsfup: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIF],
    symbfsf: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDSANSSERIF],
    symbfsfup: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDSANSSERIF],
    symsfit: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIFITALIC],
    symbfsfit: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIFBOLDITALIC],
    symtt: ["MathFont", TexConstants_js_1.TexConstant.Variant.MONOSPACE],
    symcal: ["MathFont", TexConstants_js_1.TexConstant.Variant.CALLIGRAPHIC],
    symbfcal: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDCALLIGRAPHIC],
    textrm: ["HBox", null, TexConstants_js_1.TexConstant.Variant.NORMAL],
    textup: ["HBox", null, TexConstants_js_1.TexConstant.Variant.NORMAL],
    textnormal: ["HBox"],
    textit: ["HBox", null, TexConstants_js_1.TexConstant.Variant.ITALIC],
    textbf: ["HBox", null, TexConstants_js_1.TexConstant.Variant.BOLD],
    textsf: ["HBox", null, TexConstants_js_1.TexConstant.Variant.SANSSERIF],
    texttt: ["HBox", null, TexConstants_js_1.TexConstant.Variant.MONOSPACE],
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
    arcsin: "NamedFn",
    arccos: "NamedFn",
    arctan: "NamedFn",
    arg: "NamedFn",
    cos: "NamedFn",
    cosh: "NamedFn",
    cot: "NamedFn",
    coth: "NamedFn",
    csc: "NamedFn",
    deg: "NamedFn",
    det: "NamedOp",
    dim: "NamedFn",
    exp: "NamedFn",
    gcd: "NamedOp",
    hom: "NamedFn",
    inf: "NamedOp",
    ker: "NamedFn",
    lg: "NamedFn",
    lim: "NamedOp",
    liminf: ["NamedOp", "lim&thinsp;inf"],
    limsup: ["NamedOp", "lim&thinsp;sup"],
    ln: "NamedFn",
    log: "NamedFn",
    max: "NamedOp",
    min: "NamedOp",
    Pr: "NamedOp",
    sec: "NamedFn",
    sin: "NamedFn",
    sinh: "NamedFn",
    sup: "NamedOp",
    tan: "NamedFn",
    tanh: "NamedFn",
    limits: ["Limits", 1],
    nolimits: ["Limits", 0],
    overline: ["UnderOver", "2015"],
    underline: ["UnderOver", "2015"],
    overbrace: ["UnderOver", "23DE", 1],
    underbrace: ["UnderOver", "23DF", 1],
    overparen: ["UnderOver", "23DC"],
    underparen: ["UnderOver", "23DD"],
    overrightarrow: ["UnderOver", "2192"],
    underrightarrow: ["UnderOver", "2192"],
    overleftarrow: ["UnderOver", "2190"],
    underleftarrow: ["UnderOver", "2190"],
    overleftrightarrow: ["UnderOver", "2194"],
    underleftrightarrow: ["UnderOver", "2194"],
    overset: "Overset",
    underset: "Underset",
    overunderset: "Overunderset",
    stackrel: ["Macro", "\\mathrel{\\mathop{#2}\\limits^{#1}}", 2],
    stackbin: ["Macro", "\\mathbin{\\mathop{#2}\\limits^{#1}}", 2],
    over: "Over",
    overwithdelims: "Over",
    atop: "Over",
    atopwithdelims: "Over",
    above: "Over",
    abovewithdelims: "Over",
    brace: ["Over", "{", "}"],
    brack: ["Over", "[", "]"],
    choose: ["Over", "(", ")"],
    frac: "Frac",
    sqrt: "Sqrt",
    root: "Root",
    uproot: ["MoveRoot", "upRoot"],
    leftroot: ["MoveRoot", "leftRoot"],
    left: "LeftRight",
    right: "LeftRight",
    middle: "LeftRight",
    llap: "Lap",
    rlap: "Lap",
    raise: "RaiseLower",
    lower: "RaiseLower",
    moveleft: "MoveLeftRight",
    moveright: "MoveLeftRight",
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
    nonscript: "Nonscript",
    big: ["MakeBig", MmlNode_js_1.TEXCLASS.ORD, 0.85],
    Big: ["MakeBig", MmlNode_js_1.TEXCLASS.ORD, 1.15],
    bigg: ["MakeBig", MmlNode_js_1.TEXCLASS.ORD, 1.45],
    Bigg: ["MakeBig", MmlNode_js_1.TEXCLASS.ORD, 1.75],
    bigl: ["MakeBig", MmlNode_js_1.TEXCLASS.OPEN, 0.85],
    Bigl: ["MakeBig", MmlNode_js_1.TEXCLASS.OPEN, 1.15],
    biggl: ["MakeBig", MmlNode_js_1.TEXCLASS.OPEN, 1.45],
    Biggl: ["MakeBig", MmlNode_js_1.TEXCLASS.OPEN, 1.75],
    bigr: ["MakeBig", MmlNode_js_1.TEXCLASS.CLOSE, 0.85],
    Bigr: ["MakeBig", MmlNode_js_1.TEXCLASS.CLOSE, 1.15],
    biggr: ["MakeBig", MmlNode_js_1.TEXCLASS.CLOSE, 1.45],
    Biggr: ["MakeBig", MmlNode_js_1.TEXCLASS.CLOSE, 1.75],
    bigm: ["MakeBig", MmlNode_js_1.TEXCLASS.REL, 0.85],
    Bigm: ["MakeBig", MmlNode_js_1.TEXCLASS.REL, 1.15],
    biggm: ["MakeBig", MmlNode_js_1.TEXCLASS.REL, 1.45],
    Biggm: ["MakeBig", MmlNode_js_1.TEXCLASS.REL, 1.75],
    mathord: ["TeXAtom", MmlNode_js_1.TEXCLASS.ORD],
    mathop: ["TeXAtom", MmlNode_js_1.TEXCLASS.OP],
    mathopen: ["TeXAtom", MmlNode_js_1.TEXCLASS.OPEN],
    mathclose: ["TeXAtom", MmlNode_js_1.TEXCLASS.CLOSE],
    mathbin: ["TeXAtom", MmlNode_js_1.TEXCLASS.BIN],
    mathrel: ["TeXAtom", MmlNode_js_1.TEXCLASS.REL],
    mathpunct: ["TeXAtom", MmlNode_js_1.TEXCLASS.PUNCT],
    mathinner: ["TeXAtom", MmlNode_js_1.TEXCLASS.INNER],
    vcenter: ["TeXAtom", MmlNode_js_1.TEXCLASS.VCENTER],
    buildrel: "BuildRel",
    hbox: ["HBox", 0],
    text: "HBox",
    mbox: ["HBox", 0],
    fbox: "FBox",
    boxed: ["Macro", "\\fbox{$\\displaystyle{#1}$}", 1],
    framebox: "FrameBox",
    strut: "Strut",
    mathstrut: ["Macro", "\\vphantom{(}"],
    phantom: "Phantom",
    vphantom: ["Phantom", 1, 0],
    hphantom: ["Phantom", 0, 1],
    smash: "Smash",
    acute: ["Accent", "00B4"],
    grave: ["Accent", "0060"],
    ddot: ["Accent", "00A8"],
    tilde: ["Accent", "007E"],
    bar: ["Accent", "00AF"],
    breve: ["Accent", "02D8"],
    check: ["Accent", "02C7"],
    hat: ["Accent", "005E"],
    vec: ["Accent", "2192"],
    dot: ["Accent", "02D9"],
    widetilde: ["Accent", "007E", 1],
    widehat: ["Accent", "005E", 1],
    matrix: "Matrix",
    array: "Matrix",
    pmatrix: ["Matrix", "(", ")"],
    cases: [
      "Matrix",
      "{",
      "",
      "left left",
      null,
      ".1em",
      null,
      true
    ],
    eqalign: [
      "Matrix",
      null,
      null,
      "right left",
      (0, lengths_js_1.em)(lengths_js_1.MATHSPACE.thickmathspace),
      ".5em",
      "D"
    ],
    displaylines: ["Matrix", null, null, "center", null, ".5em", "D"],
    cr: "Cr",
    "\\": "CrLaTeX",
    newline: ["CrLaTeX", true],
    hline: ["HLine", "solid"],
    hdashline: ["HLine", "dashed"],
    eqalignno: [
      "Matrix",
      null,
      null,
      "right left",
      (0, lengths_js_1.em)(lengths_js_1.MATHSPACE.thickmathspace),
      ".5em",
      "D",
      null,
      "right"
    ],
    leqalignno: [
      "Matrix",
      null,
      null,
      "right left",
      (0, lengths_js_1.em)(lengths_js_1.MATHSPACE.thickmathspace),
      ".5em",
      "D",
      null,
      "left"
    ],
    hfill: "HFill",
    hfil: "HFill",
    hfilll: "HFill",
    bmod: ["Macro", '\\mmlToken{mo}[lspace="thickmathspace"' + ' rspace="thickmathspace"]{mod}'],
    pmod: ["Macro", "\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}", 1],
    mod: [
      "Macro",
      "\\mathchoice{\\kern18mu}{\\kern12mu}" + "{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1",
      1
    ],
    pod: ["Macro", "\\mathchoice{\\kern18mu}{\\kern8mu}" + "{\\kern8mu}{\\kern8mu}(#1)", 1],
    iff: ["Macro", "\\;\\Longleftrightarrow\\;"],
    skew: ["Macro", "{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}", 3],
    pmb: ["Macro", "\\rlap{#1}\\kern1px{#1}", 1],
    TeX: ["Macro", "T\\kern-.14em\\lower.5ex{E}\\kern-.115em X"],
    LaTeX: ["Macro", "L\\kern-.325em\\raise.21em" + "{\\scriptstyle{A}}\\kern-.17em\\TeX"],
    " ": ["Macro", "\\text{ }"],
    not: "Not",
    dots: "Dots",
    space: "Tilde",
    " ": "Tilde",
    begin: "BeginEnd",
    end: "BeginEnd",
    label: "HandleLabel",
    ref: "HandleRef",
    nonumber: "HandleNoTag",
    mathchoice: "MathChoice",
    mmlToken: "MmlToken"
  }, BaseMethods_js_1.default);
  new sm.EnvironmentMap("environment", ParseMethods_js_1.default.environment, {
    array: ["AlignedArray"],
    equation: ["Equation", null, true],
    eqnarray: [
      "EqnArray",
      null,
      true,
      true,
      "rcl",
      ParseUtil_js_1.default.cols(0, lengths_js_1.MATHSPACE.thickmathspace),
      ".5em"
    ]
  }, BaseMethods_js_1.default);
  new sm.CharacterMap("not_remap", null, {
    "←": "↚",
    "→": "↛",
    "↔": "↮",
    "⇐": "⇍",
    "⇒": "⇏",
    "⇔": "⇎",
    "∈": "∉",
    "∋": "∌",
    "∣": "∤",
    "∥": "∦",
    "∼": "≁",
    "~": "≁",
    "≃": "≄",
    "≅": "≇",
    "≈": "≉",
    "≍": "≭",
    "=": "≠",
    "≡": "≢",
    "<": "≮",
    ">": "≯",
    "≤": "≰",
    "≥": "≱",
    "≲": "≴",
    "≳": "≵",
    "≶": "≸",
    "≷": "≹",
    "≺": "⊀",
    "≻": "⊁",
    "⊂": "⊄",
    "⊃": "⊅",
    "⊆": "⊈",
    "⊇": "⊉",
    "⊢": "⊬",
    "⊨": "⊭",
    "⊩": "⊮",
    "⊫": "⊯",
    "≼": "⋠",
    "≽": "⋡",
    "⊑": "⋢",
    "⊒": "⋣",
    "⊲": "⋪",
    "⊳": "⋫",
    "⊴": "⋬",
    "⊵": "⋭",
    "∃": "∄"
  });
});

// node_modules/mathjax-full/js/input/tex/base/BaseConfiguration.js
var require_BaseConfiguration = __commonJS(function(exports) {
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
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BaseConfiguration = exports.BaseTags = exports.Other = undefined;
  var Configuration_js_1 = require_Configuration();
  var MapHandler_js_1 = require_MapHandler();
  var TexError_js_1 = __importDefault(require_TexError());
  var NodeUtil_js_1 = __importDefault(require_NodeUtil());
  var SymbolMap_js_1 = require_SymbolMap();
  var bitem = __importStar(require_BaseItems());
  var Tags_js_1 = require_Tags();
  require_BaseMappings();
  var OperatorDictionary_js_1 = require_OperatorDictionary();
  new SymbolMap_js_1.CharacterMap("remap", null, {
    "-": "−",
    "*": "∗",
    "`": "‘"
  });
  function Other(parser, char) {
    var font = parser.stack.env["font"];
    var def = font ? { mathvariant: parser.stack.env["font"] } : {};
    var remap = MapHandler_js_1.MapHandler.getMap("remap").lookup(char);
    var range = (0, OperatorDictionary_js_1.getRange)(char);
    var type = range ? range[3] : "mo";
    var mo = parser.create("token", type, def, remap ? remap.char : char);
    range[4] && mo.attributes.set("mathvariant", range[4]);
    if (type === "mo") {
      NodeUtil_js_1.default.setProperty(mo, "fixStretchy", true);
      parser.configuration.addNode("fixStretchy", mo);
    }
    parser.Push(mo);
  }
  exports.Other = Other;
  function csUndefined(_parser, name) {
    throw new TexError_js_1.default("UndefinedControlSequence", "Undefined control sequence %1", "\\" + name);
  }
  function envUndefined(_parser, env) {
    throw new TexError_js_1.default("UnknownEnv", "Unknown environment '%1'", env);
  }
  function filterNonscript(_a) {
    var e_1, _b;
    var data = _a.data;
    try {
      for (var _c = __values(data.getList("nonscript")), _d = _c.next();!_d.done; _d = _c.next()) {
        var mml = _d.value;
        if (mml.attributes.get("scriptlevel") > 0) {
          var parent_1 = mml.parent;
          parent_1.childNodes.splice(parent_1.childIndex(mml), 1);
          data.removeFromList(mml.kind, [mml]);
          if (mml.isKind("mrow")) {
            var mstyle = mml.childNodes[0];
            data.removeFromList("mstyle", [mstyle]);
            data.removeFromList("mspace", mstyle.childNodes[0].childNodes);
          }
        } else if (mml.isKind("mrow")) {
          mml.parent.replaceChild(mml.childNodes[0], mml);
          data.removeFromList("mrow", [mml]);
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
  var BaseTags = function(_super) {
    __extends(BaseTags, _super);
    function BaseTags() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return BaseTags;
  }(Tags_js_1.AbstractTags);
  exports.BaseTags = BaseTags;
  exports.BaseConfiguration = Configuration_js_1.Configuration.create("base", {
    handler: {
      character: ["command", "special", "letter", "digit"],
      delimiter: ["delimiter"],
      macro: ["delimiter", "macros", "mathchar0mi", "mathchar0mo", "mathchar7"],
      environment: ["environment"]
    },
    fallback: {
      character: Other,
      macro: csUndefined,
      environment: envUndefined
    },
    items: (_a = {}, _a[bitem.StartItem.prototype.kind] = bitem.StartItem, _a[bitem.StopItem.prototype.kind] = bitem.StopItem, _a[bitem.OpenItem.prototype.kind] = bitem.OpenItem, _a[bitem.CloseItem.prototype.kind] = bitem.CloseItem, _a[bitem.PrimeItem.prototype.kind] = bitem.PrimeItem, _a[bitem.SubsupItem.prototype.kind] = bitem.SubsupItem, _a[bitem.OverItem.prototype.kind] = bitem.OverItem, _a[bitem.LeftItem.prototype.kind] = bitem.LeftItem, _a[bitem.Middle.prototype.kind] = bitem.Middle, _a[bitem.RightItem.prototype.kind] = bitem.RightItem, _a[bitem.BeginItem.prototype.kind] = bitem.BeginItem, _a[bitem.EndItem.prototype.kind] = bitem.EndItem, _a[bitem.StyleItem.prototype.kind] = bitem.StyleItem, _a[bitem.PositionItem.prototype.kind] = bitem.PositionItem, _a[bitem.CellItem.prototype.kind] = bitem.CellItem, _a[bitem.MmlItem.prototype.kind] = bitem.MmlItem, _a[bitem.FnItem.prototype.kind] = bitem.FnItem, _a[bitem.NotItem.prototype.kind] = bitem.NotItem, _a[bitem.NonscriptItem.prototype.kind] = bitem.NonscriptItem, _a[bitem.DotsItem.prototype.kind] = bitem.DotsItem, _a[bitem.ArrayItem.prototype.kind] = bitem.ArrayItem, _a[bitem.EqnArrayItem.prototype.kind] = bitem.EqnArrayItem, _a[bitem.EquationItem.prototype.kind] = bitem.EquationItem, _a),
    options: {
      maxMacros: 1000,
      baseURL: typeof document === "undefined" || document.getElementsByTagName("base").length === 0 ? "" : String(document.location).replace(/#.*$/, "")
    },
    tags: {
      base: BaseTags
    },
    postprocessors: [[filterNonscript, -4]]
  });
});

export { require_BaseConfiguration };
