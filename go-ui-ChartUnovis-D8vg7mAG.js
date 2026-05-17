import { A as e, E as t, F as n, G as r, I as i, J as a, L as o, M as s, N as c, R as l, S as u, St as d, W as f, _ as p, _t as m, at as h, bt as g, ct as _, g as v, h as y, m as b, mt as x, p as S, pt as C, rt as w, u as T, ut as E, vt as D, x as O, xt as k, y as A } from "./go-ui-vue.runtime.esm-bundler-Duu92TUG.js";
//#region node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var ee = !1;
function te(e) {
	if (e.sheet) return e.sheet;
	/* istanbul ignore next */
	for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function ne(e) {
	var t = document.createElement("style");
	return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var re = /* @__PURE__ */ function() {
	function e(e) {
		var t = this;
		this._insertTag = function(e) {
			var n = t.tags.length === 0 ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling;
			t.container.insertBefore(e, n), t.tags.push(e);
		}, this.isSpeedy = e.speedy === void 0 ? !ee : e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
	}
	var t = e.prototype;
	return t.hydrate = function(e) {
		e.forEach(this._insertTag);
	}, t.insert = function(e) {
		this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(ne(this));
		var t = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var n = te(t);
			try {
				n.insertRule(e, n.cssRules.length);
			} catch {}
		} else t.appendChild(document.createTextNode(e));
		this.ctr++;
	}, t.flush = function() {
		this.tags.forEach(function(e) {
			return e.parentNode?.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, e;
}(), j = "-ms-", ie = "-moz-", M = "-webkit-", ae = "comm", oe = "rule", N = "decl", se = "@import", ce = "@keyframes", le = "@layer", ue = Math.abs, de = String.fromCharCode, fe = Object.assign;
function pe(e, t) {
	return F(e, 0) ^ 45 ? (((t << 2 ^ F(e, 0)) << 2 ^ F(e, 1)) << 2 ^ F(e, 2)) << 2 ^ F(e, 3) : 0;
}
function me(e) {
	return e.trim();
}
function he(e, t) {
	return (e = t.exec(e)) ? e[0] : e;
}
function P(e, t, n) {
	return e.replace(t, n);
}
function ge(e, t) {
	return e.indexOf(t);
}
function F(e, t) {
	return e.charCodeAt(t) | 0;
}
function _e(e, t, n) {
	return e.slice(t, n);
}
function ve(e) {
	return e.length;
}
function ye(e) {
	return e.length;
}
function be(e, t) {
	return t.push(e), e;
}
function xe(e, t) {
	return e.map(t).join("");
}
//#endregion
//#region node_modules/stylis/src/Tokenizer.js
var Se = 1, Ce = 1, we = 0, I = 0, L = 0, Te = "";
function Ee(e, t, n, r, i, a, o) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line: Se,
		column: Ce,
		length: o,
		return: ""
	};
}
function De(e, t) {
	return fe(Ee("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Oe() {
	return L;
}
function ke() {
	return L = I > 0 ? F(Te, --I) : 0, Ce--, L === 10 && (Ce = 1, Se--), L;
}
function R() {
	return L = I < we ? F(Te, I++) : 0, Ce++, L === 10 && (Ce = 1, Se++), L;
}
function Ae() {
	return F(Te, I);
}
function je() {
	return I;
}
function Me(e, t) {
	return _e(Te, e, t);
}
function Ne(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function Pe(e) {
	return Se = Ce = 1, we = ve(Te = e), I = 0, [];
}
function Fe(e) {
	return Te = "", e;
}
function Ie(e) {
	return me(Me(I - 1, ze(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Le(e) {
	for (; (L = Ae()) && L < 33;) R();
	return Ne(e) > 2 || Ne(L) > 3 ? "" : " ";
}
function Re(e, t) {
	for (; --t && R() && !(L < 48 || L > 102 || L > 57 && L < 65 || L > 70 && L < 97););
	return Me(e, je() + (t < 6 && Ae() == 32 && R() == 32));
}
function ze(e) {
	for (; R();) switch (L) {
		case e: return I;
		case 34:
		case 39:
			e !== 34 && e !== 39 && ze(L);
			break;
		case 40:
			e === 41 && ze(e);
			break;
		case 92:
			R();
			break;
	}
	return I;
}
function Be(e, t) {
	for (; R() && e + L !== 57 && !(e + L === 84 && Ae() === 47););
	return "/*" + Me(t, I - 1) + "*" + de(e === 47 ? e : R());
}
function Ve(e) {
	for (; !Ne(Ae());) R();
	return Me(e, I);
}
//#endregion
//#region node_modules/stylis/src/Parser.js
function He(e) {
	return Fe(Ue("", null, null, null, [""], e = Pe(e), 0, [0], e));
}
function Ue(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, m = 0, h = 1, g = 1, _ = 1, v = 0, y = "", b = i, x = a, S = r, C = y; g;) switch (m = v, v = R()) {
		case 40: if (m != 108 && F(C, d - 1) == 58) {
			ge(C += P(Ie(v), "&", "&\f"), "&\f") != -1 && (_ = -1);
			break;
		}
		case 34:
		case 39:
		case 91:
			C += Ie(v);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			C += Le(m);
			break;
		case 92:
			C += Re(je() - 1, 7);
			continue;
		case 47:
			switch (Ae()) {
				case 42:
				case 47:
					be(Ge(Be(R(), je()), t, n), c);
					break;
				default: C += "/";
			}
			break;
		case 123 * h: s[l++] = ve(C) * _;
		case 125 * h:
		case 59:
		case 0:
			switch (v) {
				case 0:
				case 125: g = 0;
				case 59 + u:
					_ == -1 && (C = P(C, /\f/g, "")), p > 0 && ve(C) - d && be(p > 32 ? Ke(C + ";", r, n, d - 1) : Ke(P(C, " ", "") + ";", r, n, d - 2), c);
					break;
				case 59: C += ";";
				default: if (be(S = We(C, t, n, l, u, i, s, y, b = [], x = [], d), a), v === 123) if (u === 0) Ue(C, t, S, S, b, a, d, s, x);
				else switch (f === 99 && F(C, 3) === 110 ? 100 : f) {
					case 100:
					case 108:
					case 109:
					case 115:
						Ue(e, S, S, r && be(We(e, S, S, 0, 0, i, s, y, i, b = [], d), x), i, x, d, s, r ? b : x);
						break;
					default: Ue(C, S, S, S, [""], x, 0, s, x);
				}
			}
			l = u = p = 0, h = _ = 1, y = C = "", d = o;
			break;
		case 58: d = 1 + ve(C), p = m;
		default:
			if (h < 1) {
				if (v == 123) --h;
				else if (v == 125 && h++ == 0 && ke() == 125) continue;
			}
			switch (C += de(v), v * h) {
				case 38:
					_ = u > 0 ? 1 : (C += "\f", -1);
					break;
				case 44:
					s[l++] = (ve(C) - 1) * _, _ = 1;
					break;
				case 64:
					Ae() === 45 && (C += Ie(R())), f = Ae(), u = d = ve(y = C += Ve(je())), v++;
					break;
				case 45: m === 45 && ve(C) == 2 && (h = 0);
			}
	}
	return a;
}
function We(e, t, n, r, i, a, o, s, c, l, u) {
	for (var d = i - 1, f = i === 0 ? a : [""], p = ye(f), m = 0, h = 0, g = 0; m < r; ++m) for (var _ = 0, v = _e(e, d + 1, d = ue(h = o[m])), y = e; _ < p; ++_) (y = me(h > 0 ? f[_] + " " + v : P(v, /&\f/g, f[_]))) && (c[g++] = y);
	return Ee(e, t, n, i === 0 ? oe : s, c, l, u);
}
function Ge(e, t, n) {
	return Ee(e, t, n, ae, de(Oe()), _e(e, 2, -2), 0);
}
function Ke(e, t, n, r) {
	return Ee(e, t, n, N, _e(e, 0, r), _e(e, r + 1, -1), r);
}
//#endregion
//#region node_modules/stylis/src/Serializer.js
function qe(e, t) {
	for (var n = "", r = ye(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
	return n;
}
function Je(e, t, n, r) {
	switch (e.type) {
		case le: if (e.children.length) break;
		case se:
		case N: return e.return = e.return || e.value;
		case ae: return "";
		case ce: return e.return = e.value + "{" + qe(e.children, r) + "}";
		case oe: e.value = e.props.join(",");
	}
	return ve(n = qe(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
//#endregion
//#region node_modules/stylis/src/Middleware.js
function Ye(e) {
	var t = ye(e);
	return function(n, r, i, a) {
		for (var o = "", s = 0; s < t; s++) o += e[s](n, r, i, a) || "";
		return o;
	};
}
function Xe(e) {
	return function(t) {
		t.root || (t = t.return) && e(t);
	};
}
//#endregion
//#region node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function Ze(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
//#endregion
//#region node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var Qe = function(e, t, n) {
	for (var r = 0, i = 0; r = i, i = Ae(), r === 38 && i === 12 && (t[n] = 1), !Ne(i);) R();
	return Me(e, I);
}, $e = function(e, t) {
	var n = -1, r = 44;
	do
		switch (Ne(r)) {
			case 0:
				r === 38 && Ae() === 12 && (t[n] = 1), e[n] += Qe(I - 1, t, n);
				break;
			case 2:
				e[n] += Ie(r);
				break;
			case 4: if (r === 44) {
				e[++n] = Ae() === 58 ? "&\f" : "", t[n] = e[n].length;
				break;
			}
			default: e[n] += de(r);
		}
	while (r = R());
	return e;
}, et = function(e, t) {
	return Fe($e(Pe(e), t));
}, tt = /* @__PURE__ */ new WeakMap(), nt = function(e) {
	if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
		for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; n.type !== "rule";) if (n = n.parent, !n) return;
		if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !tt.get(n)) && !r) {
			tt.set(e, !0);
			for (var i = [], a = et(t, i), o = n.props, s = 0, c = 0; s < a.length; s++) for (var l = 0; l < o.length; l++, c++) e.props[c] = i[s] ? a[s].replace(/&\f/g, o[l]) : o[l] + " " + a[s];
		}
	}
}, rt = function(e) {
	if (e.type === "decl") {
		var t = e.value;
		t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
	}
};
function it(e, t) {
	switch (pe(e, t)) {
		case 5103: return M + "print-" + e + e;
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
		case 3829: return M + e + e;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return M + e + ie + e + j + e + e;
		case 6828:
		case 4268: return M + e + j + e + e;
		case 6165: return M + e + j + "flex-" + e + e;
		case 5187: return M + e + P(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + j + "flex-$1$2") + e;
		case 5443: return M + e + j + "flex-item-" + P(e, /flex-|-self/, "") + e;
		case 4675: return M + e + j + "flex-line-pack" + P(e, /align-content|flex-|-self/, "") + e;
		case 5548: return M + e + j + P(e, "shrink", "negative") + e;
		case 5292: return M + e + j + P(e, "basis", "preferred-size") + e;
		case 6060: return M + "box-" + P(e, "-grow", "") + M + e + j + P(e, "grow", "positive") + e;
		case 4554: return M + P(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
		case 6187: return P(P(P(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e;
		case 5495:
		case 3959: return P(e, /(image-set\([^]*)/, M + "$1$`$1");
		case 4968: return P(P(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + j + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + M + e + e;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return P(e, /(.+)-inline(.+)/, M + "$1$2") + e;
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
			if (ve(e) - 1 - t > 6) switch (F(e, t + 1)) {
				case 109: if (F(e, t + 4) !== 45) break;
				case 102: return P(e, /(.+:)(.+)-([^]+)/, "$1" + M + "$2-$3$1" + ie + (F(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
				case 115: return ~ge(e, "stretch") ? it(P(e, "stretch", "fill-available"), t) + e : e;
			}
			break;
		case 4949: if (F(e, t + 1) !== 115) break;
		case 6444:
			switch (F(e, ve(e) - 3 - (~ge(e, "!important") && 10))) {
				case 107: return P(e, ":", ":" + M) + e;
				case 101: return P(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + M + (F(e, 14) === 45 ? "inline-" : "") + "box$3$1" + M + "$2$3$1" + j + "$2box$3") + e;
			}
			break;
		case 5936:
			switch (F(e, t + 11)) {
				case 114: return M + e + j + P(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
				case 108: return M + e + j + P(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
				case 45: return M + e + j + P(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
			}
			return M + e + j + e + e;
	}
	return e;
}
var at = [function(e, t, n, r) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case N:
			e.return = it(e.value, e.length);
			break;
		case ce: return qe([De(e, { value: P(e.value, "@", "@" + M) })], r);
		case oe: if (e.length) return xe(e.props, function(t) {
			switch (he(t, /(::plac\w+|:read-\w+)/)) {
				case ":read-only":
				case ":read-write": return qe([De(e, { props: [P(t, /:(read-\w+)/, ":" + ie + "$1")] })], r);
				case "::placeholder": return qe([
					De(e, { props: [P(t, /:(plac\w+)/, ":" + M + "input-$1")] }),
					De(e, { props: [P(t, /:(plac\w+)/, ":" + ie + "$1")] }),
					De(e, { props: [P(t, /:(plac\w+)/, j + "input-$1")] })
				], r);
			}
			return "";
		});
	}
}], ot = function(e) {
	var t = e.key;
	if (t === "css") {
		var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(n, function(e) {
			e.getAttribute("data-emotion").indexOf(" ") !== -1 && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var r = e.stylisPlugins || at, i = {}, a, o = [];
	a = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + t + " \"]"), function(e) {
		for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) i[t[n]] = !0;
		o.push(e);
	});
	var s, c = [nt, rt], l, u = [Je, Xe(function(e) {
		l.insert(e);
	})], d = Ye(c.concat(r, u)), f = function(e) {
		return qe(He(e), d);
	};
	s = function(e, t, n, r) {
		l = n, f(e ? e + "{" + t.styles + "}" : t.styles), r && (p.inserted[t.name] = !0);
	};
	var p = {
		key: t,
		sheet: new re({
			key: t,
			container: a,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: i,
		registered: {},
		insert: s
	};
	return p.sheet.hydrate(o), p;
};
//#endregion
//#region node_modules/@emotion/hash/dist/emotion-hash.esm.js
function st(e) {
	for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	switch (i) {
		case 3: t ^= (e.charCodeAt(r + 2) & 255) << 16;
		case 2: t ^= (e.charCodeAt(r + 1) & 255) << 8;
		case 1: t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	}
	return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
//#endregion
//#region node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var ct = {
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
	strokeWidth: 1
}, lt = !1, ut = /[A-Z]|^ms/g, dt = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ft = function(e) {
	return e.charCodeAt(1) === 45;
}, pt = function(e) {
	return e != null && typeof e != "boolean";
}, mt = /* @__PURE__ */ Ze(function(e) {
	return ft(e) ? e : e.replace(ut, "-$&").toLowerCase();
}), ht = function(e, t) {
	switch (e) {
		case "animation":
		case "animationName": if (typeof t == "string") return t.replace(dt, function(e, t, n) {
			return bt = {
				name: t,
				styles: n,
				next: bt
			}, t;
		});
	}
	return ct[e] !== 1 && !ft(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, gt = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function _t(e, t, n) {
	if (n == null) return "";
	var r = n;
	if (r.__emotion_styles !== void 0) return r;
	switch (typeof n) {
		case "boolean": return "";
		case "object":
			var i = n;
			if (i.anim === 1) return bt = {
				name: i.name,
				styles: i.styles,
				next: bt
			}, i.name;
			var a = n;
			if (a.styles !== void 0) {
				var o = a.next;
				if (o !== void 0) for (; o !== void 0;) bt = {
					name: o.name,
					styles: o.styles,
					next: bt
				}, o = o.next;
				return a.styles + ";";
			}
			return vt(e, t, n);
		case "function":
			if (e !== void 0) {
				var s = bt, c = n(e);
				return bt = s, _t(e, t, c);
			}
			break;
	}
	var l = n;
	if (t == null) return l;
	var u = t[l];
	return u === void 0 ? l : u;
}
function vt(e, t, n) {
	var r = "";
	if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += _t(e, t, n[i]) + ";";
	else for (var a in n) {
		var o = n[a];
		if (typeof o != "object") {
			var s = o;
			t != null && t[s] !== void 0 ? r += a + "{" + t[s] + "}" : pt(s) && (r += mt(a) + ":" + ht(a, s) + ";");
		} else {
			if (a === "NO_COMPONENT_SELECTOR" && lt) throw Error(gt);
			if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0)) for (var c = 0; c < o.length; c++) pt(o[c]) && (r += mt(a) + ":" + ht(a, o[c]) + ";");
			else {
				var l = _t(e, t, o);
				switch (a) {
					case "animation":
					case "animationName":
						r += mt(a) + ":" + l + ";";
						break;
					default: r += a + "{" + l + "}";
				}
			}
		}
	}
	return r;
}
var yt = /label:\s*([^\s;{]+)\s*(;|$)/g, bt;
function xt(e, t, n) {
	if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
	var r = !0, i = "";
	bt = void 0;
	var a = e[0];
	a == null || a.raw === void 0 ? (r = !1, i += _t(n, t, a)) : i += a[0];
	for (var o = 1; o < e.length; o++) i += _t(n, t, e[o]), r && (i += a[o]);
	yt.lastIndex = 0;
	for (var s = "", c; (c = yt.exec(i)) !== null;) s += "-" + c[1];
	return {
		name: st(i) + s,
		styles: i,
		next: bt
	};
}
//#endregion
//#region node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var St = !0;
function Ct(e, t, n) {
	var r = "";
	return n.split(" ").forEach(function(n) {
		e[n] === void 0 ? n && (r += n + " ") : t.push(e[n] + ";");
	}), r;
}
var wt = function(e, t, n) {
	var r = e.key + "-" + t.name;
	(n === !1 || St === !1) && e.registered[r] === void 0 && (e.registered[r] = t.styles);
}, Tt = function(e, t, n) {
	wt(e, t, n);
	var r = e.key + "-" + t.name;
	if (e.inserted[t.name] === void 0) {
		var i = t;
		do
			e.insert(t === i ? "." + r : "", i, e.sheet, !0), i = i.next;
		while (i !== void 0);
	}
};
//#endregion
//#region node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.esm.js
function Et(e, t) {
	if (e.inserted[t.name] === void 0) return e.insert("", t, e.sheet, !0);
}
function Dt(e, t, n) {
	var r = [], i = Ct(e, r, n);
	return r.length < 2 ? n : i + t(r);
}
var Ot = function(e) {
	var t = ot(e);
	t.sheet.speedy = function(e) {
		this.isSpeedy = e;
	}, t.compat = !0;
	var n = function() {
		var e = xt([...arguments], t.registered, void 0);
		return Tt(t, e, !1), t.key + "-" + e.name;
	};
	return {
		css: n,
		cx: function() {
			var e = [...arguments];
			return Dt(t.registered, n, kt(e));
		},
		injectGlobal: function() {
			Et(t, xt([...arguments], t.registered));
		},
		keyframes: function() {
			var e = xt([...arguments], t.registered), n = "animation-" + e.name;
			return Et(t, {
				name: e.name,
				styles: "@keyframes " + n + "{" + e.styles + "}"
			}), n;
		},
		hydrate: function(e) {
			e.forEach(function(e) {
				t.inserted[e] = !0;
			});
		},
		flush: function() {
			t.registered = {}, t.inserted = {}, t.sheet.flush();
		},
		sheet: t.sheet,
		cache: t,
		getRegisteredStyles: Ct.bind(null, t.registered),
		merge: Dt.bind(null, t.registered, n)
	};
}, kt = function e(t) {
	for (var n = "", r = 0; r < t.length; r++) {
		var i = t[r];
		if (i != null) {
			var a = void 0;
			switch (typeof i) {
				case "boolean": break;
				case "object":
					if (Array.isArray(i)) a = e(i);
					else for (var o in a = "", i) i[o] && o && (a && (a += " "), a += o);
					break;
				default: a = i;
			}
			a && (n && (n += " "), n += a);
		}
	}
	return n;
}, At = Ot({ key: "css" });
At.flush, At.hydrate, At.cx, At.merge, At.getRegisteredStyles;
//#endregion
//#region node_modules/@emotion/css/dist/emotion-css.esm.js
var jt = At.injectGlobal;
At.keyframes;
var z = At.css;
At.sheet, At.cache;
//#endregion
//#region node_modules/d3-array/src/ascending.js
function Mt(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-array/src/descending.js
function Nt(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-array/src/bisector.js
function Pt(e) {
	let t, n, r;
	e.length === 2 ? (t = e === Mt || e === Nt ? e : Ft, n = e, r = e) : (t = Mt, n = (t, n) => Mt(e(t), n), r = (t, n) => e(t) - n);
	function i(e, r, i = 0, a = e.length) {
		if (i < a) {
			if (t(r, r) !== 0) return a;
			do {
				let t = i + a >>> 1;
				n(e[t], r) < 0 ? i = t + 1 : a = t;
			} while (i < a);
		}
		return i;
	}
	function a(e, r, i = 0, a = e.length) {
		if (i < a) {
			if (t(r, r) !== 0) return a;
			do {
				let t = i + a >>> 1;
				n(e[t], r) <= 0 ? i = t + 1 : a = t;
			} while (i < a);
		}
		return i;
	}
	function o(e, t, n = 0, a = e.length) {
		let o = i(e, t, n, a - 1);
		return o > n && r(e[o - 1], t) > -r(e[o], t) ? o - 1 : o;
	}
	return {
		left: i,
		center: o,
		right: a
	};
}
function Ft() {
	return 0;
}
//#endregion
//#region node_modules/d3-array/src/number.js
function It(e) {
	return e === null ? NaN : +e;
}
//#endregion
//#region node_modules/d3-array/src/bisect.js
var Lt = Pt(Mt), Rt = Lt.right, zt = Lt.left;
Pt(It).center;
//#endregion
//#region node_modules/d3-array/src/extent.js
function Bt(e, t) {
	let n, r;
	if (t === void 0) for (let t of e) t != null && (n === void 0 ? t >= t && (n = r = t) : (n > t && (n = t), r < t && (r = t)));
	else {
		let i = -1;
		for (let a of e) (a = t(a, ++i, e)) != null && (n === void 0 ? a >= a && (n = r = a) : (n > a && (n = a), r < a && (r = a)));
	}
	return [n, r];
}
//#endregion
//#region node_modules/internmap/src/index.js
var Vt = class extends Map {
	constructor(e, t = Gt) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		return super.get(Ht(this, e));
	}
	has(e) {
		return super.has(Ht(this, e));
	}
	set(e, t) {
		return super.set(Ut(this, e), t);
	}
	delete(e) {
		return super.delete(Wt(this, e));
	}
};
function Ht({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : n;
}
function Ut({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function Wt({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function Gt(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
//#endregion
//#region node_modules/d3-array/src/ticks.js
var Kt = Math.sqrt(50), qt = Math.sqrt(10), Jt = Math.sqrt(2);
function Yt(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i, o = a >= Kt ? 10 : a >= qt ? 5 : a >= Jt ? 2 : 1, s, c, l;
	return i < 0 ? (l = 10 ** -i / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = 10 ** i * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && .5 <= n && n < 2 ? Yt(e, t, n * 2) : [
		s,
		c,
		l
	];
}
function Xt(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? Yt(t, e, n) : Yt(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, c = Array(s);
	if (r) if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
	else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
	return c;
}
function Zt(e, t, n) {
	return t = +t, e = +e, n = +n, Yt(e, t, n)[2];
}
function Qt(e, t, n) {
	t = +t, e = +e, n = +n;
	let r = t < e, i = r ? Zt(t, e, n) : Zt(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
//#endregion
//#region node_modules/d3-array/src/max.js
function $t(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n < t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n < i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-array/src/min.js
function en(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n > t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n > i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-array/src/quantile.js
function tn(e, t, n = It) {
	if (!(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
//#endregion
//#region node_modules/d3-array/src/mean.js
function nn(e, t) {
	let n = 0, r = 0;
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (++n, r += t);
	else {
		let i = -1;
		for (let a of e) (a = t(a, ++i, e)) != null && (a = +a) >= a && (++n, r += a);
	}
	if (n) return r / n;
}
//#endregion
//#region node_modules/d3-array/src/merge.js
function* rn(e) {
	for (let t of e) yield* t;
}
function an(e) {
	return Array.from(rn(e));
}
//#endregion
//#region node_modules/d3-array/src/range.js
function on(e, t, n) {
	e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
	for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i); ++r < i;) a[r] = e + r * n;
	return a;
}
//#endregion
//#region node_modules/d3-array/src/sum.js
function sn(e, t) {
	let n = 0;
	if (t === void 0) for (let t of e) (t = +t) && (n += t);
	else {
		let r = -1;
		for (let i of e) (i = +t(i, ++r, e)) && (n += i);
	}
	return n;
}
//#endregion
//#region node_modules/throttle-debounce/esm/index.js
function cn(e, t, n) {
	var r = n || {}, i = r.noTrailing, a = i === void 0 ? !1 : i, o = r.noLeading, s = o === void 0 ? !1 : o, c = r.debounceMode, l = c === void 0 ? void 0 : c, u, d = !1, f = 0;
	function p() {
		u && clearTimeout(u);
	}
	function m(e) {
		var t = (e || {}).upcomingOnly, n = t === void 0 ? !1 : t;
		p(), d = !n;
	}
	function h() {
		var n = [...arguments], r = this, i = Date.now() - f;
		if (d) return;
		function o() {
			f = Date.now(), t.apply(r, n);
		}
		function c() {
			u = void 0;
		}
		!s && l && !u && o(), p(), l === void 0 && i > e ? s ? (f = Date.now(), a || (u = setTimeout(l ? c : o, e))) : o() : a !== !0 && (u = setTimeout(l ? c : o, l === void 0 ? e - i : e));
	}
	return h.cancel = m, h;
}
//#endregion
//#region node_modules/@unovis/ts/types/data.js
var ln;
(function(e) {
	e.Left = "left", e.Right = "right", e.Auto = "auto";
})(ln ||= {});
//#endregion
//#region node_modules/@unovis/ts/utils/data.js
var un = (e) => typeof e == "number", dn = (e) => typeof e == "function", fn = (e) => typeof e == "string", pn = (e) => Array.isArray(e), mn = (e) => e instanceof Object, hn = (e) => e.constructor.name !== "Function" && e.constructor.name !== "Object", gn = (e) => mn(e) && !pn(e) && !dn(e) && !hn(e), _n = (e) => [Object, Array].includes((e || {}).constructor) && !Object.entries(e || {}).length, vn = (e, t, n = [], r = /* @__PURE__ */ new Set()) => {
	if (Array.isArray(e)) {
		if (!Array.isArray(t) || e.length !== t.length) return !1;
		if (r.has(e)) return !0;
		r.add(e);
		for (let i = 0; i < e.length; i++) if (!vn(e[i], t[i], n, r)) return !1;
		return !0;
	}
	if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
	if (typeof e == "object" && e && t !== null) {
		if (typeof t != "object") return !1;
		if (e === t) return !0;
		let i = Object.keys(e).filter((e) => !n.includes(e)), a = Object.keys(t).filter((e) => !n.includes(e));
		if (i.length !== a.length) return !1;
		if (r.has(e)) return !0;
		r.add(e);
		for (let a of i) if (!vn(e[a], t[a], n, r)) return !1;
		return !0;
	}
	return e === t;
}, yn = (e) => e.flat(), bn = (e, t = /* @__PURE__ */ new Map()) => {
	if (typeof e != "object" || !e) return e;
	if (e instanceof Date) return new Date(e.getTime());
	if (e instanceof Array) {
		let n = [];
		t.set(e, n);
		for (let r of e) n.push(t.has(r) ? t.get(r) : bn(r, t));
		return n;
	}
	if (hn(e)) return e;
	if (e instanceof Object) {
		let n = {};
		t.set(e, n);
		let r = e;
		return Object.keys(e).reduce((e, n) => (e[n] = t.has(r[n]) ? t.get(r[n]) : bn(r[n], t), e), n), n;
	}
	return e;
}, xn = (e, t, n = /* @__PURE__ */ new Map()) => {
	if (!e || !t || e === t) return e;
	let r = hn(e) ? e : bn(e);
	return n.has(t) ? n.get(t) : (n.set(t, r), Object.keys(t).forEach((i) => {
		i === "__proto__" || i === "constructor" || (gn(e[i]) && gn(t[i]) ? r[i] = xn(e[i], t[i], n) : hn(t) ? r[i] = t : r[i] = bn(t[i]));
	}), r);
}, Sn = (e, t, n) => cn(t, e, n);
function Cn(e, t, n) {
	return dn(t) ? t(e, n) : t;
}
function wn(e, t, n) {
	return Cn(e, t, n);
}
function B(e, t, n) {
	return Cn(e, t, n);
}
function Tn(e) {
	return e.filter((e) => e && !un(e));
}
function En(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function Dn(e, ...t) {
	if (!e) return [void 0, void 0];
	if (pn(t)) {
		let n = 0, r = 0;
		return e.forEach((e, i) => {
			let a = 0, o = 0;
			for (let n of t) {
				let t = B(e, n, i) || 0;
				t >= 0 ? a += t : o += t;
			}
			a > r && (r = a), o < n && (n = o);
		}), [n, r];
	}
}
function On(e, t, ...n) {
	let r = [], i = 0, a = 0;
	for (let o of n) {
		let n = B(e, o, t) || 0;
		n >= 0 ? r.push(i += n) : r.push(a += n);
	}
	return r;
}
function kn(e, t, n, r) {
	let i = e.map((e, n) => B(e, t, n) || 0), a = n.map((t, n) => {
		let i = nn(e, (e, n) => B(e, t, n) || 0);
		return i === 0 && Array.isArray(r) ? r[n] : i < 0;
	}), o = n.map(() => []);
	return e.forEach((e, t) => {
		let r = i[t], a = i[t];
		n.forEach((n, i) => {
			let s = B(e, n, t) || 0;
			s >= 0 ? o[i].push([r, r += s]) : o[i].push([a, a += s]);
		});
	}), o.forEach((e, t) => {
		e.isMostlyNegative = a[t];
	}), o;
}
function An(e, ...t) {
	if (e) return en(e, (e, n) => en(t, (t) => B(e, t, n)));
}
function jn(e, ...t) {
	if (e) return $t(e, (e, n) => $t(t, (t) => B(e, t, n)));
}
function Mn(e, ...t) {
	return [An(e, ...t), jn(e, ...t)];
}
function Nn(e, t, n, r = ln.Auto) {
	if (e.length <= 1) return e[0];
	let i = e.map((e, t) => [e, t]).sort(([e, t], [r, i]) => B(e, n, t) - B(r, n, i)), a = i.map(([e, t]) => B(e, n, t)), o = r === ln.Right ? zt(a, t, 0, e.length - 1) : Rt(a, t, 1, e.length);
	return r === ln.Right ? i[o][0] : r === ln.Left ? i[o - 1][0] : t - a[o - 1] > a[o] - t ? i[o][0] : i[o - 1][0];
}
function Pn(e, t, n, r = !1) {
	if (!n) return [];
	let i = e.filter((e, r) => {
		let i = B(e, n, r);
		return i >= t[0] && i <= t[1];
	});
	if (r) {
		if (i.length === 0) return [Nn(e, t[0], n, ln.Left), Nn(e, t[1], n, ln.Right)].filter(Boolean);
		let r = i[0], a = i[i.length - 1], o = e.findIndex((e) => e === r), s = e.findIndex((e) => e === a), c = Math.max(0, o - 1), l = Math.min(e.length - 1, s + 1);
		return e.slice(c, l + 1);
	}
	return i;
}
//#endregion
//#region node_modules/d3-dispatch/src/dispatch.js
var Fn = { value: () => {} };
function In() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new Ln(n);
}
function Ln(e) {
	this._ = e;
}
function Rn(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
Ln.prototype = In.prototype = {
	constructor: Ln,
	on: function(e, t) {
		var n = this._, r = Rn(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = zn(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = Bn(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = Bn(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new Ln(e);
	},
	call: function(e, t) {
		if ((i = arguments.length - 2) > 0) for (var n = Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n);
	},
	apply: function(e, t, n) {
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (var r = this._[e], i = 0, a = r.length; i < a; ++i) r[i].value.apply(t, n);
	}
};
function zn(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function Bn(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = Fn, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
//#endregion
//#region node_modules/d3-timer/src/timer.js
var Vn = 0, Hn = 0, Un = 0, Wn = 1e3, Gn, Kn, qn = 0, Jn = 0, Yn = 0, Xn = typeof performance == "object" && performance.now ? performance : Date, Zn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function Qn() {
	return Jn ||= (Zn($n), Xn.now() + Yn);
}
function $n() {
	Jn = 0;
}
function er() {
	this._call = this._time = this._next = null;
}
er.prototype = tr.prototype = {
	constructor: er,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? Qn() : +n) + (t == null ? 0 : +t), !this._next && Kn !== this && (Kn ? Kn._next = this : Gn = this, Kn = this), this._call = e, this._time = n, or();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, or());
	}
};
function tr(e, t, n) {
	var r = new er();
	return r.restart(e, t, n), r;
}
function nr() {
	Qn(), ++Vn;
	for (var e = Gn, t; e;) (t = Jn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--Vn;
}
function rr() {
	Jn = (qn = Xn.now()) + Yn, Vn = Hn = 0;
	try {
		nr();
	} finally {
		Vn = 0, ar(), Jn = 0;
	}
}
function ir() {
	var e = Xn.now(), t = e - qn;
	t > Wn && (Yn -= t, qn = e);
}
function ar() {
	for (var e, t = Gn, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Gn = n);
	Kn = e, or(r);
}
function or(e) {
	Vn || (Hn &&= clearTimeout(Hn), e - Jn > 24 ? (e < Infinity && (Hn = setTimeout(rr, e - Xn.now() - Yn)), Un &&= clearInterval(Un)) : (Un ||= (qn = Xn.now(), setInterval(ir, Wn)), Vn = 1, Zn(rr)));
}
//#endregion
//#region node_modules/d3-timer/src/timeout.js
function sr(e, t, n) {
	var r = new er();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
var cr = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region node_modules/d3-selection/src/namespace.js
function lr(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), cr.hasOwnProperty(t) ? {
		space: cr[t],
		local: e
	} : e;
}
//#endregion
//#region node_modules/d3-selection/src/creator.js
function ur(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function dr(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function fr(e) {
	var t = lr(e);
	return (t.local ? dr : ur)(t);
}
//#endregion
//#region node_modules/d3-selection/src/selector.js
function pr() {}
function mr(e) {
	return e == null ? pr : function() {
		return this.querySelector(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/select.js
function hr(e) {
	typeof e != "function" && (e = mr(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new ra(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/array.js
function gr(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selectorAll.js
function _r() {
	return [];
}
function vr(e) {
	return e == null ? _r : function() {
		return this.querySelectorAll(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectAll.js
function yr(e) {
	return function() {
		return gr(e.apply(this, arguments));
	};
}
function br(e) {
	e = typeof e == "function" ? yr(e) : vr(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new ra(r, i);
}
//#endregion
//#region node_modules/d3-selection/src/matcher.js
function xr(e) {
	return function() {
		return this.matches(e);
	};
}
function Sr(e) {
	return function(t) {
		return t.matches(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChild.js
var Cr = Array.prototype.find;
function wr(e) {
	return function() {
		return Cr.call(this.children, e);
	};
}
function Tr() {
	return this.firstElementChild;
}
function Er(e) {
	return this.select(e == null ? Tr : wr(typeof e == "function" ? e : Sr(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChildren.js
var Dr = Array.prototype.filter;
function Or() {
	return Array.from(this.children);
}
function kr(e) {
	return function() {
		return Dr.call(this.children, e);
	};
}
function Ar(e) {
	return this.selectAll(e == null ? Or : kr(typeof e == "function" ? e : Sr(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/filter.js
function jr(e) {
	typeof e != "function" && (e = xr(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new ra(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/sparse.js
function Mr(e) {
	return Array(e.length);
}
//#endregion
//#region node_modules/d3-selection/src/selection/enter.js
function Nr() {
	return new ra(this._enter || this._groups.map(Mr), this._parents);
}
function Pr(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Pr.prototype = {
	constructor: Pr,
	appendChild: function(e) {
		return this._parent.insertBefore(e, this._next);
	},
	insertBefore: function(e, t) {
		return this._parent.insertBefore(e, t);
	},
	querySelector: function(e) {
		return this._parent.querySelector(e);
	},
	querySelectorAll: function(e) {
		return this._parent.querySelectorAll(e);
	}
};
//#endregion
//#region node_modules/d3-selection/src/constant.js
function Fr(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/data.js
function Ir(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new Pr(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function Lr(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new Pr(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function Rr(e) {
	return e.__data__;
}
function zr(e, t) {
	if (!arguments.length) return Array.from(this, Rr);
	var n = t ? Lr : Ir, r = this._parents, i = this._groups;
	typeof e != "function" && (e = Fr(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = Br(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new ra(o, r), o._enter = s, o._exit = c, o;
}
function Br(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selection/exit.js
function Vr() {
	return new ra(this._exit || this._groups.map(Mr), this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/join.js
function Hr(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
//#endregion
//#region node_modules/d3-selection/src/selection/merge.js
function Ur(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new ra(s, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/order.js
function Wr() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/sort.js
function Gr(e) {
	e ||= Kr;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new ra(i, this._parents).order();
}
function Kr(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-selection/src/selection/call.js
function qr() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/nodes.js
function Jr() {
	return Array.from(this);
}
//#endregion
//#region node_modules/d3-selection/src/selection/node.js
function Yr() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
//#endregion
//#region node_modules/d3-selection/src/selection/size.js
function Xr() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/selection/empty.js
function Zr() {
	return !this.node();
}
//#endregion
//#region node_modules/d3-selection/src/selection/each.js
function Qr(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/attr.js
function $r(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function ei(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function ti(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function ni(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function ri(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function ii(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function ai(e, t) {
	var n = lr(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? ei : $r : typeof t == "function" ? n.local ? ii : ri : n.local ? ni : ti)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/window.js
function oi(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
//#endregion
//#region node_modules/d3-selection/src/selection/style.js
function si(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function ci(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function li(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function ui(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? si : typeof t == "function" ? li : ci)(e, t, n ?? "")) : di(this.node(), e);
}
function di(e, t) {
	return e.style.getPropertyValue(t) || oi(e).getComputedStyle(e, null).getPropertyValue(t);
}
//#endregion
//#region node_modules/d3-selection/src/selection/property.js
function fi(e) {
	return function() {
		delete this[e];
	};
}
function pi(e, t) {
	return function() {
		this[e] = t;
	};
}
function mi(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function hi(e, t) {
	return arguments.length > 1 ? this.each((t == null ? fi : typeof t == "function" ? mi : pi)(e, t)) : this.node()[e];
}
//#endregion
//#region node_modules/d3-selection/src/selection/classed.js
function gi(e) {
	return e.trim().split(/^|\s+/);
}
function _i(e) {
	return e.classList || new vi(e);
}
function vi(e) {
	this._node = e, this._names = gi(e.getAttribute("class") || "");
}
vi.prototype = {
	add: function(e) {
		this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
	},
	remove: function(e) {
		var t = this._names.indexOf(e);
		t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
	},
	contains: function(e) {
		return this._names.indexOf(e) >= 0;
	}
};
function yi(e, t) {
	for (var n = _i(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function bi(e, t) {
	for (var n = _i(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function xi(e) {
	return function() {
		yi(this, e);
	};
}
function Si(e) {
	return function() {
		bi(this, e);
	};
}
function Ci(e, t) {
	return function() {
		(t.apply(this, arguments) ? yi : bi)(this, e);
	};
}
function wi(e, t) {
	var n = gi(e + "");
	if (arguments.length < 2) {
		for (var r = _i(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? Ci : t ? xi : Si)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/text.js
function Ti() {
	this.textContent = "";
}
function Ei(e) {
	return function() {
		this.textContent = e;
	};
}
function Di(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function Oi(e) {
	return arguments.length ? this.each(e == null ? Ti : (typeof e == "function" ? Di : Ei)(e)) : this.node().textContent;
}
//#endregion
//#region node_modules/d3-selection/src/selection/html.js
function ki() {
	this.innerHTML = "";
}
function Ai(e) {
	return function() {
		this.innerHTML = e;
	};
}
function ji(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function Mi(e) {
	return arguments.length ? this.each(e == null ? ki : (typeof e == "function" ? ji : Ai)(e)) : this.node().innerHTML;
}
//#endregion
//#region node_modules/d3-selection/src/selection/raise.js
function Ni() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function Pi() {
	return this.each(Ni);
}
//#endregion
//#region node_modules/d3-selection/src/selection/lower.js
function Fi() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ii() {
	return this.each(Fi);
}
//#endregion
//#region node_modules/d3-selection/src/selection/append.js
function Li(e) {
	var t = typeof e == "function" ? e : fr(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/insert.js
function Ri() {
	return null;
}
function zi(e, t) {
	var n = typeof e == "function" ? e : fr(e), r = t == null ? Ri : typeof t == "function" ? t : mr(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/remove.js
function Bi() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function Vi() {
	return this.each(Bi);
}
//#endregion
//#region node_modules/d3-selection/src/selection/clone.js
function Hi() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ui() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Wi(e) {
	return this.select(e ? Ui : Hi);
}
//#endregion
//#region node_modules/d3-selection/src/selection/datum.js
function Gi(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
//#endregion
//#region node_modules/d3-selection/src/selection/on.js
function Ki(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function qi(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function Ji(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function Yi(e, t, n) {
	return function() {
		var r = this.__on, i, a = Ki(t);
		if (r) {
			for (var o = 0, s = r.length; o < s; ++o) if ((i = r[o]).type === e.type && i.name === e.name) {
				this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = t;
				return;
			}
		}
		this.addEventListener(e.type, a, n), i = {
			type: e.type,
			name: e.name,
			value: t,
			listener: a,
			options: n
		}, r ? r.push(i) : this.__on = [i];
	};
}
function Xi(e, t, n) {
	var r = qi(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? Yi : Ji, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/dispatch.js
function Zi(e, t, n) {
	var r = oi(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Qi(e, t) {
	return function() {
		return Zi(this, e, t);
	};
}
function $i(e, t) {
	return function() {
		return Zi(this, e, t.apply(this, arguments));
	};
}
function ea(e, t) {
	return this.each((typeof t == "function" ? $i : Qi)(e, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/iterator.js
function* ta() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
//#endregion
//#region node_modules/d3-selection/src/selection/index.js
var na = [null];
function ra(e, t) {
	this._groups = e, this._parents = t;
}
function ia() {
	return new ra([[document.documentElement]], na);
}
function aa() {
	return this;
}
ra.prototype = ia.prototype = {
	constructor: ra,
	select: hr,
	selectAll: br,
	selectChild: Er,
	selectChildren: Ar,
	filter: jr,
	data: zr,
	enter: Nr,
	exit: Vr,
	join: Hr,
	merge: Ur,
	selection: aa,
	order: Wr,
	sort: Gr,
	call: qr,
	nodes: Jr,
	node: Yr,
	size: Xr,
	empty: Zr,
	each: Qr,
	attr: ai,
	style: ui,
	property: hi,
	classed: wi,
	text: Oi,
	html: Mi,
	raise: Pi,
	lower: Ii,
	append: Li,
	insert: zi,
	remove: Vi,
	clone: Wi,
	datum: Gi,
	on: Xi,
	dispatch: ea,
	[Symbol.iterator]: ta
};
//#endregion
//#region node_modules/d3-selection/src/select.js
function oa(e) {
	return typeof e == "string" ? new ra([[document.querySelector(e)]], [document.documentElement]) : new ra([[e]], na);
}
//#endregion
//#region node_modules/d3-selection/src/sourceEvent.js
function sa(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/pointer.js
function ca(e, t) {
	if (e = sa(e), t === void 0 && (t = e.currentTarget), t) {
		var n = t.ownerSVGElement || t;
		if (n.createSVGPoint) {
			var r = n.createSVGPoint();
			return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
		}
		if (t.getBoundingClientRect) {
			var i = t.getBoundingClientRect();
			return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
		}
	}
	return [e.pageX, e.pageY];
}
//#endregion
//#region node_modules/@unovis/ts/types/component.js
var la;
(function(e) {
	e[e.SVG = 0] = "SVG", e[e.HTML = 1] = "HTML";
})(la ||= {});
var ua;
(function(e) {
	e.Fit = "fit", e.Extend = "extend", e.FitWidth = "fit_width";
})(ua ||= {});
//#endregion
//#region node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js
var da = [], fa = function() {
	return da.some(function(e) {
		return e.activeTargets.length > 0;
	});
}, pa = function() {
	return da.some(function(e) {
		return e.skippedTargets.length > 0;
	});
}, ma = "ResizeObserver loop completed with undelivered notifications.", ha = function() {
	var e;
	typeof ErrorEvent == "function" ? e = new ErrorEvent("error", { message: ma }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = ma), window.dispatchEvent(e);
}, ga;
(function(e) {
	e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ga ||= {});
//#endregion
//#region node_modules/@juggle/resize-observer/lib/utils/freeze.js
var _a = function(e) {
	return Object.freeze(e);
}, va = function() {
	function e(e, t) {
		this.inlineSize = e, this.blockSize = t, _a(this);
	}
	return e;
}(), ya = function() {
	function e(e, t, n, r) {
		return this.x = e, this.y = t, this.width = n, this.height = r, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, _a(this);
	}
	return e.prototype.toJSON = function() {
		var e = this;
		return {
			x: e.x,
			y: e.y,
			top: e.top,
			right: e.right,
			bottom: e.bottom,
			left: e.left,
			width: e.width,
			height: e.height
		};
	}, e.fromRect = function(t) {
		return new e(t.x, t.y, t.width, t.height);
	}, e;
}(), ba = function(e) {
	return e instanceof SVGElement && "getBBox" in e;
}, xa = function(e) {
	if (ba(e)) {
		var t = e.getBBox(), n = t.width, r = t.height;
		return !n && !r;
	}
	var i = e, a = i.offsetWidth, o = i.offsetHeight;
	return !(a || o || e.getClientRects().length);
}, Sa = function(e) {
	if (e instanceof Element) return !0;
	var t = e?.ownerDocument?.defaultView;
	return !!(t && e instanceof t.Element);
}, Ca = function(e) {
	switch (e.tagName) {
		case "INPUT": if (e.type !== "image") break;
		case "VIDEO":
		case "AUDIO":
		case "EMBED":
		case "OBJECT":
		case "CANVAS":
		case "IFRAME":
		case "IMG": return !0;
	}
	return !1;
}, wa = typeof window < "u" ? window : {}, Ta = /* @__PURE__ */ new WeakMap(), Ea = /auto|scroll/, Da = /^tb|vertical/, Oa = /msie|trident/i.test(wa.navigator && wa.navigator.userAgent), ka = function(e) {
	return parseFloat(e || "0");
}, Aa = function(e, t, n) {
	return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new va((n ? t : e) || 0, (n ? e : t) || 0);
}, ja = _a({
	devicePixelContentBoxSize: Aa(),
	borderBoxSize: Aa(),
	contentBoxSize: Aa(),
	contentRect: new ya(0, 0, 0, 0)
}), Ma = function(e, t) {
	if (t === void 0 && (t = !1), Ta.has(e) && !t) return Ta.get(e);
	if (xa(e)) return Ta.set(e, ja), ja;
	var n = getComputedStyle(e), r = ba(e) && e.ownerSVGElement && e.getBBox(), i = !Oa && n.boxSizing === "border-box", a = Da.test(n.writingMode || ""), o = !r && Ea.test(n.overflowY || ""), s = !r && Ea.test(n.overflowX || ""), c = r ? 0 : ka(n.paddingTop), l = r ? 0 : ka(n.paddingRight), u = r ? 0 : ka(n.paddingBottom), d = r ? 0 : ka(n.paddingLeft), f = r ? 0 : ka(n.borderTopWidth), p = r ? 0 : ka(n.borderRightWidth), m = r ? 0 : ka(n.borderBottomWidth), h = r ? 0 : ka(n.borderLeftWidth), g = d + l, _ = c + u, v = h + p, y = f + m, b = s ? e.offsetHeight - y - e.clientHeight : 0, x = o ? e.offsetWidth - v - e.clientWidth : 0, S = i ? g + v : 0, C = i ? _ + y : 0, w = r ? r.width : ka(n.width) - S - x, T = r ? r.height : ka(n.height) - C - b, E = w + g + x + v, D = T + _ + b + y, O = _a({
		devicePixelContentBoxSize: Aa(Math.round(w * devicePixelRatio), Math.round(T * devicePixelRatio), a),
		borderBoxSize: Aa(E, D, a),
		contentBoxSize: Aa(w, T, a),
		contentRect: new ya(d, c, w, T)
	});
	return Ta.set(e, O), O;
}, Na = function(e, t, n) {
	var r = Ma(e, n), i = r.borderBoxSize, a = r.contentBoxSize, o = r.devicePixelContentBoxSize;
	switch (t) {
		case ga.DEVICE_PIXEL_CONTENT_BOX: return o;
		case ga.BORDER_BOX: return i;
		default: return a;
	}
}, Pa = function() {
	function e(e) {
		var t = Ma(e);
		this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = _a([t.borderBoxSize]), this.contentBoxSize = _a([t.contentBoxSize]), this.devicePixelContentBoxSize = _a([t.devicePixelContentBoxSize]);
	}
	return e;
}(), Fa = function(e) {
	if (xa(e)) return Infinity;
	for (var t = 0, n = e.parentNode; n;) t += 1, n = n.parentNode;
	return t;
}, Ia = function() {
	var e = Infinity, t = [];
	da.forEach(function(n) {
		if (n.activeTargets.length !== 0) {
			var r = [];
			n.activeTargets.forEach(function(t) {
				var n = new Pa(t.target), i = Fa(t.target);
				r.push(n), t.lastReportedSize = Na(t.target, t.observedBox), i < e && (e = i);
			}), t.push(function() {
				n.callback.call(n.observer, r, n.observer);
			}), n.activeTargets.splice(0, n.activeTargets.length);
		}
	});
	for (var n = 0, r = t; n < r.length; n++) {
		var i = r[n];
		i();
	}
	return e;
}, La = function(e) {
	da.forEach(function(t) {
		t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(n) {
			n.isActive() && (Fa(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n));
		});
	});
}, Ra = function() {
	var e = 0;
	for (La(e); fa();) e = Ia(), La(e);
	return pa() && ha(), e > 0;
}, za, Ba = [], Va = function() {
	return Ba.splice(0).forEach(function(e) {
		return e();
	});
}, Ha = function(e) {
	if (!za) {
		var t = 0, n = document.createTextNode("");
		new MutationObserver(function() {
			return Va();
		}).observe(n, { characterData: !0 }), za = function() {
			n.textContent = `${t ? t-- : t++}`;
		};
	}
	Ba.push(e), za();
}, Ua = function(e) {
	Ha(function() {
		requestAnimationFrame(e);
	});
}, Wa = 0, Ga = function() {
	return !!Wa;
}, Ka = 250, qa = {
	attributes: !0,
	characterData: !0,
	childList: !0,
	subtree: !0
}, Ja = [
	"resize",
	"load",
	"transitionend",
	"animationend",
	"animationstart",
	"animationiteration",
	"keyup",
	"keydown",
	"mouseup",
	"mousedown",
	"mouseover",
	"mouseout",
	"blur",
	"focus"
], Ya = function(e) {
	return e === void 0 && (e = 0), Date.now() + e;
}, Xa = !1, Za = new (function() {
	function e() {
		var e = this;
		this.stopped = !0, this.listener = function() {
			return e.schedule();
		};
	}
	return e.prototype.run = function(e) {
		var t = this;
		if (e === void 0 && (e = Ka), !Xa) {
			Xa = !0;
			var n = Ya(e);
			Ua(function() {
				var r = !1;
				try {
					r = Ra();
				} finally {
					if (Xa = !1, e = n - Ya(), !Ga()) return;
					r ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
				}
			});
		}
	}, e.prototype.schedule = function() {
		this.stop(), this.run();
	}, e.prototype.observe = function() {
		var e = this, t = function() {
			return e.observer && e.observer.observe(document.body, qa);
		};
		document.body ? t() : wa.addEventListener("DOMContentLoaded", t);
	}, e.prototype.start = function() {
		var e = this;
		this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Ja.forEach(function(t) {
			return wa.addEventListener(t, e.listener, !0);
		}));
	}, e.prototype.stop = function() {
		var e = this;
		this.stopped ||= (this.observer && this.observer.disconnect(), Ja.forEach(function(t) {
			return wa.removeEventListener(t, e.listener, !0);
		}), !0);
	}, e;
}())(), Qa = function(e) {
	!Wa && e > 0 && Za.start(), Wa += e, !Wa && Za.stop();
}, $a = function(e) {
	return !ba(e) && !Ca(e) && getComputedStyle(e).display === "inline";
}, eo = function() {
	function e(e, t) {
		this.target = e, this.observedBox = t || ga.CONTENT_BOX, this.lastReportedSize = {
			inlineSize: 0,
			blockSize: 0
		};
	}
	return e.prototype.isActive = function() {
		var e = Na(this.target, this.observedBox, !0);
		return $a(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
	}, e;
}(), to = function() {
	function e(e, t) {
		this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = t;
	}
	return e;
}(), no = /* @__PURE__ */ new WeakMap(), ro = function(e, t) {
	for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
	return -1;
}, io = function() {
	function e() {}
	return e.connect = function(e, t) {
		var n = new to(e, t);
		no.set(e, n);
	}, e.observe = function(e, t, n) {
		var r = no.get(e), i = r.observationTargets.length === 0;
		ro(r.observationTargets, t) < 0 && (i && da.push(r), r.observationTargets.push(new eo(t, n && n.box)), Qa(1), Za.schedule());
	}, e.unobserve = function(e, t) {
		var n = no.get(e), r = ro(n.observationTargets, t), i = n.observationTargets.length === 1;
		r >= 0 && (i && da.splice(da.indexOf(n), 1), n.observationTargets.splice(r, 1), Qa(-1));
	}, e.disconnect = function(e) {
		var t = this, n = no.get(e);
		n.observationTargets.slice().forEach(function(n) {
			return t.unobserve(e, n.target);
		}), n.activeTargets.splice(0, n.activeTargets.length);
	}, e;
}(), ao = function() {
	function e(e) {
		if (arguments.length === 0) throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
		if (typeof e != "function") throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
		io.connect(this, e);
	}
	return e.prototype.observe = function(e, t) {
		if (arguments.length === 0) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
		if (!Sa(e)) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
		io.observe(this, e, t);
	}, e.prototype.unobserve = function(e) {
		if (arguments.length === 0) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
		if (!Sa(e)) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
		io.unobserve(this, e);
	}, e.prototype.disconnect = function() {
		io.disconnect(this);
	}, e.toString = function() {
		return "function ResizeObserver () { [polyfill code] }";
	}, e;
}(), oo = globalThis.ResizeObserver || ao, so = {
	duration: void 0,
	margin: {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	},
	padding: {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	},
	sizing: ua.Fit,
	width: void 0,
	height: void 0,
	svgDefs: void 0,
	ariaLabel: void 0
}, co = class e {
	constructor(t) {
		this._defaultConfig = so, this._isFirstRender = !0, this._renderAnimationFrameId = null, this._container = t;
		let n = oa(this._container);
		n.attr("role", "figure"), this.svg = n.append("svg").style("display", "block").attr("xmlns", "http://www.w3.org/2000/svg").attr("height", e.DEFAULT_CONTAINER_HEIGHT).attr("aria-hidden", !0), this._svgDefs = this.svg.append("defs"), this._svgDefsExternal = this.svg.append("defs"), this.element = this.svg.node();
	}
	updateContainer(e) {
		this.prevConfig = this.config, this.config = xn(this._defaultConfig, e), e?.svgDefs !== this.prevConfig?.svgDefs && (this._svgDefsExternal.selectAll("*").remove(), this._svgDefsExternal.html(e.svgDefs));
	}
	_preRender() {}
	_render(e) {
		let { config: t } = this;
		oa(this._container).attr("aria-label", t.ariaLabel), this._isFirstRender = !1;
	}
	render(e = this.config.duration) {
		let t = this.config.width || this.containerWidth, n = this.config.height || this.containerHeight;
		this.svg.attr("width", t).attr("height", n), this._resizeObserver || this._setUpResizeObserver(), cancelAnimationFrame(this._renderAnimationFrameId), this._renderAnimationFrameId = requestAnimationFrame(() => {
			this._preRender(), this._render(e);
		});
	}
	get containerWidth() {
		return this.config.width ? this.element.clientWidth : this._container.clientWidth || this._container.getBoundingClientRect().width;
	}
	get containerHeight() {
		return this.config.height ? this.element.clientHeight : this._container.clientHeight || this._container.getBoundingClientRect().height || e.DEFAULT_CONTAINER_HEIGHT;
	}
	get width() {
		return En(this.containerWidth - this.config.margin.left - this.config.margin.right, 0, Infinity);
	}
	get height() {
		return En(this.containerHeight - this.config.margin.top - this.config.margin.bottom, 0, Infinity);
	}
	_removeAllChildren() {
		for (; this.element.firstChild;) this.element.removeChild(this.element.firstChild);
	}
	_onResize() {
		let { config: e } = this;
		(e.sizing === ua.Fit || e.sizing === ua.FitWidth) && this.render(0);
	}
	_setUpResizeObserver() {
		if (this._resizeObserver) return;
		let e = this._container.getBoundingClientRect();
		this._containerSize = {
			width: e.width,
			height: e.height
		}, this._resizeObserver = new oo((e, t) => {
			cancelAnimationFrame(this._resizeObserverAnimationFrameId), this._resizeObserverAnimationFrameId = requestAnimationFrame(() => {
				let e = this._container.getBoundingClientRect(), t = {
					width: e.width,
					height: e.height
				};
				!vn(this._containerSize, t) && t.width && t.height && (this._containerSize = t, this._onResize());
			});
		}), this._resizeObserver.observe(this._container);
	}
	destroy() {
		var e;
		cancelAnimationFrame(this._renderAnimationFrameId), cancelAnimationFrame(this._resizeObserverAnimationFrameId), (e = this._resizeObserver) == null || e.disconnect(), this.svg.remove();
	}
};
co.DEFAULT_CONTAINER_HEIGHT = 300;
//#endregion
//#region node_modules/@unovis/ts/utils/misc.js
function lo() {
	let e = () => Math.floor((1 + crypto.getRandomValues(new Uint32Array(1))[0]) * 65536).toString(16).substring(1);
	return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}
var uo = /* @__PURE__ */ new WeakMap();
function fo(e, t) {
	if (!fn(e)) return "";
	let n = e.substr(4, e.length - 5), r = uo.get(t);
	if (r || (r = /* @__PURE__ */ new Map(), uo.set(t, r)), r.has(n)) return r.get(n);
	let i = getComputedStyle(t).getPropertyValue(n);
	return r.set(n, i), i;
}
function po(e, t, n = 0) {
	let [r, i, a, o] = [
		e.x + n,
		e.y + e.height - 2 * n,
		e.x + e.width - 2 * n,
		e.y + n
	], [s, c, l, u] = [
		t.x + n,
		t.y + t.height - 2 * n,
		t.x + t.width - 2 * n,
		t.y + n
	];
	return !(i < u || c < o || a < s || l < r);
}
//#endregion
//#region node_modules/d3-color/src/define.js
function mo(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function ho(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region node_modules/d3-color/src/color.js
function go() {}
var _o = .7, vo = 1 / _o, yo = "\\s*([+-]?\\d+)\\s*", bo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", xo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", So = /^#([0-9a-f]{3,8})$/, Co = RegExp(`^rgb\\(${yo},${yo},${yo}\\)$`), wo = RegExp(`^rgb\\(${xo},${xo},${xo}\\)$`), To = RegExp(`^rgba\\(${yo},${yo},${yo},${bo}\\)$`), Eo = RegExp(`^rgba\\(${xo},${xo},${xo},${bo}\\)$`), Do = RegExp(`^hsl\\(${bo},${xo},${xo}\\)$`), Oo = RegExp(`^hsla\\(${bo},${xo},${xo},${bo}\\)$`), ko = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
mo(go, Po, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: Ao,
	formatHex: Ao,
	formatHex8: jo,
	formatHsl: Mo,
	formatRgb: No,
	toString: No
});
function Ao() {
	return this.rgb().formatHex();
}
function jo() {
	return this.rgb().formatHex8();
}
function Mo() {
	return Ko(this).formatHsl();
}
function No() {
	return this.rgb().formatRgb();
}
function Po(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = So.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Fo(t) : n === 3 ? new V(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Io(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Io(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Co.exec(e)) ? new V(t[1], t[2], t[3], 1) : (t = wo.exec(e)) ? new V(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = To.exec(e)) ? Io(t[1], t[2], t[3], t[4]) : (t = Eo.exec(e)) ? Io(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Do.exec(e)) ? Go(t[1], t[2] / 100, t[3] / 100, 1) : (t = Oo.exec(e)) ? Go(t[1], t[2] / 100, t[3] / 100, t[4]) : ko.hasOwnProperty(e) ? Fo(ko[e]) : e === "transparent" ? new V(NaN, NaN, NaN, 0) : null;
}
function Fo(e) {
	return new V(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Io(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new V(e, t, n, r);
}
function Lo(e) {
	return e instanceof go || (e = Po(e)), e ? (e = e.rgb(), new V(e.r, e.g, e.b, e.opacity)) : new V();
}
function Ro(e, t, n, r) {
	return arguments.length === 1 ? Lo(e) : new V(e, t, n, r ?? 1);
}
function V(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
mo(V, Ro, ho(go, {
	brighter(e) {
		return e = e == null ? vo : vo ** +e, new V(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? _o : _o ** +e, new V(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new V(Uo(this.r), Uo(this.g), Uo(this.b), Ho(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: zo,
	formatHex: zo,
	formatHex8: Bo,
	formatRgb: Vo,
	toString: Vo
}));
function zo() {
	return `#${Wo(this.r)}${Wo(this.g)}${Wo(this.b)}`;
}
function Bo() {
	return `#${Wo(this.r)}${Wo(this.g)}${Wo(this.b)}${Wo((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Vo() {
	let e = Ho(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${Uo(this.r)}, ${Uo(this.g)}, ${Uo(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ho(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Uo(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Wo(e) {
	return e = Uo(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Go(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Jo(e, t, n, r);
}
function Ko(e) {
	if (e instanceof Jo) return new Jo(e.h, e.s, e.l, e.opacity);
	if (e instanceof go || (e = Po(e)), !e) return new Jo();
	if (e instanceof Jo) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new Jo(o, s, c, e.opacity);
}
function qo(e, t, n, r) {
	return arguments.length === 1 ? Ko(e) : new Jo(e, t, n, r ?? 1);
}
function Jo(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
mo(Jo, qo, ho(go, {
	brighter(e) {
		return e = e == null ? vo : vo ** +e, new Jo(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? _o : _o ** +e, new Jo(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new V(Zo(e >= 240 ? e - 240 : e + 120, i, r), Zo(e, i, r), Zo(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new Jo(Yo(this.h), Xo(this.s), Xo(this.l), Ho(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = Ho(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${Yo(this.h)}, ${Xo(this.s) * 100}%, ${Xo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function Yo(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Xo(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Zo(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region node_modules/@unovis/ts/styles/colors.js
var Qo = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS) || [
	"#4D8CFD",
	"#FF6B7E",
	"#F4B83E",
	"#A6CC74",
	"#00C19A",
	"#6859BE"
], $o = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS_DARK) || [
	"#4D8CFD",
	"#FF6B7E",
	"#FFC16D",
	"#A6CC74",
	"#00C19A",
	"#7887E0"
], es = (e) => `--vis-${un(e) ? `color${e % Qo.length}` : e}`;
function ts(e, t = .4) {
	let n = qo(e);
	return n.l *= 1 + t, n.formatHex();
}
function ns(e, t = .4, n = .6) {
	let r = qo(e);
	return r.s *= 1 - n, r.l *= 1 - t, r.formatHex();
}
var rs = [
	{
		id: "stripes-diagonal",
		svg: "<path d=\"M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2\" stroke=\"#000\"/>"
	},
	{
		id: "dots",
		svg: "<path d=\"m0-1.5a1 1 0 010 3m10-3a1 1 0 000 3M5 3.5a1 1 0 010 3 1 1 0 010-3M0 8.5 a1 1 0 010 3m10-3a1 1 0 000 3\" fill\"#000\"/>"
	},
	{
		id: "stripes-vertical",
		svg: "<path d=\"M 5,-1 L5,11\" stroke=\"#000\"/>"
	},
	{
		id: "crosshatch",
		svg: "<path d=\"M0 0L10 10ZM10 0L0 10Z\" stroke=\"#000\"/>"
	},
	{
		id: "waves",
		svg: "<path d=\"M0 4Q2.5 1 5 4 7.5 7 10 4v2Q7.5 9 5 6 2.5 3 0 6Z\" fill=\"#000\"/>"
	},
	{
		id: "circles",
		svg: "<circle cx=\"5\" cy=\"5\" r=\"3\" stroke=\"#000\" fill=\"#fff\"/>"
	}
], is = [
	{
		id: "circle",
		marker: "<circle cx=\"5\" cy=\"5\" r=\"5\"/>",
		dashArray: []
	},
	{
		id: "triangle",
		marker: "<path d=\"M5,0 L10,9 L0,9Z\">",
		dashArray: [9, 1]
	},
	{
		id: "diamond",
		marker: "<path d=\"M 0 5 L5 0 L 10 5 L 5 10 L 0 5Z\">",
		dashArray: [2]
	},
	{
		id: "arrow",
		marker: "<path d=\"M4 0 0 0 6 5 0 10 4 10 10 5Z\">",
		dashArray: [
			2,
			3,
			8,
			3
		]
	},
	{
		id: "square",
		marker: "<rect x=\"1\" y=\"1\" width=\"8\" height=\"8\"/>",
		dashArray: [6]
	},
	{
		id: "star",
		marker: "<path d=\"m2 9 3-9 3 9L0 3h10Z\"/>",
		dashArray: [1, 6]
	}
];
function as(e) {
	return `vis-${`pattern-${e.svg ? "fill" : "marker"}`}-${e.id}`;
}
var os = (e) => `<mask id="${as(e)}">
    <pattern id="${e.id}" viewBox="0 0 10 10" width="10" height="10" patternUnits="userSpaceOnUse">
      <rect width="100%" height="100%" fill="#fff"/>
      ${e.svg}
    </pattern>
    <rect x="-50%" y="-50%" width="200%" height="200%" fill="url(#${e.id})"/>
  </mask>`, ss = (e, t) => `<marker id="${as(e)}"
    fill="var(${es(t)})"
    markerUnits="userSpaceOnUse"
    refX="5"
    refY="5"
    markerWidth="10"
    markerHeight="10">
    ${e.marker}
  </marker>`;
function cs() {
	let e = rs.map(os).concat(is.map(ss)).join(""), t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	t.setAttribute("height", "100%"), t.setAttribute("width", "100%"), t.style.position = "fixed", t.style.zIndex = "-99999999", t.innerHTML = `<defs>${e}</defs>`, document.body.appendChild(t);
}
typeof window < "u" && cs(), globalThis != null && globalThis.UNOVIS_ICON_FONT_FAMILY;
var ls = (globalThis == null ? void 0 : globalThis.UNOVIS_FONT_W2H_RATIO_DEFAULT) || .5, us = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_SEPARATOR_DEFAULT) || [
	" ",
	"-",
	".",
	","
], ds = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_HYPHEN_CHARACTER_DEFAULT) || "-", fs = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_DEFAULT) || {
	text: "",
	fontSize: 12,
	fontFamily: "var(--vis-font-family)",
	lineHeight: 1.25,
	marginTop: 0,
	marginBottom: 0
};
jt`
  :root {
    label: vis-root-styles;
    --vis-font-family: Inter, Arial, "Helvetica Neue", Helvetica, sans-serif;
    --vis-font-wh-ratio: ${ls};
    --vis-color-main: var(${es(0)});
    --vis-color-main-light: ${ts(Qo[0])};
    --vis-color-main-dark: ${ns(Qo[0])};
    --vis-color-grey: #2a2a2a;
    ${Qo.map((e, t) => `${es(t)}: ${e};`)}
    ${$o.map((e, t) => `--vis-dark-color${t}: ${e};`)}
    ${rs.map((e, t) => `
      --${as(e)}: url(#${as(e)});
      --vis-pattern-fill${t}: var(--${as(e)});
    `)}
    ${is.map((e, t) => `
      --${as(e)}: url(#${as(e)});
      --vis-pattern-marker${t}: var(--${as(e)});
      --vis-pattern-dasharray${t}: ${e.dashArray?.join(" ")};
    `)}

    body.theme-dark {
      ${Qo.map((e, t) => `${es(t)}: var(--vis-dark-color${t});`)}
    }

    body.theme-patterns {
      ${rs.map((e, t) => `path[style*="fill: var(${es(t)})"]  {
        mask: var(--vis-pattern-fill${t});
      }`)}
      ${is.map((e, t) => `
      path[stroke="var(${es(t)})"]:not([style*="fill"]),
      path[style*="stroke: var(${es(t)})"]:not([style*="fill"]) {
        marker: var(--vis-pattern-marker${t});
        stroke-dasharray: var(--vis-pattern-dasharray${t});
      }
    `)}
}
`;
function ps(e = window == null ? void 0 : window.document.body) {
	return e ? +fo("var(--vis-font-wh-ratio)", e) : ls;
}
//#endregion
//#region node_modules/d3-transition/src/transition/schedule.js
var ms = In("start", "end", "cancel", "interrupt"), hs = [];
function gs(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	bs(e, n, {
		name: t,
		index: r,
		group: i,
		on: ms,
		tween: hs,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function _s(e, t) {
	var n = ys(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function vs(e, t) {
	var n = ys(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function ys(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function bs(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = tr(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return sr(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (sr(function() {
			n.state === 3 && (n.state = 4, n.timer.restart(s, n.delay, n.time), s(a));
		}), n.state = 2, n.on.call("start", e, e.__data__, n.index, n.group), n.state === 2) {
			for (n.state = 3, i = Array(d = n.tween.length), l = 0, u = -1; l < d; ++l) (f = n.tween[l].value.call(e, e.__data__, n.index, n.group)) && (i[++u] = f);
			i.length = u + 1;
		}
	}
	function s(t) {
		for (var r = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(c), n.state = 5, 1), a = -1, o = i.length; ++a < o;) i[a].call(e, r);
		n.state === 5 && (n.on.call("end", e, e.__data__, n.index, n.group), c());
	}
	function c() {
		for (var i in n.state = 6, n.timer.stop(), delete r[t], r) return;
		delete e.__transition;
	}
}
//#endregion
//#region node_modules/d3-transition/src/interrupt.js
function xs(e, t) {
	var n = e.__transition, r, i, a = !0, o;
	if (n) {
		for (o in t = t == null ? null : t + "", n) {
			if ((r = n[o]).name !== t) {
				a = !1;
				continue;
			}
			i = r.state > 2 && r.state < 5, r.state = 6, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[o];
		}
		a && delete e.__transition;
	}
}
//#endregion
//#region node_modules/d3-transition/src/selection/interrupt.js
function Ss(e) {
	return this.each(function() {
		xs(this, e);
	});
}
//#endregion
//#region node_modules/d3-interpolate/src/constant.js
var Cs = (e) => () => e;
//#endregion
//#region node_modules/d3-interpolate/src/color.js
function ws(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Ts(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function Es(e) {
	return (e = +e) == 1 ? Ds : function(t, n) {
		return n - t ? Ts(t, n, e) : Cs(isNaN(t) ? n : t);
	};
}
function Ds(e, t) {
	var n = t - e;
	return n ? ws(e, n) : Cs(isNaN(e) ? t : e);
}
//#endregion
//#region node_modules/d3-interpolate/src/rgb.js
var Os = (function e(t) {
	var n = Es(t);
	function r(e, t) {
		var r = n((e = Ro(e)).r, (t = Ro(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = Ds(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
//#endregion
//#region node_modules/d3-interpolate/src/numberArray.js
function ks(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function As(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region node_modules/d3-interpolate/src/array.js
function js(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = Bs(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/date.js
function Ms(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/number.js
function Ns(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/object.js
function Ps(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = Bs(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/string.js
var Fs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Is = new RegExp(Fs.source, "g");
function Ls(e) {
	return function() {
		return e;
	};
}
function Rs(e) {
	return function(t) {
		return e(t) + "";
	};
}
function zs(e, t) {
	var n = Fs.lastIndex = Is.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = Fs.exec(e)) && (i = Is.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: Ns(r, i)
	})), n = Is.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Rs(c[0].x) : Ls(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region node_modules/d3-interpolate/src/value.js
function Bs(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? Cs(t) : (n === "number" ? Ns : n === "string" ? (r = Po(t)) ? (t = r, Os) : zs : t instanceof Po ? Os : t instanceof Date ? Ms : As(t) ? ks : Array.isArray(t) ? js : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Ps : Ns)(e, t);
}
//#endregion
//#region node_modules/d3-interpolate/src/round.js
function Vs(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/decompose.js
var Hs = 180 / Math.PI, Us = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function Ws(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * Hs,
		skewX: Math.atan(c) * Hs,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/parse.js
var Gs;
function Ks(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? Us : Ws(t.a, t.b, t.c, t.d, t.e, t.f);
}
function qs(e) {
	return e == null || (Gs ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), Gs.setAttribute("transform", e), !(e = Gs.transform.baseVal.consolidate())) ? Us : (e = e.matrix, Ws(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/index.js
function Js(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: Ns(e, i)
			}, {
				i: c - 2,
				x: Ns(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: Ns(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: Ns(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: Ns(e, n)
			}, {
				i: s - 2,
				x: Ns(t, r)
			});
		} else (n !== 1 || r !== 1) && a.push(i(a) + "scale(" + n + "," + r + ")");
	}
	return function(t, n) {
		var r = [], i = [];
		return t = e(t), n = e(n), a(t.translateX, t.translateY, n.translateX, n.translateY, r, i), o(t.rotate, n.rotate, r, i), s(t.skewX, n.skewX, r, i), c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i), t = n = null, function(e) {
			for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
			return r.join("");
		};
	};
}
var Ys = Js(Ks, "px, ", "px)", "deg)"), Xs = Js(qs, ", ", ")", ")");
//#endregion
//#region node_modules/d3-interpolate/src/piecewise.js
function Zs(e, t) {
	t === void 0 && (t = e, e = Bs);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region node_modules/d3-transition/src/transition/tween.js
function Qs(e, t) {
	var n, r;
	return function() {
		var i = vs(this, e), a = i.tween;
		if (a !== n) {
			r = n = a;
			for (var o = 0, s = r.length; o < s; ++o) if (r[o].name === t) {
				r = r.slice(), r.splice(o, 1);
				break;
			}
		}
		i.tween = r;
	};
}
function $s(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = vs(this, e), o = a.tween;
		if (o !== r) {
			i = (r = o).slice();
			for (var s = {
				name: t,
				value: n
			}, c = 0, l = i.length; c < l; ++c) if (i[c].name === t) {
				i[c] = s;
				break;
			}
			c === l && i.push(s);
		}
		a.tween = i;
	};
}
function ec(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = ys(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? Qs : $s)(n, e, t));
}
function tc(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = vs(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return ys(e, r).value[t];
	};
}
//#endregion
//#region node_modules/d3-transition/src/transition/interpolate.js
function nc(e, t) {
	var n;
	return (typeof t == "number" ? Ns : t instanceof Po ? Os : (n = Po(t)) ? (t = n, Os) : zs)(e, t);
}
//#endregion
//#region node_modules/d3-transition/src/transition/attr.js
function rc(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function ic(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function ac(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function oc(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function sc(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function cc(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function lc(e, t) {
	var n = lr(e), r = n === "transform" ? Xs : nc;
	return this.attrTween(e, typeof t == "function" ? (n.local ? cc : sc)(n, r, tc(this, "attr." + e, t)) : t == null ? (n.local ? ic : rc)(n) : (n.local ? oc : ac)(n, r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/attrTween.js
function uc(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function dc(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function fc(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && dc(e, i)), n;
	}
	return i._value = t, i;
}
function pc(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && uc(e, i)), n;
	}
	return i._value = t, i;
}
function mc(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = lr(e);
	return this.tween(n, (r.local ? fc : pc)(r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/delay.js
function hc(e, t) {
	return function() {
		_s(this, e).delay = +t.apply(this, arguments);
	};
}
function gc(e, t) {
	return t = +t, function() {
		_s(this, e).delay = t;
	};
}
function _c(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? hc : gc)(t, e)) : ys(this.node(), t).delay;
}
//#endregion
//#region node_modules/d3-transition/src/transition/duration.js
function vc(e, t) {
	return function() {
		vs(this, e).duration = +t.apply(this, arguments);
	};
}
function yc(e, t) {
	return t = +t, function() {
		vs(this, e).duration = t;
	};
}
function bc(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? vc : yc)(t, e)) : ys(this.node(), t).duration;
}
//#endregion
//#region node_modules/d3-transition/src/transition/ease.js
function xc(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		vs(this, e).ease = t;
	};
}
function Sc(e) {
	var t = this._id;
	return arguments.length ? this.each(xc(t, e)) : ys(this.node(), t).ease;
}
//#endregion
//#region node_modules/d3-transition/src/transition/easeVarying.js
function Cc(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		vs(this, e).ease = n;
	};
}
function wc(e) {
	if (typeof e != "function") throw Error();
	return this.each(Cc(this._id, e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/filter.js
function Tc(e) {
	typeof e != "function" && (e = xr(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new el(r, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/merge.js
function Ec(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new el(o, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/on.js
function Dc(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function Oc(e, t, n) {
	var r, i, a = Dc(t) ? _s : vs;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function kc(e, t) {
	var n = this._id;
	return arguments.length < 2 ? ys(this.node(), n).on.on(e) : this.each(Oc(n, e, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/remove.js
function Ac(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function jc() {
	return this.on("end.remove", Ac(this._id));
}
//#endregion
//#region node_modules/d3-transition/src/transition/select.js
function Mc(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = mr(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, gs(l[f], t, n, f, l, ys(u, n)));
	return new el(a, this._parents, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selectAll.js
function Nc(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = vr(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = ys(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && gs(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new el(a, o, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selection.js
var Pc = ia.prototype.constructor;
function Fc() {
	return new Pc(this._groups, this._parents);
}
//#endregion
//#region node_modules/d3-transition/src/transition/style.js
function Ic(e, t) {
	var n, r, i;
	return function() {
		var a = di(this, e), o = (this.style.removeProperty(e), di(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function Lc(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Rc(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = di(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function zc(e, t, n) {
	var r, i, a;
	return function() {
		var o = di(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), di(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function Bc(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = vs(this, e), l = c.on, u = c.value[a] == null ? s ||= Lc(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function Vc(e, t, n) {
	var r = (e += "") == "transform" ? Ys : nc;
	return t == null ? this.styleTween(e, Ic(e, r)).on("end.style." + e, Lc(e)) : typeof t == "function" ? this.styleTween(e, zc(e, r, tc(this, "style." + e, t))).each(Bc(this._id, e)) : this.styleTween(e, Rc(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region node_modules/d3-transition/src/transition/styleTween.js
function Hc(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function Uc(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && Hc(e, a, n)), r;
	}
	return a._value = t, a;
}
function Wc(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, Uc(e, t, n ?? ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/text.js
function Gc(e) {
	return function() {
		this.textContent = e;
	};
}
function Kc(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function qc(e) {
	return this.tween("text", typeof e == "function" ? Kc(tc(this, "text", e)) : Gc(e == null ? "" : e + ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/textTween.js
function Jc(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function Yc(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && Jc(r)), t;
	}
	return r._value = e, r;
}
function Xc(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, Yc(e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/transition.js
function Zc() {
	for (var e = this._name, t = this._id, n = nl(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = ys(c, t);
		gs(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new el(r, this._parents, e, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/end.js
function Qc() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = vs(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/index.js
var $c = 0;
function el(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function tl(e) {
	return ia().transition(e);
}
function nl() {
	return ++$c;
}
var rl = ia.prototype;
el.prototype = tl.prototype = {
	constructor: el,
	select: Mc,
	selectAll: Nc,
	selectChild: rl.selectChild,
	selectChildren: rl.selectChildren,
	filter: Tc,
	merge: Ec,
	selection: Fc,
	transition: Zc,
	call: rl.call,
	nodes: rl.nodes,
	node: rl.node,
	size: rl.size,
	empty: rl.empty,
	each: rl.each,
	on: kc,
	attr: lc,
	attrTween: mc,
	style: Vc,
	styleTween: Wc,
	text: qc,
	textTween: Xc,
	remove: jc,
	tween: ec,
	delay: _c,
	duration: bc,
	ease: Sc,
	easeVarying: wc,
	end: Qc,
	[Symbol.iterator]: rl[Symbol.iterator]
};
//#endregion
//#region node_modules/d3-ease/src/linear.js
var il = (e) => +e;
//#endregion
//#region node_modules/d3-ease/src/cubic.js
function al(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region node_modules/d3-transition/src/selection/transition.js
var ol = {
	time: null,
	delay: 0,
	duration: 250,
	ease: al
};
function sl(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function cl(e) {
	var t, n;
	e instanceof el ? (t = e._id, e = e._name) : (t = nl(), (n = ol).time = Qn(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && gs(c, e, t, l, o, n || sl(c, t));
	return new el(r, this._parents, e, t);
}
ia.prototype.interrupt = Ss, ia.prototype.transition = cl;
//#endregion
//#region node_modules/@unovis/ts/utils/d3.js
function H(e, t, n) {
	if (e.nodes().forEach((e) => xs(e)), t) {
		let r = e.transition().duration(t);
		return n && r.ease(n), r;
	} else return e;
}
//#endregion
//#region node_modules/@unovis/ts/containers/single-container/config.js
var ll = Object.assign(Object.assign({}, so), {
	tooltip: void 0,
	annotations: void 0
}), ul = class extends co {
	constructor(e, t, n) {
		super(e), this._defaultConfig = ll, this.config = this._defaultConfig, t && (this.updateContainer(t, !0), this.component = t.component), n && this.setData(n, !0), this.component?.datamodel.data && this.render();
	}
	setData(e, t) {
		var n;
		let { config: r } = this;
		this.component && this.component.setData(e), t || this.render(), (n = r.tooltip) == null || n.hide();
	}
	updateContainer(e, t) {
		super.updateContainer(e), this._removeAllChildren(), this.component = e.component, e.sizing && (this.component.sizing = e.sizing), this.element.appendChild(this.component.element);
		let n = e.tooltip;
		n && (n.hasContainer() || n.setContainer(this._container), n.setComponents([this.component]));
		let r = e.annotations;
		r && this.element.appendChild(r.element), this.element.appendChild(this._svgDefs.node()), this.element.appendChild(this._svgDefsExternal.node()), t || this.render();
	}
	updateComponent(e, t) {
		this.component.setConfig(e), t || this.render();
	}
	update(e, t, n) {
		e && this.updateContainer(e, !0), t && this.updateComponent(t, !0), n && this.setData(n, !0), this.render();
	}
	getFitWidthScale() {
		let { config: e, component: t } = this, n = t;
		if (!n.getWidth) return 1;
		let r = n.getWidth() + e.margin.left + e.margin.right;
		return this.width / r;
	}
	_preRender() {
		var e, t;
		super._preRender(), this.component.setSize(this.width, this.height, this.containerWidth, this.containerHeight), this.component.setContainerMargin(this.config.margin), (e = this.config.annotations) == null || e.setSize(this.width, this.height, this.containerWidth, this.containerHeight), (t = this.config.annotations) == null || t.setContainerMargin(this.config.margin);
	}
	_render(e) {
		var t, n;
		let { config: r, component: i } = this;
		super._render(e), i.g.attr("transform", `translate(${r.margin.left},${r.margin.top})`), i.render(e), (t = r.annotations) == null || t.render(e), r.tooltip && r.tooltip.update(), (n = r.onRenderComplete) == null || n.call(r, this.svg.node(), r.margin, this.containerWidth, this.containerHeight, this.width, this.height);
	}
	render(e = this.config.duration) {
		let { config: t, component: n } = this;
		if (t.sizing === ua.Extend || t.sizing === ua.FitWidth) {
			let r = t.sizing === ua.FitWidth, i = n, a = i.getWidth() + t.margin.left + t.margin.right, o = i.getHeight() + t.margin.top + t.margin.bottom, s = r ? this.getFitWidthScale() : 1, c = this.svg.attr("width"), l = this.svg.attr("height"), u = a * s, d = o * s, f = c || l;
			H(this.svg, f ? e : 0).attr("width", u).attr("height", d).attr("viewBox", `0 0 ${a} ${r ? d : o}`).attr("preserveAspectRatio", "xMinYMin");
		} else this.svg.attr("width", this.config.width || this.containerWidth).attr("height", this.config.height || this.containerHeight);
		this._resizeObserver || this._setUpResizeObserver(), cancelAnimationFrame(this._renderAnimationFrameId), this._renderAnimationFrameId = requestAnimationFrame(() => {
			this._preRender(), this._render(e);
		});
	}
	_onResize() {
		var e;
		let { config: t } = this;
		super._onResize(), (e = t.tooltip) == null || e.hide();
	}
	destroy() {
		var e, t;
		let { component: n, config: r } = this;
		super.destroy(), n?.destroy(), (e = r.tooltip) == null || e.destroy(), (t = r.annotations) == null || t.destroy();
	}
}, dl = class {
	constructor(e) {
		this.data = e;
	}
	get data() {
		return this._data;
	}
	set data(e) {
		this._data = e;
	}
}, U;
(function(e) {
	e.X = "x", e.Y = "y";
})(U ||= {});
//#endregion
//#region node_modules/d3-scale/src/init.js
function fl(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default:
			this.range(t).domain(e);
			break;
	}
	return this;
}
function pl(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			typeof e == "function" ? this.interpolator(e) : this.range(e);
			break;
		default:
			this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
			break;
	}
	return this;
}
//#endregion
//#region node_modules/d3-scale/src/ordinal.js
var ml = Symbol("implicit");
function hl() {
	var e = new Vt(), t = [], n = [], r = ml;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== ml) return r;
			e.set(i, a = t.push(i) - 1);
		}
		return n[a % n.length];
	}
	return i.domain = function(n) {
		if (!arguments.length) return t.slice();
		t = [], e = new Vt();
		for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
		return i;
	}, i.range = function(e) {
		return arguments.length ? (n = Array.from(e), i) : n.slice();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return hl(t, n).unknown(r);
	}, fl.apply(i, arguments), i;
}
//#endregion
//#region node_modules/d3-scale/src/band.js
function gl() {
	var e = hl().unknown(void 0), t = e.domain, n = e.range, r = 0, i = 1, a, o, s = !1, c = 0, l = 0, u = .5;
	delete e.unknown;
	function d() {
		var e = t().length, d = i < r, f = d ? i : r, p = d ? r : i;
		a = (p - f) / Math.max(1, e - c + l * 2), s && (a = Math.floor(a)), f += (p - f - a * (e - c)) * u, o = a * (1 - c), s && (f = Math.round(f), o = Math.round(o));
		var m = on(e).map(function(e) {
			return f + a * e;
		});
		return n(d ? m.reverse() : m);
	}
	return e.domain = function(e) {
		return arguments.length ? (t(e), d()) : t();
	}, e.range = function(e) {
		return arguments.length ? ([r, i] = e, r = +r, i = +i, d()) : [r, i];
	}, e.rangeRound = function(e) {
		return [r, i] = e, r = +r, i = +i, s = !0, d();
	}, e.bandwidth = function() {
		return o;
	}, e.step = function() {
		return a;
	}, e.round = function(e) {
		return arguments.length ? (s = !!e, d()) : s;
	}, e.padding = function(e) {
		return arguments.length ? (c = Math.min(1, l = +e), d()) : c;
	}, e.paddingInner = function(e) {
		return arguments.length ? (c = Math.min(1, e), d()) : c;
	}, e.paddingOuter = function(e) {
		return arguments.length ? (l = +e, d()) : l;
	}, e.align = function(e) {
		return arguments.length ? (u = Math.max(0, Math.min(1, e)), d()) : u;
	}, e.copy = function() {
		return gl(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
	}, fl.apply(d(), arguments);
}
function _l(e) {
	var t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
		return _l(t());
	}, e;
}
function vl() {
	return _l(gl.apply(null, arguments).paddingInner(1));
}
//#endregion
//#region node_modules/d3-scale/src/constant.js
function yl(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-scale/src/number.js
function bl(e) {
	return +e;
}
//#endregion
//#region node_modules/d3-scale/src/continuous.js
var xl = [0, 1];
function W(e) {
	return e;
}
function Sl(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : yl(isNaN(t) ? NaN : .5);
}
function Cl(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function wl(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = Sl(i, r), a = n(o, a)) : (r = Sl(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function Tl(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = Sl(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = Rt(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function El(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Dl() {
	var e = xl, t = xl, n = Bs, r, i, a, o = W, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== W && (o = Cl(e[0], e[n - 1])), s = n > 2 ? Tl : wl, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), Ns))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, bl), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = Vs, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : W, u()) : o !== W;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function Ol() {
	return Dl()(W, W);
}
//#endregion
//#region node_modules/d3-format/src/formatDecimal.js
function kl(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Al(e, t) {
	if (!isFinite(e) || e === 0) return null;
	var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region node_modules/d3-format/src/exponent.js
function jl(e) {
	return e = Al(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region node_modules/d3-format/src/formatGroup.js
function Ml(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region node_modules/d3-format/src/formatNumerals.js
function Nl(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region node_modules/d3-format/src/formatSpecifier.js
var Pl = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Fl(e) {
	if (!(t = Pl.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new Il({
		fill: t[1],
		align: t[2],
		sign: t[3],
		symbol: t[4],
		zero: t[5],
		width: t[6],
		comma: t[7],
		precision: t[8] && t[8].slice(1),
		trim: t[9],
		type: t[10]
	});
}
Fl.prototype = Il.prototype;
function Il(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Il.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
//#endregion
//#region node_modules/d3-format/src/formatTrim.js
function Ll(e) {
	out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n) switch (e[n]) {
		case ".":
			r = i = n;
			break;
		case "0":
			r === 0 && (r = n), i = n;
			break;
		default:
			if (!+e[n]) break out;
			r > 0 && (r = 0);
			break;
	}
	return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
//#endregion
//#region node_modules/d3-format/src/formatPrefixAuto.js
var Rl;
function zl(e, t) {
	var n = Al(e, t);
	if (!n) return Rl = void 0, e.toPrecision(t);
	var r = n[0], i = n[1], a = i - (Rl = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + Al(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region node_modules/d3-format/src/formatRounded.js
function Bl(e, t) {
	var n = Al(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region node_modules/d3-format/src/formatTypes.js
var Vl = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: kl,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => Bl(e * 100, t),
	r: Bl,
	s: zl,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region node_modules/d3-format/src/identity.js
function Hl(e) {
	return e;
}
//#endregion
//#region node_modules/d3-format/src/locale.js
var Ul = Array.prototype.map, Wl = [
	"y",
	"z",
	"a",
	"f",
	"p",
	"n",
	"µ",
	"m",
	"",
	"k",
	"M",
	"G",
	"T",
	"P",
	"E",
	"Z",
	"Y"
];
function Gl(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? Hl : Ml(Ul.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Hl : Nl(Ul.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e, l) {
		e = Fl(e);
		var u = e.fill, d = e.align, f = e.sign, p = e.symbol, m = e.zero, h = e.width, g = e.comma, _ = e.precision, v = e.trim, y = e.type;
		y === "n" ? (g = !0, y = "g") : Vl[y] || (_ === void 0 && (_ = 12), v = !0, y = "g"), (m || u === "0" && d === "=") && (m = !0, u = "0", d = "=");
		var b = (l && l.prefix !== void 0 ? l.prefix : "") + (p === "$" ? n : p === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : ""), x = (p === "$" ? r : /[%p]/.test(y) ? o : "") + (l && l.suffix !== void 0 ? l.suffix : ""), S = Vl[y], C = /[defgprs%]/.test(y);
		_ = _ === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
		function w(e) {
			var n = b, r = x, o, l, p;
			if (y === "c") r = S(e) + r, e = "";
			else {
				e = +e;
				var w = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : S(Math.abs(e), _), v && (e = Ll(e)), w && +e == 0 && f !== "+" && (w = !1), n = (w ? f === "(" ? f : s : f === "-" || f === "(" ? "" : f) + n, r = (y === "s" && !isNaN(e) && Rl !== void 0 ? Wl[8 + Rl / 3] : "") + r + (w && f === "(" ? ")" : ""), C) {
					for (o = -1, l = e.length; ++o < l;) if (p = e.charCodeAt(o), 48 > p || p > 57) {
						r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r, e = e.slice(0, o);
						break;
					}
				}
			}
			g && !m && (e = t(e, Infinity));
			var T = n.length + e.length + r.length, E = T < h ? Array(h - T + 1).join(u) : "";
			switch (g && m && (e = t(E + e, E.length ? h - r.length : Infinity), E = ""), d) {
				case "<":
					e = n + e + r + E;
					break;
				case "=":
					e = n + E + e + r;
					break;
				case "^":
					e = E.slice(0, T = E.length >> 1) + n + e + r + E.slice(T);
					break;
				default:
					e = E + n + e + r;
					break;
			}
			return a(e);
		}
		return w.toString = function() {
			return e + "";
		}, w;
	}
	function u(e, t) {
		var n = Math.max(-8, Math.min(8, Math.floor(jl(t) / 3))) * 3, r = 10 ** -n, i = l((e = Fl(e), e.type = "f", e), { suffix: Wl[8 + n / 3] });
		return function(e) {
			return i(r * e);
		};
	}
	return {
		format: l,
		formatPrefix: u
	};
}
//#endregion
//#region node_modules/d3-format/src/defaultLocale.js
var Kl, ql, Jl;
Yl({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function Yl(e) {
	return Kl = Gl(e), ql = Kl.format, Jl = Kl.formatPrefix, Kl;
}
//#endregion
//#region node_modules/d3-format/src/precisionFixed.js
function Xl(e) {
	return Math.max(0, -jl(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionPrefix.js
function Zl(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(jl(t) / 3))) * 3 - jl(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionRound.js
function Ql(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, jl(t) - jl(e)) + 1;
}
//#endregion
//#region node_modules/d3-scale/src/tickFormat.js
function $l(e, t, n, r) {
	var i = Qt(e, t, n), a;
	switch (r = Fl(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = Zl(i, o)) && (r.precision = a), Jl(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = Ql(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%":
			r.precision == null && !isNaN(a = Xl(i)) && (r.precision = a - (r.type === "%") * 2);
			break;
	}
	return ql(r);
}
//#endregion
//#region node_modules/d3-scale/src/linear.js
function eu(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return Xt(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return $l(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = Zt(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function tu() {
	var e = Ol();
	return e.copy = function() {
		return El(e, tu());
	}, fl.apply(e, arguments), eu(e);
}
//#endregion
//#region node_modules/d3-scale/src/identity.js
function nu(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, bl), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return nu(e).unknown(t);
	}, e = arguments.length ? Array.from(e, bl) : [0, 1], eu(n);
}
//#endregion
//#region node_modules/d3-scale/src/nice.js
function ru(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
//#endregion
//#region node_modules/d3-scale/src/log.js
function iu(e) {
	return Math.log(e);
}
function au(e) {
	return Math.exp(e);
}
function ou(e) {
	return -Math.log(-e);
}
function su(e) {
	return -Math.exp(-e);
}
function cu(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function lu(e) {
	return e === 10 ? cu : e === Math.E ? Math.exp : (t) => e ** +t;
}
function uu(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function du(e) {
	return (t, n) => -e(-t, n);
}
function fu(e) {
	let t = e(iu, au), n = t.domain, r = 10, i, a;
	function o() {
		return i = uu(r), a = lu(r), n()[0] < 0 ? (i = du(i), a = du(a), e(ou, su)) : e(iu, au), t;
	}
	return t.base = function(e) {
		return arguments.length ? (r = +e, o()) : r;
	}, t.domain = function(e) {
		return arguments.length ? (n(e), o()) : n();
	}, t.ticks = (e) => {
		let t = n(), o = t[0], s = t[t.length - 1], c = s < o;
		c && ([o, s] = [s, o]);
		let l = i(o), u = i(s), d, f, p = e == null ? 10 : +e, m = [];
		if (!(r % 1) && u - l < p) {
			if (l = Math.floor(l), u = Math.ceil(u), o > 0) {
				for (; l <= u; ++l) for (d = 1; d < r; ++d) if (f = l < 0 ? d / a(-l) : d * a(l), !(f < o)) {
					if (f > s) break;
					m.push(f);
				}
			} else for (; l <= u; ++l) for (d = r - 1; d >= 1; --d) if (f = l > 0 ? d / a(-l) : d * a(l), !(f < o)) {
				if (f > s) break;
				m.push(f);
			}
			m.length * 2 < p && (m = Xt(o, s, p));
		} else m = Xt(l, u, Math.min(u - l, p)).map(a);
		return c ? m.reverse() : m;
	}, t.tickFormat = (e, n) => {
		if (e ??= 10, n ??= r === 10 ? "s" : ",", typeof n != "function" && (!(r % 1) && (n = Fl(n)).precision == null && (n.trim = !0), n = ql(n)), e === Infinity) return n;
		let o = Math.max(1, r * e / t.ticks().length);
		return (e) => {
			let t = e / a(Math.round(i(e)));
			return t * r < r - .5 && (t *= r), t <= o ? n(e) : "";
		};
	}, t.nice = () => n(ru(n(), {
		floor: (e) => a(Math.floor(i(e))),
		ceil: (e) => a(Math.ceil(i(e)))
	})), t;
}
function pu() {
	let e = fu(Dl()).domain([1, 10]);
	return e.copy = () => El(e, pu()).base(e.base()), fl.apply(e, arguments), e;
}
//#endregion
//#region node_modules/d3-scale/src/symlog.js
function mu(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function hu(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function gu(e) {
	var t = 1, n = e(mu(t), hu(t));
	return n.constant = function(n) {
		return arguments.length ? e(mu(t = +n), hu(t)) : t;
	}, eu(n);
}
function _u() {
	var e = gu(Dl());
	return e.copy = function() {
		return El(e, _u()).constant(e.constant());
	}, fl.apply(e, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/pow.js
function vu(e) {
	return function(t) {
		return t < 0 ? -((-t) ** +e) : t ** +e;
	};
}
function yu(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function bu(e) {
	return e < 0 ? -e * e : e * e;
}
function xu(e) {
	var t = e(W, W), n = 1;
	function r() {
		return n === 1 ? e(W, W) : n === .5 ? e(yu, bu) : e(vu(n), vu(1 / n));
	}
	return t.exponent = function(e) {
		return arguments.length ? (n = +e, r()) : n;
	}, eu(t);
}
function Su() {
	var e = xu(Dl());
	return e.copy = function() {
		return El(e, Su()).exponent(e.exponent());
	}, fl.apply(e, arguments), e;
}
function Cu() {
	return Su.apply(null, arguments).exponent(.5);
}
//#endregion
//#region node_modules/d3-scale/src/quantile.js
function wu() {
	var e = [], t = [], n = [], r;
	function i() {
		var r = 0, i = Math.max(1, t.length);
		for (n = Array(i - 1); ++r < i;) n[r - 1] = tn(e, r / i);
		return a;
	}
	function a(e) {
		return e == null || isNaN(e = +e) ? r : t[Rt(n, e)];
	}
	return a.invertExtent = function(r) {
		var i = t.indexOf(r);
		return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
	}, a.domain = function(t) {
		if (!arguments.length) return e.slice();
		e = [];
		for (let n of t) n != null && !isNaN(n = +n) && e.push(n);
		return e.sort(Mt), i();
	}, a.range = function(e) {
		return arguments.length ? (t = Array.from(e), i()) : t.slice();
	}, a.unknown = function(e) {
		return arguments.length ? (r = e, a) : r;
	}, a.quantiles = function() {
		return n.slice();
	}, a.copy = function() {
		return wu().domain(e).range(t).unknown(r);
	}, fl.apply(a, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/quantize.js
function Tu() {
	var e = 0, t = 1, n = 1, r = [.5], i = [0, 1], a;
	function o(e) {
		return e != null && e <= e ? i[Rt(r, e, 0, n)] : a;
	}
	function s() {
		var i = -1;
		for (r = Array(n); ++i < n;) r[i] = ((i + 1) * t - (i - n) * e) / (n + 1);
		return o;
	}
	return o.domain = function(n) {
		return arguments.length ? ([e, t] = n, e = +e, t = +t, s()) : [e, t];
	}, o.range = function(e) {
		return arguments.length ? (n = (i = Array.from(e)).length - 1, s()) : i.slice();
	}, o.invertExtent = function(a) {
		var o = i.indexOf(a);
		return o < 0 ? [NaN, NaN] : o < 1 ? [e, r[0]] : o >= n ? [r[n - 1], t] : [r[o - 1], r[o]];
	}, o.unknown = function(e) {
		return arguments.length && (a = e), o;
	}, o.thresholds = function() {
		return r.slice();
	}, o.copy = function() {
		return Tu().domain([e, t]).range(i).unknown(a);
	}, fl.apply(eu(o), arguments);
}
//#endregion
//#region node_modules/d3-scale/src/threshold.js
function Eu() {
	var e = [.5], t = [0, 1], n, r = 1;
	function i(i) {
		return i != null && i <= i ? t[Rt(e, i, 0, r)] : n;
	}
	return i.domain = function(n) {
		return arguments.length ? (e = Array.from(n), r = Math.min(e.length, t.length - 1), i) : e.slice();
	}, i.range = function(n) {
		return arguments.length ? (t = Array.from(n), r = Math.min(e.length, t.length - 1), i) : t.slice();
	}, i.invertExtent = function(n) {
		var r = t.indexOf(n);
		return [e[r - 1], e[r]];
	}, i.unknown = function(e) {
		return arguments.length ? (n = e, i) : n;
	}, i.copy = function() {
		return Eu().domain(e).range(t).unknown(n);
	}, fl.apply(i, arguments);
}
//#endregion
//#region node_modules/d3-time/src/interval.js
var Du = /* @__PURE__ */ new Date(), Ou = /* @__PURE__ */ new Date();
function G(e, t, n, r) {
	function i(t) {
		return e(t = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+t)), t;
	}
	return i.floor = (t) => (e(t = /* @__PURE__ */ new Date(+t)), t), i.ceil = (n) => (e(n = /* @__PURE__ */ new Date(n - 1)), t(n, 1), e(n), n), i.round = (e) => {
		let t = i(e), n = i.ceil(e);
		return e - t < n - e ? t : n;
	}, i.offset = (e, n) => (t(e = /* @__PURE__ */ new Date(+e), n == null ? 1 : Math.floor(n)), e), i.range = (n, r, a) => {
		let o = [];
		if (n = i.ceil(n), a = a == null ? 1 : Math.floor(a), !(n < r) || !(a > 0)) return o;
		let s;
		do
			o.push(s = /* @__PURE__ */ new Date(+n)), t(n, a), e(n);
		while (s < n && n < r);
		return o;
	}, i.filter = (n) => G((t) => {
		if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
	}, (e, r) => {
		if (e >= e) if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
		else for (; --r >= 0;) for (; t(e, 1), !n(e););
	}), n && (i.count = (t, r) => (Du.setTime(+t), Ou.setTime(+r), e(Du), e(Ou), Math.floor(n(Du, Ou))), i.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0) : i)), i;
}
//#endregion
//#region node_modules/d3-time/src/millisecond.js
var ku = G(() => {}, (e, t) => {
	e.setTime(+e + t);
}, (e, t) => t - e);
ku.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? G((t) => {
	t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
	t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : ku), ku.range;
//#endregion
//#region node_modules/d3-time/src/duration.js
var Au = 1e3, ju = Au * 60, Mu = ju * 60, Nu = Mu * 24, Pu = Nu * 7, Fu = Nu * 30, Iu = Nu * 365, Lu = G((e) => {
	e.setTime(e - e.getMilliseconds());
}, (e, t) => {
	e.setTime(+e + t * Au);
}, (e, t) => (t - e) / Au, (e) => e.getUTCSeconds());
Lu.range;
//#endregion
//#region node_modules/d3-time/src/minute.js
var Ru = G((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * Au);
}, (e, t) => {
	e.setTime(+e + t * ju);
}, (e, t) => (t - e) / ju, (e) => e.getMinutes());
Ru.range;
var zu = G((e) => {
	e.setUTCSeconds(0, 0);
}, (e, t) => {
	e.setTime(+e + t * ju);
}, (e, t) => (t - e) / ju, (e) => e.getUTCMinutes());
zu.range;
//#endregion
//#region node_modules/d3-time/src/hour.js
var Bu = G((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * Au - e.getMinutes() * ju);
}, (e, t) => {
	e.setTime(+e + t * Mu);
}, (e, t) => (t - e) / Mu, (e) => e.getHours());
Bu.range;
var Vu = G((e) => {
	e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
	e.setTime(+e + t * Mu);
}, (e, t) => (t - e) / Mu, (e) => e.getUTCHours());
Vu.range;
//#endregion
//#region node_modules/d3-time/src/day.js
var Hu = G((e) => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ju) / Nu, (e) => e.getDate() - 1);
Hu.range;
var Uu = G((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Nu, (e) => e.getUTCDate() - 1);
Uu.range;
var Wu = G((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Nu, (e) => Math.floor(e / Nu));
Wu.range;
//#endregion
//#region node_modules/d3-time/src/week.js
function Gu(e) {
	return G((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ju) / Pu);
}
var Ku = Gu(0), qu = Gu(1), Ju = Gu(2), Yu = Gu(3), Xu = Gu(4), Zu = Gu(5), Qu = Gu(6);
Ku.range, qu.range, Ju.range, Yu.range, Xu.range, Zu.range, Qu.range;
function $u(e) {
	return G((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / Pu);
}
var ed = $u(0), td = $u(1), nd = $u(2), rd = $u(3), id = $u(4), ad = $u(5), od = $u(6);
ed.range, td.range, nd.range, rd.range, id.range, ad.range, od.range;
//#endregion
//#region node_modules/d3-time/src/month.js
var sd = G((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
sd.range;
var cd = G((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
cd.range;
//#endregion
//#region node_modules/d3-time/src/year.js
var ld = G((e) => {
	e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
ld.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : G((t) => {
	t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
	t.setFullYear(t.getFullYear() + n * e);
}), ld.range;
var ud = G((e) => {
	e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
ud.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : G((t) => {
	t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
	t.setUTCFullYear(t.getUTCFullYear() + n * e);
}), ud.range;
//#endregion
//#region node_modules/d3-time/src/ticks.js
function dd(e, t, n, r, i, a) {
	let o = [
		[
			Lu,
			1,
			Au
		],
		[
			Lu,
			5,
			5 * Au
		],
		[
			Lu,
			15,
			15 * Au
		],
		[
			Lu,
			30,
			30 * Au
		],
		[
			a,
			1,
			ju
		],
		[
			a,
			5,
			5 * ju
		],
		[
			a,
			15,
			15 * ju
		],
		[
			a,
			30,
			30 * ju
		],
		[
			i,
			1,
			Mu
		],
		[
			i,
			3,
			3 * Mu
		],
		[
			i,
			6,
			6 * Mu
		],
		[
			i,
			12,
			12 * Mu
		],
		[
			r,
			1,
			Nu
		],
		[
			r,
			2,
			2 * Nu
		],
		[
			n,
			1,
			Pu
		],
		[
			t,
			1,
			Fu
		],
		[
			t,
			3,
			3 * Fu
		],
		[
			e,
			1,
			Iu
		]
	];
	function s(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : c(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function c(t, n, r) {
		let i = Math.abs(n - t) / r, a = Pt(([, , e]) => e).right(o, i);
		if (a === o.length) return e.every(Qt(t / Iu, n / Iu, r));
		if (a === 0) return ku.every(Math.max(Qt(t, n, r), 1));
		let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
		return s.every(c);
	}
	return [s, c];
}
var [fd, pd] = dd(ud, cd, ed, Wu, Vu, zu), [md, hd] = dd(ld, sd, Ku, Hu, Bu, Ru);
//#endregion
//#region node_modules/d3-time-format/src/locale.js
function gd(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function _d(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function vd(e, t, n) {
	return {
		y: e,
		m: t,
		d: n,
		H: 0,
		M: 0,
		S: 0,
		L: 0
	};
}
function yd(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = wd(i), u = Td(i), d = wd(a), f = Td(a), p = wd(o), m = Td(o), h = wd(s), g = Td(s), _ = wd(c), v = Td(c), y = {
		a: ne,
		A: re,
		b: j,
		B: ie,
		c: null,
		d: Kd,
		e: Kd,
		f: Zd,
		g: lf,
		G: df,
		H: qd,
		I: Jd,
		j: Yd,
		L: Xd,
		m: Qd,
		M: $d,
		p: M,
		q: ae,
		Q: Pf,
		s: Ff,
		S: ef,
		u: tf,
		U: nf,
		V: af,
		w: of,
		W: sf,
		x: null,
		X: null,
		y: cf,
		Y: uf,
		Z: ff,
		"%": Nf
	}, b = {
		a: oe,
		A: N,
		b: se,
		B: ce,
		c: null,
		d: pf,
		e: pf,
		f: vf,
		g: kf,
		G: jf,
		H: mf,
		I: hf,
		j: gf,
		L: _f,
		m: yf,
		M: bf,
		p: le,
		q: ue,
		Q: Pf,
		s: Ff,
		S: xf,
		u: Sf,
		U: Cf,
		V: Tf,
		w: Ef,
		W: Df,
		x: null,
		X: null,
		y: Of,
		Y: Af,
		Z: Mf,
		"%": Nf
	}, x = {
		a: E,
		A: D,
		b: O,
		B: k,
		c: A,
		d: Id,
		e: Id,
		f: Hd,
		g: Md,
		G: jd,
		H: Rd,
		I: Rd,
		j: Ld,
		L: Vd,
		m: Fd,
		M: zd,
		p: T,
		q: Pd,
		Q: Wd,
		s: Gd,
		S: Bd,
		u: Dd,
		U: Od,
		V: kd,
		w: Ed,
		W: Ad,
		x: ee,
		X: te,
		y: Md,
		Y: jd,
		Z: Nd,
		"%": Ud
	};
	y.x = S(n, y), y.X = S(r, y), y.c = S(t, y), b.x = S(n, b), b.X = S(r, b), b.c = S(t, b);
	function S(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = bd[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function C(e, t) {
		return function(n) {
			var r = vd(1900, void 0, 1), i = w(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = _d(vd(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? td.ceil(a) : td(a), a = Uu.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = gd(vd(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? qu.ceil(a) : qu(a), a = Hu.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : +("W" in r)), o = "Z" in r ? _d(vd(r.y, 0, 1)).getUTCDay() : gd(vd(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, _d(r)) : gd(r);
		};
	}
	function w(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = x[s in bd ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
			} else if (s != n.charCodeAt(r++)) return -1;
		}
		return r;
	}
	function T(e, t, n) {
		var r = l.exec(t.slice(n));
		return r ? (e.p = u.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function E(e, t, n) {
		var r = p.exec(t.slice(n));
		return r ? (e.w = m.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function D(e, t, n) {
		var r = d.exec(t.slice(n));
		return r ? (e.w = f.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function O(e, t, n) {
		var r = _.exec(t.slice(n));
		return r ? (e.m = v.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function k(e, t, n) {
		var r = h.exec(t.slice(n));
		return r ? (e.m = g.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function A(e, n, r) {
		return w(e, t, n, r);
	}
	function ee(e, t, r) {
		return w(e, n, t, r);
	}
	function te(e, t, n) {
		return w(e, r, t, n);
	}
	function ne(e) {
		return o[e.getDay()];
	}
	function re(e) {
		return a[e.getDay()];
	}
	function j(e) {
		return c[e.getMonth()];
	}
	function ie(e) {
		return s[e.getMonth()];
	}
	function M(e) {
		return i[+(e.getHours() >= 12)];
	}
	function ae(e) {
		return 1 + ~~(e.getMonth() / 3);
	}
	function oe(e) {
		return o[e.getUTCDay()];
	}
	function N(e) {
		return a[e.getUTCDay()];
	}
	function se(e) {
		return c[e.getUTCMonth()];
	}
	function ce(e) {
		return s[e.getUTCMonth()];
	}
	function le(e) {
		return i[+(e.getUTCHours() >= 12)];
	}
	function ue(e) {
		return 1 + ~~(e.getUTCMonth() / 3);
	}
	return {
		format: function(e) {
			var t = S(e += "", y);
			return t.toString = function() {
				return e;
			}, t;
		},
		parse: function(e) {
			var t = C(e += "", !1);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcFormat: function(e) {
			var t = S(e += "", b);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcParse: function(e) {
			var t = C(e += "", !0);
			return t.toString = function() {
				return e;
			}, t;
		}
	};
}
var bd = {
	"-": "",
	_: " ",
	0: "0"
}, K = /^\s*\d+/, xd = /^%/, Sd = /[\\^$*+?|[\]().{}]/g;
function q(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function Cd(e) {
	return e.replace(Sd, "\\$&");
}
function wd(e) {
	return RegExp("^(?:" + e.map(Cd).join("|") + ")", "i");
}
function Td(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function Ed(e, t, n) {
	var r = K.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function Dd(e, t, n) {
	var r = K.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function Od(e, t, n) {
	var r = K.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function kd(e, t, n) {
	var r = K.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function Ad(e, t, n) {
	var r = K.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function jd(e, t, n) {
	var r = K.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function Md(e, t, n) {
	var r = K.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Nd(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Pd(e, t, n) {
	var r = K.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Fd(e, t, n) {
	var r = K.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function Id(e, t, n) {
	var r = K.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function Ld(e, t, n) {
	var r = K.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function Rd(e, t, n) {
	var r = K.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function zd(e, t, n) {
	var r = K.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function Bd(e, t, n) {
	var r = K.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function Vd(e, t, n) {
	var r = K.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function Hd(e, t, n) {
	var r = K.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Ud(e, t, n) {
	var r = xd.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function Wd(e, t, n) {
	var r = K.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function Gd(e, t, n) {
	var r = K.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function Kd(e, t) {
	return q(e.getDate(), t, 2);
}
function qd(e, t) {
	return q(e.getHours(), t, 2);
}
function Jd(e, t) {
	return q(e.getHours() % 12 || 12, t, 2);
}
function Yd(e, t) {
	return q(1 + Hu.count(ld(e), e), t, 3);
}
function Xd(e, t) {
	return q(e.getMilliseconds(), t, 3);
}
function Zd(e, t) {
	return Xd(e, t) + "000";
}
function Qd(e, t) {
	return q(e.getMonth() + 1, t, 2);
}
function $d(e, t) {
	return q(e.getMinutes(), t, 2);
}
function ef(e, t) {
	return q(e.getSeconds(), t, 2);
}
function tf(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function nf(e, t) {
	return q(Ku.count(ld(e) - 1, e), t, 2);
}
function rf(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? Xu(e) : Xu.ceil(e);
}
function af(e, t) {
	return e = rf(e), q(Xu.count(ld(e), e) + (ld(e).getDay() === 4), t, 2);
}
function of(e) {
	return e.getDay();
}
function sf(e, t) {
	return q(qu.count(ld(e) - 1, e), t, 2);
}
function cf(e, t) {
	return q(e.getFullYear() % 100, t, 2);
}
function lf(e, t) {
	return e = rf(e), q(e.getFullYear() % 100, t, 2);
}
function uf(e, t) {
	return q(e.getFullYear() % 1e4, t, 4);
}
function df(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? Xu(e) : Xu.ceil(e), q(e.getFullYear() % 1e4, t, 4);
}
function ff(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + q(t / 60 | 0, "0", 2) + q(t % 60, "0", 2);
}
function pf(e, t) {
	return q(e.getUTCDate(), t, 2);
}
function mf(e, t) {
	return q(e.getUTCHours(), t, 2);
}
function hf(e, t) {
	return q(e.getUTCHours() % 12 || 12, t, 2);
}
function gf(e, t) {
	return q(1 + Uu.count(ud(e), e), t, 3);
}
function _f(e, t) {
	return q(e.getUTCMilliseconds(), t, 3);
}
function vf(e, t) {
	return _f(e, t) + "000";
}
function yf(e, t) {
	return q(e.getUTCMonth() + 1, t, 2);
}
function bf(e, t) {
	return q(e.getUTCMinutes(), t, 2);
}
function xf(e, t) {
	return q(e.getUTCSeconds(), t, 2);
}
function Sf(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function Cf(e, t) {
	return q(ed.count(ud(e) - 1, e), t, 2);
}
function wf(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? id(e) : id.ceil(e);
}
function Tf(e, t) {
	return e = wf(e), q(id.count(ud(e), e) + (ud(e).getUTCDay() === 4), t, 2);
}
function Ef(e) {
	return e.getUTCDay();
}
function Df(e, t) {
	return q(td.count(ud(e) - 1, e), t, 2);
}
function Of(e, t) {
	return q(e.getUTCFullYear() % 100, t, 2);
}
function kf(e, t) {
	return e = wf(e), q(e.getUTCFullYear() % 100, t, 2);
}
function Af(e, t) {
	return q(e.getUTCFullYear() % 1e4, t, 4);
}
function jf(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? id(e) : id.ceil(e), q(e.getUTCFullYear() % 1e4, t, 4);
}
function Mf() {
	return "+0000";
}
function Nf() {
	return "%";
}
function Pf(e) {
	return +e;
}
function Ff(e) {
	return Math.floor(e / 1e3);
}
//#endregion
//#region node_modules/d3-time-format/src/defaultLocale.js
var If, Lf, Rf;
zf({
	dateTime: "%x, %X",
	date: "%-m/%-d/%Y",
	time: "%-I:%M:%S %p",
	periods: ["AM", "PM"],
	days: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],
	shortDays: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	months: [
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
		"December"
	],
	shortMonths: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	]
});
function zf(e) {
	return If = yd(e), Lf = If.format, If.parse, Rf = If.utcFormat, If.utcParse, If;
}
//#endregion
//#region node_modules/d3-scale/src/time.js
function Bf(e) {
	return new Date(e);
}
function Vf(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Hf(e, t, n, r, i, a, o, s, c, l) {
	var u = Ol(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), g = l("%I %p"), _ = l("%a %d"), v = l("%b %d"), y = l("%B"), b = l("%Y");
	function x(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? g : r(e) < e ? i(e) < e ? _ : v : n(e) < e ? y : b)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, Vf)) : f().map(Bf);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? x : l(t);
	}, u.nice = function(e) {
		var n = f();
		return (!e || typeof e.range != "function") && (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(ru(n, e)) : u;
	}, u.copy = function() {
		return El(u, Hf(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function Uf() {
	return fl.apply(Hf(md, hd, ld, sd, Ku, Hu, Bu, Ru, Lu, Lf).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
//#region node_modules/d3-scale/src/utcTime.js
function Wf() {
	return fl.apply(Hf(fd, pd, ud, cd, ed, Uu, Vu, zu, Lu, Rf).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
//#endregion
//#region node_modules/d3-scale/src/sequential.js
function Gf() {
	var e = 0, t = 1, n, r, i, a, o = W, s = !1, c;
	function l(e) {
		return e == null || isNaN(e = +e) ? c : o(i === 0 ? .5 : (e = (a(e) - n) * i, s ? Math.max(0, Math.min(1, e)) : e));
	}
	l.domain = function(o) {
		return arguments.length ? ([e, t] = o, n = a(e = +e), r = a(t = +t), i = n === r ? 0 : 1 / (r - n), l) : [e, t];
	}, l.clamp = function(e) {
		return arguments.length ? (s = !!e, l) : s;
	}, l.interpolator = function(e) {
		return arguments.length ? (o = e, l) : o;
	};
	function u(e) {
		return function(t) {
			var n, r;
			return arguments.length ? ([n, r] = t, o = e(n, r), l) : [o(0), o(1)];
		};
	}
	return l.range = u(Bs), l.rangeRound = u(Vs), l.unknown = function(e) {
		return arguments.length ? (c = e, l) : c;
	}, function(o) {
		return a = o, n = o(e), r = o(t), i = n === r ? 0 : 1 / (r - n), l;
	};
}
function Kf(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function qf() {
	var e = eu(Gf()(W));
	return e.copy = function() {
		return Kf(e, qf());
	}, pl.apply(e, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/diverging.js
function Jf() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, l = W, u, d = !1, f;
	function p(e) {
		return isNaN(e = +e) ? f : (e = .5 + ((e = +u(e)) - a) * (r * e < r * a ? s : c), l(d ? Math.max(0, Math.min(1, e)) : e));
	}
	p.domain = function(l) {
		return arguments.length ? ([e, t, n] = l, i = u(e = +e), a = u(t = +t), o = u(n = +n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p) : [
			e,
			t,
			n
		];
	}, p.clamp = function(e) {
		return arguments.length ? (d = !!e, p) : d;
	}, p.interpolator = function(e) {
		return arguments.length ? (l = e, p) : l;
	};
	function m(e) {
		return function(t) {
			var n, r, i;
			return arguments.length ? ([n, r, i] = t, l = Zs(e, [
				n,
				r,
				i
			]), p) : [
				l(0),
				l(.5),
				l(1)
			];
		};
	}
	return p.range = m(Bs), p.rangeRound = m(Vs), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function Yf() {
	var e = eu(Jf()(W));
	return e.copy = function() {
		return Kf(e, Yf());
	}, pl.apply(e, arguments);
}
//#endregion
//#region node_modules/@unovis/ts/types/scale.js
var Xf = {
	scaleLinear: tu,
	scalePow: Su,
	scaleSqrt: Cu,
	scaleLog: pu,
	scaleSymlog: _u,
	scaleIdentity: nu,
	scaleTime: Uf,
	scaleUtc: Wf,
	scaleSequential: qf,
	scaleDiverging: Yf,
	scaleQuantize: Tu,
	scaleQuantile: wu,
	scaleThreshold: Eu,
	scaleOrdinal: hl,
	scaleBand: gl,
	scalePoint: vl
}, J;
(function(e) {
	e.X = "x", e.Y = "y";
})(J ||= {});
//#endregion
//#region node_modules/@unovis/ts/types/direction.js
var Zf;
(function(e) {
	e.West = "west", e.East = "east", e.North = "north", e.South = "south";
})(Zf ||= {});
//#endregion
//#region node_modules/@unovis/ts/containers/xy-container/config.js
var Qf = Object.assign(Object.assign({}, so), {
	components: [],
	tooltip: void 0,
	crosshair: void 0,
	annotations: void 0,
	xAxis: void 0,
	yAxis: void 0,
	autoMargin: !0,
	xScale: void 0,
	xDomain: void 0,
	xDomainMinConstraint: void 0,
	xDomainMaxConstraint: void 0,
	xRange: void 0,
	yScale: void 0,
	yDomain: void 0,
	yDomainMinConstraint: void 0,
	yDomainMaxConstraint: void 0,
	yRange: void 0,
	yDirection: Zf.North,
	preventEmptyDomain: null,
	scaleByDomain: !1,
	clipPathExtend: 2
}), $f = class extends co {
	constructor(e, t, n) {
		var r;
		super(e), this._defaultConfig = Qf, this.datamodel = new dl(), this.config = this._defaultConfig, this._clipPathId = lo(), this._axisMargin = {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		}, this._firstRender = !0, this._clipPath = this.svg.append("clipPath").attr("id", this._clipPathId), this._clipPath.append("rect");
		let i = "saturate", a = window.location.href.replace(window.location.hash, "");
		this.svg.attr("class", z`
      --highlight-filter-id: url(${a}#${i}); // defining a css variable
    `), this._svgDefs.append("filter").attr("id", i).attr("filterUnits", "objectBoundingBox").html("<feColorMatrix type=\"saturate\" in=\"SourceGraphic\" values=\"1.35\"/>"), t && this.updateContainer(t, !0), n && this.setData(n, !0), (this.config.xAxis || this.config.yAxis || this.components?.some((e) => e.datamodel.data)) && this.render(), (r = document.fonts) == null || r.ready.then(() => {
			this._firstRender || this._renderAxes(0);
		});
	}
	get components() {
		return this.config.components;
	}
	get width() {
		let e = this._getMargin();
		return En(this.containerWidth - e.left - e.right, 0, Infinity);
	}
	get height() {
		let e = this._getMargin();
		return En(this.containerHeight - e.top - e.bottom, 0, Infinity);
	}
	setData(e, t) {
		var n, r, i, a, o;
		let { components: s, config: c } = this;
		e && (this.datamodel.data = e, s.forEach((t) => {
			t.setData(e);
		}), (n = c.crosshair) == null || n.setData(e), (r = c.xAxis) == null || r.setData(e), (i = c.yAxis) == null || i.setData(e), vn(this.datamodel.data, e) || ((a = c.tooltip) == null || a.hide(), (o = c.crosshair) == null || o.hide()), t || this.render());
	}
	updateContainer(e, t) {
		super.updateContainer(e), this._removeAllChildren(), this.setData(this.datamodel.data, !0), e.xAxis && (this.config.xAxis.config.type = U.X, this.element.appendChild(e.xAxis.element)), e.yAxis && (this.config.yAxis.config.type = U.Y, this.element.appendChild(e.yAxis.element));
		for (let e of this.components) this.element.appendChild(e.element);
		let n = e.tooltip;
		n && (n.hasContainer() || n.setContainer(this._container), n.setComponents(this.components));
		let r = e.crosshair;
		r && (r.setContainer(this.svg), r.tooltip = n, this.element.appendChild(r.element));
		let i = e.annotations;
		i && this.element.appendChild(i.element), this.element.appendChild(this._clipPath.node()), this.element.appendChild(this._svgDefs.node()), this.element.appendChild(this._svgDefsExternal.node()), t || this.render();
	}
	updateComponents(e, t) {
		let { config: n } = this;
		this.components.forEach((t, n) => {
			e[n] && t.setConfig(e[n]);
		}), this._updateScales(...this.components, n.xAxis, n.yAxis, n.crosshair), t || this.render();
	}
	update(e, t, n) {
		n && (this.datamodel.data = n), e && this.updateContainer(e, !0), t && this.updateComponents(t, !0), this.render();
	}
	_preRender() {
		let { config: e } = this;
		super._preRender(), e.autoMargin && this._setAutoMargin();
		let t = Tn([
			...this.components,
			e.xAxis,
			e.yAxis,
			e.crosshair,
			e.annotations
		]), n = this._getMargin();
		for (let e of t) e.setSize(this.width, this.height, this.containerWidth, this.containerHeight), e.setContainerMargin(n);
		this._updateScales(...this.components, e.xAxis, e.yAxis, e.crosshair);
	}
	_render(e) {
		var t, n, r, i;
		let { config: a } = this;
		super._render();
		let o = this._getMargin();
		for (let t of this.components) t.g.attr("transform", `translate(${o.left},${o.top})`).style("clip-path", t.clippable ? `url(#${this._clipPathId})` : null).style("-webkit-clip-path", t.clippable ? `url(#${this._clipPathId})` : null), t.render(e);
		this._renderAxes(this._firstRender ? 0 : e);
		let s = a.clipPathExtend;
		this._clipPath.select("rect").attr("x", -s).attr("y", -s).attr("width", this.width + 2 * s).attr("height", this.height + 2 * s), (t = a.tooltip) == null || t.update();
		let c = a.crosshair;
		if (c) {
			let e = this.components.filter((e) => !e.stacked).map((e) => e.config.y), t = this.components.filter((e) => e.stacked).map((e) => e.config.y), n = this.components.find((e) => e.config.baseline)?.config?.baseline;
			c.accessors = {
				x: this.components[0]?.config.x,
				y: yn(e),
				yStacked: yn(t),
				baseline: n
			}, c.g.attr("transform", `translate(${o.left},${o.top})`).style("clip-path", `url(#${this._clipPathId})`).style("-webkit-clip-path", `url(#${this._clipPathId})`), c.render();
		}
		(n = a.annotations) == null || n.g.attr("transform", `translate(${o.left},${o.top})`), (r = a.annotations) == null || r.render(), this._firstRender = !1, (i = a.onRenderComplete) == null || i.call(a, this.svg.node(), o, this._getBleed(this.components), this.containerWidth, this.containerHeight, this.width, this.height);
	}
	_updateScales(...e) {
		let t = Tn(e || this.components);
		this._setScales(...t), this._updateScalesDomain(...t), this._updateScalesRange(...t);
	}
	_setScales(...e) {
		let { config: t } = this;
		e && (t.xScale && e.forEach((e) => e.setScale(J.X, t.xScale)), t.yScale && e.forEach((e) => e.setScale(J.Y, t.yScale)));
	}
	_updateScalesDomain(...e) {
		let { config: t } = this;
		if (!e) return;
		let n = e.filter((e) => !e.config.excludeFromDomainCalculation);
		Object.values(J).forEach((r) => {
			let [i, a] = Bt(an(n.map((e) => e.getDataExtent(r, t.scaleByDomain)))), o = r === J.Y ? t.yDomain : t.xDomain, s = r === J.Y ? t.yDomainMinConstraint : t.xDomainMinConstraint, c = r === J.Y ? t.yDomainMaxConstraint : t.xDomainMaxConstraint, l = o?.[0] ?? i ?? 0, u = o?.[1] ?? a ?? 1, d = [En(l, s?.[0] ?? -Infinity, s?.[1] ?? Infinity), En(u, c?.[0] ?? -Infinity, c?.[1] ?? Infinity)];
			if (d[0] === d[1]) {
				let e = n.some((e) => e.datamodel.data?.length > 0);
				(t.preventEmptyDomain || t.preventEmptyDomain === null && (!e || r === J.Y)) && (d[1] = d[0] + 1);
			}
			e.forEach((e) => e.setScaleDomain(r, d));
		});
	}
	_updateScalesRange(...e) {
		let { config: t } = this;
		if (!e) return;
		let n = t.yDirection === Zf.South, r = [t.padding.left ?? 0, this.width - (t.padding.right ?? 0)], i = [this.height - (t.padding.bottom ?? 0), t.padding.top ?? 0];
		n && i.reverse();
		for (let n of e) n.setSize(this.width, this.height, this.containerWidth, this.containerHeight), n.setScaleRange(J.X, t.xRange ?? r), n.setScaleRange(J.Y, t.yRange ?? i);
		let a = this._getBleed(e);
		for (let t of e) t.setScaleRange(J.X, [r[0] + a.left, r[1] - a.right]), t.setScaleRange(J.Y, n ? [i[0] + a.top, i[1] - a.bottom] : [i[0] - a.bottom, i[1] + a.top]);
	}
	_renderAxes(e) {
		let { config: { xAxis: t, yAxis: n } } = this, r = this._getMargin();
		Tn([t, n]).forEach((t) => {
			let n = t.getOffset(r);
			t.g.attr("transform", `translate(${n.left},${n.top})`), t.render(e);
		});
	}
	_setAutoMargin() {
		let { config: { xAxis: e, yAxis: t } } = this, n = Tn([
			...this.components,
			e,
			t
		]);
		this._setScales(...n), this._updateScalesDomain(...n);
		let r = this._firstRender ? 2 : 1;
		for (let i = 0; i < r; i += 1) {
			let r = {
				top: 0,
				bottom: 0,
				left: 0,
				right: 0
			};
			this._updateScalesRange(...n), Tn([e, t]).forEach((e) => {
				e.preRender();
				let t = e.getRequiredMargin();
				r.top < t.top && (r.top = t.top), r.bottom < t.bottom && (r.bottom = t.bottom), r.left < t.left && (r.left = t.left), r.right < t.right && (r.right = t.right);
			}), this._axisMargin = r;
		}
	}
	_getMargin() {
		let { config: { margin: e } } = this;
		return {
			top: e.top + this._axisMargin.top,
			bottom: e.bottom + this._axisMargin.bottom,
			left: e.left + this._axisMargin.left,
			right: e.right + this._axisMargin.right
		};
	}
	_getBleed(e) {
		return e.map((e) => e.bleed).reduce((e, t) => {
			for (let n of Object.keys(e)) {
				let r = n;
				e[r] < t[r] && (e[r] = t[r]);
			}
			return e;
		}, {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		});
	}
	destroy() {
		let { components: e, config: { tooltip: t, crosshair: n, annotations: r, xAxis: i, yAxis: a } } = this;
		super.destroy();
		for (let t of e) t?.destroy();
		t?.destroy(), n?.destroy(), r?.destroy(), i?.destroy(), a?.destroy();
	}
}, ep = {
	duration: 600,
	events: {},
	attributes: {}
}, tp = class {
	constructor(e = la.SVG) {
		this.type = la.SVG, this.datamodel = new dl(), this.sizing = ua.Fit, this.events = {}, this._defaultConfig = ep, this._width = 400, this._height = 200, this._containerWidth = void 0, this._containerHeight = void 0, this._containerMargin = {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		}, this._setUpComponentEventsThrottled = Sn(this._setUpComponentEvents, 500), this._setCustomAttributesThrottled = Sn(this._setCustomAttributes, 500), e === la.SVG ? this.element = document.createElementNS("http://www.w3.org/2000/svg", "g") : this.element = document.createElement("div"), this.uid = lo(), this.g = oa(this.element);
		let t = this.constructor?.selectors?.root;
		t && this.g.attr("class", t);
	}
	setContainerMargin(e) {
		this._containerMargin = e;
	}
	setConfig(e) {
		this.prevConfig = this.config, this.config = xn(this._defaultConfig, e);
	}
	setData(e) {
		this.datamodel.data = e;
	}
	setSize(e, t, n, r) {
		isFinite(e) && (this._width = e), isFinite(t) && (this._height = t), isFinite(n) && (this._containerWidth = n), isFinite(r) && (this._containerHeight = r);
	}
	render(e = this.config.duration) {
		this._render(e);
		let t = "animating";
		e && (this.g.attr(t, ""), this.g.transition(t).duration(e).on("end interrupt", () => {
			this.g.attr(t, null);
		})), this._setUpComponentEventsThrottled(), this._setCustomAttributesThrottled();
	}
	get bleed() {
		return {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		};
	}
	_render(e = this.config.duration) {}
	_setCustomAttributes() {
		let e = this.config.attributes;
		Object.keys(e).forEach((t) => {
			Object.keys(e[t]).forEach((n) => {
				this.g.selectAll(`.${t}`).attr(n, e[t][n]);
			});
		});
	}
	_setUpComponentEvents() {
		this._bindEvents(this.events), this._bindEvents(this.config.events, ".user");
	}
	_mapEventDatum(e) {
		return e;
	}
	_bindEvents(e = this.events, t = "") {
		Object.keys(e).forEach((n) => {
			Object.keys(e[n]).forEach((r) => {
				let i = this.g.selectAll(`.${n}`);
				i.on(r + t, (t, a) => {
					let o = i.nodes(), s = o.indexOf(t.currentTarget), c = e[n][r], l = this._mapEventDatum(a);
					return c?.(l, t, s, o);
				});
			});
		});
	}
	destroy() {
		var e;
		(e = this.g) == null || e.remove(), this.element = void 0;
	}
	isDestroyed() {
		return !this.element;
	}
}, np = class extends dl {
	constructor(e) {
		super(e);
	}
	get data() {
		return this._data ?? [];
	}
	set data(e) {
		Array.isArray(e) && (this._data = e);
	}
}, rp = Object.assign(Object.assign({}, ep), {
	x: void 0,
	y: void 0,
	id: (e, t) => e.id ?? `${t}`,
	color: (e) => e.color,
	xScale: void 0,
	yScale: void 0,
	excludeFromDomainCalculation: !1
}), ip = class extends tp {
	constructor() {
		super(...arguments), this.datamodel = new np(), this.clippable = !0, this.stacked = !1, this._defaultConfig = rp, this._xScale = Xf.scaleLinear(), this._yScale = Xf.scaleLinear();
	}
	get xScale() {
		return this.config.xScale || this._xScale;
	}
	get yScale() {
		return this.config.yScale || this._yScale;
	}
	setConfig(e) {
		this.config?.xScale && (e.xScale = this.config.xScale), this.config?.yScale && (e.yScale = this.config.yScale), super.setConfig(e);
	}
	setScaleDomain(e, t) {
		var n, r;
		e === J.X && ((n = this._xScale) == null || n.domain(t)), e === J.Y && ((r = this._yScale) == null || r.domain(t));
	}
	setScaleRange(e, t) {
		var n, r;
		e === J.X && ((n = this._xScale) == null || n.range(t)), e === J.Y && ((r = this._yScale) == null || r.range(t));
	}
	setScale(e, t) {
		t && e === J.X && (this._xScale = t), t && e === J.Y && (this._yScale = t);
	}
	getDataExtent(e, t) {
		let { config: n, datamodel: r } = this;
		switch (e) {
			case J.X: return this.getXDataExtent();
			case J.Y: return this.getYDataExtent(t);
			default: return Mn(r.data, n[e]);
		}
	}
	getXDataExtent() {
		let { config: e, datamodel: t } = this;
		return Mn(t.data, e.x);
	}
	getYDataExtent(e) {
		let { config: t, datamodel: n } = this, r = this.xScale.domain();
		return Mn(e ? Pn(n.data, r, t.x, !0) : n.data, ...pn(t.y) ? t.y : [t.y]);
	}
}, Y;
(function(e) {
	e.Top = "top", e.Bottom = "bottom", e.Left = "left", e.Right = "right", e.Center = "center", e.Auto = "auto";
})(Y ||= {});
var ap;
(function(e) {
	e.Absolute = "absolute", e.Fixed = "fixed";
})(ap ||= {});
var op;
(function(e) {
	e.Inside = "inside", e.Outside = "outside", e.Center = "center";
})(op ||= {});
var sp;
(function(e) {
	e.Horizontal = "horizontal", e.Vertical = "vertical";
})(sp ||= {});
//#endregion
//#region node_modules/@unovis/ts/components/tooltip/config.js
var cp = {
	components: [],
	container: void 0,
	followCursor: !0,
	allowHover: !1,
	horizontalPlacement: Y.Auto,
	horizontalShift: 0,
	verticalPlacement: Y.Top,
	verticalShift: 0,
	attributes: {},
	triggers: {},
	className: void 0,
	showDelay: void 0,
	hideDelay: void 0
}, lp = /* @__PURE__ */ k({
	hidden: () => hp,
	nonInteractive: () => gp,
	positionFixed: () => pp,
	root: () => up,
	show: () => mp,
	tooltip: () => dp,
	variables: () => fp
}), up = z`
  label: tooltip;
  display: inline-block;
  left: 0;
  bottom: 0;
  min-width: max-content;
  position: absolute;
  opacity: 0;
  transition: opacity;
  transition-duration: var(--vis-tooltip-transition-duration);
  z-index: 999999;
  padding: var(--vis-tooltip-padding);
  color: var(--vis-tooltip-text-color);
  border-radius: var(--vis-tooltip-border-radius);
  box-shadow: var(--vis-tooltip-box-shadow);
  border: solid 1px var(--vis-tooltip-border-color);
  background-color: var(--vis-tooltip-background-color);
  backdrop-filter: var(--vis-tooltip-backdrop-filter);
`, dp = up, fp = jt`
  :root {
    --vis-tooltip-background-color: rgba(255, 255, 255, 0.95);
    --vis-tooltip-border-color: #e5e9f7;
    --vis-tooltip-text-color: #000;
    --vis-tooltip-shadow-color: rgba(172, 179, 184, 0.35);
    --vis-tooltip-backdrop-filter: none;
    --vis-tooltip-padding: 10px 15px;
    --vis-tooltip-border-radius: 5px;
    --vis-tooltip-transition-duration: 300ms;
    --vis-tooltip-box-shadow: none;

    --vis-dark-tooltip-background-color: rgba(30,30,30, 0.95);
    --vis-dark-tooltip-text-color: #e5e9f7;
    --vis-dark-tooltip-border-color: var(--vis-color-grey);
    --vis-dark-tooltip-shadow-color: rgba(0,0,0, 0.95);
  }

  body.theme-dark ${`.${up}`} {
    --vis-tooltip-background-color: var(--vis-dark-tooltip-background-color);
    --vis-tooltip-text-color: var(--vis-dark-tooltip-text-color);
    --vis-tooltip-border-color: var(--vis-dark-tooltip-border-color);
    --vis-tooltip-shadow-color: var(--vis-dark-tooltip-shadow-color);
  }

  body.theme-dark {
    --vis-tooltip-background-color: rgba(30,30,30, 0.95);
    --vis-tooltip-text-color: #e5e9f7;
    --vis-tooltip-border-color: var(--vis-color-grey);
    --vis-tooltip-shadow-color: rgba(0,0,0, 0.95);
  }
`, pp = z`
  bottom: unset;
  position: fixed;
`, mp = z`
  opacity: 1;
`, hp = z`
  display: none;
`, gp = z`
  label: non-interactive;
  pointer-events: none;
  user-select: none;
`, _p = class {
	constructor(e = {}) {
		this._defaultConfig = cp, this.config = this._defaultConfig, this._setUpEventsThrottled = Sn(this._setUpEvents, 500), this._setContainerPositionThrottled = Sn(this._setContainerPosition, 500), this._isShown = !1, this.element = document.createElement("div"), this.div = oa(this.element).attr("class", up).classed(mp, !1).classed(hp, !0), this.setConfig(e), this.components = this.config.components, this._mutationObserver = new MutationObserver(() => {
			this._isShown && (!this.config.followCursor && this._hoveredElement ? this.placeByElement(this._hoveredElement) : this._position && this.place({
				x: this._position[0],
				y: this._position[1]
			}));
		}), this._mutationObserver.observe(this.div.node(), {
			childList: !0,
			subtree: !0
		});
	}
	setConfig(e) {
		this.prevConfig = this.config, this.config = xn(this._defaultConfig, e), this.prevConfig.horizontalPlacement !== this.config.horizontalPlacement && this.overrideHorizontalPlacement(void 0), this.config.container && this.config.container !== this.prevConfig?.container && this.setContainer(this.config.container), this._setUpAttributes();
	}
	setContainer(e) {
		var t;
		(t = this.element.parentNode) == null || t.removeChild(this.element), this._container = e, this._container.appendChild(this.element), this._setContainerPositionThrottled();
	}
	getContainer() {
		return this._container;
	}
	hasContainer() {
		return !!this._container && this._container.isConnected;
	}
	setComponents(e) {
		this.components = e;
	}
	update() {
		this._container && this._setUpEventsThrottled();
	}
	show(e, t) {
		this.render(e), this.place(t);
	}
	_hide() {
		this.div.classed(mp, !1).on("transitionend", () => {
			this.div.classed(hp, !this._isShown);
		}), this._isShown = !1;
	}
	hide() {
		window.clearTimeout(this._showDelayTimeoutId), this.config.hideDelay ? (window.clearTimeout(this._hideDelayTimeoutId), this._hideDelayTimeoutId = setTimeout(() => this._hide(), this.config.hideDelay)) : this._hide();
	}
	_display() {
		window.clearTimeout(this._hideDelayTimeoutId), this.div.classed(hp, !1).classed(mp, !0), this._isShown = !0;
	}
	display() {
		this._isShown || (this.config.showDelay ? (window.clearTimeout(this._showDelayTimeoutId), this._showDelayTimeoutId = setTimeout(() => {
			this._display(), this.place({
				x: this._position[0],
				y: this._position[1]
			});
		}, this.config.showDelay)) : this._display());
	}
	place(e) {
		if (this._position = [e.x, e.y], !this.hasContainer()) {
			console.warn("Unovis | Tooltip: Container was not set or is not initialized yet");
			return;
		}
		let { config: t } = this, n = this.element.offsetWidth, r = this.element.offsetHeight, i = this._overriddenHorizontalPlacement || (t.horizontalPlacement === Y.Auto ? Y.Center : t.horizontalPlacement), a = t.verticalPlacement === Y.Auto ? e.y - r < 0 ? Y.Bottom : Y.Top : t.verticalPlacement, o = i === Y.Left ? -n - 5 - t.horizontalShift : i === Y.Center ? -n / 2 : 5 + t.horizontalShift, s = a === Y.Bottom ? 5 + t.verticalShift : a === Y.Center ? -r / 2 : -5 - t.verticalShift - r, [c, l] = this._constraintPosToContainer(e.x + o, e.y + s, n, r);
		this._applyPosition(c, l, r);
	}
	placeByElement(e) {
		let { config: t } = this;
		this._hoveredElement = e;
		let n = this.element.offsetWidth, r = this.element.offsetHeight, i = this.isContainerBody(), a = i ? window.innerWidth : this._container.scrollWidth, o = e.getBoundingClientRect(), s = i ? [o.x, o.y] : ca({
			clientX: o.x,
			clientY: o.y,
			pageX: o.x,
			pageY: o.y
		}, this._container), c = this._overriddenHorizontalPlacement || (t.horizontalPlacement === Y.Auto ? s[0] - n < 0 ? Y.Right : s[0] + n > a ? Y.Left : Y.Center : t.horizontalPlacement), l = 0;
		switch (c) {
			case Y.Left:
				l = -n - 5 - t.horizontalShift;
				break;
			case Y.Right:
				l = o.width + 5 + t.horizontalShift;
				break;
			case Y.Center:
			default:
				l = (-n + o.width) / 2;
				break;
		}
		let u = t.verticalPlacement === Y.Auto ? c === Y.Center ? s[1] - r < 0 ? Y.Bottom : Y.Top : Y.Center : t.verticalPlacement, d = -r;
		switch (u) {
			case Y.Center:
				d += (r + o.height) / 2;
				break;
			case Y.Bottom:
				d += r + o.height + 5 + t.verticalShift;
				break;
			case Y.Top:
			default:
				d += -5 - t.verticalShift;
				break;
		}
		let [f, p] = this._constraintPosToContainer(s[0] + l, s[1] + d, n, r);
		this._applyPosition(f, p, r);
	}
	isContainerBody() {
		return this._container === document.body;
	}
	overrideHorizontalPlacement(e) {
		this._overriddenHorizontalPlacement = e;
	}
	render(e) {
		let { config: t, prevConfig: n } = this;
		e instanceof HTMLElement ? this.div.select(":first-child").node() !== e && this.div.html("").append(() => e) : e !== null && this.div.html(e || ""), this.div.classed(t.className ?? "", !!t.className).classed(gp, !t.allowHover), n?.className && n.className !== t.className && this.div.classed(n.className, !1), this.display();
	}
	_applyPosition(e, t, n) {
		let r = this.isContainerBody(), i = r ? window.innerHeight : this._container.scrollHeight;
		this.div.classed(pp, r).style("top", r ? `${t}px` : "unset").style("bottom", r ? "unset" : `${i - t - n}px`).style("left", `${e}px`);
	}
	_constraintPosToContainer(e, t, n, r) {
		let i = this.isContainerBody(), a = i ? window.innerHeight : this._container.scrollHeight, o = i ? window.innerWidth : this._container.scrollWidth, s = e > o - n - 10 ? o - n - 10 : e < 10 ? 10 : e, c = t > a - r - 10 ? a - r - 10 : t < 10 ? 10 : t;
		return [o < n ? 0 : s, a < r ? 0 : c];
	}
	_setContainerPosition() {
		this._container !== document.body && getComputedStyle(this._container)?.position === "static" && (this._container.style.position = "relative");
	}
	_setUpEvents() {
		let { config: e } = this;
		this.components.forEach((e) => {
			let t = oa(e.element);
			t.on("mousemove.tooltip", (e) => {
				let { config: n } = this, r = e.composedPath && e.composedPath() || e.path || [e.target];
				for (let i of Object.keys(n.triggers)) {
					let a = n.triggers[i];
					if (!a) continue;
					let o = t.selectAll(`.${i}`).nodes();
					for (let s of r) {
						if (s === t.node()) break;
						if (s.classList.contains(i)) {
							let t = o.indexOf(s), r = a(oa(s).datum(), t, o), [i, c] = this.isContainerBody() ? [e.clientX, e.clientY] : ca(e, this._container);
							r === null ? this.hide() : (this.render(r), n.followCursor ? this.place({
								x: i,
								y: c
							}) : this.placeByElement(s)), e.stopPropagation();
							return;
						}
					}
				}
				this._isShown && this.hide();
			}).on("mouseleave.tooltip", (e) => {
				e.stopPropagation(), this.hide();
			});
		}), e.allowHover ? this.div.on("mouseenter.tooltip", this._display.bind(this)).on("mouseleave.tooltip", this.hide.bind(this)) : this.div.on("mouseenter.tooltip", null).on("mouseleave.tooltip", null);
	}
	_setUpAttributes() {
		let e = this.config.attributes;
		e && Object.keys(e).forEach((t) => {
			this.div.attr(t, e[t]);
		});
	}
	destroy() {
		var e;
		this._mutationObserver.disconnect(), window.clearTimeout(this._hideDelayTimeoutId), window.clearTimeout(this._showDelayTimeoutId), (e = this.div) == null || e.remove();
	}
};
_p.selectors = lp;
//#endregion
//#region node_modules/d3-shape/src/constant.js
function X(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-shape/src/math.js
var vp = Math.abs, Z = Math.atan2, yp = Math.cos, bp = Math.max, xp = Math.min, Sp = Math.sin, Cp = Math.sqrt, wp = Math.PI, Tp = wp / 2, Ep = 2 * wp;
function Dp(e) {
	return e > 1 ? 0 : e < -1 ? wp : Math.acos(e);
}
function Op(e) {
	return e >= 1 ? Tp : e <= -1 ? -Tp : Math.asin(e);
}
//#endregion
//#region node_modules/d3-path/src/path.js
var kp = Math.PI, Ap = 2 * kp, jp = 1e-6, Mp = Ap - jp;
function Np(e) {
	this._ += e[0];
	for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function Pp(e) {
	let t = Math.floor(e);
	if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
	if (t > 15) return Np;
	let n = 10 ** t;
	return function(e) {
		this._ += e[0];
		for (let t = 1, r = e.length; t < r; ++t) this._ += Math.round(arguments[t] * n) / n + e[t];
	};
}
var Fp = class {
	constructor(e) {
		this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Np : Pp(e);
	}
	moveTo(e, t) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}`;
	}
	closePath() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
	}
	lineTo(e, t) {
		this._append`L${this._x1 = +e},${this._y1 = +t}`;
	}
	quadraticCurveTo(e, t, n, r) {
		this._append`Q${+e},${+t},${this._x1 = +n},${this._y1 = +r}`;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		this._append`C${+e},${+t},${+n},${+r},${this._x1 = +i},${this._y1 = +a}`;
	}
	arcTo(e, t, n, r, i) {
		if (e = +e, t = +t, n = +n, r = +r, i = +i, i < 0) throw Error(`negative radius: ${i}`);
		let a = this._x1, o = this._y1, s = n - e, c = r - t, l = a - e, u = o - t, d = l * l + u * u;
		if (this._x1 === null) this._append`M${this._x1 = e},${this._y1 = t}`;
		else if (d > jp) if (!(Math.abs(u * s - c * l) > jp) || !i) this._append`L${this._x1 = e},${this._y1 = t}`;
		else {
			let f = n - a, p = r - o, m = s * s + c * c, h = f * f + p * p, g = Math.sqrt(m), _ = Math.sqrt(d), v = i * Math.tan((kp - Math.acos((m + d - h) / (2 * g * _))) / 2), y = v / _, b = v / g;
			Math.abs(y - 1) > jp && this._append`L${e + y * l},${t + y * u}`, this._append`A${i},${i},0,0,${+(u * f > l * p)},${this._x1 = e + b * s},${this._y1 = t + b * c}`;
		}
	}
	arc(e, t, n, r, i, a) {
		if (e = +e, t = +t, n = +n, a = !!a, n < 0) throw Error(`negative radius: ${n}`);
		let o = n * Math.cos(r), s = n * Math.sin(r), c = e + o, l = t + s, u = 1 ^ a, d = a ? r - i : i - r;
		this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > jp || Math.abs(this._y1 - l) > jp) && this._append`L${c},${l}`, n && (d < 0 && (d = d % Ap + Ap), d > Mp ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${this._x1 = c},${this._y1 = l}` : d > jp && this._append`A${n},${n},0,${+(d >= kp)},${u},${this._x1 = e + n * Math.cos(i)},${this._y1 = t + n * Math.sin(i)}`);
	}
	rect(e, t, n, r) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}h${n = +n}v${+r}h${-n}Z`;
	}
	toString() {
		return this._;
	}
};
function Ip() {
	return new Fp();
}
Ip.prototype = Fp.prototype;
//#endregion
//#region node_modules/d3-shape/src/path.js
function Lp(e) {
	let t = 3;
	return e.digits = function(n) {
		if (!arguments.length) return t;
		if (n == null) t = null;
		else {
			let e = Math.floor(n);
			if (!(e >= 0)) throw RangeError(`invalid digits: ${n}`);
			t = e;
		}
		return e;
	}, () => new Fp(t);
}
//#endregion
//#region node_modules/d3-shape/src/arc.js
function Rp(e) {
	return e.innerRadius;
}
function zp(e) {
	return e.outerRadius;
}
function Bp(e) {
	return e.startAngle;
}
function Vp(e) {
	return e.endAngle;
}
function Hp(e) {
	return e && e.padAngle;
}
function Up(e, t, n, r, i, a, o, s) {
	var c = n - e, l = r - t, u = o - i, d = s - a, f = d * c - u * l;
	if (!(f * f < 1e-12)) return f = (u * (t - a) - d * (e - i)) / f, [e + f * c, t + f * l];
}
function Wp(e, t, n, r, i, a, o) {
	var s = e - n, c = t - r, l = (o ? a : -a) / Cp(s * s + c * c), u = l * c, d = -l * s, f = e + u, p = t + d, m = n + u, h = r + d, g = (f + m) / 2, _ = (p + h) / 2, v = m - f, y = h - p, b = v * v + y * y, x = i - a, S = f * h - m * p, C = (y < 0 ? -1 : 1) * Cp(bp(0, x * x * b - S * S)), w = (S * y - v * C) / b, T = (-S * v - y * C) / b, E = (S * y + v * C) / b, D = (-S * v + y * C) / b, O = w - g, k = T - _, A = E - g, ee = D - _;
	return O * O + k * k > A * A + ee * ee && (w = E, T = D), {
		cx: w,
		cy: T,
		x01: -u,
		y01: -d,
		x11: w * (i / x - 1),
		y11: T * (i / x - 1)
	};
}
function Gp() {
	var e = Rp, t = zp, n = X(0), r = null, i = Bp, a = Vp, o = Hp, s = null, c = Lp(l);
	function l() {
		var l, u, d = +e.apply(this, arguments), f = +t.apply(this, arguments), p = i.apply(this, arguments) - Tp, m = a.apply(this, arguments) - Tp, h = vp(m - p), g = m > p;
		if (s ||= l = c(), f < d && (u = f, f = d, d = u), !(f > 1e-12)) s.moveTo(0, 0);
		else if (h > Ep - 1e-12) s.moveTo(f * yp(p), f * Sp(p)), s.arc(0, 0, f, p, m, !g), d > 1e-12 && (s.moveTo(d * yp(m), d * Sp(m)), s.arc(0, 0, d, m, p, g));
		else {
			var _ = p, v = m, y = p, b = m, x = h, S = h, C = o.apply(this, arguments) / 2, w = C > 1e-12 && (r ? +r.apply(this, arguments) : Cp(d * d + f * f)), T = xp(vp(f - d) / 2, +n.apply(this, arguments)), E = T, D = T, O, k;
			if (w > 1e-12) {
				var A = Op(w / d * Sp(C)), ee = Op(w / f * Sp(C));
				(x -= A * 2) > 1e-12 ? (A *= g ? 1 : -1, y += A, b -= A) : (x = 0, y = b = (p + m) / 2), (S -= ee * 2) > 1e-12 ? (ee *= g ? 1 : -1, _ += ee, v -= ee) : (S = 0, _ = v = (p + m) / 2);
			}
			var te = f * yp(_), ne = f * Sp(_), re = d * yp(b), j = d * Sp(b);
			if (T > 1e-12) {
				var ie = f * yp(v), M = f * Sp(v), ae = d * yp(y), oe = d * Sp(y), N;
				if (h < wp) if (N = Up(te, ne, ae, oe, ie, M, re, j)) {
					var se = te - N[0], ce = ne - N[1], le = ie - N[0], ue = M - N[1], de = 1 / Sp(Dp((se * le + ce * ue) / (Cp(se * se + ce * ce) * Cp(le * le + ue * ue))) / 2), fe = Cp(N[0] * N[0] + N[1] * N[1]);
					E = xp(T, (d - fe) / (de - 1)), D = xp(T, (f - fe) / (de + 1));
				} else E = D = 0;
			}
			S > 1e-12 ? D > 1e-12 ? (O = Wp(ae, oe, te, ne, f, D, g), k = Wp(ie, M, re, j, f, D, g), s.moveTo(O.cx + O.x01, O.cy + O.y01), D < T ? s.arc(O.cx, O.cy, D, Z(O.y01, O.x01), Z(k.y01, k.x01), !g) : (s.arc(O.cx, O.cy, D, Z(O.y01, O.x01), Z(O.y11, O.x11), !g), s.arc(0, 0, f, Z(O.cy + O.y11, O.cx + O.x11), Z(k.cy + k.y11, k.cx + k.x11), !g), s.arc(k.cx, k.cy, D, Z(k.y11, k.x11), Z(k.y01, k.x01), !g))) : (s.moveTo(te, ne), s.arc(0, 0, f, _, v, !g)) : s.moveTo(te, ne), !(d > 1e-12) || !(x > 1e-12) ? s.lineTo(re, j) : E > 1e-12 ? (O = Wp(re, j, ie, M, d, -E, g), k = Wp(te, ne, ae, oe, d, -E, g), s.lineTo(O.cx + O.x01, O.cy + O.y01), E < T ? s.arc(O.cx, O.cy, E, Z(O.y01, O.x01), Z(k.y01, k.x01), !g) : (s.arc(O.cx, O.cy, E, Z(O.y01, O.x01), Z(O.y11, O.x11), !g), s.arc(0, 0, d, Z(O.cy + O.y11, O.cx + O.x11), Z(k.cy + k.y11, k.cx + k.x11), g), s.arc(k.cx, k.cy, E, Z(k.y11, k.x11), Z(k.y01, k.x01), !g))) : s.arc(0, 0, d, b, y, g);
		}
		if (s.closePath(), l) return s = null, l + "" || null;
	}
	return l.centroid = function() {
		var n = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, r = (+i.apply(this, arguments) + +a.apply(this, arguments)) / 2 - wp / 2;
		return [yp(r) * n, Sp(r) * n];
	}, l.innerRadius = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : X(+t), l) : e;
	}, l.outerRadius = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : X(+e), l) : t;
	}, l.cornerRadius = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : X(+e), l) : n;
	}, l.padRadius = function(e) {
		return arguments.length ? (r = e == null ? null : typeof e == "function" ? e : X(+e), l) : r;
	}, l.startAngle = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : X(+e), l) : i;
	}, l.endAngle = function(e) {
		return arguments.length ? (a = typeof e == "function" ? e : X(+e), l) : a;
	}, l.padAngle = function(e) {
		return arguments.length ? (o = typeof e == "function" ? e : X(+e), l) : o;
	}, l.context = function(e) {
		return arguments.length ? (s = e ?? null, l) : s;
	}, l;
}
Array.prototype.slice;
function Kp(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/linear.js
function qp(e) {
	this._context = e;
}
qp.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default:
				this._context.lineTo(e, t);
				break;
		}
	}
};
function Jp(e) {
	return new qp(e);
}
//#endregion
//#region node_modules/d3-shape/src/point.js
function Yp(e) {
	return e[0];
}
function Xp(e) {
	return e[1];
}
//#endregion
//#region node_modules/d3-shape/src/line.js
function Zp(e, t) {
	var n = X(!0), r = null, i = Jp, a = null, o = Lp(s);
	e = typeof e == "function" ? e : e === void 0 ? Yp : X(e), t = typeof t == "function" ? t : t === void 0 ? Xp : X(t);
	function s(s) {
		var c, l = (s = Kp(s)).length, u, d = !1, f;
		for (r ?? (a = i(f = o())), c = 0; c <= l; ++c) !(c < l && n(u = s[c], c, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(u, c, s), +t(u, c, s));
		if (f) return a = null, f + "" || null;
	}
	return s.x = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : X(+t), s) : e;
	}, s.y = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : X(+e), s) : t;
	}, s.defined = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : X(!!e), s) : n;
	}, s.curve = function(e) {
		return arguments.length ? (i = e, r != null && (a = i(r)), s) : i;
	}, s.context = function(e) {
		return arguments.length ? (e == null ? r = a = null : a = i(r = e), s) : r;
	}, s;
}
//#endregion
//#region node_modules/d3-shape/src/area.js
function Qp(e, t, n) {
	var r = null, i = X(!0), a = null, o = Jp, s = null, c = Lp(l);
	e = typeof e == "function" ? e : e === void 0 ? Yp : X(+e), t = typeof t == "function" ? t : X(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? Xp : X(+n);
	function l(l) {
		var u, d, f, p = (l = Kp(l)).length, m, h = !1, g, _ = Array(p), v = Array(p);
		for (a ?? (s = o(g = c())), u = 0; u <= p; ++u) {
			if (!(u < p && i(m = l[u], u, l)) === h) if (h = !h) d = u, s.areaStart(), s.lineStart();
			else {
				for (s.lineEnd(), s.lineStart(), f = u - 1; f >= d; --f) s.point(_[f], v[f]);
				s.lineEnd(), s.areaEnd();
			}
			h && (_[u] = +e(m, u, l), v[u] = +t(m, u, l), s.point(r ? +r(m, u, l) : _[u], n ? +n(m, u, l) : v[u]));
		}
		if (g) return s = null, g + "" || null;
	}
	function u() {
		return Zp().defined(i).curve(o).context(a);
	}
	return l.x = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : X(+t), r = null, l) : e;
	}, l.x0 = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : X(+t), l) : e;
	}, l.x1 = function(e) {
		return arguments.length ? (r = e == null ? null : typeof e == "function" ? e : X(+e), l) : r;
	}, l.y = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : X(+e), n = null, l) : t;
	}, l.y0 = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : X(+e), l) : t;
	}, l.y1 = function(e) {
		return arguments.length ? (n = e == null ? null : typeof e == "function" ? e : X(+e), l) : n;
	}, l.lineX0 = l.lineY0 = function() {
		return u().x(e).y(t);
	}, l.lineY1 = function() {
		return u().x(e).y(n);
	}, l.lineX1 = function() {
		return u().x(r).y(t);
	}, l.defined = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : X(!!e), l) : i;
	}, l.curve = function(e) {
		return arguments.length ? (o = e, a != null && (s = o(a)), l) : o;
	}, l.context = function(e) {
		return arguments.length ? (e == null ? a = s = null : s = o(a = e), l) : a;
	}, l;
}
//#endregion
//#region node_modules/d3-shape/src/descending.js
function $p(e, t) {
	return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-shape/src/identity.js
function em(e) {
	return e;
}
//#endregion
//#region node_modules/d3-shape/src/pie.js
function tm() {
	var e = em, t = $p, n = null, r = X(0), i = X(Ep), a = X(0);
	function o(o) {
		var s, c = (o = Kp(o)).length, l, u, d = 0, f = Array(c), p = Array(c), m = +r.apply(this, arguments), h = Math.min(Ep, Math.max(-Ep, i.apply(this, arguments) - m)), g, _ = Math.min(Math.abs(h) / c, a.apply(this, arguments)), v = _ * (h < 0 ? -1 : 1), y;
		for (s = 0; s < c; ++s) (y = p[f[s] = s] = +e(o[s], s, o)) > 0 && (d += y);
		for (t == null ? n != null && f.sort(function(e, t) {
			return n(o[e], o[t]);
		}) : f.sort(function(e, n) {
			return t(p[e], p[n]);
		}), s = 0, u = d ? (h - c * v) / d : 0; s < c; ++s, m = g) l = f[s], y = p[l], g = m + (y > 0 ? y * u : 0) + v, p[l] = {
			data: o[l],
			index: s,
			value: y,
			startAngle: m,
			endAngle: g,
			padAngle: _
		};
		return p;
	}
	return o.value = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : X(+t), o) : e;
	}, o.sortValues = function(e) {
		return arguments.length ? (t = e, n = null, o) : t;
	}, o.sort = function(e) {
		return arguments.length ? (n = e, t = null, o) : n;
	}, o.startAngle = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : X(+e), o) : r;
	}, o.endAngle = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : X(+e), o) : i;
	}, o.padAngle = function(e) {
		return arguments.length ? (a = typeof e == "function" ? e : X(+e), o) : a;
	}, o;
}
//#endregion
//#region node_modules/d3-shape/src/noop.js
function nm() {}
//#endregion
//#region node_modules/d3-shape/src/curve/basis.js
function rm(e, t, n) {
	e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + n) / 6);
}
function im(e) {
	this._context = e;
}
im.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 3: rm(this, this._x1, this._y1);
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1:
				this._point = 2;
				break;
			case 2: this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
			default:
				rm(this, e, t);
				break;
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function am(e) {
	return new im(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/basisClosed.js
function om(e) {
	this._context = e;
}
om.prototype = {
	areaStart: nm,
	areaEnd: nm,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x2, this._y2), this._context.closePath();
				break;
			case 2:
				this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
				break;
			case 3:
				this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
				break;
		}
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._x2 = e, this._y2 = t;
				break;
			case 1:
				this._point = 2, this._x3 = e, this._y3 = t;
				break;
			case 2:
				this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
				break;
			default:
				rm(this, e, t);
				break;
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function sm(e) {
	return new om(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/basisOpen.js
function cm(e) {
	this._context = e;
}
cm.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3;
				var n = (this._x0 + 4 * this._x1 + e) / 6, r = (this._y0 + 4 * this._y1 + t) / 6;
				this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
				break;
			case 3: this._point = 4;
			default:
				rm(this, e, t);
				break;
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function lm(e) {
	return new cm(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/bundle.js
function um(e, t) {
	this._basis = new im(e), this._beta = t;
}
um.prototype = {
	lineStart: function() {
		this._x = [], this._y = [], this._basis.lineStart();
	},
	lineEnd: function() {
		var e = this._x, t = this._y, n = e.length - 1;
		if (n > 0) for (var r = e[0], i = t[0], a = e[n] - r, o = t[n] - i, s = -1, c; ++s <= n;) c = s / n, this._basis.point(this._beta * e[s] + (1 - this._beta) * (r + c * a), this._beta * t[s] + (1 - this._beta) * (i + c * o));
		this._x = this._y = null, this._basis.lineEnd();
	},
	point: function(e, t) {
		this._x.push(+e), this._y.push(+t);
	}
};
var dm = (function e(t) {
	function n(e) {
		return t === 1 ? new im(e) : new um(e, t);
	}
	return n.beta = function(t) {
		return e(+t);
	}, n;
})(.85);
//#endregion
//#region node_modules/d3-shape/src/curve/cardinal.js
function fm(e, t, n) {
	e._context.bezierCurveTo(e._x1 + e._k * (e._x2 - e._x0), e._y1 + e._k * (e._y2 - e._y0), e._x2 + e._k * (e._x1 - t), e._y2 + e._k * (e._y1 - n), e._x2, e._y2);
}
function pm(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
pm.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x2, this._y2);
				break;
			case 3:
				fm(this, this._x1, this._y1);
				break;
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1:
				this._point = 2, this._x1 = e, this._y1 = t;
				break;
			case 2: this._point = 3;
			default:
				fm(this, e, t);
				break;
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var mm = (function e(t) {
	function n(e) {
		return new pm(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
})(0);
//#endregion
//#region node_modules/d3-shape/src/curve/cardinalClosed.js
function hm(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
hm.prototype = {
	areaStart: nm,
	areaEnd: nm,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x3, this._y3), this._context.closePath();
				break;
			case 2:
				this._context.lineTo(this._x3, this._y3), this._context.closePath();
				break;
			case 3:
				this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
				break;
		}
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._x3 = e, this._y3 = t;
				break;
			case 1:
				this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
				break;
			case 2:
				this._point = 3, this._x5 = e, this._y5 = t;
				break;
			default:
				fm(this, e, t);
				break;
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var gm = (function e(t) {
	function n(e) {
		return new hm(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
})(0);
//#endregion
//#region node_modules/d3-shape/src/curve/cardinalOpen.js
function _m(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
_m.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
				break;
			case 3: this._point = 4;
			default:
				fm(this, e, t);
				break;
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var vm = (function e(t) {
	function n(e) {
		return new _m(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
})(0);
//#endregion
//#region node_modules/d3-shape/src/curve/catmullRom.js
function ym(e, t, n) {
	var r = e._x1, i = e._y1, a = e._x2, o = e._y2;
	if (e._l01_a > 1e-12) {
		var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, c = 3 * e._l01_a * (e._l01_a + e._l12_a);
		r = (r * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c, i = (i * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c;
	}
	if (e._l23_a > 1e-12) {
		var l = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, u = 3 * e._l23_a * (e._l23_a + e._l12_a);
		a = (a * l + e._x1 * e._l23_2a - t * e._l12_2a) / u, o = (o * l + e._y1 * e._l23_2a - n * e._l12_2a) / u;
	}
	e._context.bezierCurveTo(r, i, a, o, e._x2, e._y2);
}
function bm(e, t) {
	this._context = e, this._alpha = t;
}
bm.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x2, this._y2);
				break;
			case 3:
				this.point(this._x2, this._y2);
				break;
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		if (e = +e, t = +t, this._point) {
			var n = this._x2 - e, r = this._y2 - t;
			this._l23_a = Math.sqrt(this._l23_2a = (n * n + r * r) ** +this._alpha);
		}
		switch (this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1:
				this._point = 2;
				break;
			case 2: this._point = 3;
			default:
				ym(this, e, t);
				break;
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var xm = (function e(t) {
	function n(e) {
		return t ? new bm(e, t) : new pm(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
})(.5);
//#endregion
//#region node_modules/d3-shape/src/curve/catmullRomClosed.js
function Sm(e, t) {
	this._context = e, this._alpha = t;
}
Sm.prototype = {
	areaStart: nm,
	areaEnd: nm,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x3, this._y3), this._context.closePath();
				break;
			case 2:
				this._context.lineTo(this._x3, this._y3), this._context.closePath();
				break;
			case 3:
				this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
				break;
		}
	},
	point: function(e, t) {
		if (e = +e, t = +t, this._point) {
			var n = this._x2 - e, r = this._y2 - t;
			this._l23_a = Math.sqrt(this._l23_2a = (n * n + r * r) ** +this._alpha);
		}
		switch (this._point) {
			case 0:
				this._point = 1, this._x3 = e, this._y3 = t;
				break;
			case 1:
				this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
				break;
			case 2:
				this._point = 3, this._x5 = e, this._y5 = t;
				break;
			default:
				ym(this, e, t);
				break;
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Cm = (function e(t) {
	function n(e) {
		return t ? new Sm(e, t) : new hm(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
})(.5);
//#endregion
//#region node_modules/d3-shape/src/curve/catmullRomOpen.js
function wm(e, t) {
	this._context = e, this._alpha = t;
}
wm.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		if (e = +e, t = +t, this._point) {
			var n = this._x2 - e, r = this._y2 - t;
			this._l23_a = Math.sqrt(this._l23_2a = (n * n + r * r) ** +this._alpha);
		}
		switch (this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
				break;
			case 3: this._point = 4;
			default:
				ym(this, e, t);
				break;
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Tm = (function e(t) {
	function n(e) {
		return t ? new wm(e, t) : new _m(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
})(.5);
//#endregion
//#region node_modules/d3-shape/src/curve/linearClosed.js
function Em(e) {
	this._context = e;
}
Em.prototype = {
	areaStart: nm,
	areaEnd: nm,
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		this._point && this._context.closePath();
	},
	point: function(e, t) {
		e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
	}
};
function Dm(e) {
	return new Em(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/monotone.js
function Om(e) {
	return e < 0 ? -1 : 1;
}
function km(e, t, n) {
	var r = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (r || i < 0 && -0), o = (n - e._y1) / (i || r < 0 && -0), s = (a * i + o * r) / (r + i);
	return (Om(a) + Om(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(s)) || 0;
}
function Am(e, t) {
	var n = e._x1 - e._x0;
	return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function jm(e, t, n) {
	var r = e._x0, i = e._y0, a = e._x1, o = e._y1, s = (a - r) / 3;
	e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function Mm(e) {
	this._context = e;
}
Mm.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
			case 3:
				jm(this, this._t0, Am(this, this._t0));
				break;
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		var n = NaN;
		if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
			switch (this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, jm(this, Am(this, n = km(this, e, t)), n);
					break;
				default:
					jm(this, this._t0, n = km(this, e, t));
					break;
			}
			this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
		}
	}
};
function Nm(e) {
	this._context = new Pm(e);
}
(Nm.prototype = Object.create(Mm.prototype)).point = function(e, t) {
	Mm.prototype.point.call(this, t, e);
};
function Pm(e) {
	this._context = e;
}
Pm.prototype = {
	moveTo: function(e, t) {
		this._context.moveTo(t, e);
	},
	closePath: function() {
		this._context.closePath();
	},
	lineTo: function(e, t) {
		this._context.lineTo(t, e);
	},
	bezierCurveTo: function(e, t, n, r, i, a) {
		this._context.bezierCurveTo(t, e, r, n, a, i);
	}
};
function Fm(e) {
	return new Mm(e);
}
function Im(e) {
	return new Nm(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/natural.js
function Lm(e) {
	this._context = e;
}
Lm.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = [], this._y = [];
	},
	lineEnd: function() {
		var e = this._x, t = this._y, n = e.length;
		if (n) if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), n === 2) this._context.lineTo(e[1], t[1]);
		else for (var r = Rm(e), i = Rm(t), a = 0, o = 1; o < n; ++a, ++o) this._context.bezierCurveTo(r[0][a], i[0][a], r[1][a], i[1][a], e[o], t[o]);
		(this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
	},
	point: function(e, t) {
		this._x.push(+e), this._y.push(+t);
	}
};
function Rm(e) {
	var t, n = e.length - 1, r, i = Array(n), a = Array(n), o = Array(n);
	for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
	for (i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) r = i[t] / a[t - 1], a[t] -= r, o[t] -= r * o[t - 1];
	for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
	for (a[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
	return [i, a];
}
function zm(e) {
	return new Lm(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/step.js
function Bm(e, t) {
	this._context = e, this._t = t;
}
Bm.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = this._y = NaN, this._point = 0;
	},
	lineEnd: function() {
		0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default:
				if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e, t);
				else {
					var n = this._x * (1 - this._t) + e * this._t;
					this._context.lineTo(n, this._y), this._context.lineTo(n, t);
				}
				break;
		}
		this._x = e, this._y = t;
	}
};
function Vm(e) {
	return new Bm(e, .5);
}
function Hm(e) {
	return new Bm(e, 0);
}
function Um(e) {
	return new Bm(e, 1);
}
//#endregion
//#region node_modules/d3-interpolate-path/build/d3-interpolate-path.mjs
function Wm(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Gm(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Wm(Object(n), !0).forEach(function(t) {
			qm(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wm(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Km(e) {
	"@babel/helpers - typeof";
	return Km = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Km(e);
}
function qm(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Jm() {
	return Jm = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Jm.apply(this, arguments);
}
function Ym(e, t) {
	if (e) {
		if (typeof e == "string") return Xm(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xm(e, t);
	}
}
function Xm(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Zm(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = Ym(e)) || t && e && typeof e.length == "number") {
			n && (e = n);
			var r = 0, i = function() {};
			return {
				s: i,
				n: function() {
					return r >= e.length ? { done: !0 } : {
						done: !1,
						value: e[r++]
					};
				},
				e: function(e) {
					throw e;
				},
				f: i
			};
		}
		throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var a = !0, o = !1, s;
	return {
		s: function() {
			n = n.call(e);
		},
		n: function() {
			var e = n.next();
			return a = e.done, e;
		},
		e: function(e) {
			o = !0, s = e;
		},
		f: function() {
			try {
				!a && n.return != null && n.return();
			} finally {
				if (o) throw s;
			}
		}
	};
}
function Qm(e, t) {
	var n = [], r = [];
	function i(e, t) {
		if (e.length === 1) n.push(e[0]), r.push(e[0]);
		else {
			for (var a = Array(e.length - 1), o = 0; o < a.length; o++) o === 0 && n.push(e[0]), o === a.length - 1 && r.push(e[o + 1]), a[o] = [(1 - t) * e[o][0] + t * e[o + 1][0], (1 - t) * e[o][1] + t * e[o + 1][1]];
			i(a, t);
		}
	}
	return e.length && i(e, t), {
		left: n,
		right: r.reverse()
	};
}
function $m(e) {
	var t = {};
	return e.length === 4 && (t.x2 = e[2][0], t.y2 = e[2][1]), e.length >= 3 && (t.x1 = e[1][0], t.y1 = e[1][1]), t.x = e[e.length - 1][0], t.y = e[e.length - 1][1], e.length === 4 ? t.type = "C" : e.length === 3 ? t.type = "Q" : t.type = "L", t;
}
function eh(e, t) {
	t ||= 2;
	for (var n = [], r = e, i = 1 / t, a = 0; a < t - 1; a++) {
		var o = i / (1 - i * a), s = Qm(r, o);
		n.push(s.left), r = s.right;
	}
	return n.push(r), n;
}
function th(e, t, n) {
	var r = [[e.x, e.y]];
	return t.x1 != null && r.push([t.x1, t.y1]), t.x2 != null && r.push([t.x2, t.y2]), r.push([t.x, t.y]), eh(r, n).map($m);
}
var nh = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g, rh = {
	M: ["x", "y"],
	L: ["x", "y"],
	H: ["x"],
	V: ["y"],
	C: [
		"x1",
		"y1",
		"x2",
		"y2",
		"x",
		"y"
	],
	S: [
		"x2",
		"y2",
		"x",
		"y"
	],
	Q: [
		"x1",
		"y1",
		"x",
		"y"
	],
	T: ["x", "y"],
	A: [
		"rx",
		"ry",
		"xAxisRotation",
		"largeArcFlag",
		"sweepFlag",
		"x",
		"y"
	],
	Z: []
};
Object.keys(rh).forEach(function(e) {
	rh[e.toLowerCase()] = rh[e];
});
function ih(e, t) {
	for (var n = Array(e), r = 0; r < e; r++) n[r] = t;
	return n;
}
function ah(e) {
	return `${e.type}${rh[e.type].map(function(t) {
		return e[t];
	}).join(",")}`;
}
function oh(e, t) {
	var n = {
		x1: "x",
		y1: "y",
		x2: "x",
		y2: "y"
	}, r = [
		"xAxisRotation",
		"largeArcFlag",
		"sweepFlag"
	];
	if (e.type !== t.type && t.type.toUpperCase() !== "M") {
		var i = {};
		Object.keys(t).forEach(function(a) {
			var o = t[a], s = e[a];
			s === void 0 && (r.includes(a) ? s = o : (s === void 0 && n[a] && (s = e[n[a]]), s === void 0 && (s = 0))), i[a] = s;
		}), i.type = t.type, e = i;
	}
	return e;
}
function sh(e, t, n) {
	var r = [];
	if (t.type === "L" || t.type === "Q" || t.type === "C") r = r.concat(th(e, t, n));
	else {
		var i = Jm({}, e);
		i.type === "M" && (i.type = "L"), r = r.concat(ih(n - 1).map(function() {
			return i;
		})), r.push(t);
	}
	return r;
}
function ch(e, t, n) {
	var r = e.length - 1, i = t.length - 1, a = r / i, o = ih(i).reduce(function(t, r, i) {
		var o = Math.floor(a * i);
		if (n && o < e.length - 1 && n(e[o], e[o + 1])) {
			var s = a * i % 1 < .5;
			t[o] && (s ? o > 0 ? --o : o < e.length - 1 && (o += 1) : o < e.length - 1 ? o += 1 : o > 0 && --o);
		}
		return t[o] = (t[o] || 0) + 1, t;
	}, []).reduce(function(t, n, r) {
		if (r === e.length - 1) {
			var i = ih(n, Jm({}, e[e.length - 1]));
			return i[0].type === "M" && i.forEach(function(e) {
				e.type = "L";
			}), t.concat(i);
		}
		return t.concat(sh(e[r], e[r + 1], n));
	}, []);
	return o.unshift(e[0]), o;
}
function lh(e) {
	for (var t = (e || "").match(nh) || [], n = [], r, i, a = 0; a < t.length; ++a) if (r = rh[t[a]], r) {
		i = { type: t[a] };
		for (var o = 0; o < r.length; ++o) i[r[o]] = +t[a + o + 1];
		a += r.length, n.push(i);
	}
	return n;
}
function uh(e, t, n) {
	var r = e == null ? [] : e.slice(), i = t == null ? [] : t.slice(), a = Km(n) === "object" ? n : {
		excludeSegment: n,
		snapEndsToInput: !0
	}, o = a.excludeSegment, s = a.snapEndsToInput;
	if (!r.length && !i.length) return function() {
		return [];
	};
	var c = (r.length === 0 || r[r.length - 1].type === "Z") && (i.length === 0 || i[i.length - 1].type === "Z");
	r.length > 0 && r[r.length - 1].type === "Z" && r.pop(), i.length > 0 && i[i.length - 1].type === "Z" && i.pop(), r.length ? i.length || i.push(r[0]) : r.push(i[0]), Math.abs(i.length - r.length) !== 0 && (i.length > r.length ? r = ch(r, i, o) : i.length < r.length && (i = ch(i, r, o))), r = r.map(function(e, t) {
		return oh(e, i[t]);
	});
	var l = r.map(function(e) {
		return Gm({}, e);
	});
	return c && (l.push({ type: "Z" }), r.push({ type: "Z" })), function(e) {
		if (e === 1 && s) return t ?? [];
		if (e === 0) return r;
		for (var n = 0; n < l.length; ++n) {
			var a = r[n], o = i[n], c = l[n], u = Zm(rh[c.type]), d;
			try {
				for (u.s(); !(d = u.n()).done;) {
					var f = d.value;
					c[f] = (1 - e) * a[f] + e * o[f], (f === "largeArcFlag" || f === "sweepFlag") && (c[f] = Math.round(c[f]));
				}
			} catch (e) {
				u.e(e);
			} finally {
				u.f();
			}
		}
		return l;
	};
}
function dh(e, t, n) {
	var r = lh(e), i = lh(t), a = Km(n) === "object" ? n : {
		excludeSegment: n,
		snapEndsToInput: !0
	}, o = a.excludeSegment, s = a.snapEndsToInput;
	if (!r.length && !i.length) return function() {
		return "";
	};
	var c = uh(r, i, {
		excludeSegment: o,
		snapEndsToInput: s
	});
	return function(e) {
		if (e === 1 && s) return t ?? "";
		var n = c(e), r = "", i = Zm(n), a;
		try {
			for (i.s(); !(a = i.n()).done;) {
				var o = a.value;
				r += ah(o);
			}
		} catch (e) {
			i.e(e);
		} finally {
			i.f();
		}
		return r;
	};
}
//#endregion
//#region node_modules/@unovis/ts/utils/color.js
function Q(e, t, n, r) {
	return Array.isArray(t) && isFinite(n) ? t[n % t.length] : wn(e, t, n) || (un(n) && !r ? `var(${es(n)})` : null);
}
//#endregion
//#region node_modules/@unovis/ts/types/curve.js
var $;
(function(e) {
	e.Basis = "basis", e.BasisClosed = "basisClosed", e.BasisOpen = "basisOpen", e.Bundle = "bundle", e.Cardinal = "cardinal", e.CardinalClosed = "cardinalClosed", e.CardinalOpen = "cardinalOpen", e.CatmullRom = "catmullRom", e.CatmullRomClosed = "catmullRomClosed", e.CatmullRomOpen = "catmullRomOpen", e.Linear = "linear", e.LinearClosed = "linearClosed", e.MonotoneX = "monotoneX", e.MonotoneY = "monotoneY", e.Natural = "natural", e.Step = "step", e.StepAfter = "stepAfter", e.StepBefore = "stepBefore";
})($ ||= {});
var fh = {
	[$.Basis]: am,
	[$.BasisClosed]: sm,
	[$.BasisOpen]: lm,
	[$.Bundle]: dm,
	[$.Cardinal]: mm,
	[$.CardinalClosed]: gm,
	[$.CardinalOpen]: vm,
	[$.CatmullRom]: xm,
	[$.CatmullRomClosed]: Cm,
	[$.CatmullRomOpen]: Tm,
	[$.Linear]: Jp,
	[$.LinearClosed]: Dm,
	[$.MonotoneX]: Fm,
	[$.MonotoneY]: Im,
	[$.Natural]: zm,
	[$.Step]: Vm,
	[$.StepAfter]: Um,
	[$.StepBefore]: Hm
}, ph = Object.assign(Object.assign({}, rp), {
	curveType: $.MonotoneX,
	lineWidth: 2,
	lineDashArray: void 0,
	fallbackValue: void 0,
	highlightOnHover: !1,
	cursor: null,
	interpolateMissingData: !1
}), mh = /* @__PURE__ */ k({
	dim: () => bh,
	globalStyles: () => hh,
	interpolatedPath: () => xh,
	line: () => _h,
	linePath: () => vh,
	lineSelectionHelper: () => yh,
	root: () => gh
}), hh = jt`
  :root {
    --vis-line-cursor: default;
    --vis-line-stroke-dasharray: none;
    --vis-line-stroke-dashoffset: 0;

    --vis-line-gapfill-stroke-dasharray: 2 3;
    --vis-line-gapfill-stroke-opacity: 0.8;
    --vis-line-gapfill-stroke-dashoffset: 0;
  }
`, gh = z`
  label: line-component;
`, _h = z`
  label: line;
  transition: opacity 200ms;
  cursor: var(--vis-line-cursor);
`, vh = z`
  label: linePath;
  fill: none;
  stroke-dasharray: var(--vis-line-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-stroke-dashoffset);
`, yh = z`
  label: lineSelectionHelper;
  fill: none;
  stroke: rgba(0, 0, 0, 0);
  stroke-width: 8px;
`, bh = z`
  opacity: 0.2;
`, xh = z`
  label: interpolated-path;
  fill: none;
  stroke-dasharray: var(--vis-line-gapfill-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-gapfill-stroke-dashoffset);
  stroke-opacity: var(--vis-line-gapfill-stroke-opacity);
`, Sh = class e extends ip {
	constructor(t) {
		super(), this._defaultConfig = ph, this.config = this._defaultConfig, this.curve = fh[$.MonotoneX], this.events = { [e.selectors.line]: {
			mouseover: this._highlight.bind(this),
			mouseleave: this._resetHighlight.bind(this)
		} }, t && this.setConfig(t);
	}
	get bleed() {
		let { config: { lineWidth: e } } = this, t = this.yScale.domain(), n = (this.yScale.range()[0] > this.yScale.range()[1] ? Zf.North : Zf.South) === Zf.South, r = e > 3, i = e >= 10;
		return {
			top: !i && (!n && t[1] === 0 || n && t[0] === 0) ? 0 : e / 2,
			bottom: !i && (!n && t[0] === 0 || n && t[1] === 0) ? 0 : e / 2,
			left: r ? e / 2 : 0,
			right: r ? e / 2 : 0
		};
	}
	_render(e) {
		super._render(e);
		let { config: t, datamodel: { data: n } } = this, r = un(e) ? e : t.duration;
		this.curve = fh[t.curveType], this.lineGen = Zp().x((e) => e.x).y((e) => e.y).defined((e) => e.defined).curve(this.curve);
		let i = pn(t.y) ? t.y : [t.y], a = n.map((e, n) => this.xScale(B(e, t.x, n))), o = i.map((e) => {
			let r = n.map((n, r) => {
				let i = B(n, e, r), o = (un(i) || i === null) && isFinite(i) ? i : t.fallbackValue, s = t.interpolateMissingData ? (un(i) || i === null) && isFinite(i) : isFinite(o);
				return {
					x: a[r],
					y: this.yScale(o ?? 0),
					defined: s,
					value: o
				};
			}), i = r.reduce((e, t) => t.defined || e, !1), o = !1;
			return {
				values: r,
				defined: i,
				gaps: r.reduce((e, n, i) => {
					!n.defined && isFinite(t.fallbackValue) && e.push(Object.assign(Object.assign({}, n), { defined: !0 })), !n.defined && !o && (o = !0);
					let a = i > 0 && !r[i - 1].defined || i < r.length - 1 && !r[i + 1].defined;
					return n.defined && a && (o || e.push(Object.assign(Object.assign({}, n), { defined: !1 })), e.push(n), o = !1), e;
				}, []),
				visible: i && r.some((e) => e.value !== null)
			};
		}), s = this.g.selectAll(`.${_h}`).data(o), c = s.enter().append("g").attr("class", _h);
		c.append("path").attr("class", vh).attr("stroke", (e, r) => Q(n, t.color, r)).attr("stroke-opacity", 0).attr("stroke-width", t.lineWidth), c.append("path").attr("class", yh).attr("d", this._emptyPath()), c.append("path").attr("class", xh).attr("d", this._emptyPath()).style("opacity", 0);
		let l = c.merge(s);
		l.style("cursor", (e, r) => wn(n, t.cursor, r)), l.each((e, i, a) => {
			let o = oa(a[i]), s = o.select(`.${vh}`), c = o.select(`.${yh}`), l = o.select(`.${xh}`), u = e.visible, d = Cn(n, t.lineDashArray, i), f = H(s, r).attr("stroke", Q(n, t.color, i)).attr("stroke-width", t.lineWidth).attr("stroke-opacity", +!!u).style("stroke-dasharray", d?.join(" ") ?? null), p = e.values.some((e) => !e.defined), m = this.lineGen(e.values);
			if (r && !p) {
				let e = s.attr("d") || this._emptyPath(), t = m || this._emptyPath();
				f.attrTween("d", () => dh(e, t));
			} else e.visible && f.attr("d", m);
			c.attr("d", m).attr("visibility", u ? null : "hidden"), p && t.interpolateMissingData ? H(l, r).attr("d", this.lineGen(e.gaps)).attr("stroke", Q(n, t.color, i)).attr("stroke-width", t.lineWidth - 1).style("opacity", 1) : l.transition().duration(r).style("opacity", 0);
		}), H(s.exit(), r).style("opacity", 0).remove();
	}
	_emptyPath() {
		let e = this.xScale.range(), t = this.yScale.range();
		return `M${e[0]},${t[0]} L${e[1]},${t[0]}`;
	}
	_highlight(e) {
		let { config: t } = this;
		t.highlightOnHover && this.g.selectAll(`.${_h}`).classed(bh, (t) => t !== e);
	}
	_resetHighlight() {
		let { config: e } = this;
		e.highlightOnHover && this.g.selectAll(`.${_h}`).classed(bh, !1);
	}
};
Sh.selectors = mh;
//#endregion
//#region node_modules/@unovis/ts/utils/path.js
function Ch({ x: e, y: t, w: n, h: r, tl: i = !1, tr: a = !1, bl: o = !1, br: s = !1, r: c = 0 }) {
	let l;
	l = `M${e + c},${t}h${n - 2 * c}`;
	let u = a ? c : 0, d = a ? 0 : c;
	return l += `a${u},${u} 0 0 1 ${u},${u}`, l += `h${d}v${d}`, l += `v${r - 2 * c}`, u = s ? c : 0, d = s ? 0 : c, l += `a${u},${u} 0 0 1 ${-u},${u}`, l += `v${d}h${-d}`, l += `h${2 * c - n}`, u = o ? c : 0, d = o ? 0 : c, l += `a${u},${u} 0 0 1 ${-u},${-u}`, l += `h${-d}v${-d}`, l += `v${2 * c - r}`, u = i ? c : 0, d = i ? 0 : c, l += `a${u},${u} 0 0 1 ${u},${-u}`, l += `v${-d}h${d}`, l += "z", l;
}
//#endregion
//#region node_modules/@unovis/ts/components/grouped-bar/config.js
var wh = Object.assign(Object.assign({}, rp), {
	color: void 0,
	groupMaxWidth: void 0,
	groupWidth: void 0,
	dataStep: void 0,
	groupPadding: .05,
	barPadding: 0,
	roundedCorners: 2,
	barMinHeight: 2,
	cursor: null,
	orientation: sp.Vertical
}), Th = /* @__PURE__ */ k({
	bar: () => Oh,
	barGroup: () => kh,
	barGroupExit: () => Ah,
	globalStyles: () => Dh,
	root: () => Eh
}), Eh = z`
  label: grouped-bar-component;
`, Dh = jt`
  :root {
    --vis-grouped-bar-cursor: default;
    --vis-grouped-bar-fill-color: var(--vis-color-main);
    --vis-grouped-bar-stroke-color: none;
    --vis-grouped-bar-stroke-width: 0px;
    --vis-grouped-bar-hover-stroke-width: 1px;
    --vis-grouped-bar-hover-stroke-color: none;


    /* Dark Theme */
    --vis-dark-grouped-bar-stroke-color: none;
  }

  body.theme-dark ${`.${Eh}`} {
    --vis-grouped-bar-stroke-color: var(--vis-dark-grouped-bar-stroke-color);
  }
`, Oh = z`
  label: bar;
  fill: var(--vis-grouped-bar-fill-color);
  stroke: var(--vis-grouped-bar-stroke-color);
  stroke-width: var(--vis-grouped-bar-stroke-width);
  cursor: var(--vis-grouped-bar-cursor);

  &:hover {
    stroke-width: var(--vis-grouped-bar-hover-stroke-width);
    stroke: var(--vis-grouped-bar-hover-stroke-color);
  }
`, kh = z`
  label: barGroup;
`, Ah = z`
  label: barGroupExit;
`, jh = class extends ip {
	constructor(e) {
		super(), this._defaultConfig = wh, this.config = this._defaultConfig, this.getAccessors = () => pn(this.config.y) ? this.config.y : [this.config.y], this.events = {}, this._barData = [], e && this.setConfig(e);
	}
	get bleed() {
		if (this._barData = this._getVisibleData(), this._barData.length === 0) return {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		};
		let e = !this.isVertical() && this.dataScale.range()[0] > this.dataScale.range()[1], t = this.dataScale.domain(), n = this._getGroupWidth() / 2, r = this._barData.map((e, t) => B(e, this.config.x, t)), i = en(r), a = $t(r), o = this.dataScale(i), s = this.dataScale(a), c = this.dataScale.invert(o + (e ? n : -n)), l = this.dataScale.invert(s + (e ? -n : n)), u = c <= t[0] ? this.dataScale(t[0]) - this.dataScale(c) : 0, d = l > t[1] ? this.dataScale(l) - this.dataScale(t[1]) : 0;
		return {
			top: this.isVertical() ? 0 : e ? -d : u,
			bottom: this.isVertical() ? 0 : e ? -u : d,
			left: this.isVertical() ? u : 0,
			right: this.isVertical() ? d : 0
		};
	}
	get dataScale() {
		return this.isVertical() ? this.xScale : this.yScale;
	}
	get valueScale() {
		return this.isVertical() ? this.yScale : this.xScale;
	}
	isVertical() {
		return this.config.orientation === sp.Vertical;
	}
	_render(e) {
		let { config: t } = this, n = un(e) ? e : t.duration, r = this._getGroupWidth(), i = this.getAccessors(), a = [-r / 2, r / 2], o = gl().domain(on(i.length)).range(a).paddingInner(t.barPadding).paddingOuter(t.barPadding), s = this.g.selectAll(`.${kh}`).data(this._barData, (e, n) => `${wn(e, t.id, n) ?? n}`), c = (e, n) => {
			let r = this.dataScale(B(e, t.x, n));
			return `translate(${this.isVertical() ? r : 0},${this.isVertical() ? 0 : r})`;
		}, l = s.enter().append("g").attr("class", kh).attr("transform", c).style("opacity", 1).merge(s);
		H(l, n).attr("transform", c).style("opacity", 1);
		let u = s.exit().attr("class", Ah);
		H(u, n).style("opacity", 0).remove(), H(u.selectAll(`.${Oh}`), n).attr("transform", (e, t, n) => this.isVertical() ? `translate(0,${this.yScale(0)}) scale(1,0)` : `translate(${this.xScale(0)},0) scale(0,1)`);
		let d = o.bandwidth(), f = l.selectAll(`.${Oh}`).data((e) => i.map(() => e)), p = this._getValueAxisDirection();
		H(f.enter().append("path").attr("class", Oh).attr("d", (e, t) => {
			let n = o(t), r = this.valueScale(0), i = d;
			return this._getBarPath(n, r, i, 0, !1, p);
		}).style("fill", (e, n) => Q(e, t.color, n)).merge(f), n).attr("d", (e, n) => {
			let r = o(n), a = d, s = B(e, i[n]), c = s < 0, l = c ? this.valueScale(0) : this.valueScale(s || 0), u = Math.abs(this.valueScale(0) - this.valueScale(s)) || 0;
			if (u < t.barMinHeight) {
				let e = p === Zf.North ? -1 : 1;
				l = this.valueScale(0) + e * t.barMinHeight, u = t.barMinHeight;
			}
			return this._getBarPath(r, l, a, u, c, p);
		}).style("fill", (e, n) => Q(e, t.color, n)).style("cursor", (e, n) => wn(e, t.cursor, n)), H(f.exit(), n).remove();
	}
	_getValueAxisDirection() {
		return this.valueScale.range()[0] > this.valueScale.range()[1] ? Zf.North : Zf.South;
	}
	_getVisibleData() {
		let { config: e, datamodel: { data: t } } = this, n = this._getGroupWidth(), r = t.length < 2 ? 0 : n / 2, i = this.dataScale, a = Math.abs(i.invert(r) - i.invert(0));
		return t?.filter((t, n) => {
			let r = B(t, e.x, n), o = i.domain(), s = +o[0], c = +o[1];
			return r >= s - a && r <= c + a;
		});
	}
	_getBarPath(e, t, n, r, i, a) {
		let { config: o } = this, s = En(o.roundedCorners ? un(o.roundedCorners) ? +o.roundedCorners : n / 2 : 0, 0, Math.min(r, n) / 2), c = a === Zf.North, l = this.isVertical() && i !== c, u = this.isVertical() && i === c, d = !this.isVertical() && i, f = !this.isVertical() && !i;
		return Ch({
			x: this.isVertical() ? e : t + (c ? 0 : -r),
			y: this.isVertical() ? t + (c ? 0 : -r) : e,
			w: this.isVertical() ? n : r,
			h: this.isVertical() ? r : n,
			tl: l || d,
			tr: l || f,
			bl: u || d,
			br: u || f,
			r: s
		});
	}
	_getGroupWidth() {
		let { config: e, datamodel: { data: t } } = this;
		if (_n(t)) return 0;
		if (e.groupWidth) return en([e.groupWidth, e.groupMaxWidth]);
		let n = this.dataScale.bandwidth, r = this.dataScale.domain ? this.dataScale.domain() : [], i = 1 + (n ? r.length : r[1] - r[0]) / e.dataStep || !n && t.filter((t, n) => {
			let i = B(t, e.x, n);
			return i >= r[0] && i <= r[1];
		}).length || t.length;
		return !n && i >= 2 && (i += 1), en([(i < 2 ? 1 : 1 - e.groupPadding) * (this.isVertical() ? this._width : this._height) / i, e.groupMaxWidth]);
	}
	getValueScaleExtent(e) {
		let { datamodel: t } = this, n = this.getAccessors(), r = e ? this._getVisibleData() : t.data, i = An(r, ...n), a = jn(r, ...n);
		return [i > 0 ? 0 : i, a < 0 ? 0 : a];
	}
	getDataScaleExtent() {
		let { config: e, datamodel: t } = this;
		return Mn(t.data, e.x);
	}
	getYDataExtent(e) {
		return this.isVertical() ? this.getValueScaleExtent(e) : this.getDataScaleExtent();
	}
	getXDataExtent() {
		return this.isVertical() ? this.getDataScaleExtent() : this.getValueScaleExtent(!1);
	}
};
jh.selectors = Th;
//#endregion
//#region node_modules/d3-axis/src/identity.js
function Mh(e) {
	return e;
}
//#endregion
//#region node_modules/d3-axis/src/axis.js
var Nh = 1, Ph = 2, Fh = 3, Ih = 4, Lh = 1e-6;
function Rh(e) {
	return "translate(" + e + ",0)";
}
function zh(e) {
	return "translate(0," + e + ")";
}
function Bh(e) {
	return (t) => +e(t);
}
function Vh(e, t) {
	return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function Hh() {
	return !this.__axis;
}
function Uh(e, t) {
	var n = [], r = null, i = null, a = 6, o = 6, s = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5, l = e === Nh || e === Ih ? -1 : 1, u = e === Ih || e === Ph ? "x" : "y", d = e === Nh || e === Fh ? Rh : zh;
	function f(f) {
		var p = r ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), m = i ?? (t.tickFormat ? t.tickFormat.apply(t, n) : Mh), h = Math.max(a, 0) + s, g = t.range(), _ = +g[0] + c, v = +g[g.length - 1] + c, y = (t.bandwidth ? Vh : Bh)(t.copy(), c), b = f.selection ? f.selection() : f, x = b.selectAll(".domain").data([null]), S = b.selectAll(".tick").data(p, t).order(), C = S.exit(), w = S.enter().append("g").attr("class", "tick"), T = S.select("line"), E = S.select("text");
		x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), S = S.merge(w), T = T.merge(w.append("line").attr("stroke", "currentColor").attr(u + "2", l * a)), E = E.merge(w.append("text").attr("fill", "currentColor").attr(u, l * h).attr("dy", e === Nh ? "0em" : e === Fh ? "0.71em" : "0.32em")), f !== b && (x = x.transition(f), S = S.transition(f), T = T.transition(f), E = E.transition(f), C = C.transition(f).attr("opacity", Lh).attr("transform", function(e) {
			return isFinite(e = y(e)) ? d(e + c) : this.getAttribute("transform");
		}), w.attr("opacity", Lh).attr("transform", function(e) {
			var t = this.parentNode.__axis;
			return d((t && isFinite(t = t(e)) ? t : y(e)) + c);
		})), C.remove(), x.attr("d", e === Ih || e === Ph ? o ? "M" + l * o + "," + _ + "H" + c + "V" + v + "H" + l * o : "M" + c + "," + _ + "V" + v : o ? "M" + _ + "," + l * o + "V" + c + "H" + v + "V" + l * o : "M" + _ + "," + c + "H" + v), S.attr("opacity", 1).attr("transform", function(e) {
			return d(y(e) + c);
		}), T.attr(u + "2", l * a), E.attr(u, l * h).text(m), b.filter(Hh).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === Ph ? "start" : e === Ih ? "end" : "middle"), b.each(function() {
			this.__axis = y;
		});
	}
	return f.scale = function(e) {
		return arguments.length ? (t = e, f) : t;
	}, f.ticks = function() {
		return n = Array.from(arguments), f;
	}, f.tickArguments = function(e) {
		return arguments.length ? (n = e == null ? [] : Array.from(e), f) : n.slice();
	}, f.tickValues = function(e) {
		return arguments.length ? (r = e == null ? null : Array.from(e), f) : r && r.slice();
	}, f.tickFormat = function(e) {
		return arguments.length ? (i = e, f) : i;
	}, f.tickSize = function(e) {
		return arguments.length ? (a = o = +e, f) : a;
	}, f.tickSizeInner = function(e) {
		return arguments.length ? (a = +e, f) : a;
	}, f.tickSizeOuter = function(e) {
		return arguments.length ? (o = +e, f) : o;
	}, f.tickPadding = function(e) {
		return arguments.length ? (s = +e, f) : s;
	}, f.offset = function(e) {
		return arguments.length ? (c = +e, f) : c;
	}, f;
}
function Wh(e) {
	return Uh(Nh, e);
}
function Gh(e) {
	return Uh(Ph, e);
}
function Kh(e) {
	return Uh(Fh, e);
}
function qh(e) {
	return Uh(Ih, e);
}
//#endregion
//#region node_modules/@unovis/ts/types/text.js
var Jh;
(function(e) {
	e.Start = "start", e.Middle = "middle", e.End = "end";
})(Jh ||= {});
var Yh;
(function(e) {
	e.Top = "top", e.Middle = "middle", e.Bottom = "bottom";
})(Yh ||= {});
var Xh;
(function(e) {
	e.Wrap = "wrap", e.Trim = "trim";
})(Xh ||= {});
var Zh;
(function(e) {
	e.Left = "left", e.Center = "center", e.Right = "right";
})(Zh ||= {});
//#endregion
//#region node_modules/striptags/src/striptags.js
var Qh = /* @__PURE__ */ g(((e, t) => {
	(function(e) {
		if (typeof n != "function") {
			var n = function(e) {
				return e;
			};
			n.nonNative = !0;
		}
		let r = n("plaintext"), i = n("html"), a = n("comment"), o = /<(\w*)>/g, s = /<\/?([^\s\/>]+)/;
		function c(e, t, n) {
			e ||= "", t ||= [], n ||= "";
			let r = u(t, n);
			return d(e, r);
		}
		function l(e, t) {
			e ||= [], t ||= "";
			let n = u(e, t);
			return function(e) {
				return d(e || "", n);
			};
		}
		c.init_streaming_mode = l;
		function u(e, t) {
			return e = f(e), {
				allowable_tags: e,
				tag_replacement: t,
				state: r,
				tag_buffer: "",
				depth: 0,
				in_quote_char: ""
			};
		}
		function d(e, t) {
			if (typeof e != "string") throw TypeError("'html' parameter must be a string");
			let n = t.allowable_tags, o = t.tag_replacement, s = t.state, c = t.tag_buffer, l = t.depth, u = t.in_quote_char, d = "";
			for (let t = 0, f = e.length; t < f; t++) {
				let f = e[t];
				if (s === r) switch (f) {
					case "<":
						s = i, c += f;
						break;
					default:
						d += f;
						break;
				}
				else if (s === i) switch (f) {
					case "<":
						if (u) break;
						l++;
						break;
					case ">":
						if (u) break;
						if (l) {
							l--;
							break;
						}
						u = "", s = r, c += ">", n.has(p(c)) ? d += c : d += o, c = "";
						break;
					case "\"":
					case "'":
						f === u ? u = "" : u ||= f, c += f;
						break;
					case "-":
						c === "<!-" && (s = a), c += f;
						break;
					case " ":
					case "\n":
						if (c === "<") {
							s = r, d += "< ", c = "";
							break;
						}
						c += f;
						break;
					default:
						c += f;
						break;
				}
				else if (s === a) switch (f) {
					case ">":
						c.slice(-2) == "--" && (s = r), c = "";
						break;
					default:
						c += f;
						break;
				}
			}
			return t.state = s, t.tag_buffer = c, t.depth = l, t.in_quote_char = u, d;
		}
		function f(e) {
			let t = /* @__PURE__ */ new Set();
			if (typeof e == "string") {
				let n;
				for (; n = o.exec(e);) t.add(n[1]);
			} else !n.nonNative && typeof e[n.iterator] == "function" ? t = new Set(e) : typeof e.forEach == "function" && e.forEach(t.add, t);
			return t;
		}
		function p(e) {
			let t = s.exec(e);
			return t ? t[1].toLowerCase() : null;
		}
		typeof define == "function" && define.amd ? define(function() {
			return c;
		}) : typeof t == "object" && t.exports ? t.exports = c : e.striptags = c;
	})(e);
}));
//#endregion
//#region node_modules/@unovis/ts/types/svg.js
function $h(e) {
	switch (e) {
		case Zh.Center: return "middle";
		case Zh.Right: return "end";
		case Zh.Left:
		default: return "start";
	}
}
//#endregion
//#region node_modules/@unovis/ts/utils/text.js
var eg = /* @__PURE__ */ d(Qh(), 1), tg = (e) => {
	switch (e) {
		case Zh.Left: return "start";
		case Zh.Right: return "end";
		case Zh.Center: return "middle";
		default: return null;
	}
};
function ng(e) {
	return e.replace(/-([a-z])/g, (e, t) => t.toUpperCase());
}
function rg(e) {
	return e.match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)?.filter(Boolean).map((e) => e.toLowerCase()).join("-");
}
function ig(e) {
	return e.replace(/['"]/g, "&#39;").replace(/\u0000/g, "\\0").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
}
function ag(e, t = 15) {
	return e ? e.length > t ? `…${e.substr(e.length - t, t)}` : e : "";
}
function og(e, t = 15) {
	if (!e) return "";
	let n = Math.floor((t - 3) / 2);
	return e.length > t ? `${e.substr(0, n)}…${e.substr(-n, n)}` : e;
}
function sg(e, t = 15) {
	return e ? e.length > t ? `${e.substr(0, t)}…` : e : "";
}
function cg(e, t = 15, n = Jh.Middle) {
	if (!e) return "";
	let r = sg(e, t);
	return n === Jh.Start ? r = ag(e, t) : n === Jh.Middle && (r = og(e, t)), r;
}
function lg(e, t = [" "]) {
	let n = [e];
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		n.forEach((e, t) => {
			let i = e.split(r), a = i.map((e, t) => `${e}${t === i.length - 1 ? "" : r}`);
			n[t] = a;
		}), n = yn(n);
	}
	return n;
}
function ug(e, t, n = [
	" ",
	"-",
	".",
	","
]) {
	let r = e.text();
	if (!r) return;
	let i = lg(r, pn(n) ? n : [n]), a = parseFloat(e.attr("x")) || 0;
	e.text("");
	let o = e.append("tspan").attr("x", a), s = `${i[0]}`;
	o.text(s), i.forEach((n, r) => {
		if (r === 0) return;
		let i = `${s}${n}`;
		o.text(i), o.node().getComputedTextLength() > t ? (o.text(s.trim()), o = e.append("tspan").attr("x", a).attr("dy", "1.2em").text(n), s = n) : s += n;
	});
}
function dg(e, t, n, r, i, a) {
	t === void 0 && (t = 50), n === void 0 && (n = Jh.Middle), r === void 0 && (r = !0), i === void 0 && (i = +window.getComputedStyle(e.node())?.fontSize || 0), a === void 0 && (a = ps());
	let o = e.text() || "", s = o.length, c = r ? i * s * a : e.node().getComputedTextLength(), l = Math.ceil(s * t / (1.1 * c));
	return l < s ? (e.text(cg(o, l, n)), !0) : !1;
}
function fg(e, t, n = ps()) {
	return e.length * t * n || 0;
}
function pg(e, t, n) {
	let r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "svg"), a = document.createElementNS(r, "text");
	a.textContent = e, a.setAttribute("font-size", `${n}`), a.setAttribute("font-family", t), i.appendChild(a), document.body.appendChild(i);
	let o = a.getComputedTextLength();
	return document.body.removeChild(i), o;
}
function mg(e, t = void 0, n = !0, r = us, i = !1) {
	let a = `${e.text}`;
	if (!a) return [];
	let o = e.fontSize ?? fs.fontSize, s = e.fontFamily ?? fs.fontFamily, c = e.fontWidthToHeightRatio ?? fs.fontWidthToHeightRatio, l = Array.isArray(r) ? r : [r];
	return a.split("\n").map((e) => {
		let r = [];
		if (!t) return [e];
		let a = lg(e, l), u = "";
		for (let e = 0; e < a.length; e += 1) if ((n ? fg(u + a[e], o, c) : pg(u + a[e], s, o)) < t || e === 0 ? u += a[e] : (r.push(u.trim()), u = a[e]), i) for (; u.trim().length > 2 && (n ? fg(u, o, c) : pg(u, s, o)) > t;) {
			let e = u.trim().length - 2;
			for (; e > 0;) {
				let i = `${u.substring(0, e)}${ds}`;
				if ((n ? fg(i, o, c) : pg(i, s, o)) <= t || e === 1) {
					r.push(i.trim()), u = u.substring(e);
					break;
				}
				e--;
			}
		}
		return u && r.push(u.trim()), r;
	}).flat();
}
function hg(e, t = void 0, n = void 0, r = !0, i = us, a = !1) {
	let o = Array.isArray(e) ? e.map((e) => xn(fs, e)) : [xn(fs, e)], s = o.map((e) => mg(e, t, r, i, a)), c = o[0], l = -c.fontSize * (c.lineHeight - 1), u = [];
	return o.forEach((e, i) => {
		let a = s[i], o = i > 0 ? u[i - 1] : void 0, c = o ? o.marginBottom : 0, d = e.marginTop;
		l += Math.max(c, d);
		let f = e.fontSize * e.lineHeight, p = 0;
		for (let i = 0; i < a.length; i += 1) {
			let o = a[i];
			l += f;
			let s = `${o} …`, c = r ? fg(s, e.fontSize, e.fontWidthToHeightRatio) : pg(s, e.fontFamily, e.fontSize);
			if (p = Math.max(c, p), n && l + f > n && i !== a.length - 1) {
				o.charAt(o.length - 1) === ds && (o = o.substr(0, a[i].length - 1)), c < t ? a[i] = s : a[i] = `${a[i].substr(0, a[i].length - 2)}…`, a = a.slice(0, i + 1);
				break;
			}
		}
		u.push(Object.assign(Object.assign({}, e), {
			_lines: a,
			_estimatedHeight: l - (o?._estimatedHeight || 0),
			_maxWidth: Math.max(p, o?._maxWidth ?? 0)
		}));
	}), u;
}
function gg(e, t = 0, n, r) {
	return e.map((i, a) => {
		let o = a > 0 ? e[a - 1] : void 0, s = o ? o.marginBottom / o.fontSize : 0, c = i.marginTop / i.fontSize, l = Math.max(s, c), u = {
			fontSize: i.fontSize,
			fontFamily: i.fontFamily,
			fontWeight: i.fontWeight,
			fill: i.color,
			y: a === 0 && n
		};
		return `<tspan xmlns="http://www.w3.org/2000/svg" ${Object.entries(u).filter(([e, t]) => t).map(([e, t]) => `${rg(e)}="${ig(t.toString())}"`).join(" ")}>${i._lines.map((e, n) => {
			let o;
			return o = a === 0 && n === 0 ? l : n === 0 ? l + i.lineHeight : i.lineHeight, `<tspan x="${t}" dy="${o}em" dominant-baseline="${r ?? "auto"}">${e.length ? e : "\xA0"}</tspan>`;
		}).join("")}</tspan>`;
	});
}
function _g(e) {
	return sn(e, (e) => e._estimatedHeight);
}
var vg = [
	"text",
	"tspan",
	"textPath",
	"altGlyph",
	"altGlyphDef",
	"altGlyphItem",
	"glyphRef",
	"textRef",
	"textArea"
];
function yg(e, t, n, r) {
	let i = hg(t, n.width, void 0, n.fastMode, n.separator, n.wordBreak), a = n.x ?? +e.getAttribute("x"), o = n.y ?? +e.getAttribute("y"), s = a ?? 0, c = o ?? 0;
	if (n.textAlign && e.setAttribute("text-anchor", $h(n.textAlign)), n.verticalAlign && n.verticalAlign !== Yh.Top) {
		let e = _g(i), t = n.verticalAlign === Yh.Middle ? -e / 2 : n.verticalAlign === Yh.Bottom ? -e : 0;
		c += t;
	}
	n.textRotationAngle ? e.setAttribute("transform", `rotate(${n.textRotationAngle === 0 || n.textRotationAngle ? n.textRotationAngle : 0} ${s} ${c})`) : e.removeAttribute("transform");
	let l = new DOMParser();
	e.textContent = "", i.forEach((t) => {
		let n = (0, eg.default)(gg([t], s, c, r).join(""), vg), i = l.parseFromString(n, "image/svg+xml").firstChild;
		e.appendChild(i);
	});
}
//#endregion
//#region node_modules/@unovis/ts/components/axis/config.js
var bg = Object.assign(Object.assign({}, rp), {
	position: void 0,
	type: void 0,
	label: void 0,
	labelFontSize: null,
	labelTextFitMode: Xh.Wrap,
	labelTextTrimType: Jh.Middle,
	gridLine: !0,
	tickLine: !0,
	domainLine: !0,
	numTicks: void 0,
	minMaxTicksOnly: !1,
	minMaxTicksOnlyWhenWidthIsLess: 250,
	minMaxTicksOnlyShowGridLines: !1,
	tickTextWidth: void 0,
	tickTextSeparator: void 0,
	tickTextForceWordBreak: !1,
	tickTextTrimType: Jh.Middle,
	tickTextFitMode: Xh.Wrap,
	tickTextFontSize: null,
	tickTextAlign: void 0,
	tickTextColor: null,
	tickTextAngle: void 0,
	labelMargin: 8,
	labelColor: null,
	tickFormat: void 0,
	tickValues: void 0,
	fullSize: !0,
	tickPadding: 8,
	tickTextHideOverlapping: void 0
});
//#endregion
//#region node_modules/@unovis/ts/utils/style.js
function xg(e, t) {
	let n = Object.entries(e);
	return Object.fromEntries(n.map(([e]) => [ng(e.replace(t ?? "--vis-", "")), e]));
}
function Sg(e, t) {
	jt({
		":root": e,
		[`body.theme-dark .${t}`]: Object.keys(e).filter((e) => e.includes("--vis-dark")).map((e) => ({ [e.replace("--vis-dark", "--vis")]: `var(${e})` }))
	});
}
//#endregion
//#region node_modules/@unovis/ts/components/axis/style.js
var Cg = /* @__PURE__ */ k({
	axis: () => kg,
	cssVarDefaults: () => Tg,
	grid: () => Ag,
	hideDomain: () => Og,
	hideTickLine: () => Dg,
	label: () => Ng,
	root: () => wg,
	tick: () => jg,
	tickLabel: () => Pg,
	tickLabelHideable: () => Fg,
	tickTextExiting: () => Mg,
	variables: () => Eg
}), wg = z`
  label: axis-component;
`, Tg = {
	"--vis-axis-tick-color": "#e8e9ef",
	"--vis-axis-grid-color": "#e8e9ef",
	"--vis-axis-grid-line-width": "1px",
	"--vis-axis-grid-line-dasharray": "none",
	"--vis-axis-label-font-size": "14px",
	"--vis-axis-label-color": "#6c778c",
	"--vis-axis-label-weight": "500",
	"--vis-axis-tick-label-color": "#6c778c",
	"--vis-axis-tick-label-font-size": "12px",
	"--vis-axis-tick-label-weight": "500",
	"--vis-axis-tick-label-cursor": "default",
	"--vis-axis-tick-label-text-decoration": "none",
	"--vis-axis-tick-line-width": "1px",
	"--vis-axis-tick-label-hide-transition": "opacity 400ms ease-in-out",
	"--vis-dark-axis-tick-color": "#6c778c",
	"--vis-dark-axis-tick-label-color": "#e8e9ef",
	"--vis-dark-axis-grid-color": "#6c778c",
	"--vis-dark-axis-label-color": "#fefefe"
}, Eg = xg(Tg);
Sg(Tg, wg);
var Dg = z`
  label: hide-tick-line;
`, Og = z`
  label: hide-domain;
`, kg = z`
  label: axis;

  user-select: none;

  .domain {
    stroke: var(--vis-axis-domain-color, var(--vis-axis-tick-color));
    stroke-width: var(--vis-axis-domain-line-width, var(--vis-axis-grid-line-width));
    stroke-dasharray: var(--vis-axis-domain-line-dasharray, var(--vis-axis-grid-line-dasharray));
  }

  &${`.${Dg}`} {
    .tick > line {
      opacity: 0;
    }
  }

  &${`.${Og}`} {
    .domain {
      opacity: 0;
    }
  }
`, Ag = z`
  label: grid;

  .domain {
    opacity: 0;
  }

  line {
    stroke: var(--vis-axis-grid-color);
    stroke-width: var(--vis-axis-grid-line-width);
    stroke-dasharray: var(--vis-axis-grid-line-dasharray);
  }
`, jg = z`
  label: tick;

  stroke: none;
  font-size: var(--vis-axis-tick-label-font-size);
  font-weight: var(--vis-axis-tick-label-weight);

  line {
    stroke: var(--vis-axis-tick-color);
    stroke-width: var(--vis-axis-tick-line-width);
  }

  text {
    fill: var(--vis-axis-tick-label-color);
    cursor: var(--vis-axis-tick-label-cursor);
    font-family: var(--vis-axis-font-family, var(--vis-font-family));
    text-decoration: var(--vis-axis-tick-label-text-decoration);
    stroke: none;
  }
`, Mg = z`
  label: tick-text-exiting;
`, Ng = z`
  label: label;
  fill: var(--vis-axis-label-color);
  font-size: var(--vis-axis-label-font-size);
  font-weight: var(--vis-axis-label-weight);
  font-family: var(--vis-axis-font-family, var(--vis-font-family));
  text-anchor: middle;
`, Pg = z`
  label: tick-label;
`, Fg = z`
  label: tick-label-hideable;
  opacity: 0;
  transition: var(--vis-axis-tick-label-hide-transition);
`, Ig = class extends ip {
	constructor(e) {
		super(), this._defaultConfig = bg, this.config = this._defaultConfig, this._defaultNumTicks = 3, this.events = {}, e && this.setConfig(e), this.axisGroup = this.g.append("g"), this.gridGroup = this.g.append("g").attr("class", Ag);
	}
	preRender() {
		let { config: e } = this, t = this.g.append("g").attr("opacity", 0);
		this._renderAxis(t, 0), this._axisRawBBox = t.node().getBBox(), e.tickTextAlign && this._alignTickLabels(), this._renderAxisLabel(t), this._axisSizeBBox = this._getAxisSize(t), this._requiredMargin = this._getRequiredMargin(this._axisSizeBBox), t.remove();
	}
	getPosition() {
		let { config: { type: e, position: t } } = this;
		return t ?? (e === U.X ? Y.Bottom : Y.Left);
	}
	_getAxisSize(e) {
		return e.node().getBBox();
	}
	_getRequiredMargin(e = this._axisSizeBBox) {
		let { config: { type: t, position: n } } = this;
		switch (t) {
			case U.X: {
				let t = this._axisSizeBBox.x + this._axisSizeBBox.width, r = this._axisSizeBBox.x < 0 ? Math.abs(this._axisSizeBBox.x) : 0, i = t - this._width > 1 ? t - this._width : 0;
				switch (n) {
					case Y.Top: return {
						top: e.height,
						left: r,
						right: i
					};
					case Y.Bottom:
					default: return {
						bottom: e.height,
						left: r,
						right: i
					};
				}
			}
			case U.Y: {
				let t = e.height > this._height ? (e.height - this._height) / 2 : 0, r = t, i = t;
				switch (n) {
					case Y.Right: return {
						right: e.width,
						top: r,
						bottom: i
					};
					case Y.Left:
					default: return {
						left: e.width,
						top: r,
						bottom: i
					};
				}
			}
		}
	}
	getRequiredMargin() {
		return this._requiredMargin;
	}
	getOffset(e) {
		let { config: { type: t, position: n } } = this;
		switch (t) {
			case U.X: switch (n) {
				case Y.Top: return {
					top: e.top,
					left: e.left
				};
				case Y.Bottom:
				default: return {
					top: e.top + this._height,
					left: e.left
				};
			}
			case U.Y: switch (n) {
				case Y.Right: return {
					top: e.top,
					left: e.left + this._width
				};
				case Y.Left:
				default: return {
					top: e.top,
					left: e.left
				};
			}
		}
	}
	_render(e = this.config.duration, t = this.axisGroup) {
		let { config: n } = this;
		if (this._renderAxis(t, e), this._renderAxisLabel(t), n.gridLine) {
			let t = this._buildGrid();
			this.gridGroup.selectAll("*").interrupt(), H(this.gridGroup, e).call(t).style("opacity", 1);
		} else H(this.gridGroup, e).style("opacity", 0);
		n.tickTextAlign && this._alignTickLabels(), this._resolveTickLabelOverlap(t);
	}
	_buildAxis() {
		let { config: { type: e, position: t, tickPadding: n } } = this, r = this._getNumTicks();
		switch (e) {
			case U.X: switch (t) {
				case Y.Top: return Wh(this.xScale).ticks(r).tickPadding(n);
				case Y.Bottom:
				default: return Kh(this.xScale).ticks(r).tickPadding(n);
			}
			case U.Y: switch (t) {
				case Y.Right: return Gh(this.yScale).ticks(r).tickPadding(n);
				case Y.Left:
				default: return qh(this.yScale).ticks(r).tickPadding(n);
			}
		}
	}
	_buildGrid() {
		let { config: e } = this, t;
		switch (e.type) {
			case U.X:
				switch (e.position) {
					case Y.Top:
						t = Wh(this.xScale);
						break;
					case Y.Bottom:
					default:
						t = Kh(this.xScale);
						break;
				}
				t.tickSize(-this._height);
				break;
			case U.Y:
				switch (e.position) {
					case Y.Right:
						t = Gh(this.yScale);
						break;
					case Y.Left:
					default:
						t = qh(this.yScale);
						break;
				}
				t.tickSize(-this._width);
		}
		t.tickSizeOuter(0).tickFormat(() => "");
		let n = this._getNumTicks() * 2, r = t.scale(), i = r.domain(), a = e.tickValues ? this._getConfiguredTickValues() : this._shouldRenderMinMaxTicksOnly() ? (() => {
			if (!e.minMaxTicksOnlyShowGridLines) return i;
			let t = r.ticks(n);
			if (t.length < 2) return i;
			let a = t[1] - +t[0], o = i[1];
			return o - +t[t.length - 1] > a / 2 ? [...t, o] : t;
		})() : r.ticks(n);
		return t.tickValues(a), t;
	}
	_renderAxis(e = this.axisGroup, t = this.config.duration) {
		let { config: n } = this, r = this._buildAxis(), i = r.scale(), a = n.tickValues ? this._getConfiguredTickValues() : this._shouldRenderMinMaxTicksOnly() ? i.domain() : i.ticks(this._getNumTicks()), o = a.length;
		r.tickValues(a), e.selectAll("*").interrupt();
		let s = H(e, t).call(r);
		e.selectAll("text").attr("dy", null).attr("y", null), s.on("end", () => {
			this._resolveTickLabelOverlap(e);
		}), e.selectAll("g.tick").classed(jg, !0).style("font-size", n.tickTextFontSize);
		let c = e.selectAll("g.tick > text").filter((e) => a.some((t) => vn(e, t))).classed(Pg, !0).classed(Fg, !!n.tickTextHideOverlapping).style("fill", n.tickTextColor);
		e.selectAll("g.tick > text").filter((e) => !a.some((t) => vn(e, t))).classed(Mg, !0), c.nodes().forEach((e) => xs(e));
		let l = r.tickSize(), u = this.getPosition(), d = n.tickTextWidth || (n.type === U.X ? this._containerWidth / (o + 1) : this._containerWidth / 5);
		if (c.each((e, t, r) => {
			let i = n.tickFormat?.call(n, e, t, a) ?? `${e}`, o = r[t];
			if (!this._tickTextStyleCached) {
				let e = getComputedStyle(o);
				this._tickTextStyleCached = {
					fontSize: Number.parseFloat(e.fontSize),
					fontFamily: e.fontFamily,
					fontWidthToHeightRatio: ps()
				};
			}
			let [s, c] = this._getTickTextOffset(u, l, this._tickTextStyleCached.fontSize), f = {
				verticalAlign: n.type === U.X ? Yh.Top : Yh.Middle,
				width: d,
				textRotationAngle: n.tickTextAngle,
				separator: n.tickTextSeparator,
				wordBreak: n.tickTextForceWordBreak,
				x: s,
				y: c
			};
			n.tickTextFitMode === Xh.Trim && (dg(oa(o).text(i), d, n.tickTextTrimType, !0, this._tickTextStyleCached.fontSize, .58), i = oa(o).text()), yg(o, Object.assign({ text: i }, this._tickTextStyleCached), f, n.type === U.X ? "central" : "hanging");
		}), e.classed(kg, !0).classed(Dg, !n.tickLine).classed(Og, !n.domainLine), n.fullSize) {
			let n = this._getFullDomainPath(0);
			H(e.select(".domain"), t).attr("d", n);
		}
	}
	_resolveTickLabelOverlap(e = this.axisGroup) {
		let { config: t } = this, n = e.selectAll(`g.tick > text:not(.${Mg})`);
		if (!t.tickTextHideOverlapping) {
			n.style("opacity", null);
			return;
		}
		cancelAnimationFrame(this._collideTickLabelsAnimFrameId), this._collideTickLabelsAnimFrameId = requestAnimationFrame(() => {
			this._collideTickLabels(n);
		});
	}
	_collideTickLabels(e) {
		e.each((e, t, n) => {
			let r = n[t];
			r._visible = !0;
		});
		for (let t = 0; t < 3; t += 1) e.each((e, t, n) => {
			let r = n[t];
			if (!r._visible) return;
			let i = r.getBoundingClientRect();
			for (let e = t + 1; e < n.length; e += 1) {
				if (t === e) continue;
				let r = n[e];
				if (r._visible && po(i, r.getBoundingClientRect(), -5)) {
					r._visible = !1;
					break;
				}
			}
		});
		e.each((e, t, n) => {
			let r = n[t];
			oa(r).style("opacity", +!!r._visible);
		});
	}
	_getNumTicks() {
		let { config: { type: e, numTicks: t } } = this;
		if (t) return t;
		if (e === U.X) {
			let e = this.xScale.range(), t = e[1] - e[0];
			return Math.floor(t / 175);
		}
		if (e === U.Y) {
			let e = this.yScale.range();
			return Math.abs(e[0] - e[1]) ** .85 / 25;
		}
		return this._defaultNumTicks;
	}
	_getConfiguredTickValues() {
		let { config: e } = this, t = (e.type === U.X ? this.xScale : this.yScale)?.domain();
		return e.tickValues ? e.tickValues.filter((e) => e >= t[0] && e <= t[1]) : null;
	}
	_shouldRenderMinMaxTicksOnly() {
		let { config: e } = this;
		return e.minMaxTicksOnly || e.type === U.X && this._width < e.minMaxTicksOnlyWhenWidthIsLess;
	}
	_getFullDomainPath(e = 0) {
		let { config: { type: t } } = this;
		switch (t) {
			case U.X: return `M0.5, ${e} V0.5 H${this._width + .5} V${e}`;
			case U.Y: return `M${-e}, ${this._height + .5} H0.5 V0.5 H${-e}`;
		}
	}
	_renderAxisLabel(e = this.axisGroup) {
		let { type: t, label: n, labelMargin: r, labelFontSize: i, labelTextFitMode: a } = this.config;
		if (e.selectAll(`.${Ng}`).remove(), !n) return;
		let o = this.getPosition(), { width: s, height: c } = this._axisRawBBox ?? e.node().getBBox(), l = t === U.Y ? -90 : 0, u = e.append("text").attr("class", Ng).attr("dy", `${this._getLabelDY()}em`).style("font-size", i).style("fill", this.config.labelColor);
		u.text(n);
		let d = !1;
		if (a === Xh.Wrap) {
			let e = t === U.Y ? this._height : this._width;
			u.node().getComputedTextLength() > e && (ug(u, e), d = !0);
		}
		let f = s, p = c;
		if (a === Xh.Wrap) {
			let e = u.node().getBBox();
			f = e.width, p = e.height;
		} else {
			let e = t === U.X ? f : p, n = getComputedStyle(u.node()), r = Number.parseFloat(n.fontSize);
			dg(u, e, this.config.labelTextTrimType, !0, r);
			let i = u.node().getBBox();
			f = i.width, p = i.height;
		}
		let m = t === U.X ? this._width / 2 : t === U.Y && a === Xh.Wrap && d ? o === Y.Left ? -s - p / 2 - 10 : s : (-1) ** (o === Y.Left) * s, h = t === U.Y ? this._height / 2 : t === U.X && a === Xh.Wrap ? o === Y.Top ? -c - p / 2 : c : (-1) ** (o === Y.Top) * c, g = t === U.X ? 0 : (-1) ** (o === Y.Left) * r, _ = t === U.X ? (-1) ** (o === Y.Top) * r : 0;
		u.attr("transform", `translate(${m + g},${h + _}) rotate(${l})`);
	}
	_getLabelDY() {
		let { type: e, position: t } = this.config;
		switch (e) {
			case U.X: switch (t) {
				case Y.Top: return 0;
				case Y.Bottom:
				default: return .75;
			}
			case U.Y: switch (t) {
				case Y.Right: return .75;
				case Y.Left:
				default: return -.25;
			}
		}
	}
	_getTickTextOffset(e, t, n) {
		let { config: r } = this, i = (r.tickTextAngle ?? 0) / 180 * Math.PI, a = t + r.tickPadding;
		if (r.type === U.X) {
			let t = e === Y.Bottom ? 1 : -1;
			return [t * a * Math.sin(i), t * (a + n / 2) * Math.cos(i)];
		} else {
			let t = e === Y.Right ? 1 : -1;
			return [t * a * Math.cos(i), t * a * Math.sin(i)];
		}
	}
	_alignTickLabels() {
		let { config: { type: e, tickTextAlign: t, tickTextAngle: n, position: r } } = this, i = this.g.selectAll("g.tick > text"), a = tg(t), o = e === U.X ? 0 : this._getYTickTextTranslate(t, r), s = n ? `translate(${o},0) rotate(${n})` : `translate(${o},0)`;
		i.attr("transform", s).attr("text-anchor", a);
	}
	_getYTickTextTranslate(e, t = Y.Left) {
		let n = this.config.tickPadding + 1, r = (this._axisRawBBox?.width ?? this.axisGroup.node()?.getBBox().width ?? 0) - n;
		switch (e) {
			case Zh.Left: return t === Y.Left ? r * -1 : 0;
			case Zh.Right: return t === Y.Left ? 0 : r;
			case Zh.Center: return t === Y.Left ? r * -.5 : r * .5;
			default: return 0;
		}
	}
};
Ig.selectors = Cg;
//#endregion
//#region node_modules/@unovis/ts/components/crosshair/config.js
var Lg = Object.assign(Object.assign({}, rp), {
	yStacked: void 0,
	baseline: null,
	duration: 100,
	tooltip: void 0,
	template: (e, t, n, r) => "",
	hideWhenFarFromPointer: !0,
	hideWhenFarFromPointerDistance: 100,
	snapToData: !0,
	getCircles: void 0,
	color: void 0,
	strokeColor: void 0,
	strokeWidth: void 0,
	onCrosshairMove: void 0,
	forceShowAt: void 0,
	skipRangeCheck: !1
}), Rg = /* @__PURE__ */ k({
	circle: () => Hg,
	globalStyles: () => zg,
	line: () => Vg,
	root: () => Bg
}), zg = jt`
  :root {
    --vis-crosshair-line-stroke-color: #888;
    --vis-crosshair-line-stroke-width: 1px;
    --vis-crosshair-line-stroke-opacity: 1;
    --vis-crosshair-circle-stroke-color: #fff;
    --vis-crosshair-circle-stroke-width: 1px;
    --vis-crosshair-circle-stroke-opacity: 0.75;
  }
`, Bg = z`
  label: crosshair-component;
`, Vg = z`
  stroke: var(--vis-crosshair-line-stroke-color);
  stroke-width: var(--vis-crosshair-line-stroke-width);
  stroke-opacity: var(--vis-crosshair-line-stroke-opacity);
  pointer-events: none;
`, Hg = z`
  stroke: var(--vis-crosshair-circle-stroke-color);
  stroke-width: var(--vis-crosshair-circle-stroke-width);
  stroke-opacity: var(--vis-crosshair-circle-stroke-opacity);
  pointer-events: none;
`, Ug = class extends ip {
	constructor(e) {
		super(), this.clippable = !0, this._defaultConfig = Lg, this.config = this._defaultConfig, this._xPx = void 0, this._yPx = void 0, this._mouseEvent = void 0, this._animFrameId = null, this._accessors = {
			x: void 0,
			y: void 0,
			yStacked: void 0,
			baseline: void 0
		}, e && this.setConfig(e), this.g.style("opacity", 0), this.line = this.g.append("line").attr("class", Vg);
	}
	set accessors(e) {
		this._accessors = e;
	}
	get accessors() {
		let { config: e } = this, t = !!(e.x || e.y || e.yStacked), n = t ? e.x : this._accessors.x, r = t ? e.y : this._accessors.y;
		return {
			x: n,
			y: r ? pn(r) ? r : [r] : void 0,
			yStacked: t ? e.yStacked : this._accessors.yStacked,
			baseline: e.baseline ?? this._accessors.baseline
		};
	}
	_isContainerInViewport() {
		if (!this.container?.node()) return !1;
		let e = this.container.node().getBoundingClientRect(), t = window.innerWidth || document.documentElement.clientWidth, n = window.innerHeight || document.documentElement.clientHeight, r = Math.max(0, Math.min(e.right, t) - Math.max(e.left, 0)), i = Math.max(0, Math.min(e.bottom, n) - Math.max(e.top, 0)), a = e.width * e.height, o = r * i;
		return a > 0 && o / a >= .35;
	}
	setContainer(e) {
		this.container !== e && (this.container = e, this.container.on("mousemove.crosshair", this._onMouseMove.bind(this)), this.container.on("mouseout.crosshair", this._onMouseOut.bind(this)), this.container.on("wheel.crosshair", this._onWheel.bind(this)));
	}
	_render(e) {
		var t;
		let { config: n, datamodel: r } = this, i = un(e) ? e : n.duration, a = n.forceShowAt !== void 0, o = a ? this.xScale(n.forceShowAt) : this._xPx, s = this.xScale.invert(o), c = r.data?.length && this.accessors.x ? r.data.indexOf(Nn(r.data, s, this.accessors.x, ln.Left)) : void 0, l, u;
		n.snapToData && (!this.accessors.y && !this.accessors.yStacked && r.data?.length && console.warn("Unovis | Crosshair: Y accessors have not been configured. Please check if they're present in the configuration object"), !r.data?.length && this._mouseEvent && console.warn("Unovis | Crosshair: No data to snap to. Make sure the data has been passed to the container or to the crosshair itself"), l = Nn(r.data, s, this.accessors.x), u = r.data.indexOf(l));
		let d = this.xScale.range(), f = this.yScale.range(), p = n.snapToData && l ? En(Math.round(this.xScale(B(l, this.accessors.x, u))), 0, this._width) : En(o, d[0], d[1]), m = o >= d[0] && o <= d[1], h = this._yPx >= Math.min(f[0], f[1]) && this._yPx <= Math.max(f[0], f[1]), g = n.skipRangeCheck ? !!this._xPx : this._xPx ? m && h : m;
		n.hideWhenFarFromPointer && Math.abs(p - +o) >= n.hideWhenFarFromPointerDistance && (g = !1);
		let _ = n.tooltip ?? this.tooltip;
		if (g && _ && this._isContainerInViewport()) {
			let e = _.getContainer() || this.container.node(), t = _.isContainerBody(), n = this.accessors.x ? B(l, this.accessors.x, u) : void 0;
			if (a) {
				let e = this.container.node().getBoundingClientRect(), r = [(t ? o + e.left : o) + this._containerMargin.left, this._height / 2 + (t ? e.top : 0)];
				this._showTooltip(l, n, r, c);
			} else if (this._mouseEvent) {
				let r = t ? [this._mouseEvent.clientX, this._mouseEvent.clientY] : ca(this._mouseEvent, e);
				this._showTooltip(l, n, r, c);
			}
		} else this._hideTooltip();
		if (this._mouseEvent &&= ((t = n.onCrosshairMove) == null || t.call(n, g ? this.xScale.invert(this._xPx) : void 0, l, u, this._mouseEvent), void 0), H(this.g, i).style("opacity", +!!g), !isFinite(o)) return;
		this.line.attr("y1", 0).attr("y2", this._height), H(this.line, i, il).attr("x1", p).attr("x2", p);
		let v = dn(n.getCircles) ? n.getCircles(s, r.data, this.yScale, c) : this.getCircleData(l, u), y = this.g.selectAll("circle").data(v, (e, t) => e.id ?? t);
		H(y.enter().append("circle").attr("class", Hg).attr("r", 0).attr("cx", p).attr("cy", (e) => e.y).style("fill", (e) => e.color).style("stroke", (e) => e.strokeColor).style("stroke-width", (e) => e.strokeWidth).merge(y), i, il).attr("cx", p).attr("cy", (e) => e.y).attr("r", 4).style("opacity", (e) => e.opacity).style("fill", (e) => e.color).style("stroke", (e) => e.strokeColor).style("stroke-width", (e) => e.strokeWidth), y.exit().remove();
	}
	hide(e) {
		window.cancelAnimationFrame(this._animFrameId), this._animFrameId = window.requestAnimationFrame(() => {
			var t, n;
			this._xPx = void 0, this._yPx = void 0, this._mouseEvent = void 0, (n = (t = this.config).onCrosshairMove) == null || n.call(t, void 0, void 0, void 0, e), this._render();
		});
	}
	_onMouseMove(e) {
		let { datamodel: t, element: n } = this;
		!this.accessors.x && t.data?.length && console.warn("Unovis | Crosshair: X accessor function has not been configured. Please check if it's present in the configuration object");
		let [r, i] = ca(e, n);
		this._xPx = r, this._yPx = i, this._mouseEvent = e, window.cancelAnimationFrame(this._animFrameId), this._animFrameId = window.requestAnimationFrame(() => {
			this._render();
		});
	}
	_onMouseOut(e) {
		(!e || !this.container?.node().contains(e.relatedTarget)) && this.hide(e);
	}
	_onWheel(e) {
		this.hide(e);
	}
	_showTooltip(e, t, n, r) {
		let { config: i, datamodel: a } = this, o = i.tooltip ?? this.tooltip;
		if (!o || !n) return;
		let [s, c] = n, l = i.template(e, t, a.data, r);
		if (o.config.followCursor = !0, !o.config.horizontalPlacement || o.config.horizontalPlacement === Y.Auto) {
			let e = o.isContainerBody() ? s - this.container.node().getBoundingClientRect().left : s;
			o.overrideHorizontalPlacement(e > this._containerWidth / 2 ? Y.Left : Y.Right);
		}
		l && o.show(l, {
			x: s,
			y: c
		});
	}
	_hideTooltip() {
		let { config: e } = this;
		(e.tooltip ?? this.tooltip)?.hide();
	}
	getYDataExtent() {
		return [void 0, void 0];
	}
	getCircleData(e, t) {
		let { config: n } = this;
		if (n.snapToData && e) {
			let r = this.accessors.y ?? [], i = this.accessors.yStacked ?? [], a = B(e, this.accessors.baseline, t) || 0, o = On(e, t, ...i).map((t, r) => ({
				y: this.yScale(t + a),
				opacity: +!!un(B(e, i[r], r)),
				color: Q(e, n.color, r),
				strokeColor: n.strokeColor ? Q(e, n.strokeColor, r) : void 0,
				strokeWidth: n.strokeWidth ? B(e, n.strokeWidth, r) : void 0
			})), s = r.map((r, i) => {
				let a = B(e, r, t);
				return {
					y: this.yScale(a),
					opacity: +!!un(a),
					color: Q(e, n.color, o.length + i),
					strokeColor: n.strokeColor ? Q(e, n.strokeColor, i) : void 0,
					strokeWidth: n.strokeWidth ? B(e, n.strokeWidth, i) : void 0
				};
			});
			return o.concat(s);
		}
		return [];
	}
};
Ug.selectors = Rg;
//#endregion
//#region node_modules/@unovis/ts/components/area/config.js
var Wg = Object.assign(Object.assign({}, rp), {
	color: void 0,
	curveType: $.MonotoneX,
	baseline: () => 0,
	opacity: 1,
	cursor: null,
	line: !1,
	lineColor: void 0,
	lineWidth: 2,
	lineDashArray: void 0,
	minHeight1Px: !1,
	minHeight: void 0,
	stackMinHeight: !1
}), Gg = /* @__PURE__ */ k({
	area: () => Jg,
	areaLinePath: () => Yg,
	globalStyles: () => qg,
	root: () => Kg
}), Kg = z`
  label: area-component;
`, qg = jt`
  :root {
    --vis-area-cursor: default;
    --vis-area-fill-opacity: 1;
    --vis-area-stroke-color: none;
    --vis-area-stroke-width: 0px;
    --vis-area-stroke-dasharray: none;
    --vis-area-stroke-opacity: 1;
    --vis-area-hover-fill-opacity: none;
    --vis-area-hover-stroke-width: none;

    /* Dark Theme */
    --vis-dark-area-stroke-color: none;
  }

  body.theme-dark ${`.${Kg}`} {
    --vis-area-stroke-color: var(--vis-dark-area-stroke-color);
  }

`, Jg = z`
  label: area;
  cursor: var(--vis-area-cursor);
  fill-opacity: var(--vis-area-fill-opacity);
  stroke-width: var(--vis-area-stroke-width);
  stroke-dasharray: var(--vis-area-stroke-dasharray);
  stroke: var(--vis-area-stroke-color);
  stroke-opacity: var(--vis-area-stroke-opacity);

  &:hover {
    fill-opacity: var(--vis-area-hover-fill-opacity);
    stroke-width: var(--vis-area-hover-stroke-width);
  }
`, Yg = z`
  label: areaLinePath;
  fill: none;
  stroke-dasharray: var(--vis-line-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-stroke-dashoffset);
`, Xg = class e extends ip {
	constructor(t) {
		super(), this._defaultConfig = Wg, this.config = this._defaultConfig, this.stacked = !0, this.events = { [e.selectors.area]: {} }, t && this.setConfig(t), this.stacked = Array.isArray(this.config.y);
	}
	get bleed() {
		let { config: { line: e, lineWidth: t } } = this;
		if (!e) return {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		};
		let n = this.yScale.domain(), r = (this.yScale.range()[0] > this.yScale.range()[1] ? Zf.North : Zf.South) === Zf.South, i = t > 3, a = t >= 10;
		return {
			top: !a && (!r && n[1] === 0 || r && n[0] === 0) ? 0 : t / 2,
			bottom: !a && (!r && n[0] === 0 || r && n[1] === 0) ? 0 : t / 2,
			left: i ? t / 2 : 0,
			right: i ? t / 2 : 0
		};
	}
	_render(e) {
		super._render(e);
		let { config: t, datamodel: { data: n } } = this, r = un(e) ? e : t.duration, i = fh[t.curveType];
		this._areaGen = Qp().x((e) => e.x).y0((e) => e.y0).y1((e) => e.y1).curve(i);
		let a = pn(t.y) ? t.y : [t.y], o = n.map((e, n) => this.xScale(B(e, t.x, n))), s = kn(n, t.baseline, a, this._prevNegative);
		this._prevNegative = s.map((e) => !!e.isMostlyNegative);
		let c = [], l = s.map((e) => e.map((e, n) => {
			let r = o[n], i = this.yScale(e[0]), a = this.yScale(e[1]), s = a > i, l = t.stackMinHeight && c[n] || 0, u = s ? i + l : i - l, d = s ? a + l : a - l, f = 0;
			return (t.minHeight || t.minHeight1Px) && Math.abs(d - u) < (t.minHeight ?? 1) && (f = (t.minHeight ?? 1) - Math.abs(d - u), t.stackMinHeight && (c[n] = l + f)), {
				x: r,
				y0: u,
				y1: s ? d + f : d - f
			};
		})), u = l.length - 1, d = [...l].reverse(), f = this.g.selectAll(`.${Jg}`).data(d), p = H(f.enter().append("path").attr("class", Jg).attr("d", (e) => this._areaGen(e) || this._emptyPath()).style("opacity", 0).style("fill", (e, r) => Q(n, t.color, u - r)).merge(f), r).style("opacity", (e, r) => e.some((e) => e.y0 - e.y1 !== 0) ? B(n, t.opacity, u - r) : 0).style("fill", (e, r) => Q(n, t.color, u - r)).style("cursor", (e, r) => wn(n, t.cursor, u - r));
		r ? p.attrTween("d", (e, t, n) => dh(oa(n[t]).attr("d"), this._areaGen(e) || this._emptyPath())) : p.attr("d", (e) => this._areaGen(e) || this._emptyPath()), H(f.exit(), r).style("opacity", 0).remove(), t.line && this._renderLines(r, l);
	}
	_renderLines(e, t) {
		let { config: n, datamodel: { data: r } } = this, i = t.length - 1, a = [...t].reverse(), o = n.lineColor ?? n.color, s = this.g.selectAll(`.${Yg}`).data(a), c = this.g.selectAll(`.${Jg}`).nodes(), l = H(s.enter().insert("path", (e, t) => c[t + 1]).attr("class", Yg).attr("stroke", (e, t) => Q(r, o, i - t)).attr("stroke-width", n.lineWidth).attr("stroke-opacity", 0).merge(s), e).attr("stroke", (e, t) => Q(r, o, i - t)).attr("stroke-width", n.lineWidth).attr("stroke-opacity", 1).attr("cursor", (e, t) => wn(r, n.cursor, i - t)).style("stroke-dasharray", (e, t) => Cn(r, n.lineDashArray, t)?.join(" ") ?? null), u = fh[n.curveType];
		this._lineGen = Zp().x((e) => e.x).y((e) => e.y1).curve(u), e ? l.attrTween("d", (e, t, n) => dh(oa(n[t]).attr("d") || this._emptyLinePath(), this._lineGen(e) || this._emptyLinePath())) : l.attr("d", (e) => this._lineGen(e) || this._emptyLinePath()), H(s.exit(), e).style("opacity", 0).remove();
	}
	getYDataExtent(e) {
		let { config: t, datamodel: n } = this, r = pn(t.y) ? t.y : [t.y], i = this.xScale.domain();
		return Dn(e ? Pn(n.data, i, t.x, !0) : n.data, t.baseline, ...r);
	}
	_emptyPath() {
		let e = this.xScale.range(), t = this.yScale.domain(), n = this.yScale((t[0] + t[1]) / 2), r = n;
		return this._areaGen([{
			y0: n,
			y1: r,
			x: e[0]
		}, {
			y0: n,
			y1: r,
			x: e[1]
		}]);
	}
	_emptyLinePath() {
		let e = this.xScale.range(), t = this.yScale.range();
		return `M${e[0]},${t[0]} L${e[1]},${t[0]}`;
	}
};
Xg.selectors = Gg;
//#endregion
//#region node_modules/@unovis/ts/components/donut/config.js
var Zg = Object.assign(Object.assign({}, ep), {
	id: (e, t) => e.id ?? t,
	value: void 0,
	angleRange: [0, 2 * Math.PI],
	padAngle: 0,
	sortFunction: void 0,
	cornerRadius: 0,
	color: void 0,
	radius: void 0,
	arcWidth: 20,
	centralLabel: void 0,
	centralSubLabel: void 0,
	centralSubLabelWrap: !0,
	showEmptySegments: !1,
	emptySegmentAngle: .5 * Math.PI / 180,
	showBackground: !0,
	backgroundAngleRange: void 0,
	centralLabelOffsetX: void 0,
	centralLabelOffsetY: void 0
});
//#endregion
//#region node_modules/@unovis/ts/components/donut/modules/arc.js
function Qg(e, t) {
	e.style("fill", (e) => Q(e.data, t.color, e.index)).style("opacity", 0).each((e, t, n) => {
		let r = n[t], i = (e.startAngle + e.endAngle) / 2, a = (e.endAngle - e.startAngle) / 2;
		r._animState = {
			startAngle: i - a,
			endAngle: i + a,
			innerRadius: e.innerRadius,
			outerRadius: e.outerRadius,
			padAngle: e.padAngle
		};
	});
}
function $g(e, t, n, r) {
	e.style("transition", `fill ${r}ms`).style("fill", (e) => Q(e.data, t.color, e.index));
	let i = (e) => t.showEmptySegments || e.value ? 1 : 0;
	r ? H(e, r).style("opacity", i).attrTween("d", (e, t, r) => {
		let i = r[t], a = {
			startAngle: e.startAngle,
			endAngle: e.endAngle,
			innerRadius: e.innerRadius,
			outerRadius: e.outerRadius,
			padAngle: e.padAngle
		}, o = Bs(i._animState, a);
		return (e) => (i._animState = o(e), n(i._animState));
	}) : e.attr("d", n).style("opacity", i);
}
function e_(e, t) {
	H(e, t).style("opacity", 0).remove();
}
//#endregion
//#region node_modules/@unovis/ts/components/donut/constants.js
var t_ = Array.from({ length: 4 }, (e, t) => {
	let n = -Math.PI / 2 + t * Math.PI / 2;
	return [n, n + Math.PI];
}), n_ = /* @__PURE__ */ k({
	background: () => a_,
	centralLabel: () => c_,
	centralSubLabel: () => l_,
	root: () => r_,
	segment: () => o_,
	segmentExit: () => s_,
	variables: () => i_
}), r_ = z`
  label: donut-component;
`, i_ = jt`
  :root {
    --vis-donut-central-label-font-size: 16px;
    --vis-donut-central-label-text-color: #5b5f6d;
    // Undefined by default to allow proper fallback to var(--vis-font-family)
    /* --vis-donut-central-label-font-family: */
    --vis-donut-central-label-font-weight: 600;

    --vis-donut-central-sub-label-font-size: 12px;
    --vis-donut-central-sub-label-text-color: #5b5f6d;
    // Undefined by default to allow proper fallback to var(--vis-font-family)
    /* --vis-donut-central-sub-label-font-family: */
    --vis-donut-central-sub-label-font-weight: 500;

    --vis-donut-background-color: #E7E9F3;
    --vis-donut-segment-stroke-width: 0;
    // The line segment color variable is not defined by default
    // to allow it to fallback to the donut background color
    /* --vis-donut-segment-stroke-color: none; */

    --vis-dark-donut-central-label-text-color: #C2BECE;
    --vis-dark-donut-central-sub-label-text-color: #C2BECE;
    --vis-dark-donut-background-color: #18160C;
  }

  body.theme-dark ${`.${r_}`} {
    --vis-donut-central-label-text-color: var(--vis-dark-donut-central-label-text-color);
    --vis-donut-central-sub-label-text-color: var(--vis-dark-donut-central-sub-label-text-color);
    --vis-donut-background-color: var(--vis-dark-donut-background-color);
  }
`, a_ = z`
  label: background;
  fill: var(--vis-donut-background-color);
`, o_ = z`
  label: segment;
  stroke-width: var(--vis-donut-segment-stroke-width);
  stroke: var(--vis-donut-segment-stroke-color, var(--vis-donut-background-color));
`, s_ = z`
  label: segment-exit;
`, c_ = z`
  label: central-label;
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: var(--vis-donut-central-label-font-size);
  font-family: var(--vis-donut-central-label-font-family, var(--vis-font-family));
  font-weight: var(--vis-donut-central-label-font-weight);
  fill: var(--vis-donut-central-label-text-color);
`, l_ = z`
  label: central-label;
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: var(--vis-donut-central-sub-label-font-size);
  font-family: var(--vis-donut-central-sub-label-font-family, var(--vis-font-family));
  font-weight: var(--vis-donut-central-sub-label-font-weight);
  fill: var(--vis-donut-central-sub-label-text-color);
`, u_ = class extends tp {
	constructor(e) {
		super(), this._defaultConfig = Zg, this.config = this._defaultConfig, this.datamodel = new np(), this.arcGen = Gp(), this.events = {}, e && this.setConfig(e), this.arcBackground = this.g.append("path"), this.arcGroup = this.g.append("g"), this.centralLabel = this.g.append("text").attr("class", c_), this.centralSubLabel = this.g.append("text").attr("class", l_);
	}
	get bleed() {
		return {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		};
	}
	_render(e) {
		let { config: t, datamodel: n, bleed: r } = this, i = n.data.map((e, t) => ({
			index: t,
			datum: e
		})).filter((e) => t.showEmptySegments || B(e.datum, t.value, e.index)), a = un(e) ? e : t.duration, [o, s, c, l] = t_.map((e) => t.angleRange && t.angleRange[0] === e[0] && t.angleRange[1] === e[1]), u = o || c, d = s || l, f = this._width * (d ? 2 : 1), p = this._height * (u ? 2 : 1), m = t.radius || Math.min(f - r.left - r.right, p - r.top - r.bottom) / 2, h = t.arcWidth === 0 ? 0 : En(m - t.arcWidth, 0, m - 1), g = this._height / 2 + (o ? m / 2 : c ? -m / 2 : 0), _ = this._width / 2 + (l ? m / 2 : s ? -m / 2 : 0), v = `translate(${_},${g})`;
		this.arcGroup.attr("transform", v), this.arcGen.startAngle((e) => e.startAngle).endAngle((e) => e.endAngle).innerRadius((e) => e.innerRadius).outerRadius((e) => e.outerRadius).padAngle((e) => e.padAngle).cornerRadius(t.cornerRadius);
		let y = tm().startAngle(t.angleRange?.[0] ?? 0).endAngle(t.angleRange?.[1] ?? 2 * Math.PI).padAngle(t.padAngle).value((e) => B(e.datum, t.value, e.index) || 0).sort((e, n) => t.sortFunction?.call(t, e.datum, n.datum))(i).map((e) => {
			let n = Object.assign(Object.assign({}, e), {
				data: e.data.datum,
				index: e.data.index,
				innerRadius: h,
				outerRadius: m
			});
			return t.showEmptySegments && e.endAngle - e.startAngle - e.padAngle <= 2 ** -52 && (n.endAngle = e.startAngle + Math.max(t.emptySegmentAngle, t.padAngle), n.padAngle = e.padAngle / 2), n;
		}), b = this.arcGroup.selectAll(`.${o_}`).data(y, (e) => t.id(e.data, e.index)), x = b.enter().append("path").attr("class", o_).call(Qg, t), S = b.merge(x);
		S.call($g, t, this.arcGen, a), S.sort((e, t) => t.value - e.value), b.exit().attr("class", s_).call(e_, a);
		let C = s ? "start" : l ? "end" : "middle";
		this.centralLabel.attr("dy", t.centralSubLabel ? "-0.55em" : null).style("text-anchor", C).text(t.centralLabel ?? null), this.centralSubLabel.attr("dy", t.centralLabel ? "0.55em" : null).style("text-anchor", C).text(t.centralSubLabel ?? null), t.centralSubLabelWrap && ug(this.centralSubLabel, h * 1.9);
		let w = (t.centralLabelOffsetX || 0) + _, T = (t.centralLabelOffsetY || 0) + g;
		u && t.centralLabelOffsetX === void 0 && t.centralLabelOffsetY === void 0 && (T = (o ? -this.centralSubLabel.node().getBoundingClientRect().height : c ? this.centralLabel.node().getBoundingClientRect().height : 0) + g);
		let E = `translate(${w},${T})`;
		this.centralLabel.attr("transform", E), this.centralSubLabel.attr("transform", E), this.arcBackground.attr("class", a_).attr("visibility", t.showBackground ? null : "hidden").attr("transform", v), H(this.arcBackground, a).attr("d", this.arcGen({
			startAngle: t.backgroundAngleRange?.[0] ?? t.angleRange?.[0] ?? 0,
			endAngle: t.backgroundAngleRange?.[1] ?? t.angleRange?.[1] ?? 2 * Math.PI,
			innerRadius: h,
			outerRadius: m
		}));
	}
};
u_.selectors = n_;
//#endregion
//#region node_modules/@unovis/vue/utils/props.js
function d_(e, t) {
	return vn(e, t);
}
function f_(e) {
	let t = u(), n = t.attrs;
	return S(() => {
		let r = {}, i = t?.vnode.props ?? {};
		return Object.keys(i).forEach((t) => {
			r[x(t)] = e[x(t)];
		}), {
			...r,
			...n
		};
	});
}
//#endregion
//#region node_modules/@unovis/vue/utils/context.js
var p_ = Symbol("componentAccessorKey"), m_ = Symbol("tooltipAccessorKey"), h_ = Symbol("crosshairAccessorKey"), g_ = Symbol("axisAccessorKey"), __ = Symbol("annotationsAccessorKey"), v_ = { "data-vis-component": "" };
Xg.selectors;
//#endregion
//#region node_modules/@unovis/vue/components/area/index.js
var y_ = /* @__PURE__ */ O({
	__name: "index",
	props: {
		color: { type: [
			Function,
			String,
			Array,
			null
		] },
		curveType: {},
		baseline: { type: [
			Function,
			Number,
			null
		] },
		opacity: { type: [
			Function,
			Number,
			null
		] },
		cursor: { type: [
			Function,
			String,
			null
		] },
		line: { type: Boolean },
		lineColor: { type: [
			Function,
			String,
			Array,
			null
		] },
		lineWidth: {},
		lineDashArray: { type: [
			Function,
			Array,
			null
		] },
		minHeight1Px: { type: Boolean },
		minHeight: {},
		stackMinHeight: { type: Boolean },
		x: { type: [
			Function,
			Number,
			null
		] },
		y: { type: [
			Function,
			Number,
			null,
			Array
		] },
		id: { type: Function },
		xScale: { type: [Object, Function] },
		yScale: { type: [Object, Function] },
		excludeFromDomainCalculation: { type: Boolean },
		duration: {},
		events: {},
		attributes: {},
		data: {}
	},
	setup(r, { expose: i }) {
		let a = t(p_), o = r, l = S(() => a.data.value ?? o.data), u = f_(o), d = h();
		return s(() => {
			e(() => {
				var e;
				d.value = new Xg(u.value), (e = d.value) == null || e.setData(l.value), a.update(d.value);
			});
		}), c(() => {
			var e;
			(e = d.value) == null || e.destroy(), a.destroy();
		}), f(u, (e, t) => {
			var n;
			d_(e, t) || (n = d.value) == null || n.setConfig(u.value);
		}), f(l, () => {
			var e;
			(e = d.value) == null || e.setData(l.value);
		}), i({ component: d }), (e, t) => (n(), p("div", v_));
	}
}), b_ = { "data-vis-axis": "" };
Ig.selectors;
//#endregion
//#region node_modules/@unovis/vue/components/axis/index.js
var x_ = /* @__PURE__ */ O({
	__name: "index",
	props: {
		position: {},
		type: {},
		fullSize: { type: Boolean },
		label: {},
		labelFontSize: {},
		labelMargin: {},
		labelTextFitMode: {},
		labelTextTrimType: {},
		labelColor: {},
		gridLine: { type: Boolean },
		tickLine: { type: Boolean },
		domainLine: { type: Boolean },
		minMaxTicksOnly: { type: Boolean },
		minMaxTicksOnlyShowGridLines: { type: Boolean },
		minMaxTicksOnlyWhenWidthIsLess: {},
		tickFormat: { type: Function },
		tickValues: {},
		numTicks: {},
		tickTextFitMode: {},
		tickTextWidth: {},
		tickTextSeparator: {},
		tickTextForceWordBreak: { type: Boolean },
		tickTextTrimType: {},
		tickTextFontSize: {},
		tickTextAlign: {},
		tickTextColor: {},
		tickTextAngle: {},
		tickTextHideOverlapping: { type: Boolean },
		tickPadding: {},
		x: { type: [
			Function,
			Number,
			null
		] },
		y: { type: [
			Function,
			Number,
			null,
			Array
		] },
		id: { type: Function },
		color: { type: [
			Function,
			String,
			Array,
			null
		] },
		xScale: { type: [Object, Function] },
		yScale: { type: [Object, Function] },
		excludeFromDomainCalculation: { type: Boolean },
		duration: {},
		events: {},
		attributes: {},
		data: {}
	},
	setup(r, { expose: i }) {
		let a = t(g_), o = r, l = S(() => a.data.value ?? o.data), u = f_(o), d = h();
		return s(() => {
			e(() => {
				var e;
				d.value = new Ig(u.value), (e = d.value) == null || e.setData(l.value), a.update(d.value);
			});
		}), c(() => {
			var e;
			(e = d.value) == null || e.destroy(), a.destroy(o.type);
		}), f(u, (e, t) => {
			var n;
			d_(e, t) || (n = d.value) == null || n.setConfig(u.value);
		}), f(l, () => {
			var e;
			(e = d.value) == null || e.setData(l.value);
		}), i({ component: d }), (e, t) => (n(), p("div", b_));
	}
}), S_ = { "data-vis-crosshair": "" };
Ug.selectors;
//#endregion
//#region node_modules/@unovis/vue/components/crosshair/index.js
var C_ = /* @__PURE__ */ O({
	__name: "index",
	setup(r, { expose: i }) {
		let a = t(h_), o = r, l = S(() => a.data.value ?? o.data), u = f_(o), d = h();
		return s(() => {
			e(() => {
				var e;
				d.value = new Ug(u.value), (e = d.value) == null || e.setData(l.value), a.update(d.value);
			});
		}), c(() => {
			var e;
			(e = d.value) == null || e.destroy(), a.destroy();
		}), f(u, (e, t) => {
			var n;
			d_(e, t) || (n = d.value) == null || n.setConfig(u.value);
		}), f(l, () => {
			var e;
			(e = d.value) == null || e.setData(l.value);
		}), i({ component: d }), (e, t) => (n(), p("div", S_));
	}
}), w_ = { "data-vis-component": "" };
u_.selectors;
//#endregion
//#region node_modules/@unovis/vue/components/donut/index.js
var T_ = /* @__PURE__ */ O({
	__name: "index",
	props: {
		id: { type: Function },
		value: { type: [
			Function,
			Number,
			null
		] },
		angleRange: {},
		padAngle: {},
		sortFunction: { type: Function },
		cornerRadius: {},
		color: { type: [
			Function,
			String,
			Array,
			null
		] },
		radius: {},
		arcWidth: {},
		centralLabel: {},
		centralSubLabel: {},
		centralSubLabelWrap: { type: Boolean },
		showEmptySegments: { type: Boolean },
		emptySegmentAngle: {},
		showBackground: { type: Boolean },
		backgroundAngleRange: {},
		centralLabelOffsetX: {},
		centralLabelOffsetY: {},
		duration: {},
		events: {},
		attributes: {},
		data: {}
	},
	setup(r, { expose: i }) {
		let a = t(p_), o = r, l = S(() => a.data.value ?? o.data), u = f_(o), d = h();
		return s(() => {
			e(() => {
				var e;
				d.value = new u_(u.value), (e = d.value) == null || e.setData(l.value), a.update(d.value);
			});
		}), c(() => {
			var e;
			(e = d.value) == null || e.destroy(), a.destroy();
		}), f(u, (e, t) => {
			var n;
			d_(e, t) || (n = d.value) == null || n.setConfig(u.value);
		}), f(l, () => {
			var e;
			(e = d.value) == null || e.setData(l.value);
		}), i({ component: d }), (e, t) => (n(), p("div", w_));
	}
}), E_ = { "data-vis-component": "" };
jh.selectors;
//#endregion
//#region node_modules/@unovis/vue/components/grouped-bar/index.js
var D_ = /* @__PURE__ */ O({
	__name: "index",
	props: {
		color: { type: [
			Function,
			String,
			Array,
			null
		] },
		groupWidth: {},
		groupMaxWidth: {},
		dataStep: {},
		groupPadding: {},
		barPadding: {},
		roundedCorners: { type: [Number, Boolean] },
		barMinHeight: {},
		cursor: { type: [
			Function,
			String,
			null
		] },
		orientation: {},
		x: { type: [
			Function,
			Number,
			null
		] },
		y: { type: [
			Function,
			Number,
			null,
			Array
		] },
		id: { type: Function },
		xScale: { type: [Object, Function] },
		yScale: { type: [Object, Function] },
		excludeFromDomainCalculation: { type: Boolean },
		duration: {},
		events: {},
		attributes: {},
		data: {}
	},
	setup(r, { expose: i }) {
		let a = t(p_), o = r, l = S(() => a.data.value ?? o.data), u = f_(o), d = h();
		return s(() => {
			e(() => {
				var e;
				d.value = new jh(u.value), (e = d.value) == null || e.setData(l.value), a.update(d.value);
			});
		}), c(() => {
			var e;
			(e = d.value) == null || e.destroy(), a.destroy();
		}), f(u, (e, t) => {
			var n;
			d_(e, t) || (n = d.value) == null || n.setConfig(u.value);
		}), f(l, () => {
			var e;
			(e = d.value) == null || e.setData(l.value);
		}), i({ component: d }), (e, t) => (n(), p("div", E_));
	}
}), O_ = { "data-vis-component": "" };
Sh.selectors;
//#endregion
//#region node_modules/@unovis/vue/components/line/index.js
var k_ = /* @__PURE__ */ O({
	__name: "index",
	props: {
		color: { type: [
			Function,
			String,
			Array,
			null
		] },
		curveType: {},
		lineWidth: {},
		lineDashArray: { type: [
			Function,
			Array,
			null
		] },
		fallbackValue: {},
		highlightOnHover: { type: Boolean },
		cursor: { type: [
			Function,
			String,
			null
		] },
		interpolateMissingData: { type: Boolean },
		x: { type: [
			Function,
			Number,
			null
		] },
		y: { type: [
			Function,
			Number,
			null,
			Array
		] },
		id: { type: Function },
		xScale: { type: [Object, Function] },
		yScale: { type: [Object, Function] },
		excludeFromDomainCalculation: { type: Boolean },
		duration: {},
		events: {},
		attributes: {},
		data: {}
	},
	setup(r, { expose: i }) {
		let a = t(p_), o = r, l = S(() => a.data.value ?? o.data), u = f_(o), d = h();
		return s(() => {
			e(() => {
				var e;
				d.value = new Sh(u.value), (e = d.value) == null || e.setData(l.value), a.update(d.value);
			});
		}), c(() => {
			var e;
			(e = d.value) == null || e.destroy(), a.destroy();
		}), f(u, (e, t) => {
			var n;
			d_(e, t) || (n = d.value) == null || n.setConfig(u.value);
		}), f(l, () => {
			var e;
			(e = d.value) == null || e.setData(l.value);
		}), i({ component: d }), (e, t) => (n(), p("div", O_));
	}
}), A_ = /* @__PURE__ */ O({
	__name: "index",
	props: {
		component: {},
		tooltip: {},
		annotations: {},
		onRenderComplete: { type: Function },
		duration: {},
		margin: {},
		padding: {},
		sizing: {},
		width: {},
		height: {},
		svgDefs: {},
		ariaLabel: {},
		data: {}
	},
	setup(e, { expose: t }) {
		let a = e, { data: o } = E(a), s = f_(a), u, d = w({
			component: void 0,
			tooltip: void 0,
			annotations: void 0
		}), m = h(), g = () => {
			u || m.value && d.component && (u = new ul(m.value, { ..._(d) }, o.value));
		};
		return r(() => {
			var e;
			g(), (e = d.component) == null || e.config, u?.updateContainer({
				..._(s.value),
				..._(d)
			});
		}), f(o, () => {
			u ? u.setData(o.value, !0) : g();
		}), c(() => u?.destroy()), i(p_, {
			data: o,
			update: (e) => d.component = e,
			destroy: () => d.component = void 0
		}), i(m_, {
			data: o,
			update: (e) => d.tooltip = e,
			destroy: () => {
				d.tooltip = void 0;
			}
		}), i(__, {
			data: o,
			update: (e) => d.annotations = e,
			destroy: () => {
				d.annotations = void 0;
			}
		}), t({ component: u }), (e, t) => (n(), p("div", {
			"data-vis-single-container": "",
			ref_key: "elRef",
			ref: m,
			class: "unovis-single-container"
		}, [l(e.$slots, "default")], 512));
	}
}), j_ = { "data-vis-tooltip": "" };
_p.selectors;
//#endregion
//#region node_modules/@unovis/vue/components/tooltip/index.js
var M_ = /* @__PURE__ */ O({
	__name: "index",
	props: {
		components: {},
		container: {},
		followCursor: { type: Boolean },
		allowHover: { type: Boolean },
		horizontalPlacement: {},
		horizontalShift: {},
		verticalPlacement: {},
		verticalShift: {},
		triggers: {},
		attributes: {},
		className: {},
		hideDelay: {},
		showDelay: {},
		data: {}
	},
	setup(r, { expose: i }) {
		let a = t(m_), o = f_(r), l = h();
		return s(() => {
			e(() => {
				l.value = new _p(o.value), a.update(l.value);
			});
		}), c(() => {
			var e;
			(e = l.value) == null || e.destroy(), a.destroy();
		}), f(o, (e, t) => {
			var n;
			d_(e, t) || (n = l.value) == null || n.setConfig(o.value);
		}), i({ component: l }), (e, t) => (n(), p("div", j_));
	}
}), N_ = /* @__PURE__ */ O({
	__name: "index",
	props: {
		components: {},
		xScale: { type: [Object, Function] },
		xDomain: {},
		xDomainMinConstraint: {},
		xDomainMaxConstraint: {},
		xRange: {},
		yScale: { type: [Object, Function] },
		yDomain: {},
		yDomainMinConstraint: {},
		yDomainMaxConstraint: {},
		yRange: {},
		yDirection: {},
		xAxis: {},
		yAxis: {},
		autoMargin: { type: Boolean },
		tooltip: {},
		crosshair: {},
		preventEmptyDomain: { type: [Boolean, null] },
		scaleByDomain: { type: Boolean },
		annotations: {},
		clipPathExtend: {},
		onRenderComplete: { type: Function },
		duration: {},
		margin: {},
		padding: {},
		sizing: {},
		width: {},
		height: {},
		svgDefs: {},
		ariaLabel: {},
		data: {}
	},
	setup(e, { expose: t }) {
		let a = e, { data: o } = E(a), u = f_(a), d = h(), m = w({
			components: [],
			annotations: void 0,
			crosshair: void 0,
			tooltip: void 0,
			xAxis: void 0,
			yAxis: void 0
		}), g = h();
		return f(o, () => {
			d.value && d.value.setData(o.value, !0);
		}), r(() => {
			var e;
			m.components.map((e) => e.config), (e = d.value) == null || e.updateContainer({
				..._(u.value),
				..._(m)
			});
		}), s(() => {
			g.value && (d.value = new $f(g.value, { ..._(m) }, o.value));
		}), c(() => d.value?.destroy()), i(p_, {
			data: o,
			update: (e) => m.components = [...m.components, e],
			destroy: () => m.components = m.components?.filter((e) => !e.isDestroyed())
		}), i(g_, {
			data: o,
			update: (e) => m[`${e.config.type}Axis`] = e,
			destroy: (e) => {
				m[`${e}Axis`] = void 0;
			}
		}), i(h_, {
			data: o,
			update: (e) => m.crosshair = e,
			destroy: () => {
				m.crosshair = void 0;
			}
		}), i(m_, {
			data: o,
			update: (e) => m.tooltip = e,
			destroy: () => {
				m.tooltip = void 0;
			}
		}), i(__, {
			data: o,
			update: (e) => m.annotations = e,
			destroy: () => {
				m.annotations = void 0;
			}
		}), t({ component: d }), (e, t) => (n(), p("div", {
			"data-vis-xy-container": "",
			ref_key: "elRef",
			ref: g,
			class: "unovis-xy-container"
		}, [l(e.$slots, "default")], 512));
	}
}), P_ = {
	key: 0,
	class: "go-chart-cap"
}, F_ = { class: "t" }, I_ = {
	key: 0,
	class: "d"
}, L_ = {
	key: 1,
	class: "go-chart-range"
}, R_ = ["data-active", "onClick"], z_ = "\n  <linearGradient id=\"goFillDesktop\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n    <stop offset=\"5%\" stop-color=\"var(--color-desktop)\" stop-opacity=\"0.8\" />\n    <stop offset=\"95%\" stop-color=\"var(--color-desktop)\" stop-opacity=\"0.1\" />\n  </linearGradient>\n  <linearGradient id=\"goFillMobile\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n    <stop offset=\"5%\" stop-color=\"var(--color-mobile)\" stop-opacity=\"0.8\" />\n    <stop offset=\"95%\" stop-color=\"var(--color-mobile)\" stop-opacity=\"0.1\" />\n  </linearGradient>\n", B_ = /* @__PURE__ */ O({
	__name: "ChartUnovis",
	props: {
		type: {},
		raw: {},
		chartTitle: {},
		chartDescription: {}
	},
	setup(e) {
		let t = e, r = {
			desktop: "var(--chart-1)",
			mobile: "var(--chart-2)",
			chrome: "var(--chart-1)",
			safari: "var(--chart-2)",
			firefox: "var(--chart-3)",
			edge: "var(--chart-4)",
			other: "var(--chart-5)"
		}, i = {
			desktop: "Desktop",
			mobile: "Mobile",
			chrome: "Chrome",
			safari: "Safari",
			firefox: "Firefox",
			edge: "Edge",
			other: "Other"
		}, s = [
			{
				month: 1,
				monthLabel: "January",
				desktop: 186,
				mobile: 80
			},
			{
				month: 2,
				monthLabel: "February",
				desktop: 305,
				mobile: 200
			},
			{
				month: 3,
				monthLabel: "March",
				desktop: 237,
				mobile: 120
			},
			{
				month: 4,
				monthLabel: "April",
				desktop: 73,
				mobile: 190
			},
			{
				month: 5,
				monthLabel: "May",
				desktop: 209,
				mobile: 130
			},
			{
				month: 6,
				monthLabel: "June",
				desktop: 214,
				mobile: 140
			}
		], c = s.map((e) => ({
			date: new Date(2024, e.month - 1, 1),
			desktop: e.desktop
		})), l = [
			{
				browser: "chrome",
				visitors: 275
			},
			{
				browser: "safari",
				visitors: 200
			},
			{
				browser: "firefox",
				visitors: 187
			},
			{
				browser: "edge",
				visitors: 173
			},
			{
				browser: "other",
				visitors: 90
			}
		], u = [
			[222, 150],
			[97, 180],
			[167, 120],
			[242, 260],
			[373, 290],
			[301, 340],
			[245, 180],
			[409, 320],
			[59, 110],
			[261, 190],
			[327, 350],
			[292, 210],
			[342, 380],
			[137, 220],
			[120, 170],
			[138, 190],
			[446, 360],
			[364, 410],
			[243, 180],
			[89, 150],
			[137, 200],
			[224, 170],
			[138, 230],
			[387, 290],
			[215, 250],
			[75, 130],
			[383, 420],
			[122, 180],
			[315, 240],
			[454, 380],
			[165, 220],
			[293, 310],
			[247, 190],
			[385, 420],
			[481, 390],
			[498, 520],
			[388, 300],
			[149, 210],
			[227, 180],
			[293, 330],
			[335, 270],
			[197, 240],
			[197, 160],
			[448, 490],
			[473, 380],
			[338, 400],
			[499, 420],
			[315, 350],
			[235, 180],
			[177, 230],
			[82, 140],
			[81, 120],
			[252, 290],
			[294, 220],
			[201, 250],
			[213, 170],
			[420, 460],
			[233, 190],
			[78, 130],
			[340, 280],
			[178, 230],
			[178, 200],
			[470, 410],
			[103, 160],
			[439, 380],
			[88, 140],
			[294, 250],
			[323, 370],
			[385, 320],
			[438, 480],
			[155, 200],
			[92, 150],
			[492, 420],
			[81, 130],
			[426, 380],
			[307, 350],
			[371, 310],
			[475, 520],
			[107, 170],
			[341, 290],
			[408, 450],
			[169, 210],
			[317, 270],
			[480, 530],
			[132, 180],
			[141, 190],
			[434, 380],
			[448, 490],
			[149, 200],
			[103, 160],
			[446, 400]
		].map(([e, t], n) => {
			let r = /* @__PURE__ */ new Date("2024-04-01");
			return r.setDate(r.getDate() + n), {
				date: r,
				desktop: e,
				mobile: t
			};
		}), d = S(() => {
			if (!t.raw) return null;
			try {
				return JSON.parse(t.raw);
			} catch {
				return null;
			}
		}), f = h("90d"), g = S(() => {
			let e = f.value === "7d" ? 7 : f.value === "30d" ? 30 : 90, t = /* @__PURE__ */ new Date(/* @__PURE__ */ new Date("2024-06-30"));
			return t.setDate(t.getDate() - e), u.filter((e) => e.date >= t);
		}), _ = S(() => t.type.startsWith("area")), x = S(() => t.type === "area-interactive"), w = S(() => t.type === "area-gradient" || x.value), E = S(() => t.type === "bar"), O = S(() => t.type === "line"), k = S(() => t.type === "pie"), ee = S(() => d.value ? d.value : x.value ? g.value : E.value || O.value ? c : s), te = S(() => x.value || E.value || O.value), ne = S(() => {
			let e = {
				"--vis-tooltip-padding": "0px",
				"--vis-tooltip-background-color": "transparent",
				"--vis-tooltip-border-color": "transparent",
				"--vis-tooltip-shadow-color": "none",
				"--vis-tooltip-backdrop-filter": "none",
				"--vis-crosshair-circle-stroke-color": "#0000",
				"--vis-crosshair-line-stroke-width": x.value ? "0px" : "1px",
				"--vis-font-family": "var(--font-sans, ui-sans-serif, system-ui)"
			};
			for (let t of Object.keys(r)) e[`--color-${t}`] = r[t];
			return e;
		}), re = (e) => te.value ? e.date : e.month, j = (e) => e.desktop, ie = [(e) => e.mobile, (e) => e.desktop], M = [(e) => e.mobile, (e) => e.mobile + e.desktop], ae = (e, t) => w.value ? ["url(#goFillMobile)", "url(#goFillDesktop)"][t] : [r.mobile, r.desktop][t], oe = (e, t) => [r.mobile, r.desktop][t], N = (e, t) => x.value ? new Date(e).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric"
		}) : te.value ? new Date(e).toLocaleDateString("en-US", { month: "short" }) : s[t]?.monthLabel.slice(0, 3) ?? "";
		function se(e) {
			return `<span style="width:.55rem;height:.55rem;border-radius:2px;background:${r[e]};display:inline-block"></span>`;
		}
		function ce(e, t) {
			return `<div style="display:flex;align-items:center;gap:.4rem;justify-content:space-between">
    <span style="display:flex;align-items:center;gap:.4rem;color:var(--muted-foreground,#6b7280)">${se(e)}${i[e]}</span>
    <span style="font-variant-numeric:tabular-nums;font-weight:600">${t.toLocaleString()}</span>
  </div>`;
		}
		function le(e, t) {
			return `<div style="background:var(--background,#fff);border:1px solid var(--border,#e5e7eb);border-radius:8px;padding:.5rem .65rem;font-size:.78rem;box-shadow:0 4px 12px rgba(0,0,0,.08);min-width:9rem">
    ${e ? `<div style="font-weight:600;margin-bottom:.3rem">${e}</div>` : ""}${t}
  </div>`;
		}
		let ue = (e) => {
			if (!e) return "";
			let t = "";
			return x.value || E.value || O.value ? t = new Date(e.date).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric"
			}) : e.monthLabel && (t = e.monthLabel), E.value || O.value ? le(t, ce("desktop", e.desktop)) : le(t, ce("desktop", e.desktop) + ce("mobile", e.mobile));
		}, de = { [u_.selectors.segment]: (e) => {
			let t = e?.data?.browser;
			return t ? le("", ce(t, e.data.visitors)) : "";
		} }, fe = (e) => r[e.browser] ?? "var(--chart-1)", pe = (e) => e.visitors;
		return (t, i) => (n(), p("figure", {
			class: "go-chart-fig",
			style: m({
				margin: 0,
				...ne.value
			})
		}, [
			e.chartTitle ? (n(), p("figcaption", P_, [b("span", F_, D(e.chartTitle), 1), e.chartDescription ? (n(), p("span", I_, D(e.chartDescription), 1)) : v("", !0)])) : v("", !0),
			x.value ? (n(), p("div", L_, [(n(), p(T, null, o([
				"90d",
				"30d",
				"7d"
			], (e) => b("button", {
				key: e,
				type: "button",
				"data-active": f.value === e,
				onClick: (t) => f.value = e
			}, D(e === "90d" ? "3 meses" : e === "30d" ? "30 dias" : "7 dias"), 9, R_)), 64))])) : v("", !0),
			b("div", {
				class: "go-chart-box",
				style: m({ height: x.value || k.value ? "250px" : "220px" })
			}, [k.value ? (n(), y(C(A_), {
				key: 0,
				data: l,
				margin: {
					top: 20,
					bottom: 20
				}
			}, {
				default: a(() => [A(C(T_), {
					value: pe,
					color: fe,
					"arc-width": 34
				}), A(C(M_), { triggers: de })]),
				_: 1
			})) : (n(), y(C(N_), {
				key: 1,
				data: ee.value,
				"svg-defs": w.value ? z_ : void 0,
				margin: x.value ? { left: -40 } : { left: -20 },
				"y-domain": x.value ? [0, 1200] : [0, void 0]
			}, {
				default: a(() => [
					_.value ? (n(), p(T, { key: 0 }, [A(C(y_), {
						x: re,
						y: ie,
						color: ae,
						opacity: w.value ? .6 : .4
					}, null, 8, ["opacity"]), A(C(k_), {
						x: re,
						y: M,
						color: oe,
						"line-width": 1
					})], 64)) : E.value ? (n(), y(C(D_), {
						key: 1,
						x: re,
						y: j,
						color: r.desktop,
						"rounded-corners": 8
					}, null, 8, ["color"])) : O.value ? (n(), y(C(k_), {
						key: 2,
						x: re,
						y: j,
						color: r.desktop,
						"curve-type": C($).Natural
					}, null, 8, ["color", "curve-type"])) : v("", !0),
					A(C(x_), {
						type: "x",
						x: re,
						"tick-line": !1,
						"domain-line": !1,
						"grid-line": !1,
						"num-ticks": 6,
						"tick-format": N
					}),
					A(C(x_), {
						type: "y",
						"num-ticks": 3,
						"tick-line": !1,
						"domain-line": !1
					}),
					A(C(C_), {
						template: ue,
						color: oe
					}),
					A(C(M_))
				]),
				_: 1
			}, 8, [
				"data",
				"svg-defs",
				"margin",
				"y-domain"
			]))], 4)
		], 4));
	}
});
//#endregion
export { B_ as default };
