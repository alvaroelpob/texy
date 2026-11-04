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
  require_Attributes,
  require_MmlNode
} from "./chunk-nk72tbre.js";
import {
  __commonJS
} from "./chunk-cdjrrdrs.js";

// node_modules/mathjax-full/js/core/Tree/NodeFactory.js
var require_NodeFactory = __commonJS(function(exports) {
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
  exports.AbstractNodeFactory = undefined;
  var Factory_js_1 = require_Factory();
  var AbstractNodeFactory = function(_super) {
    __extends(AbstractNodeFactory, _super);
    function AbstractNodeFactory() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractNodeFactory.prototype.create = function(kind, properties, children) {
      if (properties === undefined) {
        properties = {};
      }
      if (children === undefined) {
        children = [];
      }
      return this.node[kind](properties, children);
    };
    return AbstractNodeFactory;
  }(Factory_js_1.AbstractFactory);
  exports.AbstractNodeFactory = AbstractNodeFactory;
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mstyle.js
var require_mstyle = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MmlMstyle = undefined;
  var MmlNode_js_1 = require_MmlNode();
  var Attributes_js_1 = require_Attributes();
  var MmlMstyle = function(_super) {
    __extends(MmlMstyle, _super);
    function MmlMstyle() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MmlMstyle.prototype, "kind", {
      get: function() {
        return "mstyle";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MmlMstyle.prototype, "notParent", {
      get: function() {
        return this.childNodes[0] && this.childNodes[0].childNodes.length === 1;
      },
      enumerable: false,
      configurable: true
    });
    MmlMstyle.prototype.setChildInheritedAttributes = function(attributes, display, level, prime) {
      var scriptlevel = this.attributes.getExplicit("scriptlevel");
      if (scriptlevel != null) {
        scriptlevel = scriptlevel.toString();
        if (scriptlevel.match(/^\s*[-+]/)) {
          level += parseInt(scriptlevel);
        } else {
          level = parseInt(scriptlevel);
        }
        prime = false;
      }
      var displaystyle = this.attributes.getExplicit("displaystyle");
      if (displaystyle != null) {
        display = displaystyle === true;
        prime = false;
      }
      var cramped = this.attributes.getExplicit("data-cramped");
      if (cramped != null) {
        prime = cramped;
      }
      attributes = this.addInheritedAttributes(attributes, this.attributes.getAllAttributes());
      this.childNodes[0].setInheritedAttributes(attributes, display, level, prime);
    };
    MmlMstyle.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlLayoutNode.defaults), { scriptlevel: Attributes_js_1.INHERIT, displaystyle: Attributes_js_1.INHERIT, scriptsizemultiplier: 1 / Math.sqrt(2), scriptminsize: "8px", mathbackground: Attributes_js_1.INHERIT, mathcolor: Attributes_js_1.INHERIT, dir: Attributes_js_1.INHERIT, infixlinebreakstyle: "before" });
    return MmlMstyle;
  }(MmlNode_js_1.AbstractMmlLayoutNode);
  exports.MmlMstyle = MmlMstyle;
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/maligngroup.js
var require_maligngroup = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MmlMaligngroup = undefined;
  var MmlNode_js_1 = require_MmlNode();
  var Attributes_js_1 = require_Attributes();
  var MmlMaligngroup = function(_super) {
    __extends(MmlMaligngroup, _super);
    function MmlMaligngroup() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MmlMaligngroup.prototype, "kind", {
      get: function() {
        return "maligngroup";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MmlMaligngroup.prototype, "isSpacelike", {
      get: function() {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    MmlMaligngroup.prototype.setChildInheritedAttributes = function(attributes, display, level, prime) {
      attributes = this.addInheritedAttributes(attributes, this.attributes.getAllAttributes());
      _super.prototype.setChildInheritedAttributes.call(this, attributes, display, level, prime);
    };
    MmlMaligngroup.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlLayoutNode.defaults), { groupalign: Attributes_js_1.INHERIT });
    return MmlMaligngroup;
  }(MmlNode_js_1.AbstractMmlLayoutNode);
  exports.MmlMaligngroup = MmlMaligngroup;
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/malignmark.js
var require_malignmark = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MmlMalignmark = undefined;
  var MmlNode_js_1 = require_MmlNode();
  var MmlMalignmark = function(_super) {
    __extends(MmlMalignmark, _super);
    function MmlMalignmark() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MmlMalignmark.prototype, "kind", {
      get: function() {
        return "malignmark";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MmlMalignmark.prototype, "arity", {
      get: function() {
        return 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MmlMalignmark.prototype, "isSpacelike", {
      get: function() {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    MmlMalignmark.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlNode.defaults), { edge: "left" });
    return MmlMalignmark;
  }(MmlNode_js_1.AbstractMmlNode);
  exports.MmlMalignmark = MmlMalignmark;
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mathchoice.js
var require_mathchoice = __commonJS(function(exports) {
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
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MathChoice = undefined;
  var MmlNode_js_1 = require_MmlNode();
  var MathChoice = function(_super) {
    __extends(MathChoice, _super);
    function MathChoice() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MathChoice.prototype, "kind", {
      get: function() {
        return "MathChoice";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MathChoice.prototype, "arity", {
      get: function() {
        return 4;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MathChoice.prototype, "notParent", {
      get: function() {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    MathChoice.prototype.setInheritedAttributes = function(attributes, display, level, prime) {
      var selection = display ? 0 : Math.max(0, Math.min(level, 2)) + 1;
      var child = this.childNodes[selection] || this.factory.create("mrow");
      this.parent.replaceChild(child, this);
      child.setInheritedAttributes(attributes, display, level, prime);
    };
    MathChoice.defaults = __assign({}, MmlNode_js_1.AbstractMmlBaseNode.defaults);
    return MathChoice;
  }(MmlNode_js_1.AbstractMmlBaseNode);
  exports.MathChoice = MathChoice;
});

// node_modules/mathjax-full/js/core/MmlTree/MML.js
var require_MML = __commonJS(function(exports) {
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MML = undefined;
  var MmlNode_js_1 = require_MmlNode();
  var math_js_1 = require_math2();
  var mi_js_1 = require_mi2();
  var mn_js_1 = require_mn2();
  var mo_js_1 = require_mo2();
  var mtext_js_1 = require_mtext2();
  var mspace_js_1 = require_mspace2();
  var ms_js_1 = require_ms2();
  var mrow_js_1 = require_mrow2();
  var mfrac_js_1 = require_mfrac2();
  var msqrt_js_1 = require_msqrt2();
  var mroot_js_1 = require_mroot2();
  var mstyle_js_1 = require_mstyle();
  var merror_js_1 = require_merror2();
  var mpadded_js_1 = require_mpadded2();
  var mphantom_js_1 = require_mphantom2();
  var mfenced_js_1 = require_mfenced2();
  var menclose_js_1 = require_menclose2();
  var maction_js_1 = require_maction2();
  var msubsup_js_1 = require_msubsup2();
  var munderover_js_1 = require_munderover2();
  var mmultiscripts_js_1 = require_mmultiscripts2();
  var mtable_js_1 = require_mtable2();
  var mtr_js_1 = require_mtr2();
  var mtd_js_1 = require_mtd2();
  var maligngroup_js_1 = require_maligngroup();
  var malignmark_js_1 = require_malignmark();
  var mglyph_js_1 = require_mglyph2();
  var semantics_js_1 = require_semantics2();
  var TeXAtom_js_1 = require_TeXAtom2();
  var mathchoice_js_1 = require_mathchoice();
  exports.MML = (_a = {}, _a[math_js_1.MmlMath.prototype.kind] = math_js_1.MmlMath, _a[mi_js_1.MmlMi.prototype.kind] = mi_js_1.MmlMi, _a[mn_js_1.MmlMn.prototype.kind] = mn_js_1.MmlMn, _a[mo_js_1.MmlMo.prototype.kind] = mo_js_1.MmlMo, _a[mtext_js_1.MmlMtext.prototype.kind] = mtext_js_1.MmlMtext, _a[mspace_js_1.MmlMspace.prototype.kind] = mspace_js_1.MmlMspace, _a[ms_js_1.MmlMs.prototype.kind] = ms_js_1.MmlMs, _a[mrow_js_1.MmlMrow.prototype.kind] = mrow_js_1.MmlMrow, _a[mrow_js_1.MmlInferredMrow.prototype.kind] = mrow_js_1.MmlInferredMrow, _a[mfrac_js_1.MmlMfrac.prototype.kind] = mfrac_js_1.MmlMfrac, _a[msqrt_js_1.MmlMsqrt.prototype.kind] = msqrt_js_1.MmlMsqrt, _a[mroot_js_1.MmlMroot.prototype.kind] = mroot_js_1.MmlMroot, _a[mstyle_js_1.MmlMstyle.prototype.kind] = mstyle_js_1.MmlMstyle, _a[merror_js_1.MmlMerror.prototype.kind] = merror_js_1.MmlMerror, _a[mpadded_js_1.MmlMpadded.prototype.kind] = mpadded_js_1.MmlMpadded, _a[mphantom_js_1.MmlMphantom.prototype.kind] = mphantom_js_1.MmlMphantom, _a[mfenced_js_1.MmlMfenced.prototype.kind] = mfenced_js_1.MmlMfenced, _a[menclose_js_1.MmlMenclose.prototype.kind] = menclose_js_1.MmlMenclose, _a[maction_js_1.MmlMaction.prototype.kind] = maction_js_1.MmlMaction, _a[msubsup_js_1.MmlMsub.prototype.kind] = msubsup_js_1.MmlMsub, _a[msubsup_js_1.MmlMsup.prototype.kind] = msubsup_js_1.MmlMsup, _a[msubsup_js_1.MmlMsubsup.prototype.kind] = msubsup_js_1.MmlMsubsup, _a[munderover_js_1.MmlMunder.prototype.kind] = munderover_js_1.MmlMunder, _a[munderover_js_1.MmlMover.prototype.kind] = munderover_js_1.MmlMover, _a[munderover_js_1.MmlMunderover.prototype.kind] = munderover_js_1.MmlMunderover, _a[mmultiscripts_js_1.MmlMmultiscripts.prototype.kind] = mmultiscripts_js_1.MmlMmultiscripts, _a[mmultiscripts_js_1.MmlMprescripts.prototype.kind] = mmultiscripts_js_1.MmlMprescripts, _a[mmultiscripts_js_1.MmlNone.prototype.kind] = mmultiscripts_js_1.MmlNone, _a[mtable_js_1.MmlMtable.prototype.kind] = mtable_js_1.MmlMtable, _a[mtr_js_1.MmlMlabeledtr.prototype.kind] = mtr_js_1.MmlMlabeledtr, _a[mtr_js_1.MmlMtr.prototype.kind] = mtr_js_1.MmlMtr, _a[mtd_js_1.MmlMtd.prototype.kind] = mtd_js_1.MmlMtd, _a[maligngroup_js_1.MmlMaligngroup.prototype.kind] = maligngroup_js_1.MmlMaligngroup, _a[malignmark_js_1.MmlMalignmark.prototype.kind] = malignmark_js_1.MmlMalignmark, _a[mglyph_js_1.MmlMglyph.prototype.kind] = mglyph_js_1.MmlMglyph, _a[semantics_js_1.MmlSemantics.prototype.kind] = semantics_js_1.MmlSemantics, _a[semantics_js_1.MmlAnnotation.prototype.kind] = semantics_js_1.MmlAnnotation, _a[semantics_js_1.MmlAnnotationXML.prototype.kind] = semantics_js_1.MmlAnnotationXML, _a[TeXAtom_js_1.TeXAtom.prototype.kind] = TeXAtom_js_1.TeXAtom, _a[mathchoice_js_1.MathChoice.prototype.kind] = mathchoice_js_1.MathChoice, _a[MmlNode_js_1.TextNode.prototype.kind] = MmlNode_js_1.TextNode, _a[MmlNode_js_1.XMLNode.prototype.kind] = MmlNode_js_1.XMLNode, _a);
});

// node_modules/mathjax-full/js/core/MmlTree/MmlFactory.js
var require_MmlFactory = __commonJS(function(exports) {
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
  exports.MmlFactory = undefined;
  var NodeFactory_js_1 = require_NodeFactory();
  var MML_js_1 = require_MML();
  var MmlFactory = function(_super) {
    __extends(MmlFactory, _super);
    function MmlFactory() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MmlFactory.prototype, "MML", {
      get: function() {
        return this.node;
      },
      enumerable: false,
      configurable: true
    });
    MmlFactory.defaultNodes = MML_js_1.MML;
    return MmlFactory;
  }(NodeFactory_js_1.AbstractNodeFactory);
  exports.MmlFactory = MmlFactory;
});

export { require_MmlFactory };
