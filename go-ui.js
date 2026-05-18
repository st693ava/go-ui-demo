import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, H as c, I as l, J as u, K as d, L as f, M as p, N as m, O as h, P as g, Q as _, R as v, S as y, T as b, U as x, V as S, W as C, X as w, Y as T, Z as ee, _ as E, _t as D, a as te, at as O, b as ne, c as k, ct as re, d as ie, dt as A, et as j, f as ae, ft as oe, g as M, gt as N, h as P, ht as F, i as se, it as ce, j as le, k as I, l as ue, lt as de, m as L, mt as fe, n as pe, nt as me, o as he, ot as ge, p as R, pt as z, q as _e, r as ve, rt as ye, s as be, st as xe, t as Se, tt as Ce, u as B, ut as we, v as V, vt as H, w as Te, x as U, y as W, yt as Ee, z as De } from "./go-ui-vue.runtime.esm-bundler-Duu92TUG.js";
//#region node_modules/vue-sonner/lib/index.js
var Oe = 1, ke = new class {
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
		let { message: t, ...n } = e, r = typeof e.id == "number" || e.id && e.id?.length > 0 ? e.id : Oe++, i = this.toasts.find((e) => e.id === r), a = e.dismissible === void 0 ? !0 : e.dismissible;
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
		let r = Promise.resolve(e instanceof Function ? e() : e), a = n !== void 0, o, s = r.then(async (e) => {
			if (o = ["resolve", e], i(e)) a = !1, this.create({
				id: n,
				type: "default",
				message: e
			});
			else if (je(e) && !e.ok) {
				a = !1;
				let r = typeof t.error == "function" ? await t.error(`HTTP error! status: ${e.status}`) : t.error, o = typeof t.description == "function" ? await t.description(`HTTP error! status: ${e.status}`) : t.description, s = typeof r == "object" && !i(r) ? r : {
					message: r || "",
					id: n || ""
				};
				this.create({
					id: n,
					type: "error",
					description: o,
					...s
				});
			} else if (e instanceof Error) {
				a = !1;
				let r = typeof t.error == "function" ? await t.error(e) : t.error, o = typeof t.description == "function" ? await t.description(e) : t.description, s = typeof r == "object" && !i(r) ? r : {
					message: r || "",
					id: n || ""
				};
				this.create({
					id: n,
					type: "error",
					description: o,
					...s
				});
			} else if (t.success !== void 0) {
				a = !1;
				let r = typeof t.success == "function" ? await t.success(e) : t.success, o = typeof t.description == "function" ? await t.description(e) : t.description, s = typeof r == "object" && !i(r) ? r : {
					message: r || "",
					id: n || ""
				};
				this.create({
					id: n,
					type: "success",
					description: o,
					...s
				});
			}
		}).catch(async (e) => {
			if (o = ["reject", e], t.error !== void 0) {
				a = !1;
				let r = typeof t.error == "function" ? await t.error(e) : t.error, o = typeof t.description == "function" ? await t.description(e) : t.description, s = typeof r == "object" && !i(r) ? r : {
					message: r || "",
					id: n || ""
				};
				this.create({
					id: n,
					type: "error",
					description: o,
					...s
				});
			}
		}).finally(() => {
			a && (this.dismiss(n), n = void 0), t.finally?.();
		}), c = () => new Promise((e, t) => s.then(() => o[0] === "reject" ? t(o[1]) : e(o[1])).catch(t));
		return typeof n != "string" && typeof n != "number" ? { unwrap: c } : Object.assign(n, { unwrap: c });
	};
	custom = (e, t) => {
		let n = t?.id || Oe++, r = this.toasts.find((e) => e.id === n), i = t?.dismissible === void 0 ? !0 : t.dismissible;
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
function Ae(e, t) {
	let n = t?.id || Oe++;
	return ke.create({
		message: e,
		id: n,
		type: "default",
		...t
	}), n;
}
var je = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Me = Object.assign(Ae, {
	success: ke.success,
	info: ke.info,
	warning: ke.warning,
	error: ke.error,
	custom: ke.custom,
	message: ke.message,
	promise: ke.promise,
	dismiss: ke.dismiss,
	loading: ke.loading
}, {
	getHistory: () => ke.toasts,
	getToasts: () => ke.getActiveToasts()
});
function Ne(e) {
	return e.label !== void 0;
}
var Pe = 3, Fe = "24px", Ie = "16px", Le = 4e3, Re = 356, ze = 14, Be = 45, Ve = 200;
function He() {
	let e = O(!1);
	return s(() => {
		let t = () => {
			e.value = document.hidden;
		};
		return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
	}), { isDocumentHidden: e };
}
function Ue(...e) {
	return e.filter(Boolean).join(" ");
}
function We(e) {
	let [t, n] = e.split("-"), r = [];
	return t && r.push(t), n && r.push(n), r;
}
function Ge(e, t) {
	let n = {};
	return [e, t].forEach((e, t) => {
		let r = t === 1, i = r ? "--mobile-offset" : "--offset", a = r ? Ie : Fe;
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
var Ke = [
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
], qe = [
	"aria-label",
	"data-disabled",
	"data-close-button-position"
], Je = /* @__PURE__ */ U({
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
	setup(e, { emit: n }) {
		let r = e, i = n, a = O(null), c = O(null), l = O(!1), u = O(!1), d = O(!1), f = O(!1), m = O(!1), h = O(0), g = O(0), _ = O(r.toast.duration || r.duration || Le), y = O(null), b = O(null), x = R(() => r.index === 0), S = R(() => r.index + 1 <= r.visibleToasts), w = R(() => r.toast.type), T = R(() => r.toast.dismissible !== !1), ee = R(() => r.toast.class || ""), te = R(() => r.descriptionClass || ""), ne = R(() => {
			let e = r.toast.position || r.position, t = r.heights.filter((t) => t.position === e).findIndex((e) => e.toastId === r.toast.id);
			return t >= 0 ? t : 0;
		}), k = R(() => {
			let e = r.toast.position || r.position;
			return r.heights.filter((t) => t.position === e).reduce((e, t, n) => n >= ne.value ? e : e + t.height, 0);
		}), re = R(() => ne.value * r.gap + k.value || 0), ie = R(() => r.toast.closeButton ?? r.closeButton), A = R(() => r.toast.duration || r.duration || Le), j = O(0), ae = O(0), oe = O(null), se = R(() => r.position.split("-")), ce = R(() => se.value[0]), ue = R(() => se.value[1]), de = R(() => typeof r.toast.title != "string"), fe = R(() => typeof r.toast.description != "string"), { isDocumentHidden: pe } = He(), me = R(() => w.value && w.value === "loading");
		p(() => {
			l.value = !0, _.value = A.value;
		}), s(async () => {
			if (!l.value || !b.value) return;
			await t();
			let e = b.value, n = e.style.height;
			e.style.height = "auto";
			let a = e.getBoundingClientRect().height;
			e.style.height = n, g.value = a, i("update:height", {
				toastId: r.toast.id,
				height: a,
				position: r.toast.position || r.position
			});
		});
		function he() {
			u.value = !0, h.value = re.value, setTimeout(() => {
				i("removeToast", r.toast);
			}, Ve);
		}
		function ge() {
			if (me.value || !T.value) return {};
			he(), r.toast.onDismiss?.(r.toast);
		}
		function _e(e) {
			e.button !== 2 && (me.value || !T.value || (y.value = /* @__PURE__ */ new Date(), h.value = re.value, e.target.setPointerCapture(e.pointerId), e.target.tagName !== "BUTTON" && (d.value = !0, oe.value = {
				x: e.clientX,
				y: e.clientY
			})));
		}
		function ve() {
			if (f.value || !T.value) return;
			oe.value = null;
			let e = Number(b.value?.style.getPropertyValue("--swipe-amount-x").replace("px", "") || 0), t = Number(b.value?.style.getPropertyValue("--swipe-amount-y").replace("px", "") || 0), n = (/* @__PURE__ */ new Date()).getTime() - (y.value?.getTime() || 0), i = a.value === "x" ? e : t, o = Math.abs(i) / n;
			if (Math.abs(i) >= Be || o > .11) {
				h.value = re.value, r.toast.onDismiss?.(r.toast), a.value === "x" ? c.value = e > 0 ? "right" : "left" : c.value = t > 0 ? "down" : "up", he(), f.value = !0;
				return;
			} else b.value?.style.setProperty("--swipe-amount-x", "0px"), b.value?.style.setProperty("--swipe-amount-y", "0px");
			m.value = !1, d.value = !1, a.value = null;
		}
		function ye(e) {
			if (!oe.value || !T.value || (window?.getSelection()?.toString()?.length ?? !1)) return;
			let t = e.clientY - oe.value.y, n = e.clientX - oe.value.x, i = r.swipeDirections ?? We(r.position);
			!a.value && (Math.abs(n) > 1 || Math.abs(t) > 1) && (a.value = Math.abs(n) > Math.abs(t) ? "x" : "y");
			let o = {
				x: 0,
				y: 0
			}, s = (e) => 1 / (1.5 + Math.abs(e) / 20);
			if (a.value === "y") {
				if (i.includes("top") || i.includes("bottom")) if (i.includes("top") && t < 0 || i.includes("bottom") && t > 0) o.y = t;
				else {
					let e = t * s(t);
					o.y = Math.abs(e) < Math.abs(t) ? e : t;
				}
			} else if (a.value === "x" && (i.includes("left") || i.includes("right"))) if (i.includes("left") && n < 0 || i.includes("right") && n > 0) o.x = n;
			else {
				let e = n * s(n);
				o.x = Math.abs(e) < Math.abs(n) ? e : n;
			}
			(Math.abs(o.x) > 0 || Math.abs(o.y) > 0) && (m.value = !0), b.value?.style.setProperty("--swipe-amount-x", `${o.x}px`), b.value?.style.setProperty("--swipe-amount-y", `${o.y}px`);
		}
		p(() => {
			if (l.value = !0, !b.value) return;
			let e = b.value.getBoundingClientRect().height;
			g.value = e, i("update:heights", [{
				toastId: r.toast.id,
				height: e,
				position: r.toast.position
			}, ...r.heights]);
		}), le(() => {
			b.value && i("removeToast", r.toast);
		}), s((e) => {
			if (r.toast.promise && w.value === "loading" || r.toast.duration === Infinity || r.toast.type === "loading") return;
			let t;
			r.expanded || r.interacting || pe.value ? (() => {
				if (ae.value < j.value) {
					let e = (/* @__PURE__ */ new Date()).getTime() - j.value;
					_.value -= e;
				}
				ae.value = (/* @__PURE__ */ new Date()).getTime();
			})() : _.value !== Infinity && (j.value = (/* @__PURE__ */ new Date()).getTime(), t = setTimeout(() => {
				r.toast.onAutoClose?.(r.toast), he();
			}, _.value)), e(() => {
				clearTimeout(t);
			});
		}), C(() => r.toast.delete, (e) => {
			e !== void 0 && e && (he(), r.toast.onDismiss?.(r.toast));
		}, { deep: !0 });
		function be() {
			d.value = !1, a.value = null, oe.value = null;
		}
		return (e, t) => (o(), E("li", {
			tabindex: "0",
			ref_key: "toastRef",
			ref: b,
			class: F(z(Ue)(r.class, ee.value, e.classes?.toast, e.toast.classes?.toast, e.classes?.[w.value], e.toast?.classes?.[w.value])),
			"data-sonner-toast": "",
			"data-rich-colors": e.toast.richColors ?? e.defaultRichColors,
			"data-styled": !(e.toast.component || e.toast?.unstyled || e.unstyled),
			"data-mounted": l.value,
			"data-promise": !!e.toast.promise,
			"data-swiped": m.value,
			"data-removed": u.value,
			"data-visible": S.value,
			"data-y-position": ce.value,
			"data-x-position": ue.value,
			"data-index": e.index,
			"data-front": x.value,
			"data-swiping": d.value,
			"data-dismissible": T.value,
			"data-type": w.value,
			"data-invert": e.toast.invert || e.invert,
			"data-swipe-out": f.value,
			"data-swipe-direction": c.value,
			"data-expanded": !!(e.expanded || e.expandByDefault && l.value),
			"data-testid": e.toast.testId,
			style: D({
				"--index": e.index,
				"--toasts-before": e.index,
				"--z-index": e.toasts.length - e.index,
				"--offset": `${u.value ? h.value : re.value}px`,
				"--initial-height": e.expandByDefault ? "auto" : `${g.value}px`,
				...e.style,
				...r.toast.style
			}),
			onDragend: be,
			onPointerdown: _e,
			onPointerup: ve,
			onPointermove: ye
		}, [ie.value && !e.toast.component && w.value !== "loading" ? (o(), E("button", {
			key: 0,
			"aria-label": e.closeButtonAriaLabel || "Close toast",
			"data-disabled": me.value,
			"data-close-button": "true",
			"data-close-button-position": e.closeButtonPosition,
			class: F(z(Ue)(e.classes?.closeButton, e.toast?.classes?.closeButton)),
			onClick: ge
		}, [e.icons?.close ? (o(), P(De(e.icons?.close), { key: 0 })) : v(e.$slots, "close-icon", { key: 1 })], 10, qe)) : M("v-if", !0), e.toast.component ? (o(), P(De(e.toast.component), I({ key: 1 }, e.toast.componentProps, {
			onCloseToast: ge,
			isPaused: e.$props.expanded || e.$props.interacting || z(pe)
		}), null, 16, ["isPaused"])) : (o(), E(B, { key: 2 }, [
			w.value !== "default" || e.toast.icon || e.toast.promise ? (o(), E("div", {
				key: 0,
				"data-icon": "",
				class: F(z(Ue)(e.classes?.icon, e.toast?.classes?.icon))
			}, [e.toast.icon ? (o(), P(De(e.toast.icon), { key: 0 })) : (o(), E(B, { key: 1 }, [w.value === "loading" ? v(e.$slots, "loading-icon", { key: 0 }) : w.value === "success" ? v(e.$slots, "success-icon", { key: 1 }) : w.value === "error" ? v(e.$slots, "error-icon", { key: 2 }) : w.value === "warning" ? v(e.$slots, "warning-icon", { key: 3 }) : w.value === "info" ? v(e.$slots, "info-icon", { key: 4 }) : M("v-if", !0)], 64))], 2)) : M("v-if", !0),
			L("div", {
				"data-content": "",
				class: F(z(Ue)(e.classes?.content, e.toast?.classes?.content))
			}, [L("div", {
				"data-title": "",
				class: F(z(Ue)(e.classes?.title, e.toast.classes?.title))
			}, [de.value ? (o(), P(De(e.toast.title), N(I({ key: 0 }, e.toast.componentProps)), null, 16)) : (o(), E(B, { key: 1 }, [V(H(e.toast.title), 1)], 64))], 2), e.toast.description ? (o(), E("div", {
				key: 0,
				"data-description": "",
				class: F(z(Ue)(e.descriptionClass, te.value, e.classes?.description, e.toast.classes?.description))
			}, [fe.value ? (o(), P(De(e.toast.description), N(I({ key: 0 }, e.toast.componentProps)), null, 16)) : (o(), E(B, { key: 1 }, [V(H(e.toast.description), 1)], 64))], 2)) : M("v-if", !0)], 2),
			e.toast.cancel ? (o(), E("button", {
				key: 1,
				style: D(e.toast.cancelButtonStyle || e.cancelButtonStyle),
				class: F(z(Ue)(e.classes?.cancelButton, e.toast.classes?.cancelButton)),
				"data-button": "",
				"data-cancel": "",
				onClick: t[0] ||= (t) => {
					z(Ne)(e.toast.cancel) && T.value && (e.toast.cancel.onClick?.(t), he());
				}
			}, H(z(Ne)(e.toast.cancel) ? e.toast.cancel?.label : e.toast.cancel), 7)) : M("v-if", !0),
			e.toast.action ? (o(), E("button", {
				key: 2,
				style: D(e.toast.actionButtonStyle || e.actionButtonStyle),
				class: F(z(Ue)(e.classes?.actionButton, e.toast.classes?.actionButton)),
				"data-button": "",
				"data-action": "",
				onClick: t[1] ||= (t) => {
					z(Ne)(e.toast.action) && (e.toast.action.onClick?.(t), !t.defaultPrevented && he());
				}
			}, H(z(Ne)(e.toast.action) ? e.toast.action?.label : e.toast.action), 7)) : M("v-if", !0)
		], 64))], 46, Ke));
	}
}), Ye = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Xe = {}, Ze = {
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
function Qe(e, t) {
	return o(), E("svg", Ze, t[0] ||= [L("line", {
		x1: "18",
		y1: "6",
		x2: "6",
		y2: "18"
	}, null, -1), L("line", {
		x1: "6",
		y1: "6",
		x2: "18",
		y2: "18"
	}, null, -1)]);
}
var $e = /* @__PURE__ */ Ye(Xe, [["render", Qe]]), et = ["data-visible"], tt = { class: "sonner-spinner" }, nt = /* @__PURE__ */ U({
	__name: "Loader",
	props: { visible: { type: Boolean } },
	setup(e) {
		let t = Array(12).fill(0);
		return (e, n) => (o(), E("div", {
			class: "sonner-loading-wrapper",
			"data-visible": e.visible
		}, [L("div", tt, [(o(!0), E(B, null, f(z(t), (e) => (o(), E("div", {
			key: `spinner-bar-${e}`,
			class: "sonner-loading-bar"
		}))), 128))])], 8, et));
	}
}), rt = {}, it = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function at(e, t) {
	return o(), E("svg", it, t[0] ||= [L("path", {
		"fill-rule": "evenodd",
		d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var ot = /* @__PURE__ */ Ye(rt, [["render", at]]), st = {}, ct = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function lt(e, t) {
	return o(), E("svg", ct, t[0] ||= [L("path", {
		"fill-rule": "evenodd",
		d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var ut = /* @__PURE__ */ Ye(st, [["render", lt]]), dt = {}, ft = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function pt(e, t) {
	return o(), E("svg", ft, t[0] ||= [L("path", {
		"fill-rule": "evenodd",
		d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var mt = /* @__PURE__ */ Ye(dt, [["render", pt]]), ht = {}, gt = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function _t(e, t) {
	return o(), E("svg", gt, t[0] ||= [L("path", {
		"fill-rule": "evenodd",
		d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var vt = /* @__PURE__ */ Ye(ht, [["render", _t]]), yt = ["aria-label"], bt = [
	"data-sonner-theme",
	"dir",
	"data-theme",
	"data-rich-colors",
	"data-y-position",
	"data-x-position"
], xt = typeof window < "u" && typeof document < "u";
function St() {
	if (typeof window > "u" || typeof document > "u") return "ltr";
	let e = document.documentElement.getAttribute("dir");
	return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var Ct = /* @__PURE__ */ U({
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
		gap: { default: ze },
		visibleToasts: { default: Pe },
		closeButton: {
			type: Boolean,
			default: !1
		},
		toastOptions: { default: () => ({}) },
		class: { default: "" },
		style: {},
		offset: { default: Fe },
		mobileOffset: { default: Ie },
		dir: { default: "auto" },
		swipeDirections: {},
		icons: {},
		containerAriaLabel: { default: "Notifications" }
	},
	setup(e) {
		let n = e, r = S(), i = O([]), a = R(() => n.id ? i.value.filter((e) => e.toasterId === n.id) : i.value.filter((e) => !e.toasterId));
		function c(e, t) {
			return a.value.filter((n) => !n.position && t === 0 || n.position === e);
		}
		let l = R(() => {
			let e = a.value.filter((e) => e.position).map((e) => e.position);
			return e.length > 0 ? Array.from(new Set([n.position].concat(e))) : [n.position];
		}), d = R(() => {
			let e = {};
			return l.value.forEach((t) => {
				e[t] = i.value.filter((e) => e.position === t);
			}), e;
		}), p = O([]), m = O({}), h = O(!1);
		s(() => {
			l.value.forEach((e) => {
				e in m.value || (m.value[e] = !1);
			});
		});
		let g = O(n.theme === "system" ? typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : n.theme), _ = O(null), y = O(null), b = O(!1), x = n.hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
		function C(e) {
			i.value.find((t) => t.id === e.id)?.delete || ke.dismiss(e.id), i.value = i.value.filter(({ id: t }) => t !== e.id), setTimeout(() => {
				i.value.find((t) => t.id === e.id) || (p.value = p.value.filter((t) => t.toastId !== e.id));
			}, Ve + 50);
		}
		function w(e) {
			b.value && !e.currentTarget?.contains?.(e.relatedTarget) && (b.value = !1, y.value &&= (y.value.focus({ preventScroll: !0 }), null));
		}
		function T(e) {
			e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || b.value || (b.value = !0, y.value = e.relatedTarget);
		}
		function ee(e) {
			e.target && e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || (h.value = !0);
		}
		s((e) => {
			e(ke.subscribe((e) => {
				if (e.dismiss) {
					requestAnimationFrame(() => {
						i.value = i.value.map((t) => t.id === e.id ? {
							...t,
							delete: !0
						} : t);
					});
					return;
				}
				t(() => {
					let t = i.value.findIndex((t) => t.id === e.id);
					t === -1 ? i.value = [e, ...i.value] : i.value = [
						...i.value.slice(0, t),
						{
							...i.value[t],
							...e
						},
						...i.value.slice(t + 1)
					];
				});
			}));
		}), s((e) => {
			if (typeof window > "u") return;
			if (n.theme !== "system") {
				g.value = n.theme;
				return;
			}
			let t = window.matchMedia("(prefers-color-scheme: dark)"), r = (e) => {
				g.value = e ? "dark" : "light";
			};
			r(t.matches);
			let i = (e) => {
				r(e.matches);
			};
			try {
				t.addEventListener("change", i);
			} catch {
				t.addListener(i);
			}
			e(() => {
				try {
					t.removeEventListener("change", i);
				} catch {
					t.removeListener(i);
				}
			});
		}), s(() => {
			_.value && y.value && (y.value.focus({ preventScroll: !0 }), y.value = null, b.value = !1);
		}), s(() => {
			i.value.length <= 1 && Object.keys(m.value).forEach((e) => {
				m.value[e] = !1;
			});
		}), s((e) => {
			function t(e) {
				let t = n.hotkey.every((t) => e[t] || e.code === t), r = Array.isArray(_.value) ? _.value[0] : _.value;
				t && (l.value.forEach((e) => {
					m.value[e] = !0;
				}), r?.focus());
				let i = document.activeElement === _.value || r?.contains(document.activeElement);
				e.code === "Escape" && i && l.value.forEach((e) => {
					m.value[e] = !1;
				});
			}
			xt && (document.addEventListener("keydown", t), e(() => {
				document.removeEventListener("keydown", t);
			}));
		});
		function te(e) {
			let t = e.currentTarget, n = t.getAttribute("data-y-position") + "-" + t.getAttribute("data-x-position");
			m.value[n] = !0;
		}
		function ne(e) {
			if (!h.value) {
				let t = e.currentTarget, n = t.getAttribute("data-y-position") + "-" + t.getAttribute("data-x-position");
				m.value[n] = !1;
			}
		}
		function k() {
			Object.keys(m.value).forEach((e) => {
				m.value[e] = !1;
			});
		}
		function re() {
			h.value = !1;
		}
		function ie(e) {
			p.value = e;
		}
		function A(e) {
			let t = p.value.findIndex((t) => t.toastId === e.toastId);
			if (t !== -1) p.value[t] = e;
			else {
				let t = p.value.findIndex((t) => t.position === e.position);
				t === -1 ? p.value.unshift(e) : p.value.splice(t, 0, e);
			}
		}
		return (e, t) => (o(), E(B, null, [M(" Remove item from normal navigation flow, only available via hotkey "), L("section", {
			"aria-label": `${e.containerAriaLabel} ${z(x)}`,
			tabIndex: -1,
			"aria-live": "polite",
			"aria-relevant": "additions text",
			"aria-atomic": "false"
		}, [(o(!0), E(B, null, f(l.value, (t, i) => (o(), E("ol", I({
			key: t,
			ref_for: !0,
			ref_key: "listRef",
			ref: _,
			"data-sonner-toaster": "",
			"data-sonner-theme": g.value,
			class: n.class,
			dir: e.dir === "auto" ? St() : e.dir,
			tabIndex: -1,
			"data-theme": e.theme,
			"data-rich-colors": e.richColors,
			"data-y-position": t.split("-")[0],
			"data-x-position": t.split("-")[1],
			style: {
				"--front-toast-height": `${p.value[0]?.height || 0}px`,
				"--width": `${z(Re)}px`,
				"--gap": `${e.gap}px`,
				...e.style,
				...z(r).style,
				...z(Ge)(e.offset, e.mobileOffset)
			}
		}, { ref_for: !0 }, e.$attrs, {
			onBlur: w,
			onFocus: T,
			onMouseenter: te,
			onMousemove: te,
			onMouseleave: ne,
			onDragend: k,
			onPointerdown: ee,
			onPointerup: re
		}), [(o(!0), E(B, null, f(c(t, i), (r, i) => (o(), P(Je, {
			key: r.id,
			heights: p.value,
			icons: e.icons,
			index: i,
			toast: r,
			defaultRichColors: e.richColors,
			duration: e.toastOptions?.duration ?? e.duration,
			class: F(e.toastOptions?.class ?? ""),
			descriptionClass: e.toastOptions?.descriptionClass,
			invert: e.invert,
			visibleToasts: e.visibleToasts,
			closeButton: e.toastOptions?.closeButton ?? e.closeButton,
			interacting: h.value,
			position: t,
			closeButtonPosition: e.toastOptions?.closeButtonPosition ?? e.closeButtonPosition,
			style: D(e.toastOptions?.style),
			unstyled: e.toastOptions?.unstyled,
			classes: e.toastOptions?.classes,
			cancelButtonStyle: e.toastOptions?.cancelButtonStyle,
			actionButtonStyle: e.toastOptions?.actionButtonStyle,
			"close-button-aria-label": e.toastOptions?.closeButtonAriaLabel,
			toasts: d.value[t],
			expandByDefault: e.expand,
			gap: e.gap,
			expanded: m.value[t] || !1,
			swipeDirections: n.swipeDirections,
			"onUpdate:heights": ie,
			"onUpdate:height": A,
			onRemoveToast: C
		}, {
			"close-icon": u(() => [v(e.$slots, "close-icon", {}, () => [W($e)])]),
			"loading-icon": u(() => [v(e.$slots, "loading-icon", {}, () => [W(nt, { visible: r.type === "loading" }, null, 8, ["visible"])])]),
			"success-icon": u(() => [v(e.$slots, "success-icon", {}, () => [W(ot)])]),
			"error-icon": u(() => [v(e.$slots, "error-icon", {}, () => [W(vt)])]),
			"warning-icon": u(() => [v(e.$slots, "warning-icon", {}, () => [W(mt)])]),
			"info-icon": u(() => [v(e.$slots, "info-icon", {}, () => [W(ut)])]),
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
		]))), 128))], 16, bt))), 128))], 8, yt)], 2112));
	}
});
//#endregion
//#region src/wc/face.ts
function wt(e) {
	return [...e.querySelectorAll(":scope > option")].map((e) => ({
		value: e.getAttribute("value") ?? e.textContent?.trim() ?? "",
		label: e.textContent?.trim() ?? "",
		disabled: e.hasAttribute("disabled")
	}));
}
function Tt(e) {
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
		options: wt(e)
	};
}
var Et = "[role=\"checkbox\"],[role=\"switch\"],[role=\"radio\"],input,textarea,button,[tabindex]";
function Dt(e, t) {
	let n = pe(e, { shadowRoot: !1 });
	class r extends n {
		static formAssociated = !0;
		#e;
		#t = !1;
		constructor() {
			super(), this.#e = this.attachInternals(), this.addEventListener("click", (e) => {
				e.target === this && (this.hasAttribute("disabled") || this.querySelector(Et)?.click());
			});
		}
		connectedCallback() {
			if (!this.#t) {
				let e = Tt(this);
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
function Ot(e, t) {
	let n = pe(e, { shadowRoot: !1 });
	class r extends n {
		#e = !1;
		connectedCallback() {
			if (!this.#e) {
				let e = Tt(this);
				this._light = e, this._options = e.options, this.#e = !0;
			}
			super.connectedCallback();
		}
	}
	return customElements.define(t, r), r;
}
//#endregion
//#region node_modules/@vueuse/shared/dist/index.js
function kt(e, t) {
	let n = xe();
	return s(() => {
		n.value = e();
	}, {
		...t,
		flush: t?.flush ?? "sync"
	}), ce(n);
}
function At(e, t, n = {}) {
	let r, i, a, o = !0, s = () => {
		o = !0, a();
	};
	C(e, s, {
		flush: "sync",
		...n
	});
	let c = typeof t == "function" ? t : t.get, l = typeof t == "function" ? void 0 : t.set, u = ee((e, t) => (i = e, a = t, {
		get() {
			return o &&= (r = c(r), !1), i(), r;
		},
		set(e) {
			l?.(e);
		}
	}));
	return u.trigger = s, u;
}
function jt(t, n) {
	return e() ? (me(t, n), !0) : !1;
}
function Mt() {
	let e = /* @__PURE__ */ new Set(), t = (t) => {
		e.delete(t);
	};
	return {
		on: (n) => {
			e.add(n);
			let r = () => t(n);
			return jt(r), { off: r };
		},
		off: t,
		trigger: (...t) => Promise.all(Array.from(e).map((e) => e(...t))),
		clear: () => {
			e.clear();
		}
	};
}
function Nt(e) {
	let t = !1, n, r = _(!0);
	return ((...i) => (t ||= (n = r.run(() => e(...i)), !0), n));
}
var Pt = /* @__PURE__ */ new WeakMap(), Ft = (...t) => {
	let n = t[0], r = y()?.proxy ?? e();
	if (r == null && !b()) throw Error("injectLocal must be called in setup");
	return r && Pt.has(r) && n in Pt.get(r) ? Pt.get(r)[n] : a(...t);
};
function It(t, n) {
	let r = y()?.proxy ?? e();
	if (r == null) throw Error("provideLocal must be called in setup");
	Pt.has(r) || Pt.set(r, Object.create(null));
	let i = Pt.get(r);
	return i[t] = n, l(t, n);
}
function Lt(e, t) {
	let n = t?.injectionKey || Symbol(e.name || "InjectionState"), r = t?.defaultValue;
	return [(...t) => {
		let r = e(...t);
		return It(n, r), r;
	}, () => Ft(n, r)];
}
var Rt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var zt = (e) => e !== void 0, Bt = (e) => e != null, Vt = Object.prototype.toString, Ht = (e) => Vt.call(e) === "[object Object]", Ut = () => {}, Wt = /* @__PURE__ */ Gt();
function Gt() {
	var e, t;
	return Rt && !!(!((e = window) == null || (e = e.navigator) == null) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) == null || (t = t.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function Kt(...e) {
	if (e.length !== 1) return de(...e);
	let t = e[0];
	return typeof t == "function" ? ce(ee(() => ({
		get: t,
		set: Ut
	}))) : O(t);
}
function qt(e, t) {
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
var Jt = (e) => e();
function Yt(e, t = {}) {
	let n, r, i = Ut, a = (e) => {
		clearTimeout(e), i(), i = Ut;
	}, o;
	return (s) => {
		let c = A(e), l = A(t.maxWait);
		return n && a(n), c <= 0 || l !== void 0 && l <= 0 ? (r &&= (a(r), void 0), Promise.resolve(s())) : new Promise((e, u) => {
			i = t.rejectOnCancel ? u : e, o = s, l && !r && (r = setTimeout(() => {
				n && a(n), r = void 0, e(o());
			}, l)), n = setTimeout(() => {
				r && a(r), r = void 0, e(s());
			}, c);
		});
	};
}
function Xt(e = Jt, t = {}) {
	let { initialState: n = "active" } = t, r = Kt(n === "active");
	function i() {
		r.value = !1;
	}
	function a() {
		r.value = !0;
	}
	return {
		isActive: ge(r),
		pause: i,
		resume: a,
		eventFilter: (...t) => {
			r.value && e(...t);
		}
	};
}
function Zt(e) {
	return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Qt(e) {
	return Array.isArray(e) ? e : [e];
}
function $t(e) {
	let t = Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}
var en = /-(\w)/g, tn = $t((e) => e.replace(en, (e, t) => t ? t.toUpperCase() : ""));
function nn(e) {
	return e || y();
}
function rn(e) {
	if (!Rt) return e;
	let t = 0, n, r, i = () => {
		--t, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
	};
	return ((...a) => (t += 1, r || (r = _(!0), n = r.run(() => e(...a))), jt(i), n));
}
/* @__NO_SIDE_EFFECTS__ */
function an(e, t) {
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
function on(e) {
	return j(e) ? ye(new Proxy({}, {
		get(t, n, r) {
			return z(Reflect.get(e.value, n, r));
		},
		set(t, n, r) {
			return j(e.value[n]) && !j(r) ? e.value[n].value = r : e.value[n] = r, !0;
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
	})) : ye(e);
}
function sn(e) {
	return on(R(e));
}
function G(e, ...t) {
	let n = t.flat(), r = n[0];
	return sn(() => Object.fromEntries(typeof r == "function" ? Object.entries(we(e)).filter(([e, t]) => !r(A(t), e)) : Object.entries(we(e)).filter((e) => !n.includes(e[0]))));
}
function cn(e, t = 1e4) {
	return ee((n, r) => {
		let i = A(e), a, o = () => setTimeout(() => {
			i = A(e), r();
		}, A(t));
		return jt(() => {
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
function ln(e, t = 200, n = {}) {
	return qt(Yt(t, n), e);
}
function un(e, t, n = {}) {
	let { eventFilter: r = Jt, ...i } = n;
	return C(e, qt(r, t), i);
}
function dn(e, t, n = {}) {
	let { eventFilter: r, initialState: i = "active", ...a } = n, { eventFilter: o, pause: s, resume: c, isActive: l } = Xt(r, { initialState: i });
	return {
		stop: un(e, t, {
			...a,
			eventFilter: o
		}),
		pause: s,
		resume: c,
		isActive: l
	};
}
function fn(e, t, ...[n]) {
	let { flush: r = "sync", deep: i = !1, immediate: a = !0, direction: o = "both", transform: s = {} } = n || {}, c = [], l = "ltr" in s && s.ltr || ((e) => e), u = "rtl" in s && s.rtl || ((e) => e);
	return (o === "both" || o === "ltr") && c.push(dn(e, (e) => {
		c.forEach((e) => e.pause()), t.value = l(e), c.forEach((e) => e.resume());
	}, {
		flush: r,
		deep: i,
		immediate: a
	})), (o === "both" || o === "rtl") && c.push(dn(t, (t) => {
		c.forEach((e) => e.pause()), e.value = u(t), c.forEach((e) => e.resume());
	}, {
		flush: r,
		deep: i,
		immediate: a
	})), () => {
		c.forEach((e) => e.stop());
	};
}
function pn(e, t) {
	nn(t) && le(e, t);
}
function mn(e, t, n = {}) {
	let { immediate: r = !0, immediateCallback: i = !1 } = n, a = xe(!1), o;
	function s() {
		o &&= (clearTimeout(o), void 0);
	}
	function c() {
		a.value = !1, s();
	}
	function l(...n) {
		i && e(), s(), a.value = !0, o = setTimeout(() => {
			a.value = !1, o = void 0, e(...n);
		}, A(t));
	}
	return r && (a.value = !0, Rt && l()), jt(c), {
		isPending: ge(a),
		start: l,
		stop: c
	};
}
function hn(e, t, n) {
	return C(e, t, {
		...n,
		immediate: !0
	});
}
function gn(e, t, n) {
	return C(e, t, {
		...n,
		once: !0
	});
}
//#endregion
//#region node_modules/@vueuse/core/dist/index.js
function _n(e = {}) {
	let { inheritAttrs: t = !0, name: n = "ReusableTemplate" } = e, r = xe(), i = U({
		name: `${n}.define`,
		setup(e, { slots: t }) {
			return () => {
				r.value = t.default;
			};
		}
	}), a = U({
		inheritAttrs: t,
		name: `${n}.reuse`,
		props: e.props,
		setup(n, { attrs: i, slots: a }) {
			return () => {
				if (!r.value) throw Error("[VueUse] Failed to find the definition of reusable template");
				let o = r.value?.call(r, {
					...e.props == null ? vn(i) : n,
					$slots: a
				});
				return t && o?.length === 1 ? o[0] : o;
			};
		}
	});
	return /* @__PURE__ */ an({
		define: i,
		reuse: a
	}, [i, a]);
}
function vn(e) {
	let t = {};
	for (let n in e) t[tn(n)] = e[n];
	return t;
}
var yn = Rt ? window : void 0, bn = Rt ? window.document : void 0;
Rt && window.navigator, Rt && window.location;
function xn(e) {
	let t = A(e);
	return t?.$el ?? t;
}
function Sn(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = R(() => {
		let t = Qt(A(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return hn(() => [
		n.value?.map((e) => xn(e)) ?? [yn].filter((e) => e != null),
		Qt(A(n.value ? e[1] : e[0])),
		Qt(z(n.value ? e[2] : e[1])),
		A(n.value ? e[3] : e[2])
	], ([e, n, r, i], a, o) => {
		if (!e?.length || !n?.length || !r?.length) return;
		let s = Ht(i) ? { ...i } : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
function Cn() {
	let e = xe(!1), t = y();
	return t && p(() => {
		e.value = !0;
	}, t), e;
}
/* @__NO_SIDE_EFFECTS__ */
function wn(e) {
	let t = Cn();
	return R(() => (t.value, !!e()));
}
function Tn(e, t, n = {}) {
	let { window: r = yn, ...i } = n, a, o = /* @__PURE__ */ wn(() => r && "MutationObserver" in r), s = () => {
		a &&= (a.disconnect(), void 0);
	}, c = C(R(() => {
		let t = Qt(A(e)).map(xn).filter(Bt);
		return new Set(t);
	}), (e) => {
		s(), o.value && e.size && (a = new MutationObserver(t), e.forEach((e) => a.observe(e, i)));
	}, {
		immediate: !0,
		flush: "post"
	}), l = () => a?.takeRecords(), u = () => {
		c(), s();
	};
	return jt(u), {
		isSupported: o,
		stop: u,
		takeRecords: l
	};
}
function En(e, t, n = {}) {
	let { window: r = yn, document: i = r?.document, flush: a = "sync" } = n;
	if (!r || !i) return Ut;
	let o, c = (e) => {
		o?.(), o = e;
	}, l = s(() => {
		let n = xn(e);
		if (n) {
			let { stop: e } = Tn(i, (e) => {
				e.map((e) => [...e.removedNodes]).flat().some((e) => e === n || e.contains(n)) && t(e);
			}, {
				window: r,
				childList: !0,
				subtree: !0
			});
			c(e);
		}
	}, { flush: a }), u = () => {
		l(), c();
	};
	return jt(u), u;
}
function Dn(e) {
	return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function On(...e) {
	let t, n, r = {};
	e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
	let { target: i = yn, eventName: a = "keydown", passive: o = !1, dedupe: s = !1 } = r, c = Dn(t);
	return Sn(i, a, (e) => {
		e.repeat && A(s) || c(e) && n(e);
	}, o);
}
function kn(e = {}) {
	let { window: t = yn, deep: n = !0, triggerOnRemoval: r = !1 } = e, i = e.document ?? t?.document, a = () => {
		let e = i?.activeElement;
		if (n) for (var t; e?.shadowRoot;) e = e == null || (t = e.shadowRoot) == null ? void 0 : t.activeElement;
		return e;
	}, o = xe(), s = () => {
		o.value = a();
	};
	if (t) {
		let e = {
			capture: !0,
			passive: !0
		};
		Sn(t, "blur", (e) => {
			e.relatedTarget === null && s();
		}, e), Sn(t, "focus", s, e);
	}
	return r && En(o, s, { document: i }), s(), o;
}
var An = Symbol("vueuse-ssr-width");
/* @__NO_SIDE_EFFECTS__ */
function jn() {
	let e = b() ? Ft(An, null) : null;
	return typeof e == "number" ? e : void 0;
}
function Mn(e, t = {}) {
	let { window: n = yn, ssrWidth: r = /* @__PURE__ */ jn() } = t, i = /* @__PURE__ */ wn(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), a = xe(typeof r == "number"), o = xe(), c = xe(!1);
	return s(() => {
		if (a.value) {
			a.value = !i.value, c.value = A(e).split(",").some((e) => {
				let t = e.includes("not all"), n = e.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), i = e.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), a = !!(n || i);
				return n && a && (a = r >= Zt(n[1])), i && a && (a = r <= Zt(i[1])), t ? !a : a;
			});
			return;
		}
		i.value && (o.value = n.matchMedia(A(e)), c.value = o.value.matches);
	}), Sn(o, "change", (e) => {
		c.value = e.matches;
	}, { passive: !0 }), R(() => c.value);
}
function Nn(e) {
	return JSON.parse(JSON.stringify(e));
}
function Pn(e) {
	let t = y(), n = At(() => null, () => e ? xn(e) : t.proxy.$el);
	return g(n.trigger), p(n.trigger), n;
}
function Fn(e, t, n = {}) {
	let { window: r = yn, ...i } = n, a, o = /* @__PURE__ */ wn(() => r && "ResizeObserver" in r), s = () => {
		a &&= (a.disconnect(), void 0);
	}, c = C(R(() => {
		let t = A(e);
		return Array.isArray(t) ? t.map((e) => xn(e)) : [xn(t)];
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
	return jt(l), {
		isSupported: o,
		stop: l
	};
}
var In = "focusin", Ln = "focusout", Rn = ":focus-within";
function zn(e, t = {}) {
	let { window: n = yn } = t, r = R(() => xn(e)), i = xe(!1), a = R(() => i.value), o = kn(t);
	if (!n || !o.value) return { focused: a };
	let s = { passive: !0 };
	return Sn(r, In, () => i.value = !0, s), Sn(r, Ln, () => {
		var e, t;
		return i.value = ((e = r.value) == null || (t = e.matches) == null ? void 0 : t.call(e, Rn)) ?? !1;
	}, s), { focused: a };
}
function Bn(e, n, r, i = {}) {
	var a, o;
	let { clone: s = !1, passive: c = !1, eventName: l, deep: u = !1, defaultValue: d, shouldEmit: f } = i, p = y(), m = r || p?.emit || (p == null || (a = p.$emit) == null ? void 0 : a.bind(p)) || (p == null || (o = p.proxy) == null || (o = o.$emit) == null ? void 0 : o.bind(p?.proxy)), h = l;
	n ||= "modelValue", h ||= `update:${n.toString()}`;
	let g = (e) => s ? typeof s == "function" ? s(e) : Nn(e) : e, _ = () => zt(e[n]) ? g(e[n]) : d, v = (e) => {
		f ? f(e) && m(h, e) : m(h, e);
	};
	if (c) {
		let r = O(_()), i = !1;
		return C(() => e[n], (e) => {
			i || (i = !0, r.value = g(e), t(() => i = !1));
		}), C(r, (t) => {
			!i && (t !== e[n] || u) && v(t);
		}, { deep: u }), r;
	} else return R({
		get() {
			return _();
		},
		set(e) {
			v(e);
		}
	});
}
//#endregion
//#region node_modules/lucide-vue-next/dist/esm/shared/src/utils/hasA11yProp.js
var Vn = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, Hn = (e) => e === "", Un = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), Wn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Gn = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), Kn = (e) => {
	let t = Gn(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, qn = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Jn = ({ name: e, iconNode: t, absoluteStrokeWidth: n, "absolute-stroke-width": r, strokeWidth: i, "stroke-width": a, size: o = qn.width, color: s = qn.stroke, ...c }, { slots: l }) => Te("svg", {
	...qn,
	...c,
	width: o,
	height: o,
	stroke: s,
	"stroke-width": Hn(n) || Hn(r) || n === !0 || r === !0 ? Number(i || a || qn["stroke-width"]) * 24 / Number(o) : i || a || qn["stroke-width"],
	class: Un("lucide", c.class, ...e ? [`lucide-${Wn(Kn(e))}-icon`, `lucide-${Wn(e)}`] : ["lucide-icon"]),
	...!l.default && !Vn(c) && { "aria-hidden": "true" }
}, [...t.map((e) => Te(...e)), ...l.default ? [l.default()] : []]), Yn = (e, t) => (n, { slots: r, attrs: i }) => Te(Jn, {
	...i,
	...n,
	iconNode: t,
	name: e
}, r), Xn = Yn("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), Zn = Yn("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), Qn = Yn("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), $n = Yn("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), er = Yn("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), tr = Yn("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), nr = Yn("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), rr = Yn("ellipsis", [
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
]), ir = Yn("info", [
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
]), ar = Yn("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]), or = Yn("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), sr = Yn("octagon-x", [
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
]), cr = Yn("panel-left", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M9 3v18",
	key: "fh3hqa"
}]]), lr = Yn("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), ur = Yn("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), dr = Yn("triangle-alert", [
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
]), fr = Yn("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region node_modules/ohash/dist/shared/ohash.D__AXeF1.mjs
function pr(e) {
	return typeof e == "string" ? `'${e}'` : new mr().serialize(e);
}
var mr = /* @__PURE__ */ function() {
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
function hr(e, t) {
	return e === t || pr(e) === pr(t);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/arrays.js
function gr(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function _r(e, t, n) {
	let r = e.findIndex((e) => hr(e, t)), i = e.findIndex((e) => hr(e, n));
	if (r === -1 || i === -1) return [];
	let [a, o] = [r, i].sort((e, t) => e - t);
	return e.slice(a, o + 1);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/browser.js
var vr = typeof document < "u";
//#endregion
//#region node_modules/reka-ui/dist/shared/clamp.js
function yr(e, t = -Infinity, n = Infinity) {
	return Math.min(n, Math.max(t, e));
}
function br(e, t) {
	let n = e, r = t.toString(), i = r.indexOf("."), a = i >= 0 ? r.length - i : 0;
	if (a > 0) {
		let e = 10 ** a;
		n = Math.round(n * e) / e;
	}
	return n;
}
function xr(e, t, n, r) {
	t = Number(t), n = Number(n);
	let i = (e - (Number.isNaN(t) ? 0 : t)) % r, a = br(Math.abs(i) * 2 >= r ? e + Math.sign(i) * (r - Math.abs(i)) : e - i, r);
	return Number.isNaN(t) ? !Number.isNaN(n) && a > n && (a = Math.floor(br(n / r, r)) * r) : a < t ? a = t : !Number.isNaN(n) && a > n && (a = t + Math.floor(br((n - t) / r, r)) * r), a = br(a, r), a;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/createContext.js
function K(e, t) {
	let n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
	return [(t) => {
		let n = a(r, t);
		if (n || n === null) return n;
		throw Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
	}, (e) => (l(r, e), e)];
}
//#endregion
//#region node_modules/reka-ui/dist/shared/getActiveElement.js
function Sr() {
	let e = document.activeElement;
	if (e == null) return null;
	for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null;) e = e.shadowRoot.activeElement;
	return e;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/handleAndDispatchCustomEvent.js
function Cr(e, t, n) {
	let r = n.originalEvent.target, i = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(i);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/nullish.js
function wr(e) {
	return e == null;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/isValueEqualOrExist.js
function Tr(e, t) {
	return wr(e) ? !1 : Array.isArray(e) ? e.some((e) => hr(e, t)) : hr(e, t);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/renderSlotFragments.js
function Er(e) {
	return e ? e.flatMap((e) => e.type === B ? Er(e.children) : [e]) : [];
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useArrowNavigation.js
var Dr = ["INPUT", "TEXTAREA"];
function Or(e, t, n, r = {}) {
	if (!t || r.enableIgnoredElement && Dr.includes(t.nodeName)) return null;
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
	return v || _ ? b = kr(y, t, {
		goForward: _ ? m : c === "ltr" ? d : f,
		loop: s
	}) : h ? b = y.at(0) || null : g && (b = y.at(-1) || null), u && b?.focus(), b;
}
function kr(e, t, n, r = e.includes(t) ? e.length : e.length + 1) {
	if (--r === 0) return null;
	let i = e.indexOf(t), a;
	if (a = i === -1 ? n.goForward ? 0 : e.length - 1 : n.goForward ? i + 1 : i - 1, !n.loop && (a < 0 || a >= e.length)) return null;
	let o = e[(a + e.length) % e.length];
	return o ? o.hasAttribute("disabled") && o.getAttribute("disabled") !== "false" ? kr(e, o, n, r) : o : null;
}
//#endregion
//#region node_modules/reka-ui/dist/ConfigProvider/ConfigProvider.js
var [Ar, jr] = /* @__PURE__ */ K("ConfigProvider");
//#endregion
//#region node_modules/defu/dist/defu.mjs
function Mr(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Nr(e, t, n = ".", r) {
	if (!Mr(t)) return Nr(e, {}, n, r);
	let i = { ...t };
	for (let t of Object.keys(e)) {
		if (t === "__proto__" || t === "constructor") continue;
		let a = e[t];
		a != null && (r && r(i, t, a, n) || (Array.isArray(a) && Array.isArray(i[t]) ? i[t] = [...a, ...i[t]] : Mr(a) && Mr(i[t]) ? i[t] = Nr(a, i[t], (n ? `${n}.` : "") + t.toString(), r) : i[t] = a));
	}
	return i;
}
function Pr(e) {
	return (...t) => t.reduce((t, n) => Nr(t, n, "", e), {});
}
var Fr = Pr(), Ir = rn(() => {
	let e = O(/* @__PURE__ */ new Map()), n = O(), r = R(() => {
		for (let t of e.value.values()) if (t) return !0;
		return !1;
	}), i = Ar({ scrollBody: O(!0) }), a = null, o = () => {
		document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = n.value ?? "", Wt && a?.(), n.value = void 0;
	};
	return C(r, (e, s) => {
		if (!Rt) return;
		if (!e) {
			s && o();
			return;
		}
		n.value === void 0 && (n.value = document.body.style.overflow);
		let c = window.innerWidth - document.documentElement.clientWidth, l = {
			padding: c,
			margin: 0
		}, u = i.scrollBody?.value ? typeof i.scrollBody.value == "object" ? Fr({
			padding: i.scrollBody.value.padding === !0 ? c : i.scrollBody.value.padding,
			margin: i.scrollBody.value.margin === !0 ? c : i.scrollBody.value.margin
		}, l) : l : {
			padding: 0,
			margin: 0
		};
		c > 0 && (document.body.style.paddingRight = typeof u.padding == "number" ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == "number" ? `${u.margin}px` : String(u.margin), document.documentElement.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Wt && (a = Sn(document, "touchmove", (e) => zr(e), { passive: !1 })), t(() => {
			r.value && (document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden");
		});
	}, {
		immediate: !0,
		flush: "sync"
	}), e;
});
function Lr(e) {
	let t = Math.random().toString(36).substring(2, 7), n = Ir();
	n.value.set(t, e ?? !1);
	let r = R({
		get: () => n.value.get(t) ?? !1,
		set: (e) => n.value.set(t, e)
	});
	return pn(() => {
		n.value.delete(t);
	}), r;
}
function Rr(e) {
	let t = window.getComputedStyle(e);
	if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
	{
		let t = e.parentNode;
		return !(t instanceof Element) || t.tagName === "BODY" ? !1 : Rr(t);
	}
}
function zr(e) {
	let t = e || window.event, n = t.target;
	return n instanceof Element && Rr(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/utils.mjs
function Br(e, t) {
	return e - t * Math.floor(e / t);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/calendars/GregorianCalendar.mjs
var Vr = 1721426;
function Hr(e, t, n, r) {
	t = Wr(e, t);
	let i = t - 1, a = -2;
	return n <= 2 ? a = 0 : Ur(t) && (a = -1), Vr - 1 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + a + r);
}
function Ur(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Wr(e, t) {
	return e === "BC" ? 1 - t : t;
}
function Gr(e) {
	let t = "AD";
	return e <= 0 && (t = "BC", e = 1 - e), [t, e];
}
var Kr = {
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
}, qr = class {
	fromJulianDay(e) {
		let t = e, n = t - Vr, r = Math.floor(n / 146097), i = Br(n, 146097), a = Math.floor(i / 36524), o = Br(i, 36524), s = Math.floor(o / 1461), c = Br(o, 1461), l = Math.floor(c / 365), [u, d] = Gr(r * 400 + a * 100 + s * 4 + l + +(a !== 4 && l !== 4)), f = t - Hr(u, d, 1, 1), p = 2;
		t < Hr(u, d, 3, 1) ? p = 0 : Ur(d) && (p = 1);
		let m = Math.floor(((f + p) * 12 + 373) / 367);
		return new ua(u, d, m, t - Hr(u, d, m, 1) + 1);
	}
	toJulianDay(e) {
		return Hr(e.era, e.year, e.month, e.day);
	}
	getDaysInMonth(e) {
		return Kr[Ur(e.year) ? "leapyear" : "standard"][e.month - 1];
	}
	getMonthsInYear(e) {
		return 12;
	}
	getDaysInYear(e) {
		return Ur(e.year) ? 366 : 365;
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
}, Jr = {
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
function Yr(e, t) {
	return t = Mi(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Xr(e, t) {
	return t = Mi(t, e.calendar), e = fi(e), t = fi(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Zr(e, t) {
	return $r(e.calendar, t.calendar) && Yr(e, t);
}
function Qr(e, t) {
	return $r(e.calendar, t.calendar) && Xr(e, t);
}
function $r(e, t) {
	return e.isEqual?.(t) ?? t.isEqual?.(e) ?? e.identifier === t.identifier;
}
function ei(e, t) {
	return Yr(e, ii(t));
}
var ti = {
	sun: 0,
	mon: 1,
	tue: 2,
	wed: 3,
	thu: 4,
	fri: 5,
	sat: 6
};
function ni(e, t, n) {
	let r = e.calendar.toJulianDay(e), i = n ? ti[n] : vi(t), a = Math.ceil(r + 1 - i) % 7;
	return a < 0 && (a += 7), a;
}
function ri(e) {
	return ki(Date.now(), e);
}
function ii(e) {
	return Ai(ri(e));
}
function ai(e, t) {
	return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function oi(e, t) {
	return si(e) - si(t);
}
function si(e) {
	return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
var ci = null, li = !1;
function ui() {
	return ci ??= new Intl.DateTimeFormat().resolvedOptions().timeZone, ci;
}
function di() {
	return li;
}
function fi(e) {
	return e.subtract({ days: e.day - 1 });
}
function pi(e) {
	return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function mi(e) {
	return fi(e.subtract({ months: e.month - 1 }));
}
var hi = /* @__PURE__ */ new Map(), gi = /* @__PURE__ */ new Map();
function _i(e) {
	if (Intl.Locale) {
		let t = hi.get(e);
		return t || (t = new Intl.Locale(e).maximize().region, t && hi.set(e, t)), t;
	}
	let t = e.split("-")[1];
	return t === "u" ? void 0 : t;
}
function vi(e) {
	let t = gi.get(e);
	if (!t) {
		if (Intl.Locale) {
			let n = new Intl.Locale(e);
			if ("getWeekInfo" in n && (t = n.getWeekInfo(), t)) return gi.set(e, t), t.firstDay;
		}
		let n = _i(e);
		if (e.includes("-fw-")) {
			let n = e.split("-fw-")[1].split("-")[0];
			t = n === "mon" ? { firstDay: 1 } : n === "tue" ? { firstDay: 2 } : n === "wed" ? { firstDay: 3 } : n === "thu" ? { firstDay: 4 } : n === "fri" ? { firstDay: 5 } : n === "sat" ? { firstDay: 6 } : { firstDay: 0 };
		} else t = e.includes("-ca-iso8601") ? { firstDay: 1 } : { firstDay: n && Jr[n] || 0 };
		gi.set(e, t);
	}
	return t.firstDay;
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/conversion.mjs
function yi(e) {
	return e = Mi(e, new qr()), bi(Wr(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function bi(e, t, n, r, i, a, o) {
	let s = /* @__PURE__ */ new Date();
	return s.setUTCHours(r, i, a, o), s.setUTCFullYear(e, t - 1, n), s.getTime();
}
function xi(e, t) {
	if (t === "UTC") return 0;
	if (e > 0 && t === ui() && !di()) return new Date(e).getTimezoneOffset() * -6e4;
	let { year: n, month: r, day: i, hour: a, minute: o, second: s } = Ci(e, t);
	return bi(n, r, i, a, o, s, 0) - Math.floor(e / 1e3) * 1e3;
}
var Si = /* @__PURE__ */ new Map();
function Ci(e, t) {
	let n = Si.get(t);
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
	}), Si.set(t, n));
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
var wi = 864e5;
function Ti(e, t, n, r) {
	return (n === r ? [n] : [n, r]).filter((n) => Ei(e, t, n));
}
function Ei(e, t, n) {
	let r = Ci(n, t);
	return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function Di(e, t, n = "compatible") {
	let r = ji(e);
	if (t === "UTC") return yi(r);
	if (t === ui() && n === "compatible" && !di()) {
		r = Mi(r, new qr());
		let e = /* @__PURE__ */ new Date(), t = Wr(r.era, r.year);
		return e.setFullYear(t, r.month - 1, r.day), e.setHours(r.hour, r.minute, r.second, r.millisecond), e.getTime();
	}
	let i = yi(r), a = xi(i - wi, t), o = xi(i + wi, t), s = Ti(r, t, i - a, i - o);
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
function Oi(e, t, n = "compatible") {
	return new Date(Di(e, t, n));
}
function ki(e, t) {
	let n = xi(e, t), r = new Date(e + n), i = r.getUTCFullYear(), a = r.getUTCMonth() + 1, o = r.getUTCDate(), s = r.getUTCHours(), c = r.getUTCMinutes(), l = r.getUTCSeconds(), u = r.getUTCMilliseconds();
	return new fa(i < 1 ? "BC" : "AD", i < 1 ? -i + 1 : i, a, o, t, n, s, c, l, u);
}
function Ai(e) {
	return new ua(e.calendar, e.era, e.year, e.month, e.day);
}
function ji(e, t) {
	let n = 0, r = 0, i = 0, a = 0;
	if ("timeZone" in e) ({hour: n, minute: r, second: i, millisecond: a} = e);
	else if ("hour" in e && !t) return e;
	return t && ({hour: n, minute: r, second: i, millisecond: a} = t), new da(e.calendar, e.era, e.year, e.month, e.day, n, r, i, a);
}
function Mi(e, t) {
	if ($r(e.calendar, t)) return e;
	let n = t.fromJulianDay(e.calendar.toJulianDay(e)), r = e.copy();
	return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, Hi(r), r;
}
function Ni(e, t, n) {
	return e instanceof fa ? e.timeZone === t ? e : Fi(e, t) : ki(Di(e, t, n), t);
}
function Pi(e) {
	let t = yi(e) - e.offset;
	return new Date(t);
}
function Fi(e, t) {
	return Mi(ki(yi(e) - e.offset, t), e.calendar);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/manipulation.mjs
var Ii = 36e5;
function Li(e, t) {
	let n = e.copy(), r = "hour" in n ? Xi(n, t) : 0;
	Ri(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, zi(n), Vi(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += r, Bi(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
	let i = n.calendar.getYearsInEra(n);
	if (n.year > i) {
		let e = n.calendar.isInverseEra?.(n);
		n.year = i, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n);
	}
	n.month < 1 && (n.month = 1, n.day = 1);
	let a = n.calendar.getMonthsInYear(n);
	return n.month > a && (n.month = a, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n;
}
function Ri(e, t) {
	e.calendar.isInverseEra?.(e) && (t = -t), e.year += t;
}
function zi(e) {
	for (; e.month < 1;) Ri(e, -1), e.month += e.calendar.getMonthsInYear(e);
	let t = 0;
	for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, Ri(e, 1);
}
function Bi(e) {
	for (; e.day < 1;) e.month--, zi(e), e.day += e.calendar.getDaysInMonth(e);
	for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, zi(e);
}
function Vi(e) {
	e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function Hi(e) {
	e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Vi(e);
}
function Ui(e) {
	let t = {};
	for (let n in e) typeof e[n] == "number" && (t[n] = -e[n]);
	return t;
}
function Wi(e, t) {
	return Li(e, Ui(t));
}
function Gi(e, t) {
	let n = e.copy();
	return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), Hi(n), n;
}
function Ki(e, t) {
	let n = e.copy();
	return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), Ji(n), n;
}
function qi(e) {
	e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Yi(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Yi(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Yi(e.minute, 60);
	let t = Math.floor(e.hour / 24);
	return e.hour = Yi(e.hour, 24), t;
}
function Ji(e) {
	e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Yi(e, t) {
	let n = e % t;
	return n < 0 && (n += t), n;
}
function Xi(e, t) {
	return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, qi(e);
}
function Zi(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case "era": {
			let t = e.calendar.getEras(), a = t.indexOf(e.era);
			if (a < 0) throw Error("Invalid era: " + e.era);
			a = $i(a, n, 0, t.length - 1, r?.round), i.era = t[a], Hi(i);
			break;
		}
		case "year":
			i.calendar.isInverseEra?.(i) && (n = -n), i.year = $i(e.year, n, -Infinity, 9999, r?.round), i.year === -Infinity && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
			break;
		case "month":
			i.month = $i(e.month, n, 1, e.calendar.getMonthsInYear(e), r?.round);
			break;
		case "day":
			i.day = $i(e.day, n, 1, e.calendar.getDaysInMonth(e), r?.round);
			break;
		default: throw Error("Unsupported field " + t);
	}
	return e.calendar.balanceDate && e.calendar.balanceDate(i), Hi(i), i;
}
function Qi(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case "hour": {
			let t = e.hour, a = 0, o = 23;
			if (r?.hourCycle === 12) {
				let e = t >= 12;
				a = e ? 12 : 0, o = e ? 23 : 11;
			}
			i.hour = $i(t, n, a, o, r?.round);
			break;
		}
		case "minute":
			i.minute = $i(e.minute, n, 0, 59, r?.round);
			break;
		case "second":
			i.second = $i(e.second, n, 0, 59, r?.round);
			break;
		case "millisecond":
			i.millisecond = $i(e.millisecond, n, 0, 999, r?.round);
			break;
		default: throw Error("Unsupported field " + t);
	}
	return i;
}
function $i(e, t, n, r, i = !1) {
	if (i) {
		e += Math.sign(t), e < n && (e = r);
		let i = Math.abs(t);
		e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i, e > r && (e = n);
	} else e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
	return e;
}
function ea(e, t) {
	let n;
	return n = t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0 ? Di(Li(ji(e), {
		years: t.years,
		months: t.months,
		weeks: t.weeks,
		days: t.days
	}), e.timeZone) : yi(e) - e.offset, n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5, Mi(ki(n, e.timeZone), e.calendar);
}
function ta(e, t) {
	return ea(e, Ui(t));
}
function na(e, t, n, r) {
	switch (t) {
		case "hour": {
			let t = 0, i = 23;
			if (r?.hourCycle === 12) {
				let n = e.hour >= 12;
				t = n ? 12 : 0, i = n ? 23 : 11;
			}
			let a = ji(e), o = Mi(Ki(a, { hour: t }), new qr()), s = [Di(o, e.timeZone, "earlier"), Di(o, e.timeZone, "later")].filter((t) => ki(t, e.timeZone).day === o.day)[0], c = Mi(Ki(a, { hour: i }), new qr()), l = [Di(c, e.timeZone, "earlier"), Di(c, e.timeZone, "later")].filter((t) => ki(t, e.timeZone).day === c.day).pop(), u = yi(e) - e.offset, d = Math.floor(u / Ii), f = u % Ii;
			return u = $i(d, n, Math.floor(s / Ii), Math.floor(l / Ii), r?.round) * Ii + f, Mi(ki(u, e.timeZone), e.calendar);
		}
		case "minute":
		case "second":
		case "millisecond": return Qi(e, t, n, r);
		case "era":
		case "year":
		case "month":
		case "day": return Mi(ki(Di(Zi(ji(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
		default: throw Error("Unsupported field " + t);
	}
}
function ra(e, t, n) {
	let r = ji(e), i = Ki(Gi(r, t), t);
	return i.compare(r) === 0 ? e : Mi(ki(Di(i, e.timeZone, n), e.timeZone), e.calendar);
}
function ia(e) {
	return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function aa(e) {
	let t = Mi(e, new qr()), n;
	return n = t.era === "BC" ? t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : String(t.year).padStart(4, "0"), `${n}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function oa(e) {
	return `${aa(e)}T${ia(e)}`;
}
function sa(e) {
	let t = Math.sign(e) < 0 ? "-" : "+";
	e = Math.abs(e);
	let n = Math.floor(e / 36e5), r = Math.floor(e % 36e5 / 6e4), i = Math.floor(e % 36e5 % 6e4 / 1e3), a = `${t}${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
	return i !== 0 && (a += `:${String(i).padStart(2, "0")}`), a;
}
function ca(e) {
	return `${oa(e)}${sa(e.offset)}[${e.timeZone}]`;
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/CalendarDate.mjs
function la(e) {
	let t = typeof e[0] == "object" ? e.shift() : new qr(), n;
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
var ua = class e {
	constructor(...e) {
		let [t, n, r, i, a] = la(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, Hi(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day) : new e(this.calendar, this.year, this.month, this.day);
	}
	add(e) {
		return Li(this, e);
	}
	subtract(e) {
		return Wi(this, e);
	}
	set(e) {
		return Gi(this, e);
	}
	cycle(e, t, n) {
		return Zi(this, e, t, n);
	}
	toDate(e) {
		return Oi(this, e);
	}
	toString() {
		return aa(this);
	}
	compare(e) {
		return ai(this, e);
	}
}, da = class e {
	constructor(...e) {
		let [t, n, r, i, a] = la(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Hi(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return Li(this, e);
	}
	subtract(e) {
		return Wi(this, e);
	}
	set(e) {
		return Gi(Ki(this, e), e);
	}
	cycle(e, t, n) {
		switch (e) {
			case "era":
			case "year":
			case "month":
			case "day": return Zi(this, e, t, n);
			default: return Qi(this, e, t, n);
		}
	}
	toDate(e, t) {
		return Oi(this, e, t);
	}
	toString() {
		return oa(this);
	}
	compare(e) {
		let t = ai(this, e);
		return t === 0 ? oi(this, ji(e)) : t;
	}
}, fa = class e {
	constructor(...e) {
		let [t, n, r, i, a] = la(e), o = e.shift(), s = e.shift();
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.timeZone = o, this.offset = s, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Hi(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return ea(this, e);
	}
	subtract(e) {
		return ta(this, e);
	}
	set(e, t) {
		return ra(this, e, t);
	}
	cycle(e, t, n) {
		return na(this, e, t, n);
	}
	toDate() {
		return Pi(this);
	}
	toString() {
		return ca(this);
	}
	toAbsoluteString() {
		return this.toDate().toISOString();
	}
	compare(e) {
		return this.toDate().getTime() - Ni(e, this.timeZone).toDate().getTime();
	}
}, pa = [
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
], ma = [
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
], ha = [
	1867,
	1911,
	1925,
	1988,
	2018
], ga = [
	"meiji",
	"taisho",
	"showa",
	"heisei",
	"reiwa"
];
function _a(e) {
	let t = pa.findIndex(([t, n, r]) => e.year < t || e.year === t && e.month < n || e.year === t && e.month === n && e.day < r);
	return t === -1 ? pa.length - 1 : t === 0 ? 0 : t - 1;
}
function va(e) {
	let t = ha[ga.indexOf(e.era)];
	if (!t) throw Error("Unknown era: " + e.era);
	return new ua(e.year + t, e.month, e.day);
}
var ya = class extends qr {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = _a(t);
		return new ua(this, ga[n], t.year - ha[n], t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(va(e));
	}
	balanceDate(e) {
		let t = va(e), n = _a(t);
		ga[n] !== e.era && (e.era = ga[n], e.year = t.year - ha[n]), this.constrainDate(e);
	}
	constrainDate(e) {
		let t = ga.indexOf(e.era), n = ma[t];
		if (n != null) {
			let [r, i, a] = n, o = r - ha[t];
			e.year = Math.max(1, Math.min(o, e.year)), e.year === o && (e.month = Math.min(i, e.month), e.month === i && (e.day = Math.min(a, e.day)));
		}
		if (e.year === 1 && t >= 0) {
			let [, n, r] = pa[t];
			e.month = Math.max(n, e.month), e.month === n && (e.day = Math.max(r, e.day));
		}
	}
	getEras() {
		return ga;
	}
	getYearsInEra(e) {
		let t = ga.indexOf(e.era), n = pa[t], r = pa[t + 1];
		if (r == null) return 9999 - n[0] + 1;
		let i = r[0] - n[0];
		return (e.month < r[1] || e.month === r[1] && e.day < r[2]) && i++, i;
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(va(e));
	}
	getMinimumMonthInYear(e) {
		let t = ba(e);
		return t ? t[1] : 1;
	}
	getMinimumDayInMonth(e) {
		let t = ba(e);
		return t && e.month === t[1] ? t[2] : 1;
	}
	constructor(...e) {
		super(...e), this.identifier = "japanese";
	}
};
function ba(e) {
	if (e.year === 1) return pa[ga.indexOf(e.era)];
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/calendars/BuddhistCalendar.mjs
var xa = -543, Sa = class extends qr {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = Wr(t.era, t.year);
		return new ua(this, n - xa, t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(Ca(e));
	}
	getEras() {
		return ["BE"];
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(Ca(e));
	}
	balanceDate() {}
	constructor(...e) {
		super(...e), this.identifier = "buddhist";
	}
};
function Ca(e) {
	let [t, n] = Gr(e.year + xa);
	return new ua(t, n, e.month, e.day);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/calendars/TaiwanCalendar.mjs
var wa = 1911;
function Ta(e) {
	return e.era === "minguo" ? e.year + wa : 1 - e.year + wa;
}
function Ea(e) {
	let t = e - wa;
	return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t];
}
var Da = class extends qr {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), [n, r] = Ea(Wr(t.era, t.year));
		return new ua(this, n, r, t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(Oa(e));
	}
	getEras() {
		return ["before_minguo", "minguo"];
	}
	balanceDate(e) {
		let [t, n] = Ea(Ta(e));
		e.era = t, e.year = n;
	}
	isInverseEra(e) {
		return e.era === "before_minguo";
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(Oa(e));
	}
	getYearsInEra(e) {
		return e.era === "before_minguo" ? 9999 : 9999 - wa;
	}
	constructor(...e) {
		super(...e), this.identifier = "roc";
	}
};
function Oa(e) {
	let [t, n] = Gr(Ta(e));
	return new ua(t, n, e.month, e.day);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/calendars/PersianCalendar.mjs
var ka = 1948320, Aa = [
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
], ja = class {
	fromJulianDay(e) {
		let t = e - ka, n = 1 + Math.floor((33 * t + 3) / 12053), r = t - (365 * (n - 1) + Math.floor((8 * n + 21) / 33)), i = Math.floor(r < 216 ? r / 31 : (r - 6) / 30), a = r - Aa[i] + 1;
		return new ua(this, n, i + 1, a);
	}
	toJulianDay(e) {
		let t = ka - 1 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
		return t += Aa[e.month - 1], t += e.day, t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInMonth(e) {
		return e.month <= 6 ? 31 : e.month <= 11 || Br(25 * e.year + 11, 33) < 8 ? 30 : 29;
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
}, Ma = 78, Na = 80, Pa = class extends qr {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = t.year - Ma, r = e - Hr(t.era, t.year, 1, 1), i;
		r < Na ? (n--, i = Ur(t.year - 1) ? 31 : 30, r += i + 155 + 90 + 10) : (i = Ur(t.year) ? 31 : 30, r -= Na);
		let a, o;
		if (r < i) a = 1, o = r + 1;
		else {
			let e = r - i;
			e < 155 ? (a = Math.floor(e / 31) + 2, o = e % 31 + 1) : (e -= 155, a = Math.floor(e / 30) + 7, o = e % 30 + 1);
		}
		return new ua(this, n, a, o);
	}
	toJulianDay(e) {
		let [t, n] = Gr(e.year + Ma), r, i;
		return Ur(n) ? (r = 31, i = Hr(t, n, 3, 21)) : (r = 30, i = Hr(t, n, 3, 22)), e.month === 1 ? i + e.day - 1 : (i += r + Math.min(e.month - 2, 5) * 31, e.month >= 8 && (i += (e.month - 7) * 30), i += e.day - 1, i);
	}
	getDaysInMonth(e) {
		return e.month === 1 && Ur(e.year + Ma) || e.month >= 2 && e.month <= 6 ? 31 : 30;
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
}, Fa = 1948440, Ia = 1948439, La = 1300, Ra = 1600, za = 460322;
function Ba(e, t, n, r) {
	return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function Va(e, t, n) {
	let r = Math.floor((30 * (n - t) + 10646) / 10631), i = Math.min(12, Math.ceil((n - (29 + Ba(t, r, 1, 1))) / 29.5) + 1);
	return new ua(e, r, i, n - Ba(t, r, i, 1) + 1);
}
function Ha(e) {
	return (14 + 11 * e) % 30 < 11;
}
var Ua = class {
	fromJulianDay(e) {
		return Va(this, Fa, e);
	}
	toJulianDay(e) {
		return Ba(Fa, e.year, e.month, e.day);
	}
	getDaysInMonth(e) {
		let t = 29 + e.month % 2;
		return e.month === 12 && Ha(e.year) && t++, t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInYear(e) {
		return Ha(e.year) ? 355 : 354;
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
}, Wa = class extends Ua {
	fromJulianDay(e) {
		return Va(this, Ia, e);
	}
	toJulianDay(e) {
		return Ba(Ia, e.year, e.month, e.day);
	}
	constructor(...e) {
		super(...e), this.identifier = "islamic-tbla";
	}
}, Ga = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=", Ka, qa;
function Ja(e) {
	return za + qa[e - La];
}
function Ya(e, t) {
	let n = e - La, r = 1 << 11 - (t - 1);
	return (Ka[n] & r) === 0 ? 29 : 30;
}
function Xa(e, t) {
	let n = Ja(e);
	for (let r = 1; r < t; r++) n += Ya(e, r);
	return n;
}
function Za(e) {
	return qa[e + 1 - La] - qa[e - La];
}
var Qa = class extends Ua {
	constructor() {
		if (super(), this.identifier = "islamic-umalqura", Ka ||= new Uint16Array(Uint8Array.from(atob(Ga), (e) => e.charCodeAt(0)).buffer), !qa) {
			qa = new Uint32Array(Ra - La + 1);
			let e = 0;
			for (let t = La; t <= Ra; t++) {
				qa[t - La] = e;
				for (let n = 1; n <= 12; n++) e += Ya(t, n);
			}
		}
	}
	fromJulianDay(e) {
		let t = e - Fa, n = Ja(La), r = Ja(Ra);
		if (t < n || t > r) return super.fromJulianDay(e);
		{
			let e = La - 1, n = 1, r = 1;
			for (; r > 0;) {
				e++, r = t - Ja(e) + 1;
				let i = Za(e);
				if (r === i) {
					n = 12;
					break;
				} else if (r < i) {
					let t = Ya(e, n);
					for (n = 1; r > t;) r -= t, n++, t = Ya(e, n);
					break;
				}
			}
			return new ua(this, e, n, t - Xa(e, n) + 1);
		}
	}
	toJulianDay(e) {
		return e.year < La || e.year > Ra ? super.toJulianDay(e) : Fa + Xa(e.year, e.month) + (e.day - 1);
	}
	getDaysInMonth(e) {
		return e.year < La || e.year > Ra ? super.getDaysInMonth(e) : Ya(e.year, e.month);
	}
	getDaysInYear(e) {
		return e.year < La || e.year > Ra ? super.getDaysInYear(e) : Za(e.year);
	}
}, $a = 347997, eo = 1080, to = 24 * eo, no = 29, ro = 12 * eo + 793, io = no * to + ro;
function ao(e) {
	return Br(e * 7 + 1, 19) < 7;
}
function oo(e) {
	let t = Math.floor((235 * e - 234) / 19), n = 12084 + 13753 * t, r = t * 29 + Math.floor(n / 25920);
	return Br(3 * (r + 1), 7) < 3 && (r += 1), r;
}
function so(e) {
	let t = oo(e - 1), n = oo(e);
	return oo(e + 1) - n === 356 ? 2 : +(n - t === 382);
}
function co(e) {
	return oo(e) + so(e);
}
function lo(e) {
	return co(e + 1) - co(e);
}
function uo(e) {
	let t = lo(e);
	switch (t > 380 && (t -= 30), t) {
		case 353: return 0;
		case 354: return 1;
		case 355: return 2;
	}
}
function fo(e, t) {
	if (t >= 6 && !ao(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13) return 29;
	let n = uo(e);
	return t === 2 ? n === 2 ? 30 : 29 : t === 3 ? n === 0 ? 29 : 30 : t === 6 ? ao(e) ? 30 : 0 : 30;
}
var po = class {
	fromJulianDay(e) {
		let t = e - $a, n = t * to / io, r = Math.floor((19 * n + 234) / 235) + 1, i = co(r), a = Math.floor(t - i);
		for (; a < 1;) r--, i = co(r), a = Math.floor(t - i);
		let o = 1, s = 0;
		for (; s < a;) s += fo(r, o), o++;
		o--, s -= fo(r, o);
		let c = a - s;
		return new ua(this, r, o, c);
	}
	toJulianDay(e) {
		let t = co(e.year);
		for (let n = 1; n < e.month; n++) t += fo(e.year, n);
		return t + e.day + $a;
	}
	getDaysInMonth(e) {
		return fo(e.year, e.month);
	}
	getMonthsInYear(e) {
		return ao(e.year) ? 13 : 12;
	}
	getDaysInYear(e) {
		return lo(e.year);
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
		t.year !== e.year && (ao(t.year) && !ao(e.year) && t.month > 6 ? e.month-- : !ao(t.year) && ao(e.year) && t.month > 6 && e.month++);
	}
	constructor() {
		this.identifier = "hebrew";
	}
}, mo = 1723856, ho = 1824665, go = 5500;
function _o(e, t, n, r) {
	return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function vo(e, t) {
	let n = Math.floor(4 * (t - e) / 1461), r = 1 + Math.floor((t - _o(e, n, 1, 1)) / 30);
	return [
		n,
		r,
		t + 1 - _o(e, n, r, 1)
	];
}
function yo(e) {
	return Math.floor(e % 4 / 3);
}
function bo(e, t) {
	return t % 13 == 0 ? yo(e) + 5 : 30;
}
var xo = class {
	fromJulianDay(e) {
		let [t, n, r] = vo(mo, e), i = "AM";
		return t <= 0 && (i = "AA", t += go), new ua(this, i, t, n, r);
	}
	toJulianDay(e) {
		let t = e.year;
		return e.era === "AA" && (t -= go), _o(mo, t, e.month, e.day);
	}
	getDaysInMonth(e) {
		return bo(e.year, e.month);
	}
	getMonthsInYear() {
		return 13;
	}
	getDaysInYear(e) {
		return 365 + yo(e.year);
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
}, So = class extends xo {
	fromJulianDay(e) {
		let [t, n, r] = vo(mo, e);
		return t += go, new ua(this, "AA", t, n, r);
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
}, Co = class extends xo {
	fromJulianDay(e) {
		let [t, n, r] = vo(ho, e), i = "CE";
		return t <= 0 && (i = "BCE", t = 1 - t), new ua(this, i, t, n, r);
	}
	toJulianDay(e) {
		let t = e.year;
		return e.era === "BCE" && (t = 1 - t), _o(ho, t, e.month, e.day);
	}
	getDaysInMonth(e) {
		let t = e.year;
		return e.era === "BCE" && (t = 1 - t), bo(t, e.month);
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
function wo(e) {
	switch (e) {
		case "buddhist": return new Sa();
		case "ethiopic": return new xo();
		case "ethioaa": return new So();
		case "coptic": return new Co();
		case "hebrew": return new po();
		case "indian": return new Pa();
		case "islamic-civil": return new Ua();
		case "islamic-tbla": return new Wa();
		case "islamic-umalqura": return new Qa();
		case "japanese": return new ya();
		case "persian": return new ja();
		case "roc": return new Da();
		default: return new qr();
	}
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/DateFormatter.mjs
var To = /* @__PURE__ */ new Map(), Eo = class {
	constructor(e, t = {}) {
		this.formatter = Oo(e, t), this.options = t;
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
		return Mo() && (this.resolvedHourCycle ||= No(e.locale, this.options), e.hourCycle = this.resolvedHourCycle, e.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), e.calendar === "ethiopic-amete-alem" && (e.calendar = "ethioaa"), e;
	}
}, Do = {
	true: { ja: "h11" },
	false: {}
};
function Oo(e, t = {}) {
	if (typeof t.hour12 == "boolean" && Ao()) {
		t = { ...t };
		let n = Do[String(t.hour12)][e.split("-")[0]], r = t.hour12 ? "h12" : "h23";
		t.hourCycle = n ?? r, delete t.hour12;
	}
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (To.has(n)) return To.get(n);
	let r = new Intl.DateTimeFormat(e, t);
	return To.set(n, r), r;
}
var ko = null;
function Ao() {
	return ko ??= new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		hour12: !1
	}).format(new Date(2020, 2, 3, 0)) === "24", ko;
}
var jo = null;
function Mo() {
	return jo ??= new Intl.DateTimeFormat("fr", {
		hour: "numeric",
		hour12: !1
	}).resolvedOptions().hourCycle === "h12", jo;
}
function No(e, t) {
	if (!t.timeStyle && !t.hour) return;
	e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
	let n = Oo(e, {
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
function Po(e, t = ui()) {
	return Io(e) ? e.toDate() : e.toDate(t);
}
function Fo(e) {
	return e instanceof da;
}
function Io(e) {
	return e instanceof fa;
}
function Lo(e) {
	return Fo(e) || Io(e);
}
function Ro(e) {
	if (e instanceof Date) {
		let t = e.getFullYear(), n = e.getMonth() + 1;
		return new Date(t, n, 0).getDate();
	} else return e.set({ day: 100 }).day;
}
function zo(e, t) {
	return e.compare(t) < 0;
}
function Bo(e, t) {
	return e.compare(t) > 0;
}
function Vo(e, t, n) {
	let r = ni(e, n, "sun");
	return t > r ? e.subtract({ days: r + 7 - t }) : t === r ? e : e.subtract({ days: r - t });
}
function Ho(e, t, n) {
	let r = ni(e, n, "sun"), i = t === 0 ? 6 : t - 1;
	return r === i ? e : r > i ? e.add({ days: 7 - r + i }) : e.add({ days: i - r });
}
function Uo(e) {
	let { defaultValue: t, defaultPlaceholder: n, granularity: r = "day", locale: i = "en" } = e;
	if (Array.isArray(t) && t.length) return t.at(-1).copy();
	if (t && !Array.isArray(t)) return t.copy();
	if (n) return n.copy();
	let a = /* @__PURE__ */ new Date(), o = a.getFullYear(), s = a.getMonth() + 1, c = a.getDate(), l = [
		"hour",
		"minute",
		"second"
	], u = wo(new Eo(i).resolvedOptions().calendar);
	return l.includes(r ?? "day") ? Mi(new da(o, s, c, 0, 0, 0), u) : Mi(new ua(o, s, c), u);
}
//#endregion
//#region node_modules/reka-ui/dist/date/utils.js
function Wo(e, t) {
	let n = [];
	for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
	return n;
}
function Go(e) {
	let t = e.querySelector("[data-selected]");
	if (t) return t.focus();
	let n = e.querySelector("[data-today]");
	if (n) return n.focus();
	let r = e.querySelector("[data-reka-calendar-day]");
	if (r) return r.focus();
}
//#endregion
//#region node_modules/reka-ui/dist/date/calendar.js
function Ko(e, t) {
	let n = [], r = e.add({ days: 1 }), i = t;
	for (; r.compare(i) < 0;) n.push(r), r = r.add({ days: 1 });
	return n;
}
function qo(e) {
	let { dateObj: t, weekStartsOn: n, fixedWeeks: r, locale: i } = e, a = Ro(t), o = Array.from({ length: a }, (e, n) => t.set({ day: n + 1 })), s = fi(t), c = pi(t), l = Vo(s, n, i), u = Ho(c, n, i), d = Ko(l.subtract({ days: 1 }), s), f = Ko(c, u.add({ days: 1 })), p = d.length + o.length + f.length;
	if (r && p < 42) {
		let e = 42 - p, n = f.at(-1);
		n ||= pi(t);
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
		rows: Wo(m, 7)
	};
}
function Jo(e) {
	let { dateObj: t, numberOfMonths: n = 1, pagedNavigation: r = !1 } = e;
	return n && r ? Array.from({ length: Math.floor(12 / n) }, (e, r) => fi(t.set({ month: r * n + 1 }))) : Array.from({ length: 12 }, (e, n) => fi(t.set({ month: n + 1 })));
}
function Yo(e) {
	let { numberOfMonths: t, dateObj: n, ...r } = e, i = [];
	if (!t || t === 1) return i.push(qo({
		...r,
		dateObj: n
	})), i;
	i.push(qo({
		...r,
		dateObj: n
	}));
	for (let e = 1; e < t; e++) {
		let t = n.add({ months: e });
		i.push(qo({
			...r,
			dateObj: t
		}));
	}
	return i;
}
function Xo({ start: e, end: t }) {
	let n = [];
	if (!e || !t) return n;
	let r = mi(e);
	for (; r.compare(t) <= 0;) n.push(r), r = mi(r.add({ years: 1 }));
	return n;
}
function Zo(e) {
	return (1 - ni(new ua(2025, 1, 6), e) + 7) % 7;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useDateFormatter.js
function Qo(e, t = {}) {
	let n = O(e);
	function r() {
		return n.value;
	}
	function i(e) {
		n.value = e;
	}
	function a(e, r) {
		return new Eo(n.value, {
			...t,
			...r
		}).format(e);
	}
	function o(e, t = !0) {
		return Lo(e) && t ? a(Po(e), {
			dateStyle: "long",
			timeStyle: "long"
		}) : a(Po(e), { dateStyle: "long" });
	}
	function s(e, r = {}) {
		return new Eo(n.value, {
			...t,
			month: "long",
			year: "numeric",
			...r
		}).format(e);
	}
	function c(e, r = {}) {
		return new Eo(n.value, {
			...t,
			month: "long",
			...r
		}).format(e);
	}
	function l() {
		let e = ii(ui());
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
			label: c(Po(e.set({ month: t }))),
			value: t
		}));
	}
	function u(e, r = {}) {
		return new Eo(n.value, {
			...t,
			year: "numeric",
			...r
		}).format(e);
	}
	function d(e, r) {
		return Io(e) ? new Eo(n.value, {
			...t,
			...r,
			timeZone: e.timeZone
		}).formatToParts(Po(e)) : new Eo(n.value, {
			...t,
			...r
		}).formatToParts(Po(e));
	}
	function f(e, r = "narrow") {
		return new Eo(n.value, {
			...t,
			weekday: r
		}).format(e);
	}
	function p(e) {
		let r = new Eo(n.value, {
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
function $o(e) {
	let t = Ar({ dir: O("ltr") });
	return R(() => e?.value || t.dir?.value || "ltr");
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useEmitAsProps.js
function es(e) {
	let t = y(), n = t?.type.emits, r = {};
	return n?.length || console.warn(`No emitted event found. Please check component: ${t?.type.__name}`), n?.forEach((t) => {
		r[Ee(fe(t))] = (...n) => e(t, ...n);
	}), r;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useFilter.js
function ts(e) {
	let t = R(() => z(e)), n = R(() => new Intl.Collator("en", {
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
var ns = 0;
function rs() {
	s((e) => {
		if (!Rt) return;
		let t = document.querySelectorAll("[data-reka-focus-guard]");
		document.body.insertAdjacentElement("afterbegin", t[0] ?? is()), document.body.insertAdjacentElement("beforeend", t[1] ?? is()), ns++, e(() => {
			ns === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((e) => e.remove()), ns--;
		});
	});
}
function is() {
	let e = document.createElement("span");
	return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useFormControl.js
function as(e) {
	return R(() => A(e) ? !!xn(e)?.closest("form") : !0);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useForwardExpose.js
function q() {
	let e = y(), t = O(), n = R(() => r());
	g(() => {
		n.value !== r() && oe(t);
	});
	function r() {
		return t.value && "$el" in t.value && ["#text", "#comment"].includes(t.value.$el.nodeName) ? t.value.$el.nextElementSibling : xn(t);
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
function J(e) {
	let t = y(), n = Object.keys(t?.type.props ?? {}).reduce((e, n) => {
		let r = (t?.type.props[n]).default;
		return r !== void 0 && (e[n] = r), e;
	}, {}), r = de(e);
	return R(() => {
		let e = {}, i = t?.vnode.props ?? {};
		return Object.keys(i).forEach((t) => {
			e[fe(t)] = i[t];
		}), Object.keys({
			...n,
			...e
		}).reduce((e, t) => (r.value[t] !== void 0 && (e[t] = r.value[t]), e), {});
	});
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useForwardPropsEmits.js
function Y(e, t) {
	let n = J(e), r = t ? es(t) : {};
	return R(() => ({
		...n.value,
		...r
	}));
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useGraceArea.js
function os(e, t) {
	let n = cn(!1, 300);
	jt(() => {
		n.value = !1;
	});
	let r = O(null), i = Mt();
	function a() {
		r.value = null, n.value = !1;
	}
	function o(e, t) {
		if (!t) return;
		let i = e.currentTarget, a = {
			x: e.clientX,
			y: e.clientY
		}, o = cs(a, ss(a, i.getBoundingClientRect()), 1), s = ls(t.getBoundingClientRect());
		r.value = ds([...o, ...s]), n.value = !0;
	}
	return s((n) => {
		if (e.value && t.value) {
			let r = (e) => o(e, t.value), i = (t) => o(t, e.value);
			e.value.addEventListener("pointerleave", r), t.value.addEventListener("pointerleave", i), n(() => {
				e.value?.removeEventListener("pointerleave", r), t.value?.removeEventListener("pointerleave", i);
			});
		}
	}), s((n) => {
		if (r.value) {
			let o = (n) => {
				if (!r.value || !(n.target instanceof Element)) return;
				let o = n.target, s = {
					x: n.clientX,
					y: n.clientY
				}, c = e.value?.contains(o) || t.value?.contains(o), l = !us(s, r.value), u = !!o.closest("[data-grace-area-trigger]");
				c ? a() : (l || u) && (a(), i.trigger());
			};
			e.value?.ownerDocument.addEventListener("pointermove", o), n(() => e.value?.ownerDocument.removeEventListener("pointermove", o));
		}
	}), {
		isPointerInTransit: n,
		onPointerExit: i.on
	};
}
function ss(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function cs(e, t, n = 5) {
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
function ls(e) {
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
function us(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e].x, s = t[e].y, c = t[a].x, l = t[a].y;
		s > r != l > r && n < (c - o) * (r - s) / (l - s) + o && (i = !i);
	}
	return i;
}
function ds(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), fs(t);
}
function fs(e) {
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
var ps = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, ms = /* @__PURE__ */ new WeakMap(), hs = /* @__PURE__ */ new WeakMap(), gs = {}, _s = 0, vs = function(e) {
	return e && (e.host || vs(e.parentNode));
}, ys = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = vs(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, bs = function(e, t, n, r) {
	var i = ys(t, Array.isArray(e) ? e : [e]);
	gs[n] || (gs[n] = /* @__PURE__ */ new WeakMap());
	var a = gs[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (ms.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				ms.set(e, c), a.set(e, l), o.push(e), c === 1 && i && hs.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), _s++, function() {
		o.forEach(function(e) {
			var t = ms.get(e) - 1, i = a.get(e) - 1;
			ms.set(e, t), a.set(e, i), t || (hs.has(e) || e.removeAttribute(r), hs.delete(e)), i || e.removeAttribute(n);
		}), _s--, _s || (ms = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakMap(), hs = /* @__PURE__ */ new WeakMap(), gs = {});
	};
}, xs = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || ps(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), bs(r, i, n, "aria-hidden")) : function() {
		return null;
	};
};
//#endregion
//#region node_modules/reka-ui/dist/shared/useHideOthers.js
function Ss(e) {
	let t;
	C(() => xn(e), (e) => {
		let n = !1;
		try {
			n = !!e?.closest("[popover]:not(:popover-open)");
		} catch {}
		e && !n ? t = xs(e) : t && t();
	}), m(() => {
		t && t();
	});
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useId.js
var Cs = 0;
function ws(e, t = "reka") {
	if (e) return e;
	let n;
	return n = "useId" in Se ? c?.() : Ar({ useId: void 0 }).useId?.() ?? `${++Cs}`, t ? `${t}-${n}` : n;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useKbd.js
function Ts() {
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
function Es(e) {
	let t = Ar({ locale: O("en") });
	return R(() => e?.value || t.locale?.value || "en");
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useSize.js
function Ds(e) {
	let t = O(), n = R(() => t.value?.width ?? 0), r = R(() => t.value?.height ?? 0);
	return p(() => {
		let n = xn(e);
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
function Os(e, t) {
	let n = O(e);
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
function ks(e) {
	let t = cn("", 1e3);
	return {
		search: t,
		handleTypeaheadSearch: (n, r) => {
			if (t.value += n, e) e(n);
			else {
				let e = Sr(), n = r.map((e) => ({
					...e,
					textValue: e.value?.textValue ?? e.ref.textContent?.trim() ?? ""
				})), i = n.find((t) => t.ref === e), a = js(n.map((e) => e.textValue), t.value, i?.textValue), o = n.find((e) => e.textValue === a);
				return o && o.ref.focus(), o?.ref;
			}
		},
		resetTypeahead: () => {
			t.value = "";
		}
	};
}
function As(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function js(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = As(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
//#endregion
//#region node_modules/reka-ui/dist/Presence/usePresence.js
function Ms(e, n) {
	let r = O({}), i = O("none"), a = O(e), o = e.value ? "mounted" : "unmounted", s, c = n.value?.ownerDocument.defaultView ?? yn, { state: l, dispatch: u } = Os(o, {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	}), d = (e) => {
		if (Rt) {
			let t = new CustomEvent(e, {
				bubbles: !1,
				cancelable: !1
			});
			n.value?.dispatchEvent(t);
		}
	};
	C(e, async (e, a) => {
		let o = a !== e;
		if (await t(), o) {
			let t = i.value, o = Ns(n.value);
			e ? (u("MOUNT"), d("enter"), o === "none" && d("after-enter")) : o === "none" || o === "undefined" || r.value?.display === "none" ? (u("UNMOUNT"), d("leave"), d("after-leave")) : a && t !== o ? (u("ANIMATION_OUT"), d("leave")) : (u("UNMOUNT"), d("after-leave"));
		}
	}, { immediate: !0 });
	let f = (e) => {
		let t = Ns(n.value), r = t.includes(CSS.escape(e.animationName)), i = l.value === "mounted" ? "enter" : "leave";
		if (e.target === n.value && r && (d(`after-${i}`), u("ANIMATION_END"), !a.value)) {
			let e = n.value.style.animationFillMode;
			n.value.style.animationFillMode = "forwards", s = c?.setTimeout(() => {
				n.value?.style.animationFillMode === "forwards" && (n.value.style.animationFillMode = e);
			});
		}
		e.target === n.value && t === "none" && u("ANIMATION_END");
	}, p = (e) => {
		e.target === n.value && (i.value = Ns(n.value));
	}, h = C(n, (e, t) => {
		e ? (r.value = getComputedStyle(e), e.addEventListener("animationstart", p), e.addEventListener("animationcancel", f), e.addEventListener("animationend", f)) : (u("ANIMATION_END"), s !== void 0 && c?.clearTimeout(s), t?.removeEventListener("animationstart", p), t?.removeEventListener("animationcancel", f), t?.removeEventListener("animationend", f));
	}, { immediate: !0 }), g = C(l, () => {
		let e = Ns(n.value);
		i.value = l.value === "mounted" ? e : "none";
	});
	return m(() => {
		h(), g();
	}), { isPresent: R(() => ["mounted", "unmountSuspended"].includes(l.value)) };
}
function Ns(e) {
	return e && getComputedStyle(e).animationName || "none";
}
//#endregion
//#region node_modules/reka-ui/dist/Presence/Presence.js
var Ps = /* @__PURE__ */ U({
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
		let { present: r, forceMount: i } = we(e), a = O(), { isPresent: o } = Ms(r, a);
		n({ present: o });
		let s = t.default({ present: o.value });
		s = Er(s || []);
		let c = y();
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
		return () => i.value || r.value || o.value ? Te(t.default({ present: o.value })[0], { ref: (e) => {
			let t = xn(e);
			return t?.hasAttribute === void 0 || (t?.hasAttribute("data-reka-popper-content-wrapper") ? a.value = t.firstElementChild : a.value = t), t;
		} }) : null;
	}
}), Fs = /* @__PURE__ */ U({
	name: "PrimitiveSlot",
	inheritAttrs: !1,
	setup(e, { attrs: t, slots: n }) {
		return () => {
			if (!n.default) return null;
			let e = Er(n.default()), r = e.findIndex((e) => e.type !== ue);
			if (r === -1) return e;
			let i = e[r];
			delete i.props?.ref;
			let a = i.props ? I(t, i.props) : t, o = ae({
				...i,
				props: {}
			}, a);
			return e.length === 1 ? o : (e[r] = o, e);
		};
	}
}), Is = [
	"area",
	"img",
	"input"
], X = /* @__PURE__ */ U({
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
		return typeof r == "string" && Is.includes(r) ? () => Te(r, t) : r === "template" ? () => Te(Fs, t, { default: n.default }) : () => Te(e.as, t, { default: n.default });
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Primitive/usePrimitiveElement.js
function Ls() {
	let e = O();
	return {
		primitiveElement: e,
		currentElement: R(() => ["#text", "#comment"].includes(e.value?.$el.nodeName) ? e.value?.$el.nextElementSibling : xn(e))
	};
}
//#endregion
//#region node_modules/reka-ui/dist/Collapsible/CollapsibleRoot.js
var [Rs, zs] = /* @__PURE__ */ K("CollapsibleRoot"), Bs = /* @__PURE__ */ U({
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
		let r = e, i = Bn(r, "open", n, {
			defaultValue: r.defaultOpen,
			passive: r.open === void 0
		}), { disabled: a, unmountOnHide: s } = we(r);
		return zs({
			contentId: "",
			disabled: a,
			open: i,
			unmountOnHide: s,
			onOpenToggle: () => {
				a.value || (i.value = !i.value);
			}
		}), t({ open: i }), q(), (e, t) => (o(), P(z(X), {
			as: e.as,
			"as-child": r.asChild,
			"data-state": z(i) ? "open" : "closed",
			"data-disabled": z(a) ? "" : void 0
		}, {
			default: u(() => [v(e.$slots, "default", { open: z(i) })]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-state",
			"data-disabled"
		]));
	}
}), Vs = /* @__PURE__ */ U({
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
	setup(e, { emit: n }) {
		let r = e, i = n, a = Rs();
		a.contentId ||= ws(void 0, "reka-collapsible-content");
		let s = O(), { forwardRef: c, currentElement: l } = q(), d = O(0), f = O(0), m = R(() => a.open.value), h = O(m.value), g = O();
		C(() => [m.value, s.value?.present], async () => {
			await t();
			let e = l.value;
			if (!e) return;
			g.value = g.value || {
				transitionDuration: e.style.transitionDuration,
				animationName: e.style.animationName
			}, e.style.transitionDuration = "0s", e.style.animationName = "none";
			let n = e.getBoundingClientRect();
			f.value = n.height, d.value = n.width, h.value || (e.style.transitionDuration = g.value.transitionDuration, e.style.animationName = g.value.animationName);
		}, { immediate: !0 });
		let _ = R(() => h.value && a.open.value);
		return p(() => {
			requestAnimationFrame(() => {
				h.value = !1;
			});
		}), Sn(l, "beforematch", (e) => {
			requestAnimationFrame(() => {
				a.onOpenToggle(), i("contentFound");
			});
		}), (e, t) => (o(), P(z(Ps), {
			ref_key: "presentRef",
			ref: s,
			present: e.forceMount || z(a).open.value,
			"force-mount": !0
		}, {
			default: u(({ present: t }) => [W(z(X), I(e.$attrs, {
				id: z(a).contentId,
				ref: z(c),
				"as-child": r.asChild,
				as: e.as,
				hidden: t ? void 0 : z(a).unmountOnHide.value ? "" : "until-found",
				"data-state": _.value ? void 0 : z(a).open.value ? "open" : "closed",
				"data-disabled": z(a).disabled?.value ? "" : void 0,
				style: {
					"--reka-collapsible-content-height": `${f.value}px`,
					"--reka-collapsible-content-width": `${d.value}px`
				}
			}), {
				default: u(() => [!z(a).unmountOnHide.value || t ? v(e.$slots, "default", { key: 0 }) : M("v-if", !0)]),
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
}), Hs = /* @__PURE__ */ U({
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
		q();
		let n = Rs();
		return (e, r) => (o(), P(z(X), {
			type: e.as === "button" ? "button" : void 0,
			as: e.as,
			"as-child": t.asChild,
			"aria-controls": z(n).contentId,
			"aria-expanded": z(n).open.value,
			"data-state": z(n).open.value ? "open" : "closed",
			"data-disabled": z(n).disabled?.value ? "" : void 0,
			disabled: z(n).disabled?.value,
			onClick: z(n).onOpenToggle
		}, {
			default: u(() => [v(e.$slots, "default")]),
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
function Us({ type: e, defaultValue: t, modelValue: n }) {
	let r = n || t;
	return n !== void 0 || t !== void 0 ? Array.isArray(r) ? "multiple" : "single" : e ?? "single";
}
function Ws({ type: e, defaultValue: t, modelValue: n }) {
	return e || Us({
		type: e,
		defaultValue: t,
		modelValue: n
	});
}
function Gs({ type: e, defaultValue: t }) {
	return t === void 0 ? e === "single" ? void 0 : [] : t;
}
function Ks(e, t) {
	let n = R(() => Ws(e)), r = Bn(e, "modelValue", t, {
		defaultValue: Gs(e),
		passive: e.modelValue === void 0,
		deep: !0
	});
	function i(e) {
		if (n.value === "single") r.value = hr(e, r.value) ? void 0 : e;
		else {
			let t = Array.isArray(r.value) ? [...r.value || []] : [r.value].filter(Boolean);
			if (Tr(t, e)) {
				let n = t.findIndex((t) => hr(t, e));
				t.splice(n, 1);
			} else t.push(e);
			r.value = t;
		}
	}
	return {
		modelValue: r,
		changeModelValue: i,
		isSingle: R(() => n.value === "single")
	};
}
//#endregion
//#region node_modules/reka-ui/dist/Accordion/AccordionRoot.js
var [qs, Js] = /* @__PURE__ */ K("AccordionRoot"), Ys = /* @__PURE__ */ U({
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
		let n = e, r = t, { dir: i, disabled: a, unmountOnHide: s } = we(n), c = $o(i), { modelValue: l, changeModelValue: d, isSingle: f } = Ks(n, r), { forwardRef: p, currentElement: m } = q();
		return Js({
			disabled: a,
			direction: c,
			orientation: n.orientation,
			parentElement: m,
			isSingle: f,
			collapsible: n.collapsible,
			modelValue: l,
			changeModelValue: d,
			unmountOnHide: s
		}), (e, t) => (o(), P(z(X), {
			ref: z(p),
			"as-child": e.asChild,
			as: e.as
		}, {
			default: u(() => [v(e.$slots, "default", { modelValue: z(l) })]),
			_: 3
		}, 8, ["as-child", "as"]));
	}
}), Xs = /* @__PURE__ */ function(e) {
	return e.Open = "open", e.Closed = "closed", e;
}(Xs || {}), [Zs, Qs] = /* @__PURE__ */ K("AccordionItem"), $s = /* @__PURE__ */ U({
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
		let n = e, r = qs(), i = R(() => r.isSingle.value ? n.value === r.modelValue.value : Array.isArray(r.modelValue.value) && r.modelValue.value.includes(n.value)), a = R(() => r.disabled.value || n.disabled), s = R(() => a.value ? "" : void 0), c = R(() => i.value ? Xs.Open : Xs.Closed);
		t({
			open: i,
			dataDisabled: s
		});
		let { currentRef: l, currentElement: d } = q();
		Qs({
			open: i,
			dataState: c,
			disabled: a,
			dataDisabled: s,
			triggerId: "",
			currentRef: l,
			currentElement: d,
			value: R(() => n.value)
		});
		function f(e) {
			let t = e.target;
			if (Array.from(r.parentElement.value?.querySelectorAll("[data-reka-collection-item]") ?? []).findIndex((e) => e === t) === -1) return null;
			Or(e, t, r.parentElement.value, {
				arrowKeyOptions: r.orientation,
				dir: r.direction.value,
				focus: !0
			});
		}
		return (e, t) => (o(), P(z(Bs), {
			"data-orientation": z(r).orientation,
			"data-disabled": s.value,
			"data-state": c.value,
			disabled: a.value,
			open: i.value,
			as: n.as,
			"as-child": n.asChild,
			"unmount-on-hide": n.unmountOnHide ?? z(r).unmountOnHide.value,
			onKeydown: be(f, [
				"up",
				"down",
				"left",
				"right",
				"home",
				"end"
			])
		}, {
			default: u(() => [v(e.$slots, "default", { open: i.value })]),
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
}), ec = /* @__PURE__ */ U({
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
		let t = e, n = qs(), r = Zs();
		return q(), (e, i) => (o(), P(z(Vs), {
			role: "region",
			"as-child": t.asChild,
			as: e.as,
			"force-mount": t.forceMount,
			"aria-labelledby": z(r).triggerId,
			"data-state": z(r).dataState.value,
			"data-disabled": z(r).dataDisabled.value,
			"data-orientation": z(n).orientation,
			style: {
				"--reka-accordion-content-width": "var(--reka-collapsible-content-width)",
				"--reka-accordion-content-height": "var(--reka-collapsible-content-height)"
			},
			onContentFound: i[0] ||= (e) => z(n).changeModelValue(z(r).value.value)
		}, {
			default: u(() => [v(e.$slots, "default")]),
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
}), tc = /* @__PURE__ */ U({
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
		let t = e, n = qs(), r = Zs();
		return q(), (e, i) => (o(), P(z(X), {
			as: t.as,
			"as-child": t.asChild,
			"data-orientation": z(n).orientation,
			"data-state": z(r).dataState.value,
			"data-disabled": z(r).dataDisabled.value
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-orientation",
			"data-state",
			"data-disabled"
		]));
	}
}), nc = /* @__PURE__ */ U({
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
		let t = e, n = qs(), r = Zs();
		r.triggerId ||= ws(void 0, "reka-accordion-trigger");
		function i() {
			let e = n.isSingle.value && r.open.value && !n.collapsible;
			r.disabled.value || e || n.changeModelValue(r.value.value);
		}
		return (e, a) => (o(), P(z(Hs), {
			id: z(r).triggerId,
			ref: z(r).currentRef,
			"data-reka-collection-item": "",
			as: t.as,
			"as-child": t.asChild,
			"aria-disabled": z(r).disabled.value || void 0,
			"aria-expanded": z(r).open.value || !1,
			"data-disabled": z(r).dataDisabled.value,
			"data-orientation": z(n).orientation,
			"data-state": z(r).dataState.value,
			disabled: z(r).disabled.value,
			onClick: i
		}, {
			default: u(() => [v(e.$slots, "default")]),
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
}), [rc, ic] = /* @__PURE__ */ K("DialogRoot"), ac = /* @__PURE__ */ U({
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
		let n = e, r = Bn(n, "open", t, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		}), i = O(), a = O(), { modal: o } = we(n);
		return ic({
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
		}), (e, t) => v(e.$slots, "default", {
			open: z(r),
			close: () => r.value = !1
		});
	}
}), oc = /* @__PURE__ */ U({
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
		q();
		let n = rc();
		return (e, r) => (o(), P(z(X), I(t, {
			type: e.as === "button" ? "button" : void 0,
			onClick: r[0] ||= (e) => z(n).onOpenChange(!1)
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["type"]));
	}
}), sc = "dismissableLayer.pointerDownOutside", cc = "dismissableLayer.focusOutside";
function lc(e, t) {
	if (!(t instanceof Element)) return !1;
	let n = t.closest("[data-dismissable-layer]"), r = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), i = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
	return !!(n && (r === n || i.indexOf(r) < i.indexOf(n)));
}
function uc(e, t, n = !0) {
	let r = t?.value?.ownerDocument ?? globalThis?.document, i = O(!1), a = O(() => {});
	return s((o) => {
		if (!Rt || !A(n)) return;
		let s = async (n) => {
			let o = n.target;
			if (!(!t?.value || !o)) {
				if (lc(t.value, o)) {
					i.value = !1;
					return;
				}
				if (n.target && !i.value) {
					let t = { originalEvent: n };
					function i() {
						Cr(sc, e, t);
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
		A(n) && (i.value = !0);
	} };
}
function dc(e, n, r = !0) {
	let i = n?.value?.ownerDocument ?? globalThis?.document, a = O(!1);
	return s((o) => {
		if (!Rt || !A(r)) return;
		let s = async (r) => {
			if (!n?.value) return;
			await t(), await t();
			let i = r.target;
			!n.value || !i || lc(n.value, i) || r.target && !a.value && Cr(cc, e, { originalEvent: r });
		};
		i.addEventListener("focusin", s), o(() => i.removeEventListener("focusin", s));
	}), {
		onFocusCapture: () => {
			A(r) && (a.value = !0);
		},
		onBlurCapture: () => {
			A(r) && (a.value = !1);
		}
	};
}
//#endregion
//#region node_modules/reka-ui/dist/DismissableLayer/DismissableLayer.js
var fc = /* @__PURE__ */ ye({
	layersRoot: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	originalBodyPointerEvents: void 0,
	branches: /* @__PURE__ */ new Set()
}), pc = /* @__PURE__ */ U({
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
	setup(e, { emit: n }) {
		let r = e, i = n, { forwardRef: a, currentElement: c } = q(), l = R(() => c.value?.ownerDocument ?? globalThis.document), d = R(() => fc.layersRoot), f = R(() => c.value ? Array.from(d.value).indexOf(c.value) : -1), p = R(() => fc.layersWithOutsidePointerEventsDisabled.size > 0), m = R(() => {
			let e = Array.from(d.value), [t] = [...fc.layersWithOutsidePointerEventsDisabled].slice(-1), n = e.indexOf(t);
			return f.value >= n;
		}), h = uc(async (e) => {
			let n = [...fc.branches].some((t) => t?.contains(e.target));
			!m.value || n || (i("pointerDownOutside", e), i("interactOutside", e), await t(), e.defaultPrevented || i("dismiss"));
		}, c), g = dc((e) => {
			[...fc.branches].some((t) => t?.contains(e.target)) || (i("focusOutside", e), i("interactOutside", e), e.defaultPrevented || i("dismiss"));
		}, c);
		return On("Escape", (e) => {
			f.value === d.value.size - 1 && (i("escapeKeyDown", e), e.defaultPrevented || i("dismiss"));
		}), s((e) => {
			c.value && (r.disableOutsidePointerEvents && (fc.layersWithOutsidePointerEventsDisabled.size === 0 && (fc.originalBodyPointerEvents = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), fc.layersWithOutsidePointerEventsDisabled.add(c.value)), d.value.add(c.value), e(() => {
				r.disableOutsidePointerEvents && fc.layersWithOutsidePointerEventsDisabled.size === 1 && !wr(fc.originalBodyPointerEvents) && (l.value.body.style.pointerEvents = fc.originalBodyPointerEvents);
			}));
		}), s((e) => {
			e(() => {
				c.value && (d.value.delete(c.value), fc.layersWithOutsidePointerEventsDisabled.delete(c.value));
			});
		}), (e, t) => (o(), P(z(X), {
			ref: z(a),
			"as-child": e.asChild,
			as: e.as,
			"data-dismissable-layer": "",
			style: D({ pointerEvents: p.value ? m.value ? "auto" : "none" : void 0 }),
			onFocusCapture: z(g).onFocusCapture,
			onBlurCapture: z(g).onBlurCapture,
			onPointerdownCapture: z(h).onPointerDownCapture
		}, {
			default: u(() => [v(e.$slots, "default")]),
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
}), mc = Nt(() => O([]));
function hc() {
	let e = mc();
	return {
		add(t) {
			let n = e.value[0];
			t !== n && n?.pause(), e.value = gc(e.value, t), e.value.unshift(t);
		},
		remove(t) {
			e.value = gc(e.value, t), e.value[0]?.resume();
		}
	};
}
function gc(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
//#endregion
//#region node_modules/reka-ui/dist/FocusScope/utils.js
var _c = "focusScope.autoFocusOnMount", vc = "focusScope.autoFocusOnUnmount", yc = {
	bubbles: !1,
	cancelable: !0
};
function bc(e, { select: t = !1 } = {}) {
	let n = Sr();
	for (let r of e) if (Ec(r, { select: t }), Sr() !== n) return !0;
}
function xc(e) {
	let t = Sc(e);
	return [Cc(t, e), Cc(t.reverse(), e)];
}
function Sc(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function Cc(e, t) {
	for (let n of e) if (!wc(n, { upTo: t })) return n;
}
function wc(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function Tc(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function Ec(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = Sr();
		e.focus({ preventScroll: !0 }), e !== n && Tc(e) && t && e.select();
	}
}
//#endregion
//#region node_modules/reka-ui/dist/FocusScope/FocusScope.js
var Dc = /* @__PURE__ */ U({
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
	setup(e, { emit: n }) {
		let r = e, i = n, { currentRef: a, currentElement: c } = q(), l = O(null), d = hc(), f = /* @__PURE__ */ ye({
			paused: !1,
			pause() {
				this.paused = !0;
			},
			resume() {
				this.paused = !1;
			}
		});
		s((e) => {
			if (!Rt) return;
			let t = c.value;
			if (!r.trapped) return;
			function n(e) {
				if (f.paused || !t) return;
				let n = e.target;
				t.contains(n) ? l.value = n : Ec(l.value, { select: !0 });
			}
			function i(e) {
				if (f.paused || !t) return;
				let n = e.relatedTarget;
				n !== null && (t.contains(n) || Ec(l.value, { select: !0 }));
			}
			function a(e) {
				let n = l.value;
				n !== null && e.some((e) => e.removedNodes.length > 0) && (t.contains(n) || Ec(t));
			}
			document.addEventListener("focusin", n), document.addEventListener("focusout", i);
			let o = new MutationObserver(a);
			t && o.observe(t, {
				childList: !0,
				subtree: !0
			}), e(() => {
				document.removeEventListener("focusin", n), document.removeEventListener("focusout", i), o.disconnect();
			});
		}), s(async (e) => {
			let n = c.value;
			if (await t(), !n) return;
			d.add(f);
			let r = Sr();
			if (!n.contains(r)) {
				let e = new CustomEvent(_c, yc);
				n.addEventListener(_c, (e) => i("mountAutoFocus", e)), n.dispatchEvent(e), e.defaultPrevented || (bc(Sc(n), { select: !0 }), Sr() === r && Ec(n));
			}
			e(() => {
				n.removeEventListener(_c, (e) => i("mountAutoFocus", e));
				let e = new CustomEvent(vc, yc), t = (e) => {
					i("unmountAutoFocus", e);
				};
				n.addEventListener(vc, t), n.dispatchEvent(e), setTimeout(() => {
					e.defaultPrevented || Ec(r ?? document.body, { select: !0 }), n.removeEventListener(vc, t), d.remove(f);
				}, 0);
			});
		});
		function p(e) {
			if (!r.loop && !r.trapped || f.paused) return;
			let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = Sr();
			if (t && n) {
				let t = e.currentTarget, [i, a] = xc(t);
				i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r.loop && Ec(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r.loop && Ec(a, { select: !0 })) : n === t && e.preventDefault();
			}
		}
		return (e, t) => (o(), P(z(X), {
			ref_key: "currentRef",
			ref: a,
			tabindex: "-1",
			"as-child": e.asChild,
			as: e.as,
			onKeydown: p
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["as-child", "as"]));
	}
}), Oc = "menu.itemSelect", kc = ["Enter", " "], Ac = [
	"ArrowDown",
	"PageUp",
	"Home"
], jc = [
	"ArrowUp",
	"PageDown",
	"End"
], Mc = [...Ac, ...jc], Nc = {
	ltr: [...kc, "ArrowRight"],
	rtl: [...kc, "ArrowLeft"]
}, Pc = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
};
function Fc(e) {
	return e ? "open" : "closed";
}
function Ic(e) {
	return e === "indeterminate";
}
function Lc(e) {
	return Ic(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Rc(e) {
	let t = Sr();
	for (let n of e) if (n === t || (n.focus(), Sr() !== t)) return;
}
function zc(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e].x, s = t[e].y, c = t[a].x, l = t[a].y;
		s > r != l > r && n < (c - o) * (r - s) / (l - s) + o && (i = !i);
	}
	return i;
}
function Bc(e, t) {
	return t ? zc({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function Vc(e) {
	return e.pointerType === "mouse";
}
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogContentImpl.js
var Hc = /* @__PURE__ */ U({
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
		let n = e, r = t, i = rc(), { forwardRef: a, currentElement: s } = q();
		return i.titleId ||= ws(void 0, "reka-dialog-title"), i.descriptionId ||= ws(void 0, "reka-dialog-description"), p(() => {
			i.contentElement = s, Sr() !== document.body && (i.triggerElement.value = Sr());
		}), (e, t) => (o(), P(z(Dc), {
			"as-child": "",
			loop: "",
			trapped: n.trapFocus,
			onMountAutoFocus: t[5] ||= (e) => r("openAutoFocus", e),
			onUnmountAutoFocus: t[6] ||= (e) => r("closeAutoFocus", e)
		}, {
			default: u(() => [W(z(pc), I({
				id: z(i).contentId,
				ref: z(a),
				as: e.as,
				"as-child": e.asChild,
				"disable-outside-pointer-events": e.disableOutsidePointerEvents,
				role: "dialog",
				"aria-describedby": z(i).descriptionId,
				"aria-labelledby": z(i).titleId,
				"data-state": z(Fc)(z(i).open.value)
			}, e.$attrs, {
				onDismiss: t[0] ||= (e) => z(i).onOpenChange(!1),
				onEscapeKeyDown: t[1] ||= (e) => r("escapeKeyDown", e),
				onFocusOutside: t[2] ||= (e) => r("focusOutside", e),
				onInteractOutside: t[3] ||= (e) => r("interactOutside", e),
				onPointerDownOutside: t[4] ||= (e) => r("pointerDownOutside", e)
			}), {
				default: u(() => [v(e.$slots, "default")]),
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
}), Uc = /* @__PURE__ */ U({
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
		let n = e, r = t, i = rc(), a = es(r), { forwardRef: s, currentElement: c } = q();
		return Ss(c), (e, t) => (o(), P(Hc, I({
			...n,
			...z(a)
		}, {
			ref: z(s),
			"trap-focus": z(i).open.value,
			"disable-outside-pointer-events": !0,
			onCloseAutoFocus: t[0] ||= (e) => {
				e.defaultPrevented || (e.preventDefault(), z(i).triggerElement.value?.focus());
			},
			onPointerDownOutside: t[1] ||= (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
				(t.button === 2 || n) && e.preventDefault();
			},
			onFocusOutside: t[2] ||= (e) => {
				e.preventDefault();
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["trap-focus"]));
	}
}), Wc = /* @__PURE__ */ U({
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
		let n = e, r = es(t);
		q();
		let i = rc(), a = O(!1), s = O(!1);
		return (e, t) => (o(), P(Hc, I({
			...n,
			...z(r)
		}, {
			"trap-focus": !1,
			"disable-outside-pointer-events": !1,
			onCloseAutoFocus: t[0] ||= (e) => {
				e.defaultPrevented || (a.value || z(i).triggerElement.value?.focus(), e.preventDefault()), a.value = !1, s.value = !1;
			},
			onInteractOutside: t[1] ||= (e) => {
				e.defaultPrevented || (a.value = !0, e.detail.originalEvent.type === "pointerdown" && (s.value = !0));
				let t = e.target;
				z(i).triggerElement.value?.contains(t) && e.preventDefault(), e.detail.originalEvent.type === "focusin" && s.value && e.preventDefault();
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Gc = /* @__PURE__ */ U({
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
		let n = e, r = t, i = rc(), a = es(r), { forwardRef: s } = q();
		return (e, t) => (o(), P(z(Ps), { present: e.forceMount || z(i).open.value }, {
			default: u(() => [z(i).modal.value ? (o(), P(Uc, I({
				key: 0,
				ref: z(s)
			}, {
				...n,
				...z(a),
				...e.$attrs
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16)) : (o(), P(Wc, I({
				key: 1,
				ref: z(s)
			}, {
				...n,
				...z(a),
				...e.$attrs
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16))]),
			_: 3
		}, 8, ["present"]));
	}
}), Kc = /* @__PURE__ */ U({
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
		q();
		let n = rc();
		return (e, r) => (o(), P(z(X), I(t, { id: z(n).descriptionId }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), qc = /* @__PURE__ */ U({
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
		let t = rc();
		return Lr(!0), q(), (e, n) => (o(), P(z(X), {
			as: e.as,
			"as-child": e.asChild,
			"data-state": z(t).open.value ? "open" : "closed",
			style: { "pointer-events": "auto" }
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-state"
		]));
	}
}), Jc = /* @__PURE__ */ U({
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
		let t = rc(), { forwardRef: n } = q();
		return (e, r) => z(t)?.modal.value ? (o(), P(z(Ps), {
			key: 0,
			present: e.forceMount || z(t).open.value
		}, {
			default: u(() => [W(qc, I(e.$attrs, {
				ref: z(n),
				as: e.as,
				"as-child": e.asChild
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["as", "as-child"])]),
			_: 3
		}, 8, ["present"])) : M("v-if", !0);
	}
}), Yc = /* @__PURE__ */ U({
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
		let t = Cn();
		return (e, n) => z(t) || e.forceMount ? (o(), P(ie, {
			key: 0,
			to: e.to,
			disabled: e.disabled,
			defer: e.defer
		}, [v(e.$slots, "default")], 8, [
			"to",
			"disabled",
			"defer"
		])) : M("v-if", !0);
	}
}), Xc = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(Yc), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Zc = /* @__PURE__ */ U({
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
		let t = e, n = rc();
		return q(), (e, r) => (o(), P(z(X), I(t, { id: z(n).titleId }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), Qc = /* @__PURE__ */ U({
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
		let t = e, n = rc(), { forwardRef: r, currentElement: i } = q();
		return n.contentId ||= ws(void 0, "reka-dialog-content"), p(() => {
			n.triggerElement.value = i.value;
		}), (e, i) => (o(), P(z(X), I(t, {
			ref: z(r),
			type: e.as === "button" ? "button" : void 0,
			"aria-haspopup": "dialog",
			"aria-expanded": z(n).open.value || !1,
			"aria-controls": z(n).open.value ? z(n).contentId : void 0,
			"data-state": z(n).open.value ? "open" : "closed",
			onClick: z(n).onOpenToggle
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, [
			"type",
			"aria-expanded",
			"aria-controls",
			"data-state",
			"onClick"
		]));
	}
}), [$c, el] = /* @__PURE__ */ K("AlertDialogContent"), tl = /* @__PURE__ */ U({
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
	setup(e, { emit: n }) {
		let r = e, i = es(n);
		q();
		let a = O();
		return el({ onCancelElementChange: (e) => {
			a.value = e;
		} }), (e, n) => (o(), P(z(Gc), I({
			...r,
			...z(i)
		}, {
			role: "alertdialog",
			onPointerDownOutside: n[0] ||= k(() => {}, ["prevent"]),
			onInteractOutside: n[1] ||= k(() => {}, ["prevent"]),
			onOpenAutoFocus: n[2] ||= () => {
				t(() => {
					a.value?.focus({ preventScroll: !0 });
				});
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), nl = /* @__PURE__ */ U({
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
		return q(), (e, n) => (o(), P(z(Kc), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), rl = /* @__PURE__ */ U({
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
		return q(), (e, n) => (o(), P(z(Jc), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), il = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(Yc), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), al = /* @__PURE__ */ U({
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
		let n = Y(e, t);
		return q(), (e, t) => (o(), P(z(ac), I(z(n), { modal: !0 }), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16));
	}
}), ol = /* @__PURE__ */ U({
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
		return q(), (e, n) => (o(), P(z(Zc), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), sl = /* @__PURE__ */ U({
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
		return q(), (e, n) => (o(), P(z(Qc), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), cl = /* @__PURE__ */ U({
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
		let t = e, { forwardRef: n } = q(), r = R(() => 1 / t.ratio * 100);
		return (e, t) => (o(), E("div", {
			style: D(`position: relative; width: 100%; padding-bottom: ${r.value}%`),
			"data-reka-aspect-ratio-wrapper": ""
		}, [W(z(X), I({
			ref: z(n),
			"as-child": e.asChild,
			as: e.as,
			style: {
				position: "absolute",
				inset: "0px"
			}
		}, e.$attrs), {
			default: u(() => [v(e.$slots, "default", { aspect: r.value })]),
			_: 3
		}, 16, ["as-child", "as"])], 4));
	}
}), ll = "data-reka-collection-item";
function ul(e = {}) {
	let { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`, i;
	if (n) {
		let e = O(/* @__PURE__ */ new Map());
		i = {
			collectionRef: O(),
			itemMap: e
		}, l(r, i);
	} else i = a(r);
	let o = (e = !1) => {
		let t = i.collectionRef.value;
		if (!t) return [];
		let n = Array.from(t.querySelectorAll(`[${ll}]`)), r = Array.from(i.itemMap.value.values()).sort((e, t) => n.indexOf(e.ref) - n.indexOf(t.ref));
		return e ? r : r.filter((e) => e.ref.dataset.disabled !== "");
	}, c = /* @__PURE__ */ U({
		name: "CollectionSlot",
		inheritAttrs: !1,
		setup(e, { slots: t, attrs: n }) {
			let { primitiveElement: r, currentElement: a } = Ls();
			return C(a, () => {
				i.collectionRef.value = a.value;
			}), () => Te(Fs, {
				ref: r,
				...n
			}, t);
		}
	}), u = /* @__PURE__ */ U({
		name: "CollectionItem",
		inheritAttrs: !1,
		props: { value: { validator: () => !0 } },
		setup(e, { slots: t, attrs: n }) {
			let { primitiveElement: r, currentElement: a } = Ls();
			return s((t) => {
				if (a.value) {
					let n = Ce(a.value);
					i.itemMap.value.set(n, {
						ref: a.value,
						value: e.value
					}), t(() => i.itemMap.value.delete(n));
				}
			}), () => Te(Fs, {
				...n,
				[ll]: "",
				ref: r
			}, t);
		}
	});
	return {
		getItems: o,
		reactiveItems: R(() => Array.from(i.itemMap.value.values())),
		itemMapSize: R(() => i.itemMap.value.size),
		CollectionSlot: c,
		CollectionItem: u
	};
}
//#endregion
//#region node_modules/reka-ui/dist/VisuallyHidden/VisuallyHidden.js
var dl = /* @__PURE__ */ U({
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
		return (e, t) => (o(), P(z(X), {
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
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"aria-hidden",
			"data-hidden",
			"tabindex"
		]));
	}
}), fl = /* @__PURE__ */ U({
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
		let t = e, { primitiveElement: n, currentElement: r } = Ls();
		return C(R(() => t.checked ?? t.value), (e, t) => {
			if (!r.value) return;
			let n = r.value, i = window.HTMLInputElement.prototype, a = Object.getOwnPropertyDescriptor(i, "value").set;
			if (a && e !== t) {
				let t = new Event("input", { bubbles: !0 }), r = new Event("change", { bubbles: !0 });
				a.call(n, e), n.dispatchEvent(t), n.dispatchEvent(r);
			}
		}), (e, r) => (o(), P(dl, I({
			ref_key: "primitiveElement",
			ref: n
		}, {
			...t,
			...e.$attrs
		}, { as: "input" }), null, 16));
	}
}), pl = /* @__PURE__ */ U({
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
		let t = e, n = R(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), r = R(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
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
		return (e, i) => (o(), E(B, null, [M(" We render single input if it's required "), n.value ? (o(), P(fl, I({ key: e.name }, {
			...t,
			...e.$attrs
		}, {
			name: e.name,
			value: e.value
		}), null, 16, ["name", "value"])) : (o(!0), E(B, { key: 1 }, f(r.value, (n) => (o(), P(fl, I({ key: n.name }, { ref_for: !0 }, {
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
function ml(e, t, n) {
	return e === void 0 ? !1 : Array.isArray(e) ? e.some((e) => hl(e, t, n)) : hl(e, t, n);
}
function hl(e, t, n) {
	return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? e?.[n] === t?.[n] : hr(e, t);
}
//#endregion
//#region node_modules/reka-ui/dist/RovingFocus/utils.js
var gl = "rovingFocusGroup.onEntryFocus", _l = {
	bubbles: !1,
	cancelable: !0
}, vl = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function yl(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function bl(e, t, n) {
	let r = yl(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return vl[r];
}
function xl(e, t = !1) {
	let n = Sr();
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), Sr() !== n)) return;
}
function Sl(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
//#endregion
//#region node_modules/reka-ui/dist/Listbox/ListboxRoot.js
var [Cl, wl] = /* @__PURE__ */ K("ListboxRoot"), Tl = /* @__PURE__ */ U({
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
	setup(e, { expose: n, emit: r }) {
		let i = e, a = r, { multiple: s, highlightOnHover: c, orientation: l, disabled: d, selectionBehavior: f, dir: p } = we(i), { getItems: m } = ul({ isProvider: !0 }), { handleTypeaheadSearch: h } = ks(), { primitiveElement: g, currentElement: _ } = Ls(), y = Ts(), b = $o(p), x = as(_), S = O(), w = O(!1), T = O(!0), ee = Bn(i, "modelValue", a, {
			defaultValue: i.defaultValue ?? (s.value ? [] : void 0),
			passive: i.modelValue === void 0,
			deep: !0
		});
		function E(e) {
			if (w.value = !0, i.multiple) {
				let t = Array.isArray(ee.value) ? [...ee.value] : [], n = t.findIndex((t) => hl(t, e, i.by));
				i.selectionBehavior === "toggle" ? (n === -1 ? t.push(e) : t.splice(n, 1), ee.value = t) : (ee.value = [e], S.value = e);
			} else i.selectionBehavior === "toggle" && hl(ee.value, e, i.by) ? ee.value = void 0 : ee.value = e;
			setTimeout(() => {
				w.value = !1;
			}, 1);
		}
		let D = O(null), te = O(null), ne = O(!1), k = O(!1), re = Mt(), ie = Mt(), A = Mt();
		function j() {
			return m().map((e) => e.ref).filter((e) => e.dataset.disabled !== "");
		}
		function ae(e, t = !0, n) {
			e && (D.value = e, (n ?? T.value) && D.value.focus(), t && D.value.scrollIntoView({ block: "nearest" }), a("highlight", m().find((t) => t.ref === e)));
		}
		function oe(e) {
			if (ne.value) A.trigger(e);
			else {
				let t = m().find((t) => hl(t.value, e, i.by));
				t && (D.value = t.ref, ae(t.ref));
			}
		}
		function N(e) {
			D.value && D.value.isConnected && (e.preventDefault(), e.stopPropagation(), k.value || D.value.click());
		}
		function F(e) {
			if (T.value) {
				if (w.value = !0, ne.value) ie.trigger(e);
				else {
					let t = e.altKey || e.ctrlKey || e.metaKey;
					if (t && e.key === "a" && s.value) {
						let t = m();
						ee.value = [...t.map((e) => e.value)], e.preventDefault();
						let n = t.at(-1);
						n && ae(n.ref);
					} else if (!t) {
						let t = h(e.key, m());
						t && ae(t);
					}
				}
				setTimeout(() => {
					w.value = !1;
				}, 1);
			}
		}
		function se() {
			k.value = !0;
		}
		function ce() {
			t(() => {
				k.value = !1;
			});
		}
		function le() {
			t(() => {
				de(new KeyboardEvent("keydown", { key: "PageUp" }));
			});
		}
		function I(e) {
			let t = D.value;
			t?.isConnected && (te.value = t), D.value = null, a("leave", e);
		}
		function ue(e) {
			let t = new CustomEvent("listbox.entryFocus", {
				bubbles: !1,
				cancelable: !0
			});
			if (e.currentTarget?.dispatchEvent(t), a("entryFocus", t), !t.defaultPrevented) if (te.value) ae(te.value);
			else {
				let e = j()?.[0];
				ae(e);
			}
		}
		function de(e) {
			let t = bl(e, l.value, b.value);
			if (!t) return;
			let n = j();
			if (D.value) {
				if (t === "last") n.reverse();
				else if (t === "prev" || t === "next") {
					t === "prev" && n.reverse();
					let e = n.indexOf(D.value);
					n = n.slice(e + 1);
				}
				L(e, n[0]);
			}
			if (n.length) {
				let e = !D.value && t === "prev" ? n.length - 1 : 0;
				ae(n[e]);
			}
			if (ne.value) return ie.trigger(e);
		}
		function L(e, t) {
			if (!(ne.value || i.selectionBehavior !== "replace" || !s.value || !Array.isArray(ee.value)) && !((e.altKey || e.ctrlKey || e.metaKey) && !e.shiftKey) && e.shiftKey) {
				let n = m().filter((e) => e.ref.dataset.disabled !== ""), r = n.find((e) => e.ref === t)?.value;
				if (e.key === y.END ? r = n.at(-1)?.value : e.key === y.HOME && (r = n[0]?.value), !r || !S.value) return;
				ee.value = _r(n.map((e) => e.value), S.value, r);
			}
		}
		async function fe(e) {
			if (Rt) if (await t(), ne.value) re.trigger(e);
			else {
				let e = j(), t = e.find((e) => e.dataset.state === "checked");
				t ? ae(t) : e.length && ae(e[0]);
			}
		}
		return C(ee, () => {
			w.value || t(() => {
				fe();
			});
		}, {
			immediate: !0,
			deep: !0
		}), n({
			highlightedElement: D,
			highlightItem: oe,
			highlightFirstItem: le,
			highlightSelected: fe,
			getItems: m
		}), wl({
			modelValue: ee,
			onValueChange: E,
			multiple: s,
			orientation: l,
			dir: b,
			disabled: d,
			highlightOnHover: c,
			highlightedElement: D,
			isVirtual: ne,
			virtualFocusHook: re,
			virtualKeydownHook: ie,
			virtualHighlightHook: A,
			by: i.by,
			firstValue: S,
			selectionBehavior: f,
			focusable: T,
			onLeave: I,
			onEnter: ue,
			changeHighlight: ae,
			onKeydownEnter: N,
			onKeydownNavigation: de,
			onKeydownTypeAhead: F,
			onCompositionStart: se,
			onCompositionEnd: ce,
			highlightFirstItem: le
		}), (e, n) => (o(), P(z(X), {
			ref_key: "primitiveElement",
			ref: g,
			as: e.as,
			"as-child": e.asChild,
			dir: z(b),
			"data-disabled": z(d) ? "" : void 0,
			onPointerleave: I,
			onFocusout: n[0] ||= async (e) => {
				let n = e.relatedTarget || e.target;
				await t(), D.value && z(_) && !z(_).contains(n) && I(e);
			}
		}, {
			default: u(() => [v(e.$slots, "default", { modelValue: z(ee) }), z(x) && e.name ? (o(), P(z(pl), {
				key: 0,
				name: e.name,
				value: z(ee),
				disabled: z(d),
				required: e.required
			}, null, 8, [
				"name",
				"value",
				"disabled",
				"required"
			])) : M("v-if", !0)]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"dir",
			"data-disabled"
		]));
	}
}), El = /* @__PURE__ */ U({
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
		let { CollectionSlot: t } = ul(), n = Cl(), r = cn(!1, 10);
		return (e, i) => (o(), P(z(t), null, {
			default: u(() => [W(z(X), {
				role: "listbox",
				as: e.as,
				"as-child": e.asChild,
				tabindex: z(n).focusable.value ? z(n).highlightedElement.value ? "-1" : "0" : "-1",
				"aria-orientation": z(n).orientation.value,
				"aria-multiselectable": !!z(n).multiple.value,
				"data-orientation": z(n).orientation.value,
				onMousedown: i[0] ||= k((e) => r.value = !0, ["left"]),
				onFocus: i[1] ||= (e) => {
					z(r) || z(n).onEnter(e);
				},
				onKeydown: [
					i[2] ||= be((e) => {
						z(n).orientation.value === "vertical" && (e.key === "ArrowLeft" || e.key === "ArrowRight") || z(n).orientation.value === "horizontal" && (e.key === "ArrowUp" || e.key === "ArrowDown") || (e.preventDefault(), z(n).focusable.value && z(n).onKeydownNavigation(e));
					}, [
						"down",
						"up",
						"left",
						"right",
						"home",
						"end"
					]),
					be(z(n).onKeydownEnter, ["enter"]),
					z(n).onKeydownTypeAhead
				]
			}, {
				default: u(() => [v(e.$slots, "default")]),
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
}), Dl = /* @__PURE__ */ U({
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
		let n = e, r = Bn(n, "modelValue", t, {
			defaultValue: "",
			passive: n.modelValue === void 0
		}), i = Cl(), { primitiveElement: a, currentElement: s } = Ls(), c = R(() => n.disabled || i.disabled.value || !1), l = O();
		return _e(() => l.value = i.highlightedElement.value?.id), p(() => {
			i.focusable.value = !1, setTimeout(() => {
				n.autoFocus && s.value?.focus();
			}, 1);
		}), m(() => {
			i.focusable.value = !0;
		}), (e, t) => (o(), P(z(X), {
			ref_key: "primitiveElement",
			ref: a,
			as: e.as,
			"as-child": e.asChild,
			value: z(r),
			disabled: c.value ? "" : void 0,
			"data-disabled": c.value ? "" : void 0,
			"aria-disabled": c.value ?? void 0,
			"aria-activedescendant": l.value,
			type: "text",
			onKeydown: [be(k(z(i).onKeydownNavigation, ["prevent"]), [
				"down",
				"up",
				"home",
				"end"
			]), be(z(i).onKeydownEnter, ["enter"])],
			onInput: t[0] ||= (e) => {
				r.value = e.target.value, z(i).highlightFirstItem();
			},
			onCompositionstart: z(i).onCompositionStart,
			onCompositionend: z(i).onCompositionEnd
		}, {
			default: u(() => [v(e.$slots, "default", { modelValue: z(r) })]),
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
}), [Ol, kl] = /* @__PURE__ */ K("ListboxGroup"), Al = /* @__PURE__ */ U({
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
		let t = e, n = ws(void 0, "reka-listbox-group");
		return kl({ id: n }), (e, r) => (o(), P(z(X), I({ role: "group" }, t, { "aria-labelledby": z(n) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["aria-labelledby"]));
	}
}), jl = /* @__PURE__ */ U({
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
		let t = e, n = Ol({ id: "" });
		return (e, r) => (o(), P(z(X), I(t, { id: z(n).id }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), Ml = "listbox.select", [Nl, Pl] = /* @__PURE__ */ K("ListboxItem"), Fl = /* @__PURE__ */ U({
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
		let n = e, r = t, i = ws(void 0, "reka-listbox-item"), { CollectionItem: a } = ul(), { forwardRef: s, currentElement: c } = q(), l = Cl(), d = R(() => c.value === l.highlightedElement.value), f = R(() => ml(l.modelValue.value, n.value, l.by)), p = R(() => l.disabled.value || n.disabled);
		async function m(e) {
			r("select", e), !e?.defaultPrevented && !p.value && e && (l.onValueChange(n.value), l.changeHighlight(c.value));
		}
		function h(e) {
			Cr(Ml, m, {
				originalEvent: e,
				value: n.value
			});
		}
		return Pl({ isSelected: f }), (e, t) => (o(), P(z(a), { value: e.value }, {
			default: u(() => [w([d.value, f.value], () => W(z(X), I({ id: z(i) }, e.$attrs, {
				ref: z(s),
				role: "option",
				tabindex: z(l).focusable.value ? d.value ? "0" : "-1" : -1,
				"aria-selected": f.value,
				as: e.as,
				"as-child": e.asChild,
				disabled: p.value ? "" : void 0,
				"data-disabled": p.value ? "" : void 0,
				"data-highlighted": d.value ? "" : void 0,
				"data-state": f.value ? "checked" : "unchecked",
				onClick: h,
				onKeydown: be(k(h, ["prevent"]), ["space"]),
				onPointermove: t[0] ||= () => {
					z(l).highlightedElement.value !== z(c) && z(l).highlightOnHover.value && z(l).changeHighlight(z(c), !1, !1);
				}
			}), {
				default: u(() => [v(e.$slots, "default")]),
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
}), [Il, Ll] = /* @__PURE__ */ K("PopperRoot"), Rl = /* @__PURE__ */ U({
	inheritAttrs: !1,
	__name: "PopperRoot",
	setup(e) {
		let t = O();
		return Ll({
			anchor: t,
			onAnchorChange: (e) => t.value = e
		}), (e, t) => v(e.$slots, "default");
	}
}), zl = /* @__PURE__ */ U({
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
		let t = e, { forwardRef: n, currentElement: r } = q(), i = Il();
		return d(() => {
			i.onAnchorChange(t.reference ?? r.value);
		}), (e, t) => (o(), P(z(X), {
			ref: z(n),
			as: e.as,
			"as-child": e.asChild
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["as", "as-child"]));
	}
}), Bl = {
	key: 0,
	d: "M0 0L6 6L12 0"
}, Vl = {
	key: 1,
	d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, Hl = /* @__PURE__ */ U({
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
		return q(), (e, n) => (o(), P(z(X), I(t, {
			width: e.width,
			height: e.height,
			viewBox: e.asChild ? void 0 : "0 0 12 6",
			preserveAspectRatio: e.asChild ? void 0 : "none"
		}), {
			default: u(() => [v(e.$slots, "default", {}, () => [e.rounded ? (o(), E("path", Vl)) : (o(), E("path", Bl))])]),
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
function Ul(e) {
	return e !== null;
}
function Wl(e) {
	return {
		name: "transformOrigin",
		options: e,
		fn(t) {
			let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Gl(n), u = {
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
function Gl(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Kl = [
	"top",
	"right",
	"bottom",
	"left"
], ql = Math.min, Jl = Math.max, Yl = Math.round, Xl = Math.floor, Zl = (e) => ({
	x: e,
	y: e
}), Ql = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function $l(e, t, n) {
	return Jl(e, ql(t, n));
}
function eu(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function tu(e) {
	return e.split("-")[0];
}
function nu(e) {
	return e.split("-")[1];
}
function ru(e) {
	return e === "x" ? "y" : "x";
}
function iu(e) {
	return e === "y" ? "height" : "width";
}
function au(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function ou(e) {
	return ru(au(e));
}
function su(e, t, n) {
	n === void 0 && (n = !1);
	let r = nu(e), i = ou(e), a = iu(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = gu(o)), [o, gu(o)];
}
function cu(e) {
	let t = gu(e);
	return [
		lu(e),
		t,
		lu(t)
	];
}
function lu(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var uu = ["left", "right"], du = ["right", "left"], fu = ["top", "bottom"], pu = ["bottom", "top"];
function mu(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? du : uu : t ? uu : du;
		case "left":
		case "right": return t ? fu : pu;
		default: return [];
	}
}
function hu(e, t, n, r) {
	let i = nu(e), a = mu(tu(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(lu)))), a;
}
function gu(e) {
	let t = tu(e);
	return Ql[t] + e.slice(t.length);
}
function _u(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function vu(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : _u(e);
}
function yu(e) {
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
function bu(e, t, n) {
	let { reference: r, floating: i } = e, a = au(t), o = ou(t), s = iu(o), c = tu(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	switch (nu(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function xu(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = eu(t, e), p = vu(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = yu(await i.getClippingRect({
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
	}, y = yu(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var Su = 50, Cu = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: xu
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = bu(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < Su && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = bu(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, wu = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = eu(e, t) || {};
		if (l == null) return {};
		let d = vu(u), f = {
			x: n,
			y: r
		}, p = ou(i), m = iu(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, ee = ql(d[_], T), E = ql(d[v], T), D = ee, te = C - h[m] - E, O = C / 2 - h[m] / 2 + w, ne = $l(D, O, te), k = !c.arrow && nu(i) != null && O !== ne && a.reference[m] / 2 - (O < D ? ee : E) - h[m] / 2 < 0, re = k ? O < D ? O - D : O - te : 0;
		return {
			[p]: f[p] + re,
			data: {
				[p]: ne,
				centerOffset: O - ne - re,
				...k && { alignmentOffset: re }
			},
			reset: k
		};
	}
}), Tu = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = eu(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = tu(r), _ = au(o), v = tu(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [gu(o)] : cu(o)), x = p !== "none";
			!d && x && b.push(...hu(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = su(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== au(t)) || T.every((e) => au(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
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
								let t = au(e.placement);
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
function Eu(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Du(e) {
	return Kl.some((t) => e[t] >= 0);
}
var Ou = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = eu(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Eu(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Du(e)
					} };
				}
				case "escaped": {
					let e = Eu(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Du(e)
					} };
				}
				default: return {};
			}
		}
	};
}, ku = /* @__PURE__ */ new Set(["left", "top"]);
async function Au(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = tu(n), s = nu(n), c = au(n) === "y", l = ku.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = eu(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var ju = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Au(t, e);
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
}, Mu = function(e) {
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
			} }, ...l } = eu(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = au(tu(i)), p = ru(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = $l(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = $l(n, h, r);
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
}, Nu = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = eu(e, t), u = {
				x: n,
				y: r
			}, d = au(i), f = ru(d), p = u[f], m = u[d], h = eu(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = ku.has(tu(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Pu = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = eu(e, t), u = await o.detectOverflow(t, l), d = tu(i), f = nu(i), p = au(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = ql(h - u[g], v), x = ql(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = Jl(u.left, 0), t = Jl(u.right, 0), n = Jl(u.top, 0), r = Jl(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : Jl(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : Jl(u.top, u.bottom));
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
function Fu() {
	return typeof window < "u";
}
function Iu(e) {
	return zu(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Lu(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ru(e) {
	return ((zu(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function zu(e) {
	return Fu() ? e instanceof Node || e instanceof Lu(e).Node : !1;
}
function Bu(e) {
	return Fu() ? e instanceof Element || e instanceof Lu(e).Element : !1;
}
function Vu(e) {
	return Fu() ? e instanceof HTMLElement || e instanceof Lu(e).HTMLElement : !1;
}
function Hu(e) {
	return !Fu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Lu(e).ShadowRoot;
}
function Uu(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = ed(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Wu(e) {
	return /^(table|td|th)$/.test(Iu(e));
}
function Gu(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Ku = /transform|translate|scale|rotate|perspective|filter/, qu = /paint|layout|strict|content/, Ju = (e) => !!e && e !== "none", Yu;
function Xu(e) {
	let t = Bu(e) ? ed(e) : e;
	return Ju(t.transform) || Ju(t.translate) || Ju(t.scale) || Ju(t.rotate) || Ju(t.perspective) || !Qu() && (Ju(t.backdropFilter) || Ju(t.filter)) || Ku.test(t.willChange || "") || qu.test(t.contain || "");
}
function Zu(e) {
	let t = nd(e);
	for (; Vu(t) && !$u(t);) {
		if (Xu(t)) return t;
		if (Gu(t)) return null;
		t = nd(t);
	}
	return null;
}
function Qu() {
	return Yu ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Yu;
}
function $u(e) {
	return /^(html|body|#document)$/.test(Iu(e));
}
function ed(e) {
	return Lu(e).getComputedStyle(e);
}
function td(e) {
	return Bu(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function nd(e) {
	if (Iu(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Hu(e) && e.host || Ru(e);
	return Hu(t) ? t.host : t;
}
function rd(e) {
	let t = nd(e);
	return $u(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Vu(t) && Uu(t) ? t : rd(t);
}
function id(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = rd(e), i = r === e.ownerDocument?.body, a = Lu(r);
	if (i) {
		let e = ad(a);
		return t.concat(a, a.visualViewport || [], Uu(r) ? r : [], e && n ? id(e) : []);
	} else return t.concat(r, id(r, [], n));
}
function ad(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function od(e) {
	let t = ed(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Vu(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Yl(n) !== a || Yl(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function sd(e) {
	return Bu(e) ? e : e.contextElement;
}
function cd(e) {
	let t = sd(e);
	if (!Vu(t)) return Zl(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = od(t), o = (a ? Yl(n.width) : n.width) / r, s = (a ? Yl(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var ld = /* @__PURE__ */ Zl(0);
function ud(e) {
	let t = Lu(e);
	return !Qu() || !t.visualViewport ? ld : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function dd(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Lu(e) ? !1 : t;
}
function fd(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = sd(e), o = Zl(1);
	t && (r ? Bu(r) && (o = cd(r)) : o = cd(e));
	let s = dd(a, n, r) ? ud(a) : Zl(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Lu(a), t = r && Bu(r) ? Lu(r) : r, n = e, i = ad(n);
		for (; i && r && t !== n;) {
			let e = cd(i), t = i.getBoundingClientRect(), r = ed(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Lu(i), i = ad(n);
		}
	}
	return yu({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function pd(e, t) {
	let n = td(e).scrollLeft;
	return t ? t.left + n : fd(Ru(e)).left + n;
}
function md(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - pd(e, n),
		y: n.top + t.scrollTop
	};
}
function hd(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Ru(r), s = t ? Gu(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Zl(1), u = Zl(0), d = Vu(r);
	if ((d || !d && !a) && ((Iu(r) !== "body" || Uu(o)) && (c = td(r)), d)) {
		let e = fd(r);
		l = cd(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? md(o, c) : Zl(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function gd(e) {
	return Array.from(e.getClientRects());
}
function _d(e) {
	let t = Ru(e), n = td(e), r = e.ownerDocument.body, i = Jl(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Jl(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + pd(e), s = -n.scrollTop;
	return ed(r).direction === "rtl" && (o += Jl(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var vd = 25;
function yd(e, t) {
	let n = Lu(e), r = Ru(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Qu();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = pd(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= vd && (a -= o);
	} else l <= vd && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function bd(e, t) {
	let n = fd(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Vu(e) ? cd(e) : Zl(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function xd(e, t, n) {
	let r;
	if (t === "viewport") r = yd(e, n);
	else if (t === "document") r = _d(Ru(e));
	else if (Bu(t)) r = bd(t, n);
	else {
		let n = ud(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return yu(r);
}
function Sd(e, t) {
	let n = nd(e);
	return n === t || !Bu(n) || $u(n) ? !1 : ed(n).position === "fixed" || Sd(n, t);
}
function Cd(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = id(e, [], !1).filter((e) => Bu(e) && Iu(e) !== "body"), i = null, a = ed(e).position === "fixed", o = a ? nd(e) : e;
	for (; Bu(o) && !$u(o);) {
		let t = ed(o), n = Xu(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || Uu(o) && !n && Sd(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = nd(o);
	}
	return t.set(e, r), r;
}
function wd(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Gu(t) ? [] : Cd(t, this._c) : [].concat(n), r], o = xd(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = xd(t, a[e], i);
		s = Jl(n.top, s), c = ql(n.right, c), l = ql(n.bottom, l), u = Jl(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Td(e) {
	let { width: t, height: n } = od(e);
	return {
		width: t,
		height: n
	};
}
function Ed(e, t, n) {
	let r = Vu(t), i = Ru(t), a = n === "fixed", o = fd(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Zl(0);
	function l() {
		c.x = pd(i);
	}
	if (r || !r && !a) if ((Iu(t) !== "body" || Uu(i)) && (s = td(t)), r) {
		let e = fd(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? md(i, s) : Zl(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Dd(e) {
	return ed(e).position === "static";
}
function Od(e, t) {
	if (!Vu(e) || ed(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Ru(e) === n && (n = n.ownerDocument.body), n;
}
function kd(e, t) {
	let n = Lu(e);
	if (Gu(e)) return n;
	if (!Vu(e)) {
		let t = nd(e);
		for (; t && !$u(t);) {
			if (Bu(t) && !Dd(t)) return t;
			t = nd(t);
		}
		return n;
	}
	let r = Od(e, t);
	for (; r && Wu(r) && Dd(r);) r = Od(r, t);
	return r && $u(r) && Dd(r) && !Xu(r) ? n : r || Zu(e) || n;
}
var Ad = async function(e) {
	let t = this.getOffsetParent || kd, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Ed(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function jd(e) {
	return ed(e).direction === "rtl";
}
var Md = {
	convertOffsetParentRelativeRectToViewportRelativeRect: hd,
	getDocumentElement: Ru,
	getClippingRect: wd,
	getOffsetParent: kd,
	getElementRects: Ad,
	getClientRects: gd,
	getDimensions: Td,
	getScale: cd,
	isElement: Bu,
	isRTL: jd
};
function Nd(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Pd(e, t) {
	let n = null, r, i = Ru(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Xl(d), h = Xl(i.clientWidth - (u + f)), g = Xl(i.clientHeight - (d + p)), _ = Xl(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Jl(0, ql(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !Nd(l, e.getBoundingClientRect()) && o(), y = !1;
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
function Fd(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = sd(e), u = i || a ? [...l ? id(l) : [], ...t ? id(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Pd(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? fd(e) : null;
	c && g();
	function g() {
		let t = fd(e);
		h && !Nd(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Id = ju, Ld = Mu, Rd = Tu, zd = Pu, Bd = Ou, Vd = wu, Hd = Nu, Ud = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Md,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Cu(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region node_modules/@floating-ui/vue/dist/floating-ui.vue.mjs
function Wd(e) {
	return typeof e == "object" && !!e && "$el" in e;
}
function Gd(e) {
	if (Wd(e)) {
		let t = e.$el;
		return zu(t) && Iu(t) === "#comment" ? null : t;
	}
	return e;
}
function Kd(e) {
	return typeof e == "function" ? e() : z(e);
}
function qd(e) {
	return {
		name: "arrow",
		options: e,
		fn(t) {
			let n = Gd(Kd(e.element));
			return n == null ? {} : Vd({
				element: n,
				padding: e.padding
			}).fn(t);
		}
	};
}
function Jd(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Yd(e, t) {
	let n = Jd(e);
	return Math.round(t * n) / n;
}
function Xd(t, n, r) {
	r === void 0 && (r = {});
	let i = r.whileElementsMounted, a = R(() => Kd(r.open) ?? !0), o = R(() => Kd(r.middleware)), s = R(() => Kd(r.placement) ?? "bottom"), c = R(() => Kd(r.strategy) ?? "absolute"), l = R(() => Kd(r.transform) ?? !0), u = R(() => Gd(t.value)), d = R(() => Gd(n.value)), f = O(0), p = O(0), m = O(c.value), h = O(s.value), g = xe({}), _ = O(!1), v = R(() => {
		let e = {
			position: m.value,
			left: "0",
			top: "0"
		};
		if (!d.value) return e;
		let t = Yd(d.value, f.value), n = Yd(d.value, p.value);
		return l.value ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Jd(d.value) >= 1.5 && { willChange: "transform" }
		} : {
			position: m.value,
			left: t + "px",
			top: n + "px"
		};
	}), y;
	function b() {
		if (u.value == null || d.value == null) return;
		let e = a.value;
		Ud(u.value, d.value, {
			middleware: o.value,
			placement: s.value,
			strategy: c.value
		}).then((t) => {
			f.value = t.x, p.value = t.y, m.value = t.strategy, h.value = t.placement, g.value = t.middlewareData, _.value = e !== !1;
		});
	}
	function x() {
		typeof y == "function" && (y(), y = void 0);
	}
	function S() {
		if (x(), i === void 0) {
			b();
			return;
		}
		if (u.value != null && d.value != null) {
			y = i(u.value, d.value, b);
			return;
		}
	}
	function w() {
		a.value || (_.value = !1);
	}
	return C([
		o,
		s,
		c,
		a
	], b, { flush: "sync" }), C([u, d], S, { flush: "sync" }), C(a, w, { flush: "sync" }), e() && me(x), {
		x: ge(f),
		y: ge(p),
		strategy: ge(m),
		placement: ge(h),
		middlewareData: ge(g),
		isPositioned: ge(_),
		floatingStyles: v,
		update: b
	};
}
//#endregion
//#region node_modules/reka-ui/dist/Popper/PopperContent.js
var Zd = {
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
}, [Qd, $d] = /* @__PURE__ */ K("PopperContent"), ef = /* @__PURE__ */ U({
	inheritAttrs: !1,
	__name: "PopperContent",
	props: /* @__PURE__ */ h({
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
	}, { ...Zd }),
	emits: ["placed"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Il(), { forwardRef: a, currentElement: c } = q(), l = O(), f = O(), { width: p, height: m } = Ds(f), h = R(() => n.side + (n.align === "center" ? "" : `-${n.align}`)), g = R(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			...n.collisionPadding
		}), _ = R(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), y = R(() => ({
			padding: g.value,
			boundary: _.value.filter(Ul),
			altBoundary: _.value.length > 0
		})), b = R(() => ({
			mainAxis: n.sideFlip,
			crossAxis: n.alignFlip
		})), x = kt(() => [
			Id({
				mainAxis: n.sideOffset + m.value,
				alignmentAxis: n.alignOffset
			}),
			n.prioritizePosition && n.avoidCollisions && Rd({
				...y.value,
				...b.value
			}),
			n.avoidCollisions && Ld({
				mainAxis: !0,
				crossAxis: !!n.prioritizePosition,
				limiter: n.sticky === "partial" ? Hd() : void 0,
				...y.value
			}),
			!n.prioritizePosition && n.avoidCollisions && Rd({
				...y.value,
				...b.value
			}),
			zd({
				...y.value,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--reka-popper-available-width", `${n}px`), o.setProperty("--reka-popper-available-height", `${r}px`), o.setProperty("--reka-popper-anchor-width", `${i}px`), o.setProperty("--reka-popper-anchor-height", `${a}px`);
				}
			}),
			f.value && qd({
				element: f.value,
				padding: n.arrowPadding
			}),
			Wl({
				arrowWidth: p.value,
				arrowHeight: m.value
			}),
			n.hideWhenDetached && Bd({
				strategy: "referenceHidden",
				...y.value
			})
		]), { floatingStyles: S, placement: C, isPositioned: w, middlewareData: T, update: ee } = Xd(R(() => n.reference ?? i.anchor.value), l, {
			strategy: n.positionStrategy,
			placement: h,
			whileElementsMounted: (...e) => Fd(...e, {
				layoutShift: !n.disableUpdateOnLayoutShift,
				animationFrame: n.updatePositionStrategy === "always"
			}),
			middleware: x
		}), te = R(() => Gl(C.value)[0]), ne = R(() => Gl(C.value)[1]);
		d(() => {
			w.value && r("placed");
		});
		let k = R(() => {
			let e = T.value.arrow?.centerOffset !== 0;
			return n.hideShiftedArrow && e;
		}), re = O("");
		return s(() => {
			c.value && (re.value = window.getComputedStyle(c.value).zIndex);
		}), $d({
			placedSide: te,
			onArrowChange: (e) => f.value = e,
			arrowX: R(() => T.value.arrow?.x ?? 0),
			arrowY: R(() => T.value.arrow?.y ?? 0),
			shouldHideArrow: k
		}), (e, t) => (o(), E("div", {
			ref_key: "floatingRef",
			ref: l,
			"data-reka-popper-content-wrapper": "",
			style: D({
				...z(S),
				transform: z(w) ? z(S).transform : "translate(0, -200%)",
				minWidth: "max-content",
				zIndex: re.value,
				"--reka-popper-transform-origin": [z(T).transformOrigin?.x, z(T).transformOrigin?.y].join(" "),
				...z(T).hide?.referenceHidden && {
					visibility: "hidden",
					pointerEvents: "none"
				}
			})
		}, [W(z(X), I({ ref: z(a) }, e.$attrs, {
			"as-child": n.asChild,
			as: e.as,
			"data-side": te.value,
			"data-align": ne.value,
			style: { animation: z(w) ? void 0 : "none" }
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, [
			"as-child",
			"as",
			"data-side",
			"data-align",
			"style"
		])], 4));
	}
}), tf = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, nf = /* @__PURE__ */ U({
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
		let { forwardRef: t } = q(), n = Qd(), r = R(() => tf[n.placedSide.value]);
		return (e, i) => (o(), E("span", {
			ref: (e) => {
				z(n).onArrowChange(e ?? void 0);
			},
			style: D({
				position: "absolute",
				left: z(n).arrowX?.value ? `${z(n).arrowX?.value}px` : void 0,
				top: z(n).arrowY?.value ? `${z(n).arrowY?.value}px` : void 0,
				[r.value]: 0,
				transformOrigin: {
					top: "",
					right: "0 0",
					bottom: "center 0",
					left: "100% 0"
				}[z(n).placedSide.value],
				transform: {
					top: "translateY(100%)",
					right: "translateY(50%) rotate(90deg) translateX(-50%)",
					bottom: "rotate(180deg)",
					left: "translateY(50%) rotate(-90deg) translateX(50%)"
				}[z(n).placedSide.value],
				visibility: z(n).shouldHideArrow.value ? "hidden" : void 0
			})
		}, [W(Hl, I(e.$attrs, {
			ref: z(t),
			style: { display: "block" },
			as: e.as,
			"as-child": e.asChild,
			rounded: e.rounded,
			width: e.width,
			height: e.height
		}), {
			default: u(() => [v(e.$slots, "default")]),
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
function rf(e) {
	let t = Ar({ nonce: O() });
	return R(() => e?.value || t.nonce?.value);
}
//#endregion
//#region node_modules/reka-ui/dist/Avatar/AvatarRoot.js
var [af, of] = /* @__PURE__ */ K("AvatarRoot"), sf = /* @__PURE__ */ U({
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
		return q(), of({ imageLoadingStatus: O("idle") }), (e, t) => (o(), P(z(X), {
			"as-child": e.asChild,
			as: e.as
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["as-child", "as"]));
	}
}), cf = /* @__PURE__ */ U({
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
		let t = e, n = af();
		q();
		let r = O(t.delayMs === void 0);
		return s((e) => {
			if (t.delayMs && Rt) {
				let n = window.setTimeout(() => {
					r.value = !0;
				}, t.delayMs);
				e(() => {
					window.clearTimeout(n);
				});
			}
		}), (e, t) => r.value && z(n).imageLoadingStatus.value !== "loaded" ? (o(), P(z(X), {
			key: 0,
			"as-child": e.asChild,
			as: e.as
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["as-child", "as"])) : M("v-if", !0);
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Avatar/utils.js
function lf(e, t) {
	return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function uf(e, { referrerPolicy: t, crossOrigin: n } = {}) {
	let r = O(!1), i = O(null), a = R(() => r.value ? (!i.value && Rt && (i.value = new window.Image()), i.value) : null), o = O(lf(a.value, e.value)), c = (e) => () => {
		r.value && (o.value = e);
	};
	return p(() => {
		r.value = !0, s((r) => {
			let i = a.value;
			if (!i) return;
			o.value = lf(i, e.value);
			let s = c("loaded"), l = c("error");
			i.addEventListener("load", s), i.addEventListener("error", l), t?.value && (i.referrerPolicy = t.value), typeof n?.value == "string" && (i.crossOrigin = n.value), r(() => {
				i.removeEventListener("load", s), i.removeEventListener("error", l);
			});
		});
	}), m(() => {
		r.value = !1;
	}), o;
}
//#endregion
//#region node_modules/reka-ui/dist/Avatar/AvatarImage.js
var df = /* @__PURE__ */ U({
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
		let n = e, r = t, { src: i, referrerPolicy: a, crossOrigin: s } = we(n);
		q();
		let c = af(), l = uf(i, {
			referrerPolicy: a,
			crossOrigin: s
		});
		return C(l, (e) => {
			r("loadingStatusChange", e), e !== "idle" && (c.imageLoadingStatus.value = e);
		}, { immediate: !0 }), (e, t) => T((o(), P(z(X), {
			role: "img",
			"as-child": e.asChild,
			as: e.as,
			src: z(i),
			referrerpolicy: z(a),
			crossorigin: z(s)
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as-child",
			"as",
			"src",
			"referrerpolicy",
			"crossorigin"
		])), [[he, z(l) === "loaded"]]);
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Calendar/useCalendar.js
function ff(e) {
	function t(t) {
		return Array.isArray(e.date.value) ? e.date.value.some((e) => Yr(e, t)) : e.date.value ? Yr(e.date.value, t) : !1;
	}
	return {
		isDateSelected: t,
		isInvalid: R(() => {
			if (Array.isArray(e.date.value)) {
				if (!e.date.value.length) return !1;
				for (let t of e.date.value) if (e.isDateDisabled?.(t) || e.isDateUnavailable?.(t)) return !0;
			} else {
				if (!e.date.value) return !1;
				if (e.isDateDisabled?.(e.date.value) || e.isDateUnavailable?.(e.date.value)) return !0;
			}
			return !1;
		}),
		hasSelectedDate: R(() => Array.isArray(e.date.value) ? e.date.value.length > 0 : !!e.date.value),
		isSelectedDateDisabled: R(() => Array.isArray(e.date.value) ? e.date.value.length ? e.date.value.some((t) => e.isDateDisabled?.(t)) : !1 : e.date.value ? !!e.isDateDisabled?.(e.date.value) : !1)
	};
}
function pf(e, t) {
	let n = t(e), r = n.compare(e), i = {};
	return r >= 7 && (i.day = 1), r >= Ro(e) && (i.month = 1), n.set({ ...i });
}
function mf(e, t) {
	let n = t(e), r = e.compare(n), i = {};
	return r >= 7 && (i.day = 35), r >= Ro(e) && (i.month = 13), n.set({ ...i });
}
function hf(e, t) {
	return t(e);
}
function gf(e, t) {
	return t(e);
}
function _f(e) {
	let t = Qo(e.locale.value), n = R(() => {
		let t = { calendar: e.placeholder.value.calendar.identifier };
		return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (t.era = "short"), t;
	}), r = O(Yo({
		dateObj: e.placeholder.value,
		weekStartsOn: e.weekStartsOn.value,
		locale: e.locale.value,
		fixedWeeks: e.fixedWeeks.value,
		numberOfMonths: e.numberOfMonths.value
	})), i = R(() => r.value.map((e) => e.value));
	function a(e) {
		return !i.value.some((t) => Qr(e, t));
	}
	let o = (t) => {
		if (!e.maxValue.value || !r.value.length) return !1;
		if (e.disabled.value) return !0;
		let n = r.value.at(-1).value;
		return !t && !e.nextPage.value ? Bo(n.add({ months: 1 }).set({ day: 1 }), e.maxValue.value) : Bo(pf(n, t || e.nextPage.value), e.maxValue.value);
	}, s = (t) => {
		if (!e.minValue.value || !r.value.length) return !1;
		if (e.disabled.value) return !0;
		let n = r.value[0].value;
		return !t && !e.prevPage.value ? zo(n.subtract({ months: 1 }).set({ day: 35 }), e.minValue.value) : zo(mf(n, t || e.prevPage.value), e.minValue.value);
	};
	function c(t) {
		return !!(e.isDateDisabled?.(t) || e.disabled.value || e.maxValue.value && Bo(t, e.maxValue.value) || e.minValue.value && zo(t, e.minValue.value));
	}
	let l = (t) => !!e.isDateUnavailable?.(t), u = R(() => r.value.length ? r.value[0].rows[0].map((n) => t.dayOfWeek(Po(n), e.weekdayFormat.value)) : []), d = (t) => {
		let n = r.value[0].value;
		if (!t && !e.nextPage.value) {
			let t = Yo({
				dateObj: n.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }),
				weekStartsOn: e.weekStartsOn.value,
				locale: e.locale.value,
				fixedWeeks: e.fixedWeeks.value,
				numberOfMonths: e.numberOfMonths.value
			});
			r.value = t, e.placeholder.value = t[0].value.set({ day: 1 });
			return;
		}
		let i = Yo({
			dateObj: hf(n, t || e.nextPage.value),
			weekStartsOn: e.weekStartsOn.value,
			locale: e.locale.value,
			fixedWeeks: e.fixedWeeks.value,
			numberOfMonths: e.numberOfMonths.value
		});
		r.value = i;
		let a = {};
		if (!t) {
			let e = i[0].value.compare(n);
			e >= Ro(n) && (a.day = 1), e >= 365 && (a.month = 1);
		}
		e.placeholder.value = i[0].value.set({ ...a });
	}, f = (t) => {
		let n = r.value[0].value;
		if (!t && !e.prevPage.value) {
			let t = Yo({
				dateObj: n.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }),
				weekStartsOn: e.weekStartsOn.value,
				locale: e.locale.value,
				fixedWeeks: e.fixedWeeks.value,
				numberOfMonths: e.numberOfMonths.value
			});
			r.value = t, e.placeholder.value = t[0].value.set({ day: 1 });
			return;
		}
		let i = Yo({
			dateObj: gf(n, t || e.prevPage.value),
			weekStartsOn: e.weekStartsOn.value,
			locale: e.locale.value,
			fixedWeeks: e.fixedWeeks.value,
			numberOfMonths: e.numberOfMonths.value
		});
		r.value = i;
		let a = {};
		if (!t) {
			let e = n.compare(i[0].value);
			e >= Ro(n) && (a.day = 1), e >= 365 && (a.month = 1);
		}
		e.placeholder.value = i[0].value.set({ ...a });
	};
	C(e.placeholder, (t) => {
		i.value.some((e) => Qr(e, t)) || (r.value = Yo({
			dateObj: t,
			weekStartsOn: e.weekStartsOn.value,
			locale: e.locale.value,
			fixedWeeks: e.fixedWeeks.value,
			numberOfMonths: e.numberOfMonths.value
		}));
	}), C([
		e.locale,
		e.weekStartsOn,
		e.fixedWeeks,
		e.numberOfMonths
	], () => {
		r.value = Yo({
			dateObj: e.placeholder.value,
			weekStartsOn: e.weekStartsOn.value,
			locale: e.locale.value,
			fixedWeeks: e.fixedWeeks.value,
			numberOfMonths: e.numberOfMonths.value
		});
	});
	let p = R(() => {
		if (!r.value.length) return "";
		if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value), r.value.length === 1) {
			let e = r.value[0].value;
			return `${t.fullMonthAndYear(Po(e), n.value)}`;
		}
		let i = Po(r.value[0].value), a = Po(r.value.at(-1).value), o = t.fullMonth(i, n.value), s = t.fullMonth(a, n.value), c = t.fullYear(i, n.value), l = t.fullYear(a, n.value);
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
		fullCalendarLabel: R(() => `${e.calendarLabel.value ?? "Event Date"}, ${p.value}`),
		isPlaceholderFocusable: R(() => !(c(e.placeholder.value) || l(e.placeholder.value) || a(e.placeholder.value))),
		firstFocusableDate: R(() => {
			for (let t of r.value) {
				if (e.minValue.value && zo(t.value, e.minValue.value)) continue;
				let n = Ro(t.value), r = e.minValue.value && Xr(e.minValue.value, t.value) ? e.minValue.value.day : 1;
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
var vf = { style: {
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
} }, yf = {
	role: "heading",
	"aria-level": "2"
}, [bf, xf] = /* @__PURE__ */ K("CalendarRoot"), Sf = /* @__PURE__ */ U({
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
		let n = e, r = t, { disabled: i, readonly: a, initialFocus: s, pagedNavigation: c, weekdayFormat: l, fixedWeeks: d, multiple: f, minValue: m, maxValue: h, numberOfMonths: g, preventDeselect: _, isDateDisabled: y, isDateUnavailable: b, calendarLabel: x, defaultValue: S, nextPage: w, prevPage: T, dir: ee, locale: E, disableDaysOutsideCurrentView: D } = we(n), { primitiveElement: te, currentElement: O } = Ls(), ne = Es(E), k = $o(ee), re = R(() => n.weekStartsOn ?? Zo(ne.value)), ie = Bn(n, "modelValue", r, {
			defaultValue: S.value,
			passive: n.modelValue === void 0
		}), A = Uo({
			defaultPlaceholder: n.placeholder,
			defaultValue: ie.value,
			locale: n.locale
		}), j = Bn(n, "placeholder", r, {
			defaultValue: n.defaultPlaceholder ?? A.copy(),
			passive: n.placeholder === void 0
		});
		function ae(e) {
			j.value = e.copy();
		}
		let { fullCalendarLabel: oe, headingValue: M, isDateDisabled: N, isDateUnavailable: F, isNextButtonDisabled: se, isPrevButtonDisabled: ce, weekdays: le, isOutsideVisibleView: I, nextPage: ue, prevPage: de, formatter: fe, grid: pe, isPlaceholderFocusable: me, firstFocusableDate: he } = _f({
			locale: ne,
			placeholder: j,
			weekStartsOn: re,
			fixedWeeks: d,
			numberOfMonths: g,
			minValue: m,
			maxValue: h,
			disabled: i,
			weekdayFormat: l,
			pagedNavigation: c,
			isDateDisabled: y.value,
			isDateUnavailable: b.value,
			calendarLabel: x,
			nextPage: w,
			prevPage: T
		}), { isInvalid: ge, isDateSelected: _e, hasSelectedDate: ve, isSelectedDateDisabled: ye } = ff({
			date: ie,
			isDateDisabled: N,
			isDateUnavailable: F
		});
		C(ie, (e) => {
			if (Array.isArray(e) && e.length) {
				let t = e.at(-1);
				t && !Zr(j.value, t) && ae(t);
			} else !Array.isArray(e) && e && !Zr(j.value, e) && ae(e);
		});
		function be(e) {
			if (!f.value) {
				if (!ie.value) {
					ie.value = e.copy();
					return;
				}
				!_.value && Zr(ie.value, e) ? (j.value = e.copy(), ie.value = void 0) : ie.value = e.copy();
			} else if (!ie.value) ie.value = [e.copy()];
			else if (Array.isArray(ie.value)) {
				if (ie.value.findIndex((t) => Yr(t, e)) === -1) ie.value = [...ie.value, e];
				else if (!_.value) {
					let t = ie.value.filter((t) => !Yr(t, e));
					if (!t.length) {
						j.value = e.copy(), ie.value = void 0;
						return;
					}
					ie.value = t.map((e) => e.copy());
				}
			}
		}
		return p(() => {
			s.value && Go(O.value);
		}), xf({
			isDateUnavailable: F,
			dir: k,
			isDateDisabled: N,
			locale: ne,
			formatter: fe,
			modelValue: ie,
			placeholder: j,
			disabled: i,
			initialFocus: s,
			pagedNavigation: c,
			grid: pe,
			weekDays: le,
			weekStartsOn: re,
			weekdayFormat: l,
			fixedWeeks: d,
			multiple: f,
			numberOfMonths: g,
			readonly: a,
			preventDeselect: _,
			fullCalendarLabel: oe,
			headingValue: M,
			isInvalid: ge,
			isDateSelected: _e,
			isNextButtonDisabled: se,
			isPrevButtonDisabled: ce,
			isOutsideVisibleView: I,
			nextPage: ue,
			prevPage: de,
			parentElement: O,
			onPlaceholderChange: ae,
			onDateChange: be,
			disableDaysOutsideCurrentView: D,
			minValue: m,
			maxValue: h,
			isPlaceholderFocusable: me,
			firstFocusableDate: he,
			hasSelectedDate: ve,
			isSelectedDateDisabled: ye
		}), (e, t) => (o(), P(z(X), {
			ref_key: "primitiveElement",
			ref: te,
			as: e.as,
			"as-child": e.asChild,
			"aria-label": z(oe),
			"data-readonly": z(a) ? "" : void 0,
			"data-disabled": z(i) ? "" : void 0,
			"data-invalid": z(ge) ? "" : void 0,
			dir: z(k)
		}, {
			default: u(() => [v(e.$slots, "default", {
				date: z(j),
				grid: z(pe),
				weekDays: z(le),
				weekStartsOn: re.value,
				locale: z(ne),
				fixedWeeks: z(d),
				modelValue: z(ie)
			}), L("div", vf, [L("div", yf, H(z(oe)), 1)])]),
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
}), Cf = /* @__PURE__ */ U({
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
		let t = bf();
		return (e, n) => (o(), P(z(X), {
			as: e.as,
			"as-child": e.asChild,
			role: "gridcell",
			"aria-selected": z(t).isDateSelected(e.date) ? !0 : void 0,
			"aria-disabled": z(t).isDateDisabled(e.date) || z(t).isDateUnavailable?.(e.date) || z(t).disableDaysOutsideCurrentView.value,
			"data-disabled": z(t).isDateDisabled(e.date) || z(t).disableDaysOutsideCurrentView.value ? "" : void 0
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"aria-selected",
			"aria-disabled",
			"data-disabled"
		]));
	}
}), wf = /* @__PURE__ */ U({
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
		let n = e, r = Ts(), i = bf(), { primitiveElement: a, currentElement: s } = Ls(), c = R(() => n.day.day.toLocaleString(i.locale.value)), l = R(() => i.formatter.custom(Po(n.day), {
			weekday: "long",
			month: "long",
			day: "numeric",
			year: "numeric"
		})), d = R(() => i.isDateUnavailable?.(n.day) ?? !1), f = R(() => ei(n.day, ui())), p = R(() => !Xr(n.day, n.month)), m = R(() => i.isOutsideVisibleView(n.day)), h = R(() => i.isDateDisabled(n.day) || i.disableDaysOutsideCurrentView.value && p.value), g = R(() => p.value || h.value ? !1 : !i.disabled.value && i.isPlaceholderFocusable.value && Yr(n.day, i.placeholder.value) ? !0 : (!i.hasSelectedDate.value || i.isSelectedDateDisabled.value) && !i.isPlaceholderFocusable.value ? i.firstFocusableDate.value && Yr(n.day, i.firstFocusableDate.value) : !1), _ = R(() => i.isDateSelected(n.day));
		function y(e) {
			i.readonly.value || i.isDateDisabled(e) || i.isDateUnavailable?.(e) || i.onDateChange(e);
		}
		function b() {
			h.value || y(n.day);
		}
		function x(e) {
			if (h.value) return;
			e.preventDefault(), e.stopPropagation();
			let a = i.parentElement.value, o = i.dir.value === "rtl" ? -1 : 1;
			switch (e.code) {
				case r.ARROW_RIGHT:
					s(n.day, o);
					break;
				case r.ARROW_LEFT:
					s(n.day, -o);
					break;
				case r.ARROW_UP:
					s(n.day, -7);
					break;
				case r.ARROW_DOWN:
					s(n.day, 7);
					break;
				case r.ENTER:
				case r.SPACE_CODE: y(n.day);
			}
			function s(e, n) {
				let r = e.add({ days: n });
				if (i.minValue.value && r.compare(i.minValue.value) < 0 || i.maxValue.value && r.compare(i.maxValue.value) > 0) return;
				let o = a.querySelector(`[data-value='${r.toString()}']:not([data-outside-view])`);
				if (!o) {
					if (n > 0) {
						if (i.isNextButtonDisabled()) return;
						i.nextPage();
					} else {
						if (i.isPrevButtonDisabled()) return;
						i.prevPage();
					}
					t(() => {
						s(e, n);
					});
					return;
				}
				if (o && o.hasAttribute("data-disabled")) return s(r, n);
				i.onPlaceholderChange(r), o?.focus();
			}
		}
		return (e, t) => (o(), P(z(X), {
			ref_key: "primitiveElement",
			ref: a,
			as: n.as,
			"as-child": n.asChild,
			role: "button",
			"aria-label": l.value,
			"data-reka-calendar-cell-trigger": "",
			"aria-disabled": h.value || d.value ? !0 : void 0,
			"data-selected": _.value ? !0 : void 0,
			"data-value": e.day.toString(),
			"data-disabled": h.value ? "" : void 0,
			"data-unavailable": d.value ? "" : void 0,
			"data-today": f.value ? "" : void 0,
			"data-outside-view": p.value ? "" : void 0,
			"data-outside-visible-view": m.value ? "" : void 0,
			"data-focused": g.value ? "" : void 0,
			tabindex: g.value ? 0 : p.value || h.value ? void 0 : -1,
			onClick: b,
			onKeydown: [be(x, [
				"up",
				"down",
				"left",
				"right",
				"space",
				"enter"
			]), t[0] ||= be(k(() => {}, ["prevent"]), ["enter"])]
		}, {
			default: u(() => [v(e.$slots, "default", {
				dayValue: c.value,
				disabled: h.value,
				today: f.value,
				selected: _.value,
				outsideView: p.value,
				outsideVisibleView: m.value,
				unavailable: d.value
			}, () => [V(H(c.value), 1)])]),
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
}), Tf = /* @__PURE__ */ U({
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
		let t = e, n = bf(), r = R(() => n.disabled.value ? !0 : void 0), i = R(() => n.readonly.value ? !0 : void 0);
		return (e, n) => (o(), P(z(X), I(t, {
			tabindex: "-1",
			role: "application",
			"aria-readonly": i.value,
			"aria-disabled": r.value,
			"data-readonly": i.value && "",
			"data-disabled": r.value && ""
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, [
			"aria-readonly",
			"aria-disabled",
			"data-readonly",
			"data-disabled"
		]));
	}
}), Ef = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(X), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Df = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(X), I(t, { "aria-hidden": "true" }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Of = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(X), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), kf = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(X), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Af = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(X), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), jf = /* @__PURE__ */ U({
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
		let t = e, n = bf();
		return (e, r) => (o(), P(z(X), I(t, { "data-disabled": z(n).disabled.value ? "" : void 0 }), {
			default: u(() => [v(e.$slots, "default", { headingValue: z(n).headingValue.value }, () => [V(H(z(n).headingValue.value), 1)])]),
			_: 3
		}, 16, ["data-disabled"]));
	}
}), Mf = /* @__PURE__ */ U({
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
		let t = e, n = R(() => r.disabled.value || r.isNextButtonDisabled(t.nextPage)), r = bf();
		function i() {
			n.value || r.nextPage(t.nextPage);
		}
		return (e, r) => (o(), P(z(X), {
			as: t.as,
			"as-child": t.asChild,
			"aria-label": "Next page",
			type: t.as === "button" ? "button" : void 0,
			"aria-disabled": n.value || void 0,
			"data-disabled": n.value || void 0,
			disabled: n.value,
			onClick: i
		}, {
			default: u(() => [v(e.$slots, "default", { disabled: n.value }, () => [r[0] ||= V(" Next page ")])]),
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
}), Nf = /* @__PURE__ */ U({
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
		let t = e, n = R(() => r.disabled.value || r.isPrevButtonDisabled(t.prevPage)), r = bf();
		function i() {
			n.value || r.prevPage(t.prevPage);
		}
		return (e, r) => (o(), P(z(X), {
			"aria-label": "Previous page",
			as: t.as,
			"as-child": t.asChild,
			type: t.as === "button" ? "button" : void 0,
			"aria-disabled": n.value || void 0,
			"data-disabled": n.value || void 0,
			disabled: n.value,
			onClick: i
		}, {
			default: u(() => [v(e.$slots, "default", { disabled: n.value }, () => [r[0] ||= V(" Prev page ")])]),
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
}), [Pf, Ff] = /* @__PURE__ */ K("RovingFocusGroup"), If = /* @__PURE__ */ U({
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
		let r = e, i = n, { loop: a, orientation: s, dir: c } = we(r), l = $o(c), d = Bn(r, "currentTabStopId", i, {
			defaultValue: r.defaultCurrentTabStopId,
			passive: r.currentTabStopId === void 0
		}), f = O(!1), p = O(!1), m = O(0), { getItems: h, CollectionSlot: g } = ul({ isProvider: !0 });
		function _(e) {
			let t = !p.value;
			if (e.currentTarget && e.target === e.currentTarget && t && !f.value) {
				let t = new CustomEvent(gl, _l);
				if (e.currentTarget.dispatchEvent(t), i("entryFocus", t), !t.defaultPrevented) {
					let e = h().map((e) => e.ref).filter((e) => e.dataset.disabled !== "");
					xl([
						e.find((e) => e.getAttribute("data-active") === ""),
						e.find((e) => e.getAttribute("data-highlighted") === ""),
						e.find((e) => e.id === d.value),
						...e
					].filter(Boolean), r.preventScrollOnEntryFocus);
				}
			}
			p.value = !1;
		}
		function y() {
			setTimeout(() => {
				p.value = !1;
			}, 1);
		}
		return t({ getItems: h }), Ff({
			loop: a,
			dir: l,
			orientation: s,
			currentTabStopId: d,
			onItemFocus: (e) => {
				d.value = e;
			},
			onItemShiftTab: () => {
				f.value = !0;
			},
			onFocusableItemAdd: () => {
				m.value++;
			},
			onFocusableItemRemove: () => {
				m.value--;
			}
		}), (e, t) => (o(), P(z(g), null, {
			default: u(() => [W(z(X), {
				tabindex: f.value || m.value === 0 ? -1 : 0,
				"data-orientation": z(s),
				as: e.as,
				"as-child": e.asChild,
				dir: z(l),
				style: { outline: "none" },
				onMousedown: t[0] ||= (e) => p.value = !0,
				onMouseup: y,
				onFocus: _,
				onBlur: t[1] ||= (e) => f.value = !1
			}, {
				default: u(() => [v(e.$slots, "default")]),
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
}), Lf = /* @__PURE__ */ U({
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
		let n = e, r = Pf(), i = ws(), a = R(() => n.tabStopId || i), s = R(() => r.currentTabStopId.value === a.value), { getItems: c, CollectionItem: l } = ul();
		p(() => {
			n.focusable && r.onFocusableItemAdd();
		}), m(() => {
			n.focusable && r.onFocusableItemRemove();
		});
		function d(e) {
			if (e.key === "Tab" && e.shiftKey) {
				r.onItemShiftTab();
				return;
			}
			if (e.target !== e.currentTarget) return;
			let i = bl(e, r.orientation.value, r.dir.value);
			if (i !== void 0) {
				if (e.metaKey || e.ctrlKey || e.altKey || !n.allowShiftKey && e.shiftKey) return;
				e.preventDefault();
				let a = [...c().map((e) => e.ref).filter((e) => e.dataset.disabled !== "")];
				if (i === "last") a.reverse();
				else if (i === "prev" || i === "next") {
					i === "prev" && a.reverse();
					let t = a.indexOf(e.currentTarget);
					a = r.loop.value ? Sl(a, t + 1) : a.slice(t + 1);
				}
				t(() => xl(a));
			}
		}
		return (e, t) => (o(), P(z(l), null, {
			default: u(() => [W(z(X), {
				tabindex: s.value ? 0 : -1,
				"data-orientation": z(r).orientation.value,
				"data-active": e.active ? "" : void 0,
				"data-disabled": e.focusable ? void 0 : "",
				as: e.as,
				"as-child": e.asChild,
				onMousedown: t[0] ||= (t) => {
					e.focusable ? z(r).onItemFocus(a.value) : t.preventDefault();
				},
				onFocus: t[1] ||= (e) => z(r).onItemFocus(a.value),
				onKeydown: d
			}, {
				default: u(() => [v(e.$slots, "default")]),
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
}), [Rf, zf] = /* @__PURE__ */ K("CheckboxGroupRoot");
//#endregion
//#region node_modules/reka-ui/dist/Checkbox/utils.js
function Bf(e) {
	return e === "indeterminate";
}
function Vf(e) {
	return Bf(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
//#endregion
//#region node_modules/reka-ui/dist/Checkbox/CheckboxRoot.js
var [Hf, Uf] = /* @__PURE__ */ K("CheckboxRoot"), Wf = /* @__PURE__ */ U({
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
		let n = e, r = t, { forwardRef: i, currentElement: a } = q(), s = Rf(null), c = Bn(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? n.falseValue,
			passive: n.modelValue === void 0
		}), l = R(() => s?.disabled.value || n.disabled), d = R(() => hr(c.value, n.trueValue)), f = R(() => wr(s?.modelValue.value) ? c.value === "indeterminate" ? "indeterminate" : d.value : Tr(s.modelValue.value, n.value));
		function p() {
			if (wr(s?.modelValue.value)) c.value === "indeterminate" ? c.value = n.trueValue : c.value = d.value ? n.falseValue : n.trueValue;
			else {
				let e = [...s.modelValue.value || []];
				if (Tr(e, n.value)) {
					let t = e.findIndex((e) => hr(e, n.value));
					e.splice(t, 1);
				} else e.push(n.value);
				s.modelValue.value = e;
			}
		}
		let m = as(a), h = R(() => n.id && a.value ? document.querySelector(`[for="${n.id}"]`)?.innerText : void 0);
		return Uf({
			disabled: l,
			state: f
		}), (e, t) => (o(), P(De(z(s)?.rovingFocus.value ? z(Lf) : z(X)), I(e.$attrs, {
			id: e.id,
			ref: z(i),
			role: "checkbox",
			"as-child": e.asChild,
			as: e.as,
			type: e.as === "button" ? "button" : void 0,
			"aria-checked": z(Bf)(f.value) ? "mixed" : f.value,
			"aria-required": e.required,
			"aria-label": e.$attrs["aria-label"] || h.value,
			"data-state": z(Vf)(f.value),
			"data-disabled": l.value ? "" : void 0,
			disabled: l.value,
			focusable: z(s)?.rovingFocus.value ? !l.value : void 0,
			onKeydown: be(k(() => {}, ["prevent"]), ["enter"]),
			onClick: p
		}), {
			default: u(() => [v(e.$slots, "default", {
				modelValue: z(c),
				state: f.value
			}), z(m) && e.name && !z(s) ? (o(), P(z(pl), {
				key: 0,
				type: "checkbox",
				checked: !!f.value,
				name: e.name,
				value: e.value,
				disabled: l.value,
				required: e.required
			}, null, 8, [
				"checked",
				"name",
				"value",
				"disabled",
				"required"
			])) : M("v-if", !0)]),
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
}), Gf = /* @__PURE__ */ U({
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
		let { forwardRef: t } = q(), n = Hf();
		return (e, r) => (o(), P(z(Ps), { present: e.forceMount || z(Bf)(z(n).state.value) || z(n).state.value === !0 }, {
			default: u(() => [W(z(X), I({
				ref: z(t),
				"data-state": z(Vf)(z(n).state.value),
				"data-disabled": z(n).disabled.value ? "" : void 0,
				style: { pointerEvents: "none" },
				"as-child": e.asChild,
				as: e.as
			}, e.$attrs), {
				default: u(() => [v(e.$slots, "default")]),
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
function Kf(e = [], t, n) {
	let r = [...e];
	return r[n] = t, r.sort((e, t) => e - t);
}
function qf(e, t, n) {
	return yr(100 / (n - t) * (e - t), 0, 100);
}
function Jf(e, t) {
	if (t > 2) return `Value ${e + 1} of ${t}`;
	if (t === 2) return ["Minimum", "Maximum"][e];
}
function Yf(e, t) {
	if (e.length === 1) return 0;
	let n = e.map((e) => Math.abs(e - t)), r = Math.min(...n);
	return n.indexOf(r);
}
function Xf(e, t, n) {
	let r = e / 2;
	return (r - $f([0, 50], [0, r])(t) * n) * n;
}
function Zf(e) {
	return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function Qf(e, t) {
	if (t > 0) {
		let n = Zf(e);
		return Math.min(...n) >= t;
	}
	return !0;
}
function $f(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
function ep(e) {
	return (String(e).split(".")[1] || "").length;
}
function tp(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
var np = ["PageUp", "PageDown"], rp = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], ip = {
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
}, [ap, op] = /* @__PURE__ */ K(["SliderVertical", "SliderHorizontal"]), sp = /* @__PURE__ */ U({
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
		let n = e, r = t, { max: i, min: a, dir: s, inverted: c } = we(n), { forwardRef: l, currentElement: d } = q(), f = lp(), p = O(), m = O(), h = R(() => s?.value !== "rtl" && !c.value || s?.value !== "ltr" && c.value);
		function g(e, t) {
			let n = m.value || d.value.getBoundingClientRect(), r = [...f.thumbElements.value][f.valueIndexToChangeRef.value], o = f.thumbAlignment.value === "contain" ? r.clientWidth : 0;
			!p.value && !t && f.thumbAlignment.value === "contain" && (p.value = e.clientX - r.getBoundingClientRect().left);
			let s = $f([0, n.width - o], h.value ? [a.value, i.value] : [i.value, a.value]);
			return m.value = n, s(t ? e.clientX - n.left - o / 2 : e.clientX - n.left - (p.value ?? 0));
		}
		return op({
			startEdge: R(() => h.value ? "left" : "right"),
			endEdge: R(() => h.value ? "right" : "left"),
			direction: R(() => h.value ? 1 : -1),
			size: "width"
		}), (e, t) => (o(), P(fp, {
			ref: z(l),
			dir: z(s),
			"data-orientation": "horizontal",
			style: D({ "--reka-slider-thumb-transform": !h.value && z(f).thumbAlignment.value === "overflow" ? "translateX(50%)" : "translateX(-50%)" }),
			onSlideStart: t[0] ||= (e) => {
				r("slideStart", g(e, !0));
			},
			onSlideMove: t[1] ||= (e) => {
				r("slideMove", g(e));
			},
			onSlideEnd: t[2] ||= () => {
				m.value = void 0, p.value = void 0, r("slideEnd");
			},
			onStepKeyDown: t[3] ||= (e) => {
				let t = h.value ? "from-left" : "from-right";
				r("stepKeyDown", e, z(ip)[t].includes(e.key) ? -1 : 1);
			},
			onEndKeyDown: t[4] ||= (e) => r("endKeyDown", e),
			onHomeKeyDown: t[5] ||= (e) => r("homeKeyDown", e)
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["dir", "style"]));
	}
}), cp = /* @__PURE__ */ U({
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
		let n = e, r = t, { max: i, min: a, inverted: s } = we(n), c = lp(), { forwardRef: l, currentElement: d } = q(), f = O(), p = O(), m = R(() => !s.value);
		function h(e, t) {
			let n = p.value || d.value.getBoundingClientRect(), r = [...c.thumbElements.value][c.valueIndexToChangeRef.value], o = c.thumbAlignment.value === "contain" ? r.clientHeight : 0;
			!f.value && !t && c.thumbAlignment.value === "contain" && (f.value = e.clientY - r.getBoundingClientRect().top);
			let s = $f([0, n.height - o], m.value ? [i.value, a.value] : [a.value, i.value]), l = t ? e.clientY - n.top - o / 2 : e.clientY - n.top - (f.value ?? 0);
			return p.value = n, s(l);
		}
		return op({
			startEdge: R(() => m.value ? "bottom" : "top"),
			endEdge: R(() => m.value ? "top" : "bottom"),
			direction: R(() => m.value ? 1 : -1),
			size: "height"
		}), (e, t) => (o(), P(fp, {
			ref: z(l),
			"data-orientation": "vertical",
			style: D({ "--reka-slider-thumb-transform": !m.value && z(c).thumbAlignment.value === "overflow" ? "translateY(-50%)" : "translateY(50%)" }),
			onSlideStart: t[0] ||= (e) => {
				r("slideStart", h(e, !0));
			},
			onSlideMove: t[1] ||= (e) => {
				r("slideMove", h(e));
			},
			onSlideEnd: t[2] ||= () => {
				p.value = void 0, f.value = void 0, r("slideEnd");
			},
			onStepKeyDown: t[3] ||= (e) => {
				let t = m.value ? "from-bottom" : "from-top";
				r("stepKeyDown", e, z(ip)[t].includes(e.key) ? -1 : 1);
			},
			onEndKeyDown: t[4] ||= (e) => r("endKeyDown", e),
			onHomeKeyDown: t[5] ||= (e) => r("homeKeyDown", e)
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["style"]));
	}
}), [lp, up] = /* @__PURE__ */ K("SliderRoot"), dp = /* @__PURE__ */ U({
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
		let n = e, r = t, { min: i, max: a, step: s, minStepsBetweenThumbs: c, orientation: l, disabled: d, thumbAlignment: f, dir: p } = we(n), m = $o(p), { forwardRef: h, currentElement: g } = q(), _ = as(g), { CollectionSlot: y } = ul({ isProvider: !0 }), b = Bn(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: n.modelValue === void 0
		}), x = R(() => Array.isArray(b.value) ? [...b.value] : []), S = O(0), C = O(x.value);
		function w(e) {
			E(e, Yf(x.value, e));
		}
		function T(e) {
			E(e, S.value);
		}
		function ee() {
			let e = C.value[S.value];
			x.value[S.value] !== e && r("valueCommit", re(x.value));
		}
		function E(e, t, { commit: n } = { commit: !1 }) {
			let o = ep(s.value), l = yr(tp(Math.round((e - i.value) / s.value) * s.value + i.value, o), i.value, a.value), u = Kf(x.value, l, t);
			if (Qf(u, c.value * s.value)) {
				S.value = u.indexOf(l);
				let e = String(u) !== String(b.value);
				e && n && r("valueCommit", u), e && (D.value[S.value]?.focus(), b.value = u);
			}
		}
		let D = O([]);
		return up({
			modelValue: b,
			currentModelValue: x,
			valueIndexToChangeRef: S,
			thumbElements: D,
			orientation: l,
			min: i,
			max: a,
			disabled: d,
			thumbAlignment: f
		}), (e, t) => (o(), P(z(y), null, {
			default: u(() => [(o(), P(De(z(l) === "horizontal" ? sp : cp), I(e.$attrs, {
				ref: z(h),
				"as-child": e.asChild,
				as: e.as,
				min: z(i),
				max: z(a),
				dir: z(m),
				inverted: e.inverted,
				"aria-disabled": z(d),
				"data-disabled": z(d) ? "" : void 0,
				onPointerdown: t[0] ||= () => {
					z(d) || (C.value = x.value);
				},
				onSlideStart: t[1] ||= (e) => !z(d) && w(e),
				onSlideMove: t[2] ||= (e) => !z(d) && T(e),
				onSlideEnd: t[3] ||= (e) => !z(d) && ee(),
				onHomeKeyDown: t[4] ||= (e) => !z(d) && E(z(i), 0, { commit: !0 }),
				onEndKeyDown: t[5] ||= (e) => !z(d) && E(z(a), x.value.length - 1, { commit: !0 }),
				onStepKeyDown: t[6] ||= (e, t) => {
					if (!z(d)) {
						let n = z(np).includes(e.key) || e.shiftKey && z(rp).includes(e.key) ? 10 : 1, r = S.value, i = x.value[r];
						E(i + z(s) * n * t, r, { commit: !0 });
					}
				}
			}), {
				default: u(() => [v(e.$slots, "default", { modelValue: z(b) }), z(_) && e.name ? (o(), P(z(pl), {
					key: 0,
					type: "number",
					value: z(b),
					name: e.name,
					required: e.required,
					disabled: z(d),
					step: z(s)
				}, null, 8, [
					"value",
					"name",
					"required",
					"disabled",
					"step"
				])) : M("v-if", !0)]),
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
}), fp = /* @__PURE__ */ U({
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
		let n = e, r = t, i = lp();
		return (e, t) => (o(), P(z(X), I({ "data-slider-impl": "" }, n, {
			onKeydown: t[0] ||= (e) => {
				e.key === "Home" ? (r("homeKeyDown", e), e.preventDefault()) : e.key === "End" ? (r("endKeyDown", e), e.preventDefault()) : z(np).concat(z(rp)).includes(e.key) && (r("stepKeyDown", e), e.preventDefault());
			},
			onPointerdown: t[1] ||= (e) => {
				let t = e.target;
				t.setPointerCapture(e.pointerId), e.preventDefault(), z(i).thumbElements.value.includes(t) ? t.focus() : r("slideStart", e);
			},
			onPointermove: t[2] ||= (e) => {
				e.target.hasPointerCapture(e.pointerId) && r("slideMove", e);
			},
			onPointerup: t[3] ||= (e) => {
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), r("slideEnd", e));
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), pp = /* @__PURE__ */ U({
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
		let t = lp(), n = ap();
		q();
		let r = R(() => t.currentModelValue.value.map((e) => qf(e, t.min.value, t.max.value))), i = R(() => t.currentModelValue.value.length > 1 ? Math.min(...r.value) : 0), a = R(() => 100 - Math.max(...r.value, 0));
		return (e, r) => (o(), P(z(X), {
			"data-disabled": z(t).disabled.value ? "" : void 0,
			"data-orientation": z(t).orientation.value,
			"as-child": e.asChild,
			as: e.as,
			style: D({
				[z(n).startEdge.value]: `${i.value}%`,
				[z(n).endEdge.value]: `${a.value}%`
			})
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"data-disabled",
			"data-orientation",
			"as-child",
			"as",
			"style"
		]));
	}
}), mp = /* @__PURE__ */ U({
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
		let t = e, n = lp(), r = ap(), { forwardRef: i, currentElement: a } = q(), { CollectionItem: s } = ul(), c = R(() => n.modelValue?.value?.[t.index]), l = R(() => c.value === void 0 ? 0 : qf(c.value, n.min.value ?? 0, n.max.value ?? 100)), d = R(() => Jf(t.index, n.modelValue?.value?.length ?? 0)), f = Ds(a), h = R(() => f[r.size].value), g = R(() => n.thumbAlignment.value === "overflow" || !h.value ? 0 : Xf(h.value, l.value, r.direction.value)), _ = Cn();
		return p(() => {
			n.thumbElements.value.push(a.value);
		}), m(() => {
			let e = n.thumbElements.value.findIndex((e) => e === a.value) ?? -1;
			n.thumbElements.value.splice(e, 1);
		}), (e, t) => (o(), P(z(s), null, {
			default: u(() => [W(z(X), I(e.$attrs, {
				ref: z(i),
				role: "slider",
				tabindex: z(n).disabled.value ? void 0 : 0,
				"aria-label": e.$attrs["aria-label"] || d.value,
				"data-disabled": z(n).disabled.value ? "" : void 0,
				"data-orientation": z(n).orientation.value,
				"aria-valuenow": c.value,
				"aria-valuemin": z(n).min.value,
				"aria-valuemax": z(n).max.value,
				"aria-orientation": z(n).orientation.value,
				"as-child": e.asChild,
				as: e.as,
				style: {
					transform: "var(--reka-slider-thumb-transform)",
					position: "absolute",
					[z(r).startEdge.value]: `calc(${l.value}% + ${g.value}px)`,
					display: !z(_) && c.value === void 0 ? "none" : void 0
				},
				onFocus: t[0] ||= () => {
					z(n).valueIndexToChangeRef.value = e.index;
				}
			}), {
				default: u(() => [v(e.$slots, "default")]),
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
}), hp = /* @__PURE__ */ U({
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
		let t = e, { getItems: n } = ul(), { forwardRef: r, currentElement: i } = q(), a = R(() => i.value ? n(!0).findIndex((e) => e.ref === i.value) : -1);
		return (e, n) => (o(), P(mp, I({ ref: z(r) }, t, { index: a.value }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["index"]));
	}
}), gp = /* @__PURE__ */ U({
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
		let t = lp();
		return q(), (e, n) => (o(), P(z(X), {
			"as-child": e.asChild,
			as: e.as,
			"data-disabled": z(t).disabled.value ? "" : void 0,
			"data-orientation": z(t).orientation.value
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as-child",
			"as",
			"data-disabled",
			"data-orientation"
		]));
	}
}), _p = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(zl), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/shared/useIsUsingKeyboard.js
function vp() {
	let e = O(!1);
	return p(() => {
		Sn("keydown", () => {
			e.value = !0;
		}, {
			capture: !0,
			passive: !0
		}), Sn(["pointerdown", "pointermove"], () => {
			e.value = !1;
		}, {
			capture: !0,
			passive: !0
		});
	}), e;
}
var yp = rn(vp), [bp, xp] = /* @__PURE__ */ K(["MenuRoot", "MenuSub"], "MenuContext"), [Sp, Cp] = /* @__PURE__ */ K("MenuRoot"), wp = /* @__PURE__ */ U({
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
		let n = e, r = t, { modal: i, dir: a } = we(n), s = $o(a), c = Bn(n, "open", r), l = O(), d = yp();
		return xp({
			open: c,
			onOpenChange: (e) => {
				c.value = e;
			},
			content: l,
			onContentChange: (e) => {
				l.value = e;
			}
		}), Cp({
			onClose: () => {
				c.value = !1;
			},
			isUsingKeyboardRef: d,
			dir: s,
			modal: i
		}), (e, t) => (o(), P(z(Rl), null, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}));
	}
}), [Tp, Ep] = /* @__PURE__ */ K("MenuContent"), Dp = /* @__PURE__ */ U({
	__name: "MenuContentImpl",
	props: /* @__PURE__ */ h({
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
	}, { ...Zd }),
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
		let n = e, r = t, i = bp(), a = Sp(), { trapFocus: s, disableOutsidePointerEvents: c, loop: l } = we(n);
		rs(), Lr(c.value);
		let d = O(""), f = O(0), p = O(0), h = O(null), g = O("right"), _ = O(0), y = O(null), b = O(), { forwardRef: x, currentElement: S } = q(), { handleTypeaheadSearch: w } = ks(), T = O();
		function ee(e) {
			let t = Or(e, T.value || Sr(), S.value, {
				loop: l.value,
				arrowKeyOptions: "vertical",
				dir: a?.dir.value,
				focus: !1,
				attributeName: "[data-reka-collection-item]:not([data-disabled])"
			});
			t && (T.value = t, t.scrollIntoView({ block: "nearest" }));
		}
		function E() {
			T.value && T.value.click();
		}
		let D = O(), te = O();
		C(T, (e) => {
			te.value && (e === void 0 || e !== te.value.trigger.value) && (te.value.onOpenChange(!1), te.value = void 0);
		}), C(S, (e) => {
			i.onContentChange(e);
		}), m(() => {
			window.clearTimeout(f.value);
		});
		function ne(e) {
			return g.value === h.value?.side && Bc(e, h.value?.area);
		}
		async function k(e) {
			r("openAutoFocus", e), !e.defaultPrevented && (e.preventDefault(), S.value?.focus({ preventScroll: !0 }));
		}
		function re(e) {
			if (e.defaultPrevented) return;
			let t = e.target, n = t.closest("[data-reka-menu-content]") === e.currentTarget, r = ["input", "textarea"].includes(t.tagName.toLowerCase()), i = e.ctrlKey || e.altKey || e.metaKey, o = e.key.length === 1, s = Or(e, Sr(), S.value, {
				loop: l.value,
				arrowKeyOptions: "vertical",
				dir: a?.dir.value,
				focus: !0,
				attributeName: "[data-reka-collection-item]:not([data-disabled])"
			});
			if (s) return s?.focus();
			if (e.code === "Space") return;
			let c = b.value?.getItems() ?? [];
			if (n && (e.key === "Tab" && e.preventDefault(), !i && o && !r && w(e.key, c)), e.target !== S.value || !Mc.includes(e.key)) return;
			e.preventDefault();
			let u = [...c.map((e) => e.ref)];
			jc.includes(e.key) && u.reverse(), Rc(u);
		}
		function ie(e) {
			e?.currentTarget?.contains?.(e.target) || (window.clearTimeout(f.value), d.value = "");
		}
		function A(e) {
			if (!Vc(e)) return;
			let t = e.target, n = _.value !== e.clientX;
			(e?.currentTarget)?.contains(t) && n && (g.value = e.clientX > _.value ? "right" : "left", _.value = e.clientX);
		}
		function j(e) {
			Vc(e) && D.value && D.value.focus();
		}
		return Ep({
			onItemEnter: (e) => !!ne(e),
			onItemLeave: (e) => ne(e) ? !0 : (["INPUT", "TEXTAREA"].includes(Sr()?.tagName || "") || S.value?.focus(), y.value = null, !1),
			onTriggerLeave: (e) => !!ne(e),
			searchRef: d,
			highlightedElement: T,
			onKeydownNavigation: ee,
			onKeydownEnter: E,
			filterElement: D,
			onFilterElementChange: (e) => {
				D.value = e;
			},
			activeSubmenuContext: te,
			pointerGraceTimerRef: p,
			onPointerGraceIntentChange: (e) => {
				h.value = e;
			}
		}), (e, t) => (o(), P(z(Dc), {
			"as-child": "",
			trapped: z(s),
			onMountAutoFocus: k,
			onUnmountAutoFocus: t[7] ||= (e) => r("closeAutoFocus", e)
		}, {
			default: u(() => [W(z(pc), {
				"as-child": "",
				"disable-outside-pointer-events": z(c),
				onEscapeKeyDown: t[2] ||= (e) => r("escapeKeyDown", e),
				onPointerDownOutside: t[3] ||= (e) => r("pointerDownOutside", e),
				onFocusOutside: t[4] ||= (e) => r("focusOutside", e),
				onInteractOutside: t[5] ||= (e) => r("interactOutside", e),
				onDismiss: t[6] ||= (e) => r("dismiss")
			}, {
				default: u(() => [W(z(If), {
					ref_key: "rovingFocusGroupRef",
					ref: b,
					"current-tab-stop-id": y.value,
					"onUpdate:currentTabStopId": t[0] ||= (e) => y.value = e,
					"as-child": "",
					orientation: "vertical",
					dir: z(a).dir.value,
					loop: z(l),
					onEntryFocus: t[1] ||= (e) => {
						r("entryFocus", e), z(a).isUsingKeyboardRef.value || e.preventDefault();
					}
				}, {
					default: u(() => [W(z(ef), {
						ref: z(x),
						role: "menu",
						as: e.as,
						"as-child": e.asChild,
						"aria-orientation": "vertical",
						"data-reka-menu-content": "",
						"data-state": z(Fc)(z(i).open.value),
						dir: z(a).dir.value,
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
						onKeydown: re,
						onBlur: ie,
						onPointermove: A,
						onPointerenter: j
					}, {
						default: u(() => [v(e.$slots, "default")]),
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
}), Op = /* @__PURE__ */ U({
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
		let n = e, r = Tp(), { forwardRef: i, currentElement: a } = q(), { CollectionItem: s } = ul(), c = O(!1), l = R(() => c.value || r.highlightedElement.value === a.value);
		async function d(e) {
			if (!(e.defaultPrevented || !Vc(e))) {
				if (n.disabled) r.onItemLeave(e);
				else if (!r.onItemEnter(e)) {
					let t = e.currentTarget;
					r.highlightedElement.value = t, ["INPUT", "TEXTAREA"].includes(Sr()?.tagName || "") || t.focus({ preventScroll: !0 });
				}
			}
		}
		async function f(e) {
			await t(), !e.defaultPrevented && Vc(e) && r.highlightedElement.value === a.value && !r.onItemLeave(e) && r.highlightedElement.value === a.value && (r.highlightedElement.value = void 0);
		}
		return (e, n) => (o(), P(z(s), { value: { textValue: e.textValue } }, {
			default: u(() => [W(z(X), I({
				ref: z(i),
				role: "menuitem",
				tabindex: "-1"
			}, e.$attrs, {
				as: e.as,
				"as-child": e.asChild,
				"aria-disabled": e.disabled || void 0,
				"data-disabled": e.disabled ? "" : void 0,
				"data-highlighted": l.value ? "" : void 0,
				onPointermove: d,
				onPointerleave: f,
				onFocus: n[0] ||= async (n) => {
					await t(), !(n.defaultPrevented || e.disabled) && (c.value = !0, z(r).highlightedElement.value = n.currentTarget);
				},
				onBlur: n[1] ||= async (e) => {
					await t(), !e.defaultPrevented && (c.value = !1);
				}
			}), {
				default: u(() => [v(e.$slots, "default")]),
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
}), kp = /* @__PURE__ */ U({
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
	setup(e, { emit: n }) {
		let r = e, i = n, { forwardRef: a, currentElement: s } = q(), c = Sp(), l = Tp(), d = O(!1);
		async function f() {
			let e = s.value;
			if (!r.disabled && e) {
				let e = new CustomEvent(Oc, {
					bubbles: !0,
					cancelable: !0
				});
				i("select", e), await t(), e.defaultPrevented ? d.value = !1 : c.onClose();
			}
		}
		return (e, n) => (o(), P(Op, I(r, {
			ref: z(a),
			onClick: f,
			onPointerdown: n[0] ||= () => {
				d.value = !0;
			},
			onPointerup: n[1] ||= async (e) => {
				await t(), !e.defaultPrevented && (d.value || e.currentTarget?.click());
			},
			onKeydown: n[2] ||= async (t) => {
				let n = z(l).searchRef.value !== "";
				e.disabled || n && t.key === " " || z(kc).includes(t.key) && (t.currentTarget?.click(), t.preventDefault());
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [Ap, jp] = /* @__PURE__ */ K(["MenuCheckboxItem", "MenuRadioItem"], "MenuItemIndicatorContext"), Mp = /* @__PURE__ */ U({
	__name: "MenuItemIndicator",
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
		let t = Ap({ modelValue: O(!1) });
		return (e, n) => (o(), P(z(Ps), { present: e.forceMount || z(Ic)(z(t).modelValue.value) || z(t).modelValue.value === !0 }, {
			default: u(() => [W(z(X), {
				as: e.as,
				"as-child": e.asChild,
				"data-state": z(Lc)(z(t).modelValue.value)
			}, {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"data-state"
			])]),
			_: 3
		}, 8, ["present"]));
	}
}), Np = /* @__PURE__ */ U({
	__name: "MenuCheckboxItem",
	props: {
		modelValue: {
			type: [Boolean, String],
			required: !1,
			default: !1
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
	emits: ["select", "update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = J(G(n, ["modelValue"])), a = Bn(n, "modelValue", r);
		return jp({ modelValue: a }), (e, t) => (o(), P(kp, I({ role: "menuitemcheckbox" }, z(i), {
			"aria-checked": z(Ic)(z(a)) ? "mixed" : z(a),
			"data-state": z(Lc)(z(a)),
			onSelect: t[0] ||= async (e) => {
				r("select", e), z(Ic)(z(a)) ? a.value = !0 : a.value = !z(a);
			}
		}), {
			default: u(() => [v(e.$slots, "default", { modelValue: z(a) })]),
			_: 3
		}, 16, ["aria-checked", "data-state"]));
	}
}), Pp = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(n, r), a = bp(), { forwardRef: s, currentElement: c } = q();
		return Ss(c), (e, t) => (o(), P(Dp, I(z(i), {
			ref: z(s),
			"trap-focus": z(a).open.value,
			"disable-outside-pointer-events": z(a).open.value,
			"disable-outside-scroll": !0,
			onDismiss: t[0] ||= (e) => z(a).onOpenChange(!1),
			onFocusOutside: t[1] ||= k((e) => r("focusOutside", e), ["prevent"])
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["trap-focus", "disable-outside-pointer-events"]));
	}
}), Fp = /* @__PURE__ */ U({
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
		let n = Y(e, t), r = bp();
		return (e, t) => (o(), P(Dp, I(z(n), {
			"trap-focus": !1,
			"disable-outside-pointer-events": !1,
			"disable-outside-scroll": !1,
			onDismiss: t[0] ||= (e) => z(r).onOpenChange(!1)
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Ip = /* @__PURE__ */ U({
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
		let n = Y(e, t), r = bp(), i = Sp();
		return (e, t) => (o(), P(z(Ps), { present: e.forceMount || z(r).open.value }, {
			default: u(() => [z(i).modal.value ? (o(), P(Pp, N(I({ key: 0 }, {
				...e.$attrs,
				...z(n)
			})), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16)) : (o(), P(Fp, N(I({ key: 1 }, {
				...e.$attrs,
				...z(n)
			})), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16))]),
			_: 3
		}, 8, ["present"]));
	}
}), [Lp, Rp] = /* @__PURE__ */ K("MenuGroup"), zp = /* @__PURE__ */ U({
	__name: "MenuGroup",
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
		let t = e, n = ws(void 0, "reka-menu-group");
		return Rp({ id: n }), (e, r) => (o(), P(z(X), I({ role: "group" }, t, { "aria-labelledby": z(n) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["aria-labelledby"]));
	}
}), Bp = /* @__PURE__ */ U({
	__name: "MenuLabel",
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
		let t = e, n = Lp({ id: "" });
		return (e, r) => (o(), P(z(X), I(t, { id: z(n).id || void 0 }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), Vp = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(Yc), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [Hp, Up] = /* @__PURE__ */ K("MenuRadioGroup"), Wp = /* @__PURE__ */ U({
	__name: "MenuRadioGroup",
	props: {
		modelValue: {
			type: null,
			required: !1,
			default: ""
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
		let n = e, i = t, a = J(G(n, ["modelValue"])), s = Bn(n, "modelValue", i);
		return Up({
			modelValue: s,
			onValueChange: (e) => {
				s.value = e;
			}
		}), (e, t) => (o(), P(zp, N(r(z(a))), {
			default: u(() => [v(e.$slots, "default", { modelValue: z(s) })]),
			_: 3
		}, 16));
	}
}), Gp = /* @__PURE__ */ U({
	__name: "MenuRadioItem",
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
		let n = e, r = t, i = J(G(n, ["value"])), { value: a } = we(n), s = Hp(), c = R(() => s.modelValue.value === a?.value);
		return jp({ modelValue: c }), (e, t) => (o(), P(kp, I({ role: "menuitemradio" }, z(i), {
			"aria-checked": c.value,
			"data-state": z(Lc)(c.value),
			onSelect: t[0] ||= async (e) => {
				r("select", e), z(s).onValueChange(z(a));
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["aria-checked", "data-state"]));
	}
}), Kp = /* @__PURE__ */ U({
	__name: "MenuSeparator",
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
		return (e, n) => (o(), P(z(X), I(t, {
			role: "separator",
			"aria-orientation": "horizontal"
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [qp, Jp] = /* @__PURE__ */ K("MenuSub"), Yp = /* @__PURE__ */ U({
	__name: "MenuSub",
	props: { open: {
		type: Boolean,
		required: !1,
		default: void 0
	} },
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = e, r = Bn(n, "open", t, {
			defaultValue: !1,
			passive: n.open === void 0
		}), i = bp(), a = O(), c = O();
		return s((e) => {
			i?.open.value === !1 && (r.value = !1), e(() => r.value = !1);
		}), xp({
			open: r,
			onOpenChange: (e) => {
				r.value = e;
			},
			content: c,
			onContentChange: (e) => {
				c.value = e;
			}
		}), Jp({
			triggerId: "",
			contentId: "",
			trigger: a,
			onTriggerChange: (e) => {
				a.value = e;
			}
		}), (e, t) => (o(), P(z(Rl), null, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}));
	}
}), Xp = /* @__PURE__ */ U({
	__name: "MenuSubContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		loop: {
			type: Boolean,
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
			required: !1,
			default: !0
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
		let n = Y(e, t), r = bp(), i = Sp(), a = qp(), s = Tp(), { forwardRef: c, currentElement: l } = q();
		return a.contentId ||= ws(void 0, "reka-menu-sub-content"), (e, t) => (o(), P(z(Ps), { present: e.forceMount || z(r).open.value }, {
			default: u(() => [W(Dp, I(z(n), {
				id: z(a).contentId,
				ref: z(c),
				"aria-labelledby": z(a).triggerId,
				align: "start",
				side: z(i).dir.value === "rtl" ? "left" : "right",
				"disable-outside-pointer-events": !1,
				"disable-outside-scroll": !1,
				"trap-focus": !1,
				onOpenAutoFocus: t[0] ||= k((e) => {
					z(i).isUsingKeyboardRef.value && z(l)?.focus();
				}, ["prevent"]),
				onCloseAutoFocus: t[1] ||= k(() => {}, ["prevent"]),
				onFocusOutside: t[2] ||= (e) => {
					if (e.defaultPrevented) return;
					let t = z(s).filterElement.value?.contains(e.target);
					e.target !== z(a).trigger.value && !t && z(r).onOpenChange(!1);
				},
				onEscapeKeyDown: t[3] ||= (e) => {
					z(i).onClose(), e.preventDefault();
				},
				onKeydown: t[4] ||= (e) => {
					let t = e.currentTarget?.contains(e.target), n = z(Pc)[z(i).dir.value].includes(e.key);
					t && n && (z(r).onOpenChange(!1), z(s).filterElement.value ? (z(s).filterElement.value.focus(), z(s).highlightedElement.value = z(a).trigger.value, z(a).trigger.value?.scrollIntoView({ block: "nearest" })) : z(a).trigger.value?.focus(), e.preventDefault());
				}
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, [
				"id",
				"aria-labelledby",
				"side"
			])]),
			_: 3
		}, 8, ["present"]));
	}
}), Zp = /* @__PURE__ */ U({
	__name: "MenuSubTrigger",
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
		let n = e, r = bp(), i = Sp(), a = qp(), s = Tp();
		C(r.open, (e) => {
			e ? s.activeSubmenuContext.value = {
				onOpenChange: r.onOpenChange,
				trigger: a.trigger
			} : s.activeSubmenuContext.value?.trigger.value === a.trigger.value && (s.activeSubmenuContext.value = void 0);
		});
		let c = O(null);
		a.triggerId ||= ws(void 0, "reka-menu-sub-trigger");
		function l() {
			c.value && window.clearTimeout(c.value), c.value = null;
		}
		m(() => {
			l();
		});
		function d(e) {
			Vc(e) && (s.onItemEnter(e) || !n.disabled && !r.open.value && !c.value && (s.onPointerGraceIntentChange(null), c.value = window.setTimeout(() => {
				r.onOpenChange(!0), l();
			}, 100)));
		}
		async function f(e) {
			if (!Vc(e)) return;
			l();
			let t = r.content.value?.getBoundingClientRect();
			if (t?.width) {
				let n = r.content.value?.dataset.side, i = n === "right", a = i ? -5 : 5, o = t[i ? "left" : "right"], c = t[i ? "right" : "left"];
				s.onPointerGraceIntentChange({
					area: [
						{
							x: e.clientX + a,
							y: e.clientY
						},
						{
							x: o,
							y: t.top
						},
						{
							x: c,
							y: t.top
						},
						{
							x: c,
							y: t.bottom
						},
						{
							x: o,
							y: t.bottom
						}
					],
					side: n
				}), window.clearTimeout(s.pointerGraceTimerRef.value), s.pointerGraceTimerRef.value = window.setTimeout(() => s.onPointerGraceIntentChange(null), 300);
			} else {
				if (s.onTriggerLeave(e)) return;
				s.onPointerGraceIntentChange(null);
			}
		}
		async function p(e) {
			let a = s.searchRef.value !== "";
			n.disabled || a && e.key === " " || Nc[i.dir.value].includes(e.key) && (r.onOpenChange(!0), await t(), r.content.value?.focus(), e.preventDefault());
		}
		return (e, t) => (o(), P(_p, { "as-child": "" }, {
			default: u(() => [W(Op, I(n, {
				id: z(a).triggerId,
				ref: (e) => {
					e && z(a)?.onTriggerChange(e?.$el);
				},
				"aria-haspopup": "menu",
				"aria-expanded": z(r).open.value,
				"aria-controls": z(a).contentId,
				"data-state": z(Fc)(z(r).open.value),
				onClick: t[0] ||= async (e) => {
					n.disabled || e.defaultPrevented || (e.currentTarget?.focus(), z(r).open.value || z(r).onOpenChange(!0));
				},
				onPointermove: d,
				onPointerleave: f,
				onKeydown: p
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, [
				"id",
				"aria-expanded",
				"aria-controls",
				"data-state"
			])]),
			_: 3
		}));
	}
}), Qp = /* @__PURE__ */ U({
	__name: "ContextMenuCheckboxItem",
	props: {
		modelValue: {
			type: [Boolean, String],
			required: !1
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
	emits: ["select", "update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, i = es(t);
		return q(), (e, t) => (o(), P(z(Np), N(r({
			...n,
			...z(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [$p, em] = /* @__PURE__ */ K("ContextMenuRoot"), tm = /* @__PURE__ */ U({
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
		let n = e, r = t, { dir: i, modal: a, pressOpenDelay: s } = we(n);
		q();
		let c = $o(i), l = O(!1);
		return em({
			open: l,
			onOpenChange: (e) => {
				l.value = e;
			},
			dir: c,
			modal: a,
			triggerElement: O(),
			pressOpenDelay: s
		}), C(l, (e) => {
			r("update:open", e);
		}), (e, t) => (o(), P(z(wp), {
			open: l.value,
			"onUpdate:open": t[0] ||= (e) => l.value = e,
			dir: z(c),
			modal: z(a)
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"open",
			"dir",
			"modal"
		]));
	}
}), nm = /* @__PURE__ */ U({
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
		let n = Y(e, t);
		q();
		let r = $p(), i = O(!1);
		return (e, t) => (o(), P(z(Ip), I(z(n), {
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
				e.detail.originalEvent.button === 2 && e.target === z(r).triggerElement.value && e.preventDefault(), !e.defaultPrevented && !z(r).modal.value && (i.value = !0);
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), rm = /* @__PURE__ */ U({
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
		let n = e, i = es(t);
		return q(), (e, t) => (o(), P(z(kp), N(r({
			...n,
			...z(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), im = /* @__PURE__ */ U({
	__name: "ContextMenuItemIndicator",
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
		return q(), (e, n) => (o(), P(z(Mp), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), am = /* @__PURE__ */ U({
	__name: "ContextMenuLabel",
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
		return q(), (e, n) => (o(), P(z(Bp), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), om = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(Vp), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), sm = /* @__PURE__ */ U({
	__name: "ContextMenuRadioGroup",
	props: {
		modelValue: {
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
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, i = es(t);
		return q(), (e, t) => (o(), P(z(Wp), N(r({
			...n,
			...z(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), cm = /* @__PURE__ */ U({
	__name: "ContextMenuRadioItem",
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
		let n = e, i = es(t);
		return q(), (e, t) => (o(), P(z(Gp), N(r({
			...n,
			...z(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), lm = /* @__PURE__ */ U({
	__name: "ContextMenuSeparator",
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
		return q(), (e, n) => (o(), P(z(Kp), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), um = /* @__PURE__ */ U({
	__name: "ContextMenuSub",
	props: {
		defaultOpen: {
			type: Boolean,
			required: !1
		},
		open: {
			type: Boolean,
			required: !1,
			default: void 0
		}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		q();
		let i = Bn(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		});
		return (e, t) => (o(), P(z(Yp), {
			open: z(i),
			"onUpdate:open": t[0] ||= (e) => j(i) ? i.value = e : null
		}, {
			default: u(() => [v(e.$slots, "default", { open: z(i) })]),
			_: 3
		}, 8, ["open"]));
	}
}), dm = /* @__PURE__ */ U({
	__name: "ContextMenuSubContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		loop: {
			type: Boolean,
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
		let n = Y(e, t);
		return q(), (e, t) => (o(), P(z(Xp), I(z(n), { style: {
			"--reka-context-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
			"--reka-context-menu-content-available-width": "var(--reka-popper-available-width)",
			"--reka-context-menu-content-available-height": "var(--reka-popper-available-height)",
			"--reka-context-menu-trigger-width": "var(--reka-popper-anchor-width)",
			"--reka-context-menu-trigger-height": "var(--reka-popper-anchor-height)"
		} }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), fm = /* @__PURE__ */ U({
	__name: "ContextMenuSubTrigger",
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
		let t = e;
		return q(), (e, n) => (o(), P(z(Zp), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/ContextMenu/utils.js
function pm(e) {
	return e.pointerType !== "mouse";
}
//#endregion
//#region node_modules/reka-ui/dist/ContextMenu/ContextMenuTrigger.js
var mm = /* @__PURE__ */ U({
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
		let { disabled: n } = we(e), { forwardRef: r, currentElement: i } = q(), a = $p(), s = O({
			x: 0,
			y: 0
		}), c = R(() => ({ getBoundingClientRect: () => ({
			width: 0,
			height: 0,
			left: s.value.x,
			right: s.value.x,
			top: s.value.y,
			bottom: s.value.y,
			...s.value
		}) })), l = O(0);
		function d() {
			window.clearTimeout(l.value);
		}
		function f(e) {
			s.value = {
				x: e.clientX,
				y: e.clientY
			}, a.onOpenChange(!0);
		}
		async function m(e) {
			n.value || (await t(), e.defaultPrevented || (d(), f(e), e.preventDefault()));
		}
		async function h(e) {
			n.value || (await t(), pm(e) && !e.defaultPrevented && (d(), l.value = window.setTimeout(f, a.pressOpenDelay.value, e)));
		}
		async function g(e) {
			n.value || (await t(), pm(e) && !e.defaultPrevented && d());
		}
		return p(() => {
			i.value && (a.triggerElement.value = i.value);
		}), (e, t) => (o(), E(B, null, [W(z(_p), {
			as: "template",
			reference: c.value
		}, null, 8, ["reference"]), W(z(X), I({
			ref: z(r),
			as: e.as,
			"as-child": e.asChild,
			"data-state": z(a).open.value ? "open" : "closed",
			"data-disabled": z(n) ? "" : void 0,
			style: {
				WebkitTouchCallout: "none",
				pointerEvents: "auto"
			}
		}, e.$attrs, {
			onContextmenu: m,
			onPointerdown: h,
			onPointermove: g,
			onPointercancel: g,
			onPointerup: g
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, [
			"as",
			"as-child",
			"data-state",
			"data-disabled"
		])], 64));
	}
}), [hm, gm] = /* @__PURE__ */ K("PopoverRoot"), _m = /* @__PURE__ */ U({
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
		let n = e, r = t, { modal: i } = we(n), a = Bn(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		});
		return gm({
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
			triggerElement: O(),
			hasCustomAnchor: O(!1)
		}), (e, t) => (o(), P(z(Rl), null, {
			default: u(() => [v(e.$slots, "default", {
				open: z(a),
				close: () => a.value = !1
			})]),
			_: 3
		}));
	}
}), vm = /* @__PURE__ */ U({
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
		let n = e, r = t, i = J(G(n, "trapFocus", "disableOutsidePointerEvents")), { forwardRef: a } = q(), s = hm();
		return rs(), (e, t) => (o(), P(z(Dc), {
			"as-child": "",
			loop: "",
			trapped: e.trapFocus,
			onMountAutoFocus: t[5] ||= (e) => r("openAutoFocus", e),
			onUnmountAutoFocus: t[6] ||= (e) => r("closeAutoFocus", e)
		}, {
			default: u(() => [W(z(pc), {
				"as-child": "",
				"disable-outside-pointer-events": e.disableOutsidePointerEvents,
				onPointerDownOutside: t[0] ||= (e) => r("pointerDownOutside", e),
				onInteractOutside: t[1] ||= (e) => r("interactOutside", e),
				onEscapeKeyDown: t[2] ||= (e) => r("escapeKeyDown", e),
				onFocusOutside: t[3] ||= (e) => r("focusOutside", e),
				onDismiss: t[4] ||= (e) => z(s).onOpenChange(!1)
			}, {
				default: u(() => [W(z(ef), I(z(i), {
					id: z(s).contentId,
					ref: z(a),
					"data-state": z(s).open.value ? "open" : "closed",
					"aria-labelledby": z(s).triggerId,
					style: {
						"--reka-popover-content-transform-origin": "var(--reka-popper-transform-origin)",
						"--reka-popover-content-available-width": "var(--reka-popper-available-width)",
						"--reka-popover-content-available-height": "var(--reka-popper-available-height)",
						"--reka-popover-trigger-width": "var(--reka-popper-anchor-width)",
						"--reka-popover-trigger-height": "var(--reka-popper-anchor-height)"
					},
					role: "dialog"
				}), {
					default: u(() => [v(e.$slots, "default")]),
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
}), ym = /* @__PURE__ */ U({
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
		let n = e, r = t, i = hm(), a = O(!1);
		Lr(!0);
		let s = Y(n, r), { forwardRef: c, currentElement: l } = q();
		return Ss(l), (e, t) => (o(), P(vm, I(z(s), {
			ref: z(c),
			"trap-focus": z(i).open.value,
			"disable-outside-pointer-events": "",
			onCloseAutoFocus: t[0] ||= k((e) => {
				r("closeAutoFocus", e), a.value || z(i).triggerElement.value?.focus();
			}, ["prevent"]),
			onPointerDownOutside: t[1] ||= (e) => {
				r("pointerDownOutside", e);
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
				a.value = t.button === 2 || n;
			},
			onFocusOutside: t[2] ||= k(() => {}, ["prevent"])
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["trap-focus"]));
	}
}), bm = /* @__PURE__ */ U({
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
		let n = e, r = t, i = hm(), a = O(!1), s = O(!1), c = Y(n, r);
		return (e, t) => (o(), P(vm, I(z(c), {
			"trap-focus": !1,
			"disable-outside-pointer-events": !1,
			onCloseAutoFocus: t[0] ||= (e) => {
				r("closeAutoFocus", e), e.defaultPrevented || (a.value || z(i).triggerElement.value?.focus(), e.preventDefault()), a.value = !1, s.value = !1;
			},
			onInteractOutside: t[1] ||= async (e) => {
				r("interactOutside", e), e.defaultPrevented || (a.value = !0, e.detail.originalEvent.type === "pointerdown" && (s.value = !0));
				let t = e.target;
				z(i).triggerElement.value?.contains(t) && e.preventDefault(), e.detail.originalEvent.type === "focusin" && s.value && e.preventDefault();
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), xm = /* @__PURE__ */ U({
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
		let n = e, r = t, i = hm(), a = Y(n, r), { forwardRef: s } = q();
		return i.contentId ||= ws(void 0, "reka-popover-content"), (e, t) => (o(), P(z(Ps), { present: e.forceMount || z(i).open.value }, {
			default: u(() => [z(i).modal.value ? (o(), P(ym, I({ key: 0 }, z(a), { ref: z(s) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16)) : (o(), P(bm, I({ key: 1 }, z(a), { ref: z(s) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16))]),
			_: 3
		}, 8, ["present"]));
	}
}), Sm = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(Yc), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Cm = /* @__PURE__ */ U({
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
		let t = e, n = hm(), { forwardRef: r, currentElement: i } = q();
		return n.triggerId ||= ws(void 0, "reka-popover-trigger"), p(() => {
			n.triggerElement.value = i.value;
		}), (e, i) => (o(), P(De(z(n).hasCustomAnchor.value ? z(X) : z(zl)), { "as-child": "" }, {
			default: u(() => [W(z(X), {
				id: z(n).triggerId,
				ref: z(r),
				type: e.as === "button" ? "button" : void 0,
				"aria-haspopup": "dialog",
				"aria-expanded": z(n).open.value,
				"aria-controls": z(n).contentId,
				"data-state": z(n).open.value ? "open" : "closed",
				as: e.as,
				"as-child": t.asChild,
				onClick: z(n).onOpenToggle
			}, {
				default: u(() => [v(e.$slots, "default")]),
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
}), [wm, Tm] = /* @__PURE__ */ K("DropdownMenuRoot"), Em = /* @__PURE__ */ U({
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
		q();
		let i = Bn(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		}), a = O(), { modal: s, dir: c } = we(n), l = $o(c);
		return Tm({
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
			modal: s,
			dir: l
		}), (e, t) => (o(), P(z(wp), {
			open: z(i),
			"onUpdate:open": t[0] ||= (e) => j(i) ? i.value = e : null,
			dir: z(l),
			modal: z(s)
		}, {
			default: u(() => [v(e.$slots, "default", { open: z(i) })]),
			_: 3
		}, 8, [
			"open",
			"dir",
			"modal"
		]));
	}
}), Dm = /* @__PURE__ */ U({
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
		let n = Y(e, t);
		q();
		let r = wm(), i = O(!1);
		function a(e) {
			e.defaultPrevented || (i.value || setTimeout(() => {
				r.triggerElement.value?.focus();
			}, 0), i.value = !1, e.preventDefault());
		}
		return r.contentId ||= ws(void 0, "reka-dropdown-menu-content"), (e, t) => (o(), P(z(Ip), I(z(n), {
			id: z(r).contentId,
			"aria-labelledby": z(r)?.triggerId,
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
				(!z(r).modal.value || a) && (i.value = !0), z(r).triggerElement.value?.contains(e.target) && e.preventDefault();
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id", "aria-labelledby"]));
	}
}), Om = /* @__PURE__ */ U({
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
		let n = e, i = es(t);
		return q(), (e, t) => (o(), P(z(kp), N(r({
			...n,
			...z(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), km = /* @__PURE__ */ U({
	__name: "DropdownMenuLabel",
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
		return q(), (e, n) => (o(), P(z(Bp), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Am = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(Vp), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), jm = /* @__PURE__ */ U({
	__name: "DropdownMenuSeparator",
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
		return q(), (e, n) => (o(), P(z(Kp), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Mm = /* @__PURE__ */ U({
	__name: "DropdownMenuSub",
	props: {
		defaultOpen: {
			type: Boolean,
			required: !1
		},
		open: {
			type: Boolean,
			required: !1,
			default: void 0
		}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = e, r = Bn(n, "open", t, {
			passive: n.open === void 0,
			defaultValue: n.defaultOpen ?? !1
		});
		return q(), (e, t) => (o(), P(z(Yp), {
			open: z(r),
			"onUpdate:open": t[0] ||= (e) => j(r) ? r.value = e : null
		}, {
			default: u(() => [v(e.$slots, "default", { open: z(r) })]),
			_: 3
		}, 8, ["open"]));
	}
}), Nm = /* @__PURE__ */ U({
	__name: "DropdownMenuSubContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		loop: {
			type: Boolean,
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
		let n = Y(e, t);
		return q(), (e, t) => (o(), P(z(Xp), I(z(n), { style: {
			"--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
			"--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
			"--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
			"--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
			"--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
		} }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Pm = /* @__PURE__ */ U({
	__name: "DropdownMenuSubTrigger",
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
		let t = e;
		return q(), (e, n) => (o(), P(z(Zp), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Fm = /* @__PURE__ */ U({
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
		let n = e, r = wm(), { forwardRef: i, currentElement: a } = q();
		return p(() => {
			r.triggerElement = a;
		}), r.triggerId ||= ws(void 0, "reka-dropdown-menu-trigger"), (e, a) => (o(), P(z(_p), { "as-child": "" }, {
			default: u(() => [W(z(X), {
				id: z(r).triggerId,
				ref: z(i),
				type: e.as === "button" ? "button" : void 0,
				"as-child": n.asChild,
				as: e.as,
				"aria-haspopup": "menu",
				"aria-expanded": z(r).open.value,
				"aria-controls": z(r).open.value ? z(r).contentId : void 0,
				"data-disabled": e.disabled ? "" : void 0,
				disabled: e.disabled,
				"data-state": z(r).open.value ? "open" : "closed",
				onClick: a[0] ||= async (n) => {
					!e.disabled && n.button === 0 && n.ctrlKey === !1 && (z(r)?.onOpenToggle(), await t(), z(r).open.value && n.preventDefault());
				},
				onKeydown: a[1] ||= be((t) => {
					e.disabled || (["Enter", " "].includes(t.key) && z(r).onOpenToggle(), t.key === "ArrowDown" && z(r).onOpenChange(!0), [
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
				default: u(() => [v(e.$slots, "default")]),
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
}), [Im, Lm] = /* @__PURE__ */ K("HoverCardRoot"), Rm = /* @__PURE__ */ U({
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
		let n = e, r = t, { openDelay: i, closeDelay: a } = we(n);
		q();
		let s = Bn(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		}), c = O(0), l = O(0), d = O(!1), f = O(!1), p = O(!1), m = O();
		function h() {
			clearTimeout(l.value), c.value = window.setTimeout(() => s.value = !0, i.value);
		}
		function g() {
			clearTimeout(c.value), !d.value && !f.value && (l.value = window.setTimeout(() => s.value = !1, a.value));
		}
		function _() {
			s.value = !1;
		}
		return Lm({
			open: s,
			onOpenChange(e) {
				s.value = e;
			},
			onOpen: h,
			onClose: g,
			onDismiss: _,
			hasSelectionRef: d,
			isPointerDownOnContentRef: f,
			isPointerInTransitRef: p,
			triggerElement: m
		}), (e, t) => (o(), P(z(Rl), null, {
			default: u(() => [v(e.$slots, "default", { open: z(s) })]),
			_: 3
		}));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/HoverCard/utils.js
function zm(e) {
	return (t) => t.pointerType === "touch" ? void 0 : e();
}
function Bm(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
//#endregion
//#region node_modules/reka-ui/dist/HoverCard/HoverCardContentImpl.js
var Vm = /* @__PURE__ */ U({
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
	setup(e, { emit: n }) {
		let r = e, i = n, a = J(r), { forwardRef: c, currentElement: l } = q(), d = Im(), { isPointerInTransit: f, onPointerExit: h } = os(d.triggerElement, l);
		fn(d.isPointerInTransitRef, f, { direction: "rtl" }), h(() => {
			d.onClose();
		});
		let g = O(!1), _;
		s((e) => {
			if (g.value) {
				let t = document.body;
				_ = t.style.userSelect || t.style.webkitUserSelect, t.style.userSelect = "none", t.style.webkitUserSelect = "none", e(() => {
					t.style.userSelect = _, t.style.webkitUserSelect = _;
				});
			}
		});
		function y() {
			g.value = !1, d.isPointerDownOnContentRef.value = !1, t(() => {
				document.getSelection()?.toString() !== "" && (d.hasSelectionRef.value = !0);
			});
		}
		return p(() => {
			l.value && (document.addEventListener("pointerup", y), Bm(l.value).forEach((e) => e.setAttribute("tabindex", "-1"))), Sn(window, "scroll", (e) => {
				e.target?.contains(d.triggerElement.value) && d.onDismiss();
			}, { capture: !0 });
		}), m(() => {
			document.removeEventListener("pointerup", y), d.hasSelectionRef.value = !1, d.isPointerDownOnContentRef.value = !1;
		}), (e, t) => (o(), P(z(pc), {
			"as-child": "",
			"disable-outside-pointer-events": !1,
			onEscapeKeyDown: t[1] ||= (e) => i("escapeKeyDown", e),
			onPointerDownOutside: t[2] ||= (e) => i("pointerDownOutside", e),
			onFocusOutside: t[3] ||= k((e) => i("focusOutside", e), ["prevent"]),
			onDismiss: z(d).onDismiss
		}, {
			default: u(() => [W(z(ef), I({
				...z(a),
				...e.$attrs
			}, {
				ref: z(c),
				"data-state": z(d).open.value ? "open" : "closed",
				style: {
					userSelect: g.value ? "text" : void 0,
					WebkitUserSelect: g.value ? "text" : void 0,
					"--reka-hover-card-content-transform-origin": "var(--reka-popper-transform-origin)",
					"--reka-hover-card-content-available-width": "var(--reka-popper-available-width)",
					"--reka-hover-card-content-available-height": "var(--reka-popper-available-height)",
					"--reka-hover-card-trigger-width": "var(--reka-popper-anchor-width)",
					"--reka-hover-card-trigger-height": "var(--reka-popper-anchor-height)"
				},
				onPointerdown: t[0] ||= (e) => {
					e.currentTarget.contains(e.target) && (g.value = !0), z(d).hasSelectionRef.value = !1, z(d).isPointerDownOnContentRef.value = !0;
				}
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["data-state", "style"])]),
			_: 3
		}, 8, ["onDismiss"]));
	}
}), Hm = /* @__PURE__ */ U({
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
		let n = Y(e, t), { forwardRef: r } = q(), i = Im();
		return (e, t) => (o(), P(z(Ps), { present: e.forceMount || z(i).open.value }, {
			default: u(() => [W(Vm, I(z(n), {
				ref: z(r),
				onPointerenter: t[0] ||= (e) => z(zm)(z(i).onOpen)(e)
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16)]),
			_: 3
		}, 8, ["present"]));
	}
}), Um = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(Yc), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Wm = /* @__PURE__ */ U({
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
		let { forwardRef: t, currentElement: n } = q(), r = Im();
		r.triggerElement = n;
		function i() {
			setTimeout(() => {
				!r.isPointerInTransitRef.value && !r.open.value && r.onClose();
			}, 0);
		}
		return (e, n) => (o(), P(z(zl), {
			"as-child": "",
			reference: e.reference
		}, {
			default: u(() => [W(z(X), {
				ref: z(t),
				"as-child": e.asChild,
				as: e.as,
				"data-state": z(r).open.value ? "open" : "closed",
				"data-grace-area-trigger": "",
				onPointerenter: n[0] ||= (e) => z(zm)(z(r).onOpen)(e),
				onPointerleave: n[1] ||= (e) => z(zm)(i)(e),
				onFocus: n[2] ||= (e) => z(r).onOpen(),
				onBlur: n[3] ||= (e) => z(r).onClose()
			}, {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 8, [
				"as-child",
				"as",
				"data-state"
			])]),
			_: 3
		}, 8, ["reference"]));
	}
}), Gm = /* @__PURE__ */ U({
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
		return q(), (e, n) => (o(), P(z(X), I(t, { onMousedown: n[0] ||= (e) => {
			!e.defaultPrevented && e.detail > 1 && e.preventDefault();
		} }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Km = /* @__PURE__ */ U({
	__name: "MenubarCheckboxItem",
	props: {
		modelValue: {
			type: [Boolean, String],
			required: !1
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
	emits: ["select", "update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, i = es(t);
		return q(), (e, t) => (o(), P(z(Np), N(r({
			...n,
			...z(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [qm, Jm] = /* @__PURE__ */ K("MenubarRoot"), Ym = /* @__PURE__ */ U({
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
		let n = e, r = t, { forwardRef: i } = q(), { CollectionSlot: a } = ul({
			key: "Menubar",
			isProvider: !0
		}), s = Bn(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? "",
			passive: n.modelValue === void 0
		}), c = O(null), { dir: l, loop: d } = we(n), f = $o(l);
		return Jm({
			modelValue: s,
			dir: f,
			loop: d,
			onMenuOpen: (e) => {
				s.value = e, c.value = e;
			},
			onMenuClose: () => {
				s.value = "";
			},
			onMenuToggle: (e) => {
				s.value = s.value ? "" : e, c.value = e;
			}
		}), (e, t) => (o(), P(z(a), null, {
			default: u(() => [W(z(If), {
				"current-tab-stop-id": c.value,
				"onUpdate:currentTabStopId": t[0] ||= (e) => c.value = e,
				orientation: "horizontal",
				loop: z(d),
				dir: z(f),
				"as-child": ""
			}, {
				default: u(() => [W(z(X), {
					ref: z(i),
					role: "menubar"
				}, {
					default: u(() => [v(e.$slots, "default", { modelValue: z(s) })]),
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
}), [Xm, Zm] = /* @__PURE__ */ K("MenubarMenu"), Qm = /* @__PURE__ */ U({
	__name: "MenubarMenu",
	props: { value: {
		type: String,
		required: !1
	} },
	setup(e) {
		let t = ws(e.value), n = qm();
		q();
		let r = O(), i = O(!1), a = R(() => n.modelValue.value === t);
		return C(a, () => {
			a.value || (i.value = !1);
		}), Zm({
			value: t,
			triggerElement: r,
			triggerId: t,
			contentId: "",
			wasKeyboardTriggerOpenRef: i
		}), (e, t) => (o(), P(z(wp), {
			open: a.value,
			modal: !1,
			dir: z(n).dir.value,
			"onUpdate:open": t[0] ||= (e) => {
				e || z(n).onMenuClose();
			}
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["open", "dir"]));
	}
}), $m = /* @__PURE__ */ U({
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
		let n = Y(e, t);
		q();
		let r = qm(), i = Xm();
		i.contentId ||= ws(void 0, "reka-menubar-content");
		let { getItems: a } = ul({ key: "Menubar" }), s = O(!1);
		function c(e) {
			let t = e.target.hasAttribute("data-reka-menubar-subtrigger"), n = (r.dir.value === "rtl" ? "ArrowRight" : "ArrowLeft") === e.key;
			if (!n && t) return;
			let o = a().filter((e) => e.ref.dataset.disabled !== "").map((e) => e.ref.dataset.value);
			n && o.reverse();
			let s = o.indexOf(i.value);
			o = r.loop.value ? As(o, s + 1) : o.slice(s + 1);
			let [c] = o;
			c && r.onMenuOpen(c);
		}
		return (e, t) => (o(), P(z(Ip), I(z(n), {
			id: z(i).contentId,
			"data-reka-menubar-content": "",
			"aria-labelledby": z(i).triggerId,
			style: {
				"--reka-menubar-content-transform-origin": "var(--reka-popper-transform-origin)",
				"--reka-menubar-content-available-width": "var(--reka-popper-available-width)",
				"--reka-menubar-content-available-height": "var(--reka-popper-available-height)",
				"--reka-menubar-trigger-width": "var(--reka-popper-anchor-width)",
				"--reka-menubar-trigger-height": "var(--reka-popper-anchor-height)"
			},
			onCloseAutoFocus: t[0] ||= (e) => {
				!z(r).modelValue.value && !s.value && z(i).triggerElement.value?.focus(), s.value = !1, e.preventDefault();
			},
			onFocusOutside: t[1] ||= (e) => {
				let t = e.target;
				z(a)().filter((e) => e.ref.dataset.disabled !== "").some((e) => e.ref.contains(t)) && e.preventDefault();
			},
			onInteractOutside: t[2] ||= (e) => {
				s.value = !0;
			},
			onEntryFocus: t[3] ||= (e) => {
				z(i).wasKeyboardTriggerOpenRef.value || e.preventDefault();
			},
			onKeydown: be(c, ["arrow-right", "arrow-left"])
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id", "aria-labelledby"]));
	}
}), eh = /* @__PURE__ */ U({
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
		let n = e, i = es(t);
		return q(), (e, t) => (o(), P(z(kp), N(r({
			...n,
			...z(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), th = /* @__PURE__ */ U({
	__name: "MenubarItemIndicator",
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
		return q(), (e, n) => (o(), P(z(Mp), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), nh = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(Vp), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), rh = /* @__PURE__ */ U({
	__name: "MenubarRadioGroup",
	props: {
		modelValue: {
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
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, i = es(t);
		return q(), (e, t) => (o(), P(z(Wp), N(r({
			...n,
			...z(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), ih = /* @__PURE__ */ U({
	__name: "MenubarRadioItem",
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
		let n = Y(e, t);
		return q(), (e, t) => (o(), P(z(Gp), N(r(z(n))), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), ah = /* @__PURE__ */ U({
	__name: "MenubarSeparator",
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
		return q(), (e, n) => (o(), P(z(Kp), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), oh = /* @__PURE__ */ U({
	__name: "MenubarSub",
	props: {
		defaultOpen: {
			type: Boolean,
			required: !1
		},
		open: {
			type: Boolean,
			required: !1,
			default: void 0
		}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		q();
		let i = Bn(n, "open", r, {
			defaultValue: n.defaultOpen ?? !1,
			passive: n.open === void 0
		});
		return (e, t) => (o(), P(z(Yp), {
			open: z(i),
			"onUpdate:open": t[0] ||= (e) => j(i) ? i.value = e : null
		}, {
			default: u(() => [v(e.$slots, "default", { open: z(i) })]),
			_: 3
		}, 8, ["open"]));
	}
}), sh = /* @__PURE__ */ U({
	__name: "MenubarSubContent",
	props: {
		forceMount: {
			type: Boolean,
			required: !1
		},
		loop: {
			type: Boolean,
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
		let n = Y(e, t);
		q();
		let { getItems: r } = ul({ key: "Menubar" }), i = qm(), a = Xm();
		function s(e) {
			if (e.target.hasAttribute("data-reka-menubar-subtrigger")) return;
			let t = r().filter((e) => e.ref.dataset.disabled !== "").map((e) => e.ref.dataset.value), n = t.indexOf(a.value);
			t = i.loop.value ? As(t, n + 1) : t.slice(n + 1);
			let [o] = t;
			o && i.onMenuOpen(o);
		}
		return (e, t) => (o(), P(z(Xp), I(z(n), {
			"data-reka-menubar-content": "",
			style: {
				"--reka-menubar-content-transform-origin": "var(--reka-popper-transform-origin)",
				"--reka-menubar-content-available-width": "var(--reka-popper-available-width)",
				"--reka-menubar-content-available-height": "var(--reka-popper-available-height)",
				"--reka-menubar-trigger-width": "var(--reka-popper-anchor-width)",
				"--reka-menubar-trigger-height": "var(--reka-popper-anchor-height)"
			},
			onKeydown: be(s, ["arrow-right"])
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), ch = /* @__PURE__ */ U({
	__name: "MenubarSubTrigger",
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
		let t = e;
		return q(), (e, n) => (o(), P(z(Zp), I(t, { "data-reka-menubar-subtrigger": "" }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), lh = /* @__PURE__ */ U({
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
		let t = qm(), n = Xm(), { forwardRef: r, currentElement: i } = q(), { CollectionItem: a } = ul({ key: "Menubar" }), s = O(!1), c = R(() => t.modelValue.value === n.value);
		return p(() => {
			n.triggerElement = i;
		}), (e, l) => (o(), P(z(Lf), {
			"as-child": "",
			focusable: !e.disabled,
			"tab-stop-id": z(n).value
		}, {
			default: u(() => [W(z(a), null, {
				default: u(() => [W(z(_p), { "as-child": "" }, {
					default: u(() => [W(z(X), {
						id: z(n).triggerId,
						ref: z(r),
						as: e.as,
						"as-child": e.asChild,
						type: e.as === "button" ? "button" : void 0,
						role: "menuitem",
						"aria-haspopup": "menu",
						"aria-expanded": c.value,
						"aria-controls": c.value ? z(n).contentId : void 0,
						"data-highlighted": s.value ? "" : void 0,
						"data-state": c.value ? "open" : "closed",
						"data-disabled": e.disabled ? "" : void 0,
						disabled: e.disabled,
						"data-value": z(n).value,
						onPointerdown: l[0] ||= (r) => {
							!e.disabled && r.button === 0 && r.ctrlKey === !1 && (z(t).onMenuOpen(z(n).value), c.value || r.preventDefault());
						},
						onPointerenter: l[1] ||= () => {
							z(t).modelValue.value && !c.value && (z(t).onMenuOpen(z(n).value), z(i)?.focus());
						},
						onKeydown: l[2] ||= be((r) => {
							e.disabled || (["Enter", " "].includes(r.key) && z(t).onMenuToggle(z(n).value), r.key === "ArrowDown" && z(t).onMenuOpen(z(n).value), [
								"Enter",
								" ",
								"ArrowDown"
							].includes(r.key) && (z(n).wasKeyboardTriggerOpenRef.value = !0, r.preventDefault()));
						}, [
							"enter",
							"space",
							"arrow-down"
						]),
						onFocus: l[3] ||= (e) => s.value = !0,
						onBlur: l[4] ||= (e) => s.value = !1
					}, {
						default: u(() => [v(e.$slots, "default")]),
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
function uh(e) {
	return e ? "open" : "closed";
}
function dh(e, t) {
	return `${e}-trigger-${t}`;
}
function fh(e, t) {
	return `${e}-content-${t}`;
}
var ph = "navigationMenu.linkSelect", mh = "navigationMenu.rootContentDismiss";
function hh(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function gh(e) {
	let t = Sr();
	return e.some((e) => e === t ? !0 : (e.focus(), Sr() !== t));
}
function _h(e) {
	return e.forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	}), () => {
		e.forEach((e) => {
			let t = e.dataset.tabindex;
			e.setAttribute("tabindex", t);
		});
	};
}
function vh(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
//#endregion
//#region node_modules/reka-ui/dist/NavigationMenu/NavigationMenuRoot.js
var [yh, bh] = /* @__PURE__ */ K(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), xh = /* @__PURE__ */ U({
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
		let n = e, r = Bn(n, "modelValue", t, {
			defaultValue: n.defaultValue ?? "",
			passive: n.modelValue === void 0
		}), i = O(""), { forwardRef: a, currentElement: c } = q(), l = O(), d = O(), f = O(), { getItems: p, CollectionSlot: m } = ul({
			key: "NavigationMenu",
			isProvider: !0
		}), { delayDuration: h, skipDelayDuration: g, dir: _, disableClickTrigger: y, disableHoverTrigger: b, unmountOnHide: x } = we(n), S = $o(_), C = cn(!1, g), w = ln((e) => {
			typeof e == "string" && (i.value = r.value, r.value = e);
		}, R(() => r.value !== "" || C.value ? 150 : h.value));
		s(() => {
			r.value && (f.value = p().map((e) => e.ref).find((e) => e.id.includes(r.value)));
		}), Sn(c, mh, T), bh({
			isRootMenu: !0,
			modelValue: r,
			previousValue: i,
			baseId: ws(void 0, "reka-navigation-menu"),
			disableClickTrigger: y,
			disableHoverTrigger: b,
			dir: S,
			unmountOnHide: x,
			orientation: n.orientation,
			rootNavigationMenu: c,
			indicatorTrack: l,
			activeTrigger: f,
			onIndicatorTrackChange: (e) => {
				l.value = e;
			},
			viewport: d,
			onViewportChange: (e) => {
				d.value = e;
			},
			onTriggerEnter: (e) => {
				w(e);
			},
			onTriggerLeave: () => {
				C.value = !0, w("");
			},
			onContentEnter: () => {
				w();
			},
			onContentLeave: () => {
				n.disablePointerLeaveClose || w("");
			},
			onItemSelect: (e) => {
				i.value = r.value, r.value = e;
			},
			onItemDismiss: T
		});
		function T() {
			i.value = r.value, r.value = "";
		}
		return (e, t) => (o(), P(z(m), null, {
			default: u(() => [W(z(X), {
				ref: z(a),
				as: e.as,
				"as-child": e.asChild,
				"data-orientation": e.orientation,
				dir: z(S),
				"data-reka-navigation-menu": ""
			}, {
				default: u(() => [v(e.$slots, "default", { modelValue: z(r) })]),
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
}), [Sh, Ch] = /* @__PURE__ */ K("NavigationMenuItem"), wh = /* @__PURE__ */ U({
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
		q();
		let { getItems: n } = ul({ key: "NavigationMenu" }), r = yh(), i = ws(t.value), a = O(), s = O(), c = fh(r.baseId, i), l = () => ({}), d = O(!1);
		async function f(e = "start") {
			let t = document.getElementById(c);
			if (t) {
				l();
				let n = hh(t);
				n.length && gh(e === "start" ? n : n.reverse());
			}
		}
		function p() {
			let e = document.getElementById(c);
			if (e) {
				let t = hh(e);
				t.length && (l = _h(t));
			}
		}
		Ch({
			value: i,
			contentId: c,
			triggerRef: a,
			focusProxyRef: s,
			wasEscapeCloseRef: d,
			onEntryKeyDown: f,
			onFocusProxyEnter: f,
			onContentFocusOutside: p,
			onRootContentClose: p
		});
		function m() {
			r.onItemDismiss(), a.value?.focus();
		}
		function h(e) {
			let t = Sr();
			if (e.keyCode === 32 || e.key === "Enter") if (r.modelValue.value === i) {
				m(), e.preventDefault();
				return;
			} else {
				e.target.click(), e.preventDefault();
				return;
			}
			let a = n().filter((e) => e.ref.parentElement?.hasAttribute("data-menu-item")).map((e) => e.ref);
			if (!a.includes(t)) return;
			let o = Or(e, t, void 0, {
				itemsArray: a,
				loop: !1
			});
			o && o?.focus(), e.preventDefault(), e.stopPropagation();
		}
		return (e, t) => (o(), P(z(X), {
			"as-child": e.asChild,
			as: e.as,
			"data-menu-item": "",
			onKeydown: be(h, [
				"up",
				"down",
				"left",
				"right",
				"home",
				"end",
				"space"
			])
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["as-child", "as"]));
	}
}), Th = /* @__PURE__ */ U({
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
		let n = e, r = t, { getItems: i } = ul({ key: "NavigationMenu" }), { forwardRef: a, currentElement: c } = q(), l = yh(), d = Sh(), f = dh(l.baseId, d.value), p = fh(l.baseId, d.value), m = O(null), h = R(() => {
			let e = i().map((e) => e.ref.id.split("trigger-")[1]);
			l.dir.value === "rtl" && e.reverse();
			let t = e.indexOf(l.modelValue.value), n = e.indexOf(l.previousValue.value), r = d.value === l.modelValue.value, a = n === e.indexOf(d.value);
			if (!r && !a) return m.value;
			let o = (() => {
				if (t !== n) {
					if (r && n !== -1) return t > n ? "from-end" : "from-start";
					if (a && t !== -1) return t > n ? "to-start" : "to-end";
				}
				return null;
			})();
			return m.value = o, o;
		});
		function g(e) {
			if (r("focusOutside", e), r("interactOutside", e), e.detail.originalEvent.target.hasAttribute("data-navigation-menu-trigger") && e.preventDefault(), !e.defaultPrevented) {
				d.onContentFocusOutside();
				let t = e.target;
				l.rootNavigationMenu?.value?.contains(t) && e.preventDefault();
			}
		}
		function _(e) {
			if (r("pointerDownOutside", e), !e.defaultPrevented) {
				let t = e.target, n = i().some((e) => e.ref.contains(t)), r = l.isRootMenu && l.viewport.value?.contains(t);
				(n || r || !l.isRootMenu) && e.preventDefault();
			}
		}
		s((e) => {
			let t = c.value;
			if (l.isRootMenu && t) {
				let n = () => {
					l.onItemDismiss(), d.onRootContentClose(), t.contains(Sr()) && d.triggerRef.value?.focus();
				};
				t.addEventListener(mh, n), e(() => t.removeEventListener(mh, n));
			}
		});
		function y(e) {
			r("escapeKeyDown", e), e.defaultPrevented || (l.onItemDismiss(), d.triggerRef?.value?.focus(), d.wasEscapeCloseRef.value = !0);
		}
		function b(e) {
			if (e.target.closest("[data-reka-navigation-menu]") !== l.rootNavigationMenu.value) return;
			let t = e.altKey || e.ctrlKey || e.metaKey, n = e.key === "Tab" && !t, r = hh(e.currentTarget);
			if (n) {
				let t = Sr(), n = r.findIndex((e) => e === t);
				if (gh(e.shiftKey ? r.slice(0, n).reverse() : r.slice(n + 1, r.length))) e.preventDefault();
				else {
					d.focusProxyRef.value?.focus();
					return;
				}
			}
			Or(e, Sr(), void 0, {
				itemsArray: r,
				loop: !1,
				enableIgnoredElement: !0
			})?.focus();
		}
		function x() {
			let e = new Event(mh, {
				bubbles: !0,
				cancelable: !0
			});
			c.value?.dispatchEvent(e);
		}
		return (e, t) => (o(), P(z(pc), I({
			id: z(p),
			ref: z(a),
			"aria-labelledby": z(f),
			"data-motion": h.value,
			"data-state": z(uh)(z(l).modelValue.value === z(d).value),
			"data-orientation": z(l).orientation
		}, n, {
			onKeydown: b,
			onEscapeKeyDown: y,
			onPointerDownOutside: _,
			onFocusOutside: g,
			onDismiss: x
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, [
			"id",
			"aria-labelledby",
			"data-motion",
			"data-state",
			"data-orientation"
		]));
	}
}), Eh = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "forceMount"), r), { forwardRef: a } = q(), s = yh(), c = Sh(), l = R(() => c.value === s.modelValue.value), d = R(() => s.viewport.value && !s.modelValue.value && s.previousValue.value ? s.previousValue.value === c.value : !1);
		return (e, t) => (o(), P(ie, {
			to: z(Rt) && z(s).viewport.value ? z(s).viewport.value : "body",
			disabled: z(Rt) && z(s).viewport.value ? !z(s).viewport.value : !0
		}, [W(z(Ps), {
			present: e.forceMount || l.value || d.value,
			"force-mount": !z(s).unmountOnHide.value
		}, {
			default: u(({ present: n }) => [W(Th, I({
				ref: z(a),
				"data-state": z(uh)(l.value),
				style: { pointerEvents: !l.value && z(s).isRootMenu ? "none" : void 0 }
			}, {
				...e.$attrs,
				...z(i)
			}, {
				hidden: !n,
				onPointerenter: t[0] ||= (e) => z(s).onContentEnter(z(c).value),
				onPointerleave: t[1] ||= (e) => z(vh)(() => z(s).onContentLeave())(e),
				onPointerDownOutside: t[2] ||= (e) => r("pointerDownOutside", e),
				onFocusOutside: t[3] ||= (e) => r("focusOutside", e),
				onInteractOutside: t[4] ||= (e) => r("interactOutside", e)
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 2
			}, 1040, [
				"data-state",
				"style",
				"hidden"
			])]),
			_: 3
		}, 8, ["present", "force-mount"])], 8, ["to", "disabled"]));
	}
}), Dh = /* @__PURE__ */ U({
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
		let n = e, r = t, { CollectionItem: i } = ul({ key: "NavigationMenu" });
		q();
		async function a(e) {
			let t = new CustomEvent(ph, {
				bubbles: !0,
				cancelable: !0,
				detail: { originalEvent: e }
			});
			if (r("select", t), !t.defaultPrevented && !e.metaKey) {
				let t = new CustomEvent(mh, {
					bubbles: !0,
					cancelable: !0
				});
				e.target?.dispatchEvent(t);
			}
		}
		return (e, t) => (o(), P(z(i), null, {
			default: u(() => [W(z(X), {
				as: e.as,
				"data-active": e.active ? "" : void 0,
				"aria-current": e.active ? "page" : void 0,
				"as-child": n.asChild,
				onClick: a
			}, {
				default: u(() => [v(e.$slots, "default")]),
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
}), Oh = /* @__PURE__ */ U({
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
		let t = e, n = yh(), { forwardRef: r, currentElement: i } = q();
		return p(() => {
			n.onIndicatorTrackChange(i.value);
		}), (e, i) => (o(), P(z(X), {
			ref: z(r),
			style: { position: "relative" }
		}, {
			default: u(() => [W(z(X), I(e.$attrs, {
				"as-child": t.asChild,
				as: e.as,
				"data-orientation": z(n).orientation
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, [
				"as-child",
				"as",
				"data-orientation"
			])]),
			_: 3
		}, 512));
	}
}), kh = ["aria-owns"], Ah = /* @__PURE__ */ U({
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
		let t = e, n = yh(), r = Sh(), { CollectionItem: i } = ul({ key: "NavigationMenu" }), { forwardRef: a, currentElement: s } = q(), c = O(""), l = O(""), d = cn(!1, 300), f = O(!1), m = R(() => r.value === n.modelValue.value);
		p(() => {
			r.triggerRef = s, c.value = dh(n.baseId, r.value), l.value = fh(n.baseId, r.value);
		});
		function h() {
			n.disableHoverTrigger.value || (f.value = !1, r.wasEscapeCloseRef.value = !1);
		}
		function g(e) {
			if (!n.disableHoverTrigger.value && e.pointerType === "mouse") {
				if (t.disabled || f.value || r.wasEscapeCloseRef.value || d.value) return;
				n.onTriggerEnter(r.value), d.value = !0;
			}
		}
		function _(e) {
			if (!n.disableHoverTrigger.value && e.pointerType === "mouse") {
				if (t.disabled) return;
				n.onTriggerLeave(), d.value = !1;
			}
		}
		function y(e) {
			(!("pointerType" in e) || e.pointerType === "mouse") && n.disableClickTrigger.value || d.value || (m.value ? n.onItemSelect("") : n.onItemSelect(r.value), f.value = m.value);
		}
		function b(e) {
			let t = {
				horizontal: "ArrowDown",
				vertical: n.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight"
			}[n.orientation];
			m.value && e.key === t && (r.onEntryKeyDown(), e.preventDefault(), e.stopPropagation());
		}
		function x(e) {
			e && (r.focusProxyRef.value = xn(e));
		}
		function S(e) {
			let t = document.getElementById(r.contentId), n = e.relatedTarget, i = n === s.value, a = t?.contains(n);
			(i || !a) && r.onFocusProxyEnter(i ? "start" : "end");
		}
		return (e, r) => (o(), E(B, null, [W(z(i), null, {
			default: u(() => [W(z(X), I({
				id: c.value,
				ref: z(a),
				disabled: e.disabled,
				"data-disabled": e.disabled ? "" : void 0,
				"data-state": z(uh)(m.value),
				"data-navigation-menu-trigger": "",
				"aria-expanded": m.value,
				"aria-controls": l.value,
				"as-child": t.asChild,
				as: e.as
			}, e.$attrs, {
				onPointerenter: h,
				onPointermove: g,
				onPointerleave: _,
				onClick: y,
				onKeydown: b
			}), {
				default: u(() => [v(e.$slots, "default")]),
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
		}), m.value ? (o(), E(B, { key: 0 }, [W(z(dl), {
			ref: x,
			"aria-hidden": "true",
			tabindex: 0,
			onFocus: S
		}), z(n).viewport ? (o(), E("span", {
			key: 0,
			"aria-owns": l.value
		}, null, 8, kh)) : M("v-if", !0)], 64)) : M("v-if", !0)], 64));
	}
}), jh = /* @__PURE__ */ U({
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
		let n = e, { forwardRef: r, currentElement: i } = q(), a = yh(), { activeTrigger: s, rootNavigationMenu: c, modelValue: l } = a, d = O(), f = O(), p = R(() => !!a.modelValue.value);
		C(i, () => {
			a.onViewportChange(i.value);
		});
		let m = O();
		C([l, p], () => {
			t(() => {
				i.value && requestAnimationFrame(() => {
					m.value = i.value?.querySelector("[data-state=open]");
				});
			});
		}, { immediate: !0 });
		function h() {
			if (m.value && s.value && c.value) {
				let e = document.documentElement.offsetWidth, t = document.documentElement.offsetHeight, r = c.value.getBoundingClientRect(), i = s.value.getBoundingClientRect(), { offsetWidth: a, offsetHeight: o } = m.value, l = i.left - r.left, u = i.top - r.top, d = null, p = null;
				switch (n.align) {
					case "start":
						d = l, p = u;
						break;
					case "end":
						d = l - a + i.width, p = u - o + i.height;
						break;
					default: d = l - a / 2 + i.width / 2, p = u - o / 2 + i.height / 2;
				}
				d + r.left < 10 && (d = 10 - r.left);
				let h = d + r.left + a;
				h > e - 10 && (d -= h - e + 10, d < 10 - r.left && (d = 10 - r.left)), p + r.top < 10 && (p = 10 - r.top);
				let g = p + r.top + o;
				g > t - 10 && (p -= g - t + 10, p < 10 - r.top && (p = 10 - r.top)), d = Math.round(d), p = Math.round(p), f.value = {
					left: d,
					top: p
				};
			}
		}
		return Fn(m, () => {
			m.value && (d.value = {
				width: m.value.offsetWidth,
				height: m.value.offsetHeight
			}, h());
		}), Fn([globalThis.document?.body, c], () => {
			h();
		}), (e, t) => (o(), P(z(Ps), {
			present: e.forceMount || p.value,
			"force-mount": !z(a).unmountOnHide.value,
			onAfterLeave: t[2] ||= () => {
				d.value = void 0, f.value = void 0;
			}
		}, {
			default: u(({ present: n }) => [W(z(X), I(e.$attrs, {
				ref: z(r),
				as: e.as,
				"as-child": e.asChild,
				"data-state": z(uh)(p.value),
				"data-orientation": z(a).orientation,
				style: {
					pointerEvents: !p.value && z(a).isRootMenu ? "none" : void 0,
					"--reka-navigation-menu-viewport-width": d.value ? `${d.value?.width}px` : void 0,
					"--reka-navigation-menu-viewport-height": d.value ? `${d.value?.height}px` : void 0,
					"--reka-navigation-menu-viewport-left": f.value ? `${f.value?.left}px` : void 0,
					"--reka-navigation-menu-viewport-top": f.value ? `${f.value?.top}px` : void 0
				},
				hidden: !n,
				onPointerenter: t[0] ||= (e) => z(a).onContentEnter(z(a).modelValue.value),
				onPointerleave: t[1] ||= (e) => z(vh)(() => z(a).onContentLeave())(e)
			}), {
				default: u(() => [v(e.$slots, "default")]),
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
}), Mh = /* @__PURE__ */ new Map(), Nh = !1;
try {
	Nh = new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay === "exceptZero";
} catch {}
var Ph = !1;
try {
	Ph = new Intl.NumberFormat("de-DE", {
		style: "unit",
		unit: "degree"
	}).resolvedOptions().style === "unit";
} catch {}
var Fh = { degree: { narrow: {
	default: "°",
	"ja-JP": " 度",
	"zh-TW": "度",
	"sl-SI": " °"
} } }, Ih = class {
	constructor(e, t = {}) {
		this.numberFormatter = Lh(e, t), this.options = t;
	}
	format(e) {
		let t = "";
		if (t = !Nh && this.options.signDisplay != null ? Rh(this.numberFormatter, this.options.signDisplay, e) : this.numberFormatter.format(e), this.options.style === "unit" && !Ph) {
			let { unit: e, unitDisplay: n = "short", locale: r } = this.resolvedOptions();
			if (!e) return t;
			let i = Fh[e]?.[n];
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
		return !Nh && this.options.signDisplay != null && (e = {
			...e,
			signDisplay: this.options.signDisplay
		}), !Ph && this.options.style === "unit" && (e = {
			...e,
			style: "unit",
			unit: this.options.unit,
			unitDisplay: this.options.unitDisplay
		}), e;
	}
};
function Lh(e, t = {}) {
	let { numberingSystem: n } = t;
	if (n && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), e += `-nu-${n}`), t.style === "unit" && !Ph) {
		let { unit: e, unitDisplay: n = "short" } = t;
		if (!e) throw Error("unit option must be provided with style: \"unit\"");
		if (!Fh[e]?.[n]) throw Error(`Unsupported unit ${e} with unitDisplay = ${n}`);
		t = {
			...t,
			style: "decimal"
		};
	}
	let r = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (Mh.has(r)) return Mh.get(r);
	let i = new Intl.NumberFormat(e, t);
	return Mh.set(r, i), i;
}
function Rh(e, t, n) {
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
var zh = /* @__PURE__ */ RegExp("^.*\\(.*\\).*$"), Bh = [
	"latn",
	"arab",
	"hanidec",
	"deva",
	"beng",
	"fullwide"
], Vh = class {
	constructor(e, t = {}) {
		this.locale = e, this.options = t;
	}
	parse(e) {
		return Uh(this.locale, this.options, e).parse(e);
	}
	isValidPartialNumber(e, t, n) {
		return Uh(this.locale, this.options, e).isValidPartialNumber(e, t, n);
	}
	getNumberingSystem(e) {
		return Uh(this.locale, this.options, e).options.numberingSystem;
	}
}, Hh = /* @__PURE__ */ new Map();
function Uh(e, t, n) {
	let r = Wh(e, t);
	if (!e.includes("-nu-") && !r.isValidPartialNumber(n)) {
		for (let i of Bh) if (i !== r.options.numberingSystem) {
			let r = Wh(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + i, t);
			if (r.isValidPartialNumber(n)) return r;
		}
	}
	return r;
}
function Wh(e, t) {
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ""), r = Hh.get(n);
	return r || (r = new Gh(e, t), Hh.set(n, r)), r;
}
var Gh = class {
	constructor(e, t = {}) {
		this.locale = e, t.roundingIncrement !== 1 && t.roundingIncrement != null && (t.maximumFractionDigits == null && t.minimumFractionDigits == null ? (t.maximumFractionDigits = 0, t.minimumFractionDigits = 0) : t.maximumFractionDigits == null ? t.maximumFractionDigits = t.minimumFractionDigits : t.minimumFractionDigits ??= t.maximumFractionDigits), this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = Jh(e, this.formatter, this.options, t), this.options.style === "percent" && ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
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
			return new Vh(this.locale, e).parse(new Ih(this.locale, e).format(r));
		}
		return this.options.currencySign === "accounting" && zh.test(e) && (r = -1 * r), r;
	}
	sanitize(e) {
		let t = this.formatter.resolvedOptions().useGrouping;
		return this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((t) => t.unit === e) ? this.symbols.noNumeralUnits.find((t) => t.unit === e).value.toString() : (e = e.replace(this.symbols.literals, ""), this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)), this.options.numberingSystem === "arab" && (this.symbols.decimal && (e = Yh(e, ",", this.symbols.decimal), e = Yh(e, "،", this.symbols.decimal)), this.symbols.group && t && (e = Yh(e, ".", this.symbols.group))), this.symbols.group === "’" && e.includes("'") && t && (e = Yh(e, "'", this.symbols.group)), this.options.locale === "fr-FR" && this.symbols.group && t && (e = Yh(e, " ", this.symbols.group), e = Yh(e, /\u00A0/g, this.symbols.group)), e);
	}
	isValidPartialNumber(e, t = -Infinity, n = Infinity) {
		let r = this.formatter.resolvedOptions().useGrouping;
		return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && n > 0 && (e = e.slice(this.symbols.plusSign.length)), this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && r && (e = Yh(e, this.symbols.group, "")), e = e.replace(this.symbols.numeral, ""), this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")), e.length === 0);
	}
}, Kh = new Set([
	"decimal",
	"fraction",
	"integer",
	"minusSign",
	"plusSign",
	"group"
]), qh = [
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
function Jh(e, t, n, r) {
	let i = new Intl.NumberFormat(e, {
		...n,
		minimumSignificantDigits: 1,
		maximumSignificantDigits: 21,
		roundingIncrement: 1,
		roundingPriority: "auto",
		roundingMode: "halfExpand",
		useGrouping: !0
	}), a = i.formatToParts(-10000.111), o = i.formatToParts(10000.111), s = qh.map((e) => i.formatToParts(e)), c = s.map((e, t) => {
		let n = e.find((e) => e.type === "unit");
		return n && !e.some((e) => e.type === "integer" || e.type === "fraction") ? {
			unit: n.value,
			value: qh[t]
		} : null;
	}).filter((e) => !!e), l = a.find((e) => e.type === "minusSign")?.value ?? "-", u = o.find((e) => e.type === "plusSign")?.value;
	!u && (r?.signDisplay === "exceptZero" || r?.signDisplay === "always") && (u = "+");
	let d = new Intl.NumberFormat(e, {
		...n,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).formatToParts(.001).find((e) => e.type === "decimal")?.value, f = a.find((e) => e.type === "group")?.value, p = a.filter((e) => !Kh.has(e.type)).map((e) => Xh(e.value)), m = s.flatMap((e) => e.filter((e) => !Kh.has(e.type)).map((e) => Xh(e.value))), h = [...new Set([...p, ...m])].sort((e, t) => t.length - e.length), g = h.length === 0 ? /* @__PURE__ */ RegExp("\\p{White_Space}|\\p{Cf}", "gu") : RegExp(`${h.join("|")}|\\p{White_Space}|\\p{Cf}`, "gu"), _ = [...new Intl.NumberFormat(n.locale, { useGrouping: !1 }).format(9876543210)].reverse(), v = new Map(_.map((e, t) => [e, t])), y = RegExp(`[${_.join("")}]`, "g");
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
function Yh(e, t, n) {
	return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function Xh(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
//#endregion
//#region node_modules/reka-ui/dist/NumberField/utils.js
function Zh(e) {
	let { disabled: t } = e, n = O(), r = Mt(), i = () => window.clearTimeout(n.value), a = (e) => {
		i(), !t.value && (r.trigger(), n.value = window.setTimeout(() => {
			a(60);
		}, e));
	}, o = () => {
		a(400);
	}, s = () => {
		i();
	}, c = O(!1), l = R(() => xn(e.target)), u = (e) => {
		e.button !== 0 || c.value || (e.preventDefault(), c.value = !0, o());
	}, d = () => {
		c.value = !1, s();
	};
	return Rt && (Sn(l || window, "pointerdown", u), Sn(window, "pointerup", d), Sn(window, "pointercancel", d)), {
		isPressed: c,
		onTrigger: r.on
	};
}
function Qh(e, t = O({})) {
	return sn(() => new Ih(e.value, t.value));
}
function $h(e, t = O({})) {
	return sn(() => new Vh(e.value, t.value));
}
function eg(e, t, n) {
	let r = e === "+" ? t + n : t - n;
	if (t % 1 != 0 || n % 1 != 0) {
		let i = t.toString().split("."), a = n.toString().split("."), o = i[1] && i[1].length || 0, s = a[1] && a[1].length || 0, c = 10 ** Math.max(o, s);
		t = Math.round(t * c), n = Math.round(n * c), r = e === "+" ? t + n : t - n, r /= c;
	}
	return r;
}
//#endregion
//#region node_modules/reka-ui/dist/NumberField/NumberFieldRoot.js
var [tg, ng] = /* @__PURE__ */ K("NumberFieldRoot"), rg = /* @__PURE__ */ U({
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
		let n = e, r = t, { disabled: i, readonly: a, disableWheelChange: s, invertWheelChange: c, min: l, max: d, step: f, stepSnapping: p, formatOptions: m, id: h, locale: g } = we(n), _ = Bn(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: n.modelValue === void 0
		}), { primitiveElement: y, currentElement: b } = Ls(), x = Es(g), S = as(b), C = O(), w = R(() => !wr(_.value) && (oe(_.value) === l.value || l.value && !isNaN(_.value) ? eg("-", _.value, f.value) < l.value : !1)), T = R(() => !wr(_.value) && (oe(_.value) === d.value || d.value && !isNaN(_.value) ? eg("+", _.value, f.value) > d.value : !1));
		function ee(e, t = 1) {
			if (n.focusOnChange && C.value?.focus(), n.disabled || n.readonly) return;
			let r = k.parse(C.value?.value ?? "");
			isNaN(r) ? _.value = l.value ?? 0 : e === "increase" ? _.value = oe(r + (f.value ?? 1) * t) : _.value = oe(r - (f.value ?? 1) * t);
		}
		function E(e = 1) {
			ee("increase", e);
		}
		function D(e = 1) {
			ee("decrease", e);
		}
		function te(e) {
			e === "min" && l.value !== void 0 ? _.value = oe(l.value) : e === "max" && d.value !== void 0 && (_.value = oe(d.value));
		}
		let ne = Qh(x, m), k = $h(x, m), re = R(() => ne.resolvedOptions().maximumFractionDigits > 0 ? "decimal" : "numeric"), ie = Qh(x, m), A = R(() => wr(_.value) || isNaN(_.value) ? "" : ie.format(_.value));
		function j(e) {
			return k.isValidPartialNumber(e, l.value, d.value);
		}
		function ae(e) {
			C.value && (C.value.value = e);
		}
		function oe(e) {
			let t;
			return t = f.value === void 0 || isNaN(f.value) || !p.value ? yr(e, l.value, d.value) : xr(e, l.value, d.value, f.value), t = k.parse(ne.format(t)), t;
		}
		function N(e) {
			let t = k.parse(e);
			return _.value = isNaN(t) ? void 0 : oe(t), e.length ? ae(A.value) : ae(e);
		}
		return ng({
			modelValue: _,
			handleDecrease: D,
			handleIncrease: E,
			handleMinMaxValue: te,
			inputMode: re,
			inputEl: C,
			onInputElement: (e) => C.value = e,
			textValue: A,
			readonly: a,
			validate: j,
			applyInputValue: N,
			disabled: i,
			disableWheelChange: s,
			invertWheelChange: c,
			max: d,
			min: l,
			isDecreaseDisabled: w,
			isIncreaseDisabled: T,
			id: h
		}), (e, t) => (o(), P(z(X), I(e.$attrs, {
			ref_key: "primitiveElement",
			ref: y,
			role: "group",
			as: e.as,
			"as-child": e.asChild,
			"data-disabled": z(i) ? "" : void 0,
			"data-readonly": z(a) ? "" : void 0
		}), {
			default: u(() => [v(e.$slots, "default", {
				modelValue: z(_),
				textValue: A.value,
				readonly: z(a)
			}), z(S) && e.name ? (o(), P(z(pl), {
				key: 0,
				type: "text",
				value: z(_),
				name: e.name,
				disabled: z(i),
				readonly: z(a),
				required: e.required
			}, null, 8, [
				"value",
				"name",
				"disabled",
				"readonly",
				"required"
			])) : M("v-if", !0)]),
			_: 3
		}, 16, [
			"as",
			"as-child",
			"data-disabled",
			"data-readonly"
		]));
	}
}), ig = /* @__PURE__ */ U({
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
		let t = e, n = tg(), r = R(() => n.disabled?.value || n.readonly.value || t.disabled || n.isDecreaseDisabled.value), { primitiveElement: i, currentElement: a } = Ls(), { isPressed: s, onTrigger: c } = Zh({
			target: a,
			disabled: r
		});
		return c(() => {
			n.handleDecrease();
		}), (e, n) => (o(), P(z(X), I(t, {
			ref_key: "primitiveElement",
			ref: i,
			tabindex: "-1",
			"aria-label": "Decrease",
			type: e.as === "button" ? "button" : void 0,
			style: { userSelect: z(s) ? "none" : void 0 },
			disabled: r.value ? "" : void 0,
			"data-disabled": r.value ? "" : void 0,
			"data-pressed": z(s) ? "true" : void 0,
			onContextmenu: n[0] ||= k(() => {}, ["prevent"])
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, [
			"type",
			"style",
			"disabled",
			"data-disabled",
			"data-pressed"
		]));
	}
}), ag = /* @__PURE__ */ U({
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
		let t = e, n = tg(), r = R(() => n.disabled?.value || n.readonly.value || t.disabled || n.isIncreaseDisabled.value), { primitiveElement: i, currentElement: a } = Ls(), { isPressed: s, onTrigger: c } = Zh({
			target: a,
			disabled: r
		});
		return c(() => {
			n.handleIncrease();
		}), (e, n) => (o(), P(z(X), I(t, {
			ref_key: "primitiveElement",
			ref: i,
			tabindex: "-1",
			"aria-label": "Increase",
			type: e.as === "button" ? "button" : void 0,
			style: { userSelect: z(s) ? "none" : void 0 },
			disabled: r.value ? "" : void 0,
			"data-disabled": r.value ? "" : void 0,
			"data-pressed": z(s) ? "true" : void 0,
			onContextmenu: n[0] ||= k(() => {}, ["prevent"])
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, [
			"type",
			"style",
			"disabled",
			"data-disabled",
			"data-pressed"
		]));
	}
}), og = /* @__PURE__ */ U({
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
		let t = e, { primitiveElement: n, currentElement: r } = Ls(), i = tg();
		function a(e) {
			i.disableWheelChange.value || e.target === Sr() && (Math.abs(e.deltaY) <= Math.abs(e.deltaX) || (e.preventDefault(), e.deltaY > 0 ? i.invertWheelChange.value ? i.handleDecrease() : i.handleIncrease() : e.deltaY < 0 && (i.invertWheelChange.value ? i.handleIncrease() : i.handleDecrease())));
		}
		p(() => {
			i.onInputElement(r.value);
		});
		let s = O(i.textValue.value);
		C(() => i.textValue.value, () => {
			s.value = i.textValue.value;
		}, {
			immediate: !0,
			deep: !0
		});
		function c() {
			requestAnimationFrame(() => {
				s.value = i.textValue.value;
			});
		}
		return (e, r) => (o(), P(z(X), I(t, {
			id: z(i).id.value,
			ref_key: "primitiveElement",
			ref: n,
			value: s.value,
			role: "spinbutton",
			type: "text",
			tabindex: "0",
			inputmode: z(i).inputMode.value,
			disabled: z(i).disabled.value ? "" : void 0,
			"data-disabled": z(i).disabled.value ? "" : void 0,
			readonly: z(i).readonly.value ? "" : void 0,
			"data-readonly": z(i).readonly.value ? "" : void 0,
			autocomplete: "off",
			autocorrect: "off",
			spellcheck: "false",
			"aria-roledescription": "Number field",
			"aria-valuenow": z(i).modelValue.value,
			"aria-valuemin": z(i).min.value,
			"aria-valuemax": z(i).max.value,
			onKeydown: [
				r[0] ||= be(k((e) => z(i).handleIncrease(), ["prevent"]), ["up"]),
				r[1] ||= be(k((e) => z(i).handleDecrease(), ["prevent"]), ["down"]),
				r[2] ||= be(k((e) => z(i).handleIncrease(10), ["prevent"]), ["page-up"]),
				r[3] ||= be(k((e) => z(i).handleDecrease(10), ["prevent"]), ["page-down"]),
				r[4] ||= be(k((e) => z(i).handleMinMaxValue("min"), ["prevent"]), ["home"]),
				r[5] ||= be(k((e) => z(i).handleMinMaxValue("max"), ["prevent"]), ["end"]),
				r[8] ||= be((e) => z(i).applyInputValue(e.target?.value), ["enter"])
			],
			onWheel: a,
			onBeforeinput: r[6] ||= (e) => {
				let t = e.target, n = t.value.slice(0, t.selectionStart ?? void 0) + (e.data ?? "") + t.value.slice(t.selectionEnd ?? void 0);
				z(i).validate(n) || e.preventDefault();
			},
			onInput: r[7] ||= (e) => {
				s.value = e.target.value;
			},
			onChange: c,
			onBlur: r[9] ||= (e) => z(i).applyInputValue(e.target?.value)
		}), {
			default: u(() => [v(e.$slots, "default")]),
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
}), sg = /* @__PURE__ */ U({
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
		return q(), (e, n) => (o(), P(z(X), I(t, { "data-type": "ellipsis" }), {
			default: u(() => [v(e.$slots, "default", {}, () => [n[0] ||= V("…")])]),
			_: 3
		}, 16));
	}
}), [cg, lg] = /* @__PURE__ */ K("PaginationRoot"), ug = /* @__PURE__ */ U({
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
		let n = e, r = t, { siblingCount: i, disabled: a, showEdges: s } = we(n);
		q();
		let c = Bn(n, "page", r, {
			defaultValue: n.defaultPage,
			passive: n.page === void 0
		}), l = R(() => Math.max(1, Math.ceil(n.total / (n.itemsPerPage || 1))));
		return lg({
			page: c,
			onPageChange(e) {
				c.value = e;
			},
			pageCount: l,
			siblingCount: i,
			disabled: a,
			showEdges: s
		}), (e, t) => (o(), P(z(X), {
			as: e.as,
			"as-child": e.asChild
		}, {
			default: u(() => [v(e.$slots, "default", {
				page: z(c),
				pageCount: l.value
			})]),
			_: 3
		}, 8, ["as", "as-child"]));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Pagination/utils.js
function dg(e, t) {
	let n = t - e + 1;
	return Array.from({ length: n }, (t, n) => n + e);
}
function fg(e) {
	return e.map((e) => typeof e == "number" ? {
		type: "page",
		value: e
	} : { type: "ellipsis" });
}
var pg = "ellipsis";
function mg(e, t, n, r) {
	let i = t, a = Math.max(e - n, 1), o = Math.min(e + n, i);
	if (r) {
		let e = Math.min(2 * n + 5, t) - 2, r = a > 3 && Math.abs(i - e - 1 + 1) > 2 && Math.abs(a - 1) > 2, s = o < i - 2 && Math.abs(i - e) > 2 && Math.abs(i - o) > 2;
		return !r && s ? [
			...dg(1, e),
			pg,
			i
		] : r && !s ? [
			1,
			pg,
			...dg(i - e + 1, i)
		] : r && s ? [
			1,
			pg,
			...dg(a, o),
			pg,
			i
		] : dg(1, i);
	} else {
		let r = n * 2 + 1;
		return t < r ? dg(1, i) : e <= n + 1 ? dg(1, r) : t - e <= n ? dg(t - r + 1, i) : dg(a, o);
	}
}
//#endregion
//#region node_modules/reka-ui/dist/Pagination/PaginationList.js
var hg = /* @__PURE__ */ U({
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
		q();
		let n = cg(), i = R(() => fg(mg(n.page.value, n.pageCount.value, n.siblingCount.value, n.showEdges.value)));
		return (e, n) => (o(), P(z(X), N(r(t)), {
			default: u(() => [v(e.$slots, "default", { items: i.value })]),
			_: 3
		}, 16));
	}
}), gg = /* @__PURE__ */ U({
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
		q();
		let n = cg(), r = R(() => n.page.value === t.value), i = R(() => n.disabled.value);
		return (e, a) => (o(), P(z(X), I(t, {
			"data-type": "page",
			"aria-label": `Page ${e.value}`,
			"aria-current": r.value ? "page" : void 0,
			"data-selected": r.value ? "true" : void 0,
			disabled: i.value,
			type: e.as === "button" ? "button" : void 0,
			onClick: a[0] ||= (t) => !i.value && z(n).onPageChange(e.value)
		}), {
			default: u(() => [v(e.$slots, "default", {}, () => [V(H(e.value), 1)])]),
			_: 3
		}, 16, [
			"aria-label",
			"aria-current",
			"data-selected",
			"disabled",
			"type"
		]));
	}
}), _g = /* @__PURE__ */ U({
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
		q();
		let n = cg(), r = R(() => n.page.value === n.pageCount.value || n.disabled.value);
		return (e, i) => (o(), P(z(X), I(t, {
			"aria-label": "Next Page",
			type: e.as === "button" ? "button" : void 0,
			disabled: r.value,
			onClick: i[0] ||= (e) => !r.value && z(n).onPageChange(z(n).page.value + 1)
		}), {
			default: u(() => [v(e.$slots, "default", {}, () => [i[1] ||= V("Next page")])]),
			_: 3
		}, 16, ["type", "disabled"]));
	}
}), vg = /* @__PURE__ */ U({
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
		q();
		let n = cg(), r = R(() => n.page.value === 1 || n.disabled.value);
		return (e, i) => (o(), P(z(X), I(t, {
			"aria-label": "Previous Page",
			type: e.as === "button" ? "button" : void 0,
			disabled: r.value,
			onClick: i[0] ||= (e) => !r.value && z(n).onPageChange(z(n).page.value - 1)
		}), {
			default: u(() => [v(e.$slots, "default", {}, () => [i[1] ||= V("Prev page")])]),
			_: 3
		}, 16, ["type", "disabled"]));
	}
}), [yg, bg] = /* @__PURE__ */ K("PinInputRoot"), xg = /* @__PURE__ */ U({
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
		let n = e, r = t, { mask: i, otp: a, placeholder: s, type: c, disabled: l, dir: d } = we(n), { forwardRef: f } = q(), p = $o(d), m = Bn(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? [],
			passive: !0,
			deep: !0
		}), h = R(() => Array.isArray(m.value) ? [...m.value] : []), g = O(/* @__PURE__ */ new Set());
		function _(e) {
			g.value.add(e);
		}
		let y = R(() => n.type === "number"), b = R(() => h.value.filter((e) => !!e || y.value && e === 0).length === g.value.size);
		return C(m, () => {
			b.value && r("complete", m.value);
		}, { deep: !0 }), bg({
			modelValue: m,
			currentModelValue: h,
			mask: i,
			otp: a,
			placeholder: s,
			type: c,
			dir: p,
			disabled: l,
			isCompleted: b,
			inputElements: g,
			onInputElementChange: _,
			isNumericMode: y
		}), (e, t) => (o(), P(z(X), I(e.$attrs, {
			ref: z(f),
			dir: z(p),
			"data-complete": b.value ? "" : void 0,
			"data-disabled": z(l) ? "" : void 0
		}), {
			default: u(() => [v(e.$slots, "default", { modelValue: z(m) }), W(pl, {
				id: e.id,
				as: "input",
				feature: "focusable",
				tabindex: "-1",
				value: h.value.join(""),
				name: e.name ?? "",
				disabled: z(l),
				required: e.required,
				onFocus: t[0] ||= (e) => Array.from(g.value)?.[0]?.focus()
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
}), Sg = /* @__PURE__ */ U({
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
		let n = e, r = yg(), i = R(() => [...r.inputElements.value]), a = R(() => r.currentModelValue.value[n.index]), s = R(() => n.disabled || r.disabled.value), c = R(() => r.otp.value), l = R(() => r.mask.value), d = /^\d*$/, f = /\D/g, { primitiveElement: h, currentElement: g } = Ls();
		function _(e) {
			let t = e.target;
			if ((e.data?.length ?? 0) > 1) {
				E(t.value);
				return;
			}
			if (r.isNumericMode.value && !d.test(t.value)) {
				t.value = t.value.replace(f, "");
				return;
			}
			t.value = e.data || t.value.slice(-1), te(n.index, t.value);
			let a = i.value[n.index + 1];
			a && a.focus();
		}
		function y() {
			t(() => {
				let e = g.value;
				e && (!e.value && e === Sr() ? e.placeholder = "" : e.placeholder = r.placeholder.value);
			});
		}
		function b(e) {
			Or(e, Sr(), void 0, {
				itemsArray: i.value,
				focus: !0,
				loop: !1,
				arrowKeyOptions: "horizontal",
				dir: r.dir.value
			});
		}
		function x(e) {
			if (e.preventDefault(), e.target.value) te(n.index, "");
			else {
				let e = i.value[n.index - 1];
				e && (e.focus(), te(n.index - 1, ""));
			}
		}
		function S(e) {
			e.key === "Delete" && (e.preventDefault(), te(n.index, ""));
		}
		function w(e) {
			if (r.otp.value) {
				let e = i.value.findIndex((e, t) => r.currentModelValue.value[t] === "" || r.currentModelValue.value[t] === void 0);
				if (e !== -1 && e < n.index) {
					i.value[e].focus();
					return;
				}
			}
			e.target.setSelectionRange(1, 1), y();
		}
		function T(e) {
			y();
		}
		function ee(e) {
			e.preventDefault();
			let t = e.clipboardData;
			if (!t) return;
			let n = t.getData("text");
			E(r.isNumericMode.value ? n.replace(f, "") : n);
		}
		function E(e) {
			let t = [...r.currentModelValue.value], a = e.length >= i.value.length ? 0 : n.index, o = Math.min(a + e.length, i.value.length);
			for (let n = a; n < o; n++) {
				let o = i.value[n], s = e[n - a];
				if (r.isNumericMode.value) {
					let e = Number.parseInt(s);
					if (Number.isNaN(e)) continue;
					t[n] = e;
				} else t[n] = s;
				o.focus();
			}
			r.modelValue.value = t, i.value[o]?.focus();
		}
		function D(e) {
			let t = e.length - 1;
			for (; t >= 0 && e[t] === "";) e.pop(), t--;
			return e;
		}
		function te(e, t) {
			let n = [...r.currentModelValue.value];
			if (r.isNumericMode.value) {
				let r = +t;
				t === "" || isNaN(r) ? delete n[e] : n[e] = r;
			} else n[e] = t;
			r.modelValue.value = D(n);
		}
		return C(a, y), p(() => {
			r.onInputElementChange(g.value);
		}), m(() => {
			r.inputElements?.value.delete(g.value);
		}), (e, t) => (o(), P(z(X), {
			ref_key: "primitiveElement",
			ref: h,
			autocapitalize: "none",
			as: e.as,
			"as-child": e.asChild,
			autocomplete: c.value ? "one-time-code" : "false",
			type: l.value ? "password" : "text",
			inputmode: z(r).isNumericMode.value ? "numeric" : "text",
			pattern: z(r).isNumericMode.value ? "[0-9]*" : void 0,
			placeholder: z(r).placeholder.value,
			value: a.value,
			disabled: s.value,
			"data-disabled": s.value ? "" : void 0,
			"data-complete": z(r).isCompleted.value ? "" : void 0,
			"aria-label": `pin input ${e.index + 1} of ${i.value.length}`,
			onInput: t[0] ||= (e) => _(e),
			onKeydown: [
				be(b, [
					"left",
					"right",
					"up",
					"down",
					"home",
					"end"
				]),
				be(x, ["backspace"]),
				be(S, ["delete"])
			],
			onFocus: w,
			onBlur: T,
			onPaste: ee
		}, {
			default: u(() => [v(e.$slots, "default")]),
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
}), Cg = 100, [wg, Tg] = /* @__PURE__ */ K("ProgressRoot"), Eg = (e) => typeof e == "number";
function Dg(e, t) {
	return wr(e) || Eg(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Cg} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function Og(e) {
	return Eg(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(`Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Cg}\`.`), Cg);
}
var kg = /* @__PURE__ */ U({
	__name: "ProgressRoot",
	props: {
		modelValue: {
			type: [Number, null],
			required: !1
		},
		max: {
			type: Number,
			required: !1,
			default: Cg
		},
		getValueLabel: {
			type: Function,
			required: !1,
			default: (e, t) => Eg(e) ? `${Math.round(e / t * Cg)}%` : void 0
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
	setup(e, { emit: n }) {
		let r = e, i = n;
		q();
		let a = Bn(r, "modelValue", i, { passive: r.modelValue === void 0 }), s = Bn(r, "max", i, { passive: r.max === void 0 });
		C(() => a.value, async (e) => {
			let n = Dg(e, r.max);
			n !== e && (await t(), a.value = n);
		}, { immediate: !0 }), C(() => r.max, (e) => {
			let t = Og(r.max);
			t !== e && (s.value = t);
		}, { immediate: !0 });
		let c = R(() => wr(a.value) ? "indeterminate" : a.value === s.value ? "complete" : "loading");
		return Tg({
			modelValue: a,
			max: s,
			progressState: c
		}), (e, t) => (o(), P(z(X), {
			"as-child": e.asChild,
			as: e.as,
			"aria-valuemax": z(s),
			"aria-valuemin": 0,
			"aria-valuenow": Eg(z(a)) ? z(a) : void 0,
			"aria-valuetext": e.getValueText?.(z(a), z(s)),
			"aria-label": e.getValueLabel(z(a), z(s)),
			role: "progressbar",
			"data-state": c.value,
			"data-value": z(a) ?? void 0,
			"data-max": z(s)
		}, {
			default: u(() => [v(e.$slots, "default", { modelValue: z(a) })]),
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
}), Ag = /* @__PURE__ */ U({
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
		let t = e, n = wg();
		return q(), (e, r) => (o(), P(z(X), I(t, {
			"data-state": z(n).progressState.value,
			"data-value": z(n).modelValue?.value ?? void 0,
			"data-max": z(n).max.value
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, [
			"data-state",
			"data-value",
			"data-max"
		]));
	}
}), jg = "radio.select";
function Mg(e, t, n) {
	Cr(jg, n, {
		originalEvent: e,
		value: t
	});
}
//#endregion
//#region node_modules/reka-ui/dist/RadioGroup/Radio.js
var Ng = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Bn(n, "checked", r, { passive: n.checked === void 0 }), { value: a } = we(n), { forwardRef: s, currentElement: c } = q(), l = as(c), d = R(() => n.id && c.value ? document.querySelector(`[for="${n.id}"]`)?.innerText ?? n.value : void 0);
		function f(e) {
			n.disabled || Mg(e, n.value, (e) => {
				r("select", e), !e?.defaultPrevented && (i.value = !0, l.value && e.stopPropagation());
			});
		}
		return (e, t) => (o(), P(z(X), I(e.$attrs, {
			id: e.id,
			ref: z(s),
			role: "radio",
			type: e.as === "button" ? "button" : void 0,
			as: e.as,
			"aria-checked": z(i),
			"aria-label": d.value,
			"as-child": e.asChild,
			disabled: e.disabled ? "" : void 0,
			"data-state": z(i) ? "checked" : "unchecked",
			"data-disabled": e.disabled ? "" : void 0,
			value: z(a),
			required: e.required,
			name: e.name,
			onClick: k(f, ["stop"])
		}), {
			default: u(() => [v(e.$slots, "default", { checked: z(i) }), z(l) && e.name ? (o(), P(z(pl), {
				key: 0,
				type: "radio",
				tabindex: "-1",
				value: z(a),
				checked: !!z(i),
				name: e.name,
				disabled: e.disabled,
				required: e.required
			}, null, 8, [
				"value",
				"checked",
				"name",
				"disabled",
				"required"
			])) : M("v-if", !0)]),
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
}), [Pg, Fg] = /* @__PURE__ */ K("RadioGroupRoot"), Ig = /* @__PURE__ */ U({
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
		let n = e, r = t, { forwardRef: i, currentElement: a } = q(), s = Bn(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: n.modelValue === void 0
		}), { disabled: c, loop: l, orientation: d, name: f, required: p, dir: m } = we(n), h = $o(m), g = as(a);
		return Fg({
			modelValue: s,
			changeModelValue: (e) => {
				s.value = e;
			},
			disabled: c,
			loop: l,
			orientation: d,
			name: f?.value,
			required: p
		}), (e, t) => (o(), P(z(If), {
			"as-child": "",
			orientation: z(d),
			dir: z(h),
			loop: z(l)
		}, {
			default: u(() => [W(z(X), {
				ref: z(i),
				role: "radiogroup",
				"data-disabled": z(c) ? "" : void 0,
				"as-child": e.asChild,
				as: e.as,
				"aria-orientation": z(d),
				"aria-required": z(p),
				dir: z(h)
			}, {
				default: u(() => [v(e.$slots, "default", { modelValue: z(s) }), z(g) && z(f) ? (o(), P(z(pl), {
					key: 0,
					required: z(p),
					disabled: z(c),
					value: z(s),
					name: z(f)
				}, null, 8, [
					"required",
					"disabled",
					"value",
					"name"
				])) : M("v-if", !0)]),
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
}), [Lg, Rg] = /* @__PURE__ */ K("RadioGroupItem"), zg = /* @__PURE__ */ U({
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
		let n = e, r = t, { forwardRef: i, currentElement: a } = q(), s = Pg(), c = R(() => s.disabled.value || n.disabled), l = R(() => s.required.value || n.required), d = R(() => hr(s.modelValue?.value, n.value));
		Rg({
			disabled: c,
			checked: d
		});
		let f = O(!1), p = [
			"ArrowUp",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight"
		];
		Sn("keydown", (e) => {
			p.includes(e.key) && (f.value = !0);
		}), Sn("keyup", () => {
			f.value = !1;
		});
		function m() {
			setTimeout(() => {
				f.value && a.value?.click();
			}, 0);
		}
		return (e, t) => (o(), P(z(Lf), {
			checked: d.value,
			disabled: c.value,
			"as-child": "",
			focusable: !c.value,
			active: d.value
		}, {
			default: u(() => [W(Ng, I({
				...e.$attrs,
				...n
			}, {
				ref: z(i),
				checked: d.value,
				required: l.value,
				disabled: c.value,
				"onUpdate:checked": t[0] ||= (t) => z(s).changeModelValue(e.value),
				onSelect: t[1] ||= (e) => r("select", e),
				onKeydown: t[2] ||= be(k(() => {}, ["prevent"]), ["enter"]),
				onFocus: m
			}), {
				default: u(() => [v(e.$slots, "default", {
					checked: d.value,
					required: l.value,
					disabled: c.value
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
}), Bg = /* @__PURE__ */ U({
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
		let { forwardRef: t } = q(), n = Lg();
		return (e, r) => (o(), P(z(Ps), { present: e.forceMount || z(n).checked.value }, {
			default: u(() => [W(z(X), I({
				ref: z(t),
				"data-state": z(n).checked.value ? "checked" : "unchecked",
				"data-disabled": z(n).disabled.value ? "" : void 0,
				"as-child": e.asChild,
				as: e.as
			}, e.$attrs), {
				default: u(() => [v(e.$slots, "default")]),
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
}), [Vg, Hg] = /* @__PURE__ */ K("ScrollAreaRoot"), Ug = /* @__PURE__ */ U({
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
		let n = e, r = O(0), i = O(0), a = O(), s = O(), c = O(), l = O(), d = O(!1), f = O(!1), { type: p, dir: m, scrollHideDelay: h } = we(n), g = $o(m);
		function _() {
			a.value?.scrollTo({ top: 0 });
		}
		function y() {
			a.value?.scrollTo({
				top: 0,
				left: 0
			});
		}
		t({
			viewport: a,
			scrollTop: _,
			scrollTopLeft: y
		});
		let { forwardRef: b, currentElement: x } = q();
		return Hg({
			type: p,
			dir: g,
			scrollHideDelay: h,
			scrollArea: x,
			viewport: a,
			onViewportChange: (e) => {
				a.value = e || void 0;
			},
			content: s,
			onContentChange: (e) => {
				s.value = e;
			},
			scrollbarX: c,
			scrollbarXEnabled: d,
			scrollbarY: l,
			scrollbarYEnabled: f,
			onScrollbarXChange: (e) => {
				c.value = e || void 0;
			},
			onScrollbarYChange: (e) => {
				l.value = e || void 0;
			},
			onScrollbarXEnabledChange: (e) => {
				d.value = e;
			},
			onScrollbarYEnabledChange: (e) => {
				f.value = e;
			},
			onCornerWidthChange: (e) => {
				r.value = e;
			},
			onCornerHeightChange: (e) => {
				i.value = e;
			}
		}), (e, t) => (o(), P(z(X), {
			ref: z(b),
			"as-child": n.asChild,
			as: e.as,
			dir: z(g),
			style: D({
				position: "relative",
				"--reka-scroll-area-corner-width": `${r.value}px`,
				"--reka-scroll-area-corner-height": `${i.value}px`
			})
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as-child",
			"as",
			"dir",
			"style"
		]));
	}
}), Wg = /* @__PURE__ */ U({
	__name: "ScrollAreaCornerImpl",
	setup(e) {
		let t = Vg(), n = O(0), r = O(0), i = R(() => !!n.value && !!r.value);
		function a() {
			let e = t.scrollbarX.value?.offsetHeight || 0;
			t.onCornerHeightChange(e), r.value = e;
		}
		function s() {
			let e = t.scrollbarY.value?.offsetWidth || 0;
			t.onCornerWidthChange(e), n.value = e;
		}
		return Fn(t.scrollbarX.value, a), Fn(t.scrollbarY.value, s), C(() => t.scrollbarX.value, a), C(() => t.scrollbarY.value, s), (e, a) => i.value ? (o(), P(z(X), I({
			key: 0,
			style: {
				width: `${n.value}px`,
				height: `${r.value}px`,
				position: "absolute",
				right: z(t).dir.value === "ltr" ? 0 : void 0,
				left: z(t).dir.value === "rtl" ? 0 : void 0,
				bottom: 0
			}
		}, e.$parent?.$props), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["style"])) : M("v-if", !0);
	}
}), Gg = /* @__PURE__ */ U({
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
		let t = e, { forwardRef: n } = q(), r = Vg(), i = R(() => !!r.scrollbarX.value && !!r.scrollbarY.value), a = R(() => r.type.value !== "scroll" && i.value);
		return (e, r) => a.value ? (o(), P(Wg, I({ key: 0 }, t, { ref: z(n) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16)) : M("v-if", !0);
	}
});
//#endregion
//#region node_modules/reka-ui/dist/ScrollArea/utils.js
function Kg(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
function qg(e) {
	let t = Jg(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
	return Math.max(r, 18);
}
function Jg(e, t) {
	let n = e / t;
	return Number.isNaN(n) ? 0 : n;
}
function Yg(e, t = () => {}) {
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
function Xg(e, t, n = "ltr") {
	let r = qg(t), i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - i, o = t.content - t.viewport, s = a - r, c = n === "ltr" ? [0, o] : [o * -1, 0], l = yr(e, c[0], c[1]);
	return Kg([0, o], [0, s])(l);
}
function Zg(e) {
	return e ? Number.parseInt(e, 10) : 0;
}
function Qg(e, t, n, r = "ltr") {
	let i = qg(n), a = i / 2, o = t || a, s = i - o, c = n.scrollbar.paddingStart + o, l = n.scrollbar.size - n.scrollbar.paddingEnd - s, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
	return Kg([c, l], d)(e);
}
function $g(e, t) {
	return e > 0 && e < t;
}
//#endregion
//#region node_modules/reka-ui/dist/ScrollArea/ScrollAreaScrollbarX.js
var e_ = /* @__PURE__ */ U({
	__name: "ScrollAreaScrollbarX",
	setup(e) {
		let t = Vg(), n = l_(), { forwardRef: r, currentElement: i } = q();
		p(() => {
			i.value && t.onScrollbarXChange(i.value);
		});
		let a = R(() => n.sizes.value);
		return (e, i) => (o(), P(f_, {
			ref: z(r),
			"is-horizontal": !0,
			"data-orientation": "horizontal",
			style: D({
				bottom: 0,
				left: z(t).dir.value === "rtl" ? "var(--reka-scroll-area-corner-width)" : 0,
				right: z(t).dir.value === "ltr" ? "var(--reka-scroll-area-corner-width)" : 0,
				"--reka-scroll-area-thumb-width": a.value ? `${z(qg)(a.value)}px` : void 0
			}),
			onOnDragScroll: i[0] ||= (e) => z(n).onDragScroll(e.x)
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["style"]));
	}
}), t_ = /* @__PURE__ */ U({
	__name: "ScrollAreaScrollbarY",
	setup(e) {
		let t = Vg(), n = l_(), { forwardRef: r, currentElement: i } = q();
		p(() => {
			i.value && t.onScrollbarYChange(i.value);
		});
		let a = R(() => n.sizes.value);
		return (e, i) => (o(), P(f_, {
			ref: z(r),
			"is-horizontal": !1,
			"data-orientation": "vertical",
			style: D({
				top: 0,
				right: z(t).dir.value === "ltr" ? 0 : void 0,
				left: z(t).dir.value === "rtl" ? 0 : void 0,
				bottom: "var(--reka-scroll-area-corner-height)",
				"--reka-scroll-area-thumb-height": a.value ? `${z(qg)(a.value)}px` : void 0
			}),
			onOnDragScroll: i[0] ||= (e) => z(n).onDragScroll(e.y)
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["style"]));
	}
}), n_ = /* @__PURE__ */ U({
	__name: "ScrollAreaScrollbarAuto",
	props: { forceMount: {
		type: Boolean,
		required: !1
	} },
	setup(e) {
		let t = Vg(), n = o_(), { forwardRef: r } = q(), i = O(!1), a = ln(() => {
			if (t.viewport.value) {
				let e = t.viewport.value.offsetWidth < t.viewport.value.scrollWidth, r = t.viewport.value.offsetHeight < t.viewport.value.scrollHeight;
				i.value = n.isHorizontal.value ? e : r;
			}
		}, 10);
		return p(() => a()), Fn(t.viewport, a), Fn(t.content, a), (e, t) => (o(), P(z(Ps), { present: e.forceMount || i.value }, {
			default: u(() => [W(d_, I(e.$attrs, {
				ref: z(r),
				"data-state": i.value ? "visible" : "hidden"
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}, 8, ["present"]));
	}
}), r_ = /* @__PURE__ */ U({
	inheritAttrs: !1,
	__name: "ScrollAreaScrollbarGlimpse",
	props: { forceMount: {
		type: Boolean,
		required: !1
	} },
	setup(e) {
		let t = Vg(), n = o_(), { forwardRef: r } = q(), { state: i, dispatch: a } = Os("hidden", {
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
		}), c = R(() => i.value !== "hidden");
		function l() {
			a("POINTER_ENTER");
		}
		function d() {
			a("POINTER_LEAVE");
		}
		let f = ln(() => a("SCROLL_END"), 100);
		return s((e) => {
			if (i.value === "glimpse") {
				let n = window.setTimeout(a, t.scrollHideDelay.value, "HIDE");
				e(() => {
					window.clearTimeout(n);
				});
			}
		}), s((e) => {
			if (i.value === "idle") {
				let n = window.setTimeout(a, t.scrollHideDelay.value, "HIDE");
				e(() => {
					window.clearTimeout(n);
				});
			}
		}), s((e) => {
			let r = t.viewport.value, i = n.isHorizontal.value ? "scrollLeft" : "scrollTop";
			if (r) {
				let t = r[i], n = () => {
					let e = r[i];
					t !== e && (a("SCROLL"), f()), t = e;
				};
				r.addEventListener("scroll", n), e(() => {
					r.removeEventListener("scroll", n);
				});
			}
		}), p(() => {
			let e = t.scrollArea.value;
			e && (e.addEventListener("pointerenter", l), e.addEventListener("pointerleave", d));
		}), m(() => {
			let e = t.scrollArea.value;
			e && (e.removeEventListener("pointerenter", l), e.removeEventListener("pointerleave", d));
		}), (e, t) => (o(), P(z(Ps), { present: e.forceMount || c.value }, {
			default: u(() => [W(n_, I(e.$attrs, {
				ref: z(r),
				"data-state": c.value ? "visible" : "hidden"
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}, 8, ["present"]));
	}
}), i_ = /* @__PURE__ */ U({
	inheritAttrs: !1,
	__name: "ScrollAreaScrollbarHover",
	props: { forceMount: {
		type: Boolean,
		required: !1
	} },
	setup(e) {
		let t = Vg(), { forwardRef: n } = q(), r, i = O(!1);
		function a() {
			window.clearTimeout(r), i.value = !0;
		}
		function s() {
			r = window.setTimeout(() => {
				i.value = !1;
			}, t.scrollHideDelay.value);
		}
		return p(() => {
			let e = t.scrollArea.value;
			e && (e.addEventListener("pointerenter", a), e.addEventListener("pointerleave", s));
		}), m(() => {
			let e = t.scrollArea.value;
			e && (window.clearTimeout(r), e.removeEventListener("pointerenter", a), e.removeEventListener("pointerleave", s));
		}), (e, t) => (o(), P(z(Ps), { present: e.forceMount || i.value }, {
			default: u(() => [W(n_, I(e.$attrs, {
				ref: z(n),
				"data-state": i.value ? "visible" : "hidden"
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}, 8, ["present"]));
	}
}), a_ = /* @__PURE__ */ U({
	__name: "ScrollAreaScrollbarScroll",
	props: { forceMount: {
		type: Boolean,
		required: !1
	} },
	setup(e) {
		let t = Vg(), n = o_(), { forwardRef: r } = q(), { state: i, dispatch: a } = Os("hidden", {
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
		}), c = R(() => i.value !== "hidden");
		s((e) => {
			if (i.value === "idle") {
				let n = window.setTimeout(a, t.scrollHideDelay.value, "HIDE");
				e(() => {
					window.clearTimeout(n);
				});
			}
		});
		let l = ln(() => a("SCROLL_END"), 100);
		return s((e) => {
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
		}), (e, t) => (o(), P(z(Ps), { present: e.forceMount || c.value }, {
			default: u(() => [W(d_, I(e.$attrs, {
				ref: z(r),
				"data-state": c.value ? "visible" : "hidden"
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}, 8, ["present"]));
	}
}), [o_, s_] = /* @__PURE__ */ K("ScrollAreaScrollbar"), c_ = /* @__PURE__ */ U({
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
		let t = e, { forwardRef: n } = q(), r = Vg(), i = R(() => t.orientation === "horizontal");
		C(i, () => {
			i.value ? r.onScrollbarXEnabledChange(!0) : r.onScrollbarYEnabledChange(!0);
		}, { immediate: !0 }), m(() => {
			r.onScrollbarXEnabledChange(!1), r.onScrollbarYEnabledChange(!1);
		});
		let { orientation: a, forceMount: s, asChild: c, as: l } = we(t);
		return s_({
			orientation: a,
			forceMount: s,
			isHorizontal: i,
			as: l,
			asChild: c
		}), (e, t) => z(r).type.value === "hover" ? (o(), P(i_, I({ key: 0 }, e.$attrs, {
			ref: z(n),
			"force-mount": z(s)
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["force-mount"])) : z(r).type.value === "scroll" ? (o(), P(a_, I({ key: 1 }, e.$attrs, {
			ref: z(n),
			"force-mount": z(s)
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["force-mount"])) : z(r).type.value === "glimpse" ? (o(), P(r_, I({ key: 2 }, e.$attrs, {
			ref: z(n),
			"force-mount": z(s)
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["force-mount"])) : z(r).type.value === "auto" ? (o(), P(n_, I({ key: 3 }, e.$attrs, {
			ref: z(n),
			"force-mount": z(s)
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["force-mount"])) : z(r).type.value === "always" ? (o(), P(d_, I({ key: 4 }, e.$attrs, {
			ref: z(n),
			"data-state": "visible"
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16)) : M("v-if", !0);
	}
}), [l_, u_] = /* @__PURE__ */ K("ScrollAreaScrollbarVisible"), d_ = /* @__PURE__ */ U({
	__name: "ScrollAreaScrollbarVisible",
	setup(e) {
		let t = Vg(), n = o_(), { forwardRef: r } = q(), i = O({
			content: 0,
			viewport: 0,
			scrollbar: {
				size: 0,
				paddingStart: 0,
				paddingEnd: 0
			}
		}), a = R(() => {
			let e = Jg(i.value.viewport, i.value.content);
			return e > 0 && e < 1;
		}), s = O(), c = O(0);
		function l(e, n) {
			if (h.value) {
				let r = t.viewport.value.scrollLeft + e.deltaY;
				t.viewport.value.scrollLeft = r, $g(r, n) && e.preventDefault();
			} else {
				let r = t.viewport.value.scrollTop + e.deltaY;
				t.viewport.value.scrollTop = r, $g(r, n) && e.preventDefault();
			}
		}
		function d(e, t) {
			h.value ? c.value = t.x : c.value = t.y;
		}
		function f(e) {
			c.value = 0;
		}
		function p(e) {
			i.value = e;
		}
		function m(e, t) {
			return Qg(e, c.value, i.value, t);
		}
		let h = R(() => n.isHorizontal.value);
		function g(e) {
			h.value ? t.viewport.value.scrollLeft = m(e, t.dir.value) : t.viewport.value.scrollTop = m(e);
		}
		function _() {
			if (h.value) {
				if (t.viewport.value && s.value) {
					let e = t.viewport.value.scrollLeft, n = Xg(e, i.value, t.dir.value);
					s.value.style.transform = `translate3d(${n}px, 0, 0)`;
				}
			} else if (t.viewport.value && s.value) {
				let e = t.viewport.value.scrollTop, n = Xg(e, i.value);
				s.value.style.transform = `translate3d(0, ${n}px, 0)`;
			}
		}
		function y(e) {
			s.value = e;
		}
		return u_({
			sizes: i,
			hasThumb: a,
			handleWheelScroll: l,
			handleThumbDown: d,
			handleThumbUp: f,
			handleSizeChange: p,
			onThumbPositionChange: _,
			onThumbChange: y,
			onDragScroll: g
		}), (e, t) => h.value ? (o(), P(e_, I({ key: 0 }, e.$attrs, { ref: z(r) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16)) : (o(), P(t_, I({ key: 1 }, e.$attrs, { ref: z(r) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), f_ = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Vg(), a = l_(), s = o_(), { forwardRef: c, currentElement: l } = q(), d = O(""), f = O();
		function h(e) {
			f.value && r("onDragScroll", {
				x: e.clientX - f.value?.left,
				y: e.clientY - f.value?.top
			});
		}
		function g(e) {
			e.button === 0 && (e.target.setPointerCapture(e.pointerId), f.value = l.value.getBoundingClientRect(), d.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", i.viewport && (i.viewport.value.style.scrollBehavior = "auto"), h(e));
		}
		function _(e) {
			h(e);
		}
		function y(e) {
			let t = e.target;
			t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = d.value, i.viewport && (i.viewport.value.style.scrollBehavior = ""), f.value = void 0;
		}
		function b(e) {
			let t = e.target, n = l.value?.contains(t), r = a.sizes.value.content - a.sizes.value.viewport;
			n && a.handleWheelScroll(e, r);
		}
		p(() => {
			document.addEventListener("wheel", b, { passive: !1 });
		}), m(() => {
			document.removeEventListener("wheel", b);
		});
		function x() {
			l.value && (n.isHorizontal ? a.handleSizeChange({
				content: i.viewport.value?.scrollWidth ?? 0,
				viewport: i.viewport.value?.offsetWidth ?? 0,
				scrollbar: {
					size: l.value.clientWidth ?? 0,
					paddingStart: Zg(getComputedStyle(l.value).paddingLeft),
					paddingEnd: Zg(getComputedStyle(l.value).paddingRight)
				}
			}) : a.handleSizeChange({
				content: i.viewport.value?.scrollHeight ?? 0,
				viewport: i.viewport.value?.offsetHeight ?? 0,
				scrollbar: {
					size: l.value?.clientHeight ?? 0,
					paddingStart: Zg(getComputedStyle(l.value).paddingTop),
					paddingEnd: Zg(getComputedStyle(l.value).paddingBottom)
				}
			}), a.onThumbPositionChange());
		}
		return Fn(l, x), Fn(i.content, x), (e, t) => (o(), P(z(X), {
			ref: z(c),
			style: { position: "absolute" },
			"data-scrollbarimpl": "",
			as: z(s).as.value,
			"as-child": z(s).asChild.value,
			onPointerdown: g,
			onPointermove: _,
			onPointerup: y
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["as", "as-child"]));
	}
}), p_ = /* @__PURE__ */ U({
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
		let t = e, n = Vg(), r = l_();
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
		let { forwardRef: s, currentElement: c } = q(), l = O(), d = R(() => n.viewport.value);
		function f() {
			l.value || (l.value = Yg(d.value, r.onThumbPositionChange), r.onThumbPositionChange());
		}
		return gn(R(() => r.sizes.value), () => {
			r.onThumbChange(c.value), d.value && (r.onThumbPositionChange(), d.value.addEventListener("scroll", f));
		}), m(() => {
			d.value.removeEventListener("scroll", f), n.viewport.value?.removeEventListener("scroll", f);
		}), (e, n) => (o(), P(z(X), {
			ref: z(s),
			"data-state": z(r).hasThumb ? "visible" : "hidden",
			style: {
				width: "var(--reka-scroll-area-thumb-width)",
				height: "var(--reka-scroll-area-thumb-height)"
			},
			"as-child": t.asChild,
			as: e.as,
			onPointerdown: i,
			onPointerup: a
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"data-state",
			"as-child",
			"as"
		]));
	}
}), m_ = /* @__PURE__ */ U({
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
		let n = e, { nonce: r } = we(n), i = rf(r), a = Vg(), s = O();
		p(() => {
			a.onViewportChange(s.value), a.onContentChange(l.value);
		}), t({ viewportElement: s });
		let { forwardRef: c, currentElement: l } = q();
		return (e, t) => (o(), E(B, null, [L("div", I({
			ref_key: "viewportElement",
			ref: s,
			"data-reka-scroll-area-viewport": "",
			style: {
				overflowX: z(a).scrollbarXEnabled.value ? "scroll" : "hidden",
				overflowY: z(a).scrollbarYEnabled.value ? "scroll" : "hidden"
			}
		}, e.$attrs, { tabindex: 0 }), [W(z(X), {
			ref: z(c),
			style: D({ minWidth: z(a).scrollbarXEnabled.value ? "fit-content" : void 0 }),
			"as-child": n.asChild,
			as: e.as
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"style",
			"as-child",
			"as"
		])], 16), W(z(X), {
			as: "style",
			nonce: z(i)
		}, {
			default: u(() => t[0] ||= [V(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-reka-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")]),
			_: 1,
			__: [0]
		}, 8, ["nonce"])], 64));
	}
}), h_ = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], g_ = [" ", "Enter"];
function __(e, t, n) {
	return e === void 0 ? !1 : Array.isArray(e) ? e.some((e) => v_(e, t, n)) : v_(e, t, n);
}
function v_(e, t, n) {
	return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? e?.[n] === t?.[n] : hr(e, t);
}
function y_(e) {
	return e == null || e === "" || Array.isArray(e) && e.length === 0;
}
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectRoot.js
var b_ = {
	key: 0,
	value: ""
}, [x_, S_] = /* @__PURE__ */ K("SelectRoot"), C_ = /* @__PURE__ */ U({
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
		let n = e, r = t, { required: i, disabled: a, multiple: s, dir: c } = we(n), l = Bn(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? (s.value ? [] : void 0),
			passive: n.modelValue === void 0,
			deep: !0
		}), d = Bn(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		}), p = O(), m = O(), h = O({
			x: 0,
			y: 0
		}), g = R(() => s.value && Array.isArray(l.value) ? l.value?.length === 0 : wr(l.value));
		ul({ isProvider: !0 });
		let _ = $o(c), y = as(p), b = O(/* @__PURE__ */ new Set()), x = R(() => Array.from(b.value).map((e) => e.value).join(";"));
		function S(e) {
			if (s.value) {
				let t = Array.isArray(l.value) ? [...l.value] : [], r = t.findIndex((t) => v_(t, e, n.by));
				r === -1 ? t.push(e) : t.splice(r, 1), l.value = [...t];
			} else l.value = e;
		}
		function C(e) {
			return Array.from(b.value).find((t) => __(e, t.value, n.by));
		}
		return S_({
			triggerElement: p,
			onTriggerChange: (e) => {
				p.value = e;
			},
			valueElement: m,
			onValueElementChange: (e) => {
				m.value = e;
			},
			contentId: "",
			modelValue: l,
			onValueChange: S,
			by: n.by,
			open: d,
			multiple: s,
			required: i,
			onOpenChange: (e) => {
				d.value = e;
			},
			dir: _,
			triggerPointerDownPosRef: h,
			disabled: a,
			isEmptyModelValue: g,
			optionsSet: b,
			onOptionAdd: (e) => {
				let t = C(e.value);
				t && b.value.delete(t), b.value.add(e);
			},
			onOptionRemove: (e) => {
				let t = C(e.value);
				t && b.value.delete(t);
			}
		}), (e, t) => (o(), P(z(Rl), null, {
			default: u(() => [v(e.$slots, "default", {
				modelValue: z(l),
				open: z(d)
			}), z(y) && e.name ? (o(), P(w_, {
				key: x.value,
				"aria-hidden": "true",
				tabindex: "-1",
				multiple: z(s),
				required: z(i),
				name: e.name,
				autocomplete: e.autocomplete,
				disabled: z(a),
				value: z(l)
			}, {
				default: u(() => [z(wr)(z(l)) ? (o(), E("option", b_)) : M("v-if", !0), (o(!0), E(B, null, f(Array.from(b.value), (e) => (o(), E("option", I({ key: e.value ?? "" }, { ref_for: !0 }, e), null, 16))), 128))]),
				_: 1
			}, 8, [
				"multiple",
				"required",
				"name",
				"autocomplete",
				"disabled",
				"value"
			])) : M("v-if", !0)]),
			_: 3
		}));
	}
}), w_ = /* @__PURE__ */ U({
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
		let t = e, n = O(), r = x_();
		C(() => t.value, (e, t) => {
			let r = window.HTMLSelectElement.prototype, i = Object.getOwnPropertyDescriptor(r, "value").set;
			if (e !== t && i && n.value) {
				let t = new Event("change", { bubbles: !0 });
				i.call(n.value, e), n.value.dispatchEvent(t);
			}
		});
		function i(e) {
			r.onValueChange(e.target.value);
		}
		return (e, r) => (o(), P(z(dl), { "as-child": "" }, {
			default: u(() => [L("select", I({
				ref_key: "selectElement",
				ref: n
			}, t, { onInput: i }), [v(e.$slots, "default")], 16)]),
			_: 3
		}));
	}
}), T_ = /* @__PURE__ */ U({
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
		let t = J(e);
		return (e, n) => (o(), P(z(ef), I(z(t), { style: {
			boxSizing: "border-box",
			"--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
			"--reka-select-content-available-width": "var(--reka-popper-available-width)",
			"--reka-select-content-available-height": "var(--reka-popper-available-height)",
			"--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
			"--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
		} }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), E_ = {
	onViewportChange: () => {},
	itemTextRefCallback: () => {},
	itemRefCallback: () => {}
}, [D_, O_] = /* @__PURE__ */ K("SelectContent"), k_ = /* @__PURE__ */ U({
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
		let n = e, r = t, i = x_();
		rs(), Lr(n.bodyLock);
		let { CollectionSlot: a, getItems: c } = ul(), l = O();
		Ss(l);
		let { search: d, handleTypeaheadSearch: f } = ks(), p = O(), m = O(), h = O(), g = O(!1), _ = O(!1), y = O(!1);
		function b() {
			m.value && l.value && Rc([m.value, l.value]);
		}
		C(g, () => {
			b();
		});
		let { onOpenChange: x, triggerPointerDownPosRef: S } = i;
		s((e) => {
			if (!l.value) return;
			let t = {
				x: 0,
				y: 0
			}, n = (e) => {
				t = {
					x: Math.abs(Math.round(e.pageX) - (S.value?.x ?? 0)),
					y: Math.abs(Math.round(e.pageY) - (S.value?.y ?? 0))
				};
			}, r = (e) => {
				e.pointerType !== "touch" && (t.x <= 10 && t.y <= 10 ? e.preventDefault() : l.value?.contains(e.target) || x(!1), document.removeEventListener("pointermove", n), S.value = null);
			};
			S.value !== null && (document.addEventListener("pointermove", n), document.addEventListener("pointerup", r, {
				capture: !0,
				once: !0
			})), e(() => {
				document.removeEventListener("pointermove", n), document.removeEventListener("pointerup", r, { capture: !0 });
			});
		});
		function w(e) {
			let t = e.ctrlKey || e.altKey || e.metaKey;
			if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && f(e.key, c()), [
				"ArrowUp",
				"ArrowDown",
				"Home",
				"End"
			].includes(e.key)) {
				let t = [...c().map((e) => e.ref)];
				if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
					let n = e.target, r = t.indexOf(n);
					t = t.slice(r + 1);
				}
				setTimeout(() => Rc(t)), e.preventDefault();
			}
		}
		let T = J(R(() => n.position === "popper" ? n : {}).value);
		return O_({
			content: l,
			viewport: p,
			onViewportChange: (e) => {
				p.value = e;
			},
			itemRefCallback: (e, t, n) => {
				let r = !_.value && !n, a = __(i.modelValue.value, t, i.by);
				if (i.multiple.value) {
					if (y.value) return;
					(a || r) && (m.value = e, a && (y.value = !0));
				} else (a || r) && (m.value = e);
				r && (_.value = !0);
			},
			selectedItem: m,
			selectedItemText: h,
			onItemLeave: () => {
				l.value?.focus();
			},
			itemTextRefCallback: (e, t, n) => {
				let r = !_.value && !n;
				(__(i.modelValue.value, t, i.by) || r) && (h.value = e);
			},
			focusSelectedItem: b,
			position: n.position,
			isPositioned: g,
			searchRef: d
		}), (e, t) => (o(), P(z(a), null, {
			default: u(() => [W(z(Dc), {
				"as-child": "",
				onMountAutoFocus: t[6] ||= k(() => {}, ["prevent"]),
				onUnmountAutoFocus: t[7] ||= (e) => {
					r("closeAutoFocus", e), !e.defaultPrevented && (z(i).triggerElement.value?.focus({ preventScroll: !0 }), e.preventDefault());
				}
			}, {
				default: u(() => [W(z(pc), {
					"as-child": "",
					"disable-outside-pointer-events": e.disableOutsidePointerEvents,
					onFocusOutside: t[2] ||= k(() => {}, ["prevent"]),
					onDismiss: t[3] ||= (e) => z(i).onOpenChange(!1),
					onEscapeKeyDown: t[4] ||= (e) => r("escapeKeyDown", e),
					onPointerDownOutside: t[5] ||= (e) => r("pointerDownOutside", e)
				}, {
					default: u(() => [(o(), P(De(e.position === "popper" ? T_ : M_), I({
						...e.$attrs,
						...z(T)
					}, {
						id: z(i).contentId,
						ref: (e) => {
							if (!e) return;
							let t = z(xn)(e);
							t?.hasAttribute("data-reka-popper-content-wrapper") ? l.value = t.firstElementChild : l.value = t;
						},
						role: "listbox",
						"data-state": z(i).open.value ? "open" : "closed",
						dir: z(i).dir.value,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none"
						},
						onContextmenu: t[0] ||= k(() => {}, ["prevent"]),
						onPlaced: t[1] ||= (e) => g.value = !0,
						onKeydown: w
					}), {
						default: u(() => [v(e.$slots, "default")]),
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
}), [A_, j_] = /* @__PURE__ */ K("SelectItemAlignedPosition"), M_ = /* @__PURE__ */ U({
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
	setup(e, { emit: n }) {
		let r = e, i = n, { getItems: a } = ul(), s = x_(), c = D_(), l = O(!1), d = O(!0), f = O(), { forwardRef: m, currentElement: h } = q(), { viewport: g, selectedItem: _, selectedItemText: y, focusSelectedItem: b } = c;
		function x() {
			if (s.triggerElement.value && s.valueElement.value && f.value && h.value && g?.value && _?.value && y?.value) {
				let e = s.triggerElement.value.getBoundingClientRect(), t = h.value.getBoundingClientRect(), n = s.valueElement.value.getBoundingClientRect(), r = y.value.getBoundingClientRect();
				if (s.dir.value !== "rtl") {
					let i = r.left - t.left, a = n.left - i, o = e.left - a, s = e.width + o, c = Math.max(s, t.width), l = window.innerWidth - 10, u = yr(a, 10, Math.max(10, l - c));
					f.value.style.minWidth = `${s}px`, f.value.style.left = `${u}px`;
				} else {
					let i = t.right - r.right, a = window.innerWidth - n.right - i, o = window.innerWidth - e.right - a, s = e.width + o, c = Math.max(s, t.width), l = window.innerWidth - 10, u = yr(a, 10, Math.max(10, l - c));
					f.value.style.minWidth = `${s}px`, f.value.style.right = `${u}px`;
				}
				let o = a().map((e) => e.ref), c = window.innerHeight - 20, u = g.value.scrollHeight, d = window.getComputedStyle(h.value), p = Number.parseInt(d.borderTopWidth, 10), m = Number.parseInt(d.paddingTop, 10), v = Number.parseInt(d.borderBottomWidth, 10), b = Number.parseInt(d.paddingBottom, 10), x = p + m + u + b + v, S = Math.min(_.value.offsetHeight * 5, x), C = window.getComputedStyle(g.value), w = Number.parseInt(C.paddingTop, 10), T = Number.parseInt(C.paddingBottom, 10), ee = e.top + e.height / 2 - 10, E = c - ee, D = _.value.offsetHeight / 2, te = _.value.offsetTop + D, O = p + m + te, ne = x - O;
				if (O <= ee) {
					let e = _.value === o.at(-1);
					f.value.style.bottom = "0px";
					let t = h.value.clientHeight - g.value.offsetTop - g.value.offsetHeight, n = O + Math.max(E, D + (e ? T : 0) + t + v);
					f.value.style.height = `${n}px`;
				} else {
					let e = _.value === o[0];
					f.value.style.top = "0px";
					let t = Math.max(ee, p + g.value.offsetTop + (e ? w : 0) + D) + ne;
					f.value.style.height = `${t}px`, g.value.scrollTop = O - ee + g.value.offsetTop;
				}
				f.value.style.margin = "10px 0", f.value.style.minHeight = `${S}px`, f.value.style.maxHeight = `${c}px`, i("placed"), requestAnimationFrame(() => l.value = !0);
			}
		}
		let S = O("");
		p(async () => {
			await t(), x(), h.value && (S.value = window.getComputedStyle(h.value).zIndex);
		});
		function C(e) {
			e && d.value === !0 && (x(), b?.(), d.value = !1);
		}
		return Fn(s.triggerElement, () => {
			x();
		}), j_({
			contentWrapper: f,
			shouldExpandOnScrollRef: l,
			onScrollButtonChange: C
		}), (e, t) => (o(), E("div", {
			ref_key: "contentWrapperElement",
			ref: f,
			style: D({
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: S.value
			})
		}, [W(z(X), I({
			ref: z(m),
			style: {
				boxSizing: "border-box",
				maxHeight: "100%"
			}
		}, {
			...e.$attrs,
			...r
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16)], 4));
	}
}), N_ = /* @__PURE__ */ U({
	inheritAttrs: !1,
	__name: "SelectProvider",
	props: { context: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return S_(e.context), O_(E_), (e, t) => v(e.$slots, "default");
	}
}), P_ = { key: 1 }, F_ = /* @__PURE__ */ U({
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
		let n = e, i = Y(n, t), a = x_(), s = O();
		p(() => {
			s.value = new DocumentFragment();
		});
		let c = O(), l = R(() => n.forceMount || a.open.value), d = O(l.value);
		return C(l, () => {
			setTimeout(() => d.value = l.value);
		}), (e, t) => l.value || d.value || c.value?.present ? (o(), P(z(Ps), {
			key: 0,
			ref_key: "presenceRef",
			ref: c,
			present: l.value
		}, {
			default: u(() => [W(k_, N(r({
				...z(i),
				...e.$attrs
			})), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16)]),
			_: 3
		}, 8, ["present"])) : s.value ? (o(), E("div", P_, [(o(), P(ie, { to: s.value }, [W(N_, { context: z(a) }, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["context"])], 8, ["to"]))])) : M("v-if", !0);
	}
}), I_ = /* @__PURE__ */ U({
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
		return (e, t) => (o(), P(z(X), {
			"aria-hidden": "true",
			as: e.as,
			"as-child": e.asChild
		}, {
			default: u(() => [v(e.$slots, "default", {}, () => [t[0] ||= V("▼")])]),
			_: 3
		}, 8, ["as", "as-child"]));
	}
}), [L_, R_] = /* @__PURE__ */ K("SelectItem"), z_ = /* @__PURE__ */ U({
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
	setup(e, { emit: n }) {
		let r = e, i = n, { disabled: a } = we(r), s = x_(), c = D_(), { forwardRef: l, currentElement: d } = q(), { CollectionItem: f } = ul(), m = R(() => __(s.modelValue?.value, r.value, s.by)), h = O(!1), g = O(r.textValue ?? ""), _ = ws(void 0, "reka-select-item-text");
		async function y(e) {
			e.defaultPrevented || Cr("select.select", b, {
				originalEvent: e,
				value: r.value
			});
		}
		async function b(e) {
			await t(), i("select", e), !e.defaultPrevented && (a.value || (s.onValueChange(r.value), s.multiple.value || s.onOpenChange(!1)));
		}
		async function x(e) {
			await t(), !e.defaultPrevented && (a.value ? c.onItemLeave?.() : e.currentTarget?.focus({ preventScroll: !0 }));
		}
		async function S(e) {
			await t(), !e.defaultPrevented && e.currentTarget === Sr() && c.onItemLeave?.();
		}
		async function C(e) {
			await t(), !e.defaultPrevented && (c.searchRef?.value !== "" && e.key === " " || (g_.includes(e.key) && y(e), e.key === " " && e.preventDefault()));
		}
		if (r.value === "") throw Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
		return p(() => {
			d.value && c.itemRefCallback(d.value, r.value, r.disabled);
		}), R_({
			value: r.value,
			disabled: a,
			textId: _,
			isSelected: m,
			onItemTextChange: (e) => {
				g.value = ((g.value || e?.textContent) ?? "").trim();
			}
		}), (e, t) => (o(), P(z(f), { value: { textValue: g.value } }, {
			default: u(() => [W(z(X), {
				ref: z(l),
				role: "option",
				"aria-labelledby": z(_),
				"data-highlighted": h.value ? "" : void 0,
				"aria-selected": m.value,
				"data-state": m.value ? "checked" : "unchecked",
				"aria-disabled": z(a) || void 0,
				"data-disabled": z(a) ? "" : void 0,
				tabindex: z(a) ? void 0 : -1,
				as: e.as,
				"as-child": e.asChild,
				onFocus: t[0] ||= (e) => h.value = !0,
				onBlur: t[1] ||= (e) => h.value = !1,
				onPointerup: y,
				onPointerdown: t[2] ||= (e) => {
					e.currentTarget.focus({ preventScroll: !0 });
				},
				onTouchend: t[3] ||= k(() => {}, ["prevent", "stop"]),
				onPointermove: x,
				onPointerleave: S,
				onKeydown: C
			}, {
				default: u(() => [v(e.$slots, "default")]),
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
}), B_ = /* @__PURE__ */ U({
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
		let t = e, n = L_();
		return (e, r) => z(n).isSelected.value ? (o(), P(z(X), I({
			key: 0,
			"aria-hidden": "true"
		}, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16)) : M("v-if", !0);
	}
}), V_ = /* @__PURE__ */ U({
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
		let t = e, n = x_(), r = D_(), i = L_(), { forwardRef: a, currentElement: s } = q(), c = R(() => ({
			value: i.value,
			disabled: i.disabled.value,
			textContent: s.value?.textContent ?? i.value?.toString() ?? ""
		}));
		return p(() => {
			s.value && (i.onItemTextChange(s.value), r.itemTextRefCallback(s.value, i.value, i.disabled.value), n.onOptionAdd(c.value));
		}), m(() => {
			n.onOptionRemove(c.value);
		}), (e, n) => (o(), P(z(X), I({
			id: z(i).textId,
			ref: z(a)
		}, {
			...t,
			...e.$attrs
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), H_ = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(Yc), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), U_ = /* @__PURE__ */ U({
	__name: "SelectScrollButtonImpl",
	emits: ["autoScroll"],
	setup(e, { emit: t }) {
		let n = t, { getItems: r } = ul(), i = D_(), a = O(null);
		function c() {
			a.value !== null && (window.clearInterval(a.value), a.value = null);
		}
		s(() => {
			r().map((e) => e.ref).find((e) => e === Sr())?.scrollIntoView({ block: "nearest" });
		});
		function l() {
			a.value === null && (a.value = window.setInterval(() => {
				n("autoScroll");
			}, 50));
		}
		function d() {
			i.onItemLeave?.(), a.value === null && (a.value = window.setInterval(() => {
				n("autoScroll");
			}, 50));
		}
		return le(() => c()), (e, t) => (o(), P(z(X), I({
			"aria-hidden": "true",
			style: { flexShrink: 0 }
		}, e.$parent?.$props, {
			onPointerdown: l,
			onPointermove: d,
			onPointerleave: t[0] ||= () => {
				c();
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), W_ = /* @__PURE__ */ U({
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
		let t = D_(), n = t.position === "item-aligned" ? A_() : void 0, { forwardRef: r, currentElement: i } = q(), a = O(!1);
		return s((e) => {
			if (t.viewport?.value && t.isPositioned?.value) {
				let n = t.viewport.value;
				function r() {
					let e = n.scrollHeight - n.clientHeight;
					a.value = Math.ceil(n.scrollTop) < e;
				}
				r(), n.addEventListener("scroll", r), e(() => n.removeEventListener("scroll", r));
			}
		}), C(i, () => {
			i.value && n?.onScrollButtonChange(i.value);
		}), (e, n) => a.value ? (o(), P(U_, {
			key: 0,
			ref: z(r),
			onAutoScroll: n[0] ||= () => {
				let { viewport: e, selectedItem: n } = z(t);
				e?.value && n?.value && (e.value.scrollTop = e.value.scrollTop + n.value.offsetHeight);
			}
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 512)) : M("v-if", !0);
	}
}), G_ = /* @__PURE__ */ U({
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
		let t = D_(), n = t.position === "item-aligned" ? A_() : void 0, { forwardRef: r, currentElement: i } = q(), a = O(!1);
		return s((e) => {
			if (t.viewport?.value && t.isPositioned?.value) {
				let n = t.viewport.value;
				function r() {
					a.value = n.scrollTop > 0;
				}
				r(), n.addEventListener("scroll", r), e(() => n.removeEventListener("scroll", r));
			}
		}), C(i, () => {
			i.value && n?.onScrollButtonChange(i.value);
		}), (e, n) => a.value ? (o(), P(U_, {
			key: 0,
			ref: z(r),
			onAutoScroll: n[0] ||= () => {
				let { viewport: e, selectedItem: n } = z(t);
				e?.value && n?.value && (e.value.scrollTop = e.value.scrollTop - n.value.offsetHeight);
			}
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 512)) : M("v-if", !0);
	}
}), K_ = /* @__PURE__ */ U({
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
		let t = e, n = x_(), { forwardRef: r, currentElement: i } = q(), a = R(() => n.disabled?.value || t.disabled);
		n.contentId ||= ws(void 0, "reka-select-content"), p(() => {
			n.onTriggerChange(i.value);
		});
		let { getItems: s } = ul(), { search: c, handleTypeaheadSearch: l, resetTypeahead: d } = ks();
		function f() {
			a.value || (n.onOpenChange(!0), d());
		}
		function m(e) {
			f(), n.triggerPointerDownPosRef.value = {
				x: Math.round(e.pageX),
				y: Math.round(e.pageY)
			};
		}
		return (e, t) => (o(), P(z(zl), {
			"as-child": "",
			reference: e.reference
		}, {
			default: u(() => [W(z(X), {
				ref: z(r),
				role: "combobox",
				type: e.as === "button" ? "button" : void 0,
				"aria-controls": z(n).contentId,
				"aria-expanded": z(n).open.value || !1,
				"aria-required": z(n).required?.value,
				"aria-autocomplete": "none",
				disabled: a.value,
				dir: z(n)?.dir.value,
				"data-state": z(n)?.open.value ? "open" : "closed",
				"data-disabled": a.value ? "" : void 0,
				"data-placeholder": z(y_)(z(n).modelValue?.value) ? "" : void 0,
				"as-child": e.asChild,
				as: e.as,
				onClick: t[0] ||= (e) => {
					(e?.currentTarget)?.focus();
				},
				onPointerdown: t[1] ||= (e) => {
					if (e.pointerType === "touch") return e.preventDefault();
					let t = e.target;
					t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && (m(e), e.preventDefault());
				},
				onPointerup: t[2] ||= k((e) => {
					e.pointerType === "touch" && m(e);
				}, ["prevent"]),
				onKeydown: t[3] ||= (e) => {
					let t = z(c) !== "";
					!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && t && e.key === " " || (z(l)(e.key, z(s)()), z(h_).includes(e.key) && (f(), e.preventDefault()));
				}
			}, {
				default: u(() => [v(e.$slots, "default")]),
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
}), q_ = /* @__PURE__ */ U({
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
		let t = e, { forwardRef: n, currentElement: r } = q(), i = x_();
		p(() => {
			i.valueElement = r;
		});
		let a = R(() => {
			let e = [], t = Array.from(i.optionsSet.value), n = (e) => t.find((t) => __(e, t.value, i.by));
			return e = Array.isArray(i.modelValue.value) ? i.modelValue.value.map((e) => n(e)?.textContent ?? "") : [n(i.modelValue.value)?.textContent ?? ""], e.filter(Boolean);
		}), s = R(() => a.value.length ? a.value.join(", ") : t.placeholder);
		return (e, r) => (o(), P(z(X), {
			ref: z(n),
			as: e.as,
			"as-child": e.asChild,
			style: { pointerEvents: "none" },
			"data-placeholder": a.value.length ? void 0 : t.placeholder
		}, {
			default: u(() => [v(e.$slots, "default", {
				selectedLabel: a.value,
				modelValue: z(i).modelValue.value
			}, () => [V(H(s.value), 1)])]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-placeholder"
		]));
	}
}), J_ = /* @__PURE__ */ U({
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
		let t = e, { nonce: n } = we(t), r = rf(n), i = D_(), a = i.position === "item-aligned" ? A_() : void 0, { forwardRef: s, currentElement: c } = q();
		p(() => {
			i?.onViewportChange(c.value);
		});
		let l = O(0);
		function d(e) {
			let t = e.currentTarget, { shouldExpandOnScrollRef: n, contentWrapper: r } = a ?? {};
			if (n?.value && r?.value) {
				let e = Math.abs(l.value - t.scrollTop);
				if (e > 0) {
					let n = window.innerHeight - 20, i = Number.parseFloat(r.value.style.minHeight), a = Number.parseFloat(r.value.style.height), o = Math.max(i, a);
					if (o < n) {
						let i = o + e, a = Math.min(n, i), s = i - a;
						r.value.style.height = `${a}px`, r.value.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, r.value.style.justifyContent = "flex-end");
					}
				}
			}
			l.value = t.scrollTop;
		}
		return (e, n) => (o(), E(B, null, [W(z(X), I({
			ref: z(s),
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
			onScroll: d
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16), W(z(X), {
			as: "style",
			nonce: z(r)
		}, {
			default: u(() => n[0] ||= [V(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")]),
			_: 1,
			__: [0]
		}, 8, ["nonce"])], 64));
	}
}), Y_ = /* @__PURE__ */ U({
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
		let i = R(() => r(t.orientation) ? t.orientation : "horizontal"), a = R(() => i.value === "vertical" ? t.orientation : void 0), s = R(() => t.decorative ? { role: "none" } : {
			"aria-orientation": a.value,
			role: "separator"
		});
		return (e, t) => (o(), P(z(X), I({
			as: e.as,
			"as-child": e.asChild,
			"data-orientation": i.value
		}, s.value), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, [
			"as",
			"as-child",
			"data-orientation"
		]));
	}
}), X_ = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(Y_, N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/utils/assert.js
function Z_(e, t = "Assertion failed!") {
	if (!e) throw console.error(t), Error(t);
}
//#endregion
//#region node_modules/reka-ui/dist/utils/dom.js
function Q_(e, t = document) {
	return vr ? t instanceof HTMLElement && t?.dataset?.panelGroupId === e ? t : t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`) || null : null;
}
function $_(e, t = document) {
	return vr && t.querySelector(`[data-panel-resize-handle-id="${e}"]`) || null;
}
function ev(e, t, n = document) {
	return vr ? tv(e, n).findIndex((e) => e.getAttribute("data-panel-resize-handle-id") === t) ?? null : null;
}
function tv(e, t = document) {
	return vr ? Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`)) : [];
}
function nv(e, t, n, r = document) {
	let i = $_(t, r), a = tv(e, r), o = i ? a.indexOf(i) : -1;
	return [n[o]?.id ?? null, n[o + 1]?.id ?? null];
}
//#endregion
//#region node_modules/reka-ui/dist/utils/events.js
function rv(e) {
	return e.type === "keydown";
}
function iv(e) {
	return e.type.startsWith("mouse");
}
function av(e) {
	return e.type.startsWith("touch");
}
function ov(e) {
	if (iv(e)) return {
		x: e.clientX,
		y: e.clientY
	};
	if (av(e)) {
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
function sv(e, t) {
	let n = e === "horizontal", { x: r, y: i } = ov(t);
	return n ? r : i;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/calculate.js
function cv(e, t, n, r, i) {
	let a = n === "horizontal", o = $_(t, i);
	Z_(o);
	let s = o.getAttribute("data-panel-group-id");
	Z_(s);
	let { initialCursorPosition: c } = r, l = sv(n, e), u = Q_(s, i);
	Z_(u);
	let d = u.getBoundingClientRect(), f = a ? d.width : d.height;
	return (l - c) / f * 100;
}
function lv(e, t, n, r, i, a) {
	if (rv(e)) {
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
	} else return r == null ? 0 : cv(e, t, n, r, a);
}
function uv({ layout: e, panelsArray: t, pivotIndices: n }) {
	let r = 0, i = 100, a = 0, o = 0, s = n[0];
	return Z_(s != null), t.forEach((e, t) => {
		let { constraints: n } = e, { maxSize: c = 100, minSize: l = 0 } = n;
		t === s ? (r = l, i = c) : (a += l, o += c);
	}), {
		valueMax: Math.min(i, 100 - a),
		valueMin: Math.max(r, 100 - o),
		valueNow: e[s]
	};
}
function dv({ panelDataArray: e }) {
	let t = Array.from({ length: e.length }), n = e.map((e) => e.constraints), r = 0, i = 100;
	for (let a = 0; a < e.length; a++) {
		let e = n[a];
		Z_(e);
		let { defaultSize: o } = e;
		o != null && (r++, t[a] = o, i -= o);
	}
	for (let a = 0; a < e.length; a++) {
		let o = n[a];
		Z_(o);
		let { defaultSize: s } = o;
		if (s != null) continue;
		let c = e.length - r, l = i / c;
		r++, t[a] = l, i -= l;
	}
	return t;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/compare.js
function fv(e, t, n = 10) {
	e = Number.parseFloat(e.toFixed(n)), t = Number.parseFloat(t.toFixed(n));
	let r = e - t;
	return r === 0 ? 0 : r > 0 ? 1 : -1;
}
function pv(e, t, n) {
	return fv(e, t, n) === 0;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/callPanelCallbacks.js
function mv(e, t, n, r) {
	t.forEach((t, i) => {
		let a = e[i];
		Z_(a);
		let { callbacks: o, constraints: s, id: c } = a, { collapsedSize: l = 0, collapsible: u, sizeUnit: d } = s, f = t;
		d === "px" && r != null && (f = t / 100 * r);
		let p = n[c];
		if (p == null || !pv(f, p)) {
			n[c] = f;
			let { onCollapse: e, onExpand: t, onResize: r } = o;
			r && r(f, p), u && (e || t) && (t && (p == null || pv(p, l)) && !pv(f, l) && t(), e && (p == null || !pv(p, l)) && pv(f, l) && e());
		}
	});
}
//#endregion
//#region node_modules/reka-ui/dist/utils/debounce.js
function hv(e, t = 10) {
	let n = null;
	return (...r) => {
		n !== null && clearTimeout(n), n = setTimeout(() => {
			e(...r);
		}, t);
	};
}
//#endregion
//#region node_modules/reka-ui/dist/utils/resizePanel.js
function gv({ panelConstraints: e, panelIndex: t, size: n }) {
	let r = e[t];
	Z_(r != null);
	let { collapsedSize: i = 0, collapsible: a, maxSize: o = 100, minSize: s = 0 } = r;
	if (fv(n, s) < 0) if (a) {
		let e = (i + s) / 2;
		n = fv(n, e) < 0 ? i : s;
	} else n = s;
	return n = Math.min(o, n), n = Number.parseFloat(n.toFixed(10)), n;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/layout.js
function _v(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function vv({ delta: e, layout: t, panelConstraints: n, pivotIndices: r, trigger: i }) {
	if (pv(e, 0)) return t;
	let a = [...t], [o, s] = r;
	Z_(o != null), Z_(s != null);
	let c = 0;
	if (i === "keyboard") {
		{
			let r = e < 0 ? s : o, i = n[r];
			if (Z_(i), i.collapsible) {
				let i = t[r];
				Z_(i != null);
				let a = n[r];
				Z_(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (pv(i, o)) {
					let t = s - i;
					fv(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
		{
			let r = e < 0 ? o : s, i = n[r];
			Z_(i);
			let { collapsible: a } = i;
			if (a) {
				let i = t[r];
				Z_(i != null);
				let a = n[r];
				Z_(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (pv(i, s)) {
					let t = i - o;
					fv(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
	}
	{
		let r = e < 0 ? 1 : -1, i = e < 0 ? s : o, a = 0;
		for (;;) {
			let e = t[i];
			Z_(e != null);
			let o = gv({
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
			Z_(o != null);
			let s = o - i, l = gv({
				panelConstraints: n,
				panelIndex: r,
				size: s
			});
			if (!pv(o, l) && (c += o - l, a[r] = l, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, { numeric: !0 }) >= 0)) break;
			e < 0 ? r-- : r++;
		}
	}
	if (pv(c, 0)) return t;
	{
		let r = e < 0 ? s : o, i = t[r];
		Z_(i != null);
		let l = i + c, u = gv({
			panelConstraints: n,
			panelIndex: r,
			size: l
		});
		if (a[r] = u, !pv(u, l)) {
			let t = l - u, r = e < 0 ? s : o;
			for (; r >= 0 && r < n.length;) {
				let i = a[r];
				Z_(i != null);
				let o = i + t, s = gv({
					panelConstraints: n,
					panelIndex: r,
					size: o
				});
				if (pv(i, s) || (t -= s - i, a[r] = s), pv(t, 0)) break;
				e > 0 ? r-- : r++;
			}
		}
	}
	return pv(a.reduce((e, t) => t + e, 0), 100) ? a : t;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/pivot.js
function yv(e, t, n) {
	let r = ev(e, t, n);
	return r == null ? [-1, -1] : [r, r + 1];
}
//#endregion
//#region node_modules/reka-ui/dist/utils/rects.js
function bv(e, t, n) {
	return n ? e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y : e.x <= t.x + t.width && e.x + e.width >= t.x && e.y <= t.y + t.height && e.y + e.height >= t.y;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/stackingOrder.js
function xv(e, t) {
	if (e === t) throw Error("Cannot compare node with itself");
	let n = {
		a: Dv(e),
		b: Dv(t)
	}, r;
	for (; n.a.at(-1) === n.b.at(-1);) e = n.a.pop(), t = n.b.pop(), r = e;
	Z_(r);
	let i = {
		a: Ev(Tv(n.a)),
		b: Ev(Tv(n.b))
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
var Sv = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function Cv(e) {
	let t = getComputedStyle(Ov(e)).display;
	return t === "flex" || t === "inline-flex";
}
function wv(e) {
	let t = getComputedStyle(e);
	return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || Cv(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || Sv.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function Tv(e) {
	let t = e.length;
	for (; t--;) {
		let n = e[t];
		if (Z_(n), wv(n)) return n;
	}
	return null;
}
function Ev(e) {
	return e && Number(getComputedStyle(e).zIndex) || 0;
}
function Dv(e) {
	let t = [];
	for (; e;) t.push(e), e = Ov(e);
	return t;
}
function Ov(e) {
	return e.parentNode instanceof DocumentFragment && e.parentNode?.host || e.parentNode;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/registry.js
function kv() {
	if (typeof matchMedia == "function") return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
var Av = kv() === "coarse", jv = [], Mv = !1, Nv = /* @__PURE__ */ new Map(), Pv = /* @__PURE__ */ new Map(), Fv = /* @__PURE__ */ new Set();
function Iv(e, t, n, r, i, a) {
	let { ownerDocument: o } = t, s = {
		direction: n,
		element: t,
		hitAreaMargins: r,
		nonce: i,
		setResizeHandlerState: a
	}, c = Nv.get(o) ?? 0;
	return Nv.set(o, c + 1), Fv.add(s), Uv(), function() {
		Pv.delete(e), Fv.delete(s);
		let t = Nv.get(o) ?? 1;
		Nv.set(o, t - 1), Uv(), Jv(), t === 1 && Nv.delete(o);
	};
}
function Lv(e) {
	let { target: t } = e, { x: n, y: r } = ov(e);
	Mv = !0, Bv({
		target: t,
		x: n,
		y: r
	}), Uv(), jv.length > 0 && (Wv("down", e), e.preventDefault());
}
function Rv(e) {
	let { x: t, y: n } = ov(e);
	if (!Mv) {
		let { target: r } = e;
		Bv({
			target: r,
			x: t,
			y: n
		});
	}
	Wv("move", e), Hv(), jv.length > 0 && e.preventDefault();
}
function zv(e) {
	let { target: t } = e, { x: n, y: r } = ov(e);
	Pv.clear(), Mv = !1, jv.length > 0 && e.preventDefault(), Wv("up", e), Bv({
		target: t,
		x: n,
		y: r
	}), Hv(), Uv();
}
function Bv({ target: e, x: t, y: n }) {
	jv.splice(0);
	let r = null;
	e instanceof HTMLElement && (r = e), Fv.forEach((e) => {
		let { element: i, hitAreaMargins: a } = e, o = i.getBoundingClientRect(), { bottom: s, left: c, right: l, top: u } = o, d = Av ? a.coarse : a.fine;
		if (t >= c - d && t <= l + d && n >= u - d && n <= s + d) {
			if (r !== null && i !== r && !i.contains(r) && !r.contains(i) && xv(r, i) > 0) {
				let e = r, t = !1;
				for (; e && !e.contains(i);) {
					if (bv(e.getBoundingClientRect(), o, !0)) {
						t = !0;
						break;
					}
					e = e.parentElement;
				}
				if (t) return;
			}
			jv.push(e);
		}
	});
}
function Vv(e, t) {
	Pv.set(e, t);
}
function Hv() {
	let e = !1, t = !1, n;
	jv.forEach((r) => {
		let { direction: i, nonce: a } = r;
		i.value === "horizontal" ? e = !0 : t = !0, n = a.value;
	});
	let r = 0;
	Pv.forEach((e) => {
		r |= e;
	}), e && t ? Yv("intersection", r, n) : e ? Yv("horizontal", r, n) : t ? Yv("vertical", r, n) : Jv();
}
function Uv() {
	Nv.forEach((e, t) => {
		let { body: n } = t;
		n.removeEventListener("contextmenu", zv), n.removeEventListener("mousedown", Lv), n.removeEventListener("mouseleave", Rv), n.removeEventListener("mousemove", Rv), n.removeEventListener("touchmove", Rv), n.removeEventListener("touchstart", Lv);
	}), window.removeEventListener("mouseup", zv), window.removeEventListener("touchcancel", zv), window.removeEventListener("touchend", zv), Fv.size > 0 && (Mv ? (jv.length > 0 && Nv.forEach((e, t) => {
		let { body: n } = t;
		e > 0 && (n.addEventListener("contextmenu", zv), n.addEventListener("mouseleave", Rv), n.addEventListener("mousemove", Rv), n.addEventListener("touchmove", Rv, { passive: !1 }));
	}), window.addEventListener("mouseup", zv), window.addEventListener("touchcancel", zv), window.addEventListener("touchend", zv)) : Nv.forEach((e, t) => {
		let { body: n } = t;
		e > 0 && (n.addEventListener("mousedown", Lv), n.addEventListener("mousemove", Rv), n.addEventListener("touchmove", Rv, { passive: !1 }), n.addEventListener("touchstart", Lv));
	}));
}
function Wv(e, t) {
	Fv.forEach((n) => {
		let { setResizeHandlerState: r } = n;
		r(e, jv.includes(n), t);
	});
}
//#endregion
//#region node_modules/reka-ui/dist/utils/style.js
var Gv = null, Kv = null;
function qv(e, t) {
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
function Jv() {
	Kv !== null && (document.head.removeChild(Kv), Gv = null, Kv = null);
}
function Yv(e, t, n) {
	let r = qv(e, t);
	Gv !== r && (Gv = r, Kv === null && (Kv = document.createElement("style"), n && (Kv.nonce = n), document.head.appendChild(Kv)), Kv.innerHTML = `*{cursor: ${r}!important;}`);
}
function Xv({ defaultSize: e, dragState: t, layout: n, panelData: r, panelIndex: i, precision: a = 3 }) {
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
function Zv({ sizeUnit: e, groupSizeInPixels: t, value: n }) {
	if (n == null || e === "%") return n;
	if (!(t == null || t === 0)) return n / t * 100;
}
function Qv({ panelDataArray: e, groupSizeInPixels: t }) {
	return e.some((e) => (e.constraints.sizeUnit ?? "%") === "px") && (!t || Number.isNaN(t)) ? null : e.map((e) => {
		let n = e.constraints, r = n.sizeUnit ?? "%", i = Zv({
			groupSizeInPixels: t,
			sizeUnit: r,
			value: n.collapsedSize
		}), a = Zv({
			groupSizeInPixels: t,
			sizeUnit: r,
			value: n.defaultSize
		}), o = Zv({
			groupSizeInPixels: t,
			sizeUnit: r,
			value: n.maxSize
		}), s = Zv({
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
function $v(e) {
	return e.some((e) => (e.constraints.sizeUnit ?? "%") === "px");
}
function ey({ layout: e, panelDataArray: t, prevGroupSize: n, nextGroupSize: r }) {
	if (!$v(t) || n == null || r == null || n === 0 || r === 0 || Number.isNaN(n) || Number.isNaN(r)) return null;
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
function ty({ layout: e, panelConstraints: t }) {
	let n = [...e], r = n.reduce((e, t) => e + t, 0);
	if (n.length !== t.length) throw Error(`Invalid ${t.length} panel layout: ${n.map((e) => `${e}%`).join(", ")}`);
	if (!pv(r, 100)) {
		console.warn(`WARNING: Invalid layout total size: ${n.map((e) => `${e}%`).join(", ")}. Layout normalization will be applied.`);
		for (let e = 0; e < t.length; e++) {
			let t = n[e];
			Z_(t != null), n[e] = 100 / r * t;
		}
	}
	let i = 0;
	for (let e = 0; e < t.length; e++) {
		let r = n[e];
		Z_(r != null);
		let a = gv({
			panelConstraints: t,
			panelIndex: e,
			size: r
		});
		r !== a && (i += r - a, n[e] = a);
	}
	if (!pv(i, 0)) for (let e = 0; e < t.length; e++) {
		let r = n[e];
		Z_(r != null);
		let a = r + i, o = gv({
			panelConstraints: t,
			panelIndex: e,
			size: a
		});
		if (r !== o && (i -= o - r, n[e] = o, pv(i, 0))) break;
	}
	return n;
}
//#endregion
//#region node_modules/reka-ui/dist/composables/useWindowSplitterPanelGroupBehavior.js
function ny({ eagerValuesRef: e, groupId: t, layout: n, panelDataArray: r, panelGroupElement: i, setLayout: a, getPanelDataWithPercentConstraints: o }) {
	s((e) => {
		let r = i.value;
		if (!r) return;
		let a = o();
		if (!a) return;
		let s = tv(t, r);
		for (let e = 0; e < a.length - 1; e++) {
			let { valueMax: t, valueMin: r, valueNow: i } = uv({
				layout: n.value,
				panelsArray: a,
				pivotIndices: [e, e + 1]
			}), o = s[e];
			if (o != null) {
				let n = a[e];
				Z_(n), o.setAttribute("aria-controls", n.id), o.setAttribute("aria-valuemax", `${Math.round(t)}`), o.setAttribute("aria-valuemin", `${Math.round(r)}`), o.setAttribute("aria-valuenow", i == null ? "" : `${Math.round(i)}`);
			}
		}
		e(() => {
			s.forEach((e) => {
				e.removeAttribute("aria-controls"), e.removeAttribute("aria-valuemax"), e.removeAttribute("aria-valuemin"), e.removeAttribute("aria-valuenow");
			});
		});
	}), s((r) => {
		let s = i.value;
		if (!s) return;
		let c = e.value;
		Z_(c);
		let l = o();
		if (!l) return;
		let { panelDataArray: u } = c;
		Z_(Q_(t, s) != null, `No group found for id "${t}"`);
		let d = tv(t, s);
		Z_(d);
		let f = d.map((e) => {
			let r = e.getAttribute("data-panel-resize-handle-id");
			Z_(r);
			let [i, o] = nv(t, r, u, s);
			if (i == null || o == null) return () => {};
			let c = (e) => {
				if (!e.defaultPrevented) switch (e.key) {
					case "Enter": {
						e.preventDefault();
						let o = l.findIndex((e) => e.id === i);
						if (o >= 0) {
							let e = l[o];
							Z_(e);
							let i = n.value[o], { collapsedSize: c = 0, collapsible: u, minSize: d = 0 } = e.constraints;
							if (i != null && u) {
								let e = vv({
									delta: pv(i, c) ? d - c : c - i,
									layout: n.value,
									panelConstraints: l.map((e) => e.constraints),
									pivotIndices: yv(t, r, s),
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
function ry(e) {
	try {
		if (typeof localStorage < "u") e.getItem = (e) => localStorage.getItem(e), e.setItem = (e, t) => {
			localStorage.setItem(e, t);
		};
		else throw TypeError("localStorage not supported in this environment");
	} catch (t) {
		console.error(t), e.getItem = () => null, e.setItem = () => {};
	}
}
function iy(e) {
	return `reka:${e}`;
}
function ay(e) {
	return e.map((e) => {
		let { constraints: t, id: n, idIsFromProps: r, order: i } = e;
		return r ? n : i ? `${i}:${JSON.stringify(t)}` : JSON.stringify(t);
	}).sort((e, t) => e.localeCompare(t)).join(",");
}
function oy(e, t) {
	try {
		let n = iy(e), r = t.getItem(n);
		if (r) {
			let e = JSON.parse(r);
			if (typeof e == "object" && e) return e;
		}
	} catch {}
	return null;
}
function sy(e, t, n) {
	return (oy(e, n) ?? {})[ay(t)] ?? null;
}
function cy(e, t, n, r, i) {
	let a = iy(e), o = ay(t), s = oy(e, i) ?? {}, c = {};
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
var ly = 100, uy = {
	getItem: (e) => (ry(uy), uy.getItem(e)),
	setItem: (e, t) => {
		ry(uy), uy.setItem(e, t);
	}
}, [dy, fy] = /* @__PURE__ */ K("PanelGroup"), py = /* @__PURE__ */ U({
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
			default: () => uy
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
		let n = e, r = t, i = {}, { direction: a } = we(n), c = ws(n.id, "reka-splitter-group"), l = $o(), { forwardRef: d, currentElement: f } = q(), p = O(null), m = O(null), h = O(null), g = O([]), _ = O({}), y = O(/* @__PURE__ */ new Map()), b = O(0), x = R(() => ({
			autoSaveId: n.autoSaveId,
			direction: n.direction,
			dragState: p.value,
			id: c,
			keyboardResizeBy: n.keyboardResizeBy,
			storage: n.storage
		})), S = O({
			layout: g.value,
			panelDataArray: [],
			panelDataArrayChanged: !1
		});
		function w() {
			if (m.value != null) return m.value;
			let e = f.value;
			if (e && e instanceof HTMLElement) {
				let t = e.getBoundingClientRect(), n = a.value === "horizontal" ? t.width : t.height;
				if (!Number.isNaN(n)) return m.value = n, n;
			}
			return null;
		}
		function T(e) {
			let t = e ?? w();
			return Qv({
				panelDataArray: S.value.panelDataArray,
				groupSizeInPixels: t
			});
		}
		function ee(e) {
			let t = T(e);
			return t ? S.value.panelDataArray.map((e, n) => ({
				...e,
				constraints: t[n]
			})) : null;
		}
		let E = (e) => g.value = e;
		function te(e) {
			let { panelDataArray: t } = S.value, n = w();
			return e.map((e, r) => {
				let i = t[r];
				return i && (i.constraints.sizeUnit ?? "%") === "px" && n != null ? e / 100 * n : e;
			});
		}
		ny({
			eagerValuesRef: S,
			groupId: c,
			layout: g,
			panelDataArray: S.value.panelDataArray,
			setLayout: E,
			panelGroupElement: f,
			getPanelDataWithPercentConstraints: ee
		}), s((e) => {
			let t = f.value;
			if (!t || typeof ResizeObserver != "function") return;
			let n = new ResizeObserver((e) => {
				let t = e[0];
				if (!t) return;
				let { height: n, width: r } = t.contentRect, i = a.value === "horizontal" ? r : n;
				Number.isNaN(i) || (m.value = i);
			});
			t instanceof HTMLElement && n.observe(t), e(() => n.disconnect());
		}), s(() => {
			let { panelDataArray: e } = S.value, { autoSaveId: t } = n;
			if (t) {
				if (g.value.length === 0 || g.value.length !== e.length) return;
				let r = i[t];
				r || (r = hv(cy, ly), i[t] = r);
				let a = [...e], o = new Map(y.value);
				r(t, a, o, g.value, n.storage);
			}
		});
		function ne(e, t) {
			let { panelDataArray: n } = S.value, r = le(n, e);
			return Xv({
				defaultSize: t,
				dragState: p.value,
				layout: g.value,
				panelData: n,
				panelIndex: r
			});
		}
		function k(e) {
			let { panelDataArray: t } = S.value;
			t.push(e), t.sort((e, t) => {
				let n = e.order, r = t.order;
				return n == null && r == null ? 0 : n == null ? -1 : r == null ? 1 : n - r;
			}), S.value.panelDataArrayChanged = !0;
		}
		C(() => S.value.panelDataArrayChanged, () => {
			if (S.value.panelDataArrayChanged) {
				S.value.panelDataArrayChanged = !1;
				let { autoSaveId: e, storage: t } = x.value, { layout: n, panelDataArray: i } = S.value, a = null;
				if (e) {
					let n = sy(e, i, t);
					n && (y.value = new Map(Object.entries(n.expandToSizes)), a = n.layout);
				}
				if (a === null) {
					let e = ee();
					if (!e) return;
					a = dv({ panelDataArray: e });
				}
				let o = T();
				if (!o) return;
				let s = ty({
					layout: a,
					panelConstraints: o
				});
				h.value = w(), gr(n, s) || (E(s), S.value.layout = s, r("layout", te(s)), mv(i, s, _.value, w()));
			}
		}), C(m, (e, t) => {
			if (t == null || e == null) return;
			let { layout: n, panelDataArray: i } = S.value;
			if (n.length === 0 || !$v(i)) return;
			let a = h.value;
			if (a != null && a > 0 && a < 50 && e > a * 10) {
				S.value.panelDataArrayChanged = !0;
				return;
			}
			let o = ey({
				layout: n,
				panelDataArray: i,
				prevGroupSize: t,
				nextGroupSize: e
			});
			if (!o) return;
			let s = T(e);
			if (!s) return;
			let c = ty({
				layout: o,
				panelConstraints: s
			});
			_v(n, c) || (E(c), S.value.layout = c, r("layout", te(c)), mv(i, c, _.value, w()));
		});
		function re(e) {
			return function(t) {
				t.preventDefault();
				let n = f.value;
				if (!n) return () => null;
				let { direction: i, dragState: a, id: o, keyboardResizeBy: s } = x.value, { layout: c, panelDataArray: u } = S.value, { initialLayout: d } = a ?? {}, p = yv(o, e, n), m = lv(t, e, i, a, s, n);
				if (m === 0) return;
				let h = i === "horizontal";
				l.value === "rtl" && h && (m = -m);
				let g = T();
				if (!g) return;
				let v = vv({
					delta: m,
					layout: d ?? c,
					panelConstraints: g,
					pivotIndices: p,
					trigger: rv(t) ? "keyboard" : "mouse-or-touch"
				}), y = !_v(c, v);
				(iv(t) || av(t)) && b.value !== m && (b.value = m, y ? Vv(e, 0) : h ? Vv(e, m < 0 ? 1 : 2) : Vv(e, m < 0 ? 4 : 8)), y && (E(v), S.value.layout = v, r("layout", te(v)), mv(u, v, _.value, w()));
			};
		}
		function ie(e, t) {
			let { layout: n, panelDataArray: i } = S.value, a = T();
			if (!a) return;
			let o = le(i, e), s = e.constraints.sizeUnit ?? "%", c = t;
			if (s === "px") {
				let e = w();
				e != null && (c = t / e * 100);
			}
			let { panelSize: l, pivotIndices: u } = I(i, e, n, a);
			Z_(l != null);
			let d = vv({
				delta: o === i.length - 1 ? l - c : c - l,
				layout: n,
				panelConstraints: a,
				pivotIndices: u,
				trigger: "imperative-api"
			});
			_v(n, d) || (E(d), S.value.layout = d, r("layout", te(d)), mv(i, d, _.value, w()));
		}
		function A(e, t) {
			let { layout: n, panelDataArray: r } = S.value, i = le(r, e);
			r[i] = e, S.value.panelDataArrayChanged = !0;
			let a = T();
			if (!a) return;
			let o = a[i], { panelSize: s } = I(r, e, n, a);
			if (s === null) return;
			let c = o?.collapsedSize ?? 0, l = o?.maxSize ?? 100, u = o?.minSize ?? 0;
			o?.collapsible && se(e) ? s !== c && ie(e, c) : s < u ? ie(e, u) : s > l && ie(e, l);
		}
		function j(e, t) {
			let { direction: n } = x.value, { layout: r } = S.value;
			if (!f.value) return;
			let i = $_(e, f.value);
			Z_(i);
			let a = sv(n, t);
			p.value = {
				dragHandleId: e,
				dragHandleRect: i.getBoundingClientRect(),
				initialCursorPosition: a,
				initialLayout: r
			};
		}
		function ae() {
			p.value = null;
		}
		function oe(e) {
			let { panelDataArray: t } = S.value, n = le(t, e);
			n >= 0 && (t.splice(n, 1), delete _.value[e.id], S.value.panelDataArrayChanged = !0);
		}
		function M(e) {
			let { layout: t, panelDataArray: n } = S.value;
			if (e.constraints.collapsible) {
				let i = T();
				if (!i) return;
				let { collapsedSize: a = 0, panelSize: o, pivotIndices: s } = I(n, e, t, i);
				if (Z_(o != null, `Panel size not found for panel "${e.id}"`), o !== a) {
					let c = e.constraints.sizeUnit ?? "%", l = m.value ?? w(), u = c === "px" && l ? o / 100 * l : o;
					y.value.set(e.id, u);
					let d = vv({
						delta: le(n, e) === n.length - 1 ? o - a : a - o,
						layout: t,
						panelConstraints: i,
						pivotIndices: s,
						trigger: "imperative-api"
					});
					_v(t, d) || (E(d), S.value.layout = d, r("layout", te(d)), mv(n, d, _.value, w()));
				}
			}
		}
		function N(e) {
			let { layout: t, panelDataArray: n } = S.value;
			if (e.constraints.collapsible) {
				let i = T();
				if (!i) return;
				let { collapsedSize: a = 0, panelSize: o = 0, minSize: s = 0, pivotIndices: c } = I(n, e, t, i);
				if (fv(o, a) <= 0) {
					let a = y.value.get(e.id), l = e.constraints.sizeUnit ?? "%", u = m.value ?? w(), d = l === "px" && u ? a == null ? null : a / u * 100 : a, f = d != null && d >= s ? d : s, p = vv({
						delta: le(n, e) === n.length - 1 ? o - f : f - o,
						layout: t,
						panelConstraints: i,
						pivotIndices: c,
						trigger: "imperative-api"
					});
					_v(t, p) || (E(p), S.value.layout = p, r("layout", te(p)), mv(n, p, _.value, w()));
				}
			}
		}
		function F(e) {
			let { layout: t, panelDataArray: n } = S.value, { panelSize: r } = I(n, e, t);
			if (Z_(r != null, `Panel size not found for panel "${e.id}"`), (e.constraints.sizeUnit ?? "%") === "px") {
				let e = w();
				if (e != null) return r / 100 * e;
			}
			return r;
		}
		function se(e) {
			let { layout: t, panelDataArray: n } = S.value, r = T(), { collapsedSize: i = 0, collapsible: a, panelSize: o } = I(n, e, t, r ?? void 0);
			if (!a) return !1;
			if (o === void 0) {
				let t = le(n, e), i = r?.[t] ?? e.constraints;
				return i.defaultSize === i.collapsedSize;
			} else return o === i;
		}
		function ce(e) {
			let { layout: t, panelDataArray: n } = S.value, { collapsedSize: r = 0, collapsible: i, panelSize: a } = I(n, e, t, T() ?? void 0);
			return Z_(a != null, `Panel size not found for panel "${e.id}"`), !i || a > r;
		}
		fy({
			direction: a,
			dragState: p.value,
			groupId: c,
			reevaluatePanelConstraints: A,
			registerPanel: k,
			registerResizeHandle: re,
			resizePanel: ie,
			startDragging: j,
			stopDragging: ae,
			unregisterPanel: oe,
			panelGroupElement: f,
			collapsePanel: M,
			expandPanel: N,
			isPanelCollapsed: se,
			isPanelExpanded: ce,
			getPanelSize: F,
			getPanelStyle: ne
		});
		function le(e, t) {
			return e.findIndex((e) => e === t || e.id === t.id);
		}
		function I(e, t, n, r) {
			let i = le(e, t), a = i === e.length - 1 ? [i - 1, i] : [i, i + 1], o = (r ?? T())?.[i], s = n[i];
			return {
				...o ?? t.constraints,
				panelSize: s,
				pivotIndices: a
			};
		}
		return (e, t) => (o(), P(z(X), {
			ref: z(d),
			as: e.as,
			"as-child": e.asChild,
			style: D({
				display: "flex",
				flexDirection: z(a) === "horizontal" ? "row" : "column",
				height: "100%",
				overflow: "hidden",
				width: "100%"
			}),
			"data-panel-group": "",
			"data-orientation": z(a),
			"data-panel-group-id": z(c)
		}, {
			default: u(() => [v(e.$slots, "default", { layout: g.value })]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"style",
			"data-orientation",
			"data-panel-group-id"
		]));
	}
}), my = /* @__PURE__ */ U({
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
		let r = e, i = n, a = dy();
		if (a === null) throw Error("SplitterPanel components must be rendered within a SplitterGroup container");
		let { collapsePanel: s, expandPanel: c, getPanelSize: l, getPanelStyle: d, isPanelCollapsed: f, resizePanel: h, groupId: g, reevaluatePanelConstraints: _, registerPanel: y, unregisterPanel: b } = a, x = ws(r.id, "reka-splitter-panel"), S = R(() => ({
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
			id: x,
			idIsFromProps: r.id !== void 0,
			order: r.order
		}));
		C(() => S.value.constraints, (e, t) => {
			(t.collapsedSize !== e.collapsedSize || t.collapsible !== e.collapsible || t.maxSize !== e.maxSize || t.minSize !== e.minSize || t.sizeUnit !== e.sizeUnit) && _(S.value, t);
		}, { deep: !0 }), p(() => {
			y(S.value);
		}), m(() => {
			b(S.value);
		});
		let w = R(() => d(S.value, r.defaultSize)), T = R(() => f(S.value)), ee = R(() => !T.value);
		function E() {
			s(S.value);
		}
		function te() {
			c(S.value);
		}
		function O(e) {
			h(S.value, e);
		}
		return t({
			collapse: E,
			expand: te,
			getSize() {
				return l(S.value);
			},
			resize: O,
			isCollapsed: T,
			isExpanded: ee
		}), (e, t) => (o(), P(z(X), {
			id: z(x),
			style: D(w.value),
			as: e.as,
			"as-child": e.asChild,
			"data-panel": "",
			"data-panel-collapsible": e.collapsible || void 0,
			"data-panel-group-id": z(g),
			"data-panel-id": z(x),
			"data-panel-size": Number.parseFloat(`${w.value.flexGrow}`).toFixed(1),
			"data-state": e.collapsible ? T.value ? "collapsed" : "expanded" : void 0
		}, {
			default: u(() => [v(e.$slots, "default", {
				isCollapsed: T.value,
				isExpanded: ee.value,
				expand: te,
				collapse: E,
				resize: O
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
function hy({ disabled: e, handleId: t, resizeHandler: n, panelGroupElement: r }) {
	s((i) => {
		let a = r.value;
		if (e.value || n.value === null || a === null) return;
		let o = $_(t, a);
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
					Z_(n);
					let r = tv(n, a), i = ev(n, t, a);
					Z_(i !== null), r[e.shiftKey ? i > 0 ? i - 1 : r.length - 1 : i + 1 < r.length ? i + 1 : 0].focus();
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
var gy = /* @__PURE__ */ U({
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
		let n = e, r = t, { forwardRef: i, currentElement: a } = q(), { disabled: c } = we(n), l = dy();
		if (l === null) throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
		let { direction: d, groupId: f, registerResizeHandle: p, startDragging: m, stopDragging: h, panelGroupElement: g } = l, _ = ws(n.id, "reka-splitter-resize-handle"), y = O("inactive"), b = O(!1), x = O(null), { nonce: S } = we(n), w = rf(S);
		return C(c, () => {
			vr && (c.value ? x.value = null : x.value = p(_));
		}, { immediate: !0 }), s((e) => {
			if (c.value || x.value === null) return;
			let t = a.value;
			t && (Z_(t), e(Iv(_, t, d, {
				coarse: n.hitAreaMargins?.coarse ?? 15,
				fine: n.hitAreaMargins?.fine ?? 5
			}, w, (e, t, n) => {
				if (t) switch (e) {
					case "down":
						y.value = "drag", m(_, n), r("dragging", !0);
						break;
					case "move":
						y.value !== "drag" && (y.value = "hover"), x.value?.(n);
						break;
					case "up":
						y.value = "hover", h(), r("dragging", !1);
						break;
				}
				else y.value = "inactive";
			})));
		}), hy({
			disabled: c,
			resizeHandler: x,
			handleId: _,
			panelGroupElement: g
		}), (e, t) => (o(), P(z(X), {
			id: z(_),
			ref: z(i),
			style: {
				touchAction: "none",
				userSelect: "none"
			},
			as: e.as,
			"as-child": e.asChild,
			role: "separator",
			"data-resize-handle": "",
			tabindex: e.tabindex,
			"data-state": y.value,
			"data-disabled": z(c) ? "" : void 0,
			"data-orientation": z(d),
			"data-panel-group-id": z(f),
			"data-resize-handle-active": y.value === "drag" ? "pointer" : b.value ? "keyboard" : void 0,
			"data-resize-handle-state": y.value,
			"data-panel-resize-handle-enabled": !z(c),
			"data-panel-resize-handle-id": z(_),
			onBlur: t[0] ||= (e) => b.value = !1,
			onFocus: t[1] ||= (e) => b.value = !1
		}, {
			default: u(() => [v(e.$slots, "default")]),
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
}), _y = {
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
}, [vy, yy] = /* @__PURE__ */ K("StepperRoot"), by = /* @__PURE__ */ U({
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
	setup(e, { expose: n, emit: r }) {
		let i = e, a = r, { dir: s, orientation: c, linear: l } = we(i), d = $o(s), f = O(/* @__PURE__ */ new Set()), p = Bn(i, "modelValue", a, {
			defaultValue: i.defaultValue,
			passive: i.modelValue === void 0
		}), m = R(() => Array.from(f.value)), h = R(() => p.value === 1), g = R(() => p.value === m.value.length), _ = R(() => f.value.size);
		function y(e) {
			e > _.value || e < 1 || f.value.size && m.value[e] && m.value[e].getAttribute("disabled") || l.value && e > (p.value ?? 1) + 1 || (p.value = e);
		}
		function b() {
			y((p.value ?? 1) + 1);
		}
		function x() {
			y((p.value ?? 1) - 1);
		}
		function S() {
			return (p.value ?? 1) < _.value;
		}
		function w() {
			return (p.value ?? 1) > 1;
		}
		let T = O(null), ee = O(null), E = R(() => T.value ? T.value.getAttribute("disabled") === "" : !0), D = R(() => ee.value ? ee.value.getAttribute("disabled") === "" : !0);
		return C(p, async () => {
			await t(() => {
				T.value = m.value.length && p.value < m.value.length ? m.value[p.value] : null, ee.value = m.value.length && p.value > 1 ? m.value[p.value - 2] : null;
			});
		}), C(m, async () => {
			await t(() => {
				T.value = m.value.length && p.value < m.value.length ? m.value[p.value] : null, ee.value = m.value.length && p.value > 1 ? m.value[p.value - 2] : null;
			});
		}), yy({
			modelValue: p,
			changeModelValue: (e) => {
				p.value = e;
			},
			orientation: c,
			dir: d,
			linear: l,
			totalStepperItems: f
		}), n({
			goToStep: y,
			nextStep: b,
			prevStep: x,
			modelValue: p,
			totalSteps: _,
			isNextDisabled: E,
			isPrevDisabled: D,
			isFirstStep: h,
			isLastStep: g,
			hasNext: S,
			hasPrev: w
		}), q(), (e, t) => (o(), P(z(X), {
			role: "group",
			"aria-label": "progress",
			as: e.as,
			"as-child": e.asChild,
			"data-linear": z(l) ? "" : void 0,
			"data-orientation": e.orientation
		}, {
			default: u(() => [v(e.$slots, "default", {
				modelValue: z(p),
				totalSteps: f.value.size,
				isNextDisabled: E.value,
				isPrevDisabled: D.value,
				isFirstStep: h.value,
				isLastStep: g.value,
				goToStep: y,
				nextStep: b,
				prevStep: x,
				hasNext: S,
				hasPrev: w
			}), L("div", _y, " Step " + H(z(p)) + " of " + H(f.value.size), 1)]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-linear",
			"data-orientation"
		]));
	}
}), [xy, Sy] = /* @__PURE__ */ K("StepperItem"), Cy = /* @__PURE__ */ U({
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
		let { disabled: t, step: n, completed: r } = we(e), { forwardRef: i } = q(), a = vy(), s = ws(void 0, "reka-stepper-item-title"), c = ws(void 0, "reka-stepper-item-description"), l = R(() => r.value ? "completed" : a.modelValue.value === n.value ? "active" : a.modelValue.value > n.value ? "completed" : "inactive"), d = R(() => t.value ? !1 : a.linear.value ? n.value <= a.modelValue.value || n.value === a.modelValue.value + 1 : !0);
		return Sy({
			titleId: s,
			descriptionId: c,
			state: l,
			disabled: t,
			step: n,
			isFocusable: d
		}), (e, n) => (o(), P(z(X), {
			ref: z(i),
			as: e.as,
			"as-child": e.asChild,
			"aria-current": l.value === "active" ? "true" : void 0,
			"data-state": l.value,
			disabled: z(t) || !d.value ? "" : void 0,
			"data-disabled": z(t) || !d.value ? "" : void 0,
			"data-orientation": z(a).orientation.value
		}, {
			default: u(() => [v(e.$slots, "default", { state: l.value })]),
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
}), wy = /* @__PURE__ */ U({
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
		q();
		let n = xy();
		return (e, r) => (o(), P(z(X), I(t, { id: z(n).descriptionId }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), Ty = /* @__PURE__ */ U({
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
		let t = e, n = xy();
		return q(), (e, i) => (o(), P(z(X), N(r(t)), {
			default: u(() => [v(e.$slots, "default", { step: z(n).step.value }, () => [V(" Step " + H(z(n).step.value), 1)])]),
			_: 3
		}, 16));
	}
}), Ey = /* @__PURE__ */ U({
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
		let t = e, n = vy(), r = xy();
		return q(), (e, i) => (o(), P(z(X_), I(t, {
			decorative: "",
			orientation: z(n).orientation.value,
			"data-state": z(r).state.value
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["orientation", "data-state"]));
	}
}), Dy = /* @__PURE__ */ U({
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
		let t = e, n = xy();
		return q(), (e, r) => (o(), P(z(X), I(t, { id: z(n).titleId }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), Oy = /* @__PURE__ */ U({
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
		let t = vy(), n = xy(), r = Ts(), i = R(() => Array.from(t.totalStepperItems.value));
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
		function s(e) {
			e.preventDefault(), !n.disabled.value && ((e.key === r.ENTER || e.key === r.SPACE) && !e.ctrlKey && !e.shiftKey && t.changeModelValue(n.step.value), [
				r.ARROW_LEFT,
				r.ARROW_RIGHT,
				r.ARROW_UP,
				r.ARROW_DOWN
			].includes(e.key) && Or(e, Sr(), void 0, {
				itemsArray: i.value,
				focus: !0,
				loop: !1,
				arrowKeyOptions: t.orientation.value,
				dir: t.dir.value
			}));
		}
		let { forwardRef: c, currentElement: l } = q();
		return p(() => {
			t.totalStepperItems.value.add(l.value);
		}), m(() => {
			t.totalStepperItems.value.delete(l.value);
		}), (e, r) => (o(), P(z(X), {
			ref: z(c),
			type: e.as === "button" ? "button" : void 0,
			as: e.as,
			"as-child": e.asChild,
			"data-state": z(n).state.value,
			disabled: z(n).disabled.value || !z(n).isFocusable.value ? "" : void 0,
			"data-disabled": z(n).disabled.value || !z(n).isFocusable.value ? "" : void 0,
			"data-orientation": z(t).orientation.value,
			tabindex: z(n).isFocusable.value ? 0 : -1,
			"aria-describedby": z(n).descriptionId,
			"aria-labelledby": z(n).titleId,
			onMousedown: k(a, ["left"]),
			onKeydown: be(s, [
				"enter",
				"space",
				"left",
				"right",
				"up",
				"down"
			])
		}, {
			default: u(() => [v(e.$slots, "default")]),
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
}), [ky, Ay] = /* @__PURE__ */ K("SwitchRoot"), jy = /* @__PURE__ */ U({
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
		let n = e, r = t, { disabled: i } = we(n), a = Bn(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? n.falseValue,
			passive: n.modelValue === void 0
		}), s = R(() => a.value === n.trueValue);
		function c() {
			i.value || (a.value = s.value ? n.falseValue : n.trueValue);
		}
		let { forwardRef: l, currentElement: d } = q(), f = as(d), p = R(() => n.id && d.value ? document.querySelector(`[for="${n.id}"]`)?.innerText : void 0);
		return Ay({
			checked: s,
			toggleCheck: c,
			disabled: i
		}), (e, t) => (o(), P(z(X), I(e.$attrs, {
			id: e.id,
			ref: z(l),
			role: "switch",
			type: e.as === "button" ? "button" : void 0,
			value: e.value,
			"aria-label": e.$attrs["aria-label"] || p.value,
			"aria-checked": s.value,
			"aria-required": e.required,
			"data-state": s.value ? "checked" : "unchecked",
			"data-disabled": z(i) ? "" : void 0,
			"as-child": e.asChild,
			as: e.as,
			disabled: z(i),
			onClick: c,
			onKeydown: be(k(c, ["prevent"]), ["enter"])
		}), {
			default: u(() => [v(e.$slots, "default", {
				modelValue: z(a),
				checked: s.value
			}), z(f) && e.name ? (o(), P(z(pl), {
				key: 0,
				type: "checkbox",
				name: e.name,
				disabled: z(i),
				required: e.required,
				value: e.value,
				checked: s.value
			}, null, 8, [
				"name",
				"disabled",
				"required",
				"value",
				"checked"
			])) : M("v-if", !0)]),
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
}), My = /* @__PURE__ */ U({
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
		let t = ky();
		return q(), (e, n) => (o(), P(z(X), {
			"data-state": z(t).checked.value ? "checked" : "unchecked",
			"data-disabled": z(t).disabled.value ? "" : void 0,
			"as-child": e.asChild,
			as: e.as
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"data-state",
			"data-disabled",
			"as-child",
			"as"
		]));
	}
}), [Ny, Py] = /* @__PURE__ */ K("TabsRoot"), Fy = /* @__PURE__ */ U({
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
		let n = e, r = t, { orientation: i, unmountOnHide: a, dir: s } = we(n), c = $o(s);
		q();
		let l = Bn(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: n.modelValue === void 0
		}), d = O(), f = xe(/* @__PURE__ */ new Set());
		return Py({
			modelValue: l,
			changeModelValue: (e) => {
				l.value = e;
			},
			orientation: i,
			dir: c,
			unmountOnHide: a,
			activationMode: n.activationMode,
			baseId: ws(void 0, "reka-tabs"),
			tabsList: d,
			contentIds: f,
			registerContent: (e) => {
				f.value = new Set([...f.value, e]);
			},
			unregisterContent: (e) => {
				let t = new Set(f.value);
				t.delete(e), f.value = t;
			}
		}), (e, t) => (o(), P(z(X), {
			dir: z(c),
			"data-orientation": z(i),
			"as-child": e.asChild,
			as: e.as
		}, {
			default: u(() => [v(e.$slots, "default", { modelValue: z(l) })]),
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
function Iy(e, t) {
	return `${e}-trigger-${t}`;
}
function Ly(e, t) {
	return `${e}-content-${t}`;
}
//#endregion
//#region node_modules/reka-ui/dist/Tabs/TabsContent.js
var Ry = /* @__PURE__ */ U({
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
		let t = e, { forwardRef: n } = q(), r = Ny(), i = R(() => Iy(r.baseId, t.value)), a = R(() => Ly(r.baseId, t.value)), s = R(() => t.value === r.modelValue.value), c = O(s.value);
		return p(() => {
			r.registerContent(t.value), requestAnimationFrame(() => {
				c.value = !1;
			});
		}), le(() => {
			r.unregisterContent(t.value);
		}), (e, t) => (o(), P(z(Ps), {
			present: e.forceMount || s.value,
			"force-mount": ""
		}, {
			default: u(({ present: t }) => [W(z(X), {
				id: a.value,
				ref: z(n),
				"as-child": e.asChild,
				as: e.as,
				role: "tabpanel",
				"data-state": s.value ? "active" : "inactive",
				"data-orientation": z(r).orientation.value,
				"aria-labelledby": i.value,
				hidden: !t,
				tabindex: "0",
				style: D({ animationDuration: c.value ? "0s" : void 0 })
			}, {
				default: u(() => [!z(r).unmountOnHide.value || t ? v(e.$slots, "default", { key: 0 }) : M("v-if", !0)]),
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
}), zy = /* @__PURE__ */ U({
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
		let { loop: t } = we(e), { forwardRef: n, currentElement: r } = q(), i = Ny();
		return i.tabsList = r, (e, r) => (o(), P(z(If), {
			"as-child": "",
			orientation: z(i).orientation.value,
			dir: z(i).dir.value,
			loop: z(t)
		}, {
			default: u(() => [W(z(X), {
				ref: z(n),
				role: "tablist",
				"as-child": e.asChild,
				as: e.as,
				"aria-orientation": z(i).orientation.value
			}, {
				default: u(() => [v(e.$slots, "default")]),
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
}), By = /* @__PURE__ */ U({
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
		let t = e, { forwardRef: n } = q(), r = Ny(), i = R(() => Iy(r.baseId, t.value)), a = R(() => r.contentIds.value.has(t.value) ? Ly(r.baseId, t.value) : void 0), s = R(() => t.value === r.modelValue.value);
		return (e, t) => (o(), P(z(Lf), {
			"as-child": "",
			focusable: !e.disabled,
			active: s.value
		}, {
			default: u(() => [W(z(X), {
				id: i.value,
				ref: z(n),
				role: "tab",
				type: e.as === "button" ? "button" : void 0,
				as: e.as,
				"as-child": e.asChild,
				"aria-selected": s.value ? "true" : "false",
				"aria-controls": a.value,
				"data-state": s.value ? "active" : "inactive",
				disabled: e.disabled,
				"data-disabled": e.disabled ? "" : void 0,
				"data-orientation": z(r).orientation.value,
				onMousedown: t[0] ||= k((t) => {
					!e.disabled && t.ctrlKey === !1 ? z(r).changeModelValue(e.value) : t.preventDefault();
				}, ["left"]),
				onKeydown: t[1] ||= be((t) => z(r).changeModelValue(e.value), ["enter", "space"]),
				onFocus: t[2] ||= () => {
					let t = z(r).activationMode !== "manual";
					!s.value && !e.disabled && t && z(r).changeModelValue(e.value);
				}
			}, {
				default: u(() => [v(e.$slots, "default")]),
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
}), [Vy, Hy] = /* @__PURE__ */ K("TagsInputRoot"), Uy = /* @__PURE__ */ U({
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
		let n = e, r = t, { addOnPaste: i, disabled: a, delimiter: s, max: c, id: l, dir: d, addOnBlur: f, addOnTab: p } = we(n), m = $o(d), h = Bn(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: !0,
			deep: !0
		}), { forwardRef: g, currentElement: _ } = q(), { focused: y } = zn(_), b = as(_), { getItems: x, CollectionSlot: S } = ul({ isProvider: !0 }), C = O(), w = O(!1), T = R(() => Array.isArray(h.value) ? [...h.value] : []);
		function ee(e) {
			if (e !== -1) {
				let t = x().filter((e) => e.ref.dataset.disabled !== "");
				h.value = h.value.filter((t, n) => n !== e), r("removeTag", t[e].value);
			}
		}
		return Hy({
			modelValue: h,
			onAddValue: (e) => {
				let t = [...T.value], i = t.length > 0 && typeof t[0] == "object", a = t.length > 0 && typeof n.defaultValue[0] == "object";
				if ((i || a) && typeof n.convertValue != "function") throw Error("You must provide a `convertValue` function when using objects as values.");
				let o = n.convertValue ? n.convertValue(e) : e;
				if (t.length >= c.value && c.value) return r("invalid", o), !1;
				if (n.duplicate) return h.value = [...t, o], r("addTag", o), !0;
				if (t.includes(o)) w.value = !0;
				else return h.value = [...t, o], r("addTag", o), !0;
				return r("invalid", o), !1;
			},
			onRemoveValue: ee,
			onInputKeydown: (e) => {
				let t = e.target, n = x().map((e) => e.ref).filter((e) => e.dataset.disabled !== "");
				if (!n.length) return;
				let r = n.at(-1);
				switch (e.key) {
					case "Delete":
					case "Backspace":
						if (t.selectionStart !== 0 || t.selectionEnd !== 0) break;
						if (C.value) {
							let t = n.findIndex((e) => e === C.value);
							ee(t), C.value = C.value === r ? n.at(t - 1) : n.at(t + 1), e.preventDefault();
						} else e.key === "Backspace" && (C.value = r, e.preventDefault());
						break;
					case "Home":
					case "End":
					case "ArrowRight":
					case "ArrowLeft": {
						let i = e.key === "ArrowRight" && m.value === "ltr" || e.key === "ArrowLeft" && m.value === "rtl", a = !i;
						if (t.selectionStart !== 0 || t.selectionEnd !== 0) break;
						if (a && !C.value) C.value = r, e.preventDefault();
						else if (i && r && C.value === r) C.value = void 0, e.preventDefault();
						else if (C.value) {
							let t = Or(e, C.value, void 0, {
								itemsArray: n,
								loop: !1,
								dir: m.value
							});
							t && (C.value = t), e.preventDefault();
						}
						break;
					}
					case "ArrowUp":
					case "ArrowDown":
						C.value && e.preventDefault();
						break;
					default: C.value = void 0;
				}
			},
			selectedElement: C,
			isInvalidInput: w,
			addOnPaste: i,
			addOnBlur: f,
			addOnTab: p,
			dir: m,
			disabled: a,
			delimiter: s,
			max: c,
			id: l,
			displayValue: n.displayValue
		}), (e, t) => (o(), P(z(S), null, {
			default: u(() => [W(z(X), {
				ref: z(g),
				dir: z(m),
				as: e.as,
				"as-child": e.asChild,
				"data-invalid": w.value ? "" : void 0,
				"data-disabled": z(a) ? "" : void 0,
				"data-focused": z(y) ? "" : void 0
			}, {
				default: u(() => [v(e.$slots, "default", { modelValue: z(h) }), z(b) && e.name ? (o(), P(z(pl), {
					key: 0,
					name: e.name,
					value: z(h),
					required: e.required,
					disabled: z(a)
				}, null, 8, [
					"name",
					"value",
					"required",
					"disabled"
				])) : M("v-if", !0)]),
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
}), Wy = /* @__PURE__ */ U({
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
		let n = e, r = Vy(), { forwardRef: i, currentElement: a } = q();
		function s(e) {
			if (r.selectedElement.value = void 0, !r.addOnBlur.value) return;
			let t = e.target, n = e.relatedTarget, i = t.getAttribute("aria-controls");
			i && n?.closest(`#${CSS.escape(i)}`) || t.value && r.onAddValue(t.value) && (t.value = "");
		}
		function c(e) {
			r.addOnTab.value && m(e);
		}
		let l = O(!1);
		function d() {
			l.value = !0;
		}
		function f() {
			t(() => {
				l.value = !1;
			});
		}
		async function m(e) {
			if (l.value || (await t(), e.defaultPrevented)) return;
			let n = e.target;
			n.value && (r.onAddValue(n.value) && (n.value = ""), e.preventDefault());
		}
		function h(e) {
			if (r.isInvalidInput.value = !1, e.data === null) return;
			let t = r.delimiter.value;
			if (t === e.data || t instanceof RegExp && t.test(e.data)) {
				let n = e.target;
				if (n.value = n.value.replace(t, ""), n.value.trim() === "") {
					n.value = "";
					return;
				}
				r.onAddValue(n.value) && (n.value = "");
			}
		}
		function g(e) {
			if (r.addOnPaste.value) {
				e.preventDefault();
				let t = e.clipboardData;
				if (!t) return;
				let n = t.getData("text");
				r.delimiter.value ? n.split(r.delimiter.value).forEach((e) => {
					r.onAddValue(e);
				}) : r.onAddValue(n);
			}
		}
		return p(() => {
			let e = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
			e && setTimeout(() => {
				n.autoFocus && e?.focus();
			}, 1);
		}), (e, t) => (o(), P(z(X), {
			id: z(r).id?.value,
			ref: z(i),
			type: "text",
			autocomplete: "off",
			autocorrect: "off",
			autocapitalize: "off",
			as: e.as,
			"as-child": e.asChild,
			maxlength: e.maxLength,
			placeholder: e.placeholder,
			disabled: z(r).disabled.value,
			"data-invalid": z(r).isInvalidInput.value ? "" : void 0,
			onInput: h,
			onKeydown: [
				be(m, ["enter"]),
				be(c, ["tab"]),
				z(r).onInputKeydown
			],
			onBlur: s,
			onCompositionstart: d,
			onCompositionend: f,
			onPaste: g
		}, {
			default: u(() => [v(e.$slots, "default")]),
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
}), [Gy, Ky] = /* @__PURE__ */ K("TagsInputItem"), qy = /* @__PURE__ */ U({
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
		let t = e, { value: n } = we(t), r = Vy(), { forwardRef: i, currentElement: a } = q(), { CollectionItem: s } = ul(), c = R(() => r.selectedElement.value === a.value), l = R(() => t.disabled || r.disabled.value), d = Ky({
			value: n,
			isSelected: c,
			disabled: l,
			textId: "",
			displayValue: R(() => r.displayValue(n.value))
		});
		return (e, t) => (o(), P(z(s), { value: z(n) }, {
			default: u(() => [W(z(X), {
				ref: z(i),
				as: e.as,
				"as-child": e.asChild,
				"aria-labelledby": z(d).textId,
				"aria-current": c.value,
				"data-disabled": l.value ? "" : void 0,
				"data-state": c.value ? "active" : "inactive"
			}, {
				default: u(() => [v(e.$slots, "default")]),
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
}), Jy = /* @__PURE__ */ U({
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
		q();
		let n = Vy(), r = Gy(), i = R(() => r.disabled?.value || n.disabled.value);
		function a() {
			if (i.value) return;
			let e = n.modelValue.value.findIndex((e) => hr(e, r.value.value));
			n.onRemoveValue(e);
		}
		return (e, n) => (o(), P(z(X), I({ tabindex: "-1" }, t, {
			"aria-labelledby": z(r).textId,
			"aria-current": z(r).isSelected.value,
			"data-state": z(r).isSelected.value ? "active" : "inactive",
			"data-disabled": i.value ? "" : void 0,
			type: e.as === "button" ? "button" : void 0,
			onClick: a
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, [
			"aria-labelledby",
			"aria-current",
			"data-state",
			"data-disabled",
			"type"
		]));
	}
}), Yy = /* @__PURE__ */ U({
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
		let t = e, n = Gy();
		return q(), n.textId ||= ws(void 0, "reka-tags-input-item-text"), (e, r) => (o(), P(z(X), I(t, { id: z(n).textId }), {
			default: u(() => [v(e.$slots, "default", {}, () => [V(H(z(n).displayValue.value), 1)])]),
			_: 3
		}, 16, ["id"]));
	}
}), [Xy, Zy] = /* @__PURE__ */ K("ToggleGroupRoot"), Qy = /* @__PURE__ */ U({
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
		let n = e, r = t, { loop: i, rovingFocus: a, disabled: s, dir: c } = we(n), l = $o(c), { forwardRef: d, currentElement: f } = q(), { modelValue: p, changeModelValue: m, isSingle: h } = Ks(n, r), g = as(f);
		return Zy({
			isSingle: h,
			modelValue: p,
			changeModelValue: m,
			dir: l,
			orientation: n.orientation,
			loop: i,
			rovingFocus: a,
			disabled: s
		}), (e, t) => (o(), P(De(z(a) ? z(If) : z(X)), {
			"as-child": "",
			orientation: z(a) ? e.orientation : void 0,
			dir: z(l),
			loop: z(a) ? z(i) : void 0
		}, {
			default: u(() => [W(z(X), {
				ref: z(d),
				role: "group",
				"as-child": e.asChild,
				as: e.as
			}, {
				default: u(() => [v(e.$slots, "default", { modelValue: z(p) }), z(g) && e.name ? (o(), P(pl, {
					key: 0,
					name: e.name,
					required: e.required,
					value: z(p)
				}, null, 8, [
					"name",
					"required",
					"value"
				])) : M("v-if", !0)]),
				_: 3
			}, 8, ["as-child", "as"])]),
			_: 3
		}, 8, [
			"orientation",
			"dir",
			"loop"
		]));
	}
}), $y = /* @__PURE__ */ U({
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
		let n = e, r = t, { forwardRef: i, currentElement: a } = q(), s = Xy(null), c = Bn(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: n.modelValue === void 0
		});
		function l() {
			c.value = !c.value;
		}
		let d = R(() => c.value ? "on" : "off"), f = as(a);
		return (e, t) => (o(), P(z(X), {
			ref: z(i),
			type: e.as === "button" ? "button" : void 0,
			"as-child": n.asChild,
			as: e.as,
			"aria-pressed": z(c),
			"data-state": d.value,
			"data-disabled": e.disabled ? "" : void 0,
			disabled: e.disabled,
			onClick: l
		}, {
			default: u(() => [v(e.$slots, "default", {
				modelValue: z(c),
				disabled: e.disabled,
				pressed: z(c),
				state: d.value
			}), z(f) && e.name && !z(s) ? (o(), P(pl, {
				key: 0,
				type: "checkbox",
				name: e.name,
				value: z(c),
				required: e.required
			}, null, 8, [
				"name",
				"value",
				"required"
			])) : M("v-if", !0)]),
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
}), eb = /* @__PURE__ */ U({
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
		let t = e, n = Xy(), i = R(() => n.disabled?.value || t.disabled), a = R(() => Tr(n.modelValue.value, t.value)), { forwardRef: s } = q();
		return (e, c) => (o(), P(De(z(n).rovingFocus.value ? z(Lf) : z(X)), I({ "as-child": "" }, z(n).rovingFocus.value ? {
			focusable: !i.value,
			active: a.value
		} : {}), {
			default: u(() => [W(z($y), I(t, {
				ref: z(s),
				disabled: i.value,
				"model-value": a.value,
				"onUpdate:modelValue": c[0] ||= (t) => z(n).changeModelValue(e.value)
			}), {
				default: u((t) => [v(e.$slots, "default", N(r(t)))]),
				_: 3
			}, 16, ["disabled", "model-value"])]),
			_: 3
		}, 16));
	}
}), tb = /* @__PURE__ */ U({
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
		return q(), (e, n) => (o(), P(z(nf), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [nb, rb] = /* @__PURE__ */ K("TooltipProvider"), ib = /* @__PURE__ */ U({
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
		let { delayDuration: t, skipDelayDuration: n, disableHoverableContent: r, disableClosingTrigger: i, ignoreNonKeyboardFocus: a, disabled: o, content: s } = we(e);
		q();
		let c = O(!0), l = O(!1), { start: u, stop: d } = mn(() => {
			c.value = !0;
		}, n, { immediate: !1 });
		return rb({
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
		}), (e, t) => v(e.$slots, "default");
	}
}), ab = "tooltip.open", [ob, sb] = /* @__PURE__ */ K("TooltipRoot"), cb = /* @__PURE__ */ U({
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
		q();
		let i = nb(), a = R(() => n.disableHoverableContent ?? i.disableHoverableContent.value), s = R(() => n.disableClosingTrigger ?? i.disableClosingTrigger.value), c = R(() => n.disabled ?? i.disabled.value), l = R(() => n.delayDuration ?? i.delayDuration.value), d = R(() => n.ignoreNonKeyboardFocus ?? i.ignoreNonKeyboardFocus.value), f = Bn(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		});
		C(f, (e) => {
			i.onClose && (e ? (i.onOpen(), document.dispatchEvent(new CustomEvent(ab))) : i.onClose());
		});
		let p = O(!1), m = O(), h = R(() => f.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: g, stop: _ } = mn(() => {
			p.value = !0, f.value = !0;
		}, l, { immediate: !1 });
		function y() {
			_(), p.value = !1, f.value = !0;
		}
		function b() {
			_(), f.value = !1;
		}
		function x() {
			g();
		}
		return sb({
			contentId: "",
			open: f,
			stateAttribute: h,
			trigger: m,
			onTriggerChange(e) {
				m.value = e;
			},
			onTriggerEnter() {
				i.isOpenDelayed.value ? x() : y();
			},
			onTriggerLeave() {
				a.value ? b() : _();
			},
			onOpen: y,
			onClose: b,
			disableHoverableContent: a,
			disableClosingTrigger: s,
			disabled: c,
			ignoreNonKeyboardFocus: d
		}), (e, t) => (o(), P(z(Rl), null, {
			default: u(() => [v(e.$slots, "default", { open: z(f) })]),
			_: 3
		}));
	}
}), lb = /* @__PURE__ */ U({
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
		let n = e, r = t, i = ob(), a = nb(), { forwardRef: s, currentElement: c } = q(), l = R(() => n.ariaLabel || c.value?.textContent), d = R(() => {
			let { ariaLabel: e, ...t } = n;
			return Fr(t, a.content.value ?? {}, {
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
		return p(() => {
			Sn(window, "scroll", (e) => {
				e.target?.contains(i.trigger.value) && i.onClose();
			}, { capture: !0 }), Sn(window, ab, i.onClose);
		}), (e, t) => (o(), P(z(pc), {
			"as-child": "",
			"disable-outside-pointer-events": !1,
			onEscapeKeyDown: t[0] ||= (e) => r("escapeKeyDown", e),
			onPointerDownOutside: t[1] ||= (e) => {
				z(i).disableClosingTrigger.value && z(i).trigger.value?.contains(e.target) && e.preventDefault(), r("pointerDownOutside", e);
			},
			onFocusOutside: t[2] ||= k(() => {}, ["prevent"]),
			onDismiss: t[3] ||= (e) => z(i).onClose()
		}, {
			default: u(() => [W(z(ef), I({
				ref: z(s),
				"data-state": z(i).stateAttribute.value
			}, {
				...e.$attrs,
				...d.value
			}, { style: {
				"--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
				"--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
				"--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
				"--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
				"--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
			} }), {
				default: u(() => [v(e.$slots, "default"), W(z(dl), {
					id: z(i).contentId,
					role: "tooltip"
				}, {
					default: u(() => [V(H(l.value), 1)]),
					_: 1
				}, 8, ["id"])]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}));
	}
}), ub = /* @__PURE__ */ U({
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
		let t = J(e), { forwardRef: n, currentElement: r } = q(), { trigger: i, onClose: a } = ob(), s = nb(), { isPointerInTransit: c, onPointerExit: l } = os(i, r);
		return s.isPointerInTransitRef = c, l(() => {
			a();
		}), (e, r) => (o(), P(lb, I({ ref: z(n) }, z(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), db = /* @__PURE__ */ U({
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
		let n = e, r = t, i = ob(), a = Y(n, r), { forwardRef: s } = q();
		return (e, t) => (o(), P(z(Ps), { present: e.forceMount || z(i).open.value }, {
			default: u(() => [(o(), P(De(z(i).disableHoverableContent.value ? lb : ub), I({ ref: z(s) }, z(a)), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16))]),
			_: 3
		}, 8, ["present"]));
	}
}), fb = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(Yc), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), pb = /* @__PURE__ */ U({
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
		let t = e, r = ob(), i = nb();
		r.contentId ||= ws(void 0, "reka-tooltip-content");
		let { forwardRef: a, currentElement: s } = q(), c = O(!1), l = O(!1), d = R(() => r.disabled.value ? {} : {
			click: b,
			focus: _,
			pointermove: h,
			pointerleave: g,
			pointerdown: m,
			blur: y
		});
		p(() => {
			r.onTriggerChange(s.value);
		});
		function f() {
			setTimeout(() => {
				c.value = !1;
			}, 1);
		}
		function m() {
			r.open && !r.disableClosingTrigger.value && r.onClose(), c.value = !0, document.addEventListener("pointerup", f, { once: !0 });
		}
		function h(e) {
			e.pointerType !== "touch" && !l.value && !i.isPointerInTransitRef.value && (r.onTriggerEnter(), l.value = !0);
		}
		function g() {
			r.onTriggerLeave(), l.value = !1;
		}
		function _(e) {
			c.value || r.ignoreNonKeyboardFocus.value && !e.target.matches?.(":focus-visible") || r.onOpen();
		}
		function y() {
			r.onClose();
		}
		function b() {
			r.disableClosingTrigger.value || r.onClose();
		}
		return (e, i) => (o(), P(z(zl), {
			"as-child": "",
			reference: e.reference
		}, {
			default: u(() => [W(z(X), I({
				ref: z(a),
				"aria-describedby": z(r).open.value ? z(r).contentId : void 0,
				"data-state": z(r).stateAttribute.value,
				as: e.as,
				"as-child": t.asChild,
				"data-grace-area-trigger": ""
			}, n(d.value)), {
				default: u(() => [v(e.$slots, "default")]),
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
function mb(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = mb(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function hb() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = mb(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var gb = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, _b = (e, t) => ({
	classGroupId: e,
	validator: t
}), vb = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), yb = "-", bb = [], xb = "arbitrary..", Sb = (e) => {
	let t = Tb(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return wb(e);
			let n = e.split(yb);
			return Cb(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? gb(i, t) : t : i || bb;
			}
			return n[e] || bb;
		}
	};
}, Cb = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Cb(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(yb) : e.slice(t).join(yb), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, wb = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? xb + r : void 0;
})(), Tb = (e) => {
	let { theme: t, classGroups: n } = e;
	return Eb(n, t);
}, Eb = (e, t) => {
	let n = vb();
	for (let r in e) {
		let i = e[r];
		Db(i, n, r, t);
	}
	return n;
}, Db = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Ob(i, t, n, r);
	}
}, Ob = (e, t, n, r) => {
	if (typeof e == "string") {
		kb(e, t, n);
		return;
	}
	if (typeof e == "function") {
		Ab(e, t, n, r);
		return;
	}
	jb(e, t, n, r);
}, kb = (e, t, n) => {
	let r = e === "" ? t : Mb(t, e);
	r.classGroupId = n;
}, Ab = (e, t, n, r) => {
	if (Nb(e)) {
		Db(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(_b(n, e));
}, jb = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Db(o, Mb(t, a), n, r);
	}
}, Mb = (e, t) => {
	let n = e, r = t.split(yb), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = vb(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Nb = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Pb = (e) => {
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
}, Fb = "!", Ib = ":", Lb = [], Rb = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), zb = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Ib) {
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
		s.endsWith(Fb) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Fb) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Rb(t, l, c, u);
	};
	if (t) {
		let e = t + Ib, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Rb(Lb, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, Bb = (e) => {
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
}, Vb = (e) => ({
	cache: Pb(e.cacheSize),
	parseClassName: zb(e),
	sortModifiers: Bb(e),
	postfixLookupClassGroupIds: Hb(e),
	...Sb(e)
}), Hb = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, Ub = /\s+/, Wb = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(Ub), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + Fb : _, y = v + g;
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
}, Gb = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Kb(n)) && (i && (i += " "), i += r);
	return i;
}, Kb = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Kb(e[r])) && (n && (n += " "), n += t);
	return n;
}, qb = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = Vb(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = Wb(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(Gb(...e));
}, Jb = [], Yb = (e) => {
	let t = (t) => t[e] || Jb;
	return t.isThemeGetter = !0, t;
}, Xb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Zb = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Qb = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, $b = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, tx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, nx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, rx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ix = (e) => Qb.test(e), ax = (e) => !!e && !Number.isNaN(Number(e)), ox = (e) => !!e && Number.isInteger(Number(e)), sx = (e) => e.endsWith("%") && ax(e.slice(0, -1)), cx = (e) => $b.test(e), lx = () => !0, ux = (e) => ex.test(e) && !tx.test(e), dx = () => !1, fx = (e) => nx.test(e), px = (e) => rx.test(e), mx = (e) => !Z(e) && !Q(e), hx = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), gx = (e) => jx(e, Fx, dx), Z = (e) => Xb.test(e), _x = (e) => jx(e, Ix, ux), vx = (e) => jx(e, Lx, ax), yx = (e) => jx(e, zx, lx), bx = (e) => jx(e, Rx, dx), xx = (e) => jx(e, Nx, dx), Sx = (e) => jx(e, Px, px), Cx = (e) => jx(e, Bx, fx), Q = (e) => Zb.test(e), wx = (e) => Mx(e, Ix), Tx = (e) => Mx(e, Rx), Ex = (e) => Mx(e, Nx), Dx = (e) => Mx(e, Fx), Ox = (e) => Mx(e, Px), kx = (e) => Mx(e, Bx, !0), Ax = (e) => Mx(e, zx, !0), jx = (e, t, n) => {
	let r = Xb.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Mx = (e, t, n = !1) => {
	let r = Zb.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Nx = (e) => e === "position" || e === "percentage", Px = (e) => e === "image" || e === "url", Fx = (e) => e === "length" || e === "size" || e === "bg-size", Ix = (e) => e === "length", Lx = (e) => e === "number", Rx = (e) => e === "family-name", zx = (e) => e === "number" || e === "weight", Bx = (e) => e === "shadow", Vx = /* @__PURE__ */ qb(() => {
	let e = Yb("color"), t = Yb("font"), n = Yb("text"), r = Yb("font-weight"), i = Yb("tracking"), a = Yb("leading"), o = Yb("breakpoint"), s = Yb("container"), c = Yb("spacing"), l = Yb("radius"), u = Yb("shadow"), d = Yb("inset-shadow"), f = Yb("text-shadow"), p = Yb("drop-shadow"), m = Yb("blur"), h = Yb("perspective"), g = Yb("aspect"), _ = Yb("ease"), v = Yb("animate"), y = () => [
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
		ix,
		"full",
		"auto",
		...w()
	], ee = () => [
		ox,
		"none",
		"subgrid",
		Q,
		Z
	], E = () => [
		"auto",
		{ span: [
			"full",
			ox,
			Q,
			Z
		] },
		ox,
		Q,
		Z
	], D = () => [
		ox,
		"auto",
		Q,
		Z
	], te = () => [
		"auto",
		"min",
		"max",
		"fr",
		Q,
		Z
	], O = () => [
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
	], ne = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], k = () => ["auto", ...w()], re = () => [
		ix,
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
	], ie = () => [
		ix,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], A = () => [
		ix,
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
	], j = () => [
		e,
		Q,
		Z
	], ae = () => [
		...b(),
		Ex,
		xx,
		{ position: [Q, Z] }
	], oe = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], M = () => [
		"auto",
		"cover",
		"contain",
		Dx,
		gx,
		{ size: [Q, Z] }
	], N = () => [
		sx,
		wx,
		_x
	], P = () => [
		"",
		"none",
		"full",
		l,
		Q,
		Z
	], F = () => [
		"",
		ax,
		wx,
		_x
	], se = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ce = () => [
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
	], le = () => [
		ax,
		sx,
		Ex,
		xx
	], I = () => [
		"",
		"none",
		m,
		Q,
		Z
	], ue = () => [
		"none",
		ax,
		Q,
		Z
	], de = () => [
		"none",
		ax,
		Q,
		Z
	], L = () => [
		ax,
		Q,
		Z
	], fe = () => [
		ix,
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
			blur: [cx],
			breakpoint: [cx],
			color: [lx],
			container: [cx],
			"drop-shadow": [cx],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [mx],
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
			"inset-shadow": [cx],
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
			radius: [cx],
			shadow: [cx],
			spacing: ["px", ax],
			text: [cx],
			"text-shadow": [cx],
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
				ix,
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
			"container-named": [hx],
			columns: [{ columns: [
				ax,
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
				ox,
				"auto",
				Q,
				Z
			] }],
			basis: [{ basis: [
				ix,
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
				ax,
				ix,
				"auto",
				"initial",
				"none",
				Z
			] }],
			grow: [{ grow: [
				"",
				ax,
				Q,
				Z
			] }],
			shrink: [{ shrink: [
				"",
				ax,
				Q,
				Z
			] }],
			order: [{ order: [
				ox,
				"first",
				"last",
				"none",
				Q,
				Z
			] }],
			"grid-cols": [{ "grid-cols": ee() }],
			"col-start-end": [{ col: E() }],
			"col-start": [{ "col-start": D() }],
			"col-end": [{ "col-end": D() }],
			"grid-rows": [{ "grid-rows": ee() }],
			"row-start-end": [{ row: E() }],
			"row-start": [{ "row-start": D() }],
			"row-end": [{ "row-end": D() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": te() }],
			"auto-rows": [{ "auto-rows": te() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...O(), "normal"] }],
			"justify-items": [{ "justify-items": [...ne(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...ne()] }],
			"align-content": [{ content: ["normal", ...O()] }],
			"align-items": [{ items: [...ne(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...ne(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": O() }],
			"place-items": [{ "place-items": [...ne(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...ne()] }],
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
			m: [{ m: k() }],
			mx: [{ mx: k() }],
			my: [{ my: k() }],
			ms: [{ ms: k() }],
			me: [{ me: k() }],
			mbs: [{ mbs: k() }],
			mbe: [{ mbe: k() }],
			mt: [{ mt: k() }],
			mr: [{ mr: k() }],
			mb: [{ mb: k() }],
			ml: [{ ml: k() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: re() }],
			"inline-size": [{ inline: ["auto", ...ie()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...ie()] }],
			"max-inline-size": [{ "max-inline": ["none", ...ie()] }],
			"block-size": [{ block: ["auto", ...A()] }],
			"min-block-size": [{ "min-block": ["auto", ...A()] }],
			"max-block-size": [{ "max-block": ["none", ...A()] }],
			w: [{ w: [
				s,
				"screen",
				...re()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...re()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...re()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...re()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...re()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...re()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				wx,
				_x
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Ax,
				yx
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
				sx,
				Z
			] }],
			"font-family": [{ font: [
				Tx,
				bx,
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
				ax,
				"none",
				Q,
				vx
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
			"placeholder-color": [{ placeholder: j() }],
			"text-color": [{ text: j() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...se(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				ax,
				"from-font",
				"auto",
				Q,
				_x
			] }],
			"text-decoration-color": [{ decoration: j() }],
			"underline-offset": [{ "underline-offset": [
				ax,
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
				ox,
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
			"bg-position": [{ bg: ae() }],
			"bg-repeat": [{ bg: oe() }],
			"bg-size": [{ bg: M() }],
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
						ox,
						Q,
						Z
					],
					radial: [
						"",
						Q,
						Z
					],
					conic: [
						ox,
						Q,
						Z
					]
				},
				Ox,
				Sx
			] }],
			"bg-color": [{ bg: j() }],
			"gradient-from-pos": [{ from: N() }],
			"gradient-via-pos": [{ via: N() }],
			"gradient-to-pos": [{ to: N() }],
			"gradient-from": [{ from: j() }],
			"gradient-via": [{ via: j() }],
			"gradient-to": [{ to: j() }],
			rounded: [{ rounded: P() }],
			"rounded-s": [{ "rounded-s": P() }],
			"rounded-e": [{ "rounded-e": P() }],
			"rounded-t": [{ "rounded-t": P() }],
			"rounded-r": [{ "rounded-r": P() }],
			"rounded-b": [{ "rounded-b": P() }],
			"rounded-l": [{ "rounded-l": P() }],
			"rounded-ss": [{ "rounded-ss": P() }],
			"rounded-se": [{ "rounded-se": P() }],
			"rounded-ee": [{ "rounded-ee": P() }],
			"rounded-es": [{ "rounded-es": P() }],
			"rounded-tl": [{ "rounded-tl": P() }],
			"rounded-tr": [{ "rounded-tr": P() }],
			"rounded-br": [{ "rounded-br": P() }],
			"rounded-bl": [{ "rounded-bl": P() }],
			"border-w": [{ border: F() }],
			"border-w-x": [{ "border-x": F() }],
			"border-w-y": [{ "border-y": F() }],
			"border-w-s": [{ "border-s": F() }],
			"border-w-e": [{ "border-e": F() }],
			"border-w-bs": [{ "border-bs": F() }],
			"border-w-be": [{ "border-be": F() }],
			"border-w-t": [{ "border-t": F() }],
			"border-w-r": [{ "border-r": F() }],
			"border-w-b": [{ "border-b": F() }],
			"border-w-l": [{ "border-l": F() }],
			"divide-x": [{ "divide-x": F() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": F() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...se(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...se(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: j() }],
			"border-color-x": [{ "border-x": j() }],
			"border-color-y": [{ "border-y": j() }],
			"border-color-s": [{ "border-s": j() }],
			"border-color-e": [{ "border-e": j() }],
			"border-color-bs": [{ "border-bs": j() }],
			"border-color-be": [{ "border-be": j() }],
			"border-color-t": [{ "border-t": j() }],
			"border-color-r": [{ "border-r": j() }],
			"border-color-b": [{ "border-b": j() }],
			"border-color-l": [{ "border-l": j() }],
			"divide-color": [{ divide: j() }],
			"outline-style": [{ outline: [
				...se(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				ax,
				Q,
				Z
			] }],
			"outline-w": [{ outline: [
				"",
				ax,
				wx,
				_x
			] }],
			"outline-color": [{ outline: j() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				kx,
				Cx
			] }],
			"shadow-color": [{ shadow: j() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				kx,
				Cx
			] }],
			"inset-shadow-color": [{ "inset-shadow": j() }],
			"ring-w": [{ ring: F() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: j() }],
			"ring-offset-w": [{ "ring-offset": [ax, _x] }],
			"ring-offset-color": [{ "ring-offset": j() }],
			"inset-ring-w": [{ "inset-ring": F() }],
			"inset-ring-color": [{ "inset-ring": j() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				kx,
				Cx
			] }],
			"text-shadow-color": [{ "text-shadow": j() }],
			opacity: [{ opacity: [
				ax,
				Q,
				Z
			] }],
			"mix-blend": [{ "mix-blend": [
				...ce(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ce() }],
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
			"mask-image-linear-pos": [{ "mask-linear": [ax] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": le() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": le() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": j() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": j() }],
			"mask-image-t-from-pos": [{ "mask-t-from": le() }],
			"mask-image-t-to-pos": [{ "mask-t-to": le() }],
			"mask-image-t-from-color": [{ "mask-t-from": j() }],
			"mask-image-t-to-color": [{ "mask-t-to": j() }],
			"mask-image-r-from-pos": [{ "mask-r-from": le() }],
			"mask-image-r-to-pos": [{ "mask-r-to": le() }],
			"mask-image-r-from-color": [{ "mask-r-from": j() }],
			"mask-image-r-to-color": [{ "mask-r-to": j() }],
			"mask-image-b-from-pos": [{ "mask-b-from": le() }],
			"mask-image-b-to-pos": [{ "mask-b-to": le() }],
			"mask-image-b-from-color": [{ "mask-b-from": j() }],
			"mask-image-b-to-color": [{ "mask-b-to": j() }],
			"mask-image-l-from-pos": [{ "mask-l-from": le() }],
			"mask-image-l-to-pos": [{ "mask-l-to": le() }],
			"mask-image-l-from-color": [{ "mask-l-from": j() }],
			"mask-image-l-to-color": [{ "mask-l-to": j() }],
			"mask-image-x-from-pos": [{ "mask-x-from": le() }],
			"mask-image-x-to-pos": [{ "mask-x-to": le() }],
			"mask-image-x-from-color": [{ "mask-x-from": j() }],
			"mask-image-x-to-color": [{ "mask-x-to": j() }],
			"mask-image-y-from-pos": [{ "mask-y-from": le() }],
			"mask-image-y-to-pos": [{ "mask-y-to": le() }],
			"mask-image-y-from-color": [{ "mask-y-from": j() }],
			"mask-image-y-to-color": [{ "mask-y-to": j() }],
			"mask-image-radial": [{ "mask-radial": [Q, Z] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": le() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": le() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": j() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": j() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [ax] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": le() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": le() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": j() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": j() }],
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
			"mask-position": [{ mask: ae() }],
			"mask-repeat": [{ mask: oe() }],
			"mask-size": [{ mask: M() }],
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
			blur: [{ blur: I() }],
			brightness: [{ brightness: [
				ax,
				Q,
				Z
			] }],
			contrast: [{ contrast: [
				ax,
				Q,
				Z
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				kx,
				Cx
			] }],
			"drop-shadow-color": [{ "drop-shadow": j() }],
			grayscale: [{ grayscale: [
				"",
				ax,
				Q,
				Z
			] }],
			"hue-rotate": [{ "hue-rotate": [
				ax,
				Q,
				Z
			] }],
			invert: [{ invert: [
				"",
				ax,
				Q,
				Z
			] }],
			saturate: [{ saturate: [
				ax,
				Q,
				Z
			] }],
			sepia: [{ sepia: [
				"",
				ax,
				Q,
				Z
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Q,
				Z
			] }],
			"backdrop-blur": [{ "backdrop-blur": I() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				ax,
				Q,
				Z
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				ax,
				Q,
				Z
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				ax,
				Q,
				Z
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				ax,
				Q,
				Z
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				ax,
				Q,
				Z
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				ax,
				Q,
				Z
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				ax,
				Q,
				Z
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				ax,
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
				ax,
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
				ax,
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
			rotate: [{ rotate: ue() }],
			"rotate-x": [{ "rotate-x": ue() }],
			"rotate-y": [{ "rotate-y": ue() }],
			"rotate-z": [{ "rotate-z": ue() }],
			scale: [{ scale: de() }],
			"scale-x": [{ "scale-x": de() }],
			"scale-y": [{ "scale-y": de() }],
			"scale-z": [{ "scale-z": de() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: L() }],
			"skew-x": [{ "skew-x": L() }],
			"skew-y": [{ "skew-y": L() }],
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
			translate: [{ translate: fe() }],
			"translate-x": [{ "translate-x": fe() }],
			"translate-y": [{ "translate-y": fe() }],
			"translate-z": [{ "translate-z": fe() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				ox,
				Q,
				Z
			] }],
			accent: [{ accent: j() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: j() }],
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
			"scrollbar-thumb-color": [{ "scrollbar-thumb": j() }],
			"scrollbar-track-color": [{ "scrollbar-track": j() }],
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
			fill: [{ fill: ["none", ...j()] }],
			"stroke-w": [{ stroke: [
				ax,
				wx,
				_x,
				vx
			] }],
			stroke: [{ stroke: ["none", ...j()] }],
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
	return Vx(hb(e));
}
//#endregion
//#region src/components/ui/checkbox/Checkbox.vue
var Hx = /* @__PURE__ */ U({
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
		let n = e, i = t, a = Y(G(n, "class"), i);
		return (e, t) => (o(), P(z(Wf), I({ "data-slot": "checkbox" }, z(a), { class: z($)("border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border transition-colors group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", n.class) }), {
			default: u((t) => [W(z(Gf), {
				"data-slot": "checkbox-indicator",
				class: "[&>svg]:size-3.5 grid place-content-center text-current transition-none"
			}, {
				default: u(() => [v(e.$slots, "default", N(r(t)), () => [W(z(Xn))])]),
				_: 2
			}, 1024)]),
			_: 3
		}, 16, ["class"]));
	}
}), Ux = { class: "inline-flex items-center gap-2 align-middle" }, Wx = /* @__PURE__ */ U({
	__name: "Checkbox.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		checked: { type: Boolean },
		value: { type: String }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = O(n.checked === !0), a = O(!1), s = ve();
		function c(e) {
			let t = s?._internals;
			t && (t.setFormValue(e ? n.value ?? "on" : null), n.required && !e ? t.setValidity({ valueMissing: !0 }, "Required.") : t.setValidity({}));
		}
		function l(e) {
			let t = e === !0;
			i.value = t, c(t), r("change", { checked: t });
		}
		function u() {
			n.disabled || a.value || l(!i.value);
		}
		return p(() => {
			s && (s._reset = () => {
				i.value = n.checked === !0, c(i.value);
			}, s._disabledChange = (e) => {
				a.value = e;
			}), c(i.value);
		}), (t, n) => (o(), E("span", Ux, [W(z(Hx), {
			name: "",
			"model-value": i.value,
			required: e.required,
			disabled: e.disabled || a.value,
			"onUpdate:modelValue": l
		}, null, 8, [
			"model-value",
			"required",
			"disabled"
		]), L("span", {
			class: "text-sm leading-none select-none cursor-pointer",
			onClick: u
		}, [v(t.$slots, "default", {}, () => [n[0] ||= V("Checkbox", -1)])])]));
	}
}), Gx = /* @__PURE__ */ U({
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
		let n = e, i = t, a = Y(G(n, "class", "size"), i);
		return (t, i) => (o(), P(z(jy), I({
			"data-slot": "switch",
			"data-size": e.size
		}, z(a), { class: z($)("data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:data-unchecked:bg-input/80 shrink-0 rounded-full border border-transparent focus-visible:ring-3 aria-invalid:ring-3 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50", n.class) }), {
			default: u((e) => [W(z(My), {
				"data-slot": "switch-thumb",
				class: "bg-background dark:data-unchecked:bg-foreground dark:data-checked:bg-primary-foreground rounded-full group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 pointer-events-none block ring-0 transition-transform"
			}, {
				default: u(() => [v(t.$slots, "thumb", N(r(e)))]),
				_: 2
			}, 1024)]),
			_: 3
		}, 16, ["data-size", "class"]));
	}
}), Kx = { class: "inline-flex items-center gap-2 align-middle" }, qx = /* @__PURE__ */ U({
	__name: "Switch.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		checked: { type: Boolean },
		value: { type: String }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = O(n.checked === !0), a = O(!1), s = ve();
		function c(e) {
			let t = s?._internals;
			t && (t.setFormValue(e ? n.value ?? "on" : null), n.required && !e ? t.setValidity({ valueMissing: !0 }, "Required.") : t.setValidity({}));
		}
		function l(e) {
			i.value = e, c(e), r("change", { checked: e });
		}
		function u() {
			n.disabled || a.value || l(!i.value);
		}
		return p(() => {
			s && (s._reset = () => {
				i.value = n.checked === !0, c(i.value);
			}, s._disabledChange = (e) => {
				a.value = e;
			}), c(i.value);
		}), (t, n) => (o(), E("span", Kx, [W(z(Gx), {
			name: "",
			"model-value": i.value,
			required: e.required,
			disabled: e.disabled || a.value,
			"onUpdate:modelValue": l
		}, null, 8, [
			"model-value",
			"required",
			"disabled"
		]), L("span", {
			class: "text-sm leading-none select-none cursor-pointer",
			onClick: u
		}, [v(t.$slots, "default", {}, () => [n[0] ||= V("Switch", -1)])])]));
	}
}), Jx = /* @__PURE__ */ U({
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
		let n = e, r = Bn(n, "modelValue", t, {
			passive: !0,
			defaultValue: n.defaultValue
		});
		return (e, t) => T((o(), E("input", {
			"onUpdate:modelValue": t[0] ||= (e) => j(r) ? r.value = e : null,
			"data-slot": "input",
			class: F(z($)("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", n.class))
		}, null, 2)), [[te, z(r)]]);
	}
}), Yx = /* @__PURE__ */ U({
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
		let n = e, r = t, i = O(n.value ?? ""), a = O(!1), s = ve();
		function c(e) {
			let t = s?._internals;
			if (!t) return;
			t.setFormValue(e);
			let r = s?.querySelector("input") ?? void 0;
			n.required && !e ? t.setValidity({ valueMissing: !0 }, "Preencha este campo.", r) : t.setValidity({});
		}
		function l(e) {
			i.value = String(e ?? ""), c(i.value), r("input", i.value);
		}
		return p(() => {
			s && (s._reset = () => {
				i.value = n.value ?? "", c(i.value);
			}, s._disabledChange = (e) => {
				a.value = e;
			}), c(i.value);
		}), (t, n) => (o(), P(z(Jx), {
			"model-value": i.value,
			type: e.type ?? "text",
			placeholder: e.placeholder,
			disabled: e.disabled || a.value,
			"onUpdate:modelValue": l,
			onChange: n[0] ||= (e) => r("change", i.value)
		}, null, 8, [
			"model-value",
			"type",
			"placeholder",
			"disabled"
		]));
	}
}), Xx = /* @__PURE__ */ U({
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
		let n = e, r = Bn(n, "modelValue", t, {
			passive: !0,
			defaultValue: n.defaultValue
		});
		return (e, t) => T((o(), E("textarea", {
			"onUpdate:modelValue": t[0] ||= (e) => j(r) ? r.value = e : null,
			"data-slot": "textarea",
			class: F(z($)("border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-lg border bg-transparent px-2.5 py-2 text-base transition-colors focus-visible:ring-3 aria-invalid:ring-3 md:text-sm flex field-sizing-content min-h-16 w-full outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", n.class))
		}, null, 2)), [[te, z(r)]]);
	}
}), Zx = /* @__PURE__ */ U({
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
		let n = e, r = t, i = O(n.value ?? ""), a = O(!1), s = ve();
		function c(e) {
			let t = s?._internals;
			if (!t) return;
			t.setFormValue(e);
			let r = s?.querySelector("textarea") ?? void 0;
			n.required && !e ? t.setValidity({ valueMissing: !0 }, "Preencha este campo.", r) : t.setValidity({});
		}
		function l(e) {
			i.value = String(e ?? ""), c(i.value), r("input", i.value);
		}
		return p(() => {
			s && (s._reset = () => {
				i.value = n.value ?? "", c(i.value);
			}, s._disabledChange = (e) => {
				a.value = e;
			}), c(i.value);
		}), (t, n) => (o(), P(z(Xx), {
			"model-value": i.value,
			placeholder: e.placeholder,
			disabled: e.disabled || a.value,
			"onUpdate:modelValue": l,
			onChange: n[0] ||= (e) => r("change", i.value)
		}, null, 8, [
			"model-value",
			"placeholder",
			"disabled"
		]));
	}
}), Qx = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (e, t) => (o(), P(z(dp), I({
			"data-slot": "slider",
			"data-vertical": n.orientation === "vertical" ? "" : void 0,
			class: z($)("data-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col", n.class)
		}, z(i)), {
			default: u(({ modelValue: e }) => [W(z(gp), {
				"data-slot": "slider-track",
				"data-horizontal": n.orientation === "vertical" ? void 0 : "",
				"data-vertical": n.orientation === "vertical" ? "" : void 0,
				class: "bg-muted rounded-full data-horizontal:h-1 data-vertical:w-1 relative grow overflow-hidden data-horizontal:w-full data-vertical:h-full"
			}, {
				default: u(() => [W(z(pp), {
					"data-slot": "slider-range",
					"data-horizontal": n.orientation === "vertical" ? void 0 : "",
					"data-vertical": n.orientation === "vertical" ? "" : void 0,
					class: "bg-primary absolute select-none data-horizontal:h-full data-vertical:w-full"
				}, null, 8, ["data-horizontal", "data-vertical"])]),
				_: 1
			}, 8, ["data-horizontal", "data-vertical"]), (o(!0), E(B, null, f(e, (e, t) => (o(), P(z(hp), {
				key: t,
				"data-slot": "slider-thumb",
				"data-vertical": n.orientation === "vertical" ? "" : void 0,
				class: "border-ring ring-ring/50 relative size-3 rounded-full border bg-white transition-[color,box-shadow] after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50"
			}, null, 8, ["data-vertical"]))), 128))]),
			_: 1
		}, 16, ["data-vertical", "class"]));
	}
}), $x = { class: "block w-56 py-2" }, eS = /* @__PURE__ */ U({
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
		let n = e, r = t, i = R(() => Number(n.min ?? 0)), a = R(() => Number(n.max ?? 100)), s = R(() => Number(n.step ?? 1)), c = R(() => {
			if (n.value == null || n.value === "") return [i.value];
			let e = String(n.value).split(",").map((e) => Number(e.trim())).filter((e) => !Number.isNaN(e));
			return e.length ? e : [i.value];
		}), l = O([...c.value]), u = O(!1), d = ve();
		function f(e) {
			let t = d?._internals;
			t && (t.setFormValue(e.map(String).join(",")), t.setValidity({}));
		}
		function m(e) {
			e && (l.value = e, f(e), r("change", e));
		}
		return p(() => {
			d && (d._reset = () => {
				l.value = [...c.value], f(l.value);
			}, d._disabledChange = (e) => {
				u.value = e;
			}), f(l.value);
		}), (t, n) => (o(), E("span", $x, [W(z(Qx), {
			"model-value": l.value,
			min: i.value,
			max: a.value,
			step: s.value,
			disabled: e.disabled || u.value,
			"onUpdate:modelValue": m
		}, null, 8, [
			"model-value",
			"min",
			"max",
			"step",
			"disabled"
		])]));
	}
}), tS = /* @__PURE__ */ U({
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
		let n = e, i = t, a = Y(G(n, "class"), i);
		return (e, t) => (o(), P(z(Ig), I({
			"data-slot": "radio-group",
			class: z($)("grid gap-2 w-full", n.class)
		}, z(a)), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), nS = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(zg), I({ "data-slot": "radio-group-item" }, z(n), { class: z($)("border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 dark:aria-invalid:border-destructive/50 flex size-4 rounded-full focus-visible:ring-3 aria-invalid:ring-3 group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", t.class) }), {
			default: u(() => [W(z(Bg), {
				"data-slot": "radio-group-indicator",
				class: "flex size-4 items-center justify-center"
			}, {
				default: u(() => [v(e.$slots, "default", {}, () => [W(z(nr), { class: "bg-primary-foreground absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full" })])]),
				_: 3
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), rS = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(Gm), I({ "data-slot": "label" }, z(n), { class: z($)("gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), iS = /* @__PURE__ */ U({
	__name: "RadioGroup.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		value: { type: String }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = ve(), a = 0, s = Math.random().toString(36).slice(2, 8), c = O((i?._options ?? []).map((e) => ({
			...e,
			id: `go-rg-${s}-${a++}`
		}))), l = O(n.value ?? "");
		function d(e) {
			let t = i?._internals;
			if (!t) return;
			t.setFormValue(e || null);
			let r = i?.querySelector("[role=\"radiogroup\"]") ?? void 0;
			n.required && !e ? t.setValidity({ valueMissing: !0 }, "Selecione uma opção.", r) : t.setValidity({});
		}
		function m(e) {
			l.value = e, d(e), r("change", e);
		}
		return p(() => {
			i && (i._reset = () => {
				l.value = n.value ?? "", d(l.value);
			}), d(l.value);
		}), (t, n) => (o(), P(z(tS), {
			"model-value": l.value,
			disabled: e.disabled,
			class: "gap-3",
			"onUpdate:modelValue": m
		}, {
			default: u(() => [(o(!0), E(B, null, f(c.value, (e) => (o(), E("div", {
				key: e.value,
				class: "flex items-center gap-2"
			}, [W(z(nS), {
				value: e.value,
				id: e.id,
				disabled: e.disabled
			}, null, 8, [
				"value",
				"id",
				"disabled"
			]), W(z(rS), {
				for: e.id,
				class: "text-sm font-normal"
			}, {
				default: u(() => [V(H(e.label), 1)]),
				_: 2
			}, 1032, ["for"])]))), 128))]),
			_: 1
		}, 8, ["model-value", "disabled"]));
	}
}), aS = /* @__PURE__ */ U({
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
		let n = Y(e, t);
		return (e, t) => (o(), P(z(C_), I({ "data-slot": "select" }, z(n)), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16));
	}
}), oS = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (t, r) => (o(), P(z(H_), null, {
			default: u(() => [W(z(F_), I({
				"data-slot": "select-content",
				"data-align-trigger": e.position === "item-aligned"
			}, {
				...t.$attrs,
				...z(i)
			}, { class: z($)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-lg shadow-md ring-1 duration-100 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 cn-menu-translucent relative z-50 max-h-(--reka-select-content-available-height) origin-(--reka-select-content-transform-origin) overflow-x-hidden overflow-y-auto data-[align-trigger=true]:animate-none", e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", n.class) }), {
				default: u(() => [
					W(z(uS)),
					W(z(J_), {
						"data-position": e.position,
						class: F(z($)("data-[position=popper]:h-[var(--reka-select-trigger-height)] data-[position=popper]:w-full data-[position=popper]:min-w-[var(--reka-select-trigger-width)]"))
					}, {
						default: u(() => [v(t.$slots, "default")]),
						_: 3
					}, 8, ["data-position", "class"]),
					W(z(lS))
				]),
				_: 3
			}, 16, ["data-align-trigger", "class"])]),
			_: 3
		}));
	}
}), sS = { class: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }, cS = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(z_), I({ "data-slot": "select-item" }, z(n), { class: z($)("focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm [&_svg:not([class*=size-])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: u(() => [L("span", sS, [W(z(B_), null, {
				default: u(() => [v(e.$slots, "indicator-icon", {}, () => [W(z(Xn), { class: "pointer-events-none" })])]),
				_: 3
			})]), W(z(V_), null, {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), lS = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(W_), I({ "data-slot": "select-scroll-down-button" }, z(n), { class: z($)("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*=size-])]:size-4", t.class) }), {
			default: u(() => [v(e.$slots, "default", {}, () => [W(z(Zn))])]),
			_: 3
		}, 16, ["class"]));
	}
}), uS = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(G_), I({ "data-slot": "select-scroll-up-button" }, z(n), { class: z($)("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*=size-])]:size-4", t.class) }), {
			default: u(() => [v(e.$slots, "default", {}, () => [W(z(er))])]),
			_: 3
		}, 16, ["class"]));
	}
}), dS = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class", "size"));
		return (r, i) => (o(), P(z(K_), I({
			"data-slot": "select-trigger",
			"data-size": e.size
		}, z(n), { class: z($)("border-input data-placeholder:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-lg border bg-transparent py-2 pr-2 pl-2.5 text-sm transition-colors select-none focus-visible:ring-3 aria-invalid:ring-3 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*=size-])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: u(() => [v(r.$slots, "default"), W(z(I_), { "as-child": "" }, {
				default: u(() => [W(z(Zn), { class: "text-muted-foreground size-4 pointer-events-none" })]),
				_: 1
			})]),
			_: 3
		}, 16, ["data-size", "class"]));
	}
}), fS = /* @__PURE__ */ U({
	__name: "SelectValue",
	props: {
		placeholder: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(q_), I({ "data-slot": "select-value" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), pS = /* @__PURE__ */ U({
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
		let n = e, r = t, i = ve(), a = O([...i?._options ?? []]), s = O(n.value ?? "");
		function c(e) {
			let t = i?._internals;
			if (!t) return;
			t.setFormValue(e || null);
			let r = i?.querySelector("[role=\"combobox\"]") ?? void 0;
			n.required && !e ? t.setValidity({ valueMissing: !0 }, "Selecione uma opção.", r) : t.setValidity({});
		}
		function l(e) {
			let t = e == null ? "" : String(e);
			s.value = t, c(t), r("change", t);
		}
		return p(() => {
			i && (i._reset = () => {
				s.value = n.value ?? "", c(s.value);
			}), c(s.value);
		}), (t, n) => (o(), P(z(aS), {
			"model-value": s.value,
			disabled: e.disabled,
			"onUpdate:modelValue": l
		}, {
			default: u(() => [W(z(dS), { class: "w-56" }, {
				default: u(() => [W(z(fS), { placeholder: e.placeholder ?? "Selecione..." }, null, 8, ["placeholder"])]),
				_: 1
			}), W(z(oS), null, {
				default: u(() => [(o(!0), E(B, null, f(a.value, (e) => (o(), P(z(cS), {
					key: e.value,
					value: e.value,
					disabled: e.disabled
				}, {
					default: u(() => [V(H(e.label), 1)]),
					_: 2
				}, 1032, ["value", "disabled"]))), 128))]),
				_: 1
			})]),
			_: 1
		}, 8, ["model-value", "disabled"]));
	}
}), mS = /* @__PURE__ */ U({
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
		let n = e, i = t, a = Y(G(n, "class"), i);
		return (e, t) => (o(), P(z(rg), I(z(a), { class: z($)("grid gap-1.5", n.class) }), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), hS = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", { class: F(z($)("relative [&>[data-slot=input]]:has-[[data-slot=increment]]:pr-5 [&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-5", t.class)) }, [v(e.$slots, "default")], 2));
	}
}), gS = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(ig), I({ "data-slot": "decrement" }, z(n), { class: z($)("absolute top-1/2 -translate-y-1/2 left-0 p-3 disabled:cursor-not-allowed disabled:opacity-20", t.class) }), {
			default: u(() => [v(e.$slots, "default", {}, () => [W(z(or), { class: "h-4 w-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), _S = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(ag), I({ "data-slot": "increment" }, z(n), { class: z($)("absolute top-1/2 -translate-y-1/2 right-0 disabled:cursor-not-allowed disabled:opacity-20 p-3", t.class) }), {
			default: u(() => [v(e.$slots, "default", {}, () => [W(z(lr), { class: "h-4 w-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), vS = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(og), {
			"data-slot": "input",
			class: F(z($)("flex h-9 w-full rounded-md border border-input bg-transparent py-1 text-sm text-center shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", t.class))
		}, null, 8, ["class"]));
	}
}), yS = /* @__PURE__ */ U({
	__name: "NumberField.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		min: { type: [Number, String] },
		max: { type: [Number, String] },
		step: { type: [Number, String] },
		value: { type: [Number, String] },
		format: { type: String },
		currency: { type: String },
		currencyDisplay: { type: String },
		currencySign: { type: String },
		signDisplay: { type: String },
		minFractionDigits: { type: [Number, String] },
		maxFractionDigits: { type: [Number, String] }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = (() => {
			let e = {};
			return n.format === "currency" ? (e.style = "currency", e.currency = n.currency || "EUR", n.currencyDisplay && (e.currencyDisplay = n.currencyDisplay), n.currencySign && (e.currencySign = n.currencySign)) : n.format === "percent" ? e.style = "percent" : n.format === "decimal" && (e.style = "decimal"), n.signDisplay && (e.signDisplay = n.signDisplay), n.minFractionDigits != null && n.minFractionDigits !== "" && (e.minimumFractionDigits = Number(n.minFractionDigits)), n.maxFractionDigits != null && n.maxFractionDigits !== "" && (e.maximumFractionDigits = Number(n.maxFractionDigits)), Object.keys(e).length ? e : void 0;
		})(), a = n.value != null && n.value !== "" ? Number(n.value) : null, s = O(a), c = O(!1), l = ve();
		function d(e) {
			let t = l?._internals;
			if (!t) return;
			let r = e == null || Number.isNaN(e);
			t.setFormValue(r ? null : String(e));
			let i = l?.querySelector("input") ?? void 0;
			n.required && r ? t.setValidity({ valueMissing: !0 }, "Obrigatório.", i) : t.setValidity({});
		}
		function f(e) {
			s.value = e ?? null, d(s.value), r("change", s.value);
		}
		return p(() => {
			l && (l._reset = () => {
				s.value = a, d(s.value);
			}, l._disabledChange = (e) => {
				c.value = e;
			}), d(s.value);
		}), (t, n) => (o(), P(z(mS), {
			"model-value": s.value ?? void 0,
			min: e.min == null ? void 0 : Number(e.min),
			max: e.max == null ? void 0 : Number(e.max),
			step: e.step == null ? void 0 : Number(e.step),
			"format-options": z(i),
			disabled: e.disabled || c.value,
			class: "w-40",
			"onUpdate:modelValue": f
		}, {
			default: u(() => [W(z(hS), null, {
				default: u(() => [
					W(z(gS)),
					W(z(vS)),
					W(z(_S))
				]),
				_: 1
			})]),
			_: 1
		}, 8, [
			"model-value",
			"min",
			"max",
			"step",
			"format-options",
			"disabled"
		]));
	}
}), bS = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (e, t) => (o(), P(z(xg), I({
			otp: n.otp,
			"data-slot": "pin-input"
		}, z(i), { class: z($)("flex items-center gap-2 has-disabled:opacity-50 disabled:cursor-not-allowed", n.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["otp", "class"]));
	}
}), xS = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(X), I({ "data-slot": "pin-input-group" }, z(n), { class: z($)("flex items-center", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), SS = /* @__PURE__ */ U({
	__name: "PinInputSeparator",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = J(e);
		return (e, n) => (o(), P(z(X), I({ "data-slot": "pin-input-separator" }, z(t)), {
			default: u(() => [v(e.$slots, "default", {}, () => [W(z(or))])]),
			_: 3
		}, 16));
	}
}), CS = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Sg), I({ "data-slot": "pin-input-slot" }, z(n), { class: z($)("border-input focus:border-ring focus:ring-ring/50 focus:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:focus:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus:aria-invalid:border-destructive relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none text-center first:rounded-l-md first:border-l last:rounded-r-md focus:z-10 focus:ring-[3px]", t.class) }), null, 16, ["class"]));
	}
}), wS = /* @__PURE__ */ U({
	__name: "PinInput.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		length: { type: [Number, String] },
		value: { type: String },
		pattern: { type: String },
		separator: { type: Boolean }
	},
	emits: ["complete", "change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Number(n.length ?? 6), a = n.pattern === "digits", s = Math.ceil(i / 2), c = O((n.value ?? "").slice(0, i).split("")), l = R(() => Array.from({ length: s }, (e, t) => t)), d = R(() => Array.from({ length: i - s }, (e, t) => s + t)), m = ve();
		function h() {
			let e = m?._internals;
			if (!e) return;
			let t = c.value.join("");
			e.setFormValue(t || null);
			let r = m?.querySelector("input") ?? void 0;
			n.required && t.length < i ? e.setValidity({ valueMissing: !0 }, "Código incompleto.", r) : e.setValidity({});
		}
		function g(e) {
			c.value = e, h(), r("change", e.join(""));
		}
		return p(() => {
			m && (m._reset = () => {
				c.value = [], h();
			}), h();
		}), (t, n) => (o(), P(z(bS), {
			"model-value": c.value,
			disabled: e.disabled,
			type: a ? "number" : "text",
			"onUpdate:modelValue": g,
			onComplete: n[0] ||= (e) => r("complete", c.value.join(""))
		}, {
			default: u(() => [e.separator ? (o(), E(B, { key: 0 }, [
				W(z(xS), null, {
					default: u(() => [(o(!0), E(B, null, f(l.value, (e) => (o(), P(z(CS), {
						key: e,
						index: e,
						inputmode: a ? "numeric" : void 0
					}, null, 8, ["index", "inputmode"]))), 128))]),
					_: 1
				}),
				W(z(SS)),
				W(z(xS), null, {
					default: u(() => [(o(!0), E(B, null, f(d.value, (e) => (o(), P(z(CS), {
						key: e,
						index: e,
						inputmode: a ? "numeric" : void 0
					}, null, 8, ["index", "inputmode"]))), 128))]),
					_: 1
				})
			], 64)) : (o(), P(z(xS), { key: 1 }, {
				default: u(() => [(o(!0), E(B, null, f(z(i), (e) => (o(), P(z(CS), {
					key: e,
					index: e - 1,
					inputmode: a ? "numeric" : void 0
				}, null, 8, ["index", "inputmode"]))), 128))]),
				_: 1
			}))]),
			_: 1
		}, 8, [
			"model-value",
			"disabled",
			"type"
		]));
	}
}), TS = /* @__PURE__ */ U({
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
		let n = e, i = t, a = Y(G(n, "class"), i);
		return (e, t) => (o(), P(z(Uy), I(z(a), { class: z($)("flex flex-wrap gap-2 items-center rounded-md border border-input bg-background px-2 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none", "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", n.class) }), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), ES = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Wy), I(z(n), { class: z($)("text-sm min-h-5 focus:outline-none flex-1 bg-transparent px-1", t.class) }), null, 16, ["class"]));
	}
}), DS = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(qy), I(z(n), { class: z($)("flex h-5 items-center rounded-md bg-secondary data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), OS = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Jy), I(z(n), { class: z($)("flex rounded bg-transparent mr-1", t.class) }), {
			default: u(() => [v(e.$slots, "default", {}, () => [W(z(fr), { class: "w-4 h-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), kS = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Yy), I(z(n), { class: z($)("py-0.5 px-2 text-sm rounded bg-transparent", t.class) }), null, 16, ["class"]));
	}
}), AS = /* @__PURE__ */ U({
	__name: "TagsInput.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		placeholder: { type: String },
		value: { type: String },
		delimiter: { type: String }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = n.delimiter || ",", a = typeof n.value == "string" && n.value.length ? n.value.split(i).map((e) => e.trim()).filter(Boolean) : [], s = O([...a]), c = ve();
		function l() {
			let e = c?._internals;
			if (!e) return;
			let t = n.name || c?.getAttribute("name") || "";
			if (s.value.length === 0) e.setFormValue(null);
			else if (t) {
				let n = new FormData();
				s.value.forEach((e) => n.append(t, e)), e.setFormValue(n);
			} else e.setFormValue(s.value.join(","));
			let r = c?.querySelector("input") ?? void 0;
			n.required && s.value.length === 0 ? e.setValidity({ valueMissing: !0 }, "Adicione pelo menos uma tag.", r) : e.setValidity({});
		}
		function d(e) {
			s.value = e, l(), r("change", e);
		}
		return p(() => {
			c && (c._reset = () => {
				s.value = [...a], l();
			}), l();
		}), (t, n) => (o(), P(z(TS), {
			"model-value": s.value,
			disabled: e.disabled,
			class: "w-72",
			"onUpdate:modelValue": d
		}, {
			default: u(() => [(o(!0), E(B, null, f(s.value, (e) => (o(), P(z(DS), {
				key: e,
				value: e
			}, {
				default: u(() => [W(z(kS)), W(z(OS))]),
				_: 1
			}, 8, ["value"]))), 128)), W(z(ES), { placeholder: e.placeholder ?? "Adicionar..." }, null, 8, ["placeholder"])]),
			_: 1
		}, 8, ["model-value", "disabled"]));
	}
}), jS = ["data-size"], MS = /* @__PURE__ */ U({
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
		return (n, r) => (o(), E("div", {
			"data-slot": "card",
			"data-size": e.size,
			class: F(z($)("ring-foreground/10 bg-card text-card-foreground gap-4 overflow-hidden rounded-xl py-4 text-sm ring-1 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col", t.class))
		}, [v(n.$slots, "default")], 10, jS));
	}
}), NS = /* @__PURE__ */ U({
	__name: "CardAction",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (o(), E("div", {
			"data-slot": "card-action",
			class: F(z($)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), PS = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "card-content",
			class: F(z($)("px-4 group-data-[size=sm]/card:px-3", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), FS = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "card-description",
			class: F(z($)("text-muted-foreground text-sm", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), IS = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "card-footer",
			class: F(z($)("bg-muted/50 rounded-b-xl border-t p-4 group-data-[size=sm]/card:p-3 flex items-center", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), LS = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "card-header",
			class: F(z($)("gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), RS = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "card-title",
			class: F(z($)("text-base leading-snug font-medium group-data-[size=sm]/card:text-sm cn-font-heading", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), zS = /* @__PURE__ */ U({
	__name: "Card.ce",
	props: {
		cardTitle: { type: String },
		cardDescription: { type: String }
	},
	setup(e) {
		let t = x(), n = ve()?._light?.slots ?? {}, r = !!n.action;
		return (i, a) => (o(), P(z(MS), { class: "w-full" }, {
			default: u(() => [
				e.cardTitle || e.cardDescription || r ? (o(), P(z(LS), { key: 0 }, {
					default: u(() => [
						e.cardTitle ? (o(), P(z(RS), { key: 0 }, {
							default: u(() => [V(H(e.cardTitle), 1)]),
							_: 1
						})) : M("", !0),
						e.cardDescription ? (o(), P(z(FS), { key: 1 }, {
							default: u(() => [V(H(e.cardDescription), 1)]),
							_: 1
						})) : M("", !0),
						r ? (o(), P(z(NS), {
							key: 2,
							innerHTML: z(n).action
						}, null, 8, ["innerHTML"])) : M("", !0)
					]),
					_: 1
				})) : M("", !0),
				W(z(PS), null, {
					default: u(() => [v(i.$slots, "default")]),
					_: 3
				}),
				z(t).footer ? (o(), P(z(IS), { key: 1 }, {
					default: u(() => [v(i.$slots, "footer")]),
					_: 3
				})) : M("", !0)
			]),
			_: 3
		}));
	}
}), BS = /* @__PURE__ */ U({
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
		let n = e, i = t, a = Y(G(n, "class"), i);
		return (e, t) => (o(), P(z(Ys), I({ "data-slot": "accordion" }, z(a), { class: z($)("flex w-full flex-col", n.class) }), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), VS = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(ec), I({ "data-slot": "accordion-content" }, z(n), { class: "data-open:animate-accordion-down data-closed:animate-accordion-up text-sm overflow-hidden" }), {
			default: u(() => [L("div", { class: F(z($)("pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", t.class)) }, [v(e.$slots, "default")], 2)]),
			_: 3
		}, 16));
	}
}), HS = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, i) => (o(), P(z($s), I({ "data-slot": "accordion-item" }, z(n), { class: z($)("not-last:border-b", t.class) }), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), US = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(tc), { class: "flex" }, {
			default: u(() => [W(z(nc), I({ "data-slot": "accordion-trigger" }, z(n), { class: z($)("focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground rounded-lg py-2.5 text-left text-sm font-medium hover:underline focus-visible:ring-3 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50", t.class) }), {
				default: u(() => [v(e.$slots, "default"), v(e.$slots, "icon", {}, () => [W(z(Zn), {
					"data-slot": "accordion-trigger-icon",
					class: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
				}), W(z(er), {
					"data-slot": "accordion-trigger-icon",
					class: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
				})])]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), WS = ["innerHTML"], GS = /* @__PURE__ */ U({
	__name: "Accordion.ce",
	props: {
		type: { type: String },
		collapsible: { type: Boolean },
		defaultValue: { type: String }
	},
	setup(e) {
		let t = e, n = ve()?._light.sections ?? [];
		return (r, i) => (o(), P(z(BS), {
			type: t.type ?? "single",
			collapsible: t.collapsible ?? !0,
			"default-value": e.defaultValue,
			class: "w-96"
		}, {
			default: u(() => [(o(!0), E(B, null, f(z(n), (e, t) => (o(), P(z(HS), {
				key: t,
				value: e.value || String(t),
				disabled: e.disabled
			}, {
				default: u(() => [W(z(US), null, {
					default: u(() => [V(H(e.title), 1)]),
					_: 2
				}, 1024), W(z(VS), null, {
					default: u(() => [L("div", { innerHTML: e.html }, null, 8, WS)]),
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
}), KS = /* @__PURE__ */ U({
	__name: "Dialog",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), P(z(ac), I({ "data-slot": "dialog" }, z(n)), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16));
	}
}), qS = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, JS = hb, YS = (e, t) => (n) => {
	if (t?.variants == null) return JS(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = qS(t) || qS(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return JS(e, a, t?.compoundVariants?.reduce((e, t) => {
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
}, XS = /* @__PURE__ */ U({
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
		return (n, r) => (o(), P(z(X), {
			"data-slot": "button",
			"data-variant": e.variant,
			"data-size": e.size,
			as: e.as,
			"as-child": e.asChild,
			class: F(z($)(z(ZS)({
				variant: e.variant,
				size: e.size
			}), t.class))
		}, {
			default: u(() => [v(n.$slots, "default")]),
			_: 3
		}, 8, [
			"data-variant",
			"data-size",
			"as",
			"as-child",
			"class"
		]));
	}
}), ZS = YS("focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 active:not-aria-[haspopup]:translate-y-px [&_svg:not([class*=size-])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
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
}), QS = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(Jc), I({ "data-slot": "dialog-overlay" }, z(n), { class: z($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), $S = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (t, r) => (o(), P(z(Xc), null, {
			default: u(() => [W(QS), W(z(Gc), I({ "data-slot": "dialog-content" }, {
				...t.$attrs,
				...z(i)
			}, { class: z($)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 ring-foreground/10 grid max-w-[calc(100%-2rem)] gap-4 rounded-xl p-4 text-sm ring-1 duration-100 sm:max-w-sm fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none", n.class) }), {
				default: u(() => [v(t.$slots, "default"), e.showCloseButton ? (o(), P(z(oc), {
					key: 0,
					"data-slot": "dialog-close",
					"as-child": ""
				}, {
					default: u(() => [W(z(XS), {
						variant: "ghost",
						class: "absolute top-2 right-2",
						size: "icon-sm"
					}, {
						default: u(() => [W(z(fr)), r[0] ||= L("span", { class: "sr-only" }, "Close", -1)]),
						_: 1
					})]),
					_: 1
				})) : M("", !0)]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), eC = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Kc), I({ "data-slot": "dialog-description" }, z(n), { class: z($)("text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), tC = /* @__PURE__ */ U({
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
		return (n, r) => (o(), E("div", {
			"data-slot": "dialog-footer",
			class: F(z($)("bg-muted/50 -mx-4 -mb-4 rounded-b-xl border-t p-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", t.class))
		}, [v(n.$slots, "default"), e.showCloseButton ? (o(), P(z(oc), {
			key: 0,
			"as-child": ""
		}, {
			default: u(() => [W(z(XS), { variant: "outline" }, {
				default: u(() => [...r[0] ||= [V(" Close ", -1)]]),
				_: 1
			})]),
			_: 1
		})) : M("", !0)], 2));
	}
}), nC = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "dialog-header",
			class: F(z($)("gap-2 flex flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), rC = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Zc), I({ "data-slot": "dialog-title" }, z(n), { class: z($)("text-base leading-none font-medium cn-font-heading", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), iC = /* @__PURE__ */ U({
	__name: "DialogTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(Qc), I({ "data-slot": "dialog-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), aC = ["innerHTML"], oC = /* @__PURE__ */ U({
	__name: "Dialog.ce",
	setup(e) {
		let t = ve()?._light.slots ?? {};
		return (e, n) => (o(), P(z(KS), null, {
			default: u(() => [W(z(iC), null, {
				default: u(() => [v(e.$slots, "trigger", {}, () => [n[0] ||= V("Abrir", -1)])]),
				_: 3
			}), W(z($S), null, {
				default: u(() => [
					z(t).title || z(t).description ? (o(), P(z(nC), { key: 0 }, {
						default: u(() => [z(t).title ? (o(), P(z(rC), {
							key: 0,
							innerHTML: z(t).title
						}, null, 8, ["innerHTML"])) : M("", !0), z(t).description ? (o(), P(z(eC), {
							key: 1,
							innerHTML: z(t).description
						}, null, 8, ["innerHTML"])) : M("", !0)]),
						_: 1
					})) : M("", !0),
					z(t).content ? (o(), E("div", {
						key: 1,
						innerHTML: z(t).content
					}, null, 8, aC)) : M("", !0),
					z(t).footer ? (o(), P(z(tC), {
						key: 2,
						innerHTML: z(t).footer
					}, null, 8, ["innerHTML"])) : M("", !0)
				]),
				_: 1
			})]),
			_: 3
		}));
	}
}), sC = /* @__PURE__ */ U({
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
		return (n, r) => (o(), E("div", {
			"data-slot": "alert",
			class: F(z($)(z(uC)({ variant: e.variant }), t.class)),
			role: "alert"
		}, [v(n.$slots, "default")], 2));
	}
}), cC = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "alert-description",
			class: F(z($)("text-muted-foreground text-sm text-balance md:text-pretty [&_p:not(:last-child)]:mb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), lC = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "alert-title",
			class: F(z($)("font-medium group-has-[>svg]/alert:col-start-2 cn-font-heading [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), uC = YS("grid gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*=size-])]:size-4 group/alert relative w-full", {
	variants: { variant: {
		default: "bg-card text-card-foreground",
		destructive: "text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"
	} },
	defaultVariants: { variant: "default" }
}), dC = /* @__PURE__ */ U({
	__name: "Alert.ce",
	props: { variant: { type: null } },
	setup(e) {
		let t = e, n = ve()?._light, r = n?.slots ?? {}, i = !!r.title;
		return (e, a) => (o(), P(z(sC), { variant: t.variant }, {
			default: u(() => [i ? (o(), P(z(lC), {
				key: 0,
				innerHTML: z(r).title
			}, null, 8, ["innerHTML"])) : M("", !0), W(z(cC), { innerHTML: z(r).description || z(n)?.defaultHtml || "" }, null, 8, ["innerHTML"])]),
			_: 1
		}, 8, ["variant"]));
	}
}), fC = /* @__PURE__ */ U({
	__name: "AspectRatio",
	props: {
		ratio: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(cl), I({ "data-slot": "aspect-ratio" }, t), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16));
	}
}), pC = ["innerHTML"], mC = /* @__PURE__ */ U({
	__name: "AspectRatio.ce",
	props: { ratio: { type: [String, Number] } },
	setup(e) {
		let t = e, n = ve()?._light, r = (() => {
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
		return (e, t) => (o(), P(z(fC), { ratio: z(r) }, {
			default: u(() => [L("div", { innerHTML: z(n)?.defaultHtml || "" }, null, 8, pC)]),
			_: 1
		}, 8, ["ratio"]));
	}
}), hC = /* @__PURE__ */ U({
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
		return (n, r) => (o(), P(z(sf), {
			"data-slot": "avatar",
			"data-size": e.size ?? "default",
			class: F(z($)(z(vC)({ size: e.size }), t.class))
		}, {
			default: u(() => [v(n.$slots, "default")]),
			_: 3
		}, 8, ["data-size", "class"]));
	}
}), gC = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(cf), I({ "data-slot": "avatar-fallback" }, z(n), { class: z($)("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), _C = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(df), I({ "data-slot": "avatar-image" }, t, { class: "rounded-full aspect-square size-full object-cover" }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), vC = YS("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten", {
	variants: { size: {
		sm: "",
		default: "",
		lg: ""
	} },
	defaultVariants: { size: "default" }
}), yC = ["innerHTML"], bC = /* @__PURE__ */ U({
	__name: "Avatar.ce",
	props: {
		src: { type: String },
		alt: { type: String },
		fallback: { type: String },
		size: { type: null }
	},
	setup(e) {
		let t = e, n = ve()?._light?.slots ?? {};
		return (e, r) => (o(), P(z(hC), { size: t.size }, {
			default: u(() => [t.src ? (o(), P(z(_C), {
				key: 0,
				src: t.src,
				alt: t.alt ?? ""
			}, null, 8, ["src", "alt"])) : M("", !0), W(z(gC), null, {
				default: u(() => [z(n).fallback ? (o(), E("span", {
					key: 0,
					innerHTML: z(n).fallback
				}, null, 8, yC)) : (o(), E(B, { key: 1 }, [V(H(t.fallback ?? ""), 1)], 64))]),
				_: 1
			})]),
			_: 1
		}, 8, ["size"]));
	}
}), xC = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (r, i) => (o(), P(z(X), I({
			"data-slot": "badge",
			"data-variant": e.variant,
			class: z($)(z(SC)({ variant: e.variant }), t.class)
		}, z(n)), {
			default: u(() => [v(r.$slots, "default")]),
			_: 3
		}, 16, ["data-variant", "class"]));
	}
}), SC = YS("h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
		destructive: "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
		outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
		ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
		link: "text-primary underline-offset-4 hover:underline"
	} },
	defaultVariants: { variant: "default" }
}), CC = [
	"href",
	"data-variant",
	"innerHTML"
], wC = ["innerHTML"], TC = /* @__PURE__ */ U({
	__name: "Badge.ce",
	props: {
		variant: { type: null },
		asChild: { type: Boolean }
	},
	setup(e) {
		let t = e, n = (ve()?._light?.defaultHtml || "").trim(), r = R(() => {
			if (!t.asChild) return null;
			let e = document.createElement("template");
			e.innerHTML = n;
			let r = [...e.content.children], i = r.length === 1 ? r[0] : null;
			return i && i.tagName === "A" ? i : null;
		}), i = R(() => r.value?.getAttribute("href") ?? "#"), a = R(() => r.value?.innerHTML ?? ""), s = R(() => $(SC({ variant: t.variant })));
		return (e, c) => r.value ? (o(), E("a", {
			key: 0,
			href: i.value,
			"data-slot": "badge",
			"data-variant": t.variant,
			class: F(s.value),
			innerHTML: a.value
		}, null, 10, CC)) : (o(), P(z(xC), {
			key: 1,
			variant: t.variant
		}, {
			default: u(() => [L("span", { innerHTML: z(n) }, null, 8, wC)]),
			_: 1
		}, 8, ["variant"]));
	}
}), EC = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("nav", {
			"aria-label": "breadcrumb",
			"data-slot": "breadcrumb",
			class: F(z($)("", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), DC = /* @__PURE__ */ U({
	__name: "BreadcrumbEllipsis",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (o(), E("span", {
			"data-slot": "breadcrumb-ellipsis",
			role: "presentation",
			"aria-hidden": "true",
			class: F(z($)("size-5 [&>svg]:size-4 flex items-center justify-center", t.class))
		}, [v(e.$slots, "default", {}, () => [W(z(rr))]), n[0] ||= L("span", { class: "sr-only" }, "More", -1)], 2));
	}
}), OC = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("li", {
			"data-slot": "breadcrumb-item",
			class: F(z($)("gap-1 inline-flex items-center", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), kC = /* @__PURE__ */ U({
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
		return (n, r) => (o(), P(z(X), {
			"data-slot": "breadcrumb-link",
			as: e.as,
			"as-child": e.asChild,
			class: F(z($)("hover:text-foreground transition-colors", t.class))
		}, {
			default: u(() => [v(n.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class"
		]));
	}
}), AC = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("ol", {
			"data-slot": "breadcrumb-list",
			class: F(z($)("text-muted-foreground gap-1.5 text-sm flex flex-wrap items-center wrap-break-word", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), jC = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("span", {
			"data-slot": "breadcrumb-page",
			role: "link",
			"aria-disabled": "true",
			"aria-current": "page",
			class: F(z($)("text-foreground font-normal", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), MC = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("li", {
			"data-slot": "breadcrumb-separator",
			role: "presentation",
			"aria-hidden": "true",
			class: F(z($)("[&>svg]:size-3.5", t.class))
		}, [v(e.$slots, "default", {}, () => [W(z($n), { class: "cn-rtl-flip" })])], 2));
	}
}), NC = /* @__PURE__ */ U({
	__name: "Breadcrumb.ce",
	props: {
		separator: { type: String },
		collapse: { type: String }
	},
	setup(e) {
		let t = e, n = ve()?._light?.options ?? [], r = R(() => {
			let e = n.map((e) => ({
				kind: "item",
				label: e.label,
				value: e.value
			}));
			if (t.collapse === void 0) return e;
			let r = Math.max(1, parseInt(t.collapse || "2", 10) || 2);
			return e.length <= r + 1 ? e : [
				e[0],
				{ kind: "ellipsis" },
				...e.slice(e.length - r)
			];
		});
		return (t, n) => (o(), P(z(EC), null, {
			default: u(() => [W(z(AC), null, {
				default: u(() => [(o(!0), E(B, null, f(r.value, (t, n) => (o(), E(B, { key: n }, [W(z(OC), null, {
					default: u(() => [t.kind === "ellipsis" ? (o(), P(z(DC), { key: 0 })) : n === r.value.length - 1 ? (o(), P(z(jC), { key: 1 }, {
						default: u(() => [V(H(t.label), 1)]),
						_: 2
					}, 1024)) : (o(), P(z(kC), {
						key: 2,
						href: t.value
					}, {
						default: u(() => [V(H(t.label), 1)]),
						_: 2
					}, 1032, ["href"]))]),
					_: 2
				}, 1024), n < r.value.length - 1 ? (o(), P(z(MC), { key: 0 }, {
					default: u(() => [e.separator ? (o(), E(B, { key: 0 }, [V(H(e.separator), 1)], 64)) : M("", !0)]),
					_: 1
				})) : M("", !0)], 64))), 128))]),
				_: 1
			})]),
			_: 1
		}));
	}
}), PC = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(X_), I({ "data-slot": "separator" }, z(n), { class: z($)("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch", t.class) }), null, 16, ["class"]));
	}
}), FC = /* @__PURE__ */ U({
	__name: "Separator.ce",
	props: { orientation: { type: String } },
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(PC), { orientation: t.orientation ?? "horizontal" }, null, 8, ["orientation"]));
	}
}), IC = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "skeleton",
			class: F(z($)("bg-muted rounded-md animate-pulse", t.class))
		}, null, 2));
	}
}), LC = /* @__PURE__ */ U({
	__name: "Skeleton.ce",
	props: {
		width: { type: String },
		height: { type: String },
		circle: { type: Boolean },
		radius: { type: String }
	},
	setup(e) {
		let t = e, n = R(() => {
			let e = {};
			return t.width && (e.width = t.width), t.height && (e.height = t.height), e;
		}), r = {
			none: "rounded-none",
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
			xl: "rounded-xl",
			full: "rounded-full"
		}, i = R(() => t.circle ? "rounded-full" : t.radius ? r[t.radius] ?? "" : "");
		return (e, t) => (o(), P(z(IC), {
			class: F(i.value),
			style: D(n.value)
		}, null, 8, ["class", "style"]));
	}
}), RC = ["innerHTML"], zC = /* @__PURE__ */ U({
	__name: "Button.ce",
	props: {
		variant: { type: null },
		size: { type: null },
		disabled: { type: Boolean },
		type: { type: String }
	},
	setup(e) {
		let t = e, n = ve()?._light;
		return (e, r) => (o(), P(z(XS), {
			variant: t.variant,
			size: t.size,
			disabled: t.disabled,
			type: t.type ?? "button"
		}, {
			default: u(() => [L("span", { innerHTML: z(n)?.defaultHtml || "" }, null, 8, RC)]),
			_: 1
		}, 8, [
			"variant",
			"size",
			"disabled",
			"type"
		]));
	}
}), BC = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(kg), I({ "data-slot": "progress" }, z(n), { class: z($)("bg-muted h-1 rounded-full relative flex w-full items-center overflow-x-hidden", t.class) }), {
			default: u(() => [W(z(Ag), {
				"data-slot": "progress-indicator",
				class: "bg-primary size-full flex-1 transition-all",
				style: D(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
			}, null, 8, ["style"])]),
			_: 1
		}, 16, ["class"]));
	}
}), VC = /* @__PURE__ */ U({
	__name: "Progress.ce",
	props: { value: { type: [Number, String] } },
	setup(e) {
		ve();
		let t = e, n = R(() => Number(t.value ?? 0));
		return (e, t) => (o(), P(z(BC), { "model-value": n.value }, null, 8, ["model-value"]));
	}
}), HC = /* @__PURE__ */ U({
	__name: "Label.ce",
	props: { for: { type: String } },
	setup(e) {
		let t = ve()?._light, n = e;
		return (e, r) => (o(), P(z(rS), {
			for: n.for,
			innerHTML: z(t)?.defaultHtml || ""
		}, null, 8, ["for", "innerHTML"]));
	}
}), UC = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "input-group",
			role: "group",
			class: F(z($)("border-input dark:bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-disabled:bg-input/50 dark:has-disabled:bg-input/80 h-8 rounded-lg border transition-colors in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-3 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), WC = ["data-align"], GC = /* @__PURE__ */ U({
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
		return (e, r) => (o(), E("div", {
			role: "group",
			"data-slot": "input-group-addon",
			"data-align": t.align,
			class: F(z($)(z(JC)({ align: t.align }), t.class)),
			onClick: n
		}, [v(e.$slots, "default")], 10, WC));
	}
}), KC = /* @__PURE__ */ U({
	__name: "InputGroupInput",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(Jx), {
			"data-slot": "input-group-control",
			class: F(z($)("rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1", t.class))
		}, null, 8, ["class"]));
	}
}), qC = /* @__PURE__ */ U({
	__name: "InputGroupTextarea",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(Xx), {
			"data-slot": "input-group-control",
			class: F(z($)("rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1 resize-none", t.class))
		}, null, 8, ["class"]));
	}
}), JC = YS("text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*=size-])]:size-4 flex cursor-text items-center justify-center select-none", {
	variants: { align: {
		"inline-start": "pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first",
		"inline-end": "pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] order-last",
		"block-start": "px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start",
		"block-end": "px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start"
	} },
	defaultVariants: { align: "inline-start" }
}), YC = /* @__PURE__ */ U({
	__name: "InputGroup.ce",
	setup(e) {
		let t = ve()?._light, n = R(() => {
			let e = new DOMParser().parseFromString(`<div>${t?.html ?? ""}</div>`, "text/html").body.firstElementChild, n = [], r = "input", i = {}, a = (e) => e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.getAttribute("data-slot") === "input-group-control" || ["input", "control"].includes(e.getAttribute("slot") ?? ""), o = (e) => {
				if (e.getAttribute("data-slot") === "input-group-addon") return e.getAttribute("data-align") ?? "inline-start";
				let t = e.getAttribute("slot");
				return t === "prefix" ? "inline-start" : t === "suffix" ? "inline-end" : null;
			};
			for (let t of [...e?.children ?? []]) {
				let e = o(t);
				if (a(t) && t.getAttribute("data-slot") !== "input-group-addon") r = t.tagName === "TEXTAREA" ? "textarea" : "input", i = Object.fromEntries([...t.attributes].filter((e) => ![
					"slot",
					"data-slot",
					"class"
				].includes(e.name)).map((e) => [e.name, e.value]));
				else if (e) {
					let r = t.getAttribute("data-slot") === "input-group-addon";
					n.push({
						align: e,
						html: r ? t.innerHTML : t.outerHTML
					});
				}
			}
			return {
				addons: n,
				controlTag: r,
				controlAttrs: i
			};
		}), r = R(() => n.value.addons.filter((e) => e.align === "inline-start" || e.align === "block-start")), i = R(() => n.value.addons.filter((e) => e.align === "inline-end" || e.align === "block-end"));
		return (e, t) => (o(), P(z(UC), null, {
			default: u(() => [
				(o(!0), E(B, null, f(r.value, (e, t) => (o(), P(z(GC), {
					key: "p" + t,
					align: e.align,
					innerHTML: e.html
				}, null, 8, ["align", "innerHTML"]))), 128)),
				n.value.controlTag === "textarea" ? (o(), P(z(qC), N(I({ key: 0 }, n.value.controlAttrs)), null, 16)) : (o(), P(z(KC), N(I({ key: 1 }, n.value.controlAttrs)), null, 16)),
				(o(!0), E(B, null, f(i.value, (e, t) => (o(), P(z(GC), {
					key: "s" + t,
					align: e.align,
					innerHTML: e.html
				}, null, 8, ["align", "innerHTML"]))), 128))
			]),
			_: 1
		}));
	}
}), XC = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (r, i) => (o(), P(z(c_), I({
			"data-slot": "scroll-area-scrollbar",
			"data-orientation": e.orientation
		}, z(n), { class: z($)("data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent flex touch-none p-px transition-colors select-none", t.class) }), {
			default: u(() => [W(z(p_), {
				"data-slot": "scroll-area-thumb",
				class: "rounded-full relative flex-1 bg-border"
			})]),
			_: 1
		}, 16, ["data-orientation", "class"]));
	}
}), ZC = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(Ug), I({ "data-slot": "scroll-area" }, z(n), { class: z($)("relative", t.class) }), {
			default: u(() => [
				W(z(m_), {
					"data-slot": "scroll-area-viewport",
					class: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
				}, {
					default: u(() => [v(e.$slots, "default")]),
					_: 3
				}),
				W(XC),
				W(z(Gg))
			]),
			_: 3
		}, 16, ["class"]));
	}
}), QC = /* @__PURE__ */ U({
	__name: "ScrollArea.ce",
	props: {
		height: { type: String },
		width: { type: String }
	},
	setup(e) {
		let t = e, n = R(() => ({
			...t.height ? { height: t.height } : {},
			...t.width ? { width: t.width } : {}
		}));
		return (e, t) => (o(), P(z(ZC), { style: D(n.value) }, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["style"]));
	}
}), $C = { class: "go-table-wrap" }, ew = /* @__PURE__ */ U({
	__name: "Table.ce",
	setup(e) {
		return (e, t) => (o(), E("div", $C, [v(e.$slots, "default")]));
	}
}), tw = /* @__PURE__ */ U({
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
		let n = e, i = t, a = Y(G(n, "class"), i);
		return (e, t) => (o(), P(z(Fy), I({
			"data-slot": "tabs",
			"data-orientation": z(a).orientation || "horizontal"
		}, z(a), { class: z($)("gap-2 group/tabs flex data-horizontal:flex-col", n.class) }), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16, ["data-orientation", "class"]));
	}
}), nw = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(Ry), I({
			"data-slot": "tabs-content",
			class: z($)("text-sm flex-1 outline-none", t.class)
		}, z(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), rw = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class", "variant");
		return (r, i) => (o(), P(z(zy), I({
			"data-slot": "tabs-list",
			"data-variant": e.variant
		}, z(n), { class: z($)(z(aw)({ variant: e.variant }), t.class) }), {
			default: u(() => [v(r.$slots, "default")]),
			_: 3
		}, 16, ["data-variant", "class"]));
	}
}), iw = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(By), I({
			"data-slot": "tabs-trigger",
			class: z($)("gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg:not([class*=size-])]:size-4 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent", "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", t.class)
		}, z(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), aw = YS("rounded-lg p-[3px] group-data-horizontal/tabs:h-8 data-[variant=line]:rounded-none group/tabs-list inline-flex w-fit items-center justify-center text-muted-foreground group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
}), ow = ["innerHTML"], sw = /* @__PURE__ */ U({
	__name: "Tabs.ce",
	props: { defaultValue: { type: String } },
	setup(e) {
		let t = e, n = ve()?._light.sections ?? [], r = t.defaultValue ?? n[0]?.value ?? void 0;
		return (e, t) => (o(), P(z(tw), { "default-value": z(r) }, {
			default: u(() => [W(z(rw), null, {
				default: u(() => [(o(!0), E(B, null, f(z(n), (e, t) => (o(), P(z(iw), {
					key: t,
					value: e.value || String(t),
					disabled: e.disabled
				}, {
					default: u(() => [V(H(e.title), 1)]),
					_: 2
				}, 1032, ["value", "disabled"]))), 128))]),
				_: 1
			}), (o(!0), E(B, null, f(z(n), (e, t) => (o(), P(z(nw), {
				key: t,
				value: e.value || String(t)
			}, {
				default: u(() => [L("div", { innerHTML: e.html }, null, 8, ow)]),
				_: 2
			}, 1032, ["value"]))), 128))]),
			_: 1
		}, 8, ["default-value"]));
	}
}), cw = /* @__PURE__ */ U({
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
		let n = Y(e, t);
		return (e, t) => (o(), P(z(Bs), I({ "data-slot": "collapsible" }, z(n)), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16));
	}
}), lw = /* @__PURE__ */ U({
	__name: "CollapsibleContent",
	props: {
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(Vs), I({ "data-slot": "collapsible-content" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), uw = /* @__PURE__ */ U({
	__name: "CollapsibleTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(Hs), I({ "data-slot": "collapsible-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), dw = ["innerHTML"], fw = ["innerHTML"], pw = /* @__PURE__ */ U({
	__name: "Collapsible.ce",
	props: { defaultOpen: { type: Boolean } },
	setup(e) {
		let t = e, n = ve(), r = n?._light.slots.trigger ?? "", i = n?._light.defaultHtml ?? "";
		return (e, n) => (o(), P(z(cw), { "default-open": t.defaultOpen ?? !1 }, {
			default: u(() => [W(z(uw), { "as-child": "" }, {
				default: u(() => [L("button", { innerHTML: z(r) || "Toggle" }, null, 8, dw)]),
				_: 1
			}), W(z(lw), null, {
				default: u(() => [L("div", { innerHTML: z(i) }, null, 8, fw)]),
				_: 1
			})]),
			_: 1
		}, 8, ["default-open"]));
	}
}), mw = /* @__PURE__ */ U({
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
		let n = e, i = t, a = Y(G(n, "class"), i);
		return (e, t) => (o(), P(z(by), I({ class: z($)("flex gap-2", n.class) }, z(a)), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), hw = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, i) => (o(), P(z(wy), I(z(n), { class: z($)("text-xs text-muted-foreground", t.class) }), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), gw = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, i) => (o(), P(z(Ty), I(z(n), { class: z($)("inline-flex items-center justify-center rounded-full text-muted-foreground/50 w-8 h-8", "group-data-[disabled]:text-muted-foreground group-data-[disabled]:opacity-50", "group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground", "group-data-[state=completed]:bg-accent group-data-[state=completed]:text-accent-foreground", t.class) }), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), _w = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, i) => (o(), P(z(Cy), I(z(n), { class: z($)("flex items-center gap-2 group data-[disabled]:pointer-events-none", t.class) }), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), vw = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Ey), I(z(n), { class: z($)("bg-muted", "group-data-[disabled]:bg-muted group-data-[disabled]:opacity-50", "group-data-[state=completed]:bg-accent", t.class) }), null, 16, ["class"]));
	}
}), yw = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Dy), I(z(n), { class: z($)("text-md font-semibold whitespace-nowrap", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), bw = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Oy), I(z(n), { class: z($)("p-1 flex flex-col items-center text-center gap-1 rounded-md", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), xw = ["innerHTML"], Sw = /* @__PURE__ */ U({
	__name: "Stepper.ce",
	props: {
		orientation: { type: String },
		defaultValue: { type: Number }
	},
	setup(e) {
		let t = e, n = ve()?._light.sections ?? [];
		return (e, r) => (o(), P(z(mw), {
			orientation: t.orientation ?? "horizontal",
			"default-value": t.defaultValue ?? 1,
			linear: ""
		}, {
			default: u(() => [(o(!0), E(B, null, f(z(n), (e, t) => (o(), P(z(_w), {
				key: t,
				step: t + 1,
				disabled: e.disabled
			}, {
				default: u(() => [W(z(bw), null, {
					default: u(() => [
						W(z(gw), null, {
							default: u(() => [V(H(t + 1), 1)]),
							_: 2
						}, 1024),
						W(z(yw), null, {
							default: u(() => [V(H(e.title), 1)]),
							_: 2
						}, 1024),
						e.html ? (o(), P(z(hw), { key: 0 }, {
							default: u(() => [L("div", { innerHTML: e.html }, null, 8, xw)]),
							_: 2
						}, 1024)) : M("", !0)
					]),
					_: 2
				}, 1024), t < z(n).length - 1 ? (o(), P(z(vw), { key: 0 })) : M("", !0)]),
				_: 2
			}, 1032, ["step", "disabled"]))), 128))]),
			_: 1
		}, 8, ["orientation", "default-value"]));
	}
}), Cw = /* @__PURE__ */ U({
	__name: "AlertDialog",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), P(z(al), I({ "data-slot": "alert-dialog" }, z(n)), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16));
	}
}), ww = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class", "size"), r);
		return (t, r) => (o(), P(z(il), null, {
			default: u(() => [W(z(rl), {
				"data-slot": "alert-dialog-overlay",
				class: "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50"
			}), W(z(tl), I({
				"data-slot": "alert-dialog-content",
				"data-size": e.size
			}, {
				...t.$attrs,
				...z(i)
			}, { class: z($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 bg-popover text-popover-foreground ring-foreground/10 gap-4 rounded-xl p-4 ring-1 duration-100 data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 outline-none", n.class) }), {
				default: u(() => [v(t.$slots, "default")]),
				_: 3
			}, 16, ["data-size", "class"])]),
			_: 3
		}));
	}
}), Tw = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(nl), I({ "data-slot": "alert-dialog-description" }, z(n), { class: z($)("text-muted-foreground *:[a]:hover:text-foreground text-sm text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Ew = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "alert-dialog-footer",
			class: F(z($)("bg-muted/50 -mx-4 -mb-4 rounded-b-xl border-t p-4 flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), Dw = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "alert-dialog-header",
			class: F(z($)("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), Ow = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(ol), I({ "data-slot": "alert-dialog-title" }, z(n), { class: z($)("text-base font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2 cn-font-heading", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), kw = /* @__PURE__ */ U({
	__name: "AlertDialogTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(sl), I({ "data-slot": "alert-dialog-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Aw = ["innerHTML"], jw = /* @__PURE__ */ U({
	__name: "AlertDialog.ce",
	setup(e) {
		let t = ve()?._light.slots ?? {};
		return (e, n) => (o(), P(z(Cw), null, {
			default: u(() => [W(z(kw), null, {
				default: u(() => [v(e.$slots, "trigger", {}, () => [n[0] ||= V("Abrir", -1)])]),
				_: 3
			}), W(z(ww), null, {
				default: u(() => [
					W(z(Dw), null, {
						default: u(() => [z(t).title ? (o(), P(z(Ow), {
							key: 0,
							innerHTML: z(t).title
						}, null, 8, ["innerHTML"])) : M("", !0), z(t).description ? (o(), P(z(Tw), {
							key: 1,
							innerHTML: z(t).description
						}, null, 8, ["innerHTML"])) : M("", !0)]),
						_: 1
					}),
					z(t).content ? (o(), E("div", {
						key: 0,
						innerHTML: z(t).content
					}, null, 8, Aw)) : M("", !0),
					z(t).footer ? (o(), P(z(Ew), {
						key: 1,
						innerHTML: z(t).footer
					}, null, 8, ["innerHTML"])) : M("", !0)
				]),
				_: 1
			})]),
			_: 3
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
var Mw = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var Nw = (e) => typeof e < "u";
function Pw(e) {
	return JSON.parse(JSON.stringify(e));
}
function Fw(e, n, r, i = {}) {
	let { clone: a = !1, passive: o = !1, eventName: s, deep: c = !1, defaultValue: l, shouldEmit: u } = i, d = y(), f = r || d?.emit || (d?.$emit)?.bind(d) || (d?.proxy?.$emit)?.bind(d?.proxy), p = s;
	n ||= "modelValue", p ||= `update:${n.toString()}`;
	let m = (e) => a ? typeof a == "function" ? a(e) : Pw(e) : e, h = () => Nw(e[n]) ? m(e[n]) : l, g = (e) => {
		u ? u(e) && f(p, e) : f(p, e);
	};
	if (o) {
		let r = O(h()), i = !1;
		return C(() => e[n], (e) => {
			i || (i = !0, r.value = m(e), t(() => i = !1));
		}), C(r, (t) => {
			!i && (t !== e[n] || c) && g(t);
		}, { deep: c }), r;
	} else return R({
		get() {
			return h();
		},
		set(e) {
			g(e);
		}
	});
}
var [Iw, Lw] = K("DrawerRoot"), Rw = /* @__PURE__ */ new WeakMap();
function zw(e, t, n = !1) {
	if (!e || !(e instanceof HTMLElement) || !t) return;
	let r = {};
	Object.entries(t).forEach(([t, n]) => {
		if (t.startsWith("--")) {
			e.style.setProperty(t, n);
			return;
		}
		r[t] = e.style[t], e.style[t] = n;
	}), !n && Rw.set(e, r);
}
function Bw(e, t) {
	if (!e || !(e instanceof HTMLElement)) return;
	let n = Rw.get(e);
	n && Object.entries(n).forEach(([t, n]) => {
		e.style[t] = n;
	});
}
function Vw(e, t) {
	let n = window.getComputedStyle(e), r = n.transform || n.webkitTransform || n.mozTransform, i = r.match(/^matrix3d\((.+)\)$/);
	return i ? Number.parseFloat(i[1].split(", ")[Uw(t) ? 13 : 12]) : (i = r.match(/^matrix\((.+)\)$/), i ? Number.parseFloat(i[1].split(", ")[Uw(t) ? 5 : 4]) : null);
}
function Hw(e) {
	return 8 * (Math.log(e + 1) - 2);
}
function Uw(e) {
	switch (e) {
		case "top":
		case "bottom": return !0;
		case "left":
		case "right": return !1;
		default: return e;
	}
}
function Ww(e, t) {
	if (!e) return () => {};
	let n = e.style.cssText;
	return Object.assign(e.style, t), () => {
		e.style.cssText = n;
	};
}
var Gw = {
	DURATION: .5,
	EASE: [
		.32,
		.72,
		0,
		1
	]
}, Kw = .4, qw = .25, Jw = 100, Yw = 8, Xw = 16, Zw = 26, Qw = "vaul-dragging";
function $w({ activeSnapPoint: e, snapPoints: n, drawerRef: r, overlayRef: i, fadeFromIndex: a, onSnapPointChange: o, direction: s }) {
	let c = O(typeof window < "u" ? {
		innerWidth: window.innerWidth,
		innerHeight: window.innerHeight
	} : void 0);
	function l() {
		c.value = {
			innerWidth: window.innerWidth,
			innerHeight: window.innerHeight
		};
	}
	p(() => {
		typeof window < "u" && window.addEventListener("resize", l);
	}), le(() => {
		typeof window < "u" && window.removeEventListener("resize", l);
	});
	let u = R(() => (n.value && e.value === n.value[n.value.length - 1]) ?? null), d = R(() => n.value && n.value.length > 0 && (a?.value || a?.value === 0) && !Number.isNaN(a?.value) && n.value[a?.value ?? -1] === e.value || !n.value), f = R(() => n.value?.findIndex((t) => t === e.value) ?? null), m = R(() => n.value?.map((e) => {
		let t = typeof e == "string", n = 0;
		if (t && (n = Number.parseInt(e, 10)), Uw(s.value)) {
			let r = t ? n : c.value ? e * c.value.innerHeight : 0;
			return c.value ? s.value === "bottom" ? c.value.innerHeight - r : -c.value.innerHeight + r : r;
		}
		let r = t ? n : c.value ? e * c.value.innerWidth : 0;
		return c.value ? s.value === "right" ? c.value.innerWidth - r : -c.value.innerWidth + r : r;
	}) ?? []), h = R(() => f.value === null ? null : m.value?.[f.value]), g = (c) => {
		let l = m.value?.findIndex((e) => e === c) ?? null;
		t(() => {
			o(l, m.value), zw(r.value?.$el, {
				transition: `transform ${Gw.DURATION}s cubic-bezier(${Gw.EASE.join(",")})`,
				transform: Uw(s.value) ? `translate3d(0, ${c}px, 0)` : `translate3d(${c}px, 0, 0)`
			});
		}), m.value && l !== m.value.length - 1 && l !== a?.value ? zw(i.value?.$el, {
			transition: `opacity ${Gw.DURATION}s cubic-bezier(${Gw.EASE.join(",")})`,
			opacity: "0"
		}) : zw(i.value?.$el, {
			transition: `opacity ${Gw.DURATION}s cubic-bezier(${Gw.EASE.join(",")})`,
			opacity: "1"
		}), e.value = l === null ? null : n.value?.[l] ?? null;
	};
	C([
		e,
		m,
		n
	], () => {
		if (e.value) {
			let t = n.value?.findIndex((t) => t === e.value) ?? -1;
			m.value && t !== -1 && typeof m.value[t] == "number" && g(m.value[t]);
		}
	}, { immediate: !0 });
	function _({ draggedDistance: e, closeDrawer: t, velocity: r, dismissible: o }) {
		if (a.value === void 0) return;
		let c = s.value === "bottom" || s.value === "right" ? (h.value ?? 0) - e : (h.value ?? 0) + e, l = f.value === a.value - 1, d = f.value === 0, p = e > 0;
		if (l && zw(i.value?.$el, { transition: `opacity ${Gw.DURATION}s cubic-bezier(${Gw.EASE.join(",")})` }), r > 2 && !p) {
			o ? t() : g(m.value[0]);
			return;
		}
		if (r > 2 && p && m && n.value) {
			g(m.value[n.value.length - 1]);
			return;
		}
		let _ = m.value?.reduce((e, t) => typeof e != "number" || typeof t != "number" ? e : Math.abs(t - c) < Math.abs(e - c) ? t : e), v = Uw(s.value) ? window.innerHeight : window.innerWidth;
		if (r > Kw && Math.abs(e) < v * .4) {
			let e = p ? 1 : -1;
			if (e > 0 && u) {
				g(m.value[(n.value?.length ?? 0) - 1]);
				return;
			}
			if (d && e < 0 && o && t(), f.value === null) return;
			g(m.value[f.value + e]);
			return;
		}
		g(_);
	}
	function v({ draggedDistance: e }) {
		if (h.value === null) return;
		let t = s.value === "bottom" || s.value === "right" ? h.value - e : h.value + e;
		(s.value === "bottom" || s.value === "right") && t < m.value[m.value.length - 1] || (s.value === "top" || s.value === "left") && t > m.value[m.value.length - 1] || zw(r.value?.$el, { transform: Uw(s.value) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)` });
	}
	function y(e, t) {
		if (!n.value || typeof f.value != "number" || !m.value || a.value === void 0) return null;
		let r = f.value === a.value - 1;
		if (f.value >= a.value && t) return 0;
		if (r && !t) return 1;
		if (!d.value && !r) return null;
		let i = r ? f.value + 1 : f.value - 1, o = r ? m.value[i] - m.value[i - 1] : m.value[i + 1] - m.value[i], s = e / Math.abs(o);
		return r ? 1 - s : s;
	}
	return {
		isLastSnapPoint: u,
		shouldFade: d,
		getPercentageDragged: y,
		activeSnapPointIndex: f,
		onRelease: _,
		onDrag: v,
		snapPointsOffset: m
	};
}
function eT() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
var tT = null;
function nT(e) {
	let { isOpen: t, modal: n, nested: r, hasBeenOpened: i, preventScrollRestoration: a, noBodyStyles: o } = e, s = O(typeof window < "u" ? window.location.href : ""), c = O(0);
	function l() {
		if (eT() && tT === null && t.value && !o.value) {
			tT = {
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
		if (eT() && tT !== null && !o.value) {
			let e = -Number.parseInt(document.body.style.top, 10), t = -Number.parseInt(document.body.style.left, 10);
			Object.assign(document.body.style, tT), window.requestAnimationFrame(() => {
				if (a.value && s.value !== window.location.href) {
					s.value = window.location.href;
					return;
				}
				window.scrollTo(t, e);
			}), tT = null;
		}
	}
	return p(() => {
		function e() {
			c.value = window.scrollY;
		}
		e(), window.addEventListener("scroll", e), m(() => {
			window.removeEventListener("scroll", e);
		});
	}), C([
		t,
		i,
		s
	], () => {
		r.value || !i.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || l(), n.value || setTimeout(() => {
			u();
		}, 500)) : u());
	}), { restorePositionSetting: u };
}
function rT(e, t) {
	return e && e.value ? e : t;
}
function iT(e) {
	let { emitDrag: t, emitRelease: n, emitClose: r, emitOpenChange: i, open: a, dismissible: o, nested: c, modal: l, shouldScaleBackground: u, setBackgroundColorOnScale: d, scrollLockTimeout: f, closeThreshold: p, activeSnapPoint: m, fadeFromIndex: h, direction: g, noBodyStyles: _, handleOnly: v, preventScrollRestoration: y } = e, b = O(a.value ?? !1), x = O(!1), S = O(!1), w = O(!1), T = O(null), ee = O(null), E = O(null), D = O(null), te = O(null), ne = O(!1), k = O(null), re = O(0), ie = O(!1);
	O(0);
	let A = O(null);
	O(0);
	let j = R(() => A.value?.$el.getBoundingClientRect().height || 0), ae = rT(e.snapPoints, O(void 0)), oe = R(() => ae && (ae.value?.length ?? 0) > 0), M = O(null), { activeSnapPointIndex: N, onRelease: P, snapPointsOffset: F, onDrag: se, shouldFade: ce, getPercentageDragged: le } = $w({
		snapPoints: ae,
		activeSnapPoint: m,
		drawerRef: A,
		fadeFromIndex: h,
		overlayRef: T,
		onSnapPointChange: I,
		direction: g
	});
	function I(e, t) {
		ae.value && e === t.length - 1 && (ee.value = /* @__PURE__ */ new Date());
	}
	nT({
		isOpen: b,
		modal: l,
		nested: c,
		hasBeenOpened: x,
		noBodyStyles: _,
		preventScrollRestoration: y
	});
	function ue() {
		return (window.innerWidth - Zw) / window.innerWidth;
	}
	function de(e, t) {
		if (!e) return !1;
		let n = e, r = window.getSelection()?.toString(), i = A.value ? Vw(A.value.$el, g.value) : null, a = /* @__PURE__ */ new Date();
		if (n.hasAttribute("data-vaul-no-drag") || n.closest("[data-vaul-no-drag]")) return !1;
		if (g.value === "right" || g.value === "left") return !0;
		if (ee.value && a.getTime() - ee.value.getTime() < 500) return !1;
		if (i !== null && (g.value === "bottom" ? i > 0 : i < 0)) return !0;
		if (r && r.length > 0) return !1;
		if (te.value && a.getTime() - te.value.getTime() < f.value && i === 0 || t) return te.value = a, !1;
		for (; n;) {
			if (n.scrollHeight > n.clientHeight) {
				if (n.scrollTop !== 0) return te.value = /* @__PURE__ */ new Date(), !1;
				if (n.getAttribute("role") === "dialog") return !0;
			}
			n = n.parentNode;
		}
		return !0;
	}
	function L(e) {
		!o.value && !ae.value || A.value && !A.value.$el.contains(e.target) || (S.value = !0, E.value = /* @__PURE__ */ new Date(), e.target.setPointerCapture(e.pointerId), re.value = Uw(g.value) ? e.clientY : e.clientX);
	}
	function fe(e) {
		var n;
		if (A.value && S.value) {
			let r = g.value === "bottom" || g.value === "right" ? 1 : -1, i = (re.value - (Uw(g.value) ? e.clientY : e.clientX)) * r, a = i > 0, s = ae.value && !o.value && !a;
			if (s && N.value === 0) return;
			let c = Math.abs(i), l = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), d = c / j.value, f = le(c, a);
			if (f !== null && (d = f), s && d >= 1 || !ne.value && !de(e.target, a)) return;
			if ((n = A?.value) == null || n.$el.classList.add(Qw), ne.value = !0, zw(A.value?.$el, { transition: "none" }), zw(T.value?.$el, { transition: "none" }), ae.value && se({ draggedDistance: i }), a && !ae.value) {
				let e = Hw(i), t = Math.min(e * -1, 0) * r;
				zw(A.value?.$el, { transform: Uw(g.value) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)` });
				return;
			}
			let p = 1 - d;
			if ((ce.value || h.value && N.value === h.value - 1) && (t(d), zw(T.value?.$el, {
				opacity: `${p}`,
				transition: "none"
			}, !0)), l && T.value && u.value) {
				let e = Math.min(ue() + d * (1 - ue()), 1), t = 8 - d * 8, n = Math.max(0, 14 - d * 14);
				zw(l, {
					borderRadius: `${t}px`,
					transform: Uw(g.value) ? `scale(${e}) translate3d(0, ${n}px, 0)` : `scale(${e}) translate3d(${n}px, 0, 0)`,
					transition: "none"
				}, !0);
			}
			if (!ae.value) {
				let e = c * r;
				zw(A.value?.$el, { transform: Uw(g.value) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)` });
			}
		}
	}
	function pe() {
		if (!A.value) return;
		let e = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), t = Vw(A.value.$el, g.value);
		zw(A.value.$el, {
			transform: "translate3d(0, 0, 0)",
			transition: `transform ${Gw.DURATION}s cubic-bezier(${Gw.EASE.join(",")})`
		}), zw(T.value?.$el, {
			transition: `opacity ${Gw.DURATION}s cubic-bezier(${Gw.EASE.join(",")})`,
			opacity: "1"
		}), u.value && t && t > 0 && b.value && zw(e, {
			borderRadius: `${Yw}px`,
			overflow: "hidden",
			...Uw(g.value) ? {
				transform: `scale(${ue()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
				transformOrigin: "top"
			} : {
				transform: `scale(${ue()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
				transformOrigin: "left"
			},
			transitionProperty: "transform, border-radius",
			transitionDuration: `${Gw.DURATION}s`,
			transitionTimingFunction: `cubic-bezier(${Gw.EASE.join(",")})`
		}, !0);
	}
	function me(e) {
		A.value && (r(), e || (b.value = !1), window.setTimeout(() => {
			ae.value && (m.value = ae.value[0]);
		}, Gw.DURATION * 1e3));
	}
	s(() => {
		if (!b.value && u.value && Mw) {
			let e = setTimeout(() => {
				Bw(document.body);
			}, 200);
			return () => clearTimeout(e);
		}
	}), C(a, () => {
		b.value = a.value, a.value || me();
	});
	function he(e) {
		if (!S.value || !A.value) return;
		A.value.$el.classList.remove(Qw), ne.value = !1, S.value = !1, D.value = /* @__PURE__ */ new Date();
		let t = Vw(A.value.$el, g.value);
		if (!de(e.target, !1) || !t || Number.isNaN(t) || E.value === null) return;
		let r = D.value.getTime() - E.value.getTime(), i = re.value - (Uw(g.value) ? e.clientY : e.clientX), a = Math.abs(i) / r;
		if (a > .05 && (w.value = !0, window.setTimeout(() => {
			w.value = !1;
		}, 200)), ae.value) {
			P({
				draggedDistance: i * (g.value === "bottom" || g.value === "right" ? 1 : -1),
				closeDrawer: me,
				velocity: a,
				dismissible: o.value
			}), n(!0);
			return;
		}
		if (g.value === "bottom" || g.value === "right" ? i > 0 : i < 0) {
			pe(), n(!0);
			return;
		}
		if (a > Kw) {
			me(), n(!1);
			return;
		}
		if (t >= Math.min(A.value.$el.getBoundingClientRect().height ?? 0, window.innerHeight) * p.value) {
			me(), n(!1);
			return;
		}
		n(!0), pe();
	}
	C(b, (e) => {
		e && (ee.value = /* @__PURE__ */ new Date()), i(e);
	}, { immediate: !0 });
	function ge(e) {
		var t;
		let n = e ? (window.innerWidth - Xw) / window.innerWidth : 1, r = e ? -16 : 0;
		k.value && window.clearTimeout(k.value), zw(A.value?.$el, {
			transition: `transform ${Gw.DURATION}s cubic-bezier(${Gw.EASE.join(",")})`,
			transform: `scale(${n}) translate3d(0, ${r}px, 0)`
		}), !e && (t = A.value) != null && t.$el && (k.value = window.setTimeout(() => {
			let e = Vw(A.value?.$el, g.value);
			zw(A.value?.$el, {
				transition: "none",
				transform: Uw(g.value) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
			});
		}, 500));
	}
	function z(e) {
		if (e < 0) return;
		let t = Uw(g.value) ? window.innerHeight : window.innerWidth, n = (t - Xw) / t, r = n + e * (1 - n), i = -16 + e * Xw;
		zw(A.value?.$el, {
			transform: Uw(g.value) ? `scale(${r}) translate3d(0, ${i}px, 0)` : `scale(${r}) translate3d(${i}px, 0, 0)`,
			transition: "none"
		});
	}
	function _e(e) {
		let t = Uw(g.value) ? window.innerHeight : window.innerWidth, n = e ? (t - Xw) / t : 1, r = e ? -16 : 0;
		e && zw(A.value?.$el, {
			transition: `transform ${Gw.DURATION}s cubic-bezier(${Gw.EASE.join(",")})`,
			transform: Uw(g.value) ? `scale(${n}) translate3d(0, ${r}px, 0)` : `scale(${n}) translate3d(${r}px, 0, 0)`
		});
	}
	return {
		open: a,
		isOpen: b,
		modal: l,
		keyboardIsOpen: ie,
		hasBeenOpened: x,
		drawerRef: A,
		drawerHeightRef: j,
		overlayRef: T,
		handleRef: M,
		isDragging: S,
		dragStartTime: E,
		isAllowedToDrag: ne,
		snapPoints: ae,
		activeSnapPoint: m,
		hasSnapPoints: oe,
		pointerStart: re,
		dismissible: o,
		snapPointsOffset: F,
		direction: g,
		shouldFade: ce,
		fadeFromIndex: h,
		shouldScaleBackground: u,
		setBackgroundColorOnScale: d,
		onPress: L,
		onDrag: fe,
		onRelease: he,
		closeDrawer: me,
		onNestedDrag: z,
		onNestedRelease: _e,
		onNestedOpenChange: ge,
		emitClose: r,
		emitDrag: t,
		emitRelease: n,
		emitOpenChange: i,
		nested: c,
		handleOnly: v,
		noBodyStyles: _
	};
}
var aT = /* @__PURE__ */ U({
	__name: "DrawerRoot",
	props: {
		activeSnapPoint: { default: void 0 },
		closeThreshold: { default: qw },
		shouldScaleBackground: {
			type: Boolean,
			default: void 0
		},
		setBackgroundColorOnScale: {
			type: Boolean,
			default: !0
		},
		scrollLockTimeout: { default: Jw },
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
		x();
		let a = R(() => r.fadeFromIndex ?? (r.snapPoints && r.snapPoints.length - 1)), s = Fw(r, "open", i, {
			defaultValue: r.defaultOpen,
			passive: r.open === void 0
		}), c = Fw(r, "activeSnapPoint", i, { passive: r.activeSnapPoint === void 0 }), l = {
			emitDrag: (e) => i("drag", e),
			emitRelease: (e) => i("release", e),
			emitClose: () => i("close"),
			emitOpenChange: (e) => {
				i("update:open", e), setTimeout(() => {
					i("animationEnd", e);
				}, Gw.DURATION * 1e3);
			}
		}, { closeDrawer: d, hasBeenOpened: f, modal: p, isOpen: m } = Lw(iT({
			...l,
			...we(r),
			activeSnapPoint: c,
			fadeFromIndex: a,
			open: s
		}));
		function h(e) {
			if (s.value !== void 0) {
				l.emitOpenChange(e);
				return;
			}
			m.value = e, e ? f.value = !0 : d();
		}
		return t({ open: m }), (e, t) => (o(), P(z(ac), {
			open: z(m),
			modal: z(p),
			"onUpdate:open": h
		}, {
			default: u(() => [v(e.$slots, "default", { open: z(m) })]),
			_: 3
		}, 8, ["open", "modal"]));
	}
}), oT = /* @__PURE__ */ U({
	__name: "DrawerOverlay",
	setup(e) {
		let { overlayRef: t, hasSnapPoints: n, isOpen: r, shouldFade: i } = Iw();
		return (e, a) => (o(), P(z(Jc), {
			ref_key: "overlayRef",
			ref: t,
			"data-vaul-overlay": "",
			"data-vaul-snap-points": z(r) && z(n) ? "true" : "false",
			"data-vaul-snap-points-overlay": z(r) && z(i) ? "true" : "false"
		}, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
	}
});
function sT() {
	let { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: i } = Iw(), a = O(null), o = O(document.body.style.backgroundColor);
	function c() {
		return (window.innerWidth - Zw) / window.innerWidth;
	}
	s((s) => {
		if (t.value && n.value) {
			a.value && clearTimeout(a.value);
			let t = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
			if (!t) return;
			r.value && !i.value && Ww(document.body, { background: "black" }), Ww(t, {
				transformOrigin: Uw(e.value) ? "top" : "left",
				transitionProperty: "transform, border-radius",
				transitionDuration: `${Gw.DURATION}s`,
				transitionTimingFunction: `cubic-bezier(${Gw.EASE.join(",")})`
			});
			let n = Ww(t, {
				borderRadius: `${Yw}px`,
				overflow: "hidden",
				...Uw(e.value) ? { transform: `scale(${c()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` } : { transform: `scale(${c()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` }
			});
			s(() => {
				n(), a.value = window.setTimeout(() => {
					o.value ? document.body.style.background = o.value : document.body.style.removeProperty("background");
				}, Gw.DURATION * 1e3);
			});
		}
	}, { flush: "pre" });
}
var cT = /* @__PURE__ */ U({
	__name: "DrawerContent",
	setup(e) {
		let { open: t, isOpen: n, snapPointsOffset: r, hasSnapPoints: i, drawerRef: a, onPress: c, onDrag: l, onRelease: d, modal: f, emitOpenChange: p, dismissible: m, keyboardIsOpen: h, closeDrawer: g, direction: _, handleOnly: y } = Iw();
		sT();
		let b = O(!1), x = R(() => r.value && r.value.length > 0 ? `${r.value[0]}px` : "0");
		function S(e) {
			if (!f.value || e.defaultPrevented) {
				e.preventDefault();
				return;
			}
			h.value &&= !1, m.value ? p(!1) : e.preventDefault();
		}
		function C(e) {
			y.value || c(e);
		}
		function w(e) {
			y.value || l(e);
		}
		return s(() => {
			i.value && window.requestAnimationFrame(() => {
				b.value = !0;
			});
		}), (e, t) => (o(), P(z(Gc), {
			ref_key: "drawerRef",
			ref: a,
			"data-vaul-drawer": "",
			"data-vaul-drawer-direction": z(_),
			"data-vaul-delayed-snap-points": b.value ? "true" : "false",
			"data-vaul-snap-points": z(n) && z(i) ? "true" : "false",
			style: D({ "--snap-point-height": x.value }),
			onPointerdown: C,
			onPointermove: w,
			onPointerup: z(d),
			onPointerDownOutside: S,
			onOpenAutoFocus: t[0] ||= k(() => {}, ["prevent"]),
			onEscapeKeyDown: t[1] ||= (e) => {
				z(m) || e.preventDefault();
			}
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"data-vaul-drawer-direction",
			"data-vaul-delayed-snap-points",
			"data-vaul-snap-points",
			"style",
			"onPointerup"
		]));
	}
}), lT = /* @__PURE__ */ U({
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
		let n = Y(e, t);
		return (e, t) => (o(), P(z(aT), I({ "data-slot": "drawer" }, z(n)), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16));
	}
}), uT = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(oT), I({ "data-slot": "drawer-overlay" }, z(n), { class: z($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50", t.class) }), null, 16, ["class"]));
	}
}), dT = /* @__PURE__ */ U({
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
		let n = e, r = Y(n, t);
		return (e, t) => (o(), P(z(Xc), null, {
			default: u(() => [W(uT), W(z(cT), I({ "data-slot": "drawer-content" }, {
				...e.$attrs,
				...z(r)
			}, { class: z($)("bg-popover text-popover-foreground flex h-auto flex-col text-sm data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-xl data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-xl data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-xl data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-xl data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=right]:sm:max-w-sm group/drawer-content fixed z-50", n.class) }), {
				default: u(() => [t[0] ||= L("div", { class: "bg-muted mt-4 h-1 w-[100px] rounded-full mx-auto hidden shrink-0 group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1), v(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), fT = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(Kc), I({ "data-slot": "drawer-description" }, z(n), { class: z($)("text-muted-foreground text-sm", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), pT = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "drawer-footer",
			class: F(z($)("gap-2 p-4 mt-auto flex flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), mT = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "drawer-header",
			class: F(z($)("gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-0.5 md:text-left flex flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), hT = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(Zc), I({ "data-slot": "drawer-title" }, z(n), { class: z($)("text-foreground text-base font-medium cn-font-heading", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), gT = /* @__PURE__ */ U({
	__name: "DrawerTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(Qc), I({ "data-slot": "drawer-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), _T = ["innerHTML"], vT = /* @__PURE__ */ U({
	__name: "Drawer.ce",
	setup(e) {
		let t = ve()?._light.slots ?? {};
		return (e, n) => (o(), P(z(lT), null, {
			default: u(() => [W(z(gT), null, {
				default: u(() => [v(e.$slots, "trigger", {}, () => [n[0] ||= V("Abrir", -1)])]),
				_: 3
			}), W(z(dT), null, {
				default: u(() => [
					W(z(mT), null, {
						default: u(() => [z(t).title ? (o(), P(z(hT), {
							key: 0,
							innerHTML: z(t).title
						}, null, 8, ["innerHTML"])) : M("", !0), z(t).description ? (o(), P(z(fT), {
							key: 1,
							innerHTML: z(t).description
						}, null, 8, ["innerHTML"])) : M("", !0)]),
						_: 1
					}),
					z(t).content ? (o(), E("div", {
						key: 0,
						innerHTML: z(t).content
					}, null, 8, _T)) : M("", !0),
					z(t).footer ? (o(), P(z(pT), {
						key: 1,
						innerHTML: z(t).footer
					}, null, 8, ["innerHTML"])) : M("", !0)
				]),
				_: 1
			})]),
			_: 3
		}));
	}
}), yT = /* @__PURE__ */ U({
	__name: "Sheet",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), P(z(ac), I({ "data-slot": "sheet" }, z(n)), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16));
	}
}), bT = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(Jc), I({
			"data-slot": "sheet-overlay",
			class: z($)("bg-black/10 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50 duration-100 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", t.class)
		}, z(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), xT = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class", "side", "showCloseButton"), r);
		return (t, r) => (o(), P(z(Xc), null, {
			default: u(() => [W(bT), W(z(Gc), I({
				"data-slot": "sheet-content",
				"data-side": e.side,
				class: z($)("bg-popover text-popover-foreground fixed z-50 flex flex-col gap-4 bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", n.class)
			}, {
				...t.$attrs,
				...z(i)
			}), {
				default: u(() => [v(t.$slots, "default"), e.showCloseButton ? (o(), P(z(oc), {
					key: 0,
					"data-slot": "sheet-close",
					"as-child": ""
				}, {
					default: u(() => [W(z(XS), {
						variant: "ghost",
						class: "absolute top-3 right-3",
						size: "icon-sm"
					}, {
						default: u(() => [W(z(fr)), r[0] ||= L("span", { class: "sr-only" }, "Close", -1)]),
						_: 1
					})]),
					_: 1
				})) : M("", !0)]),
				_: 3
			}, 16, ["data-side", "class"])]),
			_: 3
		}));
	}
}), ST = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(Kc), I({
			"data-slot": "sheet-description",
			class: z($)("text-muted-foreground text-sm", t.class)
		}, z(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), CT = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "sheet-footer",
			class: F(z($)("gap-2 p-4 mt-auto flex flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), wT = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "sheet-header",
			class: F(z($)("gap-0.5 p-4 flex flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), TT = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(Zc), I({
			"data-slot": "sheet-title",
			class: z($)("text-foreground text-base font-medium cn-font-heading", t.class)
		}, z(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), ET = /* @__PURE__ */ U({
	__name: "SheetTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(Qc), I({ "data-slot": "sheet-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), DT = ["innerHTML"], OT = /* @__PURE__ */ U({
	__name: "Sheet.ce",
	setup(e) {
		let t = ve(), n = t?._light.slots ?? {}, r = t?.getAttribute("side") ?? "right";
		return (e, t) => (o(), P(z(yT), null, {
			default: u(() => [W(z(ET), null, {
				default: u(() => [v(e.$slots, "trigger", {}, () => [t[0] ||= V("Abrir", -1)])]),
				_: 3
			}), W(z(xT), { side: z(r) }, {
				default: u(() => [
					W(z(wT), null, {
						default: u(() => [z(n).title ? (o(), P(z(TT), {
							key: 0,
							innerHTML: z(n).title
						}, null, 8, ["innerHTML"])) : M("", !0), z(n).description ? (o(), P(z(ST), {
							key: 1,
							innerHTML: z(n).description
						}, null, 8, ["innerHTML"])) : M("", !0)]),
						_: 1
					}),
					z(n).content ? (o(), E("div", {
						key: 0,
						innerHTML: z(n).content
					}, null, 8, DT)) : M("", !0),
					z(n).footer ? (o(), P(z(CT), {
						key: 1,
						innerHTML: z(n).footer
					}, null, 8, ["innerHTML"])) : M("", !0)
				]),
				_: 1
			}, 8, ["side"])]),
			_: 3
		}));
	}
}), kT = /* @__PURE__ */ U({
	__name: "Popover",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), P(z(_m), I({ "data-slot": "popover" }, z(n)), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16));
	}
}), AT = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (e, t) => (o(), P(z(Sm), null, {
			default: u(() => [W(z(xm), I({ "data-slot": "popover-content" }, {
				...e.$attrs,
				...z(i)
			}, { class: z($)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 flex flex-col gap-2.5 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 w-72 origin-(--reka-popover-content-transform-origin) outline-hidden", n.class) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), jT = /* @__PURE__ */ U({
	__name: "PopoverTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(Cm), I({ "data-slot": "popover-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), MT = ["innerHTML"], NT = /* @__PURE__ */ U({
	__name: "Popover.ce",
	setup(e) {
		let t = ve()?._light, n = t?.slots ?? {};
		return (e, r) => (o(), P(z(kT), null, {
			default: u(() => [W(z(jT), null, {
				default: u(() => [v(e.$slots, "trigger", {}, () => [r[0] ||= V("Abrir", -1)])]),
				_: 3
			}), W(z(AT), null, {
				default: u(() => [L("div", { innerHTML: z(n).content ?? z(t)?.defaultHtml ?? "" }, null, 8, MT)]),
				_: 1
			})]),
			_: 3
		}));
	}
}), PT = /* @__PURE__ */ U({
	__name: "HoverCard",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		openDelay: {},
		closeDelay: {}
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), P(z(Rm), I({ "data-slot": "hover-card" }, z(n)), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16));
	}
}), FT = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Um), null, {
			default: u(() => [W(z(Hm), I({ "data-slot": "hover-card-content" }, {
				...e.$attrs,
				...z(n)
			}, { class: z($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground w-64 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 origin-(--reka-hover-card-content-transform-origin) outline-hidden", t.class) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), IT = /* @__PURE__ */ U({
	__name: "HoverCardTrigger",
	props: {
		reference: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(Wm), I({ "data-slot": "hover-card-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), LT = ["innerHTML"], RT = /* @__PURE__ */ U({
	__name: "HoverCard.ce",
	setup(e) {
		let t = ve()?._light, n = t?.slots ?? {};
		return (e, r) => (o(), P(z(PT), null, {
			default: u(() => [W(z(IT), null, {
				default: u(() => [v(e.$slots, "trigger", {}, () => [r[0] ||= V("Abrir", -1)])]),
				_: 3
			}), W(z(FT), null, {
				default: u(() => [L("div", { innerHTML: z(n).content ?? z(t)?.defaultHtml ?? "" }, null, 8, LT)]),
				_: 1
			})]),
			_: 3
		}));
	}
}), zT = /* @__PURE__ */ U({
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
		let n = Y(e, t);
		return (e, t) => (o(), P(z(cb), I({ "data-slot": "tooltip" }, z(n)), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16));
	}
}), BT = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (e, t) => (o(), P(z(fb), null, {
			default: u(() => [W(z(db), I({ "data-slot": "tooltip-content" }, {
				...z(i),
				...e.$attrs
			}, { class: z($)("data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm bg-foreground text-background z-50 w-fit max-w-xs origin-(--reka-tooltip-content-transform-origin)", n.class) }), {
				default: u(() => [v(e.$slots, "default"), W(z(tb), { class: "size-2.5 rotate-45 rounded-[2px] bg-foreground fill-foreground z-50 translate-y-[calc(-50%_-_2px)]" })]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), VT = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(ib), N(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), HT = /* @__PURE__ */ U({
	__name: "TooltipTrigger",
	props: {
		reference: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(pb), I({ "data-slot": "tooltip-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), UT = ["innerHTML"], WT = /* @__PURE__ */ U({
	__name: "Tooltip.ce",
	setup(e) {
		let t = ve()?._light, n = t?.slots ?? {};
		return (e, r) => (o(), P(z(VT), null, {
			default: u(() => [W(z(zT), null, {
				default: u(() => [W(z(HT), null, {
					default: u(() => [v(e.$slots, "trigger", {}, () => [r[0] ||= V("Hover", -1)])]),
					_: 3
				}), W(z(BT), null, {
					default: u(() => [L("div", { innerHTML: z(n).content ?? z(t)?.defaultHtml ?? "" }, null, 8, UT)]),
					_: 1
				})]),
				_: 3
			})]),
			_: 3
		}));
	}
}), GT = /* @__PURE__ */ U({
	__name: "DropdownMenu",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		dir: {},
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), P(z(Em), I({ "data-slot": "dropdown-menu" }, z(n)), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16));
	}
}), KT = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (e, t) => (o(), P(z(Am), null, {
			default: u(() => [W(z(Dm), I({ "data-slot": "dropdown-menu-content" }, {
				...e.$attrs,
				...z(i)
			}, { class: z($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-32 rounded-lg p-1 shadow-md ring-1 duration-100 cn-menu-translucent z-50 max-h-(--reka-dropdown-menu-content-available-height) w-(--reka-dropdown-menu-trigger-width) origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto data-[state=closed]:overflow-hidden", n.class) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), qT = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "inset", "variant", "class"));
		return (r, i) => (o(), P(z(Om), I({
			"data-slot": "dropdown-menu-item",
			"data-inset": e.inset ? "" : void 0,
			"data-variant": e.variant
		}, z(n), { class: z($)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: u(() => [v(r.$slots, "default")]),
			_: 3
		}, 16, [
			"data-inset",
			"data-variant",
			"class"
		]));
	}
}), JT = /* @__PURE__ */ U({
	__name: "DropdownMenuLabel",
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
		inset: { type: Boolean }
	},
	setup(e) {
		let t = e, n = J(G(t, "class", "inset"));
		return (r, i) => (o(), P(z(km), I({
			"data-slot": "dropdown-menu-label",
			"data-inset": e.inset ? "" : void 0
		}, z(n), { class: z($)("text-muted-foreground px-1.5 py-1 text-xs font-medium data-inset:pl-7", t.class) }), {
			default: u(() => [v(r.$slots, "default")]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), YT = /* @__PURE__ */ U({
	__name: "DropdownMenuSeparator",
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(jm), I({ "data-slot": "dropdown-menu-separator" }, z(n), { class: z($)("bg-border -mx-1 my-1 h-px", t.class) }), null, 16, ["class"]));
	}
}), XT = /* @__PURE__ */ U({
	__name: "DropdownMenuShortcut",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (o(), E("span", {
			"data-slot": "dropdown-menu-shortcut",
			class: F(z($)("text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground ml-auto text-xs tracking-widest", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), ZT = /* @__PURE__ */ U({
	__name: "DropdownMenuSub",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), P(z(Mm), I({ "data-slot": "dropdown-menu-sub" }, z(n)), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16));
	}
}), QT = /* @__PURE__ */ U({
	__name: "DropdownMenuSubContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		sideOffset: {},
		sideFlip: { type: Boolean },
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
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (e, t) => (o(), P(z(Nm), I({ "data-slot": "dropdown-menu-sub-content" }, z(i), { class: z($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-[96px] rounded-lg p-1 shadow-lg ring-1 duration-100 cn-menu-translucent z-50 origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden", n.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), $T = /* @__PURE__ */ U({
	__name: "DropdownMenuSubTrigger",
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
		inset: { type: Boolean }
	},
	setup(e) {
		let t = e, n = J(G(t, "class", "inset"));
		return (r, i) => (o(), P(z(Pm), I({
			"data-slot": "dropdown-menu-sub-trigger",
			"data-inset": e.inset ? "" : void 0
		}, z(n), { class: z($)("focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 flex cursor-default items-center outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: u(() => [v(r.$slots, "default"), W(z($n), { class: "cn-rtl-flip ml-auto" })]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), eE = /* @__PURE__ */ U({
	__name: "DropdownMenuTrigger",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = J(e);
		return (e, n) => (o(), P(z(Fm), I({ "data-slot": "dropdown-menu-trigger" }, z(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), tE = ["innerHTML"], nE = /* @__PURE__ */ U({
	__name: "DropdownMenu.ce",
	setup(e) {
		let t = ve();
		function n(e) {
			let t = e.getAttribute("type") ?? "item";
			return {
				kind: t === "label" ? "label" : t === "separator" ? "separator" : "item",
				value: e.getAttribute("value") ?? e.textContent?.trim() ?? "",
				label: e.textContent?.trim() ?? "",
				shortcut: e.getAttribute("shortcut") ?? "",
				disabled: e.hasAttribute("disabled"),
				children: []
			};
		}
		let r = R(() => {
			let e = t?._light.html ?? "";
			if (!e.trim()) return [];
			let r = new DOMParser().parseFromString(`<div>${e}</div>`, "text/html").body.firstElementChild;
			if (!r) return [];
			let i = [];
			for (let e of [...r.children]) {
				let t = e.tagName;
				t === "OPTION" ? i.push(n(e)) : t === "SECTION" && i.push({
					kind: "sub",
					value: e.getAttribute("value") ?? e.getAttribute("title") ?? "",
					label: e.getAttribute("title") ?? "",
					shortcut: "",
					disabled: e.hasAttribute("disabled"),
					children: [...e.querySelectorAll("option")].map(n)
				});
			}
			return i;
		}), i = R(() => t?._light.slots.trigger || "Abrir");
		function a(e) {
			t?.dispatchEvent(new CustomEvent("select", {
				bubbles: !0,
				composed: !0,
				detail: { value: e }
			}));
		}
		return (e, t) => (o(), P(z(GT), null, {
			default: u(() => [W(z(eE), { "as-child": "" }, {
				default: u(() => [L("button", {
					type: "button",
					innerHTML: i.value
				}, null, 8, tE)]),
				_: 1
			}), W(z(KT), { class: "w-56" }, {
				default: u(() => [(o(!0), E(B, null, f(r.value, (e, t) => (o(), E(B, { key: t }, [e.kind === "label" ? (o(), P(z(JT), { key: 0 }, {
					default: u(() => [V(H(e.label), 1)]),
					_: 2
				}, 1024)) : e.kind === "separator" ? (o(), P(z(YT), { key: 1 })) : e.kind === "sub" ? (o(), P(z(ZT), { key: 2 }, {
					default: u(() => [W(z($T), null, {
						default: u(() => [V(H(e.label), 1)]),
						_: 2
					}, 1024), W(z(QT), null, {
						default: u(() => [(o(!0), E(B, null, f(e.children, (e, t) => (o(), P(z(qT), {
							key: t,
							disabled: e.disabled,
							onClick: (t) => a(e.value)
						}, {
							default: u(() => [V(H(e.label) + " ", 1), e.shortcut ? (o(), P(z(XT), { key: 0 }, {
								default: u(() => [V(H(e.shortcut), 1)]),
								_: 2
							}, 1024)) : M("", !0)]),
							_: 2
						}, 1032, ["disabled", "onClick"]))), 128))]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1024)) : (o(), P(z(qT), {
					key: 3,
					disabled: e.disabled,
					onClick: (t) => a(e.value)
				}, {
					default: u(() => [V(H(e.label) + " ", 1), e.shortcut ? (o(), P(z(XT), { key: 0 }, {
						default: u(() => [V(H(e.shortcut), 1)]),
						_: 2
					}, 1024)) : M("", !0)]),
					_: 2
				}, 1032, ["disabled", "onClick"]))], 64))), 128))]),
				_: 1
			})]),
			_: 1
		}));
	}
}), rE = /* @__PURE__ */ U({
	__name: "ContextMenu",
	props: {
		pressOpenDelay: {},
		dir: {},
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), P(z(tm), I({ "data-slot": "context-menu" }, z(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), iE = { class: "absolute right-2 pointer-events-none" }, aE = /* @__PURE__ */ U({
	__name: "ContextMenuCheckboxItem",
	props: {
		modelValue: { type: [Boolean, String] },
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
	emits: ["select", "update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (e, t) => (o(), P(z(Qp), I({ "data-slot": "context-menu-checkbox-item" }, z(i), { class: z($)("focus:bg-accent focus:text-accent-foreground gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class) }), {
			default: u(() => [L("span", iE, [W(z(im), null, {
				default: u(() => [v(e.$slots, "indicator-icon", {}, () => [W(z(Xn))])]),
				_: 3
			})]), v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), oE = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (e, t) => (o(), P(z(om), null, {
			default: u(() => [W(z(nm), I({ "data-slot": "context-menu-content" }, {
				...e.$attrs,
				...z(i)
			}, { class: z($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-36 rounded-lg p-1 shadow-md ring-1 duration-100 cn-menu-translucent z-50 max-h-(--reka-context-menu-content-available-height) origin-(--reka-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto", n.class) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), sE = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (t, r) => (o(), P(z(rm), I({
			"data-slot": "context-menu-item",
			"data-inset": e.inset ? "" : void 0,
			"data-variant": e.variant
		}, z(i), { class: z($)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive focus:*:[svg]:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 group/context-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class) }), {
			default: u(() => [v(t.$slots, "default")]),
			_: 3
		}, 16, [
			"data-inset",
			"data-variant",
			"class"
		]));
	}
}), cE = /* @__PURE__ */ U({
	__name: "ContextMenuLabel",
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
		inset: { type: Boolean }
	},
	setup(e) {
		let t = e, n = G(t, "class");
		return (r, i) => (o(), P(z(am), I({
			"data-slot": "context-menu-label",
			"data-inset": e.inset ? "" : void 0
		}, z(n), { class: z($)("text-muted-foreground px-1.5 py-1 text-xs font-medium data-inset:pl-7", t.class) }), {
			default: u(() => [v(r.$slots, "default")]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), lE = /* @__PURE__ */ U({
	__name: "ContextMenuRadioGroup",
	props: {
		modelValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), P(z(sm), I({ "data-slot": "context-menu-radio-group" }, z(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), uE = { class: "absolute right-2 pointer-events-none" }, dE = /* @__PURE__ */ U({
	__name: "ContextMenuRadioItem",
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
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (e, t) => (o(), P(z(cm), I({ "data-slot": "context-menu-radio-item" }, z(i), { class: z($)("focus:bg-accent focus:text-accent-foreground gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class) }), {
			default: u(() => [L("span", uE, [W(z(im), null, {
				default: u(() => [v(e.$slots, "indicator-icon", {}, () => [W(z(Xn))])]),
				_: 3
			})]), v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), fE = /* @__PURE__ */ U({
	__name: "ContextMenuSeparator",
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(lm), I({ "data-slot": "context-menu-separator" }, z(n), { class: z($)("bg-border -mx-1 my-1 h-px", t.class) }), null, 16, ["class"]));
	}
}), pE = /* @__PURE__ */ U({
	__name: "ContextMenuShortcut",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (o(), E("span", {
			"data-slot": "context-menu-shortcut",
			class: F(z($)("text-muted-foreground group-focus/context-menu-item:text-accent-foreground ml-auto text-xs tracking-widest", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), mE = /* @__PURE__ */ U({
	__name: "ContextMenuSub",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), P(z(um), I({ "data-slot": "context-menu-sub" }, z(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), hE = /* @__PURE__ */ U({
	__name: "ContextMenuSubContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		sideOffset: {},
		sideFlip: { type: Boolean },
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
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (e, t) => (o(), P(z(dm), I({ "data-slot": "context-menu-sub-content" }, z(i), { class: z($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-popover text-popover-foreground min-w-32 rounded-lg border p-1 shadow-lg duration-100 cn-menu-translucent z-50 origin-(--reka-context-menu-content-transform-origin) overflow-hidden", n.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), gE = /* @__PURE__ */ U({
	__name: "ContextMenuSubTrigger",
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
		inset: { type: Boolean }
	},
	setup(e) {
		let t = e, n = J(G(t, "class"));
		return (r, i) => (o(), P(z(fm), I({
			"data-slot": "context-menu-sub-trigger",
			"data-inset": e.inset ? "" : void 0
		}, z(n), { class: z($)("focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 flex cursor-default items-center outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: u(() => [v(r.$slots, "default"), W(z($n), { class: "cn-rtl-flip ml-auto" })]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), _E = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(mm), I({ "data-slot": "context-menu-trigger" }, z(n), { class: z($)("select-none", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), vE = /* @__PURE__ */ U({
	__name: "ContextMenu.ce",
	setup(e) {
		let t = ve();
		function n(e) {
			let t = e.getAttribute("type") ?? "item";
			return {
				kind: t === "label" ? "label" : t === "separator" ? "separator" : t === "checkbox" ? "checkbox" : t === "radio" ? "radio" : "item",
				value: e.getAttribute("value") ?? e.textContent?.trim() ?? "",
				label: e.textContent?.trim() ?? "",
				shortcut: e.getAttribute("shortcut") ?? "",
				disabled: e.hasAttribute("disabled"),
				checked: e.hasAttribute("checked"),
				inset: e.hasAttribute("inset"),
				group: e.getAttribute("name") ?? "",
				children: []
			};
		}
		let r = R(() => {
			let e = t?._light.html ?? "";
			if (!e.trim()) return [];
			let r = new DOMParser().parseFromString(`<div>${e}</div>`, "text/html").body.firstElementChild;
			if (!r) return [];
			let i = [];
			for (let e of [...r.children]) e.getAttribute("slot") || (e.tagName === "OPTION" ? i.push(n(e)) : e.tagName === "SECTION" && i.push({
				kind: "sub",
				value: e.getAttribute("value") ?? e.getAttribute("title") ?? "",
				label: e.getAttribute("title") ?? "",
				shortcut: "",
				disabled: e.hasAttribute("disabled"),
				checked: !1,
				inset: !1,
				group: "",
				children: [...e.querySelectorAll("option")].map(n)
			}));
			return i;
		}), i = O({}), a = O({}), s = R(() => {
			let e = {};
			for (let t of r.value) t.kind === "radio" && (e[t.group] ??= []).push(t);
			return e;
		});
		function c(e) {
			return i.value[e.value] ?? e.checked;
		}
		function l(e) {
			i.value[e.value] = !c(e), d(e.value);
		}
		function d(e) {
			t?.dispatchEvent(new CustomEvent("select", {
				bubbles: !0,
				composed: !0,
				detail: { value: e }
			}));
		}
		return (e, t) => (o(), P(z(rE), null, {
			default: u(() => [W(z(_E), null, {
				default: u(() => [v(e.$slots, "trigger", {}, () => [t[0] ||= V("Clique com o botão direito", -1)])]),
				_: 3
			}), W(z(oE), { class: "w-52" }, {
				default: u(() => [(o(!0), E(B, null, f(r.value, (e, t) => (o(), E(B, { key: t }, [e.kind === "label" ? (o(), P(z(cE), {
					key: 0,
					inset: e.inset
				}, {
					default: u(() => [V(H(e.label), 1)]),
					_: 2
				}, 1032, ["inset"])) : e.kind === "separator" ? (o(), P(z(fE), { key: 1 })) : e.kind === "checkbox" ? (o(), P(z(aE), {
					key: 2,
					"model-value": c(e),
					disabled: e.disabled,
					onSelect: k((t) => l(e), ["prevent"])
				}, {
					default: u(() => [V(H(e.label) + " ", 1), e.shortcut ? (o(), P(z(pE), { key: 0 }, {
						default: u(() => [V(H(e.shortcut), 1)]),
						_: 2
					}, 1024)) : M("", !0)]),
					_: 2
				}, 1032, [
					"model-value",
					"disabled",
					"onSelect"
				])) : e.kind === "radio" && s.value[e.group][0] === e ? (o(), P(z(lE), {
					key: 3,
					"model-value": a.value[e.group] ?? s.value[e.group].find((e) => e.checked)?.value,
					"onUpdate:modelValue": (t) => {
						a.value[e.group] = t, d(t);
					}
				}, {
					default: u(() => [(o(!0), E(B, null, f(s.value[e.group], (e, t) => (o(), P(z(dE), {
						key: t,
						value: e.value,
						disabled: e.disabled
					}, {
						default: u(() => [V(H(e.label), 1)]),
						_: 2
					}, 1032, ["value", "disabled"]))), 128))]),
					_: 2
				}, 1032, ["model-value", "onUpdate:modelValue"])) : e.kind === "radio" ? (o(), E(B, { key: 4 }, [], 64)) : e.kind === "sub" ? (o(), P(z(mE), { key: 5 }, {
					default: u(() => [W(z(gE), null, {
						default: u(() => [V(H(e.label), 1)]),
						_: 2
					}, 1024), W(z(hE), { class: "w-44" }, {
						default: u(() => [(o(!0), E(B, null, f(e.children, (e, t) => (o(), P(z(sE), {
							key: t,
							disabled: e.disabled,
							onClick: (t) => d(e.value)
						}, {
							default: u(() => [V(H(e.label) + " ", 1), e.shortcut ? (o(), P(z(pE), { key: 0 }, {
								default: u(() => [V(H(e.shortcut), 1)]),
								_: 2
							}, 1024)) : M("", !0)]),
							_: 2
						}, 1032, ["disabled", "onClick"]))), 128))]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1024)) : (o(), P(z(sE), {
					key: 6,
					inset: e.inset,
					disabled: e.disabled,
					onClick: (t) => d(e.value)
				}, {
					default: u(() => [V(H(e.label) + " ", 1), e.shortcut ? (o(), P(z(pE), { key: 0 }, {
						default: u(() => [V(H(e.shortcut), 1)]),
						_: 2
					}, 1024)) : M("", !0)]),
					_: 2
				}, 1032, [
					"inset",
					"disabled",
					"onClick"
				]))], 64))), 128))]),
				_: 1
			})]),
			_: 3
		}));
	}
}), yE = /* @__PURE__ */ U({
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
		let n = e, i = t, a = Y(G(n, "class"), i);
		return (e, t) => (o(), P(z(Ym), I({ "data-slot": "menubar" }, z(a), { class: z($)("h-8 gap-0.5 rounded-lg border p-[3px] flex items-center", n.class) }), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), bE = { class: "left-1.5 size-4 [&_svg:not([class*=size-])]:size-4 pointer-events-none absolute flex items-center justify-center" }, xE = /* @__PURE__ */ U({
	__name: "MenubarCheckboxItem",
	props: {
		modelValue: { type: [Boolean, String] },
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
	emits: ["select", "update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (e, t) => (o(), P(z(Km), I({ "data-slot": "menubar-checkbox-item" }, z(i), { class: z($)("focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm data-inset:pl-7 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class) }), {
			default: u(() => [L("span", bE, [W(z(th), null, {
				default: u(() => [v(e.$slots, "indicator-icon", {}, () => [W(z(Xn))])]),
				_: 3
			})]), v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), SE = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(nh), null, {
			default: u(() => [W(z($m), I({ "data-slot": "menubar-content" }, {
				...e.$attrs,
				...z(n)
			}, { class: z($)("bg-popover text-popover-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-lg p-1 shadow-md ring-1 duration-100 cn-menu-translucent z-50 origin-(--reka-menubar-content-transform-origin) overflow-hidden", t.class) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), CE = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class", "inset", "variant"), r);
		return (t, r) => (o(), P(z(eh), I({
			"data-slot": "menubar-item",
			"data-inset": e.inset ? "" : void 0,
			"data-variant": e.variant
		}, z(i), { class: z($)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive! not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-disabled:opacity-50 data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 group/menubar-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class) }), {
			default: u(() => [v(t.$slots, "default")]),
			_: 3
		}, 16, [
			"data-inset",
			"data-variant",
			"class"
		]));
	}
}), wE = /* @__PURE__ */ U({
	__name: "MenubarMenu",
	props: { value: {} },
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(Qm), I({ "data-slot": "menubar-menu" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), TE = /* @__PURE__ */ U({
	__name: "MenubarRadioGroup",
	props: {
		modelValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), P(z(rh), I({ "data-slot": "menubar-radio-group" }, z(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), EE = { class: "left-1.5 size-4 [&_svg:not([class*=size-])]:size-4 pointer-events-none absolute flex items-center justify-center" }, DE = /* @__PURE__ */ U({
	__name: "MenubarRadioItem",
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
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (e, t) => (o(), P(z(ih), I({ "data-slot": "menubar-radio-item" }, z(i), { class: z($)("focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm data-disabled:opacity-50 data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class) }), {
			default: u(() => [L("span", EE, [W(z(th), null, {
				default: u(() => [v(e.$slots, "indicator-icon", {}, () => [W(z(Xn))])]),
				_: 3
			})]), v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), OE = /* @__PURE__ */ U({
	__name: "MenubarSeparator",
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(ah), I({
			"data-slot": "menubar-separator",
			class: z($)("bg-border -mx-1 my-1 h-px", t.class)
		}, z(n)), null, 16, ["class"]));
	}
}), kE = /* @__PURE__ */ U({
	__name: "MenubarShortcut",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (o(), E("span", {
			"data-slot": "menubar-shortcut",
			class: F(z($)("text-muted-foreground group-focus/menubar-item:text-accent-foreground text-xs tracking-widest ml-auto", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), AE = /* @__PURE__ */ U({
	__name: "MenubarSub",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), P(z(oh), I({ "data-slot": "menubar-sub" }, z(n)), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16));
	}
}), jE = /* @__PURE__ */ U({
	inheritAttrs: !1,
	__name: "MenubarSubContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		sideOffset: {},
		sideFlip: { type: Boolean },
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
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (e, t) => (o(), P(z(nh), null, {
			default: u(() => [W(z(sh), I({ "data-slot": "menubar-sub-content" }, {
				...e.$attrs,
				...z(i)
			}, { class: z($)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-32 rounded-lg p-1 shadow-lg ring-1 duration-100 cn-menu-translucent z-50 origin-(--reka-menubar-content-transform-origin) overflow-hidden", n.class) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), ME = /* @__PURE__ */ U({
	__name: "MenubarSubTrigger",
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
		inset: { type: Boolean }
	},
	setup(e) {
		let t = e, n = J(G(t, "class", "inset"));
		return (r, i) => (o(), P(z(ch), I({
			"data-slot": "menubar-sub-trigger",
			"data-inset": e.inset ? "" : void 0
		}, z(n), { class: z($)("focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 flex cursor-default items-center outline-none select-none", t.class) }), {
			default: u(() => [v(r.$slots, "default"), W(z($n), { class: "cn-rtl-flip ml-auto size-4" })]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), NE = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(lh), I({ "data-slot": "menubar-trigger" }, z(n), { class: z($)("hover:bg-muted aria-expanded:bg-muted rounded-sm px-1.5 py-[2px] text-sm font-medium flex items-center outline-hidden select-none", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), PE = /* @__PURE__ */ U({
	__name: "Menubar.ce",
	setup(e) {
		let t = ve(), n = t?._light.sections ?? [];
		function r(e) {
			let t = e.getAttribute("type") ?? "item";
			return {
				kind: t === "separator" ? "separator" : t === "checkbox" ? "checkbox" : t === "radio" ? "radio" : "item",
				value: e.getAttribute("value") ?? e.textContent?.trim() ?? "",
				label: e.textContent?.trim() ?? "",
				shortcut: e.getAttribute("shortcut") ?? "",
				disabled: e.hasAttribute("disabled"),
				checked: e.hasAttribute("checked"),
				inset: e.hasAttribute("inset"),
				group: e.getAttribute("name") ?? "",
				children: []
			};
		}
		function i(e) {
			let t = new DOMParser().parseFromString(`<div>${e}</div>`, "text/html").body.firstElementChild;
			if (!t) return [];
			let n = [];
			for (let e of [...t.children]) e.tagName === "OPTION" ? n.push(r(e)) : e.tagName === "SECTION" && n.push({
				kind: "sub",
				value: e.getAttribute("value") ?? e.getAttribute("title") ?? "",
				label: e.getAttribute("title") ?? "",
				shortcut: "",
				disabled: e.hasAttribute("disabled"),
				checked: !1,
				inset: !1,
				group: "",
				children: [...e.querySelectorAll("option")].map(r)
			});
			return n;
		}
		let a = R(() => n.map((e) => ({
			title: e.title,
			value: e.value,
			nodes: i(e.html)
		}))), s = O({}), c = O({});
		function l(e) {
			let t = {};
			for (let n of e) n.kind === "radio" && (t[n.group] ??= []).push(n);
			return t;
		}
		function d(e) {
			return s.value[e.value] ?? e.checked;
		}
		function p(e) {
			s.value[e.value] = !d(e), m(e.value);
		}
		function m(e) {
			t?.dispatchEvent(new CustomEvent("select", {
				bubbles: !0,
				composed: !0,
				detail: { value: e }
			}));
		}
		return (e, t) => (o(), P(z(yE), null, {
			default: u(() => [(o(!0), E(B, null, f(a.value, (e) => (o(), P(z(wE), { key: e.value }, {
				default: u(() => [W(z(NE), null, {
					default: u(() => [V(H(e.title), 1)]),
					_: 2
				}, 1024), W(z(SE), null, {
					default: u(() => [(o(!0), E(B, null, f(e.nodes, (t, n) => (o(), E(B, { key: n }, [t.kind === "separator" ? (o(), P(z(OE), { key: 0 })) : t.kind === "checkbox" ? (o(), P(z(xE), {
						key: 1,
						"model-value": d(t),
						disabled: t.disabled,
						onSelect: k((e) => p(t), ["prevent"])
					}, {
						default: u(() => [V(H(t.label) + " ", 1), t.shortcut ? (o(), P(z(kE), { key: 0 }, {
							default: u(() => [V(H(t.shortcut), 1)]),
							_: 2
						}, 1024)) : M("", !0)]),
						_: 2
					}, 1032, [
						"model-value",
						"disabled",
						"onSelect"
					])) : t.kind === "radio" && l(e.nodes)[t.group][0] === t ? (o(), P(z(TE), {
						key: 2,
						"model-value": c.value[e.value + t.group] ?? l(e.nodes)[t.group].find((e) => e.checked)?.value,
						"onUpdate:modelValue": (n) => {
							c.value[e.value + t.group] = n, m(n);
						}
					}, {
						default: u(() => [(o(!0), E(B, null, f(l(e.nodes)[t.group], (e, t) => (o(), P(z(DE), {
							key: t,
							value: e.value,
							disabled: e.disabled
						}, {
							default: u(() => [V(H(e.label), 1)]),
							_: 2
						}, 1032, ["value", "disabled"]))), 128))]),
						_: 2
					}, 1032, ["model-value", "onUpdate:modelValue"])) : t.kind === "radio" ? (o(), E(B, { key: 3 }, [], 64)) : t.kind === "sub" ? (o(), P(z(AE), { key: 4 }, {
						default: u(() => [W(z(ME), null, {
							default: u(() => [V(H(t.label), 1)]),
							_: 2
						}, 1024), W(z(jE), null, {
							default: u(() => [(o(!0), E(B, null, f(t.children, (e, t) => (o(), P(z(CE), {
								key: t,
								disabled: e.disabled,
								onClick: (t) => m(e.value)
							}, {
								default: u(() => [V(H(e.label) + " ", 1), e.shortcut ? (o(), P(z(kE), { key: 0 }, {
									default: u(() => [V(H(e.shortcut), 1)]),
									_: 2
								}, 1024)) : M("", !0)]),
								_: 2
							}, 1032, ["disabled", "onClick"]))), 128))]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1024)) : (o(), P(z(CE), {
						key: 5,
						inset: t.inset,
						disabled: t.disabled,
						onClick: (e) => m(t.value)
					}, {
						default: u(() => [V(H(t.label) + " ", 1), t.shortcut ? (o(), P(z(kE), { key: 0 }, {
							default: u(() => [V(H(t.shortcut), 1)]),
							_: 2
						}, 1024)) : M("", !0)]),
						_: 2
					}, 1032, [
						"inset",
						"disabled",
						"onClick"
					]))], 64))), 128))]),
					_: 2
				}, 1024)]),
				_: 2
			}, 1024))), 128))]),
			_: 1
		}));
	}
}), FE = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, IE = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), E("div", FE, [W(z(jh), I({ "data-slot": "navigation-menu-viewport" }, z(n), { class: z($)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:zoom-out-90 data-open:zoom-in-90 ring-foreground/10 rounded-lg shadow ring-1 duration-100 origin-top-center relative mt-1.5 h-(--reka-navigation-menu-viewport-height) w-full overflow-hidden md:w-(--reka-navigation-menu-viewport-width)", t.class) }), null, 16, ["class"])]));
	}
}), LE = /* @__PURE__ */ U({
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
		let n = e, i = t, a = Y(G(n, "class", "viewport"), i);
		return (t, i) => (o(), P(z(xh), I({
			"data-slot": "navigation-menu",
			"data-viewport": e.viewport
		}, z(a), { class: z($)("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", n.class) }), {
			default: u((n) => [v(t.$slots, "default", N(r(n))), e.viewport ? (o(), P(IE, { key: 0 })) : M("", !0)]),
			_: 3
		}, 16, ["data-viewport", "class"]));
	}
}), RE = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (e, t) => (o(), P(z(Eh), I({ "data-slot": "navigation-menu-content" }, z(i), { class: z($)("data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-open:animate-in group-data-[viewport=false]/navigation-menu:data-closed:animate-out group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 group-data-[viewport=false]/navigation-menu:ring-foreground/10 p-1 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:duration-300 top-0 left-0 w-full group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none md:absolute md:w-auto", n.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), zE = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(wh), I({ "data-slot": "navigation-menu-item" }, z(n), { class: z($)("relative", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), BE = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class"), r);
		return (e, t) => (o(), P(z(Dh), I({ "data-slot": "navigation-menu-link" }, z(i), { class: z($)("data-active:focus:bg-muted data-active:hover:bg-muted data-active:bg-muted/50 focus-visible:ring-ring/50 hover:bg-muted focus:bg-muted flex items-center gap-2 rounded-lg p-2 text-sm transition-all outline-none focus-visible:ring-3 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md [&_svg:not([class*=size-])]:size-4", n.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), VE = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Oh), I({ "data-slot": "navigation-menu-list" }, z(n), { class: z($)("gap-0 group flex flex-1 list-none items-center justify-center", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), HE = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Ah), I({ "data-slot": "navigation-menu-trigger" }, z(n), { class: z($)(z(UE)(), "group", t.class) }), {
			default: u(() => [v(e.$slots, "default"), W(z(Zn), {
				class: "relative top-px ml-1 size-3 transition duration-300 group-data-open/navigation-menu-trigger:rotate-180 group-data-popup-open/navigation-menu-trigger:rotate-180",
				"aria-hidden": "true"
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), UE = YS("hover:bg-muted focus:bg-muted data-open:hover:bg-muted data-open:focus:bg-muted data-open:bg-muted/50 focus-visible:ring-ring/50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all focus-visible:ring-3 focus-visible:outline-1 disabled:opacity-50 group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center outline-none disabled:pointer-events-none"), WE = ["innerHTML"], GE = {
	type: "button",
	class: "inline-flex h-9 w-max items-center justify-center px-2.5 py-1.5 text-sm font-medium"
}, KE = /* @__PURE__ */ U({
	__name: "NavigationMenu.ce",
	setup(e) {
		let t = ve()?._light.sections ?? [];
		return (e, n) => (o(), P(z(LE), null, {
			default: u(() => [W(z(VE), null, {
				default: u(() => [(o(!0), E(B, null, f(z(t), (e) => (o(), P(z(zE), { key: e.value }, {
					default: u(() => [e.html.trim() ? (o(), E(B, { key: 0 }, [W(z(HE), null, {
						default: u(() => [V(H(e.title), 1)]),
						_: 2
					}, 1024), W(z(RE), null, {
						default: u(() => [L("div", { innerHTML: e.html }, null, 8, WE)]),
						_: 2
					}, 1024)], 64)) : (o(), P(z(BE), {
						key: 1,
						"as-child": ""
					}, {
						default: u(() => [L("button", GE, H(e.title), 1)]),
						_: 2
					}, 1024))]),
					_: 2
				}, 1024))), 128))]),
				_: 1
			})]),
			_: 1
		}));
	}
}), qE = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class"), r), a = O(/* @__PURE__ */ new Map()), s = O(/* @__PURE__ */ new Map()), { contains: c } = ts({ sensitivity: "base" }), l = ye({
			search: "",
			filtered: {
				count: 0,
				items: /* @__PURE__ */ new Map(),
				groups: /* @__PURE__ */ new Set()
			}
		});
		function d() {
			if (!l.search) {
				l.filtered.count = a.value.size;
				return;
			}
			l.filtered.groups = /* @__PURE__ */ new Set();
			let e = 0;
			for (let [t, n] of a.value) {
				let r = c(n, l.search);
				l.filtered.items.set(t, +!!r), r && e++;
			}
			for (let [e, t] of s.value) for (let n of t) if (l.filtered.items.get(n) > 0) {
				l.filtered.groups.add(e);
				break;
			}
			l.filtered.count = e;
		}
		return C(() => l.search, () => {
			d();
		}), iD({
			allItems: a,
			allGroups: s,
			filterState: l
		}), (e, t) => (o(), P(z(Tl), I({ "data-slot": "command" }, z(i), { class: z($)("bg-popover text-popover-foreground rounded-xl! p-1 flex size-full flex-col overflow-hidden", n.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), JE = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class"), { filterState: r } = rD(), i = R(() => !!r.search && r.filtered.count === 0);
		return (e, r) => i.value ? (o(), P(z(X), I({
			key: 0,
			"data-slot": "command-empty"
		}, z(n), { class: z($)("py-6 text-center text-sm", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"])) : M("", !0);
	}
}), YE = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class"), { allGroups: r, filterState: i } = rD(), a = ws(), s = R(() => i.search ? i.filtered.groups.has(a) : !0);
		return oD({ id: a }), p(() => {
			r.value.has(a) || r.value.set(a, /* @__PURE__ */ new Set());
		}), m(() => {
			r.value.delete(a);
		}), (r, i) => (o(), P(z(Al), I(z(n), {
			id: z(a),
			"data-slot": "command-group",
			class: z($)("text-foreground **:[[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium", t.class),
			hidden: s.value ? void 0 : !0
		}), {
			default: u(() => [e.heading ? (o(), P(z(jl), {
				key: 0,
				"data-slot": "command-group-heading",
				class: ""
			}, {
				default: u(() => [V(H(e.heading), 1)]),
				_: 1
			})) : M("", !0), v(r.$slots, "default")]),
			_: 3
		}, 16, [
			"id",
			"class",
			"hidden"
		]));
	}
}), XE = {
	"data-slot": "command-input-wrapper",
	class: "p-1 pb-0"
}, ZE = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class")), { filterState: r } = rD();
		return (e, i) => (o(), E("div", XE, [W(z(UC), { class: "bg-input/30 border-input/30 h-8! rounded-lg! shadow-none! *:data-[slot=input-group-addon]:pl-2!" }, {
			default: u(() => [W(z(Dl), I({
				...z(n),
				...e.$attrs
			}, {
				modelValue: z(r).search,
				"onUpdate:modelValue": i[0] ||= (e) => z(r).search = e,
				"data-slot": "command-input",
				"auto-focus": "",
				class: z($)("w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", t.class)
			}), null, 16, ["modelValue", "class"]), W(z(GC), null, {
				default: u(() => [W(z(ur), { class: "size-4 shrink-0 opacity-50" })]),
				_: 1
			})]),
			_: 1
		})]));
	}
}), QE = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class"), r), a = ws(), { filterState: s, allItems: c, allGroups: l } = rD(), d = aD(), f = R(() => {
			if (s.search) {
				let e = s.filtered.items.get(a);
				return e === void 0 ? !0 : e > 0;
			} else return !0;
		}), h = O(), g = Pn(h);
		return p(() => {
			if (!(g.value instanceof HTMLElement)) return;
			c.value.set(a, g.value.textContent ?? n.value?.toString() ?? "");
			let e = d?.id;
			e && (l.value.has(e) ? l.value.get(e)?.add(a) : l.value.set(e, new Set([a])));
		}), m(() => {
			c.value.delete(a);
		}), (e, t) => f.value ? (o(), P(z(Fl), I({ key: 0 }, z(i), {
			id: z(a),
			ref_key: "itemRef",
			ref: h,
			"data-slot": "command-item",
			class: z($)("data-selected:bg-muted data-selected:text-foreground data-selected:*:[svg]:text-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! [&_svg:not([class*=size-])]:size-4 group/command-item data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class),
			onSelect: t[0] ||= () => {
				z(s).search = "";
			}
		}), {
			default: u(() => [v(e.$slots, "default"), W(z(Xn), { class: "ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" })]),
			_: 3
		}, 16, ["id", "class"])) : M("", !0);
	}
}), $E = { role: "presentation" }, eD = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(El), I({ "data-slot": "command-list" }, z(n), { class: z($)("no-scrollbar max-h-72 scroll-py-1 outline-none overflow-x-hidden overflow-y-auto", t.class) }), {
			default: u(() => [L("div", $E, [v(e.$slots, "default")])]),
			_: 3
		}, 16, ["class"]));
	}
}), tD = /* @__PURE__ */ U({
	__name: "CommandSeparator",
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(X_), I({ "data-slot": "command-separator" }, z(n), { class: z($)("bg-border -mx-1 h-px", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), nD = /* @__PURE__ */ U({
	__name: "CommandShortcut",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e;
		return (e, n) => (o(), E("span", {
			"data-slot": "command-shortcut",
			class: F(z($)("text-muted-foreground group-data-selected/command-item:text-foreground ml-auto text-xs tracking-widest", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), [rD, iD] = K("Command"), [aD, oD] = K("CommandGroup"), sD = /* @__PURE__ */ U({
	__name: "Command.ce",
	setup(e) {
		let t = ve();
		function n(e) {
			return {
				value: e.getAttribute("value") ?? e.textContent?.trim() ?? "",
				label: e.textContent?.trim() ?? "",
				disabled: e.hasAttribute("disabled"),
				shortcut: e.getAttribute("shortcut") ?? ""
			};
		}
		let r = R(() => {
			let e = t?._light.html ?? "";
			if (!e.trim()) return [];
			let r = new DOMParser().parseFromString(`<div>${e}</div>`, "text/html").body.firstElementChild;
			if (!r) return [];
			let i = [], a = null;
			for (let e of [...r.children]) e.tagName === "OPTION" ? (a || (a = {
				heading: "",
				items: []
			}, i.push(a)), a.items.push(n(e))) : e.tagName === "SECTION" && (a = null, i.push({
				heading: e.getAttribute("title") ?? "",
				items: [...e.querySelectorAll("option")].map(n)
			}));
			return i;
		});
		function i(e) {
			t?.dispatchEvent(new CustomEvent("select", {
				bubbles: !0,
				composed: !0,
				detail: { value: e }
			}));
		}
		return (e, t) => (o(), P(z(qE), null, {
			default: u(() => [W(z(ZE), { placeholder: "Pesquisar comando..." }), W(z(eD), null, {
				default: u(() => [W(z(JE), null, {
					default: u(() => [...t[0] ||= [V("Sem resultados.", -1)]]),
					_: 1
				}), (o(!0), E(B, null, f(r.value, (e, t) => (o(), E(B, { key: t }, [t > 0 ? (o(), P(z(tD), { key: 0 })) : M("", !0), W(z(YE), { heading: e.heading || void 0 }, {
					default: u(() => [(o(!0), E(B, null, f(e.items, (e) => (o(), P(z(QE), {
						key: e.value,
						value: e.value,
						disabled: e.disabled,
						onSelect: (t) => i(e.value)
					}, {
						default: u(() => [L("span", null, H(e.label), 1), e.shortcut ? (o(), P(z(nD), { key: 0 }, {
							default: u(() => [V(H(e.shortcut), 1)]),
							_: 2
						}, 1024)) : M("", !0)]),
						_: 2
					}, 1032, [
						"value",
						"disabled",
						"onSelect"
					]))), 128))]),
					_: 2
				}, 1032, ["heading"])], 64))), 128))]),
				_: 1
			})]),
			_: 1
		}));
	}
});
//#endregion
//#region node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js
function cD(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function lD(e) {
	return cD(e) || Array.isArray(e);
}
function uD() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
function dD(e, t) {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length !== r.length || JSON.stringify(Object.keys(e.breakpoints || {})) !== JSON.stringify(Object.keys(t.breakpoints || {})) ? !1 : n.every((n) => {
		let r = e[n], i = t[n];
		return typeof r == "function" ? `${r}` == `${i}` : !lD(r) || !lD(i) ? r === i : dD(r, i);
	});
}
function fD(e) {
	return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map((e) => e.options);
}
function pD(e, t) {
	if (e.length !== t.length) return !1;
	let n = fD(e), r = fD(t);
	return n.every((e, t) => {
		let n = r[t];
		return dD(e, n);
	});
}
//#endregion
//#region node_modules/embla-carousel/esm/embla-carousel.esm.js
function mD(e) {
	return typeof e == "number";
}
function hD(e) {
	return typeof e == "string";
}
function gD(e) {
	return typeof e == "boolean";
}
function _D(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function vD(e) {
	return Math.abs(e);
}
function yD(e) {
	return Math.sign(e);
}
function bD(e, t) {
	return vD(e - t);
}
function xD(e, t) {
	return e === 0 || t === 0 || vD(e) <= vD(t) ? 0 : vD(bD(vD(e), vD(t)) / e);
}
function SD(e) {
	return Math.round(e * 100) / 100;
}
function CD(e) {
	return OD(e).map(Number);
}
function wD(e) {
	return e[TD(e)];
}
function TD(e) {
	return Math.max(0, e.length - 1);
}
function ED(e, t) {
	return t === TD(e);
}
function DD(e, t = 0) {
	return Array.from(Array(e), (e, n) => t + n);
}
function OD(e) {
	return Object.keys(e);
}
function kD(e, t) {
	return [e, t].reduce((e, t) => (OD(t).forEach((n) => {
		let r = e[n], i = t[n];
		e[n] = _D(r) && _D(i) ? kD(r, i) : i;
	}), e), {});
}
function AD(e, t) {
	return t.MouseEvent !== void 0 && e instanceof t.MouseEvent;
}
function jD(e, t) {
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
		return hD(e) ? n[e](r) : e(t, r, i);
	}
	return { measure: o };
}
function MD() {
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
function ND(e, t, n, r) {
	let i = MD(), a = 1e3 / 60, o = null, s = 0, c = 0;
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
function PD(e, t) {
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
function FD(e = 0, t = 0) {
	let n = vD(e - t);
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
function ID(e, t, n) {
	let { constrain: r } = FD(0, e), i = e + 1, a = o(t);
	function o(e) {
		return n ? vD((i + e) % i) : r(e);
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
		return ID(e, s(), n);
	}
	let d = {
		get: s,
		set: c,
		add: l,
		clone: u
	};
	return d;
}
function LD(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v) {
	let { cross: y, direction: b } = e, x = [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	], S = { passive: !1 }, C = MD(), w = MD(), T = FD(50, 225).constrain(p.measure(20)), ee = {
		mouse: 300,
		touch: 400
	}, E = {
		mouse: 500,
		touch: 600
	}, D = m ? 43 : 25, te = !1, O = 0, ne = 0, k = !1, re = !1, ie = !1, A = !1;
	function j(e) {
		if (!v) return;
		function n(t) {
			(gD(v) || v(e, t)) && F(t);
		}
		let r = t;
		C.add(r, "dragstart", (e) => e.preventDefault(), S).add(r, "touchmove", () => void 0, S).add(r, "touchend", () => void 0).add(r, "touchstart", n).add(r, "mousedown", n).add(r, "touchcancel", ce).add(r, "contextmenu", ce).add(r, "click", le, !0);
	}
	function ae() {
		C.clear(), w.clear();
	}
	function oe() {
		let e = A ? n : t;
		w.add(e, "touchmove", se, S).add(e, "touchend", ce).add(e, "mousemove", se, S).add(e, "mouseup", ce);
	}
	function M(e) {
		let t = e.nodeName || "";
		return x.includes(t);
	}
	function N() {
		return (m ? E : ee)[A ? "mouse" : "touch"];
	}
	function P(e, t) {
		let n = d.add(yD(e) * -1), r = u.byDistance(e, !m).distance;
		return m || vD(e) < T ? r : g && t ? r * .5 : u.byIndex(n.get(), 0).distance;
	}
	function F(e) {
		let t = AD(e, r);
		A = t, ie = m && t && !e.buttons && te, te = bD(i.get(), o.get()) >= 2, !(t && e.button !== 0) && (M(e.target) || (k = !0, a.pointerDown(e), l.useFriction(0).useDuration(0), i.set(o), oe(), O = a.readPoint(e), ne = a.readPoint(e, y), f.emit("pointerDown")));
	}
	function se(e) {
		if (!AD(e, r) && e.touches.length >= 2) return ce(e);
		let t = a.readPoint(e), n = a.readPoint(e, y), o = bD(t, O), c = bD(n, ne);
		if (!re && !A && (!e.cancelable || (re = o > c, !re))) return ce(e);
		let u = a.pointerMove(e);
		o > h && (ie = !0), l.useFriction(.3).useDuration(.75), s.start(), i.add(b(u)), e.preventDefault();
	}
	function ce(e) {
		let t = u.byDistance(0, !1).index !== d.get(), n = a.pointerUp(e) * N(), r = P(b(n), t), i = xD(n, r), o = D - 10 * i, s = _ + i / 50;
		re = !1, k = !1, w.clear(), l.useDuration(o).useFriction(s), c.distance(r, !m), A = !1, f.emit("pointerUp");
	}
	function le(e) {
		ie &&= (e.stopPropagation(), e.preventDefault(), !1);
	}
	function I() {
		return k;
	}
	return {
		init: j,
		destroy: ae,
		pointerDown: I
	};
}
function RD(e, t) {
	let n, r;
	function i(e) {
		return e.timeStamp;
	}
	function a(n, r) {
		let i = `client${(r || e.scroll) === "x" ? "X" : "Y"}`;
		return (AD(n, t) ? n : n.touches[0])[i];
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
		return o && !s && vD(c) > .1 ? c : 0;
	}
	return {
		pointerDown: o,
		pointerMove: s,
		pointerUp: c,
		readPoint: a
	};
}
function zD() {
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
function BD(e) {
	function t(t) {
		return t / 100 * e;
	}
	return { measure: t };
}
function VD(e, t, n, r, i, a, o) {
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
				if (vD(f(n ? e : r[o]) - s) >= .5) {
					i.reInit(), t.emit("resize");
					break;
				}
			}
		}
		c = new ResizeObserver((e) => {
			(gD(a) || a(i, e)) && o(e);
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
function HD(e, t, n, r, i, a) {
	let o = 0, s = 0, c = i, l = a, u = e.get(), d = 0;
	function f() {
		let t = r.get() - e.get(), i = !c, a = 0;
		return i ? (o = 0, n.set(r), e.set(r), a = t) : (n.set(e), o += t / c, o *= l, u += o, e.add(o), a = u - d), s = yD(a), d = u, x;
	}
	function p() {
		return vD(r.get() - t.get()) < .001;
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
function UD(e, t, n, r, i) {
	let a = i.measure(10), o = i.measure(50), s = FD(.1, .99), c = !1;
	function l() {
		return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
	}
	function u(i) {
		if (!l()) return;
		let c = vD(e[e.reachedMin(t.get()) ? "min" : "max"] - t.get()), u = n.get() - t.get(), d = s.constrain(c / o);
		n.subtract(u * d), !i && vD(u) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
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
function WD(e, t, n, r, i) {
	let a = FD(-t + e, 0), o = d(), s = u(), c = f();
	function l(e, t) {
		return bD(e, t) <= 1;
	}
	function u() {
		let e = o[0], t = wD(o);
		return FD(o.lastIndexOf(e), o.indexOf(t) + 1);
	}
	function d() {
		return n.map((e, t) => {
			let { min: r, max: i } = a, o = a.constrain(e), s = !t, c = ED(n, t);
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
function GD(e, t, n) {
	let r = t[0];
	return { limit: FD(n ? r - e : wD(t), r) };
}
function KD(e, t, n, r) {
	let i = .1, { reachedMin: a, reachedMax: o } = FD(t.min + i, t.max + i);
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
function qD(e) {
	let { max: t, length: n } = e;
	function r(e) {
		let r = e - t;
		return n ? r / -n : 0;
	}
	return { get: r };
}
function JD(e, t, n, r, i) {
	let { startEdge: a, endEdge: o } = e, { groupSlides: s } = i, c = d().map(t.measure), l = f(), u = p();
	function d() {
		return s(r).map((e) => wD(e)[o] - e[0][a]).map(vD);
	}
	function f() {
		return r.map((e) => n[a] - e[a]).map((e) => -vD(e));
	}
	function p() {
		return s(l).map((e) => e[0]).map((e, t) => e + c[t]);
	}
	return {
		snaps: l,
		snapsAligned: u
	};
}
function YD(e, t, n, r, i, a) {
	let { groupSlides: o } = i, { min: s, max: c } = r, l = u();
	function u() {
		let r = o(a), i = !e || t === "keepSnaps";
		return n.length === 1 ? [a] : i ? r : r.slice(s, c).map((e, t, n) => {
			let r = !t, i = ED(n, t);
			return r ? DD(wD(n[0]) + 1) : i ? DD(TD(a) - wD(n)[0] + 1, wD(n)[0]) : e;
		});
	}
	return { slideRegistry: l };
}
function XD(e, t, n, r, i) {
	let { reachedAny: a, removeOffset: o, constrain: s } = r;
	function c(e) {
		return e.concat().sort((e, t) => vD(e) - vD(t))[0];
	}
	function l(n) {
		let r = e ? o(n) : s(n), { index: i } = t.map((e, t) => ({
			diff: u(e - r, 0),
			index: t
		})).sort((e, t) => vD(e.diff) - vD(t.diff))[0];
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
		let a = i.filter((e) => yD(e) === r);
		return a.length ? c(a) : wD(i) - n;
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
function ZD(e, t, n, r, i, a, o) {
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
function QD(e, t, n, r, i, a, o, s) {
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
			mD(a) && (i.useDuration(0), r.index(a, 0), o.emit("slideFocus"));
		}
		a.add(document, "keydown", d, !1), t.forEach((e, t) => {
			a.add(e, "focus", (e) => {
				(gD(s) || s(u, e)) && f(t);
			}, c);
		});
	}
	function d(e) {
		e.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
	}
	return { init: u };
}
function $D(e) {
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
		return mD(e) ? e : e.get();
	}
	return {
		get: n,
		set: r,
		add: i,
		subtract: a
	};
}
function eO(e, t) {
	let n = e.scroll === "x" ? o : s, r = t.style, i = null, a = !1;
	function o(e) {
		return `translate3d(${e}px,0px,0px)`;
	}
	function s(e) {
		return `translate3d(0px,${e}px,0px)`;
	}
	function c(t) {
		if (a) return;
		let o = SD(e.direction(t));
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
function tO(e, t, n, r, i, a, o, s, c) {
	let l = .5, u = CD(i), d = CD(i).reverse(), f = _().concat(v());
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
				slideLocation: $D(-1),
				translate: eO(e, c[t]),
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
function nO(e, t, n) {
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
			i || (gD(n) || n(a, e)) && o(e);
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
function rO(e, t, n, r) {
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
		return OD(i).reduce((t, n) => {
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
function iO(e, t, n, r, i, a) {
	let { measureSize: o, startEdge: s, endEdge: c } = e, l = n[0] && i, u = m(), d = h(), f = n.map(o), p = g();
	function m() {
		if (!l) return 0;
		let e = n[0];
		return vD(t[s] - e[s]);
	}
	function h() {
		if (!l) return 0;
		let e = a.getComputedStyle(wD(r));
		return parseFloat(e.getPropertyValue(`margin-${c}`));
	}
	function g() {
		return n.map((e, t, n) => {
			let r = !t, i = ED(n, t);
			return r ? f[t] + u : i ? f[t] + d : n[t + 1][s] - e[s];
		}).map(vD);
	}
	return {
		slideSizes: f,
		slideSizesWithGaps: p,
		startGap: u,
		endGap: d
	};
}
function aO(e, t, n, r, i, a, o, s, c) {
	let { startEdge: l, endEdge: u, direction: d } = e, f = mD(n);
	function p(e, t) {
		return CD(e).filter((e) => e % t === 0).map((n) => e.slice(n, n + t));
	}
	function m(e) {
		return e.length ? CD(e).reduce((n, f, p) => {
			let m = wD(n) || 0, h = m === 0, g = f === TD(e), _ = i[l] - a[m][l], v = i[l] - a[f][u], y = !r && h ? d(o) : 0, b = vD(v - (!r && g ? d(s) : 0) - (_ + y));
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
function oO(e, t, n, r, i, a, o) {
	let { align: s, axis: c, direction: l, startIndex: u, loop: d, duration: f, dragFree: p, dragThreshold: m, inViewThreshold: h, slidesToScroll: g, skipSnaps: _, containScroll: v, watchResize: y, watchSlides: b, watchDrag: x, watchFocus: S } = a, C = zD(), w = C.measure(t), T = n.map(C.measure), ee = PD(c, l), E = ee.measureSize(w), D = BD(E), te = jD(s, E), O = !d && !!v, { slideSizes: ne, slideSizesWithGaps: k, startGap: re, endGap: ie } = iO(ee, w, T, n, d || !!v, i), A = aO(ee, E, g, d, w, T, re, ie, 2), { snaps: j, snapsAligned: ae } = JD(ee, te, w, T, A), oe = -wD(j) + wD(k), { snapsContained: M, scrollContainLimit: N } = WD(E, oe, ae, v, 2), P = O ? M : ae, { limit: F } = GD(oe, P, d), se = ID(TD(P), u, d), ce = se.clone(), le = CD(n), I = ({ dragHandler: e, scrollBody: t, scrollBounds: n, options: { loop: r } }) => {
		r || n.constrain(e.pointerDown()), t.seek();
	}, ue = ({ scrollBody: e, translate: t, location: n, offsetLocation: r, previousLocation: i, scrollLooper: a, slideLooper: o, dragHandler: s, animation: c, eventHandler: l, scrollBounds: u, options: { loop: d } }, f) => {
		let p = e.settled(), m = !u.shouldConstrain(), h = d ? p : p && m, g = h && !s.pointerDown();
		g && c.stop();
		let _ = n.get() * f + i.get() * (1 - f);
		r.set(_), d && (a.loop(e.direction()), o.loop()), t.to(r.get()), g && l.emit("settle"), h || l.emit("scroll");
	}, de = ND(r, i, () => I(Ce), (e) => ue(Ce, e)), L = .68, fe = P[se.get()], pe = $D(fe), me = $D(fe), he = $D(fe), ge = $D(fe), R = HD(pe, he, me, ge, f, L), z = XD(d, P, oe, F, ge), _e = ZD(de, se, ce, R, z, ge, o), ve = qD(F), ye = MD(), be = rO(t, n, o, h), { slideRegistry: xe } = YD(O, v, P, N, A, le), Se = QD(e, n, xe, _e, R, ye, o, S), Ce = {
		ownerDocument: r,
		ownerWindow: i,
		eventHandler: o,
		containerRect: w,
		slideRects: T,
		animation: de,
		axis: ee,
		dragHandler: LD(ee, e, r, i, ge, RD(ee, i), pe, de, _e, R, z, se, o, D, p, m, _, L, x),
		eventStore: ye,
		percentOfView: D,
		index: se,
		indexPrevious: ce,
		limit: F,
		location: pe,
		offsetLocation: he,
		previousLocation: me,
		options: a,
		resizeHandler: VD(t, o, i, n, ee, y, C),
		scrollBody: R,
		scrollBounds: UD(F, he, ge, R, D),
		scrollLooper: KD(oe, F, he, [
			pe,
			he,
			me,
			ge
		]),
		scrollProgress: ve,
		scrollSnapList: P.map(ve.get),
		scrollSnaps: P,
		scrollTarget: z,
		scrollTo: _e,
		slideLooper: tO(ee, E, oe, ne, k, j, P, he, n),
		slideFocus: Se,
		slidesHandler: nO(t, o, b),
		slidesInView: be,
		slideIndexes: le,
		slideRegistry: xe,
		slidesToScroll: A,
		target: ge,
		translate: eO(ee, t)
	};
	return Ce;
}
function sO() {
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
var cO = {
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
function lO(e) {
	function t(e, t) {
		return kD(e, t || {});
	}
	function n(n) {
		let r = n.breakpoints || {};
		return t(n, OD(r).filter((t) => e.matchMedia(t).matches).map((e) => r[e]).reduce((e, n) => t(e, n), {}));
	}
	function r(t) {
		return t.map((e) => OD(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia);
	}
	return {
		mergeOptions: t,
		optionsAtMedia: n,
		optionsMediaQueries: r
	};
}
function uO(e) {
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
function dO(e, t, n) {
	let r = e.ownerDocument, i = r.defaultView, a = lO(i), o = uO(a), s = MD(), c = sO(), { mergeOptions: l, optionsAtMedia: u, optionsMediaQueries: d } = a, { on: f, off: p, emit: m } = c, h = E, g = !1, _, v = l(cO, dO.globalOptions), y = l(v), b = [], x, S, C;
	function w() {
		let { container: t, slides: n } = y;
		S = (hD(t) ? e.querySelector(t) : t) || e.children[0];
		let r = hD(n) ? S.querySelectorAll(n) : n;
		C = [].slice.call(r || S.children);
	}
	function T(t) {
		let n = oO(e, S, C, r, i, t, c);
		return t.loop && !n.slideLooper.canLoop() ? T(Object.assign({}, t, { loop: !1 })) : n;
	}
	function ee(e, t) {
		g || (v = l(v, e), y = u(v), b = t || b, w(), _ = T(y), d([v, ...b.map(({ options: e }) => e)]).forEach((e) => s.add(e, "change", E)), y.active && (_.translate.to(_.location.get()), _.animation.init(), _.slidesInView.init(), _.slideFocus.init(I), _.eventHandler.init(I), _.resizeHandler.init(I), _.slidesHandler.init(I), _.options.loop && _.slideLooper.loop(), S.offsetParent && C.length && _.dragHandler.init(I), x = o.init(I, b)));
	}
	function E(e, t) {
		let n = ae();
		D(), ee(l({ startIndex: n }, e), t), c.emit("reInit");
	}
	function D() {
		_.dragHandler.destroy(), _.eventStore.clear(), _.translate.clear(), _.slideLooper.clear(), _.resizeHandler.destroy(), _.slidesHandler.destroy(), _.slidesInView.destroy(), _.animation.destroy(), o.destroy(), s.clear();
	}
	function te() {
		g || (g = !0, s.clear(), D(), c.emit("destroy"), c.clear());
	}
	function O(e, t, n) {
		!y.active || g || (_.scrollBody.useBaseFriction().useDuration(t === !0 ? 0 : y.duration), _.scrollTo.index(e, n || 0));
	}
	function ne(e) {
		O(_.index.add(1).get(), e, -1);
	}
	function k(e) {
		O(_.index.add(-1).get(), e, 1);
	}
	function re() {
		return _.index.add(1).get() !== ae();
	}
	function ie() {
		return _.index.add(-1).get() !== ae();
	}
	function A() {
		return _.scrollSnapList;
	}
	function j() {
		return _.scrollProgress.get(_.offsetLocation.get());
	}
	function ae() {
		return _.index.get();
	}
	function oe() {
		return _.indexPrevious.get();
	}
	function M() {
		return _.slidesInView.get();
	}
	function N() {
		return _.slidesInView.get(!1);
	}
	function P() {
		return x;
	}
	function F() {
		return _;
	}
	function se() {
		return e;
	}
	function ce() {
		return S;
	}
	function le() {
		return C;
	}
	let I = {
		canScrollNext: re,
		canScrollPrev: ie,
		containerNode: ce,
		internalEngine: F,
		destroy: te,
		off: p,
		on: f,
		emit: m,
		plugins: P,
		previousScrollSnap: oe,
		reInit: h,
		rootNode: se,
		scrollNext: ne,
		scrollPrev: k,
		scrollProgress: j,
		scrollSnapList: A,
		scrollTo: O,
		selectedScrollSnap: ae,
		slideNodes: le,
		slidesInView: M,
		slidesNotInView: N
	};
	return ee(t, n), setTimeout(() => c.emit("init"), 0), I;
}
dO.globalOptions = void 0;
//#endregion
//#region node_modules/embla-carousel-vue/esm/embla-carousel-vue.esm.js
function fO(e = {}, t = []) {
	let n = j(e), r = j(t), i = n ? e.value : e, a = r ? t.value : t, o = xe(), s = xe();
	function c() {
		s.value && s.value.reInit(i, a);
	}
	return p(() => {
		!uD() || !o.value || (dO.globalOptions = fO.globalOptions, s.value = dO(o.value, i, a));
	}), le(() => {
		s.value && s.value.destroy();
	}), n && C(e, (e) => {
		dD(i, e) || (i = e, c());
	}), r && C(t, (e) => {
		pD(a, e) || (a = e, c());
	}), [o, s];
}
fO.globalOptions = void 0;
//#endregion
//#region src/components/ui/carousel/useCarousel.ts
var [pO, mO] = Lt(({ opts: e, orientation: t, plugins: n }, r) => {
	let [i, a] = fO({
		...e,
		axis: t === "horizontal" ? "x" : "y"
	}, n);
	function o() {
		a.value?.scrollPrev();
	}
	function s() {
		a.value?.scrollNext();
	}
	let c = O(!1), l = O(!1);
	function u(e) {
		c.value = e?.canScrollNext() || !1, l.value = e?.canScrollPrev() || !1;
	}
	return p(() => {
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
function hO() {
	let e = mO();
	if (!e) throw Error("useCarousel must be used within a <Carousel />");
	return e;
}
//#endregion
//#region src/components/ui/carousel/Carousel.vue
var gO = /* @__PURE__ */ U({
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
		let r = e, { canScrollNext: i, canScrollPrev: a, carouselApi: s, carouselRef: c, orientation: l, scrollNext: u, scrollPrev: d } = pO(r, n);
		t({
			canScrollNext: i,
			canScrollPrev: a,
			carouselApi: s,
			carouselRef: c,
			orientation: l,
			scrollNext: u,
			scrollPrev: d
		});
		function f(e) {
			let t = r.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", n = r.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
			if (e.key === t) {
				e.preventDefault(), d();
				return;
			}
			e.key === n && (e.preventDefault(), u());
		}
		return (e, t) => (o(), E("div", {
			"data-slot": "carousel",
			class: F(z($)("relative", r.class)),
			role: "region",
			"aria-roledescription": "carousel",
			tabindex: "0",
			onKeydown: f
		}, [v(e.$slots, "default", {
			canScrollNext: z(i),
			canScrollPrev: z(a),
			carouselApi: z(s),
			carouselRef: z(c),
			orientation: z(l),
			scrollNext: z(u),
			scrollPrev: z(d)
		})], 34));
	}
}), _O = /* @__PURE__ */ U({
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
		let t = e, { carouselRef: n, orientation: r } = hO();
		return (e, i) => (o(), E("div", {
			ref_key: "carouselRef",
			ref: n,
			"data-slot": "carousel-content",
			class: "overflow-hidden"
		}, [L("div", I({ class: z($)("flex", z(r) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class) }, e.$attrs), [v(e.$slots, "default")], 16)], 512));
	}
}), vO = /* @__PURE__ */ U({
	__name: "CarouselItem",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e, { orientation: n } = hO();
		return (e, r) => (o(), E("div", {
			"data-slot": "carousel-item",
			role: "group",
			"aria-roledescription": "slide",
			class: F(z($)("min-w-0 shrink-0 grow-0 basis-full", z(n) === "horizontal" ? "pl-4" : "pt-4", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), yO = /* @__PURE__ */ U({
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
		let t = e, { orientation: n, canScrollNext: r, scrollNext: i } = hO();
		return (a, s) => (o(), P(z(XS), {
			"data-slot": "carousel-next",
			disabled: !z(r),
			class: F(z($)("rounded-full absolute touch-manipulation", z(n) === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", t.class)),
			variant: e.variant,
			size: e.size,
			onClick: z(i)
		}, {
			default: u(() => [v(a.$slots, "default", {}, () => [W(z($n), { class: "cn-rtl-flip" }), s[0] ||= L("span", { class: "sr-only" }, "Next slide", -1)])]),
			_: 3
		}, 8, [
			"disabled",
			"class",
			"variant",
			"size",
			"onClick"
		]));
	}
}), bO = /* @__PURE__ */ U({
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
		let t = e, { orientation: n, canScrollPrev: r, scrollPrev: i } = hO();
		return (a, s) => (o(), P(z(XS), {
			"data-slot": "carousel-previous",
			disabled: !z(r),
			class: F(z($)("rounded-full absolute touch-manipulation", z(n) === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", t.class)),
			variant: e.variant,
			size: e.size,
			onClick: z(i)
		}, {
			default: u(() => [v(a.$slots, "default", {}, () => [W(z(Qn), { class: "cn-rtl-flip" }), s[0] ||= L("span", { class: "sr-only" }, "Previous slide", -1)])]),
			_: 3
		}, 8, [
			"disabled",
			"class",
			"variant",
			"size",
			"onClick"
		]));
	}
}), xO = ["innerHTML"], SO = /* @__PURE__ */ U({
	__name: "Carousel.ce",
	props: {
		orientation: { type: String },
		itemsPerView: { type: [Number, String] }
	},
	setup(e) {
		let t = e, n = {
			1: "basis-full",
			2: "basis-1/2",
			3: "basis-1/3",
			4: "basis-1/4",
			5: "basis-1/5",
			6: "basis-1/6"
		}[Math.max(1, Math.min(6, Number(t.itemsPerView ?? 1) || 1))] ?? "basis-full", r = ve()?._light, i = r?.sections ?? [], a = r?.options ?? [], s = i.length ? i.map((e) => e.html) : a.length ? a.map((e) => `<span>${e.label}</span>`) : r?.defaultHtml ? [r.defaultHtml] : [];
		return (e, r) => (o(), P(z(gO), {
			orientation: t.orientation ?? "horizontal",
			class: "relative w-full max-w-sm"
		}, {
			default: u(() => [
				W(z(_O), null, {
					default: u(() => [(o(!0), E(B, null, f(z(s), (e, t) => (o(), P(z(vO), {
						key: t,
						class: F(z(n))
					}, {
						default: u(() => [L("div", { innerHTML: e }, null, 8, xO)]),
						_: 2
					}, 1032, ["class"]))), 128))]),
					_: 1
				}),
				W(z(bO)),
				W(z(yO))
			]),
			_: 1
		}, 8, ["orientation"]));
	}
}), CO = ["data-size"], wO = ["data-size"], TO = /* @__PURE__ */ U({
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
		let n = e, r = Bn(n, "modelValue", t, {
			passive: !0,
			defaultValue: ""
		}), i = G(n, "class", "size");
		return (e, t) => (o(), E("div", {
			class: "group/native-select relative w-fit has-[select:disabled]:opacity-50",
			"data-slot": "native-select-wrapper",
			"data-size": n.size ?? "default"
		}, [T(L("select", I({
			...e.$attrs,
			...z(i)
		}, {
			"onUpdate:modelValue": t[0] ||= (e) => j(r) ? r.value = e : null,
			"data-slot": "native-select",
			"data-size": n.size ?? "default",
			class: z($)("border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-8 w-full min-w-0 appearance-none rounded-lg border bg-transparent py-1 pr-8 pl-2.5 text-sm transition-colors select-none focus-visible:ring-3 aria-invalid:ring-3 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-[size=sm]:py-0.5 outline-none disabled:pointer-events-none disabled:cursor-not-allowed", n.class)
		}), [v(e.$slots, "default")], 16, wO), [[se, z(r)]]), W(z(Zn), {
			class: "text-muted-foreground top-1/2 right-2.5 size-4 -translate-y-1/2 pointer-events-none absolute select-none",
			"aria-hidden": "true",
			"data-slot": "native-select-icon"
		})], 8, CO));
	}
}), EO = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("option", {
			"data-slot": "native-select-option",
			class: F(z($)("bg-[Canvas] text-[CanvasText]", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), DO = { class: "**:data-[slot=native-select-icon]:right-1" }, OO = { class: "relative" }, kO = { class: "absolute inset-0 flex h-full items-center text-sm pl-2 pointer-events-none" }, AO = { class: "**:data-[slot=native-select-icon]:right-1" }, jO = { class: "relative" }, MO = { class: "absolute inset-0 flex h-full items-center text-sm pl-2 pointer-events-none" }, NO = { class: "flex items-center gap-1 absolute top-0 inset-x-0 justify-between" }, PO = {
	key: 0,
	class: "flex items-center justify-center gap-1"
}, FO = {
	key: 1,
	class: "flex items-center justify-center gap-1"
}, IO = {
	key: 2,
	class: "flex items-center justify-center gap-1"
}, LO = { class: "flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, RO = /* @__PURE__ */ U({
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
		let n = e, r = t, i = G(n, "class", "layout", "placeholder"), a = Bn(n, "placeholder", r, {
			passive: !0,
			defaultValue: n.defaultPlaceholder ?? ii(ui())
		}), s = Qo(n.locale ?? "en"), c = R(() => n.yearRange ?? Xo({
			start: n?.minValue ?? (re(n.placeholder) ?? n.defaultPlaceholder ?? ii(ui())).cycle("year", -100),
			end: n?.maxValue ?? (re(n.placeholder) ?? n.defaultPlaceholder ?? ii(ui())).cycle("year", 10)
		})), [l, d] = _n(), [p, m] = _n(), h = Y(i, r);
		return (t, r) => (o(), E(B, null, [
			W(z(l), null, {
				default: u(({ date: e }) => [L("div", DO, [L("div", OO, [L("div", kO, H(z(s).custom(z(Po)(e), { month: "short" })), 1), W(z(TO), {
					class: "text-xs h-8 pr-6 pl-2 text-transparent relative",
					onChange: r[0] ||= (e) => {
						a.value = z(a).set({ month: Number(e?.target?.value) });
					}
				}, {
					default: u(() => [(o(!0), E(B, null, f(z(Jo)({ dateObj: e }), (t) => (o(), P(z(EO), {
						key: t.toString(),
						value: t.month,
						selected: e.month === t.month
					}, {
						default: u(() => [V(H(z(s).custom(z(Po)(t), { month: "short" })), 1)]),
						_: 2
					}, 1032, ["value", "selected"]))), 128))]),
					_: 2
				}, 1024)])])]),
				_: 1
			}),
			W(z(p), null, {
				default: u(({ date: e }) => [L("div", AO, [L("div", jO, [L("div", MO, H(z(s).custom(z(Po)(e), { year: "numeric" })), 1), W(z(TO), {
					class: "text-xs h-8 pr-6 pl-2 text-transparent relative",
					onChange: r[1] ||= (e) => {
						a.value = z(a).set({ year: Number(e?.target?.value) });
					}
				}, {
					default: u(() => [(o(!0), E(B, null, f(c.value, (t) => (o(), P(z(EO), {
						key: t.toString(),
						value: t.year,
						selected: e.year === t.year
					}, {
						default: u(() => [V(H(z(s).custom(z(Po)(t), { year: "numeric" })), 1)]),
						_: 2
					}, 1032, ["value", "selected"]))), 128))]),
					_: 2
				}, 1024)])])]),
				_: 1
			}),
			W(z(Sf), I(z(h), {
				placeholder: z(a),
				"onUpdate:placeholder": r[2] ||= (e) => j(a) ? a.value = e : null,
				"data-slot": "calendar",
				class: z($)("p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] group/calendar bg-background in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent", n.class)
			}), {
				default: u(({ grid: n, weekDays: r, date: i }) => [W(z(KO), { class: "pt-0" }, {
					default: u(() => [L("nav", NO, [W(z(YO), null, {
						default: u(() => [v(t.$slots, "calendar-prev-icon")]),
						_: 3
					}), W(z(JO), null, {
						default: u(() => [v(t.$slots, "calendar-next-icon")]),
						_: 3
					})]), v(t.$slots, "calendar-heading", {
						date: i,
						month: z(d),
						year: z(m)
					}, () => [e.layout === "month-and-year" ? (o(), E("div", PO, [W(z(d), { date: i }, null, 8, ["date"]), W(z(m), { date: i }, null, 8, ["date"])])) : e.layout === "month-only" ? (o(), E("div", FO, [W(z(d), { date: i }, null, 8, ["date"]), V(" " + H(z(s).custom(z(Po)(i), { year: "numeric" })), 1)])) : e.layout === "year-only" ? (o(), E("div", IO, [V(H(z(s).custom(z(Po)(i), { month: "short" })) + " ", 1), W(z(m), { date: i }, null, 8, ["date"])])) : (o(), P(z(qO), { key: 3 }))])]),
					_: 2
				}, 1024), L("div", LO, [(o(!0), E(B, null, f(n, (e) => (o(), P(z(VO), { key: e.value.toString() }, {
					default: u(() => [W(z(UO), null, {
						default: u(() => [W(z(WO), null, {
							default: u(() => [(o(!0), E(B, null, f(r, (e) => (o(), P(z(GO), { key: e }, {
								default: u(() => [V(H(e), 1)]),
								_: 2
							}, 1024))), 128))]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1024), W(z(HO), null, {
						default: u(() => [(o(!0), E(B, null, f(e.rows, (t, n) => (o(), P(z(WO), {
							key: `weekDate-${n}`,
							class: "mt-2 w-full"
						}, {
							default: u(() => [(o(!0), E(B, null, f(t, (t) => (o(), P(z(zO), {
								key: t.toString(),
								date: t
							}, {
								default: u(() => [W(z(BO), {
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
}), zO = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Cf), I({
			"data-slot": "calendar-cell",
			class: z($)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent", t.class)
		}, z(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), BO = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(wf), I({
			"data-slot": "calendar-cell-trigger",
			class: z($)(z(ZS)({ variant: "ghost" }), "size-8 p-0 font-normal aria-selected:opacity-100 cursor-default", "[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground", "data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground", "data-[disabled]:text-muted-foreground data-[disabled]:opacity-50", "data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through", "data-[outside-view]:text-muted-foreground", t.class)
		}, z(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), VO = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Tf), I({
			"data-slot": "calendar-grid",
			class: z($)("w-full border-collapse space-x-1", t.class)
		}, z(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), HO = /* @__PURE__ */ U({
	__name: "CalendarGridBody",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), P(z(Ef), I({ "data-slot": "calendar-grid-body" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), UO = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(Df), I({ "data-slot": "calendar-grid-head" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), WO = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Of), I({
			"data-slot": "calendar-grid-row",
			class: z($)("flex", t.class)
		}, z(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), GO = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(kf), I({
			"data-slot": "calendar-head-cell",
			class: z($)("text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem]", t.class)
		}, z(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), KO = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Af), I({
			"data-slot": "calendar-header",
			class: z($)("flex justify-center pt-1 relative items-center w-full px-8", t.class)
		}, z(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), qO = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(jf), I({
			"data-slot": "calendar-heading",
			class: z($)("text-sm font-medium", t.class)
		}, z(n)), {
			default: u(({ headingValue: t }) => [v(e.$slots, "default", { headingValue: t }, () => [V(H(t), 1)])]),
			_: 3
		}, 16, ["class"]));
	}
}), JO = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Mf), I({
			"data-slot": "calendar-next-button",
			class: z($)(z(ZS)({ variant: "outline" }), "size-7 bg-transparent p-0 opacity-50 hover:opacity-100", t.class)
		}, z(n)), {
			default: u(() => [v(e.$slots, "default", {}, () => [W(z($n), { class: "cn-rtl-flip size-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), YO = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class"));
		return (e, r) => (o(), P(z(Nf), I({
			"data-slot": "calendar-prev-button",
			class: z($)(z(ZS)({ variant: "outline" }), "size-7 bg-transparent p-0 opacity-50 hover:opacity-100", t.class)
		}, z(n)), {
			default: u(() => [v(e.$slots, "default", {}, () => [W(z(Qn), { class: "cn-rtl-flip size-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), XO = /* @__PURE__ */ U({
	__name: "Calendar.ce",
	props: {
		locale: { type: String },
		layout: { type: String }
	},
	setup(e) {
		let t = e, n = ve(), r = O(void 0);
		function i(e) {
			let t;
			if (e && typeof e == "object" && "year" in e) {
				let n = e;
				t = `${n.year}-${String(n.month).padStart(2, "0")}-${String(n.day).padStart(2, "0")}`;
			} else t = String(e ?? "");
			r.value = t, n?.dispatchEvent(new CustomEvent("change", {
				detail: t,
				bubbles: !0,
				composed: !0
			}));
		}
		return p(() => {}), (e, n) => (o(), P(z(RO), {
			locale: t.locale ?? "en",
			layout: t.layout,
			"onUpdate:modelValue": i
		}, null, 8, ["locale", "layout"]));
	}
}), ZO = /* @__PURE__ */ U({
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
		let n = e, i = t, a = Y(G(n, "class"), i);
		return (e, t) => (o(), P(z(ug), I({ "data-slot": "pagination" }, z(a), { class: z($)("mx-auto flex w-full justify-center", n.class) }), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), QO = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, i) => (o(), P(z(hg), I({ "data-slot": "pagination-content" }, z(n), { class: z($)("gap-0.5 flex items-center", t.class) }), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), $O = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class");
		return (e, r) => (o(), P(z(sg), I({ "data-slot": "pagination-ellipsis" }, z(n), { class: z($)("size-8 [&_svg:not([class*=size-])]:size-4 flex items-center justify-center", t.class) }), {
			default: u(() => [v(e.$slots, "default", {}, () => [W(z(rr)), r[0] ||= L("span", { class: "sr-only" }, "More pages", -1)])]),
			_: 3
		}, 16, ["class"]));
	}
}), ek = /* @__PURE__ */ U({
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
		let t = e, n = G(t, "class", "size", "isActive");
		return (r, i) => (o(), P(z(gg), I({ "data-slot": "pagination-item" }, z(n), { class: z($)(z(ZS)({
			variant: e.isActive ? "outline" : "ghost",
			size: e.size
		}), t.class) }), {
			default: u(() => [v(r.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), tk = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class", "size"));
		return (r, i) => (o(), P(z(_g), I({
			"data-slot": "pagination-next",
			class: z($)(z(ZS)({
				variant: "ghost",
				size: e.size
			}), "pr-1.5!", t.class)
		}, z(n)), {
			default: u(() => [v(r.$slots, "default", {}, () => [i[0] ||= L("span", { class: "hidden sm:block" }, "Next", -1), W(z($n), {
				"data-icon": "inline-end",
				class: "cn-rtl-flip"
			})])]),
			_: 3
		}, 16, ["class"]));
	}
}), nk = /* @__PURE__ */ U({
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
		let t = e, n = J(G(t, "class", "size"));
		return (r, i) => (o(), P(z(vg), I({
			"data-slot": "pagination-previous",
			class: z($)(z(ZS)({
				variant: "ghost",
				size: e.size
			}), "pl-1.5!", t.class)
		}, z(n)), {
			default: u(() => [v(r.$slots, "default", {}, () => [W(z(Qn), {
				"data-icon": "inline-start",
				class: "cn-rtl-flip"
			}), i[0] ||= L("span", { class: "hidden sm:block" }, "Previous", -1)])]),
			_: 3
		}, 16, ["class"]));
	}
}), rk = /* @__PURE__ */ U({
	__name: "Pagination.ce",
	props: {
		total: { type: Number },
		itemsPerPage: { type: Number },
		defaultPage: { type: Number }
	},
	setup(e) {
		let t = ve();
		function n(e) {
			t?.dispatchEvent(new CustomEvent("change", {
				detail: { page: e },
				bubbles: !0,
				composed: !0
			}));
		}
		return (t, r) => (o(), P(z(ZO), {
			total: e.total ?? 0,
			"items-per-page": e.itemsPerPage ?? 10,
			"default-page": e.defaultPage ?? 1,
			"sibling-count": 1,
			"show-edges": "",
			"onUpdate:page": n
		}, {
			default: u(({ page: e }) => [W(z(QO), null, {
				default: u(({ items: t }) => [
					W(z(nk)),
					(o(!0), E(B, null, f(t, (t, n) => (o(), E(B, { key: n }, [t.type === "page" ? (o(), P(z(ek), {
						key: 0,
						value: t.value,
						"is-active": t.value === e
					}, {
						default: u(() => [V(H(t.value), 1)]),
						_: 2
					}, 1032, ["value", "is-active"])) : (o(), P(z($O), {
						key: 1,
						index: n
					}, null, 8, ["index"]))], 64))), 128)),
					W(z(tk))
				]),
				_: 2
			}, 1024)]),
			_: 1
		}, 8, [
			"total",
			"items-per-page",
			"default-page"
		]));
	}
}), ik = {
	key: 0,
	class: "bg-border h-6 w-1 rounded-lg z-10 flex shrink-0"
}, ak = /* @__PURE__ */ U({
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
		let n = e, r = t, i = Y(G(n, "class", "withHandle"), r);
		return (e, t) => (o(), P(z(gy), I({ "data-slot": "resizable-handle" }, z(i), { class: z($)("relative flex w-px items-center justify-center bg-border ring-offset-background after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90", n.class) }), {
			default: u(() => [n.withHandle ? (o(), E("div", ik, [v(e.$slots, "default")])) : M("", !0)]),
			_: 3
		}, 16, ["class"]));
	}
}), ok = /* @__PURE__ */ U({
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
		let n = Y(e, t);
		return q(), (e, t) => (o(), P(z(my), I({ "data-slot": "resizable-panel" }, z(n)), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16));
	}
}), sk = /* @__PURE__ */ U({
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
		let n = e, i = t, a = Y(G(n, "class"), i);
		return (e, t) => (o(), P(z(py), I({ "data-slot": "resizable-panel-group" }, z(a), { class: z($)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", n.class) }), {
			default: u((t) => [v(e.$slots, "default", N(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), ck = ["innerHTML"], lk = /* @__PURE__ */ U({
	__name: "Resizable.ce",
	props: { direction: { type: String } },
	setup(e) {
		let t = e, n = ve(), r = n?._light.sections ?? [], i = r.length ? r : n?._light.defaultHtml ? [{
			html: n._light.defaultHtml,
			title: "",
			value: "0",
			disabled: !1
		}] : [];
		return (e, n) => (o(), P(z(sk), {
			direction: t.direction ?? "horizontal",
			class: "min-h-40 max-w-full rounded-lg border"
		}, {
			default: u(() => [(o(!0), E(B, null, f(z(i), (e, t) => (o(), E(B, { key: t }, [t > 0 ? (o(), P(z(ak), {
				key: 0,
				"with-handle": ""
			})) : M("", !0), W(z(ok), { "default-size": 100 / z(i).length }, {
				default: u(() => [L("div", {
					class: "flex h-full items-start justify-start p-2",
					innerHTML: e.html
				}, null, 8, ck)]),
				_: 2
			}, 1032, ["default-size"])], 64))), 128))]),
			_: 1
		}, 8, ["direction"]));
	}
}), uk = /* @__PURE__ */ U({
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
		let n = e, i = t, a = Y(G(n, "class", "size", "variant"), i);
		return (t, i) => (o(), P(z($y), I({ "data-slot": "toggle" }, z(a), { class: z($)(z(dk)({
			variant: e.variant,
			size: e.size
		}), n.class) }), {
			default: u((e) => [v(t.$slots, "default", N(r(e)))]),
			_: 3
		}, 16, ["class"]));
	}
}), dk = YS("hover:text-foreground aria-pressed:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[state=on]:bg-muted gap-1 rounded-lg text-sm font-medium transition-all [&_svg:not([class*=size-])]:size-4 group/toggle hover:bg-muted inline-flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
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
}), fk = ["innerHTML"], pk = ["innerHTML"], mk = /* @__PURE__ */ U({
	__name: "Toggle.ce",
	props: {
		defaultPressed: { type: Boolean },
		variant: { type: String },
		size: { type: String },
		disabled: { type: Boolean }
	},
	setup(e) {
		let t = e, n = ve(), r = n?._light, i = O(t.defaultPressed ?? !1);
		function a(e) {
			i.value = e, n?.dispatchEvent(new CustomEvent("change", {
				detail: { pressed: e },
				bubbles: !0,
				composed: !0
			}));
		}
		return p(() => {}), (e, n) => (o(), P(z(uk), {
			pressed: i.value,
			variant: t.variant ?? "default",
			size: t.size ?? "default",
			disabled: t.disabled ?? !1,
			"onUpdate:pressed": a
		}, {
			default: u(() => [z(r)?.slots?.default ? (o(), E("span", {
				key: 0,
				innerHTML: z(r).slots.default
			}, null, 8, fk)) : z(r)?.defaultHtml ? (o(), E("span", {
				key: 1,
				innerHTML: z(r).defaultHtml
			}, null, 8, pk)) : M("", !0)]),
			_: 1
		}, 8, [
			"pressed",
			"variant",
			"size",
			"disabled"
		]));
	}
}), hk = /* @__PURE__ */ U({
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
		let n = e, i = t;
		l("toggleGroup", {
			variant: n.variant,
			size: n.size,
			spacing: n.spacing
		});
		let a = Y(G(n, "class", "size", "variant"), i);
		return (t, i) => (o(), P(z(Qy), I({
			"data-slot": "toggle-group",
			"data-size": e.size,
			"data-variant": e.variant,
			"data-spacing": e.spacing,
			style: { "--gap": e.spacing }
		}, z(a), { class: z($)("rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] data-vertical:flex-col data-vertical:items-stretch", n.class) }), {
			default: u((e) => [v(t.$slots, "default", N(r(e)))]),
			_: 3
		}, 16, [
			"data-size",
			"data-variant",
			"data-spacing",
			"style",
			"class"
		]));
	}
}), gk = /* @__PURE__ */ U({
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
		let t = e, n = a("toggleGroup"), i = J(G(t, "class", "size", "variant"));
		return (a, s) => (o(), P(z(eb), I({
			"data-slot": "toggle-group-item",
			"data-variant": z(n)?.variant || e.variant,
			"data-size": z(n)?.size || e.size,
			"data-spacing": z(n)?.spacing
		}, z(i), { class: z($)("group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg shrink-0 focus:z-10 focus-visible:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t", z(dk)({
			variant: z(n)?.variant || e.variant,
			size: z(n)?.size || e.size
		}), t.class) }), {
			default: u((e) => [v(a.$slots, "default", N(r(e)))]),
			_: 3
		}, 16, [
			"data-variant",
			"data-size",
			"data-spacing",
			"class"
		]));
	}
}), _k = /* @__PURE__ */ U({
	__name: "ToggleGroup.ce",
	props: {
		type: { type: String },
		variant: { type: String },
		size: { type: String },
		value: { type: String }
	},
	setup(e) {
		let t = e, n = ve(), r = n?._light.options ?? [], i = O(t.value ?? ""), a = O(t.value ? t.value.split(",").map((e) => e.trim()) : []);
		function s(e) {
			let t = e == null ? "" : String(e);
			i.value = t, n?.dispatchEvent(new CustomEvent("change", {
				detail: { value: t },
				bubbles: !0,
				composed: !0
			}));
		}
		function c(e) {
			let t = Array.isArray(e) ? e.map(String) : [];
			a.value = t, n?.dispatchEvent(new CustomEvent("change", {
				detail: { value: t },
				bubbles: !0,
				composed: !0
			}));
		}
		return p(() => {}), (e, n) => (t.type ?? "single") === "single" ? (o(), P(z(hk), {
			key: 0,
			type: "single",
			"model-value": i.value,
			variant: t.variant,
			size: t.size,
			"onUpdate:modelValue": s
		}, {
			default: u(() => [(o(!0), E(B, null, f(z(r), (e) => (o(), P(z(gk), {
				key: e.value,
				value: e.value,
				disabled: e.disabled
			}, {
				default: u(() => [V(H(e.label), 1)]),
				_: 2
			}, 1032, ["value", "disabled"]))), 128))]),
			_: 1
		}, 8, [
			"model-value",
			"variant",
			"size"
		])) : (o(), P(z(hk), {
			key: 1,
			type: "multiple",
			"model-value": a.value,
			variant: t.variant,
			size: t.size,
			"onUpdate:modelValue": c
		}, {
			default: u(() => [(o(!0), E(B, null, f(z(r), (e) => (o(), P(z(gk), {
				key: e.value,
				value: e.value,
				disabled: e.disabled
			}, {
				default: u(() => [V(H(e.label), 1)]),
				_: 2
			}, 1032, ["value", "disabled"]))), 128))]),
			_: 1
		}, 8, [
			"model-value",
			"variant",
			"size"
		]));
	}
}), vk = /* @__PURE__ */ U({
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
		return (e, n) => (o(), P(z(Ct), I({
			class: z($)("toaster group", t.class),
			style: {
				"--normal-bg": "var(--popover)",
				"--normal-text": "var(--popover-foreground)",
				"--normal-border": "var(--border)",
				"--border-radius": "var(--radius)"
			},
			"toast-options": { classes: { toast: "rounded-2xl" } }
		}, t), {
			"success-icon": u(() => [W(z(tr), { class: "size-4" })]),
			"info-icon": u(() => [W(z(ir), { class: "size-4" })]),
			"warning-icon": u(() => [W(z(dr), { class: "size-4" })]),
			"error-icon": u(() => [W(z(sr), { class: "size-4" })]),
			"loading-icon": u(() => [L("div", null, [W(z(ar), { class: "size-4 animate-spin" })])]),
			"close-icon": u(() => [W(z(fr), { class: "size-4" })]),
			_: 1
		}, 16, ["class"]));
	}
}), yk = /* @__PURE__ */ U({
	__name: "Sonner.ce",
	props: {
		position: { type: String },
		richColors: { type: Boolean }
	},
	setup(e) {
		return (t, n) => (o(), P(z(vk), {
			position: e.position ?? "bottom-right",
			"rich-colors": e.richColors
		}, null, 8, ["position", "rich-colors"]));
	}
}), bk = "sidebar_state", xk = 3600 * 24 * 7, Sk = "16rem", Ck = "18rem", wk = "3rem", [Tk, Ek] = K("Sidebar"), Dk = { class: "flex h-full w-full flex-col" }, Ok = [
	"data-state",
	"data-collapsible",
	"data-variant",
	"data-side"
], kk = ["data-side"], Ak = {
	"data-sidebar": "sidebar",
	"data-slot": "sidebar-inner",
	class: "bg-sidebar group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 flex size-full flex-col"
}, jk = /* @__PURE__ */ U({
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
		let t = e, { isMobile: n, state: r, openMobile: i, setOpenMobile: a } = Tk();
		return (s, c) => e.collapsible === "none" ? (o(), E("div", I({
			key: 0,
			"data-slot": "sidebar",
			class: z($)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
		}, s.$attrs), [v(s.$slots, "default")], 16)) : z(n) ? (o(), P(z(yT), I({
			key: 1,
			open: z(i)
		}, s.$attrs, { "onUpdate:open": z(a) }), {
			default: u(() => [W(z(xT), {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar",
				"data-mobile": "true",
				side: e.side,
				class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
				style: D({ "--sidebar-width": z(Ck) })
			}, {
				default: u(() => [W(wT, { class: "sr-only" }, {
					default: u(() => [W(TT, null, {
						default: u(() => [...c[0] ||= [V("Sidebar", -1)]]),
						_: 1
					}), W(ST, null, {
						default: u(() => [...c[1] ||= [V("Displays the mobile sidebar.", -1)]]),
						_: 1
					})]),
					_: 1
				}), L("div", Dk, [v(s.$slots, "default")])]),
				_: 3
			}, 8, ["side", "style"])]),
			_: 3
		}, 16, ["open", "onUpdate:open"])) : (o(), E("div", {
			key: 2,
			class: "group peer text-sidebar-foreground hidden md:block",
			"data-slot": "sidebar",
			"data-state": z(r),
			"data-collapsible": z(r) === "collapsed" ? e.collapsible : "",
			"data-variant": e.variant,
			"data-side": e.side
		}, [L("div", {
			"data-slot": "sidebar-gap",
			class: F(z($)("transition-[width] duration-200 ease-linear relative w-(--sidebar-width) bg-transparent", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"))
		}, null, 2), L("div", I({
			"data-slot": "sidebar-container",
			"data-side": e.side,
			class: z($)("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", t.class)
		}, s.$attrs), [L("div", Ak, [v(s.$slots, "default")])], 16, kk)], 8, Ok));
	}
}), Mk = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "sidebar-content",
			"data-sidebar": "content",
			class: F(z($)("no-scrollbar gap-0 flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), Nk = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "sidebar-footer",
			"data-sidebar": "footer",
			class: F(z($)("gap-2 p-2 flex flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), Pk = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "sidebar-group",
			"data-sidebar": "group",
			class: F(z($)("p-2 relative flex w-full min-w-0 flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), Fk = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "sidebar-group-content",
			"data-sidebar": "group-content",
			class: F(z($)("text-sm w-full", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), Ik = /* @__PURE__ */ U({
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
		return (n, r) => (o(), P(z(X), {
			"data-slot": "sidebar-group-label",
			"data-sidebar": "group-label",
			as: e.as,
			"as-child": e.asChild,
			class: F(z($)("text-sidebar-foreground/70 ring-sidebar-ring h-8 rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 flex shrink-0 items-center outline-hidden [&>svg]:shrink-0", t.class))
		}, {
			default: u(() => [v(n.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class"
		]));
	}
}), Lk = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("div", {
			"data-slot": "sidebar-header",
			"data-sidebar": "header",
			class: F(z($)("gap-2 p-2 flex flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), Rk = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("main", {
			"data-slot": "sidebar-inset",
			class: F(z($)("bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 relative flex w-full flex-1 flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), zk = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("ul", {
			"data-slot": "sidebar-menu",
			"data-sidebar": "menu",
			class: F(z($)("gap-0 flex w-full min-w-0 flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), Bk = /* @__PURE__ */ U({
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
		return (n, r) => (o(), P(z(X), I({
			"data-slot": "sidebar-menu-button",
			"data-sidebar": "menu-button",
			"data-size": e.size,
			"data-active": e.isActive,
			class: z($)(z(Gk)({
				variant: e.variant,
				size: e.size
			}), t.class),
			as: e.as,
			"as-child": e.asChild
		}, n.$attrs), {
			default: u(() => [v(n.$slots, "default")]),
			_: 3
		}, 16, [
			"data-size",
			"data-active",
			"class",
			"as",
			"as-child"
		]));
	}
}), Vk = /* @__PURE__ */ U({
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
		let t = e, { isMobile: n, state: i } = Tk(), a = G(t, "tooltip");
		return (t, s) => e.tooltip ? (o(), P(z(zT), { key: 1 }, {
			default: u(() => [W(z(HT), { "as-child": "" }, {
				default: u(() => [W(Bk, N(r({
					...z(a),
					...t.$attrs
				})), {
					default: u(() => [v(t.$slots, "default")]),
					_: 3
				}, 16)]),
				_: 3
			}), W(z(BT), {
				side: "right",
				align: "center",
				hidden: z(i) !== "collapsed" || z(n)
			}, {
				default: u(() => [typeof e.tooltip == "string" ? (o(), E(B, { key: 0 }, [V(H(e.tooltip), 1)], 64)) : (o(), P(De(e.tooltip), { key: 1 }))]),
				_: 1
			}, 8, ["hidden"])]),
			_: 3
		})) : (o(), P(Bk, N(I({ key: 0 }, {
			...z(a),
			...t.$attrs
		})), {
			default: u(() => [v(t.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Hk = /* @__PURE__ */ U({
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
		return (e, n) => (o(), E("li", {
			"data-slot": "sidebar-menu-item",
			"data-sidebar": "menu-item",
			class: F(z($)("group/menu-item relative", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), Uk = /* @__PURE__ */ U({
	__name: "SidebarProvider",
	props: {
		defaultOpen: {
			type: Boolean,
			default: !bn?.cookie.includes(`${bk}=false`)
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
		let n = e, r = t, i = Mn("(max-width: 768px)"), a = O(!1), s = Bn(n, "open", r, {
			defaultValue: n.defaultOpen ?? !1,
			passive: n.open === void 0
		});
		function c(e) {
			s.value = e, document.cookie = `${bk}=${s.value}; path=/; max-age=${xk}`;
		}
		function l(e) {
			a.value = e;
		}
		function d() {
			return i.value ? l(!a.value) : c(!s.value);
		}
		return Sn("keydown", (e) => {
			e.key === "b" && (e.metaKey || e.ctrlKey) && (e.preventDefault(), d());
		}), Ek({
			state: R(() => s.value ? "expanded" : "collapsed"),
			open: s,
			setOpen: c,
			isMobile: i,
			openMobile: a,
			setOpenMobile: l,
			toggleSidebar: d
		}), (e, t) => (o(), P(z(ib), { "delay-duration": 0 }, {
			default: u(() => [L("div", I({
				"data-slot": "sidebar-wrapper",
				style: {
					"--sidebar-width": z(Sk),
					"--sidebar-width-icon": z(wk)
				},
				class: z($)("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", n.class)
			}, e.$attrs), [v(e.$slots, "default")], 16)]),
			_: 3
		}));
	}
}), Wk = /* @__PURE__ */ U({
	__name: "SidebarTrigger",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e, { toggleSidebar: n } = Tk();
		return (e, r) => (o(), P(z(XS), {
			"data-sidebar": "trigger",
			"data-slot": "sidebar-trigger",
			variant: "ghost",
			size: "icon-sm",
			class: F(z($)("", t.class)),
			onClick: z(n)
		}, {
			default: u(() => [W(z(cr), { class: "cn-rtl-flip" }), r[0] ||= L("span", { class: "sr-only" }, "Toggle Sidebar", -1)]),
			_: 1
		}, 8, ["class", "onClick"]));
	}
}), Gk = YS("ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground gap-2 rounded-md p-2 text-left text-sm transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 data-active:font-medium peer/menu-button group/menu-button flex w-full items-center overflow-hidden outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate", {
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
}), Kk = {
	key: 0,
	class: "go-sb-nav"
}, qk = ["innerHTML"], Jk = {
	key: 0,
	class: "go-sb-lbl"
}, Yk = [
	"href",
	"aria-current",
	"data-disabled",
	"onClick"
], Xk = ["innerHTML"], Zk = { class: "flex h-12 items-center gap-2 border-b px-4" }, Qk = ["innerHTML"], $k = /* @__PURE__ */ U({
	inheritAttrs: !1,
	__name: "Sidebar.ce",
	props: {
		side: { type: String },
		variant: { type: String },
		collapsible: { type: String },
		mode: { type: String },
		active: { type: String }
	},
	setup(e) {
		let t = e, n = ve(), r = n?._light, i = r?.slots ?? {}, a = (r?.sections ?? []).map((e) => {
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
		function s(e) {
			n?.dispatchEvent(new CustomEvent("navigate", { detail: { value: e } }));
		}
		return (e, n) => t.mode === "nav" ? (o(), E("nav", Kk, [
			z(i).header ? (o(), E("div", {
				key: 0,
				class: "go-sb-hd",
				innerHTML: z(i).header
			}, null, 8, qk)) : M("", !0),
			(o(!0), E(B, null, f(z(a), (e, n) => (o(), E("div", {
				key: n,
				class: "go-sb-grp"
			}, [e.title ? (o(), E("div", Jk, H(e.title), 1)) : M("", !0), (o(!0), E(B, null, f(e.items, (e, n) => (o(), E("a", {
				key: n,
				href: e.disabled ? void 0 : e.value,
				class: "go-sb-item",
				"aria-current": e.value === t.active ? "page" : void 0,
				"data-disabled": e.disabled ? "" : void 0,
				onClick: (t) => !e.disabled && s(e.value)
			}, H(e.label), 9, Yk))), 128))]))), 128)),
			z(i).footer ? (o(), E("div", {
				key: 1,
				class: "go-sb-ft",
				innerHTML: z(i).footer
			}, null, 8, Xk)) : M("", !0)
		])) : (o(), P(z(Uk), { key: 1 }, {
			default: u(() => [W(z(jk), {
				side: t.side ?? "left",
				variant: t.variant ?? "sidebar",
				collapsible: t.collapsible ?? "offcanvas"
			}, {
				default: u(() => [
					z(i).header ? (o(), P(z(Lk), {
						key: 0,
						innerHTML: z(i).header
					}, null, 8, ["innerHTML"])) : M("", !0),
					W(z(Mk), null, {
						default: u(() => [(o(!0), E(B, null, f(z(a), (e, t) => (o(), P(z(Pk), { key: t }, {
							default: u(() => [e.title ? (o(), P(z(Ik), { key: 0 }, {
								default: u(() => [V(H(e.title), 1)]),
								_: 2
							}, 1024)) : M("", !0), W(z(Fk), null, {
								default: u(() => [W(z(zk), null, {
									default: u(() => [(o(!0), E(B, null, f(e.items, (e, t) => (o(), P(z(Hk), { key: t }, {
										default: u(() => [W(z(Vk), {
											disabled: e.disabled,
											onClick: (t) => s(e.value)
										}, {
											default: u(() => [L("span", null, H(e.label), 1)]),
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
					z(i).footer ? (o(), P(z(Nk), {
						key: 1,
						innerHTML: z(i).footer
					}, null, 8, ["innerHTML"])) : M("", !0)
				]),
				_: 1
			}, 8, [
				"side",
				"variant",
				"collapsible"
			]), W(z(Rk), null, {
				default: u(() => [L("header", Zk, [W(z(Wk))]), L("div", {
					class: "p-4",
					innerHTML: z(i).content || z(r)?.defaultHtml || ""
				}, null, 8, Qk)]),
				_: 1
			})]),
			_: 1
		}));
	}
}), eA = {
	class: "go-chart-root",
	style: {
		display: "block",
		width: "100%"
	}
}, tA = ne({
	loader: () => import("./go-ui-ChartUnovis-D8vg7mAG.js"),
	loadingComponent: () => Te("div", {
		class: "go-chart-skel",
		style: "width:100%;height:100%;min-height:200px;border-radius:8px;background:var(--muted,#f4f4f5);animation:go-chart-pulse 1.4s ease-in-out infinite"
	}),
	delay: 120
}), nA = /* @__PURE__ */ U({
	__name: "Chart.ce",
	props: {
		type: { type: String },
		data: { type: String },
		title: { type: String },
		description: { type: String }
	},
	setup(e) {
		return (t, n) => (o(), E(B, null, [L("div", eA, [W(z(tA), {
			type: e.type || "area",
			raw: e.data,
			"chart-title": e.title,
			"chart-description": e.description
		}, null, 8, [
			"type",
			"raw",
			"chart-title",
			"chart-description"
		])]), (o(), P(De("style"), null, {
			default: u(() => [...n[0] ||= [V("@keyframes go-chart-pulse{0%,100%{opacity:1}50%{opacity:.55}}", -1)]]),
			_: 1
		}))], 64));
	}
}), rA = {
	class: "go-dt-root",
	style: {
		display: "block",
		width: "100%"
	}
}, iA = ne({
	loader: () => import("./go-ui-DataTableImpl-Dc2fT4uW.js"),
	loadingComponent: () => Te("div", { style: "width:100%;height:240px;border-radius:8px;background:var(--muted,#f4f4f5);animation:go-dt-pulse 1.4s ease-in-out infinite" }),
	delay: 120
}), aA = /* @__PURE__ */ U({
	__name: "DataTable.ce",
	props: { data: { type: String } },
	setup(e) {
		return (t, n) => (o(), E(B, null, [L("div", rA, [W(z(iA), { raw: e.data }, null, 8, ["raw"])]), (o(), P(De("style"), null, {
			default: u(() => [...n[0] ||= [V("@keyframes go-dt-pulse{0%,100%{opacity:1}50%{opacity:.55}}", -1)]]),
			_: 1
		}))], 64));
	}
}), oA = ["data-invalid"], sA = ["for"], cA = { class: "go-ff-control" }, lA = {
	key: 1,
	class: "go-ff-error"
}, uA = {
	key: 2,
	class: "go-ff-desc"
}, dA = /* @__PURE__ */ U({
	__name: "FormField.ce",
	props: {
		fieldLabel: { type: String },
		fieldDescription: { type: String },
		fieldError: { type: String },
		fieldFor: { type: String }
	},
	setup(e) {
		return (t, n) => (o(), E("div", {
			class: "go-ff",
			"data-invalid": !!e.fieldError
		}, [
			e.fieldLabel ? (o(), E("label", {
				key: 0,
				class: "go-ff-label",
				for: e.fieldFor
			}, H(e.fieldLabel), 9, sA)) : M("", !0),
			L("div", cA, [v(t.$slots, "default")]),
			e.fieldError ? (o(), E("p", lA, H(e.fieldError), 1)) : e.fieldDescription ? (o(), E("p", uA, H(e.fieldDescription), 1)) : M("", !0)
		], 8, oA));
	}
}), fA = /* @__PURE__ */ U({
	__name: "Spinner.ce",
	props: { size: { type: String } },
	setup(e) {
		let t = e, n = {
			xs: "size-3",
			sm: "size-4",
			md: "size-6",
			lg: "size-8",
			xl: "size-10"
		}, r = R(() => t.size ? n[t.size] ?? "size-4" : "size-4");
		return (e, t) => (o(), E("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			role: "status",
			"aria-label": "A carregar",
			"data-slot": "spinner",
			class: F(z($)(r.value, "animate-spin"))
		}, [...t[0] ||= [L("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }, null, -1)]], 2));
	}
}), pA = ["data-content"], mA = {
	key: 0,
	class: "bg-background text-muted-foreground relative mx-auto block w-fit px-2",
	"data-slot": "field-separator-content"
}, hA = {
	key: 1,
	"data-slot": "field-group",
	class: "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4"
}, gA = {
	key: 2,
	"data-slot": "field-set",
	class: "flex flex-col gap-6 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3"
}, _A = ["data-variant"], vA = { key: 0 }, yA = ["innerHTML"], bA = {
	key: 1,
	"data-slot": "field-description",
	class: "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5 [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4"
}, xA = { key: 0 }, SA = ["innerHTML"], CA = ["data-orientation", "data-invalid"], wA = ["for"], TA = { key: 0 }, EA = ["innerHTML"], DA = {
	key: 1,
	"data-slot": "field-content",
	class: "group/field-content flex flex-1 flex-col gap-1.5 leading-snug"
}, OA = {
	key: 2,
	"data-slot": "field-label",
	class: "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50"
}, kA = { key: 0 }, AA = ["innerHTML"], jA = {
	key: 3,
	"data-slot": "field-description",
	class: "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5 [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4"
}, MA = { key: 0 }, NA = ["innerHTML"], PA = {
	key: 4,
	role: "alert",
	"data-slot": "field-error",
	class: "text-destructive text-sm font-normal"
}, FA = { key: 0 }, IA = ["innerHTML"], LA = /* @__PURE__ */ U({
	__name: "Field.ce",
	props: {
		as: { type: String },
		orientation: { type: String },
		label: { type: String },
		for: { type: String },
		description: { type: String },
		error: { type: String },
		legend: { type: String },
		legendVariant: { type: String },
		title: { type: String },
		invalid: { type: Boolean }
	},
	setup(e) {
		let t = e, n = x(), r = ve()?._light?.slots ?? {}, i = R(() => t.as ?? "field"), a = R(() => t.orientation ?? "vertical"), s = R(() => !!t.legend || !!r.legend), c = R(() => !!t.description || !!r.description), l = R(() => !!t.error || !!r.error), u = R(() => !!t.title || !!r.title), d = R(() => !!t.label || !!r.label), f = R(() => !!n.content), p = R(() => $("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
			vertical: "flex-col [&>*]:w-full [&>.sr-only]:w-auto",
			horizontal: "flex-row items-center [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
			responsive: "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
		}[a.value]));
		return (m, h) => i.value === "separator" ? (o(), E("div", {
			key: 0,
			"data-slot": "field-separator",
			"data-content": !!(z(n).default || m.$slots.default),
			class: "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2"
		}, [h[0] ||= L("div", {
			"data-slot": "separator",
			role: "separator",
			class: "bg-border shrink-0 h-px w-full absolute inset-0 top-1/2"
		}, null, -1), z(n).default ? (o(), E("span", mA, [v(m.$slots, "default")])) : M("", !0)], 8, pA)) : i.value === "group" ? (o(), E("div", hA, [v(m.$slots, "default")])) : i.value === "set" ? (o(), E("fieldset", gA, [
			s.value ? (o(), E("legend", {
				key: 0,
				"data-slot": "field-legend",
				"data-variant": e.legendVariant ?? "legend",
				class: "mb-3 font-medium data-[variant=legend]:text-base data-[variant=label]:text-sm"
			}, [e.legend ? (o(), E("span", vA, H(e.legend), 1)) : (o(), E("span", {
				key: 1,
				innerHTML: z(r).legend
			}, null, 8, yA))], 8, _A)) : M("", !0),
			c.value ? (o(), E("p", bA, [e.description ? (o(), E("span", xA, H(e.description), 1)) : (o(), E("span", {
				key: 1,
				innerHTML: z(r).description
			}, null, 8, SA))])) : M("", !0),
			v(m.$slots, "default")
		])) : (o(), E("div", {
			key: 3,
			role: "group",
			"data-slot": "field",
			"data-orientation": a.value,
			"data-invalid": e.invalid ? !0 : void 0,
			class: F(p.value)
		}, [
			d.value ? (o(), E("label", {
				key: 0,
				"data-slot": "field-label",
				for: t.for,
				class: "group/field-label peer/field-label flex w-fit gap-2 leading-snug items-center text-sm font-medium select-none group-data-[disabled=true]/field:opacity-50"
			}, [e.label ? (o(), E("span", TA, H(e.label), 1)) : (o(), E("span", {
				key: 1,
				innerHTML: z(r).label
			}, null, 8, EA))], 8, wA)) : M("", !0),
			f.value ? (o(), E("div", DA, [v(m.$slots, "content")])) : M("", !0),
			u.value ? (o(), E("div", OA, [e.title ? (o(), E("span", kA, H(e.title), 1)) : (o(), E("span", {
				key: 1,
				innerHTML: z(r).title
			}, null, 8, AA))])) : M("", !0),
			v(m.$slots, "default"),
			c.value ? (o(), E("p", jA, [e.description ? (o(), E("span", MA, H(e.description), 1)) : (o(), E("span", {
				key: 1,
				innerHTML: z(r).description
			}, null, 8, NA))])) : M("", !0),
			l.value ? (o(), E("div", PA, [e.error ? (o(), E("span", FA, H(e.error), 1)) : (o(), E("span", {
				key: 1,
				innerHTML: z(r).error
			}, null, 8, IA))])) : M("", !0)
		], 10, CA));
	}
}), RA = ["data-slot", "innerHTML"], zA = "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none [&_svg:not([class*='size-'])]:size-3 [[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10", BA = "inline-flex items-center gap-1", VA = /* @__PURE__ */ U({
	__name: "Kbd.ce",
	props: { group: { type: Boolean } },
	setup(e) {
		let t = e, n = (ve()?._light.defaultHtml ?? "").trim(), r = R(() => t.group ? BA : zA), i = R(() => t.group ? "kbd-group" : "kbd");
		return (e, t) => (o(), E("kbd", {
			"data-slot": i.value,
			class: F(r.value),
			innerHTML: z(n)
		}, null, 10, RA));
	}
}), HA = ["data-orientation"], UA = "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2", WA = /* @__PURE__ */ U({
	__name: "ButtonGroup.ce",
	props: { orientation: { type: String } },
	setup(e) {
		let t = e, n = R(() => t.orientation ?? "horizontal"), r = {
			horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child)>button]:rounded-l-none [&>*:not(:first-child)>button]:border-l-0 [&>*:not(:last-child)>button]:rounded-r-none",
			vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child)>button]:rounded-t-none [&>*:not(:first-child)>button]:border-t-0 [&>*:not(:last-child)>button]:rounded-b-none"
		}, i = R(() => $(UA, r[n.value]));
		return (e, t) => (o(), E("div", {
			role: "group",
			"data-slot": "button-group",
			"data-orientation": n.value,
			class: F(i.value)
		}, [v(e.$slots, "default")], 10, HA));
	}
}), GA = {
	"data-slot": "empty",
	class: "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12"
}, KA = {
	key: 0,
	"data-slot": "empty-header",
	class: "flex max-w-sm flex-col items-center gap-2 text-center"
}, qA = ["data-variant", "innerHTML"], JA = {
	key: 1,
	"data-slot": "empty-title",
	class: "text-lg font-medium tracking-tight"
}, YA = {
	key: 2,
	"data-slot": "empty-description",
	class: "text-muted-foreground text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary"
}, XA = {
	key: 1,
	"data-slot": "empty-content",
	class: "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance"
}, ZA = /* @__PURE__ */ U({
	__name: "Empty.ce",
	props: {
		emptyTitle: { type: String },
		emptyDescription: { type: String },
		mediaVariant: { type: String }
	},
	setup(e) {
		let t = e, n = ve()?._light, r = n?.slots ?? {}, i = R(() => !!n?.defaultHtml?.trim()), a = R(() => !!r.media), s = R(() => a.value || !!t.emptyTitle || !!t.emptyDescription), c = R(() => $("mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0", (t.mediaVariant ?? "default") === "icon" ? "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6" : "bg-transparent"));
		return (t, n) => (o(), E("div", GA, [s.value ? (o(), E("div", KA, [
			a.value ? (o(), E("div", {
				key: 0,
				"data-slot": "empty-icon",
				"data-variant": e.mediaVariant ?? "default",
				class: F(c.value),
				innerHTML: z(r).media
			}, null, 10, qA)) : M("", !0),
			e.emptyTitle ? (o(), E("div", JA, H(e.emptyTitle), 1)) : M("", !0),
			e.emptyDescription ? (o(), E("p", YA, H(e.emptyDescription), 1)) : M("", !0)
		])) : M("", !0), i.value ? (o(), E("div", XA, [v(t.$slots, "default")])) : M("", !0)]));
	}
}), QA = ["data-variant", "data-size"], $A = ["innerHTML"], ej = ["innerHTML"], tj = {
	key: 2,
	"data-slot": "item-content",
	class: "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none"
}, nj = {
	key: 0,
	"data-slot": "item-title",
	class: "flex w-fit items-center gap-2 text-sm leading-snug font-medium"
}, rj = ["innerHTML"], ij = {
	key: 1,
	"data-slot": "item-description",
	class: "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4"
}, aj = ["innerHTML"], oj = ["innerHTML"], sj = ["innerHTML"], cj = ["innerHTML"], lj = "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", uj = "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5", dj = /* @__PURE__ */ U({
	__name: "Item.ce",
	props: {
		variant: { type: String },
		size: { type: String },
		itemTitle: { type: String },
		itemDescription: { type: String }
	},
	setup(e) {
		let t = e, n = ve()?._light, r = n?.slots ?? {}, i = !!r.media, a = !!r.actions, s = !!r.header, c = !!r.footer, l = !!r.title || !!t.itemTitle, u = !!r.description || !!t.itemDescription, d = (n?.defaultHtml ?? "").trim(), f = l || u || !!d, p = {
			default: "bg-transparent",
			outline: "border-border",
			muted: "bg-muted/50"
		}, m = {
			default: "p-4 gap-4",
			sm: "py-3 px-4 gap-2.5"
		}, h = R(() => $(lj, p[t.variant ?? "default"] ?? p.default, m[t.size ?? "default"] ?? m.default));
		return (e, n) => (o(), E("div", {
			"data-slot": "item",
			"data-variant": t.variant ?? "default",
			"data-size": t.size ?? "default",
			class: F(h.value)
		}, [
			s ? (o(), E("div", {
				key: 0,
				"data-slot": "item-header",
				class: "flex basis-full items-center justify-between gap-2",
				innerHTML: z(r).header
			}, null, 8, $A)) : M("", !0),
			i ? (o(), E("div", {
				key: 1,
				"data-slot": "item-media",
				"data-variant": "default",
				class: F(uj),
				innerHTML: z(r).media
			}, null, 8, ej)) : M("", !0),
			z(f) ? (o(), E("div", tj, [
				z(l) ? (o(), E("div", nj, [z(r).title ? (o(), E("span", {
					key: 0,
					innerHTML: z(r).title
				}, null, 8, rj)) : (o(), E(B, { key: 1 }, [V(H(t.itemTitle), 1)], 64))])) : M("", !0),
				z(u) ? (o(), E("p", ij, [z(r).description ? (o(), E("span", {
					key: 0,
					innerHTML: z(r).description
				}, null, 8, aj)) : (o(), E(B, { key: 1 }, [V(H(t.itemDescription), 1)], 64))])) : M("", !0),
				!z(l) && !z(u) && z(d) ? (o(), E("div", {
					key: 2,
					innerHTML: z(d)
				}, null, 8, oj)) : M("", !0)
			])) : M("", !0),
			a ? (o(), E("div", {
				key: 3,
				"data-slot": "item-actions",
				class: "flex items-center gap-2",
				innerHTML: z(r).actions
			}, null, 8, sj)) : M("", !0),
			c ? (o(), E("div", {
				key: 4,
				"data-slot": "item-footer",
				class: "flex basis-full items-center justify-between gap-2",
				innerHTML: z(r).footer
			}, null, 8, cj)) : M("", !0)
		], 10, QA));
	}
}), fj = {
	class: "group/native-select relative w-fit has-[select:disabled]:opacity-50",
	"data-slot": "native-select-wrapper"
}, pj = ["disabled", "required"], mj = ["label", "disabled"], hj = ["value", "disabled"], gj = ["value", "disabled"], _j = /* @__PURE__ */ U({
	__name: "NativeSelect.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		value: { type: String }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = ve();
		function a(e) {
			return {
				value: e.getAttribute("value") ?? e.textContent?.trim() ?? "",
				label: e.textContent?.trim() ?? "",
				disabled: e.hasAttribute("disabled")
			};
		}
		function s() {
			let e = i?._light?.html ?? "", t = document.createElement("template");
			t.innerHTML = e;
			let n = [];
			return t.content.childNodes.forEach((e) => {
				if (e.nodeType !== window.Node.ELEMENT_NODE) return;
				let t = e;
				t.tagName === "OPTGROUP" ? n.push({
					kind: "group",
					label: t.getAttribute("label") ?? "",
					disabled: t.hasAttribute("disabled"),
					options: [...t.querySelectorAll(":scope > option")].map(a)
				}) : t.tagName === "OPTION" && n.push({
					kind: "option",
					opt: a(t)
				});
			}), n;
		}
		let c = O(s());
		function l() {
			for (let e of c.value) {
				if (e.kind === "option" && !e.opt.disabled) return e.opt.value;
				if (e.kind === "group") {
					for (let t of e.options) if (!t.disabled) return t.value;
				}
			}
			return "";
		}
		let u = O(n.value ?? l()), d = O(!1);
		function m(e) {
			let t = i?._internals;
			if (!t) return;
			t.setFormValue(e || null);
			let r = i?.querySelector("select") ?? void 0;
			n.required && !e ? t.setValidity({ valueMissing: !0 }, "Selecione uma opção.", r) : t.setValidity({});
		}
		function h(e) {
			let t = e.target.value;
			u.value = t, m(t), r("change", t);
		}
		return p(() => {
			i && (i._reset = () => {
				u.value = n.value ?? l(), m(u.value);
			}, i._disabledChange = (e) => {
				d.value = e;
			}), m(u.value);
		}), (t, n) => (o(), E("div", fj, [T(L("select", {
			"onUpdate:modelValue": n[0] ||= (e) => u.value = e,
			disabled: e.disabled || d.value,
			required: e.required,
			"data-slot": "native-select",
			class: "border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-8 w-full min-w-0 appearance-none rounded-lg border bg-transparent py-1 pr-8 pl-2.5 text-sm transition-colors select-none focus-visible:ring-3 aria-invalid:ring-3 outline-none disabled:pointer-events-none disabled:cursor-not-allowed",
			onChange: h
		}, [(o(!0), E(B, null, f(c.value, (e, t) => (o(), E(B, { key: t }, [e.kind === "group" ? (o(), E("optgroup", {
			key: 0,
			label: e.label,
			disabled: e.disabled,
			"data-slot": "native-select-optgroup",
			class: "bg-[Canvas] text-[CanvasText]"
		}, [(o(!0), E(B, null, f(e.options, (e, t) => (o(), E("option", {
			key: t,
			value: e.value,
			disabled: e.disabled,
			"data-slot": "native-select-option",
			class: "bg-[Canvas] text-[CanvasText]"
		}, H(e.label), 9, hj))), 128))], 8, mj)) : (o(), E("option", {
			key: 1,
			value: e.opt.value,
			disabled: e.opt.disabled,
			"data-slot": "native-select-option",
			class: "bg-[Canvas] text-[CanvasText]"
		}, H(e.opt.label), 9, gj))], 64))), 128))], 40, pj), [[se, u.value]]), W(z(Zn), {
			class: "text-muted-foreground top-1/2 right-2.5 size-4 -translate-y-1/2 pointer-events-none absolute select-none",
			"aria-hidden": "true",
			"data-slot": "native-select-icon"
		})]));
	}
});
Dt(Wx, "go-checkbox"), Dt(qx, "go-switch"), Dt(Yx, "go-input"), Dt(Zx, "go-textarea"), Dt(eS, "go-slider"), Dt(iS, "go-radio-group"), Dt(pS, "go-select"), Dt(yS, "go-number-field"), Dt(wS, "go-pin-input"), Dt(AS, "go-tags-input"), Dt(_j, "go-native-select"), Ot(zS, "go-card"), Ot(GS, "go-accordion"), Ot(oC, "go-dialog"), Ot(dC, "go-alert"), Ot(mC, "go-aspect-ratio"), Ot(bC, "go-avatar"), Ot(TC, "go-badge"), Ot(NC, "go-breadcrumb"), Ot(FC, "go-separator"), Ot(LC, "go-skeleton"), Ot(zC, "go-button"), Ot(VC, "go-progress"), Ot(HC, "go-label"), Ot(YC, "go-input-group"), Ot(QC, "go-scroll-area"), Ot(ew, "go-table"), Ot(sw, "go-tabs"), Ot(pw, "go-collapsible"), Ot(Sw, "go-stepper"), Ot(jw, "go-alert-dialog"), Ot(vT, "go-drawer"), Ot(OT, "go-sheet"), Ot(NT, "go-popover"), Ot(RT, "go-hover-card"), Ot(WT, "go-tooltip"), Ot(nE, "go-dropdown-menu"), Ot(vE, "go-context-menu"), Ot(PE, "go-menubar"), Ot(KE, "go-navigation-menu"), Ot(sD, "go-command"), Ot(SO, "go-carousel"), Ot(XO, "go-calendar"), Ot(rk, "go-pagination"), Ot(lk, "go-resizable"), Ot(mk, "go-toggle"), Ot(_k, "go-toggle-group"), Ot(yk, "go-toaster"), Ot($k, "go-sidebar"), Ot(nA, "go-chart"), Ot(aA, "go-data-table"), Ot(dA, "go-form-field"), Ot(fA, "go-spinner"), Ot(LA, "go-field"), Ot(VA, "go-kbd"), Ot(WA, "go-button-group"), Ot(ZA, "go-empty"), Ot(dj, "go-item"), globalThis.goToast = Me;
//#endregion
