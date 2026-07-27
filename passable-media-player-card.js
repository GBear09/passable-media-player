(function (wr) {
  typeof define == "function" && define.amd ? define(wr) : wr();
})(function () {
  "use strict";
  var wr,
    B,
    vc,
    xr,
    wc,
    xc,
    kc,
    Ao,
    Qi,
    Zn,
    Sc,
    Eo,
    Io,
    Po,
    Mc,
    Xi = {},
    Zi = [],
    wg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    ei = Array.isArray;
  function Nt(e, t) {
    for (var r in t) e[r] = t[r];
    return e;
  }
  function Oo(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function rt(e, t, r) {
    var n,
      i,
      s,
      o = {};
    for (s in t)
      s == "key" ? (n = t[s]) : s == "ref" ? (i = t[s]) : (o[s] = t[s]);
    if (
      (arguments.length > 2 &&
        (o.children = arguments.length > 3 ? wr.call(arguments, 2) : r),
      typeof e == "function" && e.defaultProps != null)
    )
      for (s in e.defaultProps) o[s] === void 0 && (o[s] = e.defaultProps[s]);
    return ti(e, o, n, i, null);
  }
  function ti(e, t, r, n, i) {
    var s = {
      type: e,
      props: t,
      key: r,
      ref: n,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: i ?? ++vc,
      __i: -1,
      __u: 0,
    };
    return (i == null && B.vnode != null && B.vnode(s), s);
  }
  function Cc() {
    return { current: null };
  }
  function Y(e) {
    return e.children;
  }
  function Qe(e, t) {
    ((this.props = e), (this.context = t));
  }
  function sn(e, t) {
    if (t == null) return e.__ ? sn(e.__, e.__i + 1) : null;
    for (var r; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
    return typeof e.type == "function" ? sn(e) : null;
  }
  function xg(e) {
    if (e.__P && e.__d) {
      var t = e.__v,
        r = t.__e,
        n = [],
        i = [],
        s = Nt({}, t);
      ((s.__v = t.__v + 1),
        B.vnode && B.vnode(s),
        Ro(
          e.__P,
          s,
          t,
          e.__n,
          e.__P.namespaceURI,
          32 & t.__u ? [r] : null,
          n,
          r ?? sn(t),
          !!(32 & t.__u),
          i
        ),
        (s.__v = t.__v),
        (s.__.__k[s.__i] = s),
        Oc(n, s, i),
        (t.__e = t.__ = null),
        s.__e != r && $c(s));
    }
  }
  function $c(e) {
    if ((e = e.__) != null && e.__c != null)
      return (
        (e.__e = e.__c.base = null),
        e.__k.some(function (t) {
          if (t != null && t.__e != null) return (e.__e = e.__c.base = t.__e);
        }),
        $c(e)
      );
  }
  function To(e) {
    ((!e.__d && (e.__d = !0) && xr.push(e) && !es.__r++) ||
      wc != B.debounceRendering) &&
      ((wc = B.debounceRendering) || xc)(es);
  }
  function es() {
    try {
      for (var e, t = 1; xr.length; )
        (xr.length > t && xr.sort(kc),
          (e = xr.shift()),
          (t = xr.length),
          xg(e));
    } finally {
      xr.length = es.__r = 0;
    }
  }
  function Ac(e, t, r, n, i, s, o, a, l, c, d) {
    var u,
      h,
      f,
      g,
      m,
      _,
      y,
      b = (n && n.__k) || Zi,
      v = t.length;
    for (l = kg(r, t, b, l, v), u = 0; u < v; u++)
      (f = r.__k[u]) != null &&
        ((h = (f.__i != -1 && b[f.__i]) || Xi),
        (f.__i = u),
        (_ = Ro(e, f, h, i, s, o, a, l, c, d)),
        (g = f.__e),
        f.ref &&
          h.ref != f.ref &&
          (h.ref && Lo(h.ref, null, f), d.push(f.ref, f.__c || g, f)),
        m == null && g != null && (m = g),
        (y = !!(4 & f.__u)) || h.__k === f.__k
          ? ((l = Ec(f, l, e, y)), y && h.__e && (h.__e = null))
          : typeof f.type == "function" && _ !== void 0
            ? (l = _)
            : g && (l = g.nextSibling),
        (f.__u &= -7));
    return ((r.__e = m), l);
  }
  function kg(e, t, r, n, i) {
    var s,
      o,
      a,
      l,
      c,
      d = r.length,
      u = d,
      h = 0;
    for (e.__k = new Array(i), s = 0; s < i; s++)
      (o = t[s]) != null && typeof o != "boolean" && typeof o != "function"
        ? (typeof o == "string" ||
          typeof o == "number" ||
          typeof o == "bigint" ||
          o.constructor == String
            ? (o = e.__k[s] = ti(null, o, null, null, null))
            : ei(o)
              ? (o = e.__k[s] = ti(Y, { children: o }, null, null, null))
              : o.constructor === void 0 && o.__b > 0
                ? (o = e.__k[s] =
                    ti(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v))
                : (e.__k[s] = o),
          (l = s + h),
          (o.__ = e),
          (o.__b = e.__b + 1),
          (a = null),
          (c = o.__i = Sg(o, r, l, u)) != -1 &&
            (u--, (a = r[c]) && (a.__u |= 2)),
          a == null || a.__v == null
            ? (c == -1 && (i > d ? h-- : i < d && h++),
              typeof o.type != "function" && (o.__u |= 4))
            : c != l &&
              (c == l - 1
                ? h--
                : c == l + 1
                  ? h++
                  : (c > l ? h-- : h++, (o.__u |= 4))))
        : (e.__k[s] = null);
    if (u)
      for (s = 0; s < d; s++)
        (a = r[s]) != null &&
          (2 & a.__u) == 0 &&
          (a.__e == n && (n = sn(a)), Rc(a, a));
    return n;
  }
  function Ec(e, t, r, n) {
    var i, s;
    if (typeof e.type == "function") {
      for (i = e.__k, s = 0; i && s < i.length; s++)
        i[s] && ((i[s].__ = e), (t = Ec(i[s], t, r, n)));
      return t;
    }
    e.__e != t &&
      (n &&
        (t && e.type && !t.parentNode && (t = sn(e)),
        r.insertBefore(e.__e, t || null)),
      (t = e.__e));
    do t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t;
  }
  function Xt(e, t) {
    return (
      (t = t || []),
      e == null ||
        typeof e == "boolean" ||
        (ei(e)
          ? e.some(function (r) {
              Xt(r, t);
            })
          : t.push(e)),
      t
    );
  }
  function Sg(e, t, r, n) {
    var i,
      s,
      o,
      a = e.key,
      l = e.type,
      c = t[r],
      d = c != null && (2 & c.__u) == 0;
    if ((c === null && a == null) || (d && a == c.key && l == c.type)) return r;
    if (n > (d ? 1 : 0)) {
      for (i = r - 1, s = r + 1; i >= 0 || s < t.length; )
        if (
          (c = t[(o = i >= 0 ? i-- : s++)]) != null &&
          (2 & c.__u) == 0 &&
          a == c.key &&
          l == c.type
        )
          return o;
    }
    return -1;
  }
  function Ic(e, t, r) {
    t[0] == "-"
      ? e.setProperty(t, r ?? "")
      : (e[t] =
          r == null ? "" : typeof r != "number" || wg.test(t) ? r : r + "px");
  }
  function ts(e, t, r, n, i) {
    var s, o;
    e: if (t == "style")
      if (typeof r == "string") e.style.cssText = r;
      else {
        if ((typeof n == "string" && (e.style.cssText = n = ""), n))
          for (t in n) (r && t in r) || Ic(e.style, t, "");
        if (r) for (t in r) (n && r[t] == n[t]) || Ic(e.style, t, r[t]);
      }
    else if (t[0] == "o" && t[1] == "n")
      ((s = t != (t = t.replace(Sc, "$1"))),
        (o = t.toLowerCase()),
        (t =
          o in e || t == "onFocusOut" || t == "onFocusIn"
            ? o.slice(2)
            : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + s] = r),
        r
          ? n
            ? (r[Zn] = n[Zn])
            : ((r[Zn] = Eo), e.addEventListener(t, s ? Po : Io, s))
          : e.removeEventListener(t, s ? Po : Io, s));
    else {
      if (i == "http://www.w3.org/2000/svg")
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        t != "width" &&
        t != "height" &&
        t != "href" &&
        t != "list" &&
        t != "form" &&
        t != "tabIndex" &&
        t != "download" &&
        t != "rowSpan" &&
        t != "colSpan" &&
        t != "role" &&
        t != "popover" &&
        t in e
      )
        try {
          e[t] = r ?? "";
          break e;
        } catch {}
      typeof r == "function" ||
        (r == null || (r === !1 && t[4] != "-")
          ? e.removeAttribute(t)
          : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
    }
  }
  function Pc(e) {
    return function (t) {
      if (this.l) {
        var r = this.l[t.type + e];
        if (t[Qi] == null) t[Qi] = Eo++;
        else if (t[Qi] < r[Zn]) return;
        return r(B.event ? B.event(t) : t);
      }
    };
  }
  function Ro(e, t, r, n, i, s, o, a, l, c) {
    var d,
      u,
      h,
      f,
      g,
      m,
      _,
      y,
      b,
      v,
      k,
      x,
      $,
      M,
      C,
      O = t.type;
    if (t.constructor !== void 0) return null;
    (128 & r.__u && ((l = !!(32 & r.__u)), (s = [(a = t.__e = r.__e)])),
      (d = B.__b) && d(t));
    e: if (typeof O == "function")
      try {
        if (
          ((y = t.props),
          (b = O.prototype && O.prototype.render),
          (v = (d = O.contextType) && n[d.__c]),
          (k = d ? (v ? v.props.value : d.__) : n),
          r.__c
            ? (_ = (u = t.__c = r.__c).__ = u.__E)
            : (b
                ? (t.__c = u = new O(y, k))
                : ((t.__c = u = new Qe(y, k)),
                  (u.constructor = O),
                  (u.render = Cg)),
              v && v.sub(u),
              u.state || (u.state = {}),
              (u.__n = n),
              (h = u.__d = !0),
              (u.__h = []),
              (u._sb = [])),
          b && u.__s == null && (u.__s = u.state),
          b &&
            O.getDerivedStateFromProps != null &&
            (u.__s == u.state && (u.__s = Nt({}, u.__s)),
            Nt(u.__s, O.getDerivedStateFromProps(y, u.__s))),
          (f = u.props),
          (g = u.state),
          (u.__v = t),
          h)
        )
          (b &&
            O.getDerivedStateFromProps == null &&
            u.componentWillMount != null &&
            u.componentWillMount(),
            b &&
              u.componentDidMount != null &&
              u.__h.push(u.componentDidMount));
        else {
          if (
            (b &&
              O.getDerivedStateFromProps == null &&
              y !== f &&
              u.componentWillReceiveProps != null &&
              u.componentWillReceiveProps(y, k),
            t.__v == r.__v ||
              (!u.__e &&
                u.shouldComponentUpdate != null &&
                u.shouldComponentUpdate(y, u.__s, k) === !1))
          ) {
            (t.__v != r.__v && ((u.props = y), (u.state = u.__s), (u.__d = !1)),
              (t.__e = r.__e),
              (t.__k = r.__k),
              t.__k.some(function (E) {
                E && (E.__ = t);
              }),
              Zi.push.apply(u.__h, u._sb),
              (u._sb = []),
              u.__h.length && o.push(u));
            break e;
          }
          (u.componentWillUpdate != null && u.componentWillUpdate(y, u.__s, k),
            b &&
              u.componentDidUpdate != null &&
              u.__h.push(function () {
                u.componentDidUpdate(f, g, m);
              }));
        }
        if (
          ((u.context = k),
          (u.props = y),
          (u.__P = e),
          (u.__e = !1),
          (x = B.__r),
          ($ = 0),
          b)
        )
          ((u.state = u.__s),
            (u.__d = !1),
            x && x(t),
            (d = u.render(u.props, u.state, u.context)),
            Zi.push.apply(u.__h, u._sb),
            (u._sb = []));
        else
          do
            ((u.__d = !1),
              x && x(t),
              (d = u.render(u.props, u.state, u.context)),
              (u.state = u.__s));
          while (u.__d && ++$ < 25);
        ((u.state = u.__s),
          u.getChildContext != null && (n = Nt(Nt({}, n), u.getChildContext())),
          b &&
            !h &&
            u.getSnapshotBeforeUpdate != null &&
            (m = u.getSnapshotBeforeUpdate(f, g)),
          (M =
            d != null && d.type === Y && d.key == null
              ? Tc(d.props.children)
              : d),
          (a = Ac(e, ei(M) ? M : [M], t, r, n, i, s, o, a, l, c)),
          (u.base = t.__e),
          (t.__u &= -161),
          u.__h.length && o.push(u),
          _ && (u.__E = u.__ = null));
      } catch (E) {
        if (((t.__v = null), l || s != null))
          if (E.then) {
            for (
              t.__u |= l ? 160 : 128;
              a && a.nodeType == 8 && a.nextSibling;
            )
              a = a.nextSibling;
            ((s[s.indexOf(a)] = null), (t.__e = a));
          } else {
            for (C = s.length; C--; ) Oo(s[C]);
            No(t);
          }
        else ((t.__e = r.__e), (t.__k = r.__k), E.then || No(t));
        B.__e(E, t, r);
      }
    else
      s == null && t.__v == r.__v
        ? ((t.__k = r.__k), (t.__e = r.__e))
        : (a = t.__e = Mg(r.__e, t, r, n, i, s, o, l, c));
    return ((d = B.diffed) && d(t), 128 & t.__u ? void 0 : a);
  }
  function No(e) {
    e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(No));
  }
  function Oc(e, t, r) {
    for (var n = 0; n < r.length; n++) Lo(r[n], r[++n], r[++n]);
    (B.__c && B.__c(t, e),
      e.some(function (i) {
        try {
          ((e = i.__h),
            (i.__h = []),
            e.some(function (s) {
              s.call(i);
            }));
        } catch (s) {
          B.__e(s, i.__v);
        }
      }));
  }
  function Tc(e) {
    return typeof e != "object" || e == null || e.__b > 0
      ? e
      : ei(e)
        ? e.map(Tc)
        : Nt({}, e);
  }
  function Mg(e, t, r, n, i, s, o, a, l) {
    var c,
      d,
      u,
      h,
      f,
      g,
      m,
      _ = r.props || Xi,
      y = t.props,
      b = t.type;
    if (
      (b == "svg"
        ? (i = "http://www.w3.org/2000/svg")
        : b == "math"
          ? (i = "http://www.w3.org/1998/Math/MathML")
          : i || (i = "http://www.w3.org/1999/xhtml"),
      s != null)
    ) {
      for (c = 0; c < s.length; c++)
        if (
          (f = s[c]) &&
          "setAttribute" in f == !!b &&
          (b ? f.localName == b : f.nodeType == 3)
        ) {
          ((e = f), (s[c] = null));
          break;
        }
    }
    if (e == null) {
      if (b == null) return document.createTextNode(y);
      ((e = document.createElementNS(i, b, y.is && y)),
        a && (B.__m && B.__m(t, s), (a = !1)),
        (s = null));
    }
    if (b == null) _ === y || (a && e.data == y) || (e.data = y);
    else {
      if (((s = s && wr.call(e.childNodes)), !a && s != null))
        for (_ = {}, c = 0; c < e.attributes.length; c++)
          _[(f = e.attributes[c]).name] = f.value;
      for (c in _)
        ((f = _[c]),
          c == "dangerouslySetInnerHTML"
            ? (u = f)
            : c == "children" ||
              c in y ||
              (c == "value" && "defaultValue" in y) ||
              (c == "checked" && "defaultChecked" in y) ||
              ts(e, c, null, f, i));
      for (c in y)
        ((f = y[c]),
          c == "children"
            ? (h = f)
            : c == "dangerouslySetInnerHTML"
              ? (d = f)
              : c == "value"
                ? (g = f)
                : c == "checked"
                  ? (m = f)
                  : (a && typeof f != "function") ||
                    _[c] === f ||
                    ts(e, c, f, _[c], i));
      if (d)
        (a ||
          (u && (d.__html == u.__html || d.__html == e.innerHTML)) ||
          (e.innerHTML = d.__html),
          (t.__k = []));
      else if (
        (u && (e.innerHTML = ""),
        Ac(
          t.type == "template" ? e.content : e,
          ei(h) ? h : [h],
          t,
          r,
          n,
          b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i,
          s,
          o,
          s ? s[0] : r.__k && sn(r, 0),
          a,
          l
        ),
        s != null)
      )
        for (c = s.length; c--; ) Oo(s[c]);
      a ||
        ((c = "value"),
        b == "progress" && g == null
          ? e.removeAttribute("value")
          : g != null &&
            (g !== e[c] ||
              (b == "progress" && !g) ||
              (b == "option" && g != _[c])) &&
            ts(e, c, g, _[c], i),
        (c = "checked"),
        m != null && m != e[c] && ts(e, c, m, _[c], i));
    }
    return e;
  }
  function Lo(e, t, r) {
    try {
      if (typeof e == "function") {
        var n = typeof e.__u == "function";
        (n && e.__u(), (n && t == null) || (e.__u = e(t)));
      } else e.current = t;
    } catch (i) {
      B.__e(i, r);
    }
  }
  function Rc(e, t, r) {
    var n, i;
    if (
      (B.unmount && B.unmount(e),
      (n = e.ref) && ((n.current && n.current != e.__e) || Lo(n, null, t)),
      (n = e.__c) != null)
    ) {
      if (n.componentWillUnmount)
        try {
          n.componentWillUnmount();
        } catch (s) {
          B.__e(s, t);
        }
      n.base = n.__P = null;
    }
    if ((n = e.__k))
      for (i = 0; i < n.length; i++)
        n[i] && Rc(n[i], t, r || typeof e.type != "function");
    (r || Oo(e.__e), (e.__c = e.__ = e.__e = void 0));
  }
  function Cg(e, t, r) {
    return this.constructor(e, r);
  }
  function Vr(e, t, r) {
    var n, i, s, o;
    (t == document && (t = document.documentElement),
      B.__ && B.__(e, t),
      (i = (n = typeof r == "function") ? null : (r && r.__k) || t.__k),
      (s = []),
      (o = []),
      Ro(
        t,
        (e = ((!n && r) || t).__k = rt(Y, null, [e])),
        i || Xi,
        Xi,
        t.namespaceURI,
        !n && r ? [r] : i ? null : t.firstChild ? wr.call(t.childNodes) : null,
        s,
        !n && r ? r : i ? i.__e : t.firstChild,
        n,
        o
      ),
      Oc(s, e, o));
  }
  function Nc(e, t) {
    Vr(e, t, Nc);
  }
  function $g(e, t, r) {
    var n,
      i,
      s,
      o,
      a = Nt({}, e.props);
    for (s in (e.type && e.type.defaultProps && (o = e.type.defaultProps), t))
      s == "key"
        ? (n = t[s])
        : s == "ref"
          ? (i = t[s])
          : (a[s] = t[s] === void 0 && o != null ? o[s] : t[s]);
    return (
      arguments.length > 2 &&
        (a.children = arguments.length > 3 ? wr.call(arguments, 2) : r),
      ti(e.type, a, n || e.key, i || e.ref, null)
    );
  }
  function $t(e) {
    function t(r) {
      var n, i;
      return (
        this.getChildContext ||
          ((n = new Set()),
          ((i = {})[t.__c] = this),
          (this.getChildContext = function () {
            return i;
          }),
          (this.componentWillUnmount = function () {
            n = null;
          }),
          (this.shouldComponentUpdate = function (s) {
            this.props.value != s.value &&
              n.forEach(function (o) {
                ((o.__e = !0), To(o));
              });
          }),
          (this.sub = function (s) {
            n.add(s);
            var o = s.componentWillUnmount;
            s.componentWillUnmount = function () {
              (n && n.delete(s), o && o.call(s));
            };
          })),
        r.children
      );
    }
    return (
      (t.__c = "__cC" + Mc++),
      (t.__ = e),
      (t.Provider =
        t.__l =
        (t.Consumer = function (r, n) {
          return r.children(n);
        }).contextType =
          t),
      t
    );
  }
  ((wr = Zi.slice),
    (B = {
      __e: function (e, t, r, n) {
        for (var i, s, o; (t = t.__); )
          if ((i = t.__c) && !i.__)
            try {
              if (
                ((s = i.constructor) &&
                  s.getDerivedStateFromError != null &&
                  (i.setState(s.getDerivedStateFromError(e)), (o = i.__d)),
                i.componentDidCatch != null &&
                  (i.componentDidCatch(e, n || {}), (o = i.__d)),
                o)
              )
                return (i.__E = i);
            } catch (a) {
              e = a;
            }
        throw e;
      },
    }),
    (vc = 0),
    (Qe.prototype.setState = function (e, t) {
      var r;
      ((r =
        this.__s != null && this.__s != this.state
          ? this.__s
          : (this.__s = Nt({}, this.state))),
        typeof e == "function" && (e = e(Nt({}, r), this.props)),
        e && Nt(r, e),
        e != null && this.__v && (t && this._sb.push(t), To(this)));
    }),
    (Qe.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), To(this));
    }),
    (Qe.prototype.render = Y),
    (xr = []),
    (xc =
      typeof Promise == "function"
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (kc = function (e, t) {
      return e.__v.__b - t.__v.__b;
    }),
    (es.__r = 0),
    (Ao = Math.random().toString(8)),
    (Qi = "__d" + Ao),
    (Zn = "__a" + Ao),
    (Sc = /(PointerCapture)$|Capture$/i),
    (Eo = 0),
    (Io = Pc(!1)),
    (Po = Pc(!0)),
    (Mc = 0));
  var Ag = 0;
  function Xe(e, t, r, n, i, s) {
    t || (t = {});
    var o,
      a,
      l = t;
    if ("ref" in l)
      for (a in ((l = {}), t)) a == "ref" ? (o = t[a]) : (l[a] = t[a]);
    var c = {
      type: e,
      props: l,
      key: r,
      ref: o,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: --Ag,
      __i: -1,
      __u: 0,
      __source: i,
      __self: s,
    };
    if (typeof e == "function" && (o = e.defaultProps))
      for (a in o) l[a] === void 0 && (l[a] = o[a]);
    return (B.vnode && B.vnode(c), c);
  }
  var Zt,
    _e,
    Fo,
    Lc,
    on = 0,
    Fc = [],
    Ee = B,
    Dc = Ee.__b,
    zc = Ee.__r,
    Bc = Ee.diffed,
    Vc = Ee.__c,
    qc = Ee.unmount,
    jc = Ee.__;
  function qr(e, t) {
    (Ee.__h && Ee.__h(_e, e, on || t), (on = 0));
    var r = _e.__H || (_e.__H = { __: [], __h: [] });
    return (e >= r.__.length && r.__.push({}), r.__[e]);
  }
  function L(e) {
    return ((on = 1), ri(Kc, e));
  }
  function ri(e, t, r) {
    var n = qr(Zt++, 2);
    if (
      ((n.t = e),
      !n.__c &&
        ((n.__ = [
          r ? r(t) : Kc(void 0, t),
          function (a) {
            var l = n.__N ? n.__N[0] : n.__[0],
              c = n.t(l, a);
            l !== c && ((n.__N = [c, n.__[1]]), n.__c.setState({}));
          },
        ]),
        (n.__c = _e),
        !_e.__f))
    ) {
      var i = function (a, l, c) {
        if (!n.__c.__H) return !0;
        var d = n.__c.__H.__.filter(function (h) {
          return h.__c;
        });
        if (
          d.every(function (h) {
            return !h.__N;
          })
        )
          return !s || s.call(this, a, l, c);
        var u = n.__c.props !== a;
        return (
          d.some(function (h) {
            if (h.__N) {
              var f = h.__[0];
              ((h.__ = h.__N), (h.__N = void 0), f !== h.__[0] && (u = !0));
            }
          }),
          (s && s.call(this, a, l, c)) || u
        );
      };
      _e.__f = !0;
      var s = _e.shouldComponentUpdate,
        o = _e.componentWillUpdate;
      ((_e.componentWillUpdate = function (a, l, c) {
        if (this.__e) {
          var d = s;
          ((s = void 0), i(a, l, c), (s = d));
        }
        o && o.call(this, a, l, c);
      }),
        (_e.shouldComponentUpdate = i));
    }
    return n.__N || n.__;
  }
  function Q(e, t) {
    var r = qr(Zt++, 3);
    !Ee.__s && Vo(r.__H, t) && ((r.__ = e), (r.u = t), _e.__H.__h.push(r));
  }
  function er(e, t) {
    var r = qr(Zt++, 4);
    !Ee.__s && Vo(r.__H, t) && ((r.__ = e), (r.u = t), _e.__h.push(r));
  }
  function he(e) {
    return (
      (on = 5),
      R(function () {
        return { current: e };
      }, [])
    );
  }
  function rs(e, t, r) {
    ((on = 6),
      er(
        function () {
          if (typeof e == "function") {
            var n = e(t());
            return function () {
              (e(null), n && typeof n == "function" && n());
            };
          }
          if (e)
            return (
              (e.current = t()),
              function () {
                return (e.current = null);
              }
            );
        },
        r == null ? r : r.concat(e)
      ));
  }
  function R(e, t) {
    var r = qr(Zt++, 7);
    return (Vo(r.__H, t) && ((r.__ = e()), (r.__H = t), (r.__h = e)), r.__);
  }
  function T(e, t) {
    return (
      (on = 8),
      R(function () {
        return e;
      }, t)
    );
  }
  function de(e) {
    var t = _e.context[e.__c],
      r = qr(Zt++, 9);
    return (
      (r.c = e),
      t ? (r.__ == null && ((r.__ = !0), t.sub(_e)), t.props.value) : e.__
    );
  }
  function Do(e, t) {
    Ee.useDebugValue && Ee.useDebugValue(t ? t(e) : e);
  }
  function Eg(e) {
    var t = qr(Zt++, 10),
      r = L();
    return (
      (t.__ = e),
      _e.componentDidCatch ||
        (_e.componentDidCatch = function (n, i) {
          (t.__ && t.__(n, i), r[1](n));
        }),
      [
        r[0],
        function () {
          r[1](void 0);
        },
      ]
    );
  }
  function zo() {
    var e = qr(Zt++, 11);
    if (!e.__) {
      for (var t = _e.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
      var r = t.__m || (t.__m = [0, 0]);
      e.__ = "P" + r[0] + "-" + r[1]++;
    }
    return e.__;
  }
  function Ig() {
    for (var e; (e = Fc.shift()); ) {
      var t = e.__H;
      if (e.__P && t)
        try {
          (t.__h.some(ns), t.__h.some(Bo), (t.__h = []));
        } catch (r) {
          ((t.__h = []), Ee.__e(r, e.__v));
        }
    }
  }
  ((Ee.__b = function (e) {
    ((_e = null), Dc && Dc(e));
  }),
    (Ee.__ = function (e, t) {
      (e && t.__k && t.__k.__m && (e.__m = t.__k.__m), jc && jc(e, t));
    }),
    (Ee.__r = function (e) {
      (zc && zc(e), (Zt = 0));
      var t = (_e = e.__c).__H;
      (t &&
        (Fo === _e
          ? ((t.__h = []),
            (_e.__h = []),
            t.__.some(function (r) {
              (r.__N && (r.__ = r.__N), (r.u = r.__N = void 0));
            }))
          : (t.__h.some(ns), t.__h.some(Bo), (t.__h = []), (Zt = 0))),
        (Fo = _e));
    }),
    (Ee.diffed = function (e) {
      Bc && Bc(e);
      var t = e.__c;
      (t &&
        t.__H &&
        (t.__H.__h.length &&
          ((Fc.push(t) !== 1 && Lc === Ee.requestAnimationFrame) ||
            ((Lc = Ee.requestAnimationFrame) || Pg)(Ig)),
        t.__H.__.some(function (r) {
          (r.u && (r.__H = r.u), (r.u = void 0));
        })),
        (Fo = _e = null));
    }),
    (Ee.__c = function (e, t) {
      (t.some(function (r) {
        try {
          (r.__h.some(ns),
            (r.__h = r.__h.filter(function (n) {
              return !n.__ || Bo(n);
            })));
        } catch (n) {
          (t.some(function (i) {
            i.__h && (i.__h = []);
          }),
            (t = []),
            Ee.__e(n, r.__v));
        }
      }),
        Vc && Vc(e, t));
    }),
    (Ee.unmount = function (e) {
      qc && qc(e);
      var t,
        r = e.__c;
      r &&
        r.__H &&
        (r.__H.__.some(function (n) {
          try {
            ns(n);
          } catch (i) {
            t = i;
          }
        }),
        (r.__H = void 0),
        t && Ee.__e(t, r.__v));
    }));
  var Uc = typeof requestAnimationFrame == "function";
  function Pg(e) {
    var t,
      r = function () {
        (clearTimeout(n), Uc && cancelAnimationFrame(t), setTimeout(e));
      },
      n = setTimeout(r, 35);
    Uc && (t = requestAnimationFrame(r));
  }
  function ns(e) {
    var t = _e,
      r = e.__c;
    (typeof r == "function" && ((e.__c = void 0), r()), (_e = t));
  }
  function Bo(e) {
    var t = _e;
    ((e.__c = e.__()), (_e = t));
  }
  function Vo(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (r, n) {
        return r !== e[n];
      })
    );
  }
  function Kc(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Gc(e, t) {
    for (var r in t) e[r] = t[r];
    return e;
  }
  function qo(e, t) {
    for (var r in e) if (r !== "__source" && !(r in t)) return !0;
    for (var n in t) if (n !== "__source" && e[n] !== t[n]) return !0;
    return !1;
  }
  function jo(e, t) {
    var r = t(),
      n = L({ t: { __: r, u: t } }),
      i = n[0].t,
      s = n[1];
    return (
      er(
        function () {
          ((i.__ = r), (i.u = t), Uo(i) && s({ t: i }));
        },
        [e, r, t]
      ),
      Q(
        function () {
          return (
            Uo(i) && s({ t: i }),
            e(function () {
              Uo(i) && s({ t: i });
            })
          );
        },
        [e]
      ),
      r
    );
  }
  function Uo(e) {
    try {
      return !(
        ((t = e.__) === (r = e.u()) && (t !== 0 || 1 / t == 1 / r)) ||
        (t != t && r != r)
      );
    } catch {
      return !0;
    }
    var t, r;
  }
  function Ko(e) {
    e();
  }
  function Go(e) {
    return e;
  }
  function Wo() {
    return [!1, Ko];
  }
  var Ho = er;
  function is(e, t) {
    ((this.props = e), (this.context = t));
  }
  function Ue(e, t) {
    function r(i) {
      var s = this.props.ref;
      return (
        s != i.ref &&
          s &&
          (typeof s == "function" ? s(null) : (s.current = null)),
        t ? !t(this.props, i) || s != i.ref : qo(this.props, i)
      );
    }
    function n(i) {
      return ((this.shouldComponentUpdate = r), rt(e, i));
    }
    return (
      (n.displayName = "Memo(" + (e.displayName || e.name) + ")"),
      (n.__f = n.prototype.isReactComponent = !0),
      (n.type = e),
      n
    );
  }
  (((is.prototype = new Qe()).isPureReactComponent = !0),
    (is.prototype.shouldComponentUpdate = function (e, t) {
      return qo(this.props, e) || qo(this.state, t);
    }));
  var Wc = B.__b;
  B.__b = function (e) {
    (e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
      Wc && Wc(e));
  };
  var Og =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) ||
    3911;
  function Lt(e) {
    function t(r) {
      var n = Gc({}, r);
      return (delete n.ref, e(n, r.ref || null));
    }
    return (
      (t.$$typeof = Og),
      (t.render = e),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
      t
    );
  }
  var Hc = function (e, t) {
      return e == null ? null : Xt(Xt(e).map(t));
    },
    Jc = {
      map: Hc,
      forEach: Hc,
      count: function (e) {
        return e ? Xt(e).length : 0;
      },
      only: function (e) {
        var t = Xt(e);
        if (t.length !== 1) throw "Children.only";
        return t[0];
      },
      toArray: Xt,
    },
    Tg = B.__e;
  B.__e = function (e, t, r, n) {
    if (e.then) {
      for (var i, s = t; (s = s.__); )
        if ((i = s.__c) && i.__c)
          return (
            t.__e == null && ((t.__e = r.__e), (t.__k = r.__k)),
            i.__c(e, t)
          );
    }
    Tg(e, t, r, n);
  };
  var Yc = B.unmount;
  function Qc(e, t, r) {
    return (
      e &&
        (e.__c &&
          e.__c.__H &&
          (e.__c.__H.__.forEach(function (n) {
            typeof n.__c == "function" && n.__c();
          }),
          (e.__c.__H = null)),
        (e = Gc({}, e)).__c != null &&
          (e.__c.__P === r && (e.__c.__P = t),
          (e.__c.__e = !0),
          (e.__c = null)),
        (e.__k =
          e.__k &&
          e.__k.map(function (n) {
            return Qc(n, t, r);
          }))),
      e
    );
  }
  function Xc(e, t, r) {
    return (
      e &&
        r &&
        ((e.__v = null),
        (e.__k =
          e.__k &&
          e.__k.map(function (n) {
            return Xc(n, t, r);
          })),
        e.__c &&
          e.__c.__P === t &&
          (e.__e && r.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = r))),
      e
    );
  }
  function ni() {
    ((this.__u = 0), (this.o = null), (this.__b = null));
  }
  function Zc(e) {
    var t = e.__ && e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function eu(e) {
    var t,
      r,
      n,
      i = null;
    function s(o) {
      if (
        (t ||
          (t = e()).then(
            function (a) {
              (a && (i = a.default || a), (n = !0));
            },
            function (a) {
              ((r = a), (n = !0));
            }
          ),
        r)
      )
        throw r;
      if (!n) throw t;
      return i ? rt(i, o) : null;
    }
    return ((s.displayName = "Lazy"), (s.__f = !0), s);
  }
  function an() {
    ((this.i = null), (this.l = null));
  }
  ((B.unmount = function (e) {
    var t = e.__c;
    (t && (t.__z = !0),
      t && t.__R && t.__R(),
      t && 32 & e.__u && (e.type = null),
      Yc && Yc(e));
  }),
    ((ni.prototype = new Qe()).__c = function (e, t) {
      var r = t.__c,
        n = this;
      (n.o == null && (n.o = []), n.o.push(r));
      var i = Zc(n.__v),
        s = !1,
        o = function () {
          s || n.__z || ((s = !0), (r.__R = null), i ? i(l) : l());
        };
      r.__R = o;
      var a = r.__P;
      r.__P = null;
      var l = function () {
        if (!--n.__u) {
          if (n.state.__a) {
            var c = n.state.__a;
            n.__v.__k[0] = Xc(c, c.__c.__P, c.__c.__O);
          }
          var d;
          for (n.setState({ __a: (n.__b = null) }); (d = n.o.pop()); )
            ((d.__P = a), d.forceUpdate());
        }
      };
      (n.__u++ || 32 & t.__u || n.setState({ __a: (n.__b = n.__v.__k[0]) }),
        e.then(o, o));
    }),
    (ni.prototype.componentWillUnmount = function () {
      this.o = [];
    }),
    (ni.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var r = document.createElement("div"),
            n = this.__v.__k[0].__c;
          this.__v.__k[0] = Qc(this.__b, r, (n.__O = n.__P));
        }
        this.__b = null;
      }
      var i = t.__a && rt(Y, null, e.fallback);
      return (i && (i.__u &= -33), [rt(Y, null, t.__a ? null : e.children), i]);
    }));
  var tu = function (e, t, r) {
    if (
      (++r[1] === r[0] && e.l.delete(t),
      e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
    )
      for (r = e.i; r; ) {
        for (; r.length > 3; ) r.pop()();
        if (r[1] < r[0]) break;
        e.i = r = r[2];
      }
  };
  function Rg(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function Ng(e) {
    var t = this,
      r = e.h;
    if (
      ((t.componentWillUnmount = function () {
        (Vr(null, t.v), (t.v = null), (t.h = null));
      }),
      t.h && t.h !== r && t.componentWillUnmount(),
      !t.v)
    ) {
      for (var n = t.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
      ((t.h = r),
        (t.v = {
          nodeType: 1,
          parentNode: r,
          childNodes: [],
          __k: { __m: n.__m },
          contains: function () {
            return !0;
          },
          namespaceURI: r.namespaceURI,
          insertBefore: function (i, s) {
            (this.childNodes.push(i), t.h.insertBefore(i, s));
          },
          removeChild: function (i) {
            (this.childNodes.splice(this.childNodes.indexOf(i) >>> 1, 1),
              t.h.removeChild(i));
          },
        }));
    }
    Vr(rt(Rg, { context: t.context }, e.__v), t.v);
  }
  function ru(e, t) {
    var r = rt(Ng, { __v: e, h: t });
    return ((r.containerInfo = t), r);
  }
  (((an.prototype = new Qe()).__a = function (e) {
    var t = this,
      r = Zc(t.__v),
      n = t.l.get(e);
    return (
      n[0]++,
      function (i) {
        var s = function () {
          t.props.revealOrder ? (n.push(i), tu(t, e, n)) : i();
        };
        r ? r(s) : s();
      }
    );
  }),
    (an.prototype.render = function (e) {
      ((this.i = null), (this.l = new Map()));
      var t = Xt(e.children);
      e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
      for (var r = t.length; r--; ) this.l.set(t[r], (this.i = [1, 0, this.i]));
      return e.children;
    }),
    (an.prototype.componentDidUpdate = an.prototype.componentDidMount =
      function () {
        var e = this;
        this.l.forEach(function (t, r) {
          tu(e, r, t);
        });
      }));
  var nu =
      (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) ||
      60103,
    Lg =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Fg = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    Dg = /[A-Z0-9]/g,
    zg = typeof document < "u",
    Bg = function (e) {
      return (
        typeof Symbol < "u" && typeof Symbol() == "symbol"
          ? /fil|che|rad/
          : /fil|che|ra/
      ).test(e);
    };
  function iu(e, t, r) {
    return (
      t.__k == null && (t.textContent = ""),
      Vr(e, t),
      typeof r == "function" && r(),
      e ? e.__c : null
    );
  }
  function su(e, t, r) {
    return (Nc(e, t), typeof r == "function" && r(), e ? e.__c : null);
  }
  ((Qe.prototype.isReactComponent = !0),
    [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
    ].forEach(function (e) {
      Object.defineProperty(Qe.prototype, e, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    }));
  var ou = B.event;
  B.event = function (e) {
    return (
      ou && (e = ou(e)),
      (e.persist = function () {}),
      (e.isPropagationStopped = function () {
        return this.cancelBubble;
      }),
      (e.isDefaultPrevented = function () {
        return this.defaultPrevented;
      }),
      (e.nativeEvent = e)
    );
  };
  var Jo,
    Vg = {
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    au = B.vnode;
  B.vnode = function (e) {
    (typeof e.type == "string" &&
      (function (t) {
        var r = t.props,
          n = t.type,
          i = {},
          s = n.indexOf("-") == -1;
        for (var o in r) {
          var a = r[o];
          if (
            !(
              (o === "value" && "defaultValue" in r && a == null) ||
              (zg && o === "children" && n === "noscript") ||
              o === "class" ||
              o === "className"
            )
          ) {
            var l = o.toLowerCase();
            (o === "defaultValue" && "value" in r && r.value == null
              ? (o = "value")
              : o === "download" && a === !0
                ? (a = "")
                : l === "translate" && a === "no"
                  ? (a = !1)
                  : l[0] === "o" && l[1] === "n"
                    ? l === "ondoubleclick"
                      ? (o = "ondblclick")
                      : l !== "onchange" ||
                          (n !== "input" && n !== "textarea") ||
                          Bg(r.type)
                        ? l === "onfocus"
                          ? (o = "onfocusin")
                          : l === "onblur"
                            ? (o = "onfocusout")
                            : Fg.test(o) && (o = l)
                        : (l = o = "oninput")
                    : s && Lg.test(o)
                      ? (o = o.replace(Dg, "-$&").toLowerCase())
                      : a === null && (a = void 0),
              l === "oninput" && i[(o = l)] && (o = "oninputCapture"),
              (i[o] = a));
          }
        }
        (n == "select" &&
          (i.multiple &&
            Array.isArray(i.value) &&
            (i.value = Xt(r.children).forEach(function (c) {
              c.props.selected = i.value.indexOf(c.props.value) != -1;
            })),
          i.defaultValue != null &&
            (i.value = Xt(r.children).forEach(function (c) {
              c.props.selected = i.multiple
                ? i.defaultValue.indexOf(c.props.value) != -1
                : i.defaultValue == c.props.value;
            }))),
          r.class && !r.className
            ? ((i.class = r.class), Object.defineProperty(i, "className", Vg))
            : r.className && (i.class = i.className = r.className),
          (t.props = i));
      })(e),
      (e.$$typeof = nu),
      au && au(e));
  };
  var lu = B.__r;
  B.__r = function (e) {
    (lu && lu(e), (Jo = e.__c));
  };
  var cu = B.diffed;
  B.diffed = function (e) {
    cu && cu(e);
    var t = e.props,
      r = e.__e;
    (r != null &&
      e.type === "textarea" &&
      "value" in t &&
      t.value !== r.value &&
      (r.value = t.value == null ? "" : t.value),
      (Jo = null));
  };
  var uu = {
      ReactCurrentDispatcher: {
        current: {
          readContext: function (e) {
            return Jo.__n[e.__c].props.value;
          },
          useCallback: T,
          useContext: de,
          useDebugValue: Do,
          useDeferredValue: Go,
          useEffect: Q,
          useId: zo,
          useImperativeHandle: rs,
          useInsertionEffect: Ho,
          useLayoutEffect: er,
          useMemo: R,
          useReducer: ri,
          useRef: he,
          useState: L,
          useSyncExternalStore: jo,
          useTransition: Wo,
        },
      },
    },
    du = "18.3.1";
  function fu(e) {
    return rt.bind(null, e);
  }
  function ii(e) {
    return !!e && e.$$typeof === nu;
  }
  function pu(e) {
    return ii(e) && e.type === Y;
  }
  function hu(e) {
    return (
      !!e &&
      typeof e.displayName == "string" &&
      e.displayName.indexOf("Memo(") == 0
    );
  }
  function mu(e) {
    return ii(e) ? $g.apply(null, arguments) : e;
  }
  function gu(e) {
    return !!e.__k && (Vr(null, e), !0);
  }
  function _u(e) {
    return (e && (e.base || (e.nodeType === 1 && e))) || null;
  }
  var yu = function (e, t) {
      return e(t);
    },
    Yo = function (e, t) {
      var r = B.debounceRendering;
      B.debounceRendering = function (i) {
        return i();
      };
      var n = e(t);
      return ((B.debounceRendering = r), n);
    },
    bu = ii,
    qg = {
      useState: L,
      useId: zo,
      useReducer: ri,
      useEffect: Q,
      useLayoutEffect: er,
      useInsertionEffect: Ho,
      useTransition: Wo,
      useDeferredValue: Go,
      useSyncExternalStore: jo,
      startTransition: Ko,
      useRef: he,
      useImperativeHandle: rs,
      useMemo: R,
      useCallback: T,
      useContext: de,
      useDebugValue: Do,
      version: "18.3.1",
      Children: Jc,
      render: iu,
      hydrate: su,
      unmountComponentAtNode: gu,
      createPortal: ru,
      createElement: rt,
      createContext: $t,
      createFactory: fu,
      cloneElement: mu,
      createRef: Cc,
      Fragment: Y,
      isValidElement: ii,
      isElement: bu,
      isFragment: pu,
      isMemo: hu,
      findDOMNode: _u,
      Component: Qe,
      PureComponent: is,
      memo: Ue,
      forwardRef: Lt,
      flushSync: Yo,
      unstable_batchedUpdates: yu,
      StrictMode: Y,
      Suspense: ni,
      SuspenseList: an,
      lazy: eu,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: uu,
    };
  const ss = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Children: Jc,
        Component: Qe,
        Fragment: Y,
        PureComponent: is,
        StrictMode: Y,
        Suspense: ni,
        SuspenseList: an,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: uu,
        cloneElement: mu,
        createContext: $t,
        createElement: rt,
        createFactory: fu,
        createPortal: ru,
        createRef: Cc,
        default: qg,
        findDOMNode: _u,
        flushSync: Yo,
        forwardRef: Lt,
        hydrate: su,
        isElement: bu,
        isFragment: pu,
        isMemo: hu,
        isValidElement: ii,
        lazy: eu,
        memo: Ue,
        render: iu,
        startTransition: Ko,
        unmountComponentAtNode: gu,
        unstable_batchedUpdates: yu,
        useCallback: T,
        useContext: de,
        useDebugValue: Do,
        useDeferredValue: Go,
        useEffect: Q,
        useErrorBoundary: Eg,
        useId: zo,
        useImperativeHandle: rs,
        useInsertionEffect: Ho,
        useLayoutEffect: er,
        useMemo: R,
        useReducer: ri,
        useRef: he,
        useState: L,
        useSyncExternalStore: jo,
        useTransition: Wo,
        version: du,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
  function jg(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
      if (document.styleSheets[t].ownerNode === e)
        return document.styleSheets[t];
  }
  function Ug(e) {
    var t = document.createElement("style");
    return (
      t.setAttribute("data-emotion", e.key),
      e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
      t.appendChild(document.createTextNode("")),
      t.setAttribute("data-s", ""),
      t
    );
  }
  var Kg = (function () {
      function e(r) {
        var n = this;
        ((this._insertTag = function (i) {
          var s;
          (n.tags.length === 0
            ? n.insertionPoint
              ? (s = n.insertionPoint.nextSibling)
              : n.prepend
                ? (s = n.container.firstChild)
                : (s = n.before)
            : (s = n.tags[n.tags.length - 1].nextSibling),
            n.container.insertBefore(i, s),
            n.tags.push(i));
        }),
          (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = r.nonce),
          (this.key = r.key),
          (this.container = r.container),
          (this.prepend = r.prepend),
          (this.insertionPoint = r.insertionPoint),
          (this.before = null));
      }
      var t = e.prototype;
      return (
        (t.hydrate = function (n) {
          n.forEach(this._insertTag);
        }),
        (t.insert = function (n) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
            this._insertTag(Ug(this));
          var i = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var s = jg(i);
            try {
              s.insertRule(n, s.cssRules.length);
            } catch {}
          } else i.appendChild(document.createTextNode(n));
          this.ctr++;
        }),
        (t.flush = function () {
          (this.tags.forEach(function (n) {
            var i;
            return (i = n.parentNode) == null ? void 0 : i.removeChild(n);
          }),
            (this.tags = []),
            (this.ctr = 0));
        }),
        e
      );
    })(),
    Ze = "-ms-",
    os = "-moz-",
    le = "-webkit-",
    vu = "comm",
    Qo = "rule",
    Xo = "decl",
    Gg = "@import",
    wu = "@keyframes",
    Wg = "@layer",
    Hg = Math.abs,
    as = String.fromCharCode,
    Jg = Object.assign;
  function Yg(e, t) {
    return Je(e, 0) ^ 45
      ? (((((((t << 2) ^ Je(e, 0)) << 2) ^ Je(e, 1)) << 2) ^ Je(e, 2)) << 2) ^
          Je(e, 3)
      : 0;
  }
  function xu(e) {
    return e.trim();
  }
  function Qg(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function ce(e, t, r) {
    return e.replace(t, r);
  }
  function Zo(e, t) {
    return e.indexOf(t);
  }
  function Je(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function si(e, t, r) {
    return e.slice(t, r);
  }
  function Ft(e) {
    return e.length;
  }
  function ea(e) {
    return e.length;
  }
  function ls(e, t) {
    return (t.push(e), e);
  }
  function Xg(e, t) {
    return e.map(t).join("");
  }
  var cs = 1,
    ln = 1,
    ku = 0,
    at = 0,
    Pe = 0,
    cn = "";
  function us(e, t, r, n, i, s, o) {
    return {
      value: e,
      root: t,
      parent: r,
      type: n,
      props: i,
      children: s,
      line: cs,
      column: ln,
      length: o,
      return: "",
    };
  }
  function oi(e, t) {
    return Jg(
      us("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t
    );
  }
  function Zg() {
    return Pe;
  }
  function e_() {
    return (
      (Pe = at > 0 ? Je(cn, --at) : 0),
      ln--,
      Pe === 10 && ((ln = 1), cs--),
      Pe
    );
  }
  function ft() {
    return (
      (Pe = at < ku ? Je(cn, at++) : 0),
      ln++,
      Pe === 10 && ((ln = 1), cs++),
      Pe
    );
  }
  function Dt() {
    return Je(cn, at);
  }
  function ds() {
    return at;
  }
  function ai(e, t) {
    return si(cn, e, t);
  }
  function li(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function Su(e) {
    return ((cs = ln = 1), (ku = Ft((cn = e))), (at = 0), []);
  }
  function Mu(e) {
    return ((cn = ""), e);
  }
  function fs(e) {
    return xu(ai(at - 1, ta(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function t_(e) {
    for (; (Pe = Dt()) && Pe < 33; ) ft();
    return li(e) > 2 || li(Pe) > 3 ? "" : " ";
  }
  function r_(e, t) {
    for (
      ;
      --t &&
      ft() &&
      !(Pe < 48 || Pe > 102 || (Pe > 57 && Pe < 65) || (Pe > 70 && Pe < 97));
    );
    return ai(e, ds() + (t < 6 && Dt() == 32 && ft() == 32));
  }
  function ta(e) {
    for (; ft(); )
      switch (Pe) {
        case e:
          return at;
        case 34:
        case 39:
          e !== 34 && e !== 39 && ta(Pe);
          break;
        case 40:
          e === 41 && ta(e);
          break;
        case 92:
          ft();
          break;
      }
    return at;
  }
  function n_(e, t) {
    for (; ft() && e + Pe !== 57; ) if (e + Pe === 84 && Dt() === 47) break;
    return "/*" + ai(t, at - 1) + "*" + as(e === 47 ? e : ft());
  }
  function i_(e) {
    for (; !li(Dt()); ) ft();
    return ai(e, at);
  }
  function s_(e) {
    return Mu(ps("", null, null, null, [""], (e = Su(e)), 0, [0], e));
  }
  function ps(e, t, r, n, i, s, o, a, l) {
    for (
      var c = 0,
        d = 0,
        u = o,
        h = 0,
        f = 0,
        g = 0,
        m = 1,
        _ = 1,
        y = 1,
        b = 0,
        v = "",
        k = i,
        x = s,
        $ = n,
        M = v;
      _;
    )
      switch (((g = b), (b = ft()))) {
        case 40:
          if (g != 108 && Je(M, u - 1) == 58) {
            Zo((M += ce(fs(b), "&", "&\f")), "&\f") != -1 && (y = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          M += fs(b);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          M += t_(g);
          break;
        case 92:
          M += r_(ds() - 1, 7);
          continue;
        case 47:
          switch (Dt()) {
            case 42:
            case 47:
              ls(o_(n_(ft(), ds()), t, r), l);
              break;
            default:
              M += "/";
          }
          break;
        case 123 * m:
          a[c++] = Ft(M) * y;
        case 125 * m:
        case 59:
        case 0:
          switch (b) {
            case 0:
            case 125:
              _ = 0;
            case 59 + d:
              (y == -1 && (M = ce(M, /\f/g, "")),
                f > 0 &&
                  Ft(M) - u &&
                  ls(
                    f > 32
                      ? $u(M + ";", n, r, u - 1)
                      : $u(ce(M, " ", "") + ";", n, r, u - 2),
                    l
                  ));
              break;
            case 59:
              M += ";";
            default:
              if (
                (ls(($ = Cu(M, t, r, c, d, i, a, v, (k = []), (x = []), u)), s),
                b === 123)
              )
                if (d === 0) ps(M, t, $, $, k, s, u, a, x);
                else
                  switch (h === 99 && Je(M, 3) === 110 ? 100 : h) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      ps(
                        e,
                        $,
                        $,
                        n && ls(Cu(e, $, $, 0, 0, i, a, v, i, (k = []), u), x),
                        i,
                        x,
                        u,
                        a,
                        n ? k : x
                      );
                      break;
                    default:
                      ps(M, $, $, $, [""], x, 0, a, x);
                  }
          }
          ((c = d = f = 0), (m = y = 1), (v = M = ""), (u = o));
          break;
        case 58:
          ((u = 1 + Ft(M)), (f = g));
        default:
          if (m < 1) {
            if (b == 123) --m;
            else if (b == 125 && m++ == 0 && e_() == 125) continue;
          }
          switch (((M += as(b)), b * m)) {
            case 38:
              y = d > 0 ? 1 : ((M += "\f"), -1);
              break;
            case 44:
              ((a[c++] = (Ft(M) - 1) * y), (y = 1));
              break;
            case 64:
              (Dt() === 45 && (M += fs(ft())),
                (h = Dt()),
                (d = u = Ft((v = M += i_(ds())))),
                b++);
              break;
            case 45:
              g === 45 && Ft(M) == 2 && (m = 0);
          }
      }
    return s;
  }
  function Cu(e, t, r, n, i, s, o, a, l, c, d) {
    for (
      var u = i - 1, h = i === 0 ? s : [""], f = ea(h), g = 0, m = 0, _ = 0;
      g < n;
      ++g
    )
      for (var y = 0, b = si(e, u + 1, (u = Hg((m = o[g])))), v = e; y < f; ++y)
        (v = xu(m > 0 ? h[y] + " " + b : ce(b, /&\f/g, h[y]))) && (l[_++] = v);
    return us(e, t, r, i === 0 ? Qo : a, l, c, d);
  }
  function o_(e, t, r) {
    return us(e, t, r, vu, as(Zg()), si(e, 2, -2), 0);
  }
  function $u(e, t, r, n) {
    return us(e, t, r, Xo, si(e, 0, n), si(e, n + 1, -1), n);
  }
  function un(e, t) {
    for (var r = "", n = ea(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || "";
    return r;
  }
  function a_(e, t, r, n) {
    switch (e.type) {
      case Wg:
        if (e.children.length) break;
      case Gg:
      case Xo:
        return (e.return = e.return || e.value);
      case vu:
        return "";
      case wu:
        return (e.return = e.value + "{" + un(e.children, n) + "}");
      case Qo:
        e.value = e.props.join(",");
    }
    return Ft((r = un(e.children, n)))
      ? (e.return = e.value + "{" + r + "}")
      : "";
  }
  function l_(e) {
    var t = ea(e);
    return function (r, n, i, s) {
      for (var o = "", a = 0; a < t; a++) o += e[a](r, n, i, s) || "";
      return o;
    };
  }
  function c_(e) {
    return function (t) {
      t.root || ((t = t.return) && e(t));
    };
  }
  function u_(e) {
    var t = Object.create(null);
    return function (r) {
      return (t[r] === void 0 && (t[r] = e(r)), t[r]);
    };
  }
  var d_ = function (t, r, n) {
      for (
        var i = 0, s = 0;
        (i = s), (s = Dt()), i === 38 && s === 12 && (r[n] = 1), !li(s);
      )
        ft();
      return ai(t, at);
    },
    f_ = function (t, r) {
      var n = -1,
        i = 44;
      do
        switch (li(i)) {
          case 0:
            (i === 38 && Dt() === 12 && (r[n] = 1), (t[n] += d_(at - 1, r, n)));
            break;
          case 2:
            t[n] += fs(i);
            break;
          case 4:
            if (i === 44) {
              ((t[++n] = Dt() === 58 ? "&\f" : ""), (r[n] = t[n].length));
              break;
            }
          default:
            t[n] += as(i);
        }
      while ((i = ft()));
      return t;
    },
    p_ = function (t, r) {
      return Mu(f_(Su(t), r));
    },
    Au = new WeakMap(),
    h_ = function (t) {
      if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
        for (
          var r = t.value,
            n = t.parent,
            i = t.column === n.column && t.line === n.line;
          n.type !== "rule";
        )
          if (((n = n.parent), !n)) return;
        if (
          !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Au.get(n)) &&
          !i
        ) {
          Au.set(t, !0);
          for (
            var s = [], o = p_(r, s), a = n.props, l = 0, c = 0;
            l < o.length;
            l++
          )
            for (var d = 0; d < a.length; d++, c++)
              t.props[c] = s[l]
                ? o[l].replace(/&\f/g, a[d])
                : a[d] + " " + o[l];
        }
      }
    },
    m_ = function (t) {
      if (t.type === "decl") {
        var r = t.value;
        r.charCodeAt(0) === 108 &&
          r.charCodeAt(2) === 98 &&
          ((t.return = ""), (t.value = ""));
      }
    };
  function Eu(e, t) {
    switch (Yg(e, t)) {
      case 5103:
        return le + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return le + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return le + e + os + e + Ze + e + e;
      case 6828:
      case 4268:
        return le + e + Ze + e + e;
      case 6165:
        return le + e + Ze + "flex-" + e + e;
      case 5187:
        return (
          le +
          e +
          ce(e, /(\w+).+(:[^]+)/, le + "box-$1$2" + Ze + "flex-$1$2") +
          e
        );
      case 5443:
        return le + e + Ze + "flex-item-" + ce(e, /flex-|-self/, "") + e;
      case 4675:
        return (
          le +
          e +
          Ze +
          "flex-line-pack" +
          ce(e, /align-content|flex-|-self/, "") +
          e
        );
      case 5548:
        return le + e + Ze + ce(e, "shrink", "negative") + e;
      case 5292:
        return le + e + Ze + ce(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          le +
          "box-" +
          ce(e, "-grow", "") +
          le +
          e +
          Ze +
          ce(e, "grow", "positive") +
          e
        );
      case 4554:
        return le + ce(e, /([^-])(transform)/g, "$1" + le + "$2") + e;
      case 6187:
        return (
          ce(
            ce(ce(e, /(zoom-|grab)/, le + "$1"), /(image-set)/, le + "$1"),
            e,
            ""
          ) + e
        );
      case 5495:
      case 3959:
        return ce(e, /(image-set\([^]*)/, le + "$1$`$1");
      case 4968:
        return (
          ce(
            ce(
              e,
              /(.+:)(flex-)?(.*)/,
              le + "box-pack:$3" + Ze + "flex-pack:$3"
            ),
            /s.+-b[^;]+/,
            "justify"
          ) +
          le +
          e +
          e
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return ce(e, /(.+)-inline(.+)/, le + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (Ft(e) - 1 - t > 6)
          switch (Je(e, t + 1)) {
            case 109:
              if (Je(e, t + 4) !== 45) break;
            case 102:
              return (
                ce(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    le +
                    "$2-$3$1" +
                    os +
                    (Je(e, t + 3) == 108 ? "$3" : "$2-$3")
                ) + e
              );
            case 115:
              return ~Zo(e, "stretch")
                ? Eu(ce(e, "stretch", "fill-available"), t) + e
                : e;
          }
        break;
      case 4949:
        if (Je(e, t + 1) !== 115) break;
      case 6444:
        switch (Je(e, Ft(e) - 3 - (~Zo(e, "!important") && 10))) {
          case 107:
            return ce(e, ":", ":" + le) + e;
          case 101:
            return (
              ce(
                e,
                /(.+:)([^;!]+)(;|!.+)?/,
                "$1" +
                  le +
                  (Je(e, 14) === 45 ? "inline-" : "") +
                  "box$3$1" +
                  le +
                  "$2$3$1" +
                  Ze +
                  "$2box$3"
              ) + e
            );
        }
        break;
      case 5936:
        switch (Je(e, t + 11)) {
          case 114:
            return le + e + Ze + ce(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return le + e + Ze + ce(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return le + e + Ze + ce(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return le + e + Ze + e + e;
    }
    return e;
  }
  var g_ = function (t, r, n, i) {
      if (t.length > -1 && !t.return)
        switch (t.type) {
          case Xo:
            t.return = Eu(t.value, t.length);
            break;
          case wu:
            return un([oi(t, { value: ce(t.value, "@", "@" + le) })], i);
          case Qo:
            if (t.length)
              return Xg(t.props, function (s) {
                switch (Qg(s, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return un(
                      [
                        oi(t, {
                          props: [ce(s, /:(read-\w+)/, ":" + os + "$1")],
                        }),
                      ],
                      i
                    );
                  case "::placeholder":
                    return un(
                      [
                        oi(t, {
                          props: [ce(s, /:(plac\w+)/, ":" + le + "input-$1")],
                        }),
                        oi(t, {
                          props: [ce(s, /:(plac\w+)/, ":" + os + "$1")],
                        }),
                        oi(t, {
                          props: [ce(s, /:(plac\w+)/, Ze + "input-$1")],
                        }),
                      ],
                      i
                    );
                }
                return "";
              });
        }
    },
    __ = [g_],
    Iu = function (t) {
      var r = t.key;
      if (r === "css") {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, function (m) {
          var _ = m.getAttribute("data-emotion");
          _.indexOf(" ") !== -1 &&
            (document.head.appendChild(m), m.setAttribute("data-s", ""));
        });
      }
      var i = t.stylisPlugins || __,
        s = {},
        o,
        a = [];
      ((o = t.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
          function (m) {
            for (
              var _ = m.getAttribute("data-emotion").split(" "), y = 1;
              y < _.length;
              y++
            )
              s[_[y]] = !0;
            a.push(m);
          }
        ));
      var l,
        c = [h_, m_];
      {
        var d,
          u = [
            a_,
            c_(function (m) {
              d.insert(m);
            }),
          ],
          h = l_(c.concat(i, u)),
          f = function (_) {
            return un(s_(_), h);
          };
        l = function (_, y, b, v) {
          ((d = b),
            f(_ ? _ + "{" + y.styles + "}" : y.styles),
            v && (g.inserted[y.name] = !0));
        };
      }
      var g = {
        key: r,
        sheet: new Kg({
          key: r,
          container: o,
          nonce: t.nonce,
          speedy: t.speedy,
          prepend: t.prepend,
          insertionPoint: t.insertionPoint,
        }),
        nonce: t.nonce,
        inserted: s,
        registered: {},
        insert: l,
      };
      return (g.sheet.hydrate(a), g);
    };
  function y_(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
      var r = function n() {
        var i = !1;
        try {
          i = this instanceof n;
        } catch {}
        return i
          ? Reflect.construct(t, arguments, this.constructor)
          : t.apply(this, arguments);
      };
      r.prototype = t.prototype;
    } else r = {};
    return (
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.keys(e).forEach(function (n) {
        var i = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(
          r,
          n,
          i.get
            ? i
            : {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              }
        );
      }),
      r
    );
  }
  var hs = { exports: {} },
    fe = {};
  var Pu;
  function b_() {
    if (Pu) return fe;
    Pu = 1;
    var e = typeof Symbol == "function" && Symbol.for,
      t = e ? Symbol.for("react.element") : 60103,
      r = e ? Symbol.for("react.portal") : 60106,
      n = e ? Symbol.for("react.fragment") : 60107,
      i = e ? Symbol.for("react.strict_mode") : 60108,
      s = e ? Symbol.for("react.profiler") : 60114,
      o = e ? Symbol.for("react.provider") : 60109,
      a = e ? Symbol.for("react.context") : 60110,
      l = e ? Symbol.for("react.async_mode") : 60111,
      c = e ? Symbol.for("react.concurrent_mode") : 60111,
      d = e ? Symbol.for("react.forward_ref") : 60112,
      u = e ? Symbol.for("react.suspense") : 60113,
      h = e ? Symbol.for("react.suspense_list") : 60120,
      f = e ? Symbol.for("react.memo") : 60115,
      g = e ? Symbol.for("react.lazy") : 60116,
      m = e ? Symbol.for("react.block") : 60121,
      _ = e ? Symbol.for("react.fundamental") : 60117,
      y = e ? Symbol.for("react.responder") : 60118,
      b = e ? Symbol.for("react.scope") : 60119;
    function v(x) {
      if (typeof x == "object" && x !== null) {
        var $ = x.$$typeof;
        switch ($) {
          case t:
            switch (((x = x.type), x)) {
              case l:
              case c:
              case n:
              case s:
              case i:
              case u:
                return x;
              default:
                switch (((x = x && x.$$typeof), x)) {
                  case a:
                  case d:
                  case g:
                  case f:
                  case o:
                    return x;
                  default:
                    return $;
                }
            }
          case r:
            return $;
        }
      }
    }
    function k(x) {
      return v(x) === c;
    }
    return (
      (fe.AsyncMode = l),
      (fe.ConcurrentMode = c),
      (fe.ContextConsumer = a),
      (fe.ContextProvider = o),
      (fe.Element = t),
      (fe.ForwardRef = d),
      (fe.Fragment = n),
      (fe.Lazy = g),
      (fe.Memo = f),
      (fe.Portal = r),
      (fe.Profiler = s),
      (fe.StrictMode = i),
      (fe.Suspense = u),
      (fe.isAsyncMode = function (x) {
        return k(x) || v(x) === l;
      }),
      (fe.isConcurrentMode = k),
      (fe.isContextConsumer = function (x) {
        return v(x) === a;
      }),
      (fe.isContextProvider = function (x) {
        return v(x) === o;
      }),
      (fe.isElement = function (x) {
        return typeof x == "object" && x !== null && x.$$typeof === t;
      }),
      (fe.isForwardRef = function (x) {
        return v(x) === d;
      }),
      (fe.isFragment = function (x) {
        return v(x) === n;
      }),
      (fe.isLazy = function (x) {
        return v(x) === g;
      }),
      (fe.isMemo = function (x) {
        return v(x) === f;
      }),
      (fe.isPortal = function (x) {
        return v(x) === r;
      }),
      (fe.isProfiler = function (x) {
        return v(x) === s;
      }),
      (fe.isStrictMode = function (x) {
        return v(x) === i;
      }),
      (fe.isSuspense = function (x) {
        return v(x) === u;
      }),
      (fe.isValidElementType = function (x) {
        return (
          typeof x == "string" ||
          typeof x == "function" ||
          x === n ||
          x === c ||
          x === s ||
          x === i ||
          x === u ||
          x === h ||
          (typeof x == "object" &&
            x !== null &&
            (x.$$typeof === g ||
              x.$$typeof === f ||
              x.$$typeof === o ||
              x.$$typeof === a ||
              x.$$typeof === d ||
              x.$$typeof === _ ||
              x.$$typeof === y ||
              x.$$typeof === b ||
              x.$$typeof === m))
        );
      }),
      (fe.typeOf = v),
      fe
    );
  }
  var pe = {},
    Ou;
  function v_() {
    if (Ou) return pe;
    Ou = 1;
    var e = {};
    return (
      e.NODE_ENV !== "production" &&
        (function () {
          var t = typeof Symbol == "function" && Symbol.for,
            r = t ? Symbol.for("react.element") : 60103,
            n = t ? Symbol.for("react.portal") : 60106,
            i = t ? Symbol.for("react.fragment") : 60107,
            s = t ? Symbol.for("react.strict_mode") : 60108,
            o = t ? Symbol.for("react.profiler") : 60114,
            a = t ? Symbol.for("react.provider") : 60109,
            l = t ? Symbol.for("react.context") : 60110,
            c = t ? Symbol.for("react.async_mode") : 60111,
            d = t ? Symbol.for("react.concurrent_mode") : 60111,
            u = t ? Symbol.for("react.forward_ref") : 60112,
            h = t ? Symbol.for("react.suspense") : 60113,
            f = t ? Symbol.for("react.suspense_list") : 60120,
            g = t ? Symbol.for("react.memo") : 60115,
            m = t ? Symbol.for("react.lazy") : 60116,
            _ = t ? Symbol.for("react.block") : 60121,
            y = t ? Symbol.for("react.fundamental") : 60117,
            b = t ? Symbol.for("react.responder") : 60118,
            v = t ? Symbol.for("react.scope") : 60119;
          function k(G) {
            return (
              typeof G == "string" ||
              typeof G == "function" ||
              G === i ||
              G === d ||
              G === o ||
              G === s ||
              G === h ||
              G === f ||
              (typeof G == "object" &&
                G !== null &&
                (G.$$typeof === m ||
                  G.$$typeof === g ||
                  G.$$typeof === a ||
                  G.$$typeof === l ||
                  G.$$typeof === u ||
                  G.$$typeof === y ||
                  G.$$typeof === b ||
                  G.$$typeof === v ||
                  G.$$typeof === _))
            );
          }
          function x(G) {
            if (typeof G == "object" && G !== null) {
              var rn = G.$$typeof;
              switch (rn) {
                case r:
                  var nn = G.type;
                  switch (nn) {
                    case c:
                    case d:
                    case i:
                    case o:
                    case s:
                    case h:
                      return nn;
                    default:
                      var Qn = nn && nn.$$typeof;
                      switch (Qn) {
                        case l:
                        case u:
                        case m:
                        case g:
                        case a:
                          return Qn;
                        default:
                          return rn;
                      }
                  }
                case n:
                  return rn;
              }
            }
          }
          var $ = c,
            M = d,
            C = l,
            O = a,
            E = r,
            A = u,
            S = i,
            I = m,
            q = g,
            te = n,
            Se = o,
            we = s,
            xe = h,
            kt = !1;
          function He(G) {
            return (
              kt ||
                ((kt = !0),
                console.warn(
                  "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
                )),
              zr(G) || x(G) === c
            );
          }
          function zr(G) {
            return x(G) === d;
          }
          function Br(G) {
            return x(G) === l;
          }
          function ut(G) {
            return x(G) === a;
          }
          function Hn(G) {
            return typeof G == "object" && G !== null && G.$$typeof === r;
          }
          function Jn(G) {
            return x(G) === u;
          }
          function tn(G) {
            return x(G) === i;
          }
          function Qt(G) {
            return x(G) === m;
          }
          function St(G) {
            return x(G) === g;
          }
          function dt(G) {
            return x(G) === n;
          }
          function Mt(G) {
            return x(G) === o;
          }
          function Ct(G) {
            return x(G) === s;
          }
          function Yn(G) {
            return x(G) === h;
          }
          ((pe.AsyncMode = $),
            (pe.ConcurrentMode = M),
            (pe.ContextConsumer = C),
            (pe.ContextProvider = O),
            (pe.Element = E),
            (pe.ForwardRef = A),
            (pe.Fragment = S),
            (pe.Lazy = I),
            (pe.Memo = q),
            (pe.Portal = te),
            (pe.Profiler = Se),
            (pe.StrictMode = we),
            (pe.Suspense = xe),
            (pe.isAsyncMode = He),
            (pe.isConcurrentMode = zr),
            (pe.isContextConsumer = Br),
            (pe.isContextProvider = ut),
            (pe.isElement = Hn),
            (pe.isForwardRef = Jn),
            (pe.isFragment = tn),
            (pe.isLazy = Qt),
            (pe.isMemo = St),
            (pe.isPortal = dt),
            (pe.isProfiler = Mt),
            (pe.isStrictMode = Ct),
            (pe.isSuspense = Yn),
            (pe.isValidElementType = k),
            (pe.typeOf = x));
        })(),
      pe
    );
  }
  var Tu;
  function w_() {
    if (Tu) return hs.exports;
    Tu = 1;
    var e = {};
    return (
      e.NODE_ENV === "production" ? (hs.exports = b_()) : (hs.exports = v_()),
      hs.exports
    );
  }
  var ra, Ru;
  function x_() {
    if (Ru) return ra;
    Ru = 1;
    var e = w_(),
      t = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      r = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      n = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      },
      i = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      },
      s = {};
    ((s[e.ForwardRef] = n), (s[e.Memo] = i));
    function o(g) {
      return e.isMemo(g) ? i : s[g.$$typeof] || t;
    }
    var a = Object.defineProperty,
      l = Object.getOwnPropertyNames,
      c = Object.getOwnPropertySymbols,
      d = Object.getOwnPropertyDescriptor,
      u = Object.getPrototypeOf,
      h = Object.prototype;
    function f(g, m, _) {
      if (typeof m != "string") {
        if (h) {
          var y = u(m);
          y && y !== h && f(g, y, _);
        }
        var b = l(m);
        c && (b = b.concat(c(m)));
        for (var v = o(g), k = o(m), x = 0; x < b.length; ++x) {
          var $ = b[x];
          if (!r[$] && !(_ && _[$]) && !(k && k[$]) && !(v && v[$])) {
            var M = d(m, $);
            try {
              a(g, $, M);
            } catch {}
          }
        }
      }
      return g;
    }
    return ((ra = f), ra);
  }
  x_();
  var k_ = !0;
  function S_(e, t, r) {
    var n = "";
    return (
      r.split(" ").forEach(function (i) {
        e[i] !== void 0 ? t.push(e[i] + ";") : i && (n += i + " ");
      }),
      n
    );
  }
  var Nu = function (t, r, n) {
      var i = t.key + "-" + r.name;
      (n === !1 || k_ === !1) &&
        t.registered[i] === void 0 &&
        (t.registered[i] = r.styles);
    },
    M_ = function (t, r, n) {
      Nu(t, r, n);
      var i = t.key + "-" + r.name;
      if (t.inserted[r.name] === void 0) {
        var s = r;
        do (t.insert(r === s ? "." + i : "", s, t.sheet, !0), (s = s.next));
        while (s !== void 0);
      }
    };
  function C_(e) {
    for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
      ((r =
        (e.charCodeAt(n) & 255) |
        ((e.charCodeAt(++n) & 255) << 8) |
        ((e.charCodeAt(++n) & 255) << 16) |
        ((e.charCodeAt(++n) & 255) << 24)),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
        (r ^= r >>> 24),
        (t =
          ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
          ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))));
    switch (i) {
      case 3:
        t ^= (e.charCodeAt(n + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(n + 1) & 255) << 8;
      case 1:
        ((t ^= e.charCodeAt(n) & 255),
          (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    }
    return (
      (t ^= t >>> 13),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
  }
  var $_ = {
      animationIterationCount: 1,
      aspectRatio: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      scale: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    A_ = /[A-Z]|^ms/g,
    E_ = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    Lu = function (t) {
      return t.charCodeAt(1) === 45;
    },
    Fu = function (t) {
      return t != null && typeof t != "boolean";
    },
    na = u_(function (e) {
      return Lu(e) ? e : e.replace(A_, "-$&").toLowerCase();
    }),
    Du = function (t, r) {
      switch (t) {
        case "animation":
        case "animationName":
          if (typeof r == "string")
            return r.replace(E_, function (n, i, s) {
              return ((zt = { name: i, styles: s, next: zt }), i);
            });
      }
      return $_[t] !== 1 && !Lu(t) && typeof r == "number" && r !== 0
        ? r + "px"
        : r;
    };
  function ci(e, t, r) {
    if (r == null) return "";
    var n = r;
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof r) {
      case "boolean":
        return "";
      case "object": {
        var i = r;
        if (i.anim === 1)
          return ((zt = { name: i.name, styles: i.styles, next: zt }), i.name);
        var s = r;
        if (s.styles !== void 0) {
          var o = s.next;
          if (o !== void 0)
            for (; o !== void 0; )
              ((zt = { name: o.name, styles: o.styles, next: zt }),
                (o = o.next));
          var a = s.styles + ";";
          return a;
        }
        return I_(e, t, r);
      }
      case "function": {
        if (e !== void 0) {
          var l = zt,
            c = r(e);
          return ((zt = l), ci(e, t, c));
        }
        break;
      }
    }
    var d = r;
    return d;
  }
  function I_(e, t, r) {
    var n = "";
    if (Array.isArray(r))
      for (var i = 0; i < r.length; i++) n += ci(e, t, r[i]) + ";";
    else
      for (var s in r) {
        var o = r[s];
        if (typeof o != "object") {
          var a = o;
          Fu(a) && (n += na(s) + ":" + Du(s, a) + ";");
        } else if (Array.isArray(o) && typeof o[0] == "string" && t == null)
          for (var l = 0; l < o.length; l++)
            Fu(o[l]) && (n += na(s) + ":" + Du(s, o[l]) + ";");
        else {
          var c = ci(e, t, o);
          switch (s) {
            case "animation":
            case "animationName": {
              n += na(s) + ":" + c + ";";
              break;
            }
            default:
              n += s + "{" + c + "}";
          }
        }
      }
    return n;
  }
  var zu = /label:\s*([^\s;{]+)\s*(;|$)/g,
    zt;
  function Bu(e, t, r) {
    if (
      e.length === 1 &&
      typeof e[0] == "object" &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0];
    var n = !0,
      i = "";
    zt = void 0;
    var s = e[0];
    if (s == null || s.raw === void 0) ((n = !1), (i += ci(r, t, s)));
    else {
      var o = s;
      i += o[0];
    }
    for (var a = 1; a < e.length; a++)
      if (((i += ci(r, t, e[a])), n)) {
        var l = s;
        i += l[a];
      }
    zu.lastIndex = 0;
    for (var c = "", d; (d = zu.exec(i)) !== null; ) c += "-" + d[1];
    var u = C_(i) + c;
    return { name: u, styles: i, next: zt };
  }
  var P_ = function (t) {
      return t();
    },
    O_ = ss.useInsertionEffect ? ss.useInsertionEffect : !1,
    T_ = O_ || P_,
    Vu = $t(typeof HTMLElement < "u" ? Iu({ key: "css" }) : null),
    R_ = Vu.Provider,
    N_ = function (t) {
      return Lt(function (r, n) {
        var i = de(Vu);
        return t(r, i, n);
      });
    },
    L_ = $t({}),
    ui = {}.hasOwnProperty,
    ia = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
    sa = function (t, r) {
      var n = {};
      for (var i in r) ui.call(r, i) && (n[i] = r[i]);
      return ((n[ia] = t), n);
    },
    F_ = function (t) {
      var r = t.cache,
        n = t.serialized,
        i = t.isStringTag;
      return (
        Nu(r, n, i),
        T_(function () {
          return M_(r, n, i);
        }),
        null
      );
    },
    D_ = N_(function (e, t, r) {
      var n = e.css;
      typeof n == "string" &&
        t.registered[n] !== void 0 &&
        (n = t.registered[n]);
      var i = e[ia],
        s = [n],
        o = "";
      typeof e.className == "string"
        ? (o = S_(t.registered, s, e.className))
        : e.className != null && (o = e.className + " ");
      var a = Bu(s, void 0, de(L_));
      o += t.key + "-" + a.name;
      var l = {};
      for (var c in e)
        ui.call(e, c) && c !== "css" && c !== ia && (l[c] = e[c]);
      return (
        (l.className = o),
        r && (l.ref = r),
        rt(
          Y,
          null,
          rt(F_, {
            cache: t,
            serialized: a,
            isStringTag: typeof i == "string",
          }),
          rt(i, l)
        )
      );
    }),
    oa = D_,
    p = function (t, r, n) {
      return ui.call(r, "css") ? Xe(oa, sa(t, r), n) : Xe(t, r, n);
    },
    P = function (t, r, n) {
      return ui.call(r, "css") ? Xe(oa, sa(t, r), n) : Xe(t, r, n);
    };
  const z_ = ({ hass: e, action: t, target: r, data: n }) => {
      const i = t.split(".")[0],
        s = t.split(".")[1],
        o = { ...n, ...r };
      return e.callService(i, s, o);
    },
    aa = async (e, t, r, n) => {
      const i = t[r + "_action"];
      if (i?.action === "perform-action")
        return z_({
          hass: n,
          action: i.perform_action,
          target: i.target,
          data: i.data ?? {},
        });
      const s = new CustomEvent("hass-action", {
        bubbles: !0,
        composed: !0,
        detail: { config: { ...t, entity_id: t?.entity }, action: r },
      });
      return (e.dispatchEvent(s), Promise.resolve());
    };
  function V() {
    return document.querySelector("home-assistant").hass;
  }
  function dn(e, t) {
    if (!e) return [];
    if (Array.isArray(e)) return e;
    const r = e;
    if (r.enabled === !1 || r.enabled == null) return [];
    const n = r.entity_id ?? t;
    let i;
    try {
      i = V().states[n]?.attributes?.friendly_name;
    } catch {}
    return [{ name: i ?? "Search", entity_id: n, media_types: r.media_types }];
  }
  const qu = e => ({
      type: e.type ?? "custom:mediocre-media-player-card",
      entity_id: e?.entity_id ?? "",
      name: e?.name ?? null,
      use_art_colors: e?.use_art_colors ?? !1,
      tap_opens_popup: e?.tap_opens_popup ?? !1,
      action: e?.action ?? {},
      speaker_group: {
        entity_id: e?.speaker_group?.entity_id ?? null,
        entities: e?.speaker_group?.entities ?? [],
      },
      search: dn(e.search, e.entity_id),
      media_browser: e?.media_browser
        ? Array.isArray(e.media_browser)
          ? e.media_browser
          : [{ entity_id: e.media_browser.entity_id ?? e.entity_id }]
        : null,
      ma_entity_id: e?.ma_entity_id ?? null,
      ma_favorite_button_entity_id: e?.ma_favorite_button_entity_id ?? null,
      lms_entity_id: e?.lms_entity_id ?? null,
      custom_buttons: e?.custom_buttons ?? [],
      options: {
        always_show_power_button: e?.options?.always_show_power_button ?? !1,
        always_show_custom_buttons:
          e?.options?.always_show_custom_buttons ?? !1,
        hide_when_off: e?.options?.hide_when_off ?? !1,
        hide_when_group_child: e?.options?.hide_when_group_child ?? !1,
        show_volume_step_buttons: e?.options?.show_volume_step_buttons ?? !1,
        use_volume_up_down_for_step_buttons:
          e?.options?.use_volume_up_down_for_step_buttons ?? !1,
        use_experimental_lms_media_browser:
          e?.options?.use_experimental_lms_media_browser ?? !1,
      },
      grid_options: e?.grid_options,
      visibility: e?.visibility,
    }),
    ju = e => ({
      type: e.type ?? "custom:mediocre-massive-media-player-card",
      entity_id: e?.entity_id ?? "",
      use_art_colors: e?.use_art_colors ?? !1,
      mode: e?.mode ?? "card",
      action: e?.action ?? {},
      speaker_group: {
        entity_id: e?.speaker_group?.entity_id ?? null,
        entities: e?.speaker_group?.entities ?? [],
      },
      search: dn(e.search, e.entity_id),
      media_browser: e?.media_browser
        ? Array.isArray(e.media_browser)
          ? e.media_browser
          : [{ entity_id: e.media_browser.entity_id ?? e.entity_id }]
        : null,
      ma_entity_id: e?.ma_entity_id ?? null,
      ma_favorite_button_entity_id: e?.ma_favorite_button_entity_id ?? null,
      lms_entity_id: e?.lms_entity_id ?? null,
      custom_buttons: e?.custom_buttons ?? [],
      options: {
        always_show_power_button: e?.options?.always_show_power_button ?? !1,
        show_volume_step_buttons: e?.options?.show_volume_step_buttons ?? !1,
        use_volume_up_down_for_step_buttons:
          e?.options?.use_volume_up_down_for_step_buttons ?? !1,
        use_experimental_lms_media_browser:
          e?.options?.use_experimental_lms_media_browser ?? !1,
      },
      grid_options: e?.grid_options,
      visibility: e?.visibility,
    }),
    Uu = e => {
      const t = { ...e };
      return (
        t.use_art_colors || delete t.use_art_colors,
        t.tap_opens_popup || delete t.tap_opens_popup,
        (!t.action || Object.keys(t.action).length === 0) && delete t.action,
        t.ma_entity_id || delete t.ma_entity_id,
        t.ma_favorite_button_entity_id || delete t.ma_favorite_button_entity_id,
        t.lms_entity_id || delete t.lms_entity_id,
        (!t.custom_buttons || t.custom_buttons.length === 0) &&
          delete t.custom_buttons,
        t.speaker_group?.entity_id === null && delete t.speaker_group.entity_id,
        !t.speaker_group?.entity_id &&
          (!t.speaker_group?.entities ||
            t.speaker_group.entities.length === 0) &&
          delete t.speaker_group,
        t.options?.always_show_power_button === !1 &&
          delete t.options.always_show_power_button,
        t.options?.always_show_custom_buttons === !1 &&
          delete t.options.always_show_custom_buttons,
        t.options?.hide_when_off === !1 && delete t.options.hide_when_off,
        t.options?.hide_when_group_child === !1 &&
          delete t.options.hide_when_group_child,
        t.options?.show_volume_step_buttons === !1 &&
          delete t.options.show_volume_step_buttons,
        t.options?.use_volume_up_down_for_step_buttons === !1 &&
          delete t.options.use_volume_up_down_for_step_buttons,
        t.options?.use_experimental_lms_media_browser === !1 &&
          delete t.options.use_experimental_lms_media_browser,
        Object.keys(t.options ?? {}).length === 0 && delete t.options,
        (t.search = dn(t.search, t.entity_id)),
        Array.isArray(t.search) && t.search.length === 0 && delete t.search,
        t
      );
    },
    Ku = e => {
      const t = { ...e };
      return (
        t.use_art_colors || delete t.use_art_colors,
        (!t.action || Object.keys(t.action).length === 0) && delete t.action,
        t.ma_entity_id || delete t.ma_entity_id,
        t.ma_favorite_button_entity_id || delete t.ma_favorite_button_entity_id,
        t.lms_entity_id || delete t.lms_entity_id,
        (!t.custom_buttons || t.custom_buttons.length === 0) &&
          delete t.custom_buttons,
        t.speaker_group?.entity_id === null && delete t.speaker_group.entity_id,
        !t.speaker_group?.entity_id &&
          (!t.speaker_group?.entities ||
            t.speaker_group.entities.length === 0) &&
          delete t.speaker_group,
        t.options?.always_show_power_button === !1 &&
          delete t.options.always_show_power_button,
        t.options?.show_volume_step_buttons === !1 &&
          delete t.options.show_volume_step_buttons,
        t.options?.use_volume_up_down_for_step_buttons === !1 &&
          delete t.options.use_volume_up_down_for_step_buttons,
        t.options?.use_experimental_lms_media_browser === !1 &&
          delete t.options.use_experimental_lms_media_browser,
        Object.keys(t.options ?? {}).length === 0 && delete t.options,
        (t.search = dn(t.search, t.entity_id)),
        Array.isArray(t.search) && t.search.length === 0 && delete t.search,
        t
      );
    },
    { min: B_, max: V_ } = Math,
    jr = (e, t = 0, r = 1) => B_(V_(t, e), r),
    la = e => {
      ((e._clipped = !1), (e._unclipped = e.slice(0)));
      for (let t = 0; t <= 3; t++)
        t < 3
          ? ((e[t] < 0 || e[t] > 255) && (e._clipped = !0),
            (e[t] = jr(e[t], 0, 255)))
          : t === 3 && (e[t] = jr(e[t], 0, 1));
      return e;
    },
    Gu = {};
  for (let e of [
    "Boolean",
    "Number",
    "String",
    "Function",
    "Array",
    "Date",
    "RegExp",
    "Undefined",
    "Null",
  ])
    Gu[`[object ${e}]`] = e.toLowerCase();
  function ne(e) {
    return Gu[Object.prototype.toString.call(e)] || "object";
  }
  const ee = (e, t = null) =>
      e.length >= 3
        ? Array.prototype.slice.call(e)
        : ne(e[0]) == "object" && t
          ? t
              .split("")
              .filter(r => e[0][r] !== void 0)
              .map(r => e[0][r])
          : e[0].slice(0),
    fn = e => {
      if (e.length < 2) return null;
      const t = e.length - 1;
      return ne(e[t]) == "string" ? e[t].toLowerCase() : null;
    },
    { PI: ms, min: Wu, max: Hu } = Math,
    mt = e => Math.round(e * 100) / 100,
    ca = e => Math.round(e * 100) / 100,
    tr = ms * 2,
    ua = ms / 3,
    q_ = ms / 180,
    j_ = 180 / ms;
  function Ju(e) {
    return [...e.slice(0, 3).reverse(), ...e.slice(3)];
  }
  const Z = { format: {}, autodetect: [] };
  class N {
    constructor(...t) {
      const r = this;
      if (
        ne(t[0]) === "object" &&
        t[0].constructor &&
        t[0].constructor === this.constructor
      )
        return t[0];
      let n = fn(t),
        i = !1;
      if (!n) {
        ((i = !0),
          Z.sorted ||
            ((Z.autodetect = Z.autodetect.sort((s, o) => o.p - s.p)),
            (Z.sorted = !0)));
        for (let s of Z.autodetect) if (((n = s.test(...t)), n)) break;
      }
      if (Z.format[n]) {
        const s = Z.format[n].apply(null, i ? t : t.slice(0, -1));
        r._rgb = la(s);
      } else throw new Error("unknown format: " + t);
      r._rgb.length === 3 && r._rgb.push(1);
    }
    toString() {
      return ne(this.hex) == "function"
        ? this.hex()
        : `[${this._rgb.join(",")}]`;
    }
  }
  const U_ = "3.2.0",
    ie = (...e) => new N(...e);
  ie.version = U_;
  const pn = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      laserlemon: "#ffff54",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrod: "#fafad2",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      maroon2: "#7f0000",
      maroon3: "#b03060",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      purple2: "#7f007f",
      purple3: "#a020f0",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32",
    },
    K_ = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    G_ = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
    Yu = e => {
      if (e.match(K_)) {
        ((e.length === 4 || e.length === 7) && (e = e.substr(1)),
          e.length === 3 &&
            ((e = e.split("")), (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2])));
        const t = parseInt(e, 16),
          r = t >> 16,
          n = (t >> 8) & 255,
          i = t & 255;
        return [r, n, i, 1];
      }
      if (e.match(G_)) {
        ((e.length === 5 || e.length === 9) && (e = e.substr(1)),
          e.length === 4 &&
            ((e = e.split("")),
            (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3])));
        const t = parseInt(e, 16),
          r = (t >> 24) & 255,
          n = (t >> 16) & 255,
          i = (t >> 8) & 255,
          s = Math.round(((t & 255) / 255) * 100) / 100;
        return [r, n, i, s];
      }
      throw new Error(`unknown hex color: ${e}`);
    },
    { round: gs } = Math,
    Qu = (...e) => {
      let [t, r, n, i] = ee(e, "rgba"),
        s = fn(e) || "auto";
      (i === void 0 && (i = 1),
        s === "auto" && (s = i < 1 ? "rgba" : "rgb"),
        (t = gs(t)),
        (r = gs(r)),
        (n = gs(n)));
      let a = "000000" + ((t << 16) | (r << 8) | n).toString(16);
      a = a.substr(a.length - 6);
      let l = "0" + gs(i * 255).toString(16);
      switch (((l = l.substr(l.length - 2)), s.toLowerCase())) {
        case "rgba":
          return `#${a}${l}`;
        case "argb":
          return `#${l}${a}`;
        default:
          return `#${a}`;
      }
    };
  ((N.prototype.name = function () {
    const e = Qu(this._rgb, "rgb");
    for (let t of Object.keys(pn)) if (pn[t] === e) return t.toLowerCase();
    return e;
  }),
    (Z.format.named = e => {
      if (((e = e.toLowerCase()), pn[e])) return Yu(pn[e]);
      throw new Error("unknown color name: " + e);
    }),
    Z.autodetect.push({
      p: 5,
      test: (e, ...t) => {
        if (!t.length && ne(e) === "string" && pn[e.toLowerCase()])
          return "named";
      },
    }),
    (N.prototype.alpha = function (e, t = !1) {
      return e !== void 0 && ne(e) === "number"
        ? t
          ? ((this._rgb[3] = e), this)
          : new N([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb")
        : this._rgb[3];
    }),
    (N.prototype.clipped = function () {
      return this._rgb._clipped || !1;
    }));
  const Bt = {
      Kn: 18,
      labWhitePoint: "d65",
      Xn: 0.95047,
      Yn: 1,
      Zn: 1.08883,
      kE: 216 / 24389,
      kKE: 8,
      kK: 24389 / 27,
      RefWhiteRGB: { X: 0.95047, Y: 1, Z: 1.08883 },
      MtxRGB2XYZ: {
        m00: 0.4124564390896922,
        m01: 0.21267285140562253,
        m02: 0.0193338955823293,
        m10: 0.357576077643909,
        m11: 0.715152155287818,
        m12: 0.11919202588130297,
        m20: 0.18043748326639894,
        m21: 0.07217499330655958,
        m22: 0.9503040785363679,
      },
      MtxXYZ2RGB: {
        m00: 3.2404541621141045,
        m01: -0.9692660305051868,
        m02: 0.055643430959114726,
        m10: -1.5371385127977166,
        m11: 1.8760108454466942,
        m12: -0.2040259135167538,
        m20: -0.498531409556016,
        m21: 0.041556017530349834,
        m22: 1.0572251882231791,
      },
      As: 0.9414285350000001,
      Bs: 1.040417467,
      Cs: 1.089532651,
      MtxAdaptMa: {
        m00: 0.8951,
        m01: -0.7502,
        m02: 0.0389,
        m10: 0.2664,
        m11: 1.7135,
        m12: -0.0685,
        m20: -0.1614,
        m21: 0.0367,
        m22: 1.0296,
      },
      MtxAdaptMaI: {
        m00: 0.9869929054667123,
        m01: 0.43230526972339456,
        m02: -0.008528664575177328,
        m10: -0.14705425642099013,
        m11: 0.5183602715367776,
        m12: 0.04004282165408487,
        m20: 0.15996265166373125,
        m21: 0.0492912282128556,
        m22: 0.9684866957875502,
      },
    },
    W_ = new Map([
      ["a", [1.0985, 0.35585]],
      ["b", [1.0985, 0.35585]],
      ["c", [0.98074, 1.18232]],
      ["d50", [0.96422, 0.82521]],
      ["d55", [0.95682, 0.92149]],
      ["d65", [0.95047, 1.08883]],
      ["e", [1, 1, 1]],
      ["f2", [0.99186, 0.67393]],
      ["f7", [0.95041, 1.08747]],
      ["f11", [1.00962, 0.6435]],
      ["icc", [0.96422, 0.82521]],
    ]);
  function rr(e) {
    const t = W_.get(String(e).toLowerCase());
    if (!t) throw new Error("unknown Lab illuminant " + e);
    ((Bt.labWhitePoint = e), (Bt.Xn = t[0]), (Bt.Zn = t[1]));
  }
  function di() {
    return Bt.labWhitePoint;
  }
  const da = (...e) => {
      e = ee(e, "lab");
      const [t, r, n] = e,
        [i, s, o] = H_(t, r, n),
        [a, l, c] = Xu(i, s, o);
      return [a, l, c, e.length > 3 ? e[3] : 1];
    },
    H_ = (e, t, r) => {
      const { kE: n, kK: i, kKE: s, Xn: o, Yn: a, Zn: l } = Bt,
        c = (e + 16) / 116,
        d = 0.002 * t + c,
        u = c - 0.005 * r,
        h = d * d * d,
        f = u * u * u,
        g = h > n ? h : (116 * d - 16) / i,
        m = e > s ? Math.pow((e + 16) / 116, 3) : e / i,
        _ = f > n ? f : (116 * u - 16) / i,
        y = g * o,
        b = m * a,
        v = _ * l;
      return [y, b, v];
    },
    fa = e => {
      const t = Math.sign(e);
      return (
        (e = Math.abs(e)),
        (e <= 0.0031308 ? e * 12.92 : 1.055 * Math.pow(e, 1 / 2.4) - 0.055) * t
      );
    },
    Xu = (e, t, r) => {
      const {
          MtxAdaptMa: n,
          MtxAdaptMaI: i,
          MtxXYZ2RGB: s,
          RefWhiteRGB: o,
          Xn: a,
          Yn: l,
          Zn: c,
        } = Bt,
        d = a * n.m00 + l * n.m10 + c * n.m20,
        u = a * n.m01 + l * n.m11 + c * n.m21,
        h = a * n.m02 + l * n.m12 + c * n.m22,
        f = o.X * n.m00 + o.Y * n.m10 + o.Z * n.m20,
        g = o.X * n.m01 + o.Y * n.m11 + o.Z * n.m21,
        m = o.X * n.m02 + o.Y * n.m12 + o.Z * n.m22,
        _ = (e * n.m00 + t * n.m10 + r * n.m20) * (f / d),
        y = (e * n.m01 + t * n.m11 + r * n.m21) * (g / u),
        b = (e * n.m02 + t * n.m12 + r * n.m22) * (m / h),
        v = _ * i.m00 + y * i.m10 + b * i.m20,
        k = _ * i.m01 + y * i.m11 + b * i.m21,
        x = _ * i.m02 + y * i.m12 + b * i.m22,
        $ = fa(v * s.m00 + k * s.m10 + x * s.m20),
        M = fa(v * s.m01 + k * s.m11 + x * s.m21),
        C = fa(v * s.m02 + k * s.m12 + x * s.m22);
      return [$ * 255, M * 255, C * 255];
    },
    pa = (...e) => {
      const [t, r, n, ...i] = ee(e, "rgb"),
        [s, o, a] = Zu(t, r, n),
        [l, c, d] = J_(s, o, a);
      return [l, c, d, ...(i.length > 0 && i[0] < 1 ? [i[0]] : [])];
    };
  function J_(e, t, r) {
    const { Xn: n, Yn: i, Zn: s, kE: o, kK: a } = Bt,
      l = e / n,
      c = t / i,
      d = r / s,
      u = l > o ? Math.pow(l, 1 / 3) : (a * l + 16) / 116,
      h = c > o ? Math.pow(c, 1 / 3) : (a * c + 16) / 116,
      f = d > o ? Math.pow(d, 1 / 3) : (a * d + 16) / 116;
    return [116 * h - 16, 500 * (u - h), 200 * (h - f)];
  }
  function ha(e) {
    const t = Math.sign(e);
    return (
      (e = Math.abs(e)),
      (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) * t
    );
  }
  const Zu = (e, t, r) => {
    ((e = ha(e / 255)), (t = ha(t / 255)), (r = ha(r / 255)));
    const {
      MtxRGB2XYZ: n,
      MtxAdaptMa: i,
      MtxAdaptMaI: s,
      Xn: o,
      Yn: a,
      Zn: l,
      As: c,
      Bs: d,
      Cs: u,
    } = Bt;
    let h = e * n.m00 + t * n.m10 + r * n.m20,
      f = e * n.m01 + t * n.m11 + r * n.m21,
      g = e * n.m02 + t * n.m12 + r * n.m22;
    const m = o * i.m00 + a * i.m10 + l * i.m20,
      _ = o * i.m01 + a * i.m11 + l * i.m21,
      y = o * i.m02 + a * i.m12 + l * i.m22;
    let b = h * i.m00 + f * i.m10 + g * i.m20,
      v = h * i.m01 + f * i.m11 + g * i.m21,
      k = h * i.m02 + f * i.m12 + g * i.m22;
    return (
      (b *= m / c),
      (v *= _ / d),
      (k *= y / u),
      (h = b * s.m00 + v * s.m10 + k * s.m20),
      (f = b * s.m01 + v * s.m11 + k * s.m21),
      (g = b * s.m02 + v * s.m12 + k * s.m22),
      [h, f, g]
    );
  };
  ((N.prototype.lab = function () {
    return pa(this._rgb);
  }),
    Object.assign(ie, {
      lab: (...e) => new N(...e, "lab"),
      getLabWhitePoint: di,
      setLabWhitePoint: rr,
    }),
    (Z.format.lab = da),
    Z.autodetect.push({
      p: 2,
      test: (...e) => {
        if (((e = ee(e, "lab")), ne(e) === "array" && e.length === 3))
          return "lab";
      },
    }),
    (N.prototype.darken = function (e = 1) {
      const t = this,
        r = t.lab();
      return ((r[0] -= Bt.Kn * e), new N(r, "lab").alpha(t.alpha(), !0));
    }),
    (N.prototype.brighten = function (e = 1) {
      return this.darken(-e);
    }),
    (N.prototype.darker = N.prototype.darken),
    (N.prototype.brighter = N.prototype.brighten),
    (N.prototype.get = function (e) {
      const [t, r] = e.split("."),
        n = this[t]();
      if (r) {
        const i = t.indexOf(r) - (t.substr(0, 2) === "ok" ? 2 : 0);
        if (i > -1) return n[i];
        throw new Error(`unknown channel ${r} in mode ${t}`);
      } else return n;
    }));
  const { pow: Y_ } = Math,
    Q_ = 1e-7,
    X_ = 20;
  N.prototype.luminance = function (e, t = "rgb") {
    if (e !== void 0 && ne(e) === "number") {
      if (e === 0) return new N([0, 0, 0, this._rgb[3]], "rgb");
      if (e === 1) return new N([255, 255, 255, this._rgb[3]], "rgb");
      let r = this.luminance(),
        n = X_;
      const i = (o, a) => {
          const l = o.interpolate(a, 0.5, t),
            c = l.luminance();
          return Math.abs(e - c) < Q_ || !n-- ? l : c > e ? i(o, l) : i(l, a);
        },
        s = (
          r > e ? i(new N([0, 0, 0]), this) : i(this, new N([255, 255, 255]))
        ).rgb();
      return new N([...s, this._rgb[3]]);
    }
    return Z_(...this._rgb.slice(0, 3));
  };
  const Z_ = (e, t, r) => (
      (e = ma(e)),
      (t = ma(t)),
      (r = ma(r)),
      0.2126 * e + 0.7152 * t + 0.0722 * r
    ),
    ma = e => (
      (e /= 255),
      e <= 0.03928 ? e / 12.92 : Y_((e + 0.055) / 1.055, 2.4)
    ),
    et = {},
    hn = (e, t, r = 0.5, ...n) => {
      let i = n[0] || "lrgb";
      if ((!et[i] && !n.length && (i = Object.keys(et)[0]), !et[i]))
        throw new Error(`interpolation mode ${i} is not defined`);
      return (
        ne(e) !== "object" && (e = new N(e)),
        ne(t) !== "object" && (t = new N(t)),
        et[i](e, t, r).alpha(e.alpha() + r * (t.alpha() - e.alpha()))
      );
    };
  ((N.prototype.mix = N.prototype.interpolate =
    function (e, t = 0.5, ...r) {
      return hn(this, e, t, ...r);
    }),
    (N.prototype.premultiply = function (e = !1) {
      const t = this._rgb,
        r = t[3];
      return e
        ? ((this._rgb = [t[0] * r, t[1] * r, t[2] * r, r]), this)
        : new N([t[0] * r, t[1] * r, t[2] * r, r], "rgb");
    }));
  const { sin: ey, cos: ty } = Math,
    ed = (...e) => {
      let [t, r, n] = ee(e, "lch");
      return (isNaN(n) && (n = 0), (n = n * q_), [t, ty(n) * r, ey(n) * r]);
    },
    ga = (...e) => {
      e = ee(e, "lch");
      const [t, r, n] = e,
        [i, s, o] = ed(t, r, n),
        [a, l, c] = da(i, s, o);
      return [a, l, c, e.length > 3 ? e[3] : 1];
    },
    ry = (...e) => {
      const t = Ju(ee(e, "hcl"));
      return ga(...t);
    },
    { sqrt: ny, atan2: iy, round: sy } = Math,
    td = (...e) => {
      const [t, r, n] = ee(e, "lab"),
        i = ny(r * r + n * n);
      let s = (iy(n, r) * j_ + 360) % 360;
      return (sy(i * 1e4) === 0 && (s = Number.NaN), [t, i, s]);
    },
    _a = (...e) => {
      const [t, r, n, ...i] = ee(e, "rgb"),
        [s, o, a] = pa(t, r, n),
        [l, c, d] = td(s, o, a);
      return [l, c, d, ...(i.length > 0 && i[0] < 1 ? [i[0]] : [])];
    };
  ((N.prototype.lch = function () {
    return _a(this._rgb);
  }),
    (N.prototype.hcl = function () {
      return Ju(_a(this._rgb));
    }),
    Object.assign(ie, {
      lch: (...e) => new N(...e, "lch"),
      hcl: (...e) => new N(...e, "hcl"),
    }),
    (Z.format.lch = ga),
    (Z.format.hcl = ry),
    ["lch", "hcl"].forEach(e =>
      Z.autodetect.push({
        p: 2,
        test: (...t) => {
          if (((t = ee(t, e)), ne(t) === "array" && t.length === 3)) return e;
        },
      })
    ),
    (N.prototype.saturate = function (e = 1) {
      const t = this,
        r = t.lch();
      return (
        (r[1] += Bt.Kn * e),
        r[1] < 0 && (r[1] = 0),
        new N(r, "lch").alpha(t.alpha(), !0)
      );
    }),
    (N.prototype.desaturate = function (e = 1) {
      return this.saturate(-e);
    }),
    (N.prototype.set = function (e, t, r = !1) {
      const [n, i] = e.split("."),
        s = this[n]();
      if (i) {
        const o = n.indexOf(i) - (n.substr(0, 2) === "ok" ? 2 : 0);
        if (o > -1) {
          if (ne(t) == "string")
            switch (t.charAt(0)) {
              case "+":
                s[o] += +t;
                break;
              case "-":
                s[o] += +t;
                break;
              case "*":
                s[o] *= +t.substr(1);
                break;
              case "/":
                s[o] /= +t.substr(1);
                break;
              default:
                s[o] = +t;
            }
          else if (ne(t) === "number") s[o] = t;
          else throw new Error("unsupported value for Color.set");
          const a = new N(s, n);
          return r ? ((this._rgb = a._rgb), this) : a;
        }
        throw new Error(`unknown channel ${i} in mode ${n}`);
      } else return s;
    }),
    (N.prototype.tint = function (e = 0.5, ...t) {
      return hn(this, "white", e, ...t);
    }),
    (N.prototype.shade = function (e = 0.5, ...t) {
      return hn(this, "black", e, ...t);
    }));
  const oy = (e, t, r) => {
    const n = e._rgb,
      i = t._rgb;
    return new N(
      n[0] + r * (i[0] - n[0]),
      n[1] + r * (i[1] - n[1]),
      n[2] + r * (i[2] - n[2]),
      "rgb"
    );
  };
  et.rgb = oy;
  const { sqrt: ya, pow: mn } = Math,
    ay = (e, t, r) => {
      const [n, i, s] = e._rgb,
        [o, a, l] = t._rgb;
      return new N(
        ya(mn(n, 2) * (1 - r) + mn(o, 2) * r),
        ya(mn(i, 2) * (1 - r) + mn(a, 2) * r),
        ya(mn(s, 2) * (1 - r) + mn(l, 2) * r),
        "rgb"
      );
    };
  et.lrgb = ay;
  const ly = (e, t, r) => {
    const n = e.lab(),
      i = t.lab();
    return new N(
      n[0] + r * (i[0] - n[0]),
      n[1] + r * (i[1] - n[1]),
      n[2] + r * (i[2] - n[2]),
      "lab"
    );
  };
  et.lab = ly;
  const gn = (e, t, r, n) => {
      let i, s;
      n === "hsl"
        ? ((i = e.hsl()), (s = t.hsl()))
        : n === "hsv"
          ? ((i = e.hsv()), (s = t.hsv()))
          : n === "hcg"
            ? ((i = e.hcg()), (s = t.hcg()))
            : n === "hsi"
              ? ((i = e.hsi()), (s = t.hsi()))
              : n === "lch" || n === "hcl"
                ? ((n = "hcl"), (i = e.hcl()), (s = t.hcl()))
                : n === "oklch" &&
                  ((i = e.oklch().reverse()), (s = t.oklch().reverse()));
      let o, a, l, c, d, u;
      (n.substr(0, 1) === "h" || n === "oklch") &&
        (([o, l, d] = i), ([a, c, u] = s));
      let h, f, g, m;
      return (
        !isNaN(o) && !isNaN(a)
          ? (a > o && a - o > 180
              ? (m = a - (o + 360))
              : a < o && o - a > 180
                ? (m = a + 360 - o)
                : (m = a - o),
            (f = o + r * m))
          : isNaN(o)
            ? isNaN(a)
              ? (f = Number.NaN)
              : ((f = a), (d == 1 || d == 0) && n != "hsv" && (h = c))
            : ((f = o), (u == 1 || u == 0) && n != "hsv" && (h = l)),
        h === void 0 && (h = l + r * (c - l)),
        (g = d + r * (u - d)),
        n === "oklch" ? new N([g, h, f], n) : new N([f, h, g], n)
      );
    },
    rd = (e, t, r) => gn(e, t, r, "lch");
  ((et.lch = rd), (et.hcl = rd));
  const cy = e => {
      if (ne(e) == "number" && e >= 0 && e <= 16777215) {
        const t = e >> 16,
          r = (e >> 8) & 255,
          n = e & 255;
        return [t, r, n, 1];
      }
      throw new Error("unknown num color: " + e);
    },
    uy = (...e) => {
      const [t, r, n] = ee(e, "rgb");
      return (t << 16) + (r << 8) + n;
    };
  ((N.prototype.num = function () {
    return uy(this._rgb);
  }),
    Object.assign(ie, { num: (...e) => new N(...e, "num") }),
    (Z.format.num = cy),
    Z.autodetect.push({
      p: 5,
      test: (...e) => {
        if (
          e.length === 1 &&
          ne(e[0]) === "number" &&
          e[0] >= 0 &&
          e[0] <= 16777215
        )
          return "num";
      },
    }));
  const dy = (e, t, r) => {
    const n = e.num(),
      i = t.num();
    return new N(n + r * (i - n), "num");
  };
  et.num = dy;
  const { floor: fy } = Math,
    py = (...e) => {
      e = ee(e, "hcg");
      let [t, r, n] = e,
        i,
        s,
        o;
      n = n * 255;
      const a = r * 255;
      if (r === 0) i = s = o = n;
      else {
        (t === 360 && (t = 0),
          t > 360 && (t -= 360),
          t < 0 && (t += 360),
          (t /= 60));
        const l = fy(t),
          c = t - l,
          d = n * (1 - r),
          u = d + a * (1 - c),
          h = d + a * c,
          f = d + a;
        switch (l) {
          case 0:
            [i, s, o] = [f, h, d];
            break;
          case 1:
            [i, s, o] = [u, f, d];
            break;
          case 2:
            [i, s, o] = [d, f, h];
            break;
          case 3:
            [i, s, o] = [d, u, f];
            break;
          case 4:
            [i, s, o] = [h, d, f];
            break;
          case 5:
            [i, s, o] = [f, d, u];
            break;
        }
      }
      return [i, s, o, e.length > 3 ? e[3] : 1];
    },
    hy = (...e) => {
      const [t, r, n] = ee(e, "rgb"),
        i = Wu(t, r, n),
        s = Hu(t, r, n),
        o = s - i,
        a = (o * 100) / 255,
        l = (i / (255 - o)) * 100;
      let c;
      return (
        o === 0
          ? (c = Number.NaN)
          : (t === s && (c = (r - n) / o),
            r === s && (c = 2 + (n - t) / o),
            n === s && (c = 4 + (t - r) / o),
            (c *= 60),
            c < 0 && (c += 360)),
        [c, a, l]
      );
    };
  N.prototype.hcg = function () {
    return hy(this._rgb);
  };
  const my = (...e) => new N(...e, "hcg");
  ((ie.hcg = my),
    (Z.format.hcg = py),
    Z.autodetect.push({
      p: 1,
      test: (...e) => {
        if (((e = ee(e, "hcg")), ne(e) === "array" && e.length === 3))
          return "hcg";
      },
    }));
  const gy = (e, t, r) => gn(e, t, r, "hcg");
  et.hcg = gy;
  const { cos: _n } = Math,
    _y = (...e) => {
      e = ee(e, "hsi");
      let [t, r, n] = e,
        i,
        s,
        o;
      return (
        isNaN(t) && (t = 0),
        isNaN(r) && (r = 0),
        t > 360 && (t -= 360),
        t < 0 && (t += 360),
        (t /= 360),
        t < 1 / 3
          ? ((o = (1 - r) / 3),
            (i = (1 + (r * _n(tr * t)) / _n(ua - tr * t)) / 3),
            (s = 1 - (o + i)))
          : t < 2 / 3
            ? ((t -= 1 / 3),
              (i = (1 - r) / 3),
              (s = (1 + (r * _n(tr * t)) / _n(ua - tr * t)) / 3),
              (o = 1 - (i + s)))
            : ((t -= 2 / 3),
              (s = (1 - r) / 3),
              (o = (1 + (r * _n(tr * t)) / _n(ua - tr * t)) / 3),
              (i = 1 - (s + o))),
        (i = jr(n * i * 3)),
        (s = jr(n * s * 3)),
        (o = jr(n * o * 3)),
        [i * 255, s * 255, o * 255, e.length > 3 ? e[3] : 1]
      );
    },
    { min: yy, sqrt: by, acos: vy } = Math,
    wy = (...e) => {
      let [t, r, n] = ee(e, "rgb");
      ((t /= 255), (r /= 255), (n /= 255));
      let i;
      const s = yy(t, r, n),
        o = (t + r + n) / 3,
        a = o > 0 ? 1 - s / o : 0;
      return (
        a === 0
          ? (i = NaN)
          : ((i = (t - r + (t - n)) / 2),
            (i /= by((t - r) * (t - r) + (t - n) * (r - n))),
            (i = vy(i)),
            n > r && (i = tr - i),
            (i /= tr)),
        [i * 360, a, o]
      );
    };
  N.prototype.hsi = function () {
    return wy(this._rgb);
  };
  const xy = (...e) => new N(...e, "hsi");
  ((ie.hsi = xy),
    (Z.format.hsi = _y),
    Z.autodetect.push({
      p: 2,
      test: (...e) => {
        if (((e = ee(e, "hsi")), ne(e) === "array" && e.length === 3))
          return "hsi";
      },
    }));
  const ky = (e, t, r) => gn(e, t, r, "hsi");
  et.hsi = ky;
  const ba = (...e) => {
      e = ee(e, "hsl");
      const [t, r, n] = e;
      let i, s, o;
      if (r === 0) i = s = o = n * 255;
      else {
        const a = [0, 0, 0],
          l = [0, 0, 0],
          c = n < 0.5 ? n * (1 + r) : n + r - n * r,
          d = 2 * n - c,
          u = t / 360;
        ((a[0] = u + 1 / 3), (a[1] = u), (a[2] = u - 1 / 3));
        for (let h = 0; h < 3; h++)
          (a[h] < 0 && (a[h] += 1),
            a[h] > 1 && (a[h] -= 1),
            6 * a[h] < 1
              ? (l[h] = d + (c - d) * 6 * a[h])
              : 2 * a[h] < 1
                ? (l[h] = c)
                : 3 * a[h] < 2
                  ? (l[h] = d + (c - d) * (2 / 3 - a[h]) * 6)
                  : (l[h] = d));
        [i, s, o] = [l[0] * 255, l[1] * 255, l[2] * 255];
      }
      return e.length > 3 ? [i, s, o, e[3]] : [i, s, o, 1];
    },
    nd = (...e) => {
      e = ee(e, "rgba");
      let [t, r, n] = e;
      ((t /= 255), (r /= 255), (n /= 255));
      const i = Wu(t, r, n),
        s = Hu(t, r, n),
        o = (s + i) / 2;
      let a, l;
      return (
        s === i
          ? ((a = 0), (l = Number.NaN))
          : (a = o < 0.5 ? (s - i) / (s + i) : (s - i) / (2 - s - i)),
        t == s
          ? (l = (r - n) / (s - i))
          : r == s
            ? (l = 2 + (n - t) / (s - i))
            : n == s && (l = 4 + (t - r) / (s - i)),
        (l *= 60),
        l < 0 && (l += 360),
        e.length > 3 && e[3] !== void 0 ? [l, a, o, e[3]] : [l, a, o]
      );
    };
  N.prototype.hsl = function () {
    return nd(this._rgb);
  };
  const Sy = (...e) => new N(...e, "hsl");
  ((ie.hsl = Sy),
    (Z.format.hsl = ba),
    Z.autodetect.push({
      p: 2,
      test: (...e) => {
        if (((e = ee(e, "hsl")), ne(e) === "array" && e.length === 3))
          return "hsl";
      },
    }));
  const My = (e, t, r) => gn(e, t, r, "hsl");
  et.hsl = My;
  const { floor: Cy } = Math,
    $y = (...e) => {
      e = ee(e, "hsv");
      let [t, r, n] = e,
        i,
        s,
        o;
      if (((n *= 255), r === 0)) i = s = o = n;
      else {
        (t === 360 && (t = 0),
          t > 360 && (t -= 360),
          t < 0 && (t += 360),
          (t /= 60));
        const a = Cy(t),
          l = t - a,
          c = n * (1 - r),
          d = n * (1 - r * l),
          u = n * (1 - r * (1 - l));
        switch (a) {
          case 0:
            [i, s, o] = [n, u, c];
            break;
          case 1:
            [i, s, o] = [d, n, c];
            break;
          case 2:
            [i, s, o] = [c, n, u];
            break;
          case 3:
            [i, s, o] = [c, d, n];
            break;
          case 4:
            [i, s, o] = [u, c, n];
            break;
          case 5:
            [i, s, o] = [n, c, d];
            break;
        }
      }
      return [i, s, o, e.length > 3 ? e[3] : 1];
    },
    { min: Ay, max: Ey } = Math,
    Iy = (...e) => {
      e = ee(e, "rgb");
      let [t, r, n] = e;
      const i = Ay(t, r, n),
        s = Ey(t, r, n),
        o = s - i;
      let a, l, c;
      return (
        (c = s / 255),
        s === 0
          ? ((a = Number.NaN), (l = 0))
          : ((l = o / s),
            t === s && (a = (r - n) / o),
            r === s && (a = 2 + (n - t) / o),
            n === s && (a = 4 + (t - r) / o),
            (a *= 60),
            a < 0 && (a += 360)),
        [a, l, c]
      );
    };
  N.prototype.hsv = function () {
    return Iy(this._rgb);
  };
  const Py = (...e) => new N(...e, "hsv");
  ((ie.hsv = Py),
    (Z.format.hsv = $y),
    Z.autodetect.push({
      p: 2,
      test: (...e) => {
        if (((e = ee(e, "hsv")), ne(e) === "array" && e.length === 3))
          return "hsv";
      },
    }));
  const Oy = (e, t, r) => gn(e, t, r, "hsv");
  et.hsv = Oy;
  function _s(e, t) {
    let r = e.length;
    (Array.isArray(e[0]) || (e = [e]),
      Array.isArray(t[0]) || (t = t.map(o => [o])));
    let n = t[0].length,
      i = t[0].map((o, a) => t.map(l => l[a])),
      s = e.map(o =>
        i.map(a =>
          Array.isArray(o)
            ? o.reduce((l, c, d) => l + c * (a[d] || 0), 0)
            : a.reduce((l, c) => l + c * o, 0)
        )
      );
    return (r === 1 && (s = s[0]), n === 1 ? s.map(o => o[0]) : s);
  }
  const va = (...e) => {
    e = ee(e, "lab");
    const [t, r, n, ...i] = e,
      [s, o, a] = Ty([t, r, n]),
      [l, c, d] = Xu(s, o, a);
    return [l, c, d, ...(i.length > 0 && i[0] < 1 ? [i[0]] : [])];
  };
  function Ty(e) {
    var t = [
        [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
        [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
        [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816],
      ],
      r = [
        [1, 0.3963377773761749, 0.2158037573099136],
        [1, -0.1055613458156586, -0.0638541728258133],
        [1, -0.0894841775298119, -1.2914855480194092],
      ],
      n = _s(r, e);
    return _s(
      t,
      n.map(i => i ** 3)
    );
  }
  const wa = (...e) => {
    const [t, r, n, ...i] = ee(e, "rgb"),
      s = Zu(t, r, n);
    return [...Ry(s), ...(i.length > 0 && i[0] < 1 ? [i[0]] : [])];
  };
  function Ry(e) {
    const t = [
        [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
        [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
        [0.0481771893596242, 0.2642395317527308, 0.6335478284694309],
      ],
      r = [
        [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
        [1.9779985324311684, -2.42859224204858, 0.450593709617411],
        [0.0259040424655478, 0.7827717124575296, -0.8086757549230774],
      ],
      n = _s(t, e);
    return _s(
      r,
      n.map(i => Math.cbrt(i))
    );
  }
  ((N.prototype.oklab = function () {
    return wa(this._rgb);
  }),
    Object.assign(ie, { oklab: (...e) => new N(...e, "oklab") }),
    (Z.format.oklab = va),
    Z.autodetect.push({
      p: 2,
      test: (...e) => {
        if (((e = ee(e, "oklab")), ne(e) === "array" && e.length === 3))
          return "oklab";
      },
    }));
  const Ny = (e, t, r) => {
    const n = e.oklab(),
      i = t.oklab();
    return new N(
      n[0] + r * (i[0] - n[0]),
      n[1] + r * (i[1] - n[1]),
      n[2] + r * (i[2] - n[2]),
      "oklab"
    );
  };
  et.oklab = Ny;
  const Ly = (e, t, r) => gn(e, t, r, "oklch");
  et.oklch = Ly;
  const { pow: xa, sqrt: ka, PI: Sa, cos: id, sin: sd, atan2: Fy } = Math,
    Dy = (e, t = "lrgb", r = null) => {
      const n = e.length;
      r || (r = Array.from(new Array(n)).map(() => 1));
      const i =
        n /
        r.reduce(function (u, h) {
          return u + h;
        });
      if (
        (r.forEach((u, h) => {
          r[h] *= i;
        }),
        (e = e.map(u => new N(u))),
        t === "lrgb")
      )
        return zy(e, r);
      const s = e.shift(),
        o = s.get(t),
        a = [];
      let l = 0,
        c = 0;
      for (let u = 0; u < o.length; u++)
        if (
          ((o[u] = (o[u] || 0) * r[0]),
          a.push(isNaN(o[u]) ? 0 : r[0]),
          t.charAt(u) === "h" && !isNaN(o[u]))
        ) {
          const h = (o[u] / 180) * Sa;
          ((l += id(h) * r[0]), (c += sd(h) * r[0]));
        }
      let d = s.alpha() * r[0];
      e.forEach((u, h) => {
        const f = u.get(t);
        d += u.alpha() * r[h + 1];
        for (let g = 0; g < o.length; g++)
          if (!isNaN(f[g]))
            if (((a[g] += r[h + 1]), t.charAt(g) === "h")) {
              const m = (f[g] / 180) * Sa;
              ((l += id(m) * r[h + 1]), (c += sd(m) * r[h + 1]));
            } else o[g] += f[g] * r[h + 1];
      });
      for (let u = 0; u < o.length; u++)
        if (t.charAt(u) === "h") {
          let h = (Fy(c / a[u], l / a[u]) / Sa) * 180;
          for (; h < 0; ) h += 360;
          for (; h >= 360; ) h -= 360;
          o[u] = h;
        } else o[u] = o[u] / a[u];
      return ((d /= n), new N(o, t).alpha(d > 0.99999 ? 1 : d, !0));
    },
    zy = (e, t) => {
      const r = e.length,
        n = [0, 0, 0, 0];
      for (let i = 0; i < e.length; i++) {
        const s = e[i],
          o = t[i] / r,
          a = s._rgb;
        ((n[0] += xa(a[0], 2) * o),
          (n[1] += xa(a[1], 2) * o),
          (n[2] += xa(a[2], 2) * o),
          (n[3] += a[3] * o));
      }
      return (
        (n[0] = ka(n[0])),
        (n[1] = ka(n[1])),
        (n[2] = ka(n[2])),
        n[3] > 0.9999999 && (n[3] = 1),
        new N(la(n))
      );
    },
    { pow: By } = Math;
  function ys(e) {
    let t = "rgb",
      r = ie("#ccc"),
      n = 0,
      i = [0, 1],
      s = [0, 1],
      o = [],
      a = [0, 0],
      l = !1,
      c = [],
      d = !1,
      u = 0,
      h = 1,
      f = !1,
      g = {},
      m = !0,
      _ = 1;
    const y = function (C) {
        if (
          ((C = C || ["#fff", "#000"]),
          C &&
            ne(C) === "string" &&
            ie.brewer &&
            ie.brewer[C.toLowerCase()] &&
            (C = ie.brewer[C.toLowerCase()]),
          ne(C) === "array")
        ) {
          (C.length === 1 && (C = [C[0], C[0]]), (C = C.slice(0)));
          for (let O = 0; O < C.length; O++) C[O] = ie(C[O]);
          o.length = 0;
          for (let O = 0; O < C.length; O++) o.push(O / (C.length - 1));
        }
        return ($(), (c = C));
      },
      b = function (C) {
        if (l != null) {
          const O = l.length - 1;
          let E = 0;
          for (; E < O && C >= l[E]; ) E++;
          return E - 1;
        }
        return 0;
      };
    let v = C => C,
      k = C => C;
    const x = function (C, O) {
      let E, A;
      if ((O == null && (O = !1), isNaN(C) || C === null)) return r;
      (O
        ? (A = C)
        : l && l.length > 2
          ? (A = b(C) / (l.length - 2))
          : h !== u
            ? (A = (C - u) / (h - u))
            : (A = 1),
        (A = k(A)),
        O || (A = v(A)),
        _ !== 1 && (A = By(A, _)),
        (A = a[0] + A * (1 - a[0] - a[1])),
        (A = jr(A, 0, 1)));
      const S = Math.floor(A * 1e4);
      if (m && g[S]) E = g[S];
      else {
        if (ne(c) === "array")
          for (let I = 0; I < o.length; I++) {
            const q = o[I];
            if (A <= q) {
              E = c[I];
              break;
            }
            if (A >= q && I === o.length - 1) {
              E = c[I];
              break;
            }
            if (A > q && A < o[I + 1]) {
              ((A = (A - q) / (o[I + 1] - q)),
                (E = ie.interpolate(c[I], c[I + 1], A, t)));
              break;
            }
          }
        else ne(c) === "function" && (E = c(A));
        m && (g[S] = E);
      }
      return E;
    };
    var $ = () => (g = {});
    y(e);
    const M = function (C) {
      const O = ie(x(C));
      return d && O[d] ? O[d]() : O;
    };
    return (
      (M.classes = function (C) {
        if (C != null) {
          if (ne(C) === "array") ((l = C), (i = [C[0], C[C.length - 1]]));
          else {
            const O = ie.analyze(i);
            C === 0 ? (l = [O.min, O.max]) : (l = ie.limits(O, "e", C));
          }
          return M;
        }
        return l;
      }),
      (M.domain = function (C) {
        if (!arguments.length) return s;
        ((s = C.slice(0)), (u = C[0]), (h = C[C.length - 1]), (o = []));
        const O = c.length;
        if (C.length === O && u !== h)
          for (let E of Array.from(C)) o.push((E - u) / (h - u));
        else {
          for (let E = 0; E < O; E++) o.push(E / (O - 1));
          if (C.length > 2) {
            const E = C.map((S, I) => I / (C.length - 1)),
              A = C.map(S => (S - u) / (h - u));
            A.every((S, I) => E[I] === S) ||
              (k = S => {
                if (S <= 0 || S >= 1) return S;
                let I = 0;
                for (; S >= A[I + 1]; ) I++;
                const q = (S - A[I]) / (A[I + 1] - A[I]);
                return E[I] + q * (E[I + 1] - E[I]);
              });
          }
        }
        return ((i = [u, h]), M);
      }),
      (M.mode = function (C) {
        return arguments.length ? ((t = C), $(), M) : t;
      }),
      (M.range = function (C, O) {
        return (y(C), M);
      }),
      (M.out = function (C) {
        return ((d = C), M);
      }),
      (M.spread = function (C) {
        return arguments.length ? ((n = C), M) : n;
      }),
      (M.correctLightness = function (C) {
        return (
          C == null && (C = !0),
          (f = C),
          $(),
          f
            ? (v = function (O) {
                const E = x(0, !0).lab()[0],
                  A = x(1, !0).lab()[0],
                  S = E > A;
                let I = x(O, !0).lab()[0];
                const q = E + (A - E) * O;
                let te = I - q,
                  Se = 0,
                  we = 1,
                  xe = 20;
                for (; Math.abs(te) > 0.01 && xe-- > 0; )
                  (function () {
                    return (
                      S && (te *= -1),
                      te < 0
                        ? ((Se = O), (O += (we - O) * 0.5))
                        : ((we = O), (O += (Se - O) * 0.5)),
                      (I = x(O, !0).lab()[0]),
                      (te = I - q)
                    );
                  })();
                return O;
              })
            : (v = O => O),
          M
        );
      }),
      (M.padding = function (C) {
        return C != null ? (ne(C) === "number" && (C = [C, C]), (a = C), M) : a;
      }),
      (M.colors = function (C, O) {
        arguments.length < 2 && (O = "hex");
        let E = [];
        if (arguments.length === 0) E = c.slice(0);
        else if (C === 1) E = [M(0.5)];
        else if (C > 1) {
          const A = i[0],
            S = i[1] - A;
          E = Vy(0, C).map(I => M(A + (I / (C - 1)) * S));
        } else {
          e = [];
          let A = [];
          if (l && l.length > 2)
            for (
              let S = 1, I = l.length, q = 1 <= I;
              q ? S < I : S > I;
              q ? S++ : S--
            )
              A.push((l[S - 1] + l[S]) * 0.5);
          else A = i;
          E = A.map(S => M(S));
        }
        return (ie[O] && (E = E.map(A => A[O]())), E);
      }),
      (M.cache = function (C) {
        return C != null ? ((m = C), M) : m;
      }),
      (M.gamma = function (C) {
        return C != null ? ((_ = C), M) : _;
      }),
      (M.nodata = function (C) {
        return C != null ? ((r = ie(C)), M) : r;
      }),
      M
    );
  }
  function Vy(e, t, r) {
    let n = [],
      i = e < t,
      s = t;
    for (let o = e; i ? o < s : o > s; i ? o++ : o--) n.push(o);
    return n;
  }
  const qy = function (e) {
      let t = [1, 1];
      for (let r = 1; r < e; r++) {
        let n = [1];
        for (let i = 1; i <= t.length; i++) n[i] = (t[i] || 0) + t[i - 1];
        t = n;
      }
      return t;
    },
    jy = function (e) {
      let t, r, n, i;
      if (((e = e.map(s => new N(s))), e.length === 2))
        (([r, n] = e.map(s => s.lab())),
          (t = function (s) {
            const o = [0, 1, 2].map(a => r[a] + s * (n[a] - r[a]));
            return new N(o, "lab");
          }));
      else if (e.length === 3)
        (([r, n, i] = e.map(s => s.lab())),
          (t = function (s) {
            const o = [0, 1, 2].map(
              a =>
                (1 - s) * (1 - s) * r[a] + 2 * (1 - s) * s * n[a] + s * s * i[a]
            );
            return new N(o, "lab");
          }));
      else if (e.length === 4) {
        let s;
        (([r, n, i, s] = e.map(o => o.lab())),
          (t = function (o) {
            const a = [0, 1, 2].map(
              l =>
                (1 - o) * (1 - o) * (1 - o) * r[l] +
                3 * (1 - o) * (1 - o) * o * n[l] +
                3 * (1 - o) * o * o * i[l] +
                o * o * o * s[l]
            );
            return new N(a, "lab");
          }));
      } else if (e.length >= 5) {
        let s, o, a;
        ((s = e.map(l => l.lab())),
          (a = e.length - 1),
          (o = qy(a)),
          (t = function (l) {
            const c = 1 - l,
              d = [0, 1, 2].map(u =>
                s.reduce(
                  (h, f, g) => h + o[g] * c ** (a - g) * l ** g * f[u],
                  0
                )
              );
            return new N(d, "lab");
          }));
      } else
        throw new RangeError("No point in running bezier with only one color.");
      return t;
    },
    Uy = e => {
      const t = jy(e);
      return ((t.scale = () => ys(t)), t);
    },
    { round: od } = Math;
  ((N.prototype.rgb = function (e = !0) {
    return e === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(od);
  }),
    (N.prototype.rgba = function (e = !0) {
      return this._rgb
        .slice(0, 4)
        .map((t, r) => (r < 3 ? (e === !1 ? t : od(t)) : t));
    }),
    Object.assign(ie, { rgb: (...e) => new N(...e, "rgb") }),
    (Z.format.rgb = (...e) => {
      const t = ee(e, "rgba");
      return (t[3] === void 0 && (t[3] = 1), t);
    }),
    Z.autodetect.push({
      p: 3,
      test: (...e) => {
        if (
          ((e = ee(e, "rgba")),
          ne(e) === "array" &&
            (e.length === 3 ||
              (e.length === 4 &&
                ne(e[3]) == "number" &&
                e[3] >= 0 &&
                e[3] <= 1)))
        )
          return "rgb";
      },
    }));
  const At = (e, t, r) => {
      if (!At[r]) throw new Error("unknown blend mode " + r);
      return At[r](e, t);
    },
    kr = e => (t, r) => {
      const n = ie(r).rgb(),
        i = ie(t).rgb();
      return ie.rgb(e(n, i));
    },
    Sr = e => (t, r) => {
      const n = [];
      return (
        (n[0] = e(t[0], r[0])),
        (n[1] = e(t[1], r[1])),
        (n[2] = e(t[2], r[2])),
        n
      );
    },
    Ky = e => e,
    Gy = (e, t) => (e * t) / 255,
    Wy = (e, t) => (e > t ? t : e),
    Hy = (e, t) => (e > t ? e : t),
    Jy = (e, t) => 255 * (1 - (1 - e / 255) * (1 - t / 255)),
    Yy = (e, t) =>
      t < 128
        ? (2 * e * t) / 255
        : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255)),
    Qy = (e, t) => 255 * (1 - (1 - t / 255) / (e / 255)),
    Xy = (e, t) =>
      e === 255
        ? 255
        : ((e = (255 * (t / 255)) / (1 - e / 255)), e > 255 ? 255 : e);
  ((At.normal = kr(Sr(Ky))),
    (At.multiply = kr(Sr(Gy))),
    (At.screen = kr(Sr(Jy))),
    (At.overlay = kr(Sr(Yy))),
    (At.darken = kr(Sr(Wy))),
    (At.lighten = kr(Sr(Hy))),
    (At.dodge = kr(Sr(Xy))),
    (At.burn = kr(Sr(Qy))));
  const { pow: Zy, sin: eb, cos: tb } = Math;
  function rb(e = 300, t = -1.5, r = 1, n = 1, i = [0, 1]) {
    let s = 0,
      o;
    ne(i) === "array" ? (o = i[1] - i[0]) : ((o = 0), (i = [i, i]));
    const a = function (l) {
      const c = tr * ((e + 120) / 360 + t * l),
        d = Zy(i[0] + o * l, n),
        h = ((s !== 0 ? r[0] + l * s : r) * d * (1 - d)) / 2,
        f = tb(c),
        g = eb(c),
        m = d + h * (-0.14861 * f + 1.78277 * g),
        _ = d + h * (-0.29227 * f - 0.90649 * g),
        y = d + h * (1.97294 * f);
      return ie(la([m * 255, _ * 255, y * 255, 1]));
    };
    return (
      (a.start = function (l) {
        return l == null ? e : ((e = l), a);
      }),
      (a.rotations = function (l) {
        return l == null ? t : ((t = l), a);
      }),
      (a.gamma = function (l) {
        return l == null ? n : ((n = l), a);
      }),
      (a.hue = function (l) {
        return l == null
          ? r
          : ((r = l),
            ne(r) === "array"
              ? ((s = r[1] - r[0]), s === 0 && (r = r[1]))
              : (s = 0),
            a);
      }),
      (a.lightness = function (l) {
        return l == null
          ? i
          : (ne(l) === "array"
              ? ((i = l), (o = l[1] - l[0]))
              : ((i = [l, l]), (o = 0)),
            a);
      }),
      (a.scale = () => ie.scale(a)),
      a.hue(r),
      a
    );
  }
  const nb = "0123456789abcdef",
    { floor: ib, random: sb } = Math,
    ob = (e = sb) => {
      let t = "#";
      for (let r = 0; r < 6; r++) t += nb.charAt(ib(e() * 16));
      return new N(t, "hex");
    },
    { log: ad, pow: ab, floor: lb, abs: cb } = Math;
  function ld(e, t = null) {
    const r = {
      min: Number.MAX_VALUE,
      max: Number.MAX_VALUE * -1,
      sum: 0,
      values: [],
      count: 0,
    };
    return (
      ne(e) === "object" && (e = Object.values(e)),
      e.forEach(n => {
        (t && ne(n) === "object" && (n = n[t]),
          n != null &&
            !isNaN(n) &&
            (r.values.push(n),
            (r.sum += n),
            n < r.min && (r.min = n),
            n > r.max && (r.max = n),
            (r.count += 1)));
      }),
      (r.domain = [r.min, r.max]),
      (r.limits = (n, i) => cd(r, n, i)),
      r
    );
  }
  function cd(e, t = "equal", r = 7) {
    ne(e) == "array" && (e = ld(e));
    const { min: n, max: i } = e,
      s = e.values.sort((a, l) => a - l);
    if (r === 1) return [n, i];
    const o = [];
    if (
      (t.substr(0, 1) === "c" && (o.push(n), o.push(i)), t.substr(0, 1) === "e")
    ) {
      o.push(n);
      for (let a = 1; a < r; a++) o.push(n + (a / r) * (i - n));
      o.push(i);
    } else if (t.substr(0, 1) === "l") {
      if (n <= 0)
        throw new Error("Logarithmic scales are only possible for values > 0");
      const a = Math.LOG10E * ad(n),
        l = Math.LOG10E * ad(i);
      o.push(n);
      for (let c = 1; c < r; c++) o.push(ab(10, a + (c / r) * (l - a)));
      o.push(i);
    } else if (t.substr(0, 1) === "q") {
      o.push(n);
      for (let a = 1; a < r; a++) {
        const l = ((s.length - 1) * a) / r,
          c = lb(l);
        if (c === l) o.push(s[c]);
        else {
          const d = l - c;
          o.push(s[c] * (1 - d) + s[c + 1] * d);
        }
      }
      o.push(i);
    } else if (t.substr(0, 1) === "k") {
      let a;
      const l = s.length,
        c = new Array(l),
        d = new Array(r);
      let u = !0,
        h = 0,
        f = null;
      ((f = []), f.push(n));
      for (let _ = 1; _ < r; _++) f.push(n + (_ / r) * (i - n));
      for (f.push(i); u; ) {
        for (let y = 0; y < r; y++) d[y] = 0;
        for (let y = 0; y < l; y++) {
          const b = s[y];
          let v = Number.MAX_VALUE,
            k;
          for (let x = 0; x < r; x++) {
            const $ = cb(f[x] - b);
            ($ < v && ((v = $), (k = x)), d[k]++, (c[y] = k));
          }
        }
        const _ = new Array(r);
        for (let y = 0; y < r; y++) _[y] = null;
        for (let y = 0; y < l; y++)
          ((a = c[y]), _[a] === null ? (_[a] = s[y]) : (_[a] += s[y]));
        for (let y = 0; y < r; y++) _[y] *= 1 / d[y];
        u = !1;
        for (let y = 0; y < r; y++)
          if (_[y] !== f[y]) {
            u = !0;
            break;
          }
        ((f = _), h++, h > 200 && (u = !1));
      }
      const g = {};
      for (let _ = 0; _ < r; _++) g[_] = [];
      for (let _ = 0; _ < l; _++) ((a = c[_]), g[a].push(s[_]));
      let m = [];
      for (let _ = 0; _ < r; _++)
        (m.push(g[_][0]), m.push(g[_][g[_].length - 1]));
      ((m = m.sort((_, y) => _ - y)), o.push(m[0]));
      for (let _ = 1; _ < m.length; _ += 2) {
        const y = m[_];
        !isNaN(y) && o.indexOf(y) === -1 && o.push(y);
      }
    }
    return o;
  }
  const ub = (e, t) => {
    ((e = new N(e)), (t = new N(t)));
    const r = e.luminance(),
      n = t.luminance();
    return r > n ? (r + 0.05) / (n + 0.05) : (n + 0.05) / (r + 0.05);
  };
  const ud = 0.027,
    db = 5e-4,
    fb = 0.1,
    dd = 1.14,
    bs = 0.022,
    fd = 1.414,
    pb = (e, t) => {
      ((e = new N(e)),
        (t = new N(t)),
        e.alpha() < 1 && (e = hn(t, e, e.alpha(), "rgb")));
      const r = pd(...e.rgb()),
        n = pd(...t.rgb()),
        i = r >= bs ? r : r + Math.pow(bs - r, fd),
        s = n >= bs ? n : n + Math.pow(bs - n, fd),
        o = Math.pow(s, 0.56) - Math.pow(i, 0.57),
        a = Math.pow(s, 0.65) - Math.pow(i, 0.62),
        l = Math.abs(s - i) < db ? 0 : i < s ? o * dd : a * dd;
      return (Math.abs(l) < fb ? 0 : l > 0 ? l - ud : l + ud) * 100;
    };
  function pd(e, t, r) {
    return (
      0.2126729 * Math.pow(e / 255, 2.4) +
      0.7151522 * Math.pow(t / 255, 2.4) +
      0.072175 * Math.pow(r / 255, 2.4)
    );
  }
  const {
    sqrt: nr,
    pow: Oe,
    min: hb,
    max: mb,
    atan2: hd,
    abs: md,
    cos: vs,
    sin: gd,
    exp: gb,
    PI: _d,
  } = Math;
  function _b(e, t, r = 1, n = 1, i = 1) {
    var s = function (ut) {
        return (360 * ut) / (2 * _d);
      },
      o = function (ut) {
        return (2 * _d * ut) / 360;
      };
    ((e = new N(e)), (t = new N(t)));
    const [a, l, c] = Array.from(e.lab()),
      [d, u, h] = Array.from(t.lab()),
      f = (a + d) / 2,
      g = nr(Oe(l, 2) + Oe(c, 2)),
      m = nr(Oe(u, 2) + Oe(h, 2)),
      _ = (g + m) / 2,
      y = 0.5 * (1 - nr(Oe(_, 7) / (Oe(_, 7) + Oe(25, 7)))),
      b = l * (1 + y),
      v = u * (1 + y),
      k = nr(Oe(b, 2) + Oe(c, 2)),
      x = nr(Oe(v, 2) + Oe(h, 2)),
      $ = (k + x) / 2,
      M = s(hd(c, b)),
      C = s(hd(h, v)),
      O = M >= 0 ? M : M + 360,
      E = C >= 0 ? C : C + 360,
      A = md(O - E) > 180 ? (O + E + 360) / 2 : (O + E) / 2,
      S =
        1 -
        0.17 * vs(o(A - 30)) +
        0.24 * vs(o(2 * A)) +
        0.32 * vs(o(3 * A + 6)) -
        0.2 * vs(o(4 * A - 63));
    let I = E - O;
    ((I = md(I) <= 180 ? I : E <= O ? I + 360 : I - 360),
      (I = 2 * nr(k * x) * gd(o(I) / 2)));
    const q = d - a,
      te = x - k,
      Se = 1 + (0.015 * Oe(f - 50, 2)) / nr(20 + Oe(f - 50, 2)),
      we = 1 + 0.045 * $,
      xe = 1 + 0.015 * $ * S,
      kt = 30 * gb(-Oe((A - 275) / 25, 2)),
      zr = -(2 * nr(Oe($, 7) / (Oe($, 7) + Oe(25, 7)))) * gd(2 * o(kt)),
      Br = nr(
        Oe(q / (r * Se), 2) +
          Oe(te / (n * we), 2) +
          Oe(I / (i * xe), 2) +
          zr * (te / (n * we)) * (I / (i * xe))
      );
    return mb(0, hb(100, Br));
  }
  function yb(e, t, r = "lab") {
    ((e = new N(e)), (t = new N(t)));
    const n = e.get(r),
      i = t.get(r);
    let s = 0;
    for (let o in n) {
      const a = (n[o] || 0) - (i[o] || 0);
      s += a * a;
    }
    return Math.sqrt(s);
  }
  const bb = (...e) => {
      try {
        return (new N(...e), !0);
      } catch {
        return !1;
      }
    },
    vb = {
      cool() {
        return ys([ie.hsl(180, 1, 0.9), ie.hsl(250, 0.7, 0.4)]);
      },
      hot() {
        return ys(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
      },
    },
    Ma = {
      OrRd: [
        "#fff7ec",
        "#fee8c8",
        "#fdd49e",
        "#fdbb84",
        "#fc8d59",
        "#ef6548",
        "#d7301f",
        "#b30000",
        "#7f0000",
      ],
      PuBu: [
        "#fff7fb",
        "#ece7f2",
        "#d0d1e6",
        "#a6bddb",
        "#74a9cf",
        "#3690c0",
        "#0570b0",
        "#045a8d",
        "#023858",
      ],
      BuPu: [
        "#f7fcfd",
        "#e0ecf4",
        "#bfd3e6",
        "#9ebcda",
        "#8c96c6",
        "#8c6bb1",
        "#88419d",
        "#810f7c",
        "#4d004b",
      ],
      Oranges: [
        "#fff5eb",
        "#fee6ce",
        "#fdd0a2",
        "#fdae6b",
        "#fd8d3c",
        "#f16913",
        "#d94801",
        "#a63603",
        "#7f2704",
      ],
      BuGn: [
        "#f7fcfd",
        "#e5f5f9",
        "#ccece6",
        "#99d8c9",
        "#66c2a4",
        "#41ae76",
        "#238b45",
        "#006d2c",
        "#00441b",
      ],
      YlOrBr: [
        "#ffffe5",
        "#fff7bc",
        "#fee391",
        "#fec44f",
        "#fe9929",
        "#ec7014",
        "#cc4c02",
        "#993404",
        "#662506",
      ],
      YlGn: [
        "#ffffe5",
        "#f7fcb9",
        "#d9f0a3",
        "#addd8e",
        "#78c679",
        "#41ab5d",
        "#238443",
        "#006837",
        "#004529",
      ],
      Reds: [
        "#fff5f0",
        "#fee0d2",
        "#fcbba1",
        "#fc9272",
        "#fb6a4a",
        "#ef3b2c",
        "#cb181d",
        "#a50f15",
        "#67000d",
      ],
      RdPu: [
        "#fff7f3",
        "#fde0dd",
        "#fcc5c0",
        "#fa9fb5",
        "#f768a1",
        "#dd3497",
        "#ae017e",
        "#7a0177",
        "#49006a",
      ],
      Greens: [
        "#f7fcf5",
        "#e5f5e0",
        "#c7e9c0",
        "#a1d99b",
        "#74c476",
        "#41ab5d",
        "#238b45",
        "#006d2c",
        "#00441b",
      ],
      YlGnBu: [
        "#ffffd9",
        "#edf8b1",
        "#c7e9b4",
        "#7fcdbb",
        "#41b6c4",
        "#1d91c0",
        "#225ea8",
        "#253494",
        "#081d58",
      ],
      Purples: [
        "#fcfbfd",
        "#efedf5",
        "#dadaeb",
        "#bcbddc",
        "#9e9ac8",
        "#807dba",
        "#6a51a3",
        "#54278f",
        "#3f007d",
      ],
      GnBu: [
        "#f7fcf0",
        "#e0f3db",
        "#ccebc5",
        "#a8ddb5",
        "#7bccc4",
        "#4eb3d3",
        "#2b8cbe",
        "#0868ac",
        "#084081",
      ],
      Greys: [
        "#ffffff",
        "#f0f0f0",
        "#d9d9d9",
        "#bdbdbd",
        "#969696",
        "#737373",
        "#525252",
        "#252525",
        "#000000",
      ],
      YlOrRd: [
        "#ffffcc",
        "#ffeda0",
        "#fed976",
        "#feb24c",
        "#fd8d3c",
        "#fc4e2a",
        "#e31a1c",
        "#bd0026",
        "#800026",
      ],
      PuRd: [
        "#f7f4f9",
        "#e7e1ef",
        "#d4b9da",
        "#c994c7",
        "#df65b0",
        "#e7298a",
        "#ce1256",
        "#980043",
        "#67001f",
      ],
      Blues: [
        "#f7fbff",
        "#deebf7",
        "#c6dbef",
        "#9ecae1",
        "#6baed6",
        "#4292c6",
        "#2171b5",
        "#08519c",
        "#08306b",
      ],
      PuBuGn: [
        "#fff7fb",
        "#ece2f0",
        "#d0d1e6",
        "#a6bddb",
        "#67a9cf",
        "#3690c0",
        "#02818a",
        "#016c59",
        "#014636",
      ],
      Viridis: [
        "#440154",
        "#482777",
        "#3f4a8a",
        "#31678e",
        "#26838f",
        "#1f9d8a",
        "#6cce5a",
        "#b6de2b",
        "#fee825",
      ],
      Spectral: [
        "#9e0142",
        "#d53e4f",
        "#f46d43",
        "#fdae61",
        "#fee08b",
        "#ffffbf",
        "#e6f598",
        "#abdda4",
        "#66c2a5",
        "#3288bd",
        "#5e4fa2",
      ],
      RdYlGn: [
        "#a50026",
        "#d73027",
        "#f46d43",
        "#fdae61",
        "#fee08b",
        "#ffffbf",
        "#d9ef8b",
        "#a6d96a",
        "#66bd63",
        "#1a9850",
        "#006837",
      ],
      RdBu: [
        "#67001f",
        "#b2182b",
        "#d6604d",
        "#f4a582",
        "#fddbc7",
        "#f7f7f7",
        "#d1e5f0",
        "#92c5de",
        "#4393c3",
        "#2166ac",
        "#053061",
      ],
      PiYG: [
        "#8e0152",
        "#c51b7d",
        "#de77ae",
        "#f1b6da",
        "#fde0ef",
        "#f7f7f7",
        "#e6f5d0",
        "#b8e186",
        "#7fbc41",
        "#4d9221",
        "#276419",
      ],
      PRGn: [
        "#40004b",
        "#762a83",
        "#9970ab",
        "#c2a5cf",
        "#e7d4e8",
        "#f7f7f7",
        "#d9f0d3",
        "#a6dba0",
        "#5aae61",
        "#1b7837",
        "#00441b",
      ],
      RdYlBu: [
        "#a50026",
        "#d73027",
        "#f46d43",
        "#fdae61",
        "#fee090",
        "#ffffbf",
        "#e0f3f8",
        "#abd9e9",
        "#74add1",
        "#4575b4",
        "#313695",
      ],
      BrBG: [
        "#543005",
        "#8c510a",
        "#bf812d",
        "#dfc27d",
        "#f6e8c3",
        "#f5f5f5",
        "#c7eae5",
        "#80cdc1",
        "#35978f",
        "#01665e",
        "#003c30",
      ],
      RdGy: [
        "#67001f",
        "#b2182b",
        "#d6604d",
        "#f4a582",
        "#fddbc7",
        "#ffffff",
        "#e0e0e0",
        "#bababa",
        "#878787",
        "#4d4d4d",
        "#1a1a1a",
      ],
      PuOr: [
        "#7f3b08",
        "#b35806",
        "#e08214",
        "#fdb863",
        "#fee0b6",
        "#f7f7f7",
        "#d8daeb",
        "#b2abd2",
        "#8073ac",
        "#542788",
        "#2d004b",
      ],
      Set2: [
        "#66c2a5",
        "#fc8d62",
        "#8da0cb",
        "#e78ac3",
        "#a6d854",
        "#ffd92f",
        "#e5c494",
        "#b3b3b3",
      ],
      Accent: [
        "#7fc97f",
        "#beaed4",
        "#fdc086",
        "#ffff99",
        "#386cb0",
        "#f0027f",
        "#bf5b17",
        "#666666",
      ],
      Set1: [
        "#e41a1c",
        "#377eb8",
        "#4daf4a",
        "#984ea3",
        "#ff7f00",
        "#ffff33",
        "#a65628",
        "#f781bf",
        "#999999",
      ],
      Set3: [
        "#8dd3c7",
        "#ffffb3",
        "#bebada",
        "#fb8072",
        "#80b1d3",
        "#fdb462",
        "#b3de69",
        "#fccde5",
        "#d9d9d9",
        "#bc80bd",
        "#ccebc5",
        "#ffed6f",
      ],
      Dark2: [
        "#1b9e77",
        "#d95f02",
        "#7570b3",
        "#e7298a",
        "#66a61e",
        "#e6ab02",
        "#a6761d",
        "#666666",
      ],
      Paired: [
        "#a6cee3",
        "#1f78b4",
        "#b2df8a",
        "#33a02c",
        "#fb9a99",
        "#e31a1c",
        "#fdbf6f",
        "#ff7f00",
        "#cab2d6",
        "#6a3d9a",
        "#ffff99",
        "#b15928",
      ],
      Pastel2: [
        "#b3e2cd",
        "#fdcdac",
        "#cbd5e8",
        "#f4cae4",
        "#e6f5c9",
        "#fff2ae",
        "#f1e2cc",
        "#cccccc",
      ],
      Pastel1: [
        "#fbb4ae",
        "#b3cde3",
        "#ccebc5",
        "#decbe4",
        "#fed9a6",
        "#ffffcc",
        "#e5d8bd",
        "#fddaec",
        "#f2f2f2",
      ],
    },
    yd = Object.keys(Ma),
    bd = new Map(yd.map(e => [e.toLowerCase(), e])),
    wb =
      typeof Proxy == "function"
        ? new Proxy(Ma, {
            get(e, t) {
              const r = t.toLowerCase();
              if (bd.has(r)) return e[bd.get(r)];
            },
            getOwnPropertyNames() {
              return Object.getOwnPropertyNames(yd);
            },
          })
        : Ma,
    xb = (...e) => {
      e = ee(e, "cmyk");
      const [t, r, n, i] = e,
        s = e.length > 4 ? e[4] : 1;
      return i === 1
        ? [0, 0, 0, s]
        : [
            t >= 1 ? 0 : 255 * (1 - t) * (1 - i),
            r >= 1 ? 0 : 255 * (1 - r) * (1 - i),
            n >= 1 ? 0 : 255 * (1 - n) * (1 - i),
            s,
          ];
    },
    { max: vd } = Math,
    kb = (...e) => {
      let [t, r, n] = ee(e, "rgb");
      ((t = t / 255), (r = r / 255), (n = n / 255));
      const i = 1 - vd(t, vd(r, n)),
        s = i < 1 ? 1 / (1 - i) : 0,
        o = (1 - t - i) * s,
        a = (1 - r - i) * s,
        l = (1 - n - i) * s;
      return [o, a, l, i];
    };
  ((N.prototype.cmyk = function () {
    return kb(this._rgb);
  }),
    Object.assign(ie, { cmyk: (...e) => new N(...e, "cmyk") }),
    (Z.format.cmyk = xb),
    Z.autodetect.push({
      p: 2,
      test: (...e) => {
        if (((e = ee(e, "cmyk")), ne(e) === "array" && e.length === 4))
          return "cmyk";
      },
    }));
  const Sb = (...e) => {
      const t = ee(e, "hsla");
      let r = fn(e) || "lsa";
      return (
        (t[0] = mt(t[0] || 0) + "deg"),
        (t[1] = mt(t[1] * 100) + "%"),
        (t[2] = mt(t[2] * 100) + "%"),
        r === "hsla" || (t.length > 3 && t[3] < 1)
          ? ((t[3] = "/ " + (t.length > 3 ? t[3] : 1)), (r = "hsla"))
          : (t.length = 3),
        `${r.substr(0, 3)}(${t.join(" ")})`
      );
    },
    Mb = (...e) => {
      const t = ee(e, "lab");
      let r = fn(e) || "lab";
      return (
        (t[0] = mt(t[0]) + "%"),
        (t[1] = mt(t[1])),
        (t[2] = mt(t[2])),
        r === "laba" || (t.length > 3 && t[3] < 1)
          ? (t[3] = "/ " + (t.length > 3 ? t[3] : 1))
          : (t.length = 3),
        `lab(${t.join(" ")})`
      );
    },
    Cb = (...e) => {
      const t = ee(e, "lch");
      let r = fn(e) || "lab";
      return (
        (t[0] = mt(t[0]) + "%"),
        (t[1] = mt(t[1])),
        (t[2] = isNaN(t[2]) ? "none" : mt(t[2]) + "deg"),
        r === "lcha" || (t.length > 3 && t[3] < 1)
          ? (t[3] = "/ " + (t.length > 3 ? t[3] : 1))
          : (t.length = 3),
        `lch(${t.join(" ")})`
      );
    },
    $b = (...e) => {
      const t = ee(e, "lab");
      return (
        (t[0] = mt(t[0] * 100) + "%"),
        (t[1] = ca(t[1])),
        (t[2] = ca(t[2])),
        t.length > 3 && t[3] < 1
          ? (t[3] = "/ " + (t.length > 3 ? t[3] : 1))
          : (t.length = 3),
        `oklab(${t.join(" ")})`
      );
    },
    wd = (...e) => {
      const [t, r, n, ...i] = ee(e, "rgb"),
        [s, o, a] = wa(t, r, n),
        [l, c, d] = td(s, o, a);
      return [l, c, d, ...(i.length > 0 && i[0] < 1 ? [i[0]] : [])];
    },
    Ab = (...e) => {
      const t = ee(e, "lch");
      return (
        (t[0] = mt(t[0] * 100) + "%"),
        (t[1] = ca(t[1])),
        (t[2] = isNaN(t[2]) ? "none" : mt(t[2]) + "deg"),
        t.length > 3 && t[3] < 1
          ? (t[3] = "/ " + (t.length > 3 ? t[3] : 1))
          : (t.length = 3),
        `oklch(${t.join(" ")})`
      );
    },
    { round: Ca } = Math,
    Eb = (...e) => {
      const t = ee(e, "rgba");
      let r = fn(e) || "rgb";
      if (r.substr(0, 3) === "hsl") return Sb(nd(t), r);
      if (r.substr(0, 3) === "lab") {
        const n = di();
        rr("d50");
        const i = Mb(pa(t), r);
        return (rr(n), i);
      }
      if (r.substr(0, 3) === "lch") {
        const n = di();
        rr("d50");
        const i = Cb(_a(t), r);
        return (rr(n), i);
      }
      return r.substr(0, 5) === "oklab"
        ? $b(wa(t))
        : r.substr(0, 5) === "oklch"
          ? Ab(wd(t))
          : ((t[0] = Ca(t[0])),
            (t[1] = Ca(t[1])),
            (t[2] = Ca(t[2])),
            (r === "rgba" || (t.length > 3 && t[3] < 1)) &&
              ((t[3] = "/ " + (t.length > 3 ? t[3] : 1)), (r = "rgba")),
            `${r.substr(0, 3)}(${t.slice(0, r === "rgb" ? 3 : 4).join(" ")})`);
    },
    xd = (...e) => {
      e = ee(e, "lch");
      const [t, r, n, ...i] = e,
        [s, o, a] = ed(t, r, n),
        [l, c, d] = va(s, o, a);
      return [l, c, d, ...(i.length > 0 && i[0] < 1 ? [i[0]] : [])];
    },
    ir = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source,
    Et = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source,
    ws = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source,
    gt = /\s*/.source,
    yn = /\s+/.source,
    $a = /\s*,\s*/.source,
    xs = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source,
    bn = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source,
    kd = new RegExp("^rgba?\\(" + gt + [ir, ir, ir].join(yn) + bn + "\\)$"),
    Sd = new RegExp("^rgb\\(" + gt + [ir, ir, ir].join($a) + gt + "\\)$"),
    Md = new RegExp("^rgba\\(" + gt + [ir, ir, ir, Et].join($a) + gt + "\\)$"),
    Cd = new RegExp("^hsla?\\(" + gt + [xs, ws, ws].join(yn) + bn + "\\)$"),
    $d = new RegExp("^hsl?\\(" + gt + [xs, ws, ws].join($a) + gt + "\\)$"),
    Ad =
      /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
    Ed = new RegExp("^lab\\(" + gt + [Et, Et, Et].join(yn) + bn + "\\)$"),
    Id = new RegExp("^lch\\(" + gt + [Et, Et, xs].join(yn) + bn + "\\)$"),
    Pd = new RegExp("^oklab\\(" + gt + [Et, Et, Et].join(yn) + bn + "\\)$"),
    Od = new RegExp("^oklch\\(" + gt + [Et, Et, xs].join(yn) + bn + "\\)$"),
    { round: Td } = Math,
    vn = e => e.map((t, r) => (r <= 2 ? jr(Td(t), 0, 255) : t)),
    Te = (e, t = 0, r = 100, n = !1) => (
      typeof e == "string" &&
        e.endsWith("%") &&
        ((e = parseFloat(e.substring(0, e.length - 1)) / 100),
        n ? (e = t + (e + 1) * 0.5 * (r - t)) : (e = t + e * (r - t))),
      +e
    ),
    nt = (e, t) => (e === "none" ? t : e),
    Aa = e => {
      if (((e = e.toLowerCase().trim()), e === "transparent"))
        return [0, 0, 0, 0];
      let t;
      if (Z.format.named)
        try {
          return Z.format.named(e);
        } catch {}
      if ((t = e.match(kd)) || (t = e.match(Sd))) {
        let r = t.slice(1, 4);
        for (let i = 0; i < 3; i++) r[i] = +Te(nt(r[i], 0), 0, 255);
        r = vn(r);
        const n = t[4] !== void 0 ? +Te(t[4], 0, 1) : 1;
        return ((r[3] = n), r);
      }
      if ((t = e.match(Md))) {
        const r = t.slice(1, 5);
        for (let n = 0; n < 4; n++) r[n] = +Te(r[n], 0, 255);
        return r;
      }
      if ((t = e.match(Cd)) || (t = e.match($d))) {
        const r = t.slice(1, 4);
        ((r[0] = +nt(r[0].replace("deg", ""), 0)),
          (r[1] = +Te(nt(r[1], 0), 0, 100) * 0.01),
          (r[2] = +Te(nt(r[2], 0), 0, 100) * 0.01));
        const n = vn(ba(r)),
          i = t[4] !== void 0 ? +Te(t[4], 0, 1) : 1;
        return ((n[3] = i), n);
      }
      if ((t = e.match(Ad))) {
        const r = t.slice(1, 4);
        ((r[1] *= 0.01), (r[2] *= 0.01));
        const n = ba(r);
        for (let i = 0; i < 3; i++) n[i] = Td(n[i]);
        return ((n[3] = +t[4]), n);
      }
      if ((t = e.match(Ed))) {
        const r = t.slice(1, 4);
        ((r[0] = Te(nt(r[0], 0), 0, 100)),
          (r[1] = Te(nt(r[1], 0), -125, 125, !0)),
          (r[2] = Te(nt(r[2], 0), -125, 125, !0)));
        const n = di();
        rr("d50");
        const i = vn(da(r));
        rr(n);
        const s = t[4] !== void 0 ? +Te(t[4], 0, 1) : 1;
        return ((i[3] = s), i);
      }
      if ((t = e.match(Id))) {
        const r = t.slice(1, 4);
        ((r[0] = Te(r[0], 0, 100)),
          (r[1] = Te(nt(r[1], 0), 0, 150, !1)),
          (r[2] = +nt(r[2].replace("deg", ""), 0)));
        const n = di();
        rr("d50");
        const i = vn(ga(r));
        rr(n);
        const s = t[4] !== void 0 ? +Te(t[4], 0, 1) : 1;
        return ((i[3] = s), i);
      }
      if ((t = e.match(Pd))) {
        const r = t.slice(1, 4);
        ((r[0] = Te(nt(r[0], 0), 0, 1)),
          (r[1] = Te(nt(r[1], 0), -0.4, 0.4, !0)),
          (r[2] = Te(nt(r[2], 0), -0.4, 0.4, !0)));
        const n = vn(va(r)),
          i = t[4] !== void 0 ? +Te(t[4], 0, 1) : 1;
        return ((n[3] = i), n);
      }
      if ((t = e.match(Od))) {
        const r = t.slice(1, 4);
        ((r[0] = Te(nt(r[0], 0), 0, 1)),
          (r[1] = Te(nt(r[1], 0), 0, 0.4, !1)),
          (r[2] = +nt(r[2].replace("deg", ""), 0)));
        const n = vn(xd(r)),
          i = t[4] !== void 0 ? +Te(t[4], 0, 1) : 1;
        return ((n[3] = i), n);
      }
    };
  ((Aa.test = e =>
    kd.test(e) ||
    Cd.test(e) ||
    Ed.test(e) ||
    Id.test(e) ||
    Pd.test(e) ||
    Od.test(e) ||
    Sd.test(e) ||
    Md.test(e) ||
    $d.test(e) ||
    Ad.test(e) ||
    e === "transparent"),
    (N.prototype.css = function (e) {
      return Eb(this._rgb, e);
    }));
  const Ib = (...e) => new N(...e, "css");
  ((ie.css = Ib),
    (Z.format.css = Aa),
    Z.autodetect.push({
      p: 5,
      test: (e, ...t) => {
        if (!t.length && ne(e) === "string" && Aa.test(e)) return "css";
      },
    }),
    (Z.format.gl = (...e) => {
      const t = ee(e, "rgba");
      return ((t[0] *= 255), (t[1] *= 255), (t[2] *= 255), t);
    }));
  const Pb = (...e) => new N(...e, "gl");
  ((ie.gl = Pb),
    (N.prototype.gl = function () {
      const e = this._rgb;
      return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
    }),
    (N.prototype.hex = function (e) {
      return Qu(this._rgb, e);
    }));
  const Ob = (...e) => new N(...e, "hex");
  ((ie.hex = Ob),
    (Z.format.hex = Yu),
    Z.autodetect.push({
      p: 4,
      test: (e, ...t) => {
        if (
          !t.length &&
          ne(e) === "string" &&
          [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0
        )
          return "hex";
      },
    }));
  const { log: ks } = Math,
    Rd = e => {
      const t = e / 100;
      let r, n, i;
      return (
        t < 66
          ? ((r = 255),
            (n =
              t < 6
                ? 0
                : -155.25485562709179 -
                  0.44596950469579133 * (n = t - 2) +
                  104.49216199393888 * ks(n)),
            (i =
              t < 20
                ? 0
                : -254.76935184120902 +
                  0.8274096064007395 * (i = t - 10) +
                  115.67994401066147 * ks(i)))
          : ((r =
              351.97690566805693 +
              0.114206453784165 * (r = t - 55) -
              40.25366309332127 * ks(r)),
            (n =
              325.4494125711974 +
              0.07943456536662342 * (n = t - 50) -
              28.0852963507957 * ks(n)),
            (i = 255)),
        [r, n, i, 1]
      );
    },
    { round: Tb } = Math,
    Rb = (...e) => {
      const t = ee(e, "rgb"),
        r = t[0],
        n = t[2];
      let i = 1e3,
        s = 4e4;
      const o = 0.4;
      let a;
      for (; s - i > o; ) {
        a = (s + i) * 0.5;
        const l = Rd(a);
        l[2] / l[0] >= n / r ? (s = a) : (i = a);
      }
      return Tb(a);
    };
  N.prototype.temp =
    N.prototype.kelvin =
    N.prototype.temperature =
      function () {
        return Rb(this._rgb);
      };
  const Ea = (...e) => new N(...e, "temp");
  (Object.assign(ie, { temp: Ea, kelvin: Ea, temperature: Ea }),
    (Z.format.temp = Z.format.kelvin = Z.format.temperature = Rd),
    (N.prototype.oklch = function () {
      return wd(this._rgb);
    }),
    Object.assign(ie, { oklch: (...e) => new N(...e, "oklch") }),
    (Z.format.oklch = xd),
    Z.autodetect.push({
      p: 2,
      test: (...e) => {
        if (((e = ee(e, "oklch")), ne(e) === "array" && e.length === 3))
          return "oklch";
      },
    }),
    Object.assign(ie, {
      analyze: ld,
      average: Dy,
      bezier: Uy,
      blend: At,
      brewer: wb,
      Color: N,
      colors: pn,
      contrast: ub,
      contrastAPCA: pb,
      cubehelix: rb,
      deltaE: _b,
      distance: yb,
      input: Z,
      interpolate: hn,
      limits: cd,
      mix: hn,
      random: ob,
      scale: ys,
      scales: vb,
      valid: bb,
    }));
  function Nd(e) {
    try {
      return ie(e).rgba();
    } catch (t) {
      return (console.error("Error parsing color to RGBA:", t), null);
    }
  }
  function Nb(e) {
    try {
      const t = ie(e).hsl();
      return [t[0], t[1] * 100, t[2] * 100, t[3] !== void 0 ? t[3] : 1];
    } catch (t) {
      return (console.error("Error parsing color to HLSA:", t), null);
    }
  }
  function Ld([e, t, r]) {
    return (e * 299 + t * 587 + r * 114) / 1e3;
  }
  function Lb(e) {
    const t = document.createElement("div");
    ((t.style.backgroundColor = `var(${e})`),
      document.documentElement.appendChild(t));
    const r = getComputedStyle(t).backgroundColor;
    t.remove();
    const n = Nd(r);
    return n && Ld(n) > 82 ? "black" : "white";
  }
  function Fb(e, t = window.document.documentElement) {
    const n = getComputedStyle(t).getPropertyValue(e);
    return n ? n.trim() : null;
  }
  function Fd() {
    const e = V();
    return e
      ? Object.values(e.states).filter(
          t => !!t && t.entity_id?.startsWith("media_player.") && Ss(t)
        )
      : [];
  }
  function Db() {
    const e = V(),
      t = e.entities;
    return Object.keys(t)
      .filter(
        n => n.startsWith("media_player.") && t[n].platform === "squeezebox"
      )
      .map(n => e.states[n]);
  }
  function Dd() {
    return !!V().services.lyrion_cli;
  }
  function zb() {
    return !!V().services.lyrion_cli;
  }
  function zd() {
    return !!V().services.mass_queue;
  }
  const fi = ({ icon: e, deviceClass: t }) => {
      if (e) return e;
      switch (t) {
        case "speaker":
          return "mdi:speaker";
        case "receiver":
          return "mdi:audio-video";
        default:
          return "mdi:speaker";
      }
    },
    sr = (e, t, r) => {
      if (!e || !t) return !0;
      if (e === t) return !1;
      const n = r
          ? [
              "state",
              "attributes.volume_level",
              "attributes.is_volume_muted",
              "attributes.group_members",
            ]
          : [
              "state",
              "attributes.media_duration",
              "attributes.media_title",
              "attributes.media_artist",
              "attributes.media_album_name",
              "attributes.icon",
              "attributes.friendly_name",
              "attributes.entity_picture",
              "attributes.entity_picture_local",
              "attributes.volume_level",
              "attributes.is_volume_muted",
              "attributes.source",
              "attributes.shuffle",
              "attributes.repeat",
              "attributes.supported_features",
              "attributes.group_members",
              "attributes.active_child",
            ],
        i = (o, a) =>
          a
            .split(".")
            .reduce((c, d) => (c && c[d] !== void 0 ? c[d] : void 0), o),
        s = (o, a) => {
          if (o.length !== a.length) return !1;
          for (let l = 0; l < o.length; l++) if (o[l] !== a[l]) return !1;
          return !0;
        };
      for (const o of n) {
        const a = i(e, o),
          l = i(t, o);
        if (Array.isArray(a) && Array.isArray(l)) {
          if (!s(a, l)) return !0;
        } else if (a !== l) return !0;
      }
      return !1;
    };
  function Ss(e) {
    if (typeof e?.attributes?.mass_player_type < "u") return !0;
    if (typeof e?.attributes?.active_child < "u") {
      const r = V().states[e.attributes.active_child];
      return r ? Ss(r) : !1;
    }
    return !1;
  }
  function Ms(e, t) {
    if (e === t) return !0;
    const r = V().states[e];
    return r
      ? Ss(r)
        ? !0
        : typeof r.attributes?.active_child < "u"
          ? !1
          : !!t
      : !1;
  }
  const Ia = e =>
      e ? (Array.isArray(e) ? e.length > 0 : e.enabled === !0) : !1,
    Bd = (e, t) =>
      !e && !t
        ? !1
        : t && t.length > 0
          ? !0
          : Array.isArray(e)
            ? e.length > 0
            : e?.enabled === !0;
  let Pa = {};
  async function Oa(e, t) {
    const r = JSON.stringify(e),
      n = t?.staleTime ?? 1e4,
      i = Pa[r],
      s = Date.now();
    if (!t?.forceRefresh && i && s - i.timestamp < i.staleTime) return i.value;
    const a = await V().connection.sendMessagePromise({ ...e });
    return ((Pa = { ...Pa, [r]: { value: a, timestamp: s, staleTime: n } }), a);
  }
  const Ur = () => {
    const e = V();
    if (typeof e.selectedTheme?.dark == "boolean") return e.selectedTheme.dark;
    const t = window.document.documentElement,
      n = getComputedStyle(t).getPropertyValue("--primary-text-color");
    if (n) {
      const i = Nd(n);
      if (i) return Ld(i) > 180;
    }
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  };
  function pi(e, t) {
    return e.entity_id === t
      ? !0
      : typeof e?.attributes?.active_child < "u"
        ? e.attributes.active_child === t
        : !1;
  }
  const Vd = (e, t) =>
    Array.isArray(e) ? e : [{ entity_id: e?.entity_id ?? t }];
  function Bb(e) {
    if (!e) return { title: "Unavailable", subtitle: "unknown unavailable" };
    const {
        attributes: {
          media_title: t,
          media_artist: r,
          media_album_name: n,
          media_series_title: i,
          media_season: s,
          media_episode: o,
          source: a,
        } = {},
        state: l,
        entity_id: c,
      } = e,
      d = l.charAt(0).toUpperCase() + l.slice(1).toLowerCase();
    if (l === "off") return { title: d, subtitle: void 0 };
    if (l === "unavailable")
      return { title: "Unavailable", subtitle: `${c} unavailable` };
    let u = t ?? "";
    (!u || u === "") &&
      (a && typeof a == "string" && !a.startsWith("media_player.")
        ? (u = a)
        : (u = d));
    let h;
    if (i) {
      let f = "";
      ((s || o) && (f = `S${s ?? ""}${o ? `E${o}` : ""}`),
        (h = `${i}${f ? ` • ${f}` : ""}`));
    } else (n || r) && (h = `${n && n !== u ? `${n} • ` : ""}${r ?? ""}`);
    return { title: u, subtitle: h };
  }
  const Vb = e => {
      const t = [
        {
          action: e.action,
          name: e.name,
          entity_id: e.entity_id,
          ma_entity_id: e.ma_entity_id,
          ma_favorite_button_entity_id: e.ma_favorite_button_entity_id,
          speaker_group_entity_id: e.speaker_group?.entity_id,
          lms_entity_id: e.lms_entity_id,
          search: e.search,
          media_browser: e.media_browser,
          custom_buttons: e.custom_buttons,
          can_be_grouped: !0,
        },
        ...(
          e.speaker_group?.entities.map(r => {
            const n = typeof r == "string" ? r : r.entity;
            return n === e.entity_id || n === e.speaker_group?.entity_id
              ? null
              : typeof r == "string"
                ? { entity_id: r, can_be_grouped: !0 }
                : { entity_id: r.entity, name: r.name, can_be_grouped: !0 };
          }) ?? []
        ).filter(Boolean),
      ];
      return {
        type: "custom:mediocre-multi-media-player-card",
        use_art_colors: e.use_art_colors ?? !1,
        disable_player_focus_switching: !0,
        entity_id: e.entity_id,
        tap_opens_popup: e.tap_opens_popup ?? !1,
        size: "compact",
        options: {
          show_volume_step_buttons: e.options?.show_volume_step_buttons ?? !1,
          use_volume_up_down_for_step_buttons:
            e.options?.use_volume_up_down_for_step_buttons ?? !1,
          always_show_custom_buttons:
            e.options?.always_show_custom_buttons ?? !1,
          always_show_power_button: e.options?.always_show_power_button ?? !1,
          hide_when_group_child: e.options?.hide_when_group_child ?? !1,
          hide_when_off: e.options?.hide_when_off ?? !1,
          use_experimental_lms_media_browser:
            e.options?.use_experimental_lms_media_browser ?? !1,
        },
        media_players: t,
      };
    },
    Cs = ({ source: e, fallbackIcon: t }) => {
      switch (e?.toLowerCase()) {
        case "spotify":
          return "mdi:spotify";
        case "airplay":
          return "mdi:cast-audio-variant";
        case "bluetooth":
          return "mdi:bluetooth";
        case "net radio":
          return "mdi:radio";
        case "server":
          return "mdi:server";
        case "usb":
          return "mdi:usb";
        case "aux":
          return "mdi:audio-input-rca";
        case "hdmi":
          return "mdi:hdmi-port";
        case "tv":
          return "mdi:television";
        case "tuner":
          return "mdi:radio-tower";
        case "optical":
          return "mdi:audio-input-stereo-minijack";
        default:
          return t ?? "mdi:music";
      }
    },
    $s = (e, t) =>
      e === 0 || t
        ? "mdi:volume-off"
        : e < 0.5
          ? "mdi:volume-medium"
          : "mdi:volume-high";
  function Ta(e, t, r) {
    if (t.disable_player_focus_switching)
      return r ?? t.media_players.find(s => s.entity_id === t.entity_id);
    let n = r ?? t.media_players.find(s => s.entity_id === t.entity_id);
    const i = e.states[n?.entity_id ?? t.entity_id]?.state;
    if (n && qd(i, t.options?.player_is_active_when ?? "playing")) {
      const s = e.states[n?.speaker_group_entity_id || n.entity_id],
        o = s?.attributes?.group_members;
      if (!o?.length || o[0] === s.entity_id) return n;
    }
    return (
      t.media_players.forEach(s => {
        const o = e.states[s.entity_id];
        if (o && qd(o.state, t.options?.player_is_active_when ?? "playing")) {
          const a = e.states[s.speaker_group_entity_id || s.entity_id],
            l = a?.attributes?.group_members;
          (!l?.length || l[0] === a.entity_id) && (n = s);
        }
      }),
      n
    );
  }
  const qd = (e, t) =>
      t === "playing" ? e === "playing" : e === "playing" || e === "paused",
    qb = (e, t, r = !1) => {
      const n = V(),
        i = n.states[e];
      if (
        i &&
        (n.callService("media_player", "volume_set", {
          entity_id: e,
          volume_level: t,
        }),
        r && i.attributes.group_members?.length > 0)
      ) {
        const s = i.attributes.volume_level || 0,
          o = s > 0 ? t / s : 1;
        i.attributes.group_members.slice(1).forEach(a => {
          const l = n.states[a];
          if (!l) return;
          const c = l.attributes.volume_level || 0,
            d = Math.min(Math.max(c * o, 0), 1);
          n.callService("media_player", "volume_set", {
            entity_id: a,
            volume_level: d,
          });
        });
      }
    };
  function jb(e) {
    const t = e.tracknum
        ? `${e.disc && e.disccount ? `Disc ${e.disc}/${e.disccount} · ` : e.disc ? `Disc ${e.disc} · ` : ""}Track ${e.tracknum}`
        : null,
      r = (() => {
        const s = Number(e.filesize);
        return s
          ? s >= 1024 * 1024
            ? `${(s / (1024 * 1024)).toFixed(1)} MB`
            : `${Math.round(s / 1024)} KB`
          : null;
      })(),
      n = [
        e.type ? e.type.toUpperCase() : null,
        e.lossless === "1" ? "Lossless" : null,
        e.samplerate ? `${Number(e.samplerate) / 1e3} kHz` : null,
        e.samplesize ? `${e.samplesize}-bit` : null,
        e.bitrate && e.bitrate !== "0" ? e.bitrate : null,
        r,
      ].filter(Boolean),
      i = [
        e.genre,
        e.year,
        t,
        e.playcount ? `${e.playcount} plays` : null,
      ].filter(Boolean);
    return { audioBadges: n, metaBadges: i };
  }
  function jd(e, t) {
    const { shuffle: r, repeat: n, supported_features: i } = t,
      s = e === "off",
      o = !s && i !== void 0 && (i & 16) === 16,
      a = !s && i !== void 0 && (i & 32) === 32,
      l = !s && i !== void 0 && (i & 1) === 1,
      c =
        !s &&
        i !== void 0 &&
        ((i & 1) === 1 || ((i & 16384) === 16384 && (i & 4096) === 4096)),
      d = !s && i !== void 0 && (i & 4096) === 4096,
      u = !d && !c,
      h = !s && !u && r !== void 0 && i !== void 0 && (i & 32768) === 32768,
      f = !s && !u && n !== void 0 && i !== void 0 && (i & 262144) === 262144;
    return {
      supportPreviousTrack: o,
      supportNextTrack: a,
      supportsShuffle: h,
      supportsRepeat: f,
      supportsTogglePlayPause: c,
      supportsPause: l,
      supportsStop: d,
    };
  }
  async function Ud(e, t) {
    const r = V();
    (await r.callService("media_player", "join", {
      entity_id: e,
      group_members: [t],
    }),
      await r.callService("media_player", "turn_off", { entity_id: e }),
      await r.callService("media_player", "turn_on", { entity_id: t }),
      await r.callService("media_player", "media_play", { entity_id: t }),
      await r.callService("media_player", "unjoin", { entity_id: e }));
  }
  async function Kd(e, t) {
    const r = V();
    if (!r) throw new Error("hass object not available");
    await r.callService(
      "music_assistant",
      "transfer_queue",
      { source_player: e },
      { entity_id: t }
    );
  }
  async function or(e, t, r, n) {
    const i = V();
    if (!i) throw new Error("hass object not available");
    const s = t || e;
    await i.callService(
      "music_assistant",
      "play_media",
      { media_id: r, media_type: n, radio_mode: !0, enqueue: "replace" },
      { entity_id: s }
    );
  }
  var Gd = function (t, r) {
    var n = arguments;
    if (r == null || !ui.call(r, "css")) return rt.apply(void 0, n);
    var i = n.length,
      s = new Array(i);
    ((s[0] = oa), (s[1] = sa(t, r)));
    for (var o = 2; o < i; o++) s[o] = n[o];
    return rt.apply(null, s);
  };
  (function (e) {
    var t;
    t || (t = e.JSX || (e.JSX = {}));
  })(Gd || (Gd = {}));
  function w() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return Bu(t);
  }
  function wn() {
    var e = w.apply(void 0, arguments),
      t = "animation-" + e.name;
    return {
      name: t,
      styles: "@keyframes " + t + "{" + e.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  }
  const Ub = {
      root: w({
        background: "none",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "var(--mmpc-icon-size)",
        aspectRatio: "1",
        "& > ha-icon": {
          "--mdc-icon-size": "var(--mmpc-icon-size)",
          width: "var(--mmpc-icon-size)",
          height: "var(--mmpc-icon-size)",
          display: "flex",
        },
      }),
    },
    se = ({ icon: e, size: t = "medium", className: r }) =>
      p("div", {
        css: Ub.root,
        style: { "--mmpc-icon-size": `${Ra(t)}px` },
        className: r,
        children: p("ha-icon", { icon: e }),
      }),
    Ra = e => {
      switch (e) {
        case "xxx-small":
          return 8;
        case "xx-small":
          return 12;
        case "x-small":
          return 18;
        case "small":
          return 24;
        case "medium":
          return 32;
        case "large":
          return 48;
        case "x-large":
          return 80;
        case "xx-large":
          return 120;
      }
    },
    Wd = wn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,
    U = {
      colors: {
        dialog:
          "var(--mmpc-dialog, var(--ha-dialog-surface-background, var(--mdc-theme-surface,#fff)))",
        onDialog: "var(--mmpc-on-dialog, var(--primary-text-color, #333))",
        onDialogMuted:
          "var(--mmpc-on-dialog-muted, var(--secondary-text-color, #888))",
        onDialogDivider:
          "var(--mmpc-on-dialog-divider, var(--divider-color, rgba(0, 0, 0, 0.12)))",
        card: "var(--mmpc-card, var(--card-background-color))",
        onCard: "var(--mmpc-on-card, var(--primary-text-color, #333))",
        onCardMuted:
          "var(--mmpc-on-card-muted, var(--secondary-text-color, #666))",
        onCardDivider:
          "var(--mmpc-on-card-divider, var(--divider-color, rgba(0, 0, 0, 0.12)))",
      },
      sizes: {
        cardBorderRadius:
          "var(--ha-card-border-radius, var(--ha-border-radius-lg, 12px))",
      },
    };
  function Na(e, t) {
    const [r, n] = L(e);
    return (
      Q(() => {
        const i = setTimeout(() => {
          n(e);
        }, t);
        return () => {
          clearTimeout(i);
        };
      }, [e, t]),
      r
    );
  }
  function La() {
    const [e, t] = L({ width: null, height: null }),
      r = he(null);
    return [
      T(i => {
        if (
          (r.current && (r.current.disconnect(), (r.current = null)),
          i?.nodeType === Node.ELEMENT_NODE)
        ) {
          const s = new ResizeObserver(([o]) => {
            if (o && o.borderBoxSize) {
              const { inlineSize: a, blockSize: l } = o.borderBoxSize[0];
              t({ width: a, height: l });
            }
          });
          (s.observe(i), (r.current = s));
        }
      }, []),
      e,
    ];
  }
  function Kb() {
    const [e, t] = L({ x: null, y: null }),
      r = T((...n) => {
        if (typeof n[0] == "object") window.scrollTo(n[0]);
        else if (typeof n[0] == "number" && typeof n[1] == "number")
          window.scrollTo(n[0], n[1]);
        else
          throw new Error(
            "Invalid arguments passed to scrollTo. See here for more info. https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo"
          );
      }, []);
    return (
      er(() => {
        const n = () => {
          t({ x: window.scrollX, y: window.scrollY });
        };
        return (
          n(),
          window.addEventListener("scroll", n),
          () => {
            window.removeEventListener("scroll", n);
          }
        );
      }, []),
      [e, r]
    );
  }
  const Gb = wn`
    from { opacity: 0; }
    to { opacity: 1; }
`,
    Hd = {
      popoverWrap: w({
        position: "relative",
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        backgroundColor: "transparent",
        border: "none",
        pointerEvents: "none",
      }),
      popoverRoot: w({
        pointerEvents: "auto",
        position: "absolute",
        zIndex: 100,
        opacity: 1,
        backgroundColor: "transparent",
        padding: 0,
        animation: `${Gb} 0.3s ease`,
        maxHeight: "100vh",
        overflowY: "auto",
        ":popover-open": { border: 0 },
      }),
    },
    As = 8,
    Jd = Lt(
      (
        {
          renderTrigger: e,
          side: t = "bottom",
          align: r = "start",
          children: n,
        },
        i
      ) => {
        const [s, o] = L(),
          [a, l] = L(),
          c = s ?? t,
          d = a ?? r,
          [u, h] = L(!1);
        rs(i, () => ({ setOpen: h }), [h]);
        const f = he(null),
          g = he(null),
          [m, _] = L(null),
          [y, b] = L(null);
        (Q(() => {
          if (!u) return;
          function E(A) {
            A.key === "Escape" && h(!1);
          }
          return (
            document.addEventListener("keydown", E),
            () => document.removeEventListener("keydown", E)
          );
        }, [u]),
          Q(() => {
            if (!u) return;
            function E(A) {
              const S = A.composedPath ? A.composedPath() : [],
                I = A.target,
                q = g.current,
                te = f.current,
                Se = q && (S.includes(q) || q.contains(I)),
                we = te && (S.includes(te) || te.contains(I));
              !Se && !we && (h(!1), l(void 0), o(void 0));
            }
            return (
              window.addEventListener("click", E),
              () => window.removeEventListener("click", E)
            );
          }, [u]));
        const v = () => {
            (h(!0),
              _(f.current?.getBoundingClientRect() || null),
              setTimeout(() => {
                b(g.current?.getBoundingClientRect() || null);
              }, 0));
          },
          k = T(() => {
            u ? (h(!1), l(void 0), o(void 0)) : v();
          }, [u]),
          [x] = Kb(),
          $ = T((E, A, S) => {
            switch (E) {
              case "top":
                return { top: Math.max(0, A.top - As - S.height) };
              case "bottom":
                return { top: Math.max(0, A.top + A.height + As) };
              case "left":
                return { left: Math.max(0, A.left - S.width - As) };
              case "right":
                return { left: Math.max(0, A.left + A.width + As) };
            }
          }, []),
          M = T((E, A, S, I) => {
            switch (E) {
              case "start":
                return A === "right" || A === "left"
                  ? { top: Math.max(0, S.top) }
                  : { left: S.left };
              case "center":
                return A === "right" || A === "left"
                  ? { top: Math.max(0, S.top + S.height / 2 - I.height / 2) }
                  : { left: S.left - I.width / 2 + S.width / 2 };
              case "end":
                return A === "right" || A === "left"
                  ? { top: Math.max(0, S.top - I.height + S.height) }
                  : { left: S.left - I.width + S.width };
            }
          }, []),
          C = R(() => {
            if (!m || !y) return {};
            const E = $(c, m, y),
              A = M(d, c, m, y);
            return { ...E, ...A };
          }, [m, y, c, d, $, M]);
        Q(() => {
          const E = g.current;
          if (!E || !u) return;
          const A = new window.IntersectionObserver(
            S => {
              S.forEach(I => {
                if (I.intersectionRatio < 1) {
                  if (
                    I.boundingClientRect.height !== I.intersectionRect.height
                  ) {
                    const q =
                        I.boundingClientRect.top !== I.intersectionRect.top,
                      te =
                        I.intersectionRect.bottom !==
                        I.boundingClientRect.bottom;
                    (te && q) ||
                      (te &&
                        (t === "bottom" && o("top"),
                        (t === "right" || t === "left") && l("end")),
                      q &&
                        (t === "top" && o("bottom"),
                        (t === "right" || t === "left") && l("start")));
                  }
                  if (I.boundingClientRect.width !== I.intersectionRect.width) {
                    const q =
                        I.boundingClientRect.right !== I.intersectionRect.right,
                      te =
                        I.boundingClientRect.left !== I.intersectionRect.left;
                    (te && q) ||
                      (q &&
                        ((t === "top" || t === "bottom") && l("end"),
                        t === "right" && o("left")),
                      te &&
                        ((t === "top" || t === "bottom") && l("start"),
                        t === "left" && o("right")));
                  }
                }
              });
            },
            { root: null, threshold: 0 }
          );
          return (
            A.observe(E),
            () => {
              A.disconnect();
            }
          );
        }, [u, t, r]);
        const O = L(
          () => `overlay-popover-${Math.random().toString(36).substr(2, 9)}`
        )[0];
        return P(Y, {
          children: [
            e({ onClick: k, popoverTarget: O, ref: f }),
            u &&
              p("div", {
                style: { top: x?.y || 0, left: x?.x || 0 },
                css: Hd.popoverWrap,
                id: O,
                popover: "manual",
                children: p("div", {
                  css: Hd.popoverRoot,
                  role: "menu",
                  style: C,
                  ref: g,
                  children: n,
                }),
              }),
          ],
        });
      }
    ),
    xn = {
      menuRoot: w({
        background: U.colors.dialog,
        color: U.colors.onDialog,
        borderRadius: 12,
        minWidth: 180,
        boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
        padding: 4,
        gap: 4,
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${U.colors.onDialogDivider}`,
      }),
      item: w({
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 14px",
        borderRadius: 8,
        backgroundColor: "transparent",
        fontSize: 15,
        cursor: "pointer",
        color: "inherit",
        transition: "background 0.15s",
        position: "relative",
        border: "none",
        "&:hover, &[data-highlighted]": {
          background: U.colors.onDialogDivider,
        },
        "&[data-disabled]": {
          color: U.colors.onDialogMuted,
          cursor: "not-allowed",
        },
      }),
      itemSelected: w({ background: U.colors.onDialogDivider }),
      itemChevron: w({ marginLeft: "auto" }),
      itemTitle: w({
        padding: "8px 14px 4px 14px",
        fontSize: 13,
        fontWeight: "bold",
        color: U.colors.onDialogMuted,
      }),
    },
    ze = ({ menuItems: e, ...t }) => {
      const r = he(null),
        n = (s, o, a, l) =>
          s?.type === "title"
            ? p("span", { css: xn.itemTitle, children: s.label }, s.label + l)
            : P(
                "button",
                {
                  css: [xn.item, s.selected && xn.itemSelected],
                  onClick: () => {
                    (a || r.current?.setOpen(!1), s.onClick && s.onClick());
                  },
                  role: "menuitem",
                  ...o,
                  children: [
                    s.icon && p(se, { icon: s.icon, size: "x-small" }),
                    p("span", { children: s.label }),
                    a &&
                      p(se, {
                        icon: "mdi:chevron-down",
                        size: "x-small",
                        css: xn.itemChevron,
                      }),
                  ],
                },
                s.label + l
              ),
        i = s =>
          s.map((o, a) => {
            const l =
              (!o.type || o.type === "item") &&
              !!(o.children && o.children.length > 0);
            return l
              ? p(Jd, {
                  side: "right",
                  align: "start",
                  renderTrigger: c => n(o, c, l, a),
                  children: p("div", {
                    css: xn.menuRoot,
                    role: "menu",
                    children: i(o.children),
                  }),
                })
              : n(o, {}, l, a);
          });
      return p(Jd, {
        ref: r,
        ...t,
        children: p("div", { css: xn.menuRoot, role: "menu", children: i(e) }),
      });
    },
    Wb = {
      MediocreMultiMediaPlayerCard: {
        SpeakerGrouping: {
          join_title: "Join media players",
          join_subtitle: "Selected player grouping.",
          link_volume: "Link Volume",
          player_focus_title: "Player focus",
          player_focus_subtitle: "Change which player you are controlling.",
        },
        MediaBrowserView: { browse_media_title: "Browse Media" },
        SearchView: {
          search_in_ma_title: "Search in Music Assistant",
          search_title: "Search",
        },
        AdditionalActionsView: {
          shortcuts_title: "Shortcuts",
          shortcuts_subtitle: "Quick access to your favorite actions.",
          media_player_actions_title: "Media Player actions",
          media_player_actions_subtitle:
            "Additional controls for your media player.",
          mark_as_favorite: "Mark as Favorite",
          more_info: "More Info",
          transfer_queue: "Transfer Queue",
          lyrion_info_title: "Track info",
          related_albums_title: "Related Albums",
        },
        QueueView: {
          up_next: "Up Next",
          up_next_subtitle: "Current playback queue",
        },
      },
      MediocreMediaPlayerCard: {
        SpeakerGrouping: {
          grouped_speakers_title: "Grouped speakers",
          link_volume_title: "Link volume",
          add_speakers_title: "Add speakers to group",
        },
        QueueView: { up_next: "Up Next" },
      },
      MediocreMassiveMediaPlayerCard: {
        PlayerActions: {
          volume_modal_title: "Volume",
          speaker_grouping_modal_title: "Speaker Grouping",
          media_browser_modal_title: "Media Browser",
          search_modal_title: "Search",
          shortcuts_modal_title: "Shortcuts",
          queue_view_modal_title: "Up Next",
        },
        SpeakerGrouping: { link_volume: "Link volume" },
      },
      Search: {
        search_provider: { title: "Search using.." },
        input_placeholder: "Search for media...",
        categories: {
          All: "All",
          Favorites: "Favorites",
          Favorite: "Favorite",
          Artists: "Artists",
          Albums: "Albums",
          Tracks: "Tracks",
          Playlists: "Playlists",
          Podcasts: "Podcasts",
          Audiobooks: "Audiobooks",
          Genres: "Genres",
          Radio: "Radio",
        },
        enqueue_mode: {
          title: "Enqueue Mode",
          play: "Play",
          replace: "Replace Queue",
          next: "Add Next",
          replace_next: "Replace Next",
          add: "Add to Queue",
        },
        no_results: "No results found.",
      },
      MediaBrowser: {
        breadcrumb_home: "Home",
        filter_placeholder: "Filter results...",
        empty_text: "No media items available.",
        media_item_menu: {
          enqueue_dropdown_label: "Enqueue",
          enqueue_mode: {
            play: "Play",
            next: "Play Next",
            replace: "Replace Queue",
            add: "Add to Queue",
          },
          browse: "Browse",
        },
      },
      AdditionalActionsMenu: {
        mark_as_favorite: "Mark as Favorite",
        transfer_queue: "Transfer Queue",
        select_source: "Select Source",
        start_radio_mix: "Start Radio Mix",
        song_radio: "Song Radio",
        artist_radio: "Artist Radio",
        album_radio: "Album Radio",
      },
      LyrionTrackInfo: { empty_state: "No track info available" },
      player_states: {
        Off: "Off",
        Idle: "Idle",
        Playing: "Playing",
        Paused: "Paused",
        Stopped: "Stopped",
        Unavailable: "Unavailable",
      },
    },
    Hb = {
      MediocreMultiMediaPlayerCard: {
        SpeakerGrouping: {
          join_title: "Synk. medieafspillere",
          join_subtitle: "Valgt medieafspiller-gruppering.",
          link_volume: "Synk. lydstyrke",
          player_focus_title: "Afspillerfokus",
          player_focus_subtitle: "Vælg hvilken afspiller du styrer.",
        },
        MediaBrowserView: { browse_media_title: "Gennemse medier" },
        SearchView: {
          search_in_ma_title: "Søg i Music Assistant",
          search_title: "Søg",
        },
        AdditionalActionsView: {
          shortcuts_title: "Genveje",
          shortcuts_subtitle: "Hurtig adgang til dine favorit-handlinger.",
          media_player_actions_title: "Medieafspiller-handlinger",
          media_player_actions_subtitle:
            "Ekstra valgmuligheder til din medieafspiller.",
          mark_as_favorite: "Marker som favorit",
          more_info: "Mere info",
          transfer_queue: "Overfør kø",
        },
        QueueView: {
          up_next: "Næste i kø",
          up_next_subtitle: "Nuværende afspilningskø",
        },
      },
      MediocreMediaPlayerCard: {
        SpeakerGrouping: {
          grouped_speakers_title: "Synk. medieafspillere",
          link_volume_title: "Synk. lydstyrke",
          add_speakers_title: "Tilføj medieafspillere til gruppe",
        },
        QueueView: { up_next: "Næste i kø" },
      },
      MediocreMassiveMediaPlayerCard: {
        PlayerActions: {
          volume_modal_title: "Lydstyrke",
          speaker_grouping_modal_title: "Synk. medieafspillere",
          media_browser_modal_title: "Gennemse medier",
          search_modal_title: "Søg",
          shortcuts_modal_title: "Genveje",
          queue_view_modal_title: "Næste i kø",
        },
        SpeakerGrouping: { link_volume: "Synk. lydstyrke" },
      },
      Search: {
        search_provider: { title: "Søg med.." },
        input_placeholder: "Søg efter medier...",
        categories: {
          All: "Alt",
          Favorites: "Favoritter",
          Favorite: "Favorit",
          Artists: "Kunstnere",
          Albums: "Albums",
          Tracks: "Numre",
          Playlists: "Playlister",
          Podcasts: "Podcasts",
          Audiobooks: "Lydbøger",
          Genres: "Genrer",
          Radio: "Radio",
        },
        enqueue_mode: {
          title: "Kø-tilstand",
          play: "Afspil",
          replace: "Erstat kø",
          next: "Tilføj næste",
          replace_next: "Erstat næste",
          add: "Tilføj til kø",
        },
        no_results: "Ingen resultater fundet.",
      },
      MediaBrowser: {
        breadcrumb_home: "Hjem",
        filter_placeholder: "Filtrer resultater...",
        empty_text: "Ingen medieelementer tilgængelige.",
        media_item_menu: {
          enqueue_dropdown_label: "Tilføj til kø",
          enqueue_mode: {
            play: "Afspil",
            next: "Afspil næste",
            replace: "Erstat kø",
            add: "Tilføj til kø",
          },
          browse: "Gennemse",
        },
      },
      AdditionalActionsMenu: {
        mark_as_favorite: "Marker som favorit",
        transfer_queue: "Overfør kø",
        select_source: "Vælg kilde",
      },
      player_states: {
        Off: "Slukket",
        Idle: "Inaktiv",
        Playing: "Afspiller",
        Paused: "På pause",
        Stopped: "Stoppet",
        Unavailable: "Utilgængelig",
      },
    },
    Jb = {
      MediocreMultiMediaPlayerCard: {
        SpeakerGrouping: {
          join_title: "Juntar leitores multimédia",
          join_subtitle: "Agrupamento de leitor selecionado.",
          link_volume: "Sincronizar Volume",
          player_focus_title: "Foco do leitor",
          player_focus_subtitle: "Altere qual o leitor que está a controlar.",
        },
        MediaBrowserView: { browse_media_title: "Explorar Multimédia" },
        SearchView: {
          search_in_ma_title: "Pesquisar no Music Assistant",
          search_title: "Pesquisar",
        },
        AdditionalActionsView: {
          shortcuts_title: "Atalhos",
          shortcuts_subtitle: "Acesso rápido às suas ações favoritas.",
          media_player_actions_title: "Ações do leitor multimédia",
          media_player_actions_subtitle:
            "Controlos adicionais para o seu leitor multimédia.",
          mark_as_favorite: "Marcar como Favorito",
          transfer_queue: "Transferir Fila",
        },
      },
      MediocreMediaPlayerCard: {
        SpeakerGrouping: {
          grouped_speakers_title: "Altifalantes agrupados",
          link_volume_title: "Sincronizar volume",
          add_speakers_title: "Adicionar altifalantes ao grupo",
        },
      },
      MediocreMassiveMediaPlayerCard: {
        PlayerActions: {
          volume_modal_title: "Volume",
          speaker_grouping_modal_title: "Agrupamento de Altifalantes",
          media_browser_modal_title: "Explorador de Multimédia",
          search_modal_title: "Pesquisar",
          shortcuts_modal_title: "Atalhos",
        },
        SpeakerGrouping: { link_volume: "Sincronizar volume" },
      },
      Search: {
        input_placeholder: "Pesquisar multimédia...",
        categories: {
          All: "Tudo",
          Favorites: "Favoritos",
          Favorite: "Favorito",
          Artists: "Artistas",
          Albums: "Álbuns",
          Tracks: "Faixas",
          Playlists: "Listas de reprodução",
          Podcasts: "Podcasts",
          Audiobooks: "Audiolivros",
          Genres: "Géneros",
          Radio: "Rádio",
        },
        enqueue_mode: {
          play: "Reproduzir",
          replace: "Substituir Fila",
          next: "Adicionar a Seguir",
          replace_next: "Substituir Seguinte",
          add: "Adicionar à Fila",
        },
        no_results: "Nenhum resultado encontrado.",
      },
      MediaBrowser: {
        breadcrumb_home: "Início",
        filter_placeholder: "Filtrar resultados...",
        empty_text: "Nenhum item multimédia disponível.",
        media_item_menu: {
          enqueue_dropdown_label: "Adicionar à fila",
          enqueue_mode: {
            play: "Reproduzir",
            next: "Reproduzir a Seguir",
            replace: "Substituir Fila",
            add: "Adicionar à Fila",
          },
          browse: "Explorar",
        },
      },
      AdditionalActionsMenu: {
        mark_as_favorite: "Marcar como Favorito",
        transfer_queue: "Transferir Fila",
        select_source: "Selecionar Fonte",
      },
      player_states: {
        Off: "Desligado",
        Idle: "Inativo",
        Playing: "A reproduzir",
        Paused: "Em pausa",
        Stopped: "Parado",
        Unavailable: "Indisponível",
      },
    },
    Yb = {
      MediocreMultiMediaPlayerCard: {
        SpeakerGrouping: {
          join_title: "Medienplayer verbinden",
          join_subtitle: "Ausgewählte Player-Gruppierung.",
          link_volume: "Lautstärke verknüpfen",
          player_focus_title: "Player-Fokus",
          player_focus_subtitle: "Ändern, welchen Player gesteuert wird.",
        },
        MediaBrowserView: { browse_media_title: "Medien durchsuchen" },
        SearchView: {
          search_in_ma_title: "In Music Assistant suchen",
          search_title: "Suche",
        },
        AdditionalActionsView: {
          shortcuts_title: "Kurzbefehle",
          shortcuts_subtitle: "Schnellzugriff auf bevorzugten Aktionen.",
          media_player_actions_title: "Medienplayer-Aktionen",
          media_player_actions_subtitle:
            "Zusätzliche Steuerungen für Medienplayer.",
          mark_as_favorite: "Als Favorit markieren",
          transfer_queue: "Warteschlange übertragen",
        },
      },
      MediocreMediaPlayerCard: {
        SpeakerGrouping: {
          grouped_speakers_title: "Gruppierte Lautsprecher",
          link_volume_title: "Lautstärke verknüpfen",
          add_speakers_title: "Lautsprecher zur Gruppe hinzufügen",
        },
      },
      MediocreMassiveMediaPlayerCard: {
        PlayerActions: {
          volume_modal_title: "Lautstärke",
          speaker_grouping_modal_title: "Lautsprecher-Gruppierung",
          media_browser_modal_title: "Medienbrowser",
          search_modal_title: "Suche",
          shortcuts_modal_title: "Kurzbefehle",
        },
        SpeakerGrouping: { link_volume: "Lautstärke verknüpfen" },
      },
      Search: {
        input_placeholder: "Nach Medien suchen...",
        categories: {
          All: "Alle",
          Favorites: "Favoriten",
          Favorite: "Favorit",
          Artists: "Künstler",
          Albums: "Alben",
          Tracks: "Titel",
          Playlists: "Playlisten",
          Podcasts: "Podcasts",
          Audiobooks: "Hörbücher",
          Genres: "Genres",
          Radio: "Radio",
        },
        enqueue_mode: {
          play: "Abspielen",
          replace: "Warteschlange ersetzen",
          next: "Als Nächstes abspielen",
          replace_next: "Nächstes ersetzen",
          add: "Zur Warteschlange hinzufügen",
        },
        no_results: "Keine Ergebnisse gefunden.",
      },
      MediaBrowser: {
        breadcrumb_home: "Startseite",
        filter_placeholder: "Ergebnisse filtern...",
        empty_text: "Keine Medienelemente verfügbar.",
        media_item_menu: {
          enqueue_dropdown_label: "Zur Warteschlange",
          enqueue_mode: {
            play: "Abspielen",
            next: "Als Nächstes abspielen",
            replace: "Warteschlange ersetzen",
            add: "Zur Warteschlange hinzufügen",
          },
          browse: "Durchsuchen",
        },
      },
      AdditionalActionsMenu: {
        mark_as_favorite: "Als Favorit markieren",
        transfer_queue: "Wiedergabeliste übergeben",
        select_source: "Quelle wählen",
      },
      player_states: {
        Off: "Aus",
        Idle: "Leerlauf",
        Playing: "Abspielen",
        Paused: "Pausiert",
        Stopped: "Gestoppt",
        Unavailable: "Nicht verfügbar",
      },
    },
    Qb = {
      MediocreMultiMediaPlayerCard: {
        SpeakerGrouping: {
          join_title: "Mediaspelers koppelen",
          join_subtitle: "Geselecteerde spelergroep.",
          link_volume: "Volume koppelen",
          player_focus_title: "Spelerfocus",
          player_focus_subtitle: "Wijzig welke speler je bedient.",
        },
        MediaBrowserView: { browse_media_title: "Media bladeren" },
        SearchView: {
          search_in_ma_title: "Zoeken in Music Assistant",
          search_title: "Zoeken",
        },
        AdditionalActionsView: {
          shortcuts_title: "Snelkoppelingen",
          shortcuts_subtitle: "Snelle toegang tot je favoriete acties.",
          media_player_actions_title: "Mediaspeleracties",
          media_player_actions_subtitle:
            "Extra bedieningselementen voor je mediaspeler.",
          mark_as_favorite: "Markeren als favoriet",
          more_info: "Meer informatie",
          transfer_queue: "Wachtrij overzetten",
          lyrion_info_title: "Nummerinformatie",
          related_albums_title: "Gerelateerde albums",
        },
        QueueView: {
          up_next: "Hierna",
          up_next_subtitle: "Huidige afspeelwachtrij",
        },
      },
      MediocreMediaPlayerCard: {
        SpeakerGrouping: {
          grouped_speakers_title: "Gegroepeerde luidsprekers",
          link_volume_title: "Volume koppelen",
          add_speakers_title: "Luidsprekers toevoegen aan groep",
        },
        QueueView: { up_next: "Hierna" },
      },
      MediocreMassiveMediaPlayerCard: {
        PlayerActions: {
          volume_modal_title: "Volume",
          speaker_grouping_modal_title: "Luidsprekergroepering",
          media_browser_modal_title: "Mediabrowser",
          search_modal_title: "Zoeken",
          shortcuts_modal_title: "Snelkoppelingen",
          queue_view_modal_title: "Hierna",
        },
        SpeakerGrouping: { link_volume: "Volume koppelen" },
      },
      Search: {
        search_provider: { title: "Zoeken met.." },
        input_placeholder: "Zoeken naar media...",
        categories: {
          All: "Alles",
          Favorites: "Favorieten",
          Favorite: "Favoriet",
          Artists: "Artiesten",
          Albums: "Albums",
          Tracks: "Nummers",
          Playlists: "Afspeellijsten",
          Podcasts: "Podcasts",
          Audiobooks: "Luisterboeken",
          Genres: "Genres",
          Radio: "Radio",
        },
        enqueue_mode: {
          title: "Wachtrijmodus",
          play: "Afspelen",
          replace: "Wachtrij vervangen",
          next: "Als volgende toevoegen",
          replace_next: "Volgende vervangen",
          add: "Aan wachtrij toevoegen",
        },
        no_results: "Geen resultaten gevonden.",
      },
      MediaBrowser: {
        breadcrumb_home: "Home",
        filter_placeholder: "Resultaten filteren...",
        empty_text: "Geen media-items beschikbaar.",
        media_item_menu: {
          enqueue_dropdown_label: "In wachtrij",
          enqueue_mode: {
            play: "Afspelen",
            next: "Speel volgende af",
            replace: "Wachtrij vervangen",
            add: "Aan wachtrij toevoegen",
          },
          browse: "Bladeren",
        },
      },
      AdditionalActionsMenu: {
        mark_as_favorite: "Markeren als favoriet",
        transfer_queue: "Wachtrij overzetten",
        select_source: "Bron selecteren",
      },
      LyrionTrackInfo: { empty_state: "Geen nummerinformatie beschikbaar" },
      player_states: {
        Off: "Uit",
        Idle: "Inactief",
        Playing: "Afspelen",
        Paused: "Gepauzeerd",
        Stopped: "Gestopt",
        Unavailable: "Niet beschikbaar",
      },
    },
    Xb = {
      MediocreMultiMediaPlayerCard: {
        SpeakerGrouping: {
          join_title: "קיבוץ נגני מדיה",
          join_subtitle: "קיבוץ הנגנים הנבחרים.",
          link_volume: "קישור עוצמת הקול",
          player_focus_title: "מיקוד נגן",
          player_focus_subtitle: "שינוי הנגן שבשליטתך.",
        },
        MediaBrowserView: { browse_media_title: "עיון במדיה" },
        SearchView: {
          search_in_ma_title: "חיפוש ב‑Music Assistant",
          search_title: "חיפוש",
        },
        AdditionalActionsView: {
          shortcuts_title: "קיצורי דרך",
          shortcuts_subtitle: "גישה מהירה לפעולות המועדפות עליך.",
          media_player_actions_title: "פעולות נגן המדיה",
          media_player_actions_subtitle: "פקדים נוספים לנגן המדיה שלך.",
          mark_as_favorite: "סימון כמועדף",
          more_info: "מידע נוסף",
          transfer_queue: "העברת התור",
          lyrion_info_title: "פרטי הרצועה",
          related_albums_title: "אלבומים קשורים",
        },
        QueueView: {
          up_next: "הבא בתור",
          up_next_subtitle: "תור ההשמעה הנוכחי",
        },
      },
      MediocreMediaPlayerCard: {
        SpeakerGrouping: {
          grouped_speakers_title: "רמקולים מקובצים",
          link_volume_title: "קישור עוצמת הקול",
          add_speakers_title: "הוספת רמקולים לקבוצה",
        },
        QueueView: { up_next: "הבא בתור" },
      },
      MediocreMassiveMediaPlayerCard: {
        PlayerActions: {
          volume_modal_title: "עוצמת קול",
          speaker_grouping_modal_title: "קיבוץ רמקולים",
          media_browser_modal_title: "דפדפן המדיה",
          search_modal_title: "חיפוש",
          shortcuts_modal_title: "קיצורי דרך",
          queue_view_modal_title: "הבא בתור",
        },
        SpeakerGrouping: { link_volume: "קישור עוצמת הקול" },
      },
      Search: {
        search_provider: { title: "חיפוש באמצעות.." },
        input_placeholder: "חיפוש מדיה...",
        categories: {
          All: "הכול",
          Favorites: "מועדפים",
          Favorite: "מועדף",
          Artists: "אמנים",
          Albums: "אלבומים",
          Tracks: "רצועות",
          Playlists: "רשימות השמעה",
          Podcasts: "פודקאסטים",
          Audiobooks: "ספרי שמע",
          Genres: "ז'אנרים",
          Radio: "רדיו",
        },
        enqueue_mode: {
          title: "מצב הוספה לתור",
          play: "השמעה",
          replace: "החלפת התור",
          next: "הוספה כהבא בתור",
          replace_next: "החלפת הבא בתור",
          add: "הוספה לתור",
        },
        no_results: "לא נמצאו תוצאות.",
      },
      MediaBrowser: {
        breadcrumb_home: "בית",
        filter_placeholder: "סינון תוצאות...",
        empty_text: "אין פריטי מדיה זמינים.",
        media_item_menu: {
          enqueue_dropdown_label: "הוספה לתור",
          enqueue_mode: {
            play: "השמעה",
            next: "השמעה כהבא בתור",
            replace: "החלפת התור",
            add: "הוספה לתור",
          },
          browse: "עיון",
        },
      },
      AdditionalActionsMenu: {
        mark_as_favorite: "סימון כמועדף",
        transfer_queue: "העברת התור",
        select_source: "בחירת מקור",
      },
      LyrionTrackInfo: { empty_state: "אין פרטי רצועה זמינים" },
      player_states: {
        Off: "כבוי",
        Idle: "ממתין",
        Playing: "מנגן",
        Paused: "מושהה",
        Stopped: "נעצר",
        Unavailable: "לא זמין",
      },
    };
  function Es(e, t = "") {
    return Object.keys(e).reduce((r, n) => {
      const i = e[n],
        s = t ? `${t}.${n}` : n;
      return (
        typeof i == "string"
          ? (r[s] = i)
          : typeof i == "object" && i !== null && Object.assign(r, Es(i, s)),
        r
      );
    }, {});
  }
  const Zb = ["en", "da", "pt", "de", "nl", "he"],
    Fa = { en: Wb, da: Hb, pt: Jb, de: Yb, nl: Qb, he: Xb },
    Yd = $t({}),
    e0 = Ue(({ locale: e, children: t }) => {
      const r = R(
        () =>
          Zb.includes(e) ? Object.assign({}, Es(Fa.en), Es(Fa[e])) : Es(Fa.en),
        [e]
      );
      return p(Yd.Provider, { value: { messages: r, locale: e }, children: t });
    }),
    Be = () => {
      const e = de(Yd);
      if (!e.messages)
        throw new Error("useIntl must be used within an IntlContextProvider");
      const t = T(
        ({ id: r, defaultMessage: n }) => e.messages[r] ?? n ?? r,
        [e.messages]
      );
      return R(() => ({ t }), [t]);
    },
    Qd = $t({ player: {} }),
    Is = Ue(({ children: e, entityId: t }) => {
      const r = qe(),
        { t: n } = Be(),
        i = r.states[t],
        s = R(() => {
          const o = i;
          if (!o)
            return {
              player: {
                entity_id: t,
                state: "unavailable",
                attributes: {},
                title: n({ id: "player_states.Unavailable" }),
                subtitle: `${t} unavailable`,
              },
            };
          const { title: a, subtitle: l } = Bb(o);
          return {
            player: {
              ...o,
              title: n({ id: `player_states.${a}`, defaultMessage: a }),
              subtitle: l,
            },
          };
        }, [i, t, n]);
      return p(Qd.Provider, {
        value: s,
        children: typeof e == "function" ? e(s) : e,
      });
    }),
    Me = () => {
      const e = de(Qd);
      if (!e)
        throw new Error(
          "usePlayer must be used within a PlayerContextProvider"
        );
      return e.player;
    },
    t0 = ({
      ma_entity_id: e,
      ma_favorite_button_entity_id: t,
      lms_entity_id: r,
      noSourceSelection: n,
      ...i
    }) => {
      const { t: s } = Be(),
        o = Me(),
        a = R(() => Ms(o?.entity_id, e), [o, e]),
        l = R(() => r && pi(o, r), [o, r]),
        c = T(() => {
          t && V().callService("button", "press", { entity_id: t });
        }, [t]),
        d = T(
          h => {
            e && Kd(e, h);
          },
          [e]
        ),
        u = R(() => {
          const h = [];
          if (e && a) {
            const f = Fd().filter(
              b => b.entity_id !== e && Ss(b) && b.state !== "unavailable"
            );
            (t &&
              h.push({
                label: s({ id: "AdditionalActionsMenu.mark_as_favorite" }),
                icon: "mdi:heart-plus",
                onClick: c,
              }),
              f.length > 0 &&
                h.push({
                  label: s({ id: "AdditionalActionsMenu.transfer_queue" }),
                  icon: "mdi:transfer",
                  children: f.map(b => ({
                    label: b.attributes.friendly_name || b.entity_id,
                    onClick: () => d(b.entity_id),
                  })),
                }));
            const g = o.attributes.media_title,
              m = o.attributes.media_artist,
              _ = o.attributes.media_album_name,
              y = [];
            (g &&
              y.push({
                label: `${s({ id: "AdditionalActionsMenu.song_radio" })}: ${g}`,
                icon: "mdi:music-note",
                onClick: () => or(o.entity_id, e, g, "track"),
              }),
              m &&
                y.push({
                  label: `${s({ id: "AdditionalActionsMenu.artist_radio" })}: ${m}`,
                  icon: "mdi:account-music",
                  onClick: () => or(o.entity_id, e, m, "artist"),
                }),
              _ &&
                y.push({
                  label: `${s({ id: "AdditionalActionsMenu.album_radio" })}: ${_}`,
                  icon: "mdi:album",
                  onClick: () => or(o.entity_id, e, _, "album"),
                }),
              y.length > 0 &&
                h.push({
                  label: s({ id: "AdditionalActionsMenu.start_radio_mix" }),
                  icon: "mdi:radio-tower",
                  children: y,
                }));
          }
          if (r && l) {
            const f = Db().filter(
              g => g.entity_id !== r && g.state !== "unavailable"
            );
            f.length > 0 &&
              h.push({
                label: s({ id: "AdditionalActionsMenu.transfer_queue" }),
                icon: "mdi:transfer",
                children: f.map(g => ({
                  label: g.attributes.friendly_name || g.entity_id,
                  onClick: () => {
                    Ud(r, g.entity_id);
                  },
                })),
              });
          }
          return (
            !n &&
              o.attributes.source_list?.length &&
              o.attributes.source_list?.length > 0 &&
              h.push({
                label: s({ id: "AdditionalActionsMenu.select_source" }),
                icon: "mdi:import",
                children: (o.attributes.source_list ?? []).map(f => ({
                  label: f,
                  onClick: () => {
                    V().callService("media_player", "select_source", {
                      entity_id: o.entity_id,
                      source: f,
                    });
                  },
                })),
              }),
            h
          );
        }, [t, a, l, e, r, c, d, n, o.attributes.source_list, o.entity_id, s]);
      return u.length === 0 ? null : p(ze, { menuItems: u, ...i });
    },
    hi = {
      root: w({
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0px",
        margin: "0px",
        position: "relative",
        overflow: "hidden",
        width: "var(--mmpc-art-width)",
        height: "var(--mmpc-art-height)",
        "&::after": { content: '""', display: "block", paddingBottom: "100%" },
      }),
      contentContainer: w({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }),
      image: w({
        height: "100%",
        aspectRatio: "1 / 1",
        objectFit: "cover",
        borderRadius: "var(--mmpc-art-border-radius, 4px)",
        opacity: 0,
      }),
      imageLoaded: w({ animation: `${Wd} 0.3s ease forwards` }),
      iconContainer: w({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "--icon-primary-color": U.colors.card,
        backgroundColor: U.colors.onCard,
        opacity: 0.5,
        borderRadius: "var(--mmpc-art-border-radius, 4px)",
        height: "100%",
        aspectRatio: "1 / 1",
      }),
    },
    Da = ({
      size: e,
      borderRadius: t = 4,
      iconSize: r,
      renderLongPressIndicator: n,
      ...i
    }) => {
      const s = Me(),
        {
          media_title: o,
          media_artist: a,
          entity_picture: l,
          entity_picture_local: c,
          icon: d,
          device_class: u,
          source: h,
        } = s.attributes,
        f = c || l,
        g = s.state,
        [m, _] = L(!1),
        [y, b] = L(!1),
        [v, k] = L(null),
        x = he(null),
        $ = T((M, C = 0) => {
          if (!M) return (b(!1), _(!1), k(null), null);
          (k(null), _(!1));
          const O = new Image();
          ((O.onerror = () => {
            if (x.current === M) {
              if (C < 2) {
                setTimeout(() => {
                  x.current === M && $(M, C + 1);
                }, 500);
                return;
              }
              _(!0);
            }
          }),
            (O.onloadstart = () => {
              x.current === M && (b(!1), _(!1));
            }),
            (O.onload = () => {
              x.current === M && b(!0);
            }),
            (O.src = V().hassUrl(M)),
            k(O),
            O.complete && (_(!1), b(!0)));
        }, []);
      return (
        Q(() => {
          x.current !== f && ((x.current = f), $(f));
        }, [f, $]),
        P("button", {
          css: hi.root,
          style: {
            "--mmpc-art-border-radius": `${t}px`,
            "--mmpc-art-width": e
              ? typeof e == "string"
                ? e
                : `${e}px`
              : "100%",
            "--mmpc-art-height": e
              ? typeof e == "string"
                ? e
                : `${e}px`
              : "unset",
            ...(typeof e == "number" ? { flexShrink: 0 } : {}),
          },
          ...i,
          children: [
            p("div", {
              css: hi.contentContainer,
              children:
                v?.src && g !== "off" && !m
                  ? p("img", {
                      css: [hi.image, y && hi.imageLoaded],
                      src: v.src,
                      alt: o && a ? `${o} by ${a}` : `Source: ${h}`,
                    })
                  : p("div", {
                      css: hi.iconContainer,
                      children: p(se, {
                        icon:
                          g === "off" || !h
                            ? fi({ icon: d, deviceClass: u })
                            : Cs({ source: h }),
                        size: r,
                      }),
                    }),
            }),
            n && n(),
          ],
        })
      );
    },
    Re = $t(null),
    mi = Ue(({ rootElement: e, config: t, children: r }) => {
      const n = R(() => ({ rootElement: e, config: t }), [e, t]);
      return p(Re.Provider, { value: n, children: r });
    }),
    gi = {
      root: w({
        position: "relative",
        background: "none",
        border: "none",
        display: "flex",
        flex: 0,
        flexDirection: "row",
        height: "32px",
        fontSize: "13px",
        fontWeight: 500,
        lineHeight: "32px",
        padding: "0 12px",
        borderRadius: "16px",
        color: `var(--mmpc-chip-foreground, ${U.colors.card})`,
        backgroundColor: `var(--mmpc-chip-background, ${U.colors.onCard})`,
        "--icon-primary-color": `var(--mmpc-chip-foreground, ${U.colors.card})`,
        borderColor: `var(--mmpc-chip-border, ${U.colors.onCardDivider})`,
        borderStyle: "solid",
        borderWidth: 0,
        marginRight: "5px",
        alignItems: "center",
        gap: "4px",
        textWrap: "nowrap",
        cursor: "pointer",
        "&:hover": { opacity: 0.8 },
        opacity: 1,
        "& ha-icon": { pointerEvents: "none" },
      }),
      rootInvertedColors: w({
        color: `var(--mmpc-chip-background, ${U.colors.onCard})`,
        backgroundColor: `var(--mmpc-chip-foreground, ${U.colors.card})`,
        "--icon-primary-color": `var(--mmpc-chip-background, ${U.colors.onCard})`,
      }),
      rootWithBorder: w({ borderWidth: "1px" }),
      rootSmall: w({
        height: "24px",
        fontSize: "12px",
        lineHeight: "24px",
        padding: "0 8px",
        borderRadius: "12px",
      }),
      rootLoading: w({ opacity: 0.8 }),
    },
    Ye = Lt(
      (
        {
          loading: e,
          icon: t,
          iconPosition: r = "left",
          size: n = "medium",
          invertedColors: i = !1,
          border: s = !1,
          children: o,
          ...a
        },
        l
      ) => {
        const c = () => {
          if (e) return p(lr, { size: "x-small" });
          if (t) return p(se, { size: "x-small", icon: t });
        };
        return P("button", {
          css: [
            gi.root,
            n === "small" && gi.rootSmall,
            i && gi.rootInvertedColors,
            s && gi.rootWithBorder,
            e && gi.rootLoading,
          ],
          ...a,
          ref: l,
          children: [r === "left" && c(), o, r === "right" && c()],
        });
      }
    );
  var za;
  (za =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : void 0) != null &&
    za.__PREACT_DEVTOOLS__ &&
    za.__PREACT_DEVTOOLS__.attachPreact("10.29.1", B, {
      Fragment: Y,
      Component: Qe,
    });
  var Xd = {};
  function Vt(e) {
    return e.type === Y
      ? "Fragment"
      : typeof e.type == "function"
        ? e.type.displayName || e.type.name
        : typeof e.type == "string"
          ? e.type
          : "#text";
  }
  var _i = [],
    kn = [];
  function Zd() {
    return _i.length > 0 ? _i[_i.length - 1] : null;
  }
  var ef = !0;
  function Ba(e) {
    return typeof e.type == "function" && e.type != Y;
  }
  function Ve(e) {
    for (var t = [e], r = e; r.__o != null; ) (t.push(r.__o), (r = r.__o));
    return t.reduce(function (n, i) {
      n += "  in " + Vt(i);
      var s = i.__source;
      return (
        s
          ? (n += " (at " + s.fileName + ":" + s.lineNumber + ")")
          : ef &&
            console.warn(
              "Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons."
            ),
        (ef = !1),
        n +
          `
`
      );
    }, "");
  }
  var r0 = typeof WeakMap == "function";
  function Va(e) {
    var t = [];
    return (
      e.__k &&
        e.__k.forEach(function (r) {
          r && typeof r.type == "function"
            ? t.push.apply(t, Va(r))
            : r && typeof r.type == "string" && t.push(r.type);
        }),
      t
    );
  }
  function tf(e) {
    return e
      ? typeof e.type == "function"
        ? e.__ == null
          ? e.__e != null && e.__e.parentNode != null
            ? e.__e.parentNode.localName
            : ""
          : tf(e.__)
        : e.type
      : "";
  }
  var n0 = Qe.prototype.setState;
  function qa(e) {
    return (
      e === "table" ||
      e === "tfoot" ||
      e === "tbody" ||
      e === "thead" ||
      e === "td" ||
      e === "tr" ||
      e === "th"
    );
  }
  Qe.prototype.setState = function (e, t) {
    return (
      this.__v == null &&
        this.state == null &&
        console.warn(
          `Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.

` + Ve(Zd())
        ),
      n0.call(this, e, t)
    );
  };
  var i0 =
      /^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/,
    s0 = Qe.prototype.forceUpdate;
  function _t(e) {
    var t = e.props,
      r = Vt(e),
      n = "";
    for (var i in t)
      if (t.hasOwnProperty(i) && i !== "children") {
        var s = t[i];
        (typeof s == "function" &&
          (s = "function " + (s.displayName || s.name) + "() {}"),
          (s =
            Object(s) !== s || s.toString
              ? s + ""
              : Object.prototype.toString.call(s)),
          (n += " " + i + "=" + JSON.stringify(s)));
      }
    var o = t.children;
    return "<" + r + n + (o && o.length ? ">..</" + r + ">" : " />");
  }
  ((Qe.prototype.forceUpdate = function (e) {
    return (
      this.__v == null
        ? console.warn(
            `Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.

` + Ve(Zd())
          )
        : this.__P == null &&
          console.warn(
            `Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + Ve(this.__v)
          ),
      s0.call(this, e)
    );
  }),
    (B.__m = function (e, t) {
      var r = e.type,
        n = t
          .map(function (i) {
            return i && i.localName;
          })
          .filter(Boolean);
      console.error(
        'Expected a DOM node of type "' +
          r +
          '" but found "' +
          n.join(", ") +
          `" as available DOM-node(s), this is caused by the SSR'd HTML containing different DOM-nodes compared to the hydrated one.

` +
          Ve(e)
      );
    }),
    (function () {
      (function () {
        var m = B.__b,
          _ = B.diffed,
          y = B.__,
          b = B.vnode,
          v = B.__r;
        ((B.diffed = function (k) {
          (Ba(k) && kn.pop(), _i.pop(), _ && _(k));
        }),
          (B.__b = function (k) {
            (Ba(k) && _i.push(k), m && m(k));
          }),
          (B.__ = function (k, x) {
            ((kn = []), y && y(k, x));
          }),
          (B.vnode = function (k) {
            ((k.__o = kn.length > 0 ? kn[kn.length - 1] : null), b && b(k));
          }),
          (B.__r = function (k) {
            (Ba(k) && kn.push(k), v && v(k));
          }));
      })();
      var e = !1,
        t = B.__b,
        r = B.diffed,
        n = B.vnode,
        i = B.__r,
        s = B.__e,
        o = B.__,
        a = B.__h,
        l = r0
          ? {
              useEffect: new WeakMap(),
              useLayoutEffect: new WeakMap(),
              lazyPropTypes: new WeakMap(),
            }
          : null,
        c = [];
      ((B.__e = function (m, _, y, b) {
        if (_ && _.__c && typeof m.then == "function") {
          var v = m;
          m = new Error(
            "Missing Suspense. The throwing component was: " + Vt(_)
          );
          for (var k = _; k; k = k.__)
            if (k.__c && k.__c.__c) {
              m = v;
              break;
            }
          if (m instanceof Error) throw m;
        }
        try {
          (((b = b || {}).componentStack = Ve(_)),
            s(m, _, y, b),
            typeof m.then != "function" &&
              setTimeout(function () {
                throw m;
              }));
        } catch (x) {
          throw x;
        }
      }),
        (B.__ = function (m, _) {
          if (!_)
            throw new Error(`Undefined parent passed to render(), this is the second argument.
Check if the element is available in the DOM/has the correct id.`);
          var y;
          switch (_.nodeType) {
            case 1:
            case 11:
            case 9:
              y = !0;
              break;
            default:
              y = !1;
          }
          if (!y) {
            var b = Vt(m);
            throw new Error(
              "Expected a valid HTML node as a second argument to render.	Received " +
                _ +
                " instead: render(<" +
                b +
                " />, " +
                _ +
                ");"
            );
          }
          o && o(m, _);
        }),
        (B.__b = function (m) {
          var _ = m.type;
          if (((e = !0), _ === void 0))
            throw new Error(
              `Undefined component passed to createElement()

You likely forgot to export your component or might have mixed up default and named imports` +
                _t(m) +
                `

` +
                Ve(m)
            );
          if (_ != null && typeof _ == "object")
            throw _.__k !== void 0 && _.__e !== void 0
              ? new Error(
                  "Invalid type passed to createElement(): " +
                    _ +
                    `

Did you accidentally pass a JSX literal as JSX twice?

  let My` +
                    Vt(m) +
                    " = " +
                    _t(_) +
                    `;
  let vnode = <My` +
                    Vt(m) +
                    ` />;

This usually happens when you export a JSX literal and not the component.

` +
                    Ve(m)
                )
              : new Error(
                  "Invalid type passed to createElement(): " +
                    (Array.isArray(_) ? "array" : _)
                );
          if (
            m.ref !== void 0 &&
            typeof m.ref != "function" &&
            typeof m.ref != "object" &&
            !("$$typeof" in m)
          )
            throw new Error(
              `Component's "ref" property should be a function, or an object created by createRef(), but got [` +
                typeof m.ref +
                `] instead
` +
                _t(m) +
                `

` +
                Ve(m)
            );
          if (typeof m.type == "string") {
            for (var y in m.props)
              if (
                y[0] === "o" &&
                y[1] === "n" &&
                typeof m.props[y] != "function" &&
                m.props[y] != null
              )
                throw new Error(
                  `Component's "` +
                    y +
                    '" property should be a function, but got [' +
                    typeof m.props[y] +
                    `] instead
` +
                    _t(m) +
                    `

` +
                    Ve(m)
                );
          }
          if (typeof m.type == "function" && m.type.propTypes) {
            if (
              m.type.displayName === "Lazy" &&
              l &&
              !l.lazyPropTypes.has(m.type)
            ) {
              var b =
                "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
              try {
                var v = m.type();
                (l.lazyPropTypes.set(m.type, !0),
                  console.warn(b + "Component wrapped in lazy() is " + Vt(v)));
              } catch {
                console.warn(
                  b +
                    "We will log the wrapped component's name once it is loaded."
                );
              }
            }
            var k = m.props;
            (m.type.__f &&
              delete (k = (function (x, $) {
                for (var M in $) x[M] = $[M];
                return x;
              })({}, k)).ref,
              (function (x, $, M, C, O) {
                Object.keys(x).forEach(function (E) {
                  var A;
                  try {
                    A = x[E](
                      $,
                      E,
                      C,
                      "prop",
                      null,
                      "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                    );
                  } catch (S) {
                    A = S;
                  }
                  A &&
                    !(A.message in Xd) &&
                    ((Xd[A.message] = !0),
                    console.error(
                      "Failed prop type: " +
                        A.message +
                        ((O &&
                          `
` + O()) ||
                          "")
                    ));
                });
              })(m.type.propTypes, k, 0, Vt(m), function () {
                return Ve(m);
              }));
          }
          t && t(m);
        }));
      var d,
        u = 0;
      ((B.__r = function (m) {
        (i && i(m), (e = !0));
        var _ = m.__c;
        if ((_ === d ? u++ : (u = 1), u >= 25))
          throw new Error(
            "Too many re-renders. This is limited to prevent an infinite loop which may lock up your browser. The component causing this is: " +
              Vt(m)
          );
        d = _;
      }),
        (B.__h = function (m, _, y) {
          if (!m || !e)
            throw new Error("Hook can only be invoked from render methods.");
          a && a(m, _, y);
        }));
      var h = function (m, _) {
          return {
            get: function () {
              var y = "get" + m + _;
              c &&
                c.indexOf(y) < 0 &&
                (c.push(y),
                console.warn("getting vnode." + m + " is deprecated, " + _));
            },
            set: function () {
              var y = "set" + m + _;
              c &&
                c.indexOf(y) < 0 &&
                (c.push(y),
                console.warn("setting vnode." + m + " is not allowed, " + _));
            },
          };
        },
        f = {
          nodeName: h("nodeName", "use vnode.type"),
          attributes: h("attributes", "use vnode.props"),
          children: h("children", "use vnode.props.children"),
        },
        g = Object.create({}, f);
      ((B.vnode = function (m) {
        var _ = m.props;
        if (
          m.type !== null &&
          _ != null &&
          ("__source" in _ || "__self" in _)
        ) {
          var y = (m.props = {});
          for (var b in _) {
            var v = _[b];
            b === "__source"
              ? (m.__source = v)
              : b === "__self"
                ? (m.__self = v)
                : (y[b] = v);
          }
        }
        ((m.__proto__ = g), n && n(m));
      }),
        (B.diffed = function (m) {
          var _,
            y = m.type,
            b = m.__;
          if (
            (m.__k &&
              m.__k.forEach(function (q) {
                if (typeof q == "object" && q && q.type === void 0) {
                  var te = Object.keys(q).join(",");
                  throw new Error(
                    "Objects are not valid as a child. Encountered an object with the keys {" +
                      te +
                      `}.

` +
                      Ve(m)
                  );
                }
              }),
            m.__c === d && (u = 0),
            typeof y == "string" &&
              (qa(y) || y === "p" || y === "a" || y === "button"))
          ) {
            var v = tf(b);
            if (v !== "" && qa(y))
              y === "table" && v !== "td" && qa(v)
                ? console.error(
                    "Improper nesting of table. Your <table> should not have a table-node parent." +
                      _t(m) +
                      `

` +
                      Ve(m)
                  )
                : (y !== "thead" && y !== "tfoot" && y !== "tbody") ||
                    v === "table"
                  ? y === "tr" &&
                    v !== "thead" &&
                    v !== "tfoot" &&
                    v !== "tbody"
                    ? console.error(
                        "Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot> parent." +
                          _t(m) +
                          `

` +
                          Ve(m)
                      )
                    : y === "td" && v !== "tr"
                      ? console.error(
                          "Improper nesting of table. Your <td> should have a <tr> parent." +
                            _t(m) +
                            `

` +
                            Ve(m)
                        )
                      : y === "th" &&
                        v !== "tr" &&
                        console.error(
                          "Improper nesting of table. Your <th> should have a <tr>." +
                            _t(m) +
                            `

` +
                            Ve(m)
                        )
                  : console.error(
                      "Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." +
                        _t(m) +
                        `

` +
                        Ve(m)
                    );
            else if (y === "p") {
              var k = Va(m).filter(function (q) {
                return i0.test(q);
              });
              k.length &&
                console.error(
                  "Improper nesting of paragraph. Your <p> should not have " +
                    k.join(", ") +
                    " as child-elements." +
                    _t(m) +
                    `

` +
                    Ve(m)
                );
            } else
              (y !== "a" && y !== "button") ||
                (Va(m).indexOf(y) !== -1 &&
                  console.error(
                    "Improper nesting of interactive content. Your <" +
                      y +
                      "> should not have other " +
                      (y === "a" ? "anchor" : "button") +
                      " tags as child-elements." +
                      _t(m) +
                      `

` +
                      Ve(m)
                  ));
          }
          if (((e = !1), r && r(m), m.__k != null))
            for (var x = [], $ = 0; $ < m.__k.length; $++) {
              var M = m.__k[$];
              if (M && M.key != null) {
                var C = M.key;
                if (x.indexOf(C) !== -1) {
                  console.error(
                    'Following component has two or more children with the same key attribute: "' +
                      C +
                      `". This may cause glitches and misbehavior in rendering process. Component: 

` +
                      _t(m) +
                      `

` +
                      Ve(m)
                  );
                  break;
                }
                x.push(C);
              }
            }
          if (m.__c != null && m.__c.__H != null) {
            var O = m.__c.__H.__;
            if (O)
              for (var E = 0; E < O.length; E += 1) {
                var A = O[E];
                if (A.__H) {
                  for (var S = 0; S < A.__H.length; S++)
                    if ((_ = A.__H[S]) != _) {
                      var I = Vt(m);
                      console.warn(
                        "Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index " +
                          E +
                          " in component " +
                          I +
                          " was called with NaN."
                      );
                    }
                }
              }
          }
        }));
    })());
  const rf = Ue(({ rootElement: e, children: t }) => {
      const [r] = L(() => Iu({ key: "mmpc", container: e, speedy: !1 }));
      return p(R_, { value: r, children: t });
    }),
    o0 = () => [
      { name: "tap_action", label: "Tap Action", selector: { ui_action: {} } },
      {
        name: "hold_action",
        label: "Hold Action",
        selector: { ui_action: {} },
      },
      {
        name: "double_tap_action",
        label: "Double Tap Action",
        selector: { ui_action: {} },
      },
    ],
    a0 = ({ hass: e, value: t, onChange: r, disabled: n = !1 }) => {
      const i = he(null),
        s = R(() => (t ? { ...t } : { action: "none" }), [t]),
        o = T(
          a => {
            const c = a.detail.value;
            r(c);
          },
          [r]
        );
      return (
        Q(() => {
          const a = i.current;
          return (
            a && a.addEventListener("value-changed", o),
            () => {
              a && a.removeEventListener("value-changed", o);
            }
          );
        }, [o]),
        p("ha-form", {
          ref: i,
          hass: e,
          data: s,
          schema: o0(),
          computeLabel: a => a.label || a.name,
          disabled: n,
        })
      );
    },
    Mr = {
      formGroup: w({
        marginBottom: "16px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }),
      label: w({ display: "block", marginBottom: "16px", fontWeight: 500 }),
      buttonsContainer: w({ display: "flex", flexDirection: "column" }),
      button: w({ alignSelf: "flex-start" }),
      inputGroup: w({
        display: "flex",
        flexDirection: "column",
        marginBottom: "16px",
      }),
      toggleContainer: w({ display: "flex", alignItems: "center" }),
      toggleLabel: w({ marginLeft: "8px", fontWeight: "normal" }),
      toggle: w({ cursor: "pointer" }),
      errorMessage: w({
        color: "var(--error-color, #ff5252)",
        marginTop: "8px",
        fontSize: "14px",
      }),
    },
    qt = e => p("div", { css: Mr.formGroup, ...e }),
    yi = e => p("label", { css: Mr.label, ...e }),
    bi = ({
      children: e,
      size: t = "small",
      variant: r = "brand",
      appearance: n = "accent",
      onClick: i,
    }) =>
      p("ha-button", {
        variant: r,
        appearance: n,
        size: t,
        css: Mr.button,
        onClick: i,
        children: e,
      }),
    l0 = e => p("div", { css: Mr.inputGroup, ...e }),
    c0 = e => p("div", { css: Mr.toggleContainer, ...e }),
    u0 = e => p("label", { css: Mr.toggleLabel, ...e }),
    d0 = e => p("input", { type: "checkbox", css: Mr.toggle, ...e }),
    ja = e => p("div", { css: Mr.errorMessage, ...e }),
    Sn = e => {
      const {
          hass: t,
          value: r,
          onChange: n,
          label: i,
          domains: s,
          required: o = !1,
          disabled: a = !1,
          allowCustomEntity: l = !1,
          error: c,
        } = e,
        d = he(null),
        u = T(
          h => {
            const g = h.detail.value;
            n(g);
          },
          [n]
        );
      return (
        Q(() => {
          const h = d.current;
          return (
            h && h.addEventListener("value-changed", u),
            () => {
              h && h.removeEventListener("value-changed", u);
            }
          );
        }, [u]),
        P("div", {
          children: [
            p("ha-entity-picker", {
              ref: d,
              hass: t,
              value: r,
              label: i,
              includeDomains: s,
              disabled: a,
              required: o,
              "allow-custom-entity": l,
            }),
            !!c && p(ja, { children: c }),
          ],
        })
      );
    },
    f0 = { root: w({ display: "flex", flexDirection: "column" }) },
    vi = ({
      hass: e,
      value: t,
      onChange: r,
      label: n,
      error: i,
      required: s = !1,
      disabled: o = !1,
      isIconInput: a = !1,
    }) => {
      const l = T(
          d => {
            r(d.detail.value);
          },
          [r]
        ),
        c = () =>
          a
            ? p("ha-icon-picker", {
                label: n || "Icon",
                hass: e,
                value: t,
                disabled: o,
                required: s,
                "onvalue-changed": l,
              })
            : p("ha-textfield", {
                label: n || "Text",
                value: t,
                disabled: o,
                required: s,
                onchange: d => r(d.target.value),
              });
      return P("div", {
        css: f0.root,
        children: [c(), !!i && p(ja, { children: i })],
      });
    },
    nf = {
      root: w({ display: "flex", flexDirection: "column", gap: "8px" }),
      entityPickedWrap: w({
        display: "grid",
        gridTemplateColumns: "auto auto",
        gap: "8px",
      }),
    },
    p0 = ({
      hass: e,
      value: t,
      onChange: r,
      label: n,
      domains: i,
      disabled: s = !1,
      allowCustomEntity: o = !1,
    }) => {
      const a = R(
          () =>
            (t?.filter(Boolean) || []).map(h =>
              typeof h == "string" ? { entity: h, name: null } : h
            ),
          [t]
        ),
        l = T(
          u => {
            r(
              u?.map(h =>
                typeof h == "string"
                  ? h
                  : h.name
                    ? { entity: h.entity, name: h.name }
                    : h.entity
              )
            );
          },
          [r]
        ),
        c = T(
          (u, h) => {
            const f = [...a];
            (!u && h < a.length
              ? f.splice(h, 1)
              : h < a.length
                ? (f[h].entity = u || "")
                : u && f.push({ entity: u, name: null }),
              l(f.filter(Boolean)));
          },
          [a, l]
        ),
        d = T(
          (u, h) => {
            const f = [...a];
            h < a.length && ((f[h].name = u || null), l(f.filter(Boolean)));
          },
          [a, l]
        );
      return P("div", {
        css: nf.root,
        className: "entities-picker",
        children: [
          n && p("label", { children: n }),
          a.map((u, h) =>
            P(
              "div",
              {
                css: nf.entityPickedWrap,
                children: [
                  p(vi, {
                    value: u.name ?? "",
                    onChange: f => d(f, h),
                    disabled: s,
                    label: "Name",
                  }),
                  p(Sn, {
                    hass: e,
                    value: u.entity,
                    onChange: f => c(f, h),
                    domains: i,
                    disabled: s,
                    required: !1,
                    allowCustomEntity: o,
                  }),
                ],
              },
              `entity-${h}`
            )
          ),
          p(
            Sn,
            {
              hass: e,
              value: "",
              onChange: u => c(u, a.length),
              domains: i,
              disabled: s,
              required: !1,
              allowCustomEntity: o,
            },
            "entity-new"
          ),
        ],
      });
    },
    wi = ({ options: e, onSelected: t, selected: r }) =>
      p("select", {
        value: r,
        onChange: n => t(n.target.value),
        children: e.map(n =>
          p("option", { value: n.value, children: n.name }, n.value)
        ),
      }),
    sf = ({ hass: e, value: t = {}, onChange: r }) =>
      p(a0, { hass: e, value: t, onChange: r }),
    h0 = ({ children: e }) => {
      const [t, r] = L(!1);
      return (
        Q(() => {
          customElements
            .get("hui-glance-card")
            .getConfigElement()
            .then(() => {
              r(!0);
            });
        }, []),
        t ? e : null
      );
    },
    of = {
      root: w({
        display: "flex",
        flexDirection: "row",
        gap: "2px",
        justifyContent: "flex-start",
        overflowX: "auto",
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "&::-webkit-scrollbar": { display: "none" },
      }),
      speakerChip: w({
        "&:first-child": {
          marginLeft: "var(--mmpc-chip-horizontal-margin, 0px)",
        },
        "&:last-child": {
          marginRight: "var(--mmpc-chip-horizontal-margin, 0px)",
        },
      }),
    },
    Ua = ({ config: e, showGrouped: t, layout: r }) => {
      const n = qe(),
        { entity_id: i, speaker_group: s } = e,
        [o, a] = L([]),
        l = s?.entity_id || i,
        c = n.states[l],
        d = R(() => {
          if (!s?.entities?.length) return [];
          const f = g => (typeof g == "string" ? g : g.entity);
          return s.entities
            .filter(g => f(g) !== l)
            .filter(g => n.states[f(g)])
            .map(g => ({
              entity_id: f(g),
              name:
                typeof g != "string" && g.name
                  ? g.name
                  : (n.states[f(g)].attributes.friendly_name ?? f(g)),
              volume: n.states[f(g)].attributes.volume_level || 0,
              muted: n.states[f(g)].attributes.is_volume_muted || !1,
              isGrouped: c?.attributes?.group_members?.includes(f(g)) || !1,
            }))
            .filter(g => (t ? !0 : !g.isGrouped))
            .sort((g, m) =>
              g.entity_id === l
                ? -1
                : m.entity_id === l
                  ? 1
                  : g.name.localeCompare(m.name)
            )
            .sort((g, m) =>
              g.isGrouped && !m.isGrouped
                ? -1
                : !g.isGrouped && m.isGrouped
                  ? 1
                  : 0
            );
        }, [n.states, s, t, l, c]),
        u = T(
          async f => {
            const g = (c?.attributes?.group_members || []).filter(m => m !== l);
            await n.callService("media_player", "join", {
              entity_id: l,
              group_members: [f, ...g],
            });
          },
          [n, l, c]
        ),
        h = T(
          async (f, g, m = 0) => {
            if (!o.includes(f)) {
              a(_ => [..._, f]);
              try {
                const _ = n.states[f];
                g
                  ? await n.callService("media_player", "unjoin", {
                      entity_id: f,
                    })
                  : (_.state === "off" &&
                      (await n.callService("media_player", "turn_on", {
                        entity_id: f,
                      })),
                    await u(f));
              } catch (_) {
                (console.error(_),
                  m < 1 && setTimeout(() => h(f, g, m + 1), 1e3));
              }
              a(_ => _.filter(y => y !== f));
            }
          },
          [o, n, u]
        );
      return p("div", {
        css: of.root,
        id: "mmpc-group-chips-controller",
        children: d.map(f =>
          p(
            Ye,
            {
              css: of.speakerChip,
              loading: o.includes(f.entity_id),
              onClick: () => h(f.entity_id, f.isGrouped),
              icon: f.isGrouped ? "mdi:close" : "mdi:plus",
              iconPosition: "right",
              style: {
                "--mmpc-chip-horizontal-margin": `${r?.horizontalMargin ?? 0}px`,
              },
              children: f.name,
            },
            f.entity_id
          )
        ),
      });
    },
    ar = {
      speakersTable: w({
        width: "100%",
        borderCollapse: "collapse",
        tableLayout: "fixed",
      }),
      speakerRow: w({ width: "100%", height: "32px" }),
      nameCell: w({
        color: U.colors.onCard,
        paddingRight: "8px",
        fontSize: "14px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }),
      nameCellMainSpeaker: w({ fontWeight: 500 }),
      controlsCell: w({ padding: "0px 4px" }),
      buttonCell: w({ width: "28px", whiteSpace: "nowrap" }),
      controlsContainer: w({
        display: "flex",
        alignItems: "center",
        width: "100%",
      }),
    },
    af = ({ config: e, syncMainSpeaker: t, className: r }) => {
      const { speaker_group: n, entity_id: i } = e,
        s = qe(),
        [o, a] = L([]),
        l = n?.entity_id || i,
        c = s.states[l],
        d = R(() => {
          if (!n?.entities?.length && !c) return [];
          const _ = [...(n?.entities || [])];
          c &&
            !_.find(b => (typeof b == "string" ? b : b.entity) === l) &&
            _.push(l);
          const y = b => (typeof b == "string" ? b : b.entity);
          return _.filter(b => s.states[y(b)])
            .map(b => ({
              entity_id: y(b),
              name:
                typeof b != "string" && b.name
                  ? b.name
                  : (s.states[y(b)].attributes.friendly_name ?? y(b)),
              volume: s.states[y(b)].attributes.volume_level || 0,
              muted: s.states[y(b)].attributes.is_volume_muted || !1,
              isOff: s.states[y(b)].state === "off",
              isGrouped: c?.attributes?.group_members?.includes(y(b)) || !1,
              isMainSpeaker: c?.attributes?.group_members?.[0] === y(b) || !1,
            }))
            .sort((b, v) =>
              b.entity_id === l
                ? -1
                : v.entity_id === l
                  ? 1
                  : b.name.localeCompare(v.name)
            );
        }, [s.states, n, l, c]),
        u = T(
          async _ => {
            const y = (c?.attributes?.group_members || []).filter(b => b !== l);
            await s.callService("media_player", "join", {
              entity_id: l,
              group_members: [_, ...y],
            });
          },
          [s, l, c]
        ),
        h = T(
          async (_, y, b = 0) => {
            if (!o.includes(_)) {
              a(v => [...v, _]);
              try {
                const v = s.states[_];
                y
                  ? await s.callService("media_player", "unjoin", {
                      entity_id: _,
                    })
                  : (v.state === "off" &&
                      (await s.callService("media_player", "turn_on", {
                        entity_id: _,
                      })),
                    await u(_));
              } catch (v) {
                (console.error(v),
                  b < 1 && setTimeout(() => h(_, y, b + 1), 1e3));
              }
              a(v => v.filter(k => k !== _));
            }
          },
          [o, s, u]
        ),
        f = T((_, y) => {
          V().callService("media_player", "volume_mute", {
            entity_id: _,
            is_volume_muted: !y,
          });
        }, []),
        g = T(_ => {
          V().callService("media_player", "turn_on", { entity_id: _ });
        }, []),
        m = (_, y, b) => {
          const {
              entity_id: v,
              name: k,
              volume: x,
              muted: $,
              isGrouped: M,
              isMainSpeaker: C,
              isOff: O,
            } = _,
            A = o.includes(v) || (C && !M);
          return P(
            "tr",
            {
              css: ar.speakerRow,
              children: [
                p("td", {
                  css: [ar.nameCell, C && ar.nameCellMainSpeaker],
                  children: k,
                }),
                O
                  ? p("td", {
                      css: ar.buttonCell,
                      children: p(W, {
                        size: "x-small",
                        onClick: () => g(v),
                        icon: "mdi:power",
                        disabled: A,
                      }),
                    })
                  : p("td", {
                      css: ar.buttonCell,
                      children: p(W, {
                        size: "x-small",
                        onClick: () => f(v, $),
                        icon: $s(x, $),
                      }),
                    }),
                p("td", {
                  css: ar.controlsCell,
                  children: p("div", {
                    css: ar.controlsContainer,
                    children: p(gc, {
                      entityId: v,
                      syncGroupChildren: C && t,
                      sliderSize: "small",
                      showStepButtons:
                        e.options?.show_volume_step_buttons ?? !1,
                      useVolumeUpDownForSteps:
                        e.options?.use_volume_up_down_for_step_buttons ?? !1,
                    }),
                  }),
                }),
                p("td", {
                  css: ar.buttonCell,
                  children: p(W, {
                    size: "x-small",
                    onClick: () => h(v, M),
                    icon: M ? "mdi:close" : "mdi:plus",
                    disabled: A,
                  }),
                }),
              ],
            },
            v
          );
        };
      return p("div", {
        className: r,
        children: p("table", {
          css: ar.speakersTable,
          children: p("tbody", {
            children: d.filter(_ => _.isGrouped).map((_, y, b) => m(_)),
          }),
        }),
      });
    },
    Ps = {
      root: w({
        position: "relative",
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        transition: "background-color 0.2s",
        padding: 4,
        minWidth: "var(--mmpc-icon-button-size)",
        minHeight: "var(--mmpc-icon-button-size)",
        aspectRatio: "1",
        color: U.colors.onCard,
        touchAction: "manipulation",
        "-webkit-tap-highlight-color": "transparent",
        "@media (hover: hover)": {
          "&:hover": {
            backgroundColor: "var(--divider-color, rgba(0, 0, 0, 0.2))",
          },
          "&:active": {
            backgroundColor: "var(--divider-color, rgba(0, 0, 0, 0.1))",
          },
        },
        "> ha-icon": {
          "--mdc-icon-size": "var(--mmpc-icon-button-size)",
          width: "var(--mmpc-icon-button-size)",
          display: "flex",
          pointerEvents: "none",
        },
      }),
      rootSelected: w({
        backgroundColor: "var(--divider-color, rgba(0, 0, 0, 0.1))",
        margin: -4,
        padding: 8,
      }),
      rootDisabled: w({
        cursor: "not-allowed",
        color: "var(--disabled-text-color, #999)",
        opacity: 0.5,
      }),
      rootXxsmall: w({ padding: 0 }),
    },
    W = Lt(
      (
        {
          icon: e,
          size: t = "medium",
          disabled: r = !1,
          loading: n = !1,
          selected: i = !1,
          style: s = {},
          className: o,
          renderLongPressIndicator: a,
          ...l
        },
        c
      ) =>
        P("button", {
          disabled: r,
          css: [
            Ps.root,
            r && Ps.rootDisabled,
            t === "xx-small" && Ps.rootXxsmall,
            i && Ps.rootSelected,
          ],
          style: {
            "--mmpc-icon-button-size": `${m0(t)}px`,
            ...(typeof s == "object" ? s : {}),
          },
          className: o,
          ...l,
          ref: c,
          children: [
            n ? p(lr, { size: t }) : p("ha-icon", { icon: e }),
            a && a(),
          ],
        })
    ),
    m0 = e => {
      switch (e) {
        case "xxx-small":
          return 8;
        case "xx-small":
          return 12;
        case "x-small":
          return 18;
        case "small":
          return 24;
        case "medium":
          return 32;
        case "large":
          return 48;
        case "x-large":
          return 80;
        case "xx-large":
          return 120;
      }
    };
  var pt = (e => (
      (e.Favorites = "favorites"),
      (e.Artists = "artists"),
      (e.Albums = "albums"),
      (e.Tracks = "tracks"),
      (e.Playlists = "playlists"),
      (e.Genres = "genres"),
      (e.NewMusic = "new music"),
      (e.AlbumArtists = "album artists"),
      (e.Apps = "apps"),
      (e.Radios = "radios"),
      (e.App = "app"),
      (e.Track = "track"),
      e
    ))(pt || {}),
    yt = (e => (
      (e.Track = "track"),
      (e.Artist = "artist"),
      (e.Album = "album"),
      (e.Playlist = "playlist"),
      (e.Genre = "genre"),
      (e.Music = "music"),
      (e.Podcast = "podcast"),
      (e.App = "app"),
      (e.Directory = "directory"),
      e
    ))(yt || {});
  const it = e => {
      switch (e) {
        case "play":
          return "mdi:play-circle";
        case "replace":
          return "mdi:playlist-remove";
        case "next":
          return "mdi:playlist-play";
        case "add":
          return "mdi:playlist-plus";
        default:
          return "mdi:play-circle";
      }
    },
    Cr = e => {
      if (e.thumbnail) return null;
      switch (e.media_content_type) {
        case pt.Albums:
          return "mdi:album";
        case pt.Artists:
          return "mdi:account-music";
        case pt.Tracks:
          return "mdi:music-note";
        case pt.Playlists:
          return "mdi:playlist-music";
        case pt.Genres:
          return "mdi:music-box-multiple";
        case pt.App:
          return "mdi:application";
        case pt.Favorites:
          return "mdi:star";
        case pt.NewMusic:
        case pt.AlbumArtists:
        case pt.Radios:
      }
      switch (e.children_media_class ?? e.media_class) {
        case yt.Album:
          return "mdi:album";
        case yt.Artist:
          return "mdi:account-music";
        case yt.Track:
          return "mdi:music-note";
        case yt.Playlist:
          return "mdi:playlist-music";
        case yt.Genre:
          return "mdi:music-box-multiple";
        case yt.App:
          return "mdi:application";
        case yt.Music:
          return "mdi:music";
        case yt.Podcast:
          return "mdi:podcast";
        case yt.Directory:
          return "mdi:folder";
        default:
          return "mdi:folder";
      }
    },
    It = {
      header: w({ marginBottom: 16 }),
      navigationBar: w({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "8px 16px",
        color: "var(--primary-text-color, #fff)",
        borderBottom: "0.5px solid var(--divider-color, rgba(0, 0, 0, 0.12))",
      }),
      breadCrumbs: w({
        display: "flex",
        flexWrap: "wrap",
        gap: "4px",
        alignItems: "center",
        overflowX: "auto",
        maxWidth: "calc(100% - 40px)",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }),
      breadCrumbItem: w({
        background: "none",
        border: "none",
        color: "var(--primary-text-color, #fff)",
        cursor: "pointer",
        padding: "2px 4px",
        whiteSpace: "nowrap",
        fontSize: "0.9rem",
        "&:hover": { textDecoration: "underline" },
      }),
      breadCrumbSeparator: w({ color: "var(--secondary-text-color)" }),
      noMediaText: w({
        padding: "16px",
        paddingBottom: "32px",
        color: "var(--secondary-text-color)",
        textAlign: "center",
      }),
      itemFilter: w({ marginTop: "8px", marginBottom: "16px" }),
      mediaBrowserEntrySelector: w({ marginLeft: "auto" }),
      mediaItemHeaderMenuImage: w({
        width: 16,
        height: 16,
        borderRadius: 8,
        marginRight: 2,
        marginLeft: -4,
      }),
    },
    g0 = ({
      selectMediaBrowserMenuItems: e,
      selectedMediaBrowser: t,
      horizontalPadding: r,
      maxHeight: n,
      renderHeader: i,
    }) => {
      const { t: s } = Be(),
        o = t.entity_id,
        [a, l] = L([]),
        [c, d] = L([]),
        [u, h] = L(!1),
        [f, g] = L(4),
        [m, _] = L(""),
        { items: y, hasNoArtwork: b } = R(() => {
          let S = !0;
          const I = [],
            q = { track: [], expandable: [] };
          return (
            (m === ""
              ? a
              : a.filter(Se => Se.title.toLowerCase().includes(m.toLowerCase()))
            ).forEach(Se => {
              typeof Se.thumbnail == "string" && (S = !1);
              const xe =
                (Se.media_content_type === pt.Tracks ||
                  Se.media_class === yt.Track) &&
                Se.media_content_type !== "favorite" &&
                c.length !== 0
                  ? "track"
                  : "expandable";
              (q[xe] || (q[xe] = []), q[xe].push(Se));
            }),
            Object.entries(q).forEach(([Se, we]) => {
              if (Se === "track" && c.length !== 0)
                we.forEach(xe => {
                  I.push([xe]);
                });
              else
                for (let xe = 0; xe < we.length; xe += f) {
                  const kt = we.slice(xe, xe + f);
                  I.push(kt);
                }
            }),
            { items: I, hasNoArtwork: S }
          );
        }, [a, f, m, c.length]);
      Q(() => {
        (_(""),
          (async () => {
            h(!0);
            try {
              const q = await V().callWS({
                type: "media_player/browse_media",
                entity_id: o,
                ...(c.length > 0
                  ? {
                      media_content_id: c[c.length - 1].media_content_id,
                      media_content_type: c[c.length - 1].media_content_type,
                    }
                  : {}),
              });
              q && q.children ? l(q.children) : l([]);
            } catch (I) {
              (console.error("Error fetching media items:", I), l([]));
            }
            h(!1);
          })());
      }, [c, o]);
      const v = T(
          (S, I) => {
            try {
              V().callService("media_player", "play_media", {
                entity_id: o,
                media_content_type: S.media_content_type,
                media_content_id: S.media_content_id,
                enqueue: I,
              });
            } catch (q) {
              console.error(
                "Error playing media item:",
                {
                  entity_id: o,
                  media_content_type: S.media_content_type,
                  media_content_id: S.media_content_id,
                },
                q
              );
            }
          },
          [o]
        ),
        k = T(
          S => {
            if (
              !u &&
              S.can_expand &&
              S.media_content_id !== c[c.length - 1]?.media_content_id
            ) {
              d(I => [...I, S]);
              return;
            }
          },
          [c, u]
        ),
        x = T(() => {
          u || (c.length > 0 && d(S => S.slice(0, -1)));
        }, [u, c.length]),
        $ = T(
          S => {
            u || d(I => I.slice(0, S + 1));
          },
          [u]
        ),
        M = T(
          (S, I = !1) => {
            const q = [];
            return (
              S.can_play &&
                (q.push({
                  label: s({
                    id: "MediaBrowser.media_item_menu.enqueue_mode.play",
                    defaultMessage: "Play",
                  }),
                  icon: it("play"),
                  onClick: () => v(S),
                }),
                q.push({
                  label: s({
                    id: "MediaBrowser.media_item_menu.enqueue_dropdown_label",
                    defaultMessage: "Enqueue",
                  }),
                  icon: it("next"),
                  children: [
                    {
                      label: s({
                        id: "MediaBrowser.media_item_menu.enqueue_mode.next",
                        defaultMessage: "Play Next",
                      }),
                      icon: it("next"),
                      onClick: () => v(S, "next"),
                    },
                    {
                      label: s({
                        id: "MediaBrowser.media_item_menu.enqueue_mode.replace",
                        defaultMessage: "Replace Queue",
                      }),
                      icon: it("replace"),
                      onClick: () => v(S, "replace"),
                    },
                    {
                      label: s({
                        id: "MediaBrowser.media_item_menu.enqueue_mode.add",
                        defaultMessage: "Add to Queue",
                      }),
                      icon: it("add"),
                      onClick: () => v(S, "add"),
                    },
                  ],
                })),
              S.can_expand &&
                !I &&
                q.push({
                  label: s({
                    id: "MediaBrowser.media_item_menu.browse",
                    defaultMessage: "Browse",
                  }),
                  icon: "mdi:folder-outline",
                  onClick: () => k(S),
                }),
              q
            );
          },
          [k, v, s]
        ),
        C = R(() => (c[c.length - 1] ? M(c[c.length - 1], !0) : []), [c, M]),
        O = S =>
          c.length === 0
            ? E(S)
            : p(ze, {
                menuItems: M(S),
                renderTrigger: I =>
                  p(
                    ur,
                    {
                      title: S.title,
                      imageUrl: S.thumbnail,
                      mdiIcon: Cr(S),
                      ...I,
                    },
                    S.media_content_id + c.length
                  ),
              }),
        E = S =>
          !S.can_play || (S.can_expand && c.length === 0)
            ? p(
                cr,
                {
                  name: S.title,
                  imageUrl: S.thumbnail,
                  mdiIcon: Cr(S),
                  onClick: () => k(S),
                },
                S.media_content_id + c.length
              )
            : p(ze, {
                menuItems: M(S),
                renderTrigger: I =>
                  p(
                    cr,
                    {
                      name: S.title,
                      imageUrl: S.thumbnail,
                      mdiIcon: Cr(S),
                      ...I,
                    },
                    S.media_content_id + c.length
                  ),
              }),
        A = S =>
          p(Kr, {
            numberOfColumns: f,
            children: S.map(I =>
              b ||
              ((S[0].media_class === yt.Track ||
                S[0].media_content_type === pt.Track) &&
                I.media_content_type !== "favorite")
                ? O(I)
                : E(I)
            ),
          });
      return p("div", {
        css: Ke.root,
        style: { "--mmpc-search-padding": `${r}px` },
        children: p(
          ki,
          {
            onLayout: ({ width: S }) => {
              S > 800 ? g(6) : S > 390 ? g(4) : g(3);
            },
            maxHeight: n,
            renderItem: A,
            renderHeader: () =>
              P(Y, {
                children: [
                  i && i(),
                  p("div", {
                    css: It.header,
                    children:
                      c.length > 0 || e
                        ? p(Y, {
                            children: P("div", {
                              css: It.navigationBar,
                              children: [
                                c.length > 0
                                  ? p(W, {
                                      icon: "mdi:arrow-left",
                                      size: "x-small",
                                      onClick: x,
                                      disabled: c.length === 0,
                                    })
                                  : p(se, {
                                      icon: "mdi:home",
                                      size: "x-small",
                                    }),
                                P("div", {
                                  css: It.breadCrumbs,
                                  children: [
                                    p("button", {
                                      css: It.breadCrumbItem,
                                      onClick: () => d([]),
                                      children:
                                        c.length === 0
                                          ? s({
                                              id: "MediaBrowser.breadcrumb_home",
                                              defaultMessage: "Home",
                                            })
                                          : p(se, {
                                              icon: "mdi:home",
                                              size: "x-small",
                                            }),
                                    }),
                                    c.map((S, I) =>
                                      P(
                                        Y,
                                        {
                                          children: [
                                            p("span", {
                                              css: It.breadCrumbSeparator,
                                              children: "/",
                                            }),
                                            p("button", {
                                              css: It.breadCrumbItem,
                                              onClick: () => $(I),
                                              children: S.title,
                                            }),
                                          ],
                                        },
                                        `breadcrumb-${I}-${S.title}`
                                      )
                                    ),
                                  ],
                                }),
                                e &&
                                  c.length === 0 &&
                                  p(ze, {
                                    menuItems: e,
                                    side: "bottom",
                                    align: "end",
                                    renderTrigger: S =>
                                      P(Ye, {
                                        icon: "mdi:import",
                                        size: "small",
                                        invertedColors: !0,
                                        border: !0,
                                        css: It.mediaBrowserEntrySelector,
                                        ...S,
                                        children: [
                                          t.name ?? t.entity_id,
                                          p(se, {
                                            size: "x-small",
                                            icon: "mdi:chevron-down",
                                          }),
                                        ],
                                      }),
                                  }),
                                C.length > 0 &&
                                  p(ze, {
                                    menuItems: C,
                                    side: "bottom",
                                    align: "end",
                                    renderTrigger: S =>
                                      P(Ye, {
                                        size: "small",
                                        invertedColors: !0,
                                        border: !0,
                                        css: It.mediaBrowserEntrySelector,
                                        ...S,
                                        children: [
                                          c[c.length - 1].thumbnail
                                            ? p(Ka, {
                                                css: It.mediaItemHeaderMenuImage,
                                                imageUrl:
                                                  c[c.length - 1].thumbnail,
                                                mdiIcon: Cr(c[c.length - 1]),
                                              })
                                            : p(se, {
                                                size: "x-small",
                                                icon: "mdi:play",
                                              }),
                                          s({
                                            id: "MediaBrowser.media_item_menu.enqueue_mode.play",
                                            defaultMessage: "Play",
                                          }),
                                          p(se, {
                                            size: "x-small",
                                            icon: "mdi:chevron-down",
                                          }),
                                        ],
                                      }),
                                  }),
                              ],
                            }),
                          })
                        : null,
                  }),
                  a.length > 3 &&
                    c.length > 0 &&
                    p(Ns, {
                      placeholder: s({
                        id: "MediaBrowser.filter_placeholder",
                        defaultMessage: "Filter items...",
                      }),
                      onChange: _,
                      value: m,
                      css: It.itemFilter,
                      style: { marginLeft: r, marginRight: r },
                    }),
                ],
              }),
            renderEmpty: () =>
              u
                ? p(lr, {})
                : !u && a.length === 0
                  ? p("div", {
                      css: It.noMediaText,
                      children: s({
                        id: "MediaBrowser.empty_text",
                        defaultMessage: "No media items available.",
                      }),
                    })
                  : null,
            data: y,
          },
          c[c.length - 1]?.media_content_id || "root"
        ),
      });
    },
    _0 = {
      root: w({
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gridGap: "8px",
        padding: "0px var(--mmpc-search-padding, 0px)",
      }),
    },
    Kr = ({ numberOfColumns: e = 3, children: t }) =>
      p("div", {
        css: _0.root,
        style: { gridTemplateColumns: `repeat(${e}, minmax(0, 1fr))` },
        children: t,
      }),
    y0 = wn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
    b0 = {
      spinner: w({
        animation: `${y0} 1s linear infinite`,
        "--mdc-icon-size": "var(--mmpc-spinner-size)",
        width: "var(--mmpc-spinner-size)",
        display: "flex",
        pointerEvents: "none",
      }),
    },
    lr = e => p(se, { icon: "mdi:loading", css: b0.spinner, ...e }),
    v0 = wn({
      "0%": { opacity: 1, transform: "translateY(0px)" },
      "85%": { opacity: 1, transform: "translateY(0px)" },
      "100%": { opacity: 0, transform: "translateY(-20px)" },
    }),
    jt = {
      root: w({
        width: "100%",
        "&::before": { content: '""', display: "block", paddingTop: "100%" },
        borderRadius: "4px",
        "--icon-primary-color": "var(--card-background-color)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }),
      image: w({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "4px",
        opacity: 0,
      }),
      imageLoaded: w({ animation: `${Wd} 0.3s ease forwards` }),
      icon: w({
        position: "absolute",
        "--icon-primary-color": "var(--primary-text-color, #333)",
        backgroundColor: "var(--card-background-color)",
        borderRadius: "50%",
        padding: "2px",
        width: Ra("x-small") + 4,
        height: Ra("x-small") + 4,
      }),
      iconNoBackground: w({ backgroundColor: "transparent" }),
      done: w({ animation: `${v0} 3s forwards` }),
    },
    Ka = Ue(
      ({ imageUrl: e, mdiIcon: t, loading: r, done: n, className: i }) => {
        const [s, o] = L(!1),
          [a, l] = L(!1),
          [c, d] = L(null),
          u = he(null),
          h = T((f, g = 0) => {
            if (!f) return (l(!1), o(!1), d(null), null);
            d(null);
            const m = new Image();
            ((m.onerror = () => {
              if (u.current === f) {
                if (g === 0) {
                  h(f, 1);
                  return;
                }
                o(!0);
              }
            }),
              (m.onloadstart = () => {
                u.current === f && (l(!1), o(!1));
              }),
              (m.onload = () => {
                u.current === f && l(!0);
              }),
              (m.src = V().hassUrl(f)),
              d(m));
          }, []);
        return (
          Q(() => {
            u.current !== e && ((u.current = e), h(e));
          }, [e, h]),
          P("div", {
            css: jt.root,
            className: i,
            children: [
              c?.src &&
                !s &&
                p("img", {
                  src: c?.src,
                  css: [jt.image, a && jt.imageLoaded],
                  alt: "",
                }),
              !c?.src &&
                t &&
                !s &&
                p(se, {
                  icon: t,
                  size: "medium",
                  css: [jt.icon, jt.iconNoBackground],
                }),
              !!s &&
                p(se, {
                  icon: t ?? "mdi:image-broken-variant",
                  size: "medium",
                  css: [jt.icon, jt.iconNoBackground],
                }),
              r && p(lr, { css: jt.icon, size: "x-small" }),
              !r &&
                n &&
                p(se, {
                  icon: "mdi:check",
                  size: "x-small",
                  css: [jt.icon, jt.done],
                }),
            ],
          })
        );
      }
    ),
    xi = {
      root: w({
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "transform 0.2s",
        borderRadius: "8px",
        padding: "8px",
        background: "rgba(255, 255, 255, 0.05)",
        "&:hover": { transform: "translateY(-4px)" },
      }),
      rootLight: w({ background: "rgba(0, 0, 0, 0.05)" }),
      name: w({
        fontSize: "14px",
        fontWeight: 500,
        textAlign: "center",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        width: "100%",
        color: "var(--primary-text-color)",
      }),
      artist: w({
        fontSize: "12px",
        color: "var(--secondary-text-color)",
        textAlign: "center",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical",
        width: "100%",
      }),
      mediaImage: w({ marginBottom: 8 }),
    },
    cr = Lt(
      (
        { imageUrl: e, mdiIcon: t, name: r, artist: n, onClick: i, ...s },
        o
      ) => {
        const [a, l] = L(!1),
          [c, d] = L(!1),
          u = T(
            async h => {
              if (i)
                if (
                  typeof i == "function" &&
                  i.constructor.name === "AsyncFunction"
                ) {
                  (d(!1), l(!0));
                  try {
                    (await i(h), d(!0));
                  } catch (f) {
                    console.error("Error in MediaItem onClick:", f);
                  }
                  l(!1);
                } else i(h);
            },
            [i]
          );
        return P("button", {
          css: [xi.root, !Ur() && xi.rootLight],
          id: `mmpc-media-item-${r.replace(/\s/g, "").slice(0, 8)}`,
          onClick: u,
          ...s,
          ref: o,
          children: [
            p(Ka, {
              css: xi.mediaImage,
              imageUrl: e,
              mdiIcon: t,
              loading: a,
              done: c,
            }),
            p("div", { css: xi.name, children: r }),
            p("div", { css: xi.artist, children: n }),
          ],
        });
      }
    ),
    Os = {
      root: w({
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.2s",
        borderRadius: "8px",
        padding: "12px",
        background: "rgba(255, 255, 255, 0.05)",
        "&:hover": { transform: "translateY(-4px)" },
      }),
      rootLight: w({ background: "rgba(0, 0, 0, 0.05)" }),
      backgroundIcon: w({
        position: "absolute",
        right: -10,
        bottom: -10,
        opacity: 0.06,
        pointerEvents: "none",
      }),
      name: w({
        fontSize: "13px",
        fontWeight: 500,
        textAlign: "left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "100%",
        color: "var(--primary-text-color)",
        position: "relative",
      }),
    },
    w0 = Lt(({ mdiIcon: e, name: t, onClick: r, ...n }, i) => {
      const [s, o] = L(!1),
        a = T(
          async l => {
            if (r)
              if (
                typeof r == "function" &&
                r.constructor.name === "AsyncFunction"
              ) {
                o(!0);
                try {
                  await r(l);
                } catch (c) {
                  console.error("Error in MediaItemCompact onClick:", c);
                }
                o(!1);
              } else r(l);
          },
          [r]
        );
      return P("button", {
        css: [Os.root, !Ur() && Os.rootLight],
        onClick: a,
        disabled: s,
        ...n,
        ref: i,
        children: [
          e && p(se, { icon: e, size: "x-large", css: Os.backgroundIcon }),
          p("div", { css: Os.name, children: t }),
        ],
      });
    }),
    lf = {
      root: w({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        margin: "0 4px",
        padding:
          "12px var(--mmpc-search-padding, 0px) 4px var(--mmpc-search-padding, 0px)",
      }),
      title: w({
        fontSize: "16px",
        fontWeight: 500,
        color: "var(--primary-text-color)",
        margin: 0,
      }),
    },
    Ga = ({ children: e, onClick: t }) =>
      P("div", {
        css: lf.root,
        onClick: t,
        children: [
          p("h3", { css: lf.title, children: e }),
          !!t && p(se, { icon: "mdi:chevron-right", size: "small" }),
        ],
      }),
    Ut = {
      root: w({
        border: "none",
        cursor: "pointer",
        display: "grid",
        textAlign: "left",
        gridTemplateColumns: "50px 1fr auto",
        alignItems: "center",
        gap: 10,
        padding: "8px 8px",
        borderRadius: `max(${U.sizes.cardBorderRadius}, 12px)`,
        gridColumn: "1/-1",
        background: "rgba(255, 255, 255, 0.05)",
        "&:hover": { background: "rgba(255, 255, 255, 0.1)" },
        containerType: "inline-size",
      }),
      rootLight: w({
        background: "rgba(0, 0, 0, 0.05)",
        "&:hover": { background: "rgba(0, 0, 0, 0.01)" },
      }),
      trackInfo: w({
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        justifyContent: "space-evenly",
      }),
      trackName: w({
        fontSize: "14px",
        fontWeight: 500,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: "var(--primary-text-color)",
      }),
      trackArtist: w({
        fontSize: "12px",
        color: "var(--secondary-text-color)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }),
      mediaImage: w({
        width: 50,
        height: 50,
        borderRadius: "var(--ha-border-radius-md, 8px)",
      }),
      buttons: w({
        display: "flex",
        gap: 6,
        marginRight: "8px",
        alignItems: "center",
        opacity: 0.7,
        ":hover &": { opacity: 1 },
      }),
      button: w({ display: "flex", flexShrink: 0 }),
      buttonPriority2: w({
        "@container (max-width: 300px)": { display: "none" },
      }),
      buttonPriority3: w({
        "@container (max-width: 350px)": { display: "none" },
      }),
    },
    ur = Lt(
      (
        {
          imageUrl: e,
          title: t,
          artist: r,
          mdiIcon: n,
          buttonIconSize: i = "x-small",
          onClick: s,
          buttons: o = [],
          ...a
        },
        l
      ) => {
        const [c, d] = L(!1),
          [u, h] = L(!1),
          f = T(
            async g => {
              if (s)
                if (
                  typeof s == "function" &&
                  s.constructor.name === "AsyncFunction"
                ) {
                  (h(!1), d(!0));
                  try {
                    (await s(g), h(!0));
                  } catch (m) {
                    console.error("Error in MediaItem onClick:", m);
                  }
                  d(!1);
                } else s(g);
            },
            [s]
          );
        return P("button", {
          css: [Ut.root, !Ur() && Ut.rootLight],
          onClick: f,
          ...a,
          ref: l,
          children: [
            p(Ka, {
              css: Ut.mediaImage,
              imageUrl: e,
              loading: c,
              mdiIcon: n,
              done: u,
            }),
            P("div", {
              css: Ut.trackInfo,
              children: [
                p("div", { css: Ut.trackName, children: t }),
                !!r && p("div", { css: Ut.trackArtist, children: r }),
              ],
            }),
            o.length > 0 &&
              p("div", {
                css: Ut.buttons,
                children: o.map((g, m) =>
                  p(
                    W,
                    {
                      css: [
                        Ut.button,
                        g.priority === 3
                          ? Ut.buttonPriority3
                          : g.priority === 2
                            ? Ut.buttonPriority2
                            : void 0,
                      ],
                      disabled: g.disabled,
                      icon: g.icon,
                      onClick: _ => {
                        (_.preventDefault(),
                          _.stopPropagation(),
                          !g.disabled && g.onClick());
                      },
                      type: "button",
                      size: g.size ?? i,
                    },
                    m + g.icon
                  )
                ),
              }),
          ],
        });
      }
    ),
    Ke = {
      root: w({
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        overflow: "hidden",
      }),
      rootSearchBarBottom: w({ overflow: "hidden" }),
      searchBarContainer: w({
        display: "flex",
        flexDirection: "column",
        gap: 12,
        marginBottom: 12,
      }),
      filterContainer: w({
        display: "flex",
        flexDirection: "row",
        gap: "2px",
        justifyContent: "flex-start",
        overflowX: "auto",
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "&::-webkit-scrollbar": { display: "none" },
      }),
      chip: w({
        "&:first-child": {
          marginLeft: "var(--mmpc-chip-horizontal-margin, 0px)",
        },
        "&:last-child": {
          marginRight: "var(--mmpc-chip-horizontal-margin, 0px)",
        },
      }),
      verticalChipSeperator: w({
        height: "28px",
        alignSelf: "center",
        borderRight: "1px solid var(--divider-color)",
        marginRight: "6px",
      }),
      mediaEmptyText: w({
        color: U.colors.onCard,
        padding: "0px var(--mmpc-search-padding, 0px)",
      }),
      resultsContainerSearchBarBottom: w({ overflowY: "auto" }),
      inputRow: w({
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        padding: "1px var(--mmpc-search-padding, 0px)",
      }),
      input: w({ flexGrow: 1 }),
    },
    cf = (e, t, r) => {
      const { t: n } = Be(),
        i = R(() => {
          const l = dn(e, t);
          return r ? [...l, { entity_id: r, name: "Music Assistant" }] : l;
        }, [e, t, r]),
        [s, o] = L(i[0]?.entity_id ?? void 0),
        a = R(() => {
          if (i.length <= 1) return [];
          const l = [
              {
                type: "title",
                label: n({
                  id: "Search.search_provider.title",
                  defaultMessage: "Search using..",
                }),
              },
            ],
            c = V();
          return (
            i.forEach(d => {
              l.push({
                type: "item",
                label:
                  d.name ??
                  c.states[d.entity_id]?.attributes.friendly_name ??
                  d.entity_id,
                onClick: () => o(d.entity_id),
                selected: s === d.entity_id,
              });
            }),
            l
          );
        }, [s, n, i]);
      return R(
        () => ({
          searchProvidersMenu: a,
          selectedSearchProviderEntityId: s,
          selectedSearchProvider: i.find(l => l.entity_id === s),
        }),
        [a, s, i]
      );
    },
    x0 = (e, t, r) => {
      const [n, i] = L(null),
        [s, o] = L(!1),
        [a, l] = L(null),
        c = he(null);
      Q(() => {
        if (e === "") return;
        const u = e + (t ?? "all");
        c.current = u;
        const h = {
            type: "call_service",
            domain: "media_player",
            service: "search_media",
            service_data: {
              search_query: e,
              entity_id: r,
              media_content_type: t === "all" ? void 0 : t,
            },
            return_response: !0,
          },
          f = V();
        (o(!0),
          f.connection
            .sendMessagePromise(h)
            .then(g => {
              const m = g;
              u === c.current &&
                m.response[r] &&
                (o(!1), i(m.response[r]), l(null));
            })
            .catch(g => {
              (console.error("Error fetching search results:", g),
                o(!1),
                l("Error fetching search results: " + g.message),
                i(null));
            }));
      }, [e, r, t]);
      const d = T(
        async (u, h, f) =>
          V().callService("media_player", "play_media", {
            entity_id: h,
            media_content_type: u.media_content_type,
            media_content_id: u.media_content_id,
            enqueue: f,
          }),
        []
      );
      return R(
        () => ({ results: n?.result ?? [], loading: s, playItem: d, error: a }),
        [n, s, a, d]
      );
    },
    k0 = (e, t = "favorites", r = !1) => {
      const [n, i] = L([]),
        [s, o] = L(!1);
      return (
        Q(() => {
          if (!r) {
            i([]);
            return;
          }
          const a = {
              type: "call_service",
              domain: "media_player",
              service: "browse_media",
              service_data: { entity_id: e, media_content_type: t },
              return_response: !0,
            },
            l = V();
          (o(!0),
            l.connection
              .sendMessagePromise(a)
              .then(c => {
                const d = c;
                d.response[e] &&
                  (o(!1), i(d.response[e].children.filter(u => u.can_play)));
              })
              .catch(c => {
                (console.error("Error fetching search results:", c),
                  o(!1),
                  i([]));
              }));
        }, [e, r, t]),
        R(() => ({ mediaBrowserItems: n, isFetching: s }), [n, s])
      );
    };
  function Mn(e, t, r) {
    let n = r.initialDeps ?? [],
      i,
      s = !0;
    function o() {
      var a, l, c;
      let d;
      r.key && (a = r.debug) != null && a.call(r) && (d = Date.now());
      const u = e();
      if (!(u.length !== n.length || u.some((g, m) => n[m] !== g))) return i;
      n = u;
      let f;
      if (
        (r.key && (l = r.debug) != null && l.call(r) && (f = Date.now()),
        (i = t(...u)),
        r.key && (c = r.debug) != null && c.call(r))
      ) {
        const g = Math.round((Date.now() - d) * 100) / 100,
          m = Math.round((Date.now() - f) * 100) / 100,
          _ = m / 16,
          y = (b, v) => {
            for (b = String(b); b.length < v; ) b = " " + b;
            return b;
          };
        console.info(
          `%c⏱ ${y(m, 5)} /${y(g, 5)} ms`,
          `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * _, 120))}deg 100% 31%);`,
          r?.key
        );
      }
      return (
        r?.onChange && !(s && r.skipInitialOnChange) && r.onChange(i),
        (s = !1),
        i
      );
    }
    return (
      (o.updateDeps = a => {
        n = a;
      }),
      o
    );
  }
  function uf(e, t) {
    if (e === void 0) throw new Error("Unexpected undefined");
    return e;
  }
  const S0 = (e, t) => Math.abs(e - t) < 1.01,
    M0 = (e, t, r) => {
      let n;
      return function (...i) {
        (e.clearTimeout(n), (n = e.setTimeout(() => t.apply(this, i), r)));
      };
    };
  var Cn = {};
  const df = e => {
      const { offsetWidth: t, offsetHeight: r } = e;
      return { width: t, height: r };
    },
    C0 = e => e,
    $0 = e => {
      const t = Math.max(e.startIndex - e.overscan, 0),
        r = Math.min(e.endIndex + e.overscan, e.count - 1),
        n = [];
      for (let i = t; i <= r; i++) n.push(i);
      return n;
    },
    A0 = (e, t) => {
      const r = e.scrollElement;
      if (!r) return;
      const n = e.targetWindow;
      if (!n) return;
      const i = o => {
        const { width: a, height: l } = o;
        t({ width: Math.round(a), height: Math.round(l) });
      };
      if ((i(df(r)), !n.ResizeObserver)) return () => {};
      const s = new n.ResizeObserver(o => {
        const a = () => {
          const l = o[0];
          if (l?.borderBoxSize) {
            const c = l.borderBoxSize[0];
            if (c) {
              i({ width: c.inlineSize, height: c.blockSize });
              return;
            }
          }
          i(df(r));
        };
        e.options.useAnimationFrameWithResizeObserver
          ? requestAnimationFrame(a)
          : a();
      });
      return (
        s.observe(r, { box: "border-box" }),
        () => {
          s.unobserve(r);
        }
      );
    },
    ff = { passive: !0 },
    pf = typeof window > "u" ? !0 : "onscrollend" in window,
    E0 = (e, t) => {
      const r = e.scrollElement;
      if (!r) return;
      const n = e.targetWindow;
      if (!n) return;
      let i = 0;
      const s =
          e.options.useScrollendEvent && pf
            ? () => {}
            : M0(
                n,
                () => {
                  t(i, !1);
                },
                e.options.isScrollingResetDelay
              ),
        o = d => () => {
          const { horizontal: u, isRtl: h } = e.options;
          ((i = u ? r.scrollLeft * ((h && -1) || 1) : r.scrollTop),
            s(),
            t(i, d));
        },
        a = o(!0),
        l = o(!1);
      r.addEventListener("scroll", a, ff);
      const c = e.options.useScrollendEvent && pf;
      return (
        c && r.addEventListener("scrollend", l, ff),
        () => {
          (r.removeEventListener("scroll", a),
            c && r.removeEventListener("scrollend", l));
        }
      );
    },
    I0 = (e, t, r) => {
      if (t?.borderBoxSize) {
        const n = t.borderBoxSize[0];
        if (n)
          return Math.round(
            n[r.options.horizontal ? "inlineSize" : "blockSize"]
          );
      }
      return e[r.options.horizontal ? "offsetWidth" : "offsetHeight"];
    },
    P0 = (e, { adjustments: t = 0, behavior: r }, n) => {
      var i, s;
      const o = e + t;
      (s = (i = n.scrollElement) == null ? void 0 : i.scrollTo) == null ||
        s.call(i, { [n.options.horizontal ? "left" : "top"]: o, behavior: r });
    };
  class O0 {
    constructor(t) {
      ((this.unsubs = []),
        (this.scrollElement = null),
        (this.targetWindow = null),
        (this.isScrolling = !1),
        (this.scrollState = null),
        (this.measurementsCache = []),
        (this.itemSizeCache = new Map()),
        (this.laneAssignments = new Map()),
        (this.pendingMeasuredCacheIndexes = []),
        (this.prevLanes = void 0),
        (this.lanesChangedFlag = !1),
        (this.lanesSettling = !1),
        (this.scrollRect = null),
        (this.scrollOffset = null),
        (this.scrollDirection = null),
        (this.scrollAdjustments = 0),
        (this.elementsCache = new Map()),
        (this.now = () => {
          var r, n, i;
          return (
            ((i =
              (n = (r = this.targetWindow) == null ? void 0 : r.performance) ==
              null
                ? void 0
                : n.now) == null
              ? void 0
              : i.call(n)) ?? Date.now()
          );
        }),
        (this.observer = (() => {
          let r = null;
          const n = () =>
            r ||
            (!this.targetWindow || !this.targetWindow.ResizeObserver
              ? null
              : (r = new this.targetWindow.ResizeObserver(i => {
                  i.forEach(s => {
                    const o = () => {
                      const a = s.target,
                        l = this.indexFromElement(a);
                      if (!a.isConnected) {
                        this.observer.unobserve(a);
                        return;
                      }
                      this.shouldMeasureDuringScroll(l) &&
                        this.resizeItem(
                          l,
                          this.options.measureElement(a, s, this)
                        );
                    };
                    this.options.useAnimationFrameWithResizeObserver
                      ? requestAnimationFrame(o)
                      : o();
                  });
                })));
          return {
            disconnect: () => {
              var i;
              ((i = n()) == null || i.disconnect(), (r = null));
            },
            observe: i => {
              var s;
              return (s = n()) == null
                ? void 0
                : s.observe(i, { box: "border-box" });
            },
            unobserve: i => {
              var s;
              return (s = n()) == null ? void 0 : s.unobserve(i);
            },
          };
        })()),
        (this.range = null),
        (this.setOptions = r => {
          (Object.entries(r).forEach(([n, i]) => {
            typeof i > "u" && delete r[n];
          }),
            (this.options = {
              debug: !1,
              initialOffset: 0,
              overscan: 1,
              paddingStart: 0,
              paddingEnd: 0,
              scrollPaddingStart: 0,
              scrollPaddingEnd: 0,
              horizontal: !1,
              getItemKey: C0,
              rangeExtractor: $0,
              onChange: () => {},
              measureElement: I0,
              initialRect: { width: 0, height: 0 },
              scrollMargin: 0,
              gap: 0,
              indexAttribute: "data-index",
              initialMeasurementsCache: [],
              lanes: 1,
              isScrollingResetDelay: 150,
              enabled: !0,
              isRtl: !1,
              useScrollendEvent: !1,
              useAnimationFrameWithResizeObserver: !1,
              laneAssignmentMode: "estimate",
              ...r,
            }));
        }),
        (this.notify = r => {
          var n, i;
          (i = (n = this.options).onChange) == null || i.call(n, this, r);
        }),
        (this.maybeNotify = Mn(
          () => (
            this.calculateRange(),
            [
              this.isScrolling,
              this.range ? this.range.startIndex : null,
              this.range ? this.range.endIndex : null,
            ]
          ),
          r => {
            this.notify(r);
          },
          {
            key: Cn.NODE_ENV !== "production" && "maybeNotify",
            debug: () => this.options.debug,
            initialDeps: [
              this.isScrolling,
              this.range ? this.range.startIndex : null,
              this.range ? this.range.endIndex : null,
            ],
          }
        )),
        (this.cleanup = () => {
          (this.unsubs.filter(Boolean).forEach(r => r()),
            (this.unsubs = []),
            this.observer.disconnect(),
            this.rafId != null &&
              this.targetWindow &&
              (this.targetWindow.cancelAnimationFrame(this.rafId),
              (this.rafId = null)),
            (this.scrollState = null),
            (this.scrollElement = null),
            (this.targetWindow = null));
        }),
        (this._didMount = () => () => {
          this.cleanup();
        }),
        (this._willUpdate = () => {
          var r;
          const n = this.options.enabled
            ? this.options.getScrollElement()
            : null;
          if (this.scrollElement !== n) {
            if ((this.cleanup(), !n)) {
              this.maybeNotify();
              return;
            }
            ((this.scrollElement = n),
              this.scrollElement && "ownerDocument" in this.scrollElement
                ? (this.targetWindow =
                    this.scrollElement.ownerDocument.defaultView)
                : (this.targetWindow =
                    ((r = this.scrollElement) == null ? void 0 : r.window) ??
                    null),
              this.elementsCache.forEach(i => {
                this.observer.observe(i);
              }),
              this.unsubs.push(
                this.options.observeElementRect(this, i => {
                  ((this.scrollRect = i), this.maybeNotify());
                })
              ),
              this.unsubs.push(
                this.options.observeElementOffset(this, (i, s) => {
                  ((this.scrollAdjustments = 0),
                    (this.scrollDirection = s
                      ? this.getScrollOffset() < i
                        ? "forward"
                        : "backward"
                      : null),
                    (this.scrollOffset = i),
                    (this.isScrolling = s),
                    this.scrollState && this.scheduleScrollReconcile(),
                    this.maybeNotify());
                })
              ),
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: void 0,
                behavior: void 0,
              }));
          }
        }),
        (this.rafId = null),
        (this.getSize = () =>
          this.options.enabled
            ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect),
              this.scrollRect[this.options.horizontal ? "width" : "height"])
            : ((this.scrollRect = null), 0)),
        (this.getScrollOffset = () =>
          this.options.enabled
            ? ((this.scrollOffset =
                this.scrollOffset ??
                (typeof this.options.initialOffset == "function"
                  ? this.options.initialOffset()
                  : this.options.initialOffset)),
              this.scrollOffset)
            : ((this.scrollOffset = null), 0)),
        (this.getFurthestMeasurement = (r, n) => {
          const i = new Map(),
            s = new Map();
          for (let o = n - 1; o >= 0; o--) {
            const a = r[o];
            if (i.has(a.lane)) continue;
            const l = s.get(a.lane);
            if (
              (l == null || a.end > l.end
                ? s.set(a.lane, a)
                : a.end < l.end && i.set(a.lane, !0),
              i.size === this.options.lanes)
            )
              break;
          }
          return s.size === this.options.lanes
            ? Array.from(s.values()).sort((o, a) =>
                o.end === a.end ? o.index - a.index : o.end - a.end
              )[0]
            : void 0;
        }),
        (this.getMeasurementOptions = Mn(
          () => [
            this.options.count,
            this.options.paddingStart,
            this.options.scrollMargin,
            this.options.getItemKey,
            this.options.enabled,
            this.options.lanes,
            this.options.laneAssignmentMode,
          ],
          (r, n, i, s, o, a, l) => (
            this.prevLanes !== void 0 &&
              this.prevLanes !== a &&
              (this.lanesChangedFlag = !0),
            (this.prevLanes = a),
            (this.pendingMeasuredCacheIndexes = []),
            {
              count: r,
              paddingStart: n,
              scrollMargin: i,
              getItemKey: s,
              enabled: o,
              lanes: a,
              laneAssignmentMode: l,
            }
          ),
          { key: !1 }
        )),
        (this.getMeasurements = Mn(
          () => [this.getMeasurementOptions(), this.itemSizeCache],
          (
            {
              count: r,
              paddingStart: n,
              scrollMargin: i,
              getItemKey: s,
              enabled: o,
              lanes: a,
              laneAssignmentMode: l,
            },
            c
          ) => {
            if (!o)
              return (
                (this.measurementsCache = []),
                this.itemSizeCache.clear(),
                this.laneAssignments.clear(),
                []
              );
            if (this.laneAssignments.size > r)
              for (const f of this.laneAssignments.keys())
                f >= r && this.laneAssignments.delete(f);
            (this.lanesChangedFlag &&
              ((this.lanesChangedFlag = !1),
              (this.lanesSettling = !0),
              (this.measurementsCache = []),
              this.itemSizeCache.clear(),
              this.laneAssignments.clear(),
              (this.pendingMeasuredCacheIndexes = [])),
              this.measurementsCache.length === 0 &&
                !this.lanesSettling &&
                ((this.measurementsCache =
                  this.options.initialMeasurementsCache),
                this.measurementsCache.forEach(f => {
                  this.itemSizeCache.set(f.key, f.size);
                })));
            const d = this.lanesSettling
              ? 0
              : this.pendingMeasuredCacheIndexes.length > 0
                ? Math.min(...this.pendingMeasuredCacheIndexes)
                : 0;
            ((this.pendingMeasuredCacheIndexes = []),
              this.lanesSettling &&
                this.measurementsCache.length === r &&
                (this.lanesSettling = !1));
            const u = this.measurementsCache.slice(0, d),
              h = new Array(a).fill(void 0);
            for (let f = 0; f < d; f++) {
              const g = u[f];
              g && (h[g.lane] = f);
            }
            for (let f = d; f < r; f++) {
              const g = s(f),
                m = this.laneAssignments.get(f);
              let _, y;
              const b = l === "estimate" || c.has(g);
              if (m !== void 0 && this.options.lanes > 1) {
                _ = m;
                const $ = h[_],
                  M = $ !== void 0 ? u[$] : void 0;
                y = M ? M.end + this.options.gap : n + i;
              } else {
                const $ =
                  this.options.lanes === 1
                    ? u[f - 1]
                    : this.getFurthestMeasurement(u, f);
                ((y = $ ? $.end + this.options.gap : n + i),
                  (_ = $ ? $.lane : f % this.options.lanes),
                  this.options.lanes > 1 &&
                    b &&
                    this.laneAssignments.set(f, _));
              }
              const v = c.get(g),
                k = typeof v == "number" ? v : this.options.estimateSize(f),
                x = y + k;
              ((u[f] = {
                index: f,
                start: y,
                size: k,
                end: x,
                key: g,
                lane: _,
              }),
                (h[_] = f));
            }
            return ((this.measurementsCache = u), u);
          },
          {
            key: Cn.NODE_ENV !== "production" && "getMeasurements",
            debug: () => this.options.debug,
          }
        )),
        (this.calculateRange = Mn(
          () => [
            this.getMeasurements(),
            this.getSize(),
            this.getScrollOffset(),
            this.options.lanes,
          ],
          (r, n, i, s) =>
            (this.range =
              r.length > 0 && n > 0
                ? T0({
                    measurements: r,
                    outerSize: n,
                    scrollOffset: i,
                    lanes: s,
                  })
                : null),
          {
            key: Cn.NODE_ENV !== "production" && "calculateRange",
            debug: () => this.options.debug,
          }
        )),
        (this.getVirtualIndexes = Mn(
          () => {
            let r = null,
              n = null;
            const i = this.calculateRange();
            return (
              i && ((r = i.startIndex), (n = i.endIndex)),
              this.maybeNotify.updateDeps([this.isScrolling, r, n]),
              [
                this.options.rangeExtractor,
                this.options.overscan,
                this.options.count,
                r,
                n,
              ]
            );
          },
          (r, n, i, s, o) =>
            s === null || o === null
              ? []
              : r({ startIndex: s, endIndex: o, overscan: n, count: i }),
          {
            key: Cn.NODE_ENV !== "production" && "getVirtualIndexes",
            debug: () => this.options.debug,
          }
        )),
        (this.indexFromElement = r => {
          const n = this.options.indexAttribute,
            i = r.getAttribute(n);
          return i
            ? parseInt(i, 10)
            : (console.warn(
                `Missing attribute name '${n}={index}' on measured element.`
              ),
              -1);
        }),
        (this.shouldMeasureDuringScroll = r => {
          var n;
          if (!this.scrollState || this.scrollState.behavior !== "smooth")
            return !0;
          const i =
            this.scrollState.index ??
            ((n = this.getVirtualItemForOffset(
              this.scrollState.lastTargetOffset
            )) == null
              ? void 0
              : n.index);
          if (i !== void 0 && this.range) {
            const s = Math.max(
                this.options.overscan,
                Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
              ),
              o = Math.max(0, i - s),
              a = Math.min(this.options.count - 1, i + s);
            return r >= o && r <= a;
          }
          return !0;
        }),
        (this.measureElement = r => {
          if (!r) {
            this.elementsCache.forEach((o, a) => {
              o.isConnected ||
                (this.observer.unobserve(o), this.elementsCache.delete(a));
            });
            return;
          }
          const n = this.indexFromElement(r),
            i = this.options.getItemKey(n),
            s = this.elementsCache.get(i);
          (s !== r &&
            (s && this.observer.unobserve(s),
            this.observer.observe(r),
            this.elementsCache.set(i, r)),
            (!this.isScrolling || this.scrollState) &&
              this.shouldMeasureDuringScroll(n) &&
              this.resizeItem(n, this.options.measureElement(r, void 0, this)));
        }),
        (this.resizeItem = (r, n) => {
          var i;
          const s = this.measurementsCache[r];
          if (!s) return;
          const o = this.itemSizeCache.get(s.key) ?? s.size,
            a = n - o;
          a !== 0 &&
            (((i = this.scrollState) == null ? void 0 : i.behavior) !==
              "smooth" &&
              (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0
                ? this.shouldAdjustScrollPositionOnItemSizeChange(s, a, this)
                : s.start < this.getScrollOffset() + this.scrollAdjustments) &&
              (Cn.NODE_ENV !== "production" &&
                this.options.debug &&
                console.info("correction", a),
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: (this.scrollAdjustments += a),
                behavior: void 0,
              })),
            this.pendingMeasuredCacheIndexes.push(s.index),
            (this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, n))),
            this.notify(!1));
        }),
        (this.getVirtualItems = Mn(
          () => [this.getVirtualIndexes(), this.getMeasurements()],
          (r, n) => {
            const i = [];
            for (let s = 0, o = r.length; s < o; s++) {
              const a = r[s],
                l = n[a];
              i.push(l);
            }
            return i;
          },
          {
            key: Cn.NODE_ENV !== "production" && "getVirtualItems",
            debug: () => this.options.debug,
          }
        )),
        (this.getVirtualItemForOffset = r => {
          const n = this.getMeasurements();
          if (n.length !== 0)
            return uf(n[hf(0, n.length - 1, i => uf(n[i]).start, r)]);
        }),
        (this.getMaxScrollOffset = () => {
          if (!this.scrollElement) return 0;
          if ("scrollHeight" in this.scrollElement)
            return this.options.horizontal
              ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth
              : this.scrollElement.scrollHeight -
                  this.scrollElement.clientHeight;
          {
            const r = this.scrollElement.document.documentElement;
            return this.options.horizontal
              ? r.scrollWidth - this.scrollElement.innerWidth
              : r.scrollHeight - this.scrollElement.innerHeight;
          }
        }),
        (this.getOffsetForAlignment = (r, n, i = 0) => {
          if (!this.scrollElement) return 0;
          const s = this.getSize(),
            o = this.getScrollOffset();
          (n === "auto" && (n = r >= o + s ? "end" : "start"),
            n === "center" ? (r += (i - s) / 2) : n === "end" && (r -= s));
          const a = this.getMaxScrollOffset();
          return Math.max(Math.min(a, r), 0);
        }),
        (this.getOffsetForIndex = (r, n = "auto") => {
          r = Math.max(0, Math.min(r, this.options.count - 1));
          const i = this.getSize(),
            s = this.getScrollOffset(),
            o = this.measurementsCache[r];
          if (!o) return;
          if (n === "auto")
            if (o.end >= s + i - this.options.scrollPaddingEnd) n = "end";
            else if (o.start <= s + this.options.scrollPaddingStart)
              n = "start";
            else return [s, n];
          if (n === "end" && r === this.options.count - 1)
            return [this.getMaxScrollOffset(), n];
          const a =
            n === "end"
              ? o.end + this.options.scrollPaddingEnd
              : o.start - this.options.scrollPaddingStart;
          return [this.getOffsetForAlignment(a, n, o.size), n];
        }),
        (this.scrollToOffset = (
          r,
          { align: n = "start", behavior: i = "auto" } = {}
        ) => {
          const s = this.getOffsetForAlignment(r, n),
            o = this.now();
          ((this.scrollState = {
            index: null,
            align: n,
            behavior: i,
            startedAt: o,
            lastTargetOffset: s,
            stableFrames: 0,
          }),
            this._scrollToOffset(s, { adjustments: void 0, behavior: i }),
            this.scheduleScrollReconcile());
        }),
        (this.scrollToIndex = (
          r,
          { align: n = "auto", behavior: i = "auto" } = {}
        ) => {
          r = Math.max(0, Math.min(r, this.options.count - 1));
          const s = this.getOffsetForIndex(r, n);
          if (!s) return;
          const [o, a] = s,
            l = this.now();
          ((this.scrollState = {
            index: r,
            align: a,
            behavior: i,
            startedAt: l,
            lastTargetOffset: o,
            stableFrames: 0,
          }),
            this._scrollToOffset(o, { adjustments: void 0, behavior: i }),
            this.scheduleScrollReconcile());
        }),
        (this.scrollBy = (r, { behavior: n = "auto" } = {}) => {
          const i = this.getScrollOffset() + r,
            s = this.now();
          ((this.scrollState = {
            index: null,
            align: "start",
            behavior: n,
            startedAt: s,
            lastTargetOffset: i,
            stableFrames: 0,
          }),
            this._scrollToOffset(i, { adjustments: void 0, behavior: n }),
            this.scheduleScrollReconcile());
        }),
        (this.getTotalSize = () => {
          var r;
          const n = this.getMeasurements();
          let i;
          if (n.length === 0) i = this.options.paddingStart;
          else if (this.options.lanes === 1)
            i = ((r = n[n.length - 1]) == null ? void 0 : r.end) ?? 0;
          else {
            const s = Array(this.options.lanes).fill(null);
            let o = n.length - 1;
            for (; o >= 0 && s.some(a => a === null); ) {
              const a = n[o];
              (s[a.lane] === null && (s[a.lane] = a.end), o--);
            }
            i = Math.max(...s.filter(a => a !== null));
          }
          return Math.max(
            i - this.options.scrollMargin + this.options.paddingEnd,
            0
          );
        }),
        (this._scrollToOffset = (r, { adjustments: n, behavior: i }) => {
          this.options.scrollToFn(r, { behavior: i, adjustments: n }, this);
        }),
        (this.measure = () => {
          ((this.itemSizeCache = new Map()),
            (this.laneAssignments = new Map()),
            this.notify(!1));
        }),
        this.setOptions(t));
    }
    scheduleScrollReconcile() {
      if (!this.targetWindow) {
        this.scrollState = null;
        return;
      }
      this.rafId == null &&
        (this.rafId = this.targetWindow.requestAnimationFrame(() => {
          ((this.rafId = null), this.reconcileScroll());
        }));
    }
    reconcileScroll() {
      if (!this.scrollState || !this.scrollElement) return;
      if (this.now() - this.scrollState.startedAt > 5e3) {
        this.scrollState = null;
        return;
      }
      const n =
          this.scrollState.index != null
            ? this.getOffsetForIndex(
                this.scrollState.index,
                this.scrollState.align
              )
            : void 0,
        i = n ? n[0] : this.scrollState.lastTargetOffset,
        s = 1,
        o = i !== this.scrollState.lastTargetOffset;
      if (!o && S0(i, this.getScrollOffset())) {
        if (
          (this.scrollState.stableFrames++, this.scrollState.stableFrames >= s)
        ) {
          this.scrollState = null;
          return;
        }
      } else
        ((this.scrollState.stableFrames = 0),
          o &&
            ((this.scrollState.lastTargetOffset = i),
            (this.scrollState.behavior = "auto"),
            this._scrollToOffset(i, {
              adjustments: void 0,
              behavior: "auto",
            })));
      this.scheduleScrollReconcile();
    }
  }
  const hf = (e, t, r, n) => {
    for (; e <= t; ) {
      const i = ((e + t) / 2) | 0,
        s = r(i);
      if (s < n) e = i + 1;
      else if (s > n) t = i - 1;
      else return i;
    }
    return e > 0 ? e - 1 : 0;
  };
  function T0({ measurements: e, outerSize: t, scrollOffset: r, lanes: n }) {
    const i = e.length - 1,
      s = l => e[l].start;
    if (e.length <= n) return { startIndex: 0, endIndex: i };
    let o = hf(0, i, s, r),
      a = o;
    if (n === 1) for (; a < i && e[a].end < r + t; ) a++;
    else if (n > 1) {
      const l = Array(n).fill(0);
      for (; a < i && l.some(d => d < r + t); ) {
        const d = e[a];
        ((l[d.lane] = d.end), a++);
      }
      const c = Array(n).fill(r + t);
      for (; o >= 0 && c.some(d => d >= r); ) {
        const d = e[o];
        ((c[d.lane] = d.start), o--);
      }
      ((o = Math.max(0, o - (o % n))),
        (a = Math.min(i, a + (n - 1 - (a % n)))));
    }
    return { startIndex: o, endIndex: a };
  }
  const mf = typeof document < "u" ? er : Q;
  function R0({ useFlushSync: e = !0, ...t }) {
    const r = ri(() => ({}), {})[1],
      n = {
        ...t,
        onChange: (s, o) => {
          var a;
          (e && o ? Yo(r) : r(), (a = t.onChange) == null || a.call(t, s, o));
        },
      },
      [i] = L(() => new O0(n));
    return (
      i.setOptions(n),
      mf(() => i._didMount(), []),
      mf(() => i._willUpdate()),
      i
    );
  }
  function N0(e) {
    return R0({
      observeElementRect: A0,
      observeElementOffset: E0,
      scrollToFn: P0,
      ...e,
    });
  }
  const gf = {
      container: w({
        height: "100%",
        overflowX: "hidden",
        overflowY: "auto",
        boxSizing: "border-box",
        "@media (hover: hover) and (pointer: fine)": {
          paddingRight: "2px",
          scrollbarWidth: "thin",
          scrollbarColor: `${U.colors.onCardDivider} transparent`,
          "&::-webkit-scrollbar": { width: "8px", background: "transparent" },
          "&::-webkit-scrollbar-track": { background: "transparent" },
          "&::-webkit-scrollbar-thumb": {
            background: U.colors.onCardDivider,
            borderRadius: "8px",
            minHeight: "24px",
            border: `2px solid ${U.colors.onCardDivider}`,
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: U.colors.onCard,
            opacity: 0.8,
          },
        },
      }),
      item: w({ padding: "4px 0" }),
    },
    ki = ({
      onLayout: e,
      data: t,
      renderItem: r,
      renderHeader: n,
      renderEmpty: i,
      keyExtractor: s,
      estimateSize: o = 80,
      maxHeight: a = 300,
      overscan: l = 5,
      className: c,
      style: d = {},
      onEndReached: u,
      onEndReachedThreshold: h = 0.8,
    }) => {
      const f = he(null),
        [g, { width: m }] = La(),
        _ = he(!1);
      Q(() => {
        e && m !== null && e({ width: m ?? 0 });
      }, [e, m]);
      const y = R(() => (t?.length === 0 ? ["empty"] : t), [t]),
        b = N0({
          count: y.length,
          getScrollElement: () => f.current,
          estimateSize: () => o,
          getItemKey: s && t.length > 0 ? v => s(t[v], v) : void 0,
          overscan: l,
        });
      return (
        Q(() => {
          if (!u || !f.current) return;
          const v = () => {
              const x = f.current;
              if (!x) return;
              (x.scrollTop + x.clientHeight) / x.scrollHeight >= h
                ? _.current || ((_.current = !0), u())
                : (_.current = !1);
            },
            k = f.current;
          return (
            k.addEventListener("scroll", v),
            (_.current = !1),
            v(),
            () => {
              k.removeEventListener("scroll", v);
            }
          );
        }, [u, h, t.length]),
        p("div", {
          ref: f,
          style: { ...d, maxHeight: a },
          css: gf.container,
          className: c,
          children: p("div", {
            ref: g,
            style: {
              height: `${b.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            },
            children: b
              .getVirtualItems()
              .map(v =>
                P(
                  "div",
                  {
                    "data-index": v.index,
                    css: gf.item,
                    ref: b.measureElement,
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${v.start}px)`,
                    },
                    children: [
                      v.index === 0 && n && n(),
                      y[v.index] === "empty" && i && i(),
                      y[v.index] !== "empty" && r(t[v.index], v.index),
                    ],
                  },
                  v.key
                )
              ),
          }),
        })
      );
    },
    L0 = ({
      data: e,
      onItemClick: t,
      onHeaderClick: r,
      filterConfig: n,
      loading: i = !1,
      hideEmpty: s = !1,
      error: o = null,
      ...a
    }) => {
      const { t: l } = Be(),
        [c, d] = L(4),
        { items: u, hasNoArtwork: h } = R(() => {
          let g = !0;
          const m = [],
            _ = {};
          return (
            e.forEach(y => {
              const b = y.media_content_type;
              (typeof y.thumbnail == "string" && (g = !1),
                _[b] || (_[b] = []),
                _[b].push(y));
            }),
            Object.entries(_).forEach(([y, b]) => {
              if (
                (Object.keys(_).length > 1 &&
                  m.push({ type: "header", mediaType: y }),
                b[0]?.media_class === "track" &&
                  b[0]?.media_content_type !== "favorite")
              )
                b.forEach(v => {
                  m.push({ type: "item", item: v });
                });
              else
                for (let v = 0; v < b.length; v += c) {
                  const k = b.slice(v, v + c);
                  m.push({ type: "itemsRow", items: k });
                }
            }),
            { items: m, hasNoArtwork: g }
          );
        }, [e, c]),
        f = g => {
          switch (g.type) {
            case "header": {
              const m = n.find(
                  y =>
                    y.media_type === g.mediaType ||
                    y.media_type.slice(0, -1) === g.mediaType
                ),
                _ =
                  m?.name ??
                  g.mediaType.charAt(0).toUpperCase() + g.mediaType.slice(1);
              return p(Ga, {
                onClick: m ? () => r?.(m.media_type) : void 0,
                children: l({
                  id: `Search.categories.${_}`,
                  defaultMessage: _,
                }),
              });
            }
            case "item": {
              const { item: m } = g,
                _ = async () => {
                  await t(m);
                };
              return p(Kr, {
                numberOfColumns: c,
                children:
                  (m.media_class === "track" &&
                    m.media_content_type !== "favorite") ||
                  h
                    ? p(
                        ur,
                        {
                          imageUrl: m.thumbnail,
                          title: m.title,
                          mdiIcon: Cr(m),
                          onClick: _,
                        },
                        m.media_content_id
                      )
                    : p(
                        cr,
                        {
                          imageUrl: m.thumbnail,
                          name: m.title,
                          mdiIcon: Cr(m),
                          onClick: _,
                        },
                        m.media_content_id
                      ),
              });
            }
            case "itemsRow":
              return p(Kr, {
                numberOfColumns: c,
                children: g.items.map(m => {
                  const _ = async () => {
                    await t(m);
                  };
                  return (m.media_class === "track" &&
                    m.media_content_type !== "favorite") ||
                    h
                    ? p(
                        ur,
                        {
                          imageUrl: m.thumbnail,
                          title: m.title,
                          mdiIcon: Cr(m),
                          onClick: _,
                        },
                        m.media_content_id
                      )
                    : p(
                        cr,
                        {
                          imageUrl: m.thumbnail,
                          name: m.title,
                          mdiIcon: Cr(m),
                          onClick: _,
                        },
                        m.media_content_id
                      );
                }),
              });
            default:
              return null;
          }
        };
      return i
        ? p(lr, {})
        : p(ki, {
            onLayout: ({ width: g }) => {
              g > 800 ? d(6) : g > 390 ? d(4) : d(3);
            },
            data: u,
            renderItem: f,
            renderEmpty: () =>
              p(Y, {
                children: o
                  ? p("p", { css: Ke.mediaEmptyText, children: o })
                  : s
                    ? null
                    : p("p", {
                        css: Ke.mediaEmptyText,
                        children: l({
                          id: "Search.no_results",
                          defaultMessage: "No results found.",
                        }),
                      }),
              }),
            ...a,
          });
    },
    F0 = [
      { media_type: "artists", name: "Artists", icon: "mdi:account-music" },
      { media_type: "albums", name: "Albums", icon: "mdi:album" },
      { media_type: "tracks", name: "Tracks", icon: "mdi:music-note" },
      {
        media_type: "playlists",
        name: "Playlists",
        icon: "mdi:playlist-music",
      },
    ],
    _f = ({
      entityId: e,
      showFavorites: t,
      horizontalPadding: r,
      searchBarPosition: n = "top",
      maxHeight: i = 300,
      filterConfig: s = F0,
      additionalOptions: o = [],
      renderHeader: a,
    }) => {
      const { t: l } = Be(),
        [c, d] = L(""),
        [u, h] = L("replace"),
        f = Na(c, 600),
        [g, m] = L("all"),
        { results: _, loading: y, error: b, playItem: v } = x0(f, g, e),
        { mediaBrowserItems: k } = k0(
          e,
          g === "all" ? "favorites" : g,
          ((g === "all" && t) || g !== "all") && c === ""
        ),
        x = () =>
          P("div", {
            css: Ke.searchBarContainer,
            children: [
              !!a && a(),
              P("div", {
                css: Ke.inputRow,
                children: [
                  p(Ns, {
                    placeholder: l({ id: "Search.input_placeholder" }),
                    onChange: d,
                    value: c,
                    loading: y,
                    css: Ke.input,
                  }),
                  p(ze, {
                    align: "end",
                    side: "bottom",
                    menuItems: [
                      ...o,
                      {
                        type: "title",
                        label: l({
                          id: "Search.enqueue_mode.title",
                          defaultMessage: "Enqueue Mode",
                        }),
                      },
                      {
                        label: l({
                          id: "Search.enqueue_mode.play",
                          defaultMessage: "Play",
                        }),
                        selected: u === "play",
                        icon: Si("play"),
                        onClick: () => h("play"),
                      },
                      {
                        label: l({
                          id: "Search.enqueue_mode.replace",
                          defaultMessage: "Replace Queue",
                        }),
                        selected: u === "replace",
                        icon: Si("replace"),
                        onClick: () => h("replace"),
                      },
                      {
                        label: l({
                          id: "Search.enqueue_mode.next",
                          defaultMessage: "Add Next",
                        }),
                        selected: u === "next",
                        icon: Si("next"),
                        onClick: () => h("next"),
                      },
                      {
                        label: l({
                          id: "Search.enqueue_mode.add",
                          defaultMessage: "Add to Queue",
                        }),
                        selected: u === "add",
                        icon: Si("add"),
                        onClick: () => h("add"),
                      },
                    ],
                    renderTrigger: M =>
                      p(W, {
                        size: "x-small",
                        icon: !o || o.length === 0 ? Si(u) : "mdi:cog",
                        ...M,
                      }),
                  }),
                ],
              }),
              p("div", { css: Ke.filterContainer, children: $() }),
            ],
          }),
        $ = () =>
          [
            { media_type: "all", name: "All", icon: "mdi:all-inclusive" },
            ...s,
          ].map(M =>
            p(
              Ye,
              {
                css: Ke.chip,
                style: {
                  "--mmpc-chip-horizontal-margin": `${r}px`,
                  opacity: g === M.media_type ? 1 : 0.6,
                  fontWeight: g === M.media_type ? "bold" : "normal",
                },
                onClick: () => m(M.media_type),
                icon: M.icon,
                children: l({
                  id: `Search.categories.${M.name}`,
                  defaultMessage: M.name,
                }),
              },
              M.media_type
            )
          );
      return P("div", {
        css: Ke.root,
        style: { "--mmpc-search-padding": `${r}px` },
        children: [
          p(L0, {
            renderHeader: n === "top" ? x : void 0,
            data: c === "" && k.length > 0 ? k : _,
            error: b,
            hideEmpty: c === "" && g === "all" && !t,
            onItemClick: M => v(M, e, u),
            style: { "--mmpc-search-padding": `${r}px` },
            maxHeight: i,
            filterConfig: s,
            onHeaderClick: m,
          }),
          n === "bottom" && x(),
        ],
      });
    },
    Si = e => {
      switch (e) {
        case "play":
          return "mdi:play-circle";
        case "replace":
          return "mdi:playlist-remove";
        case "next":
          return "mdi:playlist-play";
        case "add":
          return "mdi:playlist-plus";
        default:
          return "mdi:play-circle";
      }
    },
    yf = $t({}),
    bf = Ue(({ hass: e, children: t }) =>
      p(yf.Provider, { value: { hass: e }, children: t })
    ),
    qe = () => {
      const e = de(yf);
      if (!e.hass)
        throw new Error("useHass must be used within a HassContextProvider");
      return e.hass;
    };
  function Gr({ actionConfig: e, rootElement: t, overrideCallback: r }) {
    const n = R(
      () => ({
        onTap: e?.tap_action ? () => aa(t, e, "tap", V()) : void 0,
        onLongPress: e?.hold_action ? () => aa(t, e, "hold", V()) : void 0,
        onDoubleTap: e?.double_tap_action
          ? () => aa(t, e, "double_tap", V())
          : void 0,
        ...(r ?? {}),
      }),
      [e, r, t]
    );
    return lv(n);
  }
  class D0 {
    constructor(t, r) {
      ((this.pixels = t), (this.opts = r));
      const { sigBits: n } = r,
        i = (k, x, $) => (k << (2 * n)) + (x << n) + $;
      this.getColorIndex = i;
      const s = 8 - n,
        o = 1 << (3 * n),
        a = new Uint32Array(o);
      let l, c, d, u, h, f, g, m, _, y;
      ((l = d = h = 0), (c = u = f = Number.MAX_VALUE));
      const b = t.length / 4;
      let v = 0;
      for (; v < b; ) {
        const k = v * 4;
        if (
          (v++,
          (g = t[k + 0]),
          (m = t[k + 1]),
          (_ = t[k + 2]),
          (y = t[k + 3]),
          y === 0)
        )
          continue;
        ((g = g >> s), (m = m >> s), (_ = _ >> s));
        const x = i(g, m, _);
        (a[x] === void 0 && (a[x] = 0),
          (a[x] += 1),
          g > l && (l = g),
          g < c && (c = g),
          m > d && (d = m),
          m < u && (u = m),
          _ > h && (h = _),
          _ < f && (f = _));
      }
      ((this._colorCount = a.reduce((k, x) => (x > 0 ? k + 1 : k), 0)),
        (this.hist = a),
        (this.rmax = l),
        (this.rmin = c),
        (this.gmax = d),
        (this.gmin = u),
        (this.bmax = h),
        (this.bmin = f));
    }
    get colorCount() {
      return this._colorCount;
    }
  }
  class z0 {
    scaleDown(t) {
      const r = this.getWidth(),
        n = this.getHeight();
      let i = 1;
      if (t.maxDimension > 0) {
        const s = Math.max(r, n);
        s > t.maxDimension && (i = t.maxDimension / s);
      } else i = 1 / t.quality;
      i < 1 && this.resize(r * i, n * i, i);
    }
  }
  function B0(e, t) {
    if (t.length > 0) {
      const r = e.data,
        n = r.length / 4;
      let i, s, o, a, l;
      for (let c = 0; c < n; c++) {
        ((i = c * 4),
          (s = r[i + 0]),
          (o = r[i + 1]),
          (a = r[i + 2]),
          (l = r[i + 3]));
        for (let d = 0; d < t.length; d++)
          if (!t[d]?.(s, o, a, l)) {
            r[i + 3] = 0;
            break;
          }
      }
    }
    return e;
  }
  function V0(e) {
    const t = new URL(e, location.href);
    return (
      t.protocol === location.protocol &&
      t.host === location.host &&
      t.port === location.port
    );
  }
  function q0(e, t) {
    const r = new URL(e),
      n = new URL(t);
    return (
      r.protocol === n.protocol &&
      r.hostname === n.hostname &&
      r.port === n.port
    );
  }
  class j0 extends z0 {
    _getCanvas() {
      if (!this._canvas) throw new Error("Canvas is not initialized");
      return this._canvas;
    }
    _getContext() {
      if (!this._context) throw new Error("Context is not initialized");
      return this._context;
    }
    _getWidth() {
      if (!this._width) throw new Error("Width is not initialized");
      return this._width;
    }
    _getHeight() {
      if (!this._height) throw new Error("Height is not initialized");
      return this._height;
    }
    _initCanvas() {
      const t = this.image;
      if (!t) throw new Error("Image is not initialized");
      const r = (this._canvas = document.createElement("canvas")),
        n = r.getContext("2d");
      if (!n) throw new ReferenceError("Failed to create canvas context");
      ((this._context = n),
        (r.className = "@vibrant/canvas"),
        (r.style.display = "none"),
        (this._width = r.width = t.width),
        (this._height = r.height = t.height),
        n.drawImage(t, 0, 0),
        document.body.appendChild(r));
    }
    load(t) {
      let r, n;
      if (typeof t == "string")
        ((r = document.createElement("img")),
          (n = t),
          !V0(n) &&
            !q0(window.location.href, n) &&
            (r.crossOrigin = "anonymous"),
          (r.src = n));
      else if (t instanceof HTMLImageElement) ((r = t), (n = t.src));
      else
        return Promise.reject(
          new Error("Cannot load buffer as an image in browser")
        );
      return (
        (this.image = r),
        new Promise((i, s) => {
          const o = () => {
            (this._initCanvas(), i(this));
          };
          r.complete
            ? o()
            : ((r.onload = o),
              (r.onerror = a => s(new Error(`Fail to load image: ${n}`))));
        })
      );
    }
    clear() {
      this._getContext().clearRect(0, 0, this._getWidth(), this._getHeight());
    }
    update(t) {
      this._getContext().putImageData(t, 0, 0);
    }
    getWidth() {
      return this._getWidth();
    }
    getHeight() {
      return this._getHeight();
    }
    resize(t, r, n) {
      if (!this.image) throw new Error("Image is not initialized");
      ((this._width = this._getCanvas().width = t),
        (this._height = this._getCanvas().height = r),
        this._getContext().scale(n, n),
        this._getContext().drawImage(this.image, 0, 0));
    }
    getPixelCount() {
      return this._getWidth() * this._getHeight();
    }
    getImageData() {
      return this._getContext().getImageData(
        0,
        0,
        this._getWidth(),
        this._getHeight()
      );
    }
    remove() {
      this._canvas &&
        this._canvas.parentNode &&
        this._canvas.parentNode.removeChild(this._canvas);
    }
  }
  function Mi(e, ...t) {
    return (
      t.forEach(r => {
        if (r) {
          for (const n in r)
            if (r.hasOwnProperty(n)) {
              const i = r[n];
              Array.isArray(i)
                ? (e[n] = i.slice(0))
                : typeof i == "object"
                  ? (e[n] || (e[n] = {}), Mi(e[n], i))
                  : (e[n] = i);
            }
        }
      }),
      e
    );
  }
  function U0(e, t) {
    const { colorCount: r, quantizer: n, generators: i, filters: s } = e,
      o = { colorCount: r },
      a = typeof n == "string" ? { name: n, options: {} } : n;
    return (
      (a.options = Mi({}, o, a.options)),
      Mi({}, { quantizer: a, generators: i, filters: s }, t)
    );
  }
  class K0 {
    constructor(t, r = {}) {
      ((this._src = t), (this._opts = Mi({}, $r.DefaultOpts, r)));
    }
    maxColorCount(t) {
      return ((this._opts.colorCount = t), this);
    }
    maxDimension(t) {
      return ((this._opts.maxDimension = t), this);
    }
    addFilter(t) {
      return (
        this._opts.filters
          ? this._opts.filters.push(t)
          : (this._opts.filters = [t]),
        this
      );
    }
    removeFilter(t) {
      if (this._opts.filters) {
        const r = this._opts.filters.indexOf(t);
        r > 0 && this._opts.filters.splice(r);
      }
      return this;
    }
    clearFilters() {
      return ((this._opts.filters = []), this);
    }
    quality(t) {
      return ((this._opts.quality = t), this);
    }
    useImageClass(t) {
      return ((this._opts.ImageClass = t), this);
    }
    useGenerator(t, r) {
      return (
        this._opts.generators || (this._opts.generators = []),
        this._opts.generators.push(r ? { name: t, options: r } : t),
        this
      );
    }
    useQuantizer(t, r) {
      return ((this._opts.quantizer = r ? { name: t, options: r } : t), this);
    }
    build() {
      return new $r(this._src, this._opts);
    }
    getPalette() {
      return this.build().getPalette();
    }
  }
  class Wa {
    constructor(t) {
      ((this.pipeline = t), (this._map = {}));
    }
    names() {
      return Object.keys(this._map);
    }
    has(t) {
      return !!this._map[t];
    }
    get(t) {
      return this._map[t];
    }
    register(t, r) {
      return ((this._map[t] = r), this.pipeline);
    }
  }
  class G0 {
    constructor() {
      ((this.filter = new Wa(this)),
        (this.quantizer = new Wa(this)),
        (this.generator = new Wa(this)));
    }
    _buildProcessTasks({ filters: t, quantizer: r, generators: n }) {
      return (
        n.length === 1 && n[0] === "*" && (n = this.generator.names()),
        {
          filters: t.map(s => i(this.filter, s)),
          quantizer: i(this.quantizer, r),
          generators: n.map(s => i(this.generator, s)),
        }
      );
      function i(s, o) {
        let a, l;
        return (
          typeof o == "string" ? (a = o) : ((a = o.name), (l = o.options)),
          { name: a, fn: s.get(a), options: l }
        );
      }
    }
    async process(t, r) {
      const {
          filters: n,
          quantizer: i,
          generators: s,
        } = this._buildProcessTasks(r),
        o = await this._filterColors(n, t),
        a = await this._generateColors(i, o),
        l = await this._generatePalettes(s, a);
      return { colors: a, palettes: l };
    }
    _filterColors(t, r) {
      return Promise.resolve(
        B0(
          r,
          t.map(({ fn: n }) => n)
        )
      );
    }
    _generateColors(t, r) {
      return Promise.resolve(t.fn(r.data, t.options));
    }
    async _generatePalettes(t, r) {
      const n = await Promise.all(
        t.map(({ fn: i, options: s }) => Promise.resolve(i(r, s)))
      );
      return Promise.resolve(
        n.reduce((i, s, o) => ((i[t[o].name] = s), i), {})
      );
    }
  }
  function W0(e, t, r) {
    return (
      "#" + ((1 << 24) + (e << 16) + (t << 8) + r).toString(16).slice(1, 7)
    );
  }
  function H0(e, t, r) {
    ((e /= 255), (t /= 255), (r /= 255));
    const n = Math.max(e, t, r),
      i = Math.min(e, t, r);
    let s = 0,
      o = 0;
    const a = (n + i) / 2;
    if (n !== i) {
      const l = n - i;
      switch (((o = a > 0.5 ? l / (2 - n - i) : l / (n + i)), n)) {
        case e:
          s = (t - r) / l + (t < r ? 6 : 0);
          break;
        case t:
          s = (r - e) / l + 2;
          break;
        case r:
          s = (e - t) / l + 4;
          break;
      }
      s /= 6;
    }
    return [s, o, a];
  }
  function dr(e, t, r) {
    let n, i, s;
    function o(a, l, c) {
      return (
        c < 0 && (c += 1),
        c > 1 && (c -= 1),
        c < 1 / 6
          ? a + (l - a) * 6 * c
          : c < 1 / 2
            ? l
            : c < 2 / 3
              ? a + (l - a) * (2 / 3 - c) * 6
              : a
      );
    }
    if (t === 0) n = i = s = r;
    else {
      const a = r < 0.5 ? r * (1 + t) : r + t - r * t,
        l = 2 * r - a;
      ((n = o(l, a, e + 1 / 3)), (i = o(l, a, e)), (s = o(l, a, e - 1 / 3)));
    }
    return [n * 255, i * 255, s * 255];
  }
  class bt {
    static applyFilters(t, r) {
      return r.length > 0
        ? t.filter(({ r: n, g: i, b: s }) => {
            for (let o = 0; o < r.length; o++)
              if (!r[o]?.(n, i, s, 255)) return !1;
            return !0;
          })
        : t;
    }
    static clone(t) {
      return new bt(t._rgb, t._population);
    }
    get r() {
      return this._rgb[0];
    }
    get g() {
      return this._rgb[1];
    }
    get b() {
      return this._rgb[2];
    }
    get rgb() {
      return this._rgb;
    }
    get hsl() {
      if (!this._hsl) {
        const [t, r, n] = this._rgb;
        this._hsl = H0(t, r, n);
      }
      return this._hsl;
    }
    get hex() {
      if (!this._hex) {
        const [t, r, n] = this._rgb;
        this._hex = W0(t, r, n);
      }
      return this._hex;
    }
    get population() {
      return this._population;
    }
    toJSON() {
      return { rgb: this.rgb, population: this.population };
    }
    getYiq() {
      if (!this._yiq) {
        const t = this._rgb;
        this._yiq = (t[0] * 299 + t[1] * 587 + t[2] * 114) / 1e3;
      }
      return this._yiq;
    }
    get titleTextColor() {
      return (
        this._titleTextColor ||
          (this._titleTextColor = this.getYiq() < 200 ? "#fff" : "#000"),
        this._titleTextColor
      );
    }
    get bodyTextColor() {
      return (
        this._bodyTextColor ||
          (this._bodyTextColor = this.getYiq() < 150 ? "#fff" : "#000"),
        this._bodyTextColor
      );
    }
    constructor(t, r) {
      ((this._rgb = t), (this._population = r));
    }
  }
  const vf = class bc {
    constructor(t, r) {
      ((this._src = t), (this.opts = Mi({}, bc.DefaultOpts, r)));
    }
    static use(t) {
      this._pipeline = t;
    }
    static from(t) {
      return new K0(t);
    }
    get result() {
      return this._result;
    }
    _process(t, r) {
      t.scaleDown(this.opts);
      const n = U0(this.opts, r);
      return bc._pipeline.process(t.getImageData(), n);
    }
    async getPalette() {
      const t = new this.opts.ImageClass();
      try {
        const r = await t.load(this._src),
          n = await this._process(r, { generators: ["default"] });
        this._result = n;
        const i = n.palettes.default;
        if (!i)
          throw new Error(
            "Something went wrong and a palette was not found, please file a bug against our GitHub repo: https://github.com/vibrant-Colors/node-vibrant/"
          );
        return (t.remove(), i);
      } catch (r) {
        return (t.remove(), Promise.reject(r));
      }
    }
    async getPalettes() {
      const t = new this.opts.ImageClass();
      try {
        const r = await t.load(this._src),
          n = await this._process(r, { generators: ["*"] });
        this._result = n;
        const i = n.palettes;
        return (t.remove(), i);
      } catch (r) {
        return (t.remove(), Promise.reject(r));
      }
    }
  };
  vf.DefaultOpts = { colorCount: 64, quality: 5, filters: [] };
  let $r = vf;
  (($r.DefaultOpts.quantizer = "mmcq"),
    ($r.DefaultOpts.generators = ["default"]),
    ($r.DefaultOpts.filters = ["default"]),
    ($r.DefaultOpts.ImageClass = j0));
  const Ha = 5,
    Ja = 8 - Ha;
  class Ts {
    constructor(t, r, n, i, s, o, a) {
      ((this.histogram = a),
        (this._volume = -1),
        (this._avg = null),
        (this._count = -1),
        (this.dimension = { r1: t, r2: r, g1: n, g2: i, b1: s, b2: o }));
    }
    static build(t) {
      const r = new D0(t, { sigBits: Ha }),
        { rmin: n, rmax: i, gmin: s, gmax: o, bmin: a, bmax: l } = r;
      return new Ts(n, i, s, o, a, l, r);
    }
    invalidate() {
      ((this._volume = this._count = -1), (this._avg = null));
    }
    volume() {
      if (this._volume < 0) {
        const { r1: t, r2: r, g1: n, g2: i, b1: s, b2: o } = this.dimension;
        this._volume = (r - t + 1) * (i - n + 1) * (o - s + 1);
      }
      return this._volume;
    }
    count() {
      if (this._count < 0) {
        const { hist: t, getColorIndex: r } = this.histogram,
          { r1: n, r2: i, g1: s, g2: o, b1: a, b2: l } = this.dimension;
        let c = 0;
        for (let d = n; d <= i; d++)
          for (let u = s; u <= o; u++)
            for (let h = a; h <= l; h++) {
              const f = r(d, u, h);
              t[f] && (c += t[f]);
            }
        this._count = c;
      }
      return this._count;
    }
    clone() {
      const { histogram: t } = this,
        { r1: r, r2: n, g1: i, g2: s, b1: o, b2: a } = this.dimension;
      return new Ts(r, n, i, s, o, a, t);
    }
    avg() {
      if (!this._avg) {
        const { hist: t, getColorIndex: r } = this.histogram,
          { r1: n, r2: i, g1: s, g2: o, b1: a, b2: l } = this.dimension;
        let c = 0;
        const d = 1 << (8 - Ha);
        let u, h, f;
        u = h = f = 0;
        for (let g = n; g <= i; g++)
          for (let m = s; m <= o; m++)
            for (let _ = a; _ <= l; _++) {
              const y = r(g, m, _),
                b = t[y];
              b &&
                ((c += b),
                (u += b * (g + 0.5) * d),
                (h += b * (m + 0.5) * d),
                (f += b * (_ + 0.5) * d));
            }
        c
          ? (this._avg = [~~(u / c), ~~(h / c), ~~(f / c)])
          : (this._avg = [
              ~~((d * (n + i + 1)) / 2),
              ~~((d * (s + o + 1)) / 2),
              ~~((d * (a + l + 1)) / 2),
            ]);
      }
      return this._avg;
    }
    contains(t) {
      let [r, n, i] = t;
      const { r1: s, r2: o, g1: a, g2: l, b1: c, b2: d } = this.dimension;
      return (
        (r >>= Ja),
        (n >>= Ja),
        (i >>= Ja),
        r >= s && r <= o && n >= a && n <= l && i >= c && i <= d
      );
    }
    split() {
      const { hist: t, getColorIndex: r } = this.histogram,
        { r1: n, r2: i, g1: s, g2: o, b1: a, b2: l } = this.dimension,
        c = this.count();
      if (!c) return [];
      if (c === 1) return [this.clone()];
      const d = i - n + 1,
        u = o - s + 1,
        h = l - a + 1,
        f = Math.max(d, u, h);
      let g = null,
        m,
        _;
      m = _ = 0;
      let y = null;
      if (f === d) {
        ((y = "r"), (g = new Uint32Array(i + 1)));
        for (let $ = n; $ <= i; $++) {
          m = 0;
          for (let M = s; M <= o; M++)
            for (let C = a; C <= l; C++) {
              const O = r($, M, C);
              t[O] && (m += t[O]);
            }
          ((_ += m), (g[$] = _));
        }
      } else if (f === u) {
        ((y = "g"), (g = new Uint32Array(o + 1)));
        for (let $ = s; $ <= o; $++) {
          m = 0;
          for (let M = n; M <= i; M++)
            for (let C = a; C <= l; C++) {
              const O = r(M, $, C);
              t[O] && (m += t[O]);
            }
          ((_ += m), (g[$] = _));
        }
      } else {
        ((y = "b"), (g = new Uint32Array(l + 1)));
        for (let $ = a; $ <= l; $++) {
          m = 0;
          for (let M = n; M <= i; M++)
            for (let C = s; C <= o; C++) {
              const O = r(M, C, $);
              t[O] && (m += t[O]);
            }
          ((_ += m), (g[$] = _));
        }
      }
      let b = -1;
      const v = new Uint32Array(g.length);
      for (let $ = 0; $ < g.length; $++) {
        const M = g[$];
        M && (b < 0 && M > _ / 2 && (b = $), (v[$] = _ - M));
      }
      const k = this;
      function x($) {
        const M = $ + "1",
          C = $ + "2",
          O = k.dimension[M];
        let E = k.dimension[C];
        const A = k.clone(),
          S = k.clone(),
          I = b - O,
          q = E - b;
        for (
          I <= q
            ? ((E = Math.min(E - 1, ~~(b + q / 2))), (E = Math.max(0, E)))
            : ((E = Math.max(O, ~~(b - 1 - I / 2))),
              (E = Math.min(k.dimension[C], E)));
          !g[E];
        )
          E++;
        let te = v[E];
        for (; !te && g[E - 1]; ) te = v[--E];
        return ((A.dimension[C] = E), (S.dimension[M] = E + 1), [A, S]);
      }
      return x(y);
    }
  }
  class wf {
    _sort() {
      this._sorted ||
        (this.contents.sort(this._comparator), (this._sorted = !0));
    }
    constructor(t) {
      ((this._comparator = t), (this.contents = []), (this._sorted = !1));
    }
    push(t) {
      (this.contents.push(t), (this._sorted = !1));
    }
    peek(t) {
      return (
        this._sort(),
        (t = typeof t == "number" ? t : this.contents.length - 1),
        this.contents[t]
      );
    }
    pop() {
      return (this._sort(), this.contents.pop());
    }
    size() {
      return this.contents.length;
    }
    map(t) {
      return (this._sort(), this.contents.map(t));
    }
  }
  const J0 = 0.75;
  function xf(e, t) {
    let r = e.size();
    for (; e.size() < t; ) {
      const n = e.pop();
      if (n && n.count() > 0) {
        const [i, s] = n.split();
        if (!i || (e.push(i), s && s.count() > 0 && e.push(s), e.size() === r))
          break;
        r = e.size();
      } else break;
    }
  }
  const Y0 = (e, t) => {
    if (e.length === 0 || t.colorCount < 2 || t.colorCount > 256)
      throw new Error("Wrong MMCQ parameters");
    const r = Ts.build(e);
    r.histogram.colorCount;
    const n = new wf((s, o) => s.count() - o.count());
    (n.push(r), xf(n, J0 * t.colorCount));
    const i = new wf((s, o) => s.count() * s.volume() - o.count() * o.volume());
    return ((i.contents = n.contents), xf(i, t.colorCount - i.size()), Q0(i));
  };
  function Q0(e) {
    const t = [];
    for (; e.size(); ) {
      const r = e.pop(),
        n = r.avg(),
        [i, s, o] = n;
      t.push(new bt(n, r.count()));
    }
    return t;
  }
  const X0 = {
    targetDarkLuma: 0.26,
    maxDarkLuma: 0.45,
    minLightLuma: 0.55,
    targetLightLuma: 0.74,
    minNormalLuma: 0.3,
    targetNormalLuma: 0.5,
    maxNormalLuma: 0.7,
    targetMutesSaturation: 0.3,
    maxMutesSaturation: 0.4,
    targetVibrantSaturation: 1,
    minVibrantSaturation: 0.35,
    weightSaturation: 3,
    weightLuma: 6.5,
    weightPopulation: 0.5,
  };
  function Z0(e) {
    let t = 0;
    return (
      e.forEach(r => {
        t = Math.max(t, r.population);
      }),
      t
    );
  }
  function ev(e, t) {
    return (
      e.Vibrant === t ||
      e.DarkVibrant === t ||
      e.LightVibrant === t ||
      e.Muted === t ||
      e.DarkMuted === t ||
      e.LightMuted === t
    );
  }
  function tv(e, t, r, n, i, s, o) {
    function a(...c) {
      let d = 0,
        u = 0;
      for (let h = 0; h < c.length; h += 2) {
        const f = c[h],
          g = c[h + 1];
        !f || !g || ((d += f * g), (u += g));
      }
      return d / u;
    }
    function l(c, d) {
      return 1 - Math.abs(c - d);
    }
    return a(
      l(e, t),
      o.weightSaturation,
      l(r, n),
      o.weightLuma,
      i / s,
      o.weightPopulation
    );
  }
  function $n(e, t, r, n, i, s, o, a, l, c) {
    let d = null,
      u = 0;
    return (
      t.forEach(h => {
        const [, f, g] = h.hsl;
        if (f >= a && f <= l && g >= i && g <= s && !ev(e, h)) {
          const m = tv(f, o, g, n, h.population, r, c);
          (d === null || m > u) && ((d = h), (u = m));
        }
      }),
      d
    );
  }
  function rv(e, t, r) {
    const n = {
      Vibrant: null,
      DarkVibrant: null,
      LightVibrant: null,
      Muted: null,
      DarkMuted: null,
      LightMuted: null,
    };
    return (
      (n.Vibrant = $n(
        n,
        e,
        t,
        r.targetNormalLuma,
        r.minNormalLuma,
        r.maxNormalLuma,
        r.targetVibrantSaturation,
        r.minVibrantSaturation,
        1,
        r
      )),
      (n.LightVibrant = $n(
        n,
        e,
        t,
        r.targetLightLuma,
        r.minLightLuma,
        1,
        r.targetVibrantSaturation,
        r.minVibrantSaturation,
        1,
        r
      )),
      (n.DarkVibrant = $n(
        n,
        e,
        t,
        r.targetDarkLuma,
        0,
        r.maxDarkLuma,
        r.targetVibrantSaturation,
        r.minVibrantSaturation,
        1,
        r
      )),
      (n.Muted = $n(
        n,
        e,
        t,
        r.targetNormalLuma,
        r.minNormalLuma,
        r.maxNormalLuma,
        r.targetMutesSaturation,
        0,
        r.maxMutesSaturation,
        r
      )),
      (n.LightMuted = $n(
        n,
        e,
        t,
        r.targetLightLuma,
        r.minLightLuma,
        1,
        r.targetMutesSaturation,
        0,
        r.maxMutesSaturation,
        r
      )),
      (n.DarkMuted = $n(
        n,
        e,
        t,
        r.targetDarkLuma,
        0,
        r.maxDarkLuma,
        r.targetMutesSaturation,
        0,
        r.maxMutesSaturation,
        r
      )),
      n
    );
  }
  function nv(e, t, r) {
    if (!e.Vibrant && !e.DarkVibrant && !e.LightVibrant) {
      if (!e.DarkVibrant && e.DarkMuted) {
        let [n, i, s] = e.DarkMuted.hsl;
        ((s = r.targetDarkLuma), (e.DarkVibrant = new bt(dr(n, i, s), 0)));
      }
      if (!e.LightVibrant && e.LightMuted) {
        let [n, i, s] = e.LightMuted.hsl;
        ((s = r.targetDarkLuma), (e.DarkVibrant = new bt(dr(n, i, s), 0)));
      }
    }
    if (!e.Vibrant && e.DarkVibrant) {
      let [n, i, s] = e.DarkVibrant.hsl;
      ((s = r.targetNormalLuma), (e.Vibrant = new bt(dr(n, i, s), 0)));
    } else if (!e.Vibrant && e.LightVibrant) {
      let [n, i, s] = e.LightVibrant.hsl;
      ((s = r.targetNormalLuma), (e.Vibrant = new bt(dr(n, i, s), 0)));
    }
    if (!e.DarkVibrant && e.Vibrant) {
      let [n, i, s] = e.Vibrant.hsl;
      ((s = r.targetDarkLuma), (e.DarkVibrant = new bt(dr(n, i, s), 0)));
    }
    if (!e.LightVibrant && e.Vibrant) {
      let [n, i, s] = e.Vibrant.hsl;
      ((s = r.targetLightLuma), (e.LightVibrant = new bt(dr(n, i, s), 0)));
    }
    if (!e.Muted && e.Vibrant) {
      let [n, i, s] = e.Vibrant.hsl;
      ((s = r.targetMutesSaturation), (e.Muted = new bt(dr(n, i, s), 0)));
    }
    if (!e.DarkMuted && e.DarkVibrant) {
      let [n, i, s] = e.DarkVibrant.hsl;
      ((s = r.targetMutesSaturation), (e.DarkMuted = new bt(dr(n, i, s), 0)));
    }
    if (!e.LightMuted && e.LightVibrant) {
      let [n, i, s] = e.LightVibrant.hsl;
      ((s = r.targetMutesSaturation), (e.LightMuted = new bt(dr(n, i, s), 0)));
    }
  }
  const iv = (e, t) => {
      t = Object.assign({}, X0, t);
      const r = Z0(e),
        n = rv(e, r, t);
      return (nv(n, r, t), n);
    },
    sv = new G0().filter
      .register(
        "default",
        (e, t, r, n) => n >= 125 && !(e > 250 && t > 250 && r > 250)
      )
      .quantizer.register("mmcq", Y0)
      .generator.register("default", iv);
  $r.use(sv);
  function kf() {
    const {
        attributes: { entity_picture: e, entity_picture_local: t },
      } = Me(),
      r = t || e,
      n = he(null),
      i = he(null),
      [s, o] = L(null),
      [a, l] = L(Ur()),
      c = T(() => {
        r &&
          r !== n.current &&
          ((n.current = r),
          i.current && clearTimeout(i.current),
          (i.current = setTimeout(() => {
            n.current === r &&
              $r
                .from(r)
                .getPalette()
                .then(g => {
                  o(g);
                })
                .catch(g => {
                  (o(null),
                    console.error("Error getting color with Vibrant:", g));
                });
          }, 800)));
      }, [r]);
    (Q(
      () => (
        r && c(),
        () => {
          i.current && clearTimeout(i.current);
        }
      ),
      [r, c]
    ),
      Q(() => {
        const g = window.matchMedia("(prefers-color-scheme: dark)"),
          m = () => l(Ur());
        if ((l(Ur()), g.addEventListener))
          return (
            g.addEventListener("change", m),
            () => g.removeEventListener("change", m)
          );
      }, []));
    const d = T(g => {
        const m = Fb(g);
        if (m) {
          const _ = Nb(m);
          return _ ? { h: _[0], s: _[1], l: _[2], a: _[3] ?? 1 } : null;
        }
        return null;
      }, []),
      u = R(() => {
        const g = d("--card-background-color"),
          m = d("--ha-dialog-surface-background") ??
            d("--mdc-theme-surface") ?? { h: 0, s: 0, l: a ? 0 : 100, a: 1 },
          _ = d("--primary-color"),
          y = d("--secondary-background-color"),
          b = d("--divider-color");
        return {
          cardBackgroundColor: g,
          haDialogSurfaceBackground: m,
          primaryColor: _,
          secondaryBackgroundColor: y,
          dividerColor: b,
        };
      }, [a, d]),
      h = R(() => {
        if (a || !s) return null;
        const g = s.Vibrant,
          m = s.LightVibrant ?? s.Vibrant,
          _ = s.DarkVibrant ?? s.Muted;
        if (!m || !_ || !g) return null;
        const y = An(m.hsl),
          b = { ...y, s: u.primaryColor?.s ?? y.s, l: u.primaryColor?.l ?? 50 },
          v = {
            ...b,
            s: u.cardBackgroundColor?.s ?? 4.35,
            l: u.cardBackgroundColor?.l ?? 95.49,
          },
          k = { ...Sf(v) };
        return {
          artVars: {
            "--art-color": `${ke(An(g.hsl))}`,
            "--art-alternative-color": `${ke(An(_.hsl))}`,
            "--art-surface-color": `${ke(v)}`,
          },
          haVars: {
            "--primary-color": `${ke(b)}`,
            "--ha-card-background": `${ke(v)}`,
            "--card-background-color": `${ke(v)}`,
            "--primary-text-color": `${ke(k)}`,
            "--secondary-text-color": `${ke({ ...k, l: k.l * 1.1 })}`,
            "--icon-primary-color": `${ke(k)}`,
            "--divider-color": `${ke({ ...v, s: u.dividerColor?.s ?? v.s, l: u.dividerColor?.l ?? 88, a: u.dividerColor?.a ?? 0.2 })}`,
            "--clear-background-color": `${ke({ ...v, l: 10 })}`,
            "--secondary-background-color": `${ke({ ...k, s: u.secondaryBackgroundColor?.s ?? k.s, l: u.secondaryBackgroundColor?.l ?? 95 })}`,
            "--ha-dialog-surface-background": `${ke({ ...u.haDialogSurfaceBackground, h: b.h, a: 1 })}`,
          },
        };
      }, [s, a, u]),
      f = R(() => {
        if (!a || !s) return null;
        const g = s.Vibrant,
          m = s.DarkVibrant ?? s.Vibrant,
          _ = s.LightVibrant ?? s.Muted;
        if (!m || !_ || !g) return null;
        const y = An(m.hsl),
          b = {
            ...y,
            s: u.primaryColor?.s ?? y.s,
            l: u.primaryColor?.l ?? 50,
            a: u.primaryColor?.a ?? 1,
          },
          v = {
            ...b,
            s: u.cardBackgroundColor?.s ?? 2.91,
            l: u.cardBackgroundColor?.l ?? 20.2,
            a: u.cardBackgroundColor?.a ?? 1,
          },
          k = { ...Sf(v) };
        return {
          artVars: {
            "--art-color": `${ke(An(g.hsl))}`,
            "--art-alternative-color": `${ke(An(_.hsl))}`,
            "--art-surface-color": `${ke(v)}`,
          },
          haVars: {
            "--primary-color": `${ke(b)}`,
            "--ha-card-background": `${ke(v)}`,
            "--card-background-color": `${ke(v)}`,
            "--primary-text-color": `${ke(k)}`,
            "--secondary-text-color": `${ke({ ...k, l: k.l * 0.9 })}`,
            "--icon-primary-color": `${ke(k)}`,
            "--divider-color": `${ke({ ...v, s: u.dividerColor?.s ?? v.s, l: u.dividerColor?.l ?? 25, a: u.dividerColor?.a ?? 0.2 })}`,
            "--clear-background-color": `${ke({ ...v, l: 0 })}`,
            "--secondary-background-color": `${ke({ ...v, s: u.secondaryBackgroundColor?.s ?? k.s, l: u.secondaryBackgroundColor?.l ?? 19 })}`,
            "--ha-dialog-surface-background": `${ke({ ...u.haDialogSurfaceBackground, h: b.h, a: 1 })}`,
          },
        };
      }, [s, a, u]);
    return R(
      () => ({
        artVars: a ? f?.artVars : h?.artVars,
        haVars: a ? f?.haVars : h?.haVars,
      }),
      [a, f, h]
    );
  }
  const An = e => {
      const t = Math.round(e[0] * 360),
        r = Math.round(e[1] * 100),
        n = Math.round(e[2] * 100);
      return { h: t, s: r, l: n };
    },
    Sf = ({ h: e, s: t, l: r }) => {
      const n = (e + 180) % 360,
        i = 100 - r;
      return { h: n, s: t, l: i };
    },
    ke = ({ h: e, s: t, l: r, a: n }) =>
      `hsla(${e}deg, ${t}%, ${r}%, ${n || 1})`,
    ov = "ontouchstart" in window,
    av = {
      longPressIndicator: w({
        position: "fixed",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        backgroundColor: "var(--primary-color, rgba(7, 114, 244))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 9,
        animation: "pulse 1s infinite",
        transform: "translate(-50%, -50%)",
        "@keyframes pulse": {
          "0%": {
            transform: "translate(-50%, -50%) scale(0.95)",
            opacity: 0.6,
          },
          "50%": { transform: "translate(-50%, -50%) scale(1)", opacity: 0.8 },
          "100%": {
            transform: "translate(-50%, -50%) scale(0.95)",
            opacity: 0.6,
          },
        },
      }),
    };
  function lv({ onTap: e, onLongPress: t, onDoubleTap: r }) {
    const n = he(null),
      i = he(0),
      s = he(null),
      o = he(null),
      [a, l] = L(!1),
      [c, d] = L(!1),
      [u, h] = L({ x: 0, y: 0 }),
      f = he(null),
      g = T(() => {
        (s.current && clearTimeout(s.current),
          o.current && clearTimeout(o.current),
          d(!1),
          (n.current = null),
          (i.current = 0),
          (f.current = null));
      }, [d]),
      m = T(
        () =>
          c
            ? p("div", {
                css: av.longPressIndicator,
                style: { left: `${u.x}px`, top: `${u.y}px` },
              })
            : null,
        [c, u]
      ),
      _ = T(() => {
        const A = Date.now();
        return !!(n.current && A - n.current >= 500);
      }, []),
      y = T((A, S) => {
        h({ x: A, y: S });
      }, []),
      b = T(
        (A, S) => {
          ((n.current = Date.now()),
            y(A, S),
            (o.current = setTimeout(() => {
              d(!0);
            }, 500)));
        },
        [y]
      ),
      v = T(
        (A, S) => {
          c && y(A, S);
        },
        [c, y]
      ),
      k = T(() => {
        (s.current && clearTimeout(s.current),
          o.current && (clearTimeout(o.current), d(!1)),
          (i.current += 1),
          (s.current = setTimeout(async () => {
            l(!0);
            try {
              i.current > 1 ? await r?.() : _() ? await t?.() : await e?.();
            } catch (A) {
              console.error("Error in button callback:", A);
            }
            (l(!1), (n.current = null), (i.current = 0));
          }, 250)));
      }, [_, r, t, e]),
      x = T(
        A => {
          (b(A.clientX, A.clientY),
            (f.current = { x: A.screenX, y: A.screenY }));
        },
        [b]
      ),
      $ = T(
        A => {
          v(A.clientX, A.clientY);
        },
        [v]
      ),
      M = T(() => {
        k();
      }, [k]),
      C = T(
        A => {
          if (A.touches.length > 0) {
            const S = A.touches[0];
            (b(S.clientX, S.clientY),
              (f.current = { x: S.screenX, y: S.screenY }));
          }
        },
        [b]
      ),
      O = T(
        A => {
          if (A.touches.length > 0) {
            const S = A.touches[0];
            v(S.clientX, S.clientY);
          }
        },
        [v]
      ),
      E = T(
        A => {
          if (A.changedTouches.length > 0) {
            const S = A.changedTouches[0];
            if (f.current?.y && Math.abs(S.screenY - f.current.y) > 20) {
              g();
              return;
            }
          }
          k();
        },
        [k, g]
      );
    return R(
      () => ({
        ...(ov
          ? {
              onTouchStart: C,
              onTouchMove: O,
              onTouchEnd: E,
              onTouchCancel: g,
              loading: a,
            }
          : {
              onMouseDown: x,
              onMouseMove: $,
              onMouseUp: M,
              onMouseOut: g,
              loading: a,
            }),
        renderLongPressIndicator: m,
      }),
      [x, $, M, g, C, O, E, m, a]
    );
  }
  const Mf = ({ ma_entity_id: e, lms_entity_id: t }) => {
    const r = Me();
    return R(() => {
      const i = t && pi(r, t) && Dd(),
        s = e && Ms(r.entity_id, e) && zd();
      return !!i || !!s;
    }, [r, t, e]);
  };
  function Kt(e, t) {
    const [r, n] = L({ key: "", value: null }),
      [i, s] = L(!1),
      [o, a] = L(null),
      l = R(() => (e ? JSON.stringify(e) : ""), [e]),
      c = r.key === l ? r.value : null,
      d = !!e && t?.enabled !== !1 && r.key !== l,
      u = he(""),
      h = T(
        async g => {
          if (!e || t?.enabled === !1 || g?.enabled === !1) return;
          const m = JSON.stringify(e);
          ((u.current = m), s(!0), a(null));
          try {
            const _ = await Oa(e, { ...t, ...g });
            return (
              u.current === m &&
                (n({ key: m, value: _?.response ?? null }), s(!1), a(null)),
              _
            );
          } catch (_) {
            return (
              u.current === m &&
                (a(
                  _ && typeof _ == "object" && "message" in _
                    ? _.message
                    : "Unknown error"
                ),
                s(!1),
                n({ key: m, value: null })),
              null
            );
          }
        },
        [e, t]
      ),
      f = T(() => h({ forceRefresh: !0 }), [h]);
    return (
      Q(() => {
        e && t?.enabled !== !1 && h();
      }, [l, t?.staleTime, t?.enabled]),
      R(
        () => ({ data: c, loading: i || d, error: o, refetch: f }),
        [c, i, d, o, f]
      )
    );
  }
  const cv = (e, t) => {
      const r = Me(),
        {
          data: n,
          loading: i,
          error: s,
          refetch: o,
        } = Kt(
          {
            type: "call_service",
            domain: "mass_queue",
            service: "get_queue_items",
            service_data: { entity: e },
            return_response: !0,
          },
          { enabled: t, staleTime: 3e4 }
        ),
        a = T(
          async f => {
            await V().callService("mass_queue", "play_queue_item", {
              entity: e,
              queue_item_id: f,
            });
          },
          [e]
        ),
        l = T(
          async f => {
            (await V().callService("mass_queue", "remove_queue_item", {
              entity: e,
              queue_item_id: f,
            }),
              o());
          },
          [e, o]
        ),
        c = T(
          async f => {
            (await V().callService("mass_queue", "move_queue_item_up", {
              entity: e,
              queue_item_id: f,
            }),
              await new Promise(g => setTimeout(g, 100)),
              o());
          },
          [e, o]
        ),
        d = T(
          async f => {
            (await V().callService("mass_queue", "move_queue_item_down", {
              entity: e,
              queue_item_id: f,
            }),
              await new Promise(g => setTimeout(g, 100)),
              o());
          },
          [e, o]
        ),
        u = T(async () => {
          (await V().callService("media_player", "clear_playlist", {
            entity_id: e,
          }),
            o());
        }, [e, o]),
        h = R(() => {
          const f =
              n?.[e]?.map((m, _, y) => ({
                id: m.queue_item_id,
                title: m.media_title,
                artist: m.media_artist,
                album: m.media_album_name,
                artworkUrl: m.media_image,
                isFirst: _ === 0,
                isLast: _ === y.length - 1,
                playlistIndex: _,
                isPlaying: r.title === m.media_title,
                skipToItem: () => a(m.queue_item_id),
                deleteItem: () => l(m.queue_item_id),
                moveItemUp: () => c(m.queue_item_id),
                moveItemDown: () => d(m.queue_item_id),
              })) || [],
            g = f.findIndex(m => m.isPlaying);
          return f.slice(g >= 0 ? g : 0);
        }, [n, e, a, l, c, d, r.title]);
      return (
        Q(() => {
          n && o();
        }, [r.title]),
        R(
          () => ({ queue: h, loading: i, error: s, refetch: o, clearQueue: u }),
          [h, i, s, o, u]
        )
      );
    },
    uv = ({ lms_entity_id: e, enabled: t }) => {
      const r = Me(),
        {
          data: n,
          loading: i,
          error: s,
          refetch: o,
        } = Kt(
          {
            type: "call_service",
            domain: "lyrion_cli",
            service: "query",
            service_data: {
              command: "status",
              entity_id: e,
              parameters: ["-"],
            },
            return_response: !0,
          },
          { enabled: t, staleTime: 6e4 }
        ),
        { data: a, error: l } = Kt(
          {
            type: "call_service",
            domain: "lyrion_cli",
            service: "query",
            service_data: {
              command: "songinfo",
              entity_id: e,
              parameters: [
                0,
                100,
                `track_id:${n?.playlist_loop?.find(d => Number(d["playlist index"]) === Number(n.playlist_cur_index))?.id}`,
              ],
            },
            return_response: !0,
          },
          {
            enabled:
              t &&
              !!n?.playlist_loop?.find(
                d =>
                  Number(d["playlist index"]) === Number(n.playlist_cur_index)
              )?.id,
            staleTime: 864e5,
          }
        );
      Q(() => {
        r.attributes.media_title && o();
      }, [r.attributes.media_title]);
      const c = R(
        () => a?.songinfo_loop?.reduce((d, u) => ({ ...d, ...u }), {}),
        [a]
      );
      return R(
        () => ({
          status: n,
          currentTrack: c,
          loading: i,
          error: s ?? l ?? null,
        }),
        [n, c, i, s, l]
      );
    },
    dv = (e, t) => {
      const r = Me(),
        { data: n } = Kt(
          {
            type: "call_service",
            domain: "lyrion_cli",
            service: "query",
            service_data: {
              command: "serverstatus",
              entity_id: e,
              parameters: ["-"],
            },
            return_response: !0,
          },
          { enabled: t, staleTime: 6e5 }
        ),
        {
          data: i,
          loading: s,
          error: o,
          refetch: a,
        } = Kt(
          {
            type: "call_service",
            domain: "lyrion_cli",
            service: "query",
            service_data: {
              command: "status",
              entity_id: e,
              parameters: ["-"],
            },
            return_response: !0,
          },
          { enabled: t && !!n, staleTime: 3e4 }
        ),
        l = T(
          async (_, y) => {
            (await V().callService("lyrion_cli", "method", {
              command: "playlist",
              entity_id: e,
              parameters: ["move", _, y],
            }),
              a());
          },
          [e, a]
        ),
        c = T(
          async _ => {
            await V().callService("lyrion_cli", "method", {
              command: "playlist",
              entity_id: e,
              parameters: ["index", _],
            });
          },
          [e]
        ),
        d = T(
          async _ => {
            (await V().callService("lyrion_cli", "method", {
              command: "playlist",
              entity_id: e,
              parameters: ["delete", _],
            }),
              a());
          },
          [e, a]
        ),
        u = T(async () => {
          (await V().callService("media_player", "clear_playlist", {
            entity_id: e,
          }),
            a());
        }, [e, a]),
        [h, f] = L([]),
        g = he(),
        m = T(async () => {
          (g.current && clearTimeout(g.current),
            (g.current = setTimeout(async () => {
              if (i?.playlist_loop) {
                const _ = [],
                  y = i.playlist_cur_index ? Number(i.playlist_cur_index) : -1;
                let b = i.playlist_loop.map((v, k) => ({
                  id: v.id,
                  title: v.title,
                  artist: "-",
                  playlistIndex: v["playlist index"],
                  isPlaying: v["playlist index"] === y,
                  isFirst: k === 0,
                  isLast: k === i.playlist_loop.length - 1,
                  moveItem: x => l(v["playlist index"], x),
                  skipToItem: () => c(v["playlist index"]),
                  deleteItem: () => d(v["playlist index"]),
                }));
                ((b = b
                  .slice(b.findIndex(v => !v.isPlaying))
                  .filter(v => !v.isPlaying)),
                  h.length === 0 && f(b));
                for (const v of b) {
                  let k = v;
                  const x = await Oa(
                    {
                      type: "call_service",
                      domain: "lyrion_cli",
                      service: "query",
                      service_data: {
                        command: "songinfo",
                        entity_id: e,
                        parameters: [0, 100, `track_id:${v.id}`],
                      },
                      return_response: !0,
                    },
                    { staleTime: 864e5 }
                  );
                  if (
                    x.response &&
                    x.response.songinfo_loop &&
                    x.response.songinfo_loop.length > 0
                  ) {
                    const $ = Object.assign({}, ...x.response.songinfo_loop);
                    k = { ...k, album: $.album, artist: $.artist };
                    const M = `http://${n?.ip}:${n?.httpport}`;
                    $.artwork_url && i.player_ip
                      ? (k = { ...k, artworkUrl: `${M}${$.artwork_url}` })
                      : $.artwork_track_id &&
                        (k = {
                          ...k,
                          artworkUrl: `${M}/music/${$.artwork_track_id}/cover_50x50_o`,
                        });
                  }
                  _.push(k);
                }
                f(_);
              }
            }, 250)));
        }, [i, e, l, c, d, f, h, n]);
      return (
        Q(() => {
          m();
        }, [i, m]),
        Q(() => {
          i && a();
        }, [r.title]),
        R(
          () => ({ queue: h, loading: s, error: o, refetch: a, clearQueue: u }),
          [h, s, o, a, u]
        )
      );
    };
  function Ci() {
    const { attributes: e, state: t } = Me(),
      r = jd(t, e);
    return R(
      () => r,
      [
        r.supportPreviousTrack,
        r.supportNextTrack,
        r.supportsShuffle,
        r.supportsRepeat,
        r.supportsTogglePlayPause,
        r.supportsPause,
        r.supportsStop,
      ]
    );
  }
  const Wr = {
      trackInfo: w({
        display: "flex",
        flexDirection: "column",
        gap: 6,
        width: "100%",
      }),
      badgeRow: w({ display: "flex", flexWrap: "wrap", gap: 4 }),
      badge: w({
        display: "inline-flex",
        alignItems: "center",
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1,
        padding: "3px 8px",
        borderRadius: 10,
        color: U.colors.onCard,
        backgroundColor: U.colors.onCardDivider,
      }),
      badgeMuted: w({
        color: U.colors.onCardMuted,
        backgroundColor: "transparent",
        border: `1px solid ${U.colors.onCardDivider}`,
      }),
      emptyState: w({ fontSize: 13, color: U.colors.onCardMuted }),
    },
    fv = ({ lms_entity_id: e }) => {
      const t = Me(),
        { t: r } = Be(),
        n = R(() => !!(e && pi(t, e)), [t, e]),
        { currentTrack: i, loading: s } = uv({
          lms_entity_id: e ?? "",
          enabled: n,
        }),
        o = R(() => (i ? jb(i) : null), [i]);
      if (s && !o) return p(lr, {});
      if (!o || (o.audioBadges.length === 0 && o.metaBadges.length === 0))
        return p("span", {
          css: Wr.emptyState,
          children: r({
            id: "LyrionTrackInfo.empty_state",
            defaultMessage: "No track info available",
          }),
        });
      const { audioBadges: l, metaBadges: c } = o;
      return P("div", {
        css: Wr.trackInfo,
        children: [
          l.length > 0 &&
            p("div", {
              css: Wr.badgeRow,
              children: l.map(d =>
                p("span", { css: Wr.badge, children: d }, d)
              ),
            }),
          c.length > 0 &&
            p("div", {
              css: Wr.badgeRow,
              children: c.map(d =>
                p("span", { css: [Wr.badge, Wr.badgeMuted], children: d }, d)
              ),
            }),
        ],
      });
    },
    pv = wn({
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    }),
    Rs = {
      root: w({ display: "flex", position: "relative" }),
      label: w({
        display: "block",
        marginBottom: "8px",
        color: U.colors.onCard,
        fontSize: "14px",
        fontWeight: 500,
      }),
      input: w({
        "--input-text-color": "var(--primary-text-color)",
        "--input-bg-color": "var(--secondary-background-color)",
        "--input-border-color": "var(--divider-color)",
        "--input-focus-border-color": "var(--secondary-text-color)",
        "--input-disabled-bg-color": "var(--disabled-color)",
        "--input-disabled-text-color": "var(--disabled-text-color)",
        width: "100%",
        padding: "8px 12px",
        color: "var(--input-text-color)",
        backgroundColor: "var(--input-bg-color)",
        border: "none",
        boxShadow: "0 0 1px 1px var(--input-border-color)",
        borderRadius: "6px",
        fontSize: "14px",
        "&:focus": {
          outline: "none",
          boxShadow: "0 0 1px 1px var(--input-focus-border-color)",
        },
        "&:disabled": {
          backgroundColor: "var(--input-disabled-bg-color)",
          color: "var(--input-disabled-text-color)",
          cursor: "not-allowed",
        },
      }),
      icon: w({
        position: "absolute",
        right: "16px",
        top: "50%",
        transform: "translateY(-50%)",
        "& ha-icon": {
          pointerEvents: "none",
          animation: `${pv} 1s linear infinite`,
        },
      }),
    },
    Ns = ({
      value: e = "",
      placeholder: t,
      onChange: r,
      disabled: n,
      type: i = "text",
      label: s,
      name: o,
      loading: a = !1,
      className: l,
      style: c,
    }) => {
      const d = u => {
        r?.(u.target.value);
      };
      return P("div", {
        css: Rs.root,
        className: l,
        style: c,
        children: [
          s && p("label", { css: Rs.label, children: s }),
          p("input", {
            css: Rs.input,
            value: e,
            placeholder: t,
            onChange: d,
            disabled: n,
            type: i,
            name: o,
          }),
          a && p(se, { size: "x-small", icon: "mdi:loading", css: Rs.icon }),
        ],
      });
    },
    hv = {
      id: "home",
      title: "Home",
      command: "",
      parameters: [],
      type: "category",
      filter: "",
    },
    Ya = [
      { id: "artists", title: "Artists", icon: "mdi:account-music" },
      {
        id: "albumartists",
        title: "Album Artists",
        icon: "mdi:account-music-outline",
      },
      {
        id: "newartists",
        title: "New Artists",
        icon: "mdi:account-music-outline",
      },
      { id: "albums", title: "Albums", icon: "mdi:album" },
      {
        id: "randomalbums",
        title: "Random Albums",
        icon: "mdi:shuffle-variant",
      },
      { id: "newmusic", title: "New Music", icon: "mdi:new-box" },
      { id: "genres", title: "Genres", icon: "mdi:music-box-multiple" },
      { id: "playlists", title: "Playlists", icon: "mdi:playlist-music" },
      { id: "tracks", title: "Tracks", icon: "mdi:music-note" },
      { id: "favorites", title: "Favorites", icon: "mdi:star" },
      { id: "radios", title: "Radio", icon: "mdi:radio" },
      { id: "apps", title: "Apps", icon: "mdi:apps" },
    ],
    Cf = {
      tracks: { command: "titles", parameters: [] },
      albumartists: { command: "artists", parameters: ["role_id:ALBUMARTIST"] },
      newartists: { command: "artists", parameters: ["sort:new"] },
      newmusic: { command: "albums", parameters: ["sort:new"] },
      randomalbums: { command: "albums", parameters: ["sort:random"] },
    },
    mv = ["0", "100", "sort:new", "tags:alj"],
    gv = ["items", "0", "100", "want_url:1"],
    _v = ["0", "100"];
  function Qa(e) {
    if (!(!e?.ip || !e?.httpport)) return `http://${e.ip}:${e.httpport}`;
  }
  function $f(e, t) {
    const r = Qa(e);
    if (!(!r || !t)) return `${r}/music/${t}/cover_300x300_o`;
  }
  function Af(e, ...t) {
    const r = t.find(i => !!i);
    if (!r) return;
    if (r.startsWith("http://") || r.startsWith("https://")) return r;
    const n = Qa(e);
    if (n) return `${n}${r.startsWith("/") ? "" : "/"}${r}`;
  }
  function yv(e, t, r = !1) {
    if (!e) return [];
    const n = e.artists_loop || e.contributors_loop;
    if (n) {
      const o = Qa(t);
      return n.map(a => ({
        id: a.id,
        title: a.artist,
        type: "artist",
        can_play: !0,
        can_expand: !0,
        thumbnail: o
          ? `${o}/imageproxy/mai/artist/${a.id}/image_300x300_f`
          : void 0,
      }));
    }
    if (e.albums_loop)
      return e.albums_loop.map(o => ({
        id: o.id,
        title: o.album,
        subtitle: o.artist,
        type: "album",
        can_play: !0,
        can_expand: !0,
        artworkTrackId: o.artwork_track_id,
        thumbnail: $f(t, o.artwork_track_id),
      }));
    const i = e.titles_loop || e.tracks_loop || e.playlisttracks_loop;
    if (i)
      return i.map(o => ({
        id: o.id,
        title: o.title,
        subtitle: o.artist,
        type: "track",
        can_play: !0,
        can_expand: !1,
        artworkTrackId: o.artwork_track_id || o.id,
        thumbnail: $f(t, o.artwork_track_id || o.id),
        duration: o.duration,
      }));
    if (e.genres_loop)
      return e.genres_loop.map(o => ({
        id: o.id,
        title: o.genre,
        type: "genre",
        can_play: !1,
        can_expand: !0,
      }));
    if (e.playlists_loop)
      return e.playlists_loop.map(o => ({
        id: o.id,
        title: o.playlist,
        type: "playlist",
        can_play: !0,
        can_expand: !0,
      }));
    const s = e.appss_loop || e.radioss_loop;
    return s
      ? s.map(o => ({
          id: o.cmd,
          title: o.name,
          type: "app",
          can_play: !1,
          can_expand: !0,
          thumbnail: Af(t, o.icon),
        }))
      : e.loop_loop
        ? e.loop_loop
            .filter(o => o.type !== "search")
            .map(o => {
              const a = o.line1 || o.name || o.title || "Unknown",
                l = o.artist || o.line2;
              let c = a,
                d = l;
              if (!d) {
                const u = a.lastIndexOf(" by ");
                u > 0 && ((c = a.substring(0, u)), (d = a.substring(u + 4)));
              }
              return {
                id: o.id,
                title: c,
                url: o.url,
                subtitle: d,
                type: "playlist",
                can_play: o.isaudio === 1,
                can_expand: (o.hasitems ?? 0) > 0,
                isFavorite: r,
                thumbnail: Af(t, o.image, o.icon, o.artwork_url),
              };
            })
        : [];
  }
  function fr({
    entity_id: e,
    command: t,
    parameters: r,
    serverData: n,
    enabled: i = !0,
  }) {
    const {
        data: s,
        loading: o,
        error: a,
        refetch: l,
      } = Kt(
        {
          type: "call_service",
          domain: "lyrion_cli",
          service: "query",
          service_data: { command: t, entity_id: e, parameters: r },
          return_response: !0,
        },
        { enabled: i && !!n, staleTime: 6e4 }
      ),
      c = R(() => yv(s, n, t === "favorites"), [s, n, t]),
      d = s?.count ?? 0,
      u = R(
        () =>
          s?.loop_loop
            ? s.loop_loop.find(f => f.type === "search")?.id
            : void 0,
        [s]
      );
    return R(
      () => ({
        items: c,
        loading: o,
        error: a,
        refetch: l,
        totalCount: d,
        searchItemId: u,
      }),
      [c, o, a, l, d, u]
    );
  }
  function bv({ entity_id: e, searchTerm: t, serverData: r, enabled: n }) {
    const i = R(() => ["0", "20", `search:${t}`, "tags:a"], [t]),
      s = R(() => ["0", "20", `search:${t}`, "tags:alj"], [t]),
      o = R(() => ["0", "20", `search:${t}`, "tags:altj"], [t]),
      a = R(() => ["0", "20", `search:${t}`], [t]),
      l = fr({
        entity_id: e,
        command: "artists",
        parameters: i,
        serverData: r,
        enabled: n,
      }),
      c = fr({
        entity_id: e,
        command: "albums",
        parameters: s,
        serverData: r,
        enabled: n,
      }),
      d = fr({
        entity_id: e,
        command: "titles",
        parameters: o,
        serverData: r,
        enabled: n,
      }),
      u = fr({
        entity_id: e,
        command: "playlists",
        parameters: a,
        serverData: r,
        enabled: n,
      }),
      h = R(
        () => [...l.items, ...c.items, ...d.items, ...u.items],
        [l.items, c.items, d.items, u.items]
      ),
      f = l.loading || c.loading || d.loading || u.loading,
      g = l.totalCount + c.totalCount + d.totalCount + u.totalCount;
    return R(() => ({ items: h, loading: f, totalCount: g }), [h, f, g]);
  }
  function vv(e, t = 0, r = "") {
    const {
        depth: n,
        current: i,
        appCommand: s,
        appSearchItemId: o,
        genreId: a,
        artistId: l,
        albumId: c,
        playlistId: d,
      } = e,
      u = [t.toString(), "100"];
    if (n === 1) {
      const f = i.command;
      return i.type === "app"
        ? { command: f, parameters: ["items", t.toString(), "100"] }
        : f === "favorites"
          ? {
              command: "favorites",
              parameters: ["items", t.toString(), "100", "want_url:1"],
            }
          : (i.parameters.length > 0 && u.push(...i.parameters),
            r && u.push(`search:${r}`),
            i.type === "album" && f === "titles"
              ? u.push(`album_id:${i.id}`)
              : i.type === "artist" &&
                f === "albums" &&
                u.push(`artist_id:${i.id}`),
            f === "artists"
              ? u.push("tags:a")
              : f === "albums"
                ? u.push("tags:alj")
                : f === "titles" && u.push("tags:altj"),
            { command: f, parameters: u });
    }
    if (s) {
      const f = ["items", t.toString(), "100"];
      return (
        r && o
          ? (f.push(`item_id:${o}`), f.push(`search:${r}`))
          : i.type !== "app" && f.push(`item_id:${i.id}`),
        { command: s, parameters: f }
      );
    }
    let h = i.command;
    if (d && i.command === "titles") {
      h = "playlists tracks";
      const f = [d, t.toString(), "100"];
      return (
        r && f.push(`search:${r}`),
        f.push("tags:altj"),
        { command: h, parameters: f }
      );
    }
    return (
      r && u.push(`search:${r}`),
      a &&
        i.command === "artists" &&
        (u.push(`genre_id:${a}`), u.push("tags:a")),
      l &&
        i.command === "albums" &&
        (u.push(`artist_id:${l}`), u.push("tags:alj")),
      i.command === "titles" &&
        !d &&
        (c && u.push(`album_id:${c}`), u.push("tags:altj")),
      { command: h, parameters: u }
    );
  }
  function wv(e) {
    switch (e.type) {
      case "track":
        return `track.id=${e.id}`;
      case "album":
        return `album.id=${e.id}`;
      case "artist":
        return `contributor.id=${e.id}`;
      case "playlist":
        return `playlist.id=${e.id}`;
      case "genre":
        return `genre.id=${e.id}`;
      default:
        return `track.id=${e.id}`;
    }
  }
  const xv = ({ entity_id: e }) => {
      const { t } = Be(),
        [r, n] = L([hv]),
        i = r.slice(1),
        s = r[r.length - 1].filter,
        [o, a] = L(4),
        [l, c] = L(0),
        [d, u] = L([]),
        [h, f] = L(),
        g = i.map(D => D.id).join("/"),
        [m, _] = L(s),
        y = Na(m, 350),
        b = T(D => {
          n(re => {
            if (re[re.length - 1].filter === D) return re;
            const j = [...re];
            return ((j[j.length - 1] = { ...j[j.length - 1], filter: D }), j);
          });
        }, []);
      (Q(() => {
        b(y);
      }, [y, b]),
        Q(() => {
          _(r[r.length - 1].filter);
        }, [g]));
      const { data: v } = Kt(
          {
            type: "call_service",
            domain: "lyrion_cli",
            service: "query",
            service_data: {
              command: "serverstatus",
              entity_id: e,
              parameters: ["-"],
            },
            return_response: !0,
          },
          { staleTime: 6e5 }
        ),
        k = i.length === 0,
        x = k && !!s,
        {
          items: $,
          loading: M,
          totalCount: C,
        } = bv({ entity_id: e, searchTerm: s, serverData: v, enabled: x }),
        O = k && !s,
        { items: E } = fr({
          entity_id: e,
          command: "albums",
          parameters: mv,
          serverData: v,
          enabled: O,
        }),
        { items: A } = fr({
          entity_id: e,
          command: "favorites",
          parameters: gv,
          serverData: v,
          enabled: O,
        }),
        { items: S } = fr({
          entity_id: e,
          command: "apps",
          parameters: _v,
          serverData: v,
          enabled: O,
        }),
        { command: I, parameters: q } = R(() => {
          if (i.length === 0) return { command: "", parameters: [] };
          const D = i[i.length - 1],
            re = {
              depth: i.length,
              current: D,
              appCommand: i.find(j => j.type === "app")?.command,
              appSearchItemId: h,
              genreId: i.find(j => j.type === "genre")?.id,
              artistId: i.find(j => j.type === "artist")?.id,
              albumId: i.find(j => j.type === "album")?.id,
              playlistId: i.find(j => j.type === "playlist")?.id,
            };
          return vv(re, l, s);
        }, [g, l, s, h]),
        {
          items: te,
          loading: Se,
          totalCount: we,
          searchItemId: xe,
          error: kt,
        } = fr({
          entity_id: e,
          command: I,
          parameters: q,
          serverData: v,
          enabled: !x && (i.length > 0 || !!s),
        });
      (Q(() => {
        i.find(re => re.type === "app") ? xe && f(xe) : f(void 0);
      }, [g, xe]),
        Q(() => {
          (c(0), u([]));
        }, [g, s]),
        Q(() => {
          x || (te.length > 0 && u(l === 0 ? te : D => [...D, ...te]));
        }, [te, l, x]));
      const He = x ? M : Se,
        zr = x ? C : we,
        Br = R(
          () =>
            Ya.map(D => ({
              id: D.id,
              title: D.title,
              type: "category",
              can_play: !1,
              can_expand: !0,
            })),
          []
        ),
        ut = k && !s,
        Hn = ut ? Br : x ? $ : l === 0 ? te : d,
        Jn = R(() => {
          if (i.length === 0) return !0;
          const D = i[i.length - 1];
          return !(
            D.command === "favorites" ||
            D.id === "apps" ||
            (i.find(j => j.type === "app") && !h && !xe)
          );
        }, [g, xe, h]),
        tn = !x && d.length < zr && !ut,
        Qt = T(() => {
          !He && tn && c(d.length);
        }, [He, tn, d.length]),
        St = T(
          (D, re) => {
            let j = "loadtracks";
            re === "next"
              ? (j = "inserttracks")
              : re === "add" && (j = "addtracks");
            const Ae = i.find(J => J.type === "app"),
              oe = D.isFavorite || i.find(J => J.command === "favorites");
            try {
              if (Ae) {
                const J =
                  j === "loadtracks"
                    ? "play"
                    : j === "inserttracks"
                      ? "insert"
                      : "add";
                V().callService("squeezebox", "call_method", {
                  entity_id: e,
                  command: Ae.command,
                  parameters: ["playlist", J, `item_id:${D.id}`],
                });
              } else if (oe) {
                const J =
                  j === "loadtracks"
                    ? "play"
                    : j === "inserttracks"
                      ? "insert"
                      : "add";
                V().callService("squeezebox", "call_method", {
                  entity_id: e,
                  command: "favorites",
                  parameters: ["playlist", J, `item_id:${D.id}`],
                });
              } else
                V().callService("squeezebox", "call_method", {
                  entity_id: e,
                  command: "playlist",
                  parameters: [j, wv(D)],
                });
            } catch (J) {
              console.error("Error playing media item:", J);
            }
          },
          [e, g]
        ),
        dt = T(
          D => {
            if (He) return;
            if (D.type === "category") {
              const j = D.id,
                Ae = Cf[j];
              n(oe => [
                oe[0],
                {
                  id: j,
                  title: D.title,
                  command: Ae?.command ?? j,
                  parameters: Ae?.parameters ?? [],
                  type: D.type,
                  filter: "",
                },
              ]);
              return;
            }
            if (D.type === "app") {
              n(j => [
                ...j,
                {
                  id: D.id,
                  title: D.title,
                  command: D.id,
                  parameters: [],
                  type: "app",
                  filter: "",
                },
              ]);
              return;
            }
            const re = i.find(j => j.type === "app");
            if (re && D.can_expand) {
              n(j => [
                ...j,
                {
                  id: D.id,
                  title: D.title,
                  command: re.command,
                  parameters: [],
                  type: D.type,
                  filter: "",
                },
              ]);
              return;
            }
            if (D.can_expand) {
              let j = "";
              switch (D.type) {
                case "genre":
                  j = "artists";
                  break;
                case "artist":
                  j = "albums";
                  break;
                case "album":
                case "playlist":
                  j = "titles";
                  break;
                default:
                  return;
              }
              n(Ae => [
                ...Ae,
                {
                  id: D.id,
                  title: D.title,
                  command: j,
                  parameters: [],
                  type: D.type,
                  filter: "",
                },
              ]);
            }
          },
          [He, g]
        ),
        Mt = T(
          (D, re = !1) => {
            const j = [];
            return (
              D.can_play &&
                (j.push({
                  label: t({
                    id: "MediaBrowser.media_item_menu.enqueue_mode.play",
                    defaultMessage: "Play",
                  }),
                  icon: it("play"),
                  onClick: () => St(D),
                }),
                j.push({
                  label: t({
                    id: "MediaBrowser.media_item_menu.enqueue_dropdown_label",
                    defaultMessage: "Enqueue",
                  }),
                  icon: it("next"),
                  children: [
                    {
                      label: t({
                        id: "MediaBrowser.media_item_menu.enqueue_mode.next",
                        defaultMessage: "Play Next",
                      }),
                      icon: it("next"),
                      onClick: () => St(D, "next"),
                    },
                    {
                      label: t({
                        id: "MediaBrowser.media_item_menu.enqueue_mode.replace",
                        defaultMessage: "Replace Queue",
                      }),
                      icon: it("replace"),
                      onClick: () => St(D, "replace"),
                    },
                    {
                      label: t({
                        id: "MediaBrowser.media_item_menu.enqueue_mode.add",
                        defaultMessage: "Add to Queue",
                      }),
                      icon: it("add"),
                      onClick: () => St(D, "add"),
                    },
                  ],
                })),
              D.can_expand &&
                !re &&
                j.push({
                  label: t({
                    id: "MediaBrowser.media_item_menu.browse",
                    defaultMessage: "Browse",
                  }),
                  icon: "mdi:folder-outline",
                  onClick: () => dt(D),
                }),
              j
            );
          },
          [St, dt, t]
        ),
        Ct = R(
          () => Hn.map(D => ({ ...D, onClick: () => dt(D), menuItems: Mt(D) })),
          [Hn, dt, Mt]
        ),
        { items: Yn, hasNoArtwork: G } = R(() => {
          let D = !0;
          const re = [];
          if (
            (Ct.forEach(j => {
              typeof j.thumbnail == "string" && (D = !1);
            }),
            O &&
              (E.forEach(j => {
                typeof j.thumbnail == "string" && (D = !1);
              }),
              A.forEach(j => {
                typeof j.thumbnail == "string" && (D = !1);
              }),
              S.forEach(j => {
                typeof j.thumbnail == "string" && (D = !1);
              })),
            x)
          ) {
            const j = [
                {
                  title: "Artists",
                  categoryId: "artists",
                  items: Ct.filter(oe => oe.type === "artist"),
                  isTrack: !1,
                },
                {
                  title: "Albums",
                  categoryId: "albums",
                  items: Ct.filter(oe => oe.type === "album"),
                  isTrack: !1,
                },
                {
                  title: "Tracks",
                  categoryId: "tracks",
                  items: Ct.filter(oe => oe.type === "track"),
                  isTrack: !0,
                },
                {
                  title: "Playlists",
                  categoryId: "playlists",
                  items: Ct.filter(oe => oe.type === "playlist"),
                  isTrack: !1,
                },
              ],
              Ae = o * 2;
            for (const oe of j) {
              if (oe.items.length === 0) continue;
              re.push({
                sectionTitle: oe.title,
                categoryId: oe.categoryId,
                onClick: () => Yi(oe.categoryId),
              });
              const J = oe.items.slice(0, Ae);
              if (oe.isTrack) J.forEach(Xn => re.push([Xn]));
              else
                for (let Xn = 0; Xn < J.length; Xn += o)
                  re.push(J.slice(Xn, Xn + o));
            }
          } else {
            const j = { track: [], expandable: [] };
            if (
              (Ct.forEach(Ae => {
                const oe = Ae.type === "track" && !ut;
                j[oe ? "track" : "expandable"].push(Ae);
              }),
              Object.entries(j).forEach(([Ae, oe]) => {
                if (Ae === "track" && !ut) oe.forEach(J => re.push([J]));
                else
                  for (let J = 0; J < oe.length; J += o)
                    re.push(oe.slice(J, J + o));
              }),
              O)
            ) {
              const Ae = o * 2;
              if (E.length > 0) {
                re.push({
                  sectionTitle: "New Music",
                  categoryId: "newmusic",
                  onClick: () => Yi("newmusic"),
                });
                const oe = E.slice(0, Ae).map(J => ({
                  ...J,
                  onClick: () => dt(J),
                  menuItems: Mt(J),
                }));
                for (let J = 0; J < oe.length; J += o)
                  re.push(oe.slice(J, J + o));
              }
              if (A.length > 0) {
                re.push({
                  sectionTitle: "Favorites",
                  categoryId: "favorites",
                  onClick: () => Yi("favorites"),
                });
                const oe = A.slice(0, Ae).map(J => ({
                  ...J,
                  onClick: () => dt(J),
                  menuItems: Mt(J),
                }));
                for (let J = 0; J < oe.length; J += o)
                  re.push(oe.slice(J, J + o));
              }
              if (S.length > 0) {
                re.push({
                  sectionTitle: "Apps",
                  categoryId: "apps",
                  onClick: () => Yi("apps"),
                });
                const oe = S.slice(0, Ae).map(J => ({
                  ...J,
                  onClick: () => dt(J),
                  menuItems: Mt(J),
                }));
                for (let J = 0; J < oe.length; J += o)
                  re.push(oe.slice(J, J + o));
              }
            }
          }
          return { items: re, hasNoArtwork: D };
        }, [Ct, o, ut, x, O, E, A, S]),
        rn = T(() => {
          He || i.length === 0 || n(D => D.slice(0, -1));
        }, [i.length, He]),
        nn = T(
          D => {
            He || n(re => re.slice(0, D + 2));
          },
          [He]
        ),
        Qn = T(() => {
          (_(""), n(D => [D[0]]));
        }, []),
        yc = R(() => {
          const D = i[i.length - 1];
          return D
            ? Mt(
                {
                  id: D.id,
                  title: D.title,
                  type: D.type,
                  can_play: D.type !== "category" && D.type !== "app",
                  can_expand: !1,
                },
                !0
              )
            : [];
        }, [g, Mt]),
        Yi = T(D => {
          const re = Ya.find(Ae => Ae.id === D),
            j = Cf[D];
          n(Ae => [
            Ae[0],
            {
              id: D,
              title: re.title,
              command: j?.command ?? D,
              parameters: j?.parameters ?? [],
              type: "category",
              filter: Ae[Ae.length - 1].filter,
            },
          ]);
        }, []);
      return {
        navHistory: i,
        currentFilter: m,
        setCurrentFilter: _,
        isSearchable: Jn,
        isShowingCategories: ut,
        items: Yn,
        hasNoArtwork: G,
        loading: He,
        error: x ? null : kt,
        hasMore: tn,
        loadMore: Qt,
        chunkSize: o,
        setChunkSize: a,
        goBack: rn,
        goToIndex: nn,
        goHome: Qn,
        currentHistoryDropdownMenuItems: yc,
        filteredItems: Ct,
      };
    },
    Pt = {
      header: w({ marginBottom: 16 }),
      navigationBar: w({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "8px 16px",
        color: "var(--primary-text-color, #fff)",
        borderBottom: "0.5px solid var(--divider-color, rgba(0, 0, 0, 0.12))",
      }),
      breadCrumbs: w({
        display: "flex",
        flexWrap: "wrap",
        gap: "4px",
        alignItems: "center",
        overflowX: "auto",
        maxWidth: "calc(100% - 40px)",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }),
      breadCrumbItem: w({
        background: "none",
        border: "none",
        color: "var(--primary-text-color, #fff)",
        cursor: "pointer",
        padding: "2px 4px",
        whiteSpace: "nowrap",
        fontSize: "0.9rem",
        "&:hover": { textDecoration: "underline" },
      }),
      breadCrumbSeparator: w({ color: "var(--secondary-text-color)" }),
      noMediaText: w({
        padding: "16px",
        paddingBottom: "32px",
        color: "var(--secondary-text-color)",
        textAlign: "center",
      }),
      itemFilter: w({ marginTop: "8px", marginBottom: "16px" }),
      headerPlayMenu: w({ marginLeft: "auto" }),
      mediaItemHeaderMenuImage: w({
        width: 16,
        height: 16,
        borderRadius: 8,
        marginRight: 2,
        marginLeft: -4,
      }),
      mediaBrowserEntrySelector: w({ marginLeft: "auto" }),
    };
  function $i(e) {
    if (e.thumbnail) return null;
    switch (e.type) {
      case "artist":
        return "mdi:account-music";
      case "album":
        return "mdi:album";
      case "track":
        return "mdi:music-note";
      case "genre":
        return "mdi:music-box-multiple";
      case "playlist":
        return "mdi:playlist-music";
      case "category":
        return Ya.find(t => t.id === e.id)?.icon ?? "mdi:folder";
      case "app":
        return "mdi:application";
      default:
        return "mdi:music";
    }
  }
  const kv = ({
      selectedMediaBrowser: e,
      selectMediaBrowserMenuItems: t,
      horizontalPadding: r,
      maxHeight: n,
      renderHeader: i,
    }) => {
      const { t: s } = Be(),
        {
          navHistory: o,
          currentFilter: a,
          setCurrentFilter: l,
          isSearchable: c,
          isShowingCategories: d,
          items: u,
          hasNoArtwork: h,
          loading: f,
          error: g,
          hasMore: m,
          loadMore: _,
          chunkSize: y,
          setChunkSize: b,
          goBack: v,
          goToIndex: k,
          goHome: x,
          currentHistoryDropdownMenuItems: $,
          filteredItems: M,
        } = xv({ entity_id: e.entity_id }),
        C = S =>
          p(
            w0,
            { name: S.title, mdiIcon: $i(S), onClick: S.onClick },
            S.id + o.length
          ),
        O = S =>
          !S.can_play && S.can_expand
            ? p(
                ur,
                {
                  title: S.title,
                  artist: S.subtitle,
                  imageUrl: S.thumbnail,
                  mdiIcon: $i(S),
                  onClick: S.onClick,
                },
                S.id + o.length
              )
            : p(ze, {
                menuItems: S.menuItems ?? [],
                renderTrigger: I =>
                  p(
                    ur,
                    {
                      title: S.title,
                      artist: S.subtitle,
                      imageUrl: S.thumbnail,
                      mdiIcon: $i(S),
                      ...I,
                    },
                    S.id + o.length
                  ),
              }),
        E = S =>
          !S.can_play || (S.can_expand && d)
            ? p(
                cr,
                {
                  name: S.title,
                  artist: S.subtitle,
                  imageUrl: S.thumbnail,
                  mdiIcon: $i(S),
                  onClick: S.onClick,
                },
                S.id + o.length
              )
            : p(ze, {
                menuItems: S.menuItems ?? [],
                renderTrigger: I =>
                  p(
                    cr,
                    {
                      name: S.title,
                      artist: S.subtitle,
                      imageUrl: S.thumbnail,
                      mdiIcon: $i(S),
                      ...I,
                    },
                    S.id + o.length
                  ),
              }),
        A = S =>
          Array.isArray(S)
            ? p(Kr, {
                numberOfColumns: y,
                children: S.map(I =>
                  d && I.type === "category"
                    ? C(I)
                    : h || I.type === "track"
                      ? O(I)
                      : E(I)
                ),
              })
            : p(Ga, { onClick: S.onClick, children: S.sectionTitle });
      return p("div", {
        css: Ke.root,
        style: { "--mmpc-search-padding": `${r}px` },
        children: p(
          ki,
          {
            onLayout: ({ width: S }) => {
              S > 800 ? b(6) : S > 390 ? b(4) : b(3);
            },
            maxHeight: n,
            onEndReached: m ? _ : void 0,
            renderItem: A,
            renderHeader: () =>
              P(Y, {
                children: [
                  i && i(),
                  p("div", {
                    css: Pt.header,
                    children:
                      (o.length > 0 || !!t) &&
                      p(Y, {
                        children: P("div", {
                          css: Pt.navigationBar,
                          children: [
                            o.length > 0
                              ? p(W, {
                                  icon: "mdi:arrow-left",
                                  size: "x-small",
                                  onClick: v,
                                  disabled: o.length === 0,
                                })
                              : p(se, { icon: "mdi:home", size: "x-small" }),
                            P("div", {
                              css: Pt.breadCrumbs,
                              children: [
                                p("button", {
                                  css: Pt.breadCrumbItem,
                                  onClick: x,
                                  children:
                                    o.length === 0
                                      ? s({
                                          id: "MediaBrowser.breadcrumb_home",
                                          defaultMessage: "Home",
                                        })
                                      : p(se, {
                                          icon: "mdi:home",
                                          size: "x-small",
                                        }),
                                }),
                                o.map((S, I) =>
                                  P(
                                    Y,
                                    {
                                      children: [
                                        p("span", {
                                          css: Pt.breadCrumbSeparator,
                                          children: "/",
                                        }),
                                        p("button", {
                                          css: Pt.breadCrumbItem,
                                          onClick: () => k(I),
                                          children: S.title,
                                        }),
                                      ],
                                    },
                                    `breadcrumb-${I}-${S.title}`
                                  )
                                ),
                              ],
                            }),
                            t &&
                              o.length === 0 &&
                              p(ze, {
                                menuItems: t,
                                side: "bottom",
                                align: "end",
                                renderTrigger: S =>
                                  P(Ye, {
                                    icon: "mdi:import",
                                    size: "small",
                                    invertedColors: !0,
                                    border: !0,
                                    css: Pt.mediaBrowserEntrySelector,
                                    ...S,
                                    children: [
                                      e.name ?? e.entity_id,
                                      p(se, {
                                        size: "x-small",
                                        icon: "mdi:chevron-down",
                                      }),
                                    ],
                                  }),
                              }),
                            $.length > 0 &&
                              p(ze, {
                                menuItems: $,
                                side: "bottom",
                                align: "end",
                                renderTrigger: S =>
                                  P(Ye, {
                                    size: "small",
                                    invertedColors: !0,
                                    border: !0,
                                    css: Pt.headerPlayMenu,
                                    ...S,
                                    children: [
                                      p(se, {
                                        size: "x-small",
                                        icon: "mdi:play",
                                      }),
                                      s({
                                        id: "MediaBrowser.media_item_menu.enqueue_mode.play",
                                        defaultMessage: "Play",
                                      }),
                                      p(se, {
                                        size: "x-small",
                                        icon: "mdi:chevron-down",
                                      }),
                                    ],
                                  }),
                              }),
                          ],
                        }),
                      }),
                  }),
                  c &&
                    p(Ns, {
                      placeholder: s({
                        id: "MediaBrowser.search_placeholder",
                        defaultMessage: "Search...",
                      }),
                      onChange: l,
                      value: a,
                      css: Pt.itemFilter,
                      style: { marginLeft: r, marginRight: r },
                    }),
                ],
              }),
            renderEmpty: () =>
              f
                ? p(lr, {})
                : g
                  ? p("div", {
                      css: Pt.noMediaText,
                      children: s({
                        id: "MediaBrowser.error_text",
                        defaultMessage: "Failed to load media.",
                      }),
                    })
                  : M.length === 0
                    ? p("div", {
                        css: Pt.noMediaText,
                        children: s({
                          id: "MediaBrowser.empty_text",
                          defaultMessage: "No media items available.",
                        }),
                      })
                    : null,
            data: u,
          },
          o[o.length - 1]?.id || "home"
        ),
      });
    },
    Sv = (e, t) => {
      const [r, n] = L(null);
      Q(() => {
        V()
          .callApi("GET", "config/config_entries/entry")
          .then(l => {
            const d = l
              .filter(u => u.domain === "music_assistant")
              .find(u => u.state === "loaded");
            d && n(d.entry_id);
          });
      }, []);
      const { data: i, loading: s } = Kt(
          {
            type: "call_service",
            domain: "music_assistant",
            service: "search",
            service_data: {
              name: e,
              config_entry_id: r,
              media_type: t === "all" ? void 0 : t,
              limit: t === "all" ? 8 : 100,
            },
            return_response: !0,
          },
          { enabled: e !== "" && !!r, staleTime: 12e4 }
        ),
        o = T(
          async (a, l, c) =>
            V().callService("music_assistant", "play_media", {
              entity_id: l,
              media_type: a.media_type,
              media_id: a.uri,
              enqueue: c,
            }),
          []
        );
      return R(() => ({ results: i, loading: s, playItem: o }), [i, s, o]);
    },
    Mv = [
      { type: "all", label: "All", icon: "mdi:all-inclusive" },
      { type: "artist", label: "Artists", icon: "mdi:account-music" },
      { type: "album", label: "Albums", icon: "mdi:album" },
      { type: "track", label: "Tracks", icon: "mdi:music-note" },
      { type: "playlist", label: "Playlists", icon: "mdi:playlist-music" },
      { type: "radio", label: "Radio", icon: "mdi:radio" },
      { type: "audiobook", label: "Audiobooks", icon: "mdi:book" },
      { type: "podcast", label: "Podcasts", icon: "mdi:podcast" },
    ],
    Ef = {
      artists: "artist",
      albums: "album",
      tracks: "track",
      playlists: "playlist",
      radio: "radio",
      audiobooks: "audiobook",
      podcasts: "podcast",
    },
    If = {
      artist: "Artists",
      album: "Albums",
      track: "Tracks",
      playlist: "Playlists",
      radio: "Radio",
      audiobook: "Audiobooks",
      podcast: "Podcasts",
    },
    Cv = (e, t) => {
      const [r, n] = L(null),
        [i, s] = L(),
        [o, a] = L(!1);
      return (
        Q(() => {
          V()
            .callApi("GET", "config/config_entries/entry")
            .then(c => {
              const u = c
                .filter(h => h.domain === "music_assistant")
                .find(h => h.state === "loaded");
              u && n(u.entry_id);
            });
        }, []),
        Q(() => {
          if (!r || !t) {
            s(null);
            return;
          }
          a(!0);
          const l = {
              artists: [],
              albums: [],
              tracks: [],
              playlists: [],
              radio: [],
              podcasts: [],
              audiobooks: [],
            },
            c = async d => {
              const u = {
                type: "call_service",
                domain: "music_assistant",
                service: "get_library",
                service_data: {
                  config_entry_id: r,
                  media_type: d,
                  favorite: !0,
                  limit: e === "all" ? 8 : 20,
                },
                return_response: !0,
              };
              try {
                const h = await Oa(u, { staleTime: 12e4 });
                if (!h.response) return;
                l[$v[d]] = h.response.items ?? [];
              } catch (h) {
                return (
                  console.error("Error fetching favorites:", d, h),
                  Promise.reject(h)
                );
              }
            };
          e === "all"
            ? Promise.all(Object.values(Ef).map(d => c(d))).then(() => {
                (a(!1), s(l));
              })
            : c(e).then(() => {
                (a(!1), s(l));
              });
        }, [r, e, t]),
        R(() => ({ favorites: i, loading: o }), [i, o])
      );
    },
    $v = {
      artist: "artists",
      album: "albums",
      track: "tracks",
      playlist: "playlists",
      radio: "radio",
      audiobook: "audiobooks",
      podcast: "podcasts",
    },
    Av = ({
      onItemClick: e,
      onHeaderClick: t,
      loading: r = !1,
      error: n = null,
      results: i,
      ...s
    }) => {
      const { t: o } = Be(),
        [a, l] = L(4),
        c = R(() => {
          const u = [];
          if (!i) return u;
          const h = Object.entries(i)
            .map(([f, g]) => ({ mediaType: Ef[f], items: g }))
            .filter(f => f.items.length > 0);
          return (
            h.forEach(({ mediaType: f, items: g }) => {
              if (g.length !== 0)
                if (
                  (h.length > 1 && u.push({ type: "header", mediaType: f }),
                  g[0].media_type === "track")
                )
                  g.forEach(m => {
                    u.push({ type: "item", item: m });
                  });
                else
                  for (let m = 0; m < g.length; m += a) {
                    const _ = g.slice(m, m + a);
                    u.push({ type: "itemsRow", items: _ });
                  }
            }),
            u
          );
        }, [i, a]),
        d = u => {
          switch (u.type) {
            case "header":
              return p(Ga, {
                onClick: () => t?.(u.mediaType),
                children: o({
                  id: `Search.categories.${If[u.mediaType]}`,
                  defaultMessage: If[u.mediaType],
                }),
              });
            case "item": {
              const { item: h } = u,
                f = async () => {
                  await e(h);
                };
              return p(Kr, {
                numberOfColumns: a,
                children:
                  h.media_type === "track"
                    ? p(
                        ur,
                        {
                          imageUrl: h.image ?? h.album?.image,
                          title: h.name,
                          artist: h.artists.map(g => g.name).join(", "),
                          onClick: f,
                        },
                        h.uri
                      )
                    : p(
                        cr,
                        {
                          imageUrl: h.image,
                          name: h.name,
                          artist:
                            "artists" in h
                              ? h.artists.map(g => g.name).join(", ")
                              : void 0,
                          onClick: f,
                        },
                        h.uri
                      ),
              });
            }
            case "itemsRow":
              return p(Kr, {
                numberOfColumns: a,
                children: u.items.map(h => {
                  const f = async () => {
                    await e(h);
                  };
                  return h.media_type === "track"
                    ? p(
                        ur,
                        {
                          imageUrl: h.image ?? h.album?.image,
                          title: h.name,
                          artist: h.artists.map(g => g.name).join(", "),
                          onClick: f,
                        },
                        h.uri
                      )
                    : p(
                        cr,
                        {
                          imageUrl: h.image,
                          name: h.name,
                          artist:
                            "artists" in h
                              ? h.artists.map(g => g.name).join(", ")
                              : void 0,
                          onClick: f,
                        },
                        h.uri
                      );
                }),
              });
            default:
              return null;
          }
        };
      return r
        ? p(lr, {})
        : n
          ? p("p", { css: Ke.mediaEmptyText, children: n })
          : p(ki, {
              onLayout: ({ width: u }) => {
                u > 800 ? l(6) : u > 390 ? l(4) : l(3);
              },
              data: c,
              renderItem: d,
              renderEmpty: () =>
                p("p", {
                  css: Ke.mediaEmptyText,
                  children: o({
                    id: "Search.no_results",
                    defaultMessage: "No results found.",
                  }),
                }),
              ...s,
            });
    },
    Pf = ({
      maEntityId: e,
      horizontalPadding: t,
      searchBarPosition: r = "top",
      additionalOptions: n = [],
      maxHeight: i = 300,
      renderHeader: s,
    }) => {
      const { t: o } = Be(),
        [a, l] = L(""),
        [c, d] = L("play"),
        u = Na(a, 600),
        [h, f] = L("all"),
        { results: g, loading: m, playItem: _ } = Sv(u, h),
        { favorites: y } = Cv(h, a === ""),
        b = () =>
          P("div", {
            css: Ke.searchBarContainer,
            children: [
              !!s && s(),
              P("div", {
                css: Ke.inputRow,
                children: [
                  p(Ns, {
                    placeholder: o({ id: "Search.input_placeholder" }),
                    onChange: l,
                    value: a,
                    loading: m,
                    css: Ke.input,
                  }),
                  p(ze, {
                    align: "end",
                    side: "bottom",
                    menuItems: [
                      ...n,
                      {
                        type: "title",
                        label: o({
                          id: "Search.enqueue_mode.title",
                          defaultMessage: "Enqueue Mode",
                        }),
                      },
                      {
                        label: o({
                          id: "Search.enqueue_mode.play",
                          defaultMessage: "Play",
                        }),
                        selected: c === "play",
                        icon: En("play"),
                        onClick: () => d("play"),
                      },
                      {
                        label: o({
                          id: "Search.enqueue_mode.replace",
                          defaultMessage: "Replace Queue",
                        }),
                        selected: c === "replace",
                        icon: En("replace"),
                        onClick: () => d("replace"),
                      },
                      {
                        label: o({
                          id: "Search.enqueue_mode.next",
                          defaultMessage: "Add Next",
                        }),
                        selected: c === "next",
                        icon: En("next"),
                        onClick: () => d("next"),
                      },
                      {
                        label: o({
                          id: "Search.enqueue_mode.replace_next",
                          defaultMessage: "Replace Next",
                        }),
                        selected: c === "replace_next",
                        icon: En("replace_next"),
                        onClick: () => d("replace_next"),
                      },
                      {
                        label: o({
                          id: "Search.enqueue_mode.add",
                          defaultMessage: "Add to Queue",
                        }),
                        selected: c === "add",
                        icon: En("add"),
                        onClick: () => d("add"),
                      },
                    ],
                    renderTrigger: k =>
                      p(W, {
                        size: "x-small",
                        icon: !n || n.length === 0 ? En(c) : "mdi:cog",
                        ...k,
                      }),
                  }),
                ],
              }),
              p("div", { css: Ke.filterContainer, children: v() }),
            ],
          }),
        v = () =>
          Mv.map(k =>
            p(
              Ye,
              {
                css: Ke.chip,
                style: {
                  "--mmpc-chip-horizontal-margin": `${t}px`,
                  opacity: h === k.type ? 1 : 0.6,
                  fontWeight: h === k.type ? "bold" : "normal",
                },
                onClick: () => f(k.type),
                icon: k.icon,
                children: o({
                  id: `Search.categories.${k.label}`,
                  defaultMessage: k.label,
                }),
              },
              k.type
            )
          );
      return P("div", {
        css: Ke.root,
        style: { "--mmpc-search-padding": `${t}px` },
        children: [
          p(Av, {
            renderHeader: r === "top" ? b : void 0,
            results: a !== "" && g ? g : y || void 0,
            onItemClick: k => _(k, e, c),
            style: { "--mmpc-search-padding": `${t}px` },
            maxHeight: i,
            onHeaderClick: f,
          }),
          r === "bottom" && b(),
        ],
      });
    },
    En = e => {
      switch (e) {
        case "play":
          return "mdi:play-circle";
        case "replace":
          return "mdi:playlist-remove";
        case "next":
          return "mdi:playlist-play";
        case "replace_next":
          return "mdi:playlist-edit";
        case "add":
          return "mdi:playlist-plus";
        default:
          return "mdi:play-circle";
      }
    },
    Xa = () => {
      const {
          entity_id: e,
          state: t,
          attributes: { shuffle: r, repeat: n },
        } = Me(),
        { supportsPause: i, supportsStop: s } = Ci(),
        o = T(() => {
          V().callService("media_player", "media_stop", { entity_id: e });
        }, [e]),
        a = T(() => {
          i
            ? V().callService("media_player", "media_play_pause", {
                entity_id: e,
              })
            : t === "playing"
              ? V().callService(
                  "media_player",
                  s ? "media_stop" : "media_pause",
                  { entity_id: e }
                )
              : V().callService("media_player", "media_play", { entity_id: e });
        }, [e, t, i, s]),
        l = T(() => {
          V().callService("media_player", "media_next_track", { entity_id: e });
        }, [e]),
        c = T(() => {
          V().callService("media_player", "media_previous_track", {
            entity_id: e,
          });
        }, [e]),
        d = T(() => {
          V().callService("media_player", "shuffle_set", {
            entity_id: e,
            shuffle: !r,
          });
        }, [e, r]),
        u = T(() => {
          const f = n === "off" ? "one" : n === "one" ? "all" : "off";
          V().callService("media_player", "repeat_set", {
            entity_id: e,
            repeat: f,
          });
        }, [e, n]),
        h = T(() => {
          V().callService("media_player", "toggle", { entity_id: e });
        }, [e]);
      return R(
        () => ({
          stop: o,
          togglePlayback: a,
          nextTrack: l,
          previousTrack: c,
          toggleShuffle: d,
          toggleRepeat: u,
          togglePower: h,
        }),
        [o, a, l, c, d, u, h]
      );
    },
    Of = $t(void 0),
    Za = ({ children: e }) => {
      const { config: t } = de(Re),
        r = qe(),
        n = he(null),
        [i, s] = L(() => Ta(r, t));
      (Q(() => {
        ((n.current = null), s(Ta(r, t)));
      }, [t.entity_id]),
        Q(() => {
          if (t.disable_player_focus_switching) return;
          const a = Date.now();
          if (n.current && a - n.current < 120 * 1e3) return;
          const l = Ta(r, t, i);
          l?.entity_id !== i?.entity_id && s(l);
        }, [r, t, i]));
      const o = T(() => {
        n.current = Date.now();
      }, []);
      return p(Of.Provider, {
        value: {
          selectedPlayer: i,
          setSelectedPlayer: s,
          setLastInteraction: o,
        },
        children: p(Is, { entityId: i?.entity_id || t.entity_id, children: e }),
      });
    },
    Ne = () => {
      const e = de(Of);
      if (!e)
        throw new Error(
          "useSelectedPlayer must be used within a SelectedPlayerProvider"
        );
      return e;
    },
    Ev = {
      root: w({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        maxWidth: "480px",
        paddingLeft: "var(--mmpc-extra-horizontal-padding, 0px)",
        paddingRight: "var(--mmpc-extra-horizontal-padding, 0px)",
      }),
    },
    Iv = () => {
      const { selectedPlayer: e } = Ne(),
        t = Me(),
        {
          attributes: {
            shuffle: r,
            repeat: n,
            media_title: i,
            media_artist: s,
            media_album_name: o,
          },
          state: a,
          entity_id: l,
        } = t,
        c = e?.ma_entity_id,
        d = a === "playing",
        {
          supportPreviousTrack: u,
          supportNextTrack: h,
          supportsShuffle: f,
          supportsRepeat: g,
          supportsTogglePlayPause: m,
          supportsPause: _,
          supportsStop: y,
        } = Ci(),
        {
          togglePlayback: b,
          toggleRepeat: v,
          toggleShuffle: k,
          previousTrack: x,
          nextTrack: $,
          stop: M,
        } = Xa(),
        C = R(() => {
          const O = [];
          return (
            i &&
              O.push({
                label: `Song Radio (${i})`,
                icon: "mdi:music-note",
                onClick: () => or(l, c, i, "track"),
              }),
            s &&
              O.push({
                label: `Artist Radio (${s})`,
                icon: "mdi:account-music",
                onClick: () => or(l, c, s, "artist"),
              }),
            o &&
              O.push({
                label: `Album Radio (${o})`,
                icon: "mdi:album",
                onClick: () => or(l, c, o, "album"),
              }),
            O
          );
        }, [i, s, o, l, c]);
      return P("div", {
        css: Ev.root,
        children: [
          f &&
            p(W, {
              size: "small",
              onClick: k,
              icon: r ? "mdi:shuffle-variant" : "mdi:shuffle-disabled",
            }),
          u && p(W, { size: "large", onClick: x, icon: "mdi:skip-previous" }),
          m
            ? p(W, {
                size: "x-large",
                onClick: b,
                icon: d
                  ? _
                    ? "mdi:pause-circle"
                    : "mdi:stop-circle"
                  : "mdi:play-circle",
              })
            : y
              ? p(W, { size: "x-large", onClick: M, icon: "mdi:stop" })
              : null,
          h && p(W, { size: "large", onClick: $, icon: "mdi:skip-next" }),
          g &&
            p(W, {
              size: "small",
              onClick: v,
              icon:
                n === "one"
                  ? "mdi:repeat-once"
                  : n === "all"
                    ? "mdi:repeat"
                    : "mdi:repeat-off",
            }),
          C.length > 0 &&
            p(ze, {
              menuItems: C,
              side: "top",
              renderTrigger: O =>
                p(W, { size: "small", icon: "mdi:radio-tower", ...O }),
            }),
        ],
      });
    },
    el = {
      root: w({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: "8px",
        textAlign: "center",
        color: U.colors.onDialog,
        paddingLeft: "var(--mmpc-extra-horizontal-padding, 0px)",
        paddingRight: "var(--mmpc-extra-horizontal-padding, 0px)",
        "> h2, > h3": {
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          width: "100%",
        },
      }),
      titleH2: w({ margin: 0 }),
      titleH3: w({
        margin: 0,
        fontWeight: "normal",
        color: U.colors.onDialogMuted,
      }),
    },
    Pv = () => {
      const { title: e, subtitle: t } = Me();
      return P("div", {
        css: el.root,
        children: [
          !!e && p("h2", { css: el.titleH2, children: e }),
          !!t && p("h3", { css: el.titleH3, children: t }),
        ],
      });
    },
    Ls = {
      root: w({
        paddingLeft: "var(--mmpc-extra-horizontal-padding, 0px)",
        paddingRight: "var(--mmpc-extra-horizontal-padding, 0px)",
        width: "100%",
      }),
      timeWrap: w({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "4px",
        color: U.colors.onDialogMuted,
        height: "20px",
        marginBottom: "-4px",
      }),
      timeWrapNoSource: w({ marginBottom: "-20px" }),
      sourceSelect: w({
        background: "none",
        border: "none",
        color: U.colors.onDialogMuted,
        fontSize: "13px",
        fontWeight: 500,
        cursor: "pointer",
        padding: 0,
        display: "flex",
        gap: "4px",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        opacity: 0.8,
        "&:hover": { opacity: 1 },
      }),
    },
    Ov = () => {
      const e = Me(),
        [t, r] = L(0),
        n = e.state === "playing";
      Q(() => {
        if (!n) return;
        const o = setInterval(() => {
          r(a => a + 1);
        }, 1e3);
        return () => clearInterval(o);
      }, [n]);
      const i = R(() => {
          const o = e.attributes?.media_position ?? null,
            a = e.attributes?.media_position_updated_at ?? null,
            l = e.attributes?.media_duration ?? null;
          if (o === null || o < 0 || l === null || a === null) return null;
          const c = new Date(),
            d = new Date(a),
            h = (c.getTime() - d.getTime()) / 1e3 + o,
            f = g => {
              const m = Math.floor(g / 60)
                  .toString()
                  .padStart(2, "0"),
                _ = Math.round(g - Number(m) * 60)
                  .toString()
                  .padStart(2, "0");
              return `${m}:${_}`;
            };
          return {
            currentPosition: h,
            mediaDuration: l,
            prettyNow: f(h),
            prettyEnd: f(l),
          };
        }, [e, t]),
        s = R(
          () =>
            (e.attributes.source_list ?? []).map(o => ({
              label: o,
              onClick: () => {
                V().callService("media_player", "select_source", {
                  entity_id: e.entity_id,
                  source: o,
                });
              },
            })),
          [e.attributes.source_list, e.entity_id]
        );
      return P("div", {
        css: Ls.root,
        children: [
          i &&
            p(i$, { value: i.currentPosition, min: 0, max: i.mediaDuration }),
          P("div", {
            css: [Ls.timeWrap, !e.attributes.source && Ls.timeWrapNoSource],
            children: [
              i && p("span", { children: i.prettyNow }),
              s.length > 0 &&
                e.attributes.source &&
                p(ze, {
                  align: "center",
                  menuItems: s,
                  renderTrigger: o =>
                    P("button", {
                      ...o,
                      css: Ls.sourceSelect,
                      children: [
                        p(se, {
                          size: "xx-small",
                          icon: Cs({
                            source: e.attributes.source ?? "",
                            fallbackIcon: "mdi:import",
                          }),
                        }),
                        e.attributes.source,
                        p(se, { size: "xx-small", icon: "mdi:chevron-down" }),
                      ],
                    }),
                }),
              i && p("span", { children: i.prettyEnd }),
            ],
          }),
        ],
      });
    },
    Tv = {
      root: w({
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: "8px",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "16px",
        paddingBottom: "16px",
        height: "100%",
      }),
    },
    Rv = ({ className: e, artworkButtonProps: t = {}, children: r }) =>
      P("div", {
        css: Tv.root,
        className: e,
        children: [
          p(Da, { iconSize: "x-large", borderRadius: 8, ...t }),
          p(Pv, {}),
          p(Ov, {}),
          p(Iv, {}),
          r,
        ],
      }),
    Tf = ({
      mediaBrowserEntryArray: e,
      lmsEntityId: t,
      horizontalPadding: r,
      maxHeight: n,
      useExperimentalLmsMediaBrowser: i,
      renderHeader: s,
    }) => {
      const [o, a] = L(e[0]);
      Q(() => {
        a(e[0]);
      }, [e]);
      const l = R(
          () =>
            e.map(u => ({
              label: u.name ?? u.entity_id,
              selected: u.entity_id === o.entity_id,
              onClick: () => {
                a(u);
              },
            })),
          [e, o.entity_id]
        ),
        c = o.entity_id === t,
        d = i && zb();
      return o
        ? d && c
          ? p(kv, {
              selectedMediaBrowser: o,
              selectMediaBrowserMenuItems: l.length > 1 ? l : void 0,
              horizontalPadding: r,
              maxHeight: n,
              renderHeader: s,
            })
          : p(g0, {
              selectedMediaBrowser: o,
              selectMediaBrowserMenuItems: l.length > 1 ? l : void 0,
              horizontalPadding: r,
              maxHeight: n,
              renderHeader: s,
            })
        : null;
    },
    Nv = {
      root: w({
        display: "contents",
        "--mmpc-chip-background": "var(--card-background-color)",
        "--mmpc-chip-foreground": "var(--primary-text-color)",
      }),
    },
    Lv = () => {
      const { config: e } = de(Re);
      return p("div", {
        css: Nv.root,
        children: p(Ua, {
          config: {
            entity_id: e.entity_id,
            speaker_group: { entities: e.entities },
          },
          showGrouped: !0,
        }),
      });
    },
    Rf = {
      root: w({
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        overflowX: "auto",
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "&::-webkit-scrollbar": { display: "none" },
        paddingTop: "16px",
        paddingBottom: "16px",
        borderTop: `0.5px solid ${U.colors.onCardDivider}`,
        gap: "2px",
      }),
      chip: w({
        "&:first-child": { marginLeft: 16 },
        "&:last-child": { marginRight: 16 },
      }),
    },
    Fv = () => {
      const { selectedPlayer: { custom_buttons: e } = {} } = Ne();
      return p("div", {
        css: Rf.root,
        children: e?.map((t, r) => p(Nf, { button: t }, r)),
      });
    },
    Nf = ({ button: e, type: t = "chip" }) => {
      const { selectedPlayer: { entity_id: r } = {} } = Ne(),
        { rootElement: n } = de(Re),
        { icon: i, name: s, ...o } = e,
        a = Gr({ rootElement: n, actionConfig: { ...o, entity: r } });
      return t === "icon-button"
        ? p(W, { icon: e.icon ?? "mdi:dots-vertical", size: "x-small", ...a })
        : P(Ye, {
            css: Rf.chip,
            icon: i,
            ...a,
            children: [
              !!s && p("span", { children: s }),
              a.renderLongPressIndicator(),
            ],
          });
    },
    Dv = wn`
  from {
    top: 15%;
    opacity: 0;
  }
  to {
    top: 0%;
    opacity: 1;
  }
`,
    Lf = 58,
    Ar = {
      overlay: w({
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 8,
        transition: "opacity 0.3s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        "@media screen and (min-height: 832px)": { alignItems: "center" },
      }),
      clickableBackground: w({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }),
      popUpContainer: w({
        position: "relative",
        animation: `${Dv} 0.55s cubic-bezier(0.25, 1, 0.5, 1) forwards`,
        maxHeight: "98vh",
        height: "fit-content",
        width: "424px",
        maxWidth: "98vw",
        backgroundColor: U.colors.dialog,
        overflow: "hidden",
        "--mmpc-popup-shadow-color": "var(--ha-color-shadow-dark)",
        boxShadow: "var(--ha-box-shadow-l)",
        borderTopLeftRadius: "var(--ha-dialog-border-radius, 28px)",
        borderTopRightRadius: "var(--ha-dialog-border-radius, 28px)",
        "@media screen and (min-height: 832px)": {
          borderRadius: "var(--ha-dialog-border-radius, 28px)",
          boxShadow: "0px 0px 20px var(--mmpc-popup-shadow-color)",
        },
      }),
      popUpContainerLight: w({
        boxShadow: "0px 10px 20px --mmpc-popup-shadow-color",
      }),
      popUpContent: w({ display: "grid", height: "100%" }),
      popUpHeader: w({
        display: "flex",
        height: Lf,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "0px 16px",
        borderBottom: "1px solid var(--divider-color, rgba(0, 0, 0, 0.12))",
        gap: "8px",
      }),
      title: w({
        margin: 0,
        fontSize: "18px",
        fontWeight: 500,
        color: U.colors.onDialog,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        marginRight: "auto",
      }),
      massiveCard: w({
        maxHeight: `calc(98vh - ${Lf}px)`,
        maxWidth: "98vw",
        width: "100%",
        height: 754,
        overflow: "hidden",
      }),
    },
    zv = ({ visible: e, setVisible: t }) => {
      const r = qe(),
        { config: n, rootElement: i } = de(Re),
        { selectedPlayer: s } = Ne(),
        { entity_id: o, speaker_group_entity_id: a } = s || {},
        {
          attributes: { friendly_name: l, icon: c, device_class: d },
        } = Me(),
        u = r.states[a ?? o]?.attributes?.group_members,
        h = fi({ icon: c, deviceClass: d }),
        f = R(() => {
          if (n.size === "large") return n;
          const { size: m, tap_opens_popup: _, options: y, ...b } = n;
          return {
            ...b,
            entity_id: o,
            size: "large",
            mode: "in-card",
            disable_player_focus_switching: !0,
            options: {
              hide_selected_player_header: !0,
              transparent_background_on_home: !0,
              player_is_active_when: y?.player_is_active_when,
              show_volume_step_buttons: y?.show_volume_step_buttons,
              use_volume_up_down_for_step_buttons:
                y?.use_volume_up_down_for_step_buttons,
            },
          };
        }, [n, o]),
        g = Gr({
          rootElement: i,
          actionConfig: { tap_action: { action: "more-info" }, entity: o },
        });
      return e
        ? P("div", {
            css: Ar.overlay,
            children: [
              p("div", { css: Ar.clickableBackground, onClick: () => t(!1) }),
              P("div", {
                css: [Ar.popUpContainer, !Ur() && Ar.popUpContainerLight],
                children: [
                  P("div", {
                    css: Ar.popUpHeader,
                    children: [
                      p(se, { size: "small", icon: h }),
                      P("h2", {
                        css: Ar.title,
                        children: [
                          l,
                          u?.length > 1 &&
                            P("span", { children: [" +", u.length - 1] }),
                        ],
                      }),
                      p(W, { size: "small", ...g, icon: "mdi:dots-vertical" }),
                      p(W, {
                        icon: "mdi:close",
                        size: "small",
                        onClick: () => t(!1),
                      }),
                    ],
                  }),
                  p("div", {
                    css: Ar.popUpContent,
                    children: p(mi, {
                      rootElement: i,
                      config: f,
                      children: p(mc, { css: Ar.massiveCard }),
                    }),
                  }),
                ],
              }),
            ],
          })
        : null;
    },
    Bv = {
      root: w({
        maxHeight: 300,
        paddingBottom: 12,
        borderTop: `0.5px solid ${U.colors.onCardDivider}`,
        overflowY: "auto",
      }),
    },
    Vv = () => {
      const {
          selectedPlayer: {
            media_browser: e,
            entity_id: t,
            lms_entity_id: r,
          } = {},
        } = Ne(),
        { config: n } = de(Re);
      return Ia(e) === !1
        ? null
        : p("div", {
            css: Bv.root,
            children: p(Tf, {
              mediaBrowserEntryArray: Vd(e, t ?? ""),
              useExperimentalLmsMediaBrowser:
                n?.options?.use_experimental_lms_media_browser ?? !1,
              lmsEntityId: r,
              horizontalPadding: 12,
            }),
          });
    },
    Ff = {
      titleText: w({
        margin: 0,
        fontSize: "16px",
        fontWeight: 600,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: U.colors.onCard,
      }),
      artistText: w({
        margin: 0,
        fontSize: "14px",
        color: U.colors.onCardMuted,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }),
    },
    qv = () => {
      const { title: e, subtitle: t } = Me();
      return P(Y, {
        children: [
          !!e && p("h3", { css: Ff.titleText, children: e }),
          !!t && p("p", { css: Ff.artistText, children: t }),
        ],
      });
    },
    Ai = {
      root: w({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: "auto",
        height: "36px",
        marginLeft: "-4px",
      }),
      buttonMuted: w({ opacity: 0.8 }),
      shuffleButton: w({
        "@container (max-width: 150px)": { display: "none" },
      }),
      repeatButton: w({ "@container (max-width: 130px)": { display: "none" } }),
    },
    jv = () => {
      const {
          attributes: { shuffle: e, repeat: t },
          state: r,
        } = Me(),
        n = r === "playing",
        {
          supportPreviousTrack: i,
          supportNextTrack: s,
          supportsShuffle: o,
          supportsRepeat: a,
          supportsTogglePlayPause: l,
          supportsPause: c,
          supportsStop: d,
        } = Ci(),
        {
          togglePlayback: u,
          toggleRepeat: h,
          toggleShuffle: f,
          previousTrack: g,
          nextTrack: m,
          stop: _,
        } = Xa();
      return P("div", {
        css: Ai.root,
        children: [
          !!o &&
            p(W, {
              id: "mmpc-compact-shuffle-toggle",
              css: [Ai.shuffleButton, ...(e ? [] : [Ai.buttonMuted])],
              size: "x-small",
              onClick: f,
              icon: e ? "mdi:shuffle-variant" : "mdi:shuffle-disabled",
            }),
          !!i &&
            p(W, {
              id: "mmpc-compact-previous-track",
              size: "small",
              onClick: g,
              icon: "mdi:skip-previous",
            }),
          l
            ? p(W, {
                id: "mmpc-compact-play-pause-toggle",
                size: "medium",
                onClick: u,
                icon: n
                  ? c
                    ? "mdi:pause-circle"
                    : "mdi:stop-circle"
                  : "mdi:play-circle",
              })
            : d
              ? p(W, {
                  id: "mmpc-compact-stop",
                  size: "medium",
                  onClick: _,
                  icon: "mdi:stop",
                })
              : null,
          !!s &&
            p(W, {
              id: "mmpc-compact-next-track",
              size: "small",
              onClick: m,
              icon: "mdi:skip-next",
            }),
          !!a &&
            p(W, {
              id: "mmpc-compact-repeat-toggle",
              css: [Ai.repeatButton, ...(t === "off" ? [Ai.buttonMuted] : [])],
              size: "x-small",
              onClick: h,
              icon:
                t === "one"
                  ? "mdi:repeat-once"
                  : t === "all"
                    ? "mdi:repeat"
                    : "mdi:repeat-off",
            }),
        ],
      });
    },
    tl = {
      root: w({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "4px",
      }),
      friendlyName: w({
        fontSize: "11px",
        color: U.colors.onCardMuted,
        opacity: 0.8,
        fontStyle: "italic",
      }),
    },
    Uv = () => {
      const e = qe(),
        {
          selectedPlayer: {
            entity_id: t,
            speaker_group_entity_id: r,
            name: n,
          } = {},
        } = Ne(),
        {
          attributes: { friendly_name: i, icon: s, device_class: o },
        } = Me();
      if (!t) return null;
      const a = e.states[r ?? t]?.attributes?.group_members,
        l = fi({ icon: s, deviceClass: o });
      return P("div", {
        css: tl.root,
        children: [
          p(se, { icon: l, size: "xx-small" }),
          p("span", { css: tl.friendlyName, children: n ?? i }),
          a &&
            a.length > 1 &&
            P("span", { css: tl.friendlyName, children: ["+", a.length - 1] }),
        ],
      });
    },
    rl = {
      root: w({
        maxHeight: 300,
        paddingBottom: 12,
        borderTop: `0.5px solid ${U.colors.onCardDivider}`,
        overflowY: "auto",
      }),
      title: w({
        fontSize: "16px",
        fontWeight: 500,
        color: U.colors.onCard,
        padding: 0,
        margin: 0,
      }),
      titleRow: w({
        padding: 12,
        paddingBottom: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }),
    },
    Kv = () => {
      const { selectedPlayer: { lms_entity_id: e, ma_entity_id: t } = {} } =
          Ne(),
        { t: r } = Be(),
        n = T(
          (i, s) =>
            P("div", {
              css: rl.titleRow,
              children: [
                p("h3", {
                  css: rl.title,
                  children: r({
                    id: "MediocreMediaPlayerCard.QueueView.up_next",
                    defaultMessage: "Up Next",
                  }),
                }),
                p(W, {
                  icon: "mdi:refresh",
                  onClick: i,
                  size: "x-small",
                  disabled: s,
                }),
              ],
            }),
          [r]
        );
      return p("div", {
        css: rl.root,
        style: { "--mmpc-search-padding": "12px" },
        children: p(gg, { lms_entity_id: e, ma_entity_id: t, renderHeader: n }),
      });
    },
    Gv = {
      root: w({
        maxHeight: 300,
        paddingTop: 12,
        paddingBottom: 12,
        borderTop: `0.5px solid ${U.colors.onCardDivider}`,
        overflowY: "auto",
      }),
    },
    Wv = () => {
      const {
          selectedPlayer: { ma_entity_id: e, entity_id: t, search: r } = {},
        } = Ne(),
        { selectedSearchProvider: n, searchProvidersMenu: i } = cf(
          r,
          t ?? "",
          e
        ),
        s = () =>
          n
            ? n.entity_id === e
              ? p(Pf, {
                  maEntityId: e,
                  horizontalPadding: 12,
                  additionalOptions: i,
                })
              : p(_f, {
                  entityId: n.entity_id,
                  showFavorites: !0,
                  horizontalPadding: 12,
                  filterConfig: n.media_types,
                  additionalOptions: i,
                })
            : null;
      return p("div", { css: Gv.root, children: s() });
    },
    vt = {
      speakerGroupContainer: w({
        display: "flex",
        flexDirection: "column",
        paddingTop: "12px",
        paddingBottom: "16px",
        borderTop: `0.5px solid ${U.colors.onCardDivider}`,
        gap: "12px",
      }),
      groupTitle: w({
        fontSize: "16px",
        fontWeight: 500,
        color: U.colors.onCard,
        margin: "0px 16px",
      }),
      syncContainer: w({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "auto",
        gap: "4px",
        marginRight: "19px",
      }),
      syncText: w({ fontSize: "12px", color: U.colors.onCardMuted }),
      groupedSpeakers: w({
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginLeft: "16px",
        marginRight: "16px",
      }),
      titleRow: w({ display: "flex", alignItems: "center" }),
      playerChips: w({
        display: "flex",
        flexDirection: "row",
        gap: "6px 2px",
        overflowX: "auto",
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "&::-webkit-scrollbar": { display: "none" },
      }),
      chipPlayer: w({
        padding: "0px 6px",
        gap: 6,
        "&:first-child": { marginLeft: 16 },
        "&:last-child": { marginRight: 16 },
      }),
      chipPlayerOff: w({ opacity: 0.8 }),
      chipPlayerArtwork: w({ borderRadius: "50%" }),
    },
    Hv = () => {
      const { selectedPlayer: e, setSelectedPlayer: t } = Ne(),
        { t: r } = Be(),
        { config: n } = de(Re),
        i = qe(),
        { media_players: s } = n,
        { entity_id: o, speaker_group_entity_id: a } = e || {},
        [l, c] = L(!0),
        d = a || o,
        u = R(
          () =>
            s.map(_ => {
              const y = i.states[_.entity_id],
                b = i.states[_.speaker_group_entity_id || _.entity_id],
                v = b?.attributes?.group_members ?? [],
                k = v.length === 0 ? !1 : v[0] !== b.entity_id;
              return {
                ...y,
                name: _.name ?? y?.attributes?.friendly_name,
                groupPlayerState: b,
                isChildInGroup: k,
                numPlayersInGroup: (b?.attributes?.group_members ?? []).length,
                isMainSpeaker: _.entity_id === o,
                selectPlayer: () => t(_),
              };
            }) ?? [],
          [i, o, s, t]
        ),
        h = R(
          () =>
            s
              .filter(_ => _.can_be_grouped)
              .map(_ =>
                _.name
                  ? {
                      name: _.name,
                      entity: _.speaker_group_entity_id ?? _.entity_id,
                    }
                  : (_.speaker_group_entity_id ?? _.entity_id)
              ),
          [s]
        ),
        f = _ =>
          !_ || _.isChildInGroup
            ? null
            : p(
                Is,
                {
                  entityId: _.entity_id,
                  children: ({ player: { state: y } }) => {
                    const { supportsPause: b, supportsStop: v } = jd(
                      y,
                      _.attributes ?? {}
                    );
                    return P(Ye, {
                      css: [
                        vt.chipPlayer,
                        _.state === "off" && vt.chipPlayerOff,
                      ],
                      onClick: () => _.selectPlayer(),
                      children: [
                        p(Da, {
                          size: 22,
                          iconSize: "x-small",
                          css: vt.chipPlayerArtwork,
                          onClick: _.selectPlayer,
                        }),
                        `${_.name}${_.numPlayersInGroup > 1 ? ` +${_.numPlayersInGroup - 1}` : ""}`,
                        y === "playing" || y === "paused"
                          ? p(W, {
                              size: "x-small",
                              onClick: k => {
                                (k.stopPropagation(),
                                  k.preventDefault(),
                                  b
                                    ? V().callService(
                                        "media_player",
                                        "media_play_pause",
                                        { entity_id: _.entity_id }
                                      )
                                    : y === "playing"
                                      ? V().callService(
                                          "media_player",
                                          v ? "media_stop" : "media_pause",
                                          { entity_id: _.entity_id }
                                        )
                                      : V().callService(
                                          "media_player",
                                          "media_play",
                                          { entity_id: _.entity_id }
                                        ));
                              },
                              icon:
                                y === "playing"
                                  ? b
                                    ? "mdi:pause-circle-outline"
                                    : "mdi:stop-circle-outline"
                                  : "mdi:play-circle-outline",
                            })
                          : y === "off" || y === "idle"
                            ? p(W, {
                                size: "x-small",
                                onClick: k => {
                                  (k.stopPropagation(),
                                    k.preventDefault(),
                                    V().callService("media_player", "toggle", {
                                      entity_id: _.entity_id,
                                    }));
                                },
                                icon: "mdi:power",
                              })
                            : p(se, {
                                size: "x-small",
                                icon: "mdi:circle-small",
                              }),
                      ],
                    });
                  },
                },
                _.entity_id
              );
      if (!o || !d) return null;
      const m = (i.states[d]?.attributes?.group_members?.length ?? 0) > 1;
      return P("div", {
        css: vt.speakerGroupContainer,
        children: [
          m &&
            P(Y, {
              children: [
                P("div", {
                  css: vt.titleRow,
                  children: [
                    p("h3", {
                      css: vt.groupTitle,
                      children: r({
                        id: "MediocreMediaPlayerCard.SpeakerGrouping.grouped_speakers_title",
                      }),
                    }),
                    P("div", {
                      css: vt.syncContainer,
                      children: [
                        p("span", {
                          css: vt.syncText,
                          onClick: () => c(!l),
                          children: r({
                            id: "MediocreMediaPlayerCard.SpeakerGrouping.link_volume_title",
                          }),
                        }),
                        p(W, {
                          icon: l ? "mdi:check-circle" : "mdi:circle-outline",
                          size: "x-small",
                          onClick: () => c(!l),
                        }),
                      ],
                    }),
                  ],
                }),
                p("div", {
                  css: vt.groupedSpeakers,
                  children: p(af, {
                    config: {
                      entity_id: o,
                      speaker_group: { entities: h, entity_id: d },
                      options: {
                        show_volume_step_buttons:
                          n.options?.show_volume_step_buttons ?? !1,
                        use_volume_up_down_for_step_buttons:
                          n.options?.use_volume_up_down_for_step_buttons ?? !1,
                      },
                    },
                    syncMainSpeaker: l,
                  }),
                }),
              ],
            }),
          !m &&
            p("h3", {
              css: vt.groupTitle,
              children: r({
                id: "MediocreMediaPlayerCard.SpeakerGrouping.add_speakers_title",
              }),
            }),
          p(Ua, {
            config: { entity_id: d, speaker_group: { entities: h } },
            showGrouped: !1,
            layout: { horizontalMargin: 16 },
          }),
          !n.disable_player_focus_switching &&
            P(Y, {
              children: [
                p("h3", {
                  css: vt.groupTitle,
                  children: r({
                    id: "MediocreMultiMediaPlayerCard.SpeakerGrouping.player_focus_title",
                  }),
                }),
                p("div", {
                  css: vt.playerChips,
                  children: u.length > 0 && u.map(f),
                }),
              ],
            }),
        ],
      });
    },
    Jv = {
      root: w({
        display: "flex",
        alignItems: "center",
        transition: "all 0.3s ease",
        width: "100%",
        gap: "4px",
      }),
    },
    Yv = () => {
      const { config: e } = de(Re),
        { selectedPlayer: { entity_id: t, speaker_group_entity_id: r } = {} } =
          Ne(),
        n = Me(),
        i = n.attributes?.volume_level ?? 0,
        s = n.attributes?.is_volume_muted ?? !1,
        o = T(() => {
          V().callService("media_player", "volume_mute", {
            entity_id: t,
            is_volume_muted: !s,
          });
        }, [t, s]),
        a = R(() => $s(i, s), [i, s]);
      return t
        ? P("div", {
            css: Jv.root,
            children: [
              p(W, { size: "x-small", onClick: o, icon: a }),
              p(gc, {
                entityId: r ?? t,
                syncGroupChildren: !0,
                sliderSize: "small",
                showStepButtons: e.options?.show_volume_step_buttons ?? !1,
                useVolumeUpDownForSteps:
                  e.options?.use_volume_up_down_for_step_buttons ?? !1,
              }),
            ],
          })
        : null;
    },
    Qv = ({ sliderVisible: e, setSliderVisible: t }) => {
      const r = Me(),
        n = r.attributes?.volume_level ?? 0,
        i = r.attributes?.is_volume_muted ?? !1,
        s = $s(n, i);
      return p(Y, {
        children: e
          ? p(W, {
              id: "mmpc-compact-volume-toggle",
              size: "x-small",
              onClick: () => t(!1),
              icon: "mdi:chevron-left",
            })
          : p(W, {
              id: "mmpc-compact-volume-toggle",
              size: "x-small",
              onClick: () => t(!0),
              icon: s,
            }),
      });
    },
    Ot = {
      card: w({ borderRadius: U.sizes.cardBorderRadius, overflow: "hidden" }),
      artBackground: w({
        background: `
      radial-gradient( circle at bottom right, var(--art-alternative-color, transparent) -500%, transparent 30% ),
      radial-gradient( circle at top center, var(--art-alternative-color, transparent) -500%, transparent 30% ),
      radial-gradient( circle at bottom center, var(--art-alternative-color, transparent) -500%, transparent 30% ),
      radial-gradient( circle at top left, var(--art-alternative-color, transparent) -500%, transparent 30% )`,
      }),
      cardContent: w({
        display: "flex",
        gap: "14px",
        padding: "12px",
        opacity: 1,
        transition: "opacity 0.3s ease",
        position: "relative",
      }),
      cardRowRight: w({
        display: "grid",
        gridTemplateColumns: "repeat(4, auto)",
        gap: "4px",
        minWidth: "max-content",
      }),
      cardRow: w({
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        alignItems: "center",
        justifyContent: "space-between",
      }),
      alignStart: w({ alignItems: "start" }),
      cardColumn: w({ display: "flex", flexDirection: "column", flex: 1 }),
      grid: w({ display: "grid" }),
      controlsContainer: w({
        display: "flex",
        flexGrow: 1,
        containerType: "inline-size",
      }),
    },
    Df = ({ isEmbeddedInMultiCard: e, onClick: t }) => {
      const { rootElement: r, config: n } = de(Re),
        { selectedPlayer: i, setLastInteraction: s } = Ne(),
        {
          ma_entity_id: o,
          ma_favorite_button_entity_id: a,
          lms_entity_id: l,
          search: c,
          media_browser: d,
          custom_buttons: u,
          alwaysShowCustomButtons: h,
          alwaysShowPowerButton: f,
          hide_when_off: g,
          hide_when_group_child: m,
          use_art_colors: _,
          tap_opens_popup: y,
          entity_id: b,
          action: v,
        } = R(
          () =>
            !i || n.size !== "compact"
              ? {}
              : {
                  ma_entity_id: i.ma_entity_id,
                  ma_favorite_button_entity_id: i.ma_favorite_button_entity_id,
                  lms_entity_id: i.lms_entity_id,
                  search: i.search,
                  media_browser: i.media_browser,
                  custom_buttons: i.custom_buttons,
                  alwaysShowPowerButton: n.options?.always_show_power_button,
                  alwaysShowCustomButtons:
                    n.options?.always_show_custom_buttons,
                  hide_when_off: n.options?.hide_when_off,
                  hide_when_group_child: n.options?.hide_when_group_child,
                  tap_opens_popup: n.tap_opens_popup,
                  use_art_colors: n.use_art_colors,
                  entity_id: i.entity_id,
                  action: i.action,
                },
          [n, i]
        ),
        k = u && u.length > 0,
        x = Bd(c, o) && !e,
        $ = Ia(d) && !e,
        [M, C] = L(!1),
        [O, E] = L(h ?? !1),
        [A, S] = L(!1),
        [I, q] = L(!1),
        [te, Se] = L(!1),
        [we, xe] = L(!1),
        { artVars: kt, haVars: He } = kf(),
        zr = Me(),
        { state: Br, subtitle: ut } = zr,
        Hn = Mf({ ma_entity_id: o, lms_entity_id: l }) && !e,
        Jn = qe(),
        tn = R(() => {
          const D = i?.speaker_group_entity_id ?? b;
          if (!D) return !1;
          const re = Jn.states[D];
          return !re.attributes.group_members ||
            re.attributes.group_members.length === 0
            ? !1
            : re.attributes.group_members.length > 1 &&
                re.attributes.group_members[0] !== D;
        }, [i, Jn, b]),
        Qt = Ci(),
        St =
          !Qt.supportsTogglePlayPause &&
          !Qt.supportNextTrack &&
          !Qt.supportPreviousTrack &&
          !Qt.supportsShuffle &&
          !Qt.supportsStop &&
          !Qt.supportsRepeat,
        dt = Br !== "off" && Br !== "unavailable",
        Mt = R(() => !(e || n.media_players.length <= 1), [n, e]),
        Ct = () => {
          C(!M);
        },
        [Yn, G] = L(!1),
        rn = ut ? 100 : 78,
        Qn = Gr({
          rootElement: r,
          actionConfig: {
            ...(v ?? { tap_action: { action: "more-info" } }),
            entity: b,
          },
          overrideCallback: y
            ? {
                onTap: () => {
                  G(!0);
                },
              }
            : t
              ? { onTap: t }
              : void 0,
        }),
        yc = T(() => {
          V().callService("media_player", "toggle", { entity_id: b });
        }, [b]);
      return (g && !dt) || (m && tn)
        ? null
        : p(e ? "div" : "ha-card", {
            style: {
              ...(kt ?? {}),
              ...(He && _ ? He : {}),
              ...(e
                ? {
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    margin: "0px",
                    padding: "0px",
                    borderRadius: "0px",
                    "--ha-card-border-width": "0px",
                    "--ha-card-box-shadow": "none",
                    "--ha-card-border-radius": "0px",
                  }
                : {}),
            },
            children: P("div", {
              css: [
                Ot.card,
                _ && Ot.artBackground,
                e && w({ borderRadius: "0px !important" }),
              ],
              onClick: s,
              children: [
                P("div", {
                  css: Ot.cardContent,
                  style: { opacity: dt ? 1 : 0.7 },
                  children: [
                    p(Da, { size: rn, iconSize: "large", ...Qn }),
                    P("div", {
                      css: Ot.cardColumn,
                      children: [
                        P("div", {
                          css: [Ot.cardRow, Ot.alignStart],
                          children: [
                            P("div", {
                              css: Ot.grid,
                              children: [p(qv, {}), p(Uv, {})],
                            }),
                            P("div", {
                              css: Ot.cardRowRight,
                              children: [
                                k &&
                                  !h &&
                                  p(Y, {
                                    children:
                                      u.length === 1
                                        ? p(Nf, {
                                            button: u[0],
                                            type: "icon-button",
                                          })
                                        : p(W, {
                                            id: "mmpc-compact-custom-buttons-toggle",
                                            size: "x-small",
                                            onClick: () => E(!O),
                                            icon: "mdi:dots-horizontal",
                                          }),
                                  }),
                                !e &&
                                  p(t0, {
                                    ma_entity_id: o ?? void 0,
                                    ma_favorite_button_entity_id: a ?? void 0,
                                    lms_entity_id: l ?? void 0,
                                    renderTrigger: D =>
                                      p(W, {
                                        id: "mmpc-compact-additional-actions-trigger",
                                        icon: "mdi:dots-vertical",
                                        size: "x-small",
                                        ...D,
                                      }),
                                  }),
                                $ &&
                                  p(W, {
                                    id: "mmpc-compact-media-browser-toggle",
                                    size: "x-small",
                                    onClick: () => Se(!te),
                                    icon: "mdi:folder-music",
                                  }),
                                x &&
                                  p(W, {
                                    id: "mmpc-compact-search-toggle",
                                    size: "x-small",
                                    onClick: () => q(!I),
                                    icon: "mdi:magnify",
                                  }),
                                Hn &&
                                  p(W, {
                                    id: "mmpc-compact-queue-toggle",
                                    size: "x-small",
                                    onClick: () => xe(!we),
                                    icon: "mdi:playlist-music",
                                  }),
                              ],
                            }),
                          ],
                        }),
                        P("div", {
                          css: Ot.cardRow,
                          style: {
                            marginTop: "auto",
                            minHeight: St ? "unset" : "36px",
                          },
                          children: [
                            p("div", {
                              css: Ot.controlsContainer,
                              children: A || St ? p(Yv, {}) : p(jv, {}),
                            }),
                            P("div", {
                              css: Ot.cardRowRight,
                              children: [
                                !!dt &&
                                  !St &&
                                  p(Qv, {
                                    sliderVisible: A,
                                    setSliderVisible: S,
                                  }),
                                Mt &&
                                  p(W, {
                                    id: "mmpc-compact-grouping-toggle",
                                    size: "x-small",
                                    onClick: Ct,
                                    icon: "mdi:speaker-multiple",
                                  }),
                                (!dt || St || f) &&
                                  p(W, {
                                    id: "mmpc-compact-power-button",
                                    size: "x-small",
                                    onClick: yc,
                                    icon: "mdi:power",
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                M && Mt && p(Hv, {}),
                O && p(Fv, {}),
                I && p(Wv, {}),
                te && p(Vv, {}),
                we && p(Kv, {}),
                Yn && p(zv, { visible: Yn, setVisible: G }),
              ],
            }),
          });
    },
    Fs = {
      root: w({}),
      titleRow: w({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
      }),
      title: w({ fontSize: 20, color: U.colors.onCard }),
      subtitle: w({ fontSize: 14, color: U.colors.onCardMuted }),
    },
    pr = ({ title: e, subtitle: t, className: r, renderAction: n }) =>
      P("div", {
        css: Fs.root,
        className: r,
        children: [
          P("div", {
            css: Fs.titleRow,
            children: [
              !!e && p("span", { css: Fs.title, children: e }),
              !!n && n(),
            ],
          }),
          !!t && p("span", { css: Fs.subtitle, children: t }),
        ],
      });
  function Xv({ entity_id: e, artist: t, enabled: r = !0 }) {
    const { data: n } = Kt(
        {
          type: "call_service",
          domain: "lyrion_cli",
          service: "query",
          service_data: {
            command: "serverstatus",
            entity_id: e,
            parameters: ["-"],
          },
          return_response: !0,
        },
        { enabled: r, staleTime: 6e5 }
      ),
      i = R(() => ["0", "5", `search:${t}`], [t]),
      { data: s } = Kt(
        {
          type: "call_service",
          domain: "lyrion_cli",
          service: "query",
          service_data: { command: "artists", entity_id: e, parameters: i },
          return_response: !0,
        },
        { enabled: r && !!n && !!t, staleTime: 3e5 }
      ),
      o = s?.artists_loop?.[0]?.id,
      a = R(() => ["0", "20", `artist_id:${o}`, "tags:alj"], [o]),
      { items: l, loading: c } = fr({
        entity_id: e,
        command: "albums",
        parameters: a,
        serverData: n ?? null,
        enabled: r && !!o,
      });
    return R(() => ({ albums: l, loading: c }), [l, c]);
  }
  const zf = {
      root: w({
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
        containerType: "inline-size",
      }),
      relatedScroll: w({
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 8,
        width: "100%",
        "@container (min-width: 300px)": {
          gridTemplateColumns: "repeat(4, 1fr)",
        },
        "@container (min-width: 500px)": {
          gridTemplateColumns: "repeat(6, 1fr)",
        },
      }),
    },
    Zv = ({ entity_id: e, renderHeader: t, enabled: r }) => {
      const i = Me().attributes.media_artist ?? "",
        { t: s } = Be(),
        { albums: o } = Xv({ entity_id: e, artist: i, enabled: r && !!i }),
        a = T(
          (l, c) => {
            let d = "loadtracks";
            (c === "next"
              ? (d = "inserttracks")
              : c === "add"
                ? (d = "addtracks")
                : c === "replace" && (d = "loadtracks"),
              V().callService("squeezebox", "call_method", {
                command: "playlist",
                entity_id: e,
                parameters: [d, `album.id=${l}`],
              }));
          },
          [e]
        );
      return o.length === 0
        ? null
        : P("div", {
            css: zf.root,
            children: [
              t(),
              p("div", {
                css: zf.relatedScroll,
                children: o.map(l =>
                  p(
                    ze,
                    {
                      menuItems: [
                        {
                          label: s({
                            id: "MediaBrowser.media_item_menu.enqueue_mode.play",
                            defaultMessage: "Play",
                          }),
                          icon: it("play"),
                          onClick: () => a(l.id),
                        },
                        {
                          label: s({
                            id: "MediaBrowser.media_item_menu.enqueue_dropdown_label",
                            defaultMessage: "Enqueue",
                          }),
                          icon: it("next"),
                          children: [
                            {
                              label: s({
                                id: "MediaBrowser.media_item_menu.enqueue_mode.next",
                                defaultMessage: "Play Next",
                              }),
                              icon: it("next"),
                              onClick: () => a(l.id, "next"),
                            },
                            {
                              label: s({
                                id: "MediaBrowser.media_item_menu.enqueue_mode.replace",
                                defaultMessage: "Replace Queue",
                              }),
                              icon: it("replace"),
                              onClick: () => a(l.id, "replace"),
                            },
                            {
                              label: s({
                                id: "MediaBrowser.media_item_menu.enqueue_mode.add",
                                defaultMessage: "Add to Queue",
                              }),
                              icon: it("add"),
                              onClick: () => a(l.id, "add"),
                            },
                          ],
                        },
                      ],
                      renderTrigger: c =>
                        p(cr, {
                          imageUrl: l.thumbnail ?? null,
                          mdiIcon: "mdi:album",
                          name: l.title,
                          artist: l.subtitle,
                          ...c,
                        }),
                    },
                    l.id
                  )
                ),
              }),
            ],
          });
    },
    nl = {
      root: w({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        overflowY: "auto",
        height: "100%",
        padding: 16,
        gap: 12,
      }),
      buttons: w({
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: "6px 2px",
      }),
    },
    ew = Ue(() => {
      const { selectedPlayer: e, setSelectedPlayer: t } = Ne(),
        {
          custom_buttons: r,
          ma_favorite_button_entity_id: n,
          ma_entity_id: i,
          entity_id: s,
          lms_entity_id: o,
        } = e,
        {
          rootElement: a,
          config: { media_players: l },
        } = de(Re),
        c = qe(),
        d = Me(),
        u = R(() => Ms(d.entity_id, i), [d, i]),
        h = R(() => o && pi(d, o), [d, o]),
        f = T(
          x => {
            i && Kd(i, x);
          },
          [i]
        ),
        g = R(
          () =>
            !i || !u
              ? []
              : l
                  .map($ => {
                    if (!$.ma_entity_id) return null;
                    const M = c.states[$.entity_id];
                    return !M || M.state === "unavailable" || $.entity_id === s
                      ? null
                      : {
                          label: M.attributes.friendly_name || $.entity_id,
                          onClick: () => {
                            $.ma_entity_id && (f($.ma_entity_id), t($));
                          },
                        };
                  })
                  .filter($ => $ !== null),
          [u, i, s, c.states, f, l, t]
        ),
        m = R(
          () =>
            !o || !h
              ? []
              : l
                  .map($ => {
                    if (!$.lms_entity_id) return null;
                    const M = c.states[$.entity_id];
                    return !M || M.state === "unavailable" || $.entity_id === s
                      ? null
                      : {
                          label:
                            $.name || M.attributes.friendly_name || $.entity_id,
                          onClick: () => {
                            $.lms_entity_id && (Ud(o, $.lms_entity_id), t($));
                          },
                        };
                  })
                  .filter($ => $ !== null),
          [h, o, s, c.states, l, t]
        ),
        _ = T(() => {
          n && V().callService("button", "press", { entity_id: n });
        }, [n]),
        y = R(
          () =>
            (d.attributes.source_list ?? []).map(x => ({
              label: x,
              onClick: () => {
                V().callService("media_player", "select_source", {
                  entity_id: d.entity_id,
                  source: x,
                });
              },
            })),
          [d.attributes.source_list, d.entity_id]
        ),
        b = R(() => {
          const x = [],
            $ = d.attributes.media_title,
            M = d.attributes.media_artist,
            C = d.attributes.media_album_name;
          return (
            $ &&
              x.push({
                label: `Song Radio (${$})`,
                icon: "mdi:music-note",
                onClick: () => or(s, i, $, "track"),
              }),
            M &&
              x.push({
                label: `Artist Radio (${M})`,
                icon: "mdi:account-music",
                onClick: () => or(s, i, M, "artist"),
              }),
            C &&
              x.push({
                label: `Album Radio (${C})`,
                icon: "mdi:album",
                onClick: () => or(s, i, C, "album"),
              }),
            x
          );
        }, [
          d.attributes.media_title,
          d.attributes.media_artist,
          d.attributes.media_album_name,
          s,
          i,
        ]),
        v = Gr({
          rootElement: a,
          actionConfig: { tap_action: { action: "more-info" }, entity: s },
        }),
        { t: k } = Be();
      return P("div", {
        css: nl.root,
        children: [
          r &&
            r.length > 0 &&
            P(Y, {
              children: [
                p(pr, {
                  title: k({
                    id: "MediocreMultiMediaPlayerCard.AdditionalActionsView.shortcuts_title",
                  }),
                  subtitle: k({
                    id: "MediocreMultiMediaPlayerCard.AdditionalActionsView.shortcuts_subtitle",
                  }),
                }),
                p("div", {
                  css: nl.buttons,
                  children: r?.map((x, $) =>
                    p(tw, { button: x, entityId: s }, $)
                  ),
                }),
              ],
            }),
          P(Y, {
            children: [
              p(pr, {
                title: k({
                  id: "MediocreMultiMediaPlayerCard.AdditionalActionsView.media_player_actions_title",
                }),
                subtitle: k({
                  id: "MediocreMultiMediaPlayerCard.AdditionalActionsView.media_player_actions_subtitle",
                }),
              }),
              P("div", {
                css: nl.buttons,
                children: [
                  b.length > 0 &&
                    p(ze, {
                      menuItems: b,
                      side: "bottom",
                      renderTrigger: x =>
                        P(Ye, {
                          icon: "mdi:radio-tower",
                          ...x,
                          children: [
                            "Start Radio Mix",
                            p(se, {
                              size: "x-small",
                              icon: "mdi:chevron-down",
                            }),
                          ],
                        }),
                    }),
                  !!i &&
                    u &&
                    P(Y, {
                      children: [
                        n &&
                          p(Ye, {
                            icon: "mdi:heart-plus",
                            onClick: _,
                            children: k({
                              id: "MediocreMultiMediaPlayerCard.AdditionalActionsView.mark_as_favorite",
                            }),
                          }),
                        g.length > 0 &&
                          p(ze, {
                            menuItems: g,
                            side: "bottom",
                            renderTrigger: x =>
                              P(Ye, {
                                icon: "mdi:transfer",
                                ...x,
                                children: [
                                  k({
                                    id: "MediocreMultiMediaPlayerCard.AdditionalActionsView.transfer_queue",
                                  }),
                                  p(se, {
                                    size: "x-small",
                                    icon: "mdi:chevron-down",
                                  }),
                                ],
                              }),
                          }),
                      ],
                    }),
                  m.length > 0 &&
                    p(ze, {
                      menuItems: m,
                      side: "bottom",
                      renderTrigger: x =>
                        P(Ye, {
                          icon: "mdi:transfer",
                          ...x,
                          children: [
                            k({
                              id: "MediocreMultiMediaPlayerCard.AdditionalActionsView.transfer_queue",
                            }),
                            p(se, {
                              size: "x-small",
                              icon: "mdi:chevron-down",
                            }),
                          ],
                        }),
                    }),
                  y.length > 0 &&
                    d.attributes.source &&
                    p(ze, {
                      side: "bottom",
                      menuItems: y,
                      renderTrigger: x =>
                        P(Ye, {
                          ...x,
                          icon: Cs({
                            source: d.attributes.source ?? "",
                            fallbackIcon: "mdi:import",
                          }),
                          children: [
                            d.attributes.source,
                            p(se, {
                              size: "x-small",
                              icon: "mdi:chevron-down",
                            }),
                          ],
                        }),
                    }),
                  p(Ye, {
                    icon: "mdi:information-outline",
                    ...v,
                    children: k({
                      id: "MediocreMultiMediaPlayerCard.AdditionalActionsView.more_info",
                    }),
                  }),
                ],
              }),
            ],
          }),
          h &&
            P(Y, {
              children: [
                p(pr, {
                  title: k({
                    id: "MediocreMultiMediaPlayerCard.AdditionalActionsView.lyrion_info_title",
                  }),
                }),
                p(fv, { lms_entity_id: o ?? void 0 }),
              ],
            }),
          o &&
            p(Zv, {
              renderHeader: () =>
                p(pr, {
                  subtitle: k({
                    id: "MediocreMultiMediaPlayerCard.AdditionalActionsView.related_albums_title",
                  }),
                }),
              entity_id: o,
            }),
        ],
      });
    }),
    tw = ({ button: e, entityId: t }) => {
      const { rootElement: r } = de(Re),
        { icon: n, name: i, ...s } = e,
        o = Gr({ rootElement: r, actionConfig: { ...s, entity: t } });
      return P(Ye, {
        icon: n,
        ...o,
        children: [
          !!i && p("span", { children: i }),
          o.renderLongPressIndicator(),
        ],
      });
    },
    rw = Ue(
      Lt(({ style: e, useArtColors: t, ...r }, n) => {
        const { artVars: i, haVars: s } = kf();
        return p("ha-card", {
          ...r,
          style: {
            overflow: "hidden",
            padding: 0,
            ...(i ?? {}),
            ...(s && t ? s : {}),
            ...(typeof e == "object" ? e : {}),
          },
          ref: n,
        });
      })
    ),
    Bf = {
      root: w({
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 0,
        padding: "10px 16px",
        width: "100%",
        position: "relative",
        boxSizing: "border-box",
        border: "none",
      }),
      footerInCard: w({
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
      }),
    },
    nw = Ue(({ setNavigationRoute: e, navigationRoute: t, desktopMode: r }) => {
      const { rootElement: n, config: i } = de(Re),
        { selectedPlayer: s } = Ne(),
        {
          entity_id: o,
          ma_entity_id: a,
          search: l,
          custom_buttons: c,
          media_browser: d,
          lms_entity_id: u,
        } = s,
        h = Bd(l, a),
        f = Ia(d),
        g = Mf({ ma_entity_id: a, lms_entity_id: u });
      return i.size && i.size !== "large"
        ? null
        : P("div", {
            css: [Bf.root, i.mode === "in-card" && Bf.footerInCard],
            children: [
              !r &&
                p(W, {
                  size: "small",
                  icon: "mdi:home",
                  onClick: () => e("massive"),
                  selected: t === "massive",
                }),
              h &&
                p(W, {
                  size: "small",
                  icon: "mdi:magnify",
                  onClick: () => e("search"),
                  selected: t === "search",
                }),
              f &&
                p(W, {
                  size: "small",
                  icon: "mdi:folder-music",
                  onClick: () => e("media-browser"),
                  selected: t === "media-browser",
                }),
              g &&
                p(W, {
                  size: "small",
                  icon: "mdi:playlist-music",
                  onClick: () => e("queue"),
                  selected: t === "queue",
                }),
              c && c.length === 1
                ? p(iw, { button: c[0], rootElement: n, entityId: o })
                : null,
              p(W, {
                size: "small",
                icon: "mdi:dots-horizontal",
                onClick: () => e("custom-buttons"),
                selected: t === "custom-buttons",
              }),
              p(W, {
                size: "small",
                icon: "mdi:speaker-multiple",
                onClick: () => e("speaker-grouping"),
                selected: t === "speaker-grouping",
              }),
            ],
          });
    }),
    iw = ({ button: e, rootElement: t, entityId: r }) => {
      const { icon: n, name: i, ...s } = e,
        o = Gr({ rootElement: t, actionConfig: { ...s, entity: r } });
      return p(W, { icon: e.icon ?? "mdi:dots-vertical", size: "small", ...o });
    },
    In = {
      root: w({
        padding: 16,
        gap: 24,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }),
      massive: w({
        overflow: "hidden",
        width: "100%",
        height: "100%",
        padding: 0,
      }),
      massiveHeader: w({
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "8px",
      }),
      title: w({
        margin: 0,
        fontSize: "18px",
        color: U.colors.onCard,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        marginRight: "auto",
      }),
      volumeRoot: w({
        display: "flex",
        alignItems: "center",
        flex: 1,
        maxHeight: "36px",
        gap: "12px",
        justifySelf: "center",
        width: "100%",
        maxWidth: 600,
      }),
      buttonMuted: w({ opacity: 0.8 }),
    },
    Vf = Ue(({ setNavigationRoute: e, navigationRoute: t }) => {
      const r = qe(),
        { selectedPlayer: n } = Ne(),
        i = n,
        { rootElement: s, config: o } = de(Re),
        {
          entity_id: a,
          attributes: {
            friendly_name: l,
            icon: c,
            device_class: d,
            volume_level: u,
            is_volume_muted: h,
          },
        } = Me(),
        f = u ?? 0,
        g = h ?? !1,
        m = T(() => {
          V().callService("media_player", "volume_mute", {
            entity_id: a,
            is_volume_muted: !g,
          });
        }, [g, a]),
        _ = R(() => $s(f, g), [f, g]),
        y =
          r.states[i.speaker_group_entity_id ?? i.entity_id]?.attributes
            ?.group_members,
        b = fi({ icon: c, deviceClass: d }),
        v = Gr({
          rootElement: s,
          actionConfig: {
            tap_action: { action: "more-info" },
            entity: i.entity_id,
          },
        }),
        k = T(() => {
          V().callService("media_player", "toggle", { entity_id: a });
        }, [a]),
        x = T(
          () => e(t === "speaker-grouping" ? "massive" : "speaker-grouping"),
          [e, t]
        );
      return o.size === "compact"
        ? null
        : P("div", {
            css: In.root,
            children: [
              !o.options?.hide_selected_player_header &&
                P("div", {
                  css: In.massiveHeader,
                  id: "mmpc-multi-media-player-card-massive-view-header",
                  children: [
                    p(se, { size: "small", icon: b }),
                    P("span", {
                      css: In.title,
                      children: [
                        i.name ?? l,
                        y?.length > 1 &&
                          P("span", { children: [" +", y.length - 1] }),
                      ],
                    }),
                    p(W, { size: "small", ...v, icon: "mdi:dots-vertical" }),
                  ],
                }),
              p(Rv, {
                css: In.massive,
                artworkButtonProps: { onClick: x },
                children: P("div", {
                  css: In.volumeRoot,
                  children: [
                    p(W, {
                      css: g ? In.buttonMuted : {},
                      size: "small",
                      onClick: m,
                      icon: _,
                    }),
                    p(gc, {
                      entityId: i.speaker_group_entity_id ?? i.entity_id,
                      syncGroupChildren: !0,
                      sliderSize: "small",
                      showStepButtons:
                        o.options?.show_volume_step_buttons ?? !1,
                      useVolumeUpDownForSteps:
                        o.options?.use_volume_up_down_for_step_buttons ?? !1,
                    }),
                    p(W, { size: "small", onClick: k, icon: "mdi:power" }),
                  ],
                }),
              }),
            ],
          });
    }),
    qf = {
      root: w({ height: "100%", overflowY: "auto" }),
      header: w({ padding: "12px 16px 12px 16px" }),
    },
    sw = Ue(({ height: e }) => {
      const { t } = Be(),
        { selectedPlayer: r } = Ne(),
        { entity_id: n, media_browser: i, lms_entity_id: s } = r,
        { config: o } = de(Re),
        a = () =>
          p(pr, {
            title: t({
              id: "MediocreMultiMediaPlayerCard.MediaBrowserView.browse_media_title",
            }),
            css: qf.header,
          });
      return p("div", {
        css: qf.root,
        style: { maxHeight: e },
        children: p(Tf, {
          mediaBrowserEntryArray: Vd(i, n),
          useExperimentalLmsMediaBrowser:
            o?.options?.use_experimental_lms_media_browser ?? !1,
          lmsEntityId: s,
          horizontalPadding: 16,
          renderHeader: a,
          maxHeight: e,
        }),
      });
    }),
    jf = ({ isEmbeddedInMultiCard: e, onClick: t }) => {
      const { rootElement: r, config: n } = de(Re),
        i = R(() => Vb(n), [n]);
      return p(mi, {
        rootElement: r,
        config: i,
        children: p(Za, {
          children: p(Df, { isEmbeddedInMultiCard: e, onClick: t }),
        }),
      });
    },
    Ei = e => (Array.isArray(e) ? e : [e]),
    ow = (e, t) => {
      const r = [[], []];
      for (const n of e) t(n) ? r[0].push(n) : r[1].push(n);
      return r;
    },
    Uf = Array,
    hr = (e, t) => e.includes(t),
    aw = (e, t = 0) => [...new Array(e)].map((r, n) => n + t),
    ye = (e, t, r) =>
      e === void 0
        ? t === void 0
          ? []
          : Array.isArray(t)
            ? t
            : [t]
        : (Array.isArray(t) ? e.push(...t) : e.push(t), e),
    Hr = (e, t) => (t == null ? (e ?? []) : e == null ? Ei(t) : e.concat(t)),
    lw = (...e) => e.reduce(Hr, []),
    Jr = (e, t, r) => {
      if (e === void 0) return Array.isArray(t) ? t : [t];
      const n = r?.isEqual ?? ((i, s) => i === s);
      for (const i of Ei(t)) e.some(s => n(s, i)) || e.push(i);
      return e;
    },
    cw = (e, t) =>
      e.reduce((r, n) => {
        const i = n[t];
        return ((r[i] = ye(r[i], n)), r);
      }, {}),
    Pn = (e, t, r) =>
      e.length === t.length &&
      e.every(r?.isEqual ? (n, i) => r.isEqual(n, t[i]) : (n, i) => n === t[i]),
    Yr = (e, t) => Tt(e) === t,
    Tt = e => {
      const t = typeof e;
      return t === "object"
        ? e === null
          ? "null"
          : "object"
        : t === "function"
          ? "object"
          : t;
    },
    mr = {
      boolean: "boolean",
      null: "null",
      undefined: "undefined",
      bigint: "a bigint",
      number: "a number",
      object: "an object",
      string: "a string",
      symbol: "a symbol",
    },
    uw = { ...mr, function: "a function" };
  class dw extends Error {}
  const Le = e => On(e, dw),
    On = (e, t = Error) => {
      throw new t(e);
    };
  class fw extends Error {
    name = "ParseError";
  }
  const F = e => On(e, fw),
    Kf = e => ` ${e}`,
    pw = "​",
    be = (e, t) => {
      const r = {},
        n = Array.isArray(e);
      let i = !1;
      for (const [s, o] of Object.entries(e).entries()) {
        const a = n ? t(s, o[1]) : t(...o, s);
        i ||= typeof a[0] == "number";
        const l = Array.isArray(a[0]) || a.length === 0 ? a : [a];
        for (const [c, d] of l)
          typeof c == "object" ? (r[c.group] = ye(r[c.group], d)) : (r[c] = d);
      }
      return i ? Object.values(r) : r;
    },
    Gf = Object.entries,
    Gt = (e, t) => e in t,
    il = (e, t) => t in e;
  class hw {
    constructor(t) {
      Object.assign(this, t);
    }
  }
  const mw = class {};
  class Wf extends mw {}
  const gw = (e, t) => {
      const r = {},
        n = {};
      let i;
      for (i in e) i in t ? (r[i] = e[i]) : (n[i] = e[i]);
      return [r, n];
    },
    Hf = (e, t) => gw(e, t)[1],
    Ii = e => Object.keys(e).length === 0,
    Ds = e => [
      ...Object.entries(e),
      ...Object.getOwnPropertySymbols(e).map(t => [t, e[t]]),
    ],
    _w = (e, t) =>
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)),
    yw = e => {
      const t = Object.keys(e).sort(),
        r = {};
      for (let n = 0; n < t.length; n++) r[t[n]] = e[t[n]];
      return r;
    },
    Wt = Kf(`unset${pw}`),
    bw = e =>
      Object.values(e).filter(t =>
        typeof t == "number" ? !0 : typeof e[t] != "number"
      ),
    Jf = {
      Array,
      Boolean,
      Date,
      Error,
      Function,
      Map,
      Number,
      Promise,
      RegExp,
      Set,
      String,
      WeakMap,
      WeakSet,
    },
    Yf = globalThis.File ?? Blob,
    Qf = {
      ArrayBuffer,
      Blob,
      File: Yf,
      FormData,
      Headers,
      Request,
      Response,
      URL,
    },
    Tn = {
      ...Jf,
      ...Qf,
      ...{
        Int8Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array,
        BigInt64Array,
        BigUint64Array,
      },
      String,
      Number,
      Boolean,
    },
    sl = e => {
      let t = Object.getPrototypeOf(e);
      for (
        ;
        t?.constructor &&
        (!Gt(t.constructor.name, Tn) || !(e instanceof Tn[t.constructor.name]));
      )
        t = Object.getPrototypeOf(t);
      const r = t?.constructor?.name;
      if (!(r === void 0 || r === "Object")) return r;
    },
    ol = e =>
      typeof e == "object" && e !== null ? (sl(e) ?? "object") : Tt(e),
    tt = Array.isArray,
    vw = {
      ...{
        Array: "an array",
        Function: "a function",
        Date: "a Date",
        RegExp: "a RegExp",
        Error: "an Error",
        Map: "a Map",
        Set: "a Set",
        String: "a String object",
        Number: "a Number object",
        Boolean: "a Boolean object",
        Promise: "a Promise",
        WeakMap: "a WeakMap",
        WeakSet: "a WeakSet",
      },
      ...{
        ArrayBuffer: "an ArrayBuffer instance",
        Blob: "a Blob instance",
        File: "a File instance",
        FormData: "a FormData instance",
        Headers: "a Headers instance",
        Request: "a Request instance",
        Response: "a Response instance",
        URL: "a URL instance",
      },
      ...{
        Int8Array: "an Int8Array",
        Uint8Array: "a Uint8Array",
        Uint8ClampedArray: "a Uint8ClampedArray",
        Int16Array: "an Int16Array",
        Uint16Array: "a Uint16Array",
        Int32Array: "an Int32Array",
        Uint32Array: "a Uint32Array",
        Float32Array: "a Float32Array",
        Float64Array: "a Float64Array",
        BigInt64Array: "a BigInt64Array",
        BigUint64Array: "a BigUint64Array",
      },
    },
    al = e => {
      const t = Object(e).name ?? null;
      return t && Gt(t, Tn) && Tn[t] === e ? t : null;
    },
    Xf = (e, t) => {
      let r = e.prototype;
      for (; r !== null; ) {
        if (r === t.prototype) return !0;
        r = Object.getPrototypeOf(r);
      }
      return !1;
    },
    ww = e => Zf(e, new Map()),
    Zf = (e, t) => {
      if (typeof e != "object" || e === null) return e;
      if (t?.has(e)) return t.get(e);
      const r = al(e.constructor);
      if (r === "Date") return new Date(e.getTime());
      if (r && r !== "Array") return e;
      const n = Array.isArray(e)
          ? e.slice()
          : Object.create(Object.getPrototypeOf(e)),
        i = Object.getOwnPropertyDescriptors(e);
      if (t) {
        t.set(e, n);
        for (const s in i) {
          const o = i[s];
          "get" in o || "set" in o || (o.value = Zf(o.value, t));
        }
      }
      return (Object.defineProperties(n, i), n);
    },
    xw = e => {
      let t = Wt;
      return () => (t === Wt ? (t = e()) : t);
    },
    zs = e => typeof e == "function" && e.length === 0,
    kw = class extends Function {
      constructor(...e) {
        const t = e.slice(0, -1),
          r = e[e.length - 1];
        try {
          super(...t, r);
        } catch (n) {
          return Le(`Encountered an unexpected error while compiling your definition:
                Message: ${n} 
                Source: (${e.slice(0, -1)}) => {
                    ${e[e.length - 1]}
                }`);
        }
      }
    };
  class Er {
    constructor(t, ...[r]) {
      return Object.assign(
        Object.setPrototypeOf(
          t.bind(r?.bind ?? this),
          this.constructor.prototype
        ),
        r?.attach
      );
    }
  }
  const Sw = xw(() => {
    try {
      return new Function("return false")();
    } catch {
      return !0;
    }
  });
  class Ht {
    constructor() {}
  }
  const Mw = () => {
      try {
        return (
          (
            new Error().stack
              ?.split(
                `
`
              )[2]
              ?.trim() || ""
          ).match(/\(?(.+?)(?::\d+:\d+)?\)?$/)?.[1] || "unknown"
        ).replace(/^file:\/\//, "");
      } catch {
        return "unknown";
      }
    },
    Cw = globalThis.process?.env ?? {},
    $w = { fileName: Mw, env: Cw },
    Aw = e => e[0].toUpperCase() + e.slice(1),
    Ew = e => e[0].toLowerCase() + e.slice(1),
    ep = e => new RegExp(Iw(e), typeof e == "string" ? "" : e.flags),
    Iw = e => `^(?:${typeof e == "string" ? e : e.source})$`,
    Ir = {
      negativeLookahead: e => `(?!${e})`,
      nonCapturingGroup: e => `(?:${e})`,
    },
    Pi = "\\",
    Bs = { " ": 1, "\n": 1, "	": 1 },
    Pw = /^-0\.?0*$/.source,
    tp = /[1-9]\d*/.source,
    Ow = /\.\d+/.source,
    Tw = /\.\d*[1-9]/.source,
    rp = e =>
      ep(
        Ir.negativeLookahead(Pw) +
          Ir.nonCapturingGroup(
            "-?" +
              Ir.nonCapturingGroup(
                Ir.nonCapturingGroup("0|" + tp) +
                  Ir.nonCapturingGroup(e.decimalPattern) +
                  "?"
              ) +
              (e.allowDecimalOnly ? "|" + e.decimalPattern : "") +
              "?"
          )
      ),
    np = rp({ decimalPattern: Tw, allowDecimalOnly: !1 }),
    Rw = np.test.bind(np),
    ll = rp({ decimalPattern: Ow, allowDecimalOnly: !0 });
  ll.test.bind(ll);
  const Nw = /^-?\d*\.?\d*$/,
    Lw = e => e.length !== 0 && Nw.test(e),
    Vs = ep(
      Ir.negativeLookahead("^-0$") +
        "-?" +
        Ir.nonCapturingGroup(Ir.nonCapturingGroup("0|" + tp))
    ),
    Fw = Vs.test.bind(Vs),
    cl = /^-?\d+$/,
    Dw = cl.test.bind(cl),
    ip = { number: "a number", bigint: "a bigint", integer: "an integer" },
    sp = (e, t) =>
      `'${e}' was parsed as ${ip[t]} but could not be narrowed to a literal value. Avoid unnecessary leading or trailing zeros and other abnormal notation`,
    zw = (e, t) => (t === "number" ? Rw(e) : Fw(e)),
    Bw = (e, t) => (t === "number" ? Number(e) : Number.parseInt(e)),
    Vw = (e, t) => (t === "number" ? Lw(e) : Dw(e)),
    qw = (e, t) => ul(e, "number", t),
    jw = (e, t) => ul(e, "number", { ...t, strict: !0 }),
    Uw = (e, t) => ul(e, "integer", t),
    ul = (e, t, r) => {
      const n = Bw(e, t);
      return !Number.isNaN(n) && Vw(e, t)
        ? r?.strict
          ? zw(e, t)
            ? n
            : F(sp(e, t))
          : n
        : r?.errorOnFail
          ? F(
              r?.errorOnFail === !0
                ? `Failed to parse ${ip[t]} from '${e}'`
                : r?.errorOnFail
            )
          : void 0;
    },
    Kw = e => {
      if (e[e.length - 1] !== "n") return;
      const t = e.slice(0, -1);
      let r;
      try {
        r = BigInt(t);
      } catch {
        return;
      }
      if (Vs.test(t)) return r;
      if (cl.test(t)) return F(sp(e, "bigint"));
    },
    Oi = { version: "0.56.0", filename: $w.fileName(), FileConstructor: Yf },
    op = new Map(),
    dl = Object.create(null),
    fl = e => {
      const t = op.get(e);
      if (t) return t;
      let r = Gw(e);
      return (
        dl[r] ? (r = `${r}${dl[r]++}`) : (dl[r] = 1),
        (Oi[r] = e),
        op.set(e, r),
        r
      );
    },
    Ti = e => /^[$A-Z_a-z][\w$]*$/.test(e),
    Gw = e => {
      switch (typeof e) {
        case "object": {
          if (e === null) break;
          const t = sl(e) ?? "object";
          return t[0].toLowerCase() + t.slice(1);
        }
        case "function":
          return Ti(e.name) ? e.name : "fn";
        case "symbol":
          return e.description && Ti(e.description) ? e.description : "symbol";
      }
      return Le(
        `Unexpected attempt to register serializable value of type ${Tt(e)}`
      );
    },
    pl = e =>
      typeof e == "string"
        ? JSON.stringify(e)
        : typeof e == "bigint"
          ? `${e}n`
          : `${e}`,
    Ww = (e, t = {}) =>
      Ri(
        e,
        {
          onUndefined: "$ark.undefined",
          onBigInt: r => `$ark.bigint-${r}`,
          ...t,
        },
        []
      ),
    ge = (e, t) => {
      switch (Tt(e)) {
        case "object":
          const r = e,
            n = r.constructor?.name ?? "Object";
          return n === "Object" || n === "Array"
            ? t?.quoteKeys === !1
              ? qs(r, t?.indent ?? 0, "")
              : JSON.stringify(Ri(r, Rn, []), null, t?.indent)
            : qs(r, t?.indent ?? 0, "");
        case "symbol":
          return Rn.onSymbol(e);
        default:
          return pl(e);
      }
    },
    qs = (e, t, r) => {
      if (typeof e == "function") return Rn.onFunction(e);
      if (typeof e != "object" || e === null) return pl(e);
      const n = r + " ".repeat(t);
      if (Array.isArray(e)) {
        if (e.length === 0) return "[]";
        const s = e
          .map(o => qs(o, t, n))
          .join(
            `,
` + n
          );
        return t
          ? `[
${n}${s}
${r}]`
          : `[${s}]`;
      }
      const i = e.constructor?.name ?? "Object";
      if (i === "Object") {
        const s = Ds(e).map(([o, a]) => {
          const l =
              typeof o == "symbol"
                ? Rn.onSymbol(o)
                : Ti(o)
                  ? o
                  : JSON.stringify(o),
            c = qs(a, t, n);
          return `${n}${l}: ${c}`;
        });
        return s.length === 0
          ? "{}"
          : t
            ? `{
${s.join(`,
`)}
${r}}`
            : `{${s.join(", ")}}`;
      }
      return e instanceof Date
        ? Ni(e)
        : "expression" in e && typeof e.expression == "string"
          ? e.expression
          : i;
    },
    Rn = {
      onCycle: () => "(cycle)",
      onSymbol: e => `Symbol(${fl(e)})`,
      onFunction: e => `Function(${fl(e)})`,
    },
    Ri = (e, t, r) => {
      switch (Tt(e)) {
        case "object": {
          const n = e;
          if ("toJSON" in n && typeof n.toJSON == "function") return n.toJSON();
          if (typeof n == "function") return Rn.onFunction(n);
          if (r.includes(n)) return "(cycle)";
          const i = [...r, n];
          if (Array.isArray(n)) return n.map(o => Ri(o, t, i));
          if (n instanceof Date) return n.toDateString();
          const s = {};
          for (const o in n) s[o] = Ri(n[o], t, i);
          for (const o of Object.getOwnPropertySymbols(n))
            s[t.onSymbol?.(o) ?? o.toString()] = Ri(n[o], t, i);
          return s;
        }
        case "symbol":
          return Rn.onSymbol(e);
        case "bigint":
          return t.onBigInt?.(e) ?? `${e}n`;
        case "undefined":
          return t.onUndefined ?? "undefined";
        case "string":
          return e.replace(/\\/g, "\\\\");
        default:
          return e;
      }
    },
    Ni = e => {
      const t = e.getFullYear(),
        r = e.getMonth(),
        n = e.getDate(),
        i = e.getHours(),
        s = e.getMinutes(),
        o = e.getSeconds(),
        a = e.getMilliseconds();
      if (r === 0 && n === 1 && i === 0 && s === 0 && o === 0 && a === 0)
        return `${t}`;
      const l = `${Hw[r]} ${n}, ${t}`;
      if (i === 0 && s === 0 && o === 0 && a === 0) return l;
      let c = e.toLocaleTimeString();
      const d = c.endsWith(" AM") || c.endsWith(" PM") ? c.slice(-3) : "";
      return (
        d && (c = c.slice(0, -d.length)),
        a ? (c += `.${Yw(a, 3)}`) : Jw.test(c) && (c = c.slice(0, -3)),
        `${c + d}, ${l}`
      );
    },
    Hw = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    Jw = /:\d\d:00$/,
    Yw = (e, t) => String(e).padStart(t, "0"),
    ap = (e, t, ...[r]) => {
      const n = r?.stringifySymbol ?? ge;
      let i = e;
      switch (typeof t) {
        case "string":
          i = Ti(t)
            ? e === ""
              ? t
              : `${e}.${t}`
            : `${e}[${JSON.stringify(t)}]`;
          break;
        case "number":
          i = `${e}[${t}]`;
          break;
        case "symbol":
          i = `${e}[${n(t)}]`;
          break;
        default:
          r?.stringifyNonKey
            ? (i = `${e}[${r.stringifyNonKey(t)}]`)
            : F(
                `${ge(t)} must be a PropertyKey or stringifyNonKey must be passed to options`
              );
      }
      return i;
    },
    Li = (e, ...t) => e.reduce((r, n) => ap(r, n, ...t), "");
  class lp extends Uf {
    cache = {};
    constructor(...t) {
      (super(), this.push(...t));
    }
    toJSON() {
      if (this.cache.json) return this.cache.json;
      this.cache.json = [];
      for (let t = 0; t < this.length; t++)
        this.cache.json.push(
          typeof this[t] == "symbol" ? ge(this[t]) : this[t]
        );
      return this.cache.json;
    }
    stringify() {
      return this.cache.stringify
        ? this.cache.stringify
        : (this.cache.stringify = Li(this));
    }
    stringifyAncestors() {
      if (this.cache.stringifyAncestors) return this.cache.stringifyAncestors;
      let t = "";
      const r = [t];
      for (const n of this) ((t = ap(t, n)), r.push(t));
      return (this.cache.stringifyAncestors = r);
    }
  }
  class cp {
    chars;
    i;
    def;
    constructor(t) {
      ((this.def = t), (this.chars = [...t]), (this.i = 0));
    }
    shift() {
      return this.chars[this.i++] ?? "";
    }
    get lookahead() {
      return this.chars[this.i] ?? "";
    }
    get nextLookahead() {
      return this.chars[this.i + 1] ?? "";
    }
    get length() {
      return this.chars.length;
    }
    shiftUntil(t) {
      let r = "";
      for (; this.lookahead && !t(this, r); ) r += this.shift();
      return r;
    }
    shiftUntilEscapable(t) {
      let r = "";
      for (; this.lookahead; )
        if (this.lookahead === Pi)
          (this.shift(),
            t(this, r)
              ? (r += this.shift())
              : this.lookahead === Pi
                ? (r += this.shift())
                : (r += `${Pi}${this.shift()}`));
        else {
          if (t(this, r)) break;
          r += this.shift();
        }
      return r;
    }
    shiftUntilLookahead(t) {
      return typeof t == "string"
        ? this.shiftUntil(r => r.lookahead === t)
        : this.shiftUntil(r => r.lookahead in t);
    }
    shiftUntilNonWhitespace() {
      return this.shiftUntil(() => !(this.lookahead in Bs));
    }
    jumpToIndex(t) {
      this.i = t < 0 ? this.length + t : t;
    }
    jumpForward(t) {
      this.i += t;
    }
    get location() {
      return this.i;
    }
    get unscanned() {
      return this.chars.slice(this.i, this.length).join("");
    }
    get scanned() {
      return this.chars.slice(0, this.i).join("");
    }
    sliceChars(t, r) {
      return this.chars.slice(t, r).join("");
    }
    lookaheadIs(t) {
      return this.lookahead === t;
    }
    lookaheadIsIn(t) {
      return this.lookahead in t;
    }
  }
  const Qw = (e, t) => `Unmatched ${e}${t === "" ? "" : ` before ${t}`}`,
    up = e => `Missing ${e}`;
  let hl = "$ark",
    Xw = 2;
  for (; hl in globalThis; ) hl = `$ark${Xw++}`;
  const dp = hl;
  globalThis[dp] = Oi;
  const z = Oi,
    Zw = e => `${dp}.${e}`,
    st = e => Zw(fl(e));
  class fp extends Wf {
    argNames;
    body = "";
    constructor(...t) {
      (super(), (this.argNames = t));
      for (const r of t) {
        if (r in this)
          throw new Error(
            `Arg name '${r}' would overwrite an existing property on FunctionBody`
          );
        this[r] = r;
      }
    }
    indentation = 0;
    indent() {
      return ((this.indentation += 4), this);
    }
    dedent() {
      return ((this.indentation -= 4), this);
    }
    prop(t, r = !1) {
      return pp(t, r);
    }
    index(t, r = !1) {
      return hp(`${t}`, r);
    }
    line(t) {
      return (
        (this.body += `${" ".repeat(this.indentation)}${t}
`),
        this
      );
    }
    const(t, r) {
      return (this.line(`const ${t} = ${r}`), this);
    }
    let(t, r) {
      return this.line(`let ${t} = ${r}`);
    }
    set(t, r) {
      return this.line(`${t} = ${r}`);
    }
    if(t, r) {
      return this.block(`if (${t})`, r);
    }
    elseIf(t, r) {
      return this.block(`else if (${t})`, r);
    }
    else(t) {
      return this.block("else", t);
    }
    for(t, r, n = 0) {
      return this.block(`for (let i = ${n}; ${t}; i++)`, r);
    }
    forIn(t, r) {
      return this.block(`for (const k in ${t})`, r);
    }
    block(t, r, n = "") {
      return (
        this.line(`${t} {`),
        this.indent(),
        r(this),
        this.dedent(),
        this.line(`}${n}`)
      );
    }
    return(t = "") {
      return this.line(`return ${t}`);
    }
    write(t = "anonymous", r = 0) {
      return `${t}(${this.argNames.join(", ")}) { ${
        r
          ? this.body
              .split(
                `
`
              )
              .map(n => " ".repeat(r) + `${n}`).join(`
`)
          : this.body
      } }`;
    }
    compile() {
      return new kw(...this.argNames, this.body);
    }
  }
  const Nn = e => (Yr(e, "object") || typeof e == "symbol" ? st(e) : pl(e)),
    pp = (e, t = !1) =>
      typeof e == "string" && Ti(e) ? `${t ? "?" : ""}.${e}` : hp(e1(e), t),
    e1 = e => (typeof e == "symbol" ? st(e) : JSON.stringify(e)),
    hp = (e, t = !1) => `${t ? "?." : ""}[${e}]`;
  class ml extends fp {
    traversalKind;
    optimistic;
    constructor(t) {
      (super("data", "ctx"),
        (this.traversalKind = t.kind),
        (this.optimistic = t.optimistic === !0));
    }
    invoke(t, r) {
      const n = r?.arg ?? this.data,
        i = typeof t == "string" ? !0 : this.requiresContextFor(t),
        s = typeof t == "string" ? t : t.id;
      return i
        ? `${this.referenceToId(s, r)}(${n}, ${this.ctx})`
        : `${this.referenceToId(s, r)}(${n})`;
    }
    referenceToId(t, r) {
      const n = r?.kind ?? this.traversalKind,
        i = `this.${t}${n}`;
      return r?.bind ? `${i}.bind(${r?.bind})` : i;
    }
    requiresContextFor(t) {
      return this.traversalKind === "Apply" || t.allowsRequiresContext;
    }
    initializeErrorCount() {
      return this.const("errorCount", "ctx.currentErrorCount");
    }
    returnIfFail() {
      return this.if("ctx.currentErrorCount > errorCount", () => this.return());
    }
    returnIfFailFast() {
      return this.if("ctx.failFast && ctx.currentErrorCount > errorCount", () =>
        this.return()
      );
    }
    traverseKey(t, r, n) {
      const i = this.requiresContextFor(n);
      return (
        i && this.line(`${this.ctx}.path.push(${t})`),
        this.check(n, { arg: r }),
        i && this.line(`${this.ctx}.path.pop()`),
        this
      );
    }
    check(t, r) {
      return this.traversalKind === "Allows"
        ? this.if(`!${this.invoke(t, r)}`, () => this.return(!1))
        : this.line(this.invoke(t, r));
    }
  }
  const mp = e => be(e, (t, r) => [t, tt(r) ? [...r] : r]),
    gr = Kf("arkKind"),
    H = (e, t) => e?.[gr] === t,
    ot = e => H(e, "root") || H(e, "constraint"),
    t1 = ["unit", "proto", "domain"],
    js = ["required", "optional", "index", "sequence"],
    gp = [
      "pattern",
      "divisor",
      "exactLength",
      "max",
      "min",
      "maxLength",
      "minLength",
      "before",
      "after",
    ],
    _p = [...gp, "structure", "predicate"],
    gl = [..._p, ...js],
    Us = ["alias", "union", "morph", "unit", "intersection", "proto", "domain"],
    r1 = [...Us, ...gl],
    yp = be(gl, (e, t) => [t, 1]),
    n1 = be([...js, "undeclared"], (e, t) => [t, 1]),
    bp = be(r1, (e, t) => [t, e]),
    Ks = e => typeof e == "string" && e in bp,
    Gs = e => bp[e],
    _l = e => Us.slice(Gs(e) + 1);
  ([..._l("union")], [..._l("morph")]);
  const Qr = e =>
      typeof e == "string" || typeof e == "boolean" || e === null
        ? e
        : typeof e == "number"
          ? Number.isNaN(e)
            ? "NaN"
            : e === Number.POSITIVE_INFINITY
              ? "Infinity"
              : e === Number.NEGATIVE_INFINITY
                ? "-Infinity"
                : e
          : Nn(e),
    Ws = e => {
      let t = "{ ";
      for (const [r, n] of Object.entries(e)) t += `${r}: ${Nn(n)}, `;
      return t + " }";
    },
    Ie = e => {
      const t = e;
      return (
        t.hasAssociatedError &&
          ((t.defaults.expected ??= r =>
            "description" in r ? r.description : t.defaults.description(r)),
          (t.defaults.actual ??= r => ge(r)),
          (t.defaults.problem ??= r =>
            `must be ${r.expected}${r.actual ? ` (was ${r.actual})` : ""}`),
          (t.defaults.message ??= r => {
            if (r.path.length === 0) return r.problem;
            const n = `${r.propString} ${r.problem}`;
            return n[0] === "[" ? `value at ${n}` : n;
          })),
        t
      );
    };
  class i1 extends Error {
    name = "ToJsonSchemaError";
    code;
    context;
    constructor(t, r) {
      (super(ge(r, { quoteKeys: !1, indent: 4 })),
        (this.code = t),
        (this.context = r));
    }
    hasCode(t) {
      return this.code === t;
    }
  }
  const je = {
    Error: i1,
    throw: (...e) => {
      throw new je.Error(...e);
    },
    throwInternalOperandError: (e, t) =>
      Le(`Unexpected JSON Schema input for ${e}: ${ge(t)}`),
    defaultConfig: {
      target: "draft-2020-12",
      dialect: "https://json-schema.org/draft/2020-12/schema",
      useRefs: !1,
      fallback: {
        arrayObject: e => je.throw("arrayObject", e),
        arrayPostfix: e => je.throw("arrayPostfix", e),
        defaultValue: e => je.throw("defaultValue", e),
        domain: e => je.throw("domain", e),
        morph: e => je.throw("morph", e),
        patternIntersection: e => je.throw("patternIntersection", e),
        predicate: e => je.throw("predicate", e),
        proto: e => je.throw("proto", e),
        symbolKey: e => je.throw("symbolKey", e),
        unit: e => je.throw("unit", e),
        date: e => je.throw("date", e),
      },
    },
  };
  z.config ??= {};
  const yl = (e, t) => {
      if (!t) return e;
      const r = { ...e };
      let n;
      for (n in t) {
        const i = { ...e.keywords };
        if (n === "keywords") {
          for (const s in t[n]) {
            const o = t.keywords[s];
            o !== void 0 &&
              (i[s] = typeof o == "string" ? { description: o } : o);
          }
          r.keywords = i;
        } else
          n === "toJsonSchema"
            ? (r[n] = vp(e.toJsonSchema, t.toJsonSchema))
            : Ks(n)
              ? (r[n] = { ...e[n], ...t[n] })
              : (r[n] = t[n]);
      }
      return r;
    },
    s1 = {
      "draft-2020-12": "https://json-schema.org/draft/2020-12/schema",
      "draft-07": "http://json-schema.org/draft-07/schema#",
    },
    vp = (e, t) => {
      if (!e) return wp(t ?? {}, void 0);
      if (!t) return e;
      const r = { ...e };
      let n;
      for (n in t)
        n === "fallback"
          ? (r.fallback = o1(e.fallback, t.fallback))
          : (r[n] = t[n]);
      return wp(r, t);
    },
    wp = (e, t) =>
      t?.dialect !== void 0
        ? e
        : t?.target !== void 0
          ? { ...e, dialect: s1[t.target] }
          : e,
    o1 = (e, t) => {
      ((e = xp(e)), (t = xp(t)));
      const r = {};
      let n;
      for (n in je.defaultConfig.fallback)
        r[n] =
          t[n] ??
          t.default ??
          e[n] ??
          e.default ??
          je.defaultConfig.fallback[n];
      return r;
    },
    xp = e => (typeof e == "function" ? { default: e } : (e ?? {}));
  class Ln extends Wf {
    [gr] = "error";
    path;
    data;
    nodeConfig;
    input;
    ctx;
    constructor({ prefixPath: t, relativePath: r, ...n }, i) {
      (super(), (this.input = n), (this.ctx = i), _w(this, n));
      const s = i.data;
      (n.code === "union" &&
        (n.errors = n.errors.flatMap(a => {
          const l = a.hasCode("union") ? a.errors : [a];
          return !t && !r
            ? l
            : l.map(c => c.transform(d => ({ ...d, path: lw(t, d.path, r) })));
        })),
        (this.nodeConfig = i.config[this.code]));
      const o = [...(n.path ?? i.path)];
      (r && o.push(...r),
        t && o.unshift(...t),
        (this.path = new lp(...o)),
        (this.data = "data" in n ? n.data : s));
    }
    transform(t) {
      return new Ln(
        t({ data: this.data, path: this.path, ...this.input }),
        this.ctx
      );
    }
    hasCode(t) {
      return this.code === t;
    }
    get propString() {
      return Li(this.path);
    }
    get expected() {
      if (this.input.expected) return this.input.expected;
      const t = this.meta?.expected ?? this.nodeConfig.expected;
      return typeof t == "function" ? t(this.input) : t;
    }
    get actual() {
      if (this.input.actual) return this.input.actual;
      const t = this.meta?.actual ?? this.nodeConfig.actual;
      return typeof t == "function" ? t(this.data) : t;
    }
    get problem() {
      if (this.input.problem) return this.input.problem;
      const t = this.meta?.problem ?? this.nodeConfig.problem;
      return typeof t == "function" ? t(this) : t;
    }
    get message() {
      if (this.input.message) return this.input.message;
      const t = this.meta?.message ?? this.nodeConfig.message;
      return typeof t == "function" ? t(this) : t;
    }
    get flat() {
      return this.hasCode("intersection") ? [...this.errors] : [this];
    }
    toJSON() {
      return {
        data: this.data,
        path: this.path,
        ...this.input,
        expected: this.expected,
        actual: this.actual,
        problem: this.problem,
        message: this.message,
      };
    }
    toString() {
      return this.message;
    }
    throw() {
      throw this;
    }
  }
  class Pr extends Uf {
    [gr] = "errors";
    ctx;
    constructor(t) {
      (super(), (this.ctx = t));
    }
    byPath = Object.create(null);
    get flatByPath() {
      return be(this.byPath, (t, r) => [t, r.flat]);
    }
    get flatProblemsByPath() {
      return be(this.byPath, (t, r) => [t, r.flat.map(n => n.problem)]);
    }
    byAncestorPath = Object.create(null);
    count = 0;
    mutable = this;
    throw() {
      throw this.toTraversalError();
    }
    toTraversalError() {
      return new a1(this);
    }
    add(t) {
      const r = this.byPath[t.propString];
      if (r) {
        if (t === r || (r.hasCode("union") && r.errors.length === 0)) return;
        const n =
            t.hasCode("union") && t.errors.length === 0
              ? t
              : new Ln(
                  {
                    code: "intersection",
                    errors: r.hasCode("intersection")
                      ? [...r.errors, t]
                      : [r, t],
                  },
                  this.ctx
                ),
          i = this.indexOf(r);
        ((this.mutable[i === -1 ? this.length : i] = n),
          (this.byPath[t.propString] = n),
          this.addAncestorPaths(t));
      } else
        ((this.byPath[t.propString] = t),
          this.addAncestorPaths(t),
          this.mutable.push(t));
      this.count++;
    }
    transform(t) {
      const r = new Pr(this.ctx);
      for (const n of this) r.add(t(n));
      return r;
    }
    merge(t) {
      for (const r of t)
        this.add(
          new Ln({ ...r, path: [...this.ctx.path, ...r.path] }, this.ctx)
        );
    }
    affectsPath(t) {
      return this.length === 0
        ? !1
        : t.stringifyAncestors().some(r => r in this.byPath) ||
            t.stringify() in this.byAncestorPath;
    }
    get summary() {
      return this.toString();
    }
    get issues() {
      return this;
    }
    toJSON() {
      return [...this.map(t => t.toJSON())];
    }
    toString() {
      return this.join(`
`);
    }
    addAncestorPaths(t) {
      for (const r of t.path.stringifyAncestors())
        this.byAncestorPath[r] = ye(this.byAncestorPath[r], t);
    }
  }
  class a1 extends Error {
    name = "TraversalError";
    constructor(t) {
      (t.length === 1
        ? super(t.summary)
        : super(
            `
` +
              t.map(r => `  • ${l1(r)}`).join(`
`)
          ),
        Object.defineProperty(this, "arkErrors", { value: t, enumerable: !1 }));
    }
  }
  const l1 = e =>
    e.toString().split(`
`).join(`
  `);
  class Fn {
    path = [];
    errors = new Pr(this);
    root;
    config;
    queuedMorphs = [];
    branches = [];
    seen = {};
    constructor(t, r) {
      ((this.root = t), (this.config = r));
    }
    get data() {
      let t = this.root;
      for (const r of this.path) t = t?.[r];
      return t;
    }
    get propString() {
      return Li(this.path);
    }
    reject(t) {
      return (this.error(t), !1);
    }
    mustBe(t) {
      return (this.error(t), !1);
    }
    error(t) {
      const r =
        typeof t == "object"
          ? t.code
            ? t
            : { ...t, code: "predicate" }
          : { code: "predicate", expected: t };
      return this.errorFromContext(r);
    }
    hasError() {
      return this.currentErrorCount !== 0;
    }
    get currentBranch() {
      return this.branches[this.branches.length - 1];
    }
    queueMorphs(t) {
      const r = { path: new lp(...this.path), morphs: t };
      this.currentBranch
        ? this.currentBranch.queuedMorphs.push(r)
        : this.queuedMorphs.push(r);
    }
    finalize(t) {
      return (
        this.queuedMorphs.length &&
          (typeof this.root == "object" &&
            this.root !== null &&
            this.config.clone &&
            (this.root = this.config.clone(this.root)),
          this.applyQueuedMorphs()),
        this.hasError() ? (t ? t(this.errors) : this.errors) : this.root
      );
    }
    get currentErrorCount() {
      return this.currentBranch
        ? this.currentBranch.error
          ? 1
          : 0
        : this.errors.count;
    }
    get failFast() {
      return this.branches.length !== 0;
    }
    pushBranch() {
      this.branches.push({ error: void 0, queuedMorphs: [] });
    }
    popBranch() {
      return this.branches.pop();
    }
    get external() {
      return this;
    }
    errorFromNodeContext(t) {
      return this.errorFromContext(t);
    }
    errorFromContext(t) {
      const r = new Ln(t, this);
      return (
        this.currentBranch
          ? (this.currentBranch.error = r)
          : this.errors.add(r),
        r
      );
    }
    applyQueuedMorphs() {
      for (; this.queuedMorphs.length; ) {
        const t = this.queuedMorphs;
        this.queuedMorphs = [];
        for (const { path: r, morphs: n } of t)
          this.errors.affectsPath(r) || this.applyMorphsAtPath(r, n);
      }
    }
    applyMorphsAtPath(t, r) {
      const n = t[t.length - 1];
      let i;
      if (n !== void 0) {
        i = this.root;
        for (let s = 0; s < t.length - 1; s++) i = i[t[s]];
      }
      for (const s of r) {
        this.path = [...t];
        const o = ot(s),
          a = s(i === void 0 ? this.root : i[n], this);
        if (a instanceof Ln) {
          this.errors.includes(a) || this.errors.add(a);
          break;
        }
        if (a instanceof Pr) {
          (o || this.errors.merge(a), (this.queuedMorphs = []));
          break;
        }
        (i === void 0 ? (this.root = a) : (i[n] = a), this.applyQueuedMorphs());
      }
    }
  }
  const _r = (e, t, r) => {
    if (!r) return t();
    r.path.push(e);
    const n = t();
    return (r.path.pop(), n);
  };
  class kp extends Er {
    attachments;
    $;
    onFail;
    includesTransform;
    includesContextualPredicate;
    isCyclic;
    allowsRequiresContext;
    rootApplyStrategy;
    contextFreeMorph;
    rootApply;
    referencesById;
    shallowReferences;
    flatRefs;
    flatMorphs;
    allows;
    get shallowMorphs() {
      return [];
    }
    constructor(t, r) {
      (super(
        (i, s, o = this.onFail) =>
          s
            ? (this.traverseApply(i, s), s.hasError() ? s.errors : s.data)
            : this.rootApply(i, o),
        { attach: t }
      ),
        (this.attachments = t),
        (this.$ = r),
        (this.onFail = this.meta.onFail ?? this.$.resolvedConfig.onFail),
        (this.includesTransform =
          this.hasKind("morph") ||
          (this.hasKind("structure") && this.structuralMorph !== void 0) ||
          (this.hasKind("sequence") && this.inner.defaultables !== void 0)),
        (this.includesContextualPredicate =
          this.hasKind("predicate") && this.inner.predicate.length !== 1),
        (this.isCyclic = this.kind === "alias"),
        (this.referencesById = { [this.id]: this }),
        (this.shallowReferences = this.hasKind("structure")
          ? [this, ...this.children]
          : this.children.reduce(
              (i, s) => f1(i, s.shallowReferences),
              [this]
            )));
      const n = this.isStructural();
      ((this.flatRefs = []), (this.flatMorphs = []));
      for (let i = 0; i < this.children.length; i++) {
        if (
          ((this.includesTransform ||= this.children[i].includesTransform),
          (this.includesContextualPredicate ||=
            this.children[i].includesContextualPredicate),
          (this.isCyclic ||= this.children[i].isCyclic),
          !n)
        ) {
          const s = this.children[i].flatRefs;
          for (let o = 0; o < s.length; o++) {
            const a = s[o];
            if (!this.flatRefs.some(l => Mp(l, a))) {
              this.flatRefs.push(a);
              for (const l of a.node.branches)
                (l.hasKind("morph") ||
                  (l.hasKind("intersection") &&
                    l.structure?.structuralMorph !== void 0)) &&
                  this.flatMorphs.push({
                    path: a.path,
                    propString: a.propString,
                    node: l,
                  });
            }
          }
        }
        Object.assign(this.referencesById, this.children[i].referencesById);
      }
      (this.flatRefs.sort((i, s) =>
        i.path.length > s.path.length
          ? 1
          : i.path.length < s.path.length
            ? -1
            : i.propString > s.propString
              ? 1
              : i.propString < s.propString ||
                  i.node.expression < s.node.expression
                ? -1
                : 1
      ),
        (this.allowsRequiresContext =
          this.includesContextualPredicate || this.isCyclic),
        (this.rootApplyStrategy =
          !this.allowsRequiresContext && this.flatMorphs.length === 0
            ? this.shallowMorphs.length === 0
              ? "allows"
              : this.shallowMorphs.every(
                    i => i.length === 1 || i.name === "$arkStructuralMorph"
                  )
                ? this.hasKind("union")
                  ? this.branches.some(i => i.shallowMorphs.length > 1)
                    ? "contextual"
                    : "branchedOptimistic"
                  : this.shallowMorphs.length > 1
                    ? "contextual"
                    : "optimistic"
                : "contextual"
            : "contextual"),
        (this.rootApply = this.createRootApply()),
        (this.allows = this.allowsRequiresContext
          ? i => this.traverseAllows(i, new Fn(i, this.$.resolvedConfig))
          : i => this.traverseAllows(i)));
    }
    createRootApply() {
      switch (this.rootApplyStrategy) {
        case "allows":
          return (r, n) => {
            if (this.allows(r)) return r;
            const i = new Fn(r, this.$.resolvedConfig);
            return (this.traverseApply(r, i), i.finalize(n));
          };
        case "contextual":
          return (r, n) => {
            const i = new Fn(r, this.$.resolvedConfig);
            return (this.traverseApply(r, i), i.finalize(n));
          };
        case "optimistic":
          this.contextFreeMorph = this.shallowMorphs[0];
          const t = this.$.resolvedConfig.clone;
          return (r, n) => {
            if (this.allows(r))
              return this.contextFreeMorph(
                t &&
                  ((typeof r == "object" && r !== null) ||
                    typeof r == "function")
                  ? t(r)
                  : r
              );
            const i = new Fn(r, this.$.resolvedConfig);
            return (this.traverseApply(r, i), i.finalize(n));
          };
        case "branchedOptimistic":
          return this.createBranchedOptimisticRootApply();
        default:
          return (
            this.rootApplyStrategy,
            Le(`Unexpected rootApplyStrategy ${this.rootApplyStrategy}`)
          );
      }
    }
    compiledMeta = d1(this.metaJson);
    cacheGetter(t, r) {
      return (Object.defineProperty(this, t, { value: r }), r);
    }
    get description() {
      return this.cacheGetter(
        "description",
        this.meta?.description ??
          this.$.resolvedConfig[this.kind].description(this)
      );
    }
    get references() {
      return Object.values(this.referencesById);
    }
    precedence = Gs(this.kind);
    precompilation;
    assert = (t, r) => this(t, r, n => n.throw());
    traverse(t, r) {
      return this(t, r, null);
    }
    get in() {
      return this.cacheGetter(
        "in",
        this.rawIn.isRoot() ? this.$.finalize(this.rawIn) : this.rawIn
      );
    }
    get rawIn() {
      return this.cacheGetter("rawIn", this.getIo("in"));
    }
    get out() {
      return this.cacheGetter(
        "out",
        this.rawOut.isRoot() ? this.$.finalize(this.rawOut) : this.rawOut
      );
    }
    get rawOut() {
      return this.cacheGetter("rawOut", this.getIo("out"));
    }
    getIo(t) {
      if (!this.includesTransform) return this;
      const r = {};
      for (const [n, i] of this.innerEntries) {
        const s = this.impl.keys[n];
        if (s.reduceIo) s.reduceIo(t, r, i);
        else if (s.child) {
          const o = i;
          r[n] = tt(o)
            ? o.map(a => (t === "in" ? a.rawIn : a.rawOut))
            : t === "in"
              ? o.rawIn
              : o.rawOut;
        } else r[n] = i;
      }
      return this.$.node(this.kind, r);
    }
    toJSON() {
      return this.json;
    }
    toString() {
      return `Type<${this.expression}>`;
    }
    equals(t) {
      const r = ot(t) ? t : this.$.parseDefinition(t);
      return this.innerHash === r.innerHash;
    }
    ifEquals(t) {
      return this.equals(t) ? this : void 0;
    }
    hasKind(t) {
      return this.kind === t;
    }
    assertHasKind(t) {
      return (
        this.kind !== t &&
          On(`${this.kind} node was not of asserted kind ${t}`),
        this
      );
    }
    hasKindIn(...t) {
      return t.includes(this.kind);
    }
    assertHasKindIn(...t) {
      return (
        hr(t, this.kind) ||
          On(`${this.kind} node was not one of asserted kinds ${t}`),
        this
      );
    }
    isBasis() {
      return hr(t1, this.kind);
    }
    isConstraint() {
      return hr(gl, this.kind);
    }
    isStructural() {
      return hr(js, this.kind);
    }
    isRefinement() {
      return hr(_p, this.kind);
    }
    isRoot() {
      return hr(Us, this.kind);
    }
    isUnknown() {
      return this.hasKind("intersection") && this.children.length === 0;
    }
    isNever() {
      return this.hasKind("union") && this.children.length === 0;
    }
    hasUnit(t) {
      return this.hasKind("unit") && this.allows(t);
    }
    hasOpenIntersection() {
      return this.impl.intersectionIsOpen;
    }
    get nestableExpression() {
      return this.expression;
    }
    select(t) {
      const r = Fi.normalize(t);
      return this._select(r);
    }
    _select(t) {
      let r = Fi.applyBoundary[t.boundary ?? "references"](this);
      return (
        t.kind && (r = r.filter(n => n.kind === t.kind)),
        t.where && (r = r.filter(t.where)),
        Fi.applyMethod[t.method ?? "filter"](r, this, t)
      );
    }
    transform(t, r) {
      return this._transform(t, this._createTransformContext(r));
    }
    _createTransformContext(t) {
      return {
        root: this,
        selected: void 0,
        seen: {},
        path: [],
        parseOptions: { prereduced: t?.prereduced ?? !1 },
        undeclaredKeyHandling: void 0,
        ...t,
      };
    }
    _transform(t, r) {
      const n = r.bindScope ?? this.$;
      if (r.seen[this.id]) return this.$.lazilyResolve(r.seen[this.id]);
      if (r.shouldTransform?.(this, r) === !1) return this;
      let i;
      ((r.seen[this.id] = () => i),
        this.hasKind("structure") &&
          this.undeclared !== r.undeclaredKeyHandling &&
          (r = { ...r, undeclaredKeyHandling: this.undeclared }));
      const s = be(this.inner, (d, u) => {
        if (!this.impl.keys[d].child) return [d, u];
        const h = u;
        if (!tt(h)) {
          const g = h._transform(t, r);
          return g ? [d, g] : [];
        }
        if (h.length === 0) return [d, u];
        const f = h.flatMap(g => g._transform(t, r) ?? []);
        return f.length ? [d, f] : [];
      });
      delete r.seen[this.id];
      const o = Object.assign(s, { meta: this.meta }),
        a = r.selected && !r.selected.includes(this) ? o : t(this.kind, o, r);
      if (a === null) return null;
      if (ot(a)) return (i = a);
      const l = Object.keys(a);
      return (l.length === 0 || (l.length === 1 && l[0] === "meta")) &&
        !Ii(this.inner)
        ? null
        : (this.kind === "required" ||
              this.kind === "optional" ||
              this.kind === "index") &&
            !("value" in a)
          ? r.undeclaredKeyHandling
            ? { ...a, value: z.intrinsic.unknown }
            : null
          : (this.kind === "morph" && (a.in ??= z.intrinsic.unknown),
            (i = n.node(this.kind, a, r.parseOptions)));
    }
    configureReferences(t, r = "references") {
      const n = Fi.normalize(r),
        i =
          typeof t == "string"
            ? (l, c) => ({ ...c, meta: { ...c.meta, description: t } })
            : typeof t == "function"
              ? (l, c) => ({ ...c, meta: t(c.meta) })
              : (l, c) => ({ ...c, meta: { ...c.meta, ...t } });
      if (n.boundary === "self")
        return this.$.node(
          this.kind,
          i(this.kind, { ...this.inner, meta: this.meta })
        );
      const s = this._select(n),
        o = s && Ei(s),
        a =
          n.boundary === "child"
            ? (l, c) => c.root.children.includes(l)
            : n.boundary === "shallow"
              ? l => l.kind !== "structure"
              : () => !0;
      return this.$.finalize(
        this.transform(i, { shouldTransform: a, selected: o })
      );
    }
  }
  const Fi = {
      applyBoundary: {
        self: e => [e],
        child: e => [...e.children],
        shallow: e => [...e.shallowReferences],
        references: e => [...e.references],
      },
      applyMethod: {
        filter: e => e,
        assertFilter: (e, t, r) => (e.length === 0 && On(Sp(t, r)), e),
        find: e => e[0],
        assertFind: (e, t, r) => (e.length === 0 && On(Sp(t, r)), e[0]),
      },
      normalize: e =>
        typeof e == "function"
          ? { boundary: "references", method: "filter", where: e }
          : typeof e == "string"
            ? Gt(e, Fi.applyBoundary)
              ? { method: "filter", boundary: e }
              : { boundary: "references", method: "filter", kind: e }
            : { boundary: "references", method: "filter", ...e },
    },
    Sp = (e, t) => `${e} had no references matching ${ge(t)}.`,
    c1 = e => Li(e, { stringifyNonKey: t => t.expression }),
    u1 = /"(\$ark\.[^"]+)"/g,
    d1 = e => JSON.stringify(e).replace(u1, "$1"),
    Or = (e, t) => ({ path: e, node: t, propString: c1(e) }),
    Mp = (e, t) => e.propString === t.propString && e.node.equals(t.node),
    Cp = (e, t) => Jr(e, t, { isEqual: Mp }),
    f1 = (e, t) => Jr(e, t, { isEqual: (r, n) => r.equals(n) });
  class K extends Array {
    static init(t, r, n, i) {
      return new K({
        kind: t,
        l: r,
        r: n,
        path: i?.path ?? [],
        optional: i?.optional ?? !1,
      });
    }
    add(t, r, n, i) {
      return (
        this.push({
          kind: t,
          l: r,
          r: n,
          path: i?.path ?? [],
          optional: i?.optional ?? !1,
        }),
        this
      );
    }
    get summary() {
      return this.describeReasons();
    }
    describeReasons() {
      if (this.length === 1) {
        const { path: t, l: r, r: n } = this[0],
          i = Li(t);
        return Ap(`Intersection${i && ` at ${i}`} of ${$p(r, n)}`);
      }
      return `The following intersections result in unsatisfiable types:
• ${this.map(({ path: t, l: r, r: n }) => `${t}: ${$p(r, n)}`).join(`
• `)}`;
    }
    throw() {
      return F(this.describeReasons());
    }
    invert() {
      const t = this.map(r => ({ ...r, l: r.r, r: r.l }));
      return t instanceof K ? t : new K(...t);
    }
    withPrefixKey(t, r) {
      return this.map(n => ({
        ...n,
        path: [t, ...n.path],
        optional: n.optional || r === "optional",
      }));
    }
    toNeverIfDisjoint() {
      return z.intrinsic.never;
    }
  }
  const $p = (e, t) => `${bl(e)} and ${bl(t)}`,
    bl = e =>
      ot(e)
        ? e.expression
        : tt(e)
          ? e.map(bl).join(" | ") || "never"
          : String(e),
    Ap = e => `${e} results in an unsatisfiable type`,
    Dn = {},
    yr = (e, t, r) => Ge(e, t, { $: r, invert: !1, pipe: !1 }),
    vl = (e, t, r) => Ge(e, t, { $: r, invert: !1, pipe: !0 }),
    Ge = (e, t, r) => {
      const n = r.pipe ? "|>" : "&",
        i = `${e.hash}${n}${t.hash}`;
      if (Dn[i] !== void 0) return Dn[i];
      if (!r.pipe) {
        const a = `${t.hash}${n}${e.hash}`;
        if (Dn[a] !== void 0) {
          const l = Dn[a],
            c = l instanceof K ? l.invert() : l;
          return ((Dn[i] = c), c);
        }
      }
      const s = !r.pipe || (!e.includesTransform && !t.includesTransform);
      if (s && e.equals(t)) return e;
      let o = s ? wl(e, t, r) : e.hasKindIn(...Us) ? p1(e, t, r) : wl(e, t, r);
      return (
        ot(o) && (e.equals(o) ? (o = e) : t.equals(o) && (o = t)),
        (Dn[i] = o),
        o
      );
    },
    wl = (e, t, r) => {
      const n = e.precedence < t.precedence ? e.kind : t.kind,
        i = e.impl.intersections[t.kind] ?? t.impl.intersections[e.kind];
      if (i === void 0) return null;
      if (n === e.kind) return i(e, t, r);
      {
        let s = i(t, e, { ...r, invert: !r.invert });
        return (s instanceof K && (s = s.invert()), s);
      }
    },
    p1 = (e, t, r) =>
      e.includesTransform || t.includesTransform
        ? r.invert
          ? Ep(t, e, r)
          : Ep(e, t, r)
        : wl(e, t, r),
    Ep = (e, t, r) =>
      e.distribute(
        n => h1(n, t, r),
        n => {
          const i = n.filter(ot);
          if (i.length === 0) return K.init("union", e.branches, t.branches);
          if (
            i.length < e.branches.length ||
            !e.branches.every((o, a) => o.rawIn.equals(i[a].rawIn))
          )
            return r.$.parseSchema(i);
          if (i.length === 1) return i[0];
          const s = { branches: i };
          return r.$.parseSchema(s);
        }
      ),
    h1 = (e, t, r) => {
      if (e.hasKind("morph")) {
        const i = [...e.morphs];
        if (e.lastMorphIfNode) {
          const s = Ge(e.lastMorphIfNode, t, r);
          if (s instanceof K) return s;
          i[i.length - 1] = s;
        } else i.push(t);
        return r.$.node("morph", { morphs: i, in: e.inner.in });
      }
      if (t.hasKind("morph")) {
        const i = Ge(e, t.rawIn, r);
        return i instanceof K ? i : r.$.node("morph", { morphs: [t], in: i });
      }
      return r.$.node("morph", { morphs: [t], in: e });
    };
  class zn extends kp {
    constructor(t, r) {
      (super(t, r),
        Object.defineProperty(this, gr, {
          value: "constraint",
          enumerable: !1,
        }));
    }
    impliedSiblings;
    intersect(t) {
      return yr(this, t, this.$);
    }
  }
  class Hs extends zn {
    traverseApply = (t, r) => {
      this.traverseAllows(t, r) || r.errorFromNodeContext(this.errorContext);
    };
    compile(t) {
      t.traversalKind === "Allows"
        ? t.return(this.compiledCondition)
        : t.if(this.compiledNegation, () =>
            t.line(`ctx.errorFromNodeContext(${this.compiledErrorContext})`)
          );
    }
    get errorContext() {
      return {
        code: this.kind,
        description: this.description,
        meta: this.meta,
        ...this.inner,
      };
    }
    get compiledErrorContext() {
      return Ws(this.errorContext);
    }
  }
  const lt = e => (t, r) => {
      if (tt(t)) {
        if (t.length === 0) return;
        const i = t.map(s => r.$.node(e, s));
        return e === "predicate"
          ? i
          : i.sort((s, o) => (s.hash < o.hash ? -1 : 1));
      }
      const n = r.$.node(e, t);
      return n.hasOpenIntersection() ? [n] : n;
    },
    Js = e => {
      const t = e.r.shift();
      if (!t) {
        let n =
          e.l.length === 0 && e.kind === "structure"
            ? z.intrinsic.unknown.internal
            : e.ctx.$.node(e.kind, Object.assign(e.baseInner, m1(e.l)), {
                prereduced: !0,
              });
        for (const i of e.roots) {
          if (n instanceof K) return n;
          n = Ge(i, n, e.ctx);
        }
        return n;
      }
      let r = !1;
      for (let n = 0; n < e.l.length; n++) {
        const i = Ge(e.l[n], t, e.ctx);
        if (i !== null) {
          if (i instanceof K) return i;
          if (i.isRoot()) return (e.roots.push(i), e.l.splice(n), Js(e));
          if (!r) ((e.l[n] = i), (r = !0));
          else if (!e.l.includes(i))
            return Le(
              `Unexpectedly encountered multiple distinct intersection results for refinement ${t}`
            );
        }
      }
      if ((r || e.l.push(t), e.kind === "intersection" && t.impliedSiblings))
        for (const n of t.impliedSiblings) Jr(e.r, n);
      return Js(e);
    },
    Ys = e =>
      Object.entries(e)
        .flatMap(([r, n]) => (r in yp ? n : []))
        .sort((r, n) =>
          r.precedence < n.precedence
            ? -1
            : r.precedence > n.precedence
              ? 1
              : r.kind === "predicate" && n.kind === "predicate"
                ? 0
                : r.hash < n.hash
                  ? -1
                  : 1
        ),
    m1 = e => {
      const t = {};
      for (const r of e)
        if (r.hasOpenIntersection()) t[r.kind] = ye(t[r.kind], r);
        else {
          if (t[r.kind])
            return Le(
              `Unexpected intersection of closed refinements of kind ${r.kind}`
            );
          t[r.kind] = r;
        }
      return t;
    },
    g1 = (...e) => F(_1(...e)),
    _1 = (e, t, r) => {
      const n = r.hasKind("morph")
        ? "a morph"
        : r.isUnknown()
          ? "unknown"
          : r.exclude(t).defaultShortDescription;
      return `${Aw(e)} operand must be ${t.description} (was ${n})`;
    },
    y1 = (e, t, r) => new Qs(e, t, r, r, null);
  class Ip extends Er {}
  class Qs extends Er {
    [gr] = "generic";
    paramDefs;
    bodyDef;
    $;
    arg$;
    baseInstantiation;
    hkt;
    description;
    constructor(t, r, n, i, s) {
      (super((...o) => {
        const a = be(this.names, (l, c) => {
          const d = this.arg$.parse(o[l]);
          return (
            d.extends(this.constraints[l]) ||
              F(b1(c, this.constraints[l].expression, d.expression)),
            [c, d]
          );
        });
        if (this.defIsLazy()) {
          const l = this.bodyDef(a);
          return this.$.parse(l);
        }
        return this.$.parse(r, { args: a });
      }),
        (this.paramDefs = t),
        (this.bodyDef = r),
        (this.$ = n),
        (this.arg$ = i),
        (this.hkt = s),
        (this.description = s
          ? (new s().description ?? `a generic type for ${s.constructor.name}`)
          : "a generic type"),
        (this.baseInstantiation = this(...this.constraints)));
    }
    defIsLazy() {
      return this.bodyDef instanceof Ip;
    }
    cacheGetter(t, r) {
      return (Object.defineProperty(this, t, { value: r }), r);
    }
    get json() {
      return this.cacheGetter("json", {
        params: this.params.map(t =>
          t[1].isUnknown() ? t[0] : [t[0], t[1].json]
        ),
        body: Ww(this.bodyDef),
      });
    }
    get params() {
      return this.cacheGetter(
        "params",
        this.paramDefs.map(t =>
          typeof t == "string"
            ? [t, z.intrinsic.unknown]
            : [t[0], this.$.parse(t[1])]
        )
      );
    }
    get names() {
      return this.cacheGetter(
        "names",
        this.params.map(t => t[0])
      );
    }
    get constraints() {
      return this.cacheGetter(
        "constraints",
        this.params.map(t => t[1])
      );
    }
    get internal() {
      return this;
    }
    get referencesById() {
      return this.baseInstantiation.internal.referencesById;
    }
    get references() {
      return this.baseInstantiation.internal.references;
    }
  }
  const b1 = (e, t, r) => `${e} must be assignable to ${t} (was ${r})`,
    v1 = Ie({
      kind: "predicate",
      hasAssociatedError: !0,
      collapsibleKey: "predicate",
      keys: { predicate: {} },
      normalize: e => (typeof e == "function" ? { predicate: e } : e),
      defaults: {
        description: e =>
          `valid according to ${e.predicate.name || "an anonymous predicate"}`,
      },
      intersectionIsOpen: !0,
      intersections: { predicate: () => null },
    });
  class w1 extends zn {
    serializedPredicate = st(this.predicate);
    compiledCondition = `${this.serializedPredicate}(data, ctx)`;
    compiledNegation = `!${this.compiledCondition}`;
    impliedBasis = null;
    expression = this.serializedPredicate;
    traverseAllows = this.predicate;
    errorContext = {
      code: "predicate",
      description: this.description,
      meta: this.meta,
    };
    compiledErrorContext = Ws(this.errorContext);
    traverseApply = (t, r) => {
      const n = r.currentErrorCount;
      !this.predicate(t, r.external) &&
        r.currentErrorCount === n &&
        r.errorFromNodeContext(this.errorContext);
    };
    compile(t) {
      if (t.traversalKind === "Allows") {
        t.return(this.compiledCondition);
        return;
      }
      (t.initializeErrorCount(),
        t.if(
          `${this.compiledNegation} && ctx.currentErrorCount === errorCount`,
          () => t.line(`ctx.errorFromNodeContext(${this.compiledErrorContext})`)
        ));
    }
    reduceJsonSchema(t, r) {
      return r.fallback.predicate({
        code: "predicate",
        base: t,
        predicate: this.predicate,
      });
    }
  }
  const Pp = { implementation: v1, Node: w1 },
    x1 = Ie({
      kind: "divisor",
      collapsibleKey: "rule",
      keys: { rule: { parse: e => (Number.isInteger(e) ? e : F(S1(e))) } },
      normalize: e => (typeof e == "number" ? { rule: e } : e),
      hasAssociatedError: !0,
      defaults: {
        description: e =>
          e.rule === 1
            ? "an integer"
            : e.rule === 2
              ? "even"
              : `a multiple of ${e.rule}`,
      },
      intersections: {
        divisor: (e, t, r) =>
          r.$.node("divisor", {
            rule: Math.abs((e.rule * t.rule) / M1(e.rule, t.rule)),
          }),
      },
      obviatesBasisDescription: !0,
    });
  class k1 extends Hs {
    traverseAllows = t => t % this.rule === 0;
    compiledCondition = `data % ${this.rule} === 0`;
    compiledNegation = `data % ${this.rule} !== 0`;
    impliedBasis = z.intrinsic.number.internal;
    expression = `% ${this.rule}`;
    reduceJsonSchema(t) {
      return (
        (t.type = "integer"),
        this.rule === 1 || (t.multipleOf = this.rule),
        t
      );
    }
  }
  const Op = { implementation: x1, Node: k1 },
    S1 = e => `divisor must be an integer (was ${e})`,
    M1 = (e, t) => {
      let r,
        n = e,
        i = t;
      for (; i !== 0; ) ((r = i), (i = n % i), (n = r));
      return n;
    };
  class Bn extends Hs {
    boundOperandKind = E1[this.kind];
    compiledActual =
      this.boundOperandKind === "value"
        ? "data"
        : this.boundOperandKind === "length"
          ? "data.length"
          : "data.valueOf()";
    comparator = I1(this.kind, this.exclusive);
    numericLimit = this.rule.valueOf();
    expression = `${this.comparator} ${this.rule}`;
    compiledCondition = `${this.compiledActual} ${this.comparator} ${this.numericLimit}`;
    compiledNegation = `${this.compiledActual} ${C1[this.comparator]} ${this.numericLimit}`;
    stringLimit =
      this.boundOperandKind === "date"
        ? P1(this.numericLimit)
        : `${this.numericLimit}`;
    limitKind = this.comparator[0] === "<" ? "upper" : "lower";
    isStricterThan(t) {
      return (
        (this.limitKind === "upper"
          ? this.numericLimit < t.numericLimit
          : this.numericLimit > t.numericLimit) ||
        (this.numericLimit === t.numericLimit &&
          this.exclusive === !0 &&
          !t.exclusive)
      );
    }
    overlapsRange(t) {
      return !(
        this.isStricterThan(t) ||
        (this.numericLimit === t.numericLimit &&
          (this.exclusive || t.exclusive))
      );
    }
    overlapIsUnit(t) {
      return (
        this.numericLimit === t.numericLimit && !this.exclusive && !t.exclusive
      );
    }
  }
  const C1 = { "<": ">=", "<=": ">", ">": "<=", ">=": "<" },
    $1 = { min: "max", minLength: "maxLength", after: "before" },
    Tp = { parse: e => e || void 0 },
    Rp = e => t => {
      if (typeof t == "number") return { rule: t };
      const { exclusive: r, ...n } = t;
      return r
        ? { ...n, rule: e === "minLength" ? n.rule + 1 : n.rule - 1 }
        : n;
    },
    Np = e => t => {
      if (typeof t == "number" || typeof t == "string" || t instanceof Date)
        return { rule: t };
      const { exclusive: r, ...n } = t;
      if (!r) return n;
      const i =
        typeof n.rule == "number"
          ? n.rule
          : typeof n.rule == "string"
            ? new Date(n.rule).valueOf()
            : n.rule.valueOf();
      return r ? { ...n, rule: e === "after" ? i + 1 : i - 1 } : n;
    },
    Lp = e => (typeof e == "string" || typeof e == "number" ? new Date(e) : e),
    A1 = (e, t) => `${e} bound must be a positive integer (was ${t})`,
    xl = e => t => ((!Number.isInteger(t) || t < 0) && F(A1(e, t)), t),
    E1 = {
      min: "value",
      max: "value",
      minLength: "length",
      maxLength: "length",
      after: "date",
      before: "date",
    },
    I1 = (e, t) => `${Gt(e, $1) ? ">" : "<"}${t ? "" : "="}`,
    P1 = e => (typeof e == "string" ? e : new Date(e).toLocaleString()),
    O1 = e =>
      `Bounded expression ${e} must be exactly one of number, string, Array, or Date`,
    T1 = Ie({
      kind: "after",
      collapsibleKey: "rule",
      hasAssociatedError: !0,
      keys: { rule: { parse: Lp, serialize: e => e.toISOString() } },
      normalize: Np("after"),
      defaults: {
        description: e => `${e.collapsibleLimitString} or later`,
        actual: Ni,
      },
      intersections: { after: (e, t) => (e.isStricterThan(t) ? e : t) },
    });
  class R1 extends Bn {
    impliedBasis = z.intrinsic.Date.internal;
    collapsibleLimitString = Ni(this.rule);
    traverseAllows = t => t >= this.rule;
    reduceJsonSchema(t, r) {
      return r.fallback.date({ code: "date", base: t, after: this.rule });
    }
  }
  const Fp = { implementation: T1, Node: R1 },
    N1 = Ie({
      kind: "before",
      collapsibleKey: "rule",
      hasAssociatedError: !0,
      keys: { rule: { parse: Lp, serialize: e => e.toISOString() } },
      normalize: Np("before"),
      defaults: {
        description: e => `${e.collapsibleLimitString} or earlier`,
        actual: Ni,
      },
      intersections: {
        before: (e, t) => (e.isStricterThan(t) ? e : t),
        after: (e, t, r) =>
          e.overlapsRange(t)
            ? e.overlapIsUnit(t)
              ? r.$.node("unit", { unit: e.rule })
              : null
            : K.init("range", e, t),
      },
    });
  class L1 extends Bn {
    collapsibleLimitString = Ni(this.rule);
    traverseAllows = t => t <= this.rule;
    impliedBasis = z.intrinsic.Date.internal;
    reduceJsonSchema(t, r) {
      return r.fallback.date({ code: "date", base: t, before: this.rule });
    }
  }
  const Dp = { implementation: N1, Node: L1 },
    F1 = Ie({
      kind: "exactLength",
      collapsibleKey: "rule",
      keys: { rule: { parse: xl("exactLength") } },
      normalize: e => (typeof e == "number" ? { rule: e } : e),
      hasAssociatedError: !0,
      defaults: {
        description: e => `exactly length ${e.rule}`,
        actual: e => `${e.length}`,
      },
      intersections: {
        exactLength: (e, t, r) =>
          K.init(
            "unit",
            r.$.node("unit", { unit: e.rule }),
            r.$.node("unit", { unit: t.rule }),
            { path: ["length"] }
          ),
        minLength: (e, t) => (e.rule >= t.rule ? e : K.init("range", e, t)),
        maxLength: (e, t) => (e.rule <= t.rule ? e : K.init("range", e, t)),
      },
    });
  class D1 extends Hs {
    traverseAllows = t => t.length === this.rule;
    compiledCondition = `data.length === ${this.rule}`;
    compiledNegation = `data.length !== ${this.rule}`;
    impliedBasis = z.intrinsic.lengthBoundable.internal;
    expression = `== ${this.rule}`;
    reduceJsonSchema(t) {
      switch (t.type) {
        case "string":
          return ((t.minLength = this.rule), (t.maxLength = this.rule), t);
        case "array":
          return ((t.minItems = this.rule), (t.maxItems = this.rule), t);
        default:
          return je.throwInternalOperandError("exactLength", t);
      }
    }
  }
  const zp = { implementation: F1, Node: D1 },
    z1 = Ie({
      kind: "max",
      collapsibleKey: "rule",
      hasAssociatedError: !0,
      keys: { rule: {}, exclusive: Tp },
      normalize: e => (typeof e == "number" ? { rule: e } : e),
      defaults: {
        description: e =>
          e.rule === 0
            ? e.exclusive
              ? "negative"
              : "non-positive"
            : `${e.exclusive ? "less than" : "at most"} ${e.rule}`,
      },
      intersections: {
        max: (e, t) => (e.isStricterThan(t) ? e : t),
        min: (e, t, r) =>
          e.overlapsRange(t)
            ? e.overlapIsUnit(t)
              ? r.$.node("unit", { unit: e.rule })
              : null
            : K.init("range", e, t),
      },
      obviatesBasisDescription: !0,
    });
  class B1 extends Bn {
    impliedBasis = z.intrinsic.number.internal;
    traverseAllows = this.exclusive ? t => t < this.rule : t => t <= this.rule;
    reduceJsonSchema(t) {
      return (
        this.exclusive
          ? (t.exclusiveMaximum = this.rule)
          : (t.maximum = this.rule),
        t
      );
    }
  }
  const Bp = { implementation: z1, Node: B1 },
    V1 = Ie({
      kind: "maxLength",
      collapsibleKey: "rule",
      hasAssociatedError: !0,
      keys: { rule: { parse: xl("maxLength") } },
      reduce: (e, t) => (e.rule === 0 ? t.node("exactLength", e) : void 0),
      normalize: Rp("maxLength"),
      defaults: {
        description: e => `at most length ${e.rule}`,
        actual: e => `${e.length}`,
      },
      intersections: {
        maxLength: (e, t) => (e.isStricterThan(t) ? e : t),
        minLength: (e, t, r) =>
          e.overlapsRange(t)
            ? e.overlapIsUnit(t)
              ? r.$.node("exactLength", { rule: e.rule })
              : null
            : K.init("range", e, t),
      },
    });
  class q1 extends Bn {
    impliedBasis = z.intrinsic.lengthBoundable.internal;
    traverseAllows = t => t.length <= this.rule;
    reduceJsonSchema(t) {
      switch (t.type) {
        case "string":
          return ((t.maxLength = this.rule), t);
        case "array":
          return ((t.maxItems = this.rule), t);
        default:
          return je.throwInternalOperandError("maxLength", t);
      }
    }
  }
  const Vp = { implementation: V1, Node: q1 },
    j1 = Ie({
      kind: "min",
      collapsibleKey: "rule",
      hasAssociatedError: !0,
      keys: { rule: {}, exclusive: Tp },
      normalize: e => (typeof e == "number" ? { rule: e } : e),
      defaults: {
        description: e =>
          e.rule === 0
            ? e.exclusive
              ? "positive"
              : "non-negative"
            : `${e.exclusive ? "more than" : "at least"} ${e.rule}`,
      },
      intersections: { min: (e, t) => (e.isStricterThan(t) ? e : t) },
      obviatesBasisDescription: !0,
    });
  class U1 extends Bn {
    impliedBasis = z.intrinsic.number.internal;
    traverseAllows = this.exclusive ? t => t > this.rule : t => t >= this.rule;
    reduceJsonSchema(t) {
      return (
        this.exclusive
          ? (t.exclusiveMinimum = this.rule)
          : (t.minimum = this.rule),
        t
      );
    }
  }
  const qp = { implementation: j1, Node: U1 },
    K1 = Ie({
      kind: "minLength",
      collapsibleKey: "rule",
      hasAssociatedError: !0,
      keys: { rule: { parse: xl("minLength") } },
      reduce: e => (e.rule === 0 ? z.intrinsic.unknown : void 0),
      normalize: Rp("minLength"),
      defaults: {
        description: e =>
          e.rule === 1 ? "non-empty" : `at least length ${e.rule}`,
        actual: e => (e.length === 0 ? "" : `${e.length}`),
      },
      intersections: { minLength: (e, t) => (e.isStricterThan(t) ? e : t) },
    });
  class G1 extends Bn {
    impliedBasis = z.intrinsic.lengthBoundable.internal;
    traverseAllows = t => t.length >= this.rule;
    reduceJsonSchema(t) {
      switch (t.type) {
        case "string":
          return ((t.minLength = this.rule), t);
        case "array":
          return ((t.minItems = this.rule), t);
        default:
          return je.throwInternalOperandError("minLength", t);
      }
    }
  }
  const jp = { implementation: K1, Node: G1 },
    W1 = {
      min: qp.implementation,
      max: Bp.implementation,
      minLength: jp.implementation,
      maxLength: Vp.implementation,
      exactLength: zp.implementation,
      after: Fp.implementation,
      before: Dp.implementation,
    },
    H1 = {
      min: qp.Node,
      max: Bp.Node,
      minLength: jp.Node,
      maxLength: Vp.Node,
      exactLength: zp.Node,
      after: Fp.Node,
      before: Dp.Node,
    },
    J1 = Ie({
      kind: "pattern",
      collapsibleKey: "rule",
      keys: { rule: {}, flags: {} },
      normalize: e =>
        typeof e == "string"
          ? { rule: e }
          : e instanceof RegExp
            ? e.flags
              ? { rule: e.source, flags: e.flags }
              : { rule: e.source }
            : e,
      obviatesBasisDescription: !0,
      obviatesBasisExpression: !0,
      hasAssociatedError: !0,
      intersectionIsOpen: !0,
      defaults: { description: e => `matched by ${e.rule}` },
      intersections: { pattern: () => null },
    });
  class Y1 extends Hs {
    instance = new RegExp(this.rule, this.flags);
    expression = `${this.instance}`;
    traverseAllows = this.instance.test.bind(this.instance);
    compiledCondition = `${this.expression}.test(data)`;
    compiledNegation = `!${this.compiledCondition}`;
    impliedBasis = z.intrinsic.string.internal;
    reduceJsonSchema(t, r) {
      return t.pattern
        ? r.fallback.patternIntersection({
            code: "patternIntersection",
            base: t,
            pattern: this.rule,
          })
        : ((t.pattern = this.rule), t);
    }
  }
  const Up = { implementation: J1, Node: Y1 },
    Xs = (e, t) => {
      const r = Q1(e);
      return t && !t.includes(r)
        ? F(`Root of kind ${r} should be one of ${t}`)
        : r;
    },
    Q1 = e => {
      if (H(e, "root")) return e.kind;
      if (typeof e == "string")
        return e[0] === "$" ? "alias" : e in mr ? "domain" : "proto";
      if (typeof e == "function") return "proto";
      if (typeof e != "object" || e === null) return F(Kp(e));
      if ("morphs" in e) return "morph";
      if ("branches" in e || tt(e)) return "union";
      if ("unit" in e) return "unit";
      if ("reference" in e) return "alias";
      const t = Object.keys(e);
      return t.length === 0 || t.some(r => r in yp)
        ? "intersection"
        : "proto" in e
          ? "proto"
          : "domain" in e
            ? "domain"
            : F(Kp(e));
    },
    Kp = e => `${ge(e)} is not a valid type schema`,
    Gp = {},
    X1 = e => (tt(e) ? e.map(t => t.collapsibleJson) : e.collapsibleJson),
    wt = {};
  z.nodesByRegisteredId = wt;
  const Wp = e => ((Gp[e] ??= 0), `${e}${++Gp[e]}`),
    Hp = e => {
      const t = ro[e.kind],
        r = t.applyConfig?.(e.def, e.$.resolvedConfig) ?? e.def,
        n = {},
        { meta: i, ...s } = r,
        o = i === void 0 ? {} : typeof i == "string" ? { description: i } : i,
        a = Gf(s)
          .sort(([c], [d]) =>
            Ks(c) ? (Ks(d) ? Gs(c) - Gs(d) : 1) : Ks(d) || c < d ? -1 : 1
          )
          .filter(([c, d]) => {
            if (c.startsWith("meta.")) {
              const u = c.slice(5);
              return ((o[u] = d), !1);
            }
            return !0;
          });
      for (const c of a) {
        const d = c[0],
          u = t.keys[d];
        if (!u) return F(`Key ${d} is not valid on ${e.kind} schema`);
        const h = u.parse ? u.parse(c[1], e) : c[1];
        h !== Wt && (h !== void 0 || u.preserveUndefined) && (n[d] = h);
      }
      if (t.reduce && !e.prereduced) {
        const c = t.reduce(n, e.$);
        if (c) return c instanceof K ? c.throw() : ex(c, o);
      }
      return kl({ id: e.id, kind: e.kind, inner: n, meta: o, $: e.$ });
    },
    kl = ({ id: e, kind: t, inner: r, meta: n, $: i, ignoreCache: s }) => {
      const o = ro[t],
        a = Gf(r),
        l = [];
      let c = {};
      for (const [y, b] of a) {
        const v = o.keys[y],
          k = v.serialize ?? (v.child ? X1 : Qr);
        if (((c[y] = k(b)), v.child === !0)) {
          const x = b;
          tt(x) ? l.push(...x) : l.push(x);
        } else typeof v.child == "function" && l.push(...v.child(b));
      }
      o.finalizeInnerJson && (c = o.finalizeInnerJson(c));
      let d = { ...c },
        u = {};
      (Ii(n) ||
        ((u = be(n, (y, b) => [y, y === "examples" ? b : Qr(b)])),
        (d.meta = Zs(u, "description", !0))),
        (c = Zs(c, o.collapsibleKey, !1)));
      const h = JSON.stringify({ kind: t, ...c });
      d = Zs(d, o.collapsibleKey, !1);
      const f = Zs(d, o.collapsibleKey, !0),
        g = JSON.stringify({ kind: t, ...d });
      if (i.nodesByHash[g] && !s) return i.nodesByHash[g];
      const m = {
        id: e,
        kind: t,
        impl: o,
        inner: r,
        innerEntries: a,
        innerJson: c,
        innerHash: h,
        meta: n,
        metaJson: u,
        json: d,
        hash: g,
        collapsibleJson: f,
        children: l,
      };
      if (t !== "intersection")
        for (const y in r) y !== "in" && y !== "out" && (m[y] = r[y]);
      const _ = new ak[t](m, i);
      return (i.nodesByHash[g] = _);
    },
    Z1 = (e, t) =>
      e.id === t
        ? e
        : (ot(wt[t]) && Le(`Unexpected attempt to overwrite node id ${t}`),
          kl({
            id: t,
            kind: e.kind,
            inner: e.inner,
            meta: e.meta,
            $: e.$,
            ignoreCache: !0,
          })),
    ex = (e, t, r) =>
      kl({
        id: Wp(t.alias ?? e.kind),
        kind: e.kind,
        inner: e.inner,
        meta: t,
        $: e.$,
      }),
    Zs = (e, t, r) => {
      const n = Object.keys(e);
      if (n.length === 1 && n[0] === t) {
        const i = e[t];
        if (
          r ||
          (Yr(i, "object") && (Object.keys(i).length === 1 || Array.isArray(i)))
        )
          return i;
      }
      return e;
    },
    Sl = (e, t, r) => {
      if (e.key !== t.key) return null;
      const n = e.key;
      let i = Ge(e.value, t.value, r);
      const s = e.required || t.required ? "required" : "optional";
      if (i instanceof K)
        if (s === "optional") i = z.intrinsic.never.internal;
        else
          return i.withPrefixKey(
            e.key,
            e.required && t.required ? "required" : "optional"
          );
      if (s === "required") return r.$.node("required", { key: n, value: i });
      const o = e.hasDefault()
        ? t.hasDefault()
          ? e.default === t.default
            ? e.default
            : F(Yp(e.default, t.default))
          : e.default
        : t.hasDefault()
          ? t.default
          : Wt;
      return r.$.node("optional", { key: n, value: i, default: o });
    };
  class Jp extends zn {
    required = this.kind === "required";
    optional = this.kind === "optional";
    impliedBasis = z.intrinsic.object.internal;
    serializedKey = Nn(this.key);
    compiledKey = typeof this.key == "string" ? this.key : this.serializedKey;
    flatRefs = ye(
      this.value.flatRefs.map(t => Or([this.key, ...t.path], t.node)),
      Or([this.key], this.value)
    );
    _transform(t, r) {
      r.path.push(this.key);
      const n = super._transform(t, r);
      return (r.path.pop(), n);
    }
    hasDefault() {
      return "default" in this.inner;
    }
    traverseAllows = (t, r) =>
      this.key in t
        ? _r(this.key, () => this.value.traverseAllows(t[this.key], r), r)
        : this.optional;
    traverseApply = (t, r) => {
      this.key in t
        ? _r(this.key, () => this.value.traverseApply(t[this.key], r), r)
        : this.hasKind("required") && r.errorFromNodeContext(this.errorContext);
    };
    compile(t) {
      (t.if(`${this.serializedKey} in data`, () =>
        t.traverseKey(this.serializedKey, `data${t.prop(this.key)}`, this.value)
      ),
        this.hasKind("required") &&
          t.else(() =>
            t.traversalKind === "Apply"
              ? t.line(`ctx.errorFromNodeContext(${this.compiledErrorContext})`)
              : t.return(!1)
          ),
        t.traversalKind === "Allows" && t.return(!0));
    }
  }
  const Yp = (e, t) =>
      `Invalid intersection of default values ${ge(e)} & ${ge(t)}`,
    tx = Ie({
      kind: "optional",
      hasAssociatedError: !1,
      intersectionIsOpen: !0,
      keys: {
        key: {},
        value: { child: !0, parse: (e, t) => t.$.parseSchema(e) },
        default: { preserveUndefined: !0 },
      },
      normalize: e => e,
      reduce: (e, t) => {
        if (
          t.resolvedConfig.exactOptionalPropertyTypes === !1 &&
          !e.value.allows(void 0)
        )
          return t.node(
            "optional",
            { ...e, value: e.value.or(X.undefined) },
            { prereduced: !0 }
          );
      },
      defaults: {
        description: e => `${e.compiledKey}?: ${e.value.description}`,
      },
      intersections: { optional: Sl },
    });
  class rx extends Jp {
    constructor(...t) {
      (super(...t),
        "default" in this.inner &&
          Cl(this.value, this.inner.default, this.key));
    }
    get rawIn() {
      const t = super.rawIn;
      return this.hasDefault()
        ? this.$.node("optional", Hf(t.inner, { default: !0 }), {
            prereduced: !0,
          })
        : t;
    }
    get outProp() {
      if (!this.hasDefault()) return this;
      const { default: t, ...r } = this.inner;
      return this.cacheGetter(
        "outProp",
        this.$.node("required", r, { prereduced: !0 })
      );
    }
    expression = this.hasDefault()
      ? `${this.compiledKey}: ${this.value.expression} = ${ge(this.inner.default)}`
      : `${this.compiledKey}?: ${this.value.expression}`;
    defaultValueMorph = ix(this);
    defaultValueMorphRef = this.defaultValueMorph && st(this.defaultValueMorph);
  }
  const Ml = { implementation: tx, Node: rx },
    nx = {},
    ix = e => {
      if (!e.hasDefault()) return;
      const t = `{${e.compiledKey}: ${e.value.id} = ${Qr(e.default)}}`;
      return (nx[t] ??= Qp(e.key, e.value, e.default));
    },
    Qp = (e, t, r) => {
      if (typeof r == "function")
        return t.includesTransform
          ? (i, s) => (_r(e, () => t((i[e] = r()), s), s), i)
          : i => ((i[e] = r()), i);
      const n = t.includesTransform ? t.assert(r) : r;
      return Yr(n, "object")
        ? (i, s) => (_r(e, () => t((i[e] = r), s), s), i)
        : i => ((i[e] = n), i);
    },
    Cl = (e, t, r) => {
      const n = zs(t);
      Yr(t, "object") && !n && F(sx(r));
      const i = e.in(n ? t() : t);
      if (i instanceof Pr) {
        r === null && F(`Default ${i.summary}`);
        const s = i.transform(o =>
          o.transform(a => ({ ...a, prefixPath: [r] }))
        );
        F(`Default for ${s.summary}`);
      }
      return t;
    },
    sx = e =>
      `Non-primitive default ${e === null ? "" : typeof e == "number" ? `for value at [${e}] ` : `for ${Nn(e)} `}must be specified as a function like () => ({my: 'object'})`;
  class Di extends kp {
    constructor(t, r) {
      (super(t, r),
        Object.defineProperty(this, gr, { value: "root", enumerable: !1 }));
    }
    get rawIn() {
      return super.rawIn;
    }
    get rawOut() {
      return super.rawOut;
    }
    get internal() {
      return this;
    }
    get "~standard"() {
      return {
        vendor: "arktype",
        version: 1,
        validate: t => {
          const r = this(t);
          return r instanceof Pr ? r : { value: r };
        },
        jsonSchema: {
          input: t =>
            this.rawIn.toJsonSchema({
              target: Zp(t.target),
              ...t.libraryOptions,
            }),
          output: t =>
            this.rawOut.toJsonSchema({
              target: Zp(t.target),
              ...t.libraryOptions,
            }),
        },
      };
    }
    as() {
      return this;
    }
    brand(t) {
      return t === "" ? F(ox) : this;
    }
    readonly() {
      return this;
    }
    branches = this.hasKind("union") ? this.inner.branches : [this];
    distribute(t, r) {
      const n = this.branches.map(t);
      return r?.(n) ?? n;
    }
    get shortDescription() {
      return this.meta.description ?? this.defaultShortDescription;
    }
    toJsonSchema(t = {}) {
      const r = vp(this.$.resolvedConfig.toJsonSchema, t);
      r.useRefs ||= this.isCyclic;
      const n = typeof r.dialect == "string" ? { $schema: r.dialect } : {};
      if ((Object.assign(n, this.toJsonSchemaRecurse(r)), r.useRefs)) {
        const i = be(this.references, (s, o) =>
          o.isRoot() && !o.alwaysExpandJsonSchema
            ? [o.id, o.toResolvedJsonSchema(r)]
            : []
        );
        r.target === "draft-07"
          ? Object.assign(n, { definitions: i })
          : (n.$defs = i);
      }
      return n;
    }
    toJsonSchemaRecurse(t) {
      return t.useRefs && !this.alwaysExpandJsonSchema
        ? {
            $ref: `#/${t.target === "draft-07" ? "definitions" : "$defs"}/${this.id}`,
          }
        : this.toResolvedJsonSchema(t);
    }
    get alwaysExpandJsonSchema() {
      return (
        this.isBasis() ||
        this.kind === "alias" ||
        (this.hasKind("union") && this.isBoolean)
      );
    }
    toResolvedJsonSchema(t) {
      const r = this.innerToJsonSchema(t);
      return Object.assign(r, this.metaJson);
    }
    intersect(t) {
      const r = this.$.parseDefinition(t),
        n = this.rawIntersect(r);
      return n instanceof K ? n : this.$.finalize(n);
    }
    rawIntersect(t) {
      return yr(this, t, this.$);
    }
    toNeverIfDisjoint() {
      return this;
    }
    and(t) {
      const r = this.intersect(t);
      return r instanceof K ? r.throw() : r;
    }
    rawAnd(t) {
      const r = this.rawIntersect(t);
      return r instanceof K ? r.throw() : r;
    }
    or(t) {
      const r = this.$.parseDefinition(t);
      return this.$.finalize(this.rawOr(r));
    }
    rawOr(t) {
      const r = [...this.branches, ...t.branches];
      return this.$.node("union", r);
    }
    map(t) {
      return this.$.schema(this.applyStructuralOperation("map", [t]));
    }
    pick(...t) {
      return this.$.schema(this.applyStructuralOperation("pick", t));
    }
    omit(...t) {
      return this.$.schema(this.applyStructuralOperation("omit", t));
    }
    required() {
      return this.$.schema(this.applyStructuralOperation("required", []));
    }
    partial() {
      return this.$.schema(this.applyStructuralOperation("partial", []));
    }
    _keyof;
    keyof() {
      if (this._keyof) return this._keyof;
      const t = this.applyStructuralOperation("keyof", []).reduce(
        (r, n) => r.intersect(n).toNeverIfDisjoint(),
        z.intrinsic.unknown.internal
      );
      return (
        t.branches.length === 0 && F(Ap(`keyof ${this.expression}`)),
        (this._keyof = this.$.finalize(t))
      );
    }
    get props() {
      return this.branches.length !== 1
        ? F(lx(this.expression))
        : [...this.applyStructuralOperation("props", [])[0]];
    }
    merge(t) {
      const r = this.$.parseDefinition(t);
      return this.$.schema(
        r.distribute(n =>
          this.applyStructuralOperation("merge", [
            eh(n) ?? F(th("merge", n.expression)),
          ])
        )
      );
    }
    applyStructuralOperation(t, r) {
      return this.distribute(n => {
        if (n.equals(z.intrinsic.object) && t !== "merge") return n;
        const i = eh(n);
        if ((i || F(th(t, n.expression)), t === "keyof")) return i.keyof();
        if (t === "get") return i.get(...r);
        if (t === "props") return i.props;
        const s =
          t === "required" ? "require" : t === "partial" ? "optionalize" : t;
        return this.$.node("intersection", {
          domain: "object",
          structure: i[s](...r),
        });
      });
    }
    get(...t) {
      return t[0] === void 0
        ? this
        : this.$.schema(this.applyStructuralOperation("get", t));
    }
    extract(t) {
      const r = this.$.parseDefinition(t);
      return this.$.schema(this.branches.filter(n => n.extends(r)));
    }
    exclude(t) {
      const r = this.$.parseDefinition(t);
      return this.$.schema(this.branches.filter(n => !n.extends(r)));
    }
    array() {
      return this.$.schema(
        this.isUnknown() ? { proto: Array } : { proto: Array, sequence: this },
        { prereduced: !0 }
      );
    }
    overlaps(t) {
      return !(this.intersect(t) instanceof K);
    }
    extends(t) {
      if (this.isNever()) return !0;
      const r = this.intersect(t);
      return !(r instanceof K) && this.equals(r);
    }
    ifExtends(t) {
      return this.extends(t) ? this : void 0;
    }
    subsumes(t) {
      return this.$.parseDefinition(t).extends(this);
    }
    configure(t, r = "shallow") {
      return this.configureReferences(t, r);
    }
    describe(t, r = "shallow") {
      return this.configure({ description: t }, r);
    }
    optional() {
      return [this, "?"];
    }
    default(t) {
      return (Cl(this, t, null), [this, "=", t]);
    }
    from(t) {
      return this.assert(t);
    }
    _pipe(...t) {
      const r = t.reduce((n, i) => n.rawPipeOnce(i), this);
      return this.$.finalize(r);
    }
    tryPipe(...t) {
      const r = t.reduce(
        (n, i) =>
          n.rawPipeOnce(
            H(i, "root")
              ? i
              : (s, o) => {
                  try {
                    return i(s, o);
                  } catch (a) {
                    return o.error({
                      code: "predicate",
                      predicate: i,
                      actual: `aborted due to error:
    ${a}
`,
                    });
                  }
                }
          ),
        this
      );
      return this.$.finalize(r);
    }
    pipe = Object.assign(this._pipe.bind(this), {
      try: this.tryPipe.bind(this),
    });
    to(t) {
      return this.$.finalize(this.toNode(this.$.parseDefinition(t)));
    }
    toNode(t) {
      const r = vl(this, t, this.$);
      return r instanceof K ? r.throw() : r;
    }
    rawPipeOnce(t) {
      return H(t, "root")
        ? this.toNode(t)
        : this.distribute(
            r =>
              r.hasKind("morph")
                ? this.$.node("morph", {
                    in: r.inner.in,
                    morphs: [...r.morphs, t],
                  })
                : this.$.node("morph", { in: r, morphs: [t] }),
            this.$.parseSchema
          );
    }
    narrow(t) {
      return this.constrainOut("predicate", t);
    }
    constrain(t, r) {
      return this._constrain("root", t, r);
    }
    constrainIn(t, r) {
      return this._constrain("in", t, r);
    }
    constrainOut(t, r) {
      return this._constrain("out", t, r);
    }
    _constrain(t, r, n) {
      const i = this.$.node(r, n);
      if (i.isRoot())
        return i.isUnknown() ? this : Le(`Unexpected constraint node ${i}`);
      const s = t === "root" ? this : t === "in" ? this.rawIn : this.rawOut;
      if (s.hasKind("morph") || (i.impliedBasis && !s.extends(i.impliedBasis)))
        return g1(r, i.impliedBasis, this);
      const o = this.$.node("intersection", { [i.kind]: i }),
        a = t === "out" ? vl(this, o, this.$) : yr(this, o, this.$);
      return (a instanceof K && a.throw(), this.$.finalize(a));
    }
    onUndeclaredKey(t) {
      const r = typeof t == "string" ? t : t.rule,
        n = typeof t == "string" ? !1 : t.deep;
      return this.$.finalize(
        this.transform(
          (i, s) =>
            i === "structure"
              ? r === "ignore"
                ? Hf(s, { undeclared: 1 })
                : { ...s, undeclared: r }
              : s,
          n ? void 0 : { shouldTransform: i => !hr(js, i.kind) }
        )
      );
    }
    hasEqualMorphs(t) {
      return !this.includesTransform && !t.includesTransform
        ? !0
        : !(
            !Pn(this.shallowMorphs, t.shallowMorphs) ||
            !Pn(this.flatMorphs, t.flatMorphs, {
              isEqual: (r, n) =>
                r.propString === n.propString &&
                (r.node.hasKind("morph") && n.node.hasKind("morph")
                  ? r.node.hasEqualMorphs(n.node)
                  : r.node.hasKind("intersection") &&
                      n.node.hasKind("intersection")
                    ? r.node.structure?.structuralMorphRef ===
                      n.node.structure?.structuralMorphRef
                    : !1),
            })
          );
    }
    onDeepUndeclaredKey(t) {
      return this.onUndeclaredKey({ rule: t, deep: !0 });
    }
    filter(t) {
      return this.constrainIn("predicate", t);
    }
    divisibleBy(t) {
      return this.constrain("divisor", t);
    }
    matching(t) {
      return this.constrain("pattern", t);
    }
    atLeast(t) {
      return this.constrain("min", t);
    }
    atMost(t) {
      return this.constrain("max", t);
    }
    moreThan(t) {
      return this.constrain("min", Vn(t));
    }
    lessThan(t) {
      return this.constrain("max", Vn(t));
    }
    atLeastLength(t) {
      return this.constrain("minLength", t);
    }
    atMostLength(t) {
      return this.constrain("maxLength", t);
    }
    moreThanLength(t) {
      return this.constrain("minLength", Vn(t));
    }
    lessThanLength(t) {
      return this.constrain("maxLength", Vn(t));
    }
    exactlyLength(t) {
      return this.constrain("exactLength", t);
    }
    atOrAfter(t) {
      return this.constrain("after", t);
    }
    atOrBefore(t) {
      return this.constrain("before", t);
    }
    laterThan(t) {
      return this.constrain("after", Vn(t));
    }
    earlierThan(t) {
      return this.constrain("before", Vn(t));
    }
  }
  const ox = "Expected a non-empty brand name after #",
    Xp = ["draft-2020-12", "draft-07"],
    ax = e =>
      `JSONSchema target '${e}' is not supported (must be ${Xp.map(t => `"${t}"`).join(" or ")})`,
    Zp = e => (hr(Xp, e) || F(ax(e)), e),
    Vn = e =>
      typeof e == "object" && !(e instanceof Date)
        ? { ...e, exclusive: !0 }
        : { rule: e, exclusive: !0 },
    eo = (e, t) =>
      H(t, "root")
        ? H(e, "root")
          ? e.extends(t)
          : t.allows(e)
        : H(e, "root")
          ? e.hasUnit(t)
          : t === e,
    eh = e =>
      e.hasKind("morph")
        ? null
        : e.hasKind("intersection")
          ? (e.inner.structure ??
            (e.basis?.domain === "object"
              ? e.$.bindReference(z.intrinsic.emptyStructure)
              : null))
          : e.isBasis() && e.domain === "object"
            ? e.$.bindReference(z.intrinsic.emptyStructure)
            : null,
    lx =
      e => `Props cannot be extracted from a union. Use .distribute to extract props from each branch instead. Received:
${e}`,
    th = (e, t) => `${e} operand must be an object (was ${t})`,
    zi = (e, t) => be(_l(e), (r, n) => [n, t]),
    cx = e => (typeof e == "string" ? { reference: e } : e),
    rh = e => (e instanceof K ? z.intrinsic.never.internal : e),
    ux = Ie({
      kind: "alias",
      hasAssociatedError: !1,
      collapsibleKey: "reference",
      keys: {
        reference: { serialize: e => (e.startsWith("$") ? e : `$ark.${e}`) },
        resolve: {},
      },
      normalize: cx,
      defaults: { description: e => e.reference },
      intersections: {
        alias: (e, t, r) =>
          r.$.lazilyResolve(
            () => rh(Ge(e.resolution, t.resolution, r)),
            `${e.reference}${r.pipe ? "=>" : "&"}${t.reference}`
          ),
        ...zi("alias", (e, t, r) =>
          t.isUnknown()
            ? e
            : t.isNever()
              ? t
              : t.isBasis() && !t.overlaps(z.intrinsic.object)
                ? K.init("assignability", z.intrinsic.object, t)
                : r.$.lazilyResolve(
                    () => rh(Ge(e.resolution, t, r)),
                    `${e.reference}${r.pipe ? "=>" : "&"}${t.id}`
                  )
        ),
      },
    });
  class dx extends Di {
    expression = this.reference;
    structure = void 0;
    get resolution() {
      const t = this._resolve();
      return (wt[this.id] = t);
    }
    _resolve() {
      if (this.resolve) return this.resolve();
      if (this.reference[0] === "$")
        return this.$.resolveRoot(this.reference.slice(1));
      const t = this.reference;
      let r = wt[t];
      const n = [];
      for (; H(r, "context"); ) {
        if (n.includes(r.id)) return F(fx(r.id, n));
        (n.push(r.id), (r = wt[r.id]));
      }
      return H(r, "root")
        ? r
        : Le(`Unexpected resolution for reference ${this.reference}
Seen: [${n.join("->")}] 
Resolution: ${ge(r)}`);
    }
    get resolutionId() {
      if (this.reference.includes("&") || this.reference.includes("=>"))
        return this.resolution.id;
      if (this.reference[0] !== "$") return this.reference;
      const t = this.reference.slice(1),
        r = this.$.resolutions[t];
      return typeof r == "string"
        ? r
        : H(r, "root")
          ? r.id
          : Le(
              `Unexpected resolution for reference ${this.reference}: ${ge(r)}`
            );
    }
    get defaultShortDescription() {
      return mr.object;
    }
    innerToJsonSchema(t) {
      return this.resolution.toJsonSchemaRecurse(t);
    }
    traverseAllows = (t, r) => {
      const n = r.seen[this.reference];
      return n?.includes(t)
        ? !0
        : ((r.seen[this.reference] = ye(n, t)),
          this.resolution.traverseAllows(t, r));
    };
    traverseApply = (t, r) => {
      const n = r.seen[this.reference];
      n?.includes(t) ||
        ((r.seen[this.reference] = ye(n, t)),
        this.resolution.traverseApply(t, r));
    };
    compile(t) {
      const r = this.resolutionId;
      (t.if(`ctx.seen.${r} && ctx.seen.${r}.includes(data)`, () =>
        t.return(!0)
      ),
        t.if(`!ctx.seen.${r}`, () => t.line(`ctx.seen.${r} = []`)),
        t.line(`ctx.seen.${r}.push(data)`),
        t.return(t.invoke(r)));
    }
  }
  const fx = (e, t) =>
      `Alias '${e}' has a shallow resolution cycle: ${[...t, e].join("->")}`,
    $l = { implementation: ux, Node: dx };
  class Al extends Di {
    traverseApply = (t, r) => {
      this.traverseAllows(t, r) || r.errorFromNodeContext(this.errorContext);
    };
    get errorContext() {
      return {
        code: this.kind,
        description: this.description,
        meta: this.meta,
        ...this.inner,
      };
    }
    get compiledErrorContext() {
      return Ws(this.errorContext);
    }
    compile(t) {
      t.traversalKind === "Allows"
        ? t.return(this.compiledCondition)
        : t.if(this.compiledNegation, () =>
            t.line(`ctx.errorFromNodeContext(${this.compiledErrorContext})`)
          );
    }
  }
  const px = Ie({
    kind: "domain",
    hasAssociatedError: !0,
    collapsibleKey: "domain",
    keys: { domain: {}, numberAllowsNaN: {} },
    normalize: e =>
      typeof e == "string"
        ? { domain: e }
        : il(e, "numberAllowsNaN") && e.domain !== "number"
          ? F(El.writeBadAllowNanMessage(e.domain))
          : e,
    applyConfig: (e, t) =>
      e.numberAllowsNaN === void 0 && e.domain === "number" && t.numberAllowsNaN
        ? { ...e, numberAllowsNaN: !0 }
        : e,
    defaults: {
      description: e => mr[e.domain],
      actual: e => (Number.isNaN(e) ? "NaN" : mr[Tt(e)]),
    },
    intersections: {
      domain: (e, t) =>
        e.domain === "number" && t.domain === "number"
          ? e.numberAllowsNaN
            ? t
            : e
          : K.init("domain", e, t),
    },
  });
  class hx extends Al {
    requiresNaNCheck = this.domain === "number" && !this.numberAllowsNaN;
    traverseAllows = this.requiresNaNCheck
      ? t => typeof t == "number" && !Number.isNaN(t)
      : t => Tt(t) === this.domain;
    compiledCondition =
      this.domain === "object"
        ? '((typeof data === "object" && data !== null) || typeof data === "function")'
        : `typeof data === "${this.domain}"${this.requiresNaNCheck ? " && !Number.isNaN(data)" : ""}`;
    compiledNegation =
      this.domain === "object"
        ? '((typeof data !== "object" || data === null) && typeof data !== "function")'
        : `typeof data !== "${this.domain}"${this.requiresNaNCheck ? " || Number.isNaN(data)" : ""}`;
    expression = this.numberAllowsNaN ? "number | NaN" : this.domain;
    get nestableExpression() {
      return this.numberAllowsNaN ? `(${this.expression})` : this.expression;
    }
    get defaultShortDescription() {
      return mr[this.domain];
    }
    innerToJsonSchema(t) {
      return this.domain === "bigint" || this.domain === "symbol"
        ? t.fallback.domain({ code: "domain", base: {}, domain: this.domain })
        : { type: this.domain };
    }
  }
  const El = {
      implementation: px,
      Node: hx,
      writeBadAllowNanMessage: e =>
        `numberAllowsNaN may only be specified with domain "number" (was ${e})`,
    },
    mx = Ie({
      kind: "intersection",
      hasAssociatedError: !0,
      normalize: e => {
        if (ot(e)) return e;
        const { structure: t, ...r } = e,
          n = !!t,
          i = t ?? {},
          s = be(r, (o, a) =>
            Gt(o, n1)
              ? (n &&
                  F(
                    `Flattened structure key ${o} cannot be specified alongside a root 'structure' key.`
                  ),
                (i[o] = a),
                [])
              : [o, a]
          );
        return ((H(i, "constraint") || !Ii(i)) && (s.structure = i), s);
      },
      finalizeInnerJson: ({ structure: e, ...t }) =>
        Yr(e, "object") ? { ...e, ...t } : t,
      keys: {
        domain: { child: !0, parse: (e, t) => t.$.node("domain", e) },
        proto: { child: !0, parse: (e, t) => t.$.node("proto", e) },
        structure: {
          child: !0,
          parse: (e, t) => t.$.node("structure", e),
          serialize: e => {
            if (!e.sequence?.minLength) return e.collapsibleJson;
            const { sequence: t, ...r } = e.collapsibleJson,
              { minVariadicLength: n, ...i } = t,
              s = i.variadic && Object.keys(i).length === 1 ? i.variadic : i;
            return { ...r, sequence: s };
          },
        },
        divisor: { child: !0, parse: lt("divisor") },
        max: { child: !0, parse: lt("max") },
        min: { child: !0, parse: lt("min") },
        maxLength: { child: !0, parse: lt("maxLength") },
        minLength: { child: !0, parse: lt("minLength") },
        exactLength: { child: !0, parse: lt("exactLength") },
        before: { child: !0, parse: lt("before") },
        after: { child: !0, parse: lt("after") },
        pattern: { child: !0, parse: lt("pattern") },
        predicate: { child: !0, parse: lt("predicate") },
      },
      reduce: (e, t) => ih({}, e, { $: t, invert: !1, pipe: !1 }),
      defaults: {
        description: e => {
          if (e.children.length === 0) return "unknown";
          if (e.structure) return e.structure.description;
          const t = [];
          if (
            (e.basis &&
              !e.prestructurals.some(r => r.impl.obviatesBasisDescription) &&
              t.push(e.basis.description),
            e.prestructurals.length)
          ) {
            const r = e.prestructurals
              .slice()
              .sort((n, i) => (n.kind === "min" && i.kind === "max" ? -1 : 0))
              .map(n => n.description);
            t.push(...r);
          }
          return (
            e.inner.predicate &&
              t.push(...e.inner.predicate.map(r => r.description)),
            t.join(" and ")
          );
        },
        expected: e =>
          `  ◦ ${e.errors.map(t => t.expected).join(`
  ◦ `)}`,
        problem: e => `(${e.actual}) must be...
${e.expected}`,
      },
      intersections: {
        intersection: (e, t, r) => ih(e.inner, t.inner, r),
        ...zi("intersection", (e, t, r) => {
          if (e.children.length === 0) return t;
          const { domain: n, proto: i, ...s } = e.inner,
            o = i ?? n,
            a = o ? Ge(o, t, r) : t;
          return a instanceof K
            ? a
            : e?.basis?.equals(a)
              ? e
              : e.$.node(
                  "intersection",
                  { ...s, [a.kind]: a },
                  { prereduced: !0 }
                );
        }),
      },
    });
  class gx extends Di {
    basis = this.inner.domain ?? this.inner.proto ?? null;
    prestructurals = [];
    refinements = this.children.filter(t =>
      t.isRefinement()
        ? (hr(gp, t.kind) && this.prestructurals.push(t), !0)
        : !1
    );
    structure = this.inner.structure;
    expression = _x(this);
    get shallowMorphs() {
      return this.inner.structure?.structuralMorph
        ? [this.inner.structure.structuralMorph]
        : [];
    }
    get defaultShortDescription() {
      return this.basis?.defaultShortDescription ?? "present";
    }
    innerToJsonSchema(t) {
      return this.children.reduce(
        (r, n) =>
          n.isBasis() ? n.toJsonSchemaRecurse(t) : n.reduceJsonSchema(r, t),
        {}
      );
    }
    traverseAllows = (t, r) => this.children.every(n => n.traverseAllows(t, r));
    traverseApply = (t, r) => {
      const n = r.currentErrorCount;
      if (
        !(
          this.basis &&
          (this.basis.traverseApply(t, r), r.currentErrorCount > n)
        )
      ) {
        if (this.prestructurals.length) {
          for (let i = 0; i < this.prestructurals.length - 1; i++)
            if (
              (this.prestructurals[i].traverseApply(t, r),
              r.failFast && r.currentErrorCount > n)
            )
              return;
          if (
            (this.prestructurals[this.prestructurals.length - 1].traverseApply(
              t,
              r
            ),
            r.currentErrorCount > n)
          )
            return;
        }
        if (
          !(
            this.structure &&
            (this.structure.traverseApply(t, r), r.currentErrorCount > n)
          ) &&
          this.inner.predicate
        ) {
          for (let i = 0; i < this.inner.predicate.length - 1; i++)
            if (
              (this.inner.predicate[i].traverseApply(t, r),
              r.failFast && r.currentErrorCount > n)
            )
              return;
          this.inner.predicate[this.inner.predicate.length - 1].traverseApply(
            t,
            r
          );
        }
      }
    };
    compile(t) {
      if (t.traversalKind === "Allows") {
        for (const r of this.children) t.check(r);
        t.return(!0);
        return;
      }
      if (
        (t.initializeErrorCount(),
        this.basis &&
          (t.check(this.basis), this.children.length > 1 && t.returnIfFail()),
        this.prestructurals.length)
      ) {
        for (let r = 0; r < this.prestructurals.length - 1; r++)
          (t.check(this.prestructurals[r]), t.returnIfFailFast());
        (t.check(this.prestructurals[this.prestructurals.length - 1]),
          (this.structure || this.inner.predicate) && t.returnIfFail());
      }
      if (
        (this.structure &&
          (t.check(this.structure), this.inner.predicate && t.returnIfFail()),
        this.inner.predicate)
      ) {
        for (let r = 0; r < this.inner.predicate.length - 1; r++)
          (t.check(this.inner.predicate[r]), t.returnIfFail());
        t.check(this.inner.predicate[this.inner.predicate.length - 1]);
      }
    }
  }
  const nh = { implementation: mx, Node: gx },
    _x = e => {
      if (e.structure?.expression) return e.structure.expression;
      const t =
          e.basis && !e.prestructurals.some(i => i.impl.obviatesBasisExpression)
            ? e.basis.nestableExpression
            : "",
        r = e.prestructurals.map(i => i.expression).join(" & "),
        n = `${t}${t ? " " : ""}${r}`;
      return n === "Array == 0" ? "[]" : n || "unknown";
    },
    ih = (e, t, r) => {
      const n = {},
        i = e.proto ?? e.domain,
        s = t.proto ?? t.domain,
        o = i ? (s ? Ge(i, s, r) : i) : s;
      return o instanceof K
        ? o
        : (o && (n[o.kind] = o),
          Js({
            kind: "intersection",
            baseInner: n,
            l: Ys(e),
            r: Ys(t),
            roots: [],
            ctx: r,
          }));
    },
    yx = Ie({
      kind: "morph",
      hasAssociatedError: !1,
      keys: {
        in: { child: !0, parse: (e, t) => t.$.parseSchema(e) },
        morphs: {
          parse: Ei,
          serialize: e => e.map(t => (H(t, "root") ? t.json : st(t))),
        },
        declaredIn: { child: !1, serialize: e => e.json },
        declaredOut: { child: !1, serialize: e => e.json },
      },
      normalize: e => e,
      defaults: {
        description: e =>
          `a morph from ${e.rawIn.description} to ${e.rawOut?.description ?? "unknown"}`,
      },
      intersections: {
        morph: (e, t, r) => {
          if (!e.hasEqualMorphs(t)) return F(vx(e.expression, t.expression));
          const n = Ge(e.rawIn, t.rawIn, r);
          if (n instanceof K) return n;
          const i = { morphs: e.morphs };
          if (e.declaredIn || t.declaredIn) {
            const s = Ge(e.rawIn, t.rawIn, r);
            if (s instanceof K) return s.throw();
            i.declaredIn = s;
          }
          if (e.declaredOut || t.declaredOut) {
            const s = Ge(e.rawOut, t.rawOut, r);
            if (s instanceof K) return s.throw();
            i.declaredOut = s;
          }
          return n.distribute(
            s => r.$.node("morph", { ...i, in: s }),
            r.$.parseSchema
          );
        },
        ...zi("morph", (e, t, r) => {
          const n = e.inner.in ? Ge(e.inner.in, t, r) : t;
          return n instanceof K
            ? n
            : n.equals(e.inner.in)
              ? e
              : r.$.node("morph", { ...e.inner, in: n });
        }),
      },
    });
  class bx extends Di {
    serializedMorphs = this.morphs.map(st);
    compiledMorphs = `[${this.serializedMorphs}]`;
    lastMorph = this.inner.morphs[this.inner.morphs.length - 1];
    lastMorphIfNode = H(this.lastMorph, "root") ? this.lastMorph : void 0;
    introspectableIn = this.inner.in;
    introspectableOut = this.lastMorphIfNode
      ? Object.assign(
          this.referencesById,
          this.lastMorphIfNode.referencesById
        ) && this.lastMorphIfNode.rawOut
      : void 0;
    get shallowMorphs() {
      return Array.isArray(this.inner.in?.shallowMorphs)
        ? [...this.inner.in.shallowMorphs, ...this.morphs]
        : this.morphs;
    }
    get rawIn() {
      return (
        this.declaredIn ?? this.inner.in?.rawIn ?? z.intrinsic.unknown.internal
      );
    }
    get rawOut() {
      return (
        this.declaredOut ??
        this.introspectableOut ??
        z.intrinsic.unknown.internal
      );
    }
    declareIn(t) {
      return this.$.node("morph", { ...this.inner, declaredIn: t });
    }
    declareOut(t) {
      return this.$.node("morph", { ...this.inner, declaredOut: t });
    }
    expression = `(In: ${this.rawIn.expression}) => ${this.lastMorphIfNode ? "To" : "Out"}<${this.rawOut.expression}>`;
    get defaultShortDescription() {
      return this.rawIn.meta.description ?? this.rawIn.defaultShortDescription;
    }
    innerToJsonSchema(t) {
      return t.fallback.morph({
        code: "morph",
        base: this.rawIn.toJsonSchemaRecurse(t),
        out: this.introspectableOut?.toJsonSchemaRecurse(t) ?? null,
      });
    }
    compile(t) {
      if (t.traversalKind === "Allows") {
        if (!this.introspectableIn) return;
        t.return(t.invoke(this.introspectableIn));
        return;
      }
      (this.introspectableIn && t.line(t.invoke(this.introspectableIn)),
        t.line(`ctx.queueMorphs(${this.compiledMorphs})`));
    }
    traverseAllows = (t, r) =>
      !this.introspectableIn || this.introspectableIn.traverseAllows(t, r);
    traverseApply = (t, r) => {
      (this.introspectableIn && this.introspectableIn.traverseApply(t, r),
        r.queueMorphs(this.morphs));
    };
    hasEqualMorphs(t) {
      return Pn(this.morphs, t.morphs, {
        isEqual: (r, n) =>
          r === n || (H(r, "root") && H(n, "root") && r.equals(n)),
      });
    }
  }
  const sh = { implementation: yx, Node: bx },
    vx = (
      e,
      t
    ) => `The intersection of distinct morphs at a single path is indeterminate:
Left: ${e}
Right: ${t}`,
    wx = Ie({
      kind: "proto",
      hasAssociatedError: !0,
      collapsibleKey: "proto",
      keys: {
        proto: { serialize: e => al(e) ?? Qr(e) },
        dateAllowsInvalid: {},
      },
      normalize: e => {
        const t =
          typeof e == "string"
            ? { proto: Tn[e] }
            : typeof e == "function"
              ? ot(e)
                ? e
                : { proto: e }
              : typeof e.proto == "string"
                ? { ...e, proto: Tn[e.proto] }
                : e;
        return (
          typeof t.proto != "function" &&
            F(to.writeInvalidSchemaMessage(t.proto)),
          il(t, "dateAllowsInvalid") &&
            t.proto !== Date &&
            F(to.writeBadInvalidDateMessage(t.proto)),
          t
        );
      },
      applyConfig: (e, t) =>
        e.dateAllowsInvalid === void 0 &&
        e.proto === Date &&
        t.dateAllowsInvalid
          ? { ...e, dateAllowsInvalid: !0 }
          : e,
      defaults: {
        description: e =>
          e.builtinName ? vw[e.builtinName] : `an instance of ${e.proto.name}`,
        actual: e =>
          e instanceof Date && e.toString() === "Invalid Date"
            ? "an invalid Date"
            : ol(e),
      },
      intersections: {
        proto: (e, t) =>
          e.proto === Date && t.proto === Date
            ? e.dateAllowsInvalid
              ? t
              : e
            : Xf(e.proto, t.proto)
              ? e
              : Xf(t.proto, e.proto)
                ? t
                : K.init("proto", e, t),
        domain: (e, t) =>
          t.domain === "object"
            ? e
            : K.init("domain", z.intrinsic.object.internal, t),
      },
    });
  class xx extends Al {
    builtinName = al(this.proto);
    serializedConstructor = this.json.proto;
    requiresInvalidDateCheck = this.proto === Date && !this.dateAllowsInvalid;
    traverseAllows = this.requiresInvalidDateCheck
      ? t => t instanceof Date && t.toString() !== "Invalid Date"
      : t => t instanceof this.proto;
    compiledCondition = `data instanceof ${this.serializedConstructor}${this.requiresInvalidDateCheck ? ' && data.toString() !== "Invalid Date"' : ""}`;
    compiledNegation = `!(${this.compiledCondition})`;
    innerToJsonSchema(t) {
      switch (this.builtinName) {
        case "Array":
          return { type: "array" };
        case "Date":
          return (
            t.fallback.date?.({ code: "date", base: {} }) ??
            t.fallback.proto({ code: "proto", base: {}, proto: this.proto })
          );
        default:
          return t.fallback.proto({
            code: "proto",
            base: {},
            proto: this.proto,
          });
      }
    }
    expression = this.dateAllowsInvalid
      ? "Date | InvalidDate"
      : this.proto.name;
    get nestableExpression() {
      return this.dateAllowsInvalid ? `(${this.expression})` : this.expression;
    }
    domain = "object";
    get defaultShortDescription() {
      return this.description;
    }
  }
  const to = {
      implementation: wx,
      Node: xx,
      writeBadInvalidDateMessage: e =>
        `dateAllowsInvalid may only be specified with constructor Date (was ${e.name})`,
      writeInvalidSchemaMessage: e =>
        `instanceOf operand must be a function (was ${Tt(e)})`,
    },
    kx = Ie({
      kind: "union",
      hasAssociatedError: !0,
      collapsibleKey: "branches",
      keys: {
        ordered: {},
        branches: {
          child: !0,
          parse: (e, t) => {
            const r = [];
            for (const n of e) {
              const i = H(n, "root") ? n.branches : t.$.parseSchema(n).branches;
              for (const s of i)
                if (s.hasKind("morph")) {
                  const o = r.findIndex(
                    a => a.hasKind("morph") && a.hasEqualMorphs(s)
                  );
                  if (o === -1) r.push(s);
                  else {
                    const a = r[o];
                    r[o] = t.$.node("morph", {
                      ...a.inner,
                      in: a.rawIn.rawOr(s.rawIn),
                    });
                  }
                } else r.push(s);
            }
            return (
              t.def.ordered || r.sort((n, i) => (n.hash < i.hash ? -1 : 1)),
              r
            );
          },
        },
      },
      normalize: e => (tt(e) ? { branches: e } : e),
      reduce: (e, t) => {
        const r = Rx(e);
        if (r.length === 1) return r[0];
        if (r.length !== e.branches.length)
          return t.node("union", { ...e, branches: r }, { prereduced: !0 });
      },
      defaults: {
        description: e => e.distribute(t => t.description, qn),
        expected: e => {
          const t = cw(e.errors, "propString"),
            r = Object.entries(t).map(([n, i]) => {
              const s = [];
              for (const l of i) Jr(s, l.expected);
              const o = qn(s),
                a = i.every(l => l.actual === i[0].actual)
                  ? i[0].actual
                  : ge(i[0].data);
              return `${n && `${n} `}must be ${o}${a && ` (was ${a})`}`;
            });
          return qn(r);
        },
        problem: e => e.expected,
        message: e =>
          e.problem[0] === "[" ? `value at ${e.problem}` : e.problem,
      },
      intersections: {
        union: (e, t, r) => {
          if (e.isNever !== t.isNever) return K.init("presence", e, t);
          let n;
          return (
            e.ordered
              ? (t.ordered && F(Lx(e.expression, t.expression)),
                (n = Il(t.branches, e.branches, r)),
                n instanceof K && n.invert())
              : (n = Il(e.branches, t.branches, r)),
            n instanceof K
              ? n
              : r.$.parseSchema(
                  e.ordered || t.ordered
                    ? { branches: n, ordered: !0 }
                    : { branches: n }
                )
          );
        },
        ...zi("union", (e, t, r) => {
          const n = Il(e.branches, [t], r);
          return n instanceof K
            ? n
            : n.length === 1
              ? n[0]
              : r.$.parseSchema(
                  e.ordered ? { branches: n, ordered: !0 } : { branches: n }
                );
        }),
      },
    });
  class Sx extends Di {
    isBoolean =
      this.branches.length === 2 &&
      this.branches[0].hasUnit(!1) &&
      this.branches[1].hasUnit(!0);
    get branchGroups() {
      const t = [];
      let r = -1;
      for (const n of this.branches) {
        if (n.hasKind("unit") && n.domain === "boolean") {
          r === -1 ? ((r = t.length), t.push(n)) : (t[r] = z.intrinsic.boolean);
          continue;
        }
        t.push(n);
      }
      return t;
    }
    unitBranches = this.branches.filter(t => t.rawIn.hasKind("unit"));
    discriminant = this.discriminate();
    discriminantJson = this.discriminant ? Px(this.discriminant) : null;
    expression = this.distribute(t => t.nestableExpression, Tx);
    createBranchedOptimisticRootApply() {
      return (t, r) => {
        const n = this.traverseOptimistic(t);
        if (n !== Wt) return n;
        const i = new Fn(t, this.$.resolvedConfig);
        return (this.traverseApply(t, i), i.finalize(r));
      };
    }
    get shallowMorphs() {
      return this.branches.reduce((t, r) => Jr(t, r.shallowMorphs), []);
    }
    get defaultShortDescription() {
      return this.distribute(t => t.defaultShortDescription, qn);
    }
    innerToJsonSchema(t) {
      if (
        this.branchGroups.length === 1 &&
        this.branchGroups[0].equals(z.intrinsic.boolean)
      )
        return { type: "boolean" };
      const r = this.branchGroups.map(n => n.toJsonSchemaRecurse(t));
      return r.every(n => Object.keys(n).length === 1 && il(n, "const"))
        ? { enum: r.map(n => n.const) }
        : { anyOf: r };
    }
    traverseAllows = (t, r) => this.branches.some(n => n.traverseAllows(t, r));
    traverseApply = (t, r) => {
      const n = [];
      for (let i = 0; i < this.branches.length; i++) {
        if (
          (r.pushBranch(), this.branches[i].traverseApply(t, r), !r.hasError())
        )
          return this.branches[i].includesTransform
            ? r.queuedMorphs.push(...r.popBranch().queuedMorphs)
            : r.popBranch();
        n.push(r.popBranch().error);
      }
      r.errorFromNodeContext({ code: "union", errors: n, meta: this.meta });
    };
    traverseOptimistic = t => {
      for (let r = 0; r < this.branches.length; r++) {
        const n = this.branches[r];
        if (n.traverseAllows(t))
          return n.contextFreeMorph ? n.contextFreeMorph(t) : t;
      }
      return Wt;
    };
    compile(t) {
      if (
        !this.discriminant ||
        (this.unitBranches.length === this.branches.length &&
          this.branches.length === 2)
      )
        return this.compileIndiscriminable(t);
      let r = this.discriminant.optionallyChainedPropString;
      this.discriminant.kind === "domain" &&
        (r = `typeof ${r} === "object" ? ${r} === null ? "null" : "object" : typeof ${r} === "function" ? "object" : typeof ${r}`);
      const n = this.discriminant.cases,
        i = Object.keys(n),
        { optimistic: s } = t;
      if (
        ((t.optimistic = !1),
        t.block(`switch(${r})`, () => {
          for (const d in n) {
            const u = n[d],
              h = d === "default" ? d : `case ${d}`;
            let f;
            (u === !0
              ? (f = s ? "data" : "true")
              : s
                ? u.rootApplyStrategy === "branchedOptimistic"
                  ? (f = t.invoke(u, { kind: "Optimistic" }))
                  : u.contextFreeMorph
                    ? (f = `${t.invoke(u)} ? ${st(u.contextFreeMorph)}(data) : "${Wt}"`)
                    : (f = `${t.invoke(u)} ? data : "${Wt}"`)
                : (f = t.invoke(u)),
              t.line(`${h}: return ${f}`));
          }
          return t;
        }),
        t.traversalKind === "Allows")
      ) {
        t.return(s ? `"${Wt}"` : !1);
        return;
      }
      const o = qn(
          this.discriminant.kind === "domain"
            ? i.map(d => {
                const u = d.slice(1, -1);
                return u === "function" ? mr.object : mr[u];
              })
            : i
        ),
        a = this.discriminant.path.map(d =>
          typeof d == "symbol" ? st(d) : JSON.stringify(d)
        ),
        l = JSON.stringify(o),
        c = this.discriminant.kind === "domain" ? `${Ex}[${r}]` : `${Ix}(${r})`;
      t.line(`ctx.errorFromNodeContext({
	code: "predicate",
	expected: ${l},
	actual: ${c},
	relativePath: [${a}],
	meta: ${this.compiledMeta}
})`);
    }
    compileIndiscriminable(t) {
      if (t.traversalKind === "Apply") {
        t.const("errors", "[]");
        for (const r of this.branches)
          t.line("ctx.pushBranch()")
            .line(t.invoke(r))
            .if("!ctx.hasError()", () =>
              t.return(
                r.includesTransform
                  ? "ctx.queuedMorphs.push(...ctx.popBranch().queuedMorphs)"
                  : "ctx.popBranch()"
              )
            )
            .line("errors.push(ctx.popBranch().error)");
        t.line(
          `ctx.errorFromNodeContext({ code: "union", errors, meta: ${this.compiledMeta} })`
        );
      } else {
        const { optimistic: r } = t;
        t.optimistic = !1;
        for (const n of this.branches)
          t.if(`${t.invoke(n)}`, () =>
            t.return(
              r
                ? n.contextFreeMorph
                  ? `${st(n.contextFreeMorph)}(data)`
                  : "data"
                : !0
            )
          );
        t.return(r ? `"${Wt}"` : !1);
      }
    }
    get nestableExpression() {
      return this.isBoolean ? "boolean" : `(${this.expression})`;
    }
    discriminate() {
      if (this.branches.length < 2 || this.isCyclic) return null;
      if (this.unitBranches.length === this.branches.length) {
        const s = be(this.unitBranches, (o, a) => [
          `${a.rawIn.serializedValue}`,
          a.hasKind("morph") ? a : !0,
        ]);
        return {
          kind: "unit",
          path: [],
          optionallyChainedPropString: "data",
          cases: s,
        };
      }
      const t = [];
      for (let s = 0; s < this.branches.length - 1; s++) {
        const o = this.branches[s];
        for (let a = s + 1; a < this.branches.length; a++) {
          const l = this.branches[a],
            c = yr(o.rawIn, l.rawIn, o.$);
          if (c instanceof K)
            for (const d of c) {
              if (!d.kind || d.optional) continue;
              let u, h;
              if (d.kind === "domain") {
                const g = d.l,
                  m = d.r;
                ((u = `"${typeof g == "string" ? g : g.domain}"`),
                  (h = `"${typeof m == "string" ? m : m.domain}"`));
              } else if (d.kind === "unit")
                ((u = d.l.serializedValue), (h = d.r.serializedValue));
              else continue;
              const f = t.find(g => Pn(g.path, d.path) && g.kind === d.kind);
              f
                ? (f.cases[u]
                    ? (f.cases[u].branchIndices = Jr(
                        f.cases[u].branchIndices,
                        s
                      ))
                    : (f.cases[u] ??= { branchIndices: [s], condition: d.l }),
                  f.cases[h]
                    ? (f.cases[h].branchIndices = Jr(
                        f.cases[h].branchIndices,
                        a
                      ))
                    : (f.cases[h] ??= { branchIndices: [a], condition: d.r }))
                : t.push({
                    kind: d.kind,
                    cases: {
                      [u]: { branchIndices: [s], condition: d.l },
                      [h]: { branchIndices: [a], condition: d.r },
                    },
                    path: d.path,
                  });
            }
        }
      }
      const r = this.ordered ? $x(t, this.branches) : t;
      if (!r.length) return null;
      const n = Mx(r, this),
        i = {};
      for (const s in n.best.cases) {
        const o = Cx(n, s);
        if (o === null) {
          i[s] = !0;
          continue;
        }
        if (o.length === this.branches.length) return null;
        this.ordered && o.sort((c, d) => c.originalIndex - d.originalIndex);
        const a = o.map(c => c.branch),
          l =
            a.length === 1
              ? a[0]
              : this.$.node(
                  "union",
                  this.ordered ? { branches: a, ordered: !0 } : a
                );
        (Object.assign(this.referencesById, l.referencesById), (i[s] = l));
      }
      if (n.defaultEntries.length) {
        const s = n.defaultEntries.map(o => o.branch);
        ((i.default = this.$.node(
          "union",
          this.ordered ? { branches: s, ordered: !0 } : s,
          { prereduced: !0 }
        )),
          Object.assign(this.referencesById, i.default.referencesById));
      }
      return Object.assign(n.location, { cases: i });
    }
  }
  const Mx = (e, t) => {
      const n = e.sort((o, a) =>
          o.path.length === a.path.length
            ? Object.keys(a.cases).length - Object.keys(o.cases).length
            : o.path.length - a.path.length
        )[0],
        i = {
          kind: n.kind,
          path: n.path,
          optionallyChainedPropString: oh(n.path),
        },
        s = t.branches.map((o, a) => ({ originalIndex: a, branch: o }));
      return { best: n, location: i, defaultEntries: s, node: t };
    },
    Cx = (e, t) => {
      const r = e.best.cases[t],
        n = Ax(r.condition, e.location.path, e.node.$);
      let i = [];
      const s = [];
      for (let o = 0; o < e.defaultEntries.length; o++) {
        const a = e.defaultEntries[o];
        if (r.branchIndices.includes(a.originalIndex)) {
          const l = lh(e.node.branches[a.originalIndex], e.location);
          l === null
            ? (i = null)
            : i?.push({ originalIndex: a.originalIndex, branch: l });
        } else if (
          a.branch.hasKind("alias") &&
          n.hasKind("domain") &&
          n.domain === "object"
        )
          i?.push(a);
        else {
          if (a.branch.rawIn.overlaps(n)) {
            const l = lh(a.branch, e.location);
            i?.push({ originalIndex: a.originalIndex, branch: l });
          }
          s.push(a);
        }
      }
      return ((e.defaultEntries = s), i);
    },
    $x = (e, t) =>
      e.filter(n => {
        const i = Object.values(n.cases).map(s => s.branchIndices);
        for (let s = 0; s < i.length - 1; s++) {
          const o = i[s];
          for (let a = s + 1; a < i.length; a++) {
            const l = i[a];
            for (const c of o)
              for (const d of l) if (c > d && t[c].overlaps(t[d])) return !1;
          }
        }
        return !0;
      }),
    Ax = (e, t, r) => {
      let n =
        e === "undefined"
          ? r.node("unit", { unit: void 0 })
          : e === "null"
            ? r.node("unit", { unit: null })
            : e === "boolean"
              ? r.units([!0, !1])
              : e;
      for (let i = t.length - 1; i >= 0; i--) {
        const s = t[i];
        n = r.node(
          "intersection",
          typeof s == "number"
            ? { proto: "Array", sequence: [...aw(s).map(o => ({})), n] }
            : { domain: "object", required: [{ key: s, value: n }] }
        );
      }
      return n;
    },
    oh = e => e.reduce((t, r) => t + pp(r, !0), "data"),
    Ex = st(uw),
    Ix = st(ge),
    ah = { implementation: kx, Node: Sx },
    Px = e => ({
      kind: e.kind,
      path: e.path.map(t => (typeof t == "string" ? t : Nn(t))),
      cases: be(e.cases, (t, r) => [
        t,
        r === !0
          ? r
          : r.hasKind("union") && r.discriminantJson
            ? r.discriminantJson
            : r.json,
      ]),
    }),
    Ox = { delimiter: " | ", finalDelimiter: " | " },
    Tx = e => qn(e, Ox),
    qn = (e, t) => {
      const r = t?.delimiter ?? ", ",
        n = t?.finalDelimiter ?? " or ";
      if (e.length === 0) return "never";
      if (e.length === 1) return e[0];
      if (
        (e.length === 2 && e[0] === "false" && e[1] === "true") ||
        (e[0] === "true" && e[1] === "false")
      )
        return "boolean";
      const i = {},
        s = e.filter(a => (i[a] ? !1 : (i[a] = !0))),
        o = s.pop();
      return `${s.join(r)}${s.length ? n : ""}${o}`;
    },
    Il = (e, t, r) => {
      const n = t.map(() => []);
      for (let s = 0; s < e.length; s++) {
        let o = {};
        for (let a = 0; a < t.length; a++) {
          if (n[a] === null) continue;
          if (e[s].equals(t[a])) {
            ((n[a] = null), (o = {}));
            break;
          }
          const l = Ge(e[s], t[a], r);
          if (!(l instanceof K)) {
            if (l.equals(e[s])) {
              (n[a].push(e[s]), (o = {}));
              break;
            }
            l.equals(t[a]) ? (n[a] = null) : (o[a] = l);
          }
        }
        for (const a in o) n[a][s] = o[a];
      }
      const i = n.flatMap((s, o) => s?.flatMap(a => a.branches) ?? t[o]);
      return i.length === 0 ? K.init("union", e, t) : i;
    },
    Rx = ({ branches: e, ordered: t }) => {
      if (e.length < 2) return e;
      const r = e.map(() => !0);
      for (let n = 0; n < e.length; n++)
        for (let i = n + 1; i < e.length && r[n] && r[i]; i++) {
          if (e[n].equals(e[i])) {
            r[i] = !1;
            continue;
          }
          const s = yr(e[n].rawIn, e[i].rawIn, e[0].$);
          s instanceof K ||
            (t || Nx(e[n], e[i]),
            s.equals(e[n].rawIn)
              ? (r[n] = !!t)
              : s.equals(e[i].rawIn) && (r[i] = !1));
        }
      return e.filter((n, i) => r[i]);
    },
    Nx = (e, t) => {
      (!e.includesTransform && !t.includesTransform) ||
        (Pn(e.shallowMorphs, t.shallowMorphs) ||
          F(ch(e.expression, t.expression)),
        Pn(e.flatMorphs, t.flatMorphs, {
          isEqual: (r, n) =>
            r.propString === n.propString &&
            (r.node.hasKind("morph") && n.node.hasKind("morph")
              ? r.node.hasEqualMorphs(n.node)
              : r.node.hasKind("intersection") && n.node.hasKind("intersection")
                ? r.node.structure?.structuralMorphRef ===
                  n.node.structure?.structuralMorphRef
                : !1),
        }) || F(ch(e.expression, t.expression)));
    },
    lh = (e, t) =>
      e.transform((r, n) => (r === "domain" || r === "unit" ? null : n), {
        shouldTransform: (r, n) => {
          const i = oh(n.path);
          return t.optionallyChainedPropString.startsWith(i)
            ? (r.hasKind("domain") && r.domain === "object") ||
              ((r.hasKind("domain") || t.kind === "unit") &&
                i === t.optionallyChainedPropString)
              ? !0
              : r.children.length !== 0 && r.kind !== "index"
            : !1;
        },
      }),
    ch = (
      e,
      t
    ) => `An unordered union of a type including a morph and a type with overlapping input is indeterminate:
Left: ${e}
Right: ${t}`,
    Lx = (e, t) => `The intersection of two ordered unions is indeterminate:
Left: ${e}
Right: ${t}`,
    Fx = Ie({
      kind: "unit",
      hasAssociatedError: !0,
      keys: {
        unit: {
          preserveUndefined: !0,
          serialize: e => (e instanceof Date ? e.toISOString() : Qr(e)),
        },
      },
      normalize: e => e,
      defaults: {
        description: e => ge(e.unit),
        problem: ({ expected: e, actual: t }) =>
          `${e === t ? `must be reference equal to ${e} (serialized to the same value)` : `must be ${e} (was ${t})`}`,
      },
      intersections: {
        unit: (e, t) => K.init("unit", e, t),
        ...zi("unit", (e, t) => {
          if (t.allows(e.unit)) return e;
          const r = t.hasKind("intersection") ? t.basis : t;
          if (r) {
            const n = r.hasKind("domain") ? r : z.intrinsic.object;
            if (e.domain !== n.domain) {
              const i =
                e.domain === "undefined" ||
                e.domain === "null" ||
                e.domain === "boolean"
                  ? e.domain
                  : z.intrinsic[e.domain];
              return K.init("domain", i, n);
            }
          }
          return K.init(
            "assignability",
            e,
            t.hasKind("intersection")
              ? t.children.find(n => !n.allows(e.unit))
              : t
          );
        }),
      },
    });
  class Dx extends Al {
    compiledValue = this.json.unit;
    serializedValue =
      typeof this.unit == "string" || this.unit instanceof Date
        ? JSON.stringify(this.compiledValue)
        : `${this.compiledValue}`;
    compiledCondition = dh(this.unit, this.serializedValue);
    compiledNegation = dh(this.unit, this.serializedValue, "negated");
    expression = ge(this.unit);
    domain = Tt(this.unit);
    get defaultShortDescription() {
      return this.domain === "object" ? mr.object : this.description;
    }
    innerToJsonSchema(t) {
      return this.unit === null
        ? { type: "null" }
        : z.intrinsic.jsonPrimitive.allows(this.unit)
          ? { const: this.unit }
          : t.fallback.unit({ code: "unit", base: {}, unit: this.unit });
    }
    traverseAllows =
      this.unit instanceof Date
        ? t => t instanceof Date && t.toISOString() === this.compiledValue
        : Number.isNaN(this.unit)
          ? t => Number.isNaN(t)
          : t => t === this.unit;
  }
  const uh = { implementation: Fx, Node: Dx },
    dh = (e, t, r) => {
      if (e instanceof Date) {
        const n = `data instanceof Date && data.toISOString() === ${t}`;
        return r ? `!(${n})` : n;
      }
      return Number.isNaN(e)
        ? `${r ? "!" : ""}Number.isNaN(data)`
        : `data ${r ? "!" : "="}== ${t}`;
    },
    zx = Ie({
      kind: "index",
      hasAssociatedError: !1,
      intersectionIsOpen: !0,
      keys: {
        signature: {
          child: !0,
          parse: (e, t) => {
            const r = t.$.parseSchema(e);
            if (!r.extends(z.intrinsic.key)) return F(qx(r.expression));
            const n = r.branches.filter(i => i.hasKind("unit"));
            return n.length ? F(Vx(n.map(i => ge(i.unit)))) : r;
          },
        },
        value: { child: !0, parse: (e, t) => t.$.parseSchema(e) },
      },
      normalize: e => e,
      defaults: {
        description: e => `[${e.signature.expression}]: ${e.value.description}`,
      },
      intersections: {
        index: (e, t, r) => {
          if (e.signature.equals(t.signature)) {
            const n = Ge(e.value, t.value, r),
              i = n instanceof K ? z.intrinsic.never.internal : n;
            return r.$.node("index", { signature: e.signature, value: i });
          }
          return e.signature.extends(t.signature) && e.value.subsumes(t.value)
            ? t
            : t.signature.extends(e.signature) && t.value.subsumes(e.value)
              ? e
              : null;
        },
      },
    });
  class Bx extends zn {
    impliedBasis = z.intrinsic.object.internal;
    expression = `[${this.signature.expression}]: ${this.value.expression}`;
    flatRefs = ye(
      this.value.flatRefs.map(t => Or([this.signature, ...t.path], t.node)),
      Or([this.signature], this.value)
    );
    traverseAllows = (t, r) =>
      Ds(t).every(n =>
        this.signature.traverseAllows(n[0], r)
          ? _r(n[0], () => this.value.traverseAllows(n[1], r), r)
          : !0
      );
    traverseApply = (t, r) => {
      for (const n of Ds(t))
        this.signature.traverseAllows(n[0], r) &&
          _r(n[0], () => this.value.traverseApply(n[1], r), r);
    };
    _transform(t, r) {
      r.path.push(this.signature);
      const n = super._transform(t, r);
      return (r.path.pop(), n);
    }
    compile() {}
  }
  const fh = { implementation: zx, Node: Bx },
    Vx = e => `Index keys ${e.join(", ")} should be specified as named props.`,
    qx = e => `Indexed key definition '${e}' must be a string or symbol`,
    jx = Ie({
      kind: "required",
      hasAssociatedError: !0,
      intersectionIsOpen: !0,
      keys: {
        key: {},
        value: { child: !0, parse: (e, t) => t.$.parseSchema(e) },
      },
      normalize: e => e,
      defaults: {
        description: e => `${e.compiledKey}: ${e.value.description}`,
        expected: e => e.missingValueDescription,
        actual: () => "missing",
      },
      intersections: { required: Sl, optional: Sl },
    });
  class Ux extends Jp {
    expression = `${this.compiledKey}: ${this.value.expression}`;
    errorContext = Object.freeze({
      code: "required",
      missingValueDescription: this.value.defaultShortDescription,
      relativePath: [this.key],
      meta: this.meta,
    });
    compiledErrorContext = Ws(this.errorContext);
  }
  const ph = { implementation: jx, Node: Ux },
    Kx = Ie({
      kind: "sequence",
      hasAssociatedError: !1,
      collapsibleKey: "variadic",
      keys: {
        prefix: {
          child: !0,
          parse: (e, t) => {
            if (e.length !== 0) return e.map(r => t.$.parseSchema(r));
          },
        },
        optionals: {
          child: !0,
          parse: (e, t) => {
            if (e.length !== 0) return e.map(r => t.$.parseSchema(r));
          },
        },
        defaultables: {
          child: e => e.map(t => t[0]),
          parse: (e, t) => {
            if (e.length !== 0)
              return e.map(r => {
                const n = t.$.parseSchema(r[0]);
                return (Cl(n, r[1], null), [n, r[1]]);
              });
          },
          serialize: e => e.map(t => [t[0].collapsibleJson, Qr(t[1])]),
          reduceIo: (e, t, r) => {
            if (e === "in") {
              t.optionals = r.map(n => n[0].rawIn);
              return;
            }
            t.prefix = r.map(n => n[0].rawOut);
          },
        },
        variadic: { child: !0, parse: (e, t) => t.$.parseSchema(e, t) },
        minVariadicLength: { parse: e => (e === 0 ? void 0 : e) },
        postfix: {
          child: !0,
          parse: (e, t) => {
            if (e.length !== 0) return e.map(r => t.$.parseSchema(r));
          },
        },
      },
      normalize: e => {
        if (typeof e == "string") return { variadic: e };
        if (
          "variadic" in e ||
          "prefix" in e ||
          "defaultables" in e ||
          "optionals" in e ||
          "postfix" in e ||
          "minVariadicLength" in e
        ) {
          if (e.postfix?.length) {
            if (!e.variadic) return F(Yx);
            if (e.optionals?.length || e.defaultables?.length) return F(gh);
          }
          return e.minVariadicLength && !e.variadic
            ? F(
                "minVariadicLength may not be specified without a variadic element"
              )
            : e;
        }
        return { variadic: e };
      },
      reduce: (e, t) => {
        let r = e.minVariadicLength ?? 0;
        const n = e.prefix?.slice() ?? [],
          i = e.defaultables?.slice() ?? [],
          s = e.optionals?.slice() ?? [],
          o = e.postfix?.slice() ?? [];
        if (e.variadic) {
          for (; s[s.length - 1]?.equals(e.variadic); ) s.pop();
          if (s.length === 0 && i.length === 0)
            for (; n[n.length - 1]?.equals(e.variadic); ) (n.pop(), r++);
          for (; o[0]?.equals(e.variadic); ) (o.shift(), r++);
        } else s.length === 0 && i.length === 0 && n.push(...o.splice(0));
        if (
          r !== e.minVariadicLength ||
          (e.prefix && e.prefix.length !== n.length)
        )
          return t.node(
            "sequence",
            {
              ...e,
              prefix: n,
              defaultables: i,
              optionals: s,
              postfix: o,
              minVariadicLength: r,
            },
            { prereduced: !0 }
          );
      },
      defaults: {
        description: e =>
          e.isVariadicOnly
            ? `${e.variadic.nestableExpression}[]`
            : `[${e.tuple.map(r => (r.kind === "defaultables" ? `${r.node.nestableExpression} = ${ge(r.default)}` : r.kind === "optionals" ? `${r.node.nestableExpression}?` : r.kind === "variadic" ? `...${r.node.nestableExpression}[]` : r.node.expression)).join(", ")}]`,
      },
      intersections: {
        sequence: (e, t, r) => {
          const n = Bi({
              l: e.tuple,
              r: t.tuple,
              disjoint: new K(),
              result: [],
              fixedVariants: [],
              ctx: r,
            }),
            i =
              n.disjoint.length === 0
                ? [n, ...n.fixedVariants]
                : n.fixedVariants;
          return i.length === 0
            ? n.disjoint
            : i.length === 1
              ? r.$.node("sequence", mh(i[0].result))
              : r.$.node(
                  "union",
                  i.map(s => ({ proto: Array, sequence: mh(s.result) }))
                );
        },
      },
    });
  class Gx extends zn {
    impliedBasis = z.intrinsic.Array.internal;
    tuple = Jx(this.inner);
    prefixLength = this.prefix?.length ?? 0;
    defaultablesLength = this.defaultables?.length ?? 0;
    optionalsLength = this.optionals?.length ?? 0;
    postfixLength = this.postfix?.length ?? 0;
    defaultablesAndOptionals = [];
    prevariadic = this.tuple.filter(t =>
      t.kind === "defaultables" || t.kind === "optionals"
        ? (this.defaultablesAndOptionals.push(t.node), !0)
        : t.kind === "prefix"
    );
    variadicOrPostfix = Hr(this.variadic && [this.variadic], this.postfix);
    flatRefs = this.addFlatRefs();
    addFlatRefs() {
      return (
        Cp(
          this.flatRefs,
          this.prevariadic.flatMap((t, r) =>
            ye(
              t.node.flatRefs.map(n => Or([`${r}`, ...n.path], n.node)),
              Or([`${r}`], t.node)
            )
          )
        ),
        Cp(
          this.flatRefs,
          this.variadicOrPostfix.flatMap(t =>
            ye(
              t.flatRefs.map(r =>
                Or(
                  [z.intrinsic.nonNegativeIntegerString.internal, ...r.path],
                  r.node
                )
              ),
              Or([z.intrinsic.nonNegativeIntegerString.internal], t)
            )
          )
        ),
        this.flatRefs
      );
    }
    isVariadicOnly = this.prevariadic.length + this.postfixLength === 0;
    minVariadicLength = this.inner.minVariadicLength ?? 0;
    minLength = this.prefixLength + this.minVariadicLength + this.postfixLength;
    minLengthNode =
      this.minLength === 0 ? null : this.$.node("minLength", this.minLength);
    maxLength = this.variadic ? null : this.tuple.length;
    maxLengthNode =
      this.maxLength === null ? null : this.$.node("maxLength", this.maxLength);
    impliedSiblings = this.minLengthNode
      ? this.maxLengthNode
        ? [this.minLengthNode, this.maxLengthNode]
        : [this.minLengthNode]
      : this.maxLengthNode
        ? [this.maxLengthNode]
        : [];
    defaultValueMorphs = Hx(this);
    defaultValueMorphsReference = this.defaultValueMorphs.length
      ? st(this.defaultValueMorphs)
      : void 0;
    elementAtIndex(t, r) {
      if (r < this.prevariadic.length) return this.tuple[r];
      const n = t.length - this.postfixLength;
      return r >= n
        ? { kind: "postfix", node: this.postfix[r - n] }
        : {
            kind: "variadic",
            node:
              this.variadic ??
              Le(`Unexpected attempt to access index ${r} on ${this}`),
          };
    }
    traverseAllows = (t, r) => {
      for (let n = 0; n < t.length; n++)
        if (!this.elementAtIndex(t, n).node.traverseAllows(t[n], r)) return !1;
      return !0;
    };
    traverseApply = (t, r) => {
      let n = 0;
      for (; n < t.length; n++)
        _r(n, () => this.elementAtIndex(t, n).node.traverseApply(t[n], r), r);
    };
    get element() {
      return this.cacheGetter("element", this.$.node("union", this.children));
    }
    compile(t) {
      if (this.prefix)
        for (const [r, n] of this.prefix.entries())
          t.traverseKey(`${r}`, `data[${r}]`, n);
      for (const [r, n] of this.defaultablesAndOptionals.entries()) {
        const i = `${r + this.prefixLength}`;
        (t.if(`${i} >= data.length`, () =>
          t.traversalKind === "Allows" ? t.return(!0) : t.return()
        ),
          t.traverseKey(i, `data[${i}]`, n));
      }
      if (
        this.variadic &&
        (this.postfix &&
          t.const(
            "firstPostfixIndex",
            `data.length${this.postfix ? `- ${this.postfix.length}` : ""}`
          ),
        t.for(
          `i < ${this.postfix ? "firstPostfixIndex" : "data.length"}`,
          () => t.traverseKey("i", "data[i]", this.variadic),
          this.prevariadic.length
        ),
        this.postfix)
      )
        for (const [r, n] of this.postfix.entries()) {
          const i = `firstPostfixIndex + ${r}`;
          t.traverseKey(i, `data[${i}]`, n);
        }
      t.traversalKind === "Allows" && t.return(!0);
    }
    _transform(t, r) {
      r.path.push(z.intrinsic.nonNegativeIntegerString.internal);
      const n = super._transform(t, r);
      return (r.path.pop(), n);
    }
    expression = this.description;
    reduceJsonSchema(t, r) {
      const n = r.target === "draft-07";
      if (this.prevariadic.length) {
        const i = this.prevariadic.map(s => {
          const o = s.node.toJsonSchemaRecurse(r);
          if (s.kind === "defaultables") {
            const a = typeof s.default == "function" ? s.default() : s.default;
            o.default = z.intrinsic.jsonData.allows(a)
              ? a
              : r.fallback.defaultValue({
                  code: "defaultValue",
                  base: o,
                  value: a,
                });
          }
          return o;
        });
        n ? (t.items = i) : (t.prefixItems = i);
      }
      if ((this.minLength && (t.minItems = this.minLength), this.variadic)) {
        const i = this.variadic.toJsonSchemaRecurse(r);
        if (
          (n && this.prevariadic.length
            ? (t.additionalItems = i)
            : (t.items = i),
          this.maxLength && (t.maxItems = this.maxLength),
          this.postfix)
        ) {
          const s = this.postfix.map(o => o.toJsonSchemaRecurse(r));
          t = r.fallback.arrayPostfix({
            code: "arrayPostfix",
            base: t,
            elements: s,
          });
        }
      } else (n ? (t.additionalItems = !1) : (t.items = !1), delete t.maxItems);
      return t;
    }
  }
  const Wx = {},
    Hx = e => {
      if (!e.defaultables) return [];
      const t = [];
      let r = "[";
      const n = e.prefixLength + e.defaultablesLength - 1;
      for (let i = e.prefixLength; i <= n; i++) {
        const [s, o] = e.defaultables[i - e.prefixLength];
        (t.push(Qp(i, s, o)), (r += `${i}: ${s.id} = ${Qr(o)}, `));
      }
      return ((r += "]"), (Wx[r] ??= t));
    },
    hh = { implementation: Kx, Node: Gx },
    Jx = e => {
      const t = [];
      if (e.prefix)
        for (const r of e.prefix) t.push({ kind: "prefix", node: r });
      if (e.defaultables)
        for (const [r, n] of e.defaultables)
          t.push({ kind: "defaultables", node: r, default: n });
      if (e.optionals)
        for (const r of e.optionals) t.push({ kind: "optionals", node: r });
      if (
        (e.variadic && t.push({ kind: "variadic", node: e.variadic }),
        e.postfix)
      )
        for (const r of e.postfix) t.push({ kind: "postfix", node: r });
      return t;
    },
    mh = e =>
      e.reduce(
        (t, r) => (
          r.kind === "variadic"
            ? (t.variadic = r.node)
            : r.kind === "defaultables"
              ? (t.defaultables = ye(t.defaultables, [[r.node, r.default]]))
              : (t[r.kind] = ye(t[r.kind], r.node)),
          t
        ),
        {}
      ),
    gh =
      "A postfix required element cannot follow an optional or defaultable element",
    Yx = "A postfix element requires a variadic element",
    Bi = e => {
      const [t, ...r] = e.l,
        [n, ...i] = e.r;
      if (!t || !n) return e;
      const s = r[r.length - 1]?.kind === "postfix",
        o = i[i.length - 1]?.kind === "postfix",
        a =
          t.kind === "prefix" || n.kind === "prefix"
            ? "prefix"
            : t.kind === "postfix" || n.kind === "postfix"
              ? "postfix"
              : t.kind === "variadic" && n.kind === "variadic"
                ? "variadic"
                : s || o
                  ? "prefix"
                  : t.kind === "defaultables" || n.kind === "defaultables"
                    ? "defaultables"
                    : "optionals";
      if (t.kind === "prefix" && n.kind === "variadic" && o) {
        const u = Bi({
          ...e,
          fixedVariants: [],
          r: i.map(h => ({ ...h, kind: "prefix" })),
        });
        u.disjoint.length === 0 && e.fixedVariants.push(u);
      } else if (n.kind === "prefix" && t.kind === "variadic" && s) {
        const u = Bi({
          ...e,
          fixedVariants: [],
          l: r.map(h => ({ ...h, kind: "prefix" })),
        });
        u.disjoint.length === 0 && e.fixedVariants.push(u);
      }
      const l = Ge(t.node, n.node, e.ctx);
      if (l instanceof K)
        if (a === "prefix" || a === "postfix")
          (e.disjoint.push(
            ...l.withPrefixKey(
              a === "prefix" ? e.result.length : `-${r.length + 1}`,
              _h(t) && _h(n) ? "required" : "optional"
            )
          ),
            (e.result = [
              ...e.result,
              { kind: a, node: z.intrinsic.never.internal },
            ]));
        else
          return a === "optionals" || a === "defaultables"
            ? e
            : Bi({
                ...e,
                fixedVariants: [],
                l: r.map(u => ({ ...u, kind: "prefix" })),
                r: r.map(u => ({ ...u, kind: "prefix" })),
              });
      else
        a === "defaultables"
          ? (t.kind === "defaultables" &&
              n.kind === "defaultables" &&
              t.default !== n.default &&
              F(Yp(t.default, n.default)),
            (e.result = [
              ...e.result,
              {
                kind: a,
                node: l,
                default:
                  t.kind === "defaultables"
                    ? t.default
                    : n.kind === "defaultables"
                      ? n.default
                      : Le(
                          `Unexpected defaultable intersection from ${t.kind} and ${n.kind} elements.`
                        ),
              },
            ]))
          : (e.result = [...e.result, { kind: a, node: l }]);
      const c = e.l.length,
        d = e.r.length;
      return (
        (t.kind !== "variadic" ||
          (c >= d && (n.kind === "variadic" || d === 1))) &&
          (e.l = r),
        (n.kind !== "variadic" ||
          (d >= c && (t.kind === "variadic" || c === 1))) &&
          (e.r = i),
        Bi(e)
      );
    },
    _h = e => e.kind === "prefix" || e.kind === "postfix",
    yh = e => t => {
      if (t.props.length || t.index) {
        const r = t.index?.map(i => i[e]) ?? [];
        for (const i of t.props) r.push(i[e]);
        t.undeclared && r.push(`+ (undeclared): ${t.undeclared}`);
        const n = `{ ${r.join(", ")} }`;
        return t.sequence ? `${n} & ${t.sequence.description}` : n;
      }
      return t.sequence?.description ?? "{}";
    },
    Qx = yh("description"),
    Xx = yh("expression"),
    bh = (e, t, r) => {
      const n = e.required ? "required" : "optional";
      if (!t.signature.allows(e.key)) return null;
      const i = yr(e.value, t.value, r);
      return i instanceof K
        ? n === "optional"
          ? r.node("optional", {
              key: e.key,
              value: z.intrinsic.never.internal,
            })
          : i.withPrefixKey(e.key, e.kind)
        : null;
    },
    Zx = Ie({
      kind: "structure",
      hasAssociatedError: !1,
      normalize: e => e,
      applyConfig: (e, t) =>
        !e.undeclared && t.onUndeclaredKey !== "ignore"
          ? { ...e, undeclared: t.onUndeclaredKey }
          : e,
      keys: {
        required: {
          child: !0,
          parse: lt("required"),
          reduceIo: (e, t, r) => {
            t.required = ye(
              t.required,
              r.map(n => (e === "in" ? n.rawIn : n.rawOut))
            );
          },
        },
        optional: {
          child: !0,
          parse: lt("optional"),
          reduceIo: (e, t, r) => {
            if (e === "in") {
              t.optional = r.map(n => n.rawIn);
              return;
            }
            for (const n of r)
              t[n.outProp.kind] = ye(t[n.outProp.kind], n.outProp.rawOut);
          },
        },
        index: { child: !0, parse: lt("index") },
        sequence: { child: !0, parse: lt("sequence") },
        undeclared: {
          parse: e => (e === "ignore" ? void 0 : e),
          reduceIo: (e, t, r) => {
            if (r === "reject") {
              t.undeclared = "reject";
              return;
            }
            e === "in" ? delete t.undeclared : (t.undeclared = "reject");
          },
        },
      },
      defaults: { description: Qx },
      intersections: {
        structure: (e, t, r) => {
          const n = { ...e.inner },
            i = { ...t.inner },
            s = new K();
          if (e.undeclared) {
            const l = e.keyof();
            for (const c of t.requiredKeys)
              l.allows(c) ||
                s.add(
                  "presence",
                  z.intrinsic.never.internal,
                  t.propsByKey[c].value,
                  { path: [c] }
                );
            (i.optional &&
              (i.optional = i.optional.filter(c => l.allows(c.key))),
              i.index &&
                (i.index = i.index.flatMap(c => {
                  if (c.signature.extends(l)) return c;
                  const d = yr(l, c.signature, r.$);
                  if (d instanceof K) return [];
                  const u = Ol(d, c.value, r.$);
                  return (
                    u.required && (i.required = Hr(i.required, u.required)),
                    u.optional && (i.optional = Hr(i.optional, u.optional)),
                    u.index ?? []
                  );
                })));
          }
          if (t.undeclared) {
            const l = t.keyof();
            for (const c of e.requiredKeys)
              l.allows(c) ||
                s.add(
                  "presence",
                  e.propsByKey[c].value,
                  z.intrinsic.never.internal,
                  { path: [c] }
                );
            (n.optional &&
              (n.optional = n.optional.filter(c => l.allows(c.key))),
              n.index &&
                (n.index = n.index.flatMap(c => {
                  if (c.signature.extends(l)) return c;
                  const d = yr(l, c.signature, r.$);
                  if (d instanceof K) return [];
                  const u = Ol(d, c.value, r.$);
                  return (
                    u.required && (n.required = Hr(n.required, u.required)),
                    u.optional && (n.optional = Hr(n.optional, u.optional)),
                    u.index ?? []
                  );
                })));
          }
          const o = {};
          (e.undeclared || t.undeclared) &&
            (o.undeclared =
              e.undeclared === "reject" || t.undeclared === "reject"
                ? "reject"
                : "delete");
          const a = Js({
            kind: "structure",
            baseInner: o,
            l: Ys(n),
            r: Ys(i),
            roots: [],
            ctx: r,
          });
          return (a instanceof K && s.push(...a), s.length ? s : a);
        },
      },
      reduce: (e, t) => {
        if (!e.required && !e.optional) return;
        const r = {};
        let n = !1;
        const i = e.optional ? [...e.optional] : [];
        if (e.required)
          for (let s = 0; s < e.required.length; s++) {
            const o = e.required[s];
            if ((o.key in r && F(xh(o.key)), (r[o.key] = !0), e.index))
              for (const a of e.index) {
                const l = bh(o, a, t);
                if (l instanceof K) return l;
              }
          }
        if (e.optional)
          for (let s = 0; s < e.optional.length; s++) {
            const o = e.optional[s];
            if ((o.key in r && F(xh(o.key)), (r[o.key] = !0), e.index))
              for (const a of e.index) {
                const l = bh(o, a, t);
                if (l instanceof K) return l;
                l !== null && ((i[s] = l), (n = !0));
              }
          }
        if (n)
          return t.node("structure", { ...e, optional: i }, { prereduced: !0 });
      },
    });
  class ek extends zn {
    impliedBasis = z.intrinsic.object.internal;
    impliedSiblings = this.children.flatMap(t => t.impliedSiblings ?? []);
    props = Hr(this.required, this.optional);
    propsByKey = be(this.props, (t, r) => [r.key, r]);
    propsByKeyReference = st(this.propsByKey);
    expression = Xx(this);
    requiredKeys = this.required?.map(t => t.key) ?? [];
    optionalKeys = this.optional?.map(t => t.key) ?? [];
    literalKeys = [...this.requiredKeys, ...this.optionalKeys];
    _keyof;
    keyof() {
      if (this._keyof) return this._keyof;
      let t = this.$.units(this.literalKeys).branches;
      if (this.index)
        for (const { signature: r } of this.index) t = t.concat(r.branches);
      return (this._keyof = this.$.node("union", t));
    }
    map(t) {
      return this.$.node(
        "structure",
        this.props.flatMap(t).reduce((r, n) => {
          const i = this.propsByKey[n.key];
          if (ot(n))
            return n.kind !== "required" && n.kind !== "optional"
              ? F(
                  `Map result must have kind "required" or "optional" (was ${n.kind})`
                )
              : ((r[n.kind] = ye(r[n.kind], n)), r);
          const s = n.kind ?? i?.kind ?? "required",
            o = be(n, (a, l) => (a in Ml.implementation.keys ? [a, l] : []));
          return ((r[s] = ye(r[s], this.$.node(s, o))), r);
        }, {})
      );
    }
    assertHasKeys(t) {
      const r = t.filter(n => !eo(n, this.keyof()));
      if (r.length) return F(wh(this.expression, r));
    }
    get(t, ...r) {
      let n,
        i = !1;
      const s = ik(t);
      if (
        ((typeof s == "string" || typeof s == "symbol") &&
          this.propsByKey[s] &&
          ((n = this.propsByKey[s].value), (i = this.propsByKey[s].required)),
        this.index)
      )
        for (const a of this.index)
          eo(s, a.signature) && (n = n?.and(a.value) ?? a.value);
      if (this.sequence && eo(s, z.intrinsic.nonNegativeIntegerString))
        if (H(s, "root"))
          this.sequence.variadic &&
            (n = n?.and(this.sequence.element) ?? this.sequence.element);
        else {
          const a = Number.parseInt(s);
          if (a < this.sequence.prevariadic.length) {
            const l = this.sequence.prevariadic[a].node;
            ((n = n?.and(l) ?? l), (i ||= a < this.sequence.prefixLength));
          } else if (this.sequence.variadic) {
            const l = this.$.node("union", this.sequence.variadicOrPostfix);
            n = n?.and(l) ?? l;
          }
        }
      if (!n)
        return this.sequence?.variadic &&
          H(s, "root") &&
          s.extends(z.intrinsic.number)
          ? F(sk(s.expression, this.sequence.expression))
          : F(wh(this.expression, [s]));
      const o = n.get(...r);
      return i ? o : o.or(z.intrinsic.undefined);
    }
    pick(...t) {
      return (
        this.assertHasKeys(t),
        this.$.node("structure", this.filterKeys("pick", t))
      );
    }
    omit(...t) {
      return (
        this.assertHasKeys(t),
        this.$.node("structure", this.filterKeys("omit", t))
      );
    }
    optionalize() {
      const { required: t, ...r } = this.inner;
      return this.$.node("structure", {
        ...r,
        optional: this.props.map(n =>
          n.hasKind("required") ? this.$.node("optional", n.inner) : n
        ),
      });
    }
    require() {
      const { optional: t, ...r } = this.inner;
      return this.$.node("structure", {
        ...r,
        required: this.props.map(n =>
          n.hasKind("optional") ? { key: n.key, value: n.value } : n
        ),
      });
    }
    merge(t) {
      const r = this.filterKeys("omit", [t.keyof()]);
      return (
        t.required && (r.required = ye(r.required, t.required)),
        t.optional && (r.optional = ye(r.optional, t.optional)),
        t.index && (r.index = ye(r.index, t.index)),
        t.sequence && (r.sequence = t.sequence),
        t.undeclared ? (r.undeclared = t.undeclared) : delete r.undeclared,
        this.$.node("structure", r)
      );
    }
    filterKeys(t, r) {
      const n = mp(this.inner),
        i = s => {
          const o = r.some(a => eo(s, a));
          return t === "pick" ? o : !o;
        };
      return (
        n.required && (n.required = n.required.filter(s => i(s.key))),
        n.optional && (n.optional = n.optional.filter(s => i(s.key))),
        n.index && (n.index = n.index.filter(s => i(s.signature))),
        n
      );
    }
    traverseAllows = (t, r) => this._traverse("Allows", t, r);
    traverseApply = (t, r) => this._traverse("Apply", t, r);
    _traverse = (t, r, n) => {
      const i = n?.currentErrorCount ?? 0;
      for (let s = 0; s < this.props.length; s++)
        if (t === "Allows") {
          if (!this.props[s].traverseAllows(r, n)) return !1;
        } else if (
          (this.props[s].traverseApply(r, n),
          n.failFast && n.currentErrorCount > i)
        )
          return !1;
      if (this.sequence) {
        if (t === "Allows") {
          if (!this.sequence.traverseAllows(r, n)) return !1;
        } else if (
          (this.sequence.traverseApply(r, n),
          n.failFast && n.currentErrorCount > i)
        )
          return !1;
      }
      if (this.index || this.undeclared === "reject") {
        const s = Object.keys(r);
        s.push(...Object.getOwnPropertySymbols(r));
        for (let o = 0; o < s.length; o++) {
          const a = s[o];
          if (this.index) {
            for (const l of this.index)
              if (l.signature.traverseAllows(a, n)) {
                if (t === "Allows") {
                  if (!_r(a, () => l.value.traverseAllows(r[a], n), n))
                    return !1;
                } else if (
                  (_r(a, () => l.value.traverseApply(r[a], n), n),
                  n.failFast && n.currentErrorCount > i)
                )
                  return !1;
              }
          }
          if (
            this.undeclared === "reject" &&
            !this.declaresKey(a) &&
            (t === "Allows" ||
              (n.errorFromNodeContext({
                code: "predicate",
                expected: "removed",
                actual: "",
                relativePath: [a],
                meta: this.meta,
              }),
              n.failFast))
          )
            return !1;
        }
      }
      return (
        this.structuralMorph &&
          n &&
          !n.hasError() &&
          n.queueMorphs([this.structuralMorph]),
        !0
      );
    };
    get defaultable() {
      return this.cacheGetter(
        "defaultable",
        this.optional?.filter(t => t.hasDefault()) ?? []
      );
    }
    declaresKey = t =>
      t in this.propsByKey ||
      this.index?.some(r => r.signature.allows(t)) ||
      (this.sequence !== void 0 &&
        z.intrinsic.nonNegativeIntegerString.allows(t));
    _compileDeclaresKey(t) {
      const r = [];
      if (
        (this.props.length && r.push(`k in ${this.propsByKeyReference}`),
        this.index)
      )
        for (const n of this.index)
          r.push(t.invoke(n.signature, { kind: "Allows", arg: "k" }));
      return (
        this.sequence &&
          r.push("$ark.intrinsic.nonNegativeIntegerString.allows(k)"),
        r.join(" || ") || "false"
      );
    }
    get structuralMorph() {
      return this.cacheGetter("structuralMorph", rk(this));
    }
    structuralMorphRef = this.structuralMorph && st(this.structuralMorph);
    compile(t) {
      t.traversalKind === "Apply" && t.initializeErrorCount();
      for (const r of this.props)
        (t.check(r), t.traversalKind === "Apply" && t.returnIfFailFast());
      if (
        (this.sequence &&
          (t.check(this.sequence),
          t.traversalKind === "Apply" && t.returnIfFailFast()),
        (this.index || this.undeclared === "reject") &&
          (t.const("keys", "Object.keys(data)"),
          t.line("keys.push(...Object.getOwnPropertySymbols(data))"),
          t.for("i < keys.length", () => this.compileExhaustiveEntry(t))),
        t.traversalKind === "Allows")
      )
        return t.return(!0);
      this.structuralMorphRef &&
        t.if(
          "ctx && !ctx.hasError()",
          () => (t.line("ctx.queueMorphs(["), nk(t, this), t.line("])"))
        );
    }
    compileExhaustiveEntry(t) {
      if ((t.const("k", "keys[i]"), this.index))
        for (const r of this.index)
          t.if(`${t.invoke(r.signature, { arg: "k", kind: "Allows" })}`, () =>
            t.traverseKey("k", "data[k]", r.value)
          );
      return (
        this.undeclared === "reject" &&
          t.if(`!(${this._compileDeclaresKey(t)})`, () =>
            t.traversalKind === "Allows"
              ? t.return(!1)
              : t
                  .line(
                    `ctx.errorFromNodeContext({ code: "predicate", expected: "removed", actual: "", relativePath: [k], meta: ${this.compiledMeta} })`
                  )
                  .if("ctx.failFast", () => t.return())
          ),
        t
      );
    }
    reduceJsonSchema(t, r) {
      switch (t.type) {
        case "object":
          return this.reduceObjectJsonSchema(t, r);
        case "array":
          const n = this.sequence?.reduceJsonSchema(t, r) ?? t;
          return this.props.length || this.index
            ? r.fallback.arrayObject({
                code: "arrayObject",
                base: n,
                object: this.reduceObjectJsonSchema({ type: "object" }, r),
              })
            : n;
        default:
          return je.throwInternalOperandError("structure", t);
      }
    }
    reduceObjectJsonSchema(t, r) {
      if (this.props.length) {
        t.properties = {};
        for (const n of this.props) {
          const i = n.value.toJsonSchemaRecurse(r);
          if (typeof n.key == "symbol") {
            r.fallback.symbolKey({
              code: "symbolKey",
              base: t,
              key: n.key,
              value: i,
              optional: n.optional,
            });
            continue;
          }
          if (n.hasDefault()) {
            const s = typeof n.default == "function" ? n.default() : n.default;
            i.default = z.intrinsic.jsonData.allows(s)
              ? s
              : r.fallback.defaultValue({
                  code: "defaultValue",
                  base: i,
                  value: s,
                });
          }
          t.properties[n.key] = i;
        }
        this.requiredKeys.length &&
          t.properties &&
          (t.required = this.requiredKeys.filter(
            n => typeof n == "string" && n in t.properties
          ));
      }
      if (this.index)
        for (const n of this.index) {
          const i = n.value.toJsonSchemaRecurse(r);
          if (n.signature.equals(z.intrinsic.string)) {
            t.additionalProperties = i;
            continue;
          }
          for (const s of n.signature.branches) {
            if (!s.extends(z.intrinsic.string)) {
              t = r.fallback.symbolKey({
                code: "symbolKey",
                base: t,
                key: null,
                value: i,
                optional: !1,
              });
              continue;
            }
            let o = { type: "string" };
            if (
              (s.hasKind("morph") &&
                (o = r.fallback.morph({
                  code: "morph",
                  base: s.rawIn.toJsonSchemaRecurse(r),
                  out: s.rawOut.toJsonSchemaRecurse(r),
                })),
              !s.hasKind("intersection"))
            )
              return Le(`Unexpected index branch kind ${s.kind}.`);
            const { pattern: a } = s.inner;
            if (a) {
              const l = Object.assign(o, { pattern: a[0].rule });
              for (let c = 1; c < a.length; c++)
                o = r.fallback.patternIntersection({
                  code: "patternIntersection",
                  base: l,
                  pattern: a[c].rule,
                });
              ((t.patternProperties ??= {}),
                (t.patternProperties[l.pattern] = i));
            }
          }
        }
      return (
        this.undeclared &&
          !t.additionalProperties &&
          (t.additionalProperties = !1),
        t
      );
    }
  }
  const Pl = {},
    tk = e => {
      let t = "";
      for (let r = 0; r < e.defaultable.length; r++)
        t += e.defaultable[r].defaultValueMorphRef;
      if (
        (e.sequence?.defaultValueMorphsReference &&
          (t += e.sequence?.defaultValueMorphsReference),
        e.undeclared === "delete")
      ) {
        if (((t += "delete !("), e.required))
          for (const r of e.required) t += r.compiledKey + " | ";
        if (e.optional) for (const r of e.optional) t += r.compiledKey + " | ";
        if (e.index) for (const r of e.index) t += r.signature.id + " | ";
        if (e.sequence)
          if (e.sequence.maxLength === null) t += X.nonNegativeIntegerString.id;
          else for (let r = 0; r < e.sequence.tuple.length; r++) t += r + " | ";
        t += ")";
      }
      return t;
    },
    rk = e => {
      const t = tk(e);
      if (!t) return;
      if (Pl[t]) return Pl[t];
      const r = (n, i) => {
        for (let s = 0; s < e.defaultable.length; s++)
          e.defaultable[s].key in n || e.defaultable[s].defaultValueMorph(n, i);
        if (e.sequence?.defaultables)
          for (
            let s = n.length - e.sequence.prefixLength;
            s < e.sequence.defaultables.length;
            s++
          )
            e.sequence.defaultValueMorphs[s](n, i);
        if (e.undeclared === "delete")
          for (const s in n) e.declaresKey(s) || delete n[s];
        return n;
      };
      return (Pl[t] = r);
    },
    nk = (e, t) => {
      const n = `(data${t.defaultable.some(i => i.defaultValueMorph.length === 2) || t.sequence?.defaultValueMorphs.some(i => i.length === 2) ? ", ctx" : ""})`;
      return e.block(`${n} => `, i => {
        for (let s = 0; s < t.defaultable.length; s++) {
          const { serializedKey: o, defaultValueMorphRef: a } =
            t.defaultable[s];
          i.if(`!(${o} in data)`, l => l.line(`${a}${n}`));
        }
        return (
          t.sequence?.defaultables &&
            i.for(
              `i < ${t.sequence.defaultables.length}`,
              s => s.set("data[i]", 5),
              `data.length - ${t.sequence.prefixLength}`
            ),
          t.undeclared === "delete" &&
            i.forIn("data", s =>
              s.if(`!(${t._compileDeclaresKey(s)})`, o =>
                o.line("delete data[k]")
              )
            ),
          i.return("data")
        );
      });
    },
    vh = { implementation: Zx, Node: ek },
    ik = e => (
      H(e, "root") && e.hasKind("unit") && (e = e.unit),
      typeof e == "number" && (e = `${e}`),
      e
    ),
    sk = (e, t) =>
      `${e} is not allowed as an array index on ${t}. Use the 'nonNegativeIntegerString' keyword instead.`,
    Ol = (e, t, r) => {
      const [n, i] = ow(e.branches, o => o.hasKind("unit"));
      if (!n.length)
        return { index: r.node("index", { signature: e, value: t }) };
      const s = {};
      for (const o of n) {
        const a = r.node("required", { key: o.unit, value: t });
        s[a.kind] = ye(s[a.kind], a);
      }
      return (
        i.length && (s.index = r.node("index", { signature: i, value: t })),
        s
      );
    },
    ok = e => (H(e, "root") ? e.expression : ge(e)),
    wh = (e, t) =>
      `Key${t.length === 1 ? "" : "s"} ${t.map(ok).join(", ")} ${t.length === 1 ? "does" : "do"} not exist on ${e}`,
    xh = e => `Duplicate key ${Nn(e)}`,
    ro = {
      ...W1,
      alias: $l.implementation,
      domain: El.implementation,
      unit: uh.implementation,
      proto: to.implementation,
      union: ah.implementation,
      morph: sh.implementation,
      intersection: nh.implementation,
      divisor: Op.implementation,
      pattern: Up.implementation,
      predicate: Pp.implementation,
      required: ph.implementation,
      optional: Ml.implementation,
      index: fh.implementation,
      sequence: hh.implementation,
      structure: vh.implementation,
    };
  ((z.defaultConfig = yw(
    Object.assign(
      be(ro, (e, t) => [e, t.defaults]),
      {
        jitless: Sw(),
        clone: ww,
        onUndeclaredKey: "ignore",
        exactOptionalPropertyTypes: !0,
        numberAllowsNaN: !1,
        dateAllowsInvalid: !1,
        onFail: null,
        keywords: {},
        toJsonSchema: je.defaultConfig,
      }
    )
  )),
    (z.resolvedConfig = yl(z.defaultConfig, z.config)));
  const ak = {
    ...H1,
    alias: $l.Node,
    domain: El.Node,
    unit: uh.Node,
    proto: to.Node,
    union: ah.Node,
    morph: sh.Node,
    intersection: nh.Node,
    divisor: Op.Node,
    pattern: Up.Node,
    predicate: Pp.Node,
    required: ph.Node,
    optional: Ml.Node,
    index: fh.Node,
    sequence: hh.Node,
    structure: vh.Node,
  };
  class Tl extends hw {
    get [gr]() {
      return "module";
    }
  }
  const kh = (e, t) =>
      new Tl(
        be(e, (r, n) => [r, H(n, "module") ? kh(n, t) : t.bindReference(n)])
      ),
    lk = e =>
      tt(e) ? e : "branches" in e && tt(e.branches) ? e.branches : void 0,
    ck = (e, t) => F(`Node of kind ${t} is not valid as a ${e} definition`),
    Sh = e => `#${e} duplicates public alias ${e}`,
    Rl = {};
  z.ambient ??= {};
  let Mh;
  const Ch = "function $",
    uk = e => $h(e, Ah(e)),
    $h = (e, t) => {
      const r = t.write(Ch, 4),
        n = t.compile()();
      for (const i of e)
        i.precompilation ||
          ((i.traverseAllows = n[`${i.id}Allows`].bind(n)),
          i.isRoot() &&
            !i.allowsRequiresContext &&
            (i.allows = i.traverseAllows),
          (i.traverseApply = n[`${i.id}Apply`].bind(n)),
          n[`${i.id}Optimistic`] &&
            (i.traverseOptimistic = n[`${i.id}Optimistic`].bind(n)),
          (i.precompilation = r));
    },
    Ah = e =>
      new fp().return(
        e.reduce(
          (t, r) => {
            const n = new ml({ kind: "Allows" }).indent();
            r.compile(n);
            const i = n.write(`${r.id}Allows`),
              s = new ml({ kind: "Apply" }).indent();
            r.compile(s);
            const o = s.write(`${r.id}Apply`),
              a = `${t}${i},
${o},
`;
            if (!r.hasKind("union")) return a;
            const l = new ml({ kind: "Allows", optimistic: !0 }).indent();
            r.compile(l);
            const c = l.write(`${r.id}Optimistic`);
            return `${a}${c},
`;
          },
          `{
`
        ) + "}"
      );
  class Eh {
    config;
    resolvedConfig;
    name;
    get [gr]() {
      return "scope";
    }
    referencesById = {};
    references = [];
    resolutions = {};
    exportedNames = [];
    aliases = {};
    resolved = !1;
    nodesByHash = {};
    intrinsic;
    constructor(t, r) {
      ((this.config = yl(z.config, r)),
        (this.resolvedConfig = yl(z.resolvedConfig, r)),
        (this.name =
          this.resolvedConfig.name ??
          `anonymousScope${Object.keys(Rl).length}`),
        this.name in Rl &&
          F(`A Scope already named ${this.name} already exists`),
        (Rl[this.name] = this));
      const n = Object.entries(t).map(i => this.preparseOwnAliasEntry(...i));
      for (const [i, s] of n) {
        let o = i;
        if (
          (i[0] === "#"
            ? ((o = i.slice(1)),
              o in this.aliases && F(Sh(o)),
              (this.aliases[o] = s))
            : (o in this.aliases && F(Sh(i)),
              (this.aliases[o] = s),
              this.exportedNames.push(o)),
          !H(s, "module") && !H(s, "generic") && !zs(s))
        ) {
          const a = this.preparseOwnDefinitionFormat(s, { alias: o });
          this.resolutions[o] = H(a, "root")
            ? this.bindReference(a)
            : this.createParseContext(a).id;
        }
      }
      ((Mh ??= this.node(
        "union",
        {
          branches: [
            "string",
            "number",
            "object",
            "bigint",
            "symbol",
            { unit: !0 },
            { unit: !1 },
            { unit: void 0 },
            { unit: null },
          ],
        },
        { prereduced: !0 }
      )),
        (this.nodesByHash[Mh.hash] = this.node(
          "intersection",
          {},
          { prereduced: !0 }
        )),
        (this.intrinsic = z.intrinsic
          ? be(z.intrinsic, (i, s) =>
              i.startsWith("json") ? [] : [i, this.bindReference(s)]
            )
          : {}));
    }
    cacheGetter(t, r) {
      return (Object.defineProperty(this, t, { value: r }), r);
    }
    get internal() {
      return this;
    }
    _json;
    get json() {
      return (this._json || this.export(), this._json);
    }
    defineSchema(t) {
      return t;
    }
    generic = (...t) => {
      const r = this;
      return (n, i) => new Qs(t, i ? new Ip(n) : n, r, r, i ?? null);
    };
    units = (t, r) => {
      const n = [];
      for (const s of t) n.includes(s) || n.push(s);
      const i = n.map(s => this.node("unit", { unit: s }, r));
      return this.node("union", i, { ...r, prereduced: !0 });
    };
    lazyResolutions = [];
    lazilyResolve(t, r) {
      const n = this.node(
        "alias",
        { reference: r ?? "synthetic", resolve: t },
        { prereduced: !0 }
      );
      return (this.resolved || this.lazyResolutions.push(n), n);
    }
    schema = (t, r) => this.finalize(this.parseSchema(t, r));
    parseSchema = (t, r) => this.node(Xs(t), t, r);
    preparseNode(t, r, n) {
      let i = typeof t == "string" ? t : Xs(r, t);
      if (ot(r) && r.kind === i) return r;
      if (i === "alias" && !n?.prereduced) {
        const { reference: a } = $l.implementation.normalize(r, this);
        if (a.startsWith("$")) {
          const l = this.resolveRoot(a.slice(1));
          ((r = l), (i = l.kind));
        }
      } else if (i === "union" && Yr(r, "object")) {
        const a = lk(r);
        a?.length === 1 && ((r = a[0]), (i = Xs(r)));
      }
      if (ot(r) && r.kind === i) return r;
      const o = ro[i].normalize?.(r, this) ?? r;
      return ot(o)
        ? o.kind === i
          ? o
          : ck(i, o.kind)
        : { ...n, $: this, kind: i, def: o, prefix: n.alias ?? i };
    }
    bindReference(t) {
      let r;
      return (
        ot(t)
          ? (r = t.$ === this ? t : new t.constructor(t.attachments, this))
          : (r =
              t.$ === this ? t : new Qs(t.params, t.bodyDef, t.$, this, t.hkt)),
        this.resolved || Object.assign(this.referencesById, r.referencesById),
        r
      );
    }
    resolveRoot(t) {
      return this.maybeResolveRoot(t) ?? F(Rh(t));
    }
    maybeResolveRoot(t) {
      const r = this.maybeResolve(t);
      if (!H(r, "generic")) return r;
    }
    maybeResolveSubalias(t) {
      return Nl(this.aliases, t) ?? Nl(this.ambient, t);
    }
    get ambient() {
      return z.ambient;
    }
    maybeResolve(t) {
      const r = this.resolutions[t];
      if (r) {
        if (typeof r != "string") return this.bindReference(r);
        const i = wt[r];
        if (H(i, "root")) return (this.resolutions[t] = i);
        if (H(i, "context")) {
          if (i.phase === "resolving")
            return this.node(
              "alias",
              { reference: `$${t}` },
              { prereduced: !0 }
            );
          if (i.phase === "resolved")
            return Le(
              `Unexpected resolved context for was uncached by its scope: ${ge(i)}`
            );
          i.phase = "resolving";
          const s = this.bindReference(this.parseOwnDefinitionFormat(i.def, i));
          return (
            (i.phase = "resolved"),
            (wt[s.id] = s),
            (wt[i.id] = s),
            (this.resolutions[t] = s)
          );
        }
        return Le(`Unexpected nodesById entry for ${r}: ${ge(i)}`);
      }
      let n = this.aliases[t] ?? this.ambient?.[t];
      return n
        ? ((n = this.normalizeRootScopeValue(n)),
          H(n, "generic")
            ? (this.resolutions[t] = this.bindReference(n))
            : H(n, "module")
              ? (n.root || F(Nh(t)),
                (this.resolutions[t] = this.bindReference(n.root)))
              : (this.resolutions[t] = this.parse(n, { alias: t })))
        : this.maybeResolveSubalias(t);
    }
    createParseContext(t) {
      const r = t.id ?? Wp(t.prefix);
      return (wt[r] = Object.assign(t, {
        [gr]: "context",
        $: this,
        id: r,
        phase: "unresolved",
      }));
    }
    traversal(t) {
      return new Fn(t, this.resolvedConfig);
    }
    import(...t) {
      return new Tl(be(this.export(...t), (r, n) => [`#${r}`, n]));
    }
    precompilation;
    _exportedResolutions;
    _exports;
    export(...t) {
      if (!this._exports) {
        this._exports = {};
        for (const n of this.exportedNames) {
          const i = this.aliases[n];
          this._exports[n] = H(i, "module")
            ? kh(i, this)
            : Ph(this.maybeResolve(n));
        }
        for (const n of this.lazyResolutions) n.resolution;
        if (
          ((this._exportedResolutions = Th(this, this._exports)),
          (this._json = Oh(this._exportedResolutions)),
          Object.assign(this.resolutions, this._exportedResolutions),
          (this.references = Object.values(this.referencesById)),
          !this.resolvedConfig.jitless)
        ) {
          const n = Ah(this.references);
          ((this.precompilation = n.write(Ch, 4)), $h(this.references, n));
        }
        this.resolved = !0;
      }
      const r = t.length ? t : this.exportedNames;
      return new Tl(be(r, (n, i) => [i, this._exports[i]]));
    }
    resolve(t) {
      return this.export()[t];
    }
    node = (t, r, n = {}) => {
      const i = this.preparseNode(t, r, n);
      if (ot(i)) return this.bindReference(i);
      const s = this.createParseContext(i),
        o = Hp(s),
        a = this.bindReference(o);
      return (wt[s.id] = a);
    };
    parse = (t, r = {}) => this.finalize(this.parseDefinition(t, r));
    parseDefinition(t, r = {}) {
      if (H(t, "root")) return this.bindReference(t);
      const n = this.preparseOwnDefinitionFormat(t, r);
      if (H(n, "root")) return this.bindReference(n);
      const i = this.createParseContext(n);
      wt[i.id] = i;
      let s = this.bindReference(this.parseOwnDefinitionFormat(t, i));
      return (s.isCyclic && (s = Z1(s, i.id)), (wt[i.id] = s), s);
    }
    finalize(t) {
      return (
        Ph(t),
        !t.precompilation && !this.resolvedConfig.jitless && uk(t.references),
        t
      );
    }
  }
  class Ih extends Eh {
    parseOwnDefinitionFormat(t, r) {
      return Hp(r);
    }
    preparseOwnDefinitionFormat(t, r) {
      return this.preparseNode(Xs(t), t, r);
    }
    preparseOwnAliasEntry(t, r) {
      return [t, r];
    }
    normalizeRootScopeValue(t) {
      return t;
    }
  }
  const Ph = e => {
      const t = e.references.filter(r => r.hasKind("alias"));
      for (const r of t) {
        Object.assign(r.referencesById, r.resolution.referencesById);
        for (const n of e.references)
          r.id in n.referencesById &&
            Object.assign(n.referencesById, r.referencesById);
      }
      return e;
    },
    Oh = e =>
      be(e, (t, r) => [
        t,
        H(r, "root") || H(r, "generic")
          ? r.json
          : H(r, "module")
            ? Oh(r)
            : Le(`Unexpected resolution ${ge(r)}`),
      ]),
    Nl = (e, t) => {
      const r = t.indexOf(".");
      if (r === -1) return;
      const n = t.slice(0, r),
        i = e[n];
      if (i === void 0) return;
      if (!H(i, "module")) return F(dk(n));
      const s = t.slice(r + 1),
        o = i[s];
      if (o === void 0) return Nl(i, s);
      if (H(o, "root") || H(o, "generic")) return o;
      if (H(o, "module")) return o.root ?? F(Nh(t));
      Le(`Unexpected resolution for alias '${t}': ${ge(o)}`);
    },
    Ll = (e, t) => new Ih(e, t),
    Vi = new Ih({}),
    Th = (e, t) => {
      const r = {};
      for (const n in t) {
        const i = t[n];
        if (H(i, "module")) {
          const s = Th(e, i),
            o = be(s, (a, l) => [`${n}.${a}`, l]);
          Object.assign(r, o);
        } else
          H(i, "root") || H(i, "generic")
            ? (r[n] = i)
            : Le(`Unexpected scope resolution ${ge(i)}`);
      }
      return r;
    },
    Rh = e => `'${e}' is unresolvable`,
    dk = e => `'${e}' must reference a module to be accessed using dot syntax`,
    Nh = e => `Reference to submodule '${e}' must specify an alias`;
  Vi.export();
  const ve = Vi.schema,
    Fl = Vi.node;
  Vi.defineSchema;
  const br = Vi.generic,
    Lh = "^(?:0|[1-9]\\d*)$",
    fk = new RegExp(Lh);
  st(fk);
  const Fh = Ll(
    {
      bigint: "bigint",
      boolean: [{ unit: !1 }, { unit: !0 }],
      false: { unit: !1 },
      never: [],
      null: { unit: null },
      number: "number",
      object: "object",
      string: "string",
      symbol: "symbol",
      true: { unit: !0 },
      unknown: {},
      undefined: { unit: void 0 },
      Array,
      Date,
    },
    { prereducedAliases: !0 }
  ).export();
  z.intrinsic = { ...Fh };
  const Dh = Ll(
    {
      integer: { domain: "number", divisor: 1 },
      lengthBoundable: ["string", Array],
      key: ["string", "symbol"],
      nonNegativeIntegerString: { domain: "string", pattern: Lh },
    },
    { prereducedAliases: !0 }
  ).export();
  Object.assign(z.intrinsic, Dh);
  const pk = Ll(
      {
        jsonPrimitive: [
          "string",
          "number",
          { unit: !0 },
          { unit: !1 },
          { unit: null },
        ],
        jsonObject: {
          domain: "object",
          index: { signature: "string", value: "$jsonData" },
        },
        jsonData: ["$jsonPrimitive", "$jsonObject"],
      },
      { prereducedAliases: !0 }
    ).export(),
    X = {
      ...Fh,
      ...Dh,
      ...pk,
      emptyStructure: Fl("structure", {}, { prereduced: !0 }),
    };
  z.intrinsic = { ...X };
  const zh = (e, t) => new RegExp(e, t);
  Object.assign(zh, { as: zh });
  const hk = e =>
      typeof e == "string" &&
      e[0] === "d" &&
      (e[1] === "'" || e[1] === '"') &&
      e[e.length - 1] === e[1],
    Bh = e => e.toString() !== "Invalid Date",
    mk = e => e.slice(2, -1),
    Vh = e => `'${e}' could not be parsed by the Date constructor`,
    gk = (e, t) => _k(e, t),
    _k = (e, t) => {
      const r = new Date(e);
      if (Bh(r)) return r;
      const n = qw(e);
      if (n !== void 0) {
        const i = new Date(n);
        if (Bh(i)) return i;
      }
      return t ? F(t === !0 ? Vh(e) : t) : void 0;
    },
    yk = ve({
      proto: "Array",
      sequence: "string",
      required: { key: "groups", value: ["object", { unit: void 0 }] },
    }),
    Dl = (e, t) => {
      const r = e.scanner.shiftUntilEscapable(wk[Uh[t]]);
      if (e.scanner.lookahead === "") return e.error(kk(r, t));
      if ((e.scanner.shift(), t in jh)) {
        let n;
        try {
          n = new RegExp(r);
        } catch (i) {
          F(String(i));
        }
        ((e.root = e.ctx.$.node(
          "intersection",
          { domain: "string", pattern: r },
          { prereduced: !0 }
        )),
          t === "x/" &&
            (e.root = e.ctx.$.node("morph", {
              in: e.root,
              morphs: i => n.exec(i),
              declaredOut: yk,
            })));
      } else if (Gt(t, qh)) e.root = e.ctx.$.node("unit", { unit: r });
      else {
        const n = gk(r, Vh(r));
        e.root = e.ctx.$.node("unit", { meta: r, unit: n });
      }
    },
    qh = { "'": 1, '"': 1 },
    bk = { "/": 1, "'": 1, '"': 1 },
    vk = { "d'": "'", 'd"': '"', "'": "'", '"': '"' },
    jh = { "/": "/", "x/": "/" },
    Uh = { ...vk, ...jh },
    wk = {
      "'": e => e.lookahead === "'",
      '"': e => e.lookahead === '"',
      "/": e => e.lookahead === "/",
    },
    xk = { '"': "double-quote", "'": "single-quote", "/": "forward slash" },
    kk = (e, t) => `${t}${e} requires a closing ${xk[Uh[t]]}`,
    Sk = e =>
      `Private type references should not include '#'. Use '${e}' instead.`,
    Kh =
      "Optional definitions like 'string?' are only valid as properties in an object or tuple",
    Gh =
      "Defaultable definitions like 'number = 0' are only valid as properties in an object or tuple",
    jn = {
      "<": 1,
      ">": 1,
      "=": 1,
      "|": 1,
      "&": 1,
      ")": 1,
      "[": 1,
      "%": 1,
      ",": 1,
      ":": 1,
      "?": 1,
      "#": 1,
      ...Bs,
    },
    Mk = (e, t) =>
      e === ">"
        ? t[0] === "="
          ? t[1] === "="
          : t.trimStart() === "" || Gt(t.trimStart()[0], jn)
        : e === "="
          ? t[0] !== "="
          : e === "," || e === "?",
    Ck = (e, t, r) => Wh(e, t, r, []),
    Wh = (e, t, r, n) => {
      const i = r.parseUntilFinalizer();
      return (
        n.push(i.root),
        i.finalizer === ">"
          ? n.length !== t.params.length
            ? r.error(
                Hh(
                  e,
                  t.names,
                  n.map(s => s.expression)
                )
              )
            : n
          : i.finalizer === ","
            ? Wh(e, t, r, n)
            : i.error(up(">"))
      );
    },
    Hh = (e, t, r) =>
      `${e}<${t.join(", ")}> requires exactly ${t.length} args (got ${r.length}${r.length === 0 ? "" : `: ${r.join(", ")}`})`,
    zl = e => {
      const t = e.scanner.shiftUntilLookahead(jn);
      t === "keyof" ? e.addPrefix("keyof") : (e.root = Ak(e, t));
    },
    $k = (e, t, r) => {
      if ((r.scanner.shiftUntilNonWhitespace(), r.scanner.shift() !== "<"))
        return r.error(Hh(e, t.names, []));
      const i = Ck(e, t, r);
      return t(...i);
    },
    Ak = (e, t) =>
      Ek(e, t) ??
      Ik(e, t) ??
      e.error(
        t === ""
          ? e.scanner.lookahead === "#"
            ? Sk(e.shiftedBy(1).scanner.shiftUntilLookahead(jn))
            : Jh(e)
          : Rh(t)
      ),
    Ek = (e, t) => {
      if (e.ctx.args?.[t]) {
        const n = e.ctx.args[t];
        return typeof n != "string"
          ? n
          : e.ctx.$.node("alias", { reference: n }, { prereduced: !0 });
      }
      const r = e.ctx.$.maybeResolve(t);
      if (H(r, "root")) return r;
      if (r !== void 0)
        return H(r, "generic")
          ? $k(t, r, e)
          : F(`Unexpected resolution ${ge(r)}`);
    },
    Ik = (e, t) => {
      const r = jw(t);
      if (r !== void 0) return e.ctx.$.node("unit", { unit: r });
      const n = Kw(t);
      if (n !== void 0) return e.ctx.$.node("unit", { unit: n });
    },
    Jh = e => {
      const t = e.previousOperator();
      return t ? Yh(t, e.scanner.unscanned) : Pk(e.scanner.unscanned);
    },
    Yh = (e, t = "") =>
      `Token '${e}' requires a right operand${t ? ` before '${t}'` : ""}`,
    Pk = e => `Expected an expression${e ? ` before '${e}'` : ""}`,
    Qh = e =>
      e.scanner.lookahead === ""
        ? e.error(Jh(e))
        : e.scanner.lookahead === "("
          ? e.shiftedBy(1).reduceGroupOpen()
          : e.scanner.lookaheadIsIn(bk)
            ? Dl(e, e.scanner.shift())
            : e.scanner.lookaheadIsIn(Bs)
              ? Qh(e.shiftedBy(1))
              : e.scanner.lookahead === "d"
                ? e.scanner.nextLookahead in qh
                  ? Dl(e, `${e.scanner.shift()}${e.scanner.shift()}`)
                  : zl(e)
                : e.scanner.lookahead === "x" && e.scanner.nextLookahead === "/"
                  ? e.shiftedBy(2) && Dl(e, "x/")
                  : zl(e),
    Ok = { ">": !0, ">=": !0 },
    Tk = { "<": !0, "<=": !0 },
    no = { "<": ">", ">": "<", "<=": ">=", ">=": "<=", "==": "==" },
    Rk = (e, t) =>
      `Left bounds are only valid when paired with right bounds (try ...${t}${e})`,
    Xh = e =>
      `Left-bounded expressions must specify their limits using < or <= (was ${e})`,
    Nk = (e, t, r, n) =>
      `An expression may have at most one left bound (parsed ${e}${no[t]}, ${r}${no[n]})`,
    Lk = (e, t) => {
      const r = Dk(e, t);
      if (e.root.hasKind("unit")) {
        if (typeof e.root.unit == "number") {
          (e.reduceLeftBound(e.root.unit, r), e.unsetRoot());
          return;
        }
        if (e.root.unit instanceof Date) {
          const n = `d'${e.root.description ?? e.root.unit.toISOString()}'`;
          (e.unsetRoot(), e.reduceLeftBound(n, r));
          return;
        }
      }
      return Bk(e, r);
    },
    Fk = { "<": 1, ">": 1, "=": 1 },
    Dk = (e, t) =>
      e.scanner.lookaheadIs("=") ? `${t}${e.scanner.shift()}` : t,
    Zh = (e, t, r, n) =>
      r.extends(z.intrinsic.number)
        ? typeof t != "number"
          ? F(Bl(e, t, n))
          : e === "=="
            ? ["min", "max"]
            : e[0] === ">"
              ? ["min"]
              : ["max"]
        : r.extends(z.intrinsic.lengthBoundable)
          ? typeof t != "number"
            ? F(Bl(e, t, n))
            : e === "=="
              ? ["exactLength"]
              : e[0] === ">"
                ? ["minLength"]
                : ["maxLength"]
          : r.extends(z.intrinsic.Date)
            ? e === "=="
              ? ["after", "before"]
              : e[0] === ">"
                ? ["after"]
                : ["before"]
            : F(O1(r.expression)),
    zk = e => ({
      rule: hk(e.limit) ? mk(e.limit) : e.limit,
      exclusive: e.comparator.length === 1,
    }),
    Bk = (e, t) => {
      const r = e.unsetRoot(),
        n = e.scanner.location;
      e.parseOperand();
      const i = e.unsetRoot(),
        s = e.scanner.sliceChars(n, e.scanner.location);
      if (
        ((e.root = r),
        !i.hasKind("unit") ||
          (typeof i.unit != "number" && !(i.unit instanceof Date)))
      )
        return e.error(Bl(t, s, "right"));
      const o = i.unit,
        a = t.length === 1,
        l = Zh(t, typeof o == "number" ? o : s, r, "right");
      for (const d of l)
        e.constrainRoot(
          d,
          t === "==" ? { rule: o } : { rule: o, exclusive: a }
        );
      if (!e.branches.leftBound) return;
      if (!Gt(t, Tk)) return e.error(Xh(t));
      const c = Zh(
        e.branches.leftBound.comparator,
        e.branches.leftBound.limit,
        r,
        "left"
      );
      (e.constrainRoot(c[0], zk(e.branches.leftBound)),
        (e.branches.leftBound = null));
    },
    Bl = (e, t, r) =>
      `Comparator ${r === "left" ? no[e] : e} must be ${r === "left" ? "preceded" : "followed"} by a corresponding literal (was ${t})`,
    Vk = e => {
      e.scanner.shiftUntilNonWhitespace();
      const t = e.scanner.shiftUntilLookahead(jn);
      e.root = e.root.brand(t);
    },
    qk = e => {
      e.scanner.shiftUntilNonWhitespace();
      const t = e.scanner.shiftUntilLookahead(jn),
        r = Uw(t, { errorOnFail: em(t) });
      (r === 0 && e.error(em(0)), (e.root = e.root.constrain("divisor", r)));
    },
    em = e =>
      `% operator must be followed by a non-zero integer literal (was ${e})`,
    tm = e => {
      const t = e.scanner.shift();
      return t === ""
        ? e.finalize("")
        : t === "["
          ? e.scanner.shift() === "]"
            ? e.setRoot(e.root.array())
            : e.error(jk)
          : t === "|"
            ? e.scanner.lookahead === ">"
              ? e.shiftedBy(1).pushRootToBranch("|>")
              : e.pushRootToBranch(t)
            : t === "&"
              ? e.pushRootToBranch(t)
              : t === ")"
                ? e.finalizeGroup()
                : Mk(t, e.scanner.unscanned)
                  ? e.finalize(t)
                  : Gt(t, Fk)
                    ? Lk(e, t)
                    : t === "%"
                      ? qk(e)
                      : t === "#"
                        ? Vk(e)
                        : t in Bs
                          ? tm(e)
                          : e.error(Vl(t));
    },
    Vl = (e, t = "") => `'${e}' is not allowed here${t && ` (should be ${t})`}`,
    jk = "Missing expected ']'",
    Uk = e => {
      const t = e.unsetRoot();
      e.parseOperand();
      const r = e.unsetRoot();
      if (!r.hasKind("unit")) return e.error(Kk(r.expression));
      const n = r.unit instanceof Date ? () => new Date(r.unit) : r.unit;
      return [t, "=", n];
    },
    Kk = e => `Default value '${e}' must be a literal value`,
    rm = (e, t) => {
      const r = t.$.maybeResolveRoot(e);
      if (r) return r;
      if (e.endsWith("[]")) {
        const s = t.$.maybeResolveRoot(e.slice(0, -2));
        if (s) return s.array();
      }
      const n = new io(new cp(e), t),
        i = Gk(n);
      return (n.finalizer === ">" && F(Vl(">")), i);
    },
    Gk = e => {
      e.parseOperand();
      let t = ql(e).root;
      return t
        ? (e.finalizer === "="
            ? (t = Uk(e))
            : e.finalizer === "?" && (t = [t, "?"]),
          e.scanner.shiftUntilNonWhitespace(),
          e.scanner.lookahead && F(Vl(e.scanner.lookahead)),
          t)
        : Le(
            `Root was unexpectedly unset after parsing string '${e.scanner.scanned}'`
          );
    },
    ql = e => {
      for (; e.finalizer === void 0; ) Wk(e);
      return e;
    },
    Wk = e => (e.hasRoot() ? e.parseOperator() : e.parseOperand());
  class io {
    root;
    branches = {
      prefixes: [],
      leftBound: null,
      intersection: null,
      union: null,
      pipe: null,
    };
    finalizer;
    groups = [];
    scanner;
    ctx;
    constructor(t, r) {
      ((this.scanner = t), (this.ctx = r));
    }
    error(t) {
      return F(t);
    }
    hasRoot() {
      return this.root !== void 0;
    }
    setRoot(t) {
      this.root = t;
    }
    unsetRoot() {
      const t = this.root;
      return ((this.root = void 0), t);
    }
    constrainRoot(...t) {
      this.root = this.root.constrain(t[0], t[1]);
    }
    finalize(t) {
      if (this.groups.length) return this.error(up(")"));
      (this.finalizeBranches(), (this.finalizer = t));
    }
    reduceLeftBound(t, r) {
      const n = no[r];
      if (!Gt(n, Ok)) return this.error(Xh(r));
      if (this.branches.leftBound)
        return this.error(
          Nk(
            this.branches.leftBound.limit,
            this.branches.leftBound.comparator,
            t,
            n
          )
        );
      this.branches.leftBound = { comparator: n, limit: t };
    }
    finalizeBranches() {
      if ((this.assertRangeUnset(), this.branches.pipe)) {
        (this.pushRootToBranch("|>"), (this.root = this.branches.pipe));
        return;
      }
      if (this.branches.union) {
        (this.pushRootToBranch("|"), (this.root = this.branches.union));
        return;
      }
      if (this.branches.intersection) {
        (this.pushRootToBranch("&"), (this.root = this.branches.intersection));
        return;
      }
      this.applyPrefixes();
    }
    finalizeGroup() {
      this.finalizeBranches();
      const t = this.groups.pop();
      if (!t) return this.error(Qw(")", this.scanner.unscanned));
      this.branches = t;
    }
    addPrefix(t) {
      this.branches.prefixes.push(t);
    }
    applyPrefixes() {
      for (; this.branches.prefixes.length; ) {
        const t = this.branches.prefixes.pop();
        this.root =
          t === "keyof" ? this.root.keyof() : Le(`Unexpected prefix '${t}'`);
      }
    }
    pushRootToBranch(t) {
      (this.assertRangeUnset(), this.applyPrefixes());
      const r = this.root;
      ((this.root = void 0),
        (this.branches.intersection =
          this.branches.intersection?.rawAnd(r) ?? r),
        t !== "&" &&
          ((this.branches.union =
            this.branches.union?.rawOr(this.branches.intersection) ??
            this.branches.intersection),
          (this.branches.intersection = null),
          t !== "|" &&
            ((this.branches.pipe =
              this.branches.pipe?.rawPipeOnce(this.branches.union) ??
              this.branches.union),
            (this.branches.union = null))));
    }
    parseUntilFinalizer() {
      return ql(new io(this.scanner, this.ctx));
    }
    parseOperator() {
      return tm(this);
    }
    parseOperand() {
      return Qh(this);
    }
    assertRangeUnset() {
      if (this.branches.leftBound)
        return this.error(
          Rk(this.branches.leftBound.limit, this.branches.leftBound.comparator)
        );
    }
    reduceGroupOpen() {
      (this.groups.push(this.branches),
        (this.branches = {
          prefixes: [],
          leftBound: null,
          union: null,
          intersection: null,
          pipe: null,
        }));
    }
    previousOperator() {
      return (
        this.branches.leftBound?.comparator ??
        this.branches.prefixes[this.branches.prefixes.length - 1] ??
        (this.branches.intersection
          ? "&"
          : this.branches.union
            ? "|"
            : this.branches.pipe
              ? "|>"
              : void 0)
      );
    }
    shiftedBy(t) {
      return (this.scanner.jumpForward(t), this);
    }
  }
  const Hk = "An empty string is not a valid generic parameter name",
    jl = (e, t, r) => {
      e.shiftUntilNonWhitespace();
      const n = e.shiftUntilLookahead(jn);
      return n === ""
        ? e.lookahead === "" && t.length
          ? t
          : F(Hk)
        : (e.shiftUntilNonWhitespace(), Jk(e, n, t, r));
    },
    nm = "extends ",
    Jk = (e, t, r, n) => {
      if ((e.shiftUntilNonWhitespace(), e.unscanned.startsWith(nm)))
        e.jumpForward(nm.length);
      else return (e.lookahead === "," && e.shift(), r.push(t), jl(e, r, n));
      const i = ql(new io(e, n));
      return (r.push([t, i.root]), jl(e, r, n));
    };
  class Yk extends Er {
    constructor(t) {
      const r = { $: t, raw: t.fn };
      super(
        (...n) => {
          const i = n.indexOf(":"),
            s = i === -1 ? n.length - 1 : i - 1,
            o = n.slice(0, s + 1),
            a = t.parse(o).assertHasKind("intersection");
          let l = t.intrinsic.unknown;
          if (i !== -1) {
            if (i !== n.length - 2) return F(Xk);
            l = t.parse(n[i + 1]);
          }
          return c => new Qk(c, a, l);
        },
        { attach: r }
      );
    }
  }
  class Qk extends Er {
    raw;
    params;
    returns;
    expression;
    constructor(t, r, n) {
      const i = `typed ${t.name}`,
        s = {
          [i]: (...a) => {
            const l = r.assert(a),
              c = t(...l);
            return n.assert(c);
          },
        }[i];
      (super(s), (this.raw = t), (this.params = r), (this.returns = n));
      let o = r.expression;
      (o[0] === "[" && o[o.length - 1] === "]"
        ? (o = o.slice(1, -1))
        : o.endsWith("[]") && (o = `...${o}`),
        (this.expression = `(${o}) => ${n?.expression ?? "unknown"}`));
    }
  }
  const Xk = `":" must be followed by exactly one return type e.g:
fn("string", ":", "number")(s => s.length)`;
  class Zk extends Er {
    $;
    constructor(t) {
      (super((...r) => new so(t)(...r), { bind: t }), (this.$ = t));
    }
    in(t) {
      return new so(this.$, t === void 0 ? void 0 : this.$.parse(t));
    }
    at(t, r) {
      return new so(this.$).at(t, r);
    }
    case(t, r) {
      return new so(this.$).case(t, r);
    }
  }
  class so extends Er {
    $;
    in;
    key;
    branches = [];
    constructor(t, r) {
      (super(n =>
        this.caseEntries(
          Object.entries(n).map(([i, s]) =>
            i === "default" ? [i, s] : [this.$.parse(i), s]
          )
        )
      ),
        (this.$ = t),
        (this.in = r));
    }
    at(t, r) {
      return (
        this.key && F(tS),
        this.branches.length && F(eS),
        (this.key = t),
        r ? this.match(r) : this
      );
    }
    case(t, r) {
      return this.caseEntry(this.$.parse(t), r);
    }
    caseEntry(t, r) {
      const i = (this.key ? this.$.parse({ [this.key]: t }) : t).pipe(r);
      return (this.branches.push(i), this);
    }
    match(t) {
      return this(t);
    }
    strings(t) {
      return this.caseEntries(
        Object.entries(t).map(([r, n]) =>
          r === "default" ? [r, n] : [this.$.node("unit", { unit: r }), n]
        )
      );
    }
    caseEntries(t) {
      for (let r = 0; r < t.length; r++) {
        const [n, i] = t[r];
        if (n === "default")
          return (
            r !== t.length - 1 &&
              F(
                "default may only be specified as the last key of a switch definition"
              ),
            this.default(i)
          );
        if (typeof i != "function")
          return F(`Value for case "${n}" must be a function (was ${Tt(i)})`);
        this.caseEntry(n, i);
      }
      return this;
    }
    default(t) {
      typeof t == "function" && this.case(X.unknown, t);
      const r = { branches: this.branches, ordered: !0 };
      (t === "never" || t === "assert") && (r.meta = { onFail: im });
      const n = this.$.node("union", r);
      if (!this.in) return this.$.finalize(n);
      let i = this.in.pipe(n);
      return (
        (t === "never" || t === "assert") &&
          (i = i.configureReferences({ onFail: im }, "self")),
        this.$.finalize(i)
      );
    }
  }
  const im = e => e.throw(),
    eS =
      "A key matcher must be specified before the first case i.e. match.at('foo') or match.in<object>().at('bar')",
    tS = "At most one key matcher may be specified per expression",
    sm = (e, t) => {
      if (tt(e)) {
        if (e[1] === "=")
          return [t.$.parseOwnDefinitionFormat(e[0], t), "=", e[2]];
        if (e[1] === "?") return [t.$.parseOwnDefinitionFormat(e[0], t), "?"];
      }
      return mm(e, t);
    },
    rS =
      "Only required keys may make their values optional, e.g. { [mySymbol]: ['number', '?'] }",
    nS =
      "Only required keys may specify default values, e.g. { value: 'number = 0' }",
    iS = (e, t) => {
      let r;
      const n = {},
        i = Ds(e);
      for (const [o, a] of i) {
        const l = aS(o);
        if (l.kind === "spread") {
          if (!Ii(n)) return F(oS);
          const f = t.$.parseOwnDefinitionFormat(a, t);
          if (f.equals(X.object)) continue;
          if (!f.hasKind("intersection") || !f.basis?.equals(X.object))
            return F(lS(f.expression));
          r = f.structure;
          continue;
        }
        if (l.kind === "undeclared") {
          (a !== "reject" && a !== "delete" && a !== "ignore" && F(sS(a)),
            (n.undeclared = a));
          continue;
        }
        const c = sm(a, t),
          d = l;
        if (l.kind === "required") {
          tt(c)
            ? Ul(
                n,
                "optional",
                c[1] === "="
                  ? { key: l.normalized, value: c[0], default: c[2] }
                  : { key: l.normalized, value: c[0] },
                t
              )
            : Ul(n, "required", { key: l.normalized, value: c }, t);
          continue;
        }
        if (
          (tt(c) && (c[1] === "?" && F(rS), c[1] === "=" && F(nS)),
          l.kind === "optional")
        ) {
          Ul(n, "optional", { key: l.normalized, value: c }, t);
          continue;
        }
        const u = t.$.parseOwnDefinitionFormat(d.normalized, t),
          h = Ol(u, c, t.$);
        (h.index && (n.index = ye(n.index, h.index)),
          h.required && (n.required = ye(n.required, h.required)));
      }
      const s = t.$.node("structure", n);
      return t.$.parseSchema({ domain: "object", structure: r?.merge(s) ?? s });
    },
    Ul = (e, t, r, n) => {
      e[t] = ye(e[t], n.$.node(t, r));
    },
    sS = e =>
      `Value of '+' key must be 'reject', 'delete', or 'ignore' (was ${ge(e)})`,
    oS = "Spread operator may only be used as the first key in an object",
    aS = e =>
      typeof e == "symbol"
        ? { kind: "required", normalized: e }
        : e[e.length - 1] === "?"
          ? e[e.length - 2] === Pi
            ? { kind: "required", normalized: `${e.slice(0, -2)}?` }
            : { kind: "optional", normalized: e.slice(0, -1) }
          : e[0] === "[" && e[e.length - 1] === "]"
            ? { kind: "index", normalized: e.slice(1, -1) }
            : e[0] === Pi && e[1] === "[" && e[e.length - 1] === "]"
              ? { kind: "required", normalized: e.slice(1) }
              : e === "..."
                ? { kind: "spread" }
                : e === "+"
                  ? { kind: "undeclared" }
                  : {
                      kind: "required",
                      normalized: e === "\\..." ? "..." : e === "\\+" ? "+" : e,
                    },
    lS = e =>
      `Spread operand must resolve to an object literal type (was ${e})`,
    cS = (e, t) => (yS(e) ? cm[e[0]](e, t) : _S(e) ? lm[e[1]](e, t) : null),
    uS = (e, t) => t.$.parseOwnDefinitionFormat(e[1], t).keyof(),
    Kl = (e, t) => {
      if (e[2] === void 0) return F(Yh(e[1], ""));
      const r = t.$.parseOwnDefinitionFormat(e[0], t),
        n = t.$.parseOwnDefinitionFormat(e[2], t);
      if (e[1] === "|") return t.$.node("union", { branches: [r, n] });
      const i = e[1] === "&" ? yr(r, n, t.$) : vl(r, n, t.$);
      return i instanceof K ? i.throw() : i;
    },
    dS = (e, t) => t.$.parseOwnDefinitionFormat(e[0], t).array(),
    fS = (e, t) =>
      typeof e[2] != "function"
        ? F(om("=>", e[2]))
        : t.$.parseOwnDefinitionFormat(e[0], t).pipe(e[2]),
    om = (e, t) =>
      `${e === ":" ? "Narrow" : "Morph"} expression requires a function following '${e}' (was ${typeof t})`,
    pS = (e, t) =>
      typeof e[2] != "function"
        ? F(om(":", e[2]))
        : t.$.parseOwnDefinitionFormat(e[0], t).constrain("predicate", e[2]),
    hS = (e, t) => t.$.parseOwnDefinitionFormat(e[0], t).configure(e[2], e[3]),
    am = e => e,
    mS = am({ "[]": dS, "?": () => F(Kh) }),
    gS = am({
      "|": Kl,
      "&": Kl,
      ":": pS,
      "=>": fS,
      "|>": Kl,
      "@": hS,
      "=": () => F(Gh),
    }),
    lm = { ...mS, ...gS },
    _S = e => lm[e[1]] !== void 0,
    cm = (e => e)({
      keyof: uS,
      instanceof: (e, t) => {
        if (typeof e[1] != "function") return F(um(ol(e[1])));
        const r = e
          .slice(1)
          .map(n =>
            typeof n == "function"
              ? t.$.node("proto", { proto: n })
              : F(um(ol(n)))
          );
        return r.length === 1 ? r[0] : t.$.node("union", { branches: r });
      },
      "===": (e, t) => t.$.units(e.slice(1)),
    }),
    yS = e => cm[e[0]] !== void 0,
    um = e =>
      `Expected a constructor following 'instanceof' operator (was ${e})`,
    bS = (e, t) => {
      let r = [{}],
        n = 0;
      for (; n < e.length; ) {
        let i = !1;
        e[n] === "..." && n < e.length - 1 && ((i = !0), n++);
        const s = sm(e[n], t),
          [o, a, l] = tt(s) ? s : [s];
        if ((n++, i)) {
          if (!o.extends(z.intrinsic.Array)) return F(xS(o.expression));
          r = r.flatMap(c => o.distribute(d => wS(mp(c), d)));
        } else
          r = r.map(c =>
            a === "?" ? dm(c, o) : a === "=" ? vS(c, o, l) : Gl(c, o)
          );
      }
      return t.$.parseSchema(
        r.map(i =>
          Ii(i)
            ? { proto: Array, exactLength: 0 }
            : { proto: Array, sequence: i }
        )
      );
    },
    Gl = (e, t) =>
      e.defaultables || e.optionals
        ? F(e.variadic ? gh : kS)
        : (e.variadic
            ? (e.postfix = ye(e.postfix, t))
            : (e.prefix = ye(e.prefix, t)),
          e),
    dm = (e, t) =>
      e.variadic ? F(hm) : ((e.optionals = ye(e.optionals, t)), e),
    vS = (e, t, r) =>
      e.variadic
        ? F(hm)
        : e.optionals
          ? F(SS)
          : ((e.defaultables = ye(e.defaultables, [[t, r]])), e),
    fm = (e, t) => (
      e.postfix && F(pm),
      e.variadic ? e.variadic.equals(t) || F(pm) : (e.variadic = t.internal),
      e
    ),
    wS = (e, t) => {
      const r = t.select({ method: "find", kind: "sequence" });
      if (!r) return fm(e, z.intrinsic.unknown);
      if (r.prefix) for (const n of r.prefix) Gl(e, n);
      if (r.optionals) for (const n of r.optionals) dm(e, n);
      if ((r.variadic && fm(e, r.variadic), r.postfix))
        for (const n of r.postfix) Gl(e, n);
      return e;
    },
    xS = e => `Spread element must be an array (was ${e})`,
    pm = "A tuple may have at most one variadic element",
    kS = "A required element may not follow an optional element",
    hm = "An optional element may not follow a variadic element",
    SS =
      "A defaultable element may not follow an optional element without a default",
    MS = {},
    mm = (e, t) => {
      if (typeof e == "string") {
        if (t.args && Object.keys(t.args).some(n => e.includes(n)))
          return rm(e, t);
        const r = (MS[t.$.name] ??= {});
        return (r[e] ??= rm(e, t));
      }
      return Yr(e, "object") ? CS(e, t) : F(Wl(Tt(e)));
    },
    CS = (e, t) => {
      const r = sl(e);
      switch (r) {
        case void 0:
          return H(e, "root") ? e : "~standard" in e ? $S(e, t) : iS(e, t);
        case "Array":
          return AS(e, t);
        case "RegExp":
          return t.$.node(
            "intersection",
            { domain: "string", pattern: e },
            { prereduced: !0 }
          );
        case "Function": {
          const n = zs(e) ? e() : e;
          return H(n, "root") ? n : F(Wl("Function"));
        }
        default:
          return F(Wl(r ?? ge(e)));
      }
    },
    $S = (e, t) =>
      t.$.intrinsic.unknown.pipe((r, n) => {
        const i = e["~standard"].validate(r);
        if (!i.issues) return i.value;
        for (const { message: s, path: o } of i.issues)
          o
            ? o.length
              ? n.error({
                  problem: Ew(s),
                  relativePath: o.map(a => (typeof a == "object" ? a.key : a)),
                })
              : n.error({ message: s })
            : n.error({ message: s });
      }),
    AS = (e, t) => cS(e, t) ?? bS(e, t),
    Wl = e => `Type definitions must be strings or objects (was ${e})`;
  class ES extends Er {
    constructor(t) {
      const r = Object.assign(
        {
          errors: Pr,
          hkt: Ht,
          $: t,
          raw: t.parse,
          module: t.constructor.module,
          scope: t.constructor.scope,
          declare: t.declare,
          define: t.define,
          match: t.match,
          generic: t.generic,
          schema: t.schema,
          keywords: t.ambient,
          unit: t.unit,
          enumerated: t.enumerated,
          instanceOf: t.instanceOf,
          valueOf: t.valueOf,
          or: t.or,
          and: t.and,
          merge: t.merge,
          pipe: t.pipe,
          fn: t.fn,
        },
        t.ambientAttachments
      );
      super(
        (...n) => {
          if (n.length === 1) return t.parse(n[0]);
          if (
            n.length === 2 &&
            typeof n[0] == "string" &&
            n[0][0] === "<" &&
            n[0][n[0].length - 1] === ">"
          ) {
            const i = n[0].slice(1, -1),
              s = t.parseGenericParams(i, {});
            return new Qs(s, n[1], t, t, null);
          }
          return t.parse(n);
        },
        { attach: r }
      );
    }
  }
  const qi = z;
  class oo extends Eh {
    get ambientAttachments() {
      if (qi.typeAttachments)
        return this.cacheGetter(
          "ambientAttachments",
          be(qi.typeAttachments, (t, r) => [t, this.bindReference(r)])
        );
    }
    preparseOwnAliasEntry(t, r) {
      const n = t.indexOf("<");
      if (n === -1) {
        if (H(r, "module") || H(r, "generic")) return [t, r];
        const o =
            this.name === "ark"
              ? t
              : t === "root"
                ? this.name
                : `${this.name}.${t}`,
          a = this.resolvedConfig.keywords?.[o];
        return (a && (r = [r, "@", a]), [t, r]);
      }
      t[t.length - 1] !== ">" &&
        F("'>' must be the last character of a generic declaration in a scope");
      const i = t.slice(0, n),
        s = t.slice(n + 1, -1);
      return [
        i,
        () => {
          const o = this.parseGenericParams(s, { alias: i });
          return y1(o, r, this);
        },
      ];
    }
    parseGenericParams(t, r) {
      return jl(
        new cp(t),
        [],
        this.createParseContext({ ...r, def: t, prefix: "generic" })
      );
    }
    normalizeRootScopeValue(t) {
      return zs(t) && !H(t, "generic") ? t() : t;
    }
    preparseOwnDefinitionFormat(t, r) {
      return { ...r, def: t, prefix: r.alias ?? "type" };
    }
    parseOwnDefinitionFormat(t, r) {
      !(r.alias && r.alias in this.aliases) &&
        !r.args &&
        (r.args = { this: r.id });
      const i = mm(t, r);
      if (tt(i)) {
        if (i[1] === "=") return F(Gh);
        if (i[1] === "?") return F(Kh);
      }
      return i;
    }
    unit = t => this.units([t]);
    valueOf = t => this.units(bw(t));
    enumerated = (...t) => this.units(t);
    instanceOf = t => this.node("proto", { proto: t }, { prereduced: !0 });
    or = (...t) => this.schema(t.map(r => this.parse(r)));
    and = (...t) =>
      t.reduce((r, n) => r.and(this.parse(n)), this.intrinsic.unknown);
    merge = (...t) =>
      t.reduce((r, n) => r.merge(this.parse(n)), this.intrinsic.object);
    pipe = (...t) => this.intrinsic.unknown.pipe(...t);
    fn = new Yk(this);
    match = new Zk(this);
    declare = () => ({ type: this.type });
    define(t) {
      return t;
    }
    type = new ES(this);
    static scope = (t, r = {}) => new oo(t, r);
    static module = (t, r = {}) => this.scope(t, r).export();
  }
  const IS = Object.assign(oo.scope, { define: e => e }),
    ue = oo;
  class PS extends Ht {
    description =
      'merge an object\'s properties onto another like `Merge(User, { isAdmin: "true" })`';
  }
  const OS = br(["base", X.object], ["props", X.object])(
      e => e.base.merge(e.props),
      PS
    ),
    TS = ue.module({ Key: X.key, Merge: OS });
  class RS extends Ht {}
  const NS = br("element")(e => {
      const t = e.element.exclude(X.Array),
        r = t.array();
      return t
        .rawOr(r)
        .pipe(Ei)
        .distribute(n => n.assertHasKind("morph").declareOut(r), ve);
    }, RS),
    LS = ue.module(
      {
        root: X.Array,
        readonly: "root",
        index: X.nonNegativeIntegerString,
        liftFrom: NS,
      },
      { name: "Array" }
    ),
    Hl = ve(["string", Oi.FileConstructor]),
    FS = Hl.rawOr(Hl.array()),
    gm = ve({
      meta: "an object representing parsed form data",
      domain: "object",
      index: { signature: "string", value: FS },
    }),
    DS = ue.module(
      {
        root: ["instanceof", FormData],
        value: Hl,
        parsed: gm,
        parse: ve({
          in: FormData,
          morphs: e => {
            const t = {};
            for (const [r, n] of e)
              if (r in t) {
                const i = t[r];
                typeof i == "string" || i instanceof Oi.FileConstructor
                  ? (t[r] = [i, n])
                  : i.push(n);
              } else t[r] = n;
            return t;
          },
          declaredOut: gm,
        }),
      },
      { name: "FormData" }
    ),
    zS = ue.module(
      {
        Int8: ["instanceof", Int8Array],
        Uint8: ["instanceof", Uint8Array],
        Uint8Clamped: ["instanceof", Uint8ClampedArray],
        Int16: ["instanceof", Int16Array],
        Uint16: ["instanceof", Uint16Array],
        Int32: ["instanceof", Int32Array],
        Uint32: ["instanceof", Uint32Array],
        Float32: ["instanceof", Float32Array],
        Float64: ["instanceof", Float64Array],
        BigInt64: ["instanceof", BigInt64Array],
        BigUint64: ["instanceof", BigUint64Array],
      },
      { name: "TypedArray" }
    ),
    BS = { Boolean: 1, Number: 1, String: 1 },
    VS = ue.module({
      ...be({ ...Jf, ...Qf }, (e, t) =>
        e in BS ? [] : [e, ["instanceof", t]]
      ),
      Array: LS,
      TypedArray: zS,
      FormData: DS,
    }),
    qS = ve({
      domain: {
        domain: "number",
        meta: "a number representing a Unix timestamp",
      },
      divisor: { rule: 1, meta: "an integer representing a Unix timestamp" },
      min: { rule: -864e13, meta: "a Unix timestamp after -8640000000000000" },
      max: { rule: 864e13, meta: "a Unix timestamp before 8640000000000000" },
      meta: "an integer representing a safe Unix timestamp",
    }),
    jS = ve({ domain: "number", divisor: 1 }),
    _m = ue.module(
      {
        root: X.number,
        integer: jS,
        epoch: qS,
        safe: ve({
          domain: { domain: "number", numberAllowsNaN: !1 },
          min: Number.MIN_SAFE_INTEGER,
          max: Number.MAX_SAFE_INTEGER,
        }),
        NaN: ["===", Number.NaN],
        Infinity: ["===", Number.POSITIVE_INFINITY],
        NegativeInfinity: ["===", Number.NEGATIVE_INFINITY],
      },
      { name: "number" }
    ),
    Ce = (e, t, r) => {
      const n = {
        domain: "string",
        pattern: { rule: e.source, flags: e.flags, meta: t },
      };
      return (r && (n.meta = { format: r }), Fl("intersection", n));
    },
    ym = Ce(Vs, "a well-formed integer string"),
    bm = ue.module(
      {
        root: ym,
        parse: ve({
          in: ym,
          morphs: (e, t) => {
            const r = Number.parseInt(e);
            return Number.isSafeInteger(r)
              ? r
              : t.error(
                  "an integer in the range Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER"
                );
          },
          declaredOut: X.integer,
        }),
      },
      { name: "string.integer" }
    ),
    US = Ce(/^[\dA-Fa-f]+$/, "hex characters only"),
    KS = ue.module(
      {
        root: Ce(
          /^(?:[\d+/A-Za-z]{4})*(?:[\d+/A-Za-z]{2}==|[\d+/A-Za-z]{3}=)?$/,
          "base64-encoded"
        ),
        url: Ce(
          /^(?:[\w-]{4})*(?:[\w-]{2}(?:==|%3D%3D)?|[\w-]{3}(?:=|%3D)?)?$/,
          "base64url-encoded"
        ),
      },
      { name: "string.base64" }
    ),
    vm = Ce(/^[A-Z].*$/, "capitalized"),
    GS = ue.module(
      {
        root: ve({
          in: "string",
          morphs: e => e.charAt(0).toUpperCase() + e.slice(1),
          declaredOut: vm,
        }),
        preformatted: vm,
      },
      { name: "string.capitalize" }
    ),
    WS = e => {
      const t = e.replace(/[ -]+/g, "");
      let r = 0,
        n,
        i,
        s = !1;
      for (let o = t.length - 1; o >= 0; o--)
        ((n = t.substring(o, o + 1)),
          (i = Number.parseInt(n, 10)),
          s ? ((i *= 2), (r += i >= 10 ? (i % 10) + 1 : i)) : (r += i),
          (s = !s));
      return !!(r % 10 === 0 && t);
    },
    HS = ve({
      domain: "string",
      pattern: {
        meta: "a credit card number",
        rule: /^(?:4\d{12}(?:\d{3,6})?|5[1-5]\d{14}|(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}|6(?:011|5\d\d)\d{12,15}|3[47]\d{13}|3(?:0[0-5]|[68]\d)\d{11}|(?:2131|1800|35\d{3})\d{11}|6[27]\d{14}|^(81\d{14,17}))$/
          .source,
      },
      predicate: { meta: "a credit card number", predicate: WS },
    }),
    JS =
      /^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))(T((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([,.]\d+(?!:))?)?(\17[0-5]\d([,.]\d+)?)?([Zz]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
    wm = ve({
      domain: "string",
      predicate: {
        meta: "a parsable date",
        predicate: e => !Number.isNaN(new Date(e).valueOf()),
      },
    }).assertHasKind("intersection"),
    xm = bm.root.internal
      .narrow((e, t) => {
        const r = Number.parseInt(e),
          n = _m.epoch(r);
        return n instanceof Pr ? (t.errors.merge(n), !1) : !0;
      })
      .configure(
        { description: "an integer string representing a safe Unix timestamp" },
        "self"
      )
      .assertHasKind("intersection"),
    YS = ue.module(
      {
        root: xm,
        parse: ve({ in: xm, morphs: e => new Date(e), declaredOut: X.Date }),
      },
      { name: "string.date.epoch" }
    ),
    km = Ce(
      JS,
      "an ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ) date"
    ).internal.assertHasKind("intersection"),
    QS = ue.module(
      {
        root: km,
        parse: ve({ in: km, morphs: e => new Date(e), declaredOut: X.Date }),
      },
      { name: "string.date.iso" }
    ),
    XS = ue.module(
      {
        root: wm,
        parse: ve({
          declaredIn: wm,
          in: "string",
          morphs: (e, t) => {
            const r = new Date(e);
            return Number.isNaN(r.valueOf()) ? t.error("a parsable date") : r;
          },
          declaredOut: X.Date,
        }),
        iso: QS,
        epoch: YS,
      },
      { name: "string.date" }
    ),
    ZS = Ce(
      /^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/,
      "an email address",
      "email"
    ),
    Sm = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
    Tr = `(${Sm}[.]){3}${Sm}`,
    eM = new RegExp(`^${Tr}$`),
    Fe = "(?:[0-9a-fA-F]{1,4})",
    tM = new RegExp(
      `^((?:${Fe}:){7}(?:${Fe}|:)|(?:${Fe}:){6}(?:${Tr}|:${Fe}|:)|(?:${Fe}:){5}(?::${Tr}|(:${Fe}){1,2}|:)|(?:${Fe}:){4}(?:(:${Fe}){0,1}:${Tr}|(:${Fe}){1,3}|:)|(?:${Fe}:){3}(?:(:${Fe}){0,2}:${Tr}|(:${Fe}){1,4}|:)|(?:${Fe}:){2}(?:(:${Fe}){0,3}:${Tr}|(:${Fe}){1,5}|:)|(?:${Fe}:){1}(?:(:${Fe}){0,4}:${Tr}|(:${Fe}){1,6}|:)|(?::((?::${Fe}){0,5}:${Tr}|(?::${Fe}){1,7}|:)))(%[0-9a-zA-Z.]{1,})?$`
    ),
    rM = ue.module(
      {
        root: ["v4 | v6", "@", "an IP address"],
        v4: Ce(eM, "an IPv4 address", "ipv4"),
        v6: Ce(tM, "an IPv6 address", "ipv6"),
      },
      { name: "string.ip" }
    ),
    Un = "a JSON string",
    Mm = e => {
      if (!(e instanceof SyntaxError)) throw e;
      return `must be ${Un} (${e})`;
    },
    nM = ve({
      meta: Un,
      domain: "string",
      predicate: {
        meta: Un,
        predicate: (e, t) => {
          try {
            return (JSON.parse(e), !0);
          } catch (r) {
            return t.reject({
              code: "predicate",
              expected: Un,
              problem: Mm(r),
            });
          }
        },
      },
    }),
    iM = (e, t) => {
      if (e.length === 0)
        return t.error({ code: "predicate", expected: Un, actual: "empty" });
      try {
        return JSON.parse(e);
      } catch (r) {
        return t.error({ code: "predicate", expected: Un, problem: Mm(r) });
      }
    },
    sM = ue.module(
      {
        root: nM,
        parse: ve({
          meta: "safe JSON string parser",
          in: "string",
          morphs: iM,
          declaredOut: X.jsonObject,
        }),
      },
      { name: "string.json" }
    ),
    Cm = Ce(/^[a-z]*$/, "only lowercase letters"),
    oM = ue.module(
      {
        root: ve({
          in: "string",
          morphs: e => e.toLowerCase(),
          declaredOut: Cm,
        }),
        preformatted: Cm,
      },
      { name: "string.lower" }
    ),
    $m = ["NFC", "NFD", "NFKC", "NFKD"],
    ji = be($m, (e, t) => [
      t,
      ve({
        domain: "string",
        predicate: r => r.normalize(t) === r,
        meta: `${t}-normalized unicode`,
      }),
    ]),
    ao = be($m, (e, t) => [
      t,
      ve({ in: "string", morphs: r => r.normalize(t), declaredOut: ji[t] }),
    ]),
    aM = ue.module(
      { root: ao.NFC, preformatted: ji.NFC },
      { name: "string.normalize.NFC" }
    ),
    lM = ue.module(
      { root: ao.NFD, preformatted: ji.NFD },
      { name: "string.normalize.NFD" }
    ),
    cM = ue.module(
      { root: ao.NFKC, preformatted: ji.NFKC },
      { name: "string.normalize.NFKC" }
    ),
    uM = ue.module(
      { root: ao.NFKD, preformatted: ji.NFKD },
      { name: "string.normalize.NFKD" }
    ),
    dM = ue.module(
      { root: "NFC", NFC: aM, NFD: lM, NFKC: cM, NFKD: uM },
      { name: "string.normalize" }
    ),
    Am = Ce(ll, "a well-formed numeric string"),
    fM = ue.module(
      {
        root: Am,
        parse: ve({
          in: Am,
          morphs: e => Number.parseFloat(e),
          declaredOut: X.number,
        }),
      },
      { name: "string.numeric" }
    ),
    Em = "a regex pattern",
    pM = ve({
      domain: "string",
      predicate: {
        meta: Em,
        predicate: (e, t) => {
          try {
            return (new RegExp(e), !0);
          } catch (r) {
            return t.reject({
              code: "predicate",
              expected: Em,
              problem: String(r),
            });
          }
        },
      },
      meta: { format: "regex" },
    }),
    hM = Ce(
      /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[A-Za-z-][\dA-Za-z-]*)(?:\.(?:0|[1-9]\d*|\d*[A-Za-z-][\dA-Za-z-]*))*))?(?:\+([\dA-Za-z-]+(?:\.[\dA-Za-z-]+)*))?$/,
      "a semantic version (see https://semver.org/)"
    ),
    Im = Ce(/^\S.*\S$|^\S?$/, "trimmed"),
    mM = ue.module(
      {
        root: ve({ in: "string", morphs: e => e.trim(), declaredOut: Im }),
        preformatted: Im,
      },
      { name: "string.trim" }
    ),
    Pm = Ce(/^[A-Z]*$/, "only uppercase letters"),
    gM = ue.module(
      {
        root: ve({
          in: "string",
          morphs: e => e.toUpperCase(),
          declaredOut: Pm,
        }),
        preformatted: Pm,
      },
      { name: "string.upper" }
    ),
    Om = ve({
      domain: "string",
      predicate: { meta: "a URL string", predicate: e => URL.canParse(e) },
      meta: { format: "uri" },
    }),
    _M = ue.module(
      {
        root: Om,
        parse: ve({
          declaredIn: Om,
          in: "string",
          morphs: (e, t) => {
            try {
              return new URL(e);
            } catch {
              return t.error("a URL string");
            }
          },
          declaredOut: ve(URL),
        }),
      },
      { name: "string.url" }
    ),
    yM = ue.module(
      {
        root: [
          "versioned | nil | max",
          "@",
          { description: "a UUID", format: "uuid" },
        ],
        "#nil": "'00000000-0000-0000-0000-000000000000'",
        "#max": "'ffffffff-ffff-ffff-ffff-ffffffffffff'",
        "#versioned":
          /[\da-f]{8}-[\da-f]{4}-[1-8][\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}/i,
        v1: Ce(
          /^[\da-f]{8}-[\da-f]{4}-1[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i,
          "a UUIDv1"
        ),
        v2: Ce(
          /^[\da-f]{8}-[\da-f]{4}-2[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i,
          "a UUIDv2"
        ),
        v3: Ce(
          /^[\da-f]{8}-[\da-f]{4}-3[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i,
          "a UUIDv3"
        ),
        v4: Ce(
          /^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i,
          "a UUIDv4"
        ),
        v5: Ce(
          /^[\da-f]{8}-[\da-f]{4}-5[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i,
          "a UUIDv5"
        ),
        v6: Ce(
          /^[\da-f]{8}-[\da-f]{4}-6[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i,
          "a UUIDv6"
        ),
        v7: Ce(
          /^[\da-f]{8}-[\da-f]{4}-7[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i,
          "a UUIDv7"
        ),
        v8: Ce(
          /^[\da-f]{8}-[\da-f]{4}-8[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i,
          "a UUIDv8"
        ),
      },
      { name: "string.uuid" }
    ),
    bM = ue.module(
      {
        root: X.string,
        alpha: Ce(/^[A-Za-z]*$/, "only letters"),
        alphanumeric: Ce(/^[\dA-Za-z]*$/, "only letters and digits 0-9"),
        hex: US,
        base64: KS,
        capitalize: GS,
        creditCard: HS,
        date: XS,
        digits: Ce(/^\d*$/, "only digits 0-9"),
        email: ZS,
        integer: bm,
        ip: rM,
        json: sM,
        lower: oM,
        normalize: dM,
        numeric: fM,
        regex: pM,
        semver: hM,
        trim: mM,
        upper: gM,
        url: _M,
        uuid: yM,
      },
      { name: "string" }
    ),
    vM = ue.module({
      bigint: X.bigint,
      boolean: X.boolean,
      false: X.false,
      never: X.never,
      null: X.null,
      number: X.number,
      object: X.object,
      string: X.string,
      symbol: X.symbol,
      true: X.true,
      unknown: X.unknown,
      undefined: X.undefined,
    }),
    wM = ue.module({ root: X.unknown, any: X.unknown }, { name: "unknown" }),
    xM = ue.module(
      {
        root: X.jsonObject,
        stringify: Fl("morph", {
          in: X.jsonObject,
          morphs: e => JSON.stringify(e),
          declaredOut: X.string,
        }),
      },
      { name: "object.json" }
    ),
    kM = ue.module({ root: X.object, json: xM }, { name: "object" });
  class SM extends Ht {
    description =
      'instantiate an object from an index signature and corresponding value type like `Record("string", "number")`';
  }
  const MM = br(["K", X.key], "V")(
    e => ({ domain: "object", index: { signature: e.K, value: e.V } }),
    SM
  );
  class CM extends Ht {
    description =
      'pick a set of properties from an object like `Pick(User, "name | age")`';
  }
  const $M = br(["T", X.object], ["K", X.key])(e => e.T.pick(e.K), CM);
  class AM extends Ht {
    description =
      'omit a set of properties from an object like `Omit(User, "age")`';
  }
  const EM = br(["T", X.object], ["K", X.key])(e => e.T.omit(e.K), AM);
  class IM extends Ht {
    description =
      "make all named properties of an object optional like `Partial(User)`";
  }
  const PM = br(["T", X.object])(e => e.T.partial(), IM);
  class OM extends Ht {
    description =
      "make all named properties of an object required like `Required(User)`";
  }
  const TM = br(["T", X.object])(e => e.T.required(), OM);
  class RM extends Ht {
    description =
      'exclude branches of a union like `Exclude("boolean", "true")`';
  }
  const NM = br("T", "U")(e => e.T.exclude(e.U), RM);
  class LM extends Ht {
    description =
      'extract branches of a union like `Extract("0 | false | 1", "number")`';
  }
  const FM = br("T", "U")(e => e.T.extract(e.U), LM),
    DM = ue.module({
      Exclude: NM,
      Extract: FM,
      Omit: EM,
      Partial: PM,
      Pick: $M,
      Record: MM,
      Required: TM,
    }),
    Rr = IS(
      {
        ...vM,
        ...DM,
        ...VS,
        ...TS,
        string: bM,
        number: _m,
        object: kM,
        unknown: wM,
      },
      { prereducedAliases: !0, name: "ark" }
    ),
    We = Rr.export();
  (Object.assign(qi.ambient, We),
    (qi.typeAttachments = {
      string: We.string.root,
      number: We.number.root,
      bigint: We.bigint,
      boolean: We.boolean,
      symbol: We.symbol,
      undefined: We.undefined,
      null: We.null,
      object: We.object.root,
      unknown: We.unknown.root,
      false: We.false,
      true: We.true,
      never: We.never,
      arrayIndex: We.Array.index,
      Key: We.Key,
      Record: We.Record,
      Array: We.Array.root,
      Date: We.Date,
    }));
  const ae = Object.assign(Rr.type, qi.typeAttachments);
  (Rr.match,
    Rr.fn,
    Rr.generic,
    Rr.schema,
    Rr.define,
    Rr.declare,
    ae(
      "'more-info' | 'toggle' | 'navigate' | 'url' | 'perform-action' | 'assist'"
    ),
    ae("'tap' | 'hold' | 'double_tap'"));
  const Jl = ae({
      action: "'perform-action'",
      perform_action: "string",
      target: "object",
      "data?": "object",
    })
      .or({ action: "'assist'", "pipeline_id?": "string" })
      .or({ action: "'url'", url_path: "string" })
      .or({ action: "'navigate'", navigation_path: "string" })
      .or({
        action: "'more-info'",
        "entity?": "string",
        "camera_image?": "string",
      })
      .or({ action: "'toggle'", "entity?": "string" })
      .or({ action: "'none'" }),
    Yl = ae({
      "entity?": "string",
      "camera_image?": "string",
      "tap_action?": Jl.or("undefined"),
      "hold_action?": Jl.or("undefined"),
      "double_tap_action?": Jl.or("undefined"),
    }),
    Tm = ae({
      "always_show_power_button?": "boolean | null",
      "show_volume_step_buttons?": "boolean",
      "use_volume_up_down_for_step_buttons?": "boolean",
      "use_experimental_lms_media_browser?": "boolean",
    }),
    Rm = ae({ "icon?": "string", "name?": "string", media_type: "string" }),
    zM = ae({ entity: "string", "name?": "string | null" })
      .or("string")
      .array(),
    BM = ae({ "name?": "string | null", entity_id: ae("string") }),
    VM = ae({
      "enabled?": "boolean | null",
      "entity_id?": ae("string").or("null").or("undefined"),
    }),
    Nm = ae("null").or(VM).or(BM.array()),
    Lm = ae({ icon: "string > 0", name: "string > 0" }).and(Yl).array(),
    qM = ae({
      "enabled?": "boolean | null",
      "show_favorites?": ae("boolean | null").or("undefined"),
      "entity_id?": ae("string").or("null").or("undefined"),
      "media_types?": Rm.array(),
    }),
    Fm = ae({
      "name?": "string | null",
      entity_id: ae("string"),
      "media_types?": Rm.array().or("undefined"),
    })
      .array()
      .or(qM)
      .or("undefined"),
    Dm = ae({
      type: "string",
      "name?": "string | null",
      entity_id: "string",
      "use_art_colors?": "boolean",
      "action?": Yl,
      "speaker_group?": {
        "entity_id?": ae("string").or("null").or("undefined"),
        entities: zM,
      },
      "custom_buttons?": Lm,
      "ma_entity_id?": ae("string").or("null").or("undefined"),
      "ma_favorite_button_entity_id?": ae("string").or("null").or("undefined"),
      "lms_entity_id?": ae("string").or("null").or("undefined"),
      "search?": Fm,
      "media_browser?": Nm,
      "options?": Tm,
      "grid_options?": "unknown",
      "visibility?": "unknown",
    }),
    jM = Dm.and({
      "tap_opens_popup?": "boolean",
      "options?": Tm.and({
        "always_show_custom_buttons?": "boolean | null",
        "hide_when_off?": "boolean | null",
        "hide_when_group_child?": "boolean | null",
      }),
    }),
    UM = Dm.and({ mode: "'panel'|'card'|'in-card'|'popup'" }),
    KM = ae({
      entity_id: "string",
      "custom_buttons?": Lm,
      "name?": "string | null",
      "speaker_group_entity_id?": ae("string").or("null").or("undefined"),
      "can_be_grouped?": "boolean | null",
      "ma_entity_id?": ae("string").or("null").or("undefined"),
      "ma_favorite_button_entity_id?": ae("string").or("null").or("undefined"),
      "lms_entity_id?": ae("string").or("null").or("undefined"),
      "search?": Fm,
      "media_browser?": Nm,
      "action?": Yl,
    }),
    zm = ae({
      "player_is_active_when?": "'playing' | 'playing_or_paused'",
      "show_volume_step_buttons?": "boolean",
      "use_volume_up_down_for_step_buttons?": "boolean",
      "use_experimental_lms_media_browser?": "boolean",
    }),
    GM = ae({
      type: "string",
      entity_id: "string",
      media_players: KM.array(),
      "use_art_colors?": "boolean",
      "disable_player_focus_switching?": "boolean",
      "grid_options?": "unknown",
      "visibility?": "unknown",
    }).and(
      ae({
        size: "'large'",
        mode: "'panel'|'card'|'in-card'",
        "height?": "number | string",
        "options?": zm.and({
          "hide_selected_player_header?": "boolean",
          "transparent_background_on_home?": "boolean",
          "default_tab?":
            "'massive'|'search'|'media-browser'|'speaker-grouping'|'custom-buttons'|'queue'",
        }),
      }).or(
        ae({
          size: "'compact'",
          "tap_opens_popup?": "boolean",
          "options?": zm.and({
            "always_show_power_button?": "boolean | null",
            "always_show_custom_buttons?": "boolean | null",
            "hide_when_off?": "boolean | null",
            "hide_when_group_child?": "boolean | null",
          }),
        })
      )
    );
  var $e = (e => (
    (e[(e.None = 0)] = "None"),
    (e[(e.Mutable = 1)] = "Mutable"),
    (e[(e.Watching = 2)] = "Watching"),
    (e[(e.RecursedCheck = 4)] = "RecursedCheck"),
    (e[(e.Recursed = 8)] = "Recursed"),
    (e[(e.Dirty = 16)] = "Dirty"),
    (e[(e.Pending = 32)] = "Pending"),
    e
  ))($e || {});
  function Bm({ update: e, notify: t, unwatched: r }) {
    return {
      link: n,
      unlink: i,
      propagate: s,
      checkDirty: o,
      shallowPropagate: a,
    };
    function n(c, d, u) {
      const h = d.depsTail;
      if (h !== void 0 && h.dep === c) return;
      const f = h !== void 0 ? h.nextDep : d.deps;
      if (f !== void 0 && f.dep === c) {
        ((f.version = u), (d.depsTail = f));
        return;
      }
      const g = c.subsTail;
      if (g !== void 0 && g.version === u && g.sub === d) return;
      const m =
        (d.depsTail =
        c.subsTail =
          {
            version: u,
            dep: c,
            sub: d,
            prevDep: h,
            nextDep: f,
            prevSub: g,
            nextSub: void 0,
          });
      (f !== void 0 && (f.prevDep = m),
        h !== void 0 ? (h.nextDep = m) : (d.deps = m),
        g !== void 0 ? (g.nextSub = m) : (c.subs = m));
    }
    function i(c, d = c.sub) {
      const u = c.dep,
        h = c.prevDep,
        f = c.nextDep,
        g = c.nextSub,
        m = c.prevSub;
      return (
        f !== void 0 ? (f.prevDep = h) : (d.depsTail = h),
        h !== void 0 ? (h.nextDep = f) : (d.deps = f),
        g !== void 0 ? (g.prevSub = m) : (u.subsTail = m),
        m !== void 0 ? (m.nextSub = g) : (u.subs = g) === void 0 && r(u),
        f
      );
    }
    function s(c) {
      let d = c.nextSub,
        u;
      e: do {
        const h = c.sub;
        let f = h.flags;
        if (
          (f & 60
            ? f & 12
              ? f & 4
                ? !(f & 48) && l(c, h)
                  ? ((h.flags = f | 40), (f &= 1))
                  : (f = 0)
                : (h.flags = (f & -9) | 32)
              : (f = 0)
            : (h.flags = f | 32),
          f & 2 && t(h),
          f & 1)
        ) {
          const g = h.subs;
          if (g !== void 0) {
            const m = (c = g).nextSub;
            m !== void 0 && ((u = { value: d, prev: u }), (d = m));
            continue;
          }
        }
        if ((c = d) !== void 0) {
          d = c.nextSub;
          continue;
        }
        for (; u !== void 0; )
          if (((c = u.value), (u = u.prev), c !== void 0)) {
            d = c.nextSub;
            continue e;
          }
        break;
      } while (!0);
    }
    function o(c, d) {
      let u,
        h = 0,
        f = !1;
      e: do {
        const g = c.dep,
          m = g.flags;
        if (d.flags & 16) f = !0;
        else if ((m & 17) === 17) {
          if (e(g)) {
            const _ = g.subs;
            (_.nextSub !== void 0 && a(_), (f = !0));
          }
        } else if ((m & 33) === 33) {
          ((c.nextSub !== void 0 || c.prevSub !== void 0) &&
            (u = { value: c, prev: u }),
            (c = g.deps),
            (d = g),
            ++h);
          continue;
        }
        if (!f) {
          const _ = c.nextDep;
          if (_ !== void 0) {
            c = _;
            continue;
          }
        }
        for (; h--; ) {
          const _ = d.subs,
            y = _.nextSub !== void 0;
          if ((y ? ((c = u.value), (u = u.prev)) : (c = _), f)) {
            if (e(d)) {
              (y && a(_), (d = c.sub));
              continue;
            }
            f = !1;
          } else d.flags &= -33;
          d = c.sub;
          const b = c.nextDep;
          if (b !== void 0) {
            c = b;
            continue e;
          }
        }
        return f;
      } while (!0);
    }
    function a(c) {
      do {
        const d = c.sub,
          u = d.flags;
        (u & 48) === 32 && ((d.flags = u | 16), (u & 6) === 2 && t(d));
      } while ((c = c.nextSub) !== void 0);
    }
    function l(c, d) {
      let u = d.depsTail;
      for (; u !== void 0; ) {
        if (u === c) return !0;
        u = u.prevDep;
      }
      return !1;
    }
  }
  let Ql = 0,
    Xr = 0,
    Ui = 0;
  const vr = [],
    {
      link: PA,
      unlink: Vm,
      propagate: OA,
      checkDirty: WM,
      shallowPropagate: TA,
    } = Bm({
      update(e) {
        return e.depsTail !== void 0 ? QM(e) : XM(e);
      },
      notify(e) {
        let t = Ui,
          r = t;
        do
          if (
            ((vr[t++] = e),
            (e.flags &= -3),
            (e = e.subs?.sub),
            e === void 0 || !(e.flags & 2))
          )
            break;
        while (!0);
        for (Ui = t; r < --t; ) {
          const n = vr[r];
          ((vr[r++] = vr[t]), (vr[t] = n));
        }
      },
      unwatched(e) {
        e.flags & 1
          ? e.depsTail !== void 0 &&
            ((e.depsTail = void 0), (e.flags = 17), lo(e))
          : tC.call(e);
      },
    });
  function HM() {
    return Ql;
  }
  function JM() {
    ++Ql;
  }
  function YM() {
    --Ql || eC();
  }
  function QM(e) {
    ((e.depsTail = void 0), (e.flags = 5));
    try {
      const t = e.value;
      return t !== (e.value = e.getter(t));
    } finally {
      ((e.flags &= -5), lo(e));
    }
  }
  function XM(e) {
    return (
      (e.flags = 1),
      e.currentValue !== (e.currentValue = e.pendingValue)
    );
  }
  function ZM(e) {
    const t = e.flags;
    if (t & 16 || (t & 32 && WM(e.deps, e))) {
      ((e.depsTail = void 0), (e.flags = 6));
      try {
        e.fn();
      } finally {
        ((e.flags &= -5), lo(e));
      }
    } else e.flags = 2;
  }
  function eC() {
    try {
      for (; Xr < Ui; ) {
        const e = vr[Xr];
        ((vr[Xr++] = void 0), ZM(e));
      }
    } finally {
      for (; Xr < Ui; ) {
        const e = vr[Xr];
        ((vr[Xr++] = void 0), (e.flags |= 10));
      }
      ((Xr = 0), (Ui = 0));
    }
  }
  function tC() {
    ((this.depsTail = void 0), (this.flags = 0), lo(this));
    const e = this.subs;
    e !== void 0 && Vm(e);
  }
  function lo(e) {
    const t = e.depsTail;
    let r = t !== void 0 ? t.nextDep : e.deps;
    for (; r !== void 0; ) r = Vm(r, e);
  }
  function Xl(e, t, r) {
    const n = typeof e == "object",
      i = n ? e : void 0;
    return {
      next: (n ? e.next : e)?.bind(i),
      error: (n ? e.error : t)?.bind(i),
      complete: (n ? e.complete : r)?.bind(i),
    };
  }
  const Zl = [];
  let co = 0;
  const {
    link: qm,
    unlink: rC,
    propagate: nC,
    checkDirty: jm,
    shallowPropagate: Um,
  } = Bm({
    update(e) {
      return e._update();
    },
    notify(e) {
      ((Zl[ec++] = e), (e.flags &= ~$e.Watching));
    },
    unwatched(e) {
      e.depsTail !== void 0 &&
        ((e.depsTail = void 0), (e.flags = $e.Mutable | $e.Dirty), fo(e));
    },
  });
  let uo = 0,
    ec = 0,
    Jt;
  function fo(e) {
    const t = e.depsTail;
    let r = t !== void 0 ? t.nextDep : e.deps;
    for (; r !== void 0; ) r = rC(r, e);
  }
  function Km() {
    if (!(HM() > 0)) {
      for (; uo < ec; ) {
        const e = Zl[uo];
        ((Zl[uo++] = void 0), e.notify());
      }
      ((uo = 0), (ec = 0));
    }
  }
  function Gm(e, t) {
    const r = typeof e == "function",
      n = e,
      i = {
        _snapshot: r ? void 0 : e,
        subs: void 0,
        subsTail: void 0,
        deps: void 0,
        depsTail: void 0,
        flags: r ? $e.None : $e.Mutable,
        get() {
          return (Jt !== void 0 && qm(i, Jt, co), i._snapshot);
        },
        subscribe(s) {
          const o = Xl(s),
            a = { current: !1 },
            l = iC(() => {
              (i.get(), a.current ? o.next?.(i._snapshot) : (a.current = !0));
            });
          return {
            unsubscribe: () => {
              l.stop();
            },
          };
        },
        _update(s) {
          const o = Jt,
            a = Object.is;
          if (r) ((Jt = i), ++co, (i.depsTail = void 0));
          else if (s === void 0) return !1;
          r && (i.flags = $e.Mutable | $e.RecursedCheck);
          try {
            const l = i._snapshot,
              c = typeof s == "function" ? s(l) : s === void 0 && r ? n(l) : s;
            return l === void 0 || !a(l, c) ? ((i._snapshot = c), !0) : !1;
          } finally {
            ((Jt = o), r && (i.flags &= ~$e.RecursedCheck), fo(i));
          }
        },
      };
    return (
      r
        ? ((i.flags = $e.Mutable | $e.Dirty),
          (i.get = function () {
            const s = i.flags;
            if (s & $e.Dirty || (s & $e.Pending && jm(i.deps, i))) {
              if (i._update()) {
                const o = i.subs;
                o !== void 0 && Um(o);
              }
            } else s & $e.Pending && (i.flags = s & ~$e.Pending);
            return (Jt !== void 0 && qm(i, Jt, co), i._snapshot);
          }))
        : (i.set = function (s) {
            if (i._update(s)) {
              const o = i.subs;
              o !== void 0 && (nC(o), Um(o), Km());
            }
          }),
      i
    );
  }
  function iC(e) {
    const t = () => {
        const n = Jt;
        ((Jt = r),
          ++co,
          (r.depsTail = void 0),
          (r.flags = $e.Watching | $e.RecursedCheck));
        try {
          return e();
        } finally {
          ((Jt = n), (r.flags &= ~$e.RecursedCheck), fo(r));
        }
      },
      r = {
        deps: void 0,
        depsTail: void 0,
        subs: void 0,
        subsTail: void 0,
        flags: $e.Watching | $e.RecursedCheck,
        notify() {
          const n = this.flags;
          n & $e.Dirty || (n & $e.Pending && jm(this.deps, this))
            ? t()
            : (this.flags = $e.Watching);
        },
        stop() {
          ((this.flags = $e.None), (this.depsTail = void 0), fo(this));
        },
      };
    return (t(), r);
  }
  class sC {
    constructor(t) {
      this.atom = Gm(t);
    }
    setState(t) {
      this.atom.set(t);
    }
    get state() {
      return this.atom.get();
    }
    get() {
      return this.state;
    }
    subscribe(t) {
      return this.atom.subscribe(Xl(t));
    }
  }
  class oC {
    constructor(t) {
      this.atom = Gm(t);
    }
    get state() {
      return this.atom.get();
    }
    get() {
      return this.state;
    }
    subscribe(t) {
      return this.atom.subscribe(Xl(t));
    }
  }
  function Ki(e) {
    return typeof e == "function" ? new oC(e) : new sC(e);
  }
  function Rt(e) {
    try {
      (JM(), e());
    } finally {
      (YM(), Km());
    }
  }
  var aC = class {
    constructor(e, t) {
      ((this.fn = e),
        (this.options = t),
        (this.lastExecutionTime = 0),
        (this.isPending = !1),
        (this.maybeExecute = (...r) => {
          const n = Date.now() - this.lastExecutionTime;
          if (this.options.leading && n >= this.options.wait)
            this.execute(...r);
          else if (
            ((this.lastArgs = r), !this.timeoutId && this.options.trailing)
          ) {
            const i = this.options.wait - n;
            ((this.isPending = !0),
              (this.timeoutId = setTimeout(() => {
                this.lastArgs !== void 0 && this.execute(...this.lastArgs);
              }, i)));
          }
        }),
        (this.execute = (...r) => {
          (this.fn(...r),
            this.options.onExecute?.(r, this),
            (this.lastExecutionTime = Date.now()),
            this.clearTimeout(),
            (this.lastArgs = void 0),
            (this.isPending = !1));
        }),
        (this.flush = () => {
          this.isPending && this.lastArgs && this.execute(...this.lastArgs);
        }),
        (this.cancel = () => {
          (this.clearTimeout(),
            (this.lastArgs = void 0),
            (this.isPending = !1));
        }),
        (this.clearTimeout = () => {
          this.timeoutId &&
            (clearTimeout(this.timeoutId), (this.timeoutId = void 0));
        }),
        this.options.leading === void 0 &&
          this.options.trailing === void 0 &&
          ((this.options.leading = !0), (this.options.trailing = !0)));
    }
  };
  function lC(e, t) {
    return new aC(e, t).maybeExecute;
  }
  class cC {
    #s = !0;
    #t;
    #e;
    #d;
    #r;
    #a;
    #n;
    #l;
    #f = 0;
    #h = 5;
    #o = !1;
    #c = !1;
    #i = null;
    #p = () => {
      (this.debugLog("Connected to event bus"),
        (this.#a = !0),
        (this.#o = !1),
        this.debugLog("Emitting queued events", this.#r),
        this.#r.forEach(t => this.emitEventToBus(t)),
        (this.#r = []),
        this.stopConnectLoop(),
        this.#e().removeEventListener("tanstack-connect-success", this.#p));
    };
    #u = () => {
      if (this.#f < this.#h) {
        (this.#f++, this.dispatchCustomEvent("tanstack-connect", {}));
        return;
      }
      (this.#e().removeEventListener("tanstack-connect", this.#u),
        (this.#c = !0),
        this.debugLog("Max retries reached, giving up on connection"),
        this.stopConnectLoop());
    };
    #m = () => {
      this.#o ||
        ((this.#o = !0),
        this.#e().addEventListener("tanstack-connect-success", this.#p),
        this.#u());
    };
    constructor({
      pluginId: t,
      debug: r = !1,
      enabled: n = !0,
      reconnectEveryMs: i = 300,
    }) {
      ((this.#t = t),
        (this.#s = n),
        (this.#e = this.getGlobalTarget),
        (this.#d = r),
        this.debugLog(" Initializing event subscription for plugin", this.#t),
        (this.#r = []),
        (this.#a = !1),
        (this.#c = !1),
        (this.#n = null),
        (this.#l = i));
    }
    startConnectLoop() {
      this.#n !== null ||
        this.#a ||
        (this.debugLog(`Starting connect loop (every ${this.#l}ms)`),
        (this.#n = setInterval(this.#u, this.#l)));
    }
    stopConnectLoop() {
      ((this.#o = !1),
        this.#n !== null &&
          (clearInterval(this.#n),
          (this.#n = null),
          (this.#r = []),
          this.debugLog("Stopped connect loop")));
    }
    debugLog(...t) {
      this.#d && console.log(`🌴 [tanstack-devtools:${this.#t}-plugin]`, ...t);
    }
    getGlobalTarget() {
      if (typeof globalThis < "u" && globalThis.__TANSTACK_EVENT_TARGET__)
        return (
          this.debugLog("Using global event target"),
          globalThis.__TANSTACK_EVENT_TARGET__
        );
      if (typeof window < "u" && typeof window.addEventListener < "u")
        return (this.debugLog("Using window as event target"), window);
      const t = typeof EventTarget < "u" ? new EventTarget() : void 0;
      return typeof t > "u" || typeof t.addEventListener > "u"
        ? (this.debugLog(
            "No event mechanism available, running in non-web environment"
          ),
          {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
          })
        : (this.debugLog("Using new EventTarget as fallback"), t);
    }
    getPluginId() {
      return this.#t;
    }
    dispatchCustomEventShim(t, r) {
      try {
        const n = new Event(t, { detail: r });
        this.#e().dispatchEvent(n);
      } catch {
        this.debugLog("Failed to dispatch shim event");
      }
    }
    dispatchCustomEvent(t, r) {
      try {
        this.#e().dispatchEvent(new CustomEvent(t, { detail: r }));
      } catch {
        this.dispatchCustomEventShim(t, r);
      }
    }
    emitEventToBus(t) {
      (this.debugLog("Emitting event to client bus", t),
        this.dispatchCustomEvent("tanstack-dispatch-event", t));
    }
    createEventPayload(t, r) {
      return { type: `${this.#t}:${t}`, payload: r, pluginId: this.#t };
    }
    emit(t, r) {
      if (!this.#s) {
        this.debugLog("Event bus client is disabled, not emitting event", t, r);
        return;
      }
      if (
        (this.#i &&
          (this.debugLog("Emitting event to internal event target", t, r),
          this.#i.dispatchEvent(
            new CustomEvent(`${this.#t}:${t}`, {
              detail: this.createEventPayload(t, r),
            })
          )),
        this.#c)
      ) {
        this.debugLog("Previously failed to connect, not emitting to bus");
        return;
      }
      if (!this.#a) {
        (this.debugLog(
          "Bus not available, will be pushed as soon as connected"
        ),
          this.#r.push(this.createEventPayload(t, r)),
          typeof CustomEvent < "u" &&
            !this.#o &&
            (this.#m(), this.startConnectLoop()));
        return;
      }
      return this.emitEventToBus(this.createEventPayload(t, r));
    }
    on(t, r, n) {
      const i = n?.withEventTarget ?? !1,
        s = `${this.#t}:${t}`;
      if (
        (i &&
          (this.#i || (this.#i = new EventTarget()),
          this.#i.addEventListener(s, a => {
            r(a.detail);
          })),
        !this.#s)
      )
        return (
          this.debugLog(
            "Event bus client is disabled, not registering event",
            s
          ),
          () => {}
        );
      const o = a => {
        (this.debugLog("Received event from bus", a.detail), r(a.detail));
      };
      return (
        this.#e().addEventListener(s, o),
        this.debugLog("Registered event to bus", s),
        () => {
          (i && this.#i?.removeEventListener(s, o),
            this.#e().removeEventListener(s, o));
        }
      );
    }
    onAll(t) {
      if (!this.#s)
        return (
          this.debugLog("Event bus client is disabled, not registering event"),
          () => {}
        );
      const r = n => {
        const i = n.detail;
        t(i);
      };
      return (
        this.#e().addEventListener("tanstack-devtools-global", r),
        () => this.#e().removeEventListener("tanstack-devtools-global", r)
      );
    }
    onAllPluginEvents(t) {
      if (!this.#s)
        return (
          this.debugLog("Event bus client is disabled, not registering event"),
          () => {}
        );
      const r = n => {
        const i = n.detail;
        (this.#t && i.pluginId !== this.#t) || t(i);
      };
      return (
        this.#e().addEventListener("tanstack-devtools-global", r),
        () => this.#e().removeEventListener("tanstack-devtools-global", r)
      );
    }
  }
  class uC extends cC {
    constructor() {
      super({ pluginId: "form-devtools", reconnectEveryMs: 1e3 });
    }
  }
  const xt = new uC();
  function Gi(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Kn(e, t) {
    return mo(t).reduce((n, i) => {
      if (n === null) return null;
      if (typeof n < "u") return n[i];
    }, e);
  }
  function po(e, t, r) {
    const n = mo(t);
    function i(s) {
      if (!n.length) return Gi(r, s);
      const o = n.shift();
      if (typeof o == "string" || (typeof o == "number" && !Array.isArray(s)))
        return typeof s == "object"
          ? (s === null && (s = {}), { ...s, [o]: i(s[o]) })
          : { [o]: i() };
      if (Array.isArray(s) && typeof o == "number") {
        const a = s.slice(0, o);
        return [...(a.length ? a : new Array(o)), i(s[o]), ...s.slice(o + 1)];
      }
      return [...new Array(o), i()];
    }
    return i(e);
  }
  function dC(e, t) {
    const r = mo(t);
    function n(i) {
      if (!i) return;
      if (r.length === 1) {
        const o = r[0];
        if (Array.isArray(i) && typeof o == "number")
          return i.filter((c, d) => d !== o);
        const { [o]: a, ...l } = i;
        return l;
      }
      const s = r.shift();
      if (
        (typeof s == "string" || (typeof s == "number" && !Array.isArray(i))) &&
        typeof i == "object"
      )
        return { ...i, [s]: n(i[s]) };
      if (typeof s == "number" && Array.isArray(i)) {
        if (s >= i.length) return i;
        const o = i.slice(0, s);
        return [...(o.length ? o : new Array(s)), n(i[s]), ...i.slice(s + 1)];
      }
      throw new Error(
        "It seems we have created an infinite loop in deleteBy. "
      );
    }
    return n(e);
  }
  const fC = /^(\d+)$/gm,
    pC = /\.(\d+)(?=\.)/gm,
    hC = /^(\d+)\./gm,
    mC = /\.(\d+$)/gm,
    gC = /\.{2,}/gm,
    tc = "__int__",
    ho = `${tc}$1`;
  function mo(e) {
    if (Array.isArray(e)) return [...e];
    if (typeof e != "string") throw new Error("Path must be a string.");
    return e
      .replace(/(^\[)|]/gm, "")
      .replace(/\[/g, ".")
      .replace(fC, ho)
      .replace(pC, `.${ho}.`)
      .replace(hC, `${ho}.`)
      .replace(mC, `.${ho}`)
      .replace(gC, ".")
      .split(".")
      .map(t => {
        if (t.startsWith(tc)) {
          const r = t.substring(tc.length),
            n = parseInt(r, 10);
          return String(n) === r ? n : r;
        }
        return t;
      });
  }
  function Wm(e, t) {
    return e.length === 0
      ? t
      : t.length === 0
        ? e
        : t.startsWith("[") || t.startsWith(".")
          ? e + t
          : `${e}.${t}`;
  }
  function _C(e) {
    return !(Array.isArray(e) && e.length === 0);
  }
  function rc(e, t) {
    const r = n =>
      n.validators
        .filter(Boolean)
        .map(i => ({ cause: i.cause, validate: i.fn }));
    return t.validationLogic({
      form: t.form,
      validators: t.validators,
      event: { type: e, fieldName: t.fieldName, async: !1 },
      runValidation: r,
    });
  }
  function nc(e, t) {
    const { asyncDebounceMs: r } = t,
      {
        onBlurAsyncDebounceMs: n,
        onChangeAsyncDebounceMs: i,
        onDynamicAsyncDebounceMs: s,
      } = t.validators || {},
      o = r ?? 0,
      a = l =>
        l.validators.filter(Boolean).map(c => {
          const d = c?.cause || e;
          let u = o;
          switch (d) {
            case "change":
              u = i ?? o;
              break;
            case "blur":
              u = n ?? o;
              break;
            case "dynamic":
              u = s ?? o;
              break;
            case "submit":
              u = 0;
              break;
          }
          return (
            e === "submit" && (u = 0),
            { cause: d, validate: c.fn, debounceMs: u }
          );
        });
    return t.validationLogic({
      form: t.form,
      validators: t.validators,
      event: { type: e, fieldName: t.fieldName, async: !0 },
      runValidation: a,
    });
  }
  const go = e => !!e && typeof e == "object" && "fields" in e;
  function Nr(e, t) {
    if (Object.is(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    if (e instanceof Date && t instanceof Date)
      return e.getTime() === t.getTime();
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (const [i, s] of e)
        if (!t.has(i) || !Object.is(s, t.get(i))) return !1;
      return !0;
    }
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (const i of e) if (!t.has(i)) return !1;
      return !0;
    }
    const r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (const i of r) if (!n.includes(i) || !Nr(e[i], t[i])) return !1;
    return !0;
  }
  const Hm = ({
      newFormValidatorError: e,
      isPreviousErrorFromFormValidator: t,
      previousErrorValue: r,
    }) =>
      e
        ? { newErrorValue: e, newSource: "form" }
        : t
          ? { newErrorValue: void 0, newSource: void 0 }
          : r
            ? { newErrorValue: r, newSource: "field" }
            : { newErrorValue: void 0, newSource: void 0 },
    Jm = ({ formLevelError: e, fieldLevelError: t }) =>
      t
        ? { newErrorValue: t, newSource: "field" }
        : e
          ? { newErrorValue: e, newSource: "form" }
          : { newErrorValue: void 0, newSource: void 0 };
  function ct(e, t) {
    return e == null ? t : { ...e, ...t };
  }
  let Zr = 256;
  const _o = [];
  let yo;
  for (; Zr--; ) _o[Zr] = (Zr + 256).toString(16).substring(1);
  function Ym() {
    let e = 0,
      t,
      r = "";
    if (!yo || Zr + 16 > 256) {
      for (yo = new Array(256), e = 256; e--; )
        yo[e] = (256 * Math.random()) | 0;
      ((e = 0), (Zr = 0));
    }
    for (; e < 16; e++)
      ((t = yo[Zr + e]),
        e === 6
          ? (r += _o[(t & 15) | 64])
          : e === 8
            ? (r += _o[(t & 63) | 128])
            : (r += _o[t]),
        e & 1 && e > 1 && e < 11 && (r += "-"));
    return (Zr++, r);
  }
  const yC = lC(
    e => xt.emit("form-state", { id: e.formId, state: e.store.state }),
    { wait: 300 }
  );
  function Wi(e) {
    if (e === null || typeof e != "object") return e;
    if (e instanceof Date) return new Date(e.getTime());
    if (Array.isArray(e)) {
      const r = [];
      for (let n = 0; n < e.length; n++) r[n] = Wi(e[n]);
      return r;
    }
    if (e instanceof Map) {
      const r = new Map();
      return (
        e.forEach((n, i) => {
          r.set(i, Wi(n));
        }),
        r
      );
    }
    if (e instanceof Set) {
      const r = new Set();
      return (
        e.forEach(n => {
          r.add(Wi(n));
        }),
        r
      );
    }
    const t = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = Wi(e[r]));
    return t;
  }
  const Gn = e => {
    if (!e.validators) return e.runValidation({ validators: [], form: e.form });
    const t = e.event.async,
      r = t ? void 0 : { fn: e.validators.onMount, cause: "mount" },
      n = {
        fn: t ? e.validators.onChangeAsync : e.validators.onChange,
        cause: "change",
      },
      i = {
        fn: t ? e.validators.onBlurAsync : e.validators.onBlur,
        cause: "blur",
      },
      s = {
        fn: t ? e.validators.onSubmitAsync : e.validators.onSubmit,
        cause: "submit",
      },
      o = t ? void 0 : { fn: () => {}, cause: "server" };
    switch (e.event.type) {
      case "mount":
        return e.runValidation({ validators: [r], form: e.form });
      case "submit":
        return e.runValidation({ validators: [n, i, s, o], form: e.form });
      case "server":
        return e.runValidation({ validators: [], form: e.form });
      case "blur":
        return e.runValidation({ validators: [i, o], form: e.form });
      case "change":
        return e.runValidation({ validators: [n, o], form: e.form });
      default:
        throw new Error(`Unknown validation event type: ${e.event.type}`);
    }
  };
  function bC(e, t) {
    const r = new Map();
    for (const n of e) {
      const i = n.path ?? [];
      let s = t,
        o = "";
      for (let a = 0; a < i.length; a++) {
        const l = i[a];
        if (l === void 0) continue;
        const c = typeof l == "object" ? l.key : l,
          d = Number(c);
        (Array.isArray(s) && !Number.isNaN(d)
          ? (o += `[${d}]`)
          : (o += (a > 0 ? "." : "") + String(c)),
          typeof s == "object" && s !== null ? (s = s[c]) : (s = void 0));
      }
      r.set(o, (r.get(o) ?? []).concat(n));
    }
    return Object.fromEntries(r);
  }
  const Qm = (e, t) => {
      const r = bC(e, t);
      return { form: r, fields: r };
    },
    Wn = {
      validate({ value: e, validationSource: t }, r) {
        const n = r["~standard"].validate(e);
        if (n instanceof Promise)
          throw new Error("async function passed to sync validator");
        if (n.issues) return t === "field" ? n.issues : Qm(n.issues, e);
      },
      async validateAsync({ value: e, validationSource: t }, r) {
        const n = await r["~standard"].validate(e);
        if (n.issues) return t === "field" ? n.issues : Qm(n.issues, e);
      },
    },
    Xm = e => !!e && "~standard" in e,
    Yt = {
      isValidating: !1,
      isTouched: !1,
      isBlurred: !1,
      isDirty: !1,
      isPristine: !0,
      isValid: !0,
      isDefaultValue: !0,
      errors: [],
      errorMap: {},
      errorSourceMap: {},
    };
  function bo(e) {
    function t(d, u, h) {
      const f = o(d, u, "move", h),
        g = Math.min(u, h),
        m = Math.max(u, h);
      for (let y = g; y <= m; y++) f.push(s(d, y));
      const _ = Object.keys(e.fieldInfo).reduce(
        (y, b) => (b.startsWith(s(d, u)) && y.set(b, e.getFieldMeta(b)), y),
        new Map()
      );
      (l(f, u < h ? "up" : "down"),
        Object.keys(e.fieldInfo)
          .filter(y => y.startsWith(s(d, h)))
          .forEach(y => {
            const b = y.replace(s(d, h), s(d, u)),
              v = _.get(b);
            v && e.setFieldMeta(y, v);
          }));
    }
    function r(d, u) {
      const h = o(d, u, "remove");
      l(h, "up");
    }
    function n(d, u, h) {
      o(d, u, "swap", h).forEach(g => {
        if (!g.toString().startsWith(s(d, u))) return;
        const m = g.toString().replace(s(d, u), s(d, h)),
          [_, y] = [e.getFieldMeta(g), e.getFieldMeta(m)];
        (_ && e.setFieldMeta(m, _), y && e.setFieldMeta(g, y));
      });
    }
    function i(d, u) {
      const h = o(d, u, "insert");
      (l(h, "down"),
        h.forEach(f => {
          f.toString().startsWith(s(d, u)) && e.setFieldMeta(f, c());
        }));
    }
    function s(d, u) {
      return `${d}[${u}]`;
    }
    function o(d, u, h, f) {
      const g = [s(d, u)];
      switch (h) {
        case "swap":
          g.push(s(d, f));
          break;
        case "move": {
          const [m, _] = [Math.min(u, f), Math.max(u, f)];
          for (let y = m; y <= _; y++) g.push(s(d, y));
          break;
        }
        default: {
          const m = e.getFieldValue(d),
            _ = Array.isArray(m) ? m.length : 0;
          for (let y = u + 1; y < _; y++) g.push(s(d, y));
          break;
        }
      }
      return Object.keys(e.fieldInfo).filter(m => g.some(_ => m.startsWith(_)));
    }
    function a(d, u) {
      return d.replace(/\[(\d+)\]/, (h, f) => {
        const g = parseInt(f, 10);
        return `[${u === "up" ? g + 1 : Math.max(0, g - 1)}]`;
      });
    }
    function l(d, u) {
      (u === "up" ? d : [...d].reverse()).forEach(f => {
        const g = a(f.toString(), u),
          m = e.getFieldMeta(g);
        m ? e.setFieldMeta(f, m) : e.setFieldMeta(f, c());
      });
    }
    const c = () => Yt;
    return {
      handleArrayMove: t,
      handleArrayRemove: r,
      handleArraySwap: n,
      handleArrayInsert: i,
    };
  }
  function ic(e) {
    return {
      values: e.values ?? {},
      errorMap: e.errorMap ?? {},
      fieldMetaBase: e.fieldMetaBase ?? {},
      isSubmitted: e.isSubmitted ?? !1,
      isSubmitting: e.isSubmitting ?? !1,
      isValidating: e.isValidating ?? !1,
      submissionAttempts: e.submissionAttempts ?? 0,
      isSubmitSuccessful: e.isSubmitSuccessful ?? !1,
      validationMetaMap: e.validationMetaMap ?? {
        onChange: void 0,
        onBlur: void 0,
        onSubmit: void 0,
        onMount: void 0,
        onServer: void 0,
        onDynamic: void 0,
      },
    };
  }
  class Zm {
    constructor(t) {
      ((this.options = {}),
        (this.fieldInfo = {}),
        (this.mount = () => {
          const s = this.store.subscribe(() => {
              yC(this);
            }),
            o = xt.on("request-form-state", u => {
              u.payload.id === this._formId &&
                xt.emit("form-api", {
                  id: this._formId,
                  state: this.store.state,
                  options: this.options,
                });
            }),
            a = xt.on("request-form-reset", u => {
              u.payload.id === this._formId && this.reset();
            }),
            l = xt.on("request-form-force-submit", u => {
              u.payload.id === this._formId &&
                ((this._devtoolsSubmissionOverride = !0),
                this.handleSubmit(),
                (this._devtoolsSubmissionOverride = !1));
            }),
            c = () => {
              (l(),
                a(),
                o(),
                s.unsubscribe(),
                xt.emit("form-unmounted", { id: this._formId }));
            };
          this.options.listeners?.onMount?.({ formApi: this });
          const { onMount: d } = this.options.validators || {};
          return (
            xt.emit("form-api", {
              id: this._formId,
              state: this.store.state,
              options: this.options,
            }),
            d && this.validateSync("mount"),
            c
          );
        }),
        (this.update = s => {
          if (!s) return;
          const o = this.options;
          this.options = s;
          const a =
              s.defaultValues &&
              !Nr(s.defaultValues, o.defaultValues) &&
              !this.state.isTouched,
            l = !Nr(s.defaultState, o.defaultState) && !this.state.isTouched;
          (!a && !l) ||
            (Rt(() => {
              this.baseStore.setState(() =>
                ic(
                  Object.assign(
                    {},
                    this.state,
                    l ? s.defaultState : {},
                    a ? { values: s.defaultValues } : {}
                  )
                )
              );
            }),
            xt.emit("form-api", {
              id: this._formId,
              state: this.store.state,
              options: this.options,
            }));
        }),
        (this.reset = (s, o) => {
          const { fieldMeta: a } = this.state,
            l = this.resetFieldMeta(a);
          (s &&
            !o?.keepDefaultValues &&
            (this.options = { ...this.options, defaultValues: s }),
            this.baseStore.setState(() =>
              ic({
                ...this.options.defaultState,
                values:
                  s ??
                  this.options.defaultValues ??
                  this.options.defaultState?.values,
                fieldMetaBase: l,
              })
            ));
        }),
        (this.validateAllFields = async s => {
          const o = [];
          return (
            Rt(() => {
              Object.values(this.fieldInfo).forEach(l => {
                if (!l.instance) return;
                const c = l.instance;
                (o.push(
                  Promise.resolve().then(() =>
                    c.validate(s, { skipFormValidation: !0 })
                  )
                ),
                  l.instance.state.meta.isTouched ||
                    l.instance.setMeta(d => ({ ...d, isTouched: !0 })));
              });
            }),
            (await Promise.all(o)).flat()
          );
        }),
        (this.validateArrayFieldsStartingFrom = async (s, o, a) => {
          const l = this.getFieldValue(s),
            c = Array.isArray(l) ? Math.max(l.length - 1, 0) : null,
            d = [`${s}[${o}]`];
          for (let g = o + 1; g <= (c ?? 0); g++) d.push(`${s}[${g}]`);
          const u = Object.keys(this.fieldInfo).filter(g =>
              d.some(m => g.startsWith(m))
            ),
            h = [];
          return (
            Rt(() => {
              u.forEach(g => {
                h.push(Promise.resolve().then(() => this.validateField(g, a)));
              });
            }),
            (await Promise.all(h)).flat()
          );
        }),
        (this.validateField = (s, o) => {
          const a = this.fieldInfo[s]?.instance;
          if (!a) {
            const { hasErrored: l } = this.validateSync(o);
            return l && !this.options.asyncAlways
              ? (this.getFieldMeta(s)?.errors ?? [])
              : this.validateAsync(o).then(
                  () => this.getFieldMeta(s)?.errors ?? []
                );
          }
          return (
            a.state.meta.isTouched || a.setMeta(l => ({ ...l, isTouched: !0 })),
            a.validate(o)
          );
        }),
        (this.validateSync = s => {
          const o = rc(s, {
            ...this.options,
            form: this,
            validationLogic: this.options.validationLogic || Gn,
          });
          let a = !1;
          const l = {};
          return (
            Rt(() => {
              for (const u of o) {
                if (!u.validate) continue;
                const h = this.runValidator({
                    validate: u.validate,
                    value: {
                      value: this.state.values,
                      formApi: this,
                      validationSource: "form",
                    },
                    type: "validate",
                  }),
                  { formError: f, fieldErrors: g } = vo(h),
                  m = Hi(u.cause),
                  _ = new Set([
                    ...Object.keys(this.state.fieldMeta),
                    ...Object.keys(g || {}),
                  ]);
                for (const y of _) {
                  if (
                    this.baseStore.state.fieldMetaBase[y] === void 0 &&
                    !g?.[y]
                  )
                    continue;
                  const b = this.getFieldMeta(y) ?? Yt,
                    { errorMap: v, errorSourceMap: k } = b,
                    x = g?.[y],
                    { newErrorValue: $, newSource: M } = Hm({
                      newFormValidatorError: x,
                      isPreviousErrorFromFormValidator: k?.[m] === "form",
                      previousErrorValue: v?.[m],
                    });
                  (M === "form" && (l[y] = { ...l[y], [m]: x }),
                    v?.[m] !== $ &&
                      this.setFieldMeta(y, (C = Yt) => ({
                        ...C,
                        errorMap: { ...C.errorMap, [m]: $ },
                        errorSourceMap: { ...C.errorSourceMap, [m]: M },
                      })));
                }
                (this.state.errorMap?.[m] !== f &&
                  this.baseStore.setState(y => ({
                    ...y,
                    errorMap: { ...y.errorMap, [m]: f },
                  })),
                  (f || g) && (a = !0));
              }
              const c = Hi("submit");
              this.state.errorMap?.[c] &&
                s !== "submit" &&
                !a &&
                this.baseStore.setState(u => ({
                  ...u,
                  errorMap: { ...u.errorMap, [c]: void 0 },
                }));
              const d = Hi("server");
              this.state.errorMap?.[d] &&
                s !== "server" &&
                !a &&
                this.baseStore.setState(u => ({
                  ...u,
                  errorMap: { ...u.errorMap, [d]: void 0 },
                }));
            }),
            { hasErrored: a, fieldsErrorMap: l }
          );
        }),
        (this.validateAsync = async s => {
          const o = nc(s, {
            ...this.options,
            form: this,
            validationLogic: this.options.validationLogic || Gn,
          });
          this.state.isFormValidating ||
            this.baseStore.setState(u => ({ ...u, isFormValidating: !0 }));
          const a = [];
          let l;
          for (const u of o) {
            if (!u.validate) continue;
            const h = Hi(u.cause);
            this.state.validationMetaMap[h]?.lastAbortController.abort();
            const g = new AbortController();
            ((this.state.validationMetaMap[h] = { lastAbortController: g }),
              a.push(
                new Promise(async m => {
                  let _;
                  try {
                    _ = await new Promise((k, x) => {
                      setTimeout(async () => {
                        if (g.signal.aborted) return k(void 0);
                        try {
                          k(
                            await this.runValidator({
                              validate: u.validate,
                              value: {
                                value: this.state.values,
                                formApi: this,
                                validationSource: "form",
                                signal: g.signal,
                              },
                              type: "validateAsync",
                            })
                          );
                        } catch ($) {
                          x($);
                        }
                      }, u.debounceMs);
                    });
                  } catch (k) {
                    _ = k;
                  }
                  const { formError: y, fieldErrors: b } = vo(_);
                  b && (l = l ? { ...l, ...b } : b);
                  const v = Hi(u.cause);
                  for (const k of Object.keys(this.state.fieldMeta)) {
                    if (this.baseStore.state.fieldMetaBase[k] === void 0)
                      continue;
                    const x = this.getFieldMeta(k);
                    if (!x) continue;
                    const { errorMap: $, errorSourceMap: M } = x,
                      C = l?.[k],
                      { newErrorValue: O, newSource: E } = Hm({
                        newFormValidatorError: C,
                        isPreviousErrorFromFormValidator: M?.[v] === "form",
                        previousErrorValue: $?.[v],
                      });
                    $?.[v] !== O &&
                      this.setFieldMeta(k, A => ({
                        ...A,
                        errorMap: { ...A.errorMap, [v]: O },
                        errorSourceMap: { ...A.errorSourceMap, [v]: E },
                      }));
                  }
                  (this.baseStore.setState(k => ({
                    ...k,
                    errorMap: { ...k.errorMap, [v]: y },
                  })),
                    m(l ? { fieldErrors: l, errorMapKey: v } : void 0));
                })
              ));
          }
          let c = [];
          const d = {};
          if (a.length) {
            c = await Promise.all(a);
            for (const u of c)
              if (u?.fieldErrors) {
                const { errorMapKey: h } = u;
                for (const [f, g] of Object.entries(u.fieldErrors)) {
                  const _ = { ...(d[f] || {}), [h]: g };
                  d[f] = _;
                }
              }
          }
          return (
            this.baseStore.setState(u => ({ ...u, isFormValidating: !1 })),
            d
          );
        }),
        (this.validate = s => {
          const { hasErrored: o, fieldsErrorMap: a } = this.validateSync(s);
          return o && !this.options.asyncAlways ? a : this.validateAsync(s);
        }),
        (this._handleSubmit = async s => {
          (this.baseStore.setState(l => ({
            ...l,
            isSubmitted: !1,
            submissionAttempts: l.submissionAttempts + 1,
            isSubmitSuccessful: !1,
          })),
            Rt(() => {
              Object.values(this.fieldInfo).forEach(l => {
                l.instance &&
                  (l.instance.state.meta.isTouched ||
                    l.instance.setMeta(c => ({ ...c, isTouched: !0 })));
              });
            }));
          const o = s ?? this.options.onSubmitMeta;
          if (!this.state.canSubmit && !this._devtoolsSubmissionOverride) {
            this.options.onSubmitInvalid?.({
              value: this.state.values,
              formApi: this,
              meta: o,
            });
            return;
          }
          this.baseStore.setState(l => ({ ...l, isSubmitting: !0 }));
          const a = () => {
            this.baseStore.setState(l => ({ ...l, isSubmitting: !1 }));
          };
          if (
            (await this.validateAllFields("submit"), !this.state.isFieldsValid)
          ) {
            (a(),
              this.options.onSubmitInvalid?.({
                value: this.state.values,
                formApi: this,
                meta: o,
              }),
              xt.emit("form-submission", {
                id: this._formId,
                submissionAttempt: this.state.submissionAttempts,
                successful: !1,
                stage: "validateAllFields",
                errors: Object.values(this.state.fieldMeta)
                  .map(l => l.errors)
                  .flat(),
              }));
            return;
          }
          if ((await this.validate("submit"), !this.state.isValid)) {
            (a(),
              this.options.onSubmitInvalid?.({
                value: this.state.values,
                formApi: this,
                meta: o,
              }),
              xt.emit("form-submission", {
                id: this._formId,
                submissionAttempt: this.state.submissionAttempts,
                successful: !1,
                stage: "validate",
                errors: this.state.errors,
              }));
            return;
          }
          (Rt(() => {
            Object.values(this.fieldInfo).forEach(l => {
              l.instance?.options.listeners?.onSubmit?.({
                value: l.instance.state.value,
                fieldApi: l.instance,
              });
            });
          }),
            this.options.listeners?.onSubmit?.({ formApi: this, meta: o }));
          try {
            (await this.options.onSubmit?.({
              value: this.state.values,
              formApi: this,
              meta: o,
            }),
              Rt(() => {
                (this.baseStore.setState(l => ({
                  ...l,
                  isSubmitted: !0,
                  isSubmitSuccessful: !0,
                })),
                  xt.emit("form-submission", {
                    id: this._formId,
                    submissionAttempt: this.state.submissionAttempts,
                    successful: !0,
                  }),
                  a());
              }));
          } catch (l) {
            throw (
              this.baseStore.setState(c => ({ ...c, isSubmitSuccessful: !1 })),
              xt.emit("form-submission", {
                id: this._formId,
                submissionAttempt: this.state.submissionAttempts,
                successful: !1,
                stage: "inflight",
                onError: l,
              }),
              a(),
              l
            );
          }
        }),
        (this.getFieldValue = s => Kn(this.state.values, s)),
        (this.getFieldMeta = s => this.state.fieldMeta[s]),
        (this.getFieldInfo = s =>
          (this.fieldInfo[s] ||= {
            instance: null,
            validationMetaMap: {
              onChange: void 0,
              onBlur: void 0,
              onSubmit: void 0,
              onMount: void 0,
              onServer: void 0,
              onDynamic: void 0,
            },
          })),
        (this.setFieldMeta = (s, o) => {
          this.baseStore.setState(a => ({
            ...a,
            fieldMetaBase: {
              ...a.fieldMetaBase,
              [s]: Gi(o, a.fieldMetaBase[s]),
            },
          }));
        }),
        (this.resetFieldMeta = s =>
          Object.keys(s).reduce((o, a) => {
            const l = a;
            return ((o[l] = Yt), o);
          }, {})),
        (this.setFieldValue = (s, o, a) => {
          const l = a?.dontUpdateMeta ?? !1,
            c = a?.dontRunListeners ?? !1,
            d = a?.dontValidate ?? !1;
          (Rt(() => {
            (l ||
              this.setFieldMeta(s, u => ({
                ...u,
                isTouched: !0,
                isDirty: !0,
                errorMap: { ...u?.errorMap, onMount: void 0 },
              })),
              this.baseStore.setState(u => ({
                ...u,
                values: po(u.values, s, o),
              })));
          }),
            c || this.getFieldInfo(s).instance?.triggerOnChangeListener(),
            d || this.validateField(s, "change"));
        }),
        (this.deleteField = s => {
          const a = [
            ...Object.keys(this.fieldInfo).filter(l => {
              const c = s.toString();
              return l !== c && l.startsWith(c);
            }),
            s,
          ];
          this.baseStore.setState(l => {
            const c = { ...l };
            return (
              a.forEach(d => {
                ((c.values = dC(c.values, d)),
                  delete this.fieldInfo[d],
                  delete c.fieldMetaBase[d]);
              }),
              c
            );
          });
        }),
        (this.pushFieldValue = (s, o, a) => {
          this.setFieldValue(s, l => [...(Array.isArray(l) ? l : []), o], a);
        }),
        (this.insertFieldValue = async (s, o, a, l) => {
          this.setFieldValue(
            s,
            d => [...d.slice(0, o), a, ...d.slice(o)],
            ct(l, { dontValidate: !0 })
          );
          const c = l?.dontValidate ?? !1;
          (c || (await this.validateField(s, "change")),
            bo(this).handleArrayInsert(s, o),
            c || (await this.validateArrayFieldsStartingFrom(s, o, "change")));
        }),
        (this.replaceFieldValue = async (s, o, a, l) => {
          (this.setFieldValue(
            s,
            d => d.map((u, h) => (h === o ? a : u)),
            ct(l, { dontValidate: !0 })
          ),
            (l?.dontValidate ?? !1) ||
              (await this.validateField(s, "change"),
              await this.validateArrayFieldsStartingFrom(s, o, "change")));
        }),
        (this.removeFieldValue = async (s, o, a) => {
          const l = this.getFieldValue(s),
            c = Array.isArray(l) ? Math.max(l.length - 1, 0) : null;
          if (
            (this.setFieldValue(
              s,
              u => u.filter((h, f) => f !== o),
              ct(a, { dontValidate: !0 })
            ),
            bo(this).handleArrayRemove(s, o),
            c !== null)
          ) {
            const u = `${s}[${c}]`;
            this.deleteField(u);
          }
          (a?.dontValidate ?? !1) ||
            (await this.validateField(s, "change"),
            await this.validateArrayFieldsStartingFrom(s, o, "change"));
        }),
        (this.swapFieldValues = (s, o, a, l) => {
          (this.setFieldValue(
            s,
            d => {
              const u = d[o],
                h = d[a];
              return po(po(d, `${o}`, h), `${a}`, u);
            },
            ct(l, { dontValidate: !0 })
          ),
            bo(this).handleArraySwap(s, o, a),
            (l?.dontValidate ?? !1) ||
              (this.validateField(s, "change"),
              this.validateField(`${s}[${o}]`, "change"),
              this.validateField(`${s}[${a}]`, "change")));
        }),
        (this.moveFieldValues = (s, o, a, l) => {
          (this.setFieldValue(
            s,
            d => {
              const u = [...d];
              return (u.splice(a, 0, u.splice(o, 1)[0]), u);
            },
            ct(l, { dontValidate: !0 })
          ),
            bo(this).handleArrayMove(s, o, a),
            (l?.dontValidate ?? !1) ||
              (this.validateField(s, "change"),
              this.validateField(`${s}[${o}]`, "change"),
              this.validateField(`${s}[${a}]`, "change")));
        }),
        (this.clearFieldValues = (s, o) => {
          const a = this.getFieldValue(s),
            l = Array.isArray(a) ? Math.max(a.length - 1, 0) : null;
          if (
            (this.setFieldValue(s, [], ct(o, { dontValidate: !0 })), l !== null)
          )
            for (let d = 0; d <= l; d++) {
              const u = `${s}[${d}]`;
              this.deleteField(u);
            }
          (o?.dontValidate ?? !1) || this.validateField(s, "change");
        }),
        (this.resetField = s => {
          this.baseStore.setState(o => ({
            ...o,
            fieldMetaBase: { ...o.fieldMetaBase, [s]: Yt },
            values: this.options.defaultValues
              ? po(o.values, s, Kn(this.options.defaultValues, s))
              : o.values,
          }));
        }),
        (this.setErrorMap = s => {
          Rt(() => {
            Object.entries(s).forEach(([o, a]) => {
              const l = o;
              if (go(a)) {
                const { formError: c, fieldErrors: d } = vo(a);
                for (const u of Object.keys(this.fieldInfo))
                  this.getFieldMeta(u) &&
                    this.setFieldMeta(u, f => ({
                      ...f,
                      errorMap: { ...f.errorMap, [l]: d?.[u] },
                      errorSourceMap: { ...f.errorSourceMap, [l]: "form" },
                    }));
                this.baseStore.setState(u => ({
                  ...u,
                  errorMap: { ...u.errorMap, [l]: c },
                }));
              } else
                this.baseStore.setState(c => ({
                  ...c,
                  errorMap: { ...c.errorMap, [l]: a },
                }));
            });
          });
        }),
        (this.getAllErrors = () => ({
          form: { errors: this.state.errors, errorMap: this.state.errorMap },
          fields: Object.entries(this.state.fieldMeta).reduce(
            (s, [o, a]) => (
              Object.keys(a).length &&
                a.errors.length &&
                (s[o] = { errors: a.errors, errorMap: a.errorMap }),
              s
            ),
            {}
          ),
        })),
        (this.parseValuesWithSchema = s =>
          Wn.validate(
            { value: this.state.values, validationSource: "form" },
            s
          )),
        (this.parseValuesWithSchemaAsync = s =>
          Wn.validateAsync(
            { value: this.state.values, validationSource: "form" },
            s
          )),
        (this.timeoutIds = {
          validations: {},
          listeners: {},
          formListeners: {},
        }),
        (this._formId = t?.formId ?? Ym()),
        (this._devtoolsSubmissionOverride = !1));
      let r = ic({
        ...t?.defaultState,
        values: t?.defaultValues ?? t?.defaultState?.values,
      });
      if (t?.transform) {
        r = t.transform({ state: r }).state;
        for (const s of Object.keys(r.errorMap)) {
          const o = r.errorMap[s];
          if (!(o === void 0 || !go(o)))
            for (const a of Object.keys(o.fields)) {
              const l = o.fields[a];
              if (l === void 0) continue;
              const c = r.fieldMetaBase[a];
              r.fieldMetaBase[a] = {
                isTouched: !1,
                isValidating: !1,
                isBlurred: !1,
                isDirty: !1,
                ...(c ?? {}),
                errorSourceMap: {
                  ...(c?.errorSourceMap ?? {}),
                  onChange: "form",
                },
                errorMap: { ...(c?.errorMap ?? {}), [s]: l },
              };
            }
        }
      }
      this.baseStore = Ki(r);
      let n;
      this.fieldMetaDerived = Ki(s => {
        const o = this.baseStore.get();
        let a = 0;
        const l = {};
        for (const c of Object.keys(o.fieldMetaBase)) {
          const d = o.fieldMetaBase[c],
            u = n?.fieldMetaBase[c],
            h = s?.[c],
            f = Kn(o.values, c);
          let g = h?.errors;
          if (!u || d.errorMap !== u.errorMap) {
            g = Object.values(d.errorMap ?? {}).filter(v => v !== void 0);
            const b = this.getFieldInfo(c)?.instance;
            (!b || !b.options.disableErrorFlat) && (g = g.flat(1));
          }
          const m = !_C(g),
            _ = !d.isDirty,
            y =
              Nr(f, Kn(this.options.defaultValues, c)) ||
              Nr(f, this.getFieldInfo(c)?.instance?.options.defaultValue);
          if (
            h &&
            h.isPristine === _ &&
            h.isValid === m &&
            h.isDefaultValue === y &&
            h.errors === g &&
            d === u
          ) {
            ((l[c] = h), a++);
            continue;
          }
          l[c] = {
            ...d,
            errors: g ?? [],
            isPristine: _,
            isValid: m,
            isDefaultValue: y,
          };
        }
        return Object.keys(o.fieldMetaBase).length
          ? s && a === Object.keys(o.fieldMetaBase).length
            ? s
            : ((n = this.baseStore.get()), l)
          : l;
      });
      let i;
      ((this.store = Ki(s => {
        const o = this.baseStore.get(),
          a = this.fieldMetaDerived.get(),
          l = Object.values(a).filter(Boolean),
          c = l.some(E => E.isValidating),
          d = l.every(E => E.isValid),
          u = l.some(E => E.isTouched),
          h = l.some(E => E.isBlurred),
          f = l.every(E => E.isDefaultValue),
          g = u && o.errorMap?.onMount,
          m = l.some(E => E.isDirty),
          _ = !m,
          y = !!(o.errorMap?.onMount || l.some(E => E?.errorMap?.onMount)),
          b = !!c;
        let v = s?.errors ?? [];
        (!i || o.errorMap !== i.errorMap) &&
          (v = Object.values(o.errorMap).reduce(
            (E, A) =>
              A === void 0
                ? E
                : A && go(A)
                  ? (E.push(A.form), E)
                  : (E.push(A), E),
            []
          ));
        const k = v.length === 0,
          x = d && k,
          $ = this.options.canSubmitWhenInvalid ?? !1,
          M =
            (o.submissionAttempts === 0 && !u && !y) ||
            (!b && !o.isSubmitting && x) ||
            $;
        let C = o.errorMap;
        if (
          (g &&
            ((v = v.filter(E => E !== o.errorMap.onMount)),
            (C = Object.assign(C, { onMount: void 0 }))),
          s &&
            i &&
            s.errorMap === C &&
            s.fieldMeta === this.fieldMetaDerived.state &&
            s.errors === v &&
            s.isFieldsValidating === c &&
            s.isFieldsValid === d &&
            s.isFormValid === k &&
            s.isValid === x &&
            s.canSubmit === M &&
            s.isTouched === u &&
            s.isBlurred === h &&
            s.isPristine === _ &&
            s.isDefaultValue === f &&
            s.isDirty === m &&
            Nr(i, o))
        )
          return s;
        const O = {
          ...o,
          errorMap: C,
          fieldMeta: this.fieldMetaDerived.state,
          errors: v,
          isFieldsValidating: c,
          isFieldsValid: d,
          isFormValid: k,
          isValid: x,
          canSubmit: M,
          isTouched: u,
          isBlurred: h,
          isPristine: _,
          isDefaultValue: f,
          isDirty: m,
        };
        return ((i = this.baseStore.get()), O);
      })),
        (this.handleSubmit = this.handleSubmit.bind(this)),
        this.update(t || {}));
    }
    get state() {
      return this.store.state;
    }
    get formId() {
      return this._formId;
    }
    runValidator(t) {
      return Xm(t.validate)
        ? Wn[t.type](t.value, t.validate)
        : t.validate(t.value);
    }
    handleSubmit(t) {
      return this._handleSubmit(t);
    }
  }
  function vo(e) {
    if (e) {
      if (go(e)) {
        const t = vo(e.form).formError,
          r = e.fields;
        return { formError: t, fieldErrors: r };
      }
      return { formError: e };
    }
    return { formError: void 0 };
  }
  function Hi(e) {
    switch (e) {
      case "submit":
        return "onSubmit";
      case "blur":
        return "onBlur";
      case "mount":
        return "onMount";
      case "server":
        return "onServer";
      case "dynamic":
        return "onDynamic";
      default:
        return "onChange";
    }
  }
  class eg {
    constructor(t) {
      ((this.options = {}),
        (this.mount = () => {
          this.options.defaultValue !== void 0 &&
            !this.getMeta().isTouched &&
            this.form.setFieldValue(this.name, this.options.defaultValue, {
              dontUpdateMeta: !0,
            });
          const r = this.getInfo();
          ((r.instance = this), this.update(this.options));
          const { onMount: n } = this.options.validators || {};
          if (n) {
            const i = this.runValidator({
              validate: n,
              value: {
                value: this.state.value,
                fieldApi: this,
                validationSource: "field",
              },
              type: "validate",
            });
            i &&
              this.setMeta(s => ({
                ...s,
                errorMap: { ...s?.errorMap, onMount: i },
                errorSourceMap: { ...s?.errorSourceMap, onMount: "field" },
              }));
          }
          return (
            this.options.listeners?.onMount?.({
              value: this.state.value,
              fieldApi: this,
            }),
            () => {
              for (const [s, o] of Object.entries(this.timeoutIds.validations))
                o && (clearTimeout(o), (this.timeoutIds.validations[s] = null));
              for (const [s, o] of Object.entries(this.timeoutIds.listeners))
                o && (clearTimeout(o), (this.timeoutIds.listeners[s] = null));
              for (const [s, o] of Object.entries(
                this.timeoutIds.formListeners
              ))
                o &&
                  (clearTimeout(o), (this.timeoutIds.formListeners[s] = null));
              const i = this.form.fieldInfo[this.name];
              if (i && i.instance === this) {
                for (const [s, o] of Object.entries(i.validationMetaMap))
                  (o?.lastAbortController.abort(),
                    (i.validationMetaMap[s] = void 0));
                (this.form.baseStore.setState(s => ({
                  ...s,
                  fieldMetaBase: {
                    ...s.fieldMetaBase,
                    [this.name]: {
                      ...Yt,
                      isTouched:
                        s.fieldMetaBase[this.name]?.isTouched ?? Yt.isTouched,
                      isBlurred:
                        s.fieldMetaBase[this.name]?.isBlurred ?? Yt.isBlurred,
                      isDirty:
                        s.fieldMetaBase[this.name]?.isDirty ?? Yt.isDirty,
                    },
                  },
                })),
                  (i.instance = null),
                  this.options.listeners?.onUnmount?.({
                    value: this.state.value,
                    fieldApi: this,
                  }),
                  this.form.options.listeners?.onFieldUnmount?.({
                    formApi: this.form,
                    fieldApi: this,
                  }));
              }
            }
          );
        }),
        (this.update = r => {
          if (
            ((this.options = r),
            (this.name = r.name),
            !this.state.meta.isTouched && this.options.defaultValue !== void 0)
          ) {
            const n = this.form.getFieldValue(this.name);
            Nr(n, r.defaultValue) ||
              this.form.setFieldValue(this.name, r.defaultValue, {
                dontUpdateMeta: !0,
                dontValidate: !0,
                dontRunListeners: !0,
              });
          }
          this.form.getFieldMeta(this.name) ||
            this.form.setFieldMeta(this.name, this.state.meta);
        }),
        (this.getValue = () => this.form.getFieldValue(this.name)),
        (this.setValue = (r, n) => {
          (this.form.setFieldValue(
            this.name,
            r,
            ct(n, { dontRunListeners: !0, dontValidate: !0 })
          ),
            n?.dontRunListeners || this.triggerOnChangeListener(),
            n?.dontValidate || this.validate("change"));
        }),
        (this.getMeta = () => this.store.state.meta),
        (this.setMeta = r => this.form.setFieldMeta(this.name, r)),
        (this.getInfo = () => this.form.getFieldInfo(this.name)),
        (this.pushValue = (r, n) => {
          (this.form.pushFieldValue(
            this.name,
            r,
            ct(n, { dontRunListeners: !0 })
          ),
            n?.dontRunListeners || this.triggerOnChangeListener());
        }),
        (this.insertValue = (r, n, i) => {
          (this.form.insertFieldValue(
            this.name,
            r,
            n,
            ct(i, { dontRunListeners: !0 })
          ),
            i?.dontRunListeners || this.triggerOnChangeListener());
        }),
        (this.replaceValue = (r, n, i) => {
          (this.form.replaceFieldValue(
            this.name,
            r,
            n,
            ct(i, { dontRunListeners: !0 })
          ),
            i?.dontRunListeners || this.triggerOnChangeListener());
        }),
        (this.removeValue = (r, n) => {
          (this.form.removeFieldValue(
            this.name,
            r,
            ct(n, { dontRunListeners: !0 })
          ),
            n?.dontRunListeners || this.triggerOnChangeListener());
        }),
        (this.swapValues = (r, n, i) => {
          (this.form.swapFieldValues(
            this.name,
            r,
            n,
            ct(i, { dontRunListeners: !0 })
          ),
            i?.dontRunListeners || this.triggerOnChangeListener());
        }),
        (this.moveValue = (r, n, i) => {
          (this.form.moveFieldValues(
            this.name,
            r,
            n,
            ct(i, { dontRunListeners: !0 })
          ),
            i?.dontRunListeners || this.triggerOnChangeListener());
        }),
        (this.clearValues = r => {
          (this.form.clearFieldValues(
            this.name,
            ct(r, { dontRunListeners: !0 })
          ),
            r?.dontRunListeners || this.triggerOnChangeListener());
        }),
        (this.getLinkedFields = r => {
          const n = Object.values(this.form.fieldInfo),
            i = [];
          for (const s of n) {
            if (!s.instance) continue;
            const { onChangeListenTo: o, onBlurListenTo: a } =
              s.instance.options.validators || {};
            (r === "change" && o?.includes(this.name) && i.push(s.instance),
              r === "blur" && a?.includes(this.name) && i.push(s.instance));
          }
          return i;
        }),
        (this.validateSync = (r, n) => {
          const i = rc(r, {
              ...this.options,
              form: this.form,
              fieldName: this.name,
              validationLogic: this.form.options.validationLogic || Gn,
            }),
            o = this.getLinkedFields(r).reduce((c, d) => {
              const u = rc(r, {
                ...d.options,
                form: d.form,
                fieldName: d.name,
                validationLogic: d.form.options.validationLogic || Gn,
              });
              return (
                u.forEach(h => {
                  h.field = d;
                }),
                c.concat(u)
              );
            }, []);
          let a = !1;
          Rt(() => {
            const c = (d, u) => {
              const h = wo(u.cause),
                f = u.validate
                  ? tg(
                      d.runValidator({
                        validate: u.validate,
                        value: {
                          value: d.store.state.value,
                          validationSource: "field",
                          fieldApi: d,
                        },
                        type: "validate",
                      })
                    )
                  : void 0,
                g = n[h],
                { newErrorValue: m, newSource: _ } = Jm({
                  formLevelError: g,
                  fieldLevelError: f,
                });
              (d.state.meta.errorMap?.[h] !== m &&
                d.setMeta(y => ({
                  ...y,
                  errorMap: { ...y.errorMap, [h]: m },
                  errorSourceMap: { ...y.errorSourceMap, [h]: _ },
                })),
                m && (a = !0));
            };
            for (const d of i) c(this, d);
            for (const d of o) d.validate && c(d.field, d);
          });
          const l = wo("submit");
          return (
            this.state.meta.errorMap?.[l] &&
              r !== "submit" &&
              !a &&
              this.setMeta(c => ({
                ...c,
                errorMap: { ...c.errorMap, [l]: void 0 },
                errorSourceMap: { ...c.errorSourceMap, [l]: void 0 },
              })),
            { hasErrored: a }
          );
        }),
        (this.validateAsync = async (r, n) => {
          const i = nc(r, {
              ...this.options,
              form: this.form,
              fieldName: this.name,
              validationLogic: this.form.options.validationLogic || Gn,
            }),
            s = await n,
            o = this.getLinkedFields(r),
            a = o.reduce((f, g) => {
              const m = nc(r, {
                ...g.options,
                form: g.form,
                fieldName: g.name,
                validationLogic: g.form.options.validationLogic || Gn,
              });
              return (
                m.forEach(_ => {
                  _.field = g;
                }),
                f.concat(m)
              );
            }, []),
            l = [],
            c = [],
            d = i.some(f => f.validate) || a.some(f => f.validate);
          if (d) {
            this.state.meta.isValidating ||
              this.setMeta(f => ({ ...f, isValidating: !0 }));
            for (const f of o) f.setMeta(g => ({ ...g, isValidating: !0 }));
          }
          const u = (f, g, m) => {
            const _ = wo(g.cause),
              y = f.getInfo();
            y.validationMetaMap[_]?.lastAbortController.abort();
            const v = new AbortController();
            ((y.validationMetaMap[_] = { lastAbortController: v }),
              m.push(
                new Promise(async k => {
                  let x;
                  try {
                    x = await new Promise((E, A) => {
                      (f.timeoutIds.validations[g.cause] &&
                        clearTimeout(f.timeoutIds.validations[g.cause]),
                        (f.timeoutIds.validations[g.cause] = setTimeout(
                          async () => {
                            if (v.signal.aborted) return E(void 0);
                            try {
                              E(
                                await this.runValidator({
                                  validate: g.validate,
                                  value: {
                                    value: f.store.state.value,
                                    fieldApi: f,
                                    signal: v.signal,
                                    validationSource: "field",
                                  },
                                  type: "validateAsync",
                                })
                              );
                            } catch (S) {
                              A(S);
                            }
                          },
                          g.debounceMs
                        )));
                    });
                  } catch (E) {
                    x = E;
                  }
                  if (v.signal.aborted) return k(void 0);
                  const $ = tg(x),
                    M = s[f.name]?.[_],
                    { newErrorValue: C, newSource: O } = Jm({
                      formLevelError: M,
                      fieldLevelError: $,
                    });
                  if (f.getInfo().instance !== f) return k(void 0);
                  (f.setMeta(E => ({
                    ...E,
                    errorMap: { ...E?.errorMap, [_]: C },
                    errorSourceMap: { ...E.errorSourceMap, [_]: O },
                  })),
                    k(C));
                })
              ));
          };
          for (const f of i) f.validate && u(this, f, l);
          for (const f of a) f.validate && u(f.field, f, c);
          let h = [];
          if (
            ((l.length || c.length) &&
              ((h = await Promise.all(l)), await Promise.all(c)),
            d)
          ) {
            this.setMeta(f => ({ ...f, isValidating: !1 }));
            for (const f of o) f.setMeta(g => ({ ...g, isValidating: !1 }));
          }
          return h.filter(Boolean);
        }),
        (this.validate = (r, n) => {
          if (!this.state.meta.isTouched) return [];
          const { fieldsErrorMap: i } = n?.skipFormValidation
              ? { fieldsErrorMap: {} }
              : this.form.validateSync(r),
            { hasErrored: s } = this.validateSync(r, i[this.name] ?? {});
          if (s && !this.options.asyncAlways)
            return (
              this.getInfo().validationMetaMap[
                wo(r)
              ]?.lastAbortController.abort(),
              this.state.meta.errors
            );
          const o = n?.skipFormValidation
            ? Promise.resolve({})
            : this.form.validateAsync(r);
          return this.validateAsync(r, o);
        }),
        (this.handleChange = r => {
          this.setValue(r);
        }),
        (this.handleBlur = () => {
          (this.state.meta.isTouched ||
            this.setMeta(n => ({ ...n, isTouched: !0 })),
            this.state.meta.isBlurred ||
              this.setMeta(n => ({ ...n, isBlurred: !0 })),
            this.validate("blur"),
            this.triggerOnBlurListener());
        }),
        (this.setErrorMap = r => {
          this.setMeta(n => ({ ...n, errorMap: { ...n.errorMap, ...r } }));
        }),
        (this.parseValueWithSchema = r =>
          Wn.validate(
            { value: this.state.value, validationSource: "field" },
            r
          )),
        (this.parseValueWithSchemaAsync = r =>
          Wn.validateAsync(
            { value: this.state.value, validationSource: "field" },
            r
          )),
        (this.triggerOnChangeListener = () => {
          const r = this.form.options.listeners?.onChangeDebounceMs;
          r && r > 0
            ? (this.timeoutIds.formListeners.change &&
                clearTimeout(this.timeoutIds.formListeners.change),
              (this.timeoutIds.formListeners.change = setTimeout(() => {
                this.form.options.listeners?.onChange?.({
                  formApi: this.form,
                  fieldApi: this,
                });
              }, r)))
            : this.form.options.listeners?.onChange?.({
                formApi: this.form,
                fieldApi: this,
              });
          const n = this.options.listeners?.onChangeDebounceMs;
          n && n > 0
            ? (this.timeoutIds.listeners.change &&
                clearTimeout(this.timeoutIds.listeners.change),
              (this.timeoutIds.listeners.change = setTimeout(() => {
                this.options.listeners?.onChange?.({
                  value: this.state.value,
                  fieldApi: this,
                });
              }, n)))
            : this.options.listeners?.onChange?.({
                value: this.state.value,
                fieldApi: this,
              });
        }),
        (this.form = t.form),
        (this.name = t.name),
        (this.options = t),
        (this.timeoutIds = {
          validations: {},
          listeners: {},
          formListeners: {},
        }),
        (this.store = Ki(r => {
          this.form.store.get();
          const n = this.form.getFieldMeta(this.name) ?? {
            ...Yt,
            ...t.defaultMeta,
          };
          let i = this.form.getFieldValue(this.name);
          return (
            !n.isTouched &&
              i === void 0 &&
              this.options.defaultValue !== void 0 &&
              !Nr(i, this.options.defaultValue) &&
              (i = this.options.defaultValue),
            r && r.value === i && r.meta === n ? r : { value: i, meta: n }
          );
        })));
    }
    get state() {
      return this.store.state;
    }
    runValidator(t) {
      return Xm(t.validate)
        ? Wn[t.type](t.value, t.validate)
        : t.validate(t.value);
    }
    triggerOnBlurListener() {
      const t = this.form.options.listeners?.onBlurDebounceMs;
      t && t > 0
        ? (this.timeoutIds.formListeners.blur &&
            clearTimeout(this.timeoutIds.formListeners.blur),
          (this.timeoutIds.formListeners.blur = setTimeout(() => {
            this.form.options.listeners?.onBlur?.({
              formApi: this.form,
              fieldApi: this,
            });
          }, t)))
        : this.form.options.listeners?.onBlur?.({
            formApi: this.form,
            fieldApi: this,
          });
      const r = this.options.listeners?.onBlurDebounceMs;
      r && r > 0
        ? (this.timeoutIds.listeners.blur &&
            clearTimeout(this.timeoutIds.listeners.blur),
          (this.timeoutIds.listeners.blur = setTimeout(() => {
            this.options.listeners?.onBlur?.({
              value: this.state.value,
              fieldApi: this,
            });
          }, r)))
        : this.options.listeners?.onBlur?.({
            value: this.state.value,
            fieldApi: this,
          });
    }
  }
  function tg(e) {
    if (e) return e;
  }
  function wo(e) {
    switch (e) {
      case "submit":
        return "onSubmit";
      case "blur":
        return "onBlur";
      case "mount":
        return "onMount";
      case "server":
        return "onServer";
      case "dynamic":
        return "onDynamic";
      default:
        return "onChange";
    }
  }
  class xo {
    constructor(t) {
      if (
        ((this.getFormFieldName = r => {
          if (typeof this.fieldsMap == "string") return Wm(this.fieldsMap, r);
          const n = mo(r)[0];
          if (typeof n != "string") return "";
          const i = r.slice(n.length),
            s = this.fieldsMap[n];
          return Wm(s, i);
        }),
        (this.getFormFieldOptions = r => {
          const n = { ...r },
            i = n.validators;
          if (
            ((n.name = this.getFormFieldName(r.name)),
            i && (i.onChangeListenTo || i.onBlurListenTo))
          ) {
            const s = { ...i },
              o = a => {
                if (a) return a.map(l => this.getFormFieldName(l));
              };
            ((s.onChangeListenTo = o(i.onChangeListenTo)),
              (s.onBlurListenTo = o(i.onBlurListenTo)),
              (n.validators = s));
          }
          return n;
        }),
        (this.mount = () => () => {}),
        (this.validateArrayFieldsStartingFrom = async (r, n, i) =>
          this.form.validateArrayFieldsStartingFrom(
            this.getFormFieldName(r),
            n,
            i
          )),
        (this.validateField = (r, n) =>
          this.form.validateField(this.getFormFieldName(r), n)),
        (this.getFieldValue = r =>
          this.form.getFieldValue(this.getFormFieldName(r))),
        (this.getFieldMeta = r =>
          this.form.getFieldMeta(this.getFormFieldName(r))),
        (this.setFieldMeta = (r, n) =>
          this.form.setFieldMeta(this.getFormFieldName(r), n)),
        (this.setFieldValue = (r, n, i) =>
          this.form.setFieldValue(this.getFormFieldName(r), n, i)),
        (this.deleteField = r =>
          this.form.deleteField(this.getFormFieldName(r))),
        (this.pushFieldValue = (r, n, i) =>
          this.form.pushFieldValue(this.getFormFieldName(r), n, i)),
        (this.insertFieldValue = async (r, n, i, s) =>
          this.form.insertFieldValue(this.getFormFieldName(r), n, i, s)),
        (this.replaceFieldValue = async (r, n, i, s) =>
          this.form.replaceFieldValue(this.getFormFieldName(r), n, i, s)),
        (this.removeFieldValue = async (r, n, i) =>
          this.form.removeFieldValue(this.getFormFieldName(r), n, i)),
        (this.swapFieldValues = (r, n, i, s) =>
          this.form.swapFieldValues(this.getFormFieldName(r), n, i, s)),
        (this.moveFieldValues = (r, n, i, s) =>
          this.form.moveFieldValues(this.getFormFieldName(r), n, i, s)),
        (this.clearFieldValues = (r, n) =>
          this.form.clearFieldValues(this.getFormFieldName(r), n)),
        (this.resetField = r => this.form.resetField(this.getFormFieldName(r))),
        (this.validateAllFields = r => this.form.validateAllFields(r)),
        t.form instanceof xo)
      ) {
        const r = t.form;
        if (((this.form = r.form), typeof t.fields == "string"))
          this.fieldsMap = r.getFormFieldName(t.fields);
        else {
          const n = { ...t.fields };
          for (const i in n) n[i] = r.getFormFieldName(n[i]);
          this.fieldsMap = n;
        }
      } else ((this.form = t.form), (this.fieldsMap = t.fields));
      this.store = Ki(() => {
        const r = this.form.store.get();
        let n;
        if (typeof this.fieldsMap == "string") n = Kn(r.values, this.fieldsMap);
        else {
          n = {};
          const i = this.fieldsMap;
          for (const s in i) n[s] = Kn(r.values, i[s]);
        }
        return { values: n };
      });
    }
    get state() {
      return this.store.state;
    }
    async handleSubmit(t) {
      return this.form.handleSubmit(t);
    }
  }
  function vC(e, t) {
    if (!t) return;
    const r = Object.assign({}, e, { state: Wi(e.state) });
    (t(r),
      r.fieldInfo !== e.fieldInfo && (e.fieldInfo = r.fieldInfo),
      r.options !== e.options && (e.options = r.options));
    const i = Object.keys({
      values: null,
      validationMetaMap: null,
      fieldMetaBase: null,
      isSubmitting: null,
      isSubmitted: null,
      isValidating: null,
      submissionAttempts: null,
      isSubmitSuccessful: null,
      _force_re_eval: null,
    }).reduce(
      (s, o) => (e.state[o] !== r.state[o] && (s[o] = r.state[o]), s),
      {}
    );
    return (
      Rt(() => {
        (Object.keys(i).length && e.baseStore.setState(s => ({ ...s, ...i })),
          r.state.errorMap !== e.state.errorMap &&
            e.setErrorMap(r.state.errorMap));
      }),
      r
    );
  }
  var ko = { exports: {} },
    sc = {};
  const So = y_(ss);
  var Mo = { exports: {} },
    oc = {};
  var rg;
  function wC() {
    if (rg) return oc;
    rg = 1;
    var e = So;
    function t(u, h) {
      return (u === h && (u !== 0 || 1 / u === 1 / h)) || (u !== u && h !== h);
    }
    var r = typeof Object.is == "function" ? Object.is : t,
      n = e.useState,
      i = e.useEffect,
      s = e.useLayoutEffect,
      o = e.useDebugValue;
    function a(u, h) {
      var f = h(),
        g = n({ inst: { value: f, getSnapshot: h } }),
        m = g[0].inst,
        _ = g[1];
      return (
        s(
          function () {
            ((m.value = f), (m.getSnapshot = h), l(m) && _({ inst: m }));
          },
          [u, f, h]
        ),
        i(
          function () {
            return (
              l(m) && _({ inst: m }),
              u(function () {
                l(m) && _({ inst: m });
              })
            );
          },
          [u]
        ),
        o(f),
        f
      );
    }
    function l(u) {
      var h = u.getSnapshot;
      u = u.value;
      try {
        var f = h();
        return !r(u, f);
      } catch {
        return !0;
      }
    }
    function c(u, h) {
      return h();
    }
    var d =
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
        ? c
        : a;
    return (
      (oc.useSyncExternalStore =
        e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d),
      oc
    );
  }
  var ac = {},
    ng;
  function xC() {
    if (ng) return ac;
    ng = 1;
    var e = {};
    return (
      e.NODE_ENV !== "production" &&
        (function () {
          function t(g, m) {
            return (
              (g === m && (g !== 0 || 1 / g === 1 / m)) || (g !== g && m !== m)
            );
          }
          function r(g, m) {
            u ||
              s.startTransition === void 0 ||
              ((u = !0),
              console.error(
                "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
              ));
            var _ = m();
            if (!h) {
              var y = m();
              o(_, y) ||
                (console.error(
                  "The result of getSnapshot should be cached to avoid an infinite loop"
                ),
                (h = !0));
            }
            y = a({ inst: { value: _, getSnapshot: m } });
            var b = y[0].inst,
              v = y[1];
            return (
              c(
                function () {
                  ((b.value = _), (b.getSnapshot = m), n(b) && v({ inst: b }));
                },
                [g, _, m]
              ),
              l(
                function () {
                  return (
                    n(b) && v({ inst: b }),
                    g(function () {
                      n(b) && v({ inst: b });
                    })
                  );
                },
                [g]
              ),
              d(_),
              _
            );
          }
          function n(g) {
            var m = g.getSnapshot;
            g = g.value;
            try {
              var _ = m();
              return !o(g, _);
            } catch {
              return !0;
            }
          }
          function i(g, m) {
            return m();
          }
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
              "function" &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
          var s = So,
            o = typeof Object.is == "function" ? Object.is : t,
            a = s.useState,
            l = s.useEffect,
            c = s.useLayoutEffect,
            d = s.useDebugValue,
            u = !1,
            h = !1,
            f =
              typeof window > "u" ||
              typeof window.document > "u" ||
              typeof window.document.createElement > "u"
                ? i
                : r;
          ((ac.useSyncExternalStore =
            s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : f),
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
                "function" &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
                Error()
              ));
        })(),
      ac
    );
  }
  var ig;
  function sg() {
    if (ig) return Mo.exports;
    ig = 1;
    var e = {};
    return (
      e.NODE_ENV === "production" ? (Mo.exports = wC()) : (Mo.exports = xC()),
      Mo.exports
    );
  }
  var og;
  function kC() {
    if (og) return sc;
    og = 1;
    var e = So,
      t = sg();
    function r(c, d) {
      return (c === d && (c !== 0 || 1 / c === 1 / d)) || (c !== c && d !== d);
    }
    var n = typeof Object.is == "function" ? Object.is : r,
      i = t.useSyncExternalStore,
      s = e.useRef,
      o = e.useEffect,
      a = e.useMemo,
      l = e.useDebugValue;
    return (
      (sc.useSyncExternalStoreWithSelector = function (c, d, u, h, f) {
        var g = s(null);
        if (g.current === null) {
          var m = { hasValue: !1, value: null };
          g.current = m;
        } else m = g.current;
        g = a(
          function () {
            function y($) {
              if (!b) {
                if (
                  ((b = !0), (v = $), ($ = h($)), f !== void 0 && m.hasValue)
                ) {
                  var M = m.value;
                  if (f(M, $)) return (k = M);
                }
                return (k = $);
              }
              if (((M = k), n(v, $))) return M;
              var C = h($);
              return f !== void 0 && f(M, C)
                ? ((v = $), M)
                : ((v = $), (k = C));
            }
            var b = !1,
              v,
              k,
              x = u === void 0 ? null : u;
            return [
              function () {
                return y(d());
              },
              x === null
                ? void 0
                : function () {
                    return y(x());
                  },
            ];
          },
          [d, u, h, f]
        );
        var _ = i(c, g[0], g[1]);
        return (
          o(
            function () {
              ((m.hasValue = !0), (m.value = _));
            },
            [_]
          ),
          l(_),
          _
        );
      }),
      sc
    );
  }
  var lc = {},
    ag;
  function SC() {
    if (ag) return lc;
    ag = 1;
    var e = {};
    return (
      e.NODE_ENV !== "production" &&
        (function () {
          function t(d, u) {
            return (
              (d === u && (d !== 0 || 1 / d === 1 / u)) || (d !== d && u !== u)
            );
          }
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
              "function" &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
          var r = So,
            n = sg(),
            i = typeof Object.is == "function" ? Object.is : t,
            s = n.useSyncExternalStore,
            o = r.useRef,
            a = r.useEffect,
            l = r.useMemo,
            c = r.useDebugValue;
          ((lc.useSyncExternalStoreWithSelector = function (d, u, h, f, g) {
            var m = o(null);
            if (m.current === null) {
              var _ = { hasValue: !1, value: null };
              m.current = _;
            } else _ = m.current;
            m = l(
              function () {
                function b(M) {
                  if (!v) {
                    if (
                      ((v = !0),
                      (k = M),
                      (M = f(M)),
                      g !== void 0 && _.hasValue)
                    ) {
                      var C = _.value;
                      if (g(C, M)) return (x = C);
                    }
                    return (x = M);
                  }
                  if (((C = x), i(k, M))) return C;
                  var O = f(M);
                  return g !== void 0 && g(C, O)
                    ? ((k = M), C)
                    : ((k = M), (x = O));
                }
                var v = !1,
                  k,
                  x,
                  $ = h === void 0 ? null : h;
                return [
                  function () {
                    return b(u());
                  },
                  $ === null
                    ? void 0
                    : function () {
                        return b($());
                      },
                ];
              },
              [u, h, f, g]
            );
            var y = s(d, m[0], m[1]);
            return (
              a(
                function () {
                  ((_.hasValue = !0), (_.value = y));
                },
                [y]
              ),
              c(y),
              y
            );
          }),
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
                "function" &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
                Error()
              ));
        })(),
      lc
    );
  }
  var lg;
  function MC() {
    if (lg) return ko.exports;
    lg = 1;
    var e = {};
    return (
      e.NODE_ENV === "production" ? (ko.exports = kC()) : (ko.exports = SC()),
      ko.exports
    );
  }
  var CC = MC();
  function $C(e, t) {
    return e === t;
  }
  function ht(e, t, r = $C) {
    const n = T(
        o => {
          if (!e) return () => {};
          const { unsubscribe: a } = e.subscribe(o);
          return a;
        },
        [e]
      ),
      i = T(() => e?.get(), [e]);
    return CC.useSyncExternalStoreWithSelector(n, i, i, t, r);
  }
  const en = typeof window < "u" ? er : Q;
  function AC(e) {
    const [t, r] = L(() => ({ form: e.form, name: e.name })),
      [n, i] = L(() => new eg({ ...e }));
    (t.form !== e.form || t.name !== e.name) &&
      (i(new eg({ ...e })), r({ form: e.form, name: e.name }));
    const s = ht(
        n.store,
        e.mode === "array"
          ? f => Object.keys(f.value ?? []).length
          : f => f.value
      ),
      o = ht(n.store, f => f.meta.isTouched),
      a = ht(n.store, f => f.meta.isBlurred),
      l = ht(n.store, f => f.meta.isDirty),
      c = ht(n.store, f => f.meta.errorMap),
      d = ht(n.store, f => f.meta.errorSourceMap),
      u = ht(n.store, f => f.meta.isValidating),
      h = R(() => {
        const g = {
          ...n,
          get state() {
            return {
              value: e.mode === "array" ? n.state.value : s,
              get meta() {
                return {
                  ...n.state.meta,
                  isTouched: o,
                  isBlurred: a,
                  isDirty: l,
                  errorMap: c,
                  errorSourceMap: d,
                  isValidating: u,
                };
              },
            };
          },
        };
        return ((g.Field = cg), g);
      }, [n, e.mode, s, o, a, l, c, d, u]);
    return (
      en(n.mount, [n]),
      en(() => {
        n.update(e);
      }),
      h
    );
  }
  const cg = ({ children: e, ...t }) => {
    const r = AC(t),
      n = R(() => Gi(e, r), [e, r]);
    return Xe(Y, { children: n });
  };
  function EC() {
    return L(() => Ym())[0];
  }
  const IC = ss,
    PC = du.split(".")[0] === "17" ? EC : IC.useId;
  function OC({ form: e, selector: t = n => n, children: r }) {
    const n = ht(e.store, t);
    return Xe(Y, { children: Gi(r, n) });
  }
  function TC(e) {
    const t = PC(),
      [r, n] = L(e?.formId),
      [i, s] = L(() => new Zm({ ...e, formId: e?.formId ?? t }));
    if (r !== e?.formId) {
      const l = e?.formId ?? t;
      (s(new Zm({ ...e, formId: l })), n(l));
    }
    const o = R(() => {
      const l = {
        ...i,
        handleSubmit: (...c) => i._handleSubmit(...c),
        get formId() {
          return i._formId;
        },
        get state() {
          return i.store.state;
        },
      };
      return (
        (l.Field = function (d) {
          return Xe(cg, { ...d, form: i });
        }),
        (l.Subscribe = function (d) {
          return Xe(OC, {
            form: i,
            selector: d.selector,
            children: d.children,
          });
        }),
        l
      );
    }, [i]);
    (en(i.mount, []),
      en(() => {
        i.update(e);
      }));
    const a = he(!1);
    return (
      en(() => {
        a.current && e?.transform && vC(i, e.transform);
      }, [i, e?.transform]),
      en(() => {
        a.current = !0;
      }),
      o
    );
  }
  function RC({ lens: e, selector: t = n => n, children: r }) {
    const n = ht(e.store, t);
    return Xe(Y, { children: Gi(r, n) });
  }
  function NC(e) {
    const [t] = L(() => {
      const r = new xo(e),
        n = e.form instanceof xo ? e.form.form : e.form,
        i = r;
      return (
        (i.AppForm = function (o) {
          return Xe(n.AppForm, { ...o });
        }),
        (i.AppField = function (o) {
          return Xe(n.AppField, { ...t.getFormFieldOptions(o) });
        }),
        (i.Field = function (o) {
          return Xe(n.Field, { ...t.getFormFieldOptions(o) });
        }),
        (i.Subscribe = function (o) {
          return Xe(RC, {
            lens: t,
            selector: o.selector,
            children: o.children,
          });
        }),
        Object.assign(i, { ...e.formComponents })
      );
    });
    return (en(t.mount, [t]), t);
  }
  const ug = $t(null),
    dg = $t(null);
  function fg() {
    const e = de(dg);
    if (!e)
      throw new Error(
        "`formContext` only works when within a `formComponent` passed to `createFormHook`"
      );
    return e;
  }
  function LC() {
    function e() {
      const t = de(ug);
      if (!t)
        throw new Error(
          "`fieldContext` only works when within a `fieldComponent` passed to `createFormHook`"
        );
      return t;
    }
    return {
      fieldContext: ug,
      useFieldContext: e,
      useFormContext: fg,
      formContext: dg,
    };
  }
  function pg({
    fieldComponents: e,
    fieldContext: t,
    formContext: r,
    formComponents: n,
  }) {
    function i(c) {
      const d = TC(c),
        u = R(
          () =>
            ({ children: g }) =>
              Xe(r.Provider, { value: d, children: g }),
          [d]
        ),
        h = R(
          () =>
            ({ children: m, ..._ }) =>
              Xe(d.Field, {
                ..._,
                children: y =>
                  Xe(t.Provider, {
                    value: y,
                    children: m(Object.assign(y, e)),
                  }),
              }),
          [d]
        );
      return R(
        () => Object.assign(d, { AppField: h, AppForm: u, ...n }),
        [d, h, u]
      );
    }
    function s({ render: c, props: d }) {
      return function (h) {
        return c({ ...d, ...h });
      };
    }
    function o({ render: c, props: d, defaultValues: u }) {
      return function (f) {
        const g = R(
            () => ({
              form: f.form,
              fields: f.fields,
              defaultValues: u,
              formComponents: n,
            }),
            [f.form, f.fields]
          ),
          m = NC(g);
        return c({ ...d, ...f, group: m });
      };
    }
    function a(c) {
      return fg();
    }
    function l(c) {
      return pg({
        fieldContext: t,
        formContext: r,
        fieldComponents: { ...e, ...c.fieldComponents },
        formComponents: { ...n, ...c.formComponents },
      });
    }
    return {
      useAppForm: i,
      withForm: s,
      withFieldGroup: o,
      useTypedAppFormContext: a,
      extendForm: l,
    };
  }
  function FC({ label: e, domains: t, required: r }) {
    const n = qe(),
      i = Ji();
    return p(qt, {
      children: p(Sn, {
        hass: n,
        label: e,
        domains: t,
        value: i.state.value || "",
        required: r,
        error: i.state.meta.errors.join(", "),
        onChange: s => i.handleChange(s),
      }),
    });
  }
  function DC({ label: e, domains: t }) {
    const r = qe(),
      n = Ji();
    return p(qt, {
      children: p(p0, {
        hass: r,
        value: n.state.value ?? [],
        onChange: i => {
          n.handleChange(i);
        },
        label: e,
        domains: t,
      }),
    });
  }
  function zC({ label: e }) {
    const t = Ji();
    return P(c0, {
      children: [
        p(d0, {
          id: t.name,
          checked: t.state.value,
          onChange: r => t.handleChange(r.target?.checked ?? !1),
        }),
        p(u0, { htmlFor: t.name, children: e }),
      ],
    });
  }
  function BC() {
    const e = Ji(),
      t = qe();
    return p(sf, {
      hass: t,
      value: e.state.value,
      onChange: r => e.handleChange(r ?? {}),
    });
  }
  function VC({ label: e, required: t, isIconInput: r }) {
    const n = Ji(),
      i = qe();
    return p(l0, {
      children: p(vi, {
        value: n.state.value ?? "",
        onChange: s => n.handleChange(s ?? ""),
        hass: i,
        required: t,
        isIconInput: r,
        label: e,
        error: n.state.meta.errors.join(", "),
      }),
    });
  }
  const { fieldContext: qC, formContext: jC, useFieldContext: Ji } = LC(),
    { useAppForm: cc, withFieldGroup: Co } = pg({
      fieldContext: qC,
      formContext: jC,
      fieldComponents: {
        EntityPicker: FC,
        EntitiesPicker: DC,
        InteractionsPicker: BC,
        Toggle: zC,
        Text: VC,
      },
      formComponents: {},
    }),
    Lr = {
      root: w({
        border: "1px solid var(--outline-color, #e0e0e0)",
        borderRadius: "6px",
        position: "relative",
        marginBottom: "16px",
      }),
      rootError: w({ borderColor: "var(--error-color, #ff5252)" }),
      header: w({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 16px",
        borderBottom: "none",
      }),
      headerButtons: w({ display: "flex", gap: "8px", alignItems: "center" }),
      headerExpanded: w({
        borderBottom: "1px solid var(--outline-color, #e0e0e0)",
      }),
      title: w({ margin: 0, fontSize: "14px", fontWeight: 500 }),
      content: w({ padding: 12, display: "none" }),
      contentExpanded: w({ display: "block" }),
    },
    me = ({
      title: e,
      children: t,
      initiallyExpanded: r = !1,
      buttons: n = [],
      error: i,
    }) => {
      const [s, o] = L(r);
      return P("div", {
        css: [Lr.root, !!i && Lr.rootError],
        children: [
          P("div", {
            css: [Lr.header, s && Lr.headerExpanded],
            children: [
              p("div", { css: Lr.title, children: e }),
              P("div", {
                css: Lr.headerButtons,
                children: [
                  n.map((a, l) =>
                    p(
                      W,
                      {
                        icon: a.icon,
                        onClick: a.onClick,
                        type: "button",
                        size: "small",
                      },
                      l + a.icon
                    )
                  ),
                  p(W, {
                    onClick: () => o(!s),
                    icon: s ? "mdi:chevron-up" : "mdi:chevron-down",
                    type: "button",
                    size: "small",
                  }),
                ],
              }),
            ],
          }),
          p("div", { css: [Lr.content, s && Lr.contentExpanded], children: t }),
        ],
      });
    },
    uc = Co({
      defaultValues: { media_browser: [] },
      props: {},
      render: function ({ group: t }) {
        const r = qe();
        return p(t.Field, {
          name: "media_browser",
          mode: "array",
          children: n =>
            P(Y, {
              children: [
                Array.isArray(n.state.value) &&
                  n.state.value?.map((i, s) =>
                    p(
                      me,
                      {
                        title: i.name ?? i.entity_id ?? `Entry ${s}`,
                        buttons: [
                          {
                            icon: "mdi:delete",
                            onClick: () => n.removeValue(s),
                          },
                          {
                            icon: "mdi:arrow-up",
                            onClick: () => {
                              n.moveValue(s, s - 1);
                            },
                          },
                          {
                            icon: "mdi:arrow-down",
                            onClick: () => {
                              n.moveValue(s, s + 1);
                            },
                          },
                        ],
                        children: P(qt, {
                          children: [
                            p(t.AppField, {
                              name: `media_browser[${s}].name`,
                              children: o => p(o.Text, { label: "Name" }),
                            }),
                            p(t.AppField, {
                              name: `media_browser[${s}].entity_id`,
                              children: o =>
                                p(o.EntityPicker, {
                                  label: "Media Browser Entity ID",
                                  domains: ["media_player"],
                                }),
                            }),
                          ],
                        }),
                      },
                      s
                    )
                  ),
                p(Sn, {
                  hass: r,
                  value: "",
                  onChange: i => {
                    i &&
                      n.pushValue({
                        entity_id: i,
                        name: r.states[i]?.attributes.friendly_name ?? void 0,
                      });
                  },
                  label: "Add Media Browser",
                  domains: ["media_player"],
                }),
              ],
            }),
        });
      },
    }),
    dc = Co({
      defaultValues: { custom_buttons: [] },
      props: { formErrors: {} },
      render: function ({ group: t, formErrors: r }) {
        const n = qe(),
          i = T(
            s => !!Object.keys(r?.onChange ?? {}).find(o => o.startsWith(s)),
            [r]
          );
        return p(t.Field, {
          name: "custom_buttons",
          mode: "array",
          children: s =>
            P(Y, {
              children: [
                Array.isArray(s.state.value) &&
                  s.state.value?.map((o, a) => {
                    const l = `${o.name}-${a}`;
                    return p(
                      me,
                      {
                        title: `Button ${a} - ${o.name}`,
                        error: i(`custom_buttons[${a}]`),
                        buttons: [
                          {
                            icon: "mdi:delete",
                            onClick: () => s.removeValue(a),
                          },
                          {
                            icon: "mdi:arrow-up",
                            onClick: () => {
                              s.swapValues(a, a - 1);
                            },
                          },
                          {
                            icon: "mdi:arrow-down",
                            onClick: () => {
                              s.swapValues(a, a + 1);
                            },
                          },
                        ],
                        children: P(qt, {
                          children: [
                            p(t.AppField, {
                              name: `custom_buttons[${a}].name`,
                              children: c => p(c.Text, { label: "Name" }),
                            }),
                            p(t.AppField, {
                              name: `custom_buttons[${a}].icon`,
                              children: c =>
                                p(c.Text, { label: "Icon", isIconInput: !0 }),
                            }),
                            p(yi, { children: "Interactions" }),
                            p(t.Field, {
                              name: `custom_buttons[${a}]`,
                              children: c => {
                                const d = c.state.value ?? {
                                    icon: "",
                                    name: "",
                                  },
                                  { name: u, icon: h, ...f } = d;
                                return p(sf, {
                                  hass: n,
                                  value: f,
                                  onChange: g => {
                                    c.handleChange({ name: u, icon: h, ...g });
                                  },
                                });
                              },
                            }),
                          ],
                        }),
                      },
                      l
                    );
                  }),
                p(bi, {
                  onClick: () => {
                    s.pushValue({
                      name: "New Button",
                      icon: "mdi:button-pointer",
                    });
                  },
                  children: "Add Custom Button",
                }),
              ],
            }),
        });
      },
    }),
    fc = Co({
      defaultValues: { ma_entity_id: null, ma_favorite_button_entity_id: null },
      props: {},
      render: function ({ group: t }) {
        return P(Y, {
          children: [
            p(t.AppField, {
              name: "ma_entity_id",
              children: r =>
                p(r.EntityPicker, {
                  label: "Music Assistant Entity ID (Optional)",
                  domains: ["media_player"],
                }),
            }),
            p(t.AppField, {
              name: "ma_favorite_button_entity_id",
              children: r =>
                p(r.EntityPicker, {
                  label: "MA Favorite Button Entity ID (Optional)",
                  domains: ["button"],
                }),
            }),
          ],
        });
      },
    }),
    UC = { buttons: w({ display: "flex", flexDirection: "row", gap: "8px" }) },
    KC = ({ hass: e, entityId: t, mediaTypes: r, onChange: n }) => {
      const [i, s] = L(null),
        o = T(async () => {
          const a = {
            type: "call_service",
            domain: "media_player",
            service: "browse_media",
            service_data: { entity_id: t },
            return_response: !0,
          };
          try {
            const l = await e.connection.sendMessagePromise(a);
            return l
              ? l.response[t]?.children
                  .filter(
                    c =>
                      !c.media_content_id ||
                      (c.media_content_id &&
                        !c.media_content_id.startsWith("media-source"))
                  )
                  .map(c => ({
                    name: c.title,
                    media_type: c.media_content_type,
                    icon: GC(c),
                  })) || []
              : [];
          } catch (l) {
            return (s(l instanceof Error ? l.message : String(l)), []);
          }
        }, [t, e.connection]);
      return p(me, {
        title: "Media Types (optional)",
        children: P(Y, {
          children: [
            p(yi, {
              children:
                "Use custom media types. If none added sensible defaults will be used. Be aware that not all media types are necessarily searchable.",
            }),
            r.map((a, l) =>
              P(
                me,
                {
                  title: a.name ?? a.media_type,
                  error: !a.media_type,
                  buttons: [
                    {
                      icon: "mdi:arrow-up",
                      onClick: () => {
                        if (l === 0) return;
                        const c = [...r],
                          d = c[l - 1];
                        ((c[l - 1] = c[l]), (c[l] = d), n(c));
                      },
                    },
                    {
                      icon: "mdi:arrow-down",
                      onClick: () => {
                        if (l === r.length - 1) return;
                        const c = [...r],
                          d = c[l + 1];
                        ((c[l + 1] = c[l]), (c[l] = d), n(c));
                      },
                    },
                    {
                      icon: "mdi:delete",
                      onClick: () => {
                        const c = [...r];
                        (c.splice(l, 1), n(c));
                      },
                    },
                  ],
                  children: [
                    p(vi, {
                      hass: e,
                      value: a.name || "",
                      label: "Name",
                      onChange: c => {
                        if (!c) return;
                        const d = [...r];
                        ((d[l] = { ...d[l], name: c }), n(d));
                      },
                    }),
                    p(vi, {
                      hass: e,
                      value: a.icon ?? "",
                      isIconInput: !0,
                      label: "Icon",
                      onChange: c => {
                        if (!c) return;
                        const d = [...r];
                        ((d[l] = { ...d[l], icon: c }), n(d));
                      },
                    }),
                    p(vi, {
                      hass: e,
                      value: a.media_type || "",
                      label: "Media Type",
                      onChange: c => {
                        if (!c) return;
                        const d = [...r];
                        ((d[l] = { ...d[l], media_type: c }), n(d));
                      },
                    }),
                  ],
                },
                l + a.media_type
              )
            ),
            P("div", {
              css: UC.buttons,
              children: [
                p(bi, {
                  variant: "neutral",
                  onClick: () => n([...r, { name: "", media_type: "" }]),
                  children: "Add",
                }),
                p(bi, {
                  variant: "neutral",
                  onClick: async () => {
                    const a = await o();
                    a.length !== 0 && n(a);
                  },
                  children: "Generate",
                }),
                p(bi, {
                  variant: "danger",
                  onClick: () => n([]),
                  children: "Clear",
                }),
              ],
            }),
            i && p(ja, { children: i }),
          ],
        }),
      });
    },
    GC = e => {
      if (e.thumbnail) return e.thumbnail;
      switch (e.media_class) {
        case "album":
          return "mdi:album";
        case "artist":
          return "mdi:account-music";
        case "track":
          return "mdi:music-note";
        case "playlist":
          return "mdi:playlist-music";
        default:
          return "mdi:folder-music";
      }
    },
    pc = Co({
      defaultValues: { search: {}, ma_entity_id: null },
      props: {},
      render: function ({ group: t }) {
        const r = qe();
        return p(t.Field, {
          name: "search",
          mode: "array",
          children: n =>
            P(Y, {
              children: [
                Array.isArray(n.state.value) &&
                  n.state.value?.map((i, s) =>
                    p(
                      me,
                      {
                        title: i.name ?? i.entity_id ?? `Entry ${s}`,
                        buttons: [
                          {
                            icon: "mdi:delete",
                            onClick: () => n.removeValue(s),
                          },
                          {
                            icon: "mdi:arrow-up",
                            onClick: () => {
                              n.moveValue(s, s - 1);
                            },
                          },
                          {
                            icon: "mdi:arrow-down",
                            onClick: () => {
                              n.moveValue(s, s + 1);
                            },
                          },
                        ],
                        children: P(qt, {
                          children: [
                            p(t.AppField, {
                              name: `search[${s}].name`,
                              children: o => p(o.Text, { label: "Name" }),
                            }),
                            p(t.AppField, {
                              name: `search[${s}].entity_id`,
                              children: o =>
                                p(o.EntityPicker, {
                                  label: "Media Player Entity ID (to search)",
                                  domains: ["media_player"],
                                  required: !0,
                                }),
                            }),
                            i.entity_id &&
                              p(t.Field, {
                                name: `search[${s}].media_types`,
                                children: o =>
                                  p(KC, {
                                    entityId: i.entity_id,
                                    hass: r,
                                    mediaTypes: o.state.value ?? [],
                                    onChange: a => {
                                      o.handleChange(a ?? []);
                                    },
                                  }),
                              }),
                          ],
                        }),
                      },
                      s
                    )
                  ),
                p(Sn, {
                  hass: r,
                  value: "",
                  onChange: i => {
                    i &&
                      n.pushValue({
                        entity_id: i,
                        name: r.states[i]?.attributes.friendly_name ?? "Search",
                      });
                  },
                  label: "Add Search",
                  domains: ["media_player"],
                }),
              ],
            }),
        });
      },
    }),
    WC = ({ config: e, rootElement: t, hass: r }) => {
      const n = T(
          a => {
            const l = new Event("config-changed", {
              bubbles: !0,
              composed: !0,
            });
            ((l.detail = { config: a }), t.dispatchEvent(l));
          },
          [t]
        ),
        i = cc({
          defaultValues: qu(e),
          validators: { onChange: jM },
          listeners: {
            onChange: ({ formApi: a }) => {
              if (a.state.isValid) {
                const l = Uu(a.state.values);
                JSON.stringify(e) !== JSON.stringify(Uu(l)) &&
                  (console.log("Updating config", l), n(l));
              } else console.log(a.state.errors);
            },
            onChangeDebounceMs: 500,
          },
        }),
        s = ht(i.store, a => a.errorMap),
        o = T(
          a => !!Object.keys(s?.onChange ?? {}).find(l => l.startsWith(a)),
          [s]
        );
      return (
        Q(() => {
          const a = i.state.values,
            l = qu(e);
          JSON.stringify(a) !== JSON.stringify(l) && i.reset(l);
        }, [e, i]),
        !e || !r
          ? null
          : P(i.AppForm, {
              children: [
                p(i.AppField, {
                  name: "entity_id",
                  children: a =>
                    p(a.EntityPicker, {
                      label: "Media Player Entity",
                      required: !0,
                      domains: ["media_player"],
                    }),
                }),
                p(i.AppField, {
                  name: "name",
                  children: a => p(a.Text, { label: "Name (optional)" }),
                }),
                P(qt, {
                  css: w({
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                  }),
                  children: [
                    p(i.AppField, {
                      name: "use_art_colors",
                      children: a =>
                        p(a.Toggle, { label: "Use album art colors." }),
                    }),
                    p(i.AppField, {
                      name: "tap_opens_popup",
                      children: a => p(a.Toggle, { label: "Tap opens popup." }),
                    }),
                  ],
                }),
                P(me, {
                  title: "Interactions",
                  error: o("action"),
                  children: [
                    p(i.Field, {
                      name: "tap_opens_popup",
                      children: a =>
                        a.state.value &&
                        p(yi, {
                          children:
                            'Tap action overridden by "tap opens popup".',
                        }),
                    }),
                    p(i.AppField, {
                      name: "action",
                      children: a => p(a.InteractionsPicker, {}),
                    }),
                  ],
                }),
                P(me, {
                  title: "Speaker Group Configuration (optional)",
                  error: o("speaker_group"),
                  children: [
                    p(i.AppField, {
                      name: "speaker_group.entity_id",
                      children: a =>
                        p(a.EntityPicker, {
                          label: "Main Speaker Entity ID (Optional)",
                          domains: ["media_player"],
                        }),
                    }),
                    p(i.AppField, {
                      name: "speaker_group.entities",
                      children: a =>
                        p(a.EntitiesPicker, {
                          label: "Select Speakers (including main speaker)",
                          domains: ["media_player"],
                        }),
                    }),
                  ],
                }),
                p(me, {
                  title: "Music Assistant Configuration (optional)",
                  error: o("ma_entity_id") ?? o("ma_favorite_button_entity_id"),
                  children: p(fc, {
                    form: i,
                    fields: {
                      ma_entity_id: "ma_entity_id",
                      ma_favorite_button_entity_id:
                        "ma_favorite_button_entity_id",
                    },
                  }),
                }),
                p(me, {
                  title: "LMS Configuration (optional)",
                  error: o("lms_entity_id"),
                  children: p(i.AppField, {
                    name: "lms_entity_id",
                    children: a =>
                      p(a.EntityPicker, {
                        label: "LMS Media Player Entity ID",
                        domains: ["media_player"],
                      }),
                  }),
                }),
                p(me, {
                  title: "Search (optional)",
                  error: o("search"),
                  children: p(pc, {
                    form: i,
                    fields: { search: "search", ma_entity_id: "ma_entity_id" },
                  }),
                }),
                p(me, {
                  title: "Media Browser (optional)",
                  error: o("media_browser"),
                  children: p(uc, {
                    form: i,
                    fields: { media_browser: "media_browser" },
                  }),
                }),
                p(me, {
                  title: "Custom Buttons (optional)",
                  error: o("custom_buttons"),
                  children: p(dc, {
                    form: i,
                    formErrors: s,
                    fields: { custom_buttons: "custom_buttons" },
                  }),
                }),
                P(me, {
                  title: "Additional options (optional)",
                  error: o("options"),
                  children: [
                    p(i.AppField, {
                      name: "options.always_show_power_button",
                      children: a =>
                        p(a.Toggle, { label: "Always show power button." }),
                    }),
                    p(i.AppField, {
                      name: "options.always_show_custom_buttons",
                      children: a =>
                        p(a.Toggle, {
                          label: "Always show custom buttons panel below card",
                        }),
                    }),
                    p(i.AppField, {
                      name: "options.hide_when_off",
                      children: a =>
                        p(a.Toggle, { label: "Hide when media player is off" }),
                    }),
                    p(i.AppField, {
                      name: "options.hide_when_group_child",
                      children: a =>
                        p(a.Toggle, {
                          label: "Hide when media player is a group child",
                        }),
                    }),
                    p(i.AppField, {
                      name: "options.show_volume_step_buttons",
                      children: a =>
                        p(a.Toggle, {
                          label:
                            "Show volume step buttons + - on volume sliders",
                        }),
                    }),
                    p(i.AppField, {
                      name: "options.use_volume_up_down_for_step_buttons",
                      children: a =>
                        p(a.Toggle, {
                          label:
                            "Use volume_up and volume_down services for step buttons (breaks volume sync when step buttons are used)",
                        }),
                    }),
                    p(i.AppField, {
                      name: "options.use_experimental_lms_media_browser",
                      children: a =>
                        p(a.Toggle, {
                          label:
                            "Use experimental LMS media browser (requires lyrion_cli integration)",
                        }),
                    }),
                  ],
                }),
              ],
            })
      );
    },
    HC = {
      root: w({
        borderRadius: 0,
        overflow: "hidden",
        borderTop:
          "1px solid var(--ha-card-border-color, var(--divider-color, rgba(255, 255, 255, 0.12)))",
        backgroundColor: "rgba(0, 0, 0, 0.15)",
      }),
    },
    JC = Ue(({ setNavigationRoute: e, navigationRoute: t }) => {
      const { rootElement: r, config: n } = de(Re),
        { selectedPlayer: i } = Ne(),
        s = i,
        o = R(() => {
          const { custom_buttons: l, ...c } = s,
            d = n.media_players
              .filter(u => u.can_be_grouped)
              .map(u =>
                u.name
                  ? {
                      name: u.name,
                      entity: u.speaker_group_entity_id ?? u.entity_id,
                    }
                  : (u.speaker_group_entity_id ?? u.entity_id)
              );
          return {
            type: "custom:mediocre-media-player-card",
            speaker_group:
              d.length > 0
                ? {
                    entity_id: s.speaker_group_entity_id || s.entity_id,
                    entities: d,
                  }
                : void 0,
            options: {
              show_volume_step_buttons:
                n.options?.show_volume_step_buttons ?? !1,
              use_volume_up_down_for_step_buttons:
                n.options?.use_volume_up_down_for_step_buttons ?? !1,
            },
            ...c,
            use_art_colors: n.use_art_colors,
          };
        }, [s, n]),
        a = T(
          () => e(t === "speaker-grouping" ? "massive" : "speaker-grouping"),
          [e, t]
        );
      return p("div", {
        css: HC.root,
        children: p(mi, {
          rootElement: r,
          config: o,
          children: p(jf, { isEmbeddedInMultiCard: !0, onClick: a }),
        }),
      });
    }),
    hg = {
      root: w({ height: "100%", overflowY: "auto" }),
      header: w({ padding: "12px 16px 12px 16px" }),
    },
    YC = Ue(({ height: e }) => {
      const { selectedPlayer: t } = Ne(),
        { ma_entity_id: r, search: n, entity_id: i } = t,
        { selectedSearchProvider: s, searchProvidersMenu: o } = cf(n, i, r),
        { t: a } = Be(),
        l = () =>
          p(pr, {
            title:
              s?.entity_id === r
                ? a({
                    id: "MediocreMultiMediaPlayerCard.SearchView.search_in_ma_title",
                  })
                : a({
                    id: "MediocreMultiMediaPlayerCard.SearchView.search_title",
                  }),
            css: hg.header,
            renderAction:
              o.length > 1
                ? () =>
                    p(ze, {
                      menuItems: o,
                      align: "end",
                      renderTrigger: d =>
                        P(Ye, {
                          icon: "mdi:import",
                          invertedColors: !0,
                          border: !0,
                          size: "small",
                          ...d,
                          children: [
                            s?.name ?? s?.entity_id,
                            p(se, {
                              icon: "mdi:chevron-down",
                              size: "x-small",
                            }),
                          ],
                        }),
                    })
                : void 0,
          }),
        c = () =>
          s
            ? s.entity_id === r
              ? p(Pf, {
                  renderHeader: l,
                  maEntityId: r,
                  horizontalPadding: 16,
                  maxHeight: e,
                })
              : p(_f, {
                  renderHeader: l,
                  entityId: s.entity_id,
                  showFavorites: !0,
                  horizontalPadding: 16,
                  filterConfig: s.media_types,
                  maxHeight: e,
                })
            : null;
      return p("div", { css: hg.root, style: { maxHeight: e }, children: c() });
    }),
    Fr = {
      speakerGroupContainer: w({
        display: "flex",
        flexDirection: "column",
        padding: "16px 0px",
        gap: "12px",
        overflowY: "auto",
        height: "100%",
      }),
      horizontalPadding: w({ padding: "0px 16px" }),
      groupTitle: w({
        fontSize: "16px",
        fontWeight: 500,
        color: U.colors.onCard,
        margin: "0px 16px",
      }),
      syncContainer: w({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "auto",
        gap: "4px",
      }),
      syncText: w({ fontSize: "12px", color: U.colors.onCardMuted }),
      groupedSpeakers: w({
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }),
      titleRow: w({ display: "flex", alignItems: "center" }),
      playerSelector: w({ display: "flex", flexDirection: "column", gap: 4 }),
      playerChips: w({
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "6px 2px",
      }),
      chipPlayer: w({ padding: "0px 6px", gap: 6 }),
      chipPlayerOff: w({ opacity: 0.8 }),
      chipPlayerArtwork: w({ borderRadius: "50%" }),
    },
    QC = Ue(() => {
      const { selectedPlayer: e, setSelectedPlayer: t } = Ne(),
        r = e,
        { t: n } = Be(),
        { config: i } = de(Re),
        s = qe(),
        { media_players: o } = i,
        { entity_id: a, speaker_group_entity_id: l } = r,
        [c, d] = L(!0),
        u = l || a,
        h = R(
          () =>
            o.map(m => {
              const _ = s.states[m.entity_id],
                y = s.states[m.speaker_group_entity_id || m.entity_id],
                b = y?.attributes?.group_members ?? [],
                v = b.length === 0 ? !1 : b[0] !== y.entity_id;
              return {
                ..._,
                name: m.name ?? _?.attributes?.friendly_name,
                groupPlayerState: y,
                isChildInGroup: v,
                numPlayersInGroup: (y?.attributes?.group_members ?? []).length,
                isMainSpeaker: m.entity_id === a,
                selectPlayer: () => t(m),
              };
            }) ?? [],
          [s, a, o, t]
        ),
        f = R(
          () =>
            o
              .filter(m => m.can_be_grouped)
              .map(m =>
                m.name
                  ? {
                      name: m.name,
                      entity: m.speaker_group_entity_id ?? m.entity_id,
                    }
                  : (m.speaker_group_entity_id ?? m.entity_id)
              ),
          [o]
        ),
        g = m =>
          !m || m.isChildInGroup
            ? null
            : p(
                Is,
                {
                  entityId: m.entity_id,
                  children: p(u$, {
                    onClick: m.selectPlayer,
                    name: `${m.name}${m.numPlayersInGroup > 1 ? ` +${m.numPlayersInGroup - 1}` : ""}`,
                  }),
                },
                m.entity_id
              );
      return P("div", {
        css: Fr.speakerGroupContainer,
        children: [
          !!f &&
            f.length > 0 &&
            P(Y, {
              children: [
                p(pr, {
                  title: n({
                    id: "MediocreMultiMediaPlayerCard.SpeakerGrouping.join_title",
                  }),
                  subtitle: n({
                    id: "MediocreMultiMediaPlayerCard.SpeakerGrouping.join_subtitle",
                  }),
                  css: Fr.horizontalPadding,
                  renderAction: () =>
                    P("div", {
                      css: Fr.syncContainer,
                      children: [
                        p("span", {
                          css: Fr.syncText,
                          onClick: () => d(!c),
                          children: n({
                            id: "MediocreMultiMediaPlayerCard.SpeakerGrouping.link_volume",
                          }),
                        }),
                        p(W, {
                          icon: c ? "mdi:check-circle" : "mdi:circle-outline",
                          size: "x-small",
                          onClick: () => d(!c),
                        }),
                      ],
                    }),
                }),
                p(af, {
                  config: {
                    entity_id: a,
                    speaker_group: { entities: f, entity_id: u },
                    options: {
                      show_volume_step_buttons:
                        i.options?.show_volume_step_buttons ?? !1,
                      use_volume_up_down_for_step_buttons:
                        i.options?.use_volume_up_down_for_step_buttons ?? !1,
                    },
                  },
                  syncMainSpeaker: c,
                  css: Fr.horizontalPadding,
                }),
                p("div", {
                  children: p(Ua, {
                    config: { entity_id: u, speaker_group: { entities: f } },
                    showGrouped: !1,
                    layout: { horizontalMargin: 16 },
                  }),
                }),
              ],
            }),
          !i.disable_player_focus_switching &&
            P(Y, {
              children: [
                p(pr, {
                  title: n({
                    id: "MediocreMultiMediaPlayerCard.SpeakerGrouping.player_focus_title",
                  }),
                  subtitle: n({
                    id: "MediocreMultiMediaPlayerCard.SpeakerGrouping.player_focus_subtitle",
                  }),
                  css: Fr.horizontalPadding,
                }),
                p("div", {
                  css: [Fr.playerChips, Fr.horizontalPadding],
                  children: h.length > 0 && h.map(g),
                }),
              ],
            }),
        ],
      });
    }),
    hc = {
      root: w({ height: "100%", overflowY: "auto" }),
      header: w({ padding: "12px 16px 12px 16px" }),
      itemPlaying: w({ border: `1px solid ${U.colors.onCardDivider}` }),
      headerActions: w({
        display: "flex",
        gap: 8,
        alignItems: "center",
        justifyContent: "center",
      }),
    },
    XC = Ue(({ height: e }) => {
      const { t } = Be(),
        { selectedPlayer: r } = Ne(),
        { lms_entity_id: n, ma_entity_id: i } = r,
        s = T(
          (o, a, l) =>
            p(pr, {
              title: t({
                id: "MediocreMultiMediaPlayerCard.QueueView.up_next",
                defaultMessage: "Up Next",
              }),
              subtitle: t({
                id: "MediocreMultiMediaPlayerCard.QueueView.up_next_subtitle",
                defaultMessage: "Current playback queue",
              }),
              css: hc.header,
              renderAction: () =>
                P("div", {
                  css: hc.headerActions,
                  children: [
                    p(W, {
                      icon: "mdi:delete-sweep",
                      onClick: l,
                      size: "x-small",
                      disabled: a,
                    }),
                    p(W, {
                      icon: "mdi:refresh",
                      onClick: o,
                      size: "x-small",
                      disabled: a,
                    }),
                  ],
                }),
            }),
          [t]
        );
      return p("div", {
        css: hc.root,
        style: { maxHeight: e, "--mmpc-search-padding": "16px" },
        children: p(gg, {
          height: e,
          lms_entity_id: n,
          ma_entity_id: i,
          renderHeader: s,
        }),
      });
    }),
    De = {
      root: w({
        display: "grid",
        minHeight: 0,
        gridTemplateRows: "1fr auto",
        gridTemplateColumns: "1fr",
        rowGap: "0px !important",
        gap: "0px !important",
        margin: "0px !important",
        padding: "0px !important",
        backgroundColor: U.colors.card,
        borderRadius: "var(--ha-card-border-radius, 12px) !important",
        borderWidth: "var(--ha-card-border-width, 1px) !important",
        borderColor:
          "var(--ha-card-border-color, var(--divider-color, rgba(255, 255, 255, 0.12))) !important",
        borderStyle: "var(--ha-card-border-style, solid) !important",
        overflow: "hidden !important",
        boxSizing: "border-box",
        "*, *:before, *:after": { boxSizing: "border-box" },
      }),
      rootDesktop: w({
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr auto",
        gridTemplateAreas: `
      "massive content"
      "massive footer"
    `,
        columnGap: 12,
      }),
      rootPanel: w({
        height: "100%",
        padding: 0,
        maxHeight: "calc(100vh - 24px - var(--header-height, 16px))",
        "--ha-card-border-radius": `max(${U.sizes.cardBorderRadius}, 12px)`,
        "*": { "--ha-card-border-radius": "inherit !important" },
      }),
      rootCard: w({ height: 754 }),
      rootInCard: w({ height: 754 }),
      contentArea: w({
        alignSelf: "stretch",
        overflow: "hidden",
        minHeight: 0,
        margin: "0px !important",
        padding: "0px !important",
        backgroundColor: "transparent !important",
        borderRadius: "0px !important",
        marginBottom: "0px !important",
        border: "none !important",
        boxShadow: "none !important",
      }),
      contentAreaDesktop: w({ gridArea: "content" }),
      contentAreaDesktopMassive: w({ gridArea: "massive" }),
      contentAreaCard: w({ borderRadius: "0px !important" }),
      contentAreaTransparent: w({
        backgroundColor: "transparent !important",
        borderStyle: "none !important",
      }),
      contentAreaMassiveTransparent: w({
        backgroundColor: "transparent !important",
        borderStyle: "none !important",
      }),
      contentAreaPannelMassiveTransparent: w({ margin: "0px !important" }),
      footer: w({
        alignSelf: "end",
        gap: "0px !important",
        margin: "0px !important",
        padding: "0px !important",
        display: "flex",
        flexDirection: "column",
        borderRadius: "0px !important",
        boxShadow: "none !important",
        borderTop:
          "1px solid var(--ha-card-border-color, var(--divider-color, rgba(255, 255, 255, 0.12))) !important",
        backgroundColor: "rgba(0, 0, 0, 0.2) !important",
      }),
      footerDesktop: w({ gridArea: "footer" }),
      footerCard: w({ padding: "0px !important" }),
      footerInCard: w({ padding: "0px !important" }),
    },
    mc = ({ className: e }) => {
      const { config: t } = de(Re),
        { selectedPlayer: r, setLastInteraction: n } = Ne(),
        i = R(
          () =>
            t.size === "large"
              ? (t.options?.default_tab ?? "massive")
              : "massive",
          [t]
        ),
        [s, o] = L(i),
        [a, { height: l, width: c }] = La(),
        [d, { height: u }] = La(),
        h = c ? c > 800 : !1;
      Q(() => {
        h && s === "massive" && o(i !== "massive" ? i : "speaker-grouping");
      }, [h, i]);
      const f = T(() => {
        n();
      }, [n]);
      return (t.size && t.size !== "large") || !r
        ? null
        : P(rw, {
            useArtColors: t.use_art_colors,
            css: [
              De.root,
              t.mode === "panel" && De.rootPanel,
              t.mode === "card" && De.rootCard,
              t.mode === "in-card" && De.rootInCard,
              h && De.rootDesktop,
            ],
            className: e,
            style: t.height ? { height: t.height } : {},
            ref: a,
            onClick: f,
            children: [
              h
                ? p("div", {
                    css: [
                      De.contentArea,
                      De.contentAreaDesktopMassive,
                      t.mode === "card" && De.contentAreaCard,
                      t.options?.transparent_background_on_home &&
                        De.contentAreaMassiveTransparent,
                      t.mode === "panel" &&
                        t.options?.transparent_background_on_home &&
                        De.contentAreaMassiveTransparent,
                    ],
                    children: p(Vf, {
                      setNavigationRoute: o,
                      navigationRoute: s,
                    }),
                  })
                : null,
              P("div", {
                css: [
                  De.contentArea,
                  h && De.contentAreaDesktop,
                  t.mode === "card" && De.contentAreaCard,
                  s === "massive" &&
                    t.options?.transparent_background_on_home &&
                    De.contentAreaMassiveTransparent,
                  s === "massive" &&
                    t.mode === "panel" &&
                    t.options?.transparent_background_on_home &&
                    De.contentAreaMassiveTransparent,
                  t.mode === "in-card" && De.contentAreaTransparent,
                ],
                ref: d,
                children: [
                  s === "search" && u && p(YC, { height: u }),
                  s === "media-browser" && u && p(sw, { height: u }),
                  s === "speaker-grouping" && p(QC, {}),
                  s === "queue" && u && p(XC, { height: u }),
                  s === "massive" &&
                    p(Vf, { setNavigationRoute: o, navigationRoute: s }),
                  s === "custom-buttons" && p(ew, {}),
                ],
              }),
              P("div", {
                css: [
                  De.footer,
                  h && De.footerDesktop,
                  t.mode === "card" && De.footerCard,
                  t.mode === "in-card" && De.footerInCard,
                ],
                children: [
                  !h &&
                    s !== "massive" &&
                    l &&
                    l > 500 &&
                    p(JC, { setNavigationRoute: o, navigationRoute: s }),
                  p(nw, {
                    setNavigationRoute: o,
                    navigationRoute: s,
                    desktopMode: h,
                  }),
                ],
              }),
            ],
          });
    },
    ZC = e => {
      const t = [
        {
          action: e.action,
          name: e.name,
          entity_id: e.entity_id,
          ma_entity_id: e.ma_entity_id,
          ma_favorite_button_entity_id: e.ma_favorite_button_entity_id,
          speaker_group_entity_id: e.speaker_group?.entity_id,
          lms_entity_id: e.lms_entity_id,
          search: e.search,
          media_browser: e.media_browser,
          custom_buttons: e.custom_buttons,
          can_be_grouped: !0,
        },
        ...(
          e.speaker_group?.entities.map(r => {
            const n = typeof r == "string" ? r : r.entity;
            return n === e.entity_id || n === e.speaker_group?.entity_id
              ? null
              : typeof r == "string"
                ? { entity_id: r, can_be_grouped: !0 }
                : { entity_id: r.entity, name: r.name, can_be_grouped: !0 };
          }) ?? []
        ).filter(Boolean),
      ];
      return {
        type: "custom:mediocre-multi-media-player-card",
        use_art_colors: e.use_art_colors ?? !1,
        disable_player_focus_switching: !0,
        entity_id: e.entity_id,
        mode: e.mode === "popup" ? "in-card" : e.mode,
        size: "large",
        options: {
          hide_selected_player_header: !0,
          show_volume_step_buttons: e.options?.show_volume_step_buttons ?? !1,
          use_volume_up_down_for_step_buttons:
            e.options?.use_volume_up_down_for_step_buttons ?? !1,
          transparent_background_on_home:
            e.mode === "panel" || e.mode === "in-card" || e.mode === "popup",
          use_experimental_lms_media_browser:
            e.options?.use_experimental_lms_media_browser ?? !1,
        },
        media_players: t,
      };
    },
    e$ = ({ className: e }) => {
      const { config: t, rootElement: r } = de(Re),
        n = R(() => ZC(t), [t]);
      return p(mi, {
        rootElement: r,
        config: n,
        children: p(Za, { children: p(mc, { className: e }) }),
      });
    },
    t$ = ({ config: e, rootElement: t, hass: r }) => {
      const n = T(
          a => {
            const l = new Event("config-changed", {
              bubbles: !0,
              composed: !0,
            });
            ((l.detail = { config: a }), t.dispatchEvent(l));
          },
          [t]
        ),
        i = cc({
          defaultValues: ju(e),
          validators: { onChange: UM },
          listeners: {
            onChange: ({ formApi: a }) => {
              if (a.state.isValid) {
                const l = Ku(a.state.values);
                JSON.stringify(e) !== JSON.stringify(Ku(l)) && n(l);
              } else console.log(a.state.errors);
            },
            onChangeDebounceMs: 500,
          },
        }),
        s = ht(i.store, a => a.errorMap),
        o = T(
          a => !!Object.keys(s?.onChange ?? {}).find(l => l.startsWith(a)),
          [s]
        );
      return (
        Q(() => {
          const a = i.state.values,
            l = ju(e);
          JSON.stringify(a) !== JSON.stringify(l) && i.reset(l);
        }, [e, i]),
        !e || !r
          ? null
          : P(i.AppForm, {
              children: [
                p(i.AppField, {
                  name: "entity_id",
                  children: a =>
                    p(a.EntityPicker, {
                      label: "Media Player Entity",
                      required: !0,
                      domains: ["media_player"],
                    }),
                }),
                P(qt, {
                  css: w({
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "16px",
                  }),
                  children: [
                    p(i.AppField, {
                      name: "use_art_colors",
                      children: a =>
                        p(a.Toggle, { label: "Use album art colors." }),
                    }),
                    p(i.Field, {
                      name: "mode",
                      children: a =>
                        p(wi, {
                          options: [
                            { name: "Panel", value: "panel" },
                            { name: "Card", value: "card" },
                            { name: "In Card", value: "in-card" },
                          ],
                          onSelected: l => a.handleChange(l),
                          selected: e.mode || "panel",
                        }),
                    }),
                  ],
                }),
                p(me, {
                  title: "Interactions",
                  error: o("action"),
                  children: p(i.AppField, {
                    name: "action",
                    children: a => p(a.InteractionsPicker, {}),
                  }),
                }),
                P(me, {
                  title: "Speaker Group Configuration (optional)",
                  error: o("speaker_group"),
                  children: [
                    p(i.AppField, {
                      name: "speaker_group.entity_id",
                      children: a =>
                        p(a.EntityPicker, {
                          label: "Main Speaker Entity ID (Optional)",
                          domains: ["media_player"],
                        }),
                    }),
                    p(i.AppField, {
                      name: "speaker_group.entities",
                      children: a =>
                        p(a.EntitiesPicker, {
                          label: "Select Speakers (including main speaker)",
                          domains: ["media_player"],
                        }),
                    }),
                  ],
                }),
                p(me, {
                  title: "Music Assistant Configuration (optional)",
                  error: o("ma_entity_id") ?? o("ma_favorite_button_entity_id"),
                  children: p(fc, {
                    form: i,
                    fields: {
                      ma_entity_id: "ma_entity_id",
                      ma_favorite_button_entity_id:
                        "ma_favorite_button_entity_id",
                    },
                  }),
                }),
                p(me, {
                  title: "LMS Configuration (optional)",
                  error: o("lms_entity_id"),
                  children: p(i.AppField, {
                    name: "lms_entity_id",
                    children: a =>
                      p(a.EntityPicker, {
                        label: "LMS Media Player Entity ID",
                        domains: ["media_player"],
                      }),
                  }),
                }),
                p(me, {
                  title: "Search (optional)",
                  error: o("search"),
                  children: p(pc, {
                    form: i,
                    fields: { search: "search", ma_entity_id: "ma_entity_id" },
                  }),
                }),
                p(me, {
                  title: "Media Browser (optional)",
                  error: o("media_browser"),
                  children: p(uc, {
                    form: i,
                    fields: { media_browser: "media_browser" },
                  }),
                }),
                p(me, {
                  title: "Custom Buttons (optional)",
                  error: o("custom_buttons"),
                  children: p(dc, {
                    form: i,
                    formErrors: s,
                    fields: { custom_buttons: "custom_buttons" },
                  }),
                }),
                P(me, {
                  title: "Additional options (optional)",
                  error: o("options"),
                  children: [
                    p(i.AppField, {
                      name: "options.always_show_power_button",
                      children: a =>
                        p(a.Toggle, { label: "Always show power button." }),
                    }),
                    p(i.AppField, {
                      name: "options.show_volume_step_buttons",
                      children: a =>
                        p(a.Toggle, {
                          label:
                            "Show volume step buttons + - on volume sliders",
                        }),
                    }),
                    p(i.AppField, {
                      name: "options.use_volume_up_down_for_step_buttons",
                      children: a =>
                        p(a.Toggle, {
                          label:
                            "Use volume_up and volume_down services for step buttons (breaks volume sync when step buttons are used)",
                        }),
                    }),
                    p(i.AppField, {
                      name: "options.use_experimental_lms_media_browser",
                      children: a =>
                        p(a.Toggle, {
                          label:
                            "Use experimental LMS media browser (requires lyrion_cli integration)",
                        }),
                    }),
                  ],
                }),
              ],
            })
      );
    },
    r$ = () => {
      const { config: e } = de(Re),
        t = e.size === "compact" ? Df : mc;
      return p(Za, { children: p(t, {}) });
    },
    n$ = ({ config: e, rootElement: t, hass: r }) => {
      const n = he(null),
        i = T(
          u => {
            (n.current && clearTimeout(n.current),
              (n.current = window.setTimeout(() => {
                const h = new Event("config-changed", {
                  bubbles: !0,
                  composed: !0,
                });
                ((h.detail = { config: u }), t.dispatchEvent(h));
              }, 500)));
          },
          [t]
        ),
        s = T(u => {
          if (!u)
            return {
              type: "custom:mediocre-multi-media-player-card",
              entity_id: "",
              size: "large",
              mode: "card",
              use_art_colors: !0,
              media_players: [],
            };
          const h = u.media_players.map(g => ({
            ...g,
            search: dn(g.search, g.entity_id),
            media_browser: g?.media_browser
              ? Array.isArray(g.media_browser)
                ? g.media_browser
                : [{ entity_id: g.media_browser.entity_id ?? g.entity_id }]
              : [],
          }));
          return u.size === "large" || !u.size
            ? { ...u, size: "large", media_players: h }
            : { ...u, size: "compact", media_players: h };
        }, []),
        o = cc({
          defaultValues: s(e),
          validators: { onChange: GM },
          listeners: {
            onChange: ({ formApi: u }) => {
              const h = Object.assign(u.state.values),
                f = g => {
                  Object.keys(g).forEach(m => {
                    (g[m] === void 0 || g[m] === null) && delete g[m];
                  });
                };
              (f(h),
                h.search && f(h.search),
                u.state.isValid
                  ? JSON.stringify(e) !== JSON.stringify(h) && i(h)
                  : console.log(u.state.errors));
            },
            onChangeDebounceMs: 150,
          },
        }),
        a = ht(o.store, u => u.values.size),
        l = ht(o.store, u => u.errorMap),
        c = T(
          u => !!Object.keys(l?.onChange ?? {}).find(h => h.startsWith(u)),
          [l]
        ),
        d = T(
          () =>
            Fd()
              .filter(h => !h.attributes.active_child)
              .map(h => ({
                entity_id: h.entity_id,
                ma_entity_id: h.entity_id,
                media_browser: [
                  { entity_id: h.entity_id, name: "Music Assistant" },
                ],
                can_be_grouped: !0,
              })),
          []
        );
      return (
        Q(() => {
          const u = o.state.values,
            h = e;
          JSON.stringify(u) !== JSON.stringify(h) && o.reset(s(h));
        }, [e, o]),
        !e || !r
          ? null
          : P(o.AppForm, {
              children: [
                p(o.AppField, {
                  name: "entity_id",
                  children: u =>
                    p(u.EntityPicker, {
                      label:
                        "Default Media Player (used when no media player is active)",
                      required: !0,
                      domains: ["media_player"],
                    }),
                }),
                P(qt, {
                  css: w({
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "16px",
                  }),
                  children: [
                    p(o.AppField, {
                      name: "use_art_colors",
                      children: u =>
                        p(u.Toggle, { label: "Use album art colors." }),
                    }),
                    p(o.Field, {
                      name: "size",
                      children: u =>
                        p(wi, {
                          options: [
                            { name: "Large", value: "large" },
                            { name: "Compact", value: "compact" },
                          ],
                          onSelected: h => u.handleChange(h),
                          selected: u.state.value || "large",
                        }),
                    }),
                    a === "compact" &&
                      p(o.AppField, {
                        name: "tap_opens_popup",
                        children: u =>
                          p(u.Toggle, { label: "Tap opens popup." }),
                      }),
                    a === "large" &&
                      p(o.Field, {
                        name: "mode",
                        children: u =>
                          p(wi, {
                            options: [
                              { name: "Panel", value: "panel" },
                              { name: "Card", value: "card" },
                            ],
                            onSelected: h => u.handleChange(h),
                            selected: u.state.value || "panel",
                          }),
                      }),
                  ],
                }),
                p(me, {
                  title: "Media Players",
                  error: c("media_players"),
                  children: p(o.Field, {
                    name: "media_players",
                    mode: "array",
                    children: u =>
                      P(Y, {
                        children: [
                          u.state.value.map((h, f) =>
                            P(
                              me,
                              {
                                title:
                                  r.states[h.entity_id]?.attributes
                                    .friendly_name ||
                                  h.entity_id ||
                                  "Media Player",
                                buttons: [
                                  {
                                    icon: "mdi:delete",
                                    onClick: () => u.removeValue(f),
                                  },
                                  {
                                    icon: "mdi:arrow-up",
                                    onClick: () => {
                                      u.moveValue(f, f - 1);
                                    },
                                  },
                                  {
                                    icon: "mdi:arrow-down",
                                    onClick: () => {
                                      u.moveValue(f, f + 1);
                                    },
                                  },
                                ],
                                children: [
                                  P(qt, {
                                    children: [
                                      p(o.AppField, {
                                        name: `media_players[${f}].name`,
                                        children: g =>
                                          p(g.Text, {
                                            label: "Name (optional)",
                                          }),
                                      }),
                                      p(o.AppField, {
                                        name: `media_players[${f}].speaker_group_entity_id`,
                                        children: g =>
                                          p(g.EntityPicker, {
                                            label:
                                              "Group Media Player (if different from above)",
                                            domains: ["media_player"],
                                          }),
                                      }),
                                      p(o.AppField, {
                                        name: `media_players[${f}].can_be_grouped`,
                                        children: g =>
                                          p(g.Toggle, {
                                            label:
                                              "Enable speaker grouping (joining) for this player",
                                          }),
                                      }),
                                    ],
                                  }),
                                  p(me, {
                                    title:
                                      "Music Assistant Integration (optional)",
                                    error:
                                      c(`media_players[${f}].ma_entity_id`) ??
                                      c(
                                        `media_players[${f}].ma_favorite_button_entity_id`
                                      ),
                                    children: p(fc, {
                                      form: o,
                                      fields: {
                                        ma_entity_id: `media_players[${f}].ma_entity_id`,
                                        ma_favorite_button_entity_id: `media_players[${f}].ma_favorite_button_entity_id`,
                                      },
                                    }),
                                  }),
                                  p(me, {
                                    title: "LMS Configuration (optional)",
                                    error: c(
                                      `media_players[${f}].lms_entity_id`
                                    ),
                                    children: p(o.AppField, {
                                      name: `media_players[${f}].lms_entity_id`,
                                      children: g =>
                                        p(g.EntityPicker, {
                                          label: "LMS Media Player Entity ID",
                                          domains: ["media_player"],
                                        }),
                                    }),
                                  }),
                                  p(me, {
                                    title:
                                      "Search Configuration (optional) (not for music assistant)",
                                    error: c(`media_players[${f}].search`),
                                    children: p(pc, {
                                      form: o,
                                      fields: {
                                        search: `media_players[${f}].search`,
                                        ma_entity_id: `media_players[${f}].ma_entity_id`,
                                      },
                                    }),
                                  }),
                                  p(me, {
                                    title: "Media Browser (optional)",
                                    error: c(
                                      `media_players[${f}].media_browser`
                                    ),
                                    children: p(uc, {
                                      form: o,
                                      fields: {
                                        media_browser: `media_players[${f}].media_browser`,
                                      },
                                    }),
                                  }),
                                  p(me, {
                                    title: "Custom Buttons (optional)",
                                    error: c(
                                      `media_players[${f}].custom_buttons`
                                    ),
                                    children: p(dc, {
                                      form: o,
                                      formErrors: l,
                                      fields: {
                                        custom_buttons: `media_players[${f}].custom_buttons`,
                                      },
                                    }),
                                  }),
                                ],
                              },
                              f
                            )
                          ),
                          P("div", {
                            css: w({
                              display: "flex",
                              flexDirection: "column",
                              gap: 8,
                            }),
                            children: [
                              p(Sn, {
                                hass: r,
                                value: "",
                                onChange: h => {
                                  h && u.pushValue({ entity_id: h });
                                },
                                label: "Add a new media player",
                                domains: ["media_player"],
                              }),
                              p("span", { children: "or" }),
                              p(bi, {
                                onClick: () => {
                                  d().forEach(f => {
                                    u.pushValue(f);
                                  });
                                },
                                children:
                                  "Add all Music Assistant media players",
                              }),
                            ],
                          }),
                        ],
                      }),
                  }),
                }),
                p(me, {
                  title: "Advanced",
                  error: c("height"),
                  children: P(qt, {
                    children: [
                      a === "large" &&
                        P(Y, {
                          children: [
                            p(o.AppField, {
                              name: "height",
                              children: u => p(u.Text, { label: "Height" }),
                            }),
                            p(o.AppField, {
                              name: "options.transparent_background_on_home",
                              children: u =>
                                p(u.Toggle, {
                                  label:
                                    "Hide the card background on the home tab (massive player)",
                                }),
                            }),
                            p(o.Field, {
                              name: "options.default_tab",
                              children: u =>
                                P("div", {
                                  css: w({
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 4,
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }),
                                  children: [
                                    p(yi, { children: "Default tab:" }),
                                    p(wi, {
                                      options: [
                                        { name: "Home", value: "massive" },
                                        { name: "Search", value: "search" },
                                        {
                                          name: "Media Browser",
                                          value: "media-browser",
                                        },
                                        { name: "Queue", value: "queue" },
                                        {
                                          name: "Custom Buttons",
                                          value: "custom-buttons",
                                        },
                                        {
                                          name: "Speaker Grouping",
                                          value: "speaker-grouping",
                                        },
                                      ],
                                      onSelected: h => u.handleChange(h),
                                      selected: u.state.value || "massive",
                                    }),
                                  ],
                                }),
                            }),
                          ],
                        }),
                      a === "compact" &&
                        P(Y, {
                          children: [
                            p(o.AppField, {
                              name: "options.always_show_power_button",
                              children: u =>
                                p(u.Toggle, {
                                  label: "Always show power button.",
                                }),
                            }),
                            p(o.AppField, {
                              name: "options.always_show_custom_buttons",
                              children: u =>
                                p(u.Toggle, {
                                  label:
                                    "Always show custom buttons panel below card",
                                }),
                            }),
                            p(o.AppField, {
                              name: "options.hide_when_off",
                              children: u =>
                                p(u.Toggle, {
                                  label: "Hide when media player is off",
                                }),
                            }),
                            p(o.AppField, {
                              name: "options.hide_when_group_child",
                              children: u =>
                                p(u.Toggle, {
                                  label:
                                    "Hide when media player is a group child",
                                }),
                            }),
                          ],
                        }),
                      p(o.AppField, {
                        name: "options.show_volume_step_buttons",
                        children: u =>
                          p(u.Toggle, {
                            label:
                              "Show volume step buttons + - on volume sliders",
                          }),
                      }),
                      p(o.AppField, {
                        name: "options.use_volume_up_down_for_step_buttons",
                        children: u =>
                          p(u.Toggle, {
                            label:
                              "Use volume_up and volume_down services for step buttons (breaks volume sync when step buttons are used)",
                          }),
                      }),
                      p(o.AppField, {
                        name: "options.use_experimental_lms_media_browser",
                        children: u =>
                          p(u.Toggle, {
                            label:
                              "Use experimental LMS media browser (requires lyrion_cli integration)",
                          }),
                      }),
                      p(o.Field, {
                        name: "options.player_is_active_when",
                        children: u =>
                          P("div", {
                            css: w({
                              display: "flex",
                              flexDirection: "row",
                              gap: 4,
                              alignItems: "center",
                              justifyContent: "space-between",
                            }),
                            children: [
                              p(yi, {
                                children: "Consider player active when:",
                              }),
                              p(wi, {
                                options: [
                                  { name: "Playing", value: "playing" },
                                  {
                                    name: "Playing or Paused",
                                    value: "playing_or_paused",
                                  },
                                ],
                                onSelected: h => u.handleChange(h),
                                selected: u.state.value || "playing",
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                }),
              ],
            })
      );
    },
    mg = {
      root: w({
        display: "flex",
        flexDirection: "row",
        height: "4px",
        width: "100%",
        backgroundColor: "var(--divider-color)",
        borderRadius: "2px",
        overflow: "hidden",
      }),
      progress: w({
        height: "100%",
        backgroundColor: "var(--secondary-text-color)",
        width: "0%",
        transition: "width 1s linear",
      }),
    },
    i$ = ({ min: e, max: t, value: r }) => {
      const n = t === e ? 0 : ((r - e) / (t - e)) * 100;
      return p("div", {
        css: mg.root,
        children: p("div", { css: mg.progress, style: { width: `${n}%` } }),
      });
    },
    s$ = { itemPlaying: w({ border: `1px solid ${U.colors.onCardDivider}` }) },
    gg = ({
      height: e,
      ma_entity_id: t,
      lms_entity_id: r,
      renderHeader: n,
    }) => {
      const i = Me(),
        s = R(() => r && pi(i, r), [i, r]),
        o = R(() => Ms(i.entity_id, t ?? void 0), [i, t]),
        {
          queue: a,
          loading: l,
          refetch: c,
          error: d,
          clearQueue: u,
        } = dv(r ?? "", !!s && Dd()),
        {
          queue: h,
          loading: f,
          refetch: g,
          error: m,
          clearQueue: _,
        } = cv(t ?? "", !!o && zd()),
        y = s ? a : h,
        b = s ? l : f,
        v = s ? c : g,
        k = s ? d : m,
        x = s ? u : _,
        $ = T(
          M => (M.isPlaying && y.length < 1 ? null : p(o$, { item: M })),
          [y]
        );
      return p(ki, {
        maxHeight: e,
        data: y,
        renderHeader: n ? () => n(v, b, x) : void 0,
        keyExtractor: M => M.id + M.playlistIndex,
        renderEmpty: b
          ? () => p(lr, {})
          : k
            ? () => p("div", { children: k })
            : void 0,
        renderItem: $,
      });
    },
    o$ = Ue(({ item: e }) =>
      p(Kr, {
        numberOfColumns: 1,
        children: p(ur, {
          css: e.isPlaying ? s$.itemPlaying : void 0,
          imageUrl: e.artworkUrl,
          title: e.title,
          artist: `${e.artist}${e.album ? ` • ${e.album}` : ""}`,
          onClick: e.skipToItem,
          buttons: [
            { onClick: e.deleteItem, icon: "mdi:delete" },
            {
              onClick: () => {
                if (e.moveItem) return e.moveItem(e.playlistIndex - 1);
                if (e.moveItemUp) return e.moveItemUp();
              },
              disabled: e.isFirst,
              icon: "mdi:arrow-up-bold-outline",
            },
            {
              onClick: () => {
                if (e.moveItem) return e.moveItem(e.playlistIndex + 1);
                if (e.moveItemDown) return e.moveItemDown();
              },
              disabled: e.isLast,
              icon: "mdi:arrow-down-bold-outline",
            },
          ],
        }),
      })
    );
  (w({ display: "flex", position: "relative", flexShrink: 0 }),
    w({
      display: "block",
      marginBottom: "8px",
      color: U.colors.onCard,
      fontSize: "14px",
      fontWeight: 500,
    }),
    w({
      "--input-text-color": "var(--primary-text-color)",
      "--input-bg-color": "var(--secondary-background-color)",
      "--input-border-color": "var(--divider-color)",
      "--input-focus-border-color": "var(--secondary-text-color)",
      "--input-disabled-bg-color": "var(--disabled-color)",
      "--input-disabled-text-color": "var(--disabled-text-color)",
      width: "100%",
      padding: "8px 12px",
      color: "var(--input-text-color)",
      backgroundColor: "var(--input-bg-color)",
      border: "none",
      boxShadow: "0 0 1px 1px var(--input-border-color)",
      borderRadius: "6px",
      fontSize: "14px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "6px",
      "&:focus": {
        outline: "none",
        boxShadow: "0 0 1px 1px var(--input-focus-border-color)",
      },
      "&:disabled": {
        backgroundColor: "var(--input-disabled-bg-color)",
        color: "var(--input-disabled-text-color)",
        cursor: "not-allowed",
      },
    }));
  const a$ = e => {
      switch (e) {
        case "xx-small":
          return 12;
        case "x-small":
          return 18;
        case "small":
          return 24;
        case "medium":
          return 32;
        case "large":
          return 48;
        case "x-large":
          return 80;
        case "xx-large":
          return 120;
        default:
          return 32;
      }
    },
    l$ = 4,
    Dr = {
      root: w({
        width: "100%",
        position: "relative",
        userSelect: "none",
        WebkitUserSelect: "none",
      }),
      track: w({
        position: "relative",
        width: "100%",
        borderRadius: "6px",
        overflow: "hidden",
        cursor: "pointer",
        touchAction: "none",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: U.colors.onCardDivider,
      }),
      fill: w({
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        backgroundColor: "var(--primary-color)",
        transition: "width 0.05s",
        borderRadius: "6px",
        pointerEvents: "none",
        "&::after": {
          content: '""',
          position: "absolute",
          top: "50%",
          right: "5px",
          height: "60%",
          width: "5px",
          transform: "translateY(-50%)",
          backgroundColor: "var(--slider-on-fill-color)",
          borderRadius: "3px",
        },
      }),
      tooltip: w({
        position: "absolute",
        bottom: "calc(100% + 8px)",
        marginLeft: "-7px",
        backgroundColor: "var(--primary-color)",
        color: "var(--slider-on-fill-color)",
        padding: "2px 8px",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: "1.6",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        transition: "left 0.05s, transform 0.12s ease-out",
        zIndex: 1,
        "&::after": {
          content: '""',
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          border: "4px solid transparent",
          borderTopColor: "var(--primary-color)",
        },
      }),
      stepButton: w({
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        opacity: 0.8,
        pointerEvents: "none",
      }),
      incrementButton: w({ right: "4px" }),
      decrementButton: w({
        left: "4px",
        "--icon-primary-color": "var(--slider-on-fill-color)",
      }),
    },
    c$ = ({
      min: e,
      max: t,
      step: r,
      value: n,
      unit: i,
      sliderSize: s = "medium",
      showStepButtons: o = !1,
      className: a,
      onStepButtonClick: l,
      onChange: c,
    }) => {
      const [d, u] = L(n),
        [h, f] = L(!1),
        [g, m] = L(0),
        _ = he(null),
        y = he(),
        b = he(null);
      (Q(() => {
        !b.current && n !== d && u(n);
      }, [n]),
        Q(
          () => () => {
            y.current && clearTimeout(y.current);
          },
          []
        ));
      const v = S => {
          const I = Math.round((S - e) / r) * r + e;
          return Math.max(e, Math.min(t, I));
        },
        k = ((d - e) / (t - e)) * 100,
        x = S => {
          const I = _.current;
          I &&
            (S.preventDefault(),
            I.setPointerCapture(S.pointerId),
            (b.current = {
              startX: S.clientX,
              startValue: d,
              hasMoved: !1,
              prevClientX: S.clientX,
            }));
        },
        $ = S => {
          const I = b.current,
            q = _.current;
          if (!I || !q) return;
          const te = S.clientX - I.startX;
          if (!I.hasMoved) {
            if (Math.abs(te) < l$) return;
            ((I.hasMoved = !0),
              (I.startX = S.clientX),
              (I.startValue = d),
              f(!0));
            return;
          }
          const Se = S.clientX - I.prevClientX;
          I.prevClientX = S.clientX;
          const we = -Math.max(-15, Math.min(15, Se * 0.8));
          m(we);
          const xe = q.getBoundingClientRect().width,
            kt = (te / xe) * (t - e),
            He = v(I.startValue + kt);
          (u(He),
            y.current && clearTimeout(y.current),
            (y.current = setTimeout(() => c(He), 250)));
        },
        M = S => {
          const I = b.current,
            q = _.current;
          if (!(!I || !q)) {
            if (I.hasMoved) (y.current && clearTimeout(y.current), c(d));
            else {
              const te = q.getBoundingClientRect(),
                Se = te.left + (k / 100) * te.width;
              if (S.clientX <= Se)
                if (l) l("decrement");
                else {
                  const we = v(d - r);
                  (u(we), c(we));
                }
              else if (l) l("increment");
              else {
                const we = v(d + r);
                (u(we), c(we));
              }
            }
            ((b.current = null), f(!1), m(0));
          }
        },
        C = a$(s),
        O = r % 1 !== 0 ? 1 : 0,
        E = `${d.toFixed(O)}${i ?? ""}`,
        A = R(() => Lb("--primary-color"), []);
      return P("div", {
        css: Dr.root,
        className: a,
        style: { "--slider-on-fill-color": A },
        children: [
          p("div", {
            ref: _,
            css: Dr.track,
            style: { height: `${C}px` },
            onPointerDown: x,
            onPointerMove: $,
            onPointerUp: M,
            onPointerCancel: M,
            role: "slider",
            "aria-valuemin": e,
            "aria-valuemax": t,
            "aria-valuenow": d,
            "aria-orientation": "horizontal",
            tabIndex: 0,
            children: p("div", { css: Dr.fill, style: { width: `${k}%` } }),
          }),
          h &&
            p("div", {
              css: Dr.tooltip,
              style: {
                left: `${k}%`,
                transform: `translateX(-50%) rotate(${g}deg)`,
              },
              children: E,
            }),
          o &&
            P(Y, {
              children: [
                k < 10
                  ? null
                  : p(se, {
                      size: "x-small",
                      icon: "mdi:minus",
                      css: [Dr.stepButton, Dr.decrementButton],
                    }),
                k > 90
                  ? null
                  : p(se, {
                      size: "x-small",
                      icon: "mdi:plus",
                      css: [Dr.stepButton, Dr.incrementButton],
                    }),
              ],
            }),
        ],
      });
    },
    u$ = e => {
      const t = Me(),
        r = R(
          () => (e.name ? e.name : t.attributes.friendly_name || t.entity_id),
          [e.name, t.attributes.friendly_name, t.entity_id]
        ),
        n = `${t.title}${t.subtitle ? ` • ${t.subtitle}` : ""}`,
        i = t.attributes.entity_picture_local || t.attributes.entity_picture,
        s = Ci(),
        o = Xa(),
        a = R(() => {
          const l = [];
          if (t.state === "off")
            return (
              l.push({
                icon: "mdi:power",
                onClick: o.togglePower,
                priority: 1,
                size: "x-small",
              }),
              l
            );
          const {
            supportsStop: c,
            supportNextTrack: d,
            supportPreviousTrack: u,
            supportsRepeat: h,
            supportsShuffle: f,
            supportsTogglePlayPause: g,
          } = s;
          if (
            (f &&
              l.push({
                icon: t.attributes.shuffle
                  ? "mdi:shuffle-variant"
                  : "mdi:shuffle-disabled",
                onClick: o.toggleShuffle,
                priority: 3,
                size: "xx-small",
              }),
            u &&
              l.push({
                icon: "mdi:skip-previous",
                onClick: o.previousTrack,
                priority: 2,
                size: "x-small",
              }),
            g
              ? l.push({
                  icon:
                    t.state === "playing"
                      ? "mdi:pause-circle"
                      : "mdi:play-circle",
                  onClick: o.togglePlayback,
                  priority: 1,
                  size: "small",
                })
              : c &&
                l.push({
                  icon: "mdi:stop-circle",
                  onClick: o.stop,
                  priority: 1,
                  size: "small",
                }),
            d &&
              l.push({
                icon: "mdi:skip-next",
                onClick: o.nextTrack,
                priority: 2,
                size: "x-small",
              }),
            h)
          ) {
            const m = t.attributes.repeat;
            l.push({
              icon:
                m === "one"
                  ? "mdi:repeat-once"
                  : m === "all"
                    ? "mdi:repeat"
                    : "mdi:repeat-off",
              onClick: o.toggleRepeat,
              priority: 3,
              size: "xx-small",
            });
          }
          return l;
        }, [s, t, o]);
      return p(ur, {
        ...e,
        buttons: a,
        mdiIcon:
          t.state === "off" || !t.attributes.source
            ? fi({
                icon: t.attributes.icon,
                deviceClass: t.attributes.device_class,
              })
            : Cs({ source: t.attributes.source }),
        imageUrl: i,
        title: r,
        artist: n,
        buttonIconSize: "small",
      });
    },
    d$ = {
      off: w({
        opacity: 0.25,
        overflow: "hidden",
        borderRadius: "6px",
        "--primary-color": "var(--disabled-text-color)",
        "--text-primary-color": "var(--disabled-text-color)",
        "--art-surface-color": "var(--disabled-text-color)",
      }),
    },
    gc = ({
      entityId: e,
      useVolumeUpDownForSteps: t,
      syncGroupChildren: r,
      ...n
    }) => {
      const s = qe().states[e],
        o = s?.state === "off",
        a = s?.attributes?.volume_level ?? 0,
        l = T(
          d => {
            const u = d / 100;
            qb(e, u, r);
          },
          [e, r]
        ),
        c = T(
          d => {
            const u = d === "increment" ? "volume_up" : "volume_down";
            V().callService("media_player", u, { entity_id: e });
          },
          [e]
        );
      return p(c$, {
        min: 0,
        max: 100,
        step: 1,
        value: a * 100,
        onChange: l,
        unit: "%",
        onStepButtonClick: t ? c : void 0,
        css: o ? d$.off : {},
        ...n,
      });
    };
  class _c extends HTMLElement {
    constructor() {
      (super(...arguments),
        (this._config = null),
        (this.Card = null),
        (this.extraProps = {}),
        (this._hass = null));
    }
    set hass(t) {
      this._hass = t;
    }
    setConfig(t) {
      ((this._config = t),
        !(!this._hass || !this.Card) &&
          Vr(
            p(rf, {
              rootElement: this,
              children: p(h0, {
                children: p(bf, {
                  hass: this._hass,
                  children: p(this.Card, {
                    config: this._config,
                    hass: this._hass,
                    rootElement: this,
                    ...this.extraProps,
                  }),
                }),
              }),
            }),
            this
          ));
    }
  }
  class $o extends HTMLElement {
    constructor() {
      (super(...arguments),
        (this.Card = null),
        (this.config = null),
        (this.providePlayerContext = !0),
        (this.shouldUpdate = null),
        (this._previousHass = null),
        (this._previousConfig = null));
    }
    set hass(t) {
      if (!(!this.Card || !this.config))
        try {
          const r =
            this.config?.entity_id ||
            this.config?.media_players?.[0]?.entity_id;
          !this._previousHass ||
          this.config !== this._previousConfig ||
          !this.shouldUpdate ||
          this.shouldUpdate(this._previousHass, t)
            ? ((this._previousHass = t),
              (this._previousConfig = this.config),
              Vr(
                p(e0, {
                  locale: t?.language ?? "en",
                  children: p(rf, {
                    rootElement: this,
                    children: p(mi, {
                      rootElement: this,
                      config: this.config,
                      children: p(bf, {
                        hass: t,
                        children:
                          this.providePlayerContext && r
                            ? p(Is, { entityId: r, children: p(this.Card, {}) })
                            : p(this.Card, {}),
                      }),
                    }),
                  }),
                }),
                this
              ))
            : (this._previousHass = t);
        } catch (r) {
          console.warn(
            "[Passable Media Player Card] Error during render hydration:",
            r
          );
        }
    }
    getCardSize() {
      return 1;
    }
  }
  class _g extends $o {
    constructor() {
      (super(...arguments),
        (this.Card = Lv),
        (this.shouldUpdate = (t, r) =>
          !r || !t || !this.config || (!t && r)
            ? !0
            : sr(
                t.states[this.config.entity_id],
                r.states[this.config.entity_id]
              )));
    }
    setConfig(t) {
      if (!t.entity_id) throw new Error("You need to define an entity_id");
      if (!t.entities) throw new Error("You need to define entities");
      this.config = t;
    }
    getCardSize() {
      return 1;
    }
    getLayoutOptions() {
      return {
        grid_rows: 1,
        grid_columns: 6,
        grid_min_rows: 1,
        grid_max_rows: 1,
      };
    }
  }
  (customElements.get("passable-chip-media-player-group-card") ||
    customElements.define("passable-chip-media-player-group-card", _g),
    customElements.get("mediocre-chip-media-player-group-card") ||
      customElements.define("mediocre-chip-media-player-group-card", _g),
    (window.customCards = window.customCards || []),
    window.customCards.push({
      type: "passable-chip-media-player-group-card",
      name: "Passable Chip Media Player Group Card",
      preview: !0,
      description: "A compact chip media player group card.",
      documentationURL: "https://github.com/GBear09/passable-media-player",
    }));
  class f$ extends _c {
    constructor() {
      (super(...arguments),
        (this.Card = t$),
        (this.extraProps = { isMassive: !0, className: void 0 }));
    }
  }
  customElements.define("passable-massive-media-player-card-editor", f$);
  class yg extends $o {
    constructor() {
      (super(...arguments),
        (this.Card = e$),
        (this.shouldUpdate = (t, r) => {
          if (
            !r ||
            !t ||
            !this.config ||
            (!t && r) ||
            sr(
              t.states[this.config.entity_id],
              r.states[this.config.entity_id]
            ) ||
            (this.config.speaker_group?.entity_id &&
              sr(
                t.states[this.config.speaker_group.entity_id],
                r.states[this.config.speaker_group.entity_id]
              ))
          )
            return !0;
          if (this.config.speaker_group?.entities) {
            for (const n of this.config.speaker_group.entities)
              if (
                sr(
                  t.states[typeof n == "string" ? n : n.entity],
                  r.states[typeof n == "string" ? n : n.entity],
                  !0
                )
              )
                return !0;
          }
          return !1;
        }));
    }
    setConfig(t) {
      if (!t.entity_id) throw new Error("You need to define an entity_id");
      this.config = t;
    }
    static getConfigElement() {
      return document.createElement(
        "passable-massive-media-player-card-editor"
      );
    }
    static getStubConfig(t) {
      return {
        entity_id:
          Object.keys(t.states).filter(
            i => i.substr(0, i.indexOf(".")) === "media_player"
          )[0] ?? "",
        mode: "card",
      };
    }
  }
  (customElements.get("passable-massive-media-player-card") ||
    customElements.define("passable-massive-media-player-card", yg),
    customElements.get("mediocre-massive-media-player-card") ||
      customElements.define("mediocre-massive-media-player-card", yg),
    (window.customCards = window.customCards || []),
    window.customCards.push({
      type: "passable-massive-media-player-card",
      name: "Passable Massive Media Player Card",
      preview: !0,
      description:
        "A full-featured media player card with player grouping and Radio Mix support.",
      documentationURL: "https://github.com/GBear09/passable-media-player",
    }));
  class p$ extends _c {
    constructor() {
      (super(...arguments), (this.Card = WC));
    }
  }
  customElements.define("passable-media-player-card-editor", p$);
  class bg extends $o {
    constructor() {
      (super(...arguments),
        (this.Card = jf),
        (this.shouldUpdate = (t, r) => {
          if (
            !r ||
            !t ||
            !this.config ||
            (!t && r) ||
            sr(
              t.states[this.config.entity_id],
              r.states[this.config.entity_id]
            ) ||
            (this.config.speaker_group?.entity_id &&
              sr(
                t.states[this.config.speaker_group.entity_id],
                r.states[this.config.speaker_group.entity_id]
              ))
          )
            return !0;
          if (this.config.speaker_group?.entities) {
            for (const n of this.config.speaker_group.entities)
              if (
                sr(
                  t.states[typeof n == "string" ? n : n.entity],
                  r.states[typeof n == "string" ? n : n.entity],
                  !0
                )
              )
                return !0;
          }
          return !1;
        }));
    }
    setConfig(t) {
      if (!t.entity_id) throw new Error("You need to define an entity_id");
      this.config = t;
    }
    static getConfigElement() {
      return document.createElement("passable-media-player-card-editor");
    }
    static getStubConfig(t) {
      return {
        entity_id:
          Object.keys(t.states).filter(
            i => i.substr(0, i.indexOf(".")) === "media_player"
          )[0] ?? "",
      };
    }
    getCardSize() {
      return 2;
    }
    getGridOptions() {
      return { columns: 12, min_columns: 8 };
    }
  }
  (customElements.get("passable-media-player-card") ||
    customElements.define("passable-media-player-card", bg),
    customElements.get("mediocre-media-player-card") ||
      customElements.define("mediocre-media-player-card", bg),
    (window.customCards = window.customCards || []),
    window.customCards.push({
      type: "passable-media-player-card",
      name: "Passable Media Player Card",
      preview: !0,
      description:
        "A media player card with player grouping and Radio Mix support.",
      documentationURL: "https://github.com/GBear09/passable-media-player",
    }));
  class h$ extends _c {
    constructor() {
      (super(...arguments), (this.Card = n$));
    }
  }
  customElements.define("passable-multi-media-player-card-editor", h$);
  class vg extends $o {
    constructor() {
      (super(...arguments),
        (this.Card = r$),
        (this.providePlayerContext = !1),
        (this.shouldUpdate = (t, r) => {
          if (!r || !t || !this.config || (!t && r)) return !0;
          try {
            return this.config.media_players.some(n => {
              const i = n.entity_id,
                s = t.states?.[i],
                o = r.states?.[i];
              if (sr(s, o)) return !0;
              if (n.speaker_group_entity_id) {
                const a = t.states?.[n.speaker_group_entity_id],
                  l = r.states?.[n.speaker_group_entity_id];
                if (sr(a, l)) return !0;
              }
              return !1;
            });
          } catch {
            return !0;
          }
        }));
    }
    setConfig(t) {
      if (!t.media_players || t.media_players.length === 0)
        throw new Error("You need to define at least one media player.");
      ((!t.entity_id ||
        t.media_players.find(r => r.entity_id === t.entity_id) === void 0) &&
        (t = { ...t, entity_id: t.media_players[0].entity_id }),
        (this.config = t));
    }
    static getConfigElement() {
      return document.createElement("passable-multi-media-player-card-editor");
    }
    static getStubConfig(t) {
      const n = Object.keys(t.states).filter(
        i => i.substr(0, i.indexOf(".")) === "media_player"
      );
      return {
        entity_id: n[0] ?? "",
        mode: "card",
        size: "large",
        media_players: [{ entity_id: n[0] ?? "" }],
      };
    }
    getCardSize() {
      return 2;
    }
    getGridOptions() {
      return { columns: 12, min_columns: 8 };
    }
  }
  (customElements.get("passable-multi-media-player-card") ||
    customElements.define("passable-multi-media-player-card", vg),
    customElements.get("mediocre-multi-media-player-card") ||
      customElements.define("mediocre-multi-media-player-card", vg),
    (window.customCards = window.customCards || []),
    window.customCards.push({
      type: "passable-multi-media-player-card",
      name: "Passable Multi Media Player Card",
      preview: !0,
      description:
        "A media player card with player grouping and Radio Mix support.",
      documentationURL: "https://github.com/GBear09/passable-media-player",
    }));
});
