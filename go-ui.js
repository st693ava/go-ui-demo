//#region \0rolldown/runtime.js
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
};
//#endregion
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
/* @__NO_SIDE_EFFECTS__ */
function n(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var r = {}, i = [], a = () => {}, o = () => !1, s = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), c = (e) => e.startsWith("onUpdate:"), l = Object.assign, u = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, d = Object.prototype.hasOwnProperty, f = (e, t) => d.call(e, t), p = Array.isArray, m = (e) => w(e) === "[object Map]", h = (e) => w(e) === "[object Set]", g = (e) => w(e) === "[object Date]", _ = (e) => w(e) === "[object RegExp]", v = (e) => typeof e == "function", y = (e) => typeof e == "string", b = (e) => typeof e == "symbol", x = (e) => typeof e == "object" && !!e, S = (e) => (x(e) || v(e)) && v(e.then) && v(e.catch), C = Object.prototype.toString, w = (e) => C.call(e), T = (e) => w(e).slice(8, -1), ee = (e) => w(e) === "[object Object]", E = (e) => y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, te = /* @__PURE__ */ n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ne = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, re = /-\w/g, D = ne((e) => e.replace(re, (e) => e.slice(1).toUpperCase())), ie = /\B([A-Z])/g, ae = ne((e) => e.replace(ie, "-$1").toLowerCase()), oe = ne((e) => e.charAt(0).toUpperCase() + e.slice(1)), se = ne((e) => e ? `on${oe(e)}` : ""), O = (e, t) => !Object.is(e, t), ce = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, le = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ue = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, de = (e) => {
	let t = y(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, fe, pe = () => fe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}, me = /* @__PURE__ */ n("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
function he(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = y(r) ? ye(r) : he(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (y(e) || x(e)) return e;
}
var ge = /;(?![^(]*\))/g, _e = /:([^]+)/, ve = /\/\*[^]*?\*\//g;
function ye(e) {
	let t = {};
	return e.replace(ve, "").split(ge).forEach((e) => {
		if (e) {
			let n = e.split(_e);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function k(e) {
	let t = "";
	if (y(e)) t = e;
	else if (p(e)) for (let n = 0; n < e.length; n++) {
		let r = k(e[n]);
		r && (t += r + " ");
	}
	else if (x(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
function A(e) {
	if (!e) return null;
	let { class: t, style: n } = e;
	return t && !y(t) && (e.class = k(t)), n && (e.style = he(n)), e;
}
var be = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xe = /* @__PURE__ */ n(be);
be + "";
function Se(e) {
	return !!e || e === "";
}
function Ce(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = we(e[r], t[r]);
	return n;
}
function we(e, t) {
	if (e === t) return !0;
	let n = g(e), r = g(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = b(e), r = b(t), n || r) return e === t;
	if (n = p(e), r = p(t), n || r) return n && r ? Ce(e, t) : !1;
	if (n = x(e), r = x(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !we(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function Te(e, t) {
	return e.findIndex((e) => we(e, t));
}
var Ee = (e) => !!(e && e.__v_isRef === !0), De = (e) => y(e) ? e : e == null ? "" : p(e) || x(e) && (e.toString === C || !v(e.toString)) ? Ee(e) ? De(e.value) : JSON.stringify(e, Oe, 2) : String(e), Oe = (e, t) => Ee(t) ? Oe(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[ke(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => ke(e)) } : b(t) ? ke(t) : x(t) && !p(t) && !ee(t) ? String(t) : t, ke = (e, t = "") => b(e) ? `Symbol(${e.description ?? t})` : e;
function Ae(e) {
	return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
//#endregion
//#region node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var je, Me = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && je && (je.active ? (this.parent = je, this.index = (je.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = je;
			try {
				return je = this, e();
			} finally {
				je = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = je, je = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (je === this) je = this.prevScope;
			else {
				let e = je;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Ne(e) {
	return new Me(e);
}
function Pe() {
	return je;
}
function Fe(e, t = !1) {
	je && je.cleanups.push(e);
}
var Ie, Le = /* @__PURE__ */ new WeakSet(), Re = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, je && (je.active ? je.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Le.has(this) && (Le.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || He(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, rt(this), Ge(this);
		let e = Ie, t = $e;
		Ie = this, $e = !0;
		try {
			return this.fn();
		} finally {
			Ke(this), Ie = e, $e = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ye(e);
			this.deps = this.depsTail = void 0, rt(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Le.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		qe(this) && this.run();
	}
	get dirty() {
		return qe(this);
	}
}, ze = 0, Be, Ve;
function He(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ve, Ve = e;
		return;
	}
	e.next = Be, Be = e;
}
function Ue() {
	ze++;
}
function We() {
	if (--ze > 0) return;
	if (Ve) {
		let e = Ve;
		for (Ve = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Be;) {
		let t = Be;
		for (Be = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Ge(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ke(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ye(r), Xe(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function qe(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Je(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Je(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === it) || (e.globalVersion = it, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !qe(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = Ie, r = $e;
	Ie = e, $e = !0;
	try {
		Ge(e);
		let n = e.fn(e._value);
		(t.version === 0 || O(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		Ie = n, $e = r, Ke(e), e.flags &= -3;
	}
}
function Ye(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ye(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Xe(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function Ze(e, t) {
	e.effect instanceof Re && (e = e.effect.fn);
	let n = new Re(e);
	t && l(n, t);
	try {
		n.run();
	} catch (e) {
		throw n.stop(), e;
	}
	let r = n.run.bind(n);
	return r.effect = n, r;
}
function Qe(e) {
	e.effect.stop();
}
var $e = !0, et = [];
function tt() {
	et.push($e), $e = !1;
}
function nt() {
	let e = et.pop();
	$e = e === void 0 ? !0 : e;
}
function rt(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = Ie;
		Ie = void 0;
		try {
			t();
		} finally {
			Ie = e;
		}
	}
}
var it = 0, at = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, ot = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!Ie || !$e || Ie === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== Ie) t = this.activeLink = new at(Ie, this), Ie.deps ? (t.prevDep = Ie.depsTail, Ie.depsTail.nextDep = t, Ie.depsTail = t) : Ie.deps = Ie.depsTail = t, st(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = Ie.depsTail, t.nextDep = void 0, Ie.depsTail.nextDep = t, Ie.depsTail = t, Ie.deps === t && (Ie.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, it++, this.notify(e);
	}
	notify(e) {
		Ue();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			We();
		}
	}
};
function st(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) st(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var ct = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ Symbol(""), ut = /* @__PURE__ */ Symbol(""), dt = /* @__PURE__ */ Symbol("");
function ft(e, t, n) {
	if ($e && Ie) {
		let t = ct.get(e);
		t || ct.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new ot()), r.map = t, r.key = n), r.track();
	}
}
function pt(e, t, n, r, i, a) {
	let o = ct.get(e);
	if (!o) {
		it++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ue(), t === "clear") o.forEach(s);
	else {
		let i = p(e), a = i && E(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === dt || !b(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(dt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(lt)), m(e) && s(o.get(ut)));
				break;
			case "delete":
				i || (s(o.get(lt)), m(e) && s(o.get(ut)));
				break;
			case "set":
				m(e) && s(o.get(lt));
				break;
		}
	}
	We();
}
function mt(e, t) {
	let n = ct.get(e);
	return n && n.get(t);
}
function ht(e) {
	let t = /* @__PURE__ */ sn(e);
	return t === e ? t : (ft(t, "iterate", dt), /* @__PURE__ */ an(e) ? t : t.map(ln));
}
function gt(e) {
	return ft(e = /* @__PURE__ */ sn(e), "iterate", dt), e;
}
function _t(e, t) {
	return /* @__PURE__ */ rn(e) ? un(/* @__PURE__ */ nn(e) ? ln(t) : t) : ln(t);
}
var vt = {
	__proto__: null,
	[Symbol.iterator]() {
		return yt(this, Symbol.iterator, (e) => _t(this, e));
	},
	concat(...e) {
		return ht(this).concat(...e.map((e) => p(e) ? ht(e) : e));
	},
	entries() {
		return yt(this, "entries", (e) => (e[1] = _t(this, e[1]), e));
	},
	every(e, t) {
		return xt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return xt(this, "filter", e, t, (e) => e.map((e) => _t(this, e)), arguments);
	},
	find(e, t) {
		return xt(this, "find", e, t, (e) => _t(this, e), arguments);
	},
	findIndex(e, t) {
		return xt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return xt(this, "findLast", e, t, (e) => _t(this, e), arguments);
	},
	findLastIndex(e, t) {
		return xt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return xt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return Ct(this, "includes", e);
	},
	indexOf(...e) {
		return Ct(this, "indexOf", e);
	},
	join(e) {
		return ht(this).join(e);
	},
	lastIndexOf(...e) {
		return Ct(this, "lastIndexOf", e);
	},
	map(e, t) {
		return xt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return wt(this, "pop");
	},
	push(...e) {
		return wt(this, "push", e);
	},
	reduce(e, ...t) {
		return St(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return St(this, "reduceRight", e, t);
	},
	shift() {
		return wt(this, "shift");
	},
	some(e, t) {
		return xt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return wt(this, "splice", e);
	},
	toReversed() {
		return ht(this).toReversed();
	},
	toSorted(e) {
		return ht(this).toSorted(e);
	},
	toSpliced(...e) {
		return ht(this).toSpliced(...e);
	},
	unshift(...e) {
		return wt(this, "unshift", e);
	},
	values() {
		return yt(this, "values", (e) => _t(this, e));
	}
};
function yt(e, t, n) {
	let r = gt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ an(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var bt = Array.prototype;
function xt(e, t, n, r, i, a) {
	let o = gt(e), s = o !== e && !/* @__PURE__ */ an(e), c = o[t];
	if (c !== bt[t]) {
		let t = c.apply(e, a);
		return s ? ln(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, _t(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function St(e, t, n, r) {
	let i = gt(e), a = i !== e && !/* @__PURE__ */ an(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = _t(e, t)), n.call(this, t, _t(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? _t(e, c) : c;
}
function Ct(e, t, n) {
	let r = /* @__PURE__ */ sn(e);
	ft(r, "iterate", dt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ on(n[0]) ? (n[0] = /* @__PURE__ */ sn(n[0]), r[t](...n)) : i;
}
function wt(e, t, n = []) {
	tt(), Ue();
	let r = (/* @__PURE__ */ sn(e))[t].apply(e, n);
	return We(), nt(), r;
}
var Tt = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), Et = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(b));
function Dt(e) {
	b(e) || (e = String(e));
	let t = /* @__PURE__ */ sn(this);
	return ft(t, "has", e), t.hasOwnProperty(e);
}
var Ot = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Jt : qt : i ? Kt : Gt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = vt[t])) return e;
			if (t === "hasOwnProperty") return Dt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ dn(e) ? e : n);
		if ((b(t) ? Et.has(t) : Tt(t)) || (r || ft(e, "get", t), i)) return o;
		if (/* @__PURE__ */ dn(o)) {
			let e = a && E(t) ? o : o.value;
			return r && x(e) ? /* @__PURE__ */ $t(e) : e;
		}
		return x(o) ? r ? /* @__PURE__ */ $t(o) : /* @__PURE__ */ Zt(o) : o;
	}
}, kt = class extends Ot {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && E(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ rn(i);
			if (!/* @__PURE__ */ an(n) && !/* @__PURE__ */ rn(n) && (i = /* @__PURE__ */ sn(i), n = /* @__PURE__ */ sn(n)), !a && /* @__PURE__ */ dn(i) && !/* @__PURE__ */ dn(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ dn(e) ? e : r);
		return e === /* @__PURE__ */ sn(r) && (o ? O(n, i) && pt(e, "set", t, n, i) : pt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && pt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!b(t) || !Et.has(t)) && ft(e, "has", t), n;
	}
	ownKeys(e) {
		return ft(e, "iterate", p(e) ? "length" : lt), Reflect.ownKeys(e);
	}
}, At = class extends Ot {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, jt = /* @__PURE__ */ new kt(), Mt = /* @__PURE__ */ new At(), Nt = /* @__PURE__ */ new kt(!0), Pt = /* @__PURE__ */ new At(!0), Ft = (e) => e, It = (e) => Reflect.getPrototypeOf(e);
function Lt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ sn(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? Ft : t ? un : ln;
		return !t && ft(a, "iterate", c ? ut : lt), l(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function Rt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function zt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ sn(r), a = /* @__PURE__ */ sn(n);
			e || (O(n, a) && ft(i, "get", n), ft(i, "get", a));
			let { has: o } = It(i), s = t ? Ft : e ? un : ln;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && ft(/* @__PURE__ */ sn(t), "iterate", lt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ sn(n), i = /* @__PURE__ */ sn(t);
			return e || (O(t, i) && ft(r, "has", t), ft(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ sn(a), s = t ? Ft : e ? un : ln;
			return !e && ft(o, "iterate", lt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return l(n, e ? {
		add: Rt("add"),
		set: Rt("set"),
		delete: Rt("delete"),
		clear: Rt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ sn(this), r = It(n), i = /* @__PURE__ */ sn(e), a = !t && !/* @__PURE__ */ an(e) && !/* @__PURE__ */ rn(e) ? i : e;
			return r.has.call(n, a) || O(e, a) && r.has.call(n, e) || O(i, a) && r.has.call(n, i) || (n.add(a), pt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ an(n) && !/* @__PURE__ */ rn(n) && (n = /* @__PURE__ */ sn(n));
			let r = /* @__PURE__ */ sn(this), { has: i, get: a } = It(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ sn(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? O(n, s) && pt(r, "set", e, n, s) : pt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ sn(this), { has: n, get: r } = It(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ sn(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && pt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ sn(this), t = e.size !== 0, n = e.clear();
			return t && pt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Lt(r, e, t);
	}), n;
}
function Bt(e, t) {
	let n = zt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var Vt = { get: /* @__PURE__ */ Bt(!1, !1) }, Ht = { get: /* @__PURE__ */ Bt(!1, !0) }, Ut = { get: /* @__PURE__ */ Bt(!0, !1) }, Wt = { get: /* @__PURE__ */ Bt(!0, !0) }, Gt = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap();
function Yt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
function Xt(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Yt(T(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Zt(e) {
	return /* @__PURE__ */ rn(e) ? e : tn(e, !1, jt, Vt, Gt);
}
/* @__NO_SIDE_EFFECTS__ */
function Qt(e) {
	return tn(e, !1, Nt, Ht, Kt);
}
/* @__NO_SIDE_EFFECTS__ */
function $t(e) {
	return tn(e, !0, Mt, Ut, qt);
}
/* @__NO_SIDE_EFFECTS__ */
function en(e) {
	return tn(e, !0, Pt, Wt, Jt);
}
function tn(e, t, n, r, i) {
	if (!x(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let a = Xt(e);
	if (a === 0) return e;
	let o = i.get(e);
	if (o) return o;
	let s = new Proxy(e, a === 2 ? r : n);
	return i.set(e, s), s;
}
/* @__NO_SIDE_EFFECTS__ */
function nn(e) {
	return /* @__PURE__ */ rn(e) ? /* @__PURE__ */ nn(e.__v_raw) : !!(e && e.__v_isReactive);
}
/* @__NO_SIDE_EFFECTS__ */
function rn(e) {
	return !!(e && e.__v_isReadonly);
}
/* @__NO_SIDE_EFFECTS__ */
function an(e) {
	return !!(e && e.__v_isShallow);
}
/* @__NO_SIDE_EFFECTS__ */
function on(e) {
	return e ? !!e.__v_raw : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function sn(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ sn(t) : e;
}
function cn(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && le(e, "__v_skip", !0), e;
}
var ln = (e) => x(e) ? /* @__PURE__ */ Zt(e) : e, un = (e) => x(e) ? /* @__PURE__ */ $t(e) : e;
/* @__NO_SIDE_EFFECTS__ */
function dn(e) {
	return e ? e.__v_isRef === !0 : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function j(e) {
	return pn(e, !1);
}
/* @__NO_SIDE_EFFECTS__ */
function fn(e) {
	return pn(e, !0);
}
function pn(e, t) {
	return /* @__PURE__ */ dn(e) ? e : new mn(e, t);
}
var mn = class {
	constructor(e, t) {
		this.dep = new ot(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ sn(e), this._value = t ? e : ln(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ an(e) || /* @__PURE__ */ rn(e);
		e = n ? e : /* @__PURE__ */ sn(e), O(e, t) && (this._rawValue = e, this._value = n ? e : ln(e), this.dep.trigger());
	}
};
function hn(e) {
	e.dep && e.dep.trigger();
}
function M(e) {
	return /* @__PURE__ */ dn(e) ? e.value : e;
}
function gn(e) {
	return v(e) ? e() : M(e);
}
var _n = {
	get: (e, t, n) => t === "__v_raw" ? e : M(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ dn(i) && !/* @__PURE__ */ dn(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function vn(e) {
	return /* @__PURE__ */ nn(e) ? e : new Proxy(e, _n);
}
var yn = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new ot(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function bn(e) {
	return new yn(e);
}
/* @__NO_SIDE_EFFECTS__ */
function xn(e) {
	let t = p(e) ? Array(e.length) : {};
	for (let n in e) t[n] = Tn(e, n);
	return t;
}
var Sn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = b(t) ? t : String(t), this._raw = /* @__PURE__ */ sn(e);
		let r = !0, i = e;
		if (!p(e) || b(this._key) || !E(this._key)) do
			r = !/* @__PURE__ */ on(i) || /* @__PURE__ */ an(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = M(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ dn(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ dn(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return mt(this._raw, this._key);
	}
}, Cn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
/* @__NO_SIDE_EFFECTS__ */
function wn(e, t, n) {
	return /* @__PURE__ */ dn(e) ? e : v(e) ? new Cn(e) : x(e) && arguments.length > 1 ? Tn(e, t, n) : /* @__PURE__ */ j(e);
}
function Tn(e, t, n) {
	return new Sn(e, t, n);
}
var En = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new ot(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = it - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && Ie !== this) return He(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Je(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
/* @__NO_SIDE_EFFECTS__ */
function Dn(e, t, n = !1) {
	let r, i;
	return v(e) ? r = e : (r = e.get, i = e.set), new En(r, i, n);
}
var On = {
	GET: "get",
	HAS: "has",
	ITERATE: "iterate"
}, kn = {
	SET: "set",
	ADD: "add",
	DELETE: "delete",
	CLEAR: "clear"
}, An = {}, jn = /* @__PURE__ */ new WeakMap(), Mn = void 0;
function Nn() {
	return Mn;
}
function Pn(e, t = !1, n = Mn) {
	if (n) {
		let t = jn.get(n);
		t || jn.set(n, t = []), t.push(e);
	}
}
function Fn(e, t, n = r) {
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ an(e) || o === !1 || o === 0 ? In(e, 1) : In(e), m, h, g, _, y = !1, b = !1;
	if (/* @__PURE__ */ dn(e) ? (h = () => e.value, y = /* @__PURE__ */ an(e)) : /* @__PURE__ */ nn(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ nn(e) || /* @__PURE__ */ an(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ dn(e)) return e.value;
		if (/* @__PURE__ */ nn(e)) return f(e);
		if (v(e)) return d ? d(e, 2) : e();
	})) : h = v(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (g) {
			tt();
			try {
				g();
			} finally {
				nt();
			}
		}
		let t = Mn;
		Mn = m;
		try {
			return d ? d(e, 3, [_]) : e(_);
		} finally {
			Mn = t;
		}
	} : a, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => In(e(), t);
	}
	let x = Pe(), S = () => {
		m.stop(), x && x.active && u(x.effects, m);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			e(...t), S();
		};
	}
	let C = b ? Array(e.length).fill(An) : An, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (t) {
			let e = m.run();
			if (o || y || (b ? e.some((e, t) => O(e, C[t])) : O(e, C))) {
				g && g();
				let n = Mn;
				Mn = m;
				try {
					let n = [
						e,
						C === An ? void 0 : b && C[0] === An ? [] : C,
						_
					];
					C = e, d ? d(t, 3, n) : t(...n);
				} finally {
					Mn = n;
				}
			}
		} else m.run();
	};
	return l && l(w), m = new Re(h), m.scheduler = c ? () => c(w, !1) : w, _ = (e) => Pn(e, !1, m), g = m.onStop = () => {
		let e = jn.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			jn.delete(m);
		}
	}, t ? i ? w(!0) : C = m.run() : c ? c(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function In(e, t = Infinity, n) {
	if (t <= 0 || !x(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ dn(e)) In(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) In(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		In(e, t, n);
	});
	else if (ee(e)) {
		for (let r in e) In(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && In(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var Ln = [];
function Rn(e) {
	Ln.push(e);
}
function zn() {
	Ln.pop();
}
function Bn(e, t) {}
var Vn = {
	SETUP_FUNCTION: 0,
	0: "SETUP_FUNCTION",
	RENDER_FUNCTION: 1,
	1: "RENDER_FUNCTION",
	NATIVE_EVENT_HANDLER: 5,
	5: "NATIVE_EVENT_HANDLER",
	COMPONENT_EVENT_HANDLER: 6,
	6: "COMPONENT_EVENT_HANDLER",
	VNODE_HOOK: 7,
	7: "VNODE_HOOK",
	DIRECTIVE_HOOK: 8,
	8: "DIRECTIVE_HOOK",
	TRANSITION_HOOK: 9,
	9: "TRANSITION_HOOK",
	APP_ERROR_HANDLER: 10,
	10: "APP_ERROR_HANDLER",
	APP_WARN_HANDLER: 11,
	11: "APP_WARN_HANDLER",
	FUNCTION_REF: 12,
	12: "FUNCTION_REF",
	ASYNC_COMPONENT_LOADER: 13,
	13: "ASYNC_COMPONENT_LOADER",
	SCHEDULER: 14,
	14: "SCHEDULER",
	COMPONENT_UPDATE: 15,
	15: "COMPONENT_UPDATE",
	APP_UNMOUNT_CLEANUP: 16,
	16: "APP_UNMOUNT_CLEANUP"
}, Hn = {
	sp: "serverPrefetch hook",
	bc: "beforeCreate hook",
	c: "created hook",
	bm: "beforeMount hook",
	m: "mounted hook",
	bu: "beforeUpdate hook",
	u: "updated",
	bum: "beforeUnmount hook",
	um: "unmounted hook",
	a: "activated hook",
	da: "deactivated hook",
	ec: "errorCaptured hook",
	rtc: "renderTracked hook",
	rtg: "renderTriggered hook",
	0: "setup function",
	1: "render function",
	2: "watcher getter",
	3: "watcher callback",
	4: "watcher cleanup function",
	5: "native event handler",
	6: "component event handler",
	7: "vnode hook",
	8: "directive hook",
	9: "transition hook",
	10: "app errorHandler",
	11: "app warnHandler",
	12: "ref function",
	13: "async component loader",
	14: "scheduler flush",
	15: "component update",
	16: "app unmount cleanup function"
};
function Un(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Gn(e, t, n);
	}
}
function Wn(e, t, n, r) {
	if (v(e)) {
		let i = Un(e, t, n, r);
		return i && S(i) && i.catch((e) => {
			Gn(e, t, n);
		}), i;
	}
	if (p(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Wn(e[a], t, n, r));
		return i;
	}
}
function Gn(e, t, n, i = !0) {
	let a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || r;
	if (t) {
		let r = t.parent, i = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, a) === !1) return;
			}
			r = r.parent;
		}
		if (o) {
			tt(), Un(o, null, 10, [
				e,
				i,
				a
			]), nt();
			return;
		}
	}
	Kn(e, n, a, i, s);
}
function Kn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var qn = [], Jn = -1, Yn = [], Xn = null, Zn = 0, Qn = /* @__PURE__ */ Promise.resolve(), $n = null;
function er(e) {
	let t = $n || Qn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function tr(e) {
	let t = Jn + 1, n = qn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = qn[r], a = sr(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function nr(e) {
	if (!(e.flags & 1)) {
		let t = sr(e), n = qn[qn.length - 1];
		!n || !(e.flags & 2) && t >= sr(n) ? qn.push(e) : qn.splice(tr(t), 0, e), e.flags |= 1, rr();
	}
}
function rr() {
	$n ||= Qn.then(cr);
}
function ir(e) {
	p(e) ? Yn.push(...e) : Xn && e.id === -1 ? Xn.splice(Zn + 1, 0, e) : e.flags & 1 || (Yn.push(e), e.flags |= 1), rr();
}
function ar(e, t, n = Jn + 1) {
	for (; n < qn.length; n++) {
		let t = qn[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			qn.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function or(e) {
	if (Yn.length) {
		let e = [...new Set(Yn)].sort((e, t) => sr(e) - sr(t));
		if (Yn.length = 0, Xn) {
			Xn.push(...e);
			return;
		}
		for (Xn = e, Zn = 0; Zn < Xn.length; Zn++) {
			let e = Xn[Zn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Xn = null, Zn = 0;
	}
}
var sr = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function cr(e) {
	try {
		for (Jn = 0; Jn < qn.length; Jn++) {
			let e = qn[Jn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Un(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Jn < qn.length; Jn++) {
			let e = qn[Jn];
			e && (e.flags &= -2);
		}
		Jn = -1, qn.length = 0, or(e), $n = null, (qn.length || Yn.length) && cr(e);
	}
}
var lr, ur = [];
function dr(e, t) {
	lr = e, lr ? (lr.enabled = !0, ur.forEach(({ event: e, args: t }) => lr.emit(e, ...t)), ur = []) : typeof window < "u" && window.HTMLElement && !(window.navigator?.userAgent)?.includes("jsdom") ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
		dr(e, t);
	}), setTimeout(() => {
		lr || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ur = []);
	}, 3e3)) : ur = [];
}
var fr = null, pr = null;
function mr(e) {
	let t = fr;
	return fr = e, pr = e && e.type.__scopeId || null, t;
}
function hr(e) {
	pr = e;
}
function gr() {
	pr = null;
}
var _r = (e) => N;
function N(e, t = fr, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && cs(-1);
		let i = mr(t), a;
		try {
			a = e(...n);
		} finally {
			mr(i), r._d && cs(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function vr(e, t) {
	if (fr === null) return e;
	let n = Ws(fr), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = r] = t[e];
		a && (v(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && In(o), i.push({
			dir: a,
			instance: n,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function yr(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (tt(), Wn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), nt());
	}
}
function br(e, t) {
	if (Es) {
		let n = Es.provides, r = Es.parent && Es.parent.provides;
		r === n && (n = Es.provides = Object.create(r)), n[e] = t;
	}
}
function xr(e, t, n = !1) {
	let r = Ds();
	if (r || Xa) {
		let i = Xa ? Xa._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && v(t) ? t.call(r && r.proxy) : t;
	}
}
function Sr() {
	return !!(Ds() || Xa);
}
var Cr = /* @__PURE__ */ Symbol.for("v-scx"), wr = () => xr(Cr);
function Tr(e, t) {
	return Or(e, null, t);
}
function Er(e, t) {
	return Or(e, null, { flush: "post" });
}
function Dr(e, t) {
	return Or(e, null, { flush: "sync" });
}
function P(e, t, n) {
	return Or(e, t, n);
}
function Or(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Ns) {
		if (s === "sync") {
			let e = wr();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = Es;
	u.call = (e, t, n) => Wn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		Ao(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : nr(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = Fn(e, t, u);
	return Ns && (f ? f.push(h) : d && h()), h;
}
function kr(e, t, n) {
	let r = this.proxy, i = y(e) ? e.includes(".") ? Ar(r, e) : () => r[e] : e.bind(r, r), a;
	v(t) ? a = t : (a = t.handler, n = t);
	let o = As(this), s = Or(i, a.bind(r), n);
	return o(), s;
}
function Ar(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var jr = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ Symbol("_vte"), Nr = (e) => e.__isTeleport, Pr = (e) => e && (e.disabled || e.disabled === ""), Fr = (e) => e && (e.defer || e.defer === ""), Ir = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Lr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Rr = (e, t) => {
	let n = e && e.to;
	return y(n) ? t ? t(n) : null : n;
}, zr = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = Pr(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = Pr(e.props), r = e.target = Rr(e.props, m), a = Wr(r, e, h, p);
			r && (o !== "svg" && Ir(r) ? o = "svg" : o !== "mathml" && Lr(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), Ur(e, !1)));
		}, S = (e) => {
			let t = () => {
				jr.get(e) === t && (jr.delete(e), Pr(e.props) && (b(e, _(e.el) || n, e.anchor), Ur(e, !0)), x(e));
			};
			jr.set(e, t), Ao(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), Fr(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), Ur(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = jr.get(e);
			if (u) {
				u.flags |= 8, jr.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = Pr(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || Ir(p) ? o = "svg" : (o === "mathml" || Lr(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), Lo(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Br(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = Rr(t.props, m);
				e && Br(t, e, null, l, 0);
			} else g && Br(t, p, h, l, 1);
			Ur(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = a || !Pr(f), m = jr.get(e);
		if (m && (m.flags |= 8, jr.delete(e), p = !1), d && (i(l), i(u)), a && i(c), o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, p, !!i.dynamicChildren);
		}
	},
	move: Br,
	hydrate: Vr
};
function Br(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && r(e.targetAnchor, t, n);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !jr.has(e) && (!d || Pr(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function Vr(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
	function f(e, n) {
		let r = n;
		for (; r;) {
			if (r && r.nodeType === 8) {
				if (r.data === "teleport start anchor") t.targetStart = r;
				else if (r.data === "teleport anchor") {
					t.targetAnchor = r, e._lpa = t.targetAnchor && o(t.targetAnchor);
					break;
				}
			}
			r = o(r);
		}
	}
	function p(e, t) {
		t.anchor = d(o(e), t, s(e), n, r, i, a);
	}
	let m = t.target = Rr(t.props, c), h = Pr(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || Wr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || Wr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), Ur(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var Hr = zr;
function Ur(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function Wr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[Mr] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var Gr = /* @__PURE__ */ Symbol("_leaveCb"), Kr = /* @__PURE__ */ Symbol("_enterCb");
function qr() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return I(() => {
		e.isMounted = !0;
	}), Ji(() => {
		e.isUnmounting = !0;
	}), e;
}
var Jr = [Function, Array], Yr = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: Jr,
	onEnter: Jr,
	onAfterEnter: Jr,
	onEnterCancelled: Jr,
	onBeforeLeave: Jr,
	onLeave: Jr,
	onAfterLeave: Jr,
	onLeaveCancelled: Jr,
	onBeforeAppear: Jr,
	onAppear: Jr,
	onAfterAppear: Jr,
	onAppearCancelled: Jr
}, Xr = (e) => {
	let t = e.subTree;
	return t.component ? Xr(t.component) : t;
}, Zr = {
	name: "BaseTransition",
	props: Yr,
	setup(e, { slots: t }) {
		let n = Ds(), r = qr();
		return () => {
			let i = t.default && ai(t.default(), !0), a = i && i.length ? Qr(i) : n.subTree ? G() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ sn(e), { mode: s } = o;
			if (r.isLeaving) return ni(a);
			let c = ri(a);
			if (!c) return ni(a);
			let l = ti(c, o, r, n, (e) => l = e);
			c.type !== ns && ii(c, l);
			let u = n.subTree && ri(n.subTree);
			if (u && u.type !== ns && !ds(u, c) && Xr(n).type !== ns) {
				let e = ti(u, o, r, n);
				if (ii(u, e), s === "out-in" && c.type !== ns) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, ni(a);
				s === "in-out" && c.type !== ns ? e.delayLeave = (e, t, n) => {
					let i = ei(r, u);
					i[String(u.key)] = u, e[Gr] = () => {
						t(), e[Gr] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u &&= void 0;
			return a;
		};
	}
};
function Qr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== ns) {
			t = n;
			break;
		}
	}
	return t;
}
var $r = Zr;
function ei(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function ti(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: f, onLeave: m, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: _, onAppear: v, onAfterAppear: y, onAppearCancelled: b } = t, x = String(e.key), S = ei(n, e), C = (e, t) => {
		e && Wn(e, r, 9, t);
	}, w = (e, t) => {
		let n = t[1];
		C(e, t), p(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, T = {
		mode: o,
		persisted: s,
		beforeEnter(t) {
			let r = c;
			if (!n.isMounted) if (a) r = _ || c;
			else return;
			t[Gr] && t[Gr](!0);
			let i = S[x];
			i && ds(e, i) && i.el[Gr] && i.el[Gr](), C(r, [t]);
		},
		enter(t) {
			if (S[x] === e) return;
			let r = l, i = u, o = d;
			if (!n.isMounted) if (a) r = v || l, i = y || u, o = b || d;
			else return;
			let s = !1;
			t[Kr] = (e) => {
				s || (s = !0, C(e ? o : i, [t]), T.delayedLeave && T.delayedLeave(), t[Kr] = void 0);
			};
			let c = t[Kr].bind(null, !1);
			r ? w(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[Kr] && t[Kr](!0), n.isUnmounting) return r();
			C(f, [t]);
			let a = !1;
			t[Gr] = (n) => {
				a || (a = !0, r(), C(n ? g : h, [t]), t[Gr] = void 0, S[i] === e && delete S[i]);
			};
			let o = t[Gr].bind(null, !1);
			S[i] = e, m ? w(m, [t, o]) : o();
		},
		clone(e) {
			let a = ti(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return T;
}
function ni(e) {
	if (Pi(e)) return e = gs(e), e.children = null, e;
}
function ri(e) {
	if (!Pi(e)) return Nr(e.type) && e.children ? Qr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && v(n.default)) return n.default();
	}
}
function ii(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, ii(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ai(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === R ? (o.patchFlag & 128 && i++, r = r.concat(ai(o.children, t, s))) : (t || o.type !== ns) && r.push(s == null ? o : gs(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
/* @__NO_SIDE_EFFECTS__ */
function F(e, t) {
	return v(e) ? l({ name: e.name }, t, { setup: e }) : e;
}
function oi() {
	let e = Ds();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function si(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function ci(e) {
	let t = Ds(), n = /* @__PURE__ */ fn(null);
	if (t) {
		let i = t.refs === r ? t.refs = {} : t.refs;
		Object.defineProperty(i, e, {
			enumerable: !0,
			get: () => n.value,
			set: (e) => n.value = e
		});
	}
	return n;
}
function li(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var ui = /* @__PURE__ */ new WeakMap();
function di(e, t, n, i, a = !1) {
	if (p(e)) {
		e.forEach((e, r) => di(e, t && (p(t) ? t[r] : t), n, i, a));
		return;
	}
	if (ji(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && di(e, t, n, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? Ws(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, _ = /* @__PURE__ */ sn(g), b = g === r ? o : (e) => li(h, e) ? !1 : f(_, e), x = (e, t) => !(t && li(h, t));
	if (m != null && m !== d) {
		if (fi(t), y(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ dn(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (v(d)) Un(d, l, 12, [c, h]);
	else {
		let t = y(d), r = /* @__PURE__ */ dn(d);
		if (t || r) {
			let i = () => {
				if (e.f) {
					let n = t ? b(d) ? g[d] : h[d] : x(d) || !e.k ? d.value : h[e.k];
					if (a) p(n) && u(n, s);
					else if (p(n)) n.includes(s) || n.push(s);
					else if (t) h[d] = [s], b(d) && (g[d] = h[d]);
					else {
						let t = [s];
						x(d, e.k) && (d.value = t), e.k && (h[e.k] = t);
					}
				} else t ? (h[d] = c, b(d) && (g[d] = c)) : r && (x(d, e.k) && (d.value = c), e.k && (h[e.k] = c));
			};
			if (c) {
				let t = () => {
					i(), ui.delete(e);
				};
				t.id = -1, ui.set(e, t), Ao(t, n);
			} else fi(e), i();
		}
	}
}
function fi(e) {
	let t = ui.get(e);
	t && (t.flags |= 8, ui.delete(e));
}
var pi = !1, mi = () => {
	pi ||= (console.error("Hydration completed but contains mismatches."), !0);
}, hi = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", gi = (e) => e.namespaceURI.includes("MathML"), _i = (e) => {
	if (e.nodeType === 1) {
		if (hi(e)) return "svg";
		if (gi(e)) return "mathml";
	}
}, vi = (e) => e.nodeType === 8;
function yi(e) {
	let { mt: t, p: n, o: { patchProp: r, createText: i, nextSibling: a, parentNode: o, remove: c, insert: l, createComment: u } } = e, d = (e, t) => {
		if (!t.hasChildNodes()) {
			n(null, e, t), or(), t._vnode = e;
			return;
		}
		f(t.firstChild, e, null, null, null), or(), t._vnode = e;
	}, f = (n, r, s, c, u, d = !1) => {
		d ||= !!r.dynamicChildren;
		let b = vi(n) && n.data === "[", x = () => g(n, r, s, c, u, b), { type: S, ref: C, shapeFlag: w, patchFlag: T } = r, ee = n.nodeType;
		r.el = n, T === -2 && (d = !1, r.dynamicChildren = null);
		let E = null;
		switch (S) {
			case ts:
				ee === 3 ? (n.data !== r.children && (mi(), n.data = r.children), E = a(n)) : r.children === "" ? (l(r.el = i(""), o(n), n), E = n) : E = x();
				break;
			case ns:
				y(n) ? (E = a(n), v(r.el = n.content.firstChild, n, s)) : E = ee !== 8 || b ? x() : a(n);
				break;
			case rs:
				if (b && (n = a(n), ee = n.nodeType), ee === 1 || ee === 3) {
					E = n;
					let e = !r.children.length;
					for (let t = 0; t < r.staticCount; t++) e && (r.children += E.nodeType === 1 ? E.outerHTML : E.data), t === r.staticCount - 1 && (r.anchor = E), E = a(E);
					return b ? a(E) : E;
				} else x();
				break;
			case R:
				E = b ? h(n, r, s, c, u, d) : x();
				break;
			default: if (w & 1) E = (ee !== 1 || r.type.toLowerCase() !== n.tagName.toLowerCase()) && !y(n) ? x() : p(n, r, s, c, u, d);
			else if (w & 6) {
				r.slotScopeIds = u;
				let e = o(n);
				if (E = b ? _(n) : vi(n) && n.data === "teleport start" ? _(n, n.data, "teleport end") : a(n), t(r, e, null, s, c, _i(e), d), ji(r) && !r.type.__asyncResolved) {
					let t;
					b ? (t = U(R), t.anchor = E ? E.previousSibling : e.lastChild) : t = n.nodeType === 3 ? _s("") : U("div"), t.el = n, r.component.subTree = t;
				}
			} else w & 64 ? E = ee === 8 ? r.type.hydrate(n, r, s, c, u, d, e, m) : x() : w & 128 && (E = r.type.hydrate(n, r, s, c, _i(o(n)), u, d, e, f));
		}
		return C != null && di(C, null, c, r), E;
	}, p = (e, t, n, i, a, o) => {
		o ||= !!t.dynamicChildren;
		let { type: l, props: u, patchFlag: d, shapeFlag: f, dirs: p, transition: h } = t, g = l === "input" || l === "option";
		if (g || d !== -1) {
			p && yr(t, null, n, "created");
			let l = !1;
			if (y(e)) {
				l = Io(null, h) && n && n.vnode.props && n.vnode.props.appear;
				let r = e.content.firstChild;
				if (l) {
					let e = r.getAttribute("class");
					e && (r.$cls = e), h.beforeEnter(r);
				}
				v(r, e, n), t.el = e = r;
			}
			if (f & 16 && !(u && (u.innerHTML || u.textContent))) {
				let r = m(e.firstChild, t, e, n, i, a, o);
				for (; r;) {
					Si(e, 1) || mi();
					let t = r;
					r = r.nextSibling, c(t);
				}
			} else if (f & 8) {
				let n = t.children;
				n[0] === "\n" && (e.tagName === "PRE" || e.tagName === "TEXTAREA") && (n = n.slice(1));
				let { textContent: r } = e;
				r !== n && r !== n.replace(/\r\n|\r/g, "\n") && (Si(e, 0) || mi(), e.textContent = t.children);
			}
			if (u) {
				if (g || !o || d & 48) {
					let t = e.tagName.includes("-");
					for (let i in u) (g && (i.endsWith("value") || i === "indeterminate") || s(i) && !te(i) || i[0] === "." || t && !te(i)) && r(e, i, null, u[i], void 0, n);
				} else if (u.onClick) r(e, "onClick", null, u.onClick, void 0, n);
				else if (d & 4 && /* @__PURE__ */ nn(u.style)) for (let e in u.style) u.style[e];
			}
			let _;
			(_ = u && u.onVnodeBeforeMount) && Ss(_, n, t), p && yr(t, null, n, "beforeMount"), ((_ = u && u.onVnodeMounted) || p || l) && Qo(() => {
				_ && Ss(_, n, t), l && h.enter(e), p && yr(t, null, n, "mounted");
			}, i);
		}
		return e.nextSibling;
	}, m = (e, t, r, o, s, c, u) => {
		u ||= !!t.dynamicChildren;
		let d = t.children, p = d.length;
		for (let t = 0; t < p; t++) {
			let m = u ? d[t] : d[t] = ys(d[t]), h = m.type === ts;
			e ? (h && !u && t + 1 < p && ys(d[t + 1]).type === ts && (l(i(e.data.slice(m.children.length)), r, a(e)), e.data = m.children), e = f(e, m, o, s, c, u)) : h && !m.children ? l(m.el = i(""), r) : (Si(r, 1) || mi(), n(null, m, r, null, o, s, _i(r), c));
		}
		return e;
	}, h = (e, t, n, r, i, s) => {
		let { slotScopeIds: c } = t;
		c && (i = i ? i.concat(c) : c);
		let d = o(e), f = m(a(e), t, d, n, r, i, s);
		return f && vi(f) && f.data === "]" ? a(t.anchor = f) : (mi(), l(t.anchor = u("]"), d, f), f);
	}, g = (e, t, r, i, s, l) => {
		if (Si(e.parentElement, 1) || mi(), t.el = null, l) {
			let t = _(e);
			for (;;) {
				let n = a(e);
				if (n && n !== t) c(n);
				else break;
			}
		}
		let u = a(e), d = o(e);
		return c(e), n(null, t, d, u, r, i, _i(d), s), r && (r.vnode.el = t.el, uo(r, t.el)), u;
	}, _ = (e, t = "[", n = "]") => {
		let r = 0;
		for (; e;) if (e = a(e), e && vi(e) && (e.data === t && r++, e.data === n)) {
			if (r === 0) return a(e);
			r--;
		}
		return e;
	}, v = (e, t, n) => {
		let r = t.parentNode;
		r && r.replaceChild(e, t);
		let i = n;
		for (; i;) i.vnode.el === t && (i.vnode.el = i.subTree.el = e), i = i.parent;
	}, y = (e) => e.nodeType === 1 && e.tagName === "TEMPLATE";
	return [d, f];
}
var bi = "data-allow-mismatch", xi = {
	0: "text",
	1: "children",
	2: "class",
	3: "style",
	4: "attribute"
};
function Si(e, t) {
	if (t === 0 || t === 1) for (; e && !e.hasAttribute(bi);) e = e.parentElement;
	let n = e && e.getAttribute(bi);
	if (n == null) return !1;
	if (n === "") return !0;
	{
		let e = n.split(",");
		return t === 0 && e.includes("children") ? !0 : e.includes(xi[t]);
	}
}
var Ci = pe().requestIdleCallback || ((e) => setTimeout(e, 1)), wi = pe().cancelIdleCallback || ((e) => clearTimeout(e)), Ti = (e = 1e4) => (t) => {
	let n = Ci(t, { timeout: e });
	return () => wi(n);
};
function Ei(e) {
	let { top: t, left: n, bottom: r, right: i } = e.getBoundingClientRect(), { innerHeight: a, innerWidth: o } = window;
	return (t > 0 && t < a || r > 0 && r < a) && (n > 0 && n < o || i > 0 && i < o);
}
var Di = (e) => (t, n) => {
	let r = new IntersectionObserver((e) => {
		for (let n of e) if (n.isIntersecting) {
			r.disconnect(), t();
			break;
		}
	}, e);
	return n((e) => {
		if (e instanceof Element) {
			if (Ei(e)) return t(), r.disconnect(), !1;
			r.observe(e);
		}
	}), () => r.disconnect();
}, Oi = (e) => (t) => {
	if (e) {
		let n = matchMedia(e);
		if (n.matches) t();
		else return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
	}
}, ki = (e = []) => (t, n) => {
	y(e) && (e = [e]);
	let r = !1, i = (e) => {
		r || (r = !0, a(), t(), e.target.dispatchEvent(new e.constructor(e.type, e)));
	}, a = () => {
		n((t) => {
			for (let n of e) t.removeEventListener(n, i);
		});
	};
	return n((t) => {
		for (let n of e) t.addEventListener(n, i, { once: !0 });
	}), a;
};
function Ai(e, t) {
	if (vi(e) && e.data === "[") {
		let n = 1, r = e.nextSibling;
		for (; r;) {
			if (r.nodeType === 1) {
				if (t(r) === !1) break;
			} else if (vi(r)) if (r.data === "]") {
				if (--n === 0) break;
			} else r.data === "[" && n++;
			r = r.nextSibling;
		}
	} else t(e);
}
var ji = (e) => !!e.type.__asyncLoader;
/* @__NO_SIDE_EFFECTS__ */
function Mi(e) {
	v(e) && (e = { loader: e });
	let { loader: t, loadingComponent: n, errorComponent: r, delay: i = 200, hydrate: a, timeout: o, suspensible: s = !0, onError: c } = e, l = null, u, d = 0, f = () => (d++, l = null, p()), p = () => {
		let e;
		return l || (e = l = t().catch((e) => {
			if (e = e instanceof Error ? e : Error(String(e)), c) return new Promise((t, n) => {
				c(e, () => t(f()), () => n(e), d + 1);
			});
			throw e;
		}).then((t) => e !== l && l ? l : (t && (t.__esModule || t[Symbol.toStringTag] === "Module") && (t = t.default), u = t, t)));
	};
	return /* @__PURE__ */ F({
		name: "AsyncComponentWrapper",
		__asyncLoader: p,
		__asyncHydrate(e, t, n) {
			let r = !1;
			(t.bu ||= []).push(() => r = !0);
			let i = () => {
				r || n();
			}, o = a ? () => {
				let n = a(i, (t) => Ai(e, t));
				n && (t.bum ||= []).push(n);
			} : i;
			u ? o() : p().then(() => !t.isUnmounted && o());
		},
		get __asyncResolved() {
			return u;
		},
		setup() {
			let e = Es;
			if (si(e), u) return () => Ni(u, e);
			let t = (t) => {
				l = null, Gn(t, e, 13, !r);
			};
			if (s && e.suspense || Ns) return p().then((t) => () => Ni(t, e)).catch((e) => (t(e), () => r ? U(r, { error: e }) : null));
			let a = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j(), d = /* @__PURE__ */ j(!!i);
			return i && setTimeout(() => {
				d.value = !1;
			}, i), o != null && setTimeout(() => {
				if (!a.value && !c.value) {
					let e = /* @__PURE__ */ Error(`Async component timed out after ${o}ms.`);
					t(e), c.value = e;
				}
			}, o), p().then(() => {
				a.value = !0, e.parent && Pi(e.parent.vnode) && e.parent.update();
			}).catch((e) => {
				t(e), c.value = e;
			}), () => {
				if (a.value && u) return Ni(u, e);
				if (c.value && r) return U(r, { error: c.value });
				if (n && !d.value) return Ni(n, e);
			};
		}
	});
}
function Ni(e, t) {
	let { ref: n, props: r, children: i, ce: a } = t.vnode, o = U(e, r, i);
	return o.ref = n, o.ce = a, delete t.vnode.ce, o;
}
var Pi = (e) => e.type.__isKeepAlive, Fi = {
	name: "KeepAlive",
	__isKeepAlive: !0,
	props: {
		include: [
			String,
			RegExp,
			Array
		],
		exclude: [
			String,
			RegExp,
			Array
		],
		max: [String, Number]
	},
	setup(e, { slots: t }) {
		let n = Ds(), r = n.ctx;
		if (!r.renderer) return () => {
			let e = t.default && t.default();
			return e && e.length === 1 ? e[0] : e;
		};
		let i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = null, s = n.suspense, { renderer: { p: c, m: l, um: u, o: { createElement: d } } } = r, f = d("div");
		r.activate = (e, t, n, r, i) => {
			let a = e.component;
			l(e, t, n, 0, s), c(a.vnode, e, t, n, a, s, r, e.slotScopeIds, i), Ao(() => {
				a.isDeactivated = !1, a.a && ce(a.a);
				let t = e.props && e.props.onVnodeMounted;
				t && Ss(t, a.parent, e);
			}, s);
		}, r.deactivate = (e) => {
			let t = e.component;
			Bo(t.m), Bo(t.a), l(e, f, null, 1, s), Ao(() => {
				t.da && ce(t.da);
				let n = e.props && e.props.onVnodeUnmounted;
				n && Ss(n, t.parent, e), t.isDeactivated = !0;
			}, s);
		};
		function p(e) {
			Vi(e), u(e, n, s, !0);
		}
		function m(e) {
			i.forEach((t, n) => {
				let r = Gs(ji(t) ? t.type.__asyncResolved || {} : t.type);
				r && !e(r) && h(n);
			});
		}
		function h(e) {
			let t = i.get(e);
			t && (!o || !ds(t, o)) ? p(t) : o && Vi(o), i.delete(e), a.delete(e);
		}
		P(() => [e.include, e.exclude], ([e, t]) => {
			e && m((t) => Ii(e, t)), t && m((e) => !Ii(t, e));
		}, {
			flush: "post",
			deep: !0
		});
		let g = null, _ = () => {
			g != null && (Ho(n.subTree.type) ? Ao(() => {
				i.set(g, Hi(n.subTree));
			}, n.subTree.suspense) : i.set(g, Hi(n.subTree)));
		};
		return I(_), qi(_), Ji(() => {
			i.forEach((e) => {
				let { subTree: t, suspense: r } = n, i = Hi(t);
				if (e.type === i.type && e.key === i.key) {
					Vi(i);
					let e = i.component.da;
					e && Ao(e, r);
					return;
				}
				p(e);
			});
		}), () => {
			if (g = null, !t.default) return o = null;
			let n = t.default(), r = n[0];
			if (n.length > 1) return o = null, n;
			if (!us(r) || !(r.shapeFlag & 4) && !(r.shapeFlag & 128)) return o = null, r;
			let s = Hi(r);
			if (s.type === ns) return o = null, s;
			let c = s.type, l = Gs(ji(s) ? s.type.__asyncResolved || {} : c), { include: u, exclude: d, max: f } = e;
			if (u && (!l || !Ii(u, l)) || d && l && Ii(d, l)) return s.shapeFlag &= -257, o = s, r;
			let p = s.key == null ? c : s.key, m = i.get(p);
			return s.el && (s = gs(s), r.shapeFlag & 128 && (r.ssContent = s)), g = p, m ? (s.el = m.el, s.component = m.component, s.transition && ii(s, s.transition), s.shapeFlag |= 512, a.delete(p), a.add(p)) : (a.add(p), f && a.size > parseInt(f, 10) && h(a.values().next().value)), s.shapeFlag |= 256, o = s, Ho(r.type) ? r : s;
		};
	}
};
function Ii(e, t) {
	return p(e) ? e.some((e) => Ii(e, t)) : y(e) ? e.split(",").includes(t) : _(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Li(e, t) {
	zi(e, "a", t);
}
function Ri(e, t) {
	zi(e, "da", t);
}
function zi(e, t, n = Es) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Ui(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Pi(e.parent.vnode) && Bi(r, t, n, e), e = e.parent;
	}
}
function Bi(e, t, n, r) {
	let i = Ui(t, e, r, !0);
	Yi(() => {
		u(r[t], i);
	}, n);
}
function Vi(e) {
	e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Hi(e) {
	return e.shapeFlag & 128 ? e.ssContent : e;
}
function Ui(e, t, n = Es, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			tt();
			let i = As(n), a = Wn(t, n, e, r);
			return i(), nt(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Wi = (e) => (t, n = Es) => {
	(!Ns || e === "sp") && Ui(e, (...e) => t(...e), n);
}, Gi = Wi("bm"), I = Wi("m"), Ki = Wi("bu"), qi = Wi("u"), Ji = Wi("bum"), Yi = Wi("um"), Xi = Wi("sp"), Zi = Wi("rtg"), Qi = Wi("rtc");
function $i(e, t = Es) {
	Ui("ec", e, t);
}
var ea = "components", ta = "directives";
function na(e, t) {
	return oa(ea, e, !0, t) || e;
}
var ra = /* @__PURE__ */ Symbol.for("v-ndc");
function ia(e) {
	return y(e) ? oa(ea, e, !1) || e : e || ra;
}
function aa(e) {
	return oa(ta, e);
}
function oa(e, t, n = !0, r = !1) {
	let i = fr || Es;
	if (i) {
		let n = i.type;
		if (e === ea) {
			let e = Gs(n, !1);
			if (e && (e === t || e === D(t) || e === oe(D(t)))) return n;
		}
		let a = sa(i[e] || n[e], t) || sa(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function sa(e, t) {
	return e && (e[t] || e[D(t)] || e[oe(D(t))]);
}
function ca(e, t, n, r) {
	let i, a = n && n[r], o = p(e);
	if (o || y(e)) {
		let n = o && /* @__PURE__ */ nn(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ an(e), s = /* @__PURE__ */ rn(e), e = gt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? un(ln(e[n])) : ln(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (x(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
	else {
		let n = Object.keys(e);
		i = Array(n.length);
		for (let r = 0, o = n.length; r < o; r++) {
			let o = n[r];
			i[r] = t(e[o], o, r, a && a[r]);
		}
	}
	else i = [];
	return n && (n[r] = i), i;
}
function la(e, t) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (p(r)) for (let t = 0; t < r.length; t++) e[r[t].name] = r[t].fn;
		else r && (e[r.name] = r.key ? (...e) => {
			let t = r.fn(...e);
			return t && (t.key = r.key), t;
		} : r.fn);
	}
	return e;
}
function L(e, t, n = {}, r, i) {
	if (fr.ce || fr.parent && ji(fr.parent) && fr.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), z(), V(R, null, [U("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), z();
	let o = a && ua(a(n)), s = n.key || o && o.key, c = V(R, { key: (s && !b(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function ua(e) {
	return e.some((e) => us(e) ? !(e.type === ns || e.type === R && !ua(e.children)) : !0) ? e : null;
}
function da(e, t) {
	let n = {};
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : se(r)] = e[r];
	return n;
}
var fa = (e) => e ? Ms(e) ? Ws(e) : fa(e.parent) : null, pa = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => fa(e.parent),
	$root: (e) => fa(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => La(e),
	$forceUpdate: (e) => e.f ||= () => {
		nr(e.update);
	},
	$nextTick: (e) => e.n ||= er.bind(e.proxy),
	$watch: (e) => kr.bind(e)
}), ma = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), ha = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return i[t];
				case 2: return a[t];
				case 4: return n[t];
				case 3: return o[t];
			}
			else if (ma(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else Ma && (s[t] = 0);
		}
		let u = pa[t], d, p;
		if (u) return t === "$attrs" && ft(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return ma(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || ma(t, c) || f(o, c) || f(i, c) || f(pa, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
}, ga = /* @__PURE__ */ l({}, ha, {
	get(e, t) {
		if (t !== Symbol.unscopables) return ha.get(e, t, e);
	},
	has(e, t) {
		return t[0] !== "_" && !me(t);
	}
});
function _a() {
	return null;
}
function va() {
	return null;
}
function ya(e) {}
function ba(e) {}
function xa() {
	return null;
}
function Sa() {}
function Ca(e, t) {
	return null;
}
function wa() {
	return Ea("useSlots").slots;
}
function Ta() {
	return Ea("useAttrs").attrs;
}
function Ea(e) {
	let t = Ds();
	return t.setupContext ||= Us(t);
}
function Da(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function Oa(e, t) {
	let n = Da(e);
	for (let e in t) {
		if (e.startsWith("__skip")) continue;
		let r = n[e];
		r ? p(r) || v(r) ? r = n[e] = {
			type: r,
			default: t[e]
		} : r.default = t[e] : r === null && (r = n[e] = { default: t[e] }), r && t[`__skip_${e}`] && (r.skipFactory = !0);
	}
	return n;
}
function ka(e, t) {
	return !e || !t ? e || t : p(e) && p(t) ? e.concat(t) : l({}, Da(e), Da(t));
}
function Aa(e, t) {
	let n = {};
	for (let r in e) t.includes(r) || Object.defineProperty(n, r, {
		enumerable: !0,
		get: () => e[r]
	});
	return n;
}
function ja(e) {
	let t = Ds(), n = Ns, r = e();
	js(), n && ks(!1);
	let i = () => {
		As(t), n && ks(!0);
	}, a = () => {
		Ds() !== t && t.scope.off(), js(), n && ks(!1);
	};
	return S(r) && (r = r.catch((e) => {
		throw i(), Promise.resolve().then(() => Promise.resolve().then(a)), e;
	})), [r, () => {
		i(), Promise.resolve().then(a);
	}];
}
var Ma = !0;
function Na(e) {
	let t = La(e), n = e.proxy, r = e.ctx;
	Ma = !1, t.beforeCreate && Fa(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: _, deactivated: y, beforeDestroy: b, beforeUnmount: S, destroyed: C, unmounted: w, render: T, renderTracked: ee, renderTriggered: E, errorCaptured: te, serverPrefetch: ne, expose: re, inheritAttrs: D, components: ie, directives: ae, filters: oe } = t;
	if (u && Pa(u, r, null), s) for (let e in s) {
		let t = s[e];
		v(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		x(t) && (e.data = /* @__PURE__ */ Zt(t));
	}
	if (Ma = !0, o) for (let e in o) {
		let t = o[e], i = q({
			get: v(t) ? t.bind(n, n) : v(t.get) ? t.get.bind(n, n) : a,
			set: !v(t) && v(t.set) ? t.set.bind(n) : a
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (c) for (let e in c) Ia(c[e], r, n, e);
	if (l) {
		let e = v(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			br(t, e[t]);
		});
	}
	d && Fa(d, e, "c");
	function se(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (se(Gi, f), se(I, m), se(Ki, h), se(qi, g), se(Li, _), se(Ri, y), se($i, te), se(Qi, ee), se(Zi, E), se(Ji, S), se(Yi, w), se(Xi, ne), p(re)) if (re.length) {
		let t = e.exposed ||= {};
		re.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	T && e.render === a && (e.render = T), D != null && (e.inheritAttrs = D), ie && (e.components = ie), ae && (e.directives = ae), ne && si(e);
}
function Pa(e, t, n = a) {
	p(e) && (e = Ha(e));
	for (let n in e) {
		let r = e[n], i;
		i = x(r) ? "default" in r ? xr(r.from || n, r.default, !0) : xr(r.from || n) : xr(r), /* @__PURE__ */ dn(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Fa(e, t, n) {
	Wn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ia(e, t, n, r) {
	let i = r.includes(".") ? Ar(n, r) : () => n[r];
	if (y(e)) {
		let n = t[e];
		v(n) && P(i, n);
	} else if (v(e)) P(i, e.bind(n));
	else if (x(e)) if (p(e)) e.forEach((e) => Ia(e, t, n, r));
	else {
		let r = v(e.handler) ? e.handler.bind(n) : t[e.handler];
		v(r) && P(i, r, e);
	}
}
function La(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Ra(c, e, o, !0)), Ra(c, t, o)), x(t) && a.set(t, c), c;
}
function Ra(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Ra(e, a, n, !0), i && i.forEach((t) => Ra(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = za[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var za = {
	data: Ba,
	props: Ga,
	emits: Ga,
	methods: Wa,
	computed: Wa,
	beforeCreate: Ua,
	created: Ua,
	beforeMount: Ua,
	mounted: Ua,
	beforeUpdate: Ua,
	updated: Ua,
	beforeDestroy: Ua,
	beforeUnmount: Ua,
	destroyed: Ua,
	unmounted: Ua,
	activated: Ua,
	deactivated: Ua,
	errorCaptured: Ua,
	serverPrefetch: Ua,
	components: Wa,
	directives: Wa,
	watch: Ka,
	provide: Ba,
	inject: Va
};
function Ba(e, t) {
	return t ? e ? function() {
		return l(v(e) ? e.call(this, this) : e, v(t) ? t.call(this, this) : t);
	} : t : e;
}
function Va(e, t) {
	return Wa(Ha(e), Ha(t));
}
function Ha(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Ua(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Wa(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ga(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), Da(e), Da(t ?? {})) : t;
}
function Ka(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Ua(e[r], t[r]);
	return n;
}
function qa() {
	return {
		app: null,
		config: {
			isNativeTag: o,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var Ja = 0;
function Ya(e, t) {
	return function(n, r = null) {
		v(n) || (n = l({}, n)), r != null && !x(r) && (r = null);
		let i = qa(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Ja++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Zs,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && v(e.install) ? (a.add(e), e.install(c, ...t)) : v(e) && (a.add(e), e(c, ...t))), c;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), c;
			},
			component(e, t) {
				return t ? (i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (!s) {
					let u = c._ceVNode || U(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Ws(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (Wn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = Xa;
				Xa = c;
				try {
					return e();
				} finally {
					Xa = t;
				}
			}
		};
		return c;
	};
}
var Xa = null;
function Za(e, t, n = r) {
	let i = Ds(), a = D(t), o = ae(t), s = Qa(e, a), c = bn((s, c) => {
		let l, u = r, d;
		return Dr(() => {
			let t = e[a];
			O(l, t) && (l = t, c());
		}), {
			get() {
				return s(), n.get ? n.get(l) : l;
			},
			set(e) {
				let s = n.set ? n.set(e) : e;
				if (!O(s, l) && !(u !== r && O(e, u))) return;
				let f = i.vnode.props;
				f && (t in f || a in f || o in f) && (`onUpdate:${t}` in f || `onUpdate:${a}` in f || `onUpdate:${o}` in f) || (l = e, c()), i.emit(`update:${t}`, s), O(e, s) && O(e, u) && !O(s, d) && c(), u = e, d = s;
			}
		};
	});
	return c[Symbol.iterator] = () => {
		let e = 0;
		return { next() {
			return e < 2 ? {
				value: e++ ? s || r : c,
				done: !1
			} : { done: !0 };
		} };
	}, c;
}
var Qa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${D(t)}Modifiers`] || e[`${ae(t)}Modifiers`];
function $a(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && Qa(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => y(e) ? e.trim() : e)), s.number && (a = n.map(ue)));
	let c, l = i[c = se(t)] || i[c = se(D(t))];
	!l && o && (l = i[c = se(ae(t))]), l && Wn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, Wn(u, e, 6, a);
	}
}
var eo = /* @__PURE__ */ new WeakMap();
function to(e, t, n = !1) {
	let r = n ? eo : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!v(e)) {
		let r = (e) => {
			let n = to(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (x(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), x(e) && r.set(e, o), o);
}
function no(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, ae(t)) || f(e, t));
}
function ro(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = mr(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = ys(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = ys(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : ao(s);
		}
	} catch (t) {
		is.length = 0, Gn(t, e, 1), v = U(ns);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = oo(y, a)), b = gs(b, y, !1, !0));
	}
	return n.dirs && (b = gs(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && ii(b, n.transition), v = b, mr(_), v;
}
function io(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (us(r)) {
			if (r.type !== ns || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var ao = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, oo = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function so(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? co(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (lo(o, r, n) && !no(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? co(r, o, l) : !0 : !!o;
	return !1;
}
function co(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (lo(t, e, a) && !no(n, a)) return !0;
	}
	return !1;
}
function lo(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && x(r) && x(i) ? !we(r, i) : r !== i;
}
function uo({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var fo = {}, po = () => Object.create(fo), mo = (e) => Object.getPrototypeOf(e) === fo;
function ho(e, t, n, r = !1) {
	let i = {}, a = po();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), _o(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Qt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function go(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ sn(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (no(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = D(o);
					i[t] = vo(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		_o(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = ae(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = vo(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && pt(e.attrs, "set", "");
}
function _o(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (te(r)) continue;
		let l = t[r], u;
		a && f(a, u = D(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : no(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ sn(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = vo(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function vo(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && v(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = As(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ae(n)) && (r = !0));
	}
	return r;
}
var yo = /* @__PURE__ */ new WeakMap();
function bo(e, t, n = !1) {
	let a = n ? yo : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!v(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = bo(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return x(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = D(s[e]);
		xo(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = D(e);
		if (xo(t)) {
			let n = s[e], r = c[t] = p(n) || v(n) ? { type: n } : l({}, n), i = r.type, a = !1, o = !0;
			if (p(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = v(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				} else n === "String" && (o = !1);
			}
			else a = v(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || f(r, "default")) && u.push(t);
		}
	}
	let m = [c, u];
	return x(e) && a.set(e, m), m;
}
function xo(e) {
	return e[0] !== "$" && !te(e);
}
var So = (e) => e === "_" || e === "_ctx" || e === "$stable", Co = (e) => p(e) ? e.map(ys) : [ys(e)], wo = (e, t, n) => {
	if (t._n) return t;
	let r = N((...e) => Co(t(...e)), n);
	return r._c = !1, r;
}, To = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (So(n)) continue;
		let i = e[n];
		if (v(i)) t[n] = wo(n, i, r);
		else if (i != null) {
			let e = Co(i);
			t[n] = () => e;
		}
	}
}, Eo = (e, t) => {
	let n = Co(t);
	e.slots.default = () => n;
}, Do = (e, t, n) => {
	for (let r in t) (n || !So(r)) && (e[r] = t[r]);
}, Oo = (e, t, n) => {
	let r = e.slots = po();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Do(r, t, n), n && le(r, "_", e, !0)) : To(t, r);
	} else t && Eo(e, t);
}, ko = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : Do(a, t, n) : (o = !t.$stable, To(t, a)), s = t;
	} else t && (Eo(e, t), s = { default: 1 });
	if (o) for (let e in a) !So(e) && s[e] == null && delete a[e];
}, Ao = Qo;
function jo(e) {
	return No(e);
}
function Mo(e) {
	return No(e, yi);
}
function No(e, t) {
	let n = pe();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ds(e, t) && (r = k(e), he(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case ts:
				y(e, t, n, r);
				break;
			case ns:
				b(e, t, n, r);
				break;
			case rs:
				e ?? x(t, n, r, o);
				break;
			case R:
				ie(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? ae(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, xe);
		}
		u != null && i ? di(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && di(e.ref, null, a, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) T(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ne(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, T = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && E(e.children, d, null, r, i, Po(e, a), s, u), _ && yr(e, null, r, "created"), ee(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !te(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Ss(f, r, e);
		}
		_ && yr(e, null, r, "beforeMount");
		let v = Io(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ao(() => {
			try {
				f && Ss(f, r, e), v && g.enter(d), _ && yr(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ee = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Ho(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ee(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, E = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? bs(e[l]) : ys(e[l]), t, n, r, i, a, o, s);
	}, ne = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && Fo(n, !1), (g = h.onVnodeBeforeUpdate) && Ss(g, n, t, e), f && yr(t, e, n, "beforeUpdate"), n && Fo(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? re(e.dynamicChildren, d, l, n, i, Po(t, a), o) : s || ue(e, t, l, null, n, i, Po(t, a), o, !1), u > 0) {
			if (u & 16) D(l, m, h, n, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], i = m[r], o = h[r];
					(o !== i || r === "value") && c(l, r, i, o, a, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && D(l, m, h, n, a);
		((g = h.onVnodeUpdated) || f) && Ao(() => {
			g && Ss(g, n, t, e), f && yr(t, e, n, "updated");
		}, i);
	}, re = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === R || !ds(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, D = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !te(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (te(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, ie = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), E(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (re(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Lo(e, t, !0)) : ue(e, t, n, f, i, a, s, c, l);
	}, ae = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : oe(t, n, r, i, a, o, c) : se(e, t, c);
	}, oe = (e, t, n, r, i, a, o) => {
		let s = e.component = Ts(e, r, i);
		if (Pi(e) && (s.ctx.renderer = xe), Ps(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, O, o), !e.el) {
				let r = s.subTree = U(ns);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else O(s, e, t, n, i, a, o);
	}, se = (e, t, n) => {
		let r = t.component = e.component;
		if (so(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			le(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, O = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = zo(e);
					if (n) {
						t && (t.el = c.el, le(e, t, o)), n.asyncDep.then(() => {
							Ao(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Fo(e, !1), t ? (t.el = c.el, le(e, t, o)) : t = c, n && ce(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Ss(d, s, t, c), Fo(e, !0);
				let f = ro(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), k(p), e, i, a), t.el = f.el, u === null && uo(e, f.el), r && Ao(r, i), (d = t.props && t.props.onVnodeUpdated) && Ao(() => Ss(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = ji(t);
				if (Fo(e, !1), l && ce(l), !m && (o = c && c.onVnodeBeforeMount) && Ss(o, d, t), Fo(e, !0), s && Ce) {
					let t = () => {
						e.subTree = ro(e), Ce(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ro(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Ao(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ao(() => Ss(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && ji(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ao(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Re(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => nr(u), Fo(e, !0), l();
	}, le = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, go(e, t.props, r, n), ko(e, t.children, n), tt(), ar(e), nt();
	}, ue = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				fe(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				de(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ye(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? fe(l, d, n, r, i, a, o, s, c) : ye(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && E(d, n, r, i, a, o, s, c));
	}, de = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? bs(t[p]) : ys(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ye(e, a, o, !0, !1, f) : E(t, n, r, a, o, s, c, l, f);
	}, fe = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? bs(t[u]) : ys(t[u]);
			if (ds(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? bs(t[p]) : ys(t[p]);
			if (ds(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? bs(t[u]) : ys(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) he(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? bs(t[u]) : ys(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					he(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && ds(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? he(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? Ro(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Vo(f) : r;
				C[u] === 0 ? v(null, i, n, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? me(i, n, p, 2) : _--);
			}
		}
	}, me = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			me(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, xe);
			return;
		}
		if (c === R) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === rs) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.beforeEnter(a), o(a, t, n), Ao(() => l.enter(a), i);
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				a._isLeaving && a[Gr](!0), r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, he = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (tt(), di(s, null, n, e, !0), nt()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !ji(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Ss(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && yr(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, xe, r) : l && !l.hasOnce && (a !== R || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === R && d & 384 || !i && u & 16) && ye(c, t, n), r && ge(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ao(() => {
			_ && Ss(_, t, e), h && yr(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ge = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === R) {
			_e(n, r);
			return;
		}
		if (t === rs) {
			C(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, _e = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ve = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Bo(c), Bo(l), r && ce(r), i.stop(), a && (a.flags |= 8, he(o, e, t, n)), s && Ao(s, t), Ao(() => {
			e.isUnmounted = !0;
		}, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) he(e[o], t, n, r, i);
	}, k = (e) => {
		if (e.shapeFlag & 6) return k(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Mr];
		return n ? h(n) : t;
	}, A = !1, be = (e, t, n) => {
		let r;
		e == null ? t._vnode && (he(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, A ||= (A = !0, ar(r), or(), !1);
	}, xe = {
		p: v,
		um: he,
		m: me,
		r: ge,
		mt: oe,
		mc: E,
		pc: ue,
		pbc: re,
		n: k,
		o: e
	}, Se, Ce;
	return t && ([Se, Ce] = t(xe)), {
		render: be,
		hydrate: Se,
		createApp: Ya(be, Se)
	};
}
function Po({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Fo({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Io(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Lo(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = bs(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Lo(t, a)), a.type === ts && (a.patchFlag === -1 && (a = i[e] = bs(a)), a.el = t.el), a.type === ns && !a.el && (a.el = t.el);
	}
}
function Ro(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function zo(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : zo(t);
}
function Bo(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Vo(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Vo(t.subTree) : null;
}
var Ho = (e) => e.__isSuspense, Uo = 0, Wo = {
	name: "Suspense",
	__isSuspense: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		if (e == null) Ko(t, n, r, i, a, o, s, c, l);
		else {
			if (a && a.deps > 0 && !e.suspense.isInFallback) {
				t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
				return;
			}
			qo(e, t, n, r, i, o, s, c, l);
		}
	},
	hydrate: Yo,
	normalize: Xo
};
function Go(e, t) {
	let n = e.props && e.props[t];
	v(n) && n();
}
function Ko(e, t, n, r, i, a, o, s, c) {
	let { p: l, o: { createElement: u } } = c, d = u("div"), f = e.suspense = Jo(e, i, r, t, d, n, a, o, s, c);
	l(null, f.pendingBranch = e.ssContent, d, null, r, f, a, o), f.deps > 0 ? (Go(e, "onPending"), Go(e, "onFallback"), l(null, e.ssFallback, t, n, r, null, a, o), $o(f, e.ssFallback)) : f.resolve(!1, !0);
}
function qo(e, t, n, r, i, a, o, s, { p: c, um: l, o: { createElement: u } }) {
	let d = t.suspense = e.suspense;
	d.vnode = t, t.el = e.el;
	let f = t.ssContent, p = t.ssFallback, { activeBranch: m, pendingBranch: h, isInFallback: g, isHydrating: _ } = d;
	if (h) d.pendingBranch = f, ds(h, f) ? (c(h, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 ? d.resolve() : g && (_ || (c(m, p, n, r, i, null, a, o, s), $o(d, p)))) : (d.pendingId = Uo++, _ ? (d.isHydrating = !1, d.activeBranch = h) : l(h, i, d), d.deps = 0, d.effects.length = 0, d.hiddenContainer = u("div"), g ? (c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 ? d.resolve() : (c(m, p, n, r, i, null, a, o, s), $o(d, p))) : m && ds(m, f) ? (c(m, f, n, r, i, d, a, o, s), d.resolve(!0)) : (c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 && d.resolve()));
	else if (m && ds(m, f)) c(m, f, n, r, i, d, a, o, s), $o(d, f);
	else if (Go(t, "onPending"), d.pendingBranch = f, f.shapeFlag & 512 ? d.pendingId = f.component.suspenseId : d.pendingId = Uo++, c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0) d.resolve();
	else {
		let { timeout: e, pendingId: t } = d;
		e > 0 ? setTimeout(() => {
			d.pendingId === t && d.fallback(p);
		}, e) : e === 0 && d.fallback(p);
	}
}
function Jo(e, t, n, r, i, a, o, s, c, l, u = !1) {
	let { p: d, m: f, um: p, n: m, o: { parentNode: h, remove: g } } = l, _, v = es(e);
	v && t && t.pendingBranch && (_ = t.pendingId, t.deps++);
	let y = e.props ? de(e.props.timeout) : void 0, b = a, x = {
		vnode: e,
		parent: t,
		parentComponent: n,
		namespace: o,
		container: r,
		hiddenContainer: i,
		deps: 0,
		pendingId: Uo++,
		timeout: typeof y == "number" ? y : -1,
		activeBranch: null,
		isFallbackMountPending: !1,
		pendingBranch: null,
		isInFallback: !u,
		isHydrating: u,
		isUnmounted: !1,
		effects: [],
		resolve(e = !1, n = !1) {
			let { vnode: r, activeBranch: i, pendingBranch: o, pendingId: s, effects: c, parentComponent: l, container: u, isInFallback: d } = x, g = !1;
			if (x.isHydrating) x.isHydrating = !1;
			else if (!e) {
				g = i && o.transition && o.transition.mode === "out-in";
				let e = !1;
				g && (i.transition.afterLeave = () => {
					s === x.pendingId && (f(o, u, a === b && !e ? m(i) : a, 0), ir(c), d && r.ssFallback && (r.ssFallback.el = null));
				}), i && !x.isFallbackMountPending && (h(i.el) === u && (a = m(i), e = !0), p(i, l, x, !0), !g && d && r.ssFallback && Ao(() => r.ssFallback.el = null, x)), g || f(o, u, a, 0);
			}
			x.isFallbackMountPending = !1, $o(x, o), x.pendingBranch = null, x.isInFallback = !1;
			let y = x.parent, S = !1;
			for (; y;) {
				if (y.pendingBranch) {
					y.effects.push(...c), S = !0;
					break;
				}
				y = y.parent;
			}
			!S && !g && ir(c), x.effects = [], v && t && t.pendingBranch && _ === t.pendingId && (t.deps--, t.deps === 0 && !n && t.resolve()), Go(r, "onResolve");
		},
		fallback(e) {
			if (!x.pendingBranch) return;
			let { vnode: t, activeBranch: n, parentComponent: r, container: i, namespace: a } = x;
			Go(t, "onFallback");
			let o = m(n), l = () => {
				x.isFallbackMountPending = !1, x.isInFallback && (d(null, e, i, o, r, null, a, s, c), $o(x, e));
			}, u = e.transition && e.transition.mode === "out-in";
			u && (x.isFallbackMountPending = !0, n.transition.afterLeave = l), x.isInFallback = !0, p(n, r, null, !0), u || l();
		},
		move(e, t, n) {
			x.activeBranch && f(x.activeBranch, e, t, n), x.container = e;
		},
		next() {
			return x.activeBranch && m(x.activeBranch);
		},
		registerDep(e, t, n) {
			let r = !!x.pendingBranch;
			r && x.deps++;
			let i = e.vnode.el;
			e.asyncDep.catch((t) => {
				Gn(t, e, 0);
			}).then((a) => {
				if (e.isUnmounted || x.isUnmounted || x.pendingId !== e.suspenseId) return;
				js(), e.asyncResolved = !0;
				let { vnode: s } = e;
				Is(e, a, !1), i && (s.el = i);
				let c = !i && e.subTree.el;
				t(e, s, h(i || e.subTree.el), i ? null : m(e.subTree), x, o, n), c && (s.placeholder = null, g(c)), uo(e, s.el), r && --x.deps === 0 && x.resolve();
			});
		},
		unmount(e, t) {
			x.isUnmounted = !0, x.activeBranch && p(x.activeBranch, n, e, t), x.pendingBranch && p(x.pendingBranch, n, e, t);
		}
	};
	return x;
}
function Yo(e, t, n, r, i, a, o, s, c) {
	let l = t.suspense = Jo(t, r, n, e.parentNode, document.createElement("div"), null, i, a, o, s, !0), u = c(e, l.pendingBranch = t.ssContent, n, l, a, o);
	return l.deps === 0 && l.resolve(!1, !0), u;
}
function Xo(e) {
	let { shapeFlag: t, children: n } = e, r = t & 32;
	e.ssContent = Zo(r ? n.default : n), e.ssFallback = r ? Zo(n.fallback) : U(ns);
}
function Zo(e) {
	let t;
	if (v(e)) {
		let n = ss && e._c;
		n && (e._d = !1, z()), e = e(), n && (e._d = !0, t = as, os());
	}
	return p(e) && (e = io(e)), e = ys(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((t) => t !== e)), e;
}
function Qo(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : ir(e);
}
function $o(e, t) {
	e.activeBranch = t;
	let { vnode: n, parentComponent: r } = e, i = t.el;
	for (; !i && t.component;) t = t.component.subTree, i = t.el;
	n.el = i, r && r.subTree === n && (r.vnode.el = i, uo(r, i));
}
function es(e) {
	let t = e.props && e.props.suspensible;
	return t != null && t !== !1;
}
var R = /* @__PURE__ */ Symbol.for("v-fgt"), ts = /* @__PURE__ */ Symbol.for("v-txt"), ns = /* @__PURE__ */ Symbol.for("v-cmt"), rs = /* @__PURE__ */ Symbol.for("v-stc"), is = [], as = null;
function z(e = !1) {
	is.push(as = e ? null : []);
}
function os() {
	is.pop(), as = is[is.length - 1] || null;
}
var ss = 1;
function cs(e, t = !1) {
	ss += e, e < 0 && as && t && (as.hasOnce = !0);
}
function ls(e) {
	return e.dynamicChildren = ss > 0 ? as || i : null, os(), ss > 0 && as && as.push(e), e;
}
function B(e, t, n, r, i, a) {
	return ls(H(e, t, n, r, i, a, !0));
}
function V(e, t, n, r, i) {
	return ls(U(e, t, n, r, i, !0));
}
function us(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ds(e, t) {
	return e.type === t.type && e.key === t.key;
}
function fs(e) {}
var ps = ({ key: e }) => e ?? null, ms = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : y(e) || /* @__PURE__ */ dn(e) || v(e) ? {
	i: fr,
	r: e,
	k: t,
	f: !!n
} : e);
function H(e, t = null, n = null, r = 0, i = null, a = e === R ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ps(t),
		ref: t && ms(t),
		scopeId: pr,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: fr
	};
	return s ? (xs(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= y(n) ? 8 : 16), ss > 0 && !o && as && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && as.push(c), c;
}
var U = hs;
function hs(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === ra) && (e = ns), us(e)) {
		let r = gs(e, t, !0);
		return n && xs(r, n), ss > 0 && !a && as && (r.shapeFlag & 6 ? as[as.indexOf(e)] = r : as.push(r)), r.patchFlag = -2, r;
	}
	if (Ks(e) && (e = e.__vccOpts), t) {
		t = W(t);
		let { class: e, style: n } = t;
		e && !y(e) && (t.class = k(e)), x(n) && (/* @__PURE__ */ on(n) && !p(n) && (n = l({}, n)), t.style = he(n));
	}
	let o = y(e) ? 1 : Ho(e) ? 128 : Nr(e) ? 64 : x(e) ? 4 : v(e) ? 2 : 0;
	return H(e, t, n, r, i, o, a, !0);
}
function W(e) {
	return e ? /* @__PURE__ */ on(e) || mo(e) ? l({}, e) : e : null;
}
function gs(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? K(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ps(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(ms(t)) : [a, ms(t)] : ms(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== R ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && gs(e.ssContent),
		ssFallback: e.ssFallback && gs(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && ii(u, c.clone(u)), u;
}
function _s(e = " ", t = 0) {
	return U(ts, null, e, t);
}
function vs(e, t) {
	let n = U(rs, null, e);
	return n.staticCount = t, n;
}
function G(e = "", t = !1) {
	return t ? (z(), V(ns, null, e)) : U(ns, null, e);
}
function ys(e) {
	return e == null || typeof e == "boolean" ? U(ns) : p(e) ? U(R, null, e.slice()) : us(e) ? bs(e) : U(ts, null, String(e));
}
function bs(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : gs(e);
}
function xs(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), xs(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !mo(t) ? t._ctx = fr : r === 3 && fr && (fr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else v(t) ? (t = {
		default: t,
		_ctx: fr
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [_s(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function K(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = k([t.class, r.class]));
		else if (e === "style") t.style = he([t.style, r.style]);
		else if (s(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(p(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !c(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Ss(e, t, n, r = null) {
	Wn(e, t, 7, [n, r]);
}
var Cs = qa(), ws = 0;
function Ts(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || Cs, o = {
		uid: ws++,
		vnode: e,
		type: i,
		parent: t,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new Me(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(a.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: bo(i, a),
		emitsOptions: to(i, a),
		emit: null,
		emitted: null,
		propsDefaults: r,
		inheritAttrs: i.inheritAttrs,
		ctx: r,
		data: r,
		props: r,
		attrs: r,
		slots: r,
		refs: r,
		setupState: r,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = $a.bind(null, o), e.ce && e.ce(o), o;
}
var Es = null, Ds = () => Es || fr, Os, ks;
{
	let e = pe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Os = t("__VUE_INSTANCE_SETTERS__", (e) => Es = e), ks = t("__VUE_SSR_SETTERS__", (e) => Ns = e);
}
var As = (e) => {
	let t = Es;
	return Os(e), e.scope.on(), () => {
		e.scope.off(), Os(t);
	};
}, js = () => {
	Es && Es.scope.off(), Os(null);
};
function Ms(e) {
	return e.vnode.shapeFlag & 4;
}
var Ns = !1;
function Ps(e, t = !1, n = !1) {
	t && ks(t);
	let { props: r, children: i } = e.vnode, a = Ms(e);
	ho(e, r, a, t), Oo(e, i, n || t);
	let o = a ? Fs(e, t) : void 0;
	return t && ks(!1), o;
}
function Fs(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ha);
	let { setup: r } = n;
	if (r) {
		tt();
		let n = e.setupContext = r.length > 1 ? Us(e) : null, i = As(e), a = Un(r, e, 0, [e.props, n]), o = S(a);
		if (nt(), i(), (o || e.sp) && !ji(e) && si(e), o) {
			if (a.then(js, js), t) return a.then((n) => {
				Is(e, n, t);
			}).catch((t) => {
				Gn(t, e, 0);
			});
			e.asyncDep = a;
		} else Is(e, a, t);
	} else Vs(e, t);
}
function Is(e, t, n) {
	v(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : x(t) && (e.setupState = vn(t)), Vs(e, n);
}
var Ls, Rs;
function zs(e) {
	Ls = e, Rs = (e) => {
		e.render._rc && (e.withProxy = new Proxy(e.ctx, ga));
	};
}
var Bs = () => !Ls;
function Vs(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Ls && !r.render) {
			let t = r.template || La(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r, s = l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o);
				r.render = Ls(t, s);
			}
		}
		e.render = r.render || a, Rs && Rs(e);
	}
	{
		let t = As(e);
		tt();
		try {
			Na(e);
		} finally {
			nt(), t();
		}
	}
}
var Hs = { get(e, t) {
	return ft(e, "get", ""), e[t];
} };
function Us(e) {
	return {
		attrs: new Proxy(e.attrs, Hs),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ws(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(vn(cn(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in pa) return pa[n](e);
		},
		has(e, t) {
			return t in e || t in pa;
		}
	}) : e.proxy;
}
function Gs(e, t = !0) {
	return v(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ks(e) {
	return v(e) && "__vccOpts" in e;
}
var q = (e, t) => /* @__PURE__ */ Dn(e, t, Ns);
function qs(e, t, n) {
	try {
		cs(-1);
		let r = arguments.length;
		return r === 2 ? x(t) && !p(t) ? us(t) ? U(e, null, [t]) : U(e, t) : U(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && us(n) && (n = [n]), U(e, t, n));
	} finally {
		cs(1);
	}
}
function Js() {
	return;
	function e(t, n, r) {
		let i = t[r];
		if (p(i) && i.includes(n) || x(i) && n in i || t.extends && e(t.extends, n, r) || t.mixins && t.mixins.some((t) => e(t, n, r))) return !0;
	}
}
function Ys(e, t, n, r) {
	let i = n[r];
	if (i && Xs(i, e)) return i;
	let a = t();
	return a.memo = e.slice(), a.cacheIndex = r, n[r] = a;
}
function Xs(e, t) {
	let n = e.memo;
	if (n.length != t.length) return !1;
	for (let e = 0; e < n.length; e++) if (O(n[e], t[e])) return !1;
	return ss > 0 && as && as.push(e), !0;
}
var Zs = "3.5.34", Qs = a, $s = Hn, ec = lr, tc = dr, nc = {
	createComponentInstance: Ts,
	setupComponent: Ps,
	renderComponentRoot: ro,
	setCurrentRenderingInstance: mr,
	isVNode: us,
	normalizeVNode: ys,
	getComponentPublicInstance: Ws,
	ensureValidVNode: ua,
	pushWarningContext: Rn,
	popWarningContext: zn
}, rc = void 0, ic = typeof window < "u" && window.trustedTypes;
if (ic) try {
	rc = /* @__PURE__ */ ic.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var ac = rc ? (e) => rc.createHTML(e) : (e) => e, oc = "http://www.w3.org/2000/svg", sc = "http://www.w3.org/1998/Math/MathML", cc = typeof document < "u" ? document : null, lc = cc && /* @__PURE__ */ cc.createElement("template"), uc = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? cc.createElementNS(oc, e) : t === "mathml" ? cc.createElementNS(sc, e) : n ? cc.createElement(e, { is: n }) : cc.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => cc.createTextNode(e),
	createComment: (e) => cc.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => cc.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			lc.innerHTML = ac(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = lc.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, dc = "transition", fc = "animation", pc = /* @__PURE__ */ Symbol("_vtc"), mc = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, hc = /* @__PURE__ */ l({}, Yr, mc), gc = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = hc, e))((e, { slots: t }) => qs($r, yc(e), t)), _c = (e, t = []) => {
	p(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, vc = (e) => e ? p(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function yc(e) {
	let t = {};
	for (let n in e) n in mc || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: u = o, appearToClass: d = s, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = bc(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: T = b } = t, ee = (e, t, n, r) => {
		e._enterCancelled = r, Cc(e, t ? d : s), Cc(e, t ? u : o), n && n();
	}, E = (e, t) => {
		e._isLeaving = !1, Cc(e, f), Cc(e, m), Cc(e, p), t && t();
	}, te = (e) => (t, n) => {
		let i = e ? w : y, o = () => ee(t, e, n);
		_c(i, [t, o]), wc(() => {
			Cc(t, e ? c : a), Sc(t, e ? d : s), vc(i) || Ec(t, r, g, o);
		});
	};
	return l(t, {
		onBeforeEnter(e) {
			_c(v, [e]), Sc(e, a), Sc(e, o);
		},
		onBeforeAppear(e) {
			_c(C, [e]), Sc(e, c), Sc(e, u);
		},
		onEnter: te(!1),
		onAppear: te(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => E(e, t);
			Sc(e, f), e._enterCancelled ? (Sc(e, p), Ac(e)) : (Ac(e), Sc(e, p)), wc(() => {
				e._isLeaving && (Cc(e, f), Sc(e, m), vc(x) || Ec(e, r, _, n));
			}), _c(x, [e, n]);
		},
		onEnterCancelled(e) {
			ee(e, !1, void 0, !0), _c(b, [e]);
		},
		onAppearCancelled(e) {
			ee(e, !0, void 0, !0), _c(T, [e]);
		},
		onLeaveCancelled(e) {
			E(e), _c(S, [e]);
		}
	});
}
function bc(e) {
	if (e == null) return null;
	if (x(e)) return [xc(e.enter), xc(e.leave)];
	{
		let t = xc(e);
		return [t, t];
	}
}
function xc(e) {
	return de(e);
}
function Sc(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[pc] || (e[pc] = /* @__PURE__ */ new Set())).add(t);
}
function Cc(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[pc];
	n && (n.delete(t), n.size || (e[pc] = void 0));
}
function wc(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var Tc = 0;
function Ec(e, t, n, r) {
	let i = e._endId = ++Tc, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = Dc(e, t);
	if (!o) return r();
	let l = o + "end", u = 0, d = () => {
		e.removeEventListener(l, f), a();
	}, f = (t) => {
		t.target === e && ++u >= c && d();
	};
	setTimeout(() => {
		u < c && d();
	}, s + 1), e.addEventListener(l, f);
}
function Dc(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${dc}Delay`), a = r(`${dc}Duration`), o = Oc(i, a), s = r(`${fc}Delay`), c = r(`${fc}Duration`), l = Oc(s, c), u = null, d = 0, f = 0;
	t === dc ? o > 0 && (u = dc, d = o, f = a.length) : t === fc ? l > 0 && (u = fc, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? dc : fc : null, f = u ? u === dc ? a.length : c.length : 0);
	let p = u === dc && /\b(?:transform|all)(?:,|$)/.test(r(`${dc}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function Oc(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => kc(t) + kc(e[n])));
}
function kc(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ac(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function jc(e, t, n) {
	let r = e[pc];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Mc = /* @__PURE__ */ Symbol("_vod"), Nc = /* @__PURE__ */ Symbol("_vsh"), Pc = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Mc] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Fc(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Fc(e, !0), r.enter(e)) : r.leave(e, () => {
			Fc(e, !1);
		}) : Fc(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Fc(e, t);
	}
};
function Fc(e, t) {
	e.style.display = t ? e[Mc] : "none", e[Nc] = !t;
}
function Ic() {
	Pc.getSSRProps = ({ value: e }) => {
		if (!e) return { style: { display: "none" } };
	};
}
var Lc = /* @__PURE__ */ Symbol("");
function Rc(e) {
	let t = Ds();
	if (!t) return;
	let n = t.ut = (n = e(t.proxy)) => {
		Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e) => Bc(e, n));
	}, r = () => {
		let r = e(t.proxy);
		t.ce ? Bc(t.ce, r) : zc(t.subTree, r), n(r);
	};
	Ki(() => {
		ir(r);
	}), I(() => {
		P(r, a, { flush: "post" });
		let e = new MutationObserver(r);
		e.observe(t.subTree.el.parentNode, { childList: !0 }), Yi(() => e.disconnect());
	});
}
function zc(e, t) {
	if (e.shapeFlag & 128) {
		let n = e.suspense;
		e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
			zc(n.activeBranch, t);
		});
	}
	for (; e.component;) e = e.component.subTree;
	if (e.shapeFlag & 1 && e.el) Bc(e.el, t);
	else if (e.type === R) e.children.forEach((e) => zc(e, t));
	else if (e.type === rs) {
		let { el: n, anchor: r } = e;
		for (; n && (Bc(n, t), n !== r);) n = n.nextSibling;
	}
}
function Bc(e, t) {
	if (e.nodeType === 1) {
		let n = e.style, r = "";
		for (let e in t) {
			let i = Ae(t[e]);
			n.setProperty(`--${e}`, i), r += `--${e}: ${i};`;
		}
		n[Lc] = r;
	}
}
var Vc = /(?:^|;)\s*display\s*:/;
function Hc(e, t, n) {
	let r = e.style, i = y(n), a = !1;
	if (n && !i) {
		if (t) if (y(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Wc(r, t, "");
		}
		else for (let e in t) n[e] ?? Wc(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Wc(r, i, "") : Jc(e, i, !y(t) && t ? t[i] : void 0, o) || Wc(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Lc];
			e && (n += ";" + e), r.cssText = n, a = Vc.test(n);
		}
	} else t && e.removeAttribute("style");
	Mc in e && (e[Mc] = a ? r.display : "", e[Nc] && (r.display = "none"));
}
var Uc = /\s*!important$/;
function Wc(e, t, n) {
	if (p(n)) n.forEach((n) => Wc(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = qc(e, t);
		Uc.test(n) ? e.setProperty(ae(r), n.replace(Uc, ""), "important") : e[r] = n;
	}
}
var Gc = [
	"Webkit",
	"Moz",
	"ms"
], Kc = {};
function qc(e, t) {
	let n = Kc[t];
	if (n) return n;
	let r = D(t);
	if (r !== "filter" && r in e) return Kc[t] = r;
	r = oe(r);
	for (let n = 0; n < Gc.length; n++) {
		let i = Gc[n] + r;
		if (i in e) return Kc[t] = i;
	}
	return t;
}
function Jc(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && y(r) && n === r;
}
var Yc = "http://www.w3.org/1999/xlink";
function Xc(e, t, n, r, i, a = xe(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Yc, t.slice(6, t.length)) : e.setAttributeNS(Yc, t, n) : n == null || a && !Se(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : b(n) ? String(n) : n);
}
function Zc(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? ac(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = Se(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Qc(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function $c(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var el = /* @__PURE__ */ Symbol("_vei");
function tl(e, t, n, r, i = null) {
	let a = e[el] || (e[el] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = rl(t);
		r ? Qc(e, n, a[t] = sl(r, i), s) : o && ($c(e, n, o, s), a[t] = void 0);
	}
}
var nl = /(?:Once|Passive|Capture)$/;
function rl(e) {
	let t;
	if (nl.test(e)) {
		t = {};
		let n;
		for (; n = e.match(nl);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : ae(e.slice(2)), t];
}
var il = 0, al = /* @__PURE__ */ Promise.resolve(), ol = () => il ||= (al.then(() => il = 0), Date.now());
function sl(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		Wn(cl(e, n.value), t, 5, [e]);
	};
	return n.value = e, n.attached = ol(), n;
}
function cl(e, t) {
	if (p(t)) {
		let n = e.stopImmediatePropagation;
		return e.stopImmediatePropagation = () => {
			n.call(e), e._stopped = !0;
		}, t.map((e) => (t) => !t._stopped && e && e(t));
	} else return t;
}
var ll = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ul = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? jc(e, r, o) : t === "style" ? Hc(e, n, r) : s(t) ? c(t) || tl(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : dl(e, t, r, o)) ? (Zc(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Xc(e, t, r, o, a, t !== "value")) : e._isVueCE && (fl(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !y(r))) ? Zc(e, D(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Xc(e, t, r, o));
};
function dl(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && ll(t) && v(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return ll(t) && y(n) ? !1 : t in e;
}
function fl(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = D(t);
	return Array.isArray(n) ? n.some((e) => D(e) === r) : Object.keys(n).some((e) => D(e) === r);
}
var pl = {};
/* @__NO_SIDE_EFFECTS__ */
function ml(e, t, n) {
	let r = /* @__PURE__ */ F(e, t);
	ee(r) && (r = l({}, r, t));
	class i extends _l {
		constructor(e) {
			super(r, e, n);
		}
	}
	return i.def = r, i;
}
var hl = /* @__NO_SIDE_EFFECTS__ */ ((e, t) => /* @__PURE__ */ ml(e, t, su)), gl = typeof HTMLElement < "u" ? HTMLElement : class {}, _l = class e extends gl {
	constructor(e, t = {}, n = ou) {
		super(), this._def = e, this._props = t, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n !== ou ? this._root = this.shadowRoot : e.shadowRoot === !1 ? this._root = this : (this.attachShadow(l({}, e.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot);
	}
	connectedCallback() {
		if (!this.isConnected) return;
		!this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
		let t = this;
		for (; t &&= t.assignedSlot || t.parentNode || t.host;) if (t instanceof e) {
			this._parent = t;
			break;
		}
		this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
			this._pendingResolve = void 0, this._resolveDef();
		}) : this._resolveDef());
	}
	_setParent(e = this._parent) {
		e && (this._instance.parent = e._instance, this._inheritParentContext(e));
	}
	_inheritParentContext(e = this._parent) {
		e && this._app && Object.setPrototypeOf(this._app._context.provides, e._instance.provides);
	}
	disconnectedCallback() {
		this._connected = !1, er(() => {
			this._connected || (this._ob &&= (this._ob.disconnect(), null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets &&= (this._teleportTargets.clear(), void 0));
		});
	}
	_processMutations(e) {
		for (let t of e) this._setAttr(t.attributeName);
	}
	_resolveDef() {
		if (this._pendingResolve) return;
		for (let e = 0; e < this.attributes.length; e++) this._setAttr(this.attributes[e].name);
		this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
		let e = (e, t = !1) => {
			this._resolved = !0, this._pendingResolve = void 0;
			let { props: n, styles: r } = e, i;
			if (n && !p(n)) for (let e in n) {
				let t = n[e];
				(t === Number || t && t.type === Number) && (e in this._props && (this._props[e] = de(this._props[e])), (i ||= /* @__PURE__ */ Object.create(null))[D(e)] = !0);
			}
			this._numberProps = i, this._resolveProps(e), this.shadowRoot && this._applyStyles(r), this._mount(e);
		}, t = this._def.__asyncLoader;
		t ? this._pendingResolve = t().then((t) => {
			t.configureApp = this._def.configureApp, e(this._def = t, !0);
		}) : e(this._def);
	}
	_mount(e) {
		this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
		let t = this._instance && this._instance.exposed;
		if (t) for (let e in t) f(this, e) || Object.defineProperty(this, e, { get: () => M(t[e]) });
	}
	_resolveProps(e) {
		let { props: t } = e, n = p(t) ? t : Object.keys(t || {});
		for (let e of Object.keys(this)) e[0] !== "_" && n.includes(e) && this._setProp(e, this[e]);
		for (let e of n.map(D)) Object.defineProperty(this, e, {
			get() {
				return this._getProp(e);
			},
			set(t) {
				this._setProp(e, t, !0, !this._patching);
			}
		});
	}
	_setAttr(e) {
		if (e.startsWith("data-v-")) return;
		let t = this.hasAttribute(e), n = t ? this.getAttribute(e) : pl, r = D(e);
		t && this._numberProps && this._numberProps[r] && (n = de(n)), this._setProp(r, n, !1, !0);
	}
	_getProp(e) {
		return this._props[e];
	}
	_setProp(e, t, n = !0, r = !1) {
		if (t !== this._props[e] && (this._dirty = !0, t === pl ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), n)) {
			let n = this._ob;
			n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(ae(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(ae(e), t + "") : t || this.removeAttribute(ae(e)), n && n.observe(this, { attributes: !0 });
		}
	}
	_update() {
		let e = this._createVNode();
		this._app && (e.appContext = this._app._context), iu(e, this._root);
	}
	_createVNode() {
		let e = {};
		this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
		let t = U(this._def, l(e, this._props));
		return this._instance || (t.ce = (e) => {
			this._instance = e, e.ce = this, e.isCE = !0;
			let t = (e, t) => {
				this.dispatchEvent(new CustomEvent(e, ee(t[0]) ? l({ detail: t }, t[0]) : { detail: t }));
			};
			e.emit = (e, ...n) => {
				t(e, n), ae(e) !== e && t(ae(e), n);
			}, this._setParent();
		}), t;
	}
	_applyStyles(e, t, n) {
		if (!e) return;
		if (t) {
			if (t === this._def || this._styleChildren.has(t)) return;
			this._styleChildren.add(t);
		}
		let r = this._nonce, i = this.shadowRoot, a = n ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i), o = null;
		for (let s = e.length - 1; s >= 0; s--) {
			let c = document.createElement("style");
			r && c.setAttribute("nonce", r), c.textContent = e[s], i.insertBefore(c, o || a), o = c, s === 0 && (n || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c));
		}
	}
	_getStyleAnchor(e) {
		if (!e) return null;
		let t = this._styleAnchors.get(e);
		return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(e), null);
	}
	_getRootStyleInsertionAnchor(e) {
		for (let t = 0; t < e.childNodes.length; t++) {
			let n = e.childNodes[t];
			if (!(n instanceof HTMLStyleElement)) return n;
		}
		return null;
	}
	_parseSlots() {
		let e = this._slots = {}, t;
		for (; t = this.firstChild;) {
			let n = t.nodeType === 1 && t.getAttribute("slot") || "default";
			(e[n] || (e[n] = [])).push(t), this.removeChild(t);
		}
	}
	_renderSlots() {
		let e = this._getSlots(), t = this._instance.type.__scopeId;
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = r.getAttribute("name") || "default", a = this._slots[i], o = r.parentNode;
			if (a) for (let e of a) {
				if (t && e.nodeType === 1) {
					let n = t + "-s", r = document.createTreeWalker(e, 1);
					e.setAttribute(n, "");
					let i;
					for (; i = r.nextNode();) i.setAttribute(n, "");
				}
				o.insertBefore(e, r);
			}
			else for (; r.firstChild;) o.insertBefore(r.firstChild, r);
			o.removeChild(r);
		}
	}
	_getSlots() {
		let e = [this];
		this._teleportTargets && e.push(...this._teleportTargets);
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.querySelectorAll("slot");
			for (let n = 0; n < e.length; n++) t.add(e[n]);
		}
		return Array.from(t);
	}
	_injectChildStyle(e, t) {
		this._applyStyles(e.styles, e, t);
	}
	_beginPatch() {
		this._patching = !0, this._dirty = !1;
	}
	_endPatch() {
		this._patching = !1, this._dirty && this._instance && this._update();
	}
	_hasShadowRoot() {
		return this._def.shadowRoot !== !1;
	}
	_removeChildStyle(e) {}
};
function vl(e) {
	let t = Ds();
	return t && t.ce || null;
}
function yl() {
	let e = vl();
	return e && e.shadowRoot;
}
function bl(e = "$style") {
	{
		let t = Ds();
		if (!t) return r;
		let n = t.type.__cssModules;
		return n && n[e] || r;
	}
}
var xl = /* @__PURE__ */ new WeakMap(), Sl = /* @__PURE__ */ new WeakMap(), Cl = /* @__PURE__ */ Symbol("_moveCb"), wl = /* @__PURE__ */ Symbol("_enterCb"), Tl = /* @__PURE__ */ ((e) => (delete e.props.mode, e))({
	name: "TransitionGroup",
	props: /* @__PURE__ */ l({}, hc, {
		tag: String,
		moveClass: String
	}),
	setup(e, { slots: t }) {
		let n = Ds(), r = qr(), i, a;
		return qi(() => {
			if (!i.length) return;
			let t = e.moveClass || `${e.name || "v"}-move`;
			if (!Al(i[0].el, n.vnode.el, t)) {
				i = [];
				return;
			}
			i.forEach(El), i.forEach(Dl);
			let r = i.filter(Ol);
			Ac(n.vnode.el), r.forEach((e) => {
				let n = e.el, r = n.style;
				Sc(n, t), r.transform = r.webkitTransform = r.transitionDuration = "";
				let i = n[Cl] = (e) => {
					e && e.target !== n || (!e || e.propertyName.endsWith("transform")) && (n.removeEventListener("transitionend", i), n[Cl] = null, Cc(n, t));
				};
				n.addEventListener("transitionend", i);
			}), i = [];
		}), () => {
			let o = /* @__PURE__ */ sn(e), s = yc(o), c = o.tag || R;
			if (i = [], a) for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.el && t.el instanceof Element && (i.push(t), ii(t, ti(t, s, r, n)), xl.set(t, kl(t.el)));
			}
			a = t.default ? ai(t.default()) : [];
			for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.key != null && ii(t, ti(t, s, r, n));
			}
			return U(c, null, a);
		};
	}
});
function El(e) {
	let t = e.el;
	t[Cl] && t[Cl](), t[wl] && t[wl]();
}
function Dl(e) {
	Sl.set(e, kl(e.el));
}
function Ol(e) {
	let t = xl.get(e), n = Sl.get(e), r = t.left - n.left, i = t.top - n.top;
	if (r || i) {
		let t = e.el, n = t.style, a = t.getBoundingClientRect(), o = 1, s = 1;
		return t.offsetWidth && (o = a.width / t.offsetWidth), t.offsetHeight && (s = a.height / t.offsetHeight), (!Number.isFinite(o) || o === 0) && (o = 1), (!Number.isFinite(s) || s === 0) && (s = 1), Math.abs(o - 1) < .01 && (o = 1), Math.abs(s - 1) < .01 && (s = 1), n.transform = n.webkitTransform = `translate(${r / o}px,${i / s}px)`, n.transitionDuration = "0s", e;
	}
}
function kl(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top
	};
}
function Al(e, t, n) {
	let r = e.cloneNode(), i = e[pc];
	i && i.forEach((e) => {
		e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
	}), n.split(/\s+/).forEach((e) => e && r.classList.add(e)), r.style.display = "none";
	let a = t.nodeType === 1 ? t : t.parentNode;
	a.appendChild(r);
	let { hasTransform: o } = Dc(r);
	return a.removeChild(r), o;
}
var jl = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => ce(t, e) : t;
};
function Ml(e) {
	e.target.composing = !0;
}
function Nl(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Pl = /* @__PURE__ */ Symbol("_assign");
function Fl(e, t, n) {
	return t && (e = e.trim()), n && (e = ue(e)), e;
}
var Il = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[Pl] = jl(i);
		let a = r || i.props && i.props.type === "number";
		Qc(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Pl](Fl(e.value, n, a));
		}), (n || a) && Qc(e, "change", () => {
			e.value = Fl(e.value, n, a);
		}), t || (Qc(e, "compositionstart", Ml), Qc(e, "compositionend", Nl), Qc(e, "change", Nl));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Pl] = jl(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ue(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Ll = {
	deep: !0,
	created(e, t, n) {
		e[Pl] = jl(n), Qc(e, "change", () => {
			let t = e._modelValue, n = Hl(e), r = e.checked, i = e[Pl];
			if (p(t)) {
				let e = Te(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (h(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(Ul(e, r));
		});
	},
	mounted: Rl,
	beforeUpdate(e, t, n) {
		e[Pl] = jl(n), Rl(e, t, n);
	}
};
function Rl(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (p(t)) i = Te(t, r.props.value) > -1;
	else if (h(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = we(t, Ul(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var zl = {
	created(e, { value: t }, n) {
		e.checked = we(t, n.props.value), e[Pl] = jl(n), Qc(e, "change", () => {
			e[Pl](Hl(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[Pl] = jl(r), t !== n && (e.checked = we(t, r.props.value));
	}
}, Bl = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		Qc(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ue(Hl(e)) : Hl(e));
			e[Pl](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, er(() => {
				e._assigning = !1;
			});
		}), e[Pl] = jl(r);
	},
	mounted(e, { value: t }) {
		Vl(e, t);
	},
	beforeUpdate(e, t, n) {
		e[Pl] = jl(n);
	},
	updated(e, { value: t }) {
		e._assigning || Vl(e, t);
	}
};
function Vl(e, t) {
	let n = e.multiple, r = p(t);
	if (!(n && !r && !h(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = Hl(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Te(t, o) > -1;
			} else a.selected = t.has(o);
			else if (we(Hl(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Hl(e) {
	return "_value" in e ? e._value : e.value;
}
function Ul(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Wl = {
	created(e, t, n) {
		Kl(e, t, n, null, "created");
	},
	mounted(e, t, n) {
		Kl(e, t, n, null, "mounted");
	},
	beforeUpdate(e, t, n, r) {
		Kl(e, t, n, r, "beforeUpdate");
	},
	updated(e, t, n, r) {
		Kl(e, t, n, r, "updated");
	}
};
function Gl(e, t) {
	switch (e) {
		case "SELECT": return Bl;
		case "TEXTAREA": return Il;
		default: switch (t) {
			case "checkbox": return Ll;
			case "radio": return zl;
			default: return Il;
		}
	}
}
function Kl(e, t, n, r, i) {
	let a = Gl(e.tagName, n.props && n.props.type)[i];
	a && a(e, t, n, r);
}
function ql() {
	Il.getSSRProps = ({ value: e }) => ({ value: e }), zl.getSSRProps = ({ value: e }, t) => {
		if (t.props && we(t.props.value, e)) return { checked: !0 };
	}, Ll.getSSRProps = ({ value: e }, t) => {
		if (p(e)) {
			if (t.props && Te(e, t.props.value) > -1) return { checked: !0 };
		} else if (h(e)) {
			if (t.props && e.has(t.props.value)) return { checked: !0 };
		} else if (e) return { checked: !0 };
	}, Wl.getSSRProps = (e, t) => {
		if (typeof t.type != "string") return;
		let n = Gl(t.type.toUpperCase(), t.props && t.props.type);
		if (n.getSSRProps) return n.getSSRProps(e, t);
	};
}
var Jl = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Yl = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => Jl.some((n) => e[`${n}Key`] && !t.includes(n))
}, Xl = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Yl[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Zl = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, Ql = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = ae(n.key);
		if (t.some((e) => e === r || Zl[e] === r)) return e(n);
	}));
}, $l = /* @__PURE__ */ l({ patchProp: ul }, uc), eu, tu = !1;
function nu() {
	return eu ||= jo($l);
}
function ru() {
	return eu = tu ? eu : Mo($l), tu = !0, eu;
}
var iu = ((...e) => {
	nu().render(...e);
}), au = ((...e) => {
	ru().hydrate(...e);
}), ou = ((...e) => {
	let t = nu().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = lu(e);
		if (!r) return;
		let i = t._component;
		!v(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, cu(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
}), su = ((...e) => {
	let t = ru().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let t = lu(e);
		if (t) return n(t, !0, cu(t));
	}, t;
});
function cu(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function lu(e) {
	return y(e) ? document.querySelector(e) : e;
}
var uu = !1, du = () => {
	uu || (uu = !0, ql(), Ic());
}, fu = /* @__PURE__ */ t({
	BaseTransition: () => $r,
	BaseTransitionPropsValidators: () => Yr,
	Comment: () => ns,
	DeprecationTypes: () => null,
	EffectScope: () => Me,
	ErrorCodes: () => Vn,
	ErrorTypeStrings: () => $s,
	Fragment: () => R,
	KeepAlive: () => Fi,
	ReactiveEffect: () => Re,
	Static: () => rs,
	Suspense: () => Wo,
	Teleport: () => Hr,
	Text: () => ts,
	TrackOpTypes: () => On,
	Transition: () => gc,
	TransitionGroup: () => Tl,
	TriggerOpTypes: () => kn,
	VueElement: () => _l,
	assertNumber: () => Bn,
	callWithAsyncErrorHandling: () => Wn,
	callWithErrorHandling: () => Un,
	camelize: () => D,
	capitalize: () => oe,
	cloneVNode: () => gs,
	compatUtils: () => null,
	compile: () => pu,
	computed: () => q,
	createApp: () => ou,
	createBlock: () => V,
	createCommentVNode: () => G,
	createElementBlock: () => B,
	createElementVNode: () => H,
	createHydrationRenderer: () => Mo,
	createPropsRestProxy: () => Aa,
	createRenderer: () => jo,
	createSSRApp: () => su,
	createSlots: () => la,
	createStaticVNode: () => vs,
	createTextVNode: () => _s,
	createVNode: () => U,
	customRef: () => bn,
	defineAsyncComponent: () => Mi,
	defineComponent: () => F,
	defineCustomElement: () => ml,
	defineEmits: () => va,
	defineExpose: () => ya,
	defineModel: () => Sa,
	defineOptions: () => ba,
	defineProps: () => _a,
	defineSSRCustomElement: () => hl,
	defineSlots: () => xa,
	devtools: () => ec,
	effect: () => Ze,
	effectScope: () => Ne,
	getCurrentInstance: () => Ds,
	getCurrentScope: () => Pe,
	getCurrentWatcher: () => Nn,
	getTransitionRawChildren: () => ai,
	guardReactiveProps: () => W,
	h: () => qs,
	handleError: () => Gn,
	hasInjectionContext: () => Sr,
	hydrate: () => au,
	hydrateOnIdle: () => Ti,
	hydrateOnInteraction: () => ki,
	hydrateOnMediaQuery: () => Oi,
	hydrateOnVisible: () => Di,
	initCustomFormatter: () => Js,
	initDirectivesForSSR: () => du,
	inject: () => xr,
	isMemoSame: () => Xs,
	isProxy: () => on,
	isReactive: () => nn,
	isReadonly: () => rn,
	isRef: () => dn,
	isRuntimeOnly: () => Bs,
	isShallow: () => an,
	isVNode: () => us,
	markRaw: () => cn,
	mergeDefaults: () => Oa,
	mergeModels: () => ka,
	mergeProps: () => K,
	nextTick: () => er,
	nodeOps: () => uc,
	normalizeClass: () => k,
	normalizeProps: () => A,
	normalizeStyle: () => he,
	onActivated: () => Li,
	onBeforeMount: () => Gi,
	onBeforeUnmount: () => Ji,
	onBeforeUpdate: () => Ki,
	onDeactivated: () => Ri,
	onErrorCaptured: () => $i,
	onMounted: () => I,
	onRenderTracked: () => Qi,
	onRenderTriggered: () => Zi,
	onScopeDispose: () => Fe,
	onServerPrefetch: () => Xi,
	onUnmounted: () => Yi,
	onUpdated: () => qi,
	onWatcherCleanup: () => Pn,
	openBlock: () => z,
	patchProp: () => ul,
	popScopeId: () => gr,
	provide: () => br,
	proxyRefs: () => vn,
	pushScopeId: () => hr,
	queuePostFlushCb: () => ir,
	reactive: () => Zt,
	readonly: () => $t,
	ref: () => j,
	registerRuntimeCompiler: () => zs,
	render: () => iu,
	renderList: () => ca,
	renderSlot: () => L,
	resolveComponent: () => na,
	resolveDirective: () => aa,
	resolveDynamicComponent: () => ia,
	resolveFilter: () => null,
	resolveTransitionHooks: () => ti,
	setBlockTracking: () => cs,
	setDevtoolsHook: () => tc,
	setTransitionHooks: () => ii,
	shallowReactive: () => Qt,
	shallowReadonly: () => en,
	shallowRef: () => fn,
	ssrContextKey: () => Cr,
	ssrUtils: () => nc,
	stop: () => Qe,
	toDisplayString: () => De,
	toHandlerKey: () => se,
	toHandlers: () => da,
	toRaw: () => sn,
	toRef: () => wn,
	toRefs: () => xn,
	toValue: () => gn,
	transformVNodeArgs: () => fs,
	triggerRef: () => hn,
	unref: () => M,
	useAttrs: () => Ta,
	useCssModule: () => bl,
	useCssVars: () => Rc,
	useHost: () => vl,
	useId: () => oi,
	useModel: () => Za,
	useSSRContext: () => wr,
	useShadowRoot: () => yl,
	useSlots: () => wa,
	useTemplateRef: () => ci,
	useTransitionState: () => qr,
	vModelCheckbox: () => Ll,
	vModelDynamic: () => Wl,
	vModelRadio: () => zl,
	vModelSelect: () => Bl,
	vModelText: () => Il,
	vShow: () => Pc,
	version: () => Zs,
	warn: () => Qs,
	watch: () => P,
	watchEffect: () => Tr,
	watchPostEffect: () => Er,
	watchSyncEffect: () => Dr,
	withAsyncContext: () => ja,
	withCtx: () => N,
	withDefaults: () => Ca,
	withDirectives: () => vr,
	withKeys: () => Ql,
	withMemo: () => Ys,
	withModifiers: () => Xl,
	withScopeId: () => _r
}), pu = () => {}, mu = 1, hu = new class {
	subscribers;
	toasts;
	dismissedToasts;
	constructor() {
		this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
	}
	subscribe = (e) => (this.subscribers.push(e), () => {
		let t = this.subscribers.indexOf(e);
		this.subscribers.splice(t, 1);
	});
	publish = (e) => {
		this.subscribers.forEach((t) => t(e));
	};
	addToast = (e) => {
		this.publish(e), this.toasts = [...this.toasts, e];
	};
	create = (e) => {
		let { message: t, ...n } = e, r = typeof e.id == "number" || e.id && e.id?.length > 0 ? e.id : mu++, i = this.toasts.find((e) => e.id === r), a = e.dismissible === void 0 ? !0 : e.dismissible;
		return this.dismissedToasts.has(r) && this.dismissedToasts.delete(r), i ? this.toasts = this.toasts.map((n) => n.id === r ? (this.publish({
			...n,
			...e,
			id: r,
			title: t
		}), {
			...n,
			...e,
			id: r,
			dismissible: a,
			title: t
		}) : n) : this.addToast({
			title: t,
			...n,
			dismissible: a,
			id: r
		}), r;
	};
	dismiss = (e) => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach((t) => t({
		id: e,
		dismiss: !0
	})))) : this.toasts.forEach((e) => {
		this.subscribers.forEach((t) => t({
			id: e.id,
			dismiss: !0
		}));
	}), e);
	message = (e, t) => this.create({
		...t,
		message: e,
		type: "default"
	});
	error = (e, t) => this.create({
		...t,
		type: "error",
		message: e
	});
	success = (e, t) => this.create({
		...t,
		type: "success",
		message: e
	});
	info = (e, t) => this.create({
		...t,
		type: "info",
		message: e
	});
	warning = (e, t) => this.create({
		...t,
		type: "warning",
		message: e
	});
	loading = (e, t) => this.create({
		...t,
		type: "loading",
		message: e
	});
	promise = (e, t) => {
		if (!t) return;
		let n;
		t.loading !== void 0 && (n = this.create({
			...t,
			promise: e,
			type: "loading",
			message: t.loading,
			description: typeof t.description == "function" ? void 0 : t.description
		}));
		let r = Promise.resolve(e instanceof Function ? e() : e), i = n !== void 0, a, o = r.then(async (e) => {
			if (a = ["resolve", e], us(e)) i = !1, this.create({
				id: n,
				type: "default",
				message: e
			});
			else if (_u(e) && !e.ok) {
				i = !1;
				let r = typeof t.error == "function" ? await t.error(`HTTP error! status: ${e.status}`) : t.error, a = typeof t.description == "function" ? await t.description(`HTTP error! status: ${e.status}`) : t.description, o = typeof r == "object" && !us(r) ? r : {
					message: r || "",
					id: n || ""
				};
				this.create({
					id: n,
					type: "error",
					description: a,
					...o
				});
			} else if (e instanceof Error) {
				i = !1;
				let r = typeof t.error == "function" ? await t.error(e) : t.error, a = typeof t.description == "function" ? await t.description(e) : t.description, o = typeof r == "object" && !us(r) ? r : {
					message: r || "",
					id: n || ""
				};
				this.create({
					id: n,
					type: "error",
					description: a,
					...o
				});
			} else if (t.success !== void 0) {
				i = !1;
				let r = typeof t.success == "function" ? await t.success(e) : t.success, a = typeof t.description == "function" ? await t.description(e) : t.description, o = typeof r == "object" && !us(r) ? r : {
					message: r || "",
					id: n || ""
				};
				this.create({
					id: n,
					type: "success",
					description: a,
					...o
				});
			}
		}).catch(async (e) => {
			if (a = ["reject", e], t.error !== void 0) {
				i = !1;
				let r = typeof t.error == "function" ? await t.error(e) : t.error, a = typeof t.description == "function" ? await t.description(e) : t.description, o = typeof r == "object" && !us(r) ? r : {
					message: r || "",
					id: n || ""
				};
				this.create({
					id: n,
					type: "error",
					description: a,
					...o
				});
			}
		}).finally(() => {
			i && (this.dismiss(n), n = void 0), t.finally?.();
		}), s = () => new Promise((e, t) => o.then(() => a[0] === "reject" ? t(a[1]) : e(a[1])).catch(t));
		return typeof n != "string" && typeof n != "number" ? { unwrap: s } : Object.assign(n, { unwrap: s });
	};
	custom = (e, t) => {
		let n = t?.id || mu++, r = this.toasts.find((e) => e.id === n), i = t?.dismissible === void 0 ? !0 : t.dismissible;
		return this.dismissedToasts.has(n) && this.dismissedToasts.delete(n), r ? this.toasts = this.toasts.map((r) => r.id === n ? (this.publish({
			...r,
			component: e,
			dismissible: i,
			id: n,
			...t
		}), {
			...r,
			component: e,
			dismissible: i,
			id: n,
			...t
		}) : r) : this.addToast({
			component: e,
			dismissible: i,
			id: n,
			...t
		}), n;
	};
	getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id));
}();
function gu(e, t) {
	let n = t?.id || mu++;
	return hu.create({
		message: e,
		id: n,
		type: "default",
		...t
	}), n;
}
var _u = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", vu = Object.assign(gu, {
	success: hu.success,
	info: hu.info,
	warning: hu.warning,
	error: hu.error,
	custom: hu.custom,
	message: hu.message,
	promise: hu.promise,
	dismiss: hu.dismiss,
	loading: hu.loading
}, {
	getHistory: () => hu.toasts,
	getToasts: () => hu.getActiveToasts()
});
function yu(e) {
	return e.label !== void 0;
}
var bu = 3, xu = "24px", Su = "16px", Cu = 4e3, wu = 356, Tu = 14, Eu = 45, Du = 200;
function Ou() {
	let e = /* @__PURE__ */ j(!1);
	return Tr(() => {
		let t = () => {
			e.value = document.hidden;
		};
		return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
	}), { isDocumentHidden: e };
}
function ku(...e) {
	return e.filter(Boolean).join(" ");
}
function Au(e) {
	let [t, n] = e.split("-"), r = [];
	return t && r.push(t), n && r.push(n), r;
}
function ju(e, t) {
	let n = {};
	return [e, t].forEach((e, t) => {
		let r = t === 1, i = r ? "--mobile-offset" : "--offset", a = r ? Su : xu;
		function o(e) {
			[
				"top",
				"right",
				"bottom",
				"left"
			].forEach((t) => {
				n[`${i}-${t}`] = typeof e == "number" ? `${e}px` : e;
			});
		}
		typeof e == "number" || typeof e == "string" ? o(e) : typeof e == "object" ? [
			"top",
			"right",
			"bottom",
			"left"
		].forEach((t) => {
			e[t] === void 0 ? n[`${i}-${t}`] = a : n[`${i}-${t}`] = typeof e[t] == "number" ? `${e[t]}px` : e[t];
		}) : o(a);
	}), n;
}
var Mu = [
	"data-rich-colors",
	"data-styled",
	"data-mounted",
	"data-promise",
	"data-swiped",
	"data-removed",
	"data-visible",
	"data-y-position",
	"data-x-position",
	"data-index",
	"data-front",
	"data-swiping",
	"data-dismissible",
	"data-type",
	"data-invert",
	"data-swipe-out",
	"data-swipe-direction",
	"data-expanded",
	"data-testid"
], Nu = [
	"aria-label",
	"data-disabled",
	"data-close-button-position"
], Pu = /* @__PURE__ */ F({
	__name: "Toast",
	props: {
		toast: {},
		toasts: {},
		index: {},
		swipeDirections: {},
		expanded: { type: Boolean },
		invert: { type: Boolean },
		heights: {},
		gap: {},
		position: {},
		closeButtonPosition: {},
		visibleToasts: {},
		expandByDefault: { type: Boolean },
		closeButton: { type: Boolean },
		interacting: { type: Boolean },
		style: {},
		cancelButtonStyle: {},
		actionButtonStyle: {},
		duration: {},
		class: {},
		unstyled: { type: Boolean },
		descriptionClass: {},
		loadingIcon: {},
		classes: {},
		icons: {},
		closeButtonAriaLabel: {},
		defaultRichColors: { type: Boolean }
	},
	emits: [
		"update:heights",
		"update:height",
		"removeToast"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(null), a = /* @__PURE__ */ j(null), o = /* @__PURE__ */ j(!1), s = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j(!1), l = /* @__PURE__ */ j(!1), u = /* @__PURE__ */ j(!1), d = /* @__PURE__ */ j(0), f = /* @__PURE__ */ j(0), p = /* @__PURE__ */ j(n.toast.duration || n.duration || Cu), m = /* @__PURE__ */ j(null), h = /* @__PURE__ */ j(null), g = q(() => n.index === 0), _ = q(() => n.index + 1 <= n.visibleToasts), v = q(() => n.toast.type), y = q(() => n.toast.dismissible !== !1), b = q(() => n.toast.class || ""), x = q(() => n.descriptionClass || ""), S = q(() => {
			let e = n.toast.position || n.position, t = n.heights.filter((t) => t.position === e).findIndex((e) => e.toastId === n.toast.id);
			return t >= 0 ? t : 0;
		}), C = q(() => {
			let e = n.toast.position || n.position;
			return n.heights.filter((t) => t.position === e).reduce((e, t, n) => n >= S.value ? e : e + t.height, 0);
		}), w = q(() => S.value * n.gap + C.value || 0), T = q(() => n.toast.closeButton ?? n.closeButton), ee = q(() => n.toast.duration || n.duration || Cu), E = /* @__PURE__ */ j(0), te = /* @__PURE__ */ j(0), ne = /* @__PURE__ */ j(null), re = q(() => n.position.split("-")), D = q(() => re.value[0]), ie = q(() => re.value[1]), ae = q(() => typeof n.toast.title != "string"), oe = q(() => typeof n.toast.description != "string"), { isDocumentHidden: se } = Ou(), O = q(() => v.value && v.value === "loading");
		I(() => {
			o.value = !0, p.value = ee.value;
		}), Tr(async () => {
			if (!o.value || !h.value) return;
			await er();
			let e = h.value, t = e.style.height;
			e.style.height = "auto";
			let i = e.getBoundingClientRect().height;
			e.style.height = t, f.value = i, r("update:height", {
				toastId: n.toast.id,
				height: i,
				position: n.toast.position || n.position
			});
		});
		function ce() {
			s.value = !0, d.value = w.value, setTimeout(() => {
				r("removeToast", n.toast);
			}, Du);
		}
		function le() {
			if (O.value || !y.value) return {};
			ce(), n.toast.onDismiss?.(n.toast);
		}
		function ue(e) {
			e.button !== 2 && (O.value || !y.value || (m.value = /* @__PURE__ */ new Date(), d.value = w.value, e.target.setPointerCapture(e.pointerId), e.target.tagName !== "BUTTON" && (c.value = !0, ne.value = {
				x: e.clientX,
				y: e.clientY
			})));
		}
		function de() {
			if (l.value || !y.value) return;
			ne.value = null;
			let e = Number(h.value?.style.getPropertyValue("--swipe-amount-x").replace("px", "") || 0), t = Number(h.value?.style.getPropertyValue("--swipe-amount-y").replace("px", "") || 0), r = (/* @__PURE__ */ new Date()).getTime() - (m.value?.getTime() || 0), o = i.value === "x" ? e : t, s = Math.abs(o) / r;
			if (Math.abs(o) >= Eu || s > .11) {
				d.value = w.value, n.toast.onDismiss?.(n.toast), i.value === "x" ? a.value = e > 0 ? "right" : "left" : a.value = t > 0 ? "down" : "up", ce(), l.value = !0;
				return;
			} else h.value?.style.setProperty("--swipe-amount-x", "0px"), h.value?.style.setProperty("--swipe-amount-y", "0px");
			u.value = !1, c.value = !1, i.value = null;
		}
		function fe(e) {
			if (!ne.value || !y.value || (window?.getSelection()?.toString()?.length ?? !1)) return;
			let t = e.clientY - ne.value.y, r = e.clientX - ne.value.x, a = n.swipeDirections ?? Au(n.position);
			!i.value && (Math.abs(r) > 1 || Math.abs(t) > 1) && (i.value = Math.abs(r) > Math.abs(t) ? "x" : "y");
			let o = {
				x: 0,
				y: 0
			}, s = (e) => 1 / (1.5 + Math.abs(e) / 20);
			if (i.value === "y") {
				if (a.includes("top") || a.includes("bottom")) if (a.includes("top") && t < 0 || a.includes("bottom") && t > 0) o.y = t;
				else {
					let e = t * s(t);
					o.y = Math.abs(e) < Math.abs(t) ? e : t;
				}
			} else if (i.value === "x" && (a.includes("left") || a.includes("right"))) if (a.includes("left") && r < 0 || a.includes("right") && r > 0) o.x = r;
			else {
				let e = r * s(r);
				o.x = Math.abs(e) < Math.abs(r) ? e : r;
			}
			(Math.abs(o.x) > 0 || Math.abs(o.y) > 0) && (u.value = !0), h.value?.style.setProperty("--swipe-amount-x", `${o.x}px`), h.value?.style.setProperty("--swipe-amount-y", `${o.y}px`);
		}
		I(() => {
			if (o.value = !0, !h.value) return;
			let e = h.value.getBoundingClientRect().height;
			f.value = e, r("update:heights", [{
				toastId: n.toast.id,
				height: e,
				position: n.toast.position
			}, ...n.heights]);
		}), Ji(() => {
			h.value && r("removeToast", n.toast);
		}), Tr((e) => {
			if (n.toast.promise && v.value === "loading" || n.toast.duration === Infinity || n.toast.type === "loading") return;
			let t;
			n.expanded || n.interacting || se.value ? (() => {
				if (te.value < E.value) {
					let e = (/* @__PURE__ */ new Date()).getTime() - E.value;
					p.value -= e;
				}
				te.value = (/* @__PURE__ */ new Date()).getTime();
			})() : p.value !== Infinity && (E.value = (/* @__PURE__ */ new Date()).getTime(), t = setTimeout(() => {
				n.toast.onAutoClose?.(n.toast), ce();
			}, p.value)), e(() => {
				clearTimeout(t);
			});
		}), P(() => n.toast.delete, (e) => {
			e !== void 0 && e && (ce(), n.toast.onDismiss?.(n.toast));
		}, { deep: !0 });
		function pe() {
			c.value = !1, i.value = null, ne.value = null;
		}
		return (e, t) => (z(), B("li", {
			tabindex: "0",
			ref_key: "toastRef",
			ref: h,
			class: k(M(ku)(n.class, b.value, e.classes?.toast, e.toast.classes?.toast, e.classes?.[v.value], e.toast?.classes?.[v.value])),
			"data-sonner-toast": "",
			"data-rich-colors": e.toast.richColors ?? e.defaultRichColors,
			"data-styled": !(e.toast.component || e.toast?.unstyled || e.unstyled),
			"data-mounted": o.value,
			"data-promise": !!e.toast.promise,
			"data-swiped": u.value,
			"data-removed": s.value,
			"data-visible": _.value,
			"data-y-position": D.value,
			"data-x-position": ie.value,
			"data-index": e.index,
			"data-front": g.value,
			"data-swiping": c.value,
			"data-dismissible": y.value,
			"data-type": v.value,
			"data-invert": e.toast.invert || e.invert,
			"data-swipe-out": l.value,
			"data-swipe-direction": a.value,
			"data-expanded": !!(e.expanded || e.expandByDefault && o.value),
			"data-testid": e.toast.testId,
			style: he({
				"--index": e.index,
				"--toasts-before": e.index,
				"--z-index": e.toasts.length - e.index,
				"--offset": `${s.value ? d.value : w.value}px`,
				"--initial-height": e.expandByDefault ? "auto" : `${f.value}px`,
				...e.style,
				...n.toast.style
			}),
			onDragend: pe,
			onPointerdown: ue,
			onPointerup: de,
			onPointermove: fe
		}, [T.value && !e.toast.component && v.value !== "loading" ? (z(), B("button", {
			key: 0,
			"aria-label": e.closeButtonAriaLabel || "Close toast",
			"data-disabled": O.value,
			"data-close-button": "true",
			"data-close-button-position": e.closeButtonPosition,
			class: k(M(ku)(e.classes?.closeButton, e.toast?.classes?.closeButton)),
			onClick: le
		}, [e.icons?.close ? (z(), V(ia(e.icons?.close), { key: 0 })) : L(e.$slots, "close-icon", { key: 1 })], 10, Nu)) : G("v-if", !0), e.toast.component ? (z(), V(ia(e.toast.component), K({ key: 1 }, e.toast.componentProps, {
			onCloseToast: le,
			isPaused: e.$props.expanded || e.$props.interacting || M(se)
		}), null, 16, ["isPaused"])) : (z(), B(R, { key: 2 }, [
			v.value !== "default" || e.toast.icon || e.toast.promise ? (z(), B("div", {
				key: 0,
				"data-icon": "",
				class: k(M(ku)(e.classes?.icon, e.toast?.classes?.icon))
			}, [e.toast.icon ? (z(), V(ia(e.toast.icon), { key: 0 })) : (z(), B(R, { key: 1 }, [v.value === "loading" ? L(e.$slots, "loading-icon", { key: 0 }) : v.value === "success" ? L(e.$slots, "success-icon", { key: 1 }) : v.value === "error" ? L(e.$slots, "error-icon", { key: 2 }) : v.value === "warning" ? L(e.$slots, "warning-icon", { key: 3 }) : v.value === "info" ? L(e.$slots, "info-icon", { key: 4 }) : G("v-if", !0)], 64))], 2)) : G("v-if", !0),
			H("div", {
				"data-content": "",
				class: k(M(ku)(e.classes?.content, e.toast?.classes?.content))
			}, [H("div", {
				"data-title": "",
				class: k(M(ku)(e.classes?.title, e.toast.classes?.title))
			}, [ae.value ? (z(), V(ia(e.toast.title), A(K({ key: 0 }, e.toast.componentProps)), null, 16)) : (z(), B(R, { key: 1 }, [_s(De(e.toast.title), 1)], 64))], 2), e.toast.description ? (z(), B("div", {
				key: 0,
				"data-description": "",
				class: k(M(ku)(e.descriptionClass, x.value, e.classes?.description, e.toast.classes?.description))
			}, [oe.value ? (z(), V(ia(e.toast.description), A(K({ key: 0 }, e.toast.componentProps)), null, 16)) : (z(), B(R, { key: 1 }, [_s(De(e.toast.description), 1)], 64))], 2)) : G("v-if", !0)], 2),
			e.toast.cancel ? (z(), B("button", {
				key: 1,
				style: he(e.toast.cancelButtonStyle || e.cancelButtonStyle),
				class: k(M(ku)(e.classes?.cancelButton, e.toast.classes?.cancelButton)),
				"data-button": "",
				"data-cancel": "",
				onClick: t[0] ||= (t) => {
					M(yu)(e.toast.cancel) && y.value && (e.toast.cancel.onClick?.(t), ce());
				}
			}, De(M(yu)(e.toast.cancel) ? e.toast.cancel?.label : e.toast.cancel), 7)) : G("v-if", !0),
			e.toast.action ? (z(), B("button", {
				key: 2,
				style: he(e.toast.actionButtonStyle || e.actionButtonStyle),
				class: k(M(ku)(e.classes?.actionButton, e.toast.classes?.actionButton)),
				"data-button": "",
				"data-action": "",
				onClick: t[1] ||= (t) => {
					M(yu)(e.toast.action) && (e.toast.action.onClick?.(t), !t.defaultPrevented && ce());
				}
			}, De(M(yu)(e.toast.action) ? e.toast.action?.label : e.toast.action), 7)) : G("v-if", !0)
		], 64))], 46, Mu));
	}
}), Fu = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Iu = {}, Lu = {
	xmlns: "http://www.w3.org/2000/svg",
	width: "12",
	height: "12",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stoke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
function Ru(e, t) {
	return z(), B("svg", Lu, t[0] ||= [H("line", {
		x1: "18",
		y1: "6",
		x2: "6",
		y2: "18"
	}, null, -1), H("line", {
		x1: "6",
		y1: "6",
		x2: "18",
		y2: "18"
	}, null, -1)]);
}
var zu = /* @__PURE__ */ Fu(Iu, [["render", Ru]]), Bu = ["data-visible"], Vu = { class: "sonner-spinner" }, Hu = /* @__PURE__ */ F({
	__name: "Loader",
	props: { visible: { type: Boolean } },
	setup(e) {
		let t = Array(12).fill(0);
		return (e, n) => (z(), B("div", {
			class: "sonner-loading-wrapper",
			"data-visible": e.visible
		}, [H("div", Vu, [(z(!0), B(R, null, ca(M(t), (e) => (z(), B("div", {
			key: `spinner-bar-${e}`,
			class: "sonner-loading-bar"
		}))), 128))])], 8, Bu));
	}
}), Uu = {}, Wu = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function Gu(e, t) {
	return z(), B("svg", Wu, t[0] ||= [H("path", {
		"fill-rule": "evenodd",
		d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var Ku = /* @__PURE__ */ Fu(Uu, [["render", Gu]]), qu = {}, Ju = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function Yu(e, t) {
	return z(), B("svg", Ju, t[0] ||= [H("path", {
		"fill-rule": "evenodd",
		d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var Xu = /* @__PURE__ */ Fu(qu, [["render", Yu]]), Zu = {}, Qu = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function $u(e, t) {
	return z(), B("svg", Qu, t[0] ||= [H("path", {
		"fill-rule": "evenodd",
		d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var ed = /* @__PURE__ */ Fu(Zu, [["render", $u]]), td = {}, nd = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function rd(e, t) {
	return z(), B("svg", nd, t[0] ||= [H("path", {
		"fill-rule": "evenodd",
		d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var id = /* @__PURE__ */ Fu(td, [["render", rd]]), ad = ["aria-label"], od = [
	"data-sonner-theme",
	"dir",
	"data-theme",
	"data-rich-colors",
	"data-y-position",
	"data-x-position"
], sd = typeof window < "u" && typeof document < "u";
function cd() {
	if (typeof window > "u" || typeof document > "u") return "ltr";
	let e = document.documentElement.getAttribute("dir");
	return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var ld = /* @__PURE__ */ F({
	name: "Toaster",
	inheritAttrs: !1,
	__name: "Toaster",
	props: {
		id: {},
		invert: {
			type: Boolean,
			default: !1
		},
		theme: { default: "light" },
		position: { default: "bottom-right" },
		closeButtonPosition: { default: "top-left" },
		hotkey: { default: () => ["altKey", "KeyT"] },
		richColors: {
			type: Boolean,
			default: !1
		},
		expand: {
			type: Boolean,
			default: !1
		},
		duration: {},
		gap: { default: Tu },
		visibleToasts: { default: bu },
		closeButton: {
			type: Boolean,
			default: !1
		},
		toastOptions: { default: () => ({}) },
		class: { default: "" },
		style: {},
		offset: { default: xu },
		mobileOffset: { default: Su },
		dir: { default: "auto" },
		swipeDirections: {},
		icons: {},
		containerAriaLabel: { default: "Notifications" }
	},
	setup(e) {
		let t = e, n = Ta(), r = /* @__PURE__ */ j([]), i = q(() => t.id ? r.value.filter((e) => e.toasterId === t.id) : r.value.filter((e) => !e.toasterId));
		function a(e, t) {
			return i.value.filter((n) => !n.position && t === 0 || n.position === e);
		}
		let o = q(() => {
			let e = i.value.filter((e) => e.position).map((e) => e.position);
			return e.length > 0 ? Array.from(new Set([t.position].concat(e))) : [t.position];
		}), s = q(() => {
			let e = {};
			return o.value.forEach((t) => {
				e[t] = r.value.filter((e) => e.position === t);
			}), e;
		}), c = /* @__PURE__ */ j([]), l = /* @__PURE__ */ j({}), u = /* @__PURE__ */ j(!1);
		Tr(() => {
			o.value.forEach((e) => {
				e in l.value || (l.value[e] = !1);
			});
		});
		let d = /* @__PURE__ */ j(t.theme === "system" ? typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : t.theme), f = /* @__PURE__ */ j(null), p = /* @__PURE__ */ j(null), m = /* @__PURE__ */ j(!1), h = t.hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
		function g(e) {
			r.value.find((t) => t.id === e.id)?.delete || hu.dismiss(e.id), r.value = r.value.filter(({ id: t }) => t !== e.id), setTimeout(() => {
				r.value.find((t) => t.id === e.id) || (c.value = c.value.filter((t) => t.toastId !== e.id));
			}, Du + 50);
		}
		function _(e) {
			m.value && !e.currentTarget?.contains?.(e.relatedTarget) && (m.value = !1, p.value &&= (p.value.focus({ preventScroll: !0 }), null));
		}
		function v(e) {
			e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || m.value || (m.value = !0, p.value = e.relatedTarget);
		}
		function y(e) {
			e.target && e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || (u.value = !0);
		}
		Tr((e) => {
			e(hu.subscribe((e) => {
				if (e.dismiss) {
					requestAnimationFrame(() => {
						r.value = r.value.map((t) => t.id === e.id ? {
							...t,
							delete: !0
						} : t);
					});
					return;
				}
				er(() => {
					let t = r.value.findIndex((t) => t.id === e.id);
					t === -1 ? r.value = [e, ...r.value] : r.value = [
						...r.value.slice(0, t),
						{
							...r.value[t],
							...e
						},
						...r.value.slice(t + 1)
					];
				});
			}));
		}), Tr((e) => {
			if (typeof window > "u") return;
			if (t.theme !== "system") {
				d.value = t.theme;
				return;
			}
			let n = window.matchMedia("(prefers-color-scheme: dark)"), r = (e) => {
				d.value = e ? "dark" : "light";
			};
			r(n.matches);
			let i = (e) => {
				r(e.matches);
			};
			try {
				n.addEventListener("change", i);
			} catch {
				n.addListener(i);
			}
			e(() => {
				try {
					n.removeEventListener("change", i);
				} catch {
					n.removeListener(i);
				}
			});
		}), Tr(() => {
			f.value && p.value && (p.value.focus({ preventScroll: !0 }), p.value = null, m.value = !1);
		}), Tr(() => {
			r.value.length <= 1 && Object.keys(l.value).forEach((e) => {
				l.value[e] = !1;
			});
		}), Tr((e) => {
			function n(e) {
				let n = t.hotkey.every((t) => e[t] || e.code === t), r = Array.isArray(f.value) ? f.value[0] : f.value;
				n && (o.value.forEach((e) => {
					l.value[e] = !0;
				}), r?.focus());
				let i = document.activeElement === f.value || r?.contains(document.activeElement);
				e.code === "Escape" && i && o.value.forEach((e) => {
					l.value[e] = !1;
				});
			}
			sd && (document.addEventListener("keydown", n), e(() => {
				document.removeEventListener("keydown", n);
			}));
		});
		function b(e) {
			let t = e.currentTarget, n = t.getAttribute("data-y-position") + "-" + t.getAttribute("data-x-position");
			l.value[n] = !0;
		}
		function x(e) {
			if (!u.value) {
				let t = e.currentTarget, n = t.getAttribute("data-y-position") + "-" + t.getAttribute("data-x-position");
				l.value[n] = !1;
			}
		}
		function S() {
			Object.keys(l.value).forEach((e) => {
				l.value[e] = !1;
			});
		}
		function C() {
			u.value = !1;
		}
		function w(e) {
			c.value = e;
		}
		function T(e) {
			let t = c.value.findIndex((t) => t.toastId === e.toastId);
			if (t !== -1) c.value[t] = e;
			else {
				let t = c.value.findIndex((t) => t.position === e.position);
				t === -1 ? c.value.unshift(e) : c.value.splice(t, 0, e);
			}
		}
		return (e, r) => (z(), B(R, null, [G(" Remove item from normal navigation flow, only available via hotkey "), H("section", {
			"aria-label": `${e.containerAriaLabel} ${M(h)}`,
			tabIndex: -1,
			"aria-live": "polite",
			"aria-relevant": "additions text",
			"aria-atomic": "false"
		}, [(z(!0), B(R, null, ca(o.value, (r, i) => (z(), B("ol", K({
			key: r,
			ref_for: !0,
			ref_key: "listRef",
			ref: f,
			"data-sonner-toaster": "",
			"data-sonner-theme": d.value,
			class: t.class,
			dir: e.dir === "auto" ? cd() : e.dir,
			tabIndex: -1,
			"data-theme": e.theme,
			"data-rich-colors": e.richColors,
			"data-y-position": r.split("-")[0],
			"data-x-position": r.split("-")[1],
			style: {
				"--front-toast-height": `${c.value[0]?.height || 0}px`,
				"--width": `${M(wu)}px`,
				"--gap": `${e.gap}px`,
				...e.style,
				...M(n).style,
				...M(ju)(e.offset, e.mobileOffset)
			}
		}, { ref_for: !0 }, e.$attrs, {
			onBlur: _,
			onFocus: v,
			onMouseenter: b,
			onMousemove: b,
			onMouseleave: x,
			onDragend: S,
			onPointerdown: y,
			onPointerup: C
		}), [(z(!0), B(R, null, ca(a(r, i), (n, i) => (z(), V(Pu, {
			key: n.id,
			heights: c.value,
			icons: e.icons,
			index: i,
			toast: n,
			defaultRichColors: e.richColors,
			duration: e.toastOptions?.duration ?? e.duration,
			class: k(e.toastOptions?.class ?? ""),
			descriptionClass: e.toastOptions?.descriptionClass,
			invert: e.invert,
			visibleToasts: e.visibleToasts,
			closeButton: e.toastOptions?.closeButton ?? e.closeButton,
			interacting: u.value,
			position: r,
			closeButtonPosition: e.toastOptions?.closeButtonPosition ?? e.closeButtonPosition,
			style: he(e.toastOptions?.style),
			unstyled: e.toastOptions?.unstyled,
			classes: e.toastOptions?.classes,
			cancelButtonStyle: e.toastOptions?.cancelButtonStyle,
			actionButtonStyle: e.toastOptions?.actionButtonStyle,
			"close-button-aria-label": e.toastOptions?.closeButtonAriaLabel,
			toasts: s.value[r],
			expandByDefault: e.expand,
			gap: e.gap,
			expanded: l.value[r] || !1,
			swipeDirections: t.swipeDirections,
			"onUpdate:heights": w,
			"onUpdate:height": T,
			onRemoveToast: g
		}, {
			"close-icon": N(() => [L(e.$slots, "close-icon", {}, () => [U(zu)])]),
			"loading-icon": N(() => [L(e.$slots, "loading-icon", {}, () => [U(Hu, { visible: n.type === "loading" }, null, 8, ["visible"])])]),
			"success-icon": N(() => [L(e.$slots, "success-icon", {}, () => [U(Ku)])]),
			"error-icon": N(() => [L(e.$slots, "error-icon", {}, () => [U(id)])]),
			"warning-icon": N(() => [L(e.$slots, "warning-icon", {}, () => [U(ed)])]),
			"info-icon": N(() => [L(e.$slots, "info-icon", {}, () => [U(Xu)])]),
			_: 2
		}, 1032, [
			"heights",
			"icons",
			"index",
			"toast",
			"defaultRichColors",
			"duration",
			"class",
			"descriptionClass",
			"invert",
			"visibleToasts",
			"closeButton",
			"interacting",
			"position",
			"closeButtonPosition",
			"style",
			"unstyled",
			"classes",
			"cancelButtonStyle",
			"actionButtonStyle",
			"close-button-aria-label",
			"toasts",
			"expandByDefault",
			"gap",
			"expanded",
			"swipeDirections"
		]))), 128))], 16, od))), 128))], 8, ad)], 2112));
	}
});
//#endregion
//#region src/wc/face.ts
function ud(e) {
	return [...e.querySelectorAll(":scope > option")].map((e) => ({
		value: e.getAttribute("value") ?? e.textContent?.trim() ?? "",
		label: e.textContent?.trim() ?? "",
		disabled: e.hasAttribute("disabled")
	}));
}
function dd(e) {
	let t = e.innerHTML, n = document.createElement("template");
	n.innerHTML = t;
	let r = {}, i = [], a = [];
	return n.content.childNodes.forEach((e) => {
		if (e.nodeType === Node.ELEMENT_NODE) {
			let t = e, n = t.getAttribute("slot");
			if (n) {
				r[n] = (r[n] ?? "") + t.innerHTML;
				return;
			}
			if (t.tagName === "OPTION") return;
			if (t.tagName === "SECTION" || t.hasAttribute("data-title") || t.hasAttribute("title")) {
				i.push({
					title: t.getAttribute("title") ?? t.getAttribute("data-title") ?? "",
					value: t.getAttribute("value") ?? t.getAttribute("data-value") ?? String(i.length),
					disabled: t.hasAttribute("disabled"),
					html: t.innerHTML
				});
				return;
			}
			a.push(t.outerHTML);
		} else e.nodeType === Node.TEXT_NODE && a.push(e.textContent ?? "");
	}), {
		html: t,
		slots: r,
		defaultHtml: a.join("").trim(),
		sections: i,
		options: ud(e)
	};
}
var fd = "[role=\"checkbox\"],[role=\"switch\"],[role=\"radio\"],input,textarea,button,[tabindex]";
function pd(e, t) {
	let n = /* @__PURE__ */ ml(e, { shadowRoot: !1 });
	class r extends n {
		static formAssociated = !0;
		#e;
		#t = !1;
		constructor() {
			super(), this.#e = this.attachInternals(), this.addEventListener("click", (e) => {
				e.target === this && (this.hasAttribute("disabled") || this.querySelector(fd)?.click());
			});
		}
		connectedCallback() {
			if (!this.#t) {
				let e = dd(this);
				this._light = e, this._options = e.options, this.#t = !0;
			}
			super.connectedCallback();
		}
		get _internals() {
			return this.#e;
		}
		get form() {
			return this.#e?.form ?? null;
		}
		get validity() {
			return this.#e?.validity;
		}
		get validationMessage() {
			return this.#e?.validationMessage ?? "";
		}
		get willValidate() {
			return this.#e?.willValidate ?? !1;
		}
		checkValidity() {
			return this.#e?.checkValidity() ?? !0;
		}
		reportValidity() {
			return this.#e?.reportValidity() ?? !0;
		}
		formResetCallback() {
			this._reset?.();
		}
		formDisabledCallback(e) {
			this._disabledChange?.(e);
		}
		formStateRestoreCallback(e) {
			this._restore?.(e);
		}
	}
	return customElements.define(t, r), r;
}
function md(e, t) {
	let n = /* @__PURE__ */ ml(e, { shadowRoot: !1 });
	class r extends n {
		#e = !1;
		connectedCallback() {
			if (!this.#e) {
				let e = dd(this);
				this._light = e, this._options = e.options, this.#e = !0;
			}
			super.connectedCallback();
		}
	}
	return customElements.define(t, r), r;
}
//#endregion
//#region node_modules/@vueuse/shared/dist/index.js
function hd(e, t) {
	let n = /* @__PURE__ */ fn();
	return Tr(() => {
		n.value = e();
	}, {
		...t,
		flush: t?.flush ?? "sync"
	}), /* @__PURE__ */ $t(n);
}
function gd(e, t, n = {}) {
	let r, i, a, o = !0, s = () => {
		o = !0, a();
	};
	P(e, s, {
		flush: "sync",
		...n
	});
	let c = typeof t == "function" ? t : t.get, l = typeof t == "function" ? void 0 : t.set, u = bn((e, t) => (i = e, a = t, {
		get() {
			return o &&= (r = c(r), !1), i(), r;
		},
		set(e) {
			l?.(e);
		}
	}));
	return u.trigger = s, u;
}
function _d(e, t) {
	return Pe() ? (Fe(e, t), !0) : !1;
}
function vd() {
	let e = /* @__PURE__ */ new Set(), t = (t) => {
		e.delete(t);
	};
	return {
		on: (n) => {
			e.add(n);
			let r = () => t(n);
			return _d(r), { off: r };
		},
		off: t,
		trigger: (...t) => Promise.all(Array.from(e).map((e) => e(...t))),
		clear: () => {
			e.clear();
		}
	};
}
function yd(e) {
	let t = !1, n, r = Ne(!0);
	return ((...i) => (t ||= (n = r.run(() => e(...i)), !0), n));
}
var bd = /* @__PURE__ */ new WeakMap(), xd = (...e) => {
	let t = e[0], n = Ds()?.proxy ?? Pe();
	if (n == null && !Sr()) throw Error("injectLocal must be called in setup");
	return n && bd.has(n) && t in bd.get(n) ? bd.get(n)[t] : xr(...e);
};
function Sd(e, t) {
	let n = Ds()?.proxy ?? Pe();
	if (n == null) throw Error("provideLocal must be called in setup");
	bd.has(n) || bd.set(n, Object.create(null));
	let r = bd.get(n);
	return r[e] = t, br(e, t);
}
function Cd(e, t) {
	let n = t?.injectionKey || Symbol(e.name || "InjectionState"), r = t?.defaultValue;
	return [(...t) => {
		let r = e(...t);
		return Sd(n, r), r;
	}, () => xd(n, r)];
}
var wd = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var Td = (e) => e !== void 0, Ed = (e) => e != null, Dd = Object.prototype.toString, Od = (e) => Dd.call(e) === "[object Object]", kd = () => {}, Ad = /* @__PURE__ */ jd();
function jd() {
	var e, t;
	return wd && !!(!((e = window) == null || (e = e.navigator) == null) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) == null || (t = t.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function Md(...e) {
	if (e.length !== 1) return /* @__PURE__ */ wn(...e);
	let t = e[0];
	return typeof t == "function" ? /* @__PURE__ */ $t(bn(() => ({
		get: t,
		set: kd
	}))) : /* @__PURE__ */ j(t);
}
function Nd(e, t) {
	function n(...n) {
		return new Promise((r, i) => {
			Promise.resolve(e(() => t.apply(this, n), {
				fn: t,
				thisArg: this,
				args: n
			})).then(r).catch(i);
		});
	}
	return n;
}
var Pd = (e) => e();
function Fd(e, t = {}) {
	let n, r, i = kd, a = (e) => {
		clearTimeout(e), i(), i = kd;
	}, o;
	return (s) => {
		let c = gn(e), l = gn(t.maxWait);
		return n && a(n), c <= 0 || l !== void 0 && l <= 0 ? (r &&= (a(r), void 0), Promise.resolve(s())) : new Promise((e, u) => {
			i = t.rejectOnCancel ? u : e, o = s, l && !r && (r = setTimeout(() => {
				n && a(n), r = void 0, e(o());
			}, l)), n = setTimeout(() => {
				r && a(r), r = void 0, e(s());
			}, c);
		});
	};
}
function Id(e = Pd, t = {}) {
	let { initialState: n = "active" } = t, r = Md(n === "active");
	function i() {
		r.value = !1;
	}
	function a() {
		r.value = !0;
	}
	return {
		isActive: /* @__PURE__ */ en(r),
		pause: i,
		resume: a,
		eventFilter: (...t) => {
			r.value && e(...t);
		}
	};
}
function Ld(e) {
	return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Rd(e) {
	return Array.isArray(e) ? e : [e];
}
function zd(e) {
	let t = Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}
var Bd = /-(\w)/g, Vd = zd((e) => e.replace(Bd, (e, t) => t ? t.toUpperCase() : ""));
function Hd(e) {
	return e || Ds();
}
function Ud(e) {
	if (!wd) return e;
	let t = 0, n, r, i = () => {
		--t, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
	};
	return ((...a) => (t += 1, r || (r = Ne(!0), n = r.run(() => e(...a))), _d(i), n));
}
/* @__NO_SIDE_EFFECTS__ */
function Wd(e, t) {
	if (typeof Symbol < "u") {
		let n = { ...e };
		return Object.defineProperty(n, Symbol.iterator, {
			enumerable: !1,
			value() {
				let e = 0;
				return { next: () => ({
					value: t[e++],
					done: e > t.length
				}) };
			}
		}), n;
	} else return Object.assign([...t], e);
}
function Gd(e) {
	return Zt(/* @__PURE__ */ dn(e) ? new Proxy({}, {
		get(t, n, r) {
			return M(Reflect.get(e.value, n, r));
		},
		set(t, n, r) {
			return /* @__PURE__ */ dn(e.value[n]) && !/* @__PURE__ */ dn(r) ? e.value[n].value = r : e.value[n] = r, !0;
		},
		deleteProperty(t, n) {
			return Reflect.deleteProperty(e.value, n);
		},
		has(t, n) {
			return Reflect.has(e.value, n);
		},
		ownKeys() {
			return Object.keys(e.value);
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	}) : e);
}
function Kd(e) {
	return Gd(q(e));
}
function J(e, ...t) {
	let n = t.flat(), r = n[0];
	return Kd(() => Object.fromEntries(typeof r == "function" ? Object.entries(/* @__PURE__ */ xn(e)).filter(([e, t]) => !r(gn(t), e)) : Object.entries(/* @__PURE__ */ xn(e)).filter((e) => !n.includes(e[0]))));
}
function qd(e, t = 1e4) {
	return bn((n, r) => {
		let i = gn(e), a, o = () => setTimeout(() => {
			i = gn(e), r();
		}, gn(t));
		return _d(() => {
			clearTimeout(a);
		}), {
			get() {
				return n(), i;
			},
			set(e) {
				i = e, r(), clearTimeout(a), a = o();
			}
		};
	});
}
function Jd(e, t = 200, n = {}) {
	return Nd(Fd(t, n), e);
}
function Yd(e, t, n = {}) {
	let { eventFilter: r = Pd, ...i } = n;
	return P(e, Nd(r, t), i);
}
function Xd(e, t, n = {}) {
	let { eventFilter: r, initialState: i = "active", ...a } = n, { eventFilter: o, pause: s, resume: c, isActive: l } = Id(r, { initialState: i });
	return {
		stop: Yd(e, t, {
			...a,
			eventFilter: o
		}),
		pause: s,
		resume: c,
		isActive: l
	};
}
function Zd(e, t, ...[n]) {
	let { flush: r = "sync", deep: i = !1, immediate: a = !0, direction: o = "both", transform: s = {} } = n || {}, c = [], l = "ltr" in s && s.ltr || ((e) => e), u = "rtl" in s && s.rtl || ((e) => e);
	return (o === "both" || o === "ltr") && c.push(Xd(e, (e) => {
		c.forEach((e) => e.pause()), t.value = l(e), c.forEach((e) => e.resume());
	}, {
		flush: r,
		deep: i,
		immediate: a
	})), (o === "both" || o === "rtl") && c.push(Xd(t, (t) => {
		c.forEach((e) => e.pause()), e.value = u(t), c.forEach((e) => e.resume());
	}, {
		flush: r,
		deep: i,
		immediate: a
	})), () => {
		c.forEach((e) => e.stop());
	};
}
function Qd(e, t) {
	Hd(t) && Ji(e, t);
}
function $d(e, t, n = {}) {
	let { immediate: r = !0, immediateCallback: i = !1 } = n, a = /* @__PURE__ */ fn(!1), o;
	function s() {
		o &&= (clearTimeout(o), void 0);
	}
	function c() {
		a.value = !1, s();
	}
	function l(...n) {
		i && e(), s(), a.value = !0, o = setTimeout(() => {
			a.value = !1, o = void 0, e(...n);
		}, gn(t));
	}
	return r && (a.value = !0, wd && l()), _d(c), {
		isPending: /* @__PURE__ */ en(a),
		start: l,
		stop: c
	};
}
function ef(e, t, n) {
	return P(e, t, {
		...n,
		immediate: !0
	});
}
function tf(e, t, n) {
	return P(e, t, {
		...n,
		once: !0
	});
}
//#endregion
//#region node_modules/@vueuse/core/dist/index.js
function nf(e = {}) {
	let { inheritAttrs: t = !0, name: n = "ReusableTemplate" } = e, r = /* @__PURE__ */ fn(), i = /* @__PURE__ */ F({
		name: `${n}.define`,
		setup(e, { slots: t }) {
			return () => {
				r.value = t.default;
			};
		}
	}), a = /* @__PURE__ */ F({
		inheritAttrs: t,
		name: `${n}.reuse`,
		props: e.props,
		setup(n, { attrs: i, slots: a }) {
			return () => {
				if (!r.value) throw Error("[VueUse] Failed to find the definition of reusable template");
				let o = r.value?.call(r, {
					...e.props == null ? rf(i) : n,
					$slots: a
				});
				return t && o?.length === 1 ? o[0] : o;
			};
		}
	});
	return /* @__PURE__ */ Wd({
		define: i,
		reuse: a
	}, [i, a]);
}
function rf(e) {
	let t = {};
	for (let n in e) t[Vd(n)] = e[n];
	return t;
}
var af = wd ? window : void 0, of = wd ? window.document : void 0;
wd && window.navigator, wd && window.location;
function sf(e) {
	let t = gn(e);
	return t?.$el ?? t;
}
function cf(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = q(() => {
		let t = Rd(gn(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return ef(() => [
		n.value?.map((e) => sf(e)) ?? [af].filter((e) => e != null),
		Rd(gn(n.value ? e[1] : e[0])),
		Rd(M(n.value ? e[2] : e[1])),
		gn(n.value ? e[3] : e[2])
	], ([e, n, r, i], a, o) => {
		if (!e?.length || !n?.length || !r?.length) return;
		let s = Od(i) ? { ...i } : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
function lf() {
	let e = /* @__PURE__ */ fn(!1), t = Ds();
	return t && I(() => {
		e.value = !0;
	}, t), e;
}
/* @__NO_SIDE_EFFECTS__ */
function uf(e) {
	let t = lf();
	return q(() => (t.value, !!e()));
}
function df(e, t, n = {}) {
	let { window: r = af, ...i } = n, a, o = /* @__PURE__ */ uf(() => r && "MutationObserver" in r), s = () => {
		a &&= (a.disconnect(), void 0);
	}, c = P(q(() => {
		let t = Rd(gn(e)).map(sf).filter(Ed);
		return new Set(t);
	}), (e) => {
		s(), o.value && e.size && (a = new MutationObserver(t), e.forEach((e) => a.observe(e, i)));
	}, {
		immediate: !0,
		flush: "post"
	}), l = () => a?.takeRecords(), u = () => {
		c(), s();
	};
	return _d(u), {
		isSupported: o,
		stop: u,
		takeRecords: l
	};
}
function ff(e, t, n = {}) {
	let { window: r = af, document: i = r?.document, flush: a = "sync" } = n;
	if (!r || !i) return kd;
	let o, s = (e) => {
		o?.(), o = e;
	}, c = Tr(() => {
		let n = sf(e);
		if (n) {
			let { stop: e } = df(i, (e) => {
				e.map((e) => [...e.removedNodes]).flat().some((e) => e === n || e.contains(n)) && t(e);
			}, {
				window: r,
				childList: !0,
				subtree: !0
			});
			s(e);
		}
	}, { flush: a }), l = () => {
		c(), s();
	};
	return _d(l), l;
}
function pf(e) {
	return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function mf(...e) {
	let t, n, r = {};
	e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
	let { target: i = af, eventName: a = "keydown", passive: o = !1, dedupe: s = !1 } = r, c = pf(t);
	return cf(i, a, (e) => {
		e.repeat && gn(s) || c(e) && n(e);
	}, o);
}
function hf(e = {}) {
	let { window: t = af, deep: n = !0, triggerOnRemoval: r = !1 } = e, i = e.document ?? t?.document, a = () => {
		let e = i?.activeElement;
		if (n) for (var t; e?.shadowRoot;) e = e == null || (t = e.shadowRoot) == null ? void 0 : t.activeElement;
		return e;
	}, o = /* @__PURE__ */ fn(), s = () => {
		o.value = a();
	};
	if (t) {
		let e = {
			capture: !0,
			passive: !0
		};
		cf(t, "blur", (e) => {
			e.relatedTarget === null && s();
		}, e), cf(t, "focus", s, e);
	}
	return r && ff(o, s, { document: i }), s(), o;
}
var gf = Symbol("vueuse-ssr-width");
/* @__NO_SIDE_EFFECTS__ */
function _f() {
	let e = Sr() ? xd(gf, null) : null;
	return typeof e == "number" ? e : void 0;
}
function vf(e, t = {}) {
	let { window: n = af, ssrWidth: r = /* @__PURE__ */ _f() } = t, i = /* @__PURE__ */ uf(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), a = /* @__PURE__ */ fn(typeof r == "number"), o = /* @__PURE__ */ fn(), s = /* @__PURE__ */ fn(!1);
	return Tr(() => {
		if (a.value) {
			a.value = !i.value, s.value = gn(e).split(",").some((e) => {
				let t = e.includes("not all"), n = e.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), i = e.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), a = !!(n || i);
				return n && a && (a = r >= Ld(n[1])), i && a && (a = r <= Ld(i[1])), t ? !a : a;
			});
			return;
		}
		i.value && (o.value = n.matchMedia(gn(e)), s.value = o.value.matches);
	}), cf(o, "change", (e) => {
		s.value = e.matches;
	}, { passive: !0 }), q(() => s.value);
}
function yf(e) {
	return JSON.parse(JSON.stringify(e));
}
function bf(e) {
	let t = Ds(), n = gd(() => null, () => e ? sf(e) : t.proxy.$el);
	return qi(n.trigger), I(n.trigger), n;
}
function xf(e, t, n = {}) {
	let { window: r = af, ...i } = n, a, o = /* @__PURE__ */ uf(() => r && "ResizeObserver" in r), s = () => {
		a &&= (a.disconnect(), void 0);
	}, c = P(q(() => {
		let t = gn(e);
		return Array.isArray(t) ? t.map((e) => sf(e)) : [sf(t)];
	}), (e) => {
		if (s(), o.value && r) {
			a = new ResizeObserver(t);
			for (let t of e) t && a.observe(t, i);
		}
	}, {
		immediate: !0,
		flush: "post"
	}), l = () => {
		s(), c();
	};
	return _d(l), {
		isSupported: o,
		stop: l
	};
}
var Sf = "focusin", Cf = "focusout", wf = ":focus-within";
function Tf(e, t = {}) {
	let { window: n = af } = t, r = q(() => sf(e)), i = /* @__PURE__ */ fn(!1), a = q(() => i.value), o = hf(t);
	if (!n || !o.value) return { focused: a };
	let s = { passive: !0 };
	return cf(r, Sf, () => i.value = !0, s), cf(r, Cf, () => {
		var e, t;
		return i.value = ((e = r.value) == null || (t = e.matches) == null ? void 0 : t.call(e, wf)) ?? !1;
	}, s), { focused: a };
}
function Ef(e, t, n, r = {}) {
	var i, a;
	let { clone: o = !1, passive: s = !1, eventName: c, deep: l = !1, defaultValue: u, shouldEmit: d } = r, f = Ds(), p = n || f?.emit || (f == null || (i = f.$emit) == null ? void 0 : i.bind(f)) || (f == null || (a = f.proxy) == null || (a = a.$emit) == null ? void 0 : a.bind(f?.proxy)), m = c;
	t ||= "modelValue", m ||= `update:${t.toString()}`;
	let h = (e) => o ? typeof o == "function" ? o(e) : yf(e) : e, g = () => Td(e[t]) ? h(e[t]) : u, _ = (e) => {
		d ? d(e) && p(m, e) : p(m, e);
	};
	if (s) {
		let n = /* @__PURE__ */ j(g()), r = !1;
		return P(() => e[t], (e) => {
			r || (r = !0, n.value = h(e), er(() => r = !1));
		}), P(n, (n) => {
			!r && (n !== e[t] || l) && _(n);
		}, { deep: l }), n;
	} else return q({
		get() {
			return g();
		},
		set(e) {
			_(e);
		}
	});
}
//#endregion
//#region node_modules/lucide-vue-next/dist/esm/shared/src/utils/hasA11yProp.js
var Df = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, Of = (e) => e === "", kf = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), Af = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), jf = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), Mf = (e) => {
	let t = jf(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, Nf = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Pf = ({ name: e, iconNode: t, absoluteStrokeWidth: n, "absolute-stroke-width": r, strokeWidth: i, "stroke-width": a, size: o = Nf.width, color: s = Nf.stroke, ...c }, { slots: l }) => qs("svg", {
	...Nf,
	...c,
	width: o,
	height: o,
	stroke: s,
	"stroke-width": Of(n) || Of(r) || n === !0 || r === !0 ? Number(i || a || Nf["stroke-width"]) * 24 / Number(o) : i || a || Nf["stroke-width"],
	class: kf("lucide", c.class, ...e ? [`lucide-${Af(Mf(e))}-icon`, `lucide-${Af(e)}`] : ["lucide-icon"]),
	...!l.default && !Df(c) && { "aria-hidden": "true" }
}, [...t.map((e) => qs(...e)), ...l.default ? [l.default()] : []]), Ff = (e, t) => (n, { slots: r, attrs: i }) => qs(Pf, {
	...i,
	...n,
	iconNode: t,
	name: e
}, r), If = Ff("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), Lf = Ff("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), Rf = Ff("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), zf = Ff("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), Bf = Ff("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), Vf = Ff("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), Hf = Ff("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), Uf = Ff("ellipsis", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "19",
		cy: "12",
		r: "1",
		key: "1wjl8i"
	}],
	["circle", {
		cx: "5",
		cy: "12",
		r: "1",
		key: "1pcz8c"
	}]
]), Wf = Ff("info", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 16v-4",
		key: "1dtifu"
	}],
	["path", {
		d: "M12 8h.01",
		key: "e9boi3"
	}]
]), Gf = Ff("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]), Kf = Ff("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), qf = Ff("octagon-x", [
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
		key: "2d38gg"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]), Jf = Ff("panel-left", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M9 3v18",
	key: "fh3hqa"
}]]), Yf = Ff("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), Xf = Ff("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), Zf = Ff("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), Qf = Ff("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region node_modules/ohash/dist/shared/ohash.D__AXeF1.mjs
function $f(e) {
	return typeof e == "string" ? `'${e}'` : new ep().serialize(e);
}
var ep = /* @__PURE__ */ function() {
	class e {
		#e = /* @__PURE__ */ new Map();
		compare(e, t) {
			let n = typeof e, r = typeof t;
			return n === "string" && r === "string" ? e.localeCompare(t) : n === "number" && r === "number" ? e - t : String.prototype.localeCompare.call(this.serialize(e, !0), this.serialize(t, !0));
		}
		serialize(e, t) {
			if (e === null) return "null";
			switch (typeof e) {
				case "string": return t ? e : `'${e}'`;
				case "bigint": return `${e}n`;
				case "object": return this.$object(e);
				case "function": return this.$function(e);
			}
			return String(e);
		}
		serializeObject(e) {
			let t = Object.prototype.toString.call(e);
			if (t !== "[object Object]") return this.serializeBuiltInType(t.length < 10 ? `unknown:${t}` : t.slice(8, -1), e);
			let n = e.constructor, r = n === Object || n === void 0 ? "" : n.name;
			if (r !== "" && globalThis[r] === n) return this.serializeBuiltInType(r, e);
			if (typeof e.toJSON == "function") {
				let t = e.toJSON();
				return r + (typeof t == "object" && t ? this.$object(t) : `(${this.serialize(t)})`);
			}
			return this.serializeObjectEntries(r, Object.entries(e));
		}
		serializeBuiltInType(e, t) {
			let n = this["$" + e];
			if (n) return n.call(this, t);
			if (typeof t?.entries == "function") return this.serializeObjectEntries(e, t.entries());
			throw Error(`Cannot serialize ${e}`);
		}
		serializeObjectEntries(e, t) {
			let n = Array.from(t).sort((e, t) => this.compare(e[0], t[0])), r = `${e}{`;
			for (let e = 0; e < n.length; e++) {
				let [t, i] = n[e];
				r += `${this.serialize(t, !0)}:${this.serialize(i)}`, e < n.length - 1 && (r += ",");
			}
			return r + "}";
		}
		$object(e) {
			let t = this.#e.get(e);
			return t === void 0 && (this.#e.set(e, `#${this.#e.size}`), t = this.serializeObject(e), this.#e.set(e, t)), t;
		}
		$function(e) {
			let t = Function.prototype.toString.call(e);
			return t.slice(-15) === "[native code] }" ? `${e.name || ""}()[native]` : `${e.name}(${e.length})${t.replace(/\s*\n\s*/g, "")}`;
		}
		$Array(e) {
			let t = "[";
			for (let n = 0; n < e.length; n++) t += this.serialize(e[n]), n < e.length - 1 && (t += ",");
			return t + "]";
		}
		$Date(e) {
			try {
				return `Date(${e.toISOString()})`;
			} catch {
				return "Date(null)";
			}
		}
		$ArrayBuffer(e) {
			return `ArrayBuffer[${new Uint8Array(e).join(",")}]`;
		}
		$Set(e) {
			return `Set${this.$Array(Array.from(e).sort((e, t) => this.compare(e, t)))}`;
		}
		$Map(e) {
			return this.serializeObjectEntries("Map", e.entries());
		}
	}
	for (let t of [
		"Error",
		"RegExp",
		"URL"
	]) e.prototype["$" + t] = function(e) {
		return `${t}(${e})`;
	};
	for (let t of [
		"Int8Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Int16Array",
		"Uint16Array",
		"Int32Array",
		"Uint32Array",
		"Float32Array",
		"Float64Array"
	]) e.prototype["$" + t] = function(e) {
		return `${t}[${e.join(",")}]`;
	};
	for (let t of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + t] = function(e) {
		return `${t}[${e.join("n,")}${e.length > 0 ? "n" : ""}]`;
	};
	return e;
}();
function tp(e, t) {
	return e === t || $f(e) === $f(t);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/arrays.js
function np(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function rp(e, t, n) {
	let r = e.findIndex((e) => tp(e, t)), i = e.findIndex((e) => tp(e, n));
	if (r === -1 || i === -1) return [];
	let [a, o] = [r, i].sort((e, t) => e - t);
	return e.slice(a, o + 1);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/browser.js
var ip = typeof document < "u";
//#endregion
//#region node_modules/reka-ui/dist/shared/clamp.js
function ap(e, t = -Infinity, n = Infinity) {
	return Math.min(n, Math.max(t, e));
}
function op(e, t) {
	let n = e, r = t.toString(), i = r.indexOf("."), a = i >= 0 ? r.length - i : 0;
	if (a > 0) {
		let e = 10 ** a;
		n = Math.round(n * e) / e;
	}
	return n;
}
function sp(e, t, n, r) {
	t = Number(t), n = Number(n);
	let i = (e - (Number.isNaN(t) ? 0 : t)) % r, a = op(Math.abs(i) * 2 >= r ? e + Math.sign(i) * (r - Math.abs(i)) : e - i, r);
	return Number.isNaN(t) ? !Number.isNaN(n) && a > n && (a = Math.floor(op(n / r, r)) * r) : a < t ? a = t : !Number.isNaN(n) && a > n && (a = t + Math.floor(op((n - t) / r, r)) * r), a = op(a, r), a;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/createContext.js
function cp(e, t) {
	let n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
	return [(t) => {
		let n = xr(r, t);
		if (n || n === null) return n;
		throw Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
	}, (e) => (br(r, e), e)];
}
//#endregion
//#region node_modules/reka-ui/dist/shared/getActiveElement.js
function lp() {
	let e = document.activeElement;
	if (e == null) return null;
	for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null;) e = e.shadowRoot.activeElement;
	return e;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/handleAndDispatchCustomEvent.js
function up(e, t, n) {
	let r = n.originalEvent.target, i = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(i);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/nullish.js
function dp(e) {
	return e == null;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/isValueEqualOrExist.js
function fp(e, t) {
	return dp(e) ? !1 : Array.isArray(e) ? e.some((e) => tp(e, t)) : tp(e, t);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/renderSlotFragments.js
function pp(e) {
	return e ? e.flatMap((e) => e.type === R ? pp(e.children) : [e]) : [];
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useArrowNavigation.js
var mp = ["INPUT", "TEXTAREA"];
function hp(e, t, n, r = {}) {
	if (!t || r.enableIgnoredElement && mp.includes(t.nodeName)) return null;
	let { arrowKeyOptions: i = "both", attributeName: a = "[data-reka-collection-item]", itemsArray: o = [], loop: s = !0, dir: c = "ltr", preventScroll: l = !0, focus: u = !1 } = r, [d, f, p, m, h, g] = [
		e.key === "ArrowRight",
		e.key === "ArrowLeft",
		e.key === "ArrowUp",
		e.key === "ArrowDown",
		e.key === "Home",
		e.key === "End"
	], _ = p || m, v = d || f;
	if (!h && !g && (!_ && !v || i === "vertical" && v || i === "horizontal" && _)) return null;
	let y = n ? Array.from(n.querySelectorAll(a)) : o;
	if (!y.length) return null;
	l && e.preventDefault();
	let b = null;
	return v || _ ? b = gp(y, t, {
		goForward: _ ? m : c === "ltr" ? d : f,
		loop: s
	}) : h ? b = y.at(0) || null : g && (b = y.at(-1) || null), u && b?.focus(), b;
}
function gp(e, t, n, r = e.includes(t) ? e.length : e.length + 1) {
	if (--r === 0) return null;
	let i = e.indexOf(t), a;
	if (a = i === -1 ? n.goForward ? 0 : e.length - 1 : n.goForward ? i + 1 : i - 1, !n.loop && (a < 0 || a >= e.length)) return null;
	let o = e[(a + e.length) % e.length];
	return o ? o.hasAttribute("disabled") && o.getAttribute("disabled") !== "false" ? gp(e, o, n, r) : o : null;
}
//#endregion
//#region node_modules/reka-ui/dist/ConfigProvider/ConfigProvider.js
var [_p, vp] = /* @__PURE__ */ cp("ConfigProvider");
//#endregion
//#region node_modules/defu/dist/defu.mjs
function yp(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function bp(e, t, n = ".", r) {
	if (!yp(t)) return bp(e, {}, n, r);
	let i = { ...t };
	for (let t of Object.keys(e)) {
		if (t === "__proto__" || t === "constructor") continue;
		let a = e[t];
		a != null && (r && r(i, t, a, n) || (Array.isArray(a) && Array.isArray(i[t]) ? i[t] = [...a, ...i[t]] : yp(a) && yp(i[t]) ? i[t] = bp(a, i[t], (n ? `${n}.` : "") + t.toString(), r) : i[t] = a));
	}
	return i;
}
function xp(e) {
	return (...t) => t.reduce((t, n) => bp(t, n, "", e), {});
}
var Sp = xp(), Cp = Ud(() => {
	let e = /* @__PURE__ */ j(/* @__PURE__ */ new Map()), t = /* @__PURE__ */ j(), n = q(() => {
		for (let t of e.value.values()) if (t) return !0;
		return !1;
	}), r = _p({ scrollBody: /* @__PURE__ */ j(!0) }), i = null, a = () => {
		document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Ad && i?.(), t.value = void 0;
	};
	return P(n, (e, o) => {
		if (!wd) return;
		if (!e) {
			o && a();
			return;
		}
		t.value === void 0 && (t.value = document.body.style.overflow);
		let s = window.innerWidth - document.documentElement.clientWidth, c = {
			padding: s,
			margin: 0
		}, l = r.scrollBody?.value ? typeof r.scrollBody.value == "object" ? Sp({
			padding: r.scrollBody.value.padding === !0 ? s : r.scrollBody.value.padding,
			margin: r.scrollBody.value.margin === !0 ? s : r.scrollBody.value.margin
		}, c) : c : {
			padding: 0,
			margin: 0
		};
		s > 0 && (document.body.style.paddingRight = typeof l.padding == "number" ? `${l.padding}px` : String(l.padding), document.body.style.marginRight = typeof l.margin == "number" ? `${l.margin}px` : String(l.margin), document.documentElement.style.setProperty("--scrollbar-width", `${s}px`), document.body.style.overflow = "hidden"), Ad && (i = cf(document, "touchmove", (e) => Ep(e), { passive: !1 })), er(() => {
			n.value && (document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden");
		});
	}, {
		immediate: !0,
		flush: "sync"
	}), e;
});
function wp(e) {
	let t = Math.random().toString(36).substring(2, 7), n = Cp();
	n.value.set(t, e ?? !1);
	let r = q({
		get: () => n.value.get(t) ?? !1,
		set: (e) => n.value.set(t, e)
	});
	return Qd(() => {
		n.value.delete(t);
	}), r;
}
function Tp(e) {
	let t = window.getComputedStyle(e);
	if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
	{
		let t = e.parentNode;
		return !(t instanceof Element) || t.tagName === "BODY" ? !1 : Tp(t);
	}
}
function Ep(e) {
	let t = e || window.event, n = t.target;
	return n instanceof Element && Tp(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/utils.mjs
function Dp(e, t) {
	return e - t * Math.floor(e / t);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/calendars/GregorianCalendar.mjs
var Op = 1721426;
function kp(e, t, n, r) {
	t = jp(e, t);
	let i = t - 1, a = -2;
	return n <= 2 ? a = 0 : Ap(t) && (a = -1), Op - 1 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + a + r);
}
function Ap(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function jp(e, t) {
	return e === "BC" ? 1 - t : t;
}
function Mp(e) {
	let t = "AD";
	return e <= 0 && (t = "BC", e = 1 - e), [t, e];
}
var Np = {
	standard: [
		31,
		28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	],
	leapyear: [
		31,
		29,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	]
}, Pp = class {
	fromJulianDay(e) {
		let t = e, n = t - Op, r = Math.floor(n / 146097), i = Dp(n, 146097), a = Math.floor(i / 36524), o = Dp(i, 36524), s = Math.floor(o / 1461), c = Dp(o, 1461), l = Math.floor(c / 365), [u, d] = Mp(r * 400 + a * 100 + s * 4 + l + +(a !== 4 && l !== 4)), f = t - kp(u, d, 1, 1), p = 2;
		t < kp(u, d, 3, 1) ? p = 0 : Ap(d) && (p = 1);
		let m = Math.floor(((f + p) * 12 + 373) / 367);
		return new Zm(u, d, m, t - kp(u, d, m, 1) + 1);
	}
	toJulianDay(e) {
		return kp(e.era, e.year, e.month, e.day);
	}
	getDaysInMonth(e) {
		return Np[Ap(e.year) ? "leapyear" : "standard"][e.month - 1];
	}
	getMonthsInYear(e) {
		return 12;
	}
	getDaysInYear(e) {
		return Ap(e.year) ? 366 : 365;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 31;
	}
	getYearsInEra(e) {
		return 9999;
	}
	getEras() {
		return ["BC", "AD"];
	}
	isInverseEra(e) {
		return e.era === "BC";
	}
	balanceDate(e) {
		e.year <= 0 && (e.era = e.era === "BC" ? "AD" : "BC", e.year = 1 - e.year);
	}
	constructor() {
		this.identifier = "gregory";
	}
}, Fp = {
	"001": 1,
	AD: 1,
	AE: 6,
	AF: 6,
	AI: 1,
	AL: 1,
	AM: 1,
	AN: 1,
	AR: 1,
	AT: 1,
	AU: 1,
	AX: 1,
	AZ: 1,
	BA: 1,
	BE: 1,
	BG: 1,
	BH: 6,
	BM: 1,
	BN: 1,
	BY: 1,
	CH: 1,
	CL: 1,
	CM: 1,
	CN: 1,
	CR: 1,
	CY: 1,
	CZ: 1,
	DE: 1,
	DJ: 6,
	DK: 1,
	DZ: 6,
	EC: 1,
	EE: 1,
	EG: 6,
	ES: 1,
	FI: 1,
	FJ: 1,
	FO: 1,
	FR: 1,
	GB: 1,
	GE: 1,
	GF: 1,
	GP: 1,
	GR: 1,
	HR: 1,
	HU: 1,
	IE: 1,
	IQ: 6,
	IR: 6,
	IS: 1,
	IT: 1,
	JO: 6,
	KG: 1,
	KW: 6,
	KZ: 1,
	LB: 1,
	LI: 1,
	LK: 1,
	LT: 1,
	LU: 1,
	LV: 1,
	LY: 6,
	MC: 1,
	MD: 1,
	ME: 1,
	MK: 1,
	MN: 1,
	MQ: 1,
	MV: 5,
	MY: 1,
	NL: 1,
	NO: 1,
	NZ: 1,
	OM: 6,
	PL: 1,
	QA: 6,
	RE: 1,
	RO: 1,
	RS: 1,
	RU: 1,
	SD: 6,
	SE: 1,
	SI: 1,
	SK: 1,
	SM: 1,
	SY: 6,
	TJ: 1,
	TM: 1,
	TR: 1,
	UA: 1,
	UY: 1,
	UZ: 1,
	VA: 1,
	VN: 1,
	XK: 1
};
//#endregion
//#region node_modules/@internationalized/date/dist/private/queries.mjs
function Ip(e, t) {
	return t = ym(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Lp(e, t) {
	return t = ym(t, e.calendar), e = $p(e), t = $p(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Rp(e, t) {
	return Bp(e.calendar, t.calendar) && Ip(e, t);
}
function zp(e, t) {
	return Bp(e.calendar, t.calendar) && Lp(e, t);
}
function Bp(e, t) {
	return e.isEqual?.(t) ?? t.isEqual?.(e) ?? e.identifier === t.identifier;
}
function Vp(e, t) {
	return Ip(e, Gp(t));
}
var Hp = {
	sun: 0,
	mon: 1,
	tue: 2,
	wed: 3,
	thu: 4,
	fri: 5,
	sat: 6
};
function Up(e, t, n) {
	let r = e.calendar.toJulianDay(e), i = n ? Hp[n] : am(t), a = Math.ceil(r + 1 - i) % 7;
	return a < 0 && (a += 7), a;
}
function Wp(e) {
	return gm(Date.now(), e);
}
function Gp(e) {
	return _m(Wp(e));
}
function Kp(e, t) {
	return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function qp(e, t) {
	return Jp(e) - Jp(t);
}
function Jp(e) {
	return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
var Yp = null, Xp = !1;
function Zp() {
	return Yp ??= new Intl.DateTimeFormat().resolvedOptions().timeZone, Yp;
}
function Qp() {
	return Xp;
}
function $p(e) {
	return e.subtract({ days: e.day - 1 });
}
function em(e) {
	return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function tm(e) {
	return $p(e.subtract({ months: e.month - 1 }));
}
var nm = /* @__PURE__ */ new Map(), rm = /* @__PURE__ */ new Map();
function im(e) {
	if (Intl.Locale) {
		let t = nm.get(e);
		return t || (t = new Intl.Locale(e).maximize().region, t && nm.set(e, t)), t;
	}
	let t = e.split("-")[1];
	return t === "u" ? void 0 : t;
}
function am(e) {
	let t = rm.get(e);
	if (!t) {
		if (Intl.Locale) {
			let n = new Intl.Locale(e);
			if ("getWeekInfo" in n && (t = n.getWeekInfo(), t)) return rm.set(e, t), t.firstDay;
		}
		let n = im(e);
		if (e.includes("-fw-")) {
			let n = e.split("-fw-")[1].split("-")[0];
			t = n === "mon" ? { firstDay: 1 } : n === "tue" ? { firstDay: 2 } : n === "wed" ? { firstDay: 3 } : n === "thu" ? { firstDay: 4 } : n === "fri" ? { firstDay: 5 } : n === "sat" ? { firstDay: 6 } : { firstDay: 0 };
		} else t = e.includes("-ca-iso8601") ? { firstDay: 1 } : { firstDay: n && Fp[n] || 0 };
		rm.set(e, t);
	}
	return t.firstDay;
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/conversion.mjs
function om(e) {
	return e = ym(e, new Pp()), sm(jp(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function sm(e, t, n, r, i, a, o) {
	let s = /* @__PURE__ */ new Date();
	return s.setUTCHours(r, i, a, o), s.setUTCFullYear(e, t - 1, n), s.getTime();
}
function cm(e, t) {
	if (t === "UTC") return 0;
	if (e > 0 && t === Zp() && !Qp()) return new Date(e).getTimezoneOffset() * -6e4;
	let { year: n, month: r, day: i, hour: a, minute: o, second: s } = um(e, t);
	return sm(n, r, i, a, o, s, 0) - Math.floor(e / 1e3) * 1e3;
}
var lm = /* @__PURE__ */ new Map();
function um(e, t) {
	let n = lm.get(t);
	n || (n = new Intl.DateTimeFormat("en-US", {
		timeZone: t,
		hour12: !1,
		era: "short",
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	}), lm.set(t, n));
	let r = n.formatToParts(new Date(e)), i = {};
	for (let e of r) e.type !== "literal" && (i[e.type] = e.value);
	return {
		year: i.era === "BC" || i.era === "B" ? -i.year + 1 : +i.year,
		month: +i.month,
		day: +i.day,
		hour: i.hour === "24" ? 0 : +i.hour,
		minute: +i.minute,
		second: +i.second
	};
}
var dm = 864e5;
function fm(e, t, n, r) {
	return (n === r ? [n] : [n, r]).filter((n) => pm(e, t, n));
}
function pm(e, t, n) {
	let r = um(n, t);
	return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function mm(e, t, n = "compatible") {
	let r = vm(e);
	if (t === "UTC") return om(r);
	if (t === Zp() && n === "compatible" && !Qp()) {
		r = ym(r, new Pp());
		let e = /* @__PURE__ */ new Date(), t = jp(r.era, r.year);
		return e.setFullYear(t, r.month - 1, r.day), e.setHours(r.hour, r.minute, r.second, r.millisecond), e.getTime();
	}
	let i = om(r), a = cm(i - dm, t), o = cm(i + dm, t), s = fm(r, t, i - a, i - o);
	if (s.length === 1) return s[0];
	if (s.length > 1) switch (n) {
		case "compatible":
		case "earlier": return s[0];
		case "later": return s[s.length - 1];
		case "reject": throw RangeError("Multiple possible absolute times found");
	}
	switch (n) {
		case "earlier": return Math.min(i - a, i - o);
		case "compatible":
		case "later": return Math.max(i - a, i - o);
		case "reject": throw RangeError("No such absolute time found");
	}
}
function hm(e, t, n = "compatible") {
	return new Date(mm(e, t, n));
}
function gm(e, t) {
	let n = cm(e, t), r = new Date(e + n), i = r.getUTCFullYear(), a = r.getUTCMonth() + 1, o = r.getUTCDate(), s = r.getUTCHours(), c = r.getUTCMinutes(), l = r.getUTCSeconds(), u = r.getUTCMilliseconds();
	return new $m(i < 1 ? "BC" : "AD", i < 1 ? -i + 1 : i, a, o, t, n, s, c, l, u);
}
function _m(e) {
	return new Zm(e.calendar, e.era, e.year, e.month, e.day);
}
function vm(e, t) {
	let n = 0, r = 0, i = 0, a = 0;
	if ("timeZone" in e) ({hour: n, minute: r, second: i, millisecond: a} = e);
	else if ("hour" in e && !t) return e;
	return t && ({hour: n, minute: r, second: i, millisecond: a} = t), new Qm(e.calendar, e.era, e.year, e.month, e.day, n, r, i, a);
}
function ym(e, t) {
	if (Bp(e.calendar, t)) return e;
	let n = t.fromJulianDay(e.calendar.toJulianDay(e)), r = e.copy();
	return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, km(r), r;
}
function bm(e, t, n) {
	return e instanceof $m ? e.timeZone === t ? e : Sm(e, t) : gm(mm(e, t, n), t);
}
function xm(e) {
	let t = om(e) - e.offset;
	return new Date(t);
}
function Sm(e, t) {
	return ym(gm(om(e) - e.offset, t), e.calendar);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/manipulation.mjs
var Cm = 36e5;
function wm(e, t) {
	let n = e.copy(), r = "hour" in n ? Lm(n, t) : 0;
	Tm(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, Em(n), Om(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += r, Dm(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
	let i = n.calendar.getYearsInEra(n);
	if (n.year > i) {
		let e = n.calendar.isInverseEra?.(n);
		n.year = i, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n);
	}
	n.month < 1 && (n.month = 1, n.day = 1);
	let a = n.calendar.getMonthsInYear(n);
	return n.month > a && (n.month = a, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n;
}
function Tm(e, t) {
	e.calendar.isInverseEra?.(e) && (t = -t), e.year += t;
}
function Em(e) {
	for (; e.month < 1;) Tm(e, -1), e.month += e.calendar.getMonthsInYear(e);
	let t = 0;
	for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, Tm(e, 1);
}
function Dm(e) {
	for (; e.day < 1;) e.month--, Em(e), e.day += e.calendar.getDaysInMonth(e);
	for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, Em(e);
}
function Om(e) {
	e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function km(e) {
	e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Om(e);
}
function Am(e) {
	let t = {};
	for (let n in e) typeof e[n] == "number" && (t[n] = -e[n]);
	return t;
}
function jm(e, t) {
	return wm(e, Am(t));
}
function Mm(e, t) {
	let n = e.copy();
	return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), km(n), n;
}
function Nm(e, t) {
	let n = e.copy();
	return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), Fm(n), n;
}
function Pm(e) {
	e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Im(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Im(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Im(e.minute, 60);
	let t = Math.floor(e.hour / 24);
	return e.hour = Im(e.hour, 24), t;
}
function Fm(e) {
	e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Im(e, t) {
	let n = e % t;
	return n < 0 && (n += t), n;
}
function Lm(e, t) {
	return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, Pm(e);
}
function Rm(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case "era": {
			let t = e.calendar.getEras(), a = t.indexOf(e.era);
			if (a < 0) throw Error("Invalid era: " + e.era);
			a = Bm(a, n, 0, t.length - 1, r?.round), i.era = t[a], km(i);
			break;
		}
		case "year":
			i.calendar.isInverseEra?.(i) && (n = -n), i.year = Bm(e.year, n, -Infinity, 9999, r?.round), i.year === -Infinity && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
			break;
		case "month":
			i.month = Bm(e.month, n, 1, e.calendar.getMonthsInYear(e), r?.round);
			break;
		case "day":
			i.day = Bm(e.day, n, 1, e.calendar.getDaysInMonth(e), r?.round);
			break;
		default: throw Error("Unsupported field " + t);
	}
	return e.calendar.balanceDate && e.calendar.balanceDate(i), km(i), i;
}
function zm(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case "hour": {
			let t = e.hour, a = 0, o = 23;
			if (r?.hourCycle === 12) {
				let e = t >= 12;
				a = e ? 12 : 0, o = e ? 23 : 11;
			}
			i.hour = Bm(t, n, a, o, r?.round);
			break;
		}
		case "minute":
			i.minute = Bm(e.minute, n, 0, 59, r?.round);
			break;
		case "second":
			i.second = Bm(e.second, n, 0, 59, r?.round);
			break;
		case "millisecond":
			i.millisecond = Bm(e.millisecond, n, 0, 999, r?.round);
			break;
		default: throw Error("Unsupported field " + t);
	}
	return i;
}
function Bm(e, t, n, r, i = !1) {
	if (i) {
		e += Math.sign(t), e < n && (e = r);
		let i = Math.abs(t);
		e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i, e > r && (e = n);
	} else e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
	return e;
}
function Vm(e, t) {
	let n;
	return n = t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0 ? mm(wm(vm(e), {
		years: t.years,
		months: t.months,
		weeks: t.weeks,
		days: t.days
	}), e.timeZone) : om(e) - e.offset, n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5, ym(gm(n, e.timeZone), e.calendar);
}
function Hm(e, t) {
	return Vm(e, Am(t));
}
function Um(e, t, n, r) {
	switch (t) {
		case "hour": {
			let t = 0, i = 23;
			if (r?.hourCycle === 12) {
				let n = e.hour >= 12;
				t = n ? 12 : 0, i = n ? 23 : 11;
			}
			let a = vm(e), o = ym(Nm(a, { hour: t }), new Pp()), s = [mm(o, e.timeZone, "earlier"), mm(o, e.timeZone, "later")].filter((t) => gm(t, e.timeZone).day === o.day)[0], c = ym(Nm(a, { hour: i }), new Pp()), l = [mm(c, e.timeZone, "earlier"), mm(c, e.timeZone, "later")].filter((t) => gm(t, e.timeZone).day === c.day).pop(), u = om(e) - e.offset, d = Math.floor(u / Cm), f = u % Cm;
			return u = Bm(d, n, Math.floor(s / Cm), Math.floor(l / Cm), r?.round) * Cm + f, ym(gm(u, e.timeZone), e.calendar);
		}
		case "minute":
		case "second":
		case "millisecond": return zm(e, t, n, r);
		case "era":
		case "year":
		case "month":
		case "day": return ym(gm(mm(Rm(vm(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
		default: throw Error("Unsupported field " + t);
	}
}
function Wm(e, t, n) {
	let r = vm(e), i = Nm(Mm(r, t), t);
	return i.compare(r) === 0 ? e : ym(gm(mm(i, e.timeZone, n), e.timeZone), e.calendar);
}
function Gm(e) {
	return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function Km(e) {
	let t = ym(e, new Pp()), n;
	return n = t.era === "BC" ? t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : String(t.year).padStart(4, "0"), `${n}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function qm(e) {
	return `${Km(e)}T${Gm(e)}`;
}
function Jm(e) {
	let t = Math.sign(e) < 0 ? "-" : "+";
	e = Math.abs(e);
	let n = Math.floor(e / 36e5), r = Math.floor(e % 36e5 / 6e4), i = Math.floor(e % 36e5 % 6e4 / 1e3), a = `${t}${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
	return i !== 0 && (a += `:${String(i).padStart(2, "0")}`), a;
}
function Ym(e) {
	return `${qm(e)}${Jm(e.offset)}[${e.timeZone}]`;
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/CalendarDate.mjs
function Xm(e) {
	let t = typeof e[0] == "object" ? e.shift() : new Pp(), n;
	if (typeof e[0] == "string") n = e.shift();
	else {
		let e = t.getEras();
		n = e[e.length - 1];
	}
	let r = e.shift(), i = e.shift(), a = e.shift();
	return [
		t,
		n,
		r,
		i,
		a
	];
}
var Zm = class e {
	constructor(...e) {
		let [t, n, r, i, a] = Xm(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, km(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day) : new e(this.calendar, this.year, this.month, this.day);
	}
	add(e) {
		return wm(this, e);
	}
	subtract(e) {
		return jm(this, e);
	}
	set(e) {
		return Mm(this, e);
	}
	cycle(e, t, n) {
		return Rm(this, e, t, n);
	}
	toDate(e) {
		return hm(this, e);
	}
	toString() {
		return Km(this);
	}
	compare(e) {
		return Kp(this, e);
	}
}, Qm = class e {
	constructor(...e) {
		let [t, n, r, i, a] = Xm(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, km(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return wm(this, e);
	}
	subtract(e) {
		return jm(this, e);
	}
	set(e) {
		return Mm(Nm(this, e), e);
	}
	cycle(e, t, n) {
		switch (e) {
			case "era":
			case "year":
			case "month":
			case "day": return Rm(this, e, t, n);
			default: return zm(this, e, t, n);
		}
	}
	toDate(e, t) {
		return hm(this, e, t);
	}
	toString() {
		return qm(this);
	}
	compare(e) {
		let t = Kp(this, e);
		return t === 0 ? qp(this, vm(e)) : t;
	}
}, $m = class e {
	constructor(...e) {
		let [t, n, r, i, a] = Xm(e), o = e.shift(), s = e.shift();
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.timeZone = o, this.offset = s, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, km(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return Vm(this, e);
	}
	subtract(e) {
		return Hm(this, e);
	}
	set(e, t) {
		return Wm(this, e, t);
	}
	cycle(e, t, n) {
		return Um(this, e, t, n);
	}
	toDate() {
		return xm(this);
	}
	toString() {
		return Ym(this);
	}
	toAbsoluteString() {
		return this.toDate().toISOString();
	}
	compare(e) {
		return this.toDate().getTime() - bm(e, this.timeZone).toDate().getTime();
	}
}, eh = [
	[
		1868,
		9,
		8
	],
	[
		1912,
		7,
		30
	],
	[
		1926,
		12,
		25
	],
	[
		1989,
		1,
		8
	],
	[
		2019,
		5,
		1
	]
], th = [
	[
		1912,
		7,
		29
	],
	[
		1926,
		12,
		24
	],
	[
		1989,
		1,
		7
	],
	[
		2019,
		4,
		30
	]
], nh = [
	1867,
	1911,
	1925,
	1988,
	2018
], rh = [
	"meiji",
	"taisho",
	"showa",
	"heisei",
	"reiwa"
];
function ih(e) {
	let t = eh.findIndex(([t, n, r]) => e.year < t || e.year === t && e.month < n || e.year === t && e.month === n && e.day < r);
	return t === -1 ? eh.length - 1 : t === 0 ? 0 : t - 1;
}
function ah(e) {
	let t = nh[rh.indexOf(e.era)];
	if (!t) throw Error("Unknown era: " + e.era);
	return new Zm(e.year + t, e.month, e.day);
}
var oh = class extends Pp {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = ih(t);
		return new Zm(this, rh[n], t.year - nh[n], t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(ah(e));
	}
	balanceDate(e) {
		let t = ah(e), n = ih(t);
		rh[n] !== e.era && (e.era = rh[n], e.year = t.year - nh[n]), this.constrainDate(e);
	}
	constrainDate(e) {
		let t = rh.indexOf(e.era), n = th[t];
		if (n != null) {
			let [r, i, a] = n, o = r - nh[t];
			e.year = Math.max(1, Math.min(o, e.year)), e.year === o && (e.month = Math.min(i, e.month), e.month === i && (e.day = Math.min(a, e.day)));
		}
		if (e.year === 1 && t >= 0) {
			let [, n, r] = eh[t];
			e.month = Math.max(n, e.month), e.month === n && (e.day = Math.max(r, e.day));
		}
	}
	getEras() {
		return rh;
	}
	getYearsInEra(e) {
		let t = rh.indexOf(e.era), n = eh[t], r = eh[t + 1];
		if (r == null) return 9999 - n[0] + 1;
		let i = r[0] - n[0];
		return (e.month < r[1] || e.month === r[1] && e.day < r[2]) && i++, i;
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(ah(e));
	}
	getMinimumMonthInYear(e) {
		let t = sh(e);
		return t ? t[1] : 1;
	}
	getMinimumDayInMonth(e) {
		let t = sh(e);
		return t && e.month === t[1] ? t[2] : 1;
	}
	constructor(...e) {
		super(...e), this.identifier = "japanese";
	}
};
function sh(e) {
	if (e.year === 1) return eh[rh.indexOf(e.era)];
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/calendars/BuddhistCalendar.mjs
var ch = -543, lh = class extends Pp {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = jp(t.era, t.year);
		return new Zm(this, n - ch, t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(uh(e));
	}
	getEras() {
		return ["BE"];
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(uh(e));
	}
	balanceDate() {}
	constructor(...e) {
		super(...e), this.identifier = "buddhist";
	}
};
function uh(e) {
	let [t, n] = Mp(e.year + ch);
	return new Zm(t, n, e.month, e.day);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/calendars/TaiwanCalendar.mjs
var dh = 1911;
function fh(e) {
	return e.era === "minguo" ? e.year + dh : 1 - e.year + dh;
}
function ph(e) {
	let t = e - dh;
	return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t];
}
var mh = class extends Pp {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), [n, r] = ph(jp(t.era, t.year));
		return new Zm(this, n, r, t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(hh(e));
	}
	getEras() {
		return ["before_minguo", "minguo"];
	}
	balanceDate(e) {
		let [t, n] = ph(fh(e));
		e.era = t, e.year = n;
	}
	isInverseEra(e) {
		return e.era === "before_minguo";
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(hh(e));
	}
	getYearsInEra(e) {
		return e.era === "before_minguo" ? 9999 : 9999 - dh;
	}
	constructor(...e) {
		super(...e), this.identifier = "roc";
	}
};
function hh(e) {
	let [t, n] = Mp(fh(e));
	return new Zm(t, n, e.month, e.day);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/calendars/PersianCalendar.mjs
var gh = 1948320, _h = [
	0,
	31,
	62,
	93,
	124,
	155,
	186,
	216,
	246,
	276,
	306,
	336
], vh = class {
	fromJulianDay(e) {
		let t = e - gh, n = 1 + Math.floor((33 * t + 3) / 12053), r = t - (365 * (n - 1) + Math.floor((8 * n + 21) / 33)), i = Math.floor(r < 216 ? r / 31 : (r - 6) / 30), a = r - _h[i] + 1;
		return new Zm(this, n, i + 1, a);
	}
	toJulianDay(e) {
		let t = gh - 1 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
		return t += _h[e.month - 1], t += e.day, t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInMonth(e) {
		return e.month <= 6 ? 31 : e.month <= 11 || Dp(25 * e.year + 11, 33) < 8 ? 30 : 29;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 31;
	}
	getEras() {
		return ["AP"];
	}
	getYearsInEra() {
		return 9377;
	}
	constructor() {
		this.identifier = "persian";
	}
}, yh = 78, bh = 80, xh = class extends Pp {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = t.year - yh, r = e - kp(t.era, t.year, 1, 1), i;
		r < bh ? (n--, i = Ap(t.year - 1) ? 31 : 30, r += i + 155 + 90 + 10) : (i = Ap(t.year) ? 31 : 30, r -= bh);
		let a, o;
		if (r < i) a = 1, o = r + 1;
		else {
			let e = r - i;
			e < 155 ? (a = Math.floor(e / 31) + 2, o = e % 31 + 1) : (e -= 155, a = Math.floor(e / 30) + 7, o = e % 30 + 1);
		}
		return new Zm(this, n, a, o);
	}
	toJulianDay(e) {
		let [t, n] = Mp(e.year + yh), r, i;
		return Ap(n) ? (r = 31, i = kp(t, n, 3, 21)) : (r = 30, i = kp(t, n, 3, 22)), e.month === 1 ? i + e.day - 1 : (i += r + Math.min(e.month - 2, 5) * 31, e.month >= 8 && (i += (e.month - 7) * 30), i += e.day - 1, i);
	}
	getDaysInMonth(e) {
		return e.month === 1 && Ap(e.year + yh) || e.month >= 2 && e.month <= 6 ? 31 : 30;
	}
	getYearsInEra() {
		return 9919;
	}
	getEras() {
		return ["saka"];
	}
	balanceDate() {}
	constructor(...e) {
		super(...e), this.identifier = "indian";
	}
}, Sh = 1948440, Ch = 1948439, wh = 1300, Th = 1600, Eh = 460322;
function Dh(e, t, n, r) {
	return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function Oh(e, t, n) {
	let r = Math.floor((30 * (n - t) + 10646) / 10631), i = Math.min(12, Math.ceil((n - (29 + Dh(t, r, 1, 1))) / 29.5) + 1);
	return new Zm(e, r, i, n - Dh(t, r, i, 1) + 1);
}
function kh(e) {
	return (14 + 11 * e) % 30 < 11;
}
var Ah = class {
	fromJulianDay(e) {
		return Oh(this, Sh, e);
	}
	toJulianDay(e) {
		return Dh(Sh, e.year, e.month, e.day);
	}
	getDaysInMonth(e) {
		let t = 29 + e.month % 2;
		return e.month === 12 && kh(e.year) && t++, t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInYear(e) {
		return kh(e.year) ? 355 : 354;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra() {
		return 9665;
	}
	getEras() {
		return ["AH"];
	}
	constructor() {
		this.identifier = "islamic-civil";
	}
}, jh = class extends Ah {
	fromJulianDay(e) {
		return Oh(this, Ch, e);
	}
	toJulianDay(e) {
		return Dh(Ch, e.year, e.month, e.day);
	}
	constructor(...e) {
		super(...e), this.identifier = "islamic-tbla";
	}
}, Mh = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=", Nh, Ph;
function Fh(e) {
	return Eh + Ph[e - wh];
}
function Ih(e, t) {
	let n = e - wh, r = 1 << 11 - (t - 1);
	return (Nh[n] & r) === 0 ? 29 : 30;
}
function Lh(e, t) {
	let n = Fh(e);
	for (let r = 1; r < t; r++) n += Ih(e, r);
	return n;
}
function Rh(e) {
	return Ph[e + 1 - wh] - Ph[e - wh];
}
var zh = class extends Ah {
	constructor() {
		if (super(), this.identifier = "islamic-umalqura", Nh ||= new Uint16Array(Uint8Array.from(atob(Mh), (e) => e.charCodeAt(0)).buffer), !Ph) {
			Ph = new Uint32Array(Th - wh + 1);
			let e = 0;
			for (let t = wh; t <= Th; t++) {
				Ph[t - wh] = e;
				for (let n = 1; n <= 12; n++) e += Ih(t, n);
			}
		}
	}
	fromJulianDay(e) {
		let t = e - Sh, n = Fh(wh), r = Fh(Th);
		if (t < n || t > r) return super.fromJulianDay(e);
		{
			let e = wh - 1, n = 1, r = 1;
			for (; r > 0;) {
				e++, r = t - Fh(e) + 1;
				let i = Rh(e);
				if (r === i) {
					n = 12;
					break;
				} else if (r < i) {
					let t = Ih(e, n);
					for (n = 1; r > t;) r -= t, n++, t = Ih(e, n);
					break;
				}
			}
			return new Zm(this, e, n, t - Lh(e, n) + 1);
		}
	}
	toJulianDay(e) {
		return e.year < wh || e.year > Th ? super.toJulianDay(e) : Sh + Lh(e.year, e.month) + (e.day - 1);
	}
	getDaysInMonth(e) {
		return e.year < wh || e.year > Th ? super.getDaysInMonth(e) : Ih(e.year, e.month);
	}
	getDaysInYear(e) {
		return e.year < wh || e.year > Th ? super.getDaysInYear(e) : Rh(e.year);
	}
}, Bh = 347997, Vh = 1080, Hh = 24 * Vh, Uh = 29, Wh = 12 * Vh + 793, Gh = Uh * Hh + Wh;
function Kh(e) {
	return Dp(e * 7 + 1, 19) < 7;
}
function qh(e) {
	let t = Math.floor((235 * e - 234) / 19), n = 12084 + 13753 * t, r = t * 29 + Math.floor(n / 25920);
	return Dp(3 * (r + 1), 7) < 3 && (r += 1), r;
}
function Jh(e) {
	let t = qh(e - 1), n = qh(e);
	return qh(e + 1) - n === 356 ? 2 : +(n - t === 382);
}
function Yh(e) {
	return qh(e) + Jh(e);
}
function Xh(e) {
	return Yh(e + 1) - Yh(e);
}
function Zh(e) {
	let t = Xh(e);
	switch (t > 380 && (t -= 30), t) {
		case 353: return 0;
		case 354: return 1;
		case 355: return 2;
	}
}
function Qh(e, t) {
	if (t >= 6 && !Kh(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13) return 29;
	let n = Zh(e);
	return t === 2 ? n === 2 ? 30 : 29 : t === 3 ? n === 0 ? 29 : 30 : t === 6 ? Kh(e) ? 30 : 0 : 30;
}
var $h = class {
	fromJulianDay(e) {
		let t = e - Bh, n = t * Hh / Gh, r = Math.floor((19 * n + 234) / 235) + 1, i = Yh(r), a = Math.floor(t - i);
		for (; a < 1;) r--, i = Yh(r), a = Math.floor(t - i);
		let o = 1, s = 0;
		for (; s < a;) s += Qh(r, o), o++;
		o--, s -= Qh(r, o);
		let c = a - s;
		return new Zm(this, r, o, c);
	}
	toJulianDay(e) {
		let t = Yh(e.year);
		for (let n = 1; n < e.month; n++) t += Qh(e.year, n);
		return t + e.day + Bh;
	}
	getDaysInMonth(e) {
		return Qh(e.year, e.month);
	}
	getMonthsInYear(e) {
		return Kh(e.year) ? 13 : 12;
	}
	getDaysInYear(e) {
		return Xh(e.year);
	}
	getMaximumMonthsInYear() {
		return 13;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra() {
		return 9999;
	}
	getEras() {
		return ["AM"];
	}
	balanceYearMonth(e, t) {
		t.year !== e.year && (Kh(t.year) && !Kh(e.year) && t.month > 6 ? e.month-- : !Kh(t.year) && Kh(e.year) && t.month > 6 && e.month++);
	}
	constructor() {
		this.identifier = "hebrew";
	}
}, eg = 1723856, tg = 1824665, ng = 5500;
function rg(e, t, n, r) {
	return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function ig(e, t) {
	let n = Math.floor(4 * (t - e) / 1461), r = 1 + Math.floor((t - rg(e, n, 1, 1)) / 30);
	return [
		n,
		r,
		t + 1 - rg(e, n, r, 1)
	];
}
function ag(e) {
	return Math.floor(e % 4 / 3);
}
function og(e, t) {
	return t % 13 == 0 ? ag(e) + 5 : 30;
}
var sg = class {
	fromJulianDay(e) {
		let [t, n, r] = ig(eg, e), i = "AM";
		return t <= 0 && (i = "AA", t += ng), new Zm(this, i, t, n, r);
	}
	toJulianDay(e) {
		let t = e.year;
		return e.era === "AA" && (t -= ng), rg(eg, t, e.month, e.day);
	}
	getDaysInMonth(e) {
		return og(e.year, e.month);
	}
	getMonthsInYear() {
		return 13;
	}
	getDaysInYear(e) {
		return 365 + ag(e.year);
	}
	getMaximumMonthsInYear() {
		return 13;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra(e) {
		return e.era === "AA" ? 9999 : 9991;
	}
	getEras() {
		return ["AA", "AM"];
	}
	constructor() {
		this.identifier = "ethiopic";
	}
}, cg = class extends sg {
	fromJulianDay(e) {
		let [t, n, r] = ig(eg, e);
		return t += ng, new Zm(this, "AA", t, n, r);
	}
	getEras() {
		return ["AA"];
	}
	getYearsInEra() {
		return 9999;
	}
	constructor(...e) {
		super(...e), this.identifier = "ethioaa";
	}
}, lg = class extends sg {
	fromJulianDay(e) {
		let [t, n, r] = ig(tg, e), i = "CE";
		return t <= 0 && (i = "BCE", t = 1 - t), new Zm(this, i, t, n, r);
	}
	toJulianDay(e) {
		let t = e.year;
		return e.era === "BCE" && (t = 1 - t), rg(tg, t, e.month, e.day);
	}
	getDaysInMonth(e) {
		let t = e.year;
		return e.era === "BCE" && (t = 1 - t), og(t, e.month);
	}
	isInverseEra(e) {
		return e.era === "BCE";
	}
	balanceDate(e) {
		e.year <= 0 && (e.era = e.era === "BCE" ? "CE" : "BCE", e.year = 1 - e.year);
	}
	getEras() {
		return ["BCE", "CE"];
	}
	getYearsInEra(e) {
		return e.era === "BCE" ? 9999 : 9715;
	}
	constructor(...e) {
		super(...e), this.identifier = "coptic";
	}
};
//#endregion
//#region node_modules/@internationalized/date/dist/private/createCalendar.mjs
function ug(e) {
	switch (e) {
		case "buddhist": return new lh();
		case "ethiopic": return new sg();
		case "ethioaa": return new cg();
		case "coptic": return new lg();
		case "hebrew": return new $h();
		case "indian": return new xh();
		case "islamic-civil": return new Ah();
		case "islamic-tbla": return new jh();
		case "islamic-umalqura": return new zh();
		case "japanese": return new oh();
		case "persian": return new vh();
		case "roc": return new mh();
		default: return new Pp();
	}
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/DateFormatter.mjs
var dg = /* @__PURE__ */ new Map(), fg = class {
	constructor(e, t = {}) {
		this.formatter = mg(e, t), this.options = t;
	}
	format(e) {
		return this.formatter.format(e);
	}
	formatToParts(e) {
		return this.formatter.formatToParts(e);
	}
	formatRange(e, t) {
		if (typeof this.formatter.formatRange == "function") return this.formatter.formatRange(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		return `${this.formatter.format(e)} \u{2013} ${this.formatter.format(t)}`;
	}
	formatRangeToParts(e, t) {
		if (typeof this.formatter.formatRangeToParts == "function") return this.formatter.formatRangeToParts(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		let n = this.formatter.formatToParts(e), r = this.formatter.formatToParts(t);
		return [
			...n.map((e) => ({
				...e,
				source: "startRange"
			})),
			{
				type: "literal",
				value: " – ",
				source: "shared"
			},
			...r.map((e) => ({
				...e,
				source: "endRange"
			}))
		];
	}
	resolvedOptions() {
		let e = this.formatter.resolvedOptions();
		return vg() && (this.resolvedHourCycle ||= yg(e.locale, this.options), e.hourCycle = this.resolvedHourCycle, e.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), e.calendar === "ethiopic-amete-alem" && (e.calendar = "ethioaa"), e;
	}
}, pg = {
	true: { ja: "h11" },
	false: {}
};
function mg(e, t = {}) {
	if (typeof t.hour12 == "boolean" && gg()) {
		t = { ...t };
		let n = pg[String(t.hour12)][e.split("-")[0]], r = t.hour12 ? "h12" : "h23";
		t.hourCycle = n ?? r, delete t.hour12;
	}
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (dg.has(n)) return dg.get(n);
	let r = new Intl.DateTimeFormat(e, t);
	return dg.set(n, r), r;
}
var hg = null;
function gg() {
	return hg ??= new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		hour12: !1
	}).format(new Date(2020, 2, 3, 0)) === "24", hg;
}
var _g = null;
function vg() {
	return _g ??= new Intl.DateTimeFormat("fr", {
		hour: "numeric",
		hour12: !1
	}).resolvedOptions().hourCycle === "h12", _g;
}
function yg(e, t) {
	if (!t.timeStyle && !t.hour) return;
	e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
	let n = mg(e, {
		...t,
		timeZone: void 0
	}), r = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find((e) => e.type === "hour").value, 10), i = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find((e) => e.type === "hour").value, 10);
	if (r === 0 && i === 23) return "h23";
	if (r === 24 && i === 23) return "h24";
	if (r === 0 && i === 11) return "h11";
	if (r === 12 && i === 11) return "h12";
	throw Error("Unexpected hour cycle result");
}
//#endregion
//#region node_modules/reka-ui/dist/date/comparators.js
function bg(e, t = Zp()) {
	return Sg(e) ? e.toDate() : e.toDate(t);
}
function xg(e) {
	return e instanceof Qm;
}
function Sg(e) {
	return e instanceof $m;
}
function Cg(e) {
	return xg(e) || Sg(e);
}
function wg(e) {
	if (e instanceof Date) {
		let t = e.getFullYear(), n = e.getMonth() + 1;
		return new Date(t, n, 0).getDate();
	} else return e.set({ day: 100 }).day;
}
function Tg(e, t) {
	return e.compare(t) < 0;
}
function Eg(e, t) {
	return e.compare(t) > 0;
}
function Dg(e, t, n) {
	let r = Up(e, n, "sun");
	return t > r ? e.subtract({ days: r + 7 - t }) : t === r ? e : e.subtract({ days: r - t });
}
function Og(e, t, n) {
	let r = Up(e, n, "sun"), i = t === 0 ? 6 : t - 1;
	return r === i ? e : r > i ? e.add({ days: 7 - r + i }) : e.add({ days: i - r });
}
function kg(e) {
	let { defaultValue: t, defaultPlaceholder: n, granularity: r = "day", locale: i = "en" } = e;
	if (Array.isArray(t) && t.length) return t.at(-1).copy();
	if (t && !Array.isArray(t)) return t.copy();
	if (n) return n.copy();
	let a = /* @__PURE__ */ new Date(), o = a.getFullYear(), s = a.getMonth() + 1, c = a.getDate(), l = [
		"hour",
		"minute",
		"second"
	], u = ug(new fg(i).resolvedOptions().calendar);
	return l.includes(r ?? "day") ? ym(new Qm(o, s, c, 0, 0, 0), u) : ym(new Zm(o, s, c), u);
}
//#endregion
//#region node_modules/reka-ui/dist/date/utils.js
function Ag(e, t) {
	let n = [];
	for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
	return n;
}
function jg(e) {
	let t = e.querySelector("[data-selected]");
	if (t) return t.focus();
	let n = e.querySelector("[data-today]");
	if (n) return n.focus();
	let r = e.querySelector("[data-reka-calendar-day]");
	if (r) return r.focus();
}
//#endregion
//#region node_modules/reka-ui/dist/date/calendar.js
function Mg(e, t) {
	let n = [], r = e.add({ days: 1 }), i = t;
	for (; r.compare(i) < 0;) n.push(r), r = r.add({ days: 1 });
	return n;
}
function Ng(e) {
	let { dateObj: t, weekStartsOn: n, fixedWeeks: r, locale: i } = e, a = wg(t), o = Array.from({ length: a }, (e, n) => t.set({ day: n + 1 })), s = $p(t), c = em(t), l = Dg(s, n, i), u = Og(c, n, i), d = Mg(l.subtract({ days: 1 }), s), f = Mg(c, u.add({ days: 1 })), p = d.length + o.length + f.length;
	if (r && p < 42) {
		let e = 42 - p, n = f.at(-1);
		n ||= em(t);
		let r = Array.from({ length: e }, (e, t) => {
			let r = t + 1;
			return n.add({ days: r });
		});
		f.push(...r);
	}
	let m = d.concat(o, f);
	return {
		value: t,
		cells: m,
		rows: Ag(m, 7)
	};
}
function Pg(e) {
	let { dateObj: t, numberOfMonths: n = 1, pagedNavigation: r = !1 } = e;
	return n && r ? Array.from({ length: Math.floor(12 / n) }, (e, r) => $p(t.set({ month: r * n + 1 }))) : Array.from({ length: 12 }, (e, n) => $p(t.set({ month: n + 1 })));
}
function Fg(e) {
	let { numberOfMonths: t, dateObj: n, ...r } = e, i = [];
	if (!t || t === 1) return i.push(Ng({
		...r,
		dateObj: n
	})), i;
	i.push(Ng({
		...r,
		dateObj: n
	}));
	for (let e = 1; e < t; e++) {
		let t = n.add({ months: e });
		i.push(Ng({
			...r,
			dateObj: t
		}));
	}
	return i;
}
function Ig({ start: e, end: t }) {
	let n = [];
	if (!e || !t) return n;
	let r = tm(e);
	for (; r.compare(t) <= 0;) n.push(r), r = tm(r.add({ years: 1 }));
	return n;
}
function Lg(e) {
	return (1 - Up(new Zm(2025, 1, 6), e) + 7) % 7;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useDateFormatter.js
function Rg(e, t = {}) {
	let n = /* @__PURE__ */ j(e);
	function r() {
		return n.value;
	}
	function i(e) {
		n.value = e;
	}
	function a(e, r) {
		return new fg(n.value, {
			...t,
			...r
		}).format(e);
	}
	function o(e, t = !0) {
		return Cg(e) && t ? a(bg(e), {
			dateStyle: "long",
			timeStyle: "long"
		}) : a(bg(e), { dateStyle: "long" });
	}
	function s(e, r = {}) {
		return new fg(n.value, {
			...t,
			month: "long",
			year: "numeric",
			...r
		}).format(e);
	}
	function c(e, r = {}) {
		return new fg(n.value, {
			...t,
			month: "long",
			...r
		}).format(e);
	}
	function l() {
		let e = Gp(Zp());
		return [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12
		].map((t) => ({
			label: c(bg(e.set({ month: t }))),
			value: t
		}));
	}
	function u(e, r = {}) {
		return new fg(n.value, {
			...t,
			year: "numeric",
			...r
		}).format(e);
	}
	function d(e, r) {
		return Sg(e) ? new fg(n.value, {
			...t,
			...r,
			timeZone: e.timeZone
		}).formatToParts(bg(e)) : new fg(n.value, {
			...t,
			...r
		}).formatToParts(bg(e));
	}
	function f(e, r = "narrow") {
		return new fg(n.value, {
			...t,
			weekday: r
		}).format(e);
	}
	function p(e) {
		let r = new fg(n.value, {
			...t,
			hour: "numeric",
			minute: "numeric"
		}).formatToParts(e).find((e) => e.type === "dayPeriod")?.value;
		return r === "PM" || r === "pm" || r === "p.m." ? "PM" : "AM";
	}
	let m = {
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	};
	function h(e, t, n = {}) {
		let r = d(e, {
			...m,
			...n
		}).find((e) => e.type === t);
		return r ? r.value : "";
	}
	return {
		setLocale: i,
		getLocale: r,
		fullMonth: c,
		fullYear: u,
		fullMonthAndYear: s,
		toParts: d,
		custom: a,
		part: h,
		dayPeriod: p,
		selectedDate: o,
		dayOfWeek: f,
		getMonths: l
	};
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useDirection.js
function zg(e) {
	let t = _p({ dir: /* @__PURE__ */ j("ltr") });
	return q(() => e?.value || t.dir?.value || "ltr");
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useEmitAsProps.js
function Bg(e) {
	let t = Ds(), n = t?.type.emits, r = {};
	return n?.length || console.warn(`No emitted event found. Please check component: ${t?.type.__name}`), n?.forEach((t) => {
		r[se(D(t))] = (...n) => e(t, ...n);
	}), r;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useFilter.js
function Vg(e) {
	let t = q(() => M(e)), n = q(() => new Intl.Collator("en", {
		usage: "search",
		...t.value
	}));
	return {
		startsWith: (e, t) => t.length === 0 ? !0 : (e = e.normalize("NFC"), t = t.normalize("NFC"), n.value.compare(e.slice(0, t.length), t) === 0),
		endsWith: (e, t) => t.length === 0 ? !0 : (e = e.normalize("NFC"), t = t.normalize("NFC"), n.value.compare(e.slice(-t.length), t) === 0),
		contains: (e, t) => {
			if (t.length === 0) return !0;
			e = e.normalize("NFC"), t = t.normalize("NFC");
			let r = 0, i = t.length;
			for (; r + i <= e.length; r++) {
				let a = e.slice(r, r + i);
				if (n.value.compare(t, a) === 0) return !0;
			}
			return !1;
		}
	};
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useFocusGuards.js
var Hg = 0;
function Ug() {
	Tr((e) => {
		if (!wd) return;
		let t = document.querySelectorAll("[data-reka-focus-guard]");
		document.body.insertAdjacentElement("afterbegin", t[0] ?? Wg()), document.body.insertAdjacentElement("beforeend", t[1] ?? Wg()), Hg++, e(() => {
			Hg === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((e) => e.remove()), Hg--;
		});
	});
}
function Wg() {
	let e = document.createElement("span");
	return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useFormControl.js
function Gg(e) {
	return q(() => gn(e) ? !!sf(e)?.closest("form") : !0);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useForwardExpose.js
function Y() {
	let e = Ds(), t = /* @__PURE__ */ j(), n = q(() => r());
	qi(() => {
		n.value !== r() && hn(t);
	});
	function r() {
		return t.value && "$el" in t.value && ["#text", "#comment"].includes(t.value.$el.nodeName) ? t.value.$el.nextElementSibling : sf(t);
	}
	let i = Object.assign({}, e.exposed), a = {};
	for (let t in e.props) Object.defineProperty(a, t, {
		enumerable: !0,
		configurable: !0,
		get: () => e.props[t]
	});
	if (Object.keys(i).length > 0) for (let e in i) Object.defineProperty(a, e, {
		enumerable: !0,
		configurable: !0,
		get: () => i[e]
	});
	Object.defineProperty(a, "$el", {
		enumerable: !0,
		configurable: !0,
		get: () => e.vnode.el
	}), e.exposed = a;
	function o(n) {
		if (t.value = n, n && (Object.defineProperty(a, "$el", {
			enumerable: !0,
			configurable: !0,
			get: () => n instanceof Element ? n : n.$el
		}), !(n instanceof Element) && !Object.hasOwn(n, "$el"))) {
			let t = n.$.exposed, r = Object.assign({}, a);
			for (let e in t) Object.defineProperty(r, e, {
				enumerable: !0,
				configurable: !0,
				get: () => t[e]
			});
			e.exposed = r;
		}
	}
	return {
		forwardRef: o,
		currentRef: t,
		currentElement: n
	};
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useForwardProps.js
function Kg(e) {
	let t = Ds(), n = Object.keys(t?.type.props ?? {}).reduce((e, n) => {
		let r = (t?.type.props[n]).default;
		return r !== void 0 && (e[n] = r), e;
	}, {}), r = /* @__PURE__ */ wn(e);
	return q(() => {
		let e = {}, i = t?.vnode.props ?? {};
		return Object.keys(i).forEach((t) => {
			e[D(t)] = i[t];
		}), Object.keys({
			...n,
			...e
		}).reduce((e, t) => (r.value[t] !== void 0 && (e[t] = r.value[t]), e), {});
	});
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useForwardPropsEmits.js
function qg(e, t) {
	let n = Kg(e), r = t ? Bg(t) : {};
	return q(() => ({
		...n.value,
		...r
	}));
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useGraceArea.js
function Jg(e, t) {
	let n = qd(!1, 300);
	_d(() => {
		n.value = !1;
	});
	let r = /* @__PURE__ */ j(null), i = vd();
	function a() {
		r.value = null, n.value = !1;
	}
	function o(e, t) {
		if (!t) return;
		let i = e.currentTarget, a = {
			x: e.clientX,
			y: e.clientY
		}, o = Xg(a, Yg(a, i.getBoundingClientRect()), 1), s = Zg(t.getBoundingClientRect());
		r.value = $g([...o, ...s]), n.value = !0;
	}
	return Tr((n) => {
		if (e.value && t.value) {
			let r = (e) => o(e, t.value), i = (t) => o(t, e.value);
			e.value.addEventListener("pointerleave", r), t.value.addEventListener("pointerleave", i), n(() => {
				e.value?.removeEventListener("pointerleave", r), t.value?.removeEventListener("pointerleave", i);
			});
		}
	}), Tr((n) => {
		if (r.value) {
			let o = (n) => {
				if (!r.value || !(n.target instanceof Element)) return;
				let o = n.target, s = {
					x: n.clientX,
					y: n.clientY
				}, c = e.value?.contains(o) || t.value?.contains(o), l = !Qg(s, r.value), u = !!o.closest("[data-grace-area-trigger]");
				c ? a() : (l || u) && (a(), i.trigger());
			};
			e.value?.ownerDocument.addEventListener("pointermove", o), n(() => e.value?.ownerDocument.removeEventListener("pointermove", o));
		}
	}), {
		isPointerInTransit: n,
		onPointerExit: i.on
	};
}
function Yg(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function Xg(e, t, n = 5) {
	let r = [];
	switch (t) {
		case "top":
			r.push({
				x: e.x - n,
				y: e.y + n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "bottom":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y - n
			});
			break;
		case "left":
			r.push({
				x: e.x + n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "right":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x - n,
				y: e.y + n
			});
			break;
	}
	return r;
}
function Zg(e) {
	let { top: t, right: n, bottom: r, left: i } = e;
	return [
		{
			x: i,
			y: t
		},
		{
			x: n,
			y: t
		},
		{
			x: n,
			y: r
		},
		{
			x: i,
			y: r
		}
	];
}
function Qg(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e].x, s = t[e].y, c = t[a].x, l = t[a].y;
		s > r != l > r && n < (c - o) * (r - s) / (l - s) + o && (i = !i);
	}
	return i;
}
function $g(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), e_(t);
}
function e_(e) {
	if (e.length <= 1) return e.slice();
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (; t.length >= 2;) {
			let e = t.at(-1), n = t[t.length - 2];
			if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
			else break;
		}
		t.push(r);
	}
	t.pop();
	let n = [];
	for (let t = e.length - 1; t >= 0; t--) {
		let r = e[t];
		for (; n.length >= 2;) {
			let e = n.at(-1), t = n[n.length - 2];
			if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
			else break;
		}
		n.push(r);
	}
	return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
//#endregion
//#region node_modules/aria-hidden/dist/es2015/index.js
var t_ = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, n_ = /* @__PURE__ */ new WeakMap(), r_ = /* @__PURE__ */ new WeakMap(), i_ = {}, a_ = 0, o_ = function(e) {
	return e && (e.host || o_(e.parentNode));
}, s_ = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = o_(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, c_ = function(e, t, n, r) {
	var i = s_(t, Array.isArray(e) ? e : [e]);
	i_[n] || (i_[n] = /* @__PURE__ */ new WeakMap());
	var a = i_[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (n_.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				n_.set(e, c), a.set(e, l), o.push(e), c === 1 && i && r_.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), a_++, function() {
		o.forEach(function(e) {
			var t = n_.get(e) - 1, i = a.get(e) - 1;
			n_.set(e, t), a.set(e, i), t || (r_.has(e) || e.removeAttribute(r), r_.delete(e)), i || e.removeAttribute(n);
		}), a_--, a_ || (n_ = /* @__PURE__ */ new WeakMap(), n_ = /* @__PURE__ */ new WeakMap(), r_ = /* @__PURE__ */ new WeakMap(), i_ = {});
	};
}, l_ = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || t_(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), c_(r, i, n, "aria-hidden")) : function() {
		return null;
	};
};
//#endregion
//#region node_modules/reka-ui/dist/shared/useHideOthers.js
function u_(e) {
	let t;
	P(() => sf(e), (e) => {
		let n = !1;
		try {
			n = !!e?.closest("[popover]:not(:popover-open)");
		} catch {}
		e && !n ? t = l_(e) : t && t();
	}), Yi(() => {
		t && t();
	});
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useId.js
var d_ = 0;
function f_(e, t = "reka") {
	if (e) return e;
	let n;
	return n = "useId" in fu ? oi?.() : _p({ useId: void 0 }).useId?.() ?? `${++d_}`, t ? `${t}-${n}` : n;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useKbd.js
function p_() {
	return {
		ALT: "Alt",
		ARROW_DOWN: "ArrowDown",
		ARROW_LEFT: "ArrowLeft",
		ARROW_RIGHT: "ArrowRight",
		ARROW_UP: "ArrowUp",
		BACKSPACE: "Backspace",
		CAPS_LOCK: "CapsLock",
		CONTROL: "Control",
		DELETE: "Delete",
		END: "End",
		ENTER: "Enter",
		ESCAPE: "Escape",
		F1: "F1",
		F10: "F10",
		F11: "F11",
		F12: "F12",
		F2: "F2",
		F3: "F3",
		F4: "F4",
		F5: "F5",
		F6: "F6",
		F7: "F7",
		F8: "F8",
		F9: "F9",
		HOME: "Home",
		META: "Meta",
		PAGE_DOWN: "PageDown",
		PAGE_UP: "PageUp",
		SHIFT: "Shift",
		SPACE: " ",
		TAB: "Tab",
		CTRL: "Control",
		ASTERISK: "*",
		SPACE_CODE: "Space"
	};
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useLocale.js
function m_(e) {
	let t = _p({ locale: /* @__PURE__ */ j("en") });
	return q(() => e?.value || t.locale?.value || "en");
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useSize.js
function h_(e) {
	let t = /* @__PURE__ */ j(), n = q(() => t.value?.width ?? 0), r = q(() => t.value?.height ?? 0);
	return I(() => {
		let n = sf(e);
		if (n) {
			t.value = {
				width: n.offsetWidth,
				height: n.offsetHeight
			};
			let e = new ResizeObserver((e) => {
				if (!Array.isArray(e) || !e.length) return;
				let r = e[0], i, a;
				if ("borderBoxSize" in r) {
					let e = r.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = n.offsetWidth, a = n.offsetHeight;
				t.value = {
					width: i,
					height: a
				};
			});
			return e.observe(n, { box: "border-box" }), () => e.unobserve(n);
		} else t.value = void 0;
	}), {
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useStateMachine.js
function g_(e, t) {
	let n = /* @__PURE__ */ j(e);
	function r(e) {
		return t[n.value][e] ?? n.value;
	}
	return {
		state: n,
		dispatch: (e) => {
			n.value = r(e);
		}
	};
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useTypeahead.js
function __(e) {
	let t = qd("", 1e3);
	return {
		search: t,
		handleTypeaheadSearch: (n, r) => {
			if (t.value += n, e) e(n);
			else {
				let e = lp(), n = r.map((e) => ({
					...e,
					textValue: e.value?.textValue ?? e.ref.textContent?.trim() ?? ""
				})), i = n.find((t) => t.ref === e), a = y_(n.map((e) => e.textValue), t.value, i?.textValue), o = n.find((e) => e.textValue === a);
				return o && o.ref.focus(), o?.ref;
			}
		},
		resetTypeahead: () => {
			t.value = "";
		}
	};
}
function v_(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function y_(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = v_(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
//#endregion
//#region node_modules/reka-ui/dist/Presence/usePresence.js
function b_(e, t) {
	let n = /* @__PURE__ */ j({}), r = /* @__PURE__ */ j("none"), i = /* @__PURE__ */ j(e), a = e.value ? "mounted" : "unmounted", o, s = t.value?.ownerDocument.defaultView ?? af, { state: c, dispatch: l } = g_(a, {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	}), u = (e) => {
		if (wd) {
			let n = new CustomEvent(e, {
				bubbles: !1,
				cancelable: !1
			});
			t.value?.dispatchEvent(n);
		}
	};
	P(e, async (e, i) => {
		let a = i !== e;
		if (await er(), a) {
			let a = r.value, o = x_(t.value);
			e ? (l("MOUNT"), u("enter"), o === "none" && u("after-enter")) : o === "none" || o === "undefined" || n.value?.display === "none" ? (l("UNMOUNT"), u("leave"), u("after-leave")) : i && a !== o ? (l("ANIMATION_OUT"), u("leave")) : (l("UNMOUNT"), u("after-leave"));
		}
	}, { immediate: !0 });
	let d = (e) => {
		let n = x_(t.value), r = n.includes(CSS.escape(e.animationName)), a = c.value === "mounted" ? "enter" : "leave";
		if (e.target === t.value && r && (u(`after-${a}`), l("ANIMATION_END"), !i.value)) {
			let e = t.value.style.animationFillMode;
			t.value.style.animationFillMode = "forwards", o = s?.setTimeout(() => {
				t.value?.style.animationFillMode === "forwards" && (t.value.style.animationFillMode = e);
			});
		}
		e.target === t.value && n === "none" && l("ANIMATION_END");
	}, f = (e) => {
		e.target === t.value && (r.value = x_(t.value));
	}, p = P(t, (e, t) => {
		e ? (n.value = getComputedStyle(e), e.addEventListener("animationstart", f), e.addEventListener("animationcancel", d), e.addEventListener("animationend", d)) : (l("ANIMATION_END"), o !== void 0 && s?.clearTimeout(o), t?.removeEventListener("animationstart", f), t?.removeEventListener("animationcancel", d), t?.removeEventListener("animationend", d));
	}, { immediate: !0 }), m = P(c, () => {
		let e = x_(t.value);
		r.value = c.value === "mounted" ? e : "none";
	});
	return Yi(() => {
		p(), m();
	}), { isPresent: q(() => ["mounted", "unmountSuspended"].includes(c.value)) };
}
function x_(e) {
	return e && getComputedStyle(e).animationName || "none";
}
//#endregion
//#region node_modules/reka-ui/dist/Presence/Presence.js
var S_ = /* @__PURE__ */ F({
	name: "Presence",
	props: {
		present: {
			type: Boolean,
			required: !0
		},
		forceMount: { type: Boolean }
	},
	slots: {},
	setup(e, { slots: t, expose: n }) {
		let { present: r, forceMount: i } = /* @__PURE__ */ xn(e), a = /* @__PURE__ */ j(), { isPresent: o } = b_(r, a);
		n({ present: o });
		let s = t.default({ present: o.value });
		s = pp(s || []);
		let c = Ds();
		if (s && s?.length > 1) {
			let e = c?.parent?.type.name ? `<${c.parent.type.name} />` : "component";
			throw Error([
				`Detected an invalid children for \`${e}\` for  \`Presence\` component.`,
				"",
				"Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
				"You can apply a few solutions:",
				["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((e) => `  - ${e}`).join("\n")
			].join("\n"));
		}
		return () => i.value || r.value || o.value ? qs(t.default({ present: o.value })[0], { ref: (e) => {
			let t = sf(e);
			return t?.hasAttribute === void 0 || (t?.hasAttribute("data-reka-popper-content-wrapper") ? a.value = t.firstElementChild : a.value = t), t;
		} }) : null;
	}
}), C_ = /* @__PURE__ */ F({
	name: "PrimitiveSlot",
	inheritAttrs: !1,
	setup(e, { attrs: t, slots: n }) {
		return () => {
			if (!n.default) return null;
			let e = pp(n.default()), r = e.findIndex((e) => e.type !== ns);
			if (r === -1) return e;
			let i = e[r];
			delete i.props?.ref;
			let a = i.props ? K(t, i.props) : t, o = gs({
				...i,
				props: {}
			}, a);
			return e.length === 1 ? o : (e[r] = o, e);
		};
	}
}), w_ = [
	"area",
	"img",
	"input"
], X = /* @__PURE__ */ F({
	name: "Primitive",
	inheritAttrs: !1,
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: {
			type: [String, Object],
			default: "div"
		}
	},
	setup(e, { attrs: t, slots: n }) {
		let r = e.asChild ? "template" : e.as;
		return typeof r == "string" && w_.includes(r) ? () => qs(r, t) : r === "template" ? () => qs(C_, t, { default: n.default }) : () => qs(e.as, t, { default: n.default });
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Primitive/usePrimitiveElement.js
function T_() {
	let e = /* @__PURE__ */ j();
	return {
		primitiveElement: e,
		currentElement: q(() => ["#text", "#comment"].includes(e.value?.$el.nodeName) ? e.value?.$el.nextElementSibling : sf(e))
	};
}
//#endregion
//#region node_modules/reka-ui/dist/Collapsible/CollapsibleRoot.js
var [E_, D_] = /* @__PURE__ */ cp("CollapsibleRoot"), O_ = /* @__PURE__ */ F({
	__name: "CollapsibleRoot",
	props: {
		defaultOpen: {
			type: Boolean,
			required: !1,
			default: !1
		},
		open: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		unmountOnHide: {
			type: Boolean,
			required: !1,
			default: !0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["update:open"],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = Ef(r, "open", n, {
			defaultValue: r.defaultOpen,
			passive: r.open === void 0
		}), { disabled: a, unmountOnHide: o } = /* @__PURE__ */ xn(r);
		return D_({
			contentId: "",
			disabled: a,
			open: i,
			unmountOnHide: o,
			onOpenToggle: () => {
				a.value || (i.value = !i.value);
			}
		}), t({ open: i }), Y(), (e, t) => (z(), V(M(X), {
			as: e.as,
			"as-child": r.asChild,
			"data-state": M(i) ? "open" : "closed",
			"data-disabled": M(a) ? "" : void 0
		}, {
			default: N(() => [L(e.$slots, "default", { open: M(i) })]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-state",
			"data-disabled"
		]));
	}
}), k_ = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "CollapsibleContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["contentFound"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = E_();
		i.contentId ||= f_(void 0, "reka-collapsible-content");
		let a = /* @__PURE__ */ j(), { forwardRef: o, currentElement: s } = Y(), c = /* @__PURE__ */ j(0), l = /* @__PURE__ */ j(0), u = q(() => i.open.value), d = /* @__PURE__ */ j(u.value), f = /* @__PURE__ */ j();
		P(() => [u.value, a.value?.present], async () => {
			await er();
			let e = s.value;
			if (!e) return;
			f.value = f.value || {
				transitionDuration: e.style.transitionDuration,
				animationName: e.style.animationName
			}, e.style.transitionDuration = "0s", e.style.animationName = "none";
			let t = e.getBoundingClientRect();
			l.value = t.height, c.value = t.width, d.value || (e.style.transitionDuration = f.value.transitionDuration, e.style.animationName = f.value.animationName);
		}, { immediate: !0 });
		let p = q(() => d.value && i.open.value);
		return I(() => {
			requestAnimationFrame(() => {
				d.value = !1;
			});
		}), cf(s, "beforematch", (e) => {
			requestAnimationFrame(() => {
				i.onOpenToggle(), r("contentFound");
			});
		}), (e, t) => (z(), V(M(S_), {
			ref_key: "presentRef",
			ref: a,
			present: e.forceMount || M(i).open.value,
			"force-mount": !0
		}, {
			default: N(({ present: t }) => [U(M(X), K(e.$attrs, {
				id: M(i).contentId,
				ref: M(o),
				"as-child": n.asChild,
				as: e.as,
				hidden: t ? void 0 : M(i).unmountOnHide.value ? "" : "until-found",
				"data-state": p.value ? void 0 : M(i).open.value ? "open" : "closed",
				"data-disabled": M(i).disabled?.value ? "" : void 0,
				style: {
					"--reka-collapsible-content-height": `${l.value}px`,
					"--reka-collapsible-content-width": `${c.value}px`
				}
			}), {
				default: N(() => [!M(i).unmountOnHide.value || t ? L(e.$slots, "default", { key: 0 }) : G("v-if", !0)]),
				_: 2
			}, 1040, [
				"id",
				"as-child",
				"as",
				"hidden",
				"data-state",
				"data-disabled",
				"style"
			])]),
			_: 3
		}, 8, ["present"]));
	}
}), A_ = /* @__PURE__ */ F({
	__name: "CollapsibleTrigger",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e;
		Y();
		let n = E_();
		return (e, r) => (z(), V(M(X), {
			type: e.as === "button" ? "button" : void 0,
			as: e.as,
			"as-child": t.asChild,
			"aria-controls": M(n).contentId,
			"aria-expanded": M(n).open.value,
			"data-state": M(n).open.value ? "open" : "closed",
			"data-disabled": M(n).disabled?.value ? "" : void 0,
			disabled: M(n).disabled?.value,
			onClick: M(n).onOpenToggle
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"type",
			"as",
			"as-child",
			"aria-controls",
			"aria-expanded",
			"data-state",
			"data-disabled",
			"disabled",
			"onClick"
		]));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/shared/useSingleOrMultipleValue.js
function j_({ type: e, defaultValue: t, modelValue: n }) {
	let r = n || t;
	return n !== void 0 || t !== void 0 ? Array.isArray(r) ? "multiple" : "single" : e ?? "single";
}
function M_({ type: e, defaultValue: t, modelValue: n }) {
	return e || j_({
		type: e,
		defaultValue: t,
		modelValue: n
	});
}
function N_({ type: e, defaultValue: t }) {
	return t === void 0 ? e === "single" ? void 0 : [] : t;
}
function P_(e, t) {
	let n = q(() => M_(e)), r = Ef(e, "modelValue", t, {
		defaultValue: N_(e),
		passive: e.modelValue === void 0,
		deep: !0
	});
	function i(e) {
		if (n.value === "single") r.value = tp(e, r.value) ? void 0 : e;
		else {
			let t = Array.isArray(r.value) ? [...r.value || []] : [r.value].filter(Boolean);
			if (fp(t, e)) {
				let n = t.findIndex((t) => tp(t, e));
				t.splice(n, 1);
			} else t.push(e);
			r.value = t;
		}
	}
	return {
		modelValue: r,
		changeModelValue: i,
		isSingle: q(() => n.value === "single")
	};
}
//#endregion
//#region node_modules/reka-ui/dist/Accordion/AccordionRoot.js
var [F_, I_] = /* @__PURE__ */ cp("AccordionRoot"), L_ = /* @__PURE__ */ F({
	__name: "AccordionRoot",
	props: {
		collapsible: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		dir: {
			type: String,
			required: !1
		},
		orientation: {
			type: String,
			required: !1,
			default: "vertical"
		},
		unmountOnHide: {
			type: Boolean,
			required: !1,
			default: !0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		type: {
			type: String,
			required: !1
		},
		modelValue: {
			type: null,
			required: !1
		},
		defaultValue: {
			type: null,
			required: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, { dir: i, disabled: a, unmountOnHide: o } = /* @__PURE__ */ xn(n), s = zg(i), { modelValue: c, changeModelValue: l, isSingle: u } = P_(n, r), { forwardRef: d, currentElement: f } = Y();
		return I_({
			disabled: a,
			direction: s,
			orientation: n.orientation,
			parentElement: f,
			isSingle: u,
			collapsible: n.collapsible,
			modelValue: c,
			changeModelValue: l,
			unmountOnHide: o
		}), (e, t) => (z(), V(M(X), {
			ref: M(d),
			"as-child": e.asChild,
			as: e.as
		}, {
			default: N(() => [L(e.$slots, "default", { modelValue: M(c) })]),
			_: 3
		}, 8, ["as-child", "as"]));
	}
}), R_ = /* @__PURE__ */ function(e) {
	return e.Open = "open", e.Closed = "closed", e;
}(R_ || {}), [z_, B_] = /* @__PURE__ */ cp("AccordionItem"), V_ = /* @__PURE__ */ F({
	__name: "AccordionItem",
	props: {
		disabled: {
			type: Boolean,
			required: !1
		},
		value: {
			type: String,
			required: !0
		},
		unmountOnHide: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e, { expose: t }) {
		let n = e, r = F_(), i = q(() => r.isSingle.value ? n.value === r.modelValue.value : Array.isArray(r.modelValue.value) && r.modelValue.value.includes(n.value)), a = q(() => r.disabled.value || n.disabled), o = q(() => a.value ? "" : void 0), s = q(() => i.value ? R_.Open : R_.Closed);
		t({
			open: i,
			dataDisabled: o
		});
		let { currentRef: c, currentElement: l } = Y();
		B_({
			open: i,
			dataState: s,
			disabled: a,
			dataDisabled: o,
			triggerId: "",
			currentRef: c,
			currentElement: l,
			value: q(() => n.value)
		});
		function u(e) {
			let t = e.target;
			if (Array.from(r.parentElement.value?.querySelectorAll("[data-reka-collection-item]") ?? []).findIndex((e) => e === t) === -1) return null;
			hp(e, t, r.parentElement.value, {
				arrowKeyOptions: r.orientation,
				dir: r.direction.value,
				focus: !0
			});
		}
		return (e, t) => (z(), V(M(O_), {
			"data-orientation": M(r).orientation,
			"data-disabled": o.value,
			"data-state": s.value,
			disabled: a.value,
			open: i.value,
			as: n.as,
			"as-child": n.asChild,
			"unmount-on-hide": n.unmountOnHide ?? M(r).unmountOnHide.value,
			onKeydown: Ql(u, [
				"up",
				"down",
				"left",
				"right",
				"home",
				"end"
			])
		}, {
			default: N(() => [L(e.$slots, "default", { open: i.value })]),
			_: 3
		}, 8, [
			"data-orientation",
			"data-disabled",
			"data-state",
			"disabled",
			"open",
			"as",
			"as-child",
			"unmount-on-hide"
		]));
	}
}), H_ = /* @__PURE__ */ F({
	__name: "AccordionContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = F_(), r = z_();
		return Y(), (e, i) => (z(), V(M(k_), {
			role: "region",
			"as-child": t.asChild,
			as: e.as,
			"force-mount": t.forceMount,
			"aria-labelledby": M(r).triggerId,
			"data-state": M(r).dataState.value,
			"data-disabled": M(r).dataDisabled.value,
			"data-orientation": M(n).orientation,
			style: {
				"--reka-accordion-content-width": "var(--reka-collapsible-content-width)",
				"--reka-accordion-content-height": "var(--reka-collapsible-content-height)"
			},
			onContentFound: i[0] ||= (e) => M(n).changeModelValue(M(r).value.value)
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as-child",
			"as",
			"force-mount",
			"aria-labelledby",
			"data-state",
			"data-disabled",
			"data-orientation"
		]));
	}
}), U_ = /* @__PURE__ */ F({
	__name: "AccordionHeader",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "h3"
		}
	},
	setup(e) {
		let t = e, n = F_(), r = z_();
		return Y(), (e, i) => (z(), V(M(X), {
			as: t.as,
			"as-child": t.asChild,
			"data-orientation": M(n).orientation,
			"data-state": M(r).dataState.value,
			"data-disabled": M(r).dataDisabled.value
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-orientation",
			"data-state",
			"data-disabled"
		]));
	}
}), W_ = /* @__PURE__ */ F({
	__name: "AccordionTrigger",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = F_(), r = z_();
		r.triggerId ||= f_(void 0, "reka-accordion-trigger");
		function i() {
			let e = n.isSingle.value && r.open.value && !n.collapsible;
			r.disabled.value || e || n.changeModelValue(r.value.value);
		}
		return (e, a) => (z(), V(M(A_), {
			id: M(r).triggerId,
			ref: M(r).currentRef,
			"data-reka-collection-item": "",
			as: t.as,
			"as-child": t.asChild,
			"aria-disabled": M(r).disabled.value || void 0,
			"aria-expanded": M(r).open.value || !1,
			"data-disabled": M(r).dataDisabled.value,
			"data-orientation": M(n).orientation,
			"data-state": M(r).dataState.value,
			disabled: M(r).disabled.value,
			onClick: i
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"id",
			"as",
			"as-child",
			"aria-disabled",
			"aria-expanded",
			"data-disabled",
			"data-orientation",
			"data-state",
			"disabled"
		]));
	}
}), [G_, K_] = /* @__PURE__ */ cp("DialogRoot"), q_ = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "DialogRoot",
	props: {
		open: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		defaultOpen: {
			type: Boolean,
			required: !1,
			default: !1
		},
		modal: {
			type: Boolean,
			required: !1,
			default: !0
		}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = e, r = Ef(n, "open", t, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		}), i = /* @__PURE__ */ j(), a = /* @__PURE__ */ j(), { modal: o } = /* @__PURE__ */ xn(n);
		return K_({
			open: r,
			modal: o,
			openModal: () => {
				r.value = !0;
			},
			onOpenChange: (e) => {
				r.value = e;
			},
			onOpenToggle: () => {
				r.value = !r.value;
			},
			contentId: "",
			titleId: "",
			descriptionId: "",
			triggerElement: i,
			contentElement: a
		}), (e, t) => L(e.$slots, "default", {
			open: M(r),
			close: () => r.value = !1
		});
	}
}), J_ = /* @__PURE__ */ F({
	__name: "DialogClose",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e;
		Y();
		let n = G_();
		return (e, r) => (z(), V(M(X), K(t, {
			type: e.as === "button" ? "button" : void 0,
			onClick: r[0] ||= (e) => M(n).onOpenChange(!1)
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["type"]));
	}
}), Y_ = "dismissableLayer.pointerDownOutside", X_ = "dismissableLayer.focusOutside";
function Z_(e, t) {
	if (!(t instanceof Element)) return !1;
	let n = t.closest("[data-dismissable-layer]"), r = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), i = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
	return !!(n && (r === n || i.indexOf(r) < i.indexOf(n)));
}
function Q_(e, t, n = !0) {
	let r = t?.value?.ownerDocument ?? globalThis?.document, i = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j(() => {});
	return Tr((o) => {
		if (!wd || !gn(n)) return;
		let s = async (n) => {
			let o = n.target;
			if (!(!t?.value || !o)) {
				if (Z_(t.value, o)) {
					i.value = !1;
					return;
				}
				if (n.target && !i.value) {
					let t = { originalEvent: n };
					function i() {
						up(Y_, e, t);
					}
					n.pointerType === "touch" ? (r.removeEventListener("click", a.value), a.value = i, r.addEventListener("click", a.value, { once: !0 })) : i();
				} else r.removeEventListener("click", a.value);
				i.value = !1;
			}
		}, c = window.setTimeout(() => {
			r.addEventListener("pointerdown", s);
		}, 0);
		o(() => {
			window.clearTimeout(c), r.removeEventListener("pointerdown", s), r.removeEventListener("click", a.value);
		});
	}), { onPointerDownCapture: () => {
		gn(n) && (i.value = !0);
	} };
}
function $_(e, t, n = !0) {
	let r = t?.value?.ownerDocument ?? globalThis?.document, i = /* @__PURE__ */ j(!1);
	return Tr((a) => {
		if (!wd || !gn(n)) return;
		let o = async (n) => {
			if (!t?.value) return;
			await er(), await er();
			let r = n.target;
			!t.value || !r || Z_(t.value, r) || n.target && !i.value && up(X_, e, { originalEvent: n });
		};
		r.addEventListener("focusin", o), a(() => r.removeEventListener("focusin", o));
	}), {
		onFocusCapture: () => {
			gn(n) && (i.value = !0);
		},
		onBlurCapture: () => {
			gn(n) && (i.value = !1);
		}
	};
}
//#endregion
//#region node_modules/reka-ui/dist/DismissableLayer/DismissableLayer.js
var ev = /* @__PURE__ */ Zt({
	layersRoot: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	originalBodyPointerEvents: void 0,
	branches: /* @__PURE__ */ new Set()
}), tv = /* @__PURE__ */ F({
	__name: "DismissableLayer",
	props: {
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1,
			default: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"dismiss"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, { forwardRef: i, currentElement: a } = Y(), o = q(() => a.value?.ownerDocument ?? globalThis.document), s = q(() => ev.layersRoot), c = q(() => a.value ? Array.from(s.value).indexOf(a.value) : -1), l = q(() => ev.layersWithOutsidePointerEventsDisabled.size > 0), u = q(() => {
			let e = Array.from(s.value), [t] = [...ev.layersWithOutsidePointerEventsDisabled].slice(-1), n = e.indexOf(t);
			return c.value >= n;
		}), d = Q_(async (e) => {
			let t = [...ev.branches].some((t) => t?.contains(e.target));
			!u.value || t || (r("pointerDownOutside", e), r("interactOutside", e), await er(), e.defaultPrevented || r("dismiss"));
		}, a), f = $_((e) => {
			[...ev.branches].some((t) => t?.contains(e.target)) || (r("focusOutside", e), r("interactOutside", e), e.defaultPrevented || r("dismiss"));
		}, a);
		return mf("Escape", (e) => {
			c.value === s.value.size - 1 && (r("escapeKeyDown", e), e.defaultPrevented || r("dismiss"));
		}), Tr((e) => {
			a.value && (n.disableOutsidePointerEvents && (ev.layersWithOutsidePointerEventsDisabled.size === 0 && (ev.originalBodyPointerEvents = o.value.body.style.pointerEvents, o.value.body.style.pointerEvents = "none"), ev.layersWithOutsidePointerEventsDisabled.add(a.value)), s.value.add(a.value), e(() => {
				n.disableOutsidePointerEvents && ev.layersWithOutsidePointerEventsDisabled.size === 1 && !dp(ev.originalBodyPointerEvents) && (o.value.body.style.pointerEvents = ev.originalBodyPointerEvents);
			}));
		}), Tr((e) => {
			e(() => {
				a.value && (s.value.delete(a.value), ev.layersWithOutsidePointerEventsDisabled.delete(a.value));
			});
		}), (e, t) => (z(), V(M(X), {
			ref: M(i),
			"as-child": e.asChild,
			as: e.as,
			"data-dismissable-layer": "",
			style: he({ pointerEvents: l.value ? u.value ? "auto" : "none" : void 0 }),
			onFocusCapture: M(f).onFocusCapture,
			onBlurCapture: M(f).onBlurCapture,
			onPointerdownCapture: M(d).onPointerDownCapture
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as-child",
			"as",
			"style",
			"onFocusCapture",
			"onBlurCapture",
			"onPointerdownCapture"
		]));
	}
}), nv = yd(() => /* @__PURE__ */ j([]));
function rv() {
	let e = nv();
	return {
		add(t) {
			let n = e.value[0];
			t !== n && n?.pause(), e.value = iv(e.value, t), e.value.unshift(t);
		},
		remove(t) {
			e.value = iv(e.value, t), e.value[0]?.resume();
		}
	};
}
function iv(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
//#endregion
//#region node_modules/reka-ui/dist/FocusScope/utils.js
var av = "focusScope.autoFocusOnMount", ov = "focusScope.autoFocusOnUnmount", sv = {
	bubbles: !1,
	cancelable: !0
};
function cv(e, { select: t = !1 } = {}) {
	let n = lp();
	for (let r of e) if (mv(r, { select: t }), lp() !== n) return !0;
}
function lv(e) {
	let t = uv(e);
	return [dv(t, e), dv(t.reverse(), e)];
}
function uv(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function dv(e, t) {
	for (let n of e) if (!fv(n, { upTo: t })) return n;
}
function fv(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function pv(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function mv(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = lp();
		e.focus({ preventScroll: !0 }), e !== n && pv(e) && t && e.select();
	}
}
//#endregion
//#region node_modules/reka-ui/dist/FocusScope/FocusScope.js
var hv = /* @__PURE__ */ F({
	__name: "FocusScope",
	props: {
		loop: {
			type: Boolean,
			required: !1,
			default: !1
		},
		trapped: {
			type: Boolean,
			required: !1,
			default: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["mountAutoFocus", "unmountAutoFocus"],
	setup(e, { emit: t }) {
		let n = e, r = t, { currentRef: i, currentElement: a } = Y(), o = /* @__PURE__ */ j(null), s = rv(), c = /* @__PURE__ */ Zt({
			paused: !1,
			pause() {
				this.paused = !0;
			},
			resume() {
				this.paused = !1;
			}
		});
		Tr((e) => {
			if (!wd) return;
			let t = a.value;
			if (!n.trapped) return;
			function r(e) {
				if (c.paused || !t) return;
				let n = e.target;
				t.contains(n) ? o.value = n : mv(o.value, { select: !0 });
			}
			function i(e) {
				if (c.paused || !t) return;
				let n = e.relatedTarget;
				n !== null && (t.contains(n) || mv(o.value, { select: !0 }));
			}
			function s(e) {
				let n = o.value;
				n !== null && e.some((e) => e.removedNodes.length > 0) && (t.contains(n) || mv(t));
			}
			document.addEventListener("focusin", r), document.addEventListener("focusout", i);
			let l = new MutationObserver(s);
			t && l.observe(t, {
				childList: !0,
				subtree: !0
			}), e(() => {
				document.removeEventListener("focusin", r), document.removeEventListener("focusout", i), l.disconnect();
			});
		}), Tr(async (e) => {
			let t = a.value;
			if (await er(), !t) return;
			s.add(c);
			let n = lp();
			if (!t.contains(n)) {
				let e = new CustomEvent(av, sv);
				t.addEventListener(av, (e) => r("mountAutoFocus", e)), t.dispatchEvent(e), e.defaultPrevented || (cv(uv(t), { select: !0 }), lp() === n && mv(t));
			}
			e(() => {
				t.removeEventListener(av, (e) => r("mountAutoFocus", e));
				let e = new CustomEvent(ov, sv), i = (e) => {
					r("unmountAutoFocus", e);
				};
				t.addEventListener(ov, i), t.dispatchEvent(e), setTimeout(() => {
					e.defaultPrevented || mv(n ?? document.body, { select: !0 }), t.removeEventListener(ov, i), s.remove(c);
				}, 0);
			});
		});
		function l(e) {
			if (!n.loop && !n.trapped || c.paused) return;
			let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, r = lp();
			if (t && r) {
				let t = e.currentTarget, [i, a] = lv(t);
				i && a ? !e.shiftKey && r === a ? (e.preventDefault(), n.loop && mv(i, { select: !0 })) : e.shiftKey && r === i && (e.preventDefault(), n.loop && mv(a, { select: !0 })) : r === t && e.preventDefault();
			}
		}
		return (e, t) => (z(), V(M(X), {
			ref_key: "currentRef",
			ref: i,
			tabindex: "-1",
			"as-child": e.asChild,
			as: e.as,
			onKeydown: l
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, ["as-child", "as"]));
	}
}), gv = "menu.itemSelect", _v = ["Enter", " "], vv = [
	"ArrowDown",
	"PageUp",
	"Home"
], yv = [
	"ArrowUp",
	"PageDown",
	"End"
], bv = [...vv, ...yv];
[..._v], [..._v];
function xv(e) {
	return e ? "open" : "closed";
}
function Sv(e) {
	let t = lp();
	for (let n of e) if (n === t || (n.focus(), lp() !== t)) return;
}
function Cv(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e].x, s = t[e].y, c = t[a].x, l = t[a].y;
		s > r != l > r && n < (c - o) * (r - s) / (l - s) + o && (i = !i);
	}
	return i;
}
function wv(e, t) {
	return t ? Cv({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function Tv(e) {
	return e.pointerType === "mouse";
}
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogContentImpl.js
var Ev = /* @__PURE__ */ F({
	__name: "DialogContentImpl",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		trapFocus: {
			type: Boolean,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = G_(), { forwardRef: a, currentElement: o } = Y();
		return i.titleId ||= f_(void 0, "reka-dialog-title"), i.descriptionId ||= f_(void 0, "reka-dialog-description"), I(() => {
			i.contentElement = o, lp() !== document.body && (i.triggerElement.value = lp());
		}), (e, t) => (z(), V(M(hv), {
			"as-child": "",
			loop: "",
			trapped: n.trapFocus,
			onMountAutoFocus: t[5] ||= (e) => r("openAutoFocus", e),
			onUnmountAutoFocus: t[6] ||= (e) => r("closeAutoFocus", e)
		}, {
			default: N(() => [U(M(tv), K({
				id: M(i).contentId,
				ref: M(a),
				as: e.as,
				"as-child": e.asChild,
				"disable-outside-pointer-events": e.disableOutsidePointerEvents,
				role: "dialog",
				"aria-describedby": M(i).descriptionId,
				"aria-labelledby": M(i).titleId,
				"data-state": M(xv)(M(i).open.value)
			}, e.$attrs, {
				onDismiss: t[0] ||= (e) => M(i).onOpenChange(!1),
				onEscapeKeyDown: t[1] ||= (e) => r("escapeKeyDown", e),
				onFocusOutside: t[2] ||= (e) => r("focusOutside", e),
				onInteractOutside: t[3] ||= (e) => r("interactOutside", e),
				onPointerDownOutside: t[4] ||= (e) => r("pointerDownOutside", e)
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, [
				"id",
				"as",
				"as-child",
				"disable-outside-pointer-events",
				"aria-describedby",
				"aria-labelledby",
				"data-state"
			])]),
			_: 3
		}, 8, ["trapped"]));
	}
}), Dv = /* @__PURE__ */ F({
	__name: "DialogContentModal",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		trapFocus: {
			type: Boolean,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = G_(), a = Bg(r), { forwardRef: o, currentElement: s } = Y();
		return u_(s), (e, t) => (z(), V(Ev, K({
			...n,
			...M(a)
		}, {
			ref: M(o),
			"trap-focus": M(i).open.value,
			"disable-outside-pointer-events": !0,
			onCloseAutoFocus: t[0] ||= (e) => {
				e.defaultPrevented || (e.preventDefault(), M(i).triggerElement.value?.focus());
			},
			onPointerDownOutside: t[1] ||= (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
				(t.button === 2 || n) && e.preventDefault();
			},
			onFocusOutside: t[2] ||= (e) => {
				e.preventDefault();
			}
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["trap-focus"]));
	}
}), Ov = /* @__PURE__ */ F({
	__name: "DialogContentNonModal",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		trapFocus: {
			type: Boolean,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = Bg(t);
		Y();
		let i = G_(), a = /* @__PURE__ */ j(!1), o = /* @__PURE__ */ j(!1);
		return (e, t) => (z(), V(Ev, K({
			...n,
			...M(r)
		}, {
			"trap-focus": !1,
			"disable-outside-pointer-events": !1,
			onCloseAutoFocus: t[0] ||= (e) => {
				e.defaultPrevented || (a.value || M(i).triggerElement.value?.focus(), e.preventDefault()), a.value = !1, o.value = !1;
			},
			onInteractOutside: t[1] ||= (e) => {
				e.defaultPrevented || (a.value = !0, e.detail.originalEvent.type === "pointerdown" && (o.value = !0));
				let t = e.target;
				M(i).triggerElement.value?.contains(t) && e.preventDefault(), e.detail.originalEvent.type === "focusin" && o.value && e.preventDefault();
			}
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), kv = /* @__PURE__ */ F({
	__name: "DialogContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = G_(), a = Bg(r), { forwardRef: o } = Y();
		return (e, t) => (z(), V(M(S_), { present: e.forceMount || M(i).open.value }, {
			default: N(() => [M(i).modal.value ? (z(), V(Dv, K({
				key: 0,
				ref: M(o)
			}, {
				...n,
				...M(a),
				...e.$attrs
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16)) : (z(), V(Ov, K({
				key: 1,
				ref: M(o)
			}, {
				...n,
				...M(a),
				...e.$attrs
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16))]),
			_: 3
		}, 8, ["present"]));
	}
}), Av = /* @__PURE__ */ F({
	__name: "DialogDescription",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "p"
		}
	},
	setup(e) {
		let t = e;
		Y();
		let n = G_();
		return (e, r) => (z(), V(M(X), K(t, { id: M(n).descriptionId }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), jv = /* @__PURE__ */ F({
	__name: "DialogOverlayImpl",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = G_();
		return wp(!0), Y(), (e, n) => (z(), V(M(X), {
			as: e.as,
			"as-child": e.asChild,
			"data-state": M(t).open.value ? "open" : "closed",
			style: { "pointer-events": "auto" }
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-state"
		]));
	}
}), Mv = /* @__PURE__ */ F({
	__name: "DialogOverlay",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = G_(), { forwardRef: n } = Y();
		return (e, r) => M(t)?.modal.value ? (z(), V(M(S_), {
			key: 0,
			present: e.forceMount || M(t).open.value
		}, {
			default: N(() => [U(jv, K(e.$attrs, {
				ref: M(n),
				as: e.as,
				"as-child": e.asChild
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, ["as", "as-child"])]),
			_: 3
		}, 8, ["present"])) : G("v-if", !0);
	}
}), Nv = /* @__PURE__ */ F({
	__name: "Teleport",
	props: {
		to: {
			type: null,
			required: !1,
			default: "body"
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		defer: {
			type: Boolean,
			required: !1
		},
		forceMount: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = lf();
		return (e, n) => M(t) || e.forceMount ? (z(), V(Hr, {
			key: 0,
			to: e.to,
			disabled: e.disabled,
			defer: e.defer
		}, [L(e.$slots, "default")], 8, [
			"to",
			"disabled",
			"defer"
		])) : G("v-if", !0);
	}
}), Pv = /* @__PURE__ */ F({
	__name: "DialogPortal",
	props: {
		to: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		defer: {
			type: Boolean,
			required: !1
		},
		forceMount: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(Nv), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Fv = /* @__PURE__ */ F({
	__name: "DialogTitle",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "h2"
		}
	},
	setup(e) {
		let t = e, n = G_();
		return Y(), (e, r) => (z(), V(M(X), K(t, { id: M(n).titleId }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), Iv = /* @__PURE__ */ F({
	__name: "DialogTrigger",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e, n = G_(), { forwardRef: r, currentElement: i } = Y();
		return n.contentId ||= f_(void 0, "reka-dialog-content"), I(() => {
			n.triggerElement.value = i.value;
		}), (e, i) => (z(), V(M(X), K(t, {
			ref: M(r),
			type: e.as === "button" ? "button" : void 0,
			"aria-haspopup": "dialog",
			"aria-expanded": M(n).open.value || !1,
			"aria-controls": M(n).open.value ? M(n).contentId : void 0,
			"data-state": M(n).open.value ? "open" : "closed",
			onClick: M(n).onOpenToggle
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, [
			"type",
			"aria-expanded",
			"aria-controls",
			"data-state",
			"onClick"
		]));
	}
}), [Lv, Rv] = /* @__PURE__ */ cp("AlertDialogContent"), zv = /* @__PURE__ */ F({
	__name: "AlertDialogContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = Bg(t);
		Y();
		let i = /* @__PURE__ */ j();
		return Rv({ onCancelElementChange: (e) => {
			i.value = e;
		} }), (e, t) => (z(), V(M(kv), K({
			...n,
			...M(r)
		}, {
			role: "alertdialog",
			onPointerDownOutside: t[0] ||= Xl(() => {}, ["prevent"]),
			onInteractOutside: t[1] ||= Xl(() => {}, ["prevent"]),
			onOpenAutoFocus: t[2] ||= () => {
				er(() => {
					i.value?.focus({ preventScroll: !0 });
				});
			}
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Bv = /* @__PURE__ */ F({
	__name: "AlertDialogDescription",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "p"
		}
	},
	setup(e) {
		let t = e;
		return Y(), (e, n) => (z(), V(M(Av), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Vv = /* @__PURE__ */ F({
	__name: "AlertDialogOverlay",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return Y(), (e, n) => (z(), V(M(Mv), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Hv = /* @__PURE__ */ F({
	__name: "AlertDialogPortal",
	props: {
		to: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		defer: {
			type: Boolean,
			required: !1
		},
		forceMount: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(Nv), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Uv = /* @__PURE__ */ F({
	__name: "AlertDialogRoot",
	props: {
		open: {
			type: Boolean,
			required: !1
		},
		defaultOpen: {
			type: Boolean,
			required: !1
		}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		return Y(), (e, t) => (z(), V(M(q_), K(M(n), { modal: !0 }), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16));
	}
}), Wv = /* @__PURE__ */ F({
	__name: "AlertDialogTitle",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "h2"
		}
	},
	setup(e) {
		let t = e;
		return Y(), (e, n) => (z(), V(M(Fv), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Gv = /* @__PURE__ */ F({
	__name: "AlertDialogTrigger",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e;
		return Y(), (e, n) => (z(), V(M(Iv), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Kv = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "AspectRatio",
	props: {
		ratio: {
			type: Number,
			required: !1,
			default: 1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, { forwardRef: n } = Y(), r = q(() => 1 / t.ratio * 100);
		return (e, t) => (z(), B("div", {
			style: he(`position: relative; width: 100%; padding-bottom: ${r.value}%`),
			"data-reka-aspect-ratio-wrapper": ""
		}, [U(M(X), K({
			ref: M(n),
			"as-child": e.asChild,
			as: e.as,
			style: {
				position: "absolute",
				inset: "0px"
			}
		}, e.$attrs), {
			default: N(() => [L(e.$slots, "default", { aspect: r.value })]),
			_: 3
		}, 16, ["as-child", "as"])], 4));
	}
}), qv = "data-reka-collection-item";
function Jv(e = {}) {
	let { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`, i;
	n ? (i = {
		collectionRef: /* @__PURE__ */ j(),
		itemMap: /* @__PURE__ */ j(/* @__PURE__ */ new Map())
	}, br(r, i)) : i = xr(r);
	let a = (e = !1) => {
		let t = i.collectionRef.value;
		if (!t) return [];
		let n = Array.from(t.querySelectorAll(`[${qv}]`)), r = Array.from(i.itemMap.value.values()).sort((e, t) => n.indexOf(e.ref) - n.indexOf(t.ref));
		return e ? r : r.filter((e) => e.ref.dataset.disabled !== "");
	}, o = /* @__PURE__ */ F({
		name: "CollectionSlot",
		inheritAttrs: !1,
		setup(e, { slots: t, attrs: n }) {
			let { primitiveElement: r, currentElement: a } = T_();
			return P(a, () => {
				i.collectionRef.value = a.value;
			}), () => qs(C_, {
				ref: r,
				...n
			}, t);
		}
	}), s = /* @__PURE__ */ F({
		name: "CollectionItem",
		inheritAttrs: !1,
		props: { value: { validator: () => !0 } },
		setup(e, { slots: t, attrs: n }) {
			let { primitiveElement: r, currentElement: a } = T_();
			return Tr((t) => {
				if (a.value) {
					let n = cn(a.value);
					i.itemMap.value.set(n, {
						ref: a.value,
						value: e.value
					}), t(() => i.itemMap.value.delete(n));
				}
			}), () => qs(C_, {
				...n,
				[qv]: "",
				ref: r
			}, t);
		}
	});
	return {
		getItems: a,
		reactiveItems: q(() => Array.from(i.itemMap.value.values())),
		itemMapSize: q(() => i.itemMap.value.size),
		CollectionSlot: o,
		CollectionItem: s
	};
}
//#endregion
//#region node_modules/reka-ui/dist/VisuallyHidden/VisuallyHidden.js
var Yv = /* @__PURE__ */ F({
	__name: "VisuallyHidden",
	props: {
		feature: {
			type: String,
			required: !1,
			default: "focusable"
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		return (e, t) => (z(), V(M(X), {
			as: e.as,
			"as-child": e.asChild,
			"aria-hidden": e.feature === "focusable" ? "true" : void 0,
			"data-hidden": e.feature === "fully-hidden" ? "" : void 0,
			tabindex: e.feature === "fully-hidden" ? "-1" : void 0,
			style: {
				position: "absolute",
				border: 0,
				width: "1px",
				height: "1px",
				padding: 0,
				margin: "-1px",
				overflow: "hidden",
				clip: "rect(0, 0, 0, 0)",
				clipPath: "inset(50%)",
				whiteSpace: "nowrap",
				wordWrap: "normal",
				top: "-1px",
				left: "-1px"
			}
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"aria-hidden",
			"data-hidden",
			"tabindex"
		]));
	}
}), Xv = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "VisuallyHiddenInputBubble",
	props: {
		name: {
			type: String,
			required: !0
		},
		value: {
			type: null,
			required: !0
		},
		checked: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		required: {
			type: Boolean,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		feature: {
			type: String,
			required: !1,
			default: "fully-hidden"
		}
	},
	setup(e) {
		let t = e, { primitiveElement: n, currentElement: r } = T_();
		return P(q(() => t.checked ?? t.value), (e, t) => {
			if (!r.value) return;
			let n = r.value, i = window.HTMLInputElement.prototype, a = Object.getOwnPropertyDescriptor(i, "value").set;
			if (a && e !== t) {
				let t = new Event("input", { bubbles: !0 }), r = new Event("change", { bubbles: !0 });
				a.call(n, e), n.dispatchEvent(t), n.dispatchEvent(r);
			}
		}), (e, r) => (z(), V(Yv, K({
			ref_key: "primitiveElement",
			ref: n
		}, {
			...t,
			...e.$attrs
		}, { as: "input" }), null, 16));
	}
}), Zv = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "VisuallyHiddenInput",
	props: {
		name: {
			type: String,
			required: !0
		},
		value: {
			type: null,
			required: !0
		},
		checked: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		required: {
			type: Boolean,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		feature: {
			type: String,
			required: !1,
			default: "fully-hidden"
		}
	},
	setup(e) {
		let t = e, n = q(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), r = q(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
			name: t.name,
			value: t.value
		}] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((e, n) => typeof e == "object" ? Object.entries(e).map(([e, r]) => ({
			name: `${t.name}[${n}][${e}]`,
			value: r
		})) : {
			name: `${t.name}[${n}]`,
			value: e
		}) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([e, n]) => ({
			name: `${t.name}[${e}]`,
			value: n
		})) : []);
		return (e, i) => (z(), B(R, null, [G(" We render single input if it's required "), n.value ? (z(), V(Xv, K({ key: e.name }, {
			...t,
			...e.$attrs
		}, {
			name: e.name,
			value: e.value
		}), null, 16, ["name", "value"])) : (z(!0), B(R, { key: 1 }, ca(r.value, (n) => (z(), V(Xv, K({ key: n.name }, { ref_for: !0 }, {
			...t,
			...e.$attrs
		}, {
			name: n.name,
			value: n.value
		}), null, 16, ["name", "value"]))), 128))], 2112));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Listbox/utils.js
function Qv(e, t, n) {
	return e === void 0 ? !1 : Array.isArray(e) ? e.some((e) => $v(e, t, n)) : $v(e, t, n);
}
function $v(e, t, n) {
	return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? e?.[n] === t?.[n] : tp(e, t);
}
//#endregion
//#region node_modules/reka-ui/dist/RovingFocus/utils.js
var ey = "rovingFocusGroup.onEntryFocus", ty = {
	bubbles: !1,
	cancelable: !0
}, ny = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function ry(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function iy(e, t, n) {
	let r = ry(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return ny[r];
}
function ay(e, t = !1) {
	let n = lp();
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), lp() !== n)) return;
}
function oy(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
//#endregion
//#region node_modules/reka-ui/dist/Listbox/ListboxRoot.js
var [sy, cy] = /* @__PURE__ */ cp("ListboxRoot"), ly = /* @__PURE__ */ F({
	__name: "ListboxRoot",
	props: {
		modelValue: {
			type: null,
			required: !1
		},
		defaultValue: {
			type: null,
			required: !1
		},
		multiple: {
			type: Boolean,
			required: !1
		},
		orientation: {
			type: String,
			required: !1,
			default: "vertical"
		},
		dir: {
			type: String,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		selectionBehavior: {
			type: String,
			required: !1,
			default: "toggle"
		},
		highlightOnHover: {
			type: Boolean,
			required: !1
		},
		by: {
			type: [String, Function],
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		name: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		}
	},
	emits: [
		"update:modelValue",
		"highlight",
		"entryFocus",
		"leave"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, { multiple: a, highlightOnHover: o, orientation: s, disabled: c, selectionBehavior: l, dir: u } = /* @__PURE__ */ xn(r), { getItems: d } = Jv({ isProvider: !0 }), { handleTypeaheadSearch: f } = __(), { primitiveElement: p, currentElement: m } = T_(), h = p_(), g = zg(u), _ = Gg(m), v = /* @__PURE__ */ j(), y = /* @__PURE__ */ j(!1), b = /* @__PURE__ */ j(!0), x = Ef(r, "modelValue", i, {
			defaultValue: r.defaultValue ?? (a.value ? [] : void 0),
			passive: r.modelValue === void 0,
			deep: !0
		});
		function S(e) {
			if (y.value = !0, r.multiple) {
				let t = Array.isArray(x.value) ? [...x.value] : [], n = t.findIndex((t) => $v(t, e, r.by));
				r.selectionBehavior === "toggle" ? (n === -1 ? t.push(e) : t.splice(n, 1), x.value = t) : (x.value = [e], v.value = e);
			} else r.selectionBehavior === "toggle" && $v(x.value, e, r.by) ? x.value = void 0 : x.value = e;
			setTimeout(() => {
				y.value = !1;
			}, 1);
		}
		let C = /* @__PURE__ */ j(null), w = /* @__PURE__ */ j(null), T = /* @__PURE__ */ j(!1), ee = /* @__PURE__ */ j(!1), E = vd(), te = vd(), ne = vd();
		function re() {
			return d().map((e) => e.ref).filter((e) => e.dataset.disabled !== "");
		}
		function D(e, t = !0, n) {
			e && (C.value = e, (n ?? b.value) && C.value.focus(), t && C.value.scrollIntoView({ block: "nearest" }), i("highlight", d().find((t) => t.ref === e)));
		}
		function ie(e) {
			if (T.value) ne.trigger(e);
			else {
				let t = d().find((t) => $v(t.value, e, r.by));
				t && (C.value = t.ref, D(t.ref));
			}
		}
		function ae(e) {
			C.value && C.value.isConnected && (e.preventDefault(), e.stopPropagation(), ee.value || C.value.click());
		}
		function oe(e) {
			if (b.value) {
				if (y.value = !0, T.value) te.trigger(e);
				else {
					let t = e.altKey || e.ctrlKey || e.metaKey;
					if (t && e.key === "a" && a.value) {
						let t = d();
						x.value = [...t.map((e) => e.value)], e.preventDefault();
						let n = t.at(-1);
						n && D(n.ref);
					} else if (!t) {
						let t = f(e.key, d());
						t && D(t);
					}
				}
				setTimeout(() => {
					y.value = !1;
				}, 1);
			}
		}
		function se() {
			ee.value = !0;
		}
		function O() {
			er(() => {
				ee.value = !1;
			});
		}
		function ce() {
			er(() => {
				de(new KeyboardEvent("keydown", { key: "PageUp" }));
			});
		}
		function le(e) {
			let t = C.value;
			t?.isConnected && (w.value = t), C.value = null, i("leave", e);
		}
		function ue(e) {
			let t = new CustomEvent("listbox.entryFocus", {
				bubbles: !1,
				cancelable: !0
			});
			if (e.currentTarget?.dispatchEvent(t), i("entryFocus", t), !t.defaultPrevented) if (w.value) D(w.value);
			else {
				let e = re()?.[0];
				D(e);
			}
		}
		function de(e) {
			let t = iy(e, s.value, g.value);
			if (!t) return;
			let n = re();
			if (C.value) {
				if (t === "last") n.reverse();
				else if (t === "prev" || t === "next") {
					t === "prev" && n.reverse();
					let e = n.indexOf(C.value);
					n = n.slice(e + 1);
				}
				fe(e, n[0]);
			}
			if (n.length) {
				let e = !C.value && t === "prev" ? n.length - 1 : 0;
				D(n[e]);
			}
			if (T.value) return te.trigger(e);
		}
		function fe(e, t) {
			if (!(T.value || r.selectionBehavior !== "replace" || !a.value || !Array.isArray(x.value)) && !((e.altKey || e.ctrlKey || e.metaKey) && !e.shiftKey) && e.shiftKey) {
				let n = d().filter((e) => e.ref.dataset.disabled !== ""), r = n.find((e) => e.ref === t)?.value;
				if (e.key === h.END ? r = n.at(-1)?.value : e.key === h.HOME && (r = n[0]?.value), !r || !v.value) return;
				x.value = rp(n.map((e) => e.value), v.value, r);
			}
		}
		async function pe(e) {
			if (wd) if (await er(), T.value) E.trigger(e);
			else {
				let e = re(), t = e.find((e) => e.dataset.state === "checked");
				t ? D(t) : e.length && D(e[0]);
			}
		}
		return P(x, () => {
			y.value || er(() => {
				pe();
			});
		}, {
			immediate: !0,
			deep: !0
		}), t({
			highlightedElement: C,
			highlightItem: ie,
			highlightFirstItem: ce,
			highlightSelected: pe,
			getItems: d
		}), cy({
			modelValue: x,
			onValueChange: S,
			multiple: a,
			orientation: s,
			dir: g,
			disabled: c,
			highlightOnHover: o,
			highlightedElement: C,
			isVirtual: T,
			virtualFocusHook: E,
			virtualKeydownHook: te,
			virtualHighlightHook: ne,
			by: r.by,
			firstValue: v,
			selectionBehavior: l,
			focusable: b,
			onLeave: le,
			onEnter: ue,
			changeHighlight: D,
			onKeydownEnter: ae,
			onKeydownNavigation: de,
			onKeydownTypeAhead: oe,
			onCompositionStart: se,
			onCompositionEnd: O,
			highlightFirstItem: ce
		}), (e, t) => (z(), V(M(X), {
			ref_key: "primitiveElement",
			ref: p,
			as: e.as,
			"as-child": e.asChild,
			dir: M(g),
			"data-disabled": M(c) ? "" : void 0,
			onPointerleave: le,
			onFocusout: t[0] ||= async (e) => {
				let t = e.relatedTarget || e.target;
				await er(), C.value && M(m) && !M(m).contains(t) && le(e);
			}
		}, {
			default: N(() => [L(e.$slots, "default", { modelValue: M(x) }), M(_) && e.name ? (z(), V(M(Zv), {
				key: 0,
				name: e.name,
				value: M(x),
				disabled: M(c),
				required: e.required
			}, null, 8, [
				"name",
				"value",
				"disabled",
				"required"
			])) : G("v-if", !0)]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"dir",
			"data-disabled"
		]));
	}
}), uy = /* @__PURE__ */ F({
	__name: "ListboxContent",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let { CollectionSlot: t } = Jv(), n = sy(), r = qd(!1, 10);
		return (e, i) => (z(), V(M(t), null, {
			default: N(() => [U(M(X), {
				role: "listbox",
				as: e.as,
				"as-child": e.asChild,
				tabindex: M(n).focusable.value ? M(n).highlightedElement.value ? "-1" : "0" : "-1",
				"aria-orientation": M(n).orientation.value,
				"aria-multiselectable": !!M(n).multiple.value,
				"data-orientation": M(n).orientation.value,
				onMousedown: i[0] ||= Xl((e) => r.value = !0, ["left"]),
				onFocus: i[1] ||= (e) => {
					M(r) || M(n).onEnter(e);
				},
				onKeydown: [
					i[2] ||= Ql((e) => {
						M(n).orientation.value === "vertical" && (e.key === "ArrowLeft" || e.key === "ArrowRight") || M(n).orientation.value === "horizontal" && (e.key === "ArrowUp" || e.key === "ArrowDown") || (e.preventDefault(), M(n).focusable.value && M(n).onKeydownNavigation(e));
					}, [
						"down",
						"up",
						"left",
						"right",
						"home",
						"end"
					]),
					Ql(M(n).onKeydownEnter, ["enter"]),
					M(n).onKeydownTypeAhead
				]
			}, {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"tabindex",
				"aria-orientation",
				"aria-multiselectable",
				"data-orientation",
				"onKeydown"
			])]),
			_: 3
		}));
	}
}), dy = /* @__PURE__ */ F({
	__name: "ListboxFilter",
	props: {
		modelValue: {
			type: String,
			required: !1
		},
		autoFocus: {
			type: Boolean,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "input"
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = Ef(n, "modelValue", t, {
			defaultValue: "",
			passive: n.modelValue === void 0
		}), i = sy(), { primitiveElement: a, currentElement: o } = T_(), s = q(() => n.disabled || i.disabled.value || !1), c = /* @__PURE__ */ j();
		return Dr(() => c.value = i.highlightedElement.value?.id), I(() => {
			i.focusable.value = !1, setTimeout(() => {
				n.autoFocus && o.value?.focus();
			}, 1);
		}), Yi(() => {
			i.focusable.value = !0;
		}), (e, t) => (z(), V(M(X), {
			ref_key: "primitiveElement",
			ref: a,
			as: e.as,
			"as-child": e.asChild,
			value: M(r),
			disabled: s.value ? "" : void 0,
			"data-disabled": s.value ? "" : void 0,
			"aria-disabled": s.value ?? void 0,
			"aria-activedescendant": c.value,
			type: "text",
			onKeydown: [Ql(Xl(M(i).onKeydownNavigation, ["prevent"]), [
				"down",
				"up",
				"home",
				"end"
			]), Ql(M(i).onKeydownEnter, ["enter"])],
			onInput: t[0] ||= (e) => {
				r.value = e.target.value, M(i).highlightFirstItem();
			},
			onCompositionstart: M(i).onCompositionStart,
			onCompositionend: M(i).onCompositionEnd
		}, {
			default: N(() => [L(e.$slots, "default", { modelValue: M(r) })]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"value",
			"disabled",
			"data-disabled",
			"aria-disabled",
			"aria-activedescendant",
			"onKeydown",
			"onCompositionstart",
			"onCompositionend"
		]));
	}
}), [fy, py] = /* @__PURE__ */ cp("ListboxGroup"), my = /* @__PURE__ */ F({
	__name: "ListboxGroup",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = f_(void 0, "reka-listbox-group");
		return py({ id: n }), (e, r) => (z(), V(M(X), K({ role: "group" }, t, { "aria-labelledby": M(n) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["aria-labelledby"]));
	}
}), hy = /* @__PURE__ */ F({
	__name: "ListboxGroupLabel",
	props: {
		for: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "div"
		}
	},
	setup(e) {
		let t = e, n = fy({ id: "" });
		return (e, r) => (z(), V(M(X), K(t, { id: M(n).id }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), gy = "listbox.select", [_y, vy] = /* @__PURE__ */ cp("ListboxItem"), yy = /* @__PURE__ */ F({
	__name: "ListboxItem",
	props: {
		value: {
			type: null,
			required: !0
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "div"
		}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = f_(void 0, "reka-listbox-item"), { CollectionItem: a } = Jv(), { forwardRef: o, currentElement: s } = Y(), c = sy(), l = q(() => s.value === c.highlightedElement.value), u = q(() => Qv(c.modelValue.value, n.value, c.by)), d = q(() => c.disabled.value || n.disabled);
		async function f(e) {
			r("select", e), !e?.defaultPrevented && !d.value && e && (c.onValueChange(n.value), c.changeHighlight(s.value));
		}
		function p(e) {
			up(gy, f, {
				originalEvent: e,
				value: n.value
			});
		}
		return vy({ isSelected: u }), (e, t) => (z(), V(M(a), { value: e.value }, {
			default: N(() => [Ys([l.value, u.value], () => U(M(X), K({ id: M(i) }, e.$attrs, {
				ref: M(o),
				role: "option",
				tabindex: M(c).focusable.value ? l.value ? "0" : "-1" : -1,
				"aria-selected": u.value,
				as: e.as,
				"as-child": e.asChild,
				disabled: d.value ? "" : void 0,
				"data-disabled": d.value ? "" : void 0,
				"data-highlighted": l.value ? "" : void 0,
				"data-state": u.value ? "checked" : "unchecked",
				onClick: p,
				onKeydown: Ql(Xl(p, ["prevent"]), ["space"]),
				onPointermove: t[0] ||= () => {
					M(c).highlightedElement.value !== M(s) && M(c).highlightOnHover.value && M(c).changeHighlight(M(s), !1, !1);
				}
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, [
				"id",
				"tabindex",
				"aria-selected",
				"as",
				"as-child",
				"disabled",
				"data-disabled",
				"data-highlighted",
				"data-state",
				"onKeydown"
			]), t, 1)]),
			_: 3
		}, 8, ["value"]));
	}
}), [by, xy] = /* @__PURE__ */ cp("PopperRoot"), Sy = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "PopperRoot",
	setup(e) {
		let t = /* @__PURE__ */ j();
		return xy({
			anchor: t,
			onAnchorChange: (e) => t.value = e
		}), (e, t) => L(e.$slots, "default");
	}
}), Cy = /* @__PURE__ */ F({
	__name: "PopperAnchor",
	props: {
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, { forwardRef: n, currentElement: r } = Y(), i = by();
		return Er(() => {
			i.onAnchorChange(t.reference ?? r.value);
		}), (e, t) => (z(), V(M(X), {
			ref: M(n),
			as: e.as,
			"as-child": e.asChild
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, ["as", "as-child"]));
	}
}), wy = {
	key: 0,
	d: "M0 0L6 6L12 0"
}, Ty = {
	key: 1,
	d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, Ey = /* @__PURE__ */ F({
	__name: "Arrow",
	props: {
		width: {
			type: Number,
			required: !1,
			default: 10
		},
		height: {
			type: Number,
			required: !1,
			default: 5
		},
		rounded: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "svg"
		}
	},
	setup(e) {
		let t = e;
		return Y(), (e, n) => (z(), V(M(X), K(t, {
			width: e.width,
			height: e.height,
			viewBox: e.asChild ? void 0 : "0 0 12 6",
			preserveAspectRatio: e.asChild ? void 0 : "none"
		}), {
			default: N(() => [L(e.$slots, "default", {}, () => [e.rounded ? (z(), B("path", Ty)) : (z(), B("path", wy))])]),
			_: 3
		}, 16, [
			"width",
			"height",
			"viewBox",
			"preserveAspectRatio"
		]));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Popper/utils.js
function Dy(e) {
	return e !== null;
}
function Oy(e) {
	return {
		name: "transformOrigin",
		options: e,
		fn(t) {
			let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = ky(n), u = {
				start: "0%",
				center: "50%",
				end: "100%"
			}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
			return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
				x: p,
				y: m
			} };
		}
	};
}
function ky(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Ay = [
	"top",
	"right",
	"bottom",
	"left"
], jy = Math.min, My = Math.max, Ny = Math.round, Py = Math.floor, Fy = (e) => ({
	x: e,
	y: e
}), Iy = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Ly(e, t, n) {
	return My(e, jy(t, n));
}
function Ry(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function zy(e) {
	return e.split("-")[0];
}
function By(e) {
	return e.split("-")[1];
}
function Vy(e) {
	return e === "x" ? "y" : "x";
}
function Hy(e) {
	return e === "y" ? "height" : "width";
}
function Uy(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Wy(e) {
	return Vy(Uy(e));
}
function Gy(e, t, n) {
	n === void 0 && (n = !1);
	let r = By(e), i = Wy(e), a = Hy(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = eb(o)), [o, eb(o)];
}
function Ky(e) {
	let t = eb(e);
	return [
		qy(e),
		t,
		qy(t)
	];
}
function qy(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Jy = ["left", "right"], Yy = ["right", "left"], Xy = ["top", "bottom"], Zy = ["bottom", "top"];
function Qy(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Yy : Jy : t ? Jy : Yy;
		case "left":
		case "right": return t ? Xy : Zy;
		default: return [];
	}
}
function $y(e, t, n, r) {
	let i = By(e), a = Qy(zy(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(qy)))), a;
}
function eb(e) {
	let t = zy(e);
	return Iy[t] + e.slice(t.length);
}
function tb(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function nb(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : tb(e);
}
function rb(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function ib(e, t, n) {
	let { reference: r, floating: i } = e, a = Uy(t), o = Wy(t), s = Hy(o), c = zy(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (By(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function ab(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Ry(t, e), p = nb(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = rb(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = rb(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var ob = 50, sb = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: ab
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = ib(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < ob && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = ib(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, cb = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Ry(e, t) || {};
		if (l == null) return {};
		let d = nb(u), f = {
			x: n,
			y: r
		}, p = Wy(i), m = Hy(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, ee = jy(d[_], T), E = jy(d[v], T), te = ee, ne = C - h[m] - E, re = C / 2 - h[m] / 2 + w, D = Ly(te, re, ne), ie = !c.arrow && By(i) != null && re !== D && a.reference[m] / 2 - (re < te ? ee : E) - h[m] / 2 < 0, ae = ie ? re < te ? re - te : re - ne : 0;
		return {
			[p]: f[p] + ae,
			data: {
				[p]: D,
				centerOffset: re - D - ae,
				...ie && { alignmentOffset: ae }
			},
			reset: ie
		};
	}
}), lb = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Ry(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = zy(r), _ = Uy(o), v = zy(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [eb(o)] : Ky(o)), x = p !== "none";
			!d && x && b.push(...$y(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Gy(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== Uy(t)) || T.every((e) => Uy(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = Uy(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function ub(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function db(e) {
	return Ay.some((t) => e[t] >= 0);
}
var fb = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Ry(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = ub(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: db(e)
					} };
				}
				case "escaped": {
					let e = ub(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: db(e)
					} };
				}
				default: return {};
			}
		}
	};
}, pb = /* @__PURE__ */ new Set(["left", "top"]);
async function mb(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = zy(n), s = By(n), c = Uy(n) === "y", l = pb.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Ry(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var hb = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await mb(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, gb = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = Ry(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Uy(zy(i)), p = Vy(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Ly(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Ly(n, h, r);
			}
			let g = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				...g,
				data: {
					x: g.x - n,
					y: g.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, _b = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Ry(e, t), u = {
				x: n,
				y: r
			}, d = Uy(i), f = Vy(d), p = u[f], m = u[d], h = Ry(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = pb.has(zy(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, vb = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = Ry(e, t), u = await o.detectOverflow(t, l), d = zy(i), f = By(i), p = Uy(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = jy(h - u[g], v), x = jy(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = My(u.left, 0), t = My(u.right, 0), n = My(u.top, 0), r = My(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : My(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : My(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function yb() {
	return typeof window < "u";
}
function bb(e) {
	return Cb(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function xb(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Sb(e) {
	return ((Cb(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Cb(e) {
	return yb() ? e instanceof Node || e instanceof xb(e).Node : !1;
}
function wb(e) {
	return yb() ? e instanceof Element || e instanceof xb(e).Element : !1;
}
function Tb(e) {
	return yb() ? e instanceof HTMLElement || e instanceof xb(e).HTMLElement : !1;
}
function Eb(e) {
	return !yb() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof xb(e).ShadowRoot;
}
function Db(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Rb(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Ob(e) {
	return /^(table|td|th)$/.test(bb(e));
}
function kb(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Ab = /transform|translate|scale|rotate|perspective|filter/, jb = /paint|layout|strict|content/, Mb = (e) => !!e && e !== "none", Nb;
function Pb(e) {
	let t = wb(e) ? Rb(e) : e;
	return Mb(t.transform) || Mb(t.translate) || Mb(t.scale) || Mb(t.rotate) || Mb(t.perspective) || !Ib() && (Mb(t.backdropFilter) || Mb(t.filter)) || Ab.test(t.willChange || "") || jb.test(t.contain || "");
}
function Fb(e) {
	let t = Bb(e);
	for (; Tb(t) && !Lb(t);) {
		if (Pb(t)) return t;
		if (kb(t)) return null;
		t = Bb(t);
	}
	return null;
}
function Ib() {
	return Nb ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Nb;
}
function Lb(e) {
	return /^(html|body|#document)$/.test(bb(e));
}
function Rb(e) {
	return xb(e).getComputedStyle(e);
}
function zb(e) {
	return wb(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Bb(e) {
	if (bb(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Eb(e) && e.host || Sb(e);
	return Eb(t) ? t.host : t;
}
function Vb(e) {
	let t = Bb(e);
	return Lb(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Tb(t) && Db(t) ? t : Vb(t);
}
function Hb(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Vb(e), i = r === e.ownerDocument?.body, a = xb(r);
	if (i) {
		let e = Ub(a);
		return t.concat(a, a.visualViewport || [], Db(r) ? r : [], e && n ? Hb(e) : []);
	} else return t.concat(r, Hb(r, [], n));
}
function Ub(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Wb(e) {
	let t = Rb(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Tb(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Ny(n) !== a || Ny(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Gb(e) {
	return wb(e) ? e : e.contextElement;
}
function Kb(e) {
	let t = Gb(e);
	if (!Tb(t)) return Fy(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Wb(t), o = (a ? Ny(n.width) : n.width) / r, s = (a ? Ny(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var qb = /* @__PURE__ */ Fy(0);
function Jb(e) {
	let t = xb(e);
	return !Ib() || !t.visualViewport ? qb : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Yb(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== xb(e) ? !1 : t;
}
function Xb(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Gb(e), o = Fy(1);
	t && (r ? wb(r) && (o = Kb(r)) : o = Kb(e));
	let s = Yb(a, n, r) ? Jb(a) : Fy(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = xb(a), t = r && wb(r) ? xb(r) : r, n = e, i = Ub(n);
		for (; i && r && t !== n;) {
			let e = Kb(i), t = i.getBoundingClientRect(), r = Rb(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = xb(i), i = Ub(n);
		}
	}
	return rb({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Zb(e, t) {
	let n = zb(e).scrollLeft;
	return t ? t.left + n : Xb(Sb(e)).left + n;
}
function Qb(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Zb(e, n),
		y: n.top + t.scrollTop
	};
}
function $b(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Sb(r), s = t ? kb(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Fy(1), u = Fy(0), d = Tb(r);
	if ((d || !d && !a) && ((bb(r) !== "body" || Db(o)) && (c = zb(r)), d)) {
		let e = Xb(r);
		l = Kb(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Qb(o, c) : Fy(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function ex(e) {
	return Array.from(e.getClientRects());
}
function tx(e) {
	let t = Sb(e), n = zb(e), r = e.ownerDocument.body, i = My(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = My(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Zb(e), s = -n.scrollTop;
	return Rb(r).direction === "rtl" && (o += My(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var nx = 25;
function rx(e, t) {
	let n = xb(e), r = Sb(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Ib();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = Zb(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= nx && (a -= o);
	} else l <= nx && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function ix(e, t) {
	let n = Xb(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Tb(e) ? Kb(e) : Fy(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function ax(e, t, n) {
	let r;
	if (t === "viewport") r = rx(e, n);
	else if (t === "document") r = tx(Sb(e));
	else if (wb(t)) r = ix(t, n);
	else {
		let n = Jb(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return rb(r);
}
function ox(e, t) {
	let n = Bb(e);
	return n === t || !wb(n) || Lb(n) ? !1 : Rb(n).position === "fixed" || ox(n, t);
}
function sx(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Hb(e, [], !1).filter((e) => wb(e) && bb(e) !== "body"), i = null, a = Rb(e).position === "fixed", o = a ? Bb(e) : e;
	for (; wb(o) && !Lb(o);) {
		let t = Rb(o), n = Pb(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || Db(o) && !n && ox(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Bb(o);
	}
	return t.set(e, r), r;
}
function cx(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? kb(t) ? [] : sx(t, this._c) : [].concat(n), r], o = ax(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = ax(t, a[e], i);
		s = My(n.top, s), c = jy(n.right, c), l = jy(n.bottom, l), u = My(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function lx(e) {
	let { width: t, height: n } = Wb(e);
	return {
		width: t,
		height: n
	};
}
function ux(e, t, n) {
	let r = Tb(t), i = Sb(t), a = n === "fixed", o = Xb(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Fy(0);
	function l() {
		c.x = Zb(i);
	}
	if (r || !r && !a) if ((bb(t) !== "body" || Db(i)) && (s = zb(t)), r) {
		let e = Xb(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Qb(i, s) : Fy(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function dx(e) {
	return Rb(e).position === "static";
}
function fx(e, t) {
	if (!Tb(e) || Rb(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Sb(e) === n && (n = n.ownerDocument.body), n;
}
function px(e, t) {
	let n = xb(e);
	if (kb(e)) return n;
	if (!Tb(e)) {
		let t = Bb(e);
		for (; t && !Lb(t);) {
			if (wb(t) && !dx(t)) return t;
			t = Bb(t);
		}
		return n;
	}
	let r = fx(e, t);
	for (; r && Ob(r) && dx(r);) r = fx(r, t);
	return r && Lb(r) && dx(r) && !Pb(r) ? n : r || Fb(e) || n;
}
var mx = async function(e) {
	let t = this.getOffsetParent || px, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: ux(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function hx(e) {
	return Rb(e).direction === "rtl";
}
var gx = {
	convertOffsetParentRelativeRectToViewportRelativeRect: $b,
	getDocumentElement: Sb,
	getClippingRect: cx,
	getOffsetParent: px,
	getElementRects: mx,
	getClientRects: ex,
	getDimensions: lx,
	getScale: Kb,
	isElement: wb,
	isRTL: hx
};
function _x(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function vx(e, t) {
	let n = null, r, i = Sb(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Py(d), h = Py(i.clientWidth - (u + f)), g = Py(i.clientHeight - (d + p)), _ = Py(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: My(0, jy(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !_x(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function yx(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Gb(e), u = i || a ? [...l ? Hb(l) : [], ...t ? Hb(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? vx(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Xb(e) : null;
	c && g();
	function g() {
		let t = Xb(e);
		h && !_x(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var bx = hb, xx = gb, Sx = lb, Cx = vb, wx = fb, Tx = cb, Ex = _b, Dx = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: gx,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return sb(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region node_modules/@floating-ui/vue/dist/floating-ui.vue.mjs
function Ox(e) {
	return typeof e == "object" && !!e && "$el" in e;
}
function kx(e) {
	if (Ox(e)) {
		let t = e.$el;
		return Cb(t) && bb(t) === "#comment" ? null : t;
	}
	return e;
}
function Ax(e) {
	return typeof e == "function" ? e() : M(e);
}
function jx(e) {
	return {
		name: "arrow",
		options: e,
		fn(t) {
			let n = kx(Ax(e.element));
			return n == null ? {} : Tx({
				element: n,
				padding: e.padding
			}).fn(t);
		}
	};
}
function Mx(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Nx(e, t) {
	let n = Mx(e);
	return Math.round(t * n) / n;
}
function Px(e, t, n) {
	n === void 0 && (n = {});
	let r = n.whileElementsMounted, i = q(() => Ax(n.open) ?? !0), a = q(() => Ax(n.middleware)), o = q(() => Ax(n.placement) ?? "bottom"), s = q(() => Ax(n.strategy) ?? "absolute"), c = q(() => Ax(n.transform) ?? !0), l = q(() => kx(e.value)), u = q(() => kx(t.value)), d = /* @__PURE__ */ j(0), f = /* @__PURE__ */ j(0), p = /* @__PURE__ */ j(s.value), m = /* @__PURE__ */ j(o.value), h = /* @__PURE__ */ fn({}), g = /* @__PURE__ */ j(!1), _ = q(() => {
		let e = {
			position: p.value,
			left: "0",
			top: "0"
		};
		if (!u.value) return e;
		let t = Nx(u.value, d.value), n = Nx(u.value, f.value);
		return c.value ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Mx(u.value) >= 1.5 && { willChange: "transform" }
		} : {
			position: p.value,
			left: t + "px",
			top: n + "px"
		};
	}), v;
	function y() {
		if (l.value == null || u.value == null) return;
		let e = i.value;
		Dx(l.value, u.value, {
			middleware: a.value,
			placement: o.value,
			strategy: s.value
		}).then((t) => {
			d.value = t.x, f.value = t.y, p.value = t.strategy, m.value = t.placement, h.value = t.middlewareData, g.value = e !== !1;
		});
	}
	function b() {
		typeof v == "function" && (v(), v = void 0);
	}
	function x() {
		if (b(), r === void 0) {
			y();
			return;
		}
		if (l.value != null && u.value != null) {
			v = r(l.value, u.value, y);
			return;
		}
	}
	function S() {
		i.value || (g.value = !1);
	}
	return P([
		a,
		o,
		s,
		i
	], y, { flush: "sync" }), P([l, u], x, { flush: "sync" }), P(i, S, { flush: "sync" }), Pe() && Fe(b), {
		x: /* @__PURE__ */ en(d),
		y: /* @__PURE__ */ en(f),
		strategy: /* @__PURE__ */ en(p),
		placement: /* @__PURE__ */ en(m),
		middlewareData: /* @__PURE__ */ en(h),
		isPositioned: /* @__PURE__ */ en(g),
		floatingStyles: _,
		update: y
	};
}
//#endregion
//#region node_modules/reka-ui/dist/Popper/PopperContent.js
var Fx = {
	side: "bottom",
	sideOffset: 0,
	sideFlip: !0,
	align: "center",
	alignOffset: 0,
	alignFlip: !0,
	arrowPadding: 0,
	hideShiftedArrow: !0,
	avoidCollisions: !0,
	collisionBoundary: () => [],
	collisionPadding: 0,
	sticky: "partial",
	hideWhenDetached: !1,
	positionStrategy: "fixed",
	updatePositionStrategy: "optimized",
	prioritizePosition: !1
}, [Ix, Lx] = /* @__PURE__ */ cp("PopperContent"), Rx = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "PopperContent",
	props: /* @__PURE__ */ Oa({
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	}, { ...Fx }),
	emits: ["placed"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = by(), { forwardRef: a, currentElement: o } = Y(), s = /* @__PURE__ */ j(), c = /* @__PURE__ */ j(), { width: l, height: u } = h_(c), d = q(() => n.side + (n.align === "center" ? "" : `-${n.align}`)), f = q(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			...n.collisionPadding
		}), p = q(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), m = q(() => ({
			padding: f.value,
			boundary: p.value.filter(Dy),
			altBoundary: p.value.length > 0
		})), h = q(() => ({
			mainAxis: n.sideFlip,
			crossAxis: n.alignFlip
		})), g = hd(() => [
			bx({
				mainAxis: n.sideOffset + u.value,
				alignmentAxis: n.alignOffset
			}),
			n.prioritizePosition && n.avoidCollisions && Sx({
				...m.value,
				...h.value
			}),
			n.avoidCollisions && xx({
				mainAxis: !0,
				crossAxis: !!n.prioritizePosition,
				limiter: n.sticky === "partial" ? Ex() : void 0,
				...m.value
			}),
			!n.prioritizePosition && n.avoidCollisions && Sx({
				...m.value,
				...h.value
			}),
			Cx({
				...m.value,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--reka-popper-available-width", `${n}px`), o.setProperty("--reka-popper-available-height", `${r}px`), o.setProperty("--reka-popper-anchor-width", `${i}px`), o.setProperty("--reka-popper-anchor-height", `${a}px`);
				}
			}),
			c.value && jx({
				element: c.value,
				padding: n.arrowPadding
			}),
			Oy({
				arrowWidth: l.value,
				arrowHeight: u.value
			}),
			n.hideWhenDetached && wx({
				strategy: "referenceHidden",
				...m.value
			})
		]), { floatingStyles: _, placement: v, isPositioned: y, middlewareData: b, update: x } = Px(q(() => n.reference ?? i.anchor.value), s, {
			strategy: n.positionStrategy,
			placement: d,
			whileElementsMounted: (...e) => yx(...e, {
				layoutShift: !n.disableUpdateOnLayoutShift,
				animationFrame: n.updatePositionStrategy === "always"
			}),
			middleware: g
		}), S = q(() => ky(v.value)[0]), C = q(() => ky(v.value)[1]);
		Er(() => {
			y.value && r("placed");
		});
		let w = q(() => {
			let e = b.value.arrow?.centerOffset !== 0;
			return n.hideShiftedArrow && e;
		}), T = /* @__PURE__ */ j("");
		return Tr(() => {
			o.value && (T.value = window.getComputedStyle(o.value).zIndex);
		}), Lx({
			placedSide: S,
			onArrowChange: (e) => c.value = e,
			arrowX: q(() => b.value.arrow?.x ?? 0),
			arrowY: q(() => b.value.arrow?.y ?? 0),
			shouldHideArrow: w
		}), (e, t) => (z(), B("div", {
			ref_key: "floatingRef",
			ref: s,
			"data-reka-popper-content-wrapper": "",
			style: he({
				...M(_),
				transform: M(y) ? M(_).transform : "translate(0, -200%)",
				minWidth: "max-content",
				zIndex: T.value,
				"--reka-popper-transform-origin": [M(b).transformOrigin?.x, M(b).transformOrigin?.y].join(" "),
				...M(b).hide?.referenceHidden && {
					visibility: "hidden",
					pointerEvents: "none"
				}
			})
		}, [U(M(X), K({ ref: M(a) }, e.$attrs, {
			"as-child": n.asChild,
			as: e.as,
			"data-side": S.value,
			"data-align": C.value,
			style: { animation: M(y) ? void 0 : "none" }
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, [
			"as-child",
			"as",
			"data-side",
			"data-align",
			"style"
		])], 4));
	}
}), zx = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, Bx = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "PopperArrow",
	props: {
		width: {
			type: Number,
			required: !1
		},
		height: {
			type: Number,
			required: !1
		},
		rounded: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "svg"
		}
	},
	setup(e) {
		let { forwardRef: t } = Y(), n = Ix(), r = q(() => zx[n.placedSide.value]);
		return (e, i) => (z(), B("span", {
			ref: (e) => {
				M(n).onArrowChange(e ?? void 0);
			},
			style: he({
				position: "absolute",
				left: M(n).arrowX?.value ? `${M(n).arrowX?.value}px` : void 0,
				top: M(n).arrowY?.value ? `${M(n).arrowY?.value}px` : void 0,
				[r.value]: 0,
				transformOrigin: {
					top: "",
					right: "0 0",
					bottom: "center 0",
					left: "100% 0"
				}[M(n).placedSide.value],
				transform: {
					top: "translateY(100%)",
					right: "translateY(50%) rotate(90deg) translateX(-50%)",
					bottom: "rotate(180deg)",
					left: "translateY(50%) rotate(-90deg) translateX(50%)"
				}[M(n).placedSide.value],
				visibility: M(n).shouldHideArrow.value ? "hidden" : void 0
			})
		}, [U(Ey, K(e.$attrs, {
			ref: M(t),
			style: { display: "block" },
			as: e.as,
			"as-child": e.asChild,
			rounded: e.rounded,
			width: e.width,
			height: e.height
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, [
			"as",
			"as-child",
			"rounded",
			"width",
			"height"
		])], 4));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/shared/useNonce.js
function Vx(e) {
	let t = _p({ nonce: /* @__PURE__ */ j() });
	return q(() => e?.value || t.nonce?.value);
}
//#endregion
//#region node_modules/reka-ui/dist/Avatar/AvatarRoot.js
var [Hx, Ux] = /* @__PURE__ */ cp("AvatarRoot"), Wx = /* @__PURE__ */ F({
	__name: "AvatarRoot",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		return Y(), Ux({ imageLoadingStatus: /* @__PURE__ */ j("idle") }), (e, t) => (z(), V(M(X), {
			"as-child": e.asChild,
			as: e.as
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, ["as-child", "as"]));
	}
}), Gx = /* @__PURE__ */ F({
	__name: "AvatarFallback",
	props: {
		delayMs: {
			type: Number,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		let t = e, n = Hx();
		Y();
		let r = /* @__PURE__ */ j(t.delayMs === void 0);
		return Tr((e) => {
			if (t.delayMs && wd) {
				let n = window.setTimeout(() => {
					r.value = !0;
				}, t.delayMs);
				e(() => {
					window.clearTimeout(n);
				});
			}
		}), (e, t) => r.value && M(n).imageLoadingStatus.value !== "loaded" ? (z(), V(M(X), {
			key: 0,
			"as-child": e.asChild,
			as: e.as
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, ["as-child", "as"])) : G("v-if", !0);
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Avatar/utils.js
function Kx(e, t) {
	return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function qx(e, { referrerPolicy: t, crossOrigin: n } = {}) {
	let r = /* @__PURE__ */ j(!1), i = /* @__PURE__ */ j(null), a = q(() => r.value ? (!i.value && wd && (i.value = new window.Image()), i.value) : null), o = /* @__PURE__ */ j(Kx(a.value, e.value)), s = (e) => () => {
		r.value && (o.value = e);
	};
	return I(() => {
		r.value = !0, Tr((r) => {
			let i = a.value;
			if (!i) return;
			o.value = Kx(i, e.value);
			let c = s("loaded"), l = s("error");
			i.addEventListener("load", c), i.addEventListener("error", l), t?.value && (i.referrerPolicy = t.value), typeof n?.value == "string" && (i.crossOrigin = n.value), r(() => {
				i.removeEventListener("load", c), i.removeEventListener("error", l);
			});
		});
	}), Yi(() => {
		r.value = !1;
	}), o;
}
//#endregion
//#region node_modules/reka-ui/dist/Avatar/AvatarImage.js
var Jx = /* @__PURE__ */ F({
	__name: "AvatarImage",
	props: {
		src: {
			type: String,
			required: !0
		},
		referrerPolicy: {
			type: null,
			required: !1
		},
		crossOrigin: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "img"
		}
	},
	emits: ["loadingStatusChange"],
	setup(e, { emit: t }) {
		let n = e, r = t, { src: i, referrerPolicy: a, crossOrigin: o } = /* @__PURE__ */ xn(n);
		Y();
		let s = Hx(), c = qx(i, {
			referrerPolicy: a,
			crossOrigin: o
		});
		return P(c, (e) => {
			r("loadingStatusChange", e), e !== "idle" && (s.imageLoadingStatus.value = e);
		}, { immediate: !0 }), (e, t) => vr((z(), V(M(X), {
			role: "img",
			"as-child": e.asChild,
			as: e.as,
			src: M(i),
			referrerpolicy: M(a),
			crossorigin: M(o)
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as-child",
			"as",
			"src",
			"referrerpolicy",
			"crossorigin"
		])), [[Pc, M(c) === "loaded"]]);
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Calendar/useCalendar.js
function Yx(e) {
	function t(t) {
		return Array.isArray(e.date.value) ? e.date.value.some((e) => Ip(e, t)) : e.date.value ? Ip(e.date.value, t) : !1;
	}
	return {
		isDateSelected: t,
		isInvalid: q(() => {
			if (Array.isArray(e.date.value)) {
				if (!e.date.value.length) return !1;
				for (let t of e.date.value) if (e.isDateDisabled?.(t) || e.isDateUnavailable?.(t)) return !0;
			} else {
				if (!e.date.value) return !1;
				if (e.isDateDisabled?.(e.date.value) || e.isDateUnavailable?.(e.date.value)) return !0;
			}
			return !1;
		}),
		hasSelectedDate: q(() => Array.isArray(e.date.value) ? e.date.value.length > 0 : !!e.date.value),
		isSelectedDateDisabled: q(() => Array.isArray(e.date.value) ? e.date.value.length ? e.date.value.some((t) => e.isDateDisabled?.(t)) : !1 : e.date.value ? !!e.isDateDisabled?.(e.date.value) : !1)
	};
}
function Xx(e, t) {
	let n = t(e), r = n.compare(e), i = {};
	return r >= 7 && (i.day = 1), r >= wg(e) && (i.month = 1), n.set({ ...i });
}
function Zx(e, t) {
	let n = t(e), r = e.compare(n), i = {};
	return r >= 7 && (i.day = 35), r >= wg(e) && (i.month = 13), n.set({ ...i });
}
function Qx(e, t) {
	return t(e);
}
function $x(e, t) {
	return t(e);
}
function eS(e) {
	let t = Rg(e.locale.value), n = q(() => {
		let t = { calendar: e.placeholder.value.calendar.identifier };
		return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (t.era = "short"), t;
	}), r = /* @__PURE__ */ j(Fg({
		dateObj: e.placeholder.value,
		weekStartsOn: e.weekStartsOn.value,
		locale: e.locale.value,
		fixedWeeks: e.fixedWeeks.value,
		numberOfMonths: e.numberOfMonths.value
	})), i = q(() => r.value.map((e) => e.value));
	function a(e) {
		return !i.value.some((t) => zp(e, t));
	}
	let o = (t) => {
		if (!e.maxValue.value || !r.value.length) return !1;
		if (e.disabled.value) return !0;
		let n = r.value.at(-1).value;
		return !t && !e.nextPage.value ? Eg(n.add({ months: 1 }).set({ day: 1 }), e.maxValue.value) : Eg(Xx(n, t || e.nextPage.value), e.maxValue.value);
	}, s = (t) => {
		if (!e.minValue.value || !r.value.length) return !1;
		if (e.disabled.value) return !0;
		let n = r.value[0].value;
		return !t && !e.prevPage.value ? Tg(n.subtract({ months: 1 }).set({ day: 35 }), e.minValue.value) : Tg(Zx(n, t || e.prevPage.value), e.minValue.value);
	};
	function c(t) {
		return !!(e.isDateDisabled?.(t) || e.disabled.value || e.maxValue.value && Eg(t, e.maxValue.value) || e.minValue.value && Tg(t, e.minValue.value));
	}
	let l = (t) => !!e.isDateUnavailable?.(t), u = q(() => r.value.length ? r.value[0].rows[0].map((n) => t.dayOfWeek(bg(n), e.weekdayFormat.value)) : []), d = (t) => {
		let n = r.value[0].value;
		if (!t && !e.nextPage.value) {
			let t = Fg({
				dateObj: n.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }),
				weekStartsOn: e.weekStartsOn.value,
				locale: e.locale.value,
				fixedWeeks: e.fixedWeeks.value,
				numberOfMonths: e.numberOfMonths.value
			});
			r.value = t, e.placeholder.value = t[0].value.set({ day: 1 });
			return;
		}
		let i = Fg({
			dateObj: Qx(n, t || e.nextPage.value),
			weekStartsOn: e.weekStartsOn.value,
			locale: e.locale.value,
			fixedWeeks: e.fixedWeeks.value,
			numberOfMonths: e.numberOfMonths.value
		});
		r.value = i;
		let a = {};
		if (!t) {
			let e = i[0].value.compare(n);
			e >= wg(n) && (a.day = 1), e >= 365 && (a.month = 1);
		}
		e.placeholder.value = i[0].value.set({ ...a });
	}, f = (t) => {
		let n = r.value[0].value;
		if (!t && !e.prevPage.value) {
			let t = Fg({
				dateObj: n.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }),
				weekStartsOn: e.weekStartsOn.value,
				locale: e.locale.value,
				fixedWeeks: e.fixedWeeks.value,
				numberOfMonths: e.numberOfMonths.value
			});
			r.value = t, e.placeholder.value = t[0].value.set({ day: 1 });
			return;
		}
		let i = Fg({
			dateObj: $x(n, t || e.prevPage.value),
			weekStartsOn: e.weekStartsOn.value,
			locale: e.locale.value,
			fixedWeeks: e.fixedWeeks.value,
			numberOfMonths: e.numberOfMonths.value
		});
		r.value = i;
		let a = {};
		if (!t) {
			let e = n.compare(i[0].value);
			e >= wg(n) && (a.day = 1), e >= 365 && (a.month = 1);
		}
		e.placeholder.value = i[0].value.set({ ...a });
	};
	P(e.placeholder, (t) => {
		i.value.some((e) => zp(e, t)) || (r.value = Fg({
			dateObj: t,
			weekStartsOn: e.weekStartsOn.value,
			locale: e.locale.value,
			fixedWeeks: e.fixedWeeks.value,
			numberOfMonths: e.numberOfMonths.value
		}));
	}), P([
		e.locale,
		e.weekStartsOn,
		e.fixedWeeks,
		e.numberOfMonths
	], () => {
		r.value = Fg({
			dateObj: e.placeholder.value,
			weekStartsOn: e.weekStartsOn.value,
			locale: e.locale.value,
			fixedWeeks: e.fixedWeeks.value,
			numberOfMonths: e.numberOfMonths.value
		});
	});
	let p = q(() => {
		if (!r.value.length) return "";
		if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value), r.value.length === 1) {
			let e = r.value[0].value;
			return `${t.fullMonthAndYear(bg(e), n.value)}`;
		}
		let i = bg(r.value[0].value), a = bg(r.value.at(-1).value), o = t.fullMonth(i, n.value), s = t.fullMonth(a, n.value), c = t.fullYear(i, n.value), l = t.fullYear(a, n.value);
		return c === l ? `${o} - ${s} ${l}` : `${o} ${c} - ${s} ${l}`;
	});
	return {
		isDateDisabled: c,
		isDateUnavailable: l,
		isNextButtonDisabled: o,
		isPrevButtonDisabled: s,
		grid: r,
		weekdays: u,
		visibleView: i,
		isOutsideVisibleView: a,
		formatter: t,
		nextPage: d,
		prevPage: f,
		headingValue: p,
		fullCalendarLabel: q(() => `${e.calendarLabel.value ?? "Event Date"}, ${p.value}`),
		isPlaceholderFocusable: q(() => !(c(e.placeholder.value) || l(e.placeholder.value) || a(e.placeholder.value))),
		firstFocusableDate: q(() => {
			for (let t of r.value) {
				if (e.minValue.value && Tg(t.value, e.minValue.value)) continue;
				let n = wg(t.value), r = e.minValue.value && Lp(e.minValue.value, t.value) ? e.minValue.value.day : 1;
				for (let e = r; e <= n; e++) {
					let n = t.value.set({ day: e });
					if (!(c(n) || l(n))) return n;
				}
			}
		})
	};
}
//#endregion
//#region node_modules/reka-ui/dist/Calendar/CalendarRoot.js
var tS = { style: {
	border: "0px",
	clip: "rect(0px, 0px, 0px, 0px)",
	"clip-path": "inset(50%)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: "0px",
	position: "absolute",
	"white-space": "nowrap",
	width: "1px"
} }, nS = {
	role: "heading",
	"aria-level": "2"
}, [rS, iS] = /* @__PURE__ */ cp("CalendarRoot"), aS = /* @__PURE__ */ F({
	__name: "CalendarRoot",
	props: {
		defaultValue: {
			type: null,
			required: !1,
			default: void 0
		},
		defaultPlaceholder: {
			type: null,
			required: !1
		},
		placeholder: {
			type: null,
			required: !1,
			default: void 0
		},
		pagedNavigation: {
			type: Boolean,
			required: !1,
			default: !1
		},
		preventDeselect: {
			type: Boolean,
			required: !1,
			default: !1
		},
		weekStartsOn: {
			type: Number,
			required: !1
		},
		weekdayFormat: {
			type: String,
			required: !1,
			default: "narrow"
		},
		calendarLabel: {
			type: String,
			required: !1
		},
		fixedWeeks: {
			type: Boolean,
			required: !1,
			default: !1
		},
		maxValue: {
			type: null,
			required: !1
		},
		minValue: {
			type: null,
			required: !1
		},
		locale: {
			type: String,
			required: !1
		},
		numberOfMonths: {
			type: Number,
			required: !1,
			default: 1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		initialFocus: {
			type: Boolean,
			required: !1,
			default: !1
		},
		isDateDisabled: {
			type: Function,
			required: !1,
			default: void 0
		},
		isDateUnavailable: {
			type: Function,
			required: !1,
			default: void 0
		},
		dir: {
			type: String,
			required: !1
		},
		nextPage: {
			type: Function,
			required: !1
		},
		prevPage: {
			type: Function,
			required: !1
		},
		modelValue: {
			type: null,
			required: !1
		},
		multiple: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disableDaysOutsideCurrentView: {
			type: Boolean,
			required: !1,
			default: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "div"
		}
	},
	emits: ["update:modelValue", "update:placeholder"],
	setup(e, { emit: t }) {
		let n = e, r = t, { disabled: i, readonly: a, initialFocus: o, pagedNavigation: s, weekdayFormat: c, fixedWeeks: l, multiple: u, minValue: d, maxValue: f, numberOfMonths: p, preventDeselect: m, isDateDisabled: h, isDateUnavailable: g, calendarLabel: _, defaultValue: v, nextPage: y, prevPage: b, dir: x, locale: S, disableDaysOutsideCurrentView: C } = /* @__PURE__ */ xn(n), { primitiveElement: w, currentElement: T } = T_(), ee = m_(S), E = zg(x), te = q(() => n.weekStartsOn ?? Lg(ee.value)), ne = Ef(n, "modelValue", r, {
			defaultValue: v.value,
			passive: n.modelValue === void 0
		}), re = kg({
			defaultPlaceholder: n.placeholder,
			defaultValue: ne.value,
			locale: n.locale
		}), D = Ef(n, "placeholder", r, {
			defaultValue: n.defaultPlaceholder ?? re.copy(),
			passive: n.placeholder === void 0
		});
		function ie(e) {
			D.value = e.copy();
		}
		let { fullCalendarLabel: ae, headingValue: oe, isDateDisabled: se, isDateUnavailable: O, isNextButtonDisabled: ce, isPrevButtonDisabled: le, weekdays: ue, isOutsideVisibleView: de, nextPage: fe, prevPage: pe, formatter: me, grid: he, isPlaceholderFocusable: ge, firstFocusableDate: _e } = eS({
			locale: ee,
			placeholder: D,
			weekStartsOn: te,
			fixedWeeks: l,
			numberOfMonths: p,
			minValue: d,
			maxValue: f,
			disabled: i,
			weekdayFormat: c,
			pagedNavigation: s,
			isDateDisabled: h.value,
			isDateUnavailable: g.value,
			calendarLabel: _,
			nextPage: y,
			prevPage: b
		}), { isInvalid: ve, isDateSelected: ye, hasSelectedDate: k, isSelectedDateDisabled: A } = Yx({
			date: ne,
			isDateDisabled: se,
			isDateUnavailable: O
		});
		P(ne, (e) => {
			if (Array.isArray(e) && e.length) {
				let t = e.at(-1);
				t && !Rp(D.value, t) && ie(t);
			} else !Array.isArray(e) && e && !Rp(D.value, e) && ie(e);
		});
		function be(e) {
			if (!u.value) {
				if (!ne.value) {
					ne.value = e.copy();
					return;
				}
				!m.value && Rp(ne.value, e) ? (D.value = e.copy(), ne.value = void 0) : ne.value = e.copy();
			} else if (!ne.value) ne.value = [e.copy()];
			else if (Array.isArray(ne.value)) {
				if (ne.value.findIndex((t) => Ip(t, e)) === -1) ne.value = [...ne.value, e];
				else if (!m.value) {
					let t = ne.value.filter((t) => !Ip(t, e));
					if (!t.length) {
						D.value = e.copy(), ne.value = void 0;
						return;
					}
					ne.value = t.map((e) => e.copy());
				}
			}
		}
		return I(() => {
			o.value && jg(T.value);
		}), iS({
			isDateUnavailable: O,
			dir: E,
			isDateDisabled: se,
			locale: ee,
			formatter: me,
			modelValue: ne,
			placeholder: D,
			disabled: i,
			initialFocus: o,
			pagedNavigation: s,
			grid: he,
			weekDays: ue,
			weekStartsOn: te,
			weekdayFormat: c,
			fixedWeeks: l,
			multiple: u,
			numberOfMonths: p,
			readonly: a,
			preventDeselect: m,
			fullCalendarLabel: ae,
			headingValue: oe,
			isInvalid: ve,
			isDateSelected: ye,
			isNextButtonDisabled: ce,
			isPrevButtonDisabled: le,
			isOutsideVisibleView: de,
			nextPage: fe,
			prevPage: pe,
			parentElement: T,
			onPlaceholderChange: ie,
			onDateChange: be,
			disableDaysOutsideCurrentView: C,
			minValue: d,
			maxValue: f,
			isPlaceholderFocusable: ge,
			firstFocusableDate: _e,
			hasSelectedDate: k,
			isSelectedDateDisabled: A
		}), (e, t) => (z(), V(M(X), {
			ref_key: "primitiveElement",
			ref: w,
			as: e.as,
			"as-child": e.asChild,
			"aria-label": M(ae),
			"data-readonly": M(a) ? "" : void 0,
			"data-disabled": M(i) ? "" : void 0,
			"data-invalid": M(ve) ? "" : void 0,
			dir: M(E)
		}, {
			default: N(() => [L(e.$slots, "default", {
				date: M(D),
				grid: M(he),
				weekDays: M(ue),
				weekStartsOn: te.value,
				locale: M(ee),
				fixedWeeks: M(l),
				modelValue: M(ne)
			}), H("div", tS, [H("div", nS, De(M(ae)), 1)])]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"aria-label",
			"data-readonly",
			"data-disabled",
			"data-invalid",
			"dir"
		]));
	}
}), oS = /* @__PURE__ */ F({
	__name: "CalendarCell",
	props: {
		date: {
			type: null,
			required: !0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "td"
		}
	},
	setup(e) {
		let t = rS();
		return (e, n) => (z(), V(M(X), {
			as: e.as,
			"as-child": e.asChild,
			role: "gridcell",
			"aria-selected": M(t).isDateSelected(e.date) ? !0 : void 0,
			"aria-disabled": M(t).isDateDisabled(e.date) || M(t).isDateUnavailable?.(e.date) || M(t).disableDaysOutsideCurrentView.value,
			"data-disabled": M(t).isDateDisabled(e.date) || M(t).disableDaysOutsideCurrentView.value ? "" : void 0
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"aria-selected",
			"aria-disabled",
			"data-disabled"
		]));
	}
}), sS = /* @__PURE__ */ F({
	__name: "CalendarCellTrigger",
	props: {
		day: {
			type: null,
			required: !0
		},
		month: {
			type: null,
			required: !0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "div"
		}
	},
	setup(e) {
		let t = e, n = p_(), r = rS(), { primitiveElement: i, currentElement: a } = T_(), o = q(() => t.day.day.toLocaleString(r.locale.value)), s = q(() => r.formatter.custom(bg(t.day), {
			weekday: "long",
			month: "long",
			day: "numeric",
			year: "numeric"
		})), c = q(() => r.isDateUnavailable?.(t.day) ?? !1), l = q(() => Vp(t.day, Zp())), u = q(() => !Lp(t.day, t.month)), d = q(() => r.isOutsideVisibleView(t.day)), f = q(() => r.isDateDisabled(t.day) || r.disableDaysOutsideCurrentView.value && u.value), p = q(() => u.value || f.value ? !1 : !r.disabled.value && r.isPlaceholderFocusable.value && Ip(t.day, r.placeholder.value) ? !0 : (!r.hasSelectedDate.value || r.isSelectedDateDisabled.value) && !r.isPlaceholderFocusable.value ? r.firstFocusableDate.value && Ip(t.day, r.firstFocusableDate.value) : !1), m = q(() => r.isDateSelected(t.day));
		function h(e) {
			r.readonly.value || r.isDateDisabled(e) || r.isDateUnavailable?.(e) || r.onDateChange(e);
		}
		function g() {
			f.value || h(t.day);
		}
		function _(e) {
			if (f.value) return;
			e.preventDefault(), e.stopPropagation();
			let i = r.parentElement.value, a = r.dir.value === "rtl" ? -1 : 1;
			switch (e.code) {
				case n.ARROW_RIGHT:
					o(t.day, a);
					break;
				case n.ARROW_LEFT:
					o(t.day, -a);
					break;
				case n.ARROW_UP:
					o(t.day, -7);
					break;
				case n.ARROW_DOWN:
					o(t.day, 7);
					break;
				case n.ENTER:
				case n.SPACE_CODE: h(t.day);
			}
			function o(e, t) {
				let n = e.add({ days: t });
				if (r.minValue.value && n.compare(r.minValue.value) < 0 || r.maxValue.value && n.compare(r.maxValue.value) > 0) return;
				let a = i.querySelector(`[data-value='${n.toString()}']:not([data-outside-view])`);
				if (!a) {
					if (t > 0) {
						if (r.isNextButtonDisabled()) return;
						r.nextPage();
					} else {
						if (r.isPrevButtonDisabled()) return;
						r.prevPage();
					}
					er(() => {
						o(e, t);
					});
					return;
				}
				if (a && a.hasAttribute("data-disabled")) return o(n, t);
				r.onPlaceholderChange(n), a?.focus();
			}
		}
		return (e, n) => (z(), V(M(X), {
			ref_key: "primitiveElement",
			ref: i,
			as: t.as,
			"as-child": t.asChild,
			role: "button",
			"aria-label": s.value,
			"data-reka-calendar-cell-trigger": "",
			"aria-disabled": f.value || c.value ? !0 : void 0,
			"data-selected": m.value ? !0 : void 0,
			"data-value": e.day.toString(),
			"data-disabled": f.value ? "" : void 0,
			"data-unavailable": c.value ? "" : void 0,
			"data-today": l.value ? "" : void 0,
			"data-outside-view": u.value ? "" : void 0,
			"data-outside-visible-view": d.value ? "" : void 0,
			"data-focused": p.value ? "" : void 0,
			tabindex: p.value ? 0 : u.value || f.value ? void 0 : -1,
			onClick: g,
			onKeydown: [Ql(_, [
				"up",
				"down",
				"left",
				"right",
				"space",
				"enter"
			]), n[0] ||= Ql(Xl(() => {}, ["prevent"]), ["enter"])]
		}, {
			default: N(() => [L(e.$slots, "default", {
				dayValue: o.value,
				disabled: f.value,
				today: l.value,
				selected: m.value,
				outsideView: u.value,
				outsideVisibleView: d.value,
				unavailable: c.value
			}, () => [_s(De(o.value), 1)])]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"aria-label",
			"aria-disabled",
			"data-selected",
			"data-value",
			"data-disabled",
			"data-unavailable",
			"data-today",
			"data-outside-view",
			"data-outside-visible-view",
			"data-focused",
			"tabindex"
		]));
	}
}), cS = /* @__PURE__ */ F({
	__name: "CalendarGrid",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "table"
		}
	},
	setup(e) {
		let t = e, n = rS(), r = q(() => n.disabled.value ? !0 : void 0), i = q(() => n.readonly.value ? !0 : void 0);
		return (e, n) => (z(), V(M(X), K(t, {
			tabindex: "-1",
			role: "application",
			"aria-readonly": i.value,
			"aria-disabled": r.value,
			"data-readonly": i.value && "",
			"data-disabled": r.value && ""
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, [
			"aria-readonly",
			"aria-disabled",
			"data-readonly",
			"data-disabled"
		]));
	}
}), lS = /* @__PURE__ */ F({
	__name: "CalendarGridBody",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "tbody"
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(X), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), uS = /* @__PURE__ */ F({
	__name: "CalendarGridHead",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "thead"
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(X), K(t, { "aria-hidden": "true" }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), dS = /* @__PURE__ */ F({
	__name: "CalendarGridRow",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "tr"
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(X), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), fS = /* @__PURE__ */ F({
	__name: "CalendarHeadCell",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "th"
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(X), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), pS = /* @__PURE__ */ F({
	__name: "CalendarHeader",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "div"
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(X), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), mS = /* @__PURE__ */ F({
	__name: "CalendarHeading",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "div"
		}
	},
	setup(e) {
		let t = e, n = rS();
		return (e, r) => (z(), V(M(X), K(t, { "data-disabled": M(n).disabled.value ? "" : void 0 }), {
			default: N(() => [L(e.$slots, "default", { headingValue: M(n).headingValue.value }, () => [_s(De(M(n).headingValue.value), 1)])]),
			_: 3
		}, 16, ["data-disabled"]));
	}
}), hS = /* @__PURE__ */ F({
	__name: "CalendarNext",
	props: {
		nextPage: {
			type: Function,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e, n = q(() => r.disabled.value || r.isNextButtonDisabled(t.nextPage)), r = rS();
		function i() {
			n.value || r.nextPage(t.nextPage);
		}
		return (e, r) => (z(), V(M(X), {
			as: t.as,
			"as-child": t.asChild,
			"aria-label": "Next page",
			type: t.as === "button" ? "button" : void 0,
			"aria-disabled": n.value || void 0,
			"data-disabled": n.value || void 0,
			disabled: n.value,
			onClick: i
		}, {
			default: N(() => [L(e.$slots, "default", { disabled: n.value }, () => [r[0] ||= _s(" Next page ")])]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"type",
			"aria-disabled",
			"data-disabled",
			"disabled"
		]));
	}
}), gS = /* @__PURE__ */ F({
	__name: "CalendarPrev",
	props: {
		prevPage: {
			type: Function,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e, n = q(() => r.disabled.value || r.isPrevButtonDisabled(t.prevPage)), r = rS();
		function i() {
			n.value || r.prevPage(t.prevPage);
		}
		return (e, r) => (z(), V(M(X), {
			"aria-label": "Previous page",
			as: t.as,
			"as-child": t.asChild,
			type: t.as === "button" ? "button" : void 0,
			"aria-disabled": n.value || void 0,
			"data-disabled": n.value || void 0,
			disabled: n.value,
			onClick: i
		}, {
			default: N(() => [L(e.$slots, "default", { disabled: n.value }, () => [r[0] ||= _s(" Prev page ")])]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"type",
			"aria-disabled",
			"data-disabled",
			"disabled"
		]));
	}
}), [_S, vS] = /* @__PURE__ */ cp("RovingFocusGroup"), yS = /* @__PURE__ */ F({
	__name: "RovingFocusGroup",
	props: {
		orientation: {
			type: String,
			required: !1,
			default: void 0
		},
		dir: {
			type: String,
			required: !1
		},
		loop: {
			type: Boolean,
			required: !1,
			default: !1
		},
		currentTabStopId: {
			type: [String, null],
			required: !1
		},
		defaultCurrentTabStopId: {
			type: String,
			required: !1
		},
		preventScrollOnEntryFocus: {
			type: Boolean,
			required: !1,
			default: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["entryFocus", "update:currentTabStopId"],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, { loop: a, orientation: o, dir: s } = /* @__PURE__ */ xn(r), c = zg(s), l = Ef(r, "currentTabStopId", i, {
			defaultValue: r.defaultCurrentTabStopId,
			passive: r.currentTabStopId === void 0
		}), u = /* @__PURE__ */ j(!1), d = /* @__PURE__ */ j(!1), f = /* @__PURE__ */ j(0), { getItems: p, CollectionSlot: m } = Jv({ isProvider: !0 });
		function h(e) {
			let t = !d.value;
			if (e.currentTarget && e.target === e.currentTarget && t && !u.value) {
				let t = new CustomEvent(ey, ty);
				if (e.currentTarget.dispatchEvent(t), i("entryFocus", t), !t.defaultPrevented) {
					let e = p().map((e) => e.ref).filter((e) => e.dataset.disabled !== "");
					ay([
						e.find((e) => e.getAttribute("data-active") === ""),
						e.find((e) => e.getAttribute("data-highlighted") === ""),
						e.find((e) => e.id === l.value),
						...e
					].filter(Boolean), r.preventScrollOnEntryFocus);
				}
			}
			d.value = !1;
		}
		function g() {
			setTimeout(() => {
				d.value = !1;
			}, 1);
		}
		return t({ getItems: p }), vS({
			loop: a,
			dir: c,
			orientation: o,
			currentTabStopId: l,
			onItemFocus: (e) => {
				l.value = e;
			},
			onItemShiftTab: () => {
				u.value = !0;
			},
			onFocusableItemAdd: () => {
				f.value++;
			},
			onFocusableItemRemove: () => {
				f.value--;
			}
		}), (e, t) => (z(), V(M(m), null, {
			default: N(() => [U(M(X), {
				tabindex: u.value || f.value === 0 ? -1 : 0,
				"data-orientation": M(o),
				as: e.as,
				"as-child": e.asChild,
				dir: M(c),
				style: { outline: "none" },
				onMousedown: t[0] ||= (e) => d.value = !0,
				onMouseup: g,
				onFocus: h,
				onBlur: t[1] ||= (e) => u.value = !1
			}, {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 8, [
				"tabindex",
				"data-orientation",
				"as",
				"as-child",
				"dir"
			])]),
			_: 3
		}));
	}
}), bS = /* @__PURE__ */ F({
	__name: "RovingFocusItem",
	props: {
		tabStopId: {
			type: String,
			required: !1
		},
		focusable: {
			type: Boolean,
			required: !1,
			default: !0
		},
		active: {
			type: Boolean,
			required: !1
		},
		allowShiftKey: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		let t = e, n = _S(), r = f_(), i = q(() => t.tabStopId || r), a = q(() => n.currentTabStopId.value === i.value), { getItems: o, CollectionItem: s } = Jv();
		I(() => {
			t.focusable && n.onFocusableItemAdd();
		}), Yi(() => {
			t.focusable && n.onFocusableItemRemove();
		});
		function c(e) {
			if (e.key === "Tab" && e.shiftKey) {
				n.onItemShiftTab();
				return;
			}
			if (e.target !== e.currentTarget) return;
			let r = iy(e, n.orientation.value, n.dir.value);
			if (r !== void 0) {
				if (e.metaKey || e.ctrlKey || e.altKey || !t.allowShiftKey && e.shiftKey) return;
				e.preventDefault();
				let i = [...o().map((e) => e.ref).filter((e) => e.dataset.disabled !== "")];
				if (r === "last") i.reverse();
				else if (r === "prev" || r === "next") {
					r === "prev" && i.reverse();
					let t = i.indexOf(e.currentTarget);
					i = n.loop.value ? oy(i, t + 1) : i.slice(t + 1);
				}
				er(() => ay(i));
			}
		}
		return (e, t) => (z(), V(M(s), null, {
			default: N(() => [U(M(X), {
				tabindex: a.value ? 0 : -1,
				"data-orientation": M(n).orientation.value,
				"data-active": e.active ? "" : void 0,
				"data-disabled": e.focusable ? void 0 : "",
				as: e.as,
				"as-child": e.asChild,
				onMousedown: t[0] ||= (t) => {
					e.focusable ? M(n).onItemFocus(i.value) : t.preventDefault();
				},
				onFocus: t[1] ||= (e) => M(n).onItemFocus(i.value),
				onKeydown: c
			}, {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 8, [
				"tabindex",
				"data-orientation",
				"data-active",
				"data-disabled",
				"as",
				"as-child"
			])]),
			_: 3
		}));
	}
}), [xS, SS] = /* @__PURE__ */ cp("CheckboxGroupRoot");
//#endregion
//#region node_modules/reka-ui/dist/Checkbox/utils.js
function CS(e) {
	return e === "indeterminate";
}
function wS(e) {
	return CS(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
//#endregion
//#region node_modules/reka-ui/dist/Checkbox/CheckboxRoot.js
var [TS, ES] = /* @__PURE__ */ cp("CheckboxRoot"), DS = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "CheckboxRoot",
	props: {
		defaultValue: {
			type: null,
			required: !1
		},
		modelValue: {
			type: null,
			required: !1,
			default: void 0
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		value: {
			type: null,
			required: !1,
			default: "on"
		},
		id: {
			type: String,
			required: !1
		},
		trueValue: {
			type: null,
			required: !1,
			default: () => !0
		},
		falseValue: {
			type: null,
			required: !1,
			default: () => !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		},
		name: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, { forwardRef: i, currentElement: a } = Y(), o = xS(null), s = Ef(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? n.falseValue,
			passive: n.modelValue === void 0
		}), c = q(() => o?.disabled.value || n.disabled), l = q(() => tp(s.value, n.trueValue)), u = q(() => dp(o?.modelValue.value) ? s.value === "indeterminate" ? "indeterminate" : l.value : fp(o.modelValue.value, n.value));
		function d() {
			if (dp(o?.modelValue.value)) s.value === "indeterminate" ? s.value = n.trueValue : s.value = l.value ? n.falseValue : n.trueValue;
			else {
				let e = [...o.modelValue.value || []];
				if (fp(e, n.value)) {
					let t = e.findIndex((e) => tp(e, n.value));
					e.splice(t, 1);
				} else e.push(n.value);
				o.modelValue.value = e;
			}
		}
		let f = Gg(a), p = q(() => n.id && a.value ? document.querySelector(`[for="${n.id}"]`)?.innerText : void 0);
		return ES({
			disabled: c,
			state: u
		}), (e, t) => (z(), V(ia(M(o)?.rovingFocus.value ? M(bS) : M(X)), K(e.$attrs, {
			id: e.id,
			ref: M(i),
			role: "checkbox",
			"as-child": e.asChild,
			as: e.as,
			type: e.as === "button" ? "button" : void 0,
			"aria-checked": M(CS)(u.value) ? "mixed" : u.value,
			"aria-required": e.required,
			"aria-label": e.$attrs["aria-label"] || p.value,
			"data-state": M(wS)(u.value),
			"data-disabled": c.value ? "" : void 0,
			disabled: c.value,
			focusable: M(o)?.rovingFocus.value ? !c.value : void 0,
			onKeydown: Ql(Xl(() => {}, ["prevent"]), ["enter"]),
			onClick: d
		}), {
			default: N(() => [L(e.$slots, "default", {
				modelValue: M(s),
				state: u.value
			}), M(f) && e.name && !M(o) ? (z(), V(M(Zv), {
				key: 0,
				type: "checkbox",
				checked: !!u.value,
				name: e.name,
				value: e.value,
				disabled: c.value,
				required: e.required
			}, null, 8, [
				"checked",
				"name",
				"value",
				"disabled",
				"required"
			])) : G("v-if", !0)]),
			_: 3
		}, 16, [
			"id",
			"as-child",
			"as",
			"type",
			"aria-checked",
			"aria-required",
			"aria-label",
			"data-state",
			"data-disabled",
			"disabled",
			"focusable",
			"onKeydown"
		]));
	}
}), OS = /* @__PURE__ */ F({
	__name: "CheckboxIndicator",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		let { forwardRef: t } = Y(), n = TS();
		return (e, r) => (z(), V(M(S_), { present: e.forceMount || M(CS)(M(n).state.value) || M(n).state.value === !0 }, {
			default: N(() => [U(M(X), K({
				ref: M(t),
				"data-state": M(wS)(M(n).state.value),
				"data-disabled": M(n).disabled.value ? "" : void 0,
				style: { pointerEvents: "none" },
				"as-child": e.asChild,
				as: e.as
			}, e.$attrs), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, [
				"data-state",
				"data-disabled",
				"as-child",
				"as"
			])]),
			_: 3
		}, 8, ["present"]));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Slider/utils.js
function kS(e = [], t, n) {
	let r = [...e];
	return r[n] = t, r.sort((e, t) => e - t);
}
function AS(e, t, n) {
	return ap(100 / (n - t) * (e - t), 0, 100);
}
function jS(e, t) {
	if (t > 2) return `Value ${e + 1} of ${t}`;
	if (t === 2) return ["Minimum", "Maximum"][e];
}
function MS(e, t) {
	if (e.length === 1) return 0;
	let n = e.map((e) => Math.abs(e - t)), r = Math.min(...n);
	return n.indexOf(r);
}
function NS(e, t, n) {
	let r = e / 2;
	return (r - IS([0, 50], [0, r])(t) * n) * n;
}
function PS(e) {
	return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function FS(e, t) {
	if (t > 0) {
		let n = PS(e);
		return Math.min(...n) >= t;
	}
	return !0;
}
function IS(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
function LS(e) {
	return (String(e).split(".")[1] || "").length;
}
function RS(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
var zS = ["PageUp", "PageDown"], BS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], VS = {
	"from-left": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-right": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowRight"
	],
	"from-bottom": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-top": [
		"Home",
		"PageUp",
		"ArrowUp",
		"ArrowLeft"
	]
}, [HS, US] = /* @__PURE__ */ cp(["SliderVertical", "SliderHorizontal"]), WS = /* @__PURE__ */ F({
	__name: "SliderHorizontal",
	props: {
		dir: {
			type: String,
			required: !1
		},
		min: {
			type: Number,
			required: !0
		},
		max: {
			type: Number,
			required: !0
		},
		inverted: {
			type: Boolean,
			required: !0
		}
	},
	emits: [
		"slideEnd",
		"slideStart",
		"slideMove",
		"homeKeyDown",
		"endKeyDown",
		"stepKeyDown"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, { max: i, min: a, dir: o, inverted: s } = /* @__PURE__ */ xn(n), { forwardRef: c, currentElement: l } = Y(), u = KS(), d = /* @__PURE__ */ j(), f = /* @__PURE__ */ j(), p = q(() => o?.value !== "rtl" && !s.value || o?.value !== "ltr" && s.value);
		function m(e, t) {
			let n = f.value || l.value.getBoundingClientRect(), r = [...u.thumbElements.value][u.valueIndexToChangeRef.value], o = u.thumbAlignment.value === "contain" ? r.clientWidth : 0;
			!d.value && !t && u.thumbAlignment.value === "contain" && (d.value = e.clientX - r.getBoundingClientRect().left);
			let s = IS([0, n.width - o], p.value ? [a.value, i.value] : [i.value, a.value]);
			return f.value = n, s(t ? e.clientX - n.left - o / 2 : e.clientX - n.left - (d.value ?? 0));
		}
		return US({
			startEdge: q(() => p.value ? "left" : "right"),
			endEdge: q(() => p.value ? "right" : "left"),
			direction: q(() => p.value ? 1 : -1),
			size: "width"
		}), (e, t) => (z(), V(YS, {
			ref: M(c),
			dir: M(o),
			"data-orientation": "horizontal",
			style: he({ "--reka-slider-thumb-transform": !p.value && M(u).thumbAlignment.value === "overflow" ? "translateX(50%)" : "translateX(-50%)" }),
			onSlideStart: t[0] ||= (e) => {
				r("slideStart", m(e, !0));
			},
			onSlideMove: t[1] ||= (e) => {
				r("slideMove", m(e));
			},
			onSlideEnd: t[2] ||= () => {
				f.value = void 0, d.value = void 0, r("slideEnd");
			},
			onStepKeyDown: t[3] ||= (e) => {
				let t = p.value ? "from-left" : "from-right";
				r("stepKeyDown", e, M(VS)[t].includes(e.key) ? -1 : 1);
			},
			onEndKeyDown: t[4] ||= (e) => r("endKeyDown", e),
			onHomeKeyDown: t[5] ||= (e) => r("homeKeyDown", e)
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, ["dir", "style"]));
	}
}), GS = /* @__PURE__ */ F({
	__name: "SliderVertical",
	props: {
		min: {
			type: Number,
			required: !0
		},
		max: {
			type: Number,
			required: !0
		},
		inverted: {
			type: Boolean,
			required: !0
		}
	},
	emits: [
		"slideEnd",
		"slideStart",
		"slideMove",
		"homeKeyDown",
		"endKeyDown",
		"stepKeyDown"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, { max: i, min: a, inverted: o } = /* @__PURE__ */ xn(n), s = KS(), { forwardRef: c, currentElement: l } = Y(), u = /* @__PURE__ */ j(), d = /* @__PURE__ */ j(), f = q(() => !o.value);
		function p(e, t) {
			let n = d.value || l.value.getBoundingClientRect(), r = [...s.thumbElements.value][s.valueIndexToChangeRef.value], o = s.thumbAlignment.value === "contain" ? r.clientHeight : 0;
			!u.value && !t && s.thumbAlignment.value === "contain" && (u.value = e.clientY - r.getBoundingClientRect().top);
			let c = IS([0, n.height - o], f.value ? [i.value, a.value] : [a.value, i.value]), p = t ? e.clientY - n.top - o / 2 : e.clientY - n.top - (u.value ?? 0);
			return d.value = n, c(p);
		}
		return US({
			startEdge: q(() => f.value ? "bottom" : "top"),
			endEdge: q(() => f.value ? "top" : "bottom"),
			direction: q(() => f.value ? 1 : -1),
			size: "height"
		}), (e, t) => (z(), V(YS, {
			ref: M(c),
			"data-orientation": "vertical",
			style: he({ "--reka-slider-thumb-transform": !f.value && M(s).thumbAlignment.value === "overflow" ? "translateY(-50%)" : "translateY(50%)" }),
			onSlideStart: t[0] ||= (e) => {
				r("slideStart", p(e, !0));
			},
			onSlideMove: t[1] ||= (e) => {
				r("slideMove", p(e));
			},
			onSlideEnd: t[2] ||= () => {
				d.value = void 0, u.value = void 0, r("slideEnd");
			},
			onStepKeyDown: t[3] ||= (e) => {
				let t = f.value ? "from-bottom" : "from-top";
				r("stepKeyDown", e, M(VS)[t].includes(e.key) ? -1 : 1);
			},
			onEndKeyDown: t[4] ||= (e) => r("endKeyDown", e),
			onHomeKeyDown: t[5] ||= (e) => r("homeKeyDown", e)
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, ["style"]));
	}
}), [KS, qS] = /* @__PURE__ */ cp("SliderRoot"), JS = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "SliderRoot",
	props: {
		defaultValue: {
			type: Array,
			required: !1,
			default: () => [0]
		},
		modelValue: {
			type: [Array, null],
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		orientation: {
			type: String,
			required: !1,
			default: "horizontal"
		},
		dir: {
			type: String,
			required: !1
		},
		inverted: {
			type: Boolean,
			required: !1,
			default: !1
		},
		min: {
			type: Number,
			required: !1,
			default: 0
		},
		max: {
			type: Number,
			required: !1,
			default: 100
		},
		step: {
			type: Number,
			required: !1,
			default: 1
		},
		minStepsBetweenThumbs: {
			type: Number,
			required: !1,
			default: 0
		},
		thumbAlignment: {
			type: String,
			required: !1,
			default: "contain"
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		},
		name: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		}
	},
	emits: ["update:modelValue", "valueCommit"],
	setup(e, { emit: t }) {
		let n = e, r = t, { min: i, max: a, step: o, minStepsBetweenThumbs: s, orientation: c, disabled: l, thumbAlignment: u, dir: d } = /* @__PURE__ */ xn(n), f = zg(d), { forwardRef: p, currentElement: m } = Y(), h = Gg(m), { CollectionSlot: g } = Jv({ isProvider: !0 }), _ = Ef(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: n.modelValue === void 0
		}), v = q(() => Array.isArray(_.value) ? [..._.value] : []), y = /* @__PURE__ */ j(0), b = /* @__PURE__ */ j(v.value);
		function x(e) {
			w(e, MS(v.value, e));
		}
		function S(e) {
			w(e, y.value);
		}
		function C() {
			let e = b.value[y.value];
			v.value[y.value] !== e && r("valueCommit", /* @__PURE__ */ sn(v.value));
		}
		function w(e, t, { commit: n } = { commit: !1 }) {
			let c = LS(o.value), l = ap(RS(Math.round((e - i.value) / o.value) * o.value + i.value, c), i.value, a.value), u = kS(v.value, l, t);
			if (FS(u, s.value * o.value)) {
				y.value = u.indexOf(l);
				let e = String(u) !== String(_.value);
				e && n && r("valueCommit", u), e && (T.value[y.value]?.focus(), _.value = u);
			}
		}
		let T = /* @__PURE__ */ j([]);
		return qS({
			modelValue: _,
			currentModelValue: v,
			valueIndexToChangeRef: y,
			thumbElements: T,
			orientation: c,
			min: i,
			max: a,
			disabled: l,
			thumbAlignment: u
		}), (e, t) => (z(), V(M(g), null, {
			default: N(() => [(z(), V(ia(M(c) === "horizontal" ? WS : GS), K(e.$attrs, {
				ref: M(p),
				"as-child": e.asChild,
				as: e.as,
				min: M(i),
				max: M(a),
				dir: M(f),
				inverted: e.inverted,
				"aria-disabled": M(l),
				"data-disabled": M(l) ? "" : void 0,
				onPointerdown: t[0] ||= () => {
					M(l) || (b.value = v.value);
				},
				onSlideStart: t[1] ||= (e) => !M(l) && x(e),
				onSlideMove: t[2] ||= (e) => !M(l) && S(e),
				onSlideEnd: t[3] ||= (e) => !M(l) && C(),
				onHomeKeyDown: t[4] ||= (e) => !M(l) && w(M(i), 0, { commit: !0 }),
				onEndKeyDown: t[5] ||= (e) => !M(l) && w(M(a), v.value.length - 1, { commit: !0 }),
				onStepKeyDown: t[6] ||= (e, t) => {
					if (!M(l)) {
						let n = M(zS).includes(e.key) || e.shiftKey && M(BS).includes(e.key) ? 10 : 1, r = y.value, i = v.value[r];
						w(i + M(o) * n * t, r, { commit: !0 });
					}
				}
			}), {
				default: N(() => [L(e.$slots, "default", { modelValue: M(_) }), M(h) && e.name ? (z(), V(M(Zv), {
					key: 0,
					type: "number",
					value: M(_),
					name: e.name,
					required: e.required,
					disabled: M(l),
					step: M(o)
				}, null, 8, [
					"value",
					"name",
					"required",
					"disabled",
					"step"
				])) : G("v-if", !0)]),
				_: 3
			}, 16, [
				"as-child",
				"as",
				"min",
				"max",
				"dir",
				"inverted",
				"aria-disabled",
				"data-disabled"
			]))]),
			_: 3
		}));
	}
}), YS = /* @__PURE__ */ F({
	__name: "SliderImpl",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	emits: [
		"slideStart",
		"slideMove",
		"slideEnd",
		"homeKeyDown",
		"endKeyDown",
		"stepKeyDown"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = KS();
		return (e, t) => (z(), V(M(X), K({ "data-slider-impl": "" }, n, {
			onKeydown: t[0] ||= (e) => {
				e.key === "Home" ? (r("homeKeyDown", e), e.preventDefault()) : e.key === "End" ? (r("endKeyDown", e), e.preventDefault()) : M(zS).concat(M(BS)).includes(e.key) && (r("stepKeyDown", e), e.preventDefault());
			},
			onPointerdown: t[1] ||= (e) => {
				let t = e.target;
				t.setPointerCapture(e.pointerId), e.preventDefault(), M(i).thumbElements.value.includes(t) ? t.focus() : r("slideStart", e);
			},
			onPointermove: t[2] ||= (e) => {
				e.target.hasPointerCapture(e.pointerId) && r("slideMove", e);
			},
			onPointerup: t[3] ||= (e) => {
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), r("slideEnd", e));
			}
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), XS = /* @__PURE__ */ F({
	__name: "SliderRange",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		let t = KS(), n = HS();
		Y();
		let r = q(() => t.currentModelValue.value.map((e) => AS(e, t.min.value, t.max.value))), i = q(() => t.currentModelValue.value.length > 1 ? Math.min(...r.value) : 0), a = q(() => 100 - Math.max(...r.value, 0));
		return (e, r) => (z(), V(M(X), {
			"data-disabled": M(t).disabled.value ? "" : void 0,
			"data-orientation": M(t).orientation.value,
			"as-child": e.asChild,
			as: e.as,
			style: he({
				[M(n).startEdge.value]: `${i.value}%`,
				[M(n).endEdge.value]: `${a.value}%`
			})
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"data-disabled",
			"data-orientation",
			"as-child",
			"as",
			"style"
		]));
	}
}), ZS = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "SliderThumbImpl",
	props: {
		index: {
			type: Number,
			required: !0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = KS(), r = HS(), { forwardRef: i, currentElement: a } = Y(), { CollectionItem: o } = Jv(), s = q(() => n.modelValue?.value?.[t.index]), c = q(() => s.value === void 0 ? 0 : AS(s.value, n.min.value ?? 0, n.max.value ?? 100)), l = q(() => jS(t.index, n.modelValue?.value?.length ?? 0)), u = h_(a), d = q(() => u[r.size].value), f = q(() => n.thumbAlignment.value === "overflow" || !d.value ? 0 : NS(d.value, c.value, r.direction.value)), p = lf();
		return I(() => {
			n.thumbElements.value.push(a.value);
		}), Yi(() => {
			let e = n.thumbElements.value.findIndex((e) => e === a.value) ?? -1;
			n.thumbElements.value.splice(e, 1);
		}), (e, t) => (z(), V(M(o), null, {
			default: N(() => [U(M(X), K(e.$attrs, {
				ref: M(i),
				role: "slider",
				tabindex: M(n).disabled.value ? void 0 : 0,
				"aria-label": e.$attrs["aria-label"] || l.value,
				"data-disabled": M(n).disabled.value ? "" : void 0,
				"data-orientation": M(n).orientation.value,
				"aria-valuenow": s.value,
				"aria-valuemin": M(n).min.value,
				"aria-valuemax": M(n).max.value,
				"aria-orientation": M(n).orientation.value,
				"as-child": e.asChild,
				as: e.as,
				style: {
					transform: "var(--reka-slider-thumb-transform)",
					position: "absolute",
					[M(r).startEdge.value]: `calc(${c.value}% + ${f.value}px)`,
					display: !M(p) && s.value === void 0 ? "none" : void 0
				},
				onFocus: t[0] ||= () => {
					M(n).valueIndexToChangeRef.value = e.index;
				}
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, [
				"tabindex",
				"aria-label",
				"data-disabled",
				"data-orientation",
				"aria-valuenow",
				"aria-valuemin",
				"aria-valuemax",
				"aria-orientation",
				"as-child",
				"as",
				"style"
			])]),
			_: 3
		}));
	}
}), QS = /* @__PURE__ */ F({
	__name: "SliderThumb",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		let t = e, { getItems: n } = Jv(), { forwardRef: r, currentElement: i } = Y(), a = q(() => i.value ? n(!0).findIndex((e) => e.ref === i.value) : -1);
		return (e, n) => (z(), V(ZS, K({ ref: M(r) }, t, { index: a.value }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["index"]));
	}
}), $S = /* @__PURE__ */ F({
	__name: "SliderTrack",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		let t = KS();
		return Y(), (e, n) => (z(), V(M(X), {
			"as-child": e.asChild,
			as: e.as,
			"data-disabled": M(t).disabled.value ? "" : void 0,
			"data-orientation": M(t).orientation.value
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as-child",
			"as",
			"data-disabled",
			"data-orientation"
		]));
	}
}), eC = /* @__PURE__ */ F({
	__name: "MenuAnchor",
	props: {
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(Cy), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/shared/useIsUsingKeyboard.js
function tC() {
	let e = /* @__PURE__ */ j(!1);
	return I(() => {
		cf("keydown", () => {
			e.value = !0;
		}, {
			capture: !0,
			passive: !0
		}), cf(["pointerdown", "pointermove"], () => {
			e.value = !1;
		}, {
			capture: !0,
			passive: !0
		});
	}), e;
}
var nC = Ud(tC), [rC, iC] = /* @__PURE__ */ cp(["MenuRoot", "MenuSub"], "MenuContext"), [aC, oC] = /* @__PURE__ */ cp("MenuRoot"), sC = /* @__PURE__ */ F({
	__name: "MenuRoot",
	props: {
		open: {
			type: Boolean,
			required: !1,
			default: !1
		},
		dir: {
			type: String,
			required: !1
		},
		modal: {
			type: Boolean,
			required: !1,
			default: !0
		}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = e, r = t, { modal: i, dir: a } = /* @__PURE__ */ xn(n), o = zg(a), s = Ef(n, "open", r), c = /* @__PURE__ */ j(), l = nC();
		return iC({
			open: s,
			onOpenChange: (e) => {
				s.value = e;
			},
			content: c,
			onContentChange: (e) => {
				c.value = e;
			}
		}), oC({
			onClose: () => {
				s.value = !1;
			},
			isUsingKeyboardRef: l,
			dir: o,
			modal: i
		}), (e, t) => (z(), V(M(Sy), null, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}));
	}
}), [cC, lC] = /* @__PURE__ */ cp("MenuContent"), uC = /* @__PURE__ */ F({
	__name: "MenuContentImpl",
	props: /* @__PURE__ */ Oa({
		loop: {
			type: Boolean,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1
		},
		disableOutsideScroll: {
			type: Boolean,
			required: !1
		},
		trapFocus: {
			type: Boolean,
			required: !1
		},
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	}, { ...Fx }),
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus",
		"dismiss"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = rC(), a = aC(), { trapFocus: o, disableOutsidePointerEvents: s, loop: c } = /* @__PURE__ */ xn(n);
		Ug(), wp(s.value);
		let l = /* @__PURE__ */ j(""), u = /* @__PURE__ */ j(0), d = /* @__PURE__ */ j(0), f = /* @__PURE__ */ j(null), p = /* @__PURE__ */ j("right"), m = /* @__PURE__ */ j(0), h = /* @__PURE__ */ j(null), g = /* @__PURE__ */ j(), { forwardRef: _, currentElement: v } = Y(), { handleTypeaheadSearch: y } = __(), b = /* @__PURE__ */ j();
		function x(e) {
			let t = hp(e, b.value || lp(), v.value, {
				loop: c.value,
				arrowKeyOptions: "vertical",
				dir: a?.dir.value,
				focus: !1,
				attributeName: "[data-reka-collection-item]:not([data-disabled])"
			});
			t && (b.value = t, t.scrollIntoView({ block: "nearest" }));
		}
		function S() {
			b.value && b.value.click();
		}
		let C = /* @__PURE__ */ j(), w = /* @__PURE__ */ j();
		P(b, (e) => {
			w.value && (e === void 0 || e !== w.value.trigger.value) && (w.value.onOpenChange(!1), w.value = void 0);
		}), P(v, (e) => {
			i.onContentChange(e);
		}), Yi(() => {
			window.clearTimeout(u.value);
		});
		function T(e) {
			return p.value === f.value?.side && wv(e, f.value?.area);
		}
		async function ee(e) {
			r("openAutoFocus", e), !e.defaultPrevented && (e.preventDefault(), v.value?.focus({ preventScroll: !0 }));
		}
		function E(e) {
			if (e.defaultPrevented) return;
			let t = e.target, n = t.closest("[data-reka-menu-content]") === e.currentTarget, r = ["input", "textarea"].includes(t.tagName.toLowerCase()), i = e.ctrlKey || e.altKey || e.metaKey, o = e.key.length === 1, s = hp(e, lp(), v.value, {
				loop: c.value,
				arrowKeyOptions: "vertical",
				dir: a?.dir.value,
				focus: !0,
				attributeName: "[data-reka-collection-item]:not([data-disabled])"
			});
			if (s) return s?.focus();
			if (e.code === "Space") return;
			let l = g.value?.getItems() ?? [];
			if (n && (e.key === "Tab" && e.preventDefault(), !i && o && !r && y(e.key, l)), e.target !== v.value || !bv.includes(e.key)) return;
			e.preventDefault();
			let u = [...l.map((e) => e.ref)];
			yv.includes(e.key) && u.reverse(), Sv(u);
		}
		function te(e) {
			e?.currentTarget?.contains?.(e.target) || (window.clearTimeout(u.value), l.value = "");
		}
		function ne(e) {
			if (!Tv(e)) return;
			let t = e.target, n = m.value !== e.clientX;
			(e?.currentTarget)?.contains(t) && n && (p.value = e.clientX > m.value ? "right" : "left", m.value = e.clientX);
		}
		function re(e) {
			Tv(e) && C.value && C.value.focus();
		}
		return lC({
			onItemEnter: (e) => !!T(e),
			onItemLeave: (e) => T(e) ? !0 : (["INPUT", "TEXTAREA"].includes(lp()?.tagName || "") || v.value?.focus(), h.value = null, !1),
			onTriggerLeave: (e) => !!T(e),
			searchRef: l,
			highlightedElement: b,
			onKeydownNavigation: x,
			onKeydownEnter: S,
			filterElement: C,
			onFilterElementChange: (e) => {
				C.value = e;
			},
			activeSubmenuContext: w,
			pointerGraceTimerRef: d,
			onPointerGraceIntentChange: (e) => {
				f.value = e;
			}
		}), (e, t) => (z(), V(M(hv), {
			"as-child": "",
			trapped: M(o),
			onMountAutoFocus: ee,
			onUnmountAutoFocus: t[7] ||= (e) => r("closeAutoFocus", e)
		}, {
			default: N(() => [U(M(tv), {
				"as-child": "",
				"disable-outside-pointer-events": M(s),
				onEscapeKeyDown: t[2] ||= (e) => r("escapeKeyDown", e),
				onPointerDownOutside: t[3] ||= (e) => r("pointerDownOutside", e),
				onFocusOutside: t[4] ||= (e) => r("focusOutside", e),
				onInteractOutside: t[5] ||= (e) => r("interactOutside", e),
				onDismiss: t[6] ||= (e) => r("dismiss")
			}, {
				default: N(() => [U(M(yS), {
					ref_key: "rovingFocusGroupRef",
					ref: g,
					"current-tab-stop-id": h.value,
					"onUpdate:currentTabStopId": t[0] ||= (e) => h.value = e,
					"as-child": "",
					orientation: "vertical",
					dir: M(a).dir.value,
					loop: M(c),
					onEntryFocus: t[1] ||= (e) => {
						r("entryFocus", e), M(a).isUsingKeyboardRef.value || e.preventDefault();
					}
				}, {
					default: N(() => [U(M(Rx), {
						ref: M(_),
						role: "menu",
						as: e.as,
						"as-child": e.asChild,
						"aria-orientation": "vertical",
						"data-reka-menu-content": "",
						"data-state": M(xv)(M(i).open.value),
						dir: M(a).dir.value,
						side: e.side,
						"side-offset": e.sideOffset,
						align: e.align,
						"align-offset": e.alignOffset,
						"avoid-collisions": e.avoidCollisions,
						"collision-boundary": e.collisionBoundary,
						"collision-padding": e.collisionPadding,
						"arrow-padding": e.arrowPadding,
						"prioritize-position": e.prioritizePosition,
						"position-strategy": e.positionStrategy,
						"update-position-strategy": e.updatePositionStrategy,
						sticky: e.sticky,
						"hide-when-detached": e.hideWhenDetached,
						reference: e.reference,
						onKeydown: E,
						onBlur: te,
						onPointermove: ne,
						onPointerenter: re
					}, {
						default: N(() => [L(e.$slots, "default")]),
						_: 3
					}, 8, [
						"as",
						"as-child",
						"data-state",
						"dir",
						"side",
						"side-offset",
						"align",
						"align-offset",
						"avoid-collisions",
						"collision-boundary",
						"collision-padding",
						"arrow-padding",
						"prioritize-position",
						"position-strategy",
						"update-position-strategy",
						"sticky",
						"hide-when-detached",
						"reference"
					])]),
					_: 3
				}, 8, [
					"current-tab-stop-id",
					"dir",
					"loop"
				])]),
				_: 3
			}, 8, ["disable-outside-pointer-events"])]),
			_: 3
		}, 8, ["trapped"]));
	}
}), dC = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "MenuItemImpl",
	props: {
		disabled: {
			type: Boolean,
			required: !1
		},
		textValue: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = cC(), { forwardRef: r, currentElement: i } = Y(), { CollectionItem: a } = Jv(), o = /* @__PURE__ */ j(!1), s = q(() => o.value || n.highlightedElement.value === i.value);
		async function c(e) {
			if (!(e.defaultPrevented || !Tv(e))) {
				if (t.disabled) n.onItemLeave(e);
				else if (!n.onItemEnter(e)) {
					let t = e.currentTarget;
					n.highlightedElement.value = t, ["INPUT", "TEXTAREA"].includes(lp()?.tagName || "") || t.focus({ preventScroll: !0 });
				}
			}
		}
		async function l(e) {
			await er(), !e.defaultPrevented && Tv(e) && n.highlightedElement.value === i.value && !n.onItemLeave(e) && n.highlightedElement.value === i.value && (n.highlightedElement.value = void 0);
		}
		return (e, t) => (z(), V(M(a), { value: { textValue: e.textValue } }, {
			default: N(() => [U(M(X), K({
				ref: M(r),
				role: "menuitem",
				tabindex: "-1"
			}, e.$attrs, {
				as: e.as,
				"as-child": e.asChild,
				"aria-disabled": e.disabled || void 0,
				"data-disabled": e.disabled ? "" : void 0,
				"data-highlighted": s.value ? "" : void 0,
				onPointermove: c,
				onPointerleave: l,
				onFocus: t[0] ||= async (t) => {
					await er(), !(t.defaultPrevented || e.disabled) && (o.value = !0, M(n).highlightedElement.value = t.currentTarget);
				},
				onBlur: t[1] ||= async (e) => {
					await er(), !e.defaultPrevented && (o.value = !1);
				}
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, [
				"as",
				"as-child",
				"aria-disabled",
				"data-disabled",
				"data-highlighted"
			])]),
			_: 3
		}, 8, ["value"]));
	}
}), fC = /* @__PURE__ */ F({
	__name: "MenuItem",
	props: {
		disabled: {
			type: Boolean,
			required: !1
		},
		textValue: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = t, { forwardRef: i, currentElement: a } = Y(), o = aC(), s = cC(), c = /* @__PURE__ */ j(!1);
		async function l() {
			let e = a.value;
			if (!n.disabled && e) {
				let e = new CustomEvent(gv, {
					bubbles: !0,
					cancelable: !0
				});
				r("select", e), await er(), e.defaultPrevented ? c.value = !1 : o.onClose();
			}
		}
		return (e, t) => (z(), V(dC, K(n, {
			ref: M(i),
			onClick: l,
			onPointerdown: t[0] ||= () => {
				c.value = !0;
			},
			onPointerup: t[1] ||= async (e) => {
				await er(), !e.defaultPrevented && (c.value || e.currentTarget?.click());
			},
			onKeydown: t[2] ||= async (t) => {
				let n = M(s).searchRef.value !== "";
				e.disabled || n && t.key === " " || M(_v).includes(t.key) && (t.currentTarget?.click(), t.preventDefault());
			}
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), pC = /* @__PURE__ */ F({
	__name: "MenuRootContentModal",
	props: {
		loop: {
			type: Boolean,
			required: !1
		},
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(n, r), a = rC(), { forwardRef: o, currentElement: s } = Y();
		return u_(s), (e, t) => (z(), V(uC, K(M(i), {
			ref: M(o),
			"trap-focus": M(a).open.value,
			"disable-outside-pointer-events": M(a).open.value,
			"disable-outside-scroll": !0,
			onDismiss: t[0] ||= (e) => M(a).onOpenChange(!1),
			onFocusOutside: t[1] ||= Xl((e) => r("focusOutside", e), ["prevent"])
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["trap-focus", "disable-outside-pointer-events"]));
	}
}), mC = /* @__PURE__ */ F({
	__name: "MenuRootContentNonModal",
	props: {
		loop: {
			type: Boolean,
			required: !1
		},
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = qg(e, t), r = rC();
		return (e, t) => (z(), V(uC, K(M(n), {
			"trap-focus": !1,
			"disable-outside-pointer-events": !1,
			"disable-outside-scroll": !1,
			onDismiss: t[0] ||= (e) => M(r).onOpenChange(!1)
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), hC = /* @__PURE__ */ F({
	__name: "MenuContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		loop: {
			type: Boolean,
			required: !1
		},
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = qg(e, t), r = rC(), i = aC();
		return (e, t) => (z(), V(M(S_), { present: e.forceMount || M(r).open.value }, {
			default: N(() => [M(i).modal.value ? (z(), V(pC, A(K({ key: 0 }, {
				...e.$attrs,
				...M(n)
			})), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16)) : (z(), V(mC, A(K({ key: 1 }, {
				...e.$attrs,
				...M(n)
			})), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16))]),
			_: 3
		}, 8, ["present"]));
	}
}), gC = /* @__PURE__ */ F({
	__name: "MenuPortal",
	props: {
		to: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		defer: {
			type: Boolean,
			required: !1
		},
		forceMount: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(Nv), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [_C, vC] = /* @__PURE__ */ cp("ContextMenuRoot"), yC = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "ContextMenuRoot",
	props: {
		pressOpenDelay: {
			type: Number,
			required: !1,
			default: 700
		},
		dir: {
			type: String,
			required: !1
		},
		modal: {
			type: Boolean,
			required: !1,
			default: !0
		}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = e, r = t, { dir: i, modal: a, pressOpenDelay: o } = /* @__PURE__ */ xn(n);
		Y();
		let s = zg(i), c = /* @__PURE__ */ j(!1);
		return vC({
			open: c,
			onOpenChange: (e) => {
				c.value = e;
			},
			dir: s,
			modal: a,
			triggerElement: /* @__PURE__ */ j(),
			pressOpenDelay: o
		}), P(c, (e) => {
			r("update:open", e);
		}), (e, t) => (z(), V(M(sC), {
			open: c.value,
			"onUpdate:open": t[0] ||= (e) => c.value = e,
			dir: M(s),
			modal: M(a)
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"open",
			"dir",
			"modal"
		]));
	}
}), bC = /* @__PURE__ */ F({
	__name: "ContextMenuContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		loop: {
			type: Boolean,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1,
			default: 0
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1,
			default: !0
		},
		collisionBoundary: {
			type: null,
			required: !1,
			default: () => []
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1,
			default: 0
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1,
			default: "partial"
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1,
			default: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		Y();
		let r = _C(), i = /* @__PURE__ */ j(!1);
		return (e, t) => (z(), V(M(hC), K(M(n), {
			side: "right",
			"side-offset": 2,
			align: "start",
			"update-position-strategy": "always",
			style: {
				"--reka-context-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
				"--reka-context-menu-content-available-width": "var(--reka-popper-available-width)",
				"--reka-context-menu-content-available-height": "var(--reka-popper-available-height)",
				"--reka-context-menu-trigger-width": "var(--reka-popper-anchor-width)",
				"--reka-context-menu-trigger-height": "var(--reka-popper-anchor-height)"
			},
			onCloseAutoFocus: t[0] ||= (e) => {
				!e.defaultPrevented && i.value && e.preventDefault(), i.value = !1;
			},
			onInteractOutside: t[1] ||= (e) => {
				e.detail.originalEvent.button === 2 && e.target === M(r).triggerElement.value && e.preventDefault(), !e.defaultPrevented && !M(r).modal.value && (i.value = !0);
			}
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), xC = /* @__PURE__ */ F({
	__name: "ContextMenuItem",
	props: {
		disabled: {
			type: Boolean,
			required: !1
		},
		textValue: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = Bg(t);
		return Y(), (e, t) => (z(), V(M(fC), A(W({
			...n,
			...M(r)
		})), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), SC = /* @__PURE__ */ F({
	__name: "ContextMenuPortal",
	props: {
		to: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		defer: {
			type: Boolean,
			required: !1
		},
		forceMount: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(gC), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/ContextMenu/utils.js
function CC(e) {
	return e.pointerType !== "mouse";
}
//#endregion
//#region node_modules/reka-ui/dist/ContextMenu/ContextMenuTrigger.js
var wC = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "ContextMenuTrigger",
	props: {
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		let { disabled: t } = /* @__PURE__ */ xn(e), { forwardRef: n, currentElement: r } = Y(), i = _C(), a = /* @__PURE__ */ j({
			x: 0,
			y: 0
		}), o = q(() => ({ getBoundingClientRect: () => ({
			width: 0,
			height: 0,
			left: a.value.x,
			right: a.value.x,
			top: a.value.y,
			bottom: a.value.y,
			...a.value
		}) })), s = /* @__PURE__ */ j(0);
		function c() {
			window.clearTimeout(s.value);
		}
		function l(e) {
			a.value = {
				x: e.clientX,
				y: e.clientY
			}, i.onOpenChange(!0);
		}
		async function u(e) {
			t.value || (await er(), e.defaultPrevented || (c(), l(e), e.preventDefault()));
		}
		async function d(e) {
			t.value || (await er(), CC(e) && !e.defaultPrevented && (c(), s.value = window.setTimeout(l, i.pressOpenDelay.value, e)));
		}
		async function f(e) {
			t.value || (await er(), CC(e) && !e.defaultPrevented && c());
		}
		return I(() => {
			r.value && (i.triggerElement.value = r.value);
		}), (e, r) => (z(), B(R, null, [U(M(eC), {
			as: "template",
			reference: o.value
		}, null, 8, ["reference"]), U(M(X), K({
			ref: M(n),
			as: e.as,
			"as-child": e.asChild,
			"data-state": M(i).open.value ? "open" : "closed",
			"data-disabled": M(t) ? "" : void 0,
			style: {
				WebkitTouchCallout: "none",
				pointerEvents: "auto"
			}
		}, e.$attrs, {
			onContextmenu: u,
			onPointerdown: d,
			onPointermove: f,
			onPointercancel: f,
			onPointerup: f
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, [
			"as",
			"as-child",
			"data-state",
			"data-disabled"
		])], 64));
	}
}), [TC, EC] = /* @__PURE__ */ cp("PopoverRoot"), DC = /* @__PURE__ */ F({
	__name: "PopoverRoot",
	props: {
		defaultOpen: {
			type: Boolean,
			required: !1,
			default: !1
		},
		open: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		modal: {
			type: Boolean,
			required: !1,
			default: !1
		}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = e, r = t, { modal: i } = /* @__PURE__ */ xn(n), a = Ef(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		});
		return EC({
			contentId: "",
			triggerId: "",
			modal: i,
			open: a,
			onOpenChange: (e) => {
				a.value = e;
			},
			onOpenToggle: () => {
				a.value = !a.value;
			},
			triggerElement: /* @__PURE__ */ j(),
			hasCustomAnchor: /* @__PURE__ */ j(!1)
		}), (e, t) => (z(), V(M(Sy), null, {
			default: N(() => [L(e.$slots, "default", {
				open: M(a),
				close: () => a.value = !1
			})]),
			_: 3
		}));
	}
}), OC = /* @__PURE__ */ F({
	__name: "PopoverContentImpl",
	props: {
		trapFocus: {
			type: Boolean,
			required: !1
		},
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Kg(J(n, "trapFocus", "disableOutsidePointerEvents")), { forwardRef: a } = Y(), o = TC();
		return Ug(), (e, t) => (z(), V(M(hv), {
			"as-child": "",
			loop: "",
			trapped: e.trapFocus,
			onMountAutoFocus: t[5] ||= (e) => r("openAutoFocus", e),
			onUnmountAutoFocus: t[6] ||= (e) => r("closeAutoFocus", e)
		}, {
			default: N(() => [U(M(tv), {
				"as-child": "",
				"disable-outside-pointer-events": e.disableOutsidePointerEvents,
				onPointerDownOutside: t[0] ||= (e) => r("pointerDownOutside", e),
				onInteractOutside: t[1] ||= (e) => r("interactOutside", e),
				onEscapeKeyDown: t[2] ||= (e) => r("escapeKeyDown", e),
				onFocusOutside: t[3] ||= (e) => r("focusOutside", e),
				onDismiss: t[4] ||= (e) => M(o).onOpenChange(!1)
			}, {
				default: N(() => [U(M(Rx), K(M(i), {
					id: M(o).contentId,
					ref: M(a),
					"data-state": M(o).open.value ? "open" : "closed",
					"aria-labelledby": M(o).triggerId,
					style: {
						"--reka-popover-content-transform-origin": "var(--reka-popper-transform-origin)",
						"--reka-popover-content-available-width": "var(--reka-popper-available-width)",
						"--reka-popover-content-available-height": "var(--reka-popper-available-height)",
						"--reka-popover-trigger-width": "var(--reka-popper-anchor-width)",
						"--reka-popover-trigger-height": "var(--reka-popper-anchor-height)"
					},
					role: "dialog"
				}), {
					default: N(() => [L(e.$slots, "default")]),
					_: 3
				}, 16, [
					"id",
					"data-state",
					"aria-labelledby"
				])]),
				_: 3
			}, 8, ["disable-outside-pointer-events"])]),
			_: 3
		}, 8, ["trapped"]));
	}
}), kC = /* @__PURE__ */ F({
	__name: "PopoverContentModal",
	props: {
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = TC(), a = /* @__PURE__ */ j(!1);
		wp(!0);
		let o = qg(n, r), { forwardRef: s, currentElement: c } = Y();
		return u_(c), (e, t) => (z(), V(OC, K(M(o), {
			ref: M(s),
			"trap-focus": M(i).open.value,
			"disable-outside-pointer-events": "",
			onCloseAutoFocus: t[0] ||= Xl((e) => {
				r("closeAutoFocus", e), a.value || M(i).triggerElement.value?.focus();
			}, ["prevent"]),
			onPointerDownOutside: t[1] ||= (e) => {
				r("pointerDownOutside", e);
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
				a.value = t.button === 2 || n;
			},
			onFocusOutside: t[2] ||= Xl(() => {}, ["prevent"])
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["trap-focus"]));
	}
}), AC = /* @__PURE__ */ F({
	__name: "PopoverContentNonModal",
	props: {
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = TC(), a = /* @__PURE__ */ j(!1), o = /* @__PURE__ */ j(!1), s = qg(n, r);
		return (e, t) => (z(), V(OC, K(M(s), {
			"trap-focus": !1,
			"disable-outside-pointer-events": !1,
			onCloseAutoFocus: t[0] ||= (e) => {
				r("closeAutoFocus", e), e.defaultPrevented || (a.value || M(i).triggerElement.value?.focus(), e.preventDefault()), a.value = !1, o.value = !1;
			},
			onInteractOutside: t[1] ||= async (e) => {
				r("interactOutside", e), e.defaultPrevented || (a.value = !0, e.detail.originalEvent.type === "pointerdown" && (o.value = !0));
				let t = e.target;
				M(i).triggerElement.value?.contains(t) && e.preventDefault(), e.detail.originalEvent.type === "focusin" && o.value && e.preventDefault();
			}
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), jC = /* @__PURE__ */ F({
	__name: "PopoverContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = TC(), a = qg(n, r), { forwardRef: o } = Y();
		return i.contentId ||= f_(void 0, "reka-popover-content"), (e, t) => (z(), V(M(S_), { present: e.forceMount || M(i).open.value }, {
			default: N(() => [M(i).modal.value ? (z(), V(kC, K({ key: 0 }, M(a), { ref: M(o) }), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16)) : (z(), V(AC, K({ key: 1 }, M(a), { ref: M(o) }), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16))]),
			_: 3
		}, 8, ["present"]));
	}
}), MC = /* @__PURE__ */ F({
	__name: "PopoverPortal",
	props: {
		to: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		defer: {
			type: Boolean,
			required: !1
		},
		forceMount: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(Nv), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), NC = /* @__PURE__ */ F({
	__name: "PopoverTrigger",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e, n = TC(), { forwardRef: r, currentElement: i } = Y();
		return n.triggerId ||= f_(void 0, "reka-popover-trigger"), I(() => {
			n.triggerElement.value = i.value;
		}), (e, i) => (z(), V(ia(M(n).hasCustomAnchor.value ? M(X) : M(Cy)), { "as-child": "" }, {
			default: N(() => [U(M(X), {
				id: M(n).triggerId,
				ref: M(r),
				type: e.as === "button" ? "button" : void 0,
				"aria-haspopup": "dialog",
				"aria-expanded": M(n).open.value,
				"aria-controls": M(n).contentId,
				"data-state": M(n).open.value ? "open" : "closed",
				as: e.as,
				"as-child": t.asChild,
				onClick: M(n).onOpenToggle
			}, {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 8, [
				"id",
				"type",
				"aria-expanded",
				"aria-controls",
				"data-state",
				"as",
				"as-child",
				"onClick"
			])]),
			_: 3
		}));
	}
}), [PC, FC] = /* @__PURE__ */ cp("DropdownMenuRoot"), IC = /* @__PURE__ */ F({
	__name: "DropdownMenuRoot",
	props: {
		defaultOpen: {
			type: Boolean,
			required: !1
		},
		open: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		dir: {
			type: String,
			required: !1
		},
		modal: {
			type: Boolean,
			required: !1,
			default: !0
		}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		Y();
		let i = Ef(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		}), a = /* @__PURE__ */ j(), { modal: o, dir: s } = /* @__PURE__ */ xn(n), c = zg(s);
		return FC({
			open: i,
			onOpenChange: (e) => {
				i.value = e;
			},
			onOpenToggle: () => {
				i.value = !i.value;
			},
			triggerId: "",
			triggerElement: a,
			contentId: "",
			modal: o,
			dir: c
		}), (e, t) => (z(), V(M(sC), {
			open: M(i),
			"onUpdate:open": t[0] ||= (e) => /* @__PURE__ */ dn(i) ? i.value = e : null,
			dir: M(c),
			modal: M(o)
		}, {
			default: N(() => [L(e.$slots, "default", { open: M(i) })]),
			_: 3
		}, 8, [
			"open",
			"dir",
			"modal"
		]));
	}
}), LC = /* @__PURE__ */ F({
	__name: "DropdownMenuContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		loop: {
			type: Boolean,
			required: !1
		},
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		Y();
		let r = PC(), i = /* @__PURE__ */ j(!1);
		function a(e) {
			e.defaultPrevented || (i.value || setTimeout(() => {
				r.triggerElement.value?.focus();
			}, 0), i.value = !1, e.preventDefault());
		}
		return r.contentId ||= f_(void 0, "reka-dropdown-menu-content"), (e, t) => (z(), V(M(hC), K(M(n), {
			id: M(r).contentId,
			"aria-labelledby": M(r)?.triggerId,
			style: {
				"--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
				"--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
				"--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
				"--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
				"--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
			},
			onCloseAutoFocus: a,
			onInteractOutside: t[0] ||= (e) => {
				if (e.defaultPrevented) return;
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, a = t.button === 2 || n;
				(!M(r).modal.value || a) && (i.value = !0), M(r).triggerElement.value?.contains(e.target) && e.preventDefault();
			}
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["id", "aria-labelledby"]));
	}
}), RC = /* @__PURE__ */ F({
	__name: "DropdownMenuItem",
	props: {
		disabled: {
			type: Boolean,
			required: !1
		},
		textValue: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = Bg(t);
		return Y(), (e, t) => (z(), V(M(fC), A(W({
			...n,
			...M(r)
		})), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), zC = /* @__PURE__ */ F({
	__name: "DropdownMenuPortal",
	props: {
		to: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		defer: {
			type: Boolean,
			required: !1
		},
		forceMount: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(gC), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), BC = /* @__PURE__ */ F({
	__name: "DropdownMenuTrigger",
	props: {
		disabled: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e, n = PC(), { forwardRef: r, currentElement: i } = Y();
		return I(() => {
			n.triggerElement = i;
		}), n.triggerId ||= f_(void 0, "reka-dropdown-menu-trigger"), (e, i) => (z(), V(M(eC), { "as-child": "" }, {
			default: N(() => [U(M(X), {
				id: M(n).triggerId,
				ref: M(r),
				type: e.as === "button" ? "button" : void 0,
				"as-child": t.asChild,
				as: e.as,
				"aria-haspopup": "menu",
				"aria-expanded": M(n).open.value,
				"aria-controls": M(n).open.value ? M(n).contentId : void 0,
				"data-disabled": e.disabled ? "" : void 0,
				disabled: e.disabled,
				"data-state": M(n).open.value ? "open" : "closed",
				onClick: i[0] ||= async (t) => {
					!e.disabled && t.button === 0 && t.ctrlKey === !1 && (M(n)?.onOpenToggle(), await er(), M(n).open.value && t.preventDefault());
				},
				onKeydown: i[1] ||= Ql((t) => {
					e.disabled || (["Enter", " "].includes(t.key) && M(n).onOpenToggle(), t.key === "ArrowDown" && M(n).onOpenChange(!0), [
						"Enter",
						" ",
						"ArrowDown"
					].includes(t.key) && t.preventDefault());
				}, [
					"enter",
					"space",
					"arrow-down"
				])
			}, {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 8, [
				"id",
				"type",
				"as-child",
				"as",
				"aria-expanded",
				"aria-controls",
				"data-disabled",
				"disabled",
				"data-state"
			])]),
			_: 3
		}));
	}
}), [VC, HC] = /* @__PURE__ */ cp("HoverCardRoot"), UC = /* @__PURE__ */ F({
	__name: "HoverCardRoot",
	props: {
		defaultOpen: {
			type: Boolean,
			required: !1,
			default: !1
		},
		open: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		openDelay: {
			type: Number,
			required: !1,
			default: 700
		},
		closeDelay: {
			type: Number,
			required: !1,
			default: 300
		}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = e, r = t, { openDelay: i, closeDelay: a } = /* @__PURE__ */ xn(n);
		Y();
		let o = Ef(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		}), s = /* @__PURE__ */ j(0), c = /* @__PURE__ */ j(0), l = /* @__PURE__ */ j(!1), u = /* @__PURE__ */ j(!1), d = /* @__PURE__ */ j(!1), f = /* @__PURE__ */ j();
		function p() {
			clearTimeout(c.value), s.value = window.setTimeout(() => o.value = !0, i.value);
		}
		function m() {
			clearTimeout(s.value), !l.value && !u.value && (c.value = window.setTimeout(() => o.value = !1, a.value));
		}
		function h() {
			o.value = !1;
		}
		return HC({
			open: o,
			onOpenChange(e) {
				o.value = e;
			},
			onOpen: p,
			onClose: m,
			onDismiss: h,
			hasSelectionRef: l,
			isPointerDownOnContentRef: u,
			isPointerInTransitRef: d,
			triggerElement: f
		}), (e, t) => (z(), V(M(Sy), null, {
			default: N(() => [L(e.$slots, "default", { open: M(o) })]),
			_: 3
		}));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/HoverCard/utils.js
function WC(e) {
	return (t) => t.pointerType === "touch" ? void 0 : e();
}
function GC(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
//#endregion
//#region node_modules/reka-ui/dist/HoverCard/HoverCardContentImpl.js
var KC = /* @__PURE__ */ F({
	__name: "HoverCardContentImpl",
	props: {
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Kg(n), { forwardRef: a, currentElement: o } = Y(), s = VC(), { isPointerInTransit: c, onPointerExit: l } = Jg(s.triggerElement, o);
		Zd(s.isPointerInTransitRef, c, { direction: "rtl" }), l(() => {
			s.onClose();
		});
		let u = /* @__PURE__ */ j(!1), d;
		Tr((e) => {
			if (u.value) {
				let t = document.body;
				d = t.style.userSelect || t.style.webkitUserSelect, t.style.userSelect = "none", t.style.webkitUserSelect = "none", e(() => {
					t.style.userSelect = d, t.style.webkitUserSelect = d;
				});
			}
		});
		function f() {
			u.value = !1, s.isPointerDownOnContentRef.value = !1, er(() => {
				document.getSelection()?.toString() !== "" && (s.hasSelectionRef.value = !0);
			});
		}
		return I(() => {
			o.value && (document.addEventListener("pointerup", f), GC(o.value).forEach((e) => e.setAttribute("tabindex", "-1"))), cf(window, "scroll", (e) => {
				e.target?.contains(s.triggerElement.value) && s.onDismiss();
			}, { capture: !0 });
		}), Yi(() => {
			document.removeEventListener("pointerup", f), s.hasSelectionRef.value = !1, s.isPointerDownOnContentRef.value = !1;
		}), (e, t) => (z(), V(M(tv), {
			"as-child": "",
			"disable-outside-pointer-events": !1,
			onEscapeKeyDown: t[1] ||= (e) => r("escapeKeyDown", e),
			onPointerDownOutside: t[2] ||= (e) => r("pointerDownOutside", e),
			onFocusOutside: t[3] ||= Xl((e) => r("focusOutside", e), ["prevent"]),
			onDismiss: M(s).onDismiss
		}, {
			default: N(() => [U(M(Rx), K({
				...M(i),
				...e.$attrs
			}, {
				ref: M(a),
				"data-state": M(s).open.value ? "open" : "closed",
				style: {
					userSelect: u.value ? "text" : void 0,
					WebkitUserSelect: u.value ? "text" : void 0,
					"--reka-hover-card-content-transform-origin": "var(--reka-popper-transform-origin)",
					"--reka-hover-card-content-available-width": "var(--reka-popper-available-width)",
					"--reka-hover-card-content-available-height": "var(--reka-popper-available-height)",
					"--reka-hover-card-trigger-width": "var(--reka-popper-anchor-width)",
					"--reka-hover-card-trigger-height": "var(--reka-popper-anchor-height)"
				},
				onPointerdown: t[0] ||= (e) => {
					e.currentTarget.contains(e.target) && (u.value = !0), M(s).hasSelectionRef.value = !1, M(s).isPointerDownOnContentRef.value = !0;
				}
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, ["data-state", "style"])]),
			_: 3
		}, 8, ["onDismiss"]));
	}
}), qC = /* @__PURE__ */ F({
	__name: "HoverCardContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside"
	],
	setup(e, { emit: t }) {
		let n = qg(e, t), { forwardRef: r } = Y(), i = VC();
		return (e, t) => (z(), V(M(S_), { present: e.forceMount || M(i).open.value }, {
			default: N(() => [U(KC, K(M(n), {
				ref: M(r),
				onPointerenter: t[0] ||= (e) => M(WC)(M(i).onOpen)(e)
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16)]),
			_: 3
		}, 8, ["present"]));
	}
}), JC = /* @__PURE__ */ F({
	__name: "HoverCardPortal",
	props: {
		to: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		defer: {
			type: Boolean,
			required: !1
		},
		forceMount: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(Nv), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), YC = /* @__PURE__ */ F({
	__name: "HoverCardTrigger",
	props: {
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "a"
		}
	},
	setup(e) {
		let { forwardRef: t, currentElement: n } = Y(), r = VC();
		r.triggerElement = n;
		function i() {
			setTimeout(() => {
				!r.isPointerInTransitRef.value && !r.open.value && r.onClose();
			}, 0);
		}
		return (e, n) => (z(), V(M(Cy), {
			"as-child": "",
			reference: e.reference
		}, {
			default: N(() => [U(M(X), {
				ref: M(t),
				"as-child": e.asChild,
				as: e.as,
				"data-state": M(r).open.value ? "open" : "closed",
				"data-grace-area-trigger": "",
				onPointerenter: n[0] ||= (e) => M(WC)(M(r).onOpen)(e),
				onPointerleave: n[1] ||= (e) => M(WC)(i)(e),
				onFocus: n[2] ||= (e) => M(r).onOpen(),
				onBlur: n[3] ||= (e) => M(r).onClose()
			}, {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 8, [
				"as-child",
				"as",
				"data-state"
			])]),
			_: 3
		}, 8, ["reference"]));
	}
}), XC = /* @__PURE__ */ F({
	__name: "Label",
	props: {
		for: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "label"
		}
	},
	setup(e) {
		let t = e;
		return Y(), (e, n) => (z(), V(M(X), K(t, { onMousedown: n[0] ||= (e) => {
			!e.defaultPrevented && e.detail > 1 && e.preventDefault();
		} }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [ZC, QC] = /* @__PURE__ */ cp("MenubarRoot"), $C = /* @__PURE__ */ F({
	__name: "MenubarRoot",
	props: {
		modelValue: {
			type: String,
			required: !1
		},
		defaultValue: {
			type: String,
			required: !1
		},
		dir: {
			type: String,
			required: !1
		},
		loop: {
			type: Boolean,
			required: !1,
			default: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, { forwardRef: i } = Y(), { CollectionSlot: a } = Jv({
			key: "Menubar",
			isProvider: !0
		}), o = Ef(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? "",
			passive: n.modelValue === void 0
		}), s = /* @__PURE__ */ j(null), { dir: c, loop: l } = /* @__PURE__ */ xn(n), u = zg(c);
		return QC({
			modelValue: o,
			dir: u,
			loop: l,
			onMenuOpen: (e) => {
				o.value = e, s.value = e;
			},
			onMenuClose: () => {
				o.value = "";
			},
			onMenuToggle: (e) => {
				o.value = o.value ? "" : e, s.value = e;
			}
		}), (e, t) => (z(), V(M(a), null, {
			default: N(() => [U(M(yS), {
				"current-tab-stop-id": s.value,
				"onUpdate:currentTabStopId": t[0] ||= (e) => s.value = e,
				orientation: "horizontal",
				loop: M(l),
				dir: M(u),
				"as-child": ""
			}, {
				default: N(() => [U(M(X), {
					ref: M(i),
					role: "menubar"
				}, {
					default: N(() => [L(e.$slots, "default", { modelValue: M(o) })]),
					_: 3
				}, 512)]),
				_: 3
			}, 8, [
				"current-tab-stop-id",
				"loop",
				"dir"
			])]),
			_: 3
		}));
	}
}), [ew, tw] = /* @__PURE__ */ cp("MenubarMenu"), nw = /* @__PURE__ */ F({
	__name: "MenubarMenu",
	props: { value: {
		type: String,
		required: !1
	} },
	setup(e) {
		let t = f_(e.value), n = ZC();
		Y();
		let r = /* @__PURE__ */ j(), i = /* @__PURE__ */ j(!1), a = q(() => n.modelValue.value === t);
		return P(a, () => {
			a.value || (i.value = !1);
		}), tw({
			value: t,
			triggerElement: r,
			triggerId: t,
			contentId: "",
			wasKeyboardTriggerOpenRef: i
		}), (e, t) => (z(), V(M(sC), {
			open: a.value,
			modal: !1,
			dir: M(n).dir.value,
			"onUpdate:open": t[0] ||= (e) => {
				e || M(n).onMenuClose();
			}
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, ["open", "dir"]));
	}
}), rw = /* @__PURE__ */ F({
	__name: "MenubarContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		loop: {
			type: Boolean,
			required: !1
		},
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1,
			default: "start"
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		Y();
		let r = ZC(), i = ew();
		i.contentId ||= f_(void 0, "reka-menubar-content");
		let { getItems: a } = Jv({ key: "Menubar" }), o = /* @__PURE__ */ j(!1);
		function s(e) {
			let t = e.target.hasAttribute("data-reka-menubar-subtrigger"), n = (r.dir.value === "rtl" ? "ArrowRight" : "ArrowLeft") === e.key;
			if (!n && t) return;
			let o = a().filter((e) => e.ref.dataset.disabled !== "").map((e) => e.ref.dataset.value);
			n && o.reverse();
			let s = o.indexOf(i.value);
			o = r.loop.value ? v_(o, s + 1) : o.slice(s + 1);
			let [c] = o;
			c && r.onMenuOpen(c);
		}
		return (e, t) => (z(), V(M(hC), K(M(n), {
			id: M(i).contentId,
			"data-reka-menubar-content": "",
			"aria-labelledby": M(i).triggerId,
			style: {
				"--reka-menubar-content-transform-origin": "var(--reka-popper-transform-origin)",
				"--reka-menubar-content-available-width": "var(--reka-popper-available-width)",
				"--reka-menubar-content-available-height": "var(--reka-popper-available-height)",
				"--reka-menubar-trigger-width": "var(--reka-popper-anchor-width)",
				"--reka-menubar-trigger-height": "var(--reka-popper-anchor-height)"
			},
			onCloseAutoFocus: t[0] ||= (e) => {
				!M(r).modelValue.value && !o.value && M(i).triggerElement.value?.focus(), o.value = !1, e.preventDefault();
			},
			onFocusOutside: t[1] ||= (e) => {
				let t = e.target;
				M(a)().filter((e) => e.ref.dataset.disabled !== "").some((e) => e.ref.contains(t)) && e.preventDefault();
			},
			onInteractOutside: t[2] ||= (e) => {
				o.value = !0;
			},
			onEntryFocus: t[3] ||= (e) => {
				M(i).wasKeyboardTriggerOpenRef.value || e.preventDefault();
			},
			onKeydown: Ql(s, ["arrow-right", "arrow-left"])
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["id", "aria-labelledby"]));
	}
}), iw = /* @__PURE__ */ F({
	__name: "MenubarItem",
	props: {
		disabled: {
			type: Boolean,
			required: !1
		},
		textValue: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = Bg(t);
		return Y(), (e, t) => (z(), V(M(fC), A(W({
			...n,
			...M(r)
		})), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), aw = /* @__PURE__ */ F({
	__name: "MenubarPortal",
	props: {
		to: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		defer: {
			type: Boolean,
			required: !1
		},
		forceMount: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(gC), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), ow = /* @__PURE__ */ F({
	__name: "MenubarTrigger",
	props: {
		disabled: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = ZC(), n = ew(), { forwardRef: r, currentElement: i } = Y(), { CollectionItem: a } = Jv({ key: "Menubar" }), o = /* @__PURE__ */ j(!1), s = q(() => t.modelValue.value === n.value);
		return I(() => {
			n.triggerElement = i;
		}), (e, c) => (z(), V(M(bS), {
			"as-child": "",
			focusable: !e.disabled,
			"tab-stop-id": M(n).value
		}, {
			default: N(() => [U(M(a), null, {
				default: N(() => [U(M(eC), { "as-child": "" }, {
					default: N(() => [U(M(X), {
						id: M(n).triggerId,
						ref: M(r),
						as: e.as,
						"as-child": e.asChild,
						type: e.as === "button" ? "button" : void 0,
						role: "menuitem",
						"aria-haspopup": "menu",
						"aria-expanded": s.value,
						"aria-controls": s.value ? M(n).contentId : void 0,
						"data-highlighted": o.value ? "" : void 0,
						"data-state": s.value ? "open" : "closed",
						"data-disabled": e.disabled ? "" : void 0,
						disabled: e.disabled,
						"data-value": M(n).value,
						onPointerdown: c[0] ||= (r) => {
							!e.disabled && r.button === 0 && r.ctrlKey === !1 && (M(t).onMenuOpen(M(n).value), s.value || r.preventDefault());
						},
						onPointerenter: c[1] ||= () => {
							M(t).modelValue.value && !s.value && (M(t).onMenuOpen(M(n).value), M(i)?.focus());
						},
						onKeydown: c[2] ||= Ql((r) => {
							e.disabled || (["Enter", " "].includes(r.key) && M(t).onMenuToggle(M(n).value), r.key === "ArrowDown" && M(t).onMenuOpen(M(n).value), [
								"Enter",
								" ",
								"ArrowDown"
							].includes(r.key) && (M(n).wasKeyboardTriggerOpenRef.value = !0, r.preventDefault()));
						}, [
							"enter",
							"space",
							"arrow-down"
						]),
						onFocus: c[3] ||= (e) => o.value = !0,
						onBlur: c[4] ||= (e) => o.value = !1
					}, {
						default: N(() => [L(e.$slots, "default")]),
						_: 3
					}, 8, [
						"id",
						"as",
						"as-child",
						"type",
						"aria-expanded",
						"aria-controls",
						"data-highlighted",
						"data-state",
						"data-disabled",
						"disabled",
						"data-value"
					])]),
					_: 3
				})]),
				_: 3
			})]),
			_: 3
		}, 8, ["focusable", "tab-stop-id"]));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/NavigationMenu/utils.js
function sw(e) {
	return e ? "open" : "closed";
}
function cw(e, t) {
	return `${e}-trigger-${t}`;
}
function lw(e, t) {
	return `${e}-content-${t}`;
}
var uw = "navigationMenu.linkSelect", dw = "navigationMenu.rootContentDismiss";
function fw(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function pw(e) {
	let t = lp();
	return e.some((e) => e === t ? !0 : (e.focus(), lp() !== t));
}
function mw(e) {
	return e.forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	}), () => {
		e.forEach((e) => {
			let t = e.dataset.tabindex;
			e.setAttribute("tabindex", t);
		});
	};
}
function hw(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
//#endregion
//#region node_modules/reka-ui/dist/NavigationMenu/NavigationMenuRoot.js
var [gw, _w] = /* @__PURE__ */ cp(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), vw = /* @__PURE__ */ F({
	__name: "NavigationMenuRoot",
	props: {
		modelValue: {
			type: String,
			required: !1,
			default: void 0
		},
		defaultValue: {
			type: String,
			required: !1
		},
		dir: {
			type: String,
			required: !1
		},
		orientation: {
			type: String,
			required: !1,
			default: "horizontal"
		},
		delayDuration: {
			type: Number,
			required: !1,
			default: 200
		},
		skipDelayDuration: {
			type: Number,
			required: !1,
			default: 300
		},
		disableClickTrigger: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disableHoverTrigger: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disablePointerLeaveClose: {
			type: Boolean,
			required: !1
		},
		unmountOnHide: {
			type: Boolean,
			required: !1,
			default: !0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "nav"
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = Ef(n, "modelValue", t, {
			defaultValue: n.defaultValue ?? "",
			passive: n.modelValue === void 0
		}), i = /* @__PURE__ */ j(""), { forwardRef: a, currentElement: o } = Y(), s = /* @__PURE__ */ j(), c = /* @__PURE__ */ j(), l = /* @__PURE__ */ j(), { getItems: u, CollectionSlot: d } = Jv({
			key: "NavigationMenu",
			isProvider: !0
		}), { delayDuration: f, skipDelayDuration: p, dir: m, disableClickTrigger: h, disableHoverTrigger: g, unmountOnHide: _ } = /* @__PURE__ */ xn(n), v = zg(m), y = qd(!1, p), b = Jd((e) => {
			typeof e == "string" && (i.value = r.value, r.value = e);
		}, q(() => r.value !== "" || y.value ? 150 : f.value));
		Tr(() => {
			r.value && (l.value = u().map((e) => e.ref).find((e) => e.id.includes(r.value)));
		}), cf(o, dw, x), _w({
			isRootMenu: !0,
			modelValue: r,
			previousValue: i,
			baseId: f_(void 0, "reka-navigation-menu"),
			disableClickTrigger: h,
			disableHoverTrigger: g,
			dir: v,
			unmountOnHide: _,
			orientation: n.orientation,
			rootNavigationMenu: o,
			indicatorTrack: s,
			activeTrigger: l,
			onIndicatorTrackChange: (e) => {
				s.value = e;
			},
			viewport: c,
			onViewportChange: (e) => {
				c.value = e;
			},
			onTriggerEnter: (e) => {
				b(e);
			},
			onTriggerLeave: () => {
				y.value = !0, b("");
			},
			onContentEnter: () => {
				b();
			},
			onContentLeave: () => {
				n.disablePointerLeaveClose || b("");
			},
			onItemSelect: (e) => {
				i.value = r.value, r.value = e;
			},
			onItemDismiss: x
		});
		function x() {
			i.value = r.value, r.value = "";
		}
		return (e, t) => (z(), V(M(d), null, {
			default: N(() => [U(M(X), {
				ref: M(a),
				as: e.as,
				"as-child": e.asChild,
				"data-orientation": e.orientation,
				dir: M(v),
				"data-reka-navigation-menu": ""
			}, {
				default: N(() => [L(e.$slots, "default", { modelValue: M(r) })]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"data-orientation",
				"dir"
			])]),
			_: 3
		}));
	}
}), [yw, bw] = /* @__PURE__ */ cp("NavigationMenuItem"), xw = /* @__PURE__ */ F({
	__name: "NavigationMenuItem",
	props: {
		value: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "li"
		}
	},
	setup(e) {
		let t = e;
		Y();
		let { getItems: n } = Jv({ key: "NavigationMenu" }), r = gw(), i = f_(t.value), a = /* @__PURE__ */ j(), o = /* @__PURE__ */ j(), s = lw(r.baseId, i), c = () => ({}), l = /* @__PURE__ */ j(!1);
		async function u(e = "start") {
			let t = document.getElementById(s);
			if (t) {
				c();
				let n = fw(t);
				n.length && pw(e === "start" ? n : n.reverse());
			}
		}
		function d() {
			let e = document.getElementById(s);
			if (e) {
				let t = fw(e);
				t.length && (c = mw(t));
			}
		}
		bw({
			value: i,
			contentId: s,
			triggerRef: a,
			focusProxyRef: o,
			wasEscapeCloseRef: l,
			onEntryKeyDown: u,
			onFocusProxyEnter: u,
			onContentFocusOutside: d,
			onRootContentClose: d
		});
		function f() {
			r.onItemDismiss(), a.value?.focus();
		}
		function p(e) {
			let t = lp();
			if (e.keyCode === 32 || e.key === "Enter") if (r.modelValue.value === i) {
				f(), e.preventDefault();
				return;
			} else {
				e.target.click(), e.preventDefault();
				return;
			}
			let a = n().filter((e) => e.ref.parentElement?.hasAttribute("data-menu-item")).map((e) => e.ref);
			if (!a.includes(t)) return;
			let o = hp(e, t, void 0, {
				itemsArray: a,
				loop: !1
			});
			o && o?.focus(), e.preventDefault(), e.stopPropagation();
		}
		return (e, t) => (z(), V(M(X), {
			"as-child": e.asChild,
			as: e.as,
			"data-menu-item": "",
			onKeydown: Ql(p, [
				"up",
				"down",
				"left",
				"right",
				"home",
				"end",
				"space"
			])
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, ["as-child", "as"]));
	}
}), Sw = /* @__PURE__ */ F({
	__name: "NavigationMenuContentImpl",
	props: {
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, { getItems: i } = Jv({ key: "NavigationMenu" }), { forwardRef: a, currentElement: o } = Y(), s = gw(), c = yw(), l = cw(s.baseId, c.value), u = lw(s.baseId, c.value), d = /* @__PURE__ */ j(null), f = q(() => {
			let e = i().map((e) => e.ref.id.split("trigger-")[1]);
			s.dir.value === "rtl" && e.reverse();
			let t = e.indexOf(s.modelValue.value), n = e.indexOf(s.previousValue.value), r = c.value === s.modelValue.value, a = n === e.indexOf(c.value);
			if (!r && !a) return d.value;
			let o = (() => {
				if (t !== n) {
					if (r && n !== -1) return t > n ? "from-end" : "from-start";
					if (a && t !== -1) return t > n ? "to-start" : "to-end";
				}
				return null;
			})();
			return d.value = o, o;
		});
		function p(e) {
			if (r("focusOutside", e), r("interactOutside", e), e.detail.originalEvent.target.hasAttribute("data-navigation-menu-trigger") && e.preventDefault(), !e.defaultPrevented) {
				c.onContentFocusOutside();
				let t = e.target;
				s.rootNavigationMenu?.value?.contains(t) && e.preventDefault();
			}
		}
		function m(e) {
			if (r("pointerDownOutside", e), !e.defaultPrevented) {
				let t = e.target, n = i().some((e) => e.ref.contains(t)), r = s.isRootMenu && s.viewport.value?.contains(t);
				(n || r || !s.isRootMenu) && e.preventDefault();
			}
		}
		Tr((e) => {
			let t = o.value;
			if (s.isRootMenu && t) {
				let n = () => {
					s.onItemDismiss(), c.onRootContentClose(), t.contains(lp()) && c.triggerRef.value?.focus();
				};
				t.addEventListener(dw, n), e(() => t.removeEventListener(dw, n));
			}
		});
		function h(e) {
			r("escapeKeyDown", e), e.defaultPrevented || (s.onItemDismiss(), c.triggerRef?.value?.focus(), c.wasEscapeCloseRef.value = !0);
		}
		function g(e) {
			if (e.target.closest("[data-reka-navigation-menu]") !== s.rootNavigationMenu.value) return;
			let t = e.altKey || e.ctrlKey || e.metaKey, n = e.key === "Tab" && !t, r = fw(e.currentTarget);
			if (n) {
				let t = lp(), n = r.findIndex((e) => e === t);
				if (pw(e.shiftKey ? r.slice(0, n).reverse() : r.slice(n + 1, r.length))) e.preventDefault();
				else {
					c.focusProxyRef.value?.focus();
					return;
				}
			}
			hp(e, lp(), void 0, {
				itemsArray: r,
				loop: !1,
				enableIgnoredElement: !0
			})?.focus();
		}
		function _() {
			let e = new Event(dw, {
				bubbles: !0,
				cancelable: !0
			});
			o.value?.dispatchEvent(e);
		}
		return (e, t) => (z(), V(M(tv), K({
			id: M(u),
			ref: M(a),
			"aria-labelledby": M(l),
			"data-motion": f.value,
			"data-state": M(sw)(M(s).modelValue.value === M(c).value),
			"data-orientation": M(s).orientation
		}, n, {
			onKeydown: g,
			onEscapeKeyDown: h,
			onPointerDownOutside: m,
			onFocusOutside: p,
			onDismiss: _
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, [
			"id",
			"aria-labelledby",
			"data-motion",
			"data-state",
			"data-orientation"
		]));
	}
}), Cw = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "NavigationMenuContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "forceMount"), r), { forwardRef: a } = Y(), o = gw(), s = yw(), c = q(() => s.value === o.modelValue.value), l = q(() => o.viewport.value && !o.modelValue.value && o.previousValue.value ? o.previousValue.value === s.value : !1);
		return (e, t) => (z(), V(Hr, {
			to: M(wd) && M(o).viewport.value ? M(o).viewport.value : "body",
			disabled: M(wd) && M(o).viewport.value ? !M(o).viewport.value : !0
		}, [U(M(S_), {
			present: e.forceMount || c.value || l.value,
			"force-mount": !M(o).unmountOnHide.value
		}, {
			default: N(({ present: n }) => [U(Sw, K({
				ref: M(a),
				"data-state": M(sw)(c.value),
				style: { pointerEvents: !c.value && M(o).isRootMenu ? "none" : void 0 }
			}, {
				...e.$attrs,
				...M(i)
			}, {
				hidden: !n,
				onPointerenter: t[0] ||= (e) => M(o).onContentEnter(M(s).value),
				onPointerleave: t[1] ||= (e) => M(hw)(() => M(o).onContentLeave())(e),
				onPointerDownOutside: t[2] ||= (e) => r("pointerDownOutside", e),
				onFocusOutside: t[3] ||= (e) => r("focusOutside", e),
				onInteractOutside: t[4] ||= (e) => r("interactOutside", e)
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 2
			}, 1040, [
				"data-state",
				"style",
				"hidden"
			])]),
			_: 3
		}, 8, ["present", "force-mount"])], 8, ["to", "disabled"]));
	}
}), ww = /* @__PURE__ */ F({
	__name: "NavigationMenuLink",
	props: {
		active: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "a"
		}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = t, { CollectionItem: i } = Jv({ key: "NavigationMenu" });
		Y();
		async function a(e) {
			let t = new CustomEvent(uw, {
				bubbles: !0,
				cancelable: !0,
				detail: { originalEvent: e }
			});
			if (r("select", t), !t.defaultPrevented && !e.metaKey) {
				let t = new CustomEvent(dw, {
					bubbles: !0,
					cancelable: !0
				});
				e.target?.dispatchEvent(t);
			}
		}
		return (e, t) => (z(), V(M(i), null, {
			default: N(() => [U(M(X), {
				as: e.as,
				"data-active": e.active ? "" : void 0,
				"aria-current": e.active ? "page" : void 0,
				"as-child": n.asChild,
				onClick: a
			}, {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 8, [
				"as",
				"data-active",
				"aria-current",
				"as-child"
			])]),
			_: 3
		}));
	}
}), Tw = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "NavigationMenuList",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "ul"
		}
	},
	setup(e) {
		let t = e, n = gw(), { forwardRef: r, currentElement: i } = Y();
		return I(() => {
			n.onIndicatorTrackChange(i.value);
		}), (e, i) => (z(), V(M(X), {
			ref: M(r),
			style: { position: "relative" }
		}, {
			default: N(() => [U(M(X), K(e.$attrs, {
				"as-child": t.asChild,
				as: e.as,
				"data-orientation": M(n).orientation
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, [
				"as-child",
				"as",
				"data-orientation"
			])]),
			_: 3
		}, 512));
	}
}), Ew = ["aria-owns"], Dw = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "NavigationMenuTrigger",
	props: {
		disabled: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e, n = gw(), r = yw(), { CollectionItem: i } = Jv({ key: "NavigationMenu" }), { forwardRef: a, currentElement: o } = Y(), s = /* @__PURE__ */ j(""), c = /* @__PURE__ */ j(""), l = qd(!1, 300), u = /* @__PURE__ */ j(!1), d = q(() => r.value === n.modelValue.value);
		I(() => {
			r.triggerRef = o, s.value = cw(n.baseId, r.value), c.value = lw(n.baseId, r.value);
		});
		function f() {
			n.disableHoverTrigger.value || (u.value = !1, r.wasEscapeCloseRef.value = !1);
		}
		function p(e) {
			if (!n.disableHoverTrigger.value && e.pointerType === "mouse") {
				if (t.disabled || u.value || r.wasEscapeCloseRef.value || l.value) return;
				n.onTriggerEnter(r.value), l.value = !0;
			}
		}
		function m(e) {
			if (!n.disableHoverTrigger.value && e.pointerType === "mouse") {
				if (t.disabled) return;
				n.onTriggerLeave(), l.value = !1;
			}
		}
		function h(e) {
			(!("pointerType" in e) || e.pointerType === "mouse") && n.disableClickTrigger.value || l.value || (d.value ? n.onItemSelect("") : n.onItemSelect(r.value), u.value = d.value);
		}
		function g(e) {
			let t = {
				horizontal: "ArrowDown",
				vertical: n.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight"
			}[n.orientation];
			d.value && e.key === t && (r.onEntryKeyDown(), e.preventDefault(), e.stopPropagation());
		}
		function _(e) {
			e && (r.focusProxyRef.value = sf(e));
		}
		function v(e) {
			let t = document.getElementById(r.contentId), n = e.relatedTarget, i = n === o.value, a = t?.contains(n);
			(i || !a) && r.onFocusProxyEnter(i ? "start" : "end");
		}
		return (e, r) => (z(), B(R, null, [U(M(i), null, {
			default: N(() => [U(M(X), K({
				id: s.value,
				ref: M(a),
				disabled: e.disabled,
				"data-disabled": e.disabled ? "" : void 0,
				"data-state": M(sw)(d.value),
				"data-navigation-menu-trigger": "",
				"aria-expanded": d.value,
				"aria-controls": c.value,
				"as-child": t.asChild,
				as: e.as
			}, e.$attrs, {
				onPointerenter: f,
				onPointermove: p,
				onPointerleave: m,
				onClick: h,
				onKeydown: g
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, [
				"id",
				"disabled",
				"data-disabled",
				"data-state",
				"aria-expanded",
				"aria-controls",
				"as-child",
				"as"
			])]),
			_: 3
		}), d.value ? (z(), B(R, { key: 0 }, [U(M(Yv), {
			ref: _,
			"aria-hidden": "true",
			tabindex: 0,
			onFocus: v
		}), M(n).viewport ? (z(), B("span", {
			key: 0,
			"aria-owns": c.value
		}, null, 8, Ew)) : G("v-if", !0)], 64)) : G("v-if", !0)], 64));
	}
}), Ow = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "NavigationMenuViewport",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		align: {
			type: String,
			required: !1,
			default: "center"
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, { forwardRef: n, currentElement: r } = Y(), i = gw(), { activeTrigger: a, rootNavigationMenu: o, modelValue: s } = i, c = /* @__PURE__ */ j(), l = /* @__PURE__ */ j(), u = q(() => !!i.modelValue.value);
		P(r, () => {
			i.onViewportChange(r.value);
		});
		let d = /* @__PURE__ */ j();
		P([s, u], () => {
			er(() => {
				r.value && requestAnimationFrame(() => {
					d.value = r.value?.querySelector("[data-state=open]");
				});
			});
		}, { immediate: !0 });
		function f() {
			if (d.value && a.value && o.value) {
				let e = document.documentElement.offsetWidth, n = document.documentElement.offsetHeight, r = o.value.getBoundingClientRect(), i = a.value.getBoundingClientRect(), { offsetWidth: s, offsetHeight: c } = d.value, u = i.left - r.left, f = i.top - r.top, p = null, m = null;
				switch (t.align) {
					case "start":
						p = u, m = f;
						break;
					case "end":
						p = u - s + i.width, m = f - c + i.height;
						break;
					default: p = u - s / 2 + i.width / 2, m = f - c / 2 + i.height / 2;
				}
				p + r.left < 10 && (p = 10 - r.left);
				let h = p + r.left + s;
				h > e - 10 && (p -= h - e + 10, p < 10 - r.left && (p = 10 - r.left)), m + r.top < 10 && (m = 10 - r.top);
				let g = m + r.top + c;
				g > n - 10 && (m -= g - n + 10, m < 10 - r.top && (m = 10 - r.top)), p = Math.round(p), m = Math.round(m), l.value = {
					left: p,
					top: m
				};
			}
		}
		return xf(d, () => {
			d.value && (c.value = {
				width: d.value.offsetWidth,
				height: d.value.offsetHeight
			}, f());
		}), xf([globalThis.document?.body, o], () => {
			f();
		}), (e, t) => (z(), V(M(S_), {
			present: e.forceMount || u.value,
			"force-mount": !M(i).unmountOnHide.value,
			onAfterLeave: t[2] ||= () => {
				c.value = void 0, l.value = void 0;
			}
		}, {
			default: N(({ present: r }) => [U(M(X), K(e.$attrs, {
				ref: M(n),
				as: e.as,
				"as-child": e.asChild,
				"data-state": M(sw)(u.value),
				"data-orientation": M(i).orientation,
				style: {
					pointerEvents: !u.value && M(i).isRootMenu ? "none" : void 0,
					"--reka-navigation-menu-viewport-width": c.value ? `${c.value?.width}px` : void 0,
					"--reka-navigation-menu-viewport-height": c.value ? `${c.value?.height}px` : void 0,
					"--reka-navigation-menu-viewport-left": l.value ? `${l.value?.left}px` : void 0,
					"--reka-navigation-menu-viewport-top": l.value ? `${l.value?.top}px` : void 0
				},
				hidden: !r,
				onPointerenter: t[0] ||= (e) => M(i).onContentEnter(M(i).modelValue.value),
				onPointerleave: t[1] ||= (e) => M(hw)(() => M(i).onContentLeave())(e)
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 2
			}, 1040, [
				"as",
				"as-child",
				"data-state",
				"data-orientation",
				"style",
				"hidden"
			])]),
			_: 3
		}, 8, ["present", "force-mount"]));
	}
}), kw = /* @__PURE__ */ new Map(), Aw = !1;
try {
	Aw = new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay === "exceptZero";
} catch {}
var jw = !1;
try {
	jw = new Intl.NumberFormat("de-DE", {
		style: "unit",
		unit: "degree"
	}).resolvedOptions().style === "unit";
} catch {}
var Mw = { degree: { narrow: {
	default: "°",
	"ja-JP": " 度",
	"zh-TW": "度",
	"sl-SI": " °"
} } }, Nw = class {
	constructor(e, t = {}) {
		this.numberFormatter = Pw(e, t), this.options = t;
	}
	format(e) {
		let t = "";
		if (t = !Aw && this.options.signDisplay != null ? Fw(this.numberFormatter, this.options.signDisplay, e) : this.numberFormatter.format(e), this.options.style === "unit" && !jw) {
			let { unit: e, unitDisplay: n = "short", locale: r } = this.resolvedOptions();
			if (!e) return t;
			let i = Mw[e]?.[n];
			t += i[r] || i.default;
		}
		return t;
	}
	formatToParts(e) {
		return this.numberFormatter.formatToParts(e);
	}
	formatRange(e, t) {
		if (typeof this.numberFormatter.formatRange == "function") return this.numberFormatter.formatRange(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		return `${this.format(e)} \u{2013} ${this.format(t)}`;
	}
	formatRangeToParts(e, t) {
		if (typeof this.numberFormatter.formatRangeToParts == "function") return this.numberFormatter.formatRangeToParts(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		let n = this.numberFormatter.formatToParts(e), r = this.numberFormatter.formatToParts(t);
		return [
			...n.map((e) => ({
				...e,
				source: "startRange"
			})),
			{
				type: "literal",
				value: " – ",
				source: "shared"
			},
			...r.map((e) => ({
				...e,
				source: "endRange"
			}))
		];
	}
	resolvedOptions() {
		let e = this.numberFormatter.resolvedOptions();
		return !Aw && this.options.signDisplay != null && (e = {
			...e,
			signDisplay: this.options.signDisplay
		}), !jw && this.options.style === "unit" && (e = {
			...e,
			style: "unit",
			unit: this.options.unit,
			unitDisplay: this.options.unitDisplay
		}), e;
	}
};
function Pw(e, t = {}) {
	let { numberingSystem: n } = t;
	if (n && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), e += `-nu-${n}`), t.style === "unit" && !jw) {
		let { unit: e, unitDisplay: n = "short" } = t;
		if (!e) throw Error("unit option must be provided with style: \"unit\"");
		if (!Mw[e]?.[n]) throw Error(`Unsupported unit ${e} with unitDisplay = ${n}`);
		t = {
			...t,
			style: "decimal"
		};
	}
	let r = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (kw.has(r)) return kw.get(r);
	let i = new Intl.NumberFormat(e, t);
	return kw.set(r, i), i;
}
function Fw(e, t, n) {
	if (t === "auto") return e.format(n);
	if (t === "never") return e.format(Math.abs(n));
	{
		let r = !1;
		if (t === "always" ? r = n > 0 || Object.is(n, 0) : t === "exceptZero" && (Object.is(n, -0) || Object.is(n, 0) ? n = Math.abs(n) : r = n > 0), r) {
			let t = e.format(-n), r = e.format(n), i = t.replace(r, "").replace(/\u200e|\u061C/, "");
			return [...i].length !== 1 && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), t.replace(r, "!!!").replace(i, "+").replace("!!!", r);
		} else return e.format(n);
	}
}
//#endregion
//#region node_modules/@internationalized/number/dist/private/NumberParser.mjs
var Iw = /* @__PURE__ */ RegExp("^.*\\(.*\\).*$"), Lw = [
	"latn",
	"arab",
	"hanidec",
	"deva",
	"beng",
	"fullwide"
], Rw = class {
	constructor(e, t = {}) {
		this.locale = e, this.options = t;
	}
	parse(e) {
		return Bw(this.locale, this.options, e).parse(e);
	}
	isValidPartialNumber(e, t, n) {
		return Bw(this.locale, this.options, e).isValidPartialNumber(e, t, n);
	}
	getNumberingSystem(e) {
		return Bw(this.locale, this.options, e).options.numberingSystem;
	}
}, zw = /* @__PURE__ */ new Map();
function Bw(e, t, n) {
	let r = Vw(e, t);
	if (!e.includes("-nu-") && !r.isValidPartialNumber(n)) {
		for (let i of Lw) if (i !== r.options.numberingSystem) {
			let r = Vw(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + i, t);
			if (r.isValidPartialNumber(n)) return r;
		}
	}
	return r;
}
function Vw(e, t) {
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ""), r = zw.get(n);
	return r || (r = new Hw(e, t), zw.set(n, r)), r;
}
var Hw = class {
	constructor(e, t = {}) {
		this.locale = e, t.roundingIncrement !== 1 && t.roundingIncrement != null && (t.maximumFractionDigits == null && t.minimumFractionDigits == null ? (t.maximumFractionDigits = 0, t.minimumFractionDigits = 0) : t.maximumFractionDigits == null ? t.maximumFractionDigits = t.minimumFractionDigits : t.minimumFractionDigits ??= t.maximumFractionDigits), this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = Gw(e, this.formatter, this.options, t), this.options.style === "percent" && ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
	}
	parse(e) {
		let t = this.formatter.resolvedOptions().useGrouping, n = this.sanitize(e);
		if (!t && this.symbols.group && n.includes(this.symbols.group)) return NaN;
		if (this.symbols.group && (n = n.replaceAll(this.symbols.group, "")), this.symbols.decimal && (n = n.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (n = n.replace(this.symbols.minusSign, "-")), n = n.replace(this.symbols.numeral, this.symbols.index), this.options.style === "percent") {
			let e = n.indexOf("-");
			n = n.replace("-", ""), n = n.replace("+", "");
			let t = n.indexOf(".");
			t === -1 && (t = n.length), n = n.replace(".", ""), n = t - 2 == 0 ? `0.${n}` : t - 2 == -1 ? `0.0${n}` : t - 2 == -2 ? "0.00" : `${n.slice(0, t - 2)}.${n.slice(t - 2)}`, e > -1 && (n = `-${n}`);
		}
		let r = n ? +n : NaN;
		if (isNaN(r)) return NaN;
		if (this.options.style === "percent") {
			let e = {
				...this.options,
				style: "decimal",
				minimumFractionDigits: Math.min((this.options.minimumFractionDigits ?? 0) + 2, 20),
				maximumFractionDigits: Math.min((this.options.maximumFractionDigits ?? 0) + 2, 20)
			};
			return new Rw(this.locale, e).parse(new Nw(this.locale, e).format(r));
		}
		return this.options.currencySign === "accounting" && Iw.test(e) && (r = -1 * r), r;
	}
	sanitize(e) {
		let t = this.formatter.resolvedOptions().useGrouping;
		return this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((t) => t.unit === e) ? this.symbols.noNumeralUnits.find((t) => t.unit === e).value.toString() : (e = e.replace(this.symbols.literals, ""), this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)), this.options.numberingSystem === "arab" && (this.symbols.decimal && (e = Kw(e, ",", this.symbols.decimal), e = Kw(e, "،", this.symbols.decimal)), this.symbols.group && t && (e = Kw(e, ".", this.symbols.group))), this.symbols.group === "’" && e.includes("'") && t && (e = Kw(e, "'", this.symbols.group)), this.options.locale === "fr-FR" && this.symbols.group && t && (e = Kw(e, " ", this.symbols.group), e = Kw(e, /\u00A0/g, this.symbols.group)), e);
	}
	isValidPartialNumber(e, t = -Infinity, n = Infinity) {
		let r = this.formatter.resolvedOptions().useGrouping;
		return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && n > 0 && (e = e.slice(this.symbols.plusSign.length)), this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && r && (e = Kw(e, this.symbols.group, "")), e = e.replace(this.symbols.numeral, ""), this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")), e.length === 0);
	}
}, Uw = new Set([
	"decimal",
	"fraction",
	"integer",
	"minusSign",
	"plusSign",
	"group"
]), Ww = [
	0,
	4,
	2,
	1,
	11,
	20,
	3,
	7,
	100,
	21,
	.1,
	1.1
];
function Gw(e, t, n, r) {
	let i = new Intl.NumberFormat(e, {
		...n,
		minimumSignificantDigits: 1,
		maximumSignificantDigits: 21,
		roundingIncrement: 1,
		roundingPriority: "auto",
		roundingMode: "halfExpand",
		useGrouping: !0
	}), a = i.formatToParts(-10000.111), o = i.formatToParts(10000.111), s = Ww.map((e) => i.formatToParts(e)), c = s.map((e, t) => {
		let n = e.find((e) => e.type === "unit");
		return n && !e.some((e) => e.type === "integer" || e.type === "fraction") ? {
			unit: n.value,
			value: Ww[t]
		} : null;
	}).filter((e) => !!e), l = a.find((e) => e.type === "minusSign")?.value ?? "-", u = o.find((e) => e.type === "plusSign")?.value;
	!u && (r?.signDisplay === "exceptZero" || r?.signDisplay === "always") && (u = "+");
	let d = new Intl.NumberFormat(e, {
		...n,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).formatToParts(.001).find((e) => e.type === "decimal")?.value, f = a.find((e) => e.type === "group")?.value, p = a.filter((e) => !Uw.has(e.type)).map((e) => qw(e.value)), m = s.flatMap((e) => e.filter((e) => !Uw.has(e.type)).map((e) => qw(e.value))), h = [...new Set([...p, ...m])].sort((e, t) => t.length - e.length), g = h.length === 0 ? /* @__PURE__ */ RegExp("\\p{White_Space}|\\p{Cf}", "gu") : RegExp(`${h.join("|")}|\\p{White_Space}|\\p{Cf}`, "gu"), _ = [...new Intl.NumberFormat(n.locale, { useGrouping: !1 }).format(9876543210)].reverse(), v = new Map(_.map((e, t) => [e, t])), y = RegExp(`[${_.join("")}]`, "g");
	return {
		minusSign: l,
		plusSign: u,
		decimal: d,
		group: f,
		literals: g,
		numeral: y,
		numerals: _,
		index: (e) => String(v.get(e)),
		noNumeralUnits: c
	};
}
function Kw(e, t, n) {
	return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function qw(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
//#endregion
//#region node_modules/reka-ui/dist/NumberField/utils.js
function Jw(e) {
	let { disabled: t } = e, n = /* @__PURE__ */ j(), r = vd(), i = () => window.clearTimeout(n.value), a = (e) => {
		i(), !t.value && (r.trigger(), n.value = window.setTimeout(() => {
			a(60);
		}, e));
	}, o = () => {
		a(400);
	}, s = () => {
		i();
	}, c = /* @__PURE__ */ j(!1), l = q(() => sf(e.target)), u = (e) => {
		e.button !== 0 || c.value || (e.preventDefault(), c.value = !0, o());
	}, d = () => {
		c.value = !1, s();
	};
	return wd && (cf(l || window, "pointerdown", u), cf(window, "pointerup", d), cf(window, "pointercancel", d)), {
		isPressed: c,
		onTrigger: r.on
	};
}
function Yw(e, t = /* @__PURE__ */ j({})) {
	return Kd(() => new Nw(e.value, t.value));
}
function Xw(e, t = /* @__PURE__ */ j({})) {
	return Kd(() => new Rw(e.value, t.value));
}
function Zw(e, t, n) {
	let r = e === "+" ? t + n : t - n;
	if (t % 1 != 0 || n % 1 != 0) {
		let i = t.toString().split("."), a = n.toString().split("."), o = i[1] && i[1].length || 0, s = a[1] && a[1].length || 0, c = 10 ** Math.max(o, s);
		t = Math.round(t * c), n = Math.round(n * c), r = e === "+" ? t + n : t - n, r /= c;
	}
	return r;
}
//#endregion
//#region node_modules/reka-ui/dist/NumberField/NumberFieldRoot.js
var [Qw, $w] = /* @__PURE__ */ cp("NumberFieldRoot"), eT = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "NumberFieldRoot",
	props: {
		defaultValue: {
			type: Number,
			required: !1,
			default: void 0
		},
		modelValue: {
			type: [Number, null],
			required: !1
		},
		min: {
			type: Number,
			required: !1
		},
		max: {
			type: Number,
			required: !1
		},
		step: {
			type: Number,
			required: !1,
			default: 1
		},
		stepSnapping: {
			type: Boolean,
			required: !1,
			default: !0
		},
		focusOnChange: {
			type: Boolean,
			required: !1,
			default: !0
		},
		formatOptions: {
			type: null,
			required: !1
		},
		locale: {
			type: String,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		readonly: {
			type: Boolean,
			required: !1
		},
		disableWheelChange: {
			type: Boolean,
			required: !1
		},
		invertWheelChange: {
			type: Boolean,
			required: !1
		},
		id: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "div"
		},
		name: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, { disabled: i, readonly: a, disableWheelChange: o, invertWheelChange: s, min: c, max: l, step: u, stepSnapping: d, formatOptions: f, id: p, locale: m } = /* @__PURE__ */ xn(n), h = Ef(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: n.modelValue === void 0
		}), { primitiveElement: g, currentElement: _ } = T_(), v = m_(m), y = Gg(_), b = /* @__PURE__ */ j(), x = q(() => !dp(h.value) && (oe(h.value) === c.value || c.value && !isNaN(h.value) ? Zw("-", h.value, u.value) < c.value : !1)), S = q(() => !dp(h.value) && (oe(h.value) === l.value || l.value && !isNaN(h.value) ? Zw("+", h.value, u.value) > l.value : !1));
		function C(e, t = 1) {
			if (n.focusOnChange && b.value?.focus(), n.disabled || n.readonly) return;
			let r = te.parse(b.value?.value ?? "");
			isNaN(r) ? h.value = c.value ?? 0 : e === "increase" ? h.value = oe(r + (u.value ?? 1) * t) : h.value = oe(r - (u.value ?? 1) * t);
		}
		function w(e = 1) {
			C("increase", e);
		}
		function T(e = 1) {
			C("decrease", e);
		}
		function ee(e) {
			e === "min" && c.value !== void 0 ? h.value = oe(c.value) : e === "max" && l.value !== void 0 && (h.value = oe(l.value));
		}
		let E = Yw(v, f), te = Xw(v, f), ne = q(() => E.resolvedOptions().maximumFractionDigits > 0 ? "decimal" : "numeric"), re = Yw(v, f), D = q(() => dp(h.value) || isNaN(h.value) ? "" : re.format(h.value));
		function ie(e) {
			return te.isValidPartialNumber(e, c.value, l.value);
		}
		function ae(e) {
			b.value && (b.value.value = e);
		}
		function oe(e) {
			let t;
			return t = u.value === void 0 || isNaN(u.value) || !d.value ? ap(e, c.value, l.value) : sp(e, c.value, l.value, u.value), t = te.parse(E.format(t)), t;
		}
		function se(e) {
			let t = te.parse(e);
			return h.value = isNaN(t) ? void 0 : oe(t), e.length ? ae(D.value) : ae(e);
		}
		return $w({
			modelValue: h,
			handleDecrease: T,
			handleIncrease: w,
			handleMinMaxValue: ee,
			inputMode: ne,
			inputEl: b,
			onInputElement: (e) => b.value = e,
			textValue: D,
			readonly: a,
			validate: ie,
			applyInputValue: se,
			disabled: i,
			disableWheelChange: o,
			invertWheelChange: s,
			max: l,
			min: c,
			isDecreaseDisabled: x,
			isIncreaseDisabled: S,
			id: p
		}), (e, t) => (z(), V(M(X), K(e.$attrs, {
			ref_key: "primitiveElement",
			ref: g,
			role: "group",
			as: e.as,
			"as-child": e.asChild,
			"data-disabled": M(i) ? "" : void 0,
			"data-readonly": M(a) ? "" : void 0
		}), {
			default: N(() => [L(e.$slots, "default", {
				modelValue: M(h),
				textValue: D.value,
				readonly: M(a)
			}), M(y) && e.name ? (z(), V(M(Zv), {
				key: 0,
				type: "text",
				value: M(h),
				name: e.name,
				disabled: M(i),
				readonly: M(a),
				required: e.required
			}, null, 8, [
				"value",
				"name",
				"disabled",
				"readonly",
				"required"
			])) : G("v-if", !0)]),
			_: 3
		}, 16, [
			"as",
			"as-child",
			"data-disabled",
			"data-readonly"
		]));
	}
}), tT = /* @__PURE__ */ F({
	__name: "NumberFieldDecrement",
	props: {
		disabled: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e, n = Qw(), r = q(() => n.disabled?.value || n.readonly.value || t.disabled || n.isDecreaseDisabled.value), { primitiveElement: i, currentElement: a } = T_(), { isPressed: o, onTrigger: s } = Jw({
			target: a,
			disabled: r
		});
		return s(() => {
			n.handleDecrease();
		}), (e, n) => (z(), V(M(X), K(t, {
			ref_key: "primitiveElement",
			ref: i,
			tabindex: "-1",
			"aria-label": "Decrease",
			type: e.as === "button" ? "button" : void 0,
			style: { userSelect: M(o) ? "none" : void 0 },
			disabled: r.value ? "" : void 0,
			"data-disabled": r.value ? "" : void 0,
			"data-pressed": M(o) ? "true" : void 0,
			onContextmenu: n[0] ||= Xl(() => {}, ["prevent"])
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, [
			"type",
			"style",
			"disabled",
			"data-disabled",
			"data-pressed"
		]));
	}
}), nT = /* @__PURE__ */ F({
	__name: "NumberFieldIncrement",
	props: {
		disabled: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e, n = Qw(), r = q(() => n.disabled?.value || n.readonly.value || t.disabled || n.isIncreaseDisabled.value), { primitiveElement: i, currentElement: a } = T_(), { isPressed: o, onTrigger: s } = Jw({
			target: a,
			disabled: r
		});
		return s(() => {
			n.handleIncrease();
		}), (e, n) => (z(), V(M(X), K(t, {
			ref_key: "primitiveElement",
			ref: i,
			tabindex: "-1",
			"aria-label": "Increase",
			type: e.as === "button" ? "button" : void 0,
			style: { userSelect: M(o) ? "none" : void 0 },
			disabled: r.value ? "" : void 0,
			"data-disabled": r.value ? "" : void 0,
			"data-pressed": M(o) ? "true" : void 0,
			onContextmenu: n[0] ||= Xl(() => {}, ["prevent"])
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, [
			"type",
			"style",
			"disabled",
			"data-disabled",
			"data-pressed"
		]));
	}
}), rT = /* @__PURE__ */ F({
	__name: "NumberFieldInput",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "input"
		}
	},
	setup(e) {
		let t = e, { primitiveElement: n, currentElement: r } = T_(), i = Qw();
		function a(e) {
			i.disableWheelChange.value || e.target === lp() && (Math.abs(e.deltaY) <= Math.abs(e.deltaX) || (e.preventDefault(), e.deltaY > 0 ? i.invertWheelChange.value ? i.handleDecrease() : i.handleIncrease() : e.deltaY < 0 && (i.invertWheelChange.value ? i.handleIncrease() : i.handleDecrease())));
		}
		I(() => {
			i.onInputElement(r.value);
		});
		let o = /* @__PURE__ */ j(i.textValue.value);
		P(() => i.textValue.value, () => {
			o.value = i.textValue.value;
		}, {
			immediate: !0,
			deep: !0
		});
		function s() {
			requestAnimationFrame(() => {
				o.value = i.textValue.value;
			});
		}
		return (e, r) => (z(), V(M(X), K(t, {
			id: M(i).id.value,
			ref_key: "primitiveElement",
			ref: n,
			value: o.value,
			role: "spinbutton",
			type: "text",
			tabindex: "0",
			inputmode: M(i).inputMode.value,
			disabled: M(i).disabled.value ? "" : void 0,
			"data-disabled": M(i).disabled.value ? "" : void 0,
			readonly: M(i).readonly.value ? "" : void 0,
			"data-readonly": M(i).readonly.value ? "" : void 0,
			autocomplete: "off",
			autocorrect: "off",
			spellcheck: "false",
			"aria-roledescription": "Number field",
			"aria-valuenow": M(i).modelValue.value,
			"aria-valuemin": M(i).min.value,
			"aria-valuemax": M(i).max.value,
			onKeydown: [
				r[0] ||= Ql(Xl((e) => M(i).handleIncrease(), ["prevent"]), ["up"]),
				r[1] ||= Ql(Xl((e) => M(i).handleDecrease(), ["prevent"]), ["down"]),
				r[2] ||= Ql(Xl((e) => M(i).handleIncrease(10), ["prevent"]), ["page-up"]),
				r[3] ||= Ql(Xl((e) => M(i).handleDecrease(10), ["prevent"]), ["page-down"]),
				r[4] ||= Ql(Xl((e) => M(i).handleMinMaxValue("min"), ["prevent"]), ["home"]),
				r[5] ||= Ql(Xl((e) => M(i).handleMinMaxValue("max"), ["prevent"]), ["end"]),
				r[8] ||= Ql((e) => M(i).applyInputValue(e.target?.value), ["enter"])
			],
			onWheel: a,
			onBeforeinput: r[6] ||= (e) => {
				let t = e.target, n = t.value.slice(0, t.selectionStart ?? void 0) + (e.data ?? "") + t.value.slice(t.selectionEnd ?? void 0);
				M(i).validate(n) || e.preventDefault();
			},
			onInput: r[7] ||= (e) => {
				o.value = e.target.value;
			},
			onChange: s,
			onBlur: r[9] ||= (e) => M(i).applyInputValue(e.target?.value)
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, [
			"id",
			"value",
			"inputmode",
			"disabled",
			"data-disabled",
			"readonly",
			"data-readonly",
			"aria-valuenow",
			"aria-valuemin",
			"aria-valuemax"
		]));
	}
}), iT = /* @__PURE__ */ F({
	__name: "PaginationEllipsis",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return Y(), (e, n) => (z(), V(M(X), K(t, { "data-type": "ellipsis" }), {
			default: N(() => [L(e.$slots, "default", {}, () => [n[0] ||= _s("…")])]),
			_: 3
		}, 16));
	}
}), [aT, oT] = /* @__PURE__ */ cp("PaginationRoot"), sT = /* @__PURE__ */ F({
	__name: "PaginationRoot",
	props: {
		page: {
			type: Number,
			required: !1
		},
		defaultPage: {
			type: Number,
			required: !1,
			default: 1
		},
		itemsPerPage: {
			type: Number,
			required: !0
		},
		total: {
			type: Number,
			required: !1,
			default: 0
		},
		siblingCount: {
			type: Number,
			required: !1,
			default: 2
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		showEdges: {
			type: Boolean,
			required: !1,
			default: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "nav"
		}
	},
	emits: ["update:page"],
	setup(e, { emit: t }) {
		let n = e, r = t, { siblingCount: i, disabled: a, showEdges: o } = /* @__PURE__ */ xn(n);
		Y();
		let s = Ef(n, "page", r, {
			defaultValue: n.defaultPage,
			passive: n.page === void 0
		}), c = q(() => Math.max(1, Math.ceil(n.total / (n.itemsPerPage || 1))));
		return oT({
			page: s,
			onPageChange(e) {
				s.value = e;
			},
			pageCount: c,
			siblingCount: i,
			disabled: a,
			showEdges: o
		}), (e, t) => (z(), V(M(X), {
			as: e.as,
			"as-child": e.asChild
		}, {
			default: N(() => [L(e.$slots, "default", {
				page: M(s),
				pageCount: c.value
			})]),
			_: 3
		}, 8, ["as", "as-child"]));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Pagination/utils.js
function cT(e, t) {
	let n = t - e + 1;
	return Array.from({ length: n }, (t, n) => n + e);
}
function lT(e) {
	return e.map((e) => typeof e == "number" ? {
		type: "page",
		value: e
	} : { type: "ellipsis" });
}
var uT = "ellipsis";
function dT(e, t, n, r) {
	let i = t, a = Math.max(e - n, 1), o = Math.min(e + n, i);
	if (r) {
		let e = Math.min(2 * n + 5, t) - 2, r = a > 3 && Math.abs(i - e - 1 + 1) > 2 && Math.abs(a - 1) > 2, s = o < i - 2 && Math.abs(i - e) > 2 && Math.abs(i - o) > 2;
		return !r && s ? [
			...cT(1, e),
			uT,
			i
		] : r && !s ? [
			1,
			uT,
			...cT(i - e + 1, i)
		] : r && s ? [
			1,
			uT,
			...cT(a, o),
			uT,
			i
		] : cT(1, i);
	} else {
		let r = n * 2 + 1;
		return t < r ? cT(1, i) : e <= n + 1 ? cT(1, r) : t - e <= n ? cT(t - r + 1, i) : cT(a, o);
	}
}
//#endregion
//#region node_modules/reka-ui/dist/Pagination/PaginationList.js
var fT = /* @__PURE__ */ F({
	__name: "PaginationList",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		Y();
		let n = aT(), r = q(() => lT(dT(n.page.value, n.pageCount.value, n.siblingCount.value, n.showEdges.value)));
		return (e, n) => (z(), V(M(X), A(W(t)), {
			default: N(() => [L(e.$slots, "default", { items: r.value })]),
			_: 3
		}, 16));
	}
}), pT = /* @__PURE__ */ F({
	__name: "PaginationListItem",
	props: {
		value: {
			type: Number,
			required: !0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e;
		Y();
		let n = aT(), r = q(() => n.page.value === t.value), i = q(() => n.disabled.value);
		return (e, a) => (z(), V(M(X), K(t, {
			"data-type": "page",
			"aria-label": `Page ${e.value}`,
			"aria-current": r.value ? "page" : void 0,
			"data-selected": r.value ? "true" : void 0,
			disabled: i.value,
			type: e.as === "button" ? "button" : void 0,
			onClick: a[0] ||= (t) => !i.value && M(n).onPageChange(e.value)
		}), {
			default: N(() => [L(e.$slots, "default", {}, () => [_s(De(e.value), 1)])]),
			_: 3
		}, 16, [
			"aria-label",
			"aria-current",
			"data-selected",
			"disabled",
			"type"
		]));
	}
}), mT = /* @__PURE__ */ F({
	__name: "PaginationNext",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e;
		Y();
		let n = aT(), r = q(() => n.page.value === n.pageCount.value || n.disabled.value);
		return (e, i) => (z(), V(M(X), K(t, {
			"aria-label": "Next Page",
			type: e.as === "button" ? "button" : void 0,
			disabled: r.value,
			onClick: i[0] ||= (e) => !r.value && M(n).onPageChange(M(n).page.value + 1)
		}), {
			default: N(() => [L(e.$slots, "default", {}, () => [i[1] ||= _s("Next page")])]),
			_: 3
		}, 16, ["type", "disabled"]));
	}
}), hT = /* @__PURE__ */ F({
	__name: "PaginationPrev",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e;
		Y();
		let n = aT(), r = q(() => n.page.value === 1 || n.disabled.value);
		return (e, i) => (z(), V(M(X), K(t, {
			"aria-label": "Previous Page",
			type: e.as === "button" ? "button" : void 0,
			disabled: r.value,
			onClick: i[0] ||= (e) => !r.value && M(n).onPageChange(M(n).page.value - 1)
		}), {
			default: N(() => [L(e.$slots, "default", {}, () => [i[1] ||= _s("Prev page")])]),
			_: 3
		}, 16, ["type", "disabled"]));
	}
}), [gT, _T] = /* @__PURE__ */ cp("PinInputRoot"), vT = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "PinInputRoot",
	props: {
		modelValue: {
			type: null,
			required: !1
		},
		defaultValue: {
			type: null,
			required: !1
		},
		placeholder: {
			type: String,
			required: !1,
			default: ""
		},
		mask: {
			type: Boolean,
			required: !1
		},
		otp: {
			type: Boolean,
			required: !1
		},
		type: {
			type: null,
			required: !1,
			default: "text"
		},
		dir: {
			type: String,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		id: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		name: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		}
	},
	emits: ["update:modelValue", "complete"],
	setup(e, { emit: t }) {
		let n = e, r = t, { mask: i, otp: a, placeholder: o, type: s, disabled: c, dir: l } = /* @__PURE__ */ xn(n), { forwardRef: u } = Y(), d = zg(l), f = Ef(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? [],
			passive: !0,
			deep: !0
		}), p = q(() => Array.isArray(f.value) ? [...f.value] : []), m = /* @__PURE__ */ j(/* @__PURE__ */ new Set());
		function h(e) {
			m.value.add(e);
		}
		let g = q(() => n.type === "number"), _ = q(() => p.value.filter((e) => !!e || g.value && e === 0).length === m.value.size);
		return P(f, () => {
			_.value && r("complete", f.value);
		}, { deep: !0 }), _T({
			modelValue: f,
			currentModelValue: p,
			mask: i,
			otp: a,
			placeholder: o,
			type: s,
			dir: d,
			disabled: c,
			isCompleted: _,
			inputElements: m,
			onInputElementChange: h,
			isNumericMode: g
		}), (e, t) => (z(), V(M(X), K(e.$attrs, {
			ref: M(u),
			dir: M(d),
			"data-complete": _.value ? "" : void 0,
			"data-disabled": M(c) ? "" : void 0
		}), {
			default: N(() => [L(e.$slots, "default", { modelValue: M(f) }), U(Zv, {
				id: e.id,
				as: "input",
				feature: "focusable",
				tabindex: "-1",
				value: p.value.join(""),
				name: e.name ?? "",
				disabled: M(c),
				required: e.required,
				onFocus: t[0] ||= (e) => Array.from(m.value)?.[0]?.focus()
			}, null, 8, [
				"id",
				"value",
				"name",
				"disabled",
				"required"
			])]),
			_: 3
		}, 16, [
			"dir",
			"data-complete",
			"data-disabled"
		]));
	}
}), yT = /* @__PURE__ */ F({
	__name: "PinInputInput",
	props: {
		index: {
			type: Number,
			required: !0
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "input"
		}
	},
	setup(e) {
		let t = e, n = gT(), r = q(() => [...n.inputElements.value]), i = q(() => n.currentModelValue.value[t.index]), a = q(() => t.disabled || n.disabled.value), o = q(() => n.otp.value), s = q(() => n.mask.value), c = /^\d*$/, l = /\D/g, { primitiveElement: u, currentElement: d } = T_();
		function f(e) {
			let i = e.target;
			if ((e.data?.length ?? 0) > 1) {
				b(i.value);
				return;
			}
			if (n.isNumericMode.value && !c.test(i.value)) {
				i.value = i.value.replace(l, "");
				return;
			}
			i.value = e.data || i.value.slice(-1), S(t.index, i.value);
			let a = r.value[t.index + 1];
			a && a.focus();
		}
		function p() {
			er(() => {
				let e = d.value;
				e && (!e.value && e === lp() ? e.placeholder = "" : e.placeholder = n.placeholder.value);
			});
		}
		function m(e) {
			hp(e, lp(), void 0, {
				itemsArray: r.value,
				focus: !0,
				loop: !1,
				arrowKeyOptions: "horizontal",
				dir: n.dir.value
			});
		}
		function h(e) {
			if (e.preventDefault(), e.target.value) S(t.index, "");
			else {
				let e = r.value[t.index - 1];
				e && (e.focus(), S(t.index - 1, ""));
			}
		}
		function g(e) {
			e.key === "Delete" && (e.preventDefault(), S(t.index, ""));
		}
		function _(e) {
			if (n.otp.value) {
				let e = r.value.findIndex((e, t) => n.currentModelValue.value[t] === "" || n.currentModelValue.value[t] === void 0);
				if (e !== -1 && e < t.index) {
					r.value[e].focus();
					return;
				}
			}
			e.target.setSelectionRange(1, 1), p();
		}
		function v(e) {
			p();
		}
		function y(e) {
			e.preventDefault();
			let t = e.clipboardData;
			if (!t) return;
			let r = t.getData("text");
			b(n.isNumericMode.value ? r.replace(l, "") : r);
		}
		function b(e) {
			let i = [...n.currentModelValue.value], a = e.length >= r.value.length ? 0 : t.index, o = Math.min(a + e.length, r.value.length);
			for (let t = a; t < o; t++) {
				let o = r.value[t], s = e[t - a];
				if (n.isNumericMode.value) {
					let e = Number.parseInt(s);
					if (Number.isNaN(e)) continue;
					i[t] = e;
				} else i[t] = s;
				o.focus();
			}
			n.modelValue.value = i, r.value[o]?.focus();
		}
		function x(e) {
			let t = e.length - 1;
			for (; t >= 0 && e[t] === "";) e.pop(), t--;
			return e;
		}
		function S(e, t) {
			let r = [...n.currentModelValue.value];
			if (n.isNumericMode.value) {
				let n = +t;
				t === "" || isNaN(n) ? delete r[e] : r[e] = n;
			} else r[e] = t;
			n.modelValue.value = x(r);
		}
		return P(i, p), I(() => {
			n.onInputElementChange(d.value);
		}), Yi(() => {
			n.inputElements?.value.delete(d.value);
		}), (e, t) => (z(), V(M(X), {
			ref_key: "primitiveElement",
			ref: u,
			autocapitalize: "none",
			as: e.as,
			"as-child": e.asChild,
			autocomplete: o.value ? "one-time-code" : "false",
			type: s.value ? "password" : "text",
			inputmode: M(n).isNumericMode.value ? "numeric" : "text",
			pattern: M(n).isNumericMode.value ? "[0-9]*" : void 0,
			placeholder: M(n).placeholder.value,
			value: i.value,
			disabled: a.value,
			"data-disabled": a.value ? "" : void 0,
			"data-complete": M(n).isCompleted.value ? "" : void 0,
			"aria-label": `pin input ${e.index + 1} of ${r.value.length}`,
			onInput: t[0] ||= (e) => f(e),
			onKeydown: [
				Ql(m, [
					"left",
					"right",
					"up",
					"down",
					"home",
					"end"
				]),
				Ql(h, ["backspace"]),
				Ql(g, ["delete"])
			],
			onFocus: _,
			onBlur: v,
			onPaste: y
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"autocomplete",
			"type",
			"inputmode",
			"pattern",
			"placeholder",
			"value",
			"disabled",
			"data-disabled",
			"data-complete",
			"aria-label"
		]));
	}
}), bT = 100, [xT, ST] = /* @__PURE__ */ cp("ProgressRoot"), CT = (e) => typeof e == "number";
function wT(e, t) {
	return dp(e) || CT(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${bT} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function TT(e) {
	return CT(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(`Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${bT}\`.`), bT);
}
var ET = /* @__PURE__ */ F({
	__name: "ProgressRoot",
	props: {
		modelValue: {
			type: [Number, null],
			required: !1
		},
		max: {
			type: Number,
			required: !1,
			default: bT
		},
		getValueLabel: {
			type: Function,
			required: !1,
			default: (e, t) => CT(e) ? `${Math.round(e / t * bT)}%` : void 0
		},
		getValueText: {
			type: Function,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["update:modelValue", "update:max"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		Y();
		let i = Ef(n, "modelValue", r, { passive: n.modelValue === void 0 }), a = Ef(n, "max", r, { passive: n.max === void 0 });
		P(() => i.value, async (e) => {
			let t = wT(e, n.max);
			t !== e && (await er(), i.value = t);
		}, { immediate: !0 }), P(() => n.max, (e) => {
			let t = TT(n.max);
			t !== e && (a.value = t);
		}, { immediate: !0 });
		let o = q(() => dp(i.value) ? "indeterminate" : i.value === a.value ? "complete" : "loading");
		return ST({
			modelValue: i,
			max: a,
			progressState: o
		}), (e, t) => (z(), V(M(X), {
			"as-child": e.asChild,
			as: e.as,
			"aria-valuemax": M(a),
			"aria-valuemin": 0,
			"aria-valuenow": CT(M(i)) ? M(i) : void 0,
			"aria-valuetext": e.getValueText?.(M(i), M(a)),
			"aria-label": e.getValueLabel(M(i), M(a)),
			role: "progressbar",
			"data-state": o.value,
			"data-value": M(i) ?? void 0,
			"data-max": M(a)
		}, {
			default: N(() => [L(e.$slots, "default", { modelValue: M(i) })]),
			_: 3
		}, 8, [
			"as-child",
			"as",
			"aria-valuemax",
			"aria-valuenow",
			"aria-valuetext",
			"aria-label",
			"data-state",
			"data-value",
			"data-max"
		]));
	}
}), DT = /* @__PURE__ */ F({
	__name: "ProgressIndicator",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = xT();
		return Y(), (e, r) => (z(), V(M(X), K(t, {
			"data-state": M(n).progressState.value,
			"data-value": M(n).modelValue?.value ?? void 0,
			"data-max": M(n).max.value
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, [
			"data-state",
			"data-value",
			"data-max"
		]));
	}
}), OT = "radio.select";
function kT(e, t, n) {
	up(OT, n, {
		originalEvent: e,
		value: t
	});
}
//#endregion
//#region node_modules/reka-ui/dist/RadioGroup/Radio.js
var AT = /* @__PURE__ */ F({
	__name: "Radio",
	props: {
		id: {
			type: String,
			required: !1
		},
		value: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		checked: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		},
		name: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		}
	},
	emits: ["update:checked", "select"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Ef(n, "checked", r, { passive: n.checked === void 0 }), { value: a } = /* @__PURE__ */ xn(n), { forwardRef: o, currentElement: s } = Y(), c = Gg(s), l = q(() => n.id && s.value ? document.querySelector(`[for="${n.id}"]`)?.innerText ?? n.value : void 0);
		function u(e) {
			n.disabled || kT(e, n.value, (e) => {
				r("select", e), !e?.defaultPrevented && (i.value = !0, c.value && e.stopPropagation());
			});
		}
		return (e, t) => (z(), V(M(X), K(e.$attrs, {
			id: e.id,
			ref: M(o),
			role: "radio",
			type: e.as === "button" ? "button" : void 0,
			as: e.as,
			"aria-checked": M(i),
			"aria-label": l.value,
			"as-child": e.asChild,
			disabled: e.disabled ? "" : void 0,
			"data-state": M(i) ? "checked" : "unchecked",
			"data-disabled": e.disabled ? "" : void 0,
			value: M(a),
			required: e.required,
			name: e.name,
			onClick: Xl(u, ["stop"])
		}), {
			default: N(() => [L(e.$slots, "default", { checked: M(i) }), M(c) && e.name ? (z(), V(M(Zv), {
				key: 0,
				type: "radio",
				tabindex: "-1",
				value: M(a),
				checked: !!M(i),
				name: e.name,
				disabled: e.disabled,
				required: e.required
			}, null, 8, [
				"value",
				"checked",
				"name",
				"disabled",
				"required"
			])) : G("v-if", !0)]),
			_: 3
		}, 16, [
			"id",
			"type",
			"as",
			"aria-checked",
			"aria-label",
			"as-child",
			"disabled",
			"data-state",
			"data-disabled",
			"value",
			"required",
			"name"
		]));
	}
}), [jT, MT] = /* @__PURE__ */ cp("RadioGroupRoot"), NT = /* @__PURE__ */ F({
	__name: "RadioGroupRoot",
	props: {
		modelValue: {
			type: null,
			required: !1
		},
		defaultValue: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		orientation: {
			type: String,
			required: !1,
			default: void 0
		},
		dir: {
			type: String,
			required: !1
		},
		loop: {
			type: Boolean,
			required: !1,
			default: !0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		name: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, { forwardRef: i, currentElement: a } = Y(), o = Ef(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: n.modelValue === void 0
		}), { disabled: s, loop: c, orientation: l, name: u, required: d, dir: f } = /* @__PURE__ */ xn(n), p = zg(f), m = Gg(a);
		return MT({
			modelValue: o,
			changeModelValue: (e) => {
				o.value = e;
			},
			disabled: s,
			loop: c,
			orientation: l,
			name: u?.value,
			required: d
		}), (e, t) => (z(), V(M(yS), {
			"as-child": "",
			orientation: M(l),
			dir: M(p),
			loop: M(c)
		}, {
			default: N(() => [U(M(X), {
				ref: M(i),
				role: "radiogroup",
				"data-disabled": M(s) ? "" : void 0,
				"as-child": e.asChild,
				as: e.as,
				"aria-orientation": M(l),
				"aria-required": M(d),
				dir: M(p)
			}, {
				default: N(() => [L(e.$slots, "default", { modelValue: M(o) }), M(m) && M(u) ? (z(), V(M(Zv), {
					key: 0,
					required: M(d),
					disabled: M(s),
					value: M(o),
					name: M(u)
				}, null, 8, [
					"required",
					"disabled",
					"value",
					"name"
				])) : G("v-if", !0)]),
				_: 3
			}, 8, [
				"data-disabled",
				"as-child",
				"as",
				"aria-orientation",
				"aria-required",
				"dir"
			])]),
			_: 3
		}, 8, [
			"orientation",
			"dir",
			"loop"
		]));
	}
}), [PT, FT] = /* @__PURE__ */ cp("RadioGroupItem"), IT = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "RadioGroupItem",
	props: {
		id: {
			type: String,
			required: !1
		},
		value: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		},
		name: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = t, { forwardRef: i, currentElement: a } = Y(), o = jT(), s = q(() => o.disabled.value || n.disabled), c = q(() => o.required.value || n.required), l = q(() => tp(o.modelValue?.value, n.value));
		FT({
			disabled: s,
			checked: l
		});
		let u = /* @__PURE__ */ j(!1), d = [
			"ArrowUp",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight"
		];
		cf("keydown", (e) => {
			d.includes(e.key) && (u.value = !0);
		}), cf("keyup", () => {
			u.value = !1;
		});
		function f() {
			setTimeout(() => {
				u.value && a.value?.click();
			}, 0);
		}
		return (e, t) => (z(), V(M(bS), {
			checked: l.value,
			disabled: s.value,
			"as-child": "",
			focusable: !s.value,
			active: l.value
		}, {
			default: N(() => [U(AT, K({
				...e.$attrs,
				...n
			}, {
				ref: M(i),
				checked: l.value,
				required: c.value,
				disabled: s.value,
				"onUpdate:checked": t[0] ||= (t) => M(o).changeModelValue(e.value),
				onSelect: t[1] ||= (e) => r("select", e),
				onKeydown: t[2] ||= Ql(Xl(() => {}, ["prevent"]), ["enter"]),
				onFocus: f
			}), {
				default: N(() => [L(e.$slots, "default", {
					checked: l.value,
					required: c.value,
					disabled: s.value
				})]),
				_: 3
			}, 16, [
				"checked",
				"required",
				"disabled"
			])]),
			_: 3
		}, 8, [
			"checked",
			"disabled",
			"focusable",
			"active"
		]));
	}
}), LT = /* @__PURE__ */ F({
	__name: "RadioGroupIndicator",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		let { forwardRef: t } = Y(), n = PT();
		return (e, r) => (z(), V(M(S_), { present: e.forceMount || M(n).checked.value }, {
			default: N(() => [U(M(X), K({
				ref: M(t),
				"data-state": M(n).checked.value ? "checked" : "unchecked",
				"data-disabled": M(n).disabled.value ? "" : void 0,
				"as-child": e.asChild,
				as: e.as
			}, e.$attrs), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, [
				"data-state",
				"data-disabled",
				"as-child",
				"as"
			])]),
			_: 3
		}, 8, ["present"]));
	}
}), [RT, zT] = /* @__PURE__ */ cp("ScrollAreaRoot"), BT = /* @__PURE__ */ F({
	__name: "ScrollAreaRoot",
	props: {
		type: {
			type: String,
			required: !1,
			default: "hover"
		},
		dir: {
			type: String,
			required: !1
		},
		scrollHideDelay: {
			type: Number,
			required: !1,
			default: 600
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e, { expose: t }) {
		let n = e, r = /* @__PURE__ */ j(0), i = /* @__PURE__ */ j(0), a = /* @__PURE__ */ j(), o = /* @__PURE__ */ j(), s = /* @__PURE__ */ j(), c = /* @__PURE__ */ j(), l = /* @__PURE__ */ j(!1), u = /* @__PURE__ */ j(!1), { type: d, dir: f, scrollHideDelay: p } = /* @__PURE__ */ xn(n), m = zg(f);
		function h() {
			a.value?.scrollTo({ top: 0 });
		}
		function g() {
			a.value?.scrollTo({
				top: 0,
				left: 0
			});
		}
		t({
			viewport: a,
			scrollTop: h,
			scrollTopLeft: g
		});
		let { forwardRef: _, currentElement: v } = Y();
		return zT({
			type: d,
			dir: m,
			scrollHideDelay: p,
			scrollArea: v,
			viewport: a,
			onViewportChange: (e) => {
				a.value = e || void 0;
			},
			content: o,
			onContentChange: (e) => {
				o.value = e;
			},
			scrollbarX: s,
			scrollbarXEnabled: l,
			scrollbarY: c,
			scrollbarYEnabled: u,
			onScrollbarXChange: (e) => {
				s.value = e || void 0;
			},
			onScrollbarYChange: (e) => {
				c.value = e || void 0;
			},
			onScrollbarXEnabledChange: (e) => {
				l.value = e;
			},
			onScrollbarYEnabledChange: (e) => {
				u.value = e;
			},
			onCornerWidthChange: (e) => {
				r.value = e;
			},
			onCornerHeightChange: (e) => {
				i.value = e;
			}
		}), (e, t) => (z(), V(M(X), {
			ref: M(_),
			"as-child": n.asChild,
			as: e.as,
			dir: M(m),
			style: he({
				position: "relative",
				"--reka-scroll-area-corner-width": `${r.value}px`,
				"--reka-scroll-area-corner-height": `${i.value}px`
			})
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as-child",
			"as",
			"dir",
			"style"
		]));
	}
}), VT = /* @__PURE__ */ F({
	__name: "ScrollAreaCornerImpl",
	setup(e) {
		let t = RT(), n = /* @__PURE__ */ j(0), r = /* @__PURE__ */ j(0), i = q(() => !!n.value && !!r.value);
		function a() {
			let e = t.scrollbarX.value?.offsetHeight || 0;
			t.onCornerHeightChange(e), r.value = e;
		}
		function o() {
			let e = t.scrollbarY.value?.offsetWidth || 0;
			t.onCornerWidthChange(e), n.value = e;
		}
		return xf(t.scrollbarX.value, a), xf(t.scrollbarY.value, o), P(() => t.scrollbarX.value, a), P(() => t.scrollbarY.value, o), (e, a) => i.value ? (z(), V(M(X), K({
			key: 0,
			style: {
				width: `${n.value}px`,
				height: `${r.value}px`,
				position: "absolute",
				right: M(t).dir.value === "ltr" ? 0 : void 0,
				left: M(t).dir.value === "rtl" ? 0 : void 0,
				bottom: 0
			}
		}, e.$parent?.$props), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["style"])) : G("v-if", !0);
	}
}), HT = /* @__PURE__ */ F({
	__name: "ScrollAreaCorner",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, { forwardRef: n } = Y(), r = RT(), i = q(() => !!r.scrollbarX.value && !!r.scrollbarY.value), a = q(() => r.type.value !== "scroll" && i.value);
		return (e, r) => a.value ? (z(), V(VT, K({ key: 0 }, t, { ref: M(n) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16)) : G("v-if", !0);
	}
});
//#endregion
//#region node_modules/reka-ui/dist/ScrollArea/utils.js
function UT(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
function WT(e) {
	let t = GT(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
	return Math.max(r, 18);
}
function GT(e, t) {
	let n = e / t;
	return Number.isNaN(n) ? 0 : n;
}
function KT(e, t = () => {}) {
	let n = {
		left: e.scrollLeft,
		top: e.scrollTop
	}, r = 0;
	return (function i() {
		let a = {
			left: e.scrollLeft,
			top: e.scrollTop
		}, o = n.left !== a.left, s = n.top !== a.top;
		(o || s) && t(), n = a, r = window.requestAnimationFrame(i);
	})(), () => window.cancelAnimationFrame(r);
}
function qT(e, t, n = "ltr") {
	let r = WT(t), i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - i, o = t.content - t.viewport, s = a - r, c = n === "ltr" ? [0, o] : [o * -1, 0], l = ap(e, c[0], c[1]);
	return UT([0, o], [0, s])(l);
}
function JT(e) {
	return e ? Number.parseInt(e, 10) : 0;
}
function YT(e, t, n, r = "ltr") {
	let i = WT(n), a = i / 2, o = t || a, s = i - o, c = n.scrollbar.paddingStart + o, l = n.scrollbar.size - n.scrollbar.paddingEnd - s, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
	return UT([c, l], d)(e);
}
function XT(e, t) {
	return e > 0 && e < t;
}
//#endregion
//#region node_modules/reka-ui/dist/ScrollArea/ScrollAreaScrollbarX.js
var ZT = /* @__PURE__ */ F({
	__name: "ScrollAreaScrollbarX",
	setup(e) {
		let t = RT(), n = oE(), { forwardRef: r, currentElement: i } = Y();
		I(() => {
			i.value && t.onScrollbarXChange(i.value);
		});
		let a = q(() => n.sizes.value);
		return (e, i) => (z(), V(lE, {
			ref: M(r),
			"is-horizontal": !0,
			"data-orientation": "horizontal",
			style: he({
				bottom: 0,
				left: M(t).dir.value === "rtl" ? "var(--reka-scroll-area-corner-width)" : 0,
				right: M(t).dir.value === "ltr" ? "var(--reka-scroll-area-corner-width)" : 0,
				"--reka-scroll-area-thumb-width": a.value ? `${M(WT)(a.value)}px` : void 0
			}),
			onOnDragScroll: i[0] ||= (e) => M(n).onDragScroll(e.x)
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, ["style"]));
	}
}), QT = /* @__PURE__ */ F({
	__name: "ScrollAreaScrollbarY",
	setup(e) {
		let t = RT(), n = oE(), { forwardRef: r, currentElement: i } = Y();
		I(() => {
			i.value && t.onScrollbarYChange(i.value);
		});
		let a = q(() => n.sizes.value);
		return (e, i) => (z(), V(lE, {
			ref: M(r),
			"is-horizontal": !1,
			"data-orientation": "vertical",
			style: he({
				top: 0,
				right: M(t).dir.value === "ltr" ? 0 : void 0,
				left: M(t).dir.value === "rtl" ? 0 : void 0,
				bottom: "var(--reka-scroll-area-corner-height)",
				"--reka-scroll-area-thumb-height": a.value ? `${M(WT)(a.value)}px` : void 0
			}),
			onOnDragScroll: i[0] ||= (e) => M(n).onDragScroll(e.y)
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, ["style"]));
	}
}), $T = /* @__PURE__ */ F({
	__name: "ScrollAreaScrollbarAuto",
	props: { forceMount: {
		type: Boolean,
		required: !1
	} },
	setup(e) {
		let t = RT(), n = rE(), { forwardRef: r } = Y(), i = /* @__PURE__ */ j(!1), a = Jd(() => {
			if (t.viewport.value) {
				let e = t.viewport.value.offsetWidth < t.viewport.value.scrollWidth, r = t.viewport.value.offsetHeight < t.viewport.value.scrollHeight;
				i.value = n.isHorizontal.value ? e : r;
			}
		}, 10);
		return I(() => a()), xf(t.viewport, a), xf(t.content, a), (e, t) => (z(), V(M(S_), { present: e.forceMount || i.value }, {
			default: N(() => [U(cE, K(e.$attrs, {
				ref: M(r),
				"data-state": i.value ? "visible" : "hidden"
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}, 8, ["present"]));
	}
}), eE = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "ScrollAreaScrollbarGlimpse",
	props: { forceMount: {
		type: Boolean,
		required: !1
	} },
	setup(e) {
		let t = RT(), n = rE(), { forwardRef: r } = Y(), { state: i, dispatch: a } = g_("hidden", {
			hidden: {
				POINTER_ENTER: "glimpse",
				SCROLL: "scrolling"
			},
			glimpse: {
				HIDE: "hidden",
				POINTER_LEAVE: "hidden",
				SCROLL: "scrolling",
				POINTER_ENTER: "glimpse"
			},
			scrolling: {
				SCROLL_END: "idle",
				POINTER_ENTER: "interacting"
			},
			interacting: {
				SCROLL: "interacting",
				POINTER_LEAVE: "idle"
			},
			idle: {
				HIDE: "hidden",
				SCROLL: "scrolling",
				POINTER_ENTER: "interacting"
			}
		}), o = q(() => i.value !== "hidden");
		function s() {
			a("POINTER_ENTER");
		}
		function c() {
			a("POINTER_LEAVE");
		}
		let l = Jd(() => a("SCROLL_END"), 100);
		return Tr((e) => {
			if (i.value === "glimpse") {
				let n = window.setTimeout(a, t.scrollHideDelay.value, "HIDE");
				e(() => {
					window.clearTimeout(n);
				});
			}
		}), Tr((e) => {
			if (i.value === "idle") {
				let n = window.setTimeout(a, t.scrollHideDelay.value, "HIDE");
				e(() => {
					window.clearTimeout(n);
				});
			}
		}), Tr((e) => {
			let r = t.viewport.value, i = n.isHorizontal.value ? "scrollLeft" : "scrollTop";
			if (r) {
				let t = r[i], n = () => {
					let e = r[i];
					t !== e && (a("SCROLL"), l()), t = e;
				};
				r.addEventListener("scroll", n), e(() => {
					r.removeEventListener("scroll", n);
				});
			}
		}), I(() => {
			let e = t.scrollArea.value;
			e && (e.addEventListener("pointerenter", s), e.addEventListener("pointerleave", c));
		}), Yi(() => {
			let e = t.scrollArea.value;
			e && (e.removeEventListener("pointerenter", s), e.removeEventListener("pointerleave", c));
		}), (e, t) => (z(), V(M(S_), { present: e.forceMount || o.value }, {
			default: N(() => [U($T, K(e.$attrs, {
				ref: M(r),
				"data-state": o.value ? "visible" : "hidden"
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}, 8, ["present"]));
	}
}), tE = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "ScrollAreaScrollbarHover",
	props: { forceMount: {
		type: Boolean,
		required: !1
	} },
	setup(e) {
		let t = RT(), { forwardRef: n } = Y(), r, i = /* @__PURE__ */ j(!1);
		function a() {
			window.clearTimeout(r), i.value = !0;
		}
		function o() {
			r = window.setTimeout(() => {
				i.value = !1;
			}, t.scrollHideDelay.value);
		}
		return I(() => {
			let e = t.scrollArea.value;
			e && (e.addEventListener("pointerenter", a), e.addEventListener("pointerleave", o));
		}), Yi(() => {
			let e = t.scrollArea.value;
			e && (window.clearTimeout(r), e.removeEventListener("pointerenter", a), e.removeEventListener("pointerleave", o));
		}), (e, t) => (z(), V(M(S_), { present: e.forceMount || i.value }, {
			default: N(() => [U($T, K(e.$attrs, {
				ref: M(n),
				"data-state": i.value ? "visible" : "hidden"
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}, 8, ["present"]));
	}
}), nE = /* @__PURE__ */ F({
	__name: "ScrollAreaScrollbarScroll",
	props: { forceMount: {
		type: Boolean,
		required: !1
	} },
	setup(e) {
		let t = RT(), n = rE(), { forwardRef: r } = Y(), { state: i, dispatch: a } = g_("hidden", {
			hidden: { SCROLL: "scrolling" },
			scrolling: {
				SCROLL_END: "idle",
				POINTER_ENTER: "interacting"
			},
			interacting: {
				SCROLL: "interacting",
				POINTER_LEAVE: "idle"
			},
			idle: {
				HIDE: "hidden",
				SCROLL: "scrolling",
				POINTER_ENTER: "interacting"
			}
		}), o = q(() => i.value !== "hidden");
		Tr((e) => {
			if (i.value === "idle") {
				let n = window.setTimeout(a, t.scrollHideDelay.value, "HIDE");
				e(() => {
					window.clearTimeout(n);
				});
			}
		});
		let s = Jd(() => a("SCROLL_END"), 100);
		return Tr((e) => {
			let r = t.viewport.value, i = n.isHorizontal.value ? "scrollLeft" : "scrollTop";
			if (r) {
				let t = r[i], n = () => {
					let e = r[i];
					t !== e && (a("SCROLL"), s()), t = e;
				};
				r.addEventListener("scroll", n), e(() => {
					r.removeEventListener("scroll", n);
				});
			}
		}), (e, t) => (z(), V(M(S_), { present: e.forceMount || o.value }, {
			default: N(() => [U(cE, K(e.$attrs, {
				ref: M(r),
				"data-state": o.value ? "visible" : "hidden"
			}), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}, 8, ["present"]));
	}
}), [rE, iE] = /* @__PURE__ */ cp("ScrollAreaScrollbar"), aE = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "ScrollAreaScrollbar",
	props: {
		orientation: {
			type: String,
			required: !1,
			default: "vertical"
		},
		forceMount: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "div"
		}
	},
	setup(e) {
		let t = e, { forwardRef: n } = Y(), r = RT(), i = q(() => t.orientation === "horizontal");
		P(i, () => {
			i.value ? r.onScrollbarXEnabledChange(!0) : r.onScrollbarYEnabledChange(!0);
		}, { immediate: !0 }), Yi(() => {
			r.onScrollbarXEnabledChange(!1), r.onScrollbarYEnabledChange(!1);
		});
		let { orientation: a, forceMount: o, asChild: s, as: c } = /* @__PURE__ */ xn(t);
		return iE({
			orientation: a,
			forceMount: o,
			isHorizontal: i,
			as: c,
			asChild: s
		}), (e, t) => M(r).type.value === "hover" ? (z(), V(tE, K({ key: 0 }, e.$attrs, {
			ref: M(n),
			"force-mount": M(o)
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["force-mount"])) : M(r).type.value === "scroll" ? (z(), V(nE, K({ key: 1 }, e.$attrs, {
			ref: M(n),
			"force-mount": M(o)
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["force-mount"])) : M(r).type.value === "glimpse" ? (z(), V(eE, K({ key: 2 }, e.$attrs, {
			ref: M(n),
			"force-mount": M(o)
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["force-mount"])) : M(r).type.value === "auto" ? (z(), V($T, K({ key: 3 }, e.$attrs, {
			ref: M(n),
			"force-mount": M(o)
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["force-mount"])) : M(r).type.value === "always" ? (z(), V(cE, K({ key: 4 }, e.$attrs, {
			ref: M(n),
			"data-state": "visible"
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16)) : G("v-if", !0);
	}
}), [oE, sE] = /* @__PURE__ */ cp("ScrollAreaScrollbarVisible"), cE = /* @__PURE__ */ F({
	__name: "ScrollAreaScrollbarVisible",
	setup(e) {
		let t = RT(), n = rE(), { forwardRef: r } = Y(), i = /* @__PURE__ */ j({
			content: 0,
			viewport: 0,
			scrollbar: {
				size: 0,
				paddingStart: 0,
				paddingEnd: 0
			}
		}), a = q(() => {
			let e = GT(i.value.viewport, i.value.content);
			return e > 0 && e < 1;
		}), o = /* @__PURE__ */ j(), s = /* @__PURE__ */ j(0);
		function c(e, n) {
			if (p.value) {
				let r = t.viewport.value.scrollLeft + e.deltaY;
				t.viewport.value.scrollLeft = r, XT(r, n) && e.preventDefault();
			} else {
				let r = t.viewport.value.scrollTop + e.deltaY;
				t.viewport.value.scrollTop = r, XT(r, n) && e.preventDefault();
			}
		}
		function l(e, t) {
			p.value ? s.value = t.x : s.value = t.y;
		}
		function u(e) {
			s.value = 0;
		}
		function d(e) {
			i.value = e;
		}
		function f(e, t) {
			return YT(e, s.value, i.value, t);
		}
		let p = q(() => n.isHorizontal.value);
		function m(e) {
			p.value ? t.viewport.value.scrollLeft = f(e, t.dir.value) : t.viewport.value.scrollTop = f(e);
		}
		function h() {
			if (p.value) {
				if (t.viewport.value && o.value) {
					let e = t.viewport.value.scrollLeft, n = qT(e, i.value, t.dir.value);
					o.value.style.transform = `translate3d(${n}px, 0, 0)`;
				}
			} else if (t.viewport.value && o.value) {
				let e = t.viewport.value.scrollTop, n = qT(e, i.value);
				o.value.style.transform = `translate3d(0, ${n}px, 0)`;
			}
		}
		function g(e) {
			o.value = e;
		}
		return sE({
			sizes: i,
			hasThumb: a,
			handleWheelScroll: c,
			handleThumbDown: l,
			handleThumbUp: u,
			handleSizeChange: d,
			onThumbPositionChange: h,
			onThumbChange: g,
			onDragScroll: m
		}), (e, t) => p.value ? (z(), V(ZT, K({ key: 0 }, e.$attrs, { ref: M(r) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16)) : (z(), V(QT, K({ key: 1 }, e.$attrs, { ref: M(r) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), lE = /* @__PURE__ */ F({
	__name: "ScrollAreaScrollbarImpl",
	props: { isHorizontal: {
		type: Boolean,
		required: !0
	} },
	emits: [
		"onDragScroll",
		"onWheelScroll",
		"onThumbPointerDown"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = RT(), a = oE(), o = rE(), { forwardRef: s, currentElement: c } = Y(), l = /* @__PURE__ */ j(""), u = /* @__PURE__ */ j();
		function d(e) {
			u.value && r("onDragScroll", {
				x: e.clientX - u.value?.left,
				y: e.clientY - u.value?.top
			});
		}
		function f(e) {
			e.button === 0 && (e.target.setPointerCapture(e.pointerId), u.value = c.value.getBoundingClientRect(), l.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", i.viewport && (i.viewport.value.style.scrollBehavior = "auto"), d(e));
		}
		function p(e) {
			d(e);
		}
		function m(e) {
			let t = e.target;
			t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = l.value, i.viewport && (i.viewport.value.style.scrollBehavior = ""), u.value = void 0;
		}
		function h(e) {
			let t = e.target, n = c.value?.contains(t), r = a.sizes.value.content - a.sizes.value.viewport;
			n && a.handleWheelScroll(e, r);
		}
		I(() => {
			document.addEventListener("wheel", h, { passive: !1 });
		}), Yi(() => {
			document.removeEventListener("wheel", h);
		});
		function g() {
			c.value && (n.isHorizontal ? a.handleSizeChange({
				content: i.viewport.value?.scrollWidth ?? 0,
				viewport: i.viewport.value?.offsetWidth ?? 0,
				scrollbar: {
					size: c.value.clientWidth ?? 0,
					paddingStart: JT(getComputedStyle(c.value).paddingLeft),
					paddingEnd: JT(getComputedStyle(c.value).paddingRight)
				}
			}) : a.handleSizeChange({
				content: i.viewport.value?.scrollHeight ?? 0,
				viewport: i.viewport.value?.offsetHeight ?? 0,
				scrollbar: {
					size: c.value?.clientHeight ?? 0,
					paddingStart: JT(getComputedStyle(c.value).paddingTop),
					paddingEnd: JT(getComputedStyle(c.value).paddingBottom)
				}
			}), a.onThumbPositionChange());
		}
		return xf(c, g), xf(i.content, g), (e, t) => (z(), V(M(X), {
			ref: M(s),
			style: { position: "absolute" },
			"data-scrollbarimpl": "",
			as: M(o).as.value,
			"as-child": M(o).asChild.value,
			onPointerdown: f,
			onPointermove: p,
			onPointerup: m
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, ["as", "as-child"]));
	}
}), uE = /* @__PURE__ */ F({
	__name: "ScrollAreaThumb",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = RT(), r = oE();
		function i(e) {
			let t = e.target.getBoundingClientRect(), n = e.clientX - t.left, i = e.clientY - t.top;
			r.handleThumbDown(e, {
				x: n,
				y: i
			});
		}
		function a(e) {
			r.handleThumbUp(e);
		}
		let { forwardRef: o, currentElement: s } = Y(), c = /* @__PURE__ */ j(), l = q(() => n.viewport.value);
		function u() {
			c.value || (c.value = KT(l.value, r.onThumbPositionChange), r.onThumbPositionChange());
		}
		return tf(q(() => r.sizes.value), () => {
			r.onThumbChange(s.value), l.value && (r.onThumbPositionChange(), l.value.addEventListener("scroll", u));
		}), Yi(() => {
			l.value.removeEventListener("scroll", u), n.viewport.value?.removeEventListener("scroll", u);
		}), (e, n) => (z(), V(M(X), {
			ref: M(o),
			"data-state": M(r).hasThumb ? "visible" : "hidden",
			style: {
				width: "var(--reka-scroll-area-thumb-width)",
				height: "var(--reka-scroll-area-thumb-height)"
			},
			"as-child": t.asChild,
			as: e.as,
			onPointerdown: i,
			onPointerup: a
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"data-state",
			"as-child",
			"as"
		]));
	}
}), dE = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "ScrollAreaViewport",
	props: {
		nonce: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e, { expose: t }) {
		let n = e, { nonce: r } = /* @__PURE__ */ xn(n), i = Vx(r), a = RT(), o = /* @__PURE__ */ j();
		I(() => {
			a.onViewportChange(o.value), a.onContentChange(c.value);
		}), t({ viewportElement: o });
		let { forwardRef: s, currentElement: c } = Y();
		return (e, t) => (z(), B(R, null, [H("div", K({
			ref_key: "viewportElement",
			ref: o,
			"data-reka-scroll-area-viewport": "",
			style: {
				overflowX: M(a).scrollbarXEnabled.value ? "scroll" : "hidden",
				overflowY: M(a).scrollbarYEnabled.value ? "scroll" : "hidden"
			}
		}, e.$attrs, { tabindex: 0 }), [U(M(X), {
			ref: M(s),
			style: he({ minWidth: M(a).scrollbarXEnabled.value ? "fit-content" : void 0 }),
			"as-child": n.asChild,
			as: e.as
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"style",
			"as-child",
			"as"
		])], 16), U(M(X), {
			as: "style",
			nonce: M(i)
		}, {
			default: N(() => t[0] ||= [_s(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-reka-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")]),
			_: 1,
			__: [0]
		}, 8, ["nonce"])], 64));
	}
}), fE = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], pE = [" ", "Enter"];
function mE(e, t, n) {
	return e === void 0 ? !1 : Array.isArray(e) ? e.some((e) => hE(e, t, n)) : hE(e, t, n);
}
function hE(e, t, n) {
	return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? e?.[n] === t?.[n] : tp(e, t);
}
function gE(e) {
	return e == null || e === "" || Array.isArray(e) && e.length === 0;
}
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectRoot.js
var _E = {
	key: 0,
	value: ""
}, [vE, yE] = /* @__PURE__ */ cp("SelectRoot"), bE = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "SelectRoot",
	props: {
		open: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		defaultOpen: {
			type: Boolean,
			required: !1
		},
		defaultValue: {
			type: null,
			required: !1
		},
		modelValue: {
			type: null,
			required: !1,
			default: void 0
		},
		by: {
			type: [String, Function],
			required: !1
		},
		dir: {
			type: String,
			required: !1
		},
		multiple: {
			type: Boolean,
			required: !1
		},
		autocomplete: {
			type: String,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		name: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		}
	},
	emits: ["update:modelValue", "update:open"],
	setup(e, { emit: t }) {
		let n = e, r = t, { required: i, disabled: a, multiple: o, dir: s } = /* @__PURE__ */ xn(n), c = Ef(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? (o.value ? [] : void 0),
			passive: n.modelValue === void 0,
			deep: !0
		}), l = Ef(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		}), u = /* @__PURE__ */ j(), d = /* @__PURE__ */ j(), f = /* @__PURE__ */ j({
			x: 0,
			y: 0
		}), p = q(() => o.value && Array.isArray(c.value) ? c.value?.length === 0 : dp(c.value));
		Jv({ isProvider: !0 });
		let m = zg(s), h = Gg(u), g = /* @__PURE__ */ j(/* @__PURE__ */ new Set()), _ = q(() => Array.from(g.value).map((e) => e.value).join(";"));
		function v(e) {
			if (o.value) {
				let t = Array.isArray(c.value) ? [...c.value] : [], r = t.findIndex((t) => hE(t, e, n.by));
				r === -1 ? t.push(e) : t.splice(r, 1), c.value = [...t];
			} else c.value = e;
		}
		function y(e) {
			return Array.from(g.value).find((t) => mE(e, t.value, n.by));
		}
		return yE({
			triggerElement: u,
			onTriggerChange: (e) => {
				u.value = e;
			},
			valueElement: d,
			onValueElementChange: (e) => {
				d.value = e;
			},
			contentId: "",
			modelValue: c,
			onValueChange: v,
			by: n.by,
			open: l,
			multiple: o,
			required: i,
			onOpenChange: (e) => {
				l.value = e;
			},
			dir: m,
			triggerPointerDownPosRef: f,
			disabled: a,
			isEmptyModelValue: p,
			optionsSet: g,
			onOptionAdd: (e) => {
				let t = y(e.value);
				t && g.value.delete(t), g.value.add(e);
			},
			onOptionRemove: (e) => {
				let t = y(e.value);
				t && g.value.delete(t);
			}
		}), (e, t) => (z(), V(M(Sy), null, {
			default: N(() => [L(e.$slots, "default", {
				modelValue: M(c),
				open: M(l)
			}), M(h) && e.name ? (z(), V(xE, {
				key: _.value,
				"aria-hidden": "true",
				tabindex: "-1",
				multiple: M(o),
				required: M(i),
				name: e.name,
				autocomplete: e.autocomplete,
				disabled: M(a),
				value: M(c)
			}, {
				default: N(() => [M(dp)(M(c)) ? (z(), B("option", _E)) : G("v-if", !0), (z(!0), B(R, null, ca(Array.from(g.value), (e) => (z(), B("option", K({ key: e.value ?? "" }, { ref_for: !0 }, e), null, 16))), 128))]),
				_: 1
			}, 8, [
				"multiple",
				"required",
				"name",
				"autocomplete",
				"disabled",
				"value"
			])) : G("v-if", !0)]),
			_: 3
		}));
	}
}), xE = /* @__PURE__ */ F({
	__name: "BubbleSelect",
	props: {
		autocomplete: {
			type: String,
			required: !1
		},
		autofocus: {
			type: Boolean,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		form: {
			type: String,
			required: !1
		},
		multiple: {
			type: Boolean,
			required: !1
		},
		name: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		},
		size: {
			type: Number,
			required: !1
		},
		value: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ j(), r = vE();
		P(() => t.value, (e, t) => {
			let r = window.HTMLSelectElement.prototype, i = Object.getOwnPropertyDescriptor(r, "value").set;
			if (e !== t && i && n.value) {
				let t = new Event("change", { bubbles: !0 });
				i.call(n.value, e), n.value.dispatchEvent(t);
			}
		});
		function i(e) {
			r.onValueChange(e.target.value);
		}
		return (e, r) => (z(), V(M(Yv), { "as-child": "" }, {
			default: N(() => [H("select", K({
				ref_key: "selectElement",
				ref: n
			}, t, { onInput: i }), [L(e.$slots, "default")], 16)]),
			_: 3
		}));
	}
}), SE = /* @__PURE__ */ F({
	__name: "SelectPopperPosition",
	props: {
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1,
			default: "start"
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1,
			default: 10
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = Kg(e);
		return (e, n) => (z(), V(M(Rx), K(M(t), { style: {
			boxSizing: "border-box",
			"--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
			"--reka-select-content-available-width": "var(--reka-popper-available-width)",
			"--reka-select-content-available-height": "var(--reka-popper-available-height)",
			"--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
			"--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
		} }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), CE = {
	onViewportChange: () => {},
	itemTextRefCallback: () => {},
	itemRefCallback: () => {}
}, [wE, TE] = /* @__PURE__ */ cp("SelectContent"), EE = /* @__PURE__ */ F({
	__name: "SelectContentImpl",
	props: {
		position: {
			type: String,
			required: !1,
			default: "item-aligned"
		},
		bodyLock: {
			type: Boolean,
			required: !1,
			default: !0
		},
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1,
			default: "start"
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1,
			default: !0
		}
	},
	emits: [
		"closeAutoFocus",
		"escapeKeyDown",
		"pointerDownOutside"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = vE();
		Ug(), wp(n.bodyLock);
		let { CollectionSlot: a, getItems: o } = Jv(), s = /* @__PURE__ */ j();
		u_(s);
		let { search: c, handleTypeaheadSearch: l } = __(), u = /* @__PURE__ */ j(), d = /* @__PURE__ */ j(), f = /* @__PURE__ */ j(), p = /* @__PURE__ */ j(!1), m = /* @__PURE__ */ j(!1), h = /* @__PURE__ */ j(!1);
		function g() {
			d.value && s.value && Sv([d.value, s.value]);
		}
		P(p, () => {
			g();
		});
		let { onOpenChange: _, triggerPointerDownPosRef: v } = i;
		Tr((e) => {
			if (!s.value) return;
			let t = {
				x: 0,
				y: 0
			}, n = (e) => {
				t = {
					x: Math.abs(Math.round(e.pageX) - (v.value?.x ?? 0)),
					y: Math.abs(Math.round(e.pageY) - (v.value?.y ?? 0))
				};
			}, r = (e) => {
				e.pointerType !== "touch" && (t.x <= 10 && t.y <= 10 ? e.preventDefault() : s.value?.contains(e.target) || _(!1), document.removeEventListener("pointermove", n), v.value = null);
			};
			v.value !== null && (document.addEventListener("pointermove", n), document.addEventListener("pointerup", r, {
				capture: !0,
				once: !0
			})), e(() => {
				document.removeEventListener("pointermove", n), document.removeEventListener("pointerup", r, { capture: !0 });
			});
		});
		function y(e) {
			let t = e.ctrlKey || e.altKey || e.metaKey;
			if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && l(e.key, o()), [
				"ArrowUp",
				"ArrowDown",
				"Home",
				"End"
			].includes(e.key)) {
				let t = [...o().map((e) => e.ref)];
				if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
					let n = e.target, r = t.indexOf(n);
					t = t.slice(r + 1);
				}
				setTimeout(() => Sv(t)), e.preventDefault();
			}
		}
		let b = Kg(q(() => n.position === "popper" ? n : {}).value);
		return TE({
			content: s,
			viewport: u,
			onViewportChange: (e) => {
				u.value = e;
			},
			itemRefCallback: (e, t, n) => {
				let r = !m.value && !n, a = mE(i.modelValue.value, t, i.by);
				if (i.multiple.value) {
					if (h.value) return;
					(a || r) && (d.value = e, a && (h.value = !0));
				} else (a || r) && (d.value = e);
				r && (m.value = !0);
			},
			selectedItem: d,
			selectedItemText: f,
			onItemLeave: () => {
				s.value?.focus();
			},
			itemTextRefCallback: (e, t, n) => {
				let r = !m.value && !n;
				(mE(i.modelValue.value, t, i.by) || r) && (f.value = e);
			},
			focusSelectedItem: g,
			position: n.position,
			isPositioned: p,
			searchRef: c
		}), (e, t) => (z(), V(M(a), null, {
			default: N(() => [U(M(hv), {
				"as-child": "",
				onMountAutoFocus: t[6] ||= Xl(() => {}, ["prevent"]),
				onUnmountAutoFocus: t[7] ||= (e) => {
					r("closeAutoFocus", e), !e.defaultPrevented && (M(i).triggerElement.value?.focus({ preventScroll: !0 }), e.preventDefault());
				}
			}, {
				default: N(() => [U(M(tv), {
					"as-child": "",
					"disable-outside-pointer-events": e.disableOutsidePointerEvents,
					onFocusOutside: t[2] ||= Xl(() => {}, ["prevent"]),
					onDismiss: t[3] ||= (e) => M(i).onOpenChange(!1),
					onEscapeKeyDown: t[4] ||= (e) => r("escapeKeyDown", e),
					onPointerDownOutside: t[5] ||= (e) => r("pointerDownOutside", e)
				}, {
					default: N(() => [(z(), V(ia(e.position === "popper" ? SE : kE), K({
						...e.$attrs,
						...M(b)
					}, {
						id: M(i).contentId,
						ref: (e) => {
							if (!e) return;
							let t = M(sf)(e);
							t?.hasAttribute("data-reka-popper-content-wrapper") ? s.value = t.firstElementChild : s.value = t;
						},
						role: "listbox",
						"data-state": M(i).open.value ? "open" : "closed",
						dir: M(i).dir.value,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none"
						},
						onContextmenu: t[0] ||= Xl(() => {}, ["prevent"]),
						onPlaced: t[1] ||= (e) => p.value = !0,
						onKeydown: y
					}), {
						default: N(() => [L(e.$slots, "default")]),
						_: 3
					}, 16, [
						"id",
						"data-state",
						"dir",
						"onKeydown"
					]))]),
					_: 3
				}, 8, ["disable-outside-pointer-events"])]),
				_: 3
			})]),
			_: 3
		}));
	}
}), [DE, OE] = /* @__PURE__ */ cp("SelectItemAlignedPosition"), kE = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "SelectItemAlignedPosition",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["placed"],
	setup(e, { emit: t }) {
		let n = e, r = t, { getItems: i } = Jv(), a = vE(), o = wE(), s = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j(!0), l = /* @__PURE__ */ j(), { forwardRef: u, currentElement: d } = Y(), { viewport: f, selectedItem: p, selectedItemText: m, focusSelectedItem: h } = o;
		function g() {
			if (a.triggerElement.value && a.valueElement.value && l.value && d.value && f?.value && p?.value && m?.value) {
				let e = a.triggerElement.value.getBoundingClientRect(), t = d.value.getBoundingClientRect(), n = a.valueElement.value.getBoundingClientRect(), o = m.value.getBoundingClientRect();
				if (a.dir.value !== "rtl") {
					let r = o.left - t.left, i = n.left - r, a = e.left - i, s = e.width + a, c = Math.max(s, t.width), u = window.innerWidth - 10, d = ap(i, 10, Math.max(10, u - c));
					l.value.style.minWidth = `${s}px`, l.value.style.left = `${d}px`;
				} else {
					let r = t.right - o.right, i = window.innerWidth - n.right - r, a = window.innerWidth - e.right - i, s = e.width + a, c = Math.max(s, t.width), u = window.innerWidth - 10, d = ap(i, 10, Math.max(10, u - c));
					l.value.style.minWidth = `${s}px`, l.value.style.right = `${d}px`;
				}
				let c = i().map((e) => e.ref), u = window.innerHeight - 20, h = f.value.scrollHeight, g = window.getComputedStyle(d.value), _ = Number.parseInt(g.borderTopWidth, 10), v = Number.parseInt(g.paddingTop, 10), y = Number.parseInt(g.borderBottomWidth, 10), b = Number.parseInt(g.paddingBottom, 10), x = _ + v + h + b + y, S = Math.min(p.value.offsetHeight * 5, x), C = window.getComputedStyle(f.value), w = Number.parseInt(C.paddingTop, 10), T = Number.parseInt(C.paddingBottom, 10), ee = e.top + e.height / 2 - 10, E = u - ee, te = p.value.offsetHeight / 2, ne = p.value.offsetTop + te, re = _ + v + ne, D = x - re;
				if (re <= ee) {
					let e = p.value === c.at(-1);
					l.value.style.bottom = "0px";
					let t = d.value.clientHeight - f.value.offsetTop - f.value.offsetHeight, n = re + Math.max(E, te + (e ? T : 0) + t + y);
					l.value.style.height = `${n}px`;
				} else {
					let e = p.value === c[0];
					l.value.style.top = "0px";
					let t = Math.max(ee, _ + f.value.offsetTop + (e ? w : 0) + te) + D;
					l.value.style.height = `${t}px`, f.value.scrollTop = re - ee + f.value.offsetTop;
				}
				l.value.style.margin = "10px 0", l.value.style.minHeight = `${S}px`, l.value.style.maxHeight = `${u}px`, r("placed"), requestAnimationFrame(() => s.value = !0);
			}
		}
		let _ = /* @__PURE__ */ j("");
		I(async () => {
			await er(), g(), d.value && (_.value = window.getComputedStyle(d.value).zIndex);
		});
		function v(e) {
			e && c.value === !0 && (g(), h?.(), c.value = !1);
		}
		return xf(a.triggerElement, () => {
			g();
		}), OE({
			contentWrapper: l,
			shouldExpandOnScrollRef: s,
			onScrollButtonChange: v
		}), (e, t) => (z(), B("div", {
			ref_key: "contentWrapperElement",
			ref: l,
			style: he({
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: _.value
			})
		}, [U(M(X), K({
			ref: M(u),
			style: {
				boxSizing: "border-box",
				maxHeight: "100%"
			}
		}, {
			...e.$attrs,
			...n
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16)], 4));
	}
}), AE = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "SelectProvider",
	props: { context: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return yE(e.context), TE(CE), (e, t) => L(e.$slots, "default");
	}
}), jE = { key: 1 }, ME = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "SelectContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		position: {
			type: String,
			required: !1
		},
		bodyLock: {
			type: Boolean,
			required: !1
		},
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		sideFlip: {
			type: Boolean,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		alignFlip: {
			type: Boolean,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		hideShiftedArrow: {
			type: Boolean,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: !1
		},
		prioritizePosition: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: !1
		}
	},
	emits: [
		"closeAutoFocus",
		"escapeKeyDown",
		"pointerDownOutside"
	],
	setup(e, { emit: t }) {
		let n = e, r = qg(n, t), i = vE(), a = /* @__PURE__ */ j();
		I(() => {
			a.value = new DocumentFragment();
		});
		let o = /* @__PURE__ */ j(), s = q(() => n.forceMount || i.open.value), c = /* @__PURE__ */ j(s.value);
		return P(s, () => {
			setTimeout(() => c.value = s.value);
		}), (e, t) => s.value || c.value || o.value?.present ? (z(), V(M(S_), {
			key: 0,
			ref_key: "presenceRef",
			ref: o,
			present: s.value
		}, {
			default: N(() => [U(EE, A(W({
				...M(r),
				...e.$attrs
			})), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16)]),
			_: 3
		}, 8, ["present"])) : a.value ? (z(), B("div", jE, [(z(), V(Hr, { to: a.value }, [U(AE, { context: M(i) }, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, ["context"])], 8, ["to"]))])) : G("v-if", !0);
	}
}), NE = /* @__PURE__ */ F({
	__name: "SelectIcon",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		return (e, t) => (z(), V(M(X), {
			"aria-hidden": "true",
			as: e.as,
			"as-child": e.asChild
		}, {
			default: N(() => [L(e.$slots, "default", {}, () => [t[0] ||= _s("▼")])]),
			_: 3
		}, 8, ["as", "as-child"]));
	}
}), [PE, FE] = /* @__PURE__ */ cp("SelectItem"), IE = /* @__PURE__ */ F({
	__name: "SelectItem",
	props: {
		value: {
			type: null,
			required: !0
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		textValue: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = t, { disabled: i } = /* @__PURE__ */ xn(n), a = vE(), o = wE(), { forwardRef: s, currentElement: c } = Y(), { CollectionItem: l } = Jv(), u = q(() => mE(a.modelValue?.value, n.value, a.by)), d = /* @__PURE__ */ j(!1), f = /* @__PURE__ */ j(n.textValue ?? ""), p = f_(void 0, "reka-select-item-text");
		async function m(e) {
			e.defaultPrevented || up("select.select", h, {
				originalEvent: e,
				value: n.value
			});
		}
		async function h(e) {
			await er(), r("select", e), !e.defaultPrevented && (i.value || (a.onValueChange(n.value), a.multiple.value || a.onOpenChange(!1)));
		}
		async function g(e) {
			await er(), !e.defaultPrevented && (i.value ? o.onItemLeave?.() : e.currentTarget?.focus({ preventScroll: !0 }));
		}
		async function _(e) {
			await er(), !e.defaultPrevented && e.currentTarget === lp() && o.onItemLeave?.();
		}
		async function v(e) {
			await er(), !e.defaultPrevented && (o.searchRef?.value !== "" && e.key === " " || (pE.includes(e.key) && m(e), e.key === " " && e.preventDefault()));
		}
		if (n.value === "") throw Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
		return I(() => {
			c.value && o.itemRefCallback(c.value, n.value, n.disabled);
		}), FE({
			value: n.value,
			disabled: i,
			textId: p,
			isSelected: u,
			onItemTextChange: (e) => {
				f.value = ((f.value || e?.textContent) ?? "").trim();
			}
		}), (e, t) => (z(), V(M(l), { value: { textValue: f.value } }, {
			default: N(() => [U(M(X), {
				ref: M(s),
				role: "option",
				"aria-labelledby": M(p),
				"data-highlighted": d.value ? "" : void 0,
				"aria-selected": u.value,
				"data-state": u.value ? "checked" : "unchecked",
				"aria-disabled": M(i) || void 0,
				"data-disabled": M(i) ? "" : void 0,
				tabindex: M(i) ? void 0 : -1,
				as: e.as,
				"as-child": e.asChild,
				onFocus: t[0] ||= (e) => d.value = !0,
				onBlur: t[1] ||= (e) => d.value = !1,
				onPointerup: m,
				onPointerdown: t[2] ||= (e) => {
					e.currentTarget.focus({ preventScroll: !0 });
				},
				onTouchend: t[3] ||= Xl(() => {}, ["prevent", "stop"]),
				onPointermove: g,
				onPointerleave: _,
				onKeydown: v
			}, {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 8, [
				"aria-labelledby",
				"data-highlighted",
				"aria-selected",
				"data-state",
				"aria-disabled",
				"data-disabled",
				"tabindex",
				"as",
				"as-child"
			])]),
			_: 3
		}, 8, ["value"]));
	}
}), LE = /* @__PURE__ */ F({
	__name: "SelectItemIndicator",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		let t = e, n = PE();
		return (e, r) => M(n).isSelected.value ? (z(), V(M(X), K({
			key: 0,
			"aria-hidden": "true"
		}, t), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16)) : G("v-if", !0);
	}
}), RE = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "SelectItemText",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		let t = e, n = vE(), r = wE(), i = PE(), { forwardRef: a, currentElement: o } = Y(), s = q(() => ({
			value: i.value,
			disabled: i.disabled.value,
			textContent: o.value?.textContent ?? i.value?.toString() ?? ""
		}));
		return I(() => {
			o.value && (i.onItemTextChange(o.value), r.itemTextRefCallback(o.value, i.value, i.disabled.value), n.onOptionAdd(s.value));
		}), Yi(() => {
			n.onOptionRemove(s.value);
		}), (e, n) => (z(), V(M(X), K({
			id: M(i).textId,
			ref: M(a)
		}, {
			...t,
			...e.$attrs
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), zE = /* @__PURE__ */ F({
	__name: "SelectPortal",
	props: {
		to: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		defer: {
			type: Boolean,
			required: !1
		},
		forceMount: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(Nv), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), BE = /* @__PURE__ */ F({
	__name: "SelectScrollButtonImpl",
	emits: ["autoScroll"],
	setup(e, { emit: t }) {
		let n = t, { getItems: r } = Jv(), i = wE(), a = /* @__PURE__ */ j(null);
		function o() {
			a.value !== null && (window.clearInterval(a.value), a.value = null);
		}
		Tr(() => {
			r().map((e) => e.ref).find((e) => e === lp())?.scrollIntoView({ block: "nearest" });
		});
		function s() {
			a.value === null && (a.value = window.setInterval(() => {
				n("autoScroll");
			}, 50));
		}
		function c() {
			i.onItemLeave?.(), a.value === null && (a.value = window.setInterval(() => {
				n("autoScroll");
			}, 50));
		}
		return Ji(() => o()), (e, t) => (z(), V(M(X), K({
			"aria-hidden": "true",
			style: { flexShrink: 0 }
		}, e.$parent?.$props, {
			onPointerdown: s,
			onPointermove: c,
			onPointerleave: t[0] ||= () => {
				o();
			}
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), VE = /* @__PURE__ */ F({
	__name: "SelectScrollDownButton",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = wE(), n = t.position === "item-aligned" ? DE() : void 0, { forwardRef: r, currentElement: i } = Y(), a = /* @__PURE__ */ j(!1);
		return Tr((e) => {
			if (t.viewport?.value && t.isPositioned?.value) {
				let n = t.viewport.value;
				function r() {
					let e = n.scrollHeight - n.clientHeight;
					a.value = Math.ceil(n.scrollTop) < e;
				}
				r(), n.addEventListener("scroll", r), e(() => n.removeEventListener("scroll", r));
			}
		}), P(i, () => {
			i.value && n?.onScrollButtonChange(i.value);
		}), (e, n) => a.value ? (z(), V(BE, {
			key: 0,
			ref: M(r),
			onAutoScroll: n[0] ||= () => {
				let { viewport: e, selectedItem: n } = M(t);
				e?.value && n?.value && (e.value.scrollTop = e.value.scrollTop + n.value.offsetHeight);
			}
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 512)) : G("v-if", !0);
	}
}), HE = /* @__PURE__ */ F({
	__name: "SelectScrollUpButton",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = wE(), n = t.position === "item-aligned" ? DE() : void 0, { forwardRef: r, currentElement: i } = Y(), a = /* @__PURE__ */ j(!1);
		return Tr((e) => {
			if (t.viewport?.value && t.isPositioned?.value) {
				let n = t.viewport.value;
				function r() {
					a.value = n.scrollTop > 0;
				}
				r(), n.addEventListener("scroll", r), e(() => n.removeEventListener("scroll", r));
			}
		}), P(i, () => {
			i.value && n?.onScrollButtonChange(i.value);
		}), (e, n) => a.value ? (z(), V(BE, {
			key: 0,
			ref: M(r),
			onAutoScroll: n[0] ||= () => {
				let { viewport: e, selectedItem: n } = M(t);
				e?.value && n?.value && (e.value.scrollTop = e.value.scrollTop - n.value.offsetHeight);
			}
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 512)) : G("v-if", !0);
	}
}), UE = /* @__PURE__ */ F({
	__name: "SelectTrigger",
	props: {
		disabled: {
			type: Boolean,
			required: !1
		},
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e, n = vE(), { forwardRef: r, currentElement: i } = Y(), a = q(() => n.disabled?.value || t.disabled);
		n.contentId ||= f_(void 0, "reka-select-content"), I(() => {
			n.onTriggerChange(i.value);
		});
		let { getItems: o } = Jv(), { search: s, handleTypeaheadSearch: c, resetTypeahead: l } = __();
		function u() {
			a.value || (n.onOpenChange(!0), l());
		}
		function d(e) {
			u(), n.triggerPointerDownPosRef.value = {
				x: Math.round(e.pageX),
				y: Math.round(e.pageY)
			};
		}
		return (e, t) => (z(), V(M(Cy), {
			"as-child": "",
			reference: e.reference
		}, {
			default: N(() => [U(M(X), {
				ref: M(r),
				role: "combobox",
				type: e.as === "button" ? "button" : void 0,
				"aria-controls": M(n).contentId,
				"aria-expanded": M(n).open.value || !1,
				"aria-required": M(n).required?.value,
				"aria-autocomplete": "none",
				disabled: a.value,
				dir: M(n)?.dir.value,
				"data-state": M(n)?.open.value ? "open" : "closed",
				"data-disabled": a.value ? "" : void 0,
				"data-placeholder": M(gE)(M(n).modelValue?.value) ? "" : void 0,
				"as-child": e.asChild,
				as: e.as,
				onClick: t[0] ||= (e) => {
					(e?.currentTarget)?.focus();
				},
				onPointerdown: t[1] ||= (e) => {
					if (e.pointerType === "touch") return e.preventDefault();
					let t = e.target;
					t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && (d(e), e.preventDefault());
				},
				onPointerup: t[2] ||= Xl((e) => {
					e.pointerType === "touch" && d(e);
				}, ["prevent"]),
				onKeydown: t[3] ||= (e) => {
					let t = M(s) !== "";
					!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && t && e.key === " " || (M(c)(e.key, M(o)()), M(fE).includes(e.key) && (u(), e.preventDefault()));
				}
			}, {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 8, [
				"type",
				"aria-controls",
				"aria-expanded",
				"aria-required",
				"disabled",
				"dir",
				"data-state",
				"data-disabled",
				"data-placeholder",
				"as-child",
				"as"
			])]),
			_: 3
		}, 8, ["reference"]));
	}
}), WE = /* @__PURE__ */ F({
	__name: "SelectValue",
	props: {
		placeholder: {
			type: String,
			required: !1,
			default: ""
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		let t = e, { forwardRef: n, currentElement: r } = Y(), i = vE();
		I(() => {
			i.valueElement = r;
		});
		let a = q(() => {
			let e = [], t = Array.from(i.optionsSet.value), n = (e) => t.find((t) => mE(e, t.value, i.by));
			return e = Array.isArray(i.modelValue.value) ? i.modelValue.value.map((e) => n(e)?.textContent ?? "") : [n(i.modelValue.value)?.textContent ?? ""], e.filter(Boolean);
		}), o = q(() => a.value.length ? a.value.join(", ") : t.placeholder);
		return (e, r) => (z(), V(M(X), {
			ref: M(n),
			as: e.as,
			"as-child": e.asChild,
			style: { pointerEvents: "none" },
			"data-placeholder": a.value.length ? void 0 : t.placeholder
		}, {
			default: N(() => [L(e.$slots, "default", {
				selectedLabel: a.value,
				modelValue: M(i).modelValue.value
			}, () => [_s(De(o.value), 1)])]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-placeholder"
		]));
	}
}), GE = /* @__PURE__ */ F({
	__name: "SelectViewport",
	props: {
		nonce: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, { nonce: n } = /* @__PURE__ */ xn(t), r = Vx(n), i = wE(), a = i.position === "item-aligned" ? DE() : void 0, { forwardRef: o, currentElement: s } = Y();
		I(() => {
			i?.onViewportChange(s.value);
		});
		let c = /* @__PURE__ */ j(0);
		function l(e) {
			let t = e.currentTarget, { shouldExpandOnScrollRef: n, contentWrapper: r } = a ?? {};
			if (n?.value && r?.value) {
				let e = Math.abs(c.value - t.scrollTop);
				if (e > 0) {
					let n = window.innerHeight - 20, i = Number.parseFloat(r.value.style.minHeight), a = Number.parseFloat(r.value.style.height), o = Math.max(i, a);
					if (o < n) {
						let i = o + e, a = Math.min(n, i), s = i - a;
						r.value.style.height = `${a}px`, r.value.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, r.value.style.justifyContent = "flex-end");
					}
				}
			}
			c.value = t.scrollTop;
		}
		return (e, n) => (z(), B(R, null, [U(M(X), K({
			ref: M(o),
			"data-reka-select-viewport": "",
			role: "presentation"
		}, {
			...e.$attrs,
			...t
		}, {
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto"
			},
			onScroll: l
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16), U(M(X), {
			as: "style",
			nonce: M(r)
		}, {
			default: N(() => n[0] ||= [_s(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")]),
			_: 1,
			__: [0]
		}, 8, ["nonce"])], 64));
	}
}), KE = /* @__PURE__ */ F({
	__name: "BaseSeparator",
	props: {
		orientation: {
			type: String,
			required: !1,
			default: "horizontal"
		},
		decorative: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = ["horizontal", "vertical"];
		function r(e) {
			return n.includes(e);
		}
		let i = q(() => r(t.orientation) ? t.orientation : "horizontal"), a = q(() => i.value === "vertical" ? t.orientation : void 0), o = q(() => t.decorative ? { role: "none" } : {
			"aria-orientation": a.value,
			role: "separator"
		});
		return (e, t) => (z(), V(M(X), K({
			as: e.as,
			"as-child": e.asChild,
			"data-orientation": i.value
		}, o.value), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, [
			"as",
			"as-child",
			"data-orientation"
		]));
	}
}), qE = /* @__PURE__ */ F({
	__name: "Separator",
	props: {
		orientation: {
			type: String,
			required: !1,
			default: "horizontal"
		},
		decorative: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(KE, A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/utils/assert.js
function JE(e, t = "Assertion failed!") {
	if (!e) throw console.error(t), Error(t);
}
//#endregion
//#region node_modules/reka-ui/dist/utils/dom.js
function YE(e, t = document) {
	return ip ? t instanceof HTMLElement && t?.dataset?.panelGroupId === e ? t : t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`) || null : null;
}
function XE(e, t = document) {
	return ip && t.querySelector(`[data-panel-resize-handle-id="${e}"]`) || null;
}
function ZE(e, t, n = document) {
	return ip ? QE(e, n).findIndex((e) => e.getAttribute("data-panel-resize-handle-id") === t) ?? null : null;
}
function QE(e, t = document) {
	return ip ? Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`)) : [];
}
function $E(e, t, n, r = document) {
	let i = XE(t, r), a = QE(e, r), o = i ? a.indexOf(i) : -1;
	return [n[o]?.id ?? null, n[o + 1]?.id ?? null];
}
//#endregion
//#region node_modules/reka-ui/dist/utils/events.js
function eD(e) {
	return e.type === "keydown";
}
function tD(e) {
	return e.type.startsWith("mouse");
}
function nD(e) {
	return e.type.startsWith("touch");
}
function rD(e) {
	if (tD(e)) return {
		x: e.clientX,
		y: e.clientY
	};
	if (nD(e)) {
		let t = e.touches[0];
		if (t && t.clientX && t.clientY) return {
			x: t.clientX,
			y: t.clientY
		};
	}
	return {
		x: Infinity,
		y: Infinity
	};
}
function iD(e, t) {
	let n = e === "horizontal", { x: r, y: i } = rD(t);
	return n ? r : i;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/calculate.js
function aD(e, t, n, r, i) {
	let a = n === "horizontal", o = XE(t, i);
	JE(o);
	let s = o.getAttribute("data-panel-group-id");
	JE(s);
	let { initialCursorPosition: c } = r, l = iD(n, e), u = YE(s, i);
	JE(u);
	let d = u.getBoundingClientRect(), f = a ? d.width : d.height;
	return (l - c) / f * 100;
}
function oD(e, t, n, r, i, a) {
	if (eD(e)) {
		let t = n === "horizontal", r = 0;
		r = e.shiftKey ? 100 : i ?? 10;
		let a = 0;
		switch (e.key) {
			case "ArrowDown":
				a = t ? 0 : r;
				break;
			case "ArrowLeft":
				a = t ? -r : 0;
				break;
			case "ArrowRight":
				a = t ? r : 0;
				break;
			case "ArrowUp":
				a = t ? 0 : -r;
				break;
			case "End":
				a = 100;
				break;
			case "Home":
				a = -100;
				break;
		}
		return a;
	} else return r == null ? 0 : aD(e, t, n, r, a);
}
function sD({ layout: e, panelsArray: t, pivotIndices: n }) {
	let r = 0, i = 100, a = 0, o = 0, s = n[0];
	return JE(s != null), t.forEach((e, t) => {
		let { constraints: n } = e, { maxSize: c = 100, minSize: l = 0 } = n;
		t === s ? (r = l, i = c) : (a += l, o += c);
	}), {
		valueMax: Math.min(i, 100 - a),
		valueMin: Math.max(r, 100 - o),
		valueNow: e[s]
	};
}
function cD({ panelDataArray: e }) {
	let t = Array.from({ length: e.length }), n = e.map((e) => e.constraints), r = 0, i = 100;
	for (let a = 0; a < e.length; a++) {
		let e = n[a];
		JE(e);
		let { defaultSize: o } = e;
		o != null && (r++, t[a] = o, i -= o);
	}
	for (let a = 0; a < e.length; a++) {
		let o = n[a];
		JE(o);
		let { defaultSize: s } = o;
		if (s != null) continue;
		let c = e.length - r, l = i / c;
		r++, t[a] = l, i -= l;
	}
	return t;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/compare.js
function lD(e, t, n = 10) {
	e = Number.parseFloat(e.toFixed(n)), t = Number.parseFloat(t.toFixed(n));
	let r = e - t;
	return r === 0 ? 0 : r > 0 ? 1 : -1;
}
function uD(e, t, n) {
	return lD(e, t, n) === 0;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/callPanelCallbacks.js
function dD(e, t, n, r) {
	t.forEach((t, i) => {
		let a = e[i];
		JE(a);
		let { callbacks: o, constraints: s, id: c } = a, { collapsedSize: l = 0, collapsible: u, sizeUnit: d } = s, f = t;
		d === "px" && r != null && (f = t / 100 * r);
		let p = n[c];
		if (p == null || !uD(f, p)) {
			n[c] = f;
			let { onCollapse: e, onExpand: t, onResize: r } = o;
			r && r(f, p), u && (e || t) && (t && (p == null || uD(p, l)) && !uD(f, l) && t(), e && (p == null || !uD(p, l)) && uD(f, l) && e());
		}
	});
}
//#endregion
//#region node_modules/reka-ui/dist/utils/debounce.js
function fD(e, t = 10) {
	let n = null;
	return (...r) => {
		n !== null && clearTimeout(n), n = setTimeout(() => {
			e(...r);
		}, t);
	};
}
//#endregion
//#region node_modules/reka-ui/dist/utils/resizePanel.js
function pD({ panelConstraints: e, panelIndex: t, size: n }) {
	let r = e[t];
	JE(r != null);
	let { collapsedSize: i = 0, collapsible: a, maxSize: o = 100, minSize: s = 0 } = r;
	if (lD(n, s) < 0) if (a) {
		let e = (i + s) / 2;
		n = lD(n, e) < 0 ? i : s;
	} else n = s;
	return n = Math.min(o, n), n = Number.parseFloat(n.toFixed(10)), n;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/layout.js
function mD(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function hD({ delta: e, layout: t, panelConstraints: n, pivotIndices: r, trigger: i }) {
	if (uD(e, 0)) return t;
	let a = [...t], [o, s] = r;
	JE(o != null), JE(s != null);
	let c = 0;
	if (i === "keyboard") {
		{
			let r = e < 0 ? s : o, i = n[r];
			if (JE(i), i.collapsible) {
				let i = t[r];
				JE(i != null);
				let a = n[r];
				JE(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (uD(i, o)) {
					let t = s - i;
					lD(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
		{
			let r = e < 0 ? o : s, i = n[r];
			JE(i);
			let { collapsible: a } = i;
			if (a) {
				let i = t[r];
				JE(i != null);
				let a = n[r];
				JE(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (uD(i, s)) {
					let t = i - o;
					lD(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
	}
	{
		let r = e < 0 ? 1 : -1, i = e < 0 ? s : o, a = 0;
		for (;;) {
			let e = t[i];
			JE(e != null);
			let o = pD({
				panelConstraints: n,
				panelIndex: i,
				size: 100
			}) - e;
			if (a += o, i += r, i < 0 || i >= n.length) break;
		}
		let c = Math.min(Math.abs(e), Math.abs(a));
		e = e < 0 ? 0 - c : c;
	}
	{
		let r = e < 0 ? o : s;
		for (; r >= 0 && r < n.length;) {
			let i = Math.abs(e) - Math.abs(c), o = t[r];
			JE(o != null);
			let s = o - i, l = pD({
				panelConstraints: n,
				panelIndex: r,
				size: s
			});
			if (!uD(o, l) && (c += o - l, a[r] = l, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, { numeric: !0 }) >= 0)) break;
			e < 0 ? r-- : r++;
		}
	}
	if (uD(c, 0)) return t;
	{
		let r = e < 0 ? s : o, i = t[r];
		JE(i != null);
		let l = i + c, u = pD({
			panelConstraints: n,
			panelIndex: r,
			size: l
		});
		if (a[r] = u, !uD(u, l)) {
			let t = l - u, r = e < 0 ? s : o;
			for (; r >= 0 && r < n.length;) {
				let i = a[r];
				JE(i != null);
				let o = i + t, s = pD({
					panelConstraints: n,
					panelIndex: r,
					size: o
				});
				if (uD(i, s) || (t -= s - i, a[r] = s), uD(t, 0)) break;
				e > 0 ? r-- : r++;
			}
		}
	}
	return uD(a.reduce((e, t) => t + e, 0), 100) ? a : t;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/pivot.js
function gD(e, t, n) {
	let r = ZE(e, t, n);
	return r == null ? [-1, -1] : [r, r + 1];
}
//#endregion
//#region node_modules/reka-ui/dist/utils/rects.js
function _D(e, t, n) {
	return n ? e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y : e.x <= t.x + t.width && e.x + e.width >= t.x && e.y <= t.y + t.height && e.y + e.height >= t.y;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/stackingOrder.js
function vD(e, t) {
	if (e === t) throw Error("Cannot compare node with itself");
	let n = {
		a: wD(e),
		b: wD(t)
	}, r;
	for (; n.a.at(-1) === n.b.at(-1);) e = n.a.pop(), t = n.b.pop(), r = e;
	JE(r);
	let i = {
		a: CD(SD(n.a)),
		b: CD(SD(n.b))
	};
	if (i.a === i.b) {
		let e = r.childNodes, t = {
			a: n.a.at(-1),
			b: n.b.at(-1)
		}, i = e.length;
		for (; i--;) {
			let n = e[i];
			if (n === t.a) return 1;
			if (n === t.b) return -1;
		}
	}
	return Math.sign(i.a - i.b);
}
var yD = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function bD(e) {
	let t = getComputedStyle(TD(e)).display;
	return t === "flex" || t === "inline-flex";
}
function xD(e) {
	let t = getComputedStyle(e);
	return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || bD(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || yD.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function SD(e) {
	let t = e.length;
	for (; t--;) {
		let n = e[t];
		if (JE(n), xD(n)) return n;
	}
	return null;
}
function CD(e) {
	return e && Number(getComputedStyle(e).zIndex) || 0;
}
function wD(e) {
	let t = [];
	for (; e;) t.push(e), e = TD(e);
	return t;
}
function TD(e) {
	return e.parentNode instanceof DocumentFragment && e.parentNode?.host || e.parentNode;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/registry.js
function ED() {
	if (typeof matchMedia == "function") return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
var DD = ED() === "coarse", OD = [], kD = !1, AD = /* @__PURE__ */ new Map(), jD = /* @__PURE__ */ new Map(), MD = /* @__PURE__ */ new Set();
function ND(e, t, n, r, i, a) {
	let { ownerDocument: o } = t, s = {
		direction: n,
		element: t,
		hitAreaMargins: r,
		nonce: i,
		setResizeHandlerState: a
	}, c = AD.get(o) ?? 0;
	return AD.set(o, c + 1), MD.add(s), BD(), function() {
		jD.delete(e), MD.delete(s);
		let t = AD.get(o) ?? 1;
		AD.set(o, t - 1), BD(), GD(), t === 1 && AD.delete(o);
	};
}
function PD(e) {
	let { target: t } = e, { x: n, y: r } = rD(e);
	kD = !0, LD({
		target: t,
		x: n,
		y: r
	}), BD(), OD.length > 0 && (VD("down", e), e.preventDefault());
}
function FD(e) {
	let { x: t, y: n } = rD(e);
	if (!kD) {
		let { target: r } = e;
		LD({
			target: r,
			x: t,
			y: n
		});
	}
	VD("move", e), zD(), OD.length > 0 && e.preventDefault();
}
function ID(e) {
	let { target: t } = e, { x: n, y: r } = rD(e);
	jD.clear(), kD = !1, OD.length > 0 && e.preventDefault(), VD("up", e), LD({
		target: t,
		x: n,
		y: r
	}), zD(), BD();
}
function LD({ target: e, x: t, y: n }) {
	OD.splice(0);
	let r = null;
	e instanceof HTMLElement && (r = e), MD.forEach((e) => {
		let { element: i, hitAreaMargins: a } = e, o = i.getBoundingClientRect(), { bottom: s, left: c, right: l, top: u } = o, d = DD ? a.coarse : a.fine;
		if (t >= c - d && t <= l + d && n >= u - d && n <= s + d) {
			if (r !== null && i !== r && !i.contains(r) && !r.contains(i) && vD(r, i) > 0) {
				let e = r, t = !1;
				for (; e && !e.contains(i);) {
					if (_D(e.getBoundingClientRect(), o, !0)) {
						t = !0;
						break;
					}
					e = e.parentElement;
				}
				if (t) return;
			}
			OD.push(e);
		}
	});
}
function RD(e, t) {
	jD.set(e, t);
}
function zD() {
	let e = !1, t = !1, n;
	OD.forEach((r) => {
		let { direction: i, nonce: a } = r;
		i.value === "horizontal" ? e = !0 : t = !0, n = a.value;
	});
	let r = 0;
	jD.forEach((e) => {
		r |= e;
	}), e && t ? KD("intersection", r, n) : e ? KD("horizontal", r, n) : t ? KD("vertical", r, n) : GD();
}
function BD() {
	AD.forEach((e, t) => {
		let { body: n } = t;
		n.removeEventListener("contextmenu", ID), n.removeEventListener("mousedown", PD), n.removeEventListener("mouseleave", FD), n.removeEventListener("mousemove", FD), n.removeEventListener("touchmove", FD), n.removeEventListener("touchstart", PD);
	}), window.removeEventListener("mouseup", ID), window.removeEventListener("touchcancel", ID), window.removeEventListener("touchend", ID), MD.size > 0 && (kD ? (OD.length > 0 && AD.forEach((e, t) => {
		let { body: n } = t;
		e > 0 && (n.addEventListener("contextmenu", ID), n.addEventListener("mouseleave", FD), n.addEventListener("mousemove", FD), n.addEventListener("touchmove", FD, { passive: !1 }));
	}), window.addEventListener("mouseup", ID), window.addEventListener("touchcancel", ID), window.addEventListener("touchend", ID)) : AD.forEach((e, t) => {
		let { body: n } = t;
		e > 0 && (n.addEventListener("mousedown", PD), n.addEventListener("mousemove", FD), n.addEventListener("touchmove", FD, { passive: !1 }), n.addEventListener("touchstart", PD));
	}));
}
function VD(e, t) {
	MD.forEach((n) => {
		let { setResizeHandlerState: r } = n;
		r(e, OD.includes(n), t);
	});
}
//#endregion
//#region node_modules/reka-ui/dist/utils/style.js
var HD = null, UD = null;
function WD(e, t) {
	if (t) {
		let e = (t & 1) != 0, n = (t & 2) != 0, r = (t & 4) != 0, i = (t & 8) != 0;
		if (e) return r ? "se-resize" : i ? "ne-resize" : "e-resize";
		if (n) return r ? "sw-resize" : i ? "nw-resize" : "w-resize";
		if (r) return "s-resize";
		if (i) return "n-resize";
	}
	switch (e) {
		case "horizontal": return "ew-resize";
		case "intersection": return "move";
		case "vertical": return "ns-resize";
	}
}
function GD() {
	UD !== null && (document.head.removeChild(UD), HD = null, UD = null);
}
function KD(e, t, n) {
	let r = WD(e, t);
	HD !== r && (HD = r, UD === null && (UD = document.createElement("style"), n && (UD.nonce = n), document.head.appendChild(UD)), UD.innerHTML = `*{cursor: ${r}!important;}`);
}
function qD({ defaultSize: e, dragState: t, layout: n, panelData: r, panelIndex: i, precision: a = 3 }) {
	let o = n[i], s;
	return s = o == null ? e === void 0 ? "1" : e.toPrecision(a) : r.length === 1 ? "1" : o.toPrecision(a), {
		flexBasis: 0,
		flexGrow: s,
		flexShrink: 1,
		overflow: "hidden",
		pointerEvents: t === null ? void 0 : "none"
	};
}
//#endregion
//#region node_modules/reka-ui/dist/utils/units.js
function JD({ sizeUnit: e, groupSizeInPixels: t, value: n }) {
	if (n == null || e === "%") return n;
	if (!(t == null || t === 0)) return n / t * 100;
}
function YD({ panelDataArray: e, groupSizeInPixels: t }) {
	return e.some((e) => (e.constraints.sizeUnit ?? "%") === "px") && (!t || Number.isNaN(t)) ? null : e.map((e) => {
		let n = e.constraints, r = n.sizeUnit ?? "%", i = JD({
			groupSizeInPixels: t,
			sizeUnit: r,
			value: n.collapsedSize
		}), a = JD({
			groupSizeInPixels: t,
			sizeUnit: r,
			value: n.defaultSize
		}), o = JD({
			groupSizeInPixels: t,
			sizeUnit: r,
			value: n.maxSize
		}), s = JD({
			groupSizeInPixels: t,
			sizeUnit: r,
			value: n.minSize
		});
		return {
			...n,
			collapsedSize: i ?? n.collapsedSize ?? 0,
			defaultSize: a,
			maxSize: o ?? 100,
			minSize: s ?? 0,
			sizeUnit: "%"
		};
	});
}
function XD(e) {
	return e.some((e) => (e.constraints.sizeUnit ?? "%") === "px");
}
function ZD({ layout: e, panelDataArray: t, prevGroupSize: n, nextGroupSize: r }) {
	if (!XD(t) || n == null || r == null || n === 0 || r === 0 || Number.isNaN(n) || Number.isNaN(r)) return null;
	let i = t.reduce((e, t, n) => ((t.constraints.sizeUnit ?? "%") === "px" && e.push(n), e), []);
	if (i.length === 0) return null;
	let a = new Set(i), o = e.map((e) => e ?? 0);
	i.reduce((t, n) => t + (e[n] ?? 0), 0);
	let s = i.map((t) => (e[t] ?? 0) / 100 * n / r * 100), c = s.reduce((e, t) => e + t, 0), l = e.reduce((e, t, n) => a.has(n) ? e : e + (t ?? 0), 0), u = Math.max(0, 100 - c), d = l > 0 ? u / l : 0;
	i.forEach((e, t) => {
		o[e] = s[t];
	});
	for (let t = 0; t < o.length; t++) a.has(t) || (o[t] = (e[t] ?? 0) * d);
	let f = o.reduce((e, t) => e + t, 0);
	if (f > 0 && Math.abs(f - 100) > 1e-9) {
		let e = 100 / f;
		for (let t = 0; t < o.length; t++) o[t] = (o[t] ?? 0) * e;
	}
	return o;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/validation.js
function QD({ layout: e, panelConstraints: t }) {
	let n = [...e], r = n.reduce((e, t) => e + t, 0);
	if (n.length !== t.length) throw Error(`Invalid ${t.length} panel layout: ${n.map((e) => `${e}%`).join(", ")}`);
	if (!uD(r, 100)) {
		console.warn(`WARNING: Invalid layout total size: ${n.map((e) => `${e}%`).join(", ")}. Layout normalization will be applied.`);
		for (let e = 0; e < t.length; e++) {
			let t = n[e];
			JE(t != null), n[e] = 100 / r * t;
		}
	}
	let i = 0;
	for (let e = 0; e < t.length; e++) {
		let r = n[e];
		JE(r != null);
		let a = pD({
			panelConstraints: t,
			panelIndex: e,
			size: r
		});
		r !== a && (i += r - a, n[e] = a);
	}
	if (!uD(i, 0)) for (let e = 0; e < t.length; e++) {
		let r = n[e];
		JE(r != null);
		let a = r + i, o = pD({
			panelConstraints: t,
			panelIndex: e,
			size: a
		});
		if (r !== o && (i -= o - r, n[e] = o, uD(i, 0))) break;
	}
	return n;
}
//#endregion
//#region node_modules/reka-ui/dist/composables/useWindowSplitterPanelGroupBehavior.js
function $D({ eagerValuesRef: e, groupId: t, layout: n, panelDataArray: r, panelGroupElement: i, setLayout: a, getPanelDataWithPercentConstraints: o }) {
	Tr((e) => {
		let r = i.value;
		if (!r) return;
		let a = o();
		if (!a) return;
		let s = QE(t, r);
		for (let e = 0; e < a.length - 1; e++) {
			let { valueMax: t, valueMin: r, valueNow: i } = sD({
				layout: n.value,
				panelsArray: a,
				pivotIndices: [e, e + 1]
			}), o = s[e];
			if (o != null) {
				let n = a[e];
				JE(n), o.setAttribute("aria-controls", n.id), o.setAttribute("aria-valuemax", `${Math.round(t)}`), o.setAttribute("aria-valuemin", `${Math.round(r)}`), o.setAttribute("aria-valuenow", i == null ? "" : `${Math.round(i)}`);
			}
		}
		e(() => {
			s.forEach((e) => {
				e.removeAttribute("aria-controls"), e.removeAttribute("aria-valuemax"), e.removeAttribute("aria-valuemin"), e.removeAttribute("aria-valuenow");
			});
		});
	}), Tr((r) => {
		let s = i.value;
		if (!s) return;
		let c = e.value;
		JE(c);
		let l = o();
		if (!l) return;
		let { panelDataArray: u } = c;
		JE(YE(t, s) != null, `No group found for id "${t}"`);
		let d = QE(t, s);
		JE(d);
		let f = d.map((e) => {
			let r = e.getAttribute("data-panel-resize-handle-id");
			JE(r);
			let [i, o] = $E(t, r, u, s);
			if (i == null || o == null) return () => {};
			let c = (e) => {
				if (!e.defaultPrevented) switch (e.key) {
					case "Enter": {
						e.preventDefault();
						let o = l.findIndex((e) => e.id === i);
						if (o >= 0) {
							let e = l[o];
							JE(e);
							let i = n.value[o], { collapsedSize: c = 0, collapsible: u, minSize: d = 0 } = e.constraints;
							if (i != null && u) {
								let e = hD({
									delta: uD(i, c) ? d - c : c - i,
									layout: n.value,
									panelConstraints: l.map((e) => e.constraints),
									pivotIndices: gD(t, r, s),
									trigger: "keyboard"
								});
								n.value !== e && a(e);
							}
						}
						break;
					}
				}
			};
			return e.addEventListener("keydown", c), () => {
				e.removeEventListener("keydown", c);
			};
		});
		r(() => {
			f.forEach((e) => e());
		});
	});
}
//#endregion
//#region node_modules/reka-ui/dist/utils/storage.js
function eO(e) {
	try {
		if (typeof localStorage < "u") e.getItem = (e) => localStorage.getItem(e), e.setItem = (e, t) => {
			localStorage.setItem(e, t);
		};
		else throw TypeError("localStorage not supported in this environment");
	} catch (t) {
		console.error(t), e.getItem = () => null, e.setItem = () => {};
	}
}
function tO(e) {
	return `reka:${e}`;
}
function nO(e) {
	return e.map((e) => {
		let { constraints: t, id: n, idIsFromProps: r, order: i } = e;
		return r ? n : i ? `${i}:${JSON.stringify(t)}` : JSON.stringify(t);
	}).sort((e, t) => e.localeCompare(t)).join(",");
}
function rO(e, t) {
	try {
		let n = tO(e), r = t.getItem(n);
		if (r) {
			let e = JSON.parse(r);
			if (typeof e == "object" && e) return e;
		}
	} catch {}
	return null;
}
function iO(e, t, n) {
	return (rO(e, n) ?? {})[nO(t)] ?? null;
}
function aO(e, t, n, r, i) {
	let a = tO(e), o = nO(t), s = rO(e, i) ?? {}, c = {};
	t.forEach((e, t) => {
		(e.constraints.sizeUnit ?? "%") === "px" && (c[t] = "px");
	}), s[o] = {
		expandToSizes: Object.fromEntries(n.entries()),
		layout: r,
		...Object.keys(c).length > 0 && { sizeUnits: c }
	};
	try {
		i.setItem(a, JSON.stringify(s));
	} catch (e) {
		console.error(e);
	}
}
//#endregion
//#region node_modules/reka-ui/dist/Splitter/SplitterGroup.js
var oO = 100, sO = {
	getItem: (e) => (eO(sO), sO.getItem(e)),
	setItem: (e, t) => {
		eO(sO), sO.setItem(e, t);
	}
}, [cO, lO] = /* @__PURE__ */ cp("PanelGroup"), uO = /* @__PURE__ */ F({
	__name: "SplitterGroup",
	props: {
		id: {
			type: [String, null],
			required: !1
		},
		autoSaveId: {
			type: [String, null],
			required: !1,
			default: null
		},
		direction: {
			type: String,
			required: !0
		},
		keyboardResizeBy: {
			type: [Number, null],
			required: !1,
			default: 10
		},
		storage: {
			type: Object,
			required: !1,
			default: () => sO
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["layout"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = {}, { direction: a } = /* @__PURE__ */ xn(n), o = f_(n.id, "reka-splitter-group"), s = zg(), { forwardRef: c, currentElement: l } = Y(), u = /* @__PURE__ */ j(null), d = /* @__PURE__ */ j(null), f = /* @__PURE__ */ j(null), p = /* @__PURE__ */ j([]), m = /* @__PURE__ */ j({}), h = /* @__PURE__ */ j(/* @__PURE__ */ new Map()), g = /* @__PURE__ */ j(0), _ = q(() => ({
			autoSaveId: n.autoSaveId,
			direction: n.direction,
			dragState: u.value,
			id: o,
			keyboardResizeBy: n.keyboardResizeBy,
			storage: n.storage
		})), v = /* @__PURE__ */ j({
			layout: p.value,
			panelDataArray: [],
			panelDataArrayChanged: !1
		});
		function y() {
			if (d.value != null) return d.value;
			let e = l.value;
			if (e && e instanceof HTMLElement) {
				let t = e.getBoundingClientRect(), n = a.value === "horizontal" ? t.width : t.height;
				if (!Number.isNaN(n)) return d.value = n, n;
			}
			return null;
		}
		function b(e) {
			let t = e ?? y();
			return YD({
				panelDataArray: v.value.panelDataArray,
				groupSizeInPixels: t
			});
		}
		function x(e) {
			let t = b(e);
			return t ? v.value.panelDataArray.map((e, n) => ({
				...e,
				constraints: t[n]
			})) : null;
		}
		let S = (e) => p.value = e;
		function C(e) {
			let { panelDataArray: t } = v.value, n = y();
			return e.map((e, r) => {
				let i = t[r];
				return i && (i.constraints.sizeUnit ?? "%") === "px" && n != null ? e / 100 * n : e;
			});
		}
		$D({
			eagerValuesRef: v,
			groupId: o,
			layout: p,
			panelDataArray: v.value.panelDataArray,
			setLayout: S,
			panelGroupElement: l,
			getPanelDataWithPercentConstraints: x
		}), Tr((e) => {
			let t = l.value;
			if (!t || typeof ResizeObserver != "function") return;
			let n = new ResizeObserver((e) => {
				let t = e[0];
				if (!t) return;
				let { height: n, width: r } = t.contentRect, i = a.value === "horizontal" ? r : n;
				Number.isNaN(i) || (d.value = i);
			});
			t instanceof HTMLElement && n.observe(t), e(() => n.disconnect());
		}), Tr(() => {
			let { panelDataArray: e } = v.value, { autoSaveId: t } = n;
			if (t) {
				if (p.value.length === 0 || p.value.length !== e.length) return;
				let r = i[t];
				r || (r = fD(aO, oO), i[t] = r);
				let a = [...e], o = new Map(h.value);
				r(t, a, o, p.value, n.storage);
			}
		});
		function w(e, t) {
			let { panelDataArray: n } = v.value, r = ce(n, e);
			return qD({
				defaultSize: t,
				dragState: u.value,
				layout: p.value,
				panelData: n,
				panelIndex: r
			});
		}
		function T(e) {
			let { panelDataArray: t } = v.value;
			t.push(e), t.sort((e, t) => {
				let n = e.order, r = t.order;
				return n == null && r == null ? 0 : n == null ? -1 : r == null ? 1 : n - r;
			}), v.value.panelDataArrayChanged = !0;
		}
		P(() => v.value.panelDataArrayChanged, () => {
			if (v.value.panelDataArrayChanged) {
				v.value.panelDataArrayChanged = !1;
				let { autoSaveId: e, storage: t } = _.value, { layout: n, panelDataArray: i } = v.value, a = null;
				if (e) {
					let n = iO(e, i, t);
					n && (h.value = new Map(Object.entries(n.expandToSizes)), a = n.layout);
				}
				if (a === null) {
					let e = x();
					if (!e) return;
					a = cD({ panelDataArray: e });
				}
				let o = b();
				if (!o) return;
				let s = QD({
					layout: a,
					panelConstraints: o
				});
				f.value = y(), np(n, s) || (S(s), v.value.layout = s, r("layout", C(s)), dD(i, s, m.value, y()));
			}
		}), P(d, (e, t) => {
			if (t == null || e == null) return;
			let { layout: n, panelDataArray: i } = v.value;
			if (n.length === 0 || !XD(i)) return;
			let a = f.value;
			if (a != null && a > 0 && a < 50 && e > a * 10) {
				v.value.panelDataArrayChanged = !0;
				return;
			}
			let o = ZD({
				layout: n,
				panelDataArray: i,
				prevGroupSize: t,
				nextGroupSize: e
			});
			if (!o) return;
			let s = b(e);
			if (!s) return;
			let c = QD({
				layout: o,
				panelConstraints: s
			});
			mD(n, c) || (S(c), v.value.layout = c, r("layout", C(c)), dD(i, c, m.value, y()));
		});
		function ee(e) {
			return function(t) {
				t.preventDefault();
				let n = l.value;
				if (!n) return () => null;
				let { direction: i, dragState: a, id: o, keyboardResizeBy: c } = _.value, { layout: u, panelDataArray: d } = v.value, { initialLayout: f } = a ?? {}, p = gD(o, e, n), h = oD(t, e, i, a, c, n);
				if (h === 0) return;
				let x = i === "horizontal";
				s.value === "rtl" && x && (h = -h);
				let w = b();
				if (!w) return;
				let T = hD({
					delta: h,
					layout: f ?? u,
					panelConstraints: w,
					pivotIndices: p,
					trigger: eD(t) ? "keyboard" : "mouse-or-touch"
				}), ee = !mD(u, T);
				(tD(t) || nD(t)) && g.value !== h && (g.value = h, ee ? RD(e, 0) : x ? RD(e, h < 0 ? 1 : 2) : RD(e, h < 0 ? 4 : 8)), ee && (S(T), v.value.layout = T, r("layout", C(T)), dD(d, T, m.value, y()));
			};
		}
		function E(e, t) {
			let { layout: n, panelDataArray: i } = v.value, a = b();
			if (!a) return;
			let o = ce(i, e), s = e.constraints.sizeUnit ?? "%", c = t;
			if (s === "px") {
				let e = y();
				e != null && (c = t / e * 100);
			}
			let { panelSize: l, pivotIndices: u } = le(i, e, n, a);
			JE(l != null);
			let d = hD({
				delta: o === i.length - 1 ? l - c : c - l,
				layout: n,
				panelConstraints: a,
				pivotIndices: u,
				trigger: "imperative-api"
			});
			mD(n, d) || (S(d), v.value.layout = d, r("layout", C(d)), dD(i, d, m.value, y()));
		}
		function te(e, t) {
			let { layout: n, panelDataArray: r } = v.value, i = ce(r, e);
			r[i] = e, v.value.panelDataArrayChanged = !0;
			let a = b();
			if (!a) return;
			let o = a[i], { panelSize: s } = le(r, e, n, a);
			if (s === null) return;
			let c = o?.collapsedSize ?? 0, l = o?.maxSize ?? 100, u = o?.minSize ?? 0;
			o?.collapsible && se(e) ? s !== c && E(e, c) : s < u ? E(e, u) : s > l && E(e, l);
		}
		function ne(e, t) {
			let { direction: n } = _.value, { layout: r } = v.value;
			if (!l.value) return;
			let i = XE(e, l.value);
			JE(i);
			let a = iD(n, t);
			u.value = {
				dragHandleId: e,
				dragHandleRect: i.getBoundingClientRect(),
				initialCursorPosition: a,
				initialLayout: r
			};
		}
		function re() {
			u.value = null;
		}
		function D(e) {
			let { panelDataArray: t } = v.value, n = ce(t, e);
			n >= 0 && (t.splice(n, 1), delete m.value[e.id], v.value.panelDataArrayChanged = !0);
		}
		function ie(e) {
			let { layout: t, panelDataArray: n } = v.value;
			if (e.constraints.collapsible) {
				let i = b();
				if (!i) return;
				let { collapsedSize: a = 0, panelSize: o, pivotIndices: s } = le(n, e, t, i);
				if (JE(o != null, `Panel size not found for panel "${e.id}"`), o !== a) {
					let c = e.constraints.sizeUnit ?? "%", l = d.value ?? y(), u = c === "px" && l ? o / 100 * l : o;
					h.value.set(e.id, u);
					let f = hD({
						delta: ce(n, e) === n.length - 1 ? o - a : a - o,
						layout: t,
						panelConstraints: i,
						pivotIndices: s,
						trigger: "imperative-api"
					});
					mD(t, f) || (S(f), v.value.layout = f, r("layout", C(f)), dD(n, f, m.value, y()));
				}
			}
		}
		function ae(e) {
			let { layout: t, panelDataArray: n } = v.value;
			if (e.constraints.collapsible) {
				let i = b();
				if (!i) return;
				let { collapsedSize: a = 0, panelSize: o = 0, minSize: s = 0, pivotIndices: c } = le(n, e, t, i);
				if (lD(o, a) <= 0) {
					let a = h.value.get(e.id), l = e.constraints.sizeUnit ?? "%", u = d.value ?? y(), f = l === "px" && u ? a == null ? null : a / u * 100 : a, p = f != null && f >= s ? f : s, g = hD({
						delta: ce(n, e) === n.length - 1 ? o - p : p - o,
						layout: t,
						panelConstraints: i,
						pivotIndices: c,
						trigger: "imperative-api"
					});
					mD(t, g) || (S(g), v.value.layout = g, r("layout", C(g)), dD(n, g, m.value, y()));
				}
			}
		}
		function oe(e) {
			let { layout: t, panelDataArray: n } = v.value, { panelSize: r } = le(n, e, t);
			if (JE(r != null, `Panel size not found for panel "${e.id}"`), (e.constraints.sizeUnit ?? "%") === "px") {
				let e = y();
				if (e != null) return r / 100 * e;
			}
			return r;
		}
		function se(e) {
			let { layout: t, panelDataArray: n } = v.value, r = b(), { collapsedSize: i = 0, collapsible: a, panelSize: o } = le(n, e, t, r ?? void 0);
			if (!a) return !1;
			if (o === void 0) {
				let t = ce(n, e), i = r?.[t] ?? e.constraints;
				return i.defaultSize === i.collapsedSize;
			} else return o === i;
		}
		function O(e) {
			let { layout: t, panelDataArray: n } = v.value, { collapsedSize: r = 0, collapsible: i, panelSize: a } = le(n, e, t, b() ?? void 0);
			return JE(a != null, `Panel size not found for panel "${e.id}"`), !i || a > r;
		}
		lO({
			direction: a,
			dragState: u.value,
			groupId: o,
			reevaluatePanelConstraints: te,
			registerPanel: T,
			registerResizeHandle: ee,
			resizePanel: E,
			startDragging: ne,
			stopDragging: re,
			unregisterPanel: D,
			panelGroupElement: l,
			collapsePanel: ie,
			expandPanel: ae,
			isPanelCollapsed: se,
			isPanelExpanded: O,
			getPanelSize: oe,
			getPanelStyle: w
		});
		function ce(e, t) {
			return e.findIndex((e) => e === t || e.id === t.id);
		}
		function le(e, t, n, r) {
			let i = ce(e, t), a = i === e.length - 1 ? [i - 1, i] : [i, i + 1], o = (r ?? b())?.[i], s = n[i];
			return {
				...o ?? t.constraints,
				panelSize: s,
				pivotIndices: a
			};
		}
		return (e, t) => (z(), V(M(X), {
			ref: M(c),
			as: e.as,
			"as-child": e.asChild,
			style: he({
				display: "flex",
				flexDirection: M(a) === "horizontal" ? "row" : "column",
				height: "100%",
				overflow: "hidden",
				width: "100%"
			}),
			"data-panel-group": "",
			"data-orientation": M(a),
			"data-panel-group-id": M(o)
		}, {
			default: N(() => [L(e.$slots, "default", { layout: p.value })]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"style",
			"data-orientation",
			"data-panel-group-id"
		]));
	}
}), dO = /* @__PURE__ */ F({
	__name: "SplitterPanel",
	props: {
		collapsedSize: {
			type: Number,
			required: !1
		},
		collapsible: {
			type: Boolean,
			required: !1
		},
		defaultSize: {
			type: Number,
			required: !1
		},
		id: {
			type: String,
			required: !1
		},
		maxSize: {
			type: Number,
			required: !1
		},
		minSize: {
			type: Number,
			required: !1
		},
		order: {
			type: Number,
			required: !1
		},
		sizeUnit: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: [
		"collapse",
		"expand",
		"resize"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, a = cO();
		if (a === null) throw Error("SplitterPanel components must be rendered within a SplitterGroup container");
		let { collapsePanel: o, expandPanel: s, getPanelSize: c, getPanelStyle: l, isPanelCollapsed: u, resizePanel: d, groupId: f, reevaluatePanelConstraints: p, registerPanel: m, unregisterPanel: h } = a, g = f_(r.id, "reka-splitter-panel"), _ = q(() => ({
			callbacks: {
				onCollapse: () => i("collapse"),
				onExpand: () => i("expand"),
				onResize: (...e) => i("resize", ...e)
			},
			constraints: {
				collapsedSize: r.collapsedSize && Number.parseFloat(r.collapsedSize.toFixed(10)),
				collapsible: r.collapsible,
				defaultSize: r.defaultSize,
				maxSize: r.maxSize,
				minSize: r.minSize,
				sizeUnit: r.sizeUnit ?? "%"
			},
			id: g,
			idIsFromProps: r.id !== void 0,
			order: r.order
		}));
		P(() => _.value.constraints, (e, t) => {
			(t.collapsedSize !== e.collapsedSize || t.collapsible !== e.collapsible || t.maxSize !== e.maxSize || t.minSize !== e.minSize || t.sizeUnit !== e.sizeUnit) && p(_.value, t);
		}, { deep: !0 }), I(() => {
			m(_.value);
		}), Yi(() => {
			h(_.value);
		});
		let v = q(() => l(_.value, r.defaultSize)), y = q(() => u(_.value)), b = q(() => !y.value);
		function x() {
			o(_.value);
		}
		function S() {
			s(_.value);
		}
		function C(e) {
			d(_.value, e);
		}
		return t({
			collapse: x,
			expand: S,
			getSize() {
				return c(_.value);
			},
			resize: C,
			isCollapsed: y,
			isExpanded: b
		}), (e, t) => (z(), V(M(X), {
			id: M(g),
			style: he(v.value),
			as: e.as,
			"as-child": e.asChild,
			"data-panel": "",
			"data-panel-collapsible": e.collapsible || void 0,
			"data-panel-group-id": M(f),
			"data-panel-id": M(g),
			"data-panel-size": Number.parseFloat(`${v.value.flexGrow}`).toFixed(1),
			"data-state": e.collapsible ? y.value ? "collapsed" : "expanded" : void 0
		}, {
			default: N(() => [L(e.$slots, "default", {
				isCollapsed: y.value,
				isExpanded: b.value,
				expand: S,
				collapse: x,
				resize: C
			})]),
			_: 3
		}, 8, [
			"id",
			"style",
			"as",
			"as-child",
			"data-panel-collapsible",
			"data-panel-group-id",
			"data-panel-id",
			"data-panel-size",
			"data-state"
		]));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/composables/useWindowSplitterBehavior.js
function fO({ disabled: e, handleId: t, resizeHandler: n, panelGroupElement: r }) {
	Tr((i) => {
		let a = r.value;
		if (e.value || n.value === null || a === null) return;
		let o = XE(t, a);
		if (o == null) return;
		let s = (e) => {
			if (!e.defaultPrevented) switch (e.key) {
				case "ArrowDown":
				case "ArrowLeft":
				case "ArrowRight":
				case "ArrowUp":
				case "End":
				case "Home":
					e.preventDefault(), n.value?.(e);
					break;
				case "F6": {
					e.preventDefault();
					let n = o.getAttribute("data-panel-group-id");
					JE(n);
					let r = QE(n, a), i = ZE(n, t, a);
					JE(i !== null), r[e.shiftKey ? i > 0 ? i - 1 : r.length - 1 : i + 1 < r.length ? i + 1 : 0].focus();
					break;
				}
			}
		};
		o.addEventListener("keydown", s), i(() => {
			o.removeEventListener("keydown", s);
		});
	});
}
//#endregion
//#region node_modules/reka-ui/dist/Splitter/SplitterResizeHandle.js
var pO = /* @__PURE__ */ F({
	__name: "SplitterResizeHandle",
	props: {
		id: {
			type: String,
			required: !1
		},
		hitAreaMargins: {
			type: Object,
			required: !1
		},
		tabindex: {
			type: Number,
			required: !1,
			default: 0
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		nonce: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["dragging"],
	setup(e, { emit: t }) {
		let n = e, r = t, { forwardRef: i, currentElement: a } = Y(), { disabled: o } = /* @__PURE__ */ xn(n), s = cO();
		if (s === null) throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
		let { direction: c, groupId: l, registerResizeHandle: u, startDragging: d, stopDragging: f, panelGroupElement: p } = s, m = f_(n.id, "reka-splitter-resize-handle"), h = /* @__PURE__ */ j("inactive"), g = /* @__PURE__ */ j(!1), _ = /* @__PURE__ */ j(null), { nonce: v } = /* @__PURE__ */ xn(n), y = Vx(v);
		return P(o, () => {
			ip && (o.value ? _.value = null : _.value = u(m));
		}, { immediate: !0 }), Tr((e) => {
			if (o.value || _.value === null) return;
			let t = a.value;
			t && (JE(t), e(ND(m, t, c, {
				coarse: n.hitAreaMargins?.coarse ?? 15,
				fine: n.hitAreaMargins?.fine ?? 5
			}, y, (e, t, n) => {
				if (t) switch (e) {
					case "down":
						h.value = "drag", d(m, n), r("dragging", !0);
						break;
					case "move":
						h.value !== "drag" && (h.value = "hover"), _.value?.(n);
						break;
					case "up":
						h.value = "hover", f(), r("dragging", !1);
						break;
				}
				else h.value = "inactive";
			})));
		}), fO({
			disabled: o,
			resizeHandler: _,
			handleId: m,
			panelGroupElement: p
		}), (e, t) => (z(), V(M(X), {
			id: M(m),
			ref: M(i),
			style: {
				touchAction: "none",
				userSelect: "none"
			},
			as: e.as,
			"as-child": e.asChild,
			role: "separator",
			"data-resize-handle": "",
			tabindex: e.tabindex,
			"data-state": h.value,
			"data-disabled": M(o) ? "" : void 0,
			"data-orientation": M(c),
			"data-panel-group-id": M(l),
			"data-resize-handle-active": h.value === "drag" ? "pointer" : g.value ? "keyboard" : void 0,
			"data-resize-handle-state": h.value,
			"data-panel-resize-handle-enabled": !M(o),
			"data-panel-resize-handle-id": M(m),
			onBlur: t[0] ||= (e) => g.value = !1,
			onFocus: t[1] ||= (e) => g.value = !1
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"id",
			"as",
			"as-child",
			"tabindex",
			"data-state",
			"data-disabled",
			"data-orientation",
			"data-panel-group-id",
			"data-resize-handle-active",
			"data-resize-handle-state",
			"data-panel-resize-handle-enabled",
			"data-panel-resize-handle-id"
		]));
	}
}), mO = {
	"aria-live": "polite",
	"aria-atomic": "true",
	role: "status",
	style: {
		transform: "translateX(-100%)",
		position: "absolute",
		pointerEvents: "none",
		opacity: 0,
		margin: 0
	}
}, [hO, gO] = /* @__PURE__ */ cp("StepperRoot"), _O = /* @__PURE__ */ F({
	__name: "StepperRoot",
	props: {
		defaultValue: {
			type: Number,
			required: !1,
			default: 1
		},
		orientation: {
			type: String,
			required: !1,
			default: "horizontal"
		},
		dir: {
			type: String,
			required: !1
		},
		modelValue: {
			type: Number,
			required: !1
		},
		linear: {
			type: Boolean,
			required: !1,
			default: !0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, { dir: a, orientation: o, linear: s } = /* @__PURE__ */ xn(r), c = zg(a), l = /* @__PURE__ */ j(/* @__PURE__ */ new Set()), u = Ef(r, "modelValue", i, {
			defaultValue: r.defaultValue,
			passive: r.modelValue === void 0
		}), d = q(() => Array.from(l.value)), f = q(() => u.value === 1), p = q(() => u.value === d.value.length), m = q(() => l.value.size);
		function h(e) {
			e > m.value || e < 1 || l.value.size && d.value[e] && d.value[e].getAttribute("disabled") || s.value && e > (u.value ?? 1) + 1 || (u.value = e);
		}
		function g() {
			h((u.value ?? 1) + 1);
		}
		function _() {
			h((u.value ?? 1) - 1);
		}
		function v() {
			return (u.value ?? 1) < m.value;
		}
		function y() {
			return (u.value ?? 1) > 1;
		}
		let b = /* @__PURE__ */ j(null), x = /* @__PURE__ */ j(null), S = q(() => b.value ? b.value.getAttribute("disabled") === "" : !0), C = q(() => x.value ? x.value.getAttribute("disabled") === "" : !0);
		return P(u, async () => {
			await er(() => {
				b.value = d.value.length && u.value < d.value.length ? d.value[u.value] : null, x.value = d.value.length && u.value > 1 ? d.value[u.value - 2] : null;
			});
		}), P(d, async () => {
			await er(() => {
				b.value = d.value.length && u.value < d.value.length ? d.value[u.value] : null, x.value = d.value.length && u.value > 1 ? d.value[u.value - 2] : null;
			});
		}), gO({
			modelValue: u,
			changeModelValue: (e) => {
				u.value = e;
			},
			orientation: o,
			dir: c,
			linear: s,
			totalStepperItems: l
		}), t({
			goToStep: h,
			nextStep: g,
			prevStep: _,
			modelValue: u,
			totalSteps: m,
			isNextDisabled: S,
			isPrevDisabled: C,
			isFirstStep: f,
			isLastStep: p,
			hasNext: v,
			hasPrev: y
		}), Y(), (e, t) => (z(), V(M(X), {
			role: "group",
			"aria-label": "progress",
			as: e.as,
			"as-child": e.asChild,
			"data-linear": M(s) ? "" : void 0,
			"data-orientation": e.orientation
		}, {
			default: N(() => [L(e.$slots, "default", {
				modelValue: M(u),
				totalSteps: l.value.size,
				isNextDisabled: S.value,
				isPrevDisabled: C.value,
				isFirstStep: f.value,
				isLastStep: p.value,
				goToStep: h,
				nextStep: g,
				prevStep: _,
				hasNext: v,
				hasPrev: y
			}), H("div", mO, " Step " + De(M(u)) + " of " + De(l.value.size), 1)]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-linear",
			"data-orientation"
		]));
	}
}), [vO, yO] = /* @__PURE__ */ cp("StepperItem"), bO = /* @__PURE__ */ F({
	__name: "StepperItem",
	props: {
		step: {
			type: Number,
			required: !0
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		completed: {
			type: Boolean,
			required: !1,
			default: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let { disabled: t, step: n, completed: r } = /* @__PURE__ */ xn(e), { forwardRef: i } = Y(), a = hO(), o = f_(void 0, "reka-stepper-item-title"), s = f_(void 0, "reka-stepper-item-description"), c = q(() => r.value ? "completed" : a.modelValue.value === n.value ? "active" : a.modelValue.value > n.value ? "completed" : "inactive"), l = q(() => t.value ? !1 : a.linear.value ? n.value <= a.modelValue.value || n.value === a.modelValue.value + 1 : !0);
		return yO({
			titleId: o,
			descriptionId: s,
			state: c,
			disabled: t,
			step: n,
			isFocusable: l
		}), (e, n) => (z(), V(M(X), {
			ref: M(i),
			as: e.as,
			"as-child": e.asChild,
			"aria-current": c.value === "active" ? "true" : void 0,
			"data-state": c.value,
			disabled: M(t) || !l.value ? "" : void 0,
			"data-disabled": M(t) || !l.value ? "" : void 0,
			"data-orientation": M(a).orientation.value
		}, {
			default: N(() => [L(e.$slots, "default", { state: c.value })]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"aria-current",
			"data-state",
			"disabled",
			"data-disabled",
			"data-orientation"
		]));
	}
}), xO = /* @__PURE__ */ F({
	__name: "StepperDescription",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "p"
		}
	},
	setup(e) {
		let t = e;
		Y();
		let n = vO();
		return (e, r) => (z(), V(M(X), K(t, { id: M(n).descriptionId }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), SO = /* @__PURE__ */ F({
	__name: "StepperIndicator",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = vO();
		return Y(), (e, r) => (z(), V(M(X), A(W(t)), {
			default: N(() => [L(e.$slots, "default", { step: M(n).step.value }, () => [_s(" Step " + De(M(n).step.value), 1)])]),
			_: 3
		}, 16));
	}
}), CO = /* @__PURE__ */ F({
	__name: "StepperSeparator",
	props: {
		orientation: {
			type: String,
			required: !1
		},
		decorative: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, n = hO(), r = vO();
		return Y(), (e, i) => (z(), V(M(qE), K(t, {
			decorative: "",
			orientation: M(n).orientation.value,
			"data-state": M(r).state.value
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["orientation", "data-state"]));
	}
}), wO = /* @__PURE__ */ F({
	__name: "StepperTitle",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "h4"
		}
	},
	setup(e) {
		let t = e, n = vO();
		return Y(), (e, r) => (z(), V(M(X), K(t, { id: M(n).titleId }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), TO = /* @__PURE__ */ F({
	__name: "StepperTrigger",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = hO(), n = vO(), r = p_(), i = q(() => Array.from(t.totalStepperItems.value));
		function a(e) {
			if (!n.disabled.value) {
				if (t.linear.value) {
					if ((n.step.value <= t.modelValue.value || n.step.value === t.modelValue.value + 1) && e.ctrlKey === !1) {
						t.changeModelValue(n.step.value);
						return;
					}
				} else if (e.ctrlKey === !1) {
					t.changeModelValue(n.step.value);
					return;
				}
				e.preventDefault();
			}
		}
		function o(e) {
			e.preventDefault(), !n.disabled.value && ((e.key === r.ENTER || e.key === r.SPACE) && !e.ctrlKey && !e.shiftKey && t.changeModelValue(n.step.value), [
				r.ARROW_LEFT,
				r.ARROW_RIGHT,
				r.ARROW_UP,
				r.ARROW_DOWN
			].includes(e.key) && hp(e, lp(), void 0, {
				itemsArray: i.value,
				focus: !0,
				loop: !1,
				arrowKeyOptions: t.orientation.value,
				dir: t.dir.value
			}));
		}
		let { forwardRef: s, currentElement: c } = Y();
		return I(() => {
			t.totalStepperItems.value.add(c.value);
		}), Yi(() => {
			t.totalStepperItems.value.delete(c.value);
		}), (e, r) => (z(), V(M(X), {
			ref: M(s),
			type: e.as === "button" ? "button" : void 0,
			as: e.as,
			"as-child": e.asChild,
			"data-state": M(n).state.value,
			disabled: M(n).disabled.value || !M(n).isFocusable.value ? "" : void 0,
			"data-disabled": M(n).disabled.value || !M(n).isFocusable.value ? "" : void 0,
			"data-orientation": M(t).orientation.value,
			tabindex: M(n).isFocusable.value ? 0 : -1,
			"aria-describedby": M(n).descriptionId,
			"aria-labelledby": M(n).titleId,
			onMousedown: Xl(a, ["left"]),
			onKeydown: Ql(o, [
				"enter",
				"space",
				"left",
				"right",
				"up",
				"down"
			])
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"type",
			"as",
			"as-child",
			"data-state",
			"disabled",
			"data-disabled",
			"data-orientation",
			"tabindex",
			"aria-describedby",
			"aria-labelledby"
		]));
	}
}), [EO, DO] = /* @__PURE__ */ cp("SwitchRoot"), OO = /* @__PURE__ */ F({
	__name: "SwitchRoot",
	props: {
		defaultValue: {
			type: null,
			required: !1
		},
		modelValue: {
			type: null,
			required: !1,
			default: void 0
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		id: {
			type: String,
			required: !1
		},
		value: {
			type: String,
			required: !1,
			default: "on"
		},
		trueValue: {
			type: null,
			required: !1,
			default: () => !0
		},
		falseValue: {
			type: null,
			required: !1,
			default: () => !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		},
		name: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, { disabled: i } = /* @__PURE__ */ xn(n), a = Ef(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? n.falseValue,
			passive: n.modelValue === void 0
		}), o = q(() => a.value === n.trueValue);
		function s() {
			i.value || (a.value = o.value ? n.falseValue : n.trueValue);
		}
		let { forwardRef: c, currentElement: l } = Y(), u = Gg(l), d = q(() => n.id && l.value ? document.querySelector(`[for="${n.id}"]`)?.innerText : void 0);
		return DO({
			checked: o,
			toggleCheck: s,
			disabled: i
		}), (e, t) => (z(), V(M(X), K(e.$attrs, {
			id: e.id,
			ref: M(c),
			role: "switch",
			type: e.as === "button" ? "button" : void 0,
			value: e.value,
			"aria-label": e.$attrs["aria-label"] || d.value,
			"aria-checked": o.value,
			"aria-required": e.required,
			"data-state": o.value ? "checked" : "unchecked",
			"data-disabled": M(i) ? "" : void 0,
			"as-child": e.asChild,
			as: e.as,
			disabled: M(i),
			onClick: s,
			onKeydown: Ql(Xl(s, ["prevent"]), ["enter"])
		}), {
			default: N(() => [L(e.$slots, "default", {
				modelValue: M(a),
				checked: o.value
			}), M(u) && e.name ? (z(), V(M(Zv), {
				key: 0,
				type: "checkbox",
				name: e.name,
				disabled: M(i),
				required: e.required,
				value: e.value,
				checked: o.value
			}, null, 8, [
				"name",
				"disabled",
				"required",
				"value",
				"checked"
			])) : G("v-if", !0)]),
			_: 3
		}, 16, [
			"id",
			"type",
			"value",
			"aria-label",
			"aria-checked",
			"aria-required",
			"data-state",
			"data-disabled",
			"as-child",
			"as",
			"disabled",
			"onKeydown"
		]));
	}
}), kO = /* @__PURE__ */ F({
	__name: "SwitchThumb",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		let t = EO();
		return Y(), (e, n) => (z(), V(M(X), {
			"data-state": M(t).checked.value ? "checked" : "unchecked",
			"data-disabled": M(t).disabled.value ? "" : void 0,
			"as-child": e.asChild,
			as: e.as
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"data-state",
			"data-disabled",
			"as-child",
			"as"
		]));
	}
}), [AO, jO] = /* @__PURE__ */ cp("TabsRoot"), MO = /* @__PURE__ */ F({
	__name: "TabsRoot",
	props: {
		defaultValue: {
			type: null,
			required: !1
		},
		orientation: {
			type: String,
			required: !1,
			default: "horizontal"
		},
		dir: {
			type: String,
			required: !1
		},
		activationMode: {
			type: String,
			required: !1,
			default: "automatic"
		},
		modelValue: {
			type: null,
			required: !1
		},
		unmountOnHide: {
			type: Boolean,
			required: !1,
			default: !0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, { orientation: i, unmountOnHide: a, dir: o } = /* @__PURE__ */ xn(n), s = zg(o);
		Y();
		let c = Ef(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: n.modelValue === void 0
		}), l = /* @__PURE__ */ j(), u = /* @__PURE__ */ fn(/* @__PURE__ */ new Set());
		return jO({
			modelValue: c,
			changeModelValue: (e) => {
				c.value = e;
			},
			orientation: i,
			dir: s,
			unmountOnHide: a,
			activationMode: n.activationMode,
			baseId: f_(void 0, "reka-tabs"),
			tabsList: l,
			contentIds: u,
			registerContent: (e) => {
				u.value = new Set([...u.value, e]);
			},
			unregisterContent: (e) => {
				let t = new Set(u.value);
				t.delete(e), u.value = t;
			}
		}), (e, t) => (z(), V(M(X), {
			dir: M(s),
			"data-orientation": M(i),
			"as-child": e.asChild,
			as: e.as
		}, {
			default: N(() => [L(e.$slots, "default", { modelValue: M(c) })]),
			_: 3
		}, 8, [
			"dir",
			"data-orientation",
			"as-child",
			"as"
		]));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Tabs/utils.js
function NO(e, t) {
	return `${e}-trigger-${t}`;
}
function PO(e, t) {
	return `${e}-content-${t}`;
}
//#endregion
//#region node_modules/reka-ui/dist/Tabs/TabsContent.js
var FO = /* @__PURE__ */ F({
	__name: "TabsContent",
	props: {
		value: {
			type: [String, Number],
			required: !0
		},
		forceMount: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, { forwardRef: n } = Y(), r = AO(), i = q(() => NO(r.baseId, t.value)), a = q(() => PO(r.baseId, t.value)), o = q(() => t.value === r.modelValue.value), s = /* @__PURE__ */ j(o.value);
		return I(() => {
			r.registerContent(t.value), requestAnimationFrame(() => {
				s.value = !1;
			});
		}), Ji(() => {
			r.unregisterContent(t.value);
		}), (e, t) => (z(), V(M(S_), {
			present: e.forceMount || o.value,
			"force-mount": ""
		}, {
			default: N(({ present: t }) => [U(M(X), {
				id: a.value,
				ref: M(n),
				"as-child": e.asChild,
				as: e.as,
				role: "tabpanel",
				"data-state": o.value ? "active" : "inactive",
				"data-orientation": M(r).orientation.value,
				"aria-labelledby": i.value,
				hidden: !t,
				tabindex: "0",
				style: he({ animationDuration: s.value ? "0s" : void 0 })
			}, {
				default: N(() => [!M(r).unmountOnHide.value || t ? L(e.$slots, "default", { key: 0 }) : G("v-if", !0)]),
				_: 2
			}, 1032, [
				"id",
				"as-child",
				"as",
				"data-state",
				"data-orientation",
				"aria-labelledby",
				"hidden",
				"style"
			])]),
			_: 3
		}, 8, ["present"]));
	}
}), IO = /* @__PURE__ */ F({
	__name: "TabsList",
	props: {
		loop: {
			type: Boolean,
			required: !1,
			default: !0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let { loop: t } = /* @__PURE__ */ xn(e), { forwardRef: n, currentElement: r } = Y(), i = AO();
		return i.tabsList = r, (e, r) => (z(), V(M(yS), {
			"as-child": "",
			orientation: M(i).orientation.value,
			dir: M(i).dir.value,
			loop: M(t)
		}, {
			default: N(() => [U(M(X), {
				ref: M(n),
				role: "tablist",
				"as-child": e.asChild,
				as: e.as,
				"aria-orientation": M(i).orientation.value
			}, {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 8, [
				"as-child",
				"as",
				"aria-orientation"
			])]),
			_: 3
		}, 8, [
			"orientation",
			"dir",
			"loop"
		]));
	}
}), LO = /* @__PURE__ */ F({
	__name: "TabsTrigger",
	props: {
		value: {
			type: [String, Number],
			required: !0
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e, { forwardRef: n } = Y(), r = AO(), i = q(() => NO(r.baseId, t.value)), a = q(() => r.contentIds.value.has(t.value) ? PO(r.baseId, t.value) : void 0), o = q(() => t.value === r.modelValue.value);
		return (e, t) => (z(), V(M(bS), {
			"as-child": "",
			focusable: !e.disabled,
			active: o.value
		}, {
			default: N(() => [U(M(X), {
				id: i.value,
				ref: M(n),
				role: "tab",
				type: e.as === "button" ? "button" : void 0,
				as: e.as,
				"as-child": e.asChild,
				"aria-selected": o.value ? "true" : "false",
				"aria-controls": a.value,
				"data-state": o.value ? "active" : "inactive",
				disabled: e.disabled,
				"data-disabled": e.disabled ? "" : void 0,
				"data-orientation": M(r).orientation.value,
				onMousedown: t[0] ||= Xl((t) => {
					!e.disabled && t.ctrlKey === !1 ? M(r).changeModelValue(e.value) : t.preventDefault();
				}, ["left"]),
				onKeydown: t[1] ||= Ql((t) => M(r).changeModelValue(e.value), ["enter", "space"]),
				onFocus: t[2] ||= () => {
					let t = M(r).activationMode !== "manual";
					!o.value && !e.disabled && t && M(r).changeModelValue(e.value);
				}
			}, {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 8, [
				"id",
				"type",
				"as",
				"as-child",
				"aria-selected",
				"aria-controls",
				"data-state",
				"disabled",
				"data-disabled",
				"data-orientation"
			])]),
			_: 3
		}, 8, ["focusable", "active"]));
	}
}), [RO, zO] = /* @__PURE__ */ cp("TagsInputRoot"), BO = /* @__PURE__ */ F({
	__name: "TagsInputRoot",
	props: {
		modelValue: {
			type: [Array, null],
			required: !1
		},
		defaultValue: {
			type: Array,
			required: !1,
			default: () => []
		},
		addOnPaste: {
			type: Boolean,
			required: !1
		},
		addOnTab: {
			type: Boolean,
			required: !1
		},
		addOnBlur: {
			type: Boolean,
			required: !1
		},
		duplicate: {
			type: Boolean,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		delimiter: {
			type: null,
			required: !1,
			default: ","
		},
		dir: {
			type: String,
			required: !1
		},
		max: {
			type: Number,
			required: !1,
			default: 0
		},
		id: {
			type: String,
			required: !1
		},
		convertValue: {
			type: Function,
			required: !1
		},
		displayValue: {
			type: Function,
			required: !1,
			default: (e) => e.toString()
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		name: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		}
	},
	emits: [
		"update:modelValue",
		"invalid",
		"addTag",
		"removeTag"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, { addOnPaste: i, disabled: a, delimiter: o, max: s, id: c, dir: l, addOnBlur: u, addOnTab: d } = /* @__PURE__ */ xn(n), f = zg(l), p = Ef(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: !0,
			deep: !0
		}), { forwardRef: m, currentElement: h } = Y(), { focused: g } = Tf(h), _ = Gg(h), { getItems: v, CollectionSlot: y } = Jv({ isProvider: !0 }), b = /* @__PURE__ */ j(), x = /* @__PURE__ */ j(!1), S = q(() => Array.isArray(p.value) ? [...p.value] : []);
		function C(e) {
			if (e !== -1) {
				let t = v().filter((e) => e.ref.dataset.disabled !== "");
				p.value = p.value.filter((t, n) => n !== e), r("removeTag", t[e].value);
			}
		}
		return zO({
			modelValue: p,
			onAddValue: (e) => {
				let t = [...S.value], i = t.length > 0 && typeof t[0] == "object", a = t.length > 0 && typeof n.defaultValue[0] == "object";
				if ((i || a) && typeof n.convertValue != "function") throw Error("You must provide a `convertValue` function when using objects as values.");
				let o = n.convertValue ? n.convertValue(e) : e;
				if (t.length >= s.value && s.value) return r("invalid", o), !1;
				if (n.duplicate) return p.value = [...t, o], r("addTag", o), !0;
				if (t.includes(o)) x.value = !0;
				else return p.value = [...t, o], r("addTag", o), !0;
				return r("invalid", o), !1;
			},
			onRemoveValue: C,
			onInputKeydown: (e) => {
				let t = e.target, n = v().map((e) => e.ref).filter((e) => e.dataset.disabled !== "");
				if (!n.length) return;
				let r = n.at(-1);
				switch (e.key) {
					case "Delete":
					case "Backspace":
						if (t.selectionStart !== 0 || t.selectionEnd !== 0) break;
						if (b.value) {
							let t = n.findIndex((e) => e === b.value);
							C(t), b.value = b.value === r ? n.at(t - 1) : n.at(t + 1), e.preventDefault();
						} else e.key === "Backspace" && (b.value = r, e.preventDefault());
						break;
					case "Home":
					case "End":
					case "ArrowRight":
					case "ArrowLeft": {
						let i = e.key === "ArrowRight" && f.value === "ltr" || e.key === "ArrowLeft" && f.value === "rtl", a = !i;
						if (t.selectionStart !== 0 || t.selectionEnd !== 0) break;
						if (a && !b.value) b.value = r, e.preventDefault();
						else if (i && r && b.value === r) b.value = void 0, e.preventDefault();
						else if (b.value) {
							let t = hp(e, b.value, void 0, {
								itemsArray: n,
								loop: !1,
								dir: f.value
							});
							t && (b.value = t), e.preventDefault();
						}
						break;
					}
					case "ArrowUp":
					case "ArrowDown":
						b.value && e.preventDefault();
						break;
					default: b.value = void 0;
				}
			},
			selectedElement: b,
			isInvalidInput: x,
			addOnPaste: i,
			addOnBlur: u,
			addOnTab: d,
			dir: f,
			disabled: a,
			delimiter: o,
			max: s,
			id: c,
			displayValue: n.displayValue
		}), (e, t) => (z(), V(M(y), null, {
			default: N(() => [U(M(X), {
				ref: M(m),
				dir: M(f),
				as: e.as,
				"as-child": e.asChild,
				"data-invalid": x.value ? "" : void 0,
				"data-disabled": M(a) ? "" : void 0,
				"data-focused": M(g) ? "" : void 0
			}, {
				default: N(() => [L(e.$slots, "default", { modelValue: M(p) }), M(_) && e.name ? (z(), V(M(Zv), {
					key: 0,
					name: e.name,
					value: M(p),
					required: e.required,
					disabled: M(a)
				}, null, 8, [
					"name",
					"value",
					"required",
					"disabled"
				])) : G("v-if", !0)]),
				_: 3
			}, 8, [
				"dir",
				"as",
				"as-child",
				"data-invalid",
				"data-disabled",
				"data-focused"
			])]),
			_: 3
		}));
	}
}), VO = /* @__PURE__ */ F({
	__name: "TagsInputInput",
	props: {
		placeholder: {
			type: String,
			required: !1
		},
		autoFocus: {
			type: Boolean,
			required: !1
		},
		maxLength: {
			type: Number,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "input"
		}
	},
	setup(e) {
		let t = e, n = RO(), { forwardRef: r, currentElement: i } = Y();
		function a(e) {
			if (n.selectedElement.value = void 0, !n.addOnBlur.value) return;
			let t = e.target, r = e.relatedTarget, i = t.getAttribute("aria-controls");
			i && r?.closest(`#${CSS.escape(i)}`) || t.value && n.onAddValue(t.value) && (t.value = "");
		}
		function o(e) {
			n.addOnTab.value && u(e);
		}
		let s = /* @__PURE__ */ j(!1);
		function c() {
			s.value = !0;
		}
		function l() {
			er(() => {
				s.value = !1;
			});
		}
		async function u(e) {
			if (s.value || (await er(), e.defaultPrevented)) return;
			let t = e.target;
			t.value && (n.onAddValue(t.value) && (t.value = ""), e.preventDefault());
		}
		function d(e) {
			if (n.isInvalidInput.value = !1, e.data === null) return;
			let t = n.delimiter.value;
			if (t === e.data || t instanceof RegExp && t.test(e.data)) {
				let r = e.target;
				if (r.value = r.value.replace(t, ""), r.value.trim() === "") {
					r.value = "";
					return;
				}
				n.onAddValue(r.value) && (r.value = "");
			}
		}
		function f(e) {
			if (n.addOnPaste.value) {
				e.preventDefault();
				let t = e.clipboardData;
				if (!t) return;
				let r = t.getData("text");
				n.delimiter.value ? r.split(n.delimiter.value).forEach((e) => {
					n.onAddValue(e);
				}) : n.onAddValue(r);
			}
		}
		return I(() => {
			let e = i.value.nodeName === "INPUT" ? i.value : i.value.querySelector("input");
			e && setTimeout(() => {
				t.autoFocus && e?.focus();
			}, 1);
		}), (e, t) => (z(), V(M(X), {
			id: M(n).id?.value,
			ref: M(r),
			type: "text",
			autocomplete: "off",
			autocorrect: "off",
			autocapitalize: "off",
			as: e.as,
			"as-child": e.asChild,
			maxlength: e.maxLength,
			placeholder: e.placeholder,
			disabled: M(n).disabled.value,
			"data-invalid": M(n).isInvalidInput.value ? "" : void 0,
			onInput: d,
			onKeydown: [
				Ql(u, ["enter"]),
				Ql(o, ["tab"]),
				M(n).onInputKeydown
			],
			onBlur: a,
			onCompositionstart: c,
			onCompositionend: l,
			onPaste: f
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"id",
			"as",
			"as-child",
			"maxlength",
			"placeholder",
			"disabled",
			"data-invalid",
			"onKeydown"
		]));
	}
}), [HO, UO] = /* @__PURE__ */ cp("TagsInputItem"), WO = /* @__PURE__ */ F({
	__name: "TagsInputItem",
	props: {
		value: {
			type: null,
			required: !0
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	setup(e) {
		let t = e, { value: n } = /* @__PURE__ */ xn(t), r = RO(), { forwardRef: i, currentElement: a } = Y(), { CollectionItem: o } = Jv(), s = q(() => r.selectedElement.value === a.value), c = q(() => t.disabled || r.disabled.value), l = UO({
			value: n,
			isSelected: s,
			disabled: c,
			textId: "",
			displayValue: q(() => r.displayValue(n.value))
		});
		return (e, t) => (z(), V(M(o), { value: M(n) }, {
			default: N(() => [U(M(X), {
				ref: M(i),
				as: e.as,
				"as-child": e.asChild,
				"aria-labelledby": M(l).textId,
				"aria-current": s.value,
				"data-disabled": c.value ? "" : void 0,
				"data-state": s.value ? "active" : "inactive"
			}, {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"aria-labelledby",
				"aria-current",
				"data-disabled",
				"data-state"
			])]),
			_: 3
		}, 8, ["value"]));
	}
}), GO = /* @__PURE__ */ F({
	__name: "TagsInputItemDelete",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e;
		Y();
		let n = RO(), r = HO(), i = q(() => r.disabled?.value || n.disabled.value);
		function a() {
			if (i.value) return;
			let e = n.modelValue.value.findIndex((e) => tp(e, r.value.value));
			n.onRemoveValue(e);
		}
		return (e, n) => (z(), V(M(X), K({ tabindex: "-1" }, t, {
			"aria-labelledby": M(r).textId,
			"aria-current": M(r).isSelected.value,
			"data-state": M(r).isSelected.value ? "active" : "inactive",
			"data-disabled": i.value ? "" : void 0,
			type: e.as === "button" ? "button" : void 0,
			onClick: a
		}), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, [
			"aria-labelledby",
			"aria-current",
			"data-state",
			"data-disabled",
			"type"
		]));
	}
}), KO = /* @__PURE__ */ F({
	__name: "TagsInputItemText",
	props: {
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		let t = e, n = HO();
		return Y(), n.textId ||= f_(void 0, "reka-tags-input-item-text"), (e, r) => (z(), V(M(X), K(t, { id: M(n).textId }), {
			default: N(() => [L(e.$slots, "default", {}, () => [_s(De(M(n).displayValue.value), 1)])]),
			_: 3
		}, 16, ["id"]));
	}
}), [qO, JO] = /* @__PURE__ */ cp("ToggleGroupRoot"), YO = /* @__PURE__ */ F({
	__name: "ToggleGroupRoot",
	props: {
		rovingFocus: {
			type: Boolean,
			required: !1,
			default: !0
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		orientation: {
			type: String,
			required: !1
		},
		dir: {
			type: String,
			required: !1
		},
		loop: {
			type: Boolean,
			required: !1,
			default: !0
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		name: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		},
		type: {
			type: String,
			required: !1
		},
		modelValue: {
			type: null,
			required: !1
		},
		defaultValue: {
			type: null,
			required: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, { loop: i, rovingFocus: a, disabled: o, dir: s } = /* @__PURE__ */ xn(n), c = zg(s), { forwardRef: l, currentElement: u } = Y(), { modelValue: d, changeModelValue: f, isSingle: p } = P_(n, r), m = Gg(u);
		return JO({
			isSingle: p,
			modelValue: d,
			changeModelValue: f,
			dir: c,
			orientation: n.orientation,
			loop: i,
			rovingFocus: a,
			disabled: o
		}), (e, t) => (z(), V(ia(M(a) ? M(yS) : M(X)), {
			"as-child": "",
			orientation: M(a) ? e.orientation : void 0,
			dir: M(c),
			loop: M(a) ? M(i) : void 0
		}, {
			default: N(() => [U(M(X), {
				ref: M(l),
				role: "group",
				"as-child": e.asChild,
				as: e.as
			}, {
				default: N(() => [L(e.$slots, "default", { modelValue: M(d) }), M(m) && e.name ? (z(), V(Zv, {
					key: 0,
					name: e.name,
					required: e.required,
					value: M(d)
				}, null, 8, [
					"name",
					"required",
					"value"
				])) : G("v-if", !0)]),
				_: 3
			}, 8, ["as-child", "as"])]),
			_: 3
		}, 8, [
			"orientation",
			"dir",
			"loop"
		]));
	}
}), XO = /* @__PURE__ */ F({
	__name: "Toggle",
	props: {
		defaultValue: {
			type: Boolean,
			required: !1
		},
		modelValue: {
			type: [Boolean, null],
			required: !1,
			default: void 0
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		},
		name: {
			type: String,
			required: !1
		},
		required: {
			type: Boolean,
			required: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, { forwardRef: i, currentElement: a } = Y(), o = qO(null), s = Ef(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: n.modelValue === void 0
		});
		function c() {
			s.value = !s.value;
		}
		let l = q(() => s.value ? "on" : "off"), u = Gg(a);
		return (e, t) => (z(), V(M(X), {
			ref: M(i),
			type: e.as === "button" ? "button" : void 0,
			"as-child": n.asChild,
			as: e.as,
			"aria-pressed": M(s),
			"data-state": l.value,
			"data-disabled": e.disabled ? "" : void 0,
			disabled: e.disabled,
			onClick: c
		}, {
			default: N(() => [L(e.$slots, "default", {
				modelValue: M(s),
				disabled: e.disabled,
				pressed: M(s),
				state: l.value
			}), M(u) && e.name && !M(o) ? (z(), V(Zv, {
				key: 0,
				type: "checkbox",
				name: e.name,
				value: M(s),
				required: e.required
			}, null, 8, [
				"name",
				"value",
				"required"
			])) : G("v-if", !0)]),
			_: 3
		}, 8, [
			"type",
			"as-child",
			"as",
			"aria-pressed",
			"data-state",
			"data-disabled",
			"disabled"
		]));
	}
}), ZO = /* @__PURE__ */ F({
	__name: "ToggleGroupItem",
	props: {
		value: {
			type: null,
			required: !0
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e, n = qO(), r = q(() => n.disabled?.value || t.disabled), i = q(() => fp(n.modelValue.value, t.value)), { forwardRef: a } = Y();
		return (e, o) => (z(), V(ia(M(n).rovingFocus.value ? M(bS) : M(X)), K({ "as-child": "" }, M(n).rovingFocus.value ? {
			focusable: !r.value,
			active: i.value
		} : {}), {
			default: N(() => [U(M(XO), K(t, {
				ref: M(a),
				disabled: r.value,
				"model-value": i.value,
				"onUpdate:modelValue": o[0] ||= (t) => M(n).changeModelValue(e.value)
			}), {
				default: N((t) => [L(e.$slots, "default", A(W(t)))]),
				_: 3
			}, 16, ["disabled", "model-value"])]),
			_: 3
		}, 16));
	}
}), QO = /* @__PURE__ */ F({
	__name: "TooltipArrow",
	props: {
		width: {
			type: Number,
			required: !1,
			default: 10
		},
		height: {
			type: Number,
			required: !1,
			default: 5
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "svg"
		}
	},
	setup(e) {
		let t = e;
		return Y(), (e, n) => (z(), V(M(Bx), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [$O, ek] = /* @__PURE__ */ cp("TooltipProvider"), tk = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "TooltipProvider",
	props: {
		delayDuration: {
			type: Number,
			required: !1,
			default: 700
		},
		skipDelayDuration: {
			type: Number,
			required: !1,
			default: 300
		},
		disableHoverableContent: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disableClosingTrigger: {
			type: Boolean,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		ignoreNonKeyboardFocus: {
			type: Boolean,
			required: !1,
			default: !1
		},
		content: {
			type: Object,
			required: !1
		}
	},
	setup(e) {
		let { delayDuration: t, skipDelayDuration: n, disableHoverableContent: r, disableClosingTrigger: i, ignoreNonKeyboardFocus: a, disabled: o, content: s } = /* @__PURE__ */ xn(e);
		Y();
		let c = /* @__PURE__ */ j(!0), l = /* @__PURE__ */ j(!1), { start: u, stop: d } = $d(() => {
			c.value = !0;
		}, n, { immediate: !1 });
		return ek({
			isOpenDelayed: c,
			delayDuration: t,
			onOpen() {
				d(), c.value = !1;
			},
			onClose() {
				u();
			},
			isPointerInTransitRef: l,
			disableHoverableContent: r,
			disableClosingTrigger: i,
			disabled: o,
			ignoreNonKeyboardFocus: a,
			content: s
		}), (e, t) => L(e.$slots, "default");
	}
}), nk = "tooltip.open", [rk, ik] = /* @__PURE__ */ cp("TooltipRoot"), ak = /* @__PURE__ */ F({
	__name: "TooltipRoot",
	props: {
		defaultOpen: {
			type: Boolean,
			required: !1,
			default: !1
		},
		open: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		delayDuration: {
			type: Number,
			required: !1,
			default: void 0
		},
		disableHoverableContent: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		disableClosingTrigger: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		ignoreNonKeyboardFocus: {
			type: Boolean,
			required: !1,
			default: void 0
		}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		Y();
		let i = $O(), a = q(() => n.disableHoverableContent ?? i.disableHoverableContent.value), o = q(() => n.disableClosingTrigger ?? i.disableClosingTrigger.value), s = q(() => n.disabled ?? i.disabled.value), c = q(() => n.delayDuration ?? i.delayDuration.value), l = q(() => n.ignoreNonKeyboardFocus ?? i.ignoreNonKeyboardFocus.value), u = Ef(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		});
		P(u, (e) => {
			i.onClose && (e ? (i.onOpen(), document.dispatchEvent(new CustomEvent(nk))) : i.onClose());
		});
		let d = /* @__PURE__ */ j(!1), f = /* @__PURE__ */ j(), p = q(() => u.value ? d.value ? "delayed-open" : "instant-open" : "closed"), { start: m, stop: h } = $d(() => {
			d.value = !0, u.value = !0;
		}, c, { immediate: !1 });
		function g() {
			h(), d.value = !1, u.value = !0;
		}
		function _() {
			h(), u.value = !1;
		}
		function v() {
			m();
		}
		return ik({
			contentId: "",
			open: u,
			stateAttribute: p,
			trigger: f,
			onTriggerChange(e) {
				f.value = e;
			},
			onTriggerEnter() {
				i.isOpenDelayed.value ? v() : g();
			},
			onTriggerLeave() {
				a.value ? _() : h();
			},
			onOpen: g,
			onClose: _,
			disableHoverableContent: a,
			disableClosingTrigger: o,
			disabled: s,
			ignoreNonKeyboardFocus: l
		}), (e, t) => (z(), V(M(Sy), null, {
			default: N(() => [L(e.$slots, "default", { open: M(u) })]),
			_: 3
		}));
	}
}), ok = /* @__PURE__ */ F({
	__name: "TooltipContentImpl",
	props: {
		ariaLabel: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		as: {
			type: null,
			required: !1
		},
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1,
			default: void 0
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		}
	},
	emits: ["escapeKeyDown", "pointerDownOutside"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = rk(), a = $O(), { forwardRef: o, currentElement: s } = Y(), c = q(() => n.ariaLabel || s.value?.textContent), l = q(() => {
			let { ariaLabel: e, ...t } = n;
			return Sp(t, a.content.value ?? {}, {
				side: "top",
				sideOffset: 0,
				align: "center",
				avoidCollisions: !0,
				collisionBoundary: [],
				collisionPadding: 0,
				arrowPadding: 0,
				sticky: "partial",
				hideWhenDetached: !1
			});
		});
		return I(() => {
			cf(window, "scroll", (e) => {
				e.target?.contains(i.trigger.value) && i.onClose();
			}, { capture: !0 }), cf(window, nk, i.onClose);
		}), (e, t) => (z(), V(M(tv), {
			"as-child": "",
			"disable-outside-pointer-events": !1,
			onEscapeKeyDown: t[0] ||= (e) => r("escapeKeyDown", e),
			onPointerDownOutside: t[1] ||= (e) => {
				M(i).disableClosingTrigger.value && M(i).trigger.value?.contains(e.target) && e.preventDefault(), r("pointerDownOutside", e);
			},
			onFocusOutside: t[2] ||= Xl(() => {}, ["prevent"]),
			onDismiss: t[3] ||= (e) => M(i).onClose()
		}, {
			default: N(() => [U(M(Rx), K({
				ref: M(o),
				"data-state": M(i).stateAttribute.value
			}, {
				...e.$attrs,
				...l.value
			}, { style: {
				"--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
				"--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
				"--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
				"--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
				"--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
			} }), {
				default: N(() => [L(e.$slots, "default"), U(M(Yv), {
					id: M(i).contentId,
					role: "tooltip"
				}, {
					default: N(() => [_s(De(c.value), 1)]),
					_: 1
				}, 8, ["id"])]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}));
	}
}), sk = /* @__PURE__ */ F({
	__name: "TooltipContentHoverable",
	props: {
		ariaLabel: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		}
	},
	setup(e) {
		let t = Kg(e), { forwardRef: n, currentElement: r } = Y(), { trigger: i, onClose: a } = rk(), o = $O(), { isPointerInTransit: s, onPointerExit: c } = Jg(i, r);
		return o.isPointerInTransitRef = s, c(() => {
			a();
		}), (e, r) => (z(), V(ok, K({ ref: M(n) }, M(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), ck = /* @__PURE__ */ F({
	__name: "TooltipContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		ariaLabel: {
			type: String,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		},
		side: {
			type: null,
			required: !1
		},
		sideOffset: {
			type: Number,
			required: !1
		},
		align: {
			type: null,
			required: !1
		},
		alignOffset: {
			type: Number,
			required: !1
		},
		avoidCollisions: {
			type: Boolean,
			required: !1
		},
		collisionBoundary: {
			type: null,
			required: !1
		},
		collisionPadding: {
			type: [Number, Object],
			required: !1
		},
		arrowPadding: {
			type: Number,
			required: !1
		},
		sticky: {
			type: String,
			required: !1
		},
		hideWhenDetached: {
			type: Boolean,
			required: !1
		},
		positionStrategy: {
			type: String,
			required: !1
		},
		updatePositionStrategy: {
			type: String,
			required: !1
		}
	},
	emits: ["escapeKeyDown", "pointerDownOutside"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = rk(), a = qg(n, r), { forwardRef: o } = Y();
		return (e, t) => (z(), V(M(S_), { present: e.forceMount || M(i).open.value }, {
			default: N(() => [(z(), V(ia(M(i).disableHoverableContent.value ? ok : sk), K({ ref: M(o) }, M(a)), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16))]),
			_: 3
		}, 8, ["present"]));
	}
}), lk = /* @__PURE__ */ F({
	__name: "TooltipPortal",
	props: {
		to: {
			type: null,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		defer: {
			type: Boolean,
			required: !1
		},
		forceMount: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(Nv), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), uk = /* @__PURE__ */ F({
	__name: "TooltipTrigger",
	props: {
		reference: {
			type: null,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "button"
		}
	},
	setup(e) {
		let t = e, n = rk(), r = $O();
		n.contentId ||= f_(void 0, "reka-tooltip-content");
		let { forwardRef: i, currentElement: a } = Y(), o = /* @__PURE__ */ j(!1), s = /* @__PURE__ */ j(!1), c = q(() => n.disabled.value ? {} : {
			click: h,
			focus: p,
			pointermove: d,
			pointerleave: f,
			pointerdown: u,
			blur: m
		});
		I(() => {
			n.onTriggerChange(a.value);
		});
		function l() {
			setTimeout(() => {
				o.value = !1;
			}, 1);
		}
		function u() {
			n.open && !n.disableClosingTrigger.value && n.onClose(), o.value = !0, document.addEventListener("pointerup", l, { once: !0 });
		}
		function d(e) {
			e.pointerType !== "touch" && !s.value && !r.isPointerInTransitRef.value && (n.onTriggerEnter(), s.value = !0);
		}
		function f() {
			n.onTriggerLeave(), s.value = !1;
		}
		function p(e) {
			o.value || n.ignoreNonKeyboardFocus.value && !e.target.matches?.(":focus-visible") || n.onOpen();
		}
		function m() {
			n.onClose();
		}
		function h() {
			n.disableClosingTrigger.value || n.onClose();
		}
		return (e, r) => (z(), V(M(Cy), {
			"as-child": "",
			reference: e.reference
		}, {
			default: N(() => [U(M(X), K({
				ref: M(i),
				"aria-describedby": M(n).open.value ? M(n).contentId : void 0,
				"data-state": M(n).stateAttribute.value,
				as: e.as,
				"as-child": t.asChild,
				"data-grace-area-trigger": ""
			}, da(c.value)), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, [
				"aria-describedby",
				"data-state",
				"as",
				"as-child"
			])]),
			_: 3
		}, 8, ["reference"]));
	}
});
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function dk(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = dk(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function fk() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = dk(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var pk = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, mk = (e, t) => ({
	classGroupId: e,
	validator: t
}), hk = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), gk = "-", _k = [], vk = "arbitrary..", yk = (e) => {
	let t = Sk(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return xk(e);
			let n = e.split(gk);
			return bk(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? pk(i, t) : t : i || _k;
			}
			return n[e] || _k;
		}
	};
}, bk = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = bk(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(gk) : e.slice(t).join(gk), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, xk = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? vk + r : void 0;
})(), Sk = (e) => {
	let { theme: t, classGroups: n } = e;
	return Ck(n, t);
}, Ck = (e, t) => {
	let n = hk();
	for (let r in e) {
		let i = e[r];
		wk(i, n, r, t);
	}
	return n;
}, wk = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Tk(i, t, n, r);
	}
}, Tk = (e, t, n, r) => {
	if (typeof e == "string") {
		Ek(e, t, n);
		return;
	}
	if (typeof e == "function") {
		Dk(e, t, n, r);
		return;
	}
	Ok(e, t, n, r);
}, Ek = (e, t, n) => {
	let r = e === "" ? t : kk(t, e);
	r.classGroupId = n;
}, Dk = (e, t, n, r) => {
	if (Ak(e)) {
		wk(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(mk(n, e));
}, Ok = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		wk(o, kk(t, a), n, r);
	}
}, kk = (e, t) => {
	let n = e, r = t.split(gk), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = hk(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Ak = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, jk = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, Mk = "!", Nk = ":", Pk = [], Fk = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), Ik = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Nk) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(Mk) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Mk) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Fk(t, l, c, u);
	};
	if (t) {
		let e = t + Nk, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Fk(Pk, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, Lk = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, Rk = (e) => ({
	cache: jk(e.cacheSize),
	parseClassName: Ik(e),
	sortModifiers: Lk(e),
	postfixLookupClassGroupIds: zk(e),
	...yk(e)
}), zk = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, Bk = /\s+/, Vk = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(Bk), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			if (g = r(p), !g) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + Mk : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, Hk = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Uk(n)) && (i && (i += " "), i += r);
	return i;
}, Uk = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Uk(e[r])) && (n && (n += " "), n += t);
	return n;
}, Wk = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = Rk(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = Vk(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(Hk(...e));
}, Gk = [], Kk = (e) => {
	let t = (t) => t[e] || Gk;
	return t.isThemeGetter = !0, t;
}, qk = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Jk = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Yk = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Xk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Zk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Qk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, $k = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, eA = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, tA = (e) => Yk.test(e), nA = (e) => !!e && !Number.isNaN(Number(e)), rA = (e) => !!e && Number.isInteger(Number(e)), iA = (e) => e.endsWith("%") && nA(e.slice(0, -1)), aA = (e) => Xk.test(e), oA = () => !0, sA = (e) => Zk.test(e) && !Qk.test(e), cA = () => !1, lA = (e) => $k.test(e), uA = (e) => eA.test(e), dA = (e) => !Z(e) && !Q(e), fA = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), pA = (e) => OA(e, MA, cA), Z = (e) => qk.test(e), mA = (e) => OA(e, NA, sA), hA = (e) => OA(e, PA, nA), gA = (e) => OA(e, IA, oA), _A = (e) => OA(e, FA, cA), vA = (e) => OA(e, AA, cA), yA = (e) => OA(e, jA, uA), bA = (e) => OA(e, LA, lA), Q = (e) => Jk.test(e), xA = (e) => kA(e, NA), SA = (e) => kA(e, FA), CA = (e) => kA(e, AA), wA = (e) => kA(e, MA), TA = (e) => kA(e, jA), EA = (e) => kA(e, LA, !0), DA = (e) => kA(e, IA, !0), OA = (e, t, n) => {
	let r = qk.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, kA = (e, t, n = !1) => {
	let r = Jk.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, AA = (e) => e === "position" || e === "percentage", jA = (e) => e === "image" || e === "url", MA = (e) => e === "length" || e === "size" || e === "bg-size", NA = (e) => e === "length", PA = (e) => e === "number", FA = (e) => e === "family-name", IA = (e) => e === "number" || e === "weight", LA = (e) => e === "shadow", RA = /* @__PURE__ */ Wk(() => {
	let e = Kk("color"), t = Kk("font"), n = Kk("text"), r = Kk("font-weight"), i = Kk("tracking"), a = Kk("leading"), o = Kk("breakpoint"), s = Kk("container"), c = Kk("spacing"), l = Kk("radius"), u = Kk("shadow"), d = Kk("inset-shadow"), f = Kk("text-shadow"), p = Kk("drop-shadow"), m = Kk("blur"), h = Kk("perspective"), g = Kk("aspect"), _ = Kk("ease"), v = Kk("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		Q,
		Z
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		Q,
		Z,
		c
	], T = () => [
		tA,
		"full",
		"auto",
		...w()
	], ee = () => [
		rA,
		"none",
		"subgrid",
		Q,
		Z
	], E = () => [
		"auto",
		{ span: [
			"full",
			rA,
			Q,
			Z
		] },
		rA,
		Q,
		Z
	], te = () => [
		rA,
		"auto",
		Q,
		Z
	], ne = () => [
		"auto",
		"min",
		"max",
		"fr",
		Q,
		Z
	], re = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], D = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], ie = () => ["auto", ...w()], ae = () => [
		tA,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], oe = () => [
		tA,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], se = () => [
		tA,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], O = () => [
		e,
		Q,
		Z
	], ce = () => [
		...b(),
		CA,
		vA,
		{ position: [Q, Z] }
	], le = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], ue = () => [
		"auto",
		"cover",
		"contain",
		wA,
		pA,
		{ size: [Q, Z] }
	], de = () => [
		iA,
		xA,
		mA
	], fe = () => [
		"",
		"none",
		"full",
		l,
		Q,
		Z
	], pe = () => [
		"",
		nA,
		xA,
		mA
	], me = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], he = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], ge = () => [
		nA,
		iA,
		CA,
		vA
	], _e = () => [
		"",
		"none",
		m,
		Q,
		Z
	], ve = () => [
		"none",
		nA,
		Q,
		Z
	], ye = () => [
		"none",
		nA,
		Q,
		Z
	], k = () => [
		nA,
		Q,
		Z
	], A = () => [
		tA,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [aA],
			breakpoint: [aA],
			color: [oA],
			container: [aA],
			"drop-shadow": [aA],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [dA],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [aA],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [aA],
			shadow: [aA],
			spacing: ["px", nA],
			text: [aA],
			"text-shadow": [aA],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				tA,
				Z,
				Q,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				Q,
				Z
			] }],
			"container-named": [fA],
			columns: [{ columns: [
				nA,
				Z,
				Q,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				rA,
				"auto",
				Q,
				Z
			] }],
			basis: [{ basis: [
				tA,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				nA,
				tA,
				"auto",
				"initial",
				"none",
				Z
			] }],
			grow: [{ grow: [
				"",
				nA,
				Q,
				Z
			] }],
			shrink: [{ shrink: [
				"",
				nA,
				Q,
				Z
			] }],
			order: [{ order: [
				rA,
				"first",
				"last",
				"none",
				Q,
				Z
			] }],
			"grid-cols": [{ "grid-cols": ee() }],
			"col-start-end": [{ col: E() }],
			"col-start": [{ "col-start": te() }],
			"col-end": [{ "col-end": te() }],
			"grid-rows": [{ "grid-rows": ee() }],
			"row-start-end": [{ row: E() }],
			"row-start": [{ "row-start": te() }],
			"row-end": [{ "row-end": te() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": ne() }],
			"auto-rows": [{ "auto-rows": ne() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...re(), "normal"] }],
			"justify-items": [{ "justify-items": [...D(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...D()] }],
			"align-content": [{ content: ["normal", ...re()] }],
			"align-items": [{ items: [...D(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...D(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": re() }],
			"place-items": [{ "place-items": [...D(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...D()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: ie() }],
			mx: [{ mx: ie() }],
			my: [{ my: ie() }],
			ms: [{ ms: ie() }],
			me: [{ me: ie() }],
			mbs: [{ mbs: ie() }],
			mbe: [{ mbe: ie() }],
			mt: [{ mt: ie() }],
			mr: [{ mr: ie() }],
			mb: [{ mb: ie() }],
			ml: [{ ml: ie() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: ae() }],
			"inline-size": [{ inline: ["auto", ...oe()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...oe()] }],
			"max-inline-size": [{ "max-inline": ["none", ...oe()] }],
			"block-size": [{ block: ["auto", ...se()] }],
			"min-block-size": [{ "min-block": ["auto", ...se()] }],
			"max-block-size": [{ "max-block": ["none", ...se()] }],
			w: [{ w: [
				s,
				"screen",
				...ae()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...ae()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...ae()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...ae()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...ae()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...ae()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				xA,
				mA
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				DA,
				gA
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				iA,
				Z
			] }],
			"font-family": [{ font: [
				SA,
				_A,
				t
			] }],
			"font-features": [{ "font-features": [Z] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				Q,
				Z
			] }],
			"line-clamp": [{ "line-clamp": [
				nA,
				"none",
				Q,
				hA
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				Q,
				Z
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				Q,
				Z
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: O() }],
			"text-color": [{ text: O() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...me(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				nA,
				"from-font",
				"auto",
				Q,
				mA
			] }],
			"text-decoration-color": [{ decoration: O() }],
			"underline-offset": [{ "underline-offset": [
				nA,
				"auto",
				Q,
				Z
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				rA,
				Q,
				Z
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				Q,
				Z
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				Q,
				Z
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: ce() }],
			"bg-repeat": [{ bg: le() }],
			"bg-size": [{ bg: ue() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						rA,
						Q,
						Z
					],
					radial: [
						"",
						Q,
						Z
					],
					conic: [
						rA,
						Q,
						Z
					]
				},
				TA,
				yA
			] }],
			"bg-color": [{ bg: O() }],
			"gradient-from-pos": [{ from: de() }],
			"gradient-via-pos": [{ via: de() }],
			"gradient-to-pos": [{ to: de() }],
			"gradient-from": [{ from: O() }],
			"gradient-via": [{ via: O() }],
			"gradient-to": [{ to: O() }],
			rounded: [{ rounded: fe() }],
			"rounded-s": [{ "rounded-s": fe() }],
			"rounded-e": [{ "rounded-e": fe() }],
			"rounded-t": [{ "rounded-t": fe() }],
			"rounded-r": [{ "rounded-r": fe() }],
			"rounded-b": [{ "rounded-b": fe() }],
			"rounded-l": [{ "rounded-l": fe() }],
			"rounded-ss": [{ "rounded-ss": fe() }],
			"rounded-se": [{ "rounded-se": fe() }],
			"rounded-ee": [{ "rounded-ee": fe() }],
			"rounded-es": [{ "rounded-es": fe() }],
			"rounded-tl": [{ "rounded-tl": fe() }],
			"rounded-tr": [{ "rounded-tr": fe() }],
			"rounded-br": [{ "rounded-br": fe() }],
			"rounded-bl": [{ "rounded-bl": fe() }],
			"border-w": [{ border: pe() }],
			"border-w-x": [{ "border-x": pe() }],
			"border-w-y": [{ "border-y": pe() }],
			"border-w-s": [{ "border-s": pe() }],
			"border-w-e": [{ "border-e": pe() }],
			"border-w-bs": [{ "border-bs": pe() }],
			"border-w-be": [{ "border-be": pe() }],
			"border-w-t": [{ "border-t": pe() }],
			"border-w-r": [{ "border-r": pe() }],
			"border-w-b": [{ "border-b": pe() }],
			"border-w-l": [{ "border-l": pe() }],
			"divide-x": [{ "divide-x": pe() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": pe() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...me(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...me(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: O() }],
			"border-color-x": [{ "border-x": O() }],
			"border-color-y": [{ "border-y": O() }],
			"border-color-s": [{ "border-s": O() }],
			"border-color-e": [{ "border-e": O() }],
			"border-color-bs": [{ "border-bs": O() }],
			"border-color-be": [{ "border-be": O() }],
			"border-color-t": [{ "border-t": O() }],
			"border-color-r": [{ "border-r": O() }],
			"border-color-b": [{ "border-b": O() }],
			"border-color-l": [{ "border-l": O() }],
			"divide-color": [{ divide: O() }],
			"outline-style": [{ outline: [
				...me(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				nA,
				Q,
				Z
			] }],
			"outline-w": [{ outline: [
				"",
				nA,
				xA,
				mA
			] }],
			"outline-color": [{ outline: O() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				EA,
				bA
			] }],
			"shadow-color": [{ shadow: O() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				EA,
				bA
			] }],
			"inset-shadow-color": [{ "inset-shadow": O() }],
			"ring-w": [{ ring: pe() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: O() }],
			"ring-offset-w": [{ "ring-offset": [nA, mA] }],
			"ring-offset-color": [{ "ring-offset": O() }],
			"inset-ring-w": [{ "inset-ring": pe() }],
			"inset-ring-color": [{ "inset-ring": O() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				EA,
				bA
			] }],
			"text-shadow-color": [{ "text-shadow": O() }],
			opacity: [{ opacity: [
				nA,
				Q,
				Z
			] }],
			"mix-blend": [{ "mix-blend": [
				...he(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": he() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [nA] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": ge() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": ge() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": O() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": O() }],
			"mask-image-t-from-pos": [{ "mask-t-from": ge() }],
			"mask-image-t-to-pos": [{ "mask-t-to": ge() }],
			"mask-image-t-from-color": [{ "mask-t-from": O() }],
			"mask-image-t-to-color": [{ "mask-t-to": O() }],
			"mask-image-r-from-pos": [{ "mask-r-from": ge() }],
			"mask-image-r-to-pos": [{ "mask-r-to": ge() }],
			"mask-image-r-from-color": [{ "mask-r-from": O() }],
			"mask-image-r-to-color": [{ "mask-r-to": O() }],
			"mask-image-b-from-pos": [{ "mask-b-from": ge() }],
			"mask-image-b-to-pos": [{ "mask-b-to": ge() }],
			"mask-image-b-from-color": [{ "mask-b-from": O() }],
			"mask-image-b-to-color": [{ "mask-b-to": O() }],
			"mask-image-l-from-pos": [{ "mask-l-from": ge() }],
			"mask-image-l-to-pos": [{ "mask-l-to": ge() }],
			"mask-image-l-from-color": [{ "mask-l-from": O() }],
			"mask-image-l-to-color": [{ "mask-l-to": O() }],
			"mask-image-x-from-pos": [{ "mask-x-from": ge() }],
			"mask-image-x-to-pos": [{ "mask-x-to": ge() }],
			"mask-image-x-from-color": [{ "mask-x-from": O() }],
			"mask-image-x-to-color": [{ "mask-x-to": O() }],
			"mask-image-y-from-pos": [{ "mask-y-from": ge() }],
			"mask-image-y-to-pos": [{ "mask-y-to": ge() }],
			"mask-image-y-from-color": [{ "mask-y-from": O() }],
			"mask-image-y-to-color": [{ "mask-y-to": O() }],
			"mask-image-radial": [{ "mask-radial": [Q, Z] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": ge() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": ge() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": O() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": O() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [nA] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": ge() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": ge() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": O() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": O() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: ce() }],
			"mask-repeat": [{ mask: le() }],
			"mask-size": [{ mask: ue() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				Q,
				Z
			] }],
			filter: [{ filter: [
				"",
				"none",
				Q,
				Z
			] }],
			blur: [{ blur: _e() }],
			brightness: [{ brightness: [
				nA,
				Q,
				Z
			] }],
			contrast: [{ contrast: [
				nA,
				Q,
				Z
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				EA,
				bA
			] }],
			"drop-shadow-color": [{ "drop-shadow": O() }],
			grayscale: [{ grayscale: [
				"",
				nA,
				Q,
				Z
			] }],
			"hue-rotate": [{ "hue-rotate": [
				nA,
				Q,
				Z
			] }],
			invert: [{ invert: [
				"",
				nA,
				Q,
				Z
			] }],
			saturate: [{ saturate: [
				nA,
				Q,
				Z
			] }],
			sepia: [{ sepia: [
				"",
				nA,
				Q,
				Z
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Q,
				Z
			] }],
			"backdrop-blur": [{ "backdrop-blur": _e() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				nA,
				Q,
				Z
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				nA,
				Q,
				Z
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				nA,
				Q,
				Z
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				nA,
				Q,
				Z
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				nA,
				Q,
				Z
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				nA,
				Q,
				Z
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				nA,
				Q,
				Z
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				nA,
				Q,
				Z
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				Q,
				Z
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				nA,
				"initial",
				Q,
				Z
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				Q,
				Z
			] }],
			delay: [{ delay: [
				nA,
				Q,
				Z
			] }],
			animate: [{ animate: [
				"none",
				v,
				Q,
				Z
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				Q,
				Z
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: ve() }],
			"rotate-x": [{ "rotate-x": ve() }],
			"rotate-y": [{ "rotate-y": ve() }],
			"rotate-z": [{ "rotate-z": ve() }],
			scale: [{ scale: ye() }],
			"scale-x": [{ "scale-x": ye() }],
			"scale-y": [{ "scale-y": ye() }],
			"scale-z": [{ "scale-z": ye() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: k() }],
			"skew-x": [{ "skew-x": k() }],
			"skew-y": [{ "skew-y": k() }],
			transform: [{ transform: [
				Q,
				Z,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: A() }],
			"translate-x": [{ "translate-x": A() }],
			"translate-y": [{ "translate-y": A() }],
			"translate-z": [{ "translate-z": A() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				rA,
				Q,
				Z
			] }],
			accent: [{ accent: O() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: O() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				Q,
				Z
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": O() }],
			"scrollbar-track-color": [{ "scrollbar-track": O() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				Q,
				Z
			] }],
			fill: [{ fill: ["none", ...O()] }],
			"stroke-w": [{ stroke: [
				nA,
				xA,
				mA,
				hA
			] }],
			stroke: [{ stroke: ["none", ...O()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
//#endregion
//#region src/lib/utils.ts
function $(...e) {
	return RA(fk(e));
}
//#endregion
//#region src/components/ui/checkbox/Checkbox.vue
var zA = /* @__PURE__ */ F({
	__name: "Checkbox",
	props: {
		defaultValue: {},
		modelValue: {},
		disabled: { type: Boolean },
		value: {},
		id: {},
		trueValue: {},
		falseValue: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(DS), K({ "data-slot": "checkbox" }, M(i), { class: M($)("border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border transition-colors group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", n.class) }), {
			default: N((t) => [U(M(OS), {
				"data-slot": "checkbox-indicator",
				class: "[&>svg]:size-3.5 grid place-content-center text-current transition-none"
			}, {
				default: N(() => [L(e.$slots, "default", A(W(t)), () => [U(M(If))])]),
				_: 2
			}, 1024)]),
			_: 3
		}, 16, ["class"]));
	}
}), BA = { class: "inline-flex items-center gap-2 align-middle" }, VA = { class: "text-sm leading-none select-none" }, HA = /* @__PURE__ */ F({
	__name: "Checkbox.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		value: { type: String }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j(!1), o = vl();
		function s(e) {
			let t = o?._internals;
			t && (t.setFormValue(e ? n.value ?? "on" : null), n.required && !e ? t.setValidity({ valueMissing: !0 }, "Required.") : t.setValidity({}));
		}
		function c(e) {
			let t = e === !0;
			i.value = t, s(t), r("change", { checked: t });
		}
		return I(() => {
			o && (o._reset = () => {
				i.value = !1, s(!1);
			}, o._disabledChange = (e) => {
				a.value = e;
			}), s(i.value);
		}), (t, n) => (z(), B("span", BA, [U(M(zA), {
			name: "",
			"model-value": i.value,
			required: e.required,
			disabled: e.disabled || a.value,
			"onUpdate:modelValue": c
		}, null, 8, [
			"model-value",
			"required",
			"disabled"
		]), H("span", VA, [L(t.$slots, "default", {}, () => [n[0] ||= _s("Checkbox", -1)])])]));
	}
}), UA = /* @__PURE__ */ F({
	__name: "Switch",
	props: {
		defaultValue: {},
		modelValue: {},
		disabled: { type: Boolean },
		id: {},
		value: {},
		trueValue: {},
		falseValue: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		size: { default: "default" }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class", "size"), r);
		return (t, r) => (z(), V(M(OO), K({
			"data-slot": "switch",
			"data-size": e.size
		}, M(i), { class: M($)("data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:data-unchecked:bg-input/80 shrink-0 rounded-full border border-transparent focus-visible:ring-3 aria-invalid:ring-3 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50", n.class) }), {
			default: N((e) => [U(M(kO), {
				"data-slot": "switch-thumb",
				class: "bg-background dark:data-unchecked:bg-foreground dark:data-checked:bg-primary-foreground rounded-full group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 pointer-events-none block ring-0 transition-transform"
			}, {
				default: N(() => [L(t.$slots, "thumb", A(W(e)))]),
				_: 2
			}, 1024)]),
			_: 3
		}, 16, ["data-size", "class"]));
	}
}), WA = { class: "inline-flex items-center gap-2 align-middle" }, GA = { class: "text-sm leading-none select-none" }, KA = /* @__PURE__ */ F({
	__name: "Switch.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		value: { type: String }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j(!1), o = vl();
		function s(e) {
			let t = o?._internals;
			t && (t.setFormValue(e ? n.value ?? "on" : null), n.required && !e ? t.setValidity({ valueMissing: !0 }, "Required.") : t.setValidity({}));
		}
		function c(e) {
			i.value = e, s(e), r("change", { checked: e });
		}
		return I(() => {
			o && (o._reset = () => {
				i.value = !1, s(!1);
			}, o._disabledChange = (e) => {
				a.value = e;
			}), s(i.value);
		}), (t, n) => (z(), B("span", WA, [U(M(UA), {
			name: "",
			"model-value": i.value,
			required: e.required,
			disabled: e.disabled || a.value,
			"onUpdate:modelValue": c
		}, null, 8, [
			"model-value",
			"required",
			"disabled"
		]), H("span", GA, [L(t.$slots, "default", {}, () => [n[0] ||= _s("Switch", -1)])])]));
	}
}), qA = /* @__PURE__ */ F({
	__name: "Input",
	props: {
		defaultValue: {},
		modelValue: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = Ef(n, "modelValue", t, {
			passive: !0,
			defaultValue: n.defaultValue
		});
		return (e, t) => vr((z(), B("input", {
			"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ dn(r) ? r.value = e : null,
			"data-slot": "input",
			class: k(M($)("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", n.class))
		}, null, 2)), [[Il, M(r)]]);
	}
}), JA = /* @__PURE__ */ F({
	__name: "Input.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		type: { type: String },
		placeholder: { type: String },
		value: { type: String }
	},
	emits: ["input", "change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(n.value ?? ""), a = /* @__PURE__ */ j(!1), o = vl();
		function s(e) {
			let t = o?._internals;
			if (!t) return;
			t.setFormValue(e);
			let r = o?.querySelector("input") ?? void 0;
			n.required && !e ? t.setValidity({ valueMissing: !0 }, "Preencha este campo.", r) : t.setValidity({});
		}
		function c(e) {
			i.value = String(e ?? ""), s(i.value), r("input", i.value);
		}
		return I(() => {
			o && (o._reset = () => {
				i.value = n.value ?? "", s(i.value);
			}, o._disabledChange = (e) => {
				a.value = e;
			}), s(i.value);
		}), (t, n) => (z(), V(M(qA), {
			"model-value": i.value,
			type: e.type ?? "text",
			placeholder: e.placeholder,
			disabled: e.disabled || a.value,
			"onUpdate:modelValue": c,
			onChange: n[0] ||= (e) => r("change", i.value)
		}, null, 8, [
			"model-value",
			"type",
			"placeholder",
			"disabled"
		]));
	}
}), YA = /* @__PURE__ */ F({
	__name: "Textarea",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		defaultValue: {},
		modelValue: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = Ef(n, "modelValue", t, {
			passive: !0,
			defaultValue: n.defaultValue
		});
		return (e, t) => vr((z(), B("textarea", {
			"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ dn(r) ? r.value = e : null,
			"data-slot": "textarea",
			class: k(M($)("border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-lg border bg-transparent px-2.5 py-2 text-base transition-colors focus-visible:ring-3 aria-invalid:ring-3 md:text-sm flex field-sizing-content min-h-16 w-full outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", n.class))
		}, null, 2)), [[Il, M(r)]]);
	}
}), XA = /* @__PURE__ */ F({
	__name: "Textarea.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		placeholder: { type: String },
		value: { type: String }
	},
	emits: ["input", "change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(n.value ?? ""), a = /* @__PURE__ */ j(!1), o = vl();
		function s(e) {
			let t = o?._internals;
			if (!t) return;
			t.setFormValue(e);
			let r = o?.querySelector("textarea") ?? void 0;
			n.required && !e ? t.setValidity({ valueMissing: !0 }, "Preencha este campo.", r) : t.setValidity({});
		}
		function c(e) {
			i.value = String(e ?? ""), s(i.value), r("input", i.value);
		}
		return I(() => {
			o && (o._reset = () => {
				i.value = n.value ?? "", s(i.value);
			}, o._disabledChange = (e) => {
				a.value = e;
			}), s(i.value);
		}), (t, n) => (z(), V(M(YA), {
			"model-value": i.value,
			placeholder: e.placeholder,
			disabled: e.disabled || a.value,
			"onUpdate:modelValue": c,
			onChange: n[0] ||= (e) => r("change", i.value)
		}, null, 8, [
			"model-value",
			"placeholder",
			"disabled"
		]));
	}
}), ZA = /* @__PURE__ */ F({
	__name: "Slider",
	props: {
		defaultValue: {},
		modelValue: {},
		disabled: { type: Boolean },
		orientation: {},
		dir: {},
		inverted: { type: Boolean },
		min: {},
		max: {},
		step: {},
		minStepsBetweenThumbs: {},
		thumbAlignment: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue", "valueCommit"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(JS), K({
			"data-slot": "slider",
			"data-vertical": n.orientation === "vertical" ? "" : void 0,
			class: M($)("data-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col", n.class)
		}, M(i)), {
			default: N(({ modelValue: e }) => [U(M($S), {
				"data-slot": "slider-track",
				"data-horizontal": n.orientation === "vertical" ? void 0 : "",
				"data-vertical": n.orientation === "vertical" ? "" : void 0,
				class: "bg-muted rounded-full data-horizontal:h-1 data-vertical:w-1 relative grow overflow-hidden data-horizontal:w-full data-vertical:h-full"
			}, {
				default: N(() => [U(M(XS), {
					"data-slot": "slider-range",
					"data-horizontal": n.orientation === "vertical" ? void 0 : "",
					"data-vertical": n.orientation === "vertical" ? "" : void 0,
					class: "bg-primary absolute select-none data-horizontal:h-full data-vertical:w-full"
				}, null, 8, ["data-horizontal", "data-vertical"])]),
				_: 1
			}, 8, ["data-horizontal", "data-vertical"]), (z(!0), B(R, null, ca(e, (e, t) => (z(), V(M(QS), {
				key: t,
				"data-slot": "slider-thumb",
				"data-vertical": n.orientation === "vertical" ? "" : void 0,
				class: "border-ring ring-ring/50 relative size-3 rounded-full border bg-white transition-[color,box-shadow] after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50"
			}, null, 8, ["data-vertical"]))), 128))]),
			_: 1
		}, 16, ["data-vertical", "class"]));
	}
}), QA = { class: "block w-56 py-2" }, $A = /* @__PURE__ */ F({
	__name: "Slider.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		min: { type: Number },
		max: { type: Number },
		step: { type: Number },
		value: { type: [Number, String] }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = q(() => Number(n.min ?? 0)), a = q(() => Number(n.max ?? 100)), o = q(() => Number(n.step ?? 1)), s = q(() => n.value != null && n.value !== "" ? Number(n.value) : i.value), c = /* @__PURE__ */ j([s.value]), l = /* @__PURE__ */ j(!1), u = vl();
		function d(e) {
			let t = u?._internals;
			t && (t.setFormValue(e.map(String).join(",")), t.setValidity({}));
		}
		function f(e) {
			e && (c.value = e, d(e), r("change", e));
		}
		return I(() => {
			u && (u._reset = () => {
				c.value = [s.value], d(c.value);
			}, u._disabledChange = (e) => {
				l.value = e;
			}), d(c.value);
		}), (t, n) => (z(), B("span", QA, [U(M(ZA), {
			"model-value": c.value,
			min: i.value,
			max: a.value,
			step: o.value,
			disabled: e.disabled || l.value,
			"onUpdate:modelValue": f
		}, null, 8, [
			"model-value",
			"min",
			"max",
			"step",
			"disabled"
		])]));
	}
}), ej = /* @__PURE__ */ F({
	__name: "RadioGroup",
	props: {
		modelValue: {},
		defaultValue: {},
		disabled: { type: Boolean },
		orientation: {},
		dir: {},
		loop: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(NT), K({
			"data-slot": "radio-group",
			class: M($)("grid gap-2 w-full", n.class)
		}, M(i)), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), tj = /* @__PURE__ */ F({
	__name: "RadioGroupItem",
	props: {
		id: {},
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(IT), K({ "data-slot": "radio-group-item" }, M(n), { class: M($)("border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 dark:aria-invalid:border-destructive/50 flex size-4 rounded-full focus-visible:ring-3 aria-invalid:ring-3 group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", t.class) }), {
			default: N(() => [U(M(LT), {
				"data-slot": "radio-group-indicator",
				class: "flex size-4 items-center justify-center"
			}, {
				default: N(() => [L(e.$slots, "default", {}, () => [U(M(Hf), { class: "bg-primary-foreground absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full" })])]),
				_: 3
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), nj = /* @__PURE__ */ F({
	__name: "Label",
	props: {
		for: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(XC), K({ "data-slot": "label" }, M(n), { class: M($)("gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), rj = /* @__PURE__ */ F({
	__name: "RadioGroup.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		value: { type: String }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = vl(), a = 0, o = Math.random().toString(36).slice(2, 8), s = /* @__PURE__ */ j((i?._options ?? []).map((e) => ({
			...e,
			id: `go-rg-${o}-${a++}`
		}))), c = /* @__PURE__ */ j(n.value ?? "");
		function l(e) {
			let t = i?._internals;
			if (!t) return;
			t.setFormValue(e || null);
			let r = i?.querySelector("[role=\"radiogroup\"]") ?? void 0;
			n.required && !e ? t.setValidity({ valueMissing: !0 }, "Selecione uma opção.", r) : t.setValidity({});
		}
		function u(e) {
			c.value = e, l(e), r("change", e);
		}
		return I(() => {
			i && (i._reset = () => {
				c.value = n.value ?? "", l(c.value);
			}), l(c.value);
		}), (t, n) => (z(), V(M(ej), {
			"model-value": c.value,
			disabled: e.disabled,
			class: "gap-3",
			"onUpdate:modelValue": u
		}, {
			default: N(() => [(z(!0), B(R, null, ca(s.value, (e) => (z(), B("div", {
				key: e.value,
				class: "flex items-center gap-2"
			}, [U(M(tj), {
				value: e.value,
				id: e.id,
				disabled: e.disabled
			}, null, 8, [
				"value",
				"id",
				"disabled"
			]), U(M(nj), {
				for: e.id,
				class: "text-sm font-normal"
			}, {
				default: N(() => [_s(De(e.label), 1)]),
				_: 2
			}, 1032, ["for"])]))), 128))]),
			_: 1
		}, 8, ["model-value", "disabled"]));
	}
}), ij = /* @__PURE__ */ F({
	__name: "Select",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		defaultValue: {},
		modelValue: {},
		by: { type: [String, Function] },
		dir: {},
		multiple: { type: Boolean },
		autocomplete: {},
		disabled: { type: Boolean },
		name: {},
		required: { type: Boolean }
	},
	emits: ["update:modelValue", "update:open"],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		return (e, t) => (z(), V(M(bE), K({ "data-slot": "select" }, M(n)), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16));
	}
}), aj = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "SelectContent",
	props: {
		forceMount: { type: Boolean },
		position: { default: "item-aligned" },
		bodyLock: { type: Boolean },
		side: {},
		sideOffset: {},
		sideFlip: { type: Boolean },
		align: { default: "center" },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		disableOutsidePointerEvents: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"closeAutoFocus",
		"escapeKeyDown",
		"pointerDownOutside"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (t, r) => (z(), V(M(zE), null, {
			default: N(() => [U(M(ME), K({
				"data-slot": "select-content",
				"data-align-trigger": e.position === "item-aligned"
			}, {
				...t.$attrs,
				...M(i)
			}, { class: M($)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-lg shadow-md ring-1 duration-100 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 cn-menu-translucent relative z-50 max-h-(--reka-select-content-available-height) origin-(--reka-select-content-transform-origin) overflow-x-hidden overflow-y-auto data-[align-trigger=true]:animate-none", e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", n.class) }), {
				default: N(() => [
					U(M(lj)),
					U(M(GE), {
						"data-position": e.position,
						class: k(M($)("data-[position=popper]:h-[var(--reka-select-trigger-height)] data-[position=popper]:w-full data-[position=popper]:min-w-[var(--reka-select-trigger-width)]"))
					}, {
						default: N(() => [L(t.$slots, "default")]),
						_: 3
					}, 8, ["data-position", "class"]),
					U(M(cj))
				]),
				_: 3
			}, 16, ["data-align-trigger", "class"])]),
			_: 3
		}));
	}
}), oj = { class: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }, sj = /* @__PURE__ */ F({
	__name: "SelectItem",
	props: {
		value: {},
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(IE), K({ "data-slot": "select-item" }, M(n), { class: M($)("focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm [&_svg:not([class*=size-])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: N(() => [H("span", oj, [U(M(LE), null, {
				default: N(() => [L(e.$slots, "indicator-icon", {}, () => [U(M(If), { class: "pointer-events-none" })])]),
				_: 3
			})]), U(M(RE), null, {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), cj = /* @__PURE__ */ F({
	__name: "SelectScrollDownButton",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(VE), K({ "data-slot": "select-scroll-down-button" }, M(n), { class: M($)("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*=size-])]:size-4", t.class) }), {
			default: N(() => [L(e.$slots, "default", {}, () => [U(M(Lf))])]),
			_: 3
		}, 16, ["class"]));
	}
}), lj = /* @__PURE__ */ F({
	__name: "SelectScrollUpButton",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(HE), K({ "data-slot": "select-scroll-up-button" }, M(n), { class: M($)("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*=size-])]:size-4", t.class) }), {
			default: N(() => [L(e.$slots, "default", {}, () => [U(M(Bf))])]),
			_: 3
		}, 16, ["class"]));
	}
}), uj = /* @__PURE__ */ F({
	__name: "SelectTrigger",
	props: {
		disabled: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		size: { default: "default" }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class", "size"));
		return (r, i) => (z(), V(M(UE), K({
			"data-slot": "select-trigger",
			"data-size": e.size
		}, M(n), { class: M($)("border-input data-placeholder:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-lg border bg-transparent py-2 pr-2 pl-2.5 text-sm transition-colors select-none focus-visible:ring-3 aria-invalid:ring-3 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*=size-])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: N(() => [L(r.$slots, "default"), U(M(NE), { "as-child": "" }, {
				default: N(() => [U(M(Lf), { class: "text-muted-foreground size-4 pointer-events-none" })]),
				_: 1
			})]),
			_: 3
		}, 16, ["data-size", "class"]));
	}
}), dj = /* @__PURE__ */ F({
	__name: "SelectValue",
	props: {
		placeholder: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(WE), K({ "data-slot": "select-value" }, t), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), fj = /* @__PURE__ */ F({
	__name: "Select.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		placeholder: { type: String },
		value: { type: String }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = vl(), a = /* @__PURE__ */ j([...i?._options ?? []]), o = /* @__PURE__ */ j(n.value ?? "");
		function s(e) {
			let t = i?._internals;
			if (!t) return;
			t.setFormValue(e || null);
			let r = i?.querySelector("[role=\"combobox\"]") ?? void 0;
			n.required && !e ? t.setValidity({ valueMissing: !0 }, "Selecione uma opção.", r) : t.setValidity({});
		}
		function c(e) {
			let t = e == null ? "" : String(e);
			o.value = t, s(t), r("change", t);
		}
		return I(() => {
			i && (i._reset = () => {
				o.value = n.value ?? "", s(o.value);
			}), s(o.value);
		}), (t, n) => (z(), V(M(ij), {
			"model-value": o.value,
			disabled: e.disabled,
			"onUpdate:modelValue": c
		}, {
			default: N(() => [U(M(uj), { class: "w-56" }, {
				default: N(() => [U(M(dj), { placeholder: e.placeholder ?? "Selecione..." }, null, 8, ["placeholder"])]),
				_: 1
			}), U(M(aj), null, {
				default: N(() => [(z(!0), B(R, null, ca(a.value, (e) => (z(), V(M(sj), {
					key: e.value,
					value: e.value,
					disabled: e.disabled
				}, {
					default: N(() => [_s(De(e.label), 1)]),
					_: 2
				}, 1032, ["value", "disabled"]))), 128))]),
				_: 1
			})]),
			_: 1
		}, 8, ["model-value", "disabled"]));
	}
}), pj = /* @__PURE__ */ F({
	__name: "NumberField",
	props: {
		defaultValue: {},
		modelValue: {},
		min: {},
		max: {},
		step: {},
		stepSnapping: { type: Boolean },
		focusOnChange: { type: Boolean },
		formatOptions: {},
		locale: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		disableWheelChange: { type: Boolean },
		invertWheelChange: { type: Boolean },
		id: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(eT), K(M(i), { class: M($)("grid gap-1.5", n.class) }), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), mj = /* @__PURE__ */ F({
	__name: "NumberFieldContent",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", { class: k(M($)("relative [&>[data-slot=input]]:has-[[data-slot=increment]]:pr-5 [&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-5", t.class)) }, [L(e.$slots, "default")], 2));
	}
}), hj = /* @__PURE__ */ F({
	__name: "NumberFieldDecrement",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(tT), K({ "data-slot": "decrement" }, M(n), { class: M($)("absolute top-1/2 -translate-y-1/2 left-0 p-3 disabled:cursor-not-allowed disabled:opacity-20", t.class) }), {
			default: N(() => [L(e.$slots, "default", {}, () => [U(M(Kf), { class: "h-4 w-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), gj = /* @__PURE__ */ F({
	__name: "NumberFieldIncrement",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(nT), K({ "data-slot": "increment" }, M(n), { class: M($)("absolute top-1/2 -translate-y-1/2 right-0 disabled:cursor-not-allowed disabled:opacity-20 p-3", t.class) }), {
			default: N(() => [L(e.$slots, "default", {}, () => [U(M(Yf), { class: "h-4 w-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), _j = /* @__PURE__ */ F({
	__name: "NumberFieldInput",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(rT), {
			"data-slot": "input",
			class: k(M($)("flex h-9 w-full rounded-md border border-input bg-transparent py-1 text-sm text-center shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", t.class))
		}, null, 8, ["class"]));
	}
}), vj = /* @__PURE__ */ F({
	__name: "NumberField.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		min: { type: [Number, String] },
		max: { type: [Number, String] },
		step: { type: [Number, String] },
		value: { type: [Number, String] }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = n.value != null && n.value !== "" ? Number(n.value) : null, a = /* @__PURE__ */ j(i), o = /* @__PURE__ */ j(!1), s = vl();
		function c(e) {
			let t = s?._internals;
			if (!t) return;
			let r = e == null || Number.isNaN(e);
			t.setFormValue(r ? null : String(e));
			let i = s?.querySelector("input") ?? void 0;
			n.required && r ? t.setValidity({ valueMissing: !0 }, "Obrigatório.", i) : t.setValidity({});
		}
		function l(e) {
			a.value = e ?? null, c(a.value), r("change", a.value);
		}
		return I(() => {
			s && (s._reset = () => {
				a.value = i, c(a.value);
			}, s._disabledChange = (e) => {
				o.value = e;
			}), c(a.value);
		}), (t, n) => (z(), V(M(pj), {
			"model-value": a.value ?? void 0,
			min: e.min == null ? void 0 : Number(e.min),
			max: e.max == null ? void 0 : Number(e.max),
			step: e.step == null ? void 0 : Number(e.step),
			disabled: e.disabled || o.value,
			class: "w-40",
			"onUpdate:modelValue": l
		}, {
			default: N(() => [U(M(mj), null, {
				default: N(() => [
					U(M(hj)),
					U(M(_j)),
					U(M(gj))
				]),
				_: 1
			})]),
			_: 1
		}, 8, [
			"model-value",
			"min",
			"max",
			"step",
			"disabled"
		]));
	}
}), yj = /* @__PURE__ */ F({
	__name: "PinInput",
	props: {
		modelValue: {},
		defaultValue: {},
		placeholder: {},
		mask: { type: Boolean },
		otp: {
			type: Boolean,
			default: !0
		},
		type: {},
		dir: {},
		disabled: { type: Boolean },
		id: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue", "complete"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(vT), K({
			otp: n.otp,
			"data-slot": "pin-input"
		}, M(i), { class: M($)("flex items-center gap-2 has-disabled:opacity-50 disabled:cursor-not-allowed", n.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["otp", "class"]));
	}
}), bj = /* @__PURE__ */ F({
	__name: "PinInputGroup",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(X), K({ "data-slot": "pin-input-group" }, M(n), { class: M($)("flex items-center", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), xj = /* @__PURE__ */ F({
	__name: "PinInputSlot",
	props: {
		index: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(yT), K({ "data-slot": "pin-input-slot" }, M(n), { class: M($)("border-input focus:border-ring focus:ring-ring/50 focus:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:focus:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus:aria-invalid:border-destructive relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none text-center first:rounded-l-md first:border-l last:rounded-r-md focus:z-10 focus:ring-[3px]", t.class) }), null, 16, ["class"]));
	}
}), Sj = /* @__PURE__ */ F({
	__name: "PinInput.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		length: { type: [Number, String] }
	},
	emits: ["complete", "change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Number(n.length ?? 6), a = /* @__PURE__ */ j([]), o = vl();
		function s() {
			let e = o?._internals;
			if (!e) return;
			let t = a.value.join("");
			e.setFormValue(t || null);
			let r = o?.querySelector("input") ?? void 0;
			n.required && t.length < i ? e.setValidity({ valueMissing: !0 }, "Código incompleto.", r) : e.setValidity({});
		}
		function c(e) {
			a.value = e, s(), r("change", e.join(""));
		}
		return I(() => {
			o && (o._reset = () => {
				a.value = [], s();
			}), s();
		}), (t, n) => (z(), V(M(yj), {
			"model-value": a.value,
			disabled: e.disabled,
			"onUpdate:modelValue": c,
			onComplete: n[0] ||= (e) => r("complete", a.value.join(""))
		}, {
			default: N(() => [U(M(bj), null, {
				default: N(() => [(z(!0), B(R, null, ca(M(i), (e) => (z(), V(M(xj), {
					key: e,
					index: e - 1
				}, null, 8, ["index"]))), 128))]),
				_: 1
			})]),
			_: 1
		}, 8, ["model-value", "disabled"]));
	}
}), Cj = /* @__PURE__ */ F({
	__name: "TagsInput",
	props: {
		modelValue: {},
		defaultValue: {},
		addOnPaste: { type: Boolean },
		addOnTab: { type: Boolean },
		addOnBlur: { type: Boolean },
		duplicate: { type: Boolean },
		disabled: { type: Boolean },
		delimiter: {},
		dir: {},
		max: {},
		id: {},
		convertValue: { type: Function },
		displayValue: { type: Function },
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"update:modelValue",
		"invalid",
		"addTag",
		"removeTag"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(BO), K(M(i), { class: M($)("flex flex-wrap gap-2 items-center rounded-md border border-input bg-background px-2 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none", "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", n.class) }), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), wj = /* @__PURE__ */ F({
	__name: "TagsInputInput",
	props: {
		placeholder: {},
		autoFocus: { type: Boolean },
		maxLength: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(VO), K(M(n), { class: M($)("text-sm min-h-5 focus:outline-none flex-1 bg-transparent px-1", t.class) }), null, 16, ["class"]));
	}
}), Tj = /* @__PURE__ */ F({
	__name: "TagsInputItem",
	props: {
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(WO), K(M(n), { class: M($)("flex h-5 items-center rounded-md bg-secondary data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Ej = /* @__PURE__ */ F({
	__name: "TagsInputItemDelete",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(GO), K(M(n), { class: M($)("flex rounded bg-transparent mr-1", t.class) }), {
			default: N(() => [L(e.$slots, "default", {}, () => [U(M(Qf), { class: "w-4 h-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), Dj = /* @__PURE__ */ F({
	__name: "TagsInputItemText",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(KO), K(M(n), { class: M($)("py-0.5 px-2 text-sm rounded bg-transparent", t.class) }), null, 16, ["class"]));
	}
}), Oj = /* @__PURE__ */ F({
	__name: "TagsInput.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		placeholder: { type: String }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j([]), a = vl();
		function o() {
			let e = a?._internals;
			if (!e) return;
			let t = n.name || a?.getAttribute("name") || "";
			if (i.value.length === 0) e.setFormValue(null);
			else if (t) {
				let n = new FormData();
				i.value.forEach((e) => n.append(t, e)), e.setFormValue(n);
			} else e.setFormValue(i.value.join(","));
			let r = a?.querySelector("input") ?? void 0;
			n.required && i.value.length === 0 ? e.setValidity({ valueMissing: !0 }, "Adicione pelo menos uma tag.", r) : e.setValidity({});
		}
		function s(e) {
			i.value = e, o(), r("change", e);
		}
		return I(() => {
			a && (a._reset = () => {
				i.value = [], o();
			}), o();
		}), (t, n) => (z(), V(M(Cj), {
			"model-value": i.value,
			disabled: e.disabled,
			class: "w-72",
			"onUpdate:modelValue": s
		}, {
			default: N(() => [(z(!0), B(R, null, ca(i.value, (e) => (z(), V(M(Tj), {
				key: e,
				value: e
			}, {
				default: N(() => [U(M(Dj)), U(M(Ej))]),
				_: 1
			}, 8, ["value"]))), 128)), U(M(wj), { placeholder: e.placeholder ?? "Adicionar..." }, null, 8, ["placeholder"])]),
			_: 1
		}, 8, ["model-value", "disabled"]));
	}
}), kj = ["data-size"], Aj = /* @__PURE__ */ F({
	__name: "Card",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		size: { default: "default" }
	},
	setup(e) {
		let t = e;
		return (n, r) => (z(), B("div", {
			"data-slot": "card",
			"data-size": e.size,
			class: k(M($)("ring-foreground/10 bg-card text-card-foreground gap-4 overflow-hidden rounded-xl py-4 text-sm ring-1 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col", t.class))
		}, [L(n.$slots, "default")], 10, kj));
	}
}), jj = /* @__PURE__ */ F({
	__name: "CardContent",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "card-content",
			class: k(M($)("px-4 group-data-[size=sm]/card:px-3", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), Mj = /* @__PURE__ */ F({
	__name: "CardDescription",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "card-description",
			class: k(M($)("text-muted-foreground text-sm", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), Nj = /* @__PURE__ */ F({
	__name: "CardFooter",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "card-footer",
			class: k(M($)("bg-muted/50 rounded-b-xl border-t p-4 group-data-[size=sm]/card:p-3 flex items-center", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), Pj = /* @__PURE__ */ F({
	__name: "CardHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "card-header",
			class: k(M($)("gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), Fj = /* @__PURE__ */ F({
	__name: "CardTitle",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "card-title",
			class: k(M($)("text-base leading-snug font-medium group-data-[size=sm]/card:text-sm cn-font-heading", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), Ij = /* @__PURE__ */ F({
	__name: "Card.ce",
	props: {
		cardTitle: { type: String },
		cardDescription: { type: String }
	},
	setup(e) {
		let t = wa();
		return (n, r) => (z(), V(M(Aj), { class: "w-80" }, {
			default: N(() => [
				e.cardTitle || e.cardDescription ? (z(), V(M(Pj), { key: 0 }, {
					default: N(() => [e.cardTitle ? (z(), V(M(Fj), { key: 0 }, {
						default: N(() => [_s(De(e.cardTitle), 1)]),
						_: 1
					})) : G("", !0), e.cardDescription ? (z(), V(M(Mj), { key: 1 }, {
						default: N(() => [_s(De(e.cardDescription), 1)]),
						_: 1
					})) : G("", !0)]),
					_: 1
				})) : G("", !0),
				U(M(jj), null, {
					default: N(() => [L(n.$slots, "default")]),
					_: 3
				}),
				M(t).footer ? (z(), V(M(Nj), { key: 1 }, {
					default: N(() => [L(n.$slots, "footer")]),
					_: 3
				})) : G("", !0)
			]),
			_: 3
		}));
	}
}), Lj = /* @__PURE__ */ F({
	__name: "Accordion",
	props: {
		collapsible: { type: Boolean },
		disabled: { type: Boolean },
		dir: {},
		orientation: {},
		unmountOnHide: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		type: {},
		modelValue: {},
		defaultValue: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(L_), K({ "data-slot": "accordion" }, M(i), { class: M($)("flex w-full flex-col", n.class) }), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), Rj = /* @__PURE__ */ F({
	__name: "AccordionContent",
	props: {
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(H_), K({ "data-slot": "accordion-content" }, M(n), { class: "data-open:animate-accordion-down data-closed:animate-accordion-up text-sm overflow-hidden" }), {
			default: N(() => [H("div", { class: k(M($)("pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", t.class)) }, [L(e.$slots, "default")], 2)]),
			_: 3
		}, 16));
	}
}), zj = /* @__PURE__ */ F({
	__name: "AccordionItem",
	props: {
		disabled: { type: Boolean },
		value: {},
		unmountOnHide: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(V_), K({ "data-slot": "accordion-item" }, M(n), { class: M($)("not-last:border-b", t.class) }), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), Bj = /* @__PURE__ */ F({
	__name: "AccordionTrigger",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(U_), { class: "flex" }, {
			default: N(() => [U(M(W_), K({ "data-slot": "accordion-trigger" }, M(n), { class: M($)("focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground rounded-lg py-2.5 text-left text-sm font-medium hover:underline focus-visible:ring-3 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50", t.class) }), {
				default: N(() => [L(e.$slots, "default"), L(e.$slots, "icon", {}, () => [U(M(Lf), {
					"data-slot": "accordion-trigger-icon",
					class: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
				}), U(M(Bf), {
					"data-slot": "accordion-trigger-icon",
					class: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
				})])]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), Vj = ["innerHTML"], Hj = /* @__PURE__ */ F({
	__name: "Accordion.ce",
	props: {
		type: { type: String },
		collapsible: { type: Boolean },
		defaultValue: { type: String }
	},
	setup(e) {
		let t = e, n = vl()?._light.sections ?? [];
		return (r, i) => (z(), V(M(Lj), {
			type: t.type ?? "single",
			collapsible: t.collapsible ?? !0,
			"default-value": e.defaultValue,
			class: "w-96"
		}, {
			default: N(() => [(z(!0), B(R, null, ca(M(n), (e, t) => (z(), V(M(zj), {
				key: t,
				value: e.value || String(t),
				disabled: e.disabled
			}, {
				default: N(() => [U(M(Bj), null, {
					default: N(() => [_s(De(e.title), 1)]),
					_: 2
				}, 1024), U(M(Rj), null, {
					default: N(() => [H("div", { innerHTML: e.html }, null, 8, Vj)]),
					_: 2
				}, 1024)]),
				_: 2
			}, 1032, ["value", "disabled"]))), 128))]),
			_: 1
		}, 8, [
			"type",
			"collapsible",
			"default-value"
		]));
	}
}), Uj = /* @__PURE__ */ F({
	__name: "Dialog",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		return (e, t) => (z(), V(M(q_), K({ "data-slot": "dialog" }, M(n)), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16));
	}
}), Wj = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Gj = fk, Kj = (e, t) => (n) => {
	if (t?.variants == null) return Gj(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = Wj(t) || Wj(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return Gj(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, qj = /* @__PURE__ */ F({
	__name: "Button",
	props: {
		variant: {},
		size: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		asChild: { type: Boolean },
		as: { default: "button" }
	},
	setup(e) {
		let t = e;
		return (n, r) => (z(), V(M(X), {
			"data-slot": "button",
			"data-variant": e.variant,
			"data-size": e.size,
			as: e.as,
			"as-child": e.asChild,
			class: k(M($)(M(Jj)({
				variant: e.variant,
				size: e.size
			}), t.class))
		}, {
			default: N(() => [L(n.$slots, "default")]),
			_: 3
		}, 8, [
			"data-variant",
			"data-size",
			"as",
			"as-child",
			"class"
		]));
	}
}), Jj = Kj("focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 active:not-aria-[haspopup]:translate-y-px [&_svg:not([class*=size-])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
			destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*=size-])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*=size-])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*=size-])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), Yj = /* @__PURE__ */ F({
	__name: "DialogOverlay",
	props: {
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(Mv), K({ "data-slot": "dialog-overlay" }, M(n), { class: M($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Xj = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "DialogContent",
	props: {
		forceMount: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		showCloseButton: {
			type: Boolean,
			default: !0
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (t, r) => (z(), V(M(Pv), null, {
			default: N(() => [U(Yj), U(M(kv), K({ "data-slot": "dialog-content" }, {
				...t.$attrs,
				...M(i)
			}, { class: M($)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 ring-foreground/10 grid max-w-[calc(100%-2rem)] gap-4 rounded-xl p-4 text-sm ring-1 duration-100 sm:max-w-sm fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none", n.class) }), {
				default: N(() => [L(t.$slots, "default"), e.showCloseButton ? (z(), V(M(J_), {
					key: 0,
					"data-slot": "dialog-close",
					"as-child": ""
				}, {
					default: N(() => [U(M(qj), {
						variant: "ghost",
						class: "absolute top-2 right-2",
						size: "icon-sm"
					}, {
						default: N(() => [U(M(Qf)), r[0] ||= H("span", { class: "sr-only" }, "Close", -1)]),
						_: 1
					})]),
					_: 1
				})) : G("", !0)]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), Zj = /* @__PURE__ */ F({
	__name: "DialogDescription",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(Av), K({ "data-slot": "dialog-description" }, M(n), { class: M($)("text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Qj = /* @__PURE__ */ F({
	__name: "DialogFooter",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		showCloseButton: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e;
		return (n, r) => (z(), B("div", {
			"data-slot": "dialog-footer",
			class: k(M($)("bg-muted/50 -mx-4 -mb-4 rounded-b-xl border-t p-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", t.class))
		}, [L(n.$slots, "default"), e.showCloseButton ? (z(), V(M(J_), {
			key: 0,
			"as-child": ""
		}, {
			default: N(() => [U(M(qj), { variant: "outline" }, {
				default: N(() => [...r[0] ||= [_s(" Close ", -1)]]),
				_: 1
			})]),
			_: 1
		})) : G("", !0)], 2));
	}
}), $j = /* @__PURE__ */ F({
	__name: "DialogHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "dialog-header",
			class: k(M($)("gap-2 flex flex-col", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), eM = /* @__PURE__ */ F({
	__name: "DialogTitle",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(Fv), K({ "data-slot": "dialog-title" }, M(n), { class: M($)("text-base leading-none font-medium cn-font-heading", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), tM = /* @__PURE__ */ F({
	__name: "DialogTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(Iv), K({ "data-slot": "dialog-trigger" }, t), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), nM = ["innerHTML"], rM = ["innerHTML"], iM = /* @__PURE__ */ F({
	__name: "Dialog.ce",
	setup(e) {
		let t = vl()?._light.slots ?? {};
		return (e, n) => (z(), V(M(Uj), null, {
			default: N(() => [U(M(tM), { "as-child": "" }, {
				default: N(() => [H("button", {
					type: "button",
					innerHTML: M(t).trigger || "Abrir"
				}, null, 8, nM)]),
				_: 1
			}), U(M(Xj), null, {
				default: N(() => [
					U(M($j), null, {
						default: N(() => [M(t).title ? (z(), V(M(eM), {
							key: 0,
							innerHTML: M(t).title
						}, null, 8, ["innerHTML"])) : G("", !0), M(t).description ? (z(), V(M(Zj), {
							key: 1,
							innerHTML: M(t).description
						}, null, 8, ["innerHTML"])) : G("", !0)]),
						_: 1
					}),
					M(t).content ? (z(), B("div", {
						key: 0,
						innerHTML: M(t).content
					}, null, 8, rM)) : G("", !0),
					M(t).footer ? (z(), V(M(Qj), {
						key: 1,
						innerHTML: M(t).footer
					}, null, 8, ["innerHTML"])) : G("", !0)
				]),
				_: 1
			})]),
			_: 1
		}));
	}
}), aM = /* @__PURE__ */ F({
	__name: "Alert",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: {}
	},
	setup(e) {
		let t = e;
		return (n, r) => (z(), B("div", {
			"data-slot": "alert",
			class: k(M($)(M(cM)({ variant: e.variant }), t.class)),
			role: "alert"
		}, [L(n.$slots, "default")], 2));
	}
}), oM = /* @__PURE__ */ F({
	__name: "AlertDescription",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "alert-description",
			class: k(M($)("text-muted-foreground text-sm text-balance md:text-pretty [&_p:not(:last-child)]:mb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), sM = /* @__PURE__ */ F({
	__name: "AlertTitle",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "alert-title",
			class: k(M($)("font-medium group-has-[>svg]/alert:col-start-2 cn-font-heading [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), cM = Kj("grid gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*=size-])]:size-4 group/alert relative w-full", {
	variants: { variant: {
		default: "bg-card text-card-foreground",
		destructive: "text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"
	} },
	defaultVariants: { variant: "default" }
}), lM = /* @__PURE__ */ F({
	__name: "Alert.ce",
	props: { variant: { type: null } },
	setup(e) {
		let t = e, n = vl()?._light, r = n?.slots ?? {}, i = !!r.title;
		return (e, a) => (z(), V(M(aM), { variant: t.variant }, {
			default: N(() => [i ? (z(), V(M(sM), {
				key: 0,
				innerHTML: M(r).title
			}, null, 8, ["innerHTML"])) : G("", !0), U(M(oM), { innerHTML: M(r).description || M(n)?.defaultHtml || "" }, null, 8, ["innerHTML"])]),
			_: 1
		}, 8, ["variant"]));
	}
}), uM = /* @__PURE__ */ F({
	__name: "AspectRatio",
	props: {
		ratio: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(Kv), K({ "data-slot": "aspect-ratio" }, t), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16));
	}
}), dM = ["innerHTML"], fM = /* @__PURE__ */ F({
	__name: "AspectRatio.ce",
	props: { ratio: { type: [String, Number] } },
	setup(e) {
		let t = e, n = vl()?._light, r = (() => {
			let e = t.ratio;
			if (e == null || e === "") return 16 / 9;
			if (typeof e == "number") return e;
			let n = String(e).split("/");
			if (n.length === 2) {
				let e = Number(n[0]), t = Number(n[1]);
				if (!isNaN(e) && !isNaN(t) && t !== 0) return e / t;
			}
			let r = Number(e);
			return isNaN(r) ? 16 / 9 : r;
		})();
		return (e, t) => (z(), V(M(uM), { ratio: M(r) }, {
			default: N(() => [H("div", { innerHTML: M(n)?.defaultHtml || "" }, null, 8, dM)]),
			_: 1
		}, 8, ["ratio"]));
	}
}), pM = /* @__PURE__ */ F({
	__name: "Avatar",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		size: {}
	},
	setup(e) {
		let t = e;
		return (n, r) => (z(), V(M(Wx), {
			"data-slot": "avatar",
			"data-size": e.size ?? "default",
			class: k(M($)(M(gM)({ size: e.size }), t.class))
		}, {
			default: N(() => [L(n.$slots, "default")]),
			_: 3
		}, 8, ["data-size", "class"]));
	}
}), mM = /* @__PURE__ */ F({
	__name: "AvatarFallback",
	props: {
		delayMs: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(Gx), K({ "data-slot": "avatar-fallback" }, M(n), { class: M($)("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), hM = /* @__PURE__ */ F({
	__name: "AvatarImage",
	props: {
		src: {},
		referrerPolicy: {},
		crossOrigin: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(Jx), K({ "data-slot": "avatar-image" }, t, { class: "rounded-full aspect-square size-full object-cover" }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), gM = Kj("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten", {
	variants: { size: {
		sm: "",
		default: "",
		lg: ""
	} },
	defaultVariants: { size: "default" }
}), _M = ["innerHTML"], vM = /* @__PURE__ */ F({
	__name: "Avatar.ce",
	props: {
		src: { type: String },
		alt: { type: String },
		fallback: { type: String },
		size: { type: null }
	},
	setup(e) {
		let t = e, n = vl()?._light?.slots ?? {};
		return (e, r) => (z(), V(M(pM), { size: t.size }, {
			default: N(() => [t.src ? (z(), V(M(hM), {
				key: 0,
				src: t.src,
				alt: t.alt ?? ""
			}, null, 8, ["src", "alt"])) : G("", !0), U(M(mM), null, {
				default: N(() => [M(n).fallback ? (z(), B("span", {
					key: 0,
					innerHTML: M(n).fallback
				}, null, 8, _M)) : (z(), B(R, { key: 1 }, [_s(De(t.fallback ?? ""), 1)], 64))]),
				_: 1
			})]),
			_: 1
		}, 8, ["size"]));
	}
}), yM = /* @__PURE__ */ F({
	__name: "Badge",
	props: {
		asChild: { type: Boolean },
		as: {},
		variant: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (r, i) => (z(), V(M(X), K({
			"data-slot": "badge",
			"data-variant": e.variant,
			class: M($)(M(bM)({ variant: e.variant }), t.class)
		}, M(n)), {
			default: N(() => [L(r.$slots, "default")]),
			_: 3
		}, 16, ["data-variant", "class"]));
	}
}), bM = Kj("h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
		destructive: "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
		outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
		ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
		link: "text-primary underline-offset-4 hover:underline"
	} },
	defaultVariants: { variant: "default" }
}), xM = ["innerHTML"], SM = /* @__PURE__ */ F({
	__name: "Badge.ce",
	props: { variant: { type: null } },
	setup(e) {
		let t = e, n = vl()?._light;
		return (e, r) => (z(), V(M(yM), { variant: t.variant }, {
			default: N(() => [H("span", { innerHTML: M(n)?.defaultHtml || "" }, null, 8, xM)]),
			_: 1
		}, 8, ["variant"]));
	}
}), CM = /* @__PURE__ */ F({
	__name: "Breadcrumb",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("nav", {
			"aria-label": "breadcrumb",
			"data-slot": "breadcrumb",
			class: k(M($)("", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), wM = /* @__PURE__ */ F({
	__name: "BreadcrumbItem",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("li", {
			"data-slot": "breadcrumb-item",
			class: k(M($)("gap-1 inline-flex items-center", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), TM = /* @__PURE__ */ F({
	__name: "BreadcrumbLink",
	props: {
		asChild: { type: Boolean },
		as: { default: "a" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		return (n, r) => (z(), V(M(X), {
			"data-slot": "breadcrumb-link",
			as: e.as,
			"as-child": e.asChild,
			class: k(M($)("hover:text-foreground transition-colors", t.class))
		}, {
			default: N(() => [L(n.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class"
		]));
	}
}), EM = /* @__PURE__ */ F({
	__name: "BreadcrumbList",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("ol", {
			"data-slot": "breadcrumb-list",
			class: k(M($)("text-muted-foreground gap-1.5 text-sm flex flex-wrap items-center wrap-break-word", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), DM = /* @__PURE__ */ F({
	__name: "BreadcrumbPage",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("span", {
			"data-slot": "breadcrumb-page",
			role: "link",
			"aria-disabled": "true",
			"aria-current": "page",
			class: k(M($)("text-foreground font-normal", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), OM = /* @__PURE__ */ F({
	__name: "BreadcrumbSeparator",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("li", {
			"data-slot": "breadcrumb-separator",
			role: "presentation",
			"aria-hidden": "true",
			class: k(M($)("[&>svg]:size-3.5", t.class))
		}, [L(e.$slots, "default", {}, () => [U(M(zf), { class: "cn-rtl-flip" })])], 2));
	}
}), kM = /* @__PURE__ */ F({
	__name: "Breadcrumb.ce",
	setup(e) {
		let t = vl()?._light?.options ?? [];
		return (e, n) => (z(), V(M(CM), null, {
			default: N(() => [U(M(EM), null, {
				default: N(() => [(z(!0), B(R, null, ca(M(t), (e, n) => (z(), B(R, { key: e.value + n }, [U(M(wM), null, {
					default: N(() => [n === M(t).length - 1 ? (z(), V(M(DM), { key: 0 }, {
						default: N(() => [_s(De(e.label), 1)]),
						_: 2
					}, 1024)) : (z(), V(M(TM), {
						key: 1,
						href: e.value
					}, {
						default: N(() => [_s(De(e.label), 1)]),
						_: 2
					}, 1032, ["href"]))]),
					_: 2
				}, 1024), n < M(t).length - 1 ? (z(), V(M(OM), { key: 0 })) : G("", !0)], 64))), 128))]),
				_: 1
			})]),
			_: 1
		}));
	}
}), AM = /* @__PURE__ */ F({
	__name: "Separator",
	props: {
		orientation: { default: "horizontal" },
		decorative: {
			type: Boolean,
			default: !0
		},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(qE), K({ "data-slot": "separator" }, M(n), { class: M($)("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch", t.class) }), null, 16, ["class"]));
	}
}), jM = /* @__PURE__ */ F({
	__name: "Separator.ce",
	props: { orientation: { type: String } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(AM), { orientation: t.orientation ?? "horizontal" }, null, 8, ["orientation"]));
	}
}), MM = /* @__PURE__ */ F({
	__name: "Skeleton",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "skeleton",
			class: k(M($)("bg-muted rounded-md animate-pulse", t.class))
		}, null, 2));
	}
}), NM = /* @__PURE__ */ F({
	__name: "Skeleton.ce",
	props: {
		width: { type: String },
		height: { type: String }
	},
	setup(e) {
		let t = e, n = q(() => {
			let e = {};
			return t.width && (e.width = t.width), t.height && (e.height = t.height), e;
		});
		return (e, t) => (z(), V(M(MM), { style: he(n.value) }, null, 8, ["style"]));
	}
}), PM = ["innerHTML"], FM = /* @__PURE__ */ F({
	__name: "Button.ce",
	props: {
		variant: { type: null },
		size: { type: null },
		disabled: { type: Boolean },
		type: { type: String }
	},
	setup(e) {
		let t = e, n = vl()?._light;
		return (e, r) => (z(), V(M(qj), {
			variant: t.variant,
			size: t.size,
			disabled: t.disabled,
			type: t.type ?? "button"
		}, {
			default: N(() => [H("span", { innerHTML: M(n)?.defaultHtml || "" }, null, 8, PM)]),
			_: 1
		}, 8, [
			"variant",
			"size",
			"disabled",
			"type"
		]));
	}
}), IM = /* @__PURE__ */ F({
	__name: "Progress",
	props: {
		modelValue: { default: 0 },
		max: {},
		getValueLabel: {},
		getValueText: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(ET), K({ "data-slot": "progress" }, M(n), { class: M($)("bg-muted h-1 rounded-full relative flex w-full items-center overflow-x-hidden", t.class) }), {
			default: N(() => [U(M(DT), {
				"data-slot": "progress-indicator",
				class: "bg-primary size-full flex-1 transition-all",
				style: he(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
			}, null, 8, ["style"])]),
			_: 1
		}, 16, ["class"]));
	}
}), LM = /* @__PURE__ */ F({
	__name: "Progress.ce",
	props: { value: { type: [Number, String] } },
	setup(e) {
		vl();
		let t = e, n = q(() => Number(t.value ?? 0));
		return (e, t) => (z(), V(M(IM), { "model-value": n.value }, null, 8, ["model-value"]));
	}
}), RM = /* @__PURE__ */ F({
	__name: "Label.ce",
	props: { for: { type: String } },
	setup(e) {
		let t = vl()?._light, n = e;
		return (e, r) => (z(), V(M(nj), {
			for: n.for,
			innerHTML: M(t)?.defaultHtml || ""
		}, null, 8, ["for", "innerHTML"]));
	}
}), zM = /* @__PURE__ */ F({
	__name: "InputGroup",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "input-group",
			role: "group",
			class: k(M($)("border-input dark:bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-disabled:bg-input/50 dark:has-disabled:bg-input/80 h-8 rounded-lg border transition-colors in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-3 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), BM = ["data-align"], VM = /* @__PURE__ */ F({
	__name: "InputGroupAddon",
	props: {
		align: { default: "inline-start" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		function n(e) {
			let t = e.currentTarget, n = e.target;
			n && n.closest("button") || t && t?.parentElement && t.parentElement?.querySelector("input")?.focus();
		}
		return (e, r) => (z(), B("div", {
			role: "group",
			"data-slot": "input-group-addon",
			"data-align": t.align,
			class: k(M($)(M(HM)({ align: t.align }), t.class)),
			onClick: n
		}, [L(e.$slots, "default")], 10, BM));
	}
}), HM = Kj("text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*=size-])]:size-4 flex cursor-text items-center justify-center select-none", {
	variants: { align: {
		"inline-start": "pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first",
		"inline-end": "pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] order-last",
		"block-start": "px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start",
		"block-end": "px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start"
	} },
	defaultVariants: { align: "inline-start" }
}), UM = /* @__PURE__ */ F({
	__name: "InputGroup.ce",
	setup(e) {
		let t = vl()?._light;
		return (e, n) => (z(), V(M(zM), { innerHTML: M(t)?.html || "" }, null, 8, ["innerHTML"]));
	}
}), WM = /* @__PURE__ */ F({
	__name: "ScrollBar",
	props: {
		orientation: { default: "vertical" },
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (r, i) => (z(), V(M(aE), K({
			"data-slot": "scroll-area-scrollbar",
			"data-orientation": e.orientation
		}, M(n), { class: M($)("data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent flex touch-none p-px transition-colors select-none", t.class) }), {
			default: N(() => [U(M(uE), {
				"data-slot": "scroll-area-thumb",
				class: "rounded-full relative flex-1 bg-border"
			})]),
			_: 1
		}, 16, ["data-orientation", "class"]));
	}
}), GM = /* @__PURE__ */ F({
	__name: "ScrollArea",
	props: {
		type: {},
		dir: {},
		scrollHideDelay: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(BT), K({ "data-slot": "scroll-area" }, M(n), { class: M($)("relative", t.class) }), {
			default: N(() => [
				U(M(dE), {
					"data-slot": "scroll-area-viewport",
					class: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
				}, {
					default: N(() => [L(e.$slots, "default")]),
					_: 3
				}),
				U(WM),
				U(M(HT))
			]),
			_: 3
		}, 16, ["class"]));
	}
}), KM = /* @__PURE__ */ F({
	__name: "ScrollArea.ce",
	props: {
		height: { type: String },
		width: { type: String }
	},
	setup(e) {
		let t = vl()?._light, n = e, r = q(() => ({
			...n.height ? { height: n.height } : {},
			...n.width ? { width: n.width } : {}
		}));
		return (e, n) => (z(), V(M(GM), {
			style: he(r.value),
			innerHTML: M(t)?.defaultHtml || ""
		}, null, 8, ["style", "innerHTML"]));
	}
}), qM = {
	"data-slot": "table-container",
	class: "relative w-full overflow-x-auto"
}, JM = /* @__PURE__ */ F({
	__name: "Table",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", qM, [H("table", {
			"data-slot": "table",
			class: k(M($)("w-full caption-bottom text-sm", t.class))
		}, [L(e.$slots, "default")], 2)]));
	}
}), YM = /* @__PURE__ */ F({
	__name: "Table.ce",
	setup(e) {
		let t = vl()?._light;
		return (e, n) => (z(), V(M(JM), { innerHTML: M(t)?.html || "" }, null, 8, ["innerHTML"]));
	}
}), XM = /* @__PURE__ */ F({
	__name: "Tabs",
	props: {
		defaultValue: {},
		orientation: {},
		dir: {},
		activationMode: {},
		modelValue: {},
		unmountOnHide: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(MO), K({
			"data-slot": "tabs",
			"data-orientation": M(i).orientation || "horizontal"
		}, M(i), { class: M($)("gap-2 group/tabs flex data-horizontal:flex-col", n.class) }), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16, ["data-orientation", "class"]));
	}
}), ZM = /* @__PURE__ */ F({
	__name: "TabsContent",
	props: {
		value: {},
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(FO), K({
			"data-slot": "tabs-content",
			class: M($)("text-sm flex-1 outline-none", t.class)
		}, M(n)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), QM = /* @__PURE__ */ F({
	__name: "TabsList",
	props: {
		loop: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: { default: "default" }
	},
	setup(e) {
		let t = e, n = J(t, "class", "variant");
		return (r, i) => (z(), V(M(IO), K({
			"data-slot": "tabs-list",
			"data-variant": e.variant
		}, M(n), { class: M($)(M(eN)({ variant: e.variant }), t.class) }), {
			default: N(() => [L(r.$slots, "default")]),
			_: 3
		}, 16, ["data-variant", "class"]));
	}
}), $M = /* @__PURE__ */ F({
	__name: "TabsTrigger",
	props: {
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(LO), K({
			"data-slot": "tabs-trigger",
			class: M($)("gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg:not([class*=size-])]:size-4 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent", "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", t.class)
		}, M(n)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), eN = Kj("rounded-lg p-[3px] group-data-horizontal/tabs:h-8 data-[variant=line]:rounded-none group/tabs-list inline-flex w-fit items-center justify-center text-muted-foreground group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
}), tN = ["innerHTML"], nN = /* @__PURE__ */ F({
	__name: "Tabs.ce",
	props: { defaultValue: { type: String } },
	setup(e) {
		let t = e, n = vl()?._light.sections ?? [], r = t.defaultValue ?? n[0]?.value ?? void 0;
		return (e, t) => (z(), V(M(XM), { "default-value": M(r) }, {
			default: N(() => [U(M(QM), null, {
				default: N(() => [(z(!0), B(R, null, ca(M(n), (e, t) => (z(), V(M($M), {
					key: t,
					value: e.value || String(t),
					disabled: e.disabled
				}, {
					default: N(() => [_s(De(e.title), 1)]),
					_: 2
				}, 1032, ["value", "disabled"]))), 128))]),
				_: 1
			}), (z(!0), B(R, null, ca(M(n), (e, t) => (z(), V(M(ZM), {
				key: t,
				value: e.value || String(t)
			}, {
				default: N(() => [H("div", { innerHTML: e.html }, null, 8, tN)]),
				_: 2
			}, 1032, ["value"]))), 128))]),
			_: 1
		}, 8, ["default-value"]));
	}
}), rN = /* @__PURE__ */ F({
	__name: "Collapsible",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		disabled: { type: Boolean },
		unmountOnHide: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		return (e, t) => (z(), V(M(O_), K({ "data-slot": "collapsible" }, M(n)), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16));
	}
}), iN = /* @__PURE__ */ F({
	__name: "CollapsibleContent",
	props: {
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(k_), K({ "data-slot": "collapsible-content" }, t), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), aN = /* @__PURE__ */ F({
	__name: "CollapsibleTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(A_), K({ "data-slot": "collapsible-trigger" }, t), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), oN = ["innerHTML"], sN = ["innerHTML"], cN = /* @__PURE__ */ F({
	__name: "Collapsible.ce",
	props: { defaultOpen: { type: Boolean } },
	setup(e) {
		let t = e, n = vl(), r = n?._light.slots.trigger ?? "", i = n?._light.defaultHtml ?? "";
		return (e, n) => (z(), V(M(rN), { "default-open": t.defaultOpen ?? !1 }, {
			default: N(() => [U(M(aN), { "as-child": "" }, {
				default: N(() => [H("button", { innerHTML: M(r) || "Toggle" }, null, 8, oN)]),
				_: 1
			}), U(M(iN), null, {
				default: N(() => [H("div", { innerHTML: M(i) }, null, 8, sN)]),
				_: 1
			})]),
			_: 1
		}, 8, ["default-open"]));
	}
}), lN = /* @__PURE__ */ F({
	__name: "Stepper",
	props: {
		defaultValue: {},
		orientation: {},
		dir: {},
		modelValue: {},
		linear: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(_O), K({ class: M($)("flex gap-2", n.class) }, M(i)), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), uN = /* @__PURE__ */ F({
	__name: "StepperDescription",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(xO), K(M(n), { class: M($)("text-xs text-muted-foreground", t.class) }), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), dN = /* @__PURE__ */ F({
	__name: "StepperIndicator",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(SO), K(M(n), { class: M($)("inline-flex items-center justify-center rounded-full text-muted-foreground/50 w-8 h-8", "group-data-[disabled]:text-muted-foreground group-data-[disabled]:opacity-50", "group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground", "group-data-[state=completed]:bg-accent group-data-[state=completed]:text-accent-foreground", t.class) }), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), fN = /* @__PURE__ */ F({
	__name: "StepperItem",
	props: {
		step: {},
		disabled: { type: Boolean },
		completed: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(bO), K(M(n), { class: M($)("flex items-center gap-2 group data-[disabled]:pointer-events-none", t.class) }), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), pN = /* @__PURE__ */ F({
	__name: "StepperSeparator",
	props: {
		orientation: {},
		decorative: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(CO), K(M(n), { class: M($)("bg-muted", "group-data-[disabled]:bg-muted group-data-[disabled]:opacity-50", "group-data-[state=completed]:bg-accent", t.class) }), null, 16, ["class"]));
	}
}), mN = /* @__PURE__ */ F({
	__name: "StepperTitle",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(wO), K(M(n), { class: M($)("text-md font-semibold whitespace-nowrap", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), hN = /* @__PURE__ */ F({
	__name: "StepperTrigger",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(TO), K(M(n), { class: M($)("p-1 flex flex-col items-center text-center gap-1 rounded-md", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), gN = ["innerHTML"], _N = /* @__PURE__ */ F({
	__name: "Stepper.ce",
	props: {
		orientation: { type: String },
		defaultValue: { type: Number }
	},
	setup(e) {
		let t = e, n = vl()?._light.sections ?? [];
		return (e, r) => (z(), V(M(lN), {
			orientation: t.orientation ?? "horizontal",
			"default-value": t.defaultValue ?? 1,
			linear: ""
		}, {
			default: N(() => [(z(!0), B(R, null, ca(M(n), (e, t) => (z(), V(M(fN), {
				key: t,
				step: t + 1,
				disabled: e.disabled
			}, {
				default: N(() => [U(M(hN), null, {
					default: N(() => [
						U(M(dN), null, {
							default: N(() => [_s(De(t + 1), 1)]),
							_: 2
						}, 1024),
						U(M(mN), null, {
							default: N(() => [_s(De(e.title), 1)]),
							_: 2
						}, 1024),
						e.html ? (z(), V(M(uN), { key: 0 }, {
							default: N(() => [H("div", { innerHTML: e.html }, null, 8, gN)]),
							_: 2
						}, 1024)) : G("", !0)
					]),
					_: 2
				}, 1024), t < M(n).length - 1 ? (z(), V(M(pN), { key: 0 })) : G("", !0)]),
				_: 2
			}, 1032, ["step", "disabled"]))), 128))]),
			_: 1
		}, 8, ["orientation", "default-value"]));
	}
}), vN = /* @__PURE__ */ F({
	__name: "AlertDialog",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		return (e, t) => (z(), V(M(Uv), K({ "data-slot": "alert-dialog" }, M(n)), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16));
	}
}), yN = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "AlertDialogContent",
	props: {
		forceMount: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		size: { default: "default" }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class", "size"), r);
		return (t, r) => (z(), V(M(Hv), null, {
			default: N(() => [U(M(Vv), {
				"data-slot": "alert-dialog-overlay",
				class: "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50"
			}), U(M(zv), K({
				"data-slot": "alert-dialog-content",
				"data-size": e.size
			}, {
				...t.$attrs,
				...M(i)
			}, { class: M($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 bg-popover text-popover-foreground ring-foreground/10 gap-4 rounded-xl p-4 ring-1 duration-100 data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 outline-none", n.class) }), {
				default: N(() => [L(t.$slots, "default")]),
				_: 3
			}, 16, ["data-size", "class"])]),
			_: 3
		}));
	}
}), bN = /* @__PURE__ */ F({
	__name: "AlertDialogDescription",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(Bv), K({ "data-slot": "alert-dialog-description" }, M(n), { class: M($)("text-muted-foreground *:[a]:hover:text-foreground text-sm text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), xN = /* @__PURE__ */ F({
	__name: "AlertDialogFooter",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "alert-dialog-footer",
			class: k(M($)("bg-muted/50 -mx-4 -mb-4 rounded-b-xl border-t p-4 flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), SN = /* @__PURE__ */ F({
	__name: "AlertDialogHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "alert-dialog-header",
			class: k(M($)("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), CN = /* @__PURE__ */ F({
	__name: "AlertDialogTitle",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(Wv), K({ "data-slot": "alert-dialog-title" }, M(n), { class: M($)("text-base font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2 cn-font-heading", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), wN = /* @__PURE__ */ F({
	__name: "AlertDialogTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(Gv), K({ "data-slot": "alert-dialog-trigger" }, t), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), TN = ["innerHTML"], EN = ["innerHTML"], DN = /* @__PURE__ */ F({
	__name: "AlertDialog.ce",
	setup(e) {
		let t = vl()?._light.slots ?? {};
		return (e, n) => (z(), V(M(vN), null, {
			default: N(() => [U(M(wN), { "as-child": "" }, {
				default: N(() => [H("button", {
					type: "button",
					innerHTML: M(t).trigger || "Abrir"
				}, null, 8, TN)]),
				_: 1
			}), U(M(yN), null, {
				default: N(() => [
					U(M(SN), null, {
						default: N(() => [M(t).title ? (z(), V(M(CN), {
							key: 0,
							innerHTML: M(t).title
						}, null, 8, ["innerHTML"])) : G("", !0), M(t).description ? (z(), V(M(bN), {
							key: 1,
							innerHTML: M(t).description
						}, null, 8, ["innerHTML"])) : G("", !0)]),
						_: 1
					}),
					M(t).content ? (z(), B("div", {
						key: 0,
						innerHTML: M(t).content
					}, null, 8, EN)) : G("", !0),
					M(t).footer ? (z(), V(M(xN), {
						key: 1,
						innerHTML: M(t).footer
					}, null, 8, ["innerHTML"])) : G("", !0)
				]),
				_: 1
			})]),
			_: 1
		}));
	}
});
//#endregion
//#region node_modules/vaul-vue/dist/index.js
(function() {
	try {
		if (typeof document < "u") {
			var e = document.createElement("style");
			e.nonce = document.head.querySelector("meta[property=csp-nonce]")?.content, e.appendChild(document.createTextNode("[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32,.72,0,1);animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform, 100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform, 100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true]):after{content:\"\";position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:hover,[data-vaul-handle]:active{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover: hover) and (pointer: fine){[data-vaul-drawer]{-webkit-user-select:none;user-select:none}}@media (pointer: fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{0%{transform:translate3d(0,var(--initial-transform, 100%),0)}to{transform:translateZ(0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform, 100%),0)}}@keyframes slideFromTop{0%{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}to{transform:translateZ(0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}}@keyframes slideFromLeft{0%{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}to{transform:translateZ(0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}}@keyframes slideFromRight{0%{transform:translate3d(var(--initial-transform, 100%),0,0)}to{transform:translateZ(0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform, 100%),0,0)}}")), document.head.appendChild(e);
		}
	} catch (e) {
		console.error("vite-plugin-css-injected-by-js", e);
	}
})();
var ON = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var kN = (e) => typeof e < "u";
function AN(e) {
	return JSON.parse(JSON.stringify(e));
}
function jN(e, t, n, r = {}) {
	let { clone: i = !1, passive: a = !1, eventName: o, deep: s = !1, defaultValue: c, shouldEmit: l } = r, u = Ds(), d = n || u?.emit || (u?.$emit)?.bind(u) || (u?.proxy?.$emit)?.bind(u?.proxy), f = o;
	t ||= "modelValue", f ||= `update:${t.toString()}`;
	let p = (e) => i ? typeof i == "function" ? i(e) : AN(e) : e, m = () => kN(e[t]) ? p(e[t]) : c, h = (e) => {
		l ? l(e) && d(f, e) : d(f, e);
	};
	if (a) {
		let n = /* @__PURE__ */ j(m()), r = !1;
		return P(() => e[t], (e) => {
			r || (r = !0, n.value = p(e), er(() => r = !1));
		}), P(n, (n) => {
			!r && (n !== e[t] || s) && h(n);
		}, { deep: s }), n;
	} else return q({
		get() {
			return m();
		},
		set(e) {
			h(e);
		}
	});
}
var [MN, NN] = cp("DrawerRoot"), PN = /* @__PURE__ */ new WeakMap();
function FN(e, t, n = !1) {
	if (!e || !(e instanceof HTMLElement) || !t) return;
	let r = {};
	Object.entries(t).forEach(([t, n]) => {
		if (t.startsWith("--")) {
			e.style.setProperty(t, n);
			return;
		}
		r[t] = e.style[t], e.style[t] = n;
	}), !n && PN.set(e, r);
}
function IN(e, t) {
	if (!e || !(e instanceof HTMLElement)) return;
	let n = PN.get(e);
	n && Object.entries(n).forEach(([t, n]) => {
		e.style[t] = n;
	});
}
function LN(e, t) {
	let n = window.getComputedStyle(e), r = n.transform || n.webkitTransform || n.mozTransform, i = r.match(/^matrix3d\((.+)\)$/);
	return i ? Number.parseFloat(i[1].split(", ")[zN(t) ? 13 : 12]) : (i = r.match(/^matrix\((.+)\)$/), i ? Number.parseFloat(i[1].split(", ")[zN(t) ? 5 : 4]) : null);
}
function RN(e) {
	return 8 * (Math.log(e + 1) - 2);
}
function zN(e) {
	switch (e) {
		case "top":
		case "bottom": return !0;
		case "left":
		case "right": return !1;
		default: return e;
	}
}
function BN(e, t) {
	if (!e) return () => {};
	let n = e.style.cssText;
	return Object.assign(e.style, t), () => {
		e.style.cssText = n;
	};
}
var VN = {
	DURATION: .5,
	EASE: [
		.32,
		.72,
		0,
		1
	]
}, HN = .4, UN = .25, WN = 100, GN = 8, KN = 16, qN = 26, JN = "vaul-dragging";
function YN({ activeSnapPoint: e, snapPoints: t, drawerRef: n, overlayRef: r, fadeFromIndex: i, onSnapPointChange: a, direction: o }) {
	let s = /* @__PURE__ */ j(typeof window < "u" ? {
		innerWidth: window.innerWidth,
		innerHeight: window.innerHeight
	} : void 0);
	function c() {
		s.value = {
			innerWidth: window.innerWidth,
			innerHeight: window.innerHeight
		};
	}
	I(() => {
		typeof window < "u" && window.addEventListener("resize", c);
	}), Ji(() => {
		typeof window < "u" && window.removeEventListener("resize", c);
	});
	let l = q(() => (t.value && e.value === t.value[t.value.length - 1]) ?? null), u = q(() => t.value && t.value.length > 0 && (i?.value || i?.value === 0) && !Number.isNaN(i?.value) && t.value[i?.value ?? -1] === e.value || !t.value), d = q(() => t.value?.findIndex((t) => t === e.value) ?? null), f = q(() => t.value?.map((e) => {
		let t = typeof e == "string", n = 0;
		if (t && (n = Number.parseInt(e, 10)), zN(o.value)) {
			let r = t ? n : s.value ? e * s.value.innerHeight : 0;
			return s.value ? o.value === "bottom" ? s.value.innerHeight - r : -s.value.innerHeight + r : r;
		}
		let r = t ? n : s.value ? e * s.value.innerWidth : 0;
		return s.value ? o.value === "right" ? s.value.innerWidth - r : -s.value.innerWidth + r : r;
	}) ?? []), p = q(() => d.value === null ? null : f.value?.[d.value]), m = (s) => {
		let c = f.value?.findIndex((e) => e === s) ?? null;
		er(() => {
			a(c, f.value), FN(n.value?.$el, {
				transition: `transform ${VN.DURATION}s cubic-bezier(${VN.EASE.join(",")})`,
				transform: zN(o.value) ? `translate3d(0, ${s}px, 0)` : `translate3d(${s}px, 0, 0)`
			});
		}), f.value && c !== f.value.length - 1 && c !== i?.value ? FN(r.value?.$el, {
			transition: `opacity ${VN.DURATION}s cubic-bezier(${VN.EASE.join(",")})`,
			opacity: "0"
		}) : FN(r.value?.$el, {
			transition: `opacity ${VN.DURATION}s cubic-bezier(${VN.EASE.join(",")})`,
			opacity: "1"
		}), e.value = c === null ? null : t.value?.[c] ?? null;
	};
	P([
		e,
		f,
		t
	], () => {
		if (e.value) {
			let n = t.value?.findIndex((t) => t === e.value) ?? -1;
			f.value && n !== -1 && typeof f.value[n] == "number" && m(f.value[n]);
		}
	}, { immediate: !0 });
	function h({ draggedDistance: e, closeDrawer: n, velocity: a, dismissible: s }) {
		if (i.value === void 0) return;
		let c = o.value === "bottom" || o.value === "right" ? (p.value ?? 0) - e : (p.value ?? 0) + e, u = d.value === i.value - 1, h = d.value === 0, g = e > 0;
		if (u && FN(r.value?.$el, { transition: `opacity ${VN.DURATION}s cubic-bezier(${VN.EASE.join(",")})` }), a > 2 && !g) {
			s ? n() : m(f.value[0]);
			return;
		}
		if (a > 2 && g && f && t.value) {
			m(f.value[t.value.length - 1]);
			return;
		}
		let _ = f.value?.reduce((e, t) => typeof e != "number" || typeof t != "number" ? e : Math.abs(t - c) < Math.abs(e - c) ? t : e), v = zN(o.value) ? window.innerHeight : window.innerWidth;
		if (a > HN && Math.abs(e) < v * .4) {
			let e = g ? 1 : -1;
			if (e > 0 && l) {
				m(f.value[(t.value?.length ?? 0) - 1]);
				return;
			}
			if (h && e < 0 && s && n(), d.value === null) return;
			m(f.value[d.value + e]);
			return;
		}
		m(_);
	}
	function g({ draggedDistance: e }) {
		if (p.value === null) return;
		let t = o.value === "bottom" || o.value === "right" ? p.value - e : p.value + e;
		(o.value === "bottom" || o.value === "right") && t < f.value[f.value.length - 1] || (o.value === "top" || o.value === "left") && t > f.value[f.value.length - 1] || FN(n.value?.$el, { transform: zN(o.value) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)` });
	}
	function _(e, n) {
		if (!t.value || typeof d.value != "number" || !f.value || i.value === void 0) return null;
		let r = d.value === i.value - 1;
		if (d.value >= i.value && n) return 0;
		if (r && !n) return 1;
		if (!u.value && !r) return null;
		let a = r ? d.value + 1 : d.value - 1, o = r ? f.value[a] - f.value[a - 1] : f.value[a + 1] - f.value[a], s = e / Math.abs(o);
		return r ? 1 - s : s;
	}
	return {
		isLastSnapPoint: l,
		shouldFade: u,
		getPercentageDragged: _,
		activeSnapPointIndex: d,
		onRelease: h,
		onDrag: g,
		snapPointsOffset: f
	};
}
function XN() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
var ZN = null;
function QN(e) {
	let { isOpen: t, modal: n, nested: r, hasBeenOpened: i, preventScrollRestoration: a, noBodyStyles: o } = e, s = /* @__PURE__ */ j(typeof window < "u" ? window.location.href : ""), c = /* @__PURE__ */ j(0);
	function l() {
		if (XN() && ZN === null && t.value && !o.value) {
			ZN = {
				position: document.body.style.position,
				top: document.body.style.top,
				left: document.body.style.left,
				height: document.body.style.height
			};
			let { scrollX: e, innerHeight: t } = window;
			document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
				top: `${-c.value}px`,
				left: `${-e}px`,
				right: "0px",
				height: "auto"
			}), setTimeout(() => {
				requestAnimationFrame(() => {
					let e = t - window.innerHeight;
					e && c.value >= t && (document.body.style.top = `-${c.value + e}px`);
				});
			}, 300);
		}
	}
	function u() {
		if (XN() && ZN !== null && !o.value) {
			let e = -Number.parseInt(document.body.style.top, 10), t = -Number.parseInt(document.body.style.left, 10);
			Object.assign(document.body.style, ZN), window.requestAnimationFrame(() => {
				if (a.value && s.value !== window.location.href) {
					s.value = window.location.href;
					return;
				}
				window.scrollTo(t, e);
			}), ZN = null;
		}
	}
	return I(() => {
		function e() {
			c.value = window.scrollY;
		}
		e(), window.addEventListener("scroll", e), Yi(() => {
			window.removeEventListener("scroll", e);
		});
	}), P([
		t,
		i,
		s
	], () => {
		r.value || !i.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || l(), n.value || setTimeout(() => {
			u();
		}, 500)) : u());
	}), { restorePositionSetting: u };
}
function $N(e, t) {
	return e && e.value ? e : t;
}
function eP(e) {
	let { emitDrag: t, emitRelease: n, emitClose: r, emitOpenChange: i, open: a, dismissible: o, nested: s, modal: c, shouldScaleBackground: l, setBackgroundColorOnScale: u, scrollLockTimeout: d, closeThreshold: f, activeSnapPoint: p, fadeFromIndex: m, direction: h, noBodyStyles: g, handleOnly: _, preventScrollRestoration: v } = e, y = /* @__PURE__ */ j(a.value ?? !1), b = /* @__PURE__ */ j(!1), x = /* @__PURE__ */ j(!1), S = /* @__PURE__ */ j(!1), C = /* @__PURE__ */ j(null), w = /* @__PURE__ */ j(null), T = /* @__PURE__ */ j(null), ee = /* @__PURE__ */ j(null), E = /* @__PURE__ */ j(null), te = /* @__PURE__ */ j(!1), ne = /* @__PURE__ */ j(null), re = /* @__PURE__ */ j(0), D = /* @__PURE__ */ j(!1), ie = /* @__PURE__ */ j(null), ae = q(() => ie.value?.$el.getBoundingClientRect().height || 0), oe = $N(e.snapPoints, /* @__PURE__ */ j(void 0)), se = q(() => oe && (oe.value?.length ?? 0) > 0), O = /* @__PURE__ */ j(null), { activeSnapPointIndex: ce, onRelease: le, snapPointsOffset: ue, onDrag: de, shouldFade: fe, getPercentageDragged: pe } = YN({
		snapPoints: oe,
		activeSnapPoint: p,
		drawerRef: ie,
		fadeFromIndex: m,
		overlayRef: C,
		onSnapPointChange: me,
		direction: h
	});
	function me(e, t) {
		oe.value && e === t.length - 1 && (w.value = /* @__PURE__ */ new Date());
	}
	QN({
		isOpen: y,
		modal: c,
		nested: s,
		hasBeenOpened: b,
		noBodyStyles: g,
		preventScrollRestoration: v
	});
	function he() {
		return (window.innerWidth - qN) / window.innerWidth;
	}
	function ge(e, t) {
		if (!e) return !1;
		let n = e, r = window.getSelection()?.toString(), i = ie.value ? LN(ie.value.$el, h.value) : null, a = /* @__PURE__ */ new Date();
		if (n.hasAttribute("data-vaul-no-drag") || n.closest("[data-vaul-no-drag]")) return !1;
		if (h.value === "right" || h.value === "left") return !0;
		if (w.value && a.getTime() - w.value.getTime() < 500) return !1;
		if (i !== null && (h.value === "bottom" ? i > 0 : i < 0)) return !0;
		if (r && r.length > 0) return !1;
		if (E.value && a.getTime() - E.value.getTime() < d.value && i === 0 || t) return E.value = a, !1;
		for (; n;) {
			if (n.scrollHeight > n.clientHeight) {
				if (n.scrollTop !== 0) return E.value = /* @__PURE__ */ new Date(), !1;
				if (n.getAttribute("role") === "dialog") return !0;
			}
			n = n.parentNode;
		}
		return !0;
	}
	function _e(e) {
		!o.value && !oe.value || ie.value && !ie.value.$el.contains(e.target) || (x.value = !0, T.value = /* @__PURE__ */ new Date(), e.target.setPointerCapture(e.pointerId), re.value = zN(h.value) ? e.clientY : e.clientX);
	}
	function ve(e) {
		var n;
		if (ie.value && x.value) {
			let r = h.value === "bottom" || h.value === "right" ? 1 : -1, i = (re.value - (zN(h.value) ? e.clientY : e.clientX)) * r, a = i > 0, s = oe.value && !o.value && !a;
			if (s && ce.value === 0) return;
			let c = Math.abs(i), u = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), d = c / ae.value, f = pe(c, a);
			if (f !== null && (d = f), s && d >= 1 || !te.value && !ge(e.target, a)) return;
			if ((n = ie?.value) == null || n.$el.classList.add(JN), te.value = !0, FN(ie.value?.$el, { transition: "none" }), FN(C.value?.$el, { transition: "none" }), oe.value && de({ draggedDistance: i }), a && !oe.value) {
				let e = RN(i), t = Math.min(e * -1, 0) * r;
				FN(ie.value?.$el, { transform: zN(h.value) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)` });
				return;
			}
			let p = 1 - d;
			if ((fe.value || m.value && ce.value === m.value - 1) && (t(d), FN(C.value?.$el, {
				opacity: `${p}`,
				transition: "none"
			}, !0)), u && C.value && l.value) {
				let e = Math.min(he() + d * (1 - he()), 1), t = 8 - d * 8, n = Math.max(0, 14 - d * 14);
				FN(u, {
					borderRadius: `${t}px`,
					transform: zN(h.value) ? `scale(${e}) translate3d(0, ${n}px, 0)` : `scale(${e}) translate3d(${n}px, 0, 0)`,
					transition: "none"
				}, !0);
			}
			if (!oe.value) {
				let e = c * r;
				FN(ie.value?.$el, { transform: zN(h.value) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)` });
			}
		}
	}
	function ye() {
		if (!ie.value) return;
		let e = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), t = LN(ie.value.$el, h.value);
		FN(ie.value.$el, {
			transform: "translate3d(0, 0, 0)",
			transition: `transform ${VN.DURATION}s cubic-bezier(${VN.EASE.join(",")})`
		}), FN(C.value?.$el, {
			transition: `opacity ${VN.DURATION}s cubic-bezier(${VN.EASE.join(",")})`,
			opacity: "1"
		}), l.value && t && t > 0 && y.value && FN(e, {
			borderRadius: `${GN}px`,
			overflow: "hidden",
			...zN(h.value) ? {
				transform: `scale(${he()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
				transformOrigin: "top"
			} : {
				transform: `scale(${he()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
				transformOrigin: "left"
			},
			transitionProperty: "transform, border-radius",
			transitionDuration: `${VN.DURATION}s`,
			transitionTimingFunction: `cubic-bezier(${VN.EASE.join(",")})`
		}, !0);
	}
	function k(e) {
		ie.value && (r(), e || (y.value = !1), window.setTimeout(() => {
			oe.value && (p.value = oe.value[0]);
		}, VN.DURATION * 1e3));
	}
	Tr(() => {
		if (!y.value && l.value && ON) {
			let e = setTimeout(() => {
				IN(document.body);
			}, 200);
			return () => clearTimeout(e);
		}
	}), P(a, () => {
		y.value = a.value, a.value || k();
	});
	function A(e) {
		if (!x.value || !ie.value) return;
		ie.value.$el.classList.remove(JN), te.value = !1, x.value = !1, ee.value = /* @__PURE__ */ new Date();
		let t = LN(ie.value.$el, h.value);
		if (!ge(e.target, !1) || !t || Number.isNaN(t) || T.value === null) return;
		let r = ee.value.getTime() - T.value.getTime(), i = re.value - (zN(h.value) ? e.clientY : e.clientX), a = Math.abs(i) / r;
		if (a > .05 && (S.value = !0, window.setTimeout(() => {
			S.value = !1;
		}, 200)), oe.value) {
			le({
				draggedDistance: i * (h.value === "bottom" || h.value === "right" ? 1 : -1),
				closeDrawer: k,
				velocity: a,
				dismissible: o.value
			}), n(!0);
			return;
		}
		if (h.value === "bottom" || h.value === "right" ? i > 0 : i < 0) {
			ye(), n(!0);
			return;
		}
		if (a > HN) {
			k(), n(!1);
			return;
		}
		if (t >= Math.min(ie.value.$el.getBoundingClientRect().height ?? 0, window.innerHeight) * f.value) {
			k(), n(!1);
			return;
		}
		n(!0), ye();
	}
	P(y, (e) => {
		e && (w.value = /* @__PURE__ */ new Date()), i(e);
	}, { immediate: !0 });
	function be(e) {
		var t;
		let n = e ? (window.innerWidth - KN) / window.innerWidth : 1, r = e ? -16 : 0;
		ne.value && window.clearTimeout(ne.value), FN(ie.value?.$el, {
			transition: `transform ${VN.DURATION}s cubic-bezier(${VN.EASE.join(",")})`,
			transform: `scale(${n}) translate3d(0, ${r}px, 0)`
		}), !e && (t = ie.value) != null && t.$el && (ne.value = window.setTimeout(() => {
			let e = LN(ie.value?.$el, h.value);
			FN(ie.value?.$el, {
				transition: "none",
				transform: zN(h.value) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
			});
		}, 500));
	}
	function xe(e) {
		if (e < 0) return;
		let t = zN(h.value) ? window.innerHeight : window.innerWidth, n = (t - KN) / t, r = n + e * (1 - n), i = -16 + e * KN;
		FN(ie.value?.$el, {
			transform: zN(h.value) ? `scale(${r}) translate3d(0, ${i}px, 0)` : `scale(${r}) translate3d(${i}px, 0, 0)`,
			transition: "none"
		});
	}
	function Se(e) {
		let t = zN(h.value) ? window.innerHeight : window.innerWidth, n = e ? (t - KN) / t : 1, r = e ? -16 : 0;
		e && FN(ie.value?.$el, {
			transition: `transform ${VN.DURATION}s cubic-bezier(${VN.EASE.join(",")})`,
			transform: zN(h.value) ? `scale(${n}) translate3d(0, ${r}px, 0)` : `scale(${n}) translate3d(${r}px, 0, 0)`
		});
	}
	return {
		open: a,
		isOpen: y,
		modal: c,
		keyboardIsOpen: D,
		hasBeenOpened: b,
		drawerRef: ie,
		drawerHeightRef: ae,
		overlayRef: C,
		handleRef: O,
		isDragging: x,
		dragStartTime: T,
		isAllowedToDrag: te,
		snapPoints: oe,
		activeSnapPoint: p,
		hasSnapPoints: se,
		pointerStart: re,
		dismissible: o,
		snapPointsOffset: ue,
		direction: h,
		shouldFade: fe,
		fadeFromIndex: m,
		shouldScaleBackground: l,
		setBackgroundColorOnScale: u,
		onPress: _e,
		onDrag: ve,
		onRelease: A,
		closeDrawer: k,
		onNestedDrag: xe,
		onNestedRelease: Se,
		onNestedOpenChange: be,
		emitClose: r,
		emitDrag: t,
		emitRelease: n,
		emitOpenChange: i,
		nested: s,
		handleOnly: _,
		noBodyStyles: g
	};
}
var tP = /* @__PURE__ */ F({
	__name: "DrawerRoot",
	props: {
		activeSnapPoint: { default: void 0 },
		closeThreshold: { default: UN },
		shouldScaleBackground: {
			type: Boolean,
			default: void 0
		},
		setBackgroundColorOnScale: {
			type: Boolean,
			default: !0
		},
		scrollLockTimeout: { default: WN },
		fixed: {
			type: Boolean,
			default: void 0
		},
		dismissible: {
			type: Boolean,
			default: !0
		},
		modal: {
			type: Boolean,
			default: !0
		},
		open: {
			type: Boolean,
			default: void 0
		},
		defaultOpen: {
			type: Boolean,
			default: void 0
		},
		nested: {
			type: Boolean,
			default: !1
		},
		direction: { default: "bottom" },
		noBodyStyles: { type: Boolean },
		handleOnly: {
			type: Boolean,
			default: !1
		},
		preventScrollRestoration: { type: Boolean },
		snapPoints: { default: void 0 },
		fadeFromIndex: { default: void 0 }
	},
	emits: [
		"drag",
		"release",
		"close",
		"update:open",
		"update:activeSnapPoint",
		"animationEnd"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n;
		wa();
		let a = q(() => r.fadeFromIndex ?? (r.snapPoints && r.snapPoints.length - 1)), o = jN(r, "open", i, {
			defaultValue: r.defaultOpen,
			passive: r.open === void 0
		}), s = jN(r, "activeSnapPoint", i, { passive: r.activeSnapPoint === void 0 }), c = {
			emitDrag: (e) => i("drag", e),
			emitRelease: (e) => i("release", e),
			emitClose: () => i("close"),
			emitOpenChange: (e) => {
				i("update:open", e), setTimeout(() => {
					i("animationEnd", e);
				}, VN.DURATION * 1e3);
			}
		}, { closeDrawer: l, hasBeenOpened: u, modal: d, isOpen: f } = NN(eP({
			...c,
			.../* @__PURE__ */ xn(r),
			activeSnapPoint: s,
			fadeFromIndex: a,
			open: o
		}));
		function p(e) {
			if (o.value !== void 0) {
				c.emitOpenChange(e);
				return;
			}
			f.value = e, e ? u.value = !0 : l();
		}
		return t({ open: f }), (e, t) => (z(), V(M(q_), {
			open: M(f),
			modal: M(d),
			"onUpdate:open": p
		}, {
			default: N(() => [L(e.$slots, "default", { open: M(f) })]),
			_: 3
		}, 8, ["open", "modal"]));
	}
}), nP = /* @__PURE__ */ F({
	__name: "DrawerOverlay",
	setup(e) {
		let { overlayRef: t, hasSnapPoints: n, isOpen: r, shouldFade: i } = MN();
		return (e, a) => (z(), V(M(Mv), {
			ref_key: "overlayRef",
			ref: t,
			"data-vaul-overlay": "",
			"data-vaul-snap-points": M(r) && M(n) ? "true" : "false",
			"data-vaul-snap-points-overlay": M(r) && M(i) ? "true" : "false"
		}, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
	}
});
function rP() {
	let { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: i } = MN(), a = /* @__PURE__ */ j(null), o = /* @__PURE__ */ j(document.body.style.backgroundColor);
	function s() {
		return (window.innerWidth - qN) / window.innerWidth;
	}
	Tr((c) => {
		if (t.value && n.value) {
			a.value && clearTimeout(a.value);
			let t = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
			if (!t) return;
			r.value && !i.value && BN(document.body, { background: "black" }), BN(t, {
				transformOrigin: zN(e.value) ? "top" : "left",
				transitionProperty: "transform, border-radius",
				transitionDuration: `${VN.DURATION}s`,
				transitionTimingFunction: `cubic-bezier(${VN.EASE.join(",")})`
			});
			let n = BN(t, {
				borderRadius: `${GN}px`,
				overflow: "hidden",
				...zN(e.value) ? { transform: `scale(${s()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` } : { transform: `scale(${s()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` }
			});
			c(() => {
				n(), a.value = window.setTimeout(() => {
					o.value ? document.body.style.background = o.value : document.body.style.removeProperty("background");
				}, VN.DURATION * 1e3);
			});
		}
	}, { flush: "pre" });
}
var iP = /* @__PURE__ */ F({
	__name: "DrawerContent",
	setup(e) {
		let { open: t, isOpen: n, snapPointsOffset: r, hasSnapPoints: i, drawerRef: a, onPress: o, onDrag: s, onRelease: c, modal: l, emitOpenChange: u, dismissible: d, keyboardIsOpen: f, closeDrawer: p, direction: m, handleOnly: h } = MN();
		rP();
		let g = /* @__PURE__ */ j(!1), _ = q(() => r.value && r.value.length > 0 ? `${r.value[0]}px` : "0");
		function v(e) {
			if (!l.value || e.defaultPrevented) {
				e.preventDefault();
				return;
			}
			f.value &&= !1, d.value ? u(!1) : e.preventDefault();
		}
		function y(e) {
			h.value || o(e);
		}
		function b(e) {
			h.value || s(e);
		}
		return Tr(() => {
			i.value && window.requestAnimationFrame(() => {
				g.value = !0;
			});
		}), (e, t) => (z(), V(M(kv), {
			ref_key: "drawerRef",
			ref: a,
			"data-vaul-drawer": "",
			"data-vaul-drawer-direction": M(m),
			"data-vaul-delayed-snap-points": g.value ? "true" : "false",
			"data-vaul-snap-points": M(n) && M(i) ? "true" : "false",
			style: he({ "--snap-point-height": _.value }),
			onPointerdown: y,
			onPointermove: b,
			onPointerup: M(c),
			onPointerDownOutside: v,
			onOpenAutoFocus: t[0] ||= Xl(() => {}, ["prevent"]),
			onEscapeKeyDown: t[1] ||= (e) => {
				M(d) || e.preventDefault();
			}
		}, {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 8, [
			"data-vaul-drawer-direction",
			"data-vaul-delayed-snap-points",
			"data-vaul-snap-points",
			"style",
			"onPointerup"
		]));
	}
}), aP = /* @__PURE__ */ F({
	__name: "Drawer",
	props: {
		activeSnapPoint: {},
		closeThreshold: {},
		shouldScaleBackground: {
			type: Boolean,
			default: !0
		},
		setBackgroundColorOnScale: { type: Boolean },
		scrollLockTimeout: {},
		fixed: { type: Boolean },
		dismissible: { type: Boolean },
		modal: { type: Boolean },
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		nested: { type: Boolean },
		direction: {},
		noBodyStyles: { type: Boolean },
		handleOnly: { type: Boolean },
		preventScrollRestoration: { type: Boolean },
		snapPoints: {},
		fadeFromIndex: {}
	},
	emits: [
		"drag",
		"release",
		"close",
		"update:open",
		"update:activeSnapPoint",
		"animationEnd"
	],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		return (e, t) => (z(), V(M(tP), K({ "data-slot": "drawer" }, M(n)), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16));
	}
}), oP = /* @__PURE__ */ F({
	__name: "DrawerOverlay",
	props: {
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(nP), K({ "data-slot": "drawer-overlay" }, M(n), { class: M($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50", t.class) }), null, 16, ["class"]));
	}
}), sP = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "DrawerContent",
	props: {
		forceMount: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = qg(n, t);
		return (e, t) => (z(), V(M(Pv), null, {
			default: N(() => [U(oP), U(M(iP), K({ "data-slot": "drawer-content" }, {
				...e.$attrs,
				...M(r)
			}, { class: M($)("bg-popover text-popover-foreground flex h-auto flex-col text-sm data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-xl data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-xl data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-xl data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-xl data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=right]:sm:max-w-sm group/drawer-content fixed z-50", n.class) }), {
				default: N(() => [t[0] ||= H("div", { class: "bg-muted mt-4 h-1 w-[100px] rounded-full mx-auto hidden shrink-0 group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1), L(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), cP = /* @__PURE__ */ F({
	__name: "DrawerDescription",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(Av), K({ "data-slot": "drawer-description" }, M(n), { class: M($)("text-muted-foreground text-sm", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), lP = /* @__PURE__ */ F({
	__name: "DrawerFooter",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "drawer-footer",
			class: k(M($)("gap-2 p-4 mt-auto flex flex-col", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), uP = /* @__PURE__ */ F({
	__name: "DrawerHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "drawer-header",
			class: k(M($)("gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-0.5 md:text-left flex flex-col", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), dP = /* @__PURE__ */ F({
	__name: "DrawerTitle",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(Fv), K({ "data-slot": "drawer-title" }, M(n), { class: M($)("text-foreground text-base font-medium cn-font-heading", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), fP = /* @__PURE__ */ F({
	__name: "DrawerTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(Iv), K({ "data-slot": "drawer-trigger" }, t), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), pP = ["innerHTML"], mP = ["innerHTML"], hP = /* @__PURE__ */ F({
	__name: "Drawer.ce",
	setup(e) {
		let t = vl()?._light.slots ?? {};
		return (e, n) => (z(), V(M(aP), null, {
			default: N(() => [U(M(fP), { "as-child": "" }, {
				default: N(() => [H("button", {
					type: "button",
					innerHTML: M(t).trigger || "Abrir"
				}, null, 8, pP)]),
				_: 1
			}), U(M(sP), null, {
				default: N(() => [
					U(M(uP), null, {
						default: N(() => [M(t).title ? (z(), V(M(dP), {
							key: 0,
							innerHTML: M(t).title
						}, null, 8, ["innerHTML"])) : G("", !0), M(t).description ? (z(), V(M(cP), {
							key: 1,
							innerHTML: M(t).description
						}, null, 8, ["innerHTML"])) : G("", !0)]),
						_: 1
					}),
					M(t).content ? (z(), B("div", {
						key: 0,
						innerHTML: M(t).content
					}, null, 8, mP)) : G("", !0),
					M(t).footer ? (z(), V(M(lP), {
						key: 1,
						innerHTML: M(t).footer
					}, null, 8, ["innerHTML"])) : G("", !0)
				]),
				_: 1
			})]),
			_: 1
		}));
	}
}), gP = /* @__PURE__ */ F({
	__name: "Sheet",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		return (e, t) => (z(), V(M(q_), K({ "data-slot": "sheet" }, M(n)), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16));
	}
}), _P = /* @__PURE__ */ F({
	__name: "SheetOverlay",
	props: {
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(Mv), K({
			"data-slot": "sheet-overlay",
			class: M($)("bg-black/10 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50 duration-100 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", t.class)
		}, M(n)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), vP = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "SheetContent",
	props: {
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		side: { default: "right" },
		showCloseButton: {
			type: Boolean,
			default: !0
		},
		forceMount: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class", "side", "showCloseButton"), r);
		return (t, r) => (z(), V(M(Pv), null, {
			default: N(() => [U(_P), U(M(kv), K({
				"data-slot": "sheet-content",
				"data-side": e.side,
				class: M($)("bg-popover text-popover-foreground fixed z-50 flex flex-col gap-4 bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", n.class)
			}, {
				...t.$attrs,
				...M(i)
			}), {
				default: N(() => [L(t.$slots, "default"), e.showCloseButton ? (z(), V(M(J_), {
					key: 0,
					"data-slot": "sheet-close",
					"as-child": ""
				}, {
					default: N(() => [U(M(qj), {
						variant: "ghost",
						class: "absolute top-3 right-3",
						size: "icon-sm"
					}, {
						default: N(() => [U(M(Qf)), r[0] ||= H("span", { class: "sr-only" }, "Close", -1)]),
						_: 1
					})]),
					_: 1
				})) : G("", !0)]),
				_: 3
			}, 16, ["data-side", "class"])]),
			_: 3
		}));
	}
}), yP = /* @__PURE__ */ F({
	__name: "SheetDescription",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(Av), K({
			"data-slot": "sheet-description",
			class: M($)("text-muted-foreground text-sm", t.class)
		}, M(n)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), bP = /* @__PURE__ */ F({
	__name: "SheetFooter",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "sheet-footer",
			class: k(M($)("gap-2 p-4 mt-auto flex flex-col", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), xP = /* @__PURE__ */ F({
	__name: "SheetHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "sheet-header",
			class: k(M($)("gap-0.5 p-4 flex flex-col", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), SP = /* @__PURE__ */ F({
	__name: "SheetTitle",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(Fv), K({
			"data-slot": "sheet-title",
			class: M($)("text-foreground text-base font-medium cn-font-heading", t.class)
		}, M(n)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), CP = /* @__PURE__ */ F({
	__name: "SheetTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(Iv), K({ "data-slot": "sheet-trigger" }, t), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), wP = ["innerHTML"], TP = ["innerHTML"], EP = /* @__PURE__ */ F({
	__name: "Sheet.ce",
	setup(e) {
		let t = vl(), n = t?._light.slots ?? {}, r = t?.getAttribute("side") ?? "right";
		return (e, t) => (z(), V(M(gP), null, {
			default: N(() => [U(M(CP), { "as-child": "" }, {
				default: N(() => [H("button", {
					type: "button",
					innerHTML: M(n).trigger || "Abrir"
				}, null, 8, wP)]),
				_: 1
			}), U(M(vP), { side: M(r) }, {
				default: N(() => [
					U(M(xP), null, {
						default: N(() => [M(n).title ? (z(), V(M(SP), {
							key: 0,
							innerHTML: M(n).title
						}, null, 8, ["innerHTML"])) : G("", !0), M(n).description ? (z(), V(M(yP), {
							key: 1,
							innerHTML: M(n).description
						}, null, 8, ["innerHTML"])) : G("", !0)]),
						_: 1
					}),
					M(n).content ? (z(), B("div", {
						key: 0,
						innerHTML: M(n).content
					}, null, 8, TP)) : G("", !0),
					M(n).footer ? (z(), V(M(bP), {
						key: 1,
						innerHTML: M(n).footer
					}, null, 8, ["innerHTML"])) : G("", !0)
				]),
				_: 1
			}, 8, ["side"])]),
			_: 1
		}));
	}
}), DP = /* @__PURE__ */ F({
	__name: "Popover",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		return (e, t) => (z(), V(M(DC), K({ "data-slot": "popover" }, M(n)), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16));
	}
}), OP = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "PopoverContent",
	props: {
		forceMount: { type: Boolean },
		side: {},
		sideOffset: { default: 4 },
		sideFlip: { type: Boolean },
		align: { default: "center" },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		disableOutsidePointerEvents: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(MC), null, {
			default: N(() => [U(M(jC), K({ "data-slot": "popover-content" }, {
				...e.$attrs,
				...M(i)
			}, { class: M($)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 flex flex-col gap-2.5 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 w-72 origin-(--reka-popover-content-transform-origin) outline-hidden", n.class) }), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), kP = /* @__PURE__ */ F({
	__name: "PopoverTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(NC), K({ "data-slot": "popover-trigger" }, t), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), AP = ["innerHTML"], jP = ["innerHTML"], MP = /* @__PURE__ */ F({
	__name: "Popover.ce",
	setup(e) {
		let t = vl()?._light, n = t?.slots ?? {};
		return (e, r) => (z(), V(M(DP), null, {
			default: N(() => [U(M(kP), { "as-child": "" }, {
				default: N(() => [H("button", {
					type: "button",
					innerHTML: M(n).trigger || "Abrir"
				}, null, 8, AP)]),
				_: 1
			}), U(M(OP), null, {
				default: N(() => [H("div", { innerHTML: M(n).content ?? M(t)?.defaultHtml ?? "" }, null, 8, jP)]),
				_: 1
			})]),
			_: 1
		}));
	}
}), NP = /* @__PURE__ */ F({
	__name: "HoverCard",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		openDelay: {},
		closeDelay: {}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		return (e, t) => (z(), V(M(UC), K({ "data-slot": "hover-card" }, M(n)), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16));
	}
}), PP = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "HoverCardContent",
	props: {
		forceMount: { type: Boolean },
		side: {},
		sideOffset: { default: 4 },
		sideFlip: { type: Boolean },
		align: { default: "center" },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(JC), null, {
			default: N(() => [U(M(qC), K({ "data-slot": "hover-card-content" }, {
				...e.$attrs,
				...M(n)
			}, { class: M($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground w-64 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 origin-(--reka-hover-card-content-transform-origin) outline-hidden", t.class) }), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), FP = /* @__PURE__ */ F({
	__name: "HoverCardTrigger",
	props: {
		reference: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(YC), K({ "data-slot": "hover-card-trigger" }, t), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), IP = ["innerHTML"], LP = ["innerHTML"], RP = /* @__PURE__ */ F({
	__name: "HoverCard.ce",
	setup(e) {
		let t = vl()?._light, n = t?.slots ?? {};
		return (e, r) => (z(), V(M(NP), null, {
			default: N(() => [U(M(FP), { "as-child": "" }, {
				default: N(() => [H("button", {
					type: "button",
					innerHTML: M(n).trigger || "Abrir"
				}, null, 8, IP)]),
				_: 1
			}), U(M(PP), null, {
				default: N(() => [H("div", { innerHTML: M(n).content ?? M(t)?.defaultHtml ?? "" }, null, 8, LP)]),
				_: 1
			})]),
			_: 1
		}));
	}
}), zP = /* @__PURE__ */ F({
	__name: "Tooltip",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		delayDuration: {},
		disableHoverableContent: { type: Boolean },
		disableClosingTrigger: { type: Boolean },
		disabled: { type: Boolean },
		ignoreNonKeyboardFocus: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		return (e, t) => (z(), V(M(ak), K({ "data-slot": "tooltip" }, M(n)), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16));
	}
}), BP = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "TooltipContent",
	props: {
		forceMount: { type: Boolean },
		ariaLabel: {},
		asChild: { type: Boolean },
		as: {},
		side: {},
		sideOffset: { default: 0 },
		align: {},
		alignOffset: {},
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["escapeKeyDown", "pointerDownOutside"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(lk), null, {
			default: N(() => [U(M(ck), K({ "data-slot": "tooltip-content" }, {
				...M(i),
				...e.$attrs
			}, { class: M($)("data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm bg-foreground text-background z-50 w-fit max-w-xs origin-(--reka-tooltip-content-transform-origin)", n.class) }), {
				default: N(() => [L(e.$slots, "default"), U(M(QO), { class: "size-2.5 rotate-45 rounded-[2px] bg-foreground fill-foreground z-50 translate-y-[calc(-50%_-_2px)]" })]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), VP = /* @__PURE__ */ F({
	__name: "TooltipProvider",
	props: {
		delayDuration: { default: 0 },
		skipDelayDuration: {},
		disableHoverableContent: { type: Boolean },
		disableClosingTrigger: { type: Boolean },
		disabled: { type: Boolean },
		ignoreNonKeyboardFocus: { type: Boolean },
		content: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(tk), A(W(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), HP = /* @__PURE__ */ F({
	__name: "TooltipTrigger",
	props: {
		reference: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(uk), K({ "data-slot": "tooltip-trigger" }, t), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), UP = ["innerHTML"], WP = ["innerHTML"], GP = /* @__PURE__ */ F({
	__name: "Tooltip.ce",
	setup(e) {
		let t = vl()?._light, n = t?.slots ?? {};
		return (e, r) => (z(), V(M(VP), null, {
			default: N(() => [U(M(zP), null, {
				default: N(() => [U(M(HP), { "as-child": "" }, {
					default: N(() => [H("button", {
						type: "button",
						innerHTML: M(n).trigger || "Hover"
					}, null, 8, UP)]),
					_: 1
				}), U(M(BP), null, {
					default: N(() => [H("div", { innerHTML: M(n).content ?? M(t)?.defaultHtml ?? "" }, null, 8, WP)]),
					_: 1
				})]),
				_: 1
			})]),
			_: 1
		}));
	}
}), KP = /* @__PURE__ */ F({
	__name: "DropdownMenu",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		dir: {},
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		return (e, t) => (z(), V(M(IC), K({ "data-slot": "dropdown-menu" }, M(n)), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16));
	}
}), qP = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "DropdownMenuContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		side: {},
		sideOffset: { default: 4 },
		sideFlip: { type: Boolean },
		align: { default: "start" },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(zC), null, {
			default: N(() => [U(M(LC), K({ "data-slot": "dropdown-menu-content" }, {
				...e.$attrs,
				...M(i)
			}, { class: M($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-32 rounded-lg p-1 shadow-md ring-1 duration-100 cn-menu-translucent z-50 max-h-(--reka-dropdown-menu-content-available-height) w-(--reka-dropdown-menu-trigger-width) origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto data-[state=closed]:overflow-hidden", n.class) }), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), JP = /* @__PURE__ */ F({
	__name: "DropdownMenuItem",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		inset: { type: Boolean },
		variant: { default: "default" }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "inset", "variant", "class"));
		return (r, i) => (z(), V(M(RC), K({
			"data-slot": "dropdown-menu-item",
			"data-inset": e.inset ? "" : void 0,
			"data-variant": e.variant
		}, M(n), { class: M($)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: N(() => [L(r.$slots, "default")]),
			_: 3
		}, 16, [
			"data-inset",
			"data-variant",
			"class"
		]));
	}
}), YP = /* @__PURE__ */ F({
	__name: "DropdownMenuTrigger",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = Kg(e);
		return (e, n) => (z(), V(M(BC), K({ "data-slot": "dropdown-menu-trigger" }, M(t)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), XP = ["innerHTML"], ZP = /* @__PURE__ */ F({
	__name: "DropdownMenu.ce",
	setup(e) {
		let t = vl(), n = t?._light.slots ?? {}, r = t?._light.options ?? [];
		function i(e) {
			t?.dispatchEvent(new CustomEvent("select", {
				bubbles: !0,
				composed: !0,
				detail: { value: e }
			}));
		}
		return (e, t) => (z(), V(M(KP), null, {
			default: N(() => [U(M(YP), { "as-child": "" }, {
				default: N(() => [H("button", {
					type: "button",
					innerHTML: M(n).trigger || "Abrir"
				}, null, 8, XP)]),
				_: 1
			}), U(M(qP), null, {
				default: N(() => [(z(!0), B(R, null, ca(M(r), (e) => (z(), V(M(JP), {
					key: e.value,
					disabled: e.disabled,
					onClick: (t) => i(e.value)
				}, {
					default: N(() => [_s(De(e.label), 1)]),
					_: 2
				}, 1032, ["disabled", "onClick"]))), 128))]),
				_: 1
			})]),
			_: 1
		}));
	}
}), QP = /* @__PURE__ */ F({
	__name: "ContextMenu",
	props: {
		pressOpenDelay: {},
		dir: {},
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		return (e, t) => (z(), V(M(yC), K({ "data-slot": "context-menu" }, M(n)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), $P = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "ContextMenuContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		sideFlip: { type: Boolean },
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(SC), null, {
			default: N(() => [U(M(bC), K({ "data-slot": "context-menu-content" }, {
				...e.$attrs,
				...M(i)
			}, { class: M($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-36 rounded-lg p-1 shadow-md ring-1 duration-100 cn-menu-translucent z-50 max-h-(--reka-context-menu-content-available-height) origin-(--reka-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto", n.class) }), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), eF = /* @__PURE__ */ F({
	__name: "ContextMenuItem",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		inset: { type: Boolean },
		variant: { default: "default" }
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (t, r) => (z(), V(M(xC), K({
			"data-slot": "context-menu-item",
			"data-inset": e.inset ? "" : void 0,
			"data-variant": e.variant
		}, M(i), { class: M($)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive focus:*:[svg]:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 group/context-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class) }), {
			default: N(() => [L(t.$slots, "default")]),
			_: 3
		}, 16, [
			"data-inset",
			"data-variant",
			"class"
		]));
	}
}), tF = /* @__PURE__ */ F({
	__name: "ContextMenuTrigger",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(wC), K({ "data-slot": "context-menu-trigger" }, M(n), { class: M($)("select-none", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), nF = ["innerHTML"], rF = /* @__PURE__ */ F({
	__name: "ContextMenu.ce",
	setup(e) {
		let t = vl(), n = t?._light.slots ?? {}, r = t?._light.options ?? [];
		function i(e) {
			t?.dispatchEvent(new CustomEvent("select", {
				bubbles: !0,
				composed: !0,
				detail: { value: e }
			}));
		}
		return (e, t) => (z(), V(M(QP), null, {
			default: N(() => [U(M(tF), { "as-child": "" }, {
				default: N(() => [H("div", { innerHTML: M(n).trigger || "Clique com o botão direito" }, null, 8, nF)]),
				_: 1
			}), U(M($P), null, {
				default: N(() => [(z(!0), B(R, null, ca(M(r), (e) => (z(), V(M(eF), {
					key: e.value,
					disabled: e.disabled,
					onClick: (t) => i(e.value)
				}, {
					default: N(() => [_s(De(e.label), 1)]),
					_: 2
				}, 1032, ["disabled", "onClick"]))), 128))]),
				_: 1
			})]),
			_: 1
		}));
	}
}), iF = /* @__PURE__ */ F({
	__name: "Menubar",
	props: {
		modelValue: {},
		defaultValue: {},
		dir: {},
		loop: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M($C), K({ "data-slot": "menubar" }, M(i), { class: M($)("h-8 gap-0.5 rounded-lg border p-[3px] flex items-center", n.class) }), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), aF = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "MenubarContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		side: {},
		sideOffset: { default: 8 },
		sideFlip: { type: Boolean },
		align: { default: "start" },
		alignOffset: { default: -4 },
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		hideShiftedArrow: { type: Boolean },
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(aw), null, {
			default: N(() => [U(M(rw), K({ "data-slot": "menubar-content" }, {
				...e.$attrs,
				...M(n)
			}, { class: M($)("bg-popover text-popover-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-lg p-1 shadow-md ring-1 duration-100 cn-menu-translucent z-50 origin-(--reka-menubar-content-transform-origin) overflow-hidden", t.class) }), {
				default: N(() => [L(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), oF = /* @__PURE__ */ F({
	__name: "MenubarItem",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		inset: { type: Boolean },
		variant: {}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class", "inset", "variant"), r);
		return (t, r) => (z(), V(M(iw), K({
			"data-slot": "menubar-item",
			"data-inset": e.inset ? "" : void 0,
			"data-variant": e.variant
		}, M(i), { class: M($)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive! not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-disabled:opacity-50 data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 group/menubar-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class) }), {
			default: N(() => [L(t.$slots, "default")]),
			_: 3
		}, 16, [
			"data-inset",
			"data-variant",
			"class"
		]));
	}
}), sF = /* @__PURE__ */ F({
	__name: "MenubarMenu",
	props: { value: {} },
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(nw), K({ "data-slot": "menubar-menu" }, t), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), cF = /* @__PURE__ */ F({
	__name: "MenubarTrigger",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(ow), K({ "data-slot": "menubar-trigger" }, M(n), { class: M($)("hover:bg-muted aria-expanded:bg-muted rounded-sm px-1.5 py-[2px] text-sm font-medium flex items-center outline-hidden select-none", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), lF = /* @__PURE__ */ F({
	__name: "Menubar.ce",
	setup(e) {
		let t = vl(), n = t?._light.sections ?? [];
		function r(e) {
			return [...new DOMParser().parseFromString(`<div>${e}</div>`, "text/html").querySelectorAll("option")].map((e) => ({
				value: e.getAttribute("value") ?? e.textContent?.trim() ?? "",
				label: e.textContent?.trim() ?? "",
				disabled: e.hasAttribute("disabled")
			}));
		}
		function i(e) {
			t?.dispatchEvent(new CustomEvent("select", {
				bubbles: !0,
				composed: !0,
				detail: { value: e }
			}));
		}
		return (e, t) => (z(), V(M(iF), null, {
			default: N(() => [(z(!0), B(R, null, ca(M(n), (e) => (z(), V(M(sF), { key: e.value }, {
				default: N(() => [U(M(cF), null, {
					default: N(() => [_s(De(e.title), 1)]),
					_: 2
				}, 1024), U(M(aF), null, {
					default: N(() => [(z(!0), B(R, null, ca(r(e.html), (e) => (z(), V(M(oF), {
						key: e.value,
						disabled: e.disabled,
						onClick: (t) => i(e.value)
					}, {
						default: N(() => [_s(De(e.label), 1)]),
						_: 2
					}, 1032, ["disabled", "onClick"]))), 128))]),
					_: 2
				}, 1024)]),
				_: 2
			}, 1024))), 128))]),
			_: 1
		}));
	}
}), uF = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, dF = /* @__PURE__ */ F({
	__name: "NavigationMenuViewport",
	props: {
		forceMount: { type: Boolean },
		align: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), B("div", uF, [U(M(Ow), K({ "data-slot": "navigation-menu-viewport" }, M(n), { class: M($)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:zoom-out-90 data-open:zoom-in-90 ring-foreground/10 rounded-lg shadow ring-1 duration-100 origin-top-center relative mt-1.5 h-(--reka-navigation-menu-viewport-height) w-full overflow-hidden md:w-(--reka-navigation-menu-viewport-width)", t.class) }), null, 16, ["class"])]));
	}
}), fF = /* @__PURE__ */ F({
	__name: "NavigationMenu",
	props: {
		modelValue: {},
		defaultValue: {},
		dir: {},
		orientation: {},
		delayDuration: {},
		skipDelayDuration: {},
		disableClickTrigger: { type: Boolean },
		disableHoverTrigger: { type: Boolean },
		disablePointerLeaveClose: { type: Boolean },
		unmountOnHide: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		viewport: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class", "viewport"), r);
		return (t, r) => (z(), V(M(vw), K({
			"data-slot": "navigation-menu",
			"data-viewport": e.viewport
		}, M(i), { class: M($)("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", n.class) }), {
			default: N((n) => [L(t.$slots, "default", A(W(n))), e.viewport ? (z(), V(dF, { key: 0 })) : G("", !0)]),
			_: 3
		}, 16, ["data-viewport", "class"]));
	}
}), pF = /* @__PURE__ */ F({
	__name: "NavigationMenuContent",
	props: {
		forceMount: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(Cw), K({ "data-slot": "navigation-menu-content" }, M(i), { class: M($)("data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-open:animate-in group-data-[viewport=false]/navigation-menu:data-closed:animate-out group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 group-data-[viewport=false]/navigation-menu:ring-foreground/10 p-1 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:duration-300 top-0 left-0 w-full group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none md:absolute md:w-auto", n.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), mF = /* @__PURE__ */ F({
	__name: "NavigationMenuItem",
	props: {
		value: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(xw), K({ "data-slot": "navigation-menu-item" }, M(n), { class: M($)("relative", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), hF = /* @__PURE__ */ F({
	__name: "NavigationMenuLink",
	props: {
		active: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(ww), K({ "data-slot": "navigation-menu-link" }, M(i), { class: M($)("data-active:focus:bg-muted data-active:hover:bg-muted data-active:bg-muted/50 focus-visible:ring-ring/50 hover:bg-muted focus:bg-muted flex items-center gap-2 rounded-lg p-2 text-sm transition-all outline-none focus-visible:ring-3 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md [&_svg:not([class*=size-])]:size-4", n.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), gF = /* @__PURE__ */ F({
	__name: "NavigationMenuList",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(Tw), K({ "data-slot": "navigation-menu-list" }, M(n), { class: M($)("gap-0 group flex flex-1 list-none items-center justify-center", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), _F = /* @__PURE__ */ F({
	__name: "NavigationMenuTrigger",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(Dw), K({ "data-slot": "navigation-menu-trigger" }, M(n), { class: M($)(M(vF)(), "group", t.class) }), {
			default: N(() => [L(e.$slots, "default"), U(M(Lf), {
				class: "relative top-px ml-1 size-3 transition duration-300 group-data-open/navigation-menu-trigger:rotate-180 group-data-popup-open/navigation-menu-trigger:rotate-180",
				"aria-hidden": "true"
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), vF = Kj("hover:bg-muted focus:bg-muted data-open:hover:bg-muted data-open:focus:bg-muted data-open:bg-muted/50 focus-visible:ring-ring/50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all focus-visible:ring-3 focus-visible:outline-1 disabled:opacity-50 group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center outline-none disabled:pointer-events-none"), yF = ["innerHTML"], bF = {
	type: "button",
	class: "inline-flex h-9 w-max items-center justify-center px-2.5 py-1.5 text-sm font-medium"
}, xF = /* @__PURE__ */ F({
	__name: "NavigationMenu.ce",
	setup(e) {
		let t = vl()?._light.sections ?? [];
		return (e, n) => (z(), V(M(fF), null, {
			default: N(() => [U(M(gF), null, {
				default: N(() => [(z(!0), B(R, null, ca(M(t), (e) => (z(), V(M(mF), { key: e.value }, {
					default: N(() => [e.html.trim() ? (z(), B(R, { key: 0 }, [U(M(_F), null, {
						default: N(() => [_s(De(e.title), 1)]),
						_: 2
					}, 1024), U(M(pF), null, {
						default: N(() => [H("div", { innerHTML: e.html }, null, 8, yF)]),
						_: 2
					}, 1024)], 64)) : (z(), V(M(hF), {
						key: 1,
						"as-child": ""
					}, {
						default: N(() => [H("button", bF, De(e.title), 1)]),
						_: 2
					}, 1024))]),
					_: 2
				}, 1024))), 128))]),
				_: 1
			})]),
			_: 1
		}));
	}
}), SF = /* @__PURE__ */ F({
	__name: "Command",
	props: {
		modelValue: { default: "" },
		defaultValue: {},
		multiple: { type: Boolean },
		orientation: {},
		dir: {},
		disabled: { type: Boolean },
		selectionBehavior: {},
		highlightOnHover: { type: Boolean },
		by: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: [
		"update:modelValue",
		"highlight",
		"entryFocus",
		"leave"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r), a = /* @__PURE__ */ j(/* @__PURE__ */ new Map()), o = /* @__PURE__ */ j(/* @__PURE__ */ new Map()), { contains: s } = Vg({ sensitivity: "base" }), c = /* @__PURE__ */ Zt({
			search: "",
			filtered: {
				count: 0,
				items: /* @__PURE__ */ new Map(),
				groups: /* @__PURE__ */ new Set()
			}
		});
		function l() {
			if (!c.search) {
				c.filtered.count = a.value.size;
				return;
			}
			c.filtered.groups = /* @__PURE__ */ new Set();
			let e = 0;
			for (let [t, n] of a.value) {
				let r = s(n, c.search);
				c.filtered.items.set(t, +!!r), r && e++;
			}
			for (let [e, t] of o.value) for (let n of t) if (c.filtered.items.get(n) > 0) {
				c.filtered.groups.add(e);
				break;
			}
			c.filtered.count = e;
		}
		return P(() => c.search, () => {
			l();
		}), jF({
			allItems: a,
			allGroups: o,
			filterState: c
		}), (e, t) => (z(), V(M(ly), K({ "data-slot": "command" }, M(i), { class: M($)("bg-popover text-popover-foreground rounded-xl! p-1 flex size-full flex-col overflow-hidden", n.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), CF = /* @__PURE__ */ F({
	__name: "CommandEmpty",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class"), { filterState: r } = AF(), i = q(() => !!r.search && r.filtered.count === 0);
		return (e, r) => i.value ? (z(), V(M(X), K({
			key: 0,
			"data-slot": "command-empty"
		}, M(n), { class: M($)("py-6 text-center text-sm", t.class) }), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"])) : G("", !0);
	}
}), wF = /* @__PURE__ */ F({
	__name: "CommandGroup",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		heading: {}
	},
	setup(e) {
		let t = e, n = J(t, "class"), { allGroups: r, filterState: i } = AF(), a = f_(), o = q(() => i.search ? i.filtered.groups.has(a) : !0);
		return NF({ id: a }), I(() => {
			r.value.has(a) || r.value.set(a, /* @__PURE__ */ new Set());
		}), Yi(() => {
			r.value.delete(a);
		}), (r, i) => (z(), V(M(my), K(M(n), {
			id: M(a),
			"data-slot": "command-group",
			class: M($)("text-foreground **:[[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium", t.class),
			hidden: o.value ? void 0 : !0
		}), {
			default: N(() => [e.heading ? (z(), V(M(hy), {
				key: 0,
				"data-slot": "command-group-heading",
				class: ""
			}, {
				default: N(() => [_s(De(e.heading), 1)]),
				_: 1
			})) : G("", !0), L(r.$slots, "default")]),
			_: 3
		}, 16, [
			"id",
			"class",
			"hidden"
		]));
	}
}), TF = {
	"data-slot": "command-input-wrapper",
	class: "p-1 pb-0"
}, EF = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "CommandInput",
	props: {
		modelValue: {},
		autoFocus: { type: Boolean },
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class")), { filterState: r } = AF();
		return (e, i) => (z(), B("div", TF, [U(M(zM), { class: "bg-input/30 border-input/30 h-8! rounded-lg! shadow-none! *:data-[slot=input-group-addon]:pl-2!" }, {
			default: N(() => [U(M(dy), K({
				...M(n),
				...e.$attrs
			}, {
				modelValue: M(r).search,
				"onUpdate:modelValue": i[0] ||= (e) => M(r).search = e,
				"data-slot": "command-input",
				"auto-focus": "",
				class: M($)("w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", t.class)
			}), null, 16, ["modelValue", "class"]), U(M(VM), null, {
				default: N(() => [U(M(Xf), { class: "size-4 shrink-0 opacity-50" })]),
				_: 1
			})]),
			_: 1
		})]));
	}
}), DF = /* @__PURE__ */ F({
	__name: "CommandItem",
	props: {
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r), a = f_(), { filterState: o, allItems: s, allGroups: c } = AF(), l = MF(), u = q(() => {
			if (o.search) {
				let e = o.filtered.items.get(a);
				return e === void 0 ? !0 : e > 0;
			} else return !0;
		}), d = /* @__PURE__ */ j(), f = bf(d);
		return I(() => {
			if (!(f.value instanceof HTMLElement)) return;
			s.value.set(a, f.value.textContent ?? n.value?.toString() ?? "");
			let e = l?.id;
			e && (c.value.has(e) ? c.value.get(e)?.add(a) : c.value.set(e, new Set([a])));
		}), Yi(() => {
			s.value.delete(a);
		}), (e, t) => u.value ? (z(), V(M(yy), K({ key: 0 }, M(i), {
			id: M(a),
			ref_key: "itemRef",
			ref: d,
			"data-slot": "command-item",
			class: M($)("data-selected:bg-muted data-selected:text-foreground data-selected:*:[svg]:text-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! [&_svg:not([class*=size-])]:size-4 group/command-item data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class),
			onSelect: t[0] ||= () => {
				M(o).search = "";
			}
		}), {
			default: N(() => [L(e.$slots, "default"), U(M(If), { class: "ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" })]),
			_: 3
		}, 16, ["id", "class"])) : G("", !0);
	}
}), OF = { role: "presentation" }, kF = /* @__PURE__ */ F({
	__name: "CommandList",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(uy), K({ "data-slot": "command-list" }, M(n), { class: M($)("no-scrollbar max-h-72 scroll-py-1 outline-none overflow-x-hidden overflow-y-auto", t.class) }), {
			default: N(() => [H("div", OF, [L(e.$slots, "default")])]),
			_: 3
		}, 16, ["class"]));
	}
}), [AF, jF] = cp("Command"), [MF, NF] = cp("CommandGroup"), PF = /* @__PURE__ */ F({
	__name: "Command.ce",
	setup(e) {
		let t = vl(), n = t?._light.options ?? [];
		function r(e) {
			t?.dispatchEvent(new CustomEvent("select", {
				bubbles: !0,
				composed: !0,
				detail: { value: e }
			}));
		}
		return (e, t) => (z(), V(M(SF), null, {
			default: N(() => [U(M(EF), { placeholder: "Pesquisar comando..." }), U(M(kF), null, {
				default: N(() => [U(M(CF), null, {
					default: N(() => [...t[0] ||= [_s("Sem resultados.", -1)]]),
					_: 1
				}), U(M(wF), null, {
					default: N(() => [(z(!0), B(R, null, ca(M(n), (e) => (z(), V(M(DF), {
						key: e.value,
						value: e.value,
						disabled: e.disabled,
						onSelect: (t) => r(e.value)
					}, {
						default: N(() => [_s(De(e.label), 1)]),
						_: 2
					}, 1032, [
						"value",
						"disabled",
						"onSelect"
					]))), 128))]),
					_: 1
				})]),
				_: 1
			})]),
			_: 1
		}));
	}
});
//#endregion
//#region node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js
function FF(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function IF(e) {
	return FF(e) || Array.isArray(e);
}
function LF() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
function RF(e, t) {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length !== r.length || JSON.stringify(Object.keys(e.breakpoints || {})) !== JSON.stringify(Object.keys(t.breakpoints || {})) ? !1 : n.every((n) => {
		let r = e[n], i = t[n];
		return typeof r == "function" ? `${r}` == `${i}` : !IF(r) || !IF(i) ? r === i : RF(r, i);
	});
}
function zF(e) {
	return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map((e) => e.options);
}
function BF(e, t) {
	if (e.length !== t.length) return !1;
	let n = zF(e), r = zF(t);
	return n.every((e, t) => {
		let n = r[t];
		return RF(e, n);
	});
}
//#endregion
//#region node_modules/embla-carousel/esm/embla-carousel.esm.js
function VF(e) {
	return typeof e == "number";
}
function HF(e) {
	return typeof e == "string";
}
function UF(e) {
	return typeof e == "boolean";
}
function WF(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function GF(e) {
	return Math.abs(e);
}
function KF(e) {
	return Math.sign(e);
}
function qF(e, t) {
	return GF(e - t);
}
function JF(e, t) {
	return e === 0 || t === 0 || GF(e) <= GF(t) ? 0 : GF(qF(GF(e), GF(t)) / e);
}
function YF(e) {
	return Math.round(e * 100) / 100;
}
function XF(e) {
	return tI(e).map(Number);
}
function ZF(e) {
	return e[QF(e)];
}
function QF(e) {
	return Math.max(0, e.length - 1);
}
function $F(e, t) {
	return t === QF(e);
}
function eI(e, t = 0) {
	return Array.from(Array(e), (e, n) => t + n);
}
function tI(e) {
	return Object.keys(e);
}
function nI(e, t) {
	return [e, t].reduce((e, t) => (tI(t).forEach((n) => {
		let r = e[n], i = t[n];
		e[n] = WF(r) && WF(i) ? nI(r, i) : i;
	}), e), {});
}
function rI(e, t) {
	return t.MouseEvent !== void 0 && e instanceof t.MouseEvent;
}
function iI(e, t) {
	let n = {
		start: r,
		center: i,
		end: a
	};
	function r() {
		return 0;
	}
	function i(e) {
		return a(e) / 2;
	}
	function a(e) {
		return t - e;
	}
	function o(r, i) {
		return HF(e) ? n[e](r) : e(t, r, i);
	}
	return { measure: o };
}
function aI() {
	let e = [];
	function t(t, n, i, a = { passive: !0 }) {
		let o;
		if ("addEventListener" in t) t.addEventListener(n, i, a), o = () => t.removeEventListener(n, i, a);
		else {
			let e = t;
			e.addListener(i), o = () => e.removeListener(i);
		}
		return e.push(o), r;
	}
	function n() {
		e = e.filter((e) => e());
	}
	let r = {
		add: t,
		clear: n
	};
	return r;
}
function oI(e, t, n, r) {
	let i = aI(), a = 1e3 / 60, o = null, s = 0, c = 0;
	function l() {
		i.add(e, "visibilitychange", () => {
			e.hidden && m();
		});
	}
	function u() {
		p(), i.clear();
	}
	function d(e) {
		if (!c) return;
		o || (o = e, n(), n());
		let i = e - o;
		for (o = e, s += i; s >= a;) n(), s -= a;
		r(s / a), c &&= t.requestAnimationFrame(d);
	}
	function f() {
		c ||= t.requestAnimationFrame(d);
	}
	function p() {
		t.cancelAnimationFrame(c), o = null, s = 0, c = 0;
	}
	function m() {
		o = null, s = 0;
	}
	return {
		init: l,
		destroy: u,
		start: f,
		stop: p,
		update: n,
		render: r
	};
}
function sI(e, t) {
	let n = t === "rtl", r = e === "y", i = r ? "y" : "x", a = r ? "x" : "y", o = !r && n ? -1 : 1, s = u(), c = d();
	function l(e) {
		let { height: t, width: n } = e;
		return r ? t : n;
	}
	function u() {
		return r ? "top" : n ? "right" : "left";
	}
	function d() {
		return r ? "bottom" : n ? "left" : "right";
	}
	function f(e) {
		return e * o;
	}
	return {
		scroll: i,
		cross: a,
		startEdge: s,
		endEdge: c,
		measureSize: l,
		direction: f
	};
}
function cI(e = 0, t = 0) {
	let n = GF(e - t);
	function r(t) {
		return t < e;
	}
	function i(e) {
		return e > t;
	}
	function a(e) {
		return r(e) || i(e);
	}
	function o(n) {
		return a(n) ? r(n) ? e : t : n;
	}
	function s(e) {
		return n ? e - n * Math.ceil((e - t) / n) : e;
	}
	return {
		length: n,
		max: t,
		min: e,
		constrain: o,
		reachedAny: a,
		reachedMax: i,
		reachedMin: r,
		removeOffset: s
	};
}
function lI(e, t, n) {
	let { constrain: r } = cI(0, e), i = e + 1, a = o(t);
	function o(e) {
		return n ? GF((i + e) % i) : r(e);
	}
	function s() {
		return a;
	}
	function c(e) {
		return a = o(e), d;
	}
	function l(e) {
		return u().set(s() + e);
	}
	function u() {
		return lI(e, s(), n);
	}
	let d = {
		get: s,
		set: c,
		add: l,
		clone: u
	};
	return d;
}
function uI(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v) {
	let { cross: y, direction: b } = e, x = [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	], S = { passive: !1 }, C = aI(), w = aI(), T = cI(50, 225).constrain(p.measure(20)), ee = {
		mouse: 300,
		touch: 400
	}, E = {
		mouse: 500,
		touch: 600
	}, te = m ? 43 : 25, ne = !1, re = 0, D = 0, ie = !1, ae = !1, oe = !1, se = !1;
	function O(e) {
		if (!v) return;
		function n(t) {
			(UF(v) || v(e, t)) && pe(t);
		}
		let r = t;
		C.add(r, "dragstart", (e) => e.preventDefault(), S).add(r, "touchmove", () => void 0, S).add(r, "touchend", () => void 0).add(r, "touchstart", n).add(r, "mousedown", n).add(r, "touchcancel", he).add(r, "contextmenu", he).add(r, "click", ge, !0);
	}
	function ce() {
		C.clear(), w.clear();
	}
	function le() {
		let e = se ? n : t;
		w.add(e, "touchmove", me, S).add(e, "touchend", he).add(e, "mousemove", me, S).add(e, "mouseup", he);
	}
	function ue(e) {
		let t = e.nodeName || "";
		return x.includes(t);
	}
	function de() {
		return (m ? E : ee)[se ? "mouse" : "touch"];
	}
	function fe(e, t) {
		let n = d.add(KF(e) * -1), r = u.byDistance(e, !m).distance;
		return m || GF(e) < T ? r : g && t ? r * .5 : u.byIndex(n.get(), 0).distance;
	}
	function pe(e) {
		let t = rI(e, r);
		se = t, oe = m && t && !e.buttons && ne, ne = qF(i.get(), o.get()) >= 2, !(t && e.button !== 0) && (ue(e.target) || (ie = !0, a.pointerDown(e), l.useFriction(0).useDuration(0), i.set(o), le(), re = a.readPoint(e), D = a.readPoint(e, y), f.emit("pointerDown")));
	}
	function me(e) {
		if (!rI(e, r) && e.touches.length >= 2) return he(e);
		let t = a.readPoint(e), n = a.readPoint(e, y), o = qF(t, re), c = qF(n, D);
		if (!ae && !se && (!e.cancelable || (ae = o > c, !ae))) return he(e);
		let u = a.pointerMove(e);
		o > h && (oe = !0), l.useFriction(.3).useDuration(.75), s.start(), i.add(b(u)), e.preventDefault();
	}
	function he(e) {
		let t = u.byDistance(0, !1).index !== d.get(), n = a.pointerUp(e) * de(), r = fe(b(n), t), i = JF(n, r), o = te - 10 * i, s = _ + i / 50;
		ae = !1, ie = !1, w.clear(), l.useDuration(o).useFriction(s), c.distance(r, !m), se = !1, f.emit("pointerUp");
	}
	function ge(e) {
		oe &&= (e.stopPropagation(), e.preventDefault(), !1);
	}
	function _e() {
		return ie;
	}
	return {
		init: O,
		destroy: ce,
		pointerDown: _e
	};
}
function dI(e, t) {
	let n, r;
	function i(e) {
		return e.timeStamp;
	}
	function a(n, r) {
		let i = `client${(r || e.scroll) === "x" ? "X" : "Y"}`;
		return (rI(n, t) ? n : n.touches[0])[i];
	}
	function o(e) {
		return n = e, r = e, a(e);
	}
	function s(e) {
		let t = a(e) - a(r), o = i(e) - i(n) > 170;
		return r = e, o && (n = e), t;
	}
	function c(e) {
		if (!n || !r) return 0;
		let t = a(r) - a(n), o = i(e) - i(n), s = i(e) - i(r) > 170, c = t / o;
		return o && !s && GF(c) > .1 ? c : 0;
	}
	return {
		pointerDown: o,
		pointerMove: s,
		pointerUp: c,
		readPoint: a
	};
}
function fI() {
	function e(e) {
		let { offsetTop: t, offsetLeft: n, offsetWidth: r, offsetHeight: i } = e;
		return {
			top: t,
			right: n + r,
			bottom: t + i,
			left: n,
			width: r,
			height: i
		};
	}
	return { measure: e };
}
function pI(e) {
	function t(t) {
		return t / 100 * e;
	}
	return { measure: t };
}
function mI(e, t, n, r, i, a, o) {
	let s = [e].concat(r), c, l, u = [], d = !1;
	function f(e) {
		return i.measureSize(o.measure(e));
	}
	function p(i) {
		if (!a) return;
		l = f(e), u = r.map(f);
		function o(n) {
			for (let a of n) {
				if (d) return;
				let n = a.target === e, o = r.indexOf(a.target), s = n ? l : u[o];
				if (GF(f(n ? e : r[o]) - s) >= .5) {
					i.reInit(), t.emit("resize");
					break;
				}
			}
		}
		c = new ResizeObserver((e) => {
			(UF(a) || a(i, e)) && o(e);
		}), n.requestAnimationFrame(() => {
			s.forEach((e) => c.observe(e));
		});
	}
	function m() {
		d = !0, c && c.disconnect();
	}
	return {
		init: p,
		destroy: m
	};
}
function hI(e, t, n, r, i, a) {
	let o = 0, s = 0, c = i, l = a, u = e.get(), d = 0;
	function f() {
		let t = r.get() - e.get(), i = !c, a = 0;
		return i ? (o = 0, n.set(r), e.set(r), a = t) : (n.set(e), o += t / c, o *= l, u += o, e.add(o), a = u - d), s = KF(a), d = u, x;
	}
	function p() {
		return GF(r.get() - t.get()) < .001;
	}
	function m() {
		return c;
	}
	function h() {
		return s;
	}
	function g() {
		return o;
	}
	function _() {
		return y(i);
	}
	function v() {
		return b(a);
	}
	function y(e) {
		return c = e, x;
	}
	function b(e) {
		return l = e, x;
	}
	let x = {
		direction: h,
		duration: m,
		velocity: g,
		seek: f,
		settled: p,
		useBaseFriction: v,
		useBaseDuration: _,
		useFriction: b,
		useDuration: y
	};
	return x;
}
function gI(e, t, n, r, i) {
	let a = i.measure(10), o = i.measure(50), s = cI(.1, .99), c = !1;
	function l() {
		return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
	}
	function u(i) {
		if (!l()) return;
		let c = GF(e[e.reachedMin(t.get()) ? "min" : "max"] - t.get()), u = n.get() - t.get(), d = s.constrain(c / o);
		n.subtract(u * d), !i && GF(u) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
	}
	function d(e) {
		c = !e;
	}
	return {
		shouldConstrain: l,
		constrain: u,
		toggleActive: d
	};
}
function _I(e, t, n, r, i) {
	let a = cI(-t + e, 0), o = d(), s = u(), c = f();
	function l(e, t) {
		return qF(e, t) <= 1;
	}
	function u() {
		let e = o[0], t = ZF(o);
		return cI(o.lastIndexOf(e), o.indexOf(t) + 1);
	}
	function d() {
		return n.map((e, t) => {
			let { min: r, max: i } = a, o = a.constrain(e), s = !t, c = $F(n, t);
			return s ? i : c || l(r, o) ? r : l(i, o) ? i : o;
		}).map((e) => parseFloat(e.toFixed(3)));
	}
	function f() {
		if (t <= e + i) return [a.max];
		if (r === "keepSnaps") return o;
		let { min: n, max: c } = s;
		return o.slice(n, c);
	}
	return {
		snapsContained: c,
		scrollContainLimit: s
	};
}
function vI(e, t, n) {
	let r = t[0];
	return { limit: cI(n ? r - e : ZF(t), r) };
}
function yI(e, t, n, r) {
	let i = .1, { reachedMin: a, reachedMax: o } = cI(t.min + i, t.max + i);
	function s(e) {
		return e === 1 ? o(n.get()) : e === -1 ? a(n.get()) : !1;
	}
	function c(t) {
		if (!s(t)) return;
		let n = t * -1 * e;
		r.forEach((e) => e.add(n));
	}
	return { loop: c };
}
function bI(e) {
	let { max: t, length: n } = e;
	function r(e) {
		let r = e - t;
		return n ? r / -n : 0;
	}
	return { get: r };
}
function xI(e, t, n, r, i) {
	let { startEdge: a, endEdge: o } = e, { groupSlides: s } = i, c = d().map(t.measure), l = f(), u = p();
	function d() {
		return s(r).map((e) => ZF(e)[o] - e[0][a]).map(GF);
	}
	function f() {
		return r.map((e) => n[a] - e[a]).map((e) => -GF(e));
	}
	function p() {
		return s(l).map((e) => e[0]).map((e, t) => e + c[t]);
	}
	return {
		snaps: l,
		snapsAligned: u
	};
}
function SI(e, t, n, r, i, a) {
	let { groupSlides: o } = i, { min: s, max: c } = r, l = u();
	function u() {
		let r = o(a), i = !e || t === "keepSnaps";
		return n.length === 1 ? [a] : i ? r : r.slice(s, c).map((e, t, n) => {
			let r = !t, i = $F(n, t);
			return r ? eI(ZF(n[0]) + 1) : i ? eI(QF(a) - ZF(n)[0] + 1, ZF(n)[0]) : e;
		});
	}
	return { slideRegistry: l };
}
function CI(e, t, n, r, i) {
	let { reachedAny: a, removeOffset: o, constrain: s } = r;
	function c(e) {
		return e.concat().sort((e, t) => GF(e) - GF(t))[0];
	}
	function l(n) {
		let r = e ? o(n) : s(n), { index: i } = t.map((e, t) => ({
			diff: u(e - r, 0),
			index: t
		})).sort((e, t) => GF(e.diff) - GF(t.diff))[0];
		return {
			index: i,
			distance: r
		};
	}
	function u(t, r) {
		let i = [
			t,
			t + n,
			t - n
		];
		if (!e) return t;
		if (!r) return c(i);
		let a = i.filter((e) => KF(e) === r);
		return a.length ? c(a) : ZF(i) - n;
	}
	function d(e, n) {
		return {
			index: e,
			distance: u(t[e] - i.get(), n)
		};
	}
	function f(n, r) {
		let o = i.get() + n, { index: s, distance: c } = l(o), d = !e && a(o);
		return !r || d ? {
			index: s,
			distance: n
		} : {
			index: s,
			distance: n + u(t[s] - c, 0)
		};
	}
	return {
		byDistance: f,
		byIndex: d,
		shortcut: u
	};
}
function wI(e, t, n, r, i, a, o) {
	function s(i) {
		let s = i.distance, c = i.index !== t.get();
		a.add(s), s && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), c && (n.set(t.get()), t.set(i.index), o.emit("select"));
	}
	function c(e, t) {
		s(i.byDistance(e, t));
	}
	function l(e, n) {
		let r = t.clone().set(e);
		s(i.byIndex(r.get(), n));
	}
	return {
		distance: c,
		index: l
	};
}
function TI(e, t, n, r, i, a, o, s) {
	let c = {
		passive: !0,
		capture: !0
	}, l = 0;
	function u(u) {
		if (!s) return;
		function f(t) {
			if ((/* @__PURE__ */ new Date()).getTime() - l > 10) return;
			o.emit("slideFocusStart"), e.scrollLeft = 0;
			let a = n.findIndex((e) => e.includes(t));
			VF(a) && (i.useDuration(0), r.index(a, 0), o.emit("slideFocus"));
		}
		a.add(document, "keydown", d, !1), t.forEach((e, t) => {
			a.add(e, "focus", (e) => {
				(UF(s) || s(u, e)) && f(t);
			}, c);
		});
	}
	function d(e) {
		e.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
	}
	return { init: u };
}
function EI(e) {
	let t = e;
	function n() {
		return t;
	}
	function r(e) {
		t = o(e);
	}
	function i(e) {
		t += o(e);
	}
	function a(e) {
		t -= o(e);
	}
	function o(e) {
		return VF(e) ? e : e.get();
	}
	return {
		get: n,
		set: r,
		add: i,
		subtract: a
	};
}
function DI(e, t) {
	let n = e.scroll === "x" ? o : s, r = t.style, i = null, a = !1;
	function o(e) {
		return `translate3d(${e}px,0px,0px)`;
	}
	function s(e) {
		return `translate3d(0px,${e}px,0px)`;
	}
	function c(t) {
		if (a) return;
		let o = YF(e.direction(t));
		o !== i && (r.transform = n(o), i = o);
	}
	function l(e) {
		a = !e;
	}
	function u() {
		a || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
	}
	return {
		clear: u,
		to: c,
		toggleActive: l
	};
}
function OI(e, t, n, r, i, a, o, s, c) {
	let l = .5, u = XF(i), d = XF(i).reverse(), f = _().concat(v());
	function p(e, t) {
		return e.reduce((e, t) => e - i[t], t);
	}
	function m(e, t) {
		return e.reduce((e, n) => p(e, t) > 0 ? e.concat([n]) : e, []);
	}
	function h(e) {
		return a.map((n, i) => ({
			start: n - r[i] + l + e,
			end: n + t - l + e
		}));
	}
	function g(t, r, i) {
		let a = h(r);
		return t.map((t) => {
			let r = i ? 0 : -n, o = i ? n : 0, l = i ? "end" : "start", u = a[t][l];
			return {
				index: t,
				loopPoint: u,
				slideLocation: EI(-1),
				translate: DI(e, c[t]),
				target: () => s.get() > u ? r : o
			};
		});
	}
	function _() {
		let e = o[0];
		return g(m(d, e), n, !1);
	}
	function v() {
		return g(m(u, t - o[0] - 1), -n, !0);
	}
	function y() {
		return f.every(({ index: e }) => p(u.filter((t) => t !== e), t) <= .1);
	}
	function b() {
		f.forEach((e) => {
			let { target: t, translate: n, slideLocation: r } = e, i = t();
			i !== r.get() && (n.to(i), r.set(i));
		});
	}
	function x() {
		f.forEach((e) => e.translate.clear());
	}
	return {
		canLoop: y,
		clear: x,
		loop: b,
		loopPoints: f
	};
}
function kI(e, t, n) {
	let r, i = !1;
	function a(a) {
		if (!n) return;
		function o(e) {
			for (let n of e) if (n.type === "childList") {
				a.reInit(), t.emit("slidesChanged");
				break;
			}
		}
		r = new MutationObserver((e) => {
			i || (UF(n) || n(a, e)) && o(e);
		}), r.observe(e, { childList: !0 });
	}
	function o() {
		r && r.disconnect(), i = !0;
	}
	return {
		init: a,
		destroy: o
	};
}
function AI(e, t, n, r) {
	let i = {}, a = null, o = null, s, c = !1;
	function l() {
		s = new IntersectionObserver((e) => {
			c || (e.forEach((e) => {
				let n = t.indexOf(e.target);
				i[n] = e;
			}), a = null, o = null, n.emit("slidesInView"));
		}, {
			root: e.parentElement,
			threshold: r
		}), t.forEach((e) => s.observe(e));
	}
	function u() {
		s && s.disconnect(), c = !0;
	}
	function d(e) {
		return tI(i).reduce((t, n) => {
			let r = parseInt(n), { isIntersecting: a } = i[r];
			return (e && a || !e && !a) && t.push(r), t;
		}, []);
	}
	function f(e = !0) {
		if (e && a) return a;
		if (!e && o) return o;
		let t = d(e);
		return e && (a = t), e || (o = t), t;
	}
	return {
		init: l,
		destroy: u,
		get: f
	};
}
function jI(e, t, n, r, i, a) {
	let { measureSize: o, startEdge: s, endEdge: c } = e, l = n[0] && i, u = m(), d = h(), f = n.map(o), p = g();
	function m() {
		if (!l) return 0;
		let e = n[0];
		return GF(t[s] - e[s]);
	}
	function h() {
		if (!l) return 0;
		let e = a.getComputedStyle(ZF(r));
		return parseFloat(e.getPropertyValue(`margin-${c}`));
	}
	function g() {
		return n.map((e, t, n) => {
			let r = !t, i = $F(n, t);
			return r ? f[t] + u : i ? f[t] + d : n[t + 1][s] - e[s];
		}).map(GF);
	}
	return {
		slideSizes: f,
		slideSizesWithGaps: p,
		startGap: u,
		endGap: d
	};
}
function MI(e, t, n, r, i, a, o, s, c) {
	let { startEdge: l, endEdge: u, direction: d } = e, f = VF(n);
	function p(e, t) {
		return XF(e).filter((e) => e % t === 0).map((n) => e.slice(n, n + t));
	}
	function m(e) {
		return e.length ? XF(e).reduce((n, f, p) => {
			let m = ZF(n) || 0, h = m === 0, g = f === QF(e), _ = i[l] - a[m][l], v = i[l] - a[f][u], y = !r && h ? d(o) : 0, b = GF(v - (!r && g ? d(s) : 0) - (_ + y));
			return p && b > t + c && n.push(f), g && n.push(e.length), n;
		}, []).map((t, n, r) => {
			let i = Math.max(r[n - 1] || 0);
			return e.slice(i, t);
		}) : [];
	}
	function h(e) {
		return f ? p(e, n) : m(e);
	}
	return { groupSlides: h };
}
function NI(e, t, n, r, i, a, o) {
	let { align: s, axis: c, direction: l, startIndex: u, loop: d, duration: f, dragFree: p, dragThreshold: m, inViewThreshold: h, slidesToScroll: g, skipSnaps: _, containScroll: v, watchResize: y, watchSlides: b, watchDrag: x, watchFocus: S } = a, C = fI(), w = C.measure(t), T = n.map(C.measure), ee = sI(c, l), E = ee.measureSize(w), te = pI(E), ne = iI(s, E), re = !d && !!v, { slideSizes: D, slideSizesWithGaps: ie, startGap: ae, endGap: oe } = jI(ee, w, T, n, d || !!v, i), se = MI(ee, E, g, d, w, T, ae, oe, 2), { snaps: O, snapsAligned: ce } = xI(ee, ne, w, T, se), le = -ZF(O) + ZF(ie), { snapsContained: ue, scrollContainLimit: de } = _I(E, le, ce, v, 2), fe = re ? ue : ce, { limit: pe } = vI(le, fe, d), me = lI(QF(fe), u, d), he = me.clone(), ge = XF(n), _e = ({ dragHandler: e, scrollBody: t, scrollBounds: n, options: { loop: r } }) => {
		r || n.constrain(e.pointerDown()), t.seek();
	}, ve = ({ scrollBody: e, translate: t, location: n, offsetLocation: r, previousLocation: i, scrollLooper: a, slideLooper: o, dragHandler: s, animation: c, eventHandler: l, scrollBounds: u, options: { loop: d } }, f) => {
		let p = e.settled(), m = !u.shouldConstrain(), h = d ? p : p && m, g = h && !s.pointerDown();
		g && c.stop();
		let _ = n.get() * f + i.get() * (1 - f);
		r.set(_), d && (a.loop(e.direction()), o.loop()), t.to(r.get()), g && l.emit("settle"), h || l.emit("scroll");
	}, ye = oI(r, i, () => _e(Me), (e) => ve(Me, e)), k = .68, A = fe[me.get()], be = EI(A), xe = EI(A), Se = EI(A), Ce = EI(A), we = hI(be, Se, xe, Ce, f, k), Te = CI(d, fe, le, pe, Ce), Ee = wI(ye, me, he, we, Te, Ce, o), De = bI(pe), Oe = aI(), ke = AI(t, n, o, h), { slideRegistry: Ae } = SI(re, v, fe, de, se, ge), je = TI(e, n, Ae, Ee, we, Oe, o, S), Me = {
		ownerDocument: r,
		ownerWindow: i,
		eventHandler: o,
		containerRect: w,
		slideRects: T,
		animation: ye,
		axis: ee,
		dragHandler: uI(ee, e, r, i, Ce, dI(ee, i), be, ye, Ee, we, Te, me, o, te, p, m, _, k, x),
		eventStore: Oe,
		percentOfView: te,
		index: me,
		indexPrevious: he,
		limit: pe,
		location: be,
		offsetLocation: Se,
		previousLocation: xe,
		options: a,
		resizeHandler: mI(t, o, i, n, ee, y, C),
		scrollBody: we,
		scrollBounds: gI(pe, Se, Ce, we, te),
		scrollLooper: yI(le, pe, Se, [
			be,
			Se,
			xe,
			Ce
		]),
		scrollProgress: De,
		scrollSnapList: fe.map(De.get),
		scrollSnaps: fe,
		scrollTarget: Te,
		scrollTo: Ee,
		slideLooper: OI(ee, E, le, D, ie, O, fe, Se, n),
		slideFocus: je,
		slidesHandler: kI(t, o, b),
		slidesInView: ke,
		slideIndexes: ge,
		slideRegistry: Ae,
		slidesToScroll: se,
		target: Ce,
		translate: DI(ee, t)
	};
	return Me;
}
function PI() {
	let e = {}, t;
	function n(e) {
		t = e;
	}
	function r(t) {
		return e[t] || [];
	}
	function i(e) {
		return r(e).forEach((n) => n(t, e)), c;
	}
	function a(t, n) {
		return e[t] = r(t).concat([n]), c;
	}
	function o(t, n) {
		return e[t] = r(t).filter((e) => e !== n), c;
	}
	function s() {
		e = {};
	}
	let c = {
		init: n,
		emit: i,
		off: o,
		on: a,
		clear: s
	};
	return c;
}
var FI = {
	align: "center",
	axis: "x",
	container: null,
	slides: null,
	containScroll: "trimSnaps",
	direction: "ltr",
	slidesToScroll: 1,
	inViewThreshold: 0,
	breakpoints: {},
	dragFree: !1,
	dragThreshold: 10,
	loop: !1,
	skipSnaps: !1,
	duration: 25,
	startIndex: 0,
	active: !0,
	watchDrag: !0,
	watchResize: !0,
	watchSlides: !0,
	watchFocus: !0
};
function II(e) {
	function t(e, t) {
		return nI(e, t || {});
	}
	function n(n) {
		let r = n.breakpoints || {};
		return t(n, tI(r).filter((t) => e.matchMedia(t).matches).map((e) => r[e]).reduce((e, n) => t(e, n), {}));
	}
	function r(t) {
		return t.map((e) => tI(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia);
	}
	return {
		mergeOptions: t,
		optionsAtMedia: n,
		optionsMediaQueries: r
	};
}
function LI(e) {
	let t = [];
	function n(n, r) {
		return t = r.filter(({ options: t }) => e.optionsAtMedia(t).active !== !1), t.forEach((t) => t.init(n, e)), r.reduce((e, t) => Object.assign(e, { [t.name]: t }), {});
	}
	function r() {
		t = t.filter((e) => e.destroy());
	}
	return {
		init: n,
		destroy: r
	};
}
function RI(e, t, n) {
	let r = e.ownerDocument, i = r.defaultView, a = II(i), o = LI(a), s = aI(), c = PI(), { mergeOptions: l, optionsAtMedia: u, optionsMediaQueries: d } = a, { on: f, off: p, emit: m } = c, h = E, g = !1, _, v = l(FI, RI.globalOptions), y = l(v), b = [], x, S, C;
	function w() {
		let { container: t, slides: n } = y;
		S = (HF(t) ? e.querySelector(t) : t) || e.children[0];
		let r = HF(n) ? S.querySelectorAll(n) : n;
		C = [].slice.call(r || S.children);
	}
	function T(t) {
		let n = NI(e, S, C, r, i, t, c);
		return t.loop && !n.slideLooper.canLoop() ? T(Object.assign({}, t, { loop: !1 })) : n;
	}
	function ee(e, t) {
		g || (v = l(v, e), y = u(v), b = t || b, w(), _ = T(y), d([v, ...b.map(({ options: e }) => e)]).forEach((e) => s.add(e, "change", E)), y.active && (_.translate.to(_.location.get()), _.animation.init(), _.slidesInView.init(), _.slideFocus.init(_e), _.eventHandler.init(_e), _.resizeHandler.init(_e), _.slidesHandler.init(_e), _.options.loop && _.slideLooper.loop(), S.offsetParent && C.length && _.dragHandler.init(_e), x = o.init(_e, b)));
	}
	function E(e, t) {
		let n = ce();
		te(), ee(l({ startIndex: n }, e), t), c.emit("reInit");
	}
	function te() {
		_.dragHandler.destroy(), _.eventStore.clear(), _.translate.clear(), _.slideLooper.clear(), _.resizeHandler.destroy(), _.slidesHandler.destroy(), _.slidesInView.destroy(), _.animation.destroy(), o.destroy(), s.clear();
	}
	function ne() {
		g || (g = !0, s.clear(), te(), c.emit("destroy"), c.clear());
	}
	function re(e, t, n) {
		!y.active || g || (_.scrollBody.useBaseFriction().useDuration(t === !0 ? 0 : y.duration), _.scrollTo.index(e, n || 0));
	}
	function D(e) {
		re(_.index.add(1).get(), e, -1);
	}
	function ie(e) {
		re(_.index.add(-1).get(), e, 1);
	}
	function ae() {
		return _.index.add(1).get() !== ce();
	}
	function oe() {
		return _.index.add(-1).get() !== ce();
	}
	function se() {
		return _.scrollSnapList;
	}
	function O() {
		return _.scrollProgress.get(_.offsetLocation.get());
	}
	function ce() {
		return _.index.get();
	}
	function le() {
		return _.indexPrevious.get();
	}
	function ue() {
		return _.slidesInView.get();
	}
	function de() {
		return _.slidesInView.get(!1);
	}
	function fe() {
		return x;
	}
	function pe() {
		return _;
	}
	function me() {
		return e;
	}
	function he() {
		return S;
	}
	function ge() {
		return C;
	}
	let _e = {
		canScrollNext: ae,
		canScrollPrev: oe,
		containerNode: he,
		internalEngine: pe,
		destroy: ne,
		off: p,
		on: f,
		emit: m,
		plugins: fe,
		previousScrollSnap: le,
		reInit: h,
		rootNode: me,
		scrollNext: D,
		scrollPrev: ie,
		scrollProgress: O,
		scrollSnapList: se,
		scrollTo: re,
		selectedScrollSnap: ce,
		slideNodes: ge,
		slidesInView: ue,
		slidesNotInView: de
	};
	return ee(t, n), setTimeout(() => c.emit("init"), 0), _e;
}
RI.globalOptions = void 0;
//#endregion
//#region node_modules/embla-carousel-vue/esm/embla-carousel-vue.esm.js
function zI(e = {}, t = []) {
	let n = /* @__PURE__ */ dn(e), r = /* @__PURE__ */ dn(t), i = n ? e.value : e, a = r ? t.value : t, o = /* @__PURE__ */ fn(), s = /* @__PURE__ */ fn();
	function c() {
		s.value && s.value.reInit(i, a);
	}
	return I(() => {
		!LF() || !o.value || (RI.globalOptions = zI.globalOptions, s.value = RI(o.value, i, a));
	}), Ji(() => {
		s.value && s.value.destroy();
	}), n && P(e, (e) => {
		RF(i, e) || (i = e, c());
	}), r && P(t, (e) => {
		BF(a, e) || (a = e, c());
	}), [o, s];
}
zI.globalOptions = void 0;
//#endregion
//#region src/components/ui/carousel/useCarousel.ts
var [BI, VI] = Cd(({ opts: e, orientation: t, plugins: n }, r) => {
	let [i, a] = zI({
		...e,
		axis: t === "horizontal" ? "x" : "y"
	}, n);
	function o() {
		a.value?.scrollPrev();
	}
	function s() {
		a.value?.scrollNext();
	}
	let c = /* @__PURE__ */ j(!1), l = /* @__PURE__ */ j(!1);
	function u(e) {
		c.value = e?.canScrollNext() || !1, l.value = e?.canScrollPrev() || !1;
	}
	return I(() => {
		a.value && (a.value?.on("init", u), a.value?.on("reInit", u), a.value?.on("select", u), r("init-api", a.value));
	}), {
		carouselRef: i,
		carouselApi: a,
		canScrollPrev: l,
		canScrollNext: c,
		scrollPrev: o,
		scrollNext: s,
		orientation: t
	};
});
function HI() {
	let e = VI();
	if (!e) throw Error("useCarousel must be used within a <Carousel />");
	return e;
}
//#endregion
//#region src/components/ui/carousel/Carousel.vue
var UI = /* @__PURE__ */ F({
	__name: "Carousel",
	props: {
		opts: {},
		plugins: {},
		orientation: { default: "horizontal" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["init-api"],
	setup(e, { expose: t, emit: n }) {
		let r = e, { canScrollNext: i, canScrollPrev: a, carouselApi: o, carouselRef: s, orientation: c, scrollNext: l, scrollPrev: u } = BI(r, n);
		t({
			canScrollNext: i,
			canScrollPrev: a,
			carouselApi: o,
			carouselRef: s,
			orientation: c,
			scrollNext: l,
			scrollPrev: u
		});
		function d(e) {
			let t = r.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", n = r.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
			if (e.key === t) {
				e.preventDefault(), u();
				return;
			}
			e.key === n && (e.preventDefault(), l());
		}
		return (e, t) => (z(), B("div", {
			"data-slot": "carousel",
			class: k(M($)("relative", r.class)),
			role: "region",
			"aria-roledescription": "carousel",
			tabindex: "0",
			onKeydown: d
		}, [L(e.$slots, "default", {
			canScrollNext: M(i),
			canScrollPrev: M(a),
			carouselApi: M(o),
			carouselRef: M(s),
			orientation: M(c),
			scrollNext: M(l),
			scrollPrev: M(u)
		})], 34));
	}
}), WI = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "CarouselContent",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e, { carouselRef: n, orientation: r } = HI();
		return (e, i) => (z(), B("div", {
			ref_key: "carouselRef",
			ref: n,
			"data-slot": "carousel-content",
			class: "overflow-hidden"
		}, [H("div", K({ class: M($)("flex", M(r) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class) }, e.$attrs), [L(e.$slots, "default")], 16)], 512));
	}
}), GI = /* @__PURE__ */ F({
	__name: "CarouselItem",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e, { orientation: n } = HI();
		return (e, r) => (z(), B("div", {
			"data-slot": "carousel-item",
			role: "group",
			"aria-roledescription": "slide",
			class: k(M($)("min-w-0 shrink-0 grow-0 basis-full", M(n) === "horizontal" ? "pl-4" : "pt-4", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), KI = /* @__PURE__ */ F({
	__name: "CarouselNext",
	props: {
		variant: { default: "outline" },
		size: { default: "icon-sm" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, { orientation: n, canScrollNext: r, scrollNext: i } = HI();
		return (a, o) => (z(), V(M(qj), {
			"data-slot": "carousel-next",
			disabled: !M(r),
			class: k(M($)("rounded-full absolute touch-manipulation", M(n) === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", t.class)),
			variant: e.variant,
			size: e.size,
			onClick: M(i)
		}, {
			default: N(() => [L(a.$slots, "default", {}, () => [U(M(zf), { class: "cn-rtl-flip" }), o[0] ||= H("span", { class: "sr-only" }, "Next slide", -1)])]),
			_: 3
		}, 8, [
			"disabled",
			"class",
			"variant",
			"size",
			"onClick"
		]));
	}
}), qI = /* @__PURE__ */ F({
	__name: "CarouselPrevious",
	props: {
		variant: { default: "outline" },
		size: { default: "icon-sm" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, { orientation: n, canScrollPrev: r, scrollPrev: i } = HI();
		return (a, o) => (z(), V(M(qj), {
			"data-slot": "carousel-previous",
			disabled: !M(r),
			class: k(M($)("rounded-full absolute touch-manipulation", M(n) === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", t.class)),
			variant: e.variant,
			size: e.size,
			onClick: M(i)
		}, {
			default: N(() => [L(a.$slots, "default", {}, () => [U(M(Rf), { class: "cn-rtl-flip" }), o[0] ||= H("span", { class: "sr-only" }, "Previous slide", -1)])]),
			_: 3
		}, 8, [
			"disabled",
			"class",
			"variant",
			"size",
			"onClick"
		]));
	}
}), JI = ["innerHTML"], YI = /* @__PURE__ */ F({
	__name: "Carousel.ce",
	props: { orientation: { type: String } },
	setup(e) {
		let t = e, n = vl()?._light, r = n?.sections ?? [], i = n?.options ?? [], a = r.length ? r.map((e) => e.html) : i.length ? i.map((e) => `<span>${e.label}</span>`) : n?.defaultHtml ? [n.defaultHtml] : [];
		return (e, n) => (z(), V(M(UI), {
			orientation: t.orientation ?? "horizontal",
			class: "relative w-full max-w-sm"
		}, {
			default: N(() => [
				U(M(WI), null, {
					default: N(() => [(z(!0), B(R, null, ca(M(a), (e, t) => (z(), V(M(GI), { key: t }, {
						default: N(() => [H("div", { innerHTML: e }, null, 8, JI)]),
						_: 2
					}, 1024))), 128))]),
					_: 1
				}),
				U(M(qI)),
				U(M(KI))
			]),
			_: 1
		}, 8, ["orientation"]));
	}
}), XI = ["data-size"], ZI = ["data-size"], QI = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "NativeSelect",
	props: {
		modelValue: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		size: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = Ef(n, "modelValue", t, {
			passive: !0,
			defaultValue: ""
		}), i = J(n, "class", "size");
		return (e, t) => (z(), B("div", {
			class: "group/native-select relative w-fit has-[select:disabled]:opacity-50",
			"data-slot": "native-select-wrapper",
			"data-size": n.size ?? "default"
		}, [vr(H("select", K({
			...e.$attrs,
			...M(i)
		}, {
			"onUpdate:modelValue": t[0] ||= (e) => /* @__PURE__ */ dn(r) ? r.value = e : null,
			"data-slot": "native-select",
			"data-size": n.size ?? "default",
			class: M($)("border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-8 w-full min-w-0 appearance-none rounded-lg border bg-transparent py-1 pr-8 pl-2.5 text-sm transition-colors select-none focus-visible:ring-3 aria-invalid:ring-3 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-[size=sm]:py-0.5 outline-none disabled:pointer-events-none disabled:cursor-not-allowed", n.class)
		}), [L(e.$slots, "default")], 16, ZI), [[Bl, M(r)]]), U(M(Lf), {
			class: "text-muted-foreground top-1/2 right-2.5 size-4 -translate-y-1/2 pointer-events-none absolute select-none",
			"aria-hidden": "true",
			"data-slot": "native-select-icon"
		})], 8, XI));
	}
}), $I = /* @__PURE__ */ F({
	__name: "NativeSelectOption",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("option", {
			"data-slot": "native-select-option",
			class: k(M($)("bg-[Canvas] text-[CanvasText]", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), eL = { class: "**:data-[slot=native-select-icon]:right-1" }, tL = { class: "relative" }, nL = { class: "absolute inset-0 flex h-full items-center text-sm pl-2 pointer-events-none" }, rL = { class: "**:data-[slot=native-select-icon]:right-1" }, iL = { class: "relative" }, aL = { class: "absolute inset-0 flex h-full items-center text-sm pl-2 pointer-events-none" }, oL = { class: "flex items-center gap-1 absolute top-0 inset-x-0 justify-between" }, sL = {
	key: 0,
	class: "flex items-center justify-center gap-1"
}, cL = {
	key: 1,
	class: "flex items-center justify-center gap-1"
}, lL = {
	key: 2,
	class: "flex items-center justify-center gap-1"
}, uL = { class: "flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, dL = /* @__PURE__ */ F({
	__name: "Calendar",
	props: {
		defaultValue: {},
		defaultPlaceholder: {},
		placeholder: {},
		pagedNavigation: { type: Boolean },
		preventDeselect: { type: Boolean },
		weekStartsOn: {},
		weekdayFormat: {},
		calendarLabel: {},
		fixedWeeks: { type: Boolean },
		maxValue: {},
		minValue: {},
		locale: {},
		numberOfMonths: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		initialFocus: { type: Boolean },
		isDateDisabled: {},
		isDateUnavailable: {},
		dir: {},
		nextPage: {},
		prevPage: {},
		modelValue: { default: void 0 },
		multiple: { type: Boolean },
		disableDaysOutsideCurrentView: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		layout: { default: void 0 },
		yearRange: {}
	},
	emits: ["update:modelValue", "update:placeholder"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = J(n, "class", "layout", "placeholder"), a = Ef(n, "placeholder", r, {
			passive: !0,
			defaultValue: n.defaultPlaceholder ?? Gp(Zp())
		}), o = Rg(n.locale ?? "en"), s = q(() => n.yearRange ?? Ig({
			start: n?.minValue ?? (/* @__PURE__ */ sn(n.placeholder) ?? n.defaultPlaceholder ?? Gp(Zp())).cycle("year", -100),
			end: n?.maxValue ?? (/* @__PURE__ */ sn(n.placeholder) ?? n.defaultPlaceholder ?? Gp(Zp())).cycle("year", 10)
		})), [c, l] = nf(), [u, d] = nf(), f = qg(i, r);
		return (t, r) => (z(), B(R, null, [
			U(M(c), null, {
				default: N(({ date: e }) => [H("div", eL, [H("div", tL, [H("div", nL, De(M(o).custom(M(bg)(e), { month: "short" })), 1), U(M(QI), {
					class: "text-xs h-8 pr-6 pl-2 text-transparent relative",
					onChange: r[0] ||= (e) => {
						a.value = M(a).set({ month: Number(e?.target?.value) });
					}
				}, {
					default: N(() => [(z(!0), B(R, null, ca(M(Pg)({ dateObj: e }), (t) => (z(), V(M($I), {
						key: t.toString(),
						value: t.month,
						selected: e.month === t.month
					}, {
						default: N(() => [_s(De(M(o).custom(M(bg)(t), { month: "short" })), 1)]),
						_: 2
					}, 1032, ["value", "selected"]))), 128))]),
					_: 2
				}, 1024)])])]),
				_: 1
			}),
			U(M(u), null, {
				default: N(({ date: e }) => [H("div", rL, [H("div", iL, [H("div", aL, De(M(o).custom(M(bg)(e), { year: "numeric" })), 1), U(M(QI), {
					class: "text-xs h-8 pr-6 pl-2 text-transparent relative",
					onChange: r[1] ||= (e) => {
						a.value = M(a).set({ year: Number(e?.target?.value) });
					}
				}, {
					default: N(() => [(z(!0), B(R, null, ca(s.value, (t) => (z(), V(M($I), {
						key: t.toString(),
						value: t.year,
						selected: e.year === t.year
					}, {
						default: N(() => [_s(De(M(o).custom(M(bg)(t), { year: "numeric" })), 1)]),
						_: 2
					}, 1032, ["value", "selected"]))), 128))]),
					_: 2
				}, 1024)])])]),
				_: 1
			}),
			U(M(aS), K(M(f), {
				placeholder: M(a),
				"onUpdate:placeholder": r[2] ||= (e) => /* @__PURE__ */ dn(a) ? a.value = e : null,
				"data-slot": "calendar",
				class: M($)("p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] group/calendar bg-background in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent", n.class)
			}), {
				default: N(({ grid: n, weekDays: r, date: i }) => [U(M(yL), { class: "pt-0" }, {
					default: N(() => [H("nav", oL, [U(M(SL), null, {
						default: N(() => [L(t.$slots, "calendar-prev-icon")]),
						_: 3
					}), U(M(xL), null, {
						default: N(() => [L(t.$slots, "calendar-next-icon")]),
						_: 3
					})]), L(t.$slots, "calendar-heading", {
						date: i,
						month: M(l),
						year: M(d)
					}, () => [e.layout === "month-and-year" ? (z(), B("div", sL, [U(M(l), { date: i }, null, 8, ["date"]), U(M(d), { date: i }, null, 8, ["date"])])) : e.layout === "month-only" ? (z(), B("div", cL, [U(M(l), { date: i }, null, 8, ["date"]), _s(" " + De(M(o).custom(M(bg)(i), { year: "numeric" })), 1)])) : e.layout === "year-only" ? (z(), B("div", lL, [_s(De(M(o).custom(M(bg)(i), { month: "short" })) + " ", 1), U(M(d), { date: i }, null, 8, ["date"])])) : (z(), V(M(bL), { key: 3 }))])]),
					_: 2
				}, 1024), H("div", uL, [(z(!0), B(R, null, ca(n, (e) => (z(), V(M(mL), { key: e.value.toString() }, {
					default: N(() => [U(M(gL), null, {
						default: N(() => [U(M(_L), null, {
							default: N(() => [(z(!0), B(R, null, ca(r, (e) => (z(), V(M(vL), { key: e }, {
								default: N(() => [_s(De(e), 1)]),
								_: 2
							}, 1024))), 128))]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1024), U(M(hL), null, {
						default: N(() => [(z(!0), B(R, null, ca(e.rows, (t, n) => (z(), V(M(_L), {
							key: `weekDate-${n}`,
							class: "mt-2 w-full"
						}, {
							default: N(() => [(z(!0), B(R, null, ca(t, (t) => (z(), V(M(fL), {
								key: t.toString(),
								date: t
							}, {
								default: N(() => [U(M(pL), {
									day: t,
									month: e.value
								}, null, 8, ["day", "month"])]),
								_: 2
							}, 1032, ["date"]))), 128))]),
							_: 2
						}, 1024))), 128))]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1024))), 128))])]),
				_: 3
			}, 16, ["placeholder", "class"])
		], 64));
	}
}), fL = /* @__PURE__ */ F({
	__name: "CalendarCell",
	props: {
		date: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(oS), K({
			"data-slot": "calendar-cell",
			class: M($)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent", t.class)
		}, M(n)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), pL = /* @__PURE__ */ F({
	__name: "CalendarCellTrigger",
	props: {
		day: {},
		month: {},
		asChild: { type: Boolean },
		as: { default: "button" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(sS), K({
			"data-slot": "calendar-cell-trigger",
			class: M($)(M(Jj)({ variant: "ghost" }), "size-8 p-0 font-normal aria-selected:opacity-100 cursor-default", "[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground", "data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground", "data-[disabled]:text-muted-foreground data-[disabled]:opacity-50", "data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through", "data-[outside-view]:text-muted-foreground", t.class)
		}, M(n)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), mL = /* @__PURE__ */ F({
	__name: "CalendarGrid",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(cS), K({
			"data-slot": "calendar-grid",
			class: M($)("w-full border-collapse space-x-1", t.class)
		}, M(n)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), hL = /* @__PURE__ */ F({
	__name: "CalendarGridBody",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(lS), K({ "data-slot": "calendar-grid-body" }, t), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), gL = /* @__PURE__ */ F({
	__name: "CalendarGridHead",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(uS), K({ "data-slot": "calendar-grid-head" }, t), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), _L = /* @__PURE__ */ F({
	__name: "CalendarGridRow",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(dS), K({
			"data-slot": "calendar-grid-row",
			class: M($)("flex", t.class)
		}, M(n)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), vL = /* @__PURE__ */ F({
	__name: "CalendarHeadCell",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(fS), K({
			"data-slot": "calendar-head-cell",
			class: M($)("text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem]", t.class)
		}, M(n)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), yL = /* @__PURE__ */ F({
	__name: "CalendarHeader",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(pS), K({
			"data-slot": "calendar-header",
			class: M($)("flex justify-center pt-1 relative items-center w-full px-8", t.class)
		}, M(n)), {
			default: N(() => [L(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), bL = /* @__PURE__ */ F({
	__name: "CalendarHeading",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(mS), K({
			"data-slot": "calendar-heading",
			class: M($)("text-sm font-medium", t.class)
		}, M(n)), {
			default: N(({ headingValue: t }) => [L(e.$slots, "default", { headingValue: t }, () => [_s(De(t), 1)])]),
			_: 3
		}, 16, ["class"]));
	}
}), xL = /* @__PURE__ */ F({
	__name: "CalendarNextButton",
	props: {
		nextPage: { type: Function },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(hS), K({
			"data-slot": "calendar-next-button",
			class: M($)(M(Jj)({ variant: "outline" }), "size-7 bg-transparent p-0 opacity-50 hover:opacity-100", t.class)
		}, M(n)), {
			default: N(() => [L(e.$slots, "default", {}, () => [U(M(zf), { class: "cn-rtl-flip size-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), SL = /* @__PURE__ */ F({
	__name: "CalendarPrevButton",
	props: {
		prevPage: { type: Function },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class"));
		return (e, r) => (z(), V(M(gS), K({
			"data-slot": "calendar-prev-button",
			class: M($)(M(Jj)({ variant: "outline" }), "size-7 bg-transparent p-0 opacity-50 hover:opacity-100", t.class)
		}, M(n)), {
			default: N(() => [L(e.$slots, "default", {}, () => [U(M(Rf), { class: "cn-rtl-flip size-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), CL = /* @__PURE__ */ F({
	__name: "Calendar.ce",
	setup(e) {
		let t = vl(), n = /* @__PURE__ */ j(void 0);
		function r(e) {
			let r;
			if (e && typeof e == "object" && "year" in e) {
				let t = e;
				r = `${t.year}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
			} else r = String(e ?? "");
			n.value = r, t?.dispatchEvent(new CustomEvent("change", {
				detail: r,
				bubbles: !0,
				composed: !0
			}));
		}
		return I(() => {}), (e, t) => (z(), V(M(dL), { "onUpdate:modelValue": r }));
	}
}), wL = /* @__PURE__ */ F({
	__name: "Pagination",
	props: {
		page: {},
		defaultPage: {},
		itemsPerPage: {},
		total: {},
		siblingCount: {},
		disabled: { type: Boolean },
		showEdges: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:page"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(sT), K({ "data-slot": "pagination" }, M(i), { class: M($)("mx-auto flex w-full justify-center", n.class) }), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), TL = /* @__PURE__ */ F({
	__name: "PaginationContent",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(fT), K({ "data-slot": "pagination-content" }, M(n), { class: M($)("gap-0.5 flex items-center", t.class) }), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), EL = /* @__PURE__ */ F({
	__name: "PaginationEllipsis",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = J(t, "class");
		return (e, r) => (z(), V(M(iT), K({ "data-slot": "pagination-ellipsis" }, M(n), { class: M($)("size-8 [&_svg:not([class*=size-])]:size-4 flex items-center justify-center", t.class) }), {
			default: N(() => [L(e.$slots, "default", {}, () => [U(M(Uf)), r[0] ||= H("span", { class: "sr-only" }, "More pages", -1)])]),
			_: 3
		}, 16, ["class"]));
	}
}), DL = /* @__PURE__ */ F({
	__name: "PaginationItem",
	props: {
		value: {},
		asChild: { type: Boolean },
		as: {},
		size: { default: "icon" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		isActive: { type: Boolean }
	},
	setup(e) {
		let t = e, n = J(t, "class", "size", "isActive");
		return (r, i) => (z(), V(M(pT), K({ "data-slot": "pagination-item" }, M(n), { class: M($)(M(Jj)({
			variant: e.isActive ? "outline" : "ghost",
			size: e.size
		}), t.class) }), {
			default: N(() => [L(r.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), OL = [
	"href",
	"data-active",
	"aria-current"
], kL = /* @__PURE__ */ F({
	__name: "PaginationLink",
	props: {
		href: {},
		size: { default: "icon" },
		isActive: {
			type: Boolean,
			default: !1
		},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		return (n, r) => (z(), B("a", {
			href: e.href,
			"data-slot": "pagination-link",
			"data-active": e.isActive ? "" : void 0,
			"aria-current": e.isActive ? "page" : void 0,
			class: k(M($)(M(Jj)({
				variant: e.isActive ? "outline" : "ghost",
				size: e.size
			}), "", t.class))
		}, [L(n.$slots, "default")], 10, OL));
	}
}), AL = /* @__PURE__ */ F({
	__name: "PaginationNext",
	props: {
		asChild: { type: Boolean },
		as: {},
		size: { default: "default" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class", "size"));
		return (r, i) => (z(), V(M(mT), K({
			"data-slot": "pagination-next",
			class: M($)(M(Jj)({
				variant: "ghost",
				size: e.size
			}), "pr-1.5!", t.class)
		}, M(n)), {
			default: N(() => [L(r.$slots, "default", {}, () => [i[0] ||= H("span", { class: "hidden sm:block" }, "Next", -1), U(M(zf), {
				"data-icon": "inline-end",
				class: "cn-rtl-flip"
			})])]),
			_: 3
		}, 16, ["class"]));
	}
}), jL = /* @__PURE__ */ F({
	__name: "PaginationPrevious",
	props: {
		asChild: { type: Boolean },
		as: {},
		size: { default: "default" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, n = Kg(J(t, "class", "size"));
		return (r, i) => (z(), V(M(hT), K({
			"data-slot": "pagination-previous",
			class: M($)(M(Jj)({
				variant: "ghost",
				size: e.size
			}), "pl-1.5!", t.class)
		}, M(n)), {
			default: N(() => [L(r.$slots, "default", {}, () => [U(M(Rf), {
				"data-icon": "inline-start",
				class: "cn-rtl-flip"
			}), i[0] ||= H("span", { class: "hidden sm:block" }, "Previous", -1)])]),
			_: 3
		}, 16, ["class"]));
	}
}), ML = /* @__PURE__ */ F({
	__name: "Pagination.ce",
	props: {
		total: { type: Number },
		itemsPerPage: { type: Number },
		defaultPage: { type: Number }
	},
	setup(e) {
		let t = e, n = vl(), r = q(() => t.itemsPerPage ?? 10), i = q(() => Math.max(1, Math.ceil((t.total ?? 0) / r.value))), a = /* @__PURE__ */ j(t.defaultPage ?? 1), o = q(() => {
			let e = i.value, t = a.value;
			if (e <= 7) return Array.from({ length: e }, (e, t) => t + 1);
			let n = [1];
			t > 3 && n.push("ellipsis");
			for (let r = Math.max(2, t - 1); r <= Math.min(e - 1, t + 1); r++) n.push(r);
			return t < e - 2 && n.push("ellipsis"), n.push(e), n;
		});
		function s(e) {
			e < 1 || e > i.value || (a.value = e, n?.dispatchEvent(new CustomEvent("change", {
				detail: { page: e },
				bubbles: !0,
				composed: !0
			})));
		}
		return I(() => {}), (e, t) => (z(), V(M(wL), null, {
			default: N(() => [U(M(TL), null, {
				default: N(() => [
					U(M(DL), null, {
						default: N(() => [U(M(jL), {
							href: void 0,
							onClick: t[0] ||= Xl((e) => s(a.value - 1), ["prevent"]),
							"aria-disabled": a.value <= 1
						}, null, 8, ["aria-disabled"])]),
						_: 1
					}),
					(z(!0), B(R, null, ca(o.value, (e, t) => (z(), B(R, { key: t }, [e === "ellipsis" ? (z(), V(M(DL), { key: 0 }, {
						default: N(() => [U(M(EL))]),
						_: 1
					})) : (z(), V(M(DL), { key: 1 }, {
						default: N(() => [U(M(kL), {
							href: void 0,
							"is-active": e === a.value,
							onClick: Xl((t) => s(e), ["prevent"])
						}, {
							default: N(() => [_s(De(e), 1)]),
							_: 2
						}, 1032, ["is-active", "onClick"])]),
						_: 2
					}, 1024))], 64))), 128)),
					U(M(DL), null, {
						default: N(() => [U(M(AL), {
							href: void 0,
							onClick: t[1] ||= Xl((e) => s(a.value + 1), ["prevent"]),
							"aria-disabled": a.value >= i.value
						}, null, 8, ["aria-disabled"])]),
						_: 1
					})
				]),
				_: 1
			})]),
			_: 1
		}));
	}
}), NL = {
	key: 0,
	class: "bg-border h-6 w-1 rounded-lg z-10 flex shrink-0"
}, PL = /* @__PURE__ */ F({
	__name: "ResizableHandle",
	props: {
		id: {},
		hitAreaMargins: {},
		tabindex: {},
		disabled: { type: Boolean },
		nonce: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		withHandle: { type: Boolean }
	},
	emits: ["dragging"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class", "withHandle"), r);
		return (e, t) => (z(), V(M(pO), K({ "data-slot": "resizable-handle" }, M(i), { class: M($)("relative flex w-px items-center justify-center bg-border ring-offset-background after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90", n.class) }), {
			default: N(() => [n.withHandle ? (z(), B("div", NL, [L(e.$slots, "default")])) : G("", !0)]),
			_: 3
		}, 16, ["class"]));
	}
}), FL = /* @__PURE__ */ F({
	__name: "ResizablePanel",
	props: {
		collapsedSize: {},
		collapsible: { type: Boolean },
		defaultSize: {},
		id: {},
		maxSize: {},
		minSize: {},
		order: {},
		sizeUnit: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: [
		"collapse",
		"expand",
		"resize"
	],
	setup(e, { emit: t }) {
		let n = qg(e, t);
		return Y(), (e, t) => (z(), V(M(dO), K({ "data-slot": "resizable-panel" }, M(n)), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16));
	}
}), IL = /* @__PURE__ */ F({
	__name: "ResizablePanelGroup",
	props: {
		id: {},
		autoSaveId: {},
		direction: {},
		keyboardResizeBy: {},
		storage: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["layout"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class"), r);
		return (e, t) => (z(), V(M(uO), K({ "data-slot": "resizable-panel-group" }, M(i), { class: M($)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", n.class) }), {
			default: N((t) => [L(e.$slots, "default", A(W(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), LL = ["innerHTML"], RL = /* @__PURE__ */ F({
	__name: "Resizable.ce",
	props: { direction: { type: String } },
	setup(e) {
		let t = e, n = vl(), r = n?._light.sections ?? [], i = r.length ? r : n?._light.defaultHtml ? [{
			html: n._light.defaultHtml,
			title: "",
			value: "0",
			disabled: !1
		}] : [];
		return (e, n) => (z(), V(M(IL), {
			direction: t.direction ?? "horizontal",
			class: "min-h-40 max-w-full rounded-lg border"
		}, {
			default: N(() => [(z(!0), B(R, null, ca(M(i), (e, t) => (z(), B(R, { key: t }, [t > 0 ? (z(), V(M(PL), {
				key: 0,
				"with-handle": ""
			})) : G("", !0), U(M(FL), { "default-size": 100 / M(i).length }, {
				default: N(() => [H("div", {
					class: "flex h-full items-start justify-start p-2",
					innerHTML: e.html
				}, null, 8, LL)]),
				_: 2
			}, 1032, ["default-size"])], 64))), 128))]),
			_: 1
		}, 8, ["direction"]));
	}
}), zL = /* @__PURE__ */ F({
	__name: "Toggle",
	props: {
		defaultValue: { type: Boolean },
		modelValue: { type: [Boolean, null] },
		disabled: {
			type: Boolean,
			default: !1
		},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: { default: "default" },
		size: { default: "default" }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = qg(J(n, "class", "size", "variant"), r);
		return (t, r) => (z(), V(M(XO), K({ "data-slot": "toggle" }, M(i), { class: M($)(M(BL)({
			variant: e.variant,
			size: e.size
		}), n.class) }), {
			default: N((e) => [L(t.$slots, "default", A(W(e)))]),
			_: 3
		}, 16, ["class"]));
	}
}), BL = Kj("hover:text-foreground aria-pressed:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[state=on]:bg-muted gap-1 rounded-lg text-sm font-medium transition-all [&_svg:not([class*=size-])]:size-4 group/toggle hover:bg-muted inline-flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border-input hover:bg-muted border bg-transparent"
		},
		size: {
			default: "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			sm: "h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*=size-])]:size-3.5",
			lg: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), VL = ["innerHTML"], HL = ["innerHTML"], UL = /* @__PURE__ */ F({
	__name: "Toggle.ce",
	props: {
		defaultPressed: { type: Boolean },
		variant: { type: String },
		size: { type: String }
	},
	setup(e) {
		let t = e, n = vl(), r = n?._light, i = /* @__PURE__ */ j(t.defaultPressed ?? !1);
		function a(e) {
			i.value = e, n?.dispatchEvent(new CustomEvent("change", {
				detail: { pressed: e },
				bubbles: !0,
				composed: !0
			}));
		}
		return I(() => {}), (e, n) => (z(), V(M(zL), {
			pressed: i.value,
			variant: t.variant ?? "default",
			size: t.size ?? "default",
			"onUpdate:pressed": a
		}, {
			default: N(() => [M(r)?.slots?.default ? (z(), B("span", {
				key: 0,
				innerHTML: M(r).slots.default
			}, null, 8, VL)) : M(r)?.defaultHtml ? (z(), B("span", {
				key: 1,
				innerHTML: M(r).defaultHtml
			}, null, 8, HL)) : G("", !0)]),
			_: 1
		}, 8, [
			"pressed",
			"variant",
			"size"
		]));
	}
}), WL = /* @__PURE__ */ F({
	__name: "ToggleGroup",
	props: {
		rovingFocus: { type: Boolean },
		disabled: { type: Boolean },
		orientation: {},
		dir: {},
		loop: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		type: {},
		modelValue: {},
		defaultValue: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: {},
		size: {},
		spacing: { default: 0 }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		br("toggleGroup", {
			variant: n.variant,
			size: n.size,
			spacing: n.spacing
		});
		let i = qg(J(n, "class", "size", "variant"), r);
		return (t, r) => (z(), V(M(YO), K({
			"data-slot": "toggle-group",
			"data-size": e.size,
			"data-variant": e.variant,
			"data-spacing": e.spacing,
			style: { "--gap": e.spacing }
		}, M(i), { class: M($)("rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] data-vertical:flex-col data-vertical:items-stretch", n.class) }), {
			default: N((e) => [L(t.$slots, "default", A(W(e)))]),
			_: 3
		}, 16, [
			"data-size",
			"data-variant",
			"data-spacing",
			"style",
			"class"
		]));
	}
}), GL = /* @__PURE__ */ F({
	__name: "ToggleGroupItem",
	props: {
		value: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		variant: {},
		size: {}
	},
	setup(e) {
		let t = e, n = xr("toggleGroup"), r = Kg(J(t, "class", "size", "variant"));
		return (i, a) => (z(), V(M(ZO), K({
			"data-slot": "toggle-group-item",
			"data-variant": M(n)?.variant || e.variant,
			"data-size": M(n)?.size || e.size,
			"data-spacing": M(n)?.spacing
		}, M(r), { class: M($)("group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg shrink-0 focus:z-10 focus-visible:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t", M(BL)({
			variant: M(n)?.variant || e.variant,
			size: M(n)?.size || e.size
		}), t.class) }), {
			default: N((e) => [L(i.$slots, "default", A(W(e)))]),
			_: 3
		}, 16, [
			"data-variant",
			"data-size",
			"data-spacing",
			"class"
		]));
	}
}), KL = /* @__PURE__ */ F({
	__name: "ToggleGroup.ce",
	props: {
		type: { type: String },
		variant: { type: String },
		size: { type: String },
		value: { type: String }
	},
	setup(e) {
		let t = e, n = vl(), r = n?._light.options ?? [], i = /* @__PURE__ */ j(t.value ?? ""), a = /* @__PURE__ */ j(t.value ? t.value.split(",").map((e) => e.trim()) : []);
		function o(e) {
			let t = e == null ? "" : String(e);
			i.value = t, n?.dispatchEvent(new CustomEvent("change", {
				detail: { value: t },
				bubbles: !0,
				composed: !0
			}));
		}
		function s(e) {
			let t = Array.isArray(e) ? e.map(String) : [];
			a.value = t, n?.dispatchEvent(new CustomEvent("change", {
				detail: { value: t },
				bubbles: !0,
				composed: !0
			}));
		}
		return I(() => {}), (e, n) => (t.type ?? "single") === "single" ? (z(), V(M(WL), {
			key: 0,
			type: "single",
			"model-value": i.value,
			variant: t.variant,
			size: t.size,
			"onUpdate:modelValue": o
		}, {
			default: N(() => [(z(!0), B(R, null, ca(M(r), (e) => (z(), V(M(GL), {
				key: e.value,
				value: e.value,
				disabled: e.disabled
			}, {
				default: N(() => [_s(De(e.label), 1)]),
				_: 2
			}, 1032, ["value", "disabled"]))), 128))]),
			_: 1
		}, 8, [
			"model-value",
			"variant",
			"size"
		])) : (z(), V(M(WL), {
			key: 1,
			type: "multiple",
			"model-value": a.value,
			variant: t.variant,
			size: t.size,
			"onUpdate:modelValue": s
		}, {
			default: N(() => [(z(!0), B(R, null, ca(M(r), (e) => (z(), V(M(GL), {
				key: e.value,
				value: e.value,
				disabled: e.disabled
			}, {
				default: N(() => [_s(De(e.label), 1)]),
				_: 2
			}, 1032, ["value", "disabled"]))), 128))]),
			_: 1
		}, 8, [
			"model-value",
			"variant",
			"size"
		]));
	}
}), qL = /* @__PURE__ */ F({
	__name: "Sonner",
	props: {
		id: {},
		invert: { type: Boolean },
		theme: {},
		position: {},
		closeButtonPosition: {},
		hotkey: {},
		richColors: { type: Boolean },
		expand: { type: Boolean },
		duration: {},
		gap: {},
		visibleToasts: {},
		closeButton: { type: Boolean },
		toastOptions: {},
		class: {},
		style: {},
		offset: {},
		mobileOffset: {},
		dir: {},
		swipeDirections: {},
		icons: {},
		containerAriaLabel: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (z(), V(M(ld), K({
			class: M($)("toaster group", t.class),
			style: {
				"--normal-bg": "var(--popover)",
				"--normal-text": "var(--popover-foreground)",
				"--normal-border": "var(--border)",
				"--border-radius": "var(--radius)"
			},
			"toast-options": { classes: { toast: "rounded-2xl" } }
		}, t), {
			"success-icon": N(() => [U(M(Vf), { class: "size-4" })]),
			"info-icon": N(() => [U(M(Wf), { class: "size-4" })]),
			"warning-icon": N(() => [U(M(Zf), { class: "size-4" })]),
			"error-icon": N(() => [U(M(qf), { class: "size-4" })]),
			"loading-icon": N(() => [H("div", null, [U(M(Gf), { class: "size-4 animate-spin" })])]),
			"close-icon": N(() => [U(M(Qf), { class: "size-4" })]),
			_: 1
		}, 16, ["class"]));
	}
}), JL = /* @__PURE__ */ F({
	__name: "Sonner.ce",
	props: {
		position: { type: String },
		richColors: { type: Boolean }
	},
	setup(e) {
		return (t, n) => (z(), V(M(qL), {
			position: e.position ?? "bottom-right",
			"rich-colors": e.richColors
		}, null, 8, ["position", "rich-colors"]));
	}
}), YL = "sidebar_state", XL = 3600 * 24 * 7, ZL = "16rem", QL = "18rem", $L = "3rem", [eR, tR] = cp("Sidebar"), nR = { class: "flex h-full w-full flex-col" }, rR = [
	"data-state",
	"data-collapsible",
	"data-variant",
	"data-side"
], iR = ["data-side"], aR = {
	"data-sidebar": "sidebar",
	"data-slot": "sidebar-inner",
	class: "bg-sidebar group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 flex size-full flex-col"
}, oR = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "Sidebar",
	props: {
		side: { default: "left" },
		variant: { default: "sidebar" },
		collapsible: { default: "offcanvas" },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e, { isMobile: n, state: r, openMobile: i, setOpenMobile: a } = eR();
		return (o, s) => e.collapsible === "none" ? (z(), B("div", K({
			key: 0,
			"data-slot": "sidebar",
			class: M($)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
		}, o.$attrs), [L(o.$slots, "default")], 16)) : M(n) ? (z(), V(M(gP), K({
			key: 1,
			open: M(i)
		}, o.$attrs, { "onUpdate:open": M(a) }), {
			default: N(() => [U(M(vP), {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar",
				"data-mobile": "true",
				side: e.side,
				class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
				style: he({ "--sidebar-width": M(QL) })
			}, {
				default: N(() => [U(xP, { class: "sr-only" }, {
					default: N(() => [U(SP, null, {
						default: N(() => [...s[0] ||= [_s("Sidebar", -1)]]),
						_: 1
					}), U(yP, null, {
						default: N(() => [...s[1] ||= [_s("Displays the mobile sidebar.", -1)]]),
						_: 1
					})]),
					_: 1
				}), H("div", nR, [L(o.$slots, "default")])]),
				_: 3
			}, 8, ["side", "style"])]),
			_: 3
		}, 16, ["open", "onUpdate:open"])) : (z(), B("div", {
			key: 2,
			class: "group peer text-sidebar-foreground hidden md:block",
			"data-slot": "sidebar",
			"data-state": M(r),
			"data-collapsible": M(r) === "collapsed" ? e.collapsible : "",
			"data-variant": e.variant,
			"data-side": e.side
		}, [H("div", {
			"data-slot": "sidebar-gap",
			class: k(M($)("transition-[width] duration-200 ease-linear relative w-(--sidebar-width) bg-transparent", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"))
		}, null, 2), H("div", K({
			"data-slot": "sidebar-container",
			"data-side": e.side,
			class: M($)("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", t.class)
		}, o.$attrs), [H("div", aR, [L(o.$slots, "default")])], 16, iR)], 8, rR));
	}
}), sR = /* @__PURE__ */ F({
	__name: "SidebarContent",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "sidebar-content",
			"data-sidebar": "content",
			class: k(M($)("no-scrollbar gap-0 flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), cR = /* @__PURE__ */ F({
	__name: "SidebarFooter",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "sidebar-footer",
			"data-sidebar": "footer",
			class: k(M($)("gap-2 p-2 flex flex-col", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), lR = /* @__PURE__ */ F({
	__name: "SidebarGroup",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "sidebar-group",
			"data-sidebar": "group",
			class: k(M($)("p-2 relative flex w-full min-w-0 flex-col", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), uR = /* @__PURE__ */ F({
	__name: "SidebarGroupContent",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "sidebar-group-content",
			"data-sidebar": "group-content",
			class: k(M($)("text-sm w-full", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), dR = /* @__PURE__ */ F({
	__name: "SidebarGroupLabel",
	props: {
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(e) {
		let t = e;
		return (n, r) => (z(), V(M(X), {
			"data-slot": "sidebar-group-label",
			"data-sidebar": "group-label",
			as: e.as,
			"as-child": e.asChild,
			class: k(M($)("text-sidebar-foreground/70 ring-sidebar-ring h-8 rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 flex shrink-0 items-center outline-hidden [&>svg]:shrink-0", t.class))
		}, {
			default: N(() => [L(n.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class"
		]));
	}
}), fR = /* @__PURE__ */ F({
	__name: "SidebarHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("div", {
			"data-slot": "sidebar-header",
			"data-sidebar": "header",
			class: k(M($)("gap-2 p-2 flex flex-col", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), pR = /* @__PURE__ */ F({
	__name: "SidebarInset",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("main", {
			"data-slot": "sidebar-inset",
			class: k(M($)("bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 relative flex w-full flex-1 flex-col", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), mR = /* @__PURE__ */ F({
	__name: "SidebarMenu",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("ul", {
			"data-slot": "sidebar-menu",
			"data-sidebar": "menu",
			class: k(M($)("gap-0 flex w-full min-w-0 flex-col", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), hR = /* @__PURE__ */ F({
	__name: "SidebarMenuButtonChild",
	props: {
		variant: { default: "default" },
		size: { default: "default" },
		isActive: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		asChild: { type: Boolean },
		as: { default: "button" }
	},
	setup(e) {
		let t = e;
		return (n, r) => (z(), V(M(X), K({
			"data-slot": "sidebar-menu-button",
			"data-sidebar": "menu-button",
			"data-size": e.size,
			"data-active": e.isActive,
			class: M($)(M(bR)({
				variant: e.variant,
				size: e.size
			}), t.class),
			as: e.as,
			"as-child": e.asChild
		}, n.$attrs), {
			default: N(() => [L(n.$slots, "default")]),
			_: 3
		}, 16, [
			"data-size",
			"data-active",
			"class",
			"as",
			"as-child"
		]));
	}
}), gR = /* @__PURE__ */ F({
	inheritAttrs: !1,
	__name: "SidebarMenuButton",
	props: {
		variant: { default: "default" },
		size: { default: "default" },
		isActive: { type: Boolean },
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] },
		asChild: { type: Boolean },
		as: { default: "button" },
		tooltip: {}
	},
	setup(e) {
		let t = e, { isMobile: n, state: r } = eR(), i = J(t, "tooltip");
		return (t, a) => e.tooltip ? (z(), V(M(zP), { key: 1 }, {
			default: N(() => [U(M(HP), { "as-child": "" }, {
				default: N(() => [U(hR, A(W({
					...M(i),
					...t.$attrs
				})), {
					default: N(() => [L(t.$slots, "default")]),
					_: 3
				}, 16)]),
				_: 3
			}), U(M(BP), {
				side: "right",
				align: "center",
				hidden: M(r) !== "collapsed" || M(n)
			}, {
				default: N(() => [typeof e.tooltip == "string" ? (z(), B(R, { key: 0 }, [_s(De(e.tooltip), 1)], 64)) : (z(), V(ia(e.tooltip), { key: 1 }))]),
				_: 1
			}, 8, ["hidden"])]),
			_: 3
		})) : (z(), V(hR, A(K({ key: 0 }, {
			...M(i),
			...t.$attrs
		})), {
			default: N(() => [L(t.$slots, "default")]),
			_: 3
		}, 16));
	}
}), _R = /* @__PURE__ */ F({
	__name: "SidebarMenuItem",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (z(), B("li", {
			"data-slot": "sidebar-menu-item",
			"data-sidebar": "menu-item",
			class: k(M($)("group/menu-item relative", t.class))
		}, [L(e.$slots, "default")], 2));
	}
}), vR = /* @__PURE__ */ F({
	__name: "SidebarProvider",
	props: {
		defaultOpen: {
			type: Boolean,
			default: !of?.cookie.includes(`${YL}=false`)
		},
		open: {
			type: Boolean,
			default: void 0
		},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = vf("(max-width: 768px)"), a = /* @__PURE__ */ j(!1), o = Ef(n, "open", r, {
			defaultValue: n.defaultOpen ?? !1,
			passive: n.open === void 0
		});
		function s(e) {
			o.value = e, document.cookie = `${YL}=${o.value}; path=/; max-age=${XL}`;
		}
		function c(e) {
			a.value = e;
		}
		function l() {
			return i.value ? c(!a.value) : s(!o.value);
		}
		return cf("keydown", (e) => {
			e.key === "b" && (e.metaKey || e.ctrlKey) && (e.preventDefault(), l());
		}), tR({
			state: q(() => o.value ? "expanded" : "collapsed"),
			open: o,
			setOpen: s,
			isMobile: i,
			openMobile: a,
			setOpenMobile: c,
			toggleSidebar: l
		}), (e, t) => (z(), V(M(tk), { "delay-duration": 0 }, {
			default: N(() => [H("div", K({
				"data-slot": "sidebar-wrapper",
				style: {
					"--sidebar-width": M(ZL),
					"--sidebar-width-icon": M($L)
				},
				class: M($)("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", n.class)
			}, e.$attrs), [L(e.$slots, "default")], 16)]),
			_: 3
		}));
	}
}), yR = /* @__PURE__ */ F({
	__name: "SidebarTrigger",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e, { toggleSidebar: n } = eR();
		return (e, r) => (z(), V(M(qj), {
			"data-sidebar": "trigger",
			"data-slot": "sidebar-trigger",
			variant: "ghost",
			size: "icon-sm",
			class: k(M($)("", t.class)),
			onClick: M(n)
		}, {
			default: N(() => [U(M(Jf), { class: "cn-rtl-flip" }), r[0] ||= H("span", { class: "sr-only" }, "Toggle Sidebar", -1)]),
			_: 1
		}, 8, ["class", "onClick"]));
	}
}), bR = Kj("ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground gap-2 rounded-md p-2 text-left text-sm transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 data-active:font-medium peer/menu-button group/menu-button flex w-full items-center overflow-hidden outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate", {
	variants: {
		variant: {
			default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
			outline: "bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_var(--sidebar-border)] hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
		},
		size: {
			default: "h-8 text-sm",
			sm: "h-7 text-xs",
			lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), xR = { class: "flex h-12 items-center gap-2 border-b px-4" }, SR = ["innerHTML"], CR = /* @__PURE__ */ F({
	__name: "Sidebar.ce",
	props: {
		side: { type: String },
		variant: { type: String },
		collapsible: { type: String }
	},
	setup(e) {
		let t = e, n = vl(), r = n?._light, i = r?.slots ?? {}, a = (r?.sections ?? []).map((e) => {
			let t = document.createElement("template");
			t.innerHTML = e.html;
			let n = [...t.content.querySelectorAll("option")].map((e) => ({
				value: e.getAttribute("value") ?? e.textContent?.trim() ?? "",
				label: e.textContent?.trim() ?? "",
				disabled: e.hasAttribute("disabled")
			}));
			return {
				title: e.title,
				items: n
			};
		});
		function o(e) {
			n?.dispatchEvent(new CustomEvent("navigate", { detail: { value: e } }));
		}
		return (e, n) => (z(), V(M(vR), null, {
			default: N(() => [U(M(oR), {
				side: t.side ?? "left",
				variant: t.variant ?? "sidebar",
				collapsible: t.collapsible ?? "offcanvas"
			}, {
				default: N(() => [
					M(i).header ? (z(), V(M(fR), {
						key: 0,
						innerHTML: M(i).header
					}, null, 8, ["innerHTML"])) : G("", !0),
					U(M(sR), null, {
						default: N(() => [(z(!0), B(R, null, ca(M(a), (e, t) => (z(), V(M(lR), { key: t }, {
							default: N(() => [e.title ? (z(), V(M(dR), { key: 0 }, {
								default: N(() => [_s(De(e.title), 1)]),
								_: 2
							}, 1024)) : G("", !0), U(M(uR), null, {
								default: N(() => [U(M(mR), null, {
									default: N(() => [(z(!0), B(R, null, ca(e.items, (e, t) => (z(), V(M(_R), { key: t }, {
										default: N(() => [U(M(gR), {
											disabled: e.disabled,
											onClick: (t) => o(e.value)
										}, {
											default: N(() => [H("span", null, De(e.label), 1)]),
											_: 2
										}, 1032, ["disabled", "onClick"])]),
										_: 2
									}, 1024))), 128))]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1024)]),
							_: 2
						}, 1024))), 128))]),
						_: 1
					}),
					M(i).footer ? (z(), V(M(cR), {
						key: 1,
						innerHTML: M(i).footer
					}, null, 8, ["innerHTML"])) : G("", !0)
				]),
				_: 1
			}, 8, [
				"side",
				"variant",
				"collapsible"
			]), U(M(pR), null, {
				default: N(() => [H("header", xR, [U(M(yR))]), H("div", {
					class: "p-4",
					innerHTML: M(i).content || M(r)?.defaultHtml || ""
				}, null, 8, SR)]),
				_: 1
			})]),
			_: 1
		}));
	}
});
pd(HA, "go-checkbox"), pd(KA, "go-switch"), pd(JA, "go-input"), pd(XA, "go-textarea"), pd($A, "go-slider"), pd(rj, "go-radio-group"), pd(fj, "go-select"), pd(vj, "go-number-field"), pd(Sj, "go-pin-input"), pd(Oj, "go-tags-input"), md(Ij, "go-card"), md(Hj, "go-accordion"), md(iM, "go-dialog"), md(lM, "go-alert"), md(fM, "go-aspect-ratio"), md(vM, "go-avatar"), md(SM, "go-badge"), md(kM, "go-breadcrumb"), md(jM, "go-separator"), md(NM, "go-skeleton"), md(FM, "go-button"), md(LM, "go-progress"), md(RM, "go-label"), md(UM, "go-input-group"), md(KM, "go-scroll-area"), md(YM, "go-table"), md(nN, "go-tabs"), md(cN, "go-collapsible"), md(_N, "go-stepper"), md(DN, "go-alert-dialog"), md(hP, "go-drawer"), md(EP, "go-sheet"), md(MP, "go-popover"), md(RP, "go-hover-card"), md(GP, "go-tooltip"), md(ZP, "go-dropdown-menu"), md(rF, "go-context-menu"), md(lF, "go-menubar"), md(xF, "go-navigation-menu"), md(PF, "go-command"), md(YI, "go-carousel"), md(CL, "go-calendar"), md(ML, "go-pagination"), md(RL, "go-resizable"), md(UL, "go-toggle"), md(KL, "go-toggle-group"), md(JL, "go-toaster"), md(CR, "go-sidebar"), globalThis.goToast = vu;
//#endregion
