var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// pnp:/Users/limdonghyun/Documents/StudyWebs/B1ND_Design_System/packages/b1nd-react-util/src/index.ts
var src_exports = {};
__export(src_exports, {
  useDebounce: () => useDebounce,
  useOutsideClick: () => useOutsideClick,
  usePreventScroll: () => usePreventScroll
});
module.exports = __toCommonJS(src_exports);

// pnp:/Users/limdonghyun/Documents/StudyWebs/B1ND_Design_System/packages/b1nd-react-util/src/hooks/useDebounce.ts
var import_debounce = __toESM(require("lodash/debounce"));
var import_react = require("react");
var useDebounce = (callback, wait, options = {}) => {
  const debounced = (0, import_react.useMemo)(() => {
    return (0, import_debounce.default)(callback, wait, options);
  }, [callback, wait, options]);
  (0, import_react.useEffect)(() => {
    return () => debounced.cancel();
  }, [debounced]);
  return debounced;
};

// pnp:/Users/limdonghyun/Documents/StudyWebs/B1ND_Design_System/packages/b1nd-react-util/src/hooks/useOutsideClick.ts
var import_react2 = require("react");
var useOutsideClick = ({
  container,
  callback
}) => {
  const containers = (0, import_react2.useRef)([]);
  (0, import_react2.useEffect)(() => {
    containers.current = (Array.isArray(container) ? container : [container]).filter((item) => item !== null);
  }, [container]);
  const handleClickOutside = (0, import_react2.useCallback)(
    ({ target }) => {
      if (target === null)
        return;
      if (containers.current.length === 0)
        return;
      if (containers.current.some((item) => item.contains(target)))
        return;
      callback();
    },
    [callback]
  );
  (0, import_react2.useEffect)(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  });
};

// pnp:/Users/limdonghyun/Documents/StudyWebs/B1ND_Design_System/packages/b1nd-react-util/src/hooks/usePreventScroll.ts
var import_react3 = require("react");
var usePreventScroll = ({
  isPreventScroll
}) => {
  (0, import_react3.useEffect)(() => {
    if (isPreventScroll) {
      document.body.style.cssText = `
                  position: fixed; 
                  top: -${window.scrollY}px;
                  overflow-y: scroll;
                  width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  }, [isPreventScroll]);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useDebounce,
  useOutsideClick,
  usePreventScroll
});
//# sourceMappingURL=esbuild.config.js.map
