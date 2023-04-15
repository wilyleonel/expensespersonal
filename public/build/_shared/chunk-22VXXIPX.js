import {
  require_react_dom
} from "/build/_shared/chunk-CEGUR3BY.js";
import {
  motion
} from "/build/_shared/chunk-DSOKMJAH.js";
import {
  require_jsx_dev_runtime,
  require_react,
  require_shim
} from "/build/_shared/chunk-Y4JNXV6F.js";
import {
  __commonJS,
  __export,
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType2(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer2(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer2;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType2;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/hoist-non-react-statics/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i2 = 0; i2 < keys.length; ++i2) {
          var key = keys[i2];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType2(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer2(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer2;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType2;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-redux/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/react-redux/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React3 = require_react();
        var shim = require_shim();
        function is(x2, y2) {
          return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useSyncExternalStore3 = shim.useSyncExternalStore;
        var useRef2 = React3.useRef, useEffect3 = React3.useEffect, useMemo3 = React3.useMemo, useDebugValue2 = React3.useDebugValue;
        function useSyncExternalStoreWithSelector3(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef2(null);
          var inst;
          if (instRef.current === null) {
            inst = {
              hasValue: false,
              value: null
            };
            instRef.current = inst;
          } else {
            inst = instRef.current;
          }
          var _useMemo = useMemo3(function() {
            var hasMemo = false;
            var memoizedSnapshot;
            var memoizedSelection;
            var memoizedSelector = function(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                var _nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0) {
                  if (inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, _nextSelection)) {
                      memoizedSelection = currentSelection;
                      return currentSelection;
                    }
                  }
                }
                memoizedSelection = _nextSelection;
                return _nextSelection;
              }
              var prevSnapshot = memoizedSnapshot;
              var prevSelection = memoizedSelection;
              if (objectIs(prevSnapshot, nextSnapshot)) {
                return prevSelection;
              }
              var nextSelection = selector(nextSnapshot);
              if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                return prevSelection;
              }
              memoizedSnapshot = nextSnapshot;
              memoizedSelection = nextSelection;
              return nextSelection;
            };
            var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
            var getSnapshotWithSelector = function() {
              return memoizedSelector(getSnapshot());
            };
            var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            };
            return [getSnapshotWithSelector, getServerSnapshotWithSelector];
          }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
          var value = useSyncExternalStore3(subscribe, getSelection, getServerSelection);
          useEffect3(function() {
            inst.hasValue = true;
            inst.value = value;
          }, [value]);
          useDebugValue2(value);
          return value;
        }
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector3;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// node_modules/react-redux/es/components/Provider.js
var import_react3 = __toESM(require_react());

// node_modules/react-redux/es/components/Context.js
var import_react = __toESM(require_react());
var ReactReduxContext = /* @__PURE__ */ (0, import_react.createContext)(null);
if (true) {
  ReactReduxContext.displayName = "ReactRedux";
}

// node_modules/react-redux/es/utils/batch.js
function defaultNoopBatch(callback) {
  callback();
}
var batch = defaultNoopBatch;
var setBatch = (newBatch) => batch = newBatch;
var getBatch = () => batch;

// node_modules/react-redux/es/utils/Subscription.js
function createListenerCollection() {
  const batch2 = getBatch();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      batch2(() => {
        let listener2 = first;
        while (listener2) {
          listener2.callback();
          listener2 = listener2.next;
        }
      });
    },
    get() {
      let listeners = [];
      let listener2 = first;
      while (listener2) {
        listeners.push(listener2);
        listener2 = listener2.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      let listener2 = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener2.prev) {
        listener2.prev.next = listener2;
      } else {
        first = listener2;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener2.next) {
          listener2.next.prev = listener2.prev;
        } else {
          last = listener2.prev;
        }
        if (listener2.prev) {
          listener2.prev.next = listener2.next;
        } else {
          first = listener2.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  function addNestedSub(listener2) {
    trySubscribe();
    return listeners.subscribe(listener2);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}

// node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
var import_react2 = __toESM(require_react());
var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var useIsomorphicLayoutEffect = canUseDOM ? import_react2.useLayoutEffect : import_react2.useEffect;

// node_modules/react-redux/es/components/Provider.js
function Provider({
  store,
  context,
  children,
  serverState
}) {
  const contextValue = (0, import_react3.useMemo)(() => {
    const subscription = createSubscription(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : void 0
    };
  }, [store, serverState]);
  const previousState = (0, import_react3.useMemo)(() => store.getState(), [store]);
  useIsomorphicLayoutEffect(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ import_react3.default.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
var Provider_default = Provider;

// node_modules/react-redux/es/components/connect.js
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var import_react4 = __toESM(require_react());
var import_react_is = __toESM(require_react_is2());

// node_modules/react-redux/es/utils/useSyncExternalStore.js
var notInitialized = () => {
  throw new Error("uSES not initialized!");
};

// node_modules/react-redux/es/components/connect.js
var useSyncExternalStore = notInitialized;
var initializeConnect = (fn2) => {
  useSyncExternalStore = fn2;
};

// node_modules/react-redux/es/hooks/useStore.js
var import_react6 = __toESM(require_react());

// node_modules/react-redux/es/hooks/useReduxContext.js
var import_react5 = __toESM(require_react());
function useReduxContext() {
  const contextValue = (0, import_react5.useContext)(ReactReduxContext);
  if (!contextValue) {
    throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
  }
  return contextValue;
}

// node_modules/react-redux/es/hooks/useStore.js
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : () => (0, import_react6.useContext)(context);
  return function useStore2() {
    const {
      store
    } = useReduxContext2();
    return store;
  };
}
var useStore = /* @__PURE__ */ createStoreHook();

// node_modules/react-redux/es/hooks/useDispatch.js
function createDispatchHook(context = ReactReduxContext) {
  const useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
  return function useDispatch2() {
    const store = useStore2();
    return store.dispatch;
  };
}
var useDispatch = /* @__PURE__ */ createDispatchHook();

// node_modules/react-redux/es/hooks/useSelector.js
var import_react7 = __toESM(require_react());
var useSyncExternalStoreWithSelector = notInitialized;
var initializeUseSelector = (fn2) => {
  useSyncExternalStoreWithSelector = fn2;
};
var refEquality = (a2, b2) => a2 === b2;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : () => (0, import_react7.useContext)(context);
  return function useSelector2(selector, equalityFn = refEquality) {
    if (true) {
      if (!selector) {
        throw new Error(`You must pass a selector to useSelector`);
      }
      if (typeof selector !== "function") {
        throw new Error(`You must pass a function as a selector to useSelector`);
      }
      if (typeof equalityFn !== "function") {
        throw new Error(`You must pass a function as an equality function to useSelector`);
      }
    }
    const {
      store,
      subscription,
      getServerState
    } = useReduxContext2();
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, selector, equalityFn);
    (0, import_react7.useDebugValue)(selectedState);
    return selectedState;
  };
}
var useSelector = /* @__PURE__ */ createSelectorHook();

// node_modules/react-redux/es/index.js
var import_shim = __toESM(require_shim());
var import_with_selector = __toESM(require_with_selector());

// node_modules/react-redux/es/utils/reactBatchedUpdates.js
var import_react_dom = __toESM(require_react_dom());

// node_modules/react-redux/es/index.js
initializeUseSelector(import_with_selector.useSyncExternalStoreWithSelector);
initializeConnect(import_shim.useSyncExternalStore);
setBatch(import_react_dom.unstable_batchedUpdates);

// node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t2, f2, n2 = "";
  if ("string" == typeof e || "number" == typeof e)
    n2 += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t2 = 0; t2 < e.length; t2++)
        e[t2] && (f2 = r(e[t2])) && (n2 && (n2 += " "), n2 += f2);
    else
      for (t2 in e)
        e[t2] && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function clsx() {
  for (var e, t2, f2 = 0, n2 = ""; f2 < arguments.length; )
    (e = arguments[f2++]) && (t2 = r(e)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
var clsx_m_default = clsx;

// app/assets/icons/index.tsx
var icons_exports = {};
__export(icons_exports, {
  Alarm: () => Alarm_default,
  Alert: () => Alert_default,
  AngleDown: () => AngleDown_default,
  AngleUp: () => AngleUp_default,
  Arrow: () => Arrow_default,
  Box: () => Box_default,
  BriefCase: () => BriefCase_default,
  Bussiness: () => Bussiness_default,
  CaretDown: () => CaretDown_default,
  CaseMedical: () => CaseMedical_default,
  Check: () => Check_default,
  Circle: () => Circle_default,
  Clock: () => Clock_default,
  Date: () => Date_default,
  Doctor: () => Doctor_default,
  Droplet: () => Droplet_default,
  Error: () => Error_default,
  Eye: () => Eye_default,
  Frecuence: () => Frecuence_default,
  HandHeart: () => HandHeart_default,
  Health: () => Health_default,
  Home: () => Home_default,
  IdCard: () => IdCard_default,
  LightBulb: () => LightBulb_default,
  LoadingPing: () => LoadingPing_default,
  Lock: () => Lock_default,
  Logout: () => Logout_default,
  Mail: () => Mail_default,
  Medicine: () => Medicine_default,
  Menu: () => Menu_default,
  Microscope: () => Microscope_default,
  PaperClip: () => PaperClip_default,
  Password: () => Password_default,
  PasswordHidden: () => PasswordHidden_default,
  Pdf: () => Pdf_default,
  PenEdit: () => PenEdit_default,
  Plus: () => Plus_default,
  Pressure: () => Pressure_default,
  Print: () => Print_default,
  Receipt: () => Receipt_default,
  Recipe: () => Recipe_default,
  SaveDisk: () => SaveDisk_default,
  Search: () => Search_default,
  Size: () => Size_default,
  SquarePlus: () => SquarePlus_default,
  Stethoscope: () => Stethoscope_default,
  Temperature: () => Temperature_default,
  Trash: () => Trash_default,
  UserProfile: () => UserProfile_default,
  Weight: () => Weight_default,
  Xmark: () => Xmark_default
});

// app/assets/icons/Alarm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Alarm = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 452 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z" }, void 0, false, {
  fileName: "app/assets/icons/Alarm.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Alarm.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Alarm_default = Alarm;

// app/assets/icons/CaseMedical.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var CaseMedical = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M464 96H384V48C384 21.5 362.5 0 336 0h-160C149.5 0 128 21.5 128 48V96H48C21.5 96 0 117.5 0 144v288C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM176 48h160V96h-160V48zM368 314c0 8.836-7.164 16-16 16h-54V384c0 8.836-7.164 16-15.1 16h-52c-8.835 0-16-7.164-16-16v-53.1H160c-8.836 0-16-7.164-16-16v-52c0-8.838 7.164-16 16-16h53.1V192c0-8.838 7.165-16 16-16h52c8.836 0 15.1 7.162 15.1 16v54H352c8.836 0 16 7.162 16 16V314z" }, void 0, false, {
    fileName: "app/assets/icons/CaseMedical.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/assets/icons/CaseMedical.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
var CaseMedical_default = CaseMedical;

// app/assets/icons/Clock.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var Clock = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" }, void 0, false, {
    fileName: "app/assets/icons/Clock.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/assets/icons/Clock.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
var Clock_default = Clock;

// app/assets/icons/Lock.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var Lock = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" }, void 0, false, {
  fileName: "app/assets/icons/Lock.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Lock.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Lock_default = Lock;

// app/assets/icons/Mail.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var Mail = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "path",
  {
    d: "M464 64c26.5 0 48 21.49 48 48 0 15.1-7.1 29.3-19.2\n        38.4L275.2 313.6a32.1 32.1 0 0 1-38.4 0L19.2 150.4C7.113 141.3\n        0 127.1 0 112c0-26.51 21.49-48 48-48h416zM217.6 339.2a63.9 63.9\n        0 0 0 76.8 0L512 176v208c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7\n        -64-64V176l217.6 163.2z"
  },
  void 0,
  false,
  {
    fileName: "app/assets/icons/Mail.tsx",
    lineNumber: 5,
    columnNumber: 5
  },
  this
) }, void 0, false, {
  fileName: "app/assets/icons/Mail.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Mail_default = Mail;

// app/assets/icons/Recipe.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var Recipe = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 1 14 20", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("g", { id: "b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("g", { id: "c", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M12.19,17H.54C.1,16.82,0,16.47,0,16.03,.01,11.56,0,7.08,0,2.61c0-.57,.27-.84,.84-.85,.62,0,1.24,0,1.86,0,.12,0,.17-.02,.2-.15,.17-.64,.55-1.11,1.14-1.41,.2-.1,.43-.14,.64-.21h3.39s.04,.03,.07,.03c.89,.18,1.46,.72,1.71,1.59,.04,.13,.08,.15,.2,.15,.64,0,1.27,0,1.91,0,.22,0,.42,.05,.58,.21,.17,.17,.22,.39,.22,.62,0,4.5,0,9,0,13.49,0,.44-.14,.76-.57,.91Zm-.85-7.61c0-1.59,0-3.18,0-4.76,0-.44,0-.87,0-1.31,0-.1-.02-.13-.13-.13-.39,0-.77,0-1.16,0-.09,0-.13,.03-.12,.12,0,.18,0,.37,0,.55,0,.27-.11,.49-.34,.64-.15,.1-.32,.11-.49,.11-1.6,0-3.21,0-4.81,0-.23,0-.45,0-.68,0-.46-.01-.74-.29-.75-.75,0-.18,0-.35,0-.53,0-.11-.03-.14-.14-.14-.36,0-.72,.01-1.08,0-.16,0-.2,.04-.2,.2,0,4,0,8,0,12,0,.17,.05,.2,.2,.2,3.17,0,6.34,0,9.51,0,.18,0,.2-.06,.2-.21,0-1.99,0-3.98,0-5.98ZM6.38,3.19c.66,0,1.33,0,1.99,0,.11,0,.14-.02,.14-.14,0-.3,0-.6,0-.9,0-.44-.29-.73-.73-.74-.93,0-1.86,0-2.79,0-.45,0-.73,.3-.73,.75,0,.29,0,.59,0,.88,0,.12,.04,.15,.15,.14,.66,0,1.32,0,1.97,0Z" }, void 0, false, {
      fileName: "app/assets/icons/Recipe.tsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M6.4,6.38c.7,0,1.39,0,2.09,0,.31,0,.55,.15,.67,.43,.11,.27,.07,.53-.13,.76-.15,.16-.34,.23-.55,.23-1.39,0-2.79,0-4.18,0-.45,0-.74-.31-.74-.73,0-.4,.32-.69,.76-.69,.7,0,1.39,0,2.09,0Z" }, void 0, false, {
      fileName: "app/assets/icons/Recipe.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M6.37,10.62c-.7,0-1.4,0-2.11,0-.3,0-.53-.15-.65-.43-.12-.27-.07-.53,.13-.76,.15-.17,.35-.23,.56-.23,1.39,0,2.78,0,4.16,0,.45,0,.75,.31,.75,.72,0,.41-.32,.7-.76,.7-.69,0-1.38,0-2.07,0Z" }, void 0, false, {
      fileName: "app/assets/icons/Recipe.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M7.81,12.75c.23,0,.45,0,.68,0,.4,0,.7,.29,.72,.66,.02,.4-.23,.72-.64,.74-.51,.04-1.03,.04-1.54,0-.39-.03-.66-.35-.65-.72,.01-.38,.32-.67,.72-.68,.24,0,.47,0,.71,0Z" }, void 0, false, {
      fileName: "app/assets/icons/Recipe.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/assets/icons/Recipe.tsx",
    lineNumber: 8,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/assets/icons/Recipe.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/assets/icons/Recipe.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/assets/icons/Recipe.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
var Recipe_default = Recipe;

// app/assets/icons/Search.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var Search = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { d: "M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" }, void 0, false, {
  fileName: "app/assets/icons/Search.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Search.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Search_default = Search;

// app/assets/icons/SquarePlus.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var SquarePlus = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 462 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { d: "M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM224 368C237.3 368 248 357.3 248 344V280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H248V168C248 154.7 237.3 144 224 144C210.7 144 200 154.7 200 168V232H136C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H200V344C200 357.3 210.7 368 224 368z" }, void 0, false, {
    fileName: "app/assets/icons/SquarePlus.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/assets/icons/SquarePlus.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
var SquarePlus_default = SquarePlus;

// app/assets/icons/UserProfile.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
var UserProfile = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { d: "M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" }, void 0, false, {
  fileName: "app/assets/icons/UserProfile.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/UserProfile.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var UserProfile_default = UserProfile;

// app/assets/icons/Health.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
var Health = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 367.63 342.98", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { d: "M0,121.51v-17.96c.7-3.97,1.39-7.93,2.11-11.9C10.77,43.66,51.48,5.84,100.05,.79c29.32-3.05,55.97,4.04,79.83,21.43,1.34,.97,2.71,1.9,4.11,2.87,2.88-2.1,5.51-4.18,8.3-6.01,2.89-1.9,5.84-3.77,8.93-5.32,38.25-19.13,76.21-18.67,112.85,3.61,31.16,18.95,48.88,47.42,52.81,83.64,3.93,36.25-7.88,67.42-33.58,93.19-48.77,48.91-97.65,97.7-146.49,146.54-.9,.9-1.86,1.75-2.38,2.23-50-50-99.8-99.8-149.61-149.61,.84-.04,1.99-.13,3.13-.13,13.89-.01,27.77-.08,41.66,.06,2.73,.03,4.25-.74,5.63-3.18,10.72-18.94,21.6-37.79,32.44-56.66,.58-1.01,1.22-2,2.11-3.48,12.55,37.76,24.95,75.04,37.58,113.04,16.33-28.63,32.16-56.39,48.23-84.56,4.97,8.38,9.58,16.21,14.26,23.99,2.21,3.67,3.77,8.6,7.05,10.51,3.15,1.83,8.14,.55,12.33,.56,11.49,.02,22.98,.1,34.47-.04,7.14-.09,11.99-4.77,12.27-11.41,.33-7.69-4.77-12.94-12.93-13.03-9.81-.11-19.63-.12-29.45,.04-2.5,.04-3.81-.83-5.03-2.93-10.36-17.9-20.84-35.74-31.29-53.6-.62-1.06-1.32-2.07-2.17-3.4-13.92,24.69-27.58,48.91-41.62,73.8-12.5-37.91-24.75-75.02-37.17-112.69-1.05,1.75-1.73,2.87-2.38,4-17.57,30.45-35.15,60.89-52.71,91.35-.95,1.64-1.62,3.19-4.16,3.17-16.64-.13-33.28-.02-49.91-.16-1.2-.01-3.01-1.11-3.47-2.17-3.34-7.77-6.91-15.51-9.4-23.57-2.13-6.9-2.92-14.22-4.3-21.36Z" }, void 0, false, {
    fileName: "app/assets/icons/Health.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/assets/icons/Health.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
var Health_default = Health;

// app/assets/icons/CaretDown.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
var CaretDown = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 100 312 512", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { d: "M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" }, void 0, false, {
      fileName: "app/assets/icons/CaretDown.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    " "
  ] }, void 0, true, {
    fileName: "app/assets/icons/CaretDown.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
var CaretDown_default = CaretDown;

// app/assets/icons/Arrow.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
var Arrow = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 40 504 482", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { d: "M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" }, void 0, false, {
  fileName: "app/assets/icons/Arrow.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Arrow.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Arrow_default = Arrow;

// app/assets/icons/Plus.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
var Plus = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 40 448 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("path", { d: "M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" }, void 0, false, {
  fileName: "app/assets/icons/Plus.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Plus.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Plus_default = Plus;

// app/assets/icons/Eye.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
var Eye = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("path", { d: "M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z" }, void 0, false, {
  fileName: "app/assets/icons/Eye.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Eye.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Eye_default = Eye;

// app/assets/icons/Pdf.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
var Pdf = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-30 0 382 512", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M309.93,93.29c-30.16-29.9-60.22-59.9-90.28-89.89-1.02-1.01-1.8-2.26-2.7-3.4H56.06c-2.25,.64-4.52,1.22-6.75,1.93C31.87,7.46,20.71,23.02,20.69,42.1c-.05,48.48-.02,96.96-.02,145.44v4.74c-1.84,.09-3.43,.14-5.01,.25-8.39,.6-14.87,6.86-15.31,15.22-.32,6.12-.18,12.27-.18,18.41-.01,25.81,.38,51.62-.17,77.42-.29,13.55,5.11,22.47,20.68,22.24,0,6.21-.11,12.43,.02,18.64,.29,13.68,6.04,24.62,17.01,32.72,7.62,5.63,16.32,7.8,25.75,7.8,69.03-.05,138.05-.02,207.08-.06,3.24,0,6.52-.23,9.71-.77,17.9-3.05,32.11-19.18,33.02-37.34,.11-2.25,.16-4.51,.16-6.76,0-79.42-.02-158.85,.09-238.27,0-3.58-1.1-5.99-3.6-8.46ZM43.56,227.06c12.61-1.22,25.28-3.48,37.61,1.5,8.18,3.3,11.89,10.05,11.98,18.68,.1,9.15-3.65,16.2-12.1,20.35-5.65,2.77-11.71,3.4-17.9,3.33-1.22-.01-2.45,0-4,0v24.3h-15.59v-68.16Zm226.31,132.83c-68.53,.01-137.07,.01-205.6,0-12.27,0-18.57-6.29-18.6-18.47-.01-5.11,0-10.22,0-15.84h4.69c62.9,0,125.79-.18,188.69,.15,12.76,.07,20.19-7.73,20.04-20.12-.38-31.19-.12-62.39-.13-93.59,0-13.22-6.36-19.55-19.6-19.55-62.9,0-125.79,0-188.69,0h-5v-4.23c0-48.24,.02-96.47-.02-144.71,0-5.63,1.23-10.65,5.66-14.53,3.3-2.9,7.24-3.91,11.47-3.91,47.23-.08,94.47-.12,141.7-.15,.6,0,1.2,.14,2.33,.27,0,1.69,0,3.27,0,4.85,.11,17.16-.14,34.33,.45,51.48,.46,13.24,12.12,24.74,25.43,25.14,16.52,.5,33.07,.16,49.6,.19,1.61,0,3.22,0,5.25,0,.08,1.52,.21,2.84,.21,4.16,.22,76.8,.43,153.61,.63,230.41,.03,12.24-6.19,18.46-18.51,18.46Zm-166.18-64.32v-68.51c11.44-1.37,22.76-2.32,34.11-.2,17.74,3.32,27.38,15.27,26.82,33.31-.65,21.01-11.62,33.03-33.29,35.25-9.02,.92-18.21,.15-27.65,.15Zm99.56-40.7h12.2v12.55h-24.54v27.84h-15.72v-68.73h42.09v12.38h-26.36v15.96h12.33Z" }, void 0, false, {
    fileName: "app/assets/icons/Pdf.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M144.5,274.36c4.94-8.38,4.53-22.5-.84-29.26-5.07-6.38-15.77-9.23-24.38-6.39v44.67c10.83,2.08,20.85-1.59,25.23-9.02Z" }, void 0, false, {
    fileName: "app/assets/icons/Pdf.tsx",
    lineNumber: 5,
    columnNumber: 1648
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M77.69,246.7c-.47-4.72-3.23-7.89-8.28-8.78-2.66-.47-5.47-.37-8.18-.15-.79,.07-2.09,1.43-2.11,2.23-.18,6.07-.1,12.15-.1,19.15,4.29-.5,8.3-.46,11.99-1.54,4.67-1.37,7.15-6.08,6.67-10.92Z" }, void 0, false, {
    fileName: "app/assets/icons/Pdf.tsx",
    lineNumber: 5,
    columnNumber: 1775
  }, this)
] }, void 0, true, {
  fileName: "app/assets/icons/Pdf.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Pdf_default = Pdf;

// app/assets/icons/Receipt.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
var Receipt = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 40 359.21 335.5", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("path", { d: "M95.72,191.66v-4.46c0-57.75,.19-115.49-.17-173.23-.07-10.57,9.73-17.66,19.32-11.91,4.36,2.61,9.18,4.46,13.62,6.95,2.37,1.33,4.26,1.14,6.53-.09,4.48-2.42,9.16-4.49,13.64-6.93,4.67-2.55,9.15-2.59,13.84-.06,4.93,2.65,9.95,5.14,15.04,7.47,1.14,.52,2.92,.54,4.05,.03,5.32-2.42,10.54-5.07,15.74-7.73,4.33-2.21,8.54-2.18,12.86,.08,4.74,2.48,9.63,4.68,14.3,7.28,2.25,1.25,4.01,1.09,6.16-.09,4.59-2.5,9.33-4.71,13.95-7.16,4.42-2.34,8.74-2.4,13.19-.07,4.85,2.53,9.84,4.8,14.65,7.4,1.96,1.06,3.48,1.14,5.48,.08,5.05-2.69,10.26-5.08,15.36-7.67,4.08-2.07,8.09-2.06,12.16,0,5.1,2.6,10.17,5.27,15.4,7.58,1.42,.63,3.59,.59,5.01-.04,5.12-2.25,10.03-4.96,15.08-7.37,9.56-4.56,18.25,.85,18.25,11.36,.01,94.41,.02,188.83,0,283.24,0,21.95-17.16,38.72-39.18,39.14-13.13,.26-25.58-1.23-36.69-8.87-9.9-6.8-17.2-15.45-19.51-27.59-.37-1.94-.4-3.96-.4-5.95-.03-24.94,0-49.89-.02-74.83,0-16.66-9.87-26.58-26.44-26.58-45.4,0-90.8,0-136.19,0-1.49,0-2.98,0-5.04,0ZM227.64,95.85c23.56,0,47.13,.04,70.69-.02,9.4-.02,15.52-8.44,11.94-16.42-2.48-5.53-7.19-7.54-13.05-7.54-46.63,.03-93.26,.01-139.88,.02-.87,0-1.75-.04-2.62,.06-8.22,.93-13.32,9.07-10.08,16.37,2.39,5.38,6.96,7.52,12.67,7.52,23.44,0,46.88,0,70.32,0Zm23.75,59.88c15.58,0,31.16,.03,46.73-.01,7.54-.02,13.08-5.09,13.17-11.92,.08-6.46-5.55-11.98-12.75-11.99-31.53-.08-63.06-.07-94.59,0-6.71,.01-11.82,4.79-12.38,11.13-.5,5.62,3.61,10.88,9.78,12.34,1.55,.37,3.2,.44,4.81,.44,15.08,.03,30.16,.02,45.24,.02Z" }, void 0, false, {
    fileName: "app/assets/icons/Receipt.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("path", { d: "M125.2,215.62c33.67,0,67.33,0,101,0,8.49,0,13.22,4.69,13.23,13.11,.01,20.45,.24,40.9-.08,61.35-.22,14.57,4.48,26.82,15.12,36.78,.82,.77,1.78,1.47,2.33,2.41,.75,1.28,2.01,3.31,1.54,4.02-.75,1.13-2.74,2-4.21,2-62.6,.09-125.19,.27-187.79-.07-18.15-.1-35.03-4.98-47.86-19.06-9.75-10.7-14.64-23.73-16.17-37.82C.91,265.37,.34,252.28,0,239.22c-.33-12.95,10.5-23.57,23.45-23.59,33.92-.05,67.83-.02,101.75-.02Z" }, void 0, false, {
    fileName: "app/assets/icons/Receipt.tsx",
    lineNumber: 5,
    columnNumber: 1447
  }, this)
] }, void 0, true, {
  fileName: "app/assets/icons/Receipt.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Receipt_default = Receipt;

// app/assets/icons/Medicine.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
var Medicine = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 40 400.21 408.87", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("path", { d: "M51.02,0c63.88,0,127.75,0,191.63,0,.45,.25,.88,.62,1.37,.73,13.2,3.13,23.16,14.3,23.17,30.86,0,14.64,.03,29.27-.01,43.91-.03,7.82-2.09,15-7.5,20.88-2.05,2.23-4.44,4.15-6.79,6.33,.74,.92,1.46,1.86,2.22,2.76,9.16,10.72,18.28,21.48,27.53,32.12,7.58,8.71,11.21,18.71,11.14,30.28-.15,27.01-.05,54.02-.04,81.03,0,1.37,.12,2.75,.2,4.39,16.55-5.47,32.74-5.9,49.03-1.19,31.96,9.23,55.02,38.22,57.07,71.64,1.34,21.91-5.2,41.16-19.53,57.66-24.09,27.76-63.8,35.55-96.82,18.34-2.2-1.14-3.67-1.15-5.62,.43-7.4,6.02-15.99,8.64-25.49,8.64-70.78-.02-141.57,.23-212.35-.13-27.81-.14-44.34-24.43-39.35-53.32H5.61c55.08,0,110.17,.03,165.25-.05,3.95,0,8.01-.31,11.82-1.26,17.21-4.25,31.13-20.15,30.95-41.27-.29-33.79-.01-67.59-.16-101.38-.02-4.46-.54-9.08-1.77-13.35-4.77-16.52-20.88-29.23-40.65-29.1-54.95,.35-109.9,.12-164.85,.12-1.06,0-2.13-.07-3.19,.01-2.02,.17-3.2-.63-2.8-2.72,1.07-5.56,1.23-11.62,3.68-16.52,3.26-6.55,8.03-12.45,12.69-18.18,8.03-9.86,16.47-19.37,24.84-29.14-8.34-5.75-13.99-13.11-14.22-23.12-.39-17.15-.27-34.33-.03-51.49,.12-8.39,3.68-15.64,10.36-20.68,4.02-3.03,8.96-4.86,13.48-7.23ZM346.66,282.93c-21.71-13.26-50.2-8.18-67.28,11.96-16.01,18.88-14.89,46.25-4.67,60.06,23.92-23.94,47.85-47.9,71.95-72.02ZM213.04,79.74c0-5.64,.55-11.23-.15-16.66-.72-5.55-6.73-9.61-12.54-9.62-5.81,0-11.83,4.05-12.55,9.59-.71,5.43-.15,11.02-.15,16.68h25.4Zm-106.14-.02c0-4.95,.22-9.46-.05-13.95-.4-6.57-5.67-11.78-12.01-12.28-6.64-.53-13.02,3.79-13.94,10.43-.72,5.15-.14,10.48-.14,15.8h26.15Zm53.77-.05c-.42-5.87-.25-11.85-1.44-17.55-1.16-5.57-7.39-9.05-13.26-8.64-5.76,.4-11.27,4.97-11.8,10.6-.48,5.09-.1,10.26-.1,15.59h26.6Z" }, void 0, false, {
    fileName: "app/assets/icons/Medicine.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("path", { d: "M.38,328.92V195.52H4.8c55.08,0,110.16,.15,165.24-.13,10.8-.05,17.23,6.21,17.15,17.09-.24,33.13-.07,66.25-.1,99.38,0,11.76-5.35,17.05-17.07,17.05-54.95,0-109.89,0-164.84,0-1.45,0-2.91,0-4.81,0Zm93.23-80.24v-.21c9.44,0,18.89,.28,28.31-.1,6.65-.27,11.39-5.88,11.51-12.5,.15-8.31-5.61-13.61-15.12-13.65-16.35-.07-32.71-.03-49.06,0-1.19,0-2.39,.11-3.57,.27-7.84,1.07-12.44,6.97-11.59,14.81,.72,6.67,5.91,11.17,13.6,11.33,8.64,.18,17.28,.04,25.93,.04Zm-13.43,53.21v.05c4.25,0,8.5,.05,12.75,0,8.05-.11,13.73-5.3,13.99-12.72,.26-7.41-5.55-13.42-13.6-13.67-7.03-.22-14.08-.12-21.12-.03-2.9,.04-5.88,.08-8.68,.73-6.43,1.51-10.12,7.27-9.46,14.16,.6,6.3,5.71,11.23,12.18,11.46,4.64,.17,9.3,.03,13.94,.03Z" }, void 0, false, {
    fileName: "app/assets/icons/Medicine.tsx",
    lineNumber: 5,
    columnNumber: 1629
  }, this)
] }, void 0, true, {
  fileName: "app/assets/icons/Medicine.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Medicine_default = Medicine;

// app/assets/icons/Alert.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
var Alert = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 319.53 319.56", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("path", { d: "M0,159.92C-.37,72.16,71.57,.13,159.73,0c87.96-.13,159.9,71.82,159.8,159.81-.1,88.04-70.97,159.01-159.52,159.74C72.55,320.27,.37,248.27,0,159.92Zm159.74,127.48c70.4,.05,127.77-57.36,127.62-127.69-.15-70.47-56.71-127.09-127.4-127.54-70.09-.45-127.59,56.92-127.8,127.5-.21,70.29,57.11,127.68,127.58,127.73Z" }, void 0, false, {
    fileName: "app/assets/icons/Alert.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("path", { d: "M143.69,135.59c0-12.84-.07-25.68,.03-38.52,.07-9.18,4.85-15.17,13.22-16.96,8.3-1.78,17.18,4.32,18.52,12.76,.25,1.59,.37,3.22,.37,4.84,.02,25.43,.05,50.86,0,76.29-.02,9.43-4.5,15.44-12.7,17.37-8.87,2.09-18.28-4.08-19.02-13.17-.66-8.18-.35-16.43-.42-24.65-.05-5.98,0-11.97,0-17.95Z" }, void 0, false, {
    fileName: "app/assets/icons/Alert.tsx",
    lineNumber: 5,
    columnNumber: 320
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("path", { d: "M159.83,207.69c8.85,.02,15.83,6.94,15.94,15.81,.11,8.99-7.01,16.1-16.07,16.04-8.97-.06-15.89-6.91-15.95-15.8-.06-8.98,7.05-16.07,16.08-16.05Z" }, void 0, false, {
    fileName: "app/assets/icons/Alert.tsx",
    lineNumber: 5,
    columnNumber: 611
  }, this)
] }, void 0, true, {
  fileName: "app/assets/icons/Alert.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Alert_default = Alert;

// app/assets/icons/BriefCase.tsx
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime());
var BriefCase = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: "BriefCase" }, void 0, false, {
    fileName: "app/assets/icons/BriefCase.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
var BriefCase_default = BriefCase;

// app/assets/icons/IdCard.tsx
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime());
var IdCard = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("path", { d: "M528 32h-480C21.49 32 0 53.49 0 80V96h576V80C576 53.49 554.5 32 528 32zM0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48V128H0V432zM368 192h128C504.8 192 512 199.2 512 208S504.8 224 496 224h-128C359.2 224 352 216.8 352 208S359.2 192 368 192zM368 256h128C504.8 256 512 263.2 512 272S504.8 288 496 288h-128C359.2 288 352 280.8 352 272S359.2 256 368 256zM368 320h128c8.836 0 16 7.164 16 16S504.8 352 496 352h-128c-8.836 0-16-7.164-16-16S359.2 320 368 320zM176 192c35.35 0 64 28.66 64 64s-28.65 64-64 64s-64-28.66-64-64S140.7 192 176 192zM112 352h128c26.51 0 48 21.49 48 48c0 8.836-7.164 16-16 16h-192C71.16 416 64 408.8 64 400C64 373.5 85.49 352 112 352z" }, void 0, false, {
  fileName: "app/assets/icons/IdCard.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/IdCard.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var IdCard_default = IdCard;

// app/assets/icons/Droplet.tsx
var import_jsx_dev_runtime21 = __toESM(require_jsx_dev_runtime());
var Droplet = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("path", { d: "M16 319.1C16 245.9 118.3 89.43 166.9 19.3C179.2 1.585 204.8 1.585 217.1 19.3C265.7 89.43 368 245.9 368 319.1C368 417.2 289.2 496 192 496C94.8 496 16 417.2 16 319.1zM112 319.1C112 311.2 104.8 303.1 96 303.1C87.16 303.1 80 311.2 80 319.1C80 381.9 130.1 432 192 432C200.8 432 208 424.8 208 416C208 407.2 200.8 400 192 400C147.8 400 112 364.2 112 319.1z" }, void 0, false, {
  fileName: "app/assets/icons/Droplet.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Droplet.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Droplet_default = Droplet;

// app/assets/icons/Pressure.tsx
var import_jsx_dev_runtime22 = __toESM(require_jsx_dev_runtime());
var Pressure = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
  "svg",
  {
    style: {
      fill: "#fff",
      stroke: "#9381E5",
      scale: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "20px"
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 390.45 368.59",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("style", {}, void 0, false, {
        fileName: "app/assets/icons/Pressure.tsx",
        lineNumber: 17,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        "path",
        {
          d: "M306.7,44.94s-17.41-36.4-68.04-32.7-73.32,37.45-73.32,37.45c0,0-40.09-50.11-90.2-37.71S11.8,61.33,10.24,86.61c-2.46,40.04,13.11,81.23,75.97,129.23s78.59,48,78.59,48l22.68-9.41"
        },
        void 0,
        false,
        {
          fileName: "app/assets/icons/Pressure.tsx",
          lineNumber: 18,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("circle", { cx: "284", cy: "165.62", r: "96.45" }, void 0, false, {
        fileName: "app/assets/icons/Pressure.tsx",
        lineNumber: 21,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("line", { x1: "284", y1: "87.66", x2: "284", y2: "69.17" }, void 0, false, {
        fileName: "app/assets/icons/Pressure.tsx",
        lineNumber: 22,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("line", { x1: "283.84", y1: "262.07", x2: "283.84", y2: "243.57" }, void 0, false, {
        fileName: "app/assets/icons/Pressure.tsx",
        lineNumber: 23,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("line", { x1: "206.05", y1: "165.67", x2: "187.55", y2: "165.67" }, void 0, false, {
        fileName: "app/assets/icons/Pressure.tsx",
        lineNumber: 24,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("circle", { cx: "283.84", cy: "165.62", r: "19" }, void 0, false, {
        fileName: "app/assets/icons/Pressure.tsx",
        lineNumber: 25,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("line", { x1: "336.23", y1: "114.56", x2: "297.94", y2: "152.88" }, void 0, false, {
        fileName: "app/assets/icons/Pressure.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("path", { d: "M258.46,262.07v21.45s-.82,7.22,2.87,13.02,9.87,10.02,9.87,10.02h25.46s6.87-2.17,10.03-6.62,3.16-15.62,3.16-15.62v-22.25h-51.4Z" }, void 0, false, {
        fileName: "app/assets/icons/Pressure.tsx",
        lineNumber: 27,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        "path",
        {
          d: "M297.73,310.32v37.38s-3.48,11.08-13.61,10.88-13.29-11.27-13.29-11.27v-36.99"
        },
        void 0,
        false,
        {
          fileName: "app/assets/icons/Pressure.tsx",
          lineNumber: 28,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  true,
  {
    fileName: "app/assets/icons/Pressure.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
);
var Pressure_default = Pressure;

// app/assets/icons/Frecuence.tsx
var import_jsx_dev_runtime23 = __toESM(require_jsx_dev_runtime());
var Frecuence = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
  "svg",
  {
    style: {
      fill: "#fff",
      stroke: "#9381E5",
      scale: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "20px"
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 342.11 272.01",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("path", { d: "M23.36,115.74S4.11,43.56,69.78,17.1c65.67-26.46,108.36,29.54,108.36,29.54,0,0,28.94-50.69,98.59-32.31,35.19,9.28,62.74,45.71,53.62,89.28-7.22,34.49-43.54,76.12-62.77,95.47-42.8,43.07-90.77,62.93-90.77,62.93l-74.86-50.99" }, void 0, false, {
        fileName: "app/assets/icons/Frecuence.tsx",
        lineNumber: 17,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("polyline", { points: "10 161.7 81.21 161.7 119.19 117.1 167 183.11 214.92 108.78 251.32 161.7 294.84 160.19" }, void 0, false, {
        fileName: "app/assets/icons/Frecuence.tsx",
        lineNumber: 18,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  true,
  {
    fileName: "app/assets/icons/Frecuence.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
);
var Frecuence_default = Frecuence;

// app/assets/icons/Temperature.tsx
var import_jsx_dev_runtime24 = __toESM(require_jsx_dev_runtime());
var Temperature = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-40 0  236.58 383.4",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("g", { id: "a" }, void 0, false, {
        fileName: "app/assets/icons/Temperature.tsx",
        lineNumber: 9,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("g", { id: "b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("g", { id: "c", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M119.8,138.09c0,30.69,.03,61.37-.06,92.06,0,2.56,.7,4.33,2.49,6.2,19.95,20.73,26.61,45.2,17.94,72.63-8.76,27.75-28.5,44.49-57.11,49.32C37.47,365.98-3.2,328.39,.2,282.23c1.3-17.68,8.3-33,20.97-45.5,2.16-2.13,2.89-4.21,2.89-7.16-.08-60.5-.11-121-.04-181.5C24.05,21.11,45.57-.17,72.37,0c25.85,.17,47.05,21.26,47.43,47.16,0,.25,0,.5,0,.75,0,30.06,0,60.12,0,90.19ZM42.39,216.61c0,7.47-.27,14.51,.08,21.52,.31,6.18-2.32,10.65-8.18,14.54-21.14,18.25-17.88,47.11-3.66,68.4,16.38,21.06,47.4,23.7,69.86,11.99,29.02-19.55,29.76-55.95,8.34-80.87-5.23-3.55-7.65-7.68-7.45-13.28,.27-7.69,.07-15.4,.07-23.1,0-56.98,.04-113.96-.03-170.94-.02-16.98-17.74-28.65-37-24.61-13.92,2.92-23.2,14.99-21.4,23.84,4.23,0,8.52-.02,12.81,0,9.39,.05,16.05,5.15,16.07,12.28,.02,7.14-6.63,12.29-15.99,12.35-4.4,.03-8.8,0-13.17,0v24.65c4.64,0,8.93-.02,13.22,0,9.33,.06,15.99,5.25,15.94,12.39-.05,7.13-6.7,12.19-16.12,12.25-4.39,.03-8.78,0-13.16,0v24.65c4.48,0,8.74-.02,13.01,0,9.49,.04,16.14,5.01,16.28,12.12,.13,7.28-6.59,12.47-16.25,12.52-4.38,.02-8.77,0-12.99,0v24.65c4.85,0,9.43-.05,14.01,.01,8.67,.12,15.16,5.37,15.22,12.21,.06,6.86-6.4,12.24-15,12.4-4.6,.08-9.21,.01-14.51,.01Z" }, void 0, false, {
        fileName: "app/assets/icons/Temperature.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/assets/icons/Temperature.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/assets/icons/Temperature.tsx",
        lineNumber: 10,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  true,
  {
    fileName: "app/assets/icons/Temperature.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
);
var Temperature_default = Temperature;

// app/assets/icons/Weight.tsx
var import_jsx_dev_runtime25 = __toESM(require_jsx_dev_runtime());
var Weight = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 449.91 484.34",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("path", { d: "M378,484.34H78.27c-.74-.24-1.47-.55-2.23-.71-19.05-3.85-31.73-14.87-36.63-33.76-2.12-8.18-2.8-16.74-3.95-25.15-5.91-43.36-11.76-86.73-17.61-130.1C12.23,252.96,6.79,211.29,.96,169.66c-1.8-12.85-1.64-25.14,5.54-36.46,9.6-15.14,23.66-22.03,41.36-22.02,26.94,0,53.89-.1,80.83,.07,7.71,.05,14.19-2.14,19.46-7.83,1.6-1.73,3.33-3.36,5.08-4.94,21.65-19.57,47.19-29.39,76.26-28.9,29.8,.5,55.54,11.53,76.55,32.8,6.18,6.26,13.1,9.03,21.9,8.92,24.73-.31,49.48-.25,74.21-.07,29.08,.21,50.53,23.26,47.44,50.46-4.67,40.99-9.24,81.99-13.79,122.99-5.82,52.43-11.55,104.86-17.36,157.29-1.33,12.02-6.14,22.36-15.15,30.61-7.21,6.59-15.99,9.76-25.31,11.78ZM225.53,220.67v.65c-53.88,0-107.76-.01-161.65,.01-9.83,0-14.13,4.76-13.13,14.51,.61,5.95,1.4,11.88,2.18,17.81,7.77,59.31,15.55,118.61,23.31,177.92,1.41,10.78,5.99,14.98,16.74,14.98,90.28,.01,180.55,.01,270.83,0,9.42,0,14.68-4.48,15.75-13.91,2.12-18.61,3.99-37.26,5.99-55.89,3.31-30.84,6.64-61.68,9.94-92.51,1.79-16.75,3.54-33.51,5.33-50.26,.47-4.39-.45-8.56-4.34-10.74-2.85-1.6-6.5-2.46-9.79-2.47-53.72-.15-107.45-.1-161.17-.1Zm.22-36.2c25.04,0,50.09,0,75.13,0,7.35,0,8.7-1.49,7.94-8.64-4.02-38.11-33.22-68.34-71.19-73.69-46.92-6.61-89.9,27.15-94.26,74.04-.65,6.96,.56,8.28,7.71,8.29,24.89,.01,49.77,0,74.66,0ZM52.76,132.94c-2.83,0-5.67-.11-8.5,.02-13.08,.62-22.95,8.19-24.13,20.13-.68,6.87,.82,14.04,1.97,20.97,.57,3.44,3.7,5.15,7.25,4.48,3.44-.65,5.65-2.98,5.41-6.67-.25-3.91-.86-7.81-1.46-11.69-1.29-8.35,2.84-13.49,11.2-13.63,5.51-.09,11.02,.06,16.52-.05,5.33-.11,8.53-2.82,8.45-6.9-.08-3.92-3.14-6.45-8.22-6.65-2.83-.11-5.66-.02-8.5-.02Zm-11.37,71.48c-.45-2.68-.9-6.26-1.69-9.77-.9-3.97-3.67-5.91-7.65-5.19-4.03,.73-5.7,3.7-5.34,7.63,.3,3.27,.84,6.53,1.47,9.76,.77,3.96,3.39,6.2,7.34,5.72,3.91-.48,5.93-3.2,5.87-8.15Z" }, void 0, false, {
        fileName: "app/assets/icons/Weight.tsx",
        lineNumber: 9,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("path", { d: "M348.88,60.28c-2.9-2.46-5.64-4.76-8.37-7.08-4.83-4.1-5.84-7.78-3.08-11.18,2.82-3.49,6.9-3.14,11.92,1.04,2.77,2.3,5.54,4.61,8.62,7.16,2.49-2.72,4.71-5.61,7.42-7.92,1.48-1.26,4.12-2.51,5.63-2,1.47,.5,2.91,3.2,3.08,5.04,.69,7.66,.8,15.38,1.29,23.06,.28,4.44-1.77,6.26-6.03,6.51-7.53,.43-15.04,1.27-22.57,1.51-2.06,.07-5.45-.91-5.94-2.25-.66-1.78,.46-4.68,1.66-6.57,1.65-2.61,4.07-4.74,6.39-7.31Z" }, void 0, false, {
        fileName: "app/assets/icons/Weight.tsx",
        lineNumber: 10,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("path", { d: "M94.23,50.61c3.08-2.62,5.76-5.04,8.59-7.26,3.47-2.72,7.26-2.57,9.77,.18,2.64,2.9,2.29,6.81-1.08,9.99-2.5,2.36-5.18,4.53-8.12,7.08,2.43,2.74,4.97,5.13,6.87,7.94,.99,1.46,1.69,4.09,1.01,5.43-.69,1.37-3.26,2.59-4.95,2.53-8.33-.32-16.65-1.04-24.96-1.73-3.36-.28-5.08-2.27-4.91-5.7,.4-8.02,.66-16.05,1.36-24.04,.15-1.73,1.63-4.36,2.98-4.7,1.67-.42,4.23,.64,5.7,1.89,2.72,2.33,4.93,5.26,7.76,8.4Z" }, void 0, false, {
        fileName: "app/assets/icons/Weight.tsx",
        lineNumber: 11,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("path", { d: "M240.88,0c8.54,1.32,17.09,2.51,25.6,4.02,4.56,.81,6.68,4.09,5.83,8.11-.77,3.65-3.89,5.62-8.33,5.02-8.25-1.11-16.49-2.31-24.72-3.56-4.31-.66-6.89-3.6-6.55-7.21,.37-3.89,3.52-6.25,8.17-6.39Z" }, void 0, false, {
        fileName: "app/assets/icons/Weight.tsx",
        lineNumber: 12,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("path", { d: "M216.86,7.21c-.27,3.32-1.9,5.82-5.53,6.43-8.97,1.51-17.94,3.07-26.96,4.25-3.43,.45-6.16-1.4-6.95-5.01-.82-3.74,.59-7.01,4.32-7.75,9.37-1.85,18.84-3.34,28.32-4.51,3.77-.46,6.7,2.82,6.8,6.58Z" }, void 0, false, {
        fileName: "app/assets/icons/Weight.tsx",
        lineNumber: 13,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("path", { d: "M162.47,21.64c-.78,.88-2.01,3.27-3.96,4.3-7.63,4.02-15.44,7.69-23.26,11.31-3.99,1.84-7.8,.62-9.37-2.61-1.62-3.33-.48-7.22,3.3-9.16,7.81-4.01,15.69-7.9,23.73-11.42,5-2.19,9.69,1.03,9.55,7.57Z" }, void 0, false, {
        fileName: "app/assets/icons/Weight.tsx",
        lineNumber: 14,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("path", { d: "M324.91,29.19c-.21,6.42-5.25,8.88-10.9,6.33-7.3-3.3-14.55-6.7-21.81-10.06-.43-.2-.84-.42-1.25-.66-3.28-1.95-4.63-4.77-3.19-8.38,1.46-3.64,4.73-5.16,8.1-3.74,8.81,3.71,17.46,7.84,25.98,12.17,1.64,.83,2.42,3.36,3.08,4.34Z" }, void 0, false, {
        fileName: "app/assets/icons/Weight.tsx",
        lineNumber: 15,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("path", { d: "M233.51,165.53c-1.76,2.04-3.09,4.99-4.88,5.31-2.52,.45-6.18-.21-7.98-1.88-6.33-5.86-12.08-12.35-18.04-18.6-4.01-4.21-8.15-8.31-11.91-12.73-.95-1.12-.72-3.25-1.04-4.91,1.83-.08,4.26-.98,5.38-.13,11.78,8.9,23.39,18.03,34.91,27.26,1.43,1.15,2.09,3.27,3.55,5.69Z" }, void 0, false, {
        fileName: "app/assets/icons/Weight.tsx",
        lineNumber: 16,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  true,
  {
    fileName: "app/assets/icons/Weight.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
);
var Weight_default = Weight;

// app/assets/icons/Size.tsx
var import_jsx_dev_runtime26 = __toESM(require_jsx_dev_runtime());
var Size = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 236.58 383.4",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("path", { d: "M24.49,383.4c-.31-.2-.59-.48-.92-.57-14.9-4.05-22.81-14.3-22.83-29.75-.03-25.5,0-51.01,0-76.51,0-30.63,.09-61.26-.02-91.89C.53,133.07,.2,81.47,0,29.86-.05,15.85,7.48,5.06,19.91,1.37,22.85,.49,26.04,.08,29.12,.07,58.25-.02,87.38,.06,116.51,0c15.45-.03,29.55,11.15,29.5,29.41-.25,94.52-.15,189.04-.08,283.55,0,12.71,.61,25.43,.68,38.14,.12,19.86-11.58,31.54-31.33,31.54-6.38,0-12.75-.04-19.13,.03-1.13,.01-2.26,.47-3.39,.72H24.49Zm-5.75-47.42c0,5.95-.03,11.54,0,17.14,.06,8.5,3.89,12.33,12.46,12.26,28.21-.21,56.42-.5,84.63-.73,8.91-.07,12.88-3.89,12.78-12.79-.18-17.47-.68-34.93-.69-52.4-.07-89.4-.13-178.8,.1-268.2,.02-9.59-4.44-13.4-13.62-13.3-18.25,.19-36.51,.06-54.76,.06-10.25,0-20.51-.04-30.76,.02-5.46,.03-9.98,2.99-10.36,7.85-.55,7.03-.14,14.14-.14,21.55,1.47,0,2.82,0,4.18,0,7,0,14.01-.09,21.01,.04,5.91,.1,9.77,3.89,9.69,9.19-.08,5.16-3.88,8.69-9.65,8.75-7.13,.08-14.25,.01-21.38,.03-1.31,0-2.63,.12-4.23,.2,0,8.65-.08,16.89,.14,25.11,.02,.7,1.98,1.91,3.05,1.92,10.25,.15,20.51,.15,30.76,.06,4.84-.04,9.7-.73,14.52-.52,5.65,.25,9.04,5.4,7.69,10.92-1.11,4.55-4.4,6.77-10.24,6.87-14.22,.26-28.44,.5-42.66,.77-.96,.02-1.92,.18-3.26,.32v25.92c1.85,0,3.19,0,4.53,0,7,0,14.01-.07,21.01,.03,5.84,.09,9.59,3.54,9.73,8.69,.14,5.4-3.52,9.08-9.56,9.23-6.5,.16-13,.04-19.5,.05-1.95,0-3.89,0-5.91,0v27.24c1.65,0,3.02,0,4.38,0,14,0,28.01-.02,42.01,.02,5.03,.01,8.24,2.28,9.4,6.41,1.75,6.25-2.47,11.51-9.5,11.55-13.88,.09-27.76,.02-41.64,.04-1.31,0-2.63,.12-4,.18v26.95c1.54,0,2.87,0,4.21,0,7.13,0,14.26-.08,21.38,.03,5.67,.09,9.46,3.82,9.46,9,0,5.22-3.78,8.89-9.46,8.94-8.46,.08-16.92,.02-25.55,.02v27.24c3.86,0,7.46,0,11.07,0,11,0,22.01,0,33.01,0,1.25,0,2.51-.02,3.74,.12,5.18,.58,8.64,4.4,8.42,9.25-.21,4.79-3.66,8.45-8.72,8.52-12.25,.18-24.51,.07-36.76,.13-3.48,.02-8.42-1.1-10.04,.7-1.86,2.07-.89,6.78-.96,10.35-.1,5.33-.03,10.66-.03,16.28,9.08,0,17.57-.07,26.05,.03,5.33,.06,8.96,3.52,9.2,8.41,.24,5.07-3.23,9.06-8.59,9.45-3.73,.27-7.5,.09-11.25,.1-4.98,0-9.96,0-15.4,0Z" }, void 0, false, {
        fileName: "app/assets/icons/Size.tsx",
        lineNumber: 9,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("path", { d: "M209.46,313.1c3.73-5.82,6.6-10.89,10.08-15.5,1.6-2.12,4.16-4.02,6.67-4.81,3.44-1.09,6.69,.39,8.75,3.55,2.28,3.5,2.08,7.09-.15,10.56-5.81,9.04-11.63,18.07-17.45,27.1-3.05,4.73-6.04,9.48-9.16,14.16-4.3,6.44-11.65,6.34-15.9-.16-9.02-13.79-18.06-27.57-27.02-41.41-2.02-3.13-1.73-6.44,.28-9.53,2.02-3.09,5.94-4.81,9.52-3.45,2.37,.9,4.8,2.56,6.32,4.56,3.29,4.33,6.01,9.1,9.51,14.53V69.2c-3.58,5.53-6.39,10.48-9.84,14.92-1.7,2.19-4.38,4.17-7,4.97-3.48,1.06-6.58-.83-8.63-3.9-2.09-3.13-1.97-6.42-.02-9.54,3.91-6.25,8-12.38,11.89-18.64,4.59-7.39,8.97-14.92,13.6-22.29,4.92-7.83,12.16-7.76,17.19,.02,8.47,13.12,17.07,26.16,25.27,39.44,1.48,2.4,2,5.83,1.82,8.71-.2,3.2-2.36,5.72-5.93,6.29-3.66,.58-6.75-.54-8.86-3.6-2.98-4.32-5.76-8.77-8.64-13.15-.58-.89-1.24-1.72-2.31-3.19v243.85Z" }, void 0, false, {
        fileName: "app/assets/icons/Size.tsx",
        lineNumber: 10,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  true,
  {
    fileName: "app/assets/icons/Size.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
);
var Size_default = Size;

// app/assets/icons/Error.tsx
var import_jsx_dev_runtime27 = __toESM(require_jsx_dev_runtime());
var Error2 = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 80 320 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" }, void 0, false, {
  fileName: "app/assets/icons/Error.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Error.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Error_default = Error2;

// app/assets/icons/Check.tsx
var import_jsx_dev_runtime28 = __toESM(require_jsx_dev_runtime());
var Check = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M493.3 128l-22.6 22.6-256 256L192 429.3l-22.6-22.6-128-128L18.7 256 64 210.7l22.6 22.6L192 338.7 425.4 105.4 448 82.7 493.3 128z" }, void 0, false, {
  fileName: "app/assets/icons/Check.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Check.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Check_default = Check;

// app/assets/icons/LightBulb.tsx
var import_jsx_dev_runtime29 = __toESM(require_jsx_dev_runtime());
var LightBulb = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("path", { d: "M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM192 0C90.02 .3203 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.8 289.2 .0039 192 0zM288.4 260.1c-15.66 17.85-35.04 46.3-49.05 75.89h-94.61c-14.01-29.59-33.39-58.04-49.04-75.88C75.24 236.8 64 206.1 64 175.1C64 113.3 112.1 48.25 191.1 48C262.6 48 320 105.4 320 175.1C320 206.1 308.8 236.8 288.4 260.1zM176 80C131.9 80 96 115.9 96 160c0 8.844 7.156 16 16 16S128 168.8 128 160c0-26.47 21.53-48 48-48c8.844 0 16-7.148 16-15.99S184.8 80 176 80z" }, void 0, false, {
  fileName: "app/assets/icons/LightBulb.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/LightBulb.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var LightBulb_default = LightBulb;

// app/assets/icons/Home.tsx
var import_jsx_dev_runtime30 = __toESM(require_jsx_dev_runtime());
var Home = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 511.2 511.26",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("path", { d: "M195.82,511.26H102c-.74-.32-1.45-.78-2.23-.94-25.58-5-44.36-26.13-44.61-52.03-.48-49.73-.21-99.47-.25-149.2,0-1.94,0-3.87,0-5.9-5.76-.38-10.97-.16-15.94-1.15-18.52-3.67-31.21-14.54-36.69-32.63-5.54-18.29-.88-34.46,12.61-47.96C83.68,152.62,152.48,83.8,221.38,15.09c3.82-3.81,8.33-7.28,13.11-9.73,19.2-9.84,39.92-5.95,56.05,10.17,65.89,65.84,131.67,131.79,197.69,197.51,10.38,10.33,20.08,20.75,22.96,35.73v13.97c-.29,.58-.7,1.13-.84,1.75-4.59,20.58-17.28,33.14-37.78,37.54-5.08,1.09-10.46,.79-16.15,1.15,0,2.24,0,4.2,0,6.15-.03,49.51,.14,99.02-.17,148.52-.15,23.35-15.71,43.61-37.91,50.77-2.96,.95-5.96,1.75-8.94,2.62h-93.82c-8.36-3.94-11.13-10.55-11.05-19.69,.32-37.75,.14-75.5,.13-113.25,0-16.91-9.94-27.09-26.77-27.23-14.8-.13-29.6-.12-44.4,0-16.87,.14-26.77,10.26-26.77,27.2-.02,37.75-.18,75.5,.12,113.25,.07,9.1-2.69,15.74-11.02,19.72Z" }, void 0, false, {
        fileName: "app/assets/icons/Home.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/assets/icons/Home.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
};
var Home_default = Home;

// app/assets/icons/Date.tsx
var import_jsx_dev_runtime31 = __toESM(require_jsx_dev_runtime());
var Date2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 383.26 383.39",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("path", { d: "M383.26,158.69v189.38c-.2,.31-.53,.6-.57,.93-2.26,17.06-18.7,34.47-42.56,34.39-99.29-.33-198.59-.13-297.88-.14-24.36,0-42.22-17.86-42.23-42.21-.01-59.38,0-118.75,0-178.13,0-1.32,0-2.64,0-4.22H383.26Zm-194.99,112.33c1.09-1.15,1.95-2.02,2.77-2.93,10.7-11.85,14.57-25.63,11.01-41.19-4.63-20.2-23.43-34.86-43.79-34.52-21,.34-39.21,15.12-43.56,35.36-1.37,6.4,2.21,12.44,8.25,13.9,5.83,1.41,11.62-2.28,13.35-8.51,.27-.96,.48-1.93,.79-2.88,3.4-10.5,14.59-17.22,25.32-15.22,11.39,2.12,19.59,12.69,18.64,24.01-.95,11.25-10.27,20.26-21.41,20.69-7.44,.28-12.26,4.77-12.21,11.34,.05,6.4,4.87,10.86,12.04,11.14,11.43,.44,20.77,9.48,21.58,20.89,.8,11.26-7.17,21.51-18.49,23.77-10.78,2.15-22.23-4.66-25.47-15.42-.89-2.94-.9-6.14-1.51-9.18-1-4.93-5.31-8.54-10.3-8.82-4.48-.25-9.4,2.74-10.67,7.26-.81,2.9-.96,6.18-.58,9.19,3.45,27.05,28.48,42.58,51.47,39.1,21.91-3.31,39.65-25.06,37.73-47.12-1.05-12.14-5.98-22.21-14.98-30.85Zm58.97-56.19c0,2.23,0,3.85,0,5.47,0,38.8-.02,77.6,.02,116.39,0,7.57,4.67,12.84,11.16,12.86,6.57,.01,11.12-5.2,11.12-12.8,0-43.91,0-87.83,0-131.74,0-8.15-4.51-12.61-12.78-12.64-8.48-.03-16.97-.03-25.45,0-7.65,.02-12.72,4.49-12.75,11.17-.03,6.69,5.05,11.24,12.63,11.29,5.21,.03,10.42,0,16.06,0Z" }, void 0, false, {
          fileName: "app/assets/icons/Date.tsx",
          lineNumber: 10,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("path", { d: "M383.26,136.23H.24c-.09-1.3-.22-2.37-.22-3.45-.01-15.59-.05-31.18,0-46.78,.07-22.84,18.24-41,41.08-41.09,5.1-.02,10.19,0,15.79,0,0,7.4-.05,14.59,.01,21.77,.07,8.51,2.13,16.49,6.59,23.81,9.87,16.18,29.26,24.77,47.15,20.85,19.15-4.19,33.28-18.95,35.33-38.21,.97-9.11,.17-18.41,.17-27.92h90.39c0,7.1-.05,14.28,.01,21.46,.07,8.51,2.13,16.49,6.59,23.81,9.87,16.19,29.24,24.77,47.14,20.86,19.14-4.18,33.29-18.95,35.34-38.2,.97-9.11,.17-18.41,.17-27.52,24.54-3.5,49.97,2.41,56.89,33.54,.07,.34,.38,.62,.58,.93v56.14Z" }, void 0, false, {
          fileName: "app/assets/icons/Date.tsx",
          lineNumber: 11,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("path", { d: "M106.3,0c3.18,1.61,6.69,2.8,9.49,4.92,5.55,4.2,8.45,10.04,8.46,17.1,.03,15.21,.05,30.42,0,45.63-.05,12.39-10,22.17-22.44,22.17-12.44,0-22.39-9.78-22.43-22.17-.05-14.84-.02-29.67-.01-44.51,0-11.1,5.96-19.08,16.68-22.44,.45-.14,.85-.46,1.27-.7h8.98Z" }, void 0, false, {
          fileName: "app/assets/icons/Date.tsx",
          lineNumber: 12,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("path", { d: "M285.95,0c3.18,1.61,6.69,2.8,9.49,4.92,5.55,4.2,8.45,10.04,8.46,17.1,.03,15.21,.05,30.42,0,45.63-.05,12.39-10,22.17-22.44,22.17-12.44,0-22.39-9.78-22.43-22.17-.05-14.84-.02-29.67-.01-44.51,0-11.1,5.96-19.08,16.68-22.44,.45-.14,.85-.46,1.27-.7,2.99,0,5.99,0,8.98,0Z" }, void 0, false, {
          fileName: "app/assets/icons/Date.tsx",
          lineNumber: 13,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/assets/icons/Date.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
};
var Date_default = Date2;

// app/assets/icons/PaperClip.tsx
var import_jsx_dev_runtime32 = __toESM(require_jsx_dev_runtime());
var PaperClip = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("path", { d: "M396.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" }, void 0, false, {
  fileName: "app/assets/icons/PaperClip.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/PaperClip.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var PaperClip_default = PaperClip;

// app/assets/icons/Stethoscope.tsx
var import_jsx_dev_runtime33 = __toESM(require_jsx_dev_runtime());
var Stethoscope = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("path", { d: "M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" }, void 0, false, {
  fileName: "app/assets/icons/Stethoscope.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Stethoscope.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Stethoscope_default = Stethoscope;

// app/assets/icons/AngleUp.tsx
var import_jsx_dev_runtime34 = __toESM(require_jsx_dev_runtime());
var AngleUp = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-80 20 448 512", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("path", { d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" }, void 0, false, {
    fileName: "app/assets/icons/AngleUp.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this),
  " "
] }, void 0, true, {
  fileName: "app/assets/icons/AngleUp.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var AngleUp_default = AngleUp;

// app/assets/icons/AngleDown.tsx
var import_jsx_dev_runtime35 = __toESM(require_jsx_dev_runtime());
var AngleDown = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-80 20 448 512",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("path", { d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }, void 0, false, {
      fileName: "app/assets/icons/AngleDown.tsx",
      lineNumber: 9,
      columnNumber: 5
    }, this)
  },
  void 0,
  false,
  {
    fileName: "app/assets/icons/AngleDown.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
);
var AngleDown_default = AngleDown;

// app/assets/icons/Logout.tsx
var import_jsx_dev_runtime36 = __toESM(require_jsx_dev_runtime());
var Logout = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("path", { d: "M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z" }, void 0, false, {
  fileName: "app/assets/icons/Logout.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Logout.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Logout_default = Logout;

// app/assets/icons/Xmark.tsx
var import_jsx_dev_runtime37 = __toESM(require_jsx_dev_runtime());
var Xmark = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384.26 383.52", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("path", { d: "M384.13,86.21v211.09c-.31,1.56-.66,3.1-.91,4.67-7.64,47.41-47.49,81.39-95.52,81.41-63.71,.02-127.42,.02-191.13-.02-3.98,0-7.99-.25-11.94-.69-38-4.3-70.42-31.72-80.7-68.35-1.57-5.58-2.54-11.33-3.79-17.01V86.21c.3-1.56,.6-3.12,.91-4.68C9.04,40.79,32.79,14.37,72.94,2.96c4.39-1.25,8.96-1.9,13.44-2.83,70.5,0,141,0,211.5,0,.69,.24,1.36,.62,2.07,.7,37.93,4.51,70.1,31.79,80.39,68.36,1.57,5.59,2.55,11.34,3.8,17.01ZM24.47,191.55c0,32.84,0,65.69,0,98.53,0,2.88-.12,5.78,.17,8.63,3.53,34.33,31.95,60.28,66.49,60.35,67.39,.13,134.78,.06,202.16-.02,4.16,0,8.41-.33,12.47-1.19,32.36-6.83,53.97-33.38,54-66.39,.06-66.47,.03-132.94-.02-199.41,0-3.64-.31-7.31-.77-10.93-3.94-30.92-32.46-56.54-63.71-56.62-68.83-.18-137.66-.07-206.49,0-3.51,0-7.07,.45-10.5,1.2-32.44,7.04-53.76,33.42-53.81,66.54-.05,33.1-.01,66.21-.01,99.31Z" }, void 0, false, {
    fileName: "app/assets/icons/Xmark.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("path", { d: "M191.71,169.49c7.48-7.48,14.18-14.18,20.88-20.88,8.04-8.03,16.05-16.09,24.14-24.07,7.05-6.96,16.86-7.13,23.4-.52,6.43,6.51,6.31,16.19-.54,23.09-13.81,13.91-27.73,27.71-41.6,41.57-.95,.95-1.85,1.95-2.91,3.08,1.08,1.14,1.99,2.14,2.94,3.09,13.87,13.85,27.77,27.68,41.6,41.56,4.57,4.58,6.41,10.07,4.42,16.41-1.92,6.11-6.17,9.87-12.43,11.14-6.05,1.23-10.98-1.05-15.2-5.28-13.68-13.69-27.4-27.34-41.06-41.04-.96-.96-1.63-2.21-2.59-3.54-1.66,1.55-2.67,2.43-3.61,3.38-13.97,13.93-27.9,27.89-41.91,41.78-4.61,4.57-10.18,6.27-16.49,4.23-6.09-1.97-9.83-6.31-11.02-12.55-1.12-5.86,1.07-10.72,5.22-14.85,13.72-13.65,27.4-27.34,41.11-40.99,.97-.97,2.1-1.77,3.49-2.93-1.26-1.34-2.12-2.33-3.05-3.25-13.96-13.94-27.94-27.85-41.87-41.82-5.37-5.39-6.62-12.1-3.68-18.5,2.7-5.87,8.94-9.71,15.38-9.34,4.58,.26,8.29,2.33,11.51,5.56,13.66,13.71,27.39,27.35,41.06,41.04,.96,.96,1.68,2.17,2.81,3.66Z" }, void 0, false, {
    fileName: "app/assets/icons/Xmark.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this),
  " "
] }, void 0, true, {
  fileName: "app/assets/icons/Xmark.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Xmark_default = Xmark;

// app/assets/icons/PenEdit.tsx
var import_jsx_dev_runtime38 = __toESM(require_jsx_dev_runtime());
var PenEdit = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("path", { d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }, void 0, false, {
  fileName: "app/assets/icons/PenEdit.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/PenEdit.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var PenEdit_default = PenEdit;

// app/assets/icons/Trash.tsx
var import_jsx_dev_runtime39 = __toESM(require_jsx_dev_runtime());
var Trash = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" }, void 0, false, {
  fileName: "app/assets/icons/Trash.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Trash.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Trash_default = Trash;

// app/assets/icons/Password.tsx
var import_jsx_dev_runtime40 = __toESM(require_jsx_dev_runtime());
var Password = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("path", { d: "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" }, void 0, false, {
  fileName: "app/assets/icons/Password.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Password.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Password_default = Password;

// app/assets/icons/PasswordHidden.tsx
var import_jsx_dev_runtime41 = __toESM(require_jsx_dev_runtime());
var PasswordHidden = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z" }, void 0, false, {
  fileName: "app/assets/icons/PasswordHidden.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/PasswordHidden.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var PasswordHidden_default = PasswordHidden;

// app/assets/icons/LoadingPing.tsx
var import_jsx_dev_runtime42 = __toESM(require_jsx_dev_runtime());
var LoadingPing = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 290.98 290.98",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("g", { id: "Capa_1-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("g", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("path", { d: "M102.09,99.68c.48,.23,1.37,.07,1,1.09-.51-.2-2.06,.56-1-1.09Z" }, void 0, false, {
        fileName: "app/assets/icons/LoadingPing.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
        "path",
        {
          className: "fill-[#a3adb9]",
          d: "M145.49,33.32c29.96,0,58.13,11.67,79.32,32.85,21.19,21.19,32.85,49.36,32.85,79.32s-11.67,58.13-32.85,79.32c-21.19,21.19-49.36,32.85-79.32,32.85s-58.13-11.67-79.32-32.85c-21.19-21.19-32.85-49.36-32.85-79.32s11.67-58.13,32.85-79.32c21.19-21.19,49.36-32.85,79.32-32.85M145.49,0C65.14,0,0,65.14,0,145.49s65.14,145.49,145.49,145.49,145.49-65.14,145.49-145.49S225.84,0,145.49,0h0Z"
        },
        void 0,
        false,
        {
          fileName: "app/assets/icons/LoadingPing.tsx",
          lineNumber: 12,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
        "path",
        {
          className: "fill-[#fefefe]",
          d: "M140.35,33.81c-7.7-2.91-10.37-8.99-10.26-16.64,.12-7.76,4.22-12.9,11.13-16.01,9.33-2.55,18.61-.29,27.71,1.01,27.34,3.89,51.49,15.26,72.15,33.59,23.69,21.02,39.24,46.86,45.45,78.19,6.89,34.78,5.89,67.65-11.15,98.76-1.46,2.67-3.4,4.89-5.47,7.05-4.28,1.66-7.97,3.98-12.82,2.95-10.35-2.19-13.85-5.17-15.09-18.45,.38-2.49,1.78-5.19,2.99-7.41,11.6-21.16,11.77-44.52,8.34-68.77-2.83-19.98-9.92-37.82-22.58-53.35-23.05-28.27-53.38-41.45-89.35-40.93"
        },
        void 0,
        false,
        {
          fileName: "app/assets/icons/LoadingPing.tsx",
          lineNumber: 16,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/assets/icons/LoadingPing.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/assets/icons/LoadingPing.tsx",
      lineNumber: 9,
      columnNumber: 5
    }, this)
  },
  void 0,
  false,
  {
    fileName: "app/assets/icons/LoadingPing.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
);
var LoadingPing_default = LoadingPing;

// app/assets/icons/Circle.tsx
var import_jsx_dev_runtime43 = __toESM(require_jsx_dev_runtime());
var Circle = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z" }, void 0, false, {
    fileName: "app/assets/icons/Circle.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/assets/icons/Circle.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
var Circle_default = Circle;

// app/assets/icons/Print.tsx
var import_jsx_dev_runtime44 = __toESM(require_jsx_dev_runtime());
var Print = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("path", { d: "M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zm-16-88c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z" }, void 0, false, {
  fileName: "app/assets/icons/Print.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Print.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Print_default = Print;

// app/assets/icons/Menu.tsx
var import_jsx_dev_runtime45 = __toESM(require_jsx_dev_runtime());
var Menu = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("path", { d: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" }, void 0, false, {
  fileName: "app/assets/icons/Menu.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Menu.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Menu_default = Menu;

// app/assets/icons/Bussiness.tsx
var import_jsx_dev_runtime46 = __toESM(require_jsx_dev_runtime());
var Bussiness = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("path", { d: "M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" }, void 0, false, {
  fileName: "app/assets/icons/Bussiness.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Bussiness.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Bussiness_default = Bussiness;

// app/assets/icons/Doctor.tsx
var import_jsx_dev_runtime47 = __toESM(require_jsx_dev_runtime());
var Doctor = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("path", { d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" }, void 0, false, {
    fileName: "app/assets/icons/Doctor.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/assets/icons/Doctor.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
var Doctor_default = Doctor;

// app/assets/icons/Microscope.tsx
var import_jsx_dev_runtime48 = __toESM(require_jsx_dev_runtime());
var Microscope = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("path", { d: "M160 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM32 448H320c70.7 0 128-57.3 128-128s-57.3-128-128-128V128c106 0 192 86 192 192c0 49.2-18.5 94-48.9 128H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm80-64H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" }, void 0, false, {
  fileName: "app/assets/icons/Microscope.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Microscope.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Microscope_default = Microscope;

// app/assets/icons/HandHeart.tsx
var import_jsx_dev_runtime49 = __toESM(require_jsx_dev_runtime());
var HandHeart = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("path", { d: "M148 76.6C148 34.3 182.3 0 224.6 0c20.3 0 39.8 8.1 54.1 22.4l9.3 9.3 9.3-9.3C311.6 8.1 331.1 0 351.4 0C393.7 0 428 34.3 428 76.6c0 20.3-8.1 39.8-22.4 54.1L302.1 234.1c-7.8 7.8-20.5 7.8-28.3 0L170.4 130.7C156.1 116.4 148 96.9 148 76.6zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" }, void 0, false, {
  fileName: "app/assets/icons/HandHeart.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/HandHeart.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var HandHeart_default = HandHeart;

// app/assets/icons/SaveDisk.tsx
var import_jsx_dev_runtime50 = __toESM(require_jsx_dev_runtime());
var SaveDisk = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("path", { d: "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" }, void 0, false, {
  fileName: "app/assets/icons/SaveDisk.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/SaveDisk.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var SaveDisk_default = SaveDisk;

// app/assets/icons/Box.tsx
var import_jsx_dev_runtime51 = __toESM(require_jsx_dev_runtime());
var Box = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("path", { d: "M45.9 42.1c3-6.1 9.6-9.6 16.3-8.7L307 64 551.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L426.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L307 64 223.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L24.1 170.6C4.8 165.1-4.7 143.4 4.2 125.5L45.9 42.1zM308.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L563 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C66 419.7 51 400.5 51 378.5v-167L178.6 248c27.8 8 57.6-3.8 72.5-28.6L305.9 128h2.2z" }, void 0, false, {
  fileName: "app/assets/icons/Box.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/assets/icons/Box.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);
var Box_default = Box;

// app/components/Icon/index.tsx
var import_jsx_dev_runtime52 = __toESM(require_jsx_dev_runtime());
var Icon = ({ iconName, className, ...props }) => {
  const IconComponent = icons_exports[iconName];
  const styles = clsx_m_default(
    "flex items-center justify-center",
    "w-6 h-6 p-0.5",
    className
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: styles, children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(IconComponent, { className: "m-auto", ...props }, void 0, false, {
    fileName: "app/components/Icon/index.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Icon/index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};
var Icon_default = Icon;

// node_modules/immer/dist/immer.esm.mjs
function n(n2) {
  for (var r3 = arguments.length, t2 = Array(r3 > 1 ? r3 - 1 : 0), e = 1; e < r3; e++)
    t2[e - 1] = arguments[e];
  if (true) {
    var i2 = Y[n2], o2 = i2 ? "function" == typeof i2 ? i2.apply(null, t2) : i2 : "unknown error nr: " + n2;
    throw Error("[Immer] " + o2);
  }
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r2(n2) {
  return !!n2 && !!n2[Q];
}
function t(n2) {
  var r3;
  return !!n2 && (function(n3) {
    if (!n3 || "object" != typeof n3)
      return false;
    var r4 = Object.getPrototypeOf(n3);
    if (null === r4)
      return true;
    var t2 = Object.hasOwnProperty.call(r4, "constructor") && r4.constructor;
    return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!(null === (r3 = n2.constructor) || void 0 === r3 ? void 0 : r3[L]) || s(n2) || v(n2));
}
function i(n2, r3, t2) {
  void 0 === t2 && (t2 = false), 0 === o(n2) ? (t2 ? Object.keys : nn)(n2).forEach(function(e) {
    t2 && "symbol" == typeof e || r3(e, n2[e], n2);
  }) : n2.forEach(function(t3, e) {
    return r3(e, t3, n2);
  });
}
function o(n2) {
  var r3 = n2[Q];
  return r3 ? r3.i > 3 ? r3.i - 4 : r3.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, r3) {
  return 2 === o(n2) ? n2.has(r3) : Object.prototype.hasOwnProperty.call(n2, r3);
}
function a(n2, r3) {
  return 2 === o(n2) ? n2.get(r3) : n2[r3];
}
function f(n2, r3, t2) {
  var e = o(n2);
  2 === e ? n2.set(r3, t2) : 3 === e ? n2.add(t2) : n2[r3] = t2;
}
function c(n2, r3) {
  return n2 === r3 ? 0 !== n2 || 1 / n2 == 1 / r3 : n2 != n2 && r3 != r3;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r3 = rn(n2);
  delete r3[Q];
  for (var t2 = nn(r3), e = 0; e < t2.length; e++) {
    var i2 = t2[e], o2 = r3[i2];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r3[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r3);
}
function d(n2, e) {
  return void 0 === e && (e = false), y(n2) || r2(n2) || !t(n2) || (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e && i(n2, function(n3, r3) {
    return d(r3, true);
  }, true)), n2;
}
function h() {
  n(2);
}
function y(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
function b(r3) {
  var t2 = tn[r3];
  return t2 || n(18, r3), t2;
}
function m(n2, r3) {
  tn[n2] || (tn[n2] = r3);
}
function _() {
  return U || n(0), U;
}
function j(n2, r3) {
  r3 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r3);
}
function O(n2) {
  g(n2), n2.p.forEach(S), n2.p = null;
}
function g(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var r3 = n2[Q];
  0 === r3.i || 1 === r3.i ? r3.j() : r3.O = true;
}
function P(r3, e) {
  e._ = e.p.length;
  var i2 = e.p[0], o2 = void 0 !== r3 && r3 !== i2;
  return e.h.g || b("ES5").S(e, r3, o2), o2 ? (i2[Q].P && (O(e), n(4)), t(r3) && (r3 = M(e, r3), e.l || x(e, r3)), e.u && b("Patches").M(i2[Q].t, r3, e.u, e.s)) : r3 = M(e, i2, []), O(e), e.u && e.v(e.u, e.s), r3 !== H ? r3 : void 0;
}
function M(n2, r3, t2) {
  if (y(r3))
    return r3;
  var e = r3[Q];
  if (!e)
    return i(r3, function(i2, o3) {
      return A(n2, e, r3, i2, o3, t2);
    }, true), r3;
  if (e.A !== n2)
    return r3;
  if (!e.P)
    return x(n2, e.t, true), e.t;
  if (!e.I) {
    e.I = true, e.A._--;
    var o2 = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o, u2 = o2, a2 = false;
    3 === e.i && (u2 = new Set(o2), o2.clear(), a2 = true), i(u2, function(r4, i2) {
      return A(n2, e, o2, r4, i2, t2, a2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").N(e, t2, n2.u, n2.s);
  }
  return e.o;
}
function A(e, i2, o2, a2, c2, s2, v2) {
  if (c2 === o2 && n(5), r2(c2)) {
    var p2 = M(e, c2, s2 && i2 && 3 !== i2.i && !u(i2.R, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, p2), !r2(p2))
      return;
    e.m = false;
  } else
    v2 && o2.add(c2);
  if (t(c2) && !y(c2)) {
    if (!e.h.D && e._ < 1)
      return;
    M(e, c2), i2 && i2.A.l || x(e, c2);
  }
}
function x(n2, r3, t2) {
  void 0 === t2 && (t2 = false), !n2.l && n2.h.D && n2.m && d(r3, t2);
}
function z(n2, r3) {
  var t2 = n2[Q];
  return (t2 ? p(t2) : n2)[r3];
}
function I(n2, r3) {
  if (r3 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e = Object.getOwnPropertyDescriptor(t2, r3);
      if (e)
        return e;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function N(n2, r3, t2) {
  var e = s(r3) ? b("MapSet").F(r3, t2) : v(r3) ? b("MapSet").T(r3, t2) : n2.g ? function(n3, r4) {
    var t3 = Array.isArray(n3), e2 = { i: t3 ? 1 : 0, A: r4 ? r4.A : _(), P: false, I: false, R: {}, l: r4, t: n3, k: null, o: null, j: null, C: false }, i2 = e2, o2 = en;
    t3 && (i2 = [e2], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e2.k = f2, e2.j = a2, f2;
  }(r3, t2) : b("ES5").J(r3, t2);
  return (t2 ? t2.A : _()).p.push(e), e;
}
function R(e) {
  return r2(e) || n(22, e), function n2(r3) {
    if (!t(r3))
      return r3;
    var e2, u2 = r3[Q], c2 = o(r3);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e2 = D(r3, c2), u2.I = false;
    } else
      e2 = D(r3, c2);
    return i(e2, function(r4, t2) {
      u2 && a(u2.t, r4) === t2 || f(e2, r4, n2(t2));
    }), 3 === c2 ? new Set(e2) : e2;
  }(e);
}
function D(n2, r3) {
  switch (r3) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
function F() {
  function t2(n2, r3) {
    var t3 = s2[n2];
    return t3 ? t3.enumerable = r3 : s2[n2] = t3 = { configurable: true, enumerable: r3, get: function() {
      var r4 = this[Q];
      return f2(r4), en.get(r4, n2);
    }, set: function(r4) {
      var t4 = this[Q];
      f2(t4), en.set(t4, n2, r4);
    } }, t3;
  }
  function e(n2) {
    for (var r3 = n2.length - 1; r3 >= 0; r3--) {
      var t3 = n2[r3][Q];
      if (!t3.P)
        switch (t3.i) {
          case 5:
            a2(t3) && k(t3);
            break;
          case 4:
            o2(t3) && k(t3);
        }
    }
  }
  function o2(n2) {
    for (var r3 = n2.t, t3 = n2.k, e2 = nn(t3), i2 = e2.length - 1; i2 >= 0; i2--) {
      var o3 = e2[i2];
      if (o3 !== Q) {
        var a3 = r3[o3];
        if (void 0 === a3 && !u(r3, o3))
          return true;
        var f3 = t3[o3], s3 = f3 && f3[Q];
        if (s3 ? s3.t !== a3 : !c(f3, a3))
          return true;
      }
    }
    var v2 = !!r3[Q];
    return e2.length !== nn(r3).length + (v2 ? 0 : 1);
  }
  function a2(n2) {
    var r3 = n2.k;
    if (r3.length !== n2.t.length)
      return true;
    var t3 = Object.getOwnPropertyDescriptor(r3, r3.length - 1);
    if (t3 && !t3.get)
      return true;
    for (var e2 = 0; e2 < r3.length; e2++)
      if (!r3.hasOwnProperty(e2))
        return true;
    return false;
  }
  function f2(r3) {
    r3.O && n(3, JSON.stringify(p(r3)));
  }
  var s2 = {};
  m("ES5", { J: function(n2, r3) {
    var e2 = Array.isArray(n2), i2 = function(n3, r4) {
      if (n3) {
        for (var e3 = Array(r4.length), i3 = 0; i3 < r4.length; i3++)
          Object.defineProperty(e3, "" + i3, t2(i3, true));
        return e3;
      }
      var o4 = rn(r4);
      delete o4[Q];
      for (var u2 = nn(o4), a3 = 0; a3 < u2.length; a3++) {
        var f3 = u2[a3];
        o4[f3] = t2(f3, n3 || !!o4[f3].enumerable);
      }
      return Object.create(Object.getPrototypeOf(r4), o4);
    }(e2, n2), o3 = { i: e2 ? 5 : 4, A: r3 ? r3.A : _(), P: false, I: false, R: {}, l: r3, t: n2, k: i2, o: null, O: false, C: false };
    return Object.defineProperty(i2, Q, { value: o3, writable: true }), i2;
  }, S: function(n2, t3, o3) {
    o3 ? r2(t3) && t3[Q].A === n2 && e(n2.p) : (n2.u && function n3(r3) {
      if (r3 && "object" == typeof r3) {
        var t4 = r3[Q];
        if (t4) {
          var e2 = t4.t, o4 = t4.k, f3 = t4.R, c2 = t4.i;
          if (4 === c2)
            i(o4, function(r4) {
              r4 !== Q && (void 0 !== e2[r4] || u(e2, r4) ? f3[r4] || n3(o4[r4]) : (f3[r4] = true, k(t4)));
            }), i(e2, function(n4) {
              void 0 !== o4[n4] || u(o4, n4) || (f3[n4] = false, k(t4));
            });
          else if (5 === c2) {
            if (a2(t4) && (k(t4), f3.length = true), o4.length < e2.length)
              for (var s3 = o4.length; s3 < e2.length; s3++)
                f3[s3] = false;
            else
              for (var v2 = e2.length; v2 < o4.length; v2++)
                f3[v2] = true;
            for (var p2 = Math.min(o4.length, e2.length), l2 = 0; l2 < p2; l2++)
              o4.hasOwnProperty(l2) || (f3[l2] = true), void 0 === f3[l2] && n3(o4[l2]);
          }
        }
      }
    }(n2.p[0]), e(n2.p));
  }, K: function(n2) {
    return 4 === n2.i ? o2(n2) : a2(n2);
  } });
}
var G;
var U;
var W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
var X = "undefined" != typeof Map;
var q = "undefined" != typeof Set;
var B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
var Q = W ? Symbol.for("immer-state") : "__$immer_state";
var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n2) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n2) {
  return "Cannot apply patch, path doesn't resolve: " + n2;
}, 16: 'Sets cannot have "replace" patches.', 17: function(n2) {
  return "Unsupported patch operation: " + n2;
}, 18: function(n2) {
  return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n2) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
}, 22: function(n2) {
  return "'current' expects a draft, got: " + n2;
}, 23: function(n2) {
  return "'original' expects a draft, got: " + n2;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
var Z = "" + Object.prototype.constructor;
var nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames;
var rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r3 = {};
  return nn(n2).forEach(function(t2) {
    r3[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r3;
};
var tn = {};
var en = { get: function(n2, r3) {
  if (r3 === Q)
    return n2;
  var e = p(n2);
  if (!u(e, r3))
    return function(n3, r4, t2) {
      var e2, i3 = I(r4, t2);
      return i3 ? "value" in i3 ? i3.value : null === (e2 = i3.get) || void 0 === e2 ? void 0 : e2.call(n3.k) : void 0;
    }(n2, e, r3);
  var i2 = e[r3];
  return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r3) ? (E(n2), n2.o[r3] = N(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r3) {
  return r3 in p(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p(n2));
}, set: function(n2, r3, t2) {
  var e = I(p(n2), r3);
  if (null == e ? void 0 : e.set)
    return e.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z(p(n2), r3), o2 = null == i2 ? void 0 : i2[Q];
    if (o2 && o2.t === t2)
      return n2.o[r3] = t2, n2.R[r3] = false, true;
    if (c(t2, i2) && (void 0 !== t2 || u(n2.t, r3)))
      return true;
    E(n2), k(n2);
  }
  return n2.o[r3] === t2 && (void 0 !== t2 || r3 in n2.o) || Number.isNaN(t2) && Number.isNaN(n2.o[r3]) || (n2.o[r3] = t2, n2.R[r3] = true), true;
}, deleteProperty: function(n2, r3) {
  return void 0 !== z(n2.t, r3) || r3 in n2.t ? (n2.R[r3] = false, E(n2), k(n2)) : delete n2.R[r3], n2.o && delete n2.o[r3], true;
}, getOwnPropertyDescriptor: function(n2, r3) {
  var t2 = p(n2), e = Reflect.getOwnPropertyDescriptor(t2, r3);
  return e ? { writable: true, configurable: 1 !== n2.i || "length" !== r3, enumerable: e.enumerable, value: t2[r3] } : e;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} };
var on = {};
i(en, function(n2, r3) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r3.apply(this, arguments);
  };
}), on.deleteProperty = function(r3, t2) {
  return isNaN(parseInt(t2)) && n(13), on.set.call(this, r3, t2, void 0);
}, on.set = function(r3, t2, e) {
  return "length" !== t2 && isNaN(parseInt(t2)) && n(14), en.set.call(this, r3[0], t2, e, r3[0]);
};
var un = function() {
  function e(r3) {
    var e2 = this;
    this.g = B, this.D = true, this.produce = function(r4, i3, o2) {
      if ("function" == typeof r4 && "function" != typeof i3) {
        var u2 = i3;
        i3 = r4;
        var a2 = e2;
        return function(n2) {
          var r5 = this;
          void 0 === n2 && (n2 = u2);
          for (var t2 = arguments.length, e3 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e3[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r5, n3].concat(e3));
          });
        };
      }
      var f2;
      if ("function" != typeof i3 && n(6), void 0 !== o2 && "function" != typeof o2 && n(7), t(r4)) {
        var c2 = w(e2), s2 = N(e2, r4, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O(c2) : g(c2);
        }
        return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P(n2, c2);
        }, function(n2) {
          throw O(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!r4 || "object" != typeof r4) {
        if (void 0 === (f2 = i3(r4)) && (f2 = r4), f2 === H && (f2 = void 0), e2.D && d(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r4, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n(21, r4);
    }, this.produceWithPatches = function(n2, r4) {
      if ("function" == typeof n2)
        return function(r5) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e2.produceWithPatches(r5, function(r6) {
            return n2.apply(void 0, [r6].concat(i4));
          });
        };
      var t2, i3, o2 = e2.produce(n2, r4, function(n3, r5) {
        t2 = n3, i3 = r5;
      });
      return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, "boolean" == typeof (null == r3 ? void 0 : r3.useProxies) && this.setUseProxies(r3.useProxies), "boolean" == typeof (null == r3 ? void 0 : r3.autoFreeze) && this.setAutoFreeze(r3.autoFreeze);
  }
  var i2 = e.prototype;
  return i2.createDraft = function(e2) {
    t(e2) || n(8), r2(e2) && (e2 = R(e2));
    var i3 = w(this), o2 = N(this, e2, void 0);
    return o2[Q].C = true, g(i3), o2;
  }, i2.finishDraft = function(r3, t2) {
    var e2 = r3 && r3[Q];
    e2 && e2.C || n(9), e2.I && n(10);
    var i3 = e2.A;
    return j(i3, t2), P(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.D = n2;
  }, i2.setUseProxies = function(r3) {
    r3 && !B && n(20), this.g = r3;
  }, i2.applyPatches = function(n2, t2) {
    var e2;
    for (e2 = t2.length - 1; e2 >= 0; e2--) {
      var i3 = t2[e2];
      if (0 === i3.path.length && "replace" === i3.op) {
        n2 = i3.value;
        break;
      }
    }
    e2 > -1 && (t2 = t2.slice(e2 + 1));
    var o2 = b("Patches").$;
    return r2(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e;
}();
var an = new un();
var fn = an.produce;
var cn = an.produceWithPatches.bind(an);
var sn = an.setAutoFreeze.bind(an);
var vn = an.setUseProxies.bind(an);
var pn = an.applyPatches.bind(an);
var ln = an.createDraft.bind(an);
var dn = an.finishDraft.bind(an);
var immer_esm_default = fn;

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

// node_modules/redux/es/redux.js
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject2(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function miniKindOf(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  var type = typeof val;
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function": {
      return type;
    }
  }
  if (Array.isArray(val))
    return "array";
  if (isDate(val))
    return "date";
  if (isError(val))
    return "error";
  var constructorName = ctorName(val);
  switch (constructorName) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return constructorName;
  }
  return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
  return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
  return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
  var typeOfVal = typeof val;
  if (true) {
    typeOfVal = miniKindOf(val);
  }
  return typeOfVal;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(false ? formatProdErrorMessage(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(false ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(false ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }
    return currentState;
  }
  function subscribe(listener2) {
    if (typeof listener2 !== "function") {
      throw new Error(false ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener2) + "'");
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener2);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(false ? formatProdErrorMessage(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener2);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject2(action)) {
      throw new Error(false ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }
    if (typeof action.type === "undefined") {
      throw new Error(false ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(9) : "Reducers may not dispatch actions.");
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i2 = 0; i2 < listeners.length; i2++) {
      var listener2 = listeners[i2];
      listener2();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(false ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(false ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function warning2(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (reducerKeys.length === 0) {
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  }
  if (!isPlainObject2(inputState)) {
    return "The " + argumentName + ' has unexpected type of "' + kindOf(inputState) + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }
  var unexpectedKeys = Object.keys(inputState).filter(function(key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function(key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE)
    return;
  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function(key) {
    var reducer = reducers[key];
    var initialState2 = reducer(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState2 === "undefined") {
      throw new Error(false ? formatProdErrorMessage(12) : 'The slice reducer for key "' + key + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    }
    if (typeof reducer(void 0, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(false ? formatProdErrorMessage(13) : 'The slice reducer for key "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + ActionTypes.INIT + `' or other actions in "redux/*" `) + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
    }
  });
}
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i2 = 0; i2 < reducerKeys.length; i2++) {
    var key = reducerKeys[i2];
    if (true) {
      if (typeof reducers[key] === "undefined") {
        warning2('No reducer provided for key "' + key + '"');
      }
    }
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;
  if (true) {
    unexpectedKeyCache = {};
  }
  var shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }
  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning2(warningMessage);
      }
    }
    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        var actionType = action && action.type;
        throw new Error(false ? formatProdErrorMessage(14) : "When called with an action of type " + (actionType ? '"' + String(actionType) + '"' : "(unknown type)") + ', the slice reducer for key "' + _key + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a2, b2) {
    return function() {
      return a2(b2.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(false ? formatProdErrorMessage(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      };
      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

// node_modules/redux-thunk/es/index.js
function createThunkMiddleware(extraArgument) {
  var middleware = function middleware2(_ref) {
    var dispatch = _ref.dispatch, getState = _ref.getState;
    return function(next) {
      return function(action) {
        if (typeof action === "function") {
          return action(dispatch, getState, extraArgument);
        }
        return next(action);
      };
    };
  };
  return middleware;
}
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
var es_default = thunk;

// node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js
var __extends = function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __generator = function(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e) {
        op = [6, e];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray = function(to, from) {
  for (var i2 = 0, il = from.length, j2 = to.length; i2 < il; i2++, j2++)
    to[j2] = from[i2];
  return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function(obj, key, value) {
  return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues = function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var _i = 0, _c = __getOwnPropSymbols(b2); _i < _c.length; _i++) {
      var prop = _c[_i];
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = function(a2, b2) {
  return __defProps(a2, __getOwnPropDescs(b2));
};
var __async = function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = function(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = function(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = function(x2) {
      return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0)
    return void 0;
  if (typeof arguments[0] === "object")
    return compose;
  return compose.apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
  return function(noop2) {
    return noop2;
  };
};
function isPlainObject3(value) {
  if (typeof value !== "object" || value === null)
    return false;
  var proto = Object.getPrototypeOf(value);
  if (proto === null)
    return true;
  var baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}
function getTimeMeasureUtils(maxDelay, fnName) {
  var elapsed = 0;
  return {
    measureTime: function(fn2) {
      var started = Date.now();
      try {
        return fn2();
      } finally {
        var finished = Date.now();
        elapsed += finished - started;
      }
    },
    warnIfExceeded: function() {
      if (elapsed > maxDelay) {
        console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
      }
    }
  };
}
var MiddlewareArray = function(_super) {
  __extends(MiddlewareArray2, _super);
  function MiddlewareArray2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var _this = _super.apply(this, args) || this;
    Object.setPrototypeOf(_this, MiddlewareArray2.prototype);
    return _this;
  }
  Object.defineProperty(MiddlewareArray2, Symbol.species, {
    get: function() {
      return MiddlewareArray2;
    },
    enumerable: false,
    configurable: true
  });
  MiddlewareArray2.prototype.concat = function() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }
    return _super.prototype.concat.apply(this, arr);
  };
  MiddlewareArray2.prototype.prepend = function() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }
    if (arr.length === 1 && Array.isArray(arr[0])) {
      return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr[0].concat(this))))();
    }
    return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr.concat(this))))();
  };
  return MiddlewareArray2;
}(Array);
function freezeDraftable(val) {
  return t(val) ? immer_esm_default(val, function() {
  }) : val;
}
var isProduction = false;
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  throw new Error(prefix + ": " + (message || ""));
}
function stringify(obj, serializer, indent, decycler) {
  return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}
function getSerialize(serializer, decycler) {
  var stack = [], keys = [];
  if (!decycler)
    decycler = function(_2, value) {
      if (stack[0] === value)
        return "[Circular ~]";
      return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
    };
  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value))
        value = decycler.call(this, key, value);
    } else
      stack.push(value);
    return serializer == null ? value : serializer.call(this, key, value);
  };
}
function isImmutableDefault(value) {
  return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
  var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
  return {
    detectMutations: function() {
      return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
    }
  };
}
function trackProperties(isImmutable, ignorePaths, obj, path) {
  if (ignorePaths === void 0) {
    ignorePaths = [];
  }
  if (path === void 0) {
    path = "";
  }
  var tracked = { value: obj };
  if (!isImmutable(obj)) {
    tracked.children = {};
    for (var key in obj) {
      var childPath = path ? path + "." + key : key;
      if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
        continue;
      }
      tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
    }
  }
  return tracked;
}
function detectMutations(isImmutable, ignoredPaths, trackedProperty, obj, sameParentRef, path) {
  if (ignoredPaths === void 0) {
    ignoredPaths = [];
  }
  if (sameParentRef === void 0) {
    sameParentRef = false;
  }
  if (path === void 0) {
    path = "";
  }
  var prevObj = trackedProperty ? trackedProperty.value : void 0;
  var sameRef = prevObj === obj;
  if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
    return { wasMutated: true, path };
  }
  if (isImmutable(prevObj) || isImmutable(obj)) {
    return { wasMutated: false };
  }
  var keysToDetect = {};
  for (var key in trackedProperty.children) {
    keysToDetect[key] = true;
  }
  for (var key in obj) {
    keysToDetect[key] = true;
  }
  var hasIgnoredPaths = ignoredPaths.length > 0;
  var _loop_1 = function(key2) {
    var nestedPath = path ? path + "." + key2 : key2;
    if (hasIgnoredPaths) {
      var hasMatches = ignoredPaths.some(function(ignored) {
        if (ignored instanceof RegExp) {
          return ignored.test(nestedPath);
        }
        return nestedPath === ignored;
      });
      if (hasMatches) {
        return "continue";
      }
    }
    var result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key2], obj[key2], sameRef, nestedPath);
    if (result.wasMutated) {
      return { value: result };
    }
  };
  for (var key in keysToDetect) {
    var state_1 = _loop_1(key);
    if (typeof state_1 === "object")
      return state_1.value;
  }
  return { wasMutated: false };
}
function createImmutableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }
  if (false) {
    return function() {
      return function(next) {
        return function(action) {
          return next(action);
        };
      };
    };
  }
  var _c = options.isImmutable, isImmutable = _c === void 0 ? isImmutableDefault : _c, ignoredPaths = options.ignoredPaths, _d = options.warnAfter, warnAfter = _d === void 0 ? 32 : _d, ignore = options.ignore;
  ignoredPaths = ignoredPaths || ignore;
  var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
  return function(_c2) {
    var getState = _c2.getState;
    var state = getState();
    var tracker = track(state);
    var result;
    return function(next) {
      return function(action) {
        var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
        measureUtils.measureTime(function() {
          state = getState();
          result = tracker.detectMutations();
          tracker = track(state);
          invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        });
        var dispatchedAction = next(action);
        measureUtils.measureTime(function() {
          state = getState();
          result = tracker.detectMutations();
          tracker = track(state);
          result.wasMutated && invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        });
        measureUtils.warnIfExceeded();
        return dispatchedAction;
      };
    };
  };
}
function isPlain(val) {
  var type = typeof val;
  return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject3(val);
}
function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths, cache) {
  if (path === void 0) {
    path = "";
  }
  if (isSerializable === void 0) {
    isSerializable = isPlain;
  }
  if (ignoredPaths === void 0) {
    ignoredPaths = [];
  }
  var foundNestedSerializable;
  if (!isSerializable(value)) {
    return {
      keyPath: path || "<root>",
      value
    };
  }
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (cache == null ? void 0 : cache.has(value))
    return false;
  var entries = getEntries != null ? getEntries(value) : Object.entries(value);
  var hasIgnoredPaths = ignoredPaths.length > 0;
  var _loop_2 = function(key2, nestedValue2) {
    var nestedPath = path ? path + "." + key2 : key2;
    if (hasIgnoredPaths) {
      var hasMatches = ignoredPaths.some(function(ignored) {
        if (ignored instanceof RegExp) {
          return ignored.test(nestedPath);
        }
        return nestedPath === ignored;
      });
      if (hasMatches) {
        return "continue";
      }
    }
    if (!isSerializable(nestedValue2)) {
      return { value: {
        keyPath: nestedPath,
        value: nestedValue2
      } };
    }
    if (typeof nestedValue2 === "object") {
      foundNestedSerializable = findNonSerializableValue(nestedValue2, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
      if (foundNestedSerializable) {
        return { value: foundNestedSerializable };
      }
    }
  };
  for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
    var _c = entries_1[_i], key = _c[0], nestedValue = _c[1];
    var state_2 = _loop_2(key, nestedValue);
    if (typeof state_2 === "object")
      return state_2.value;
  }
  if (cache && isNestedFrozen(value))
    cache.add(value);
  return false;
}
function isNestedFrozen(value) {
  if (!Object.isFrozen(value))
    return false;
  for (var _i = 0, _c = Object.values(value); _i < _c.length; _i++) {
    var nestedValue = _c[_i];
    if (typeof nestedValue !== "object" || nestedValue === null)
      continue;
    if (!isNestedFrozen(nestedValue))
      return false;
  }
  return true;
}
function createSerializableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }
  if (false) {
    return function() {
      return function(next) {
        return function(action) {
          return next(action);
        };
      };
    };
  }
  var _c = options.isSerializable, isSerializable = _c === void 0 ? isPlain : _c, getEntries = options.getEntries, _d = options.ignoredActions, ignoredActions = _d === void 0 ? [] : _d, _e = options.ignoredActionPaths, ignoredActionPaths = _e === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _e, _f = options.ignoredPaths, ignoredPaths = _f === void 0 ? [] : _f, _g = options.warnAfter, warnAfter = _g === void 0 ? 32 : _g, _h = options.ignoreState, ignoreState = _h === void 0 ? false : _h, _j = options.ignoreActions, ignoreActions = _j === void 0 ? false : _j, _k = options.disableCache, disableCache = _k === void 0 ? false : _k;
  var cache = !disableCache && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
  return function(storeAPI) {
    return function(next) {
      return function(action) {
        var result = next(action);
        var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
        if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
          measureUtils.measureTime(function() {
            var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
            if (foundActionNonSerializableValue) {
              var keyPath = foundActionNonSerializableValue.keyPath, value = foundActionNonSerializableValue.value;
              console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
            }
          });
        }
        if (!ignoreState) {
          measureUtils.measureTime(function() {
            var state = storeAPI.getState();
            var foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths, cache);
            if (foundStateNonSerializableValue) {
              var keyPath = foundStateNonSerializableValue.keyPath, value = foundStateNonSerializableValue.value;
              console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
            }
          });
          measureUtils.warnIfExceeded();
        }
        return result;
      };
    };
  };
}
function isBoolean(x2) {
  return typeof x2 === "boolean";
}
function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}
function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }
  var _c = options.thunk, thunk2 = _c === void 0 ? true : _c, _d = options.immutableCheck, immutableCheck = _d === void 0 ? true : _d, _e = options.serializableCheck, serializableCheck = _e === void 0 ? true : _e;
  var middlewareArray = new MiddlewareArray();
  if (thunk2) {
    if (isBoolean(thunk2)) {
      middlewareArray.push(es_default);
    } else {
      middlewareArray.push(es_default.withExtraArgument(thunk2.extraArgument));
    }
  }
  if (true) {
    if (immutableCheck) {
      var immutableOptions = {};
      if (!isBoolean(immutableCheck)) {
        immutableOptions = immutableCheck;
      }
      middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
    }
    if (serializableCheck) {
      var serializableOptions = {};
      if (!isBoolean(serializableCheck)) {
        serializableOptions = serializableCheck;
      }
      middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
    }
  }
  return middlewareArray;
}
var IS_PRODUCTION = false;
function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
  var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
  var rootReducer;
  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if (isPlainObject3(reducer)) {
    rootReducer = combineReducers(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }
  var finalMiddleware = middleware;
  if (typeof finalMiddleware === "function") {
    finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
    if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) {
      throw new Error("when using a middleware builder function, an array of middleware must be returned");
    }
  }
  if (!IS_PRODUCTION && finalMiddleware.some(function(item) {
    return typeof item !== "function";
  })) {
    throw new Error("each middleware provided to configureStore must be a function");
  }
  var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
  var finalCompose = compose;
  if (devTools) {
    finalCompose = composeWithDevTools(__spreadValues({
      trace: !IS_PRODUCTION
    }, typeof devTools === "object" && devTools));
  }
  var storeEnhancers = [middlewareEnhancer];
  if (Array.isArray(enhancers)) {
    storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
  } else if (typeof enhancers === "function") {
    storeEnhancers = enhancers(storeEnhancers);
  }
  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}
function createAction(type, prepareAction) {
  function actionCreator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, args);
      if (!prepared) {
        throw new Error("prepareAction did not return an object");
      }
      return __spreadValues(__spreadValues({
        type,
        payload: prepared.payload
      }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
    }
    return { type, payload: args[0] };
  }
  actionCreator.toString = function() {
    return "" + type;
  };
  actionCreator.type = type;
  actionCreator.match = function(action) {
    return action.type === type;
  };
  return actionCreator;
}
function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function(typeOrActionCreator, reducer) {
      if (true) {
        if (actionMatchers.length > 0) {
          throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
        }
        if (defaultCaseReducer) {
          throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
        }
      }
      var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (type in actionsMap) {
        throw new Error("addCase cannot be called with two reducers for the same action type");
      }
      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function(matcher, reducer) {
      if (true) {
        if (defaultCaseReducer) {
          throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
        }
      }
      actionMatchers.push({ matcher, reducer });
      return builder;
    },
    addDefaultCase: function(reducer) {
      if (true) {
        if (defaultCaseReducer) {
          throw new Error("`builder.addDefaultCase` can only be called once");
        }
      }
      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}
function isStateFunction(x2) {
  return typeof x2 === "function";
}
var hasWarnedAboutObjectNotation = false;
function createReducer(initialState2, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }
  if (true) {
    if (typeof mapOrBuilderCallback === "object") {
      if (!hasWarnedAboutObjectNotation) {
        hasWarnedAboutObjectNotation = true;
        console.warn("The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
      }
    }
  }
  var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
  var getInitialState;
  if (isStateFunction(initialState2)) {
    getInitialState = function() {
      return freezeDraftable(initialState2());
    };
  } else {
    var frozenInitialState_1 = freezeDraftable(initialState2);
    getInitialState = function() {
      return frozenInitialState_1;
    };
  }
  function reducer(state, action) {
    if (state === void 0) {
      state = getInitialState();
    }
    var caseReducers = __spreadArray([
      actionsMap[action.type]
    ], finalActionMatchers.filter(function(_c2) {
      var matcher = _c2.matcher;
      return matcher(action);
    }).map(function(_c2) {
      var reducer2 = _c2.reducer;
      return reducer2;
    }));
    if (caseReducers.filter(function(cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce(function(previousState, caseReducer) {
      if (caseReducer) {
        if (r2(previousState)) {
          var draft = previousState;
          var result = caseReducer(draft, action);
          if (result === void 0) {
            return previousState;
          }
          return result;
        } else if (!t(previousState)) {
          var result = caseReducer(previousState, action);
          if (result === void 0) {
            if (previousState === null) {
              return previousState;
            }
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return immer_esm_default(previousState, function(draft2) {
            return caseReducer(draft2, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer.getInitialState = getInitialState;
  return reducer;
}
var hasWarnedAboutObjectNotation2 = false;
function getType2(slice, actionKey) {
  return slice + "/" + actionKey;
}
function createSlice(options) {
  var name = options.name;
  if (!name) {
    throw new Error("`name` is a required option for createSlice");
  }
  if (typeof process !== "undefined" && true) {
    if (options.initialState === void 0) {
      console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    }
  }
  var initialState2 = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
  var reducers = options.reducers || {};
  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function(reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType2(name, reducerName);
    var caseReducer;
    var prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }
    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });
  function buildReducer() {
    if (true) {
      if (typeof options.extraReducers === "object") {
        if (!hasWarnedAboutObjectNotation2) {
          hasWarnedAboutObjectNotation2 = true;
          console.warn("The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
        }
      }
    }
    var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
    var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
    return createReducer(initialState2, function(builder) {
      for (var key in finalCaseReducers) {
        builder.addCase(key, finalCaseReducers[key]);
      }
      for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
        var m2 = actionMatchers_1[_i];
        builder.addMatcher(m2.matcher, m2.reducer);
      }
      if (defaultCaseReducer) {
        builder.addDefaultCase(defaultCaseReducer);
      }
    });
  }
  var _reducer;
  return {
    name,
    reducer: function(state, action) {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer(state, action);
    },
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName,
    getInitialState: function() {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer.getInitialState();
    }
  };
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function(size) {
  if (size === void 0) {
    size = 21;
  }
  var id = "";
  var i2 = size;
  while (i2--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
var commonProperties = [
  "name",
  "message",
  "stack",
  "code"
];
var RejectWithValue = function() {
  function RejectWithValue2(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  return RejectWithValue2;
}();
var FulfillWithMeta = function() {
  function FulfillWithMeta2(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  return FulfillWithMeta2;
}();
var miniSerializeError = function(value) {
  if (typeof value === "object" && value !== null) {
    var simpleError = {};
    for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
      var property = commonProperties_1[_i];
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return { message: String(value) };
};
var createAsyncThunk = function() {
  function createAsyncThunk2(typePrefix, payloadCreator, options) {
    var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
      return {
        payload,
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "fulfilled"
        })
      };
    });
    var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
      return {
        payload: void 0,
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "pending"
        })
      };
    });
    var rejected = createAction(typePrefix + "/rejected", function(error, requestId, arg, payload, meta) {
      return {
        payload,
        error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          rejectedWithValue: !!payload,
          requestStatus: "rejected",
          aborted: (error == null ? void 0 : error.name) === "AbortError",
          condition: (error == null ? void 0 : error.name) === "ConditionError"
        })
      };
    });
    var displayedWarning = false;
    var AC = typeof AbortController !== "undefined" ? AbortController : function() {
      function class_1() {
        this.signal = {
          aborted: false,
          addEventListener: function() {
          },
          dispatchEvent: function() {
            return false;
          },
          onabort: function() {
          },
          removeEventListener: function() {
          },
          reason: void 0,
          throwIfAborted: function() {
          }
        };
      }
      class_1.prototype.abort = function() {
        if (true) {
          if (!displayedWarning) {
            displayedWarning = true;
            console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
          }
        }
      };
      return class_1;
    }();
    function actionCreator(arg) {
      return function(dispatch, getState, extra) {
        var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
        var abortController = new AC();
        var abortReason;
        var started = false;
        function abort(reason) {
          abortReason = reason;
          abortController.abort();
        }
        var promise2 = function() {
          return __async(this, null, function() {
            var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
            return __generator(this, function(_c) {
              switch (_c.label) {
                case 0:
                  _c.trys.push([0, 4, , 5]);
                  conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState, extra });
                  if (!isThenable(conditionResult))
                    return [3, 2];
                  return [4, conditionResult];
                case 1:
                  conditionResult = _c.sent();
                  _c.label = 2;
                case 2:
                  if (conditionResult === false || abortController.signal.aborted) {
                    throw {
                      name: "ConditionError",
                      message: "Aborted due to condition callback returning false."
                    };
                  }
                  started = true;
                  abortedPromise = new Promise(function(_2, reject) {
                    return abortController.signal.addEventListener("abort", function() {
                      return reject({
                        name: "AbortError",
                        message: abortReason || "Aborted"
                      });
                    });
                  });
                  dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId, arg }, { getState, extra })));
                  return [4, Promise.race([
                    abortedPromise,
                    Promise.resolve(payloadCreator(arg, {
                      dispatch,
                      getState,
                      extra,
                      requestId,
                      signal: abortController.signal,
                      abort,
                      rejectWithValue: function(value, meta) {
                        return new RejectWithValue(value, meta);
                      },
                      fulfillWithValue: function(value, meta) {
                        return new FulfillWithMeta(value, meta);
                      }
                    })).then(function(result) {
                      if (result instanceof RejectWithValue) {
                        throw result;
                      }
                      if (result instanceof FulfillWithMeta) {
                        return fulfilled(result.payload, requestId, arg, result.meta);
                      }
                      return fulfilled(result, requestId, arg);
                    })
                  ])];
                case 3:
                  finalAction = _c.sent();
                  return [3, 5];
                case 4:
                  err_1 = _c.sent();
                  finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                  return [3, 5];
                case 5:
                  skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                  if (!skipDispatch) {
                    dispatch(finalAction);
                  }
                  return [2, finalAction];
              }
            });
          });
        }();
        return Object.assign(promise2, {
          abort,
          requestId,
          arg,
          unwrap: function() {
            return promise2.then(unwrapResult);
          }
        });
      };
    }
    return Object.assign(actionCreator, {
      pending,
      rejected,
      fulfilled,
      typePrefix
    });
  }
  createAsyncThunk2.withTypes = function() {
    return createAsyncThunk2;
  };
  return createAsyncThunk2;
}();
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = "task-" + cancelled;
var taskCompleted = "task-" + completed;
var listenerCancelled = listener + "-" + cancelled;
var listenerCompleted = listener + "-" + completed;
var TaskAbortError = function() {
  function TaskAbortError2(code) {
    this.code = code;
    this.name = "TaskAbortError";
    this.message = task + " " + cancelled + " (reason: " + code + ")";
  }
  return TaskAbortError2;
}();
var alm = "listenerMiddleware";
var addListener = createAction(alm + "/add");
var clearAllListeners = createAction(alm + "/removeAll");
var removeListener = createAction(alm + "/remove");
var promise;
var queueMicrotaskShim = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : globalThis) : function(cb) {
  return (promise || (promise = Promise.resolve())).then(cb).catch(function(err) {
    return setTimeout(function() {
      throw err;
    }, 0);
  });
};
var createQueueWithTimer = function(timeout) {
  return function(notify) {
    setTimeout(notify, timeout);
  };
};
var rAF = typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
F();

// app/store/slice/notify.slice.ts
var initialState = null;
var notifySlice = createSlice({
  initialState,
  name: "notify-message",
  reducers: {
    setNotifySlice: (state, action) => {
      const notifyState = action.payload;
      return notifyState;
    }
  }
});
var { setNotifySlice } = notifySlice.actions;
var notify_slice_default = notifySlice.reducer;

// app/animations/animations.ts
var dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: "100vh",
    opacity: 0
  }
};

// app/components/Share/modal/Portal.tsx
var import_react8 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());
var createWrapper = (wrapperId) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", wrapperId);
  document.body.appendChild(wrapper);
  return wrapper;
};
var Portal = ({ children, wrapperId }) => {
  const [wrapper, setWrapper] = (0, import_react8.useState)(null);
  (0, import_react8.useEffect)(() => {
    let element = document.getElementById(wrapperId);
    let created = false;
    if (!element) {
      created = true;
      element = createWrapper(wrapperId);
    }
    setWrapper(element);
    return () => {
      if (created && (element == null ? void 0 : element.parentNode)) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);
  if (wrapper === null) {
    return null;
  }
  return (0, import_react_dom2.createPortal)(children, wrapper);
};
var Portal_default = Portal;

// app/components/Share/modal/Modal.tsx
var import_jsx_dev_runtime53 = __toESM(require_jsx_dev_runtime());
var Modal = ({
  children,
  isOpen,
  widthModal,
  onChangeStatus
}) => {
  if (!isOpen)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(Portal_default, { wrapperId: "modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
    motion.div,
    {
      onClick: onChangeStatus,
      role: "dialog",
      className: "fixed flex top-0 left-0 h-screen w-screen  overflow-y-hidden items-center justify-center bg-[#00000062] z-20",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
        motion.div,
        {
          className: `${widthModal} items-center rounded-input`,
          onClick: (e) => e.stopPropagation(),
          variants: dropIn,
          initial: "hidden",
          animate: "visible",
          exit: "exit",
          children
        },
        void 0,
        false,
        {
          fileName: "app/components/Share/modal/Modal.tsx",
          lineNumber: 29,
          columnNumber: 9
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/components/Share/modal/Modal.tsx",
      lineNumber: 21,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/Share/modal/Modal.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};
var Modal_default = Modal;

export {
  useSelector,
  Provider_default,
  useDispatch,
  configureStore,
  createSlice,
  setNotifySlice,
  notify_slice_default,
  Modal_default,
  Icon_default
};
//# sourceMappingURL=/build/_shared/chunk-22VXXIPX.js.map
