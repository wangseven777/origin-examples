!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var n = e();
    for (var r in n) ("object" == typeof exports ? exports : t)[r] = n[r];
  }
})(window, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            n.d(
              r,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 232))
    );
  })([
    function (t, e, n) {
      (function (e) {
        var n = function (t) {
          return t && t.Math == Math && t;
        };
        t.exports =
          n("object" == typeof globalThis && globalThis) ||
          n("object" == typeof window && window) ||
          n("object" == typeof self && self) ||
          n("object" == typeof e && e) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      }).call(this, n(97));
    },
    function (t, e) {
      var n = Function.prototype,
        r = n.bind,
        o = n.call,
        i = r && r.bind(o);
      t.exports = r
        ? function (t) {
            return t && i(o, t);
          }
        : function (t) {
            return (
              t &&
              function () {
                return o.apply(t, arguments);
              }
            );
          };
    },
    function (t, e) {
      t.exports = function (t) {
        return "function" == typeof t;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(31),
        i = n(6),
        u = n(37),
        a = n(47),
        c = n(62),
        f = o("wks"),
        s = r.Symbol,
        l = s && s.for,
        p = c ? s : (s && s.withoutSetter) || u;
      t.exports = function (t) {
        if (!i(f, t) || (!a && "string" != typeof f[t])) {
          var e = "Symbol." + t;
          a && i(s, t) ? (f[t] = s[t]) : (f[t] = c && l ? l(e) : p(e));
        }
        return f[t];
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(24).f,
        i = n(16),
        u = n(15),
        a = n(41),
        c = n(69),
        f = n(75);
      t.exports = function (t, e) {
        var n,
          s,
          l,
          p,
          v,
          d = t.target,
          y = t.global,
          h = t.stat;
        if ((n = y ? r : h ? r[d] || a(d, {}) : (r[d] || {}).prototype))
          for (s in e) {
            if (
              ((p = e[s]),
              (l = t.noTargetGet ? (v = o(n, s)) && v.value : n[s]),
              !f(y ? s : d + (h ? "." : "#") + s, t.forced) && void 0 !== l)
            ) {
              if (typeof p == typeof l) continue;
              c(p, l);
            }
            (t.sham || (l && l.sham)) && i(p, "sham", !0), u(n, s, p, t);
          }
      };
    },
    function (t, e, n) {
      var r = n(1),
        o = n(14),
        i = r({}.hasOwnProperty);
      t.exports =
        Object.hasOwn ||
        function (t, e) {
          return i(o(t), e);
        };
    },
    function (t, e, n) {
      var r = n(3);
      t.exports = !r(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    function (t, e, n) {
      var r = n(2);
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : r(t);
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(7),
        i = n(63),
        u = n(10),
        a = n(27),
        c = r.TypeError,
        f = Object.defineProperty;
      e.f = o
        ? f
        : function (t, e, n) {
            if ((u(t), (e = a(e)), u(n), i))
              try {
                return f(t, e, n);
              } catch (t) {}
            if ("get" in n || "set" in n) throw c("Accessors not supported");
            return "value" in n && (t[e] = n.value), t;
          };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(8),
        i = r.String,
        u = r.TypeError;
      t.exports = function (t) {
        if (o(t)) return t;
        throw u(i(t) + " is not an object");
      };
    },
    function (t, e) {
      var n = Function.prototype.call;
      t.exports = n.bind
        ? n.bind(n)
        : function () {
            return n.apply(n, arguments);
          };
    },
    function (t, e, n) {
      var r = n(56),
        o = n(28);
      t.exports = function (t) {
        return r(o(t));
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(2),
        i = function (t) {
          return o(t) ? t : void 0;
        };
      t.exports = function (t, e) {
        return arguments.length < 2 ? i(r[t]) : r[t] && r[t][e];
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(28),
        i = r.Object;
      t.exports = function (t) {
        return i(o(t));
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(2),
        i = n(6),
        u = n(16),
        a = n(41),
        c = n(38),
        f = n(22),
        s = n(57).CONFIGURABLE,
        l = f.get,
        p = f.enforce,
        v = String(String).split("String");
      (t.exports = function (t, e, n, c) {
        var f,
          l = !!c && !!c.unsafe,
          d = !!c && !!c.enumerable,
          y = !!c && !!c.noTargetGet,
          h = c && void 0 !== c.name ? c.name : e;
        o(n) &&
          ("Symbol(" === String(h).slice(0, 7) &&
            (h = "[" + String(h).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!i(n, "name") || (s && n.name !== h)) && u(n, "name", h),
          (f = p(n)).source ||
            (f.source = v.join("string" == typeof h ? h : ""))),
          t !== r
            ? (l ? !y && t[e] && (d = !0) : delete t[e],
              d ? (t[e] = n) : u(t, e, n))
            : d
            ? (t[e] = n)
            : a(e, n);
      })(Function.prototype, "toString", function () {
        return (o(this) && l(this).source) || c(this);
      });
    },
    function (t, e, n) {
      var r = n(7),
        o = n(9),
        i = n(23);
      t.exports = r
        ? function (t, e, n) {
            return o.f(t, e, i(1, n));
          }
        : function (t, e, n) {
            return (t[e] = n), t;
          };
    },
    function (t, e, n) {
      var r = n(83);
      t.exports = function (t) {
        return r(t.length);
      };
    },
    function (t, e, n) {
      var r,
        o = n(10),
        i = n(91),
        u = n(46),
        a = n(25),
        c = n(104),
        f = n(42),
        s = n(33),
        l = s("IE_PROTO"),
        p = function () {},
        v = function (t) {
          return "<script>" + t + "</script>";
        },
        d = function (t) {
          t.write(v("")), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        },
        y = function () {
          try {
            r = new ActiveXObject("htmlfile");
          } catch (t) {}
          var t, e;
          y =
            "undefined" != typeof document
              ? document.domain && r
                ? d(r)
                : (((e = f("iframe")).style.display = "none"),
                  c.appendChild(e),
                  (e.src = String("javascript:")),
                  (t = e.contentWindow.document).open(),
                  t.write(v("document.F=Object")),
                  t.close(),
                  t.F)
              : d(r);
          for (var n = u.length; n--; ) delete y.prototype[u[n]];
          return y();
        };
      (a[l] = !0),
        (t.exports =
          Object.create ||
          function (t, e) {
            var n;
            return (
              null !== t
                ? ((p.prototype = o(t)),
                  (n = new p()),
                  (p.prototype = null),
                  (n[l] = t))
                : (n = y()),
              void 0 === e ? n : i(n, e)
            );
          });
    },
    function (t, e, n) {
      var r = n(1),
        o = r({}.toString),
        i = r("".slice);
      t.exports = function (t) {
        return i(o(t), 8, -1);
      };
    },
    ,
    function (t, e, n) {
      var r = n(0),
        o = n(30),
        i = r.String;
      t.exports = function (t) {
        if ("Symbol" === o(t))
          throw TypeError("Cannot convert a Symbol value to a string");
        return i(t);
      };
    },
    function (t, e, n) {
      var r,
        o,
        i,
        u = n(99),
        a = n(0),
        c = n(1),
        f = n(8),
        s = n(16),
        l = n(6),
        p = n(40),
        v = n(33),
        d = n(25),
        y = a.TypeError,
        h = a.WeakMap;
      if (u || p.state) {
        var g = p.state || (p.state = new h()),
          m = c(g.get),
          x = c(g.has),
          b = c(g.set);
        (r = function (t, e) {
          if (x(g, t)) throw new y("Object already initialized");
          return (e.facade = t), b(g, t, e), e;
        }),
          (o = function (t) {
            return m(g, t) || {};
          }),
          (i = function (t) {
            return x(g, t);
          });
      } else {
        var O = v("state");
        (d[O] = !0),
          (r = function (t, e) {
            if (l(t, O)) throw new y("Object already initialized");
            return (e.facade = t), s(t, O, e), e;
          }),
          (o = function (t) {
            return l(t, O) ? t[O] : {};
          }),
          (i = function (t) {
            return l(t, O);
          });
      }
      t.exports = {
        set: r,
        get: o,
        has: i,
        enforce: function (t) {
          return i(t) ? o(t) : r(t, {});
        },
        getterFor: function (t) {
          return function (e) {
            var n;
            if (!f(e) || (n = o(e)).type !== t)
              throw y("Incompatible receiver, " + t + " required");
            return n;
          };
        },
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        };
      };
    },
    function (t, e, n) {
      var r = n(7),
        o = n(11),
        i = n(61),
        u = n(23),
        a = n(12),
        c = n(27),
        f = n(6),
        s = n(63),
        l = Object.getOwnPropertyDescriptor;
      e.f = r
        ? l
        : function (t, e) {
            if (((t = a(t)), (e = c(e)), s))
              try {
                return l(t, e);
              } catch (t) {}
            if (f(t, e)) return u(!o(i.f, t, e), t[e]);
          };
    },
    function (t, e) {
      t.exports = {};
    },
    function (t, e, n) {
      var r = n(1);
      t.exports = r({}.isPrototypeOf);
    },
    function (t, e, n) {
      var r = n(96),
        o = n(45);
      t.exports = function (t) {
        var e = r(t, "string");
        return o(e) ? e : e + "";
      };
    },
    function (t, e, n) {
      var r = n(0).TypeError;
      t.exports = function (t) {
        if (null == t) throw r("Can't call method on " + t);
        return t;
      };
    },
    function (t, e, n) {
      var r = n(19);
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == r(t);
        };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(43),
        i = n(2),
        u = n(19),
        a = n(4)("toStringTag"),
        c = r.Object,
        f =
          "Arguments" ==
          u(
            (function () {
              return arguments;
            })()
          );
      t.exports = o
        ? u
        : function (t) {
            var e, n, r;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" ==
                typeof (n = (function (t, e) {
                  try {
                    return t[e];
                  } catch (t) {}
                })((e = c(t)), a))
              ? n
              : f
              ? u(e)
              : "Object" == (r = u(e)) && i(e.callee)
              ? "Arguments"
              : r;
          };
    },
    function (t, e, n) {
      var r = n(32),
        o = n(40);
      (t.exports = function (t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.19.3",
        mode: r ? "pure" : "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
      });
    },
    function (t, e) {
      t.exports = !1;
    },
    function (t, e, n) {
      var r = n(31),
        o = n(37),
        i = r("keys");
      t.exports = function (t) {
        return i[t] || (i[t] = o(t));
      };
    },
    function (t, e) {
      t.exports = {};
    },
    function (t, e, n) {
      var r = n(0),
        o = n(2),
        i = n(52),
        u = r.TypeError;
      t.exports = function (t) {
        if (o(t)) return t;
        throw u(i(t) + " is not a function");
      };
    },
    function (t, e) {
      var n = Math.ceil,
        r = Math.floor;
      t.exports = function (t) {
        var e = +t;
        return e != e || 0 === e ? 0 : (e > 0 ? r : n)(e);
      };
    },
    function (t, e, n) {
      var r = n(1),
        o = 0,
        i = Math.random(),
        u = r((1).toString);
      t.exports = function (t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + u(++o + i, 36);
      };
    },
    function (t, e, n) {
      var r = n(1),
        o = n(2),
        i = n(40),
        u = r(Function.toString);
      o(i.inspectSource) ||
        (i.inspectSource = function (t) {
          return u(t);
        }),
        (t.exports = i.inspectSource);
    },
    function (t, e, n) {
      var r = n(64),
        o = n(46).concat("length", "prototype");
      e.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return r(t, o);
        };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(41),
        i = r["__core-js_shared__"] || o("__core-js_shared__", {});
      t.exports = i;
    },
    function (t, e, n) {
      var r = n(0),
        o = Object.defineProperty;
      t.exports = function (t, e) {
        try {
          o(r, t, { value: e, configurable: !0, writable: !0 });
        } catch (n) {
          r[t] = e;
        }
        return e;
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(8),
        i = r.document,
        u = o(i) && o(i.createElement);
      t.exports = function (t) {
        return u ? i.createElement(t) : {};
      };
    },
    function (t, e, n) {
      var r = {};
      (r[n(4)("toStringTag")] = "z"), (t.exports = "[object z]" === String(r));
    },
    function (t, e, n) {
      "use strict";
      var r = n(27),
        o = n(9),
        i = n(23);
      t.exports = function (t, e, n) {
        var u = r(e);
        u in t ? o.f(t, u, i(0, n)) : (t[u] = n);
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(13),
        i = n(2),
        u = n(26),
        a = n(62),
        c = r.Object;
      t.exports = a
        ? function (t) {
            return "symbol" == typeof t;
          }
        : function (t) {
            var e = o("Symbol");
            return i(e) && u(e.prototype, c(t));
          };
    },
    function (t, e) {
      t.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    function (t, e, n) {
      var r = n(49),
        o = n(3);
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !o(function () {
          var t = Symbol();
          return (
            !String(t) ||
            !(Object(t) instanceof Symbol) ||
            (!Symbol.sham && r && r < 41)
          );
        });
    },
    function (t, e, n) {
      var r = n(1),
        o = n(35),
        i = r(r.bind);
      t.exports = function (t, e) {
        return (
          o(t),
          void 0 === e
            ? t
            : i
            ? i(t, e)
            : function () {
                return t.apply(e, arguments);
              }
        );
      };
    },
    function (t, e, n) {
      var r,
        o,
        i = n(0),
        u = n(73),
        a = i.process,
        c = i.Deno,
        f = (a && a.versions) || (c && c.version),
        s = f && f.v8;
      s && (o = (r = s.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
        !o &&
          u &&
          (!(r = u.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
          (r = u.match(/Chrome\/(\d+)/)) &&
          (o = +r[1]),
        (t.exports = o);
    },
    function (t, e, n) {
      var r = n(35);
      t.exports = function (t, e) {
        var n = t[e];
        return null == n ? void 0 : r(n);
      };
    },
    function (t, e, n) {
      var r = n(9).f,
        o = n(6),
        i = n(4)("toStringTag");
      t.exports = function (t, e, n) {
        t &&
          !o((t = n ? t : t.prototype), i) &&
          r(t, i, { configurable: !0, value: e });
      };
    },
    function (t, e, n) {
      var r = n(0).String;
      t.exports = function (t) {
        try {
          return r(t);
        } catch (t) {
          return "Object";
        }
      };
    },
    function (t, e, n) {
      var r = n(1),
        o = n(3),
        i = n(2),
        u = n(30),
        a = n(13),
        c = n(38),
        f = function () {},
        s = [],
        l = a("Reflect", "construct"),
        p = /^\s*(?:class|function)\b/,
        v = r(p.exec),
        d = !p.exec(f),
        y = function (t) {
          if (!i(t)) return !1;
          try {
            return l(f, s, t), !0;
          } catch (t) {
            return !1;
          }
        };
      t.exports =
        !l ||
        o(function () {
          var t;
          return (
            y(y.call) ||
            !y(Object) ||
            !y(function () {
              t = !0;
            }) ||
            t
          );
        })
          ? function (t) {
              if (!i(t)) return !1;
              switch (u(t)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                  return !1;
              }
              return d || !!v(p, c(t));
            }
          : y;
    },
    function (t, e, n) {
      var r = n(48),
        o = n(1),
        i = n(56),
        u = n(14),
        a = n(17),
        c = n(70),
        f = o([].push),
        s = function (t) {
          var e = 1 == t,
            n = 2 == t,
            o = 3 == t,
            s = 4 == t,
            l = 6 == t,
            p = 7 == t,
            v = 5 == t || l;
          return function (d, y, h, g) {
            for (
              var m,
                x,
                b = u(d),
                O = i(b),
                S = r(y, h),
                w = a(O),
                M = 0,
                E = g || c,
                T = e ? E(d, w) : n || p ? E(d, 0) : void 0;
              w > M;
              M++
            )
              if ((v || M in O) && ((x = S((m = O[M]), M, b)), t))
                if (e) T[M] = x;
                else if (x)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return m;
                    case 6:
                      return M;
                    case 2:
                      f(T, m);
                  }
                else
                  switch (t) {
                    case 4:
                      return !1;
                    case 7:
                      f(T, m);
                  }
            return l ? -1 : o || s ? s : T;
          };
        };
      t.exports = {
        forEach: s(0),
        map: s(1),
        filter: s(2),
        some: s(3),
        every: s(4),
        find: s(5),
        findIndex: s(6),
        filterReject: s(7),
      };
    },
    function (t, e, n) {
      var r = n(36),
        o = Math.max,
        i = Math.min;
      t.exports = function (t, e) {
        var n = r(t);
        return n < 0 ? o(n + e, 0) : i(n, e);
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(1),
        i = n(3),
        u = n(19),
        a = r.Object,
        c = o("".split);
      t.exports = i(function () {
        return !a("z").propertyIsEnumerable(0);
      })
        ? function (t) {
            return "String" == u(t) ? c(t, "") : a(t);
          }
        : a;
    },
    function (t, e, n) {
      var r = n(7),
        o = n(6),
        i = Function.prototype,
        u = r && Object.getOwnPropertyDescriptor,
        a = o(i, "name"),
        c = a && "something" === function () {}.name,
        f = a && (!r || (r && u(i, "name").configurable));
      t.exports = { EXISTS: a, PROPER: c, CONFIGURABLE: f };
    },
    function (t, e, n) {
      var r = n(64),
        o = n(46);
      t.exports =
        Object.keys ||
        function (t) {
          return r(t, o);
        };
    },
    function (t, e, n) {
      "use strict";
      var r = n(12),
        o = n(103),
        i = n(34),
        u = n(22),
        a = n(71),
        c = u.set,
        f = u.getterFor("Array Iterator");
      (t.exports = a(
        Array,
        "Array",
        function (t, e) {
          c(this, { type: "Array Iterator", target: r(t), index: 0, kind: e });
        },
        function () {
          var t = f(this),
            e = t.target,
            n = t.kind,
            r = t.index++;
          return !e || r >= e.length
            ? ((t.target = void 0), { value: void 0, done: !0 })
            : "keys" == n
            ? { value: r, done: !1 }
            : "values" == n
            ? { value: e[r], done: !1 }
            : { value: [r, e[r]], done: !1 };
        },
        "values"
      )),
        (i.Arguments = i.Array),
        o("keys"),
        o("values"),
        o("entries");
    },
    function (t, e, n) {
      var r = n(43),
        o = n(15),
        i = n(101);
      r || o(Object.prototype, "toString", i, { unsafe: !0 });
    },
    function (t, e, n) {
      "use strict";
      var r = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        i = o && !r.call({ 1: 2 }, 1);
      e.f = i
        ? function (t) {
            var e = o(this, t);
            return !!e && e.enumerable;
          }
        : r;
    },
    function (t, e, n) {
      var r = n(47);
      t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    function (t, e, n) {
      var r = n(7),
        o = n(3),
        i = n(42);
      t.exports =
        !r &&
        !o(function () {
          return (
            7 !=
            Object.defineProperty(i("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (t, e, n) {
      var r = n(1),
        o = n(6),
        i = n(12),
        u = n(88).indexOf,
        a = n(25),
        c = r([].push);
      t.exports = function (t, e) {
        var n,
          r = i(t),
          f = 0,
          s = [];
        for (n in r) !o(a, n) && o(r, n) && c(s, n);
        for (; e.length > f; ) o(r, (n = e[f++])) && (~u(s, n) || c(s, n));
        return s;
      };
    },
    function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    function (t, e, n) {
      var r = n(3),
        o = n(4),
        i = n(49),
        u = o("species");
      t.exports = function (t) {
        return (
          i >= 51 ||
          !r(function () {
            var e = [];
            return (
              ((e.constructor = {})[u] = function () {
                return { foo: 1 };
              }),
              1 !== e[t](Boolean).foo
            );
          })
        );
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(6),
        i = n(2),
        u = n(14),
        a = n(33),
        c = n(105),
        f = a("IE_PROTO"),
        s = r.Object,
        l = s.prototype;
      t.exports = c
        ? s.getPrototypeOf
        : function (t) {
            var e = u(t);
            if (o(e, f)) return e[f];
            var n = e.constructor;
            return i(n) && e instanceof n
              ? n.prototype
              : e instanceof s
              ? l
              : null;
          };
    },
    function (t, e, n) {
      var r = n(5),
        o = n(7);
      r(
        { target: "Object", stat: !0, forced: !o, sham: !o },
        { defineProperty: n(9).f }
      );
    },
    function (t, e, n) {
      var r = n(6),
        o = n(80),
        i = n(24),
        u = n(9);
      t.exports = function (t, e) {
        for (var n = o(e), a = u.f, c = i.f, f = 0; f < n.length; f++) {
          var s = n[f];
          r(t, s) || a(t, s, c(e, s));
        }
      };
    },
    function (t, e, n) {
      var r = n(100);
      t.exports = function (t, e) {
        return new (r(t))(0 === e ? 0 : e);
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(5),
        o = n(11),
        i = n(32),
        u = n(57),
        a = n(2),
        c = n(115),
        f = n(67),
        s = n(81),
        l = n(51),
        p = n(16),
        v = n(15),
        d = n(4),
        y = n(34),
        h = n(84),
        g = u.PROPER,
        m = u.CONFIGURABLE,
        x = h.IteratorPrototype,
        b = h.BUGGY_SAFARI_ITERATORS,
        O = d("iterator"),
        S = function () {
          return this;
        };
      t.exports = function (t, e, n, u, d, h, w) {
        c(n, e, u);
        var M,
          E,
          T,
          j = function (t) {
            if (t === d && I) return I;
            if (!b && t in k) return k[t];
            switch (t) {
              case "keys":
              case "values":
              case "entries":
                return function () {
                  return new n(this, t);
                };
            }
            return function () {
              return new n(this);
            };
          },
          _ = e + " Iterator",
          A = !1,
          k = t.prototype,
          P = k[O] || k["@@iterator"] || (d && k[d]),
          I = (!b && P) || j(d),
          C = ("Array" == e && k.entries) || P;
        if (
          (C &&
            (M = f(C.call(new t()))) !== Object.prototype &&
            M.next &&
            (i || f(M) === x || (s ? s(M, x) : a(M[O]) || v(M, O, S)),
            l(M, _, !0, !0),
            i && (y[_] = S)),
          g &&
            "values" == d &&
            P &&
            "values" !== P.name &&
            (!i && m
              ? p(k, "name", "values")
              : ((A = !0),
                (I = function () {
                  return o(P, this);
                }))),
          d)
        )
          if (
            ((E = {
              values: j("values"),
              keys: h ? I : j("keys"),
              entries: j("entries"),
            }),
            w)
          )
            for (T in E) (b || A || !(T in k)) && v(k, T, E[T]);
          else r({ target: e, proto: !0, forced: b || A }, E);
        return (
          (i && !w) || k[O] === I || v(k, O, I, { name: d }), (y[e] = I), E
        );
      };
    },
    function (t, e, n) {
      var r = n(1);
      t.exports = r([].slice);
    },
    function (t, e, n) {
      var r = n(13);
      t.exports = r("navigator", "userAgent") || "";
    },
    function (t, e, n) {
      "use strict";
      var r = n(54).forEach,
        o = n(78)("forEach");
      t.exports = o
        ? [].forEach
        : function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
    },
    function (t, e, n) {
      var r = n(3),
        o = n(2),
        i = /#|\.prototype\./,
        u = function (t, e) {
          var n = c[a(t)];
          return n == s || (n != f && (o(e) ? r(e) : !!e));
        },
        a = (u.normalize = function (t) {
          return String(t).replace(i, ".").toLowerCase();
        }),
        c = (u.data = {}),
        f = (u.NATIVE = "N"),
        s = (u.POLYFILL = "P");
      t.exports = u;
    },
    function (t, e) {
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    function (t, e, n) {
      var r = n(42)("span").classList,
        o = r && r.constructor && r.constructor.prototype;
      t.exports = o === Object.prototype ? void 0 : o;
    },
    function (t, e, n) {
      "use strict";
      var r = n(3);
      t.exports = function (t, e) {
        var n = [][t];
        return (
          !!n &&
          r(function () {
            n.call(
              null,
              e ||
                function () {
                  throw 1;
                },
              1
            );
          })
        );
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(107).charAt,
        o = n(21),
        i = n(22),
        u = n(71),
        a = i.set,
        c = i.getterFor("String Iterator");
      u(
        String,
        "String",
        function (t) {
          a(this, { type: "String Iterator", string: o(t), index: 0 });
        },
        function () {
          var t,
            e = c(this),
            n = e.string,
            o = e.index;
          return o >= n.length
            ? { value: void 0, done: !0 }
            : ((t = r(n, o)), (e.index += t.length), { value: t, done: !1 });
        }
      );
    },
    function (t, e, n) {
      var r = n(13),
        o = n(1),
        i = n(39),
        u = n(65),
        a = n(10),
        c = o([].concat);
      t.exports =
        r("Reflect", "ownKeys") ||
        function (t) {
          var e = i.f(a(t)),
            n = u.f;
          return n ? c(e, n(t)) : e;
        };
    },
    function (t, e, n) {
      var r = n(1),
        o = n(10),
        i = n(116);
      t.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var t,
                e = !1,
                n = {};
              try {
                (t = r(
                  Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
                    .set
                ))(n, []),
                  (e = n instanceof Array);
              } catch (t) {}
              return function (n, r) {
                return o(n), i(r), e ? t(n, r) : (n.__proto__ = r), n;
              };
            })()
          : void 0);
    },
    function (t, e, n) {
      "use strict";
      var r = n(5),
        o = n(0),
        i = n(13),
        u = n(87),
        a = n(11),
        c = n(1),
        f = n(32),
        s = n(7),
        l = n(47),
        p = n(3),
        v = n(6),
        d = n(29),
        y = n(2),
        h = n(8),
        g = n(26),
        m = n(45),
        x = n(10),
        b = n(14),
        O = n(12),
        S = n(27),
        w = n(21),
        M = n(23),
        E = n(18),
        T = n(58),
        j = n(39),
        _ = n(106),
        A = n(65),
        k = n(24),
        P = n(9),
        I = n(61),
        C = n(72),
        R = n(15),
        L = n(31),
        N = n(33),
        D = n(25),
        F = n(37),
        G = n(4),
        z = n(92),
        B = n(93),
        U = n(51),
        V = n(22),
        W = n(54).forEach,
        K = N("hidden"),
        $ = G("toPrimitive"),
        H = V.set,
        Y = V.getterFor("Symbol"),
        X = Object.prototype,
        q = o.Symbol,
        J = q && q.prototype,
        Q = o.TypeError,
        Z = o.QObject,
        tt = i("JSON", "stringify"),
        et = k.f,
        nt = P.f,
        rt = _.f,
        ot = I.f,
        it = c([].push),
        ut = L("symbols"),
        at = L("op-symbols"),
        ct = L("string-to-symbol-registry"),
        ft = L("symbol-to-string-registry"),
        st = L("wks"),
        lt = !Z || !Z.prototype || !Z.prototype.findChild,
        pt =
          s &&
          p(function () {
            return (
              7 !=
              E(
                nt({}, "a", {
                  get: function () {
                    return nt(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (t, e, n) {
                var r = et(X, e);
                r && delete X[e], nt(t, e, n), r && t !== X && nt(X, e, r);
              }
            : nt,
        vt = function (t, e) {
          var n = (ut[t] = E(J));
          return (
            H(n, { type: "Symbol", tag: t, description: e }),
            s || (n.description = e),
            n
          );
        },
        dt = function (t, e, n) {
          t === X && dt(at, e, n), x(t);
          var r = S(e);
          return (
            x(n),
            v(ut, r)
              ? (n.enumerable
                  ? (v(t, K) && t[K][r] && (t[K][r] = !1),
                    (n = E(n, { enumerable: M(0, !1) })))
                  : (v(t, K) || nt(t, K, M(1, {})), (t[K][r] = !0)),
                pt(t, r, n))
              : nt(t, r, n)
          );
        },
        yt = function (t, e) {
          x(t);
          var n = O(e),
            r = T(n).concat(xt(n));
          return (
            W(r, function (e) {
              (s && !a(ht, n, e)) || dt(t, e, n[e]);
            }),
            t
          );
        },
        ht = function (t) {
          var e = S(t),
            n = a(ot, this, e);
          return (
            !(this === X && v(ut, e) && !v(at, e)) &&
            (!(n || !v(this, e) || !v(ut, e) || (v(this, K) && this[K][e])) ||
              n)
          );
        },
        gt = function (t, e) {
          var n = O(t),
            r = S(e);
          if (n !== X || !v(ut, r) || v(at, r)) {
            var o = et(n, r);
            return (
              !o || !v(ut, r) || (v(n, K) && n[K][r]) || (o.enumerable = !0), o
            );
          }
        },
        mt = function (t) {
          var e = rt(O(t)),
            n = [];
          return (
            W(e, function (t) {
              v(ut, t) || v(D, t) || it(n, t);
            }),
            n
          );
        },
        xt = function (t) {
          var e = t === X,
            n = rt(e ? at : O(t)),
            r = [];
          return (
            W(n, function (t) {
              !v(ut, t) || (e && !v(X, t)) || it(r, ut[t]);
            }),
            r
          );
        };
      (l ||
        (R(
          (J = (q = function () {
            if (g(J, this)) throw Q("Symbol is not a constructor");
            var t =
                arguments.length && void 0 !== arguments[0]
                  ? w(arguments[0])
                  : void 0,
              e = F(t),
              n = function (t) {
                this === X && a(n, at, t),
                  v(this, K) && v(this[K], e) && (this[K][e] = !1),
                  pt(this, e, M(1, t));
              };
            return s && lt && pt(X, e, { configurable: !0, set: n }), vt(e, t);
          }).prototype),
          "toString",
          function () {
            return Y(this).tag;
          }
        ),
        R(q, "withoutSetter", function (t) {
          return vt(F(t), t);
        }),
        (I.f = ht),
        (P.f = dt),
        (k.f = gt),
        (j.f = _.f = mt),
        (A.f = xt),
        (z.f = function (t) {
          return vt(G(t), t);
        }),
        s &&
          (nt(J, "description", {
            configurable: !0,
            get: function () {
              return Y(this).description;
            },
          }),
          f || R(X, "propertyIsEnumerable", ht, { unsafe: !0 }))),
      r({ global: !0, wrap: !0, forced: !l, sham: !l }, { Symbol: q }),
      W(T(st), function (t) {
        B(t);
      }),
      r(
        { target: "Symbol", stat: !0, forced: !l },
        {
          for: function (t) {
            var e = w(t);
            if (v(ct, e)) return ct[e];
            var n = q(e);
            return (ct[e] = n), (ft[n] = e), n;
          },
          keyFor: function (t) {
            if (!m(t)) throw Q(t + " is not a symbol");
            if (v(ft, t)) return ft[t];
          },
          useSetter: function () {
            lt = !0;
          },
          useSimple: function () {
            lt = !1;
          },
        }
      ),
      r(
        { target: "Object", stat: !0, forced: !l, sham: !s },
        {
          create: function (t, e) {
            return void 0 === e ? E(t) : yt(E(t), e);
          },
          defineProperty: dt,
          defineProperties: yt,
          getOwnPropertyDescriptor: gt,
        }
      ),
      r(
        { target: "Object", stat: !0, forced: !l },
        { getOwnPropertyNames: mt, getOwnPropertySymbols: xt }
      ),
      r(
        {
          target: "Object",
          stat: !0,
          forced: p(function () {
            A.f(1);
          }),
        },
        {
          getOwnPropertySymbols: function (t) {
            return A.f(b(t));
          },
        }
      ),
      tt) &&
        r(
          {
            target: "JSON",
            stat: !0,
            forced:
              !l ||
              p(function () {
                var t = q();
                return (
                  "[null]" != tt([t]) ||
                  "{}" != tt({ a: t }) ||
                  "{}" != tt(Object(t))
                );
              }),
          },
          {
            stringify: function (t, e, n) {
              var r = C(arguments),
                o = e;
              if ((h(e) || void 0 !== t) && !m(t))
                return (
                  d(e) ||
                    (e = function (t, e) {
                      if ((y(o) && (e = a(o, this, t, e)), !m(e))) return e;
                    }),
                  (r[1] = e),
                  u(tt, null, r)
                );
            },
          }
        );
      if (!J[$]) {
        var bt = J.valueOf;
        R(J, $, function (t) {
          return a(bt, this);
        });
      }
      U(q, "Symbol"), (D[K] = !0);
    },
    function (t, e, n) {
      var r = n(36),
        o = Math.min;
      t.exports = function (t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0;
      };
    },
    function (t, e, n) {
      "use strict";
      var r,
        o,
        i,
        u = n(3),
        a = n(2),
        c = n(18),
        f = n(67),
        s = n(15),
        l = n(4),
        p = n(32),
        v = l("iterator"),
        d = !1;
      [].keys &&
        ("next" in (i = [].keys())
          ? (o = f(f(i))) !== Object.prototype && (r = o)
          : (d = !0)),
        null == r ||
        u(function () {
          var t = {};
          return r[v].call(t) !== t;
        })
          ? (r = {})
          : p && (r = c(r)),
        a(r[v]) ||
          s(r, v, function () {
            return this;
          }),
        (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: d });
    },
    function (t, e, n) {
      var r = n(30),
        o = n(50),
        i = n(34),
        u = n(4)("iterator");
      t.exports = function (t) {
        if (null != t) return o(t, u) || o(t, "@@iterator") || i[r(t)];
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(76),
        i = n(77),
        u = n(59),
        a = n(16),
        c = n(4),
        f = c("iterator"),
        s = c("toStringTag"),
        l = u.values,
        p = function (t, e) {
          if (t) {
            if (t[f] !== l)
              try {
                a(t, f, l);
              } catch (e) {
                t[f] = l;
              }
            if ((t[s] || a(t, s, e), o[e]))
              for (var n in u)
                if (t[n] !== u[n])
                  try {
                    a(t, n, u[n]);
                  } catch (e) {
                    t[n] = u[n];
                  }
          }
        };
      for (var v in o) p(r[v] && r[v].prototype, v);
      p(i, "DOMTokenList");
    },
    function (t, e) {
      var n = Function.prototype,
        r = n.apply,
        o = n.bind,
        i = n.call;
      t.exports =
        ("object" == typeof Reflect && Reflect.apply) ||
        (o
          ? i.bind(r)
          : function () {
              return i.apply(r, arguments);
            });
    },
    function (t, e, n) {
      var r = n(12),
        o = n(55),
        i = n(17),
        u = function (t) {
          return function (e, n, u) {
            var a,
              c = r(e),
              f = i(c),
              s = o(u, f);
            if (t && n != n) {
              for (; f > s; ) if ((a = c[s++]) != a) return !0;
            } else
              for (; f > s; s++)
                if ((t || s in c) && c[s] === n) return t || s || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: u(!0), indexOf: u(!1) };
    },
    function (t, e, n) {
      "use strict";
      var r = n(5),
        o = n(7),
        i = n(0),
        u = n(1),
        a = n(6),
        c = n(2),
        f = n(26),
        s = n(21),
        l = n(9).f,
        p = n(69),
        v = i.Symbol,
        d = v && v.prototype;
      if (o && c(v) && (!("description" in d) || void 0 !== v().description)) {
        var y = {},
          h = function () {
            var t =
                arguments.length < 1 || void 0 === arguments[0]
                  ? void 0
                  : s(arguments[0]),
              e = f(d, this) ? new v(t) : void 0 === t ? v() : v(t);
            return "" === t && (y[e] = !0), e;
          };
        p(h, v), (h.prototype = d), (d.constructor = h);
        var g = "Symbol(test)" == String(v("test")),
          m = u(d.toString),
          x = u(d.valueOf),
          b = /^Symbol\((.*)\)[^)]+$/,
          O = u("".replace),
          S = u("".slice);
        l(d, "description", {
          configurable: !0,
          get: function () {
            var t = x(this),
              e = m(t);
            if (a(y, t)) return "";
            var n = g ? S(e, 7, -1) : O(e, b, "$1");
            return "" === n ? void 0 : n;
          },
        }),
          r({ global: !0, forced: !0 }, { Symbol: h });
      }
    },
    function (t, e, n) {
      n(93)("iterator");
    },
    function (t, e, n) {
      var r = n(7),
        o = n(9),
        i = n(10),
        u = n(12),
        a = n(58);
      t.exports = r
        ? Object.defineProperties
        : function (t, e) {
            i(t);
            for (var n, r = u(e), c = a(e), f = c.length, s = 0; f > s; )
              o.f(t, (n = c[s++]), r[n]);
            return t;
          };
    },
    function (t, e, n) {
      var r = n(4);
      e.f = r;
    },
    function (t, e, n) {
      var r = n(119),
        o = n(6),
        i = n(92),
        u = n(9).f;
      t.exports = function (t) {
        var e = r.Symbol || (r.Symbol = {});
        o(e, t) || u(e, t, { value: i.f(t) });
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(5),
        o = n(74);
      r(
        { target: "Array", proto: !0, forced: [].forEach != o },
        { forEach: o }
      );
    },
    function (t, e, n) {
      var r = n(0),
        o = n(76),
        i = n(77),
        u = n(74),
        a = n(16),
        c = function (t) {
          if (t && t.forEach !== u)
            try {
              a(t, "forEach", u);
            } catch (e) {
              t.forEach = u;
            }
        };
      for (var f in o) o[f] && c(r[f] && r[f].prototype);
      c(i);
    },
    function (t, e, n) {
      var r = n(0),
        o = n(11),
        i = n(8),
        u = n(45),
        a = n(50),
        c = n(98),
        f = n(4),
        s = r.TypeError,
        l = f("toPrimitive");
      t.exports = function (t, e) {
        if (!i(t) || u(t)) return t;
        var n,
          r = a(t, l);
        if (r) {
          if (
            (void 0 === e && (e = "default"), (n = o(r, t, e)), !i(n) || u(n))
          )
            return n;
          throw s("Can't convert object to primitive value");
        }
        return void 0 === e && (e = "number"), c(t, e);
      };
    },
    function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
    function (t, e, n) {
      var r = n(0),
        o = n(11),
        i = n(2),
        u = n(8),
        a = r.TypeError;
      t.exports = function (t, e) {
        var n, r;
        if ("string" === e && i((n = t.toString)) && !u((r = o(n, t))))
          return r;
        if (i((n = t.valueOf)) && !u((r = o(n, t)))) return r;
        if ("string" !== e && i((n = t.toString)) && !u((r = o(n, t))))
          return r;
        throw a("Can't convert object to primitive value");
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(2),
        i = n(38),
        u = r.WeakMap;
      t.exports = o(u) && /native code/.test(i(u));
    },
    function (t, e, n) {
      var r = n(0),
        o = n(29),
        i = n(53),
        u = n(8),
        a = n(4)("species"),
        c = r.Array;
      t.exports = function (t) {
        var e;
        return (
          o(t) &&
            ((e = t.constructor),
            ((i(e) && (e === c || o(e.prototype))) ||
              (u(e) && null === (e = e[a]))) &&
              (e = void 0)),
          void 0 === e ? c : e
        );
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(43),
        o = n(30);
      t.exports = r
        ? {}.toString
        : function () {
            return "[object " + o(this) + "]";
          };
    },
    function (t, e, n) {
      "use strict";
      var r,
        o,
        i = n(11),
        u = n(1),
        a = n(21),
        c = n(117),
        f = n(118),
        s = n(31),
        l = n(18),
        p = n(22).get,
        v = n(122),
        d = n(123),
        y = s("native-string-replace", String.prototype.replace),
        h = RegExp.prototype.exec,
        g = h,
        m = u("".charAt),
        x = u("".indexOf),
        b = u("".replace),
        O = u("".slice),
        S =
          ((o = /b*/g),
          i(h, (r = /a/), "a"),
          i(h, o, "a"),
          0 !== r.lastIndex || 0 !== o.lastIndex),
        w = f.BROKEN_CARET,
        M = void 0 !== /()??/.exec("")[1];
      (S || M || w || v || d) &&
        (g = function (t) {
          var e,
            n,
            r,
            o,
            u,
            f,
            s,
            v = this,
            d = p(v),
            E = a(t),
            T = d.raw;
          if (T)
            return (
              (T.lastIndex = v.lastIndex),
              (e = i(g, T, E)),
              (v.lastIndex = T.lastIndex),
              e
            );
          var j = d.groups,
            _ = w && v.sticky,
            A = i(c, v),
            k = v.source,
            P = 0,
            I = E;
          if (
            (_ &&
              ((A = b(A, "y", "")),
              -1 === x(A, "g") && (A += "g"),
              (I = O(E, v.lastIndex)),
              v.lastIndex > 0 &&
                (!v.multiline ||
                  (v.multiline && "\n" !== m(E, v.lastIndex - 1))) &&
                ((k = "(?: " + k + ")"), (I = " " + I), P++),
              (n = new RegExp("^(?:" + k + ")", A))),
            M && (n = new RegExp("^" + k + "$(?!\\s)", A)),
            S && (r = v.lastIndex),
            (o = i(h, _ ? n : v, I)),
            _
              ? o
                ? ((o.input = O(o.input, P)),
                  (o[0] = O(o[0], P)),
                  (o.index = v.lastIndex),
                  (v.lastIndex += o[0].length))
                : (v.lastIndex = 0)
              : S && o && (v.lastIndex = v.global ? o.index + o[0].length : r),
            M &&
              o &&
              o.length > 1 &&
              i(y, o[0], n, function () {
                for (u = 1; u < arguments.length - 2; u++)
                  void 0 === arguments[u] && (o[u] = void 0);
              }),
            o && j)
          )
            for (o.groups = f = l(null), u = 0; u < j.length; u++)
              f[(s = j[u])[0]] = o[s[1]];
          return o;
        }),
        (t.exports = g);
    },
    function (t, e, n) {
      var r = n(4),
        o = n(18),
        i = n(9),
        u = r("unscopables"),
        a = Array.prototype;
      null == a[u] && i.f(a, u, { configurable: !0, value: o(null) }),
        (t.exports = function (t) {
          a[u][t] = !0;
        });
    },
    function (t, e, n) {
      var r = n(13);
      t.exports = r("document", "documentElement");
    },
    function (t, e, n) {
      var r = n(3);
      t.exports = !r(function () {
        function t() {}
        return (
          (t.prototype.constructor = null),
          Object.getPrototypeOf(new t()) !== t.prototype
        );
      });
    },
    function (t, e, n) {
      var r = n(19),
        o = n(12),
        i = n(39).f,
        u = n(113),
        a =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
      t.exports.f = function (t) {
        return a && "Window" == r(t)
          ? (function (t) {
              try {
                return i(t);
              } catch (t) {
                return u(a);
              }
            })(t)
          : i(o(t));
      };
    },
    function (t, e, n) {
      var r = n(1),
        o = n(36),
        i = n(21),
        u = n(28),
        a = r("".charAt),
        c = r("".charCodeAt),
        f = r("".slice),
        s = function (t) {
          return function (e, n) {
            var r,
              s,
              l = i(u(e)),
              p = o(n),
              v = l.length;
            return p < 0 || p >= v
              ? t
                ? ""
                : void 0
              : (r = c(l, p)) < 55296 ||
                r > 56319 ||
                p + 1 === v ||
                (s = c(l, p + 1)) < 56320 ||
                s > 57343
              ? t
                ? a(l, p)
                : r
              : t
              ? f(l, p, p + 2)
              : s - 56320 + ((r - 55296) << 10) + 65536;
          };
        };
      t.exports = { codeAt: s(!1), charAt: s(!0) };
    },
    function (t, e, n) {
      "use strict";
      var r = n(5),
        o = n(102);
      r({ target: "RegExp", proto: !0, forced: /./.exec !== o }, { exec: o });
    },
    function (t, e, n) {
      var r = n(4),
        o = n(34),
        i = r("iterator"),
        u = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (o.Array === t || u[i] === t);
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(11),
        i = n(35),
        u = n(10),
        a = n(52),
        c = n(85),
        f = r.TypeError;
      t.exports = function (t, e) {
        var n = arguments.length < 2 ? c(t) : e;
        if (i(n)) return u(o(n, t));
        throw f(a(t) + " is not iterable");
      };
    },
    function (t, e, n) {
      var r = n(11),
        o = n(10),
        i = n(50);
      t.exports = function (t, e, n) {
        var u, a;
        o(t);
        try {
          if (!(u = i(t, "return"))) {
            if ("throw" === e) throw n;
            return n;
          }
          u = r(u, t);
        } catch (t) {
          (a = !0), (u = t);
        }
        if ("throw" === e) throw n;
        if (a) throw u;
        return o(u), n;
      };
    },
    function (t, e, n) {
      var r = n(4)("iterator"),
        o = !1;
      try {
        var i = 0,
          u = {
            next: function () {
              return { done: !!i++ };
            },
            return: function () {
              o = !0;
            },
          };
        (u[r] = function () {
          return this;
        }),
          Array.from(u, function () {
            throw 2;
          });
      } catch (t) {}
      t.exports = function (t, e) {
        if (!e && !o) return !1;
        var n = !1;
        try {
          var i = {};
          (i[r] = function () {
            return {
              next: function () {
                return { done: (n = !0) };
              },
            };
          }),
            t(i);
        } catch (t) {}
        return n;
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(55),
        i = n(17),
        u = n(44),
        a = r.Array,
        c = Math.max;
      t.exports = function (t, e, n) {
        for (
          var r = i(t),
            f = o(e, r),
            s = o(void 0 === n ? r : n, r),
            l = a(c(s - f, 0)),
            p = 0;
          f < s;
          f++, p++
        )
          u(l, p, t[f]);
        return (l.length = p), l;
      };
    },
    ,
    function (t, e, n) {
      "use strict";
      var r = n(84).IteratorPrototype,
        o = n(18),
        i = n(23),
        u = n(51),
        a = n(34),
        c = function () {
          return this;
        };
      t.exports = function (t, e, n, f) {
        var s = e + " Iterator";
        return (
          (t.prototype = o(r, { next: i(+!f, n) })),
          u(t, s, !1, !0),
          (a[s] = c),
          t
        );
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(2),
        i = r.String,
        u = r.TypeError;
      t.exports = function (t) {
        if ("object" == typeof t || o(t)) return t;
        throw u("Can't set " + i(t) + " as a prototype");
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(10);
      t.exports = function () {
        var t = r(this),
          e = "";
        return (
          t.global && (e += "g"),
          t.ignoreCase && (e += "i"),
          t.multiline && (e += "m"),
          t.dotAll && (e += "s"),
          t.unicode && (e += "u"),
          t.sticky && (e += "y"),
          e
        );
      };
    },
    function (t, e, n) {
      var r = n(3),
        o = n(0).RegExp,
        i = r(function () {
          var t = o("a", "y");
          return (t.lastIndex = 2), null != t.exec("abcd");
        }),
        u =
          i ||
          r(function () {
            return !o("a", "y").sticky;
          }),
        a =
          i ||
          r(function () {
            var t = o("^r", "gy");
            return (t.lastIndex = 2), null != t.exec("str");
          });
      t.exports = { BROKEN_CARET: a, MISSED_STICKY: u, UNSUPPORTED_Y: i };
    },
    function (t, e, n) {
      var r = n(0);
      t.exports = r;
    },
    function (t, e, n) {
      var r = n(0),
        o = n(48),
        i = n(11),
        u = n(10),
        a = n(52),
        c = n(109),
        f = n(17),
        s = n(26),
        l = n(110),
        p = n(85),
        v = n(111),
        d = r.TypeError,
        y = function (t, e) {
          (this.stopped = t), (this.result = e);
        },
        h = y.prototype;
      t.exports = function (t, e, n) {
        var r,
          g,
          m,
          x,
          b,
          O,
          S,
          w = n && n.that,
          M = !(!n || !n.AS_ENTRIES),
          E = !(!n || !n.IS_ITERATOR),
          T = !(!n || !n.INTERRUPTED),
          j = o(e, w),
          _ = function (t) {
            return r && v(r, "normal", t), new y(!0, t);
          },
          A = function (t) {
            return M
              ? (u(t), T ? j(t[0], t[1], _) : j(t[0], t[1]))
              : T
              ? j(t, _)
              : j(t);
          };
        if (E) r = t;
        else {
          if (!(g = p(t))) throw d(a(t) + " is not iterable");
          if (c(g)) {
            for (m = 0, x = f(t); x > m; m++)
              if ((b = A(t[m])) && s(h, b)) return b;
            return new y(!1);
          }
          r = l(t, g);
        }
        for (O = r.next; !(S = i(O, r)).done; ) {
          try {
            b = A(S.value);
          } catch (t) {
            v(r, "throw", t);
          }
          if ("object" == typeof b && b && s(h, b)) return b;
        }
        return new y(!1);
      };
    },
    function (t, e, n) {
      var r = n(0),
        o = n(26),
        i = r.TypeError;
      t.exports = function (t, e) {
        if (o(e, t)) return t;
        throw i("Incorrect invocation");
      };
    },
    function (t, e, n) {
      var r = n(3),
        o = n(0).RegExp;
      t.exports = r(function () {
        var t = o(".", "s");
        return !(t.dotAll && t.exec("\n") && "s" === t.flags);
      });
    },
    function (t, e, n) {
      var r = n(3),
        o = n(0).RegExp;
      t.exports = r(function () {
        var t = o("(?<a>b)", "g");
        return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
      });
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r = n(5),
        o = n(0),
        i = n(3),
        u = n(29),
        a = n(8),
        c = n(14),
        f = n(17),
        s = n(44),
        l = n(70),
        p = n(66),
        v = n(4),
        d = n(49),
        y = v("isConcatSpreadable"),
        h = o.TypeError,
        g =
          d >= 51 ||
          !i(function () {
            var t = [];
            return (t[y] = !1), t.concat()[0] !== t;
          }),
        m = p("concat"),
        x = function (t) {
          if (!a(t)) return !1;
          var e = t[y];
          return void 0 !== e ? !!e : u(t);
        };
      r(
        { target: "Array", proto: !0, forced: !g || !m },
        {
          concat: function (t) {
            var e,
              n,
              r,
              o,
              i,
              u = c(this),
              a = l(u, 0),
              p = 0;
            for (e = -1, r = arguments.length; e < r; e++)
              if (x((i = -1 === e ? u : arguments[e]))) {
                if (p + (o = f(i)) > 9007199254740991)
                  throw h("Maximum allowed index exceeded");
                for (n = 0; n < o; n++, p++) n in i && s(a, p, i[n]);
              } else {
                if (p >= 9007199254740991)
                  throw h("Maximum allowed index exceeded");
                s(a, p++, i);
              }
            return (a.length = p), a;
          },
        }
      );
    },
    function (t, e, n) {
      n(5)({ target: "Array", stat: !0 }, { isArray: n(29) });
    },
    ,
    function (t, e, n) {
      var r = n(5),
        o = n(135);
      r(
        {
          target: "Array",
          stat: !0,
          forced: !n(112)(function (t) {
            Array.from(t);
          }),
        },
        { from: o }
      );
    },
    ,
    function (t, e, n) {
      var r = n(5),
        o = n(1),
        i = n(25),
        u = n(8),
        a = n(6),
        c = n(9).f,
        f = n(39),
        s = n(106),
        l = n(149),
        p = n(37),
        v = n(151),
        d = !1,
        y = p("meta"),
        h = 0,
        g = function (t) {
          c(t, y, { value: { objectID: "O" + h++, weakData: {} } });
        },
        m = (t.exports = {
          enable: function () {
            (m.enable = function () {}), (d = !0);
            var t = f.f,
              e = o([].splice),
              n = {};
            (n[y] = 1),
              t(n).length &&
                ((f.f = function (n) {
                  for (var r = t(n), o = 0, i = r.length; o < i; o++)
                    if (r[o] === y) {
                      e(r, o, 1);
                      break;
                    }
                  return r;
                }),
                r(
                  { target: "Object", stat: !0, forced: !0 },
                  { getOwnPropertyNames: s.f }
                ));
          },
          fastKey: function (t, e) {
            if (!u(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t;
            if (!a(t, y)) {
              if (!l(t)) return "F";
              if (!e) return "E";
              g(t);
            }
            return t[y].objectID;
          },
          getWeakData: function (t, e) {
            if (!a(t, y)) {
              if (!l(t)) return !0;
              if (!e) return !1;
              g(t);
            }
            return t[y].weakData;
          },
          onFreeze: function (t) {
            return v && d && l(t) && !a(t, y) && g(t), t;
          },
        });
      i[y] = !0;
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        o = n(48),
        i = n(11),
        u = n(14),
        a = n(136),
        c = n(109),
        f = n(53),
        s = n(17),
        l = n(44),
        p = n(110),
        v = n(85),
        d = r.Array;
      t.exports = function (t) {
        var e = u(t),
          n = f(this),
          r = arguments.length,
          y = r > 1 ? arguments[1] : void 0,
          h = void 0 !== y;
        h && (y = o(y, r > 2 ? arguments[2] : void 0));
        var g,
          m,
          x,
          b,
          O,
          S,
          w = v(e),
          M = 0;
        if (!w || (this == d && c(w)))
          for (g = s(e), m = n ? new this(g) : d(g); g > M; M++)
            (S = h ? y(e[M], M) : e[M]), l(m, M, S);
        else
          for (
            O = (b = p(e, w)).next, m = n ? new this() : [];
            !(x = i(O, b)).done;
            M++
          )
            (S = h ? a(b, y, [x.value, M], !0) : x.value), l(m, M, S);
        return (m.length = M), m;
      };
    },
    function (t, e, n) {
      var r = n(10),
        o = n(111);
      t.exports = function (t, e, n, i) {
        try {
          return i ? e(r(n)[0], n[1]) : e(n);
        } catch (e) {
          o(t, "throw", e);
        }
      };
    },
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r = n(5),
        o = n(0),
        i = n(29),
        u = n(53),
        a = n(8),
        c = n(55),
        f = n(17),
        s = n(12),
        l = n(44),
        p = n(4),
        v = n(66),
        d = n(72),
        y = v("slice"),
        h = p("species"),
        g = o.Array,
        m = Math.max;
      r(
        { target: "Array", proto: !0, forced: !y },
        {
          slice: function (t, e) {
            var n,
              r,
              o,
              p = s(this),
              v = f(p),
              y = c(t, v),
              x = c(void 0 === e ? v : e, v);
            if (
              i(p) &&
              ((n = p.constructor),
              ((u(n) && (n === g || i(n.prototype))) ||
                (a(n) && null === (n = n[h]))) &&
                (n = void 0),
              n === g || void 0 === n)
            )
              return d(p, y, x);
            for (
              r = new (void 0 === n ? g : n)(m(x - y, 0)), o = 0;
              y < x;
              y++, o++
            )
              y in p && l(r, o, p[y]);
            return (r.length = o), r;
          },
        }
      );
    },
    function (t, e, n) {
      var r = n(7),
        o = n(57).EXISTS,
        i = n(1),
        u = n(9).f,
        a = Function.prototype,
        c = i(a.toString),
        f = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
        s = i(f.exec);
      r &&
        !o &&
        u(a, "name", {
          configurable: !0,
          get: function () {
            try {
              return s(f, c(this))[1];
            } catch (t) {
              return "";
            }
          },
        });
    },
    function (t, e, n) {
      var r = n(2),
        o = n(8),
        i = n(81);
      t.exports = function (t, e, n) {
        var u, a;
        return (
          i &&
            r((u = e.constructor)) &&
            u !== n &&
            o((a = u.prototype)) &&
            a !== n.prototype &&
            i(t, a),
          t
        );
      };
    },
    function (t, e, n) {
      var r = n(15);
      t.exports = function (t, e, n) {
        for (var o in e) r(t, o, e[o], n);
        return t;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(13),
        o = n(9),
        i = n(4),
        u = n(7),
        a = i("species");
      t.exports = function (t) {
        var e = r(t),
          n = o.f;
        u &&
          e &&
          !e[a] &&
          n(e, a, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    ,
    function (t, e, n) {
      "use strict";
      var r = n(5),
        o = n(0),
        i = n(1),
        u = n(75),
        a = n(15),
        c = n(134),
        f = n(120),
        s = n(121),
        l = n(2),
        p = n(8),
        v = n(3),
        d = n(112),
        y = n(51),
        h = n(141);
      t.exports = function (t, e, n) {
        var g = -1 !== t.indexOf("Map"),
          m = -1 !== t.indexOf("Weak"),
          x = g ? "set" : "add",
          b = o[t],
          O = b && b.prototype,
          S = b,
          w = {},
          M = function (t) {
            var e = i(O[t]);
            a(
              O,
              t,
              "add" == t
                ? function (t) {
                    return e(this, 0 === t ? 0 : t), this;
                  }
                : "delete" == t
                ? function (t) {
                    return !(m && !p(t)) && e(this, 0 === t ? 0 : t);
                  }
                : "get" == t
                ? function (t) {
                    return m && !p(t) ? void 0 : e(this, 0 === t ? 0 : t);
                  }
                : "has" == t
                ? function (t) {
                    return !(m && !p(t)) && e(this, 0 === t ? 0 : t);
                  }
                : function (t, n) {
                    return e(this, 0 === t ? 0 : t, n), this;
                  }
            );
          };
        if (
          u(
            t,
            !l(b) ||
              !(
                m ||
                (O.forEach &&
                  !v(function () {
                    new b().entries().next();
                  }))
              )
          )
        )
          (S = n.getConstructor(e, t, g, x)), c.enable();
        else if (u(t, !0)) {
          var E = new S(),
            T = E[x](m ? {} : -0, 1) != E,
            j = v(function () {
              E.has(1);
            }),
            _ = d(function (t) {
              new b(t);
            }),
            A =
              !m &&
              v(function () {
                for (var t = new b(), e = 5; e--; ) t[x](e, e);
                return !t.has(-0);
              });
          _ ||
            (((S = e(function (t, e) {
              s(t, O);
              var n = h(new b(), t, S);
              return null != e && f(e, n[x], { that: n, AS_ENTRIES: g }), n;
            })).prototype = O),
            (O.constructor = S)),
            (j || A) && (M("delete"), M("has"), g && M("get")),
            (A || T) && M(x),
            m && O.clear && delete O.clear;
        }
        return (
          (w[t] = S),
          r({ global: !0, forced: S != b }, w),
          y(S, t),
          m || n.setStrong(S, t, g),
          S
        );
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(9).f,
        o = n(18),
        i = n(142),
        u = n(48),
        a = n(121),
        c = n(120),
        f = n(71),
        s = n(143),
        l = n(7),
        p = n(134).fastKey,
        v = n(22),
        d = v.set,
        y = v.getterFor;
      t.exports = {
        getConstructor: function (t, e, n, f) {
          var s = t(function (t, r) {
              a(t, v),
                d(t, {
                  type: e,
                  index: o(null),
                  first: void 0,
                  last: void 0,
                  size: 0,
                }),
                l || (t.size = 0),
                null != r && c(r, t[f], { that: t, AS_ENTRIES: n });
            }),
            v = s.prototype,
            h = y(e),
            g = function (t, e, n) {
              var r,
                o,
                i = h(t),
                u = m(t, e);
              return (
                u
                  ? (u.value = n)
                  : ((i.last = u =
                      {
                        index: (o = p(e, !0)),
                        key: e,
                        value: n,
                        previous: (r = i.last),
                        next: void 0,
                        removed: !1,
                      }),
                    i.first || (i.first = u),
                    r && (r.next = u),
                    l ? i.size++ : t.size++,
                    "F" !== o && (i.index[o] = u)),
                t
              );
            },
            m = function (t, e) {
              var n,
                r = h(t),
                o = p(e);
              if ("F" !== o) return r.index[o];
              for (n = r.first; n; n = n.next) if (n.key == e) return n;
            };
          return (
            i(v, {
              clear: function () {
                for (var t = h(this), e = t.index, n = t.first; n; )
                  (n.removed = !0),
                    n.previous && (n.previous = n.previous.next = void 0),
                    delete e[n.index],
                    (n = n.next);
                (t.first = t.last = void 0), l ? (t.size = 0) : (this.size = 0);
              },
              delete: function (t) {
                var e = h(this),
                  n = m(this, t);
                if (n) {
                  var r = n.next,
                    o = n.previous;
                  delete e.index[n.index],
                    (n.removed = !0),
                    o && (o.next = r),
                    r && (r.previous = o),
                    e.first == n && (e.first = r),
                    e.last == n && (e.last = o),
                    l ? e.size-- : this.size--;
                }
                return !!n;
              },
              forEach: function (t) {
                for (
                  var e,
                    n = h(this),
                    r = u(t, arguments.length > 1 ? arguments[1] : void 0);
                  (e = e ? e.next : n.first);

                )
                  for (r(e.value, e.key, this); e && e.removed; )
                    e = e.previous;
              },
              has: function (t) {
                return !!m(this, t);
              },
            }),
            i(
              v,
              n
                ? {
                    get: function (t) {
                      var e = m(this, t);
                      return e && e.value;
                    },
                    set: function (t, e) {
                      return g(this, 0 === t ? 0 : t, e);
                    },
                  }
                : {
                    add: function (t) {
                      return g(this, (t = 0 === t ? 0 : t), t);
                    },
                  }
            ),
            l &&
              r(v, "size", {
                get: function () {
                  return h(this).size;
                },
              }),
            s
          );
        },
        setStrong: function (t, e, n) {
          var r = e + " Iterator",
            o = y(e),
            i = y(r);
          f(
            t,
            e,
            function (t, e) {
              d(this, {
                type: r,
                target: t,
                state: o(t),
                kind: e,
                last: void 0,
              });
            },
            function () {
              for (var t = i(this), e = t.kind, n = t.last; n && n.removed; )
                n = n.previous;
              return t.target && (t.last = n = n ? n.next : t.state.first)
                ? "keys" == e
                  ? { value: n.key, done: !1 }
                  : "values" == e
                  ? { value: n.value, done: !1 }
                  : { value: [n.key, n.value], done: !1 }
                : ((t.target = void 0), { value: void 0, done: !0 });
            },
            n ? "entries" : "values",
            !n,
            !0
          ),
            s(e);
        },
      };
    },
    ,
    ,
    function (t, e, n) {
      var r = n(3),
        o = n(8),
        i = n(19),
        u = n(150),
        a = Object.isExtensible,
        c = r(function () {
          a(1);
        });
      t.exports =
        c || u
          ? function (t) {
              return !!o(t) && (!u || "ArrayBuffer" != i(t)) && (!a || a(t));
            }
          : a;
    },
    function (t, e, n) {
      var r = n(3);
      t.exports = r(function () {
        if ("function" == typeof ArrayBuffer) {
          var t = new ArrayBuffer(8);
          Object.isExtensible(t) && Object.defineProperty(t, "a", { value: 8 });
        }
      });
    },
    function (t, e, n) {
      var r = n(3);
      t.exports = !r(function () {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    },
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n(145)(
        "Map",
        function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        n(146)
      );
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r = n(5),
        o = n(1),
        i = n(88).indexOf,
        u = n(78),
        a = o([].indexOf),
        c = !!a && 1 / a([1], 1, -0) < 0,
        f = u("indexOf");
      r(
        { target: "Array", proto: !0, forced: c || !f },
        {
          indexOf: function (t) {
            var e = arguments.length > 1 ? arguments[1] : void 0;
            return c ? a(this, t, e) || 0 : i(this, t, e);
          },
        }
      );
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "Menu", function () {
          return f;
        });
      n(59),
        n(156),
        n(60),
        n(79),
        n(86),
        n(94),
        n(95),
        n(163),
        n(132),
        n(130),
        n(129),
        n(68),
        n(82),
        n(89),
        n(90),
        n(139),
        n(140),
        n(108);
      function r(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return o(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return o(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return o(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var u,
        a,
        c,
        f = (function () {
          function t(e) {
            var n = this,
              r = e.lf;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.__menuDOM = document.createElement("ul")),
              (this.lf = r),
              (this.menuTypeMap = new Map()),
              this.init(),
              (this.lf.setMenuConfig = function (t) {
                n.setMenuConfig(t);
              }),
              (this.lf.addMenuConfig = function (t) {
                n.addMenuConfig(t);
              }),
              (this.lf.setMenuByType = function (t) {
                n.setMenuByType(t);
              });
          }
          var e, n, o;
          return (
            (e = t),
            (n = [
              {
                key: "init",
                value: function () {
                  var t = this,
                    e = [
                      {
                        text: "删除",
                        callback: function (e) {
                          t.lf.deleteNode(e.id);
                        },
                      },
                      {
                        text: "编辑文本",
                        callback: function (e) {
                          t.lf.graphModel.editText(e.id);
                        },
                      },
                      {
                        text: "复制",
                        callback: function (e) {
                          t.lf.cloneNode(e.id);
                        },
                      },
                    ];
                  this.menuTypeMap.set("lf:defaultNodeMenu", e);
                  var n = [
                    {
                      text: "删除",
                      callback: function (e) {
                        t.lf.deleteEdge(e.id);
                      },
                    },
                    {
                      text: "编辑文本",
                      callback: function (e) {
                        t.lf.graphModel.editText(e.id);
                      },
                    },
                  ];
                  this.menuTypeMap.set("lf:defaultEdgeMenu", n),
                    this.menuTypeMap.set("lf:defaultGraphMenu", []);
                  var r = [
                    {
                      text: "删除",
                      callback: function (e) {
                        t.lf.clearSelectElements(),
                          e.edges.forEach(function (e) {
                            return t.lf.deleteEdge(e.id);
                          }),
                          e.nodes.forEach(function (e) {
                            return t.lf.deleteNode(e.id);
                          });
                      },
                    },
                  ];
                  this.menuTypeMap.set("lf:defaultSelectionMenu", r);
                },
              },
              {
                key: "render",
                value: function (t, e) {
                  var n = this;
                  (this.__container = e),
                    (this.__currentData = null),
                    (this.__menuDOM.className = "lf-menu"),
                    e.appendChild(this.__menuDOM),
                    this.__menuDOM.addEventListener(
                      "click",
                      function (t) {
                        t.stopPropagation();
                        for (
                          var e = t.target;
                          -1 ===
                            Array.from(e.classList).indexOf("lf-menu-item") &&
                          -1 === Array.from(e.classList).indexOf("lf-menu");

                        )
                          e = e.parentElement;
                        Array.from(e.classList).indexOf("lf-menu-item") > -1
                          ? (e.onclickCallback(n.__currentData),
                            (n.__menuDOM.style.display = "none"),
                            (n.__currentData = null))
                          : console.warn("点击区域不在菜单项内，请检查代码！");
                      },
                      !0
                    ),
                    this.lf.on("node:contextmenu", function (t) {
                      var e = t.data,
                        r = t.position.domOverlayPosition,
                        o = r.x,
                        i = r.y,
                        u = e.id,
                        a = n.lf.graphModel.getNodeModelById(u),
                        c = [],
                        f = n.menuTypeMap.get(a.type);
                      (c =
                        a && a.menu && Array.isArray(a.menu)
                          ? a.menu
                          : f || n.menuTypeMap.get("lf:defaultNodeMenu")),
                        (n.__currentData = e),
                        n.showMenu(o, i, c);
                    }),
                    this.lf.on("edge:contextmenu", function (t) {
                      var e = t.data,
                        r = t.position.domOverlayPosition,
                        o = r.x,
                        i = r.y,
                        u = e.id,
                        a = n.lf.graphModel.getEdgeModelById(u),
                        c = [],
                        f = n.menuTypeMap.get(a.type);
                      (c =
                        a && a.menu && Array.isArray(a.menu)
                          ? a.menu
                          : f || n.menuTypeMap.get("lf:defaultEdgeMenu")),
                        (n.__currentData = e),
                        n.showMenu(o, i, c);
                    }),
                    this.lf.on("blank:contextmenu", function (t) {
                      var e = t.position,
                        r = n.menuTypeMap.get("lf:defaultGraphMenu"),
                        o = e.domOverlayPosition,
                        i = o.x,
                        u = o.y;
                      n.showMenu(i, u, r);
                    }),
                    this.lf.on("selection:contextmenu", function (t) {
                      var e = t.data,
                        r = t.position,
                        o = n.menuTypeMap.get("lf:defaultSelectionMenu"),
                        i = r.domOverlayPosition,
                        u = i.x,
                        a = i.y;
                      (n.__currentData = e), n.showMenu(u, a, o);
                    }),
                    this.lf.on("node:mousedown", function () {
                      n.__menuDOM.style.display = "none";
                    }),
                    this.lf.on("edge:click", function () {
                      n.__menuDOM.style.display = "none";
                    }),
                    this.lf.on("blank:click", function () {
                      n.__menuDOM.style.display = "none";
                    });
                },
              },
              {
                key: "destroy",
                value: function () {
                  var t;
                  null == this ||
                    null === (t = this.__container) ||
                    void 0 === t ||
                    t.removeChild(this.__menuDOM),
                    (this.__menuDOM = null);
                },
              },
              {
                key: "showMenu",
                value: function (t, e, n) {
                  if (n && n.length) {
                    var o = this.__menuDOM;
                    (o.innerHTML = ""),
                      o.append.apply(o, r(this.__getMenuDom(n))),
                      o.children.length &&
                        ((o.style.display = "block"),
                        (o.style.top = "".concat(e, "px")),
                        (o.style.left = "".concat(t, "px")));
                  }
                },
              },
              {
                key: "setMenuByType",
                value: function (t) {
                  t.type && t.menu && this.menuTypeMap.set(t.type, t.menu);
                },
              },
              {
                key: "__getMenuDom",
                value: function (t) {
                  var e = [];
                  return (
                    t &&
                      t.length > 0 &&
                      t.forEach(function (t) {
                        var n = document.createElement("li");
                        if (
                          (t.className
                            ? (n.className = "lf-menu-item ".concat(
                                t.className
                              ))
                            : (n.className = "lf-menu-item"),
                          !0 === t.icon)
                        ) {
                          var r = document.createElement("span");
                          (r.className = "lf-menu-item-icon"), n.appendChild(r);
                        }
                        var o = document.createElement("span");
                        (o.className = "lf-menu-item-text"),
                          t.text && (o.innerText = t.text),
                          n.appendChild(o),
                          (n.onclickCallback = t.callback),
                          e.push(n);
                      }),
                    e
                  );
                },
              },
              {
                key: "setMenuConfig",
                value: function (t) {
                  t &&
                    (void 0 !== t.nodeMenu &&
                      this.menuTypeMap.set(
                        "lf:defaultNodeMenu",
                        t.nodeMenu ? t.nodeMenu : []
                      ),
                    void 0 !== t.edgeMenu &&
                      this.menuTypeMap.set(
                        "lf:defaultEdgeMenu",
                        t.edgeMenu ? t.edgeMenu : []
                      ),
                    void 0 !== t.graphMenu &&
                      this.menuTypeMap.set(
                        "lf:defaultGraphMenu",
                        t.graphMenu ? t.graphMenu : []
                      ));
                },
              },
              {
                key: "addMenuConfig",
                value: function (t) {
                  if (t) {
                    if (Array.isArray(t.nodeMenu)) {
                      var e = this.menuTypeMap.get("lf:defaultNodeMenu");
                      this.menuTypeMap.set(
                        "lf:defaultNodeMenu",
                        e.concat(t.nodeMenu)
                      );
                    }
                    if (Array.isArray(t.edgeMenu)) {
                      var n = this.menuTypeMap.get("lf:defaultEdgeMenu");
                      this.menuTypeMap.set(
                        "lf:defaultEdgeMenu",
                        n.concat(t.edgeMenu)
                      );
                    }
                    if (Array.isArray(t.graphMenu)) {
                      var r = this.menuTypeMap.get("lf:defaultGraphMenu");
                      this.menuTypeMap.set(
                        "lf:defaultGraphMenu",
                        r.concat(t.graphMenu)
                      );
                    }
                  }
                },
              },
              {
                key: "changeMenuItem",
                value: function (t, e) {
                  if ("add" === t) this.addMenuConfig(e);
                  else {
                    if ("reset" !== t)
                      throw new Error(
                        "The first parameter of changeMenuConfig should be 'add' or 'reset'"
                      );
                    this.setMenuConfig(e);
                  }
                },
              },
            ]) && i(e.prototype, n),
            o && i(e, o),
            t
          );
        })();
      (c = "menu"),
        (a = "pluginName") in (u = f)
          ? Object.defineProperty(u, a, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[a] = c),
        (e.default = f);
    },
  ]);
});
