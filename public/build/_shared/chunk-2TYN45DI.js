import {
  useMatches
} from "/build/_shared/chunk-Y4JNXV6F.js";

// app/components/utils/tokenConfig.ts
var tokenConfig = (value) => {
  return {
    headers: { Authorization: `Bearer ${value}` }
  };
};
var URL = () => "http://localhost:8000";
var tokenConfig_default = tokenConfig;

// app/hooks/hooks.ts
var useRouteData = (routeId) => {
  var _a;
  const matches = useMatches();
  const data = (_a = matches.find((match) => match.id === routeId)) == null ? void 0 : _a.data;
  return data;
};

export {
  URL,
  tokenConfig_default,
  useRouteData
};
//# sourceMappingURL=/build/_shared/chunk-2TYN45DI.js.map
