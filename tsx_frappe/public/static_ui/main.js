function Ib(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var iy = { exports: {} }, uv = {}, ly = { exports: {} }, Dt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cb;
function eD() {
  if (Cb) return Dt;
  Cb = 1;
  var g = Symbol.for("react.element"), x = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), J = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Z = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), oe = Symbol.iterator;
  function W(O) {
    return O === null || typeof O != "object" ? null : (O = oe && O[oe] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var ye = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, X = Object.assign, ee = {};
  function de(O, K, Fe) {
    this.props = O, this.context = K, this.refs = ee, this.updater = Fe || ye;
  }
  de.prototype.isReactComponent = {}, de.prototype.setState = function(O, K) {
    if (typeof O != "object" && typeof O != "function" && O != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, O, K, "setState");
  }, de.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function nt() {
  }
  nt.prototype = de.prototype;
  function qe(O, K, Fe) {
    this.props = O, this.context = K, this.refs = ee, this.updater = Fe || ye;
  }
  var We = qe.prototype = new nt();
  We.constructor = qe, X(We, de.prototype), We.isPureReactComponent = !0;
  var ze = Array.isArray, Rt = Object.prototype.hasOwnProperty, Ne = { current: null }, dt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ie(O, K, Fe) {
    var Ke, Ze = {}, ht = null, Nt = null;
    if (K != null) for (Ke in K.ref !== void 0 && (Nt = K.ref), K.key !== void 0 && (ht = "" + K.key), K) Rt.call(K, Ke) && !dt.hasOwnProperty(Ke) && (Ze[Ke] = K[Ke]);
    var rt = arguments.length - 2;
    if (rt === 1) Ze.children = Fe;
    else if (1 < rt) {
      for (var _t = Array(rt), Wt = 0; Wt < rt; Wt++) _t[Wt] = arguments[Wt + 2];
      Ze.children = _t;
    }
    if (O && O.defaultProps) for (Ke in rt = O.defaultProps, rt) Ze[Ke] === void 0 && (Ze[Ke] = rt[Ke]);
    return { $$typeof: g, type: O, key: ht, ref: Nt, props: Ze, _owner: Ne.current };
  }
  function cn(O, K) {
    return { $$typeof: g, type: O.type, key: K, ref: O.ref, props: O.props, _owner: O._owner };
  }
  function Ot(O) {
    return typeof O == "object" && O !== null && O.$$typeof === g;
  }
  function Kt(O) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(Fe) {
      return K[Fe];
    });
  }
  var Be = /\/+/g;
  function gt(O, K) {
    return typeof O == "object" && O !== null && O.key != null ? Kt("" + O.key) : K.toString(36);
  }
  function Ae(O, K, Fe, Ke, Ze) {
    var ht = typeof O;
    (ht === "undefined" || ht === "boolean") && (O = null);
    var Nt = !1;
    if (O === null) Nt = !0;
    else switch (ht) {
      case "string":
      case "number":
        Nt = !0;
        break;
      case "object":
        switch (O.$$typeof) {
          case g:
          case x:
            Nt = !0;
        }
    }
    if (Nt) return Nt = O, Ze = Ze(Nt), O = Ke === "" ? "." + gt(Nt, 0) : Ke, ze(Ze) ? (Fe = "", O != null && (Fe = O.replace(Be, "$&/") + "/"), Ae(Ze, K, Fe, "", function(Wt) {
      return Wt;
    })) : Ze != null && (Ot(Ze) && (Ze = cn(Ze, Fe + (!Ze.key || Nt && Nt.key === Ze.key ? "" : ("" + Ze.key).replace(Be, "$&/") + "/") + O)), K.push(Ze)), 1;
    if (Nt = 0, Ke = Ke === "" ? "." : Ke + ":", ze(O)) for (var rt = 0; rt < O.length; rt++) {
      ht = O[rt];
      var _t = Ke + gt(ht, rt);
      Nt += Ae(ht, K, Fe, _t, Ze);
    }
    else if (_t = W(O), typeof _t == "function") for (O = _t.call(O), rt = 0; !(ht = O.next()).done; ) ht = ht.value, _t = Ke + gt(ht, rt++), Nt += Ae(ht, K, Fe, _t, Ze);
    else if (ht === "object") throw K = String(O), Error("Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead.");
    return Nt;
  }
  function Ut(O, K, Fe) {
    if (O == null) return O;
    var Ke = [], Ze = 0;
    return Ae(O, Ke, "", "", function(ht) {
      return K.call(Fe, ht, Ze++);
    }), Ke;
  }
  function ct(O) {
    if (O._status === -1) {
      var K = O._result;
      K = K(), K.then(function(Fe) {
        (O._status === 0 || O._status === -1) && (O._status = 1, O._result = Fe);
      }, function(Fe) {
        (O._status === 0 || O._status === -1) && (O._status = 2, O._result = Fe);
      }), O._status === -1 && (O._status = 0, O._result = K);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var ot = { current: null }, q = { transition: null }, xe = { ReactCurrentDispatcher: ot, ReactCurrentBatchConfig: q, ReactCurrentOwner: Ne };
  function pe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Dt.Children = { map: Ut, forEach: function(O, K, Fe) {
    Ut(O, function() {
      K.apply(this, arguments);
    }, Fe);
  }, count: function(O) {
    var K = 0;
    return Ut(O, function() {
      K++;
    }), K;
  }, toArray: function(O) {
    return Ut(O, function(K) {
      return K;
    }) || [];
  }, only: function(O) {
    if (!Ot(O)) throw Error("React.Children.only expected to receive a single React element child.");
    return O;
  } }, Dt.Component = de, Dt.Fragment = E, Dt.Profiler = P, Dt.PureComponent = qe, Dt.StrictMode = N, Dt.Suspense = ue, Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xe, Dt.act = pe, Dt.cloneElement = function(O, K, Fe) {
    if (O == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
    var Ke = X({}, O.props), Ze = O.key, ht = O.ref, Nt = O._owner;
    if (K != null) {
      if (K.ref !== void 0 && (ht = K.ref, Nt = Ne.current), K.key !== void 0 && (Ze = "" + K.key), O.type && O.type.defaultProps) var rt = O.type.defaultProps;
      for (_t in K) Rt.call(K, _t) && !dt.hasOwnProperty(_t) && (Ke[_t] = K[_t] === void 0 && rt !== void 0 ? rt[_t] : K[_t]);
    }
    var _t = arguments.length - 2;
    if (_t === 1) Ke.children = Fe;
    else if (1 < _t) {
      rt = Array(_t);
      for (var Wt = 0; Wt < _t; Wt++) rt[Wt] = arguments[Wt + 2];
      Ke.children = rt;
    }
    return { $$typeof: g, type: O.type, key: Ze, ref: ht, props: Ke, _owner: Nt };
  }, Dt.createContext = function(O) {
    return O = { $$typeof: J, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, O.Provider = { $$typeof: L, _context: O }, O.Consumer = O;
  }, Dt.createElement = Ie, Dt.createFactory = function(O) {
    var K = Ie.bind(null, O);
    return K.type = O, K;
  }, Dt.createRef = function() {
    return { current: null };
  }, Dt.forwardRef = function(O) {
    return { $$typeof: y, render: O };
  }, Dt.isValidElement = Ot, Dt.lazy = function(O) {
    return { $$typeof: te, _payload: { _status: -1, _result: O }, _init: ct };
  }, Dt.memo = function(O, K) {
    return { $$typeof: Z, type: O, compare: K === void 0 ? null : K };
  }, Dt.startTransition = function(O) {
    var K = q.transition;
    q.transition = {};
    try {
      O();
    } finally {
      q.transition = K;
    }
  }, Dt.unstable_act = pe, Dt.useCallback = function(O, K) {
    return ot.current.useCallback(O, K);
  }, Dt.useContext = function(O) {
    return ot.current.useContext(O);
  }, Dt.useDebugValue = function() {
  }, Dt.useDeferredValue = function(O) {
    return ot.current.useDeferredValue(O);
  }, Dt.useEffect = function(O, K) {
    return ot.current.useEffect(O, K);
  }, Dt.useId = function() {
    return ot.current.useId();
  }, Dt.useImperativeHandle = function(O, K, Fe) {
    return ot.current.useImperativeHandle(O, K, Fe);
  }, Dt.useInsertionEffect = function(O, K) {
    return ot.current.useInsertionEffect(O, K);
  }, Dt.useLayoutEffect = function(O, K) {
    return ot.current.useLayoutEffect(O, K);
  }, Dt.useMemo = function(O, K) {
    return ot.current.useMemo(O, K);
  }, Dt.useReducer = function(O, K, Fe) {
    return ot.current.useReducer(O, K, Fe);
  }, Dt.useRef = function(O) {
    return ot.current.useRef(O);
  }, Dt.useState = function(O) {
    return ot.current.useState(O);
  }, Dt.useSyncExternalStore = function(O, K, Fe) {
    return ot.current.useSyncExternalStore(O, K, Fe);
  }, Dt.useTransition = function() {
    return ot.current.useTransition();
  }, Dt.version = "18.3.1", Dt;
}
var dv = { exports: {} };
dv.exports;
var xb;
function tD() {
  return xb || (xb = 1, function(g, x) {
    var E = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    E.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var N = "18.3.1", P = Symbol.for("react.element"), L = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), ue = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), te = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), de = Symbol.for("react.offscreen"), nt = Symbol.iterator, qe = "@@iterator";
      function We(h) {
        if (h === null || typeof h != "object")
          return null;
        var w = nt && h[nt] || h[qe];
        return typeof w == "function" ? w : null;
      }
      var ze = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Rt = {
        transition: null
      }, Ne = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, dt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ie = {}, cn = null;
      function Ot(h) {
        cn = h;
      }
      Ie.setExtraStackFrame = function(h) {
        cn = h;
      }, Ie.getCurrentStack = null, Ie.getStackAddendum = function() {
        var h = "";
        cn && (h += cn);
        var w = Ie.getCurrentStack;
        return w && (h += w() || ""), h;
      };
      var Kt = !1, Be = !1, gt = !1, Ae = !1, Ut = !1, ct = {
        ReactCurrentDispatcher: ze,
        ReactCurrentBatchConfig: Rt,
        ReactCurrentOwner: dt
      };
      ct.ReactDebugCurrentFrame = Ie, ct.ReactCurrentActQueue = Ne;
      function ot(h) {
        {
          for (var w = arguments.length, j = new Array(w > 1 ? w - 1 : 0), $ = 1; $ < w; $++)
            j[$ - 1] = arguments[$];
          xe("warn", h, j);
        }
      }
      function q(h) {
        {
          for (var w = arguments.length, j = new Array(w > 1 ? w - 1 : 0), $ = 1; $ < w; $++)
            j[$ - 1] = arguments[$];
          xe("error", h, j);
        }
      }
      function xe(h, w, j) {
        {
          var $ = ct.ReactDebugCurrentFrame, ce = $.getStackAddendum();
          ce !== "" && (w += "%s", j = j.concat([ce]));
          var ke = j.map(function(be) {
            return String(be);
          });
          ke.unshift("Warning: " + w), Function.prototype.apply.call(console[h], console, ke);
        }
      }
      var pe = {};
      function O(h, w) {
        {
          var j = h.constructor, $ = j && (j.displayName || j.name) || "ReactClass", ce = $ + "." + w;
          if (pe[ce])
            return;
          q("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, $), pe[ce] = !0;
        }
      }
      var K = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, w, j) {
          O(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, w, j, $) {
          O(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, w, j, $) {
          O(h, "setState");
        }
      }, Fe = Object.assign, Ke = {};
      Object.freeze(Ke);
      function Ze(h, w, j) {
        this.props = h, this.context = w, this.refs = Ke, this.updater = j || K;
      }
      Ze.prototype.isReactComponent = {}, Ze.prototype.setState = function(h, w) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, w, "setState");
      }, Ze.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ht = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Nt = function(h, w) {
          Object.defineProperty(Ze.prototype, h, {
            get: function() {
              ot("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var rt in ht)
          ht.hasOwnProperty(rt) && Nt(rt, ht[rt]);
      }
      function _t() {
      }
      _t.prototype = Ze.prototype;
      function Wt(h, w, j) {
        this.props = h, this.context = w, this.refs = Ke, this.updater = j || K;
      }
      var zn = Wt.prototype = new _t();
      zn.constructor = Wt, Fe(zn, Ze.prototype), zn.isPureReactComponent = !0;
      function Xn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var ur = Array.isArray;
      function An(h) {
        return ur(h);
      }
      function wr(h) {
        {
          var w = typeof Symbol == "function" && Symbol.toStringTag, j = w && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return j;
        }
      }
      function In(h) {
        try {
          return Un(h), !1;
        } catch {
          return !0;
        }
      }
      function Un(h) {
        return "" + h;
      }
      function ha(h) {
        if (In(h))
          return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wr(h)), Un(h);
      }
      function Xa(h, w, j) {
        var $ = h.displayName;
        if ($)
          return $;
        var ce = w.displayName || w.name || "";
        return ce !== "" ? j + "(" + ce + ")" : j;
      }
      function Mr(h) {
        return h.displayName || "Context";
      }
      function Yn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case J:
            return "Fragment";
          case L:
            return "Portal";
          case ue:
            return "Profiler";
          case y:
            return "StrictMode";
          case W:
            return "Suspense";
          case ye:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case te:
              var w = h;
              return Mr(w) + ".Consumer";
            case Z:
              var j = h;
              return Mr(j._context) + ".Provider";
            case oe:
              return Xa(h, h.render, "ForwardRef");
            case X:
              var $ = h.displayName || null;
              return $ !== null ? $ : Yn(h.type) || "Memo";
            case ee: {
              var ce = h, ke = ce._payload, be = ce._init;
              try {
                return Yn(be(ke));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Jn = Object.prototype.hasOwnProperty, Zn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rr, Ja, jn;
      jn = {};
      function sr(h) {
        if (Jn.call(h, "ref")) {
          var w = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function qr(h) {
        if (Jn.call(h, "key")) {
          var w = Object.getOwnPropertyDescriptor(h, "key").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function zi(h, w) {
        var j = function() {
          Rr || (Rr = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        j.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: j,
          configurable: !0
        });
      }
      function ma(h, w) {
        var j = function() {
          Ja || (Ja = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        j.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: j,
          configurable: !0
        });
      }
      function fe(h) {
        if (typeof h.ref == "string" && dt.current && h.__self && dt.current.stateNode !== h.__self) {
          var w = Yn(dt.current.type);
          jn[w] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, h.ref), jn[w] = !0);
        }
      }
      var Ve = function(h, w, j, $, ce, ke, be) {
        var Ge = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: P,
          // Built-in properties that belong on the element
          type: h,
          key: w,
          ref: j,
          props: be,
          // Record the component responsible for creating this element.
          _owner: ke
        };
        return Ge._store = {}, Object.defineProperty(Ge._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ge, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: $
        }), Object.defineProperty(Ge, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ce
        }), Object.freeze && (Object.freeze(Ge.props), Object.freeze(Ge)), Ge;
      };
      function ft(h, w, j) {
        var $, ce = {}, ke = null, be = null, Ge = null, vt = null;
        if (w != null) {
          sr(w) && (be = w.ref, fe(w)), qr(w) && (ha(w.key), ke = "" + w.key), Ge = w.__self === void 0 ? null : w.__self, vt = w.__source === void 0 ? null : w.__source;
          for ($ in w)
            Jn.call(w, $) && !Zn.hasOwnProperty($) && (ce[$] = w[$]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          ce.children = j;
        else if ($t > 1) {
          for (var Zt = Array($t), en = 0; en < $t; en++)
            Zt[en] = arguments[en + 2];
          Object.freeze && Object.freeze(Zt), ce.children = Zt;
        }
        if (h && h.defaultProps) {
          var ut = h.defaultProps;
          for ($ in ut)
            ce[$] === void 0 && (ce[$] = ut[$]);
        }
        if (ke || be) {
          var an = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ke && zi(ce, an), be && ma(ce, an);
        }
        return Ve(h, ke, be, Ge, vt, dt.current, ce);
      }
      function Vt(h, w) {
        var j = Ve(h.type, w, h.ref, h._self, h._source, h._owner, h.props);
        return j;
      }
      function fn(h, w, j) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var $, ce = Fe({}, h.props), ke = h.key, be = h.ref, Ge = h._self, vt = h._source, $t = h._owner;
        if (w != null) {
          sr(w) && (be = w.ref, $t = dt.current), qr(w) && (ha(w.key), ke = "" + w.key);
          var Zt;
          h.type && h.type.defaultProps && (Zt = h.type.defaultProps);
          for ($ in w)
            Jn.call(w, $) && !Zn.hasOwnProperty($) && (w[$] === void 0 && Zt !== void 0 ? ce[$] = Zt[$] : ce[$] = w[$]);
        }
        var en = arguments.length - 2;
        if (en === 1)
          ce.children = j;
        else if (en > 1) {
          for (var ut = Array(en), an = 0; an < en; an++)
            ut[an] = arguments[an + 2];
          ce.children = ut;
        }
        return Ve(h.type, ke, be, Ge, vt, $t, ce);
      }
      function dn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === P;
      }
      var pn = ".", er = ":";
      function un(h) {
        var w = /[=:]/g, j = {
          "=": "=0",
          ":": "=2"
        }, $ = h.replace(w, function(ce) {
          return j[ce];
        });
        return "$" + $;
      }
      var Xt = !1, Pt = /\/+/g;
      function ya(h) {
        return h.replace(Pt, "$&/");
      }
      function Na(h, w) {
        return typeof h == "object" && h !== null && h.key != null ? (ha(h.key), un("" + h.key)) : w.toString(36);
      }
      function La(h, w, j, $, ce) {
        var ke = typeof h;
        (ke === "undefined" || ke === "boolean") && (h = null);
        var be = !1;
        if (h === null)
          be = !0;
        else
          switch (ke) {
            case "string":
            case "number":
              be = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case P:
                case L:
                  be = !0;
              }
          }
        if (be) {
          var Ge = h, vt = ce(Ge), $t = $ === "" ? pn + Na(Ge, 0) : $;
          if (An(vt)) {
            var Zt = "";
            $t != null && (Zt = ya($t) + "/"), La(vt, w, Zt, "", function(sd) {
              return sd;
            });
          } else vt != null && (dn(vt) && (vt.key && (!Ge || Ge.key !== vt.key) && ha(vt.key), vt = Vt(
            vt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            j + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (vt.key && (!Ge || Ge.key !== vt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ya("" + vt.key) + "/"
            ) : "") + $t
          )), w.push(vt));
          return 1;
        }
        var en, ut, an = 0, kn = $ === "" ? pn : $ + er;
        if (An(h))
          for (var ro = 0; ro < h.length; ro++)
            en = h[ro], ut = kn + Na(en, ro), an += La(en, w, j, ut, ce);
        else {
          var ts = We(h);
          if (typeof ts == "function") {
            var Ii = h;
            ts === Ii.entries && (Xt || ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Xt = !0);
            for (var ao = ts.call(Ii), ns, ud = 0; !(ns = ao.next()).done; )
              en = ns.value, ut = kn + Na(en, ud++), an += La(en, w, j, ut, ce);
          } else if (ke === "object") {
            var gc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (gc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : gc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return an;
      }
      function Ai(h, w, j) {
        if (h == null)
          return h;
        var $ = [], ce = 0;
        return La(h, $, "", "", function(ke) {
          return w.call(j, ke, ce++);
        }), $;
      }
      function ql(h) {
        var w = 0;
        return Ai(h, function() {
          w++;
        }), w;
      }
      function Kl(h, w, j) {
        Ai(h, function() {
          w.apply(this, arguments);
        }, j);
      }
      function Ui(h) {
        return Ai(h, function(w) {
          return w;
        }) || [];
      }
      function Xl(h) {
        if (!dn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function di(h) {
        var w = {
          $$typeof: te,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        w.Provider = {
          $$typeof: Z,
          _context: w
        };
        var j = !1, $ = !1, ce = !1;
        {
          var ke = {
            $$typeof: te,
            _context: w
          };
          Object.defineProperties(ke, {
            Provider: {
              get: function() {
                return $ || ($ = !0, q("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(be) {
                w.Provider = be;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(be) {
                w._currentValue = be;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(be) {
                w._currentValue2 = be;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(be) {
                w._threadCount = be;
              }
            },
            Consumer: {
              get: function() {
                return j || (j = !0, q("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(be) {
                ce || (ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", be), ce = !0);
              }
            }
          }), w.Consumer = ke;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var ga = -1, cr = 0, Sa = 1, Kr = 2;
      function pi(h) {
        if (h._status === ga) {
          var w = h._result, j = w();
          if (j.then(function(ke) {
            if (h._status === cr || h._status === ga) {
              var be = h;
              be._status = Sa, be._result = ke;
            }
          }, function(ke) {
            if (h._status === cr || h._status === ga) {
              var be = h;
              be._status = Kr, be._result = ke;
            }
          }), h._status === ga) {
            var $ = h;
            $._status = cr, $._result = j;
          }
        }
        if (h._status === Sa) {
          var ce = h._result;
          return ce === void 0 && q(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ce), "default" in ce || q(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ce), ce.default;
        } else
          throw h._result;
      }
      function vi(h) {
        var w = {
          // We use these fields to store the result.
          _status: ga,
          _result: h
        }, j = {
          $$typeof: ee,
          _payload: w,
          _init: pi
        };
        {
          var $, ce;
          Object.defineProperties(j, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return $;
              },
              set: function(ke) {
                q("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), $ = ke, Object.defineProperty(j, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ce;
              },
              set: function(ke) {
                q("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ce = ke, Object.defineProperty(j, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return j;
      }
      function ji(h) {
        h != null && h.$$typeof === X ? q("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? q("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && q("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && q("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: oe,
          render: h
        };
        {
          var j;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function($) {
              j = $, !h.name && !h.displayName && (h.displayName = $);
            }
          });
        }
        return w;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function ne(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === J || h === ue || Ut || h === y || h === W || h === ye || Ae || h === de || Kt || Be || gt || typeof h == "object" && h !== null && (h.$$typeof === ee || h.$$typeof === X || h.$$typeof === Z || h.$$typeof === te || h.$$typeof === oe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function me(h, w) {
        ne(h) || q("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var j = {
          $$typeof: X,
          type: h,
          compare: w === void 0 ? null : w
        };
        {
          var $;
          Object.defineProperty(j, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return $;
            },
            set: function(ce) {
              $ = ce, !h.name && !h.displayName && (h.displayName = ce);
            }
          });
        }
        return j;
      }
      function Se() {
        var h = ze.current;
        return h === null && q(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function St(h) {
        var w = Se();
        if (h._context !== void 0) {
          var j = h._context;
          j.Consumer === h ? q("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : j.Provider === h && q("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(h);
      }
      function et(h) {
        var w = Se();
        return w.useState(h);
      }
      function xt(h, w, j) {
        var $ = Se();
        return $.useReducer(h, w, j);
      }
      function pt(h) {
        var w = Se();
        return w.useRef(h);
      }
      function _n(h, w) {
        var j = Se();
        return j.useEffect(h, w);
      }
      function sn(h, w) {
        var j = Se();
        return j.useInsertionEffect(h, w);
      }
      function vn(h, w) {
        var j = Se();
        return j.useLayoutEffect(h, w);
      }
      function Tr(h, w) {
        var j = Se();
        return j.useCallback(h, w);
      }
      function Za(h, w) {
        var j = Se();
        return j.useMemo(h, w);
      }
      function Bt(h, w, j) {
        var $ = Se();
        return $.useImperativeHandle(h, w, j);
      }
      function yn(h, w) {
        {
          var j = Se();
          return j.useDebugValue(h, w);
        }
      }
      function it() {
        var h = Se();
        return h.useTransition();
      }
      function hi(h) {
        var w = Se();
        return w.useDeferredValue(h);
      }
      function Fi() {
        var h = Se();
        return h.useId();
      }
      function vc(h, w, j) {
        var $ = Se();
        return $.useSyncExternalStore(h, w, j);
      }
      var Hi = 0, cl, Xr, qu, zr, Ku, hc, mc;
      function Vi() {
      }
      Vi.__reactDisabledLog = !0;
      function fl() {
        {
          if (Hi === 0) {
            cl = console.log, Xr = console.info, qu = console.warn, zr = console.error, Ku = console.group, hc = console.groupCollapsed, mc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Vi,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Hi++;
        }
      }
      function Jr() {
        {
          if (Hi--, Hi === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Fe({}, h, {
                value: cl
              }),
              info: Fe({}, h, {
                value: Xr
              }),
              warn: Fe({}, h, {
                value: qu
              }),
              error: Fe({}, h, {
                value: zr
              }),
              group: Fe({}, h, {
                value: Ku
              }),
              groupCollapsed: Fe({}, h, {
                value: hc
              }),
              groupEnd: Fe({}, h, {
                value: mc
              })
            });
          }
          Hi < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var mi = ct.ReactCurrentDispatcher, dl;
      function Io(h, w, j) {
        {
          if (dl === void 0)
            try {
              throw Error();
            } catch (ce) {
              var $ = ce.stack.trim().match(/\n( *(at )?)/);
              dl = $ && $[1] || "";
            }
          return `
` + dl + h;
        }
      }
      var Pi = !1, Jl;
      {
        var Zl = typeof WeakMap == "function" ? WeakMap : Map;
        Jl = new Zl();
      }
      function pl(h, w) {
        if (!h || Pi)
          return "";
        {
          var j = Jl.get(h);
          if (j !== void 0)
            return j;
        }
        var $;
        Pi = !0;
        var ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ke;
        ke = mi.current, mi.current = null, fl();
        try {
          if (w) {
            var be = function() {
              throw Error();
            };
            if (Object.defineProperty(be.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(be, []);
              } catch (kn) {
                $ = kn;
              }
              Reflect.construct(h, [], be);
            } else {
              try {
                be.call();
              } catch (kn) {
                $ = kn;
              }
              h.call(be.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (kn) {
              $ = kn;
            }
            h();
          }
        } catch (kn) {
          if (kn && $ && typeof kn.stack == "string") {
            for (var Ge = kn.stack.split(`
`), vt = $.stack.split(`
`), $t = Ge.length - 1, Zt = vt.length - 1; $t >= 1 && Zt >= 0 && Ge[$t] !== vt[Zt]; )
              Zt--;
            for (; $t >= 1 && Zt >= 0; $t--, Zt--)
              if (Ge[$t] !== vt[Zt]) {
                if ($t !== 1 || Zt !== 1)
                  do
                    if ($t--, Zt--, Zt < 0 || Ge[$t] !== vt[Zt]) {
                      var en = `
` + Ge[$t].replace(" at new ", " at ");
                      return h.displayName && en.includes("<anonymous>") && (en = en.replace("<anonymous>", h.displayName)), typeof h == "function" && Jl.set(h, en), en;
                    }
                  while ($t >= 1 && Zt >= 0);
                break;
              }
          }
        } finally {
          Pi = !1, mi.current = ke, Jr(), Error.prepareStackTrace = ce;
        }
        var ut = h ? h.displayName || h.name : "", an = ut ? Io(ut) : "";
        return typeof h == "function" && Jl.set(h, an), an;
      }
      function Xu(h, w, j) {
        return pl(h, !1);
      }
      function Ju(h) {
        var w = h.prototype;
        return !!(w && w.isReactComponent);
      }
      function Lt(h, w, j) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return pl(h, Ju(h));
        if (typeof h == "string")
          return Io(h);
        switch (h) {
          case W:
            return Io("Suspense");
          case ye:
            return Io("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case oe:
              return Xu(h.render);
            case X:
              return Lt(h.type, w, j);
            case ee: {
              var $ = h, ce = $._payload, ke = $._init;
              try {
                return Lt(ke(ce), w, j);
              } catch {
              }
            }
          }
        return "";
      }
      var Zu = {}, Yo = ct.ReactDebugCurrentFrame;
      function Mt(h) {
        if (h) {
          var w = h._owner, j = Lt(h.type, h._source, w ? w.type : null);
          Yo.setExtraStackFrame(j);
        } else
          Yo.setExtraStackFrame(null);
      }
      function yc(h, w, j, $, ce) {
        {
          var ke = Function.call.bind(Jn);
          for (var be in h)
            if (ke(h, be)) {
              var Ge = void 0;
              try {
                if (typeof h[be] != "function") {
                  var vt = Error(($ || "React class") + ": " + j + " type `" + be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[be] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw vt.name = "Invariant Violation", vt;
                }
                Ge = h[be](w, be, $, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch ($t) {
                Ge = $t;
              }
              Ge && !(Ge instanceof Error) && (Mt(ce), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", j, be, typeof Ge), Mt(null)), Ge instanceof Error && !(Ge.message in Zu) && (Zu[Ge.message] = !0, Mt(ce), q("Failed %s type: %s", j, Ge.message), Mt(null));
            }
        }
      }
      function yi(h) {
        if (h) {
          var w = h._owner, j = Lt(h.type, h._source, w ? w.type : null);
          Ot(j);
        } else
          Ot(null);
      }
      var Xe;
      Xe = !1;
      function eo() {
        if (dt.current) {
          var h = Yn(dt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function tr(h) {
        if (h !== void 0) {
          var w = h.fileName.replace(/^.*[\\\/]/, ""), j = h.lineNumber;
          return `

Check your code at ` + w + ":" + j + ".";
        }
        return "";
      }
      function Zr(h) {
        return h != null ? tr(h.__source) : "";
      }
      var Ar = {};
      function gi(h) {
        var w = eo();
        if (!w) {
          var j = typeof h == "string" ? h : h.displayName || h.name;
          j && (w = `

Check the top-level render call using <` + j + ">.");
        }
        return w;
      }
      function bn(h, w) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var j = gi(w);
          if (!Ar[j]) {
            Ar[j] = !0;
            var $ = "";
            h && h._owner && h._owner !== dt.current && ($ = " It was passed a child from " + Yn(h._owner.type) + "."), yi(h), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, $), yi(null);
          }
        }
      }
      function Jt(h, w) {
        if (typeof h == "object") {
          if (An(h))
            for (var j = 0; j < h.length; j++) {
              var $ = h[j];
              dn($) && bn($, w);
            }
          else if (dn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ce = We(h);
            if (typeof ce == "function" && ce !== h.entries)
              for (var ke = ce.call(h), be; !(be = ke.next()).done; )
                dn(be.value) && bn(be.value, w);
          }
        }
      }
      function ei(h) {
        {
          var w = h.type;
          if (w == null || typeof w == "string")
            return;
          var j;
          if (typeof w == "function")
            j = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === oe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === X))
            j = w.propTypes;
          else
            return;
          if (j) {
            var $ = Yn(w);
            yc(j, h.props, "prop", $, h);
          } else if (w.PropTypes !== void 0 && !Xe) {
            Xe = !0;
            var ce = Yn(w);
            q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
          }
          typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ma(h) {
        {
          for (var w = Object.keys(h.props), j = 0; j < w.length; j++) {
            var $ = w[j];
            if ($ !== "children" && $ !== "key") {
              yi(h), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), yi(null);
              break;
            }
          }
          h.ref !== null && (yi(h), q("Invalid attribute `ref` supplied to `React.Fragment`."), yi(null));
        }
      }
      function _r(h, w, j) {
        var $ = ne(h);
        if (!$) {
          var ce = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ke = Zr(w);
          ke ? ce += ke : ce += eo();
          var be;
          h === null ? be = "null" : An(h) ? be = "array" : h !== void 0 && h.$$typeof === P ? (be = "<" + (Yn(h.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : be = typeof h, q("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, ce);
        }
        var Ge = ft.apply(this, arguments);
        if (Ge == null)
          return Ge;
        if ($)
          for (var vt = 2; vt < arguments.length; vt++)
            Jt(arguments[vt], h);
        return h === J ? Ma(Ge) : ei(Ge), Ge;
      }
      var Ur = !1;
      function od(h) {
        var w = _r.bind(null, h);
        return w.type = h, Ur || (Ur = !0, ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), w;
      }
      function Wo(h, w, j) {
        for (var $ = fn.apply(this, arguments), ce = 2; ce < arguments.length; ce++)
          Jt(arguments[ce], $.type);
        return ei($), $;
      }
      function to(h, w) {
        var j = Rt.transition;
        Rt.transition = {};
        var $ = Rt.transition;
        Rt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Rt.transition = j, j === null && $._updatedFibers) {
            var ce = $._updatedFibers.size;
            ce > 10 && ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), $._updatedFibers.clear();
          }
        }
      }
      var Go = !1, Qo = null;
      function no(h) {
        if (Qo === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), j = g && g[w];
            Qo = j.call(g, "timers").setImmediate;
          } catch {
            Qo = function(ce) {
              Go === !1 && (Go = !0, typeof MessageChannel > "u" && q("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ke = new MessageChannel();
              ke.port1.onmessage = ce, ke.port2.postMessage(void 0);
            };
          }
        return Qo(h);
      }
      var za = 0, Aa = !1;
      function vl(h) {
        {
          var w = za;
          za++, Ne.current === null && (Ne.current = []);
          var j = Ne.isBatchingLegacy, $;
          try {
            if (Ne.isBatchingLegacy = !0, $ = h(), !j && Ne.didScheduleLegacyUpdate) {
              var ce = Ne.current;
              ce !== null && (Ne.didScheduleLegacyUpdate = !1, $i(ce));
            }
          } catch (ut) {
            throw Bi(w), ut;
          } finally {
            Ne.isBatchingLegacy = j;
          }
          if ($ !== null && typeof $ == "object" && typeof $.then == "function") {
            var ke = $, be = !1, Ge = {
              then: function(ut, an) {
                be = !0, ke.then(function(kn) {
                  Bi(w), za === 0 ? qo(kn, ut, an) : ut(kn);
                }, function(kn) {
                  Bi(w), an(kn);
                });
              }
            };
            return !Aa && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              be || (Aa = !0, q("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ge;
          } else {
            var vt = $;
            if (Bi(w), za === 0) {
              var $t = Ne.current;
              $t !== null && ($i($t), Ne.current = null);
              var Zt = {
                then: function(ut, an) {
                  Ne.current === null ? (Ne.current = [], qo(vt, ut, an)) : ut(vt);
                }
              };
              return Zt;
            } else {
              var en = {
                then: function(ut, an) {
                  ut(vt);
                }
              };
              return en;
            }
          }
        }
      }
      function Bi(h) {
        h !== za - 1 && q("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), za = h;
      }
      function qo(h, w, j) {
        {
          var $ = Ne.current;
          if ($ !== null)
            try {
              $i($), no(function() {
                $.length === 0 ? (Ne.current = null, w(h)) : qo(h, w, j);
              });
            } catch (ce) {
              j(ce);
            }
          else
            w(h);
        }
      }
      var hl = !1;
      function $i(h) {
        if (!hl) {
          hl = !0;
          var w = 0;
          try {
            for (; w < h.length; w++) {
              var j = h[w];
              do
                j = j(!0);
              while (j !== null);
            }
            h.length = 0;
          } catch ($) {
            throw h = h.slice(w + 1), $;
          } finally {
            hl = !1;
          }
        }
      }
      var Ko = _r, es = Wo, Ua = od, Xo = {
        map: Ai,
        forEach: Kl,
        count: ql,
        toArray: Ui,
        only: Xl
      };
      x.Children = Xo, x.Component = Ze, x.Fragment = J, x.Profiler = ue, x.PureComponent = Wt, x.StrictMode = y, x.Suspense = W, x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ct, x.act = vl, x.cloneElement = es, x.createContext = di, x.createElement = Ko, x.createFactory = Ua, x.createRef = Xn, x.forwardRef = ji, x.isValidElement = dn, x.lazy = vi, x.memo = me, x.startTransition = to, x.unstable_act = vl, x.useCallback = Tr, x.useContext = St, x.useDebugValue = yn, x.useDeferredValue = hi, x.useEffect = _n, x.useId = Fi, x.useImperativeHandle = Bt, x.useInsertionEffect = sn, x.useLayoutEffect = vn, x.useMemo = Za, x.useReducer = xt, x.useRef = pt, x.useState = et, x.useSyncExternalStore = vc, x.useTransition = it, x.version = N, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(dv, dv.exports)), dv.exports;
}
var bb;
function pc() {
  if (bb) return ly.exports;
  bb = 1;
  var g = {};
  return g.NODE_ENV === "production" ? ly.exports = eD() : ly.exports = tD(), ly.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wb;
function nD() {
  if (wb) return uv;
  wb = 1;
  var g = pc(), x = Symbol.for("react.element"), E = Symbol.for("react.fragment"), N = Object.prototype.hasOwnProperty, P = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, L = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(y, ue, Z) {
    var te, oe = {}, W = null, ye = null;
    Z !== void 0 && (W = "" + Z), ue.key !== void 0 && (W = "" + ue.key), ue.ref !== void 0 && (ye = ue.ref);
    for (te in ue) N.call(ue, te) && !L.hasOwnProperty(te) && (oe[te] = ue[te]);
    if (y && y.defaultProps) for (te in ue = y.defaultProps, ue) oe[te] === void 0 && (oe[te] = ue[te]);
    return { $$typeof: x, type: y, key: W, ref: ye, props: oe, _owner: P.current };
  }
  return uv.Fragment = E, uv.jsx = J, uv.jsxs = J, uv;
}
var sv = {}, Rb;
function rD() {
  if (Rb) return sv;
  Rb = 1;
  var g = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return g.NODE_ENV !== "production" && function() {
    var x = pc(), E = Symbol.for("react.element"), N = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), ue = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), ye = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), ee = Symbol.iterator, de = "@@iterator";
    function nt(R) {
      if (R === null || typeof R != "object")
        return null;
      var ne = ee && R[ee] || R[de];
      return typeof ne == "function" ? ne : null;
    }
    var qe = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function We(R) {
      {
        for (var ne = arguments.length, me = new Array(ne > 1 ? ne - 1 : 0), Se = 1; Se < ne; Se++)
          me[Se - 1] = arguments[Se];
        ze("error", R, me);
      }
    }
    function ze(R, ne, me) {
      {
        var Se = qe.ReactDebugCurrentFrame, St = Se.getStackAddendum();
        St !== "" && (ne += "%s", me = me.concat([St]));
        var et = me.map(function(xt) {
          return String(xt);
        });
        et.unshift("Warning: " + ne), Function.prototype.apply.call(console[R], console, et);
      }
    }
    var Rt = !1, Ne = !1, dt = !1, Ie = !1, cn = !1, Ot;
    Ot = Symbol.for("react.module.reference");
    function Kt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === P || R === J || cn || R === L || R === te || R === oe || Ie || R === X || Rt || Ne || dt || typeof R == "object" && R !== null && (R.$$typeof === ye || R.$$typeof === W || R.$$typeof === y || R.$$typeof === ue || R.$$typeof === Z || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ot || R.getModuleId !== void 0));
    }
    function Be(R, ne, me) {
      var Se = R.displayName;
      if (Se)
        return Se;
      var St = ne.displayName || ne.name || "";
      return St !== "" ? me + "(" + St + ")" : me;
    }
    function gt(R) {
      return R.displayName || "Context";
    }
    function Ae(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && We("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case P:
          return "Fragment";
        case N:
          return "Portal";
        case J:
          return "Profiler";
        case L:
          return "StrictMode";
        case te:
          return "Suspense";
        case oe:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ue:
            var ne = R;
            return gt(ne) + ".Consumer";
          case y:
            var me = R;
            return gt(me._context) + ".Provider";
          case Z:
            return Be(R, R.render, "ForwardRef");
          case W:
            var Se = R.displayName || null;
            return Se !== null ? Se : Ae(R.type) || "Memo";
          case ye: {
            var St = R, et = St._payload, xt = St._init;
            try {
              return Ae(xt(et));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ut = Object.assign, ct = 0, ot, q, xe, pe, O, K, Fe;
    function Ke() {
    }
    Ke.__reactDisabledLog = !0;
    function Ze() {
      {
        if (ct === 0) {
          ot = console.log, q = console.info, xe = console.warn, pe = console.error, O = console.group, K = console.groupCollapsed, Fe = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        ct++;
      }
    }
    function ht() {
      {
        if (ct--, ct === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ut({}, R, {
              value: ot
            }),
            info: Ut({}, R, {
              value: q
            }),
            warn: Ut({}, R, {
              value: xe
            }),
            error: Ut({}, R, {
              value: pe
            }),
            group: Ut({}, R, {
              value: O
            }),
            groupCollapsed: Ut({}, R, {
              value: K
            }),
            groupEnd: Ut({}, R, {
              value: Fe
            })
          });
        }
        ct < 0 && We("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Nt = qe.ReactCurrentDispatcher, rt;
    function _t(R, ne, me) {
      {
        if (rt === void 0)
          try {
            throw Error();
          } catch (St) {
            var Se = St.stack.trim().match(/\n( *(at )?)/);
            rt = Se && Se[1] || "";
          }
        return `
` + rt + R;
      }
    }
    var Wt = !1, zn;
    {
      var Xn = typeof WeakMap == "function" ? WeakMap : Map;
      zn = new Xn();
    }
    function ur(R, ne) {
      if (!R || Wt)
        return "";
      {
        var me = zn.get(R);
        if (me !== void 0)
          return me;
      }
      var Se;
      Wt = !0;
      var St = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var et;
      et = Nt.current, Nt.current = null, Ze();
      try {
        if (ne) {
          var xt = function() {
            throw Error();
          };
          if (Object.defineProperty(xt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(xt, []);
            } catch (yn) {
              Se = yn;
            }
            Reflect.construct(R, [], xt);
          } else {
            try {
              xt.call();
            } catch (yn) {
              Se = yn;
            }
            R.call(xt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (yn) {
            Se = yn;
          }
          R();
        }
      } catch (yn) {
        if (yn && Se && typeof yn.stack == "string") {
          for (var pt = yn.stack.split(`
`), _n = Se.stack.split(`
`), sn = pt.length - 1, vn = _n.length - 1; sn >= 1 && vn >= 0 && pt[sn] !== _n[vn]; )
            vn--;
          for (; sn >= 1 && vn >= 0; sn--, vn--)
            if (pt[sn] !== _n[vn]) {
              if (sn !== 1 || vn !== 1)
                do
                  if (sn--, vn--, vn < 0 || pt[sn] !== _n[vn]) {
                    var Tr = `
` + pt[sn].replace(" at new ", " at ");
                    return R.displayName && Tr.includes("<anonymous>") && (Tr = Tr.replace("<anonymous>", R.displayName)), typeof R == "function" && zn.set(R, Tr), Tr;
                  }
                while (sn >= 1 && vn >= 0);
              break;
            }
        }
      } finally {
        Wt = !1, Nt.current = et, ht(), Error.prepareStackTrace = St;
      }
      var Za = R ? R.displayName || R.name : "", Bt = Za ? _t(Za) : "";
      return typeof R == "function" && zn.set(R, Bt), Bt;
    }
    function An(R, ne, me) {
      return ur(R, !1);
    }
    function wr(R) {
      var ne = R.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function In(R, ne, me) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return ur(R, wr(R));
      if (typeof R == "string")
        return _t(R);
      switch (R) {
        case te:
          return _t("Suspense");
        case oe:
          return _t("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Z:
            return An(R.render);
          case W:
            return In(R.type, ne, me);
          case ye: {
            var Se = R, St = Se._payload, et = Se._init;
            try {
              return In(et(St), ne, me);
            } catch {
            }
          }
        }
      return "";
    }
    var Un = Object.prototype.hasOwnProperty, ha = {}, Xa = qe.ReactDebugCurrentFrame;
    function Mr(R) {
      if (R) {
        var ne = R._owner, me = In(R.type, R._source, ne ? ne.type : null);
        Xa.setExtraStackFrame(me);
      } else
        Xa.setExtraStackFrame(null);
    }
    function Yn(R, ne, me, Se, St) {
      {
        var et = Function.call.bind(Un);
        for (var xt in R)
          if (et(R, xt)) {
            var pt = void 0;
            try {
              if (typeof R[xt] != "function") {
                var _n = Error((Se || "React class") + ": " + me + " type `" + xt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[xt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _n.name = "Invariant Violation", _n;
              }
              pt = R[xt](ne, xt, Se, me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (sn) {
              pt = sn;
            }
            pt && !(pt instanceof Error) && (Mr(St), We("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Se || "React class", me, xt, typeof pt), Mr(null)), pt instanceof Error && !(pt.message in ha) && (ha[pt.message] = !0, Mr(St), We("Failed %s type: %s", me, pt.message), Mr(null));
          }
      }
    }
    var Jn = Array.isArray;
    function Zn(R) {
      return Jn(R);
    }
    function Rr(R) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, me = ne && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return me;
      }
    }
    function Ja(R) {
      try {
        return jn(R), !1;
      } catch {
        return !0;
      }
    }
    function jn(R) {
      return "" + R;
    }
    function sr(R) {
      if (Ja(R))
        return We("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(R)), jn(R);
    }
    var qr = qe.ReactCurrentOwner, zi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ma, fe;
    function Ve(R) {
      if (Un.call(R, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function ft(R) {
      if (Un.call(R, "key")) {
        var ne = Object.getOwnPropertyDescriptor(R, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Vt(R, ne) {
      typeof R.ref == "string" && qr.current;
    }
    function fn(R, ne) {
      {
        var me = function() {
          ma || (ma = !0, We("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        me.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: me,
          configurable: !0
        });
      }
    }
    function dn(R, ne) {
      {
        var me = function() {
          fe || (fe = !0, We("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        me.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: me,
          configurable: !0
        });
      }
    }
    var pn = function(R, ne, me, Se, St, et, xt) {
      var pt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: R,
        key: ne,
        ref: me,
        props: xt,
        // Record the component responsible for creating this element.
        _owner: et
      };
      return pt._store = {}, Object.defineProperty(pt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.defineProperty(pt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: St
      }), Object.freeze && (Object.freeze(pt.props), Object.freeze(pt)), pt;
    };
    function er(R, ne, me, Se, St) {
      {
        var et, xt = {}, pt = null, _n = null;
        me !== void 0 && (sr(me), pt = "" + me), ft(ne) && (sr(ne.key), pt = "" + ne.key), Ve(ne) && (_n = ne.ref, Vt(ne, St));
        for (et in ne)
          Un.call(ne, et) && !zi.hasOwnProperty(et) && (xt[et] = ne[et]);
        if (R && R.defaultProps) {
          var sn = R.defaultProps;
          for (et in sn)
            xt[et] === void 0 && (xt[et] = sn[et]);
        }
        if (pt || _n) {
          var vn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          pt && fn(xt, vn), _n && dn(xt, vn);
        }
        return pn(R, pt, _n, St, Se, qr.current, xt);
      }
    }
    var un = qe.ReactCurrentOwner, Xt = qe.ReactDebugCurrentFrame;
    function Pt(R) {
      if (R) {
        var ne = R._owner, me = In(R.type, R._source, ne ? ne.type : null);
        Xt.setExtraStackFrame(me);
      } else
        Xt.setExtraStackFrame(null);
    }
    var ya;
    ya = !1;
    function Na(R) {
      return typeof R == "object" && R !== null && R.$$typeof === E;
    }
    function La() {
      {
        if (un.current) {
          var R = Ae(un.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Ai(R) {
      return "";
    }
    var ql = {};
    function Kl(R) {
      {
        var ne = La();
        if (!ne) {
          var me = typeof R == "string" ? R : R.displayName || R.name;
          me && (ne = `

Check the top-level render call using <` + me + ">.");
        }
        return ne;
      }
    }
    function Ui(R, ne) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var me = Kl(ne);
        if (ql[me])
          return;
        ql[me] = !0;
        var Se = "";
        R && R._owner && R._owner !== un.current && (Se = " It was passed a child from " + Ae(R._owner.type) + "."), Pt(R), We('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', me, Se), Pt(null);
      }
    }
    function Xl(R, ne) {
      {
        if (typeof R != "object")
          return;
        if (Zn(R))
          for (var me = 0; me < R.length; me++) {
            var Se = R[me];
            Na(Se) && Ui(Se, ne);
          }
        else if (Na(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var St = nt(R);
          if (typeof St == "function" && St !== R.entries)
            for (var et = St.call(R), xt; !(xt = et.next()).done; )
              Na(xt.value) && Ui(xt.value, ne);
        }
      }
    }
    function di(R) {
      {
        var ne = R.type;
        if (ne == null || typeof ne == "string")
          return;
        var me;
        if (typeof ne == "function")
          me = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === Z || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === W))
          me = ne.propTypes;
        else
          return;
        if (me) {
          var Se = Ae(ne);
          Yn(me, R.props, "prop", Se, R);
        } else if (ne.PropTypes !== void 0 && !ya) {
          ya = !0;
          var St = Ae(ne);
          We("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", St || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && We("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ga(R) {
      {
        for (var ne = Object.keys(R.props), me = 0; me < ne.length; me++) {
          var Se = ne[me];
          if (Se !== "children" && Se !== "key") {
            Pt(R), We("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Se), Pt(null);
            break;
          }
        }
        R.ref !== null && (Pt(R), We("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    var cr = {};
    function Sa(R, ne, me, Se, St, et) {
      {
        var xt = Kt(R);
        if (!xt) {
          var pt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (pt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _n = Ai();
          _n ? pt += _n : pt += La();
          var sn;
          R === null ? sn = "null" : Zn(R) ? sn = "array" : R !== void 0 && R.$$typeof === E ? (sn = "<" + (Ae(R.type) || "Unknown") + " />", pt = " Did you accidentally export a JSX literal instead of a component?") : sn = typeof R, We("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", sn, pt);
        }
        var vn = er(R, ne, me, St, et);
        if (vn == null)
          return vn;
        if (xt) {
          var Tr = ne.children;
          if (Tr !== void 0)
            if (Se)
              if (Zn(Tr)) {
                for (var Za = 0; Za < Tr.length; Za++)
                  Xl(Tr[Za], R);
                Object.freeze && Object.freeze(Tr);
              } else
                We("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xl(Tr, R);
        }
        if (Un.call(ne, "key")) {
          var Bt = Ae(R), yn = Object.keys(ne).filter(function(Fi) {
            return Fi !== "key";
          }), it = yn.length > 0 ? "{key: someKey, " + yn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!cr[Bt + it]) {
            var hi = yn.length > 0 ? "{" + yn.join(": ..., ") + ": ...}" : "{}";
            We(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, it, Bt, hi, Bt), cr[Bt + it] = !0;
          }
        }
        return R === P ? ga(vn) : di(vn), vn;
      }
    }
    function Kr(R, ne, me) {
      return Sa(R, ne, me, !0);
    }
    function pi(R, ne, me) {
      return Sa(R, ne, me, !1);
    }
    var vi = pi, ji = Kr;
    sv.Fragment = P, sv.jsx = vi, sv.jsxs = ji;
  }(), sv;
}
var Tb;
function aD() {
  if (Tb) return iy.exports;
  Tb = 1;
  var g = {};
  return g.NODE_ENV === "production" ? iy.exports = nD() : iy.exports = rD(), iy.exports;
}
var B = aD(), yt = pc();
const iD = /* @__PURE__ */ Ib(yt);
var ad = {}, oy = { exports: {} }, qa = {}, uy = { exports: {} }, k0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _b;
function lD() {
  return _b || (_b = 1, function(g) {
    function x(q, xe) {
      var pe = q.length;
      q.push(xe);
      e: for (; 0 < pe; ) {
        var O = pe - 1 >>> 1, K = q[O];
        if (0 < P(K, xe)) q[O] = xe, q[pe] = K, pe = O;
        else break e;
      }
    }
    function E(q) {
      return q.length === 0 ? null : q[0];
    }
    function N(q) {
      if (q.length === 0) return null;
      var xe = q[0], pe = q.pop();
      if (pe !== xe) {
        q[0] = pe;
        e: for (var O = 0, K = q.length, Fe = K >>> 1; O < Fe; ) {
          var Ke = 2 * (O + 1) - 1, Ze = q[Ke], ht = Ke + 1, Nt = q[ht];
          if (0 > P(Ze, pe)) ht < K && 0 > P(Nt, Ze) ? (q[O] = Nt, q[ht] = pe, O = ht) : (q[O] = Ze, q[Ke] = pe, O = Ke);
          else if (ht < K && 0 > P(Nt, pe)) q[O] = Nt, q[ht] = pe, O = ht;
          else break e;
        }
      }
      return xe;
    }
    function P(q, xe) {
      var pe = q.sortIndex - xe.sortIndex;
      return pe !== 0 ? pe : q.id - xe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var L = performance;
      g.unstable_now = function() {
        return L.now();
      };
    } else {
      var J = Date, y = J.now();
      g.unstable_now = function() {
        return J.now() - y;
      };
    }
    var ue = [], Z = [], te = 1, oe = null, W = 3, ye = !1, X = !1, ee = !1, de = typeof setTimeout == "function" ? setTimeout : null, nt = typeof clearTimeout == "function" ? clearTimeout : null, qe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function We(q) {
      for (var xe = E(Z); xe !== null; ) {
        if (xe.callback === null) N(Z);
        else if (xe.startTime <= q) N(Z), xe.sortIndex = xe.expirationTime, x(ue, xe);
        else break;
        xe = E(Z);
      }
    }
    function ze(q) {
      if (ee = !1, We(q), !X) if (E(ue) !== null) X = !0, ct(Rt);
      else {
        var xe = E(Z);
        xe !== null && ot(ze, xe.startTime - q);
      }
    }
    function Rt(q, xe) {
      X = !1, ee && (ee = !1, nt(Ie), Ie = -1), ye = !0;
      var pe = W;
      try {
        for (We(xe), oe = E(ue); oe !== null && (!(oe.expirationTime > xe) || q && !Kt()); ) {
          var O = oe.callback;
          if (typeof O == "function") {
            oe.callback = null, W = oe.priorityLevel;
            var K = O(oe.expirationTime <= xe);
            xe = g.unstable_now(), typeof K == "function" ? oe.callback = K : oe === E(ue) && N(ue), We(xe);
          } else N(ue);
          oe = E(ue);
        }
        if (oe !== null) var Fe = !0;
        else {
          var Ke = E(Z);
          Ke !== null && ot(ze, Ke.startTime - xe), Fe = !1;
        }
        return Fe;
      } finally {
        oe = null, W = pe, ye = !1;
      }
    }
    var Ne = !1, dt = null, Ie = -1, cn = 5, Ot = -1;
    function Kt() {
      return !(g.unstable_now() - Ot < cn);
    }
    function Be() {
      if (dt !== null) {
        var q = g.unstable_now();
        Ot = q;
        var xe = !0;
        try {
          xe = dt(!0, q);
        } finally {
          xe ? gt() : (Ne = !1, dt = null);
        }
      } else Ne = !1;
    }
    var gt;
    if (typeof qe == "function") gt = function() {
      qe(Be);
    };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), Ut = Ae.port2;
      Ae.port1.onmessage = Be, gt = function() {
        Ut.postMessage(null);
      };
    } else gt = function() {
      de(Be, 0);
    };
    function ct(q) {
      dt = q, Ne || (Ne = !0, gt());
    }
    function ot(q, xe) {
      Ie = de(function() {
        q(g.unstable_now());
      }, xe);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(q) {
      q.callback = null;
    }, g.unstable_continueExecution = function() {
      X || ye || (X = !0, ct(Rt));
    }, g.unstable_forceFrameRate = function(q) {
      0 > q || 125 < q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : cn = 0 < q ? Math.floor(1e3 / q) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return W;
    }, g.unstable_getFirstCallbackNode = function() {
      return E(ue);
    }, g.unstable_next = function(q) {
      switch (W) {
        case 1:
        case 2:
        case 3:
          var xe = 3;
          break;
        default:
          xe = W;
      }
      var pe = W;
      W = xe;
      try {
        return q();
      } finally {
        W = pe;
      }
    }, g.unstable_pauseExecution = function() {
    }, g.unstable_requestPaint = function() {
    }, g.unstable_runWithPriority = function(q, xe) {
      switch (q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          q = 3;
      }
      var pe = W;
      W = q;
      try {
        return xe();
      } finally {
        W = pe;
      }
    }, g.unstable_scheduleCallback = function(q, xe, pe) {
      var O = g.unstable_now();
      switch (typeof pe == "object" && pe !== null ? (pe = pe.delay, pe = typeof pe == "number" && 0 < pe ? O + pe : O) : pe = O, q) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return K = pe + K, q = { id: te++, callback: xe, priorityLevel: q, startTime: pe, expirationTime: K, sortIndex: -1 }, pe > O ? (q.sortIndex = pe, x(Z, q), E(ue) === null && q === E(Z) && (ee ? (nt(Ie), Ie = -1) : ee = !0, ot(ze, pe - O))) : (q.sortIndex = K, x(ue, q), X || ye || (X = !0, ct(Rt))), q;
    }, g.unstable_shouldYield = Kt, g.unstable_wrapCallback = function(q) {
      var xe = W;
      return function() {
        var pe = W;
        W = xe;
        try {
          return q.apply(this, arguments);
        } finally {
          W = pe;
        }
      };
    };
  }(k0)), k0;
}
var D0 = {}, kb;
function oD() {
  return kb || (kb = 1, function(g) {
    var x = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    x.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var E = !1, N = 5;
      function P(fe, Ve) {
        var ft = fe.length;
        fe.push(Ve), y(fe, Ve, ft);
      }
      function L(fe) {
        return fe.length === 0 ? null : fe[0];
      }
      function J(fe) {
        if (fe.length === 0)
          return null;
        var Ve = fe[0], ft = fe.pop();
        return ft !== Ve && (fe[0] = ft, ue(fe, ft, 0)), Ve;
      }
      function y(fe, Ve, ft) {
        for (var Vt = ft; Vt > 0; ) {
          var fn = Vt - 1 >>> 1, dn = fe[fn];
          if (Z(dn, Ve) > 0)
            fe[fn] = Ve, fe[Vt] = dn, Vt = fn;
          else
            return;
        }
      }
      function ue(fe, Ve, ft) {
        for (var Vt = ft, fn = fe.length, dn = fn >>> 1; Vt < dn; ) {
          var pn = (Vt + 1) * 2 - 1, er = fe[pn], un = pn + 1, Xt = fe[un];
          if (Z(er, Ve) < 0)
            un < fn && Z(Xt, er) < 0 ? (fe[Vt] = Xt, fe[un] = Ve, Vt = un) : (fe[Vt] = er, fe[pn] = Ve, Vt = pn);
          else if (un < fn && Z(Xt, Ve) < 0)
            fe[Vt] = Xt, fe[un] = Ve, Vt = un;
          else
            return;
        }
      }
      function Z(fe, Ve) {
        var ft = fe.sortIndex - Ve.sortIndex;
        return ft !== 0 ? ft : fe.id - Ve.id;
      }
      var te = 1, oe = 2, W = 3, ye = 4, X = 5;
      function ee(fe, Ve) {
      }
      var de = typeof performance == "object" && typeof performance.now == "function";
      if (de) {
        var nt = performance;
        g.unstable_now = function() {
          return nt.now();
        };
      } else {
        var qe = Date, We = qe.now();
        g.unstable_now = function() {
          return qe.now() - We;
        };
      }
      var ze = 1073741823, Rt = -1, Ne = 250, dt = 5e3, Ie = 1e4, cn = ze, Ot = [], Kt = [], Be = 1, gt = null, Ae = W, Ut = !1, ct = !1, ot = !1, q = typeof setTimeout == "function" ? setTimeout : null, xe = typeof clearTimeout == "function" ? clearTimeout : null, pe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function O(fe) {
        for (var Ve = L(Kt); Ve !== null; ) {
          if (Ve.callback === null)
            J(Kt);
          else if (Ve.startTime <= fe)
            J(Kt), Ve.sortIndex = Ve.expirationTime, P(Ot, Ve);
          else
            return;
          Ve = L(Kt);
        }
      }
      function K(fe) {
        if (ot = !1, O(fe), !ct)
          if (L(Ot) !== null)
            ct = !0, jn(Fe);
          else {
            var Ve = L(Kt);
            Ve !== null && sr(K, Ve.startTime - fe);
          }
      }
      function Fe(fe, Ve) {
        ct = !1, ot && (ot = !1, qr()), Ut = !0;
        var ft = Ae;
        try {
          var Vt;
          if (!E) return Ke(fe, Ve);
        } finally {
          gt = null, Ae = ft, Ut = !1;
        }
      }
      function Ke(fe, Ve) {
        var ft = Ve;
        for (O(ft), gt = L(Ot); gt !== null && !(gt.expirationTime > ft && (!fe || Xa())); ) {
          var Vt = gt.callback;
          if (typeof Vt == "function") {
            gt.callback = null, Ae = gt.priorityLevel;
            var fn = gt.expirationTime <= ft, dn = Vt(fn);
            ft = g.unstable_now(), typeof dn == "function" ? gt.callback = dn : gt === L(Ot) && J(Ot), O(ft);
          } else
            J(Ot);
          gt = L(Ot);
        }
        if (gt !== null)
          return !0;
        var pn = L(Kt);
        return pn !== null && sr(K, pn.startTime - ft), !1;
      }
      function Ze(fe, Ve) {
        switch (fe) {
          case te:
          case oe:
          case W:
          case ye:
          case X:
            break;
          default:
            fe = W;
        }
        var ft = Ae;
        Ae = fe;
        try {
          return Ve();
        } finally {
          Ae = ft;
        }
      }
      function ht(fe) {
        var Ve;
        switch (Ae) {
          case te:
          case oe:
          case W:
            Ve = W;
            break;
          default:
            Ve = Ae;
            break;
        }
        var ft = Ae;
        Ae = Ve;
        try {
          return fe();
        } finally {
          Ae = ft;
        }
      }
      function Nt(fe) {
        var Ve = Ae;
        return function() {
          var ft = Ae;
          Ae = Ve;
          try {
            return fe.apply(this, arguments);
          } finally {
            Ae = ft;
          }
        };
      }
      function rt(fe, Ve, ft) {
        var Vt = g.unstable_now(), fn;
        if (typeof ft == "object" && ft !== null) {
          var dn = ft.delay;
          typeof dn == "number" && dn > 0 ? fn = Vt + dn : fn = Vt;
        } else
          fn = Vt;
        var pn;
        switch (fe) {
          case te:
            pn = Rt;
            break;
          case oe:
            pn = Ne;
            break;
          case X:
            pn = cn;
            break;
          case ye:
            pn = Ie;
            break;
          case W:
          default:
            pn = dt;
            break;
        }
        var er = fn + pn, un = {
          id: Be++,
          callback: Ve,
          priorityLevel: fe,
          startTime: fn,
          expirationTime: er,
          sortIndex: -1
        };
        return fn > Vt ? (un.sortIndex = fn, P(Kt, un), L(Ot) === null && un === L(Kt) && (ot ? qr() : ot = !0, sr(K, fn - Vt))) : (un.sortIndex = er, P(Ot, un), !ct && !Ut && (ct = !0, jn(Fe))), un;
      }
      function _t() {
      }
      function Wt() {
        !ct && !Ut && (ct = !0, jn(Fe));
      }
      function zn() {
        return L(Ot);
      }
      function Xn(fe) {
        fe.callback = null;
      }
      function ur() {
        return Ae;
      }
      var An = !1, wr = null, In = -1, Un = N, ha = -1;
      function Xa() {
        var fe = g.unstable_now() - ha;
        return !(fe < Un);
      }
      function Mr() {
      }
      function Yn(fe) {
        if (fe < 0 || fe > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        fe > 0 ? Un = Math.floor(1e3 / fe) : Un = N;
      }
      var Jn = function() {
        if (wr !== null) {
          var fe = g.unstable_now();
          ha = fe;
          var Ve = !0, ft = !0;
          try {
            ft = wr(Ve, fe);
          } finally {
            ft ? Zn() : (An = !1, wr = null);
          }
        } else
          An = !1;
      }, Zn;
      if (typeof pe == "function")
        Zn = function() {
          pe(Jn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), Ja = Rr.port2;
        Rr.port1.onmessage = Jn, Zn = function() {
          Ja.postMessage(null);
        };
      } else
        Zn = function() {
          q(Jn, 0);
        };
      function jn(fe) {
        wr = fe, An || (An = !0, Zn());
      }
      function sr(fe, Ve) {
        In = q(function() {
          fe(g.unstable_now());
        }, Ve);
      }
      function qr() {
        xe(In), In = -1;
      }
      var zi = Mr, ma = null;
      g.unstable_IdlePriority = X, g.unstable_ImmediatePriority = te, g.unstable_LowPriority = ye, g.unstable_NormalPriority = W, g.unstable_Profiling = ma, g.unstable_UserBlockingPriority = oe, g.unstable_cancelCallback = Xn, g.unstable_continueExecution = Wt, g.unstable_forceFrameRate = Yn, g.unstable_getCurrentPriorityLevel = ur, g.unstable_getFirstCallbackNode = zn, g.unstable_next = ht, g.unstable_pauseExecution = _t, g.unstable_requestPaint = zi, g.unstable_runWithPriority = Ze, g.unstable_scheduleCallback = rt, g.unstable_shouldYield = Xa, g.unstable_wrapCallback = Nt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(D0)), D0;
}
var Db;
function Yb() {
  if (Db) return uy.exports;
  Db = 1;
  var g = {};
  return g.NODE_ENV === "production" ? uy.exports = lD() : uy.exports = oD(), uy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ob;
function uD() {
  if (Ob) return qa;
  Ob = 1;
  var g = pc(), x = Yb();
  function E(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var N = /* @__PURE__ */ new Set(), P = {};
  function L(n, r) {
    J(n, r), J(n + "Capture", r);
  }
  function J(n, r) {
    for (P[n] = r, n = 0; n < r.length; n++) N.add(r[n]);
  }
  var y = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ue = Object.prototype.hasOwnProperty, Z = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, te = {}, oe = {};
  function W(n) {
    return ue.call(oe, n) ? !0 : ue.call(te, n) ? !1 : Z.test(n) ? oe[n] = !0 : (te[n] = !0, !1);
  }
  function ye(n, r, l, u) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function X(n, r, l, u) {
    if (r === null || typeof r > "u" || ye(n, r, l, u)) return !0;
    if (u) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function ee(n, r, l, u, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var de = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    de[n] = new ee(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    de[r] = new ee(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    de[n] = new ee(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    de[n] = new ee(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    de[n] = new ee(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    de[n] = new ee(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    de[n] = new ee(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    de[n] = new ee(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    de[n] = new ee(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var nt = /[\-:]([a-z])/g;
  function qe(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      nt,
      qe
    );
    de[r] = new ee(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(nt, qe);
    de[r] = new ee(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(nt, qe);
    de[r] = new ee(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    de[n] = new ee(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), de.xlinkHref = new ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    de[n] = new ee(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function We(n, r, l, u) {
    var c = de.hasOwnProperty(r) ? de[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (X(r, l, c, u) && (l = null), u || c === null ? W(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, u = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var ze = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Rt = Symbol.for("react.element"), Ne = Symbol.for("react.portal"), dt = Symbol.for("react.fragment"), Ie = Symbol.for("react.strict_mode"), cn = Symbol.for("react.profiler"), Ot = Symbol.for("react.provider"), Kt = Symbol.for("react.context"), Be = Symbol.for("react.forward_ref"), gt = Symbol.for("react.suspense"), Ae = Symbol.for("react.suspense_list"), Ut = Symbol.for("react.memo"), ct = Symbol.for("react.lazy"), ot = Symbol.for("react.offscreen"), q = Symbol.iterator;
  function xe(n) {
    return n === null || typeof n != "object" ? null : (n = q && n[q] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var pe = Object.assign, O;
  function K(n) {
    if (O === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      O = r && r[1] || "";
    }
    return `
` + O + n;
  }
  var Fe = !1;
  function Ke(n, r) {
    if (!n || Fe) return "";
    Fe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (H) {
          var u = H;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (H) {
          u = H;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (H) {
          u = H;
        }
        n();
      }
    } catch (H) {
      if (H && u && typeof H.stack == "string") {
        for (var c = H.stack.split(`
`), d = u.stack.split(`
`), m = c.length - 1, b = d.length - 1; 1 <= m && 0 <= b && c[m] !== d[b]; ) b--;
        for (; 1 <= m && 0 <= b; m--, b--) if (c[m] !== d[b]) {
          if (m !== 1 || b !== 1)
            do
              if (m--, b--, 0 > b || c[m] !== d[b]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= b);
          break;
        }
      }
    } finally {
      Fe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? K(n) : "";
  }
  function Ze(n) {
    switch (n.tag) {
      case 5:
        return K(n.type);
      case 16:
        return K("Lazy");
      case 13:
        return K("Suspense");
      case 19:
        return K("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ke(n.type, !1), n;
      case 11:
        return n = Ke(n.type.render, !1), n;
      case 1:
        return n = Ke(n.type, !0), n;
      default:
        return "";
    }
  }
  function ht(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case dt:
        return "Fragment";
      case Ne:
        return "Portal";
      case cn:
        return "Profiler";
      case Ie:
        return "StrictMode";
      case gt:
        return "Suspense";
      case Ae:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Kt:
        return (n.displayName || "Context") + ".Consumer";
      case Ot:
        return (n._context.displayName || "Context") + ".Provider";
      case Be:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Ut:
        return r = n.displayName || null, r !== null ? r : ht(n.type) || "Memo";
      case ct:
        r = n._payload, n = n._init;
        try {
          return ht(n(r));
        } catch {
        }
    }
    return null;
  }
  function Nt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ht(r);
      case 8:
        return r === Ie ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function rt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function _t(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Wt(n) {
    var r = _t(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        u = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(m) {
        u = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function zn(n) {
    n._valueTracker || (n._valueTracker = Wt(n));
  }
  function Xn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), u = "";
    return n && (u = _t(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function ur(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function An(n, r) {
    var l = r.checked;
    return pe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function wr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = rt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function In(n, r) {
    r = r.checked, r != null && We(n, "checked", r, !1);
  }
  function Un(n, r) {
    In(n, r);
    var l = rt(r.value), u = r.type;
    if (l != null) u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Xa(n, r.type, l) : r.hasOwnProperty("defaultValue") && Xa(n, r.type, rt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ha(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Xa(n, r, l) {
    (r !== "number" || ur(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Mr = Array.isArray;
  function Yn(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + rt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Jn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(E(91));
    return pe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Zn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(E(92));
        if (Mr(l)) {
          if (1 < l.length) throw Error(E(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: rt(l) };
  }
  function Rr(n, r) {
    var l = rt(r.value), u = rt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function Ja(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function jn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function sr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? jn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var qr, zi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (qr = qr || document.createElement("div"), qr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = qr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ma(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var fe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ve = ["Webkit", "ms", "Moz", "O"];
  Object.keys(fe).forEach(function(n) {
    Ve.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), fe[r] = fe[n];
    });
  });
  function ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || fe.hasOwnProperty(n) && fe[n] ? ("" + r).trim() : r + "px";
  }
  function Vt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var u = l.indexOf("--") === 0, c = ft(l, r[l], u);
      l === "float" && (l = "cssFloat"), u ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var fn = pe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function dn(n, r) {
    if (r) {
      if (fn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(E(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(E(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(E(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(E(62));
    }
  }
  function pn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var er = null;
  function un(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Xt = null, Pt = null, ya = null;
  function Na(n) {
    if (n = ms(n)) {
      if (typeof Xt != "function") throw Error(E(280));
      var r = n.stateNode;
      r && (r = Qi(r), Xt(n.stateNode, n.type, r));
    }
  }
  function La(n) {
    Pt ? ya ? ya.push(n) : ya = [n] : Pt = n;
  }
  function Ai() {
    if (Pt) {
      var n = Pt, r = ya;
      if (ya = Pt = null, Na(n), r) for (n = 0; n < r.length; n++) Na(r[n]);
    }
  }
  function ql(n, r) {
    return n(r);
  }
  function Kl() {
  }
  var Ui = !1;
  function Xl(n, r, l) {
    if (Ui) return n(r, l);
    Ui = !0;
    try {
      return ql(n, r, l);
    } finally {
      Ui = !1, (Pt !== null || ya !== null) && (Kl(), Ai());
    }
  }
  function di(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var u = Qi(l);
    if (u === null) return null;
    l = u[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(E(231, r, typeof l));
    return l;
  }
  var ga = !1;
  if (y) try {
    var cr = {};
    Object.defineProperty(cr, "passive", { get: function() {
      ga = !0;
    } }), window.addEventListener("test", cr, cr), window.removeEventListener("test", cr, cr);
  } catch {
    ga = !1;
  }
  function Sa(n, r, l, u, c, d, m, b, T) {
    var H = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, H);
    } catch (ae) {
      this.onError(ae);
    }
  }
  var Kr = !1, pi = null, vi = !1, ji = null, R = { onError: function(n) {
    Kr = !0, pi = n;
  } };
  function ne(n, r, l, u, c, d, m, b, T) {
    Kr = !1, pi = null, Sa.apply(R, arguments);
  }
  function me(n, r, l, u, c, d, m, b, T) {
    if (ne.apply(this, arguments), Kr) {
      if (Kr) {
        var H = pi;
        Kr = !1, pi = null;
      } else throw Error(E(198));
      vi || (vi = !0, ji = H);
    }
  }
  function Se(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function St(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function et(n) {
    if (Se(n) !== n) throw Error(E(188));
  }
  function xt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Se(n), r === null) throw Error(E(188));
      return r !== n ? null : n;
    }
    for (var l = n, u = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (u = c.return, u !== null) {
          l = u;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return et(c), n;
          if (d === u) return et(c), r;
          d = d.sibling;
        }
        throw Error(E(188));
      }
      if (l.return !== u.return) l = c, u = d;
      else {
        for (var m = !1, b = c.child; b; ) {
          if (b === l) {
            m = !0, l = c, u = d;
            break;
          }
          if (b === u) {
            m = !0, u = c, l = d;
            break;
          }
          b = b.sibling;
        }
        if (!m) {
          for (b = d.child; b; ) {
            if (b === l) {
              m = !0, l = d, u = c;
              break;
            }
            if (b === u) {
              m = !0, u = d, l = c;
              break;
            }
            b = b.sibling;
          }
          if (!m) throw Error(E(189));
        }
      }
      if (l.alternate !== u) throw Error(E(190));
    }
    if (l.tag !== 3) throw Error(E(188));
    return l.stateNode.current === l ? n : r;
  }
  function pt(n) {
    return n = xt(n), n !== null ? _n(n) : null;
  }
  function _n(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = _n(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var sn = x.unstable_scheduleCallback, vn = x.unstable_cancelCallback, Tr = x.unstable_shouldYield, Za = x.unstable_requestPaint, Bt = x.unstable_now, yn = x.unstable_getCurrentPriorityLevel, it = x.unstable_ImmediatePriority, hi = x.unstable_UserBlockingPriority, Fi = x.unstable_NormalPriority, vc = x.unstable_LowPriority, Hi = x.unstable_IdlePriority, cl = null, Xr = null;
  function qu(n) {
    if (Xr && typeof Xr.onCommitFiberRoot == "function") try {
      Xr.onCommitFiberRoot(cl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var zr = Math.clz32 ? Math.clz32 : mc, Ku = Math.log, hc = Math.LN2;
  function mc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ku(n) / hc | 0) | 0;
  }
  var Vi = 64, fl = 4194304;
  function Jr(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function mi(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var u = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var b = m & ~c;
      b !== 0 ? u = Jr(b) : (d &= m, d !== 0 && (u = Jr(d)));
    } else m = l & ~c, m !== 0 ? u = Jr(m) : d !== 0 && (u = Jr(d));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & c) === 0 && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) l = 31 - zr(r), c = 1 << l, u |= n[l], r &= ~c;
    return u;
  }
  function dl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Io(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - zr(d), b = 1 << m, T = c[m];
      T === -1 ? ((b & l) === 0 || (b & u) !== 0) && (c[m] = dl(b, r)) : T <= r && (n.expiredLanes |= b), d &= ~b;
    }
  }
  function Pi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Jl() {
    var n = Vi;
    return Vi <<= 1, (Vi & 4194240) === 0 && (Vi = 64), n;
  }
  function Zl(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function pl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - zr(r), n[r] = l;
  }
  function Xu(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - zr(l), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Ju(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - zr(l), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function Zu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Yo, Mt, yc, yi, Xe, eo = !1, tr = [], Zr = null, Ar = null, gi = null, bn = /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ new Map(), ei = [], Ma = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function _r(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Zr = null;
        break;
      case "dragenter":
      case "dragleave":
        Ar = null;
        break;
      case "mouseover":
      case "mouseout":
        gi = null;
        break;
      case "pointerover":
      case "pointerout":
        bn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Jt.delete(r.pointerId);
    }
  }
  function Ur(n, r, l, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ms(r), r !== null && Mt(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function od(n, r, l, u, c) {
    switch (r) {
      case "focusin":
        return Zr = Ur(Zr, n, r, l, u, c), !0;
      case "dragenter":
        return Ar = Ur(Ar, n, r, l, u, c), !0;
      case "mouseover":
        return gi = Ur(gi, n, r, l, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return bn.set(d, Ur(bn.get(d) || null, n, r, l, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Jt.set(d, Ur(Jt.get(d) || null, n, r, l, u, c)), !0;
    }
    return !1;
  }
  function Wo(n) {
    var r = so(n.target);
    if (r !== null) {
      var l = Se(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = St(l), r !== null) {
            n.blockedOn = r, Xe(n.priority, function() {
              yc(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function to(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Ko(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        er = u, l.target.dispatchEvent(u), er = null;
      } else return r = ms(l), r !== null && Mt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Go(n, r, l) {
    to(n) && l.delete(r);
  }
  function Qo() {
    eo = !1, Zr !== null && to(Zr) && (Zr = null), Ar !== null && to(Ar) && (Ar = null), gi !== null && to(gi) && (gi = null), bn.forEach(Go), Jt.forEach(Go);
  }
  function no(n, r) {
    n.blockedOn === r && (n.blockedOn = null, eo || (eo = !0, x.unstable_scheduleCallback(x.unstable_NormalPriority, Qo)));
  }
  function za(n) {
    function r(c) {
      return no(c, n);
    }
    if (0 < tr.length) {
      no(tr[0], n);
      for (var l = 1; l < tr.length; l++) {
        var u = tr[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Zr !== null && no(Zr, n), Ar !== null && no(Ar, n), gi !== null && no(gi, n), bn.forEach(r), Jt.forEach(r), l = 0; l < ei.length; l++) u = ei[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < ei.length && (l = ei[0], l.blockedOn === null); ) Wo(l), l.blockedOn === null && ei.shift();
  }
  var Aa = ze.ReactCurrentBatchConfig, vl = !0;
  function Bi(n, r, l, u) {
    var c = Lt, d = Aa.transition;
    Aa.transition = null;
    try {
      Lt = 1, hl(n, r, l, u);
    } finally {
      Lt = c, Aa.transition = d;
    }
  }
  function qo(n, r, l, u) {
    var c = Lt, d = Aa.transition;
    Aa.transition = null;
    try {
      Lt = 4, hl(n, r, l, u);
    } finally {
      Lt = c, Aa.transition = d;
    }
  }
  function hl(n, r, l, u) {
    if (vl) {
      var c = Ko(n, r, l, u);
      if (c === null) Ed(n, r, u, $i, l), _r(n, u);
      else if (od(c, n, r, l, u)) u.stopPropagation();
      else if (_r(n, u), r & 4 && -1 < Ma.indexOf(n)) {
        for (; c !== null; ) {
          var d = ms(c);
          if (d !== null && Yo(d), d = Ko(n, r, l, u), d === null && Ed(n, r, u, $i, l), d === c) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else Ed(n, r, u, null, l);
    }
  }
  var $i = null;
  function Ko(n, r, l, u) {
    if ($i = null, n = un(u), n = so(n), n !== null) if (r = Se(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = St(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return $i = n, null;
  }
  function es(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (yn()) {
          case it:
            return 1;
          case hi:
            return 4;
          case Fi:
          case vc:
            return 16;
          case Hi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ua = null, Xo = null, h = null;
  function w() {
    if (h) return h;
    var n, r = Xo, l = r.length, u, c = "value" in Ua ? Ua.value : Ua.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (u = 1; u <= m && r[l - u] === c[d - u]; u++) ;
    return h = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function $() {
    return !0;
  }
  function ce() {
    return !1;
  }
  function ke(n) {
    function r(l, u, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var b in n) n.hasOwnProperty(b) && (l = n[b], this[b] = l ? l(d) : d[b]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? $ : ce, this.isPropagationStopped = ce, this;
    }
    return pe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = $);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = $);
    }, persist: function() {
    }, isPersistent: $ }), r;
  }
  var be = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ge = ke(be), vt = pe({}, be, { view: 0, detail: 0 }), $t = ke(vt), Zt, en, ut, an = pe({}, vt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ti, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ut && (ut && n.type === "mousemove" ? (Zt = n.screenX - ut.screenX, en = n.screenY - ut.screenY) : en = Zt = 0, ut = n), Zt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : en;
  } }), kn = ke(an), ro = pe({}, an, { dataTransfer: 0 }), ts = ke(ro), Ii = pe({}, vt, { relatedTarget: 0 }), ao = ke(Ii), ns = pe({}, be, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ud = ke(ns), gc = pe({}, be, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), sd = ke(gc), vv = pe({}, be, { data: 0 }), Sc = ke(vv), hv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, mv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, yv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function fy(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = yv[n]) ? !!r[n] : !1;
  }
  function ti() {
    return fy;
  }
  var dy = pe({}, vt, { key: function(n) {
    if (n.key) {
      var r = hv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? mv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ti, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), cd = ke(dy), fd = pe({}, an, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ec = ke(fd), py = pe({}, vt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ti }), Cc = ke(py), gv = pe({}, be, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ea = ke(gv), Yi = pe({}, an, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fn = ke(Yi), Wi = [9, 13, 27, 32], rs = y && "CompositionEvent" in window, ml = null;
  y && "documentMode" in document && (ml = document.documentMode);
  var vy = y && "TextEvent" in window && !ml, Jo = y && (!rs || ml && 8 < ml && 11 >= ml), Sv = " ", Ev = !1;
  function xc(n, r) {
    switch (n) {
      case "keyup":
        return Wi.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Cv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Zo = !1;
  function hy(n, r) {
    switch (n) {
      case "compositionend":
        return Cv(r);
      case "keypress":
        return r.which !== 32 ? null : (Ev = !0, Sv);
      case "textInput":
        return n = r.data, n === Sv && Ev ? null : n;
      default:
        return null;
    }
  }
  function xv(n, r) {
    if (Zo) return n === "compositionend" || !rs && xc(n, r) ? (n = w(), h = Xo = Ua = null, Zo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Jo && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var my = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function bv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!my[n.type] : r === "textarea";
  }
  function wv(n, r, l, u) {
    La(u), r = ps(r, "onChange"), 0 < r.length && (l = new Ge("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var eu = null, Si = null;
  function dd(n) {
    Tc(n, 0);
  }
  function as(n) {
    var r = Ue(n);
    if (Xn(r)) return n;
  }
  function Rv(n, r) {
    if (n === "change") return r;
  }
  var Tv = !1;
  if (y) {
    var pd;
    if (y) {
      var vd = "oninput" in document;
      if (!vd) {
        var _v = document.createElement("div");
        _v.setAttribute("oninput", "return;"), vd = typeof _v.oninput == "function";
      }
      pd = vd;
    } else pd = !1;
    Tv = pd && (!document.documentMode || 9 < document.documentMode);
  }
  function kv() {
    eu && (eu.detachEvent("onpropertychange", Dv), Si = eu = null);
  }
  function Dv(n) {
    if (n.propertyName === "value" && as(Si)) {
      var r = [];
      wv(r, Si, n, un(n)), Xl(dd, r);
    }
  }
  function yy(n, r, l) {
    n === "focusin" ? (kv(), eu = r, Si = l, eu.attachEvent("onpropertychange", Dv)) : n === "focusout" && kv();
  }
  function gy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return as(Si);
  }
  function Ov(n, r) {
    if (n === "click") return as(r);
  }
  function Sy(n, r) {
    if (n === "input" || n === "change") return as(r);
  }
  function Nv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ni = typeof Object.is == "function" ? Object.is : Nv;
  function is(n, r) {
    if (ni(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length) return !1;
    for (u = 0; u < l.length; u++) {
      var c = l[u];
      if (!ue.call(r, c) || !ni(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Lv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Mv(n, r) {
    var l = Lv(n);
    n = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (u = n + l.textContent.length, n <= r && u >= r) return { node: l, offset: r - n };
        n = u;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Lv(l);
    }
  }
  function bc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? bc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function yl() {
    for (var n = window, r = ur(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = ur(n.document);
    }
    return r;
  }
  function tu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function zv(n) {
    var r = yl(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && bc(l.ownerDocument.documentElement, l)) {
      if (u !== null && tu(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(u.start, c);
          u = u.end === void 0 ? d : Math.min(u.end, c), !n.extend && d > u && (c = u, u = d, d = c), c = Mv(l, d);
          var m = Mv(
            l,
            u
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > u ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var nu = y && "documentMode" in document && 11 >= document.documentMode, ru = null, hd = null, ls = null, md = !1;
  function Av(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    md || ru == null || ru !== ur(u) || (u = ru, "selectionStart" in u && tu(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), ls && is(ls, u) || (ls = u, u = ps(hd, "onSelect"), 0 < u.length && (r = new Ge("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = ru)));
  }
  function os(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var au = { animationend: os("Animation", "AnimationEnd"), animationiteration: os("Animation", "AnimationIteration"), animationstart: os("Animation", "AnimationStart"), transitionend: os("Transition", "TransitionEnd") }, wc = {}, kr = {};
  y && (kr = document.createElement("div").style, "AnimationEvent" in window || (delete au.animationend.animation, delete au.animationiteration.animation, delete au.animationstart.animation), "TransitionEvent" in window || delete au.transitionend.transition);
  function us(n) {
    if (wc[n]) return wc[n];
    if (!au[n]) return n;
    var r = au[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in kr) return wc[n] = r[l];
    return n;
  }
  var Uv = us("animationend"), jv = us("animationiteration"), Fv = us("animationstart"), Hv = us("transitionend"), Vv = /* @__PURE__ */ new Map(), yd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ei(n, r) {
    Vv.set(n, r), L(r, [n]);
  }
  for (var io = 0; io < yd.length; io++) {
    var gd = yd[io], ss = gd.toLowerCase(), Ey = gd[0].toUpperCase() + gd.slice(1);
    Ei(ss, "on" + Ey);
  }
  Ei(Uv, "onAnimationEnd"), Ei(jv, "onAnimationIteration"), Ei(Fv, "onAnimationStart"), Ei("dblclick", "onDoubleClick"), Ei("focusin", "onFocus"), Ei("focusout", "onBlur"), Ei(Hv, "onTransitionEnd"), J("onMouseEnter", ["mouseout", "mouseover"]), J("onMouseLeave", ["mouseout", "mouseover"]), J("onPointerEnter", ["pointerout", "pointerover"]), J("onPointerLeave", ["pointerout", "pointerover"]), L("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), L("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), L("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), L("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), L("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), L("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var cs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cy = new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));
  function Rc(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, me(u, r, void 0, n), n.currentTarget = null;
  }
  function Tc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = u.length - 1; 0 <= m; m--) {
          var b = u[m], T = b.instance, H = b.currentTarget;
          if (b = b.listener, T !== d && c.isPropagationStopped()) break e;
          Rc(c, b, H), d = T;
        }
        else for (m = 0; m < u.length; m++) {
          if (b = u[m], T = b.instance, H = b.currentTarget, b = b.listener, T !== d && c.isPropagationStopped()) break e;
          Rc(c, b, H), d = T;
        }
      }
    }
    if (vi) throw n = ji, vi = !1, ji = null, n;
  }
  function It(n, r) {
    var l = r[Cd];
    l === void 0 && (l = r[Cd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (Sd(r, n, 2, !1), l.add(u));
  }
  function gl(n, r, l) {
    var u = 0;
    r && (u |= 4), Sd(l, n, u, r);
  }
  var fs = "_reactListening" + Math.random().toString(36).slice(2);
  function ds(n) {
    if (!n[fs]) {
      n[fs] = !0, N.forEach(function(l) {
        l !== "selectionchange" && (Cy.has(l) || gl(l, !1, n), gl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[fs] || (r[fs] = !0, gl("selectionchange", !1, r));
    }
  }
  function Sd(n, r, l, u) {
    switch (es(r)) {
      case 1:
        var c = Bi;
        break;
      case 4:
        c = qo;
        break;
      default:
        c = hl;
    }
    l = c.bind(null, r, l, n), c = void 0, !ga || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Ed(n, r, l, u, c) {
    var d = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var m = u.tag;
      if (m === 3 || m === 4) {
        var b = u.stateNode.containerInfo;
        if (b === c || b.nodeType === 8 && b.parentNode === c) break;
        if (m === 4) for (m = u.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; b !== null; ) {
          if (m = so(b), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            u = d = m;
            continue e;
          }
          b = b.parentNode;
        }
      }
      u = u.return;
    }
    Xl(function() {
      var H = d, ae = un(l), ie = [];
      e: {
        var re = Vv.get(n);
        if (re !== void 0) {
          var we = Ge, De = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              we = cd;
              break;
            case "focusin":
              De = "focus", we = ao;
              break;
            case "focusout":
              De = "blur", we = ao;
              break;
            case "beforeblur":
            case "afterblur":
              we = ao;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              we = kn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              we = ts;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              we = Cc;
              break;
            case Uv:
            case jv:
            case Fv:
              we = ud;
              break;
            case Hv:
              we = ea;
              break;
            case "scroll":
              we = $t;
              break;
            case "wheel":
              we = Fn;
              break;
            case "copy":
            case "cut":
            case "paste":
              we = sd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              we = Ec;
          }
          var Le = (r & 4) !== 0, Ln = !Le && n === "scroll", M = Le ? re !== null ? re + "Capture" : null : re;
          Le = [];
          for (var k = H, U; k !== null; ) {
            U = k;
            var se = U.stateNode;
            if (U.tag === 5 && se !== null && (U = se, M !== null && (se = di(k, M), se != null && Le.push(iu(k, se, U)))), Ln) break;
            k = k.return;
          }
          0 < Le.length && (re = new we(re, De, null, l, ae), ie.push({ event: re, listeners: Le }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (re = n === "mouseover" || n === "pointerover", we = n === "mouseout" || n === "pointerout", re && l !== er && (De = l.relatedTarget || l.fromElement) && (so(De) || De[Gi])) break e;
          if ((we || re) && (re = ae.window === ae ? ae : (re = ae.ownerDocument) ? re.defaultView || re.parentWindow : window, we ? (De = l.relatedTarget || l.toElement, we = H, De = De ? so(De) : null, De !== null && (Ln = Se(De), De !== Ln || De.tag !== 5 && De.tag !== 6) && (De = null)) : (we = null, De = H), we !== De)) {
            if (Le = kn, se = "onMouseLeave", M = "onMouseEnter", k = "mouse", (n === "pointerout" || n === "pointerover") && (Le = Ec, se = "onPointerLeave", M = "onPointerEnter", k = "pointer"), Ln = we == null ? re : Ue(we), U = De == null ? re : Ue(De), re = new Le(se, k + "leave", we, l, ae), re.target = Ln, re.relatedTarget = U, se = null, so(ae) === H && (Le = new Le(M, k + "enter", De, l, ae), Le.target = U, Le.relatedTarget = Ln, se = Le), Ln = se, we && De) t: {
              for (Le = we, M = De, k = 0, U = Le; U; U = lo(U)) k++;
              for (U = 0, se = M; se; se = lo(se)) U++;
              for (; 0 < k - U; ) Le = lo(Le), k--;
              for (; 0 < U - k; ) M = lo(M), U--;
              for (; k--; ) {
                if (Le === M || M !== null && Le === M.alternate) break t;
                Le = lo(Le), M = lo(M);
              }
              Le = null;
            }
            else Le = null;
            we !== null && _c(ie, re, we, Le, !1), De !== null && Ln !== null && _c(ie, Ln, De, Le, !0);
          }
        }
        e: {
          if (re = H ? Ue(H) : window, we = re.nodeName && re.nodeName.toLowerCase(), we === "select" || we === "input" && re.type === "file") var Ee = Rv;
          else if (bv(re)) if (Tv) Ee = Sy;
          else {
            Ee = gy;
            var He = yy;
          }
          else (we = re.nodeName) && we.toLowerCase() === "input" && (re.type === "checkbox" || re.type === "radio") && (Ee = Ov);
          if (Ee && (Ee = Ee(n, H))) {
            wv(ie, Ee, l, ae);
            break e;
          }
          He && He(n, re, H), n === "focusout" && (He = re._wrapperState) && He.controlled && re.type === "number" && Xa(re, "number", re.value);
        }
        switch (He = H ? Ue(H) : window, n) {
          case "focusin":
            (bv(He) || He.contentEditable === "true") && (ru = He, hd = H, ls = null);
            break;
          case "focusout":
            ls = hd = ru = null;
            break;
          case "mousedown":
            md = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            md = !1, Av(ie, l, ae);
            break;
          case "selectionchange":
            if (nu) break;
          case "keydown":
          case "keyup":
            Av(ie, l, ae);
        }
        var $e;
        if (rs) e: {
          switch (n) {
            case "compositionstart":
              var Je = "onCompositionStart";
              break e;
            case "compositionend":
              Je = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Je = "onCompositionUpdate";
              break e;
          }
          Je = void 0;
        }
        else Zo ? xc(n, l) && (Je = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Je = "onCompositionStart");
        Je && (Jo && l.locale !== "ko" && (Zo || Je !== "onCompositionStart" ? Je === "onCompositionEnd" && Zo && ($e = w()) : (Ua = ae, Xo = "value" in Ua ? Ua.value : Ua.textContent, Zo = !0)), He = ps(H, Je), 0 < He.length && (Je = new Sc(Je, n, null, l, ae), ie.push({ event: Je, listeners: He }), $e ? Je.data = $e : ($e = Cv(l), $e !== null && (Je.data = $e)))), ($e = vy ? hy(n, l) : xv(n, l)) && (H = ps(H, "onBeforeInput"), 0 < H.length && (ae = new Sc("onBeforeInput", "beforeinput", null, l, ae), ie.push({ event: ae, listeners: H }), ae.data = $e));
      }
      Tc(ie, r);
    });
  }
  function iu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ps(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = di(n, l), d != null && u.unshift(iu(n, d, c)), d = di(n, r), d != null && u.push(iu(n, d, c))), n = n.return;
    }
    return u;
  }
  function lo(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function _c(n, r, l, u, c) {
    for (var d = r._reactName, m = []; l !== null && l !== u; ) {
      var b = l, T = b.alternate, H = b.stateNode;
      if (T !== null && T === u) break;
      b.tag === 5 && H !== null && (b = H, c ? (T = di(l, d), T != null && m.unshift(iu(l, T, b))) : c || (T = di(l, d), T != null && m.push(iu(l, T, b)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var xy = /\r\n?/g, Pv = /\u0000|\uFFFD/g;
  function Bv(n) {
    return (typeof n == "string" ? n : "" + n).replace(xy, `
`).replace(Pv, "");
  }
  function kc(n, r, l) {
    if (r = Bv(r), Bv(n) !== r && l) throw Error(E(425));
  }
  function Dc() {
  }
  var oo = null, vs = null;
  function uo(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Oc = typeof setTimeout == "function" ? setTimeout : void 0, $v = typeof clearTimeout == "function" ? clearTimeout : void 0, Nc = typeof Promise == "function" ? Promise : void 0, by = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nc < "u" ? function(n) {
    return Nc.resolve(null).then(n).catch(lu);
  } : Oc;
  function lu(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ou(n, r) {
    var l = r, u = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (u === 0) {
          n.removeChild(c), za(r);
          return;
        }
        u--;
      } else l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = c;
    } while (l);
    za(r);
  }
  function ri(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Lc(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var uu = Math.random().toString(36).slice(2), ja = "__reactFiber$" + uu, hs = "__reactProps$" + uu, Gi = "__reactContainer$" + uu, Cd = "__reactEvents$" + uu, xd = "__reactListeners$" + uu, su = "__reactHandles$" + uu;
  function so(n) {
    var r = n[ja];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Gi] || l[ja]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Lc(n); n !== null; ) {
          if (l = n[ja]) return l;
          n = Lc(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ms(n) {
    return n = n[ja] || n[Gi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ue(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(E(33));
  }
  function Qi(n) {
    return n[hs] || null;
  }
  var wn = [], bt = -1;
  function ta(n) {
    return { current: n };
  }
  function Gt(n) {
    0 > bt || (n.current = wn[bt], wn[bt] = null, bt--);
  }
  function ln(n, r) {
    bt++, wn[bt] = n.current, n.current = r;
  }
  var mt = {}, gn = ta(mt), Hn = ta(!1), Fa = mt;
  function Ea(n, r) {
    var l = n.type.contextTypes;
    if (!l) return mt;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Rn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ci() {
    Gt(Hn), Gt(gn);
  }
  function Mc(n, r, l) {
    if (gn.current !== mt) throw Error(E(168));
    ln(gn, r), ln(Hn, l);
  }
  function Iv(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return l;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(E(108, Nt(n) || "Unknown", c));
    return pe({}, l, u);
  }
  function co(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || mt, Fa = gn.current, ln(gn, n), ln(Hn, Hn.current), !0;
  }
  function Dr(n, r, l) {
    var u = n.stateNode;
    if (!u) throw Error(E(169));
    l ? (n = Iv(n, r, Fa), u.__reactInternalMemoizedMergedChildContext = n, Gt(Hn), Gt(gn), ln(gn, n)) : Gt(Hn), ln(Hn, l);
  }
  var ai = null, ys = !1, gs = !1;
  function Sl(n) {
    ai === null ? ai = [n] : ai.push(n);
  }
  function bd(n) {
    ys = !0, Sl(n);
  }
  function jr() {
    if (!gs && ai !== null) {
      gs = !0;
      var n = 0, r = Lt;
      try {
        var l = ai;
        for (Lt = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        ai = null, ys = !1;
      } catch (c) {
        throw ai !== null && (ai = ai.slice(n + 1)), sn(it, jr), c;
      } finally {
        Lt = r, gs = !1;
      }
    }
    return null;
  }
  var El = [], Cl = 0, cu = null, xl = 0, fr = [], Vn = 0, fo = null, Fr = 1, xi = "";
  function bl(n, r) {
    El[Cl++] = xl, El[Cl++] = cu, cu = n, xl = r;
  }
  function Yv(n, r, l) {
    fr[Vn++] = Fr, fr[Vn++] = xi, fr[Vn++] = fo, fo = n;
    var u = Fr;
    n = xi;
    var c = 32 - zr(u) - 1;
    u &= ~(1 << c), l += 1;
    var d = 32 - zr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (u & (1 << m) - 1).toString(32), u >>= m, c -= m, Fr = 1 << 32 - zr(r) + c | l << c | u, xi = d + n;
    } else Fr = 1 << d | l << c | u, xi = n;
  }
  function wd(n) {
    n.return !== null && (bl(n, 1), Yv(n, 1, 0));
  }
  function zc(n) {
    for (; n === cu; ) cu = El[--Cl], El[Cl] = null, xl = El[--Cl], El[Cl] = null;
    for (; n === fo; ) fo = fr[--Vn], fr[Vn] = null, xi = fr[--Vn], fr[Vn] = null, Fr = fr[--Vn], fr[Vn] = null;
  }
  var na = null, ra = null, hn = !1, ii = null;
  function Rd(n, r) {
    var l = $a(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Td(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, na = n, ra = ri(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, na = n, ra = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = fo !== null ? { id: Fr, overflow: xi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = $a(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, na = n, ra = null, !0) : !1;
      default:
        return !1;
    }
  }
  function _d(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function kd(n) {
    if (hn) {
      var r = ra;
      if (r) {
        var l = r;
        if (!Td(n, r)) {
          if (_d(n)) throw Error(E(418));
          r = ri(l.nextSibling);
          var u = na;
          r && Td(n, r) ? Rd(u, l) : (n.flags = n.flags & -4097 | 2, hn = !1, na = n);
        }
      } else {
        if (_d(n)) throw Error(E(418));
        n.flags = n.flags & -4097 | 2, hn = !1, na = n;
      }
    }
  }
  function Wv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    na = n;
  }
  function Dn(n) {
    if (n !== na) return !1;
    if (!hn) return Wv(n), hn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !uo(n.type, n.memoizedProps)), r && (r = ra)) {
      if (_d(n)) throw Gv(), Error(E(418));
      for (; r; ) Rd(n, r), r = ri(r.nextSibling);
    }
    if (Wv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(E(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ra = ri(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ra = null;
      }
    } else ra = na ? ri(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Gv() {
    for (var n = ra; n; ) n = ri(n.nextSibling);
  }
  function qi() {
    ra = na = null, hn = !1;
  }
  function Ss(n) {
    ii === null ? ii = [n] : ii.push(n);
  }
  var po = ze.ReactCurrentBatchConfig;
  function Es(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(E(309));
          var u = l.stateNode;
        }
        if (!u) throw Error(E(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var b = c.refs;
          m === null ? delete b[d] : b[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(E(284));
      if (!l._owner) throw Error(E(290, n));
    }
    return n;
  }
  function fu(n, r) {
    throw n = Object.prototype.toString.call(r), Error(E(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Qv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function qv(n) {
    function r(M, k) {
      if (n) {
        var U = M.deletions;
        U === null ? (M.deletions = [k], M.flags |= 16) : U.push(k);
      }
    }
    function l(M, k) {
      if (!n) return null;
      for (; k !== null; ) r(M, k), k = k.sibling;
      return null;
    }
    function u(M, k) {
      for (M = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? M.set(k.key, k) : M.set(k.index, k), k = k.sibling;
      return M;
    }
    function c(M, k) {
      return M = zl(M, k), M.index = 0, M.sibling = null, M;
    }
    function d(M, k, U) {
      return M.index = U, n ? (U = M.alternate, U !== null ? (U = U.index, U < k ? (M.flags |= 2, k) : U) : (M.flags |= 2, k)) : (M.flags |= 1048576, k);
    }
    function m(M) {
      return n && M.alternate === null && (M.flags |= 2), M;
    }
    function b(M, k, U, se) {
      return k === null || k.tag !== 6 ? (k = Oo(U, M.mode, se), k.return = M, k) : (k = c(k, U), k.return = M, k);
    }
    function T(M, k, U, se) {
      var Ee = U.type;
      return Ee === dt ? ae(M, k, U.props.children, se, U.key) : k !== null && (k.elementType === Ee || typeof Ee == "object" && Ee !== null && Ee.$$typeof === ct && Qv(Ee) === k.type) ? (se = c(k, U.props), se.ref = Es(M, k, U), se.return = M, se) : (se = Ef(U.type, U.key, U.props, null, M.mode, se), se.ref = Es(M, k, U), se.return = M, se);
    }
    function H(M, k, U, se) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== U.containerInfo || k.stateNode.implementation !== U.implementation ? (k = ip(U, M.mode, se), k.return = M, k) : (k = c(k, U.children || []), k.return = M, k);
    }
    function ae(M, k, U, se, Ee) {
      return k === null || k.tag !== 7 ? (k = Al(U, M.mode, se, Ee), k.return = M, k) : (k = c(k, U), k.return = M, k);
    }
    function ie(M, k, U) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = Oo("" + k, M.mode, U), k.return = M, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Rt:
            return U = Ef(k.type, k.key, k.props, null, M.mode, U), U.ref = Es(M, null, k), U.return = M, U;
          case Ne:
            return k = ip(k, M.mode, U), k.return = M, k;
          case ct:
            var se = k._init;
            return ie(M, se(k._payload), U);
        }
        if (Mr(k) || xe(k)) return k = Al(k, M.mode, U, null), k.return = M, k;
        fu(M, k);
      }
      return null;
    }
    function re(M, k, U, se) {
      var Ee = k !== null ? k.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number") return Ee !== null ? null : b(M, k, "" + U, se);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Rt:
            return U.key === Ee ? T(M, k, U, se) : null;
          case Ne:
            return U.key === Ee ? H(M, k, U, se) : null;
          case ct:
            return Ee = U._init, re(
              M,
              k,
              Ee(U._payload),
              se
            );
        }
        if (Mr(U) || xe(U)) return Ee !== null ? null : ae(M, k, U, se, null);
        fu(M, U);
      }
      return null;
    }
    function we(M, k, U, se, Ee) {
      if (typeof se == "string" && se !== "" || typeof se == "number") return M = M.get(U) || null, b(k, M, "" + se, Ee);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case Rt:
            return M = M.get(se.key === null ? U : se.key) || null, T(k, M, se, Ee);
          case Ne:
            return M = M.get(se.key === null ? U : se.key) || null, H(k, M, se, Ee);
          case ct:
            var He = se._init;
            return we(M, k, U, He(se._payload), Ee);
        }
        if (Mr(se) || xe(se)) return M = M.get(U) || null, ae(k, M, se, Ee, null);
        fu(k, se);
      }
      return null;
    }
    function De(M, k, U, se) {
      for (var Ee = null, He = null, $e = k, Je = k = 0, qn = null; $e !== null && Je < U.length; Je++) {
        $e.index > Je ? (qn = $e, $e = null) : qn = $e.sibling;
        var jt = re(M, $e, U[Je], se);
        if (jt === null) {
          $e === null && ($e = qn);
          break;
        }
        n && $e && jt.alternate === null && r(M, $e), k = d(jt, k, Je), He === null ? Ee = jt : He.sibling = jt, He = jt, $e = qn;
      }
      if (Je === U.length) return l(M, $e), hn && bl(M, Je), Ee;
      if ($e === null) {
        for (; Je < U.length; Je++) $e = ie(M, U[Je], se), $e !== null && (k = d($e, k, Je), He === null ? Ee = $e : He.sibling = $e, He = $e);
        return hn && bl(M, Je), Ee;
      }
      for ($e = u(M, $e); Je < U.length; Je++) qn = we($e, M, Je, U[Je], se), qn !== null && (n && qn.alternate !== null && $e.delete(qn.key === null ? Je : qn.key), k = d(qn, k, Je), He === null ? Ee = qn : He.sibling = qn, He = qn);
      return n && $e.forEach(function(jl) {
        return r(M, jl);
      }), hn && bl(M, Je), Ee;
    }
    function Le(M, k, U, se) {
      var Ee = xe(U);
      if (typeof Ee != "function") throw Error(E(150));
      if (U = Ee.call(U), U == null) throw Error(E(151));
      for (var He = Ee = null, $e = k, Je = k = 0, qn = null, jt = U.next(); $e !== null && !jt.done; Je++, jt = U.next()) {
        $e.index > Je ? (qn = $e, $e = null) : qn = $e.sibling;
        var jl = re(M, $e, jt.value, se);
        if (jl === null) {
          $e === null && ($e = qn);
          break;
        }
        n && $e && jl.alternate === null && r(M, $e), k = d(jl, k, Je), He === null ? Ee = jl : He.sibling = jl, He = jl, $e = qn;
      }
      if (jt.done) return l(
        M,
        $e
      ), hn && bl(M, Je), Ee;
      if ($e === null) {
        for (; !jt.done; Je++, jt = U.next()) jt = ie(M, jt.value, se), jt !== null && (k = d(jt, k, Je), He === null ? Ee = jt : He.sibling = jt, He = jt);
        return hn && bl(M, Je), Ee;
      }
      for ($e = u(M, $e); !jt.done; Je++, jt = U.next()) jt = we($e, M, Je, jt.value, se), jt !== null && (n && jt.alternate !== null && $e.delete(jt.key === null ? Je : jt.key), k = d(jt, k, Je), He === null ? Ee = jt : He.sibling = jt, He = jt);
      return n && $e.forEach(function(jy) {
        return r(M, jy);
      }), hn && bl(M, Je), Ee;
    }
    function Ln(M, k, U, se) {
      if (typeof U == "object" && U !== null && U.type === dt && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Rt:
            e: {
              for (var Ee = U.key, He = k; He !== null; ) {
                if (He.key === Ee) {
                  if (Ee = U.type, Ee === dt) {
                    if (He.tag === 7) {
                      l(M, He.sibling), k = c(He, U.props.children), k.return = M, M = k;
                      break e;
                    }
                  } else if (He.elementType === Ee || typeof Ee == "object" && Ee !== null && Ee.$$typeof === ct && Qv(Ee) === He.type) {
                    l(M, He.sibling), k = c(He, U.props), k.ref = Es(M, He, U), k.return = M, M = k;
                    break e;
                  }
                  l(M, He);
                  break;
                } else r(M, He);
                He = He.sibling;
              }
              U.type === dt ? (k = Al(U.props.children, M.mode, se, U.key), k.return = M, M = k) : (se = Ef(U.type, U.key, U.props, null, M.mode, se), se.ref = Es(M, k, U), se.return = M, M = se);
            }
            return m(M);
          case Ne:
            e: {
              for (He = U.key; k !== null; ) {
                if (k.key === He) if (k.tag === 4 && k.stateNode.containerInfo === U.containerInfo && k.stateNode.implementation === U.implementation) {
                  l(M, k.sibling), k = c(k, U.children || []), k.return = M, M = k;
                  break e;
                } else {
                  l(M, k);
                  break;
                }
                else r(M, k);
                k = k.sibling;
              }
              k = ip(U, M.mode, se), k.return = M, M = k;
            }
            return m(M);
          case ct:
            return He = U._init, Ln(M, k, He(U._payload), se);
        }
        if (Mr(U)) return De(M, k, U, se);
        if (xe(U)) return Le(M, k, U, se);
        fu(M, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, k !== null && k.tag === 6 ? (l(M, k.sibling), k = c(k, U), k.return = M, M = k) : (l(M, k), k = Oo(U, M.mode, se), k.return = M, M = k), m(M)) : l(M, k);
    }
    return Ln;
  }
  var li = qv(!0), dr = qv(!1), he = ta(null), Ca = null, Or = null, Dd = null;
  function Od() {
    Dd = Or = Ca = null;
  }
  function Nd(n) {
    var r = he.current;
    Gt(he), n._currentValue = r;
  }
  function Ld(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function du(n, r) {
    Ca = n, Dd = Or = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (ar = !0), n.firstContext = null);
  }
  function Qt(n) {
    var r = n._currentValue;
    if (Dd !== n) if (n = { context: n, memoizedValue: r, next: null }, Or === null) {
      if (Ca === null) throw Error(E(308));
      Or = n, Ca.dependencies = { lanes: 0, firstContext: n };
    } else Or = Or.next = n;
    return r;
  }
  var vo = null;
  function Md(n) {
    vo === null ? vo = [n] : vo.push(n);
  }
  function Kv(n, r, l, u) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Md(r)) : (l.next = c.next, c.next = l), r.interleaved = l, bi(n, u);
  }
  function bi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ha = !1;
  function wl(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Xv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ki(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Rl(n, r, l) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (wt & 2) !== 0) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, bi(n, l);
    }
    return c = u.interleaved, c === null ? (r.next = r, Md(u)) : (r.next = c.next, c.next = r), u.interleaved = r, bi(n, l);
  }
  function Ac(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, Ju(n, l);
    }
  }
  function Jv(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Uc(n, r, l, u) {
    var c = n.updateQueue;
    Ha = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, b = c.shared.pending;
    if (b !== null) {
      c.shared.pending = null;
      var T = b, H = T.next;
      T.next = null, m === null ? d = H : m.next = H, m = T;
      var ae = n.alternate;
      ae !== null && (ae = ae.updateQueue, b = ae.lastBaseUpdate, b !== m && (b === null ? ae.firstBaseUpdate = H : b.next = H, ae.lastBaseUpdate = T));
    }
    if (d !== null) {
      var ie = c.baseState;
      m = 0, ae = H = T = null, b = d;
      do {
        var re = b.lane, we = b.eventTime;
        if ((u & re) === re) {
          ae !== null && (ae = ae.next = {
            eventTime: we,
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          });
          e: {
            var De = n, Le = b;
            switch (re = r, we = l, Le.tag) {
              case 1:
                if (De = Le.payload, typeof De == "function") {
                  ie = De.call(we, ie, re);
                  break e;
                }
                ie = De;
                break e;
              case 3:
                De.flags = De.flags & -65537 | 128;
              case 0:
                if (De = Le.payload, re = typeof De == "function" ? De.call(we, ie, re) : De, re == null) break e;
                ie = pe({}, ie, re);
                break e;
              case 2:
                Ha = !0;
            }
          }
          b.callback !== null && b.lane !== 0 && (n.flags |= 64, re = c.effects, re === null ? c.effects = [b] : re.push(b));
        } else we = { eventTime: we, lane: re, tag: b.tag, payload: b.payload, callback: b.callback, next: null }, ae === null ? (H = ae = we, T = ie) : ae = ae.next = we, m |= re;
        if (b = b.next, b === null) {
          if (b = c.shared.pending, b === null) break;
          re = b, b = re.next, re.next = null, c.lastBaseUpdate = re, c.shared.pending = null;
        }
      } while (!0);
      if (ae === null && (T = ie), c.baseState = T, c.firstBaseUpdate = H, c.lastBaseUpdate = ae, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      wo |= m, n.lanes = m, n.memoizedState = ie;
    }
  }
  function zd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = l, typeof c != "function") throw Error(E(191, c));
        c.call(u);
      }
    }
  }
  var pu = {}, wi = ta(pu), Cs = ta(pu), xs = ta(pu);
  function ho(n) {
    if (n === pu) throw Error(E(174));
    return n;
  }
  function Ad(n, r) {
    switch (ln(xs, r), ln(Cs, n), ln(wi, pu), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sr(r, n);
    }
    Gt(wi), ln(wi, r);
  }
  function vu() {
    Gt(wi), Gt(Cs), Gt(xs);
  }
  function Ud(n) {
    ho(xs.current);
    var r = ho(wi.current), l = sr(r, n.type);
    r !== l && (ln(Cs, n), ln(wi, l));
  }
  function jd(n) {
    Cs.current === n && (Gt(wi), Gt(Cs));
  }
  var Sn = ta(0);
  function jc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Fd = [];
  function bs() {
    for (var n = 0; n < Fd.length; n++) Fd[n]._workInProgressVersionPrimary = null;
    Fd.length = 0;
  }
  var je = ze.ReactCurrentDispatcher, Et = ze.ReactCurrentBatchConfig, kt = 0, lt = null, tn = null, Wn = null, Fc = !1, ws = !1, Rs = 0, Hd = 0;
  function G() {
    throw Error(E(321));
  }
  function Pn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ni(n[l], r[l])) return !1;
    return !0;
  }
  function Ye(n, r, l, u, c, d) {
    if (kt = d, lt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, je.current = n === null || n.memoizedState === null ? Zc : ef, n = l(u, c), ws) {
      d = 0;
      do {
        if (ws = !1, Rs = 0, 25 <= d) throw Error(E(301));
        d += 1, Wn = tn = null, r.updateQueue = null, je.current = Os, n = l(u, c);
      } while (ws);
    }
    if (je.current = qt, r = tn !== null && tn.next !== null, kt = 0, Wn = tn = lt = null, Fc = !1, r) throw Error(E(300));
    return n;
  }
  function Tl() {
    var n = Rs !== 0;
    return Rs = 0, n;
  }
  function nr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Wn === null ? lt.memoizedState = Wn = n : Wn = Wn.next = n, Wn;
  }
  function rr() {
    if (tn === null) {
      var n = lt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = tn.next;
    var r = Wn === null ? lt.memoizedState : Wn.next;
    if (r !== null) Wn = r, tn = n;
    else {
      if (n === null) throw Error(E(310));
      tn = n, n = { memoizedState: tn.memoizedState, baseState: tn.baseState, baseQueue: tn.baseQueue, queue: tn.queue, next: null }, Wn === null ? lt.memoizedState = Wn = n : Wn = Wn.next = n;
    }
    return Wn;
  }
  function aa(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function mo(n) {
    var r = rr(), l = r.queue;
    if (l === null) throw Error(E(311));
    l.lastRenderedReducer = n;
    var u = tn, c = u.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      u.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var b = m = null, T = null, H = d;
      do {
        var ae = H.lane;
        if ((kt & ae) === ae) T !== null && (T = T.next = { lane: 0, action: H.action, hasEagerState: H.hasEagerState, eagerState: H.eagerState, next: null }), u = H.hasEagerState ? H.eagerState : n(u, H.action);
        else {
          var ie = {
            lane: ae,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          };
          T === null ? (b = T = ie, m = u) : T = T.next = ie, lt.lanes |= ae, wo |= ae;
        }
        H = H.next;
      } while (H !== null && H !== d);
      T === null ? m = u : T.next = b, ni(u, r.memoizedState) || (ar = !0), r.memoizedState = u, r.baseState = m, r.baseQueue = T, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, lt.lanes |= d, wo |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function _l(n) {
    var r = rr(), l = r.queue;
    if (l === null) throw Error(E(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ni(d, r.memoizedState) || (ar = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, u];
  }
  function hu() {
  }
  function Hc(n, r) {
    var l = lt, u = rr(), c = r(), d = !ni(u.memoizedState, c);
    if (d && (u.memoizedState = c, ar = !0), u = u.queue, Ts(Bc.bind(null, l, u, n), [n]), u.getSnapshot !== r || d || Wn !== null && Wn.memoizedState.tag & 1) {
      if (l.flags |= 2048, yo(9, Pc.bind(null, l, u, c, r), void 0, null), Bn === null) throw Error(E(349));
      (kt & 30) !== 0 || Vc(l, r, c);
    }
    return c;
  }
  function Vc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = lt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, lt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Pc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, $c(r) && Ic(n);
  }
  function Bc(n, r, l) {
    return l(function() {
      $c(r) && Ic(n);
    });
  }
  function $c(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ni(n, l);
    } catch {
      return !0;
    }
  }
  function Ic(n) {
    var r = bi(n, 1);
    r !== null && Ra(r, n, 1, -1);
  }
  function Yc(n) {
    var r = nr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: aa, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ds.bind(null, lt, n), [r.memoizedState, n];
  }
  function yo(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = lt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, lt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Wc() {
    return rr().memoizedState;
  }
  function mu(n, r, l, u) {
    var c = nr();
    lt.flags |= n, c.memoizedState = yo(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function yu(n, r, l, u) {
    var c = rr();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (tn !== null) {
      var m = tn.memoizedState;
      if (d = m.destroy, u !== null && Pn(u, m.deps)) {
        c.memoizedState = yo(r, l, d, u);
        return;
      }
    }
    lt.flags |= n, c.memoizedState = yo(1 | r, l, d, u);
  }
  function Gc(n, r) {
    return mu(8390656, 8, n, r);
  }
  function Ts(n, r) {
    return yu(2048, 8, n, r);
  }
  function Qc(n, r) {
    return yu(4, 2, n, r);
  }
  function qc(n, r) {
    return yu(4, 4, n, r);
  }
  function _s(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function go(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yu(4, 4, _s.bind(null, r, n), l);
  }
  function ks() {
  }
  function Kc(n, r) {
    var l = rr();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Pn(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function Xc(n, r) {
    var l = rr();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Pn(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Jc(n, r, l) {
    return (kt & 21) === 0 ? (n.baseState && (n.baseState = !1, ar = !0), n.memoizedState = l) : (ni(l, r) || (l = Jl(), lt.lanes |= l, wo |= l, n.baseState = !0), r);
  }
  function Zv(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = Et.transition;
    Et.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, Et.transition = u;
    }
  }
  function gu() {
    return rr().memoizedState;
  }
  function eh(n, r, l) {
    var u = wa(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, kl(n)) ia(r, l);
    else if (l = Kv(n, r, l, u), l !== null) {
      var c = on();
      Ra(l, n, u, c), th(l, r, u);
    }
  }
  function Ds(n, r, l) {
    var u = wa(n), c = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (kl(n)) ia(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, b = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = b, ni(b, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Md(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Kv(n, r, c, u), l !== null && (c = on(), Ra(l, n, u, c), th(l, r, u));
    }
  }
  function kl(n) {
    var r = n.alternate;
    return n === lt || r !== null && r === lt;
  }
  function ia(n, r) {
    ws = Fc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function th(n, r, l) {
    if ((l & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, Ju(n, l);
    }
  }
  var qt = { readContext: Qt, useCallback: G, useContext: G, useEffect: G, useImperativeHandle: G, useInsertionEffect: G, useLayoutEffect: G, useMemo: G, useReducer: G, useRef: G, useState: G, useDebugValue: G, useDeferredValue: G, useTransition: G, useMutableSource: G, useSyncExternalStore: G, useId: G, unstable_isNewReconciler: !1 }, Zc = { readContext: Qt, useCallback: function(n, r) {
    return nr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Qt, useEffect: Gc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, mu(
      4194308,
      4,
      _s.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return mu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return mu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = nr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = nr();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = eh.bind(null, lt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = nr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Yc, useDebugValue: ks, useDeferredValue: function(n) {
    return nr().memoizedState = n;
  }, useTransition: function() {
    var n = Yc(!1), r = n[0];
    return n = Zv.bind(null, n[1]), nr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = lt, c = nr();
    if (hn) {
      if (l === void 0) throw Error(E(407));
      l = l();
    } else {
      if (l = r(), Bn === null) throw Error(E(349));
      (kt & 30) !== 0 || Vc(u, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Gc(Bc.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, yo(9, Pc.bind(null, u, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = nr(), r = Bn.identifierPrefix;
    if (hn) {
      var l = xi, u = Fr;
      l = (u & ~(1 << 32 - zr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Rs++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Hd++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ef = {
    readContext: Qt,
    useCallback: Kc,
    useContext: Qt,
    useEffect: Ts,
    useImperativeHandle: go,
    useInsertionEffect: Qc,
    useLayoutEffect: qc,
    useMemo: Xc,
    useReducer: mo,
    useRef: Wc,
    useState: function() {
      return mo(aa);
    },
    useDebugValue: ks,
    useDeferredValue: function(n) {
      var r = rr();
      return Jc(r, tn.memoizedState, n);
    },
    useTransition: function() {
      var n = mo(aa)[0], r = rr().memoizedState;
      return [n, r];
    },
    useMutableSource: hu,
    useSyncExternalStore: Hc,
    useId: gu,
    unstable_isNewReconciler: !1
  }, Os = { readContext: Qt, useCallback: Kc, useContext: Qt, useEffect: Ts, useImperativeHandle: go, useInsertionEffect: Qc, useLayoutEffect: qc, useMemo: Xc, useReducer: _l, useRef: Wc, useState: function() {
    return _l(aa);
  }, useDebugValue: ks, useDeferredValue: function(n) {
    var r = rr();
    return tn === null ? r.memoizedState = n : Jc(r, tn.memoizedState, n);
  }, useTransition: function() {
    var n = _l(aa)[0], r = rr().memoizedState;
    return [n, r];
  }, useMutableSource: hu, useSyncExternalStore: Hc, useId: gu, unstable_isNewReconciler: !1 };
  function la(n, r) {
    if (n && n.defaultProps) {
      r = pe({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Vd(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : pe({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var tf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Se(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = on(), c = wa(n), d = Ki(u, c);
    d.payload = r, l != null && (d.callback = l), r = Rl(n, d, c), r !== null && (Ra(r, n, c, u), Ac(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = on(), c = wa(n), d = Ki(u, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Rl(n, d, c), r !== null && (Ra(r, n, c, u), Ac(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = on(), u = wa(n), c = Ki(l, u);
    c.tag = 2, r != null && (c.callback = r), r = Rl(n, c, u), r !== null && (Ra(r, n, u, l), Ac(r, n, u));
  } };
  function nh(n, r, l, u, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, m) : r.prototype && r.prototype.isPureReactComponent ? !is(l, u) || !is(c, d) : !0;
  }
  function rh(n, r, l) {
    var u = !1, c = mt, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Qt(d) : (c = Rn(r) ? Fa : gn.current, u = r.contextTypes, d = (u = u != null) ? Ea(n, c) : mt), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = tf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function nf(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && tf.enqueueReplaceState(r, r.state, null);
  }
  function Pd(n, r, l, u) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, wl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Qt(d) : (d = Rn(r) ? Fa : gn.current, c.context = Ea(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Vd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && tf.enqueueReplaceState(c, c.state, null), Uc(n, l, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Dl(n, r) {
    try {
      var l = "", u = r;
      do
        l += Ze(u), u = u.return;
      while (u);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function rf(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Bd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var wy = typeof WeakMap == "function" ? WeakMap : Map;
  function Ns(n, r, l) {
    l = Ki(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      Nl || (Nl = !0, Hs = u), Bd(n, r);
    }, l;
  }
  function ah(n, r, l) {
    l = Ki(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      l.payload = function() {
        return u(c);
      }, l.callback = function() {
        Bd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Bd(n, r), typeof u != "function" && (Ba === null ? Ba = /* @__PURE__ */ new Set([this]) : Ba.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function $d(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new wy();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(l) || (c.add(l), n = np.bind(null, n, r, l), r.then(n, n));
  }
  function Id(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function ih(n, r, l, u, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ki(-1, 1), r.tag = 2, Rl(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var So = ze.ReactCurrentOwner, ar = !1;
  function On(n, r, l, u) {
    r.child = n === null ? dr(r, null, l, u) : li(r, n.child, l, u);
  }
  function af(n, r, l, u, c) {
    l = l.render;
    var d = r.ref;
    return du(r, c), u = Ye(n, r, l, u, d, c), l = Tl(), n !== null && !ar ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, pr(n, r, c)) : (hn && l && wd(r), r.flags |= 1, On(n, r, u, c), r.child);
  }
  function oa(n, r, l, u, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !ap(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Eo(n, r, d, u, c)) : (n = Ef(l.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : is, l(m, u) && n.ref === r.ref) return pr(n, r, c);
    }
    return r.flags |= 1, n = zl(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Eo(n, r, l, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (is(d, u) && n.ref === r.ref) if (ar = !1, r.pendingProps = u = d, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (ar = !0);
      else return r.lanes = n.lanes, pr(n, r, c);
    }
    return lf(n, r, l, u, c);
  }
  function st(n, r, l) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ln(xu, ba), ba |= l;
    else {
      if ((l & 1073741824) === 0) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, ln(xu, ba), ba |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : l, ln(xu, ba), ba |= u;
    }
    else d !== null ? (u = d.baseLanes | l, r.memoizedState = null) : u = l, ln(xu, ba), ba |= u;
    return On(n, r, c, l), r.child;
  }
  function Ls(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function lf(n, r, l, u, c) {
    var d = Rn(l) ? Fa : gn.current;
    return d = Ea(r, d), du(r, c), l = Ye(n, r, l, u, d, c), u = Tl(), n !== null && !ar ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, pr(n, r, c)) : (hn && u && wd(r), r.flags |= 1, On(n, r, l, c), r.child);
  }
  function Ry(n, r, l, u, c) {
    if (Rn(l)) {
      var d = !0;
      co(r);
    } else d = !1;
    if (du(r, c), r.stateNode === null) Va(n, r), rh(r, l, u), Pd(r, l, u, c), u = !0;
    else if (n === null) {
      var m = r.stateNode, b = r.memoizedProps;
      m.props = b;
      var T = m.context, H = l.contextType;
      typeof H == "object" && H !== null ? H = Qt(H) : (H = Rn(l) ? Fa : gn.current, H = Ea(r, H));
      var ae = l.getDerivedStateFromProps, ie = typeof ae == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      ie || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (b !== u || T !== H) && nf(r, m, u, H), Ha = !1;
      var re = r.memoizedState;
      m.state = re, Uc(r, u, m, c), T = r.memoizedState, b !== u || re !== T || Hn.current || Ha ? (typeof ae == "function" && (Vd(r, l, ae, u), T = r.memoizedState), (b = Ha || nh(r, l, b, u, re, T, H)) ? (ie || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = T), m.props = u, m.state = T, m.context = H, u = b) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      m = r.stateNode, Xv(n, r), b = r.memoizedProps, H = r.type === r.elementType ? b : la(r.type, b), m.props = H, ie = r.pendingProps, re = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Qt(T) : (T = Rn(l) ? Fa : gn.current, T = Ea(r, T));
      var we = l.getDerivedStateFromProps;
      (ae = typeof we == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (b !== ie || re !== T) && nf(r, m, u, T), Ha = !1, re = r.memoizedState, m.state = re, Uc(r, u, m, c);
      var De = r.memoizedState;
      b !== ie || re !== De || Hn.current || Ha ? (typeof we == "function" && (Vd(r, l, we, u), De = r.memoizedState), (H = Ha || nh(r, l, H, u, re, De, T) || !1) ? (ae || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(u, De, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(u, De, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || b === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = De), m.props = u, m.state = De, m.context = T, u = H) : (typeof m.componentDidUpdate != "function" || b === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Yd(n, r, l, u, d, c);
  }
  function Yd(n, r, l, u, c, d) {
    Ls(n, r);
    var m = (r.flags & 128) !== 0;
    if (!u && !m) return c && Dr(r, l, !1), pr(n, r, d);
    u = r.stateNode, So.current = r;
    var b = m && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && m ? (r.child = li(r, n.child, null, d), r.child = li(r, null, b, d)) : On(n, r, b, d), r.memoizedState = u.state, c && Dr(r, l, !0), r.child;
  }
  function of(n) {
    var r = n.stateNode;
    r.pendingContext ? Mc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Mc(n, r.context, !1), Ad(n, r.containerInfo);
  }
  function Su(n, r, l, u, c) {
    return qi(), Ss(c), r.flags |= 256, On(n, r, l, u), r.child;
  }
  var Wd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function uf(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function lh(n, r, l) {
    var u = r.pendingProps, c = Sn.current, d = !1, m = (r.flags & 128) !== 0, b;
    if ((b = m) || (b = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), b ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), ln(Sn, c & 1), n === null)
      return kd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (m = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, m = { mode: "hidden", children: m }, (u & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = ku(m, u, 0, null), n = Al(n, u, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = uf(l), r.memoizedState = Wd, n) : Ms(r, m));
    if (c = n.memoizedState, c !== null && (b = c.dehydrated, b !== null)) return oh(n, r, m, u, b, c, l);
    if (d) {
      d = u.fallback, m = r.mode, c = n.child, b = c.sibling;
      var T = { mode: "hidden", children: u.children };
      return (m & 1) === 0 && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = T, r.deletions = null) : (u = zl(c, T), u.subtreeFlags = c.subtreeFlags & 14680064), b !== null ? d = zl(b, d) : (d = Al(d, m, l, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, m = n.child.memoizedState, m = m === null ? uf(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Wd, u;
    }
    return d = n.child, n = d.sibling, u = zl(d, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Ms(n, r) {
    return r = ku({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function sf(n, r, l, u) {
    return u !== null && Ss(u), li(r, n.child, null, l), n = Ms(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function oh(n, r, l, u, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = rf(Error(E(422))), sf(n, r, m, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = ku({ mode: "visible", children: u.children }, c, 0, null), d = Al(d, c, m, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, (r.mode & 1) !== 0 && li(r, n.child, null, m), r.child.memoizedState = uf(m), r.memoizedState = Wd, d);
    if ((r.mode & 1) === 0) return sf(n, r, m, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var b = u.dgst;
      return u = b, d = Error(E(419)), u = rf(d, u, void 0), sf(n, r, m, u);
    }
    if (b = (m & n.childLanes) !== 0, ar || b) {
      if (u = Bn, u !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (u.suspendedLanes | m)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, bi(n, c), Ra(u, n, c, -1));
      }
      return ep(), u = rf(Error(E(421))), sf(n, r, m, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ny.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ra = ri(c.nextSibling), na = r, hn = !0, ii = null, n !== null && (fr[Vn++] = Fr, fr[Vn++] = xi, fr[Vn++] = fo, Fr = n.id, xi = n.overflow, fo = r), r = Ms(r, u.children), r.flags |= 4096, r);
  }
  function Gd(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Ld(n.return, r, l);
  }
  function cf(n, r, l, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = l, d.tailMode = c);
  }
  function ua(n, r, l) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (On(n, r, u.children, l), u = Sn.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Gd(n, l, r);
        else if (n.tag === 19) Gd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      u &= 1;
    }
    if (ln(Sn, u), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && jc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), cf(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && jc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        cf(r, !0, l, null, d);
        break;
      case "together":
        cf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Va(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function pr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), wo |= r.lanes, (l & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(E(153));
    if (r.child !== null) {
      for (n = r.child, l = zl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = zl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ff(n, r, l) {
    switch (r.tag) {
      case 3:
        of(r), qi();
        break;
      case 5:
        Ud(r);
        break;
      case 1:
        Rn(r.type) && co(r);
        break;
      case 4:
        Ad(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        ln(he, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (ln(Sn, Sn.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? lh(n, r, l) : (ln(Sn, Sn.current & 1), n = pr(n, r, l), n !== null ? n.sibling : null);
        ln(Sn, Sn.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return ua(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), ln(Sn, Sn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, st(n, r, l);
    }
    return pr(n, r, l);
  }
  var Eu, xa, Gn, uh;
  Eu = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, xa = function() {
  }, Gn = function(n, r, l, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, ho(wi.current);
      var d = null;
      switch (l) {
        case "input":
          c = An(n, c), u = An(n, u), d = [];
          break;
        case "select":
          c = pe({}, c, { value: void 0 }), u = pe({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Jn(n, c), u = Jn(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Dc);
      }
      dn(l, u);
      var m;
      l = null;
      for (H in c) if (!u.hasOwnProperty(H) && c.hasOwnProperty(H) && c[H] != null) if (H === "style") {
        var b = c[H];
        for (m in b) b.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else H !== "dangerouslySetInnerHTML" && H !== "children" && H !== "suppressContentEditableWarning" && H !== "suppressHydrationWarning" && H !== "autoFocus" && (P.hasOwnProperty(H) ? d || (d = []) : (d = d || []).push(H, null));
      for (H in u) {
        var T = u[H];
        if (b = c != null ? c[H] : void 0, u.hasOwnProperty(H) && T !== b && (T != null || b != null)) if (H === "style") if (b) {
          for (m in b) !b.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && b[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          H,
          l
        )), l = T;
        else H === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, b = b ? b.__html : void 0, T != null && b !== T && (d = d || []).push(H, T)) : H === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(H, "" + T) : H !== "suppressContentEditableWarning" && H !== "suppressHydrationWarning" && (P.hasOwnProperty(H) ? (T != null && H === "onScroll" && It("scroll", n), d || b === T || (d = [])) : (d = d || []).push(H, T));
      }
      l && (d = d || []).push("style", l);
      var H = d;
      (r.updateQueue = H) && (r.flags |= 4);
    }
  }, uh = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function zs(n, r) {
    if (!hn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var u = null; l !== null; ) l.alternate !== null && (u = l), l = l.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function Nr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function Qd(n, r, l) {
    var u = r.pendingProps;
    switch (zc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Nr(r), null;
      case 1:
        return Rn(r.type) && Ci(), Nr(r), null;
      case 3:
        return u = r.stateNode, vu(), Gt(Hn), Gt(gn), bs(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Dn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, ii !== null && ($s(ii), ii = null))), xa(n, r), Nr(r), null;
      case 5:
        jd(r);
        var c = ho(xs.current);
        if (l = r.type, n !== null && r.stateNode != null) Gn(n, r, l, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(E(166));
            return Nr(r), null;
          }
          if (n = ho(wi.current), Dn(r)) {
            u = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (u[ja] = r, u[hs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                It("cancel", u), It("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                It("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < cs.length; c++) It(cs[c], u);
                break;
              case "source":
                It("error", u);
                break;
              case "img":
              case "image":
              case "link":
                It(
                  "error",
                  u
                ), It("load", u);
                break;
              case "details":
                It("toggle", u);
                break;
              case "input":
                wr(u, d), It("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, It("invalid", u);
                break;
              case "textarea":
                Zn(u, d), It("invalid", u);
            }
            dn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var b = d[m];
              m === "children" ? typeof b == "string" ? u.textContent !== b && (d.suppressHydrationWarning !== !0 && kc(u.textContent, b, n), c = ["children", b]) : typeof b == "number" && u.textContent !== "" + b && (d.suppressHydrationWarning !== !0 && kc(
                u.textContent,
                b,
                n
              ), c = ["children", "" + b]) : P.hasOwnProperty(m) && b != null && m === "onScroll" && It("scroll", u);
            }
            switch (l) {
              case "input":
                zn(u), ha(u, d, !0);
                break;
              case "textarea":
                zn(u), Ja(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = Dc);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = jn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = m.createElement(l, { is: u.is }) : (n = m.createElement(l), l === "select" && (m = n, u.multiple ? m.multiple = !0 : u.size && (m.size = u.size))) : n = m.createElementNS(n, l), n[ja] = r, n[hs] = u, Eu(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = pn(l, u), l) {
                case "dialog":
                  It("cancel", n), It("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  It("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < cs.length; c++) It(cs[c], n);
                  c = u;
                  break;
                case "source":
                  It("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  It(
                    "error",
                    n
                  ), It("load", n), c = u;
                  break;
                case "details":
                  It("toggle", n), c = u;
                  break;
                case "input":
                  wr(n, u), c = An(n, u), It("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = pe({}, u, { value: void 0 }), It("invalid", n);
                  break;
                case "textarea":
                  Zn(n, u), c = Jn(n, u), It("invalid", n);
                  break;
                default:
                  c = u;
              }
              dn(l, c), b = c;
              for (d in b) if (b.hasOwnProperty(d)) {
                var T = b[d];
                d === "style" ? Vt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && zi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ma(n, T) : typeof T == "number" && ma(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (P.hasOwnProperty(d) ? T != null && d === "onScroll" && It("scroll", n) : T != null && We(n, d, T, m));
              }
              switch (l) {
                case "input":
                  zn(n), ha(n, u, !1);
                  break;
                case "textarea":
                  zn(n), Ja(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + rt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, d = u.value, d != null ? Yn(n, !!u.multiple, d, !1) : u.defaultValue != null && Yn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Dc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Nr(r), null;
      case 6:
        if (n && r.stateNode != null) uh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(E(166));
          if (l = ho(xs.current), ho(wi.current), Dn(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[ja] = r, (d = u.nodeValue !== l) && (n = na, n !== null)) switch (n.tag) {
              case 3:
                kc(u.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && kc(u.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[ja] = r, r.stateNode = u;
        }
        return Nr(r), null;
      case 13:
        if (Gt(Sn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (hn && ra !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Gv(), qi(), r.flags |= 98560, d = !1;
          else if (d = Dn(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(E(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(E(317));
              d[ja] = r;
            } else qi(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Nr(r), d = !1;
          } else ii !== null && ($s(ii), ii = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (Sn.current & 1) !== 0 ? Qn === 0 && (Qn = 3) : ep())), r.updateQueue !== null && (r.flags |= 4), Nr(r), null);
      case 4:
        return vu(), xa(n, r), n === null && ds(r.stateNode.containerInfo), Nr(r), null;
      case 10:
        return Nd(r.type._context), Nr(r), null;
      case 17:
        return Rn(r.type) && Ci(), Nr(r), null;
      case 19:
        if (Gt(Sn), d = r.memoizedState, d === null) return Nr(r), null;
        if (u = (r.flags & 128) !== 0, m = d.rendering, m === null) if (u) zs(d, !1);
        else {
          if (Qn !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (m = jc(n), m !== null) {
              for (r.flags |= 128, zs(d, !1), u = m.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; ) d = l, n = u, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return ln(Sn, Sn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Bt() > wu && (r.flags |= 128, u = !0, zs(d, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = jc(m), n !== null) {
            if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), zs(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !hn) return Nr(r), null;
          } else 2 * Bt() - d.renderingStartTime > wu && l !== 1073741824 && (r.flags |= 128, u = !0, zs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Bt(), r.sibling = null, l = Sn.current, ln(Sn, u ? l & 1 | 2 : l & 1), r) : (Nr(r), null);
      case 22:
      case 23:
        return Zd(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (ba & 1073741824) !== 0 && (Nr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Nr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(E(156, r.tag));
  }
  function sh(n, r) {
    switch (zc(r), r.tag) {
      case 1:
        return Rn(r.type) && Ci(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return vu(), Gt(Hn), Gt(gn), bs(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return jd(r), null;
      case 13:
        if (Gt(Sn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(E(340));
          qi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Gt(Sn), null;
      case 4:
        return vu(), null;
      case 10:
        return Nd(r.type._context), null;
      case 22:
      case 23:
        return Zd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Co = !1, vr = !1, Ty = typeof WeakSet == "function" ? WeakSet : Set, _e = null;
  function Ol(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (u) {
      Tn(n, r, u);
    }
    else l.current = null;
  }
  function qd(n, r, l) {
    try {
      l();
    } catch (u) {
      Tn(n, r, u);
    }
  }
  var Kd = !1;
  function _y(n, r) {
    if (oo = vl, n = yl(), tu(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var u = l.getSelection && l.getSelection();
        if (u && u.rangeCount !== 0) {
          l = u.anchorNode;
          var c = u.anchorOffset, d = u.focusNode;
          u = u.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, b = -1, T = -1, H = 0, ae = 0, ie = n, re = null;
          t: for (; ; ) {
            for (var we; ie !== l || c !== 0 && ie.nodeType !== 3 || (b = m + c), ie !== d || u !== 0 && ie.nodeType !== 3 || (T = m + u), ie.nodeType === 3 && (m += ie.nodeValue.length), (we = ie.firstChild) !== null; )
              re = ie, ie = we;
            for (; ; ) {
              if (ie === n) break t;
              if (re === l && ++H === c && (b = m), re === d && ++ae === u && (T = m), (we = ie.nextSibling) !== null) break;
              ie = re, re = ie.parentNode;
            }
            ie = we;
          }
          l = b === -1 || T === -1 ? null : { start: b, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (vs = { focusedElem: n, selectionRange: l }, vl = !1, _e = r; _e !== null; ) if (r = _e, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, _e = n;
    else for (; _e !== null; ) {
      r = _e;
      try {
        var De = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (De !== null) {
              var Le = De.memoizedProps, Ln = De.memoizedState, M = r.stateNode, k = M.getSnapshotBeforeUpdate(r.elementType === r.type ? Le : la(r.type, Le), Ln);
              M.__reactInternalSnapshotBeforeUpdate = k;
            }
            break;
          case 3:
            var U = r.stateNode.containerInfo;
            U.nodeType === 1 ? U.textContent = "" : U.nodeType === 9 && U.documentElement && U.removeChild(U.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(E(163));
        }
      } catch (se) {
        Tn(r, r.return, se);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, _e = n;
        break;
      }
      _e = r.return;
    }
    return De = Kd, Kd = !1, De;
  }
  function Cu(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && qd(r, l, d);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function df(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var u = l.create;
          l.destroy = u();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function pf(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function ch(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, ch(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ja], delete r[hs], delete r[Cd], delete r[xd], delete r[su])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function vf(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function As(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || vf(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ri(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Dc));
    else if (u !== 4 && (n = n.child, n !== null)) for (Ri(n, r, l), n = n.sibling; n !== null; ) Ri(n, r, l), n = n.sibling;
  }
  function Ti(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Ti(n, r, l), n = n.sibling; n !== null; ) Ti(n, r, l), n = n.sibling;
  }
  var En = null, Hr = !1;
  function Pa(n, r, l) {
    for (l = l.child; l !== null; ) Xi(n, r, l), l = l.sibling;
  }
  function Xi(n, r, l) {
    if (Xr && typeof Xr.onCommitFiberUnmount == "function") try {
      Xr.onCommitFiberUnmount(cl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        vr || Ol(l, r);
      case 6:
        var u = En, c = Hr;
        En = null, Pa(n, r, l), En = u, Hr = c, En !== null && (Hr ? (n = En, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : En.removeChild(l.stateNode));
        break;
      case 18:
        En !== null && (Hr ? (n = En, l = l.stateNode, n.nodeType === 8 ? ou(n.parentNode, l) : n.nodeType === 1 && ou(n, l), za(n)) : ou(En, l.stateNode));
        break;
      case 4:
        u = En, c = Hr, En = l.stateNode.containerInfo, Hr = !0, Pa(n, r, l), En = u, Hr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vr && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && qd(l, r, m), c = c.next;
          } while (c !== u);
        }
        Pa(n, r, l);
        break;
      case 1:
        if (!vr && (Ol(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
        } catch (b) {
          Tn(l, r, b);
        }
        Pa(n, r, l);
        break;
      case 21:
        Pa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (vr = (u = vr) || l.memoizedState !== null, Pa(n, r, l), vr = u) : Pa(n, r, l);
        break;
      default:
        Pa(n, r, l);
    }
  }
  function fh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Ty()), r.forEach(function(u) {
        var c = Ly.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(c, c));
      });
    }
  }
  function oi(n, r) {
    var l = r.deletions;
    if (l !== null) for (var u = 0; u < l.length; u++) {
      var c = l[u];
      try {
        var d = n, m = r, b = m;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 5:
              En = b.stateNode, Hr = !1;
              break e;
            case 3:
              En = b.stateNode.containerInfo, Hr = !0;
              break e;
            case 4:
              En = b.stateNode.containerInfo, Hr = !0;
              break e;
          }
          b = b.return;
        }
        if (En === null) throw Error(E(160));
        Xi(d, m, c), En = null, Hr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (H) {
        Tn(c, r, H);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) dh(r, n), r = r.sibling;
  }
  function dh(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (oi(r, n), ui(n), u & 4) {
          try {
            Cu(3, n, n.return), df(3, n);
          } catch (Le) {
            Tn(n, n.return, Le);
          }
          try {
            Cu(5, n, n.return);
          } catch (Le) {
            Tn(n, n.return, Le);
          }
        }
        break;
      case 1:
        oi(r, n), ui(n), u & 512 && l !== null && Ol(l, l.return);
        break;
      case 5:
        if (oi(r, n), ui(n), u & 512 && l !== null && Ol(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ma(c, "");
          } catch (Le) {
            Tn(n, n.return, Le);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, b = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            b === "input" && d.type === "radio" && d.name != null && In(c, d), pn(b, m);
            var H = pn(b, d);
            for (m = 0; m < T.length; m += 2) {
              var ae = T[m], ie = T[m + 1];
              ae === "style" ? Vt(c, ie) : ae === "dangerouslySetInnerHTML" ? zi(c, ie) : ae === "children" ? ma(c, ie) : We(c, ae, ie, H);
            }
            switch (b) {
              case "input":
                Un(c, d);
                break;
              case "textarea":
                Rr(c, d);
                break;
              case "select":
                var re = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var we = d.value;
                we != null ? Yn(c, !!d.multiple, we, !1) : re !== !!d.multiple && (d.defaultValue != null ? Yn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Yn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[hs] = d;
          } catch (Le) {
            Tn(n, n.return, Le);
          }
        }
        break;
      case 6:
        if (oi(r, n), ui(n), u & 4) {
          if (n.stateNode === null) throw Error(E(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Le) {
            Tn(n, n.return, Le);
          }
        }
        break;
      case 3:
        if (oi(r, n), ui(n), u & 4 && l !== null && l.memoizedState.isDehydrated) try {
          za(r.containerInfo);
        } catch (Le) {
          Tn(n, n.return, Le);
        }
        break;
      case 4:
        oi(r, n), ui(n);
        break;
      case 13:
        oi(r, n), ui(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Jd = Bt())), u & 4 && fh(n);
        break;
      case 22:
        if (ae = l !== null && l.memoizedState !== null, n.mode & 1 ? (vr = (H = vr) || ae, oi(r, n), vr = H) : oi(r, n), ui(n), u & 8192) {
          if (H = n.memoizedState !== null, (n.stateNode.isHidden = H) && !ae && (n.mode & 1) !== 0) for (_e = n, ae = n.child; ae !== null; ) {
            for (ie = _e = ae; _e !== null; ) {
              switch (re = _e, we = re.child, re.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Cu(4, re, re.return);
                  break;
                case 1:
                  Ol(re, re.return);
                  var De = re.stateNode;
                  if (typeof De.componentWillUnmount == "function") {
                    u = re, l = re.return;
                    try {
                      r = u, De.props = r.memoizedProps, De.state = r.memoizedState, De.componentWillUnmount();
                    } catch (Le) {
                      Tn(u, l, Le);
                    }
                  }
                  break;
                case 5:
                  Ol(re, re.return);
                  break;
                case 22:
                  if (re.memoizedState !== null) {
                    vh(ie);
                    continue;
                  }
              }
              we !== null ? (we.return = re, _e = we) : vh(ie);
            }
            ae = ae.sibling;
          }
          e: for (ae = null, ie = n; ; ) {
            if (ie.tag === 5) {
              if (ae === null) {
                ae = ie;
                try {
                  c = ie.stateNode, H ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (b = ie.stateNode, T = ie.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, b.style.display = ft("display", m));
                } catch (Le) {
                  Tn(n, n.return, Le);
                }
              }
            } else if (ie.tag === 6) {
              if (ae === null) try {
                ie.stateNode.nodeValue = H ? "" : ie.memoizedProps;
              } catch (Le) {
                Tn(n, n.return, Le);
              }
            } else if ((ie.tag !== 22 && ie.tag !== 23 || ie.memoizedState === null || ie === n) && ie.child !== null) {
              ie.child.return = ie, ie = ie.child;
              continue;
            }
            if (ie === n) break e;
            for (; ie.sibling === null; ) {
              if (ie.return === null || ie.return === n) break e;
              ae === ie && (ae = null), ie = ie.return;
            }
            ae === ie && (ae = null), ie.sibling.return = ie.return, ie = ie.sibling;
          }
        }
        break;
      case 19:
        oi(r, n), ui(n), u & 4 && fh(n);
        break;
      case 21:
        break;
      default:
        oi(
          r,
          n
        ), ui(n);
    }
  }
  function ui(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (vf(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(E(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (ma(c, ""), u.flags &= -33);
            var d = As(n);
            Ti(n, d, c);
            break;
          case 3:
          case 4:
            var m = u.stateNode.containerInfo, b = As(n);
            Ri(n, b, m);
            break;
          default:
            throw Error(E(161));
        }
      } catch (T) {
        Tn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Us(n, r, l) {
    _e = n, ph(n);
  }
  function ph(n, r, l) {
    for (var u = (n.mode & 1) !== 0; _e !== null; ) {
      var c = _e, d = c.child;
      if (c.tag === 22 && u) {
        var m = c.memoizedState !== null || Co;
        if (!m) {
          var b = c.alternate, T = b !== null && b.memoizedState !== null || vr;
          b = Co;
          var H = vr;
          if (Co = m, (vr = T) && !H) for (_e = c; _e !== null; ) m = _e, T = m.child, m.tag === 22 && m.memoizedState !== null ? js(c) : T !== null ? (T.return = m, _e = T) : js(c);
          for (; d !== null; ) _e = d, ph(d), d = d.sibling;
          _e = c, Co = b, vr = H;
        }
        Xd(n);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, _e = d) : Xd(n);
    }
  }
  function Xd(n) {
    for (; _e !== null; ) {
      var r = _e;
      if ((r.flags & 8772) !== 0) {
        var l = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              vr || df(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !vr) if (l === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : la(r.type, l.memoizedProps);
                u.componentDidUpdate(c, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && zd(r, d, u);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                zd(r, m, l);
              }
              break;
            case 5:
              var b = r.stateNode;
              if (l === null && r.flags & 4) {
                l = b;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var H = r.alternate;
                if (H !== null) {
                  var ae = H.memoizedState;
                  if (ae !== null) {
                    var ie = ae.dehydrated;
                    ie !== null && za(ie);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
          vr || r.flags & 512 && pf(r);
        } catch (re) {
          Tn(r, r.return, re);
        }
      }
      if (r === n) {
        _e = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, _e = l;
        break;
      }
      _e = r.return;
    }
  }
  function vh(n) {
    for (; _e !== null; ) {
      var r = _e;
      if (r === n) {
        _e = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, _e = l;
        break;
      }
      _e = r.return;
    }
  }
  function js(n) {
    for (; _e !== null; ) {
      var r = _e;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              df(4, r);
            } catch (T) {
              Tn(r, l, T);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (T) {
                Tn(r, c, T);
              }
            }
            var d = r.return;
            try {
              pf(r);
            } catch (T) {
              Tn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              pf(r);
            } catch (T) {
              Tn(r, m, T);
            }
        }
      } catch (T) {
        Tn(r, r.return, T);
      }
      if (r === n) {
        _e = null;
        break;
      }
      var b = r.sibling;
      if (b !== null) {
        b.return = r.return, _e = b;
        break;
      }
      _e = r.return;
    }
  }
  var hh = Math.ceil, hf = ze.ReactCurrentDispatcher, xo = ze.ReactCurrentOwner, Lr = ze.ReactCurrentBatchConfig, wt = 0, Bn = null, Nn = null, hr = 0, ba = 0, xu = ta(0), Qn = 0, bo = null, wo = 0, Ro = 0, Fs = 0, bu = null, sa = null, Jd = 0, wu = 1 / 0, Ji = null, Nl = !1, Hs = null, Ba = null, mf = !1, Ll = null, Vs = 0, Ru = 0, Tu = null, To = -1, Ps = 0;
  function on() {
    return (wt & 6) !== 0 ? Bt() : To !== -1 ? To : To = Bt();
  }
  function wa(n) {
    return (n.mode & 1) === 0 ? 1 : (wt & 2) !== 0 && hr !== 0 ? hr & -hr : po.transition !== null ? (Ps === 0 && (Ps = Jl()), Ps) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : es(n.type)), n);
  }
  function Ra(n, r, l, u) {
    if (50 < Ru) throw Ru = 0, Tu = null, Error(E(185));
    pl(n, l, u), ((wt & 2) === 0 || n !== Bn) && (n === Bn && ((wt & 2) === 0 && (Ro |= l), Qn === 4 && Ml(n, hr)), ir(n, u), l === 1 && wt === 0 && (r.mode & 1) === 0 && (wu = Bt() + 500, ys && jr()));
  }
  function ir(n, r) {
    var l = n.callbackNode;
    Io(n, r);
    var u = mi(n, n === Bn ? hr : 0);
    if (u === 0) l !== null && vn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && vn(l), r === 1) n.tag === 0 ? bd(Ys.bind(null, n)) : Sl(Ys.bind(null, n)), by(function() {
        (wt & 6) === 0 && jr();
      }), l = null;
      else {
        switch (Zu(u)) {
          case 1:
            l = it;
            break;
          case 4:
            l = hi;
            break;
          case 16:
            l = Fi;
            break;
          case 536870912:
            l = Hi;
            break;
          default:
            l = Fi;
        }
        l = Ch(l, mh.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function mh(n, r) {
    if (To = -1, Ps = 0, (wt & 6) !== 0) throw Error(E(327));
    var l = n.callbackNode;
    if (_u() && n.callbackNode !== l) return null;
    var u = mi(n, n === Bn ? hr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = Sf(n, u);
    else {
      r = u;
      var c = wt;
      wt |= 2;
      var d = yh();
      (Bn !== n || hr !== r) && (Ji = null, wu = Bt() + 500, ko(n, r));
      do
        try {
          Dy();
          break;
        } catch (b) {
          gf(n, b);
        }
      while (!0);
      Od(), hf.current = d, wt = c, Nn !== null ? r = 0 : (Bn = null, hr = 0, r = Qn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Pi(n), c !== 0 && (u = c, r = Bs(n, c))), r === 1) throw l = bo, ko(n, 0), Ml(n, u), ir(n, Bt()), l;
      if (r === 6) Ml(n, u);
      else {
        if (c = n.current.alternate, (u & 30) === 0 && !Is(c) && (r = Sf(n, u), r === 2 && (d = Pi(n), d !== 0 && (u = d, r = Bs(n, d))), r === 1)) throw l = bo, ko(n, 0), Ml(n, u), ir(n, Bt()), l;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(E(345));
          case 2:
            Do(n, sa, Ji);
            break;
          case 3:
            if (Ml(n, u), (u & 130023424) === u && (r = Jd + 500 - Bt(), 10 < r)) {
              if (mi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                on(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Oc(Do.bind(null, n, sa, Ji), r);
              break;
            }
            Do(n, sa, Ji);
            break;
          case 4:
            if (Ml(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var m = 31 - zr(u);
              d = 1 << m, m = r[m], m > c && (c = m), u &= ~d;
            }
            if (u = c, u = Bt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * hh(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Oc(Do.bind(null, n, sa, Ji), u);
              break;
            }
            Do(n, sa, Ji);
            break;
          case 5:
            Do(n, sa, Ji);
            break;
          default:
            throw Error(E(329));
        }
      }
    }
    return ir(n, Bt()), n.callbackNode === l ? mh.bind(null, n) : null;
  }
  function Bs(n, r) {
    var l = bu;
    return n.current.memoizedState.isDehydrated && (ko(n, r).flags |= 256), n = Sf(n, r), n !== 2 && (r = sa, sa = l, r !== null && $s(r)), n;
  }
  function $s(n) {
    sa === null ? sa = n : sa.push.apply(sa, n);
  }
  function Is(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var u = 0; u < l.length; u++) {
          var c = l[u], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ni(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ml(n, r) {
    for (r &= ~Fs, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - zr(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Ys(n) {
    if ((wt & 6) !== 0) throw Error(E(327));
    _u();
    var r = mi(n, 0);
    if ((r & 1) === 0) return ir(n, Bt()), null;
    var l = Sf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = Pi(n);
      u !== 0 && (r = u, l = Bs(n, u));
    }
    if (l === 1) throw l = bo, ko(n, 0), Ml(n, r), ir(n, Bt()), l;
    if (l === 6) throw Error(E(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Do(n, sa, Ji), ir(n, Bt()), null;
  }
  function yf(n, r) {
    var l = wt;
    wt |= 1;
    try {
      return n(r);
    } finally {
      wt = l, wt === 0 && (wu = Bt() + 500, ys && jr());
    }
  }
  function _o(n) {
    Ll !== null && Ll.tag === 0 && (wt & 6) === 0 && _u();
    var r = wt;
    wt |= 1;
    var l = Lr.transition, u = Lt;
    try {
      if (Lr.transition = null, Lt = 1, n) return n();
    } finally {
      Lt = u, Lr.transition = l, wt = r, (wt & 6) === 0 && jr();
    }
  }
  function Zd() {
    ba = xu.current, Gt(xu);
  }
  function ko(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, $v(l)), Nn !== null) for (l = Nn.return; l !== null; ) {
      var u = l;
      switch (zc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Ci();
          break;
        case 3:
          vu(), Gt(Hn), Gt(gn), bs();
          break;
        case 5:
          jd(u);
          break;
        case 4:
          vu();
          break;
        case 13:
          Gt(Sn);
          break;
        case 19:
          Gt(Sn);
          break;
        case 10:
          Nd(u.type._context);
          break;
        case 22:
        case 23:
          Zd();
      }
      l = l.return;
    }
    if (Bn = n, Nn = n = zl(n.current, null), hr = ba = r, Qn = 0, bo = null, Fs = Ro = wo = 0, sa = bu = null, vo !== null) {
      for (r = 0; r < vo.length; r++) if (l = vo[r], u = l.interleaved, u !== null) {
        l.interleaved = null;
        var c = u.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, u.next = m;
        }
        l.pending = u;
      }
      vo = null;
    }
    return n;
  }
  function gf(n, r) {
    do {
      var l = Nn;
      try {
        if (Od(), je.current = qt, Fc) {
          for (var u = lt.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Fc = !1;
        }
        if (kt = 0, Wn = tn = lt = null, ws = !1, Rs = 0, xo.current = null, l === null || l.return === null) {
          Qn = 1, bo = r, Nn = null;
          break;
        }
        e: {
          var d = n, m = l.return, b = l, T = r;
          if (r = hr, b.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var H = T, ae = b, ie = ae.tag;
            if ((ae.mode & 1) === 0 && (ie === 0 || ie === 11 || ie === 15)) {
              var re = ae.alternate;
              re ? (ae.updateQueue = re.updateQueue, ae.memoizedState = re.memoizedState, ae.lanes = re.lanes) : (ae.updateQueue = null, ae.memoizedState = null);
            }
            var we = Id(m);
            if (we !== null) {
              we.flags &= -257, ih(we, m, b, d, r), we.mode & 1 && $d(d, H, r), r = we, T = H;
              var De = r.updateQueue;
              if (De === null) {
                var Le = /* @__PURE__ */ new Set();
                Le.add(T), r.updateQueue = Le;
              } else De.add(T);
              break e;
            } else {
              if ((r & 1) === 0) {
                $d(d, H, r), ep();
                break e;
              }
              T = Error(E(426));
            }
          } else if (hn && b.mode & 1) {
            var Ln = Id(m);
            if (Ln !== null) {
              (Ln.flags & 65536) === 0 && (Ln.flags |= 256), ih(Ln, m, b, d, r), Ss(Dl(T, b));
              break e;
            }
          }
          d = T = Dl(T, b), Qn !== 4 && (Qn = 2), bu === null ? bu = [d] : bu.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var M = Ns(d, T, r);
                Jv(d, M);
                break e;
              case 1:
                b = T;
                var k = d.type, U = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof k.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (Ba === null || !Ba.has(U)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var se = ah(d, b, r);
                  Jv(d, se);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        gh(l);
      } catch (Ee) {
        r = Ee, Nn === l && l !== null && (Nn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function yh() {
    var n = hf.current;
    return hf.current = qt, n === null ? qt : n;
  }
  function ep() {
    (Qn === 0 || Qn === 3 || Qn === 2) && (Qn = 4), Bn === null || (wo & 268435455) === 0 && (Ro & 268435455) === 0 || Ml(Bn, hr);
  }
  function Sf(n, r) {
    var l = wt;
    wt |= 2;
    var u = yh();
    (Bn !== n || hr !== r) && (Ji = null, ko(n, r));
    do
      try {
        ky();
        break;
      } catch (c) {
        gf(n, c);
      }
    while (!0);
    if (Od(), wt = l, hf.current = u, Nn !== null) throw Error(E(261));
    return Bn = null, hr = 0, Qn;
  }
  function ky() {
    for (; Nn !== null; ) tp(Nn);
  }
  function Dy() {
    for (; Nn !== null && !Tr(); ) tp(Nn);
  }
  function tp(n) {
    var r = rp(n.alternate, n, ba);
    n.memoizedProps = n.pendingProps, r === null ? gh(n) : Nn = r, xo.current = null;
  }
  function gh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = Qd(l, r, ba), l !== null) {
          Nn = l;
          return;
        }
      } else {
        if (l = sh(l, r), l !== null) {
          l.flags &= 32767, Nn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Qn = 6, Nn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Nn = r;
        return;
      }
      Nn = r = n;
    } while (r !== null);
    Qn === 0 && (Qn = 5);
  }
  function Do(n, r, l) {
    var u = Lt, c = Lr.transition;
    try {
      Lr.transition = null, Lt = 1, Oy(n, r, l, u);
    } finally {
      Lr.transition = c, Lt = u;
    }
    return null;
  }
  function Oy(n, r, l, u) {
    do
      _u();
    while (Ll !== null);
    if ((wt & 6) !== 0) throw Error(E(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(E(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Xu(n, d), n === Bn && (Nn = Bn = null, hr = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || mf || (mf = !0, Ch(Fi, function() {
      return _u(), null;
    })), d = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || d) {
      d = Lr.transition, Lr.transition = null;
      var m = Lt;
      Lt = 1;
      var b = wt;
      wt |= 4, xo.current = null, _y(n, l), dh(l, n), zv(vs), vl = !!oo, vs = oo = null, n.current = l, Us(l), Za(), wt = b, Lt = m, Lr.transition = d;
    } else n.current = l;
    if (mf && (mf = !1, Ll = n, Vs = c), d = n.pendingLanes, d === 0 && (Ba = null), qu(l.stateNode), ir(n, Bt()), r !== null) for (u = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Nl) throw Nl = !1, n = Hs, Hs = null, n;
    return (Vs & 1) !== 0 && n.tag !== 0 && _u(), d = n.pendingLanes, (d & 1) !== 0 ? n === Tu ? Ru++ : (Ru = 0, Tu = n) : Ru = 0, jr(), null;
  }
  function _u() {
    if (Ll !== null) {
      var n = Zu(Vs), r = Lr.transition, l = Lt;
      try {
        if (Lr.transition = null, Lt = 16 > n ? 16 : n, Ll === null) var u = !1;
        else {
          if (n = Ll, Ll = null, Vs = 0, (wt & 6) !== 0) throw Error(E(331));
          var c = wt;
          for (wt |= 4, _e = n.current; _e !== null; ) {
            var d = _e, m = d.child;
            if ((_e.flags & 16) !== 0) {
              var b = d.deletions;
              if (b !== null) {
                for (var T = 0; T < b.length; T++) {
                  var H = b[T];
                  for (_e = H; _e !== null; ) {
                    var ae = _e;
                    switch (ae.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Cu(8, ae, d);
                    }
                    var ie = ae.child;
                    if (ie !== null) ie.return = ae, _e = ie;
                    else for (; _e !== null; ) {
                      ae = _e;
                      var re = ae.sibling, we = ae.return;
                      if (ch(ae), ae === H) {
                        _e = null;
                        break;
                      }
                      if (re !== null) {
                        re.return = we, _e = re;
                        break;
                      }
                      _e = we;
                    }
                  }
                }
                var De = d.alternate;
                if (De !== null) {
                  var Le = De.child;
                  if (Le !== null) {
                    De.child = null;
                    do {
                      var Ln = Le.sibling;
                      Le.sibling = null, Le = Ln;
                    } while (Le !== null);
                  }
                }
                _e = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && m !== null) m.return = d, _e = m;
            else e: for (; _e !== null; ) {
              if (d = _e, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Cu(9, d, d.return);
              }
              var M = d.sibling;
              if (M !== null) {
                M.return = d.return, _e = M;
                break e;
              }
              _e = d.return;
            }
          }
          var k = n.current;
          for (_e = k; _e !== null; ) {
            m = _e;
            var U = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && U !== null) U.return = m, _e = U;
            else e: for (m = k; _e !== null; ) {
              if (b = _e, (b.flags & 2048) !== 0) try {
                switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    df(9, b);
                }
              } catch (Ee) {
                Tn(b, b.return, Ee);
              }
              if (b === m) {
                _e = null;
                break e;
              }
              var se = b.sibling;
              if (se !== null) {
                se.return = b.return, _e = se;
                break e;
              }
              _e = b.return;
            }
          }
          if (wt = c, jr(), Xr && typeof Xr.onPostCommitFiberRoot == "function") try {
            Xr.onPostCommitFiberRoot(cl, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Lt = l, Lr.transition = r;
      }
    }
    return !1;
  }
  function Sh(n, r, l) {
    r = Dl(l, r), r = Ns(n, r, 1), n = Rl(n, r, 1), r = on(), n !== null && (pl(n, 1, r), ir(n, r));
  }
  function Tn(n, r, l) {
    if (n.tag === 3) Sh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Sh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Ba === null || !Ba.has(u))) {
          n = Dl(l, n), n = ah(r, n, 1), r = Rl(r, n, 1), n = on(), r !== null && (pl(r, 1, n), ir(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function np(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = on(), n.pingedLanes |= n.suspendedLanes & l, Bn === n && (hr & l) === l && (Qn === 4 || Qn === 3 && (hr & 130023424) === hr && 500 > Bt() - Jd ? ko(n, 0) : Fs |= l), ir(n, r);
  }
  function Eh(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = fl, fl <<= 1, (fl & 130023424) === 0 && (fl = 4194304)));
    var l = on();
    n = bi(n, r), n !== null && (pl(n, r, l), ir(n, l));
  }
  function Ny(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Eh(n, l);
  }
  function Ly(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(E(314));
    }
    u !== null && u.delete(r), Eh(n, l);
  }
  var rp;
  rp = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Hn.current) ar = !0;
    else {
      if ((n.lanes & l) === 0 && (r.flags & 128) === 0) return ar = !1, ff(n, r, l);
      ar = (n.flags & 131072) !== 0;
    }
    else ar = !1, hn && (r.flags & 1048576) !== 0 && Yv(r, xl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Va(n, r), n = r.pendingProps;
        var c = Ea(r, gn.current);
        du(r, l), c = Ye(null, r, u, n, c, l);
        var d = Tl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Rn(u) ? (d = !0, co(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, wl(r), c.updater = tf, r.stateNode = c, c._reactInternals = r, Pd(r, u, n, l), r = Yd(null, r, u, !0, d, l)) : (r.tag = 0, hn && d && wd(r), On(null, r, c, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Va(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = zy(u), n = la(u, n), c) {
            case 0:
              r = lf(null, r, u, n, l);
              break e;
            case 1:
              r = Ry(null, r, u, n, l);
              break e;
            case 11:
              r = af(null, r, u, n, l);
              break e;
            case 14:
              r = oa(null, r, u, la(u.type, n), l);
              break e;
          }
          throw Error(E(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : la(u, c), lf(n, r, u, c, l);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : la(u, c), Ry(n, r, u, c, l);
      case 3:
        e: {
          if (of(r), n === null) throw Error(E(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, Xv(n, r), Uc(r, u, null, l);
          var m = r.memoizedState;
          if (u = m.element, d.isDehydrated) if (d = { element: u, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Dl(Error(E(423)), r), r = Su(n, r, u, l, c);
            break e;
          } else if (u !== c) {
            c = Dl(Error(E(424)), r), r = Su(n, r, u, l, c);
            break e;
          } else for (ra = ri(r.stateNode.containerInfo.firstChild), na = r, hn = !0, ii = null, l = dr(r, null, u, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (qi(), u === c) {
              r = pr(n, r, l);
              break e;
            }
            On(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ud(r), n === null && kd(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, uo(u, c) ? m = null : d !== null && uo(u, d) && (r.flags |= 32), Ls(n, r), On(n, r, m, l), r.child;
      case 6:
        return n === null && kd(r), null;
      case 13:
        return lh(n, r, l);
      case 4:
        return Ad(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = li(r, null, u, l) : On(n, r, u, l), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : la(u, c), af(n, r, u, c, l);
      case 7:
        return On(n, r, r.pendingProps, l), r.child;
      case 8:
        return On(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return On(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, ln(he, u._currentValue), u._currentValue = m, d !== null) if (ni(d.value, m)) {
            if (d.children === c.children && !Hn.current) {
              r = pr(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var b = d.dependencies;
            if (b !== null) {
              m = d.child;
              for (var T = b.firstContext; T !== null; ) {
                if (T.context === u) {
                  if (d.tag === 1) {
                    T = Ki(-1, l & -l), T.tag = 2;
                    var H = d.updateQueue;
                    if (H !== null) {
                      H = H.shared;
                      var ae = H.pending;
                      ae === null ? T.next = T : (T.next = ae.next, ae.next = T), H.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Ld(
                    d.return,
                    l,
                    r
                  ), b.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(E(341));
              m.lanes |= l, b = m.alternate, b !== null && (b.lanes |= l), Ld(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          On(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, du(r, l), c = Qt(c), u = u(c), r.flags |= 1, On(n, r, u, l), r.child;
      case 14:
        return u = r.type, c = la(u, r.pendingProps), c = la(u.type, c), oa(n, r, u, c, l);
      case 15:
        return Eo(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : la(u, c), Va(n, r), r.tag = 1, Rn(u) ? (n = !0, co(r)) : n = !1, du(r, l), rh(r, u, c), Pd(r, u, c, l), Yd(null, r, u, !0, n, l);
      case 19:
        return ua(n, r, l);
      case 22:
        return st(n, r, l);
    }
    throw Error(E(156, r.tag));
  };
  function Ch(n, r) {
    return sn(n, r);
  }
  function My(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $a(n, r, l, u) {
    return new My(n, r, l, u);
  }
  function ap(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function zy(n) {
    if (typeof n == "function") return ap(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Be) return 11;
      if (n === Ut) return 14;
    }
    return 2;
  }
  function zl(n, r) {
    var l = n.alternate;
    return l === null ? (l = $a(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Ef(n, r, l, u, c, d) {
    var m = 2;
    if (u = n, typeof n == "function") ap(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case dt:
        return Al(l.children, c, d, r);
      case Ie:
        m = 8, c |= 8;
        break;
      case cn:
        return n = $a(12, l, r, c | 2), n.elementType = cn, n.lanes = d, n;
      case gt:
        return n = $a(13, l, r, c), n.elementType = gt, n.lanes = d, n;
      case Ae:
        return n = $a(19, l, r, c), n.elementType = Ae, n.lanes = d, n;
      case ot:
        return ku(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Ot:
            m = 10;
            break e;
          case Kt:
            m = 9;
            break e;
          case Be:
            m = 11;
            break e;
          case Ut:
            m = 14;
            break e;
          case ct:
            m = 16, u = null;
            break e;
        }
        throw Error(E(130, n == null ? n : typeof n, ""));
    }
    return r = $a(m, l, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function Al(n, r, l, u) {
    return n = $a(7, n, u, r), n.lanes = l, n;
  }
  function ku(n, r, l, u) {
    return n = $a(22, n, u, r), n.elementType = ot, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Oo(n, r, l) {
    return n = $a(6, n, null, r), n.lanes = l, n;
  }
  function ip(n, r, l) {
    return r = $a(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function xh(n, r, l, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zl(0), this.expirationTimes = Zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zl(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Cf(n, r, l, u, c, d, m, b, T) {
    return n = new xh(n, r, l, b, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = $a(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wl(d), n;
  }
  function bh(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ne, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function wh(n) {
    if (!n) return mt;
    n = n._reactInternals;
    e: {
      if (Se(n) !== n || n.tag !== 1) throw Error(E(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Rn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(E(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Rn(l)) return Iv(n, l, r);
    }
    return r;
  }
  function lp(n, r, l, u, c, d, m, b, T) {
    return n = Cf(l, u, !0, n, c, d, m, b, T), n.context = wh(null), l = n.current, u = on(), c = wa(l), d = Ki(u, c), d.callback = r ?? null, Rl(l, d, c), n.current.lanes = c, pl(n, c, u), ir(n, u), n;
  }
  function xf(n, r, l, u) {
    var c = r.current, d = on(), m = wa(c);
    return l = wh(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ki(d, m), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Rl(c, r, m), n !== null && (Ra(n, c, m, d), Ac(n, c, m)), m;
  }
  function bf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Rh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function wf(n, r) {
    Rh(n, r), (n = n.alternate) && Rh(n, r);
  }
  function Th() {
    return null;
  }
  var op = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Ul(n) {
    this._internalRoot = n;
  }
  Rf.prototype.render = Ul.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(E(409));
    xf(n, r, null, null);
  }, Rf.prototype.unmount = Ul.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      _o(function() {
        xf(null, n, null, null);
      }), r[Gi] = null;
    }
  };
  function Rf(n) {
    this._internalRoot = n;
  }
  Rf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = yi();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < ei.length && r !== 0 && r < ei[l].priority; l++) ;
      ei.splice(l, 0, n), l === 0 && Wo(n);
    }
  };
  function up(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Tf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function _h() {
  }
  function Ay(n, r, l, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var H = bf(m);
          d.call(H);
        };
      }
      var m = lp(r, u, n, 0, null, !1, !1, "", _h);
      return n._reactRootContainer = m, n[Gi] = m.current, ds(n.nodeType === 8 ? n.parentNode : n), _o(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var b = u;
      u = function() {
        var H = bf(T);
        b.call(H);
      };
    }
    var T = Cf(n, 0, !1, null, null, !1, !1, "", _h);
    return n._reactRootContainer = T, n[Gi] = T.current, ds(n.nodeType === 8 ? n.parentNode : n), _o(function() {
      xf(r, T, l, u);
    }), T;
  }
  function _f(n, r, l, u, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var b = c;
        c = function() {
          var T = bf(m);
          b.call(T);
        };
      }
      xf(r, m, n, c);
    } else m = Ay(l, r, n, c, u);
    return bf(m);
  }
  Yo = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Jr(r.pendingLanes);
          l !== 0 && (Ju(r, l | 1), ir(r, Bt()), (wt & 6) === 0 && (wu = Bt() + 500, jr()));
        }
        break;
      case 13:
        _o(function() {
          var u = bi(n, 1);
          if (u !== null) {
            var c = on();
            Ra(u, n, 1, c);
          }
        }), wf(n, 1);
    }
  }, Mt = function(n) {
    if (n.tag === 13) {
      var r = bi(n, 134217728);
      if (r !== null) {
        var l = on();
        Ra(r, n, 134217728, l);
      }
      wf(n, 134217728);
    }
  }, yc = function(n) {
    if (n.tag === 13) {
      var r = wa(n), l = bi(n, r);
      if (l !== null) {
        var u = on();
        Ra(l, n, r, u);
      }
      wf(n, r);
    }
  }, yi = function() {
    return Lt;
  }, Xe = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, Xt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Un(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var c = Qi(u);
              if (!c) throw Error(E(90));
              Xn(u), Un(u, c);
            }
          }
        }
        break;
      case "textarea":
        Rr(n, l);
        break;
      case "select":
        r = l.value, r != null && Yn(n, !!l.multiple, r, !1);
    }
  }, ql = yf, Kl = _o;
  var kh = { usingClientEntryPoint: !1, Events: [ms, Ue, Qi, La, Ai, yf] }, Ws = { findFiberByHostInstance: so, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Uy = { bundleType: Ws.bundleType, version: Ws.version, rendererPackageName: Ws.rendererPackageName, rendererConfig: Ws.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ze.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = pt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ws.findFiberByHostInstance || Th, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gs.isDisabled && Gs.supportsFiber) try {
      cl = Gs.inject(Uy), Xr = Gs;
    } catch {
    }
  }
  return qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kh, qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!up(r)) throw Error(E(200));
    return bh(n, r, null, l);
  }, qa.createRoot = function(n, r) {
    if (!up(n)) throw Error(E(299));
    var l = !1, u = "", c = op;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Cf(n, 1, !1, null, null, l, !1, u, c), n[Gi] = r.current, ds(n.nodeType === 8 ? n.parentNode : n), new Ul(r);
  }, qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(E(188)) : (n = Object.keys(n).join(","), Error(E(268, n)));
    return n = pt(r), n = n === null ? null : n.stateNode, n;
  }, qa.flushSync = function(n) {
    return _o(n);
  }, qa.hydrate = function(n, r, l) {
    if (!Tf(r)) throw Error(E(200));
    return _f(null, n, r, !0, l);
  }, qa.hydrateRoot = function(n, r, l) {
    if (!up(n)) throw Error(E(405));
    var u = l != null && l.hydratedSources || null, c = !1, d = "", m = op;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = lp(r, null, n, 1, l ?? null, c, !1, d, m), n[Gi] = r.current, ds(n), u) for (n = 0; n < u.length; n++) l = u[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Rf(r);
  }, qa.render = function(n, r, l) {
    if (!Tf(r)) throw Error(E(200));
    return _f(null, n, r, !1, l);
  }, qa.unmountComponentAtNode = function(n) {
    if (!Tf(n)) throw Error(E(40));
    return n._reactRootContainer ? (_o(function() {
      _f(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Gi] = null;
      });
    }), !0) : !1;
  }, qa.unstable_batchedUpdates = yf, qa.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!Tf(l)) throw Error(E(200));
    if (n == null || n._reactInternals === void 0) throw Error(E(38));
    return _f(n, r, l, !1, u);
  }, qa.version = "18.3.1-next-f1338f8080-20240426", qa;
}
var Ka = {}, Nb;
function sD() {
  if (Nb) return Ka;
  Nb = 1;
  var g = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return g.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var x = pc(), E = Yb(), N = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, P = !1;
    function L(e) {
      P = e;
    }
    function J(e) {
      if (!P) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ue("warn", e, a);
      }
    }
    function y(e) {
      if (!P) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ue("error", e, a);
      }
    }
    function ue(e, t, a) {
      {
        var i = N.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Z = 0, te = 1, oe = 2, W = 3, ye = 4, X = 5, ee = 6, de = 7, nt = 8, qe = 9, We = 10, ze = 11, Rt = 12, Ne = 13, dt = 14, Ie = 15, cn = 16, Ot = 17, Kt = 18, Be = 19, gt = 21, Ae = 22, Ut = 23, ct = 24, ot = 25, q = !0, xe = !1, pe = !1, O = !1, K = !1, Fe = !0, Ke = !0, Ze = !0, ht = !0, Nt = /* @__PURE__ */ new Set(), rt = {}, _t = {};
    function Wt(e, t) {
      zn(e, t), zn(e + "Capture", t);
    }
    function zn(e, t) {
      rt[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), rt[e] = t;
      {
        var a = e.toLowerCase();
        _t[a] = e, e === "onDoubleClick" && (_t.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Nt.add(t[i]);
    }
    var Xn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ur = Object.prototype.hasOwnProperty;
    function An(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function wr(e) {
      try {
        return In(e), !1;
      } catch {
        return !0;
      }
    }
    function In(e) {
      return "" + e;
    }
    function Un(e, t) {
      if (wr(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), In(e);
    }
    function ha(e) {
      if (wr(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), In(e);
    }
    function Xa(e, t) {
      if (wr(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), In(e);
    }
    function Mr(e, t) {
      if (wr(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), In(e);
    }
    function Yn(e) {
      if (wr(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), In(e);
    }
    function Jn(e) {
      if (wr(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", An(e)), In(e);
    }
    var Zn = 0, Rr = 1, Ja = 2, jn = 3, sr = 4, qr = 5, zi = 6, ma = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", fe = ma + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ve = new RegExp("^[" + ma + "][" + fe + "]*$"), ft = {}, Vt = {};
    function fn(e) {
      return ur.call(Vt, e) ? !0 : ur.call(ft, e) ? !1 : Ve.test(e) ? (Vt[e] = !0, !0) : (ft[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function dn(e, t, a) {
      return t !== null ? t.type === Zn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function pn(e, t, a, i) {
      if (a !== null && a.type === Zn)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function er(e, t, a, i) {
      if (t === null || typeof t > "u" || pn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case jn:
            return !t;
          case sr:
            return t === !1;
          case qr:
            return isNaN(t);
          case zi:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function un(e) {
      return Pt.hasOwnProperty(e) ? Pt[e] : null;
    }
    function Xt(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === Ja || t === jn || t === sr, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Pt = {}, ya = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ya.forEach(function(e) {
      Pt[e] = new Xt(
        e,
        Zn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Pt[t] = new Xt(
        t,
        Rr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        Ja,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        Ja,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        jn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        jn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        sr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        zi,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        qr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Na = /[\-\:]([a-z])/g, La = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Na, La);
      Pt[t] = new Xt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Na, La);
      Pt[t] = new Xt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Na, La);
      Pt[t] = new Xt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ai = "xlinkHref";
    Pt[Ai] = new Xt(
      "xlinkHref",
      Rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Pt[e] = new Xt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ql = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Kl = !1;
    function Ui(e) {
      !Kl && ql.test(e) && (Kl = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Xl(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Un(a, t), i.sanitizeURL && Ui("" + a);
        var s = i.attributeName, f = null;
        if (i.type === sr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : er(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (er(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === jn)
            return a;
          f = e.getAttribute(s);
        }
        return er(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function di(e, t, a, i) {
      {
        if (!fn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Un(a, t), o === "" + a ? a : o;
      }
    }
    function ga(e, t, a, i) {
      var o = un(t);
      if (!dn(t, o, i)) {
        if (er(t, a, o, i) && (a = null), i || o === null) {
          if (fn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Un(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = o.mustUseProperty;
        if (f) {
          var p = o.propertyName;
          if (a === null) {
            var v = o.type;
            e[p] = v === jn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var S = o.attributeName, C = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(S);
        else {
          var D = o.type, _;
          D === jn || D === sr && a === !0 ? _ = "" : (Un(a, S), _ = "" + a, o.sanitizeURL && Ui(_.toString())), C ? e.setAttributeNS(C, S, _) : e.setAttribute(S, _);
        }
      }
    }
    var cr = Symbol.for("react.element"), Sa = Symbol.for("react.portal"), Kr = Symbol.for("react.fragment"), pi = Symbol.for("react.strict_mode"), vi = Symbol.for("react.profiler"), ji = Symbol.for("react.provider"), R = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), St = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), xt = Symbol.for("react.scope"), pt = Symbol.for("react.debug_trace_mode"), _n = Symbol.for("react.offscreen"), sn = Symbol.for("react.legacy_hidden"), vn = Symbol.for("react.cache"), Tr = Symbol.for("react.tracing_marker"), Za = Symbol.iterator, Bt = "@@iterator";
    function yn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Za && e[Za] || e[Bt];
      return typeof t == "function" ? t : null;
    }
    var it = Object.assign, hi = 0, Fi, vc, Hi, cl, Xr, qu, zr;
    function Ku() {
    }
    Ku.__reactDisabledLog = !0;
    function hc() {
      {
        if (hi === 0) {
          Fi = console.log, vc = console.info, Hi = console.warn, cl = console.error, Xr = console.group, qu = console.groupCollapsed, zr = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ku,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        hi++;
      }
    }
    function mc() {
      {
        if (hi--, hi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: it({}, e, {
              value: Fi
            }),
            info: it({}, e, {
              value: vc
            }),
            warn: it({}, e, {
              value: Hi
            }),
            error: it({}, e, {
              value: cl
            }),
            group: it({}, e, {
              value: Xr
            }),
            groupCollapsed: it({}, e, {
              value: qu
            }),
            groupEnd: it({}, e, {
              value: zr
            })
          });
        }
        hi < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Vi = N.ReactCurrentDispatcher, fl;
    function Jr(e, t, a) {
      {
        if (fl === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            fl = i && i[1] || "";
          }
        return `
` + fl + e;
      }
    }
    var mi = !1, dl;
    {
      var Io = typeof WeakMap == "function" ? WeakMap : Map;
      dl = new Io();
    }
    function Pi(e, t) {
      if (!e || mi)
        return "";
      {
        var a = dl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      mi = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Vi.current, Vi.current = null, hc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (V) {
              i = V;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (V) {
              i = V;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            i = V;
          }
          e();
        }
      } catch (V) {
        if (V && i && typeof V.stack == "string") {
          for (var p = V.stack.split(`
`), v = i.stack.split(`
`), S = p.length - 1, C = v.length - 1; S >= 1 && C >= 0 && p[S] !== v[C]; )
            C--;
          for (; S >= 1 && C >= 0; S--, C--)
            if (p[S] !== v[C]) {
              if (S !== 1 || C !== 1)
                do
                  if (S--, C--, C < 0 || p[S] !== v[C]) {
                    var D = `
` + p[S].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && dl.set(e, D), D;
                  }
                while (S >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        mi = !1, Vi.current = s, mc(), Error.prepareStackTrace = o;
      }
      var _ = e ? e.displayName || e.name : "", F = _ ? Jr(_) : "";
      return typeof e == "function" && dl.set(e, F), F;
    }
    function Jl(e, t, a) {
      return Pi(e, !0);
    }
    function Zl(e, t, a) {
      return Pi(e, !1);
    }
    function pl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Xu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pi(e, pl(e));
      if (typeof e == "string")
        return Jr(e);
      switch (e) {
        case me:
          return Jr("Suspense");
        case Se:
          return Jr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ne:
            return Zl(e.render);
          case St:
            return Xu(e.type, t, a);
          case et: {
            var i = e, o = i._payload, s = i._init;
            try {
              return Xu(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ju(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case X:
          return Jr(e.type);
        case cn:
          return Jr("Lazy");
        case Ne:
          return Jr("Suspense");
        case Be:
          return Jr("SuspenseList");
        case Z:
        case oe:
        case Ie:
          return Zl(e.type);
        case ze:
          return Zl(e.type.render);
        case te:
          return Jl(e.type);
        default:
          return "";
      }
    }
    function Lt(e) {
      try {
        var t = "", a = e;
        do
          t += Ju(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Zu(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function Yo(e) {
      return e.displayName || "Context";
    }
    function Mt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Kr:
          return "Fragment";
        case Sa:
          return "Portal";
        case vi:
          return "Profiler";
        case pi:
          return "StrictMode";
        case me:
          return "Suspense";
        case Se:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Yo(t) + ".Consumer";
          case ji:
            var a = e;
            return Yo(a._context) + ".Provider";
          case ne:
            return Zu(e, e.render, "ForwardRef");
          case St:
            var i = e.displayName || null;
            return i !== null ? i : Mt(e.type) || "Memo";
          case et: {
            var o = e, s = o._payload, f = o._init;
            try {
              return Mt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function yc(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function yi(e) {
      return e.displayName || "Context";
    }
    function Xe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case ct:
          return "Cache";
        case qe:
          var i = a;
          return yi(i) + ".Consumer";
        case We:
          var o = a;
          return yi(o._context) + ".Provider";
        case Kt:
          return "DehydratedFragment";
        case ze:
          return yc(a, a.render, "ForwardRef");
        case de:
          return "Fragment";
        case X:
          return a;
        case ye:
          return "Portal";
        case W:
          return "Root";
        case ee:
          return "Text";
        case cn:
          return Mt(a);
        case nt:
          return a === pi ? "StrictMode" : "Mode";
        case Ae:
          return "Offscreen";
        case Rt:
          return "Profiler";
        case gt:
          return "Scope";
        case Ne:
          return "Suspense";
        case Be:
          return "SuspenseList";
        case ot:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case te:
        case Z:
        case Ot:
        case oe:
        case dt:
        case Ie:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var eo = N.ReactDebugCurrentFrame, tr = null, Zr = !1;
    function Ar() {
      {
        if (tr === null)
          return null;
        var e = tr._debugOwner;
        if (e !== null && typeof e < "u")
          return Xe(e);
      }
      return null;
    }
    function gi() {
      return tr === null ? "" : Lt(tr);
    }
    function bn() {
      eo.getCurrentStack = null, tr = null, Zr = !1;
    }
    function Jt(e) {
      eo.getCurrentStack = e === null ? null : gi, tr = e, Zr = !1;
    }
    function ei() {
      return tr;
    }
    function Ma(e) {
      Zr = e;
    }
    function _r(e) {
      return "" + e;
    }
    function Ur(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Jn(e), e;
        default:
          return "";
      }
    }
    var od = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Wo(e, t) {
      od[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function to(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Go(e) {
      return e._valueTracker;
    }
    function Qo(e) {
      e._valueTracker = null;
    }
    function no(e) {
      var t = "";
      return e && (to(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function za(e) {
      var t = to(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Jn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(p) {
            Jn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Jn(p), i = "" + p;
          },
          stopTracking: function() {
            Qo(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Aa(e) {
      Go(e) || (e._valueTracker = za(e));
    }
    function vl(e) {
      if (!e)
        return !1;
      var t = Go(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = no(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Bi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var qo = !1, hl = !1, $i = !1, Ko = !1;
    function es(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Ua(e, t) {
      var a = e, i = t.checked, o = it({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function Xo(e, t) {
      Wo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !hl && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), hl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !qo && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), qo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ur(t.value != null ? t.value : i),
        controlled: es(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && ga(a, "checked", i, !1);
    }
    function w(e, t) {
      var a = e;
      {
        var i = es(t);
        !a._wrapperState.controlled && i && !Ko && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ko = !0), a._wrapperState.controlled && !i && !$i && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), $i = !0);
      }
      h(e, t);
      var o = Ur(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = _r(o)) : a.value !== _r(o) && (a.value = _r(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ke(a, t.type, o) : t.hasOwnProperty("defaultValue") && ke(a, t.type, Ur(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function j(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = _r(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function $(e, t) {
      var a = e;
      w(a, t), ce(a, t);
    }
    function ce(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Un(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var f = o[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Yh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            vl(f), w(f, p);
          }
        }
      }
    }
    function ke(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Bi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = _r(e._wrapperState.initialValue) : e.defaultValue !== _r(a) && (e.defaultValue = _r(a)));
    }
    var be = !1, Ge = !1, vt = !1;
    function $t(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? x.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ge || (Ge = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (vt || (vt = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !be && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), be = !0);
    }
    function Zt(e, t) {
      t.value != null && e.setAttribute("value", _r(Ur(t.value)));
    }
    var en = Array.isArray;
    function ut(e) {
      return en(e);
    }
    var an;
    an = !1;
    function kn() {
      var e = Ar();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ro = ["value", "defaultValue"];
    function ts(e) {
      {
        Wo("select", e);
        for (var t = 0; t < ro.length; t++) {
          var a = ro[t];
          if (e[a] != null) {
            var i = ut(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, kn()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, kn());
          }
        }
      }
    }
    function Ii(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < o.length; v++) {
          var S = f.hasOwnProperty("$" + o[v].value);
          o[v].selected !== S && (o[v].selected = S), S && i && (o[v].defaultSelected = !0);
        }
      } else {
        for (var C = _r(Ur(a)), D = null, _ = 0; _ < o.length; _++) {
          if (o[_].value === C) {
            o[_].selected = !0, i && (o[_].defaultSelected = !0);
            return;
          }
          D === null && !o[_].disabled && (D = o[_]);
        }
        D !== null && (D.selected = !0);
      }
    }
    function ao(e, t) {
      return it({}, t, {
        value: void 0
      });
    }
    function ns(e, t) {
      var a = e;
      ts(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !an && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), an = !0);
    }
    function ud(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ii(a, !!t.multiple, i, !1) : t.defaultValue != null && Ii(a, !!t.multiple, t.defaultValue, !0);
    }
    function gc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? Ii(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ii(a, !!t.multiple, t.defaultValue, !0) : Ii(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function sd(e, t) {
      var a = e, i = t.value;
      i != null && Ii(a, !!t.multiple, i, !1);
    }
    var vv = !1;
    function Sc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = it({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: _r(a._wrapperState.initialValue)
      });
      return i;
    }
    function hv(e, t) {
      var a = e;
      Wo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !vv && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component"), vv = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ut(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            s = o;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ur(i)
      };
    }
    function mv(e, t) {
      var a = e, i = Ur(t.value), o = Ur(t.defaultValue);
      if (i != null) {
        var s = _r(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = _r(o));
    }
    function yv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function fy(e, t) {
      mv(e, t);
    }
    var ti = "http://www.w3.org/1999/xhtml", dy = "http://www.w3.org/1998/Math/MathML", cd = "http://www.w3.org/2000/svg";
    function fd(e) {
      switch (e) {
        case "svg":
          return cd;
        case "math":
          return dy;
        default:
          return ti;
      }
    }
    function Ec(e, t) {
      return e == null || e === ti ? fd(t) : e === cd && t === "foreignObject" ? ti : e;
    }
    var py = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, Cc, gv = py(function(e, t) {
      if (e.namespaceURI === cd && !("innerHTML" in e)) {
        Cc = Cc || document.createElement("div"), Cc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Cc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ea = 1, Yi = 3, Fn = 8, Wi = 9, rs = 11, ml = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Yi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, vy = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Jo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Sv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Ev = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Jo).forEach(function(e) {
      Ev.forEach(function(t) {
        Jo[Sv(t, e)] = Jo[e];
      });
    });
    function xc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Jo.hasOwnProperty(e) && Jo[e]) ? t + "px" : (Mr(t, e), ("" + t).trim());
    }
    var Cv = /([A-Z])/g, Zo = /^ms-/;
    function hy(e) {
      return e.replace(Cv, "-$1").toLowerCase().replace(Zo, "-ms-");
    }
    var xv = function() {
    };
    {
      var my = /^(?:webkit|moz|o)[A-Z]/, bv = /^-ms-/, wv = /-(.)/g, eu = /;\s*$/, Si = {}, dd = {}, as = !1, Rv = !1, Tv = function(e) {
        return e.replace(wv, function(t, a) {
          return a.toUpperCase();
        });
      }, pd = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Tv(e.replace(bv, "ms-"))
        ));
      }, vd = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, _v = function(e, t) {
        dd.hasOwnProperty(t) && dd[t] || (dd[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(eu, "")));
      }, kv = function(e, t) {
        as || (as = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Dv = function(e, t) {
        Rv || (Rv = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      xv = function(e, t) {
        e.indexOf("-") > -1 ? pd(e) : my.test(e) ? vd(e) : eu.test(t) && _v(e, t), typeof t == "number" && (isNaN(t) ? kv(e, t) : isFinite(t) || Dv(e, t));
      };
    }
    var yy = xv;
    function gy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : hy(i)) + ":", t += xc(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Ov(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || yy(i, t[i]);
          var s = xc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Sy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Nv(e) {
      var t = {};
      for (var a in e)
        for (var i = vy[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function ni(e, t) {
      {
        if (!t)
          return;
        var a = Nv(e), i = Nv(t), o = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (o[v])
              continue;
            o[v] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Sy(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var is = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Lv = it({
      menuitem: !0
    }, is), Mv = "__html";
    function bc(e, t) {
      if (t) {
        if (Lv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Mv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function yl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var tu = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, zv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, nu = {}, ru = new RegExp("^(aria)-[" + fe + "]*$"), hd = new RegExp("^(aria)[A-Z][" + fe + "]*$");
    function ls(e, t) {
      {
        if (ur.call(nu, t) && nu[t])
          return !0;
        if (hd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = zv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), nu[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), nu[t] = !0, !0;
        }
        if (ru.test(t)) {
          var o = t.toLowerCase(), s = zv.hasOwnProperty(o) ? o : null;
          if (s == null)
            return nu[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), nu[t] = !0, !0;
        }
      }
      return !0;
    }
    function md(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = ls(e, i);
          o || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Av(e, t) {
      yl(e, t) || md(e, t);
    }
    var os = !1;
    function au(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !os && (os = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var wc = function() {
    };
    {
      var kr = {}, us = /^on./, Uv = /^on[^A-Z]/, jv = new RegExp("^(aria)-[" + fe + "]*$"), Fv = new RegExp("^(aria)[A-Z][" + fe + "]*$");
      wc = function(e, t, a, i) {
        if (ur.call(kr, t) && kr[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), kr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(o) ? f[o] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), kr[t] = !0, !0;
          if (us.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), kr[t] = !0, !0;
        } else if (us.test(t))
          return Uv.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), kr[t] = !0, !0;
        if (jv.test(t) || Fv.test(t))
          return !0;
        if (o === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), kr[t] = !0, !0;
        if (o === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), kr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), kr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), kr[t] = !0, !0;
        var v = un(t), S = v !== null && v.type === Zn;
        if (tu.hasOwnProperty(o)) {
          var C = tu[o];
          if (C !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, C), kr[t] = !0, !0;
        } else if (!S && t !== o)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), kr[t] = !0, !0;
        return typeof a == "boolean" && pn(t, a, v, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), kr[t] = !0, !0) : S ? !0 : pn(t, a, v, !1) ? (kr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === jn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), kr[t] = !0), !0);
      };
    }
    var Hv = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = wc(e, o, t[o], a);
          s || i.push(o);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Vv(e, t, a) {
      yl(e, t) || Hv(e, t, a);
    }
    var yd = 1, Ei = 2, io = 4, gd = yd | Ei | io, ss = null;
    function Ey(e) {
      ss !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ss = e;
    }
    function cs() {
      ss === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ss = null;
    }
    function Cy(e) {
      return e === ss;
    }
    function Rc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yi ? t.parentNode : t;
    }
    var Tc = null, It = null, gl = null;
    function fs(e) {
      var t = Nu(e);
      if (t) {
        if (typeof Tc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Yh(a);
          Tc(t.stateNode, t.type, i);
        }
      }
    }
    function ds(e) {
      Tc = e;
    }
    function Sd(e) {
      It ? gl ? gl.push(e) : gl = [e] : It = e;
    }
    function Ed() {
      return It !== null || gl !== null;
    }
    function iu() {
      if (It) {
        var e = It, t = gl;
        if (It = null, gl = null, fs(e), t)
          for (var a = 0; a < t.length; a++)
            fs(t[a]);
      }
    }
    var ps = function(e, t) {
      return e(t);
    }, lo = function() {
    }, _c = !1;
    function xy() {
      var e = Ed();
      e && (lo(), iu());
    }
    function Pv(e, t, a) {
      if (_c)
        return e(t, a);
      _c = !0;
      try {
        return ps(e, t, a);
      } finally {
        _c = !1, xy();
      }
    }
    function Bv(e, t, a) {
      ps = e, lo = a;
    }
    function kc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Dc(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && kc(t));
        default:
          return !1;
      }
    }
    function oo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Yh(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Dc(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var vs = !1;
    if (Xn)
      try {
        var uo = {};
        Object.defineProperty(uo, "passive", {
          get: function() {
            vs = !0;
          }
        }), window.addEventListener("test", uo, uo), window.removeEventListener("test", uo, uo);
      } catch {
        vs = !1;
      }
    function Oc(e, t, a, i, o, s, f, p, v) {
      var S = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, S);
      } catch (C) {
        this.onError(C);
      }
    }
    var $v = Oc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Nc = document.createElement("react");
      $v = function(t, a, i, o, s, f, p, v, S) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var C = document.createEvent("Event"), D = !1, _ = !0, F = window.event, V = Object.getOwnPropertyDescriptor(window, "event");
        function I() {
          Nc.removeEventListener(Y, Pe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = F);
        }
        var ge = Array.prototype.slice.call(arguments, 3);
        function Pe() {
          D = !0, I(), a.apply(i, ge), _ = !1;
        }
        var Me, At = !1, Tt = !1;
        function z(A) {
          if (Me = A.error, At = !0, Me === null && A.colno === 0 && A.lineno === 0 && (Tt = !0), A.defaultPrevented && Me != null && typeof Me == "object")
            try {
              Me._suppressLogging = !0;
            } catch {
            }
        }
        var Y = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", z), Nc.addEventListener(Y, Pe, !1), C.initEvent(Y, !1, !1), Nc.dispatchEvent(C), V && Object.defineProperty(window, "event", V), D && _ && (At ? Tt && (Me = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Me = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Me)), window.removeEventListener("error", z), !D)
          return I(), Oc.apply(this, arguments);
      };
    }
    var by = $v, lu = !1, ou = null, ri = !1, Lc = null, uu = {
      onError: function(e) {
        lu = !0, ou = e;
      }
    };
    function ja(e, t, a, i, o, s, f, p, v) {
      lu = !1, ou = null, by.apply(uu, arguments);
    }
    function hs(e, t, a, i, o, s, f, p, v) {
      if (ja.apply(this, arguments), lu) {
        var S = xd();
        ri || (ri = !0, Lc = S);
      }
    }
    function Gi() {
      if (ri) {
        var e = Lc;
        throw ri = !1, Lc = null, e;
      }
    }
    function Cd() {
      return lu;
    }
    function xd() {
      if (lu) {
        var e = ou;
        return lu = !1, ou = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function su(e) {
      return e._reactInternals;
    }
    function so(e) {
      return e._reactInternals !== void 0;
    }
    function ms(e, t) {
      e._reactInternals = t;
    }
    var Ue = (
      /*                      */
      0
    ), Qi = (
      /*                */
      1
    ), wn = (
      /*                    */
      2
    ), bt = (
      /*                       */
      4
    ), ta = (
      /*                */
      16
    ), Gt = (
      /*                 */
      32
    ), ln = (
      /*                     */
      64
    ), mt = (
      /*                   */
      128
    ), gn = (
      /*            */
      256
    ), Hn = (
      /*                          */
      512
    ), Fa = (
      /*                     */
      1024
    ), Ea = (
      /*                      */
      2048
    ), Rn = (
      /*                    */
      4096
    ), Ci = (
      /*                   */
      8192
    ), Mc = (
      /*             */
      16384
    ), Iv = (
      /*               */
      32767
    ), co = (
      /*                   */
      32768
    ), Dr = (
      /*                */
      65536
    ), ai = (
      /* */
      131072
    ), ys = (
      /*                       */
      1048576
    ), gs = (
      /*                    */
      2097152
    ), Sl = (
      /*                 */
      4194304
    ), bd = (
      /*                */
      8388608
    ), jr = (
      /*               */
      16777216
    ), El = (
      /*              */
      33554432
    ), Cl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      bt | Fa | 0
    ), cu = wn | bt | ta | Gt | Hn | Rn | Ci, xl = bt | ln | Hn | Ci, fr = Ea | ta, Vn = Sl | bd | gs, fo = N.ReactCurrentOwner;
    function Fr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (wn | Rn)) !== Ue && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === W ? a : null;
    }
    function xi(e) {
      if (e.tag === Ne) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function bl(e) {
      return e.tag === W ? e.stateNode.containerInfo : null;
    }
    function Yv(e) {
      return Fr(e) === e;
    }
    function wd(e) {
      {
        var t = fo.current;
        if (t !== null && t.tag === te) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Xe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = su(e);
      return o ? Fr(o) === o : !1;
    }
    function zc(e) {
      if (Fr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function na(e) {
      var t = e.alternate;
      if (!t) {
        var a = Fr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = o = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return zc(s), e;
            if (v === o)
              return zc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = f;
        else {
          for (var S = !1, C = s.child; C; ) {
            if (C === i) {
              S = !0, i = s, o = f;
              break;
            }
            if (C === o) {
              S = !0, o = s, i = f;
              break;
            }
            C = C.sibling;
          }
          if (!S) {
            for (C = f.child; C; ) {
              if (C === i) {
                S = !0, i = f, o = s;
                break;
              }
              if (C === o) {
                S = !0, o = f, i = s;
                break;
              }
              C = C.sibling;
            }
            if (!S)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== W)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ra(e) {
      var t = na(e);
      return t !== null ? hn(t) : null;
    }
    function hn(e) {
      if (e.tag === X || e.tag === ee)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = hn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ii(e) {
      var t = na(e);
      return t !== null ? Rd(t) : null;
    }
    function Rd(e) {
      if (e.tag === X || e.tag === ee)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ye) {
          var a = Rd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Td = E.unstable_scheduleCallback, _d = E.unstable_cancelCallback, kd = E.unstable_shouldYield, Wv = E.unstable_requestPaint, Dn = E.unstable_now, Gv = E.unstable_getCurrentPriorityLevel, qi = E.unstable_ImmediatePriority, Ss = E.unstable_UserBlockingPriority, po = E.unstable_NormalPriority, Es = E.unstable_LowPriority, fu = E.unstable_IdlePriority, Qv = E.unstable_yieldValue, qv = E.unstable_setDisableYieldValue, li = null, dr = null, he = null, Ca = !1, Or = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Dd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ke && (e = it({}, e, {
          getLaneLabelMap: Md,
          injectProfilingHooks: vo
        })), li = t.inject(e), dr = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Od(e, t) {
      if (dr && typeof dr.onScheduleFiberRoot == "function")
        try {
          dr.onScheduleFiberRoot(li, e, t);
        } catch (a) {
          Ca || (Ca = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function Nd(e, t) {
      if (dr && typeof dr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & mt) === mt;
          if (Ze) {
            var i;
            switch (t) {
              case ua:
                i = qi;
                break;
              case Va:
                i = Ss;
                break;
              case pr:
                i = po;
                break;
              case ff:
                i = fu;
                break;
              default:
                i = po;
                break;
            }
            dr.onCommitFiberRoot(li, e, i, a);
          }
        } catch (o) {
          Ca || (Ca = !0, y("React instrumentation encountered an error: %s", o));
        }
    }
    function Ld(e) {
      if (dr && typeof dr.onPostCommitFiberRoot == "function")
        try {
          dr.onPostCommitFiberRoot(li, e);
        } catch (t) {
          Ca || (Ca = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function du(e) {
      if (dr && typeof dr.onCommitFiberUnmount == "function")
        try {
          dr.onCommitFiberUnmount(li, e);
        } catch (t) {
          Ca || (Ca = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Qt(e) {
      if (typeof Qv == "function" && (qv(e), L(e)), dr && typeof dr.setStrictMode == "function")
        try {
          dr.setStrictMode(li, e);
        } catch (t) {
          Ca || (Ca = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function vo(e) {
      he = e;
    }
    function Md() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Hd; a++) {
          var i = th(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Kv(e) {
      he !== null && typeof he.markCommitStarted == "function" && he.markCommitStarted(e);
    }
    function bi() {
      he !== null && typeof he.markCommitStopped == "function" && he.markCommitStopped();
    }
    function Ha(e) {
      he !== null && typeof he.markComponentRenderStarted == "function" && he.markComponentRenderStarted(e);
    }
    function wl() {
      he !== null && typeof he.markComponentRenderStopped == "function" && he.markComponentRenderStopped();
    }
    function Xv(e) {
      he !== null && typeof he.markComponentPassiveEffectMountStarted == "function" && he.markComponentPassiveEffectMountStarted(e);
    }
    function Ki() {
      he !== null && typeof he.markComponentPassiveEffectMountStopped == "function" && he.markComponentPassiveEffectMountStopped();
    }
    function Rl(e) {
      he !== null && typeof he.markComponentPassiveEffectUnmountStarted == "function" && he.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ac() {
      he !== null && typeof he.markComponentPassiveEffectUnmountStopped == "function" && he.markComponentPassiveEffectUnmountStopped();
    }
    function Jv(e) {
      he !== null && typeof he.markComponentLayoutEffectMountStarted == "function" && he.markComponentLayoutEffectMountStarted(e);
    }
    function Uc() {
      he !== null && typeof he.markComponentLayoutEffectMountStopped == "function" && he.markComponentLayoutEffectMountStopped();
    }
    function zd(e) {
      he !== null && typeof he.markComponentLayoutEffectUnmountStarted == "function" && he.markComponentLayoutEffectUnmountStarted(e);
    }
    function pu() {
      he !== null && typeof he.markComponentLayoutEffectUnmountStopped == "function" && he.markComponentLayoutEffectUnmountStopped();
    }
    function wi(e, t, a) {
      he !== null && typeof he.markComponentErrored == "function" && he.markComponentErrored(e, t, a);
    }
    function Cs(e, t, a) {
      he !== null && typeof he.markComponentSuspended == "function" && he.markComponentSuspended(e, t, a);
    }
    function xs(e) {
      he !== null && typeof he.markLayoutEffectsStarted == "function" && he.markLayoutEffectsStarted(e);
    }
    function ho() {
      he !== null && typeof he.markLayoutEffectsStopped == "function" && he.markLayoutEffectsStopped();
    }
    function Ad(e) {
      he !== null && typeof he.markPassiveEffectsStarted == "function" && he.markPassiveEffectsStarted(e);
    }
    function vu() {
      he !== null && typeof he.markPassiveEffectsStopped == "function" && he.markPassiveEffectsStopped();
    }
    function Ud(e) {
      he !== null && typeof he.markRenderStarted == "function" && he.markRenderStarted(e);
    }
    function jd() {
      he !== null && typeof he.markRenderYielded == "function" && he.markRenderYielded();
    }
    function Sn() {
      he !== null && typeof he.markRenderStopped == "function" && he.markRenderStopped();
    }
    function jc(e) {
      he !== null && typeof he.markRenderScheduled == "function" && he.markRenderScheduled(e);
    }
    function Fd(e, t) {
      he !== null && typeof he.markForceUpdateScheduled == "function" && he.markForceUpdateScheduled(e, t);
    }
    function bs(e, t) {
      he !== null && typeof he.markStateUpdateScheduled == "function" && he.markStateUpdateScheduled(e, t);
    }
    var je = (
      /*                         */
      0
    ), Et = (
      /*                 */
      1
    ), kt = (
      /*                    */
      2
    ), lt = (
      /*               */
      8
    ), tn = (
      /*              */
      16
    ), Wn = Math.clz32 ? Math.clz32 : Rs, Fc = Math.log, ws = Math.LN2;
    function Rs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Fc(t) / ws | 0) | 0;
    }
    var Hd = 31, G = (
      /*                        */
      0
    ), Pn = (
      /*                          */
      0
    ), Ye = (
      /*                        */
      1
    ), Tl = (
      /*    */
      2
    ), nr = (
      /*             */
      4
    ), rr = (
      /*            */
      8
    ), aa = (
      /*                     */
      16
    ), mo = (
      /*                */
      32
    ), _l = (
      /*                       */
      4194240
    ), hu = (
      /*                        */
      64
    ), Hc = (
      /*                        */
      128
    ), Vc = (
      /*                        */
      256
    ), Pc = (
      /*                        */
      512
    ), Bc = (
      /*                        */
      1024
    ), $c = (
      /*                        */
      2048
    ), Ic = (
      /*                        */
      4096
    ), Yc = (
      /*                        */
      8192
    ), yo = (
      /*                        */
      16384
    ), Wc = (
      /*                       */
      32768
    ), mu = (
      /*                       */
      65536
    ), yu = (
      /*                       */
      131072
    ), Gc = (
      /*                       */
      262144
    ), Ts = (
      /*                       */
      524288
    ), Qc = (
      /*                       */
      1048576
    ), qc = (
      /*                       */
      2097152
    ), _s = (
      /*                            */
      130023424
    ), go = (
      /*                             */
      4194304
    ), ks = (
      /*                             */
      8388608
    ), Kc = (
      /*                             */
      16777216
    ), Xc = (
      /*                             */
      33554432
    ), Jc = (
      /*                             */
      67108864
    ), Zv = go, gu = (
      /*          */
      134217728
    ), eh = (
      /*                          */
      268435455
    ), Ds = (
      /*               */
      268435456
    ), kl = (
      /*                        */
      536870912
    ), ia = (
      /*                   */
      1073741824
    );
    function th(e) {
      {
        if (e & Ye)
          return "Sync";
        if (e & Tl)
          return "InputContinuousHydration";
        if (e & nr)
          return "InputContinuous";
        if (e & rr)
          return "DefaultHydration";
        if (e & aa)
          return "Default";
        if (e & mo)
          return "TransitionHydration";
        if (e & _l)
          return "Transition";
        if (e & _s)
          return "Retry";
        if (e & gu)
          return "SelectiveHydration";
        if (e & Ds)
          return "IdleHydration";
        if (e & kl)
          return "Idle";
        if (e & ia)
          return "Offscreen";
      }
    }
    var qt = -1, Zc = hu, ef = go;
    function Os(e) {
      switch (So(e)) {
        case Ye:
          return Ye;
        case Tl:
          return Tl;
        case nr:
          return nr;
        case rr:
          return rr;
        case aa:
          return aa;
        case mo:
          return mo;
        case hu:
        case Hc:
        case Vc:
        case Pc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case yo:
        case Wc:
        case mu:
        case yu:
        case Gc:
        case Ts:
        case Qc:
        case qc:
          return e & _l;
        case go:
        case ks:
        case Kc:
        case Xc:
        case Jc:
          return e & _s;
        case gu:
          return gu;
        case Ds:
          return Ds;
        case kl:
          return kl;
        case ia:
          return ia;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function la(e, t) {
      var a = e.pendingLanes;
      if (a === G)
        return G;
      var i = G, o = e.suspendedLanes, s = e.pingedLanes, f = a & eh;
      if (f !== G) {
        var p = f & ~o;
        if (p !== G)
          i = Os(p);
        else {
          var v = f & s;
          v !== G && (i = Os(v));
        }
      } else {
        var S = a & ~o;
        S !== G ? i = Os(S) : s !== G && (i = Os(s));
      }
      if (i === G)
        return G;
      if (t !== G && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === G) {
        var C = So(i), D = So(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          C >= D || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          C === aa && (D & _l) !== G
        )
          return t;
      }
      (i & nr) !== G && (i |= a & aa);
      var _ = e.entangledLanes;
      if (_ !== G)
        for (var F = e.entanglements, V = i & _; V > 0; ) {
          var I = On(V), ge = 1 << I;
          i |= F[I], V &= ~ge;
        }
      return i;
    }
    function Vd(e, t) {
      for (var a = e.eventTimes, i = qt; t > 0; ) {
        var o = On(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function tf(e, t) {
      switch (e) {
        case Ye:
        case Tl:
        case nr:
          return t + 250;
        case rr:
        case aa:
        case mo:
        case hu:
        case Hc:
        case Vc:
        case Pc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case yo:
        case Wc:
        case mu:
        case yu:
        case Gc:
        case Ts:
        case Qc:
        case qc:
          return t + 5e3;
        case go:
        case ks:
        case Kc:
        case Xc:
        case Jc:
          return qt;
        case gu:
        case Ds:
        case kl:
        case ia:
          return qt;
        default:
          return y("Should have found matching lanes. This is a bug in React."), qt;
      }
    }
    function nh(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = On(f), v = 1 << p, S = s[p];
        S === qt ? ((v & i) === G || (v & o) !== G) && (s[p] = tf(v, t)) : S <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function rh(e) {
      return Os(e.pendingLanes);
    }
    function nf(e) {
      var t = e.pendingLanes & ~ia;
      return t !== G ? t : t & ia ? ia : G;
    }
    function Pd(e) {
      return (e & Ye) !== G;
    }
    function Dl(e) {
      return (e & eh) !== G;
    }
    function rf(e) {
      return (e & _s) === e;
    }
    function Bd(e) {
      var t = Ye | nr | aa;
      return (e & t) === G;
    }
    function wy(e) {
      return (e & _l) === e;
    }
    function Ns(e, t) {
      var a = Tl | nr | rr | aa;
      return (t & a) !== G;
    }
    function ah(e, t) {
      return (t & e.expiredLanes) !== G;
    }
    function $d(e) {
      return (e & _l) !== G;
    }
    function Id() {
      var e = Zc;
      return Zc <<= 1, (Zc & _l) === G && (Zc = hu), e;
    }
    function ih() {
      var e = ef;
      return ef <<= 1, (ef & _s) === G && (ef = go), e;
    }
    function So(e) {
      return e & -e;
    }
    function ar(e) {
      return So(e);
    }
    function On(e) {
      return 31 - Wn(e);
    }
    function af(e) {
      return On(e);
    }
    function oa(e, t) {
      return (e & t) !== G;
    }
    function Eo(e, t) {
      return (e & t) === t;
    }
    function st(e, t) {
      return e | t;
    }
    function Ls(e, t) {
      return e & ~t;
    }
    function lf(e, t) {
      return e & t;
    }
    function Ry(e) {
      return e;
    }
    function Yd(e, t) {
      return e !== Pn && e < t ? e : t;
    }
    function of(e) {
      for (var t = [], a = 0; a < Hd; a++)
        t.push(e);
      return t;
    }
    function Su(e, t, a) {
      e.pendingLanes |= t, t !== kl && (e.suspendedLanes = G, e.pingedLanes = G);
      var i = e.eventTimes, o = af(t);
      i[o] = a;
    }
    function Wd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = On(i), s = 1 << o;
        a[o] = qt, i &= ~s;
      }
    }
    function uf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function lh(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = G, e.pingedLanes = G, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = On(f), v = 1 << p;
        i[p] = G, o[p] = qt, s[p] = qt, f &= ~v;
      }
    }
    function Ms(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = On(o), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~f;
      }
    }
    function sf(e, t) {
      var a = So(t), i;
      switch (a) {
        case nr:
          i = Tl;
          break;
        case aa:
          i = rr;
          break;
        case hu:
        case Hc:
        case Vc:
        case Pc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case yo:
        case Wc:
        case mu:
        case yu:
        case Gc:
        case Ts:
        case Qc:
        case qc:
        case go:
        case ks:
        case Kc:
        case Xc:
        case Jc:
          i = mo;
          break;
        case kl:
          i = Ds;
          break;
        default:
          i = Pn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Pn ? Pn : i;
    }
    function oh(e, t, a) {
      if (Or)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = af(a), s = 1 << o, f = i[o];
          f.add(t), a &= ~s;
        }
    }
    function Gd(e, t) {
      if (Or)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = af(t), s = 1 << o, f = a[o];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function cf(e, t) {
      return null;
    }
    var ua = Ye, Va = nr, pr = aa, ff = kl, Eu = Pn;
    function xa() {
      return Eu;
    }
    function Gn(e) {
      Eu = e;
    }
    function uh(e, t) {
      var a = Eu;
      try {
        return Eu = e, t();
      } finally {
        Eu = a;
      }
    }
    function zs(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Nr(e, t) {
      return e > t ? e : t;
    }
    function Qd(e, t) {
      return e !== 0 && e < t;
    }
    function sh(e) {
      var t = So(e);
      return Qd(ua, t) ? Qd(Va, t) ? Dl(t) ? pr : ff : Va : ua;
    }
    function Co(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var vr;
    function Ty(e) {
      vr = e;
    }
    function _e(e) {
      vr(e);
    }
    var Ol;
    function qd(e) {
      Ol = e;
    }
    var Kd;
    function _y(e) {
      Kd = e;
    }
    var Cu;
    function df(e) {
      Cu = e;
    }
    var pf;
    function ch(e) {
      pf = e;
    }
    var vf = !1, As = [], Ri = null, Ti = null, En = null, Hr = /* @__PURE__ */ new Map(), Pa = /* @__PURE__ */ new Map(), Xi = [], fh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function oi(e) {
      return fh.indexOf(e) > -1;
    }
    function dh(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function ui(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ri = null;
          break;
        case "dragenter":
        case "dragleave":
          Ti = null;
          break;
        case "mouseover":
        case "mouseout":
          En = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Hr.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Pa.delete(i);
          break;
        }
      }
    }
    function Us(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = dh(t, a, i, o, s);
        if (t !== null) {
          var p = Nu(t);
          p !== null && Ol(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return o !== null && v.indexOf(o) === -1 && v.push(o), e;
    }
    function ph(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return Ri = Us(Ri, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = o;
          return Ti = Us(Ti, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = o;
          return En = Us(En, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = o, S = v.pointerId;
          return Hr.set(S, Us(Hr.get(S) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var C = o, D = C.pointerId;
          return Pa.set(D, Us(Pa.get(D) || null, e, t, a, i, C)), !0;
        }
      }
      return !1;
    }
    function Xd(e) {
      var t = Ks(e.target);
      if (t !== null) {
        var a = Fr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ne) {
            var o = xi(a);
            if (o !== null) {
              e.blockedOn = o, pf(e.priority, function() {
                Kd(a);
              });
              return;
            }
          } else if (i === W) {
            var s = a.stateNode;
            if (Co(s)) {
              e.blockedOn = bl(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function vh(e) {
      for (var t = Cu(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Xi.length && Qd(t, Xi[i].priority); i++)
        ;
      Xi.splice(i, 0, a), i === 0 && Xd(a);
    }
    function js(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Fs(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          Ey(s), o.target.dispatchEvent(s), cs();
        } else {
          var f = Nu(i);
          return f !== null && Ol(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function hh(e, t, a) {
      js(e) && a.delete(t);
    }
    function hf() {
      vf = !1, Ri !== null && js(Ri) && (Ri = null), Ti !== null && js(Ti) && (Ti = null), En !== null && js(En) && (En = null), Hr.forEach(hh), Pa.forEach(hh);
    }
    function xo(e, t) {
      e.blockedOn === t && (e.blockedOn = null, vf || (vf = !0, E.unstable_scheduleCallback(E.unstable_NormalPriority, hf)));
    }
    function Lr(e) {
      if (As.length > 0) {
        xo(As[0], e);
        for (var t = 1; t < As.length; t++) {
          var a = As[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ri !== null && xo(Ri, e), Ti !== null && xo(Ti, e), En !== null && xo(En, e);
      var i = function(p) {
        return xo(p, e);
      };
      Hr.forEach(i), Pa.forEach(i);
      for (var o = 0; o < Xi.length; o++) {
        var s = Xi[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Xi.length > 0; ) {
        var f = Xi[0];
        if (f.blockedOn !== null)
          break;
        Xd(f), f.blockedOn === null && Xi.shift();
      }
    }
    var wt = N.ReactCurrentBatchConfig, Bn = !0;
    function Nn(e) {
      Bn = !!e;
    }
    function hr() {
      return Bn;
    }
    function ba(e, t, a) {
      var i = bu(t), o;
      switch (i) {
        case ua:
          o = xu;
          break;
        case Va:
          o = Qn;
          break;
        case pr:
        default:
          o = bo;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function xu(e, t, a, i) {
      var o = xa(), s = wt.transition;
      wt.transition = null;
      try {
        Gn(ua), bo(e, t, a, i);
      } finally {
        Gn(o), wt.transition = s;
      }
    }
    function Qn(e, t, a, i) {
      var o = xa(), s = wt.transition;
      wt.transition = null;
      try {
        Gn(Va), bo(e, t, a, i);
      } finally {
        Gn(o), wt.transition = s;
      }
    }
    function bo(e, t, a, i) {
      Bn && wo(e, t, a, i);
    }
    function wo(e, t, a, i) {
      var o = Fs(e, t, a, i);
      if (o === null) {
        Iy(e, t, i, Ro, a), ui(e, i);
        return;
      }
      if (ph(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ui(e, i), t & io && oi(e)) {
        for (; o !== null; ) {
          var s = Nu(o);
          s !== null && _e(s);
          var f = Fs(e, t, a, i);
          if (f === null && Iy(e, t, i, Ro, a), f === o)
            break;
          o = f;
        }
        o !== null && i.stopPropagation();
        return;
      }
      Iy(e, t, i, null, a);
    }
    var Ro = null;
    function Fs(e, t, a, i) {
      Ro = null;
      var o = Rc(i), s = Ks(o);
      if (s !== null) {
        var f = Fr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ne) {
            var v = xi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === W) {
            var S = f.stateNode;
            if (Co(S))
              return bl(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Ro = s, null;
    }
    function bu(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return ua;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Va;
        case "message": {
          var t = Gv();
          switch (t) {
            case qi:
              return ua;
            case Ss:
              return Va;
            case po:
            case Es:
              return pr;
            case fu:
              return ff;
            default:
              return pr;
          }
        }
        default:
          return pr;
      }
    }
    function sa(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Jd(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function wu(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ji(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Nl = null, Hs = null, Ba = null;
    function mf(e) {
      return Nl = e, Hs = Ru(), !0;
    }
    function Ll() {
      Nl = null, Hs = null, Ba = null;
    }
    function Vs() {
      if (Ba)
        return Ba;
      var e, t = Hs, a = t.length, i, o = Ru(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === o[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ba = o.slice(e, p), Ba;
    }
    function Ru() {
      return "value" in Nl ? Nl.value : Nl.textContent;
    }
    function Tu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function To() {
      return !0;
    }
    function Ps() {
      return !1;
    }
    function on(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var S = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return S ? this.isDefaultPrevented = To : this.isDefaultPrevented = Ps, this.isPropagationStopped = Ps, this;
      }
      return it(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = To);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = To);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: To
      }), t;
    }
    var wa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ra = on(wa), ir = it({}, wa, {
      view: 0,
      detail: 0
    }), mh = on(ir), Bs, $s, Is;
    function Ml(e) {
      e !== Is && (Is && e.type === "mousemove" ? (Bs = e.screenX - Is.screenX, $s = e.screenY - Is.screenY) : (Bs = 0, $s = 0), Is = e);
    }
    var Ys = it({}, ir, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: np,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ml(e), Bs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : $s;
      }
    }), yf = on(Ys), _o = it({}, Ys, {
      dataTransfer: 0
    }), Zd = on(_o), ko = it({}, ir, {
      relatedTarget: 0
    }), gf = on(ko), yh = it({}, wa, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ep = on(yh), Sf = it({}, wa, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), ky = on(Sf), Dy = it({}, wa, {
      data: 0
    }), tp = on(Dy), gh = tp, Do = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Oy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function _u(e) {
      if (e.key) {
        var t = Do[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Tu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Oy[e.keyCode] || "Unidentified" : "";
    }
    var Sh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Tn(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Sh[e];
      return i ? !!a[i] : !1;
    }
    function np(e) {
      return Tn;
    }
    var Eh = it({}, ir, {
      key: _u,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: np,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Tu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Tu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Ny = on(Eh), Ly = it({}, Ys, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), rp = on(Ly), Ch = it({}, ir, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: np
    }), My = on(Ch), $a = it({}, wa, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ap = on($a), zy = it({}, Ys, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), zl = on(zy), Ef = [9, 13, 27, 32], Al = 229, ku = Xn && "CompositionEvent" in window, Oo = null;
    Xn && "documentMode" in document && (Oo = document.documentMode);
    var ip = Xn && "TextEvent" in window && !Oo, xh = Xn && (!ku || Oo && Oo > 8 && Oo <= 11), Cf = 32, bh = String.fromCharCode(Cf);
    function wh() {
      Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Wt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Wt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Wt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var lp = !1;
    function xf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function bf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Rh(e, t) {
      return e === "keydown" && t.keyCode === Al;
    }
    function wf(e, t) {
      switch (e) {
        case "keyup":
          return Ef.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Al;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Th(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function op(e) {
      return e.locale === "ko";
    }
    var Ul = !1;
    function Rf(e, t, a, i, o) {
      var s, f;
      if (ku ? s = bf(t) : Ul ? wf(t, i) && (s = "onCompositionEnd") : Rh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      xh && !op(i) && (!Ul && s === "onCompositionStart" ? Ul = mf(o) : s === "onCompositionEnd" && Ul && (f = Vs()));
      var p = Lh(a, s);
      if (p.length > 0) {
        var v = new tp(s, t, null, i, o);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var S = Th(i);
          S !== null && (v.data = S);
        }
      }
    }
    function up(e, t) {
      switch (e) {
        case "compositionend":
          return Th(t);
        case "keypress":
          var a = t.which;
          return a !== Cf ? null : (lp = !0, bh);
        case "textInput":
          var i = t.data;
          return i === bh && lp ? null : i;
        default:
          return null;
      }
    }
    function Tf(e, t) {
      if (Ul) {
        if (e === "compositionend" || !ku && wf(e, t)) {
          var a = Vs();
          return Ll(), Ul = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!xf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return xh && !op(t) ? null : t.data;
        default:
          return null;
      }
    }
    function _h(e, t, a, i, o) {
      var s;
      if (ip ? s = up(t, i) : s = Tf(t, i), !s)
        return null;
      var f = Lh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new gh("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Ay(e, t, a, i, o, s, f) {
      Rf(e, t, a, i, o), _h(e, t, a, i, o);
    }
    var _f = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function kh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!_f[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Ws(e) {
      if (!Xn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Uy() {
      Wt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Gs(e, t, a, i) {
      Sd(i);
      var o = Lh(t, "onChange");
      if (o.length > 0) {
        var s = new Ra("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var n = null, r = null;
    function l(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function u(e) {
      var t = [];
      Gs(t, r, e, Rc(e)), Pv(c, t);
    }
    function c(e) {
      J0(e, 0);
    }
    function d(e) {
      var t = Mf(e);
      if (vl(t))
        return e;
    }
    function m(e, t) {
      if (e === "change")
        return t;
    }
    var b = !1;
    Xn && (b = Ws("input") && (!document.documentMode || document.documentMode > 9));
    function T(e, t) {
      n = e, r = t, n.attachEvent("onpropertychange", ae);
    }
    function H() {
      n && (n.detachEvent("onpropertychange", ae), n = null, r = null);
    }
    function ae(e) {
      e.propertyName === "value" && d(r) && u(e);
    }
    function ie(e, t, a) {
      e === "focusin" ? (H(), T(t, a)) : e === "focusout" && H();
    }
    function re(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return d(r);
    }
    function we(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function De(e, t) {
      if (e === "click")
        return d(t);
    }
    function Le(e, t) {
      if (e === "input" || e === "change")
        return d(t);
    }
    function Ln(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ke(e, "number", e.value);
    }
    function M(e, t, a, i, o, s, f) {
      var p = a ? Mf(a) : window, v, S;
      if (l(p) ? v = m : kh(p) ? b ? v = Le : (v = re, S = ie) : we(p) && (v = De), v) {
        var C = v(t, a);
        if (C) {
          Gs(e, C, i, o);
          return;
        }
      }
      S && S(t, p, a), t === "focusout" && Ln(p);
    }
    function k() {
      zn("onMouseEnter", ["mouseout", "mouseover"]), zn("onMouseLeave", ["mouseout", "mouseover"]), zn("onPointerEnter", ["pointerout", "pointerover"]), zn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function U(e, t, a, i, o, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Cy(i)) {
        var S = i.relatedTarget || i.fromElement;
        if (S && (Ks(S) || xp(S)))
          return;
      }
      if (!(!v && !p)) {
        var C;
        if (o.window === o)
          C = o;
        else {
          var D = o.ownerDocument;
          D ? C = D.defaultView || D.parentWindow : C = window;
        }
        var _, F;
        if (v) {
          var V = i.relatedTarget || i.toElement;
          if (_ = a, F = V ? Ks(V) : null, F !== null) {
            var I = Fr(F);
            (F !== I || F.tag !== X && F.tag !== ee) && (F = null);
          }
        } else
          _ = null, F = a;
        if (_ !== F) {
          var ge = yf, Pe = "onMouseLeave", Me = "onMouseEnter", At = "mouse";
          (t === "pointerout" || t === "pointerover") && (ge = rp, Pe = "onPointerLeave", Me = "onPointerEnter", At = "pointer");
          var Tt = _ == null ? C : Mf(_), z = F == null ? C : Mf(F), Y = new ge(Pe, At + "leave", _, i, o);
          Y.target = Tt, Y.relatedTarget = z;
          var A = null, le = Ks(o);
          if (le === a) {
            var Te = new ge(Me, At + "enter", F, i, o);
            Te.target = z, Te.relatedTarget = Tt, A = Te;
          }
          Lw(e, Y, A, _, F);
        }
      }
    }
    function se(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ee = typeof Object.is == "function" ? Object.is : se;
    function He(e, t) {
      if (Ee(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!ur.call(t, s) || !Ee(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function $e(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Je(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function qn(e, t) {
      for (var a = $e(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Yi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = $e(Je(a));
      }
    }
    function jt(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return jl(e, o, s, f, p);
    }
    function jl(e, t, a, i, o) {
      var s = 0, f = -1, p = -1, v = 0, S = 0, C = e, D = null;
      e: for (; ; ) {
        for (var _ = null; C === t && (a === 0 || C.nodeType === Yi) && (f = s + a), C === i && (o === 0 || C.nodeType === Yi) && (p = s + o), C.nodeType === Yi && (s += C.nodeValue.length), (_ = C.firstChild) !== null; )
          D = C, C = _;
        for (; ; ) {
          if (C === e)
            break e;
          if (D === t && ++v === a && (f = s), D === i && ++S === o && (p = s), (_ = C.nextSibling) !== null)
            break;
          C = D, D = C.parentNode;
        }
        C = _;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function jy(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!o.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var S = qn(e, f), C = qn(e, p);
        if (S && C) {
          if (o.rangeCount === 1 && o.anchorNode === S.node && o.anchorOffset === S.offset && o.focusNode === C.node && o.focusOffset === C.offset)
            return;
          var D = a.createRange();
          D.setStart(S.node, S.offset), o.removeAllRanges(), f > p ? (o.addRange(D), o.extend(C.node, C.offset)) : (D.setEnd(C.node, C.offset), o.addRange(D));
        }
      }
    }
    function V0(e) {
      return e && e.nodeType === Yi;
    }
    function P0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : V0(e) ? !1 : V0(t) ? P0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function vw(e) {
      return e && e.ownerDocument && P0(e.ownerDocument.documentElement, e);
    }
    function hw(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function B0() {
      for (var e = window, t = Bi(); t instanceof e.HTMLIFrameElement; ) {
        if (hw(t))
          e = t.contentWindow;
        else
          return t;
        t = Bi(e.document);
      }
      return t;
    }
    function Fy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function mw() {
      var e = B0();
      return {
        focusedElem: e,
        selectionRange: Fy(e) ? gw(e) : null
      };
    }
    function yw(e) {
      var t = B0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && vw(a)) {
        i !== null && Fy(a) && Sw(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === ea && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < o.length; f++) {
          var p = o[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function gw(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = jt(e), t || {
        start: 0,
        end: 0
      };
    }
    function Sw(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : jy(e, t);
    }
    var Ew = Xn && "documentMode" in document && document.documentMode <= 11;
    function Cw() {
      Wt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var kf = null, Hy = null, sp = null, Vy = !1;
    function xw(e) {
      if ("selectionStart" in e && Fy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function bw(e) {
      return e.window === e ? e.document : e.nodeType === Wi ? e : e.ownerDocument;
    }
    function $0(e, t, a) {
      var i = bw(a);
      if (!(Vy || kf == null || kf !== Bi(i))) {
        var o = xw(kf);
        if (!sp || !He(sp, o)) {
          sp = o;
          var s = Lh(Hy, "onSelect");
          if (s.length > 0) {
            var f = new Ra("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = kf;
          }
        }
      }
    }
    function ww(e, t, a, i, o, s, f) {
      var p = a ? Mf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (kh(p) || p.contentEditable === "true") && (kf = p, Hy = a, sp = null);
          break;
        case "focusout":
          kf = null, Hy = null, sp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Vy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Vy = !1, $0(e, i, o);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (Ew)
            break;
        // falls through
        case "keydown":
        case "keyup":
          $0(e, i, o);
      }
    }
    function Dh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Df = {
      animationend: Dh("Animation", "AnimationEnd"),
      animationiteration: Dh("Animation", "AnimationIteration"),
      animationstart: Dh("Animation", "AnimationStart"),
      transitionend: Dh("Transition", "TransitionEnd")
    }, Py = {}, I0 = {};
    Xn && (I0 = document.createElement("div").style, "AnimationEvent" in window || (delete Df.animationend.animation, delete Df.animationiteration.animation, delete Df.animationstart.animation), "TransitionEvent" in window || delete Df.transitionend.transition);
    function Oh(e) {
      if (Py[e])
        return Py[e];
      if (!Df[e])
        return e;
      var t = Df[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in I0)
          return Py[e] = t[a];
      return e;
    }
    var Y0 = Oh("animationend"), W0 = Oh("animationiteration"), G0 = Oh("animationstart"), Q0 = Oh("transitionend"), q0 = /* @__PURE__ */ new Map(), K0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Du(e, t) {
      q0.set(e, t), Wt(t, [e]);
    }
    function Rw() {
      for (var e = 0; e < K0.length; e++) {
        var t = K0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Du(a, "on" + i);
      }
      Du(Y0, "onAnimationEnd"), Du(W0, "onAnimationIteration"), Du(G0, "onAnimationStart"), Du("dblclick", "onDoubleClick"), Du("focusin", "onFocus"), Du("focusout", "onBlur"), Du(Q0, "onTransitionEnd");
    }
    function Tw(e, t, a, i, o, s, f) {
      var p = q0.get(t);
      if (p !== void 0) {
        var v = Ra, S = t;
        switch (t) {
          case "keypress":
            if (Tu(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            v = Ny;
            break;
          case "focusin":
            S = "focus", v = gf;
            break;
          case "focusout":
            S = "blur", v = gf;
            break;
          case "beforeblur":
          case "afterblur":
            v = gf;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = yf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Zd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = My;
            break;
          case Y0:
          case W0:
          case G0:
            v = ep;
            break;
          case Q0:
            v = ap;
            break;
          case "scroll":
            v = mh;
            break;
          case "wheel":
            v = zl;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ky;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = rp;
            break;
        }
        var C = (s & io) !== 0;
        {
          var D = !C && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = Ow(a, p, i.type, C, D);
          if (_.length > 0) {
            var F = new v(p, S, null, i, o);
            e.push({
              event: F,
              listeners: _
            });
          }
        }
      }
    }
    Rw(), k(), Uy(), Cw(), wh();
    function _w(e, t, a, i, o, s, f) {
      Tw(e, t, a, i, o, s);
      var p = (s & gd) === 0;
      p && (U(e, t, a, i, o), M(e, t, a, i, o), ww(e, t, a, i, o), Ay(e, t, a, i, o));
    }
    var cp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], By = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(cp));
    function X0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, hs(i, t, void 0, e), e.currentTarget = null;
    }
    function kw(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          X0(e, v, p), i = f;
        }
      else
        for (var S = 0; S < t.length; S++) {
          var C = t[S], D = C.instance, _ = C.currentTarget, F = C.listener;
          if (D !== i && e.isPropagationStopped())
            return;
          X0(e, F, _), i = D;
        }
    }
    function J0(e, t) {
      for (var a = (t & io) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        kw(s, f, a);
      }
      Gi();
    }
    function Dw(e, t, a, i, o) {
      var s = Rc(a), f = [];
      _w(f, e, i, a, s, t), J0(f, t);
    }
    function Cn(e, t) {
      By.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = iT(t), o = Mw(e);
      i.has(o) || (Z0(t, e, Ei, a), i.add(o));
    }
    function $y(e, t, a) {
      By.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= io), Z0(a, e, i, t);
    }
    var Nh = "_reactListening" + Math.random().toString(36).slice(2);
    function fp(e) {
      if (!e[Nh]) {
        e[Nh] = !0, Nt.forEach(function(a) {
          a !== "selectionchange" && (By.has(a) || $y(a, !1, e), $y(a, !0, e));
        });
        var t = e.nodeType === Wi ? e : e.ownerDocument;
        t !== null && (t[Nh] || (t[Nh] = !0, $y("selectionchange", !1, t)));
      }
    }
    function Z0(e, t, a, i, o) {
      var s = ba(e, t, a), f = void 0;
      vs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? wu(e, t, s, f) : Jd(e, t, s) : f !== void 0 ? Ji(e, t, s, f) : sa(e, t, s);
    }
    function eE(e, t) {
      return e === t || e.nodeType === Fn && e.parentNode === t;
    }
    function Iy(e, t, a, i, o) {
      var s = i;
      if ((t & yd) === 0 && (t & Ei) === 0) {
        var f = o;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === W || v === ye) {
              var S = p.stateNode.containerInfo;
              if (eE(S, f))
                break;
              if (v === ye)
                for (var C = p.return; C !== null; ) {
                  var D = C.tag;
                  if (D === W || D === ye) {
                    var _ = C.stateNode.containerInfo;
                    if (eE(_, f))
                      return;
                  }
                  C = C.return;
                }
              for (; S !== null; ) {
                var F = Ks(S);
                if (F === null)
                  return;
                var V = F.tag;
                if (V === X || V === ee) {
                  p = s = F;
                  continue e;
                }
                S = S.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Pv(function() {
        return Dw(e, t, a, s);
      });
    }
    function dp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Ow(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], S = e, C = null; S !== null; ) {
        var D = S, _ = D.stateNode, F = D.tag;
        if (F === X && _ !== null && (C = _, p !== null)) {
          var V = oo(S, p);
          V != null && v.push(dp(S, V, C));
        }
        if (o)
          break;
        S = S.return;
      }
      return v;
    }
    function Lh(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, f = s.stateNode, p = s.tag;
        if (p === X && f !== null) {
          var v = f, S = oo(o, a);
          S != null && i.unshift(dp(o, S, v));
          var C = oo(o, t);
          C != null && i.push(dp(o, C, v));
        }
        o = o.return;
      }
      return i;
    }
    function Of(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== X);
      return e || null;
    }
    function Nw(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Of(s))
        o++;
      for (var f = 0, p = i; p; p = Of(p))
        f++;
      for (; o - f > 0; )
        a = Of(a), o--;
      for (; f - o > 0; )
        i = Of(i), f--;
      for (var v = o; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Of(a), i = Of(i);
      }
      return null;
    }
    function tE(e, t, a, i, o) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, S = v.alternate, C = v.stateNode, D = v.tag;
        if (S !== null && S === i)
          break;
        if (D === X && C !== null) {
          var _ = C;
          if (o) {
            var F = oo(p, s);
            F != null && f.unshift(dp(p, F, _));
          } else if (!o) {
            var V = oo(p, s);
            V != null && f.push(dp(p, V, _));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function Lw(e, t, a, i, o) {
      var s = i && o ? Nw(i, o) : null;
      i !== null && tE(e, t, i, s, !1), o !== null && a !== null && tE(e, a, o, s, !0);
    }
    function Mw(e, t) {
      return e + "__bubble";
    }
    var Ia = !1, pp = "dangerouslySetInnerHTML", Mh = "suppressContentEditableWarning", Ou = "suppressHydrationWarning", nE = "autoFocus", Qs = "children", qs = "style", zh = "__html", Yy, Ah, vp, rE, Uh, aE, iE;
    Yy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Ah = function(e, t) {
      Av(e, t), au(e, t), Vv(e, t, {
        registrationNameDependencies: rt,
        possibleRegistrationNames: _t
      });
    }, aE = Xn && !document.documentMode, vp = function(e, t, a) {
      if (!Ia) {
        var i = jh(a), o = jh(t);
        o !== i && (Ia = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, rE = function(e) {
      if (!Ia) {
        Ia = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Uh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, iE = function(e, t) {
      var a = e.namespaceURI === ti ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var zw = /\r\n?/g, Aw = /\u0000|\uFFFD/g;
    function jh(e) {
      Yn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(zw, `
`).replace(Aw, "");
    }
    function Fh(e, t, a, i) {
      var o = jh(t), s = jh(e);
      if (s !== o && (i && (Ia || (Ia = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && q))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function lE(e) {
      return e.nodeType === Wi ? e : e.ownerDocument;
    }
    function Uw() {
    }
    function Hh(e) {
      e.onclick = Uw;
    }
    function jw(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === qs)
            f && Object.freeze(f), Ov(t, f);
          else if (s === pp) {
            var p = f ? f[zh] : void 0;
            p != null && gv(t, p);
          } else if (s === Qs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ml(t, f);
            } else typeof f == "number" && ml(t, "" + f);
          else s === Mh || s === Ou || s === nE || (rt.hasOwnProperty(s) ? f != null && (typeof f != "function" && Uh(s, f), s === "onScroll" && Cn("scroll", t)) : f != null && ga(t, s, f, o));
        }
    }
    function Fw(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === qs ? Ov(e, f) : s === pp ? gv(e, f) : s === Qs ? ml(e, f) : ga(e, s, f, i);
      }
    }
    function Hw(e, t, a, i) {
      var o, s = lE(a), f, p = i;
      if (p === ti && (p = fd(e)), p === ti) {
        if (o = yl(e, t), !o && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var S = v.firstChild;
          f = v.removeChild(S);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var C = f;
          t.multiple ? C.multiple = !0 : t.size && (C.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === ti && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ur.call(Yy, e) && (Yy[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function Vw(e, t) {
      return lE(t).createTextNode(e);
    }
    function Pw(e, t, a, i) {
      var o = yl(t, a);
      Ah(t, a);
      var s;
      switch (t) {
        case "dialog":
          Cn("cancel", e), Cn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Cn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < cp.length; f++)
            Cn(cp[f], e);
          s = a;
          break;
        case "source":
          Cn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Cn("error", e), Cn("load", e), s = a;
          break;
        case "details":
          Cn("toggle", e), s = a;
          break;
        case "input":
          Xo(e, a), s = Ua(e, a), Cn("invalid", e);
          break;
        case "option":
          $t(e, a), s = a;
          break;
        case "select":
          ns(e, a), s = ao(e, a), Cn("invalid", e);
          break;
        case "textarea":
          hv(e, a), s = Sc(e, a), Cn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (bc(t, s), jw(t, e, i, s, o), t) {
        case "input":
          Aa(e), j(e, a, !1);
          break;
        case "textarea":
          Aa(e), yv(e);
          break;
        case "option":
          Zt(e, a);
          break;
        case "select":
          ud(e, a);
          break;
        default:
          typeof s.onClick == "function" && Hh(e);
          break;
      }
    }
    function Bw(e, t, a, i, o) {
      Ah(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Ua(e, a), p = Ua(e, i), s = [];
          break;
        case "select":
          f = ao(e, a), p = ao(e, i), s = [];
          break;
        case "textarea":
          f = Sc(e, a), p = Sc(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Hh(e);
          break;
      }
      bc(t, p);
      var v, S, C = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === qs) {
            var D = f[v];
            for (S in D)
              D.hasOwnProperty(S) && (C || (C = {}), C[S] = "");
          } else v === pp || v === Qs || v === Mh || v === Ou || v === nE || (rt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var _ = p[v], F = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || _ === F || _ == null && F == null))
          if (v === qs)
            if (_ && Object.freeze(_), F) {
              for (S in F)
                F.hasOwnProperty(S) && (!_ || !_.hasOwnProperty(S)) && (C || (C = {}), C[S] = "");
              for (S in _)
                _.hasOwnProperty(S) && F[S] !== _[S] && (C || (C = {}), C[S] = _[S]);
            } else
              C || (s || (s = []), s.push(v, C)), C = _;
          else if (v === pp) {
            var V = _ ? _[zh] : void 0, I = F ? F[zh] : void 0;
            V != null && I !== V && (s = s || []).push(v, V);
          } else v === Qs ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(v, "" + _) : v === Mh || v === Ou || (rt.hasOwnProperty(v) ? (_ != null && (typeof _ != "function" && Uh(v, _), v === "onScroll" && Cn("scroll", e)), !s && F !== _ && (s = [])) : (s = s || []).push(v, _));
      }
      return C && (ni(C, p[qs]), (s = s || []).push(qs, C)), s;
    }
    function $w(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && h(e, o);
      var s = yl(a, i), f = yl(a, o);
      switch (Fw(e, t, s, f), a) {
        case "input":
          w(e, o);
          break;
        case "textarea":
          mv(e, o);
          break;
        case "select":
          gc(e, o);
          break;
      }
    }
    function Iw(e) {
      {
        var t = e.toLowerCase();
        return tu.hasOwnProperty(t) && tu[t] || null;
      }
    }
    function Yw(e, t, a, i, o, s, f) {
      var p, v;
      switch (p = yl(t, a), Ah(t, a), t) {
        case "dialog":
          Cn("cancel", e), Cn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Cn("load", e);
          break;
        case "video":
        case "audio":
          for (var S = 0; S < cp.length; S++)
            Cn(cp[S], e);
          break;
        case "source":
          Cn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Cn("error", e), Cn("load", e);
          break;
        case "details":
          Cn("toggle", e);
          break;
        case "input":
          Xo(e, a), Cn("invalid", e);
          break;
        case "option":
          $t(e, a);
          break;
        case "select":
          ns(e, a), Cn("invalid", e);
          break;
        case "textarea":
          hv(e, a), Cn("invalid", e);
          break;
      }
      bc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var C = e.attributes, D = 0; D < C.length; D++) {
          var _ = C[D].name.toLowerCase();
          switch (_) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(C[D].name);
          }
        }
      }
      var F = null;
      for (var V in a)
        if (a.hasOwnProperty(V)) {
          var I = a[V];
          if (V === Qs)
            typeof I == "string" ? e.textContent !== I && (a[Ou] !== !0 && Fh(e.textContent, I, s, f), F = [Qs, I]) : typeof I == "number" && e.textContent !== "" + I && (a[Ou] !== !0 && Fh(e.textContent, I, s, f), F = [Qs, "" + I]);
          else if (rt.hasOwnProperty(V))
            I != null && (typeof I != "function" && Uh(V, I), V === "onScroll" && Cn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ge = void 0, Pe = un(V);
            if (a[Ou] !== !0) {
              if (!(V === Mh || V === Ou || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              V === "value" || V === "checked" || V === "selected")) {
                if (V === pp) {
                  var Me = e.innerHTML, At = I ? I[zh] : void 0;
                  if (At != null) {
                    var Tt = iE(e, At);
                    Tt !== Me && vp(V, Me, Tt);
                  }
                } else if (V === qs) {
                  if (v.delete(V), aE) {
                    var z = gy(I);
                    ge = e.getAttribute("style"), z !== ge && vp(V, ge, z);
                  }
                } else if (p && !K)
                  v.delete(V.toLowerCase()), ge = di(e, V, I), I !== ge && vp(V, ge, I);
                else if (!dn(V, Pe, p) && !er(V, I, Pe, p)) {
                  var Y = !1;
                  if (Pe !== null)
                    v.delete(Pe.attributeName), ge = Xl(e, V, I, Pe);
                  else {
                    var A = i;
                    if (A === ti && (A = fd(t)), A === ti)
                      v.delete(V.toLowerCase());
                    else {
                      var le = Iw(V);
                      le !== null && le !== V && (Y = !0, v.delete(le)), v.delete(V);
                    }
                    ge = di(e, V, I);
                  }
                  var Te = K;
                  !Te && I !== ge && !Y && vp(V, ge, I);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Ou] !== !0 && rE(v), t) {
        case "input":
          Aa(e), j(e, a, !0);
          break;
        case "textarea":
          Aa(e), yv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Hh(e);
          break;
      }
      return F;
    }
    function Ww(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Wy(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Gy(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Qy(e, t, a) {
      {
        if (Ia)
          return;
        Ia = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function qy(e, t) {
      {
        if (t === "" || Ia)
          return;
        Ia = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Gw(e, t, a) {
      switch (t) {
        case "input":
          $(e, a);
          return;
        case "textarea":
          fy(e, a);
          return;
        case "select":
          sd(e, a);
          return;
      }
    }
    var hp = function() {
    }, mp = function() {
    };
    {
      var Qw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], oE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], qw = oE.concat(["button"]), Kw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], uE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      mp = function(e, t) {
        var a = it({}, e || uE), i = {
          tag: t
        };
        return oE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), qw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Qw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Xw = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Kw.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Jw = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, sE = {};
      hp = function(e, t, a) {
        a = a || uE;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Xw(e, o) ? null : i, f = s ? null : Jw(e, a), p = s || f;
        if (p) {
          var v = p.tag, S = !!s + "|" + e + "|" + v;
          if (!sE[S]) {
            sE[S] = !0;
            var C = e, D = "";
            if (e === "#text" ? /\S/.test(t) ? C = "Text nodes" : (C = "Whitespace text nodes", D = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : C = "<" + e + ">", s) {
              var _ = "";
              v === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", C, v, D, _);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", C, v);
          }
        }
      };
    }
    var Vh = "suppressHydrationWarning", Ph = "$", Bh = "/$", yp = "$?", gp = "$!", Zw = "style", Ky = null, Xy = null;
    function eR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Wi:
        case rs: {
          t = i === Wi ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : Ec(null, "");
          break;
        }
        default: {
          var s = i === Fn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Ec(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = mp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function tR(e, t, a) {
      {
        var i = e, o = Ec(i.namespace, t), s = mp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function GO(e) {
      return e;
    }
    function nR(e) {
      Ky = hr(), Xy = mw();
      var t = null;
      return Nn(!1), t;
    }
    function rR(e) {
      yw(Xy), Nn(Ky), Ky = null, Xy = null;
    }
    function aR(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (hp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = mp(f.ancestorInfo, e);
          hp(null, p, v);
        }
        s = f.namespace;
      }
      var S = Hw(e, t, a, s);
      return Cp(o, S), ig(S, t), S;
    }
    function iR(e, t) {
      e.appendChild(t);
    }
    function lR(e, t, a, i, o) {
      switch (Pw(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function oR(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = mp(f.ancestorInfo, t);
          hp(null, p, v);
        }
      }
      return Bw(e, t, a, i);
    }
    function Jy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function uR(e, t, a, i) {
      {
        var o = a;
        hp(null, e, o.ancestorInfo);
      }
      var s = Vw(e, t);
      return Cp(i, s), s;
    }
    function sR() {
      var e = window.event;
      return e === void 0 ? pr : bu(e.type);
    }
    var Zy = typeof setTimeout == "function" ? setTimeout : void 0, cR = typeof clearTimeout == "function" ? clearTimeout : void 0, eg = -1, cE = typeof Promise == "function" ? Promise : void 0, fR = typeof queueMicrotask == "function" ? queueMicrotask : typeof cE < "u" ? function(e) {
      return cE.resolve(null).then(e).catch(dR);
    } : Zy;
    function dR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function pR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function vR(e, t, a, i, o, s) {
      $w(e, t, a, i, o), ig(e, o);
    }
    function fE(e) {
      ml(e, "");
    }
    function hR(e, t, a) {
      e.nodeValue = a;
    }
    function mR(e, t) {
      e.appendChild(t);
    }
    function yR(e, t) {
      var a;
      e.nodeType === Fn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Hh(a);
    }
    function gR(e, t, a) {
      e.insertBefore(t, a);
    }
    function SR(e, t, a) {
      e.nodeType === Fn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function ER(e, t) {
      e.removeChild(t);
    }
    function CR(e, t) {
      e.nodeType === Fn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function tg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === Fn) {
          var s = o.data;
          if (s === Bh)
            if (i === 0) {
              e.removeChild(o), Lr(t);
              return;
            } else
              i--;
          else (s === Ph || s === yp || s === gp) && i++;
        }
        a = o;
      } while (a);
      Lr(t);
    }
    function xR(e, t) {
      e.nodeType === Fn ? tg(e.parentNode, t) : e.nodeType === ea && tg(e, t), Lr(e);
    }
    function bR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function wR(e) {
      e.nodeValue = "";
    }
    function RR(e, t) {
      e = e;
      var a = t[Zw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = xc("display", i);
    }
    function TR(e, t) {
      e.nodeValue = t;
    }
    function _R(e) {
      e.nodeType === ea ? e.textContent = "" : e.nodeType === Wi && e.documentElement && e.removeChild(e.documentElement);
    }
    function kR(e, t, a) {
      return e.nodeType !== ea || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function DR(e, t) {
      return t === "" || e.nodeType !== Yi ? null : e;
    }
    function OR(e) {
      return e.nodeType !== Fn ? null : e;
    }
    function dE(e) {
      return e.data === yp;
    }
    function ng(e) {
      return e.data === gp;
    }
    function NR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function LR(e, t) {
      e._reactRetry = t;
    }
    function $h(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ea || t === Yi)
          break;
        if (t === Fn) {
          var a = e.data;
          if (a === Ph || a === gp || a === yp)
            break;
          if (a === Bh)
            return null;
        }
      }
      return e;
    }
    function Sp(e) {
      return $h(e.nextSibling);
    }
    function MR(e) {
      return $h(e.firstChild);
    }
    function zR(e) {
      return $h(e.firstChild);
    }
    function AR(e) {
      return $h(e.nextSibling);
    }
    function UR(e, t, a, i, o, s, f) {
      Cp(s, e), ig(e, a);
      var p;
      {
        var v = o;
        p = v.namespace;
      }
      var S = (s.mode & Et) !== je;
      return Yw(e, t, a, p, i, S, f);
    }
    function jR(e, t, a, i) {
      return Cp(a, e), a.mode & Et, Ww(e, t);
    }
    function FR(e, t) {
      Cp(t, e);
    }
    function HR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Fn) {
          var i = t.data;
          if (i === Bh) {
            if (a === 0)
              return Sp(t);
            a--;
          } else (i === Ph || i === gp || i === yp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function pE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Fn) {
          var i = t.data;
          if (i === Ph || i === gp || i === yp) {
            if (a === 0)
              return t;
            a--;
          } else i === Bh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function VR(e) {
      Lr(e);
    }
    function PR(e) {
      Lr(e);
    }
    function BR(e) {
      return e !== "head" && e !== "body";
    }
    function $R(e, t, a, i) {
      var o = !0;
      Fh(t.nodeValue, a, i, o);
    }
    function IR(e, t, a, i, o, s) {
      if (t[Vh] !== !0) {
        var f = !0;
        Fh(i.nodeValue, o, s, f);
      }
    }
    function YR(e, t) {
      t.nodeType === ea ? Wy(e, t) : t.nodeType === Fn || Gy(e, t);
    }
    function WR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ea ? Wy(a, t) : t.nodeType === Fn || Gy(a, t));
      }
    }
    function GR(e, t, a, i, o) {
      (o || t[Vh] !== !0) && (i.nodeType === ea ? Wy(a, i) : i.nodeType === Fn || Gy(a, i));
    }
    function QR(e, t, a) {
      Qy(e, t);
    }
    function qR(e, t) {
      qy(e, t);
    }
    function KR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Qy(i, t);
      }
    }
    function XR(e, t) {
      {
        var a = e.parentNode;
        a !== null && qy(a, t);
      }
    }
    function JR(e, t, a, i, o, s) {
      (s || t[Vh] !== !0) && Qy(a, i);
    }
    function ZR(e, t, a, i, o) {
      (o || t[Vh] !== !0) && qy(a, i);
    }
    function eT(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function tT(e) {
      fp(e);
    }
    var Nf = Math.random().toString(36).slice(2), Lf = "__reactFiber$" + Nf, rg = "__reactProps$" + Nf, Ep = "__reactContainer$" + Nf, ag = "__reactEvents$" + Nf, nT = "__reactListeners$" + Nf, rT = "__reactHandles$" + Nf;
    function aT(e) {
      delete e[Lf], delete e[rg], delete e[ag], delete e[nT], delete e[rT];
    }
    function Cp(e, t) {
      t[Lf] = e;
    }
    function Ih(e, t) {
      t[Ep] = e;
    }
    function vE(e) {
      e[Ep] = null;
    }
    function xp(e) {
      return !!e[Ep];
    }
    function Ks(e) {
      var t = e[Lf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ep] || a[Lf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = pE(e); o !== null; ) {
              var s = o[Lf];
              if (s)
                return s;
              o = pE(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Nu(e) {
      var t = e[Lf] || e[Ep];
      return t && (t.tag === X || t.tag === ee || t.tag === Ne || t.tag === W) ? t : null;
    }
    function Mf(e) {
      if (e.tag === X || e.tag === ee)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Yh(e) {
      return e[rg] || null;
    }
    function ig(e, t) {
      e[rg] = t;
    }
    function iT(e) {
      var t = e[ag];
      return t === void 0 && (t = e[ag] = /* @__PURE__ */ new Set()), t;
    }
    var hE = {}, mE = N.ReactDebugCurrentFrame;
    function Wh(e) {
      if (e) {
        var t = e._owner, a = Xu(e.type, e._source, t ? t.type : null);
        mE.setExtraStackFrame(a);
      } else
        mE.setExtraStackFrame(null);
    }
    function Zi(e, t, a, i, o) {
      {
        var s = Function.call.bind(ur);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              p = S;
            }
            p && !(p instanceof Error) && (Wh(o), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Wh(null)), p instanceof Error && !(p.message in hE) && (hE[p.message] = !0, Wh(o), y("Failed %s type: %s", a, p.message), Wh(null));
          }
      }
    }
    var lg = [], Gh;
    Gh = [];
    var No = -1;
    function Lu(e) {
      return {
        current: e
      };
    }
    function ca(e, t) {
      if (No < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== Gh[No] && y("Unexpected Fiber popped."), e.current = lg[No], lg[No] = null, Gh[No] = null, No--;
    }
    function fa(e, t, a) {
      No++, lg[No] = e.current, Gh[No] = a, e.current = t;
    }
    var og;
    og = {};
    var si = {};
    Object.freeze(si);
    var Lo = Lu(si), Fl = Lu(!1), ug = si;
    function zf(e, t, a) {
      return a && Hl(t) ? ug : Lo.current;
    }
    function yE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Af(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return si;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Xe(e) || "Unknown";
          Zi(i, s, "context", p);
        }
        return o && yE(e, t, s), s;
      }
    }
    function Qh() {
      return Fl.current;
    }
    function Hl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function qh(e) {
      ca(Fl, e), ca(Lo, e);
    }
    function sg(e) {
      ca(Fl, e), ca(Lo, e);
    }
    function gE(e, t, a) {
      {
        if (Lo.current !== si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        fa(Lo, t, e), fa(Fl, a, e);
      }
    }
    function SE(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Xe(e) || "Unknown";
            og[s] || (og[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in o))
            throw new Error((Xe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Xe(e) || "Unknown";
          Zi(o, f, "child context", v);
        }
        return it({}, a, f);
      }
    }
    function Kh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || si;
        return ug = Lo.current, fa(Lo, a, e), fa(Fl, Fl.current, e), !0;
      }
    }
    function EE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = SE(e, t, ug);
          i.__reactInternalMemoizedMergedChildContext = o, ca(Fl, e), ca(Lo, e), fa(Lo, o, e), fa(Fl, a, e);
        } else
          ca(Fl, e), fa(Fl, a, e);
      }
    }
    function lT(e) {
      {
        if (!Yv(e) || e.tag !== te)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case W:
              return t.stateNode.context;
            case te: {
              var a = t.type;
              if (Hl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Mu = 0, Xh = 1, Mo = null, cg = !1, fg = !1;
    function CE(e) {
      Mo === null ? Mo = [e] : Mo.push(e);
    }
    function oT(e) {
      cg = !0, CE(e);
    }
    function xE() {
      cg && zu();
    }
    function zu() {
      if (!fg && Mo !== null) {
        fg = !0;
        var e = 0, t = xa();
        try {
          var a = !0, i = Mo;
          for (Gn(ua); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Mo = null, cg = !1;
        } catch (s) {
          throw Mo !== null && (Mo = Mo.slice(e + 1)), Td(qi, zu), s;
        } finally {
          Gn(t), fg = !1;
        }
      }
      return null;
    }
    var Uf = [], jf = 0, Jh = null, Zh = 0, _i = [], ki = 0, Xs = null, zo = 1, Ao = "";
    function uT(e) {
      return Zs(), (e.flags & ys) !== Ue;
    }
    function sT(e) {
      return Zs(), Zh;
    }
    function cT() {
      var e = Ao, t = zo, a = t & ~fT(t);
      return a.toString(32) + e;
    }
    function Js(e, t) {
      Zs(), Uf[jf++] = Zh, Uf[jf++] = Jh, Jh = e, Zh = t;
    }
    function bE(e, t, a) {
      Zs(), _i[ki++] = zo, _i[ki++] = Ao, _i[ki++] = Xs, Xs = e;
      var i = zo, o = Ao, s = em(i) - 1, f = i & ~(1 << s), p = a + 1, v = em(t) + s;
      if (v > 30) {
        var S = s - s % 5, C = (1 << S) - 1, D = (f & C).toString(32), _ = f >> S, F = s - S, V = em(t) + F, I = p << F, ge = I | _, Pe = D + o;
        zo = 1 << V | ge, Ao = Pe;
      } else {
        var Me = p << s, At = Me | f, Tt = o;
        zo = 1 << v | At, Ao = Tt;
      }
    }
    function dg(e) {
      Zs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Js(e, a), bE(e, a, i);
      }
    }
    function em(e) {
      return 32 - Wn(e);
    }
    function fT(e) {
      return 1 << em(e) - 1;
    }
    function pg(e) {
      for (; e === Jh; )
        Jh = Uf[--jf], Uf[jf] = null, Zh = Uf[--jf], Uf[jf] = null;
      for (; e === Xs; )
        Xs = _i[--ki], _i[ki] = null, Ao = _i[--ki], _i[ki] = null, zo = _i[--ki], _i[ki] = null;
    }
    function dT() {
      return Zs(), Xs !== null ? {
        id: zo,
        overflow: Ao
      } : null;
    }
    function pT(e, t) {
      Zs(), _i[ki++] = zo, _i[ki++] = Ao, _i[ki++] = Xs, zo = t.id, Ao = t.overflow, Xs = e;
    }
    function Zs() {
      Pr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Vr = null, Di = null, el = !1, ec = !1, Au = null;
    function vT() {
      el && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function wE() {
      ec = !0;
    }
    function hT() {
      return ec;
    }
    function mT(e) {
      var t = e.stateNode.containerInfo;
      return Di = zR(t), Vr = e, el = !0, Au = null, ec = !1, !0;
    }
    function yT(e, t, a) {
      return Di = AR(t), Vr = e, el = !0, Au = null, ec = !1, a !== null && pT(e, a), !0;
    }
    function RE(e, t) {
      switch (e.tag) {
        case W: {
          YR(e.stateNode.containerInfo, t);
          break;
        }
        case X: {
          var a = (e.mode & Et) !== je;
          GR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ne: {
          var i = e.memoizedState;
          i.dehydrated !== null && WR(i.dehydrated, t);
          break;
        }
      }
    }
    function TE(e, t) {
      RE(e, t);
      var a = Ck();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ta) : i.push(a);
    }
    function vg(e, t) {
      {
        if (ec)
          return;
        switch (e.tag) {
          case W: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case X:
                var i = t.type;
                t.pendingProps, QR(a, i);
                break;
              case ee:
                var o = t.pendingProps;
                qR(a, o);
                break;
            }
            break;
          }
          case X: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case X: {
                var v = t.type, S = t.pendingProps, C = (e.mode & Et) !== je;
                JR(
                  s,
                  f,
                  p,
                  v,
                  S,
                  // TODO: Delete this argument when we remove the legacy root API.
                  C
                );
                break;
              }
              case ee: {
                var D = t.pendingProps, _ = (e.mode & Et) !== je;
                ZR(
                  s,
                  f,
                  p,
                  D,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
            }
            break;
          }
          case Ne: {
            var F = e.memoizedState, V = F.dehydrated;
            if (V !== null) switch (t.tag) {
              case X:
                var I = t.type;
                t.pendingProps, KR(V, I);
                break;
              case ee:
                var ge = t.pendingProps;
                XR(V, ge);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function _E(e, t) {
      t.flags = t.flags & ~Rn | wn, vg(e, t);
    }
    function kE(e, t) {
      switch (e.tag) {
        case X: {
          var a = e.type;
          e.pendingProps;
          var i = kR(t, a);
          return i !== null ? (e.stateNode = i, Vr = e, Di = MR(i), !0) : !1;
        }
        case ee: {
          var o = e.pendingProps, s = DR(t, o);
          return s !== null ? (e.stateNode = s, Vr = e, Di = null, !0) : !1;
        }
        case Ne: {
          var f = OR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: dT(),
              retryLane: ia
            };
            e.memoizedState = p;
            var v = xk(f);
            return v.return = e, e.child = v, Vr = e, Di = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function hg(e) {
      return (e.mode & Et) !== je && (e.flags & mt) === Ue;
    }
    function mg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function yg(e) {
      if (el) {
        var t = Di;
        if (!t) {
          hg(e) && (vg(Vr, e), mg()), _E(Vr, e), el = !1, Vr = e;
          return;
        }
        var a = t;
        if (!kE(e, t)) {
          hg(e) && (vg(Vr, e), mg()), t = Sp(a);
          var i = Vr;
          if (!t || !kE(e, t)) {
            _E(Vr, e), el = !1, Vr = e;
            return;
          }
          TE(i, a);
        }
      }
    }
    function gT(e, t, a) {
      var i = e.stateNode, o = !ec, s = UR(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function ST(e) {
      var t = e.stateNode, a = e.memoizedProps, i = jR(t, a, e);
      if (i) {
        var o = Vr;
        if (o !== null)
          switch (o.tag) {
            case W: {
              var s = o.stateNode.containerInfo, f = (o.mode & Et) !== je;
              $R(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case X: {
              var p = o.type, v = o.memoizedProps, S = o.stateNode, C = (o.mode & Et) !== je;
              IR(
                p,
                v,
                S,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                C
              );
              break;
            }
          }
      }
      return i;
    }
    function ET(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      FR(a, e);
    }
    function CT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return HR(a);
    }
    function DE(e) {
      for (var t = e.return; t !== null && t.tag !== X && t.tag !== W && t.tag !== Ne; )
        t = t.return;
      Vr = t;
    }
    function tm(e) {
      if (e !== Vr)
        return !1;
      if (!el)
        return DE(e), el = !0, !1;
      if (e.tag !== W && (e.tag !== X || BR(e.type) && !Jy(e.type, e.memoizedProps))) {
        var t = Di;
        if (t)
          if (hg(e))
            OE(e), mg();
          else
            for (; t; )
              TE(e, t), t = Sp(t);
      }
      return DE(e), e.tag === Ne ? Di = CT(e) : Di = Vr ? Sp(e.stateNode) : null, !0;
    }
    function xT() {
      return el && Di !== null;
    }
    function OE(e) {
      for (var t = Di; t; )
        RE(e, t), t = Sp(t);
    }
    function Ff() {
      Vr = null, Di = null, el = !1, ec = !1;
    }
    function NE() {
      Au !== null && (wx(Au), Au = null);
    }
    function Pr() {
      return el;
    }
    function gg(e) {
      Au === null ? Au = [e] : Au.push(e);
    }
    var bT = N.ReactCurrentBatchConfig, wT = null;
    function RT() {
      return bT.transition;
    }
    var tl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var TT = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & lt && (t = a), a = a.return;
        return t;
      }, tc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, bp = [], wp = [], Rp = [], Tp = [], _p = [], kp = [], nc = /* @__PURE__ */ new Set();
      tl.recordUnsafeLifecycleWarnings = function(e, t) {
        nc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && bp.push(e), e.mode & lt && typeof t.UNSAFE_componentWillMount == "function" && wp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Rp.push(e), e.mode & lt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Tp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && _p.push(e), e.mode & lt && typeof t.UNSAFE_componentWillUpdate == "function" && kp.push(e));
      }, tl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        bp.length > 0 && (bp.forEach(function(_) {
          e.add(Xe(_) || "Component"), nc.add(_.type);
        }), bp = []);
        var t = /* @__PURE__ */ new Set();
        wp.length > 0 && (wp.forEach(function(_) {
          t.add(Xe(_) || "Component"), nc.add(_.type);
        }), wp = []);
        var a = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(_) {
          a.add(Xe(_) || "Component"), nc.add(_.type);
        }), Rp = []);
        var i = /* @__PURE__ */ new Set();
        Tp.length > 0 && (Tp.forEach(function(_) {
          i.add(Xe(_) || "Component"), nc.add(_.type);
        }), Tp = []);
        var o = /* @__PURE__ */ new Set();
        _p.length > 0 && (_p.forEach(function(_) {
          o.add(Xe(_) || "Component"), nc.add(_.type);
        }), _p = []);
        var s = /* @__PURE__ */ new Set();
        if (kp.length > 0 && (kp.forEach(function(_) {
          s.add(Xe(_) || "Component"), nc.add(_.type);
        }), kp = []), t.size > 0) {
          var f = tc(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = tc(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = tc(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var S = tc(e);
          J(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (a.size > 0) {
          var C = tc(a);
          J(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (o.size > 0) {
          var D = tc(o);
          J(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
      };
      var nm = /* @__PURE__ */ new Map(), LE = /* @__PURE__ */ new Set();
      tl.recordLegacyContextWarning = function(e, t) {
        var a = TT(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!LE.has(e.type)) {
          var i = nm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], nm.set(a, i)), i.push(e));
        }
      }, tl.flushLegacyContextWarning = function() {
        nm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Xe(s) || "Component"), LE.add(s.type);
            });
            var o = tc(i);
            try {
              Jt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              bn();
            }
          }
        });
      }, tl.discardPendingWarnings = function() {
        bp = [], wp = [], Rp = [], Tp = [], _p = [], kp = [], nm = /* @__PURE__ */ new Map();
      };
    }
    var Sg, Eg, Cg, xg, bg, ME = function(e, t) {
    };
    Sg = !1, Eg = !1, Cg = {}, xg = {}, bg = {}, ME = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Xe(t) || "Component";
        xg[a] || (xg[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function _T(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Dp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & lt || Fe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== te) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !_T(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var o = Xe(e) || "Component";
          Cg[o] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o, i), Cg[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== te)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Xa(i, "ref");
          var S = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === S)
            return t.ref;
          var C = function(D) {
            var _ = v.refs;
            D === null ? delete _[S] : _[S] = D;
          };
          return C._stringRef = S, C;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function rm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function am(e) {
      {
        var t = Xe(e) || "Component";
        if (bg[t])
          return;
        bg[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function zE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function AE(e) {
      function t(z, Y) {
        if (e) {
          var A = z.deletions;
          A === null ? (z.deletions = [Y], z.flags |= ta) : A.push(Y);
        }
      }
      function a(z, Y) {
        if (!e)
          return null;
        for (var A = Y; A !== null; )
          t(z, A), A = A.sibling;
        return null;
      }
      function i(z, Y) {
        for (var A = /* @__PURE__ */ new Map(), le = Y; le !== null; )
          le.key !== null ? A.set(le.key, le) : A.set(le.index, le), le = le.sibling;
        return A;
      }
      function o(z, Y) {
        var A = fc(z, Y);
        return A.index = 0, A.sibling = null, A;
      }
      function s(z, Y, A) {
        if (z.index = A, !e)
          return z.flags |= ys, Y;
        var le = z.alternate;
        if (le !== null) {
          var Te = le.index;
          return Te < Y ? (z.flags |= wn, Y) : Te;
        } else
          return z.flags |= wn, Y;
      }
      function f(z) {
        return e && z.alternate === null && (z.flags |= wn), z;
      }
      function p(z, Y, A, le) {
        if (Y === null || Y.tag !== ee) {
          var Te = g0(A, z.mode, le);
          return Te.return = z, Te;
        } else {
          var Ce = o(Y, A);
          return Ce.return = z, Ce;
        }
      }
      function v(z, Y, A, le) {
        var Te = A.type;
        if (Te === Kr)
          return C(z, Y, A.props.children, le, A.key);
        if (Y !== null && (Y.elementType === Te || // Keep this check inline so it only runs on the false path:
        Vx(Y, A) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Te == "object" && Te !== null && Te.$$typeof === et && zE(Te) === Y.type)) {
          var Ce = o(Y, A.props);
          return Ce.ref = Dp(z, Y, A), Ce.return = z, Ce._debugSource = A._source, Ce._debugOwner = A._owner, Ce;
        }
        var Qe = y0(A, z.mode, le);
        return Qe.ref = Dp(z, Y, A), Qe.return = z, Qe;
      }
      function S(z, Y, A, le) {
        if (Y === null || Y.tag !== ye || Y.stateNode.containerInfo !== A.containerInfo || Y.stateNode.implementation !== A.implementation) {
          var Te = S0(A, z.mode, le);
          return Te.return = z, Te;
        } else {
          var Ce = o(Y, A.children || []);
          return Ce.return = z, Ce;
        }
      }
      function C(z, Y, A, le, Te) {
        if (Y === null || Y.tag !== de) {
          var Ce = Wu(A, z.mode, le, Te);
          return Ce.return = z, Ce;
        } else {
          var Qe = o(Y, A);
          return Qe.return = z, Qe;
        }
      }
      function D(z, Y, A) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number") {
          var le = g0("" + Y, z.mode, A);
          return le.return = z, le;
        }
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case cr: {
              var Te = y0(Y, z.mode, A);
              return Te.ref = Dp(z, null, Y), Te.return = z, Te;
            }
            case Sa: {
              var Ce = S0(Y, z.mode, A);
              return Ce.return = z, Ce;
            }
            case et: {
              var Qe = Y._payload, at = Y._init;
              return D(z, at(Qe), A);
            }
          }
          if (ut(Y) || yn(Y)) {
            var rn = Wu(Y, z.mode, A, null);
            return rn.return = z, rn;
          }
          rm(z, Y);
        }
        return typeof Y == "function" && am(z), null;
      }
      function _(z, Y, A, le) {
        var Te = Y !== null ? Y.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number")
          return Te !== null ? null : p(z, Y, "" + A, le);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case cr:
              return A.key === Te ? v(z, Y, A, le) : null;
            case Sa:
              return A.key === Te ? S(z, Y, A, le) : null;
            case et: {
              var Ce = A._payload, Qe = A._init;
              return _(z, Y, Qe(Ce), le);
            }
          }
          if (ut(A) || yn(A))
            return Te !== null ? null : C(z, Y, A, le, null);
          rm(z, A);
        }
        return typeof A == "function" && am(z), null;
      }
      function F(z, Y, A, le, Te) {
        if (typeof le == "string" && le !== "" || typeof le == "number") {
          var Ce = z.get(A) || null;
          return p(Y, Ce, "" + le, Te);
        }
        if (typeof le == "object" && le !== null) {
          switch (le.$$typeof) {
            case cr: {
              var Qe = z.get(le.key === null ? A : le.key) || null;
              return v(Y, Qe, le, Te);
            }
            case Sa: {
              var at = z.get(le.key === null ? A : le.key) || null;
              return S(Y, at, le, Te);
            }
            case et:
              var rn = le._payload, Ft = le._init;
              return F(z, Y, A, Ft(rn), Te);
          }
          if (ut(le) || yn(le)) {
            var Kn = z.get(A) || null;
            return C(Y, Kn, le, Te, null);
          }
          rm(Y, le);
        }
        return typeof le == "function" && am(Y), null;
      }
      function V(z, Y, A) {
        {
          if (typeof z != "object" || z === null)
            return Y;
          switch (z.$$typeof) {
            case cr:
            case Sa:
              ME(z, A);
              var le = z.key;
              if (typeof le != "string")
                break;
              if (Y === null) {
                Y = /* @__PURE__ */ new Set(), Y.add(le);
                break;
              }
              if (!Y.has(le)) {
                Y.add(le);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", le);
              break;
            case et:
              var Te = z._payload, Ce = z._init;
              V(Ce(Te), Y, A);
              break;
          }
        }
        return Y;
      }
      function I(z, Y, A, le) {
        for (var Te = null, Ce = 0; Ce < A.length; Ce++) {
          var Qe = A[Ce];
          Te = V(Qe, Te, z);
        }
        for (var at = null, rn = null, Ft = Y, Kn = 0, Ht = 0, $n = null; Ft !== null && Ht < A.length; Ht++) {
          Ft.index > Ht ? ($n = Ft, Ft = null) : $n = Ft.sibling;
          var pa = _(z, Ft, A[Ht], le);
          if (pa === null) {
            Ft === null && (Ft = $n);
            break;
          }
          e && Ft && pa.alternate === null && t(z, Ft), Kn = s(pa, Kn, Ht), rn === null ? at = pa : rn.sibling = pa, rn = pa, Ft = $n;
        }
        if (Ht === A.length) {
          if (a(z, Ft), Pr()) {
            var Qr = Ht;
            Js(z, Qr);
          }
          return at;
        }
        if (Ft === null) {
          for (; Ht < A.length; Ht++) {
            var fi = D(z, A[Ht], le);
            fi !== null && (Kn = s(fi, Kn, Ht), rn === null ? at = fi : rn.sibling = fi, rn = fi);
          }
          if (Pr()) {
            var Da = Ht;
            Js(z, Da);
          }
          return at;
        }
        for (var Oa = i(z, Ft); Ht < A.length; Ht++) {
          var va = F(Oa, z, Ht, A[Ht], le);
          va !== null && (e && va.alternate !== null && Oa.delete(va.key === null ? Ht : va.key), Kn = s(va, Kn, Ht), rn === null ? at = va : rn.sibling = va, rn = va);
        }
        if (e && Oa.forEach(function(rd) {
          return t(z, rd);
        }), Pr()) {
          var Bo = Ht;
          Js(z, Bo);
        }
        return at;
      }
      function ge(z, Y, A, le) {
        var Te = yn(A);
        if (typeof Te != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          A[Symbol.toStringTag] === "Generator" && (Eg || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Eg = !0), A.entries === Te && (Sg || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Sg = !0);
          var Ce = Te.call(A);
          if (Ce)
            for (var Qe = null, at = Ce.next(); !at.done; at = Ce.next()) {
              var rn = at.value;
              Qe = V(rn, Qe, z);
            }
        }
        var Ft = Te.call(A);
        if (Ft == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Kn = null, Ht = null, $n = Y, pa = 0, Qr = 0, fi = null, Da = Ft.next(); $n !== null && !Da.done; Qr++, Da = Ft.next()) {
          $n.index > Qr ? (fi = $n, $n = null) : fi = $n.sibling;
          var Oa = _(z, $n, Da.value, le);
          if (Oa === null) {
            $n === null && ($n = fi);
            break;
          }
          e && $n && Oa.alternate === null && t(z, $n), pa = s(Oa, pa, Qr), Ht === null ? Kn = Oa : Ht.sibling = Oa, Ht = Oa, $n = fi;
        }
        if (Da.done) {
          if (a(z, $n), Pr()) {
            var va = Qr;
            Js(z, va);
          }
          return Kn;
        }
        if ($n === null) {
          for (; !Da.done; Qr++, Da = Ft.next()) {
            var Bo = D(z, Da.value, le);
            Bo !== null && (pa = s(Bo, pa, Qr), Ht === null ? Kn = Bo : Ht.sibling = Bo, Ht = Bo);
          }
          if (Pr()) {
            var rd = Qr;
            Js(z, rd);
          }
          return Kn;
        }
        for (var ov = i(z, $n); !Da.done; Qr++, Da = Ft.next()) {
          var Gl = F(ov, z, Qr, Da.value, le);
          Gl !== null && (e && Gl.alternate !== null && ov.delete(Gl.key === null ? Qr : Gl.key), pa = s(Gl, pa, Qr), Ht === null ? Kn = Gl : Ht.sibling = Gl, Ht = Gl);
        }
        if (e && ov.forEach(function(Zk) {
          return t(z, Zk);
        }), Pr()) {
          var Jk = Qr;
          Js(z, Jk);
        }
        return Kn;
      }
      function Pe(z, Y, A, le) {
        if (Y !== null && Y.tag === ee) {
          a(z, Y.sibling);
          var Te = o(Y, A);
          return Te.return = z, Te;
        }
        a(z, Y);
        var Ce = g0(A, z.mode, le);
        return Ce.return = z, Ce;
      }
      function Me(z, Y, A, le) {
        for (var Te = A.key, Ce = Y; Ce !== null; ) {
          if (Ce.key === Te) {
            var Qe = A.type;
            if (Qe === Kr) {
              if (Ce.tag === de) {
                a(z, Ce.sibling);
                var at = o(Ce, A.props.children);
                return at.return = z, at._debugSource = A._source, at._debugOwner = A._owner, at;
              }
            } else if (Ce.elementType === Qe || // Keep this check inline so it only runs on the false path:
            Vx(Ce, A) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Qe == "object" && Qe !== null && Qe.$$typeof === et && zE(Qe) === Ce.type) {
              a(z, Ce.sibling);
              var rn = o(Ce, A.props);
              return rn.ref = Dp(z, Ce, A), rn.return = z, rn._debugSource = A._source, rn._debugOwner = A._owner, rn;
            }
            a(z, Ce);
            break;
          } else
            t(z, Ce);
          Ce = Ce.sibling;
        }
        if (A.type === Kr) {
          var Ft = Wu(A.props.children, z.mode, le, A.key);
          return Ft.return = z, Ft;
        } else {
          var Kn = y0(A, z.mode, le);
          return Kn.ref = Dp(z, Y, A), Kn.return = z, Kn;
        }
      }
      function At(z, Y, A, le) {
        for (var Te = A.key, Ce = Y; Ce !== null; ) {
          if (Ce.key === Te)
            if (Ce.tag === ye && Ce.stateNode.containerInfo === A.containerInfo && Ce.stateNode.implementation === A.implementation) {
              a(z, Ce.sibling);
              var Qe = o(Ce, A.children || []);
              return Qe.return = z, Qe;
            } else {
              a(z, Ce);
              break;
            }
          else
            t(z, Ce);
          Ce = Ce.sibling;
        }
        var at = S0(A, z.mode, le);
        return at.return = z, at;
      }
      function Tt(z, Y, A, le) {
        var Te = typeof A == "object" && A !== null && A.type === Kr && A.key === null;
        if (Te && (A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case cr:
              return f(Me(z, Y, A, le));
            case Sa:
              return f(At(z, Y, A, le));
            case et:
              var Ce = A._payload, Qe = A._init;
              return Tt(z, Y, Qe(Ce), le);
          }
          if (ut(A))
            return I(z, Y, A, le);
          if (yn(A))
            return ge(z, Y, A, le);
          rm(z, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" ? f(Pe(z, Y, "" + A, le)) : (typeof A == "function" && am(z), a(z, Y));
      }
      return Tt;
    }
    var Hf = AE(!0), UE = AE(!1);
    function kT(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = fc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = fc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function DT(e, t) {
      for (var a = e.child; a !== null; )
        mk(a, t), a = a.sibling;
    }
    var wg = Lu(null), Rg;
    Rg = {};
    var im = null, Vf = null, Tg = null, lm = !1;
    function om() {
      im = null, Vf = null, Tg = null, lm = !1;
    }
    function jE() {
      lm = !0;
    }
    function FE() {
      lm = !1;
    }
    function HE(e, t, a) {
      fa(wg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Rg && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Rg;
    }
    function _g(e, t) {
      var a = wg.current;
      ca(wg, t), e._currentValue = a;
    }
    function kg(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Eo(i.childLanes, t) ? o !== null && !Eo(o.childLanes, t) && (o.childLanes = st(o.childLanes, t)) : (i.childLanes = st(i.childLanes, t), o !== null && (o.childLanes = st(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function OT(e, t, a) {
      NT(e, t, a);
    }
    function NT(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === te) {
                var p = ar(a), v = Uo(qt, p);
                v.tag = sm;
                var S = i.updateQueue;
                if (S !== null) {
                  var C = S.shared, D = C.pending;
                  D === null ? v.next = v : (v.next = D.next, D.next = v), C.pending = v;
                }
              }
              i.lanes = st(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = st(_.lanes, a)), kg(i.return, a, e), s.lanes = st(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === We)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === Kt) {
          var F = i.return;
          if (F === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          F.lanes = st(F.lanes, a);
          var V = F.alternate;
          V !== null && (V.lanes = st(V.lanes, a)), kg(F, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var I = o.sibling;
            if (I !== null) {
              I.return = o.return, o = I;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function Pf(e, t) {
      im = e, Vf = null, Tg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (oa(a.lanes, t) && Ip(), a.firstContext = null);
      }
    }
    function lr(e) {
      lm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Tg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Vf === null) {
          if (im === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Vf = a, im.dependencies = {
            lanes: G,
            firstContext: a
          };
        } else
          Vf = Vf.next = a;
      }
      return t;
    }
    var rc = null;
    function Dg(e) {
      rc === null ? rc = [e] : rc.push(e);
    }
    function LT() {
      if (rc !== null) {
        for (var e = 0; e < rc.length; e++) {
          var t = rc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        rc = null;
      }
    }
    function VE(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Dg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, um(e, i);
    }
    function MT(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, Dg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function zT(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Dg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, um(e, i);
    }
    function Ya(e, t) {
      return um(e, t);
    }
    var AT = um;
    function um(e, t) {
      e.lanes = st(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = st(a.lanes, t)), a === null && (e.flags & (wn | Rn)) !== Ue && Ux(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = st(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = st(a.childLanes, t) : (o.flags & (wn | Rn)) !== Ue && Ux(e), i = o, o = o.return;
      if (i.tag === W) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var PE = 0, BE = 1, sm = 2, Og = 3, cm = !1, Ng, fm;
    Ng = !1, fm = null;
    function Lg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: G
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function $E(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function Uo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: PE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Uu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (fm === o && !Ng && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Ng = !0), M_()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, AT(e, a);
      } else
        return zT(e, o, t, a);
    }
    function dm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if ($d(a)) {
          var s = o.lanes;
          s = lf(s, e.pendingLanes);
          var f = st(s, a);
          o.lanes = f, Ms(e, f);
        }
      }
    }
    function Mg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var S = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = S : (f.next = S, f = S), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var C = a.lastBaseUpdate;
      C === null ? a.firstBaseUpdate = t : C.next = t, a.lastBaseUpdate = t;
    }
    function UT(e, t, a, i, o, s) {
      switch (a.tag) {
        case BE: {
          var f = a.payload;
          if (typeof f == "function") {
            jE();
            var p = f.call(s, i, o);
            {
              if (e.mode & lt) {
                Qt(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  Qt(!1);
                }
              }
              FE();
            }
            return p;
          }
          return f;
        }
        case Og:
          e.flags = e.flags & ~Dr | mt;
        // Intentional fallthrough
        case PE: {
          var v = a.payload, S;
          if (typeof v == "function") {
            jE(), S = v.call(s, i, o);
            {
              if (e.mode & lt) {
                Qt(!0);
                try {
                  v.call(s, i, o);
                } finally {
                  Qt(!1);
                }
              }
              FE();
            }
          } else
            S = v;
          return S == null ? i : it({}, i, S);
        }
        case sm:
          return cm = !0, i;
      }
      return i;
    }
    function pm(e, t, a, i) {
      var o = e.updateQueue;
      cm = !1, fm = o.shared;
      var s = o.firstBaseUpdate, f = o.lastBaseUpdate, p = o.shared.pending;
      if (p !== null) {
        o.shared.pending = null;
        var v = p, S = v.next;
        v.next = null, f === null ? s = S : f.next = S, f = v;
        var C = e.alternate;
        if (C !== null) {
          var D = C.updateQueue, _ = D.lastBaseUpdate;
          _ !== f && (_ === null ? D.firstBaseUpdate = S : _.next = S, D.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var F = o.baseState, V = G, I = null, ge = null, Pe = null, Me = s;
        do {
          var At = Me.lane, Tt = Me.eventTime;
          if (Eo(i, At)) {
            if (Pe !== null) {
              var Y = {
                eventTime: Tt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Pn,
                tag: Me.tag,
                payload: Me.payload,
                callback: Me.callback,
                next: null
              };
              Pe = Pe.next = Y;
            }
            F = UT(e, o, Me, F, t, a);
            var A = Me.callback;
            if (A !== null && // If the update was already committed, we should not queue its
            // callback again.
            Me.lane !== Pn) {
              e.flags |= ln;
              var le = o.effects;
              le === null ? o.effects = [Me] : le.push(Me);
            }
          } else {
            var z = {
              eventTime: Tt,
              lane: At,
              tag: Me.tag,
              payload: Me.payload,
              callback: Me.callback,
              next: null
            };
            Pe === null ? (ge = Pe = z, I = F) : Pe = Pe.next = z, V = st(V, At);
          }
          if (Me = Me.next, Me === null) {
            if (p = o.shared.pending, p === null)
              break;
            var Te = p, Ce = Te.next;
            Te.next = null, Me = Ce, o.lastBaseUpdate = Te, o.shared.pending = null;
          }
        } while (!0);
        Pe === null && (I = F), o.baseState = I, o.firstBaseUpdate = ge, o.lastBaseUpdate = Pe;
        var Qe = o.shared.interleaved;
        if (Qe !== null) {
          var at = Qe;
          do
            V = st(V, at.lane), at = at.next;
          while (at !== Qe);
        } else s === null && (o.shared.lanes = G);
        nv(V), e.lanes = V, e.memoizedState = F;
      }
      fm = null;
    }
    function jT(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function IE() {
      cm = !1;
    }
    function vm() {
      return cm;
    }
    function YE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, jT(f, a));
        }
    }
    var Op = {}, ju = Lu(Op), Np = Lu(Op), hm = Lu(Op);
    function mm(e) {
      if (e === Op)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function WE() {
      var e = mm(hm.current);
      return e;
    }
    function zg(e, t) {
      fa(hm, t, e), fa(Np, e, e), fa(ju, Op, e);
      var a = eR(t);
      ca(ju, e), fa(ju, a, e);
    }
    function Bf(e) {
      ca(ju, e), ca(Np, e), ca(hm, e);
    }
    function Ag() {
      var e = mm(ju.current);
      return e;
    }
    function GE(e) {
      mm(hm.current);
      var t = mm(ju.current), a = tR(t, e.type);
      t !== a && (fa(Np, e, e), fa(ju, a, e));
    }
    function Ug(e) {
      Np.current === e && (ca(ju, e), ca(Np, e));
    }
    var FT = 0, QE = 1, qE = 1, Lp = 2, nl = Lu(FT);
    function jg(e, t) {
      return (e & t) !== 0;
    }
    function $f(e) {
      return e & QE;
    }
    function Fg(e, t) {
      return e & QE | t;
    }
    function HT(e, t) {
      return e | t;
    }
    function Fu(e, t) {
      fa(nl, t, e);
    }
    function If(e) {
      ca(nl, e);
    }
    function VT(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function ym(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ne) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || dE(i) || ng(i))
              return t;
          }
        } else if (t.tag === Be && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & mt) !== Ue;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Wa = (
      /*   */
      0
    ), mr = (
      /* */
      1
    ), Vl = (
      /*  */
      2
    ), yr = (
      /*    */
      4
    ), Br = (
      /*   */
      8
    ), Hg = [];
    function Vg() {
      for (var e = 0; e < Hg.length; e++) {
        var t = Hg[e];
        t._workInProgressVersionPrimary = null;
      }
      Hg.length = 0;
    }
    function PT(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Re = N.ReactCurrentDispatcher, Mp = N.ReactCurrentBatchConfig, Pg, Yf;
    Pg = /* @__PURE__ */ new Set();
    var ac = G, nn = null, gr = null, Sr = null, gm = !1, zp = !1, Ap = 0, BT = 0, $T = 25, Q = null, Oi = null, Hu = -1, Bg = !1;
    function Yt() {
      {
        var e = Q;
        Oi === null ? Oi = [e] : Oi.push(e);
      }
    }
    function ve() {
      {
        var e = Q;
        Oi !== null && (Hu++, Oi[Hu] !== e && IT(e));
      }
    }
    function Wf(e) {
      e != null && !ut(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Q, typeof e);
    }
    function IT(e) {
      {
        var t = Xe(nn);
        if (!Pg.has(t) && (Pg.add(t), Oi !== null)) {
          for (var a = "", i = 30, o = 0; o <= Hu; o++) {
            for (var s = Oi[o], f = o === Hu ? e : s, p = o + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function da() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function $g(e, t) {
      if (Bg)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Q), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Q, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ee(e[a], t[a]))
          return !1;
      return !0;
    }
    function Gf(e, t, a, i, o, s) {
      ac = s, nn = t, Oi = e !== null ? e._debugHookTypes : null, Hu = -1, Bg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = G, e !== null && e.memoizedState !== null ? Re.current = yC : Oi !== null ? Re.current = mC : Re.current = hC;
      var f = a(i, o);
      if (zp) {
        var p = 0;
        do {
          if (zp = !1, Ap = 0, p >= $T)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Bg = !1, gr = null, Sr = null, t.updateQueue = null, Hu = -1, Re.current = gC, f = a(i, o);
        } while (zp);
      }
      Re.current = Nm, t._debugHookTypes = Oi;
      var v = gr !== null && gr.next !== null;
      if (ac = G, nn = null, gr = null, Sr = null, Q = null, Oi = null, Hu = -1, e !== null && (e.flags & Vn) !== (t.flags & Vn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Et) !== je && y("Internal React error: Expected static flag was missing. Please notify the React team."), gm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Qf() {
      var e = Ap !== 0;
      return Ap = 0, e;
    }
    function KE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & tn) !== je ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ls(e.lanes, a);
    }
    function XE() {
      if (Re.current = Nm, gm) {
        for (var e = nn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        gm = !1;
      }
      ac = G, nn = null, gr = null, Sr = null, Oi = null, Hu = -1, Q = null, cC = !1, zp = !1, Ap = 0;
    }
    function Pl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sr === null ? nn.memoizedState = Sr = e : Sr = Sr.next = e, Sr;
    }
    function Ni() {
      var e;
      if (gr === null) {
        var t = nn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = gr.next;
      var a;
      if (Sr === null ? a = nn.memoizedState : a = Sr.next, a !== null)
        Sr = a, a = Sr.next, gr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        gr = e;
        var i = {
          memoizedState: gr.memoizedState,
          baseState: gr.baseState,
          baseQueue: gr.baseQueue,
          queue: gr.queue,
          next: null
        };
        Sr === null ? nn.memoizedState = Sr = i : Sr = Sr.next = i;
      }
      return Sr;
    }
    function JE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Ig(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Yg(e, t, a) {
      var i = Pl(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: G,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var f = s.dispatch = QT.bind(null, nn, s);
      return [i.memoizedState, f];
    }
    function Wg(e, t, a) {
      var i = Ni(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = gr, f = s.baseQueue, p = o.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, S = p.next;
          f.next = S, p.next = v;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, o.pending = null;
      }
      if (f !== null) {
        var C = f.next, D = s.baseState, _ = null, F = null, V = null, I = C;
        do {
          var ge = I.lane;
          if (Eo(ac, ge)) {
            if (V !== null) {
              var Me = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Pn,
                action: I.action,
                hasEagerState: I.hasEagerState,
                eagerState: I.eagerState,
                next: null
              };
              V = V.next = Me;
            }
            if (I.hasEagerState)
              D = I.eagerState;
            else {
              var At = I.action;
              D = e(D, At);
            }
          } else {
            var Pe = {
              lane: ge,
              action: I.action,
              hasEagerState: I.hasEagerState,
              eagerState: I.eagerState,
              next: null
            };
            V === null ? (F = V = Pe, _ = D) : V = V.next = Pe, nn.lanes = st(nn.lanes, ge), nv(ge);
          }
          I = I.next;
        } while (I !== null && I !== C);
        V === null ? _ = D : V.next = F, Ee(D, i.memoizedState) || Ip(), i.memoizedState = D, i.baseState = _, i.baseQueue = V, o.lastRenderedState = D;
      }
      var Tt = o.interleaved;
      if (Tt !== null) {
        var z = Tt;
        do {
          var Y = z.lane;
          nn.lanes = st(nn.lanes, Y), nv(Y), z = z.next;
        } while (z !== Tt);
      } else f === null && (o.lanes = G);
      var A = o.dispatch;
      return [i.memoizedState, A];
    }
    function Gg(e, t, a) {
      var i = Ni(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, f = o.pending, p = i.memoizedState;
      if (f !== null) {
        o.pending = null;
        var v = f.next, S = v;
        do {
          var C = S.action;
          p = e(p, C), S = S.next;
        } while (S !== v);
        Ee(p, i.memoizedState) || Ip(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), o.lastRenderedState = p;
      }
      return [p, s];
    }
    function QO(e, t, a) {
    }
    function qO(e, t, a) {
    }
    function Qg(e, t, a) {
      var i = nn, o = Pl(), s, f = Pr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Yf || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      } else {
        if (s = t(), !Yf) {
          var p = t();
          Ee(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
        }
        var v = Km();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(v, ac) || ZE(i, t, s);
      }
      o.memoizedState = s;
      var S = {
        value: s,
        getSnapshot: t
      };
      return o.queue = S, bm(tC.bind(null, i, S, e), [e]), i.flags |= Ea, Up(mr | Br, eC.bind(null, i, S, s, t), void 0, null), s;
    }
    function Sm(e, t, a) {
      var i = nn, o = Ni(), s = t();
      if (!Yf) {
        var f = t();
        Ee(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      }
      var p = o.memoizedState, v = !Ee(p, s);
      v && (o.memoizedState = s, Ip());
      var S = o.queue;
      if (Fp(tC.bind(null, i, S, e), [e]), S.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Sr !== null && Sr.memoizedState.tag & mr) {
        i.flags |= Ea, Up(mr | Br, eC.bind(null, i, S, s, t), void 0, null);
        var C = Km();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(C, ac) || ZE(i, t, s);
      }
      return s;
    }
    function ZE(e, t, a) {
      e.flags |= Mc;
      var i = {
        getSnapshot: t,
        value: a
      }, o = nn.updateQueue;
      if (o === null)
        o = JE(), nn.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function eC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, nC(t) && rC(e);
    }
    function tC(e, t, a) {
      var i = function() {
        nC(t) && rC(e);
      };
      return a(i);
    }
    function nC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ee(a, i);
      } catch {
        return !0;
      }
    }
    function rC(e) {
      var t = Ya(e, Ye);
      t !== null && br(t, e, Ye, qt);
    }
    function Em(e) {
      var t = Pl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: G,
        dispatch: null,
        lastRenderedReducer: Ig,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = qT.bind(null, nn, a);
      return [t.memoizedState, i];
    }
    function qg(e) {
      return Wg(Ig);
    }
    function Kg(e) {
      return Gg(Ig);
    }
    function Up(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = nn.updateQueue;
      if (s === null)
        s = JE(), nn.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = o.next = o;
        else {
          var p = f.next;
          f.next = o, o.next = p, s.lastEffect = o;
        }
      }
      return o;
    }
    function Xg(e) {
      var t = Pl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Cm(e) {
      var t = Ni();
      return t.memoizedState;
    }
    function jp(e, t, a, i) {
      var o = Pl(), s = i === void 0 ? null : i;
      nn.flags |= e, o.memoizedState = Up(mr | t, a, void 0, s);
    }
    function xm(e, t, a, i) {
      var o = Ni(), s = i === void 0 ? null : i, f = void 0;
      if (gr !== null) {
        var p = gr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if ($g(s, v)) {
            o.memoizedState = Up(t, a, f, s);
            return;
          }
        }
      }
      nn.flags |= e, o.memoizedState = Up(mr | t, a, f, s);
    }
    function bm(e, t) {
      return (nn.mode & tn) !== je ? jp(El | Ea | bd, Br, e, t) : jp(Ea | bd, Br, e, t);
    }
    function Fp(e, t) {
      return xm(Ea, Br, e, t);
    }
    function Jg(e, t) {
      return jp(bt, Vl, e, t);
    }
    function wm(e, t) {
      return xm(bt, Vl, e, t);
    }
    function Zg(e, t) {
      var a = bt;
      return a |= Sl, (nn.mode & tn) !== je && (a |= jr), jp(a, yr, e, t);
    }
    function Rm(e, t) {
      return xm(bt, yr, e, t);
    }
    function aC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function eS(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = bt;
      return o |= Sl, (nn.mode & tn) !== je && (o |= jr), jp(o, yr, aC.bind(null, t, e), i);
    }
    function Tm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return xm(bt, yr, aC.bind(null, t, e), i);
    }
    function YT(e, t) {
    }
    var _m = YT;
    function tS(e, t) {
      var a = Pl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function km(e, t) {
      var a = Ni(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if ($g(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function nS(e, t) {
      var a = Pl(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function Dm(e, t) {
      var a = Ni(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if ($g(i, s))
          return o[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function rS(e) {
      var t = Pl();
      return t.memoizedState = e, e;
    }
    function iC(e) {
      var t = Ni(), a = gr, i = a.memoizedState;
      return oC(t, i, e);
    }
    function lC(e) {
      var t = Ni();
      if (gr === null)
        return t.memoizedState = e, e;
      var a = gr.memoizedState;
      return oC(t, a, e);
    }
    function oC(e, t, a) {
      var i = !Bd(ac);
      if (i) {
        if (!Ee(a, t)) {
          var o = Id();
          nn.lanes = st(nn.lanes, o), nv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Ip()), e.memoizedState = a, a;
    }
    function WT(e, t, a) {
      var i = xa();
      Gn(zs(i, Va)), e(!0);
      var o = Mp.transition;
      Mp.transition = {};
      var s = Mp.transition;
      Mp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Gn(i), Mp.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && J("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function aS() {
      var e = Em(!1), t = e[0], a = e[1], i = WT.bind(null, a), o = Pl();
      return o.memoizedState = i, [t, i];
    }
    function uC() {
      var e = qg(), t = e[0], a = Ni(), i = a.memoizedState;
      return [t, i];
    }
    function sC() {
      var e = Kg(), t = e[0], a = Ni(), i = a.memoizedState;
      return [t, i];
    }
    var cC = !1;
    function GT() {
      return cC;
    }
    function iS() {
      var e = Pl(), t = Km(), a = t.identifierPrefix, i;
      if (Pr()) {
        var o = cT();
        i = ":" + a + "R" + o;
        var s = Ap++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = BT++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Om() {
      var e = Ni(), t = e.memoizedState;
      return t;
    }
    function QT(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Iu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (fC(e))
        dC(t, o);
      else {
        var s = VE(e, t, o, i);
        if (s !== null) {
          var f = ka();
          br(s, e, i, f), pC(s, t, i);
        }
      }
      vC(e, i);
    }
    function qT(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Iu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (fC(e))
        dC(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === G && (s === null || s.lanes === G)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Re.current, Re.current = rl;
            try {
              var v = t.lastRenderedState, S = f(v, a);
              if (o.hasEagerState = !0, o.eagerState = S, Ee(S, v)) {
                MT(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Re.current = p;
            }
          }
        }
        var C = VE(e, t, o, i);
        if (C !== null) {
          var D = ka();
          br(C, e, i, D), pC(C, t, i);
        }
      }
      vC(e, i);
    }
    function fC(e) {
      var t = e.alternate;
      return e === nn || t !== null && t === nn;
    }
    function dC(e, t) {
      zp = gm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function pC(e, t, a) {
      if ($d(a)) {
        var i = t.lanes;
        i = lf(i, e.pendingLanes);
        var o = st(i, a);
        t.lanes = o, Ms(e, o);
      }
    }
    function vC(e, t, a) {
      bs(e, t);
    }
    var Nm = {
      readContext: lr,
      useCallback: da,
      useContext: da,
      useEffect: da,
      useImperativeHandle: da,
      useInsertionEffect: da,
      useLayoutEffect: da,
      useMemo: da,
      useReducer: da,
      useRef: da,
      useState: da,
      useDebugValue: da,
      useDeferredValue: da,
      useTransition: da,
      useMutableSource: da,
      useSyncExternalStore: da,
      useId: da,
      unstable_isNewReconciler: xe
    }, hC = null, mC = null, yC = null, gC = null, Bl = null, rl = null, Lm = null;
    {
      var lS = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, tt = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      hC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", Yt(), Wf(t), tS(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", Yt(), lr(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", Yt(), Wf(t), bm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", Yt(), Wf(a), eS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", Yt(), Wf(t), Jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", Yt(), Wf(t), Zg(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", Yt(), Wf(t);
          var a = Re.current;
          Re.current = Bl;
          try {
            return nS(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", Yt();
          var i = Re.current;
          Re.current = Bl;
          try {
            return Yg(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", Yt(), Xg(e);
        },
        useState: function(e) {
          Q = "useState", Yt();
          var t = Re.current;
          Re.current = Bl;
          try {
            return Em(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", Yt(), rS(e);
        },
        useTransition: function() {
          return Q = "useTransition", Yt(), aS();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", Yt(), Qg(e, t, a);
        },
        useId: function() {
          return Q = "useId", Yt(), iS();
        },
        unstable_isNewReconciler: xe
      }, mC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", ve(), tS(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", ve(), lr(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", ve(), bm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", ve(), eS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", ve(), Jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", ve(), Zg(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", ve();
          var a = Re.current;
          Re.current = Bl;
          try {
            return nS(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", ve();
          var i = Re.current;
          Re.current = Bl;
          try {
            return Yg(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", ve(), Xg(e);
        },
        useState: function(e) {
          Q = "useState", ve();
          var t = Re.current;
          Re.current = Bl;
          try {
            return Em(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", ve(), void 0;
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", ve(), rS(e);
        },
        useTransition: function() {
          return Q = "useTransition", ve(), aS();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", ve(), Qg(e, t, a);
        },
        useId: function() {
          return Q = "useId", ve(), iS();
        },
        unstable_isNewReconciler: xe
      }, yC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", ve(), km(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", ve(), lr(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", ve(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", ve(), Tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", ve(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", ve(), Rm(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", ve();
          var a = Re.current;
          Re.current = rl;
          try {
            return Dm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", ve();
          var i = Re.current;
          Re.current = rl;
          try {
            return Wg(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", ve(), Cm();
        },
        useState: function(e) {
          Q = "useState", ve();
          var t = Re.current;
          Re.current = rl;
          try {
            return qg(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", ve(), _m();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", ve(), iC(e);
        },
        useTransition: function() {
          return Q = "useTransition", ve(), uC();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", ve(), Sm(e, t);
        },
        useId: function() {
          return Q = "useId", ve(), Om();
        },
        unstable_isNewReconciler: xe
      }, gC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", ve(), km(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", ve(), lr(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", ve(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", ve(), Tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", ve(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", ve(), Rm(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", ve();
          var a = Re.current;
          Re.current = Lm;
          try {
            return Dm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", ve();
          var i = Re.current;
          Re.current = Lm;
          try {
            return Gg(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", ve(), Cm();
        },
        useState: function(e) {
          Q = "useState", ve();
          var t = Re.current;
          Re.current = Lm;
          try {
            return Kg(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", ve(), _m();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", ve(), lC(e);
        },
        useTransition: function() {
          return Q = "useTransition", ve(), sC();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", ve(), Sm(e, t);
        },
        useId: function() {
          return Q = "useId", ve(), Om();
        },
        unstable_isNewReconciler: xe
      }, Bl = {
        readContext: function(e) {
          return lS(), lr(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", tt(), Yt(), tS(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", tt(), Yt(), lr(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", tt(), Yt(), bm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", tt(), Yt(), eS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", tt(), Yt(), Jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", tt(), Yt(), Zg(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", tt(), Yt();
          var a = Re.current;
          Re.current = Bl;
          try {
            return nS(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", tt(), Yt();
          var i = Re.current;
          Re.current = Bl;
          try {
            return Yg(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", tt(), Yt(), Xg(e);
        },
        useState: function(e) {
          Q = "useState", tt(), Yt();
          var t = Re.current;
          Re.current = Bl;
          try {
            return Em(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", tt(), Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", tt(), Yt(), rS(e);
        },
        useTransition: function() {
          return Q = "useTransition", tt(), Yt(), aS();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", tt(), Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", tt(), Yt(), Qg(e, t, a);
        },
        useId: function() {
          return Q = "useId", tt(), Yt(), iS();
        },
        unstable_isNewReconciler: xe
      }, rl = {
        readContext: function(e) {
          return lS(), lr(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", tt(), ve(), km(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", tt(), ve(), lr(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", tt(), ve(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", tt(), ve(), Tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", tt(), ve(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", tt(), ve(), Rm(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", tt(), ve();
          var a = Re.current;
          Re.current = rl;
          try {
            return Dm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", tt(), ve();
          var i = Re.current;
          Re.current = rl;
          try {
            return Wg(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", tt(), ve(), Cm();
        },
        useState: function(e) {
          Q = "useState", tt(), ve();
          var t = Re.current;
          Re.current = rl;
          try {
            return qg(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", tt(), ve(), _m();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", tt(), ve(), iC(e);
        },
        useTransition: function() {
          return Q = "useTransition", tt(), ve(), uC();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", tt(), ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", tt(), ve(), Sm(e, t);
        },
        useId: function() {
          return Q = "useId", tt(), ve(), Om();
        },
        unstable_isNewReconciler: xe
      }, Lm = {
        readContext: function(e) {
          return lS(), lr(e);
        },
        useCallback: function(e, t) {
          return Q = "useCallback", tt(), ve(), km(e, t);
        },
        useContext: function(e) {
          return Q = "useContext", tt(), ve(), lr(e);
        },
        useEffect: function(e, t) {
          return Q = "useEffect", tt(), ve(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Q = "useImperativeHandle", tt(), ve(), Tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Q = "useInsertionEffect", tt(), ve(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Q = "useLayoutEffect", tt(), ve(), Rm(e, t);
        },
        useMemo: function(e, t) {
          Q = "useMemo", tt(), ve();
          var a = Re.current;
          Re.current = rl;
          try {
            return Dm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Q = "useReducer", tt(), ve();
          var i = Re.current;
          Re.current = rl;
          try {
            return Gg(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return Q = "useRef", tt(), ve(), Cm();
        },
        useState: function(e) {
          Q = "useState", tt(), ve();
          var t = Re.current;
          Re.current = rl;
          try {
            return Kg(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Q = "useDebugValue", tt(), ve(), _m();
        },
        useDeferredValue: function(e) {
          return Q = "useDeferredValue", tt(), ve(), lC(e);
        },
        useTransition: function() {
          return Q = "useTransition", tt(), ve(), sC();
        },
        useMutableSource: function(e, t, a) {
          return Q = "useMutableSource", tt(), ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Q = "useSyncExternalStore", tt(), ve(), Sm(e, t);
        },
        useId: function() {
          return Q = "useId", tt(), ve(), Om();
        },
        unstable_isNewReconciler: xe
      };
    }
    var Vu = E.unstable_now, SC = 0, Mm = -1, Hp = -1, zm = -1, oS = !1, Am = !1;
    function EC() {
      return oS;
    }
    function KT() {
      Am = !0;
    }
    function XT() {
      oS = !1, Am = !1;
    }
    function JT() {
      oS = Am, Am = !1;
    }
    function CC() {
      return SC;
    }
    function xC() {
      SC = Vu();
    }
    function uS(e) {
      Hp = Vu(), e.actualStartTime < 0 && (e.actualStartTime = Vu());
    }
    function bC(e) {
      Hp = -1;
    }
    function Um(e, t) {
      if (Hp >= 0) {
        var a = Vu() - Hp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Hp = -1;
      }
    }
    function $l(e) {
      if (Mm >= 0) {
        var t = Vu() - Mm;
        Mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case W:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Rt:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function sS(e) {
      if (zm >= 0) {
        var t = Vu() - zm;
        zm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case W:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Rt:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Il() {
      Mm = Vu();
    }
    function cS() {
      zm = Vu();
    }
    function fS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function al(e, t) {
      if (e && e.defaultProps) {
        var a = it({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var dS = {}, pS, vS, hS, mS, yS, wC, jm, gS, SS, ES, Vp;
    {
      pS = /* @__PURE__ */ new Set(), vS = /* @__PURE__ */ new Set(), hS = /* @__PURE__ */ new Set(), mS = /* @__PURE__ */ new Set(), gS = /* @__PURE__ */ new Set(), yS = /* @__PURE__ */ new Set(), SS = /* @__PURE__ */ new Set(), ES = /* @__PURE__ */ new Set(), Vp = /* @__PURE__ */ new Set();
      var RC = /* @__PURE__ */ new Set();
      jm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          RC.has(a) || (RC.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, wC = function(e, t) {
        if (t === void 0) {
          var a = Mt(e) || "Component";
          yS.has(a) || (yS.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(dS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(dS);
    }
    function CS(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & lt) {
          Qt(!0);
          try {
            s = a(i, o);
          } finally {
            Qt(!1);
          }
        }
        wC(t, s);
      }
      var f = s == null ? o : it({}, o, s);
      if (e.memoizedState = f, e.lanes === G) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var xS = {
      isMounted: wd,
      enqueueSetState: function(e, t, a) {
        var i = su(e), o = ka(), s = Iu(i), f = Uo(o, s);
        f.payload = t, a != null && (jm(a, "setState"), f.callback = a);
        var p = Uu(i, f, s);
        p !== null && (br(p, i, s, o), dm(p, i, s)), bs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = su(e), o = ka(), s = Iu(i), f = Uo(o, s);
        f.tag = BE, f.payload = t, a != null && (jm(a, "replaceState"), f.callback = a);
        var p = Uu(i, f, s);
        p !== null && (br(p, i, s, o), dm(p, i, s)), bs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = su(e), i = ka(), o = Iu(a), s = Uo(i, o);
        s.tag = sm, t != null && (jm(t, "forceUpdate"), s.callback = t);
        var f = Uu(a, s, o);
        f !== null && (br(f, a, o, i), dm(f, a, o)), Fd(a, o);
      }
    };
    function TC(e, t, a, i, o, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & lt) {
            Qt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Qt(!1);
            }
          }
          v === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Mt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !He(a, i) || !He(o, s) : !0;
    }
    function ZT(e, t, a) {
      var i = e.stateNode;
      {
        var o = Mt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), t.childContextTypes && !Vp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & lt) === je && (Vp.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), t.contextTypes && !Vp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & lt) === je && (Vp.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !SS.has(t) && (SS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Mt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !hS.has(t) && (hS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Mt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var p = i.state;
        p && (typeof p != "object" || ut(p)) && y("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function _C(e, t) {
      t.updater = xS, e.stateNode = t, ms(t, e), t._reactInternalInstance = dS;
    }
    function kC(e, t, a) {
      var i = !1, o = si, s = si, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !ES.has(t)) {
          ES.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === ji ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Mt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = lr(f);
      else {
        o = zf(e, t, !0);
        var S = t.contextTypes;
        i = S != null, s = i ? Af(e, o) : si;
      }
      var C = new t(a, s);
      if (e.mode & lt) {
        Qt(!0);
        try {
          C = new t(a, s);
        } finally {
          Qt(!1);
        }
      }
      var D = e.memoizedState = C.state !== null && C.state !== void 0 ? C.state : null;
      _C(e, C);
      {
        if (typeof t.getDerivedStateFromProps == "function" && D === null) {
          var _ = Mt(t) || "Component";
          vS.has(_) || (vS.add(_), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, C.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof C.getSnapshotBeforeUpdate == "function") {
          var F = null, V = null, I = null;
          if (typeof C.componentWillMount == "function" && C.componentWillMount.__suppressDeprecationWarning !== !0 ? F = "componentWillMount" : typeof C.UNSAFE_componentWillMount == "function" && (F = "UNSAFE_componentWillMount"), typeof C.componentWillReceiveProps == "function" && C.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? V = "componentWillReceiveProps" : typeof C.UNSAFE_componentWillReceiveProps == "function" && (V = "UNSAFE_componentWillReceiveProps"), typeof C.componentWillUpdate == "function" && C.componentWillUpdate.__suppressDeprecationWarning !== !0 ? I = "componentWillUpdate" : typeof C.UNSAFE_componentWillUpdate == "function" && (I = "UNSAFE_componentWillUpdate"), F !== null || V !== null || I !== null) {
            var ge = Mt(t) || "Component", Pe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            mS.has(ge) || (mS.add(ge), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ge, Pe, F !== null ? `
  ` + F : "", V !== null ? `
  ` + V : "", I !== null ? `
  ` + I : ""));
          }
        }
      }
      return i && yE(e, o, s), C;
    }
    function e1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Xe(e) || "Component"), xS.enqueueReplaceState(t, t.state, null));
    }
    function DC(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = Xe(e) || "Component";
          pS.has(s) || (pS.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        xS.enqueueReplaceState(t, t.state, null);
      }
    }
    function bS(e, t, a, i) {
      ZT(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = {}, Lg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = lr(s);
      else {
        var f = zf(e, t, !0);
        o.context = Af(e, f);
      }
      {
        if (o.state === a) {
          var p = Mt(t) || "Component";
          gS.has(p) || (gS.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & lt && tl.recordLegacyContextWarning(e, o), tl.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (CS(e, t, v, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (e1(e, o), pm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var S = bt;
        S |= Sl, (e.mode & tn) !== je && (S |= jr), e.flags |= S;
      }
    }
    function t1(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, p = t.contextType, v = si;
      if (typeof p == "object" && p !== null)
        v = lr(p);
      else {
        var S = zf(e, t, !0);
        v = Af(e, S);
      }
      var C = t.getDerivedStateFromProps, D = typeof C == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !D && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== v) && DC(e, o, a, v), IE();
      var _ = e.memoizedState, F = o.state = _;
      if (pm(e, a, o, i), F = e.memoizedState, s === a && _ === F && !Qh() && !vm()) {
        if (typeof o.componentDidMount == "function") {
          var V = bt;
          V |= Sl, (e.mode & tn) !== je && (V |= jr), e.flags |= V;
        }
        return !1;
      }
      typeof C == "function" && (CS(e, t, C, a), F = e.memoizedState);
      var I = vm() || TC(e, t, s, a, _, F, v);
      if (I) {
        if (!D && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var ge = bt;
          ge |= Sl, (e.mode & tn) !== je && (ge |= jr), e.flags |= ge;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var Pe = bt;
          Pe |= Sl, (e.mode & tn) !== je && (Pe |= jr), e.flags |= Pe;
        }
        e.memoizedProps = a, e.memoizedState = F;
      }
      return o.props = a, o.state = F, o.context = v, I;
    }
    function n1(e, t, a, i, o) {
      var s = t.stateNode;
      $E(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : al(t.type, f);
      s.props = p;
      var v = t.pendingProps, S = s.context, C = a.contextType, D = si;
      if (typeof C == "object" && C !== null)
        D = lr(C);
      else {
        var _ = zf(t, a, !0);
        D = Af(t, _);
      }
      var F = a.getDerivedStateFromProps, V = typeof F == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !V && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || S !== D) && DC(t, s, i, D), IE();
      var I = t.memoizedState, ge = s.state = I;
      if (pm(t, i, s, o), ge = t.memoizedState, f === v && I === ge && !Qh() && !vm() && !pe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || I !== e.memoizedState) && (t.flags |= bt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || I !== e.memoizedState) && (t.flags |= Fa), !1;
      typeof F == "function" && (CS(t, a, F, i), ge = t.memoizedState);
      var Pe = vm() || TC(t, a, p, i, I, ge, D) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      pe;
      return Pe ? (!V && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ge, D), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ge, D)), typeof s.componentDidUpdate == "function" && (t.flags |= bt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Fa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || I !== e.memoizedState) && (t.flags |= bt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || I !== e.memoizedState) && (t.flags |= Fa), t.memoizedProps = i, t.memoizedState = ge), s.props = i, s.state = ge, s.context = D, Pe;
    }
    function ic(e, t) {
      return {
        value: e,
        source: t,
        stack: Lt(t),
        digest: null
      };
    }
    function wS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function r1(e, t) {
      return !0;
    }
    function RS(e, t) {
      try {
        var a = r1(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === te)
            return;
          console.error(i);
        }
        var p = o ? Xe(o) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", S;
        if (e.tag === W)
          S = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var C = Xe(e) || "Anonymous";
          S = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + C + ".");
        }
        var D = v + `
` + f + `

` + ("" + S);
        console.error(D);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var a1 = typeof WeakMap == "function" ? WeakMap : Map;
    function OC(e, t, a) {
      var i = Uo(qt, a);
      i.tag = Og, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        K_(o), RS(e, t);
      }, i;
    }
    function TS(e, t, a) {
      var i = Uo(qt, a);
      i.tag = Og;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          Px(e), RS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        Px(e), RS(e, t), typeof o != "function" && Q_(this);
        var v = t.value, S = t.stack;
        this.componentDidCatch(v, {
          componentStack: S !== null ? S : ""
        }), typeof o != "function" && (oa(e.lanes, Ye) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Xe(e) || "Unknown"));
      }), i;
    }
    function NC(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new a1(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = X_.bind(null, e, t, a);
        Or && rv(e, a), t.then(s, s);
      }
    }
    function i1(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function l1(e, t) {
      var a = e.tag;
      if ((e.mode & Et) === je && (a === Z || a === ze || a === Ie)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function LC(e) {
      var t = e;
      do {
        if (t.tag === Ne && VT(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function MC(e, t, a, i, o) {
      if ((e.mode & Et) === je) {
        if (e === t)
          e.flags |= Dr;
        else {
          if (e.flags |= mt, a.flags |= ai, a.flags &= -52805, a.tag === te) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ot;
            else {
              var f = Uo(qt, Ye);
              f.tag = sm, Uu(a, f, Ye);
            }
          }
          a.lanes = st(a.lanes, Ye);
        }
        return e;
      }
      return e.flags |= Dr, e.lanes = o, e;
    }
    function o1(e, t, a, i, o) {
      if (a.flags |= co, Or && rv(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        l1(a), Pr() && a.mode & Et && wE();
        var f = LC(t);
        if (f !== null) {
          f.flags &= ~gn, MC(f, t, a, e, o), f.mode & Et && NC(e, s, o), i1(f, e, s);
          return;
        } else {
          if (!Pd(o)) {
            NC(e, s, o), i0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Pr() && a.mode & Et) {
        wE();
        var v = LC(t);
        if (v !== null) {
          (v.flags & Dr) === Ue && (v.flags |= gn), MC(v, t, a, e, o), gg(ic(i, a));
          return;
        }
      }
      i = ic(i, a), V_(i);
      var S = t;
      do {
        switch (S.tag) {
          case W: {
            var C = i;
            S.flags |= Dr;
            var D = ar(o);
            S.lanes = st(S.lanes, D);
            var _ = OC(S, C, D);
            Mg(S, _);
            return;
          }
          case te:
            var F = i, V = S.type, I = S.stateNode;
            if ((S.flags & mt) === Ue && (typeof V.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && !Lx(I))) {
              S.flags |= Dr;
              var ge = ar(o);
              S.lanes = st(S.lanes, ge);
              var Pe = TS(S, F, ge);
              Mg(S, Pe);
              return;
            }
            break;
        }
        S = S.return;
      } while (S !== null);
    }
    function u1() {
      return null;
    }
    var Pp = N.ReactCurrentOwner, il = !1, _S, Bp, kS, DS, OS, lc, NS, Fm, $p;
    _S = {}, Bp = {}, kS = {}, DS = {}, OS = {}, lc = !1, NS = {}, Fm = {}, $p = {};
    function Ta(e, t, a, i) {
      e === null ? t.child = UE(t, null, a, i) : t.child = Hf(t, e.child, a, i);
    }
    function s1(e, t, a, i) {
      t.child = Hf(t, e.child, null, i), t.child = Hf(t, null, a, i);
    }
    function zC(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Zi(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f = a.render, p = t.ref, v, S;
      Pf(t, o), Ha(t);
      {
        if (Pp.current = t, Ma(!0), v = Gf(e, t, f, i, p, o), S = Qf(), t.mode & lt) {
          Qt(!0);
          try {
            v = Gf(e, t, f, i, p, o), S = Qf();
          } finally {
            Qt(!1);
          }
        }
        Ma(!1);
      }
      return wl(), e !== null && !il ? (KE(e, t, o), jo(e, t, o)) : (Pr() && S && dg(t), t.flags |= Qi, Ta(e, t, v, o), t.child);
    }
    function AC(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (vk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = nd(s), t.tag = Ie, t.type = f, zS(t, s), UC(e, t, f, i, o);
        }
        {
          var p = s.propTypes;
          if (p && Zi(
            p,
            i,
            // Resolved props
            "prop",
            Mt(s)
          ), a.defaultProps !== void 0) {
            var v = Mt(s) || "Unknown";
            $p[v] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), $p[v] = !0);
          }
        }
        var S = m0(a.type, null, i, t, t.mode, o);
        return S.ref = t.ref, S.return = t, t.child = S, S;
      }
      {
        var C = a.type, D = C.propTypes;
        D && Zi(
          D,
          i,
          // Resolved props
          "prop",
          Mt(C)
        );
      }
      var _ = e.child, F = VS(e, o);
      if (!F) {
        var V = _.memoizedProps, I = a.compare;
        if (I = I !== null ? I : He, I(V, i) && e.ref === t.ref)
          return jo(e, t, o);
      }
      t.flags |= Qi;
      var ge = fc(_, i);
      return ge.ref = t.ref, ge.return = t, t.child = ge, ge;
    }
    function UC(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === et) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var S = s && s.propTypes;
          S && Zi(
            S,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Mt(s)
          );
        }
      }
      if (e !== null) {
        var C = e.memoizedProps;
        if (He(C, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (il = !1, t.pendingProps = i = C, VS(e, o))
            (e.flags & ai) !== Ue && (il = !0);
          else return t.lanes = e.lanes, jo(e, t, o);
      }
      return LS(e, t, a, i, o);
    }
    function jC(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || O)
        if ((t.mode & Et) === je) {
          var f = {
            baseLanes: G,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Xm(t, a);
        } else if (oa(a, ia)) {
          var D = {
            baseLanes: G,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = D;
          var _ = s !== null ? s.baseLanes : a;
          Xm(t, _);
        } else {
          var p = null, v;
          if (s !== null) {
            var S = s.baseLanes;
            v = st(S, a);
          } else
            v = a;
          t.lanes = t.childLanes = ia;
          var C = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = C, t.updateQueue = null, Xm(t, v), null;
        }
      else {
        var F;
        s !== null ? (F = st(s.baseLanes, a), t.memoizedState = null) : F = a, Xm(t, F);
      }
      return Ta(e, t, o, a), t.child;
    }
    function c1(e, t, a) {
      var i = t.pendingProps;
      return Ta(e, t, i, a), t.child;
    }
    function f1(e, t, a) {
      var i = t.pendingProps.children;
      return Ta(e, t, i, a), t.child;
    }
    function d1(e, t, a) {
      {
        t.flags |= bt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return Ta(e, t, s, a), t.child;
    }
    function FC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Hn, t.flags |= gs);
    }
    function LS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Zi(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f;
      {
        var p = zf(t, a, !0);
        f = Af(t, p);
      }
      var v, S;
      Pf(t, o), Ha(t);
      {
        if (Pp.current = t, Ma(!0), v = Gf(e, t, a, i, f, o), S = Qf(), t.mode & lt) {
          Qt(!0);
          try {
            v = Gf(e, t, a, i, f, o), S = Qf();
          } finally {
            Qt(!1);
          }
        }
        Ma(!1);
      }
      return wl(), e !== null && !il ? (KE(e, t, o), jo(e, t, o)) : (Pr() && S && dg(t), t.flags |= Qi, Ta(e, t, v, o), t.child);
    }
    function HC(e, t, a, i, o) {
      {
        switch (Dk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= mt, t.flags |= Dr;
            var S = new Error("Simulated error coming from DevTools"), C = ar(o);
            t.lanes = st(t.lanes, C);
            var D = TS(t, ic(S, t), C);
            Mg(t, D);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var _ = a.propTypes;
          _ && Zi(
            _,
            i,
            // Resolved props
            "prop",
            Mt(a)
          );
        }
      }
      var F;
      Hl(a) ? (F = !0, Kh(t)) : F = !1, Pf(t, o);
      var V = t.stateNode, I;
      V === null ? (Vm(e, t), kC(t, a, i), bS(t, a, i, o), I = !0) : e === null ? I = t1(t, a, i, o) : I = n1(e, t, a, i, o);
      var ge = MS(e, t, a, I, F, o);
      {
        var Pe = t.stateNode;
        I && Pe.props !== i && (lc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Xe(t) || "a component"), lc = !0);
      }
      return ge;
    }
    function MS(e, t, a, i, o, s) {
      FC(e, t);
      var f = (t.flags & mt) !== Ue;
      if (!i && !f)
        return o && EE(t, a, !1), jo(e, t, s);
      var p = t.stateNode;
      Pp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, bC();
      else {
        Ha(t);
        {
          if (Ma(!0), v = p.render(), t.mode & lt) {
            Qt(!0);
            try {
              p.render();
            } finally {
              Qt(!1);
            }
          }
          Ma(!1);
        }
        wl();
      }
      return t.flags |= Qi, e !== null && f ? s1(e, t, v, s) : Ta(e, t, v, s), t.memoizedState = p.state, o && EE(t, a, !0), t.child;
    }
    function VC(e) {
      var t = e.stateNode;
      t.pendingContext ? gE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && gE(e, t.context, !1), zg(e, t.containerInfo);
    }
    function p1(e, t, a) {
      if (VC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      $E(e, t), pm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (o.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, S = t.updateQueue;
        if (S.baseState = v, t.memoizedState = v, t.flags & gn) {
          var C = ic(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return PC(e, t, p, a, C);
        } else if (p !== s) {
          var D = ic(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return PC(e, t, p, a, D);
        } else {
          mT(t);
          var _ = UE(t, null, p, a);
          t.child = _;
          for (var F = _; F; )
            F.flags = F.flags & ~wn | Rn, F = F.sibling;
        }
      } else {
        if (Ff(), p === s)
          return jo(e, t, a);
        Ta(e, t, p, a);
      }
      return t.child;
    }
    function PC(e, t, a, i, o) {
      return Ff(), gg(o), t.flags |= gn, Ta(e, t, a, i), t.child;
    }
    function v1(e, t, a) {
      GE(t), e === null && yg(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, p = Jy(i, o);
      return p ? f = null : s !== null && Jy(i, s) && (t.flags |= Gt), FC(e, t), Ta(e, t, f, a), t.child;
    }
    function h1(e, t) {
      return e === null && yg(t), null;
    }
    function m1(e, t, a, i) {
      Vm(e, t);
      var o = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var S = t.tag = hk(v), C = al(v, o), D;
      switch (S) {
        case Z:
          return zS(t, v), t.type = v = nd(v), D = LS(null, t, v, C, i), D;
        case te:
          return t.type = v = c0(v), D = HC(null, t, v, C, i), D;
        case ze:
          return t.type = v = f0(v), D = zC(null, t, v, C, i), D;
        case dt: {
          if (t.type !== t.elementType) {
            var _ = v.propTypes;
            _ && Zi(
              _,
              C,
              // Resolved for outer only
              "prop",
              Mt(v)
            );
          }
          return D = AC(
            null,
            t,
            v,
            al(v.type, C),
            // The inner type can have defaults too
            i
          ), D;
        }
      }
      var F = "";
      throw v !== null && typeof v == "object" && v.$$typeof === et && (F = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + F));
    }
    function y1(e, t, a, i, o) {
      Vm(e, t), t.tag = te;
      var s;
      return Hl(a) ? (s = !0, Kh(t)) : s = !1, Pf(t, o), kC(t, a, i), bS(t, a, i, o), MS(null, t, a, !0, s, o);
    }
    function g1(e, t, a, i) {
      Vm(e, t);
      var o = t.pendingProps, s;
      {
        var f = zf(t, a, !1);
        s = Af(t, f);
      }
      Pf(t, i);
      var p, v;
      Ha(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var S = Mt(a) || "Unknown";
          _S[S] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), _S[S] = !0);
        }
        t.mode & lt && tl.recordLegacyContextWarning(t, null), Ma(!0), Pp.current = t, p = Gf(null, t, a, o, s, i), v = Qf(), Ma(!1);
      }
      if (wl(), t.flags |= Qi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var C = Mt(a) || "Unknown";
        Bp[C] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", C, C, C), Bp[C] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var D = Mt(a) || "Unknown";
          Bp[D] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), Bp[D] = !0);
        }
        t.tag = te, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return Hl(a) ? (_ = !0, Kh(t)) : _ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Lg(t), _C(t, p), bS(t, a, o, i), MS(null, t, a, !0, _, i);
      } else {
        if (t.tag = Z, t.mode & lt) {
          Qt(!0);
          try {
            p = Gf(null, t, a, o, s, i), v = Qf();
          } finally {
            Qt(!1);
          }
        }
        return Pr() && v && dg(t), Ta(null, t, p, i), zS(t, a), t.child;
      }
    }
    function zS(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ar();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), OS[o] || (OS[o] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Mt(t) || "Unknown";
          $p[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), $p[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Mt(t) || "Unknown";
          DS[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), DS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Mt(t) || "Unknown";
          kS[v] || (y("%s: Function components do not support contextType.", v), kS[v] = !0);
        }
      }
    }
    var AS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Pn
    };
    function US(e) {
      return {
        baseLanes: e,
        cachePool: u1(),
        transitions: null
      };
    }
    function S1(e, t) {
      var a = null;
      return {
        baseLanes: st(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function E1(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return jg(e, Lp);
    }
    function C1(e, t) {
      return Ls(e.childLanes, t);
    }
    function BC(e, t, a) {
      var i = t.pendingProps;
      Ok(t) && (t.flags |= mt);
      var o = nl.current, s = !1, f = (t.flags & mt) !== Ue;
      if (f || E1(o, e) ? (s = !0, t.flags &= ~mt) : (e === null || e.memoizedState !== null) && (o = HT(o, qE)), o = $f(o), Fu(t, o), e === null) {
        yg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return T1(t, v);
        }
        var S = i.children, C = i.fallback;
        if (s) {
          var D = x1(t, S, C, a), _ = t.child;
          return _.memoizedState = US(a), t.memoizedState = AS, D;
        } else
          return jS(t, S);
      } else {
        var F = e.memoizedState;
        if (F !== null) {
          var V = F.dehydrated;
          if (V !== null)
            return _1(e, t, f, i, V, F, a);
        }
        if (s) {
          var I = i.fallback, ge = i.children, Pe = w1(e, t, ge, I, a), Me = t.child, At = e.child.memoizedState;
          return Me.memoizedState = At === null ? US(a) : S1(At, a), Me.childLanes = C1(e, a), t.memoizedState = AS, Pe;
        } else {
          var Tt = i.children, z = b1(e, t, Tt, a);
          return t.memoizedState = null, z;
        }
      }
    }
    function jS(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = FS(o, i);
      return s.return = e, e.child = s, s;
    }
    function x1(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (o & Et) === je && s !== null ? (p = s, p.childLanes = G, p.pendingProps = f, e.mode & kt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Wu(a, o, i, null)) : (p = FS(f, o), v = Wu(a, o, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function FS(e, t, a) {
      return $x(e, t, G, null);
    }
    function $C(e, t) {
      return fc(e, t);
    }
    function b1(e, t, a, i) {
      var o = e.child, s = o.sibling, f = $C(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Et) === je && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ta) : p.push(s);
      }
      return t.child = f, f;
    }
    function w1(e, t, a, i, o) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, S;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Et) === je && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var C = t.child;
        S = C, S.childLanes = G, S.pendingProps = v, t.mode & kt && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = f.selfBaseDuration, S.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        S = $C(f, v), S.subtreeFlags = f.subtreeFlags & Vn;
      var D;
      return p !== null ? D = fc(p, i) : (D = Wu(i, s, o, null), D.flags |= wn), D.return = t, S.return = t, S.sibling = D, t.child = S, D;
    }
    function Hm(e, t, a, i) {
      i !== null && gg(i), Hf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = jS(t, s);
      return f.flags |= wn, t.memoizedState = null, f;
    }
    function R1(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = FS(f, s), v = Wu(i, s, o, null);
      return v.flags |= wn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Et) !== je && Hf(t, e.child, null, o), v;
    }
    function T1(e, t, a) {
      return (e.mode & Et) === je ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ye) : ng(t) ? e.lanes = rr : e.lanes = ia, null;
    }
    function _1(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & gn) {
          t.flags &= ~gn;
          var z = wS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Hm(e, t, f, z);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= mt, null;
          var Y = i.children, A = i.fallback, le = R1(e, t, Y, A, f), Te = t.child;
          return Te.memoizedState = US(f), t.memoizedState = AS, le;
        }
      else {
        if (vT(), (t.mode & Et) === je)
          return Hm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (ng(o)) {
          var p, v, S;
          {
            var C = NR(o);
            p = C.digest, v = C.message, S = C.stack;
          }
          var D;
          v ? D = new Error(v) : D = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = wS(D, p, S);
          return Hm(e, t, f, _);
        }
        var F = oa(f, e.childLanes);
        if (il || F) {
          var V = Km();
          if (V !== null) {
            var I = sf(V, f);
            if (I !== Pn && I !== s.retryLane) {
              s.retryLane = I;
              var ge = qt;
              Ya(e, I), br(V, e, I, ge);
            }
          }
          i0();
          var Pe = wS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Hm(e, t, f, Pe);
        } else if (dE(o)) {
          t.flags |= mt, t.child = e.child;
          var Me = J_.bind(null, e);
          return LR(o, Me), null;
        } else {
          yT(t, o, s.treeContext);
          var At = i.children, Tt = jS(t, At);
          return Tt.flags |= Rn, Tt;
        }
      }
    }
    function IC(e, t, a) {
      e.lanes = st(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = st(i.lanes, t)), kg(e.return, t, a);
    }
    function k1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ne) {
          var o = i.memoizedState;
          o !== null && IC(i, a, e);
        } else if (i.tag === Be)
          IC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function D1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && ym(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function O1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !NS[e])
        if (NS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function N1(e, t) {
      e !== void 0 && !Fm[e] && (e !== "collapsed" && e !== "hidden" ? (Fm[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Fm[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function YC(e, t) {
      {
        var a = ut(e), i = !a && typeof yn(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function L1(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ut(e)) {
          for (var a = 0; a < e.length; a++)
            if (!YC(e[a], a))
              return;
        } else {
          var i = yn(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!YC(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function HS(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function WC(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      O1(o), N1(s, o), L1(f, o), Ta(e, t, f, a);
      var p = nl.current, v = jg(p, Lp);
      if (v)
        p = Fg(p, Lp), t.flags |= mt;
      else {
        var S = e !== null && (e.flags & mt) !== Ue;
        S && k1(t, t.child, a), p = $f(p);
      }
      if (Fu(t, p), (t.mode & Et) === je)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var C = D1(t.child), D;
            C === null ? (D = t.child, t.child = null) : (D = C.sibling, C.sibling = null), HS(
              t,
              !1,
              // isBackwards
              D,
              C,
              s
            );
            break;
          }
          case "backwards": {
            var _ = null, F = t.child;
            for (t.child = null; F !== null; ) {
              var V = F.alternate;
              if (V !== null && ym(V) === null) {
                t.child = F;
                break;
              }
              var I = F.sibling;
              F.sibling = _, _ = F, F = I;
            }
            HS(
              t,
              !0,
              // isBackwards
              _,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            HS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function M1(e, t, a) {
      zg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Hf(t, null, i, a) : Ta(e, t, i, a), t.child;
    }
    var GC = !1;
    function z1(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || GC || (GC = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Zi(v, s, "prop", "Context.Provider");
      }
      if (HE(t, o, p), f !== null) {
        var S = f.value;
        if (Ee(S, p)) {
          if (f.children === s.children && !Qh())
            return jo(e, t, a);
        } else
          OT(t, o, a);
      }
      var C = s.children;
      return Ta(e, t, C, a), t.child;
    }
    var QC = !1;
    function A1(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (QC || (QC = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Pf(t, a);
      var f = lr(i);
      Ha(t);
      var p;
      return Pp.current = t, Ma(!0), p = s(f), Ma(!1), wl(), t.flags |= Qi, Ta(e, t, p, a), t.child;
    }
    function Ip() {
      il = !0;
    }
    function Vm(e, t) {
      (t.mode & Et) === je && e !== null && (e.alternate = null, t.alternate = null, t.flags |= wn);
    }
    function jo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), bC(), nv(t.lanes), oa(a, t.childLanes) ? (kT(e, t), t.child) : null;
    }
    function U1(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= ta) : s.push(e), a.flags |= wn, a;
      }
    }
    function VS(e, t) {
      var a = e.lanes;
      return !!oa(a, t);
    }
    function j1(e, t, a) {
      switch (t.tag) {
        case W:
          VC(t), t.stateNode, Ff();
          break;
        case X:
          GE(t);
          break;
        case te: {
          var i = t.type;
          Hl(i) && Kh(t);
          break;
        }
        case ye:
          zg(t, t.stateNode.containerInfo);
          break;
        case We: {
          var o = t.memoizedProps.value, s = t.type._context;
          HE(t, s, o);
          break;
        }
        case Rt:
          {
            var f = oa(a, t.childLanes);
            f && (t.flags |= bt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ne: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Fu(t, $f(nl.current)), t.flags |= mt, null;
            var S = t.child, C = S.childLanes;
            if (oa(a, C))
              return BC(e, t, a);
            Fu(t, $f(nl.current));
            var D = jo(e, t, a);
            return D !== null ? D.sibling : null;
          } else
            Fu(t, $f(nl.current));
          break;
        }
        case Be: {
          var _ = (e.flags & mt) !== Ue, F = oa(a, t.childLanes);
          if (_) {
            if (F)
              return WC(e, t, a);
            t.flags |= mt;
          }
          var V = t.memoizedState;
          if (V !== null && (V.rendering = null, V.tail = null, V.lastEffect = null), Fu(t, nl.current), F)
            break;
          return null;
        }
        case Ae:
        case Ut:
          return t.lanes = G, jC(e, t, a);
      }
      return jo(e, t, a);
    }
    function qC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return U1(e, t, m0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || Qh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          il = !0;
        else {
          var s = VS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & mt) === Ue)
            return il = !1, j1(e, t, a);
          (e.flags & ai) !== Ue ? il = !0 : il = !1;
        }
      } else if (il = !1, Pr() && uT(t)) {
        var f = t.index, p = sT();
        bE(t, p, f);
      }
      switch (t.lanes = G, t.tag) {
        case oe:
          return g1(e, t, t.type, a);
        case cn: {
          var v = t.elementType;
          return m1(e, t, v, a);
        }
        case Z: {
          var S = t.type, C = t.pendingProps, D = t.elementType === S ? C : al(S, C);
          return LS(e, t, S, D, a);
        }
        case te: {
          var _ = t.type, F = t.pendingProps, V = t.elementType === _ ? F : al(_, F);
          return HC(e, t, _, V, a);
        }
        case W:
          return p1(e, t, a);
        case X:
          return v1(e, t, a);
        case ee:
          return h1(e, t);
        case Ne:
          return BC(e, t, a);
        case ye:
          return M1(e, t, a);
        case ze: {
          var I = t.type, ge = t.pendingProps, Pe = t.elementType === I ? ge : al(I, ge);
          return zC(e, t, I, Pe, a);
        }
        case de:
          return c1(e, t, a);
        case nt:
          return f1(e, t, a);
        case Rt:
          return d1(e, t, a);
        case We:
          return z1(e, t, a);
        case qe:
          return A1(e, t, a);
        case dt: {
          var Me = t.type, At = t.pendingProps, Tt = al(Me, At);
          if (t.type !== t.elementType) {
            var z = Me.propTypes;
            z && Zi(
              z,
              Tt,
              // Resolved for outer only
              "prop",
              Mt(Me)
            );
          }
          return Tt = al(Me.type, Tt), AC(e, t, Me, Tt, a);
        }
        case Ie:
          return UC(e, t, t.type, t.pendingProps, a);
        case Ot: {
          var Y = t.type, A = t.pendingProps, le = t.elementType === Y ? A : al(Y, A);
          return y1(e, t, Y, le, a);
        }
        case Be:
          return WC(e, t, a);
        case gt:
          break;
        case Ae:
          return jC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function qf(e) {
      e.flags |= bt;
    }
    function KC(e) {
      e.flags |= Hn, e.flags |= gs;
    }
    var XC, PS, JC, ZC;
    XC = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === X || o.tag === ee)
          iR(e, o.stateNode);
        else if (o.tag !== ye) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, PS = function(e, t) {
    }, JC = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Ag(), v = oR(f, a, s, i, o, p);
        t.updateQueue = v, v && qf(t);
      }
    }, ZC = function(e, t, a, i) {
      a !== i && qf(t);
    };
    function Yp(e, t) {
      if (!Pr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, s = null; o !== null; )
              o.alternate !== null && (s = o), o = o.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function $r(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = G, i = Ue;
      if (t) {
        if ((e.mode & kt) !== je) {
          for (var v = e.selfBaseDuration, S = e.child; S !== null; )
            a = st(a, st(S.lanes, S.childLanes)), i |= S.subtreeFlags & Vn, i |= S.flags & Vn, v += S.treeBaseDuration, S = S.sibling;
          e.treeBaseDuration = v;
        } else
          for (var C = e.child; C !== null; )
            a = st(a, st(C.lanes, C.childLanes)), i |= C.subtreeFlags & Vn, i |= C.flags & Vn, C.return = e, C = C.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & kt) !== je) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = st(a, st(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, o += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = st(a, st(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function F1(e, t, a) {
      if (xT() && (t.mode & Et) !== je && (t.flags & mt) === Ue)
        return OE(t), Ff(), t.flags |= gn | co | Dr, !1;
      var i = tm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (ET(t), $r(t), (t.mode & kt) !== je) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Ff(), (t.flags & mt) === Ue && (t.memoizedState = null), t.flags |= bt, $r(t), (t.mode & kt) !== je) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return NE(), !0;
    }
    function ex(e, t, a) {
      var i = t.pendingProps;
      switch (pg(t), t.tag) {
        case oe:
        case cn:
        case Ie:
        case Z:
        case ze:
        case de:
        case nt:
        case Rt:
        case qe:
        case dt:
          return $r(t), null;
        case te: {
          var o = t.type;
          return Hl(o) && qh(t), $r(t), null;
        }
        case W: {
          var s = t.stateNode;
          if (Bf(t), sg(t), Vg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = tm(t);
            if (f)
              qf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & gn) !== Ue) && (t.flags |= Fa, NE());
            }
          }
          return PS(e, t), $r(t), null;
        }
        case X: {
          Ug(t);
          var v = WE(), S = t.type;
          if (e !== null && t.stateNode != null)
            JC(e, t, S, i, v), e.ref !== t.ref && KC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return $r(t), null;
            }
            var C = Ag(), D = tm(t);
            if (D)
              gT(t, v, C) && qf(t);
            else {
              var _ = aR(S, i, v, C, t);
              XC(_, t, !1, !1), t.stateNode = _, lR(_, S, i, v) && qf(t);
            }
            t.ref !== null && KC(t);
          }
          return $r(t), null;
        }
        case ee: {
          var F = i;
          if (e && t.stateNode != null) {
            var V = e.memoizedProps;
            ZC(e, t, V, F);
          } else {
            if (typeof F != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var I = WE(), ge = Ag(), Pe = tm(t);
            Pe ? ST(t) && qf(t) : t.stateNode = uR(F, I, ge, t);
          }
          return $r(t), null;
        }
        case Ne: {
          If(t);
          var Me = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var At = F1(e, t, Me);
            if (!At)
              return t.flags & Dr ? t : null;
          }
          if ((t.flags & mt) !== Ue)
            return t.lanes = a, (t.mode & kt) !== je && fS(t), t;
          var Tt = Me !== null, z = e !== null && e.memoizedState !== null;
          if (Tt !== z && Tt) {
            var Y = t.child;
            if (Y.flags |= Ci, (t.mode & Et) !== je) {
              var A = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              A || jg(nl.current, qE) ? H_() : i0();
            }
          }
          var le = t.updateQueue;
          if (le !== null && (t.flags |= bt), $r(t), (t.mode & kt) !== je && Tt) {
            var Te = t.child;
            Te !== null && (t.treeBaseDuration -= Te.treeBaseDuration);
          }
          return null;
        }
        case ye:
          return Bf(t), PS(e, t), e === null && tT(t.stateNode.containerInfo), $r(t), null;
        case We:
          var Ce = t.type._context;
          return _g(Ce, t), $r(t), null;
        case Ot: {
          var Qe = t.type;
          return Hl(Qe) && qh(t), $r(t), null;
        }
        case Be: {
          If(t);
          var at = t.memoizedState;
          if (at === null)
            return $r(t), null;
          var rn = (t.flags & mt) !== Ue, Ft = at.rendering;
          if (Ft === null)
            if (rn)
              Yp(at, !1);
            else {
              var Kn = P_() && (e === null || (e.flags & mt) === Ue);
              if (!Kn)
                for (var Ht = t.child; Ht !== null; ) {
                  var $n = ym(Ht);
                  if ($n !== null) {
                    rn = !0, t.flags |= mt, Yp(at, !1);
                    var pa = $n.updateQueue;
                    return pa !== null && (t.updateQueue = pa, t.flags |= bt), t.subtreeFlags = Ue, DT(t, a), Fu(t, Fg(nl.current, Lp)), t.child;
                  }
                  Ht = Ht.sibling;
                }
              at.tail !== null && Dn() > Cx() && (t.flags |= mt, rn = !0, Yp(at, !1), t.lanes = Zv);
            }
          else {
            if (!rn) {
              var Qr = ym(Ft);
              if (Qr !== null) {
                t.flags |= mt, rn = !0;
                var fi = Qr.updateQueue;
                if (fi !== null && (t.updateQueue = fi, t.flags |= bt), Yp(at, !0), at.tail === null && at.tailMode === "hidden" && !Ft.alternate && !Pr())
                  return $r(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Dn() * 2 - at.renderingStartTime > Cx() && a !== ia && (t.flags |= mt, rn = !0, Yp(at, !1), t.lanes = Zv);
            }
            if (at.isBackwards)
              Ft.sibling = t.child, t.child = Ft;
            else {
              var Da = at.last;
              Da !== null ? Da.sibling = Ft : t.child = Ft, at.last = Ft;
            }
          }
          if (at.tail !== null) {
            var Oa = at.tail;
            at.rendering = Oa, at.tail = Oa.sibling, at.renderingStartTime = Dn(), Oa.sibling = null;
            var va = nl.current;
            return rn ? va = Fg(va, Lp) : va = $f(va), Fu(t, va), Oa;
          }
          return $r(t), null;
        }
        case gt:
          break;
        case Ae:
        case Ut: {
          a0(t);
          var Bo = t.memoizedState, rd = Bo !== null;
          if (e !== null) {
            var ov = e.memoizedState, Gl = ov !== null;
            Gl !== rd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !O && (t.flags |= Ci);
          }
          return !rd || (t.mode & Et) === je ? $r(t) : oa(Wl, ia) && ($r(t), t.subtreeFlags & (wn | bt) && (t.flags |= Ci)), null;
        }
        case ct:
          return null;
        case ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function H1(e, t, a) {
      switch (pg(t), t.tag) {
        case te: {
          var i = t.type;
          Hl(i) && qh(t);
          var o = t.flags;
          return o & Dr ? (t.flags = o & ~Dr | mt, (t.mode & kt) !== je && fS(t), t) : null;
        }
        case W: {
          t.stateNode, Bf(t), sg(t), Vg();
          var s = t.flags;
          return (s & Dr) !== Ue && (s & mt) === Ue ? (t.flags = s & ~Dr | mt, t) : null;
        }
        case X:
          return Ug(t), null;
        case Ne: {
          If(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Ff();
          }
          var p = t.flags;
          return p & Dr ? (t.flags = p & ~Dr | mt, (t.mode & kt) !== je && fS(t), t) : null;
        }
        case Be:
          return If(t), null;
        case ye:
          return Bf(t), null;
        case We:
          var v = t.type._context;
          return _g(v, t), null;
        case Ae:
        case Ut:
          return a0(t), null;
        case ct:
          return null;
        default:
          return null;
      }
    }
    function tx(e, t, a) {
      switch (pg(t), t.tag) {
        case te: {
          var i = t.type.childContextTypes;
          i != null && qh(t);
          break;
        }
        case W: {
          t.stateNode, Bf(t), sg(t), Vg();
          break;
        }
        case X: {
          Ug(t);
          break;
        }
        case ye:
          Bf(t);
          break;
        case Ne:
          If(t);
          break;
        case Be:
          If(t);
          break;
        case We:
          var o = t.type._context;
          _g(o, t);
          break;
        case Ae:
        case Ut:
          a0(t);
          break;
      }
    }
    var nx = null;
    nx = /* @__PURE__ */ new Set();
    var Pm = !1, Ir = !1, V1 = typeof WeakSet == "function" ? WeakSet : Set, Oe = null, Kf = null, Xf = null;
    function P1(e) {
      ja(null, function() {
        throw e;
      }), xd();
    }
    var B1 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & kt)
        try {
          Il(), t.componentWillUnmount();
        } finally {
          $l(e);
        }
      else
        t.componentWillUnmount();
    };
    function rx(e, t) {
      try {
        Pu(yr, e);
      } catch (a) {
        mn(e, t, a);
      }
    }
    function BS(e, t, a) {
      try {
        B1(e, a);
      } catch (i) {
        mn(e, t, i);
      }
    }
    function $1(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        mn(e, t, i);
      }
    }
    function ax(e, t) {
      try {
        lx(e);
      } catch (a) {
        mn(e, t, a);
      }
    }
    function Jf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ze && ht && e.mode & kt)
              try {
                Il(), i = a(null);
              } finally {
                $l(e);
              }
            else
              i = a(null);
          } catch (o) {
            mn(e, t, o);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          a.current = null;
    }
    function Bm(e, t, a) {
      try {
        a();
      } catch (i) {
        mn(e, t, i);
      }
    }
    var ix = !1;
    function I1(e, t) {
      nR(e.containerInfo), Oe = t, Y1();
      var a = ix;
      return ix = !1, a;
    }
    function Y1() {
      for (; Oe !== null; ) {
        var e = Oe, t = e.child;
        (e.subtreeFlags & Cl) !== Ue && t !== null ? (t.return = e, Oe = t) : W1();
      }
    }
    function W1() {
      for (; Oe !== null; ) {
        var e = Oe;
        Jt(e);
        try {
          G1(e);
        } catch (a) {
          mn(e, e.return, a);
        }
        bn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Oe = t;
          return;
        }
        Oe = e.return;
      }
    }
    function G1(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Fa) !== Ue) {
        switch (Jt(e), e.tag) {
          case Z:
          case ze:
          case Ie:
            break;
          case te: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !lc && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : al(e.type, i), o);
              {
                var p = nx;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Xe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case W: {
            {
              var v = e.stateNode;
              _R(v.containerInfo);
            }
            break;
          }
          case X:
          case ee:
          case ye:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        bn();
      }
    }
    function ll(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Br) !== Wa ? Rl(t) : (e & yr) !== Wa && zd(t), (e & Vl) !== Wa && av(!0), Bm(t, a, p), (e & Vl) !== Wa && av(!1), (e & Br) !== Wa ? Ac() : (e & yr) !== Wa && pu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Pu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Br) !== Wa ? Xv(t) : (e & yr) !== Wa && Jv(t);
            var f = s.create;
            (e & Vl) !== Wa && av(!0), s.destroy = f(), (e & Vl) !== Wa && av(!1), (e & Br) !== Wa ? Ki() : (e & yr) !== Wa && Uc();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & yr) !== Ue ? v = "useLayoutEffect" : (s.tag & Vl) !== Ue ? v = "useInsertionEffect" : v = "useEffect";
                var S = void 0;
                p === null ? S = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? S = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : S = " You returned: " + p, y("%s must not return anything besides a function, which is used for clean-up.%s", v, S);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function Q1(e, t) {
      if ((t.flags & bt) !== Ue)
        switch (t.tag) {
          case Rt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = CC(), p = t.alternate === null ? "mount" : "update";
            EC() && (p = "nested-update"), typeof s == "function" && s(o, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case W:
                  var S = v.stateNode;
                  S.passiveEffectDuration += a;
                  break e;
                case Rt:
                  var C = v.stateNode;
                  C.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function q1(e, t, a, i) {
      if ((a.flags & xl) !== Ue)
        switch (a.tag) {
          case Z:
          case ze:
          case Ie: {
            if (!Ir)
              if (a.mode & kt)
                try {
                  Il(), Pu(yr | mr, a);
                } finally {
                  $l(a);
                }
              else
                Pu(yr | mr, a);
            break;
          }
          case te: {
            var o = a.stateNode;
            if (a.flags & bt && !Ir)
              if (t === null)
                if (a.type === a.elementType && !lc && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & kt)
                  try {
                    Il(), o.componentDidMount();
                  } finally {
                    $l(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : al(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !lc && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & kt)
                  try {
                    Il(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    $l(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !lc && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), YE(a, p, o));
            break;
          }
          case W: {
            var v = a.updateQueue;
            if (v !== null) {
              var S = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case X:
                    S = a.child.stateNode;
                    break;
                  case te:
                    S = a.child.stateNode;
                    break;
                }
              YE(a, v, S);
            }
            break;
          }
          case X: {
            var C = a.stateNode;
            if (t === null && a.flags & bt) {
              var D = a.type, _ = a.memoizedProps;
              pR(C, D, _);
            }
            break;
          }
          case ee:
            break;
          case ye:
            break;
          case Rt: {
            {
              var F = a.memoizedProps, V = F.onCommit, I = F.onRender, ge = a.stateNode.effectDuration, Pe = CC(), Me = t === null ? "mount" : "update";
              EC() && (Me = "nested-update"), typeof I == "function" && I(a.memoizedProps.id, Me, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Pe);
              {
                typeof V == "function" && V(a.memoizedProps.id, Me, ge, Pe), W_(a);
                var At = a.return;
                e: for (; At !== null; ) {
                  switch (At.tag) {
                    case W:
                      var Tt = At.stateNode;
                      Tt.effectDuration += ge;
                      break e;
                    case Rt:
                      var z = At.stateNode;
                      z.effectDuration += ge;
                      break e;
                  }
                  At = At.return;
                }
              }
            }
            break;
          }
          case Ne: {
            r_(e, a);
            break;
          }
          case Be:
          case Ot:
          case gt:
          case Ae:
          case Ut:
          case ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ir || a.flags & Hn && lx(a);
    }
    function K1(e) {
      switch (e.tag) {
        case Z:
        case ze:
        case Ie: {
          if (e.mode & kt)
            try {
              Il(), rx(e, e.return);
            } finally {
              $l(e);
            }
          else
            rx(e, e.return);
          break;
        }
        case te: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && $1(e, e.return, t), ax(e, e.return);
          break;
        }
        case X: {
          ax(e, e.return);
          break;
        }
      }
    }
    function X1(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === X) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? bR(o) : RR(i.stateNode, i.memoizedProps);
            } catch (f) {
              mn(e, e.return, f);
            }
          }
        } else if (i.tag === ee) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? wR(s) : TR(s, i.memoizedProps);
            } catch (f) {
              mn(e, e.return, f);
            }
        } else if (!((i.tag === Ae || i.tag === Ut) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function lx(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case X:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & kt)
            try {
              Il(), o = t(i);
            } finally {
              $l(e);
            }
          else
            o = t(i);
          typeof o == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Xe(e)), t.current = i;
      }
    }
    function J1(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function ox(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, ox(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === X) {
          var a = e.stateNode;
          a !== null && aT(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Z1(e) {
      for (var t = e.return; t !== null; ) {
        if (ux(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ux(e) {
      return e.tag === X || e.tag === W || e.tag === ye;
    }
    function sx(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || ux(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== X && t.tag !== ee && t.tag !== Kt; ) {
          if (t.flags & wn || t.child === null || t.tag === ye)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & wn))
          return t.stateNode;
      }
    }
    function e_(e) {
      var t = Z1(e);
      switch (t.tag) {
        case X: {
          var a = t.stateNode;
          t.flags & Gt && (fE(a), t.flags &= ~Gt);
          var i = sx(e);
          IS(e, i, a);
          break;
        }
        case W:
        case ye: {
          var o = t.stateNode.containerInfo, s = sx(e);
          $S(e, s, o);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function $S(e, t, a) {
      var i = e.tag, o = i === X || i === ee;
      if (o) {
        var s = e.stateNode;
        t ? SR(a, s, t) : yR(a, s);
      } else if (i !== ye) {
        var f = e.child;
        if (f !== null) {
          $S(f, t, a);
          for (var p = f.sibling; p !== null; )
            $S(p, t, a), p = p.sibling;
        }
      }
    }
    function IS(e, t, a) {
      var i = e.tag, o = i === X || i === ee;
      if (o) {
        var s = e.stateNode;
        t ? gR(a, s, t) : mR(a, s);
      } else if (i !== ye) {
        var f = e.child;
        if (f !== null) {
          IS(f, t, a);
          for (var p = f.sibling; p !== null; )
            IS(p, t, a), p = p.sibling;
        }
      }
    }
    var Yr = null, ol = !1;
    function t_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case X: {
              Yr = i.stateNode, ol = !1;
              break e;
            }
            case W: {
              Yr = i.stateNode.containerInfo, ol = !0;
              break e;
            }
            case ye: {
              Yr = i.stateNode.containerInfo, ol = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Yr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        cx(e, t, a), Yr = null, ol = !1;
      }
      J1(a);
    }
    function Bu(e, t, a) {
      for (var i = a.child; i !== null; )
        cx(e, t, i), i = i.sibling;
    }
    function cx(e, t, a) {
      switch (du(a), a.tag) {
        case X:
          Ir || Jf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case ee: {
          {
            var i = Yr, o = ol;
            Yr = null, Bu(e, t, a), Yr = i, ol = o, Yr !== null && (ol ? CR(Yr, a.stateNode) : ER(Yr, a.stateNode));
          }
          return;
        }
        case Kt: {
          Yr !== null && (ol ? xR(Yr, a.stateNode) : tg(Yr, a.stateNode));
          return;
        }
        case ye: {
          {
            var s = Yr, f = ol;
            Yr = a.stateNode.containerInfo, ol = !0, Bu(e, t, a), Yr = s, ol = f;
          }
          return;
        }
        case Z:
        case ze:
        case dt:
        case Ie: {
          if (!Ir) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var S = v.next, C = S;
                do {
                  var D = C, _ = D.destroy, F = D.tag;
                  _ !== void 0 && ((F & Vl) !== Wa ? Bm(a, t, _) : (F & yr) !== Wa && (zd(a), a.mode & kt ? (Il(), Bm(a, t, _), $l(a)) : Bm(a, t, _), pu())), C = C.next;
                } while (C !== S);
              }
            }
          }
          Bu(e, t, a);
          return;
        }
        case te: {
          if (!Ir) {
            Jf(a, t);
            var V = a.stateNode;
            typeof V.componentWillUnmount == "function" && BS(a, t, V);
          }
          Bu(e, t, a);
          return;
        }
        case gt: {
          Bu(e, t, a);
          return;
        }
        case Ae: {
          if (
            // TODO: Remove this dead flag
            a.mode & Et
          ) {
            var I = Ir;
            Ir = I || a.memoizedState !== null, Bu(e, t, a), Ir = I;
          } else
            Bu(e, t, a);
          break;
        }
        default: {
          Bu(e, t, a);
          return;
        }
      }
    }
    function n_(e) {
      e.memoizedState;
    }
    function r_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && PR(s);
          }
        }
      }
    }
    function fx(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new V1()), t.forEach(function(i) {
          var o = Z_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Or)
              if (Kf !== null && Xf !== null)
                rv(Xf, Kf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function a_(e, t, a) {
      Kf = a, Xf = e, Jt(t), dx(t, e), Jt(t), Kf = null, Xf = null;
    }
    function ul(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            t_(e, t, s);
          } catch (v) {
            mn(s, t, v);
          }
        }
      var f = ei();
      if (t.subtreeFlags & cu)
        for (var p = t.child; p !== null; )
          Jt(p), dx(p, e), p = p.sibling;
      Jt(f);
    }
    function dx(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case Z:
        case ze:
        case dt:
        case Ie: {
          if (ul(t, e), Yl(e), o & bt) {
            try {
              ll(Vl | mr, e, e.return), Pu(Vl | mr, e);
            } catch (Qe) {
              mn(e, e.return, Qe);
            }
            if (e.mode & kt) {
              try {
                Il(), ll(yr | mr, e, e.return);
              } catch (Qe) {
                mn(e, e.return, Qe);
              }
              $l(e);
            } else
              try {
                ll(yr | mr, e, e.return);
              } catch (Qe) {
                mn(e, e.return, Qe);
              }
          }
          return;
        }
        case te: {
          ul(t, e), Yl(e), o & Hn && i !== null && Jf(i, i.return);
          return;
        }
        case X: {
          ul(t, e), Yl(e), o & Hn && i !== null && Jf(i, i.return);
          {
            if (e.flags & Gt) {
              var s = e.stateNode;
              try {
                fE(s);
              } catch (Qe) {
                mn(e, e.return, Qe);
              }
            }
            if (o & bt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, S = e.type, C = e.updateQueue;
                if (e.updateQueue = null, C !== null)
                  try {
                    vR(f, C, S, v, p, e);
                  } catch (Qe) {
                    mn(e, e.return, Qe);
                  }
              }
            }
          }
          return;
        }
        case ee: {
          if (ul(t, e), Yl(e), o & bt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var D = e.stateNode, _ = e.memoizedProps, F = i !== null ? i.memoizedProps : _;
            try {
              hR(D, F, _);
            } catch (Qe) {
              mn(e, e.return, Qe);
            }
          }
          return;
        }
        case W: {
          if (ul(t, e), Yl(e), o & bt && i !== null) {
            var V = i.memoizedState;
            if (V.isDehydrated)
              try {
                VR(t.containerInfo);
              } catch (Qe) {
                mn(e, e.return, Qe);
              }
          }
          return;
        }
        case ye: {
          ul(t, e), Yl(e);
          return;
        }
        case Ne: {
          ul(t, e), Yl(e);
          var I = e.child;
          if (I.flags & Ci) {
            var ge = I.stateNode, Pe = I.memoizedState, Me = Pe !== null;
            if (ge.isHidden = Me, Me) {
              var At = I.alternate !== null && I.alternate.memoizedState !== null;
              At || F_();
            }
          }
          if (o & bt) {
            try {
              n_(e);
            } catch (Qe) {
              mn(e, e.return, Qe);
            }
            fx(e);
          }
          return;
        }
        case Ae: {
          var Tt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Et
          ) {
            var z = Ir;
            Ir = z || Tt, ul(t, e), Ir = z;
          } else
            ul(t, e);
          if (Yl(e), o & Ci) {
            var Y = e.stateNode, A = e.memoizedState, le = A !== null, Te = e;
            if (Y.isHidden = le, le && !Tt && (Te.mode & Et) !== je) {
              Oe = Te;
              for (var Ce = Te.child; Ce !== null; )
                Oe = Ce, l_(Ce), Ce = Ce.sibling;
            }
            X1(Te, le);
          }
          return;
        }
        case Be: {
          ul(t, e), Yl(e), o & bt && fx(e);
          return;
        }
        case gt:
          return;
        default: {
          ul(t, e), Yl(e);
          return;
        }
      }
    }
    function Yl(e) {
      var t = e.flags;
      if (t & wn) {
        try {
          e_(e);
        } catch (a) {
          mn(e, e.return, a);
        }
        e.flags &= ~wn;
      }
      t & Rn && (e.flags &= ~Rn);
    }
    function i_(e, t, a) {
      Kf = a, Xf = t, Oe = e, px(e, t, a), Kf = null, Xf = null;
    }
    function px(e, t, a) {
      for (var i = (e.mode & Et) !== je; Oe !== null; ) {
        var o = Oe, s = o.child;
        if (o.tag === Ae && i) {
          var f = o.memoizedState !== null, p = f || Pm;
          if (p) {
            YS(e, t, a);
            continue;
          } else {
            var v = o.alternate, S = v !== null && v.memoizedState !== null, C = S || Ir, D = Pm, _ = Ir;
            Pm = p, Ir = C, Ir && !_ && (Oe = o, o_(o));
            for (var F = s; F !== null; )
              Oe = F, px(
                F,
                // New root; bubble back up to here and stop.
                t,
                a
              ), F = F.sibling;
            Oe = o, Pm = D, Ir = _, YS(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & xl) !== Ue && s !== null ? (s.return = o, Oe = s) : YS(e, t, a);
      }
    }
    function YS(e, t, a) {
      for (; Oe !== null; ) {
        var i = Oe;
        if ((i.flags & xl) !== Ue) {
          var o = i.alternate;
          Jt(i);
          try {
            q1(t, o, i, a);
          } catch (f) {
            mn(i, i.return, f);
          }
          bn();
        }
        if (i === e) {
          Oe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Oe = s;
          return;
        }
        Oe = i.return;
      }
    }
    function l_(e) {
      for (; Oe !== null; ) {
        var t = Oe, a = t.child;
        switch (t.tag) {
          case Z:
          case ze:
          case dt:
          case Ie: {
            if (t.mode & kt)
              try {
                Il(), ll(yr, t, t.return);
              } finally {
                $l(t);
              }
            else
              ll(yr, t, t.return);
            break;
          }
          case te: {
            Jf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && BS(t, t.return, i);
            break;
          }
          case X: {
            Jf(t, t.return);
            break;
          }
          case Ae: {
            var o = t.memoizedState !== null;
            if (o) {
              vx(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Oe = a) : vx(e);
      }
    }
    function vx(e) {
      for (; Oe !== null; ) {
        var t = Oe;
        if (t === e) {
          Oe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Oe = a;
          return;
        }
        Oe = t.return;
      }
    }
    function o_(e) {
      for (; Oe !== null; ) {
        var t = Oe, a = t.child;
        if (t.tag === Ae) {
          var i = t.memoizedState !== null;
          if (i) {
            hx(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Oe = a) : hx(e);
      }
    }
    function hx(e) {
      for (; Oe !== null; ) {
        var t = Oe;
        Jt(t);
        try {
          K1(t);
        } catch (i) {
          mn(t, t.return, i);
        }
        if (bn(), t === e) {
          Oe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Oe = a;
          return;
        }
        Oe = t.return;
      }
    }
    function u_(e, t, a, i) {
      Oe = t, s_(t, e, a, i);
    }
    function s_(e, t, a, i) {
      for (; Oe !== null; ) {
        var o = Oe, s = o.child;
        (o.subtreeFlags & fr) !== Ue && s !== null ? (s.return = o, Oe = s) : c_(e, t, a, i);
      }
    }
    function c_(e, t, a, i) {
      for (; Oe !== null; ) {
        var o = Oe;
        if ((o.flags & Ea) !== Ue) {
          Jt(o);
          try {
            f_(t, o, a, i);
          } catch (f) {
            mn(o, o.return, f);
          }
          bn();
        }
        if (o === e) {
          Oe = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, Oe = s;
          return;
        }
        Oe = o.return;
      }
    }
    function f_(e, t, a, i) {
      switch (t.tag) {
        case Z:
        case ze:
        case Ie: {
          if (t.mode & kt) {
            cS();
            try {
              Pu(Br | mr, t);
            } finally {
              sS(t);
            }
          } else
            Pu(Br | mr, t);
          break;
        }
      }
    }
    function d_(e) {
      Oe = e, p_();
    }
    function p_() {
      for (; Oe !== null; ) {
        var e = Oe, t = e.child;
        if ((Oe.flags & ta) !== Ue) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              Oe = o, m_(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Oe = e;
          }
        }
        (e.subtreeFlags & fr) !== Ue && t !== null ? (t.return = e, Oe = t) : v_();
      }
    }
    function v_() {
      for (; Oe !== null; ) {
        var e = Oe;
        (e.flags & Ea) !== Ue && (Jt(e), h_(e), bn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Oe = t;
          return;
        }
        Oe = e.return;
      }
    }
    function h_(e) {
      switch (e.tag) {
        case Z:
        case ze:
        case Ie: {
          e.mode & kt ? (cS(), ll(Br | mr, e, e.return), sS(e)) : ll(Br | mr, e, e.return);
          break;
        }
      }
    }
    function m_(e, t) {
      for (; Oe !== null; ) {
        var a = Oe;
        Jt(a), g_(a, t), bn();
        var i = a.child;
        i !== null ? (i.return = a, Oe = i) : y_(e);
      }
    }
    function y_(e) {
      for (; Oe !== null; ) {
        var t = Oe, a = t.sibling, i = t.return;
        if (ox(t), t === e) {
          Oe = null;
          return;
        }
        if (a !== null) {
          a.return = i, Oe = a;
          return;
        }
        Oe = i;
      }
    }
    function g_(e, t) {
      switch (e.tag) {
        case Z:
        case ze:
        case Ie: {
          e.mode & kt ? (cS(), ll(Br, e, t), sS(e)) : ll(Br, e, t);
          break;
        }
      }
    }
    function S_(e) {
      switch (e.tag) {
        case Z:
        case ze:
        case Ie: {
          try {
            Pu(yr | mr, e);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case te: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
      }
    }
    function E_(e) {
      switch (e.tag) {
        case Z:
        case ze:
        case Ie: {
          try {
            Pu(Br | mr, e);
          } catch (t) {
            mn(e, e.return, t);
          }
          break;
        }
      }
    }
    function C_(e) {
      switch (e.tag) {
        case Z:
        case ze:
        case Ie: {
          try {
            ll(yr | mr, e, e.return);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case te: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && BS(e, e.return, t);
          break;
        }
      }
    }
    function x_(e) {
      switch (e.tag) {
        case Z:
        case ze:
        case Ie:
          try {
            ll(Br | mr, e, e.return);
          } catch (t) {
            mn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Wp = Symbol.for;
      Wp("selector.component"), Wp("selector.has_pseudo_class"), Wp("selector.role"), Wp("selector.test_id"), Wp("selector.text");
    }
    var b_ = [];
    function w_() {
      b_.forEach(function(e) {
        return e();
      });
    }
    var R_ = N.ReactCurrentActQueue;
    function T_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function mx() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && R_.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var __ = Math.ceil, WS = N.ReactCurrentDispatcher, GS = N.ReactCurrentOwner, Wr = N.ReactCurrentBatchConfig, sl = N.ReactCurrentActQueue, Er = (
      /*             */
      0
    ), yx = (
      /*               */
      1
    ), Gr = (
      /*                */
      2
    ), Li = (
      /*                */
      4
    ), Fo = 0, Gp = 1, oc = 2, $m = 3, Qp = 4, gx = 5, QS = 6, zt = Er, _a = null, Mn = null, Cr = G, Wl = G, qS = Lu(G), xr = Fo, qp = null, Im = G, Kp = G, Ym = G, Xp = null, Ga = null, KS = 0, Sx = 500, Ex = 1 / 0, k_ = 500, Ho = null;
    function Jp() {
      Ex = Dn() + k_;
    }
    function Cx() {
      return Ex;
    }
    var Wm = !1, XS = null, Zf = null, uc = !1, $u = null, Zp = G, JS = [], ZS = null, D_ = 50, ev = 0, e0 = null, t0 = !1, Gm = !1, O_ = 50, ed = 0, Qm = null, tv = qt, qm = G, xx = !1;
    function Km() {
      return _a;
    }
    function ka() {
      return (zt & (Gr | Li)) !== Er ? Dn() : (tv !== qt || (tv = Dn()), tv);
    }
    function Iu(e) {
      var t = e.mode;
      if ((t & Et) === je)
        return Ye;
      if ((zt & Gr) !== Er && Cr !== G)
        return ar(Cr);
      var a = RT() !== wT;
      if (a) {
        if (Wr.transition !== null) {
          var i = Wr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return qm === Pn && (qm = Id()), qm;
      }
      var o = xa();
      if (o !== Pn)
        return o;
      var s = sR();
      return s;
    }
    function N_(e) {
      var t = e.mode;
      return (t & Et) === je ? Ye : ih();
    }
    function br(e, t, a, i) {
      tk(), xx && y("useInsertionEffect must not schedule updates."), t0 && (Gm = !0), Su(e, a, i), (zt & Gr) !== G && e === _a ? ak(t) : (Or && oh(e, t, a), ik(t), e === _a && ((zt & Gr) === Er && (Kp = st(Kp, a)), xr === Qp && Yu(e, Cr)), Qa(e, i), a === Ye && zt === Er && (t.mode & Et) === je && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !sl.isBatchingLegacy && (Jp(), xE()));
    }
    function L_(e, t, a) {
      var i = e.current;
      i.lanes = t, Su(e, t, a), Qa(e, a);
    }
    function M_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (zt & Gr) !== Er
      );
    }
    function Qa(e, t) {
      var a = e.callbackNode;
      nh(e, t);
      var i = la(e, e === _a ? Cr : G);
      if (i === G) {
        a !== null && Fx(a), e.callbackNode = null, e.callbackPriority = Pn;
        return;
      }
      var o = So(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(sl.current !== null && a !== u0)) {
        a == null && s !== Ye && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Fx(a);
      var f;
      if (o === Ye)
        e.tag === Mu ? (sl.isBatchingLegacy !== null && (sl.didScheduleLegacyUpdate = !0), oT(Rx.bind(null, e))) : CE(Rx.bind(null, e)), sl.current !== null ? sl.current.push(zu) : fR(function() {
          (zt & (Gr | Li)) === Er && zu();
        }), f = null;
      else {
        var p;
        switch (sh(i)) {
          case ua:
            p = qi;
            break;
          case Va:
            p = Ss;
            break;
          case pr:
            p = po;
            break;
          case ff:
            p = fu;
            break;
          default:
            p = po;
            break;
        }
        f = s0(p, bx.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function bx(e, t) {
      if (XT(), tv = qt, qm = G, (zt & (Gr | Li)) !== Er)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Po();
      if (i && e.callbackNode !== a)
        return null;
      var o = la(e, e === _a ? Cr : G);
      if (o === G)
        return null;
      var s = !Ns(e, o) && !ah(e, o) && !t, f = s ? $_(e, o) : Jm(e, o);
      if (f !== Fo) {
        if (f === oc) {
          var p = nf(e);
          p !== G && (o = p, f = n0(e, p));
        }
        if (f === Gp) {
          var v = qp;
          throw sc(e, G), Yu(e, o), Qa(e, Dn()), v;
        }
        if (f === QS)
          Yu(e, o);
        else {
          var S = !Ns(e, o), C = e.current.alternate;
          if (S && !A_(C)) {
            if (f = Jm(e, o), f === oc) {
              var D = nf(e);
              D !== G && (o = D, f = n0(e, D));
            }
            if (f === Gp) {
              var _ = qp;
              throw sc(e, G), Yu(e, o), Qa(e, Dn()), _;
            }
          }
          e.finishedWork = C, e.finishedLanes = o, z_(e, f, o);
        }
      }
      return Qa(e, Dn()), e.callbackNode === a ? bx.bind(null, e) : null;
    }
    function n0(e, t) {
      var a = Xp;
      if (Co(e)) {
        var i = sc(e, t);
        i.flags |= gn, eT(e.containerInfo);
      }
      var o = Jm(e, t);
      if (o !== oc) {
        var s = Ga;
        Ga = a, s !== null && wx(s);
      }
      return o;
    }
    function wx(e) {
      Ga === null ? Ga = e : Ga.push.apply(Ga, e);
    }
    function z_(e, t, a) {
      switch (t) {
        case Fo:
        case Gp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case oc: {
          cc(e, Ga, Ho);
          break;
        }
        case $m: {
          if (Yu(e, a), rf(a) && // do not delay if we're inside an act() scope
          !Hx()) {
            var i = KS + Sx - Dn();
            if (i > 10) {
              var o = la(e, G);
              if (o !== G)
                break;
              var s = e.suspendedLanes;
              if (!Eo(s, a)) {
                ka(), uf(e, s);
                break;
              }
              e.timeoutHandle = Zy(cc.bind(null, e, Ga, Ho), i);
              break;
            }
          }
          cc(e, Ga, Ho);
          break;
        }
        case Qp: {
          if (Yu(e, a), wy(a))
            break;
          if (!Hx()) {
            var f = Vd(e, a), p = f, v = Dn() - p, S = ek(v) - v;
            if (S > 10) {
              e.timeoutHandle = Zy(cc.bind(null, e, Ga, Ho), S);
              break;
            }
          }
          cc(e, Ga, Ho);
          break;
        }
        case gx: {
          cc(e, Ga, Ho);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function A_(e) {
      for (var t = e; ; ) {
        if (t.flags & Mc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, p = s.value;
                try {
                  if (!Ee(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & Mc && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Yu(e, t) {
      t = Ls(t, Ym), t = Ls(t, Kp), Wd(e, t);
    }
    function Rx(e) {
      if (JT(), (zt & (Gr | Li)) !== Er)
        throw new Error("Should not already be working.");
      Po();
      var t = la(e, G);
      if (!oa(t, Ye))
        return Qa(e, Dn()), null;
      var a = Jm(e, t);
      if (e.tag !== Mu && a === oc) {
        var i = nf(e);
        i !== G && (t = i, a = n0(e, i));
      }
      if (a === Gp) {
        var o = qp;
        throw sc(e, G), Yu(e, t), Qa(e, Dn()), o;
      }
      if (a === QS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, cc(e, Ga, Ho), Qa(e, Dn()), null;
    }
    function U_(e, t) {
      t !== G && (Ms(e, st(t, Ye)), Qa(e, Dn()), (zt & (Gr | Li)) === Er && (Jp(), zu()));
    }
    function r0(e, t) {
      var a = zt;
      zt |= yx;
      try {
        return e(t);
      } finally {
        zt = a, zt === Er && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !sl.isBatchingLegacy && (Jp(), xE());
      }
    }
    function j_(e, t, a, i, o) {
      var s = xa(), f = Wr.transition;
      try {
        return Wr.transition = null, Gn(ua), e(t, a, i, o);
      } finally {
        Gn(s), Wr.transition = f, zt === Er && Jp();
      }
    }
    function Vo(e) {
      $u !== null && $u.tag === Mu && (zt & (Gr | Li)) === Er && Po();
      var t = zt;
      zt |= yx;
      var a = Wr.transition, i = xa();
      try {
        return Wr.transition = null, Gn(ua), e ? e() : void 0;
      } finally {
        Gn(i), Wr.transition = a, zt = t, (zt & (Gr | Li)) === Er && zu();
      }
    }
    function Tx() {
      return (zt & (Gr | Li)) !== Er;
    }
    function Xm(e, t) {
      fa(qS, Wl, e), Wl = st(Wl, t);
    }
    function a0(e) {
      Wl = qS.current, ca(qS, e);
    }
    function sc(e, t) {
      e.finishedWork = null, e.finishedLanes = G;
      var a = e.timeoutHandle;
      if (a !== eg && (e.timeoutHandle = eg, cR(a)), Mn !== null)
        for (var i = Mn.return; i !== null; ) {
          var o = i.alternate;
          tx(o, i), i = i.return;
        }
      _a = e;
      var s = fc(e.current, null);
      return Mn = s, Cr = Wl = t, xr = Fo, qp = null, Im = G, Kp = G, Ym = G, Xp = null, Ga = null, LT(), tl.discardPendingWarnings(), s;
    }
    function _x(e, t) {
      do {
        var a = Mn;
        try {
          if (om(), XE(), bn(), GS.current = null, a === null || a.return === null) {
            xr = Gp, qp = t, Mn = null;
            return;
          }
          if (Ze && a.mode & kt && Um(a, !0), Ke)
            if (wl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Cs(a, i, Cr);
            } else
              wi(a, t, Cr);
          o1(e, a.return, a, t, Cr), Nx(a);
        } catch (o) {
          t = o, Mn === a && a !== null ? (a = a.return, Mn = a) : a = Mn;
          continue;
        }
        return;
      } while (!0);
    }
    function kx() {
      var e = WS.current;
      return WS.current = Nm, e === null ? Nm : e;
    }
    function Dx(e) {
      WS.current = e;
    }
    function F_() {
      KS = Dn();
    }
    function nv(e) {
      Im = st(e, Im);
    }
    function H_() {
      xr === Fo && (xr = $m);
    }
    function i0() {
      (xr === Fo || xr === $m || xr === oc) && (xr = Qp), _a !== null && (Dl(Im) || Dl(Kp)) && Yu(_a, Cr);
    }
    function V_(e) {
      xr !== Qp && (xr = oc), Xp === null ? Xp = [e] : Xp.push(e);
    }
    function P_() {
      return xr === Fo;
    }
    function Jm(e, t) {
      var a = zt;
      zt |= Gr;
      var i = kx();
      if (_a !== e || Cr !== t) {
        if (Or) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (rv(e, Cr), o.clear()), Gd(e, t);
        }
        Ho = cf(), sc(e, t);
      }
      Ud(t);
      do
        try {
          B_();
          break;
        } catch (s) {
          _x(e, s);
        }
      while (!0);
      if (om(), zt = a, Dx(i), Mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Sn(), _a = null, Cr = G, xr;
    }
    function B_() {
      for (; Mn !== null; )
        Ox(Mn);
    }
    function $_(e, t) {
      var a = zt;
      zt |= Gr;
      var i = kx();
      if (_a !== e || Cr !== t) {
        if (Or) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (rv(e, Cr), o.clear()), Gd(e, t);
        }
        Ho = cf(), Jp(), sc(e, t);
      }
      Ud(t);
      do
        try {
          I_();
          break;
        } catch (s) {
          _x(e, s);
        }
      while (!0);
      return om(), Dx(i), zt = a, Mn !== null ? (jd(), Fo) : (Sn(), _a = null, Cr = G, xr);
    }
    function I_() {
      for (; Mn !== null && !kd(); )
        Ox(Mn);
    }
    function Ox(e) {
      var t = e.alternate;
      Jt(e);
      var a;
      (e.mode & kt) !== je ? (uS(e), a = l0(t, e, Wl), Um(e, !0)) : a = l0(t, e, Wl), bn(), e.memoizedProps = e.pendingProps, a === null ? Nx(e) : Mn = a, GS.current = null;
    }
    function Nx(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & co) === Ue) {
          Jt(t);
          var o = void 0;
          if ((t.mode & kt) === je ? o = ex(a, t, Wl) : (uS(t), o = ex(a, t, Wl), Um(t, !1)), bn(), o !== null) {
            Mn = o;
            return;
          }
        } else {
          var s = H1(a, t);
          if (s !== null) {
            s.flags &= Iv, Mn = s;
            return;
          }
          if ((t.mode & kt) !== je) {
            Um(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= co, i.subtreeFlags = Ue, i.deletions = null;
          else {
            xr = QS, Mn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Mn = v;
          return;
        }
        t = i, Mn = t;
      } while (t !== null);
      xr === Fo && (xr = gx);
    }
    function cc(e, t, a) {
      var i = xa(), o = Wr.transition;
      try {
        Wr.transition = null, Gn(ua), Y_(e, t, a, i);
      } finally {
        Wr.transition = o, Gn(i);
      }
      return null;
    }
    function Y_(e, t, a, i) {
      do
        Po();
      while ($u !== null);
      if (nk(), (zt & (Gr | Li)) !== Er)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Kv(s), o === null)
        return bi(), null;
      if (s === G && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = G, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Pn;
      var f = st(o.lanes, o.childLanes);
      lh(e, f), e === _a && (_a = null, Mn = null, Cr = G), ((o.subtreeFlags & fr) !== Ue || (o.flags & fr) !== Ue) && (uc || (uc = !0, ZS = a, s0(po, function() {
        return Po(), null;
      })));
      var p = (o.subtreeFlags & (Cl | cu | xl | fr)) !== Ue, v = (o.flags & (Cl | cu | xl | fr)) !== Ue;
      if (p || v) {
        var S = Wr.transition;
        Wr.transition = null;
        var C = xa();
        Gn(ua);
        var D = zt;
        zt |= Li, GS.current = null, I1(e, o), xC(), a_(e, o, s), rR(e.containerInfo), e.current = o, xs(s), i_(o, e, s), ho(), Wv(), zt = D, Gn(C), Wr.transition = S;
      } else
        e.current = o, xC();
      var _ = uc;
      if (uc ? (uc = !1, $u = e, Zp = s) : (ed = 0, Qm = null), f = e.pendingLanes, f === G && (Zf = null), _ || Ax(e.current, !1), Nd(o.stateNode, i), Or && e.memoizedUpdaters.clear(), w_(), Qa(e, Dn()), t !== null)
        for (var F = e.onRecoverableError, V = 0; V < t.length; V++) {
          var I = t[V], ge = I.stack, Pe = I.digest;
          F(I.value, {
            componentStack: ge,
            digest: Pe
          });
        }
      if (Wm) {
        Wm = !1;
        var Me = XS;
        throw XS = null, Me;
      }
      return oa(Zp, Ye) && e.tag !== Mu && Po(), f = e.pendingLanes, oa(f, Ye) ? (KT(), e === e0 ? ev++ : (ev = 0, e0 = e)) : ev = 0, zu(), bi(), null;
    }
    function Po() {
      if ($u !== null) {
        var e = sh(Zp), t = Nr(pr, e), a = Wr.transition, i = xa();
        try {
          return Wr.transition = null, Gn(t), G_();
        } finally {
          Gn(i), Wr.transition = a;
        }
      }
      return !1;
    }
    function W_(e) {
      JS.push(e), uc || (uc = !0, s0(po, function() {
        return Po(), null;
      }));
    }
    function G_() {
      if ($u === null)
        return !1;
      var e = ZS;
      ZS = null;
      var t = $u, a = Zp;
      if ($u = null, Zp = G, (zt & (Gr | Li)) !== Er)
        throw new Error("Cannot flush passive effects while already rendering.");
      t0 = !0, Gm = !1, Ad(a);
      var i = zt;
      zt |= Li, d_(t.current), u_(t, t.current, a, e);
      {
        var o = JS;
        JS = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          Q1(t, f);
        }
      }
      vu(), Ax(t.current, !0), zt = i, zu(), Gm ? t === Qm ? ed++ : (ed = 0, Qm = t) : ed = 0, t0 = !1, Gm = !1, Ld(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Lx(e) {
      return Zf !== null && Zf.has(e);
    }
    function Q_(e) {
      Zf === null ? Zf = /* @__PURE__ */ new Set([e]) : Zf.add(e);
    }
    function q_(e) {
      Wm || (Wm = !0, XS = e);
    }
    var K_ = q_;
    function Mx(e, t, a) {
      var i = ic(a, t), o = OC(e, i, Ye), s = Uu(e, o, Ye), f = ka();
      s !== null && (Su(s, Ye, f), Qa(s, f));
    }
    function mn(e, t, a) {
      if (P1(a), av(!1), e.tag === W) {
        Mx(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === W) {
          Mx(i, e, a);
          return;
        } else if (i.tag === te) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !Lx(s)) {
            var f = ic(a, e), p = TS(i, f, Ye), v = Uu(i, p, Ye), S = ka();
            v !== null && (Su(v, Ye, S), Qa(v, S));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function X_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = ka();
      uf(e, a), lk(e), _a === e && Eo(Cr, a) && (xr === Qp || xr === $m && rf(Cr) && Dn() - KS < Sx ? sc(e, G) : Ym = st(Ym, a)), Qa(e, o);
    }
    function zx(e, t) {
      t === Pn && (t = N_(e));
      var a = ka(), i = Ya(e, t);
      i !== null && (Su(i, t, a), Qa(i, a));
    }
    function J_(e) {
      var t = e.memoizedState, a = Pn;
      t !== null && (a = t.retryLane), zx(e, a);
    }
    function Z_(e, t) {
      var a = Pn, i;
      switch (e.tag) {
        case Ne:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case Be:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), zx(e, a);
    }
    function ek(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : __(e / 1960) * 1960;
    }
    function tk() {
      if (ev > D_)
        throw ev = 0, e0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ed > O_ && (ed = 0, Qm = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function nk() {
      tl.flushLegacyContextWarning(), tl.flushPendingUnsafeLifecycleWarnings();
    }
    function Ax(e, t) {
      Jt(e), Zm(e, jr, C_), t && Zm(e, El, x_), Zm(e, jr, S_), t && Zm(e, El, E_), bn();
    }
    function Zm(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Ue ? i = i.child : ((i.flags & t) !== Ue && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var ey = null;
    function Ux(e) {
      {
        if ((zt & Gr) !== Er || !(e.mode & Et))
          return;
        var t = e.tag;
        if (t !== oe && t !== W && t !== te && t !== Z && t !== ze && t !== dt && t !== Ie)
          return;
        var a = Xe(e) || "ReactComponent";
        if (ey !== null) {
          if (ey.has(a))
            return;
          ey.add(a);
        } else
          ey = /* @__PURE__ */ new Set([a]);
        var i = tr;
        try {
          Jt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Jt(e) : bn();
        }
      }
    }
    var l0;
    {
      var rk = null;
      l0 = function(e, t, a) {
        var i = Ix(rk, t);
        try {
          return qC(e, t, a);
        } catch (s) {
          if (hT() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (om(), XE(), tx(e, t), Ix(t, i), t.mode & kt && uS(t), ja(null, qC, null, e, t, a), Cd()) {
            var o = xd();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var jx = !1, o0;
    o0 = /* @__PURE__ */ new Set();
    function ak(e) {
      if (Zr && !GT())
        switch (e.tag) {
          case Z:
          case ze:
          case Ie: {
            var t = Mn && Xe(Mn) || "Unknown", a = t;
            if (!o0.has(a)) {
              o0.add(a);
              var i = Xe(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case te: {
            jx || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), jx = !0);
            break;
          }
        }
    }
    function rv(e, t) {
      if (Or) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          oh(e, i, t);
        });
      }
    }
    var u0 = {};
    function s0(e, t) {
      {
        var a = sl.current;
        return a !== null ? (a.push(t), u0) : Td(e, t);
      }
    }
    function Fx(e) {
      if (e !== u0)
        return _d(e);
    }
    function Hx() {
      return sl.current !== null;
    }
    function ik(e) {
      {
        if (e.mode & Et) {
          if (!mx())
            return;
        } else if (!T_() || zt !== Er || e.tag !== Z && e.tag !== ze && e.tag !== Ie)
          return;
        if (sl.current === null) {
          var t = tr;
          try {
            Jt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Xe(e));
          } finally {
            t ? Jt(e) : bn();
          }
        }
      }
    }
    function lk(e) {
      e.tag !== Mu && mx() && sl.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function av(e) {
      xx = e;
    }
    var Mi = null, td = null, ok = function(e) {
      Mi = e;
    };
    function nd(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function c0(e) {
      return nd(e);
    }
    function f0(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = nd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ne,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function Vx(e, t) {
      {
        if (Mi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case te: {
            typeof i == "function" && (o = !0);
            break;
          }
          case Z: {
            (typeof i == "function" || s === et) && (o = !0);
            break;
          }
          case ze: {
            (s === ne || s === et) && (o = !0);
            break;
          }
          case dt:
          case Ie: {
            (s === St || s === et) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var f = Mi(a);
          if (f !== void 0 && f === Mi(i))
            return !0;
        }
        return !1;
      }
    }
    function Px(e) {
      {
        if (Mi === null || typeof WeakSet != "function")
          return;
        td === null && (td = /* @__PURE__ */ new WeakSet()), td.add(e);
      }
    }
    var uk = function(e, t) {
      {
        if (Mi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Po(), Vo(function() {
          d0(e.current, i, a);
        });
      }
    }, sk = function(e, t) {
      {
        if (e.context !== si)
          return;
        Po(), Vo(function() {
          iv(t, e, null, null);
        });
      }
    };
    function d0(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Z:
          case Ie:
          case te:
            v = p;
            break;
          case ze:
            v = p.render;
            break;
        }
        if (Mi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var S = !1, C = !1;
        if (v !== null) {
          var D = Mi(v);
          D !== void 0 && (a.has(D) ? C = !0 : t.has(D) && (f === te ? C = !0 : S = !0));
        }
        if (td !== null && (td.has(e) || i !== null && td.has(i)) && (C = !0), C && (e._debugNeedsRemount = !0), C || S) {
          var _ = Ya(e, Ye);
          _ !== null && br(_, e, Ye, qt);
        }
        o !== null && !C && d0(o, t, a), s !== null && d0(s, t, a);
      }
    }
    var ck = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return p0(e.current, i, a), a;
      }
    };
    function p0(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Z:
          case Ie:
          case te:
            p = f;
            break;
          case ze:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? fk(e, a) : i !== null && p0(i, t, a), o !== null && p0(o, t, a);
      }
    }
    function fk(e, t) {
      {
        var a = dk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case X:
              t.add(i.stateNode);
              return;
            case ye:
              t.add(i.stateNode.containerInfo);
              return;
            case W:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function dk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === X)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var v0;
    {
      v0 = !1;
      try {
        var Bx = Object.preventExtensions({});
      } catch {
        v0 = !0;
      }
    }
    function pk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ue, this.subtreeFlags = Ue, this.deletions = null, this.lanes = G, this.childLanes = G, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !v0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ci = function(e, t, a, i) {
      return new pk(e, t, a, i);
    };
    function h0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vk(e) {
      return typeof e == "function" && !h0(e) && e.defaultProps === void 0;
    }
    function hk(e) {
      if (typeof e == "function")
        return h0(e) ? te : Z;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ne)
          return ze;
        if (t === St)
          return dt;
      }
      return oe;
    }
    function fc(e, t) {
      var a = e.alternate;
      a === null ? (a = ci(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ue, a.subtreeFlags = Ue, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Vn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case oe:
        case Z:
        case Ie:
          a.type = nd(e.type);
          break;
        case te:
          a.type = c0(e.type);
          break;
        case ze:
          a.type = f0(e.type);
          break;
      }
      return a;
    }
    function mk(e, t) {
      e.flags &= Vn | wn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = G, e.lanes = t, e.child = null, e.subtreeFlags = Ue, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ue, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function yk(e, t, a) {
      var i;
      return e === Xh ? (i = Et, t === !0 && (i |= lt, i |= tn)) : i = je, Or && (i |= kt), ci(W, null, null, i);
    }
    function m0(e, t, a, i, o, s) {
      var f = oe, p = e;
      if (typeof e == "function")
        h0(e) ? (f = te, p = c0(p)) : p = nd(p);
      else if (typeof e == "string")
        f = X;
      else
        e: switch (e) {
          case Kr:
            return Wu(a.children, o, s, t);
          case pi:
            f = nt, o |= lt, (o & Et) !== je && (o |= tn);
            break;
          case vi:
            return gk(a, o, s, t);
          case me:
            return Sk(a, o, s, t);
          case Se:
            return Ek(a, o, s, t);
          case _n:
            return $x(a, o, s, t);
          case sn:
          // eslint-disable-next-line no-fallthrough
          case xt:
          // eslint-disable-next-line no-fallthrough
          case vn:
          // eslint-disable-next-line no-fallthrough
          case Tr:
          // eslint-disable-next-line no-fallthrough
          case pt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case ji:
                  f = We;
                  break e;
                case R:
                  f = qe;
                  break e;
                case ne:
                  f = ze, p = f0(p);
                  break e;
                case St:
                  f = dt;
                  break e;
                case et:
                  f = cn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var S = i ? Xe(i) : null;
              S && (v += `

Check the render method of \`` + S + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var C = ci(f, a, t, o);
      return C.elementType = e, C.type = p, C.lanes = s, C._debugOwner = i, C;
    }
    function y0(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, f = e.props, p = m0(o, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Wu(e, t, a, i) {
      var o = ci(de, e, i, t);
      return o.lanes = a, o;
    }
    function gk(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = ci(Rt, e, i, t | kt);
      return o.elementType = vi, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function Sk(e, t, a, i) {
      var o = ci(Ne, e, i, t);
      return o.elementType = me, o.lanes = a, o;
    }
    function Ek(e, t, a, i) {
      var o = ci(Be, e, i, t);
      return o.elementType = Se, o.lanes = a, o;
    }
    function $x(e, t, a, i) {
      var o = ci(Ae, e, i, t);
      o.elementType = _n, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function g0(e, t, a) {
      var i = ci(ee, e, null, t);
      return i.lanes = a, i;
    }
    function Ck() {
      var e = ci(X, null, null, je);
      return e.elementType = "DELETED", e;
    }
    function xk(e) {
      var t = ci(Kt, null, null, je);
      return t.stateNode = e, t;
    }
    function S0(e, t, a) {
      var i = e.children !== null ? e.children : [], o = ci(ye, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function Ix(e, t) {
      return e === null && (e = ci(oe, null, null, je)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function bk(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = eg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Pn, this.eventTimes = of(G), this.expirationTimes = of(qt), this.pendingLanes = G, this.suspendedLanes = G, this.pingedLanes = G, this.expiredLanes = G, this.mutableReadLanes = G, this.finishedLanes = G, this.entangledLanes = G, this.entanglements = of(G), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Hd; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Xh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Mu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function Yx(e, t, a, i, o, s, f, p, v, S) {
      var C = new bk(e, t, a, p, v), D = yk(t, s);
      C.current = D, D.stateNode = C;
      {
        var _ = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        D.memoizedState = _;
      }
      return Lg(D), C;
    }
    var E0 = "18.3.1";
    function wk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return ha(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Sa,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var C0, x0;
    C0 = !1, x0 = {};
    function Wx(e) {
      if (!e)
        return si;
      var t = su(e), a = lT(t);
      if (t.tag === te) {
        var i = t.type;
        if (Hl(i))
          return SE(t, i, a);
      }
      return a;
    }
    function Rk(e, t) {
      {
        var a = su(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = ra(a);
        if (o === null)
          return null;
        if (o.mode & lt) {
          var s = Xe(a) || "Component";
          if (!x0[s]) {
            x0[s] = !0;
            var f = tr;
            try {
              Jt(o), a.mode & lt ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Jt(f) : bn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function Gx(e, t, a, i, o, s, f, p) {
      var v = !1, S = null;
      return Yx(e, t, v, S, a, i, o, s, f);
    }
    function Qx(e, t, a, i, o, s, f, p, v, S) {
      var C = !0, D = Yx(a, i, C, e, o, s, f, p, v);
      D.context = Wx(null);
      var _ = D.current, F = ka(), V = Iu(_), I = Uo(F, V);
      return I.callback = t ?? null, Uu(_, I, V), L_(D, V, F), D;
    }
    function iv(e, t, a, i) {
      Od(t, e);
      var o = t.current, s = ka(), f = Iu(o);
      jc(f);
      var p = Wx(a);
      t.context === null ? t.context = p : t.pendingContext = p, Zr && tr !== null && !C0 && (C0 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Xe(tr) || "Unknown"));
      var v = Uo(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var S = Uu(o, v, f);
      return S !== null && (br(S, o, f, s), dm(S, o, f)), f;
    }
    function ty(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case X:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Tk(e) {
      switch (e.tag) {
        case W: {
          var t = e.stateNode;
          if (Co(t)) {
            var a = rh(t);
            U_(t, a);
          }
          break;
        }
        case Ne: {
          Vo(function() {
            var o = Ya(e, Ye);
            if (o !== null) {
              var s = ka();
              br(o, e, Ye, s);
            }
          });
          var i = Ye;
          b0(e, i);
          break;
        }
      }
    }
    function qx(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Yd(a.retryLane, t));
    }
    function b0(e, t) {
      qx(e, t);
      var a = e.alternate;
      a && qx(a, t);
    }
    function _k(e) {
      if (e.tag === Ne) {
        var t = gu, a = Ya(e, t);
        if (a !== null) {
          var i = ka();
          br(a, e, t, i);
        }
        b0(e, t);
      }
    }
    function kk(e) {
      if (e.tag === Ne) {
        var t = Iu(e), a = Ya(e, t);
        if (a !== null) {
          var i = ka();
          br(a, e, t, i);
        }
        b0(e, t);
      }
    }
    function Kx(e) {
      var t = ii(e);
      return t === null ? null : t.stateNode;
    }
    var Xx = function(e) {
      return null;
    };
    function Dk(e) {
      return Xx(e);
    }
    var Jx = function(e) {
      return !1;
    };
    function Ok(e) {
      return Jx(e);
    }
    var Zx = null, eb = null, tb = null, nb = null, rb = null, ab = null, ib = null, lb = null, ob = null;
    {
      var ub = function(e, t, a) {
        var i = t[a], o = ut(e) ? e.slice() : it({}, e);
        return a + 1 === t.length ? (ut(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = ub(e[i], t, a + 1), o);
      }, sb = function(e, t) {
        return ub(e, t, 0);
      }, cb = function(e, t, a, i) {
        var o = t[i], s = ut(e) ? e.slice() : it({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], ut(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = cb(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, fb = function(e, t, a) {
        if (t.length !== a.length) {
          J("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              J("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return cb(e, t, a, 0);
      }, db = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = ut(e) ? e.slice() : it({}, e);
        return s[o] = db(e[o], t, a + 1, i), s;
      }, pb = function(e, t, a) {
        return db(e, t, 0, a);
      }, w0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Zx = function(e, t, a, i) {
        var o = w0(e, t);
        if (o !== null) {
          var s = pb(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = it({}, e.memoizedProps);
          var f = Ya(e, Ye);
          f !== null && br(f, e, Ye, qt);
        }
      }, eb = function(e, t, a) {
        var i = w0(e, t);
        if (i !== null) {
          var o = sb(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = it({}, e.memoizedProps);
          var s = Ya(e, Ye);
          s !== null && br(s, e, Ye, qt);
        }
      }, tb = function(e, t, a, i) {
        var o = w0(e, t);
        if (o !== null) {
          var s = fb(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = it({}, e.memoizedProps);
          var f = Ya(e, Ye);
          f !== null && br(f, e, Ye, qt);
        }
      }, nb = function(e, t, a) {
        e.pendingProps = pb(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ya(e, Ye);
        i !== null && br(i, e, Ye, qt);
      }, rb = function(e, t) {
        e.pendingProps = sb(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ya(e, Ye);
        a !== null && br(a, e, Ye, qt);
      }, ab = function(e, t, a) {
        e.pendingProps = fb(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ya(e, Ye);
        i !== null && br(i, e, Ye, qt);
      }, ib = function(e) {
        var t = Ya(e, Ye);
        t !== null && br(t, e, Ye, qt);
      }, lb = function(e) {
        Xx = e;
      }, ob = function(e) {
        Jx = e;
      };
    }
    function Nk(e) {
      var t = ra(e);
      return t === null ? null : t.stateNode;
    }
    function Lk(e) {
      return null;
    }
    function Mk() {
      return tr;
    }
    function zk(e) {
      var t = e.findFiberByHostInstance, a = N.ReactCurrentDispatcher;
      return Dd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Zx,
        overrideHookStateDeletePath: eb,
        overrideHookStateRenamePath: tb,
        overrideProps: nb,
        overridePropsDeletePath: rb,
        overridePropsRenamePath: ab,
        setErrorHandler: lb,
        setSuspenseHandler: ob,
        scheduleUpdate: ib,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Nk,
        findFiberByHostInstance: t || Lk,
        // React Refresh
        findHostInstancesForRefresh: ck,
        scheduleRefresh: uk,
        scheduleRoot: sk,
        setRefreshHandler: ok,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Mk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: E0
      });
    }
    var vb = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function R0(e) {
      this._internalRoot = e;
    }
    ny.prototype.render = R0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ry(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Fn) {
          var i = Kx(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      iv(e, t, null, null);
    }, ny.prototype.unmount = R0.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Tx() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Vo(function() {
          iv(null, e, null, null);
        }), vE(t);
      }
    };
    function Ak(e, t) {
      if (!ry(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      hb(e);
      var a = !1, i = !1, o = "", s = vb;
      t != null && (t.hydrate ? J("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === cr && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = Gx(e, Xh, null, a, i, o, s);
      Ih(f.current, e);
      var p = e.nodeType === Fn ? e.parentNode : e;
      return fp(p), new R0(f);
    }
    function ny(e) {
      this._internalRoot = e;
    }
    function Uk(e) {
      e && vh(e);
    }
    ny.prototype.unstable_scheduleHydration = Uk;
    function jk(e, t, a) {
      if (!ry(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      hb(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = vb;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var S = Qx(t, null, e, Xh, i, s, f, p, v);
      if (Ih(S.current, e), fp(e), o)
        for (var C = 0; C < o.length; C++) {
          var D = o[C];
          PT(S, D);
        }
      return new ny(S);
    }
    function ry(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === Wi || e.nodeType === rs));
    }
    function lv(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === Wi || e.nodeType === rs || e.nodeType === Fn && e.nodeValue === " react-mount-point-unstable "));
    }
    function hb(e) {
      e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), xp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Fk = N.ReactCurrentOwner, mb;
    mb = function(e) {
      if (e._reactRootContainer && e.nodeType !== Fn) {
        var t = Kx(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = T0(e), o = !!(i && Nu(i));
      o && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function T0(e) {
      return e ? e.nodeType === Wi ? e.documentElement : e.firstChild : null;
    }
    function yb() {
    }
    function Hk(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = ty(f);
            s.call(_);
          };
        }
        var f = Qx(
          t,
          i,
          e,
          Mu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          yb
        );
        e._reactRootContainer = f, Ih(f.current, e);
        var p = e.nodeType === Fn ? e.parentNode : e;
        return fp(p), Vo(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var S = i;
          i = function() {
            var _ = ty(C);
            S.call(_);
          };
        }
        var C = Gx(
          e,
          Mu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          yb
        );
        e._reactRootContainer = C, Ih(C.current, e);
        var D = e.nodeType === Fn ? e.parentNode : e;
        return fp(D), Vo(function() {
          iv(t, C, a, i);
        }), C;
      }
    }
    function Vk(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ay(e, t, a, i, o) {
      mb(a), Vk(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Hk(a, t, e, o, i);
      else {
        if (f = s, typeof o == "function") {
          var p = o;
          o = function() {
            var v = ty(f);
            p.call(v);
          };
        }
        iv(t, f, e, o);
      }
      return ty(f);
    }
    var gb = !1;
    function Pk(e) {
      {
        gb || (gb = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Fk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Mt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ea ? e : Rk(e, "findDOMNode");
    }
    function Bk(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = xp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ay(null, e, t, !0, a);
    }
    function $k(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = xp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ay(null, e, t, !1, a);
    }
    function Ik(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !so(e))
        throw new Error("parentComponent must be a valid React Component");
      return ay(e, t, a, !1, i);
    }
    var Sb = !1;
    function Yk(e) {
      if (Sb || (Sb = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !lv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = xp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = T0(e), i = a && !Nu(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Vo(function() {
          ay(null, null, e, !1, function() {
            e._reactRootContainer = null, vE(e);
          });
        }), !0;
      } else {
        {
          var o = T0(e), s = !!(o && Nu(o)), f = e.nodeType === ea && lv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ty(Tk), qd(_k), _y(kk), df(xa), ch(uh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ds(Gw), Bv(r0, j_, Vo);
    function Wk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ry(t))
        throw new Error("Target container is not a DOM element.");
      return wk(e, t, null, a);
    }
    function Gk(e, t, a, i) {
      return Ik(e, t, a, i);
    }
    var _0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Nu, Mf, Yh, Sd, iu, r0]
    };
    function Qk(e, t) {
      return _0.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ak(e, t);
    }
    function qk(e, t, a) {
      return _0.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), jk(e, t, a);
    }
    function Kk(e) {
      return Tx() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Vo(e);
    }
    var Xk = zk({
      findFiberByHostInstance: Ks,
      bundleType: 1,
      version: E0,
      rendererPackageName: "react-dom"
    });
    if (!Xk && Xn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Eb = window.location.protocol;
      /^(https?|file):$/.test(Eb) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Eb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _0, Ka.createPortal = Wk, Ka.createRoot = Qk, Ka.findDOMNode = Pk, Ka.flushSync = Kk, Ka.hydrate = Bk, Ka.hydrateRoot = qk, Ka.render = $k, Ka.unmountComponentAtNode = Yk, Ka.unstable_batchedUpdates = r0, Ka.unstable_renderSubtreeIntoContainer = Gk, Ka.version = E0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Ka;
}
var Lb;
function Wb() {
  if (Lb) return oy.exports;
  Lb = 1;
  var g = {};
  function x() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (g.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
      } catch (E) {
        console.error(E);
      }
    }
  }
  return g.NODE_ENV === "production" ? (x(), oy.exports = uD()) : oy.exports = sD(), oy.exports;
}
var Mb;
function cD() {
  if (Mb) return ad;
  Mb = 1;
  var g = {}, x = Wb();
  if (g.NODE_ENV === "production")
    ad.createRoot = x.createRoot, ad.hydrateRoot = x.hydrateRoot;
  else {
    var E = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    ad.createRoot = function(N, P) {
      E.usingClientEntryPoint = !0;
      try {
        return x.createRoot(N, P);
      } finally {
        E.usingClientEntryPoint = !1;
      }
    }, ad.hydrateRoot = function(N, P, L) {
      E.usingClientEntryPoint = !0;
      try {
        return x.hydrateRoot(N, P, L);
      } finally {
        E.usingClientEntryPoint = !1;
      }
    };
  }
  return ad;
}
var Gb = cD();
const fD = /* @__PURE__ */ Ib(Gb);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dD = (g) => g.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), pD = (g) => g.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (x, E, N) => N ? N.toUpperCase() : E.toLowerCase()
), zb = (g) => {
  const x = pD(g);
  return x.charAt(0).toUpperCase() + x.slice(1);
}, Qb = (...g) => g.filter((x, E, N) => !!x && x.trim() !== "" && N.indexOf(x) === E).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var vD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hD = yt.forwardRef(
  ({
    color: g = "currentColor",
    size: x = 24,
    strokeWidth: E = 2,
    absoluteStrokeWidth: N,
    className: P = "",
    children: L,
    iconNode: J,
    ...y
  }, ue) => yt.createElement(
    "svg",
    {
      ref: ue,
      ...vD,
      width: x,
      height: x,
      stroke: g,
      strokeWidth: N ? Number(E) * 24 / Number(x) : E,
      className: Qb("lucide", P),
      ...y
    },
    [
      ...J.map(([Z, te]) => yt.createElement(Z, te)),
      ...Array.isArray(L) ? L : [L]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ql = (g, x) => {
  const E = yt.forwardRef(
    ({ className: N, ...P }, L) => yt.createElement(hD, {
      ref: L,
      iconNode: x,
      className: Qb(
        `lucide-${dD(zb(g))}`,
        `lucide-${g}`,
        N
      ),
      ...P
    })
  );
  return E.displayName = zb(g), E;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mD = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], yD = Ql("chevron-down", mD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gD = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], SD = Ql("chevron-right", gD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ED = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], U0 = Ql("ellipsis", ED);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CD = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], qb = Ql("funnel", CD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xD = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
], bD = Ql("message-square", xD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wD = [
  ["path", { d: "M13.234 20.252 21 12.3", key: "1cbrk9" }],
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",
      key: "1pkts6"
    }
  ]
], RD = Ql("paperclip", wD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TD = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], pv = Ql("plus", TD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _D = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], Kb = Ql("search", _D);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kD = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], DD = Ql("settings", kD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OD = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], Xb = Ql("user", OD);
function Ab(g, x) {
  if (typeof g == "function")
    return g(x);
  g != null && (g.current = x);
}
function ND(...g) {
  return (x) => {
    let E = !1;
    const N = g.map((P) => {
      const L = Ab(P, x);
      return !E && typeof L == "function" && (E = !0), L;
    });
    if (E)
      return () => {
        for (let P = 0; P < N.length; P++) {
          const L = N[P];
          typeof L == "function" ? L() : Ab(g[P], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function Jb(g) {
  const x = /* @__PURE__ */ LD(g), E = yt.forwardRef((N, P) => {
    const { children: L, ...J } = N, y = yt.Children.toArray(L), ue = y.find(zD);
    if (ue) {
      const Z = ue.props.children, te = y.map((oe) => oe === ue ? yt.Children.count(Z) > 1 ? yt.Children.only(null) : yt.isValidElement(Z) ? Z.props.children : null : oe);
      return /* @__PURE__ */ B.jsx(x, { ...J, ref: P, children: yt.isValidElement(Z) ? yt.cloneElement(Z, void 0, te) : null });
    }
    return /* @__PURE__ */ B.jsx(x, { ...J, ref: P, children: L });
  });
  return E.displayName = `${g}.Slot`, E;
}
var Zb = /* @__PURE__ */ Jb("Slot");
// @__NO_SIDE_EFFECTS__
function LD(g) {
  const x = yt.forwardRef((E, N) => {
    const { children: P, ...L } = E;
    if (yt.isValidElement(P)) {
      const J = UD(P), y = AD(L, P.props);
      return P.type !== yt.Fragment && (y.ref = N ? ND(N, J) : J), yt.cloneElement(P, y);
    }
    return yt.Children.count(P) > 1 ? yt.Children.only(null) : null;
  });
  return x.displayName = `${g}.SlotClone`, x;
}
var MD = Symbol("radix.slottable");
function zD(g) {
  return yt.isValidElement(g) && typeof g.type == "function" && "__radixId" in g.type && g.type.__radixId === MD;
}
function AD(g, x) {
  const E = { ...x };
  for (const N in x) {
    const P = g[N], L = x[N];
    /^on[A-Z]/.test(N) ? P && L ? E[N] = (...y) => {
      const ue = L(...y);
      return P(...y), ue;
    } : P && (E[N] = P) : N === "style" ? E[N] = { ...P, ...L } : N === "className" && (E[N] = [P, L].filter(Boolean).join(" "));
  }
  return { ...g, ...E };
}
function UD(g) {
  var N, P;
  let x = (N = Object.getOwnPropertyDescriptor(g.props, "ref")) == null ? void 0 : N.get, E = x && "isReactWarning" in x && x.isReactWarning;
  return E ? g.ref : (x = (P = Object.getOwnPropertyDescriptor(g, "ref")) == null ? void 0 : P.get, E = x && "isReactWarning" in x && x.isReactWarning, E ? g.props.ref : g.props.ref || g.ref);
}
function ew(g) {
  var x, E, N = "";
  if (typeof g == "string" || typeof g == "number") N += g;
  else if (typeof g == "object") if (Array.isArray(g)) {
    var P = g.length;
    for (x = 0; x < P; x++) g[x] && (E = ew(g[x])) && (N && (N += " "), N += E);
  } else for (E in g) g[E] && (N && (N += " "), N += E);
  return N;
}
function tw() {
  for (var g, x, E = 0, N = "", P = arguments.length; E < P; E++) (g = arguments[E]) && (x = ew(g)) && (N && (N += " "), N += x);
  return N;
}
const Ub = (g) => typeof g == "boolean" ? `${g}` : g === 0 ? "0" : g, jb = tw, nw = (g, x) => (E) => {
  var N;
  if ((x == null ? void 0 : x.variants) == null) return jb(g, E == null ? void 0 : E.class, E == null ? void 0 : E.className);
  const { variants: P, defaultVariants: L } = x, J = Object.keys(P).map((Z) => {
    const te = E == null ? void 0 : E[Z], oe = L == null ? void 0 : L[Z];
    if (te === null) return null;
    const W = Ub(te) || Ub(oe);
    return P[Z][W];
  }), y = E && Object.entries(E).reduce((Z, te) => {
    let [oe, W] = te;
    return W === void 0 || (Z[oe] = W), Z;
  }, {}), ue = x == null || (N = x.compoundVariants) === null || N === void 0 ? void 0 : N.reduce((Z, te) => {
    let { class: oe, className: W, ...ye } = te;
    return Object.entries(ye).every((X) => {
      let [ee, de] = X;
      return Array.isArray(de) ? de.includes({
        ...L,
        ...y
      }[ee]) : {
        ...L,
        ...y
      }[ee] === de;
    }) ? [
      ...Z,
      oe,
      W
    ] : Z;
  }, []);
  return jb(g, J, ue, E == null ? void 0 : E.class, E == null ? void 0 : E.className);
}, j0 = "-", jD = (g) => {
  const x = HD(g), {
    conflictingClassGroups: E,
    conflictingClassGroupModifiers: N
  } = g;
  return {
    getClassGroupId: (J) => {
      const y = J.split(j0);
      return y[0] === "" && y.length !== 1 && y.shift(), rw(y, x) || FD(J);
    },
    getConflictingClassGroupIds: (J, y) => {
      const ue = E[J] || [];
      return y && N[J] ? [...ue, ...N[J]] : ue;
    }
  };
}, rw = (g, x) => {
  var J;
  if (g.length === 0)
    return x.classGroupId;
  const E = g[0], N = x.nextPart.get(E), P = N ? rw(g.slice(1), N) : void 0;
  if (P)
    return P;
  if (x.validators.length === 0)
    return;
  const L = g.join(j0);
  return (J = x.validators.find(({
    validator: y
  }) => y(L))) == null ? void 0 : J.classGroupId;
}, Fb = /^\[(.+)\]$/, FD = (g) => {
  if (Fb.test(g)) {
    const x = Fb.exec(g)[1], E = x == null ? void 0 : x.substring(0, x.indexOf(":"));
    if (E)
      return "arbitrary.." + E;
  }
}, HD = (g) => {
  const {
    theme: x,
    prefix: E
  } = g, N = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return PD(Object.entries(g.classGroups), E).forEach(([L, J]) => {
    z0(J, N, L, x);
  }), N;
}, z0 = (g, x, E, N) => {
  g.forEach((P) => {
    if (typeof P == "string") {
      const L = P === "" ? x : Hb(x, P);
      L.classGroupId = E;
      return;
    }
    if (typeof P == "function") {
      if (VD(P)) {
        z0(P(N), x, E, N);
        return;
      }
      x.validators.push({
        validator: P,
        classGroupId: E
      });
      return;
    }
    Object.entries(P).forEach(([L, J]) => {
      z0(J, Hb(x, L), E, N);
    });
  });
}, Hb = (g, x) => {
  let E = g;
  return x.split(j0).forEach((N) => {
    E.nextPart.has(N) || E.nextPart.set(N, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), E = E.nextPart.get(N);
  }), E;
}, VD = (g) => g.isThemeGetter, PD = (g, x) => x ? g.map(([E, N]) => {
  const P = N.map((L) => typeof L == "string" ? x + L : typeof L == "object" ? Object.fromEntries(Object.entries(L).map(([J, y]) => [x + J, y])) : L);
  return [E, P];
}) : g, BD = (g) => {
  if (g < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let x = 0, E = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map();
  const P = (L, J) => {
    E.set(L, J), x++, x > g && (x = 0, N = E, E = /* @__PURE__ */ new Map());
  };
  return {
    get(L) {
      let J = E.get(L);
      if (J !== void 0)
        return J;
      if ((J = N.get(L)) !== void 0)
        return P(L, J), J;
    },
    set(L, J) {
      E.has(L) ? E.set(L, J) : P(L, J);
    }
  };
}, aw = "!", $D = (g) => {
  const {
    separator: x,
    experimentalParseClassName: E
  } = g, N = x.length === 1, P = x[0], L = x.length, J = (y) => {
    const ue = [];
    let Z = 0, te = 0, oe;
    for (let de = 0; de < y.length; de++) {
      let nt = y[de];
      if (Z === 0) {
        if (nt === P && (N || y.slice(de, de + L) === x)) {
          ue.push(y.slice(te, de)), te = de + L;
          continue;
        }
        if (nt === "/") {
          oe = de;
          continue;
        }
      }
      nt === "[" ? Z++ : nt === "]" && Z--;
    }
    const W = ue.length === 0 ? y : y.substring(te), ye = W.startsWith(aw), X = ye ? W.substring(1) : W, ee = oe && oe > te ? oe - te : void 0;
    return {
      modifiers: ue,
      hasImportantModifier: ye,
      baseClassName: X,
      maybePostfixModifierPosition: ee
    };
  };
  return E ? (y) => E({
    className: y,
    parseClassName: J
  }) : J;
}, ID = (g) => {
  if (g.length <= 1)
    return g;
  const x = [];
  let E = [];
  return g.forEach((N) => {
    N[0] === "[" ? (x.push(...E.sort(), N), E = []) : E.push(N);
  }), x.push(...E.sort()), x;
}, YD = (g) => ({
  cache: BD(g.cacheSize),
  parseClassName: $D(g),
  ...jD(g)
}), WD = /\s+/, GD = (g, x) => {
  const {
    parseClassName: E,
    getClassGroupId: N,
    getConflictingClassGroupIds: P
  } = x, L = [], J = g.trim().split(WD);
  let y = "";
  for (let ue = J.length - 1; ue >= 0; ue -= 1) {
    const Z = J[ue], {
      modifiers: te,
      hasImportantModifier: oe,
      baseClassName: W,
      maybePostfixModifierPosition: ye
    } = E(Z);
    let X = !!ye, ee = N(X ? W.substring(0, ye) : W);
    if (!ee) {
      if (!X) {
        y = Z + (y.length > 0 ? " " + y : y);
        continue;
      }
      if (ee = N(W), !ee) {
        y = Z + (y.length > 0 ? " " + y : y);
        continue;
      }
      X = !1;
    }
    const de = ID(te).join(":"), nt = oe ? de + aw : de, qe = nt + ee;
    if (L.includes(qe))
      continue;
    L.push(qe);
    const We = P(ee, X);
    for (let ze = 0; ze < We.length; ++ze) {
      const Rt = We[ze];
      L.push(nt + Rt);
    }
    y = Z + (y.length > 0 ? " " + y : y);
  }
  return y;
};
function QD() {
  let g = 0, x, E, N = "";
  for (; g < arguments.length; )
    (x = arguments[g++]) && (E = iw(x)) && (N && (N += " "), N += E);
  return N;
}
const iw = (g) => {
  if (typeof g == "string")
    return g;
  let x, E = "";
  for (let N = 0; N < g.length; N++)
    g[N] && (x = iw(g[N])) && (E && (E += " "), E += x);
  return E;
};
function qD(g, ...x) {
  let E, N, P, L = J;
  function J(ue) {
    const Z = x.reduce((te, oe) => oe(te), g());
    return E = YD(Z), N = E.cache.get, P = E.cache.set, L = y, y(ue);
  }
  function y(ue) {
    const Z = N(ue);
    if (Z)
      return Z;
    const te = GD(ue, E);
    return P(ue, te), te;
  }
  return function() {
    return L(QD.apply(null, arguments));
  };
}
const xn = (g) => {
  const x = (E) => E[g] || [];
  return x.isThemeGetter = !0, x;
}, lw = /^\[(?:([a-z-]+):)?(.+)\]$/i, KD = /^\d+\/\d+$/, XD = /* @__PURE__ */ new Set(["px", "full", "screen"]), JD = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ZD = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, eO = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, tO = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, nO = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $o = (g) => id(g) || XD.has(g) || KD.test(g), Gu = (g) => ld(g, "length", cO), id = (g) => !!g && !Number.isNaN(Number(g)), O0 = (g) => ld(g, "number", id), cv = (g) => !!g && Number.isInteger(Number(g)), rO = (g) => g.endsWith("%") && id(g.slice(0, -1)), Ct = (g) => lw.test(g), Qu = (g) => JD.test(g), aO = /* @__PURE__ */ new Set(["length", "size", "percentage"]), iO = (g) => ld(g, aO, ow), lO = (g) => ld(g, "position", ow), oO = /* @__PURE__ */ new Set(["image", "url"]), uO = (g) => ld(g, oO, dO), sO = (g) => ld(g, "", fO), fv = () => !0, ld = (g, x, E) => {
  const N = lw.exec(g);
  return N ? N[1] ? typeof x == "string" ? N[1] === x : x.has(N[1]) : E(N[2]) : !1;
}, cO = (g) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ZD.test(g) && !eO.test(g)
), ow = () => !1, fO = (g) => tO.test(g), dO = (g) => nO.test(g), pO = () => {
  const g = xn("colors"), x = xn("spacing"), E = xn("blur"), N = xn("brightness"), P = xn("borderColor"), L = xn("borderRadius"), J = xn("borderSpacing"), y = xn("borderWidth"), ue = xn("contrast"), Z = xn("grayscale"), te = xn("hueRotate"), oe = xn("invert"), W = xn("gap"), ye = xn("gradientColorStops"), X = xn("gradientColorStopPositions"), ee = xn("inset"), de = xn("margin"), nt = xn("opacity"), qe = xn("padding"), We = xn("saturate"), ze = xn("scale"), Rt = xn("sepia"), Ne = xn("skew"), dt = xn("space"), Ie = xn("translate"), cn = () => ["auto", "contain", "none"], Ot = () => ["auto", "hidden", "clip", "visible", "scroll"], Kt = () => ["auto", Ct, x], Be = () => [Ct, x], gt = () => ["", $o, Gu], Ae = () => ["auto", id, Ct], Ut = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ct = () => ["solid", "dashed", "dotted", "double", "none"], ot = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], xe = () => ["", "0", Ct], pe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], O = () => [id, Ct];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [fv],
      spacing: [$o, Gu],
      blur: ["none", "", Qu, Ct],
      brightness: O(),
      borderColor: [g],
      borderRadius: ["none", "", "full", Qu, Ct],
      borderSpacing: Be(),
      borderWidth: gt(),
      contrast: O(),
      grayscale: xe(),
      hueRotate: O(),
      invert: xe(),
      gap: Be(),
      gradientColorStops: [g],
      gradientColorStopPositions: [rO, Gu],
      inset: Kt(),
      margin: Kt(),
      opacity: O(),
      padding: Be(),
      saturate: O(),
      scale: O(),
      sepia: xe(),
      skew: O(),
      space: Be(),
      translate: Be()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Ct]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Qu]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": pe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": pe()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Ut(), Ct]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Ot()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Ot()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Ot()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: cn()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": cn()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": cn()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [ee]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [ee]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [ee]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [ee]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [ee]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [ee]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [ee]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [ee]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [ee]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", cv, Ct]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Kt()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", Ct]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: xe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: xe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", cv, Ct]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [fv]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", cv, Ct]
        }, Ct]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Ae()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Ae()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [fv]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [cv, Ct]
        }, Ct]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Ae()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Ae()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", Ct]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Ct]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [W]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [W]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [W]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...q()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...q(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...q(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [qe]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [qe]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [qe]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [qe]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [qe]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [qe]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [qe]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [qe]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [qe]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [de]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [de]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [de]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [de]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [de]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [de]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [de]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [de]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [de]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [dt]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [dt]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ct, x]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Ct, x, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Ct, x, "none", "full", "min", "max", "fit", "prose", {
          screen: [Qu]
        }, Qu]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Ct, x, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Ct, x, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Ct, x, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Ct, x, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Qu, Gu]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", O0]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [fv]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ct]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", id, O0]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", $o, Ct]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ct]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Ct]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [g]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [nt]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [g]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [nt]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ct(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", $o, Gu]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", $o, Ct]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [g]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: Be()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ct]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Ct]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [nt]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Ut(), lO]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", iO]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, uO]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [g]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [X]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [X]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [X]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [ye]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [ye]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [ye]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [L]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [L]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [L]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [L]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [L]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [L]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [L]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [L]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [L]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [L]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [L]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [L]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [L]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [L]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [L]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [y]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [y]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [y]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [y]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [y]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [y]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [y]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [y]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [y]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [nt]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ct(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [y]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [y]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [nt]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ct()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [P]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [P]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [P]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [P]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [P]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [P]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [P]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [P]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [P]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [P]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ct()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [$o, Ct]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [$o, Gu]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [g]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: gt()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [g]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [nt]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [$o, Gu]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [g]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Qu, sO]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [fv]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [nt]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ot(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ot()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [E]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [N]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ue]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Qu, Ct]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [Z]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [te]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [oe]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [We]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [Rt]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [E]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [N]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [Z]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [te]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [oe]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [nt]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [We]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [Rt]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [J]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [J]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [J]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ct]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: O()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Ct]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: O()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Ct]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [ze]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [ze]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [ze]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [cv, Ct]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Ie]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Ie]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [Ne]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Ne]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ct]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", g]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ct]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [g]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": Be()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Be()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Be()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Be()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Be()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Be()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Be()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Be()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Be()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Be()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Be()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Be()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Be()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Be()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Be()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Be()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Be()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Be()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Ct]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [g, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [$o, Gu, O0]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [g, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, vO = /* @__PURE__ */ qD(pO);
function cy(...g) {
  return vO(tw(g));
}
const hO = nw(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function or({
  className: g,
  variant: x,
  size: E,
  asChild: N = !1,
  ...P
}) {
  const L = N ? Zb : "button";
  return /* @__PURE__ */ B.jsx(
    L,
    {
      "data-slot": "button",
      className: cy(hO({ variant: x, size: E, className: g })),
      ...P
    }
  );
}
const mO = nw(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function dc({
  className: g,
  variant: x,
  asChild: E = !1,
  ...N
}) {
  const P = E ? Zb : "span";
  return /* @__PURE__ */ B.jsx(
    P,
    {
      "data-slot": "badge",
      className: cy(mO({ variant: x }), g),
      ...N
    }
  );
}
function yO({ activeTab: g, onTabChange: x }) {
  const E = [
    { id: "main-table", label: "Main table", icon: "⋯" },
    { id: "form", label: "Form", icon: null },
    { id: "kanban", label: "Kanban", icon: null }
  ];
  return /* @__PURE__ */ B.jsxs("header", { className: "bg-slate-800 border-b border-slate-700 px-6 py-3 flex items-center justify-between", children: [
    /* @__PURE__ */ B.jsxs("div", { className: "flex items-center gap-1", children: [
      E.map((N) => /* @__PURE__ */ B.jsxs(
        "button",
        {
          onClick: () => x(N.id),
          className: `px-4 py-2 rounded-md transition-colors flex items-center gap-2 text-sm ${g === N.id ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white hover:bg-slate-700"}`,
          children: [
            N.icon && /* @__PURE__ */ B.jsx("span", { children: N.icon }),
            N.label
          ]
        },
        N.id
      )),
      /* @__PURE__ */ B.jsxs(
        or,
        {
          variant: "ghost",
          size: "sm",
          className: "text-slate-400 hover:text-white ml-2",
          children: [
            /* @__PURE__ */ B.jsx(pv, { className: "w-4 h-4 mr-1" }),
            "Add View"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ B.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ B.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ B.jsx("h1", { className: "text-xl font-medium text-white", children: "MYTICK" }),
        /* @__PURE__ */ B.jsx(dc, { variant: "secondary", className: "bg-emerald-600 text-white border-none", children: "In Portal" })
      ] }),
      /* @__PURE__ */ B.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ B.jsx(or, { variant: "ghost", size: "sm", className: "text-slate-300 hover:text-white", children: /* @__PURE__ */ B.jsx(DD, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ B.jsx("div", { className: "w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ B.jsx(Xb, { className: "w-4 h-4 text-white" }) })
      ] })
    ] })
  ] });
}
function gO(g, x = []) {
  let E = [];
  function N(L, J) {
    const y = yt.createContext(J), ue = E.length;
    E = [...E, J];
    const Z = (oe) => {
      var nt;
      const { scope: W, children: ye, ...X } = oe, ee = ((nt = W == null ? void 0 : W[g]) == null ? void 0 : nt[ue]) || y, de = yt.useMemo(() => X, Object.values(X));
      return /* @__PURE__ */ B.jsx(ee.Provider, { value: de, children: ye });
    };
    Z.displayName = L + "Provider";
    function te(oe, W) {
      var ee;
      const ye = ((ee = W == null ? void 0 : W[g]) == null ? void 0 : ee[ue]) || y, X = yt.useContext(ye);
      if (X) return X;
      if (J !== void 0) return J;
      throw new Error(`\`${oe}\` must be used within \`${L}\``);
    }
    return [Z, te];
  }
  const P = () => {
    const L = E.map((J) => yt.createContext(J));
    return function(y) {
      const ue = (y == null ? void 0 : y[g]) || L;
      return yt.useMemo(
        () => ({ [`__scope${g}`]: { ...y, [g]: ue } }),
        [y, ue]
      );
    };
  };
  return P.scopeName = g, [N, SO(P, ...x)];
}
function SO(...g) {
  const x = g[0];
  if (g.length === 1) return x;
  const E = () => {
    const N = g.map((P) => ({
      useScope: P(),
      scopeName: P.scopeName
    }));
    return function(L) {
      const J = N.reduce((y, { useScope: ue, scopeName: Z }) => {
        const oe = ue(L)[`__scope${Z}`];
        return { ...y, ...oe };
      }, {});
      return yt.useMemo(() => ({ [`__scope${x.scopeName}`]: J }), [J]);
    };
  };
  return E.scopeName = x.scopeName, E;
}
function EO(g) {
  const x = yt.useRef(g);
  return yt.useEffect(() => {
    x.current = g;
  }), yt.useMemo(() => (...E) => {
    var N;
    return (N = x.current) == null ? void 0 : N.call(x, ...E);
  }, []);
}
var A0 = globalThis != null && globalThis.document ? yt.useLayoutEffect : () => {
};
Wb();
var CO = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], F0 = CO.reduce((g, x) => {
  const E = /* @__PURE__ */ Jb(`Primitive.${x}`), N = yt.forwardRef((P, L) => {
    const { asChild: J, ...y } = P, ue = J ? E : x;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ B.jsx(ue, { ...y, ref: L });
  });
  return N.displayName = `Primitive.${x}`, { ...g, [x]: N };
}, {}), sy = { exports: {} }, N0 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vb;
function xO() {
  if (Vb) return N0;
  Vb = 1;
  var g = pc();
  function x(oe, W) {
    return oe === W && (oe !== 0 || 1 / oe === 1 / W) || oe !== oe && W !== W;
  }
  var E = typeof Object.is == "function" ? Object.is : x, N = g.useState, P = g.useEffect, L = g.useLayoutEffect, J = g.useDebugValue;
  function y(oe, W) {
    var ye = W(), X = N({ inst: { value: ye, getSnapshot: W } }), ee = X[0].inst, de = X[1];
    return L(
      function() {
        ee.value = ye, ee.getSnapshot = W, ue(ee) && de({ inst: ee });
      },
      [oe, ye, W]
    ), P(
      function() {
        return ue(ee) && de({ inst: ee }), oe(function() {
          ue(ee) && de({ inst: ee });
        });
      },
      [oe]
    ), J(ye), ye;
  }
  function ue(oe) {
    var W = oe.getSnapshot;
    oe = oe.value;
    try {
      var ye = W();
      return !E(oe, ye);
    } catch {
      return !0;
    }
  }
  function Z(oe, W) {
    return W();
  }
  var te = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Z : y;
  return N0.useSyncExternalStore = g.useSyncExternalStore !== void 0 ? g.useSyncExternalStore : te, N0;
}
var L0 = {}, Pb;
function bO() {
  if (Pb) return L0;
  Pb = 1;
  var g = {};
  /**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return g.NODE_ENV !== "production" && function() {
    function x(X, ee) {
      return X === ee && (X !== 0 || 1 / X === 1 / ee) || X !== X && ee !== ee;
    }
    function E(X, ee) {
      oe || L.startTransition === void 0 || (oe = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var de = ee();
      if (!W) {
        var nt = ee();
        J(de, nt) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), W = !0);
      }
      nt = y({
        inst: { value: de, getSnapshot: ee }
      });
      var qe = nt[0].inst, We = nt[1];
      return Z(
        function() {
          qe.value = de, qe.getSnapshot = ee, N(qe) && We({ inst: qe });
        },
        [X, de, ee]
      ), ue(
        function() {
          return N(qe) && We({ inst: qe }), X(function() {
            N(qe) && We({ inst: qe });
          });
        },
        [X]
      ), te(de), de;
    }
    function N(X) {
      var ee = X.getSnapshot;
      X = X.value;
      try {
        var de = ee();
        return !J(X, de);
      } catch {
        return !0;
      }
    }
    function P(X, ee) {
      return ee();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var L = pc(), J = typeof Object.is == "function" ? Object.is : x, y = L.useState, ue = L.useEffect, Z = L.useLayoutEffect, te = L.useDebugValue, oe = !1, W = !1, ye = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? P : E;
    L0.useSyncExternalStore = L.useSyncExternalStore !== void 0 ? L.useSyncExternalStore : ye, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }(), L0;
}
var Bb;
function wO() {
  if (Bb) return sy.exports;
  Bb = 1;
  var g = {};
  return g.NODE_ENV === "production" ? sy.exports = xO() : sy.exports = bO(), sy.exports;
}
var RO = wO();
function TO() {
  return RO.useSyncExternalStore(
    _O,
    () => !0,
    () => !1
  );
}
function _O() {
  return () => {
  };
}
var H0 = "Avatar", [kO, KO] = gO(H0), [DO, uw] = kO(H0), sw = yt.forwardRef(
  (g, x) => {
    const { __scopeAvatar: E, ...N } = g, [P, L] = yt.useState("idle");
    return /* @__PURE__ */ B.jsx(
      DO,
      {
        scope: E,
        imageLoadingStatus: P,
        onImageLoadingStatusChange: L,
        children: /* @__PURE__ */ B.jsx(F0.span, { ...N, ref: x })
      }
    );
  }
);
sw.displayName = H0;
var cw = "AvatarImage", OO = yt.forwardRef(
  (g, x) => {
    const { __scopeAvatar: E, src: N, onLoadingStatusChange: P = () => {
    }, ...L } = g, J = uw(cw, E), y = NO(N, L), ue = EO((Z) => {
      P(Z), J.onImageLoadingStatusChange(Z);
    });
    return A0(() => {
      y !== "idle" && ue(y);
    }, [y, ue]), y === "loaded" ? /* @__PURE__ */ B.jsx(F0.img, { ...L, ref: x, src: N }) : null;
  }
);
OO.displayName = cw;
var fw = "AvatarFallback", dw = yt.forwardRef(
  (g, x) => {
    const { __scopeAvatar: E, delayMs: N, ...P } = g, L = uw(fw, E), [J, y] = yt.useState(N === void 0);
    return yt.useEffect(() => {
      if (N !== void 0) {
        const ue = window.setTimeout(() => y(!0), N);
        return () => window.clearTimeout(ue);
      }
    }, [N]), J && L.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ B.jsx(F0.span, { ...P, ref: x }) : null;
  }
);
dw.displayName = fw;
function $b(g, x) {
  return g ? x ? (g.src !== x && (g.src = x), g.complete && g.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function NO(g, { referrerPolicy: x, crossOrigin: E }) {
  const N = TO(), P = yt.useRef(null), L = N ? (P.current || (P.current = new window.Image()), P.current) : null, [J, y] = yt.useState(
    () => $b(L, g)
  );
  return A0(() => {
    y($b(L, g));
  }, [L, g]), A0(() => {
    const ue = (oe) => () => {
      y(oe);
    };
    if (!L) return;
    const Z = ue("loaded"), te = ue("error");
    return L.addEventListener("load", Z), L.addEventListener("error", te), x && (L.referrerPolicy = x), typeof E == "string" && (L.crossOrigin = E), () => {
      L.removeEventListener("load", Z), L.removeEventListener("error", te);
    };
  }, [L, E, x]), J;
}
var LO = sw, MO = dw;
function zO({
  className: g,
  ...x
}) {
  return /* @__PURE__ */ B.jsx(
    LO,
    {
      "data-slot": "avatar",
      className: cy(
        "relative flex size-10 shrink-0 overflow-hidden rounded-full",
        g
      ),
      ...x
    }
  );
}
function AO({
  className: g,
  ...x
}) {
  return /* @__PURE__ */ B.jsx(
    MO,
    {
      "data-slot": "avatar-fallback",
      className: cy(
        "bg-muted flex size-full items-center justify-center rounded-full",
        g
      ),
      ...x
    }
  );
}
const UO = {
  open: "bg-gray-500",
  pending: "bg-yellow-500",
  "in-progress": "bg-blue-500",
  waiting: "bg-purple-500",
  resolved: "bg-green-500",
  closed: "bg-gray-600"
}, jO = {
  low: "bg-gray-500",
  medium: "bg-orange-500",
  high: "bg-red-500"
};
function FO({ group: g }) {
  const [x, E] = yt.useState(!0), N = (L) => UO[L] || "bg-gray-500", P = (L) => jO[L] || "bg-gray-500";
  return /* @__PURE__ */ B.jsxs("div", { className: "border-b border-slate-700", children: [
    /* @__PURE__ */ B.jsx(
      "div",
      {
        className: "flex items-center gap-3 p-4 hover:bg-slate-800 cursor-pointer",
        onClick: () => E(!x),
        children: /* @__PURE__ */ B.jsxs("div", { className: "flex items-center gap-2", children: [
          x ? /* @__PURE__ */ B.jsx(yD, { className: "w-4 h-4 text-slate-400" }) : /* @__PURE__ */ B.jsx(SD, { className: "w-4 h-4 text-slate-400" }),
          /* @__PURE__ */ B.jsx("div", { className: `w-3 h-8 rounded-sm ${g.color}` }),
          /* @__PURE__ */ B.jsx("span", { className: "font-medium", children: g.name }),
          /* @__PURE__ */ B.jsxs("span", { className: "text-slate-400 text-sm", children: [
            g.count,
            " Tickets"
          ] })
        ] })
      }
    ),
    x && /* @__PURE__ */ B.jsx("div", { children: g.tickets.map((L) => /* @__PURE__ */ B.jsxs(
      "div",
      {
        className: "grid grid-cols-6 gap-4 px-6 py-3 hover:bg-slate-800 border-l-4 border-l-transparent hover:border-l-slate-600",
        children: [
          /* @__PURE__ */ B.jsx("div", {}),
          /* @__PURE__ */ B.jsx("div", { className: "flex items-center", children: L.agent ? /* @__PURE__ */ B.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ B.jsx(zO, { className: "w-6 h-6", children: /* @__PURE__ */ B.jsx(AO, { className: "text-xs bg-slate-600", children: L.agent.split(" ").map((J) => J[0]).join("") }) }),
            /* @__PURE__ */ B.jsx("span", { className: "text-sm", children: L.agent })
          ] }) : /* @__PURE__ */ B.jsx("div", { className: "w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center", children: /* @__PURE__ */ B.jsx(Xb, { className: "w-3 h-3 text-slate-400" }) }) }),
          /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx(
            dc,
            {
              variant: "secondary",
              className: `${N(L.status)} text-white border-none capitalize text-xs`,
              children: L.status.replace("-", " ")
            }
          ) }),
          /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx(
            dc,
            {
              variant: "secondary",
              className: `${P(L.priority)} text-white border-none capitalize text-xs`,
              children: L.priority
            }
          ) }),
          /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx(
            dc,
            {
              variant: "outline",
              className: "bg-red-600 text-white border-red-600 text-xs",
              children: L.creationDate
            }
          ) }),
          /* @__PURE__ */ B.jsx("div", { children: L.resolutionDate ? /* @__PURE__ */ B.jsx(
            dc,
            {
              variant: "outline",
              className: "bg-green-600 text-white border-green-600 text-xs",
              children: L.resolutionDate
            }
          ) : /* @__PURE__ */ B.jsx("div", { className: "w-20 h-6 bg-slate-700 rounded" }) })
        ]
      },
      L.id
    )) })
  ] });
}
const HO = [
  {
    id: "AS",
    name: "AS",
    color: "bg-red-500",
    count: 2,
    tickets: [
      {
        id: 1,
        agent: null,
        status: "open",
        priority: "high",
        creationDate: "May 2, 24",
        resolutionDate: null
      },
      {
        id: 2,
        agent: null,
        status: "pending",
        priority: "medium",
        creationDate: "Apr 28, 24",
        resolutionDate: "May 1, 24"
      }
    ]
  },
  {
    id: "OP",
    name: "OP",
    color: "bg-blue-500",
    count: 1,
    tickets: [
      {
        id: 3,
        agent: "John Doe",
        status: "in-progress",
        priority: "high",
        creationDate: "May 1, 24",
        resolutionDate: null
      }
    ]
  },
  {
    id: "WR",
    name: "WR",
    color: "bg-purple-500",
    count: 1,
    tickets: [
      {
        id: 4,
        agent: "Jane Smith",
        status: "waiting",
        priority: "low",
        creationDate: "Apr 29, 24",
        resolutionDate: null
      }
    ]
  },
  {
    id: "RT",
    name: "RT",
    color: "bg-green-500",
    count: 2,
    tickets: [
      {
        id: 5,
        agent: null,
        status: "resolved",
        priority: "medium",
        creationDate: "Apr 10, 24",
        resolutionDate: "Apr 15, 24"
      },
      {
        id: 6,
        agent: "Mike Johnson",
        status: "closed",
        priority: "low",
        creationDate: "Apr 5, 24",
        resolutionDate: "Apr 7, 24"
      }
    ]
  }
];
function VO() {
  return /* @__PURE__ */ B.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ B.jsx("div", { className: "bg-slate-800 border-b border-slate-700 p-4", children: /* @__PURE__ */ B.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ B.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ B.jsxs(
          or,
          {
            variant: "outline",
            size: "sm",
            className: "bg-slate-700 border-slate-600 text-white hover:bg-slate-600",
            children: [
              /* @__PURE__ */ B.jsx(pv, { className: "w-4 h-4 mr-1" }),
              "New ticket"
            ]
          }
        ),
        /* @__PURE__ */ B.jsxs(
          or,
          {
            variant: "ghost",
            size: "sm",
            className: "text-slate-300 hover:text-white",
            children: [
              /* @__PURE__ */ B.jsx(Kb, { className: "w-4 h-4 mr-1" }),
              "Search"
            ]
          }
        ),
        /* @__PURE__ */ B.jsxs(
          or,
          {
            variant: "ghost",
            size: "sm",
            className: "text-slate-300 hover:text-white",
            children: [
              /* @__PURE__ */ B.jsx(qb, { className: "w-4 h-4 mr-1" }),
              "Filter"
            ]
          }
        ),
        /* @__PURE__ */ B.jsx(
          or,
          {
            variant: "ghost",
            size: "sm",
            className: "text-slate-300 hover:text-white",
            children: "📊 Group by"
          }
        ),
        /* @__PURE__ */ B.jsx(
          or,
          {
            variant: "ghost",
            size: "sm",
            className: "text-slate-300 hover:text-white",
            children: /* @__PURE__ */ B.jsx(U0, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ B.jsx(
        or,
        {
          variant: "ghost",
          size: "sm",
          className: "text-slate-300 hover:text-white",
          children: "⬆"
        }
      )
    ] }) }),
    /* @__PURE__ */ B.jsx("div", { className: "bg-slate-850 border-b border-slate-700 px-6 py-3", children: /* @__PURE__ */ B.jsxs("div", { className: "grid grid-cols-6 gap-4 text-sm text-slate-400", children: [
      /* @__PURE__ */ B.jsx("div", {}),
      /* @__PURE__ */ B.jsx("div", { children: "Agent" }),
      /* @__PURE__ */ B.jsx("div", { children: "Status" }),
      /* @__PURE__ */ B.jsx("div", { children: "Priority" }),
      /* @__PURE__ */ B.jsx("div", { children: "Creation Date" }),
      /* @__PURE__ */ B.jsx("div", { children: "Resolution Date" })
    ] }) }),
    /* @__PURE__ */ B.jsxs("div", { className: "flex-1 overflow-auto", children: [
      HO.map((g) => /* @__PURE__ */ B.jsx(FO, { group: g }, g.id)),
      /* @__PURE__ */ B.jsx("div", { className: "p-4", children: /* @__PURE__ */ B.jsxs(
        or,
        {
          variant: "ghost",
          size: "sm",
          className: "text-slate-400 hover:text-white",
          children: [
            /* @__PURE__ */ B.jsx(pv, { className: "w-4 h-4 mr-2" }),
            "Add new group"
          ]
        }
      ) })
    ] })
  ] });
}
const PO = {
  Reviewed: "bg-slate-500",
  "Awaiting customer": "bg-purple-500",
  Critical: "bg-red-600",
  Removed: "bg-gray-500",
  New: "bg-indigo-500",
  High: "bg-red-500"
};
function BO({ ticket: g }) {
  const x = (E) => PO[E] || "bg-gray-500";
  return /* @__PURE__ */ B.jsxs("div", { className: "bg-slate-700 rounded-lg p-3 border border-slate-600 hover:border-slate-500 transition-colors", children: [
    /* @__PURE__ */ B.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
      /* @__PURE__ */ B.jsx("h4", { className: "text-sm font-medium text-white leading-tight", children: g.title }),
      /* @__PURE__ */ B.jsx(
        or,
        {
          variant: "ghost",
          size: "sm",
          className: "h-6 w-6 p-0 text-slate-400 hover:text-white opacity-0 group-hover:opacity-100",
          children: /* @__PURE__ */ B.jsx(U0, { className: "w-3 h-3" })
        }
      )
    ] }),
    g.description && /* @__PURE__ */ B.jsx("p", { className: "text-xs text-slate-300 mb-3 line-clamp-2", children: g.description }),
    /* @__PURE__ */ B.jsx("div", { className: "flex flex-wrap gap-1 mb-3", children: g.tags.map((E, N) => /* @__PURE__ */ B.jsx(
      dc,
      {
        variant: "secondary",
        className: `${x(E)} text-white border-none text-xs px-2 py-0.5`,
        children: E
      },
      N
    )) }),
    /* @__PURE__ */ B.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ B.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ B.jsx(
        dc,
        {
          variant: "outline",
          className: "bg-red-600 text-white border-red-600 text-xs",
          children: g.creationDate
        }
      ) }),
      /* @__PURE__ */ B.jsxs("div", { className: "flex items-center gap-1 text-slate-400", children: [
        /* @__PURE__ */ B.jsx(
          or,
          {
            variant: "ghost",
            size: "sm",
            className: "h-6 w-6 p-0 text-slate-400 hover:text-white",
            children: /* @__PURE__ */ B.jsx(bD, { className: "w-3 h-3" })
          }
        ),
        /* @__PURE__ */ B.jsx(
          or,
          {
            variant: "ghost",
            size: "sm",
            className: "h-6 w-6 p-0 text-slate-400 hover:text-white",
            children: /* @__PURE__ */ B.jsx(RD, { className: "w-3 h-3" })
          }
        )
      ] })
    ] })
  ] });
}
function $O({ column: g, tickets: x }) {
  return /* @__PURE__ */ B.jsxs("div", { className: "min-w-80 flex flex-col", children: [
    /* @__PURE__ */ B.jsx("div", { className: "bg-slate-800 rounded-t-lg p-3 border border-slate-700", children: /* @__PURE__ */ B.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ B.jsx("div", { className: `w-3 h-6 rounded-sm ${g.color}` }),
      /* @__PURE__ */ B.jsx("span", { className: "font-medium text-white", children: g.title }),
      /* @__PURE__ */ B.jsx("span", { className: "text-slate-400 text-sm", children: x.length })
    ] }) }),
    /* @__PURE__ */ B.jsxs("div", { className: "bg-slate-850 flex-1 border-l border-r border-slate-700 p-2 space-y-3 min-h-96", children: [
      x.map((E) => /* @__PURE__ */ B.jsx(BO, { ticket: E }, E.id)),
      x.length === 0 && /* @__PURE__ */ B.jsx("div", { className: "flex items-center justify-center h-32 text-slate-500 text-sm", children: "No tickets" })
    ] }),
    /* @__PURE__ */ B.jsx("div", { className: "bg-slate-850 rounded-b-lg border border-t-0 border-slate-700 p-2", children: /* @__PURE__ */ B.jsxs(
      or,
      {
        variant: "ghost",
        size: "sm",
        className: "w-full text-slate-400 hover:text-white hover:bg-slate-700",
        children: [
          /* @__PURE__ */ B.jsx(pv, { className: "w-4 h-4 mr-1" }),
          "Add ticket"
        ]
      }
    ) })
  ] });
}
const IO = [
  {
    id: 1,
    title: "Request for access - new employee",
    description: "Hello team, We have a new employee joining our Creative ...",
    agent: null,
    status: "reviewed",
    priority: "medium",
    creationDate: "May 4, 2024",
    resolutionDate: null,
    tags: ["Reviewed"]
  },
  {
    id: 2,
    title: "job issue",
    description: "",
    agent: null,
    status: "reviewed",
    priority: "high",
    creationDate: "Aug 7",
    resolutionDate: null,
    tags: ["Reviewed"]
  },
  {
    id: 3,
    title: "SSO not working after new security audit",
    description: "Our entire team is locked out of our SaaS applications and thinks ...",
    agent: null,
    status: "awaiting-customer",
    priority: "critical",
    creationDate: "Apr 23, 2024",
    resolutionDate: null,
    tags: ["Awaiting customer", "Critical"]
  },
  {
    id: 4,
    title: "I need help with my laptop",
    description: "Hi team! So some reason I can't restart my laptop. The screen just ...",
    agent: null,
    status: "resolved",
    priority: "low",
    creationDate: "Apr 10, 2024",
    resolutionDate: "Apr 15, 2024",
    tags: ["Removed"]
  },
  {
    id: 5,
    title: "rt",
    description: "Help me pls",
    agent: null,
    status: "new",
    priority: "high",
    creationDate: "Critical",
    resolutionDate: null,
    tags: ["New", "High"]
  }
], YO = [
  {
    id: "reviewed",
    title: "Reviewed",
    color: "bg-slate-500",
    count: 2
  },
  {
    id: "awaiting-customer",
    title: "Awaiting customer",
    color: "bg-purple-500",
    count: 1
  },
  {
    id: "need-reply",
    title: "Need reply",
    color: "bg-blue-500",
    count: 0
  },
  {
    id: "resolved",
    title: "Resolved",
    color: "bg-green-500",
    count: 1
  },
  {
    id: "self-resolved",
    title: "Self resolved",
    color: "bg-yellow-500",
    count: 0
  },
  {
    id: "returned",
    title: "Returned",
    color: "bg-cyan-500",
    count: 0
  },
  {
    id: "new",
    title: "New",
    color: "bg-indigo-500",
    count: 1
  }
];
function WO() {
  const g = (x) => IO.filter((E) => E.status === x);
  return /* @__PURE__ */ B.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ B.jsx("div", { className: "bg-slate-800 border-b border-slate-700 p-4", children: /* @__PURE__ */ B.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ B.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ B.jsxs(or, { variant: "ghost", size: "sm", className: "text-slate-300 hover:text-white", children: [
          /* @__PURE__ */ B.jsx(Kb, { className: "w-4 h-4 mr-1" }),
          "Search"
        ] }),
        /* @__PURE__ */ B.jsxs(or, { variant: "ghost", size: "sm", className: "text-slate-300 hover:text-white", children: [
          /* @__PURE__ */ B.jsx(qb, { className: "w-4 h-4 mr-1" }),
          "Filter"
        ] }),
        /* @__PURE__ */ B.jsx(or, { variant: "ghost", size: "sm", className: "text-slate-300 hover:text-white", children: /* @__PURE__ */ B.jsx(U0, { className: "w-4 h-4" }) })
      ] }),
      /* @__PURE__ */ B.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ B.jsx(or, { variant: "ghost", size: "sm", className: "text-slate-300 hover:text-white", children: "📊" }),
        /* @__PURE__ */ B.jsx(or, { variant: "ghost", size: "sm", className: "text-slate-300 hover:text-white", children: "👁️" }),
        /* @__PURE__ */ B.jsx(or, { variant: "ghost", size: "sm", className: "text-slate-300 hover:text-white", children: "⬆" })
      ] })
    ] }) }),
    /* @__PURE__ */ B.jsx("div", { className: "flex-1 overflow-auto", children: /* @__PURE__ */ B.jsxs("div", { className: "flex gap-4 p-4 min-w-max", children: [
      YO.map((x) => /* @__PURE__ */ B.jsx(
        $O,
        {
          column: x,
          tickets: g(x.id)
        },
        x.id
      )),
      /* @__PURE__ */ B.jsx("div", { className: "min-w-80", children: /* @__PURE__ */ B.jsxs(
        or,
        {
          variant: "ghost",
          className: "w-full h-12 border-2 border-dashed border-slate-600 text-slate-400 hover:text-white hover:border-slate-500",
          children: [
            /* @__PURE__ */ B.jsx(pv, { className: "w-4 h-4 mr-2" }),
            "Add folder"
          ]
        }
      ) })
    ] }) })
  ] });
}
function pw() {
  const [g, x] = yt.useState("main-table");
  return /* @__PURE__ */ B.jsxs("div", { className: "it-support-dashboard h-screen bg-slate-900 text-white flex flex-col", children: [
    /* @__PURE__ */ B.jsx(yO, { activeTab: g, onTabChange: x }),
    /* @__PURE__ */ B.jsxs("main", { className: "flex-1 overflow-auto m-5", children: [
      g === "main-table" && /* @__PURE__ */ B.jsx(VO, {}),
      g === "form" && /* @__PURE__ */ B.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ B.jsx("h2", { className: "text-xl mb-4", children: "Form View" }),
        /* @__PURE__ */ B.jsx("p", { className: "text-slate-400", children: "Form view coming soon..." })
      ] }),
      g === "kanban" && /* @__PURE__ */ B.jsx(WO, {})
    ] })
  ] });
}
fD.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ B.jsx(iD.StrictMode, { children: /* @__PURE__ */ B.jsx(pw, {}) })
);
let M0 = null;
function XO(g) {
  M0 || (M0 = Gb.createRoot(g)), M0.render(
    /* @__PURE__ */ B.jsx(yt.StrictMode, { children: /* @__PURE__ */ B.jsx(pw, {}) })
  );
}
export {
  XO as mountReact
};
