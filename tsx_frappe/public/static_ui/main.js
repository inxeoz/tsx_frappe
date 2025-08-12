function Gx(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
var iy = { exports: {} }, uv = {}, ly = { exports: {} }, Ot = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xx;
function iD() {
  if (xx) return Ot;
  xx = 1;
  var y = Symbol.for("react.element"), b = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), Q = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), Z = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), le = Symbol.iterator;
  function $(N) {
    return N === null || typeof N != "object" ? null : (N = le && N[le] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var se = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, G = Object.assign, ee = {};
  function de(N, te, He) {
    this.props = N, this.context = te, this.refs = ee, this.updater = He || se;
  }
  de.prototype.isReactComponent = {}, de.prototype.setState = function(N, te) {
    if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, N, te, "setState");
  }, de.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function qe() {
  }
  qe.prototype = de.prototype;
  function Qe(N, te, He) {
    this.props = N, this.context = te, this.refs = ee, this.updater = He || se;
  }
  var $e = Qe.prototype = new qe();
  $e.constructor = Qe, G($e, de.prototype), $e.isPureReactComponent = !0;
  var Me = Array.isArray, Ye = Object.prototype.hasOwnProperty, ve = { current: null }, Ze = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(N, te, He) {
    var et, rt = {}, yt = null, Lt = null;
    if (te != null) for (et in te.ref !== void 0 && (Lt = te.ref), te.key !== void 0 && (yt = "" + te.key), te) Ye.call(te, et) && !Ze.hasOwnProperty(et) && (rt[et] = te[et]);
    var lt = arguments.length - 2;
    if (lt === 1) rt.children = He;
    else if (1 < lt) {
      for (var kt = Array(lt), Qt = 0; Qt < lt; Qt++) kt[Qt] = arguments[Qt + 2];
      rt.children = kt;
    }
    if (N && N.defaultProps) for (et in lt = N.defaultProps, lt) rt[et] === void 0 && (rt[et] = lt[et]);
    return { $$typeof: y, type: N, key: yt, ref: Lt, props: rt, _owner: ve.current };
  }
  function Vt(N, te) {
    return { $$typeof: y, type: N.type, key: te, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function xt(N) {
    return typeof N == "object" && N !== null && N.$$typeof === y;
  }
  function Nt(N) {
    var te = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(He) {
      return te[He];
    });
  }
  var Ve = /\/+/g;
  function St(N, te) {
    return typeof N == "object" && N !== null && N.key != null ? Nt("" + N.key) : te.toString(36);
  }
  function Ue(N, te, He, et, rt) {
    var yt = typeof N;
    (yt === "undefined" || yt === "boolean") && (N = null);
    var Lt = !1;
    if (N === null) Lt = !0;
    else switch (yt) {
      case "string":
      case "number":
        Lt = !0;
        break;
      case "object":
        switch (N.$$typeof) {
          case y:
          case b:
            Lt = !0;
        }
    }
    if (Lt) return Lt = N, rt = rt(Lt), N = et === "" ? "." + St(Lt, 0) : et, Me(rt) ? (He = "", N != null && (He = N.replace(Ve, "$&/") + "/"), Ue(rt, te, He, "", function(Qt) {
      return Qt;
    })) : rt != null && (xt(rt) && (rt = Vt(rt, He + (!rt.key || Lt && Lt.key === rt.key ? "" : ("" + rt.key).replace(Ve, "$&/") + "/") + N)), te.push(rt)), 1;
    if (Lt = 0, et = et === "" ? "." : et + ":", Me(N)) for (var lt = 0; lt < N.length; lt++) {
      yt = N[lt];
      var kt = et + St(yt, lt);
      Lt += Ue(yt, te, He, kt, rt);
    }
    else if (kt = $(N), typeof kt == "function") for (N = kt.call(N), lt = 0; !(yt = N.next()).done; ) yt = yt.value, kt = et + St(yt, lt++), Lt += Ue(yt, te, He, kt, rt);
    else if (yt === "object") throw te = String(N), Error("Objects are not valid as a React child (found: " + (te === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : te) + "). If you meant to render a collection of children, use an array instead.");
    return Lt;
  }
  function jt(N, te, He) {
    if (N == null) return N;
    var et = [], rt = 0;
    return Ue(N, et, "", "", function(yt) {
      return te.call(He, yt, rt++);
    }), et;
  }
  function pt(N) {
    if (N._status === -1) {
      var te = N._result;
      te = te(), te.then(function(He) {
        (N._status === 0 || N._status === -1) && (N._status = 1, N._result = He);
      }, function(He) {
        (N._status === 0 || N._status === -1) && (N._status = 2, N._result = He);
      }), N._status === -1 && (N._status = 0, N._result = te);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var ct = { current: null }, X = { transition: null }, xe = { ReactCurrentDispatcher: ct, ReactCurrentBatchConfig: X, ReactCurrentOwner: ve };
  function he() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ot.Children = { map: jt, forEach: function(N, te, He) {
    jt(N, function() {
      te.apply(this, arguments);
    }, He);
  }, count: function(N) {
    var te = 0;
    return jt(N, function() {
      te++;
    }), te;
  }, toArray: function(N) {
    return jt(N, function(te) {
      return te;
    }) || [];
  }, only: function(N) {
    if (!xt(N)) throw Error("React.Children.only expected to receive a single React element child.");
    return N;
  } }, Ot.Component = de, Ot.Fragment = E, Ot.Profiler = H, Ot.PureComponent = Qe, Ot.StrictMode = O, Ot.Suspense = ne, Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xe, Ot.act = he, Ot.cloneElement = function(N, te, He) {
    if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var et = G({}, N.props), rt = N.key, yt = N.ref, Lt = N._owner;
    if (te != null) {
      if (te.ref !== void 0 && (yt = te.ref, Lt = ve.current), te.key !== void 0 && (rt = "" + te.key), N.type && N.type.defaultProps) var lt = N.type.defaultProps;
      for (kt in te) Ye.call(te, kt) && !Ze.hasOwnProperty(kt) && (et[kt] = te[kt] === void 0 && lt !== void 0 ? lt[kt] : te[kt]);
    }
    var kt = arguments.length - 2;
    if (kt === 1) et.children = He;
    else if (1 < kt) {
      lt = Array(kt);
      for (var Qt = 0; Qt < kt; Qt++) lt[Qt] = arguments[Qt + 2];
      et.children = lt;
    }
    return { $$typeof: y, type: N.type, key: rt, ref: yt, props: et, _owner: Lt };
  }, Ot.createContext = function(N) {
    return N = { $$typeof: Q, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: L, _context: N }, N.Consumer = N;
  }, Ot.createElement = We, Ot.createFactory = function(N) {
    var te = We.bind(null, N);
    return te.type = N, te;
  }, Ot.createRef = function() {
    return { current: null };
  }, Ot.forwardRef = function(N) {
    return { $$typeof: g, render: N };
  }, Ot.isValidElement = xt, Ot.lazy = function(N) {
    return { $$typeof: J, _payload: { _status: -1, _result: N }, _init: pt };
  }, Ot.memo = function(N, te) {
    return { $$typeof: Z, type: N, compare: te === void 0 ? null : te };
  }, Ot.startTransition = function(N) {
    var te = X.transition;
    X.transition = {};
    try {
      N();
    } finally {
      X.transition = te;
    }
  }, Ot.unstable_act = he, Ot.useCallback = function(N, te) {
    return ct.current.useCallback(N, te);
  }, Ot.useContext = function(N) {
    return ct.current.useContext(N);
  }, Ot.useDebugValue = function() {
  }, Ot.useDeferredValue = function(N) {
    return ct.current.useDeferredValue(N);
  }, Ot.useEffect = function(N, te) {
    return ct.current.useEffect(N, te);
  }, Ot.useId = function() {
    return ct.current.useId();
  }, Ot.useImperativeHandle = function(N, te, He) {
    return ct.current.useImperativeHandle(N, te, He);
  }, Ot.useInsertionEffect = function(N, te) {
    return ct.current.useInsertionEffect(N, te);
  }, Ot.useLayoutEffect = function(N, te) {
    return ct.current.useLayoutEffect(N, te);
  }, Ot.useMemo = function(N, te) {
    return ct.current.useMemo(N, te);
  }, Ot.useReducer = function(N, te, He) {
    return ct.current.useReducer(N, te, He);
  }, Ot.useRef = function(N) {
    return ct.current.useRef(N);
  }, Ot.useState = function(N) {
    return ct.current.useState(N);
  }, Ot.useSyncExternalStore = function(N, te, He) {
    return ct.current.useSyncExternalStore(N, te, He);
  }, Ot.useTransition = function() {
    return ct.current.useTransition();
  }, Ot.version = "18.3.1", Ot;
}
var dv = { exports: {} };
dv.exports;
var wx;
function lD() {
  return wx || (wx = 1, function(y, b) {
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
      var O = "18.3.1", H = Symbol.for("react.element"), L = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), J = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), se = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), de = Symbol.for("react.offscreen"), qe = Symbol.iterator, Qe = "@@iterator";
      function $e(h) {
        if (h === null || typeof h != "object")
          return null;
        var w = qe && h[qe] || h[Qe];
        return typeof w == "function" ? w : null;
      }
      var Me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ye = {
        transition: null
      }, ve = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ze = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, We = {}, Vt = null;
      function xt(h) {
        Vt = h;
      }
      We.setExtraStackFrame = function(h) {
        Vt = h;
      }, We.getCurrentStack = null, We.getStackAddendum = function() {
        var h = "";
        Vt && (h += Vt);
        var w = We.getCurrentStack;
        return w && (h += w() || ""), h;
      };
      var Nt = !1, Ve = !1, St = !1, Ue = !1, jt = !1, pt = {
        ReactCurrentDispatcher: Me,
        ReactCurrentBatchConfig: Ye,
        ReactCurrentOwner: Ze
      };
      pt.ReactDebugCurrentFrame = We, pt.ReactCurrentActQueue = ve;
      function ct(h) {
        {
          for (var w = arguments.length, j = new Array(w > 1 ? w - 1 : 0), I = 1; I < w; I++)
            j[I - 1] = arguments[I];
          xe("warn", h, j);
        }
      }
      function X(h) {
        {
          for (var w = arguments.length, j = new Array(w > 1 ? w - 1 : 0), I = 1; I < w; I++)
            j[I - 1] = arguments[I];
          xe("error", h, j);
        }
      }
      function xe(h, w, j) {
        {
          var I = pt.ReactDebugCurrentFrame, fe = I.getStackAddendum();
          fe !== "" && (w += "%s", j = j.concat([fe]));
          var De = j.map(function(we) {
            return String(we);
          });
          De.unshift("Warning: " + w), Function.prototype.apply.call(console[h], console, De);
        }
      }
      var he = {};
      function N(h, w) {
        {
          var j = h.constructor, I = j && (j.displayName || j.name) || "ReactClass", fe = I + "." + w;
          if (he[fe])
            return;
          X("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, I), he[fe] = !0;
        }
      }
      var te = {
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
          N(h, "forceUpdate");
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
        enqueueReplaceState: function(h, w, j, I) {
          N(h, "replaceState");
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
        enqueueSetState: function(h, w, j, I) {
          N(h, "setState");
        }
      }, He = Object.assign, et = {};
      Object.freeze(et);
      function rt(h, w, j) {
        this.props = h, this.context = w, this.refs = et, this.updater = j || te;
      }
      rt.prototype.isReactComponent = {}, rt.prototype.setState = function(h, w) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, w, "setState");
      }, rt.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var yt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Lt = function(h, w) {
          Object.defineProperty(rt.prototype, h, {
            get: function() {
              ct("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var lt in yt)
          yt.hasOwnProperty(lt) && Lt(lt, yt[lt]);
      }
      function kt() {
      }
      kt.prototype = rt.prototype;
      function Qt(h, w, j) {
        this.props = h, this.context = w, this.refs = et, this.updater = j || te;
      }
      var zn = Qt.prototype = new kt();
      zn.constructor = Qt, He(zn, rt.prototype), zn.isPureReactComponent = !0;
      function Jn() {
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
          return X("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wr(h)), Un(h);
      }
      function Xa(h, w, j) {
        var I = h.displayName;
        if (I)
          return I;
        var fe = w.displayName || w.name || "";
        return fe !== "" ? j + "(" + fe + ")" : j;
      }
      function Mr(h) {
        return h.displayName || "Context";
      }
      function Yn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && X("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Q:
            return "Fragment";
          case L:
            return "Portal";
          case ne:
            return "Profiler";
          case g:
            return "StrictMode";
          case $:
            return "Suspense";
          case se:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case J:
              var w = h;
              return Mr(w) + ".Consumer";
            case Z:
              var j = h;
              return Mr(j._context) + ".Provider";
            case le:
              return Xa(h, h.render, "ForwardRef");
            case G:
              var I = h.displayName || null;
              return I !== null ? I : Yn(h.type) || "Memo";
            case ee: {
              var fe = h, De = fe._payload, we = fe._init;
              try {
                return Yn(we(De));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Zn = Object.prototype.hasOwnProperty, er = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rr, Ja, jn;
      jn = {};
      function sr(h) {
        if (Zn.call(h, "ref")) {
          var w = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function qr(h) {
        if (Zn.call(h, "key")) {
          var w = Object.getOwnPropertyDescriptor(h, "key").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Ai(h, w) {
        var j = function() {
          Rr || (Rr = !0, X("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        j.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: j,
          configurable: !0
        });
      }
      function ma(h, w) {
        var j = function() {
          Ja || (Ja = !0, X("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        j.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: j,
          configurable: !0
        });
      }
      function pe(h) {
        if (typeof h.ref == "string" && Ze.current && h.__self && Ze.current.stateNode !== h.__self) {
          var w = Yn(Ze.current.type);
          jn[w] || (X('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, h.ref), jn[w] = !0);
        }
      }
      var Be = function(h, w, j, I, fe, De, we) {
        var Xe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: H,
          // Built-in properties that belong on the element
          type: h,
          key: w,
          ref: j,
          props: we,
          // Record the component responsible for creating this element.
          _owner: De
        };
        return Xe._store = {}, Object.defineProperty(Xe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Xe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: I
        }), Object.defineProperty(Xe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: fe
        }), Object.freeze && (Object.freeze(Xe.props), Object.freeze(Xe)), Xe;
      };
      function vt(h, w, j) {
        var I, fe = {}, De = null, we = null, Xe = null, mt = null;
        if (w != null) {
          sr(w) && (we = w.ref, pe(w)), qr(w) && (ha(w.key), De = "" + w.key), Xe = w.__self === void 0 ? null : w.__self, mt = w.__source === void 0 ? null : w.__source;
          for (I in w)
            Zn.call(w, I) && !er.hasOwnProperty(I) && (fe[I] = w[I]);
        }
        var Yt = arguments.length - 2;
        if (Yt === 1)
          fe.children = j;
        else if (Yt > 1) {
          for (var en = Array(Yt), tn = 0; tn < Yt; tn++)
            en[tn] = arguments[tn + 2];
          Object.freeze && Object.freeze(en), fe.children = en;
        }
        if (h && h.defaultProps) {
          var ft = h.defaultProps;
          for (I in ft)
            fe[I] === void 0 && (fe[I] = ft[I]);
        }
        if (De || we) {
          var ln = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          De && Ai(fe, ln), we && ma(fe, ln);
        }
        return Be(h, De, we, Xe, mt, Ze.current, fe);
      }
      function Bt(h, w) {
        var j = Be(h.type, w, h.ref, h._self, h._source, h._owner, h.props);
        return j;
      }
      function fn(h, w, j) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var I, fe = He({}, h.props), De = h.key, we = h.ref, Xe = h._self, mt = h._source, Yt = h._owner;
        if (w != null) {
          sr(w) && (we = w.ref, Yt = Ze.current), qr(w) && (ha(w.key), De = "" + w.key);
          var en;
          h.type && h.type.defaultProps && (en = h.type.defaultProps);
          for (I in w)
            Zn.call(w, I) && !er.hasOwnProperty(I) && (w[I] === void 0 && en !== void 0 ? fe[I] = en[I] : fe[I] = w[I]);
        }
        var tn = arguments.length - 2;
        if (tn === 1)
          fe.children = j;
        else if (tn > 1) {
          for (var ft = Array(tn), ln = 0; ln < tn; ln++)
            ft[ln] = arguments[ln + 2];
          fe.children = ft;
        }
        return Be(h.type, De, we, Xe, mt, Yt, fe);
      }
      function dn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === H;
      }
      var pn = ".", tr = ":";
      function sn(h) {
        var w = /[=:]/g, j = {
          "=": "=0",
          ":": "=2"
        }, I = h.replace(w, function(fe) {
          return j[fe];
        });
        return "$" + I;
      }
      var Jt = !1, $t = /\/+/g;
      function ya(h) {
        return h.replace($t, "$&/");
      }
      function Na(h, w) {
        return typeof h == "object" && h !== null && h.key != null ? (ha(h.key), sn("" + h.key)) : w.toString(36);
      }
      function La(h, w, j, I, fe) {
        var De = typeof h;
        (De === "undefined" || De === "boolean") && (h = null);
        var we = !1;
        if (h === null)
          we = !0;
        else
          switch (De) {
            case "string":
            case "number":
              we = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case H:
                case L:
                  we = !0;
              }
          }
        if (we) {
          var Xe = h, mt = fe(Xe), Yt = I === "" ? pn + Na(Xe, 0) : I;
          if (An(mt)) {
            var en = "";
            Yt != null && (en = ya(Yt) + "/"), La(mt, w, en, "", function(sd) {
              return sd;
            });
          } else mt != null && (dn(mt) && (mt.key && (!Xe || Xe.key !== mt.key) && ha(mt.key), mt = Bt(
            mt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            j + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (mt.key && (!Xe || Xe.key !== mt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ya("" + mt.key) + "/"
            ) : "") + Yt
          )), w.push(mt));
          return 1;
        }
        var tn, ft, ln = 0, kn = I === "" ? pn : I + tr;
        if (An(h))
          for (var ro = 0; ro < h.length; ro++)
            tn = h[ro], ft = kn + Na(tn, ro), ln += La(tn, w, j, ft, fe);
        else {
          var ts = $e(h);
          if (typeof ts == "function") {
            var Yi = h;
            ts === Yi.entries && (Jt || ct("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jt = !0);
            for (var ao = ts.call(Yi), ns, ud = 0; !(ns = ao.next()).done; )
              tn = ns.value, ft = kn + Na(tn, ud++), ln += La(tn, w, j, ft, fe);
          } else if (De === "object") {
            var gc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (gc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : gc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ln;
      }
      function Ui(h, w, j) {
        if (h == null)
          return h;
        var I = [], fe = 0;
        return La(h, I, "", "", function(De) {
          return w.call(j, De, fe++);
        }), I;
      }
      function ql(h) {
        var w = 0;
        return Ui(h, function() {
          w++;
        }), w;
      }
      function Kl(h, w, j) {
        Ui(h, function() {
          w.apply(this, arguments);
        }, j);
      }
      function ji(h) {
        return Ui(h, function(w) {
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
          $$typeof: J,
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
        var j = !1, I = !1, fe = !1;
        {
          var De = {
            $$typeof: J,
            _context: w
          };
          Object.defineProperties(De, {
            Provider: {
              get: function() {
                return I || (I = !0, X("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(we) {
                w.Provider = we;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(we) {
                w._currentValue = we;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(we) {
                w._currentValue2 = we;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(we) {
                w._threadCount = we;
              }
            },
            Consumer: {
              get: function() {
                return j || (j = !0, X("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(we) {
                fe || (ct("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", we), fe = !0);
              }
            }
          }), w.Consumer = De;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var ga = -1, cr = 0, Sa = 1, Kr = 2;
      function pi(h) {
        if (h._status === ga) {
          var w = h._result, j = w();
          if (j.then(function(De) {
            if (h._status === cr || h._status === ga) {
              var we = h;
              we._status = Sa, we._result = De;
            }
          }, function(De) {
            if (h._status === cr || h._status === ga) {
              var we = h;
              we._status = Kr, we._result = De;
            }
          }), h._status === ga) {
            var I = h;
            I._status = cr, I._result = j;
          }
        }
        if (h._status === Sa) {
          var fe = h._result;
          return fe === void 0 && X(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, fe), "default" in fe || X(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, fe), fe.default;
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
          var I, fe;
          Object.defineProperties(j, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return I;
              },
              set: function(De) {
                X("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), I = De, Object.defineProperty(j, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return fe;
              },
              set: function(De) {
                X("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), fe = De, Object.defineProperty(j, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return j;
      }
      function Fi(h) {
        h != null && h.$$typeof === G ? X("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? X("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && X("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && X("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: le,
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
            set: function(I) {
              j = I, !h.name && !h.displayName && (h.displayName = I);
            }
          });
        }
        return w;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function re(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Q || h === ne || jt || h === g || h === $ || h === se || Ue || h === de || Nt || Ve || St || typeof h == "object" && h !== null && (h.$$typeof === ee || h.$$typeof === G || h.$$typeof === Z || h.$$typeof === J || h.$$typeof === le || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ge(h, w) {
        re(h) || X("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var j = {
          $$typeof: G,
          type: h,
          compare: w === void 0 ? null : w
        };
        {
          var I;
          Object.defineProperty(j, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return I;
            },
            set: function(fe) {
              I = fe, !h.name && !h.displayName && (h.displayName = fe);
            }
          });
        }
        return j;
      }
      function Ee() {
        var h = Me.current;
        return h === null && X(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Et(h) {
        var w = Ee();
        if (h._context !== void 0) {
          var j = h._context;
          j.Consumer === h ? X("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : j.Provider === h && X("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(h);
      }
      function at(h) {
        var w = Ee();
        return w.useState(h);
      }
      function wt(h, w, j) {
        var I = Ee();
        return I.useReducer(h, w, j);
      }
      function ht(h) {
        var w = Ee();
        return w.useRef(h);
      }
      function _n(h, w) {
        var j = Ee();
        return j.useEffect(h, w);
      }
      function cn(h, w) {
        var j = Ee();
        return j.useInsertionEffect(h, w);
      }
      function vn(h, w) {
        var j = Ee();
        return j.useLayoutEffect(h, w);
      }
      function Tr(h, w) {
        var j = Ee();
        return j.useCallback(h, w);
      }
      function Za(h, w) {
        var j = Ee();
        return j.useMemo(h, w);
      }
      function It(h, w, j) {
        var I = Ee();
        return I.useImperativeHandle(h, w, j);
      }
      function yn(h, w) {
        {
          var j = Ee();
          return j.useDebugValue(h, w);
        }
      }
      function ut() {
        var h = Ee();
        return h.useTransition();
      }
      function hi(h) {
        var w = Ee();
        return w.useDeferredValue(h);
      }
      function Hi() {
        var h = Ee();
        return h.useId();
      }
      function vc(h, w, j) {
        var I = Ee();
        return I.useSyncExternalStore(h, w, j);
      }
      var Pi = 0, fl, Xr, qu, zr, Ku, hc, mc;
      function Vi() {
      }
      Vi.__reactDisabledLog = !0;
      function dl() {
        {
          if (Pi === 0) {
            fl = console.log, Xr = console.info, qu = console.warn, zr = console.error, Ku = console.group, hc = console.groupCollapsed, mc = console.groupEnd;
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
          Pi++;
        }
      }
      function Jr() {
        {
          if (Pi--, Pi === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: He({}, h, {
                value: fl
              }),
              info: He({}, h, {
                value: Xr
              }),
              warn: He({}, h, {
                value: qu
              }),
              error: He({}, h, {
                value: zr
              }),
              group: He({}, h, {
                value: Ku
              }),
              groupCollapsed: He({}, h, {
                value: hc
              }),
              groupEnd: He({}, h, {
                value: mc
              })
            });
          }
          Pi < 0 && X("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var mi = pt.ReactCurrentDispatcher, pl;
      function Io(h, w, j) {
        {
          if (pl === void 0)
            try {
              throw Error();
            } catch (fe) {
              var I = fe.stack.trim().match(/\n( *(at )?)/);
              pl = I && I[1] || "";
            }
          return `
` + pl + h;
        }
      }
      var Bi = !1, Jl;
      {
        var Zl = typeof WeakMap == "function" ? WeakMap : Map;
        Jl = new Zl();
      }
      function vl(h, w) {
        if (!h || Bi)
          return "";
        {
          var j = Jl.get(h);
          if (j !== void 0)
            return j;
        }
        var I;
        Bi = !0;
        var fe = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var De;
        De = mi.current, mi.current = null, dl();
        try {
          if (w) {
            var we = function() {
              throw Error();
            };
            if (Object.defineProperty(we.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(we, []);
              } catch (kn) {
                I = kn;
              }
              Reflect.construct(h, [], we);
            } else {
              try {
                we.call();
              } catch (kn) {
                I = kn;
              }
              h.call(we.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (kn) {
              I = kn;
            }
            h();
          }
        } catch (kn) {
          if (kn && I && typeof kn.stack == "string") {
            for (var Xe = kn.stack.split(`
`), mt = I.stack.split(`
`), Yt = Xe.length - 1, en = mt.length - 1; Yt >= 1 && en >= 0 && Xe[Yt] !== mt[en]; )
              en--;
            for (; Yt >= 1 && en >= 0; Yt--, en--)
              if (Xe[Yt] !== mt[en]) {
                if (Yt !== 1 || en !== 1)
                  do
                    if (Yt--, en--, en < 0 || Xe[Yt] !== mt[en]) {
                      var tn = `
` + Xe[Yt].replace(" at new ", " at ");
                      return h.displayName && tn.includes("<anonymous>") && (tn = tn.replace("<anonymous>", h.displayName)), typeof h == "function" && Jl.set(h, tn), tn;
                    }
                  while (Yt >= 1 && en >= 0);
                break;
              }
          }
        } finally {
          Bi = !1, mi.current = De, Jr(), Error.prepareStackTrace = fe;
        }
        var ft = h ? h.displayName || h.name : "", ln = ft ? Io(ft) : "";
        return typeof h == "function" && Jl.set(h, ln), ln;
      }
      function Xu(h, w, j) {
        return vl(h, !1);
      }
      function Ju(h) {
        var w = h.prototype;
        return !!(w && w.isReactComponent);
      }
      function Mt(h, w, j) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return vl(h, Ju(h));
        if (typeof h == "string")
          return Io(h);
        switch (h) {
          case $:
            return Io("Suspense");
          case se:
            return Io("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case le:
              return Xu(h.render);
            case G:
              return Mt(h.type, w, j);
            case ee: {
              var I = h, fe = I._payload, De = I._init;
              try {
                return Mt(De(fe), w, j);
              } catch {
              }
            }
          }
        return "";
      }
      var Zu = {}, Yo = pt.ReactDebugCurrentFrame;
      function zt(h) {
        if (h) {
          var w = h._owner, j = Mt(h.type, h._source, w ? w.type : null);
          Yo.setExtraStackFrame(j);
        } else
          Yo.setExtraStackFrame(null);
      }
      function yc(h, w, j, I, fe) {
        {
          var De = Function.call.bind(Zn);
          for (var we in h)
            if (De(h, we)) {
              var Xe = void 0;
              try {
                if (typeof h[we] != "function") {
                  var mt = Error((I || "React class") + ": " + j + " type `" + we + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[we] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw mt.name = "Invariant Violation", mt;
                }
                Xe = h[we](w, we, I, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Yt) {
                Xe = Yt;
              }
              Xe && !(Xe instanceof Error) && (zt(fe), X("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", j, we, typeof Xe), zt(null)), Xe instanceof Error && !(Xe.message in Zu) && (Zu[Xe.message] = !0, zt(fe), X("Failed %s type: %s", j, Xe.message), zt(null));
            }
        }
      }
      function yi(h) {
        if (h) {
          var w = h._owner, j = Mt(h.type, h._source, w ? w.type : null);
          xt(j);
        } else
          xt(null);
      }
      var tt;
      tt = !1;
      function eo() {
        if (Ze.current) {
          var h = Yn(Ze.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function nr(h) {
        if (h !== void 0) {
          var w = h.fileName.replace(/^.*[\\\/]/, ""), j = h.lineNumber;
          return `

Check your code at ` + w + ":" + j + ".";
        }
        return "";
      }
      function Zr(h) {
        return h != null ? nr(h.__source) : "";
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
      function xn(h, w) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var j = gi(w);
          if (!Ar[j]) {
            Ar[j] = !0;
            var I = "";
            h && h._owner && h._owner !== Ze.current && (I = " It was passed a child from " + Yn(h._owner.type) + "."), yi(h), X('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, I), yi(null);
          }
        }
      }
      function Zt(h, w) {
        if (typeof h == "object") {
          if (An(h))
            for (var j = 0; j < h.length; j++) {
              var I = h[j];
              dn(I) && xn(I, w);
            }
          else if (dn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var fe = $e(h);
            if (typeof fe == "function" && fe !== h.entries)
              for (var De = fe.call(h), we; !(we = De.next()).done; )
                dn(we.value) && xn(we.value, w);
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
          else if (typeof w == "object" && (w.$$typeof === le || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === G))
            j = w.propTypes;
          else
            return;
          if (j) {
            var I = Yn(w);
            yc(j, h.props, "prop", I, h);
          } else if (w.PropTypes !== void 0 && !tt) {
            tt = !0;
            var fe = Yn(w);
            X("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
          }
          typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && X("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ma(h) {
        {
          for (var w = Object.keys(h.props), j = 0; j < w.length; j++) {
            var I = w[j];
            if (I !== "children" && I !== "key") {
              yi(h), X("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), yi(null);
              break;
            }
          }
          h.ref !== null && (yi(h), X("Invalid attribute `ref` supplied to `React.Fragment`."), yi(null));
        }
      }
      function _r(h, w, j) {
        var I = re(h);
        if (!I) {
          var fe = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var De = Zr(w);
          De ? fe += De : fe += eo();
          var we;
          h === null ? we = "null" : An(h) ? we = "array" : h !== void 0 && h.$$typeof === H ? (we = "<" + (Yn(h.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : we = typeof h, X("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", we, fe);
        }
        var Xe = vt.apply(this, arguments);
        if (Xe == null)
          return Xe;
        if (I)
          for (var mt = 2; mt < arguments.length; mt++)
            Zt(arguments[mt], h);
        return h === Q ? Ma(Xe) : ei(Xe), Xe;
      }
      var Ur = !1;
      function od(h) {
        var w = _r.bind(null, h);
        return w.type = h, Ur || (Ur = !0, ct("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return ct("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), w;
      }
      function Wo(h, w, j) {
        for (var I = fn.apply(this, arguments), fe = 2; fe < arguments.length; fe++)
          Zt(arguments[fe], I.type);
        return ei(I), I;
      }
      function to(h, w) {
        var j = Ye.transition;
        Ye.transition = {};
        var I = Ye.transition;
        Ye.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Ye.transition = j, j === null && I._updatedFibers) {
            var fe = I._updatedFibers.size;
            fe > 10 && ct("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), I._updatedFibers.clear();
          }
        }
      }
      var Go = !1, Qo = null;
      function no(h) {
        if (Qo === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), j = y && y[w];
            Qo = j.call(y, "timers").setImmediate;
          } catch {
            Qo = function(fe) {
              Go === !1 && (Go = !0, typeof MessageChannel > "u" && X("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var De = new MessageChannel();
              De.port1.onmessage = fe, De.port2.postMessage(void 0);
            };
          }
        return Qo(h);
      }
      var za = 0, Aa = !1;
      function hl(h) {
        {
          var w = za;
          za++, ve.current === null && (ve.current = []);
          var j = ve.isBatchingLegacy, I;
          try {
            if (ve.isBatchingLegacy = !0, I = h(), !j && ve.didScheduleLegacyUpdate) {
              var fe = ve.current;
              fe !== null && (ve.didScheduleLegacyUpdate = !1, Ii(fe));
            }
          } catch (ft) {
            throw $i(w), ft;
          } finally {
            ve.isBatchingLegacy = j;
          }
          if (I !== null && typeof I == "object" && typeof I.then == "function") {
            var De = I, we = !1, Xe = {
              then: function(ft, ln) {
                we = !0, De.then(function(kn) {
                  $i(w), za === 0 ? qo(kn, ft, ln) : ft(kn);
                }, function(kn) {
                  $i(w), ln(kn);
                });
              }
            };
            return !Aa && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              we || (Aa = !0, X("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Xe;
          } else {
            var mt = I;
            if ($i(w), za === 0) {
              var Yt = ve.current;
              Yt !== null && (Ii(Yt), ve.current = null);
              var en = {
                then: function(ft, ln) {
                  ve.current === null ? (ve.current = [], qo(mt, ft, ln)) : ft(mt);
                }
              };
              return en;
            } else {
              var tn = {
                then: function(ft, ln) {
                  ft(mt);
                }
              };
              return tn;
            }
          }
        }
      }
      function $i(h) {
        h !== za - 1 && X("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), za = h;
      }
      function qo(h, w, j) {
        {
          var I = ve.current;
          if (I !== null)
            try {
              Ii(I), no(function() {
                I.length === 0 ? (ve.current = null, w(h)) : qo(h, w, j);
              });
            } catch (fe) {
              j(fe);
            }
          else
            w(h);
        }
      }
      var ml = !1;
      function Ii(h) {
        if (!ml) {
          ml = !0;
          var w = 0;
          try {
            for (; w < h.length; w++) {
              var j = h[w];
              do
                j = j(!0);
              while (j !== null);
            }
            h.length = 0;
          } catch (I) {
            throw h = h.slice(w + 1), I;
          } finally {
            ml = !1;
          }
        }
      }
      var Ko = _r, es = Wo, Ua = od, Xo = {
        map: Ui,
        forEach: Kl,
        count: ql,
        toArray: ji,
        only: Xl
      };
      b.Children = Xo, b.Component = rt, b.Fragment = Q, b.Profiler = ne, b.PureComponent = Qt, b.StrictMode = g, b.Suspense = $, b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pt, b.act = hl, b.cloneElement = es, b.createContext = di, b.createElement = Ko, b.createFactory = Ua, b.createRef = Jn, b.forwardRef = Fi, b.isValidElement = dn, b.lazy = vi, b.memo = ge, b.startTransition = to, b.unstable_act = hl, b.useCallback = Tr, b.useContext = Et, b.useDebugValue = yn, b.useDeferredValue = hi, b.useEffect = _n, b.useId = Hi, b.useImperativeHandle = It, b.useInsertionEffect = cn, b.useLayoutEffect = vn, b.useMemo = Za, b.useReducer = wt, b.useRef = ht, b.useState = at, b.useSyncExternalStore = vc, b.useTransition = ut, b.version = O, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(dv, dv.exports)), dv.exports;
}
var Rx;
function pc() {
  if (Rx) return ly.exports;
  Rx = 1;
  var y = {};
  return y.NODE_ENV === "production" ? ly.exports = iD() : ly.exports = lD(), ly.exports;
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
var Tx;
function oD() {
  if (Tx) return uv;
  Tx = 1;
  var y = pc(), b = Symbol.for("react.element"), E = Symbol.for("react.fragment"), O = Object.prototype.hasOwnProperty, H = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, L = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Q(g, ne, Z) {
    var J, le = {}, $ = null, se = null;
    Z !== void 0 && ($ = "" + Z), ne.key !== void 0 && ($ = "" + ne.key), ne.ref !== void 0 && (se = ne.ref);
    for (J in ne) O.call(ne, J) && !L.hasOwnProperty(J) && (le[J] = ne[J]);
    if (g && g.defaultProps) for (J in ne = g.defaultProps, ne) le[J] === void 0 && (le[J] = ne[J]);
    return { $$typeof: b, type: g, key: $, ref: se, props: le, _owner: H.current };
  }
  return uv.Fragment = E, uv.jsx = Q, uv.jsxs = Q, uv;
}
var sv = {}, _x;
function uD() {
  if (_x) return sv;
  _x = 1;
  var y = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return y.NODE_ENV !== "production" && function() {
    var b = pc(), E = Symbol.for("react.element"), O = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), ne = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), ee = Symbol.iterator, de = "@@iterator";
    function qe(R) {
      if (R === null || typeof R != "object")
        return null;
      var re = ee && R[ee] || R[de];
      return typeof re == "function" ? re : null;
    }
    var Qe = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $e(R) {
      {
        for (var re = arguments.length, ge = new Array(re > 1 ? re - 1 : 0), Ee = 1; Ee < re; Ee++)
          ge[Ee - 1] = arguments[Ee];
        Me("error", R, ge);
      }
    }
    function Me(R, re, ge) {
      {
        var Ee = Qe.ReactDebugCurrentFrame, Et = Ee.getStackAddendum();
        Et !== "" && (re += "%s", ge = ge.concat([Et]));
        var at = ge.map(function(wt) {
          return String(wt);
        });
        at.unshift("Warning: " + re), Function.prototype.apply.call(console[R], console, at);
      }
    }
    var Ye = !1, ve = !1, Ze = !1, We = !1, Vt = !1, xt;
    xt = Symbol.for("react.module.reference");
    function Nt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === H || R === Q || Vt || R === L || R === J || R === le || We || R === G || Ye || ve || Ze || typeof R == "object" && R !== null && (R.$$typeof === se || R.$$typeof === $ || R.$$typeof === g || R.$$typeof === ne || R.$$typeof === Z || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === xt || R.getModuleId !== void 0));
    }
    function Ve(R, re, ge) {
      var Ee = R.displayName;
      if (Ee)
        return Ee;
      var Et = re.displayName || re.name || "";
      return Et !== "" ? ge + "(" + Et + ")" : ge;
    }
    function St(R) {
      return R.displayName || "Context";
    }
    function Ue(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && $e("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case H:
          return "Fragment";
        case O:
          return "Portal";
        case Q:
          return "Profiler";
        case L:
          return "StrictMode";
        case J:
          return "Suspense";
        case le:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ne:
            var re = R;
            return St(re) + ".Consumer";
          case g:
            var ge = R;
            return St(ge._context) + ".Provider";
          case Z:
            return Ve(R, R.render, "ForwardRef");
          case $:
            var Ee = R.displayName || null;
            return Ee !== null ? Ee : Ue(R.type) || "Memo";
          case se: {
            var Et = R, at = Et._payload, wt = Et._init;
            try {
              return Ue(wt(at));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var jt = Object.assign, pt = 0, ct, X, xe, he, N, te, He;
    function et() {
    }
    et.__reactDisabledLog = !0;
    function rt() {
      {
        if (pt === 0) {
          ct = console.log, X = console.info, xe = console.warn, he = console.error, N = console.group, te = console.groupCollapsed, He = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: et,
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
        pt++;
      }
    }
    function yt() {
      {
        if (pt--, pt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, R, {
              value: ct
            }),
            info: jt({}, R, {
              value: X
            }),
            warn: jt({}, R, {
              value: xe
            }),
            error: jt({}, R, {
              value: he
            }),
            group: jt({}, R, {
              value: N
            }),
            groupCollapsed: jt({}, R, {
              value: te
            }),
            groupEnd: jt({}, R, {
              value: He
            })
          });
        }
        pt < 0 && $e("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Lt = Qe.ReactCurrentDispatcher, lt;
    function kt(R, re, ge) {
      {
        if (lt === void 0)
          try {
            throw Error();
          } catch (Et) {
            var Ee = Et.stack.trim().match(/\n( *(at )?)/);
            lt = Ee && Ee[1] || "";
          }
        return `
` + lt + R;
      }
    }
    var Qt = !1, zn;
    {
      var Jn = typeof WeakMap == "function" ? WeakMap : Map;
      zn = new Jn();
    }
    function ur(R, re) {
      if (!R || Qt)
        return "";
      {
        var ge = zn.get(R);
        if (ge !== void 0)
          return ge;
      }
      var Ee;
      Qt = !0;
      var Et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var at;
      at = Lt.current, Lt.current = null, rt();
      try {
        if (re) {
          var wt = function() {
            throw Error();
          };
          if (Object.defineProperty(wt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(wt, []);
            } catch (yn) {
              Ee = yn;
            }
            Reflect.construct(R, [], wt);
          } else {
            try {
              wt.call();
            } catch (yn) {
              Ee = yn;
            }
            R.call(wt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (yn) {
            Ee = yn;
          }
          R();
        }
      } catch (yn) {
        if (yn && Ee && typeof yn.stack == "string") {
          for (var ht = yn.stack.split(`
`), _n = Ee.stack.split(`
`), cn = ht.length - 1, vn = _n.length - 1; cn >= 1 && vn >= 0 && ht[cn] !== _n[vn]; )
            vn--;
          for (; cn >= 1 && vn >= 0; cn--, vn--)
            if (ht[cn] !== _n[vn]) {
              if (cn !== 1 || vn !== 1)
                do
                  if (cn--, vn--, vn < 0 || ht[cn] !== _n[vn]) {
                    var Tr = `
` + ht[cn].replace(" at new ", " at ");
                    return R.displayName && Tr.includes("<anonymous>") && (Tr = Tr.replace("<anonymous>", R.displayName)), typeof R == "function" && zn.set(R, Tr), Tr;
                  }
                while (cn >= 1 && vn >= 0);
              break;
            }
        }
      } finally {
        Qt = !1, Lt.current = at, yt(), Error.prepareStackTrace = Et;
      }
      var Za = R ? R.displayName || R.name : "", It = Za ? kt(Za) : "";
      return typeof R == "function" && zn.set(R, It), It;
    }
    function An(R, re, ge) {
      return ur(R, !1);
    }
    function wr(R) {
      var re = R.prototype;
      return !!(re && re.isReactComponent);
    }
    function In(R, re, ge) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return ur(R, wr(R));
      if (typeof R == "string")
        return kt(R);
      switch (R) {
        case J:
          return kt("Suspense");
        case le:
          return kt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Z:
            return An(R.render);
          case $:
            return In(R.type, re, ge);
          case se: {
            var Ee = R, Et = Ee._payload, at = Ee._init;
            try {
              return In(at(Et), re, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var Un = Object.prototype.hasOwnProperty, ha = {}, Xa = Qe.ReactDebugCurrentFrame;
    function Mr(R) {
      if (R) {
        var re = R._owner, ge = In(R.type, R._source, re ? re.type : null);
        Xa.setExtraStackFrame(ge);
      } else
        Xa.setExtraStackFrame(null);
    }
    function Yn(R, re, ge, Ee, Et) {
      {
        var at = Function.call.bind(Un);
        for (var wt in R)
          if (at(R, wt)) {
            var ht = void 0;
            try {
              if (typeof R[wt] != "function") {
                var _n = Error((Ee || "React class") + ": " + ge + " type `" + wt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[wt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _n.name = "Invariant Violation", _n;
              }
              ht = R[wt](re, wt, Ee, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (cn) {
              ht = cn;
            }
            ht && !(ht instanceof Error) && (Mr(Et), $e("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ee || "React class", ge, wt, typeof ht), Mr(null)), ht instanceof Error && !(ht.message in ha) && (ha[ht.message] = !0, Mr(Et), $e("Failed %s type: %s", ge, ht.message), Mr(null));
          }
      }
    }
    var Zn = Array.isArray;
    function er(R) {
      return Zn(R);
    }
    function Rr(R) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, ge = re && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ge;
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
        return $e("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(R)), jn(R);
    }
    var qr = Qe.ReactCurrentOwner, Ai = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ma, pe;
    function Be(R) {
      if (Un.call(R, "ref")) {
        var re = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function vt(R) {
      if (Un.call(R, "key")) {
        var re = Object.getOwnPropertyDescriptor(R, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Bt(R, re) {
      typeof R.ref == "string" && qr.current;
    }
    function fn(R, re) {
      {
        var ge = function() {
          ma || (ma = !0, $e("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        ge.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ge,
          configurable: !0
        });
      }
    }
    function dn(R, re) {
      {
        var ge = function() {
          pe || (pe = !0, $e("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        ge.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var pn = function(R, re, ge, Ee, Et, at, wt) {
      var ht = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: R,
        key: re,
        ref: ge,
        props: wt,
        // Record the component responsible for creating this element.
        _owner: at
      };
      return ht._store = {}, Object.defineProperty(ht._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ht, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ee
      }), Object.defineProperty(ht, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Et
      }), Object.freeze && (Object.freeze(ht.props), Object.freeze(ht)), ht;
    };
    function tr(R, re, ge, Ee, Et) {
      {
        var at, wt = {}, ht = null, _n = null;
        ge !== void 0 && (sr(ge), ht = "" + ge), vt(re) && (sr(re.key), ht = "" + re.key), Be(re) && (_n = re.ref, Bt(re, Et));
        for (at in re)
          Un.call(re, at) && !Ai.hasOwnProperty(at) && (wt[at] = re[at]);
        if (R && R.defaultProps) {
          var cn = R.defaultProps;
          for (at in cn)
            wt[at] === void 0 && (wt[at] = cn[at]);
        }
        if (ht || _n) {
          var vn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ht && fn(wt, vn), _n && dn(wt, vn);
        }
        return pn(R, ht, _n, Et, Ee, qr.current, wt);
      }
    }
    var sn = Qe.ReactCurrentOwner, Jt = Qe.ReactDebugCurrentFrame;
    function $t(R) {
      if (R) {
        var re = R._owner, ge = In(R.type, R._source, re ? re.type : null);
        Jt.setExtraStackFrame(ge);
      } else
        Jt.setExtraStackFrame(null);
    }
    var ya;
    ya = !1;
    function Na(R) {
      return typeof R == "object" && R !== null && R.$$typeof === E;
    }
    function La() {
      {
        if (sn.current) {
          var R = Ue(sn.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Ui(R) {
      return "";
    }
    var ql = {};
    function Kl(R) {
      {
        var re = La();
        if (!re) {
          var ge = typeof R == "string" ? R : R.displayName || R.name;
          ge && (re = `

Check the top-level render call using <` + ge + ">.");
        }
        return re;
      }
    }
    function ji(R, re) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ge = Kl(re);
        if (ql[ge])
          return;
        ql[ge] = !0;
        var Ee = "";
        R && R._owner && R._owner !== sn.current && (Ee = " It was passed a child from " + Ue(R._owner.type) + "."), $t(R), $e('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, Ee), $t(null);
      }
    }
    function Xl(R, re) {
      {
        if (typeof R != "object")
          return;
        if (er(R))
          for (var ge = 0; ge < R.length; ge++) {
            var Ee = R[ge];
            Na(Ee) && ji(Ee, re);
          }
        else if (Na(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Et = qe(R);
          if (typeof Et == "function" && Et !== R.entries)
            for (var at = Et.call(R), wt; !(wt = at.next()).done; )
              Na(wt.value) && ji(wt.value, re);
        }
      }
    }
    function di(R) {
      {
        var re = R.type;
        if (re == null || typeof re == "string")
          return;
        var ge;
        if (typeof re == "function")
          ge = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === Z || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === $))
          ge = re.propTypes;
        else
          return;
        if (ge) {
          var Ee = Ue(re);
          Yn(ge, R.props, "prop", Ee, R);
        } else if (re.PropTypes !== void 0 && !ya) {
          ya = !0;
          var Et = Ue(re);
          $e("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Et || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && $e("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ga(R) {
      {
        for (var re = Object.keys(R.props), ge = 0; ge < re.length; ge++) {
          var Ee = re[ge];
          if (Ee !== "children" && Ee !== "key") {
            $t(R), $e("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ee), $t(null);
            break;
          }
        }
        R.ref !== null && ($t(R), $e("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    var cr = {};
    function Sa(R, re, ge, Ee, Et, at) {
      {
        var wt = Nt(R);
        if (!wt) {
          var ht = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ht += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _n = Ui();
          _n ? ht += _n : ht += La();
          var cn;
          R === null ? cn = "null" : er(R) ? cn = "array" : R !== void 0 && R.$$typeof === E ? (cn = "<" + (Ue(R.type) || "Unknown") + " />", ht = " Did you accidentally export a JSX literal instead of a component?") : cn = typeof R, $e("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", cn, ht);
        }
        var vn = tr(R, re, ge, Et, at);
        if (vn == null)
          return vn;
        if (wt) {
          var Tr = re.children;
          if (Tr !== void 0)
            if (Ee)
              if (er(Tr)) {
                for (var Za = 0; Za < Tr.length; Za++)
                  Xl(Tr[Za], R);
                Object.freeze && Object.freeze(Tr);
              } else
                $e("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xl(Tr, R);
        }
        if (Un.call(re, "key")) {
          var It = Ue(R), yn = Object.keys(re).filter(function(Hi) {
            return Hi !== "key";
          }), ut = yn.length > 0 ? "{key: someKey, " + yn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!cr[It + ut]) {
            var hi = yn.length > 0 ? "{" + yn.join(": ..., ") + ": ...}" : "{}";
            $e(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ut, It, hi, It), cr[It + ut] = !0;
          }
        }
        return R === H ? ga(vn) : di(vn), vn;
      }
    }
    function Kr(R, re, ge) {
      return Sa(R, re, ge, !0);
    }
    function pi(R, re, ge) {
      return Sa(R, re, ge, !1);
    }
    var vi = pi, Fi = Kr;
    sv.Fragment = H, sv.jsx = vi, sv.jsxs = Fi;
  }(), sv;
}
var kx;
function sD() {
  if (kx) return iy.exports;
  kx = 1;
  var y = {};
  return y.NODE_ENV === "production" ? iy.exports = oD() : iy.exports = uD(), iy.exports;
}
var V = sD(), Ae = pc();
const cD = /* @__PURE__ */ Gx(Ae);
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
var Dx;
function fD() {
  return Dx || (Dx = 1, function(y) {
    function b(X, xe) {
      var he = X.length;
      X.push(xe);
      e: for (; 0 < he; ) {
        var N = he - 1 >>> 1, te = X[N];
        if (0 < H(te, xe)) X[N] = xe, X[he] = te, he = N;
        else break e;
      }
    }
    function E(X) {
      return X.length === 0 ? null : X[0];
    }
    function O(X) {
      if (X.length === 0) return null;
      var xe = X[0], he = X.pop();
      if (he !== xe) {
        X[0] = he;
        e: for (var N = 0, te = X.length, He = te >>> 1; N < He; ) {
          var et = 2 * (N + 1) - 1, rt = X[et], yt = et + 1, Lt = X[yt];
          if (0 > H(rt, he)) yt < te && 0 > H(Lt, rt) ? (X[N] = Lt, X[yt] = he, N = yt) : (X[N] = rt, X[et] = he, N = et);
          else if (yt < te && 0 > H(Lt, he)) X[N] = Lt, X[yt] = he, N = yt;
          else break e;
        }
      }
      return xe;
    }
    function H(X, xe) {
      var he = X.sortIndex - xe.sortIndex;
      return he !== 0 ? he : X.id - xe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var L = performance;
      y.unstable_now = function() {
        return L.now();
      };
    } else {
      var Q = Date, g = Q.now();
      y.unstable_now = function() {
        return Q.now() - g;
      };
    }
    var ne = [], Z = [], J = 1, le = null, $ = 3, se = !1, G = !1, ee = !1, de = typeof setTimeout == "function" ? setTimeout : null, qe = typeof clearTimeout == "function" ? clearTimeout : null, Qe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function $e(X) {
      for (var xe = E(Z); xe !== null; ) {
        if (xe.callback === null) O(Z);
        else if (xe.startTime <= X) O(Z), xe.sortIndex = xe.expirationTime, b(ne, xe);
        else break;
        xe = E(Z);
      }
    }
    function Me(X) {
      if (ee = !1, $e(X), !G) if (E(ne) !== null) G = !0, pt(Ye);
      else {
        var xe = E(Z);
        xe !== null && ct(Me, xe.startTime - X);
      }
    }
    function Ye(X, xe) {
      G = !1, ee && (ee = !1, qe(We), We = -1), se = !0;
      var he = $;
      try {
        for ($e(xe), le = E(ne); le !== null && (!(le.expirationTime > xe) || X && !Nt()); ) {
          var N = le.callback;
          if (typeof N == "function") {
            le.callback = null, $ = le.priorityLevel;
            var te = N(le.expirationTime <= xe);
            xe = y.unstable_now(), typeof te == "function" ? le.callback = te : le === E(ne) && O(ne), $e(xe);
          } else O(ne);
          le = E(ne);
        }
        if (le !== null) var He = !0;
        else {
          var et = E(Z);
          et !== null && ct(Me, et.startTime - xe), He = !1;
        }
        return He;
      } finally {
        le = null, $ = he, se = !1;
      }
    }
    var ve = !1, Ze = null, We = -1, Vt = 5, xt = -1;
    function Nt() {
      return !(y.unstable_now() - xt < Vt);
    }
    function Ve() {
      if (Ze !== null) {
        var X = y.unstable_now();
        xt = X;
        var xe = !0;
        try {
          xe = Ze(!0, X);
        } finally {
          xe ? St() : (ve = !1, Ze = null);
        }
      } else ve = !1;
    }
    var St;
    if (typeof Qe == "function") St = function() {
      Qe(Ve);
    };
    else if (typeof MessageChannel < "u") {
      var Ue = new MessageChannel(), jt = Ue.port2;
      Ue.port1.onmessage = Ve, St = function() {
        jt.postMessage(null);
      };
    } else St = function() {
      de(Ve, 0);
    };
    function pt(X) {
      Ze = X, ve || (ve = !0, St());
    }
    function ct(X, xe) {
      We = de(function() {
        X(y.unstable_now());
      }, xe);
    }
    y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, y.unstable_continueExecution = function() {
      G || se || (G = !0, pt(Ye));
    }, y.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Vt = 0 < X ? Math.floor(1e3 / X) : 5;
    }, y.unstable_getCurrentPriorityLevel = function() {
      return $;
    }, y.unstable_getFirstCallbackNode = function() {
      return E(ne);
    }, y.unstable_next = function(X) {
      switch ($) {
        case 1:
        case 2:
        case 3:
          var xe = 3;
          break;
        default:
          xe = $;
      }
      var he = $;
      $ = xe;
      try {
        return X();
      } finally {
        $ = he;
      }
    }, y.unstable_pauseExecution = function() {
    }, y.unstable_requestPaint = function() {
    }, y.unstable_runWithPriority = function(X, xe) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var he = $;
      $ = X;
      try {
        return xe();
      } finally {
        $ = he;
      }
    }, y.unstable_scheduleCallback = function(X, xe, he) {
      var N = y.unstable_now();
      switch (typeof he == "object" && he !== null ? (he = he.delay, he = typeof he == "number" && 0 < he ? N + he : N) : he = N, X) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return te = he + te, X = { id: J++, callback: xe, priorityLevel: X, startTime: he, expirationTime: te, sortIndex: -1 }, he > N ? (X.sortIndex = he, b(Z, X), E(ne) === null && X === E(Z) && (ee ? (qe(We), We = -1) : ee = !0, ct(Me, he - N))) : (X.sortIndex = te, b(ne, X), G || se || (G = !0, pt(Ye))), X;
    }, y.unstable_shouldYield = Nt, y.unstable_wrapCallback = function(X) {
      var xe = $;
      return function() {
        var he = $;
        $ = xe;
        try {
          return X.apply(this, arguments);
        } finally {
          $ = he;
        }
      };
    };
  }(k0)), k0;
}
var D0 = {}, Ox;
function dD() {
  return Ox || (Ox = 1, function(y) {
    var b = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    b.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var E = !1, O = 5;
      function H(pe, Be) {
        var vt = pe.length;
        pe.push(Be), g(pe, Be, vt);
      }
      function L(pe) {
        return pe.length === 0 ? null : pe[0];
      }
      function Q(pe) {
        if (pe.length === 0)
          return null;
        var Be = pe[0], vt = pe.pop();
        return vt !== Be && (pe[0] = vt, ne(pe, vt, 0)), Be;
      }
      function g(pe, Be, vt) {
        for (var Bt = vt; Bt > 0; ) {
          var fn = Bt - 1 >>> 1, dn = pe[fn];
          if (Z(dn, Be) > 0)
            pe[fn] = Be, pe[Bt] = dn, Bt = fn;
          else
            return;
        }
      }
      function ne(pe, Be, vt) {
        for (var Bt = vt, fn = pe.length, dn = fn >>> 1; Bt < dn; ) {
          var pn = (Bt + 1) * 2 - 1, tr = pe[pn], sn = pn + 1, Jt = pe[sn];
          if (Z(tr, Be) < 0)
            sn < fn && Z(Jt, tr) < 0 ? (pe[Bt] = Jt, pe[sn] = Be, Bt = sn) : (pe[Bt] = tr, pe[pn] = Be, Bt = pn);
          else if (sn < fn && Z(Jt, Be) < 0)
            pe[Bt] = Jt, pe[sn] = Be, Bt = sn;
          else
            return;
        }
      }
      function Z(pe, Be) {
        var vt = pe.sortIndex - Be.sortIndex;
        return vt !== 0 ? vt : pe.id - Be.id;
      }
      var J = 1, le = 2, $ = 3, se = 4, G = 5;
      function ee(pe, Be) {
      }
      var de = typeof performance == "object" && typeof performance.now == "function";
      if (de) {
        var qe = performance;
        y.unstable_now = function() {
          return qe.now();
        };
      } else {
        var Qe = Date, $e = Qe.now();
        y.unstable_now = function() {
          return Qe.now() - $e;
        };
      }
      var Me = 1073741823, Ye = -1, ve = 250, Ze = 5e3, We = 1e4, Vt = Me, xt = [], Nt = [], Ve = 1, St = null, Ue = $, jt = !1, pt = !1, ct = !1, X = typeof setTimeout == "function" ? setTimeout : null, xe = typeof clearTimeout == "function" ? clearTimeout : null, he = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function N(pe) {
        for (var Be = L(Nt); Be !== null; ) {
          if (Be.callback === null)
            Q(Nt);
          else if (Be.startTime <= pe)
            Q(Nt), Be.sortIndex = Be.expirationTime, H(xt, Be);
          else
            return;
          Be = L(Nt);
        }
      }
      function te(pe) {
        if (ct = !1, N(pe), !pt)
          if (L(xt) !== null)
            pt = !0, jn(He);
          else {
            var Be = L(Nt);
            Be !== null && sr(te, Be.startTime - pe);
          }
      }
      function He(pe, Be) {
        pt = !1, ct && (ct = !1, qr()), jt = !0;
        var vt = Ue;
        try {
          var Bt;
          if (!E) return et(pe, Be);
        } finally {
          St = null, Ue = vt, jt = !1;
        }
      }
      function et(pe, Be) {
        var vt = Be;
        for (N(vt), St = L(xt); St !== null && !(St.expirationTime > vt && (!pe || Xa())); ) {
          var Bt = St.callback;
          if (typeof Bt == "function") {
            St.callback = null, Ue = St.priorityLevel;
            var fn = St.expirationTime <= vt, dn = Bt(fn);
            vt = y.unstable_now(), typeof dn == "function" ? St.callback = dn : St === L(xt) && Q(xt), N(vt);
          } else
            Q(xt);
          St = L(xt);
        }
        if (St !== null)
          return !0;
        var pn = L(Nt);
        return pn !== null && sr(te, pn.startTime - vt), !1;
      }
      function rt(pe, Be) {
        switch (pe) {
          case J:
          case le:
          case $:
          case se:
          case G:
            break;
          default:
            pe = $;
        }
        var vt = Ue;
        Ue = pe;
        try {
          return Be();
        } finally {
          Ue = vt;
        }
      }
      function yt(pe) {
        var Be;
        switch (Ue) {
          case J:
          case le:
          case $:
            Be = $;
            break;
          default:
            Be = Ue;
            break;
        }
        var vt = Ue;
        Ue = Be;
        try {
          return pe();
        } finally {
          Ue = vt;
        }
      }
      function Lt(pe) {
        var Be = Ue;
        return function() {
          var vt = Ue;
          Ue = Be;
          try {
            return pe.apply(this, arguments);
          } finally {
            Ue = vt;
          }
        };
      }
      function lt(pe, Be, vt) {
        var Bt = y.unstable_now(), fn;
        if (typeof vt == "object" && vt !== null) {
          var dn = vt.delay;
          typeof dn == "number" && dn > 0 ? fn = Bt + dn : fn = Bt;
        } else
          fn = Bt;
        var pn;
        switch (pe) {
          case J:
            pn = Ye;
            break;
          case le:
            pn = ve;
            break;
          case G:
            pn = Vt;
            break;
          case se:
            pn = We;
            break;
          case $:
          default:
            pn = Ze;
            break;
        }
        var tr = fn + pn, sn = {
          id: Ve++,
          callback: Be,
          priorityLevel: pe,
          startTime: fn,
          expirationTime: tr,
          sortIndex: -1
        };
        return fn > Bt ? (sn.sortIndex = fn, H(Nt, sn), L(xt) === null && sn === L(Nt) && (ct ? qr() : ct = !0, sr(te, fn - Bt))) : (sn.sortIndex = tr, H(xt, sn), !pt && !jt && (pt = !0, jn(He))), sn;
      }
      function kt() {
      }
      function Qt() {
        !pt && !jt && (pt = !0, jn(He));
      }
      function zn() {
        return L(xt);
      }
      function Jn(pe) {
        pe.callback = null;
      }
      function ur() {
        return Ue;
      }
      var An = !1, wr = null, In = -1, Un = O, ha = -1;
      function Xa() {
        var pe = y.unstable_now() - ha;
        return !(pe < Un);
      }
      function Mr() {
      }
      function Yn(pe) {
        if (pe < 0 || pe > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        pe > 0 ? Un = Math.floor(1e3 / pe) : Un = O;
      }
      var Zn = function() {
        if (wr !== null) {
          var pe = y.unstable_now();
          ha = pe;
          var Be = !0, vt = !0;
          try {
            vt = wr(Be, pe);
          } finally {
            vt ? er() : (An = !1, wr = null);
          }
        } else
          An = !1;
      }, er;
      if (typeof he == "function")
        er = function() {
          he(Zn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), Ja = Rr.port2;
        Rr.port1.onmessage = Zn, er = function() {
          Ja.postMessage(null);
        };
      } else
        er = function() {
          X(Zn, 0);
        };
      function jn(pe) {
        wr = pe, An || (An = !0, er());
      }
      function sr(pe, Be) {
        In = X(function() {
          pe(y.unstable_now());
        }, Be);
      }
      function qr() {
        xe(In), In = -1;
      }
      var Ai = Mr, ma = null;
      y.unstable_IdlePriority = G, y.unstable_ImmediatePriority = J, y.unstable_LowPriority = se, y.unstable_NormalPriority = $, y.unstable_Profiling = ma, y.unstable_UserBlockingPriority = le, y.unstable_cancelCallback = Jn, y.unstable_continueExecution = Qt, y.unstable_forceFrameRate = Yn, y.unstable_getCurrentPriorityLevel = ur, y.unstable_getFirstCallbackNode = zn, y.unstable_next = yt, y.unstable_pauseExecution = kt, y.unstable_requestPaint = Ai, y.unstable_runWithPriority = rt, y.unstable_scheduleCallback = lt, y.unstable_shouldYield = Xa, y.unstable_wrapCallback = Lt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(D0)), D0;
}
var Nx;
function Qx() {
  if (Nx) return uy.exports;
  Nx = 1;
  var y = {};
  return y.NODE_ENV === "production" ? uy.exports = fD() : uy.exports = dD(), uy.exports;
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
var Lx;
function pD() {
  if (Lx) return qa;
  Lx = 1;
  var y = pc(), b = Qx();
  function E(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var O = /* @__PURE__ */ new Set(), H = {};
  function L(n, r) {
    Q(n, r), Q(n + "Capture", r);
  }
  function Q(n, r) {
    for (H[n] = r, n = 0; n < r.length; n++) O.add(r[n]);
  }
  var g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ne = Object.prototype.hasOwnProperty, Z = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, J = {}, le = {};
  function $(n) {
    return ne.call(le, n) ? !0 : ne.call(J, n) ? !1 : Z.test(n) ? le[n] = !0 : (J[n] = !0, !1);
  }
  function se(n, r, l, u) {
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
  function G(n, r, l, u) {
    if (r === null || typeof r > "u" || se(n, r, l, u)) return !0;
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
  var qe = /[\-:]([a-z])/g;
  function Qe(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      qe,
      Qe
    );
    de[r] = new ee(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(qe, Qe);
    de[r] = new ee(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(qe, Qe);
    de[r] = new ee(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    de[n] = new ee(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), de.xlinkHref = new ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    de[n] = new ee(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function $e(n, r, l, u) {
    var c = de.hasOwnProperty(r) ? de[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (G(r, l, c, u) && (l = null), u || c === null ? $(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, u = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var Me = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ye = Symbol.for("react.element"), ve = Symbol.for("react.portal"), Ze = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), Vt = Symbol.for("react.profiler"), xt = Symbol.for("react.provider"), Nt = Symbol.for("react.context"), Ve = Symbol.for("react.forward_ref"), St = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), jt = Symbol.for("react.memo"), pt = Symbol.for("react.lazy"), ct = Symbol.for("react.offscreen"), X = Symbol.iterator;
  function xe(n) {
    return n === null || typeof n != "object" ? null : (n = X && n[X] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var he = Object.assign, N;
  function te(n) {
    if (N === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      N = r && r[1] || "";
    }
    return `
` + N + n;
  }
  var He = !1;
  function et(n, r) {
    if (!n || He) return "";
    He = !0;
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
        } catch (P) {
          var u = P;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (P) {
          u = P;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (P) {
          u = P;
        }
        n();
      }
    } catch (P) {
      if (P && u && typeof P.stack == "string") {
        for (var c = P.stack.split(`
`), d = u.stack.split(`
`), m = c.length - 1, x = d.length - 1; 1 <= m && 0 <= x && c[m] !== d[x]; ) x--;
        for (; 1 <= m && 0 <= x; m--, x--) if (c[m] !== d[x]) {
          if (m !== 1 || x !== 1)
            do
              if (m--, x--, 0 > x || c[m] !== d[x]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= x);
          break;
        }
      }
    } finally {
      He = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? te(n) : "";
  }
  function rt(n) {
    switch (n.tag) {
      case 5:
        return te(n.type);
      case 16:
        return te("Lazy");
      case 13:
        return te("Suspense");
      case 19:
        return te("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = et(n.type, !1), n;
      case 11:
        return n = et(n.type.render, !1), n;
      case 1:
        return n = et(n.type, !0), n;
      default:
        return "";
    }
  }
  function yt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ze:
        return "Fragment";
      case ve:
        return "Portal";
      case Vt:
        return "Profiler";
      case We:
        return "StrictMode";
      case St:
        return "Suspense";
      case Ue:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Nt:
        return (n.displayName || "Context") + ".Consumer";
      case xt:
        return (n._context.displayName || "Context") + ".Provider";
      case Ve:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case jt:
        return r = n.displayName || null, r !== null ? r : yt(n.type) || "Memo";
      case pt:
        r = n._payload, n = n._init;
        try {
          return yt(n(r));
        } catch {
        }
    }
    return null;
  }
  function Lt(n) {
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
        return yt(r);
      case 8:
        return r === We ? "StrictMode" : "Mode";
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
  function lt(n) {
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
  function kt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Qt(n) {
    var r = kt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
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
    n._valueTracker || (n._valueTracker = Qt(n));
  }
  function Jn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), u = "";
    return n && (u = kt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
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
    return he({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function wr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = lt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function In(n, r) {
    r = r.checked, r != null && $e(n, "checked", r, !1);
  }
  function Un(n, r) {
    In(n, r);
    var l = lt(r.value), u = r.type;
    if (l != null) u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Xa(n, r.type, l) : r.hasOwnProperty("defaultValue") && Xa(n, r.type, lt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
      for (l = "" + lt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Zn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(E(91));
    return he({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function er(n, r) {
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
    n._wrapperState = { initialValue: lt(l) };
  }
  function Rr(n, r) {
    var l = lt(r.value), u = lt(r.defaultValue);
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
  var qr, Ai = function(n) {
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
  var pe = {
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
  }, Be = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pe).forEach(function(n) {
    Be.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), pe[r] = pe[n];
    });
  });
  function vt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || pe.hasOwnProperty(n) && pe[n] ? ("" + r).trim() : r + "px";
  }
  function Bt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var u = l.indexOf("--") === 0, c = vt(l, r[l], u);
      l === "float" && (l = "cssFloat"), u ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var fn = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  var tr = null;
  function sn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Jt = null, $t = null, ya = null;
  function Na(n) {
    if (n = ms(n)) {
      if (typeof Jt != "function") throw Error(E(280));
      var r = n.stateNode;
      r && (r = qi(r), Jt(n.stateNode, n.type, r));
    }
  }
  function La(n) {
    $t ? ya ? ya.push(n) : ya = [n] : $t = n;
  }
  function Ui() {
    if ($t) {
      var n = $t, r = ya;
      if (ya = $t = null, Na(n), r) for (n = 0; n < r.length; n++) Na(r[n]);
    }
  }
  function ql(n, r) {
    return n(r);
  }
  function Kl() {
  }
  var ji = !1;
  function Xl(n, r, l) {
    if (ji) return n(r, l);
    ji = !0;
    try {
      return ql(n, r, l);
    } finally {
      ji = !1, ($t !== null || ya !== null) && (Kl(), Ui());
    }
  }
  function di(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var u = qi(l);
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
  if (g) try {
    var cr = {};
    Object.defineProperty(cr, "passive", { get: function() {
      ga = !0;
    } }), window.addEventListener("test", cr, cr), window.removeEventListener("test", cr, cr);
  } catch {
    ga = !1;
  }
  function Sa(n, r, l, u, c, d, m, x, T) {
    var P = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, P);
    } catch (ie) {
      this.onError(ie);
    }
  }
  var Kr = !1, pi = null, vi = !1, Fi = null, R = { onError: function(n) {
    Kr = !0, pi = n;
  } };
  function re(n, r, l, u, c, d, m, x, T) {
    Kr = !1, pi = null, Sa.apply(R, arguments);
  }
  function ge(n, r, l, u, c, d, m, x, T) {
    if (re.apply(this, arguments), Kr) {
      if (Kr) {
        var P = pi;
        Kr = !1, pi = null;
      } else throw Error(E(198));
      vi || (vi = !0, Fi = P);
    }
  }
  function Ee(n) {
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
  function Et(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function at(n) {
    if (Ee(n) !== n) throw Error(E(188));
  }
  function wt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ee(n), r === null) throw Error(E(188));
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
          if (d === l) return at(c), n;
          if (d === u) return at(c), r;
          d = d.sibling;
        }
        throw Error(E(188));
      }
      if (l.return !== u.return) l = c, u = d;
      else {
        for (var m = !1, x = c.child; x; ) {
          if (x === l) {
            m = !0, l = c, u = d;
            break;
          }
          if (x === u) {
            m = !0, u = c, l = d;
            break;
          }
          x = x.sibling;
        }
        if (!m) {
          for (x = d.child; x; ) {
            if (x === l) {
              m = !0, l = d, u = c;
              break;
            }
            if (x === u) {
              m = !0, u = d, l = c;
              break;
            }
            x = x.sibling;
          }
          if (!m) throw Error(E(189));
        }
      }
      if (l.alternate !== u) throw Error(E(190));
    }
    if (l.tag !== 3) throw Error(E(188));
    return l.stateNode.current === l ? n : r;
  }
  function ht(n) {
    return n = wt(n), n !== null ? _n(n) : null;
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
  var cn = b.unstable_scheduleCallback, vn = b.unstable_cancelCallback, Tr = b.unstable_shouldYield, Za = b.unstable_requestPaint, It = b.unstable_now, yn = b.unstable_getCurrentPriorityLevel, ut = b.unstable_ImmediatePriority, hi = b.unstable_UserBlockingPriority, Hi = b.unstable_NormalPriority, vc = b.unstable_LowPriority, Pi = b.unstable_IdlePriority, fl = null, Xr = null;
  function qu(n) {
    if (Xr && typeof Xr.onCommitFiberRoot == "function") try {
      Xr.onCommitFiberRoot(fl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var zr = Math.clz32 ? Math.clz32 : mc, Ku = Math.log, hc = Math.LN2;
  function mc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ku(n) / hc | 0) | 0;
  }
  var Vi = 64, dl = 4194304;
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
      var x = m & ~c;
      x !== 0 ? u = Jr(x) : (d &= m, d !== 0 && (u = Jr(d)));
    } else m = l & ~c, m !== 0 ? u = Jr(m) : d !== 0 && (u = Jr(d));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & c) === 0 && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) l = 31 - zr(r), c = 1 << l, u |= n[l], r &= ~c;
    return u;
  }
  function pl(n, r) {
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
      var m = 31 - zr(d), x = 1 << m, T = c[m];
      T === -1 ? ((x & l) === 0 || (x & u) !== 0) && (c[m] = pl(x, r)) : T <= r && (n.expiredLanes |= x), d &= ~x;
    }
  }
  function Bi(n) {
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
  function vl(n, r, l) {
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
  var Mt = 0;
  function Zu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Yo, zt, yc, yi, tt, eo = !1, nr = [], Zr = null, Ar = null, gi = null, xn = /* @__PURE__ */ new Map(), Zt = /* @__PURE__ */ new Map(), ei = [], Ma = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        xn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zt.delete(r.pointerId);
    }
  }
  function Ur(n, r, l, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ms(r), r !== null && zt(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
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
        return xn.set(d, Ur(xn.get(d) || null, n, r, l, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Zt.set(d, Ur(Zt.get(d) || null, n, r, l, u, c)), !0;
    }
    return !1;
  }
  function Wo(n) {
    var r = so(n.target);
    if (r !== null) {
      var l = Ee(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Et(l), r !== null) {
            n.blockedOn = r, tt(n.priority, function() {
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
        tr = u, l.target.dispatchEvent(u), tr = null;
      } else return r = ms(l), r !== null && zt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Go(n, r, l) {
    to(n) && l.delete(r);
  }
  function Qo() {
    eo = !1, Zr !== null && to(Zr) && (Zr = null), Ar !== null && to(Ar) && (Ar = null), gi !== null && to(gi) && (gi = null), xn.forEach(Go), Zt.forEach(Go);
  }
  function no(n, r) {
    n.blockedOn === r && (n.blockedOn = null, eo || (eo = !0, b.unstable_scheduleCallback(b.unstable_NormalPriority, Qo)));
  }
  function za(n) {
    function r(c) {
      return no(c, n);
    }
    if (0 < nr.length) {
      no(nr[0], n);
      for (var l = 1; l < nr.length; l++) {
        var u = nr[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Zr !== null && no(Zr, n), Ar !== null && no(Ar, n), gi !== null && no(gi, n), xn.forEach(r), Zt.forEach(r), l = 0; l < ei.length; l++) u = ei[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < ei.length && (l = ei[0], l.blockedOn === null); ) Wo(l), l.blockedOn === null && ei.shift();
  }
  var Aa = Me.ReactCurrentBatchConfig, hl = !0;
  function $i(n, r, l, u) {
    var c = Mt, d = Aa.transition;
    Aa.transition = null;
    try {
      Mt = 1, ml(n, r, l, u);
    } finally {
      Mt = c, Aa.transition = d;
    }
  }
  function qo(n, r, l, u) {
    var c = Mt, d = Aa.transition;
    Aa.transition = null;
    try {
      Mt = 4, ml(n, r, l, u);
    } finally {
      Mt = c, Aa.transition = d;
    }
  }
  function ml(n, r, l, u) {
    if (hl) {
      var c = Ko(n, r, l, u);
      if (c === null) Ed(n, r, u, Ii, l), _r(n, u);
      else if (od(c, n, r, l, u)) u.stopPropagation();
      else if (_r(n, u), r & 4 && -1 < Ma.indexOf(n)) {
        for (; c !== null; ) {
          var d = ms(c);
          if (d !== null && Yo(d), d = Ko(n, r, l, u), d === null && Ed(n, r, u, Ii, l), d === c) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else Ed(n, r, u, null, l);
    }
  }
  var Ii = null;
  function Ko(n, r, l, u) {
    if (Ii = null, n = sn(u), n = so(n), n !== null) if (r = Ee(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Et(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Ii = n, null;
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
          case ut:
            return 1;
          case hi:
            return 4;
          case Hi:
          case vc:
            return 16;
          case Pi:
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
  function I() {
    return !0;
  }
  function fe() {
    return !1;
  }
  function De(n) {
    function r(l, u, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var x in n) n.hasOwnProperty(x) && (l = n[x], this[x] = l ? l(d) : d[x]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? I : fe, this.isPropagationStopped = fe, this;
    }
    return he(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = I);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = I);
    }, persist: function() {
    }, isPersistent: I }), r;
  }
  var we = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Xe = De(we), mt = he({}, we, { view: 0, detail: 0 }), Yt = De(mt), en, tn, ft, ln = he({}, mt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ti, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ft && (ft && n.type === "mousemove" ? (en = n.screenX - ft.screenX, tn = n.screenY - ft.screenY) : tn = en = 0, ft = n), en);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : tn;
  } }), kn = De(ln), ro = he({}, ln, { dataTransfer: 0 }), ts = De(ro), Yi = he({}, mt, { relatedTarget: 0 }), ao = De(Yi), ns = he({}, we, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ud = De(ns), gc = he({}, we, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), sd = De(gc), vv = he({}, we, { data: 0 }), Sc = De(vv), hv = {
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
  var dy = he({}, mt, { key: function(n) {
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
  } }), cd = De(dy), fd = he({}, ln, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ec = De(fd), py = he({}, mt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ti }), Cc = De(py), gv = he({}, we, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ea = De(gv), Wi = he({}, ln, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fn = De(Wi), Gi = [9, 13, 27, 32], rs = g && "CompositionEvent" in window, yl = null;
  g && "documentMode" in document && (yl = document.documentMode);
  var vy = g && "TextEvent" in window && !yl, Jo = g && (!rs || yl && 8 < yl && 11 >= yl), Sv = " ", Ev = !1;
  function bc(n, r) {
    switch (n) {
      case "keyup":
        return Gi.indexOf(r.keyCode) !== -1;
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
  function bv(n, r) {
    if (Zo) return n === "compositionend" || !rs && bc(n, r) ? (n = w(), h = Xo = Ua = null, Zo = !1, n) : null;
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
  function xv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!my[n.type] : r === "textarea";
  }
  function wv(n, r, l, u) {
    La(u), r = ps(r, "onChange"), 0 < r.length && (l = new Xe("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var eu = null, Si = null;
  function dd(n) {
    Tc(n, 0);
  }
  function as(n) {
    var r = je(n);
    if (Jn(r)) return n;
  }
  function Rv(n, r) {
    if (n === "change") return r;
  }
  var Tv = !1;
  if (g) {
    var pd;
    if (g) {
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
      wv(r, Si, n, sn(n)), Xl(dd, r);
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
      if (!ne.call(r, c) || !ni(n[c], r[c])) return !1;
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
  function xc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? xc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function gl() {
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
    var r = gl(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && xc(l.ownerDocument.documentElement, l)) {
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
  var nu = g && "documentMode" in document && 11 >= document.documentMode, ru = null, hd = null, ls = null, md = !1;
  function Av(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    md || ru == null || ru !== ur(u) || (u = ru, "selectionStart" in u && tu(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), ls && is(ls, u) || (ls = u, u = ps(hd, "onSelect"), 0 < u.length && (r = new Xe("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = ru)));
  }
  function os(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var au = { animationend: os("Animation", "AnimationEnd"), animationiteration: os("Animation", "AnimationIteration"), animationstart: os("Animation", "AnimationStart"), transitionend: os("Transition", "TransitionEnd") }, wc = {}, kr = {};
  g && (kr = document.createElement("div").style, "AnimationEvent" in window || (delete au.animationend.animation, delete au.animationiteration.animation, delete au.animationstart.animation), "TransitionEvent" in window || delete au.transitionend.transition);
  function us(n) {
    if (wc[n]) return wc[n];
    if (!au[n]) return n;
    var r = au[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in kr) return wc[n] = r[l];
    return n;
  }
  var Uv = us("animationend"), jv = us("animationiteration"), Fv = us("animationstart"), Hv = us("transitionend"), Pv = /* @__PURE__ */ new Map(), yd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ei(n, r) {
    Pv.set(n, r), L(r, [n]);
  }
  for (var io = 0; io < yd.length; io++) {
    var gd = yd[io], ss = gd.toLowerCase(), Ey = gd[0].toUpperCase() + gd.slice(1);
    Ei(ss, "on" + Ey);
  }
  Ei(Uv, "onAnimationEnd"), Ei(jv, "onAnimationIteration"), Ei(Fv, "onAnimationStart"), Ei("dblclick", "onDoubleClick"), Ei("focusin", "onFocus"), Ei("focusout", "onBlur"), Ei(Hv, "onTransitionEnd"), Q("onMouseEnter", ["mouseout", "mouseover"]), Q("onMouseLeave", ["mouseout", "mouseover"]), Q("onPointerEnter", ["pointerout", "pointerover"]), Q("onPointerLeave", ["pointerout", "pointerover"]), L("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), L("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), L("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), L("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), L("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), L("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var cs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cy = new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));
  function Rc(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, ge(u, r, void 0, n), n.currentTarget = null;
  }
  function Tc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = u.length - 1; 0 <= m; m--) {
          var x = u[m], T = x.instance, P = x.currentTarget;
          if (x = x.listener, T !== d && c.isPropagationStopped()) break e;
          Rc(c, x, P), d = T;
        }
        else for (m = 0; m < u.length; m++) {
          if (x = u[m], T = x.instance, P = x.currentTarget, x = x.listener, T !== d && c.isPropagationStopped()) break e;
          Rc(c, x, P), d = T;
        }
      }
    }
    if (vi) throw n = Fi, vi = !1, Fi = null, n;
  }
  function Wt(n, r) {
    var l = r[Cd];
    l === void 0 && (l = r[Cd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (Sd(r, n, 2, !1), l.add(u));
  }
  function Sl(n, r, l) {
    var u = 0;
    r && (u |= 4), Sd(l, n, u, r);
  }
  var fs = "_reactListening" + Math.random().toString(36).slice(2);
  function ds(n) {
    if (!n[fs]) {
      n[fs] = !0, O.forEach(function(l) {
        l !== "selectionchange" && (Cy.has(l) || Sl(l, !1, n), Sl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[fs] || (r[fs] = !0, Sl("selectionchange", !1, r));
    }
  }
  function Sd(n, r, l, u) {
    switch (es(r)) {
      case 1:
        var c = $i;
        break;
      case 4:
        c = qo;
        break;
      default:
        c = ml;
    }
    l = c.bind(null, r, l, n), c = void 0, !ga || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Ed(n, r, l, u, c) {
    var d = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var m = u.tag;
      if (m === 3 || m === 4) {
        var x = u.stateNode.containerInfo;
        if (x === c || x.nodeType === 8 && x.parentNode === c) break;
        if (m === 4) for (m = u.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; x !== null; ) {
          if (m = so(x), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            u = d = m;
            continue e;
          }
          x = x.parentNode;
        }
      }
      u = u.return;
    }
    Xl(function() {
      var P = d, ie = sn(l), oe = [];
      e: {
        var ae = Pv.get(n);
        if (ae !== void 0) {
          var Re = Xe, Oe = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              Re = cd;
              break;
            case "focusin":
              Oe = "focus", Re = ao;
              break;
            case "focusout":
              Oe = "blur", Re = ao;
              break;
            case "beforeblur":
            case "afterblur":
              Re = ao;
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
              Re = kn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Re = ts;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Re = Cc;
              break;
            case Uv:
            case jv:
            case Fv:
              Re = ud;
              break;
            case Hv:
              Re = ea;
              break;
            case "scroll":
              Re = Yt;
              break;
            case "wheel":
              Re = Fn;
              break;
            case "copy":
            case "cut":
            case "paste":
              Re = sd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Re = Ec;
          }
          var Le = (r & 4) !== 0, Ln = !Le && n === "scroll", M = Le ? ae !== null ? ae + "Capture" : null : ae;
          Le = [];
          for (var k = P, U; k !== null; ) {
            U = k;
            var ce = U.stateNode;
            if (U.tag === 5 && ce !== null && (U = ce, M !== null && (ce = di(k, M), ce != null && Le.push(iu(k, ce, U)))), Ln) break;
            k = k.return;
          }
          0 < Le.length && (ae = new Re(ae, Oe, null, l, ie), oe.push({ event: ae, listeners: Le }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (ae = n === "mouseover" || n === "pointerover", Re = n === "mouseout" || n === "pointerout", ae && l !== tr && (Oe = l.relatedTarget || l.fromElement) && (so(Oe) || Oe[Qi])) break e;
          if ((Re || ae) && (ae = ie.window === ie ? ie : (ae = ie.ownerDocument) ? ae.defaultView || ae.parentWindow : window, Re ? (Oe = l.relatedTarget || l.toElement, Re = P, Oe = Oe ? so(Oe) : null, Oe !== null && (Ln = Ee(Oe), Oe !== Ln || Oe.tag !== 5 && Oe.tag !== 6) && (Oe = null)) : (Re = null, Oe = P), Re !== Oe)) {
            if (Le = kn, ce = "onMouseLeave", M = "onMouseEnter", k = "mouse", (n === "pointerout" || n === "pointerover") && (Le = Ec, ce = "onPointerLeave", M = "onPointerEnter", k = "pointer"), Ln = Re == null ? ae : je(Re), U = Oe == null ? ae : je(Oe), ae = new Le(ce, k + "leave", Re, l, ie), ae.target = Ln, ae.relatedTarget = U, ce = null, so(ie) === P && (Le = new Le(M, k + "enter", Oe, l, ie), Le.target = U, Le.relatedTarget = Ln, ce = Le), Ln = ce, Re && Oe) t: {
              for (Le = Re, M = Oe, k = 0, U = Le; U; U = lo(U)) k++;
              for (U = 0, ce = M; ce; ce = lo(ce)) U++;
              for (; 0 < k - U; ) Le = lo(Le), k--;
              for (; 0 < U - k; ) M = lo(M), U--;
              for (; k--; ) {
                if (Le === M || M !== null && Le === M.alternate) break t;
                Le = lo(Le), M = lo(M);
              }
              Le = null;
            }
            else Le = null;
            Re !== null && _c(oe, ae, Re, Le, !1), Oe !== null && Ln !== null && _c(oe, Ln, Oe, Le, !0);
          }
        }
        e: {
          if (ae = P ? je(P) : window, Re = ae.nodeName && ae.nodeName.toLowerCase(), Re === "select" || Re === "input" && ae.type === "file") var Ce = Rv;
          else if (xv(ae)) if (Tv) Ce = Sy;
          else {
            Ce = gy;
            var Pe = yy;
          }
          else (Re = ae.nodeName) && Re.toLowerCase() === "input" && (ae.type === "checkbox" || ae.type === "radio") && (Ce = Ov);
          if (Ce && (Ce = Ce(n, P))) {
            wv(oe, Ce, l, ie);
            break e;
          }
          Pe && Pe(n, ae, P), n === "focusout" && (Pe = ae._wrapperState) && Pe.controlled && ae.type === "number" && Xa(ae, "number", ae.value);
        }
        switch (Pe = P ? je(P) : window, n) {
          case "focusin":
            (xv(Pe) || Pe.contentEditable === "true") && (ru = Pe, hd = P, ls = null);
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
            md = !1, Av(oe, l, ie);
            break;
          case "selectionchange":
            if (nu) break;
          case "keydown":
          case "keyup":
            Av(oe, l, ie);
        }
        var Ge;
        if (rs) e: {
          switch (n) {
            case "compositionstart":
              var nt = "onCompositionStart";
              break e;
            case "compositionend":
              nt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              nt = "onCompositionUpdate";
              break e;
          }
          nt = void 0;
        }
        else Zo ? bc(n, l) && (nt = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (nt = "onCompositionStart");
        nt && (Jo && l.locale !== "ko" && (Zo || nt !== "onCompositionStart" ? nt === "onCompositionEnd" && Zo && (Ge = w()) : (Ua = ie, Xo = "value" in Ua ? Ua.value : Ua.textContent, Zo = !0)), Pe = ps(P, nt), 0 < Pe.length && (nt = new Sc(nt, n, null, l, ie), oe.push({ event: nt, listeners: Pe }), Ge ? nt.data = Ge : (Ge = Cv(l), Ge !== null && (nt.data = Ge)))), (Ge = vy ? hy(n, l) : bv(n, l)) && (P = ps(P, "onBeforeInput"), 0 < P.length && (ie = new Sc("onBeforeInput", "beforeinput", null, l, ie), oe.push({ event: ie, listeners: P }), ie.data = Ge));
      }
      Tc(oe, r);
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
      var x = l, T = x.alternate, P = x.stateNode;
      if (T !== null && T === u) break;
      x.tag === 5 && P !== null && (x = P, c ? (T = di(l, d), T != null && m.unshift(iu(l, T, x))) : c || (T = di(l, d), T != null && m.push(iu(l, T, x)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var by = /\r\n?/g, Vv = /\u0000|\uFFFD/g;
  function Bv(n) {
    return (typeof n == "string" ? n : "" + n).replace(by, `
`).replace(Vv, "");
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
  var Oc = typeof setTimeout == "function" ? setTimeout : void 0, $v = typeof clearTimeout == "function" ? clearTimeout : void 0, Nc = typeof Promise == "function" ? Promise : void 0, xy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nc < "u" ? function(n) {
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
  var uu = Math.random().toString(36).slice(2), ja = "__reactFiber$" + uu, hs = "__reactProps$" + uu, Qi = "__reactContainer$" + uu, Cd = "__reactEvents$" + uu, bd = "__reactListeners$" + uu, su = "__reactHandles$" + uu;
  function so(n) {
    var r = n[ja];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Qi] || l[ja]) {
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
    return n = n[ja] || n[Qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function je(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(E(33));
  }
  function qi(n) {
    return n[hs] || null;
  }
  var wn = [], Rt = -1;
  function ta(n) {
    return { current: n };
  }
  function qt(n) {
    0 > Rt || (n.current = wn[Rt], wn[Rt] = null, Rt--);
  }
  function on(n, r) {
    Rt++, wn[Rt] = n.current, n.current = r;
  }
  var gt = {}, gn = ta(gt), Hn = ta(!1), Fa = gt;
  function Ea(n, r) {
    var l = n.type.contextTypes;
    if (!l) return gt;
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
    qt(Hn), qt(gn);
  }
  function Mc(n, r, l) {
    if (gn.current !== gt) throw Error(E(168));
    on(gn, r), on(Hn, l);
  }
  function Iv(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return l;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(E(108, Lt(n) || "Unknown", c));
    return he({}, l, u);
  }
  function co(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || gt, Fa = gn.current, on(gn, n), on(Hn, Hn.current), !0;
  }
  function Dr(n, r, l) {
    var u = n.stateNode;
    if (!u) throw Error(E(169));
    l ? (n = Iv(n, r, Fa), u.__reactInternalMemoizedMergedChildContext = n, qt(Hn), qt(gn), on(gn, n)) : qt(Hn), on(Hn, l);
  }
  var ai = null, ys = !1, gs = !1;
  function El(n) {
    ai === null ? ai = [n] : ai.push(n);
  }
  function xd(n) {
    ys = !0, El(n);
  }
  function jr() {
    if (!gs && ai !== null) {
      gs = !0;
      var n = 0, r = Mt;
      try {
        var l = ai;
        for (Mt = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        ai = null, ys = !1;
      } catch (c) {
        throw ai !== null && (ai = ai.slice(n + 1)), cn(ut, jr), c;
      } finally {
        Mt = r, gs = !1;
      }
    }
    return null;
  }
  var Cl = [], bl = 0, cu = null, xl = 0, fr = [], Pn = 0, fo = null, Fr = 1, bi = "";
  function wl(n, r) {
    Cl[bl++] = xl, Cl[bl++] = cu, cu = n, xl = r;
  }
  function Yv(n, r, l) {
    fr[Pn++] = Fr, fr[Pn++] = bi, fr[Pn++] = fo, fo = n;
    var u = Fr;
    n = bi;
    var c = 32 - zr(u) - 1;
    u &= ~(1 << c), l += 1;
    var d = 32 - zr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (u & (1 << m) - 1).toString(32), u >>= m, c -= m, Fr = 1 << 32 - zr(r) + c | l << c | u, bi = d + n;
    } else Fr = 1 << d | l << c | u, bi = n;
  }
  function wd(n) {
    n.return !== null && (wl(n, 1), Yv(n, 1, 0));
  }
  function zc(n) {
    for (; n === cu; ) cu = Cl[--bl], Cl[bl] = null, xl = Cl[--bl], Cl[bl] = null;
    for (; n === fo; ) fo = fr[--Pn], fr[Pn] = null, bi = fr[--Pn], fr[Pn] = null, Fr = fr[--Pn], fr[Pn] = null;
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
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = fo !== null ? { id: Fr, overflow: bi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = $a(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, na = n, ra = null, !0) : !1;
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
  function Ki() {
    ra = na = null, hn = !1;
  }
  function Ss(n) {
    ii === null ? ii = [n] : ii.push(n);
  }
  var po = Me.ReactCurrentBatchConfig;
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
          var x = c.refs;
          m === null ? delete x[d] : x[d] = m;
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
      return M = Al(M, k), M.index = 0, M.sibling = null, M;
    }
    function d(M, k, U) {
      return M.index = U, n ? (U = M.alternate, U !== null ? (U = U.index, U < k ? (M.flags |= 2, k) : U) : (M.flags |= 2, k)) : (M.flags |= 1048576, k);
    }
    function m(M) {
      return n && M.alternate === null && (M.flags |= 2), M;
    }
    function x(M, k, U, ce) {
      return k === null || k.tag !== 6 ? (k = Oo(U, M.mode, ce), k.return = M, k) : (k = c(k, U), k.return = M, k);
    }
    function T(M, k, U, ce) {
      var Ce = U.type;
      return Ce === Ze ? ie(M, k, U.props.children, ce, U.key) : k !== null && (k.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === pt && Qv(Ce) === k.type) ? (ce = c(k, U.props), ce.ref = Es(M, k, U), ce.return = M, ce) : (ce = Ef(U.type, U.key, U.props, null, M.mode, ce), ce.ref = Es(M, k, U), ce.return = M, ce);
    }
    function P(M, k, U, ce) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== U.containerInfo || k.stateNode.implementation !== U.implementation ? (k = ip(U, M.mode, ce), k.return = M, k) : (k = c(k, U.children || []), k.return = M, k);
    }
    function ie(M, k, U, ce, Ce) {
      return k === null || k.tag !== 7 ? (k = Ul(U, M.mode, ce, Ce), k.return = M, k) : (k = c(k, U), k.return = M, k);
    }
    function oe(M, k, U) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = Oo("" + k, M.mode, U), k.return = M, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ye:
            return U = Ef(k.type, k.key, k.props, null, M.mode, U), U.ref = Es(M, null, k), U.return = M, U;
          case ve:
            return k = ip(k, M.mode, U), k.return = M, k;
          case pt:
            var ce = k._init;
            return oe(M, ce(k._payload), U);
        }
        if (Mr(k) || xe(k)) return k = Ul(k, M.mode, U, null), k.return = M, k;
        fu(M, k);
      }
      return null;
    }
    function ae(M, k, U, ce) {
      var Ce = k !== null ? k.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number") return Ce !== null ? null : x(M, k, "" + U, ce);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Ye:
            return U.key === Ce ? T(M, k, U, ce) : null;
          case ve:
            return U.key === Ce ? P(M, k, U, ce) : null;
          case pt:
            return Ce = U._init, ae(
              M,
              k,
              Ce(U._payload),
              ce
            );
        }
        if (Mr(U) || xe(U)) return Ce !== null ? null : ie(M, k, U, ce, null);
        fu(M, U);
      }
      return null;
    }
    function Re(M, k, U, ce, Ce) {
      if (typeof ce == "string" && ce !== "" || typeof ce == "number") return M = M.get(U) || null, x(k, M, "" + ce, Ce);
      if (typeof ce == "object" && ce !== null) {
        switch (ce.$$typeof) {
          case Ye:
            return M = M.get(ce.key === null ? U : ce.key) || null, T(k, M, ce, Ce);
          case ve:
            return M = M.get(ce.key === null ? U : ce.key) || null, P(k, M, ce, Ce);
          case pt:
            var Pe = ce._init;
            return Re(M, k, U, Pe(ce._payload), Ce);
        }
        if (Mr(ce) || xe(ce)) return M = M.get(U) || null, ie(k, M, ce, Ce, null);
        fu(k, ce);
      }
      return null;
    }
    function Oe(M, k, U, ce) {
      for (var Ce = null, Pe = null, Ge = k, nt = k = 0, qn = null; Ge !== null && nt < U.length; nt++) {
        Ge.index > nt ? (qn = Ge, Ge = null) : qn = Ge.sibling;
        var Ft = ae(M, Ge, U[nt], ce);
        if (Ft === null) {
          Ge === null && (Ge = qn);
          break;
        }
        n && Ge && Ft.alternate === null && r(M, Ge), k = d(Ft, k, nt), Pe === null ? Ce = Ft : Pe.sibling = Ft, Pe = Ft, Ge = qn;
      }
      if (nt === U.length) return l(M, Ge), hn && wl(M, nt), Ce;
      if (Ge === null) {
        for (; nt < U.length; nt++) Ge = oe(M, U[nt], ce), Ge !== null && (k = d(Ge, k, nt), Pe === null ? Ce = Ge : Pe.sibling = Ge, Pe = Ge);
        return hn && wl(M, nt), Ce;
      }
      for (Ge = u(M, Ge); nt < U.length; nt++) qn = Re(Ge, M, nt, U[nt], ce), qn !== null && (n && qn.alternate !== null && Ge.delete(qn.key === null ? nt : qn.key), k = d(qn, k, nt), Pe === null ? Ce = qn : Pe.sibling = qn, Pe = qn);
      return n && Ge.forEach(function(Fl) {
        return r(M, Fl);
      }), hn && wl(M, nt), Ce;
    }
    function Le(M, k, U, ce) {
      var Ce = xe(U);
      if (typeof Ce != "function") throw Error(E(150));
      if (U = Ce.call(U), U == null) throw Error(E(151));
      for (var Pe = Ce = null, Ge = k, nt = k = 0, qn = null, Ft = U.next(); Ge !== null && !Ft.done; nt++, Ft = U.next()) {
        Ge.index > nt ? (qn = Ge, Ge = null) : qn = Ge.sibling;
        var Fl = ae(M, Ge, Ft.value, ce);
        if (Fl === null) {
          Ge === null && (Ge = qn);
          break;
        }
        n && Ge && Fl.alternate === null && r(M, Ge), k = d(Fl, k, nt), Pe === null ? Ce = Fl : Pe.sibling = Fl, Pe = Fl, Ge = qn;
      }
      if (Ft.done) return l(
        M,
        Ge
      ), hn && wl(M, nt), Ce;
      if (Ge === null) {
        for (; !Ft.done; nt++, Ft = U.next()) Ft = oe(M, Ft.value, ce), Ft !== null && (k = d(Ft, k, nt), Pe === null ? Ce = Ft : Pe.sibling = Ft, Pe = Ft);
        return hn && wl(M, nt), Ce;
      }
      for (Ge = u(M, Ge); !Ft.done; nt++, Ft = U.next()) Ft = Re(Ge, M, nt, Ft.value, ce), Ft !== null && (n && Ft.alternate !== null && Ge.delete(Ft.key === null ? nt : Ft.key), k = d(Ft, k, nt), Pe === null ? Ce = Ft : Pe.sibling = Ft, Pe = Ft);
      return n && Ge.forEach(function(jy) {
        return r(M, jy);
      }), hn && wl(M, nt), Ce;
    }
    function Ln(M, k, U, ce) {
      if (typeof U == "object" && U !== null && U.type === Ze && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Ye:
            e: {
              for (var Ce = U.key, Pe = k; Pe !== null; ) {
                if (Pe.key === Ce) {
                  if (Ce = U.type, Ce === Ze) {
                    if (Pe.tag === 7) {
                      l(M, Pe.sibling), k = c(Pe, U.props.children), k.return = M, M = k;
                      break e;
                    }
                  } else if (Pe.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === pt && Qv(Ce) === Pe.type) {
                    l(M, Pe.sibling), k = c(Pe, U.props), k.ref = Es(M, Pe, U), k.return = M, M = k;
                    break e;
                  }
                  l(M, Pe);
                  break;
                } else r(M, Pe);
                Pe = Pe.sibling;
              }
              U.type === Ze ? (k = Ul(U.props.children, M.mode, ce, U.key), k.return = M, M = k) : (ce = Ef(U.type, U.key, U.props, null, M.mode, ce), ce.ref = Es(M, k, U), ce.return = M, M = ce);
            }
            return m(M);
          case ve:
            e: {
              for (Pe = U.key; k !== null; ) {
                if (k.key === Pe) if (k.tag === 4 && k.stateNode.containerInfo === U.containerInfo && k.stateNode.implementation === U.implementation) {
                  l(M, k.sibling), k = c(k, U.children || []), k.return = M, M = k;
                  break e;
                } else {
                  l(M, k);
                  break;
                }
                else r(M, k);
                k = k.sibling;
              }
              k = ip(U, M.mode, ce), k.return = M, M = k;
            }
            return m(M);
          case pt:
            return Pe = U._init, Ln(M, k, Pe(U._payload), ce);
        }
        if (Mr(U)) return Oe(M, k, U, ce);
        if (xe(U)) return Le(M, k, U, ce);
        fu(M, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, k !== null && k.tag === 6 ? (l(M, k.sibling), k = c(k, U), k.return = M, M = k) : (l(M, k), k = Oo(U, M.mode, ce), k.return = M, M = k), m(M)) : l(M, k);
    }
    return Ln;
  }
  var li = qv(!0), dr = qv(!1), ye = ta(null), Ca = null, Or = null, Dd = null;
  function Od() {
    Dd = Or = Ca = null;
  }
  function Nd(n) {
    var r = ye.current;
    qt(ye), n._currentValue = r;
  }
  function Ld(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function du(n, r) {
    Ca = n, Dd = Or = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (ir = !0), n.firstContext = null);
  }
  function Kt(n) {
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
    return c === null ? (l.next = l, Md(r)) : (l.next = c.next, c.next = l), r.interleaved = l, xi(n, u);
  }
  function xi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ha = !1;
  function Rl(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Xv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Xi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Tl(n, r, l) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (Tt & 2) !== 0) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, xi(n, l);
    }
    return c = u.interleaved, c === null ? (r.next = r, Md(u)) : (r.next = c.next, c.next = r), u.interleaved = r, xi(n, l);
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
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, x = c.shared.pending;
    if (x !== null) {
      c.shared.pending = null;
      var T = x, P = T.next;
      T.next = null, m === null ? d = P : m.next = P, m = T;
      var ie = n.alternate;
      ie !== null && (ie = ie.updateQueue, x = ie.lastBaseUpdate, x !== m && (x === null ? ie.firstBaseUpdate = P : x.next = P, ie.lastBaseUpdate = T));
    }
    if (d !== null) {
      var oe = c.baseState;
      m = 0, ie = P = T = null, x = d;
      do {
        var ae = x.lane, Re = x.eventTime;
        if ((u & ae) === ae) {
          ie !== null && (ie = ie.next = {
            eventTime: Re,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var Oe = n, Le = x;
            switch (ae = r, Re = l, Le.tag) {
              case 1:
                if (Oe = Le.payload, typeof Oe == "function") {
                  oe = Oe.call(Re, oe, ae);
                  break e;
                }
                oe = Oe;
                break e;
              case 3:
                Oe.flags = Oe.flags & -65537 | 128;
              case 0:
                if (Oe = Le.payload, ae = typeof Oe == "function" ? Oe.call(Re, oe, ae) : Oe, ae == null) break e;
                oe = he({}, oe, ae);
                break e;
              case 2:
                Ha = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, ae = c.effects, ae === null ? c.effects = [x] : ae.push(x));
        } else Re = { eventTime: Re, lane: ae, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, ie === null ? (P = ie = Re, T = oe) : ie = ie.next = Re, m |= ae;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null) break;
          ae = x, x = ae.next, ae.next = null, c.lastBaseUpdate = ae, c.shared.pending = null;
        }
      } while (!0);
      if (ie === null && (T = oe), c.baseState = T, c.firstBaseUpdate = P, c.lastBaseUpdate = ie, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      wo |= m, n.lanes = m, n.memoizedState = oe;
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
  var pu = {}, wi = ta(pu), Cs = ta(pu), bs = ta(pu);
  function ho(n) {
    if (n === pu) throw Error(E(174));
    return n;
  }
  function Ad(n, r) {
    switch (on(bs, r), on(Cs, n), on(wi, pu), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sr(r, n);
    }
    qt(wi), on(wi, r);
  }
  function vu() {
    qt(wi), qt(Cs), qt(bs);
  }
  function Ud(n) {
    ho(bs.current);
    var r = ho(wi.current), l = sr(r, n.type);
    r !== l && (on(Cs, n), on(wi, l));
  }
  function jd(n) {
    Cs.current === n && (qt(wi), qt(Cs));
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
  function xs() {
    for (var n = 0; n < Fd.length; n++) Fd[n]._workInProgressVersionPrimary = null;
    Fd.length = 0;
  }
  var Fe = Me.ReactCurrentDispatcher, Ct = Me.ReactCurrentBatchConfig, Dt = 0, st = null, nn = null, Wn = null, Fc = !1, ws = !1, Rs = 0, Hd = 0;
  function q() {
    throw Error(E(321));
  }
  function Vn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ni(n[l], r[l])) return !1;
    return !0;
  }
  function Ke(n, r, l, u, c, d) {
    if (Dt = d, st = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Fe.current = n === null || n.memoizedState === null ? Zc : ef, n = l(u, c), ws) {
      d = 0;
      do {
        if (ws = !1, Rs = 0, 25 <= d) throw Error(E(301));
        d += 1, Wn = nn = null, r.updateQueue = null, Fe.current = Os, n = l(u, c);
      } while (ws);
    }
    if (Fe.current = Xt, r = nn !== null && nn.next !== null, Dt = 0, Wn = nn = st = null, Fc = !1, r) throw Error(E(300));
    return n;
  }
  function _l() {
    var n = Rs !== 0;
    return Rs = 0, n;
  }
  function rr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Wn === null ? st.memoizedState = Wn = n : Wn = Wn.next = n, Wn;
  }
  function ar() {
    if (nn === null) {
      var n = st.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = nn.next;
    var r = Wn === null ? st.memoizedState : Wn.next;
    if (r !== null) Wn = r, nn = n;
    else {
      if (n === null) throw Error(E(310));
      nn = n, n = { memoizedState: nn.memoizedState, baseState: nn.baseState, baseQueue: nn.baseQueue, queue: nn.queue, next: null }, Wn === null ? st.memoizedState = Wn = n : Wn = Wn.next = n;
    }
    return Wn;
  }
  function aa(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function mo(n) {
    var r = ar(), l = r.queue;
    if (l === null) throw Error(E(311));
    l.lastRenderedReducer = n;
    var u = nn, c = u.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      u.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var x = m = null, T = null, P = d;
      do {
        var ie = P.lane;
        if ((Dt & ie) === ie) T !== null && (T = T.next = { lane: 0, action: P.action, hasEagerState: P.hasEagerState, eagerState: P.eagerState, next: null }), u = P.hasEagerState ? P.eagerState : n(u, P.action);
        else {
          var oe = {
            lane: ie,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null
          };
          T === null ? (x = T = oe, m = u) : T = T.next = oe, st.lanes |= ie, wo |= ie;
        }
        P = P.next;
      } while (P !== null && P !== d);
      T === null ? m = u : T.next = x, ni(u, r.memoizedState) || (ir = !0), r.memoizedState = u, r.baseState = m, r.baseQueue = T, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, st.lanes |= d, wo |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function kl(n) {
    var r = ar(), l = r.queue;
    if (l === null) throw Error(E(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ni(d, r.memoizedState) || (ir = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, u];
  }
  function hu() {
  }
  function Hc(n, r) {
    var l = st, u = ar(), c = r(), d = !ni(u.memoizedState, c);
    if (d && (u.memoizedState = c, ir = !0), u = u.queue, Ts(Bc.bind(null, l, u, n), [n]), u.getSnapshot !== r || d || Wn !== null && Wn.memoizedState.tag & 1) {
      if (l.flags |= 2048, yo(9, Vc.bind(null, l, u, c, r), void 0, null), Bn === null) throw Error(E(349));
      (Dt & 30) !== 0 || Pc(l, r, c);
    }
    return c;
  }
  function Pc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = st.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, st.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Vc(n, r, l, u) {
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
    var r = xi(n, 1);
    r !== null && Ra(r, n, 1, -1);
  }
  function Yc(n) {
    var r = rr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: aa, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ds.bind(null, st, n), [r.memoizedState, n];
  }
  function yo(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = st.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, st.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Wc() {
    return ar().memoizedState;
  }
  function mu(n, r, l, u) {
    var c = rr();
    st.flags |= n, c.memoizedState = yo(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function yu(n, r, l, u) {
    var c = ar();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (nn !== null) {
      var m = nn.memoizedState;
      if (d = m.destroy, u !== null && Vn(u, m.deps)) {
        c.memoizedState = yo(r, l, d, u);
        return;
      }
    }
    st.flags |= n, c.memoizedState = yo(1 | r, l, d, u);
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
    var l = ar();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Vn(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function Xc(n, r) {
    var l = ar();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Vn(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Jc(n, r, l) {
    return (Dt & 21) === 0 ? (n.baseState && (n.baseState = !1, ir = !0), n.memoizedState = l) : (ni(l, r) || (l = Jl(), st.lanes |= l, wo |= l, n.baseState = !0), r);
  }
  function Zv(n, r) {
    var l = Mt;
    Mt = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = Ct.transition;
    Ct.transition = {};
    try {
      n(!1), r();
    } finally {
      Mt = l, Ct.transition = u;
    }
  }
  function gu() {
    return ar().memoizedState;
  }
  function eh(n, r, l) {
    var u = wa(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, Dl(n)) ia(r, l);
    else if (l = Kv(n, r, l, u), l !== null) {
      var c = un();
      Ra(l, n, u, c), th(l, r, u);
    }
  }
  function Ds(n, r, l) {
    var u = wa(n), c = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Dl(n)) ia(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, x = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = x, ni(x, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Md(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Kv(n, r, c, u), l !== null && (c = un(), Ra(l, n, u, c), th(l, r, u));
    }
  }
  function Dl(n) {
    var r = n.alternate;
    return n === st || r !== null && r === st;
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
  var Xt = { readContext: Kt, useCallback: q, useContext: q, useEffect: q, useImperativeHandle: q, useInsertionEffect: q, useLayoutEffect: q, useMemo: q, useReducer: q, useRef: q, useState: q, useDebugValue: q, useDeferredValue: q, useTransition: q, useMutableSource: q, useSyncExternalStore: q, useId: q, unstable_isNewReconciler: !1 }, Zc = { readContext: Kt, useCallback: function(n, r) {
    return rr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Kt, useEffect: Gc, useImperativeHandle: function(n, r, l) {
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
    var l = rr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = rr();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = eh.bind(null, st, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = rr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Yc, useDebugValue: ks, useDeferredValue: function(n) {
    return rr().memoizedState = n;
  }, useTransition: function() {
    var n = Yc(!1), r = n[0];
    return n = Zv.bind(null, n[1]), rr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = st, c = rr();
    if (hn) {
      if (l === void 0) throw Error(E(407));
      l = l();
    } else {
      if (l = r(), Bn === null) throw Error(E(349));
      (Dt & 30) !== 0 || Pc(u, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Gc(Bc.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, yo(9, Vc.bind(null, u, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = rr(), r = Bn.identifierPrefix;
    if (hn) {
      var l = bi, u = Fr;
      l = (u & ~(1 << 32 - zr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Rs++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Hd++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ef = {
    readContext: Kt,
    useCallback: Kc,
    useContext: Kt,
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
      var r = ar();
      return Jc(r, nn.memoizedState, n);
    },
    useTransition: function() {
      var n = mo(aa)[0], r = ar().memoizedState;
      return [n, r];
    },
    useMutableSource: hu,
    useSyncExternalStore: Hc,
    useId: gu,
    unstable_isNewReconciler: !1
  }, Os = { readContext: Kt, useCallback: Kc, useContext: Kt, useEffect: Ts, useImperativeHandle: go, useInsertionEffect: Qc, useLayoutEffect: qc, useMemo: Xc, useReducer: kl, useRef: Wc, useState: function() {
    return kl(aa);
  }, useDebugValue: ks, useDeferredValue: function(n) {
    var r = ar();
    return nn === null ? r.memoizedState = n : Jc(r, nn.memoizedState, n);
  }, useTransition: function() {
    var n = kl(aa)[0], r = ar().memoizedState;
    return [n, r];
  }, useMutableSource: hu, useSyncExternalStore: Hc, useId: gu, unstable_isNewReconciler: !1 };
  function la(n, r) {
    if (n && n.defaultProps) {
      r = he({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Pd(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : he({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var tf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ee(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = un(), c = wa(n), d = Xi(u, c);
    d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ra(r, n, c, u), Ac(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = un(), c = wa(n), d = Xi(u, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ra(r, n, c, u), Ac(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = un(), u = wa(n), c = Xi(l, u);
    c.tag = 2, r != null && (c.callback = r), r = Tl(n, c, u), r !== null && (Ra(r, n, u, l), Ac(r, n, u));
  } };
  function nh(n, r, l, u, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, m) : r.prototype && r.prototype.isPureReactComponent ? !is(l, u) || !is(c, d) : !0;
  }
  function rh(n, r, l) {
    var u = !1, c = gt, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Kt(d) : (c = Rn(r) ? Fa : gn.current, u = r.contextTypes, d = (u = u != null) ? Ea(n, c) : gt), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = tf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function nf(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && tf.enqueueReplaceState(r, r.state, null);
  }
  function Vd(n, r, l, u) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Rl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Kt(d) : (d = Rn(r) ? Fa : gn.current, c.context = Ea(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Pd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && tf.enqueueReplaceState(c, c.state, null), Uc(n, l, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ol(n, r) {
    try {
      var l = "", u = r;
      do
        l += rt(u), u = u.return;
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
    l = Xi(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      Ll || (Ll = !0, Hs = u), Bd(n, r);
    }, l;
  }
  function ah(n, r, l) {
    l = Xi(-1, l), l.tag = 3;
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
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Xi(-1, 1), r.tag = 2, Tl(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var So = Me.ReactCurrentOwner, ir = !1;
  function On(n, r, l, u) {
    r.child = n === null ? dr(r, null, l, u) : li(r, n.child, l, u);
  }
  function af(n, r, l, u, c) {
    l = l.render;
    var d = r.ref;
    return du(r, c), u = Ke(n, r, l, u, d, c), l = _l(), n !== null && !ir ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, pr(n, r, c)) : (hn && l && wd(r), r.flags |= 1, On(n, r, u, c), r.child);
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
    return r.flags |= 1, n = Al(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Eo(n, r, l, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (is(d, u) && n.ref === r.ref) if (ir = !1, r.pendingProps = u = d, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (ir = !0);
      else return r.lanes = n.lanes, pr(n, r, c);
    }
    return lf(n, r, l, u, c);
  }
  function dt(n, r, l) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, on(bu, xa), xa |= l;
    else {
      if ((l & 1073741824) === 0) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, on(bu, xa), xa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : l, on(bu, xa), xa |= u;
    }
    else d !== null ? (u = d.baseLanes | l, r.memoizedState = null) : u = l, on(bu, xa), xa |= u;
    return On(n, r, c, l), r.child;
  }
  function Ls(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function lf(n, r, l, u, c) {
    var d = Rn(l) ? Fa : gn.current;
    return d = Ea(r, d), du(r, c), l = Ke(n, r, l, u, d, c), u = _l(), n !== null && !ir ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, pr(n, r, c)) : (hn && u && wd(r), r.flags |= 1, On(n, r, l, c), r.child);
  }
  function Ry(n, r, l, u, c) {
    if (Rn(l)) {
      var d = !0;
      co(r);
    } else d = !1;
    if (du(r, c), r.stateNode === null) Pa(n, r), rh(r, l, u), Vd(r, l, u, c), u = !0;
    else if (n === null) {
      var m = r.stateNode, x = r.memoizedProps;
      m.props = x;
      var T = m.context, P = l.contextType;
      typeof P == "object" && P !== null ? P = Kt(P) : (P = Rn(l) ? Fa : gn.current, P = Ea(r, P));
      var ie = l.getDerivedStateFromProps, oe = typeof ie == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      oe || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (x !== u || T !== P) && nf(r, m, u, P), Ha = !1;
      var ae = r.memoizedState;
      m.state = ae, Uc(r, u, m, c), T = r.memoizedState, x !== u || ae !== T || Hn.current || Ha ? (typeof ie == "function" && (Pd(r, l, ie, u), T = r.memoizedState), (x = Ha || nh(r, l, x, u, ae, T, P)) ? (oe || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = T), m.props = u, m.state = T, m.context = P, u = x) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      m = r.stateNode, Xv(n, r), x = r.memoizedProps, P = r.type === r.elementType ? x : la(r.type, x), m.props = P, oe = r.pendingProps, ae = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Kt(T) : (T = Rn(l) ? Fa : gn.current, T = Ea(r, T));
      var Re = l.getDerivedStateFromProps;
      (ie = typeof Re == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (x !== oe || ae !== T) && nf(r, m, u, T), Ha = !1, ae = r.memoizedState, m.state = ae, Uc(r, u, m, c);
      var Oe = r.memoizedState;
      x !== oe || ae !== Oe || Hn.current || Ha ? (typeof Re == "function" && (Pd(r, l, Re, u), Oe = r.memoizedState), (P = Ha || nh(r, l, P, u, ae, Oe, T) || !1) ? (ie || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(u, Oe, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(u, Oe, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || x === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Oe), m.props = u, m.state = Oe, m.context = T, u = P) : (typeof m.componentDidUpdate != "function" || x === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Yd(n, r, l, u, d, c);
  }
  function Yd(n, r, l, u, c, d) {
    Ls(n, r);
    var m = (r.flags & 128) !== 0;
    if (!u && !m) return c && Dr(r, l, !1), pr(n, r, d);
    u = r.stateNode, So.current = r;
    var x = m && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && m ? (r.child = li(r, n.child, null, d), r.child = li(r, null, x, d)) : On(n, r, x, d), r.memoizedState = u.state, c && Dr(r, l, !0), r.child;
  }
  function of(n) {
    var r = n.stateNode;
    r.pendingContext ? Mc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Mc(n, r.context, !1), Ad(n, r.containerInfo);
  }
  function Su(n, r, l, u, c) {
    return Ki(), Ss(c), r.flags |= 256, On(n, r, l, u), r.child;
  }
  var Wd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function uf(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function lh(n, r, l) {
    var u = r.pendingProps, c = Sn.current, d = !1, m = (r.flags & 128) !== 0, x;
    if ((x = m) || (x = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), x ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), on(Sn, c & 1), n === null)
      return kd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (m = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, m = { mode: "hidden", children: m }, (u & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = ku(m, u, 0, null), n = Ul(n, u, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = uf(l), r.memoizedState = Wd, n) : Ms(r, m));
    if (c = n.memoizedState, c !== null && (x = c.dehydrated, x !== null)) return oh(n, r, m, u, x, c, l);
    if (d) {
      d = u.fallback, m = r.mode, c = n.child, x = c.sibling;
      var T = { mode: "hidden", children: u.children };
      return (m & 1) === 0 && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = T, r.deletions = null) : (u = Al(c, T), u.subtreeFlags = c.subtreeFlags & 14680064), x !== null ? d = Al(x, d) : (d = Ul(d, m, l, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, m = n.child.memoizedState, m = m === null ? uf(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Wd, u;
    }
    return d = n.child, n = d.sibling, u = Al(d, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Ms(n, r) {
    return r = ku({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function sf(n, r, l, u) {
    return u !== null && Ss(u), li(r, n.child, null, l), n = Ms(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function oh(n, r, l, u, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = rf(Error(E(422))), sf(n, r, m, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = ku({ mode: "visible", children: u.children }, c, 0, null), d = Ul(d, c, m, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, (r.mode & 1) !== 0 && li(r, n.child, null, m), r.child.memoizedState = uf(m), r.memoizedState = Wd, d);
    if ((r.mode & 1) === 0) return sf(n, r, m, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var x = u.dgst;
      return u = x, d = Error(E(419)), u = rf(d, u, void 0), sf(n, r, m, u);
    }
    if (x = (m & n.childLanes) !== 0, ir || x) {
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
        c = (c & (u.suspendedLanes | m)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, xi(n, c), Ra(u, n, c, -1));
      }
      return ep(), u = rf(Error(E(421))), sf(n, r, m, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ny.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ra = ri(c.nextSibling), na = r, hn = !0, ii = null, n !== null && (fr[Pn++] = Fr, fr[Pn++] = bi, fr[Pn++] = fo, Fr = n.id, bi = n.overflow, fo = r), r = Ms(r, u.children), r.flags |= 4096, r);
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
    if (on(Sn, u), (r.mode & 1) === 0) r.memoizedState = null;
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
  function Pa(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function pr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), wo |= r.lanes, (l & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(E(153));
    if (r.child !== null) {
      for (n = r.child, l = Al(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Al(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ff(n, r, l) {
    switch (r.tag) {
      case 3:
        of(r), Ki();
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
        on(ye, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (on(Sn, Sn.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? lh(n, r, l) : (on(Sn, Sn.current & 1), n = pr(n, r, l), n !== null ? n.sibling : null);
        on(Sn, Sn.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return ua(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), on(Sn, Sn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, dt(n, r, l);
    }
    return pr(n, r, l);
  }
  var Eu, ba, Gn, uh;
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
  }, ba = function() {
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
          c = he({}, c, { value: void 0 }), u = he({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Zn(n, c), u = Zn(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Dc);
      }
      dn(l, u);
      var m;
      l = null;
      for (P in c) if (!u.hasOwnProperty(P) && c.hasOwnProperty(P) && c[P] != null) if (P === "style") {
        var x = c[P];
        for (m in x) x.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else P !== "dangerouslySetInnerHTML" && P !== "children" && P !== "suppressContentEditableWarning" && P !== "suppressHydrationWarning" && P !== "autoFocus" && (H.hasOwnProperty(P) ? d || (d = []) : (d = d || []).push(P, null));
      for (P in u) {
        var T = u[P];
        if (x = c != null ? c[P] : void 0, u.hasOwnProperty(P) && T !== x && (T != null || x != null)) if (P === "style") if (x) {
          for (m in x) !x.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && x[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          P,
          l
        )), l = T;
        else P === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, x = x ? x.__html : void 0, T != null && x !== T && (d = d || []).push(P, T)) : P === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(P, "" + T) : P !== "suppressContentEditableWarning" && P !== "suppressHydrationWarning" && (H.hasOwnProperty(P) ? (T != null && P === "onScroll" && Wt("scroll", n), d || x === T || (d = [])) : (d = d || []).push(P, T));
      }
      l && (d = d || []).push("style", l);
      var P = d;
      (r.updateQueue = P) && (r.flags |= 4);
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
        return u = r.stateNode, vu(), qt(Hn), qt(gn), xs(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Dn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, ii !== null && ($s(ii), ii = null))), ba(n, r), Nr(r), null;
      case 5:
        jd(r);
        var c = ho(bs.current);
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
                Wt("cancel", u), Wt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Wt("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < cs.length; c++) Wt(cs[c], u);
                break;
              case "source":
                Wt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Wt(
                  "error",
                  u
                ), Wt("load", u);
                break;
              case "details":
                Wt("toggle", u);
                break;
              case "input":
                wr(u, d), Wt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, Wt("invalid", u);
                break;
              case "textarea":
                er(u, d), Wt("invalid", u);
            }
            dn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var x = d[m];
              m === "children" ? typeof x == "string" ? u.textContent !== x && (d.suppressHydrationWarning !== !0 && kc(u.textContent, x, n), c = ["children", x]) : typeof x == "number" && u.textContent !== "" + x && (d.suppressHydrationWarning !== !0 && kc(
                u.textContent,
                x,
                n
              ), c = ["children", "" + x]) : H.hasOwnProperty(m) && x != null && m === "onScroll" && Wt("scroll", u);
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
                  Wt("cancel", n), Wt("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Wt("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < cs.length; c++) Wt(cs[c], n);
                  c = u;
                  break;
                case "source":
                  Wt("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Wt(
                    "error",
                    n
                  ), Wt("load", n), c = u;
                  break;
                case "details":
                  Wt("toggle", n), c = u;
                  break;
                case "input":
                  wr(n, u), c = An(n, u), Wt("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = he({}, u, { value: void 0 }), Wt("invalid", n);
                  break;
                case "textarea":
                  er(n, u), c = Zn(n, u), Wt("invalid", n);
                  break;
                default:
                  c = u;
              }
              dn(l, c), x = c;
              for (d in x) if (x.hasOwnProperty(d)) {
                var T = x[d];
                d === "style" ? Bt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Ai(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ma(n, T) : typeof T == "number" && ma(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (H.hasOwnProperty(d) ? T != null && d === "onScroll" && Wt("scroll", n) : T != null && $e(n, d, T, m));
              }
              switch (l) {
                case "input":
                  zn(n), ha(n, u, !1);
                  break;
                case "textarea":
                  zn(n), Ja(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + lt(u.value));
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
          if (l = ho(bs.current), ho(wi.current), Dn(r)) {
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
        if (qt(Sn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (hn && ra !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Gv(), Ki(), r.flags |= 98560, d = !1;
          else if (d = Dn(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(E(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(E(317));
              d[ja] = r;
            } else Ki(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Nr(r), d = !1;
          } else ii !== null && ($s(ii), ii = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (Sn.current & 1) !== 0 ? Qn === 0 && (Qn = 3) : ep())), r.updateQueue !== null && (r.flags |= 4), Nr(r), null);
      case 4:
        return vu(), ba(n, r), n === null && ds(r.stateNode.containerInfo), Nr(r), null;
      case 10:
        return Nd(r.type._context), Nr(r), null;
      case 17:
        return Rn(r.type) && Ci(), Nr(r), null;
      case 19:
        if (qt(Sn), d = r.memoizedState, d === null) return Nr(r), null;
        if (u = (r.flags & 128) !== 0, m = d.rendering, m === null) if (u) zs(d, !1);
        else {
          if (Qn !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (m = jc(n), m !== null) {
              for (r.flags |= 128, zs(d, !1), u = m.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; ) d = l, n = u, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return on(Sn, Sn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && It() > wu && (r.flags |= 128, u = !0, zs(d, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = jc(m), n !== null) {
            if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), zs(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !hn) return Nr(r), null;
          } else 2 * It() - d.renderingStartTime > wu && l !== 1073741824 && (r.flags |= 128, u = !0, zs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = It(), r.sibling = null, l = Sn.current, on(Sn, u ? l & 1 | 2 : l & 1), r) : (Nr(r), null);
      case 22:
      case 23:
        return Zd(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (xa & 1073741824) !== 0 && (Nr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Nr(r), null;
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
        return vu(), qt(Hn), qt(gn), xs(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return jd(r), null;
      case 13:
        if (qt(Sn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(E(340));
          Ki();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return qt(Sn), null;
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
  var Co = !1, vr = !1, Ty = typeof WeakSet == "function" ? WeakSet : Set, ke = null;
  function Nl(n, r) {
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
    if (oo = hl, n = gl(), tu(n)) {
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
          var m = 0, x = -1, T = -1, P = 0, ie = 0, oe = n, ae = null;
          t: for (; ; ) {
            for (var Re; oe !== l || c !== 0 && oe.nodeType !== 3 || (x = m + c), oe !== d || u !== 0 && oe.nodeType !== 3 || (T = m + u), oe.nodeType === 3 && (m += oe.nodeValue.length), (Re = oe.firstChild) !== null; )
              ae = oe, oe = Re;
            for (; ; ) {
              if (oe === n) break t;
              if (ae === l && ++P === c && (x = m), ae === d && ++ie === u && (T = m), (Re = oe.nextSibling) !== null) break;
              oe = ae, ae = oe.parentNode;
            }
            oe = Re;
          }
          l = x === -1 || T === -1 ? null : { start: x, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (vs = { focusedElem: n, selectionRange: l }, hl = !1, ke = r; ke !== null; ) if (r = ke, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ke = n;
    else for (; ke !== null; ) {
      r = ke;
      try {
        var Oe = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Oe !== null) {
              var Le = Oe.memoizedProps, Ln = Oe.memoizedState, M = r.stateNode, k = M.getSnapshotBeforeUpdate(r.elementType === r.type ? Le : la(r.type, Le), Ln);
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
      } catch (ce) {
        Tn(r, r.return, ce);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ke = n;
        break;
      }
      ke = r.return;
    }
    return Oe = Kd, Kd = !1, Oe;
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
    r !== null && (n.alternate = null, ch(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ja], delete r[hs], delete r[Cd], delete r[bd], delete r[su])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
  function Va(n, r, l) {
    for (l = l.child; l !== null; ) Ji(n, r, l), l = l.sibling;
  }
  function Ji(n, r, l) {
    if (Xr && typeof Xr.onCommitFiberUnmount == "function") try {
      Xr.onCommitFiberUnmount(fl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        vr || Nl(l, r);
      case 6:
        var u = En, c = Hr;
        En = null, Va(n, r, l), En = u, Hr = c, En !== null && (Hr ? (n = En, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : En.removeChild(l.stateNode));
        break;
      case 18:
        En !== null && (Hr ? (n = En, l = l.stateNode, n.nodeType === 8 ? ou(n.parentNode, l) : n.nodeType === 1 && ou(n, l), za(n)) : ou(En, l.stateNode));
        break;
      case 4:
        u = En, c = Hr, En = l.stateNode.containerInfo, Hr = !0, Va(n, r, l), En = u, Hr = c;
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
        Va(n, r, l);
        break;
      case 1:
        if (!vr && (Nl(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
        } catch (x) {
          Tn(l, r, x);
        }
        Va(n, r, l);
        break;
      case 21:
        Va(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (vr = (u = vr) || l.memoizedState !== null, Va(n, r, l), vr = u) : Va(n, r, l);
        break;
      default:
        Va(n, r, l);
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
        var d = n, m = r, x = m;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 5:
              En = x.stateNode, Hr = !1;
              break e;
            case 3:
              En = x.stateNode.containerInfo, Hr = !0;
              break e;
            case 4:
              En = x.stateNode.containerInfo, Hr = !0;
              break e;
          }
          x = x.return;
        }
        if (En === null) throw Error(E(160));
        Ji(d, m, c), En = null, Hr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (P) {
        Tn(c, r, P);
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
        oi(r, n), ui(n), u & 512 && l !== null && Nl(l, l.return);
        break;
      case 5:
        if (oi(r, n), ui(n), u & 512 && l !== null && Nl(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ma(c, "");
          } catch (Le) {
            Tn(n, n.return, Le);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, x = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            x === "input" && d.type === "radio" && d.name != null && In(c, d), pn(x, m);
            var P = pn(x, d);
            for (m = 0; m < T.length; m += 2) {
              var ie = T[m], oe = T[m + 1];
              ie === "style" ? Bt(c, oe) : ie === "dangerouslySetInnerHTML" ? Ai(c, oe) : ie === "children" ? ma(c, oe) : $e(c, ie, oe, P);
            }
            switch (x) {
              case "input":
                Un(c, d);
                break;
              case "textarea":
                Rr(c, d);
                break;
              case "select":
                var ae = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Re = d.value;
                Re != null ? Yn(c, !!d.multiple, Re, !1) : ae !== !!d.multiple && (d.defaultValue != null ? Yn(
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
        oi(r, n), ui(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Jd = It())), u & 4 && fh(n);
        break;
      case 22:
        if (ie = l !== null && l.memoizedState !== null, n.mode & 1 ? (vr = (P = vr) || ie, oi(r, n), vr = P) : oi(r, n), ui(n), u & 8192) {
          if (P = n.memoizedState !== null, (n.stateNode.isHidden = P) && !ie && (n.mode & 1) !== 0) for (ke = n, ie = n.child; ie !== null; ) {
            for (oe = ke = ie; ke !== null; ) {
              switch (ae = ke, Re = ae.child, ae.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Cu(4, ae, ae.return);
                  break;
                case 1:
                  Nl(ae, ae.return);
                  var Oe = ae.stateNode;
                  if (typeof Oe.componentWillUnmount == "function") {
                    u = ae, l = ae.return;
                    try {
                      r = u, Oe.props = r.memoizedProps, Oe.state = r.memoizedState, Oe.componentWillUnmount();
                    } catch (Le) {
                      Tn(u, l, Le);
                    }
                  }
                  break;
                case 5:
                  Nl(ae, ae.return);
                  break;
                case 22:
                  if (ae.memoizedState !== null) {
                    vh(oe);
                    continue;
                  }
              }
              Re !== null ? (Re.return = ae, ke = Re) : vh(oe);
            }
            ie = ie.sibling;
          }
          e: for (ie = null, oe = n; ; ) {
            if (oe.tag === 5) {
              if (ie === null) {
                ie = oe;
                try {
                  c = oe.stateNode, P ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (x = oe.stateNode, T = oe.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, x.style.display = vt("display", m));
                } catch (Le) {
                  Tn(n, n.return, Le);
                }
              }
            } else if (oe.tag === 6) {
              if (ie === null) try {
                oe.stateNode.nodeValue = P ? "" : oe.memoizedProps;
              } catch (Le) {
                Tn(n, n.return, Le);
              }
            } else if ((oe.tag !== 22 && oe.tag !== 23 || oe.memoizedState === null || oe === n) && oe.child !== null) {
              oe.child.return = oe, oe = oe.child;
              continue;
            }
            if (oe === n) break e;
            for (; oe.sibling === null; ) {
              if (oe.return === null || oe.return === n) break e;
              ie === oe && (ie = null), oe = oe.return;
            }
            ie === oe && (ie = null), oe.sibling.return = oe.return, oe = oe.sibling;
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
            var m = u.stateNode.containerInfo, x = As(n);
            Ri(n, x, m);
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
    ke = n, ph(n);
  }
  function ph(n, r, l) {
    for (var u = (n.mode & 1) !== 0; ke !== null; ) {
      var c = ke, d = c.child;
      if (c.tag === 22 && u) {
        var m = c.memoizedState !== null || Co;
        if (!m) {
          var x = c.alternate, T = x !== null && x.memoizedState !== null || vr;
          x = Co;
          var P = vr;
          if (Co = m, (vr = T) && !P) for (ke = c; ke !== null; ) m = ke, T = m.child, m.tag === 22 && m.memoizedState !== null ? js(c) : T !== null ? (T.return = m, ke = T) : js(c);
          for (; d !== null; ) ke = d, ph(d), d = d.sibling;
          ke = c, Co = x, vr = P;
        }
        Xd(n);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, ke = d) : Xd(n);
    }
  }
  function Xd(n) {
    for (; ke !== null; ) {
      var r = ke;
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
              var x = r.stateNode;
              if (l === null && r.flags & 4) {
                l = x;
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
                var P = r.alternate;
                if (P !== null) {
                  var ie = P.memoizedState;
                  if (ie !== null) {
                    var oe = ie.dehydrated;
                    oe !== null && za(oe);
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
        } catch (ae) {
          Tn(r, r.return, ae);
        }
      }
      if (r === n) {
        ke = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ke = l;
        break;
      }
      ke = r.return;
    }
  }
  function vh(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r === n) {
        ke = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ke = l;
        break;
      }
      ke = r.return;
    }
  }
  function js(n) {
    for (; ke !== null; ) {
      var r = ke;
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
        ke = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, ke = x;
        break;
      }
      ke = r.return;
    }
  }
  var hh = Math.ceil, hf = Me.ReactCurrentDispatcher, bo = Me.ReactCurrentOwner, Lr = Me.ReactCurrentBatchConfig, Tt = 0, Bn = null, Nn = null, hr = 0, xa = 0, bu = ta(0), Qn = 0, xo = null, wo = 0, Ro = 0, Fs = 0, xu = null, sa = null, Jd = 0, wu = 1 / 0, Zi = null, Ll = !1, Hs = null, Ba = null, mf = !1, Ml = null, Ps = 0, Ru = 0, Tu = null, To = -1, Vs = 0;
  function un() {
    return (Tt & 6) !== 0 ? It() : To !== -1 ? To : To = It();
  }
  function wa(n) {
    return (n.mode & 1) === 0 ? 1 : (Tt & 2) !== 0 && hr !== 0 ? hr & -hr : po.transition !== null ? (Vs === 0 && (Vs = Jl()), Vs) : (n = Mt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : es(n.type)), n);
  }
  function Ra(n, r, l, u) {
    if (50 < Ru) throw Ru = 0, Tu = null, Error(E(185));
    vl(n, l, u), ((Tt & 2) === 0 || n !== Bn) && (n === Bn && ((Tt & 2) === 0 && (Ro |= l), Qn === 4 && zl(n, hr)), lr(n, u), l === 1 && Tt === 0 && (r.mode & 1) === 0 && (wu = It() + 500, ys && jr()));
  }
  function lr(n, r) {
    var l = n.callbackNode;
    Io(n, r);
    var u = mi(n, n === Bn ? hr : 0);
    if (u === 0) l !== null && vn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && vn(l), r === 1) n.tag === 0 ? xd(Ys.bind(null, n)) : El(Ys.bind(null, n)), xy(function() {
        (Tt & 6) === 0 && jr();
      }), l = null;
      else {
        switch (Zu(u)) {
          case 1:
            l = ut;
            break;
          case 4:
            l = hi;
            break;
          case 16:
            l = Hi;
            break;
          case 536870912:
            l = Pi;
            break;
          default:
            l = Hi;
        }
        l = Ch(l, mh.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function mh(n, r) {
    if (To = -1, Vs = 0, (Tt & 6) !== 0) throw Error(E(327));
    var l = n.callbackNode;
    if (_u() && n.callbackNode !== l) return null;
    var u = mi(n, n === Bn ? hr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = Sf(n, u);
    else {
      r = u;
      var c = Tt;
      Tt |= 2;
      var d = yh();
      (Bn !== n || hr !== r) && (Zi = null, wu = It() + 500, ko(n, r));
      do
        try {
          Dy();
          break;
        } catch (x) {
          gf(n, x);
        }
      while (!0);
      Od(), hf.current = d, Tt = c, Nn !== null ? r = 0 : (Bn = null, hr = 0, r = Qn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Bi(n), c !== 0 && (u = c, r = Bs(n, c))), r === 1) throw l = xo, ko(n, 0), zl(n, u), lr(n, It()), l;
      if (r === 6) zl(n, u);
      else {
        if (c = n.current.alternate, (u & 30) === 0 && !Is(c) && (r = Sf(n, u), r === 2 && (d = Bi(n), d !== 0 && (u = d, r = Bs(n, d))), r === 1)) throw l = xo, ko(n, 0), zl(n, u), lr(n, It()), l;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(E(345));
          case 2:
            Do(n, sa, Zi);
            break;
          case 3:
            if (zl(n, u), (u & 130023424) === u && (r = Jd + 500 - It(), 10 < r)) {
              if (mi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                un(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Oc(Do.bind(null, n, sa, Zi), r);
              break;
            }
            Do(n, sa, Zi);
            break;
          case 4:
            if (zl(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var m = 31 - zr(u);
              d = 1 << m, m = r[m], m > c && (c = m), u &= ~d;
            }
            if (u = c, u = It() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * hh(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Oc(Do.bind(null, n, sa, Zi), u);
              break;
            }
            Do(n, sa, Zi);
            break;
          case 5:
            Do(n, sa, Zi);
            break;
          default:
            throw Error(E(329));
        }
      }
    }
    return lr(n, It()), n.callbackNode === l ? mh.bind(null, n) : null;
  }
  function Bs(n, r) {
    var l = xu;
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
  function zl(n, r) {
    for (r &= ~Fs, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - zr(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Ys(n) {
    if ((Tt & 6) !== 0) throw Error(E(327));
    _u();
    var r = mi(n, 0);
    if ((r & 1) === 0) return lr(n, It()), null;
    var l = Sf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = Bi(n);
      u !== 0 && (r = u, l = Bs(n, u));
    }
    if (l === 1) throw l = xo, ko(n, 0), zl(n, r), lr(n, It()), l;
    if (l === 6) throw Error(E(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Do(n, sa, Zi), lr(n, It()), null;
  }
  function yf(n, r) {
    var l = Tt;
    Tt |= 1;
    try {
      return n(r);
    } finally {
      Tt = l, Tt === 0 && (wu = It() + 500, ys && jr());
    }
  }
  function _o(n) {
    Ml !== null && Ml.tag === 0 && (Tt & 6) === 0 && _u();
    var r = Tt;
    Tt |= 1;
    var l = Lr.transition, u = Mt;
    try {
      if (Lr.transition = null, Mt = 1, n) return n();
    } finally {
      Mt = u, Lr.transition = l, Tt = r, (Tt & 6) === 0 && jr();
    }
  }
  function Zd() {
    xa = bu.current, qt(bu);
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
          vu(), qt(Hn), qt(gn), xs();
          break;
        case 5:
          jd(u);
          break;
        case 4:
          vu();
          break;
        case 13:
          qt(Sn);
          break;
        case 19:
          qt(Sn);
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
    if (Bn = n, Nn = n = Al(n.current, null), hr = xa = r, Qn = 0, xo = null, Fs = Ro = wo = 0, sa = xu = null, vo !== null) {
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
        if (Od(), Fe.current = Xt, Fc) {
          for (var u = st.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Fc = !1;
        }
        if (Dt = 0, Wn = nn = st = null, ws = !1, Rs = 0, bo.current = null, l === null || l.return === null) {
          Qn = 1, xo = r, Nn = null;
          break;
        }
        e: {
          var d = n, m = l.return, x = l, T = r;
          if (r = hr, x.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var P = T, ie = x, oe = ie.tag;
            if ((ie.mode & 1) === 0 && (oe === 0 || oe === 11 || oe === 15)) {
              var ae = ie.alternate;
              ae ? (ie.updateQueue = ae.updateQueue, ie.memoizedState = ae.memoizedState, ie.lanes = ae.lanes) : (ie.updateQueue = null, ie.memoizedState = null);
            }
            var Re = Id(m);
            if (Re !== null) {
              Re.flags &= -257, ih(Re, m, x, d, r), Re.mode & 1 && $d(d, P, r), r = Re, T = P;
              var Oe = r.updateQueue;
              if (Oe === null) {
                var Le = /* @__PURE__ */ new Set();
                Le.add(T), r.updateQueue = Le;
              } else Oe.add(T);
              break e;
            } else {
              if ((r & 1) === 0) {
                $d(d, P, r), ep();
                break e;
              }
              T = Error(E(426));
            }
          } else if (hn && x.mode & 1) {
            var Ln = Id(m);
            if (Ln !== null) {
              (Ln.flags & 65536) === 0 && (Ln.flags |= 256), ih(Ln, m, x, d, r), Ss(Ol(T, x));
              break e;
            }
          }
          d = T = Ol(T, x), Qn !== 4 && (Qn = 2), xu === null ? xu = [d] : xu.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var M = Ns(d, T, r);
                Jv(d, M);
                break e;
              case 1:
                x = T;
                var k = d.type, U = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof k.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (Ba === null || !Ba.has(U)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ce = ah(d, x, r);
                  Jv(d, ce);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        gh(l);
      } catch (Ce) {
        r = Ce, Nn === l && l !== null && (Nn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function yh() {
    var n = hf.current;
    return hf.current = Xt, n === null ? Xt : n;
  }
  function ep() {
    (Qn === 0 || Qn === 3 || Qn === 2) && (Qn = 4), Bn === null || (wo & 268435455) === 0 && (Ro & 268435455) === 0 || zl(Bn, hr);
  }
  function Sf(n, r) {
    var l = Tt;
    Tt |= 2;
    var u = yh();
    (Bn !== n || hr !== r) && (Zi = null, ko(n, r));
    do
      try {
        ky();
        break;
      } catch (c) {
        gf(n, c);
      }
    while (!0);
    if (Od(), Tt = l, hf.current = u, Nn !== null) throw Error(E(261));
    return Bn = null, hr = 0, Qn;
  }
  function ky() {
    for (; Nn !== null; ) tp(Nn);
  }
  function Dy() {
    for (; Nn !== null && !Tr(); ) tp(Nn);
  }
  function tp(n) {
    var r = rp(n.alternate, n, xa);
    n.memoizedProps = n.pendingProps, r === null ? gh(n) : Nn = r, bo.current = null;
  }
  function gh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = Qd(l, r, xa), l !== null) {
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
    var u = Mt, c = Lr.transition;
    try {
      Lr.transition = null, Mt = 1, Oy(n, r, l, u);
    } finally {
      Lr.transition = c, Mt = u;
    }
    return null;
  }
  function Oy(n, r, l, u) {
    do
      _u();
    while (Ml !== null);
    if ((Tt & 6) !== 0) throw Error(E(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(E(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Xu(n, d), n === Bn && (Nn = Bn = null, hr = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || mf || (mf = !0, Ch(Hi, function() {
      return _u(), null;
    })), d = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || d) {
      d = Lr.transition, Lr.transition = null;
      var m = Mt;
      Mt = 1;
      var x = Tt;
      Tt |= 4, bo.current = null, _y(n, l), dh(l, n), zv(vs), hl = !!oo, vs = oo = null, n.current = l, Us(l), Za(), Tt = x, Mt = m, Lr.transition = d;
    } else n.current = l;
    if (mf && (mf = !1, Ml = n, Ps = c), d = n.pendingLanes, d === 0 && (Ba = null), qu(l.stateNode), lr(n, It()), r !== null) for (u = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Ll) throw Ll = !1, n = Hs, Hs = null, n;
    return (Ps & 1) !== 0 && n.tag !== 0 && _u(), d = n.pendingLanes, (d & 1) !== 0 ? n === Tu ? Ru++ : (Ru = 0, Tu = n) : Ru = 0, jr(), null;
  }
  function _u() {
    if (Ml !== null) {
      var n = Zu(Ps), r = Lr.transition, l = Mt;
      try {
        if (Lr.transition = null, Mt = 16 > n ? 16 : n, Ml === null) var u = !1;
        else {
          if (n = Ml, Ml = null, Ps = 0, (Tt & 6) !== 0) throw Error(E(331));
          var c = Tt;
          for (Tt |= 4, ke = n.current; ke !== null; ) {
            var d = ke, m = d.child;
            if ((ke.flags & 16) !== 0) {
              var x = d.deletions;
              if (x !== null) {
                for (var T = 0; T < x.length; T++) {
                  var P = x[T];
                  for (ke = P; ke !== null; ) {
                    var ie = ke;
                    switch (ie.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Cu(8, ie, d);
                    }
                    var oe = ie.child;
                    if (oe !== null) oe.return = ie, ke = oe;
                    else for (; ke !== null; ) {
                      ie = ke;
                      var ae = ie.sibling, Re = ie.return;
                      if (ch(ie), ie === P) {
                        ke = null;
                        break;
                      }
                      if (ae !== null) {
                        ae.return = Re, ke = ae;
                        break;
                      }
                      ke = Re;
                    }
                  }
                }
                var Oe = d.alternate;
                if (Oe !== null) {
                  var Le = Oe.child;
                  if (Le !== null) {
                    Oe.child = null;
                    do {
                      var Ln = Le.sibling;
                      Le.sibling = null, Le = Ln;
                    } while (Le !== null);
                  }
                }
                ke = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && m !== null) m.return = d, ke = m;
            else e: for (; ke !== null; ) {
              if (d = ke, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Cu(9, d, d.return);
              }
              var M = d.sibling;
              if (M !== null) {
                M.return = d.return, ke = M;
                break e;
              }
              ke = d.return;
            }
          }
          var k = n.current;
          for (ke = k; ke !== null; ) {
            m = ke;
            var U = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && U !== null) U.return = m, ke = U;
            else e: for (m = k; ke !== null; ) {
              if (x = ke, (x.flags & 2048) !== 0) try {
                switch (x.tag) {
                  case 0:
                  case 11:
                  case 15:
                    df(9, x);
                }
              } catch (Ce) {
                Tn(x, x.return, Ce);
              }
              if (x === m) {
                ke = null;
                break e;
              }
              var ce = x.sibling;
              if (ce !== null) {
                ce.return = x.return, ke = ce;
                break e;
              }
              ke = x.return;
            }
          }
          if (Tt = c, jr(), Xr && typeof Xr.onPostCommitFiberRoot == "function") try {
            Xr.onPostCommitFiberRoot(fl, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Mt = l, Lr.transition = r;
      }
    }
    return !1;
  }
  function Sh(n, r, l) {
    r = Ol(l, r), r = Ns(n, r, 1), n = Tl(n, r, 1), r = un(), n !== null && (vl(n, 1, r), lr(n, r));
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
          n = Ol(l, n), n = ah(r, n, 1), r = Tl(r, n, 1), n = un(), r !== null && (vl(r, 1, n), lr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function np(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = un(), n.pingedLanes |= n.suspendedLanes & l, Bn === n && (hr & l) === l && (Qn === 4 || Qn === 3 && (hr & 130023424) === hr && 500 > It() - Jd ? ko(n, 0) : Fs |= l), lr(n, r);
  }
  function Eh(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = dl, dl <<= 1, (dl & 130023424) === 0 && (dl = 4194304)));
    var l = un();
    n = xi(n, r), n !== null && (vl(n, r, l), lr(n, l));
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
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Hn.current) ir = !0;
    else {
      if ((n.lanes & l) === 0 && (r.flags & 128) === 0) return ir = !1, ff(n, r, l);
      ir = (n.flags & 131072) !== 0;
    }
    else ir = !1, hn && (r.flags & 1048576) !== 0 && Yv(r, xl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Pa(n, r), n = r.pendingProps;
        var c = Ea(r, gn.current);
        du(r, l), c = Ke(null, r, u, n, c, l);
        var d = _l();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Rn(u) ? (d = !0, co(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Rl(r), c.updater = tf, r.stateNode = c, c._reactInternals = r, Vd(r, u, n, l), r = Yd(null, r, u, !0, d, l)) : (r.tag = 0, hn && d && wd(r), On(null, r, c, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Pa(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = zy(u), n = la(u, n), c) {
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
            c = Ol(Error(E(423)), r), r = Su(n, r, u, l, c);
            break e;
          } else if (u !== c) {
            c = Ol(Error(E(424)), r), r = Su(n, r, u, l, c);
            break e;
          } else for (ra = ri(r.stateNode.containerInfo.firstChild), na = r, hn = !0, ii = null, l = dr(r, null, u, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ki(), u === c) {
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
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, on(ye, u._currentValue), u._currentValue = m, d !== null) if (ni(d.value, m)) {
            if (d.children === c.children && !Hn.current) {
              r = pr(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var x = d.dependencies;
            if (x !== null) {
              m = d.child;
              for (var T = x.firstContext; T !== null; ) {
                if (T.context === u) {
                  if (d.tag === 1) {
                    T = Xi(-1, l & -l), T.tag = 2;
                    var P = d.updateQueue;
                    if (P !== null) {
                      P = P.shared;
                      var ie = P.pending;
                      ie === null ? T.next = T : (T.next = ie.next, ie.next = T), P.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Ld(
                    d.return,
                    l,
                    r
                  ), x.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(E(341));
              m.lanes |= l, x = m.alternate, x !== null && (x.lanes |= l), Ld(m, l, r), m = d.sibling;
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
        return c = r.type, u = r.pendingProps.children, du(r, l), c = Kt(c), u = u(c), r.flags |= 1, On(n, r, u, l), r.child;
      case 14:
        return u = r.type, c = la(u, r.pendingProps), c = la(u.type, c), oa(n, r, u, c, l);
      case 15:
        return Eo(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : la(u, c), Pa(n, r), r.tag = 1, Rn(u) ? (n = !0, co(r)) : n = !1, du(r, l), rh(r, u, c), Vd(r, u, c, l), Yd(null, r, u, !0, n, l);
      case 19:
        return ua(n, r, l);
      case 22:
        return dt(n, r, l);
    }
    throw Error(E(156, r.tag));
  };
  function Ch(n, r) {
    return cn(n, r);
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
      if (n = n.$$typeof, n === Ve) return 11;
      if (n === jt) return 14;
    }
    return 2;
  }
  function Al(n, r) {
    var l = n.alternate;
    return l === null ? (l = $a(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Ef(n, r, l, u, c, d) {
    var m = 2;
    if (u = n, typeof n == "function") ap(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Ze:
        return Ul(l.children, c, d, r);
      case We:
        m = 8, c |= 8;
        break;
      case Vt:
        return n = $a(12, l, r, c | 2), n.elementType = Vt, n.lanes = d, n;
      case St:
        return n = $a(13, l, r, c), n.elementType = St, n.lanes = d, n;
      case Ue:
        return n = $a(19, l, r, c), n.elementType = Ue, n.lanes = d, n;
      case ct:
        return ku(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case xt:
            m = 10;
            break e;
          case Nt:
            m = 9;
            break e;
          case Ve:
            m = 11;
            break e;
          case jt:
            m = 14;
            break e;
          case pt:
            m = 16, u = null;
            break e;
        }
        throw Error(E(130, n == null ? n : typeof n, ""));
    }
    return r = $a(m, l, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function Ul(n, r, l, u) {
    return n = $a(7, n, u, r), n.lanes = l, n;
  }
  function ku(n, r, l, u) {
    return n = $a(22, n, u, r), n.elementType = ct, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Oo(n, r, l) {
    return n = $a(6, n, null, r), n.lanes = l, n;
  }
  function ip(n, r, l) {
    return r = $a(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function bh(n, r, l, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zl(0), this.expirationTimes = Zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zl(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Cf(n, r, l, u, c, d, m, x, T) {
    return n = new bh(n, r, l, x, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = $a(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rl(d), n;
  }
  function xh(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ve, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function wh(n) {
    if (!n) return gt;
    n = n._reactInternals;
    e: {
      if (Ee(n) !== n || n.tag !== 1) throw Error(E(170));
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
  function lp(n, r, l, u, c, d, m, x, T) {
    return n = Cf(l, u, !0, n, c, d, m, x, T), n.context = wh(null), l = n.current, u = un(), c = wa(l), d = Xi(u, c), d.callback = r ?? null, Tl(l, d, c), n.current.lanes = c, vl(n, c, u), lr(n, u), n;
  }
  function bf(n, r, l, u) {
    var c = r.current, d = un(), m = wa(c);
    return l = wh(l), r.context === null ? r.context = l : r.pendingContext = l, r = Xi(d, m), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Tl(c, r, m), n !== null && (Ra(n, c, m, d), Ac(n, c, m)), m;
  }
  function xf(n) {
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
  function jl(n) {
    this._internalRoot = n;
  }
  Rf.prototype.render = jl.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(E(409));
    bf(n, r, null, null);
  }, Rf.prototype.unmount = jl.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      _o(function() {
        bf(null, n, null, null);
      }), r[Qi] = null;
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
          var P = xf(m);
          d.call(P);
        };
      }
      var m = lp(r, u, n, 0, null, !1, !1, "", _h);
      return n._reactRootContainer = m, n[Qi] = m.current, ds(n.nodeType === 8 ? n.parentNode : n), _o(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var x = u;
      u = function() {
        var P = xf(T);
        x.call(P);
      };
    }
    var T = Cf(n, 0, !1, null, null, !1, !1, "", _h);
    return n._reactRootContainer = T, n[Qi] = T.current, ds(n.nodeType === 8 ? n.parentNode : n), _o(function() {
      bf(r, T, l, u);
    }), T;
  }
  function _f(n, r, l, u, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var x = c;
        c = function() {
          var T = xf(m);
          x.call(T);
        };
      }
      bf(r, m, n, c);
    } else m = Ay(l, r, n, c, u);
    return xf(m);
  }
  Yo = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Jr(r.pendingLanes);
          l !== 0 && (Ju(r, l | 1), lr(r, It()), (Tt & 6) === 0 && (wu = It() + 500, jr()));
        }
        break;
      case 13:
        _o(function() {
          var u = xi(n, 1);
          if (u !== null) {
            var c = un();
            Ra(u, n, 1, c);
          }
        }), wf(n, 1);
    }
  }, zt = function(n) {
    if (n.tag === 13) {
      var r = xi(n, 134217728);
      if (r !== null) {
        var l = un();
        Ra(r, n, 134217728, l);
      }
      wf(n, 134217728);
    }
  }, yc = function(n) {
    if (n.tag === 13) {
      var r = wa(n), l = xi(n, r);
      if (l !== null) {
        var u = un();
        Ra(l, n, r, u);
      }
      wf(n, r);
    }
  }, yi = function() {
    return Mt;
  }, tt = function(n, r) {
    var l = Mt;
    try {
      return Mt = n, r();
    } finally {
      Mt = l;
    }
  }, Jt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Un(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var c = qi(u);
              if (!c) throw Error(E(90));
              Jn(u), Un(u, c);
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
  var kh = { usingClientEntryPoint: !1, Events: [ms, je, qi, La, Ui, yf] }, Ws = { findFiberByHostInstance: so, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Uy = { bundleType: Ws.bundleType, version: Ws.version, rendererPackageName: Ws.rendererPackageName, rendererConfig: Ws.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Me.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ht(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ws.findFiberByHostInstance || Th, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gs.isDisabled && Gs.supportsFiber) try {
      fl = Gs.inject(Uy), Xr = Gs;
    } catch {
    }
  }
  return qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kh, qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!up(r)) throw Error(E(200));
    return xh(n, r, null, l);
  }, qa.createRoot = function(n, r) {
    if (!up(n)) throw Error(E(299));
    var l = !1, u = "", c = op;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Cf(n, 1, !1, null, null, l, !1, u, c), n[Qi] = r.current, ds(n.nodeType === 8 ? n.parentNode : n), new jl(r);
  }, qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(E(188)) : (n = Object.keys(n).join(","), Error(E(268, n)));
    return n = ht(r), n = n === null ? null : n.stateNode, n;
  }, qa.flushSync = function(n) {
    return _o(n);
  }, qa.hydrate = function(n, r, l) {
    if (!Tf(r)) throw Error(E(200));
    return _f(null, n, r, !0, l);
  }, qa.hydrateRoot = function(n, r, l) {
    if (!up(n)) throw Error(E(405));
    var u = l != null && l.hydratedSources || null, c = !1, d = "", m = op;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = lp(r, null, n, 1, l ?? null, c, !1, d, m), n[Qi] = r.current, ds(n), u) for (n = 0; n < u.length; n++) l = u[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
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
        n._reactRootContainer = null, n[Qi] = null;
      });
    }), !0) : !1;
  }, qa.unstable_batchedUpdates = yf, qa.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!Tf(l)) throw Error(E(200));
    if (n == null || n._reactInternals === void 0) throw Error(E(38));
    return _f(n, r, l, !1, u);
  }, qa.version = "18.3.1-next-f1338f8080-20240426", qa;
}
var Ka = {}, Mx;
function vD() {
  if (Mx) return Ka;
  Mx = 1;
  var y = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return y.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var b = pc(), E = Qx(), O = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, H = !1;
    function L(e) {
      H = e;
    }
    function Q(e) {
      if (!H) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ne("warn", e, a);
      }
    }
    function g(e) {
      if (!H) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ne("error", e, a);
      }
    }
    function ne(e, t, a) {
      {
        var i = O.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Z = 0, J = 1, le = 2, $ = 3, se = 4, G = 5, ee = 6, de = 7, qe = 8, Qe = 9, $e = 10, Me = 11, Ye = 12, ve = 13, Ze = 14, We = 15, Vt = 16, xt = 17, Nt = 18, Ve = 19, St = 21, Ue = 22, jt = 23, pt = 24, ct = 25, X = !0, xe = !1, he = !1, N = !1, te = !1, He = !0, et = !0, rt = !0, yt = !0, Lt = /* @__PURE__ */ new Set(), lt = {}, kt = {};
    function Qt(e, t) {
      zn(e, t), zn(e + "Capture", t);
    }
    function zn(e, t) {
      lt[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), lt[e] = t;
      {
        var a = e.toLowerCase();
        kt[a] = e, e === "onDoubleClick" && (kt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Lt.add(t[i]);
    }
    var Jn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ur = Object.prototype.hasOwnProperty;
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
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), In(e);
    }
    function ha(e) {
      if (wr(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), In(e);
    }
    function Xa(e, t) {
      if (wr(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), In(e);
    }
    function Mr(e, t) {
      if (wr(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, An(e)), In(e);
    }
    function Yn(e) {
      if (wr(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", An(e)), In(e);
    }
    function Zn(e) {
      if (wr(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", An(e)), In(e);
    }
    var er = 0, Rr = 1, Ja = 2, jn = 3, sr = 4, qr = 5, Ai = 6, ma = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", pe = ma + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Be = new RegExp("^[" + ma + "][" + pe + "]*$"), vt = {}, Bt = {};
    function fn(e) {
      return ur.call(Bt, e) ? !0 : ur.call(vt, e) ? !1 : Be.test(e) ? (Bt[e] = !0, !0) : (vt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function dn(e, t, a) {
      return t !== null ? t.type === er : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function pn(e, t, a, i) {
      if (a !== null && a.type === er)
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
    function tr(e, t, a, i) {
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
          case Ai:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function sn(e) {
      return $t.hasOwnProperty(e) ? $t[e] : null;
    }
    function Jt(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === Ja || t === jn || t === sr, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var $t = {}, ya = [
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
      $t[e] = new Jt(
        e,
        er,
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
      $t[t] = new Jt(
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
      $t[e] = new Jt(
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
      $t[e] = new Jt(
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
      $t[e] = new Jt(
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
      $t[e] = new Jt(
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
      $t[e] = new Jt(
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
      $t[e] = new Jt(
        e,
        Ai,
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
      $t[e] = new Jt(
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
      $t[t] = new Jt(
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
      $t[t] = new Jt(
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
      $t[t] = new Jt(
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
      $t[e] = new Jt(
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
    var Ui = "xlinkHref";
    $t[Ui] = new Jt(
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
      $t[e] = new Jt(
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
    function ji(e) {
      !Kl && ql.test(e) && (Kl = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Xl(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Un(a, t), i.sanitizeURL && ji("" + a);
        var s = i.attributeName, f = null;
        if (i.type === sr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : tr(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (tr(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === jn)
            return a;
          f = e.getAttribute(s);
        }
        return tr(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
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
      var o = sn(t);
      if (!dn(t, o, i)) {
        if (tr(t, a, o, i) && (a = null), i || o === null) {
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
          D === jn || D === sr && a === !0 ? _ = "" : (Un(a, S), _ = "" + a, o.sanitizeURL && ji(_.toString())), C ? e.setAttributeNS(C, S, _) : e.setAttribute(S, _);
        }
      }
    }
    var cr = Symbol.for("react.element"), Sa = Symbol.for("react.portal"), Kr = Symbol.for("react.fragment"), pi = Symbol.for("react.strict_mode"), vi = Symbol.for("react.profiler"), Fi = Symbol.for("react.provider"), R = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), ge = Symbol.for("react.suspense"), Ee = Symbol.for("react.suspense_list"), Et = Symbol.for("react.memo"), at = Symbol.for("react.lazy"), wt = Symbol.for("react.scope"), ht = Symbol.for("react.debug_trace_mode"), _n = Symbol.for("react.offscreen"), cn = Symbol.for("react.legacy_hidden"), vn = Symbol.for("react.cache"), Tr = Symbol.for("react.tracing_marker"), Za = Symbol.iterator, It = "@@iterator";
    function yn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Za && e[Za] || e[It];
      return typeof t == "function" ? t : null;
    }
    var ut = Object.assign, hi = 0, Hi, vc, Pi, fl, Xr, qu, zr;
    function Ku() {
    }
    Ku.__reactDisabledLog = !0;
    function hc() {
      {
        if (hi === 0) {
          Hi = console.log, vc = console.info, Pi = console.warn, fl = console.error, Xr = console.group, qu = console.groupCollapsed, zr = console.groupEnd;
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
            log: ut({}, e, {
              value: Hi
            }),
            info: ut({}, e, {
              value: vc
            }),
            warn: ut({}, e, {
              value: Pi
            }),
            error: ut({}, e, {
              value: fl
            }),
            group: ut({}, e, {
              value: Xr
            }),
            groupCollapsed: ut({}, e, {
              value: qu
            }),
            groupEnd: ut({}, e, {
              value: zr
            })
          });
        }
        hi < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Vi = O.ReactCurrentDispatcher, dl;
    function Jr(e, t, a) {
      {
        if (dl === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            dl = i && i[1] || "";
          }
        return `
` + dl + e;
      }
    }
    var mi = !1, pl;
    {
      var Io = typeof WeakMap == "function" ? WeakMap : Map;
      pl = new Io();
    }
    function Bi(e, t) {
      if (!e || mi)
        return "";
      {
        var a = pl.get(e);
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
            } catch (B) {
              i = B;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (B) {
              i = B;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (B) {
            i = B;
          }
          e();
        }
      } catch (B) {
        if (B && i && typeof B.stack == "string") {
          for (var p = B.stack.split(`
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
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && pl.set(e, D), D;
                  }
                while (S >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        mi = !1, Vi.current = s, mc(), Error.prepareStackTrace = o;
      }
      var _ = e ? e.displayName || e.name : "", F = _ ? Jr(_) : "";
      return typeof e == "function" && pl.set(e, F), F;
    }
    function Jl(e, t, a) {
      return Bi(e, !0);
    }
    function Zl(e, t, a) {
      return Bi(e, !1);
    }
    function vl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Xu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Bi(e, vl(e));
      if (typeof e == "string")
        return Jr(e);
      switch (e) {
        case ge:
          return Jr("Suspense");
        case Ee:
          return Jr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case re:
            return Zl(e.render);
          case Et:
            return Xu(e.type, t, a);
          case at: {
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
        case G:
          return Jr(e.type);
        case Vt:
          return Jr("Lazy");
        case ve:
          return Jr("Suspense");
        case Ve:
          return Jr("SuspenseList");
        case Z:
        case le:
        case We:
          return Zl(e.type);
        case Me:
          return Zl(e.type.render);
        case J:
          return Jl(e.type);
        default:
          return "";
      }
    }
    function Mt(e) {
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
    function zt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case ge:
          return "Suspense";
        case Ee:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Yo(t) + ".Consumer";
          case Fi:
            var a = e;
            return Yo(a._context) + ".Provider";
          case re:
            return Zu(e, e.render, "ForwardRef");
          case Et:
            var i = e.displayName || null;
            return i !== null ? i : zt(e.type) || "Memo";
          case at: {
            var o = e, s = o._payload, f = o._init;
            try {
              return zt(f(s));
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
    function tt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case pt:
          return "Cache";
        case Qe:
          var i = a;
          return yi(i) + ".Consumer";
        case $e:
          var o = a;
          return yi(o._context) + ".Provider";
        case Nt:
          return "DehydratedFragment";
        case Me:
          return yc(a, a.render, "ForwardRef");
        case de:
          return "Fragment";
        case G:
          return a;
        case se:
          return "Portal";
        case $:
          return "Root";
        case ee:
          return "Text";
        case Vt:
          return zt(a);
        case qe:
          return a === pi ? "StrictMode" : "Mode";
        case Ue:
          return "Offscreen";
        case Ye:
          return "Profiler";
        case St:
          return "Scope";
        case ve:
          return "Suspense";
        case Ve:
          return "SuspenseList";
        case ct:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case J:
        case Z:
        case xt:
        case le:
        case Ze:
        case We:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var eo = O.ReactDebugCurrentFrame, nr = null, Zr = !1;
    function Ar() {
      {
        if (nr === null)
          return null;
        var e = nr._debugOwner;
        if (e !== null && typeof e < "u")
          return tt(e);
      }
      return null;
    }
    function gi() {
      return nr === null ? "" : Mt(nr);
    }
    function xn() {
      eo.getCurrentStack = null, nr = null, Zr = !1;
    }
    function Zt(e) {
      eo.getCurrentStack = e === null ? null : gi, nr = e, Zr = !1;
    }
    function ei() {
      return nr;
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
          return Zn(e), e;
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
      od[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
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
      Zn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(p) {
            Zn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Zn(p), i = "" + p;
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
    function hl(e) {
      if (!e)
        return !1;
      var t = Go(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = no(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function $i(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var qo = !1, ml = !1, Ii = !1, Ko = !1;
    function es(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Ua(e, t) {
      var a = e, i = t.checked, o = ut({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function Xo(e, t) {
      Wo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ml && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), ml = !0), t.value !== void 0 && t.defaultValue !== void 0 && !qo && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), qo = !0);
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
        !a._wrapperState.controlled && i && !Ko && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ko = !0), a._wrapperState.controlled && !i && !Ii && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ii = !0);
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
      t.hasOwnProperty("value") ? De(a, t.type, o) : t.hasOwnProperty("defaultValue") && De(a, t.type, Ur(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
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
    function I(e, t) {
      var a = e;
      w(a, t), fe(a, t);
    }
    function fe(e, t) {
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
            hl(f), w(f, p);
          }
        }
      }
    }
    function De(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || $i(e.ownerDocument) !== e) && (a == null ? e.defaultValue = _r(e._wrapperState.initialValue) : e.defaultValue !== _r(a) && (e.defaultValue = _r(a)));
    }
    var we = !1, Xe = !1, mt = !1;
    function Yt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? b.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Xe || (Xe = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (mt || (mt = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !we && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), we = !0);
    }
    function en(e, t) {
      t.value != null && e.setAttribute("value", _r(Ur(t.value)));
    }
    var tn = Array.isArray;
    function ft(e) {
      return tn(e);
    }
    var ln;
    ln = !1;
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
            var i = ft(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, kn()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, kn());
          }
        }
      }
    }
    function Yi(e, t, a, i) {
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
      return ut({}, t, {
        value: void 0
      });
    }
    function ns(e, t) {
      var a = e;
      ts(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ln && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ln = !0);
    }
    function ud(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Yi(a, !!t.multiple, i, !1) : t.defaultValue != null && Yi(a, !!t.multiple, t.defaultValue, !0);
    }
    function gc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? Yi(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? Yi(a, !!t.multiple, t.defaultValue, !0) : Yi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function sd(e, t) {
      var a = e, i = t.value;
      i != null && Yi(a, !!t.multiple, i, !1);
    }
    var vv = !1;
    function Sc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ut({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: _r(a._wrapperState.initialValue)
      });
      return i;
    }
    function hv(e, t) {
      var a = e;
      Wo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !vv && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component"), vv = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ft(o)) {
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
    }), ea = 1, Wi = 3, Fn = 8, Gi = 9, rs = 11, yl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Wi) {
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
    function bc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Jo.hasOwnProperty(e) && Jo[e]) ? t + "px" : (Mr(t, e), ("" + t).trim());
    }
    var Cv = /([A-Z])/g, Zo = /^ms-/;
    function hy(e) {
      return e.replace(Cv, "-$1").toLowerCase().replace(Zo, "-ms-");
    }
    var bv = function() {
    };
    {
      var my = /^(?:webkit|moz|o)[A-Z]/, xv = /^-ms-/, wv = /-(.)/g, eu = /;\s*$/, Si = {}, dd = {}, as = !1, Rv = !1, Tv = function(e) {
        return e.replace(wv, function(t, a) {
          return a.toUpperCase();
        });
      }, pd = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Tv(e.replace(xv, "ms-"))
        ));
      }, vd = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, _v = function(e, t) {
        dd.hasOwnProperty(t) && dd[t] || (dd[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(eu, "")));
      }, kv = function(e, t) {
        as || (as = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Dv = function(e, t) {
        Rv || (Rv = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      bv = function(e, t) {
        e.indexOf("-") > -1 ? pd(e) : my.test(e) ? vd(e) : eu.test(t) && _v(e, t), typeof t == "number" && (isNaN(t) ? kv(e, t) : isFinite(t) || Dv(e, t));
      };
    }
    var yy = bv;
    function gy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : hy(i)) + ":", t += bc(i, o, s), a = ";";
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
          var s = bc(i, t[i], o);
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
            o[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Sy(e[f]) ? "Removing" : "Updating", f, p);
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
    }, Lv = ut({
      menuitem: !0
    }, is), Mv = "__html";
    function xc(e, t) {
      if (t) {
        if (Lv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Mv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function gl(e, t) {
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
    }, nu = {}, ru = new RegExp("^(aria)-[" + pe + "]*$"), hd = new RegExp("^(aria)[A-Z][" + pe + "]*$");
    function ls(e, t) {
      {
        if (ur.call(nu, t) && nu[t])
          return !0;
        if (hd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = zv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), nu[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), nu[t] = !0, !0;
        }
        if (ru.test(t)) {
          var o = t.toLowerCase(), s = zv.hasOwnProperty(o) ? o : null;
          if (s == null)
            return nu[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), nu[t] = !0, !0;
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
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Av(e, t) {
      gl(e, t) || md(e, t);
    }
    var os = !1;
    function au(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !os && (os = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var wc = function() {
    };
    {
      var kr = {}, us = /^on./, Uv = /^on[^A-Z]/, jv = new RegExp("^(aria)-[" + pe + "]*$"), Fv = new RegExp("^(aria)[A-Z][" + pe + "]*$");
      wc = function(e, t, a, i) {
        if (ur.call(kr, t) && kr[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), kr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(o) ? f[o] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), kr[t] = !0, !0;
          if (us.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), kr[t] = !0, !0;
        } else if (us.test(t))
          return Uv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), kr[t] = !0, !0;
        if (jv.test(t) || Fv.test(t))
          return !0;
        if (o === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), kr[t] = !0, !0;
        if (o === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), kr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), kr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), kr[t] = !0, !0;
        var v = sn(t), S = v !== null && v.type === er;
        if (tu.hasOwnProperty(o)) {
          var C = tu[o];
          if (C !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, C), kr[t] = !0, !0;
        } else if (!S && t !== o)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), kr[t] = !0, !0;
        return typeof a == "boolean" && pn(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), kr[t] = !0, !0) : S ? !0 : pn(t, a, v, !1) ? (kr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === jn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), kr[t] = !0), !0);
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
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Pv(e, t, a) {
      gl(e, t) || Hv(e, t, a);
    }
    var yd = 1, Ei = 2, io = 4, gd = yd | Ei | io, ss = null;
    function Ey(e) {
      ss !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ss = e;
    }
    function cs() {
      ss === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ss = null;
    }
    function Cy(e) {
      return e === ss;
    }
    function Rc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Wi ? t.parentNode : t;
    }
    var Tc = null, Wt = null, Sl = null;
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
      Wt ? Sl ? Sl.push(e) : Sl = [e] : Wt = e;
    }
    function Ed() {
      return Wt !== null || Sl !== null;
    }
    function iu() {
      if (Wt) {
        var e = Wt, t = Sl;
        if (Wt = null, Sl = null, fs(e), t)
          for (var a = 0; a < t.length; a++)
            fs(t[a]);
      }
    }
    var ps = function(e, t) {
      return e(t);
    }, lo = function() {
    }, _c = !1;
    function by() {
      var e = Ed();
      e && (lo(), iu());
    }
    function Vv(e, t, a) {
      if (_c)
        return e(t, a);
      _c = !0;
      try {
        return ps(e, t, a);
      } finally {
        _c = !1, by();
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
    if (Jn)
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
        var C = document.createEvent("Event"), D = !1, _ = !0, F = window.event, B = Object.getOwnPropertyDescriptor(window, "event");
        function Y() {
          Nc.removeEventListener(W, Ie, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = F);
        }
        var Se = Array.prototype.slice.call(arguments, 3);
        function Ie() {
          D = !0, Y(), a.apply(i, Se), _ = !1;
        }
        var ze, Ut = !1, _t = !1;
        function z(A) {
          if (ze = A.error, Ut = !0, ze === null && A.colno === 0 && A.lineno === 0 && (_t = !0), A.defaultPrevented && ze != null && typeof ze == "object")
            try {
              ze._suppressLogging = !0;
            } catch {
            }
        }
        var W = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", z), Nc.addEventListener(W, Ie, !1), C.initEvent(W, !1, !1), Nc.dispatchEvent(C), B && Object.defineProperty(window, "event", B), D && _ && (Ut ? _t && (ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ze)), window.removeEventListener("error", z), !D)
          return Y(), Oc.apply(this, arguments);
      };
    }
    var xy = $v, lu = !1, ou = null, ri = !1, Lc = null, uu = {
      onError: function(e) {
        lu = !0, ou = e;
      }
    };
    function ja(e, t, a, i, o, s, f, p, v) {
      lu = !1, ou = null, xy.apply(uu, arguments);
    }
    function hs(e, t, a, i, o, s, f, p, v) {
      if (ja.apply(this, arguments), lu) {
        var S = bd();
        ri || (ri = !0, Lc = S);
      }
    }
    function Qi() {
      if (ri) {
        var e = Lc;
        throw ri = !1, Lc = null, e;
      }
    }
    function Cd() {
      return lu;
    }
    function bd() {
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
    var je = (
      /*                      */
      0
    ), qi = (
      /*                */
      1
    ), wn = (
      /*                    */
      2
    ), Rt = (
      /*                       */
      4
    ), ta = (
      /*                */
      16
    ), qt = (
      /*                 */
      32
    ), on = (
      /*                     */
      64
    ), gt = (
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
    ), El = (
      /*                 */
      4194304
    ), xd = (
      /*                */
      8388608
    ), jr = (
      /*               */
      16777216
    ), Cl = (
      /*              */
      33554432
    ), bl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Rt | Fa | 0
    ), cu = wn | Rt | ta | qt | Hn | Rn | Ci, xl = Rt | on | Hn | Ci, fr = Ea | ta, Pn = El | xd | gs, fo = O.ReactCurrentOwner;
    function Fr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (wn | Rn)) !== je && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === $ ? a : null;
    }
    function bi(e) {
      if (e.tag === ve) {
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
    function wl(e) {
      return e.tag === $ ? e.stateNode.containerInfo : null;
    }
    function Yv(e) {
      return Fr(e) === e;
    }
    function wd(e) {
      {
        var t = fo.current;
        if (t !== null && t.tag === J) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", tt(a) || "A component"), i._warnedAboutRefsInRender = !0;
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
      if (i.tag !== $)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ra(e) {
      var t = na(e);
      return t !== null ? hn(t) : null;
    }
    function hn(e) {
      if (e.tag === G || e.tag === ee)
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
      if (e.tag === G || e.tag === ee)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== se) {
          var a = Rd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Td = E.unstable_scheduleCallback, _d = E.unstable_cancelCallback, kd = E.unstable_shouldYield, Wv = E.unstable_requestPaint, Dn = E.unstable_now, Gv = E.unstable_getCurrentPriorityLevel, Ki = E.unstable_ImmediatePriority, Ss = E.unstable_UserBlockingPriority, po = E.unstable_NormalPriority, Es = E.unstable_LowPriority, fu = E.unstable_IdlePriority, Qv = E.unstable_yieldValue, qv = E.unstable_setDisableYieldValue, li = null, dr = null, ye = null, Ca = !1, Or = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Dd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        et && (e = ut({}, e, {
          getLaneLabelMap: Md,
          injectProfilingHooks: vo
        })), li = t.inject(e), dr = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Od(e, t) {
      if (dr && typeof dr.onScheduleFiberRoot == "function")
        try {
          dr.onScheduleFiberRoot(li, e, t);
        } catch (a) {
          Ca || (Ca = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Nd(e, t) {
      if (dr && typeof dr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & gt) === gt;
          if (rt) {
            var i;
            switch (t) {
              case ua:
                i = Ki;
                break;
              case Pa:
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
          Ca || (Ca = !0, g("React instrumentation encountered an error: %s", o));
        }
    }
    function Ld(e) {
      if (dr && typeof dr.onPostCommitFiberRoot == "function")
        try {
          dr.onPostCommitFiberRoot(li, e);
        } catch (t) {
          Ca || (Ca = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function du(e) {
      if (dr && typeof dr.onCommitFiberUnmount == "function")
        try {
          dr.onCommitFiberUnmount(li, e);
        } catch (t) {
          Ca || (Ca = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Kt(e) {
      if (typeof Qv == "function" && (qv(e), L(e)), dr && typeof dr.setStrictMode == "function")
        try {
          dr.setStrictMode(li, e);
        } catch (t) {
          Ca || (Ca = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function vo(e) {
      ye = e;
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
      ye !== null && typeof ye.markCommitStarted == "function" && ye.markCommitStarted(e);
    }
    function xi() {
      ye !== null && typeof ye.markCommitStopped == "function" && ye.markCommitStopped();
    }
    function Ha(e) {
      ye !== null && typeof ye.markComponentRenderStarted == "function" && ye.markComponentRenderStarted(e);
    }
    function Rl() {
      ye !== null && typeof ye.markComponentRenderStopped == "function" && ye.markComponentRenderStopped();
    }
    function Xv(e) {
      ye !== null && typeof ye.markComponentPassiveEffectMountStarted == "function" && ye.markComponentPassiveEffectMountStarted(e);
    }
    function Xi() {
      ye !== null && typeof ye.markComponentPassiveEffectMountStopped == "function" && ye.markComponentPassiveEffectMountStopped();
    }
    function Tl(e) {
      ye !== null && typeof ye.markComponentPassiveEffectUnmountStarted == "function" && ye.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ac() {
      ye !== null && typeof ye.markComponentPassiveEffectUnmountStopped == "function" && ye.markComponentPassiveEffectUnmountStopped();
    }
    function Jv(e) {
      ye !== null && typeof ye.markComponentLayoutEffectMountStarted == "function" && ye.markComponentLayoutEffectMountStarted(e);
    }
    function Uc() {
      ye !== null && typeof ye.markComponentLayoutEffectMountStopped == "function" && ye.markComponentLayoutEffectMountStopped();
    }
    function zd(e) {
      ye !== null && typeof ye.markComponentLayoutEffectUnmountStarted == "function" && ye.markComponentLayoutEffectUnmountStarted(e);
    }
    function pu() {
      ye !== null && typeof ye.markComponentLayoutEffectUnmountStopped == "function" && ye.markComponentLayoutEffectUnmountStopped();
    }
    function wi(e, t, a) {
      ye !== null && typeof ye.markComponentErrored == "function" && ye.markComponentErrored(e, t, a);
    }
    function Cs(e, t, a) {
      ye !== null && typeof ye.markComponentSuspended == "function" && ye.markComponentSuspended(e, t, a);
    }
    function bs(e) {
      ye !== null && typeof ye.markLayoutEffectsStarted == "function" && ye.markLayoutEffectsStarted(e);
    }
    function ho() {
      ye !== null && typeof ye.markLayoutEffectsStopped == "function" && ye.markLayoutEffectsStopped();
    }
    function Ad(e) {
      ye !== null && typeof ye.markPassiveEffectsStarted == "function" && ye.markPassiveEffectsStarted(e);
    }
    function vu() {
      ye !== null && typeof ye.markPassiveEffectsStopped == "function" && ye.markPassiveEffectsStopped();
    }
    function Ud(e) {
      ye !== null && typeof ye.markRenderStarted == "function" && ye.markRenderStarted(e);
    }
    function jd() {
      ye !== null && typeof ye.markRenderYielded == "function" && ye.markRenderYielded();
    }
    function Sn() {
      ye !== null && typeof ye.markRenderStopped == "function" && ye.markRenderStopped();
    }
    function jc(e) {
      ye !== null && typeof ye.markRenderScheduled == "function" && ye.markRenderScheduled(e);
    }
    function Fd(e, t) {
      ye !== null && typeof ye.markForceUpdateScheduled == "function" && ye.markForceUpdateScheduled(e, t);
    }
    function xs(e, t) {
      ye !== null && typeof ye.markStateUpdateScheduled == "function" && ye.markStateUpdateScheduled(e, t);
    }
    var Fe = (
      /*                         */
      0
    ), Ct = (
      /*                 */
      1
    ), Dt = (
      /*                    */
      2
    ), st = (
      /*               */
      8
    ), nn = (
      /*              */
      16
    ), Wn = Math.clz32 ? Math.clz32 : Rs, Fc = Math.log, ws = Math.LN2;
    function Rs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Fc(t) / ws | 0) | 0;
    }
    var Hd = 31, q = (
      /*                        */
      0
    ), Vn = (
      /*                          */
      0
    ), Ke = (
      /*                        */
      1
    ), _l = (
      /*    */
      2
    ), rr = (
      /*             */
      4
    ), ar = (
      /*            */
      8
    ), aa = (
      /*                     */
      16
    ), mo = (
      /*                */
      32
    ), kl = (
      /*                       */
      4194240
    ), hu = (
      /*                        */
      64
    ), Hc = (
      /*                        */
      128
    ), Pc = (
      /*                        */
      256
    ), Vc = (
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
    ), Dl = (
      /*                        */
      536870912
    ), ia = (
      /*                   */
      1073741824
    );
    function th(e) {
      {
        if (e & Ke)
          return "Sync";
        if (e & _l)
          return "InputContinuousHydration";
        if (e & rr)
          return "InputContinuous";
        if (e & ar)
          return "DefaultHydration";
        if (e & aa)
          return "Default";
        if (e & mo)
          return "TransitionHydration";
        if (e & kl)
          return "Transition";
        if (e & _s)
          return "Retry";
        if (e & gu)
          return "SelectiveHydration";
        if (e & Ds)
          return "IdleHydration";
        if (e & Dl)
          return "Idle";
        if (e & ia)
          return "Offscreen";
      }
    }
    var Xt = -1, Zc = hu, ef = go;
    function Os(e) {
      switch (So(e)) {
        case Ke:
          return Ke;
        case _l:
          return _l;
        case rr:
          return rr;
        case ar:
          return ar;
        case aa:
          return aa;
        case mo:
          return mo;
        case hu:
        case Hc:
        case Pc:
        case Vc:
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
          return e & kl;
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
        case Dl:
          return Dl;
        case ia:
          return ia;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function la(e, t) {
      var a = e.pendingLanes;
      if (a === q)
        return q;
      var i = q, o = e.suspendedLanes, s = e.pingedLanes, f = a & eh;
      if (f !== q) {
        var p = f & ~o;
        if (p !== q)
          i = Os(p);
        else {
          var v = f & s;
          v !== q && (i = Os(v));
        }
      } else {
        var S = a & ~o;
        S !== q ? i = Os(S) : s !== q && (i = Os(s));
      }
      if (i === q)
        return q;
      if (t !== q && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === q) {
        var C = So(i), D = So(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          C >= D || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          C === aa && (D & kl) !== q
        )
          return t;
      }
      (i & rr) !== q && (i |= a & aa);
      var _ = e.entangledLanes;
      if (_ !== q)
        for (var F = e.entanglements, B = i & _; B > 0; ) {
          var Y = On(B), Se = 1 << Y;
          i |= F[Y], B &= ~Se;
        }
      return i;
    }
    function Pd(e, t) {
      for (var a = e.eventTimes, i = Xt; t > 0; ) {
        var o = On(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function tf(e, t) {
      switch (e) {
        case Ke:
        case _l:
        case rr:
          return t + 250;
        case ar:
        case aa:
        case mo:
        case hu:
        case Hc:
        case Pc:
        case Vc:
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
          return Xt;
        case gu:
        case Ds:
        case Dl:
        case ia:
          return Xt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), Xt;
      }
    }
    function nh(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = On(f), v = 1 << p, S = s[p];
        S === Xt ? ((v & i) === q || (v & o) !== q) && (s[p] = tf(v, t)) : S <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function rh(e) {
      return Os(e.pendingLanes);
    }
    function nf(e) {
      var t = e.pendingLanes & ~ia;
      return t !== q ? t : t & ia ? ia : q;
    }
    function Vd(e) {
      return (e & Ke) !== q;
    }
    function Ol(e) {
      return (e & eh) !== q;
    }
    function rf(e) {
      return (e & _s) === e;
    }
    function Bd(e) {
      var t = Ke | rr | aa;
      return (e & t) === q;
    }
    function wy(e) {
      return (e & kl) === e;
    }
    function Ns(e, t) {
      var a = _l | rr | ar | aa;
      return (t & a) !== q;
    }
    function ah(e, t) {
      return (t & e.expiredLanes) !== q;
    }
    function $d(e) {
      return (e & kl) !== q;
    }
    function Id() {
      var e = Zc;
      return Zc <<= 1, (Zc & kl) === q && (Zc = hu), e;
    }
    function ih() {
      var e = ef;
      return ef <<= 1, (ef & _s) === q && (ef = go), e;
    }
    function So(e) {
      return e & -e;
    }
    function ir(e) {
      return So(e);
    }
    function On(e) {
      return 31 - Wn(e);
    }
    function af(e) {
      return On(e);
    }
    function oa(e, t) {
      return (e & t) !== q;
    }
    function Eo(e, t) {
      return (e & t) === t;
    }
    function dt(e, t) {
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
      return e !== Vn && e < t ? e : t;
    }
    function of(e) {
      for (var t = [], a = 0; a < Hd; a++)
        t.push(e);
      return t;
    }
    function Su(e, t, a) {
      e.pendingLanes |= t, t !== Dl && (e.suspendedLanes = q, e.pingedLanes = q);
      var i = e.eventTimes, o = af(t);
      i[o] = a;
    }
    function Wd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = On(i), s = 1 << o;
        a[o] = Xt, i &= ~s;
      }
    }
    function uf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function lh(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = q, e.pingedLanes = q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = On(f), v = 1 << p;
        i[p] = q, o[p] = Xt, s[p] = Xt, f &= ~v;
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
        case rr:
          i = _l;
          break;
        case aa:
          i = ar;
          break;
        case hu:
        case Hc:
        case Pc:
        case Vc:
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
        case Dl:
          i = Ds;
          break;
        default:
          i = Vn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Vn ? Vn : i;
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
    var ua = Ke, Pa = rr, pr = aa, ff = Dl, Eu = Vn;
    function ba() {
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
      return Qd(ua, t) ? Qd(Pa, t) ? Ol(t) ? pr : ff : Pa : ua;
    }
    function Co(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var vr;
    function Ty(e) {
      vr = e;
    }
    function ke(e) {
      vr(e);
    }
    var Nl;
    function qd(e) {
      Nl = e;
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
    var vf = !1, As = [], Ri = null, Ti = null, En = null, Hr = /* @__PURE__ */ new Map(), Va = /* @__PURE__ */ new Map(), Ji = [], fh = [
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
          Va.delete(i);
          break;
        }
      }
    }
    function Us(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = dh(t, a, i, o, s);
        if (t !== null) {
          var p = Nu(t);
          p !== null && Nl(p);
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
          return Va.set(D, Us(Va.get(D) || null, e, t, a, i, C)), !0;
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
          if (i === ve) {
            var o = bi(a);
            if (o !== null) {
              e.blockedOn = o, pf(e.priority, function() {
                Kd(a);
              });
              return;
            }
          } else if (i === $) {
            var s = a.stateNode;
            if (Co(s)) {
              e.blockedOn = wl(a);
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
      }, i = 0; i < Ji.length && Qd(t, Ji[i].priority); i++)
        ;
      Ji.splice(i, 0, a), i === 0 && Xd(a);
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
          return f !== null && Nl(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function hh(e, t, a) {
      js(e) && a.delete(t);
    }
    function hf() {
      vf = !1, Ri !== null && js(Ri) && (Ri = null), Ti !== null && js(Ti) && (Ti = null), En !== null && js(En) && (En = null), Hr.forEach(hh), Va.forEach(hh);
    }
    function bo(e, t) {
      e.blockedOn === t && (e.blockedOn = null, vf || (vf = !0, E.unstable_scheduleCallback(E.unstable_NormalPriority, hf)));
    }
    function Lr(e) {
      if (As.length > 0) {
        bo(As[0], e);
        for (var t = 1; t < As.length; t++) {
          var a = As[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ri !== null && bo(Ri, e), Ti !== null && bo(Ti, e), En !== null && bo(En, e);
      var i = function(p) {
        return bo(p, e);
      };
      Hr.forEach(i), Va.forEach(i);
      for (var o = 0; o < Ji.length; o++) {
        var s = Ji[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ji.length > 0; ) {
        var f = Ji[0];
        if (f.blockedOn !== null)
          break;
        Xd(f), f.blockedOn === null && Ji.shift();
      }
    }
    var Tt = O.ReactCurrentBatchConfig, Bn = !0;
    function Nn(e) {
      Bn = !!e;
    }
    function hr() {
      return Bn;
    }
    function xa(e, t, a) {
      var i = xu(t), o;
      switch (i) {
        case ua:
          o = bu;
          break;
        case Pa:
          o = Qn;
          break;
        case pr:
        default:
          o = xo;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function bu(e, t, a, i) {
      var o = ba(), s = Tt.transition;
      Tt.transition = null;
      try {
        Gn(ua), xo(e, t, a, i);
      } finally {
        Gn(o), Tt.transition = s;
      }
    }
    function Qn(e, t, a, i) {
      var o = ba(), s = Tt.transition;
      Tt.transition = null;
      try {
        Gn(Pa), xo(e, t, a, i);
      } finally {
        Gn(o), Tt.transition = s;
      }
    }
    function xo(e, t, a, i) {
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
          s !== null && ke(s);
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
          if (p === ve) {
            var v = bi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === $) {
            var S = f.stateNode;
            if (Co(S))
              return wl(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Ro = s, null;
    }
    function xu(e) {
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
          return Pa;
        case "message": {
          var t = Gv();
          switch (t) {
            case Ki:
              return ua;
            case Ss:
              return Pa;
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
    function Zi(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ll = null, Hs = null, Ba = null;
    function mf(e) {
      return Ll = e, Hs = Ru(), !0;
    }
    function Ml() {
      Ll = null, Hs = null, Ba = null;
    }
    function Ps() {
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
      return "value" in Ll ? Ll.value : Ll.textContent;
    }
    function Tu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function To() {
      return !0;
    }
    function Vs() {
      return !1;
    }
    function un(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var S = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return S ? this.isDefaultPrevented = To : this.isDefaultPrevented = Vs, this.isPropagationStopped = Vs, this;
      }
      return ut(t.prototype, {
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
    }, Ra = un(wa), lr = ut({}, wa, {
      view: 0,
      detail: 0
    }), mh = un(lr), Bs, $s, Is;
    function zl(e) {
      e !== Is && (Is && e.type === "mousemove" ? (Bs = e.screenX - Is.screenX, $s = e.screenY - Is.screenY) : (Bs = 0, $s = 0), Is = e);
    }
    var Ys = ut({}, lr, {
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
        return "movementX" in e ? e.movementX : (zl(e), Bs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : $s;
      }
    }), yf = un(Ys), _o = ut({}, Ys, {
      dataTransfer: 0
    }), Zd = un(_o), ko = ut({}, lr, {
      relatedTarget: 0
    }), gf = un(ko), yh = ut({}, wa, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ep = un(yh), Sf = ut({}, wa, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), ky = un(Sf), Dy = ut({}, wa, {
      data: 0
    }), tp = un(Dy), gh = tp, Do = {
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
    var Eh = ut({}, lr, {
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
    }), Ny = un(Eh), Ly = ut({}, Ys, {
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
    }), rp = un(Ly), Ch = ut({}, lr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: np
    }), My = un(Ch), $a = ut({}, wa, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ap = un($a), zy = ut({}, Ys, {
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
    }), Al = un(zy), Ef = [9, 13, 27, 32], Ul = 229, ku = Jn && "CompositionEvent" in window, Oo = null;
    Jn && "documentMode" in document && (Oo = document.documentMode);
    var ip = Jn && "TextEvent" in window && !Oo, bh = Jn && (!ku || Oo && Oo > 8 && Oo <= 11), Cf = 32, xh = String.fromCharCode(Cf);
    function wh() {
      Qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Qt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Qt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Qt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var lp = !1;
    function bf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function xf(e) {
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
      return e === "keydown" && t.keyCode === Ul;
    }
    function wf(e, t) {
      switch (e) {
        case "keyup":
          return Ef.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ul;
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
    var jl = !1;
    function Rf(e, t, a, i, o) {
      var s, f;
      if (ku ? s = xf(t) : jl ? wf(t, i) && (s = "onCompositionEnd") : Rh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      bh && !op(i) && (!jl && s === "onCompositionStart" ? jl = mf(o) : s === "onCompositionEnd" && jl && (f = Ps()));
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
          return a !== Cf ? null : (lp = !0, xh);
        case "textInput":
          var i = t.data;
          return i === xh && lp ? null : i;
        default:
          return null;
      }
    }
    function Tf(e, t) {
      if (jl) {
        if (e === "compositionend" || !ku && wf(e, t)) {
          var a = Ps();
          return Ml(), jl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!bf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return bh && !op(t) ? null : t.data;
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
      if (!Jn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Uy() {
      Qt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
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
      Gs(t, r, e, Rc(e)), Vv(c, t);
    }
    function c(e) {
      eE(e, 0);
    }
    function d(e) {
      var t = Mf(e);
      if (hl(t))
        return e;
    }
    function m(e, t) {
      if (e === "change")
        return t;
    }
    var x = !1;
    Jn && (x = Ws("input") && (!document.documentMode || document.documentMode > 9));
    function T(e, t) {
      n = e, r = t, n.attachEvent("onpropertychange", ie);
    }
    function P() {
      n && (n.detachEvent("onpropertychange", ie), n = null, r = null);
    }
    function ie(e) {
      e.propertyName === "value" && d(r) && u(e);
    }
    function oe(e, t, a) {
      e === "focusin" ? (P(), T(t, a)) : e === "focusout" && P();
    }
    function ae(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return d(r);
    }
    function Re(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Oe(e, t) {
      if (e === "click")
        return d(t);
    }
    function Le(e, t) {
      if (e === "input" || e === "change")
        return d(t);
    }
    function Ln(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || De(e, "number", e.value);
    }
    function M(e, t, a, i, o, s, f) {
      var p = a ? Mf(a) : window, v, S;
      if (l(p) ? v = m : kh(p) ? x ? v = Le : (v = ae, S = oe) : Re(p) && (v = Oe), v) {
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
        if (S && (Ks(S) || bp(S)))
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
          var B = i.relatedTarget || i.toElement;
          if (_ = a, F = B ? Ks(B) : null, F !== null) {
            var Y = Fr(F);
            (F !== Y || F.tag !== G && F.tag !== ee) && (F = null);
          }
        } else
          _ = null, F = a;
        if (_ !== F) {
          var Se = yf, Ie = "onMouseLeave", ze = "onMouseEnter", Ut = "mouse";
          (t === "pointerout" || t === "pointerover") && (Se = rp, Ie = "onPointerLeave", ze = "onPointerEnter", Ut = "pointer");
          var _t = _ == null ? C : Mf(_), z = F == null ? C : Mf(F), W = new Se(Ie, Ut + "leave", _, i, o);
          W.target = _t, W.relatedTarget = z;
          var A = null, ue = Ks(o);
          if (ue === a) {
            var _e = new Se(ze, Ut + "enter", F, i, o);
            _e.target = z, _e.relatedTarget = _t, A = _e;
          }
          jw(e, W, A, _, F);
        }
      }
    }
    function ce(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ce = typeof Object.is == "function" ? Object.is : ce;
    function Pe(e, t) {
      if (Ce(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!ur.call(t, s) || !Ce(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ge(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function nt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function qn(e, t) {
      for (var a = Ge(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Wi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = Ge(nt(a));
      }
    }
    function Ft(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Fl(e, o, s, f, p);
    }
    function Fl(e, t, a, i, o) {
      var s = 0, f = -1, p = -1, v = 0, S = 0, C = e, D = null;
      e: for (; ; ) {
        for (var _ = null; C === t && (a === 0 || C.nodeType === Wi) && (f = s + a), C === i && (o === 0 || C.nodeType === Wi) && (p = s + o), C.nodeType === Wi && (s += C.nodeValue.length), (_ = C.firstChild) !== null; )
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
    function B0(e) {
      return e && e.nodeType === Wi;
    }
    function $0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : B0(e) ? !1 : B0(t) ? $0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Sw(e) {
      return e && e.ownerDocument && $0(e.ownerDocument.documentElement, e);
    }
    function Ew(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function I0() {
      for (var e = window, t = $i(); t instanceof e.HTMLIFrameElement; ) {
        if (Ew(t))
          e = t.contentWindow;
        else
          return t;
        t = $i(e.document);
      }
      return t;
    }
    function Fy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Cw() {
      var e = I0();
      return {
        focusedElem: e,
        selectionRange: Fy(e) ? xw(e) : null
      };
    }
    function bw(e) {
      var t = I0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && Sw(a)) {
        i !== null && Fy(a) && ww(a, i);
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
    function xw(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ft(e), t || {
        start: 0,
        end: 0
      };
    }
    function ww(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : jy(e, t);
    }
    var Rw = Jn && "documentMode" in document && document.documentMode <= 11;
    function Tw() {
      Qt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var kf = null, Hy = null, sp = null, Py = !1;
    function _w(e) {
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
    function kw(e) {
      return e.window === e ? e.document : e.nodeType === Gi ? e : e.ownerDocument;
    }
    function Y0(e, t, a) {
      var i = kw(a);
      if (!(Py || kf == null || kf !== $i(i))) {
        var o = _w(kf);
        if (!sp || !Pe(sp, o)) {
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
    function Dw(e, t, a, i, o, s, f) {
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
          Py = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Py = !1, Y0(e, i, o);
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
          if (Rw)
            break;
        // falls through
        case "keydown":
        case "keyup":
          Y0(e, i, o);
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
    }, Vy = {}, W0 = {};
    Jn && (W0 = document.createElement("div").style, "AnimationEvent" in window || (delete Df.animationend.animation, delete Df.animationiteration.animation, delete Df.animationstart.animation), "TransitionEvent" in window || delete Df.transitionend.transition);
    function Oh(e) {
      if (Vy[e])
        return Vy[e];
      if (!Df[e])
        return e;
      var t = Df[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in W0)
          return Vy[e] = t[a];
      return e;
    }
    var G0 = Oh("animationend"), Q0 = Oh("animationiteration"), q0 = Oh("animationstart"), K0 = Oh("transitionend"), X0 = /* @__PURE__ */ new Map(), J0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Du(e, t) {
      X0.set(e, t), Qt(t, [e]);
    }
    function Ow() {
      for (var e = 0; e < J0.length; e++) {
        var t = J0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Du(a, "on" + i);
      }
      Du(G0, "onAnimationEnd"), Du(Q0, "onAnimationIteration"), Du(q0, "onAnimationStart"), Du("dblclick", "onDoubleClick"), Du("focusin", "onFocus"), Du("focusout", "onBlur"), Du(K0, "onTransitionEnd");
    }
    function Nw(e, t, a, i, o, s, f) {
      var p = X0.get(t);
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
          case G0:
          case Q0:
          case q0:
            v = ep;
            break;
          case K0:
            v = ap;
            break;
          case "scroll":
            v = mh;
            break;
          case "wheel":
            v = Al;
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
          t === "scroll", _ = Aw(a, p, i.type, C, D);
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
    Ow(), k(), Uy(), Tw(), wh();
    function Lw(e, t, a, i, o, s, f) {
      Nw(e, t, a, i, o, s);
      var p = (s & gd) === 0;
      p && (U(e, t, a, i, o), M(e, t, a, i, o), Dw(e, t, a, i, o), Ay(e, t, a, i, o));
    }
    var cp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], By = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(cp));
    function Z0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, hs(i, t, void 0, e), e.currentTarget = null;
    }
    function Mw(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          Z0(e, v, p), i = f;
        }
      else
        for (var S = 0; S < t.length; S++) {
          var C = t[S], D = C.instance, _ = C.currentTarget, F = C.listener;
          if (D !== i && e.isPropagationStopped())
            return;
          Z0(e, F, _), i = D;
        }
    }
    function eE(e, t) {
      for (var a = (t & io) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        Mw(s, f, a);
      }
      Qi();
    }
    function zw(e, t, a, i, o) {
      var s = Rc(a), f = [];
      Lw(f, e, i, a, s, t), eE(f, t);
    }
    function Cn(e, t) {
      By.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = c1(t), o = Fw(e);
      i.has(o) || (tE(t, e, Ei, a), i.add(o));
    }
    function $y(e, t, a) {
      By.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= io), tE(a, e, i, t);
    }
    var Nh = "_reactListening" + Math.random().toString(36).slice(2);
    function fp(e) {
      if (!e[Nh]) {
        e[Nh] = !0, Lt.forEach(function(a) {
          a !== "selectionchange" && (By.has(a) || $y(a, !1, e), $y(a, !0, e));
        });
        var t = e.nodeType === Gi ? e : e.ownerDocument;
        t !== null && (t[Nh] || (t[Nh] = !0, $y("selectionchange", !1, t)));
      }
    }
    function tE(e, t, a, i, o) {
      var s = xa(e, t, a), f = void 0;
      vs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? wu(e, t, s, f) : Jd(e, t, s) : f !== void 0 ? Zi(e, t, s, f) : sa(e, t, s);
    }
    function nE(e, t) {
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
            if (v === $ || v === se) {
              var S = p.stateNode.containerInfo;
              if (nE(S, f))
                break;
              if (v === se)
                for (var C = p.return; C !== null; ) {
                  var D = C.tag;
                  if (D === $ || D === se) {
                    var _ = C.stateNode.containerInfo;
                    if (nE(_, f))
                      return;
                  }
                  C = C.return;
                }
              for (; S !== null; ) {
                var F = Ks(S);
                if (F === null)
                  return;
                var B = F.tag;
                if (B === G || B === ee) {
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
      Vv(function() {
        return zw(e, t, a, s);
      });
    }
    function dp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Aw(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], S = e, C = null; S !== null; ) {
        var D = S, _ = D.stateNode, F = D.tag;
        if (F === G && _ !== null && (C = _, p !== null)) {
          var B = oo(S, p);
          B != null && v.push(dp(S, B, C));
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
        if (p === G && f !== null) {
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
      while (e && e.tag !== G);
      return e || null;
    }
    function Uw(e, t) {
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
    function rE(e, t, a, i, o) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, S = v.alternate, C = v.stateNode, D = v.tag;
        if (S !== null && S === i)
          break;
        if (D === G && C !== null) {
          var _ = C;
          if (o) {
            var F = oo(p, s);
            F != null && f.unshift(dp(p, F, _));
          } else if (!o) {
            var B = oo(p, s);
            B != null && f.push(dp(p, B, _));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function jw(e, t, a, i, o) {
      var s = i && o ? Uw(i, o) : null;
      i !== null && rE(e, t, i, s, !1), o !== null && a !== null && rE(e, a, o, s, !0);
    }
    function Fw(e, t) {
      return e + "__bubble";
    }
    var Ia = !1, pp = "dangerouslySetInnerHTML", Mh = "suppressContentEditableWarning", Ou = "suppressHydrationWarning", aE = "autoFocus", Qs = "children", qs = "style", zh = "__html", Yy, Ah, vp, iE, Uh, lE, oE;
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
      Av(e, t), au(e, t), Pv(e, t, {
        registrationNameDependencies: lt,
        possibleRegistrationNames: kt
      });
    }, lE = Jn && !document.documentMode, vp = function(e, t, a) {
      if (!Ia) {
        var i = jh(a), o = jh(t);
        o !== i && (Ia = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, iE = function(e) {
      if (!Ia) {
        Ia = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Uh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, oE = function(e, t) {
      var a = e.namespaceURI === ti ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Hw = /\r\n?/g, Pw = /\u0000|\uFFFD/g;
    function jh(e) {
      Yn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Hw, `
`).replace(Pw, "");
    }
    function Fh(e, t, a, i) {
      var o = jh(t), s = jh(e);
      if (s !== o && (i && (Ia || (Ia = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && X))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function uE(e) {
      return e.nodeType === Gi ? e : e.ownerDocument;
    }
    function Vw() {
    }
    function Hh(e) {
      e.onclick = Vw;
    }
    function Bw(e, t, a, i, o) {
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
              v && yl(t, f);
            } else typeof f == "number" && yl(t, "" + f);
          else s === Mh || s === Ou || s === aE || (lt.hasOwnProperty(s) ? f != null && (typeof f != "function" && Uh(s, f), s === "onScroll" && Cn("scroll", t)) : f != null && ga(t, s, f, o));
        }
    }
    function $w(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === qs ? Ov(e, f) : s === pp ? gv(e, f) : s === Qs ? yl(e, f) : ga(e, s, f, i);
      }
    }
    function Iw(e, t, a, i) {
      var o, s = uE(a), f, p = i;
      if (p === ti && (p = fd(e)), p === ti) {
        if (o = gl(e, t), !o && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === ti && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ur.call(Yy, e) && (Yy[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function Yw(e, t) {
      return uE(t).createTextNode(e);
    }
    function Ww(e, t, a, i) {
      var o = gl(t, a);
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
          Yt(e, a), s = a;
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
      switch (xc(t, s), Bw(t, e, i, s, o), t) {
        case "input":
          Aa(e), j(e, a, !1);
          break;
        case "textarea":
          Aa(e), yv(e);
          break;
        case "option":
          en(e, a);
          break;
        case "select":
          ud(e, a);
          break;
        default:
          typeof s.onClick == "function" && Hh(e);
          break;
      }
    }
    function Gw(e, t, a, i, o) {
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
      xc(t, p);
      var v, S, C = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === qs) {
            var D = f[v];
            for (S in D)
              D.hasOwnProperty(S) && (C || (C = {}), C[S] = "");
          } else v === pp || v === Qs || v === Mh || v === Ou || v === aE || (lt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
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
            var B = _ ? _[zh] : void 0, Y = F ? F[zh] : void 0;
            B != null && Y !== B && (s = s || []).push(v, B);
          } else v === Qs ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(v, "" + _) : v === Mh || v === Ou || (lt.hasOwnProperty(v) ? (_ != null && (typeof _ != "function" && Uh(v, _), v === "onScroll" && Cn("scroll", e)), !s && F !== _ && (s = [])) : (s = s || []).push(v, _));
      }
      return C && (ni(C, p[qs]), (s = s || []).push(qs, C)), s;
    }
    function Qw(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && h(e, o);
      var s = gl(a, i), f = gl(a, o);
      switch ($w(e, t, s, f), a) {
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
    function qw(e) {
      {
        var t = e.toLowerCase();
        return tu.hasOwnProperty(t) && tu[t] || null;
      }
    }
    function Kw(e, t, a, i, o, s, f) {
      var p, v;
      switch (p = gl(t, a), Ah(t, a), t) {
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
          Yt(e, a);
          break;
        case "select":
          ns(e, a), Cn("invalid", e);
          break;
        case "textarea":
          hv(e, a), Cn("invalid", e);
          break;
      }
      xc(t, a);
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
      for (var B in a)
        if (a.hasOwnProperty(B)) {
          var Y = a[B];
          if (B === Qs)
            typeof Y == "string" ? e.textContent !== Y && (a[Ou] !== !0 && Fh(e.textContent, Y, s, f), F = [Qs, Y]) : typeof Y == "number" && e.textContent !== "" + Y && (a[Ou] !== !0 && Fh(e.textContent, Y, s, f), F = [Qs, "" + Y]);
          else if (lt.hasOwnProperty(B))
            Y != null && (typeof Y != "function" && Uh(B, Y), B === "onScroll" && Cn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Se = void 0, Ie = sn(B);
            if (a[Ou] !== !0) {
              if (!(B === Mh || B === Ou || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              B === "value" || B === "checked" || B === "selected")) {
                if (B === pp) {
                  var ze = e.innerHTML, Ut = Y ? Y[zh] : void 0;
                  if (Ut != null) {
                    var _t = oE(e, Ut);
                    _t !== ze && vp(B, ze, _t);
                  }
                } else if (B === qs) {
                  if (v.delete(B), lE) {
                    var z = gy(Y);
                    Se = e.getAttribute("style"), z !== Se && vp(B, Se, z);
                  }
                } else if (p && !te)
                  v.delete(B.toLowerCase()), Se = di(e, B, Y), Y !== Se && vp(B, Se, Y);
                else if (!dn(B, Ie, p) && !tr(B, Y, Ie, p)) {
                  var W = !1;
                  if (Ie !== null)
                    v.delete(Ie.attributeName), Se = Xl(e, B, Y, Ie);
                  else {
                    var A = i;
                    if (A === ti && (A = fd(t)), A === ti)
                      v.delete(B.toLowerCase());
                    else {
                      var ue = qw(B);
                      ue !== null && ue !== B && (W = !0, v.delete(ue)), v.delete(B);
                    }
                    Se = di(e, B, Y);
                  }
                  var _e = te;
                  !_e && Y !== Se && !W && vp(B, Se, Y);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Ou] !== !0 && iE(v), t) {
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
    function Xw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Wy(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Gy(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Qy(e, t, a) {
      {
        if (Ia)
          return;
        Ia = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function qy(e, t) {
      {
        if (t === "" || Ia)
          return;
        Ia = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Jw(e, t, a) {
      switch (t) {
        case "input":
          I(e, a);
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
      var Zw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], sE = [
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
      ], eR = sE.concat(["button"]), tR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], cE = {
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
        var a = ut({}, e || cE), i = {
          tag: t
        };
        return sE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), eR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Zw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var nR = function(e, t) {
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
            return tR.indexOf(t) === -1;
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
      }, rR = function(e, t) {
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
      }, fE = {};
      hp = function(e, t, a) {
        a = a || cE;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = nR(e, o) ? null : i, f = s ? null : rR(e, a), p = s || f;
        if (p) {
          var v = p.tag, S = !!s + "|" + e + "|" + v;
          if (!fE[S]) {
            fE[S] = !0;
            var C = e, D = "";
            if (e === "#text" ? /\S/.test(t) ? C = "Text nodes" : (C = "Whitespace text nodes", D = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : C = "<" + e + ">", s) {
              var _ = "";
              v === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", C, v, D, _);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", C, v);
          }
        }
      };
    }
    var Ph = "suppressHydrationWarning", Vh = "$", Bh = "/$", yp = "$?", gp = "$!", aR = "style", Ky = null, Xy = null;
    function iR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Gi:
        case rs: {
          t = i === Gi ? "#document" : "#fragment";
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
    function lR(e, t, a) {
      {
        var i = e, o = Ec(i.namespace, t), s = mp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function pN(e) {
      return e;
    }
    function oR(e) {
      Ky = hr(), Xy = Cw();
      var t = null;
      return Nn(!1), t;
    }
    function uR(e) {
      bw(Xy), Nn(Ky), Ky = null, Xy = null;
    }
    function sR(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (hp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = mp(f.ancestorInfo, e);
          hp(null, p, v);
        }
        s = f.namespace;
      }
      var S = Iw(e, t, a, s);
      return Cp(o, S), ig(S, t), S;
    }
    function cR(e, t) {
      e.appendChild(t);
    }
    function fR(e, t, a, i, o) {
      switch (Ww(e, t, a, i), t) {
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
    function dR(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = mp(f.ancestorInfo, t);
          hp(null, p, v);
        }
      }
      return Gw(e, t, a, i);
    }
    function Jy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function pR(e, t, a, i) {
      {
        var o = a;
        hp(null, e, o.ancestorInfo);
      }
      var s = Yw(e, t);
      return Cp(i, s), s;
    }
    function vR() {
      var e = window.event;
      return e === void 0 ? pr : xu(e.type);
    }
    var Zy = typeof setTimeout == "function" ? setTimeout : void 0, hR = typeof clearTimeout == "function" ? clearTimeout : void 0, eg = -1, dE = typeof Promise == "function" ? Promise : void 0, mR = typeof queueMicrotask == "function" ? queueMicrotask : typeof dE < "u" ? function(e) {
      return dE.resolve(null).then(e).catch(yR);
    } : Zy;
    function yR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function gR(e, t, a, i) {
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
    function SR(e, t, a, i, o, s) {
      Qw(e, t, a, i, o), ig(e, o);
    }
    function pE(e) {
      yl(e, "");
    }
    function ER(e, t, a) {
      e.nodeValue = a;
    }
    function CR(e, t) {
      e.appendChild(t);
    }
    function bR(e, t) {
      var a;
      e.nodeType === Fn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Hh(a);
    }
    function xR(e, t, a) {
      e.insertBefore(t, a);
    }
    function wR(e, t, a) {
      e.nodeType === Fn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function RR(e, t) {
      e.removeChild(t);
    }
    function TR(e, t) {
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
          else (s === Vh || s === yp || s === gp) && i++;
        }
        a = o;
      } while (a);
      Lr(t);
    }
    function _R(e, t) {
      e.nodeType === Fn ? tg(e.parentNode, t) : e.nodeType === ea && tg(e, t), Lr(e);
    }
    function kR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function DR(e) {
      e.nodeValue = "";
    }
    function OR(e, t) {
      e = e;
      var a = t[aR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = bc("display", i);
    }
    function NR(e, t) {
      e.nodeValue = t;
    }
    function LR(e) {
      e.nodeType === ea ? e.textContent = "" : e.nodeType === Gi && e.documentElement && e.removeChild(e.documentElement);
    }
    function MR(e, t, a) {
      return e.nodeType !== ea || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function zR(e, t) {
      return t === "" || e.nodeType !== Wi ? null : e;
    }
    function AR(e) {
      return e.nodeType !== Fn ? null : e;
    }
    function vE(e) {
      return e.data === yp;
    }
    function ng(e) {
      return e.data === gp;
    }
    function UR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function jR(e, t) {
      e._reactRetry = t;
    }
    function $h(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ea || t === Wi)
          break;
        if (t === Fn) {
          var a = e.data;
          if (a === Vh || a === gp || a === yp)
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
    function FR(e) {
      return $h(e.firstChild);
    }
    function HR(e) {
      return $h(e.firstChild);
    }
    function PR(e) {
      return $h(e.nextSibling);
    }
    function VR(e, t, a, i, o, s, f) {
      Cp(s, e), ig(e, a);
      var p;
      {
        var v = o;
        p = v.namespace;
      }
      var S = (s.mode & Ct) !== Fe;
      return Kw(e, t, a, p, i, S, f);
    }
    function BR(e, t, a, i) {
      return Cp(a, e), a.mode & Ct, Xw(e, t);
    }
    function $R(e, t) {
      Cp(t, e);
    }
    function IR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Fn) {
          var i = t.data;
          if (i === Bh) {
            if (a === 0)
              return Sp(t);
            a--;
          } else (i === Vh || i === gp || i === yp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function hE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Fn) {
          var i = t.data;
          if (i === Vh || i === gp || i === yp) {
            if (a === 0)
              return t;
            a--;
          } else i === Bh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function YR(e) {
      Lr(e);
    }
    function WR(e) {
      Lr(e);
    }
    function GR(e) {
      return e !== "head" && e !== "body";
    }
    function QR(e, t, a, i) {
      var o = !0;
      Fh(t.nodeValue, a, i, o);
    }
    function qR(e, t, a, i, o, s) {
      if (t[Ph] !== !0) {
        var f = !0;
        Fh(i.nodeValue, o, s, f);
      }
    }
    function KR(e, t) {
      t.nodeType === ea ? Wy(e, t) : t.nodeType === Fn || Gy(e, t);
    }
    function XR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ea ? Wy(a, t) : t.nodeType === Fn || Gy(a, t));
      }
    }
    function JR(e, t, a, i, o) {
      (o || t[Ph] !== !0) && (i.nodeType === ea ? Wy(a, i) : i.nodeType === Fn || Gy(a, i));
    }
    function ZR(e, t, a) {
      Qy(e, t);
    }
    function e1(e, t) {
      qy(e, t);
    }
    function t1(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Qy(i, t);
      }
    }
    function n1(e, t) {
      {
        var a = e.parentNode;
        a !== null && qy(a, t);
      }
    }
    function r1(e, t, a, i, o, s) {
      (s || t[Ph] !== !0) && Qy(a, i);
    }
    function a1(e, t, a, i, o) {
      (o || t[Ph] !== !0) && qy(a, i);
    }
    function i1(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function l1(e) {
      fp(e);
    }
    var Nf = Math.random().toString(36).slice(2), Lf = "__reactFiber$" + Nf, rg = "__reactProps$" + Nf, Ep = "__reactContainer$" + Nf, ag = "__reactEvents$" + Nf, o1 = "__reactListeners$" + Nf, u1 = "__reactHandles$" + Nf;
    function s1(e) {
      delete e[Lf], delete e[rg], delete e[ag], delete e[o1], delete e[u1];
    }
    function Cp(e, t) {
      t[Lf] = e;
    }
    function Ih(e, t) {
      t[Ep] = e;
    }
    function mE(e) {
      e[Ep] = null;
    }
    function bp(e) {
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
            for (var o = hE(e); o !== null; ) {
              var s = o[Lf];
              if (s)
                return s;
              o = hE(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Nu(e) {
      var t = e[Lf] || e[Ep];
      return t && (t.tag === G || t.tag === ee || t.tag === ve || t.tag === $) ? t : null;
    }
    function Mf(e) {
      if (e.tag === G || e.tag === ee)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Yh(e) {
      return e[rg] || null;
    }
    function ig(e, t) {
      e[rg] = t;
    }
    function c1(e) {
      var t = e[ag];
      return t === void 0 && (t = e[ag] = /* @__PURE__ */ new Set()), t;
    }
    var yE = {}, gE = O.ReactDebugCurrentFrame;
    function Wh(e) {
      if (e) {
        var t = e._owner, a = Xu(e.type, e._source, t ? t.type : null);
        gE.setExtraStackFrame(a);
      } else
        gE.setExtraStackFrame(null);
    }
    function el(e, t, a, i, o) {
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
            p && !(p instanceof Error) && (Wh(o), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Wh(null)), p instanceof Error && !(p.message in yE) && (yE[p.message] = !0, Wh(o), g("Failed %s type: %s", a, p.message), Wh(null));
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
        g("Unexpected pop.");
        return;
      }
      t !== Gh[No] && g("Unexpected Fiber popped."), e.current = lg[No], lg[No] = null, Gh[No] = null, No--;
    }
    function fa(e, t, a) {
      No++, lg[No] = e.current, Gh[No] = a, e.current = t;
    }
    var og;
    og = {};
    var si = {};
    Object.freeze(si);
    var Lo = Lu(si), Hl = Lu(!1), ug = si;
    function zf(e, t, a) {
      return a && Pl(t) ? ug : Lo.current;
    }
    function SE(e, t, a) {
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
          var p = tt(e) || "Unknown";
          el(i, s, "context", p);
        }
        return o && SE(e, t, s), s;
      }
    }
    function Qh() {
      return Hl.current;
    }
    function Pl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function qh(e) {
      ca(Hl, e), ca(Lo, e);
    }
    function sg(e) {
      ca(Hl, e), ca(Lo, e);
    }
    function EE(e, t, a) {
      {
        if (Lo.current !== si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        fa(Lo, t, e), fa(Hl, a, e);
      }
    }
    function CE(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = tt(e) || "Unknown";
            og[s] || (og[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in o))
            throw new Error((tt(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = tt(e) || "Unknown";
          el(o, f, "child context", v);
        }
        return ut({}, a, f);
      }
    }
    function Kh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || si;
        return ug = Lo.current, fa(Lo, a, e), fa(Hl, Hl.current, e), !0;
      }
    }
    function bE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = CE(e, t, ug);
          i.__reactInternalMemoizedMergedChildContext = o, ca(Hl, e), ca(Lo, e), fa(Lo, o, e), fa(Hl, a, e);
        } else
          ca(Hl, e), fa(Hl, a, e);
      }
    }
    function f1(e) {
      {
        if (!Yv(e) || e.tag !== J)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case $:
              return t.stateNode.context;
            case J: {
              var a = t.type;
              if (Pl(a))
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
    function xE(e) {
      Mo === null ? Mo = [e] : Mo.push(e);
    }
    function d1(e) {
      cg = !0, xE(e);
    }
    function wE() {
      cg && zu();
    }
    function zu() {
      if (!fg && Mo !== null) {
        fg = !0;
        var e = 0, t = ba();
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
          throw Mo !== null && (Mo = Mo.slice(e + 1)), Td(Ki, zu), s;
        } finally {
          Gn(t), fg = !1;
        }
      }
      return null;
    }
    var Uf = [], jf = 0, Jh = null, Zh = 0, _i = [], ki = 0, Xs = null, zo = 1, Ao = "";
    function p1(e) {
      return Zs(), (e.flags & ys) !== je;
    }
    function v1(e) {
      return Zs(), Zh;
    }
    function h1() {
      var e = Ao, t = zo, a = t & ~m1(t);
      return a.toString(32) + e;
    }
    function Js(e, t) {
      Zs(), Uf[jf++] = Zh, Uf[jf++] = Jh, Jh = e, Zh = t;
    }
    function RE(e, t, a) {
      Zs(), _i[ki++] = zo, _i[ki++] = Ao, _i[ki++] = Xs, Xs = e;
      var i = zo, o = Ao, s = em(i) - 1, f = i & ~(1 << s), p = a + 1, v = em(t) + s;
      if (v > 30) {
        var S = s - s % 5, C = (1 << S) - 1, D = (f & C).toString(32), _ = f >> S, F = s - S, B = em(t) + F, Y = p << F, Se = Y | _, Ie = D + o;
        zo = 1 << B | Se, Ao = Ie;
      } else {
        var ze = p << s, Ut = ze | f, _t = o;
        zo = 1 << v | Ut, Ao = _t;
      }
    }
    function dg(e) {
      Zs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Js(e, a), RE(e, a, i);
      }
    }
    function em(e) {
      return 32 - Wn(e);
    }
    function m1(e) {
      return 1 << em(e) - 1;
    }
    function pg(e) {
      for (; e === Jh; )
        Jh = Uf[--jf], Uf[jf] = null, Zh = Uf[--jf], Uf[jf] = null;
      for (; e === Xs; )
        Xs = _i[--ki], _i[ki] = null, Ao = _i[--ki], _i[ki] = null, zo = _i[--ki], _i[ki] = null;
    }
    function y1() {
      return Zs(), Xs !== null ? {
        id: zo,
        overflow: Ao
      } : null;
    }
    function g1(e, t) {
      Zs(), _i[ki++] = zo, _i[ki++] = Ao, _i[ki++] = Xs, zo = t.id, Ao = t.overflow, Xs = e;
    }
    function Zs() {
      Vr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Pr = null, Di = null, tl = !1, ec = !1, Au = null;
    function S1() {
      tl && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function TE() {
      ec = !0;
    }
    function E1() {
      return ec;
    }
    function C1(e) {
      var t = e.stateNode.containerInfo;
      return Di = HR(t), Pr = e, tl = !0, Au = null, ec = !1, !0;
    }
    function b1(e, t, a) {
      return Di = PR(t), Pr = e, tl = !0, Au = null, ec = !1, a !== null && g1(e, a), !0;
    }
    function _E(e, t) {
      switch (e.tag) {
        case $: {
          KR(e.stateNode.containerInfo, t);
          break;
        }
        case G: {
          var a = (e.mode & Ct) !== Fe;
          JR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ve: {
          var i = e.memoizedState;
          i.dehydrated !== null && XR(i.dehydrated, t);
          break;
        }
      }
    }
    function kE(e, t) {
      _E(e, t);
      var a = Tk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ta) : i.push(a);
    }
    function vg(e, t) {
      {
        if (ec)
          return;
        switch (e.tag) {
          case $: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case G:
                var i = t.type;
                t.pendingProps, ZR(a, i);
                break;
              case ee:
                var o = t.pendingProps;
                e1(a, o);
                break;
            }
            break;
          }
          case G: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case G: {
                var v = t.type, S = t.pendingProps, C = (e.mode & Ct) !== Fe;
                r1(
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
                var D = t.pendingProps, _ = (e.mode & Ct) !== Fe;
                a1(
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
          case ve: {
            var F = e.memoizedState, B = F.dehydrated;
            if (B !== null) switch (t.tag) {
              case G:
                var Y = t.type;
                t.pendingProps, t1(B, Y);
                break;
              case ee:
                var Se = t.pendingProps;
                n1(B, Se);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function DE(e, t) {
      t.flags = t.flags & ~Rn | wn, vg(e, t);
    }
    function OE(e, t) {
      switch (e.tag) {
        case G: {
          var a = e.type;
          e.pendingProps;
          var i = MR(t, a);
          return i !== null ? (e.stateNode = i, Pr = e, Di = FR(i), !0) : !1;
        }
        case ee: {
          var o = e.pendingProps, s = zR(t, o);
          return s !== null ? (e.stateNode = s, Pr = e, Di = null, !0) : !1;
        }
        case ve: {
          var f = AR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: y1(),
              retryLane: ia
            };
            e.memoizedState = p;
            var v = _k(f);
            return v.return = e, e.child = v, Pr = e, Di = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function hg(e) {
      return (e.mode & Ct) !== Fe && (e.flags & gt) === je;
    }
    function mg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function yg(e) {
      if (tl) {
        var t = Di;
        if (!t) {
          hg(e) && (vg(Pr, e), mg()), DE(Pr, e), tl = !1, Pr = e;
          return;
        }
        var a = t;
        if (!OE(e, t)) {
          hg(e) && (vg(Pr, e), mg()), t = Sp(a);
          var i = Pr;
          if (!t || !OE(e, t)) {
            DE(Pr, e), tl = !1, Pr = e;
            return;
          }
          kE(i, a);
        }
      }
    }
    function x1(e, t, a) {
      var i = e.stateNode, o = !ec, s = VR(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function w1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = BR(t, a, e);
      if (i) {
        var o = Pr;
        if (o !== null)
          switch (o.tag) {
            case $: {
              var s = o.stateNode.containerInfo, f = (o.mode & Ct) !== Fe;
              QR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case G: {
              var p = o.type, v = o.memoizedProps, S = o.stateNode, C = (o.mode & Ct) !== Fe;
              qR(
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
    function R1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      $R(a, e);
    }
    function T1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return IR(a);
    }
    function NE(e) {
      for (var t = e.return; t !== null && t.tag !== G && t.tag !== $ && t.tag !== ve; )
        t = t.return;
      Pr = t;
    }
    function tm(e) {
      if (e !== Pr)
        return !1;
      if (!tl)
        return NE(e), tl = !0, !1;
      if (e.tag !== $ && (e.tag !== G || GR(e.type) && !Jy(e.type, e.memoizedProps))) {
        var t = Di;
        if (t)
          if (hg(e))
            LE(e), mg();
          else
            for (; t; )
              kE(e, t), t = Sp(t);
      }
      return NE(e), e.tag === ve ? Di = T1(e) : Di = Pr ? Sp(e.stateNode) : null, !0;
    }
    function _1() {
      return tl && Di !== null;
    }
    function LE(e) {
      for (var t = Di; t; )
        _E(e, t), t = Sp(t);
    }
    function Ff() {
      Pr = null, Di = null, tl = !1, ec = !1;
    }
    function ME() {
      Au !== null && (Tb(Au), Au = null);
    }
    function Vr() {
      return tl;
    }
    function gg(e) {
      Au === null ? Au = [e] : Au.push(e);
    }
    var k1 = O.ReactCurrentBatchConfig, D1 = null;
    function O1() {
      return k1.transition;
    }
    var nl = {
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
      var N1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & st && (t = a), a = a.return;
        return t;
      }, tc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, xp = [], wp = [], Rp = [], Tp = [], _p = [], kp = [], nc = /* @__PURE__ */ new Set();
      nl.recordUnsafeLifecycleWarnings = function(e, t) {
        nc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && xp.push(e), e.mode & st && typeof t.UNSAFE_componentWillMount == "function" && wp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Rp.push(e), e.mode & st && typeof t.UNSAFE_componentWillReceiveProps == "function" && Tp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && _p.push(e), e.mode & st && typeof t.UNSAFE_componentWillUpdate == "function" && kp.push(e));
      }, nl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        xp.length > 0 && (xp.forEach(function(_) {
          e.add(tt(_) || "Component"), nc.add(_.type);
        }), xp = []);
        var t = /* @__PURE__ */ new Set();
        wp.length > 0 && (wp.forEach(function(_) {
          t.add(tt(_) || "Component"), nc.add(_.type);
        }), wp = []);
        var a = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(_) {
          a.add(tt(_) || "Component"), nc.add(_.type);
        }), Rp = []);
        var i = /* @__PURE__ */ new Set();
        Tp.length > 0 && (Tp.forEach(function(_) {
          i.add(tt(_) || "Component"), nc.add(_.type);
        }), Tp = []);
        var o = /* @__PURE__ */ new Set();
        _p.length > 0 && (_p.forEach(function(_) {
          o.add(tt(_) || "Component"), nc.add(_.type);
        }), _p = []);
        var s = /* @__PURE__ */ new Set();
        if (kp.length > 0 && (kp.forEach(function(_) {
          s.add(tt(_) || "Component"), nc.add(_.type);
        }), kp = []), t.size > 0) {
          var f = tc(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = tc(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = tc(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var S = tc(e);
          Q(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (a.size > 0) {
          var C = tc(a);
          Q(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (o.size > 0) {
          var D = tc(o);
          Q(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
      };
      var nm = /* @__PURE__ */ new Map(), zE = /* @__PURE__ */ new Set();
      nl.recordLegacyContextWarning = function(e, t) {
        var a = N1(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!zE.has(e.type)) {
          var i = nm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], nm.set(a, i)), i.push(e));
        }
      }, nl.flushLegacyContextWarning = function() {
        nm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(tt(s) || "Component"), zE.add(s.type);
            });
            var o = tc(i);
            try {
              Zt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              xn();
            }
          }
        });
      }, nl.discardPendingWarnings = function() {
        xp = [], wp = [], Rp = [], Tp = [], _p = [], kp = [], nm = /* @__PURE__ */ new Map();
      };
    }
    var Sg, Eg, Cg, bg, xg, AE = function(e, t) {
    };
    Sg = !1, Eg = !1, Cg = {}, bg = {}, xg = {}, AE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = tt(t) || "Component";
        bg[a] || (bg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function L1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Dp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & st || He) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== J) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !L1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var o = tt(e) || "Component";
          Cg[o] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o, i), Cg[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== J)
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
        var t = tt(e) || "Component";
        if (xg[t])
          return;
        xg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function UE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function jE(e) {
      function t(z, W) {
        if (e) {
          var A = z.deletions;
          A === null ? (z.deletions = [W], z.flags |= ta) : A.push(W);
        }
      }
      function a(z, W) {
        if (!e)
          return null;
        for (var A = W; A !== null; )
          t(z, A), A = A.sibling;
        return null;
      }
      function i(z, W) {
        for (var A = /* @__PURE__ */ new Map(), ue = W; ue !== null; )
          ue.key !== null ? A.set(ue.key, ue) : A.set(ue.index, ue), ue = ue.sibling;
        return A;
      }
      function o(z, W) {
        var A = fc(z, W);
        return A.index = 0, A.sibling = null, A;
      }
      function s(z, W, A) {
        if (z.index = A, !e)
          return z.flags |= ys, W;
        var ue = z.alternate;
        if (ue !== null) {
          var _e = ue.index;
          return _e < W ? (z.flags |= wn, W) : _e;
        } else
          return z.flags |= wn, W;
      }
      function f(z) {
        return e && z.alternate === null && (z.flags |= wn), z;
      }
      function p(z, W, A, ue) {
        if (W === null || W.tag !== ee) {
          var _e = g0(A, z.mode, ue);
          return _e.return = z, _e;
        } else {
          var be = o(W, A);
          return be.return = z, be;
        }
      }
      function v(z, W, A, ue) {
        var _e = A.type;
        if (_e === Kr)
          return C(z, W, A.props.children, ue, A.key);
        if (W !== null && (W.elementType === _e || // Keep this check inline so it only runs on the false path:
        Bb(W, A) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof _e == "object" && _e !== null && _e.$$typeof === at && UE(_e) === W.type)) {
          var be = o(W, A.props);
          return be.ref = Dp(z, W, A), be.return = z, be._debugSource = A._source, be._debugOwner = A._owner, be;
        }
        var Je = y0(A, z.mode, ue);
        return Je.ref = Dp(z, W, A), Je.return = z, Je;
      }
      function S(z, W, A, ue) {
        if (W === null || W.tag !== se || W.stateNode.containerInfo !== A.containerInfo || W.stateNode.implementation !== A.implementation) {
          var _e = S0(A, z.mode, ue);
          return _e.return = z, _e;
        } else {
          var be = o(W, A.children || []);
          return be.return = z, be;
        }
      }
      function C(z, W, A, ue, _e) {
        if (W === null || W.tag !== de) {
          var be = Wu(A, z.mode, ue, _e);
          return be.return = z, be;
        } else {
          var Je = o(W, A);
          return Je.return = z, Je;
        }
      }
      function D(z, W, A) {
        if (typeof W == "string" && W !== "" || typeof W == "number") {
          var ue = g0("" + W, z.mode, A);
          return ue.return = z, ue;
        }
        if (typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case cr: {
              var _e = y0(W, z.mode, A);
              return _e.ref = Dp(z, null, W), _e.return = z, _e;
            }
            case Sa: {
              var be = S0(W, z.mode, A);
              return be.return = z, be;
            }
            case at: {
              var Je = W._payload, ot = W._init;
              return D(z, ot(Je), A);
            }
          }
          if (ft(W) || yn(W)) {
            var an = Wu(W, z.mode, A, null);
            return an.return = z, an;
          }
          rm(z, W);
        }
        return typeof W == "function" && am(z), null;
      }
      function _(z, W, A, ue) {
        var _e = W !== null ? W.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number")
          return _e !== null ? null : p(z, W, "" + A, ue);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case cr:
              return A.key === _e ? v(z, W, A, ue) : null;
            case Sa:
              return A.key === _e ? S(z, W, A, ue) : null;
            case at: {
              var be = A._payload, Je = A._init;
              return _(z, W, Je(be), ue);
            }
          }
          if (ft(A) || yn(A))
            return _e !== null ? null : C(z, W, A, ue, null);
          rm(z, A);
        }
        return typeof A == "function" && am(z), null;
      }
      function F(z, W, A, ue, _e) {
        if (typeof ue == "string" && ue !== "" || typeof ue == "number") {
          var be = z.get(A) || null;
          return p(W, be, "" + ue, _e);
        }
        if (typeof ue == "object" && ue !== null) {
          switch (ue.$$typeof) {
            case cr: {
              var Je = z.get(ue.key === null ? A : ue.key) || null;
              return v(W, Je, ue, _e);
            }
            case Sa: {
              var ot = z.get(ue.key === null ? A : ue.key) || null;
              return S(W, ot, ue, _e);
            }
            case at:
              var an = ue._payload, Ht = ue._init;
              return F(z, W, A, Ht(an), _e);
          }
          if (ft(ue) || yn(ue)) {
            var Kn = z.get(A) || null;
            return C(W, Kn, ue, _e, null);
          }
          rm(W, ue);
        }
        return typeof ue == "function" && am(W), null;
      }
      function B(z, W, A) {
        {
          if (typeof z != "object" || z === null)
            return W;
          switch (z.$$typeof) {
            case cr:
            case Sa:
              AE(z, A);
              var ue = z.key;
              if (typeof ue != "string")
                break;
              if (W === null) {
                W = /* @__PURE__ */ new Set(), W.add(ue);
                break;
              }
              if (!W.has(ue)) {
                W.add(ue);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ue);
              break;
            case at:
              var _e = z._payload, be = z._init;
              B(be(_e), W, A);
              break;
          }
        }
        return W;
      }
      function Y(z, W, A, ue) {
        for (var _e = null, be = 0; be < A.length; be++) {
          var Je = A[be];
          _e = B(Je, _e, z);
        }
        for (var ot = null, an = null, Ht = W, Kn = 0, Pt = 0, $n = null; Ht !== null && Pt < A.length; Pt++) {
          Ht.index > Pt ? ($n = Ht, Ht = null) : $n = Ht.sibling;
          var pa = _(z, Ht, A[Pt], ue);
          if (pa === null) {
            Ht === null && (Ht = $n);
            break;
          }
          e && Ht && pa.alternate === null && t(z, Ht), Kn = s(pa, Kn, Pt), an === null ? ot = pa : an.sibling = pa, an = pa, Ht = $n;
        }
        if (Pt === A.length) {
          if (a(z, Ht), Vr()) {
            var Qr = Pt;
            Js(z, Qr);
          }
          return ot;
        }
        if (Ht === null) {
          for (; Pt < A.length; Pt++) {
            var fi = D(z, A[Pt], ue);
            fi !== null && (Kn = s(fi, Kn, Pt), an === null ? ot = fi : an.sibling = fi, an = fi);
          }
          if (Vr()) {
            var Da = Pt;
            Js(z, Da);
          }
          return ot;
        }
        for (var Oa = i(z, Ht); Pt < A.length; Pt++) {
          var va = F(Oa, z, Pt, A[Pt], ue);
          va !== null && (e && va.alternate !== null && Oa.delete(va.key === null ? Pt : va.key), Kn = s(va, Kn, Pt), an === null ? ot = va : an.sibling = va, an = va);
        }
        if (e && Oa.forEach(function(rd) {
          return t(z, rd);
        }), Vr()) {
          var Bo = Pt;
          Js(z, Bo);
        }
        return ot;
      }
      function Se(z, W, A, ue) {
        var _e = yn(A);
        if (typeof _e != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          A[Symbol.toStringTag] === "Generator" && (Eg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Eg = !0), A.entries === _e && (Sg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Sg = !0);
          var be = _e.call(A);
          if (be)
            for (var Je = null, ot = be.next(); !ot.done; ot = be.next()) {
              var an = ot.value;
              Je = B(an, Je, z);
            }
        }
        var Ht = _e.call(A);
        if (Ht == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Kn = null, Pt = null, $n = W, pa = 0, Qr = 0, fi = null, Da = Ht.next(); $n !== null && !Da.done; Qr++, Da = Ht.next()) {
          $n.index > Qr ? (fi = $n, $n = null) : fi = $n.sibling;
          var Oa = _(z, $n, Da.value, ue);
          if (Oa === null) {
            $n === null && ($n = fi);
            break;
          }
          e && $n && Oa.alternate === null && t(z, $n), pa = s(Oa, pa, Qr), Pt === null ? Kn = Oa : Pt.sibling = Oa, Pt = Oa, $n = fi;
        }
        if (Da.done) {
          if (a(z, $n), Vr()) {
            var va = Qr;
            Js(z, va);
          }
          return Kn;
        }
        if ($n === null) {
          for (; !Da.done; Qr++, Da = Ht.next()) {
            var Bo = D(z, Da.value, ue);
            Bo !== null && (pa = s(Bo, pa, Qr), Pt === null ? Kn = Bo : Pt.sibling = Bo, Pt = Bo);
          }
          if (Vr()) {
            var rd = Qr;
            Js(z, rd);
          }
          return Kn;
        }
        for (var ov = i(z, $n); !Da.done; Qr++, Da = Ht.next()) {
          var Ql = F(ov, z, Qr, Da.value, ue);
          Ql !== null && (e && Ql.alternate !== null && ov.delete(Ql.key === null ? Qr : Ql.key), pa = s(Ql, pa, Qr), Pt === null ? Kn = Ql : Pt.sibling = Ql, Pt = Ql);
        }
        if (e && ov.forEach(function(aD) {
          return t(z, aD);
        }), Vr()) {
          var rD = Qr;
          Js(z, rD);
        }
        return Kn;
      }
      function Ie(z, W, A, ue) {
        if (W !== null && W.tag === ee) {
          a(z, W.sibling);
          var _e = o(W, A);
          return _e.return = z, _e;
        }
        a(z, W);
        var be = g0(A, z.mode, ue);
        return be.return = z, be;
      }
      function ze(z, W, A, ue) {
        for (var _e = A.key, be = W; be !== null; ) {
          if (be.key === _e) {
            var Je = A.type;
            if (Je === Kr) {
              if (be.tag === de) {
                a(z, be.sibling);
                var ot = o(be, A.props.children);
                return ot.return = z, ot._debugSource = A._source, ot._debugOwner = A._owner, ot;
              }
            } else if (be.elementType === Je || // Keep this check inline so it only runs on the false path:
            Bb(be, A) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Je == "object" && Je !== null && Je.$$typeof === at && UE(Je) === be.type) {
              a(z, be.sibling);
              var an = o(be, A.props);
              return an.ref = Dp(z, be, A), an.return = z, an._debugSource = A._source, an._debugOwner = A._owner, an;
            }
            a(z, be);
            break;
          } else
            t(z, be);
          be = be.sibling;
        }
        if (A.type === Kr) {
          var Ht = Wu(A.props.children, z.mode, ue, A.key);
          return Ht.return = z, Ht;
        } else {
          var Kn = y0(A, z.mode, ue);
          return Kn.ref = Dp(z, W, A), Kn.return = z, Kn;
        }
      }
      function Ut(z, W, A, ue) {
        for (var _e = A.key, be = W; be !== null; ) {
          if (be.key === _e)
            if (be.tag === se && be.stateNode.containerInfo === A.containerInfo && be.stateNode.implementation === A.implementation) {
              a(z, be.sibling);
              var Je = o(be, A.children || []);
              return Je.return = z, Je;
            } else {
              a(z, be);
              break;
            }
          else
            t(z, be);
          be = be.sibling;
        }
        var ot = S0(A, z.mode, ue);
        return ot.return = z, ot;
      }
      function _t(z, W, A, ue) {
        var _e = typeof A == "object" && A !== null && A.type === Kr && A.key === null;
        if (_e && (A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case cr:
              return f(ze(z, W, A, ue));
            case Sa:
              return f(Ut(z, W, A, ue));
            case at:
              var be = A._payload, Je = A._init;
              return _t(z, W, Je(be), ue);
          }
          if (ft(A))
            return Y(z, W, A, ue);
          if (yn(A))
            return Se(z, W, A, ue);
          rm(z, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" ? f(Ie(z, W, "" + A, ue)) : (typeof A == "function" && am(z), a(z, W));
      }
      return _t;
    }
    var Hf = jE(!0), FE = jE(!1);
    function M1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = fc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = fc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function z1(e, t) {
      for (var a = e.child; a !== null; )
        Ck(a, t), a = a.sibling;
    }
    var wg = Lu(null), Rg;
    Rg = {};
    var im = null, Pf = null, Tg = null, lm = !1;
    function om() {
      im = null, Pf = null, Tg = null, lm = !1;
    }
    function HE() {
      lm = !0;
    }
    function PE() {
      lm = !1;
    }
    function VE(e, t, a) {
      fa(wg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Rg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Rg;
    }
    function _g(e, t) {
      var a = wg.current;
      ca(wg, t), e._currentValue = a;
    }
    function kg(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Eo(i.childLanes, t) ? o !== null && !Eo(o.childLanes, t) && (o.childLanes = dt(o.childLanes, t)) : (i.childLanes = dt(i.childLanes, t), o !== null && (o.childLanes = dt(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function A1(e, t, a) {
      U1(e, t, a);
    }
    function U1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === J) {
                var p = ir(a), v = Uo(Xt, p);
                v.tag = sm;
                var S = i.updateQueue;
                if (S !== null) {
                  var C = S.shared, D = C.pending;
                  D === null ? v.next = v : (v.next = D.next, D.next = v), C.pending = v;
                }
              }
              i.lanes = dt(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = dt(_.lanes, a)), kg(i.return, a, e), s.lanes = dt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === $e)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === Nt) {
          var F = i.return;
          if (F === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          F.lanes = dt(F.lanes, a);
          var B = F.alternate;
          B !== null && (B.lanes = dt(B.lanes, a)), kg(F, a, e), o = i.sibling;
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
            var Y = o.sibling;
            if (Y !== null) {
              Y.return = o.return, o = Y;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function Vf(e, t) {
      im = e, Pf = null, Tg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (oa(a.lanes, t) && Ip(), a.firstContext = null);
      }
    }
    function or(e) {
      lm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Tg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Pf === null) {
          if (im === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Pf = a, im.dependencies = {
            lanes: q,
            firstContext: a
          };
        } else
          Pf = Pf.next = a;
      }
      return t;
    }
    var rc = null;
    function Dg(e) {
      rc === null ? rc = [e] : rc.push(e);
    }
    function j1() {
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
    function BE(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Dg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, um(e, i);
    }
    function F1(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, Dg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function H1(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Dg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, um(e, i);
    }
    function Ya(e, t) {
      return um(e, t);
    }
    var P1 = um;
    function um(e, t) {
      e.lanes = dt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = dt(a.lanes, t)), a === null && (e.flags & (wn | Rn)) !== je && Fb(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = dt(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = dt(a.childLanes, t) : (o.flags & (wn | Rn)) !== je && Fb(e), i = o, o = o.return;
      if (i.tag === $) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var $E = 0, IE = 1, sm = 2, Og = 3, cm = !1, Ng, fm;
    Ng = !1, fm = null;
    function Lg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: q
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function YE(e, t) {
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
        tag: $E,
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
      if (fm === o && !Ng && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Ng = !0), F_()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, P1(e, a);
      } else
        return H1(e, o, t, a);
    }
    function dm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if ($d(a)) {
          var s = o.lanes;
          s = lf(s, e.pendingLanes);
          var f = dt(s, a);
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
    function V1(e, t, a, i, o, s) {
      switch (a.tag) {
        case IE: {
          var f = a.payload;
          if (typeof f == "function") {
            HE();
            var p = f.call(s, i, o);
            {
              if (e.mode & st) {
                Kt(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  Kt(!1);
                }
              }
              PE();
            }
            return p;
          }
          return f;
        }
        case Og:
          e.flags = e.flags & ~Dr | gt;
        // Intentional fallthrough
        case $E: {
          var v = a.payload, S;
          if (typeof v == "function") {
            HE(), S = v.call(s, i, o);
            {
              if (e.mode & st) {
                Kt(!0);
                try {
                  v.call(s, i, o);
                } finally {
                  Kt(!1);
                }
              }
              PE();
            }
          } else
            S = v;
          return S == null ? i : ut({}, i, S);
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
        var F = o.baseState, B = q, Y = null, Se = null, Ie = null, ze = s;
        do {
          var Ut = ze.lane, _t = ze.eventTime;
          if (Eo(i, Ut)) {
            if (Ie !== null) {
              var W = {
                eventTime: _t,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vn,
                tag: ze.tag,
                payload: ze.payload,
                callback: ze.callback,
                next: null
              };
              Ie = Ie.next = W;
            }
            F = V1(e, o, ze, F, t, a);
            var A = ze.callback;
            if (A !== null && // If the update was already committed, we should not queue its
            // callback again.
            ze.lane !== Vn) {
              e.flags |= on;
              var ue = o.effects;
              ue === null ? o.effects = [ze] : ue.push(ze);
            }
          } else {
            var z = {
              eventTime: _t,
              lane: Ut,
              tag: ze.tag,
              payload: ze.payload,
              callback: ze.callback,
              next: null
            };
            Ie === null ? (Se = Ie = z, Y = F) : Ie = Ie.next = z, B = dt(B, Ut);
          }
          if (ze = ze.next, ze === null) {
            if (p = o.shared.pending, p === null)
              break;
            var _e = p, be = _e.next;
            _e.next = null, ze = be, o.lastBaseUpdate = _e, o.shared.pending = null;
          }
        } while (!0);
        Ie === null && (Y = F), o.baseState = Y, o.firstBaseUpdate = Se, o.lastBaseUpdate = Ie;
        var Je = o.shared.interleaved;
        if (Je !== null) {
          var ot = Je;
          do
            B = dt(B, ot.lane), ot = ot.next;
          while (ot !== Je);
        } else s === null && (o.shared.lanes = q);
        nv(B), e.lanes = B, e.memoizedState = F;
      }
      fm = null;
    }
    function B1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function WE() {
      cm = !1;
    }
    function vm() {
      return cm;
    }
    function GE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, B1(f, a));
        }
    }
    var Op = {}, ju = Lu(Op), Np = Lu(Op), hm = Lu(Op);
    function mm(e) {
      if (e === Op)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function QE() {
      var e = mm(hm.current);
      return e;
    }
    function zg(e, t) {
      fa(hm, t, e), fa(Np, e, e), fa(ju, Op, e);
      var a = iR(t);
      ca(ju, e), fa(ju, a, e);
    }
    function Bf(e) {
      ca(ju, e), ca(Np, e), ca(hm, e);
    }
    function Ag() {
      var e = mm(ju.current);
      return e;
    }
    function qE(e) {
      mm(hm.current);
      var t = mm(ju.current), a = lR(t, e.type);
      t !== a && (fa(Np, e, e), fa(ju, a, e));
    }
    function Ug(e) {
      Np.current === e && (ca(ju, e), ca(Np, e));
    }
    var $1 = 0, KE = 1, XE = 1, Lp = 2, rl = Lu($1);
    function jg(e, t) {
      return (e & t) !== 0;
    }
    function $f(e) {
      return e & KE;
    }
    function Fg(e, t) {
      return e & KE | t;
    }
    function I1(e, t) {
      return e | t;
    }
    function Fu(e, t) {
      fa(rl, t, e);
    }
    function If(e) {
      ca(rl, e);
    }
    function Y1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function ym(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ve) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || vE(i) || ng(i))
              return t;
          }
        } else if (t.tag === Ve && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & gt) !== je;
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
    function Pg() {
      for (var e = 0; e < Hg.length; e++) {
        var t = Hg[e];
        t._workInProgressVersionPrimary = null;
      }
      Hg.length = 0;
    }
    function W1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Te = O.ReactCurrentDispatcher, Mp = O.ReactCurrentBatchConfig, Vg, Yf;
    Vg = /* @__PURE__ */ new Set();
    var ac = q, rn = null, gr = null, Sr = null, gm = !1, zp = !1, Ap = 0, G1 = 0, Q1 = 25, K = null, Oi = null, Hu = -1, Bg = !1;
    function Gt() {
      {
        var e = K;
        Oi === null ? Oi = [e] : Oi.push(e);
      }
    }
    function me() {
      {
        var e = K;
        Oi !== null && (Hu++, Oi[Hu] !== e && q1(e));
      }
    }
    function Wf(e) {
      e != null && !ft(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", K, typeof e);
    }
    function q1(e) {
      {
        var t = tt(rn);
        if (!Vg.has(t) && (Vg.add(t), Oi !== null)) {
          for (var a = "", i = 30, o = 0; o <= Hu; o++) {
            for (var s = Oi[o], f = o === Hu ? e : s, p = o + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

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
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", K), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, K, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ce(e[a], t[a]))
          return !1;
      return !0;
    }
    function Gf(e, t, a, i, o, s) {
      ac = s, rn = t, Oi = e !== null ? e._debugHookTypes : null, Hu = -1, Bg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = q, e !== null && e.memoizedState !== null ? Te.current = SC : Oi !== null ? Te.current = gC : Te.current = yC;
      var f = a(i, o);
      if (zp) {
        var p = 0;
        do {
          if (zp = !1, Ap = 0, p >= Q1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Bg = !1, gr = null, Sr = null, t.updateQueue = null, Hu = -1, Te.current = EC, f = a(i, o);
        } while (zp);
      }
      Te.current = Nm, t._debugHookTypes = Oi;
      var v = gr !== null && gr.next !== null;
      if (ac = q, rn = null, gr = null, Sr = null, K = null, Oi = null, Hu = -1, e !== null && (e.flags & Pn) !== (t.flags & Pn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ct) !== Fe && g("Internal React error: Expected static flag was missing. Please notify the React team."), gm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Qf() {
      var e = Ap !== 0;
      return Ap = 0, e;
    }
    function JE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & nn) !== Fe ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ls(e.lanes, a);
    }
    function ZE() {
      if (Te.current = Nm, gm) {
        for (var e = rn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        gm = !1;
      }
      ac = q, rn = null, gr = null, Sr = null, Oi = null, Hu = -1, K = null, dC = !1, zp = !1, Ap = 0;
    }
    function Bl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sr === null ? rn.memoizedState = Sr = e : Sr = Sr.next = e, Sr;
    }
    function Ni() {
      var e;
      if (gr === null) {
        var t = rn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = gr.next;
      var a;
      if (Sr === null ? a = rn.memoizedState : a = Sr.next, a !== null)
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
        Sr === null ? rn.memoizedState = Sr = i : Sr = Sr.next = i;
      }
      return Sr;
    }
    function eC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Ig(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Yg(e, t, a) {
      var i = Bl(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: q,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var f = s.dispatch = Z1.bind(null, rn, s);
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
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, o.pending = null;
      }
      if (f !== null) {
        var C = f.next, D = s.baseState, _ = null, F = null, B = null, Y = C;
        do {
          var Se = Y.lane;
          if (Eo(ac, Se)) {
            if (B !== null) {
              var ze = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vn,
                action: Y.action,
                hasEagerState: Y.hasEagerState,
                eagerState: Y.eagerState,
                next: null
              };
              B = B.next = ze;
            }
            if (Y.hasEagerState)
              D = Y.eagerState;
            else {
              var Ut = Y.action;
              D = e(D, Ut);
            }
          } else {
            var Ie = {
              lane: Se,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            };
            B === null ? (F = B = Ie, _ = D) : B = B.next = Ie, rn.lanes = dt(rn.lanes, Se), nv(Se);
          }
          Y = Y.next;
        } while (Y !== null && Y !== C);
        B === null ? _ = D : B.next = F, Ce(D, i.memoizedState) || Ip(), i.memoizedState = D, i.baseState = _, i.baseQueue = B, o.lastRenderedState = D;
      }
      var _t = o.interleaved;
      if (_t !== null) {
        var z = _t;
        do {
          var W = z.lane;
          rn.lanes = dt(rn.lanes, W), nv(W), z = z.next;
        } while (z !== _t);
      } else f === null && (o.lanes = q);
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
        Ce(p, i.memoizedState) || Ip(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), o.lastRenderedState = p;
      }
      return [p, s];
    }
    function vN(e, t, a) {
    }
    function hN(e, t, a) {
    }
    function Qg(e, t, a) {
      var i = rn, o = Bl(), s, f = Vr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Yf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      } else {
        if (s = t(), !Yf) {
          var p = t();
          Ce(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
        }
        var v = Km();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(v, ac) || tC(i, t, s);
      }
      o.memoizedState = s;
      var S = {
        value: s,
        getSnapshot: t
      };
      return o.queue = S, xm(rC.bind(null, i, S, e), [e]), i.flags |= Ea, Up(mr | Br, nC.bind(null, i, S, s, t), void 0, null), s;
    }
    function Sm(e, t, a) {
      var i = rn, o = Ni(), s = t();
      if (!Yf) {
        var f = t();
        Ce(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      }
      var p = o.memoizedState, v = !Ce(p, s);
      v && (o.memoizedState = s, Ip());
      var S = o.queue;
      if (Fp(rC.bind(null, i, S, e), [e]), S.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Sr !== null && Sr.memoizedState.tag & mr) {
        i.flags |= Ea, Up(mr | Br, nC.bind(null, i, S, s, t), void 0, null);
        var C = Km();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(C, ac) || tC(i, t, s);
      }
      return s;
    }
    function tC(e, t, a) {
      e.flags |= Mc;
      var i = {
        getSnapshot: t,
        value: a
      }, o = rn.updateQueue;
      if (o === null)
        o = eC(), rn.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function nC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, aC(t) && iC(e);
    }
    function rC(e, t, a) {
      var i = function() {
        aC(t) && iC(e);
      };
      return a(i);
    }
    function aC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ce(a, i);
      } catch {
        return !0;
      }
    }
    function iC(e) {
      var t = Ya(e, Ke);
      t !== null && xr(t, e, Ke, Xt);
    }
    function Em(e) {
      var t = Bl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: q,
        dispatch: null,
        lastRenderedReducer: Ig,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = eT.bind(null, rn, a);
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
      }, s = rn.updateQueue;
      if (s === null)
        s = eC(), rn.updateQueue = s, s.lastEffect = o.next = o;
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
      var t = Bl();
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
      var o = Bl(), s = i === void 0 ? null : i;
      rn.flags |= e, o.memoizedState = Up(mr | t, a, void 0, s);
    }
    function bm(e, t, a, i) {
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
      rn.flags |= e, o.memoizedState = Up(mr | t, a, f, s);
    }
    function xm(e, t) {
      return (rn.mode & nn) !== Fe ? jp(Cl | Ea | xd, Br, e, t) : jp(Ea | xd, Br, e, t);
    }
    function Fp(e, t) {
      return bm(Ea, Br, e, t);
    }
    function Jg(e, t) {
      return jp(Rt, Vl, e, t);
    }
    function wm(e, t) {
      return bm(Rt, Vl, e, t);
    }
    function Zg(e, t) {
      var a = Rt;
      return a |= El, (rn.mode & nn) !== Fe && (a |= jr), jp(a, yr, e, t);
    }
    function Rm(e, t) {
      return bm(Rt, yr, e, t);
    }
    function lC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function eS(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = Rt;
      return o |= El, (rn.mode & nn) !== Fe && (o |= jr), jp(o, yr, lC.bind(null, t, e), i);
    }
    function Tm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return bm(Rt, yr, lC.bind(null, t, e), i);
    }
    function K1(e, t) {
    }
    var _m = K1;
    function tS(e, t) {
      var a = Bl(), i = t === void 0 ? null : t;
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
      var a = Bl(), i = t === void 0 ? null : t, o = e();
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
      var t = Bl();
      return t.memoizedState = e, e;
    }
    function oC(e) {
      var t = Ni(), a = gr, i = a.memoizedState;
      return sC(t, i, e);
    }
    function uC(e) {
      var t = Ni();
      if (gr === null)
        return t.memoizedState = e, e;
      var a = gr.memoizedState;
      return sC(t, a, e);
    }
    function sC(e, t, a) {
      var i = !Bd(ac);
      if (i) {
        if (!Ce(a, t)) {
          var o = Id();
          rn.lanes = dt(rn.lanes, o), nv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Ip()), e.memoizedState = a, a;
    }
    function X1(e, t, a) {
      var i = ba();
      Gn(zs(i, Pa)), e(!0);
      var o = Mp.transition;
      Mp.transition = {};
      var s = Mp.transition;
      Mp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Gn(i), Mp.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Q("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function aS() {
      var e = Em(!1), t = e[0], a = e[1], i = X1.bind(null, a), o = Bl();
      return o.memoizedState = i, [t, i];
    }
    function cC() {
      var e = qg(), t = e[0], a = Ni(), i = a.memoizedState;
      return [t, i];
    }
    function fC() {
      var e = Kg(), t = e[0], a = Ni(), i = a.memoizedState;
      return [t, i];
    }
    var dC = !1;
    function J1() {
      return dC;
    }
    function iS() {
      var e = Bl(), t = Km(), a = t.identifierPrefix, i;
      if (Vr()) {
        var o = h1();
        i = ":" + a + "R" + o;
        var s = Ap++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = G1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Om() {
      var e = Ni(), t = e.memoizedState;
      return t;
    }
    function Z1(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Iu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (pC(e))
        vC(t, o);
      else {
        var s = BE(e, t, o, i);
        if (s !== null) {
          var f = ka();
          xr(s, e, i, f), hC(s, t, i);
        }
      }
      mC(e, i);
    }
    function eT(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Iu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (pC(e))
        vC(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === q && (s === null || s.lanes === q)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Te.current, Te.current = al;
            try {
              var v = t.lastRenderedState, S = f(v, a);
              if (o.hasEagerState = !0, o.eagerState = S, Ce(S, v)) {
                F1(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Te.current = p;
            }
          }
        }
        var C = BE(e, t, o, i);
        if (C !== null) {
          var D = ka();
          xr(C, e, i, D), hC(C, t, i);
        }
      }
      mC(e, i);
    }
    function pC(e) {
      var t = e.alternate;
      return e === rn || t !== null && t === rn;
    }
    function vC(e, t) {
      zp = gm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function hC(e, t, a) {
      if ($d(a)) {
        var i = t.lanes;
        i = lf(i, e.pendingLanes);
        var o = dt(i, a);
        t.lanes = o, Ms(e, o);
      }
    }
    function mC(e, t, a) {
      xs(e, t);
    }
    var Nm = {
      readContext: or,
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
    }, yC = null, gC = null, SC = null, EC = null, $l = null, al = null, Lm = null;
    {
      var lS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, it = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      yC = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", Gt(), Wf(t), tS(e, t);
        },
        useContext: function(e) {
          return K = "useContext", Gt(), or(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", Gt(), Wf(t), xm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", Gt(), Wf(a), eS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", Gt(), Wf(t), Jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", Gt(), Wf(t), Zg(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", Gt(), Wf(t);
          var a = Te.current;
          Te.current = $l;
          try {
            return nS(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", Gt();
          var i = Te.current;
          Te.current = $l;
          try {
            return Yg(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", Gt(), Xg(e);
        },
        useState: function(e) {
          K = "useState", Gt();
          var t = Te.current;
          Te.current = $l;
          try {
            return Em(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", Gt(), rS(e);
        },
        useTransition: function() {
          return K = "useTransition", Gt(), aS();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", Gt(), Qg(e, t, a);
        },
        useId: function() {
          return K = "useId", Gt(), iS();
        },
        unstable_isNewReconciler: xe
      }, gC = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", me(), tS(e, t);
        },
        useContext: function(e) {
          return K = "useContext", me(), or(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", me(), xm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", me(), eS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", me(), Jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", me(), Zg(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", me();
          var a = Te.current;
          Te.current = $l;
          try {
            return nS(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", me();
          var i = Te.current;
          Te.current = $l;
          try {
            return Yg(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", me(), Xg(e);
        },
        useState: function(e) {
          K = "useState", me();
          var t = Te.current;
          Te.current = $l;
          try {
            return Em(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", me(), void 0;
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", me(), rS(e);
        },
        useTransition: function() {
          return K = "useTransition", me(), aS();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", me(), Qg(e, t, a);
        },
        useId: function() {
          return K = "useId", me(), iS();
        },
        unstable_isNewReconciler: xe
      }, SC = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", me(), km(e, t);
        },
        useContext: function(e) {
          return K = "useContext", me(), or(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", me(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", me(), Tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", me(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", me(), Rm(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", me();
          var a = Te.current;
          Te.current = al;
          try {
            return Dm(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", me();
          var i = Te.current;
          Te.current = al;
          try {
            return Wg(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", me(), Cm();
        },
        useState: function(e) {
          K = "useState", me();
          var t = Te.current;
          Te.current = al;
          try {
            return qg(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", me(), _m();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", me(), oC(e);
        },
        useTransition: function() {
          return K = "useTransition", me(), cC();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", me(), Sm(e, t);
        },
        useId: function() {
          return K = "useId", me(), Om();
        },
        unstable_isNewReconciler: xe
      }, EC = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", me(), km(e, t);
        },
        useContext: function(e) {
          return K = "useContext", me(), or(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", me(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", me(), Tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", me(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", me(), Rm(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", me();
          var a = Te.current;
          Te.current = Lm;
          try {
            return Dm(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", me();
          var i = Te.current;
          Te.current = Lm;
          try {
            return Gg(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", me(), Cm();
        },
        useState: function(e) {
          K = "useState", me();
          var t = Te.current;
          Te.current = Lm;
          try {
            return Kg(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", me(), _m();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", me(), uC(e);
        },
        useTransition: function() {
          return K = "useTransition", me(), fC();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", me(), Sm(e, t);
        },
        useId: function() {
          return K = "useId", me(), Om();
        },
        unstable_isNewReconciler: xe
      }, $l = {
        readContext: function(e) {
          return lS(), or(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", it(), Gt(), tS(e, t);
        },
        useContext: function(e) {
          return K = "useContext", it(), Gt(), or(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", it(), Gt(), xm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", it(), Gt(), eS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", it(), Gt(), Jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", it(), Gt(), Zg(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", it(), Gt();
          var a = Te.current;
          Te.current = $l;
          try {
            return nS(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", it(), Gt();
          var i = Te.current;
          Te.current = $l;
          try {
            return Yg(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", it(), Gt(), Xg(e);
        },
        useState: function(e) {
          K = "useState", it(), Gt();
          var t = Te.current;
          Te.current = $l;
          try {
            return Em(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", it(), Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", it(), Gt(), rS(e);
        },
        useTransition: function() {
          return K = "useTransition", it(), Gt(), aS();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", it(), Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", it(), Gt(), Qg(e, t, a);
        },
        useId: function() {
          return K = "useId", it(), Gt(), iS();
        },
        unstable_isNewReconciler: xe
      }, al = {
        readContext: function(e) {
          return lS(), or(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", it(), me(), km(e, t);
        },
        useContext: function(e) {
          return K = "useContext", it(), me(), or(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", it(), me(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", it(), me(), Tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", it(), me(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", it(), me(), Rm(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", it(), me();
          var a = Te.current;
          Te.current = al;
          try {
            return Dm(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", it(), me();
          var i = Te.current;
          Te.current = al;
          try {
            return Wg(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", it(), me(), Cm();
        },
        useState: function(e) {
          K = "useState", it(), me();
          var t = Te.current;
          Te.current = al;
          try {
            return qg(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", it(), me(), _m();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", it(), me(), oC(e);
        },
        useTransition: function() {
          return K = "useTransition", it(), me(), cC();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", it(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", it(), me(), Sm(e, t);
        },
        useId: function() {
          return K = "useId", it(), me(), Om();
        },
        unstable_isNewReconciler: xe
      }, Lm = {
        readContext: function(e) {
          return lS(), or(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", it(), me(), km(e, t);
        },
        useContext: function(e) {
          return K = "useContext", it(), me(), or(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", it(), me(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", it(), me(), Tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", it(), me(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", it(), me(), Rm(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", it(), me();
          var a = Te.current;
          Te.current = al;
          try {
            return Dm(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", it(), me();
          var i = Te.current;
          Te.current = al;
          try {
            return Gg(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", it(), me(), Cm();
        },
        useState: function(e) {
          K = "useState", it(), me();
          var t = Te.current;
          Te.current = al;
          try {
            return Kg(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", it(), me(), _m();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", it(), me(), uC(e);
        },
        useTransition: function() {
          return K = "useTransition", it(), me(), fC();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", it(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", it(), me(), Sm(e, t);
        },
        useId: function() {
          return K = "useId", it(), me(), Om();
        },
        unstable_isNewReconciler: xe
      };
    }
    var Pu = E.unstable_now, CC = 0, Mm = -1, Hp = -1, zm = -1, oS = !1, Am = !1;
    function bC() {
      return oS;
    }
    function tT() {
      Am = !0;
    }
    function nT() {
      oS = !1, Am = !1;
    }
    function rT() {
      oS = Am, Am = !1;
    }
    function xC() {
      return CC;
    }
    function wC() {
      CC = Pu();
    }
    function uS(e) {
      Hp = Pu(), e.actualStartTime < 0 && (e.actualStartTime = Pu());
    }
    function RC(e) {
      Hp = -1;
    }
    function Um(e, t) {
      if (Hp >= 0) {
        var a = Pu() - Hp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Hp = -1;
      }
    }
    function Il(e) {
      if (Mm >= 0) {
        var t = Pu() - Mm;
        Mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case $:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ye:
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
        var t = Pu() - zm;
        zm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case $:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ye:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Yl() {
      Mm = Pu();
    }
    function cS() {
      zm = Pu();
    }
    function fS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function il(e, t) {
      if (e && e.defaultProps) {
        var a = ut({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var dS = {}, pS, vS, hS, mS, yS, TC, jm, gS, SS, ES, Pp;
    {
      pS = /* @__PURE__ */ new Set(), vS = /* @__PURE__ */ new Set(), hS = /* @__PURE__ */ new Set(), mS = /* @__PURE__ */ new Set(), gS = /* @__PURE__ */ new Set(), yS = /* @__PURE__ */ new Set(), SS = /* @__PURE__ */ new Set(), ES = /* @__PURE__ */ new Set(), Pp = /* @__PURE__ */ new Set();
      var _C = /* @__PURE__ */ new Set();
      jm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          _C.has(a) || (_C.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, TC = function(e, t) {
        if (t === void 0) {
          var a = zt(e) || "Component";
          yS.has(a) || (yS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
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
        if (e.mode & st) {
          Kt(!0);
          try {
            s = a(i, o);
          } finally {
            Kt(!1);
          }
        }
        TC(t, s);
      }
      var f = s == null ? o : ut({}, o, s);
      if (e.memoizedState = f, e.lanes === q) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var bS = {
      isMounted: wd,
      enqueueSetState: function(e, t, a) {
        var i = su(e), o = ka(), s = Iu(i), f = Uo(o, s);
        f.payload = t, a != null && (jm(a, "setState"), f.callback = a);
        var p = Uu(i, f, s);
        p !== null && (xr(p, i, s, o), dm(p, i, s)), xs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = su(e), o = ka(), s = Iu(i), f = Uo(o, s);
        f.tag = IE, f.payload = t, a != null && (jm(a, "replaceState"), f.callback = a);
        var p = Uu(i, f, s);
        p !== null && (xr(p, i, s, o), dm(p, i, s)), xs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = su(e), i = ka(), o = Iu(a), s = Uo(i, o);
        s.tag = sm, t != null && (jm(t, "forceUpdate"), s.callback = t);
        var f = Uu(a, s, o);
        f !== null && (xr(f, a, o, i), dm(f, a, o)), Fd(a, o);
      }
    };
    function kC(e, t, a, i, o, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & st) {
            Kt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Kt(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", zt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Pe(a, i) || !Pe(o, s) : !0;
    }
    function aT(e, t, a) {
      var i = e.stateNode;
      {
        var o = zt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), t.childContextTypes && !Pp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & st) === Fe && (Pp.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), t.contextTypes && !Pp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & st) === Fe && (Pp.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !SS.has(t) && (SS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", zt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !hS.has(t) && (hS.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", zt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var p = i.state;
        p && (typeof p != "object" || ft(p)) && g("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function DC(e, t) {
      t.updater = bS, e.stateNode = t, ms(t, e), t._reactInternalInstance = dS;
    }
    function OC(e, t, a) {
      var i = !1, o = si, s = si, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !ES.has(t)) {
          ES.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Fi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", zt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = or(f);
      else {
        o = zf(e, t, !0);
        var S = t.contextTypes;
        i = S != null, s = i ? Af(e, o) : si;
      }
      var C = new t(a, s);
      if (e.mode & st) {
        Kt(!0);
        try {
          C = new t(a, s);
        } finally {
          Kt(!1);
        }
      }
      var D = e.memoizedState = C.state !== null && C.state !== void 0 ? C.state : null;
      DC(e, C);
      {
        if (typeof t.getDerivedStateFromProps == "function" && D === null) {
          var _ = zt(t) || "Component";
          vS.has(_) || (vS.add(_), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, C.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof C.getSnapshotBeforeUpdate == "function") {
          var F = null, B = null, Y = null;
          if (typeof C.componentWillMount == "function" && C.componentWillMount.__suppressDeprecationWarning !== !0 ? F = "componentWillMount" : typeof C.UNSAFE_componentWillMount == "function" && (F = "UNSAFE_componentWillMount"), typeof C.componentWillReceiveProps == "function" && C.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? B = "componentWillReceiveProps" : typeof C.UNSAFE_componentWillReceiveProps == "function" && (B = "UNSAFE_componentWillReceiveProps"), typeof C.componentWillUpdate == "function" && C.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Y = "componentWillUpdate" : typeof C.UNSAFE_componentWillUpdate == "function" && (Y = "UNSAFE_componentWillUpdate"), F !== null || B !== null || Y !== null) {
            var Se = zt(t) || "Component", Ie = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            mS.has(Se) || (mS.add(Se), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Se, Ie, F !== null ? `
  ` + F : "", B !== null ? `
  ` + B : "", Y !== null ? `
  ` + Y : ""));
          }
        }
      }
      return i && SE(e, o, s), C;
    }
    function iT(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", tt(e) || "Component"), bS.enqueueReplaceState(t, t.state, null));
    }
    function NC(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = tt(e) || "Component";
          pS.has(s) || (pS.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        bS.enqueueReplaceState(t, t.state, null);
      }
    }
    function xS(e, t, a, i) {
      aT(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = {}, Lg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = or(s);
      else {
        var f = zf(e, t, !0);
        o.context = Af(e, f);
      }
      {
        if (o.state === a) {
          var p = zt(t) || "Component";
          gS.has(p) || (gS.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & st && nl.recordLegacyContextWarning(e, o), nl.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (CS(e, t, v, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (iT(e, o), pm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var S = Rt;
        S |= El, (e.mode & nn) !== Fe && (S |= jr), e.flags |= S;
      }
    }
    function lT(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, p = t.contextType, v = si;
      if (typeof p == "object" && p !== null)
        v = or(p);
      else {
        var S = zf(e, t, !0);
        v = Af(e, S);
      }
      var C = t.getDerivedStateFromProps, D = typeof C == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !D && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== v) && NC(e, o, a, v), WE();
      var _ = e.memoizedState, F = o.state = _;
      if (pm(e, a, o, i), F = e.memoizedState, s === a && _ === F && !Qh() && !vm()) {
        if (typeof o.componentDidMount == "function") {
          var B = Rt;
          B |= El, (e.mode & nn) !== Fe && (B |= jr), e.flags |= B;
        }
        return !1;
      }
      typeof C == "function" && (CS(e, t, C, a), F = e.memoizedState);
      var Y = vm() || kC(e, t, s, a, _, F, v);
      if (Y) {
        if (!D && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var Se = Rt;
          Se |= El, (e.mode & nn) !== Fe && (Se |= jr), e.flags |= Se;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var Ie = Rt;
          Ie |= El, (e.mode & nn) !== Fe && (Ie |= jr), e.flags |= Ie;
        }
        e.memoizedProps = a, e.memoizedState = F;
      }
      return o.props = a, o.state = F, o.context = v, Y;
    }
    function oT(e, t, a, i, o) {
      var s = t.stateNode;
      YE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : il(t.type, f);
      s.props = p;
      var v = t.pendingProps, S = s.context, C = a.contextType, D = si;
      if (typeof C == "object" && C !== null)
        D = or(C);
      else {
        var _ = zf(t, a, !0);
        D = Af(t, _);
      }
      var F = a.getDerivedStateFromProps, B = typeof F == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !B && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || S !== D) && NC(t, s, i, D), WE();
      var Y = t.memoizedState, Se = s.state = Y;
      if (pm(t, i, s, o), Se = t.memoizedState, f === v && Y === Se && !Qh() && !vm() && !he)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= Rt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= Fa), !1;
      typeof F == "function" && (CS(t, a, F, i), Se = t.memoizedState);
      var Ie = vm() || kC(t, a, p, i, Y, Se, D) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      he;
      return Ie ? (!B && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Se, D), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Se, D)), typeof s.componentDidUpdate == "function" && (t.flags |= Rt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Fa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= Rt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= Fa), t.memoizedProps = i, t.memoizedState = Se), s.props = i, s.state = Se, s.context = D, Ie;
    }
    function ic(e, t) {
      return {
        value: e,
        source: t,
        stack: Mt(t),
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
    function uT(e, t) {
      return !0;
    }
    function RS(e, t) {
      try {
        var a = uT(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === J)
            return;
          console.error(i);
        }
        var p = o ? tt(o) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", S;
        if (e.tag === $)
          S = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var C = tt(e) || "Anonymous";
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
    var sT = typeof WeakMap == "function" ? WeakMap : Map;
    function LC(e, t, a) {
      var i = Uo(Xt, a);
      i.tag = Og, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        tk(o), RS(e, t);
      }, i;
    }
    function TS(e, t, a) {
      var i = Uo(Xt, a);
      i.tag = Og;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          $b(e), RS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        $b(e), RS(e, t), typeof o != "function" && Z_(this);
        var v = t.value, S = t.stack;
        this.componentDidCatch(v, {
          componentStack: S !== null ? S : ""
        }), typeof o != "function" && (oa(e.lanes, Ke) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", tt(e) || "Unknown"));
      }), i;
    }
    function MC(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new sT(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = nk.bind(null, e, t, a);
        Or && rv(e, a), t.then(s, s);
      }
    }
    function cT(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function fT(e, t) {
      var a = e.tag;
      if ((e.mode & Ct) === Fe && (a === Z || a === Me || a === We)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function zC(e) {
      var t = e;
      do {
        if (t.tag === ve && Y1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function AC(e, t, a, i, o) {
      if ((e.mode & Ct) === Fe) {
        if (e === t)
          e.flags |= Dr;
        else {
          if (e.flags |= gt, a.flags |= ai, a.flags &= -52805, a.tag === J) {
            var s = a.alternate;
            if (s === null)
              a.tag = xt;
            else {
              var f = Uo(Xt, Ke);
              f.tag = sm, Uu(a, f, Ke);
            }
          }
          a.lanes = dt(a.lanes, Ke);
        }
        return e;
      }
      return e.flags |= Dr, e.lanes = o, e;
    }
    function dT(e, t, a, i, o) {
      if (a.flags |= co, Or && rv(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        fT(a), Vr() && a.mode & Ct && TE();
        var f = zC(t);
        if (f !== null) {
          f.flags &= ~gn, AC(f, t, a, e, o), f.mode & Ct && MC(e, s, o), cT(f, e, s);
          return;
        } else {
          if (!Vd(o)) {
            MC(e, s, o), i0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Vr() && a.mode & Ct) {
        TE();
        var v = zC(t);
        if (v !== null) {
          (v.flags & Dr) === je && (v.flags |= gn), AC(v, t, a, e, o), gg(ic(i, a));
          return;
        }
      }
      i = ic(i, a), Y_(i);
      var S = t;
      do {
        switch (S.tag) {
          case $: {
            var C = i;
            S.flags |= Dr;
            var D = ir(o);
            S.lanes = dt(S.lanes, D);
            var _ = LC(S, C, D);
            Mg(S, _);
            return;
          }
          case J:
            var F = i, B = S.type, Y = S.stateNode;
            if ((S.flags & gt) === je && (typeof B.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && !zb(Y))) {
              S.flags |= Dr;
              var Se = ir(o);
              S.lanes = dt(S.lanes, Se);
              var Ie = TS(S, F, Se);
              Mg(S, Ie);
              return;
            }
            break;
        }
        S = S.return;
      } while (S !== null);
    }
    function pT() {
      return null;
    }
    var Vp = O.ReactCurrentOwner, ll = !1, _S, Bp, kS, DS, OS, lc, NS, Fm, $p;
    _S = {}, Bp = {}, kS = {}, DS = {}, OS = {}, lc = !1, NS = {}, Fm = {}, $p = {};
    function Ta(e, t, a, i) {
      e === null ? t.child = FE(t, null, a, i) : t.child = Hf(t, e.child, a, i);
    }
    function vT(e, t, a, i) {
      t.child = Hf(t, e.child, null, i), t.child = Hf(t, null, a, i);
    }
    function UC(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && el(
          s,
          i,
          // Resolved props
          "prop",
          zt(a)
        );
      }
      var f = a.render, p = t.ref, v, S;
      Vf(t, o), Ha(t);
      {
        if (Vp.current = t, Ma(!0), v = Gf(e, t, f, i, p, o), S = Qf(), t.mode & st) {
          Kt(!0);
          try {
            v = Gf(e, t, f, i, p, o), S = Qf();
          } finally {
            Kt(!1);
          }
        }
        Ma(!1);
      }
      return Rl(), e !== null && !ll ? (JE(e, t, o), jo(e, t, o)) : (Vr() && S && dg(t), t.flags |= qi, Ta(e, t, v, o), t.child);
    }
    function jC(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (Sk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = nd(s), t.tag = We, t.type = f, zS(t, s), FC(e, t, f, i, o);
        }
        {
          var p = s.propTypes;
          if (p && el(
            p,
            i,
            // Resolved props
            "prop",
            zt(s)
          ), a.defaultProps !== void 0) {
            var v = zt(s) || "Unknown";
            $p[v] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), $p[v] = !0);
          }
        }
        var S = m0(a.type, null, i, t, t.mode, o);
        return S.ref = t.ref, S.return = t, t.child = S, S;
      }
      {
        var C = a.type, D = C.propTypes;
        D && el(
          D,
          i,
          // Resolved props
          "prop",
          zt(C)
        );
      }
      var _ = e.child, F = PS(e, o);
      if (!F) {
        var B = _.memoizedProps, Y = a.compare;
        if (Y = Y !== null ? Y : Pe, Y(B, i) && e.ref === t.ref)
          return jo(e, t, o);
      }
      t.flags |= qi;
      var Se = fc(_, i);
      return Se.ref = t.ref, Se.return = t, t.child = Se, Se;
    }
    function FC(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === at) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var S = s && s.propTypes;
          S && el(
            S,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            zt(s)
          );
        }
      }
      if (e !== null) {
        var C = e.memoizedProps;
        if (Pe(C, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ll = !1, t.pendingProps = i = C, PS(e, o))
            (e.flags & ai) !== je && (ll = !0);
          else return t.lanes = e.lanes, jo(e, t, o);
      }
      return LS(e, t, a, i, o);
    }
    function HC(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || N)
        if ((t.mode & Ct) === Fe) {
          var f = {
            baseLanes: q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Xm(t, a);
        } else if (oa(a, ia)) {
          var D = {
            baseLanes: q,
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
            v = dt(S, a);
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
        s !== null ? (F = dt(s.baseLanes, a), t.memoizedState = null) : F = a, Xm(t, F);
      }
      return Ta(e, t, o, a), t.child;
    }
    function hT(e, t, a) {
      var i = t.pendingProps;
      return Ta(e, t, i, a), t.child;
    }
    function mT(e, t, a) {
      var i = t.pendingProps.children;
      return Ta(e, t, i, a), t.child;
    }
    function yT(e, t, a) {
      {
        t.flags |= Rt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return Ta(e, t, s, a), t.child;
    }
    function PC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Hn, t.flags |= gs);
    }
    function LS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && el(
          s,
          i,
          // Resolved props
          "prop",
          zt(a)
        );
      }
      var f;
      {
        var p = zf(t, a, !0);
        f = Af(t, p);
      }
      var v, S;
      Vf(t, o), Ha(t);
      {
        if (Vp.current = t, Ma(!0), v = Gf(e, t, a, i, f, o), S = Qf(), t.mode & st) {
          Kt(!0);
          try {
            v = Gf(e, t, a, i, f, o), S = Qf();
          } finally {
            Kt(!1);
          }
        }
        Ma(!1);
      }
      return Rl(), e !== null && !ll ? (JE(e, t, o), jo(e, t, o)) : (Vr() && S && dg(t), t.flags |= qi, Ta(e, t, v, o), t.child);
    }
    function VC(e, t, a, i, o) {
      {
        switch (zk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= gt, t.flags |= Dr;
            var S = new Error("Simulated error coming from DevTools"), C = ir(o);
            t.lanes = dt(t.lanes, C);
            var D = TS(t, ic(S, t), C);
            Mg(t, D);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var _ = a.propTypes;
          _ && el(
            _,
            i,
            // Resolved props
            "prop",
            zt(a)
          );
        }
      }
      var F;
      Pl(a) ? (F = !0, Kh(t)) : F = !1, Vf(t, o);
      var B = t.stateNode, Y;
      B === null ? (Pm(e, t), OC(t, a, i), xS(t, a, i, o), Y = !0) : e === null ? Y = lT(t, a, i, o) : Y = oT(e, t, a, i, o);
      var Se = MS(e, t, a, Y, F, o);
      {
        var Ie = t.stateNode;
        Y && Ie.props !== i && (lc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", tt(t) || "a component"), lc = !0);
      }
      return Se;
    }
    function MS(e, t, a, i, o, s) {
      PC(e, t);
      var f = (t.flags & gt) !== je;
      if (!i && !f)
        return o && bE(t, a, !1), jo(e, t, s);
      var p = t.stateNode;
      Vp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, RC();
      else {
        Ha(t);
        {
          if (Ma(!0), v = p.render(), t.mode & st) {
            Kt(!0);
            try {
              p.render();
            } finally {
              Kt(!1);
            }
          }
          Ma(!1);
        }
        Rl();
      }
      return t.flags |= qi, e !== null && f ? vT(e, t, v, s) : Ta(e, t, v, s), t.memoizedState = p.state, o && bE(t, a, !0), t.child;
    }
    function BC(e) {
      var t = e.stateNode;
      t.pendingContext ? EE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && EE(e, t.context, !1), zg(e, t.containerInfo);
    }
    function gT(e, t, a) {
      if (BC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      YE(e, t), pm(t, i, null, a);
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
          return $C(e, t, p, a, C);
        } else if (p !== s) {
          var D = ic(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return $C(e, t, p, a, D);
        } else {
          C1(t);
          var _ = FE(t, null, p, a);
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
    function $C(e, t, a, i, o) {
      return Ff(), gg(o), t.flags |= gn, Ta(e, t, a, i), t.child;
    }
    function ST(e, t, a) {
      qE(t), e === null && yg(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, p = Jy(i, o);
      return p ? f = null : s !== null && Jy(i, s) && (t.flags |= qt), PC(e, t), Ta(e, t, f, a), t.child;
    }
    function ET(e, t) {
      return e === null && yg(t), null;
    }
    function CT(e, t, a, i) {
      Pm(e, t);
      var o = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var S = t.tag = Ek(v), C = il(v, o), D;
      switch (S) {
        case Z:
          return zS(t, v), t.type = v = nd(v), D = LS(null, t, v, C, i), D;
        case J:
          return t.type = v = c0(v), D = VC(null, t, v, C, i), D;
        case Me:
          return t.type = v = f0(v), D = UC(null, t, v, C, i), D;
        case Ze: {
          if (t.type !== t.elementType) {
            var _ = v.propTypes;
            _ && el(
              _,
              C,
              // Resolved for outer only
              "prop",
              zt(v)
            );
          }
          return D = jC(
            null,
            t,
            v,
            il(v.type, C),
            // The inner type can have defaults too
            i
          ), D;
        }
      }
      var F = "";
      throw v !== null && typeof v == "object" && v.$$typeof === at && (F = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + F));
    }
    function bT(e, t, a, i, o) {
      Pm(e, t), t.tag = J;
      var s;
      return Pl(a) ? (s = !0, Kh(t)) : s = !1, Vf(t, o), OC(t, a, i), xS(t, a, i, o), MS(null, t, a, !0, s, o);
    }
    function xT(e, t, a, i) {
      Pm(e, t);
      var o = t.pendingProps, s;
      {
        var f = zf(t, a, !1);
        s = Af(t, f);
      }
      Vf(t, i);
      var p, v;
      Ha(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var S = zt(a) || "Unknown";
          _S[S] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), _S[S] = !0);
        }
        t.mode & st && nl.recordLegacyContextWarning(t, null), Ma(!0), Vp.current = t, p = Gf(null, t, a, o, s, i), v = Qf(), Ma(!1);
      }
      if (Rl(), t.flags |= qi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var C = zt(a) || "Unknown";
        Bp[C] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", C, C, C), Bp[C] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var D = zt(a) || "Unknown";
          Bp[D] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), Bp[D] = !0);
        }
        t.tag = J, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return Pl(a) ? (_ = !0, Kh(t)) : _ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Lg(t), DC(t, p), xS(t, a, o, i), MS(null, t, a, !0, _, i);
      } else {
        if (t.tag = Z, t.mode & st) {
          Kt(!0);
          try {
            p = Gf(null, t, a, o, s, i), v = Qf();
          } finally {
            Kt(!1);
          }
        }
        return Vr() && v && dg(t), Ta(null, t, p, i), zS(t, a), t.child;
      }
    }
    function zS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ar();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), OS[o] || (OS[o] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = zt(t) || "Unknown";
          $p[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), $p[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = zt(t) || "Unknown";
          DS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), DS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = zt(t) || "Unknown";
          kS[v] || (g("%s: Function components do not support contextType.", v), kS[v] = !0);
        }
      }
    }
    var AS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Vn
    };
    function US(e) {
      return {
        baseLanes: e,
        cachePool: pT(),
        transitions: null
      };
    }
    function wT(e, t) {
      var a = null;
      return {
        baseLanes: dt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function RT(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return jg(e, Lp);
    }
    function TT(e, t) {
      return Ls(e.childLanes, t);
    }
    function IC(e, t, a) {
      var i = t.pendingProps;
      Ak(t) && (t.flags |= gt);
      var o = rl.current, s = !1, f = (t.flags & gt) !== je;
      if (f || RT(o, e) ? (s = !0, t.flags &= ~gt) : (e === null || e.memoizedState !== null) && (o = I1(o, XE)), o = $f(o), Fu(t, o), e === null) {
        yg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return NT(t, v);
        }
        var S = i.children, C = i.fallback;
        if (s) {
          var D = _T(t, S, C, a), _ = t.child;
          return _.memoizedState = US(a), t.memoizedState = AS, D;
        } else
          return jS(t, S);
      } else {
        var F = e.memoizedState;
        if (F !== null) {
          var B = F.dehydrated;
          if (B !== null)
            return LT(e, t, f, i, B, F, a);
        }
        if (s) {
          var Y = i.fallback, Se = i.children, Ie = DT(e, t, Se, Y, a), ze = t.child, Ut = e.child.memoizedState;
          return ze.memoizedState = Ut === null ? US(a) : wT(Ut, a), ze.childLanes = TT(e, a), t.memoizedState = AS, Ie;
        } else {
          var _t = i.children, z = kT(e, t, _t, a);
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
    function _T(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (o & Ct) === Fe && s !== null ? (p = s, p.childLanes = q, p.pendingProps = f, e.mode & Dt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Wu(a, o, i, null)) : (p = FS(f, o), v = Wu(a, o, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function FS(e, t, a) {
      return Yb(e, t, q, null);
    }
    function YC(e, t) {
      return fc(e, t);
    }
    function kT(e, t, a, i) {
      var o = e.child, s = o.sibling, f = YC(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ct) === Fe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ta) : p.push(s);
      }
      return t.child = f, f;
    }
    function DT(e, t, a, i, o) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, S;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ct) === Fe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var C = t.child;
        S = C, S.childLanes = q, S.pendingProps = v, t.mode & Dt && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = f.selfBaseDuration, S.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        S = YC(f, v), S.subtreeFlags = f.subtreeFlags & Pn;
      var D;
      return p !== null ? D = fc(p, i) : (D = Wu(i, s, o, null), D.flags |= wn), D.return = t, S.return = t, S.sibling = D, t.child = S, D;
    }
    function Hm(e, t, a, i) {
      i !== null && gg(i), Hf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = jS(t, s);
      return f.flags |= wn, t.memoizedState = null, f;
    }
    function OT(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = FS(f, s), v = Wu(i, s, o, null);
      return v.flags |= wn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Ct) !== Fe && Hf(t, e.child, null, o), v;
    }
    function NT(e, t, a) {
      return (e.mode & Ct) === Fe ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ke) : ng(t) ? e.lanes = ar : e.lanes = ia, null;
    }
    function LT(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & gn) {
          t.flags &= ~gn;
          var z = wS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Hm(e, t, f, z);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= gt, null;
          var W = i.children, A = i.fallback, ue = OT(e, t, W, A, f), _e = t.child;
          return _e.memoizedState = US(f), t.memoizedState = AS, ue;
        }
      else {
        if (S1(), (t.mode & Ct) === Fe)
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
            var C = UR(o);
            p = C.digest, v = C.message, S = C.stack;
          }
          var D;
          v ? D = new Error(v) : D = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = wS(D, p, S);
          return Hm(e, t, f, _);
        }
        var F = oa(f, e.childLanes);
        if (ll || F) {
          var B = Km();
          if (B !== null) {
            var Y = sf(B, f);
            if (Y !== Vn && Y !== s.retryLane) {
              s.retryLane = Y;
              var Se = Xt;
              Ya(e, Y), xr(B, e, Y, Se);
            }
          }
          i0();
          var Ie = wS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Hm(e, t, f, Ie);
        } else if (vE(o)) {
          t.flags |= gt, t.child = e.child;
          var ze = rk.bind(null, e);
          return jR(o, ze), null;
        } else {
          b1(t, o, s.treeContext);
          var Ut = i.children, _t = jS(t, Ut);
          return _t.flags |= Rn, _t;
        }
      }
    }
    function WC(e, t, a) {
      e.lanes = dt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = dt(i.lanes, t)), kg(e.return, t, a);
    }
    function MT(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ve) {
          var o = i.memoizedState;
          o !== null && WC(i, a, e);
        } else if (i.tag === Ve)
          WC(i, a, e);
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
    function zT(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && ym(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function AT(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !NS[e])
        if (NS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function UT(e, t) {
      e !== void 0 && !Fm[e] && (e !== "collapsed" && e !== "hidden" ? (Fm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Fm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function GC(e, t) {
      {
        var a = ft(e), i = !a && typeof yn(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function jT(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ft(e)) {
          for (var a = 0; a < e.length; a++)
            if (!GC(e[a], a))
              return;
        } else {
          var i = yn(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!GC(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
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
    function QC(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      AT(o), UT(s, o), jT(f, o), Ta(e, t, f, a);
      var p = rl.current, v = jg(p, Lp);
      if (v)
        p = Fg(p, Lp), t.flags |= gt;
      else {
        var S = e !== null && (e.flags & gt) !== je;
        S && MT(t, t.child, a), p = $f(p);
      }
      if (Fu(t, p), (t.mode & Ct) === Fe)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var C = zT(t.child), D;
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
              var B = F.alternate;
              if (B !== null && ym(B) === null) {
                t.child = F;
                break;
              }
              var Y = F.sibling;
              F.sibling = _, _ = F, F = Y;
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
    function FT(e, t, a) {
      zg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Hf(t, null, i, a) : Ta(e, t, i, a), t.child;
    }
    var qC = !1;
    function HT(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || qC || (qC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && el(v, s, "prop", "Context.Provider");
      }
      if (VE(t, o, p), f !== null) {
        var S = f.value;
        if (Ce(S, p)) {
          if (f.children === s.children && !Qh())
            return jo(e, t, a);
        } else
          A1(t, o, a);
      }
      var C = s.children;
      return Ta(e, t, C, a), t.child;
    }
    var KC = !1;
    function PT(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (KC || (KC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Vf(t, a);
      var f = or(i);
      Ha(t);
      var p;
      return Vp.current = t, Ma(!0), p = s(f), Ma(!1), Rl(), t.flags |= qi, Ta(e, t, p, a), t.child;
    }
    function Ip() {
      ll = !0;
    }
    function Pm(e, t) {
      (t.mode & Ct) === Fe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= wn);
    }
    function jo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), RC(), nv(t.lanes), oa(a, t.childLanes) ? (M1(e, t), t.child) : null;
    }
    function VT(e, t, a) {
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
    function PS(e, t) {
      var a = e.lanes;
      return !!oa(a, t);
    }
    function BT(e, t, a) {
      switch (t.tag) {
        case $:
          BC(t), t.stateNode, Ff();
          break;
        case G:
          qE(t);
          break;
        case J: {
          var i = t.type;
          Pl(i) && Kh(t);
          break;
        }
        case se:
          zg(t, t.stateNode.containerInfo);
          break;
        case $e: {
          var o = t.memoizedProps.value, s = t.type._context;
          VE(t, s, o);
          break;
        }
        case Ye:
          {
            var f = oa(a, t.childLanes);
            f && (t.flags |= Rt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ve: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Fu(t, $f(rl.current)), t.flags |= gt, null;
            var S = t.child, C = S.childLanes;
            if (oa(a, C))
              return IC(e, t, a);
            Fu(t, $f(rl.current));
            var D = jo(e, t, a);
            return D !== null ? D.sibling : null;
          } else
            Fu(t, $f(rl.current));
          break;
        }
        case Ve: {
          var _ = (e.flags & gt) !== je, F = oa(a, t.childLanes);
          if (_) {
            if (F)
              return QC(e, t, a);
            t.flags |= gt;
          }
          var B = t.memoizedState;
          if (B !== null && (B.rendering = null, B.tail = null, B.lastEffect = null), Fu(t, rl.current), F)
            break;
          return null;
        }
        case Ue:
        case jt:
          return t.lanes = q, HC(e, t, a);
      }
      return jo(e, t, a);
    }
    function XC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return VT(e, t, m0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || Qh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ll = !0;
        else {
          var s = PS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & gt) === je)
            return ll = !1, BT(e, t, a);
          (e.flags & ai) !== je ? ll = !0 : ll = !1;
        }
      } else if (ll = !1, Vr() && p1(t)) {
        var f = t.index, p = v1();
        RE(t, p, f);
      }
      switch (t.lanes = q, t.tag) {
        case le:
          return xT(e, t, t.type, a);
        case Vt: {
          var v = t.elementType;
          return CT(e, t, v, a);
        }
        case Z: {
          var S = t.type, C = t.pendingProps, D = t.elementType === S ? C : il(S, C);
          return LS(e, t, S, D, a);
        }
        case J: {
          var _ = t.type, F = t.pendingProps, B = t.elementType === _ ? F : il(_, F);
          return VC(e, t, _, B, a);
        }
        case $:
          return gT(e, t, a);
        case G:
          return ST(e, t, a);
        case ee:
          return ET(e, t);
        case ve:
          return IC(e, t, a);
        case se:
          return FT(e, t, a);
        case Me: {
          var Y = t.type, Se = t.pendingProps, Ie = t.elementType === Y ? Se : il(Y, Se);
          return UC(e, t, Y, Ie, a);
        }
        case de:
          return hT(e, t, a);
        case qe:
          return mT(e, t, a);
        case Ye:
          return yT(e, t, a);
        case $e:
          return HT(e, t, a);
        case Qe:
          return PT(e, t, a);
        case Ze: {
          var ze = t.type, Ut = t.pendingProps, _t = il(ze, Ut);
          if (t.type !== t.elementType) {
            var z = ze.propTypes;
            z && el(
              z,
              _t,
              // Resolved for outer only
              "prop",
              zt(ze)
            );
          }
          return _t = il(ze.type, _t), jC(e, t, ze, _t, a);
        }
        case We:
          return FC(e, t, t.type, t.pendingProps, a);
        case xt: {
          var W = t.type, A = t.pendingProps, ue = t.elementType === W ? A : il(W, A);
          return bT(e, t, W, ue, a);
        }
        case Ve:
          return QC(e, t, a);
        case St:
          break;
        case Ue:
          return HC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function qf(e) {
      e.flags |= Rt;
    }
    function JC(e) {
      e.flags |= Hn, e.flags |= gs;
    }
    var ZC, VS, eb, tb;
    ZC = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === G || o.tag === ee)
          cR(e, o.stateNode);
        else if (o.tag !== se) {
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
    }, VS = function(e, t) {
    }, eb = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Ag(), v = dR(f, a, s, i, o, p);
        t.updateQueue = v, v && qf(t);
      }
    }, tb = function(e, t, a, i) {
      a !== i && qf(t);
    };
    function Yp(e, t) {
      if (!Vr())
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = q, i = je;
      if (t) {
        if ((e.mode & Dt) !== Fe) {
          for (var v = e.selfBaseDuration, S = e.child; S !== null; )
            a = dt(a, dt(S.lanes, S.childLanes)), i |= S.subtreeFlags & Pn, i |= S.flags & Pn, v += S.treeBaseDuration, S = S.sibling;
          e.treeBaseDuration = v;
        } else
          for (var C = e.child; C !== null; )
            a = dt(a, dt(C.lanes, C.childLanes)), i |= C.subtreeFlags & Pn, i |= C.flags & Pn, C.return = e, C = C.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Dt) !== Fe) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = dt(a, dt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, o += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = dt(a, dt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function $T(e, t, a) {
      if (_1() && (t.mode & Ct) !== Fe && (t.flags & gt) === je)
        return LE(t), Ff(), t.flags |= gn | co | Dr, !1;
      var i = tm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (R1(t), $r(t), (t.mode & Dt) !== Fe) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Ff(), (t.flags & gt) === je && (t.memoizedState = null), t.flags |= Rt, $r(t), (t.mode & Dt) !== Fe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return ME(), !0;
    }
    function nb(e, t, a) {
      var i = t.pendingProps;
      switch (pg(t), t.tag) {
        case le:
        case Vt:
        case We:
        case Z:
        case Me:
        case de:
        case qe:
        case Ye:
        case Qe:
        case Ze:
          return $r(t), null;
        case J: {
          var o = t.type;
          return Pl(o) && qh(t), $r(t), null;
        }
        case $: {
          var s = t.stateNode;
          if (Bf(t), sg(t), Pg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = tm(t);
            if (f)
              qf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & gn) !== je) && (t.flags |= Fa, ME());
            }
          }
          return VS(e, t), $r(t), null;
        }
        case G: {
          Ug(t);
          var v = QE(), S = t.type;
          if (e !== null && t.stateNode != null)
            eb(e, t, S, i, v), e.ref !== t.ref && JC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return $r(t), null;
            }
            var C = Ag(), D = tm(t);
            if (D)
              x1(t, v, C) && qf(t);
            else {
              var _ = sR(S, i, v, C, t);
              ZC(_, t, !1, !1), t.stateNode = _, fR(_, S, i, v) && qf(t);
            }
            t.ref !== null && JC(t);
          }
          return $r(t), null;
        }
        case ee: {
          var F = i;
          if (e && t.stateNode != null) {
            var B = e.memoizedProps;
            tb(e, t, B, F);
          } else {
            if (typeof F != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Y = QE(), Se = Ag(), Ie = tm(t);
            Ie ? w1(t) && qf(t) : t.stateNode = pR(F, Y, Se, t);
          }
          return $r(t), null;
        }
        case ve: {
          If(t);
          var ze = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ut = $T(e, t, ze);
            if (!Ut)
              return t.flags & Dr ? t : null;
          }
          if ((t.flags & gt) !== je)
            return t.lanes = a, (t.mode & Dt) !== Fe && fS(t), t;
          var _t = ze !== null, z = e !== null && e.memoizedState !== null;
          if (_t !== z && _t) {
            var W = t.child;
            if (W.flags |= Ci, (t.mode & Ct) !== Fe) {
              var A = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              A || jg(rl.current, XE) ? I_() : i0();
            }
          }
          var ue = t.updateQueue;
          if (ue !== null && (t.flags |= Rt), $r(t), (t.mode & Dt) !== Fe && _t) {
            var _e = t.child;
            _e !== null && (t.treeBaseDuration -= _e.treeBaseDuration);
          }
          return null;
        }
        case se:
          return Bf(t), VS(e, t), e === null && l1(t.stateNode.containerInfo), $r(t), null;
        case $e:
          var be = t.type._context;
          return _g(be, t), $r(t), null;
        case xt: {
          var Je = t.type;
          return Pl(Je) && qh(t), $r(t), null;
        }
        case Ve: {
          If(t);
          var ot = t.memoizedState;
          if (ot === null)
            return $r(t), null;
          var an = (t.flags & gt) !== je, Ht = ot.rendering;
          if (Ht === null)
            if (an)
              Yp(ot, !1);
            else {
              var Kn = W_() && (e === null || (e.flags & gt) === je);
              if (!Kn)
                for (var Pt = t.child; Pt !== null; ) {
                  var $n = ym(Pt);
                  if ($n !== null) {
                    an = !0, t.flags |= gt, Yp(ot, !1);
                    var pa = $n.updateQueue;
                    return pa !== null && (t.updateQueue = pa, t.flags |= Rt), t.subtreeFlags = je, z1(t, a), Fu(t, Fg(rl.current, Lp)), t.child;
                  }
                  Pt = Pt.sibling;
                }
              ot.tail !== null && Dn() > xb() && (t.flags |= gt, an = !0, Yp(ot, !1), t.lanes = Zv);
            }
          else {
            if (!an) {
              var Qr = ym(Ht);
              if (Qr !== null) {
                t.flags |= gt, an = !0;
                var fi = Qr.updateQueue;
                if (fi !== null && (t.updateQueue = fi, t.flags |= Rt), Yp(ot, !0), ot.tail === null && ot.tailMode === "hidden" && !Ht.alternate && !Vr())
                  return $r(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Dn() * 2 - ot.renderingStartTime > xb() && a !== ia && (t.flags |= gt, an = !0, Yp(ot, !1), t.lanes = Zv);
            }
            if (ot.isBackwards)
              Ht.sibling = t.child, t.child = Ht;
            else {
              var Da = ot.last;
              Da !== null ? Da.sibling = Ht : t.child = Ht, ot.last = Ht;
            }
          }
          if (ot.tail !== null) {
            var Oa = ot.tail;
            ot.rendering = Oa, ot.tail = Oa.sibling, ot.renderingStartTime = Dn(), Oa.sibling = null;
            var va = rl.current;
            return an ? va = Fg(va, Lp) : va = $f(va), Fu(t, va), Oa;
          }
          return $r(t), null;
        }
        case St:
          break;
        case Ue:
        case jt: {
          a0(t);
          var Bo = t.memoizedState, rd = Bo !== null;
          if (e !== null) {
            var ov = e.memoizedState, Ql = ov !== null;
            Ql !== rd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !N && (t.flags |= Ci);
          }
          return !rd || (t.mode & Ct) === Fe ? $r(t) : oa(Gl, ia) && ($r(t), t.subtreeFlags & (wn | Rt) && (t.flags |= Ci)), null;
        }
        case pt:
          return null;
        case ct:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function IT(e, t, a) {
      switch (pg(t), t.tag) {
        case J: {
          var i = t.type;
          Pl(i) && qh(t);
          var o = t.flags;
          return o & Dr ? (t.flags = o & ~Dr | gt, (t.mode & Dt) !== Fe && fS(t), t) : null;
        }
        case $: {
          t.stateNode, Bf(t), sg(t), Pg();
          var s = t.flags;
          return (s & Dr) !== je && (s & gt) === je ? (t.flags = s & ~Dr | gt, t) : null;
        }
        case G:
          return Ug(t), null;
        case ve: {
          If(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Ff();
          }
          var p = t.flags;
          return p & Dr ? (t.flags = p & ~Dr | gt, (t.mode & Dt) !== Fe && fS(t), t) : null;
        }
        case Ve:
          return If(t), null;
        case se:
          return Bf(t), null;
        case $e:
          var v = t.type._context;
          return _g(v, t), null;
        case Ue:
        case jt:
          return a0(t), null;
        case pt:
          return null;
        default:
          return null;
      }
    }
    function rb(e, t, a) {
      switch (pg(t), t.tag) {
        case J: {
          var i = t.type.childContextTypes;
          i != null && qh(t);
          break;
        }
        case $: {
          t.stateNode, Bf(t), sg(t), Pg();
          break;
        }
        case G: {
          Ug(t);
          break;
        }
        case se:
          Bf(t);
          break;
        case ve:
          If(t);
          break;
        case Ve:
          If(t);
          break;
        case $e:
          var o = t.type._context;
          _g(o, t);
          break;
        case Ue:
        case jt:
          a0(t);
          break;
      }
    }
    var ab = null;
    ab = /* @__PURE__ */ new Set();
    var Vm = !1, Ir = !1, YT = typeof WeakSet == "function" ? WeakSet : Set, Ne = null, Kf = null, Xf = null;
    function WT(e) {
      ja(null, function() {
        throw e;
      }), bd();
    }
    var GT = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Dt)
        try {
          Yl(), t.componentWillUnmount();
        } finally {
          Il(e);
        }
      else
        t.componentWillUnmount();
    };
    function ib(e, t) {
      try {
        Vu(yr, e);
      } catch (a) {
        mn(e, t, a);
      }
    }
    function BS(e, t, a) {
      try {
        GT(e, a);
      } catch (i) {
        mn(e, t, i);
      }
    }
    function QT(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        mn(e, t, i);
      }
    }
    function lb(e, t) {
      try {
        ub(e);
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
            if (rt && yt && e.mode & Dt)
              try {
                Yl(), i = a(null);
              } finally {
                Il(e);
              }
            else
              i = a(null);
          } catch (o) {
            mn(e, t, o);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", tt(e));
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
    var ob = !1;
    function qT(e, t) {
      oR(e.containerInfo), Ne = t, KT();
      var a = ob;
      return ob = !1, a;
    }
    function KT() {
      for (; Ne !== null; ) {
        var e = Ne, t = e.child;
        (e.subtreeFlags & bl) !== je && t !== null ? (t.return = e, Ne = t) : XT();
      }
    }
    function XT() {
      for (; Ne !== null; ) {
        var e = Ne;
        Zt(e);
        try {
          JT(e);
        } catch (a) {
          mn(e, e.return, a);
        }
        xn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ne = t;
          return;
        }
        Ne = e.return;
      }
    }
    function JT(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Fa) !== je) {
        switch (Zt(e), e.tag) {
          case Z:
          case Me:
          case We:
            break;
          case J: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !lc && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", tt(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", tt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : il(e.type, i), o);
              {
                var p = ab;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", tt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case $: {
            {
              var v = e.stateNode;
              LR(v.containerInfo);
            }
            break;
          }
          case G:
          case ee:
          case se:
          case xt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        xn();
      }
    }
    function ol(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Br) !== Wa ? Tl(t) : (e & yr) !== Wa && zd(t), (e & Vl) !== Wa && av(!0), Bm(t, a, p), (e & Vl) !== Wa && av(!1), (e & Br) !== Wa ? Ac() : (e & yr) !== Wa && pu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Vu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Br) !== Wa ? Xv(t) : (e & yr) !== Wa && Jv(t);
            var f = s.create;
            (e & Vl) !== Wa && av(!0), s.destroy = f(), (e & Vl) !== Wa && av(!1), (e & Br) !== Wa ? Xi() : (e & yr) !== Wa && Uc();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & yr) !== je ? v = "useLayoutEffect" : (s.tag & Vl) !== je ? v = "useInsertionEffect" : v = "useEffect";
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

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : S = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", v, S);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function ZT(e, t) {
      if ((t.flags & Rt) !== je)
        switch (t.tag) {
          case Ye: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = xC(), p = t.alternate === null ? "mount" : "update";
            bC() && (p = "nested-update"), typeof s == "function" && s(o, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case $:
                  var S = v.stateNode;
                  S.passiveEffectDuration += a;
                  break e;
                case Ye:
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
    function e_(e, t, a, i) {
      if ((a.flags & xl) !== je)
        switch (a.tag) {
          case Z:
          case Me:
          case We: {
            if (!Ir)
              if (a.mode & Dt)
                try {
                  Yl(), Vu(yr | mr, a);
                } finally {
                  Il(a);
                }
              else
                Vu(yr | mr, a);
            break;
          }
          case J: {
            var o = a.stateNode;
            if (a.flags & Rt && !Ir)
              if (t === null)
                if (a.type === a.elementType && !lc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", tt(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", tt(a) || "instance")), a.mode & Dt)
                  try {
                    Yl(), o.componentDidMount();
                  } finally {
                    Il(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : il(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !lc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", tt(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", tt(a) || "instance")), a.mode & Dt)
                  try {
                    Yl(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Il(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !lc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", tt(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", tt(a) || "instance")), GE(a, p, o));
            break;
          }
          case $: {
            var v = a.updateQueue;
            if (v !== null) {
              var S = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case G:
                    S = a.child.stateNode;
                    break;
                  case J:
                    S = a.child.stateNode;
                    break;
                }
              GE(a, v, S);
            }
            break;
          }
          case G: {
            var C = a.stateNode;
            if (t === null && a.flags & Rt) {
              var D = a.type, _ = a.memoizedProps;
              gR(C, D, _);
            }
            break;
          }
          case ee:
            break;
          case se:
            break;
          case Ye: {
            {
              var F = a.memoizedProps, B = F.onCommit, Y = F.onRender, Se = a.stateNode.effectDuration, Ie = xC(), ze = t === null ? "mount" : "update";
              bC() && (ze = "nested-update"), typeof Y == "function" && Y(a.memoizedProps.id, ze, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ie);
              {
                typeof B == "function" && B(a.memoizedProps.id, ze, Se, Ie), X_(a);
                var Ut = a.return;
                e: for (; Ut !== null; ) {
                  switch (Ut.tag) {
                    case $:
                      var _t = Ut.stateNode;
                      _t.effectDuration += Se;
                      break e;
                    case Ye:
                      var z = Ut.stateNode;
                      z.effectDuration += Se;
                      break e;
                  }
                  Ut = Ut.return;
                }
              }
            }
            break;
          }
          case ve: {
            u_(e, a);
            break;
          }
          case Ve:
          case xt:
          case St:
          case Ue:
          case jt:
          case ct:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ir || a.flags & Hn && ub(a);
    }
    function t_(e) {
      switch (e.tag) {
        case Z:
        case Me:
        case We: {
          if (e.mode & Dt)
            try {
              Yl(), ib(e, e.return);
            } finally {
              Il(e);
            }
          else
            ib(e, e.return);
          break;
        }
        case J: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && QT(e, e.return, t), lb(e, e.return);
          break;
        }
        case G: {
          lb(e, e.return);
          break;
        }
      }
    }
    function n_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === G) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? kR(o) : OR(i.stateNode, i.memoizedProps);
            } catch (f) {
              mn(e, e.return, f);
            }
          }
        } else if (i.tag === ee) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? DR(s) : NR(s, i.memoizedProps);
            } catch (f) {
              mn(e, e.return, f);
            }
        } else if (!((i.tag === Ue || i.tag === jt) && i.memoizedState !== null && i !== e)) {
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
    function ub(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case G:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & Dt)
            try {
              Yl(), o = t(i);
            } finally {
              Il(e);
            }
          else
            o = t(i);
          typeof o == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", tt(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", tt(e)), t.current = i;
      }
    }
    function r_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function sb(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, sb(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === G) {
          var a = e.stateNode;
          a !== null && s1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function a_(e) {
      for (var t = e.return; t !== null; ) {
        if (cb(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function cb(e) {
      return e.tag === G || e.tag === $ || e.tag === se;
    }
    function fb(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || cb(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== G && t.tag !== ee && t.tag !== Nt; ) {
          if (t.flags & wn || t.child === null || t.tag === se)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & wn))
          return t.stateNode;
      }
    }
    function i_(e) {
      var t = a_(e);
      switch (t.tag) {
        case G: {
          var a = t.stateNode;
          t.flags & qt && (pE(a), t.flags &= ~qt);
          var i = fb(e);
          IS(e, i, a);
          break;
        }
        case $:
        case se: {
          var o = t.stateNode.containerInfo, s = fb(e);
          $S(e, s, o);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function $S(e, t, a) {
      var i = e.tag, o = i === G || i === ee;
      if (o) {
        var s = e.stateNode;
        t ? wR(a, s, t) : bR(a, s);
      } else if (i !== se) {
        var f = e.child;
        if (f !== null) {
          $S(f, t, a);
          for (var p = f.sibling; p !== null; )
            $S(p, t, a), p = p.sibling;
        }
      }
    }
    function IS(e, t, a) {
      var i = e.tag, o = i === G || i === ee;
      if (o) {
        var s = e.stateNode;
        t ? xR(a, s, t) : CR(a, s);
      } else if (i !== se) {
        var f = e.child;
        if (f !== null) {
          IS(f, t, a);
          for (var p = f.sibling; p !== null; )
            IS(p, t, a), p = p.sibling;
        }
      }
    }
    var Yr = null, ul = !1;
    function l_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case G: {
              Yr = i.stateNode, ul = !1;
              break e;
            }
            case $: {
              Yr = i.stateNode.containerInfo, ul = !0;
              break e;
            }
            case se: {
              Yr = i.stateNode.containerInfo, ul = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Yr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        db(e, t, a), Yr = null, ul = !1;
      }
      r_(a);
    }
    function Bu(e, t, a) {
      for (var i = a.child; i !== null; )
        db(e, t, i), i = i.sibling;
    }
    function db(e, t, a) {
      switch (du(a), a.tag) {
        case G:
          Ir || Jf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case ee: {
          {
            var i = Yr, o = ul;
            Yr = null, Bu(e, t, a), Yr = i, ul = o, Yr !== null && (ul ? TR(Yr, a.stateNode) : RR(Yr, a.stateNode));
          }
          return;
        }
        case Nt: {
          Yr !== null && (ul ? _R(Yr, a.stateNode) : tg(Yr, a.stateNode));
          return;
        }
        case se: {
          {
            var s = Yr, f = ul;
            Yr = a.stateNode.containerInfo, ul = !0, Bu(e, t, a), Yr = s, ul = f;
          }
          return;
        }
        case Z:
        case Me:
        case Ze:
        case We: {
          if (!Ir) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var S = v.next, C = S;
                do {
                  var D = C, _ = D.destroy, F = D.tag;
                  _ !== void 0 && ((F & Vl) !== Wa ? Bm(a, t, _) : (F & yr) !== Wa && (zd(a), a.mode & Dt ? (Yl(), Bm(a, t, _), Il(a)) : Bm(a, t, _), pu())), C = C.next;
                } while (C !== S);
              }
            }
          }
          Bu(e, t, a);
          return;
        }
        case J: {
          if (!Ir) {
            Jf(a, t);
            var B = a.stateNode;
            typeof B.componentWillUnmount == "function" && BS(a, t, B);
          }
          Bu(e, t, a);
          return;
        }
        case St: {
          Bu(e, t, a);
          return;
        }
        case Ue: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ct
          ) {
            var Y = Ir;
            Ir = Y || a.memoizedState !== null, Bu(e, t, a), Ir = Y;
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
    function o_(e) {
      e.memoizedState;
    }
    function u_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && WR(s);
          }
        }
      }
    }
    function pb(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new YT()), t.forEach(function(i) {
          var o = ak.bind(null, e, i);
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
    function s_(e, t, a) {
      Kf = a, Xf = e, Zt(t), vb(t, e), Zt(t), Kf = null, Xf = null;
    }
    function sl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            l_(e, t, s);
          } catch (v) {
            mn(s, t, v);
          }
        }
      var f = ei();
      if (t.subtreeFlags & cu)
        for (var p = t.child; p !== null; )
          Zt(p), vb(p, e), p = p.sibling;
      Zt(f);
    }
    function vb(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case Z:
        case Me:
        case Ze:
        case We: {
          if (sl(t, e), Wl(e), o & Rt) {
            try {
              ol(Vl | mr, e, e.return), Vu(Vl | mr, e);
            } catch (Je) {
              mn(e, e.return, Je);
            }
            if (e.mode & Dt) {
              try {
                Yl(), ol(yr | mr, e, e.return);
              } catch (Je) {
                mn(e, e.return, Je);
              }
              Il(e);
            } else
              try {
                ol(yr | mr, e, e.return);
              } catch (Je) {
                mn(e, e.return, Je);
              }
          }
          return;
        }
        case J: {
          sl(t, e), Wl(e), o & Hn && i !== null && Jf(i, i.return);
          return;
        }
        case G: {
          sl(t, e), Wl(e), o & Hn && i !== null && Jf(i, i.return);
          {
            if (e.flags & qt) {
              var s = e.stateNode;
              try {
                pE(s);
              } catch (Je) {
                mn(e, e.return, Je);
              }
            }
            if (o & Rt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, S = e.type, C = e.updateQueue;
                if (e.updateQueue = null, C !== null)
                  try {
                    SR(f, C, S, v, p, e);
                  } catch (Je) {
                    mn(e, e.return, Je);
                  }
              }
            }
          }
          return;
        }
        case ee: {
          if (sl(t, e), Wl(e), o & Rt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var D = e.stateNode, _ = e.memoizedProps, F = i !== null ? i.memoizedProps : _;
            try {
              ER(D, F, _);
            } catch (Je) {
              mn(e, e.return, Je);
            }
          }
          return;
        }
        case $: {
          if (sl(t, e), Wl(e), o & Rt && i !== null) {
            var B = i.memoizedState;
            if (B.isDehydrated)
              try {
                YR(t.containerInfo);
              } catch (Je) {
                mn(e, e.return, Je);
              }
          }
          return;
        }
        case se: {
          sl(t, e), Wl(e);
          return;
        }
        case ve: {
          sl(t, e), Wl(e);
          var Y = e.child;
          if (Y.flags & Ci) {
            var Se = Y.stateNode, Ie = Y.memoizedState, ze = Ie !== null;
            if (Se.isHidden = ze, ze) {
              var Ut = Y.alternate !== null && Y.alternate.memoizedState !== null;
              Ut || $_();
            }
          }
          if (o & Rt) {
            try {
              o_(e);
            } catch (Je) {
              mn(e, e.return, Je);
            }
            pb(e);
          }
          return;
        }
        case Ue: {
          var _t = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ct
          ) {
            var z = Ir;
            Ir = z || _t, sl(t, e), Ir = z;
          } else
            sl(t, e);
          if (Wl(e), o & Ci) {
            var W = e.stateNode, A = e.memoizedState, ue = A !== null, _e = e;
            if (W.isHidden = ue, ue && !_t && (_e.mode & Ct) !== Fe) {
              Ne = _e;
              for (var be = _e.child; be !== null; )
                Ne = be, f_(be), be = be.sibling;
            }
            n_(_e, ue);
          }
          return;
        }
        case Ve: {
          sl(t, e), Wl(e), o & Rt && pb(e);
          return;
        }
        case St:
          return;
        default: {
          sl(t, e), Wl(e);
          return;
        }
      }
    }
    function Wl(e) {
      var t = e.flags;
      if (t & wn) {
        try {
          i_(e);
        } catch (a) {
          mn(e, e.return, a);
        }
        e.flags &= ~wn;
      }
      t & Rn && (e.flags &= ~Rn);
    }
    function c_(e, t, a) {
      Kf = a, Xf = t, Ne = e, hb(e, t, a), Kf = null, Xf = null;
    }
    function hb(e, t, a) {
      for (var i = (e.mode & Ct) !== Fe; Ne !== null; ) {
        var o = Ne, s = o.child;
        if (o.tag === Ue && i) {
          var f = o.memoizedState !== null, p = f || Vm;
          if (p) {
            YS(e, t, a);
            continue;
          } else {
            var v = o.alternate, S = v !== null && v.memoizedState !== null, C = S || Ir, D = Vm, _ = Ir;
            Vm = p, Ir = C, Ir && !_ && (Ne = o, d_(o));
            for (var F = s; F !== null; )
              Ne = F, hb(
                F,
                // New root; bubble back up to here and stop.
                t,
                a
              ), F = F.sibling;
            Ne = o, Vm = D, Ir = _, YS(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & xl) !== je && s !== null ? (s.return = o, Ne = s) : YS(e, t, a);
      }
    }
    function YS(e, t, a) {
      for (; Ne !== null; ) {
        var i = Ne;
        if ((i.flags & xl) !== je) {
          var o = i.alternate;
          Zt(i);
          try {
            e_(t, o, i, a);
          } catch (f) {
            mn(i, i.return, f);
          }
          xn();
        }
        if (i === e) {
          Ne = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ne = s;
          return;
        }
        Ne = i.return;
      }
    }
    function f_(e) {
      for (; Ne !== null; ) {
        var t = Ne, a = t.child;
        switch (t.tag) {
          case Z:
          case Me:
          case Ze:
          case We: {
            if (t.mode & Dt)
              try {
                Yl(), ol(yr, t, t.return);
              } finally {
                Il(t);
              }
            else
              ol(yr, t, t.return);
            break;
          }
          case J: {
            Jf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && BS(t, t.return, i);
            break;
          }
          case G: {
            Jf(t, t.return);
            break;
          }
          case Ue: {
            var o = t.memoizedState !== null;
            if (o) {
              mb(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ne = a) : mb(e);
      }
    }
    function mb(e) {
      for (; Ne !== null; ) {
        var t = Ne;
        if (t === e) {
          Ne = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ne = a;
          return;
        }
        Ne = t.return;
      }
    }
    function d_(e) {
      for (; Ne !== null; ) {
        var t = Ne, a = t.child;
        if (t.tag === Ue) {
          var i = t.memoizedState !== null;
          if (i) {
            yb(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ne = a) : yb(e);
      }
    }
    function yb(e) {
      for (; Ne !== null; ) {
        var t = Ne;
        Zt(t);
        try {
          t_(t);
        } catch (i) {
          mn(t, t.return, i);
        }
        if (xn(), t === e) {
          Ne = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ne = a;
          return;
        }
        Ne = t.return;
      }
    }
    function p_(e, t, a, i) {
      Ne = t, v_(t, e, a, i);
    }
    function v_(e, t, a, i) {
      for (; Ne !== null; ) {
        var o = Ne, s = o.child;
        (o.subtreeFlags & fr) !== je && s !== null ? (s.return = o, Ne = s) : h_(e, t, a, i);
      }
    }
    function h_(e, t, a, i) {
      for (; Ne !== null; ) {
        var o = Ne;
        if ((o.flags & Ea) !== je) {
          Zt(o);
          try {
            m_(t, o, a, i);
          } catch (f) {
            mn(o, o.return, f);
          }
          xn();
        }
        if (o === e) {
          Ne = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, Ne = s;
          return;
        }
        Ne = o.return;
      }
    }
    function m_(e, t, a, i) {
      switch (t.tag) {
        case Z:
        case Me:
        case We: {
          if (t.mode & Dt) {
            cS();
            try {
              Vu(Br | mr, t);
            } finally {
              sS(t);
            }
          } else
            Vu(Br | mr, t);
          break;
        }
      }
    }
    function y_(e) {
      Ne = e, g_();
    }
    function g_() {
      for (; Ne !== null; ) {
        var e = Ne, t = e.child;
        if ((Ne.flags & ta) !== je) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              Ne = o, C_(o, e);
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
            Ne = e;
          }
        }
        (e.subtreeFlags & fr) !== je && t !== null ? (t.return = e, Ne = t) : S_();
      }
    }
    function S_() {
      for (; Ne !== null; ) {
        var e = Ne;
        (e.flags & Ea) !== je && (Zt(e), E_(e), xn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ne = t;
          return;
        }
        Ne = e.return;
      }
    }
    function E_(e) {
      switch (e.tag) {
        case Z:
        case Me:
        case We: {
          e.mode & Dt ? (cS(), ol(Br | mr, e, e.return), sS(e)) : ol(Br | mr, e, e.return);
          break;
        }
      }
    }
    function C_(e, t) {
      for (; Ne !== null; ) {
        var a = Ne;
        Zt(a), x_(a, t), xn();
        var i = a.child;
        i !== null ? (i.return = a, Ne = i) : b_(e);
      }
    }
    function b_(e) {
      for (; Ne !== null; ) {
        var t = Ne, a = t.sibling, i = t.return;
        if (sb(t), t === e) {
          Ne = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ne = a;
          return;
        }
        Ne = i;
      }
    }
    function x_(e, t) {
      switch (e.tag) {
        case Z:
        case Me:
        case We: {
          e.mode & Dt ? (cS(), ol(Br, e, t), sS(e)) : ol(Br, e, t);
          break;
        }
      }
    }
    function w_(e) {
      switch (e.tag) {
        case Z:
        case Me:
        case We: {
          try {
            Vu(yr | mr, e);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case J: {
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
    function R_(e) {
      switch (e.tag) {
        case Z:
        case Me:
        case We: {
          try {
            Vu(Br | mr, e);
          } catch (t) {
            mn(e, e.return, t);
          }
          break;
        }
      }
    }
    function T_(e) {
      switch (e.tag) {
        case Z:
        case Me:
        case We: {
          try {
            ol(yr | mr, e, e.return);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case J: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && BS(e, e.return, t);
          break;
        }
      }
    }
    function __(e) {
      switch (e.tag) {
        case Z:
        case Me:
        case We:
          try {
            ol(Br | mr, e, e.return);
          } catch (t) {
            mn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Wp = Symbol.for;
      Wp("selector.component"), Wp("selector.has_pseudo_class"), Wp("selector.role"), Wp("selector.test_id"), Wp("selector.text");
    }
    var k_ = [];
    function D_() {
      k_.forEach(function(e) {
        return e();
      });
    }
    var O_ = O.ReactCurrentActQueue;
    function N_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function gb() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && O_.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var L_ = Math.ceil, WS = O.ReactCurrentDispatcher, GS = O.ReactCurrentOwner, Wr = O.ReactCurrentBatchConfig, cl = O.ReactCurrentActQueue, Er = (
      /*             */
      0
    ), Sb = (
      /*               */
      1
    ), Gr = (
      /*                */
      2
    ), Li = (
      /*                */
      4
    ), Fo = 0, Gp = 1, oc = 2, $m = 3, Qp = 4, Eb = 5, QS = 6, At = Er, _a = null, Mn = null, Cr = q, Gl = q, qS = Lu(q), br = Fo, qp = null, Im = q, Kp = q, Ym = q, Xp = null, Ga = null, KS = 0, Cb = 500, bb = 1 / 0, M_ = 500, Ho = null;
    function Jp() {
      bb = Dn() + M_;
    }
    function xb() {
      return bb;
    }
    var Wm = !1, XS = null, Zf = null, uc = !1, $u = null, Zp = q, JS = [], ZS = null, z_ = 50, ev = 0, e0 = null, t0 = !1, Gm = !1, A_ = 50, ed = 0, Qm = null, tv = Xt, qm = q, wb = !1;
    function Km() {
      return _a;
    }
    function ka() {
      return (At & (Gr | Li)) !== Er ? Dn() : (tv !== Xt || (tv = Dn()), tv);
    }
    function Iu(e) {
      var t = e.mode;
      if ((t & Ct) === Fe)
        return Ke;
      if ((At & Gr) !== Er && Cr !== q)
        return ir(Cr);
      var a = O1() !== D1;
      if (a) {
        if (Wr.transition !== null) {
          var i = Wr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return qm === Vn && (qm = Id()), qm;
      }
      var o = ba();
      if (o !== Vn)
        return o;
      var s = vR();
      return s;
    }
    function U_(e) {
      var t = e.mode;
      return (t & Ct) === Fe ? Ke : ih();
    }
    function xr(e, t, a, i) {
      lk(), wb && g("useInsertionEffect must not schedule updates."), t0 && (Gm = !0), Su(e, a, i), (At & Gr) !== q && e === _a ? sk(t) : (Or && oh(e, t, a), ck(t), e === _a && ((At & Gr) === Er && (Kp = dt(Kp, a)), br === Qp && Yu(e, Cr)), Qa(e, i), a === Ke && At === Er && (t.mode & Ct) === Fe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !cl.isBatchingLegacy && (Jp(), wE()));
    }
    function j_(e, t, a) {
      var i = e.current;
      i.lanes = t, Su(e, t, a), Qa(e, a);
    }
    function F_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (At & Gr) !== Er
      );
    }
    function Qa(e, t) {
      var a = e.callbackNode;
      nh(e, t);
      var i = la(e, e === _a ? Cr : q);
      if (i === q) {
        a !== null && Pb(a), e.callbackNode = null, e.callbackPriority = Vn;
        return;
      }
      var o = So(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(cl.current !== null && a !== u0)) {
        a == null && s !== Ke && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Pb(a);
      var f;
      if (o === Ke)
        e.tag === Mu ? (cl.isBatchingLegacy !== null && (cl.didScheduleLegacyUpdate = !0), d1(_b.bind(null, e))) : xE(_b.bind(null, e)), cl.current !== null ? cl.current.push(zu) : mR(function() {
          (At & (Gr | Li)) === Er && zu();
        }), f = null;
      else {
        var p;
        switch (sh(i)) {
          case ua:
            p = Ki;
            break;
          case Pa:
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
        f = s0(p, Rb.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function Rb(e, t) {
      if (nT(), tv = Xt, qm = q, (At & (Gr | Li)) !== Er)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Vo();
      if (i && e.callbackNode !== a)
        return null;
      var o = la(e, e === _a ? Cr : q);
      if (o === q)
        return null;
      var s = !Ns(e, o) && !ah(e, o) && !t, f = s ? Q_(e, o) : Jm(e, o);
      if (f !== Fo) {
        if (f === oc) {
          var p = nf(e);
          p !== q && (o = p, f = n0(e, p));
        }
        if (f === Gp) {
          var v = qp;
          throw sc(e, q), Yu(e, o), Qa(e, Dn()), v;
        }
        if (f === QS)
          Yu(e, o);
        else {
          var S = !Ns(e, o), C = e.current.alternate;
          if (S && !P_(C)) {
            if (f = Jm(e, o), f === oc) {
              var D = nf(e);
              D !== q && (o = D, f = n0(e, D));
            }
            if (f === Gp) {
              var _ = qp;
              throw sc(e, q), Yu(e, o), Qa(e, Dn()), _;
            }
          }
          e.finishedWork = C, e.finishedLanes = o, H_(e, f, o);
        }
      }
      return Qa(e, Dn()), e.callbackNode === a ? Rb.bind(null, e) : null;
    }
    function n0(e, t) {
      var a = Xp;
      if (Co(e)) {
        var i = sc(e, t);
        i.flags |= gn, i1(e.containerInfo);
      }
      var o = Jm(e, t);
      if (o !== oc) {
        var s = Ga;
        Ga = a, s !== null && Tb(s);
      }
      return o;
    }
    function Tb(e) {
      Ga === null ? Ga = e : Ga.push.apply(Ga, e);
    }
    function H_(e, t, a) {
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
          !Vb()) {
            var i = KS + Cb - Dn();
            if (i > 10) {
              var o = la(e, q);
              if (o !== q)
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
          if (!Vb()) {
            var f = Pd(e, a), p = f, v = Dn() - p, S = ik(v) - v;
            if (S > 10) {
              e.timeoutHandle = Zy(cc.bind(null, e, Ga, Ho), S);
              break;
            }
          }
          cc(e, Ga, Ho);
          break;
        }
        case Eb: {
          cc(e, Ga, Ho);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function P_(e) {
      for (var t = e; ; ) {
        if (t.flags & Mc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, p = s.value;
                try {
                  if (!Ce(f(), p))
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
    function _b(e) {
      if (rT(), (At & (Gr | Li)) !== Er)
        throw new Error("Should not already be working.");
      Vo();
      var t = la(e, q);
      if (!oa(t, Ke))
        return Qa(e, Dn()), null;
      var a = Jm(e, t);
      if (e.tag !== Mu && a === oc) {
        var i = nf(e);
        i !== q && (t = i, a = n0(e, i));
      }
      if (a === Gp) {
        var o = qp;
        throw sc(e, q), Yu(e, t), Qa(e, Dn()), o;
      }
      if (a === QS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, cc(e, Ga, Ho), Qa(e, Dn()), null;
    }
    function V_(e, t) {
      t !== q && (Ms(e, dt(t, Ke)), Qa(e, Dn()), (At & (Gr | Li)) === Er && (Jp(), zu()));
    }
    function r0(e, t) {
      var a = At;
      At |= Sb;
      try {
        return e(t);
      } finally {
        At = a, At === Er && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !cl.isBatchingLegacy && (Jp(), wE());
      }
    }
    function B_(e, t, a, i, o) {
      var s = ba(), f = Wr.transition;
      try {
        return Wr.transition = null, Gn(ua), e(t, a, i, o);
      } finally {
        Gn(s), Wr.transition = f, At === Er && Jp();
      }
    }
    function Po(e) {
      $u !== null && $u.tag === Mu && (At & (Gr | Li)) === Er && Vo();
      var t = At;
      At |= Sb;
      var a = Wr.transition, i = ba();
      try {
        return Wr.transition = null, Gn(ua), e ? e() : void 0;
      } finally {
        Gn(i), Wr.transition = a, At = t, (At & (Gr | Li)) === Er && zu();
      }
    }
    function kb() {
      return (At & (Gr | Li)) !== Er;
    }
    function Xm(e, t) {
      fa(qS, Gl, e), Gl = dt(Gl, t);
    }
    function a0(e) {
      Gl = qS.current, ca(qS, e);
    }
    function sc(e, t) {
      e.finishedWork = null, e.finishedLanes = q;
      var a = e.timeoutHandle;
      if (a !== eg && (e.timeoutHandle = eg, hR(a)), Mn !== null)
        for (var i = Mn.return; i !== null; ) {
          var o = i.alternate;
          rb(o, i), i = i.return;
        }
      _a = e;
      var s = fc(e.current, null);
      return Mn = s, Cr = Gl = t, br = Fo, qp = null, Im = q, Kp = q, Ym = q, Xp = null, Ga = null, j1(), nl.discardPendingWarnings(), s;
    }
    function Db(e, t) {
      do {
        var a = Mn;
        try {
          if (om(), ZE(), xn(), GS.current = null, a === null || a.return === null) {
            br = Gp, qp = t, Mn = null;
            return;
          }
          if (rt && a.mode & Dt && Um(a, !0), et)
            if (Rl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Cs(a, i, Cr);
            } else
              wi(a, t, Cr);
          dT(e, a.return, a, t, Cr), Mb(a);
        } catch (o) {
          t = o, Mn === a && a !== null ? (a = a.return, Mn = a) : a = Mn;
          continue;
        }
        return;
      } while (!0);
    }
    function Ob() {
      var e = WS.current;
      return WS.current = Nm, e === null ? Nm : e;
    }
    function Nb(e) {
      WS.current = e;
    }
    function $_() {
      KS = Dn();
    }
    function nv(e) {
      Im = dt(e, Im);
    }
    function I_() {
      br === Fo && (br = $m);
    }
    function i0() {
      (br === Fo || br === $m || br === oc) && (br = Qp), _a !== null && (Ol(Im) || Ol(Kp)) && Yu(_a, Cr);
    }
    function Y_(e) {
      br !== Qp && (br = oc), Xp === null ? Xp = [e] : Xp.push(e);
    }
    function W_() {
      return br === Fo;
    }
    function Jm(e, t) {
      var a = At;
      At |= Gr;
      var i = Ob();
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
          G_();
          break;
        } catch (s) {
          Db(e, s);
        }
      while (!0);
      if (om(), At = a, Nb(i), Mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Sn(), _a = null, Cr = q, br;
    }
    function G_() {
      for (; Mn !== null; )
        Lb(Mn);
    }
    function Q_(e, t) {
      var a = At;
      At |= Gr;
      var i = Ob();
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
          q_();
          break;
        } catch (s) {
          Db(e, s);
        }
      while (!0);
      return om(), Nb(i), At = a, Mn !== null ? (jd(), Fo) : (Sn(), _a = null, Cr = q, br);
    }
    function q_() {
      for (; Mn !== null && !kd(); )
        Lb(Mn);
    }
    function Lb(e) {
      var t = e.alternate;
      Zt(e);
      var a;
      (e.mode & Dt) !== Fe ? (uS(e), a = l0(t, e, Gl), Um(e, !0)) : a = l0(t, e, Gl), xn(), e.memoizedProps = e.pendingProps, a === null ? Mb(e) : Mn = a, GS.current = null;
    }
    function Mb(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & co) === je) {
          Zt(t);
          var o = void 0;
          if ((t.mode & Dt) === Fe ? o = nb(a, t, Gl) : (uS(t), o = nb(a, t, Gl), Um(t, !1)), xn(), o !== null) {
            Mn = o;
            return;
          }
        } else {
          var s = IT(a, t);
          if (s !== null) {
            s.flags &= Iv, Mn = s;
            return;
          }
          if ((t.mode & Dt) !== Fe) {
            Um(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= co, i.subtreeFlags = je, i.deletions = null;
          else {
            br = QS, Mn = null;
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
      br === Fo && (br = Eb);
    }
    function cc(e, t, a) {
      var i = ba(), o = Wr.transition;
      try {
        Wr.transition = null, Gn(ua), K_(e, t, a, i);
      } finally {
        Wr.transition = o, Gn(i);
      }
      return null;
    }
    function K_(e, t, a, i) {
      do
        Vo();
      while ($u !== null);
      if (ok(), (At & (Gr | Li)) !== Er)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Kv(s), o === null)
        return xi(), null;
      if (s === q && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = q, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Vn;
      var f = dt(o.lanes, o.childLanes);
      lh(e, f), e === _a && (_a = null, Mn = null, Cr = q), ((o.subtreeFlags & fr) !== je || (o.flags & fr) !== je) && (uc || (uc = !0, ZS = a, s0(po, function() {
        return Vo(), null;
      })));
      var p = (o.subtreeFlags & (bl | cu | xl | fr)) !== je, v = (o.flags & (bl | cu | xl | fr)) !== je;
      if (p || v) {
        var S = Wr.transition;
        Wr.transition = null;
        var C = ba();
        Gn(ua);
        var D = At;
        At |= Li, GS.current = null, qT(e, o), wC(), s_(e, o, s), uR(e.containerInfo), e.current = o, bs(s), c_(o, e, s), ho(), Wv(), At = D, Gn(C), Wr.transition = S;
      } else
        e.current = o, wC();
      var _ = uc;
      if (uc ? (uc = !1, $u = e, Zp = s) : (ed = 0, Qm = null), f = e.pendingLanes, f === q && (Zf = null), _ || jb(e.current, !1), Nd(o.stateNode, i), Or && e.memoizedUpdaters.clear(), D_(), Qa(e, Dn()), t !== null)
        for (var F = e.onRecoverableError, B = 0; B < t.length; B++) {
          var Y = t[B], Se = Y.stack, Ie = Y.digest;
          F(Y.value, {
            componentStack: Se,
            digest: Ie
          });
        }
      if (Wm) {
        Wm = !1;
        var ze = XS;
        throw XS = null, ze;
      }
      return oa(Zp, Ke) && e.tag !== Mu && Vo(), f = e.pendingLanes, oa(f, Ke) ? (tT(), e === e0 ? ev++ : (ev = 0, e0 = e)) : ev = 0, zu(), xi(), null;
    }
    function Vo() {
      if ($u !== null) {
        var e = sh(Zp), t = Nr(pr, e), a = Wr.transition, i = ba();
        try {
          return Wr.transition = null, Gn(t), J_();
        } finally {
          Gn(i), Wr.transition = a;
        }
      }
      return !1;
    }
    function X_(e) {
      JS.push(e), uc || (uc = !0, s0(po, function() {
        return Vo(), null;
      }));
    }
    function J_() {
      if ($u === null)
        return !1;
      var e = ZS;
      ZS = null;
      var t = $u, a = Zp;
      if ($u = null, Zp = q, (At & (Gr | Li)) !== Er)
        throw new Error("Cannot flush passive effects while already rendering.");
      t0 = !0, Gm = !1, Ad(a);
      var i = At;
      At |= Li, y_(t.current), p_(t, t.current, a, e);
      {
        var o = JS;
        JS = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          ZT(t, f);
        }
      }
      vu(), jb(t.current, !0), At = i, zu(), Gm ? t === Qm ? ed++ : (ed = 0, Qm = t) : ed = 0, t0 = !1, Gm = !1, Ld(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function zb(e) {
      return Zf !== null && Zf.has(e);
    }
    function Z_(e) {
      Zf === null ? Zf = /* @__PURE__ */ new Set([e]) : Zf.add(e);
    }
    function ek(e) {
      Wm || (Wm = !0, XS = e);
    }
    var tk = ek;
    function Ab(e, t, a) {
      var i = ic(a, t), o = LC(e, i, Ke), s = Uu(e, o, Ke), f = ka();
      s !== null && (Su(s, Ke, f), Qa(s, f));
    }
    function mn(e, t, a) {
      if (WT(a), av(!1), e.tag === $) {
        Ab(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === $) {
          Ab(i, e, a);
          return;
        } else if (i.tag === J) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !zb(s)) {
            var f = ic(a, e), p = TS(i, f, Ke), v = Uu(i, p, Ke), S = ka();
            v !== null && (Su(v, Ke, S), Qa(v, S));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function nk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = ka();
      uf(e, a), fk(e), _a === e && Eo(Cr, a) && (br === Qp || br === $m && rf(Cr) && Dn() - KS < Cb ? sc(e, q) : Ym = dt(Ym, a)), Qa(e, o);
    }
    function Ub(e, t) {
      t === Vn && (t = U_(e));
      var a = ka(), i = Ya(e, t);
      i !== null && (Su(i, t, a), Qa(i, a));
    }
    function rk(e) {
      var t = e.memoizedState, a = Vn;
      t !== null && (a = t.retryLane), Ub(e, a);
    }
    function ak(e, t) {
      var a = Vn, i;
      switch (e.tag) {
        case ve:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case Ve:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), Ub(e, a);
    }
    function ik(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : L_(e / 1960) * 1960;
    }
    function lk() {
      if (ev > z_)
        throw ev = 0, e0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ed > A_ && (ed = 0, Qm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function ok() {
      nl.flushLegacyContextWarning(), nl.flushPendingUnsafeLifecycleWarnings();
    }
    function jb(e, t) {
      Zt(e), Zm(e, jr, T_), t && Zm(e, Cl, __), Zm(e, jr, w_), t && Zm(e, Cl, R_), xn();
    }
    function Zm(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== je ? i = i.child : ((i.flags & t) !== je && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var ey = null;
    function Fb(e) {
      {
        if ((At & Gr) !== Er || !(e.mode & Ct))
          return;
        var t = e.tag;
        if (t !== le && t !== $ && t !== J && t !== Z && t !== Me && t !== Ze && t !== We)
          return;
        var a = tt(e) || "ReactComponent";
        if (ey !== null) {
          if (ey.has(a))
            return;
          ey.add(a);
        } else
          ey = /* @__PURE__ */ new Set([a]);
        var i = nr;
        try {
          Zt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Zt(e) : xn();
        }
      }
    }
    var l0;
    {
      var uk = null;
      l0 = function(e, t, a) {
        var i = Wb(uk, t);
        try {
          return XC(e, t, a);
        } catch (s) {
          if (E1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (om(), ZE(), rb(e, t), Wb(t, i), t.mode & Dt && uS(t), ja(null, XC, null, e, t, a), Cd()) {
            var o = bd();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var Hb = !1, o0;
    o0 = /* @__PURE__ */ new Set();
    function sk(e) {
      if (Zr && !J1())
        switch (e.tag) {
          case Z:
          case Me:
          case We: {
            var t = Mn && tt(Mn) || "Unknown", a = t;
            if (!o0.has(a)) {
              o0.add(a);
              var i = tt(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case J: {
            Hb || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Hb = !0);
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
        var a = cl.current;
        return a !== null ? (a.push(t), u0) : Td(e, t);
      }
    }
    function Pb(e) {
      if (e !== u0)
        return _d(e);
    }
    function Vb() {
      return cl.current !== null;
    }
    function ck(e) {
      {
        if (e.mode & Ct) {
          if (!gb())
            return;
        } else if (!N_() || At !== Er || e.tag !== Z && e.tag !== Me && e.tag !== We)
          return;
        if (cl.current === null) {
          var t = nr;
          try {
            Zt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, tt(e));
          } finally {
            t ? Zt(e) : xn();
          }
        }
      }
    }
    function fk(e) {
      e.tag !== Mu && gb() && cl.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function av(e) {
      wb = e;
    }
    var Mi = null, td = null, dk = function(e) {
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
                $$typeof: re,
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
    function Bb(e, t) {
      {
        if (Mi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case J: {
            typeof i == "function" && (o = !0);
            break;
          }
          case Z: {
            (typeof i == "function" || s === at) && (o = !0);
            break;
          }
          case Me: {
            (s === re || s === at) && (o = !0);
            break;
          }
          case Ze:
          case We: {
            (s === Et || s === at) && (o = !0);
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
    function $b(e) {
      {
        if (Mi === null || typeof WeakSet != "function")
          return;
        td === null && (td = /* @__PURE__ */ new WeakSet()), td.add(e);
      }
    }
    var pk = function(e, t) {
      {
        if (Mi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Vo(), Po(function() {
          d0(e.current, i, a);
        });
      }
    }, vk = function(e, t) {
      {
        if (e.context !== si)
          return;
        Vo(), Po(function() {
          iv(t, e, null, null);
        });
      }
    };
    function d0(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Z:
          case We:
          case J:
            v = p;
            break;
          case Me:
            v = p.render;
            break;
        }
        if (Mi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var S = !1, C = !1;
        if (v !== null) {
          var D = Mi(v);
          D !== void 0 && (a.has(D) ? C = !0 : t.has(D) && (f === J ? C = !0 : S = !0));
        }
        if (td !== null && (td.has(e) || i !== null && td.has(i)) && (C = !0), C && (e._debugNeedsRemount = !0), C || S) {
          var _ = Ya(e, Ke);
          _ !== null && xr(_, e, Ke, Xt);
        }
        o !== null && !C && d0(o, t, a), s !== null && d0(s, t, a);
      }
    }
    var hk = function(e, t) {
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
          case We:
          case J:
            p = f;
            break;
          case Me:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? mk(e, a) : i !== null && p0(i, t, a), o !== null && p0(o, t, a);
      }
    }
    function mk(e, t) {
      {
        var a = yk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case G:
              t.add(i.stateNode);
              return;
            case se:
              t.add(i.stateNode.containerInfo);
              return;
            case $:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function yk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === G)
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
        var Ib = Object.preventExtensions({});
      } catch {
        v0 = !0;
      }
    }
    function gk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = je, this.subtreeFlags = je, this.deletions = null, this.lanes = q, this.childLanes = q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !v0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ci = function(e, t, a, i) {
      return new gk(e, t, a, i);
    };
    function h0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Sk(e) {
      return typeof e == "function" && !h0(e) && e.defaultProps === void 0;
    }
    function Ek(e) {
      if (typeof e == "function")
        return h0(e) ? J : Z;
      if (e != null) {
        var t = e.$$typeof;
        if (t === re)
          return Me;
        if (t === Et)
          return Ze;
      }
      return le;
    }
    function fc(e, t) {
      var a = e.alternate;
      a === null ? (a = ci(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = je, a.subtreeFlags = je, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Pn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case le:
        case Z:
        case We:
          a.type = nd(e.type);
          break;
        case J:
          a.type = c0(e.type);
          break;
        case Me:
          a.type = f0(e.type);
          break;
      }
      return a;
    }
    function Ck(e, t) {
      e.flags &= Pn | wn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = q, e.lanes = t, e.child = null, e.subtreeFlags = je, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = je, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function bk(e, t, a) {
      var i;
      return e === Xh ? (i = Ct, t === !0 && (i |= st, i |= nn)) : i = Fe, Or && (i |= Dt), ci($, null, null, i);
    }
    function m0(e, t, a, i, o, s) {
      var f = le, p = e;
      if (typeof e == "function")
        h0(e) ? (f = J, p = c0(p)) : p = nd(p);
      else if (typeof e == "string")
        f = G;
      else
        e: switch (e) {
          case Kr:
            return Wu(a.children, o, s, t);
          case pi:
            f = qe, o |= st, (o & Ct) !== Fe && (o |= nn);
            break;
          case vi:
            return xk(a, o, s, t);
          case ge:
            return wk(a, o, s, t);
          case Ee:
            return Rk(a, o, s, t);
          case _n:
            return Yb(a, o, s, t);
          case cn:
          // eslint-disable-next-line no-fallthrough
          case wt:
          // eslint-disable-next-line no-fallthrough
          case vn:
          // eslint-disable-next-line no-fallthrough
          case Tr:
          // eslint-disable-next-line no-fallthrough
          case ht:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Fi:
                  f = $e;
                  break e;
                case R:
                  f = Qe;
                  break e;
                case re:
                  f = Me, p = f0(p);
                  break e;
                case Et:
                  f = Ze;
                  break e;
                case at:
                  f = Vt, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var S = i ? tt(i) : null;
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
    function xk(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = ci(Ye, e, i, t | Dt);
      return o.elementType = vi, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function wk(e, t, a, i) {
      var o = ci(ve, e, i, t);
      return o.elementType = ge, o.lanes = a, o;
    }
    function Rk(e, t, a, i) {
      var o = ci(Ve, e, i, t);
      return o.elementType = Ee, o.lanes = a, o;
    }
    function Yb(e, t, a, i) {
      var o = ci(Ue, e, i, t);
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
    function Tk() {
      var e = ci(G, null, null, Fe);
      return e.elementType = "DELETED", e;
    }
    function _k(e) {
      var t = ci(Nt, null, null, Fe);
      return t.stateNode = e, t;
    }
    function S0(e, t, a) {
      var i = e.children !== null ? e.children : [], o = ci(se, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function Wb(e, t) {
      return e === null && (e = ci(le, null, null, Fe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function kk(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = eg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Vn, this.eventTimes = of(q), this.expirationTimes = of(Xt), this.pendingLanes = q, this.suspendedLanes = q, this.pingedLanes = q, this.expiredLanes = q, this.mutableReadLanes = q, this.finishedLanes = q, this.entangledLanes = q, this.entanglements = of(q), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
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
    function Gb(e, t, a, i, o, s, f, p, v, S) {
      var C = new kk(e, t, a, p, v), D = bk(t, s);
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
    function Dk(e, t, a) {
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
    var C0, b0;
    C0 = !1, b0 = {};
    function Qb(e) {
      if (!e)
        return si;
      var t = su(e), a = f1(t);
      if (t.tag === J) {
        var i = t.type;
        if (Pl(i))
          return CE(t, i, a);
      }
      return a;
    }
    function Ok(e, t) {
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
        if (o.mode & st) {
          var s = tt(a) || "Component";
          if (!b0[s]) {
            b0[s] = !0;
            var f = nr;
            try {
              Zt(o), a.mode & st ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Zt(f) : xn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function qb(e, t, a, i, o, s, f, p) {
      var v = !1, S = null;
      return Gb(e, t, v, S, a, i, o, s, f);
    }
    function Kb(e, t, a, i, o, s, f, p, v, S) {
      var C = !0, D = Gb(a, i, C, e, o, s, f, p, v);
      D.context = Qb(null);
      var _ = D.current, F = ka(), B = Iu(_), Y = Uo(F, B);
      return Y.callback = t ?? null, Uu(_, Y, B), j_(D, B, F), D;
    }
    function iv(e, t, a, i) {
      Od(t, e);
      var o = t.current, s = ka(), f = Iu(o);
      jc(f);
      var p = Qb(a);
      t.context === null ? t.context = p : t.pendingContext = p, Zr && nr !== null && !C0 && (C0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, tt(nr) || "Unknown"));
      var v = Uo(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var S = Uu(o, v, f);
      return S !== null && (xr(S, o, f, s), dm(S, o, f)), f;
    }
    function ty(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case G:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Nk(e) {
      switch (e.tag) {
        case $: {
          var t = e.stateNode;
          if (Co(t)) {
            var a = rh(t);
            V_(t, a);
          }
          break;
        }
        case ve: {
          Po(function() {
            var o = Ya(e, Ke);
            if (o !== null) {
              var s = ka();
              xr(o, e, Ke, s);
            }
          });
          var i = Ke;
          x0(e, i);
          break;
        }
      }
    }
    function Xb(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Yd(a.retryLane, t));
    }
    function x0(e, t) {
      Xb(e, t);
      var a = e.alternate;
      a && Xb(a, t);
    }
    function Lk(e) {
      if (e.tag === ve) {
        var t = gu, a = Ya(e, t);
        if (a !== null) {
          var i = ka();
          xr(a, e, t, i);
        }
        x0(e, t);
      }
    }
    function Mk(e) {
      if (e.tag === ve) {
        var t = Iu(e), a = Ya(e, t);
        if (a !== null) {
          var i = ka();
          xr(a, e, t, i);
        }
        x0(e, t);
      }
    }
    function Jb(e) {
      var t = ii(e);
      return t === null ? null : t.stateNode;
    }
    var Zb = function(e) {
      return null;
    };
    function zk(e) {
      return Zb(e);
    }
    var ex = function(e) {
      return !1;
    };
    function Ak(e) {
      return ex(e);
    }
    var tx = null, nx = null, rx = null, ax = null, ix = null, lx = null, ox = null, ux = null, sx = null;
    {
      var cx = function(e, t, a) {
        var i = t[a], o = ft(e) ? e.slice() : ut({}, e);
        return a + 1 === t.length ? (ft(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = cx(e[i], t, a + 1), o);
      }, fx = function(e, t) {
        return cx(e, t, 0);
      }, dx = function(e, t, a, i) {
        var o = t[i], s = ft(e) ? e.slice() : ut({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], ft(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = dx(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, px = function(e, t, a) {
        if (t.length !== a.length) {
          Q("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Q("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return dx(e, t, a, 0);
      }, vx = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = ft(e) ? e.slice() : ut({}, e);
        return s[o] = vx(e[o], t, a + 1, i), s;
      }, hx = function(e, t, a) {
        return vx(e, t, 0, a);
      }, w0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      tx = function(e, t, a, i) {
        var o = w0(e, t);
        if (o !== null) {
          var s = hx(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ut({}, e.memoizedProps);
          var f = Ya(e, Ke);
          f !== null && xr(f, e, Ke, Xt);
        }
      }, nx = function(e, t, a) {
        var i = w0(e, t);
        if (i !== null) {
          var o = fx(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = ut({}, e.memoizedProps);
          var s = Ya(e, Ke);
          s !== null && xr(s, e, Ke, Xt);
        }
      }, rx = function(e, t, a, i) {
        var o = w0(e, t);
        if (o !== null) {
          var s = px(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ut({}, e.memoizedProps);
          var f = Ya(e, Ke);
          f !== null && xr(f, e, Ke, Xt);
        }
      }, ax = function(e, t, a) {
        e.pendingProps = hx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ya(e, Ke);
        i !== null && xr(i, e, Ke, Xt);
      }, ix = function(e, t) {
        e.pendingProps = fx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ya(e, Ke);
        a !== null && xr(a, e, Ke, Xt);
      }, lx = function(e, t, a) {
        e.pendingProps = px(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ya(e, Ke);
        i !== null && xr(i, e, Ke, Xt);
      }, ox = function(e) {
        var t = Ya(e, Ke);
        t !== null && xr(t, e, Ke, Xt);
      }, ux = function(e) {
        Zb = e;
      }, sx = function(e) {
        ex = e;
      };
    }
    function Uk(e) {
      var t = ra(e);
      return t === null ? null : t.stateNode;
    }
    function jk(e) {
      return null;
    }
    function Fk() {
      return nr;
    }
    function Hk(e) {
      var t = e.findFiberByHostInstance, a = O.ReactCurrentDispatcher;
      return Dd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: tx,
        overrideHookStateDeletePath: nx,
        overrideHookStateRenamePath: rx,
        overrideProps: ax,
        overridePropsDeletePath: ix,
        overridePropsRenamePath: lx,
        setErrorHandler: ux,
        setSuspenseHandler: sx,
        scheduleUpdate: ox,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Uk,
        findFiberByHostInstance: t || jk,
        // React Refresh
        findHostInstancesForRefresh: hk,
        scheduleRefresh: pk,
        scheduleRoot: vk,
        setRefreshHandler: dk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Fk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: E0
      });
    }
    var mx = typeof reportError == "function" ? (
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
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ry(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Fn) {
          var i = Jb(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      iv(e, t, null, null);
    }, ny.prototype.unmount = R0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        kb() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Po(function() {
          iv(null, e, null, null);
        }), mE(t);
      }
    };
    function Pk(e, t) {
      if (!ry(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      yx(e);
      var a = !1, i = !1, o = "", s = mx;
      t != null && (t.hydrate ? Q("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === cr && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = qb(e, Xh, null, a, i, o, s);
      Ih(f.current, e);
      var p = e.nodeType === Fn ? e.parentNode : e;
      return fp(p), new R0(f);
    }
    function ny(e) {
      this._internalRoot = e;
    }
    function Vk(e) {
      e && vh(e);
    }
    ny.prototype.unstable_scheduleHydration = Vk;
    function Bk(e, t, a) {
      if (!ry(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      yx(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = mx;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var S = Kb(t, null, e, Xh, i, s, f, p, v);
      if (Ih(S.current, e), fp(e), o)
        for (var C = 0; C < o.length; C++) {
          var D = o[C];
          W1(S, D);
        }
      return new ny(S);
    }
    function ry(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === Gi || e.nodeType === rs));
    }
    function lv(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === Gi || e.nodeType === rs || e.nodeType === Fn && e.nodeValue === " react-mount-point-unstable "));
    }
    function yx(e) {
      e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), bp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var $k = O.ReactCurrentOwner, gx;
    gx = function(e) {
      if (e._reactRootContainer && e.nodeType !== Fn) {
        var t = Jb(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = T0(e), o = !!(i && Nu(i));
      o && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function T0(e) {
      return e ? e.nodeType === Gi ? e.documentElement : e.firstChild : null;
    }
    function Sx() {
    }
    function Ik(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = ty(f);
            s.call(_);
          };
        }
        var f = Kb(
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
          Sx
        );
        e._reactRootContainer = f, Ih(f.current, e);
        var p = e.nodeType === Fn ? e.parentNode : e;
        return fp(p), Po(), f;
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
        var C = qb(
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
          Sx
        );
        e._reactRootContainer = C, Ih(C.current, e);
        var D = e.nodeType === Fn ? e.parentNode : e;
        return fp(D), Po(function() {
          iv(t, C, a, i);
        }), C;
      }
    }
    function Yk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ay(e, t, a, i, o) {
      gx(a), Yk(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Ik(a, t, e, o, i);
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
    var Ex = !1;
    function Wk(e) {
      {
        Ex || (Ex = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = $k.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", zt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ea ? e : Ok(e, "findDOMNode");
    }
    function Gk(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = bp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ay(null, e, t, !0, a);
    }
    function Qk(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = bp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ay(null, e, t, !1, a);
    }
    function qk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !so(e))
        throw new Error("parentComponent must be a valid React Component");
      return ay(e, t, a, !1, i);
    }
    var Cx = !1;
    function Kk(e) {
      if (Cx || (Cx = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !lv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = bp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = T0(e), i = a && !Nu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Po(function() {
          ay(null, null, e, !1, function() {
            e._reactRootContainer = null, mE(e);
          });
        }), !0;
      } else {
        {
          var o = T0(e), s = !!(o && Nu(o)), f = e.nodeType === ea && lv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ty(Nk), qd(Lk), _y(Mk), df(ba), ch(uh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ds(Jw), Bv(r0, B_, Po);
    function Xk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ry(t))
        throw new Error("Target container is not a DOM element.");
      return Dk(e, t, null, a);
    }
    function Jk(e, t, a, i) {
      return qk(e, t, a, i);
    }
    var _0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Nu, Mf, Yh, Sd, iu, r0]
    };
    function Zk(e, t) {
      return _0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Pk(e, t);
    }
    function eD(e, t, a) {
      return _0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Bk(e, t, a);
    }
    function tD(e) {
      return kb() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Po(e);
    }
    var nD = Hk({
      findFiberByHostInstance: Ks,
      bundleType: 1,
      version: E0,
      rendererPackageName: "react-dom"
    });
    if (!nD && Jn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var bx = window.location.protocol;
      /^(https?|file):$/.test(bx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (bx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _0, Ka.createPortal = Xk, Ka.createRoot = Zk, Ka.findDOMNode = Wk, Ka.flushSync = tD, Ka.hydrate = Gk, Ka.hydrateRoot = eD, Ka.render = Qk, Ka.unmountComponentAtNode = Kk, Ka.unstable_batchedUpdates = r0, Ka.unstable_renderSubtreeIntoContainer = Jk, Ka.version = E0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Ka;
}
var zx;
function qx() {
  if (zx) return oy.exports;
  zx = 1;
  var y = {};
  function b() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (y.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (E) {
        console.error(E);
      }
    }
  }
  return y.NODE_ENV === "production" ? (b(), oy.exports = pD()) : oy.exports = vD(), oy.exports;
}
var Ax;
function hD() {
  if (Ax) return ad;
  Ax = 1;
  var y = {}, b = qx();
  if (y.NODE_ENV === "production")
    ad.createRoot = b.createRoot, ad.hydrateRoot = b.hydrateRoot;
  else {
    var E = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    ad.createRoot = function(O, H) {
      E.usingClientEntryPoint = !0;
      try {
        return b.createRoot(O, H);
      } finally {
        E.usingClientEntryPoint = !1;
      }
    }, ad.hydrateRoot = function(O, H, L) {
      E.usingClientEntryPoint = !0;
      try {
        return b.hydrateRoot(O, H, L);
      } finally {
        E.usingClientEntryPoint = !1;
      }
    };
  }
  return ad;
}
var Kx = hD();
const mD = /* @__PURE__ */ Gx(Kx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yD = (y) => y.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gD = (y) => y.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (b, E, O) => O ? O.toUpperCase() : E.toLowerCase()
), Ux = (y) => {
  const b = gD(y);
  return b.charAt(0).toUpperCase() + b.slice(1);
}, Xx = (...y) => y.filter((b, E, O) => !!b && b.trim() !== "" && O.indexOf(b) === E).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var SD = {
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
const ED = Ae.forwardRef(
  ({
    color: y = "currentColor",
    size: b = 24,
    strokeWidth: E = 2,
    absoluteStrokeWidth: O,
    className: H = "",
    children: L,
    iconNode: Q,
    ...g
  }, ne) => Ae.createElement(
    "svg",
    {
      ref: ne,
      ...SD,
      width: b,
      height: b,
      stroke: y,
      strokeWidth: O ? Number(E) * 24 / Number(b) : E,
      className: Xx("lucide", H),
      ...g
    },
    [
      ...Q.map(([Z, J]) => Ae.createElement(Z, J)),
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
const zi = (y, b) => {
  const E = Ae.forwardRef(
    ({ className: O, ...H }, L) => Ae.createElement(ED, {
      ref: L,
      iconNode: b,
      className: Xx(
        `lucide-${yD(Ux(y))}`,
        `lucide-${y}`,
        O
      ),
      ...H
    })
  );
  return E.displayName = Ux(y), E;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CD = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], bD = zi("chevron-down", CD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xD = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], wD = zi("chevron-right", xD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RD = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], j0 = zi("ellipsis", RD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TD = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], Jx = zi("funnel", TD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _D = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
], kD = zi("message-square", _D);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DD = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], OD = zi("moon", DD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ND = [
  ["path", { d: "M13.234 20.252 21 12.3", key: "1cbrk9" }],
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",
      key: "1pkts6"
    }
  ]
], LD = zi("paperclip", ND);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MD = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], pv = zi("plus", MD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zD = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], Zx = zi("search", zD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AD = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], UD = zi("settings", AD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jD = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], FD = zi("sun", jD);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HD = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], ew = zi("user", HD);
function jx(y, b) {
  if (typeof y == "function")
    return y(b);
  y != null && (y.current = b);
}
function PD(...y) {
  return (b) => {
    let E = !1;
    const O = y.map((H) => {
      const L = jx(H, b);
      return !E && typeof L == "function" && (E = !0), L;
    });
    if (E)
      return () => {
        for (let H = 0; H < O.length; H++) {
          const L = O[H];
          typeof L == "function" ? L() : jx(y[H], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function tw(y) {
  const b = /* @__PURE__ */ VD(y), E = Ae.forwardRef((O, H) => {
    const { children: L, ...Q } = O, g = Ae.Children.toArray(L), ne = g.find($D);
    if (ne) {
      const Z = ne.props.children, J = g.map((le) => le === ne ? Ae.Children.count(Z) > 1 ? Ae.Children.only(null) : Ae.isValidElement(Z) ? Z.props.children : null : le);
      return /* @__PURE__ */ V.jsx(b, { ...Q, ref: H, children: Ae.isValidElement(Z) ? Ae.cloneElement(Z, void 0, J) : null });
    }
    return /* @__PURE__ */ V.jsx(b, { ...Q, ref: H, children: L });
  });
  return E.displayName = `${y}.Slot`, E;
}
var nw = /* @__PURE__ */ tw("Slot");
// @__NO_SIDE_EFFECTS__
function VD(y) {
  const b = Ae.forwardRef((E, O) => {
    const { children: H, ...L } = E;
    if (Ae.isValidElement(H)) {
      const Q = YD(H), g = ID(L, H.props);
      return H.type !== Ae.Fragment && (g.ref = O ? PD(O, Q) : Q), Ae.cloneElement(H, g);
    }
    return Ae.Children.count(H) > 1 ? Ae.Children.only(null) : null;
  });
  return b.displayName = `${y}.SlotClone`, b;
}
var BD = Symbol("radix.slottable");
function $D(y) {
  return Ae.isValidElement(y) && typeof y.type == "function" && "__radixId" in y.type && y.type.__radixId === BD;
}
function ID(y, b) {
  const E = { ...b };
  for (const O in b) {
    const H = y[O], L = b[O];
    /^on[A-Z]/.test(O) ? H && L ? E[O] = (...g) => {
      const ne = L(...g);
      return H(...g), ne;
    } : H && (E[O] = H) : O === "style" ? E[O] = { ...H, ...L } : O === "className" && (E[O] = [H, L].filter(Boolean).join(" "));
  }
  return { ...y, ...E };
}
function YD(y) {
  var O, H;
  let b = (O = Object.getOwnPropertyDescriptor(y.props, "ref")) == null ? void 0 : O.get, E = b && "isReactWarning" in b && b.isReactWarning;
  return E ? y.ref : (b = (H = Object.getOwnPropertyDescriptor(y, "ref")) == null ? void 0 : H.get, E = b && "isReactWarning" in b && b.isReactWarning, E ? y.props.ref : y.props.ref || y.ref);
}
function rw(y) {
  var b, E, O = "";
  if (typeof y == "string" || typeof y == "number") O += y;
  else if (typeof y == "object") if (Array.isArray(y)) {
    var H = y.length;
    for (b = 0; b < H; b++) y[b] && (E = rw(y[b])) && (O && (O += " "), O += E);
  } else for (E in y) y[E] && (O && (O += " "), O += E);
  return O;
}
function aw() {
  for (var y, b, E = 0, O = "", H = arguments.length; E < H; E++) (y = arguments[E]) && (b = rw(y)) && (O && (O += " "), O += b);
  return O;
}
const Fx = (y) => typeof y == "boolean" ? `${y}` : y === 0 ? "0" : y, Hx = aw, iw = (y, b) => (E) => {
  var O;
  if ((b == null ? void 0 : b.variants) == null) return Hx(y, E == null ? void 0 : E.class, E == null ? void 0 : E.className);
  const { variants: H, defaultVariants: L } = b, Q = Object.keys(H).map((Z) => {
    const J = E == null ? void 0 : E[Z], le = L == null ? void 0 : L[Z];
    if (J === null) return null;
    const $ = Fx(J) || Fx(le);
    return H[Z][$];
  }), g = E && Object.entries(E).reduce((Z, J) => {
    let [le, $] = J;
    return $ === void 0 || (Z[le] = $), Z;
  }, {}), ne = b == null || (O = b.compoundVariants) === null || O === void 0 ? void 0 : O.reduce((Z, J) => {
    let { class: le, className: $, ...se } = J;
    return Object.entries(se).every((G) => {
      let [ee, de] = G;
      return Array.isArray(de) ? de.includes({
        ...L,
        ...g
      }[ee]) : {
        ...L,
        ...g
      }[ee] === de;
    }) ? [
      ...Z,
      le,
      $
    ] : Z;
  }, []);
  return Hx(y, Q, ne, E == null ? void 0 : E.class, E == null ? void 0 : E.className);
}, F0 = "-", WD = (y) => {
  const b = QD(y), {
    conflictingClassGroups: E,
    conflictingClassGroupModifiers: O
  } = y;
  return {
    getClassGroupId: (Q) => {
      const g = Q.split(F0);
      return g[0] === "" && g.length !== 1 && g.shift(), lw(g, b) || GD(Q);
    },
    getConflictingClassGroupIds: (Q, g) => {
      const ne = E[Q] || [];
      return g && O[Q] ? [...ne, ...O[Q]] : ne;
    }
  };
}, lw = (y, b) => {
  var Q;
  if (y.length === 0)
    return b.classGroupId;
  const E = y[0], O = b.nextPart.get(E), H = O ? lw(y.slice(1), O) : void 0;
  if (H)
    return H;
  if (b.validators.length === 0)
    return;
  const L = y.join(F0);
  return (Q = b.validators.find(({
    validator: g
  }) => g(L))) == null ? void 0 : Q.classGroupId;
}, Px = /^\[(.+)\]$/, GD = (y) => {
  if (Px.test(y)) {
    const b = Px.exec(y)[1], E = b == null ? void 0 : b.substring(0, b.indexOf(":"));
    if (E)
      return "arbitrary.." + E;
  }
}, QD = (y) => {
  const {
    theme: b,
    prefix: E
  } = y, O = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return KD(Object.entries(y.classGroups), E).forEach(([L, Q]) => {
    A0(Q, O, L, b);
  }), O;
}, A0 = (y, b, E, O) => {
  y.forEach((H) => {
    if (typeof H == "string") {
      const L = H === "" ? b : Vx(b, H);
      L.classGroupId = E;
      return;
    }
    if (typeof H == "function") {
      if (qD(H)) {
        A0(H(O), b, E, O);
        return;
      }
      b.validators.push({
        validator: H,
        classGroupId: E
      });
      return;
    }
    Object.entries(H).forEach(([L, Q]) => {
      A0(Q, Vx(b, L), E, O);
    });
  });
}, Vx = (y, b) => {
  let E = y;
  return b.split(F0).forEach((O) => {
    E.nextPart.has(O) || E.nextPart.set(O, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), E = E.nextPart.get(O);
  }), E;
}, qD = (y) => y.isThemeGetter, KD = (y, b) => b ? y.map(([E, O]) => {
  const H = O.map((L) => typeof L == "string" ? b + L : typeof L == "object" ? Object.fromEntries(Object.entries(L).map(([Q, g]) => [b + Q, g])) : L);
  return [E, H];
}) : y, XD = (y) => {
  if (y < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let b = 0, E = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
  const H = (L, Q) => {
    E.set(L, Q), b++, b > y && (b = 0, O = E, E = /* @__PURE__ */ new Map());
  };
  return {
    get(L) {
      let Q = E.get(L);
      if (Q !== void 0)
        return Q;
      if ((Q = O.get(L)) !== void 0)
        return H(L, Q), Q;
    },
    set(L, Q) {
      E.has(L) ? E.set(L, Q) : H(L, Q);
    }
  };
}, ow = "!", JD = (y) => {
  const {
    separator: b,
    experimentalParseClassName: E
  } = y, O = b.length === 1, H = b[0], L = b.length, Q = (g) => {
    const ne = [];
    let Z = 0, J = 0, le;
    for (let de = 0; de < g.length; de++) {
      let qe = g[de];
      if (Z === 0) {
        if (qe === H && (O || g.slice(de, de + L) === b)) {
          ne.push(g.slice(J, de)), J = de + L;
          continue;
        }
        if (qe === "/") {
          le = de;
          continue;
        }
      }
      qe === "[" ? Z++ : qe === "]" && Z--;
    }
    const $ = ne.length === 0 ? g : g.substring(J), se = $.startsWith(ow), G = se ? $.substring(1) : $, ee = le && le > J ? le - J : void 0;
    return {
      modifiers: ne,
      hasImportantModifier: se,
      baseClassName: G,
      maybePostfixModifierPosition: ee
    };
  };
  return E ? (g) => E({
    className: g,
    parseClassName: Q
  }) : Q;
}, ZD = (y) => {
  if (y.length <= 1)
    return y;
  const b = [];
  let E = [];
  return y.forEach((O) => {
    O[0] === "[" ? (b.push(...E.sort(), O), E = []) : E.push(O);
  }), b.push(...E.sort()), b;
}, eO = (y) => ({
  cache: XD(y.cacheSize),
  parseClassName: JD(y),
  ...WD(y)
}), tO = /\s+/, nO = (y, b) => {
  const {
    parseClassName: E,
    getClassGroupId: O,
    getConflictingClassGroupIds: H
  } = b, L = [], Q = y.trim().split(tO);
  let g = "";
  for (let ne = Q.length - 1; ne >= 0; ne -= 1) {
    const Z = Q[ne], {
      modifiers: J,
      hasImportantModifier: le,
      baseClassName: $,
      maybePostfixModifierPosition: se
    } = E(Z);
    let G = !!se, ee = O(G ? $.substring(0, se) : $);
    if (!ee) {
      if (!G) {
        g = Z + (g.length > 0 ? " " + g : g);
        continue;
      }
      if (ee = O($), !ee) {
        g = Z + (g.length > 0 ? " " + g : g);
        continue;
      }
      G = !1;
    }
    const de = ZD(J).join(":"), qe = le ? de + ow : de, Qe = qe + ee;
    if (L.includes(Qe))
      continue;
    L.push(Qe);
    const $e = H(ee, G);
    for (let Me = 0; Me < $e.length; ++Me) {
      const Ye = $e[Me];
      L.push(qe + Ye);
    }
    g = Z + (g.length > 0 ? " " + g : g);
  }
  return g;
};
function rO() {
  let y = 0, b, E, O = "";
  for (; y < arguments.length; )
    (b = arguments[y++]) && (E = uw(b)) && (O && (O += " "), O += E);
  return O;
}
const uw = (y) => {
  if (typeof y == "string")
    return y;
  let b, E = "";
  for (let O = 0; O < y.length; O++)
    y[O] && (b = uw(y[O])) && (E && (E += " "), E += b);
  return E;
};
function aO(y, ...b) {
  let E, O, H, L = Q;
  function Q(ne) {
    const Z = b.reduce((J, le) => le(J), y());
    return E = eO(Z), O = E.cache.get, H = E.cache.set, L = g, g(ne);
  }
  function g(ne) {
    const Z = O(ne);
    if (Z)
      return Z;
    const J = nO(ne, E);
    return H(ne, J), J;
  }
  return function() {
    return L(rO.apply(null, arguments));
  };
}
const bn = (y) => {
  const b = (E) => E[y] || [];
  return b.isThemeGetter = !0, b;
}, sw = /^\[(?:([a-z-]+):)?(.+)\]$/i, iO = /^\d+\/\d+$/, lO = /* @__PURE__ */ new Set(["px", "full", "screen"]), oO = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, uO = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, sO = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, cO = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fO = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $o = (y) => id(y) || lO.has(y) || iO.test(y), Gu = (y) => ld(y, "length", SO), id = (y) => !!y && !Number.isNaN(Number(y)), O0 = (y) => ld(y, "number", id), cv = (y) => !!y && Number.isInteger(Number(y)), dO = (y) => y.endsWith("%") && id(y.slice(0, -1)), bt = (y) => sw.test(y), Qu = (y) => oO.test(y), pO = /* @__PURE__ */ new Set(["length", "size", "percentage"]), vO = (y) => ld(y, pO, cw), hO = (y) => ld(y, "position", cw), mO = /* @__PURE__ */ new Set(["image", "url"]), yO = (y) => ld(y, mO, CO), gO = (y) => ld(y, "", EO), fv = () => !0, ld = (y, b, E) => {
  const O = sw.exec(y);
  return O ? O[1] ? typeof b == "string" ? O[1] === b : b.has(O[1]) : E(O[2]) : !1;
}, SO = (y) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  uO.test(y) && !sO.test(y)
), cw = () => !1, EO = (y) => cO.test(y), CO = (y) => fO.test(y), bO = () => {
  const y = bn("colors"), b = bn("spacing"), E = bn("blur"), O = bn("brightness"), H = bn("borderColor"), L = bn("borderRadius"), Q = bn("borderSpacing"), g = bn("borderWidth"), ne = bn("contrast"), Z = bn("grayscale"), J = bn("hueRotate"), le = bn("invert"), $ = bn("gap"), se = bn("gradientColorStops"), G = bn("gradientColorStopPositions"), ee = bn("inset"), de = bn("margin"), qe = bn("opacity"), Qe = bn("padding"), $e = bn("saturate"), Me = bn("scale"), Ye = bn("sepia"), ve = bn("skew"), Ze = bn("space"), We = bn("translate"), Vt = () => ["auto", "contain", "none"], xt = () => ["auto", "hidden", "clip", "visible", "scroll"], Nt = () => ["auto", bt, b], Ve = () => [bt, b], St = () => ["", $o, Gu], Ue = () => ["auto", id, bt], jt = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], pt = () => ["solid", "dashed", "dotted", "double", "none"], ct = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], X = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], xe = () => ["", "0", bt], he = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [id, bt];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [fv],
      spacing: [$o, Gu],
      blur: ["none", "", Qu, bt],
      brightness: N(),
      borderColor: [y],
      borderRadius: ["none", "", "full", Qu, bt],
      borderSpacing: Ve(),
      borderWidth: St(),
      contrast: N(),
      grayscale: xe(),
      hueRotate: N(),
      invert: xe(),
      gap: Ve(),
      gradientColorStops: [y],
      gradientColorStopPositions: [dO, Gu],
      inset: Nt(),
      margin: Nt(),
      opacity: N(),
      padding: Ve(),
      saturate: N(),
      scale: N(),
      sepia: xe(),
      skew: N(),
      space: Ve(),
      translate: Ve()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", bt]
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
        "break-after": he()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": he()
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
        object: [...jt(), bt]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: xt()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": xt()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": xt()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Vt()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Vt()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Vt()
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
        z: ["auto", cv, bt]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Nt()
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
        flex: ["1", "auto", "initial", "none", bt]
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
        order: ["first", "last", "none", cv, bt]
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
          span: ["full", cv, bt]
        }, bt]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Ue()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Ue()
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
          span: [cv, bt]
        }, bt]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Ue()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Ue()
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
        "auto-cols": ["auto", "min", "max", "fr", bt]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", bt]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [$]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [$]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [$]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...X()]
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
        content: ["normal", ...X(), "baseline"]
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
        "place-content": [...X(), "baseline"]
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
        p: [Qe]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [Qe]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [Qe]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [Qe]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [Qe]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [Qe]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [Qe]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [Qe]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [Qe]
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
        "space-x": [Ze]
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
        "space-y": [Ze]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", bt, b]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [bt, b, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [bt, b, "none", "full", "min", "max", "fit", "prose", {
          screen: [Qu]
        }, Qu]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [bt, b, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [bt, b, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [bt, b, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [bt, b, "auto", "min", "max", "fit"]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", bt]
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
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", $o, bt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", bt]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", bt]
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
        placeholder: [y]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [qe]
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
        text: [y]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [qe]
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
        decoration: [...pt(), "wavy"]
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
        "underline-offset": ["auto", $o, bt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [y]
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
        indent: Ve()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", bt]
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
        content: ["none", bt]
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
        "bg-opacity": [qe]
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
        bg: [...jt(), hO]
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
        bg: ["auto", "cover", "contain", vO]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, yO]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [y]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [G]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [G]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [G]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [se]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [se]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [se]
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
        border: [g]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [g]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [g]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [g]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [g]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [g]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [g]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [g]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [g]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [qe]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...pt(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [g]
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
        "divide-y": [g]
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
        "divide-opacity": [qe]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: pt()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [H]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [H]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [H]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [H]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [H]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [H]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [H]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [H]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [H]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [H]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...pt()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [$o, bt]
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
        outline: [y]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: St()
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
        ring: [y]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [qe]
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
        "ring-offset": [y]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Qu, gO]
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
        opacity: [qe]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ct(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ct()
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
        brightness: [O]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ne]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Qu, bt]
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
        "hue-rotate": [J]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [le]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [$e]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [Ye]
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
        "backdrop-brightness": [O]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ne]
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
        "backdrop-hue-rotate": [J]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [le]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [qe]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [$e]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [Ye]
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
        "border-spacing": [Q]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [Q]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [Q]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", bt]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: N()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", bt]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: N()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", bt]
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
        scale: [Me]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [Me]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [Me]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [cv, bt]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [We]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [We]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ve]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ve]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", bt]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", y]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", bt]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [y]
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
        "scroll-m": Ve()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Ve()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Ve()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Ve()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Ve()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Ve()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Ve()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Ve()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Ve()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Ve()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Ve()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Ve()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Ve()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Ve()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Ve()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Ve()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Ve()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Ve()
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
        "will-change": ["auto", "scroll", "contents", "transform", bt]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [y, "none"]
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
        stroke: [y, "none"]
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
}, xO = /* @__PURE__ */ aO(bO);
function cy(...y) {
  return xO(aw(y));
}
const wO = iw(
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
function Xn({
  className: y,
  variant: b,
  size: E,
  asChild: O = !1,
  ...H
}) {
  const L = O ? nw : "button";
  return /* @__PURE__ */ V.jsx(
    L,
    {
      "data-slot": "button",
      className: cy(wO({ variant: b, size: E, className: y })),
      ...H
    }
  );
}
const RO = iw(
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
  className: y,
  variant: b,
  asChild: E = !1,
  ...O
}) {
  const H = E ? nw : "span";
  return /* @__PURE__ */ V.jsx(
    H,
    {
      "data-slot": "badge",
      className: cy(RO({ variant: b }), y),
      ...O
    }
  );
}
var TO = (y, b, E, O, H, L, Q, g) => {
  let ne = document.documentElement, Z = ["light", "dark"];
  function J(se) {
    (Array.isArray(y) ? y : [y]).forEach((G) => {
      let ee = G === "class", de = ee && L ? H.map((qe) => L[qe] || qe) : H;
      ee ? (ne.classList.remove(...de), ne.classList.add(L && L[se] ? L[se] : se)) : ne.setAttribute(G, se);
    }), le(se);
  }
  function le(se) {
    g && Z.includes(se) && (ne.style.colorScheme = se);
  }
  function $() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (O) J(O);
  else try {
    let se = localStorage.getItem(b) || E, G = Q && se === "system" ? $() : se;
    J(G);
  } catch {
  }
}, Bx = ["light", "dark"], fw = "(prefers-color-scheme: dark)", _O = typeof window > "u", H0 = Ae.createContext(void 0), kO = { setTheme: (y) => {
}, themes: [] }, DO = () => {
  var y;
  return (y = Ae.useContext(H0)) != null ? y : kO;
}, OO = (y) => Ae.useContext(H0) ? Ae.createElement(Ae.Fragment, null, y.children) : Ae.createElement(LO, { ...y }), NO = ["light", "dark"], LO = ({ forcedTheme: y, disableTransitionOnChange: b = !1, enableSystem: E = !0, enableColorScheme: O = !0, storageKey: H = "theme", themes: L = NO, defaultTheme: Q = E ? "system" : "light", attribute: g = "data-theme", value: ne, children: Z, nonce: J, scriptProps: le }) => {
  let [$, se] = Ae.useState(() => zO(H, Q)), [G, ee] = Ae.useState(() => $ === "system" ? N0() : $), de = ne ? Object.values(ne) : L, qe = Ae.useCallback((Ye) => {
    let ve = Ye;
    if (!ve) return;
    Ye === "system" && E && (ve = N0());
    let Ze = ne ? ne[ve] : ve, We = b ? AO(J) : null, Vt = document.documentElement, xt = (Nt) => {
      Nt === "class" ? (Vt.classList.remove(...de), Ze && Vt.classList.add(Ze)) : Nt.startsWith("data-") && (Ze ? Vt.setAttribute(Nt, Ze) : Vt.removeAttribute(Nt));
    };
    if (Array.isArray(g) ? g.forEach(xt) : xt(g), O) {
      let Nt = Bx.includes(Q) ? Q : null, Ve = Bx.includes(ve) ? ve : Nt;
      Vt.style.colorScheme = Ve;
    }
    We == null || We();
  }, [J]), Qe = Ae.useCallback((Ye) => {
    let ve = typeof Ye == "function" ? Ye($) : Ye;
    se(ve);
    try {
      localStorage.setItem(H, ve);
    } catch {
    }
  }, [$]), $e = Ae.useCallback((Ye) => {
    let ve = N0(Ye);
    ee(ve), $ === "system" && E && !y && qe("system");
  }, [$, y]);
  Ae.useEffect(() => {
    let Ye = window.matchMedia(fw);
    return Ye.addListener($e), $e(Ye), () => Ye.removeListener($e);
  }, [$e]), Ae.useEffect(() => {
    let Ye = (ve) => {
      ve.key === H && (ve.newValue ? se(ve.newValue) : Qe(Q));
    };
    return window.addEventListener("storage", Ye), () => window.removeEventListener("storage", Ye);
  }, [Qe]), Ae.useEffect(() => {
    qe(y ?? $);
  }, [y, $]);
  let Me = Ae.useMemo(() => ({ theme: $, setTheme: Qe, forcedTheme: y, resolvedTheme: $ === "system" ? G : $, themes: E ? [...L, "system"] : L, systemTheme: E ? G : void 0 }), [$, Qe, y, G, E, L]);
  return Ae.createElement(H0.Provider, { value: Me }, Ae.createElement(MO, { forcedTheme: y, storageKey: H, attribute: g, enableSystem: E, enableColorScheme: O, defaultTheme: Q, value: ne, themes: L, nonce: J, scriptProps: le }), Z);
}, MO = Ae.memo(({ forcedTheme: y, storageKey: b, attribute: E, enableSystem: O, enableColorScheme: H, defaultTheme: L, value: Q, themes: g, nonce: ne, scriptProps: Z }) => {
  let J = JSON.stringify([E, b, L, y, g, Q, O, H]).slice(1, -1);
  return Ae.createElement("script", { ...Z, suppressHydrationWarning: !0, nonce: typeof window > "u" ? ne : "", dangerouslySetInnerHTML: { __html: `(${TO.toString()})(${J})` } });
}), zO = (y, b) => {
  if (_O) return;
  let E;
  try {
    E = localStorage.getItem(y) || void 0;
  } catch {
  }
  return E || b;
}, AO = (y) => {
  let b = document.createElement("style");
  return y && b.setAttribute("nonce", y), b.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(b), () => {
    window.getComputedStyle(document.body), setTimeout(() => {
      document.head.removeChild(b);
    }, 1);
  };
}, N0 = (y) => (y || (y = window.matchMedia(fw)), y.matches ? "dark" : "light");
function UO() {
  const { theme: y, setTheme: b } = DO(), E = () => {
    b(y === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ V.jsxs(
    Xn,
    {
      variant: "ghost",
      size: "sm",
      onClick: E,
      className: "text-muted-foreground hover:text-foreground",
      children: [
        /* @__PURE__ */ V.jsx(FD, { className: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
        /* @__PURE__ */ V.jsx(OD, { className: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
        /* @__PURE__ */ V.jsx("span", { className: "sr-only", children: "Toggle theme" })
      ]
    }
  );
}
function jO({ activeTab: y, onTabChange: b }) {
  const E = [
    { id: "main-table", label: "Main table", icon: "⋯" },
    { id: "form", label: "Form", icon: null },
    { id: "kanban", label: "Kanban", icon: null }
  ];
  return /* @__PURE__ */ V.jsxs("header", { className: "bg-card border-b border-border px-6 py-3 flex items-center justify-between", children: [
    /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-1", children: [
      E.map((O) => /* @__PURE__ */ V.jsxs(
        "button",
        {
          onClick: () => b(O.id),
          className: `px-4 py-2 rounded-md transition-colors flex items-center gap-2 text-sm ${y === O.id ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`,
          children: [
            O.icon && /* @__PURE__ */ V.jsx("span", { children: O.icon }),
            O.label
          ]
        },
        O.id
      )),
      /* @__PURE__ */ V.jsxs(
        Xn,
        {
          variant: "ghost",
          size: "sm",
          className: "text-muted-foreground hover:text-foreground ml-2",
          children: [
            /* @__PURE__ */ V.jsx(pv, { className: "w-4 h-4 mr-1" }),
            "Add View"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ V.jsx("h1", { className: "text-xl font-medium text-foreground", children: "MYTICK" }),
        /* @__PURE__ */ V.jsx(
          dc,
          {
            variant: "secondary",
            className: "bg-emerald-600 text-white border-none",
            children: "In Portal"
          }
        )
      ] }),
      /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ V.jsx(UO, {}),
        /* @__PURE__ */ V.jsx(
          Xn,
          {
            variant: "ghost",
            size: "sm",
            className: "text-muted-foreground hover:text-foreground",
            children: /* @__PURE__ */ V.jsx(UD, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ V.jsx("div", { className: "w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ V.jsx(ew, { className: "w-4 h-4 text-white" }) })
      ] })
    ] })
  ] });
}
function FO(y, b = []) {
  let E = [];
  function O(L, Q) {
    const g = Ae.createContext(Q), ne = E.length;
    E = [...E, Q];
    const Z = (le) => {
      var qe;
      const { scope: $, children: se, ...G } = le, ee = ((qe = $ == null ? void 0 : $[y]) == null ? void 0 : qe[ne]) || g, de = Ae.useMemo(() => G, Object.values(G));
      return /* @__PURE__ */ V.jsx(ee.Provider, { value: de, children: se });
    };
    Z.displayName = L + "Provider";
    function J(le, $) {
      var ee;
      const se = ((ee = $ == null ? void 0 : $[y]) == null ? void 0 : ee[ne]) || g, G = Ae.useContext(se);
      if (G) return G;
      if (Q !== void 0) return Q;
      throw new Error(`\`${le}\` must be used within \`${L}\``);
    }
    return [Z, J];
  }
  const H = () => {
    const L = E.map((Q) => Ae.createContext(Q));
    return function(g) {
      const ne = (g == null ? void 0 : g[y]) || L;
      return Ae.useMemo(
        () => ({ [`__scope${y}`]: { ...g, [y]: ne } }),
        [g, ne]
      );
    };
  };
  return H.scopeName = y, [O, HO(H, ...b)];
}
function HO(...y) {
  const b = y[0];
  if (y.length === 1) return b;
  const E = () => {
    const O = y.map((H) => ({
      useScope: H(),
      scopeName: H.scopeName
    }));
    return function(L) {
      const Q = O.reduce((g, { useScope: ne, scopeName: Z }) => {
        const le = ne(L)[`__scope${Z}`];
        return { ...g, ...le };
      }, {});
      return Ae.useMemo(() => ({ [`__scope${b.scopeName}`]: Q }), [Q]);
    };
  };
  return E.scopeName = b.scopeName, E;
}
function PO(y) {
  const b = Ae.useRef(y);
  return Ae.useEffect(() => {
    b.current = y;
  }), Ae.useMemo(() => (...E) => {
    var O;
    return (O = b.current) == null ? void 0 : O.call(b, ...E);
  }, []);
}
var U0 = globalThis != null && globalThis.document ? Ae.useLayoutEffect : () => {
};
qx();
var VO = [
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
], P0 = VO.reduce((y, b) => {
  const E = /* @__PURE__ */ tw(`Primitive.${b}`), O = Ae.forwardRef((H, L) => {
    const { asChild: Q, ...g } = H, ne = Q ? E : b;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ V.jsx(ne, { ...g, ref: L });
  });
  return O.displayName = `Primitive.${b}`, { ...y, [b]: O };
}, {}), sy = { exports: {} }, L0 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $x;
function BO() {
  if ($x) return L0;
  $x = 1;
  var y = pc();
  function b(le, $) {
    return le === $ && (le !== 0 || 1 / le === 1 / $) || le !== le && $ !== $;
  }
  var E = typeof Object.is == "function" ? Object.is : b, O = y.useState, H = y.useEffect, L = y.useLayoutEffect, Q = y.useDebugValue;
  function g(le, $) {
    var se = $(), G = O({ inst: { value: se, getSnapshot: $ } }), ee = G[0].inst, de = G[1];
    return L(
      function() {
        ee.value = se, ee.getSnapshot = $, ne(ee) && de({ inst: ee });
      },
      [le, se, $]
    ), H(
      function() {
        return ne(ee) && de({ inst: ee }), le(function() {
          ne(ee) && de({ inst: ee });
        });
      },
      [le]
    ), Q(se), se;
  }
  function ne(le) {
    var $ = le.getSnapshot;
    le = le.value;
    try {
      var se = $();
      return !E(le, se);
    } catch {
      return !0;
    }
  }
  function Z(le, $) {
    return $();
  }
  var J = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Z : g;
  return L0.useSyncExternalStore = y.useSyncExternalStore !== void 0 ? y.useSyncExternalStore : J, L0;
}
var M0 = {}, Ix;
function $O() {
  if (Ix) return M0;
  Ix = 1;
  var y = {};
  /**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return y.NODE_ENV !== "production" && function() {
    function b(G, ee) {
      return G === ee && (G !== 0 || 1 / G === 1 / ee) || G !== G && ee !== ee;
    }
    function E(G, ee) {
      le || L.startTransition === void 0 || (le = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var de = ee();
      if (!$) {
        var qe = ee();
        Q(de, qe) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), $ = !0);
      }
      qe = g({
        inst: { value: de, getSnapshot: ee }
      });
      var Qe = qe[0].inst, $e = qe[1];
      return Z(
        function() {
          Qe.value = de, Qe.getSnapshot = ee, O(Qe) && $e({ inst: Qe });
        },
        [G, de, ee]
      ), ne(
        function() {
          return O(Qe) && $e({ inst: Qe }), G(function() {
            O(Qe) && $e({ inst: Qe });
          });
        },
        [G]
      ), J(de), de;
    }
    function O(G) {
      var ee = G.getSnapshot;
      G = G.value;
      try {
        var de = ee();
        return !Q(G, de);
      } catch {
        return !0;
      }
    }
    function H(G, ee) {
      return ee();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var L = pc(), Q = typeof Object.is == "function" ? Object.is : b, g = L.useState, ne = L.useEffect, Z = L.useLayoutEffect, J = L.useDebugValue, le = !1, $ = !1, se = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? H : E;
    M0.useSyncExternalStore = L.useSyncExternalStore !== void 0 ? L.useSyncExternalStore : se, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }(), M0;
}
var Yx;
function IO() {
  if (Yx) return sy.exports;
  Yx = 1;
  var y = {};
  return y.NODE_ENV === "production" ? sy.exports = BO() : sy.exports = $O(), sy.exports;
}
var YO = IO();
function WO() {
  return YO.useSyncExternalStore(
    GO,
    () => !0,
    () => !1
  );
}
function GO() {
  return () => {
  };
}
var V0 = "Avatar", [QO, mN] = FO(V0), [qO, dw] = QO(V0), pw = Ae.forwardRef(
  (y, b) => {
    const { __scopeAvatar: E, ...O } = y, [H, L] = Ae.useState("idle");
    return /* @__PURE__ */ V.jsx(
      qO,
      {
        scope: E,
        imageLoadingStatus: H,
        onImageLoadingStatusChange: L,
        children: /* @__PURE__ */ V.jsx(P0.span, { ...O, ref: b })
      }
    );
  }
);
pw.displayName = V0;
var vw = "AvatarImage", KO = Ae.forwardRef(
  (y, b) => {
    const { __scopeAvatar: E, src: O, onLoadingStatusChange: H = () => {
    }, ...L } = y, Q = dw(vw, E), g = XO(O, L), ne = PO((Z) => {
      H(Z), Q.onImageLoadingStatusChange(Z);
    });
    return U0(() => {
      g !== "idle" && ne(g);
    }, [g, ne]), g === "loaded" ? /* @__PURE__ */ V.jsx(P0.img, { ...L, ref: b, src: O }) : null;
  }
);
KO.displayName = vw;
var hw = "AvatarFallback", mw = Ae.forwardRef(
  (y, b) => {
    const { __scopeAvatar: E, delayMs: O, ...H } = y, L = dw(hw, E), [Q, g] = Ae.useState(O === void 0);
    return Ae.useEffect(() => {
      if (O !== void 0) {
        const ne = window.setTimeout(() => g(!0), O);
        return () => window.clearTimeout(ne);
      }
    }, [O]), Q && L.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ V.jsx(P0.span, { ...H, ref: b }) : null;
  }
);
mw.displayName = hw;
function Wx(y, b) {
  return y ? b ? (y.src !== b && (y.src = b), y.complete && y.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function XO(y, { referrerPolicy: b, crossOrigin: E }) {
  const O = WO(), H = Ae.useRef(null), L = O ? (H.current || (H.current = new window.Image()), H.current) : null, [Q, g] = Ae.useState(
    () => Wx(L, y)
  );
  return U0(() => {
    g(Wx(L, y));
  }, [L, y]), U0(() => {
    const ne = (le) => () => {
      g(le);
    };
    if (!L) return;
    const Z = ne("loaded"), J = ne("error");
    return L.addEventListener("load", Z), L.addEventListener("error", J), b && (L.referrerPolicy = b), typeof E == "string" && (L.crossOrigin = E), () => {
      L.removeEventListener("load", Z), L.removeEventListener("error", J);
    };
  }, [L, E, b]), Q;
}
var JO = pw, ZO = mw;
function eN({
  className: y,
  ...b
}) {
  return /* @__PURE__ */ V.jsx(
    JO,
    {
      "data-slot": "avatar",
      className: cy(
        "relative flex size-10 shrink-0 overflow-hidden rounded-full",
        y
      ),
      ...b
    }
  );
}
function tN({
  className: y,
  ...b
}) {
  return /* @__PURE__ */ V.jsx(
    ZO,
    {
      "data-slot": "avatar-fallback",
      className: cy(
        "bg-muted flex size-full items-center justify-center rounded-full",
        y
      ),
      ...b
    }
  );
}
const nN = {
  open: "bg-gray-500",
  pending: "bg-yellow-500",
  "in-progress": "bg-blue-500",
  waiting: "bg-purple-500",
  resolved: "bg-green-500",
  closed: "bg-gray-600"
}, rN = {
  low: "bg-gray-500",
  medium: "bg-orange-500",
  high: "bg-red-500"
};
function aN({ group: y }) {
  const [b, E] = Ae.useState(!0), O = (L) => nN[L] || "bg-gray-500", H = (L) => rN[L] || "bg-gray-500";
  return /* @__PURE__ */ V.jsxs("div", { className: "border-b border-border", children: [
    /* @__PURE__ */ V.jsx(
      "div",
      {
        className: "flex items-center gap-3 p-4 hover:bg-accent cursor-pointer",
        onClick: () => E(!b),
        children: /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-2", children: [
          b ? /* @__PURE__ */ V.jsx(bD, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ V.jsx(wD, { className: "w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ V.jsx("div", { className: `w-3 h-8 rounded-sm ${y.color}` }),
          /* @__PURE__ */ V.jsx("span", { className: "font-medium", children: y.name }),
          /* @__PURE__ */ V.jsxs("span", { className: "text-muted-foreground text-sm", children: [
            y.count,
            " Tickets"
          ] })
        ] })
      }
    ),
    b && /* @__PURE__ */ V.jsx("div", { children: y.tickets.map((L) => /* @__PURE__ */ V.jsxs(
      "div",
      {
        className: "grid grid-cols-6 gap-4 px-6 py-3 hover:bg-accent border-l-4 border-l-transparent hover:border-l-border",
        children: [
          /* @__PURE__ */ V.jsx("div", {}),
          /* @__PURE__ */ V.jsx("div", { className: "flex items-center", children: L.agent ? /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ V.jsx(eN, { className: "w-6 h-6", children: /* @__PURE__ */ V.jsx(tN, { className: "text-xs bg-muted", children: L.agent.split(" ").map((Q) => Q[0]).join("") }) }),
            /* @__PURE__ */ V.jsx("span", { className: "text-sm", children: L.agent })
          ] }) : /* @__PURE__ */ V.jsx("div", { className: "w-6 h-6 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ V.jsx(ew, { className: "w-3 h-3 text-muted-foreground" }) }) }),
          /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx(
            dc,
            {
              variant: "secondary",
              className: `${O(L.status)} text-white border-none capitalize text-xs`,
              children: L.status.replace("-", " ")
            }
          ) }),
          /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx(
            dc,
            {
              variant: "secondary",
              className: `${H(L.priority)} text-white border-none capitalize text-xs`,
              children: L.priority
            }
          ) }),
          /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx(
            dc,
            {
              variant: "outline",
              className: "bg-red-600 text-white border-red-600 text-xs",
              children: L.creationDate
            }
          ) }),
          /* @__PURE__ */ V.jsx("div", { children: L.resolutionDate ? /* @__PURE__ */ V.jsx(
            dc,
            {
              variant: "outline",
              className: "bg-green-600 text-white border-green-600 text-xs",
              children: L.resolutionDate
            }
          ) : /* @__PURE__ */ V.jsx("div", { className: "w-20 h-6 bg-muted rounded" }) })
        ]
      },
      L.id
    )) })
  ] });
}
const iN = [
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
function lN() {
  return /* @__PURE__ */ V.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ V.jsx("div", { className: "bg-card border-b border-border p-4", children: /* @__PURE__ */ V.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ V.jsxs(
          Xn,
          {
            variant: "outline",
            size: "sm",
            className: "bg-accent border-border text-accent-foreground hover:bg-accent/80",
            children: [
              /* @__PURE__ */ V.jsx(pv, { className: "w-4 h-4 mr-1" }),
              "New ticket"
            ]
          }
        ),
        /* @__PURE__ */ V.jsxs(
          Xn,
          {
            variant: "ghost",
            size: "sm",
            className: "text-muted-foreground hover:text-foreground",
            children: [
              /* @__PURE__ */ V.jsx(Zx, { className: "w-4 h-4 mr-1" }),
              "Search"
            ]
          }
        ),
        /* @__PURE__ */ V.jsxs(
          Xn,
          {
            variant: "ghost",
            size: "sm",
            className: "text-muted-foreground hover:text-foreground",
            children: [
              /* @__PURE__ */ V.jsx(Jx, { className: "w-4 h-4 mr-1" }),
              "Filter"
            ]
          }
        ),
        /* @__PURE__ */ V.jsx(
          Xn,
          {
            variant: "ghost",
            size: "sm",
            className: "text-muted-foreground hover:text-foreground",
            children: "📊 Group by"
          }
        ),
        /* @__PURE__ */ V.jsx(
          Xn,
          {
            variant: "ghost",
            size: "sm",
            className: "text-muted-foreground hover:text-foreground",
            children: /* @__PURE__ */ V.jsx(j0, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ V.jsx(
        Xn,
        {
          variant: "ghost",
          size: "sm",
          className: "text-muted-foreground hover:text-foreground",
          children: "⬆"
        }
      )
    ] }) }),
    /* @__PURE__ */ V.jsx("div", { className: "bg-muted border-b border-border px-6 py-3", children: /* @__PURE__ */ V.jsxs("div", { className: "grid grid-cols-6 gap-4 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ V.jsx("div", {}),
      /* @__PURE__ */ V.jsx("div", { children: "Agent" }),
      /* @__PURE__ */ V.jsx("div", { children: "Status" }),
      /* @__PURE__ */ V.jsx("div", { children: "Priority" }),
      /* @__PURE__ */ V.jsx("div", { children: "Creation Date" }),
      /* @__PURE__ */ V.jsx("div", { children: "Resolution Date" })
    ] }) }),
    /* @__PURE__ */ V.jsxs("div", { className: "flex-1 overflow-auto", children: [
      iN.map((y) => /* @__PURE__ */ V.jsx(aN, { group: y }, y.id)),
      /* @__PURE__ */ V.jsx("div", { className: "p-4", children: /* @__PURE__ */ V.jsxs(
        Xn,
        {
          variant: "ghost",
          size: "sm",
          className: "text-muted-foreground hover:text-foreground",
          children: [
            /* @__PURE__ */ V.jsx(pv, { className: "w-4 h-4 mr-2" }),
            "Add new group"
          ]
        }
      ) })
    ] })
  ] });
}
const oN = {
  Reviewed: "bg-slate-500",
  "Awaiting customer": "bg-purple-500",
  Critical: "bg-red-600",
  Removed: "bg-gray-500",
  New: "bg-indigo-500",
  High: "bg-red-500"
};
function uN({ ticket: y }) {
  const b = (E) => oN[E] || "bg-gray-500";
  return /* @__PURE__ */ V.jsxs("div", { className: "bg-card rounded-lg p-3 border border-border hover:border-muted-foreground transition-colors", children: [
    /* @__PURE__ */ V.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
      /* @__PURE__ */ V.jsx("h4", { className: "text-sm font-medium text-foreground leading-tight", children: y.title }),
      /* @__PURE__ */ V.jsx(
        Xn,
        {
          variant: "ghost",
          size: "sm",
          className: "h-6 w-6 p-0 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100",
          children: /* @__PURE__ */ V.jsx(j0, { className: "w-3 h-3" })
        }
      )
    ] }),
    y.description && /* @__PURE__ */ V.jsx("p", { className: "text-xs text-muted-foreground mb-3 line-clamp-2", children: y.description }),
    /* @__PURE__ */ V.jsx("div", { className: "flex flex-wrap gap-1 mb-3", children: y.tags.map((E, O) => /* @__PURE__ */ V.jsx(
      dc,
      {
        variant: "secondary",
        className: `${b(E)} text-white border-none text-xs px-2 py-0.5`,
        children: E
      },
      O
    )) }),
    /* @__PURE__ */ V.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ V.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ V.jsx(
        dc,
        {
          variant: "outline",
          className: "bg-red-600 text-white border-red-600 text-xs",
          children: y.creationDate
        }
      ) }),
      /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground", children: [
        /* @__PURE__ */ V.jsx(
          Xn,
          {
            variant: "ghost",
            size: "sm",
            className: "h-6 w-6 p-0 text-muted-foreground hover:text-foreground",
            children: /* @__PURE__ */ V.jsx(kD, { className: "w-3 h-3" })
          }
        ),
        /* @__PURE__ */ V.jsx(
          Xn,
          {
            variant: "ghost",
            size: "sm",
            className: "h-6 w-6 p-0 text-muted-foreground hover:text-foreground",
            children: /* @__PURE__ */ V.jsx(LD, { className: "w-3 h-3" })
          }
        )
      ] })
    ] })
  ] });
}
function sN({ column: y, tickets: b }) {
  return /* @__PURE__ */ V.jsxs("div", { className: "min-w-80 flex flex-col", children: [
    /* @__PURE__ */ V.jsx("div", { className: "bg-card rounded-t-lg p-3 border border-border", children: /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ V.jsx("div", { className: `w-3 h-6 rounded-sm ${y.color}` }),
      /* @__PURE__ */ V.jsx("span", { className: "font-medium text-foreground", children: y.title }),
      /* @__PURE__ */ V.jsx("span", { className: "text-muted-foreground text-sm", children: b.length })
    ] }) }),
    /* @__PURE__ */ V.jsxs("div", { className: "bg-background flex-1 border-l border-r border-border p-2 space-y-3 min-h-96", children: [
      b.map((E) => /* @__PURE__ */ V.jsx(uN, { ticket: E }, E.id)),
      b.length === 0 && /* @__PURE__ */ V.jsx("div", { className: "flex items-center justify-center h-32 text-muted-foreground text-sm", children: "No tickets" })
    ] }),
    /* @__PURE__ */ V.jsx("div", { className: "bg-background rounded-b-lg border border-t-0 border-border p-2", children: /* @__PURE__ */ V.jsxs(
      Xn,
      {
        variant: "ghost",
        size: "sm",
        className: "w-full text-muted-foreground hover:text-foreground hover:bg-accent",
        children: [
          /* @__PURE__ */ V.jsx(pv, { className: "w-4 h-4 mr-1" }),
          "Add ticket"
        ]
      }
    ) })
  ] });
}
const cN = [
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
], fN = [
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
function dN() {
  const y = (b) => cN.filter((E) => E.status === b);
  return /* @__PURE__ */ V.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ V.jsx("div", { className: "bg-card border-b border-border p-4", children: /* @__PURE__ */ V.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ V.jsxs(
          Xn,
          {
            variant: "ghost",
            size: "sm",
            className: "text-muted-foreground hover:text-foreground",
            children: [
              /* @__PURE__ */ V.jsx(Zx, { className: "w-4 h-4 mr-1" }),
              "Search"
            ]
          }
        ),
        /* @__PURE__ */ V.jsxs(
          Xn,
          {
            variant: "ghost",
            size: "sm",
            className: "text-muted-foreground hover:text-foreground",
            children: [
              /* @__PURE__ */ V.jsx(Jx, { className: "w-4 h-4 mr-1" }),
              "Filter"
            ]
          }
        ),
        /* @__PURE__ */ V.jsx(
          Xn,
          {
            variant: "ghost",
            size: "sm",
            className: "text-muted-foreground hover:text-foreground",
            children: /* @__PURE__ */ V.jsx(j0, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ V.jsx(
          Xn,
          {
            variant: "ghost",
            size: "sm",
            className: "text-muted-foreground hover:text-foreground",
            children: "📊"
          }
        ),
        /* @__PURE__ */ V.jsx(
          Xn,
          {
            variant: "ghost",
            size: "sm",
            className: "text-muted-foreground hover:text-foreground",
            children: "👁️"
          }
        ),
        /* @__PURE__ */ V.jsx(
          Xn,
          {
            variant: "ghost",
            size: "sm",
            className: "text-muted-foreground hover:text-foreground",
            children: "⬆"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ V.jsx("div", { className: "flex-1 overflow-auto", children: /* @__PURE__ */ V.jsxs("div", { className: "flex gap-4 p-4 min-w-max", children: [
      fN.map((b) => /* @__PURE__ */ V.jsx(
        sN,
        {
          column: b,
          tickets: y(b.id)
        },
        b.id
      )),
      /* @__PURE__ */ V.jsx("div", { className: "min-w-80", children: /* @__PURE__ */ V.jsxs(
        Xn,
        {
          variant: "ghost",
          className: "w-full h-12 border-2 border-dashed border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground",
          children: [
            /* @__PURE__ */ V.jsx(pv, { className: "w-4 h-4 mr-2" }),
            "Add folder"
          ]
        }
      ) })
    ] }) })
  ] });
}
function yw() {
  const [y, b] = Ae.useState("main-table");
  return /* @__PURE__ */ V.jsxs("div", { className: "it-support-dashboard h-screen bg-background text-foreground flex flex-col", children: [
    /* @__PURE__ */ V.jsx(jO, { activeTab: y, onTabChange: b }),
    /* @__PURE__ */ V.jsxs("main", { className: "flex-1 overflow-auto m-5", children: [
      y === "main-table" && /* @__PURE__ */ V.jsx(lN, {}),
      y === "form" && /* @__PURE__ */ V.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ V.jsx("h2", { className: "text-xl mb-4", children: "Form View" }),
        /* @__PURE__ */ V.jsx("p", { className: "text-muted-foreground", children: "Form view coming soon..." })
      ] }),
      y === "kanban" && /* @__PURE__ */ V.jsx(dN, {})
    ] })
  ] });
}
function gw({ children: y, ...b }) {
  return /* @__PURE__ */ V.jsx(OO, { ...b, children: y });
}
mD.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ V.jsx(cD.StrictMode, { children: /* @__PURE__ */ V.jsx(gw, { attribute: "class", defaultTheme: "dark", enableSystem: !0, children: /* @__PURE__ */ V.jsx(yw, {}) }) })
);
let z0 = null;
function yN(y) {
  z0 || (z0 = Kx.createRoot(y)), z0.render(
    /* @__PURE__ */ V.jsx(Ae.StrictMode, { children: /* @__PURE__ */ V.jsx(gw, { attribute: "class", defaultTheme: "dark", enableSystem: !0, children: /* @__PURE__ */ V.jsx(yw, {}) }) })
  );
}
export {
  yN as mountReact
};
